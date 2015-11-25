---
layout: docs
title: "Quickstart"
permalink: /docs/quickstart/
---

***
A quick introduction to Flux and flux-core.

* Generate TOC:
{:toc}
***

### Building the code

Clone current flux-core master:

{% highlight bash %}
$ git clone https://github.com/flux-framework/flux-core.git
Initialized empty Git repository in /g/g0/grondo/flux-core/.git/
$ cd flux-core
{% endhighlight %}

Build flux-core. In order to build python bindings ensure you have
python-2.7 and python-cffi available in your current environment:

{% highlight bash %}
$ module load python/2.7 python-cffi python-pycparser 
$ ./autogen.sh && ./configure 
Running aclocal ... 
Running libtoolize ... 
Running autoheader ... 
...
$ make -j 8
...
{% endhighlight %}

Ensure all is right with the world by running the built-in `make check`
target:

{% highlight bash %}
$ make check
Making check in src
...
==================================================================
Testsuite summary for flux-core 0.1.0
==================================================================
# TOTAL: 814
# PASS:  804
# SKIP:  7
# XFAIL: 3
# FAIL:  0
# XPASS: 0
# ERROR: 0
==================================================================
{% endhighlight %}

### Starting a Flux instance

In order to use Flux you first must initiate a Flux *instance* or *session*.

A Flux session is composed of a hierarchy of `flux-broker` processes which
are launched via any parallel launch utility that supports PMI. For example,
`srun`, `mpiexec.hydra`, etc., or locally for testing via the `flux start`
command.

To start a Flux session with 4 brokers on the local node, use `flux start`:

{% highlight bash %}
$ src/cmd/flux start --size=4
[1448039605.299890] broker.info[0]: nodeset: [0-3] (complete)
[1448039605.299939] broker.info[0]: starting initial program
$
{% endhighlight %}

A flux session can be also be started under Slurm using PMI. To start
by using `srun(1)`, simply run the `flux broker` command under a Slurm
job. You will likely want to start a single broker process per node:

{% highlight bash %}
$ srun -N4 -n4 --pty src/cmd/flux broker
srun: Job is in held state, pending scheduler release
srun: job 1136410 queued and waiting for resources
srun: job 1136410 has been allocated resources
[1448043480.285957] broker.info[0]: nodeset: [0-3] (complete)
[1448043480.286019] broker.info[0]: starting initial program
$
{% endhighlight %}

After broker wireup is completed, the Flux session starts an "initial
program" on rank 0 broker. By default, the initial program is an interactive
shell, but an alternate program can be supplied on the `flux start` or 
broker command line. Once the initial program terminates, the Flux session is
considered complete and brokers exit.

{% highlight bash %}
$ exit
[1448039876.435357] broker.info[0]: 0: shutdown in 0.500s: Exited
$
{% endhighlight %}

By default, Flux sets the initial program environment such that the
`flux(1)` command that was used to start the session is found first
in `PATH`, so within the initial program shell, running `flux` will
work as expected:

{% highlight bash %}
$ flux
Usage: flux [OPTIONS] COMMAND ARGS
    -x,--exec-path PATH   prepend PATH to command search path
    -M,--module-path PATH prepend PATH to module search path
    -O,--connector-path PATH   prepend PATH to connector search path
[snip]
$
{% endhighlight %}

To get help on any `flux` subcommand or API program, the `flux help`
command may be used. For example, to view the man page for the `flux-up(1)`
command, use

{% highlight bash %}
$ flux help up
{% endhighlight %}

### Interacting with a Flux session

There are several low-level commands of interest to interact with
a Flux sessions. For example, to view states of broker ranks within
the current session, `flux up` may be used:

{% highlight bash %}
$ flux up
ok:     [0-3]
slow:   
fail:   
unknown:
{% endhighlight %}

The `flux topo` command may be used to visualize the topology of the
current Flux session. To display a graphviz rendered graphic of the
topology, use

{% highlight bash %}
$ flux topo | dot -Tpng | display
{% endhighlight %}

The size, current rank, comms URIs, logging levels, as well as other
instance parameters are termed "attributes" and can be viewed and manipulated
with the `lsattr`, `getattr`, and `setattr` commands, e.g.

{% highlight bash %}
$ flux getattr rank
0
$ flux getattr size
4
{% endhighlight %}

The current log level is also an attribute and can be modified at runtime:

{% highlight bash %}
$ flux getattr log-level
6
$ flux setattr log-level 4  # Make flux quieter
$ flux getattr log-level
4
{% endhighlight %}

To see a list of all attributes and their values, use `flux lsattr -v`.

Log messages from each broker are kept in a local ring buffer. When log
level has been quieted, recent log messages for the local rank may be
dumped via the `flux dmesg` command:

{% highlight bash %}
$ flux dmesg
[1448039921.451059] broker.info[0]: nodeset: [0-3] (complete)
[1448039921.451114] broker.info[0]: starting initial program
[1448039921.688152] resource-hwloc.debug[0]: loaded
{% endhighlight %}

Services within a Flux session may be implemented by modules loaded
in the `flux-broker` process on one or more ranks of the session. To
query and manage broker modules, Flux provides a `flux module` command

