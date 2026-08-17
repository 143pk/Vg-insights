// High-resolution, dark/light theme compatible SVG Diagrams for Chapter 19: Haloalkanes and Haloarenes

export const HALOALKANES_DIAGRAMS = {
  // 1. SN1 Reaction Coordinate & Mechanism Profile
  sn1ReactionCoordinateMechanism: `<svg viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
  <defs>
    <linearGradient id="sn1Bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="tsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f43f5e"/>
      <stop offset="100%" stop-color="#be123c"/>
    </linearGradient>
    <linearGradient id="cplusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
    <marker id="sn1Arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="800" height="480" fill="url(#sn1Bg)" rx="16" stroke="#334155" stroke-width="2"/>

  <!-- Title Badge -->
  <rect x="24" y="20" width="752" height="40" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
  <text x="400" y="45" fill="#e0e7ff" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">
    S_N1 MECHANISM: TWO-STEP ENERGY PROFILE &amp; STEREOCHEMICAL OUTCOME
  </text>

  <!-- Energy Coordinate Axes -->
  <line x1="80" y1="410" x2="740" y2="410" stroke="#64748b" stroke-width="2"/>
  <line x1="80" y1="410" x2="80" y2="80" stroke="#64748b" stroke-width="2"/>
  <text x="730" y="435" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="end">Reaction Coordinate →</text>
  <text x="65" y="90" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" font-weight="600" transform="rotate(-90 65 90)" text-anchor="end">Potential Energy (E) ↑</text>

  <!-- Potential Energy Curve (2 peaks, 1 valley) -->
  <!-- Start: (100, 320) -> TS1: (260, 130) -> Intermediate C+: (400, 250) -> TS2: (540, 180) -> Products: (700, 350) -->
  <path d="M 100 320 Q 180 320 220 200 Q 260 120 300 200 Q 340 250 400 250 Q 460 250 500 200 Q 540 170 580 230 Q 640 350 710 350" 
        fill="none" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>

  <!-- Energy Labels -->
  <!-- Reactant: 3° Alkyl Halide -->
  <circle cx="100" cy="320" r="6" fill="#38bdf8"/>
  <rect x="50" y="335" width="100" height="42" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="100" y="352" fill="#bae6fd" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">(CH₃)₃C–Br</text>
  <text x="100" y="368" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Reactant (sp³)</text>

  <!-- TS 1: [R···Br]‡ (RDS / Highest Barrier) -->
  <circle cx="260" cy="130" r="6" fill="#f43f5e"/>
  <rect x="195" y="75" width="130" height="46" rx="6" fill="#4c0519" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="260" y="94" fill="#fecdd3" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">[ (CH₃)₃C···Br ]‡</text>
  <text x="260" y="112" fill="#fb7185" font-family="system-ui, sans-serif" font-size="10" font-weight="600" text-anchor="middle">TS₁ (Rate Determining)</text>

  <!-- Activation Energy 1 (Ea1) Indicator -->
  <line x1="100" y1="320" x2="260" y2="320" stroke="#475569" stroke-dasharray="3 3"/>
  <line x1="260" y1="320" x2="260" y2="135" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2 2"/>
  <text x="270" y="230" fill="#f87171" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Ea₁ (Slow)</text>

  <!-- Intermediate: Planar 3° Carbocation -->
  <circle cx="400" cy="250" r="6" fill="#0284c7"/>
  <rect x="335" y="265" width="130" height="52" rx="6" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="400" y="285" fill="#e0f2fe" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">(CH₃)₃C⁺ + Br⁻</text>
  <text x="400" y="303" fill="#7dd3fc" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Planar Interm. (sp², 120°)</text>

  <!-- TS 2: [R···OH]‡ -->
  <circle cx="540" cy="180" r="6" fill="#f43f5e"/>
  <rect x="480" y="125" width="120" height="46" rx="6" fill="#4c0519" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="540" y="144" fill="#fecdd3" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">[ (CH₃)₃C···OH ]‡</text>
  <text x="540" y="162" fill="#fb7185" font-family="system-ui, sans-serif" font-size="10" font-weight="600" text-anchor="middle">TS₂ (Fast Attack)</text>

  <!-- Products: Racemic Mixture / (CH3)3C-OH -->
  <circle cx="700" cy="350" r="6" fill="#10b981"/>
  <rect x="645" y="365" width="110" height="42" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
  <text x="700" y="382" fill="#a7f3d0" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">(CH₃)₃C–OH</text>
  <text x="700" y="398" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Racemisation</text>

  <!-- Stereochemical Callout Box -->
  <rect x="490" y="270" width="280" height="60" rx="8" fill="#1e293b" stroke="#e2e8f0" stroke-width="1" stroke-opacity="0.3"/>
  <text x="500" y="290" fill="#facc15" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">⚡ Stereochemistry in S_N1:</text>
  <text x="500" y="307" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">Planar carbocation allows Nu⁻ attack from both</text>
  <text x="500" y="321" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">front &amp; back lobes → <tspan fill="#38bdf8" font-weight="bold">Racemisation (with partial inversion)</tspan></text>
</svg>`,

  // 2. SN2 Walden Inversion & Concerted Transition State
  sn2WaldenInversionMechanism: `<svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
  <defs>
    <linearGradient id="sn2Bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
    <marker id="arrowSn2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#10b981"/>
    </marker>
    <marker id="redArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#ef4444"/>
    </marker>
  </defs>

  <rect width="800" height="460" fill="url(#sn2Bg)" rx="16" stroke="#374151" stroke-width="2"/>

  <!-- Title Badge -->
  <rect x="24" y="20" width="752" height="40" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
  <text x="400" y="45" fill="#d1fae5" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle">
    S_N2 MECHANISM: 1-STEP BACKSIDE ATTACK &amp; WALDEN INVERSION (UMBRELLA EFFECT)
  </text>

  <!-- Left: Reactant Substrate + Approaching Nucleophile -->
  <g transform="translate(40, 100)">
    <rect width="210" height="230" rx="12" fill="#1f2937" stroke="#4b5563" stroke-width="1.5"/>
    <text x="105" y="30" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">1. Backside Nucleophile Attack</text>
    
    <!-- Incoming OH- -->
    <circle cx="35" cy="115" r="18" fill="#047857"/>
    <text x="35" y="120" fill="#ecfdf5" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">HO⁻</text>

    <!-- Curved Attack Arrow -->
    <path d="M 55 115 Q 80 115 95 115" fill="none" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowSn2)"/>

    <!-- 1° Carbon Center -->
    <circle cx="120" cy="115" r="16" fill="#3b82f6"/>
    <text x="120" y="120" fill="#ffffff" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">C</text>

    <!-- H atoms -->
    <circle cx="120" cy="70" r="10" fill="#64748b"/>
    <text x="120" y="74" fill="#ffffff" font-family="monospace" font-size="10" text-anchor="middle">H</text>
    <line x1="120" y1="99" x2="120" y2="80" stroke="#94a3b8" stroke-width="2"/>

    <circle cx="105" cy="160" r="10" fill="#64748b"/>
    <text x="105" y="164" fill="#ffffff" font-family="monospace" font-size="10" text-anchor="middle">H</text>
    <line x1="113" y1="129" x2="108" y2="150" stroke="#94a3b8" stroke-width="2"/>

    <circle cx="140" cy="155" r="10" fill="#64748b"/>
    <text x="140" y="159" fill="#ffffff" font-family="monospace" font-size="10" text-anchor="middle">R</text>
    <line x1="128" y1="129" x2="137" y2="145" stroke="#94a3b8" stroke-width="2"/>

    <!-- Leaving group Br -->
    <line x1="136" y1="115" x2="175" y2="115" stroke="#ef4444" stroke-width="2.5"/>
    <circle cx="185" cy="115" r="14" fill="#991b1b"/>
    <text x="185" y="120" fill="#fecaca" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">Br</text>

    <text x="105" y="205" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">180° Backside Attack (No Steric Block)</text>
  </g>

  <!-- Forward Reaction Arrow -->
  <path d="M 265 215 L 305 215" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrowSn2)"/>

  <!-- Center: Pentacoordinate Transition State [HO···C···Br]‡ -->
  <g transform="translate(295, 80)">
    <rect width="210" height="265" rx="12" fill="#311018" stroke="#f43f5e" stroke-width="2"/>
    <text x="105" y="30" fill="#fda4af" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">2. Transition State [‡]</text>
    
    <!-- Left partial bond: HO...C -->
    <circle cx="40" cy="130" r="16" fill="#047857"/>
    <text x="40" y="135" fill="#ecfdf5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">δ⁻OH</text>

    <line x1="56" y1="130" x2="94" y2="130" stroke="#10b981" stroke-width="2.5" stroke-dasharray="3 3"/>

    <!-- Central Carbon (sp2 hybridized in TS plane) -->
    <circle cx="105" cy="130" r="14" fill="#3b82f6"/>
    <text x="105" y="135" fill="#ffffff" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">C</text>

    <!-- Planar 3 equatorial bonds (120°) -->
    <circle cx="105" cy="80" r="10" fill="#64748b"/>
    <text x="105" y="84" fill="#ffffff" font-family="monospace" font-size="10" text-anchor="middle">H</text>
    <line x1="105" y1="116" x2="105" y2="90" stroke="#94a3b8" stroke-width="2"/>

    <circle cx="85" cy="180" r="10" fill="#64748b"/>
    <text x="85" y="184" fill="#ffffff" font-family="monospace" font-size="10" text-anchor="middle">H</text>
    <line x1="97" y1="143" x2="88" y2="170" stroke="#94a3b8" stroke-width="2"/>

    <circle cx="125" cy="180" r="10" fill="#64748b"/>
    <text x="125" y="184" fill="#ffffff" font-family="monospace" font-size="10" text-anchor="middle">R</text>
    <line x1="113" y1="143" x2="122" y2="170" stroke="#94a3b8" stroke-width="2"/>

    <!-- Right partial bond: C...Br -->
    <line x1="119" y1="130" x2="154" y2="130" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="3 3"/>
    <circle cx="170" cy="130" r="16" fill="#991b1b"/>
    <text x="170" y="135" fill="#fecaca" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">δ⁻Br</text>

    <text x="105" y="225" fill="#fb7185" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Trigonal Bipyramidal Geometry</text>
    <text x="105" y="245" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Concerted: Bond Breaking &amp; Making</text>
  </g>

  <!-- Forward Reaction Arrow -->
  <path d="M 520 215 L 560 215" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrowSn2)"/>

  <!-- Right: Inverted Product + Free Halide -->
  <g transform="translate(550, 100)">
    <rect width="210" height="230" rx="12" fill="#1f2937" stroke="#4b5563" stroke-width="1.5"/>
    <text x="105" y="30" fill="#86efac" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">3. 100% Inverted Product</text>

    <!-- Attached OH on LEFT -->
    <circle cx="35" cy="115" r="16" fill="#047857"/>
    <text x="35" y="120" fill="#ecfdf5" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">HO</text>
    <line x1="51" y1="115" x2="84" y2="115" stroke="#10b981" stroke-width="2.5"/>

    <!-- Central Carbon -->
    <circle cx="100" cy="115" r="16" fill="#3b82f6"/>
    <text x="100" y="120" fill="#ffffff" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">C</text>

    <!-- Inverted umbrella groups pointing RIGHT -->
    <circle cx="100" cy="70" r="10" fill="#64748b"/>
    <text x="100" y="74" fill="#ffffff" font-family="monospace" font-size="10" text-anchor="middle">H</text>
    <line x1="100" y1="99" x2="100" y2="80" stroke="#94a3b8" stroke-width="2"/>

    <circle cx="125" cy="155" r="10" fill="#64748b"/>
    <text x="125" y="159" fill="#ffffff" font-family="monospace" font-size="10" text-anchor="middle">H</text>
    <line x1="109" y1="128" x2="120" y2="145" stroke="#94a3b8" stroke-width="2"/>

    <circle cx="150" cy="115" r="10" fill="#64748b"/>
    <text x="150" y="119" fill="#ffffff" font-family="monospace" font-size="10" text-anchor="middle">R</text>
    <line x1="116" y1="115" x2="140" y2="115" stroke="#94a3b8" stroke-width="2"/>

    <!-- Free Leaving Group -->
    <circle cx="185" cy="180" r="14" fill="#991b1b"/>
    <text x="185" y="185" fill="#fecaca" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">Br⁻</text>

    <text x="105" y="205" fill="#86efac" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Walden Inversion</text>
  </g>

  <!-- Bottom Summary Strip -->
  <rect x="24" y="375" width="752" height="65" rx="8" fill="#111827" stroke="#374151" stroke-width="1"/>
  <text x="40" y="398" fill="#fbbf24" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">⚡ High-Yield NEET Rule for S_N2 Reactivity:</text>
  <text x="40" y="420" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="12">
    Substrate Order: <tspan fill="#38bdf8" font-weight="bold">CH₃–X &gt; 1° &gt; 2° &gt;&gt; 3°</tspan> (Steric Hindrance is decisive!) | Rate = <tspan fill="#a7f3d0" font-family="monospace">k [R–X] [Nu⁻]</tspan> | Solvent: <tspan fill="#f43f5e" font-weight="bold">Polar Aprotic</tspan> (DMSO, DMF, Acetone)
  </text>
</svg>`,

  // 3. Elimination vs Substitution Pathways (Saytzeff Rule)
  eliminationVsSubstitutionCoordinate: `<svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
  <defs>
    <linearGradient id="elimBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>

  <rect width="800" height="460" fill="url(#elimBg)" rx="16" stroke="#334155" stroke-width="2"/>

  <!-- Title -->
  <rect x="24" y="20" width="752" height="40" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
  <text x="400" y="45" fill="#e0e7ff" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle">
    COMPETITION: NUCLEOPHILIC SUBSTITUTION vs. β-ELIMINATION (SAYTZEFF RULE)
  </text>

  <!-- Center Starting Reactant: 2-Bromobutane -->
  <rect x="280" y="80" width="240" height="90" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="400" y="105" fill="#7dd3fc" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">SUBSTRATE (2-Bromobutane)</text>
  <text x="400" y="130" fill="#ffffff" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">CH₃–CH₂–CH(Br)–CH₃</text>
  <text x="400" y="152" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Secondary (2°) Alkyl Halide with 2 distinct β-carbons</text>

  <!-- Left Path: Aqueous KOH (Substitution) -->
  <path d="M 330 170 L 180 230" fill="none" stroke="#38bdf8" stroke-width="3"/>
  <rect x="60" y="230" width="280" height="150" rx="10" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5"/>
  <rect x="75" y="240" width="250" height="25" rx="5" fill="#0284c7"/>
  <text x="200" y="257" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">REAGENT: Aqueous KOH (H₂O + OH⁻)</text>
  
  <text x="75" y="285" fill="#bae6fd" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Reaction Type:</text>
  <text x="170" y="285" fill="#e0f2fe" font-family="system-ui, sans-serif" font-size="11">Nucleophilic Substitution (S_N)</text>
  
  <text x="75" y="305" fill="#bae6fd" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Active Species:</text>
  <text x="170" y="305" fill="#e0f2fe" font-family="system-ui, sans-serif" font-size="11">Hydrated OH⁻ (Good Nu⁻, weak base)</text>

  <text x="75" y="330" fill="#facc15" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">Major Product:</text>
  <text x="75" y="355" fill="#ffffff" font-family="monospace" font-size="13" font-weight="bold">CH₃–CH₂–CH(OH)–CH₃ (Butan-2-ol)</text>

  <!-- Right Path: Alcoholic KOH (Elimination) -->
  <path d="M 470 170 L 620 230" fill="none" stroke="#f43f5e" stroke-width="3"/>
  <rect x="460" y="230" width="280" height="150" rx="10" fill="#4c0519" stroke="#f43f5e" stroke-width="1.5"/>
  <rect x="475" y="240" width="250" height="25" rx="5" fill="#be123c"/>
  <text x="600" y="257" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">REAGENT: Alcoholic KOH (C₂H₅O⁻ + Δ)</text>
  
  <text x="475" y="285" fill="#fecdd3" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Reaction Type:</text>
  <text x="570" y="285" fill="#ffe4e6" font-family="system-ui, sans-serif" font-size="11">β-Dehydrohalogenation (E2)</text>
  
  <text x="475" y="305" fill="#fecdd3" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Active Species:</text>
  <text x="570" y="305" fill="#ffe4e6" font-family="system-ui, sans-serif" font-size="11">Ethoxide ion C₂H₅O⁻ (Strong Base)</text>

  <text x="475" y="330" fill="#facc15" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">Saytzeff Major (80%):</text>
  <text x="475" y="348" fill="#ffffff" font-family="monospace" font-size="12" font-weight="bold">CH₃–CH=CH–CH₃ (But-2-ene, stable)</text>
  <text x="475" y="365" fill="#cbd5e1" font-family="monospace" font-size="10">Minor (20%): CH₃–CH₂–CH=CH₂ (But-1-ene)</text>

  <!-- Bottom Distinction Rule -->
  <rect x="24" y="395" width="752" height="50" rx="8" fill="#111827" stroke="#475569" stroke-width="1"/>
  <text x="400" y="415" fill="#facc15" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
    🔥 NEET RULE: Aq. KOH = SUBSTITION (Alcohol) vs Alc. KOH = ELIMINATION (Alkene)
  </text>
  <text x="400" y="433" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">
    Saytzeff Rule: Hydrogen is eliminated from the β-carbon with fewer hydrogen atoms → More substituted alkene is major.
  </text>
</svg>`,

  // 4. Haloarenes Resonance Structures & Low Reactivity
  haloarenesResonanceStability: `<svg viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
  <defs>
    <linearGradient id="arylBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>

  <rect width="800" height="480" fill="url(#arylBg)" rx="16" stroke="#334155" stroke-width="2"/>

  <!-- Title -->
  <rect x="24" y="16" width="752" height="40" rx="8" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5"/>
  <text x="400" y="41" fill="#e0e7ff" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle">
    CHLOROBENZENE RESONANCE STRUCTURES &amp; INERTNESS TO NUCLEOPHILIC SUBSTITUTION
  </text>

  <!-- 4 Resonance Structures in a Row -->
  <!-- Structure I -->
  <g transform="translate(40, 75)">
    <rect width="155" height="180" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1"/>
    <text x="77" y="24" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Structure I</text>
    
    <!-- Benzene Ring + Cl -->
    <polygon points="77,55 105,71 105,103 77,119 49,103 49,71" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <line x1="77" y1="55" x2="77" y2="38" stroke="#38bdf8" stroke-width="2"/>
    <text x="77" y="36" fill="#facc15" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">:Cl̈:</text>
    
    <!-- Double bonds in ring -->
    <line x1="100" y1="74" x2="100" y2="100" stroke="#38bdf8" stroke-width="2"/>
    <line x1="54" y1="74" x2="54" y2="100" stroke="#38bdf8" stroke-width="2"/>
    <line x1="74" y1="114" x2="52" y2="101" stroke="#38bdf8" stroke-width="2"/>
    
    <text x="77" y="150" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Neutral State</text>
    <text x="77" y="165" fill="#64748b" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Lone pair on Cl</text>
  </g>

  <!-- Double headed arrow -->
  <text x="210" y="170" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="18" font-weight="bold">↔</text>

  <!-- Structure II: Ortho- -->
  <g transform="translate(225, 75)">
    <rect width="155" height="180" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="77" y="24" fill="#fda4af" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Structure II (ortho⁻)</text>
    
    <!-- Benzene Ring + Cl+ with double bond -->
    <polygon points="77,55 105,71 105,103 77,119 49,103 49,71" fill="none" stroke="#f43f5e" stroke-width="2"/>
    <line x1="75" y1="55" x2="75" y2="38" stroke="#f43f5e" stroke-width="2"/>
    <line x1="79" y1="55" x2="79" y2="38" stroke="#f43f5e" stroke-width="2"/>
    <text x="77" y="36" fill="#f43f5e" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">=Cl⁺</text>
    
    <!-- Negative charge at ortho -->
    <circle cx="50" cy="71" r="7" fill="#ef4444"/>
    <text x="50" y="75" fill="#ffffff" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">⊖</text>

    <text x="77" y="150" fill="#fb7185" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">C=Cl Double Bond</text>
    <text x="77" y="165" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Ortho electron density ↑</text>
  </g>

  <!-- Double headed arrow -->
  <text x="395" y="170" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="18" font-weight="bold">↔</text>

  <!-- Structure III: Para- -->
  <g transform="translate(410, 75)">
    <rect width="155" height="180" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="77" y="24" fill="#fda4af" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Structure III (para⁻)</text>
    
    <polygon points="77,55 105,71 105,103 77,119 49,103 49,71" fill="none" stroke="#f43f5e" stroke-width="2"/>
    <line x1="75" y1="55" x2="75" y2="38" stroke="#f43f5e" stroke-width="2"/>
    <line x1="79" y1="55" x2="79" y2="38" stroke="#f43f5e" stroke-width="2"/>
    <text x="77" y="36" fill="#f43f5e" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">=Cl⁺</text>
    
    <!-- Negative charge at para -->
    <circle cx="77" cy="119" r="7" fill="#ef4444"/>
    <text x="77" y="123" fill="#ffffff" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">⊖</text>

    <text x="77" y="150" fill="#fb7185" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">C=Cl Double Bond</text>
    <text x="77" y="165" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Para electron density ↑</text>
  </g>

  <!-- Double headed arrow -->
  <text x="580" y="170" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="18" font-weight="bold">↔</text>

  <!-- Structure IV: Ortho'- -->
  <g transform="translate(595, 75)">
    <rect width="155" height="180" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="77" y="24" fill="#fda4af" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Structure IV (ortho'⁻)</text>
    
    <polygon points="77,55 105,71 105,103 77,119 49,103 49,71" fill="none" stroke="#f43f5e" stroke-width="2"/>
    <line x1="75" y1="55" x2="75" y2="38" stroke="#f43f5e" stroke-width="2"/>
    <line x1="79" y1="55" x2="79" y2="38" stroke="#f43f5e" stroke-width="2"/>
    <text x="77" y="36" fill="#f43f5e" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">=Cl⁺</text>
    
    <!-- Negative charge at other ortho -->
    <circle cx="105" cy="71" r="7" fill="#ef4444"/>
    <text x="105" y="75" fill="#ffffff" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">⊖</text>

    <text x="77" y="150" fill="#fb7185" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">C=Cl Double Bond</text>
    <text x="77" y="165" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Ortho' electron density ↑</text>
  </g>

  <!-- 4 Fundamental NCERT Reasons for Low S_N Reactivity -->
  <g transform="translate(24, 270)">
    <rect width="752" height="195" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
    <text x="376" y="25" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">
      4 MANDATORY NCERT REASONS: WHY HALOARENES ARE EXTREMELY LESS REACTIVE TO NUCLEOPHILES
    </text>

    <!-- Point 1 -->
    <rect x="15" y="38" width="350" height="68" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1"/>
    <text x="25" y="56" fill="#facc15" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">1. Partial Double Bond Character:</text>
    <text x="25" y="74" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">Resonance delocalisation imparts partial double bond</text>
    <text x="25" y="90" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">character to C–Cl bond (shorter: 169 pm vs 177 pm in R-Cl).</text>

    <!-- Point 2 -->
    <rect x="385" y="38" width="350" height="68" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1"/>
    <text x="395" y="56" fill="#facc15" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">2. Difference in Hybridisation of Carbon:</text>
    <text x="395" y="74" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">In haloarene, C is sp² (33% s-character, holds e⁻ tightly);</text>
    <text x="395" y="90" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">In haloalkane, C is sp³ (25% s-character, less electronegative).</text>

    <!-- Point 3 -->
    <rect x="15" y="115" width="350" height="68" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1"/>
    <text x="25" y="133" fill="#facc15" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">3. Instability of Phenyl Cation:</text>
    <text x="25" y="151" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">Self-ionisation to form C₆H₅⁺ is precluded because sp²</text>
    <text x="25" y="167" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">phenyl cation is highly unstable → <tspan fill="#ef4444" font-weight="bold">S_N1 impossible</tspan>.</text>

    <!-- Point 4 -->
    <rect x="385" y="115" width="350" height="68" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1"/>
    <text x="395" y="133" fill="#facc15" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">4. Electrostatic π-Electron Repulsion:</text>
    <text x="395" y="151" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">Electron-rich aromatic π-cloud repels approaching electron-rich</text>
    <text x="395" y="167" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">nucleophiles from backside → <tspan fill="#ef4444" font-weight="bold">S_N2 impossible</tspan>.</text>
  </g>
</svg>`,

  // 5. Haloalkanes Master Reaction Roadmap
  haloalkanesMasterReactionMap: `<svg viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
  <defs>
    <linearGradient id="mapBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <marker id="mapArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <rect width="800" height="520" fill="url(#mapBg)" rx="16" stroke="#1e293b" stroke-width="2"/>

  <!-- Title -->
  <rect x="24" y="16" width="752" height="38" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
  <text x="400" y="41" fill="#e0e7ff" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle">
    MASTER REACTION ROADMAP: ALKYL HALIDE (R–X) SYNTHETIC TRANSITIONS
  </text>

  <!-- Central Hub: R-X -->
  <circle cx="400" cy="260" r="48" fill="#0284c7" stroke="#38bdf8" stroke-width="3"/>
  <text x="400" y="258" fill="#ffffff" font-family="monospace" font-size="18" font-weight="bold" text-anchor="middle">R–X</text>
  <text x="400" y="278" fill="#e0f2fe" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Alkyl Halide</text>

  <!-- 1. Top: aq. KOH -> ROH -->
  <line x1="400" y1="212" x2="400" y2="135" stroke="#38bdf8" stroke-width="2" marker-end="url(#mapArrow)"/>
  <rect x="300" y="75" width="200" height="55" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="400" y="95" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Reagent: aq. KOH / H₂O</text>
  <text x="400" y="118" fill="#34d399" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">R–OH (Alcohol)</text>

  <!-- 2. Top-Right: KCN -> R-CN -->
  <line x1="438" y1="230" x2="570" y2="135" stroke="#38bdf8" stroke-width="2" marker-end="url(#mapArrow)"/>
  <rect x="560" y="85" width="210" height="55" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="665" y="103" fill="#bae6fd" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Reagent: KCN (Ionic / C-attack)</text>
  <text x="665" y="126" fill="#38bdf8" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">R–CN (Alkyl Cyanide)</text>

  <!-- 3. Right: AgCN -> R-NC -->
  <line x1="448" y1="260" x2="575" y2="230" stroke="#38bdf8" stroke-width="2" marker-end="url(#mapArrow)"/>
  <rect x="560" y="195" width="210" height="55" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="665" y="213" fill="#fda4af" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Reagent: AgCN (Covalent / N-attack)</text>
  <text x="665" y="236" fill="#fb7185" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">R–NC (Isocyanide)</text>

  <!-- 4. Bottom-Right: NH3 -> R-NH2 -->
  <line x1="438" y1="290" x2="570" y2="340" stroke="#38bdf8" stroke-width="2" marker-end="url(#mapArrow)"/>
  <rect x="560" y="305" width="210" height="55" rx="8" fill="#1e293b" stroke="#c084fc" stroke-width="1.5"/>
  <text x="665" y="323" fill="#e9d5ff" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Reagent: alc. NH₃ (excess)</text>
  <text x="665" y="346" fill="#c084fc" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">R–NH₂ (1° Amine)</text>

  <!-- 5. Bottom: Na / dry ether -> R-R (Wurtz) -->
  <line x1="400" y1="308" x2="400" y2="395" stroke="#38bdf8" stroke-width="2" marker-end="url(#mapArrow)"/>
  <rect x="290" y="405" width="220" height="55" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="400" y="423" fill="#fde68a" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Reagent: 2Na / Dry Ether (Wurtz)</text>
  <text x="400" y="446" fill="#facc15" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">R–R (Higher Alkane)</text>

  <!-- 6. Bottom-Left: Mg / dry ether -> RMgX (Grignard) -->
  <line x1="362" y1="290" x2="230" y2="340" stroke="#38bdf8" stroke-width="2" marker-end="url(#mapArrow)"/>
  <rect x="30" y="305" width="210" height="55" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="135" y="323" fill="#fed7aa" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Reagent: Mg / Dry Ether</text>
  <text x="135" y="346" fill="#fb923c" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">R–MgX (Grignard Reagent)</text>

  <!-- 7. Left: R'ONa -> R-O-R' (Williamson Ether) -->
  <line x1="352" y1="260" x2="225" y2="230" stroke="#38bdf8" stroke-width="2" marker-end="url(#mapArrow)"/>
  <rect x="30" y="195" width="210" height="55" rx="8" fill="#1e293b" stroke="#2dd4bf" stroke-width="1.5"/>
  <text x="135" y="213" fill="#99f6e4" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Reagent: R'ONa (Williamson)</text>
  <text x="135" y="236" fill="#2dd4bf" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">R–O–R' (Ether)</text>

  <!-- 8. Top-Left: alc. KOH -> Alkene -->
  <line x1="362" y1="230" x2="230" y2="135" stroke="#38bdf8" stroke-width="2" marker-end="url(#mapArrow)"/>
  <rect x="30" y="85" width="210" height="55" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="135" y="103" fill="#fecaca" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Reagent: alc. KOH / Δ (E2)</text>
  <text x="135" y="126" fill="#f87171" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">Alkene (Saytzeff Major)</text>

  <!-- Bottom Strip -->
  <rect x="24" y="475" width="752" height="32" rx="6" fill="#111827" stroke="#334155" stroke-width="1"/>
  <text x="400" y="496" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">
    🔥 Key NEET Ambidentate Divergence: <tspan fill="#38bdf8" font-weight="bold">KCN → R–CN</tspan> vs <tspan fill="#fb7185" font-weight="bold">AgCN → R–NC</tspan> | <tspan fill="#facc15" font-weight="bold">KNO₂ → R–ONO</tspan> vs <tspan fill="#34d399" font-weight="bold">AgNO₂ → R–NO₂</tspan>
  </text>
</svg>`,

  // 6. Haloarenes Electrophilic Substitution & Diazonium Roadmap
  haloarenesMasterReactionMap: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
  <defs>
    <linearGradient id="mapArylBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
    <marker id="arArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#818cf8"/>
    </marker>
  </defs>

  <rect width="800" height="500" fill="url(#mapArylBg)" rx="16" stroke="#1f2937" stroke-width="2"/>

  <!-- Title -->
  <rect x="24" y="16" width="752" height="38" rx="8" fill="#311018" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="400" y="41" fill="#ffe4e6" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle">
    HALOARENES SYNTHESIS (DIAZONIUM ROUTE) &amp; ELECTROPHILIC SUBSTITUTION (o/p-DIRECTING)
  </text>

  <!-- Left Side: Diazonium Salt Transformations -->
  <g transform="translate(30, 75)">
    <rect width="340" height="375" rx="10" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
    <text x="170" y="28" fill="#c7d2fe" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">
      A. PREPARATION FROM DIAZONIUM SALT (Ar–N₂⁺Cl⁻)
    </text>

    <!-- 1. Sandmeyer Chlorination -->
    <rect x="15" y="45" width="310" height="52" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="25" y="65" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Sandmeyer: Cu₂Cl₂ / HCl</text>
    <text x="25" y="85" fill="#e0f2fe" font-family="monospace" font-size="12" font-weight="bold">Ar–N₂⁺Cl⁻ → Ar–Cl + N₂↑ (High Yield)</text>

    <!-- 2. Sandmeyer Bromination -->
    <rect x="15" y="105" width="310" height="52" rx="6" fill="#0f172a" stroke="#fb923c" stroke-width="1"/>
    <text x="25" y="125" fill="#fb923c" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Sandmeyer: Cu₂Br₂ / HBr</text>
    <text x="25" y="145" fill="#fed7aa" font-family="monospace" font-size="12" font-weight="bold">Ar–N₂⁺Cl⁻ → Ar–Br + N₂↑ (High Yield)</text>

    <!-- 3. Sandmeyer Cyanation -->
    <rect x="15" y="165" width="310" height="52" rx="6" fill="#0f172a" stroke="#34d399" stroke-width="1"/>
    <text x="25" y="185" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Sandmeyer: CuCN / KCN</text>
    <text x="25" y="205" fill="#d1fae5" font-family="monospace" font-size="12" font-weight="bold">Ar–N₂⁺Cl⁻ → Ar–CN + N₂↑</text>

    <!-- 4. Gattermann Reaction -->
    <rect x="15" y="225" width="310" height="52" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1"/>
    <text x="25" y="245" fill="#fb7185" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Gattermann: Cu Powder / HCl or HBr</text>
    <text x="25" y="265" fill="#fecdd3" font-family="monospace" font-size="12" font-weight="bold">Ar–N₂⁺Cl⁻ → Ar–Cl / Ar–Br (Lower Yield)</text>

    <!-- 5. Balz-Schiemann Fluorination & KI Iodination -->
    <rect x="15" y="285" width="310" height="75" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
    <text x="25" y="305" fill="#fde68a" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Balz-Schiemann: HBF₄, then heat (Δ)</text>
    <text x="25" y="323" fill="#ffffff" font-family="monospace" font-size="12" font-weight="bold">Ar–N₂⁺BF₄⁻ → Ar–F + BF₃ + N₂↑</text>
    <text x="25" y="345" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">KI / warm (no Cu catalyst needed!) → <tspan fill="#38bdf8" font-weight="bold">Ar–I</tspan></text>
  </g>

  <!-- Right Side: Electrophilic Substitution of Chlorobenzene -->
  <g transform="translate(420, 75)">
    <rect width="350" height="375" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
    <text x="175" y="28" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">
      B. ELECTROPHILIC SUBSTITUTION OF C₆H₅Cl
    </text>

    <!-- Halogenation -->
    <rect x="15" y="45" width="320" height="55" rx="6" fill="#0f172a" stroke="#34d399" stroke-width="1"/>
    <text x="25" y="65" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">1. Halogenation: Cl₂ / anh. FeCl₃</text>
    <text x="25" y="85" fill="#ffffff" font-family="monospace" font-size="12" font-weight="bold">1,4-Dichlorobenzene (1,4-Major &gt;&gt; 1,2-Minor)</text>

    <!-- Nitration -->
    <rect x="15" y="108" width="320" height="55" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="25" y="128" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">2. Nitration: conc. HNO₃ + conc. H₂SO₄</text>
    <text x="25" y="148" fill="#ffffff" font-family="monospace" font-size="12" font-weight="bold">1-Chloro-4-nitrobenzene (Para Major)</text>

    <!-- Sulphonation -->
    <rect x="15" y="171" width="320" height="55" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
    <text x="25" y="191" fill="#fbbf24" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">3. Sulphonation: conc. H₂SO₄ / Δ</text>
    <text x="25" y="211" fill="#ffffff" font-family="monospace" font-size="12" font-weight="bold">4-Chlorobenzenesulphonic acid (Para Major)</text>

    <!-- Friedel-Crafts Alkylation & Acylation -->
    <rect x="15" y="234" width="320" height="80" rx="6" fill="#0f172a" stroke="#c084fc" stroke-width="1"/>
    <text x="25" y="254" fill="#c084fc" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">4. Friedel-Crafts Reactions (anh. AlCl₃):</text>
    <text x="25" y="274" fill="#e9d5ff" font-family="monospace" font-size="11" font-weight="bold">+ CH₃Cl → 1-Chloro-4-methylbenzene (Major)</text>
    <text x="25" y="294" fill="#e9d5ff" font-family="monospace" font-size="11" font-weight="bold">+ CH₃COCl → 4-Chloroacetophenone (Major)</text>

    <!-- Wurtz-Fittig & Fittig -->
    <text x="25" y="338" fill="#fde68a" font-family="system-ui, sans-serif" font-size="10" font-weight="bold">Fittig: 2 Ar-X + 2Na → Diphenyl | Wurtz-Fittig: Ar-X + R-X + 2Na → Ar-R</text>
  </g>

  <!-- Bottom Banner -->
  <rect x="24" y="460" width="752" height="28" rx="6" fill="#111827" stroke="#374151" stroke-width="1"/>
  <text x="400" y="479" fill="#facc15" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
    ⚠️ NEET Core Trap: Halogen on benzene is DEACTIVATING (due to strong -I) but ORTHO/PARA DIRECTING (due to +R resonance).
  </text>
</svg>`
};
