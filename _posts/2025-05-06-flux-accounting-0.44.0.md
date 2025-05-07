---
title: flux-accounting v0.44.0
date: 2025-05-06 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.44.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.44.0/flux-accounting-0.44.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.44.0 - 2025-05-06
-------------------------------------------

#### Fixes

* plugin: create label for `dependency_remove < 0` ([#606](https://github.com/flux-framework/flux-accounting/issues/606))

* plugin: improve `Queue` class ([#609](https://github.com/flux-framework/flux-accounting/issues/609))

* `delete-queue`: add warning statement when deleting a queue still referenced
by associations ([#612](https://github.com/flux-framework/flux-accounting/issues/612))

* `construct_hierarchy()`: use column names ([#614](https://github.com/flux-framework/flux-accounting/issues/614))

* plugin: improve how dependency logic works with new `Job` class ([#610](https://github.com/flux-framework/flux-accounting/issues/610))

* `flux-account`: add `@CLIMain` decorator ([#621](https://github.com/flux-framework/flux-accounting/issues/621))

* `flux-account`: standardize prefixes for error messages ([#622](https://github.com/flux-framework/flux-accounting/issues/622))

#### Features

* plugin: add a new `Job` class ([#608](https://github.com/flux-framework/flux-accounting/issues/608))

* `add-user`: add `--fairshare` as an optional argument ([#615](https://github.com/flux-framework/flux-accounting/issues/615))

* `list-users`: add `--default-project` optional argument, man page ([#616](https://github.com/flux-framework/flux-accounting/issues/616))

* `add-user`: add `--default-project` as an optional argument ([#619](https://github.com/flux-framework/flux-accounting/issues/619))

#### Documentation

* `view-*` man pages: add `-o/--format` optional arg ([#611](https://github.com/flux-framework/flux-accounting/issues/611))

* doc: add `man(1)` pages for `*-queue` commands ([#613](https://github.com/flux-framework/flux-accounting/issues/613))

* `add-user(1)`: clarify how default project is set ([#618](https://github.com/flux-framework/flux-accounting/issues/618))
