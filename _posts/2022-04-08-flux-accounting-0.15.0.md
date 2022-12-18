---
title: "flux-accounting v0.15.0"
date: "2022-04-08 07:47:33 -0700"
author: "flux-framework"
categories: release
version: 0.15.0
download: https://github.com/flux-framework/flux-accounting/releases/tag/v0.15.0
---

Download from GitHub [here](https://github.com/flux-framework/flux-accounting/releases/tag/v0.15.0)

# Release Notes

#### Fixes

* Fix incorrect job usage calculation for users who belong to multiple banks ([#219](https://github.com/flux-framework/flux-accounting/issues/219))

* Update the `pop-db` command to include the `max_active_jobs`, `max_running_jobs`
  limits defined in the `association_table` ([#224](https://github.com/flux-framework/flux-accounting/issues/224))

* Remove the unused ‘deleted’ column from the `association_table` in the flux-accounting DB ([#224](https://github.com/flux-framework/flux-accounting/issues/224))

* Fix the default value for the `--queues` optional argument in the `edit-user` command ([#225](https://github.com/flux-framework/flux-accounting/issues/225))

#### Features

* Add an `rc1` script that populates multi-factor priority plugin with flux-accounting DB
information on instance startup or restart ([#223](https://github.com/flux-framework/flux-accounting/issues/223))

* Allow multi-factor priority plugin to be loaded and hold jobs without user/bank
information ([#227](https://github.com/flux-framework/flux-accounting/issues/227))

