---
layout: default
overview: true
---

<section class="intro">
  <div class="grid">
   <div class="unit two-thirds center-on-mobiles">
   <p>
   Flux Framework is a suite of projects, tools, and libraries that may be used to build site-custom resource managers at high-performance computing sites.
   </p>
   </div>
</div>

## Recent Activity
<div id="home">
  {% for post in site.posts reversed %}
  <h1>{{ post.title }}</h1>
    {{ content }}
  {% endfor %}
</div>
