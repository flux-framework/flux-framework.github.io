---
layout: default
---

Page content

## Recent Activity
<ul>
{% for post in site.posts %}
<div class="post-preview">
    <li>
        <span class="post-title alignable pull-left">
            <a class="post-link underline" href="{{ post.url | prepend: site.baseurl }}">
            {{ post.title }}
            </a>
        </span>
        <span class="post-time alignable pull-right">
            <time>{{ post.date | date: '%B %d, %Y '}}</time>
        </span>
    </li>
    <div style="clear:both"></div>
</div>
{% endfor %}
</ul>
