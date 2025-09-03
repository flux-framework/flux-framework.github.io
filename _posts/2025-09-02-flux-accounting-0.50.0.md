---
title: flux-accounting v0.50.0
date: 2025-09-02 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.50.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.50.0/flux-accounting-0.50.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.50.0 - 2025-09-02
-------------------------------------------

#### Fixes

* plugin: improve error message context in job.validate ([#712](https://github.com/flux-framework/flux-accounting/issues/712))

* cmd: remove `--output-file` argument ([#716](https://github.com/flux-framework/flux-accounting/issues/716))

* formatter: remove `HierarchyFormatter` class ([#717](https://github.com/flux-framework/flux-accounting/issues/717))

* `update-fshare`: wrap `UPDATE`s in single transaction, enable `PRAGMA`s to
enable concurrency ([#720](https://github.com/flux-framework/flux-accounting/issues/720))

* `scrub-old-jobs`: add `0` return code on successful runs of
`scrub_old_jobs()` ([#721](https://github.com/flux-framework/flux-accounting/issues/721))

* `update-usage`: condense `SELECT` query to fetch recent job usage factor, use
row names, drop unused function arg ([#722](https://github.com/flux-framework/flux-accounting/issues/722))

* `update-usage`: remove extra `SELECT` query in favor of retrieving past job
usage information beforehand ([#723](https://github.com/flux-framework/flux-accounting/issues/723))

* `update-usage`: remove `SELECT` query on `jobs` table for every association
([#725](https://github.com/flux-framework/flux-accounting/issues/725))

* `update-usage`: add `.rollback()` in case of error ([#726](https://github.com/flux-framework/flux-accounting/issues/726))

* github: update crate-ci version ([#727](https://github.com/flux-framework/flux-accounting/issues/727))

#### Features

* `jobs`: add duration fields to `jobs` table, return both requested and actual
duration in `view-job-records` ([#718](https://github.com/flux-framework/flux-accounting/issues/718))

* `view-job-records`: add filters for requested duration and actual duration in
`jobs` table ([#719](https://github.com/flux-framework/flux-accounting/issues/719))

* `view-bank`: add `-c/--concise` option ([#730](https://github.com/flux-framework/flux-accounting/issues/730))

* python: add general utility file for duplicate function definitions, general
helper functions ([#731](https://github.com/flux-framework/flux-accounting/issues/731))

#### Testsuite

* testsuite: don't load deprecated barrier module ([#724](https://github.com/flux-framework/flux-accounting/issues/724))
