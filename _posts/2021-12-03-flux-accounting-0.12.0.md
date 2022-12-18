---
title: "flux-accounting v0.12.0"
date: "2021-12-03 10:23:52 -0800"
author: "flux-framework"
categories: release
version: 0.12.0
download: https://github.com/flux-framework/flux-accounting/releases/tag/v0.12.0
---

Download from GitHub [here](https://github.com/flux-framework/flux-accounting/releases/tag/v0.12.0)

# Release Notes

#### Fixes

* Improve bulk update script by reducing number of sent payloads to just one payload containing all required data needed by multi-factor priority plugin ([#167](https://github.com/flux-framework/flux-accounting/issues/167))

* Drop `ax_python_devel.m4` and adjust `configure.ac` since flux-accounting does not use `PYTHON_CFLAGS` or `PYTHON_LIBS` and rejects python `3.10.0` as too old ([#173](https://github.com/flux-framework/flux-accounting/issues/173))

* Add LLNL code release number to flux-accounting ([#175](https://github.com/flux-framework/flux-accounting/issues/175))

#### Features

* Add support for defining, configuring, and editing queues and its various limits within the flux-accounting database ([#176](https://github.com/flux-framework/flux-accounting/issues/176))

