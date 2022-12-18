---
title: "flux-accounting v0.10.0"
date: "2021-10-06 09:08:40 -0700"
author: "flux-framework"
categories: release
version: 0.10.0
download: https://github.com/flux-framework/flux-accounting/releases/tag/v0.10.0
---

Download from GitHub [here](https://github.com/flux-framework/flux-accounting/releases/tag/v0.10.0)

# Release Notes

#### Fixes

* Fix bug in add-user where wrong number of arguments were passed to function ([#140](https://github.com/flux-framework/flux-accounting/issues/140))

* Fix bug in edit-user to ensure an edit made in one user/bank row was only made in just that one row instead of in multiple rows in the flux-accounting database ([#140](https://github.com/flux-framework/flux-accounting/issues/140))

#### Features

* Add a new front-end update script that will re-calculate users' fairshare values and update them in the flux-accounting database ([#138](https://github.com/flux-framework/flux-accounting/issues/138))

* Add new Quality of Service table in the flux-accounting database, which will hold Quality of Services and their associated priorities ([#143](https://github.com/flux-framework/flux-accounting/issues/143))

* Add new sharness tests for Python subcommands ([#140](https://github.com/flux-framework/flux-accounting/issues/140))

* Remove pandas dependency from flux-accounting, which was required to build/install ([#144](https://github.com/flux-framework/flux-accounting/issues/144))

