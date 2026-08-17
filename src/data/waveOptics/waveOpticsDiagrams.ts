// High-Precision scientifically accurate SVG diagrams for Wave Optics (Class 12, Chapter 10)
// Designed for mobile & desktop with crisp typography, responsive viewboxes, clear wave normals, and distinct color-coding.

export const WAVE_OPTICS_SVGS = {
  // 1. Concept Flow Diagram
  conceptFlow: `<svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
    <rect width="600" height="380" fill="#f8fafc" rx="12" stroke="#e2e8f0" stroke-width="1.5"/>
    <defs>
      <linearGradient id="cfBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1d4ed8"/></linearGradient>
      <linearGradient id="cfIndigo" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#4338ca"/></linearGradient>
      <linearGradient id="cfTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0d9488"/><stop offset="100%" stop-color="#0f766e"/></linearGradient>
      <linearGradient id="cfAmber" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#b45309"/></linearGradient>
      <linearGradient id="cfPurple" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#6d28d9"/></linearGradient>
      <marker id="cfArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/></marker>
    </defs>
    
    <text x="300" y="32" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle" font-family="system-ui">WAVE OPTICS: CONCEPTUAL LOGIC CHAIN</text>
    
    <!-- Step 1 -->
    <rect x="200" y="50" width="200" height="38" rx="8" fill="url(#cfBlue)"/>
    <text x="300" y="74" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle" font-family="system-ui">1. Wave Nature of Light</text>
    
    <line x1="300" y1="88" x2="300" y2="106" stroke="#64748b" stroke-width="2.5" marker-end="url(#cfArrow)"/>
    
    <!-- Step 2 -->
    <rect x="200" y="108" width="200" height="38" rx="8" fill="url(#cfIndigo)"/>
    <text x="300" y="132" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle" font-family="system-ui">2. Concept of Wavefront</text>
    
    <line x1="300" y1="146" x2="300" y2="164" stroke="#64748b" stroke-width="2.5" marker-end="url(#cfArrow)"/>
    
    <!-- Step 3 -->
    <rect x="180" y="166" width="240" height="38" rx="8" fill="url(#cfTeal)"/>
    <text x="300" y="190" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle" font-family="system-ui">3. Huygens' Principle (Wavelets)</text>
    
    <!-- Branching to Reflection/Refraction and Phenomena -->
    <line x1="240" y1="204" x2="160" y2="236" stroke="#64748b" stroke-width="2" marker-end="url(#cfArrow)"/>
    <line x1="360" y1="204" x2="440" y2="236" stroke="#64748b" stroke-width="2" marker-end="url(#cfArrow)"/>
    
    <!-- Branch Left: Verification -->
    <rect x="60" y="238" width="200" height="50" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/>
    <text x="160" y="258" fill="#1e1b4b" font-size="12" font-weight="bold" text-anchor="middle" font-family="system-ui">Geometric Laws Proven</text>
    <text x="160" y="276" fill="#4338ca" font-size="11" text-anchor="middle" font-family="system-ui">Reflection (i=r) &amp; Snell's Law</text>
    
    <!-- Branch Right: Wave Phenomena -->
    <rect x="340" y="238" width="200" height="50" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
    <text x="440" y="258" fill="#78350f" font-size="12" font-weight="bold" text-anchor="middle" font-family="system-ui">Wave Phenomena (Superposition)</text>
    <text x="440" y="276" fill="#b45309" font-size="11" text-anchor="middle" font-family="system-ui">Interference (YDSE) &amp; Diffraction</text>
    
    <line x1="440" y1="288" x2="440" y2="310" stroke="#64748b" stroke-width="2" marker-end="url(#cfArrow)"/>
    
    <!-- Step 5: Polarization -->
    <rect x="330" y="312" width="220" height="50" rx="8" fill="url(#cfPurple)"/>
    <text x="440" y="333" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle" font-family="system-ui">Polarisation (Transverse Proof)</text>
    <text x="440" y="351" fill="#ede9fe" font-size="11" text-anchor="middle" font-family="system-ui">Malus' Law &amp; Brewster's Law</text>
  </svg>`,

  // 2. Spherical Wavefront
  sphericalWavefront: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="500" height="280" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <defs>
      <marker id="rayArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444"/></marker>
    </defs>
    <!-- Point Source -->
    <circle cx="200" cy="140" r="7" fill="#f59e0b"/>
    <circle cx="200" cy="140" r="14" fill="#f59e0b" opacity="0.3"/>
    <text x="200" y="165" fill="#b45309" font-size="12" font-weight="bold" text-anchor="middle">Point Source (S)</text>
    
    <!-- Concentric Spherical Wavefronts -->
    <circle cx="200" cy="140" r="45" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,3"/>
    <circle cx="200" cy="140" r="85" fill="none" stroke="#2563eb" stroke-width="2.5"/>
    <circle cx="200" cy="140" r="125" fill="none" stroke="#1d4ed8" stroke-width="2"/>
    
    <!-- Light Rays (Radially outward, perpendicular) -->
    <line x1="200" y1="140" x2="350" y2="140" stroke="#ef4444" stroke-width="2" marker-end="url(#rayArr)"/>
    <line x1="200" y1="140" x2="200" y2="20" stroke="#ef4444" stroke-width="2" marker-end="url(#rayArr)"/>
    <line x1="200" y1="140" x2="200" y2="260" stroke="#ef4444" stroke-width="2" marker-end="url(#rayArr)"/>
    <line x1="200" y1="140" x2="70" y2="140" stroke="#ef4444" stroke-width="2" marker-end="url(#rayArr)"/>
    <line x1="200" y1="140" x2="295" y2="45" stroke="#ef4444" stroke-width="2" marker-end="url(#rayArr)"/>
    <line x1="200" y1="140" x2="295" y2="235" stroke="#ef4444" stroke-width="2" marker-end="url(#rayArr)"/>
    
    <!-- Right Angle Indicator -->
    <path d="M 285 140 L 285 130 L 295 130" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <text x="300" y="125" fill="#0f172a" font-size="10" font-weight="bold">90°</text>
    
    <!-- Annotations -->
    <rect x="340" y="25" width="145" height="70" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="350" y="45" fill="#1e293b" font-size="11" font-weight="bold">Spherical Wavefront</text>
    <text x="350" y="62" fill="#475569" font-size="10">• Origin: Point source</text>
    <text x="350" y="78" fill="#475569" font-size="10">• Rays: Radially outward</text>
    <text x="350" y="94" fill="#dc2626" font-size="10" font-weight="bold">• Ray ⟂ Wavefront</text>
  </svg>`,

  // 3. Cylindrical Wavefront
  cylindricalWavefront: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="500" height="280" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <defs>
      <marker id="rayArrCyl" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444"/></marker>
    </defs>
    <!-- Linear Slit Source -->
    <line x1="180" y1="40" x2="180" y2="240" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
    <text x="180" y="260" fill="#b45309" font-size="12" font-weight="bold" text-anchor="middle">Linear Source (Slit / Line)</text>
    
    <!-- Coaxial Cylindrical Surfaces -->
    <!-- Top ellipse -->
    <ellipse cx="180" cy="50" rx="90" ry="24" fill="none" stroke="#2563eb" stroke-width="2"/>
    <!-- Bottom ellipse -->
    <path d="M 90 220 A 90 24 0 0 0 270 220" fill="none" stroke="#2563eb" stroke-width="2"/>
    <path d="M 90 220 A 90 24 0 0 1 270 220" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,4"/>
    <!-- Side walls -->
    <line x1="90" y1="50" x2="90" y2="220" stroke="#2563eb" stroke-width="2"/>
    <line x1="270" y1="50" x2="270" y2="220" stroke="#2563eb" stroke-width="2"/>
    
    <!-- Rays radiating perpendicularly outwards -->
    <line x1="180" y1="135" x2="360" y2="135" stroke="#ef4444" stroke-width="2" marker-end="url(#rayArrCyl)"/>
    <line x1="180" y1="135" x2="30" y2="135" stroke="#ef4444" stroke-width="2" marker-end="url(#rayArrCyl)"/>
    <line x1="180" y1="90" x2="330" y2="90" stroke="#ef4444" stroke-width="2" marker-end="url(#rayArrCyl)"/>
    <line x1="180" y1="180" x2="330" y2="180" stroke="#ef4444" stroke-width="2" marker-end="url(#rayArrCyl)"/>
    
    <!-- Explanatory Box -->
    <rect x="330" y="30" width="155" height="75" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="340" y="50" fill="#1e293b" font-size="11" font-weight="bold">Cylindrical Wavefront</text>
    <text x="340" y="66" fill="#475569" font-size="10">• Source: Linear slit</text>
    <text x="340" y="82" fill="#475569" font-size="10">• Radius expands with time</text>
    <text x="340" y="98" fill="#dc2626" font-size="10" font-weight="bold">• Wave normal ⟂ surface</text>
  </svg>`,

  // 4. Plane Wavefront & Rays
  planeWavefront: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="500" height="280" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <defs>
      <marker id="rayArrPl" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444"/></marker>
    </defs>
    <text x="250" y="30" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">Plane Wavefront (Source at Infinity)</text>
    
    <!-- Parallel Wavefront Planes -->
    <g transform="translate(40, 20)">
      <!-- Plane 1 -->
      <path d="M 80 50 L 120 20 L 120 180 L 80 210 Z" fill="#dbeafe" fill-opacity="0.6" stroke="#2563eb" stroke-width="2"/>
      <text x="100" y="225" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">WF 1 (t₁)</text>
      
      <!-- Plane 2 -->
      <path d="M 180 50 L 220 20 L 220 180 L 180 210 Z" fill="#bfdbfe" fill-opacity="0.6" stroke="#2563eb" stroke-width="2"/>
      <text x="200" y="225" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">WF 2 (t₂)</text>
      
      <!-- Plane 3 -->
      <path d="M 280 50 L 320 20 L 320 180 L 280 210 Z" fill="#93c5fd" fill-opacity="0.6" stroke="#2563eb" stroke-width="2"/>
      <text x="300" y="225" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">WF 3 (t₃)</text>
      
      <!-- Parallel Rays (Perpendicular to planes) -->
      <line x1="20" y1="70" x2="380" y2="70" stroke="#ef4444" stroke-width="2.5" marker-end="url(#rayArrPl)"/>
      <line x1="20" y1="115" x2="380" y2="115" stroke="#ef4444" stroke-width="2.5" marker-end="url(#rayArrPl)"/>
      <line x1="20" y1="160" x2="380" y2="160" stroke="#ef4444" stroke-width="2.5" marker-end="url(#rayArrPl)"/>
      
      <!-- Normal markers -->
      <path d="M 100 115 L 100 105 L 110 105" fill="none" stroke="#0f172a" stroke-width="1.5"/>
      <text x="116" y="102" fill="#0f172a" font-size="10" font-weight="bold">90°</text>
    </g>
    
    <text x="420" y="130" fill="#dc2626" font-size="11" font-weight="bold">Light Rays</text>
    <text x="420" y="146" fill="#475569" font-size="10">(Propagation vector k)</text>
  </svg>`,

  // 5. Huygens' Principle Construction (Secondary Wavelets & Forward Envelope)
  huygensConstruction: `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="520" height="300" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <defs>
      <marker id="envArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/></marker>
    </defs>
    <text x="260" y="26" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">Huygens' Construction: Secondary Wavelets &amp; Forward Envelope</text>
    
    <!-- Primary Wavefront AB at time t=0 -->
    <path d="M 120 45 Q 150 150 120 255" fill="none" stroke="#475569" stroke-width="3"/>
    <text x="95" y="55" fill="#0f172a" font-size="13" font-weight="bold">A</text>
    <text x="95" y="255" fill="#0f172a" font-size="13" font-weight="bold">B</text>
    <text x="80" y="155" fill="#475569" font-size="11" font-weight="bold">Primary WF (t = 0)</text>
    
    <!-- Secondary Sources (Points on AB) -->
    <!-- Point 1 -->
    <circle cx="127" cy="70" r="5" fill="#ef4444"/>
    <path d="M 127 70 A 90 90 0 0 1 217 70" fill="none" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="3,3"/>
    <path d="M 190 20 A 90 90 0 0 1 217 70 A 90 90 0 0 1 190 120" fill="none" stroke="#3b82f6" stroke-width="2"/>
    <line x1="127" y1="70" x2="217" y2="70" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2"/>
    <text x="165" y="65" fill="#ef4444" font-size="10">r = vΔt</text>
    
    <!-- Point 2 -->
    <circle cx="145" cy="150" r="5" fill="#ef4444"/>
    <path d="M 215 100 A 90 90 0 0 1 235 150 A 90 90 0 0 1 215 200" fill="none" stroke="#3b82f6" stroke-width="2"/>
    <line x1="145" y1="150" x2="235" y2="150" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2"/>
    <text x="180" y="145" fill="#ef4444" font-size="10">vΔt</text>
    
    <!-- Point 3 -->
    <circle cx="127" cy="230" r="5" fill="#ef4444"/>
    <path d="M 190 180 A 90 90 0 0 1 217 230 A 90 90 0 0 1 190 280" fill="none" stroke="#3b82f6" stroke-width="2"/>
    <line x1="127" y1="230" x2="217" y2="230" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2"/>
    <text x="165" y="225" fill="#ef4444" font-size="10">r = vΔt</text>
    
    <!-- Forward Envelope Tangent A'B' at time t + Δt -->
    <path d="M 210 45 Q 240 150 210 255" fill="none" stroke="#16a34a" stroke-width="3"/>
    <text x="225" y="55" fill="#15803d" font-size="13" font-weight="bold">A'</text>
    <text x="225" y="255" fill="#15803d" font-size="13" font-weight="bold">B'</text>
    
    <!-- Legend / Explanatory notes -->
    <rect x="290" y="70" width="215" height="150" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="300" y="92" fill="#0f172a" font-size="11" font-weight="bold">Huygens' Rules:</text>
    <text x="300" y="112" fill="#dc2626" font-size="10">1. Every point on WF acts as</text>
    <text x="312" y="126" fill="#dc2626" font-size="10">secondary wavelet source.</text>
    <text x="300" y="146" fill="#2563eb" font-size="10">2. Wavelets spread with speed v</text>
    <text x="312" y="160" fill="#2563eb" font-size="10">forming spheres of radius vΔt.</text>
    <text x="300" y="180" fill="#15803d" font-size="10">3. Tangent envelope A'B' gives</text>
    <text x="312" y="194" fill="#15803d" font-size="10">NEW wavefront at t + Δt.</text>
    <text x="300" y="210" fill="#64748b" font-size="9.5">*(Back-wave has 0 amplitude)</text>
  </svg>`,

  // 6. Reflection using Huygens' Principle (i = r derivation)
  reflectionHuygens: `<svg viewBox="0 0 540 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="540" height="320" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <text x="270" y="25" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">Reflection of Plane Wavefront: Proof of Law of Reflection (i = r)</text>
    
    <!-- Reflecting Surface XY -->
    <line x1="50" y1="230" x2="490" y2="230" stroke="#334155" stroke-width="3"/>
    <!-- Hatching underneath -->
    <path d="M 60 230 L 50 242 M 100 230 L 90 242 M 140 230 L 130 242 M 180 230 L 170 242 M 220 230 L 210 242 M 260 230 L 250 242 M 300 230 L 290 242 M 340 230 L 330 242 M 380 230 L 370 242 M 420 230 L 410 242 M 460 230 L 450 242" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="475" y="222" fill="#334155" font-size="12" font-weight="bold">Reflecting Surface (XY)</text>
    
    <!-- Key Points on Mirror: A and C -->
    <circle cx="150" cy="230" r="4" fill="#0f172a"/>
    <text x="145" y="248" fill="#0f172a" font-size="13" font-weight="bold">A</text>
    
    <circle cx="370" cy="230" r="4" fill="#0f172a"/>
    <text x="375" y="248" fill="#0f172a" font-size="13" font-weight="bold">C</text>
    
    <!-- Normal at A -->
    <line x1="150" y1="80" x2="150" y2="230" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>
    <text x="140" y="75" fill="#64748b" font-size="11">Normal N</text>
    
    <!-- Incident Plane Wavefront AB -->
    <!-- Point B in space -->
    <circle cx="230" cy="115" r="4" fill="#2563eb"/>
    <text x="225" y="105" fill="#2563eb" font-size="13" font-weight="bold">B</text>
    <line x1="150" y1="230" x2="230" y2="115" stroke="#2563eb" stroke-width="2.5"/>
    <text x="175" y="160" fill="#2563eb" font-size="11" font-weight="bold">Incident WF (AB)</text>
    
    <!-- Incident Rays -->
    <line x1="70" y1="90" x2="150" y2="230" stroke="#ef4444" stroke-width="2"/>
    <line x1="150" y1="0" x2="230" y2="115" stroke="#ef4444" stroke-width="2"/>
    <line x1="230" y1="115" x2="370" y2="230" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2"/>
    
    <!-- Secondary wavelet arc from A of radius v*t = BC -->
    <path d="M 275 145 A 150 150 0 0 0 240 85" fill="none" stroke="#d97706" stroke-width="2" stroke-dasharray="3,3"/>
    
    <!-- Reflected Wavefront CD (Tangent to wavelet arc from A) -->
    <circle cx="290" cy="115" r="4" fill="#16a34a"/>
    <text x="295" y="105" fill="#16a34a" font-size="13" font-weight="bold">E</text>
    <line x1="370" y1="230" x2="290" y2="115" stroke="#16a34a" stroke-width="2.5"/>
    <text x="345" y="160" fill="#16a34a" font-size="11" font-weight="bold">Reflected WF (CE)</text>
    
    <line x1="150" y1="230" x2="290" y2="115" stroke="#ef4444" stroke-width="2"/>
    <!-- Reflected ray from E -->
    <line x1="290" y1="115" x2="360" y2="20" stroke="#ef4444" stroke-width="2"/>
    
    <!-- Right angles: angle ABC = 90° and angle AEC = 90° -->
    <path d="M 220 120 L 226 130 L 236 123" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <path d="M 284 125 L 293 131 L 299 122" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    
    <!-- Angles i and r -->
    <path d="M 150 200 A 30 30 0 0 1 175 230" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    <text x="180" y="222" fill="#dc2626" font-size="12" font-weight="bold">i</text>
    
    <path d="M 345 230 A 30 30 0 0 1 370 200" fill="none" stroke="#15803d" stroke-width="1.5"/>
    <text x="348" y="222" fill="#15803d" font-size="12" font-weight="bold">r</text>
    
    <!-- Math Congruence Box -->
    <rect x="20" y="35" width="220" height="70" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="28" y="52" fill="#0f172a" font-size="11" font-weight="bold">Congruent Triangles ΔABC &amp; ΔCEA:</text>
    <text x="28" y="68" fill="#475569" font-size="10">• Hypotenuse AC is common</text>
    <text x="28" y="82" fill="#475569" font-size="10">• BC = AE = v · t &amp; ∠B = ∠E = 90°</text>
    <text x="28" y="96" fill="#15803d" font-size="11" font-weight="bold">⇒ ΔABC ≅ ΔCEA ⇒ ∠i = ∠r</text>
  </svg>`,

  // 7. Refraction using Huygens' Principle (Snell's Law Derivation)
  refractionHuygens: `<svg viewBox="0 0 540 330" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="540" height="330" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <text x="270" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">Refraction of Plane Wavefront: Huygens' Derivation of Snell's Law</text>
    
    <!-- Interface between Medium 1 & Medium 2 -->
    <rect x="0" y="140" width="540" height="190" fill="#eff6ff" fill-opacity="0.8"/>
    <line x1="30" y1="140" x2="510" y2="140" stroke="#334155" stroke-width="2.5"/>
    <text x="420" y="125" fill="#475569" font-size="11">Medium 1 (v₁, n₁, λ₁)</text>
    <text x="420" y="165" fill="#1e40af" font-size="11" font-weight="bold">Medium 2 (v₂, n₂, λ₂ &lt; λ₁)</text>
    
    <!-- Points A and C on interface -->
    <circle cx="150" cy="140" r="4" fill="#0f172a"/>
    <text x="145" y="130" fill="#0f172a" font-size="13" font-weight="bold">A</text>
    <circle cx="360" cy="140" r="4" fill="#0f172a"/>
    <text x="365" y="130" fill="#0f172a" font-size="13" font-weight="bold">C</text>
    
    <!-- Incident Wavefront AB -->
    <circle cx="235" cy="55" r="4" fill="#2563eb"/>
    <text x="242" y="52" fill="#2563eb" font-size="13" font-weight="bold">B</text>
    <line x1="150" y1="140" x2="235" y2="55" stroke="#2563eb" stroke-width="2.5"/>
    <text x="160" y="90" fill="#2563eb" font-size="11" font-weight="bold">Incident WF (AB)</text>
    
    <!-- Rays in Med 1 -->
    <line x1="80" y1="40" x2="150" y2="140" stroke="#ef4444" stroke-width="2"/>
    <line x1="235" y1="55" x2="360" y2="140" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,2"/>
    <text x="300" y="90" fill="#ef4444" font-size="10">BC = v₁t</text>
    
    <!-- Secondary wavelet in Medium 2 of radius AE = v2 * t (shorter because v2 < v1) -->
    <path d="M 230 200 A 100 100 0 0 1 180 220" fill="none" stroke="#d97706" stroke-width="2" stroke-dasharray="3,3"/>
    
    <!-- Refracted Wavefront CE -->
    <circle cx="215" cy="225" r="4" fill="#16a34a"/>
    <text x="210" y="245" fill="#16a34a" font-size="13" font-weight="bold">E</text>
    <line x1="360" y1="140" x2="215" y2="225" stroke="#16a34a" stroke-width="2.5"/>
    <text x="300" y="200" fill="#16a34a" font-size="11" font-weight="bold">Refracted WF (CE)</text>
    
    <!-- Refracted ray from A through E -->
    <line x1="150" y1="140" x2="215" y2="225" stroke="#ef4444" stroke-width="2"/>
    <line x1="215" y1="225" x2="270" y2="295" stroke="#ef4444" stroke-width="2"/>
    <text x="145" y="200" fill="#ef4444" font-size="10">AE = v₂t</text>
    
    <!-- Angle indicators -->
    <text x="180" y="132" fill="#dc2626" font-size="12" font-weight="bold">i</text>
    <text x="325" y="155" fill="#15803d" font-size="12" font-weight="bold">r</text>
    
    <!-- Snell's Law Derivation Box -->
    <rect x="20" y="235" width="220" height="85" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="30" y="252" fill="#0f172a" font-size="11" font-weight="bold">Mathematical Derivation:</text>
    <text x="30" y="268" fill="#334155" font-size="10">sin i = BC / AC = v₁ t / AC</text>
    <text x="30" y="284" fill="#334155" font-size="10">sin r = AE / AC = v₂ t / AC</text>
    <text x="30" y="302" fill="#1d4ed8" font-size="11" font-weight="bold">⇒ sin i / sin r = v₁ / v₂ = n₂ / n₁</text>
  </svg>`,

  // 8. Constructive Interference Superposition
  constructiveInterference: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="500" height="240" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <text x="250" y="24" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">Constructive Interference (In-Phase: φ = 0, 2π, 4π | Δ = 0, λ, 2λ)</text>
    
    <!-- Wave 1 (Blue) -->
    <text x="30" y="60" fill="#2563eb" font-size="11" font-weight="bold">Wave 1 (y₁):</text>
    <path d="M 120 55 Q 145 25 170 55 T 220 55 T 270 55 T 320 55" fill="none" stroke="#2563eb" stroke-width="2.5"/>
    <text x="335" y="60" fill="#2563eb" font-size="10">Amp = A₁</text>
    
    <!-- Wave 2 (Green) -->
    <text x="30" y="115" fill="#16a34a" font-size="11" font-weight="bold">Wave 2 (y₂):</text>
    <path d="M 120 110 Q 145 80 170 110 T 220 110 T 270 110 T 320 110" fill="none" stroke="#16a34a" stroke-width="2.5"/>
    <text x="335" y="115" fill="#16a34a" font-size="10">Amp = A₂</text>
    
    <!-- Resultant Wave (Red, Double amplitude) -->
    <text x="30" y="180" fill="#dc2626" font-size="11" font-weight="bold">Resultant (y = y₁ + y₂):</text>
    <path d="M 120 180 Q 145 130 170 180 T 220 180 T 270 180 T 320 180" fill="none" stroke="#dc2626" stroke-width="3.5"/>
    <text x="335" y="175" fill="#dc2626" font-size="11" font-weight="bold">A_max = A₁ + A₂</text>
    <text x="335" y="195" fill="#b91c1c" font-size="10.5">I_max = (√I₁ + √I₂)² = 4I₀</text>
  </svg>`,

  // 9. Destructive Interference Superposition
  destructiveInterference: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="500" height="240" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <text x="250" y="24" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">Destructive Interference (Out-of-Phase: φ = π, 3π | Δ = λ/2, 3λ/2)</text>
    
    <!-- Wave 1 (Crest first) -->
    <text x="30" y="60" fill="#2563eb" font-size="11" font-weight="bold">Wave 1 (y₁):</text>
    <path d="M 120 55 Q 145 25 170 55 T 220 55 T 270 55 T 320 55" fill="none" stroke="#2563eb" stroke-width="2.5"/>
    <text x="335" y="60" fill="#2563eb" font-size="10">Amp = A₀</text>
    
    <!-- Wave 2 (Trough first - 180° out of phase) -->
    <text x="30" y="115" fill="#e11d48" font-size="11" font-weight="bold">Wave 2 (y₂):</text>
    <path d="M 120 110 Q 145 140 170 110 T 220 110 T 270 110 T 320 110" fill="none" stroke="#e11d48" stroke-width="2.5"/>
    <text x="335" y="115" fill="#e11d48" font-size="10">Amp = A₀ (Phase π)</text>
    
    <!-- Resultant Wave (Flat line / cancellation) -->
    <text x="30" y="180" fill="#475569" font-size="11" font-weight="bold">Resultant (y = y₁ + y₂):</text>
    <line x1="120" y1="180" x2="320" y2="180" stroke="#0f172a" stroke-width="3"/>
    <text x="335" y="175" fill="#0f172a" font-size="11" font-weight="bold">A_min = |A₁ - A₂| = 0</text>
    <text x="335" y="195" fill="#475569" font-size="10.5">I_min = (√I₁ - √I₂)² = 0 (Dark)</text>
  </svg>`,

  // 10. Coherent Sources Derived from Single Source
  coherentSources: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="500" height="240" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <text x="250" y="24" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">Obtaining Coherent Sources (Division of Wavefront)</text>
    
    <!-- Primary Single Source S -->
    <circle cx="60" cy="120" r="6" fill="#f59e0b"/>
    <text x="60" y="145" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">Primary S</text>
    
    <!-- Spherical wavefronts from S -->
    <path d="M 85 90 A 40 40 0 0 1 85 150" fill="none" stroke="#93c5fd" stroke-width="2"/>
    <path d="M 120 70 A 80 80 0 0 1 120 170" fill="none" stroke="#60a5fa" stroke-width="2"/>
    <path d="M 155 50 A 120 120 0 0 1 155 190" fill="none" stroke="#2563eb" stroke-width="2"/>
    
    <!-- Double Slit Obstacle -->
    <line x1="170" y1="20" x2="170" y2="85" stroke="#1e293b" stroke-width="5"/>
    <line x1="170" y1="95" x2="170" y2="145" stroke="#1e293b" stroke-width="5"/>
    <line x1="170" y1="155" x2="170" y2="220" stroke="#1e293b" stroke-width="5"/>
    
    <!-- Slits S1 and S2 -->
    <circle cx="170" cy="90" r="3" fill="#ef4444"/>
    <text x="190" y="85" fill="#dc2626" font-size="11" font-weight="bold">S₁</text>
    
    <circle cx="170" cy="150" r="3" fill="#ef4444"/>
    <text x="190" y="165" fill="#dc2626" font-size="11" font-weight="bold">S₂</text>
    
    <!-- Wavelets from S1 & S2 interfering -->
    <path d="M 195 70 A 30 30 0 0 1 195 110" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
    <path d="M 220 50 A 60 60 0 0 1 220 130" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
    
    <path d="M 195 130 A 30 30 0 0 1 195 170" fill="none" stroke="#10b981" stroke-width="1.5"/>
    <path d="M 220 110 A 60 60 0 0 1 220 190" fill="none" stroke="#10b981" stroke-width="1.5"/>
    
    <!-- Key requirement box -->
    <rect x="260" y="55" width="225" height="135" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="270" y="78" fill="#0f172a" font-size="11" font-weight="bold">Why Coherence is Critical:</text>
    <text x="270" y="98" fill="#475569" font-size="10">• Phase diff Δφ remains CONSTANT.</text>
    <text x="270" y="116" fill="#475569" font-size="10">• Derived from SAME parent source.</text>
    <text x="270" y="134" fill="#dc2626" font-size="10" font-weight="bold">• 2 independent bulbs NEVER coherent</text>
    <text x="282" y="148" fill="#dc2626" font-size="9.5">(Phase jumps randomly every ~10⁻⁸ s)</text>
    <text x="270" y="172" fill="#15803d" font-size="10" font-weight="bold">⇒ Sustained interference pattern</text>
  </svg>`,

  // 11. Young's Double Slit Experiment Layout
  ydseLayout: `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
    <rect width="600" height="360" fill="#f8fafc" rx="12" stroke="#e2e8f0"/>
    <text x="300" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Young's Double-Slit Experiment (YDSE) Experimental Apparatus</text>
    
    <!-- Source S -->
    <circle cx="50" cy="180" r="6" fill="#f59e0b"/>
    <text x="50" y="205" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">Source (λ)</text>
    
    <!-- Slit Plane -->
    <line x1="160" y1="30" x2="160" y2="120" stroke="#1e293b" stroke-width="6"/>
    <line x1="160" y1="140" x2="160" y2="220" stroke="#1e293b" stroke-width="6"/>
    <line x1="160" y1="240" x2="160" y2="330" stroke="#1e293b" stroke-width="6"/>
    
    <!-- Slits S1 and S2 -->
    <circle cx="160" cy="130" r="3.5" fill="#2563eb"/>
    <text x="135" y="135" fill="#2563eb" font-size="13" font-weight="bold">S₁</text>
    
    <circle cx="160" cy="230" r="3.5" fill="#2563eb"/>
    <text x="135" y="235" fill="#2563eb" font-size="13" font-weight="bold">S₂</text>
    
    <!-- Separation d -->
    <line x1="120" y1="130" x2="120" y2="230" stroke="#64748b" stroke-width="1.5"/>
    <line x1="115" y1="130" x2="125" y2="130" stroke="#64748b" stroke-width="1.5"/>
    <line x1="115" y1="230" x2="125" y2="230" stroke="#64748b" stroke-width="1.5"/>
    <text x="105" y="185" fill="#0f172a" font-size="13" font-weight="bold">d</text>
    
    <!-- Screen Plane -->
    <line x1="480" y1="30" x2="480" y2="330" stroke="#0f172a" stroke-width="4"/>
    <text x="495" y="45" fill="#0f172a" font-size="13" font-weight="bold">Screen</text>
    
    <!-- Central Axis & Point O -->
    <line x1="160" y1="180" x2="480" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
    <circle cx="480" cy="180" r="4" fill="#0f172a"/>
    <text x="495" y="185" fill="#0f172a" font-size="13" font-weight="bold">O (Central Bright)</text>
    
    <!-- Point P on screen -->
    <circle cx="480" cy="90" r="4" fill="#dc2626"/>
    <text x="495" y="95" fill="#dc2626" font-size="13" font-weight="bold">P(y)</text>
    
    <!-- Light Paths S1P and S2P -->
    <line x1="160" y1="130" x2="480" y2="90" stroke="#2563eb" stroke-width="2"/>
    <line x1="160" y1="230" x2="480" y2="90" stroke="#ef4444" stroke-width="2"/>
    
    <!-- Perpendicular S1N dropped on S2P for path diff -->
    <line x1="160" y1="130" x2="195" y2="225" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="2,2"/>
    <circle cx="195" cy="225" r="3" fill="#0f172a"/>
    <text x="205" y="240" fill="#0f172a" font-size="11" font-weight="bold">N</text>
    <text x="210" y="215" fill="#dc2626" font-size="11" font-weight="bold">Δ = S₂N = d sin θ</text>
    
    <!-- Distance D -->
    <line x1="160" y1="340" x2="480" y2="340" stroke="#475569" stroke-width="1.5"/>
    <line x1="160" y1="335" x2="160" y2="345" stroke="#475569" stroke-width="1.5"/>
    <line x1="480" y1="335" x2="480" y2="345" stroke="#475569" stroke-width="1.5"/>
    <text x="315" y="335" fill="#0f172a" font-size="12" font-weight="bold">Distance D (Slit to Screen)</text>
    
    <!-- Fringe Position y -->
    <line x1="535" y1="180" x2="535" y2="90" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="530" y1="180" x2="540" y2="180" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="530" y1="90" x2="540" y2="90" stroke="#dc2626" stroke-width="1.5"/>
    <text x="545" y="140" fill="#dc2626" font-size="13" font-weight="bold">y</text>
  </svg>`,

  // 12. YDSE Geometry & Path Difference Derivation
  ydseGeometry: `<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="520" height="280" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <text x="260" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">YDSE Path Difference Approximation (d ≪ D &amp; y ≪ D)</text>
    
    <!-- Slits S1 and S2 -->
    <circle cx="80" cy="80" r="4" fill="#2563eb"/>
    <text x="60" y="85" fill="#2563eb" font-size="12" font-weight="bold">S₁</text>
    <circle cx="80" cy="180" r="4" fill="#2563eb"/>
    <text x="60" y="185" fill="#2563eb" font-size="12" font-weight="bold">S₂</text>
    <line x1="80" y1="80" x2="80" y2="180" stroke="#64748b" stroke-width="2"/>
    <text x="90" y="135" fill="#0f172a" font-size="12" font-weight="bold">d</text>
    
    <!-- Center of slits C -->
    <circle cx="80" cy="130" r="3" fill="#64748b"/>
    <text x="65" y="135" fill="#64748b" font-size="11">C</text>
    
    <!-- Screen -->
    <line x1="420" y1="40" x2="420" y2="240" stroke="#0f172a" stroke-width="3"/>
    <circle cx="420" cy="130" r="3" fill="#0f172a"/>
    <text x="430" y="135" fill="#0f172a" font-size="11">O</text>
    
    <!-- Point P -->
    <circle cx="420" cy="60" r="4" fill="#dc2626"/>
    <text x="430" y="65" fill="#dc2626" font-size="12" font-weight="bold">P(y)</text>
    
    <!-- Rays -->
    <line x1="80" y1="80" x2="420" y2="60" stroke="#2563eb" stroke-width="1.5"/>
    <line x1="80" y1="130" x2="420" y2="60" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="80" y1="180" x2="420" y2="60" stroke="#ef4444" stroke-width="1.5"/>
    
    <!-- Angle theta -->
    <line x1="80" y1="130" x2="420" y2="130" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2"/>
    <path d="M 120 130 A 40 40 0 0 0 118 122" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <text x="125" y="125" fill="#0f172a" font-size="11" font-weight="bold">θ</text>
    
    <!-- Normal from S1 to S2P -->
    <line x1="80" y1="80" x2="105" y2="175" stroke="#0f172a" stroke-width="1.5"/>
    <text x="115" y="195" fill="#dc2626" font-size="11" font-weight="bold">Δ = S₂P - S₁P = d sin θ</text>
    
    <!-- Approximation Box -->
    <rect x="210" y="165" width="200" height="95" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="220" y="185" fill="#0f172a" font-size="11" font-weight="bold">Approximation Steps:</text>
    <text x="220" y="202" fill="#475569" font-size="10">• Since d ≪ D, rays are nearly ||</text>
    <text x="220" y="218" fill="#475569" font-size="10">• For small θ: sin θ ≈ tan θ ≈ y / D</text>
    <text x="220" y="238" fill="#1d4ed8" font-size="11" font-weight="bold">⇒ Path Difference Δ = y·d / D</text>
  </svg>`,

  // 13. Fringe Pattern Profile (Bright and Dark Fringes)
  fringePatternProfile: `<svg viewBox="0 0 540 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="540" height="260" fill="#0f172a" rx="10"/>
    <text x="270" y="24" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">YDSE Interference Fringe Pattern &amp; Intensity Distribution</text>
    
    <!-- Intensity curve (Cosine squared pattern, equal peak height 4I0) -->
    <!-- Center is at x = 270 -->
    <path d="M 70 140 
             C 85 140, 95 60, 110 60 C 125 60, 135 140, 150 140
             C 165 140, 175 60, 190 60 C 205 60, 215 140, 230 140
             C 245 140, 255 60, 270 60 C 285 60, 295 140, 310 140
             C 325 140, 335 60, 350 60 C 365 60, 375 140, 390 140
             C 405 140, 415 60, 430 60 C 445 60, 455 140, 470 140" 
          fill="none" stroke="#38bdf8" stroke-width="3"/>
    
    <line x1="50" y1="140" x2="490" y2="140" stroke="#475569" stroke-width="1.5"/>
    
    <!-- Intensity axis line & label -->
    <line x1="270" y1="45" x2="270" y2="140" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="270" y="48" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">I_max = 4I₀</text>
    <text x="500" y="145" fill="#94a3b8" font-size="10">I = 0</text>
    
    <!-- Actual visual fringe representation below -->
    <g transform="translate(0, 160)">
      <!-- Alternating Bright (Yellow/White) and Dark bands -->
      <rect x="70" y="0" width="400" height="35" fill="#1e293b"/>
      <!-- Fringes -->
      <rect x="98" y="0" width="24" height="35" fill="#fef08a" opacity="0.9"/>
      <rect x="178" y="0" width="24" height="35" fill="#fef08a" opacity="0.9"/>
      <rect x="258" y="0" width="24" height="35" fill="#ffffff"/>
      <rect x="338" y="0" width="24" height="35" fill="#fef08a" opacity="0.9"/>
      <rect x="418" y="0" width="24" height="35" fill="#fef08a" opacity="0.9"/>
    </g>
    
    <!-- Labels below fringes -->
    <text x="110" y="215" fill="#94a3b8" font-size="10" text-anchor="middle">-2β (2nd B)</text>
    <text x="150" y="215" fill="#ef4444" font-size="10" text-anchor="middle">-1.5β (2nd D)</text>
    <text x="190" y="215" fill="#94a3b8" font-size="10" text-anchor="middle">-1β (1st B)</text>
    <text x="230" y="215" fill="#ef4444" font-size="10" text-anchor="middle">-0.5β (1st D)</text>
    <text x="270" y="215" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Central B (n=0)</text>
    <text x="310" y="215" fill="#ef4444" font-size="10" text-anchor="middle">+0.5β (1st D)</text>
    <text x="350" y="215" fill="#94a3b8" font-size="10" text-anchor="middle">+1β (1st B)</text>
    <text x="430" y="215" fill="#94a3b8" font-size="10" text-anchor="middle">+2β (2nd B)</text>
    
    <text x="270" y="245" fill="#cbd5e1" font-size="11" text-anchor="middle">Fringe Width β = λD/d is UNIFORM for all fringes in YDSE</text>
  </svg>`,

  // 14. YDSE in a Medium (μ > 1)
  ydseInMedium: `<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="520" height="260" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <text x="260" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">YDSE Immersed in Medium: Fringe Compression</text>
    
    <!-- Top Half: In Air (μ = 1) -->
    <g transform="translate(20, 40)">
      <text x="10" y="20" fill="#0f172a" font-size="12" font-weight="bold">In Air (μ = 1):</text>
      <!-- Wider Fringes -->
      <rect x="110" y="5" width="280" height="30" fill="#e2e8f0"/>
      <rect x="125" y="5" width="20" height="30" fill="#3b82f6"/>
      <rect x="195" y="5" width="20" height="30" fill="#3b82f6"/>
      <rect x="265" y="5" width="20" height="30" fill="#f59e0b"/>
      <rect x="335" y="5" width="20" height="30" fill="#3b82f6"/>
      <!-- Dimension arrow -->
      <line x1="195" y1="42" x2="265" y2="42" stroke="#dc2626" stroke-width="1.5"/>
      <text x="230" y="55" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">β_air = λD/d</text>
    </g>
    
    <!-- Bottom Half: In Liquid (μ = 4/3 e.g., Water) -->
    <g transform="translate(20, 130)">
      <rect x="0" y="0" width="480" height="110" fill="#eff6ff" rx="8" stroke="#93c5fd"/>
      <text x="10" y="20" fill="#1e40af" font-size="12" font-weight="bold">In Water (μ = 4/3):</text>
      <text x="10" y="38" fill="#475569" font-size="10">λ' = λ/μ &amp; v' = c/μ (Frequency f unchanged!)</text>
      
      <!-- Narrower compressed fringes -->
      <rect x="110" y="45" width="280" height="30" fill="#cbd5e1"/>
      <rect x="145" y="45" width="16" height="30" fill="#2563eb"/>
      <rect x="198" y="45" width="16" height="30" fill="#2563eb"/>
      <rect x="251" y="45" width="16" height="30" fill="#f59e0b"/>
      <rect x="304" y="45" width="16" height="30" fill="#2563eb"/>
      <rect x="357" y="45" width="16" height="30" fill="#2563eb"/>
      
      <!-- Compressed dimension -->
      <line x1="198" y1="82" x2="251" y2="82" stroke="#dc2626" stroke-width="1.5"/>
      <text x="225" y="96" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">β_med = β_air / μ</text>
      <text x="350" y="96" fill="#15803d" font-size="10.5" font-weight="bold">Fringes become closer!</text>
    </g>
  </svg>`,

  // 15. Single-Slit Diffraction Setup & Geometry
  singleSlitDiffraction: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="560" height="320" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <text x="280" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">Single-Slit Fraunhofer Diffraction (Slit Width a, Angle θ)</text>
    
    <!-- Incident Plane Waves -->
    <line x1="30" y1="100" x2="30" y2="220" stroke="#3b82f6" stroke-width="2"/>
    <line x1="55" y1="100" x2="55" y2="220" stroke="#3b82f6" stroke-width="2"/>
    <line x1="80" y1="100" x2="80" y2="220" stroke="#3b82f6" stroke-width="2"/>
    <text x="55" y="85" fill="#2563eb" font-size="10" text-anchor="middle">Plane Waves</text>
    
    <!-- Slit of Width a (Points L and M) -->
    <line x1="130" y1="30" x2="130" y2="120" stroke="#1e293b" stroke-width="6"/>
    <line x1="130" y1="200" x2="130" y2="290" stroke="#1e293b" stroke-width="6"/>
    <circle cx="130" cy="120" r="3.5" fill="#2563eb"/>
    <text x="110" y="125" fill="#2563eb" font-size="12" font-weight="bold">L</text>
    <circle cx="130" cy="200" r="3.5" fill="#2563eb"/>
    <text x="110" y="205" fill="#2563eb" font-size="12" font-weight="bold">M</text>
    
    <line x1="95" y1="120" x2="95" y2="200" stroke="#0f172a" stroke-width="1.5"/>
    <text x="80" y="165" fill="#0f172a" font-size="13" font-weight="bold">a</text>
    
    <!-- Screen -->
    <line x1="440" y1="30" x2="440" y2="290" stroke="#0f172a" stroke-width="3.5"/>
    <circle cx="440" cy="160" r="3.5" fill="#0f172a"/>
    <text x="455" y="165" fill="#0f172a" font-size="11" font-weight="bold">O (Central Max)</text>
    
    <!-- Point P at angle theta (First Minimum) -->
    <circle cx="440" cy="90" r="4" fill="#dc2626"/>
    <text x="455" y="95" fill="#dc2626" font-size="11" font-weight="bold">P (1st Min)</text>
    
    <!-- Rays from top (L), center (C), and bottom (M) to P -->
    <line x1="130" y1="120" x2="440" y2="90" stroke="#2563eb" stroke-width="1.5"/>
    <line x1="130" y1="160" x2="440" y2="90" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
    <line x1="130" y1="200" x2="440" y2="90" stroke="#ef4444" stroke-width="1.5"/>
    
    <!-- Perpendicular LN on MP -->
    <line x1="130" y1="120" x2="155" y2="195" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="155" cy="195" r="3" fill="#0f172a"/>
    <text x="165" y="210" fill="#0f172a" font-size="10" font-weight="bold">N</text>
    
    <text x="175" y="180" fill="#dc2626" font-size="11" font-weight="bold">MN = a sin θ</text>
    
    <!-- Rule Box for Minima -->
    <rect x="200" y="215" width="220" height="85" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="210" y="232" fill="#0f172a" font-size="11" font-weight="bold">Condition for Minima (Dark):</text>
    <text x="210" y="250" fill="#dc2626" font-size="12" font-weight="bold">a · sin θ = n · λ  (n = 1, 2, 3...)</text>
    <text x="210" y="268" fill="#475569" font-size="9.5">Slit divides into 2n equal halves</text>
    <text x="210" y="282" fill="#475569" font-size="9.5">that cancel out in pairs!</text>
  </svg>`,

  // 16. Diffraction Intensity Pattern & Central Maximum
  diffractionPattern: `<svg viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="540" height="280" fill="#0f172a" rx="10"/>
    <text x="270" y="24" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">Single-Slit Diffraction Intensity Curve</text>
    
    <!-- Intensity Curve: Central maximum is huge and twice as wide; secondary peaks drop drastically -->
    <path d="M 40 180 
             Q 70 180, 85 174 Q 100 168, 115 180
             Q 135 180, 155 140 Q 175 180, 195 180
             Q 220 180, 270 50 Q 320 180, 345 180
             Q 365 180, 385 140 Q 405 180, 425 180
             Q 440 180, 455 174 Q 470 168, 500 180" 
          fill="none" stroke="#fbbf24" stroke-width="3"/>
    
    <line x1="30" y1="180" x2="510" y2="180" stroke="#475569" stroke-width="1.5"/>
    
    <!-- Center Line -->
    <line x1="270" y1="40" x2="270" y2="180" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="270" y="42" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">I₀ (Central Max)</text>
    
    <!-- Peak Ratios -->
    <text x="385" y="130" fill="#fef08a" font-size="9.5" text-anchor="middle">I₀/22</text>
    <text x="455" y="160" fill="#fef08a" font-size="9" text-anchor="middle">I₀/61</text>
    
    <!-- Width indicators -->
    <!-- From 1st Min on Left (195) to 1st Min on Right (345) -->
    <line x1="195" y1="205" x2="345" y2="205" stroke="#38bdf8" stroke-width="2"/>
    <line x1="195" y1="200" x2="195" y2="210" stroke="#38bdf8" stroke-width="2"/>
    <line x1="345" y1="200" x2="345" y2="210" stroke="#38bdf8" stroke-width="2"/>
    <text x="270" y="222" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Angular Width = 2λ/a  |  Linear Width = 2λD/a</text>
    
    <!-- Secondary Max Width -->
    <line x1="345" y1="240" x2="425" y2="240" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="385" y="255" fill="#94a3b8" font-size="10" text-anchor="middle">Width = λD/a (Half of Central!)</text>
    
    <!-- X-axis Labels -->
    <text x="195" y="195" fill="#ef4444" font-size="10" text-anchor="middle">-λ/a</text>
    <text x="115" y="195" fill="#ef4444" font-size="10" text-anchor="middle">-2λ/a</text>
    <text x="270" y="195" fill="#ffffff" font-size="10" text-anchor="middle">θ = 0</text>
    <text x="345" y="195" fill="#ef4444" font-size="10" text-anchor="middle">+λ/a</text>
    <text x="425" y="195" fill="#ef4444" font-size="10" text-anchor="middle">+2λ/a</text>
  </svg>`,

  // 17. Comparison: Interference vs Diffraction Pattern
  interferenceVsDiffraction: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="560" height="300" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <text x="280" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">Comparison of Intensity Profiles: Interference vs Diffraction</text>
    
    <!-- Top: Interference (YDSE) -->
    <g transform="translate(20, 35)">
      <text x="10" y="18" fill="#1e40af" font-size="12" font-weight="bold">Interference (YDSE - Double Slit):</text>
      <text x="300" y="18" fill="#475569" font-size="10">Equal width (β) &amp; Equal intensity (4I₀)</text>
      
      <path d="M 40 75 C 55 75, 65 30, 80 30 C 95 30, 105 75, 120 75 C 135 75, 145 30, 160 30 C 175 30, 185 75, 200 75 C 215 75, 225 30, 240 30 C 255 30, 265 75, 280 75 C 295 75, 305 30, 320 30 C 335 30, 345 75, 360 75 C 375 75, 385 30, 400 30 C 415 30, 425 75, 440 75" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <line x1="30" y1="75" x2="450" y2="75" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="460" y="55" fill="#2563eb" font-size="10" font-weight="bold">All Peaks Equal</text>
    </g>
    
    <!-- Bottom: Diffraction (Single Slit) -->
    <g transform="translate(20, 150)">
      <text x="10" y="18" fill="#b45309" font-size="12" font-weight="bold">Diffraction (Single Slit):</text>
      <text x="300" y="18" fill="#475569" font-size="10">Central peak 2× wider, secondary intensity falls rapidly</text>
      
      <path d="M 40 90 Q 70 90, 85 86 Q 100 82, 115 90 Q 140 90, 160 65 Q 180 90, 200 90 Q 220 90, 240 20 Q 260 90, 280 90 Q 300 90, 320 65 Q 340 90, 365 90 Q 380 90, 395 86 Q 410 82, 440 90" fill="none" stroke="#d97706" stroke-width="2.5"/>
      <line x1="30" y1="90" x2="450" y2="90" stroke="#94a3b8" stroke-width="1.5"/>
      
      <!-- Central width marker -->
      <line x1="200" y1="108" x2="280" y2="108" stroke="#dc2626" stroke-width="1.5"/>
      <text x="240" y="122" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">Central Max (2λ/a)</text>
    </g>
  </svg>`,

  // 18. Unpolarised vs Plane-Polarised Light
  polarisationConcept: `<svg viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="540" height="280" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <text x="270" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">Transverse Nature of Light: Unpolarised vs Plane-Polarised Light</text>
    
    <!-- Left: Unpolarised Light (Vibrations in all planes perpendicular to propagation) -->
    <g transform="translate(60, 50)">
      <rect x="0" y="0" width="180" height="190" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="90" y="24" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">Unpolarised Light</text>
      
      <!-- Starburst vibration vectors -->
      <circle cx="90" cy="95" r="4" fill="#ef4444"/>
      <!-- Vertical -->
      <line x1="90" y1="45" x2="90" y2="145" stroke="#ef4444" stroke-width="2.5"/>
      <!-- Horizontal -->
      <line x1="40" y1="95" x2="140" y2="95" stroke="#ef4444" stroke-width="2.5"/>
      <!-- Diagonal 1 -->
      <line x1="55" y1="60" x2="125" y2="130" stroke="#ef4444" stroke-width="2"/>
      <!-- Diagonal 2 -->
      <line x1="55" y1="130" x2="125" y2="60" stroke="#ef4444" stroke-width="2"/>
      <!-- Dots & arrows combo -->
      <text x="90" y="165" fill="#475569" font-size="10" text-anchor="middle">Symmetric vibrations</text>
      <text x="90" y="180" fill="#475569" font-size="10" text-anchor="middle">in ALL planes ⟂ ray</text>
    </g>
    
    <!-- Arrow -->
    <path d="M 260 145 L 290 145" stroke="#64748b" stroke-width="3" marker-end="url(#rayArr)"/>
    <text x="275" y="135" fill="#64748b" font-size="10" text-anchor="middle">Polaroid</text>
    
    <!-- Right: Plane-Polarised Light (Vibrations confined to single plane) -->
    <g transform="translate(310, 50)">
      <rect x="0" y="0" width="180" height="190" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="90" y="24" fill="#15803d" font-size="12" font-weight="bold" text-anchor="middle">Plane-Polarised Light</text>
      
      <!-- Single vertical vibration vector -->
      <circle cx="90" cy="95" r="4" fill="#15803d"/>
      <line x1="90" y1="45" x2="90" y2="145" stroke="#15803d" stroke-width="3.5"/>
      
      <!-- Arrows at ends -->
      <polygon points="90,40 85,50 95,50" fill="#15803d"/>
      <polygon points="90,150 85,140 95,140" fill="#15803d"/>
      
      <text x="90" y="165" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle">Electric Vector (E)</text>
      <text x="90" y="180" fill="#475569" font-size="10" text-anchor="middle">confined to ONE plane</text>
    </g>
  </svg>`,

  // 19. Polariser and Analyser Setup
  polariserAnalyser: `<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="560" height="280" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <text x="280" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">Action of Polariser &amp; Analyser: Transmission Axis Alignment</text>
    
    <!-- Unpolarised ray coming in -->
    <line x1="30" y1="140" x2="140" y2="140" stroke="#ef4444" stroke-width="2.5"/>
    <text x="65" y="120" fill="#ef4444" font-size="10" font-weight="bold">Unpolarised (I_unpol)</text>
    
    <!-- Polariser P1 (Vertical transmission axis) -->
    <rect x="140" y="70" width="35" height="140" rx="4" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
    <!-- Vertical lines on polariser -->
    <line x1="157" y1="80" x2="157" y2="200" stroke="#1d4ed8" stroke-width="2"/>
    <text x="157" y="225" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">Polariser P₁</text>
    <text x="157" y="240" fill="#475569" font-size="9.5" text-anchor="middle">Axis vertical</text>
    
    <!-- Linearly polarised light of intensity I0 = I_unpol / 2 -->
    <line x1="175" y1="140" x2="330" y2="140" stroke="#15803d" stroke-width="2.5"/>
    <text x="250" y="120" fill="#15803d" font-size="11" font-weight="bold" text-anchor="middle">I₀ = I_unpol / 2</text>
    
    <!-- Analyser P2 (Rotated by angle θ) -->
    <g transform="translate(330, 70)">
      <rect x="0" y="0" width="35" height="140" rx="4" fill="#fef08a" stroke="#d97706" stroke-width="2"/>
      <!-- Rotated transmission axis line -->
      <line x1="8" y1="15" x2="27" y2="125" stroke="#d97706" stroke-width="2.5"/>
      <text x="17" y="155" fill="#d97706" font-size="11" font-weight="bold" text-anchor="middle">Analyser P₂</text>
      <text x="17" y="170" fill="#475569" font-size="9.5" text-anchor="middle">Axis at angle θ</text>
    </g>
    
    <!-- Transmitted light obeying Malus' Law -->
    <line x1="365" y1="140" x2="520" y2="140" stroke="#8b5cf6" stroke-width="2.5"/>
    <text x="445" y="120" fill="#6d28d9" font-size="12" font-weight="bold" text-anchor="middle">I = I₀ cos² θ</text>
    <text x="445" y="160" fill="#475569" font-size="10" text-anchor="middle">• θ = 0° ⇒ I = I₀</text>
    <text x="445" y="176" fill="#dc2626" font-size="10" font-weight="bold">• θ = 90° ⇒ I = 0 (Crossed)</text>
  </svg>`,

  // 20. Malus' Law Intensity Curve
  malusLawCurve: `<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="520" height="260" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <text x="260" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">Malus' Law: Transmitted Intensity vs Angle θ (I = I₀ cos² θ)</text>
    
    <!-- Graph Axes -->
    <line x1="60" y1="200" x2="480" y2="200" stroke="#334155" stroke-width="2"/>
    <line x1="60" y1="200" x2="60" y2="45" stroke="#334155" stroke-width="2"/>
    <text x="460" y="220" fill="#334155" font-size="11" font-weight="bold">Angle θ</text>
    <text x="45" y="45" fill="#334155" font-size="11" font-weight="bold">I</text>
    
    <!-- I = I0 cos^2(theta) curve from 0 to 180 deg -->
    <!-- 0 deg: (60, 60), 45 deg: (150, 130), 90 deg: (240, 200), 135 deg: (330, 130), 180 deg: (420, 60) -->
    <path d="M 60 60 Q 150 60 240 200 Q 330 60 420 60" fill="none" stroke="#2563eb" stroke-width="3"/>
    
    <!-- Labels on graph -->
    <circle cx="60" cy="60" r="4" fill="#2563eb"/>
    <text x="75" y="65" fill="#2563eb" font-size="11" font-weight="bold">I = I₀ (θ = 0°)</text>
    
    <circle cx="150" cy="130" r="4" fill="#d97706"/>
    <text x="160" y="125" fill="#d97706" font-size="10" font-weight="bold">I₀/2 (45°)</text>
    
    <circle cx="240" cy="200" r="4" fill="#dc2626"/>
    <text x="240" y="220" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">I = 0 (90° Crossed)</text>
    
    <circle cx="420" cy="60" r="4" fill="#2563eb"/>
    <text x="420" y="50" fill="#2563eb" font-size="11" font-weight="bold" text-anchor="middle">I = I₀ (180° Parallel)</text>
    
    <!-- Special Note box -->
    <rect x="275" y="130" width="225" height="55" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="285" y="150" fill="#0f172a" font-size="10.5" font-weight="bold">Unpolarised through single polaroid:</text>
    <text x="285" y="168" fill="#15803d" font-size="11" font-weight="bold">I_transmitted = ⟨cos² θ⟩ · I_unpol = ½ I_unpol</text>
  </svg>`,

  // 21. Brewster's Law & Polarisation by Reflection
  brewsterLaw: `<svg viewBox="0 0 540 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
    <rect width="540" height="320" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
    <text x="270" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">Brewster's Law: Complete Polarisation by Reflection (μ = tan i_B)</text>
    
    <!-- Interface between Air and Glass/Medium -->
    <rect x="0" y="150" width="540" height="170" fill="#eff6ff" fill-opacity="0.8"/>
    <line x1="30" y1="150" x2="510" y2="150" stroke="#334155" stroke-width="2.5"/>
    <text x="440" y="135" fill="#475569" font-size="11">Air (μ₁ = 1)</text>
    <text x="440" y="175" fill="#1e40af" font-size="11" font-weight="bold">Glass (μ₂ = μ)</text>
    
    <!-- Normal at incidence point O -->
    <line x1="260" y1="40" x2="260" y2="280" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>
    <circle cx="260" cy="150" r="3" fill="#0f172a"/>
    <text x="250" y="45" fill="#64748b" font-size="11">Normal</text>
    
    <!-- Incident Ray (Unpolarised) at i_B (~57° for glass) -->
    <line x1="100" y1="50" x2="260" y2="150" stroke="#ef4444" stroke-width="2.5"/>
    <!-- Unpolarised markers on incident ray (arrows + dots) -->
    <circle cx="160" cy="88" r="3" fill="#0f172a"/>
    <line x1="155" y1="80" x2="165" y2="96" stroke="#0f172a" stroke-width="2"/>
    <circle cx="205" cy="116" r="3" fill="#0f172a"/>
    <line x1="200" y1="108" x2="210" y2="124" stroke="#0f172a" stroke-width="2"/>
    <text x="130" y="70" fill="#ef4444" font-size="11" font-weight="bold">Unpolarised Incident Ray</text>
    
    <!-- Reflected Ray (Completely Polarised perpendicular to plane of incidence - DOTS only!) -->
    <line x1="260" y1="150" x2="420" y2="50" stroke="#15803d" stroke-width="2.5"/>
    <circle cx="315" cy="116" r="3.5" fill="#15803d"/>
    <circle cx="365" cy="84" r="3.5" fill="#15803d"/>
    <text x="350" y="45" fill="#15803d" font-size="12" font-weight="bold">Reflected Ray (100% Polarised)</text>
    <text x="365" y="60" fill="#15803d" font-size="10">• Vibrations ⟂ plane of incidence (dots)</text>
    
    <!-- Refracted Ray (Partially Polarised) -->
    <line x1="260" y1="150" x2="340" y2="280" stroke="#2563eb" stroke-width="2.5"/>
    <circle cx="295" cy="207" r="2.5" fill="#2563eb"/>
    <line x1="288" y1="202" x2="302" y2="212" stroke="#2563eb" stroke-width="2"/>
    <text x="350" y="275" fill="#2563eb" font-size="11" font-weight="bold">Refracted Ray (Partially Polarised)</text>
    
    <!-- 90 degree right angle between Reflected & Refracted ray -->
    <path d="M 285 135 L 298 156 L 273 171" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="305" y="155" fill="#dc2626" font-size="13" font-weight="bold">90°</text>
    
    <!-- Angles -->
    <path d="M 260 110 A 40 40 0 0 0 215 125" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    <text x="235" y="110" fill="#dc2626" font-size="12" font-weight="bold">i_B</text>
    
    <path d="M 260 110 A 40 40 0 0 1 305 125" fill="none" stroke="#15803d" stroke-width="1.5"/>
    <text x="275" y="110" fill="#15803d" font-size="12" font-weight="bold">i_B</text>
    
    <path d="M 260 190 A 40 40 0 0 0 280 185" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    <text x="270" y="205" fill="#2563eb" font-size="12" font-weight="bold">r</text>
    
    <!-- Proof Box -->
    <rect x="20" y="200" width="220" height="105" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="28" y="218" fill="#0f172a" font-size="11" font-weight="bold">Key Brewster Geometry:</text>
    <text x="28" y="235" fill="#475569" font-size="10">• i_B + r = 90° ⇒ r = 90° - i_B</text>
    <text x="28" y="252" fill="#475569" font-size="10">• Snell's law: μ = sin i_B / sin r</text>
    <text x="28" y="268" fill="#475569" font-size="10">• μ = sin i_B / sin(90° - i_B) = sin i_B / cos i_B</text>
    <text x="28" y="290" fill="#1d4ed8" font-size="13" font-weight="bold">⇒ μ = tan i_B</text>
  </svg>`
};
