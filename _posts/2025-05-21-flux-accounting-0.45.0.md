---
title: flux-accounting v0.45.0
date: 2025-05-21 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.45.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.45.0/flux-accounting-0.45.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.45.0 - 2025-05-21
-------------------------------------------

#### Fixes

* bindings: remove redundant `try/except` blocks ([#625](https://github.com/flux-framework/flux-accounting/issues/625))

* `.gitignore`: add files to `.gitignore` ([#627](https://github.com/flux-framework/flux-accounting/issues/627))

* `list-*` commands: make table output default ([#626](https://github.com/flux-framework/flux-accounting/issues/626))

* `calc_usage_factor()`: add update of current usage when no new jobs are
found in new half-life period ([#630](https://github.com/flux-framework/flux-accounting/issues/630))

* `update-usage`: fix usage aggregation in multi-level bank hierarchies ([#632](https://github.com/flux-framework/flux-accounting/issues/632))

* `update-usage`: add INFO-level logging ([#628](https://github.com/flux-framework/flux-accounting/issues/628))

* python: improve logger format in `update-usage`, create module-level logger
in `create-db` ([#633](https://github.com/flux-framework/flux-accounting/issues/633))

#### Documentation

* doc: add `man(1)` pages for project commands ([#634](https://github.com/flux-framework/flux-accounting/issues/634))

#### Testsuite

* github: upgrade codecov-action to v5 ([#629](https://github.com/flux-framework/flux-accounting/issues/629))
