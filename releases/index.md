---
layout: default
title: Release Notes
permalink: /releases/
---


  {% for post in site.posts %}
  <div class="post-preview">
    <h3>
      <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a> (<a href="{{ post.download }}" target="___blank">download</a>)
      <small class="pull-right">{{ post.date | date: '%B %d, %Y' }}</small>
    </h3>
  <div style="clear:both"></div>
  </div>
{% endfor %}
