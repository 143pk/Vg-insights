export const ELECTROCHEMISTRY_SVGS = {
  // 1. Daniell Cell (Zn-Cu Galvanic Cell)
  daniellCell: `<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="700" height="380" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>
  
  <!-- Title -->
  <text x="350" y="30" font-size="16" font-weight="800" fill="#1e293b" text-anchor="middle">Daniell Cell Schematic (Galvanic / Voltaic Cell, E°cell = 1.10 V)</text>

  <!-- Left Beaker (Anode - Zn / ZnSO4) -->
  <rect x="70" y="110" width="180" height="190" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5" opacity="0.6"/>
  <rect x="75" y="150" width="170" height="145" fill="#bae6fd" opacity="0.7"/>
  <text x="160" y="270" font-size="12" font-weight="700" fill="#0369a1" text-anchor="middle">1.0 M ZnSO₄(aq)</text>

  <!-- Zinc Electrode (Anode) -->
  <rect x="135" y="70" width="30" height="170" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
  <text x="150" y="60" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">Zn Anode (-)</text>
  <text x="150" y="160" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Zn(s)</text>

  <!-- Right Beaker (Cathode - Cu / CuSO4) -->
  <rect x="450" y="110" width="180" height="190" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5" opacity="0.6"/>
  <rect x="455" y="150" width="170" height="145" fill="#93c5fd" opacity="0.7"/>
  <text x="540" y="270" font-size="12" font-weight="700" fill="#1d4ed8" text-anchor="middle">1.0 M CuSO₄(aq)</text>

  <!-- Copper Electrode (Cathode) -->
  <rect x="515" y="70" width="30" height="170" rx="3" fill="#ea580c" stroke="#9a3412" stroke-width="2"/>
  <text x="530" y="60" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">Cu Cathode (+)</text>
  <text x="530" y="160" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Cu(s)</text>

  <!-- Salt Bridge (Inverted U-tube with Agar-Agar + KCl/KNO3) -->
  <path d="M 220 220 L 220 100 Q 220 80 240 80 L 460 80 Q 480 80 480 100 L 480 220" fill="none" stroke="#f59e0b" stroke-width="18" stroke-linecap="round"/>
  <path d="M 220 220 L 220 100 Q 220 80 240 80 L 460 80 Q 480 80 480 100 L 480 220" fill="none" stroke="#fef3c7" stroke-width="12" stroke-linecap="round"/>
  <text x="350" y="74" font-size="11" font-weight="800" fill="#b45309" text-anchor="middle">Salt Bridge (KCl + Agar-Agar)</text>
  <text x="240" y="130" font-size="10" font-weight="700" fill="#b45309">Cl⁻ →</text>
  <text x="430" y="130" font-size="10" font-weight="700" fill="#b45309">→ K⁺</text>

  <!-- External Circuit Wire + Voltmeter -->
  <polyline points="150,70 150,45 315,45" fill="none" stroke="#334155" stroke-width="2.5"/>
  <polyline points="385,45 530,45 530,70" fill="none" stroke="#334155" stroke-width="2.5"/>
  
  <!-- Voltmeter Circle -->
  <circle cx="350" cy="45" r="20" fill="#ffffff" stroke="#ef4444" stroke-width="2.5"/>
  <text x="350" y="50" font-size="12" font-weight="800" fill="#dc2626" text-anchor="middle">1.10 V</text>

  <!-- Electron Flow & Current Flow Arrows -->
  <path d="M 200 35 L 280 35" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)"/>
  <text x="240" y="28" font-size="10" font-weight="800" fill="#dc2626" text-anchor="middle">e⁻ flow (Zn → Cu)</text>

  <path d="M 470 35 L 390 35" fill="none" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow-green)"/>
  <text x="430" y="28" font-size="10" font-weight="800" fill="#15803d" text-anchor="middle">Current I (Cu → Zn)</text>

  <!-- Half Reactions Text Boxes -->
  <rect x="50" y="315" width="220" height="50" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="160" y="333" font-size="11" font-weight="800" fill="#0369a1" text-anchor="middle">Anode (Oxidation - LOAN):</text>
  <text x="160" y="352" font-size="11" font-weight="600" fill="#334155" text-anchor="middle">Zn(s) → Zn²⁺(aq) + 2e⁻</text>

  <rect x="430" y="315" width="220" height="50" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="540" y="333" font-size="11" font-weight="800" fill="#1d4ed8" text-anchor="middle">Cathode (Reduction - CPR):</text>
  <text x="540" y="352" font-size="11" font-weight="600" fill="#334155" text-anchor="middle">Cu²⁺(aq) + 2e⁻ → Cu(s)</text>

  <!-- Marker definitions -->
  <defs>
    <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#ef4444"/>
    </marker>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#16a34a"/>
    </marker>
  </defs>
</svg>`,

  // 2. Standard Hydrogen Electrode (SHE)
  sheElectrode: `<svg viewBox="0 0 650 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
  <rect width="650" height="380" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>
  
  <text x="325" y="30" font-size="16" font-weight="800" fill="#1e293b" text-anchor="middle">Standard Hydrogen Electrode (SHE, E° = 0.00 V)</text>

  <!-- Outer Glass Vessel -->
  <rect x="180" y="80" width="290" height="250" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2.5"/>
  <!-- Acid Solution Level -->
  <rect x="185" y="150" width="280" height="175" fill="#dbeafe" opacity="0.8"/>
  <text x="325" y="305" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">1.0 M HCl(aq) [Concentration [H⁺] = 1.0 M, pH = 0]</text>

  <!-- Central Glass Tube / Bell with Inlet -->
  <path d="M 285 60 L 285 240 L 365 240 L 365 60" fill="none" stroke="#64748b" stroke-width="2.5"/>
  <path d="M 220 90 L 285 90" fill="none" stroke="#64748b" stroke-width="2.5"/>
  <path d="M 220 110 L 285 110" fill="none" stroke="#64748b" stroke-width="2.5"/>
  <text x="210" y="105" font-size="11" font-weight="800" fill="#0284c7" text-anchor="end">Pure H₂ gas (1 bar / 1 atm, 298 K) ➔</text>

  <!-- Platinum Wire inside glass tube -->
  <line x1="325" y1="45" x2="325" y2="210" stroke="#0f172a" stroke-width="2"/>
  <circle cx="325" cy="45" r="4" fill="#0f172a"/>
  <text x="335" y="50" font-size="11" font-weight="700" fill="#0f172a">Pt wire connection</text>

  <!-- Platinum Foil Coated with Platinum Black -->
  <rect x="305" y="210" width="40" height="25" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/>
  <text x="400" y="225" font-size="11" font-weight="700" fill="#334155">Pt foil coated with Pt black</text>
  <line x1="345" y1="222" x2="395" y2="222" stroke="#94a3b8" stroke-dasharray="2 2"/>

  <!-- H2 gas bubbling out -->
  <circle cx="300" cy="245" r="4" fill="#60a5fa" opacity="0.8"/>
  <circle cx="310" cy="255" r="6" fill="#60a5fa" opacity="0.8"/>
  <circle cx="340" cy="250" r="5" fill="#60a5fa" opacity="0.8"/>
  <circle cx="355" cy="240" r="4" fill="#60a5fa" opacity="0.8"/>
  <text x="325" y="275" font-size="10" font-weight="700" fill="#0284c7" text-anchor="middle">H₂(g) ⇌ 2H⁺(aq) + 2e⁻</text>

  <!-- IUPAC Cell Representation & Conventions -->
  <rect x="70" y="340" width="510" height="30" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
  <text x="325" y="360" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle">IUPAC Half-Cell: Pt(s) | H₂(g, 1 bar) | H⁺(aq, 1 M)  •  E°(H⁺/H₂) = 0.000 V (Arbitrary Zero)</text>
</svg>`,

  // 3. Nernst Cell Potential vs Log Q Plot
  nernstConcentrationGraph: `<svg viewBox="0 0 650 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
  <rect width="650" height="360" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <text x="325" y="30" font-size="15" font-weight="800" fill="#1e293b" text-anchor="middle">Nernst Equation: Variation of Cell Potential (E_cell) with Reaction Quotient (Q)</text>

  <!-- Axes -->
  <line x1="100" y1="280" x2="570" y2="280" stroke="#475569" stroke-width="2.5" marker-end="url(#axis-arrow)"/>
  <line x1="100" y1="280" x2="100" y2="60" stroke="#475569" stroke-width="2.5" marker-end="url(#axis-arrow)"/>
  <text x="575" y="285" font-size="11" font-weight="700" fill="#334155">log₁₀ Q = log₁₀([Zn²⁺]/[Cu²⁺])</text>
  <text x="50" y="55" font-size="11" font-weight="700" fill="#334155">E_cell (Volts)</text>

  <!-- E°cell point on Y-axis -->
  <line x1="95" y1="120" x2="105" y2="120" stroke="#dc2626" stroke-width="2.5"/>
  <text x="85" y="125" font-size="12" font-weight="800" fill="#dc2626" text-anchor="end">E°cell (1.10 V)</text>

  <!-- Linear Plot line: E = E° - (0.0591/2) log Q -->
  <line x1="100" y1="120" x2="520" y2="260" stroke="#2563eb" stroke-width="3.5"/>
  
  <!-- Zero line (Equilibrium: E_cell = 0) -->
  <line x1="100" y1="260" x2="550" y2="260" stroke="#94a3b8" stroke-dasharray="4 4" stroke-width="1.5"/>
  <circle cx="520" cy="260" r="6" fill="#ef4444"/>
  <text x="520" y="250" font-size="11" font-weight="800" fill="#ef4444" text-anchor="middle">Equilibrium (E_cell = 0, Q = Kc)</text>

  <!-- Standard State Point (Q = 1, log Q = 0) -->
  <circle cx="100" cy="120" r="6" fill="#16a34a"/>
  <text x="150" y="105" font-size="11" font-weight="800" fill="#16a34a">Standard State (log Q = 0, [Zn²⁺]=[Cu²⁺]=1M)</text>

  <!-- Slope annotation -->
  <path d="M 260 173 L 360 173 L 360 207" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <text x="375" y="195" font-size="11" font-weight="800" fill="#d97706">Slope = - (2.303 RT / nF) = - (0.0591 / n)</text>

  <!-- Equation Callout -->
  <rect x="140" y="300" width="370" height="40" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
  <text x="325" y="325" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">E_cell = E°_cell - (0.0591 / 2) · log₁₀([Zn²⁺] / [Cu²⁺]) at 298 K</text>

  <defs>
    <marker id="axis-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#475569"/>
    </marker>
  </defs>
</svg>`,

  // 4. Conductivity Cell & Wheatstone Bridge Setup
  conductivityCell: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="680" height="360" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <text x="340" y="30" font-size="16" font-weight="800" fill="#1e293b" text-anchor="middle">Conductivity Cell & AC Wheatstone Bridge Measurement</text>

  <!-- Left: Conductivity Cell Diagram -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="220" height="220" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="110" y="25" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">Conductivity Cell</text>
    
    <!-- Solution -->
    <rect x="10" y="40" width="200" height="170" fill="#dbeafe" opacity="0.6"/>
    <text x="110" y="200" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Electrolyte Solution (κ, Λ_m)</text>

    <!-- Two Platinized Pt Electrodes -->
    <rect x="40" y="70" width="16" height="90" fill="#1e293b" stroke="#0f172a" stroke-width="1"/>
    <rect x="164" y="70" width="16" height="90" fill="#1e293b" stroke="#0f172a" stroke-width="1"/>

    <!-- Distance l and Area A annotations -->
    <line x1="56" y1="115" x2="164" y2="115" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 3"/>
    <text x="110" y="110" font-size="11" font-weight="800" fill="#dc2626" text-anchor="middle">Distance = l</text>
    <text x="48" y="180" font-size="9" font-weight="700" fill="#0f172a" text-anchor="middle">Area = A</text>
    <text x="172" y="180" font-size="9" font-weight="700" fill="#0f172a" text-anchor="middle">Area = A</text>

    <!-- Cell Constant Formula Box -->
    <rect x="15" y="230" width="190" height="50" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <text x="110" y="250" font-size="11" font-weight="800" fill="#047857" text-anchor="middle">Cell Constant G* = l / A</text>
    <text x="110" y="268" font-size="10" font-weight="700" fill="#334155" text-anchor="middle">Unit: cm⁻¹ or m⁻¹  •  G* = R · κ</text>
  </g>

  <!-- Right: Wheatstone Bridge Circuit with AC Source -->
  <g transform="translate(320, 60)">
    <rect x="0" y="0" width="320" height="220" rx="12" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
    <text x="160" y="25" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">AC Wheatstone Bridge (No DC electrolysis!)</text>

    <!-- Bridge Diamond -->
    <polygon points="160,50 260,110 160,170 60,110" fill="none" stroke="#0284c7" stroke-width="2.5"/>

    <!-- Resistors on arms -->
    <!-- R1 (Variable) -->
    <rect x="85" y="65" width="30" height="16" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <text x="100" y="77" font-size="9" font-weight="800" fill="#854d0e" text-anchor="middle">R₁</text>

    <!-- R2 (Standard) -->
    <rect x="205" y="65" width="30" height="16" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
    <text x="220" y="77" font-size="9" font-weight="800" fill="#9a3412" text-anchor="middle">R₂</text>

    <!-- R3 -->
    <rect x="205" y="135" width="30" height="16" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
    <text x="220" y="147" font-size="9" font-weight="800" fill="#9a3412" text-anchor="middle">R₃</text>

    <!-- R4 / R_cell (Conductivity Cell) -->
    <rect x="85" y="135" width="30" height="16" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
    <text x="100" y="147" font-size="9" font-weight="800" fill="#15803d" text-anchor="middle">R_cell</text>

    <!-- Central Detector P (Headphone / Earphone / Oscilloscope) -->
    <line x1="160" y1="50" x2="160" y2="170" stroke="#9333ea" stroke-width="2"/>
    <circle cx="160" cy="110" r="14" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
    <text x="160" y="114" font-size="10" font-weight="800" fill="#7e22ce" text-anchor="middle">P</text>

    <!-- AC Oscillator (Audio Frequency 550 - 5000 Hz) -->
    <path d="M 60 110 L 20 110 L 20 200 L 160 200 L 160 170" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    <path d="M 260 110 L 300 110 L 300 200 L 160 200" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    <circle cx="160" cy="200" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
    <text x="160" y="204" font-size="11" font-weight="800" fill="#dc2626" text-anchor="middle">~</text>
    <text x="160" y="222" font-size="9" font-weight="700" fill="#dc2626" text-anchor="middle">AC Source (Audio Frequency)</text>

    <!-- Balanced Condition Formula Box -->
    <rect x="15" y="230" width="290" height="50" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <text x="160" y="250" font-size="11" font-weight="800" fill="#0369a1" text-anchor="middle">Balanced Condition: R_cell = (R₁ · R₃) / R₂</text>
    <text x="160" y="268" font-size="10" font-weight="700" fill="#334155" text-anchor="middle">Conductivity κ = (1 / R_cell) · (l / A) = G* / R_cell</text>
  </g>
</svg>`,

  // 5. Kohlrausch Plot: Molar Conductivity vs √c (Strong vs Weak Electrolytes)
  kohlrauschPlot: `<svg viewBox="0 0 680 370" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="680" height="370" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <text x="340" y="30" font-size="16" font-weight="800" fill="#1e293b" text-anchor="middle">Kohlrausch Law: Molar Conductivity (Λ_m) vs √Concentration (√c)</text>

  <!-- Axes -->
  <line x1="120" y1="300" x2="620" y2="300" stroke="#334155" stroke-width="2.5" marker-end="url(#axis-arrow-k)"/>
  <line x1="120" y1="300" x2="120" y2="50" stroke="#334155" stroke-width="2.5" marker-end="url(#axis-arrow-k)"/>
  <text x="625" y="305" font-size="12" font-weight="800" fill="#334155">√c / (mol/L)¹/² ➔</text>
  <text x="50" y="45" font-size="12" font-weight="800" fill="#334155">Λ_m (S cm² mol⁻¹)</text>

  <!-- Strong Electrolyte Curve (KCl): Linear with negative slope -A -->
  <!-- Extrapolated dashed part to y-axis -->
  <line x1="120" y1="100" x2="200" y2="120" stroke="#2563eb" stroke-width="3" stroke-dasharray="4 4"/>
  <circle cx="120" cy="100" r="5" fill="#2563eb"/>
  <text x="110" y="105" font-size="12" font-weight="800" fill="#2563eb" text-anchor="end">Λ°_m (KCl)</text>

  <!-- Solid line for strong electrolyte -->
  <line x1="200" y1="120" x2="580" y2="215" stroke="#2563eb" stroke-width="3.5"/>
  <text x="450" y="160" font-size="12" font-weight="800" fill="#2563eb">Strong Electrolyte (KCl): Λ_m = Λ°_m - A√c</text>
  <text x="450" y="178" font-size="10" font-weight="600" fill="#1e40af">(Debye-Hückel-Onsager Equation, slope = -A)</text>

  <!-- Weak Electrolyte Curve (CH3COOH): Steep rise near zero concentration -->
  <path d="M 580 270 Q 250 260 160 210 T 130 65" fill="none" stroke="#dc2626" stroke-width="3.5"/>
  <text x="210" y="130" font-size="12" font-weight="800" fill="#dc2626">Weak Electrolyte (CH₃COOH)</text>
  <text x="210" y="148" font-size="10" font-weight="600" fill="#991b1b">Cannot extrapolate to √c = 0!</text>

  <!-- Asymptotic arrow for weak electrolyte -->
  <text x="140" y="70" font-size="11" font-weight="800" fill="#dc2626">Curve becomes asymptotic to Y-axis</text>

  <!-- Kohlrausch Law Solution Box -->
  <rect x="70" y="320" width="540" height="40" rx="8" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/>
  <text x="340" y="344" font-size="11" font-weight="800" fill="#991b1b" text-anchor="middle">Kohlrausch's Law computes Λ°_m(CH₃COOH) indirectly: Λ°_m = λ°(H⁺) + λ°(CH₃COO⁻)</text>

  <defs>
    <marker id="axis-arrow-k" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#334155"/>
    </marker>
  </defs>
</svg>`,

  // 6. Electrolysis: Molten vs Aqueous NaCl (Products & Overpotential)
  electrolysisMoltenVsAqNaCl: `<svg viewBox="0 0 700 370" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="700" height="370" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <text x="350" y="30" font-size="16" font-weight="800" fill="#1e293b" text-anchor="middle">Electrolysis of NaCl: Molten NaCl vs Aqueous NaCl (Brine)</text>

  <!-- Left Side: Molten NaCl -->
  <g transform="translate(30, 55)">
    <rect x="0" y="0" width="300" height="290" rx="10" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
    <text x="150" y="25" font-size="13" font-weight="800" fill="#c2410c" text-anchor="middle">1. Molten NaCl (Fused Salt, No Water)</text>

    <rect x="20" y="45" width="260" height="110" rx="6" fill="#ffedd5" stroke="#fed7aa" stroke-width="1"/>
    <text x="150" y="65" font-size="11" font-weight="700" fill="#9a3412" text-anchor="middle">Ions Present: Na⁺ and Cl⁻ ONLY</text>
    
    <text x="30" y="95" font-size="11" font-weight="800" fill="#0f172a">Cathode (-):</text>
    <text x="115" y="95" font-size="11" font-weight="600" fill="#0f172a">Na⁺ + e⁻ → Na(l) [Molten metal]</text>
    
    <text x="30" y="125" font-size="11" font-weight="800" fill="#0f172a">Anode (+):</text>
    <text x="115" y="125" font-size="11" font-weight="600" fill="#0f172a">2Cl⁻ → Cl₂(g) + 2e⁻</text>

    <!-- Key Outcome -->
    <rect x="20" y="170" width="260" height="100" rx="6" fill="#ffffff" stroke="#ea580c" stroke-width="1.5"/>
    <text x="150" y="190" font-size="11" font-weight="800" fill="#ea580c" text-anchor="middle">Products of Molten NaCl Electrolysis:</text>
    <text x="40" y="215" font-size="11" font-weight="700" fill="#334155">✦ At Cathode: Metallic Sodium (Na)</text>
    <text x="40" y="235" font-size="11" font-weight="700" fill="#334155">✦ At Anode: Chlorine Gas (Cl₂)</text>
    <text x="40" y="255" font-size="10" font-weight="700" fill="#16a34a">No water ➔ No competition for discharge</text>
  </g>

  <!-- Right Side: Aqueous NaCl (Brine) -->
  <g transform="translate(370, 55)">
    <rect x="0" y="0" width="300" height="290" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <text x="150" y="25" font-size="13" font-weight="800" fill="#1d4ed8" text-anchor="middle">2. Aqueous NaCl (Brine Solution)</text>

    <rect x="20" y="45" width="260" height="110" rx="6" fill="#dbeafe" stroke="#bfdbfe" stroke-width="1"/>
    <text x="150" y="65" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Ions Present: Na⁺, H⁺, Cl⁻, OH⁻</text>
    
    <text x="30" y="95" font-size="11" font-weight="800" fill="#0f172a">Cathode (-):</text>
    <text x="115" y="95" font-size="11" font-weight="600" fill="#0f172a">2H₂O + 2e⁻ → H₂(g) + 2OH⁻</text>
    <text x="115" y="110" font-size="9" font-weight="700" fill="#2563eb">(E°_red of H₂O > E°_red of Na⁺)</text>
    
    <text x="30" y="132" font-size="11" font-weight="800" fill="#0f172a">Anode (+):</text>
    <text x="115" y="132" font-size="11" font-weight="600" fill="#0f172a">2Cl⁻ → Cl₂(g) + 2e⁻</text>
    <text x="115" y="147" font-size="9" font-weight="700" fill="#dc2626">(Preferred due to OVERPOTENTIAL of O₂!)</text>

    <!-- Key Outcome -->
    <rect x="20" y="170" width="260" height="100" rx="6" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
    <text x="150" y="190" font-size="11" font-weight="800" fill="#1d4ed8" text-anchor="middle">Products of Aqueous NaCl Electrolysis:</text>
    <text x="40" y="215" font-size="11" font-weight="700" fill="#334155">✦ At Cathode: Hydrogen Gas (H₂)</text>
    <text x="40" y="235" font-size="11" font-weight="700" fill="#334155">✦ At Anode: Chlorine Gas (Cl₂)</text>
    <text x="40" y="255" font-size="11" font-weight="800" fill="#7c3aed">✦ In Solution: NaOH (Alkaline pH > 7)</text>
  </g>
</svg>`,

  // 7. Lead Storage Battery (Discharging & Charging Reactions)
  leadStorageBattery: `<svg viewBox="0 0 680 370" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="680" height="370" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <text x="340" y="30" font-size="16" font-weight="800" fill="#1e293b" text-anchor="middle">Lead Storage Battery (Secondary Accumulator, 12V = 6 Cells × 2V)</text>

  <!-- Battery Container -->
  <rect x="50" y="60" width="580" height="130" rx="10" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
  
  <!-- Electrodes -->
  <!-- Anode (Spongy Lead) -->
  <rect x="90" y="80" width="30" height="90" fill="#64748b" stroke="#334155" stroke-width="2"/>
  <text x="105" y="75" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">Pb Anode (-)</text>
  <text x="105" y="130" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Pb(s)</text>

  <!-- Cathode (Grid of Lead packed with PbO2) -->
  <rect x="230" y="80" width="30" height="90" fill="#991b1b" stroke="#7f1d1d" stroke-width="2"/>
  <text x="245" y="75" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">PbO₂ Cathode (+)</text>
  <text x="245" y="130" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">PbO₂</text>

  <!-- Electrolyte: 38% H2SO4 -->
  <rect x="130" y="95" width="90" height="75" fill="#bae6fd" opacity="0.6"/>
  <text x="175" y="130" font-size="10" font-weight="800" fill="#0369a1" text-anchor="middle">38% H₂SO₄</text>
  <text x="175" y="145" font-size="9" font-weight="700" fill="#0369a1" text-anchor="middle">(d = 1.30 g/mL)</text>

  <!-- Key Discharging Characteristics Text -->
  <g transform="translate(300, 75)">
    <rect x="0" y="0" width="310" height="100" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="15" y="22" font-size="11" font-weight="800" fill="#dc2626">DISCHARGING PHENOMENON (NEET Must Know):</text>
    <text x="15" y="42" font-size="10" font-weight="600" fill="#334155">1. Both electrodes get coated with insoluble PbSO₄(s).</text>
    <text x="15" y="62" font-size="10" font-weight="600" fill="#334155">2. H₂SO₄ is consumed; water is formed.</text>
    <text x="15" y="82" font-size="10" font-weight="700" fill="#b91c1c">3. Density of H₂SO₄ drops below 1.20 g/mL (battery dead).</text>
  </g>

  <!-- Chemical Equations Panel -->
  <g transform="translate(50, 205)">
    <rect x="0" y="0" width="580" height="150" rx="10" fill="#f8fafc" stroke="#3b82f6" stroke-width="1.5"/>
    
    <text x="290" y="25" font-size="12" font-weight="800" fill="#1d4ed8" text-anchor="middle">COMPLETE OVERALL CELL EQUATION (Reversible Storage):</text>
    
    <text x="290" y="55" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">Pb(s) + PbO₂(s) + 2H₂SO₄(aq)  ⇄ (Discharge / Recharge) ⇄  2PbSO₄(s) + 2H₂O(l)</text>

    <!-- Detailed electrode breakdown -->
    <line x1="20" y1="75" x2="560" y2="75" stroke="#e2e8f0" stroke-width="1"/>
    
    <text x="30" y="98" font-size="10" font-weight="800" fill="#0f172a">Anode Discharge:</text>
    <text x="135" y="98" font-size="10" font-weight="600" fill="#334155">Pb(s) + SO₄²⁻(aq) → PbSO₄(s) + 2e⁻</text>

    <text x="30" y="120" font-size="10" font-weight="800" fill="#0f172a">Cathode Discharge:</text>
    <text x="135" y="120" font-size="10" font-weight="600" fill="#334155">PbO₂(s) + SO₄²⁻(aq) + 4H⁺(aq) + 2e⁻ → PbSO₄(s) + 2H₂O(l)</text>

    <text x="30" y="140" font-size="10" font-weight="800" fill="#16a34a">Recharging Action:</text>
    <text x="135" y="140" font-size="10" font-weight="700" fill="#15803d">Direct current (DC) forces reverse reaction: 2PbSO₄(s) + 2H₂O(l) → Pb(s) + PbO₂(s) + 2H₂SO₄(aq)</text>
  </g>
</svg>`,

  // 8. H2-O2 Fuel Cell Schematic
  fuelCellH2O2: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="680" height="360" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <text x="340" y="30" font-size="16" font-weight="800" fill="#1e293b" text-anchor="middle">Hydrogen-Oxygen (H₂-O₂) Fuel Cell (Apollo Spacecraft Power Source)</text>

  <!-- Central Fuel Cell Body -->
  <rect x="180" y="60" width="320" height="210" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>

  <!-- Porous Carbon Electrodes with Catalysts (Pt/Pd) -->
  <rect x="230" y="70" width="25" height="190" fill="#334155" stroke="#0f172a" stroke-width="1.5"/>
  <rect x="425" y="70" width="25" height="190" fill="#334155" stroke="#0f172a" stroke-width="1.5"/>
  <text x="242" y="275" font-size="9" font-weight="700" fill="#334155" text-anchor="middle">Porous C (Anode)</text>
  <text x="437" y="275" font-size="9" font-weight="700" fill="#334155" text-anchor="middle">Porous C (Cathode)</text>

  <!-- Central Electrolyte: Concentrated aqueous KOH/NaOH -->
  <rect x="255" y="70" width="170" height="190" fill="#fef08a" opacity="0.6"/>
  <text x="340" y="150" font-size="12" font-weight="800" fill="#854d0e" text-anchor="middle">Conc. Aqueous KOH</text>
  <text x="340" y="170" font-size="10" font-weight="700" fill="#854d0e" text-anchor="middle">(Electrolyte)</text>

  <!-- Gas Inlets & Outlets -->
  <!-- H2 inlet at left -->
  <path d="M 80 140 L 180 140" stroke="#0284c7" stroke-width="4" marker-end="url(#fuel-arrow)"/>
  <text x="130" y="125" font-size="12" font-weight="800" fill="#0284c7" text-anchor="middle">H₂(g) Fuel In</text>

  <!-- O2 inlet at right -->
  <path d="M 600 140 L 500 140" stroke="#dc2626" stroke-width="4" marker-end="url(#fuel-arrow-red)"/>
  <text x="550" y="125" font-size="12" font-weight="800" fill="#dc2626" text-anchor="middle">O₂(g) Oxidant In</text>

  <!-- Water vapor outlet at bottom -->
  <path d="M 340 260 L 340 300" stroke="#16a34a" stroke-width="4" marker-end="url(#fuel-arrow-green)"/>
  <text x="340" y="320" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">H₂O(g) Vapor Out (Drinking water for astronauts)</text>

  <!-- External Load / Electricity generation -->
  <polyline points="242,70 242,45 315,45" fill="none" stroke="#0f172a" stroke-width="2"/>
  <polyline points="365,45 437,45 437,70" fill="none" stroke="#0f172a" stroke-width="2"/>
  <circle cx="340" cy="45" r="16" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
  <text x="340" y="49" font-size="10" font-weight="800" fill="#d97706" text-anchor="middle">LOAD</text>

  <!-- Overall summary bar -->
  <rect x="50" y="325" width="580" height="28" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
  <text x="340" y="344" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle">Net: 2H₂(g) + O₂(g) → 2H₂O(l)  •  Efficiency ≈ 70% (vs ~40% for thermal plants)  •  Pollution-free</text>

  <defs>
    <marker id="fuel-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#0284c7"/>
    </marker>
    <marker id="fuel-arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#dc2626"/>
    </marker>
    <marker id="fuel-arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#16a34a"/>
    </marker>
  </defs>
</svg>`,

  // 9. Rusting of Iron (Electrochemical Mechanism)
  rustingCorrosionMechanism: `<svg viewBox="0 0 680 370" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="680" height="370" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <text x="340" y="30" font-size="16" font-weight="800" fill="#1e293b" text-anchor="middle">Electrochemical Mechanism of Rusting of Iron (Corrosion)</text>

  <!-- Iron Metal Substrate (Block at bottom) -->
  <rect x="60" y="180" width="560" height="120" rx="8" fill="#94a3b8" stroke="#475569" stroke-width="2.5"/>
  <text x="340" y="270" font-size="14" font-weight="800" fill="#1e293b" text-anchor="middle">Metallic Iron Surface [Fe(s)]</text>

  <!-- Water Droplet on Iron Surface -->
  <path d="M 160 180 Q 340 60 520 180 Z" fill="#93c5fd" opacity="0.6" stroke="#3b82f6" stroke-width="2"/>
  <text x="340" y="115" font-size="11" font-weight="800" fill="#1e40af" text-anchor="middle">Water Droplet with Dissolved CO₂ & O₂</text>
  <text x="340" y="132" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">(H₂CO₃ acidic electrolyte: H⁺ catalyst)</text>

  <!-- Anodic Site (Pit in iron) -->
  <circle cx="230" cy="180" r="14" fill="#dc2626" opacity="0.8"/>
  <text x="230" y="215" font-size="11" font-weight="800" fill="#991b1b" text-anchor="middle">Anode Site:</text>
  <text x="230" y="235" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">Fe(s) → Fe²⁺ + 2e⁻</text>
  <text x="230" y="250" font-size="9" font-weight="600" fill="#0f172a" text-anchor="middle">E°(Fe²⁺/Fe) = -0.44 V</text>

  <!-- Electron Migration through Iron metal -->
  <path d="M 250 190 Q 340 210 430 190" fill="none" stroke="#fbbf24" stroke-width="3" stroke-dasharray="4 4"/>
  <text x="340" y="215" font-size="10" font-weight="800" fill="#d97706" text-anchor="middle">e⁻ flow through Fe metal ➔</text>

  <!-- Cathodic Site (Edge of droplet where O2 concentration is highest) -->
  <circle cx="450" cy="180" r="14" fill="#16a34a" opacity="0.8"/>
  <text x="450" y="215" font-size="11" font-weight="800" fill="#166534" text-anchor="middle">Cathode Site:</text>
  <text x="450" y="235" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">O₂ + 4H⁺ + 4e⁻ → 2H₂O</text>
  <text x="450" y="250" font-size="9" font-weight="600" fill="#0f172a" text-anchor="middle">E° = +1.23 V</text>

  <!-- Fe2+ migration into water and Rust precipitation -->
  <path d="M 230 170 Q 340 140 370 145" fill="none" stroke="#ea580c" stroke-width="2" marker-end="url(#rust-arrow)"/>
  <rect x="300" y="145" width="160" height="30" rx="6" fill="#ea580c" stroke="#9a3412" stroke-width="1.5"/>
  <text x="380" y="165" font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle">Rust: Fe₂O₃ · xH₂O (Hydrated Fe(III) Oxide)</text>

  <!-- Prevention Methods Footnote -->
  <rect x="60" y="315" width="560" height="45" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
  <text x="340" y="333" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">Prevention Methods: 1. Barrier Protection (Paint/Oil)  •  2. Galvanization (Zn coating: E°_Zn = -0.76V vs Fe -0.44V)</text>
  <text x="340" y="350" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">3. Cathodic Protection (Sacrificial Mg or Zn blocks for underground pipelines)  •  4. Anti-rust Solutions (Alkaline Phosphate)</text>

  <defs>
    <marker id="rust-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#ea580c"/>
    </marker>
  </defs>
</svg>`
};

