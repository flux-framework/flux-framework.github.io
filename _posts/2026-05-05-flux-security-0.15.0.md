---
title: flux-security v0.15.0
date: 2026-05-05 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.15.0
download: https://github.com/flux-framework/flux-security/releases/download/v0.15.0/flux-security-0.15.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-security version 0.15.0 - 2026-05-05
-----------------------------------------

## Features
 * imp: add log-level TOML key ([#229](https://github.com/flux-framework/flux-security/issues/229))
 * imp: add bpf device containment ([#228](https://github.com/flux-framework/flux-security/issues/228))

## Fixes
 * fuzz: add initial fuzzing harness to flux-security using AFL++ and fix
   detected issues ([#221](https://github.com/flux-framework/flux-security/issues/221))
 * fix minor issues discovered during security audit ([#222](https://github.com/flux-framework/flux-security/issues/222))
 * imp/cgroup: do not automatically error out if /sys/fs/cgroup/unified is
   missing ([#207](https://github.com/flux-framework/flux-security/issues/207))
 * lib: avoid discarded-qualifiers error with gcc-16 ([#211](https://github.com/flux-framework/flux-security/issues/211))

## Build/Test/Cleanup
 * doc: organize docs so some internals notes can be added ([#227](https://github.com/flux-framework/flux-security/issues/227))
 * testsuite: fix cgroup mount dir detection in `t2000-imp-exec.t` ([#220](https://github.com/flux-framework/flux-security/issues/220))
 * test: avoid maybe-uninitialized error with gcc-16 ([#216](https://github.com/flux-framework/flux-security/issues/216))
 * ci: modernize builders in CI and fix new `-fanalyzer` bugs ([#219](https://github.com/flux-framework/flux-security/issues/219))
 * ci: update github action versions and add dependabot to maintain them
   ([#218](https://github.com/flux-framework/flux-security/issues/218))
 * ci: update typos version and github actions builders ([#209](https://github.com/flux-framework/flux-security/issues/209))
 * mergify: disable temporary PR branches ([#208](https://github.com/flux-framework/flux-security/issues/208))
 * doc: copy MAINTAINERS, CONTRIBUTING from flux-core ([#212](https://github.com/flux-framework/flux-security/issues/212))
 * MAINTAINERS.md: drop non-maintainers ([#223](https://github.com/flux-framework/flux-security/issues/223))
 * doc: remove reference to flux-workflow-examples in config ([#214](https://github.com/flux-framework/flux-security/issues/214))
 * doc: remove reference to flux-mini(1) ([#213](https://github.com/flux-framework/flux-security/issues/213))