{% highlight bash %}
$ flux module list --rank=all
Module                 Size  Digest Idle Nodeset
connector-local      752396 20C6257    0 [0-3]
kvs                  858687 EACB509    0 [0-3]
modctl               764858 EDBAD08    0 [0-3]
barrier              737744 436327D idle [0-3]
wrexec               737322 1AD1C03 idle [0-3]
mecho                723754 C611661 idle [0-3]
live                 788795 15CB1FE    0 [0-3]
job                  735006 B04E94B idle 0
resource-hwloc       750095 D0FB582 idle [0-3]
{% endhighlight %}

The most basic functionality of these service modules
can be tested with the `flux ping` utility, which targets a builtin `*.ping`
handler registered by default with each module.

{% highlight bash %}
$ flux ping --count=2 kvs
kvs.ping pad=0 seq=0 time=0.329 ms (54FD6!7054E!0!2A139)
kvs.ping pad=0 seq=1 time=0.539 ms (54FD6!7054E!0!2A139)
{% endhighlight %}

By default the local (or closest) instance of the service is targeted, but
a specific rank can be selected with the `--rank` option.

{% highlight bash %}
$ flux ping --rank=3 --count=2 kvs
3!kvs.ping pad=0 seq=0 time=0.819 ms (03064!7054E!0r!3!32F56)
3!kvs.ping pad=0 seq=1 time=1.036 ms (03064!7054E!0r!3!32F56)
{% endhighlight %}

The `flux-ping` utility is a good way to test the round-trip latency
to any rank within a Flux session.

### Flux KVS

The key-value store (kvs) is a core component of a Flux instance. The
`flux kvs` command provides a utility to list and manipulate values
of the KVS. For example, hwloc information for the current instance is
loaded into the kvs by the `resource-hwloc` module at instance startup.
The resource information is available under the kvs key `resource.hwloc`
For example, the count of total Cores available on rank 0 can be obtained
from the kvs via:

{% highlight bash %}
$ flux kvs get resource.hwloc.by_rank.0.Core
16
{% endhighlight %}

See `flux help kvs` for more information.


### Launching work in a Flux session

Flux has two methods to launch "remote" tasks and parallel work within
a session. The `flux exec` utilitity is a low-level remote execution
framework which depends on as few other services as possible and is used
primarily for testing. By default, `flux exec` runs a single copy of the
provided `COMMAND` on each rank in a session:

{% highlight bash %}
$ flux exec flux getattr rank
0
3
2
1
{% endhighlight %}

Though individual ranks may be targetted:

{% highlight bash %}
$ flux exec -r 3 flux getattr rank
3
{% endhighlight %}

To view processes launched using `flux exec`, a `flux ps` program is
provided

{% highlight bash %}
$ flux exec sleep 100 &
[1] 161298
$ $ flux ps
OWNER     RANK       PID  COMMAND
none         0    111760  /bin/bash
8E20D        0    162394  sleep
8E20D        3    162395  sleep
8E20D        2    162396  sleep
8E20D        1    162397  sleep
{% endhighlight %}

The `OWNER` field refers to a UUID of the requesting entity in the system
not  a user identity.


The second method for launching paralell jobs is a prototype based on
use of the Flux KVS for parallel job management termed "WRECK". The
wreck prototype consists of a `flux wreckrun` frontend command,, and
a `flux wreck` utility for operating and querying jobs run under the
prototype.

For a full description of the `flux wreckrun` command, see `flux help wreckrun`

 * Run 4 copies of hostname 

{% highlight bash %}
$ flux wreckrun -n4 --label-io hostname
0: hype346
2: hype349
1: hype347
3: hype350
{% endhighlight %}

 * Run an MPI job (for MPI that supports PMI)

{% highlight bash %}
$ flux wreckrun -n128 ./hello
0: completed MPI_Init in 0.944s.  There are 128 tasks
0: completed first barrier
0: completed MPI_Finalize
{% endhighlight %}

 * Run a job and immediately detach. (Since jobs are KVS based, jobs can
   run completely detached from any "front end" command)(

{% highlight bash %}
$ flux wreckrun --detach -n128 ./hello
7
{% endhighlight %}
   Here, the allocated ID for the job is immediately echoed to stdout.

 * View output of a job

{% highlight bash %}
$ flux wreck attach 7
0: completed MPI_Init in 0.932s.  There are 128 tasks
0: completed first barrier
0: completed MPI_Finalize
{% endhighlight %}

 * Get status of a completed job

{% highlight bash %}
$ flux wreck status 7
Job 7 status: complete
task[0-127]: exited with exit code 0
{% endhighlight %}

 * List jobs

{% highlight bash %}
$ flux wreck ls
    ID NTASKS STATE                    START      RUNTIME    RANKS COMMAND
     1      1 complete   2015-11-20T10:18:37       0.101s        0 hostname
     2      1 complete   2015-11-20T10:18:53       0.019s        0 hsotname
     3      1 complete   2015-11-20T10:19:00       0.014s        0 hostname
     4      4 complete   2015-11-20T10:19:05       0.105s    [0-3] hostname
     5      4 complete   2015-11-20T10:21:29       2.394s    [0-3] hello
     6    128 complete   2015-11-20T10:22:09       3.269s    [0-3] hello
     7    128 complete   2015-11-20T10:23:41       3.381s    [0-3] hello
{% endhighlight %}
