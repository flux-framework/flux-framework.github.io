---
title: flux-accounting v0.60.0
date: 2026-08-04 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.60.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.60.0/flux-accounting-0.60.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.60.0 - 2026-08-04
-------------------------------------------

#### Features

* plugin: add option to toggle rejecting unknown queues during job validation
([#913](https://github.com/flux-framework/flux-accounting/issues/913))

* commands: add fair-share emulator ([#917](https://github.com/flux-framework/flux-accounting/issues/917))

* `export-db`: add `-F/--fairshare-emulate` option ([#918](https://github.com/flux-framework/flux-accounting/issues/918))

#### Fixes

* `update-db`: add logging infrastructure ([#907](https://github.com/flux-framework/flux-accounting/issues/907))

* `edit-config`: remove confirmation prompt ([#912](https://github.com/flux-framework/flux-accounting/issues/912))

* `update-db`: improve `update_columns()`, add more logging during database
update ([#914](https://github.com/flux-framework/flux-accounting/issues/914))

* `update-db`: add copy of original DB to a `.backup` file ([#916](https://github.com/flux-framework/flux-accounting/issues/916))

#### Testsuite

* t: add tests for managing unknown queues ([#910](https://github.com/flux-framework/flux-accounting/issues/910))

* github: bump the github-actions group with 2 updates ([#919](https://github.com/flux-framework/flux-accounting/issues/919))

#### Documentation

* doc: update reference to new usage factor table, add new section on
customizing job usage calculation ([#906](https://github.com/flux-framework/flux-accounting/issues/906))

* flux-accounting guide: change queue access policy note to warning ([#911](https://github.com/flux-framework/flux-accounting/issues/911))
