export const EXP_SVGS_3 = {
  focalLengthOpticsParallax: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <rect width="750" height="320" rx="16" fill="#0f172a"/>
    <text x="375" y="24" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">FOCAL LENGTH DETERMINATION ON OPTICAL BENCH (Removal of Parallax & u–v Method)</text>
    
    <!-- Optical Bench Bed (0 to 100 cm scale) -->
    <rect x="50" y="220" width="650" height="18" fill="#334155" stroke="#64748b" stroke-width="1.5" rx="3"/>
    <g font-size="8" fill="#cbd5e1" font-family="monospace">
      <line x1="70" y1="220" x2="70" y2="230" stroke="#cbd5e1" stroke-width="1"/><text x="70" y="236">0</text>
      <line x1="200" y1="220" x2="200" y2="230" stroke="#cbd5e1" stroke-width="1"/><text x="200" y="236">20</text>
      <line x1="375" y1="220" x2="375" y2="230" stroke="#38bdf8" stroke-width="2"/><text x="375" y="236" fill="#38bdf8">50</text>
      <line x1="550" y1="220" x2="550" y2="230" stroke="#cbd5e1" stroke-width="1"/><text x="550" y="236">80</text>
      <line x1="680" y1="220" x2="680" y2="230" stroke="#cbd5e1" stroke-width="1"/><text x="680" y="236">100 cm</text>
    </g>
    
    <!-- Principal Optical Axis -->
    <line x1="50" y1="120" x2="700" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
    
    <!-- Convex Lens Upright at 50 cm (x=375) -->
    <path d="M 375 50 Q 395 120 375 190 Q 355 120 375 50" fill="#38bdf8" opacity="0.4" stroke="#38bdf8" stroke-width="2"/>
    <rect x="367" y="190" width="16" height="30" fill="#64748b" stroke="#94a3b8" stroke-width="1"/>
    <text x="375" y="42" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">Convex Lens (L)</text>
    
    <!-- Object Pin (O) at x=160 (Left of 2F) -->
    <line x1="160" y1="65" x2="160" y2="120" stroke="#ef4444" stroke-width="3"/>
    <polygon points="156,65 160,52 164,65" fill="#ef4444"/>
    <rect x="154" y="120" width="12" height="100" fill="#64748b" stroke="#94a3b8" stroke-width="1"/>
    <text x="160" y="45" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">Object Pin (O)</text>
    
    <!-- Real Inverted Image formed at x=560 -->
    <line x1="560" y1="175" x2="560" y2="120" stroke="#34d399" stroke-width="2.5" stroke-dasharray="3,2"/>
    <polygon points="556,175 560,188 564,175" fill="#34d399"/>
    <text x="560" y="112" fill="#34d399" font-size="9" text-anchor="middle">Real Image I</text>
    
    <!-- Image Pin (I) placed at x=560 tip-to-tip to remove parallax -->
    <line x1="560" y1="188" x2="560" y2="120" stroke="#fbbf24" stroke-width="3"/>
    <polygon points="556,188 560,200 564,188" fill="#fbbf24"/>
    <rect x="554" y="120" width="12" height="100" fill="#64748b" stroke="#94a3b8" stroke-width="1"/>
    <text x="560" y="215" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">Image Pin (I)</text>
    
    <!-- Ray tracing lines -->
    <!-- Parallel ray refracting through focus -->
    <line x1="160" y1="52" x2="375" y2="52" stroke="#fca5a5" stroke-width="1.5"/>
    <line x1="375" y1="52" x2="560" y2="188" stroke="#fca5a5" stroke-width="1.5"/>
    <!-- Central ray through optical center -->
    <line x1="160" y1="52" x2="560" y2="188" stroke="#fde047" stroke-width="1.5"/>
    
    <!-- Distances u and v -->
    <path d="M 160 145 L 375 145" stroke="#ef4444" stroke-width="1.5"/>
    <text x="267" y="140" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">u (Object distance)</text>
    
    <path d="M 375 145 L 560 145" stroke="#34d399" stroke-width="1.5"/>
    <text x="467" y="140" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">v (Image distance)</text>
    
    <!-- Parallax Removal Explanation Box -->
    <rect x="50" y="255" width="650" height="55" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="375" y="273" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Removal of Parallax: Eye shifted sideways → If Pin and Image do NOT shift relative to each other, parallax = 0.</text>
    <text x="375" y="295" fill="#38bdf8" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Lens Formula: 1/f = 1/v − 1/u  |  Mirror Formula: 1/f = 1/v + 1/u  |  Convex Mirror: f = R / 2</text>
  </svg>`,

  prismDeviationGraph: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <rect width="750" height="320" rx="16" fill="#0f172a"/>
    <text x="375" y="24" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">PRISM REFRACTION: ANGLE OF DEVIATION (δ) vs ANGLE OF INCIDENCE (i)</text>
    
    <!-- Left: Ray refraction through Triangular Prism -->
    <g transform="translate(50, 42)">
      <rect width="310" height="215" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="155" y="20" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Prism Ray Optics (At δ = δ_m)</text>
      
      <!-- Triangular Glass Prism ABC -->
      <polygon points="155,40 65,185 245,185" fill="#0284c7" opacity="0.25" stroke="#38bdf8" stroke-width="2"/>
      <text x="155" y="58" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">A (Apex)</text>
      
      <!-- Symmetrical Ray Path at Minimum Deviation (Ray parallel to base) -->
      <!-- Incident Ray -->
      <line x1="20" y1="150" x2="105" y2="120" stroke="#f59e0b" stroke-width="2"/>
      <!-- Refracted Ray inside prism (Parallel to BC) -->
      <line x1="105" y1="120" x2="205" y2="120" stroke="#f59e0b" stroke-width="2"/>
      <!-- Emergent Ray -->
      <line x1="205" y1="120" x2="290" y2="150" stroke="#f59e0b" stroke-width="2"/>
      
      <!-- Normal lines -->
      <line x1="75" y1="95" x2="135" y2="145" stroke="#94a3b8" stroke-dasharray="2,2"/>
      <line x1="235" y1="95" x2="175" y2="145" stroke="#94a3b8" stroke-dasharray="2,2"/>
      
      <!-- Angles i, e, r1, r2, delta -->
      <text x="70" y="118" fill="#fbbf24" font-size="9" font-weight="bold">i</text>
      <text x="240" y="118" fill="#fbbf24" font-size="9" font-weight="bold">e = i</text>
      <text x="120" y="115" fill="#34d399" font-size="8.5">r₁</text>
      <text x="180" y="115" fill="#34d399" font-size="8.5">r₂ = r₁</text>
      
      <!-- Deviation angle delta -->
      <line x1="105" y1="120" x2="175" y2="95" stroke="#f43f5e" stroke-dasharray="3,3"/>
      <line x1="205" y1="120" x2="140" y2="95" stroke="#f43f5e" stroke-dasharray="3,3"/>
      <text x="155" y="90" fill="#f43f5e" font-size="10" font-weight="bold" text-anchor="middle">δ_m</text>
    </g>
    
    <!-- Right: i - delta Curve -->
    <g transform="translate(390, 42)">
      <rect width="310" height="215" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="155" y="20" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">i – δ Characteristic Curve</text>
      
      <!-- Axes -->
      <line x1="45" y1="175" x2="280" y2="175" stroke="#cbd5e1" stroke-width="2"/>
      <line x1="45" y1="175" x2="45" y2="35" stroke="#cbd5e1" stroke-width="2"/>
      <text x="275" y="190" fill="#cbd5e1" font-size="9" font-weight="bold">Angle of Incidence i (°) →</text>
      <text x="40" y="30" fill="#cbd5e1" font-size="9" font-weight="bold" text-anchor="end">Deviation δ (°) →</text>
      
      <!-- U-shaped Asymmetrical i-delta Curve -->
      <path d="M 60 70 Q 140 180 160 145 Q 180 110 260 80" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
      
      <!-- Minimum point delta_m -->
      <circle cx="150" cy="145" r="4" fill="#ef4444"/>
      <line x1="45" y1="145" x2="150" y2="145" stroke="#ef4444" stroke-dasharray="3,3"/>
      <line x1="150" y1="145" x2="150" y2="175" stroke="#ef4444" stroke-dasharray="3,3"/>
      <text x="38" y="148" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="end">δ_m</text>
      <text x="150" y="190" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">i = e</text>
      
      <text x="200" y="55" fill="#38bdf8" font-size="9.5" font-weight="bold">At δ = δ_m:</text>
      <text x="200" y="70" fill="#e2e8f0" font-size="8.5">• i = e</text>
      <text x="200" y="83" fill="#e2e8f0" font-size="8.5">• r₁ = r₂ = A/2</text>
      <text x="200" y="96" fill="#e2e8f0" font-size="8.5">• Ray parallel to base</text>
    </g>
    
    <!-- Prism Formula Box -->
    <rect x="50" y="268" width="650" height="42" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="375" y="286" fill="#f8fafc" font-size="11.5" font-weight="bold" text-anchor="middle" font-family="monospace">Refractive Index of Prism: μ = sin[(A + δ_m) / 2] / sin(A / 2)</text>
    <text x="375" y="302" fill="#38bdf8" font-size="9.5" text-anchor="middle">General relation: i + e = A + δ  |  At minimum deviation: 2 i = A + δ_m  ⇒  i = (A + δ_m)/2.</text>
  </svg>`,

  travellingMicroscopeRefractiveIndex: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <rect width="750" height="320" rx="16" fill="#0f172a"/>
    <text x="375" y="24" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">REFRACTIVE INDEX OF GLASS SLAB BY TRAVELLING MICROSCOPE (Apparent Depth)</text>
    
    <!-- 3 Successive Focused Reading Positions R1, R2, R3 -->
    <!-- Position 1: Ink Mark on Paper (R1) -->
    <g transform="translate(60, 42)">
      <rect width="190" height="215" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="95" y="20" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">Reading R₁ (Direct Mark)</text>
      
      <!-- Microscope focused on bottom mark -->
      <rect x="85" y="45" width="20" height="70" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1.5"/>
      <circle cx="95" cy="45" r="10" fill="#334155"/>
      <line x1="95" y1="115" x2="95" y2="175" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2"/>
      
      <!-- Base paper with ink dot P -->
      <rect x="30" y="175" width="130" height="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <circle cx="95" cy="175" r="4" fill="#ef4444"/>
      <text x="95" y="198" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">Ink Mark (P)</text>
    </g>
    
    <!-- Position 2: Glass Slab placed, Apparent Image P' focused (R2) -->
    <g transform="translate(280, 42)">
      <rect width="190" height="215" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="95" y="20" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">Reading R₂ (Apparent Mark)</text>
      
      <!-- Microscope raised to focus apparent image P' -->
      <rect x="85" y="32" width="20" height="70" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1.5"/>
      <circle cx="95" cy="32" r="10" fill="#334155"/>
      <line x1="95" y1="102" x2="95" y2="150" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="2,2"/>
      
      <!-- Glass Slab -->
      <rect x="35" y="125" width="120" height="50" fill="#0284c7" opacity="0.35" stroke="#38bdf8" stroke-width="1.5"/>
      <circle cx="95" cy="175" r="3" fill="#64748b"/>
      <!-- Apparent virtual mark P' raised by normal shift -->
      <circle cx="95" cy="150" r="4" fill="#fbbf24"/>
      <text x="95" y="198" fill="#fbbf24" font-size="9" font-weight="bold" text-anchor="middle">Apparent Image (P')</text>
    </g>
    
    <!-- Position 3: Lycopodium Powder on Top Surface focused (R3) -->
    <g transform="translate(500, 42)">
      <rect width="190" height="215" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="95" y="20" fill="#34d399" font-size="10.5" font-weight="bold" text-anchor="middle">Reading R₃ (Top Surface)</text>
      
      <!-- Microscope raised to focus top surface powder particles -->
      <rect x="85" y="18" width="20" height="70" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1.5"/>
      <circle cx="95" cy="18" r="10" fill="#334155"/>
      <line x1="95" y1="88" x2="95" y2="125" stroke="#34d399" stroke-width="1.5" stroke-dasharray="2,2"/>
      
      <!-- Glass Slab & Top Powder -->
      <rect x="35" y="125" width="120" height="50" fill="#0284c7" opacity="0.35" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Lycopodium powder particles on top -->
      <circle cx="85" cy="125" r="2" fill="#34d399"/>
      <circle cx="95" cy="125" r="3" fill="#34d399"/>
      <circle cx="105" cy="125" r="2" fill="#34d399"/>
      <text x="95" y="198" fill="#34d399" font-size="9" font-weight="bold" text-anchor="middle">Top Powder (R₃)</text>
    </g>
    
    <!-- Calculation Box -->
    <rect x="60" y="268" width="630" height="42" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="375" y="286" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle" font-family="monospace">Real Thickness = R₃ − R₁  |  Apparent Thickness = R₃ − R₂</text>
    <text x="375" y="302" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle" font-family="monospace">Refractive Index: μ = Real Thickness / Apparent Thickness = (R₃ − R₁) / (R₃ − R₂)</text>
  </svg>`,

  diodesAndComponentIdentification: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <rect width="750" height="320" rx="16" fill="#0f172a"/>
    <text x="375" y="22" fill="#38bdf8" font-size="13.5" font-weight="bold" text-anchor="middle" font-family="system-ui">ELECTRONIC DEVICES & COMPONENT IDENTIFICATION (Multimeter Unidirectional vs Bidirectional)</text>
    
    <!-- Left: p-n Diode & Zener V-I Curves -->
    <g transform="translate(45, 38)">
      <rect width="310" height="210" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="155" y="18" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">p-n Junction & Zener V–I Characteristics</text>
      
      <!-- Axes -->
      <line x1="25" y1="110" x2="285" y2="110" stroke="#cbd5e1" stroke-width="1.5"/>
      <line x1="155" y1="20" x2="155" y2="200" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="275" y="104" fill="#cbd5e1" font-size="8.5">+V_F (V)</text>
      <text x="30" y="104" fill="#cbd5e1" font-size="8.5">−V_R (V)</text>
      <text x="160" y="32" fill="#cbd5e1" font-size="8.5">+I_F (mA)</text>
      <text x="160" y="195" fill="#cbd5e1" font-size="8.5">−I_R (μA)</text>
      
      <!-- Forward bias exponential knee -->
      <path d="M 155 110 Q 200 110 215 105 Q 230 100 245 40" fill="none" stroke="#34d399" stroke-width="2"/>
      <text x="235" y="35" fill="#34d399" font-size="8" font-weight="bold">p-n Forward (V_knee ≈ 0.7V Si)</text>
      
      <!-- Zener Sharp Breakdown in Reverse Bias -->
      <path d="M 155 110 L 85 112 L 85 185" fill="none" stroke="#ef4444" stroke-width="2"/>
      <text x="75" y="192" fill="#ef4444" font-size="8" font-weight="bold">Zener Breakdown (V_z)</text>
    </g>
    
    <!-- Right: Multimeter Component Identification Matrix -->
    <g transform="translate(375, 38)">
      <rect width="330" height="210" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="165" y="18" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">Component Identification by Multimeter (Ohmmeter)</text>
      
      <!-- 4 Components Cards -->
      <!-- 1. Resistor -->
      <rect x="15" y="30" width="145" height="40" fill="#0f172a" stroke="#38bdf8" stroke-width="1" rx="4"/>
      <text x="25" y="44" fill="#38bdf8" font-size="9" font-weight="bold">1. Resistor (2 terminals)</text>
      <text x="25" y="58" fill="#cbd5e1" font-size="7.5">Same finite R in both directions (Bidirectional)</text>
      
      <!-- 2. Capacitor -->
      <rect x="170" y="30" width="145" height="40" fill="#0f172a" stroke="#fbbf24" stroke-width="1" rx="4"/>
      <text x="180" y="44" fill="#fbbf24" font-size="9" font-weight="bold">2. Capacitor (2 terminals)</text>
      <text x="180" y="58" fill="#cbd5e1" font-size="7.5">Momentary deflection, then R → ∞ (Charges)</text>
      
      <!-- 3. Diode (Rectifier) -->
      <rect x="15" y="76" width="145" height="40" fill="#0f172a" stroke="#34d399" stroke-width="1" rx="4"/>
      <text x="25" y="90" fill="#34d399" font-size="9" font-weight="bold">3. Diode (Unidirectional)</text>
      <text x="25" y="104" fill="#cbd5e1" font-size="7.5">Low R forward, Very high R reverse</text>
      
      <!-- 4. LED -->
      <rect x="170" y="76" width="145" height="40" fill="#0f172a" stroke="#f43f5e" stroke-width="1" rx="4"/>
      <text x="180" y="90" fill="#f43f5e" font-size="9" font-weight="bold">4. LED (Light Emitting)</text>
      <text x="180" y="104" fill="#cbd5e1" font-size="7.5">Conducts & emits light only in forward bias</text>
      
      <!-- 5. Transistor & IC -->
      <rect x="15" y="122" width="300" height="78" fill="#0f172a" stroke="#94a3b8" stroke-width="1" rx="4"/>
      <text x="25" y="138" fill="#f8fafc" font-size="9" font-weight="bold">5. Transistor (3 leads: E, B, C) & IC (Multiple pins)</text>
      <text x="25" y="153" fill="#cbd5e1" font-size="8">• Transistor: 2 back-to-back p-n junctions (E-B, C-B conduct forward).</text>
      <text x="25" y="168" fill="#cbd5e1" font-size="8">• IC (Integrated Circuit): Dual In-line Package (DIP) with 8, 14, 16+ pins.</text>
      <text x="25" y="183" fill="#38bdf8" font-size="8">• Resistor Colour Coding: BBROYGBVGW (Black=0 to White=9).</text>
    </g>
    
    <!-- Bottom Summary -->
    <rect x="45" y="255" width="660" height="55" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="375" y="273" fill="#f8fafc" font-size="10.5" font-weight="bold" text-anchor="middle">Key NEET Rule: Unidirectional conduction = Diode/LED | Bidirectional constant R = Resistor | High-to-infinite = Capacitor.</text>
    <text x="375" y="293" fill="#38bdf8" font-size="10" font-family="monospace" text-anchor="middle">Dynamic Resistance: r_d = ΔV / ΔI  |  Zener operates in REVERSE BREAKDOWN as Voltage Regulator.</text>
  </svg>`
};
