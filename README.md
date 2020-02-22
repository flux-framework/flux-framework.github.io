# flux-sandbox

This directory contains the code for flux-framework docs site, flux-framework.github.io.

When adding documentation under _docs/*.md, also be sure to update sidebar navigation by editing _data/docs.yml.

Posts and news can be placed under _posts and should be named with a date prefix + url. All posts and news items should also contain the following tags in the Jekyll frontmatter:

---
layout: news_item
title: The post title
date: "2015-11-24 10:46:20 -08:00"
author: github_username
categories: info
---
Where categories are generic informational tags for posts, but release is special and should be used for release announcements.
