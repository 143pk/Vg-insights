const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// CRC32 implementation
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) c = 0xedb88320 ^ (c >>> 1);
    else c = c >>> 1;
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function createChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = crc32(typeAndData);
  chunk.writeUInt32BE(crc, 8 + len);
  return chunk;
}

function createPng(width, height, getPixel) {
  const rowBytes = width * 4 + 1;
  const rawData = Buffer.alloc(rowBytes * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowBytes;
    rawData[rowOffset] = 0; // Filter type 0
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixel(x, y, width, height);
      const pixelOffset = rowOffset + 1 + x * 4;
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a !== undefined ? a : 255;
    }
  }

  const compressed = zlib.deflateSync(rawData, { level: 9 });
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6;
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;

  const ihdrChunk = createChunk('IHDR', ihdrData);
  const idatChunk = createChunk('IDAT', compressed);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Color interpolation
function lerpColor(c1, c2, t) {
  return [
    Math.round(c1[0] + (c2[0] - c1[0]) * t),
    Math.round(c1[1] + (c2[1] - c1[1]) * t),
    Math.round(c1[2] + (c2[2] - c1[2]) * t),
    c1[3] !== undefined ? Math.round(c1[3] + (c2[3] - c1[3]) * t) : 255
  ];
}

// Icon generator (VG Insights Brand)
function generateAppIcon(width, height, isMaskable = false) {
  const c1 = [2, 132, 199]; // Sky blue
  const c2 = [29, 78, 216]; // Royal blue
  const c3 = [11, 19, 43];  // Deep navy

  const cornerRadius = isMaskable ? 0 : Math.round(width * 0.22);

  return createPng(width, height, (x, y, w, h) => {
    // Rounded corners
    if (!isMaskable && cornerRadius > 0) {
      const rx = x < cornerRadius ? cornerRadius - x : (x >= w - cornerRadius ? x - (w - cornerRadius - 1) : 0);
      const ry = y < cornerRadius ? cornerRadius - y : (y >= h - cornerRadius ? y - (h - cornerRadius - 1) : 0);
      if (rx > 0 && ry > 0 && Math.sqrt(rx * rx + ry * ry) > cornerRadius) {
        return [0, 0, 0, 0]; // Transparent
      }
    }

    // Diagonal gradient
    const t = (x / w + y / h) / 2;
    let bg;
    if (t < 0.5) {
      bg = lerpColor(c1, c2, t * 2);
    } else {
      bg = lerpColor(c2, c3, (t - 0.5) * 2);
    }

    // Centered Badge / Lettering elements
    const nx = (x - w / 2) / (w / 2); // -1 to 1
    const ny = (y - h / 2) / (h / 2); // -1 to 1

    // Glow circle in center
    const dist = Math.sqrt(nx * nx + ny * ny);
    if (dist < 0.85) {
      const glow = Math.max(0, 1 - dist / 0.85);
      bg[0] = Math.min(255, bg[0] + Math.round(glow * 40));
      bg[1] = Math.min(255, bg[1] + Math.round(glow * 50));
      bg[2] = Math.min(255, bg[2] + Math.round(glow * 80));
    }

    // Draw Letter 'V'
    const inVLeft = (nx >= -0.65 && nx <= -0.15 && Math.abs(ny - (nx * 1.8 + 0.3)) < 0.12 && ny <= 0.6 && ny >= -0.45);
    const inVRight = (nx >= -0.45 && nx <= 0.05 && Math.abs(ny - (-nx * 1.8 - 0.45)) < 0.12 && ny <= 0.6 && ny >= -0.45);

    // Draw Letter 'G'
    const inGOuter = (nx >= -0.05 && nx <= 0.65 && ny >= -0.45 && ny <= 0.6);
    const gDist = Math.sqrt(Math.pow((nx - 0.3) / 0.35, 2) + Math.pow((ny - 0.05) / 0.5, 2));
    const inGRing = (gDist >= 0.65 && gDist <= 1.05 && (nx < 0.45 || ny > -0.05));
    const inGBar = (nx >= 0.22 && nx <= 0.58 && Math.abs(ny - 0.05) < 0.1);

    if (inVLeft || inVRight) {
      return [56, 189, 248, 255]; // Sky cyan
    }

    if (inGRing || inGBar) {
      return [255, 255, 255, 255]; // White
    }

    // Top lightbulb / star accent
    if (ny < -0.48 && ny > -0.75 && Math.abs(nx) < 0.18) {
      const bulbDist = Math.sqrt(Math.pow(nx / 0.15, 2) + Math.pow((ny + 0.62) / 0.12, 2));
      if (bulbDist <= 1.0) {
        return [251, 191, 36, 255]; // Warm Gold
      }
    }

    return bg;
  });
}

