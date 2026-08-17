import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Read font and convert to base64 for self-contained SVG
const fontPath = '/root/.local/share/fonts/PlusJakartaSans.ttf';
const fontBase64 = fs.readFileSync(fontPath).toString('base64');

/**
 * EXACT VISUALLY IDENTICAL SVG MATCHING THE USER'S UPLOADED LOGO:
 * - 100% vector self-contained SVG with embedded Plus Jakarta Sans ExtraBold/Bold font
 * - Clean transparent background
 * - Left vertical blue bar
 * - 'V' with vibrant electric blue -> navy gradient
 * - 'G' and 'Insights' in solid deep midnight navy (#081226)
 * - Lightbulb icon perched directly above the letter 'I' with radiating rays and cyan glow
 * - Subtitle 'NEET UG PLATFORM' with left and right tapering accent lines
 */
const fullLogoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 270" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <style>
      @font-face {
        font-family: 'Plus Jakarta Sans';
        src: url('data:font/truetype;charset=utf-8;base64,${fontBase64}') format('truetype');
        font-weight: 800;
        font-style: normal;
      }
      .brand-title {
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        font-weight: 800;
        font-size: 112px;
        letter-spacing: -2px;
      }
      .brand-sub {
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        font-weight: 800;
        font-size: 24.5px;
        letter-spacing: 9px;
      }
    </style>

    <linearGradient id="vGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0080FF" />
      <stop offset="45%" stop-color="#0055FF" />
      <stop offset="100%" stop-color="#081226" />
    </linearGradient>

    <linearGradient id="lineLeft" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0066FF" stop-opacity="0" />
      <stop offset="100%" stop-color="#0066FF" stop-opacity="1" />
    </linearGradient>

    <linearGradient id="lineRight" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0066FF" stop-opacity="1" />
      <stop offset="100%" stop-color="#0066FF" stop-opacity="0" />
    </linearGradient>

    <filter id="bulbGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="3.5" flood-color="#0077FF" flood-opacity="0.65" />
    </filter>
  </defs>

  <!-- Left Vertical Accent Bar -->
  <line x1="36" y1="46" x2="36" y2="190" stroke="#0066FF" stroke-width="5.5" stroke-linecap="round" />

  <!-- Main Wordmark: VG Insights -->
  <g transform="translate(74, 0)">
    <text x="0" y="168" class="brand-title">
      <tspan fill="url(#vGrad)">V</tspan><tspan fill="#081226">G </tspan><tspan fill="#081226">Insights</tspan>
    </text>

    <!-- Glowing Lightbulb perched directly above the letter 'I' in Insights -->
    <g transform="translate(225, 46)" filter="url(#bulbGlow)">
      <!-- 5 Radiating Light Rays -->
      <line x1="0" y1="-22" x2="0" y2="-14" stroke="#0077FF" stroke-width="3.5" stroke-linecap="round" />
      <line x1="-16" y1="-16" x2="-10" y2="-10" stroke="#0077FF" stroke-width="3.5" stroke-linecap="round" />
      <line x1="16" y1="-16" x2="10" y2="-10" stroke="#0077FF" stroke-width="3.5" stroke-linecap="round" />
      <line x1="-21" y1="-3" x2="-13" y2="-3" stroke="#0077FF" stroke-width="3.5" stroke-linecap="round" />
      <line x1="21" y1="-3" x2="13" y2="-3" stroke="#0077FF" stroke-width="3.5" stroke-linecap="round" />

      <!-- Glass Bulb Contour -->
      <path d="M-11 -3 C-16 -9 -14 -18 -6 -21 C3 -24 13 -19 14 -11 C15 -6 12 -2 9 2 C7 5 7 8 7 11 L-7 11 C-7 8 -7 5 -9 2 C-10 0 -11 -1 -11 -3 Z" fill="#FFFFFF" stroke="#0077FF" stroke-width="3.5" stroke-linejoin="round" />
      <!-- Bulb base line -->
      <line x1="-4.5" y1="15" x2="4.5" y2="15" stroke="#0077FF" stroke-width="3" stroke-linecap="round" />
    </g>

    <!-- Subtitle: NEET UG PLATFORM -->
    <g transform="translate(0, 226)">
      <!-- Left Tapering Accent Line -->
      <line x1="20" y1="-9" x2="185" y2="-9" stroke="url(#lineLeft)" stroke-width="2.8" stroke-linecap="round" />
      
      <!-- Centered Text -->
      <text x="400" y="0" class="brand-sub" fill="#0066FF" text-anchor="middle">NEET UG PLATFORM</text>
      
      <!-- Right Tapering Accent Line -->
      <line x1="615" y1="-9" x2="780" y2="-9" stroke="url(#lineRight)" stroke-width="2.8" stroke-linecap="round" />
    </g>
  </g>
