---
title: "flux-accounting v0.13.0"
date: "2022-01-31 09:10:01 -0800"
author: "flux-framework"
categories: release
version: 0.13.0
download: https://github.com/flux-framework/flux-accounting/releases/tag/v0.13.0
---

Download from GitHub [here](https://github.com/flux-framework/flux-accounting/releases/tag/v0.13.0)

# Release Notes

#### Fixes

* Improve sharness tests to use `flux account` commands directly in tests ([#180](https://github.com/flux-framework/flux-accounting/issues/180))

* Change positional and optional arguments in `edit-user` command to align with other `edit-*` commands ([#181](https://github.com/flux-framework/flux-accounting/issues/181))

* Fix bug in `view-user` preventing the ability to view more than one row if a user belonged to more than one bank ([#187](https://github.com/flux-framework/flux-accounting/issues/187))

* Remove outdated `admin_level` column from association_table in flux-accounting database ([#188](https://github.com/flux-framework/flux-accounting/issues/188))

* Fix incorrect listing of association_table headers in the `view-user` command ([#193](https://github.com/flux-framework/flux-accounting/issues/193))

* Fix `UNIQUE constraint` failure when re-adding a previously deleted user to the same bank in the flux-accounting database ([#193](https://github.com/flux-framework/flux-accounting/issues/193))

* Convert the `qos` argument into positional arguments for both the `view-qos` and `edit-qos` commands ([#193](https://github.com/flux-framework/flux-accounting/issues/193))

#### Features

* Add new enforcement policy in multi-factor priority plugin to only count running jobs towards an "active" jobs counter ([#177](https://github.com/flux-framework/flux-accounting/issues/177))

* Add section to top-level README on flux-accounting database permissions ([#188](https://github.com/flux-framework/flux-accounting/issues/188))

* Add new optional arguments to `view-bank` command to view sub bank hierarchy trees or users belonging to a specific bank ([#194](https://github.com/flux-framework/flux-accounting/issues/194))

* Add bulk database populate tool to upload multiple user or bank rows at one time via `.csv` file ([#195](https://github.com/flux-framework/flux-accounting/issues/195))

