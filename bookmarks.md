---
layout: default
title: Bookmarks
---

As [promised](/2019/06/11/to-remember-is-to-live.html), here is some of the interesting stuff I've found over the years. I selected links which: 

1. deserve to be saved for posterity; and 
2. are still around for me to link to. 

Item 2, incidentally, demonstrates the value of a snapshot service... 

# Bookmarks

<div class='search-widget'>
  <div class='search-bar'>
    <input type='text' id='search-input' name='search-by-tag' placeholder='Search by tag'>
    <button id='search-button' type='button'>
      <img src='/assets/images/magnify.svg' alt='Search by tag' width='20' />
    </button>
  </div>
<small id='search-count' class='side-comment'>{{ site.data.bookmarks.size }} bookmarks</small>
</div>


{% if site.data.bookmarks.size > 0 %}
<dl>
{% for bookmark in site.data.bookmarks %}
  {% include bookmark-entry.html bookmark=bookmark %}
{% endfor %}
</dl>
{% endif %}