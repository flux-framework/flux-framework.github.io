---
title: flux-accounting v0.56.0
date: 2026-03-02 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.56.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.56.0/flux-accounting-0.56.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.56.0 - 2026-03-02
-------------------------------------------

#### Fixes

* bindings: use `FLUX_USERID_UNKNOWN` as default ([#800](https://github.com/flux-framework/flux-accounting/issues/800))

* repo: add MAINTAINERS file ([#803](https://github.com/flux-framework/flux-accounting/issues/803))

* `delete_bank()`: update job usage after bank is removed with `--force` ([#808](https://github.com/flux-framework/flux-accounting/issues/808))

* `add-bank`/`add-user`: add check for existing DB structure when trying to add
a bank or association ([#810](https://github.com/flux-framework/flux-accounting/issues/810))

* repo: add `LICENSE`, `NEWS.md` to release tarball ([#813](https://github.com/flux-framework/flux-accounting/issues/813))

* `apply_decay_factor`: change decay application to incremental instead of
cumulative ([#816](https://github.com/flux-framework/flux-accounting/issues/816))

* plugin: minor improvements to logic, variable initialization ([#817](https://github.com/flux-framework/flux-accounting/issues/817))

* jobs_table_subcommands: remove stray `print()` statements ([#819](https://github.com/flux-framework/flux-accounting/issues/819))

#### Features

* commands: add new `clear-usage` command to reset a bank's job usage ([#804](https://github.com/flux-framework/flux-accounting/issues/804))

#### Documentation

* doc: add man page for `clear-usage` command, update docs with related
information ([#814](https://github.com/flux-framework/flux-accounting/issues/814))

* doc: fix bank factor job priority example ([#820](https://github.com/flux-framework/flux-accounting/issues/820))

#### Testsuite

* t: adjust end date in `t1075-custom-usage-reporting` ([#805](https://github.com/flux-framework/flux-accounting/issues/805))

* testsuite: set log-stderr-level on command line ([#812](https://github.com/flux-framework/flux-accounting/issues/812))

* t: make Python test DB names unique ([#818](https://github.com/flux-framework/flux-accounting/issues/818))
