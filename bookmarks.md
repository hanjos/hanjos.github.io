---
layout: default
title: Bookmarks
---

# Bookmarks

As [promised](/2019/06/11/to-remember-is-to-live.html), here's some stuff that has interested, educated and/or amused me over the years. At least those which are still around for me to link to :)

{% assign sorted_tags = site.data.bookmarks | map: 'tags' | join: ',' | downcase | split: ',' | group_by_exp: 'item', 'item' | sort: 'name' %}
{% assign max_count = sorted_tags | map: 'size' | sort | last | times: 1.0 %}
<p class='tag-cloud'>
{% for tag in sorted_tags %}
<a href='#{{ tag.name }}' class='tag tag-size-{{ tag.size | divided_by: max_count | times: 7 | round }}'>{{ tag.name }}</a>&nbsp;
{% endfor %}
</p>

{% assign count = site.data.bookmarks.size %}
{% include search-widget.html count=count %}

{% if site.data.bookmarks.size > 0 %}
<dl>
{% assign sorted_bookmarks = site.data.bookmarks | sort: 'title', 'last' %}
{% for bookmark in sorted_bookmarks %}
  {% include bookmark-entry.html bookmark=bookmark %}
{% endfor %}
</dl>
{% endif %}