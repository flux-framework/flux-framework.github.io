---
title: flux-accounting v0.61.0
date: 2026-09-01 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.61.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.61.0/flux-accounting-0.61.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.61.0 - 2026-09-01
-------------------------------------------

#### Features

* database: add new `max-[nodes|cores]` per-queue option ([#924](https://github.com/flux-framework/flux-accounting/issues/924))

* feat: toml config for accounting ([#946](https://github.com/flux-framework/flux-accounting/issues/946))

* plugin: Resource quota for flux accounting ([#952](https://github.com/flux-framework/flux-accounting/issues/952))

* `edit-all-users`: add `--[add|delete]-queue` optional arguments ([#957](https://github.com/flux-framework/flux-accounting/issues/957))

#### Fixes

* `edit-queue`: default to `None` instead of `INTEGER_MAX` ([#926](https://github.com/flux-framework/flux-accounting/issues/926))

* plugin: reuse `load_* ()` functions in RPC handlers ([#935](https://github.com/flux-framework/flux-accounting/issues/935))

* update-db: improve efficiency of updates with large databases ([#936](https://github.com/flux-framework/flux-accounting/issues/936))

* plugin: enforce `max-resources-queue` dependency on jobs in SCHED + RUN
([#937](https://github.com/flux-framework/flux-accounting/issues/937))

* plugin: only pack fair-share if it's changed ([#940](https://github.com/flux-framework/flux-accounting/issues/940))

* dev: organize vscode containers ([#949](https://github.com/flux-framework/flux-accounting/issues/949))

* jj: generalize to use resource map ([#951](https://github.com/flux-framework/flux-accounting/issues/951))

#### Testsuite

* ci: update black and add python version matrix ([#943](https://github.com/flux-framework/flux-accounting/issues/943))

* github: bump the github-actions group with 2 updates ([#955](https://github.com/flux-framework/flux-accounting/issues/955))
