---
layout: default
title: "Script Gallery"
---

<h2>Script Gallery</h2>
<p>Click a card to download the script file for use with the Artemis JavaScript Canvas plugin.</p>

<div class="script-grid">
  {% assign sorted = site.scripts | sort: "order" %}
  {% for script in sorted %}
    <div class="script-card">
      <a href="{{ site.scripts_dir }}/{{ script.file | escape }}" download>
        <div class="script-thumb">
          <img src="{{ site.images_dir }}/{{ script.image | escape }}"
               alt="{{ script.title | escape }}">
        </div>
        <div class="script-name">
          {{ script.title }}
        </div>
      </a>
    </div>
  {% endfor %}
</div>
