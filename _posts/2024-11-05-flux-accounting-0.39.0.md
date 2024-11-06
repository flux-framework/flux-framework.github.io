---
title: flux-accounting v0.39.0
date: 2024-11-05 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.39.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.39.0/flux-accounting-0.39.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.39.0 - 2024-11-05
-------------------------------------------

#### Fixes

* `view-user`: make "parsable" spelling consistent ([#494](https://github.com/flux-framework/flux-accounting/issues/494))

* projects: fix unit tests for project subcommands, `--projects` reset
capability ([#495](https://github.com/flux-framework/flux-accounting/issues/495))

* plugin: add callback prefixes to exception messages ([#499](https://github.com/flux-framework/flux-accounting/issues/499))

* `add-bank`: add a check when adding a root bank ([#509](https://github.com/flux-framework/flux-accounting/issues/509))

* fetch-job-records: set `max_entries=0` ([#516](https://github.com/flux-framework/flux-accounting/issues/516))

* `view-user --parsable`: improve output formatting ([#514](https://github.com/flux-framework/flux-accounting/issues/514))

* `flux-account.py`: get rid of dictionary initialization ([#512](https://github.com/flux-framework/flux-accounting/issues/512))

* `__init__.py`: fix formatting of constants ([#521](https://github.com/flux-framework/flux-accounting/issues/521))

* `view_jobs()`: adjust helper function to actually return a string ([#522](https://github.com/flux-framework/flux-accounting/issues/522))

#### Features

* command suite: add new `list-projects` command ([#496](https://github.com/flux-framework/flux-accounting/issues/496))

* ci: add spellchecker to flux-accounting ([#504](https://github.com/flux-framework/flux-accounting/issues/504))

* python: add `AccountingFormatter` class, SQLite utility file ([#520](https://github.com/flux-framework/flux-accounting/issues/520))

#### Testsuite

* `.gitignore`: add built docs, sharness test results ([#511](https://github.com/flux-framework/flux-accounting/issues/511))

* t: skip t1011 if job-archive module not detected, add new tests for 
`fetch-job-records` ([#518](https://github.com/flux-framework/flux-accounting/issues/518))

#### Documentation

* doc: add note about manually loading plugin ([#500](https://github.com/flux-framework/flux-accounting/issues/500))

* doc: add ReadTheDocs support for flux-accounting ([#501](https://github.com/flux-framework/flux-accounting/issues/501))

* guide: add note about configuring factor weights ([#505](https://github.com/flux-framework/flux-accounting/issues/505))

* doc: add "Database Administration" section, update README to point to docs
site ([#506](https://github.com/flux-framework/flux-accounting/issues/506))

* doc: reorganize top-level site, add License and Support page ([#510](https://github.com/flux-framework/flux-accounting/issues/510))

* doc: add priority equation to accounting guide ([#513](https://github.com/flux-framework/flux-accounting/issues/513))
