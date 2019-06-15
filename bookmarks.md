---
layout: default
title: Bookmarks
---

As [promised](/2019/06/11/to-remember-is-to-live.html), here is some of the interesting stuff I've found over the years. I selected links which: 

1. deserve to be saved for posterity; and 
2. are still around for me to link to. 

Item 2, incidentally, demonstrates the value of a snapshot service... 

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