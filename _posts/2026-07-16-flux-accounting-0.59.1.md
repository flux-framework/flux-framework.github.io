---
title: flux-accounting v0.59.1
date: 2026-07-16 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.59.1
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.59.1/flux-accounting-0.59.1.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.59.1 - 2026-07-16
-------------------------------------------

#### Features

* add new `bank-info` command for viewing normalized shares, usage on a cluster
([#896](https://github.com/flux-framework/flux-accounting/issues/896))

* `JobRecord`: add ncores, ngpus properties ([#901](https://github.com/flux-framework/flux-accounting/issues/901))

* job usage: extend usage calculation to consider cores, GPUs ([#902](https://github.com/flux-framework/flux-accounting/issues/902))

#### Fixes

* update-db: miscellaneous fixes to improve migration to new job usage table
([#904](https://github.com/flux-framework/flux-accounting/issues/904))
