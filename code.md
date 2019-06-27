---
layout: default
title: Code
---

# Code

Here is some of my code available in the wild. Unfortunately my meatier stuff is employer-owned, but I still have some interesting things running around...

{% assign sorted_tags = site.data.code | map: 'tags' | join: ',' | downcase | split: ',' | group_by_exp: 'item', 'item' | sort: 'name' %}
{% assign max_count = sorted_tags | map: 'size' | sort | last | times: 1.0 %}
<p class='tag-cloud'>
{% for tag in sorted_tags %}
<a href='#{{ tag.name }}' class='tag tag-size-{{ tag.size | divided_by: max_count | times: 7 | round }}'>{{ tag.name }}</a>&nbsp;
{% endfor %}
</p>

{% assign count = site.data.code.size %}
{% include search-widget.html count=count %}

{% if site.data.code.size > 0 %}
<dl>
{% assign sorted_projects = site.data.code | sort: 'title', 'last' %}
{% for project in sorted_projects %}
  {% include code-entry.html project=project %}
{% endfor %}
</dl>
{% endif %}