---
title: "flux-accounting v0.8.0"
date: "2021-04-27 15:11:27 -0700"
author: cmoussa1
categories: release
version: 0.8.0
download: https://github.com/flux-framework/flux-accounting/releases/tag/v0.8.0
---

Download from GitHub [here](https://github.com/flux-framework/flux-accounting/releases/tag/v0.8.0)

# Release Notes

#### Fixes

* Updated headers of source files in the `fairness` directory ([#113](https://github.com/flux-framework/flux-accounting/issues/113))

* Fixed module/dependency installation strategy of flux-accounting on the `bionic` Docker image ([#114](https://github.com/flux-framework/flux-accounting/issues/114))

* Fixed bug where old job usage values incorrectly included old factors when applying a decay value ([#118](https://github.com/flux-framework/flux-accounting/issues/118))

* Fixed bug where the all job usage factors were incorrectly updated multiple times in one half-life period ([#118](https://github.com/flux-framework/flux-accounting/issues/118))

* Fixed bug where a historical job usage value was updated even in the case where no new jobs were found in the current half-life period ([#118](https://github.com/flux-framework/flux-accounting/issues/118))

* Fixed bug where the last seen job timestamp was reset to 0 if no new jobs were found for a user ([#118](https://github.com/flux-framework/flux-accounting/issues/118))

#### Features

* Added a new `fairshare` field to the `association_table` in a flux-accounting database ([#116](https://github.com/flux-framework/flux-accounting/issues/116))

* Added a new `writer` class which will update associations with up-to-date fairshare information ([#116](https://github.com/flux-framework/flux-accounting/issues/116))

    * Added a subclass `data_writer_db` which will write fairshare information to a flux-accounting SQLite database

* Added a new subcommand to `flux account` that calculates and updates historical job usage values for every association in the flux-accounting database ([#118](https://github.com/flux-framework/flux-accounting/issues/118))

