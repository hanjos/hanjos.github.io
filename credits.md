---
layout: default
title: Credits
---

# Credits

Some projects of mine use certain assets, which require properly crediting the authors. In other cases, I'm not _required_ to do so, but I thought it'd be nice :) 

So here it goes:

{% if site.data.credits.size > 0 %}
<dl>
{% assign sorted_projects = site.data.credits | sort: 'title', 'last' %}
{% for project in sorted_projects %}
  <details>
    <summary><h2 id="{{ project.title | slugify: 'latin' }}">{{ project.title }} <a href="#{{ project.title | slugify: 'latin' }}"><img class="anchor" src="/assets/icons/link-variant.svg"></a></h2></summary>
  {% assign sorted_entries = project.credits | sort: 'title', 'last' %}

  {% for entry in sorted_entries %}
    {% include dt-entry.html entry=entry %}
  {% endfor %}
  </details>
{% endfor %}
</dl>
{% endif %}
