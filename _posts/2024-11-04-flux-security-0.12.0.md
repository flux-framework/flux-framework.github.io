---
title: flux-security v0.12.0
date: 2024-11-04 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.12.0
download: https://github.com/flux-framework/flux-security/releases/download/v0.12.0/flux-security-0.12.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-security version 0.12.0 - 2024-11-04
-----------------------------------------

## New Features
 * imp: exec: send SIGKILL to cgroup/children on SIGUSR1 ([#186](https://github.com/flux-framework/flux-security/issues/186))
 * imp: exec: wait for job cgroup to be empty before exiting ([#187](https://github.com/flux-framework/flux-security/issues/187))
 * allow privileged IMP to linger during flux-imp run to support signal
   forwarding ([#188](https://github.com/flux-framework/flux-security/issues/188))
 * remove `flux-imp kill` command ([#189](https://github.com/flux-framework/flux-security/issues/189))

## Cleanup
 * build: ensure autogen.sh updates package version
