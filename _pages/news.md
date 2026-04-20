---
layout: page
permalink: /news/
title: news
description: All announcements.
nav: true
nav_order: 3
---

<div class="news">
  {% assign news = site.news | reverse %}
  {% for item in news %}
    <h6 class="mt-3 mb-1">{{ item.date | date: "%b %-d, %Y" }}</h6>
    {{ item.content }}
  {% endfor %}
</div>
