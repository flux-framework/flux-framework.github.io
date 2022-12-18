---
layout: page
title: About Flux Framework
permalink: /about/
graph: true
---

This suite of projects, tools, and libraries helps you build site-customized resource management systems for high-performance computing (HPC) data centers. [Get started now!](https://flux-framework.readthedocs.io/en/latest/quickstart.html) Our current projects include:

<ul class="list-group">
{% for repo in site.data.data.latest.cci-repos %}{% assign repo_name = repo[0] %}{% assign repo_meta = repo[1] %}{% assign description = repo_meta.description %}{% assign website = lookup[repo_name].website %}<li class="list-group-item"><a href="{% if website %}{{ website }}{% else %}https://github.com/{{ repo_name }}{% endif %}" target="_blank">{{ repo_name }}</a>{% if description %}: {{ description }}{% endif %}</li>{% endfor %}</ul>

<div class="row" style="padding-top:20px; flex-direction:row">
    <div class="col-md-12" style="flex-direction:row">
    {% include graphs/languages.html %}<span style="padding-left:50px"></span>
    </div>
</div>

Have a question about this portal repository, want to contribute, or report a bug? You can find us <a href="https://github.com/flux-framework/flux-framework.github.io" target="_blank">here on GitHub</a>.