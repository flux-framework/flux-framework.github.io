---
title: flux-accounting v0.58.0
date: 2026-06-04 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.58.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.58.0/flux-accounting-0.58.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.58.0 - 2026-06-02
-------------------------------------------

#### Features

* `view-bank`: add `active` column, optional argument to filter for only
active users ([#862](https://github.com/flux-framework/flux-accounting/issues/862))

* database: add new per-queue property for max resources in SCHED state ([#869](https://github.com/flux-framework/flux-accounting/issues/869))

#### Fixes

* `view-job-records`: add dynamic width sizing for columns ([#857](https://github.com/flux-framework/flux-accounting/issues/857))

* python: use `INTEGER_MAX` in bindings in place of raw value ([#870](https://github.com/flux-framework/flux-accounting/issues/870))

* commands: add missing shebangs ([#873](https://github.com/flux-framework/flux-accounting/issues/873))

* plugin: add pending-offset limit checks when potentially releasing jobs
([#875](https://github.com/flux-framework/flux-accounting/issues/875))

* plugin: `goto error` on unpack fail instead of continuing to initialize
`queues` map ([#876](https://github.com/flux-framework/flux-accounting/issues/876))

* `data_reader_db`: fix job usage overflow on very large job usage values
([#879](https://github.com/flux-framework/flux-accounting/issues/879))

* plugin: miscellaneous fixes to releasing jobs in SCHED state ([#880](https://github.com/flux-framework/flux-accounting/issues/880))

#### Testsuite

* `docker-run-checks.sh`: use `el10` by default

* github: bump the github-actions group with 2 updates ([#863](https://github.com/flux-framework/flux-accounting/issues/863))

* github: bump crate-ci/typos from 1.46.0 to 1.47.0 in the github-actions
group ([#877](https://github.com/flux-framework/flux-accounting/issues/877))
