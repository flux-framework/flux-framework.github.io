---
title: flux-accounting v0.40.0
date: 2024-12-03 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.40.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.40.0/flux-accounting-0.40.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.40.0 - 2024-12-03
-------------------------------------------

#### Fixes

* `list-banks`: use `AccountingFormatter` class ([#524](https://github.com/flux-framework/flux-accounting/issues/524))

* `add-user`: make `--username` and `--bank` required arguments ([#532](https://github.com/flux-framework/flux-accounting/issues/532))

* `edit-user`: unify reset behavior, `**kwargs` for editable fields ([#535](https://github.com/flux-framework/flux-accounting/issues/535))

#### Features

* `view-job-records`: add `--bank` filter option ([#533](https://github.com/flux-framework/flux-accounting/issues/533))

* doc: add example on configuring priorities for queues ([#542](https://github.com/flux-framework/flux-accounting/issues/542))

#### Testsuite

* t: change which user is deleted from `association_table` ([#528](https://github.com/flux-framework/flux-accounting/issues/528))

#### CI

* ci(mergify): upgrade configuration to current format ([#537](https://github.com/flux-framework/flux-accounting/issues/537))
