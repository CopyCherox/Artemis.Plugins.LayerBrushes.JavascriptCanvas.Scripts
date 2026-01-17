// List all your script filenames here
const SCRIPTS = [
    'Cellular Life.json',
    'Checkerboard Morph.json',
    'Checkerboard Pulse.json',
    'Circular Rings.json',
    'Electric Field.json',
    'Fire Effect.json',
    'Flowing Liquid Noise.json',
    'Hexagonal Pulse Grid.json',
    'Horizontal Color Bands.json',
    'Moving Rainbow Wave.json',
    'Pulsing Circle Grid.json',
    'Radial Color Burst.json',
    'Retro Scanlines.json',
    'Rotating Color Vortex.json',
    'Rotating Kaleidoscope Circles.json',
    'Rotating Triangle Mosaic.json',
    'Sinusoidal Grid Waves.json',
    'Smooth Gradient Flow.json',
    'Spiral Vortex Particles.json',
    'Waving Diamond Grid.json',
    'Woven Grid.json'
];

const baseUrl = window.location.hostname === 'localhost' ? '' : '/Artemis.Plugins.LayerBrushes.JavascriptCanvas.Scripts';

class CanvasContext {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this._fillColor = { r: 255, g: 255, b: 255 };
        this._gradient = null;
    }

    clear(r = 0, g = 0, b = 0) {
        this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    fillStyle(r, g, b, a = 255) {
        this._fillColor = { r, g, b, a };
        this._gradient = null;
        this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a / 255})`;
    }

    fillStyleGradient(gradient) {
        this._gradient = gradient;
        this.ctx.fillStyle = gradient.canvasGradient;
    }

    fillRect(x, y, w, h) {
        this.ctx.fillRect(x, y, w, h);
    }

    fillCircle(x, y, radius) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fill();
    }

    beginPath() {
        this.ctx.beginPath();
    }

    arc(x, y, radius, startAngle, endAngle) {
        this.ctx.arc(x, y, radius, startAngle, endAngle);
    }

    fill() {
        this.ctx.fill();
    }

    moveTo(x, y) {
        this.ctx.moveTo(x, y);
    }

    lineTo(x, y) {
        this.ctx.lineTo(x, y);
    }

    closePath() {
        this.ctx.closePath();
    }

    save() {
        this.ctx.save();
    }

    restore() {
        this.ctx.restore();
    }

    translate(x, y) {
        this.ctx.translate(x, y);
    }

    rotate(angle) {
        this.ctx.rotate(angle);
    }

    scale(x, y) {
        this.ctx.scale(x, y);
    }

    createLinearGradient(x0, y0, x1, y1) {
        return new CanvasGradient(this.ctx.createLinearGradient(x0, y0, x1, y1));
    }

    createRadialGradient(x0, y0, r0, x1, y1, r1) {
        return new CanvasGradient(this.ctx.createRadialGradient(x0, y0, r0, x1, y1, r1));
    }

    hslToRgb(h, s, l) {
        let r, g, b;
        if (s === 0) {
            r = g = b = l;
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
    }

    get globalCompositeOperation() {
        return this.ctx.globalCompositeOperation;
    }

    set globalCompositeOperation(value) {
        this.ctx.globalCompositeOperation = value;
    }
}

class CanvasGradient {
    constructor(canvasGradient) {
        this.canvasGradient = canvasGradient;
    }

    addColorStop(offset, r, g, b, a = 255) {
        this.canvasGradient.addColorStop(offset, `rgba(${r}, ${g}, ${b}, ${a / 255})`);
    }
}

class ScriptPlayer {
    constructor(card) {
        this.card = card;
        this.canvas = card.querySelector('canvas');
        this.img = card.querySelector('img');
        this.scriptUrl = card.dataset.script;
        this.ctx = null;
        this.scriptCode = null;
        this.scriptData = null;
        this.animationId = null;
        this.startTime = null;
        this.isPlaying = false;
        this.thumbnailGenerated = false;
    }

    initCanvas() {
        if (this.canvas.width > 0) return;

        const rect = this.canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.canvas.getContext('2d').scale(dpr, dpr);
    }

    async load() {
        if (this.scriptCode) return;
        try {
            const response = await fetch(this.scriptUrl);
            this.scriptData = await response.json();
            this.scriptCode = this.scriptData.JavaScriptCode;

            const titleElement = this.card.querySelector('h3');
            if (titleElement && this.scriptData.ScriptName) {
                titleElement.textContent = this.scriptData.ScriptName;
            }
        } catch (err) {
            console.error('Failed to load script:', err);
        }
    }

    async generateThumbnail() {
        if (this.thumbnailGenerated) return;

        this.initCanvas();
        await this.load();
        if (!this.scriptCode) return;

        this.ctx = new CanvasContext(this.canvas);
        const width = this.canvas.width;
        const height = this.canvas.height;
        const ctx = this.ctx;
        const time = 0.5;

        try {
            eval(this.scriptCode);
        } catch (err) {
            console.error('Thumbnail generation error:', err);
            return;
        }

        this.img.src = this.canvas.getContext('2d').canvas.toDataURL();
        this.thumbnailGenerated = true;
        this.card.classList.remove('loading');
    }

    start() {
        if (this.isPlaying || !this.scriptCode) return;
        this.initCanvas();
        this.isPlaying = true;
        this.startTime = performance.now();
        this.ctx = new CanvasContext(this.canvas);
        this.animate();
    }

    animate() {
        if (!this.isPlaying) return;

        const time = (performance.now() - this.startTime) / 1000;
        const width = this.canvas.width;
        const height = this.canvas.height;
        const ctx = this.ctx;

        try {
            eval(this.scriptCode);
        } catch (err) {
            console.error('Script execution error:', err);
            this.stop();
            return;
        }

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    stop() {
        this.isPlaying = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScripts);
} else {
    initScripts();
}

function initScripts() {
    const grid = document.getElementById('scripts-grid');
    if (!grid) {
        console.error('scripts-grid element not found');
        return;
    }

    const players = new Map();

    SCRIPTS.forEach((filename, index) => {
        const scriptUrl = `${baseUrl}/scripts/${filename}`;

        const card = document.createElement('div');
        card.className = 'script-card loading';
        card.dataset.script = scriptUrl;

        card.innerHTML = `
      <a href="${scriptUrl}" class="script-link" download="${filename}">
        <div class="script-image">
          <img alt="Loading...">
          <canvas></canvas>
          <div class="download-icon">📥</div>
        </div>
        <h3>Loading...</h3>
      </a>
    `;

        grid.appendChild(card);

        const player = new ScriptPlayer(card);
        players.set(card, player);

        setTimeout(() => {
            player.generateThumbnail();
        }, index * 100);

        card.addEventListener('mouseenter', async () => {
            await player.load();
            player.start();
        });

        card.addEventListener('mouseleave', () => {
            player.stop();
        });
    });
}
