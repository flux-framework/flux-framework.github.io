---
title: "flux-security v0.2.0"
date: "2018-08-23 17:06:18 +0000"
author: "flux-framework"
categories: release
version: 0.2.0
download: https://github.com/flux-framework/flux-security/releases/tag/v0.2.0
---

Download from GitHub [here](https://github.com/flux-framework/flux-security/releases/tag/v0.2.0)

# Release Notes

### New Features

 * add mechanism argument to `flux_sign_wrap(3)` ([#75](https://github.com/flux-framework/flux-security/issues/75))
 * add new function `flux_sign_unwrap_anymech(3)` ([#75](https://github.com/flux-framework/flux-security/issues/75))
 * move default config file to `$sysconfdir/flux/security/conf.d`
   and add a default config file for signing ([#76](https://github.com/flux-framework/flux-security/issues/76))
 * add sign_curve signing mechanism ([#68](https://github.com/flux-framework/flux-security/issues/68))

### Cleanup

 * add pkg-config m4 to support side-installed autotools ([#77](https://github.com/flux-framework/flux-security/issues/77))