// Generate Desktop Screenshot (1280x720)
function generateDesktopScreenshot() {
  const width = 1280;
  const height = 720;

  return createPng(width, height, (x, y, w, h) => {
    // App background (Slate dark)
    let r = 15, g = 23, b = 42;

    // Header bar (y < 64)
    if (y < 64) {
      r = 30; g = 41; b = 59;
      // Header brand
      if (x > 32 && x < 180 && y > 18 && y < 46) {
        return [37, 99, 235, 255];
      }
      return [r, g, b, 255];
    }

    // Left sidebar (x < 240, y >= 64)
    if (x < 240) {
      r = 24; g = 33; b = 47;
      // Sidebar menu items
      if (y % 48 >= 12 && y % 48 <= 36 && x > 24 && x < 216) {
        return [51, 65, 85, 255];
      }
      return [r, g, b, 255];
    }

    // Main dashboard cards (grid)
    const mx = x - 270;
    const my = y - 90;
    if (mx > 0 && mx < 970 && my > 0 && my < 580) {
      const col = Math.floor(mx / 320);
      const row = Math.floor(my / 180);
      const cardX = mx % 320;
      const cardY = my % 180;

      if (cardX > 12 && cardX < 308 && cardY > 12 && cardY < 168) {
        if (cardY < 40) {
          // Card header
          if (row === 0 && col === 0) return [225, 29, 72, 255]; // Rose (Weakness Doctor)
          if (row === 0 && col === 1) return [37, 99, 235, 255]; // Blue (Weekly Mock)
          if (row === 0 && col === 2) return [217, 119, 6, 255]; // Amber (Mistake Book)
          return [30, 41, 59, 255];
        }
        return [30, 41, 59, 255]; // Card body
      }
    }

    return [r, g, b, 255];
  });
}

// Generate Mobile Screenshot (720x1280)
function generateMobileScreenshot() {
  const width = 720;
  const height = 1280;

  return createPng(width, height, (x, y, w, h) => {
    // Dark mobile background
    let r = 11, g = 17, b = 32;

    // Mobile Top App Bar (y < 90)
    if (y < 90) {
      if (y > 25 && y < 65 && x > 30 && x < 260) {
        return [37, 99, 235, 255]; // Brand
      }
      return [30, 41, 59, 255];
    }

    // Hero diagnostic card (y: 120 -> 360)
    if (y > 120 && y < 360 && x > 30 && x < 690) {
      const t = (x + y) / 1000;
      return lerpColor([225, 29, 72], [147, 51, 234], t);
    }

    // Cards list
    const my = y - 390;
    if (my > 0 && my < 760 && x > 30 && x < 690) {
      const cardY = my % 140;
      if (cardY > 10 && cardY < 130) {
        return [30, 41, 59, 255];
      }
    }

    // Bottom Navigation Bar (y > 1180)
    if (y > 1180) {
      if (x % 140 > 40 && x % 140 < 100 && y > 1210 && y < 1250) {
        return [56, 189, 248, 255];
      }
      return [24, 33, 47, 255];
    }

    return [r, g, b, 255];
  });
}

// Write all assets to public directory
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

console.log('Generating pristine PWA assets...');

fs.writeFileSync(path.join(publicDir, 'icon-192x192.png'), generateAppIcon(192, 192, false));
fs.writeFileSync(path.join(publicDir, 'icon-512x512.png'), generateAppIcon(512, 512, false));
fs.writeFileSync(path.join(publicDir, 'icon-maskable-512x512.png'), generateAppIcon(512, 512, true));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), generateAppIcon(180, 180, false));
fs.writeFileSync(path.join(publicDir, 'favicon.png'), generateAppIcon(512, 512, false));
fs.writeFileSync(path.join(publicDir, 'favicon-48x48.png'), generateAppIcon(48, 48, false));
fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), generateAppIcon(32, 32, false));
fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), generateAppIcon(16, 16, false));

fs.writeFileSync(path.join(publicDir, 'screenshot-desktop.png'), generateDesktopScreenshot());
fs.writeFileSync(path.join(publicDir, 'screenshot-mobile.png'), generateMobileScreenshot());

console.log('All PWA icons and screenshots generated successfully with valid PNG magic headers!');
