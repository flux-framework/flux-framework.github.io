---
title: flux-accounting v0.63.0
date: 2026-11-03 00:00:00
author: "flux-framework"
categories: 'release'
version: 0.63.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.63.0/flux-accounting-0.63.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.63.0 - 2026-11-03
-------------------------------------------

#### Features

* job usage: add a "continuous" usage decay mode ([#996](https://github.com/flux-framework/flux-accounting/issues/996))

* cmd: add new `estimate-priority` command ([#1006](https://github.com/flux-framework/flux-accounting/issues/1006))

* `view-usage-report`: add `byjobname` grouping ([#1010](https://github.com/flux-framework/flux-accounting/issues/1010))

#### Fixes

* plugin: remove `max_nodes_per_assoc` as dependency ([#993](https://github.com/flux-framework/flux-accounting/issues/993))

* plugin: fix queue priority bug, separate queue validation from queue
priority access ([#1002](https://github.com/flux-framework/flux-accounting/issues/1002))

* usage: don't double-count past usage in period 0 ([#1004](https://github.com/flux-framework/flux-accounting/issues/1004))

* plugin: check for bank attribute during rediscovery of active jobs after
reload ([#1008](https://github.com/flux-framework/flux-accounting/issues/1008))

* `edit-bank`: convert `--ignore-older-than` to timestamps instead of storing
raw value ([#1012](https://github.com/flux-framework/flux-accounting/issues/1012))

* plugin: return lowest possible runnable priority for non-held jobs ([#1014](https://github.com/flux-framework/flux-accounting/issues/1014))

#### Testsuite

* t: check for flux-security before running sharness ([#990](https://github.com/flux-framework/flux-accounting/issues/990))

* ci: drop Python 3.9 from CI, upgrade pylint ([#1008](https://github.com/flux-framework/flux-accounting/issues/1008))

* testsuite: fix race in t1048-issue575.t ([#1015](https://github.com/flux-framework/flux-accounting/issues/1015))

* github: bump crate-ci/typos from 1.50.3 to 1.51.1 in the github-actions group
across 1 directory ([#1017](https://github.com/flux-framework/flux-accounting/issues/1017))

#### important note for administrators: queue node limits

The `max_nodes_per_assoc` queue property is deprecated in this release and is
no longer enforced by the multi-factor priority plugin. Previously, this
property added a `max-resources-queue` dependency when an association's
aggregate node usage in a queue reached the configured limit. The property is
still accepted by the queue commands, retained in the flux-accounting
database and JSON payload, and included in `flux jobtap query mf_priority.so`
output for compatibility, but changing it no longer affects scheduling policy.

Aggregate node usage by an association across jobs in SCHED and RUN is now
enforced exclusively by `max_sched_nodes_per_assoc`. This property also
provides the per-job validation check: a job requesting more nodes than the
configured value is rejected during validation.

Existing queue configuration is not migrated automatically. Before deploying
this release, administrators who use `max_nodes_per_assoc` should:

1. Review the configured value for each queue.
2. Set `max_sched_nodes_per_assoc` to the desired aggregate SCHED and RUN node
   limit with
   `flux account edit-queue QUEUE --max-sched-nodes-per-assoc=VALUE`.
3. Run `flux account-priority-update` to send the updated queue configuration
   to the running priority plugin.
4. Optionally reset `max_nodes_per_assoc` to `unlimited` once local tooling no
   longer depends on the legacy field.

The plugin no longer creates new `max-resources-queue` dependencies. During a
plugin reload or job-manager restart, it makes a best-effort attempt to remove
this dependency from jobs that were already in DEPEND under an older plugin
version. No database schema, queue command option, accounting RPC payload, or
plugin query field is removed by this change.
