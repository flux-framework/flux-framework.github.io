---
title: flux-accounting v0.17.0
date: 2022-06-23 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.17.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.17.0/flux-accounting-0.17.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.17.0 - 2022-06-23
-------------------------------------------

#### Fixes

* Disable requirement for a `default` queue ([#237](https://github.com/flux-framework/flux-accounting/issues/237))

#### Features

* Add a new `max_nodes` column to the `association_table` which represents
the max number of nodes a user/bank combo can have across all of their
running jobs ([#235](https://github.com/flux-framework/flux-accounting/issues/235))

* Add a sharness test for calculating job priorities of multiple users with
different `--urgency` values ([#236](https://github.com/flux-framework/flux-accounting/issues/236))

* Add a new `export-db` command which extracts information from both the
`association_table` and `bank_table` into `.csv` files for processing ([#243](https://github.com/flux-framework/flux-accounting/issues/243))

* Add a new `update-db` command which adds any new tables and/or adds any
new columns to existing tables in a flux-accounting database ([#244](https://github.com/flux-framework/flux-accounting/issues/244))
