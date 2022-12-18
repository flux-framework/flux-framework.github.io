---
title: "flux-accounting v0.11.0"
date: "2021-11-08 07:31:57 -0800"
author: "flux-framework"
categories: release
version: 0.11.0
download: https://github.com/flux-framework/flux-accounting/releases/tag/v0.11.0
---

Download from GitHub [here](https://github.com/flux-framework/flux-accounting/releases/tag/v0.11.0)

# Release Notes

#### Fixes

* Replace the "strict" merge mode with queue+rebase in Mergify ([#158](https://github.com/flux-framework/flux-accounting/issues/158))

* Add missing installation of the Python bulk update script that sends updated database information to the priority plugin ([#162](https://github.com/flux-framework/flux-accounting/issues/162))

* Change names of all automatic update scripts to fall under one prefix called "account" ([#162](https://github.com/flux-framework/flux-accounting/issues/162))

* Change the default DB path for all flux-accounting subcommands ([#170](https://github.com/flux-framework/flux-accounting/issues/170))

* Remove the positional argument for the `create-db` subcommand ([#170](https://github.com/flux-framework/flux-accounting/issues/170))

* Unify the optional database path arguments for all of the `flux account` commands ([#171](https://github.com/flux-framework/flux-accounting/issues/171))

#### Features

* Add new instructions to the top-level README on setting up the flux-accounting database, loading the priority plugin, and configuring the automatic update scripts ([#157](https://github.com/flux-framework/flux-accounting/issues/157))

