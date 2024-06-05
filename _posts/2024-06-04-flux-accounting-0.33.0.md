---
title: flux-accounting v0.33.0
date: 2024-06-04 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.33.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.33.0/flux-accounting-0.33.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.33.0 - 2024-06-04
-------------------------------------------

#### Fixes

* job-archive interface: wrap job usage updates into a single SQL transaction ([#452](https://github.com/flux-framework/flux-accounting/issues/452))

* database: update schema version ([#453](https://github.com/flux-framework/flux-accounting/issues/453))

#### Features

* plugin: add configurable priority factors via TOML `conf.update` ([#295](https://github.com/flux-framework/flux-accounting/issues/295))

#### Testsuite

* testsuite: change check for specific job states ([#393](https://github.com/flux-framework/flux-accounting/issues/393))

* testsuite: replace `flux job cancel` --> `flux cancel` ([#454](https://github.com/flux-framework/flux-accounting/issues/454))
