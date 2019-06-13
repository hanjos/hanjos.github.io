---
layout: default
title: Pages by tags
---

> These are my tags. I could repeat the Full Metal Jacket bit, but that would be awfully derivative. I probably should look for another quote to paraphrase...

# Tags
<div class='tags'>
{% if site.tags.size > 0 %}
  {% for tag in site.tags %}
  <a href='#tag-{{ tag[0] }}' class='tag'>{{ tag[0] }} ({{ tag[1].size }})</a>
  {% endfor %}
{% else %}
  <small>No tags defined.</small>
{% endif %}
</div>

# Posts

{% if site.tags.size > 0 %}
{% for tag in site.tags %}
<h2 id='tag-{{ tag[0] }}' name='tag-{{ tag[0] }}' class='tag'>{{ tag[0] }}</h2>

<dl>
  {% for post in tag[1] %}
    {% include post-entry.html post=post show_tags=false show_excerpt=true %}
  {% endfor %}
</dl>
{% endfor %}
{% else %}
<small>No tags defined.</small>
{% endif %}
