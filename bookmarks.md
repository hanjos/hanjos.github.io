---
layout: default
title: Bookmarks
---

# Bookmarks

As [promised](/2019/06/11/to-remember-is-to-live.html), here's links to some of the interesting stuff I've found over the years which (1) deserves to be saved for posterity and (2) is still around for me to link to (which, incidentally, demonstrates the value of a snapshot service...). 

I'll have to search for alternative links to the old good content. But for now, here's what I've got:

<br>

{% if site.data.bookmarks.size > 0 %}
<dl>
{% for bookmark in site.data.bookmarks %}
  {% if bookmark.url %}
  <dt><a href='{{ bookmark.url }}'>{{ bookmark.title }}</a>{% if bookmark.author %}, <small>by {{ bookmark.author }}</small>{% endif %}</dt>
  {% if bookmark.description %}<dd>{{ bookmark.description }}</dd>{% endif %}
  {% endif %}
{% endfor %}
</dl>
{% endif %}