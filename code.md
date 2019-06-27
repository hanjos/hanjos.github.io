---
layout: default
title: Code
---

Here is some of my code available in the wild. Unfortunately my meatier stuff is employer-owned, but I still have some interesting things running around...

# Tags

{% assign sorted_tags = site.data.projects | map: 'tags' | join: ',' | downcase | split: ',' | group_by_exp: 'item', 'item' | sort: 'name' %}
{% assign max_count = sorted_tags | map: 'size' | sort | last | times: 1.0 %}
<p class='tag-cloud'>
{% for tag in sorted_tags %}
<a href='#{{ tag.name }}' class='tag tag-size-{{ tag.size | divided_by: max_count | times: 7 | round }}'>{{ tag.name }}</a>&nbsp;
{% endfor %}
</p>

# Projects

{% assign count = site.data.projects.size %}
{% include search-widget.html count=count %}

{% if site.data.projects.size > 0 %}
<dl>
{% assign sorted_projects = site.data.projects | sort: 'title', 'last' %}
{% for project in sorted_projects %}
  {% include code-entry.html project=project %}
{% endfor %}
</dl>
{% endif %}