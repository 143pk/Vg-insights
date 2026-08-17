// Scientifically accurate, high-contrast, responsive SVG diagrams for Class 12 Physics: Atoms

export const ATOMS_SVGS = {
  // 1. Concept Flowchart for Chapter Evolution
  conceptFlow: `<svg viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-xl bg-slate-900 shadow-2xl p-2">
  <defs>
    <linearGradient id="gradFlow1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <linearGradient id="gradFlow2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="gradFlow3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </linearGradient>
    <linearGradient id="gradFlow4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
    <linearGradient id="gradFlow5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#6d28d9"/>
    </linearGradient>
    <marker id="arrowFlow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Title Banner -->
  <rect x="20" y="15" width="760" height="42" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="400" y="41" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle" letter-spacing="0.5">HISTORICAL & CONCEPTUAL EVOLUTION OF ATOMIC MODELS</text>

  <!-- Row 1: Classical to Rutherford -->
  <!-- Box 1: Thomson Plum Pudding -->
  <rect x="30" y="80" width="210" height="85" rx="10" fill="url(#gradFlow1)" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="135" y="105" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Thomson Model (1898)</text>
  <text x="135" y="125" fill="#bfdbfe" font-size="11" text-anchor="middle">"Plum Pudding" Model</text>
  <text x="135" y="142" fill="#dbeafe" font-size="10" text-anchor="middle">Uniform positive sphere + e⁻</text>
  <text x="135" y="155" fill="#fecaca" font-size="10" font-weight="600" text-anchor="middle">❌ Failed: Large angle scattering</text>

  <!-- Arrow 1 to 2 -->
  <line x1="240" y1="122" x2="285" y2="122" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrowFlow)"/>

  <!-- Box 2: Rutherford α-Scattering -->
  <rect x="295" y="80" width="210" height="85" rx="10" fill="url(#gradFlow2)" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="400" y="105" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Geiger-Marsden (1911)</text>
  <text x="400" y="125" fill="#fef3c7" font-size="11" text-anchor="middle">α-Particle Scattering on Gold</text>
  <text x="400" y="142" fill="#fef9c3" font-size="10" text-anchor="middle">1 in 8000 deflects &gt; 90°</text>
  <text x="400" y="155" fill="#ffffff" font-size="10" font-weight="600" text-anchor="middle">💡 Discovery of Dense Nucleus</text>

  <!-- Arrow 2 to 3 -->
  <line x1="505" y1="122" x2="550" y2="122" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrowFlow)"/>

  <!-- Box 3: Rutherford Planetary Model -->
  <rect x="560" y="80" width="210" height="85" rx="10" fill="url(#gradFlow1)" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="665" y="105" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Rutherford Model (1911)</text>
  <text x="665" y="125" fill="#bfdbfe" font-size="11" text-anchor="middle">Nuclear Planetary Model</text>
  <text x="665" y="142" fill="#dbeafe" font-size="10" text-anchor="middle">Tiny nucleus (~10⁻¹⁵ m)</text>
  <text x="665" y="155" fill="#dbeafe" font-size="10" text-anchor="middle">e⁻ orbit in empty space</text>

  <!-- Downward Arrow to Limitations -->
  <path d="M 665 165 L 665 200 L 400 200 L 400 220" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrowFlow)"/>

  <!-- Box 4: Rutherford Limitations (Crisis) -->
  <rect x="150" y="225" width="500" height="75" rx="10" fill="url(#gradFlow3)" stroke="#f87171" stroke-width="1.5"/>
  <text x="400" y="248" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">CRITICAL FLAWS OF RUTHERFORD'S MODEL (Classical Physics)</text>
  <text x="400" y="268" fill="#fee2e2" font-size="11" text-anchor="middle">1. EM Theory: Accelerating e⁻ radiates energy ➔ Spirals into nucleus in ~10⁻⁸ s (Atom Unstable!)</text>
  <text x="400" y="286" fill="#fee2e2" font-size="11" text-anchor="middle">2. Predicts continuous spectrum, but experiments show DISCRETE atomic line spectra.</text>

  <!-- Arrow down to Bohr -->
  <line x1="400" y1="300" x2="400" y2="330" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrowFlow)"/>

  <!-- Row 3: Bohr Model -->
  <!-- Box 5: Bohr Postulates -->
  <rect x="50" y="335" width="330" height="120" rx="10" fill="url(#gradFlow4)" stroke="#34d399" stroke-width="1.5"/>
  <text x="215" y="358" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Bohr's Quantum Model (1913)</text>
  <text x="215" y="378" fill="#a7f3d0" font-size="10.5" text-anchor="middle">• Postulate 1: Non-radiating Stationary Orbits</text>
  <text x="215" y="396" fill="#a7f3d0" font-size="10.5" text-anchor="middle">• Postulate 2: L = mvr = nh / 2π (Quantisation)</text>
  <text x="215" y="414" fill="#a7f3d0" font-size="10.5" text-anchor="middle">• Postulate 3: Transition ΔE = hν = E_i - E_f</text>
  <text x="215" y="435" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">E_n = -13.6 Z²/n² eV | r_n = 0.529 n²/Z Å</text>

  <!-- Arrow 5 to 6 -->
  <line x1="380" y1="395" x2="415" y2="395" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrowFlow)"/>

  <!-- Box 6: Hydrogen Spectrum & Series -->
  <rect x="420" y="335" width="340" height="120" rx="10" fill="url(#gradFlow5)" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="590" y="358" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Discrete Hydrogen Spectral Series</text>
  <text x="590" y="378" fill="#ddd6fe" font-size="10.5" text-anchor="middle">Rydberg Formula: 1/λ = R Z² (1/n₁² - 1/n₂²)</text>
  <text x="590" y="396" fill="#ddd6fe" font-size="10.5" text-anchor="middle">• Lyman (n₁=1, UV) • Balmer (n₁=2, Visible)</text>
  <text x="590" y="414" fill="#ddd6fe" font-size="10.5" text-anchor="middle">• Paschen (n₁=3, IR) • Brackett (n₁=4, IR)</text>
  <text x="590" y="435" fill="#fef08a" font-size="10.5" font-weight="bold" text-anchor="middle">Longest: n₂ = n₁+1 | Series Limit: n₂ = ∞</text>
</svg>`,

  // 2. Rutherford Alpha-Particle Scattering Experiment Apparatus
  rutherfordApparatus: `<svg viewBox="0 0 850 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-xl bg-slate-900 shadow-2xl p-2">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <radialGradient id="sourceGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f87171"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </radialGradient>
    <marker id="alphaBeamArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 8 5 L 0 8 z" fill="#ef4444"/>
    </marker>
  </defs>

  <!-- Title -->
  <rect x="25" y="12" width="800" height="38" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="425" y="37" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">GEIGER-MARSDEN α-PARTICLE SCATTERING EXPERIMENTAL SETUP</text>

  <!-- Circular ZnS Screen Track -->
  <path d="M 540 80 A 180 180 0 1 1 540 400" fill="none" stroke="#22c55e" stroke-width="8" stroke-linecap="round" opacity="0.85"/>
  <text x="690" y="100" fill="#4ade80" font-size="12" font-weight="bold">Rotatable Zinc Sulphide (ZnS) Screen</text>
  <text x="690" y="118" fill="#86efac" font-size="10.5">Produces flashes of light (scintillations)</text>

  <!-- Lead Block Housing -->
  <rect x="40" y="200" width="80" height="80" rx="6" fill="#475569" stroke="#94a3b8" stroke-width="2"/>
  <rect x="55" y="215" width="50" height="50" rx="4" fill="#334155"/>
  <!-- Radioactive Source (Bismuth-214) -->
  <circle cx="80" cy="240" r="14" fill="url(#sourceGlow)"/>
  <text x="80" y="244" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">²¹⁴Bi</text>
  <text x="80" y="300" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">α-Source (5.5 MeV)</text>
  <text x="80" y="315" fill="#94a3b8" font-size="9.5" text-anchor="middle">Lead Shielded Cavity</text>

  <!-- Lead Collimator Slits -->
  <rect x="155" y="180" width="16" height="48" rx="2" fill="#64748b"/>
  <rect x="155" y="252" width="16" height="48" rx="2" fill="#64748b"/>
  <rect x="200" y="190" width="16" height="38" rx="2" fill="#64748b"/>
  <rect x="200" y="252" width="16" height="38" rx="2" fill="#64748b"/>
  <text x="185" y="320" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Lead Collimators</text>
  <text x="185" y="335" fill="#94a3b8" font-size="9.5" text-anchor="middle">(Fine Parallel Beam)</text>

  <!-- Thin Gold Foil -->
  <rect x="360" y="150" width="10" height="180" rx="3" fill="url(#goldGrad)" stroke="#f59e0b" stroke-width="2"/>
  <text x="365" y="130" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">Thin Gold Foil</text>
  <text x="365" y="145" fill="#fef08a" font-size="10" text-anchor="middle">(Thickness ≈ 2.1 × 10⁻⁷ m ≈ 1000 atoms)</text>

  <!-- Primary Incident Beam -->
  <line x1="95" y1="240" x2="355" y2="240" stroke="#ef4444" stroke-width="3.5" marker-end="url(#alphaBeamArrow)"/>
  <text x="270" y="230" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">High-energy α-beam</text>

  <!-- Undeviated Trajectory (Most α-particles: > 99.86%) -->
  <line x1="375" y1="240" x2="680" y2="240" stroke="#ef4444" stroke-width="4" stroke-dasharray="3,0"/>
  <circle cx="680" cy="240" r="6" fill="#22c55e"/>
  <text x="695" y="238" fill="#4ade80" font-size="11.5" font-weight="bold">&gt; 99.86% Undeviated (θ ≈ 0°)</text>
  <text x="695" y="254" fill="#cbd5e1" font-size="10">Proves atom is mostly empty space</text>

  <!-- Small Angle Scattering (θ < 1°) -->
  <line x1="375" y1="240" x2="660" y2="200" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,2"/>
  <circle cx="660" cy="200" r="4" fill="#22c55e"/>
  <text x="670" y="195" fill="#fcd34d" font-size="10.5">Small deflection (0.14% deflect &gt; 1°)</text>

  <!-- Large Angle Scattering (θ > 90°) -->
  <path d="M 370 240 Q 380 230 460 130" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,2"/>
  <circle cx="460" cy="130" r="4" fill="#22c55e"/>
  <text x="475" y="135" fill="#38bdf8" font-size="11" font-weight="bold">Deflection &gt; 90°</text>

  <!-- Backward Scattering (θ ≈ 180° - 1 in 8000) -->
  <path d="M 365 240 Q 360 235 220 160" fill="none" stroke="#ec4899" stroke-width="2.5" stroke-dasharray="4,2"/>
  <circle cx="220" cy="160" r="5" fill="#ec4899"/>
  <text x="210" y="140" fill="#f472b6" font-size="11" font-weight="bold" text-anchor="middle">1 in 8000 Rebounds (θ ≈ 180°)</text>
  <text x="210" y="153" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Heavy positive concentrated mass</text>

  <!-- Movable Microscope Detector -->
  <rect x="520" y="380" width="110" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <circle cx="535" cy="400" r="8" fill="#38bdf8"/>
  <text x="580" y="398" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">Movable</text>
  <text x="580" y="412" fill="#38bdf8" font-size="10" text-anchor="middle">Microscope Detector</text>

  <!-- Scattering Angle Arc -->
  <path d="M 450 240 A 75 75 0 0 0 435 170" fill="none" stroke="#fcd34d" stroke-width="2"/>
  <text x="460" y="205" fill="#fcd34d" font-size="13" font-weight="bold">θ</text>
  <text x="460" y="220" fill="#cbd5e1" font-size="9.5">Scattering Angle</text>
</svg>`,

  // 3. Alpha-Particle Trajectories in Gold Atom (Impact Parameter & Distance of Closest Approach)
  rutherfordTrajectories: `<svg viewBox="0 0 850 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-xl bg-slate-900 shadow-2xl p-2">
  <defs>
    <radialGradient id="nucleusGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="70%" stop-color="#b91c1c"/>
      <stop offset="100%" stop-color="#7f1d1d"/>
    </radialGradient>
  </defs>

  <!-- Title -->
  <rect x="25" y="12" width="800" height="38" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="425" y="37" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">ALPHA PARTICLE TRAJECTORIES & IMPACT PARAMETER (b)</text>

  <!-- Atom Boundary (Dotted Outline) -->
  <circle cx="450" cy="240" r="180" fill="#1e293b" fill-opacity="0.25" stroke="#475569" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="450" y="75" fill="#94a3b8" font-size="12" text-anchor="middle">Atom Outer Boundary (~10⁻¹⁰ m)</text>

  <!-- Gold Nucleus -->
  <circle cx="450" cy="240" r="18" fill="url(#nucleusGrad)" stroke="#fca5a5" stroke-width="2"/>
  <text x="450" y="244" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">+Ze</text>
  <text x="450" y="275" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">Gold Nucleus (Z = 79)</text>
  <text x="450" y="290" fill="#94a3b8" font-size="9.5" text-anchor="middle">Size ≈ 10⁻¹⁴ to 10⁻¹⁵ m</text>

  <!-- Trajectory 1: Large Impact Parameter (b is large -> θ ≈ 0°) -->
  <line x1="50" y1="100" x2="800" y2="100" stroke="#22c55e" stroke-width="2.5"/>
  <text x="140" y="90" fill="#4ade80" font-size="11" font-weight="bold">Large b ➔ θ ≈ 0° (Undeviated)</text>
  <!-- Dimension for b1 -->
  <line x1="200" y1="240" x2="200" y2="100" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="210" y="175" fill="#38bdf8" font-size="11" font-weight="bold">b₁ (large)</text>

  <!-- Trajectory 2: Moderate Impact Parameter (b moderate -> small θ) -->
  <path d="M 50 160 L 350 160 Q 420 160 520 135 L 800 90" fill="none" stroke="#eab308" stroke-width="2.5"/>
  <text x="140" y="152" fill="#fde047" font-size="11" font-weight="bold">Moderate b ➔ Small angle deflection (θ &lt; 10°)</text>

  <!-- Trajectory 3: Small Impact Parameter (b small -> large θ) -->
  <path d="M 50 215 L 370 215 Q 430 215 480 160 L 620 50" fill="none" stroke="#f97316" stroke-width="3"/>
  <text x="140" y="208" fill="#fb923c" font-size="11" font-weight="bold">Small b ➔ Large deflection (θ &gt; 90°)</text>

  <!-- Trajectory 4: Head-on Collision (b = 0 -> θ = 180°, Rebound) -->
  <line x1="50" y1="240" x2="385" y2="240" stroke="#ef4444" stroke-width="3"/>
  <path d="M 385 240 Q 380 235 375 230 L 50 230" fill="none" stroke="#ec4899" stroke-width="3" stroke-dasharray="4,2"/>
  <!-- Distance of Closest Approach r₀ -->
  <line x1="385" y1="240" x2="432" y2="240" stroke="#38bdf8" stroke-width="2" stroke-dasharray="2,2"/>
  <circle cx="385" cy="240" r="5" fill="#ef4444"/>
  <text x="375" y="325" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Distance of Closest Approach (r₀)</text>
  <text x="375" y="342" fill="#93c5fd" font-size="10.5" text-anchor="middle">r₀ = (1 / 4πε₀) · (2Ze² / K_α) ≈ 10⁻¹⁴ m</text>
  <text x="140" y="258" fill="#f472b6" font-size="11" font-weight="bold">Head-on (b = 0) ➔ Rebound (θ = 180°)</text>

  <!-- Impact parameter formula box -->
  <rect x="530" y="355" width="295" height="105" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="677" y="378" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">NEET Impact Parameter Formula</text>
  <text x="677" y="400" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">b = (1 / 4πε₀) · [Ze² cot(θ/2) / K]</text>
  <text x="677" y="422" fill="#cbd5e1" font-size="10.5" text-anchor="middle">• b = 0 ⟹ cot(θ/2) = 0 ⟹ θ = 180° (Rebound)</text>
  <text x="677" y="442" fill="#cbd5e1" font-size="10.5" text-anchor="middle">• b → ∞ ⟹ cot(θ/2) → ∞ ⟹ θ = 0° (Undeviated)</text>
</svg>`,

  // 4. Rutherford Atomic Model
  rutherfordModel: `<svg viewBox="0 0 700 450" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto rounded-xl bg-slate-900 shadow-2xl p-2">
  <defs>
    <radialGradient id="nucGradRuth" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f87171"/>
      <stop offset="100%" stop-color="#dc2626"/>
    </radialGradient>
  </defs>

  <rect x="25" y="12" width="650" height="38" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="350" y="37" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">RUTHERFORD'S NUCLEAR PLANETARY ATOMIC MODEL</text>

  <!-- Central Nucleus -->
  <circle cx="350" cy="240" r="22" fill="url(#nucGradRuth)" stroke="#fecaca" stroke-width="2"/>
  <text x="350" y="245" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">+Ze</text>
  <text x="350" y="280" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Nucleus</text>
  <text x="350" y="296" fill="#cbd5e1" font-size="10" text-anchor="middle">Radius ~ 10⁻¹⁵ m</text>
  <text x="350" y="310" fill="#cbd5e1" font-size="10" text-anchor="middle">Contains ~99.9% mass</text>

  <!-- Elliptical Orbits -->
  <!-- Orbit 1 -->
  <ellipse cx="350" cy="240" rx="190" ry="80" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6,4" transform="rotate(-25 350 240)"/>
  <circle cx="490" cy="180" r="8" fill="#60a5fa" stroke="#ffffff" stroke-width="1.5"/>
  <text x="510" y="180" fill="#93c5fd" font-size="11" font-weight="bold">Electron (e⁻)</text>

  <!-- Orbit 2 -->
  <ellipse cx="350" cy="240" rx="190" ry="80" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="6,4" transform="rotate(35 350 240)"/>
  <circle cx="210" cy="300" r="8" fill="#34d399" stroke="#ffffff" stroke-width="1.5"/>
  <text x="140" y="325" fill="#6ee7b7" font-size="11" font-weight="bold">Electron (e⁻)</text>

  <!-- Orbit 3 -->
  <ellipse cx="350" cy="240" rx="190" ry="80" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,4" transform="rotate(90 350 240)"/>
  <circle cx="350" cy="60" r="8" fill="#fbbf24" stroke="#ffffff" stroke-width="1.5"/>
  <text x="375" y="65" fill="#fde047" font-size="11" font-weight="bold">Electron (e⁻)</text>

  <!-- Empty Space Label -->
  <rect x="40" y="70" width="180" height="60" rx="6" fill="#1e293b" stroke="#475569"/>
  <text x="130" y="93" fill="#38bdf8" font-size="11.5" font-weight="bold" text-anchor="middle">Mostly Empty Space</text>
  <text x="130" y="112" fill="#cbd5e1" font-size="10" text-anchor="middle">Atomic Size ≈ 10⁻¹⁰ m</text>
  <text x="130" y="124" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(100,000× larger than nucleus)</text>

  <!-- Balance of Forces -->
  <rect x="470" y="340" width="200" height="85" rx="6" fill="#1e293b" stroke="#334155"/>
  <text x="570" y="362" fill="#fcd34d" font-size="11.5" font-weight="bold" text-anchor="middle">Force Balance in Orbit</text>
  <text x="570" y="382" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">F_electrostatic = F_centripetal</text>
  <text x="570" y="404" fill="#cbd5e1" font-size="10.5" text-anchor="middle">(1/4πε₀)·(Ze²/r²) = mv²/r</text>
</svg>`,

  // 5. Rutherford Limitation: Classical Spiral Collapse Catastrophe
  spiralCollapse: `<svg viewBox="0 0 750 450" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto rounded-xl bg-slate-900 shadow-2xl p-2">
  <defs>
    <marker id="spiralArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 8 5 L 0 8 z" fill="#ef4444"/>
    </marker>
  </defs>

  <rect x="25" y="12" width="700" height="38" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="375" y="37" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">CLASSICAL SPIRAL COLLAPSE (FAILURE OF RUTHERFORD's MODEL)</text>

  <!-- Central Nucleus -->
  <circle cx="375" cy="240" r="20" fill="#dc2626" stroke="#fecaca" stroke-width="2"/>
  <text x="375" y="245" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">+Ze</text>
  <text x="375" y="280" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">Nucleus</text>

  <!-- Inward Spiraling Path -->
  <path d="M 375 70 A 170 170 0 0 1 545 240 A 150 150 0 0 1 375 390 A 130 130 0 0 1 245 240 A 110 110 0 0 1 375 130 A 90 90 0 0 1 465 240 A 70 70 0 0 1 375 310 A 50 50 0 0 1 325 240 A 30 30 0 0 1 375 210 A 15 15 0 0 1 375 240" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="5,3" marker-end="url(#spiralArrow)"/>

  <!-- Orbiting & Accelerating Electron -->
  <circle cx="545" cy="240" r="9" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>
  <text x="565" y="245" fill="#93c5fd" font-size="11" font-weight="bold">Orbiting e⁻ (Centripetal Acceleration a = v²/r)</text>

  <!-- EM Radiation Waves Radiating Outward -->
  <path d="M 545 230 Q 580 200 620 220 T 680 210" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <path d="M 465 230 Q 500 170 540 180 T 600 170" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <path d="M 375 120 Q 390 60 440 60 T 500 50" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <text x="630" y="190" fill="#fcd34d" font-size="11" font-weight="bold">Continuous EM Radiation (Loss of Energy)</text>

  <!-- Explanation Cards -->
  <rect x="40" y="320" width="270" height="110" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="175" y="342" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Maxwell's EM Prediction</text>
  <text x="175" y="362" fill="#cbd5e1" font-size="10.5" text-anchor="middle">1. Accelerating charge radiates EM waves.</text>
  <text x="175" y="380" fill="#cbd5e1" font-size="10.5" text-anchor="middle">2. Total energy decreases continuously.</text>
  <text x="175" y="398" fill="#cbd5e1" font-size="10.5" text-anchor="middle">3. Orbital radius shrinks to zero in ~10⁻⁸ s.</text>
  <text x="175" y="416" fill="#fca5a5" font-size="10.5" font-weight="bold" text-anchor="middle">❌ Contradicts Matter Stability!</text>

  <rect x="450" y="320" width="270" height="110" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="585" y="342" fill="#fcd34d" font-size="12" font-weight="bold" text-anchor="middle">Continuous vs Line Spectrum</text>
  <text x="585" y="362" fill="#cbd5e1" font-size="10.5" text-anchor="middle">1. As radius shrinks, frequency ν increases.</text>
  <text x="585" y="380" fill="#cbd5e1" font-size="10.5" text-anchor="middle">2. Predicts continuous rainbow spectrum.</text>
  <text x="585" y="398" fill="#cbd5e1" font-size="10.5" text-anchor="middle">3. But atoms emit DISCRETE line spectra!</text>
  <text x="585" y="416" fill="#fde047" font-size="10.5" font-weight="bold" text-anchor="middle">❌ Unexplained by Rutherford</text>
</svg>`,

  // 6. Bohr Atomic Model & Non-Radiating Stationary Orbits
  bohrStationaryOrbits: `<svg viewBox="0 0 750 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto rounded-xl bg-slate-900 shadow-2xl p-2">
  <defs>
    <radialGradient id="bohrNuc" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f87171"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </radialGradient>
  </defs>

  <rect x="25" y="12" width="700" height="38" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="375" y="37" fill="#34d399" font-size="15" font-weight="bold" text-anchor="middle">BOHR'S QUANTUM MODEL — STATIONARY ORBITS</text>

  <!-- Nucleus -->
  <circle cx="375" cy="250" r="16" fill="url(#bohrNuc)" stroke="#fca5a5" stroke-width="2"/>
  <text x="375" y="254" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">+Ze</text>

  <!-- Orbit 1 (n=1, r1 = 0.529 A) -->
  <circle cx="375" cy="250" r="55" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <circle cx="430" cy="250" r="7" fill="#38bdf8"/>
  <text x="430" y="235" fill="#38bdf8" font-size="10.5" font-weight="bold">n = 1 (r₁ = a₀ = 0.53 Å)</text>
  <text x="430" y="272" fill="#93c5fd" font-size="9.5">E₁ = -13.6 eV (Ground State)</text>

  <!-- Orbit 2 (n=2, r2 = 4 r1 = 2.12 A) -->
  <circle cx="375" cy="250" r="110" fill="none" stroke="#a78bfa" stroke-width="2" stroke-dasharray="6,3"/>
  <circle cx="375" cy="140" r="7" fill="#a78bfa"/>
  <text x="375" y="125" fill="#a78bfa" font-size="10.5" font-weight="bold" text-anchor="middle">n = 2 (r₂ = 4 a₀ = 2.12 Å) | E₂ = -3.40 eV</text>

  <!-- Orbit 3 (n=3, r3 = 9 r1 = 4.76 A) -->
  <circle cx="375" cy="250" r="170" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,3"/>
  <circle cx="205" cy="250" r="7" fill="#f59e0b"/>
  <text x="195" y="240" fill="#fde047" font-size="10.5" font-weight="bold" text-anchor="end">n = 3 (r₃ = 9 a₀ = 4.76 Å)</text>
  <text x="195" y="255" fill="#fde047" font-size="9.5" text-anchor="end">E₃ = -1.51 eV</text>

  <!-- Quantisation Condition Box -->
  <rect x="40" y="380" width="310" height="85" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="195" y="402" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Postulate 2: Angular Momentum</text>
  <text x="195" y="424" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">L = mvr = n (h / 2π)</text>
  <text x="195" y="445" fill="#cbd5e1" font-size="10.5" text-anchor="middle">n = 1, 2, 3... (Principal Quantum Number)</text>

  <!-- Stationary State Box -->
  <rect x="400" y="380" width="310" height="85" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="555" y="402" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Postulate 1: Stationary Orbit</text>
  <text x="555" y="422" fill="#cbd5e1" font-size="11" text-anchor="middle">• Non-radiating permitted orbits</text>
  <text x="555" y="442" fill="#cbd5e1" font-size="11" text-anchor="middle">• Atom is stable in stationary state</text>
</svg>`,

  // 7. Bohr Energy Level Diagram for Hydrogen (Vertical Ladder)
  bohrEnergyLevels: `<svg viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-xl bg-slate-900 shadow-2xl p-2">
  <defs>
    <linearGradient id="lymanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
    <marker id="downArrow" viewBox="0 0 10 10" refX="5" refY="6" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 0 L 5 8 L 10 0 z" fill="#38bdf8"/>
    </marker>
    <marker id="balmerArrow" viewBox="0 0 10 10" refX="5" refY="6" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 0 L 5 8 L 10 0 z" fill="#ec4899"/>
    </marker>
    <marker id="paschenArrow" viewBox="0 0 10 10" refX="5" refY="6" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 0 L 5 8 L 10 0 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <rect x="25" y="12" width="750" height="38" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="400" y="37" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">HYDROGEN ATOM QUANTIZED ENERGY LEVEL DIAGRAM</text>

  <!-- Left Energy Scale Axis -->
  <line x1="90" y1="80" x2="90" y2="470" stroke="#64748b" stroke-width="2"/>
  <text x="40" y="270" fill="#94a3b8" font-size="13" font-weight="bold" transform="rotate(-90 40 270)" text-anchor="middle">Energy E (eV)</text>

  <!-- n = infinity (E = 0 eV) -->
  <line x1="90" y1="85" x2="720" y2="85" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="735" y="89" fill="#94a3b8" font-size="12" font-weight="bold">n = ∞ (0.00 eV) [Free / Ionised]</text>

  <!-- n = 5 (E = -0.54 eV) -->
  <line x1="90" y1="120" x2="720" y2="120" stroke="#64748b" stroke-width="1.5"/>
  <text x="735" y="124" fill="#cbd5e1" font-size="11">n = 5 (-0.54 eV)</text>

  <!-- n = 4 (E = -0.85 eV) -->
  <line x1="90" y1="155" x2="720" y2="155" stroke="#64748b" stroke-width="1.5"/>
  <text x="735" y="159" fill="#cbd5e1" font-size="11">n = 4 (-0.85 eV)</text>

  <!-- n = 3 (E = -1.51 eV) -->
  <line x1="90" y1="210" x2="720" y2="210" stroke="#64748b" stroke-width="2"/>
  <text x="735" y="214" fill="#fde047" font-size="12" font-weight="bold">n = 3 (-1.51 eV)</text>

  <!-- n = 2 (E = -3.40 eV) -->
  <line x1="90" y1="295" x2="720" y2="295" stroke="#64748b" stroke-width="2.5"/>
  <text x="735" y="299" fill="#f472b6" font-size="12.5" font-weight="bold">n = 2 (-3.40 eV) [1st Excited]</text>

  <!-- n = 1 (E = -13.60 eV) -->
  <line x1="90" y1="460" x2="720" y2="460" stroke="#38bdf8" stroke-width="3.5"/>
  <text x="735" y="464" fill="#38bdf8" font-size="13" font-weight="bold">n = 1 (-13.60 eV) [Ground State]</text>

  <!-- LYMAN SERIES (Transitions to n=1, UV) -->
  <line x1="160" y1="295" x2="160" y2="455" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#downArrow)"/>
  <line x1="185" y1="210" x2="185" y2="455" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#downArrow)"/>
  <line x1="210" y1="155" x2="210" y2="455" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#downArrow)"/>
  <line x1="235" y1="85" x2="235" y2="455" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#downArrow)"/>
  <text x="195" y="490" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">LYMAN SERIES (UV)</text>
  <text x="195" y="506" fill="#93c5fd" font-size="10" text-anchor="middle">n₁ = 1, n₂ = 2, 3, 4... ∞</text>

  <!-- BALMER SERIES (Transitions to n=2, VISIBLE) -->
  <line x1="330" y1="210" x2="330" y2="290" stroke="#ef4444" stroke-width="2.5" marker-end="url(#balmerArrow)"/>
  <line x1="355" y1="155" x2="355" y2="290" stroke="#06b6d4" stroke-width="2.5" marker-end="url(#balmerArrow)"/>
  <line x1="380" y1="120" x2="380" y2="290" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#balmerArrow)"/>
  <line x1="405" y1="85" x2="405" y2="290" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#balmerArrow)"/>
  <text x="365" y="325" fill="#f472b6" font-size="13" font-weight="bold" text-anchor="middle">BALMER SERIES (Visible)</text>
  <text x="365" y="341" fill="#fbcfe8" font-size="10" text-anchor="middle">H_α (656 nm), H_β (486 nm)</text>

  <!-- PASCHEN SERIES (Transitions to n=3, IR) -->
  <line x1="500" y1="155" x2="500" y2="205" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#paschenArrow)"/>
  <line x1="525" y1="120" x2="525" y2="205" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#paschenArrow)"/>
  <line x1="550" y1="85" x2="550" y2="205" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#paschenArrow)"/>
  <text x="525" y="240" fill="#fcd34d" font-size="12" font-weight="bold" text-anchor="middle">PASCHEN (IR)</text>

  <!-- BRACKETT & PFUND (Far IR) -->
  <line x1="630" y1="120" x2="630" y2="150" stroke="#10b981" stroke-width="2" marker-end="url(#paschenArrow)"/>
  <text x="630" y="180" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">BRACKETT</text>
  <line x1="680" y1="85" x2="680" y2="115" stroke="#ec4899" stroke-width="2" marker-end="url(#paschenArrow)"/>
  <text x="680" y="145" fill="#f472b6" font-size="11" font-weight="bold" text-anchor="middle">PFUND</text>
</svg>`,

  // 8. Emission vs Absorption Transitions
  emissionVsAbsorption: `<svg viewBox="0 0 750 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto rounded-xl bg-slate-900 shadow-2xl p-2">
  <defs>
    <marker id="upArrowGreen" viewBox="0 0 10 10" refX="5" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 8 L 5 0 L 10 8 z" fill="#10b981"/>
    </marker>
    <marker id="downArrowBlue" viewBox="0 0 10 10" refX="5" refY="6" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 0 L 5 8 L 10 0 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <rect x="25" y="12" width="700" height="38" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="375" y="37" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">EMISSION VS ABSORPTION ELECTRON TRANSITIONS</text>

  <!-- Left: ABSORPTION -->
  <rect x="40" y="65" width="315" height="330" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="197" y="95" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">ABSORPTION (Lower ➔ Higher n)</text>

  <!-- Energy Lines Left -->
  <line x1="70" y1="130" x2="325" y2="130" stroke="#94a3b8" stroke-width="2"/>
  <text x="330" y="134" fill="#cbd5e1" font-size="11">n = 3 (-1.51 eV)</text>
  <line x1="70" y1="200" x2="325" y2="200" stroke="#94a3b8" stroke-width="2"/>
  <text x="330" y="204" fill="#cbd5e1" font-size="11">n = 2 (-3.40 eV)</text>
  <line x1="70" y1="310" x2="325" y2="310" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="330" y="314" fill="#38bdf8" font-size="11" font-weight="bold">n = 1 (-13.6 eV)</text>

  <!-- Absorption Arrow (Upward) -->
  <line x1="160" y1="305" x2="160" y2="138" stroke="#10b981" stroke-width="3" marker-end="url(#upArrowGreen)"/>
  <!-- Incident Photon -->
  <path d="M 80 220 Q 110 200 130 220 T 155 220" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
  <text x="110" y="205" fill="#fde047" font-size="11" font-weight="bold">hν absorbed</text>
  <text x="197" y="350" fill="#a7f3d0" font-size="11.5" font-weight="bold" text-anchor="middle">hν = E_final - E_initial = 12.09 eV</text>
  <text x="197" y="375" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Produces Dark Absorption Line</text>

  <!-- Right: EMISSION -->
  <rect x="395" y="65" width="315" height="330" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="552" y="95" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">EMISSION (Higher ➔ Lower n)</text>

  <!-- Energy Lines Right -->
  <line x1="425" y1="130" x2="680" y2="130" stroke="#94a3b8" stroke-width="2"/>
  <text x="685" y="134" fill="#cbd5e1" font-size="11">n = 3 (-1.51 eV)</text>
  <line x1="425" y1="200" x2="680" y2="200" stroke="#94a3b8" stroke-width="2"/>
  <text x="685" y="204" fill="#cbd5e1" font-size="11">n = 2 (-3.40 eV)</text>
  <line x1="425" y1="310" x2="680" y2="310" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="685" y="314" fill="#38bdf8" font-size="11" font-weight="bold">n = 1 (-13.6 eV)</text>

  <!-- Emission Arrow (Downward) -->
  <line x1="515" y1="135" x2="515" y2="302" stroke="#38bdf8" stroke-width="3" marker-end="url(#downArrowBlue)"/>
  <!-- Emitted Photon Wave -->
  <path d="M 520 220 Q 550 200 580 220 T 630 220" fill="none" stroke="#ef4444" stroke-width="2.5"/>
  <text x="580" y="205" fill="#fca5a5" font-size="11" font-weight="bold">hν emitted</text>
  <text x="552" y="350" fill="#93c5fd" font-size="11.5" font-weight="bold" text-anchor="middle">hν = E_initial - E_final = 12.09 eV</text>
  <text x="552" y="375" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Produces Bright Emission Line</text>
</svg>`,

  // 9. Hydrogen Emission Spectrum vs Continuous Spectrum
  hydrogenSpectrumLines: `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-xl bg-slate-900 shadow-2xl p-2">
  <defs>
    <linearGradient id="continuousGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7e22ce"/>
      <stop offset="20%" stop-color="#3b82f6"/>
      <stop offset="40%" stop-color="#06b6d4"/>
      <stop offset="60%" stop-color="#22c55e"/>
      <stop offset="80%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
  </defs>

  <rect x="25" y="12" width="750" height="38" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="400" y="37" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">CONTINUOUS SPECTRUM VS HYDROGEN LINE EMISSION SPECTRUM</text>

  <!-- Continuous Spectrum -->
  <text x="50" y="85" fill="#cbd5e1" font-size="13" font-weight="bold">1. Continuous Spectrum (e.g. Incandescent Lamp / Sun Core)</text>
  <rect x="50" y="95" width="700" height="40" rx="4" fill="url(#continuousGrad)"/>
  <text x="50" y="150" fill="#94a3b8" font-size="10.5">Wavelength increases ➔ (400 nm Violet to 700 nm Red with all intermediate colors smoothly present)</text>

  <!-- Discrete Hydrogen Balmer Lines -->
  <text x="50" y="195" fill="#f472b6" font-size="13" font-weight="bold">2. Hydrogen Line Emission Spectrum (Balmer Visible Lines)</text>
  <!-- Black background for spectrum -->
  <rect x="50" y="205" width="700" height="60" rx="4" fill="#020617" stroke="#334155" stroke-width="1.5"/>

  <!-- H-alpha line (656.3 nm Red, n=3 -> n=2) -->
  <rect x="620" y="205" width="6" height="60" fill="#ef4444"/>
  <text x="623" y="285" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">H_α (656.3 nm)</text>
  <text x="623" y="300" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Red (3 ➔ 2)</text>

  <!-- H-beta line (486.1 nm Blue-Green, n=4 -> n=2) -->
  <rect x="360" y="205" width="5" height="60" fill="#06b6d4"/>
  <text x="362" y="285" fill="#67e8f9" font-size="11" font-weight="bold" text-anchor="middle">H_β (486.1 nm)</text>
  <text x="362" y="300" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Blue-Green (4 ➔ 2)</text>

  <!-- H-gamma line (434.0 nm Blue, n=5 -> n=2) -->
  <rect x="230" y="205" width="4" height="60" fill="#3b82f6"/>
  <text x="232" y="285" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">H_γ (434.0 nm)</text>
  <text x="232" y="300" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Blue (5 ➔ 2)</text>

  <!-- H-delta line (410.2 nm Violet, n=6 -> n=2) -->
  <rect x="150" y="205" width="3" height="60" fill="#8b5cf6"/>
  <text x="152" y="285" fill="#c4b5fd" font-size="11" font-weight="bold" text-anchor="middle">H_δ (410.2 nm)</text>
  <text x="152" y="300" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Violet (6 ➔ 2)</text>

  <!-- Series Limit (364.6 nm UV/Violet limit, n=inf -> n=2) -->
  <rect x="75" y="205" width="4" height="60" fill="#64748b"/>
  <text x="77" y="285" fill="#cbd5e1" font-size="10.5" font-weight="bold" text-anchor="middle">Limit (364.6 nm)</text>
  <text x="77" y="300" fill="#94a3b8" font-size="9.5" text-anchor="middle">∞ ➔ 2</text>

  <!-- Note below -->
  <rect x="50" y="325" width="700" height="55" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
  <text x="400" y="347" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Why is Hydrogen's Spectrum Discrete?</text>
  <text x="400" y="367" fill="#cbd5e1" font-size="11" text-anchor="middle">Because electrons exist ONLY in discrete quantized energy states E_n = -13.6/n² eV. Photons have exact energies ΔE = E_i - E_f.</text>
</svg>`,

  // 10. Hydrogen-Like Ions Comparison (H vs He+ vs Li2+)
  hydrogenLikeIons: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-xl bg-slate-900 shadow-2xl p-2">
  <rect x="25" y="12" width="750" height="38" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="400" y="37" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">ONE-ELECTRON HYDROGEN-LIKE SPECIES (Z DEPENDENCE)</text>

  <!-- Column 1: Hydrogen (Z=1) -->
  <rect x="40" y="70" width="220" height="350" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="150" y="100" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">Hydrogen (¹H)</text>
  <text x="150" y="120" fill="#cbd5e1" font-size="11" text-anchor="middle">Z = 1, 1 electron</text>
  <!-- Energy levels -->
  <line x1="60" y1="160" x2="240" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="150" y="152" fill="#cbd5e1" font-size="10" text-anchor="middle">n = 3: -1.51 eV</text>
  <line x1="60" y1="210" x2="240" y2="210" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="150" y="202" fill="#cbd5e1" font-size="10" text-anchor="middle">n = 2: -3.40 eV</text>
  <line x1="60" y1="310" x2="240" y2="310" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="150" y="302" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">n = 1: -13.6 eV</text>
  <text x="150" y="350" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">r₁ = 0.529 Å</text>
  <text x="150" y="370" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">E_ionisation = 13.6 eV</text>
  <text x="150" y="390" fill="#cbd5e1" font-size="10" text-anchor="middle">v₁ = c / 137</text>

  <!-- Column 2: Helium Ion (He+, Z=2) -->
  <rect x="290" y="70" width="220" height="350" rx="10" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="400" y="100" fill="#a78bfa" font-size="15" font-weight="bold" text-anchor="middle">Helium Ion (He⁺)</text>
  <text x="400" y="120" fill="#cbd5e1" font-size="11" text-anchor="middle">Z = 2, 1 electron</text>
  <!-- Energy levels -->
  <line x1="310" y1="160" x2="490" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="400" y="152" fill="#cbd5e1" font-size="10" text-anchor="middle">n = 3: -6.04 eV</text>
  <line x1="310" y1="210" x2="490" y2="210" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="400" y="202" fill="#cbd5e1" font-size="10" text-anchor="middle">n = 2: -13.6 eV</text>
  <line x1="310" y1="310" x2="490" y2="310" stroke="#a78bfa" stroke-width="2.5"/>
  <text x="400" y="302" fill="#a78bfa" font-size="11" font-weight="bold" text-anchor="middle">n = 1: -54.4 eV</text>
  <text x="400" y="350" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">r₁ = 0.529 / 2 = 0.265 Å</text>
  <text x="400" y="370" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">E_ionisation = 54.4 eV</text>
  <text x="400" y="390" fill="#cbd5e1" font-size="10" text-anchor="middle">v₁ = 2 × (c / 137)</text>

  <!-- Column 3: Lithium Ion (Li2+, Z=3) -->
  <rect x="540" y="70" width="220" height="350" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="650" y="100" fill="#f59e0b" font-size="15" font-weight="bold" text-anchor="middle">Lithium Ion (Li²⁺)</text>
  <text x="650" y="120" fill="#cbd5e1" font-size="11" text-anchor="middle">Z = 3, 1 electron</text>
  <!-- Energy levels -->
  <line x1="560" y1="160" x2="740" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="650" y="152" fill="#cbd5e1" font-size="10" text-anchor="middle">n = 3: -13.6 eV</text>
  <line x1="560" y1="210" x2="740" y2="210" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="650" y="202" fill="#cbd5e1" font-size="10" text-anchor="middle">n = 2: -30.6 eV</text>
  <line x1="560" y1="310" x2="740" y2="310" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="650" y="302" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">n = 1: -122.4 eV</text>
  <text x="650" y="350" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">r₁ = 0.529 / 3 = 0.176 Å</text>
  <text x="650" y="370" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">E_ionisation = 122.4 eV</text>
  <text x="650" y="390" fill="#cbd5e1" font-size="10" text-anchor="middle">v₁ = 3 × (c / 137)</text>
</svg>`
};
