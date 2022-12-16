---
title: flux-accounting v0.20.0
date: 2022-12-16 17:43:30.361973
layout: 'default'
author: "flux-framework"
categories: 'release'
version: 0.20.0
download: https://github.com/flux-framework/flux-accounting/releases/download/v0.20.0/flux-accounting-0.20.0.tar.gz
---

Download from GitHub [here]({{ page.download }})

# Release Notes

flux-accounting version 0.20.0 - 2022-10-04
-------------------------------------------

#### Fixes

* Add additional exception messages to Python commands (#267)

* Improve dependency message for running jobs limit (#269)

* Clean up user subcommand functions (#271)

* Clean up bank subcommand functions (#275)

* Disable queue validation in multi-factor priority plugin on unknown queue,
no configured "default" queue after flux-core queue changes (#281)

* Change default values of "DNE" entry to allow multiple jobs to be submitted
(#286)

* Change install location of multi-factor priority plugin (#287)

#### Features

* Add database schema version to flux-accounting DB (#274)

* Add automatic DB upgrade to `flux account-priority-update` command if
flux-accounting database is out of date (#274)
