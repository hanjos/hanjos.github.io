---
layout: default
title: Credits
---

# Credits

Some projects of mine use assets which require properly crediting the authors. So here it goes:

{% if site.data.credits.size > 0 %}
<dl>
{% assign sorted_projects = site.data.credits | sort: 'title', 'last' %}
{% for project in sorted_projects %}
  ## test
{% endfor %}
</dl>
{% endif %}