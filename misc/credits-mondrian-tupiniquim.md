---
layout: default
title: Credits - Mondrian tupiniquim nerd
---

# Credits

I've used several licensed images, which require proper credit. Here it goes:

{% if site.data.mondrian_credits.size > 0 %}
<dl>
{% assign sorted = site.data.mondrian_credits | sort: 'title', 'last' %}
{% for c in sorted %}
  {% include dt-entry.html entry=c %}
{% endfor %}
</dl>
{% endif %}