import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generateFavicons() {
  const publicDir = path.resolve(process.cwd(), 'public');
  const svgPath = path.join(publicDir, 'pwa-icon.svg');
  const faviconSvgPath = path.join(publicDir, 'favicon.svg');

  const svgBuffer = fs.readFileSync(svgPath);

  // Copy or save favicon.svg
  fs.writeFileSync(faviconSvgPath, svgBuffer);
  console.log('Created favicon.svg');

  // Generate PNG sizes
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'favicon.png', size: 512 }
  ];

  for (const { name, size } of sizes) {
    const outPath = path.join(publicDir, name);
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outPath);
    console.log(`Generated ${name} (${size}x${size})`);
  }

  // Generate favicon.ico from 32x32 png
  const ico32Buffer = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico32Buffer);
  console.log('Generated favicon.ico');

  // Generate 1200x630 OpenGraph / Twitter Social Card
  const ogSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#090d16"/>
        <stop offset="50%" stop-color="#0f172a"/>
        <stop offset="100%" stop-color="#1e1b4b"/>
      </linearGradient>
      <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6"/>
        <stop offset="100%" stop-color="#1d4ed8"/>
      </linearGradient>
    </defs>
    
    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bg)"/>
    <circle cx="1050" cy="150" r="300" fill="#2563eb" opacity="0.12" filter="blur(80px)"/>
    <circle cx="150" cy="500" r="250" fill="#4f46e5" opacity="0.10" filter="blur(80px)"/>

    <!-- Subtle Grid Lines -->
    <path d="M 0 157.5 L 1200 157.5 M 0 315 L 1200 315 M 0 472.5 L 1200 472.5 M 300 0 L 300 630 M 600 0 L 600 630 M 900 0 L 900 630" stroke="#334155" stroke-width="1" opacity="0.25"/>

    <!-- Brand Icon -->
    <g transform="translate(100, 190) scale(0.48)">
      <rect width="512" height="512" rx="128" fill="#2563eb"/>
      <path d="M128 140 C128 120, 144 104, 164 104 L348 104 C368 104, 384 120, 384 140 L384 372 C384 392, 368 408, 348 408 L164 408 C144 408, 128 392, 128 372 Z" fill="#ffffff" opacity="0.15"/>
      <path d="M160 128 L352 128 C365.2 128 376 138.8 376 152 L376 360 C376 373.2 365.2 384 352 384 L160 384 C146.8 384 136 373.2 136 360 L136 152 C136 138.8 146.8 128 160 128 Z" fill="#ffffff"/>
      <path d="M176 176 L336 176 M176 224 L336 224 M176 272 L288 272" stroke="#2563eb" stroke-width="16" stroke-linecap="round"/>
      <circle cx="320" cy="320" r="32" fill="#1d4ed8"/>
      <path d="M312 320 L318 326 L330 312" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>

    <!-- Brand Text -->
    <text x="380" y="250" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="900" fill="#ffffff" letter-spacing="-1">VG <tspan fill="#60a5fa">Insights</tspan></text>
    
    <rect x="380" y="278" width="140" height="32" rx="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1"/>
    <text x="398" y="300" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#93c5fd" letter-spacing="1">NEET UG 2026</text>

    <!-- Headline -->
    <text x="380" y="360" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="700" fill="#f8fafc">NEET UG Notes, PYQs &amp; Practice Library</text>
    
    <!-- Subtitle -->
    <text x="380" y="405" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#94a3b8">Class 11 &amp; 12 NCERT Theory • AI Weakness Doctor • Full Chapter Mock Tests</text>

    <!-- URL footer badge -->
    <rect x="100" y="520" width="1000" height="54" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1"/>
    <text x="130" y="554" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" fill="#38bdf8">🌐 https://vginsights.in/</text>
    <text x="750" y="554" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" fill="#64748b">Physics • Chemistry • Biology</text>
  </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('Generated og-image.png (1200x630)');
}

generateFavicons().catch(err => {
  console.error(err);
  process.exit(1);
});
