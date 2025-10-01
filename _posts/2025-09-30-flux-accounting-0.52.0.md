---
title: flux-accounting v0.52.0
date: 2025-09-30 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.52.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.52.0/flux-accounting-0.52.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.52.0 - 2025-09-30
-------------------------------------------

#### Fixes

* `view-user`/`edit-user`: use `"unlimited"` to display and set `max_nodes` and
`max_cores` to their default values ([#751](https://github.com/flux-framework/flux-accounting/issues/751))

* `update-usage`: add `-v/--verbose` option ([#753](https://github.com/flux-framework/flux-accounting/issues/753))

* plugin: check dependencies of held jobs after `flux account-priority-update`
([#752](https://github.com/flux-framework/flux-accounting/issues/752))

* plugin: remove job from `held_jobs` if cancelled ([#765](https://github.com/flux-framework/flux-accounting/issues/765))

##### Features

* plugin: add more information returned in output of `flux jobtap query` ([#737](https://github.com/flux-framework/flux-accounting/issues/737))

* util: add `parse_timestamp()` function ([#740](https://github.com/flux-framework/flux-accounting/issues/740))

* `jobs` command: add more options to filter jobs by ([#741](https://github.com/flux-framework/flux-accounting/issues/741))

* `view-job-records`: add filter for duration delta of jobs ([#742](https://github.com/flux-framework/flux-accounting/issues/742))

* `list-users`: extend command to search for multiple values per filter ([#745](https://github.com/flux-framework/flux-accounting/issues/745))

#### Documentation

* doc: expand example job priority calculation ([#747](https://github.com/flux-framework/flux-accounting/issues/747))

#### Testsuite

* testsuite: stop using `flux job cancelall` ([#743](https://github.com/flux-framework/flux-accounting/issues/743))

* t1043: add `wait-event` for jobs after cancelling ([#746](https://github.com/flux-framework/flux-accounting/issues/746))

* mergify: disable temporary PR branches ([#762](https://github.com/flux-framework/flux-accounting/issues/762))

* mergify: remove queue_conditions, status-success checks ([#767](https://github.com/flux-framework/flux-accounting/issues/767))