export const DANIELL_CELL_DIAGRAM = ELECTROCHEMISTRY_SVGS.daniellCell;
export const STANDARD_HYDROGEN_ELECTRODE_DIAGRAM = ELECTROCHEMISTRY_SVGS.sheElectrode;
export const NERNST_EQUATION_PLOT_DIAGRAM = ELECTROCHEMISTRY_SVGS.nernstConcentrationGraph;
export const CONDUCTIVITY_CELL_DIAGRAM = ELECTROCHEMISTRY_SVGS.conductivityCell;
export const KOHLRAUSCH_LAW_GRAPH_DIAGRAM = ELECTROCHEMISTRY_SVGS.kohlrauschPlot;
export const ELECTROLYSIS_CELL_DIAGRAM = ELECTROCHEMISTRY_SVGS.electrolysisMoltenVsAqNaCl;
export const LEAD_STORAGE_BATTERY_DIAGRAM = ELECTROCHEMISTRY_SVGS.leadStorageBattery;
export const H2_O2_FUEL_CELL_DIAGRAM = ELECTROCHEMISTRY_SVGS.fuelCellH2O2;
export const RUSTING_CORROSION_MECHANISM_DIAGRAM = ELECTROCHEMISTRY_SVGS.rustingCorrosionMechanism;
