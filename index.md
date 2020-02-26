---
layout: default
---

<section class="intro">
  <div class="grid">
   <div class="unit two-thirds center-on-mobiles">
   <p>
   Flux Framework is a suite of projects, tools, and libraries that may be used to build site-custom resource managers at high-performance computing sites.
   </p>
   </div>
</div>

{% for post in site.posts %}
<div class="post-preview">
<span class="post-title alignable pull-left">
<a class="post-link underline" href="{{ post.url | prepend: site.baseurl }}">
{{ post.title }}
</a>
</span>
<span class="post-time alignable pull-right">
<time>{{ post.date | date: '%B %d, %Y '}}</time>
</span>
<div style="clear:both"></div>
</div>
{% endfor %}
