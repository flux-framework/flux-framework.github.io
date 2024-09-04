---
title: flux-accounting v0.37.0
date: 2024-09-03 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.37.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.37.0/flux-accounting-0.37.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.37.0 - 2024-09-03
-------------------------------------------

#### Fixes

* plugin: move `flux_respond ()` to end of functions ([#431](https://github.com/flux-framework/flux-accounting/issues/431))

* Makefile: remove left over compile instructions for `flux_account_shares`
([#482](https://github.com/flux-framework/flux-accounting/issues/482))

* configure: add `jansson` as a dependency check ([#484](https://github.com/flux-framework/flux-accounting/issues/484))

* doc: add example error message when creating DB after starting systemd
service ([#485](https://github.com/flux-framework/flux-accounting/issues/485))

#### Features

* plugin: add instance owner info to plugin ([#477](https://github.com/flux-framework/flux-accounting/issues/477))

* cmd: add `export-db` as a `flux account` command ([#486](https://github.com/flux-framework/flux-accounting/issues/486))

* cmd: add `pop-db` as a `flux account` command ([#487](https://github.com/flux-framework/flux-accounting/issues/487))
