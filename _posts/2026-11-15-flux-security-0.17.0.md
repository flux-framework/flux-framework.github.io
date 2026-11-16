---
title: flux-security v0.17.0
date: 2026-11-15 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.17.0
download: https://github.com/flux-framework/flux-security/releases/download/v0.17.0/flux-security-0.17.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-security version 0.17.0 - 2026-11-15
-----------------------------------------

## Features
 * imp: send SIGTERM to cgroup after child termination ([#244](https://github.com/flux-framework/flux-security/issues/244))

## Fixes
 * imp: harden signal handling ([#245](https://github.com/flux-framework/flux-security/issues/245))

### Build/Test/Cleanup
 * github: bump the github-actions group with 2 updates ([#242](https://github.com/flux-framework/flux-security/issues/242))
 * ci: set seccomp=unconfined for 32bit builds ([#243](https://github.com/flux-framework/flux-security/issues/243))
