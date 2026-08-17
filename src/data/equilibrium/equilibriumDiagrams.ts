// 15+ Comprehensive SVG Diagrams and Interactive Visuals for NEET UG 2026 Equilibrium Masterclass

export interface EquilibriumSvgVisual {
  id: string;
  title: string;
  category: 'Chemical Equilibrium' | 'Le Chatelier' | 'Ionic Equilibrium' | 'pH & Buffers' | 'Ksp & Precipitation';
  svgContent: string;
  caption: string;
  guide: string;
}

export const EQUILIBRIUM_DIAGRAMS: EquilibriumSvgVisual[] = [
  // 1. Dynamic Equilibrium Concept
  {
    id: "diag-dynamic-equilibrium",
    title: "1. Dynamic Equilibrium at Molecular Scale",
    category: "Chemical Equilibrium",
    svgContent: `<svg viewBox="0 0 800 360" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="eqBoxGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f8fafc"/>
          <stop offset="100%" stop-color="#f1f5f9"/>
        </linearGradient>
        <marker id="fwdArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#3b82f6"/>
        </marker>
        <marker id="revArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#ef4444"/>
        </marker>
      </defs>
      <!-- Container -->
      <rect x="20" y="20" width="760" height="320" rx="16" fill="url(#eqBoxGrad)" stroke="#cbd5e1" stroke-width="2"/>
      
      <!-- Static vs Dynamic Box comparison -->
      <!-- Left: Static -->
      <rect x="50" y="50" width="320" height="260" rx="12" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="210" y="80" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#475569">STATIC EQUILIBRIUM (Mechanical)</text>
      <line x1="70" y1="95" x2="350" y2="95" stroke="#e2e8f0" stroke-width="1.5"/>
      
      <circle cx="210" cy="160" r="36" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
      <text x="210" y="165" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#334155">Object at Rest</text>
      
      <path d="M 120 160 L 160 160" stroke="#64748b" stroke-width="3" marker-end="url(#fwdArrow)"/>
      <text x="135" y="148" font-family="sans-serif" font-size="11" fill="#64748b">F₁ = 10 N</text>
      
      <path d="M 300 160 L 260 160" stroke="#64748b" stroke-width="3" marker-end="url(#revArrow)"/>
      <text x="265" y="148" font-family="sans-serif" font-size="11" fill="#64748b">F₂ = 10 N</text>
      
      <rect x="70" y="230" width="280" height="60" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
      <text x="210" y="252" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#64748b">All motion completely ceases.</text>
      <text x="210" y="272" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#dc2626">Net Force = 0 • Velocity = 0</text>

      <!-- Right: Dynamic -->
      <rect x="430" y="50" width="320" height="260" rx="12" fill="#ffffff" stroke="#3b82f6" stroke-width="2"/>
      <text x="590" y="80" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1d4ed8">DYNAMIC EQUILIBRIUM (Chemical)</text>
      <line x1="450" y1="95" x2="730" y2="95" stroke="#e2e8f0" stroke-width="1.5"/>
      
      <!-- Reactant to Product Cycle -->
      <rect x="460" y="130" width="90" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="505" y="155" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1e40af">Reactants</text>
      <text x="505" y="175" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#3b82f6">[A] + [B]</text>

      <rect x="630" y="130" width="90" height="60" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="675" y="155" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#991b1b">Products</text>
      <text x="675" y="175" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#ef4444">[C] + [D]</text>

      <!-- Forward Rate Arrow -->
      <path d="M 555 145 L 620 145" stroke="#3b82f6" stroke-width="3" marker-end="url(#fwdArrow)"/>
      <text x="588" y="138" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="11" fill="#2563eb">Rate_fwd</text>

      <!-- Backward Rate Arrow -->
      <path d="M 625 175 L 560 175" stroke="#ef4444" stroke-width="3" marker-end="url(#revArrow)"/>
      <text x="592" y="195" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="11" fill="#dc2626">Rate_bwd</text>

      <rect x="450" y="230" width="280" height="60" rx="8" fill="#f0fdf4" stroke="#86efac"/>
      <text x="590" y="252" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#166534">Reactions continue in BOTH directions at EQUAL rates!</text>
      <text x="590" y="272" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#15803d">Rate_fwd = Rate_bwd • Concentrations = Constant</text>
    </svg>`,
    caption: "Dynamic equilibrium in chemical systems: Molecular transformations never stop, but the forward and reverse rates become perfectly balanced.",
    guide: "NEET Trap: At equilibrium, concentrations become constant over time; they are NOT necessarily equal to each other ([Reactants] ≠ [Products] in general)."
  },

  // 2. Forward and Reverse Reaction Rates vs Time Graph
  {
    id: "diag-rate-vs-time",
    title: "2. Forward & Reverse Reaction Rate vs Time",
    category: "Chemical Equilibrium",
    svgContent: `<svg viewBox="0 0 800 360" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Background & Axes -->
      <rect x="10" y="10" width="780" height="340" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <line x1="90" y1="280" x2="720" y2="280" stroke="#334155" stroke-width="2.5"/>
      <line x1="90" y1="40" x2="90" y2="280" stroke="#334155" stroke-width="2.5"/>
      
      <!-- Axis Labels -->
      <text x="730" y="285" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">Time (t) →</text>
      <text x="40" y="45" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" transform="rotate(-90 40 45)">Reaction Rate (r) →</text>
      
      <!-- Forward Rate Curve (Blue) -->
      <path d="M 90 60 Q 240 170, 420 170 L 700 170" fill="none" stroke="#2563eb" stroke-width="3.5"/>
      <!-- Backward Rate Curve (Red) -->
      <path d="M 90 280 Q 240 170, 420 170 L 700 170" fill="none" stroke="#dc2626" stroke-width="3.5"/>
      
      <!-- Equilibrium Point Line -->
      <line x1="420" y1="40" x2="420" y2="280" stroke="#10b981" stroke-width="2" stroke-dasharray="6,4"/>
      <circle cx="420" cy="170" r="6" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
      
      <!-- Annotations -->
      <text x="180" y="90" font-family="sans-serif" font-weight="bold" font-size="13" fill="#2563eb">Forward Rate r_f = k_f[Reactants]</text>
      <text x="180" y="108" font-family="sans-serif" font-size="11" fill="#64748b">(Decreases as reactants are consumed)</text>
      
      <text x="180" y="245" font-family="sans-serif" font-weight="bold" font-size="13" fill="#dc2626">Reverse Rate r_b = k_b[Products]</text>
      <text x="180" y="263" font-family="sans-serif" font-size="11" fill="#64748b">(Increases as products accumulate)</text>
      
      <rect x="440" y="145" width="260" height="50" rx="8" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5"/>
      <text x="570" y="166" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#047857">Dynamic Equilibrium State</text>
      <text x="570" y="184" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#15803d">r_forward = r_backward</text>
      
      <text x="420" y="305" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#10b981">t_eq (Equilibrium Attained)</text>
    </svg>`,
    caption: "Reaction rate vs time: Forward rate begins at maximum and decays exponentially, while backward rate starts at zero and rises until both become identical at t_eq.",
    guide: "High-Yield: Catalyst lowers activation energy equally for both forward and reverse paths, bringing t_eq earlier without altering the horizontal rate level."
  },

  // 3. Reaction Quotient Q vs Equilibrium Constant K Decision Flowchart
  {
    id: "diag-q-vs-k-flowchart",
    title: "3. Reaction Quotient (Q) vs Equilibrium Constant (K)",
    category: "Chemical Equilibrium",
    svgContent: `<svg viewBox="0 0 800 320" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="flowArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#475569"/>
        </marker>
      </defs>
      <!-- Base Background -->
      <rect x="10" y="10" width="780" height="300" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      
      <!-- Central Scale Axis -->
      <rect x="60" y="50" width="680" height="24" rx="12" fill="#e2e8f0"/>
      <rect x="360" y="44" width="80" height="36" rx="8" fill="#10b981" stroke="#047857" stroke-width="2"/>
      <text x="400" y="67" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#ffffff">K_c</text>
      
      <!-- Left Card: Q < K -->
      <rect x="50" y="110" width="210" height="170" rx="12" fill="#ffffff" stroke="#3b82f6" stroke-width="2"/>
      <div class="header">
        <rect x="50" y="110" width="210" height="36" rx="10" fill="#eff6ff"/>
        <text x="155" y="134" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1d4ed8">Q_c &lt; K_c</text>
      </div>
      <text x="155" y="170" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">Excess Reactants</text>
      <text x="155" y="190" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#64748b">[Products] is too low</text>
      <rect x="65" y="210" width="180" height="50" rx="8" fill="#dbeafe"/>
      <text x="155" y="232" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1d4ed8">SHIFTS FORWARD (→)</text>
      <text x="155" y="250" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1e40af">Reactants ➔ Products</text>

      <!-- Center Card: Q = K -->
      <rect x="295" y="110" width="210" height="170" rx="12" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
      <rect x="295" y="110" width="210" height="36" rx="10" fill="#f0fdf4"/>
      <text x="400" y="134" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#047857">Q_c = K_c</text>
      <text x="400" y="170" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">Dynamic Equilibrium</text>
      <text x="400" y="190" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#64748b">Composition is constant</text>
      <rect x="310" y="210" width="180" height="50" rx="8" fill="#d1fae5"/>
      <text x="400" y="232" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#047857">NO NET SHIFT (⇌)</text>
      <text x="400" y="250" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#065f46">Rate_fwd = Rate_bwd</text>

      <!-- Right Card: Q > K -->
      <rect x="540" y="110" width="210" height="170" rx="12" fill="#ffffff" stroke="#ef4444" stroke-width="2"/>
      <rect x="540" y="110" width="210" height="36" rx="10" fill="#fef2f2"/>
      <text x="645" y="134" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#b91c1c">Q_c &gt; K_c</text>
      <text x="645" y="170" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">Excess Products</text>
      <text x="645" y="190" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#64748b">[Products] is too high</text>
      <rect x="555" y="210" width="180" height="50" rx="8" fill="#fee2e2"/>
      <text x="645" y="232" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#b91c1c">SHIFTS REVERSE (←)</text>
      <text x="645" y="250" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#991b1b">Products ➔ Reactants</text>
    </svg>`,
    caption: "Direction of reaction determined by comparing Reaction Quotient Q with Equilibrium Constant K.",
    guide: "Decision Rule: If Q < K, system moves right to build products. If Q > K, system moves left to consume excess products."
  },

  // 4. Le Chatelier's Principle Master Stress-Response Visualizer
  {
    id: "diag-le-chatelier-summary",
    title: "4. Le Chatelier's Principle: Stresses & Equilibrium Shifts",
    category: "Le Chatelier",
    svgContent: `<svg viewBox="0 0 800 380" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect x="10" y="10" width="780" height="360" rx="16" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      
      <!-- Central Banner: Benchmark Reaction -->
      <rect x="30" y="25" width="740" height="50" rx="10" fill="#1e293b"/>
      <text x="400" y="56" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#f8fafc">
        Model Reaction: N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) + 92.4 kJ (ΔH &lt; 0, Exothermic)
      </text>

      <!-- 4 Factor Grid -->
      <!-- 1. Concentration -->
      <g transform="translate(30, 90)">
        <rect width="360" height="120" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="15" y="25" font-family="sans-serif" font-weight="bold" font-size="13" fill="#2563eb">1. Concentration Changes</text>
        <text x="15" y="50" font-family="sans-serif" font-size="11" fill="#334155">• Add N₂ / H₂ ➔ Shifts <tspan font-weight="bold" fill="#16a34a">FORWARD (→)</tspan></text>
        <text x="15" y="70" font-family="sans-serif" font-size="11" fill="#334155">• Remove NH₃ ➔ Shifts <tspan font-weight="bold" fill="#16a34a">FORWARD (→)</tspan></text>
        <text x="15" y="90" font-family="sans-serif" font-size="11" fill="#334155">• Add NH₃ / Remove N₂ ➔ Shifts <tspan font-weight="bold" fill="#dc2626">REVERSE (←)</tspan></text>
        <text x="15" y="110" font-family="sans-serif" font-size="10" font-weight="bold" fill="#64748b">Value of K_c remains UNCHANGED</text>
      </g>

      <!-- 2. Pressure & Volume -->
      <g transform="translate(410, 90)">
        <rect width="360" height="120" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="15" y="25" font-family="sans-serif" font-weight="bold" font-size="13" fill="#7c3aed">2. Pressure &amp; Volume</text>
        <text x="15" y="50" font-family="sans-serif" font-size="11" fill="#334155">• <tspan font-weight="bold">Increase Pressure (P↑)</tspan> ➔ Shifts to <tspan font-weight="bold" fill="#16a34a">FEWER moles (4 ➔ 2 mol, →)</tspan></text>
        <text x="15" y="70" font-family="sans-serif" font-size="11" fill="#334155">• <tspan font-weight="bold">Decrease Pressure (P↓)</tspan> ➔ Shifts to <tspan font-weight="bold" fill="#dc2626">MORE moles (←)</tspan></text>
        <text x="15" y="90" font-family="sans-serif" font-size="11" fill="#334155">• If Δn_g = 0 ➔ Pressure change has NO effect</text>
        <text x="15" y="110" font-family="sans-serif" font-size="10" font-weight="bold" fill="#64748b">Value of K_c remains UNCHANGED</text>
      </g>

      <!-- 3. Temperature -->
      <g transform="translate(30, 225)">
        <rect width="360" height="130" rx="10" fill="#fffbeb" stroke="#fde68a"/>
        <text x="15" y="25" font-family="sans-serif" font-weight="bold" font-size="13" fill="#d97706">3. Temperature (CRITICAL: K changes!)</text>
        <text x="15" y="50" font-family="sans-serif" font-size="11" fill="#92400e">• <tspan font-weight="bold">Exothermic (ΔH &lt; 0):</tspan> Temp↑ ➔ Shifts <tspan font-weight="bold" fill="#dc2626">REVERSE (←), K_c DECREASES</tspan></text>
        <text x="15" y="70" font-family="sans-serif" font-size="11" fill="#92400e">• <tspan font-weight="bold">Exothermic (ΔH &lt; 0):</tspan> Temp↓ ➔ Shifts <tspan font-weight="bold" fill="#16a34a">FORWARD (→), K_c INCREASES</tspan></text>
        <text x="15" y="90" font-family="sans-serif" font-size="11" fill="#92400e">• <tspan font-weight="bold">Endothermic (ΔH &gt; 0):</tspan> Temp↑ ➔ Shifts <tspan font-weight="bold" fill="#16a34a">FORWARD (→), K_c INCREASES</tspan></text>
        <text x="15" y="115" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b45309">★ Temperature is the ONLY common factor that changes K!</text>
      </g>

      <!-- 4. Catalyst & Inert Gas -->
      <g transform="translate(410, 225)">
        <rect width="360" height="130" rx="10" fill="#f0fdf4" stroke="#bbf7d0"/>
        <text x="15" y="25" font-family="sans-serif" font-weight="bold" font-size="13" fill="#15803d">4. Catalyst &amp; Inert Gas Addition</text>
        <text x="15" y="50" font-family="sans-serif" font-size="11" fill="#166534">• <tspan font-weight="bold">Catalyst:</tspan> Speeds up attainment of equilibrium. <tspan font-weight="bold">NO shift, NO change in K or yield!</tspan></text>
        <text x="15" y="75" font-family="sans-serif" font-size="11" fill="#166534">• <tspan font-weight="bold">Inert Gas at Const. Volume (V):</tspan> <tspan font-weight="bold" fill="#dc2626">NO EFFECT AT ALL</tspan></text>
        <text x="15" y="95" font-family="sans-serif" font-size="11" fill="#166534">• <tspan font-weight="bold">Inert Gas at Const. Pressure (P):</tspan> Shifts toward <tspan font-weight="bold">MORE gas moles (Δn_g &gt; 0)</tspan></text>
        <text x="15" y="115" font-family="sans-serif" font-size="10" font-weight="bold" fill="#15803d">★ High-Yield frequent NEET question</text>
      </g>
    </svg>`,
    caption: "Complete Le Chatelier Stress-Response map: Effects of concentration, pressure, temperature, catalyst, and inert gas additions.",
    guide: "NEET Rule: Temperature is the ONLY factor that alters the numerical equilibrium constant K. Pressure, volume, catalyst, and concentrations shift position without changing K."
  },

  // 5. Brønsted-Lowry Proton Transfer & Conjugate Pairs
  {
    id: "diag-bronsted-conjugate",
    title: "5. Brønsted-Lowry Conjugate Acid-Base Pairs",
    category: "Ionic Equilibrium",
    svgContent: `<svg viewBox="0 0 800 320" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="protonArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#8b5cf6"/>
        </marker>
      </defs>
      <!-- Background -->
      <rect x="10" y="10" width="780" height="300" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      
      <!-- Top Title -->
      <text x="400" y="45" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">
        Conjugate Pair Rule: Acid ➔ Conjugate Base + H⁺  |  Base + H⁺ ➔ Conjugate Acid
      </text>

      <!-- Reaction Row -->
      <g transform="translate(50, 110)">
        <!-- NH3 -->
        <rect x="20" y="20" width="120" height="70" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="80" y="50" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="18" fill="#1d4ed8">NH₃</text>
        <text x="80" y="75" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#2563eb">Base₁</text>

        <!-- Plus -->
        <text x="170" y="62" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="22" fill="#64748b">+</text>

        <!-- H2O -->
        <rect x="200" y="20" width="120" height="70" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
        <text x="260" y="50" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="18" fill="#b91c1c">H₂O</text>
        <text x="260" y="75" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#dc2626">Acid₂</text>

        <!-- Double Arrow -->
        <text x="355" y="62" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="24" fill="#334155">⇌</text>

        <!-- NH4+ -->
        <rect x="390" y="20" width="120" height="70" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="450" y="50" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="18" fill="#1d4ed8">NH₄⁺</text>
        <text x="450" y="75" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#2563eb">Conj. Acid₁</text>

        <!-- Plus -->
        <text x="540" y="62" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="22" fill="#64748b">+</text>

        <!-- OH- -->
        <rect x="570" y="20" width="120" height="70" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
        <text x="630" y="50" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="18" fill="#b91c1c">OH⁻</text>
        <text x="630" y="75" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#dc2626">Conj. Base₂</text>
      </g>

      <!-- Proton Transfer Arc 1: H2O -> NH3 -->
      <path d="M 290 120 C 270 70, 150 70, 130 120" fill="none" stroke="#8b5cf6" stroke-width="2.5" marker-end="url(#protonArrow)"/>
      <text x="210" y="75" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#7c3aed">H⁺ Transfer (Proton)</text>

      <!-- Bottom Conjugate Connecting Arcs -->
      <!-- Pair 1: NH3 and NH4+ -->
      <path d="M 130 210 C 130 270, 500 270, 500 210" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,4"/>
      <text x="315" y="265" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1d4ed8">Conjugate Pair 1 (differs by 1 H⁺)</text>

      <!-- Pair 2: H2O and OH- -->
      <path d="M 310 210 C 310 295, 680 295, 680 210" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,4"/>
      <text x="500" y="290" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#b91c1c">Conjugate Pair 2 (differs by 1 H⁺)</text>
    </svg>`,
    caption: "Proton transfer in Brønsted-Lowry acid-base theory: Conjugate acid-base pairs differ by exactly ONE proton (H⁺).",
    guide: "NEET Trap: To find conjugate base, subtract H⁺ (e.g., HSO₄⁻ ➔ SO₄²⁻). To find conjugate acid, add H⁺ (e.g., NH₃ ➔ NH₄⁺)."
  },

  // 6. Weak Acid Ionization & Ostwald Dilution Law
  {
    id: "diag-weak-acid-ionization",
    title: "6. Weak Acid Ionization Equilibrium & Ostwald Dilution Law",
    category: "Ionic Equilibrium",
    svgContent: `<svg viewBox="0 0 800 320" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect x="10" y="10" width="780" height="300" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      
      <!-- Equation Header -->
      <rect x="40" y="30" width="720" height="40" rx="8" fill="#f1f5f9"/>
      <text x="400" y="56" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">
        HA(aq) + H₂O(l) ⇌ H₃O⁺(aq) + A⁻(aq)   |   K_a = [H₃O⁺][A⁻] / [HA]
      </text>

      <!-- ICE Table Visual -->
      <g transform="translate(40, 85)">
        <rect width="720" height="120" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <!-- Header -->
        <rect width="720" height="30" rx="8" fill="#e2e8f0"/>
        <text x="60" y="20" font-family="sans-serif" font-weight="bold" font-size="12" fill="#334155">Stage</text>
        <text x="220" y="20" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1e293b">[HA]</text>
        <text x="440" y="20" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#2563eb">[H⁺]</text>
        <text x="620" y="20" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#7c3aed">[A⁻]</text>
        <line x1="0" y1="30" x2="720" y2="30" stroke="#cbd5e1"/>

        <!-- Initial -->
        <text x="60" y="55" font-family="sans-serif" font-weight="bold" font-size="12" fill="#64748b">Initial (t = 0)</text>
        <text x="220" y="55" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">C</text>
        <text x="440" y="55" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#64748b">0</text>
        <text x="620" y="55" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#64748b">0</text>
        <line x1="0" y1="65" x2="720" y2="65" stroke="#f1f5f9"/>

        <!-- Change -->
        <text x="60" y="85" font-family="sans-serif" font-weight="bold" font-size="12" fill="#64748b">Change (Δ)</text>
        <text x="220" y="85" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#dc2626">− Cα</text>
        <text x="440" y="85" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#16a34a">+ Cα</text>
        <text x="620" y="85" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#16a34a">+ Cα</text>
        <line x1="0" y1="95" x2="720" y2="95" stroke="#f1f5f9"/>

        <!-- Equilibrium -->
        <text x="60" y="112" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1d4ed8">Equilibrium</text>
        <text x="220" y="112" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">C(1 − α)</text>
        <text x="440" y="112" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#2563eb">Cα</text>
        <text x="620" y="112" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#7c3aed">Cα</text>
      </g>

      <!-- Bottom Approximation & Formulas -->
      <g transform="translate(40, 220)">
        <rect width="720" height="75" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
        <text x="360" y="25" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1e40af">
          Ostwald Approximation (for weak acid α ≤ 0.05 or 5%): K_a = Cα²  ⟹  α = √(K_a / C)
        </text>
        <text x="360" y="48" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#047857">
          [H⁺] = Cα = √(K_a · C)   |   pH = ½ (pK_a − log₁₀ C)
        </text>
        <text x="360" y="66" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">
          *If α &gt; 0.05 (e.g. K_a / C &gt; 10⁻³), MUST solve exact quadratic: K_a(1 − α) = Cα²
        </text>
      </g>
    </svg>`,
    caption: "Weak acid ionization ICE table and Ostwald dilution law derivations.",
    guide: "NEET Tip: As concentration C decreases (dilution increases), degree of dissociation α increases (α ∝ 1/√C), but total [H⁺] decreases so pH increases."
  },

  // 7. Common-Ion Effect Particle Mechanism
  {
    id: "diag-common-ion-effect",
    title: "7. Common-Ion Effect on Weak Electrolyte Dissociation",
    category: "Ionic Equilibrium",
    svgContent: `<svg viewBox="0 0 800 320" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="ciArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#dc2626"/>
        </marker>
      </defs>
      <!-- Background -->
      <rect x="10" y="10" width="780" height="300" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      
      <!-- Top Title -->
      <text x="400" y="40" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">
        Common-Ion Effect: Suppressing Ionization of Acetic Acid by Sodium Acetate
      </text>

      <!-- Reaction 1: Weak Electrolyte -->
      <g transform="translate(60, 60)">
        <rect width="680" height="80" rx="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="30" y="30" font-family="sans-serif" font-weight="bold" font-size="14" fill="#334155">Weak Acid (Partial Ionization):</text>
        <text x="30" y="60" font-family="sans-serif" font-weight="bold" font-size="16" fill="#0f172a">
          CH₃COOH(aq)   ⇌   H⁺(aq)   +   <tspan fill="#d97706">CH₃COO⁻(aq)</tspan>
        </text>
        <!-- Reverse Shift Arrow -->
        <path d="M 520 40 C 440 10, 240 10, 160 40" fill="none" stroke="#dc2626" stroke-width="3" marker-end="url(#ciArrow)"/>
        <text x="340" y="22" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#dc2626">Le Chatelier REVERSE SHIFT (←)</text>
      </g>

      <!-- Reaction 2: Strong Electrolyte Added -->
      <g transform="translate(60, 160)">
        <rect width="680" height="80" rx="10" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
        <text x="30" y="30" font-family="sans-serif" font-weight="bold" font-size="14" fill="#b45309">Added Strong Electrolyte (100% Complete Dissociation):</text>
        <text x="30" y="60" font-family="sans-serif" font-weight="bold" font-size="16" fill="#0f172a">
          CH₃COONa(s)   ➔   Na⁺(aq)   +   <tspan fill="#d97706" font-weight="extrabold">CH₃COO⁻(aq) (COMMON ION [High Concentration!])</tspan>
        </text>
      </g>

      <!-- Bottom Summary Banner -->
      <g transform="translate(60, 255)">
        <rect width="680" height="40" rx="8" fill="#fee2e2" stroke="#fca5a5"/>
        <text x="340" y="25" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#991b1b">
          Result: Degree of dissociation α of CH₃COOH drops drastically ➔ [H⁺] decreases ➔ pH INCREASES!
        </text>
      </g>
    </svg>`,
    caption: "The common-ion effect: Adding excess CH₃COO⁻ from strong electrolyte CH₃COONa pushes CH₃COOH equilibrium backwards, suppressing H⁺ release.",
    guide: "NEET Application: Qualitative group analysis in salt analysis (e.g. Group II precipitation of sulfides using H₂S + HCl common-ion effect)."
  },

  // 8. Buffer Action Mechanism (Acidic & Basic Buffers)
  {
    id: "diag-buffer-action",
    title: "8. Buffer Action: Resisting pH Changes",
    category: "pH & Buffers",
    svgContent: `<svg viewBox="0 0 800 340" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect x="10" y="10" width="780" height="320" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      
      <!-- Title -->
      <text x="400" y="40" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">
        Acidic Buffer Action: CH₃COOH (Weak Acid reserve) + CH₃COO⁻ (Conjugate Base reserve)
      </text>

      <!-- Two Reaction Columns -->
      <!-- Left: Addition of Strong Acid (H+) -->
      <g transform="translate(40, 65)">
        <rect width="340" height="180" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        <rect width="340" height="36" rx="10" fill="#dbeafe"/>
        <text x="170" y="24" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1d4ed8">1. When Strong Acid (H⁺) is Added</text>
        
        <text x="20" y="65" font-family="sans-serif" font-size="12" fill="#334155">Conjugate base CH₃COO⁻ traps incoming H⁺:</text>
        <rect x="15" y="80" width="310" height="40" rx="6" fill="#ffffff" stroke="#93c5fd"/>
        <text x="170" y="105" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1e40af">
          CH₃COO⁻ + H⁺ ➔ CH₃COOH
        </text>
        <text x="20" y="145" font-family="sans-serif" font-size="11" fill="#475569">• Incoming strong H⁺ converted into weak CH₃COOH.</text>
        <text x="20" y="165" font-family="sans-serif" font-weight="bold" font-size="12" fill="#16a34a">Result: [H⁺] remains nearly constant (pH stable!)</text>
      </g>

      <!-- Right: Addition of Strong Base (OH-) -->
      <g transform="translate(420, 65)">
        <rect width="340" height="180" rx="12" fill="#fdf2f8" stroke="#ec4899" stroke-width="2"/>
        <rect width="340" height="36" rx="10" fill="#fce7f3"/>
        <text x="170" y="24" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#be185d">2. When Strong Base (OH⁻) is Added</text>
        
        <text x="20" y="65" font-family="sans-serif" font-size="12" fill="#334155">Weak acid CH₃COOH neutralizes incoming OH⁻:</text>
        <rect x="15" y="80" width="310" height="40" rx="6" fill="#ffffff" stroke="#fbcfe8"/>
        <text x="170" y="105" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#9d174d">
          CH₃COOH + OH⁻ ➔ CH₃COO⁻ + H₂O
        </text>
        <text x="20" y="145" font-family="sans-serif" font-size="11" fill="#475569">• Incoming strong OH⁻ consumed to produce neutral H₂O.</text>
        <text x="20" y="165" font-family="sans-serif" font-weight="bold" font-size="12" fill="#16a34a">Result: [OH⁻] remains nearly constant (pH stable!)</text>
      </g>

      <!-- Bottom Equation Banner: Henderson-Hasselbalch -->
      <g transform="translate(40, 260)">
        <rect width="720" height="55" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
        <text x="360" y="25" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#166534">
          Henderson-Hasselbalch Equation: pH = pK_a + log₁₀([Salt] / [Acid])
        </text>
        <text x="360" y="45" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803d">
          Max Buffer Capacity occurs when [Salt] = [Acid] ⟹ pH = pK_a (Effective buffer range: pK_a ± 1)
        </text>
      </g>
    </svg>`,
    caption: "Buffer action mechanism: Dual reserves of weak acid and conjugate base neutralize both incoming H⁺ and OH⁻ additions.",
    guide: "High-Yield Formula: For basic buffer (NH₄OH + NH₄Cl), pOH = pK_b + log₁₀([Salt] / [Base]), and pH = 14 − pOH at 25°C."
  },

  // 9. Salt Hydrolysis Classification Chart
  {
    id: "diag-salt-hydrolysis",
    title: "9. Salt Hydrolysis Master Classification",
    category: "Ionic Equilibrium",
    svgContent: `<svg viewBox="0 0 800 360" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect x="10" y="10" width="780" height="340" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      
      <!-- Title -->
      <text x="400" y="40" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">
        Salt Hydrolysis Types, Hydrolysis Constant (K_h), and pH Formulas
      </text>

      <!-- 4 Salt Cards Grid -->
      <!-- 1. SA + SB -->
      <g transform="translate(30, 60)">
        <rect width="360" height="130" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="15" y="25" font-family="sans-serif" font-weight="bold" font-size="13" fill="#334155">1. Strong Acid + Strong Base (NaCl, KNO₃)</text>
        <text x="15" y="50" font-family="sans-serif" font-size="11" fill="#64748b">• Ions (Na⁺, Cl⁻) do NOT hydrolyze</text>
        <text x="15" y="70" font-family="sans-serif" font-size="11" fill="#64748b">• No change in [H⁺] or [OH⁻] of water</text>
        <rect x="15" y="85" width="330" height="35" rx="6" fill="#ffffff" stroke="#94a3b8"/>
        <text x="180" y="107" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#047857">pH = 7.00 (Neutral Solution)</text>
      </g>

      <!-- 2. WA + SB -->
      <g transform="translate(410, 60)">
        <rect width="360" height="130" rx="10" fill="#fffbeb" stroke="#fde68a"/>
        <text x="15" y="25" font-family="sans-serif" font-weight="bold" font-size="13" fill="#b45309">2. Weak Acid + Strong Base (CH₃COONa)</text>
        <text x="15" y="50" font-family="sans-serif" font-size="11" fill="#92400e">• Anion hydrolyzes: A⁻ + H₂O ⇌ HA + OH⁻</text>
        <text x="15" y="70" font-family="sans-serif" font-size="11" fill="#92400e">• K_h = K_w / K_a  |  h = √(K_w / (K_a · C))</text>
        <rect x="15" y="85" width="330" height="35" rx="6" fill="#ffffff" stroke="#f59e0b"/>
        <text x="180" y="107" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#b45309">pH = 7 + ½ pK_a + ½ log₁₀ C (&gt; 7, Basic)</text>
      </g>

      <!-- 3. SA + WB -->
      <g transform="translate(30, 205)">
        <rect width="360" height="130" rx="10" fill="#eff6ff" stroke="#bfdbfe"/>
        <text x="15" y="25" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1d4ed8">3. Strong Acid + Weak Base (NH₄Cl)</text>
        <text x="15" y="50" font-family="sans-serif" font-size="11" fill="#1e40af">• Cation hydrolyzes: B⁺ + H₂O ⇌ BOH + H⁺</text>
        <text x="15" y="70" font-family="sans-serif" font-size="11" fill="#1e40af">• K_h = K_w / K_b  |  h = √(K_w / (K_b · C))</text>
        <rect x="15" y="85" width="330" height="35" rx="6" fill="#ffffff" stroke="#3b82f6"/>
        <text x="180" y="107" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1d4ed8">pH = 7 − ½ pK_b − ½ log₁₀ C (&lt; 7, Acidic)</text>
      </g>

      <!-- 4. WA + WB -->
      <g transform="translate(410, 205)">
        <rect width="360" height="130" rx="10" fill="#fdf4ff" stroke="#f0abfc"/>
        <text x="15" y="25" font-family="sans-serif" font-weight="bold" font-size="13" fill="#a21caf">4. Weak Acid + Weak Base (CH₃COONH₄)</text>
        <text x="15" y="50" font-family="sans-serif" font-size="11" fill="#701a75">• Both hydrolyze: K_h = K_w / (K_a · K_b)</text>
        <text x="15" y="70" font-family="sans-serif" font-size="11" fill="#701a75">• Degree of hydrolysis h is INDEPENDENT of conc. C</text>
        <rect x="15" y="85" width="330" height="35" rx="6" fill="#ffffff" stroke="#d946ef"/>
        <text x="180" y="107" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#86198f">pH = 7 + ½ pK_a − ½ pK_b (Conc. Independent!)</text>
      </g>
    </svg>`,
    caption: "Master Salt Hydrolysis reference: Hydrolysis constant relations and exact formula patterns for all four classes of salts.",
    guide: "NEET Crucial Trap: For salt of WA + WB (e.g. ammonium acetate), pH is completely independent of concentration C!"
  },

  // 10. Solubility Product Ksp & Precipitation Decision Flowchart
  {
    id: "diag-ksp-precipitation-decision",
    title: "10. Solubility Equilibrium: Ionic Product (Q_sp) vs K_sp",
    category: "Ksp & Precipitation",
    svgContent: `<svg viewBox="0 0 800 340" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect x="10" y="10" width="780" height="320" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      
      <!-- Title -->
      <text x="400" y="40" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">
        Precipitation Criterion: Comparing Ionic Product Q_sp with Solubility Product K_sp
      </text>

      <!-- Sparingly Soluble Dissolution Equilibrium -->
      <rect x="40" y="60" width="720" height="40" rx="8" fill="#f1f5f9"/>
      <text x="400" y="85" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="15" fill="#334155">
        A_x B_y(s) ⇌ x A^{y+}(aq) + y B^{x-}(aq)   |   K_sp = [A^{y+}]^x [B^{x-}]^y (Solid omitted!)
      </text>

      <!-- 3 Outcome Cards -->
      <!-- 1. Qsp < Ksp -->
      <g transform="translate(40, 120)">
        <rect width="220" height="190" rx="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
        <rect width="220" height="36" rx="10" fill="#dcfce7"/>
        <text x="110" y="24" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="15" fill="#15803d">Q_sp &lt; K_sp</text>
        
        <text x="110" y="65" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#166534">Unsaturated Solution</text>
        <text x="20" y="95" font-family="sans-serif" font-size="11" fill="#334155">• Ion concentrations below saturation limit.</text>
        <text x="20" y="125" font-family="sans-serif" font-size="11" fill="#334155">• More solid CAN dissolve.</text>
        <rect x="15" y="145" width="190" height="35" rx="6" fill="#ffffff" stroke="#86efac"/>
        <text x="110" y="167" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#166534">NO PRECIPITATION</text>
      </g>

      <!-- 2. Qsp = Ksp -->
      <g transform="translate(290, 120)">
        <rect width="220" height="190" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
        <rect width="220" height="36" rx="10" fill="#dbeafe"/>
        <text x="110" y="24" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1d4ed8">Q_sp = K_sp</text>
        
        <text x="110" y="65" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e40af">Saturated Solution</text>
        <text x="20" y="95" font-family="sans-serif" font-size="11" fill="#334155">• Exact dynamic equilibrium reached.</text>
        <text x="20" y="125" font-family="sans-serif" font-size="11" fill="#334155">• Dissolution rate = Precipitation rate.</text>
        <rect x="15" y="145" width="190" height="35" rx="6" fill="#ffffff" stroke="#93c5fd"/>
        <text x="110" y="167" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1d4ed8">MAX SOLUBILITY LIMIT</text>
      </g>

      <!-- 3. Qsp > Ksp -->
      <g transform="translate(540, 120)">
        <rect width="220" height="190" rx="12" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
        <rect width="220" height="36" rx="10" fill="#fee2e2"/>
        <text x="110" y="24" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="15" fill="#b91c1c">Q_sp &gt; K_sp</text>
        
        <text x="110" y="65" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#991b1b">Supersaturated State</text>
        <text x="20" y="95" font-family="sans-serif" font-size="11" fill="#334155">• Ion product exceeds solubility capacity.</text>
        <text x="20" y="125" font-family="sans-serif" font-size="11" fill="#334155">• System pushes ions out of solution.</text>
        <rect x="15" y="145" width="190" height="35" rx="6" fill="#ffffff" stroke="#fca5a5"/>
        <text x="110" y="167" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#b91c1c">PRECIPITATION OCCURS! ⬇</text>
      </g>
    </svg>`,
    caption: "Solubility equilibrium and precipitation conditions: Precipitation occurs strictly when the ionic product Q_sp exceeds the solubility product K_sp.",
    guide: "NEET Salt Stoichiometry Formulas: AB ➔ K_sp = s²; AB₂ ➔ K_sp = 4s³; A₂B₃ ➔ K_sp = 108s⁵."
  },

  // 11. Common Ion Effect on AgCl Solubility
  {
    id: "diag-common-ion-solubility",
    title: "11. Common-Ion Effect on Sparingly Soluble Salts",
    category: "Ksp & Precipitation",
    svgContent: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect x="10" y="10" width="780" height="280" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      
      <!-- Title -->
      <text x="400" y="40" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">
        Solubility of AgCl in Pure Water vs In 0.1 M NaCl Solution
      </text>

      <!-- Comparison Columns -->
      <!-- Left: In Pure Water -->
      <g transform="translate(50, 65)">
        <rect width="330" height="200" rx="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
        <rect width="330" height="36" rx="10" fill="#dcfce7"/>
        <text x="165" y="24" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#15803d">Case 1: AgCl in Pure Water</text>
        
        <text x="20" y="65" font-family="sans-serif" font-size="12" fill="#334155">Equilibrium: AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)</text>
        <text x="20" y="90" font-family="sans-serif" font-size="12" fill="#334155">[Ag⁺] = s,  [Cl⁻] = s</text>
        <text x="20" y="115" font-family="sans-serif" font-size="12" fill="#334155">K_sp = s² = 1.0 × 10⁻¹⁰</text>
        
        <rect x="15" y="135" width="300" height="45" rx="6" fill="#ffffff" stroke="#86efac"/>
        <text x="165" y="162" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#15803d">
          s = √(10⁻¹⁰) = 1.0 × 10⁻⁵ M
        </text>
      </g>

      <!-- Right: In 0.1 M NaCl -->
      <g transform="translate(420, 65)">
        <rect width="330" height="200" rx="12" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
        <rect width="330" height="36" rx="10" fill="#fee2e2"/>
        <text x="165" y="24" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#b91c1c">Case 2: AgCl in 0.1 M NaCl</text>
        
        <text x="20" y="65" font-family="sans-serif" font-size="12" fill="#334155">From NaCl: [Cl⁻] ≈ 0.1 M (Common ion!)</text>
        <text x="20" y="90" font-family="sans-serif" font-size="12" fill="#334155">[Ag⁺] = s',  [Cl⁻] = s' + 0.1 ≈ 0.1 M</text>
        <text x="20" y="115" font-family="sans-serif" font-size="12" fill="#334155">K_sp = s' × (0.1) = 1.0 × 10⁻¹⁰</text>
        
        <rect x="15" y="135" width="300" height="45" rx="6" fill="#ffffff" stroke="#fca5a5"/>
        <text x="165" y="162" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#b91c1c">
          s' = 10⁻¹⁰ / 0.1 = 1.0 × 10⁻⁹ M (10,000× lower!)
        </text>
      </g>
    </svg>`,
    caption: "Quantitative impact of common-ion effect on molar solubility: Solubility of AgCl drops by a factor of 10,000 in 0.1 M NaCl.",
    guide: "Calculation Shortcut: In presence of common ion of concentration C, molar solubility s' = K_sp / C."
  },

  // 12. Industrial Equilibrium: Haber Process Optimization
  {
    id: "diag-haber-process",
    title: "12. Industrial Equilibrium: Haber Process for NH₃ Synthesis",
    category: "Chemical Equilibrium",
    svgContent: `<svg viewBox="0 0 800 320" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect x="10" y="10" width="780" height="300" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      
      <!-- Title -->
      <rect x="30" y="25" width="740" height="45" rx="8" fill="#0f172a"/>
      <text x="400" y="53" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="15" fill="#f8fafc">
        Haber Synthesis: N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g),  Δ_r H° = −92.4 kJ mol⁻¹
      </text>

      <!-- 4 Operating Conditions -->
      <g transform="translate(30, 85)">
        <!-- High Pressure -->
        <rect x="0" y="0" width="170" height="150" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="85" y="25" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1d4ed8">1. High Pressure</text>
        <text x="85" y="50" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e40af">~200 atm</text>
        <text x="15" y="80" font-family="sans-serif" font-size="11" fill="#334155">• Δn_g = 2 − 4 = −2</text>
        <text x="15" y="105" font-family="sans-serif" font-size="11" fill="#334155">• High P shifts reaction forward to fewer moles.</text>
        <text x="15" y="130" font-family="sans-serif" font-weight="bold" font-size="10" fill="#16a34a">Maximizes yield</text>

        <!-- Optimum Temperature -->
        <rect x="190" y="0" width="170" height="150" rx="10" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="275" y="25" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#b45309">2. Optimum Temp</text>
        <text x="275" y="50" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#92400e">~700 K (450°C)</text>
        <text x="205" y="80" font-family="sans-serif" font-size="11" fill="#334155">• Low T favors yield (exothermic).</text>
        <text x="205" y="105" font-family="sans-serif" font-size="11" fill="#334155">• But low T is too slow.</text>
        <text x="205" y="130" font-family="sans-serif" font-weight="bold" font-size="10" fill="#b45309">Optimum compromise</text>

        <!-- Catalyst & Promoters -->
        <rect x="380" y="0" width="170" height="150" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
        <text x="465" y="25" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#15803d">3. Catalyst System</text>
        <text x="465" y="50" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#166534">Iron Oxide + K₂O/Al₂O₃</text>
        <text x="395" y="80" font-family="sans-serif" font-size="11" fill="#334155">• Finely divided Fe catalyst.</text>
        <text x="395" y="105" font-family="sans-serif" font-size="11" fill="#334155">• K₂O and Al₂O₃ act as promoters.</text>
        <text x="395" y="130" font-family="sans-serif" font-weight="bold" font-size="10" fill="#15803d">Increases speed</text>

        <!-- Continuous Removal -->
        <rect x="570" y="0" width="170" height="150" rx="10" fill="#fdf4ff" stroke="#c084fc" stroke-width="1.5"/>
        <text x="655" y="25" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#7e22ce">4. Removal of NH₃</text>
        <text x="655" y="50" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#6b21a8">Liquefaction</text>
        <text x="585" y="80" font-family="sans-serif" font-size="11" fill="#334155">• NH₃ easily liquefies (H-bonding).</text>
        <text x="585" y="105" font-family="sans-serif" font-size="11" fill="#334155">• Unreacted N₂/H₂ recycled continuously.</text>
        <text x="585" y="130" font-family="sans-serif" font-weight="bold" font-size="10" fill="#7e22ce">Continuous shift (→)</text>
      </g>

      <!-- Bottom Takeaway -->
      <g transform="translate(30, 250)">
        <rect width="740" height="40" rx="8" fill="#f1f5f9"/>
        <text x="370" y="25" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#334155">
          Haber Process applies all Le Chatelier principles to maximize industrial output of NH₃.
        </text>
      </g>
    </svg>`,
    caption: "Application of equilibrium principles to the Haber process: Optimizing pressure (~200 atm), temperature (~700 K), catalyst, and continuous product removal.",
    guide: "NEET Relevance: Explains why optimum temperature is used instead of extremely low temperature, balancing thermodynamic yield against kinetic rate."
  },

  // 13. Physical Equilibrium Phase Transitions
  {
    id: "diag-physical-equilibrium",
    title: "13. Physical Equilibrium in Closed Phase Systems",
    category: "Chemical Equilibrium",
    svgContent: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="physArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#3b82f6"/>
        </marker>
        <marker id="physRev" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#ef4444"/>
        </marker>
      </defs>
      <!-- Background -->
      <rect x="10" y="10" width="780" height="280" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="400" y="40" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">
        Physical Equilibria in Closed Systems: Rates of Opposing Phase Changes are Equal
      </text>

      <!-- 3 Boxes: Liquid-Vapour, Solid-Liquid, Solid-Vapour -->
      <g transform="translate(40, 65)">
        <!-- 1. Liquid-Vapour -->
        <rect x="0" y="0" width="220" height="190" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="110" y="25" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1d4ed8">1. Liquid ⇌ Vapour</text>
        <text x="110" y="50" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1e40af">H₂O(l) ⇌ H₂O(g)</text>
        <text x="15" y="80" font-family="sans-serif" font-size="11" fill="#334155">• Evaporation Rate = Condensation Rate</text>
        <text x="15" y="105" font-family="sans-serif" font-size="11" fill="#334155">• Vapour pressure becomes constant at a given temperature</text>
        <rect x="15" y="130" width="190" height="45" rx="6" fill="#ffffff" stroke="#bfdbfe"/>
        <text x="110" y="157" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="11" fill="#1d4ed8">Equilibrium Vapour Pressure</text>

        <!-- 2. Solid-Liquid -->
        <rect x="250" y="0" width="220" height="190" rx="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
        <text x="360" y="25" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#15803d">2. Solid ⇌ Liquid</text>
        <text x="360" y="50" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#166534">H₂O(s) ⇌ H₂O(l)</text>
        <text x="265" y="80" font-family="sans-serif" font-size="11" fill="#334155">• Melting Rate = Freezing Rate</text>
        <text x="265" y="105" font-family="sans-serif" font-size="11" fill="#334155">• Occurs at normal melting point (0°C, 1 atm)</text>
        <rect x="265" y="130" width="190" height="45" rx="6" fill="#ffffff" stroke="#bbf7d0"/>
        <text x="360" y="157" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="11" fill="#15803d">Normal Melting Point</text>

        <!-- 3. Solid-Vapour -->
        <rect x="500" y="0" width="220" height="190" rx="12" fill="#fdf4ff" stroke="#c084fc" stroke-width="1.5"/>
        <text x="610" y="25" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#7e22ce">3. Solid ⇌ Vapour</text>
        <text x="610" y="50" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#6b21a8">I₂(s) ⇌ I₂(g)</text>
        <text x="515" y="80" font-family="sans-serif" font-size="11" fill="#334155">• Sublimation Rate = Deposition Rate</text>
        <text x="515" y="105" font-family="sans-serif" font-size="11" fill="#334155">• Constant intensity of violet vapour color in closed vessel</text>
        <rect x="515" y="130" width="190" height="45" rx="6" fill="#ffffff" stroke="#e9d5ff"/>
        <text x="610" y="157" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="11" fill="#7e22ce">Sublimation Equilibrium</text>
      </g>
    </svg>`,
    caption: "Dynamic equilibrium in physical processes: Characterized by constant measurable macroscopic properties (vapour pressure, colour intensity, temperature).",
    guide: "Key Concept: Physical equilibria require a strictly CLOSED system so matter cannot escape to surroundings."
  },

  // 14. Auto-Ionization of Water and Temperature Effect on pH
  {
    id: "diag-water-autoionization",
    title: "14. Auto-Ionization of Water (K_w) and Temperature Dependence",
    category: "Ionic Equilibrium",
    svgContent: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect x="10" y="10" width="780" height="280" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="400" y="40" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">
        Auto-Ionization of Water: 2 H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq),  ΔH &gt; 0 (Endothermic)
      </text>

      <!-- 2 Temperature Comparison Cards -->
      <g transform="translate(50, 65)">
        <!-- 25°C -->
        <rect x="0" y="0" width="330" height="195" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        <rect x="0" y="0" width="330" height="36" rx="10" fill="#dbeafe"/>
        <text x="165" y="24" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1d4ed8">At 25°C (Standard Temperature)</text>
        
        <text x="20" y="65" font-family="sans-serif" font-size="13" fill="#334155">K_w = 1.0 × 10⁻¹⁴</text>
        <text x="20" y="90" font-family="sans-serif" font-size="13" fill="#334155">[H⁺] = [OH⁻] = 1.0 × 10⁻⁷ M</text>
        <text x="20" y="115" font-family="sans-serif" font-size="13" fill="#334155">pH = −log(10⁻⁷) = 7.00</text>
        
        <rect x="15" y="135" width="300" height="45" rx="6" fill="#ffffff" stroke="#bfdbfe"/>
        <text x="165" y="162" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1d4ed8">
          Neutral pH = 7.00  |  pH + pOH = 14
        </text>

        <!-- Higher Temperature e.g. 90°C -->
        <rect x="370" y="0" width="330" height="195" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
        <rect x="370" y="0" width="330" height="36" rx="10" fill="#fef3c7"/>
        <text x="535" y="24" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#b45309">At Elevated Temp (e.g. 90°C)</text>
        
        <text x="390" y="65" font-family="sans-serif" font-size="13" fill="#334155">K_w increases to ~1.0 × 10⁻¹² (Endothermic!)</text>
        <text x="390" y="90" font-family="sans-serif" font-size="13" fill="#334155">[H⁺] = [OH⁻] = 1.0 × 10⁻⁶ M</text>
        <text x="390" y="115" font-family="sans-serif" font-size="13" fill="#334155">pH = −log(10⁻⁶) = 6.00</text>
        
        <rect x="385" y="135" width="300" height="45" rx="6" fill="#ffffff" stroke="#fde68a"/>
        <text x="535" y="155" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#b45309">
          Neutral pH = 6.00 (STILL NEUTRAL! [H⁺]=[OH⁻])
        </text>
        <text x="535" y="172" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400e">
          pH + pOH = 12 (at 90°C)
        </text>
      </g>
    </svg>`,
    caption: "Auto-ionization of water and temperature dependence of K_w: Neutrality is defined strictly by [H⁺] = [OH⁻], NOT necessarily pH = 7 at all temperatures.",
    guide: "NEET Trap: Hot pure water at 90°C has pH = 6.0, but it is strictly NEUTRAL because [H⁺] = [OH⁻] = 10⁻⁶ M."
  },

  // 15. pH of Ultra-Dilute Strong Acid (10^-8 M HCl)
  {
    id: "diag-dilute-acid-ph",
    title: "15. The 10⁻⁸ M HCl Trap: Common Ion Contribution of Water",
    category: "pH & Buffers",
    svgContent: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect x="10" y="10" width="780" height="280" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="400" y="38" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">
        NEET Classic Trap: Finding the pH of 10⁻⁸ M HCl Solution
      </text>

      <!-- Left: The Fatal Mistake -->
      <g transform="translate(50, 60)">
        <rect width="320" height="200" rx="12" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
        <rect width="320" height="34" rx="10" fill="#fee2e2"/>
        <text x="160" y="23" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#b91c1c">❌ COMMON BLUNDER (0 Marks)</text>
        
        <text x="20" y="65" font-family="sans-serif" font-size="12" fill="#334155">Assume [H⁺] = 10⁻⁸ M</text>
        <text x="20" y="90" font-family="sans-serif" font-size="12" fill="#334155">Calculate pH = −log₁₀(10⁻⁸) = 8.00</text>
        
        <rect x="15" y="115" width="290" height="65" rx="6" fill="#ffffff" stroke="#fca5a5"/>
        <text x="160" y="138" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#dc2626">FATAL CONCEPTUAL ERROR!</text>
        <text x="160" y="158" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7f1d1d">An acid solution can NEVER be basic (pH &gt; 7)!</text>
      </g>

      <!-- Right: Correct Calculation -->
      <g transform="translate(430, 60)">
        <rect width="320" height="200" rx="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
        <rect width="320" height="34" rx="10" fill="#dcfce7"/>
        <text x="160" y="23" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#15803d">✓ CORRECT NEET METHOD (+4 Marks)</text>
        
        <text x="15" y="60" font-family="sans-serif" font-size="11" fill="#334155">Include water auto-ionization: [H⁺]_total = [H⁺]_acid + [H⁺]_water</text>
        <text x="15" y="80" font-family="sans-serif" font-size="11" fill="#334155">[H⁺]_total = 10⁻⁸ + x, where (10⁻⁸ + x)(x) = 10⁻¹⁴</text>
        <text x="15" y="100" font-family="sans-serif" font-size="11" fill="#334155">x = 0.95 × 10⁻⁷ M ⟹ [H⁺]_total = 1.05 × 10⁻⁷ M</text>
        
        <rect x="15" y="115" width="290" height="65" rx="6" fill="#ffffff" stroke="#86efac"/>
        <text x="160" y="138" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="13" fill="#15803d">pH = −log₁₀(1.05 × 10⁻⁷) = 6.98</text>
        <text x="160" y="158" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#166534">Strictly acidic (pH &lt; 7) and realistic!</text>
      </g>
    </svg>`,
    caption: "The ultra-dilute acid paradox: In solutions where acid concentration is ≤ 10⁻⁶ M, the contribution of H⁺ from auto-ionization of water must be added.",
    guide: "Rule of Thumb: For 10⁻⁸ M HCl, pH ≈ 6.98. For 10⁻⁸ M NaOH, pH ≈ 7.02."
  }
];