</svg>
`;

/**
 * EXACT DARK MODE LOGO:
 * Crisp white text with cyan/sky-blue glowing accents
 */
const fullLogoDarkSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 270" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <style>
      @font-face {
        font-family: 'Plus Jakarta Sans';
        src: url('data:font/truetype;charset=utf-8;base64,${fontBase64}') format('truetype');
        font-weight: 800;
        font-style: normal;
      }
      .brand-title {
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        font-weight: 800;
        font-size: 112px;
        letter-spacing: -2px;
      }
      .brand-sub {
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        font-weight: 800;
        font-size: 24.5px;
        letter-spacing: 9px;
      }
    </style>

    <linearGradient id="vGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="45%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#60A5FA" />
    </linearGradient>

    <linearGradient id="lineLeftDark" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0" />
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="1" />
    </linearGradient>

    <linearGradient id="lineRightDark" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="1" />
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0" />
    </linearGradient>

    <filter id="bulbGlowDark" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#38BDF8" flood-opacity="0.85" />
    </filter>
  </defs>

  <!-- Left Vertical Accent Bar -->
  <line x1="36" y1="46" x2="36" y2="190" stroke="#38BDF8" stroke-width="5.5" stroke-linecap="round" />

  <!-- Main Wordmark: VG Insights -->
  <g transform="translate(74, 0)">
    <text x="0" y="168" class="brand-title">
      <tspan fill="url(#vGradDark)">V</tspan><tspan fill="#FFFFFF">G </tspan><tspan fill="#FFFFFF">Insights</tspan>
    </text>

    <!-- Glowing Lightbulb perched directly above the letter 'I' in Insights -->
    <g transform="translate(225, 46)" filter="url(#bulbGlowDark)">
      <line x1="0" y1="-22" x2="0" y2="-14" stroke="#38BDF8" stroke-width="3.5" stroke-linecap="round" />
      <line x1="-16" y1="-16" x2="-10" y2="-10" stroke="#38BDF8" stroke-width="3.5" stroke-linecap="round" />
      <line x1="16" y1="-16" x2="10" y2="-10" stroke="#38BDF8" stroke-width="3.5" stroke-linecap="round" />
      <line x1="-21" y1="-3" x2="-13" y2="-3" stroke="#38BDF8" stroke-width="3.5" stroke-linecap="round" />
      <line x1="21" y1="-3" x2="13" y2="-3" stroke="#38BDF8" stroke-width="3.5" stroke-linecap="round" />

      <path d="M-11 -3 C-16 -9 -14 -18 -6 -21 C3 -24 13 -19 14 -11 C15 -6 12 -2 9 2 C7 5 7 8 7 11 L-7 11 C-7 8 -7 5 -9 2 C-10 0 -11 -1 -11 -3 Z" fill="#0B132B" stroke="#38BDF8" stroke-width="3.5" stroke-linejoin="round" />
      <line x1="-4.5" y1="15" x2="4.5" y2="15" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" />
    </g>

    <!-- Subtitle: NEET UG PLATFORM -->
    <g transform="translate(0, 226)">
      <line x1="20" y1="-9" x2="185" y2="-9" stroke="url(#lineLeftDark)" stroke-width="2.8" stroke-linecap="round" />
      <text x="400" y="0" class="brand-sub" fill="#38BDF8" text-anchor="middle">NEET UG PLATFORM</text>
      <line x1="615" y1="-9" x2="780" y2="-9" stroke="url(#lineRightDark)" stroke-width="2.8" stroke-linecap="round" />
    </g>
  </g>
</svg>
`;

async function main() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write SVGs
  fs.writeFileSync(path.join(publicDir, 'vg-insights-logo.svg'), fullLogoSvg.trim());
  fs.writeFileSync(path.join(publicDir, 'vg-insights-logo-dark.svg'), fullLogoDarkSvg.trim());

  // Generate crisp transparent high-resolution PNGs with Sharp
  await sharp(Buffer.from(fullLogoSvg))
    .resize(1840, 540)
    .png()
    .toFile(path.join(publicDir, 'vg-insights-logo.png'));

  await sharp(Buffer.from(fullLogoDarkSvg))
    .resize(1840, 540)
    .png()
    .toFile(path.join(publicDir, 'vg-insights-logo-dark.png'));

  console.log('Brand asset SVGs and high-DPI transparent PNGs generated successfully!');
}

main().catch(console.error);
