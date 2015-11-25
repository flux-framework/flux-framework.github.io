---
layout: docs
title: Welcome
permalink: /docs/home/
---

## What is Flux Framework?

The Flux framework is a family of projects used to build site-customized
resource management systems for High Performance Computing (HPC) data centers. 

<div class="note warning">
  <p>Flux framework projects are in early development and are not suitable
  for production workloads.</p>
</div>

Current projects include:

 * [flux-core](https://github.com/flux-framework/flux-core) -  implements the
   communication layer and lowest level services and interfaces for the Flux
   resource manager framework. It consists of a distributed message broker and
   plug-in comms modules that implement various distributed services.

 * [flux-sched](https://github.com/flux-framework/flux-sched) - 
   contains the job scheduling facility for the Flux resource manager
   framework. It consists of an engine that handles all the functionality
   common to scheduling. The engine has the ability to load one or more
   scheduling plugins that provide specific scheduling behavior.
 
 * [capacitor](https://github.com/flux-framework/capacitor) - implements a
   bulk load utility on top of flux-core.

