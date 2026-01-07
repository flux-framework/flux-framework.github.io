---
title: flux-accounting v0.55.0
date: 2026-01-06 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.55.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.55.0/flux-accounting-0.55.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.55.0 - 2026-01-06
-------------------------------------------

#### Fixes

* plugin: fix valgrind "Conditional jump or move depends on uninitialized
values" error ([#791](https://github.com/flux-framework/flux-accounting/issues/791))

* plugin: check `held_jobs` vector before calling `check_and_release_held_jobs ()` ([#796](https://github.com/flux-framework/flux-accounting/issues/796))

#### Documentation

* doc: fix use of `-J` option in job usage factor example ([#797](https://github.com/flux-framework/flux-accounting/issues/797))

* doc: update accounting guide with new table ([#798](https://github.com/flux-framework/flux-accounting/issues/798))
