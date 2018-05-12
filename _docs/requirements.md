---
layout: docs
title: "Build prerequisites"
permalink: /docs/requirements/
---

This page is intended to list build requirements for
base Flux framework projects, notably [flux-core](https://github.com/flux-framework/flux-core),
which is the foundation for most other framework projects.

The major requirements are listed in the sections below. Requirements are also kept
up to date in a Travis-CI helper script in the flux-core source,
[`travis-dep-builder.sh`](https://github.com/flux-framework/flux-core/blob/master/src/test/travis-dep-builder.sh),
which can either be run by hand to download requirements, or viewed to determine latest required versions
and packages. `travis-dep-builder.sh` requires `pip` and `luarocks` to fetch python and Lua dependencies:

```console
~/flux-core.git $ src/test/travis-dep-builder.sh
...
~/flux-core.git $ $(src/test/travis-dep-builder.sh --printenv)
~/flux-core.git $ ./autogen.sh && ./configure 
```

Alternately [spack](https://github.com/scalability-llnl/spack) can be used to
build all flux dependencies with either `spack install flux` or `spack diy
flux@master` from inside a clone of the flux repository.

---

* toc
{:toc}

### ZeroMQ

Flux core messaging is built on the excellent [zeromq](http://zeromq.org/)
messaging library. Flux currently requires a relatively recent version of zeromq,
built with libsodium support, as well as the [czmq](https://github.com/zeromq/czmq)
bindings for C:

| Requirement | version  |   Notes                  |
|:------------|:---------|:------------------------:|
| `libsoduim` | `>1.0.1` |                          |
| `zeromq`    | `>4.0.4` | built `--with-libsodium` |
| `czmq`      | `=3.0.2` |                          |
|=============|==========|==========================|

### JSON

Flux makes heavy use of JSON encoding for messages. The code
currently requires [jansson](https://github.com/akheron/jansson/)
v2.6 or greater.

### MUNGE

 * [libmunge](https://github.com/dun/munge) v0.5.11 or greater

### hwloc

 * [hwloc](https://www.open-mpi.org/projects/hwloc/) v1.11.1 or greater.

### sqlite3

 * [sqlite](https://sqlite.org/download.html) version 3.

### yaml-cpp

 * [yaml-cpp](https://github.com/jbeder/yaml-cpp) v0.5.1 or greater.

### Lua
 
Flux makes use of Lua scripts and bindings for some functionality.
Lua 5.1 is required for now. However, support for v5.2 and v5.3
is planned in the near future.

Lua module requirements include:
 
 * luaposix

Internal versions of `lua-hostlist` and `lua-affinity` are supplied
with flux-core.

### Python

Generation of flux-core bindings for python requires the following
version of Python and support libs

 | Requirement | version  | Notes                    |
 |:------------|:---------|:------------------------:|
 | `python`    | `>=2.7`  |                          |
 | `cffi`      | `>=1.0`  |                          |
 | `pycparser` | `>=2.2`  |                          |
 | `ply`       | `>=3.6`  |                          |

### Asciidoc

Manual pages are written in asciidoc. For man page generation `asciidoc` is required.
