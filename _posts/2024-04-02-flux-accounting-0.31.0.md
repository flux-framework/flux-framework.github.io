---
title: flux-accounting v0.31.0
date: 2024-04-02 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.31.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.31.0/flux-accounting-0.31.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.31.0 - 2024-04-02
-------------------------------------------

#### Fixes

* plugin: move flux-accounting-specific helper functions, remove unused ones
([#427](https://github.com/flux-framework/flux-accounting/issues/427))

* plugin: improve `add_missing_bank_info ()` ([#430](https://github.com/flux-framework/flux-accounting/issues/430))

* plugin: change `projects`->`assoc_projects` in `rec_update_cb ()` ([#438](https://github.com/flux-framework/flux-accounting/issues/438))

#### Features

* plugin: add support for updating the bank of a pending job ([#429](https://github.com/flux-framework/flux-accounting/issues/429))

* plugin: add project information to Association information in plugin ([#434](https://github.com/flux-framework/flux-accounting/issues/434))

* `plugin.query`: add projects, def_project to the information returned ([#435](https://github.com/flux-framework/flux-accounting/issues/435))

#### Testsuite

* t: add `active` column, move sample payloads ([#432](https://github.com/flux-framework/flux-accounting/issues/432))

* t1029: remove brackets from `grep` tests ([#433](https://github.com/flux-framework/flux-accounting/issues/433))
