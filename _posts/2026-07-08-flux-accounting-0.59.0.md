---
title: flux-accounting v0.59.0
date: 2026-07-08 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.59.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.59.0/flux-accounting-0.59.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.59.0 - 2026-07-06
-------------------------------------------

#### Features

* add bindings, commands for interacting with config_table ([#881](https://github.com/flux-framework/flux-accounting/issues/881))

* database: add new table to store job usage factors ([#882](https://github.com/flux-framework/flux-accounting/issues/882))

* job usage: use new table for usage calculation, decay ([#883](https://github.com/flux-framework/flux-accounting/issues/883))

* job usage: add reconfiguration support ([#887](https://github.com/flux-framework/flux-accounting/issues/887))

* edit-user: add incremental queue management to command ([#892](https://github.com/flux-framework/flux-accounting/issues/892))

* plugin: add per-association dependency for max resources in SCHED state in a
queue ([#871](https://github.com/flux-framework/flux-accounting/issues/871))

#### Fixes

* user_subcommands: don't catch and re-raise `ValueError` for
`validate_queue()`, `validate_project()` ([#891](https://github.com/flux-framework/flux-accounting/issues/891))

#### Testsuite

* t1011: improve job usage check in tests ([#886](https://github.com/flux-framework/flux-accounting/issues/886))

* github: bump the github-actions group with 4 updates ([#888](https://github.com/flux-framework/flux-accounting/issues/888))
