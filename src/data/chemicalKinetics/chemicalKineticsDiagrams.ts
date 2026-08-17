export const CHEMICAL_KINETICS_SVGS = {
  // 1. Average vs Instantaneous Rate Plot (Concentration vs Time Curve)
  rateGraph: `<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="700" height="400" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="350" y="32" font-size="16" font-weight="800" fill="#0f172a" text-anchor="middle">Average Rate vs. Instantaneous Rate of Reaction</text>
  <text x="350" y="52" font-size="12" font-weight="600" fill="#64748b" text-anchor="middle">Reactant [R] Concentration vs Time Curve with Secant & Tangent</text>

  <!-- Axes -->
  <line x1="80" y1="340" x2="640" y2="340" stroke="#334155" stroke-width="2.5" marker-end="url(#arrow-dark)"/>
  <line x1="80" y1="340" x2="80" y2="70" stroke="#334155" stroke-width="2.5" marker-end="url(#arrow-dark)"/>
  <text x="645" y="345" font-size="12" font-weight="700" fill="#334155">Time (t)</text>
  <text x="75" y="65" font-size="12" font-weight="700" fill="#334155" text-anchor="end">Reactant [R]</text>

  <!-- Reactant Curve (Exponential Decay) -->
  <path d="M 80 100 Q 180 250, 600 325" fill="none" stroke="#2563eb" stroke-width="3.5"/>

  <!-- Points for Average Rate (t1, t2) -->
  <!-- t1 -->
  <line x1="160" y1="340" x2="160" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="80" y1="200" x2="160" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="160" cy="200" r="5" fill="#d97706"/>
  <text x="160" y="358" font-size="11" font-weight="700" fill="#d97706" text-anchor="middle">t₁</text>
  <text x="70" y="204" font-size="11" font-weight="700" fill="#d97706" text-anchor="end">[R]₁</text>

  <!-- t2 -->
  <line x1="380" y1="340" x2="380" y2="295" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="80" y1="295" x2="380" y2="295" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="380" cy="295" r="5" fill="#d97706"/>
  <text x="380" y="358" font-size="11" font-weight="700" fill="#d97706" text-anchor="middle">t₂</text>
  <text x="70" y="299" font-size="11" font-weight="700" fill="#d97706" text-anchor="end">[R]₂</text>

  <!-- Secant Line for Average Rate -->
  <line x1="100" y1="174" x2="440" y2="321" stroke="#d97706" stroke-width="2" stroke-dasharray="6 3"/>

  <!-- Instantaneous Rate at Point P (t = 240) -->
  <circle cx="240" cy="252" r="6" fill="#dc2626"/>
  <!-- Tangent Line at P -->
  <line x1="120" y1="160" x2="420" y2="390" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="240" y1="340" x2="240" y2="252" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="240" y="358" font-size="11" font-weight="800" fill="#dc2626" text-anchor="middle">t</text>

  <!-- Info Callout 1: Average Rate -->
  <rect x="420" y="80" width="250" height="75" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="430" y="100" font-size="12" font-weight="800" fill="#b45309">Average Rate (r_avg):</text>
  <text x="430" y="120" font-size="11" font-weight="700" fill="#92400e">r_avg = -Δ[R] / Δt = -([R]₂ - [R]₁) / (t₂ - t₁)</text>
  <text x="430" y="140" font-size="10" font-weight="600" fill="#b45309">Slope of Secant line joining (t₁, [R]₁) &amp; (t₂, [R]₂)</text>

  <!-- Info Callout 2: Instantaneous Rate -->
  <rect x="420" y="165" width="250" height="75" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="430" y="185" font-size="12" font-weight="800" fill="#b91c1c">Instantaneous Rate (r_inst):</text>
  <text x="430" y="205" font-size="11" font-weight="700" fill="#991b1b">r_inst = -d[R]/dt = - (Slope of Tangent at t)</text>
  <text x="430" y="225" font-size="10" font-weight="600" fill="#b91c1c">Evaluated as Δt → 0 at a single instant</text>

  <!-- Markers -->
  <defs>
    <marker id="arrow-dark" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155"/>
    </marker>
  </defs>
</svg>`,

  // 2. Integrated Rate Graphs Comparison (Zero Order vs First Order)
  integratedGraphs: `<svg viewBox="0 0 740 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto font-sans">
  <rect width="740" height="420" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="370" y="30" font-size="16" font-weight="800" fill="#0f172a" text-anchor="middle">Zero-Order vs First-Order: Graphical Master Dashboard</text>

  <!-- Panel 1: Zero Order [A] vs t -->
  <g transform="translate(30, 55)">
    <rect width="210" height="160" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="105" y="20" font-size="12" font-weight="800" fill="#0284c7" text-anchor="middle">Zero Order: [R] vs t</text>
    <line x1="30" y1="130" x2="190" y2="130" stroke="#475569" stroke-width="1.5"/>
    <line x1="30" y1="130" x2="30" y2="35" stroke="#475569" stroke-width="1.5"/>
    <!-- Line decreasing linearly -->
    <line x1="30" y1="45" x2="175" y2="130" stroke="#0284c7" stroke-width="2.5"/>
    <circle cx="30" cy="45" r="3.5" fill="#0284c7"/>
    <text x="35" y="42" font-size="10" font-weight="700" fill="#0369a1">[R]₀</text>
    <text x="180" y="142" font-size="9" font-weight="600" fill="#475569">t</text>
    <text x="105" y="75" font-size="10" font-weight="800" fill="#0369a1" text-anchor="middle">Slope = -k</text>
    <text x="105" y="150" font-size="9" font-weight="700" fill="#0369a1" text-anchor="middle">[R] = [R]₀ - kt</text>
  </g>

  <!-- Panel 2: First Order ln[R] vs t -->
  <g transform="translate(265, 55)">
    <rect width="210" height="160" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="105" y="20" font-size="12" font-weight="800" fill="#7c3aed" text-anchor="middle">First Order: ln[R] vs t</text>
    <line x1="30" y1="130" x2="190" y2="130" stroke="#475569" stroke-width="1.5"/>
    <line x1="30" y1="130" x2="30" y2="35" stroke="#475569" stroke-width="1.5"/>
    <!-- Line decreasing linearly -->
    <line x1="30" y1="45" x2="175" y2="130" stroke="#7c3aed" stroke-width="2.5"/>
    <circle cx="30" cy="45" r="3.5" fill="#7c3aed"/>
    <text x="35" y="42" font-size="10" font-weight="700" fill="#6d28d9">ln[R]₀</text>
    <text x="180" y="142" font-size="9" font-weight="600" fill="#475569">t</text>
    <text x="105" y="75" font-size="10" font-weight="800" fill="#6d28d9" text-anchor="middle">Slope = -k</text>
    <text x="105" y="150" font-size="9" font-weight="700" fill="#6d28d9" text-anchor="middle">ln[R] = ln[R]₀ - kt</text>
  </g>

  <!-- Panel 3: First Order log₁₀[R] vs t -->
  <g transform="translate(500, 55)">
    <rect width="210" height="160" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="105" y="20" font-size="12" font-weight="800" fill="#059669" text-anchor="middle">First Order: log₁₀[R] vs t</text>
    <line x1="30" y1="130" x2="190" y2="130" stroke="#475569" stroke-width="1.5"/>
    <line x1="30" y1="130" x2="30" y2="35" stroke="#475569" stroke-width="1.5"/>
    <line x1="30" y1="45" x2="175" y2="130" stroke="#059669" stroke-width="2.5"/>
    <circle cx="30" cy="45" r="3.5" fill="#059669"/>
    <text x="35" y="42" font-size="10" font-weight="700" fill="#047857">log[R]₀</text>
    <text x="180" y="142" font-size="9" font-weight="600" fill="#475569">t</text>
    <text x="105" y="75" font-size="10" font-weight="800" fill="#047857" text-anchor="middle">Slope = -k / 2.303</text>
    <text x="105" y="150" font-size="9" font-weight="700" fill="#047857" text-anchor="middle">log[R] = log[R]₀ - kt/2.303</text>
  </g>

  <!-- Panel 4: Half-life vs [R]₀ (Zero Order) -->
  <g transform="translate(30, 235)">
    <rect width="210" height="160" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="105" y="20" font-size="12" font-weight="800" fill="#0284c7" text-anchor="middle">Zero Order: t₁/₂ vs [R]₀</text>
    <line x1="30" y1="130" x2="190" y2="130" stroke="#475569" stroke-width="1.5"/>
    <line x1="30" y1="130" x2="30" y2="35" stroke="#475569" stroke-width="1.5"/>
    <!-- Line passing through origin -->
    <line x1="30" y1="130" x2="175" y2="45" stroke="#0284c7" stroke-width="2.5"/>
    <circle cx="30" cy="130" r="3.5" fill="#0284c7"/>
    <text x="180" y="142" font-size="9" font-weight="600" fill="#475569">[R]₀</text>
    <text x="25" y="42" font-size="9" font-weight="600" fill="#475569">t₁/₂</text>
    <text x="95" y="75" font-size="10" font-weight="800" fill="#0369a1" text-anchor="middle">Slope = 1 / (2k)</text>
    <text x="105" y="150" font-size="9" font-weight="700" fill="#0369a1" text-anchor="middle">t₁/₂ = [R]₀ / (2k) (Directly ∝)</text>
  </g>

  <!-- Panel 5: Half-life vs [R]₀ (First Order) -->
  <g transform="translate(265, 235)">
    <rect width="210" height="160" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="105" y="20" font-size="12" font-weight="800" fill="#7c3aed" text-anchor="middle">First Order: t₁/₂ vs [R]₀</text>
    <line x1="30" y1="130" x2="190" y2="130" stroke="#475569" stroke-width="1.5"/>
    <line x1="30" y1="130" x2="30" y2="35" stroke="#475569" stroke-width="1.5"/>
    <!-- Horizontal line -->
    <line x1="30" y1="75" x2="185" y2="75" stroke="#7c3aed" stroke-width="2.5"/>
    <text x="180" y="142" font-size="9" font-weight="600" fill="#475569">[R]₀</text>
    <text x="25" y="75" font-size="9" font-weight="600" fill="#475569">t₁/₂</text>
    <text x="105" y="60" font-size="10" font-weight="800" fill="#6d28d9" text-anchor="middle">Slope = 0 (Independent!)</text>
    <text x="105" y="150" font-size="9" font-weight="700" fill="#6d28d9" text-anchor="middle">t₁/₂ = 0.693 / k (Constant)</text>
  </g>

  <!-- Panel 6: Rate vs Concentration -->
  <g transform="translate(500, 235)">
    <rect width="210" height="160" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="105" y="20" font-size="12" font-weight="800" fill="#d97706" text-anchor="middle">Rate vs [R] (0 vs 1st Order)</text>
    <line x1="30" y1="130" x2="190" y2="130" stroke="#475569" stroke-width="1.5"/>
    <line x1="30" y1="130" x2="30" y2="35" stroke="#475569" stroke-width="1.5"/>
    <!-- Zero order horizontal line -->
    <line x1="30" y1="95" x2="185" y2="95" stroke="#0284c7" stroke-width="2" stroke-dasharray="4 2"/>
    <text x="185" y="90" font-size="9" font-weight="700" fill="#0284c7">n=0</text>
    <!-- First order direct line -->
    <line x1="30" y1="130" x2="175" y2="45" stroke="#7c3aed" stroke-width="2.5"/>
    <text x="180" y="45" font-size="9" font-weight="700" fill="#7c3aed">n=1</text>
    <text x="180" y="142" font-size="9" font-weight="600" fill="#475569">[R]</text>
    <text x="25" y="42" font-size="9" font-weight="600" fill="#475569">Rate</text>
    <text x="105" y="150" font-size="9" font-weight="700" fill="#b45309" text-anchor="middle">n=0: Rate = k | n=1: Rate ∝ [R]</text>
  </g>
</svg>`,

  // 3. Maxwell-Boltzmann Distribution at T and (T + 10 K)
  maxwellBoltzmann: `<svg viewBox="0 0 700 390" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="700" height="390" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="350" y="30" font-size="16" font-weight="800" fill="#0f172a" text-anchor="middle">Maxwell-Boltzmann Distribution: Effect of 10 °C Temperature Rise</text>
  <text x="350" y="50" font-size="12" font-weight="600" fill="#64748b" text-anchor="middle">Why reaction rate roughly doubles when temperature increases from T to (T + 10 K)</text>

  <!-- Axes -->
  <line x1="70" y1="330" x2="650" y2="330" stroke="#334155" stroke-width="2.5" marker-end="url(#arrow-dark)"/>
  <line x1="70" y1="330" x2="70" y2="70" stroke="#334155" stroke-width="2.5" marker-end="url(#arrow-dark)"/>
  <text x="655" y="335" font-size="12" font-weight="700" fill="#334155">Kinetic Energy</text>
  <text x="65" y="65" font-size="12" font-weight="700" fill="#334155" text-anchor="end">Fraction of Molecules (N_E / N_T)</text>

  <!-- Activation Energy Threshold Line -->
  <line x1="450" y1="330" x2="450" y2="90" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="450" y="80" font-size="12" font-weight="800" fill="#dc2626" text-anchor="middle">Activation Energy (Ea)</text>

  <!-- Shaded Area for T (Small Area) -->
  <path d="M 450 330 C 490 285, 540 310, 620 330 Z" fill="#93c5fd" opacity="0.6"/>

  <!-- Shaded Area for (T + 10) (Doubled Area) -->
  <path d="M 450 330 C 480 250, 540 280, 620 330 Z" fill="#fca5a5" opacity="0.5"/>

  <!-- Curve 1: Temperature T (Taller, shifted left) -->
  <path d="M 70 330 C 130 90, 200 90, 300 240 C 370 310, 450 325, 620 330" fill="none" stroke="#2563eb" stroke-width="3"/>
  <!-- Peak marker T -->
  <circle cx="165" cy="120" r="4" fill="#2563eb"/>
  <text x="165" y="110" font-size="11" font-weight="800" fill="#1d4ed8" text-anchor="middle">Peak at T</text>
  <text x="260" y="150" font-size="13" font-weight="800" fill="#2563eb">At Temperature T</text>

  <!-- Curve 2: Temperature (T + 10) (Flatter, broader, shifted right) -->
  <path d="M 70 330 C 140 160, 230 160, 330 250 C 400 290, 480 305, 620 330" fill="none" stroke="#ea580c" stroke-width="3"/>
  <!-- Peak marker T+10 -->
  <circle cx="185" cy="165" r="4" fill="#ea580c"/>
  <text x="185" y="185" font-size="11" font-weight="800" fill="#c2410c" text-anchor="middle">Peak at (T + 10)</text>
  <text x="330" y="210" font-size="13" font-weight="800" fill="#ea580c">At (T + 10 K)</text>

  <!-- Explanation Legend Box -->
  <rect x="70" y="235" width="220" height="85" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="80" y="253" font-size="11" font-weight="800" fill="#0f172a">Key NCERT Observations:</text>
  <text x="80" y="270" font-size="10" font-weight="600" fill="#475569">• Peak shifts right &amp; downwards</text>
  <text x="80" y="287" font-size="10" font-weight="600" fill="#475569">• Total area under curve = constant</text>
  <text x="80" y="304" font-size="10" font-weight="700" fill="#dc2626">• Shaded area (Energy ≥ Ea) DOUBLES</text>

  <!-- Arrow pointing to shaded area -->
  <text x="535" y="270" font-size="11" font-weight="800" fill="#dc2626" text-anchor="middle">Area ≈ 2 × (Area at T)</text>
  <text x="535" y="288" font-size="10" font-weight="600" fill="#991b1b" text-anchor="middle">Fraction of energetic molecules doubles</text>
</svg>`,

  // 4. Potential Energy Reaction Coordinate (Catalyzed vs Uncatalyzed)
  potentialEnergyProfile: `<svg viewBox="0 0 720 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="720" height="400" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="360" y="30" font-size="16" font-weight="800" fill="#0f172a" text-anchor="middle">Potential Energy Profile: Uncatalyzed vs. Catalyzed Pathway</text>
  <text x="360" y="50" font-size="12" font-weight="600" fill="#64748b" text-anchor="middle">Exothermic Reaction: Activation Energy (Ea), Threshold Energy, and Enthalpy of Reaction (ΔH)</text>

  <!-- Axes -->
  <line x1="70" y1="340" x2="660" y2="340" stroke="#334155" stroke-width="2.5" marker-end="url(#arrow-dark)"/>
  <line x1="70" y1="340" x2="70" y2="70" stroke="#334155" stroke-width="2.5" marker-end="url(#arrow-dark)"/>
  <text x="665" y="345" font-size="12" font-weight="700" fill="#334155">Reaction Coordinate</text>
  <text x="65" y="65" font-size="12" font-weight="700" fill="#334155" text-anchor="end">Potential Energy</text>

  <!-- Reactant Level (E_R) -->
  <line x1="70" y1="230" x2="200" y2="230" stroke="#2563eb" stroke-width="3"/>
  <text x="135" y="222" font-size="12" font-weight="800" fill="#1d4ed8" text-anchor="middle">Reactants (R)</text>

  <!-- Product Level (E_P) -->
  <line x1="530" y1="290" x2="650" y2="290" stroke="#16a34a" stroke-width="3"/>
  <text x="590" y="282" font-size="12" font-weight="800" fill="#15803d" text-anchor="middle">Products (P)</text>

  <!-- Reactant baseline guide across -->
  <line x1="200" y1="230" x2="530" y2="230" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 3"/>
  <!-- Product baseline guide -->
  <line x1="365" y1="290" x2="530" y2="290" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 3"/>

  <!-- Uncatalyzed Curve (High Peak) -->
  <path d="M 200 230 C 260 230, 310 90, 365 90 C 420 90, 470 290, 530 290" fill="none" stroke="#dc2626" stroke-width="3.5"/>
  <circle cx="365" cy="90" r="5" fill="#dc2626"/>
  <text x="365" y="75" font-size="11" font-weight="800" fill="#b91c1c" text-anchor="middle">Transition State [X]‡ (Uncatalyzed)</text>

  <!-- Catalyzed Curve (Lower Peak) -->
  <path d="M 200 230 C 260 230, 310 155, 365 155 C 420 155, 470 290, 530 290" fill="none" stroke="#059669" stroke-width="3" stroke-dasharray="6 3"/>
  <circle cx="365" cy="155" r="5" fill="#059669"/>
  <text x="365" y="145" font-size="11" font-weight="800" fill="#047857" text-anchor="middle">Transition State (Catalyzed)</text>

  <!-- Ea (Uncatalyzed) Arrow -->
  <line x1="290" y1="230" x2="290" y2="95" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)" marker-start="url(#arrow-red)"/>
  <text x="280" y="165" font-size="11" font-weight="800" fill="#b91c1c" text-anchor="end">Ea (uncatalyzed)</text>

  <!-- Ea (Catalyzed) Arrow -->
  <line x1="440" y1="230" x2="440" y2="160" stroke="#059669" stroke-width="2" marker-end="url(#arrow-green)" marker-start="url(#arrow-green)"/>
  <text x="450" y="195" font-size="11" font-weight="800" fill="#047857">Ea' (catalyzed)</text>

  <!-- Delta H Arrow (Reactants to Products) -->
  <line x1="505" y1="230" x2="505" y2="290" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#arrow-purple)" marker-start="url(#arrow-purple)"/>
  <text x="515" y="263" font-size="11" font-weight="800" fill="#6d28d9">ΔH &lt; 0 (Exothermic)</text>

  <!-- Key Notes Box -->
  <rect x="75" y="90" width="180" height="75" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="85" y="110" font-size="10" font-weight="800" fill="#0f172a">Catalyst Facts (NEET):</text>
  <text x="85" y="126" font-size="9" font-weight="600" fill="#475569">• Lowers Ea(fwd) &amp; Ea(bwd) equally</text>
  <text x="85" y="142" font-size="9" font-weight="600" fill="#475569">• Leaves ΔH, ΔG, and Keq UNCHANGED</text>
  <text x="85" y="158" font-size="9" font-weight="700" fill="#059669">• Provides alternate faster pathway</text>

  <!-- Markers -->
  <defs>
    <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
    </marker>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/>
    </marker>
    <marker id="arrow-purple" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#7c3aed"/>
    </marker>
  </defs>
</svg>`,

  // 5. Arrhenius Plot (log10 k vs 1/T and ln k vs 1/T)
  arrheniusPlot: `<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="700" height="380" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="350" y="32" font-size="16" font-weight="800" fill="#0f172a" text-anchor="middle">Arrhenius Equation Plots: ln k vs 1/T and log₁₀ k vs 1/T</text>

  <!-- Left Panel: ln k vs 1/T -->
  <g transform="translate(40, 60)">
    <rect width="280" height="280" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="140" y="25" font-size="13" font-weight="800" fill="#2563eb" text-anchor="middle">Natural Log Form: ln k vs 1/T</text>
    <line x1="45" y1="240" x2="250" y2="240" stroke="#475569" stroke-width="2"/>
    <line x1="45" y1="240" x2="45" y2="45" stroke="#475569" stroke-width="2"/>
    <text x="245" y="258" font-size="11" font-weight="700" fill="#475569">1 / T (K⁻¹)</text>
    <text x="40" y="45" font-size="11" font-weight="700" fill="#475569" text-anchor="end">ln k</text>
    
    <!-- Straight line with negative slope -->
    <line x1="45" y1="70" x2="235" y2="215" stroke="#2563eb" stroke-width="3"/>
    <circle cx="45" cy="70" r="4.5" fill="#2563eb"/>
    <text x="55" y="65" font-size="11" font-weight="800" fill="#1d4ed8">Intercept = ln A</text>
    
    <rect x="75" y="125" width="150" height="45" rx="6" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
    <text x="150" y="145" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">Slope = -Ea / R</text>
    <text x="150" y="160" font-size="10" font-weight="600" fill="#3b82f6" text-anchor="middle">ln k = ln A - (Ea/R)(1/T)</text>
  </g>

  <!-- Right Panel: log10 k vs 1/T -->
  <g transform="translate(380, 60)">
    <rect width="280" height="280" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="140" y="25" font-size="13" font-weight="800" fill="#7c3aed" text-anchor="middle">Common Log Form: log₁₀ k vs 1/T</text>
    <line x1="45" y1="240" x2="250" y2="240" stroke="#475569" stroke-width="2"/>
    <line x1="45" y1="240" x2="45" y2="45" stroke="#475569" stroke-width="2"/>
    <text x="245" y="258" font-size="11" font-weight="700" fill="#475569">1 / T (K⁻¹)</text>
    <text x="40" y="45" font-size="11" font-weight="700" fill="#475569" text-anchor="end">log₁₀ k</text>
    
    <!-- Straight line with negative slope -->
    <line x1="45" y1="70" x2="235" y2="215" stroke="#7c3aed" stroke-width="3"/>
    <circle cx="45" cy="70" r="4.5" fill="#7c3aed"/>
    <text x="55" y="65" font-size="11" font-weight="800" fill="#6d28d9">Intercept = log₁₀ A</text>
    
    <rect x="65" y="125" width="170" height="45" rx="6" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1"/>
    <text x="150" y="145" font-size="12" font-weight="800" fill="#5b21b6" text-anchor="middle">Slope = -Ea / (2.303 R)</text>
    <text x="150" y="160" font-size="10" font-weight="600" fill="#7c3aed" text-anchor="middle">log k = log A - (Ea/2.303R)(1/T)</text>
  </g>
</svg>`
};
