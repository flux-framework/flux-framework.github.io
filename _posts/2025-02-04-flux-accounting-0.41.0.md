---
title: flux-accounting v0.41.0
date: 2025-02-04 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.41.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.41.0/flux-accounting-0.41.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.41.0 - 2025-02-04
-------------------------------------------

#### Fixes

* `view-job-records`: accept multiple timestamp formats for `after-start-time`,
`before-end-time` optional args ([#567](https://github.com/flux-framework/flux-accounting/issues/567))

* `view-job-records --jobid`: accept all Flux job ID formats ([#566](https://github.com/flux-framework/flux-accounting/issues/566))

* `t/Makefile.am`: add missing line continuation (`\`) character ([#570](https://github.com/flux-framework/flux-accounting/issues/570))

* `edit-user`: make `fairshare` an editable field for an association ([#569](https://github.com/flux-framework/flux-accounting/issues/569))

* `job.state.priority`: remove raising exception when no aux item found ([#568](https://github.com/flux-framework/flux-accounting/issues/568))

#### Features

* doc: add section on configuring queue permissions ([#550](https://github.com/flux-framework/flux-accounting/issues/550))

* python: create new `BankFormatter` subclass, restructure view-bank to use new
class ([#525](https://github.com/flux-framework/flux-accounting/issues/525))

* `view-user`: create new `AssociationFormatter` subclass for viewing
associations ([#527](https://github.com/flux-framework/flux-accounting/issues/527))

* `association_table`: add `max_cores` attribute, send information to plugin
([#560](https://github.com/flux-framework/flux-accounting/issues/560))

* plugin: track the resources used across all of an association's running jobs
([#561](https://github.com/flux-framework/flux-accounting/issues/561))

* `view-user`: add a new `--list-banks` optional argument ([#479](https://github.com/flux-framework/flux-accounting/issues/479))

* doc: add fair-share documentation ([#536](https://github.com/flux-framework/flux-accounting/issues/536))

* `delete-user`: add `--force` option to actually remove a row from the
`association_table` ([#572](https://github.com/flux-framework/flux-accounting/issues/572))

* `delete-bank`: add `--force` option to actually remove a row from the
`bank_table` ([#573](https://github.com/flux-framework/flux-accounting/issues/573))

* doc: add note about permanently deleting rows with `--force`, update
`view-user` examples ([#574](https://github.com/flux-framework/flux-accounting/issues/574))

#### Testsuite

* testsuite: pull in valgrind suppression from core ([#546](https://github.com/flux-framework/flux-accounting/issues/546))

* testsuite: add longer test descriptions for some of the more complex test
scenarios ([#548](https://github.com/flux-framework/flux-accounting/issues/548))

#### CI

* github: fix ubuntu version for `"python-format"` action ([#547](https://github.com/flux-framework/flux-accounting/issues/547))
