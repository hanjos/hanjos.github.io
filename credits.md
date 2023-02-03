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
  <details>
  <summary><h2>{{ project.title }}</h2></summary>
  {% assign sorted_entries = project.credits | sort: 'title', 'last' %}

  {% for entry in sorted_entries %}
    {% include dt-entry.html entry=entry %}
  {% endfor %}
  </details>
{% endfor %}
</dl>
{% endif %}