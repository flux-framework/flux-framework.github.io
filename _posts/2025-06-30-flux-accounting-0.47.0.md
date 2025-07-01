---
title: flux-accounting v0.47.0
date: 2025-06-30 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.47.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.47.0/flux-accounting-0.47.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.47.0 - 2025-06-30
-------------------------------------------

#### Features

* plugin: enforce max resource limits per-association ([#562](https://github.com/flux-framework/flux-accounting/issues/562))

* database: add new table to store priority factors and their weights ([#665](https://github.com/flux-framework/flux-accounting/issues/665))

* plugin: unpack priority factor weights from database ([#670](https://github.com/flux-framework/flux-accounting/issues/670))

* plugin: add weight for `urgency` factor, update docs with new equation ([#673](https://github.com/flux-framework/flux-accounting/issues/673))

* commands: add new `jobs` command to view priority breakdowns of jobs ([#674](https://github.com/flux-framework/flux-accounting/issues/674))

* database: add graph commands for displaying job usage values for
associations, banks ([#677](https://github.com/flux-framework/flux-accounting/issues/677))

#### Fixes

* flux-accounting service: use `.get()` instead of direct key access ([#653](https://github.com/flux-framework/flux-accounting/issues/653))

* update-usage: remove extra `.commit()` from helper function ([#675](https://github.com/flux-framework/flux-accounting/issues/675))

* job-usage update: move update out of flux-accounting service and into own
script ([#657](https://github.com/flux-framework/flux-accounting/issues/657))

#### Documentation

* doc: add `man(1)` pages for priority factor commands ([#672](https://github.com/flux-framework/flux-accounting/issues/672))

* doc: add new "Limits" page ([#667](https://github.com/flux-framework/flux-accounting/issues/667))

* doc: add `man(1)` page for `view-job-records` ([#669](https://github.com/flux-framework/flux-accounting/issues/669))

* doc: update top-level flux-account man page with project command links ([#668](https://github.com/flux-framework/flux-accounting/issues/668))
