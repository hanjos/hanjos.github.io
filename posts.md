---
layout: default
title: Latest posts
---

Here are all my blog posts, tagged, excerpted and ordered chronologically for your appreciation. I can't promise frequency, correctness, usefulness or even sanity, but, well, go nuts :P

# Tags

<p>
{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags %}
  <a href='#{{ tag[0] }}' class='tag'>{{ tag[0] }} ({{ tag[1].size }})</a>
  {%- if forloop.last == false -%}
  , 
  {%- endif -%}
{% endfor %}
</p>

# Posts

{% assign count = site.posts.size %}
{% include search-widget.html count=count %}

<dl>
{% for post in site.posts %}
  {% include post-entry.html post=post show_tags=true show_excerpt=true %}
{% endfor %}
</dl>
