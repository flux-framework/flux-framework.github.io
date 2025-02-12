---
title: flux-accounting v0.42.0
date: 2025-02-11 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.42.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.42.0/flux-accounting-0.42.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.42.0 - 2025-02-11
-------------------------------------------

#### Fixes

* python: use column names when accessing results of a query instead of row
indices ([#579](https://github.com/flux-framework/flux-accounting/issues/579))

* `update-fshare`: change job usage variable from 32-bit `int` to `double`
([#581](https://github.com/flux-framework/flux-accounting/issues/581))

#### Features

* doc: add man() page support, entries for DB administration subcommands
([#538](https://github.com/flux-framework/flux-accounting/issues/538))

* `formatter`: add new `JobsFormatter` class, restructure view-job-records to
use new class ([#563](https://github.com/flux-framework/flux-accounting/issues/563))
