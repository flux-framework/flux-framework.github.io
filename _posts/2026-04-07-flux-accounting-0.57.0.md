---
title: flux-accounting v0.57.0
date: 2026-04-07 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.57.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.57.0/flux-accounting-0.57.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.57.0 - 2026-04-07
-------------------------------------------

#### Fixes

* priority-update: add max_sched_jobs field ([#823](https://github.com/flux-framework/flux-accounting/issues/823))

* `view-job-records`: change default job ID format to f58 ([#824](https://github.com/flux-framework/flux-accounting/issues/824))

* edit-factor: add the possibility to edit the urgency weight ([#828](https://github.com/flux-framework/flux-accounting/issues/828))

* edit-bank: fix `ValueError` message when trying to edit a bank's shares to
`<= 0` ([#830](https://github.com/flux-framework/flux-accounting/issues/830))

#### Features

* database: add `max_sched_jobs` property for queues in flux-accounting DB
([#837](https://github.com/flux-framework/flux-accounting/issues/837))

* plugin: add limit of max number of jobs in SCHED state per-queue ([#840](https://github.com/flux-framework/flux-accounting/issues/840))

#### Documentation

* doc: add link to HPSF presentation ([#839](https://github.com/flux-framework/flux-accounting/issues/839))

#### Testsuite

* ci: upgrade actions to v5 ([#826](https://github.com/flux-framework/flux-accounting/issues/826))

* docker: add `noble` Dockerfile to CI ([#832](https://github.com/flux-framework/flux-accounting/issues/832))

* t: add valgrind suppression ([#833](https://github.com/flux-framework/flux-accounting/issues/833))

* .github: update tarball release GitHub actions version ([#834](https://github.com/flux-framework/flux-accounting/issues/834))

* valgrind.supp: generalize suppression for mem leak ([#835](https://github.com/flux-framework/flux-accounting/issues/835))

* t: just add entire `expected/` directory ([#836](https://github.com/flux-framework/flux-accounting/issues/836))

* t: use format string for comparing output in `t1043-view-jobs-by-bank.t` 
([#841](https://github.com/flux-framework/flux-accounting/issues/841))
