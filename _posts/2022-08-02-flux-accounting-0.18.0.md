---
title: flux-accounting v0.18.0
date: 2022-08-02 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.18.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.18.0/flux-accounting-0.18.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.18.0 - 2022-08-02
-------------------------------------------

#### Fixes

* Fix `update-db` command to account for deleted columns when updating a
flux-accounting database ([#252](https://github.com/flux-framework/flux-accounting/issues/252))

* Improve error message clarity from sqlite3.connect when running the
`update-db` command ([#248](https://github.com/flux-framework/flux-accounting/issues/248))

#### Features

* Add ability to disable a user/bank combo in the multi-factor priority plugin
that prevents a user from submitting and running jobs ([#254](https://github.com/flux-framework/flux-accounting/issues/254))
