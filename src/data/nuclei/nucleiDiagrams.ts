// Mobile-optimized, scientifically accurate vector SVGs for Class 12 Chapter 13: Nuclei

export const NUCLEI_SVGS = {
  // 1. Concept Flow Diagram
  conceptFlow: `<svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="760" height="280" fill="#0f172a" rx="16"/>
    <text x="380" y="32" fill="#38bdf8" font-size="16" font-weight="900" text-anchor="middle" letter-spacing="1">CHAPTER 13: NUCLEI — CONCEPTUAL ARCHITECTURE</text>
    
    <!-- Row 1 -->
    <rect x="30" y="55" width="120" height="42" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="90" y="81" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">1. Atom & Nucleus</text>
    
    <path d="M150 76 L180 76" stroke="#64748b" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <rect x="180" y="55" width="130" height="42" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="245" y="81" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">2. Protons & Neutrons</text>
    
    <path d="M310 76 L340 76" stroke="#64748b" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <rect x="340" y="55" width="130" height="42" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="405" y="81" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">3. Size (R₀A¹/³) & ρ</text>
    
    <path d="M470 76 L500 76" stroke="#64748b" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <rect x="500" y="55" width="120" height="42" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="560" y="81" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">4. Nuclear Force</text>
    
    <path d="M620 76 L650 76" stroke="#64748b" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <rect x="650" y="55" width="90" height="42" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" rx="8"/>
    <text x="695" y="81" fill="#fef3c7" font-size="12" font-weight="bold" text-anchor="middle">5. Mass Defect</text>
    
    <!-- Transition to row 2 -->
    <path d="M695 97 L695 135 L650 135" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr-amber)"/>
    
    <!-- Row 2 -->
    <rect x="500" y="115" width="150" height="42" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" rx="8"/>
    <text x="575" y="141" fill="#fef3c7" font-size="12" font-weight="bold" text-anchor="middle">6. Binding Energy (B)</text>
    
    <path d="M500 136 L470 136" stroke="#64748b" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <rect x="320" y="115" width="150" height="42" fill="#1e293b" stroke="#10b981" stroke-width="1.5" rx="8"/>
    <text x="395" y="141" fill="#d1fae5" font-size="12" font-weight="bold" text-anchor="middle">7. B/A Curve & Peak</text>
    
    <path d="M320 136 L290 136" stroke="#64748b" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <rect x="140" y="115" width="150" height="42" fill="#1e293b" stroke="#10b981" stroke-width="1.5" rx="8"/>
    <text x="215" y="141" fill="#d1fae5" font-size="12" font-weight="bold" text-anchor="middle">8. Nuclear Stability</text>
    
    <!-- Down to Branching -->
    <path d="M215 157 L215 195" stroke="#64748b" stroke-width="2"/>
    <path d="M215 195 L110 195 L110 215" stroke="#ec4899" stroke-width="2" marker-end="url(#arr-pink)"/>
    <path d="M215 195 L380 195 L380 215" stroke="#e11d48" stroke-width="2" marker-end="url(#arr-rose)"/>
    <path d="M215 195 L620 195 L620 215" stroke="#6366f1" stroke-width="2" marker-end="url(#arr-indigo)"/>
    
    <!-- Row 3: Branches -->
    <rect x="30" y="215" width="160" height="46" fill="#1e293b" stroke="#ec4899" stroke-width="1.5" rx="8"/>
    <text x="110" y="235" fill="#fbcfe8" font-size="11" font-weight="bold" text-anchor="middle">9. Radioactivity (α, β, γ)</text>
    <text x="110" y="250" fill="#94a3b8" font-size="10" text-anchor="middle">Decay Law • T₁/₂ • Activity</text>
    
    <rect x="290" y="215" width="180" height="46" fill="#1e293b" stroke="#e11d48" stroke-width="1.5" rx="8"/>
    <text x="380" y="235" fill="#fecdd3" font-size="11" font-weight="bold" text-anchor="middle">10. Nuclear Fission</text>
    <text x="380" y="250" fill="#94a3b8" font-size="10" text-anchor="middle">Heavy Nucleus Split • Reactor</text>
    
    <rect x="530" y="215" width="180" height="46" fill="#1e293b" stroke="#6366f1" stroke-width="1.5" rx="8"/>
    <text x="620" y="235" fill="#c7d2fe" font-size="11" font-weight="bold" text-anchor="middle">11. Nuclear Fusion</text>
    <text x="620" y="250" fill="#94a3b8" font-size="10" text-anchor="middle">Light Nuclei Combine • Stellar</text>
    
    <defs>
      <marker id="arr-cyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8"/>
      </marker>
      <marker id="arr-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b"/>
      </marker>
      <marker id="arr-pink" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9 z" fill="#ec4899"/>
      </marker>
      <marker id="arr-rose" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9 z" fill="#e11d48"/>
      </marker>
      <marker id="arr-indigo" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9 z" fill="#6366f1"/>
      </marker>
    </defs>
  </svg>`,

  // 2. Nucleus Structure
  nucleusStructure: `<svg viewBox="0 0 540 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="540" height="300" fill="#0f172a" rx="14"/>
    <text x="270" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">ATOMIC NUCLEUS COMPOSITION & NOTATION</text>
    
    <!-- Nuclear Core Container -->
    <circle cx="170" cy="155" r="100" fill="#1e293b" stroke="#334155" stroke-width="2" stroke-dasharray="4 4"/>
    <circle cx="170" cy="155" r="85" fill="#090d16" fill-opacity="0.6"/>
    
    <!-- Protons (Red) & Neutrons (Blue) -->
    <!-- Protons -->
    <circle cx="140" cy="130" r="15" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
    <text x="140" y="135" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">p⁺</text>
    
    <circle cx="175" cy="115" r="15" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
    <text x="175" y="120" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">p⁺</text>
    
    <circle cx="195" cy="165" r="15" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
    <text x="195" y="170" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">p⁺</text>
    
    <circle cx="145" cy="180" r="15" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
    <text x="145" y="185" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">p⁺</text>
    
    <!-- Neutrons -->
    <circle cx="165" cy="148" r="15" fill="#3b82f6" stroke="#93c5fd" stroke-width="1.5"/>
    <text x="165" y="153" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">n⁰</text>
    
    <circle cx="130" cy="155" r="15" fill="#3b82f6" stroke="#93c5fd" stroke-width="1.5"/>
    <text x="130" y="160" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">n⁰</text>
    
    <circle cx="205" cy="135" r="15" fill="#3b82f6" stroke="#93c5fd" stroke-width="1.5"/>
    <text x="205" y="140" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">n⁰</text>
    
    <circle cx="170" cy="190" r="15" fill="#3b82f6" stroke="#93c5fd" stroke-width="1.5"/>
    <text x="170" y="195" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">n⁰</text>
    
    <!-- Legend on right -->
    <rect x="305" y="55" width="215" height="215" fill="#1e293b" stroke="#334155" rx="10"/>
    <text x="412" y="80" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">STANDARD NOTATION</text>
    
    <!-- Nuclide Symbol -->
    <text x="350" y="130" fill="#f59e0b" font-size="20" font-weight="bold">A</text>
    <text x="350" y="155" fill="#ef4444" font-size="20" font-weight="bold">Z</text>
    <text x="370" y="145" fill="#38bdf8" font-size="38" font-weight="900">X</text>
    
    <!-- Callouts -->
    <text x="420" y="125" fill="#f59e0b" font-size="11" font-weight="bold">A = Mass Number</text>
    <text x="420" y="138" fill="#94a3b8" font-size="10">(Total Nucleons = Z + N)</text>
    
    <text x="420" y="155" fill="#ef4444" font-size="11" font-weight="bold">Z = Atomic Number</text>
    <text x="420" y="168" fill="#94a3b8" font-size="10">(Number of Protons)</text>
    
    <line x1="320" y1="185" x2="505" y2="185" stroke="#334155" stroke-width="1"/>
    
    <text x="412" y="205" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">Neutron Number N = A − Z</text>
    <text x="412" y="222" fill="#cbd5e1" font-size="10" text-anchor="middle">Radius R ≈ 10⁻¹⁵ m (fm scale)</text>
    <text x="412" y="240" fill="#cbd5e1" font-size="10" text-anchor="middle">Density ρ ≈ 2.3 × 10¹⁷ kg/m³</text>
  </svg>`,

  // 3. Isotopes, Isobars, Isotones Comparison
  nuclideClassification: `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="680" height="240" fill="#0f172a" rx="14"/>
    <text x="340" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">ISOTOPES, ISOBARS & ISOTONES CLASSIFICATION</text>
    
    <!-- Isotopes Card -->
    <rect x="25" y="45" width="195" height="175" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="10"/>
    <rect x="25" y="45" width="195" height="32" fill="#0284c7" rx="10 10 0 0"/>
    <text x="122" y="66" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">ISOTOPES</text>
    <text x="122" y="98" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">SAME Z (Protons)</text>
    <text x="122" y="115" fill="#f87171" font-size="11" text-anchor="middle">Different A, Different N</text>
    <line x1="40" y1="128" x2="205" y2="128" stroke="#334155" stroke-width="1"/>
    <text x="122" y="148" fill="#e2e8f0" font-size="11" font-weight="semibold" text-anchor="middle">Examples:</text>
    <text x="122" y="168" fill="#fef08a" font-size="12" font-family="monospace" text-anchor="middle">¹₁H, ²₁H (D), ³₁H (T)</text>
    <text x="122" y="188" fill="#fef08a" font-size="12" font-family="monospace" text-anchor="middle">¹²₆C, ¹³₆C, ¹⁴₆C</text>
    <text x="122" y="208" fill="#94a3b8" font-size="10" text-anchor="middle">Same chemical properties</text>
    
    <!-- Isobars Card -->
    <rect x="242" y="45" width="195" height="175" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" rx="10"/>
    <rect x="242" y="45" width="195" height="32" fill="#d97706" rx="10 10 0 0"/>
    <text x="339" y="66" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">ISOBARS</text>
    <text x="339" y="98" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">SAME A (Mass Number)</text>
    <text x="339" y="115" fill="#f87171" font-size="11" text-anchor="middle">Different Z, Different N</text>
    <line x1="257" y1="128" x2="422" y2="128" stroke="#334155" stroke-width="1"/>
    <text x="339" y="148" fill="#e2e8f0" font-size="11" font-weight="semibold" text-anchor="middle">Examples:</text>
    <text x="339" y="168" fill="#fef08a" font-size="12" font-family="monospace" text-anchor="middle">³₁H and ³₂He (A=3)</text>
    <text x="339" y="188" fill="#fef08a" font-size="12" font-family="monospace" text-anchor="middle">⁴⁰₁₈Ar, ⁴⁰₁₉K, ⁴⁰₂₀Ca</text>
    <text x="339" y="208" fill="#94a3b8" font-size="10" text-anchor="middle">Different chemical elements</text>
    
    <!-- Isotones Card -->
    <rect x="460" y="45" width="195" height="175" fill="#1e293b" stroke="#10b981" stroke-width="1.5" rx="10"/>
    <rect x="460" y="45" width="195" height="32" fill="#059669" rx="10 10 0 0"/>
    <text x="557" y="66" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">ISOTONES</text>
    <text x="557" y="98" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">SAME N (A − Z)</text>
    <text x="557" y="115" fill="#f87171" font-size="11" text-anchor="middle">Different Z, Different A</text>
    <line x1="475" y1="128" x2="640" y2="128" stroke="#334155" stroke-width="1"/>
    <text x="557" y="148" fill="#e2e8f0" font-size="11" font-weight="semibold" text-anchor="middle">Examples (N = 8):</text>
    <text x="557" y="168" fill="#fef08a" font-size="12" font-family="monospace" text-anchor="middle">¹⁴₆C (14-6=8)</text>
    <text x="557" y="188" fill="#fef08a" font-size="12" font-family="monospace" text-anchor="middle">¹⁵₇N (15-7=8), ¹⁶₈O (16-8=8)</text>
    <text x="557" y="208" fill="#94a3b8" font-size="10" text-anchor="middle">Identical neutron counts</text>
  </svg>`,

  // 4. Nuclear Radius Scaling
  nuclearRadiusScaling: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="600" height="240" fill="#0f172a" rx="14"/>
    <text x="300" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">EMPIRICAL NUCLEAR RADIUS: R = R₀ A¹/³ (R₀ ≈ 1.2 fm)</text>
    
    <!-- Proton (A=1) -->
    <circle cx="75" cy="115" r="16" fill="#3b82f6" stroke="#93c5fd" stroke-width="1.5"/>
    <text x="75" y="120" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">¹H</text>
    <text x="75" y="150" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">A = 1</text>
    <text x="75" y="166" fill="#38bdf8" font-size="10" text-anchor="middle">R ≈ 1.2 fm</text>
    
    <!-- Carbon (A=12) -->
    <circle cx="185" cy="115" r="36" fill="#8b5cf6" stroke="#c4b5fd" stroke-width="1.5"/>
    <text x="185" y="120" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">¹²C</text>
    <text x="185" y="165" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">A = 12</text>
    <text x="185" y="180" fill="#38bdf8" font-size="10" text-anchor="middle">R ≈ 2.75 fm</text>
    
    <!-- Iron (A=56) -->
    <circle cx="330" cy="115" r="60" fill="#f59e0b" stroke="#fde68a" stroke-width="1.5"/>
    <text x="330" y="120" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">⁵⁶Fe</text>
    <text x="330" y="190" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">A = 56</text>
    <text x="330" y="205" fill="#38bdf8" font-size="10" text-anchor="middle">R ≈ 4.6 fm</text>
    
    <!-- Uranium (A=238) -->
    <circle cx="495" cy="115" r="95" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
    <text x="495" y="120" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">²³⁸U</text>
    <text x="495" y="222" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">A = 238 • R ≈ 7.4 fm</text>
    
    <!-- Math Callout Top -->
    <rect x="350" y="40" width="220" height="35" fill="#1e293b" stroke="#334155" rx="6"/>
    <text x="460" y="55" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Volume V = ⁴/₃ π R³ ∝ A</text>
    <text x="460" y="68" fill="#94a3b8" font-size="9" text-anchor="middle">Volume is directly proportional to A</text>
  </svg>`,

  // 5. Nuclear Density Constancy
  nuclearDensity: `<svg viewBox="0 0 540 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="540" height="250" fill="#0f172a" rx="14"/>
    <text x="270" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">NUCLEAR DENSITY IS INDEPENDENT OF MASS NUMBER A</text>
    
    <!-- Derivation Box -->
    <rect x="25" y="45" width="490" height="145" fill="#1e293b" stroke="#334155" rx="10"/>
    
    <text x="45" y="75" fill="#f8fafc" font-size="12" font-family="monospace">1. Total Mass of Nucleus M = A × m_nucleon</text>
    <text x="45" y="100" fill="#f8fafc" font-size="12" font-family="monospace">2. Volume of Nucleus V = ⁴/₃ π R³ = ⁴/₃ π (R₀ A¹/³)³ = ⁴/₃ π R₀³ A</text>
    <text x="45" y="130" fill="#f59e0b" font-size="13" font-weight="bold" font-family="monospace">3. Density ρ = M / V = (A × m) / (⁴/₃ π R₀³ A) = m / (⁴/₃ π R₀³)</text>
    
    <line x1="40" y1="145" x2="495" y2="145" stroke="#475569" stroke-width="1"/>
    
    <text x="270" y="172" fill="#10b981" font-size="15" font-weight="900" text-anchor="middle">ρ ≈ 2.3 × 10¹⁷ kg/m³ (CONSTANT FOR ALL NUCLEI!)</text>
    
    <!-- Comparison Footnote -->
    <rect x="25" y="200" width="490" height="36" fill="#0f172a" stroke="#10b981" stroke-width="1" rx="8"/>
    <text x="270" y="222" fill="#d1fae5" font-size="11" font-weight="bold" text-anchor="middle">💡 High-Yield: Water ρ = 10³ kg/m³ ➔ Nuclear matter is ~10¹⁴ times denser!</text>
  </svg>`,

  // 6. Strong Nuclear Force vs Electrostatic
  nuclearForce: `<svg viewBox="0 0 580 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="580" height="260" fill="#0f172a" rx="14"/>
    <text x="290" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">STRONG NUCLEAR FORCE VS ELECTROSTATIC REPULSION</text>
    
    <!-- Potential / Force graph -->
    <line x1="50" y1="210" x2="530" y2="210" stroke="#64748b" stroke-width="1.5"/>
    <line x1="120" y1="35" x2="120" y2="235" stroke="#64748b" stroke-width="1.5"/>
    
    <text x="530" y="225" fill="#94a3b8" font-size="11" font-weight="bold">r (fm)</text>
    <text x="75" y="45" fill="#94a3b8" font-size="11" font-weight="bold">Potential U(r)</text>
    
    <!-- Distance markers -->
    <text x="120" y="225" fill="#94a3b8" font-size="10" text-anchor="middle">0</text>
    <line x1="180" y1="206" x2="180" y2="214" stroke="#64748b" stroke-width="1.5"/>
    <text x="180" y="225" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">0.8 fm (r₀)</text>
    
    <line x1="260" y1="206" x2="260" y2="214" stroke="#64748b" stroke-width="1.5"/>
    <text x="260" y="225" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">1.5 fm</text>
    
    <line x1="380" y1="206" x2="380" y2="214" stroke="#64748b" stroke-width="1.5"/>
    <text x="380" y="225" fill="#64748b" font-size="10" text-anchor="middle">3.0 fm (drops to 0)</text>
    
    <!-- Potential curve -->
    <path d="M135 45 C145 120 160 250 180 250 C210 250 240 225 280 216 C330 211 420 210 520 210" fill="none" stroke="#38bdf8" stroke-width="3"/>
    
    <!-- Force Zones -->
    <!-- Repulsive Zone -->
    <rect x="122" y="60" width="55" height="140" fill="#ef4444" fill-opacity="0.15"/>
    <text x="150" y="100" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">REPULSIVE</text>
    <text x="150" y="115" fill="#fca5a5" font-size="9" text-anchor="middle">r &lt; 0.8 fm</text>
    <text x="150" y="128" fill="#cbd5e1" font-size="8" text-anchor="middle">(Prevents collapse)</text>
    
    <!-- Attractive Zone -->
    <rect x="180" y="60" width="180" height="140" fill="#10b981" fill-opacity="0.15"/>
    <text x="270" y="100" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">STRONGLY ATTRACTIVE</text>
    <text x="270" y="115" fill="#6ee7b7" font-size="9" text-anchor="middle">0.8 fm &lt; r &lt; 3.0 fm</text>
    <text x="270" y="130" fill="#cbd5e1" font-size="9" text-anchor="middle">Overcomes p-p Coulomb repulsion</text>
    <text x="270" y="145" fill="#fef08a" font-size="9" text-anchor="middle">Charge Independent: F_nn ≈ F_pp ≈ F_np</text>
    
    <!-- Negligible Zone -->
    <text x="440" y="185" fill="#94a3b8" font-size="10" text-anchor="middle">Force vanishes (r &gt; 3 fm)</text>
  </svg>`,

  // 7. Mass Defect Concept
  massDefect: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="600" height="240" fill="#0f172a" rx="14"/>
    <text x="300" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">MASS DEFECT: MISSING MASS CONVERTED TO BINDING ENERGY</text>
    
    <!-- Left: Free separate nucleons -->
    <rect x="25" y="45" width="220" height="160" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="10"/>
    <text x="135" y="70" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">FREE CONSTITUENT NUCLEONS</text>
    <circle cx="85" cy="110" r="14" fill="#ef4444"/><text x="85" y="115" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">p⁺</text>
    <circle cx="125" cy="95" r="14" fill="#ef4444"/><text x="125" y="100" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">p⁺</text>
    <circle cx="165" cy="115" r="14" fill="#3b82f6"/><text x="165" y="120" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">n⁰</text>
    <circle cx="105" cy="145" r="14" fill="#3b82f6"/><text x="105" y="150" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">n⁰</text>
    <text x="135" y="185" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Total Mass = Z·m_p + N·m_n</text>
    
    <!-- Center Arrow with conversion -->
    <path d="M255 125 L325 125" stroke="#f59e0b" stroke-width="3" marker-end="url(#arr-amber)"/>
    <text x="290" y="110" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Fusing</text>
    <text x="290" y="145" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">Energy Out</text>
    <text x="290" y="158" fill="#ef4444" font-size="9" text-anchor="middle">Δm·c²</text>
    
    <!-- Right: Bound Nucleus -->
    <rect x="345" y="45" width="230" height="160" fill="#1e293b" stroke="#10b981" stroke-width="1.5" rx="10"/>
    <text x="460" y="70" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">BOUND NUCLEUS (⁴₂He)</text>
    <circle cx="460" cy="120" r="38" fill="#065f46" stroke="#34d399" stroke-width="2"/>
    <circle cx="450" cy="110" r="10" fill="#ef4444"/>
    <circle cx="470" cy="110" r="10" fill="#ef4444"/>
    <circle cx="450" cy="130" r="10" fill="#3b82f6"/>
    <circle cx="470" cy="130" r="10" fill="#3b82f6"/>
    <text x="460" y="185" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Measured Nuclear Mass = M_nuc</text>
    
    <!-- Bottom Result -->
    <text x="300" y="225" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">Mass Defect Δm = (Z·m_p + N·m_n) − M_nuc &gt; 0 (Mass is always lost!)</text>
  </svg>`,

  // 8. Binding Energy Concept
  bindingEnergy: `<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="540" height="220" fill="#0f172a" rx="14"/>
    <text x="270" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">NUCLEAR BINDING ENERGY (E = Δm · c²)</text>
    
    <rect x="25" y="45" width="490" height="155" fill="#1e293b" stroke="#334155" rx="10"/>
    
    <!-- Definition dual views -->
    <rect x="40" y="60" width="220" height="85" fill="#0f172a" stroke="#38bdf8" stroke-width="1" rx="8"/>
    <text x="150" y="80" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">VIEW 1: DISASSEMBLY</text>
    <text x="150" y="100" fill="#e2e8f0" font-size="10" text-anchor="middle">Energy required to completely</text>
    <text x="150" y="115" fill="#e2e8f0" font-size="10" text-anchor="middle">separate nucleus into free</text>
    <text x="150" y="130" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">individual nucleons at rest.</text>
    
    <rect x="280" y="60" width="220" height="85" fill="#0f172a" stroke="#10b981" stroke-width="1" rx="8"/>
    <text x="390" y="80" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">VIEW 2: ASSEMBLY</text>
    <text x="390" y="100" fill="#e2e8f0" font-size="10" text-anchor="middle">Energy released when free</text>
    <text x="390" y="115" fill="#e2e8f0" font-size="10" text-anchor="middle">protons and neutrons condense</text>
    <text x="390" y="130" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">to form the bound nucleus.</text>
    
    <!-- NEET Golden Formula -->
    <rect x="40" y="155" width="460" height="34" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" rx="6"/>
    <text x="270" y="177" fill="#fef08a" font-size="13" font-weight="900" text-anchor="middle">NEET FORMULA: Binding Energy E_b (MeV) = Δm (in u) × 931.5 MeV</text>
  </svg>`,

  // 9. Binding Energy per Nucleon Curve (Accurate NCERT graph)
  bePerNucleonCurve: `<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="680" height="340" fill="#0f172a" rx="14"/>
    <text x="340" y="26" fill="#38bdf8" font-size="15" font-weight="900" text-anchor="middle">BINDING ENERGY PER NUCLEON (E_bn) VS MASS NUMBER (A)</text>
    
    <!-- Grid and Axes -->
    <line x1="70" y1="285" x2="630" y2="285" stroke="#475569" stroke-width="2"/>
    <line x1="70" y1="45" x2="70" y2="285" stroke="#475569" stroke-width="2"/>
    
    <text x="350" y="325" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">Mass Number A ➔</text>
    <text x="25" y="165" fill="#94a3b8" font-size="12" font-weight="bold" transform="rotate(-90 25 165)" text-anchor="middle">E_bn (MeV / nucleon) ➔</text>
    
    <!-- Y ticks -->
    <text x="60" y="289" fill="#94a3b8" font-size="10" text-anchor="end">0</text>
    <line x1="65" y1="235" x2="70" y2="235" stroke="#475569"/>
    <text x="60" y="239" fill="#94a3b8" font-size="10" text-anchor="end">2</text>
    <line x1="65" y1="185" x2="70" y2="185" stroke="#475569"/>
    <text x="60" y="189" fill="#94a3b8" font-size="10" text-anchor="end">4</text>
    <line x1="65" y1="135" x2="70" y2="135" stroke="#475569"/>
    <text x="60" y="139" fill="#94a3b8" font-size="10" text-anchor="end">6</text>
    <line x1="65" y1="85" x2="70" y2="85" stroke="#475569"/>
    <text x="60" y="89" fill="#94a3b8" font-size="10" text-anchor="end">8</text>
    
    <!-- X ticks -->
    <text x="110" y="302" fill="#94a3b8" font-size="10" text-anchor="middle">20</text>
    <text x="160" y="302" fill="#94a3b8" font-size="10" text-anchor="middle">40</text>
    <text x="210" y="302" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">56 (Fe)</text>
    <text x="270" y="302" fill="#94a3b8" font-size="10" text-anchor="middle">80</text>
    <text x="370" y="302" fill="#94a3b8" font-size="10" text-anchor="middle">120</text>
    <text x="470" y="302" fill="#94a3b8" font-size="10" text-anchor="middle">160</text>
    <text x="590" y="302" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">238 (U)</text>
    
    <!-- Curve: Jagged at start, then rises to Fe-56 (8.75 MeV), then slow decay to U-238 (7.6 MeV) -->
    <path d="M75 257 
             L80 257 
             L83 110 
             L88 200 
             L92 110 
             L96 170 
             L102 98 
             L125 88 
             L210 66 
             L260 70 
             L370 78 
             L470 85 
             L590 95" 
          fill="none" stroke="#38bdf8" stroke-width="3.5"/>
          
    <!-- Shaded Stability Plateau -->
    <rect x="140" y="55" width="280" height="230" fill="#10b981" fill-opacity="0.08"/>
    <text x="280" y="50" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">MAXIMUM STABILITY REGION (30 ≤ A ≤ 170 • E_bn ≈ 8.5 MeV)</text>
    
    <!-- Peaks labelled -->
    <!-- 2H -->
    <circle cx="75" cy="257" r="3" fill="#f87171"/>
    <text x="90" y="265" fill="#f87171" font-size="9">²H (1.11)</text>
    
    <!-- 4He -->
    <circle cx="83" cy="110" r="4" fill="#34d399"/>
    <text x="65" y="105" fill="#34d399" font-size="10" font-weight="bold">⁴He (7.07)</text>
    
    <!-- 12C -->
    <circle cx="92" cy="110" r="3.5" fill="#34d399"/>
    <text x="95" y="105" fill="#34d399" font-size="9">¹²C (7.68)</text>
    
    <!-- 16O -->
    <circle cx="102" cy="98" r="3.5" fill="#34d399"/>
    <text x="108" y="93" fill="#34d399" font-size="9">¹⁶O (7.98)</text>
    
    <!-- Fe-56 (Peak) -->
    <circle cx="210" cy="66" r="6" fill="#f59e0b" stroke="#fff" stroke-width="1.5"/>
    <text x="210" y="48" fill="#f59e0b" font-size="12" font-weight="900" text-anchor="middle">⁵⁶Fe (8.75 MeV / nucleon)</text>
    
    <!-- U-238 -->
    <circle cx="590" cy="95" r="4" fill="#ef4444"/>
    <text x="590" y="85" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">²³⁸U (7.6 MeV)</text>
    
    <!-- Reaction Tendencies -->
    <!-- Fusion Arrow -->
    <path d="M85 220 L150 140" stroke="#a855f7" stroke-width="2" marker-end="url(#arr-cyan)"/>
    <text x="100" y="180" fill="#c084fc" font-size="10" font-weight="bold">FUSION</text>
    
    <!-- Fission Arrow -->
    <path d="M580 140 L450 140" stroke="#f43f5e" stroke-width="2" marker-end="url(#arr-rose)"/>
    <text x="520" y="130" fill="#fb7185" font-size="10" font-weight="bold" text-anchor="middle">FISSION</text>
  </svg>`,

  // 10. Fusion Energy Mechanism
  nuclearFusion: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="600" height="240" fill="#0f172a" rx="14"/>
    <text x="300" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">NUCLEAR FUSION: COMBINING LIGHT NUCLEI (D-T FUSION)</text>
    
    <!-- Reactants -->
    <rect x="25" y="45" width="200" height="150" fill="#1e293b" stroke="#38bdf8" rx="10"/>
    <text x="125" y="70" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">LIGHT REACTANTS</text>
    
    <!-- Deuterium -->
    <circle cx="75" cy="115" r="18" fill="#0284c7"/>
    <text x="75" y="120" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">²₁H (D)</text>
    <text x="105" y="120" fill="#f8fafc" font-size="16" font-weight="bold">+</text>
    <!-- Tritium -->
    <circle cx="145" cy="115" r="18" fill="#0284c7"/>
    <text x="145" y="120" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">³₁H (T)</text>
    
    <text x="125" y="165" fill="#fca5a5" font-size="10" text-anchor="middle">Requires T ≈ 10⁷ to 10⁸ K</text>
    <text x="125" y="180" fill="#fca5a5" font-size="9" text-anchor="middle">(To overcome Coulomb barrier)</text>
    
    <!-- Reaction Arrow -->
    <path d="M235 120 L305 120" stroke="#f59e0b" stroke-width="3" marker-end="url(#arr-amber)"/>
    <text x="270" y="105" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">FUSION</text>
    
    <!-- Products -->
    <rect x="315" y="45" width="260" height="150" fill="#1e293b" stroke="#10b981" rx="10"/>
    <text x="445" y="70" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">PRODUCTS + MASSIVE ENERGY</text>
    
    <!-- Alpha Particle -->
    <circle cx="380" cy="115" r="24" fill="#059669"/>
    <text x="380" y="120" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">⁴₂He (α)</text>
    <text x="380" y="152" fill="#d1fae5" font-size="10" text-anchor="middle">3.5 MeV</text>
    
    <text x="420" y="120" fill="#f8fafc" font-size="16" font-weight="bold">+</text>
    
    <!-- Neutron -->
    <circle cx="455" cy="115" r="14" fill="#3b82f6"/>
    <text x="455" y="119" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">¹₀n</text>
    <text x="455" y="145" fill="#93c5fd" font-size="10" text-anchor="middle">14.1 MeV</text>
    
    <text x="495" y="120" fill="#f8fafc" font-size="16" font-weight="bold">+</text>
    <text x="535" y="122" fill="#fef08a" font-size="13" font-weight="900">17.6 MeV</text>
    
    <text x="445" y="180" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Total Q = 17.6 MeV released!</text>
  </svg>`,

  // 11. Nuclear Fission
  nuclearFission: `<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="640" height="250" fill="#0f172a" rx="14"/>
    <text x="320" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">INDUCED NUCLEAR FISSION OF URANIUM-235</text>
    
    <!-- Thermal Neutron -->
    <circle cx="45" cy="125" r="10" fill="#3b82f6"/>
    <text x="45" y="129" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">¹₀n</text>
    <text x="45" y="150" fill="#93c5fd" font-size="9" text-anchor="middle">Thermal (0.025 eV)</text>
    
    <path d="M60 125 L95 125" stroke="#64748b" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <!-- U-235 Target -->
    <circle cx="140" cy="125" r="32" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
    <text x="140" y="125" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">²³⁵₉₂U</text>
    <text x="140" y="140" fill="#fff" font-size="8" text-anchor="middle">Target</text>
    
    <path d="M175 125 L210 125" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr-amber)"/>
    
    <!-- Unstable Compound Nucleus U-236 -->
    <ellipse cx="255" cy="125" rx="36" ry="26" fill="#f59e0b" stroke="#fde68a" stroke-width="1.5"/>
    <text x="255" y="122" fill="#000" font-size="10" font-weight="bold" text-anchor="middle">[²³⁶₉₂U]*</text>
    <text x="255" y="136" fill="#78350f" font-size="8" font-weight="bold" text-anchor="middle">Unstable (10⁻¹⁴ s)</text>
    
    <!-- Splitting paths -->
    <path d="M295 110 L350 80" stroke="#ef4444" stroke-width="2" marker-end="url(#arr-rose)"/>
    <path d="M295 140 L350 170" stroke="#10b981" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <!-- Fission Fragments -->
    <circle cx="400" cy="70" r="25" fill="#ec4899"/>
    <text x="400" y="74" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">¹⁴⁴₅₆Ba</text>
    <text x="400" y="87" fill="#fce7f3" font-size="8" text-anchor="middle">Fragment 1</text>
    
    <circle cx="400" cy="180" r="22" fill="#10b981"/>
    <text x="400" y="184" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">⁸⁹₃₆Kr</text>
    <text x="400" y="197" fill="#d1fae5" font-size="8" text-anchor="middle">Fragment 2</text>
    
    <!-- Prompt Neutrons -->
    <circle cx="480" cy="105" r="9" fill="#3b82f6"/><text x="480" y="109" fill="#fff" font-size="8" text-anchor="middle">n</text>
    <circle cx="495" cy="125" r="9" fill="#3b82f6"/><text x="495" y="129" fill="#fff" font-size="8" text-anchor="middle">n</text>
    <circle cx="480" cy="145" r="9" fill="#3b82f6"/><text x="480" y="149" fill="#fff" font-size="8" text-anchor="middle">n</text>
    
    <text x="560" y="115" fill="#fef08a" font-size="12" font-weight="bold">3 Fast Neutrons</text>
    <text x="560" y="135" fill="#34d399" font-size="13" font-weight="900">+ ~200 MeV</text>
    <text x="560" y="152" fill="#94a3b8" font-size="9">Energy per fission</text>
  </svg>`,

  // 12. Nuclear Chain Reaction
  chainReaction: `<svg viewBox="0 0 620 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="620" height="270" fill="#0f172a" rx="14"/>
    <text x="310" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">NUCLEAR CHAIN REACTION (MULTIPLICATION FACTOR k)</text>
    
    <!-- Generation 1 -->
    <circle cx="50" cy="135" r="16" fill="#ef4444"/>
    <text x="50" y="139" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">²³⁵U</text>
    <text x="50" y="170" fill="#94a3b8" font-size="9" text-anchor="middle">Gen 1</text>
    
    <!-- Neutrons Branching to Gen 2 -->
    <line x1="68" y1="130" x2="160" y2="85" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="68" y1="140" x2="160" y2="185" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3 3"/>
    
    <!-- Generation 2 -->
    <circle cx="180" cy="80" r="16" fill="#ef4444"/>
    <text x="180" y="84" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">²³⁵U</text>
    
    <circle cx="180" cy="190" r="16" fill="#ef4444"/>
    <text x="180" y="194" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">²³⁵U</text>
    <text x="180" y="225" fill="#94a3b8" font-size="9" text-anchor="middle">Gen 2 (2 fissions)</text>
    
    <!-- Neutrons Branching to Gen 3 -->
    <line x1="198" y1="75" x2="310" y2="50" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="198" y1="85" x2="310" y2="105" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="198" y1="185" x2="310" y2="165" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="198" y1="195" x2="310" y2="220" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3 3"/>
    
    <!-- Generation 3 -->
    <circle cx="330" cy="45" r="14" fill="#ef4444"/><circle cx="330" cy="105" r="14" fill="#ef4444"/>
    <circle cx="330" cy="165" r="14" fill="#ef4444"/><circle cx="330" cy="225" r="14" fill="#ef4444"/>
    <text x="330" y="255" fill="#94a3b8" font-size="9" text-anchor="middle">Gen 3 (4 fissions)</text>
    
    <!-- Summary Panel Right -->
    <rect x="380" y="45" width="220" height="205" fill="#1e293b" stroke="#334155" rx="8"/>
    <text x="490" y="70" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">MULTIPLICATION FACTOR k</text>
    
    <text x="395" y="98" fill="#10b981" font-size="11" font-weight="bold">k = 1 : CRITICAL</text>
    <text x="395" y="113" fill="#cbd5e1" font-size="9">Controlled chain reaction (Nuclear Reactor)</text>
    
    <text x="395" y="138" fill="#ef4444" font-size="11" font-weight="bold">k &gt; 1 : SUPERCRITICAL</text>
    <text x="395" y="153" fill="#cbd5e1" font-size="9">Uncontrolled explosive growth</text>
    
    <text x="395" y="178" fill="#64748b" font-size="11" font-weight="bold">k &lt; 1 : SUBCRITICAL</text>
    <text x="395" y="193" fill="#cbd5e1" font-size="9">Reaction dies out quickly</text>
    
    <line x1="390" y1="208" x2="590" y2="208" stroke="#334155"/>
    <text x="490" y="230" fill="#fef08a" font-size="10" font-weight="bold" text-anchor="middle">Reproduction factor = neutrons n+1 / n</text>
  </svg>`,

  // 13. Nuclear Reactor Core Schematic
  nuclearReactor: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="600" height="280" fill="#0f172a" rx="14"/>
    <text x="300" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">SCHEMATIC OF A NUCLEAR POWER REACTOR (NEET CORE ELEMENTS)</text>
    
    <!-- Thick Shielding -->
    <rect x="50" y="45" width="280" height="215" fill="#334155" stroke="#64748b" stroke-width="6" rx="12"/>
    <text x="190" y="65" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Thick Biological Shield (Concrete / Lead)</text>
    
    <!-- Reactor Core Container -->
    <rect x="75" y="75" width="230" height="165" fill="#0284c7" fill-opacity="0.2" stroke="#0284c7" rx="8"/>
    <text x="190" y="92" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Moderator (Heavy Water D₂O / Graphite)</text>
    
    <!-- Fuel Rods (U-235) -->
    <rect x="100" y="110" width="16" height="110" fill="#ef4444" rx="3"/>
    <rect x="150" y="110" width="16" height="110" fill="#ef4444" rx="3"/>
    <rect x="200" y="110" width="16" height="110" fill="#ef4444" rx="3"/>
    <rect x="250" y="110" width="16" height="110" fill="#ef4444" rx="3"/>
    
    <!-- Control Rods (Cadmium / Boron) inserted from top -->
    <rect x="125" y="80" width="12" height="90" fill="#f59e0b" stroke="#fef08a" rx="2"/>
    <rect x="175" y="80" width="12" height="90" fill="#f59e0b" stroke="#fef08a" rx="2"/>
    <rect x="225" y="80" width="12" height="90" fill="#f59e0b" stroke="#fef08a" rx="2"/>
    
    <!-- Legend / Components on right -->
    <rect x="345" y="45" width="230" height="215" fill="#1e293b" stroke="#334155" rx="10"/>
    <text x="460" y="68" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">CORE COMPONENTS & FUNCTIONS</text>
    
    <text x="355" y="93" fill="#ef4444" font-size="10" font-weight="bold">1. Fuel Rods:</text>
    <text x="355" y="106" fill="#cbd5e1" font-size="9">Enriched ²³⁵U or ²³⁹Pu (fissionable material)</text>
    
    <text x="355" y="126" fill="#38bdf8" font-size="10" font-weight="bold">2. Moderator:</text>
    <text x="355" y="139" fill="#cbd5e1" font-size="9">D₂O, Graphite, Light water (slows fast neutrons)</text>
    
    <text x="355" y="159" fill="#f59e0b" font-size="10" font-weight="bold">3. Control Rods:</text>
    <text x="355" y="172" fill="#cbd5e1" font-size="9">Cd or Boron (absorbs neutrons to control rate)</text>
    
    <text x="355" y="192" fill="#10b981" font-size="10" font-weight="bold">4. Coolant:</text>
    <text x="355" y="205" fill="#cbd5e1" font-size="9">Water / Liquid Na (extracts heat to turbines)</text>
    
    <text x="355" y="225" fill="#94a3b8" font-size="10" font-weight="bold">5. Shielding:</text>
    <text x="355" y="238" fill="#cbd5e1" font-size="9">2m concrete protects against γ and neutrons</text>
  </svg>`,

  // 14. Alpha, Beta, Gamma Deflection in Magnetic / Electric Field
  radiationDeflection: `<svg viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="600" height="270" fill="#0f172a" rx="14"/>
    <text x="300" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">BEHAVIOUR OF α, β, γ RADIATION IN AN ELECTRIC FIELD</text>
    
    <!-- Lead Block with Radioactive Source -->
    <rect x="30" y="110" width="80" height="70" fill="#334155" stroke="#64748b" stroke-width="2" rx="4"/>
    <rect x="55" y="135" width="55" height="20" fill="#0f172a"/>
    <circle cx="50" cy="145" r="8" fill="#f59e0b"/>
    <text x="50" y="148" fill="#000" font-size="7" font-weight="bold" text-anchor="middle">Ra</text>
    <text x="70" y="195" fill="#94a3b8" font-size="9" text-anchor="middle">Lead Cavity</text>
    
    <!-- Electric Field Plates -->
    <!-- Positive Top Plate -->
    <rect x="180" y="55" width="220" height="16" fill="#ef4444" rx="4"/>
    <text x="290" y="67" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">+ + + + + POSITIVE PLATE + + + + +</text>
    
    <!-- Negative Bottom Plate -->
    <rect x="180" y="215" width="220" height="16" fill="#3b82f6" rx="4"/>
    <text x="290" y="227" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">- - - - - NEGATIVE PLATE - - - - -</text>
    
    <!-- Ray Trajectories -->
    <!-- Beta Ray (Attracted to + plate, sharp curvature due to tiny mass) -->
    <path d="M110 145 Q220 145 350 75" fill="none" stroke="#38bdf8" stroke-width="3"/>
    <circle cx="350" cy="75" r="4" fill="#38bdf8"/>
    <text x="440" y="75" fill="#38bdf8" font-size="12" font-weight="bold">β⁻ (Electrons, -e)</text>
    <text x="440" y="90" fill="#94a3b8" font-size="9">Deflects strongly toward (+)</text>
    
    <!-- Gamma Ray (Undeflected) -->
    <path d="M110 145 L420 145" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="6 3"/>
    <circle cx="420" cy="145" r="4" fill="#10b981"/>
    <text x="440" y="145" fill="#10b981" font-size="12" font-weight="bold">γ (Photons, q=0)</text>
    <text x="440" y="160" fill="#94a3b8" font-size="9">Completely undeflected</text>
    
    <!-- Alpha Ray (Attracted to - plate, slight curvature due to large mass m_α = 7300 m_e) -->
    <path d="M110 145 Q240 145 370 205" fill="none" stroke="#f59e0b" stroke-width="3.5"/>
    <circle cx="370" cy="205" r="4" fill="#f59e0b"/>
    <text x="440" y="205" fill="#f59e0b" font-size="12" font-weight="bold">α (⁴₂He²⁺, +2e)</text>
    <text x="440" y="220" fill="#94a3b8" font-size="9">Deflects slightly toward (-)</text>
  </svg>`,

  // 15. Alpha Decay
  alphaDecay: `<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="540" height="220" fill="#0f172a" rx="14"/>
    <text x="270" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">ALPHA (α) DECAY SCHEME: ᴬ_Z X ➔ ᴬ⁻⁴_{Z-2} Y + ⁴₂He + Q</text>
    
    <!-- Parent Nucleus -->
    <circle cx="100" cy="115" r="45" fill="#ef4444" stroke="#fca5a5" stroke-width="2"/>
    <text x="100" y="112" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">²³⁸₉₂U</text>
    <text x="100" y="130" fill="#fee2e2" font-size="9" text-anchor="middle">Parent Nucleus</text>
    
    <!-- Decay Arrow -->
    <path d="M165 115 L235 115" stroke="#f59e0b" stroke-width="3" marker-end="url(#arr-amber)"/>
    <text x="200" y="105" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">Decay</text>
    
    <!-- Daughter Nucleus -->
    <circle cx="310" cy="115" r="38" fill="#10b981" stroke="#6ee7b7" stroke-width="2"/>
    <text x="310" y="112" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">²³⁴₉₀Th</text>
    <text x="310" y="128" fill="#d1fae5" font-size="9" text-anchor="middle">Daughter (A-4, Z-2)</text>
    
    <!-- Plus -->
    <text x="370" y="120" fill="#fff" font-size="20" font-weight="bold">+</text>
    
    <!-- Alpha Particle -->
    <circle cx="430" cy="115" r="22" fill="#3b82f6" stroke="#93c5fd" stroke-width="2"/>
    <text x="430" y="115" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">⁴₂He (α)</text>
    <text x="430" y="128" fill="#dbeafe" font-size="8" text-anchor="middle">Helium Core</text>
    
    <!-- Summary Footnote -->
    <text x="270" y="195" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Rule: Mass number decreases by 4, Atomic number decreases by 2.</text>
  </svg>`,

  // 16. Beta Decay (Beta minus and Beta plus)
  betaDecay: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="600" height="240" fill="#0f172a" rx="14"/>
    <text x="300" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">BETA DECAY (β⁻ AND β⁺ MECHANISMS)</text>
    
    <!-- Beta Minus Panel -->
    <rect x="25" y="45" width="260" height="175" fill="#1e293b" stroke="#38bdf8" rx="10"/>
    <text x="155" y="68" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">BETA-MINUS (β⁻) DECAY</text>
    <text x="155" y="92" fill="#fef08a" font-size="12" font-family="monospace" text-anchor="middle">¹₀n ➔ ¹₁p + e⁻ + ν̄_e</text>
    <text x="155" y="118" fill="#cbd5e1" font-size="11" text-anchor="middle">Neutron converts to Proton</text>
    
    <rect x="40" y="135" width="230" height="42" fill="#0f172a" rx="6"/>
    <text x="155" y="152" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">¹⁴₆C ➔ ¹⁴₇N + e⁻ + ν̄_e</text>
    <text x="155" y="168" fill="#94a3b8" font-size="9" text-anchor="middle">Emits electron + Antineutrino (ν̄_e)</text>
    
    <text x="155" y="202" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Result: Z increases by 1, A is unchanged</text>
    
    <!-- Beta Plus Panel -->
    <rect x="315" y="45" width="260" height="175" fill="#1e293b" stroke="#ec4899" rx="10"/>
    <text x="445" y="68" fill="#ec4899" font-size="12" font-weight="bold" text-anchor="middle">BETA-PLUS (β⁺) DECAY</text>
    <text x="445" y="92" fill="#fef08a" font-size="12" font-family="monospace" text-anchor="middle">¹₁p ➔ ¹₀n + e⁺ + ν_e</text>
    <text x="445" y="118" fill="#cbd5e1" font-size="11" text-anchor="middle">Proton converts to Neutron</text>
    
    <rect x="330" y="135" width="230" height="42" fill="#0f172a" rx="6"/>
    <text x="445" y="152" fill="#ec4899" font-size="11" font-weight="bold" text-anchor="middle">²²₁₁Na ➔ ²²₁₀Ne + e⁺ + ν_e</text>
    <text x="445" y="168" fill="#94a3b8" font-size="9" text-anchor="middle">Emits positron + Neutrino (ν_e)</text>
    
    <text x="445" y="202" fill="#ec4899" font-size="10" font-weight="bold" text-anchor="middle">Result: Z decreases by 1, A is unchanged</text>
  </svg>`,

  // 17. Gamma Emission (Nuclear De-excitation)
  gammaEmission: `<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="540" height="220" fill="#0f172a" rx="14"/>
    <text x="270" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">GAMMA (γ) EMISSION: NUCLEAR DE-EXCITATION</text>
    
    <!-- Energy Levels -->
    <line x1="80" y1="80" x2="320" y2="80" stroke="#f59e0b" stroke-width="3"/>
    <text x="70" y="85" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="end">Excited State [ᴬ_Z X]*</text>
    
    <line x1="80" y1="165" x2="320" y2="165" stroke="#10b981" stroke-width="3"/>
    <text x="70" y="170" fill="#10b981" font-size="12" font-weight="bold" text-anchor="end">Ground State ᴬ_Z X</text>
    
    <!-- De-excitation downward photon -->
    <path d="M200 85 L200 160" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arr-cyan)"/>
    
    <!-- Emitted Gamma Photon (Wavy line) -->
    <path d="M205 125 Q230 110 255 125 T305 125 T355 125 L400 125" fill="none" stroke="#a855f7" stroke-width="3"/>
    <circle cx="405" cy="125" r="4" fill="#a855f7"/>
    <text x="420" y="120" fill="#c084fc" font-size="13" font-weight="bold">γ Photon (hν = E₂ − E₁)</text>
    <text x="420" y="136" fill="#94a3b8" font-size="9">High frequency EM wave (MeV scale)</text>
    
    <!-- Callout Box -->
    <rect x="80" y="185" width="420" height="26" fill="#1e293b" rx="6"/>
    <text x="290" y="202" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Key: In gamma decay, neither A nor Z changes (Pure energy de-excitation).</text>
  </svg>`,

  // 18. Radioactive Decay Law Curve
  decayCurve: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="600" height="280" fill="#0f172a" rx="14"/>
    <text x="300" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">RADIOACTIVE DECAY LAW: N(t) = N₀ e^(−λt)</text>
    
    <!-- Axes -->
    <line x1="70" y1="230" x2="550" y2="230" stroke="#475569" stroke-width="2"/>
    <line x1="70" y1="45" x2="70" y2="230" stroke="#475569" stroke-width="2"/>
    
    <text x="320" y="265" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">Time t (in units of Half-Life T₁/₂) ➔</text>
    <text x="25" y="135" fill="#94a3b8" font-size="11" font-weight="bold" transform="rotate(-90 25 135)" text-anchor="middle">Undecayed Nuclei N(t) ➔</text>
    
    <!-- Exponential Curve -->
    <path d="M70 60 Q130 145 190 145 T310 187 T430 209 T550 220" fill="none" stroke="#38bdf8" stroke-width="3.5"/>
    
    <!-- Y grid marks -->
    <line x1="65" y1="60" x2="550" y2="60" stroke="#334155" stroke-dasharray="2 2"/>
    <text x="60" y="64" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="end">N₀</text>
    
    <line x1="65" y1="145" x2="190" y2="145" stroke="#334155" stroke-dasharray="2 2"/>
    <text x="60" y="149" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="end">N₀/2</text>
    
    <line x1="65" y1="187" x2="310" y2="187" stroke="#334155" stroke-dasharray="2 2"/>
    <text x="60" y="191" fill="#38bdf8" font-size="11" text-anchor="end">N₀/4</text>
    
    <line x1="65" y1="209" x2="430" y2="209" stroke="#334155" stroke-dasharray="2 2"/>
    <text x="60" y="213" fill="#38bdf8" font-size="11" text-anchor="end">N₀/8</text>
    
    <!-- X Points -->
    <!-- T1/2 -->
    <line x1="190" y1="145" x2="190" y2="235" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <circle cx="190" cy="145" r="5" fill="#f59e0b"/>
    <text x="190" y="248" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">1 T₁/₂</text>
    
    <!-- 2 T1/2 -->
    <line x1="310" y1="187" x2="310" y2="235" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <circle cx="310" cy="187" r="5" fill="#f59e0b"/>
    <text x="310" y="248" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">2 T₁/₂</text>
    
    <!-- 3 T1/2 -->
    <line x1="430" y1="209" x2="430" y2="235" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <circle cx="430" cy="209" r="5" fill="#f59e0b"/>
    <text x="430" y="248" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">3 T₁/₂</text>
  </svg>`,

  // 19. Half-Life vs Mean-Life
  halfLifeMeanLife: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="560" height="220" fill="#0f172a" rx="14"/>
    <text x="280" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">HALF-LIFE (T₁/₂) VS MEAN LIFE (τ)</text>
    
    <rect x="25" y="45" width="245" height="155" fill="#1e293b" stroke="#38bdf8" rx="10"/>
    <text x="147" y="70" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">HALF-LIFE (T₁/₂)</text>
    <text x="147" y="95" fill="#fef08a" font-size="13" font-family="monospace" text-anchor="middle">T₁/₂ = ln(2) / λ ≈ 0.693 / λ</text>
    <line x1="40" y1="110" x2="255" y2="110" stroke="#334155"/>
    <text x="147" y="130" fill="#cbd5e1" font-size="10" text-anchor="middle">Time for 50% of nuclei to decay.</text>
    <text x="147" y="148" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Remaining = 50% (N₀/2)</text>
    <text x="147" y="165" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">Decayed = 50%</text>
    <text x="147" y="185" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">T₁/₂ = 0.693 τ (T₁/₂ &lt; τ)</text>
    
    <rect x="290" y="45" width="245" height="155" fill="#1e293b" stroke="#10b981" rx="10"/>
    <text x="412" y="70" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">MEAN LIFE (τ)</text>
    <text x="412" y="95" fill="#fef08a" font-size="13" font-family="monospace" text-anchor="middle">τ = 1 / λ = 1.44 T₁/₂</text>
    <line x1="305" y1="110" x2="520" y2="110" stroke="#334155"/>
    <text x="412" y="130" fill="#cbd5e1" font-size="10" text-anchor="middle">Time for N to fall to N₀/e.</text>
    <text x="412" y="148" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Remaining = 36.8% (N₀/e)</text>
    <text x="412" y="165" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">Decayed = 63.2%</text>
    <text x="412" y="185" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">τ &gt; T₁/₂ always!</text>
  </svg>`,

  // 20. Fission vs Fusion Comparison Summary Diagram
  fissionVsFusion: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="640" height="260" fill="#0f172a" rx="14"/>
    <text x="320" y="26" fill="#38bdf8" font-size="15" font-weight="900" text-anchor="middle">SUMMARY: NUCLEAR FISSION VS NUCLEAR FUSION</text>
    
    <!-- Left: Fission -->
    <rect x="25" y="45" width="285" height="195" fill="#1e293b" stroke="#e11d48" stroke-width="1.5" rx="10"/>
    <text x="167" y="70" fill="#f43f5e" font-size="13" font-weight="bold" text-anchor="middle">NUCLEAR FISSION</text>
    
    <text x="40" y="95" fill="#cbd5e1" font-size="10">🔹 <b class="text-white">Process:</b> Heavy nucleus splits into 2 middle fragments</text>
    <text x="40" y="115" fill="#cbd5e1" font-size="10">🔹 <b class="text-white">Fuel:</b> ²³⁵U, ²³⁹Pu (Heavy, A ≈ 240)</text>
    <text x="40" y="135" fill="#cbd5e1" font-size="10">🔹 <b class="text-white">Condition:</b> Thermal slow neutrons at room temp</text>
    <text x="40" y="155" fill="#cbd5e1" font-size="10">🔹 <b class="text-white">Energy / Reaction:</b> ~200 MeV per event</text>
    <text x="40" y="175" fill="#cbd5e1" font-size="10">🔹 <b class="text-white">Energy / Nucleon:</b> ~0.85 MeV / nucleon</text>
    <text x="40" y="195" fill="#cbd5e1" font-size="10">🔹 <b class="text-white">By-products:</b> Highly radioactive nuclear waste</text>
    <text x="40" y="215" fill="#cbd5e1" font-size="10">🔹 <b class="text-white">Application:</b> Nuclear Power Reactors</text>
    
    <!-- Right: Fusion -->
    <rect x="330" y="45" width="285" height="195" fill="#1e293b" stroke="#6366f1" stroke-width="1.5" rx="10"/>
    <text x="472" y="70" fill="#818cf8" font-size="13" font-weight="bold" text-anchor="middle">NUCLEAR FUSION</text>
    
    <text x="345" y="95" fill="#cbd5e1" font-size="10">🔸 <b class="text-white">Process:</b> Light nuclei combine to form heavier nucleus</text>
    <text x="345" y="115" fill="#cbd5e1" font-size="10">🔸 <b class="text-white">Fuel:</b> ¹H, ²H (D), ³H (T) (Light, A ≤ 4)</text>
    <text x="345" y="135" fill="#cbd5e1" font-size="10">🔸 <b class="text-white">Condition:</b> Extremely high T ~ 10⁷-10⁸ K & P</text>
    <text x="345" y="155" fill="#cbd5e1" font-size="10">🔸 <b class="text-white">Energy / Reaction:</b> ~17.6 MeV (D-T fusion)</text>
    <text x="345" y="175" fill="#fef08a" font-size="10">🔸 <b class="text-amber-300 font-bold">Energy / Nucleon:</b> ~3.52 MeV/n (4× FISSION!)</text>
    <text x="345" y="195" fill="#cbd5e1" font-size="10">🔸 <b class="text-white">By-products:</b> Non-radioactive (⁴He) clean energy</text>
    <text x="345" y="215" fill="#cbd5e1" font-size="10">🔸 <b class="text-white">Application:</b> Sun & Stellar energy, Tokamak</text>
  </svg>`
};
