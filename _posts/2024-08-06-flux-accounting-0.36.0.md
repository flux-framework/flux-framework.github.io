---
title: flux-accounting v0.36.0
date: 2024-08-06 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.36.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.36.0/flux-accounting-0.36.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.36.0 - 2024-08-06
-------------------------------------------

#### Fixes

* python: change function descriptions to follow docstring convention ([#468](https://github.com/flux-framework/flux-accounting/issues/468))

* python: convert more function descriptions to docstring format ([#470](https://github.com/flux-framework/flux-accounting/issues/470))

* src: remove `flux_account_shares.cpp` in favor of just using `-t` option with
`view-bank` ([#471](https://github.com/flux-framework/flux-accounting/issues/471))

* `fetch-job-records`: add integrity check for records ([#475](https://github.com/flux-framework/flux-accounting/issues/475))

#### Features

* `bank_table`: add a new `list-banks` command ([#473](https://github.com/flux-framework/flux-accounting/issues/473))
