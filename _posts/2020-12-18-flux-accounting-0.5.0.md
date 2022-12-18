---
title: "flux-accounting v0.5.0"
date: "2020-12-18 10:00:00 -08:00"
author: cmoussa1
categories: release
version: 0.5.0
download: https://github.com/flux-framework/flux-accounting/releases/tag/
---

Download from GitHub [here](https://github.com/flux-framework/flux-accounting/releases/tag/)

# Release Notes

#### Fixes

* `print-hierarchy`'s error output more graceful when there are no accounts ([#62](https://github.com/flux-framework/flux-accounting/issues/62))

* `association_table`'s `user_name` field changed to `username` ([#67](https://github.com/flux-framework/flux-accounting/issues/67))

* **accounting_cli.py**'s `account` option changed to `bank` ([#70](https://github.com/flux-framework/flux-accounting/issues/70))

* variables in **print_hierarchy.cpp** moved from `global` scope ([#71](https://github.com/flux-framework/flux-accounting/issues/71))

* Python code converted over to use autotools, TAP, and sharness ([#73](https://github.com/flux-framework/flux-accounting/issues/73))

#### Features

* `print-hierarchy` added as a C++ implementation to weighted tree lib ([#64](https://github.com/flux-framework/flux-accounting/issues/64))

* `delete-bank` recursively deletes sub banks and associations when a parent bank is deleted ([#78](https://github.com/flux-framework/flux-accounting/issues/78))

* `calc_usage_factor()` calculates a user's historical job usage value based on their job history ([#79](https://github.com/flux-framework/flux-accounting/issues/79))

