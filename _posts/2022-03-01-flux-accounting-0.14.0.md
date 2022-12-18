---
title: "flux-accounting v0.14.0"
date: "2022-03-01 07:52:51 -0800"
author: "flux-framework"
categories: release
version: 0.14.0
download: https://github.com/flux-framework/flux-accounting/releases/tag/v0.14.0
---

Download from GitHub [here](https://github.com/flux-framework/flux-accounting/releases/tag/v0.14.0)

# Release Notes

#### Fixes

* Fix incorrect listing of column names when printing table information in the flux-accounting database ([#203](https://github.com/flux-framework/flux-accounting/issues/203))

* Fix `TypeError` when not specifying a value for an optional argument for the `update-usage` command ([#209](https://github.com/flux-framework/flux-accounting/issues/209))

* Fix incorrect parsing of the `count_ranks()` helper function when updating job usage values ([#211](https://github.com/flux-framework/flux-accounting/issues/211))

#### Features

* Add a new `max_active_jobs` limit for user/bank combos in the multi-factor priority plugin ([#201](https://github.com/flux-framework/flux-accounting/issues/201))

* Add a new distcheck builder to flux-accounting CI ([#206](https://github.com/flux-framework/flux-accounting/issues/206))

