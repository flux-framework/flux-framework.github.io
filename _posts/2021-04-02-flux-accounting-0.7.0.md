---
title: "flux-accounting v0.7.0"
date: "2021-04-02 10:00:00 -08:00"
author: cmoussa1
categories: release
version: 0.7.0
download: https://github.com/flux-framework/flux-accounting/releases/tag/
---

Download from GitHub [here](https://github.com/flux-framework/flux-accounting/releases/tag/)

# Release Notes

#### Fixes

* Fixed `ModuleNotFound` error when running Python unit tests on Python `3.6` ([#106](https://github.com/flux-framework/flux-accounting/issues/106))

* Removed shebang line from **flux-account.py** to prevent Python version mismatch errors ([#101](https://github.com/flux-framework/flux-accounting/issues/101))

#### Features

* Added a new `reader` class which will read flux-accounting information and load it to a `weighted_tree` object ([#103](https://github.com/flux-framework/flux-accounting/issues/103))

    * Added a subclass `data_reader_db` which will read and load information from a flux-accounting SQLite database

* Added a new flux subcommand: `flux shares`, which will output a flux-accounting database hierarchy containing user/bank shares and usage information ([#109](https://github.com/flux-framework/flux-accounting/issues/109))

