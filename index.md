---
layout: default
---

Use this family of projects to build site-customized resource management systems for high-performance computing (HPC) data centers. Our current projects include:

* [flux-core](https://github.com/flux-framework/flux-core): Implements the communication layer and lowest level services and interfaces for the Flux Resource Management Framework.

* [flux-sched](https://github.com/flux-framework/flux-sched): Contains the job scheduling facility for the Flux Resource Management Framework.

* [capacitor](https://github.com/flux-framework/capacitor): Implements a bulk execution manager using flux-core.

## Latest Release

{% for post in site.posts limit:1 %}
  <div class="post-preview">
    <span class="post-title alignable pull-left"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a> (<a href="{{ post.download }}" target="___blank">download</a>)</span>
    <span class="post-time alignable pull-right"><time>{{ post.date | date: '%B %d, %Y '}}</time></span>
  <div style="clear:both"></div>
  </div>
{% endfor %}
