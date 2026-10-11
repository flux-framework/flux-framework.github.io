---
title: flux-accounting v0.62.0
date: 2026-10-07 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.62.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.62.0/flux-accounting-0.62.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.62.0 - 2026-10-07
-------------------------------------------

#### Features

* `edit-all-users`: add `--[add|delete]-queue optional arguments ([#957](https://github.com/flux-framework/flux-accounting/issues/957))

* `update-usage`: aggregate project usage during a usage update ([#960](https://github.com/flux-framework/flux-accounting/issues/960))

* resource-quotas: config and enforcement ([#962](https://github.com/flux-framework/flux-accounting/issues/962))

* usage: abstract usage calculation into classes ([#970](https://github.com/flux-framework/flux-accounting/issues/970))

#### Fixes

* edit-config: make usage-bin reconfiguration atomic ([#961](https://github.com/flux-framework/flux-accounting/issues/961))

* bindings: reorganize Python accounting module ([#965](https://github.com/flux-framework/flux-accounting/issues/965))

* plugin: prepare checks for limits that span associations ([#966](https://github.com/flux-framework/flux-accounting/issues/966))

* plugin: switch order of if-conditional in `try_release_held_job ()` ([#968](https://github.com/flux-framework/flux-accounting/issues/968))

* configure: use AC_ARG_ENABLE for docs option ([#969](https://github.com/flux-framework/flux-accounting/issues/969))

* JobUsageCalculator: extract bank usage aggregation to module-level functions
([#974](https://github.com/flux-framework/flux-accounting/issues/974))

* plugin: change `max-sched-[nodes|cores]-per-assoc` to keep charge until
INACTIVE ([#977](https://github.com/flux-framework/flux-accounting/issues/977))

* plugin: transfer counters on job update, track sched-related counters more
accurately by using an internal flag ([#983](https://github.com/flux-framework/flux-accounting/issues/983))

#### Testsuite

* github: bump the github-actions group with 2 updates ([#955](https://github.com/flux-framework/flux-accounting/issues/955))

* github: bump crate-ci/typos from 1.50.0 to 1.50.3 in the github-actions group
([#976](https://github.com/flux-framework/flux-accounting/issues/976))

* t: make association setup more robust ([#979](https://github.com/flux-framework/flux-accounting/issues/979))
