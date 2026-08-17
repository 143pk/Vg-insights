// Comprehensive educational SVGs and graphs for Chapter 5: Solutions (NEET UG 2026)

export const SOLUTIONS_SVGS = {
  // 1. Solution Concept & Binary Homogeneous Mixture
  solutionConcept: `<svg viewBox="0 0 800 240" class="w-full h-auto max-h-60" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="240" rx="16" fill="#0f172a" />
    <!-- Solute Box -->
    <g transform="translate(120, 120)">
      <rect x="-80" y="-70" width="160" height="140" rx="12" fill="#1e293b" stroke="#f43f5e" stroke-width="2.5" />
      <text x="0" y="-45" text-anchor="middle" fill="#fb7185" font-size="14" font-weight="extrabold">SOLUTE (Dispersed)</text>
      <circle cx="-35" cy="-10" r="10" fill="#f43f5e" />
      <circle cx="0" cy="-15" r="10" fill="#f43f5e" />
      <circle cx="35" cy="-5" r="10" fill="#f43f5e" />
      <circle cx="-20" cy="20" r="10" fill="#f43f5e" />
      <circle cx="20" cy="25" r="10" fill="#f43f5e" />
      <text x="0" y="55" text-anchor="middle" fill="#94a3b8" font-size="11">Lesser component (e.g., NaCl, Glucose)</text>
    </g>
    <!-- Plus Sign -->
    <text x="240" y="128" text-anchor="middle" fill="#38bdf8" font-size="32" font-weight="bold">+</text>
    <!-- Solvent Box -->
    <g transform="translate(360, 120)">
      <rect x="-80" y="-70" width="160" height="140" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5" />
      <text x="0" y="-45" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="extrabold">SOLVENT (Medium)</text>
      <path d="M -50 0 Q -25 -15 0 0 T 50 0" stroke="#0284c7" stroke-width="4" fill="none" opacity="0.7"/>
      <path d="M -50 20 Q -25 5 0 20 T 50 20" stroke="#0284c7" stroke-width="4" fill="none" opacity="0.7"/>
      <text x="0" y="55" text-anchor="middle" fill="#94a3b8" font-size="11">Major component (e.g., Water)</text>
    </g>
    <!-- Arrow -->
    <g transform="translate(480, 120)">
      <path d="M -20 0 L 20 0" stroke="#10b981" stroke-width="3" />
      <polygon points="20,-6 30,0 20,6" fill="#10b981" />
      <text x="5" y="-15" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">Mixing</text>
    </g>
    <!-- Solution Box -->
    <g transform="translate(640, 120)">
      <rect x="-110" y="-80" width="220" height="160" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="3" />
      <text x="0" y="-55" text-anchor="middle" fill="#34d399" font-size="15" font-weight="extrabold">HOMOGENEOUS SOLUTION</text>
      <!-- Solute particles uniformly dispersed in solvent -->
      <path d="M -80 -10 Q -40 -25 0 -10 T 80 -10" stroke="#0284c7" stroke-width="3" fill="none" opacity="0.5"/>
      <path d="M -80 15 Q -40 0 0 15 T 80 15" stroke="#0284c7" stroke-width="3" fill="none" opacity="0.5"/>
      <circle cx="-50" cy="-10" r="7" fill="#f43f5e" />
      <circle cx="0" cy="-5" r="7" fill="#f43f5e" />
      <circle cx="50" cy="-12" r="7" fill="#f43f5e" />
      <circle cx="-25" cy="18" r="7" fill="#f43f5e" />
      <circle cx="30" cy="22" r="7" fill="#f43f5e" />
      <text x="0" y="50" text-anchor="middle" fill="#e2e8f0" font-size="11" font-weight="bold">Single Phase (Particle Size &lt; 1 nm)</text>
      <text x="0" y="68" text-anchor="middle" fill="#94a3b8" font-size="10">Properties uniform throughout</text>
    </g>
  </svg>`,

  // 2. Pure Solvent vs Solution Vapour Pressure
  pureVsSolutionVapourPressure: `<svg viewBox="0 0 800 280" class="w-full h-auto max-h-72" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="280" rx="16" fill="#0f172a" />
    <!-- Left: Pure Solvent -->
    <g transform="translate(220, 140)">
      <!-- Container -->
      <rect x="-140" y="-100" width="280" height="200" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
      <!-- Liquid Level -->
      <rect x="-138" y="0" width="276" height="98" rx="6" fill="#0284c7" opacity="0.3" />
      <!-- Surface Solvent Particles (100% volatile) -->
      <circle cx="-100" cy="0" r="8" fill="#38bdf8" />
      <circle cx="-60" cy="0" r="8" fill="#38bdf8" />
      <circle cx="-20" cy="0" r="8" fill="#38bdf8" />
      <circle cx="20" cy="0" r="8" fill="#38bdf8" />
      <circle cx="60" cy="0" r="8" fill="#38bdf8" />
      <circle cx="100" cy="0" r="8" fill="#38bdf8" />
      <!-- Evaporating Vapour Molecules -->
      <circle cx="-80" cy="-40" r="6" fill="#38bdf8" />
      <circle cx="-30" cy="-60" r="6" fill="#38bdf8" />
      <circle cx="10" cy="-45" r="6" fill="#38bdf8" />
      <circle cx="60" cy="-70" r="6" fill="#38bdf8" />
      <circle cx="-50" cy="-80" r="6" fill="#38bdf8" />
      <circle cx="85" cy="-35" r="6" fill="#38bdf8" />
      <!-- Arrows pointing up -->
      <path d="M -80 -15 L -80 -30 M 0 -15 L 0 -30 M 70 -15 L 70 -30" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,2" />
      <text x="0" y="-115" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="extrabold">PURE SOLVENT (p₁°)</text>
      <text x="0" y="120" text-anchor="middle" fill="#94a3b8" font-size="12">100% surface covered by volatile solvent molecules</text>
      <text x="0" y="135" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">Higher Rate of Evaporation → High Vapour Pressure</text>
    </g>

    <!-- Right: Solution with Non-Volatile Solute -->
    <g transform="translate(580, 140)">
      <!-- Container -->
      <rect x="-140" y="-100" width="280" height="200" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="2" />
      <!-- Liquid Level -->
      <rect x="-138" y="0" width="276" height="98" rx="6" fill="#0284c7" opacity="0.3" />
      <!-- Surface Particles (Solvent + Non-volatile Solute) -->
      <circle cx="-100" cy="0" r="8" fill="#38bdf8" />
      <circle cx="-60" cy="0" r="8" fill="#f43f5e" />
      <circle cx="-20" cy="0" r="8" fill="#38bdf8" />
      <circle cx="20" cy="0" r="8" fill="#f43f5e" />
      <circle cx="60" cy="0" r="8" fill="#38bdf8" />
      <circle cx="100" cy="0" r="8" fill="#f43f5e" />
      <!-- Bulk Solute -->
      <circle cx="-40" cy="40" r="8" fill="#f43f5e" />
      <circle cx="40" cy="50" r="8" fill="#f43f5e" />
      <!-- Lesser Evaporating Vapour Molecules -->
      <circle cx="-90" cy="-45" r="6" fill="#38bdf8" />
      <circle cx="-15" cy="-55" r="6" fill="#38bdf8" />
      <circle cx="65" cy="-40" r="6" fill="#38bdf8" />
      <!-- Arrows pointing up -->
      <path d="M -90 -15 L -90 -30 M -15 -15 L -15 -30 M 65 -15 L 65 -30" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,2" />
      <text x="0" y="-115" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="extrabold">SOLUTION (p₁ &lt; p₁°)</text>
      <text x="0" y="120" text-anchor="middle" fill="#94a3b8" font-size="12">Solute particles block part of the evaporating surface</text>
      <text x="0" y="135" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">Lower Rate of Evaporation → Lower Vapour Pressure</text>
    </g>
  </svg>`,

  // 3. Raoult's Law Binary Volatile Mixture Mechanics
  raoultsLawBinary: `<svg viewBox="0 0 800 240" class="w-full h-auto max-h-60" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="240" rx="16" fill="#0f172a" />
    <g transform="translate(400, 120)">
      <rect x="-360" y="-95" width="720" height="190" rx="12" fill="#1e293b" stroke="#6366f1" stroke-width="2" />
      <text x="0" y="-65" text-anchor="middle" fill="#a5b4fc" font-size="16" font-weight="extrabold">RAOULT'S LAW FOR BINARY VOLATILE LIQUIDS (A + B)</text>
      
      <!-- Component A -->
      <g transform="translate(-200, 10)">
        <rect x="-120" y="-45" width="240" height="90" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
        <text x="0" y="-20" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">Component A</text>
        <text x="0" y="5" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="extrabold">p_A = x_A · p_A°</text>
        <text x="0" y="28" text-anchor="middle" fill="#94a3b8" font-size="11">Partial Pressure of A ∝ Mole fraction of A</text>
      </g>
      
      <!-- Plus Sign -->
      <text x="0" y="18" text-anchor="middle" fill="#f59e0b" font-size="28" font-weight="bold">+</text>

      <!-- Component B -->
      <g transform="translate(200, 10)">
        <rect x="-120" y="-45" width="240" height="90" rx="10" fill="#0f172a" stroke="#ec4899" stroke-width="1.5" />
        <text x="0" y="-20" text-anchor="middle" fill="#f472b6" font-size="14" font-weight="bold">Component B</text>
        <text x="0" y="5" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="extrabold">p_B = x_B · p_B°</text>
        <text x="0" y="28" text-anchor="middle" fill="#94a3b8" font-size="11">Partial Pressure of B ∝ Mole fraction of B</text>
      </g>

      <text x="0" y="80" text-anchor="middle" fill="#34d399" font-size="14" font-weight="extrabold">Dalton's Total Pressure: p_total = p_A + p_B = x_A·p_A° + x_B·p_B° = p_A° + x_B·(p_B° - p_A°)</text>
    </g>
  </svg>`,

  // 4. Ideal Vapour Pressure - Composition Graph
  idealVpGraph: `<svg viewBox="0 0 800 360" class="w-full h-auto max-h-96" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="360" rx="16" fill="#0f172a" />
    <text x="400" y="32" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="extrabold">IDEAL SOLUTION: VAPOUR PRESSURE vs LIQUID COMPOSITION</text>
    <text x="400" y="52" text-anchor="middle" fill="#94a3b8" font-size="12">Obeys Raoult's Law over entire range: ΔH_mix = 0, ΔV_mix = 0, F_A-B = F_A-A = F_B-B</text>

    <!-- Graph Frame -->
    <g transform="translate(180, 70)">
      <!-- Background Grid -->
      <rect x="0" y="0" width="440" height="220" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
      
      <!-- Linear Plot Lines -->
      <!-- Component 1: p1 from (0,220) to (440, 80) -> p1° = 140px up -->
      <line x1="0" y1="220" x2="440" y2="80" stroke="#38bdf8" stroke-width="3" />
      <!-- Component 2: p2 from (0, 40) to (440, 220) -> p2° = 180px up -->
      <line x1="0" y1="40" x2="440" y2="220" stroke="#f43f5e" stroke-width="3" />
      <!-- Total Pressure: p_total from (0, 40) to (440, 80) -->
      <line x1="0" y1="40" x2="440" y2="80" stroke="#10b981" stroke-width="3.5" />

      <!-- Labels on graph -->
      <circle cx="0" cy="40" r="5" fill="#f43f5e" />
      <text x="-12" y="45" text-anchor="end" fill="#f43f5e" font-size="13" font-weight="bold">p₂°</text>

      <circle cx="440" cy="80" r="5" fill="#38bdf8" />
      <text x="452" y="85" text-anchor="start" fill="#38bdf8" font-size="13" font-weight="bold">p₁°</text>

      <!-- Curve identification text -->
      <text x="220" y="45" text-anchor="middle" fill="#10b981" font-size="13" font-weight="extrabold">p_total = p₁ + p₂ (Straight Line)</text>
      <text x="320" y="130" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">p₁ = x₁ p₁°</text>
      <text x="120" y="150" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">p₂ = x₂ p₂°</text>

      <!-- Axes Labels -->
      <!-- Left Y Axis -->
      <text x="-25" y="115" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="bold" transform="rotate(-90 -25 115)">Vapour Pressure →</text>
      <!-- Right Y Axis -->
      <text x="470" y="115" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="bold" transform="rotate(90 470 115)">Vapour Pressure →</text>

      <!-- X Axis ticks & Labels -->
      <line x1="0" y1="220" x2="0" y2="228" stroke="#cbd5e1" stroke-width="1.5" />
      <line x1="440" y1="220" x2="440" y2="228" stroke="#cbd5e1" stroke-width="1.5" />
      
      <text x="0" y="245" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">x₁ = 0</text>
      <text x="0" y="260" text-anchor="middle" fill="#f472b6" font-size="12" font-weight="bold">x₂ = 1</text>
      <text x="0" y="275" text-anchor="middle" fill="#94a3b8" font-size="10">(Pure 2)</text>

      <text x="220" y="255" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">Mole Fraction (x) →</text>

      <text x="440" y="245" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">x₁ = 1</text>
      <text x="440" y="260" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">x₂ = 0</text>
      <text x="440" y="275" text-anchor="middle" fill="#94a3b8" font-size="10">(Pure 1)</text>
    </g>
  </svg>`,

  // 5. Positive Deviation VP-Composition Graph & Minimum Boiling Azeotrope
  positiveDeviationGraph: `<svg viewBox="0 0 800 360" class="w-full h-auto max-h-96" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="360" rx="16" fill="#0f172a" />
    <text x="400" y="30" text-anchor="middle" fill="#f59e0b" font-size="16" font-weight="extrabold">POSITIVE DEVIATION FROM RAOULT'S LAW</text>
    <text x="400" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">A-B interactions WEAKER than A-A/B-B → ΔH_mix &gt; 0, ΔV_mix &gt; 0 → High VP, Forms Min-Boiling Azeotrope</text>

    <!-- Graph Frame -->
    <g transform="translate(180, 70)">
      <rect x="0" y="0" width="440" height="220" fill="#1e293b" stroke="#475569" stroke-width="1.5" />

      <!-- Raoult's Ideal Dotted Lines -->
      <line x1="0" y1="220" x2="440" y2="80" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4" />
      <line x1="0" y1="60" x2="440" y2="220" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4" />
      <line x1="0" y1="60" x2="440" y2="80" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4" />

      <!-- Actual Curves bowing UPWARD -->
      <!-- p1 curve -->
      <path d="M 0 220 Q 260 110 440 80" stroke="#38bdf8" stroke-width="3" fill="none" />
      <!-- p2 curve -->
      <path d="M 0 60 Q 180 110 440 220" stroke="#f43f5e" stroke-width="3" fill="none" />
      <!-- Total Pressure Curve with Maximum -->
      <path d="M 0 60 Q 200 -20 440 80" stroke="#f59e0b" stroke-width="3.5" fill="none" />

      <!-- Azeotrope Maximum Peak Marker -->
      <circle cx="210" cy="18" r="6" fill="#f59e0b" stroke="#ffffff" stroke-width="2" />
      <text x="210" y="-3" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="extrabold">Max VP (Min. Boiling Azeotrope)</text>
      <line x1="210" y1="24" x2="210" y2="220" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2,2" />

      <!-- Labels -->
      <circle cx="0" cy="60" r="4" fill="#f43f5e" />
      <text x="-12" y="65" text-anchor="end" fill="#f43f5e" font-size="12" font-weight="bold">p₂°</text>
      <circle cx="440" cy="80" r="4" fill="#38bdf8" />
      <text x="452" y="85" text-anchor="start" fill="#38bdf8" font-size="12" font-weight="bold">p₁°</text>

      <text x="340" y="110" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">p₁ &gt; x₁ p₁°</text>
      <text x="100" y="110" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="bold">p₂ &gt; x₂ p₂°</text>
      <text x="320" y="30" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">p_total &gt; (p₁ + p₂)_ideal</text>

      <!-- Bottom X Axis -->
      <text x="0" y="245" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">x₁ = 0, x₂ = 1</text>
      <text x="220" y="255" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">Mole Fraction (x) →</text>
      <text x="440" y="245" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">x₁ = 1, x₂ = 0</text>
    </g>
  </svg>`,

  // 6. Negative Deviation VP-Composition Graph & Maximum Boiling Azeotrope
  negativeDeviationGraph: `<svg viewBox="0 0 800 360" class="w-full h-auto max-h-96" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="360" rx="16" fill="#0f172a" />
    <text x="400" y="30" text-anchor="middle" fill="#ec4899" font-size="16" font-weight="extrabold">NEGATIVE DEVIATION FROM RAOULT'S LAW</text>
    <text x="400" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">A-B interactions STRONGER than A-A/B-B → ΔH_mix &lt; 0, ΔV_mix &lt; 0 → Low VP, Forms Max-Boiling Azeotrope</text>

    <!-- Graph Frame -->
    <g transform="translate(180, 70)">
      <rect x="0" y="0" width="440" height="220" fill="#1e293b" stroke="#475569" stroke-width="1.5" />

      <!-- Raoult's Ideal Dotted Lines -->
      <line x1="0" y1="220" x2="440" y2="60" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4" />
      <line x1="0" y1="40" x2="440" y2="220" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4" />
      <line x1="0" y1="40" x2="440" y2="60" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4" />

      <!-- Actual Curves bowing DOWNWARD -->
      <!-- p1 curve -->
      <path d="M 0 220 Q 200 190 440 60" stroke="#38bdf8" stroke-width="3" fill="none" />
      <!-- p2 curve -->
      <path d="M 0 40 Q 240 190 440 220" stroke="#f43f5e" stroke-width="3" fill="none" />
      <!-- Total Pressure Curve with Minimum -->
      <path d="M 0 40 Q 220 170 440 60" stroke="#ec4899" stroke-width="3.5" fill="none" />

      <!-- Azeotrope Minimum Dip Marker -->
      <circle cx="220" cy="115" r="6" fill="#ec4899" stroke="#ffffff" stroke-width="2" />
      <text x="220" y="145" text-anchor="middle" fill="#f472b6" font-size="12" font-weight="extrabold">Min VP (Max. Boiling Azeotrope)</text>
      <line x1="220" y1="115" x2="220" y2="220" stroke="#ec4899" stroke-width="1" stroke-dasharray="2,2" />

      <!-- Labels -->
      <circle cx="0" cy="40" r="4" fill="#f43f5e" />
      <text x="-12" y="45" text-anchor="end" fill="#f43f5e" font-size="12" font-weight="bold">p₂°</text>
      <circle cx="440" cy="60" r="4" fill="#38bdf8" />
      <text x="452" y="65" text-anchor="start" fill="#38bdf8" font-size="12" font-weight="bold">p₁°</text>

      <text x="340" y="160" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">p₁ &lt; x₁ p₁°</text>
      <text x="100" y="160" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="bold">p₂ &lt; x₂ p₂°</text>
      <text x="220" y="25" text-anchor="middle" fill="#f472b6" font-size="12" font-weight="bold">p_total &lt; (p₁ + p₂)_ideal</text>

      <!-- Bottom X Axis -->
      <text x="0" y="245" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">x₁ = 0, x₂ = 1</text>
      <text x="220" y="255" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">Mole Fraction (x) →</text>
      <text x="440" y="245" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">x₁ = 1, x₂ = 0</text>
    </g>
  </svg>`,

  // 7. Osmosis & Semipermeable Membrane Apparatus
  osmosisApparatus: `<svg viewBox="0 0 800 280" class="w-full h-auto max-h-72" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="280" rx="16" fill="#0f172a" />
    <!-- U-Tube Container -->
    <g transform="translate(400, 140)">
      <!-- Left Chamber: Pure Solvent -->
      <path d="M -220 -80 L -220 80 Q -220 100 -180 100 L -20 100 L -20 -80" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5" />
      <rect x="-218" y="-10" width="196" height="98" fill="#0284c7" opacity="0.3" />
      <text x="-120" y="-95" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="extrabold">PURE SOLVENT (Dilute)</text>
      <text x="-120" y="30" text-anchor="middle" fill="#94a3b8" font-size="12">High Chemical Potential of Solvent</text>

      <!-- Center Semipermeable Membrane (SPM) -->
      <rect x="-6" y="-80" width="12" height="180" fill="#f59e0b" opacity="0.85" rx="3" />
      <text x="0" y="118" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="extrabold">SPM (Semipermeable Membrane)</text>
      <text x="0" y="132" text-anchor="middle" fill="#94a3b8" font-size="10">Permeable ONLY to solvent molecules</text>

      <!-- Right Chamber: Solution with Solute -->
      <path d="M 20 -80 L 20 100 L 180 100 Q 220 100 220 80 L 220 -80" fill="#1e293b" stroke="#10b981" stroke-width="2.5" />
      <rect x="22" y="-50" width="196" height="138" fill="#0284c7" opacity="0.3" />
      <!-- Solute particles in Right Chamber -->
      <circle cx="60" cy="0" r="7" fill="#f43f5e" />
      <circle cx="120" cy="-20" r="7" fill="#f43f5e" />
      <circle cx="160" cy="20" r="7" fill="#f43f5e" />
      <circle cx="90" cy="50" r="7" fill="#f43f5e" />
      <circle cx="150" cy="60" r="7" fill="#f43f5e" />
      <text x="120" y="-95" text-anchor="middle" fill="#34d399" font-size="14" font-weight="extrabold">SOLUTION (Concentrated)</text>
      
      <!-- Liquid Level Difference (h) = Osmotic Pressure -->
      <!-- Left level at y = -10, Right level at y = -50 -->
      <line x1="-15" y1="-10" x2="-2" y2="-10" stroke="#38bdf8" stroke-width="2" />
      <line x1="2" y1="-50" x2="225" y2="-50" stroke="#34d399" stroke-width="2" />
      <line x1="235" y1="-50" x2="235" y2="-10" stroke="#f59e0b" stroke-width="2" marker-start="url(#arr-up)" marker-end="url(#arr-down)" />
      <text x="250" y="-25" text-anchor="start" fill="#fbbf24" font-size="12" font-weight="extrabold">h (π = hρg)</text>

      <!-- Solvent Flow Arrow across SPM -->
      <path d="M -50 -10 L 50 -10" stroke="#38bdf8" stroke-width="4" />
      <polygon points="50,-16 64,-10 50,-4" fill="#38bdf8" />
      <text x="0" y="-25" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">Net Solvent Inflow (Osmosis)</text>
    </g>
  </svg>`,

  // 8. Reverse Osmosis (Desalination)
  reverseOsmosis: `<svg viewBox="0 0 800 280" class="w-full h-auto max-h-72" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="280" rx="16" fill="#0f172a" />
    <g transform="translate(400, 140)">
      <!-- Chamber Body -->
      <rect x="-320" y="-80" width="640" height="160" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />

      <!-- Center Semipermeable Membrane (Cellulose Acetate) -->
      <rect x="-6" y="-80" width="12" height="160" fill="#a855f7" rx="3" />
      <text x="0" y="105" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="extrabold">Porous SPM (Cellulose Acetate)</text>

      <!-- Left Side: Saline / Seawater under High Pressure -->
      <rect x="-318" y="-78" width="310" height="156" fill="#0284c7" opacity="0.25" />
      <!-- Salt Ions (Na+, Cl-) -->
      <circle cx="-240" cy="-20" r="7" fill="#f43f5e" />
      <circle cx="-160" cy="10" r="7" fill="#f43f5e" />
      <circle cx="-80" cy="-30" r="7" fill="#f43f5e" />
      <circle cx="-120" cy="40" r="7" fill="#f43f5e" />
      <circle cx="-200" cy="30" r="7" fill="#f43f5e" />
      <text x="-160" y="-55" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="extrabold">SALTWATER / CONCENTRATED SOLUTION</text>
      
      <!-- Piston with External Pressure P > π -->
      <g transform="translate(-270, -40)">
        <rect x="-40" y="-30" width="80" height="100" fill="#334155" stroke="#f59e0b" stroke-width="2" rx="4" />
        <path d="M 0 -70 L 0 -35" stroke="#f59e0b" stroke-width="5" />
        <polygon points="-8,-35 0,-20 8,-35" fill="#f59e0b" />
        <text x="0" y="-80" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="extrabold">P &gt; π (Applied)</text>
      </g>

      <!-- Reversed Flow Arrow across SPM (Left to Right) -->
      <path d="M -40 0 L 40 0" stroke="#10b981" stroke-width="4" />
      <polygon points="40,-6 52,0 40,6" fill="#10b981" />
      <text x="0" y="-15" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">Pure Water Forced Out</text>

      <!-- Right Side: Fresh Water Outlet -->
      <rect x="8" y="-78" width="310" height="156" fill="#10b981" opacity="0.15" />
      <text x="160" y="-55" text-anchor="middle" fill="#34d399" font-size="14" font-weight="extrabold">FRESH WATER (PURE SOLVENT)</text>
      <text x="160" y="20" text-anchor="middle" fill="#94a3b8" font-size="12">Salt ions cannot pass SPM</text>
      <text x="160" y="45" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">→ Desalinated Drinking Water Outlet</text>
    </g>
  </svg>`,

  // 9. Elevation of Boiling Point Concept & P-T Curve
  boilingPointElevation: `<svg viewBox="0 0 800 320" class="w-full h-auto max-h-80" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="320" rx="16" fill="#0f172a" />
    <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="extrabold">ELEVATION OF BOILING POINT (ΔT_b = T_b - T_b° = K_b · m)</text>
    <text x="400" y="48" text-anchor="middle" fill="#94a3b8" font-size="12">Non-volatile solute lowers vapour pressure → Higher temperature required to reach 1 atm</text>

    <g transform="translate(180, 65)">
      <!-- Graph Frame -->
      <rect x="0" y="0" width="460" height="200" fill="#1e293b" stroke="#475569" stroke-width="1.5" />

      <!-- 1 atm Pressure Horizontal Line -->
      <line x1="0" y1="40" x2="460" y2="40" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,4" />
      <text x="15" y="32" fill="#fbbf24" font-size="12" font-weight="bold">1 atm (Atmospheric Pressure)</text>

      <!-- Pure Solvent VP Curve (Blue) -->
      <path d="M 40 180 Q 150 140 220 40" stroke="#38bdf8" stroke-width="3" fill="none" />
      <text x="140" y="90" fill="#38bdf8" font-size="12" font-weight="bold">Pure Solvent Curve</text>

      <!-- Solution VP Curve (Red - Lower VP, shifted right) -->
      <path d="M 100 190 Q 220 150 330 40" stroke="#f43f5e" stroke-width="3" fill="none" />
      <text x="270" y="115" fill="#f43f5e" font-size="12" font-weight="bold">Solution Curve</text>

      <!-- Vertical drop lines from 1 atm intersection to Temperature axis -->
      <!-- Pure Solvent Boiling Point Tb° -->
      <line x1="220" y1="40" x2="220" y2="200" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,3" />
      <circle cx="220" cy="40" r="4" fill="#38bdf8" />
      <text x="220" y="220" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="extrabold">T_b°</text>

      <!-- Solution Boiling Point Tb -->
      <line x1="330" y1="40" x2="330" y2="200" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3,3" />
      <circle cx="330" cy="40" r="4" fill="#f43f5e" />
      <text x="330" y="220" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="extrabold">T_b</text>

      <!-- Delta Tb Interval -->
      <line x1="225" y1="170" x2="325" y2="170" stroke="#10b981" stroke-width="3" marker-start="url(#arr-left)" marker-end="url(#arr-right)" />
      <text x="275" y="162" text-anchor="middle" fill="#34d399" font-size="13" font-weight="extrabold">ΔT_b</text>

      <!-- Axes Labels -->
      <text x="-25" y="100" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="bold" transform="rotate(-90 -25 100)">Vapour Pressure (p) →</text>
      <text x="230" y="242" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">Temperature (T) →</text>
    </g>
  </svg>`,

  // 10. Depression of Freezing Point Concept & P-T Curve
  freezingPointDepression: `<svg viewBox="0 0 800 320" class="w-full h-auto max-h-80" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="320" rx="16" fill="#0f172a" />
    <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="extrabold">DEPRESSION OF FREEZING POINT (ΔT_f = T_f° - T_f = K_f · m)</text>
    <text x="400" y="48" text-anchor="middle" fill="#94a3b8" font-size="12">Solute lowers liquid solvent VP → Intersects frozen solid solvent VP curve at a LOWER temperature</text>

    <g transform="translate(180, 65)">
      <!-- Graph Frame -->
      <rect x="0" y="0" width="460" height="200" fill="#1e293b" stroke="#475569" stroke-width="1.5" />

      <!-- Frozen Solid Solvent Sublimation Curve (Steep) -->
      <path d="M 60 190 Q 140 120 220 50" stroke="#a855f7" stroke-width="3.5" fill="none" />
      <text x="90" y="100" fill="#c084fc" font-size="12" font-weight="bold">Frozen Solid Solvent</text>

      <!-- Pure Liquid Solvent Curve -->
      <path d="M 220 50 Q 320 30 420 20" stroke="#38bdf8" stroke-width="3" fill="none" />
      <text x="320" y="25" fill="#38bdf8" font-size="12" font-weight="bold">Pure Liquid Solvent</text>

      <!-- Liquid Solution Curve (Lower VP, intersects solid curve earlier at Tf) -->
      <path d="M 150 110 Q 280 80 420 50" stroke="#f43f5e" stroke-width="3" fill="none" />
      <text x="330" y="70" fill="#f43f5e" font-size="12" font-weight="bold">Liquid Solution</text>

      <!-- Freezing Point Intersections -->
      <!-- Solution Freezing Point Tf (Intersection at x=150, y=110) -->
      <line x1="150" y1="110" x2="150" y2="200" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3,3" />
      <circle cx="150" cy="110" r="5" fill="#f43f5e" />
      <text x="150" y="220" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="extrabold">T_f</text>

      <!-- Pure Solvent Freezing Point Tf° (Intersection at x=220, y=50) -->
      <line x1="220" y1="50" x2="220" y2="200" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,3" />
      <circle cx="220" cy="50" r="5" fill="#38bdf8" />
      <text x="220" y="220" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="extrabold">T_f°</text>

      <!-- Delta Tf Interval -->
      <line x1="155" y1="170" x2="215" y2="170" stroke="#10b981" stroke-width="3" />
      <text x="185" y="162" text-anchor="middle" fill="#34d399" font-size="13" font-weight="extrabold">ΔT_f</text>

      <!-- Axes Labels -->
      <text x="-25" y="100" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="bold" transform="rotate(-90 -25 100)">Vapour Pressure (p) →</text>
      <text x="230" y="242" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">Temperature (T) →</text>
    </g>
  </svg>`,

  // 11. Association Particle Diagram (e.g. Benzoic Acid Dimerization in Benzene)
  associationDiagram: `<svg viewBox="0 0 800 240" class="w-full h-auto max-h-60" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="240" rx="16" fill="#0f172a" />
    <g transform="translate(180, 120)">
      <rect x="-130" y="-70" width="260" height="140" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
      <text x="0" y="-45" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="extrabold">BEFORE ASSOCIATION (Monomers)</text>
      <!-- 4 Separate Monomers -->
      <circle cx="-60" cy="-5" r="14" fill="#0284c7" />
      <text x="-60" y="0" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="bold">A</text>
      <circle cx="-15" cy="-5" r="14" fill="#0284c7" />
      <text x="-15" y="0" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="bold">A</text>
      <circle cx="30" cy="-5" r="14" fill="#0284c7" />
      <text x="30" y="0" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="bold">A</text>
      <circle cx="75" cy="-5" r="14" fill="#0284c7" />
      <text x="75" y="0" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="bold">A</text>
      <text x="0" y="45" text-anchor="middle" fill="#e2e8f0" font-size="12">4 Solute Particles</text>
      <text x="0" y="60" text-anchor="middle" fill="#94a3b8" font-size="10">Calculated Molar Mass = M_normal</text>
    </g>

    <!-- Equilibrium Arrow -->
    <g transform="translate(400, 120)">
      <path d="M -40 -10 L 40 -10" stroke="#f59e0b" stroke-width="3" />
      <polygon points="40,-15 50,-10 40,-5" fill="#f59e0b" />
      <path d="M 40 10 L -40 10" stroke="#f59e0b" stroke-width="3" />
      <polygon points="-40,5 -50,10 -40,15" fill="#f59e0b" />
      <text x="0" y="-22" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">Dimerization (2A ⇌ A₂)</text>
      <text x="0" y="32" text-anchor="middle" fill="#94a3b8" font-size="11">H-bonding in Benzene</text>
    </g>

    <g transform="translate(620, 120)">
      <rect x="-130" y="-70" width="260" height="140" rx="12" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
      <text x="0" y="-45" text-anchor="middle" fill="#f472b6" font-size="14" font-weight="extrabold">AFTER ASSOCIATION (Dimers)</text>
      <!-- 2 Dimers bonded together -->
      <g transform="translate(-40, -5)">
        <circle cx="-12" cy="0" r="14" fill="#0284c7" />
        <circle cx="12" cy="0" r="14" fill="#0284c7" />
        <line x1="-5" y1="0" x2="5" y2="0" stroke="#f43f5e" stroke-width="3" stroke-dasharray="2,2" />
        <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="bold">A₂</text>
      </g>
      <g transform="translate(40, -5)">
        <circle cx="-12" cy="0" r="14" fill="#0284c7" />
        <circle cx="12" cy="0" r="14" fill="#0284c7" />
        <line x1="-5" y1="0" x2="5" y2="0" stroke="#f43f5e" stroke-width="3" stroke-dasharray="2,2" />
        <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="bold">A₂</text>
      </g>
      <text x="0" y="45" text-anchor="middle" fill="#34d399" font-size="12" font-weight="extrabold">2 Solute Particles (i = 0.5 &lt; 1)</text>
      <text x="0" y="60" text-anchor="middle" fill="#f472b6" font-size="10" font-weight="bold">Observed Molar Mass = 2 × M_normal</text>
    </g>
  </svg>`,

  // 12. Dissociation Particle Diagram (e.g. Ionic Salt in Water)
  dissociationDiagram: `<svg viewBox="0 0 800 240" class="w-full h-auto max-h-60" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="240" rx="16" fill="#0f172a" />
    <g transform="translate(180, 120)">
      <rect x="-130" y="-70" width="260" height="140" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
      <text x="0" y="-45" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="extrabold">BEFORE DISSOCIATION</text>
      <!-- Undissociated Formula Units -->
      <g transform="translate(-40, -5)">
        <circle cx="-10" cy="0" r="12" fill="#3b82f6" />
        <circle cx="10" cy="0" r="12" fill="#10b981" />
        <text x="-10" y="4" text-anchor="middle" fill="#ffffff" font-size="8" font-weight="bold">Na</text>
        <text x="10" y="4" text-anchor="middle" fill="#ffffff" font-size="8" font-weight="bold">Cl</text>
      </g>
      <g transform="translate(40, -5)">
        <circle cx="-10" cy="0" r="12" fill="#3b82f6" />
        <circle cx="10" cy="0" r="12" fill="#10b981" />
        <text x="-10" y="4" text-anchor="middle" fill="#ffffff" font-size="8" font-weight="bold">Na</text>
        <text x="10" y="4" text-anchor="middle" fill="#ffffff" font-size="8" font-weight="bold">Cl</text>
      </g>
      <text x="0" y="45" text-anchor="middle" fill="#e2e8f0" font-size="12">2 Formula Units (Initial)</text>
      <text x="0" y="60" text-anchor="middle" fill="#94a3b8" font-size="10">Expected Colligative Property = 1× Normal</text>
    </g>

    <!-- Dissolution Arrow -->
    <g transform="translate(400, 120)">
      <path d="M -40 0 L 40 0" stroke="#10b981" stroke-width="3.5" />
      <polygon points="40,-6 52,0 40,6" fill="#10b981" />
      <text x="0" y="-18" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">Ionization in Water (H₂O)</text>
      <text x="0" y="24" text-anchor="middle" fill="#94a3b8" font-size="11">NaCl → Na⁺ + Cl⁻ (n = 2)</text>
    </g>

    <g transform="translate(620, 120)">
      <rect x="-130" y="-70" width="260" height="140" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2" />
      <text x="0" y="-45" text-anchor="middle" fill="#34d399" font-size="14" font-weight="extrabold">AFTER DISSOCIATION (Ions)</text>
      <!-- 4 Separate Ions -->
      <circle cx="-65" cy="-5" r="12" fill="#3b82f6" />
      <text x="-65" y="0" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="bold">Na⁺</text>
      <circle cx="-20" cy="-5" r="14" fill="#10b981" />
      <text x="-20" y="0" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="bold">Cl⁻</text>
      <circle cx="25" cy="-5" r="12" fill="#3b82f6" />
      <text x="25" y="0" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="bold">Na⁺</text>
      <circle cx="70" cy="-5" r="14" fill="#10b981" />
      <text x="70" y="0" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="bold">Cl⁻</text>
      <text x="0" y="45" text-anchor="middle" fill="#34d399" font-size="12" font-weight="extrabold">4 Free Ions (i = 2 &gt; 1)</text>
      <text x="0" y="60" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Observed Molar Mass = M_normal / 2</text>
    </g>
  </svg>`
};
