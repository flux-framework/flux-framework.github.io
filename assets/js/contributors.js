---
layout: null
---

/* Contributor activity page (d3 v5). Data comes from the static APIs that
   are rendered from Contributor CI results in _data/data. */
(function () {
  "use strict";

  var base = "{{ site.baseurl }}/api/";
  var ORG = "flux-framework/";
  var fmtInt = d3.format(",");
  var fmtShort = d3.format("~s");
  var fmtDate = d3.timeFormat("%b %-d, %Y");
  var fmtMonth = d3.timeFormat("%b %Y");
  var parseDay = d3.timeParse("%Y-%m-%d");

  var tip = d3.select("#cc-tooltip");
  var state = { range: "all" };
  var data = null;

  // ---------------------------------------------------------------- helpers

  function short(repo) { return repo.replace(ORG, ""); }
  function cssVar(name) { return "var(" + name + ")"; }

  function showTip(html) {
    tip.html(html).style("opacity", 1);
    moveTip();
  }
  function moveTip() {
    var e = d3.event;
    if (!e) return;
    var x = e.touches ? e.touches[0].clientX : e.clientX;
    var y = e.touches ? e.touches[0].clientY : e.clientY;
    var node = tip.node();
    var w = node.offsetWidth, h = node.offsetHeight;
    var left = x + 14, top = y - h - 10;
    if (left + w > window.innerWidth - 8) left = x - w - 14;
    if (top < 8) top = y + 16;
    tip.style("left", left + "px").style("top", top + "px");
  }
  function hideTip() { tip.style("opacity", 0); }

  function row(color, label, value) {
    return '<div class="t-row">' + (color ? '<i style="background:' + color + '"></i>' : "") +
      label + ": <b>" + value + "</b></div>";
  }

  function legend(sel, items) {
    d3.select(sel).html(items.map(function (it) {
      return '<span><i style="background:' + it.color + '"></i>' + it.label + "</span>";
    }).join(""));
  }

  function width(sel) {
    return Math.max(280, d3.select(sel).node().getBoundingClientRect().width);
  }

  function svgFor(sel, w, h) {
    d3.select(sel).selectAll("*").remove();
    return d3.select(sel).append("svg").attr("width", w).attr("height", h)
      .attr("viewBox", "0 0 " + w + " " + h);
  }

  // Bar path with 4px rounded data-end and a square baseline end.
  function hbarPath(x0, x1, y, h, r) {
    var w = x1 - x0;
    if (w <= 0) return "";
    r = Math.min(r, w, h / 2);
    return "M" + x0 + "," + y + "H" + (x1 - r) + "Q" + x1 + "," + y + " " + x1 + "," + (y + r) +
      "V" + (y + h - r) + "Q" + x1 + "," + (y + h) + " " + (x1 - r) + "," + (y + h) + "H" + x0 + "Z";
  }
  function vbarPath(x, w, y0, y1, r) {
    // y0 = baseline, y1 = data end (can be above or below baseline)
    var hgt = Math.abs(y1 - y0);
    if (hgt <= 0) return "";
    r = Math.min(r, w / 2, hgt);
    if (y1 < y0) {
      return "M" + x + "," + y0 + "V" + (y1 + r) + "Q" + x + "," + y1 + " " + (x + r) + "," + y1 +
        "H" + (x + w - r) + "Q" + (x + w) + "," + y1 + " " + (x + w) + "," + (y1 + r) + "V" + y0 + "Z";
    }
    return "M" + x + "," + y0 + "V" + (y1 - r) + "Q" + x + "," + y1 + " " + (x + r) + "," + y1 +
      "H" + (x + w - r) + "Q" + (x + w) + "," + y1 + " " + (x + w) + "," + (y1 - r) + "V" + y0 + "Z";
  }

  // ---------------------------------------------------------- data shaping

  // Merge monthly snapshots into one weekly series per repo. Newer snapshots
  // win, because the newest week in any snapshot may still be in progress.
  function stitchHistory(snapshots) {
    function key(s) {
      if (s.snapshot === "latest") return 1e9;
      var p = s.snapshot.split("-");
      return (+p[0]) * 100 + (+p[1]);
    }
    snapshots = snapshots.filter(Boolean).sort(function (a, b) { return key(a) - key(b); });
    var byWeek = {};
    snapshots.forEach(function (s) {
      Object.keys(s.repos || {}).forEach(function (repo) {
        (s.repos[repo] || []).forEach(function (w) {
          var week = Array.isArray(w) ? w[0] : w.week;
          var total = Array.isArray(w) ? w[1] : w.total;
          if (!byWeek[week]) byWeek[week] = {};
          byWeek[week][repo] = total;
        });
      });
    });
    return Object.keys(byWeek).sort().map(function (week) {
      var repos = byWeek[week];
      return {
        date: parseDay(week),
        total: d3.sum(Object.keys(repos), function (r) { return repos[r]; }),
        repos: repos
      };
    });
  }

  function shape(raw) {
    var repos = raw.repos, commits = raw.commits;
    var names = Object.keys(repos);
    var oneYearAgo = d3.timeYear.offset(new Date(), -1);

    var perRepo = names.map(function (name) {
      var r = repos[name];
      var weeks = (commits[name] || []).map(function (w) { return { date: parseDay(w.week), total: w.total }; });
      var rel = ((raw.releases[name] || {}).releases || {}).nodes || [];
      var lines = raw.lines[name] || [];
      var tc = function (k) { return (r[k] && r[k].totalCount) || 0; };
      return {
        name: name,
        short: short(name),
        url: r.url || ("https://github.com/" + name),
        weeks: weeks,
        commits: d3.sum(weeks, function (w) { return w.total; }),
        stars: r.stargazerCount || tc("stargazers"),
        forks: tc("forks"),
        prMerged: tc("pullRequests_Merged"),
        prClosed: tc("pullRequests_Closed"),
        prOpen: tc("pullRequests_Open"),
        issuesOpen: tc("issues_Open"),
        issuesClosed: tc("issues_Closed"),
        added: lines.length ? d3.sum(lines, function (l) { return l[1]; }) : null,
        removed: lines.length ? d3.sum(lines, function (l) { return -l[2]; }) : null,
        releases: rel.map(function (n) {
          return { name: n.name || n.tagName, tag: n.tagName, date: new Date(n.publishedAt), repo: name };
        }).filter(function (n) { return !isNaN(n.date); }),
        language: (r.primaryLanguage || {}).name || ""
      };
    });
    perRepo.forEach(function (p) {
      p.releasesYear = p.releases.filter(function (x) { return x.date >= oneYearAgo; }).length;
    });

    // Lines added / removed, summed across repos per week.
    var linesByWeek = {};
    Object.keys(raw.lines).forEach(function (name) {
      raw.lines[name].forEach(function (l) {
        var k = l[0];
        if (!linesByWeek[k]) linesByWeek[k] = { added: 0, removed: 0 };
        linesByWeek[k].added += l[1];
        linesByWeek[k].removed += l[2]; // negative
      });
    });
    var lines = Object.keys(linesByWeek).sort().map(function (k) {
      return { date: parseDay(k), added: linesByWeek[k].added, removed: linesByWeek[k].removed };
    });

    // Cumulative stars (only star events Contributor CI recorded).
    var starWeeks = {};
    Object.keys(raw.stars).forEach(function (name) {
      raw.stars[name].forEach(function (s) { starWeeks[s.date] = (starWeeks[s.date] || 0) + s.value; });
    });
    var cum = 0;
    var starHistory = Object.keys(starWeeks).sort().map(function (k) {
      cum += starWeeks[k];
      return { date: parseDay(k), added: starWeeks[k], total: cum };
    });

    return {
      repos: perRepo,
      history: stitchHistory(raw.history),
      lines: lines,
      starHistory: starHistory
    };
  }

  // ------------------------------------------------------------ stat tiles

  function drawTiles(d) {
    var R = d.repos;
    var tiles = [
      { label: "Commits", value: d3.sum(R, function (r) { return r.commits; }), note: "past 52 weeks" },
      { label: "Pull requests merged", value: d3.sum(R, function (r) { return r.prMerged; }), note: "all time" },
      { label: "Issues closed", value: d3.sum(R, function (r) { return r.issuesClosed; }), note: "all time" },
      { label: "Releases", value: d3.sum(R, function (r) { return r.releasesYear; }), note: "past 12 months" },
      { label: "Stars", value: d3.sum(R, function (r) { return r.stars; }), note: R.length + " projects" },
      { label: "Forks", value: d3.sum(R, function (r) { return r.forks; }), note: "all projects" }
    ];
    d3.select("#cc-tiles").html(tiles.map(function (t) {
      return '<div class="cc-tile"><div class="label">' + t.label + '</div><div class="value">' +
        fmtInt(t.value) + '</div><div class="note">' + t.note + "</div></div>";
    }).join(""));
  }

  // ------------------------------------------- weekly commit history (line)

  function drawHistory(d) {
    var sel = "#chart-history";
    var series = d.history;
    if (state.range !== "all") series = series.slice(-(+state.range));
    var W = width(sel), H = 280;
    var m = { top: 12, right: 16, bottom: 28, left: 44 };
    var iw = W - m.left - m.right, ih = H - m.top - m.bottom;
    var svg = svgFor(sel, W, H);
    var g = svg.append("g").attr("transform", "translate(" + m.left + "," + m.top + ")");

    var x = d3.scaleTime().domain(d3.extent(series, function (p) { return p.date; })).range([0, iw]);
    var y = d3.scaleLinear().domain([0, d3.max(series, function (p) { return p.total; }) * 1.08 || 1]).nice().range([ih, 0]);

    g.append("g").attr("class", "grid").call(d3.axisLeft(y).ticks(5).tickSize(-iw).tickFormat(fmtShort));
    g.append("g").attr("class", "x-axis").attr("transform", "translate(0," + ih + ")")
      .call(d3.axisBottom(x).ticks(Math.max(3, Math.floor(iw / 110))).tickSizeOuter(0));

    var area = d3.area().curve(d3.curveMonotoneX)
      .x(function (p) { return x(p.date); }).y0(ih).y1(function (p) { return y(p.total); });
    var line = d3.line().curve(d3.curveMonotoneX)
      .x(function (p) { return x(p.date); }).y(function (p) { return y(p.total); });

    g.append("path").datum(series).attr("d", area)
      .style("fill", cssVar("--series-1")).style("opacity", 0.14);
    g.append("path").datum(series).attr("d", line)
      .style("fill", "none").style("stroke", cssVar("--series-1")).style("stroke-width", 2);

    // Direct label on the peak week.
    var peak = d3.max(series, function (p) { return p.total; });
    var peakPt = series.find(function (p) { return p.total === peak; });
    if (peakPt) {
      g.append("text").attr("class", "value-text")
        .attr("x", Math.min(iw - 4, Math.max(4, x(peakPt.date))))
        .attr("y", y(peakPt.total) - 8)
        .attr("text-anchor", x(peakPt.date) > iw - 60 ? "end" : (x(peakPt.date) < 60 ? "start" : "middle"))
        .text("peak " + fmtInt(peak));
    }

    // Crosshair + tooltip
    var cross = g.append("line").attr("class", "crosshair").attr("y1", 0).attr("y2", ih).style("opacity", 0);
    var dot = g.append("circle").attr("r", 5).style("fill", cssVar("--series-1"))
      .style("stroke", cssVar("--surface-1")).style("stroke-width", 2).style("opacity", 0);
    var bis = d3.bisector(function (p) { return p.date; }).left;

    g.append("rect").attr("width", iw).attr("height", ih).style("fill", "transparent")
      .on("mousemove", function () {
        var mx = d3.mouse(this)[0];
        var t = x.invert(mx);
        var i = Math.min(series.length - 1, Math.max(0, bis(series, t)));
        if (i > 0 && (t - series[i - 1].date) < (series[i].date - t)) i -= 1;
        var p = series[i];
        cross.attr("x1", x(p.date)).attr("x2", x(p.date)).style("opacity", 1);
        dot.attr("cx", x(p.date)).attr("cy", y(p.total)).style("opacity", 1);
        var top = Object.keys(p.repos).map(function (r) { return [r, p.repos[r]]; })
          .filter(function (a) { return a[1] > 0; })
          .sort(function (a, b) { return b[1] - a[1]; }).slice(0, 4);
        showTip('<div class="t-title">Week of ' + fmtDate(p.date) + "</div>" +
          row(null, "Commits", fmtInt(p.total)) +
          top.map(function (a) { return '<div class="t-row" style="opacity:.8">' + short(a[0]) + ": " + a[1] + "</div>"; }).join(""));
      })
      .on("mouseleave", function () { cross.style("opacity", 0); dot.style("opacity", 0); hideTip(); });
  }

  // ------------------------------------------------- horizontal bar charts

  function drawHBars(sel, items, valueKey, label) {
    items = items.slice().sort(function (a, b) { return b[valueKey] - a[valueKey]; });
    var W = width(sel), barH = 18, gap = 8;
    var m = { top: 4, right: 48, bottom: 4, left: 120 };
    var H = m.top + m.bottom + items.length * (barH + gap);
    var iw = W - m.left - m.right;
    var svg = svgFor(sel, W, H);
    var g = svg.append("g").attr("transform", "translate(" + m.left + "," + m.top + ")");
    var x = d3.scaleLinear().domain([0, d3.max(items, function (r) { return r[valueKey]; }) || 1]).range([0, iw]);

    var rows = g.selectAll("g.row").data(items).enter().append("g").attr("class", "row")
      .attr("transform", function (r, i) { return "translate(0," + i * (barH + gap) + ")"; });

    rows.append("text").attr("class", "label-text").attr("x", -10).attr("y", barH / 2).attr("dy", "0.35em")
      .attr("text-anchor", "end").text(function (r) { return r.short; });
    rows.append("line").attr("x1", 0).attr("x2", 0).attr("y1", -2).attr("y2", barH + 2).style("stroke", cssVar("--axis"));
    rows.append("path").attr("d", function (r) { return hbarPath(0, Math.max(r[valueKey] ? 2 : 0, x(r[valueKey])), 0, barH, 4); })
      .style("fill", cssVar("--series-1"));
    rows.append("text").attr("class", "value-text").attr("x", function (r) { return x(r[valueKey]) + 6; })
      .attr("y", barH / 2).attr("dy", "0.35em").text(function (r) { return fmtInt(r[valueKey]); });
    rows.append("rect").attr("x", -m.left).attr("width", W).attr("y", -gap / 2).attr("height", barH + gap)
      .style("fill", "transparent")
      .on("mousemove", function (r) { showTip('<div class="t-title">' + r.short + "</div>" + row(cssVar("--series-1"), label, fmtInt(r[valueKey]))); })
      .on("mouseleave", hideTip);
  }

  // -------------------------------------------------- stacked bar charts

  function drawStacked(sel, legendSel, items, keys) {
    legend(legendSel, keys);
    items = items.slice().sort(function (a, b) {
      return d3.sum(keys, function (k) { return b[k.key]; }) - d3.sum(keys, function (k) { return a[k.key]; });
    });
    var W = width(sel), barH = 18, gap = 8;
    var m = { top: 4, right: 52, bottom: 4, left: 120 };
    var H = m.top + m.bottom + items.length * (barH + gap);
    var iw = W - m.left - m.right;
    var svg = svgFor(sel, W, H);
    var g = svg.append("g").attr("transform", "translate(" + m.left + "," + m.top + ")");
    var maxTotal = d3.max(items, function (r) { return d3.sum(keys, function (k) { return r[k.key]; }); }) || 1;
    var x = d3.scaleLinear().domain([0, maxTotal]).range([0, iw]);

    items.forEach(function (r, i) {
      var gy = g.append("g").attr("transform", "translate(0," + i * (barH + gap) + ")");
      gy.append("text").attr("class", "label-text").attr("x", -10).attr("y", barH / 2).attr("dy", "0.35em")
        .attr("text-anchor", "end").text(r.short);
      gy.append("line").attr("x1", 0).attr("x2", 0).attr("y1", -2).attr("y2", barH + 2).style("stroke", cssVar("--axis"));
      var acc = 0;
      var total = d3.sum(keys, function (k) { return r[k.key]; });
      var visible = keys.filter(function (k) { return r[k.key] > 0; });
      visible.forEach(function (k, j) {
        var x0 = x(acc), x1 = x(acc + r[k.key]);
        acc += r[k.key];
        var isLast = j === visible.length - 1;
        // 2px surface gap between segments
        var gx1 = isLast ? x1 : Math.max(x0 + 0.5, x1 - 2);
        var dPath = isLast ? hbarPath(x0, Math.max(x0 + 1, gx1), 0, barH, 4)
          : "M" + x0 + ",0H" + gx1 + "V" + barH + "H" + x0 + "Z";
        gy.append("path").attr("d", dPath).style("fill", k.color)
          .on("mousemove", function () {
            showTip('<div class="t-title">' + r.short + "</div>" +
              keys.map(function (kk) { return row(kk.color, kk.label, fmtInt(r[kk.key])); }).join("") +
              row(null, "Total", fmtInt(total)));
          })
          .on("mouseleave", hideTip);
      });
      gy.append("text").attr("class", "value-text").attr("x", x(total) + 6).attr("y", barH / 2).attr("dy", "0.35em")
        .text(fmtInt(total));
    });
  }

  // ------------------------------------------------------------- heatmap

  function drawHeatmap(d) {
    var sel = "#chart-heatmap";
    var repos = d.repos.slice().sort(function (a, b) { return b.commits - a.commits; });
    var weeks = repos.length ? repos[0].weeks.map(function (w) { return w.date; }) : [];
    var W = width(sel);
    var m = { top: 4, right: 8, bottom: 52, left: 120 };
    var iw = W - m.left - m.right;
    var cell = Math.max(4, Math.floor(iw / Math.max(1, weeks.length)));
    var cellH = 20;
    var H = m.top + m.bottom + repos.length * (cellH + 2);
    var svg = svgFor(sel, W, H);
    var g = svg.append("g").attr("transform", "translate(" + m.left + "," + m.top + ")");

    var maxV = d3.max(repos, function (r) { return d3.max(r.weeks, function (w) { return w.total; }); }) || 1;
    var steps = ["--heat-1", "--heat-2", "--heat-3", "--heat-4", "--heat-5", "--heat-6"];
    var q = d3.scaleQuantize().domain([0, Math.sqrt(maxV)]).range(steps);
    function color(v) { return v <= 0 ? cssVar("--heat-0") : cssVar(q(Math.sqrt(v))); }

    repos.forEach(function (r, i) {
      var gy = g.append("g").attr("transform", "translate(0," + i * (cellH + 2) + ")");
      gy.append("text").attr("class", "label-text").attr("x", -10).attr("y", cellH / 2).attr("dy", "0.35em")
        .attr("text-anchor", "end").text(r.short);
      gy.selectAll("rect").data(r.weeks).enter().append("rect")
        .attr("x", function (w, j) { return j * cell; }).attr("width", Math.max(1, cell - 2))
        .attr("height", cellH).attr("rx", 3)
        .style("fill", function (w) { return color(w.total); })
        .on("mousemove", function (w) {
          showTip('<div class="t-title">' + r.short + "</div>Week of " + fmtDate(w.date) + "<br>" +
            row(null, "Commits", fmtInt(w.total)));
        })
        .on("mouseleave", hideTip);
    });

    // Month labels
    var x = d3.scaleTime().domain([weeks[0], d3.timeWeek.offset(weeks[weeks.length - 1], 1)]).range([0, cell * weeks.length]);
    g.append("g").attr("class", "x-axis").attr("transform", "translate(0," + (repos.length * (cellH + 2)) + ")")
      .call(d3.axisBottom(x).ticks(d3.timeMonth.every(iw < 600 ? 2 : 1)).tickFormat(d3.timeFormat("%b")).tickSizeOuter(0))
      .select(".domain").remove();

    // Scale legend
    var lg = g.append("g").attr("transform", "translate(0," + (repos.length * (cellH + 2) + 30) + ")");
    lg.append("text").attr("class", "value-text").attr("x", 0).attr("y", 9).text("Fewer");
    var all = ["--heat-0"].concat(steps);
    all.forEach(function (s, i) {
      lg.append("rect").attr("x", 40 + i * 16).attr("width", 13).attr("height", 12).attr("rx", 3).style("fill", cssVar(s));
    });
    lg.append("text").attr("class", "value-text").attr("x", 40 + all.length * 16 + 4).attr("y", 9)
      .text("More (max " + fmtInt(maxV) + "/week)");
  }

  // ------------------------------------------- lines added / removed chart

  function drawLines(d) {
    var sel = "#chart-lines";
    var series = d.lines;
    legend("#legend-lines", [
      { color: cssVar("--pos"), label: "Lines added" },
      { color: cssVar("--neg"), label: "Lines removed" }
    ]);
    var W = width(sel), H = 260;
    var m = { top: 14, right: 16, bottom: 28, left: 52 };
    var iw = W - m.left - m.right, ih = H - m.top - m.bottom;
    var svg = svgFor(sel, W, H);
    var g = svg.append("g").attr("transform", "translate(" + m.left + "," + m.top + ")");

    // Clip a handful of huge weeks (vendored code, mass renames) so the rest stay readable.
    var mags = series.map(function (p) { return Math.max(p.added, -p.removed); }).sort(d3.ascending);
    var cap = Math.max(10, (d3.quantile(mags, 0.9) || 0) * 1.6);
    var maxAdd = Math.min(cap, d3.max(series, function (p) { return p.added; }) || 1);
    var maxRem = Math.min(cap, d3.max(series, function (p) { return -p.removed; }) || 1);

    var x = d3.scaleBand().domain(series.map(function (p) { return +p.date; })).range([0, iw]).paddingInner(0.2);
    var y = d3.scaleLinear().domain([-maxRem, maxAdd]).nice().range([ih, 0]);
    var bw = x.bandwidth();

    g.append("g").attr("class", "grid").call(d3.axisLeft(y).ticks(6).tickSize(-iw).tickFormat(function (v) { return fmtShort(Math.abs(v)); }));
    var xt = d3.scaleTime().domain(d3.extent(series, function (p) { return p.date; })).range([bw / 2, iw - bw / 2]);
    g.append("g").attr("class", "x-axis").attr("transform", "translate(0," + ih + ")")
      .call(d3.axisBottom(xt).ticks(Math.max(3, Math.floor(iw / 100))).tickFormat(d3.timeFormat("%b %Y")).tickSizeOuter(0))
      .select(".domain").remove();

    var bars = g.selectAll("g.wk").data(series).enter().append("g").attr("class", "wk")
      .attr("transform", function (p) { return "translate(" + x(+p.date) + ",0)"; });
    bars.append("path").attr("d", function (p) { return vbarPath(0, bw, y(0), y(Math.min(p.added, y.domain()[1])), 3); })
      .style("fill", cssVar("--pos"));
    bars.append("path").attr("d", function (p) { return vbarPath(0, bw, y(0), y(Math.max(p.removed, y.domain()[0])), 3); })
      .style("fill", cssVar("--neg"));
    bars.filter(function (p) { return p.added > y.domain()[1]; }).append("text").attr("class", "value-text")
      .attr("x", bw / 2).attr("y", -3).attr("text-anchor", "middle").text("▲");
    bars.filter(function (p) { return p.removed < y.domain()[0]; }).append("text").attr("class", "value-text")
      .attr("x", bw / 2).attr("y", ih + 11).attr("text-anchor", "middle").text("▼");
    g.append("line").attr("x1", 0).attr("x2", iw).attr("y1", y(0)).attr("y2", y(0)).style("stroke", cssVar("--axis"));

    bars.append("rect").attr("x", -1).attr("width", bw + 2).attr("height", ih).style("fill", "transparent")
      .on("mousemove", function (p) {
        showTip('<div class="t-title">Week of ' + fmtDate(p.date) + "</div>" +
          row(cssVar("--pos"), "Added", fmtInt(p.added)) +
          row(cssVar("--neg"), "Removed", fmtInt(-p.removed)) +
          row(null, "Net", (p.added + p.removed >= 0 ? "+" : "") + fmtInt(p.added + p.removed)));
      })
      .on("mouseleave", hideTip);
  }

  // ---------------------------------------------------- release timeline

  function drawReleases(d) {
    var sel = "#chart-releases";
    var repos = d.repos.filter(function (r) { return r.releases.length; })
      .sort(function (a, b) { return b.releases.length - a.releases.length; });
    var all = [].concat.apply([], repos.map(function (r) { return r.releases; }));
    var W = width(sel), rowH = 26;
    var m = { top: 6, right: 16, bottom: 28, left: 120 };
    var H = m.top + m.bottom + repos.length * rowH;
    var iw = W - m.left - m.right;
    var svg = svgFor(sel, W, H);
    var g = svg.append("g").attr("transform", "translate(" + m.left + "," + m.top + ")");
    if (!all.length) return;

    var minDate = d3.min(all, function (r) { return r.date; });
    var x = d3.scaleTime().domain([minDate, new Date()]).range([0, iw]).nice();
    g.append("g").attr("class", "grid").attr("transform", "translate(0," + (repos.length * rowH) + ")")
      .call(d3.axisBottom(x).ticks(Math.max(3, Math.floor(iw / 90))).tickSize(-repos.length * rowH).tickSizeOuter(0));

    repos.forEach(function (r, i) {
      var gy = g.append("g").attr("transform", "translate(0," + (i * rowH + rowH / 2) + ")");
      gy.append("text").attr("class", "label-text").attr("x", -10).attr("dy", "0.35em").attr("text-anchor", "end")
        .text(r.short);
      gy.selectAll("circle").data(r.releases).enter().append("circle")
        .attr("cx", function (rel) { return x(rel.date); }).attr("r", 5)
        .style("fill", cssVar("--series-1")).style("stroke", cssVar("--surface-1")).style("stroke-width", 2)
        .on("mousemove", function (rel) {
          d3.select(this).attr("r", 7);
          showTip('<div class="t-title">' + rel.name + "</div>" + short(rel.repo) + " · " + fmtDate(rel.date));
        })
        .on("mouseleave", function () { d3.select(this).attr("r", 5); hideTip(); });
    });
  }

  // ---------------------------------------------------- stars over time

  function drawStarHistory(d) {
    var sel = "#chart-stars-history";
    var series = d.starHistory;
    if (!series.length) return;
    var W = width(sel), H = 240;
    var m = { top: 16, right: 16, bottom: 28, left: 44 };
    var iw = W - m.left - m.right, ih = H - m.top - m.bottom;
    var svg = svgFor(sel, W, H);
    var g = svg.append("g").attr("transform", "translate(" + m.left + "," + m.top + ")");
    var x = d3.scaleTime().domain([series[0].date, new Date()]).range([0, iw]);
    var y = d3.scaleLinear().domain([0, series[series.length - 1].total * 1.08]).nice().range([ih, 0]);
    g.append("g").attr("class", "grid").call(d3.axisLeft(y).ticks(5).tickSize(-iw).tickFormat(fmtShort));
    g.append("g").attr("class", "x-axis").attr("transform", "translate(0," + ih + ")")
      .call(d3.axisBottom(x).ticks(Math.max(3, Math.floor(iw / 90))).tickSizeOuter(0));

    var pts = series.concat([{ date: new Date(), total: series[series.length - 1].total, added: 0 }]);
    var line = d3.line().curve(d3.curveStepAfter).x(function (p) { return x(p.date); }).y(function (p) { return y(p.total); });
    var area = d3.area().curve(d3.curveStepAfter).x(function (p) { return x(p.date); }).y0(ih).y1(function (p) { return y(p.total); });
    g.append("path").datum(pts).attr("d", area).style("fill", cssVar("--series-1")).style("opacity", 0.12);
    g.append("path").datum(pts).attr("d", line).style("fill", "none").style("stroke", cssVar("--series-1")).style("stroke-width", 2);
    var last = pts[pts.length - 1];
    g.append("text").attr("class", "value-text").attr("x", iw).attr("y", y(last.total) - 8).attr("text-anchor", "end")
      .text(fmtInt(last.total) + " stars");

    var cross = g.append("line").attr("class", "crosshair").attr("y1", 0).attr("y2", ih).style("opacity", 0);
    var dot = g.append("circle").attr("r", 5).style("fill", cssVar("--series-1"))
      .style("stroke", cssVar("--surface-1")).style("stroke-width", 2).style("opacity", 0);
    var bis = d3.bisector(function (p) { return p.date; }).right;
    g.append("rect").attr("width", iw).attr("height", ih).style("fill", "transparent")
      .on("mousemove", function () {
        var t = x.invert(d3.mouse(this)[0]);
        var i = Math.max(0, bis(series, t) - 1);
        var p = series[i];
        cross.attr("x1", x(t)).attr("x2", x(t)).style("opacity", 1);
        dot.attr("cx", x(t)).attr("cy", y(p.total)).style("opacity", 1);
        showTip('<div class="t-title">' + fmtDate(t) + "</div>" + row(null, "Total stars", fmtInt(p.total)));
      })
      .on("mouseleave", function () { cross.style("opacity", 0); dot.style("opacity", 0); hideTip(); });
  }

  // ---------------------------------------------------------------- table

  function drawTable(d) {
    var cols = [
      ["Project", function (r) { return '<a href="' + r.url + '" target="_blank">' + r.short + "</a>"; }],
      ["Commits (52w)", function (r) { return fmtInt(r.commits); }],
      ["Lines +", function (r) { return r.added == null ? "–" : fmtInt(r.added); }],
      ["Lines −", function (r) { return r.removed == null ? "–" : fmtInt(r.removed); }],
      ["PRs merged", function (r) { return fmtInt(r.prMerged); }],
      ["PRs open", function (r) { return fmtInt(r.prOpen); }],
      ["Issues closed", function (r) { return fmtInt(r.issuesClosed); }],
      ["Issues open", function (r) { return fmtInt(r.issuesOpen); }],
      ["Releases", function (r) { return fmtInt(r.releases.length); }],
      ["Stars", function (r) { return fmtInt(r.stars); }],
      ["Forks", function (r) { return fmtInt(r.forks); }]
    ];
    var repos = d.repos.slice().sort(function (a, b) { return b.commits - a.commits; });
    d3.select("#cc-table").html("<table><thead><tr>" + cols.map(function (c) { return "<th>" + c[0] + "</th>"; }).join("") +
      "</tr></thead><tbody>" + repos.map(function (r) {
        return "<tr>" + cols.map(function (c) { return "<td>" + c[1](r) + "</td>"; }).join("") + "</tr>";
      }).join("") + "</tbody></table>");
  }

  // ----------------------------------------------------------------- main

  function drawAll() {
    if (!data) return;
    drawTiles(data);
    drawHistory(data);
    drawHBars("#chart-commits-repo", data.repos, "commits", "Commits (52 weeks)");
    drawHBars("#chart-stars-repo", data.repos, "stars", "Stars");
    drawHeatmap(data);
    drawLines(data);
    drawStacked("#chart-prs", "#legend-prs", data.repos, [
      { key: "prMerged", label: "Merged", color: cssVar("--series-1") },
      { key: "prClosed", label: "Closed without merge", color: cssVar("--series-2") },
      { key: "prOpen", label: "Open", color: cssVar("--series-3") }
    ]);
    drawStacked("#chart-issues", "#legend-issues", data.repos, [
      { key: "issuesClosed", label: "Closed", color: cssVar("--series-1") },
      { key: "issuesOpen", label: "Open", color: cssVar("--series-2") }
    ]);
    drawReleases(data);
    drawStarHistory(data);
    drawTable(data);
  }

  d3.selectAll("#cc-range button").on("click", function () {
    state.range = this.getAttribute("data-range");
    d3.selectAll("#cc-range button").classed("active", false);
    d3.select(this).classed("active", true);
    drawHistory(data);
  });

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawAll, 150);
  });

  function get(name) {
    return d3.json(base + name).catch(function (err) {
      console.warn("Could not load " + name, err);
      return null;
    });
  }

  Promise.all([
    get("repos.json"), get("commits.json"), get("lines.json"), get("stars.json"),
    get("releases.json"), get("commits-history.json")
  ]).then(function (res) {
    var raw = {
      repos: res[0] || {}, commits: res[1] || {}, lines: res[2] || {}, stars: res[3] || {},
      releases: res[4] || {}, history: res[5] || [{ snapshot: "latest", repos: res[1] || {} }]
    };
    data = shape(raw);
    drawAll();
  });

  // Expose for testing
  if (typeof window !== "undefined") window.__contrib = { shape: shape, stitchHistory: stitchHistory };
})();
