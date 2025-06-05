---
title: flux-accounting v0.46.0
date: 2025-06-03 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.46.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.46.0/flux-accounting-0.46.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.46.0 - 2025-06-02
-------------------------------------------

#### Features

* `bank_table`: add `priority` column ([#643](https://github.com/flux-framework/flux-accounting/issues/643))

* plugin: add `Bank` class, send bank priority information to plugin ([#645](https://github.com/flux-framework/flux-accounting/issues/645))

* plugin: utilize `bank` priority when calculating priority for a job ([#647](https://github.com/flux-framework/flux-accounting/issues/647))

#### Documentation

* doc: remove `jinja2 < 3.1.0` requirement ([#646](https://github.com/flux-framework/flux-accounting/issues/646))

* doc: drop `sphinx < 6.0.0` ([#648](https://github.com/flux-framework/flux-accounting/issues/648))

* doc: update docs with bank factor ([#649](https://github.com/flux-framework/flux-accounting/issues/649))

* doc: add note about active per-queue limits ([#652](https://github.com/flux-framework/flux-accounting/issues/652))

#### Testsuite

* codecov: include Python bindings in codecov report ([#644](https://github.com/flux-framework/flux-accounting/issues/644))
