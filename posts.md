---
layout: default
title: Latest posts
---

# Posts

Here are all my blog posts, tagged, excerpted and ordered chronologically for your appreciation. I can't promise frequency, correctness, usefulness or even sanity, but, well, go nuts :P

{% assign sorted_tags = site.tags | sort %}
{% assign max_count = site.tags | group_by_exp: 'item', 'item[1].size' | map: 'name' | sort | last | times: 1.0 %}
<details>
<summary><h2>Tags</h2></summary>
<p class='tag-cloud'>
{% for tag in sorted_tags %}
  <a href='#{{ tag[0] }}' class='tag tag-size-{{ tag[1].size | divided_by: max_count | times: 7 | round }}'>{{ tag[0] }}</a>&nbsp;
{% endfor %}
</p>
</details>

{% assign count = site.posts.size %}
{% include search-widget.html count=count %}

<dl>
{% for post in site.posts %}
  {% include dt-entry.html entry=post %}
{% endfor %}
</dl>
