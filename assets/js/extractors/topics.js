---
layout: null
---

/* Creates word cloud visualization for webpage */
function draw_cloud_topics(areaID, repoNameWOwner, width, height) {

    width = width || stdTotalWidth
    height = height || stdTotalHeight

    // load data file, process data, and draw visualization
    var url = '{{ site.baseurl }}/api/topics.json';
    var files = [url];
    Promise.all(files.map(url => d3.json(url))).then(values => {
        var data = reformatData({"data": values[0]});
        drawCloud(data, areaID, width, height);
    });

    // Draw cloud from data
    function drawCloud(data, areaID, width, height) {
        var graphHeader = 'Flux Framework Topics';

        var wordScale = d3
            .scaleLinear()
            .domain([
                0,
                d3.max(data, function(d) {
                    return d.value;
                })
            ])
            .range([12, 60]);

        var fill = d3.scaleOrdinal(['#daa6d5', '#d69dd1', '#ac93cc', '#8988c7', '#7d7cc1', '#706fbb', '#4c4b63', '#4e5a84', '#5069a4', '#5386e4'])

        var margin = { top: stdMargin.top, right: stdMargin.right / 2, bottom: stdMargin.bottom / 2, left: stdMargin.left / 2 },
            width = stdTotalWidth - margin.left - margin.right,
            height = stdTotalHeight - margin.top - margin.bottom;

        var layout = d3.layout
            .cloud()
            .size([width, height])
            .words(
                data.map(function(d) {
                    return { text: d.name, size: wordScale(d.value) };
                })
            )
            .padding(5)
            .rotate(function() {
                return ~~(Math.random() * 2) * 90;
            })
            .fontSize(function(d) {
                return d.size;
            })
            .on('end', draw);

        layout.start();

        // Add title
        d3.select(areaID)
            .append('text')
            .attr('class', 'graphtitle')
            .attr('x', margin.left + width / 2)
            .attr('y', margin.top - margin.top / 3)
            .attr('text-anchor', 'middle')
            .text(graphHeader);

        function draw(words) {
            var wordCloud = d3
                .select(areaID)
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('width', width)
                .attr('height', height)
                .attr('transform', 'translate(' + (width / 2 + margin.left) + ',' + (height / 2 + margin.top) + ')')
                .selectAll('text')
                .data(words)
                .enter()
                .append('text')
                .attr('class', 'cloudtext')
                .style('font-size', function(d) {
                    return d.size + 'px';
                })
                .style('fill', function(d, i) {
                    return fill(d.size);
                })
                .attr('text-anchor', 'middle')
                .attr('transform', function(d) {
                    return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
                })
                .text(function(d) {
                    return d.text;
                });
        }
    }

    // Turn json obj into desired word list
    function reformatData(obj) {
        var wordDict = {};
        var repos = repoNameWOwner == null ? Object.keys(obj['data']) : [repoNameWOwner];
        repos.forEach(function(repo) {
            if (obj['data'].hasOwnProperty(repo)) {
                var topicNodes = obj['data'][repo]['repositoryTopics']['nodes'];
                for (var i = 0; i < topicNodes.length; i++) {
                    var aWord = topicNodes[i]['topic']['name'];
                    if (!Object.keys(wordDict).contains(aWord)) {
                        wordDict[aWord] = 0;
                    }
                    wordDict[aWord] += 1;
                }
            }
        });
        var data = [];
        for (var aWord in wordDict) {
            if (wordDict.hasOwnProperty(aWord)) {
                var datpair = { name: aWord, value: wordDict[aWord] };
                data.push(datpair);
            }
        }
        // Prioritize highest counts
        data.sort((a, b) => (a.value < b.value ? 1 : a.value > b.value ? -1 : 0));
        return data;
    }
}
