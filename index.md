---
layout: default
---

This suite of projects, tools, and libraries helps you build site-customized resource management systems for high-performance computing (HPC) data centers. [Get started now!](https://flux-framework.readthedocs.io/en/latest/quickstart.html) Our current projects include:

* [flux-core](https://github.com/flux-framework/flux-core): Implements the communication layer and lowest level services and interfaces

* [flux-sched](https://github.com/flux-framework/flux-sched): Contains the graph-based Fluxion job scheduler

* [flux-accounting](https://github.com/flux-framework/flux-accounting/): Implements the bank/accounting interface and database 

* [flux-security](https://github.com/flux-framework/flux-security): Contains Flux's security code, including the Independent Minister of Privileges

## Latest Releases

{% for post in site.posts limit:2 %}
  <div class="post-preview">
    <span class="post-title alignable pull-left"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a> (<a href="{{ post.download }}" target="___blank">download</a>)</span>
    <span class="post-time alignable pull-right"><time>{{ post.date | date: '%B %d, %Y '}}</time></span>
  <div style="clear:both"></div>
  </div>
{% endfor %}
