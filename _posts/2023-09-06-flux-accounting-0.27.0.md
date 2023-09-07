---
title: flux-accounting v0.27.0
date: 2023-09-06 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.27.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.27.0/flux-accounting-0.27.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.27.0 - 2023-09-06
-------------------------------------------

#### Fixes

* `.cpp`: add `config.h` include to source code ([#366](https://github.com/flux-framework/flux-accounting/issues/366))

* `.cpp`: wrap `"config.h"`, C headers in `extern "C"` ([#368](https://github.com/flux-framework/flux-accounting/issues/368))

* python: remove empty `quotechar` argument from `csv.writer` object
initialization ([#372](https://github.com/flux-framework/flux-accounting/issues/372))

* python: rename `rows` variable to something more descriptive ([#374](https://github.com/flux-framework/flux-accounting/issues/374))

* plugin: check for `FLUX_JOB_STATE_NEW` in `validate_cb ()` ([#378](https://github.com/flux-framework/flux-accounting/issues/378))

#### Testsuite

* build: add `make deb` target for test packaging ([#363](https://github.com/flux-framework/flux-accounting/issues/363))

* t: reorganize `t1007-flux-account.t` into multiple sharness tests ([#367](https://github.com/flux-framework/flux-accounting/issues/367))

* docker: transition `bionic` container to `jammy` ([#369](https://github.com/flux-framework/flux-accounting/issues/369))

* t: add valgrind folder to flux-accounting ([#373](https://github.com/flux-framework/flux-accounting/issues/373))

* ci: update github actions `main.yml` file ([#375](https://github.com/flux-framework/flux-accounting/issues/375))
