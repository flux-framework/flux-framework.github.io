---
title: "flux-accounting v0.6.0"
date: "2021-02-19 10:00:00 -08:00"
author: cmoussa1
categories: release
version: 0.6.0
download: https://github.com/flux-framework/flux-accounting/releases/tag/
---

Download from GitHub [here](https://github.com/flux-framework/flux-accounting/releases/tag/)

# Release Notes

#### Fixes

* Unused variables and imports removed, license in `src/fairness/` changed to LGPL ([#90](https://github.com/flux-framework/flux-accounting/issues/90))

* Behavior of `delete-user`, `delete-bank` changed to keep job history of a user after they are removed from the flux-accounting DB ([#92](https://github.com/flux-framework/flux-accounting/issues/92))

* `bank` argument added to the `delete-user` subcommand ([#95](https://github.com/flux-framework/flux-accounting/issues/95))

#### Features

* `unittest.mock()` integrated with job-archive interface unit tests ([#93](https://github.com/flux-framework/flux-accounting/issues/93))

* flux-accounting database can be loaded into weighted tree library to generate fairshare values for users ([#97](https://github.com/flux-framework/flux-accounting/issues/97))

