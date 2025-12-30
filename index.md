---
layout: default
title: "Script Gallery"
---

<div class="hero">
  <h1>🎨 JavaScript Canvas Scripts</h1>
  <p>Download LED effects for the <a href="https://github.com/CopyCherox/Artemis.Plugins.LayerBrushes.JavascriptCanvas">Artemis JavaScript Canvas plugin</a></p>
</div>

<div class="scripts-grid">
  {% for script in site.data.scripts %}
  <div class="script-card">
    <a href="{{ site.baseurl }}/scripts/{{ script.file }}" class="script-link" download="{{ script.filename }}">
      <div class="script-image">
        <img src="{{ site.baseurl }}/images/{{ script.image }}" alt="{{ script.title }}" loading="lazy">
        <div class="download-icon">📥</div>
      </div>
      <h3>{{ script.title }}</h3>
      <p>{{ script.description }}</p>
    </a>
  </div>
  {% endfor %}
</div>

<div class="install-guide">
  <h2>How to Install</h2>
  <ol>
    <li>Download a script by clicking any card above</li>
    <li>Open Artemis → Add JavaScript Canvas layer brush</li>
    <li>Click "Import..." → Select the .json file</li>
    <li>Select the script and click "Apply Changes to Layer Brush"</li>
  </ol>
</div>
