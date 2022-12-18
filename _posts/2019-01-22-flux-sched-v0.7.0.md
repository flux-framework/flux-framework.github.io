---
title: "flux-sched v0.7.0"
date: "2019-01-22 21:24:04 +0000"
author: "flux-framework"
categories: release
version: 0.7.0
download: https://github.com/flux-framework/flux-sched/releases/tag/v0.7.0
---

<div class="note warning">
This is an alpha release of flux-sched and is not intended for production use.
</div>

Download from GitHub [here](https://github.com/flux-framework/flux-sched/releases/tag/v0.7.0).

## Release Notes

### Fixes
 * sched/plugin: track flux-core module API changes ([#414](https://github.com/flux-framework/flux-sched/issues/414))
 * Ensure scheduling correctness with different prune filter configurations
   ([#419](https://github.com/flux-framework/flux-sched/issues/419))
 * travis: fix docker and github release deployment ([#424](https://github.com/flux-framework/flux-sched/issues/424))
 * travis-ci: fix docker deploy better ([#426](https://github.com/flux-framework/flux-sched/issues/426))
 * docker: update repo tag names, ensure flux-sched installed with
   prefix=/usr ([#427](https://github.com/flux-framework/flux-sched/issues/427))
 * docker: add yaml-cpp dependency ([#428](https://github.com/flux-framework/flux-sched/issues/428))
 * config: Fix a non-portable use of shell conditionals for automake
   ([#405](https://github.com/flux-framework/flux-sched/issues/405))
 * config: Add libtoolize into autogen.sh ([#406](https://github.com/flux-framework/flux-sched/issues/406))
 * Integrate jobspec into resource, etc ([#398](https://github.com/flux-framework/flux-sched/issues/398))
 * Compilation fixes ([#417](https://github.com/flux-framework/flux-sched/issues/417))

### Features
 * travis-ci: use docker for test builds ([#392](https://github.com/flux-framework/flux-sched/issues/392))
 * resource: support for hwloc ingestion ([#385](https://github.com/flux-framework/flux-sched/issues/385))
 * Add support for resource matching service ([#386](https://github.com/flux-framework/flux-sched/issues/386))
 * planner: Replace zhash_t to zhashx_t for higher performance ([#391](https://github.com/flux-framework/flux-sched/issues/391))
 * resource: wire in --prune-filters option for resource-query and
   matching module ([#401](https://github.com/flux-framework/flux-sched/issues/401))
 * resource: Add run-level support for resource matching module ([#418](https://github.com/flux-framework/flux-sched/issues/418))
 * Add better autoconf support for libboost ([#394](https://github.com/flux-framework/flux-sched/issues/394))

### Cleanup
 * build: do not install libflux-rdl.so, fix rebuild of aclocal.m4 on
   first make ([#421](https://github.com/flux-framework/flux-sched/issues/421))
 * sched: remove trailing whitespaces ([#376](https://github.com/flux-framework/flux-sched/issues/376))


