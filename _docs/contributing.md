---
layout: docs
title: Contributing
permalink: /docs/contributing/
---

Flux Framework projects follow the Collective Code Construction Contract
([C4.1](https://github.com/flux-framework/rfc/blob/master/spec_1.adoc))
which describes an optimal collaboration model for open source projects,
based on the GitHub fork+pull model.

In short, to contribute to a Flux framework project

* Fork the project.
* Clone your fork.
  `git clone git@github.com:[username]/flux-framework/[project].git`
* Create a topic branch to contain your change.
  `git checkout -b new_feature`
* Create feature or add fix, and add tests if possible.
* Make sure everything still passes `make check`.
* Rebase your commits into digestible chunks, ideally without errors.
* Push the branch to your GitHub repo.
  `git push origin new_feature`
* Create a pull request against flux-framework/[project] and describe what your change
  does and the why you think it should be merged.
* Each PR will be subjected to automated tests under [travis-ci.org](http://travis-ci.org)

