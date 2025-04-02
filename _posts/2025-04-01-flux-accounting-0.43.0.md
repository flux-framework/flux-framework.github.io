---
title: flux-accounting v0.43.0
date: 2025-04-01 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.43.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.43.0/flux-accounting-0.43.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.43.0 - 2025-04-01
-------------------------------------------

#### Fixes

* fair-share calculation: change `shares`, `usage` types to more appropriate
types ([#585](https://github.com/flux-framework/flux-accounting/issues/585))

* plugin: return more specific error messages when updating bank attribute
([#590](https://github.com/flux-framework/flux-accounting/issues/590))

* `apply_decay_factor ()`: fix iteration through usage periods, actually
`commit` SQL statements ([#594](https://github.com/flux-framework/flux-accounting/issues/594))

* mf_priority: update jj library from flux-core ([#603](https://github.com/flux-framework/flux-accounting/issues/603))

* plugin: clean up error handling, comments in `job.state.depend` ([#605](https://github.com/flux-framework/flux-accounting/issues/605))

#### Features

* plugin: add enforcement of max running jobs limit for a queue per-association
([#491](https://github.com/flux-framework/flux-accounting/issues/491))

* python: create new `QueueFormatter` class, refactor `view_queue()` to use new
class ([#586](https://github.com/flux-framework/flux-accounting/issues/586))

* cmd: add `list-queues` command ([#588](https://github.com/flux-framework/flux-accounting/issues/588))

* cmd: add new `list-users` command ([#597](https://github.com/flux-framework/flux-accounting/issues/597))

* `view-*`/`list-*` commands: add `-o/--format` optional argument ([#600](https://github.com/flux-framework/flux-accounting/issues/600))

* bindings: add `ProjectFormatter` subclass, `-o/--format` options to
`view-project`/`list-projects` ([#602](https://github.com/flux-framework/flux-accounting/issues/602))

#### Testsuite

* ci: update Ubuntu version for GitHub actions ([#584](https://github.com/flux-framework/flux-accounting/issues/584))

#### Documentation

* doc: add health/sanity checklist for flux-accounting ([#592](https://github.com/flux-framework/flux-accounting/issues/592))
