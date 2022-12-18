---
title: "flux-accounting v0.9.0"
date: "2021-09-07 09:28:03 -0700"
author: "flux-framework"
categories: release
version: 0.9.0
download: https://github.com/flux-framework/flux-accounting/releases/tag/v0.9.0
---

Download from GitHub [here](https://github.com/flux-framework/flux-accounting/releases/tag/v0.9.0)

# Release Notes

#### Fixes

* Fix bug where users couldn't be added due to a broken function header ([#140](https://github.com/flux-framework/flux-accounting/issues/140))

* Fix bug where a bank's shares could not be edited ([#140](https://github.com/flux-framework/flux-accounting/issues/140))

#### Features

* Add a new multi-factor priority plugin that will calculate and push a user's job priority using multiple factors ([#122](https://github.com/flux-framework/flux-accounting/issues/122))

* Add a new external service that grabs flux-accounting database information and pushes it to the multi-factor priority plugin ([#122](https://github.com/flux-framework/flux-accounting/issues/122))

* Add a max jobs limit to the priority plugin that will enforce a limit of active jobs on a user/bank combination in the flux-accounting database ([#131](https://github.com/flux-framework/flux-accounting/issues/131))

* Add a new STDOUT writer class to write user/bank information from a flux-accounting database to STDOUT ([#120](https://github.com/flux-framework/flux-accounting/issues/120))

