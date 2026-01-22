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
    'Pulsing Grid (Audio Reactive).json',
    'Diamond Grid Flow (Audio reactive).json',
    'Grid Pulse (Audio Reative).json',
    'Hexagon Grid Pulse (Audio reactive).json',
    'Mosaic Tiles (Audio Reactive).json'
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

    // DRAWING SHAPES
    clear(r = 0, g = 0, b = 0) {
        this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    fillRect(x, y, w, h) {
        this.ctx.fillRect(x, y, w, h);
    }

    strokeRect(x, y, w, h) {
        this.ctx.strokeRect(x, y, w, h);
    }

    clearRect(x, y, w, h) {
        this.ctx.clearRect(x, y, w, h);
    }

    fillCircle(x, y, radius) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fill();
    }

    strokeCircle(x, y, radius) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.stroke();
    }

    // PATHS
    beginPath() {
        this.ctx.beginPath();
    }

    closePath() {
        this.ctx.closePath();
    }

    fill() {
        this.ctx.fill();
    }

    stroke() {
        this.ctx.stroke();
    }

    clip() {
        this.ctx.clip();
    }

    moveTo(x, y) {
        this.ctx.moveTo(x, y);
    }

    lineTo(x, y) {
        this.ctx.lineTo(x, y);
    }

    drawLine(x1, y1, x2, y2) {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }

    arc(x, y, radius, startAngle, endAngle, counterclockwise = false) {
        this.ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
    }

    arcTo(x1, y1, x2, y2, radius) {
        this.ctx.arcTo(x1, y1, x2, y2, radius);
    }

    rect(x, y, w, h) {
        this.ctx.rect(x, y, w, h);
    }

    ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, ccw = false) {
        this.ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, ccw);
    }

    quadraticCurveTo(cpx, cpy, x, y) {
        this.ctx.quadraticCurveTo(cpx, cpy, x, y);
    }

    bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
        this.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }

    isPointInPath(x, y) {
        return this.ctx.isPointInPath(x, y);
    }

    isPointInStroke(x, y) {
        return this.ctx.isPointInStroke(x, y);
    }

    // STYLES
    fillStyle(r, g, b, a = 255) {
        this._fillColor = { r, g, b, a };
        this._gradient = null;
        this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a / 255})`;
    }

    strokeStyle(r, g, b, a = 255) {
        this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a / 255})`;
    }

    lineWidth(width) {
        this.ctx.lineWidth = width;
    }

    lineCap(cap) {
        this.ctx.lineCap = cap;
    }

    lineJoin(join) {
        this.ctx.lineJoin = join;
    }

    miterLimit(limit) {
        this.ctx.miterLimit = limit;
    }

    globalAlpha(alpha) {
        this.ctx.globalAlpha = alpha;
    }

    // SHADOWS
    shadowBlur(blur) {
        this.ctx.shadowBlur = blur;
    }

    shadowColor(r, g, b, a = 255) {
        this.ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${a / 255})`;
    }

    shadowOffsetX(x) {
        this.ctx.shadowOffsetX = x;
    }

    shadowOffsetY(y) {
        this.ctx.shadowOffsetY = y;
    }

    // GRADIENTS
    fillStyleGradient(gradient) {
        this._gradient = gradient;
        this.ctx.fillStyle = gradient.canvasGradient;
    }

    strokeStyleGradient(gradient) {
        this.ctx.strokeStyle = gradient.canvasGradient;
    }

    createLinearGradient(x0, y0, x1, y1) {
        return new CanvasGradient(this.ctx.createLinearGradient(x0, y0, x1, y1));
    }

    createRadialGradient(x0, y0, r0, x1, y1, r1) {
        return new CanvasGradient(this.ctx.createRadialGradient(x0, y0, r0, x1, y1, r1));
    }

    // TRANSFORMATIONS
    save() {
        this.ctx.save();
    }

    restore() {
        this.ctx.restore();
    }

    resetTransform() {
        this.ctx.resetTransform();
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

    transform(a, b, c, d, e, f) {
        this.ctx.transform(a, b, c, d, e, f);
    }

    setTransform(a, b, c, d, e, f) {
        this.ctx.setTransform(a, b, c, d, e, f);
    }

    // TEXT
    font(font) {
        this.ctx.font = font;
    }

    textAlign(align) {
        this.ctx.textAlign = align;
    }

    textBaseline(baseline) {
        this.ctx.textBaseline = baseline;
    }

    fillText(text, x, y) {
        this.ctx.fillText(text, x, y);
    }

    strokeText(text, x, y) {
        this.ctx.strokeText(text, x, y);
    }

    measureText(text) {
        return this.ctx.measureText(text);
    }

    // HELPERS
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

    rgbToHsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return { h, s, l };
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

        // Mock audio data for thumbnail (completely static)
        const audio = {
            // Fixed constant values - no variation
            bass: 0.15,
            mid: 0.2,
            treble: 0.15,
            volume: 0.2,
            beat: 0,
            // Capitalized properties
            Bass: 0.15,
            Mid: 0.2,
            Treble: 0.15,
            Volume: 0.2,
            Beat: 0,
            // GetBand with very low constant values
            GetBand: function (index) {
                if (index < 0 || index > 31) return 0;
                const center = 16;
                const distance = Math.abs(index - center);
                const value = Math.max(0, 200 - distance * 10);
                return value * 0.05;  // Extremely small
            }
        };

        // Mock timeControl
        const timeControl = { speed: 1, paused: false, Speed: 1, Paused: false };

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

        // Simulated audio data - STATIC for size, animated for color only
        const audio = {
            // COMPLETELY STATIC - no size variation at all!
            bass: 0.15,      // Fixed value
            mid: 0.2,        // Fixed value  
            treble: 0.15 + Math.sin(time * 5.7) * 0.15,   // Varies for color only
            volume: 0.2,     // Fixed value
            beat: Math.abs(Math.sin(time * 6.28)) > 0.85 ? 1 : 0,
            // GetBand returns consistent low values
            GetBand: function (index) {
                if (index < 0 || index > 31) return 0;
                const freq = index / 31;
                const wave = Math.sin(time * (2 + freq * 8) + index);
                const baseValue = (wave + 1) * 127;
                return Math.floor(baseValue * 0.2 * 0.05);  // Extremely gentle, consistent
            }
        };
        audio.bass = Math.max(0, Math.min(1, audio.bass));
        audio.mid = Math.max(0, Math.min(1, audio.mid));
        audio.treble = Math.max(0, Math.min(1, audio.treble));
        audio.volume = Math.max(0, Math.min(1, audio.volume));

        // Capitalized versions
        audio.Bass = audio.bass;
        audio.Mid = audio.mid;
        audio.Treble = audio.treble;
        audio.Volume = audio.volume;
        audio.Beat = audio.beat;

        // Mock timeControl
        const timeControl = { speed: 1, paused: false, Speed: 1, Paused: false };

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