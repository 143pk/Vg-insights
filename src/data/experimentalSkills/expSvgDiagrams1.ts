export const EXP_SVGS_1 = {
  vernierCalipers: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <defs>
      <linearGradient id="metalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#f1f5f9"/>
        <stop offset="50%" stop-color="#cbd5e1"/>
        <stop offset="100%" stop-color="#94a3b8"/>
      </linearGradient>
      <linearGradient id="vernierGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#e2e8f0"/>
        <stop offset="100%" stop-color="#cbd5e1"/>
      </linearGradient>
    </defs>
    <!-- Background grid container -->
    <rect width="750" height="320" rx="16" fill="#0f172a"/>
    <text x="375" y="28" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle" font-family="system-ui">VERNIER CALIPERS (Least Count = 1 MSD − 1 VSD = 0.1 mm = 0.01 cm)</text>
    
    <!-- Main Beam -->
    <rect x="60" y="80" width="630" height="70" fill="url(#metalGrad)" stroke="#475569" stroke-width="2" rx="4"/>
    
    <!-- Fixed Outside Jaw (Left) -->
    <path d="M 60 80 L 60 250 C 60 260, 75 270, 85 270 L 95 240 L 95 150 L 120 150 L 120 80 Z" fill="url(#metalGrad)" stroke="#475569" stroke-width="2"/>
    <!-- Fixed Inside Jaw (Upper Left) -->
    <path d="M 60 80 L 60 45 C 60 40, 70 40, 75 45 L 85 80 Z" fill="url(#metalGrad)" stroke="#475569" stroke-width="2"/>
    
    <!-- Main Scale Markings (0 to 12 cm) -->
    <!-- Scale line -->
    <line x1="120" y1="125" x2="670" y2="125" stroke="#1e293b" stroke-width="1.5"/>
    <!-- Millimeter and cm ticks -->
    <!-- 0 cm at x=130 -->
    <g font-size="9" fill="#1e293b" font-family="monospace" font-weight="bold">
      <!-- 0 to 10 cm marks -->
      <line x1="130" y1="125" x2="130" y2="105" stroke="#1e293b" stroke-width="2"/><text x="130" y="100" text-anchor="middle">0</text>
      <line x1="170" y1="125" x2="170" y2="105" stroke="#1e293b" stroke-width="2"/><text x="170" y="100" text-anchor="middle">1</text>
      <line x1="210" y1="125" x2="210" y2="105" stroke="#1e293b" stroke-width="2"/><text x="210" y="100" text-anchor="middle">2</text>
      <line x1="250" y1="125" x2="250" y2="105" stroke="#1e293b" stroke-width="2"/><text x="250" y="100" text-anchor="middle">3</text>
      <line x1="290" y1="125" x2="290" y2="105" stroke="#1e293b" stroke-width="2"/><text x="290" y="100" text-anchor="middle">4</text>
      <line x1="330" y1="125" x2="330" y2="105" stroke="#1e293b" stroke-width="2"/><text x="330" y="100" text-anchor="middle">5</text>
      <line x1="370" y1="125" x2="370" y2="105" stroke="#1e293b" stroke-width="2"/><text x="370" y="100" text-anchor="middle">6</text>
      <line x1="410" y1="125" x2="410" y2="105" stroke="#1e293b" stroke-width="2"/><text x="410" y="100" text-anchor="middle">7</text>
      <line x1="450" y1="125" x2="450" y2="105" stroke="#1e293b" stroke-width="2"/><text x="450" y="100" text-anchor="middle">8</text>
      <line x1="490" y1="125" x2="490" y2="105" stroke="#1e293b" stroke-width="2"/><text x="490" y="100" text-anchor="middle">9</text>
      <line x1="530" y1="125" x2="530" y2="105" stroke="#1e293b" stroke-width="2"/><text x="530" y="100" text-anchor="middle">10</text>
      <line x1="570" y1="125" x2="570" y2="105" stroke="#1e293b" stroke-width="2"/><text x="570" y="100" text-anchor="middle">11</text>
      <line x1="610" y1="125" x2="610" y2="105" stroke="#1e293b" stroke-width="2"/><text x="610" y="100" text-anchor="middle">12 cm</text>
      <!-- Subdivisions -->
      <line x1="150" y1="125" x2="150" y2="112" stroke="#475569" stroke-width="1.2"/>
      <line x1="190" y1="125" x2="190" y2="112" stroke="#475569" stroke-width="1.2"/>
      <line x1="230" y1="125" x2="230" y2="112" stroke="#475569" stroke-width="1.2"/>
      <line x1="270" y1="125" x2="270" y2="112" stroke="#475569" stroke-width="1.2"/>
      <line x1="310" y1="125" x2="310" y2="112" stroke="#475569" stroke-width="1.2"/>
    </g>
    
    <!-- Spherical object being measured -->
    <circle cx="162" cy="210" r="32" fill="#fbbf24" stroke="#d97706" stroke-width="2.5" opacity="0.9"/>
    <text x="162" y="214" font-size="10" font-weight="bold" fill="#78350f" text-anchor="middle">Sphere</text>
    
    <!-- Movable Vernier Slider (shifted by measured diameter) -->
    <g transform="translate(130, 0)">
      <!-- Vernier sliding body -->
      <path d="M 64 72 L 190 72 L 190 158 L 95 158 L 95 240 L 64 270 Z" fill="url(#vernierGrad)" stroke="#334155" stroke-width="2"/>
      <!-- Movable Upper Jaw -->
      <path d="M 64 72 L 75 45 C 80 40, 88 40, 92 45 L 95 72 Z" fill="url(#vernierGrad)" stroke="#334155" stroke-width="2"/>
      
      <!-- Vernier Scale Window & Markings (10 divisions = 9 MSD = 9 mm) -->
      <rect x="70" y="122" width="110" height="32" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" rx="3"/>
      <line x1="75" y1="126" x2="175" y2="126" stroke="#0f172a" stroke-width="1"/>
      <g font-size="8" fill="#0f172a" font-family="monospace" font-weight="bold">
        <line x1="75" y1="126" x2="75" y2="140" stroke="#ef4444" stroke-width="2"/><text x="75" y="149" text-anchor="middle" fill="#ef4444">0</text>
        <line x1="84" y1="126" x2="84" y2="136" stroke="#0f172a" stroke-width="1"/>
        <line x1="93" y1="126" x2="93" y2="136" stroke="#0f172a" stroke-width="1"/>
        <line x1="102" y1="126" x2="102" y2="136" stroke="#0f172a" stroke-width="1"/>
        <line x1="111" y1="126" x2="111" y2="136" stroke="#0f172a" stroke-width="1"/>
        <line x1="120" y1="126" x2="120" y2="140" stroke="#0f172a" stroke-width="1.5"/><text x="120" y="149" text-anchor="middle">5</text>
        <line x1="129" y1="126" x2="129" y2="136" stroke="#0f172a" stroke-width="1"/>
        <line x1="138" y1="126" x2="138" y2="136" stroke="#0f172a" stroke-width="1"/>
        <line x1="147" y1="126" x2="147" y2="136" stroke="#0f172a" stroke-width="1"/>
        <line x1="156" y1="126" x2="156" y2="140" stroke="#0f172a" stroke-width="2"/><text x="156" y="149" text-anchor="middle">10</text>
      </g>
      <!-- Metallic Depth Rod extending right -->
      <rect x="190" y="112" width="220" height="6" fill="#e2e8f0" stroke="#64748b" stroke-width="1"/>
    </g>
    
    <!-- Annotations & Labels -->
    <path d="M 80 40 L 40 40 L 40 60" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="35" y="38" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="end">Upper Jaws (Internal Dia)</text>
    
    <path d="M 80 260 L 40 260 L 40 240" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="35" y="265" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="end">Lower Jaws (External Dia)</text>
    
    <path d="M 540 115 L 570 115 L 570 90" fill="none" stroke="#a7f3d0" stroke-width="1.5"/>
    <text x="575" y="88" fill="#34d399" font-size="11" font-weight="bold">Metallic Depth Strip (Depth of Vessel)</text>
    
    <!-- Formula Box -->
    <rect x="160" y="268" width="460" height="42" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="390" y="286" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle" font-family="monospace">Reading = MSR + (VSR × LC) − (Zero Error)</text>
    <text x="390" y="302" fill="#94a3b8" font-size="10" text-anchor="middle">Least Count (LC) = 1 MSD − 1 VSD = 1 mm − 0.9 mm = 0.1 mm = 0.01 cm</text>
  </svg>`,

  screwGauge: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <rect width="750" height="320" rx="16" fill="#0f172a"/>
    <text x="375" y="26" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle" font-family="system-ui">MICROMETER SCREW GAUGE (Least Count = Pitch / Total Circular Div = 0.01 mm)</text>
    
    <!-- U-shaped Frame -->
    <path d="M 230 100 C 90 100, 70 240, 230 240 L 250 240 L 250 215 L 230 215 C 120 215, 110 125, 230 125 Z" fill="#334155" stroke="#64748b" stroke-width="2"/>
    <text x="140" y="175" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">U-Frame</text>
    
    <!-- Fixed Anvil (Stud A) -->
    <rect x="230" y="105" width="25" height="15" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
    <text x="242" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Anvil (A)</text>
    
    <!-- Thin Wire being measured -->
    <rect x="255" y="100" width="8" height="25" fill="#f59e0b" stroke="#d97706" stroke-width="1"/>
    <text x="259" y="85" fill="#fbbf24" font-size="9" font-weight="bold" text-anchor="middle">Wire</text>
    
    <!-- Movable Spindle (B) -->
    <rect x="263" y="105" width="75" height="15" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
    <text x="300" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Spindle (B)</text>
    
    <!-- Main Sleeve / Barrel with Pitch Scale -->
    <rect x="338" y="95" width="130" height="35" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
    <!-- Reference datum line -->
    <line x1="340" y1="112" x2="445" y2="112" stroke="#0f172a" stroke-width="1.5"/>
    <!-- Linear Pitch Scale (0, 5 mm) -->
    <g font-size="8" fill="#0f172a" font-family="monospace" font-weight="bold">
      <line x1="345" y1="112" x2="345" y2="102" stroke="#0f172a" stroke-width="1.5"/><text x="345" y="99" text-anchor="middle">0</text>
      <line x1="365" y1="112" x2="365" y2="102" stroke="#0f172a" stroke-width="1"/><text x="365" y="99" text-anchor="middle">2</text>
      <line x1="385" y1="112" x2="385" y2="102" stroke="#0f172a" stroke-width="1.5"/><text x="385" y="99" text-anchor="middle">4</text>
      <line x1="405" y1="112" x2="405" y2="102" stroke="#0f172a" stroke-width="1.5"/><text x="405" y="99" text-anchor="middle">6</text>
      <!-- Half millimeter ticks below reference line -->
      <line x1="355" y1="112" x2="355" y2="120" stroke="#0f172a" stroke-width="1"/>
      <line x1="375" y1="112" x2="375" y2="120" stroke="#0f172a" stroke-width="1"/>
      <line x1="395" y1="112" x2="395" y2="120" stroke="#0f172a" stroke-width="1"/>
    </g>
    
    <!-- Rotating Circular Thimble / Head Scale -->
    <path d="M 425 85 L 565 85 L 565 140 L 425 140 L 410 112 Z" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
    <!-- Circular scale graduation markings -->
    <line x1="428" y1="88" x2="428" y2="137" stroke="#1e293b" stroke-width="1"/>
    <g font-size="8" fill="#0f172a" font-family="monospace" font-weight="bold">
      <line x1="428" y1="104" x2="438" y2="104" stroke="#0f172a" stroke-width="1"/><text x="444" y="107">35</text>
      <line x1="428" y1="112" x2="442" y2="112" stroke="#ef4444" stroke-width="2"/><text x="448" y="115" fill="#ef4444">40 ★</text>
      <line x1="428" y1="120" x2="438" y2="120" stroke="#0f172a" stroke-width="1"/><text x="444" y="123">45</text>
    </g>
    
    <!-- Ratchet mechanism at end -->
    <rect x="565" y="98" width="55" height="18" fill="#475569" stroke="#1e293b" stroke-width="1.5" rx="3"/>
    <line x1="575" y1="98" x2="575" y2="116" stroke="#94a3b8" stroke-width="1"/>
    <line x1="585" y1="98" x2="585" y2="116" stroke="#94a3b8" stroke-width="1"/>
    <line x1="595" y1="98" x2="595" y2="116" stroke="#94a3b8" stroke-width="1"/>
    <line x1="605" y1="98" x2="605" y2="116" stroke="#94a3b8" stroke-width="1"/>
    <text x="592" y="90" fill="#94a3b8" font-size="9" text-anchor="middle">Ratchet (R)</text>
    
    <!-- Zero Error Sub-diagrams -->
    <!-- Positive Zero Error -->
    <g transform="translate(80, 248)">
      <rect width="180" height="58" fill="#1e293b" stroke="#64748b" stroke-width="1" rx="6"/>
      <text x="90" y="16" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">POSITIVE ZERO ERROR</text>
      <text x="90" y="32" fill="#e2e8f0" font-size="9" text-anchor="middle">0 of Circular Scale lies BELOW</text>
      <text x="90" y="47" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">Zero Error = +n × LC (Subtracted)</text>
    </g>
    <!-- Negative Zero Error -->
    <g transform="translate(285, 248)">
      <rect width="180" height="58" fill="#1e293b" stroke="#64748b" stroke-width="1" rx="6"/>
      <text x="90" y="16" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">NEGATIVE ZERO ERROR</text>
      <text x="90" y="32" fill="#e2e8f0" font-size="9" text-anchor="middle">0 of Circular Scale lies ABOVE</text>
      <text x="90" y="47" fill="#4ade80" font-size="9" font-weight="bold" text-anchor="middle">Zero Error = −(N−n)×LC (Added)</text>
    </g>
    <!-- Backlash error note -->
    <g transform="translate(490, 248)">
      <rect width="180" height="58" fill="#1e293b" stroke="#fbbf24" stroke-width="1" rx="6"/>
      <text x="90" y="16" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">BACKLASH ERROR</text>
      <text x="90" y="32" fill="#e2e8f0" font-size="8.5" text-anchor="middle">Play in loose screw threads</text>
      <text x="90" y="47" fill="#38bdf8" font-size="8.5" text-anchor="middle">Remedy: Rotate only in 1 direction</text>
    </g>
  </svg>`,

  simplePendulumDamping: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <rect width="750" height="320" rx="16" fill="#0f172a"/>
    <text x="375" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">SIMPLE PENDULUM: DISSIPATION OF ENERGY (A² vs t Graph & Damping)</text>
    
    <!-- Left: Oscillating Pendulum Setup -->
    <g transform="translate(60, 45)">
      <!-- Rigid support & split cork -->
      <rect x="40" y="10" width="100" height="12" fill="#64748b" stroke="#94a3b8" stroke-width="1.5"/>
      <path d="M 80 22 L 80 32 L 100 32 L 100 22 Z" fill="#b45309"/>
      <text x="90" y="8" fill="#94a3b8" font-size="9" text-anchor="middle">Split Cork Support</text>
      
      <!-- String and extreme positions -->
      <line x1="90" y1="32" x2="90" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
      <!-- Left damped amplitude -->
      <line x1="90" y1="32" x2="45" y2="170" stroke="#60a5fa" stroke-width="1.5"/>
      <circle cx="45" cy="170" r="12" fill="#3b82f6" stroke="#93c5fd" stroke-width="1.5" opacity="0.6"/>
      <!-- Right damped amplitude -->
      <line x1="90" y1="32" x2="135" y2="170" stroke="#60a5fa" stroke-width="1.5"/>
      <circle cx="135" cy="170" r="12" fill="#3b82f6" stroke="#93c5fd" stroke-width="1.5" opacity="0.6"/>
      <!-- Mean position bob -->
      <circle cx="90" cy="180" r="14" fill="#f59e0b" stroke="#fef08a" stroke-width="2"/>
      <text x="90" y="184" fill="#78350f" font-size="9" font-weight="bold" text-anchor="middle">Bob</text>
      
      <!-- Length L label -->
      <path d="M 105 32 L 115 32 M 110 32 L 110 180 M 105 180 L 115 180" fill="none" stroke="#cbd5e1" stroke-width="1.2"/>
      <text x="128" y="110" fill="#cbd5e1" font-size="10" font-weight="bold">L = l + r</text>
      
      <!-- Air drag damping arrows -->
      <path d="M 25 160 C 20 170, 25 180, 35 180" fill="none" stroke="#f87171" stroke-width="1.5" marker-end="url(#arrow)"/>
      <text x="20" y="200" fill="#f87171" font-size="9" text-anchor="middle">Air Viscous Drag (F_d = −bv)</text>
    </g>
    
    <!-- Right: Energy Dissipation Graph (A² vs t) -->
    <g transform="translate(330, 50)">
      <rect width="360" height="230" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="180" y="22" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Graph: Square of Amplitude (A²) vs Time (t)</text>
      
      <!-- Axes -->
      <line x1="50" y1="190" x2="330" y2="190" stroke="#cbd5e1" stroke-width="2"/>
      <line x1="50" y1="190" x2="50" y2="35" stroke="#cbd5e1" stroke-width="2"/>
      <text x="325" y="206" fill="#cbd5e1" font-size="10" font-weight="bold">Time t (s) →</text>
      <text x="42" y="30" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="end">A² (cm²) ∝ Energy E →</text>
      
      <!-- Exponential decay curve: A² = A0² e^(-γt) -->
      <path d="M 50 50 C 90 95, 140 140, 200 165 C 250 178, 290 184, 320 187" fill="none" stroke="#38bdf8" stroke-width="3"/>
      
      <!-- Data points -->
      <circle cx="50" cy="50" r="4" fill="#fbbf24"/>
      <circle cx="100" cy="105" r="4" fill="#fbbf24"/>
      <circle cx="160" cy="148" r="4" fill="#fbbf24"/>
      <circle cx="230" cy="172" r="4" fill="#fbbf24"/>
      <circle cx="300" cy="184" r="4" fill="#fbbf24"/>
      
      <text x="210" y="80" fill="#38bdf8" font-size="11" font-weight="bold" font-family="monospace">E(t) = ½ k A(t)² = E₀ e^(−bt/m)</text>
      <text x="210" y="100" fill="#94a3b8" font-size="9.5">Mechanical Energy decays exponentially</text>
      <text x="210" y="115" fill="#94a3b8" font-size="9.5">due to continuous air resistance drag.</text>
      
      <rect x="70" y="130" width="130" height="42" fill="#0f172a" stroke="#f59e0b" stroke-width="1" rx="4"/>
      <text x="135" y="146" fill="#fbbf24" font-size="9" font-weight="bold" text-anchor="middle">NEET Core Relation:</text>
      <text x="135" y="162" fill="#f8fafc" font-size="10" font-family="monospace" text-anchor="middle">T = 2π √(L/g)</text>
    </g>
  </svg>`,

  metreScaleMoments: `<svg viewBox="0 0 750 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <rect width="750" height="300" rx="16" fill="#0f172a"/>
    <text x="375" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">METRE SCALE: PRINCIPLE OF MOMENTS (Determination of Unknown Mass m)</text>
    
    <!-- Metre Scale Beam (Length 100 cm) -->
    <rect x="75" y="110" width="600" height="24" fill="#fde68a" stroke="#b45309" stroke-width="2" rx="3"/>
    <!-- Scale Graduations -->
    <g font-size="8" fill="#78350f" font-family="monospace" font-weight="bold">
      <line x1="75" y1="110" x2="75" y2="120" stroke="#78350f" stroke-width="1.5"/><text x="75" y="105" text-anchor="middle">0</text>
      <line x1="225" y1="110" x2="225" y2="120" stroke="#78350f" stroke-width="1.5"/><text x="225" y="105" text-anchor="middle">25</text>
      <line x1="375" y1="110" x2="375" y2="120" stroke="#dc2626" stroke-width="2"/><text x="375" y="105" text-anchor="middle" fill="#dc2626">50 (CG)</text>
      <line x1="435" y1="110" x2="435" y2="120" stroke="#0284c7" stroke-width="2"/><text x="435" y="105" text-anchor="middle" fill="#0284c7">60 (Pivot O)</text>
      <line x1="525" y1="110" x2="525" y2="120" stroke="#78350f" stroke-width="1.5"/><text x="525" y="105" text-anchor="middle">75</text>
      <line x1="675" y1="110" x2="675" y2="120" stroke="#78350f" stroke-width="1.5"/><text x="675" y="105" text-anchor="middle">100 cm</text>
    </g>
    
    <!-- Knife Edge Fulcrum Pivot at 60 cm (x=435) -->
    <polygon points="435,134 415,190 455,190" fill="#64748b" stroke="#94a3b8" stroke-width="2"/>
    <rect x="395" y="190" width="80" height="15" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
    <text x="435" y="218" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Knife-edge Pivot (O)</text>
    
    <!-- Unknown Mass m suspended at x=195 (20 cm mark) -->
    <line x1="195" y1="134" x2="195" y2="175" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="175" y="175" width="40" height="35" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5" rx="4"/>
    <text x="195" y="197" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">m = ?</text>
    <text x="195" y="228" fill="#f87171" font-size="9" text-anchor="middle">Unknown Mass (m · g)</text>
    
    <!-- Known Mass M suspended at x=555 (80 cm mark) -->
    <line x1="555" y1="134" x2="555" y2="175" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="535" y="175" width="40" height="35" fill="#10b981" stroke="#6ee7b7" stroke-width="1.5" rx="4"/>
    <text x="555" y="197" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">M</text>
    <text x="555" y="228" fill="#34d399" font-size="9" text-anchor="middle">Known Mass (M · g)</text>
    
    <!-- Distance d1 (Anticlockwise arm) -->
    <path d="M 195 148 L 435 148" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="315" y="143" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">d₁ = (60 − 20) = 40 cm</text>
    
    <!-- Distance d2 (Clockwise arm) -->
    <path d="M 435 148 L 555 148" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="495" y="143" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">d₂ = 20 cm</text>
    
    <!-- Principle of Moments Box -->
    <rect x="120" y="245" width="510" height="42" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="375" y="263" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle" font-family="monospace">Anticlockwise Moment = Clockwise Moment ⇒ m · g · d₁ = M · g · d₂</text>
    <text x="375" y="278" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle" font-family="monospace">Unknown Mass: m = M · (d₂ / d₁) [g cancels out]</text>
  </svg>`,

  youngsModulusSearle: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <rect width="750" height="320" rx="16" fill="#0f172a"/>
    <text x="375" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">YOUNG'S MODULUS OF METALLIC WIRE (Searle's Apparatus & Load vs Extension)</text>
    
    <!-- Left: Searle's Apparatus Setup -->
    <g transform="translate(60, 40)">
      <!-- Rigid Ceiling Support -->
      <rect x="20" y="10" width="180" height="12" fill="#64748b" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="110" y="8" fill="#94a3b8" font-size="9" text-anchor="middle">Rigid Ceiling Support</text>
      
      <!-- Reference Wire (A) & Experimental Wire (B) -->
      <line x1="60" y1="22" x2="60" y2="180" stroke="#cbd5e1" stroke-width="2"/>
      <line x1="160" y1="22" x2="160" y2="180" stroke="#f59e0b" stroke-width="2"/>
      <text x="50" y="90" fill="#cbd5e1" font-size="9" text-anchor="end">Ref Wire (L)</text>
      <text x="170" y="90" fill="#fbbf24" font-size="9">Exp Wire (L)</text>
      
      <!-- Spirit Level linking the two frames -->
      <rect x="50" y="175" width="120" height="15" fill="#334155" stroke="#64748b" stroke-width="1.5" rx="3"/>
      <circle cx="110" cy="182" r="4" fill="#34d399"/>
      <text x="110" y="170" fill="#34d399" font-size="8.5" font-weight="bold" text-anchor="middle">Spirit Level</text>
      
      <!-- Micrometer Spherometer screw on Experimental side -->
      <rect x="150" y="190" width="20" height="25" fill="#94a3b8" stroke="#475569" stroke-width="1"/>
      <text x="175" y="205" fill="#38bdf8" font-size="8.5">Micrometer Screw</text>
      
      <!-- Constant Dead Load & Slotted Weights -->
      <rect x="45" y="215" width="30" height="30" fill="#64748b" rx="3"/>
      <text x="60" y="233" fill="#f8fafc" font-size="8" text-anchor="middle">Dead Load</text>
      
      <rect x="145" y="215" width="30" height="35" fill="#ef4444" stroke="#fca5a5" stroke-width="1" rx="3"/>
      <text x="160" y="235" fill="#f8fafc" font-size="8" font-weight="bold" text-anchor="middle">Load M</text>
    </g>
    
    <!-- Right: Stress vs Strain & Load vs Elongation Graph -->
    <g transform="translate(340, 48)">
      <rect width="360" height="240" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="180" y="22" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Load (M) vs Elongation (ΔL) Graph</text>
      
      <!-- Graph Axes -->
      <line x1="50" y1="180" x2="330" y2="180" stroke="#cbd5e1" stroke-width="2"/>
      <line x1="50" y1="180" x2="50" y2="35" stroke="#cbd5e1" stroke-width="2"/>
      <text x="325" y="196" fill="#cbd5e1" font-size="9.5" font-weight="bold">Elongation ΔL (mm) →</text>
      <text x="42" y="32" fill="#cbd5e1" font-size="9.5" font-weight="bold" text-anchor="end">Load M (kg) →</text>
      
      <!-- Straight line through origin -->
      <line x1="50" y1="180" x2="290" y2="55" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="110" cy="149" r="3.5" fill="#fbbf24"/>
      <circle cx="170" cy="118" r="3.5" fill="#fbbf24"/>
      <circle cx="230" cy="86" r="3.5" fill="#fbbf24"/>
      
      <!-- Slope Annotation -->
      <path d="M 170 118 L 230 118 L 230 86" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="240" y="105" fill="#fbbf24" font-size="9.5" font-weight="bold">Slope = ΔM / Δl</text>
      
      <!-- Formula Box -->
      <rect x="25" y="200" width="310" height="32" fill="#0f172a" stroke="#38bdf8" stroke-width="1" rx="4"/>
      <text x="180" y="220" fill="#38bdf8" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Y = (M · g · L) / (π · r² · ΔL) = (g · L / π r²) × Slope</text>
    </g>
  </svg>`,

  capillaryRiseDetergent: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <rect width="750" height="320" rx="16" fill="#0f172a"/>
    <text x="375" y="24" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">SURFACE TENSION: CAPILLARY RISE METHOD & EFFECT OF DETERGENTS</text>
    
    <!-- Left: Pure Water Capillary Rise -->
    <g transform="translate(60, 45)">
      <rect width="280" height="210" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="140" y="20" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. Pure Water (High Surface Tension T)</text>
      
      <!-- Beaker -->
      <rect x="30" y="120" width="220" height="75" fill="#0284c7" opacity="0.3" rx="4"/>
      <path d="M 25 90 L 25 195 C 25 200, 35 200, 40 200 L 240 200 C 245 200, 255 200, 255 195 L 255 90" fill="none" stroke="#94a3b8" stroke-width="2"/>
      
      <!-- Capillary Tube -->
      <rect x="125" y="35" width="30" height="155" fill="#f8fafc" opacity="0.15" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- High Water Column in Capillary -->
      <rect x="127" y="55" width="26" height="140" fill="#0284c7" opacity="0.6"/>
      <!-- Concave Meniscus -->
      <path d="M 127 55 Q 140 68 153 55" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
      
      <!-- Height h label -->
      <path d="M 175 55 L 195 55 M 185 55 L 185 120 M 175 120 L 195 120" fill="none" stroke="#f8fafc" stroke-width="1.5"/>
      <text x="202" y="92" fill="#f8fafc" font-size="11" font-weight="bold">h (High)</text>
      
      <text x="140" y="150" fill="#f8fafc" font-size="9" text-anchor="middle">Pure Water (θ ≈ 0°)</text>
      <text x="140" y="165" fill="#38bdf8" font-size="9.5" font-weight="bold" text-anchor="middle">T_water ≈ 0.072 N/m</text>
    </g>
    
    <!-- Right: Water + Detergent Capillary Rise -->
    <g transform="translate(410, 45)">
      <rect width="280" height="210" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="140" y="20" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">2. With Detergent (Surface Tension Drops)</text>
      
      <!-- Beaker with soapy water -->
      <rect x="30" y="120" width="220" height="75" fill="#10b981" opacity="0.25" rx="4"/>
      <path d="M 25 90 L 25 195 C 25 200, 35 200, 40 200 L 240 200 C 245 200, 255 200, 255 195 L 255 90" fill="none" stroke="#94a3b8" stroke-width="2"/>
      
      <!-- Capillary Tube -->
      <rect x="125" y="35" width="30" height="155" fill="#f8fafc" opacity="0.15" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- Lower Water Column in Capillary -->
      <rect x="127" y="95" width="26" height="100" fill="#10b981" opacity="0.5"/>
      <!-- Flatter Meniscus -->
      <path d="M 127 95 Q 140 102 153 95" fill="#10b981" stroke="#34d399" stroke-width="2"/>
      
      <!-- Height h' label -->
      <path d="M 175 95 L 195 95 M 185 95 L 185 120 M 175 120 L 195 120" fill="none" stroke="#f87171" stroke-width="1.5"/>
      <text x="202" y="112" fill="#f87171" font-size="11" font-weight="bold">h' (Low)</text>
      
      <text x="140" y="150" fill="#f8fafc" font-size="9" text-anchor="middle">Detergent reduces T &</text>
      <text x="140" y="165" fill="#f87171" font-size="9.5" font-weight="bold" text-anchor="middle">Increases Contact Angle θ</text>
    </g>
    
    <!-- Formula Box -->
    <rect x="110" y="268" width="530" height="42" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="375" y="286" fill="#f8fafc" font-size="11.5" font-weight="bold" text-anchor="middle" font-family="monospace">Capillary Rise: h = (2 T cos θ) / (r · ρ · g)  ⇒  T = (r · h · ρ · g) / (2 cos θ)</text>
    <text x="375" y="302" fill="#38bdf8" font-size="10" text-anchor="middle">Detergent molecules disrupt hydrogen bonding at surface → T decreases drastically → Capillary rise h drops.</text>
  </svg>`
};
