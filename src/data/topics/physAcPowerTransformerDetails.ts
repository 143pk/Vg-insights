import { DetailedTopicContent } from '../../types/neet';

export const physAcPowerTransformerDetails: DetailedTopicContent = {
  topicId: "phys-ac-power-transformer",
  topicName: "AC Power, Wattless Current & Transformers",
  subject: "Physics",
  class: "Class 12",
  classification: "Electromagnetic Induction & Alternating Current",
  chapter: "Alternating Current",

  whatIsThisTopic: "Complete masterclass on Power in AC Circuits (instantaneous, average, true vs apparent power, power factor cosφ = R/Z), Wattless Current, Choke Coils, Transformer principles, mathematical derivations of transformation ratios, Step-Up and Step-Down configurations, core energy loss mechanisms, efficiency calculations, and comprehensive chapter master summary.",

  basicIdea: [
    "Average power in an AC circuit depends on the phase angle between voltage and current: P_avg = V_rms I_rms cosφ. For pure resistors, cosφ = 1 (full power dissipation). For pure inductors and capacitors, φ = 90°, cosφ = 0, and average power is mathematically ZERO despite current flowing.",
    "Wattless Current (I_rms sinφ) is the component of AC current that is 90° out of phase with voltage and consumes zero average power. Choke coils utilize this principle to control AC current without wasting energy as heat.",
    "A Transformer operates on Faraday's law of mutual induction across a laminated soft-iron core to step up or step down AC voltages according to the turns ratio: V_s / V_p = N_s / N_p = I_p / I_s. Transformers CANNOT operate on steady DC because steady current produces a constant magnetic flux (dΦ/dt = 0), yielding zero secondary induced EMF."
  ],

  importantTerms: [
    {
      term: "True (Active) Power",
      symbol: "P",
      definition: "The actual average rate of electrical energy consumption in an AC circuit dissipated as heat in resistive elements: P = V_rms I_rms cosφ (measured in Watts, W or kW).",
      neetNote: "Only the resistive part of impedance consumes real active power."
    },
    {
      term: "Apparent (Virtual) Power",
      symbol: "S, P_app",
      definition: "The product of RMS voltage and RMS current measured across the terminals: S = V_rms I_rms (measured in Volt-Amperes, VA or kVA).",
      neetNote: "Apparent power represents the total volt-ampere rating of generators and transformers."
    },
    {
      term: "Power Factor",
      symbol: "cosφ",
      definition: "The ratio of true real power dissipated in a circuit to the apparent power supplied: cosφ = P / S = R / Z.",
      neetNote: "Pure R has cosφ = 1 (unity); Pure L or C has cosφ = 0 (zero power factor)."
    },
    {
      term: "Wattless Current",
      symbol: "I_w",
      definition: "The component of RMS current perpendicular (at 90°) to the RMS voltage vector: I_w = I_rms sinφ, which performs no net electrical work over a complete cycle.",
      neetNote: "In a pure inductor or capacitor, the entire current is wattless."
    },
    {
      term: "Choke Coil",
      symbol: "Choke",
      definition: "An inductor with very high self-inductance L and negligible ohmic resistance R, used to reduce alternating current without significant energy loss (in contrast to a resistive rheostat).",
      neetNote: "Used in fluorescent tube lights to limit current efficiently."
    },
    {
      term: "Transformer",
      symbol: "T",
      definition: "A static electrical device that transforms alternating voltage and current from one level to another through mutual electromagnetic induction at constant frequency.",
      neetNote: "Frequency remains strictly constant: f_secondary = f_primary."
    },
    {
      term: "Transformation Ratio",
      symbol: "k",
      definition: "The ratio of secondary coil turns to primary coil turns: k = N_s / N_p = V_s / V_p = I_p / I_s (for ideal lossless transformer).",
      neetNote: "For Step-Up: k > 1 (N_s > N_p, V_s > V_p, I_s < I_p); For Step-Down: k < 1 (N_s < N_p, V_s < V_p, I_s > I_p)."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Instantaneous & Average Power in AC Circuits: Derivation",
      paragraphs: [
        "Let the instantaneous alternating voltage and current in an arbitrary AC circuit with phase difference φ be: v(t) = V₀ sin(ωt) and i(t) = I₀ sin(ωt - φ).",
        "The instantaneous power p(t) delivered to the circuit at time t is:",
        "p(t) = v(t) · i(t) = V₀ I₀ sin(ωt) sin(ωt - φ).",
        "Using the trigonometric product-to-sum identity 2 sin A sin B = cos(A - B) - cos(A + B):",
        "p(t) = (V₀ I₀ / 2) [ cos(ωt - (ωt - φ)) - cos(ωt + ωt - φ) ] = (V₀ I₀ / 2) [ cosφ - cos(2ωt - φ) ].",
        "Average Power (P_avg) over one complete cycle (0 to T):",
        "P_avg = (1/T) ∫[0 to T] p(t) dt = (V₀ I₀ / 2) cosφ · (1/T) ∫ dt - (V₀ I₀ / 2) · (1/T) ∫ cos(2ωt - φ) dt.",
        "The time-average of cos(2ωt - φ) over a full period T is mathematically ZERO because it completes two full sinusoidal cycles.",
        "Therefore, the second term vanishes completely, leaving:",
        "P_avg = (V₀ I₀ / 2) cosφ = (V₀ / √2) (I₀ / √2) cosφ = V_rms I_rms cosφ.",
        "Power Relations Summary:",
        "1. True Power P = V_rms I_rms cosφ (Watts)",
        "2. Apparent Power S = V_rms I_rms (Volt-Amperes, VA)",
        "3. Reactive Power Q = V_rms I_rms sinφ (Volt-Amperes Reactive, VAR)",
        "4. Power Factor cosφ = True Power / Apparent Power = R / Z."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
          <rect width="740" height="280" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="370" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">AC POWER TRIANGLE &amp; POWER FACTOR (cosφ = R/Z)</text>
          
          <!-- Power Triangle on Left -->
          <g transform="translate(60, 50)">
            <rect width="280" height="200" fill="#ffffff" stroke="#cbd5e1" rx="8"/>
            <text x="140" y="22" fill="#0f172a" font-size="11.5" font-weight="bold" text-anchor="middle">Geometric Power Triangle</text>
            
            <!-- Base: True Power -->
            <line x1="40" y1="160" x2="200" y2="160" stroke="#16a34a" stroke-width="3.5"/>
            <text x="120" y="180" fill="#16a34a" font-size="11.5" font-weight="bold" text-anchor="middle">True Power P = VI cosφ (Watts)</text>

            <!-- Perpendicular: Reactive Power -->
            <line x1="200" y1="160" x2="200" y2="60" stroke="#7c3aed" stroke-width="3"/>
            <text x="210" y="110" fill="#7c3aed" font-size="10.5" font-weight="bold">Reactive Q = VI sinφ (VAR)</text>

            <!-- Hypotenuse: Apparent Power -->
            <line x1="40" y1="160" x2="200" y2="60" stroke="#2563eb" stroke-width="3.5"/>
            <text x="95" y="95" fill="#2563eb" font-size="11.5" font-weight="bold">Apparent S = VI (VA)</text>

            <!-- Angle Arc -->
            <path d="M 80 160 A 40 40 0 0 0 75 140" fill="none" stroke="#2563eb" stroke-width="2"/>
            <text x="90" y="152" fill="#2563eb" font-size="11" font-weight="bold">φ</text>
          </g>

          <!-- Right side formula cards -->
          <g transform="translate(370, 50)">
            <rect width="330" height="200" fill="#ffffff" stroke="#cbd5e1" rx="8"/>
            <text x="165" y="22" fill="#0f172a" font-size="11.5" font-weight="bold" text-anchor="middle">POWER FACTOR IN SPECIAL CIRCUITS</text>
            
            <!-- 1. Pure R -->
            <rect x="15" y="38" width="300" height="34" fill="#f0fdf4" stroke="#16a34a" rx="5"/>
            <text x="25" y="52" fill="#15803d" font-size="10.5" font-weight="bold">Pure Resistor (φ = 0°):</text>
            <text x="25" y="65" fill="#166534" font-size="10">cosφ = 1 (Unity), P = V_rms I_rms (100% Active)</text>

            <!-- 2. Pure L or C -->
            <rect x="15" y="80" width="300" height="34" fill="#fef2f2" stroke="#dc2626" rx="5"/>
            <text x="25" y="94" fill="#991b1b" font-size="10.5" font-weight="bold">Pure Inductor / Capacitor (φ = 90°):</text>
            <text x="25" y="107" fill="#b91c1c" font-size="10">cosφ = 0 (Zero Power Factor), P_avg = 0 W</text>

            <!-- 3. Series LCR at Resonance -->
            <rect x="15" y="122" width="300" height="34" fill="#fefce8" stroke="#ca8a04" rx="5"/>
            <text x="25" y="136" fill="#854d0e" font-size="10.5" font-weight="bold">Series LCR Resonance (X_L = X_C):</text>
            <text x="25" y="149" fill="#a16207" font-size="10">Z = R, cosφ = R/R = 1, P = P_max = V²/R</text>

            <!-- 4. General LCR -->
            <rect x="15" y="164" width="300" height="28" fill="#f8fafc" stroke="#94a3b8" rx="5"/>
            <text x="25" y="182" fill="#334155" font-size="10">General: cosφ = R / √[R² + (X_L - X_C)²]</text>
          </g>
        </svg>`,
        caption: "Figure 7.13: AC Power Triangle displaying True Power (P), Reactive Power (Q), and Apparent Power (S), deriving Power Factor cosφ = R/Z.",
        guide: "A low power factor (cosφ << 1) requires larger current for the same useful power delivery (I = P / (V cosφ)), leading to severe I²R transmission losses."
      },
      importantPoints: [
        "P = V_rms I_rms cosφ = I_rms² R = (V_rms² R) / Z².",
        "Zero average power in ideal L or C does NOT mean zero current; it means energy is cyclically stored and returned without dissipation."
      ]
    },
    {
      heading: "2. Wattless Current & The Choke Coil Principle",
      paragraphs: [
        "Resolving the RMS current phasor I_rms into two orthogonal components relative to the RMS voltage V_rms:",
        "1. Active (Wattful) Component: I_active = I_rms cosφ (in phase with V_rms). Power consumed = V_rms (I_rms cosφ) = V_rms I_rms cosφ = True Power.",
        "2. Wattless (Idle) Component: I_wattless = I_rms sinφ (at 90° to V_rms). Power consumed = V_rms (I_rms sinφ) cos(90°) = 0 W.",
        "Physical Significance: The wattless current shuttles magnetic energy into the inductor or electrostatic energy into the capacitor during one quarter-cycle and returns it completely back to the AC source in the next quarter-cycle.",
        "The Choke Coil: In AC lighting circuits (like fluorescent tube lights), we need to reduce current from a high supply voltage. If we use a standard resistor, it dissipates massive heat (I²R). Instead, we insert a Choke Coil having high inductance L (high X_L = ωL) and very low internal resistance R. The choke coil creates a large phase angle φ ≈ 90° (cosφ ≈ 0), effectively limiting the current with virtually zero Joule heat wastage!"
      ],
      importantPoints: [
        "Wattless current magnitude = I_rms sinφ.",
        "A choke coil controls AC current with negligible power loss, whereas a rheostat wastes energy as I²R heat."
      ]
    },
    {
      heading: "3. Transformer: Principle, Construction & Laminated Core",
      paragraphs: [
        "A Transformer is an electromagnetic static device used to step up (increase) or step down (decrease) alternating voltage at a constant frequency, operating strictly on Faraday's law of Mutual Induction.",
        "Core Construction:",
        "1. Laminated Soft Iron Core: Constructed from multiple thin sheets of high-permeability soft iron / silicon steel, individually coated with insulating varnish and stacked tightly together. This breaks large continuous conductive loops, drastically suppressing destructive Eddy Current heat losses (P_eddy ∝ thickness²).",
        "2. Primary Coil (P): Connected to the input alternating voltage source with N_p turns.",
        "3. Secondary Coil (S): Connected to the output load circuit with N_s turns.",
        "Operating Mechanism:",
        "When alternating current i_p(t) flows through the primary coil, it establishes a continuously alternating magnetic flux Φ(t) inside the soft iron core. This flux links both the primary and secondary windings.",
        "By Faraday's law:",
        "Primary self-induced EMF: e_p = -N_p (dΦ/dt).",
        "Secondary mutual-induced EMF: e_s = -N_s (dΦ/dt).",
        "Why Transformers Fail on DC: If steady DC voltage is applied to the primary, the resulting magnetic flux is constant (dΦ/dt = 0). Consequently, induced EMF in the secondary is ZERO! Furthermore, because an inductor has zero reactance for DC (X_L = 0), a massive current will flow through the low-resistance primary winding and burn it out completely."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
          <rect width="740" height="300" fill="#ffffff" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="370" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">TRANSFORMER PRINCIPLE &amp; LAMINATED CORE CONSTRUCTION</text>
          
          <!-- Soft Iron Core (Square frame) -->
          <!-- Outer rect -->
          <rect x="220" y="45" width="300" height="220" fill="#e2e8f0" stroke="#475569" stroke-width="3" rx="10"/>
          <!-- Inner window -->
          <rect x="290" y="95" width="160" height="120" fill="#ffffff" stroke="#475569" stroke-width="2.5" rx="6"/>
          
          <!-- Lamination lines on core -->
          <line x1="230" y1="45" x2="230" y2="265" stroke="#94a3b8" stroke-width="1.5"/>
          <line x1="240" y1="45" x2="240" y2="265" stroke="#94a3b8" stroke-width="1.5"/>
          <line x1="250" y1="45" x2="250" y2="265" stroke="#94a3b8" stroke-width="1.5"/>
          <line x1="490" y1="45" x2="490" y2="265" stroke="#94a3b8" stroke-width="1.5"/>
          <line x1="500" y1="45" x2="500" y2="265" stroke="#94a3b8" stroke-width="1.5"/>
          <line x1="510" y1="45" x2="510" y2="265" stroke="#94a3b8" stroke-width="1.5"/>

          <text x="370" y="145" fill="#475569" font-size="11" font-weight="bold" text-anchor="middle">Laminated Soft Iron Core</text>
          <text x="370" y="162" fill="#64748b" font-size="9.5" text-anchor="middle">(Varnished Sheets Reduce Eddy Loss)</text>

          <!-- Magnetic Flux Loop (Dashed Teal with arrows) -->
          <rect x="255" y="70" width="230" height="170" fill="none" stroke="#0d9488" stroke-width="2" stroke-dasharray="6 4" rx="8"/>
          <text x="370" y="82" fill="#0d9488" font-size="10.5" font-weight="bold" text-anchor="middle">Alternating Magnetic Flux Φ(t)</text>

          <!-- Primary Coil Left -->
          <!-- Windings on left limb -->
          <g stroke="#2563eb" stroke-width="3" fill="none">
            <path d="M 120 90 L 220 90 C 200 100 200 115 220 115 C 200 125 200 140 220 140 C 200 150 200 165 220 165 C 200 175 200 190 220 190 L 120 190"/>
          </g>
          <text x="170" y="75" fill="#2563eb" font-size="11.5" font-weight="bold" text-anchor="middle">Primary Coil (N_p)</text>
          
          <!-- Primary Input AC -->
          <circle cx="95" cy="140" r="16" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
          <path d="M 89 140 Q 92 134 95 140 T 101 140" fill="none" stroke="#0284c7" stroke-width="2"/>
          <text x="95" y="172" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">V_p, I_p (AC)</text>
          <line x1="120" y1="90" x2="95" y2="124" stroke="#334155" stroke-width="2"/>
          <line x1="120" y1="190" x2="95" y2="156" stroke="#334155" stroke-width="2"/>

          <!-- Secondary Coil Right -->
          <!-- Windings on right limb -->
          <g stroke="#dc2626" stroke-width="3" fill="none">
            <path d="M 520 80 L 620 80 C 540 90 540 100 520 100 C 540 110 540 120 520 120 C 540 130 540 140 520 140 C 540 150 540 160 520 160 C 540 170 540 180 520 180 C 540 190 540 200 520 200 L 620 200"/>
          </g>
          <text x="570" y="65" fill="#dc2626" font-size="11.5" font-weight="bold" text-anchor="middle">Secondary Coil (N_s)</text>
          
          <!-- Secondary Load -->
          <rect x="630" y="115" width="65" height="50" fill="#fef2f2" stroke="#dc2626" stroke-width="2" rx="6"/>
          <text x="662.5" y="145" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">LOAD R_L</text>
          <text x="662.5" y="180" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">V_s, I_s</text>
          <line x1="620" y1="80" x2="662.5" y2="115" stroke="#334155" stroke-width="2"/>
          <line x1="620" y1="200" x2="662.5" y2="165" stroke="#334155" stroke-width="2"/>
        </svg>`,
        caption: "Figure 7.14: Mutual induction in a transformer. Alternating primary current creates a cyclic core flux Φ(t) inducing voltage V_s in the secondary.",
        guide: "Thin varnished core laminations run parallel to the magnetic flux lines to disrupt perpendicular eddy current circulation paths."
      },
      importantPoints: [
        "Transformers operate ONLY on Alternating Current (AC). They cannot function on steady DC.",
        "AC frequency is strictly conserved: f_secondary = f_primary."
      ]
    },
    {
      heading: "4. Transformer Equations & Step-Up vs Step-Down Types",
      paragraphs: [
        "Assuming an ideal transformer with zero winding resistance, zero flux leakage, and 100% coupling efficiency:",
        "1. Voltage Ratio: V_s / V_p = e_s / e_p = (-N_s dΦ/dt) / (-N_p dΦ/dt)  ===>  V_s / V_p = N_s / N_p = k.",
        "2. Current & Power Conservation: In an ideal transformer, Input Power = Output Power: P_in = P_out  ===>  V_p I_p = V_s I_s.",
        "Rearranging yields the inverse current relation: I_s / I_p = V_p / V_s = N_p / N_s = 1 / k.",
        "Step-Up Transformer:",
        "• Number of secondary turns exceeds primary: N_s > N_p (k > 1).",
        "• Output voltage exceeds input voltage: V_s > V_p.",
        "• Output current is LOWER than input current: I_s < I_p.",
        "• Primary coil is wound with THICK copper wire (to carry high current I_p with low I²R heating), while secondary is wound with thinner wire.",
        "• Applications: Power generation stations (stepping up 11 kV to 132 kV or 400 kV for grid transmission).",
        "Step-Down Transformer:",
        "• Number of secondary turns is less than primary: N_s < N_p (k < 1).",
        "• Output voltage is LOWER than input voltage: V_s < V_p.",
        "• Output current is HIGHER than input current: I_s > I_p.",
        "• Secondary coil is wound with THICK copper wire (to safely conduct large load current I_s), while primary is thinner.",
        "• Applications: Distribution substations (stepping 11 kV down to 220 V), phone chargers, welding machines."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 740 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
          <rect width="740" height="260" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="370" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">STEP-UP vs STEP-DOWN TRANSFORMER COMPARISON</text>
          
          <!-- Step Up on Left -->
          <g transform="translate(40, 45)">
            <rect width="310" height="195" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" rx="8"/>
            <text x="155" y="22" fill="#1e40af" font-size="12.5" font-weight="bold" text-anchor="middle">STEP-UP TRANSFORMER (k &gt; 1)</text>
            
            <text x="20" y="50" fill="#0f172a" font-size="11">Turns: <tspan fill="#2563eb" font-weight="bold">N_s &gt; N_p</tspan> (More secondary turns)</text>
            <text x="20" y="72" fill="#0f172a" font-size="11">Voltage: <tspan fill="#16a34a" font-weight="bold">V_s &gt; V_p</tspan> (Steps voltage UP)</text>
            <text x="20" y="94" fill="#0f172a" font-size="11">Current: <tspan fill="#dc2626" font-weight="bold">I_s &lt; I_p</tspan> (Steps current DOWN)</text>
            <text x="20" y="116" fill="#0f172a" font-size="11">Wire Gauge: <tspan fill="#475569" font-weight="bold">Thick Primary</tspan> (high I_p)</text>
            <text x="20" y="138" fill="#0f172a" font-size="11">Power: <tspan fill="#475569" font-weight="bold">V_p I_p = V_s I_s</tspan> (Conserved)</text>
            
            <rect x="20" y="152" width="270" height="30" fill="#eff6ff" stroke="#93c5fd" rx="5"/>
            <text x="155" y="172" fill="#1d4ed8" font-size="10.5" font-weight="bold" text-anchor="middle">Use: Generating stations (Grid transmission)</text>
          </g>

          <!-- Step Down on Right -->
          <g transform="translate(390, 45)">
            <rect width="310" height="195" fill="#ffffff" stroke="#d97706" stroke-width="1.5" rx="8"/>
            <text x="155" y="22" fill="#b45309" font-size="12.5" font-weight="bold" text-anchor="middle">STEP-DOWN TRANSFORMER (k &lt; 1)</text>
            
            <text x="20" y="50" fill="#0f172a" font-size="11">Turns: <tspan fill="#d97706" font-weight="bold">N_s &lt; N_p</tspan> (Fewer secondary turns)</text>
            <text x="20" y="72" fill="#0f172a" font-size="11">Voltage: <tspan fill="#dc2626" font-weight="bold">V_s &lt; V_p</tspan> (Steps voltage DOWN)</text>
            <text x="20" y="94" fill="#0f172a" font-size="11">Current: <tspan fill="#16a34a" font-weight="bold">I_s &gt; I_p</tspan> (Steps current UP)</text>
            <text x="20" y="116" fill="#0f172a" font-size="11">Wire Gauge: <tspan fill="#475569" font-weight="bold">Thick Secondary</tspan> (high I_s)</text>
            <text x="20" y="138" fill="#0f172a" font-size="11">Power: <tspan fill="#475569" font-weight="bold">V_p I_p = V_s I_s</tspan> (Conserved)</text>
            
            <rect x="20" y="152" width="270" height="30" fill="#fffbeb" stroke="#fde68a" rx="5"/>
            <text x="155" y="172" fill="#b45309" font-size="10.5" font-weight="bold" text-anchor="middle">Use: Substations (220V), Chargers, Adapters</text>
          </g>
        </svg>`,
        caption: "Figure 7.15: Comparative structural and operational parameters of Step-Up and Step-Down Transformers.",
        guide: "Conservation of energy dictates that whenever voltage is stepped up, current is stepped down in exact inverse proportion (V_s I_s = V_p I_p)."
      },
      importantPoints: [
        "Transformation ratio k = N_s / N_p = V_s / V_p = I_p / I_s.",
        "Step-Up has thick primary wire; Step-Down has thick secondary wire."
      ]
    },
    {
      heading: "5. Energy Loss Mechanisms & Efficiency in Practical Transformers",
      paragraphs: [
        "In practical transformers, output power is always slightly less than input power due to four well-characterized physical loss mechanisms:",
        "1. Copper (Joule) Loss (I²R): Heat generated in primary and secondary copper windings due to their internal ohmic resistance. Mitigation: Windings carrying large current are fabricated with thick copper conductors of low resistance.",
        "2. Eddy Current Loss: Alternating magnetic flux induces circulating electric currents in the solid iron core, causing heating (P_loss ∝ f² B_max² t²). Mitigation: The core is constructed from laminated, thin varnished steel sheets stacked parallel to the flux lines.",
        "3. Hysteresis Loss: During every cycle of AC, the magnetic domains in the core are repeatedly magnetized and demagnetized, dissipating energy equal to the area of the B-H loop. Mitigation: Use soft iron or Silicon steel alloy (Permalloy) which possesses a very narrow hysteresis loop (low coercivity and low retentivity).",
        "4. Flux Leakage: Not all magnetic flux generated by the primary links with the secondary coil due to air gaps. Mitigation: Wind the secondary coil directly over the primary coil coaxially (shell-type core design).",
        "5. Magnetostriction (Humming Sound): Cyclic microscopic expansion/contraction of iron core crystals under alternating magnetic fields produces acoustic humming noise.",
        "Transformer Efficiency (η):",
        "η = (Output Power / Input Power) × 100% = (V_s I_s cosφ_s / V_p I_p cosφ_p) × 100%.",
        "Also expressed as: η = [ P_out / (P_out + Total Losses) ] × 100%."
      ],
      importantPoints: [
        "Laminated core reduces Eddy current losses.",
        "Soft iron core reduces Hysteresis losses.",
        "Coaxial winding minimizes Flux leakage."
      ]
    }
  ],

  formulae: [
    {
      title: "Average AC Power Equation",
      formula: "P_{\\text{avg}} = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi = I_{\\text{rms}}^2 R = \\frac{V_{\\text{rms}}^2 R}{Z^2}",
      meaning: "Actual average rate of electrical energy dissipation in an AC circuit.",
      variables: "P_avg = Active power (W), V_rms = RMS voltage (V), I_rms = RMS current (A), φ = Phase angle, R = Resistance (Ω), Z = Impedance (Ω)",
      unit: "Watts (W) or Kilowatts (kW)",
      whenToUse: "To calculate power consumed by motors, heaters, and AC circuits.",
      calculationExample: {
        problem: "In an AC circuit, V = 100 sin(100t) V and i = 100 sin(100t + π/3) mA. Calculate average power consumed.",
        stepByStep: [
          "V₀ = 100 V ==> V_rms = 100 / √2 V.",
          "I₀ = 100 mA = 0.1 A ==> I_rms = 0.1 / √2 A.",
          "Phase difference φ = π/3 = 60° ==> cos(60°) = 0.5.",
          "P = V_rms I_rms cosφ = (100 / √2) × (0.1 / √2) × 0.5 = (10 / 2) × 0.5 = 2.5 W."
        ],
        answer: "P = 2.5 W"
      }
    },
    {
      title: "Power Factor Expression",
      formula: "\\cos\\phi = \\frac{R}{Z} = \\frac{R}{\\sqrt{R^2 + (X_L - X_C)^2}} = \\frac{\\text{True Power}}{\\text{Apparent Power}}",
      meaning: "Fraction of apparent power that performs useful work.",
      variables: "cosφ = Power factor (0 to 1), R = Resistance, Z = Impedance",
      unit: "Dimensionless (0 to 1)",
      whenToUse: "To evaluate circuit electrical efficiency and phase lag.",
      calculationExample: {
        problem: "An electric lamp is designed for 100 V, 50 W. It is connected to a 200 V, 50 Hz AC line with a series choke coil. Find the power factor.",
        stepByStep: [
          "Rated current I = P/V = 50 / 100 = 0.5 A. Lamp resistance R = V/I = 100 / 0.5 = 200 Ω.",
          "On 200 V supply, total impedance must be Z = V_total / I = 200 / 0.5 = 400 Ω.",
          "Power factor cosφ = R / Z = 200 / 400 = 0.5."
        ],
        answer: "cosφ = 0.5"
      }
    },
    {
      title: "Wattless Current Formula",
      formula: "I_{\\text{wattless}} = I_{\\text{rms}} \\sin\\phi",
      meaning: "Component of current that consumes zero average electrical power.",
      variables: "I_wattless = Wattless current (A), I_rms = Total RMS current (A), φ = Phase angle",
      unit: "Amperes (A)",
      whenToUse: "To find idle current component in reactive circuits.",
      calculationExample: {
        problem: "In an AC circuit, RMS current is 10 A and power factor is 0.6. Find the active and wattless components of current.",
        stepByStep: [
          "cosφ = 0.6 ==> sinφ = √(1 - 0.6²) = √(0.64) = 0.8.",
          "Active current = I_rms cosφ = 10 × 0.6 = 6 A.",
          "Wattless current = I_rms sinφ = 10 × 0.8 = 8 A."
        ],
        answer: "Active = 6 A, Wattless = 8 A"
      }
    },
    {
      title: "Transformer Transformation Equations",
      formula: "\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s} = k, \\quad \\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\%",
      meaning: "Ratios governing voltage, turns, current, and efficiency in transformers.",
      variables: "V_p, V_s = Primary/Secondary voltages; N_p, N_s = Turns; I_p, I_s = Currents; η = Efficiency",
      unit: "Volts (V), Turns (unitless), Amperes (A), Efficiency (%)",
      whenToUse: "For all step-up, step-down, and efficiency transformer calculations.",
      calculationExample: {
        problem: "A step-down transformer operates on a 2200 V primary line and supplies a load of 44 A at 220 V. If efficiency is 88%, find primary current.",
        stepByStep: [
          "Output power P_out = V_s I_s = 220 V × 44 A = 9680 W.",
          "Input power P_in = P_out / (η/100) = 9680 / 0.88 = 11,000 W.",
          "Primary current I_p = P_in / V_p = 11,000 / 2200 = 5 A."
        ],
        answer: "I_p = 5 A"
      }
    }
  ],

  neetImportantPoints: [
    "Average power in an AC circuit is consumed ONLY by resistance R. Pure inductors and capacitors consume zero average power over a complete cycle.",
    "Wattless current is I_rms sinφ. In a pure L or C circuit, φ = 90°, so sinφ = 1 and the entire current is wattless.",
    "A choke coil controls current in an AC circuit with minimal power loss because of its high inductance L and near-zero resistance R.",
    "Transformers CANNOT step up or step down DC voltages. If connected to DC, secondary induced EMF is zero, and primary coil burns out due to zero inductive reactance (X_L = 0).",
    "Transformer core is laminated with varnished sheets to reduce Eddy current losses (P_eddy ∝ thickness²).",
    "Transformer core is made of Soft Iron / Silicon Steel to minimize Hysteresis losses due to its narrow B-H loop."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming that a Step-Up transformer creates energy because output voltage is higher than input voltage.",
      correctFact: "A step-up transformer steps up voltage but simultaneously steps down current (I_s < I_p) such that output power V_s I_s ≤ V_p I_p, strictly obeying conservation of energy.",
      whyItMattersForNEET: "Frequent trap in conceptual questions on transformer power and energy."
    },
    {
      commonConfusion: "Thinking that connecting a DC battery to a transformer primary will give a steady DC output in the secondary.",
      correctFact: "Steady DC produces constant magnetic flux (dΦ/dt = 0), so secondary induced EMF is strictly ZERO. The primary will overheat and burn.",
      whyItMattersForNEET: "Direct NCERT conceptual question asked repeatedly in AIPMT/NEET."
    },
    {
      commonConfusion: "Believing that high power factor increases electricity transmission line losses.",
      correctFact: "High power factor (cosφ ≈ 1) minimizes line loss. Since I = P / (V cosφ), a low power factor forces high current I, causing massive I²R heat losses in power cables.",
      whyItMattersForNEET: "Crucial understanding for industrial power factor correction capacitors."
    }
  ],

  quickRevision: [
    "Average Power: P = V_rms I_rms cosφ = I_rms² R.",
    "Power Factor: cosφ = R / Z. Pure R: cosφ = 1; Pure L or C: cosφ = 0; Resonance: cosφ = 1.",
    "Wattless Current = I_rms sinφ (consumes zero power).",
    "Choke Coil: High L, low R — controls AC current without energy loss.",
    "Transformer: V_s / V_p = N_s / N_p = I_p / I_s = k (operates on AC only).",
    "Step-Up: N_s > N_p, V_s > V_p, I_s < I_p. Step-Down: N_s < N_p, V_s < V_p, I_s > I_p.",
    "Losses: Copper loss (I²R), Eddy current (minimized by laminations), Hysteresis (minimized by soft iron), Flux leakage (minimized by coaxial winding).",
    "Efficiency: η = (P_out / P_in) × 100%."
  ],

  pyqs: [
    {
      id: "pyq-ac-2020",
      year: 2020,
      exam: "NEET UG",
      question: "A 40 μF capacitor is connected to a 200 V, 50 Hz AC supply. The RMS value of the current in the circuit is, nearly:",
      options: [
        "1.7 A",
        "2.05 A",
        "2.5 A",
        "25.1 A"
      ],
      correctAnswer: 2,
      explanation: "Step 1: Given C = 40 μF = 40 × 10⁻⁶ F, V_rms = 200 V, and f = 50 Hz.\nStep 2: Capacitive reactance X_C = 1 / (2πfC) = 1 / (2 × 3.1416 × 50 × 40 × 10⁻⁶) = 1 / (100π × 40 × 10⁻⁶) = 10⁶ / (4000π) = 250 / π ≈ 79.58 Ω.\nStep 3: RMS current I_rms = V_rms / X_C = 200 / (250/π) = (200π) / 250 = 0.8π = 0.8 × 3.1416 ≈ 2.51 A ≈ 2.5 A. Option C is correct.",
      conceptTested: "Pure capacitive AC circuit RMS current calculation.",
      difficulty: "Easy"
    },
    {
      id: "pyq-ac-2019",
      year: 2019,
      exam: "NEET UG",
      question: "A step-down transformer connected to an AC mains supply of 220 V is made to operate at 11 V, 44 W lamp. Ignoring power losses in the transformer, what is the current in the primary circuit?",
      options: [
        "0.2 A",
        "0.4 A",
        "2 A",
        "4 A"
      ],
      correctAnswer: 0,
      explanation: "Step 1: For an ideal transformer (ignoring power losses), Input Power = Output Power: P_in = P_out.\nStep 2: Output power P_out = 44 W, and Primary voltage V_p = 220 V.\nStep 3: Since P_in = V_p · I_p = 44 W ==> 220 · I_p = 44 ==> I_p = 44 / 220 = 1 / 5 = 0.2 A. Option A is correct.",
      conceptTested: "Ideal transformer power conservation and primary current determination.",
      difficulty: "Easy"
    },
    {
      id: "pyq-ac-2016",
      year: 2016,
      exam: "NEET UG",
      question: "The potential differences across the resistance, capacitance and inductance are 80 V, 40 V and 100 V respectively in an LCR circuit. The power factor of this circuit is:",
      options: [
        "0.4",
        "0.5",
        "0.8",
        "1.0"
      ],
      correctAnswer: 2,
      explanation: "Step 1: Given V_R = 80 V, V_C = 40 V, and V_L = 100 V.\nStep 2: Net resultant circuit voltage V = √[V_R² + (V_L - V_C)²] = √[80² + (100 - 40)²] = √[80² + 60²] = √[6400 + 3600] = √10000 = 100 V.\nStep 3: Power factor cosφ = V_R / V = 80 / 100 = 0.8. Option C is correct.",
      conceptTested: "Power factor calculation from component voltages in LCR circuit.",
      difficulty: "Easy"
    },
    {
      id: "pyq-ac-2012",
      year: 2012,
      exam: "AIPMT",
      question: "An alternating electric current has a frequency of 50 Hz. How many times does it change its direction in one second?",
      options: [
        "50 times",
        "100 times",
        "200 times",
        "25 times"
      ],
      correctAnswer: 1,
      explanation: "In one complete sinusoidal cycle, the current reaches a maximum in the positive direction, passes through zero, reaches a maximum in the negative direction, and passes through zero again. Thus, current changes its direction 2 times per complete cycle. In 1 second, for a frequency of 50 Hz (50 cycles/sec), it changes direction 2 × 50 = 100 times. Option B is correct.",
      conceptTested: "Fundamental frequency and directional inversion of AC.",
      difficulty: "Easy"
    }
  ],

  practiceQuestions: [
    {
      id: "prac-trans-1",
      question: "The core of a transformer is laminated so that:",
      options: [
        "Ratio of voltage is increased",
        "Rusting of the core may be stopped",
        "Energy loss due to eddy currents may be minimized",
        "Weight of the transformer may be reduced"
      ],
      correctAnswer: 2,
      explanation: "Laminating the transformer core with thin varnished sheets breaks large continuous electrical conductive loops, drastically increasing electrical resistance to eddy currents and minimizing Joule heat energy loss.",
      conceptTested: "Transformer core lamination and eddy current reduction.",
      difficulty: "Easy"
    },
    {
      id: "prac-trans-2",
      question: "A choke coil has:",
      options: [
        "High inductance and high resistance",
        "Low inductance and low resistance",
        "High inductance and low resistance",
        "Low inductance and high resistance"
      ],
      correctAnswer: 2,
      explanation: "A choke coil is designed with high self-inductance L (to provide high reactive opposition X_L = ωL) and very low ohmic resistance R (to ensure power factor cosφ ≈ 0 and negligible heat dissipation).",
      conceptTested: "Choke coil design parameters.",
      difficulty: "Easy"
    }
  ]
};
