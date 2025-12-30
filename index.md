---
layout: null
title: "Script Gallery"
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ page.title }} | {{ site.title }}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
      line-height: 1.6; 
      color: #333; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh; 
    }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
    .site-header { background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); padding: 2rem 0; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
    .site-header h1 a { color: #333; text-decoration: none; font-size: 2.5rem; font-weight: 700; }
    .hero { text-align: center; padding: 4rem 0; background: rgba(255,255,255,0.9); margin: 3rem auto; max-width: 800px; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); }
    .hero h1 { font-size: 3rem; color: #333; margin-bottom: 1rem; }
    .hero p { font-size: 1.2rem; color: #666; }
    .scripts-grid { 
      display: grid; 
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
      gap: 2rem; 
      margin: 3rem auto; 
      max-width: 1200px; 
    }
    .script-card { 
      background: rgba(255,255,255,0.95); 
      border-radius: 20px; 
      overflow: hidden; 
      box-shadow: 0 10px 40px rgba(0,0,0,0.15); 
      transition: all 0.3s ease; 
      backdrop-filter: blur(10px); 
    }
    .script-card:hover { 
      transform: translateY(-10px) scale(1.02); 
      box-shadow: 0 20px 60px rgba(0,0,0,0.25); 
    }
    .script-link { display: block; text-decoration: none; color: inherit; height: 100%; }
    .script-image { 
      position: relative; 
      height: 200px; 
      background: #000; 
      overflow: hidden; 
    }
    .script-image img { width: 100%; height: 100%; object-fit: cover; }
    .download-icon { 
      position: absolute; 
      top: 15px; right: 15px; 
      background: rgba(0,0,0,0.7); 
      color: white; 
      width: 40px; height: 40px; 
      border-radius: 50%; 
      display: flex; align-items: center; justify-content: center; 
      font-size: 1.2rem; 
      opacity: 0; transition: opacity 0.3s ease; 
    }
    .script-card:hover .download-icon { opacity: 1; }
    .script-card h3 { padding: 1.5rem 1.5rem 0.5rem; font-size: 1.3rem; color: #333; }
    .script-card p { padding: 0 1.5rem 1.5rem; color: #666; font-size: 0.95rem; }
    .install-guide { 
      background: rgba(255,255,255,0.9); 
      padding: 3rem; 
      border-radius: 20px; 
      margin: 4rem auto; 
      max-width: 800px; 
      text-align: center; 
    }
    .install-guide h2 { font-size: 2rem; color: #333; margin-bottom: 2rem; }
    .install-guide ol { display: grid; gap: 1rem; max-width: 600px; margin: 0 auto; text-align: left; font-size: 1.1rem; }
    .install-guide li { background: white; padding: 1rem 1.5rem; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
    .site-footer { background: rgba(0,0,0,0.8); color: white; text-align: center; padding: 2rem 0; margin-top: 4rem; }
    .site-footer a { color: #4fc3f7; text-decoration: none; }
    @media (max-width: 768px) { 
      .hero h1 { font-size: 2rem; } 
      .scripts-grid { grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem; }
      .install-guide { padding: 2rem 1rem; margin: 2rem 1rem; }
    }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="container">
      <h1><a href="{{ '/' | relative_url }}">{{ site.title }}</a></h1>
      <p>{{ site.description }}</p>
    </div>
  </header>

  <main>
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
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>&copy; 2025 <a href="https://github.com/CopyCherox">CopyCherox</a> | 
         <a href="https://github.com/CopyCherox/Artemis.Plugins.LayerBrushes.JavascriptCanvas.Scripts">Source</a></p>
    </div>
  </footer>
</body>
</html>
