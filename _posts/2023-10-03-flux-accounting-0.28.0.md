---
title: flux-accounting v0.28.0
date: 2023-10-03 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.28.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.28.0/flux-accounting-0.28.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.28.0 - 2023-10-02
-------------------------------------------

#### Fixes

* `edit-user`: fix default values for optional args ([#382](https://github.com/flux-framework/flux-accounting/issues/382))

* plugin: improve check of internal user/bank map in `job.validate` ([#386](https://github.com/flux-framework/flux-accounting/issues/386))

* plugin: move queue priority assignment to `job.new` callback ([#388](https://github.com/flux-framework/flux-accounting/issues/388))

* `view-bank`: fix `-t` option for a sub bank with users in it ([#395](https://github.com/flux-framework/flux-accounting/issues/395))

#### Features

* plugin: record bank name to jobspec in PRIORITY event ([#301](https://github.com/flux-framework/flux-accounting/issues/301))

* plugin: add queue update validation ([#389](https://github.com/flux-framework/flux-accounting/issues/389))

#### Testsuite

* load content module in rc scripts ([#383](https://github.com/flux-framework/flux-accounting/issues/383))

* ci: remove `upload-tarball` step from workflow ([#387](https://github.com/flux-framework/flux-accounting/issues/387))

* testsuite: allow sharness tests to be run by hand ([#392](https://github.com/flux-framework/flux-accounting/issues/392))
