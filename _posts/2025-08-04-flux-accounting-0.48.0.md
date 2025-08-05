---
title: flux-accounting v0.48.0
date: 2025-08-04 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.48.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.48.0/flux-accounting-0.48.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.48.0 - 2025-08-01
-------------------------------------------

#### Features

* database: add `max_nodes` column to `queue_table` ([#695](https://github.com/flux-framework/flux-accounting/issues/695))

* priority-update: send `max_nodes_per_assoc` to plugin, add
`max_nodes_per_assoc` attribute to `Queue` class ([#702](https://github.com/flux-framework/flux-accounting/issues/702))

* plugin: add `QueueUsage` class to track an association's node usage per-queue
([#703](https://github.com/flux-framework/flux-accounting/issues/703))

* command: add `edit-all-users` command ([#700](https://github.com/flux-framework/flux-accounting/issues/700))

* plugin: add enforcement of a per-queue max nodes limit ([#704](https://github.com/flux-framework/flux-accounting/issues/704))

* bindings: add `db_version()` function, use it across scripts that check DB
version ([#684](https://github.com/flux-framework/flux-accounting/issues/684))

* `view-user`: add `-J/--job-usage` optional arg ([#706](https://github.com/flux-framework/flux-accounting/issues/706))

#### Fixes

* update-usage: move one-time SQL query out of `for`-loop, combine
per-association queries ([#680](https://github.com/flux-framework/flux-accounting/issues/680))

* `add-user`: remove extra `.commit()` when `INSERT`-ing values into
`association_table` ([#681](https://github.com/flux-framework/flux-accounting/issues/681))

* plugin: remove unused function arguments from `priority_calculation ()`
([#687](https://github.com/flux-framework/flux-accounting/issues/687))

* `jobs`: use fair-share at priority calculation instead of association's
current fair-share ([#686](https://github.com/flux-framework/flux-accounting/issues/686))

* flux-accounting service: use `DB_SCHEMA_VERSION` constant instead of
hard-coded value ([#683](https://github.com/flux-framework/flux-accounting/issues/683))

* plugin: shorten line that is greater than 80 characters ([#696](https://github.com/flux-framework/flux-accounting/issues/696))

* `bindings/`: remove job-usage documentation ([#705](https://github.com/flux-framework/flux-accounting/issues/705))

* `BankFormatter`: reduce duplicate traversal code ([#676](https://github.com/flux-framework/flux-accounting/issues/676))

#### Documentation

* doc: add note about case sensitivity for names ([#698](https://github.com/flux-framework/flux-accounting/issues/698))

* doc: update `man(1)` page for `edit-user` ([#701](https://github.com/flux-framework/flux-accounting/issues/701))

* doc: add flux-accounting "Module Structure" page ([#707](https://github.com/flux-framework/flux-accounting/issues/707))
