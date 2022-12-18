---
title: "flux-sched v0.8.0"
date: "2019-12-05 18:22:03 -0700"
author: "flux-framework"
categories: release
version: 0.8.0
download: https://github.com/flux-framework/flux-sched/releases/tag/v0.8.0
---

<div class="note warning">
This is an alpha release of flux-sched and is not intended for production use.
</div>

Download from GitHub [here](https://github.com/flux-framework/flux-sched/releases/tag/v0.8.0).

## Release Notes

## Summary:
This version of flux-sched integrates our new graph-based
scheduler with the new execution system within flux-core.
For this purpose, it introduces the qmanager module that
can easily enforce various queuing and backfilling policies
on batch jobs while serving as a conduit between our resource
matching service and flux-core's job-manager. In addition,
it adds a new resource match policy that considers
the performance class of each compute node as a constraint
for scheduling to handle the natural performance variations
of modern microprocessors. Finally, this version lays some
of the foundational work to allow flux-sched to ultimately
reconstruct its state using the queue state of job-manager
for resiliency. 

### New features
 * qmanager: integrate with the new exec system ([#481](https://github.com/flux-framework/flux-sched/pull/481))
 * qmanager: add hello/exception callback support ([#493](https://github.com/flux-framework/flux-sched/pull/493))
 * qmanager: add EASY/HYBRID/CONSERVATIVE policies ([#504](https://github.com/flux-framework/flux-sched/pull/504))
 * resource: RFC20 resource set specification version 1 support ([#455](https://github.com/flux-framework/flux-sched/pull/455))
 * resource: add hwloc whitelist support ([#467](https://github.com/flux-framework/flux-sched/pull/467))
 * resource: add set- and get-property support ([#490](https://github.com/flux-framework/flux-sched/pull/490), [#513](https://github.com/flux-framework/flux-sched/pull/513))
 * resource: add support for checking a job's satisfiability ([#503](https://github.com/flux-framework/flux-sched/pull/503))
 * resource: support for variation-aware scheduler ([#517](https://github.com/flux-framework/flux-sched/pull/517))
 * resource: add JGF reader support ([#521](https://github.com/flux-framework/flux-sched/pull/521))
 * resource: resource graph metadata (by_path) optimization ([#536](https://github.com/flux-framework/flux-sched/pull/536))
 * libjobspec: update command to be list instead of list or string ([#549](https://github.com/flux-framework/flux-sched/pull/549))
 * resource: add resource update support ([#543](https://github.com/flux-framework/flux-sched/pull/543))
 * add smart pointer support and misc. cleanup ([#537](https://github.com/flux-framework/flux-sched/pull/537))
 * test: add test cases to support systems with disaggregated resources ([#460](https://github.com/flux-framework/flux-sched/pull/460))
 * test: add test cases for AMD GPUs ([#464](https://github.com/flux-framework/flux-sched/pull/464))

### Cleanup
 * resource: tidy up JGF match writer support ([#520](https://github.com/flux-framework/flux-sched/pull/520))

### Fixes
 * resource/sched/simulator: update KVS API usage ([#435](https://github.com/flux-framework/flux-sched/pull/435))
 * build: fix build issues for priority_mod_fair_tree.so ([#434](https://github.com/flux-framework/flux-sched/pull/434))
 * api: sync flux-sched with removed interfaces in flux-core ([#440](https://github.com/flux-framework/flux-sched/pull/440))
 * resource: update for kvs watch API removal ([#442](https://github.com/flux-framework/flux-sched/pull/442))
 * API: remove the use of deprecated Python API ([#450](https://github.com/flux-framework/flux-sched/pull/450))
 * resource: update to flux_respond_error() ([#457](https://github.com/flux-framework/flux-sched/pull/457))
 * resource: bug fix for incorrectly handling implicit exclusivity ([#502](https://github.com/flux-framework/flux-sched/pull/502))
 * libschedutil: remove vendored copy and use flux-core's exported lib ([#516](https://github.com/flux-framework/flux-sched/pull/516))
 * testsuite: update flux-sharness.sh to version from flux-core ([#523](https://github.com/flux-framework/flux-sched/pull/523))
 * rc3: Fix a bug in RC3 dir definition within configure.ac ([#525](https://github.com/flux-framework/flux-sched/pull/525))
 * resource: fix buffer overflow when handling slot type in a jobspec ([#548](https://github.com/flux-framework/flux-sched/pull/548))

