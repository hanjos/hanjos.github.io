---
layout: default
title: Bookmarks
---

As [promised](/2019/06/11/to-remember-is-to-live.html), here is some of the interesting stuff I've found over the years, which: 

1. deserve to be saved for posterity; and 
2. are still around for me to link to. 

Item 2, incidentally, demonstrates the value of a snapshot service... 

# Tags

<p>
{% assign sorted_tags = site.data.bookmarks | map: 'tags' | join: ',' | downcase | split: ',' | group_by_exp: 'item', 'item' | sort: 'name' %}
<!-- {{ sorted_tags }} -->
{% for tag in sorted_tags %}
  <span class='tag'>{{ tag.name }} ({{ tag.size }})</span>
  {%- if forloop.last == false -%}
  , 
  {%- endif -%}
{% endfor %}
</p>

# Bookmarks

{% assign count = site.data.bookmarks.size %}
{% include search-widget.html count=count %}

{% if site.data.bookmarks.size > 0 %}
<dl>
{% for bookmark in site.data.bookmarks %}
  {% include bookmark-entry.html bookmark=bookmark %}
{% endfor %}
</dl>
{% endif %}