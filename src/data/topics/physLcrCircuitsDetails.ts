import { DetailedTopicContent } from '../../types/neet';

export const physLcrCircuitsDetails: DetailedTopicContent = {
  topicId: "phys-lcr-circuits",
  topicName: "Series LCR Circuits, Impedance & Resonance",
  subject: "Physics",
  class: "Class 12",
  classification: "Electromagnetic Induction & Alternating Current",
  chapter: "Alternating Current",

  whatIsThisTopic: "Complete masterclass on Series LCR AC circuits: phasor analysis, vector addition of voltages, derivation of circuit impedance (Z), phase angle (tanφ), condition and mathematical derivation of series electrical resonance, resonance curves, bandwidth, and Quality factor (Q).",

  basicIdea: [
    "In a series LCR circuit, the exact same instantaneous current i(t) flows through resistor R, inductor L, and capacitor C. However, the voltages across them peak at different instants: V_R is in phase with i(t), V_L leads i(t) by 90°, and V_C lags i(t) by 90°.",
    "The total net reactive voltage is (V_L - V_C). Because V_R is perpendicular to (V_L - V_C) on the phasor plane, the resultant supply voltage is given by the Pythagorean vector sum: V = √[V_R² + (V_L - V_C)²], giving an impedance Z = √[R² + (X_L - X_C)²].",
    "At a unique resonant angular frequency ω₀ = 1/√(LC), inductive reactance exactly balances capacitive reactance (X_L = X_C). The reactive impedance cancels out, rendering the circuit purely resistive with minimum impedance Z_min = R and maximum current I_max = V/R."
  ],

  importantTerms: [
    {
      term: "Series LCR Circuit",
      symbol: "R-L-C",
      definition: "An electrical circuit comprising a resistor (R), an inductor (L), and a capacitor (C) connected in series across an alternating voltage source.",
      neetNote: "Current is identical in magnitude and phase through all three elements at every instant."
    },
    {
      term: "Impedance",
      symbol: "Z",
      definition: "The total effective opposition offered by a combination of resistance and reactance to the flow of alternating current: Z = √[R² + (X_L - X_C)²] (measured in Ohms, Ω).",
      neetNote: "Z is NEVER simply (R + X_L + X_C); it is always a vector sum in the complex impedance plane."
    },
    {
      term: "Phase Angle",
      symbol: "φ",
      definition: "The angle by which the supply voltage leads or lags the circuit current: tanφ = (X_L - X_C) / R = (V_L - V_C) / V_R.",
      neetNote: "If X_L > X_C, φ > 0 (inductive, V leads I); if X_C > X_L, φ < 0 (capacitive, I leads V); if X_L = X_C, φ = 0 (in phase)."
    },
    {
      term: "Series Electrical Resonance",
      symbol: "f₀, ω₀",
      definition: "The operational state of a series LCR circuit when inductive reactance equals capacitive reactance (X_L = X_C), causing impedance to drop to its minimum value (Z = R) and current to reach its maximum amplitude.",
      neetNote: "Resonant angular frequency: ω₀ = 1/√(LC) rad/s; Resonant frequency: f₀ = 1 / (2π√(LC)) Hz."
    },
    {
      term: "Bandwidth",
      symbol: "Δω, 2Δf",
      definition: "The frequency span between the two half-power frequencies (ω₁ and ω₂) where current amplitude falls to I_max / √2 (≈ 70.7% of maximum): Δω = ω₂ - ω₁ = R / L.",
      neetNote: "Smaller bandwidth corresponds to a sharper, more selective resonance curve (ideal for radio tuning)."
    },
    {
      term: "Quality Factor (Q-Factor)",
      symbol: "Q",
      definition: "A dimensionless figure of merit measuring the sharpness of resonance and voltage magnification: Q = ω₀ / Δω = (ω₀ L) / R = (1 / R) √(L / C).",
      neetNote: "High Q requires large L, small C, and small R. Voltage across L or C at resonance is V_L = V_C = Q × V_source."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Series LCR Circuit Architecture & Current Reference",
      paragraphs: [
        "In a series LCR circuit, a resistor of resistance R, an inductor of inductance L, and a capacitor of capacitance C are connected in series across an AC generator providing an alternating EMF: v(t) = V₀ sin(ωt).",
        "Because all elements are wired in series, the same instantaneous alternating current flows through each component: i(t) = I₀ sin(ωt - φ), where φ is the phase difference between the total applied voltage and current.",
        "Let the instantaneous potential differences across R, L, and C be v_R(t), v_L(t), and v_C(t).",
        "By Kirchhoff's loop rule: v(t) = v_R(t) + v_L(t) + v_C(t).",
        "Crucial Note: We cannot simply add the peak voltages algebraically (V₀ ≠ V_R0 + V_L0 + V_C0) because these three voltages reach their peaks at different times. They must be added as rotating vectors (phasors)!"
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 740 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
          <rect width="740" height="260" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="370" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">SERIES LCR CIRCUIT DIAGRAM</text>
          
          <!-- Circuit Loop -->
          <!-- Top horizontal wire with R, L, C -->
          <line x1="80" y1="70" x2="160" y2="70" stroke="#334155" stroke-width="2.5"/>
          
          <!-- Resistor R -->
          <path d="M 160 70 L 170 70 L 175 60 L 185 80 L 195 60 L 205 80 L 215 60 L 225 80 L 230 70 L 240 70" fill="none" stroke="#dc2626" stroke-width="3"/>
          <text x="200" y="48" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">Resistor R</text>
          <text x="200" y="102" fill="#dc2626" font-size="10.5" text-anchor="middle">V_R = I·R</text>

          <line x1="240" y1="70" x2="310" y2="70" stroke="#334155" stroke-width="2.5"/>

          <!-- Inductor L -->
          <path d="M 310 70 L 325 70 C 325 50 345 50 345 70 C 345 50 365 50 365 70 C 365 50 385 50 385 70 L 400 70" fill="none" stroke="#7c3aed" stroke-width="3"/>
          <text x="355" y="48" fill="#7c3aed" font-size="12" font-weight="bold" text-anchor="middle">Inductor L</text>
          <text x="355" y="102" fill="#7c3aed" font-size="10.5" text-anchor="middle">V_L = I·X_L</text>

          <line x1="400" y1="70" x2="470" y2="70" stroke="#334155" stroke-width="2.5"/>

          <!-- Capacitor C -->
          <line x1="470" y1="70" x2="505" y2="70" stroke="#334155" stroke-width="2.5"/>
          <line x1="505" y1="50" x2="505" y2="90" stroke="#0d9488" stroke-width="3.5"/>
          <line x1="520" y1="50" x2="520" y2="90" stroke="#0d9488" stroke-width="3.5"/>
          <line x1="520" y1="70" x2="555" y2="70" stroke="#334155" stroke-width="2.5"/>
          <text x="512" y="44" fill="#0d9488" font-size="12" font-weight="bold" text-anchor="middle">Capacitor C</text>
          <text x="512" y="102" fill="#0d9488" font-size="10.5" text-anchor="middle">V_C = I·X_C</text>

          <!-- Right down and bottom wire -->
          <line x1="555" y1="70" x2="640" y2="70" stroke="#334155" stroke-width="2.5"/>
          <line x1="640" y1="70" x2="640" y2="190" stroke="#334155" stroke-width="2.5"/>
          <line x1="640" y1="190" x2="420" y2="190" stroke="#334155" stroke-width="2.5"/>

          <!-- AC Source at bottom -->
          <circle cx="370" cy="190" r="22" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
          <path d="M 360 190 Q 365 180 370 190 T 380 190" fill="none" stroke="#0284c7" stroke-width="2.5"/>
          <text x="370" y="235" fill="#0369a1" font-size="11.5" font-weight="bold" text-anchor="middle">v(t) = V₀ sin(ωt)</text>

          <line x1="320" y1="190" x2="80" y2="190" stroke="#334155" stroke-width="2.5"/>
          <line x1="80" y1="190" x2="80" y2="70" stroke="#334155" stroke-width="2.5"/>

          <!-- Current arrow -->
          <line x1="100" y1="60" x2="135" y2="60" stroke="#2563eb" stroke-width="2" marker-end="url(#dim-arrow)"/>
          <text x="117" y="52" fill="#2563eb" font-size="10.5" font-weight="bold" text-anchor="middle">i(t)</text>
        </svg>`,
        caption: "Figure 7.9: Series LCR Circuit schematic diagram. The same current i(t) flows sequentially through R, L, and C.",
        guide: "Observe that current i(t) serves as the universal reference axis because it is identical throughout the single series loop."
      },
      importantPoints: [
        "Current i(t) is common to all three elements.",
        "Total applied voltage is the phasor sum: V⃗ = V⃗_R + V⃗_L + V⃗_C."
      ]
    },
    {
      heading: "2. Phasor Construction & Total Resultant Voltage",
      paragraphs: [
        "To find the net voltage and impedance, we choose the current phasor I⃗ along the positive horizontal axis as the common reference.",
        "1. Resistor Voltage Phasor (V⃗_R): In phase with I⃗, directed along the positive X-axis. Magnitude V_R = I · R.",
        "2. Inductor Voltage Phasor (V⃗_L): Leads I⃗ by 90°, directed along the positive Y-axis. Magnitude V_L = I · X_L.",
        "3. Capacitor Voltage Phasor (V⃗_C): Lags I⃗ by 90°, directed along the negative Y-axis. Magnitude V_C = I · X_C.",
        "Net Reactive Voltage: Since V⃗_L and V⃗_C act in exact opposite directions along the Y-axis, their resultant is (V⃗_L - V⃗_C) along the vertical direction.",
        "Resultant Circuit Voltage (V): Combining horizontal V_R and vertical (V_L - V_C) using the Pythagorean theorem:",
        "V = √[ V_R² + (V_L - V_C)² ].",
        "Substituting Ohm's laws V_R = I·R, V_L = I·X_L, and V_C = I·X_C:",
        "V = √[ (I R)² + (I X_L - I X_C)² ] = I · √[ R² + (X_L - X_C)² ].",
        "Defining Impedance Z = V / I:",
        "Z = √[ R² + (X_L - X_C)² ] = √[ R² + (ωL - 1/(ωC))² ]."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
          <defs>
            <marker id="phasor-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#dc2626"/>
            </marker>
            <marker id="phasor-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#7c3aed"/>
            </marker>
            <marker id="phasor-teal" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0d9488"/>
            </marker>
            <marker id="phasor-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#2563eb"/>
            </marker>
          </defs>
          <rect width="740" height="320" fill="#ffffff" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="370" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">PHASOR DIAGRAM FOR SERIES LCR (ASSUMING V_L &gt; V_C)</text>
          
          <!-- Axes -->
          <line x1="80" y1="180" x2="660" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>
          <line x1="260" y1="30" x2="260" y2="300" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>
          
          <text x="670" y="184" fill="#64748b" font-size="11">Current Reference (I⃗)</text>
          <text x="260" y="24" fill="#64748b" font-size="11" text-anchor="middle">+90° Reactive Axis</text>

          <!-- Origin -->
          <circle cx="260" cy="180" r="5" fill="#0f172a"/>
          <text x="245" y="195" fill="#0f172a" font-size="11" font-weight="bold">O</text>

          <!-- V_R Phasor (along X-axis) -->
          <line x1="260" y1="180" x2="460" y2="180" stroke="#dc2626" stroke-width="3.5" marker-end="url(#phasor-red)"/>
          <text x="360" y="200" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">V⃗_R = I·R</text>

          <!-- V_L Phasor (along +Y-axis) -->
          <line x1="260" y1="180" x2="260" y2="50" stroke="#7c3aed" stroke-width="3" marker-end="url(#phasor-purple)"/>
          <text x="210" y="80" fill="#7c3aed" font-size="11.5" font-weight="bold">V⃗_L = I·X_L</text>

          <!-- V_C Phasor (along -Y-axis) -->
          <line x1="260" y1="180" x2="260" y2="260" stroke="#0d9488" stroke-width="3" marker-end="url(#phasor-teal)"/>
          <text x="210" y="240" fill="#0d9488" font-size="11.5" font-weight="bold">V⃗_C = I·X_C</text>

          <!-- Net Reactive Vector (V_L - V_C) -->
          <line x1="260" y1="180" x2="260" y2="90" stroke="#b45309" stroke-width="4"/>
          <text x="170" y="130" fill="#b45309" font-size="11" font-weight="bold">(V⃗_L - V⃗_C)</text>

          <!-- Dashed Parallelogram -->
          <line x1="460" y1="180" x2="460" y2="90" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="260" y1="90" x2="460" y2="90" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>

          <!-- Resultant Voltage V Phasor -->
          <line x1="260" y1="180" x2="460" y2="90" stroke="#2563eb" stroke-width="4" marker-end="url(#phasor-blue)"/>
          <text x="360" y="115" fill="#2563eb" font-size="13" font-weight="bold">V⃗ = √[V_R² + (V_L - V_C)²]</text>

          <!-- Phase Angle Arc φ -->
          <path d="M 320 180 A 60 60 0 0 0 312 156" fill="none" stroke="#2563eb" stroke-width="2.5"/>
          <text x="330" y="165" fill="#2563eb" font-size="12" font-weight="bold">φ</text>

          <!-- Right side formula card -->
          <g transform="translate(500, 45)">
            <rect width="215" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>
            <text x="107.5" y="22" fill="#0f172a" font-size="11.5" font-weight="bold" text-anchor="middle">KEY LCR EQUATIONS</text>
            <text x="15" y="44" fill="#334155" font-size="11">V = √[V_R² + (V_L - V_C)²]</text>
            <text x="15" y="66" fill="#334155" font-size="11">Z = √[R² + (X_L - X_C)²]</text>
            <text x="15" y="88" fill="#334155" font-size="11">tanφ = (V_L - V_C) / V_R</text>
            <text x="15" y="104" fill="#334155" font-size="10.5">     = (X_L - X_C) / R</text>
          </g>
        </svg>`,
        caption: "Figure 7.10: Complete phasor diagram for a series LCR circuit in the inductive regime (V_L > V_C), deriving resultant voltage V and phase angle φ.",
        guide: "Notice that V_L and V_C directly oppose each other at 180°, so their scalar magnitudes subtract algebraically (V_L - V_C)."
      },
      importantPoints: [
        "V = √[V_R² + (V_L - V_C)²] (RMS voltages).",
        "Impedance Z = √[R² + (X_L - X_C)²]."
      ]
    },
    {
      heading: "3. Impedance Triangle & Phase Angle Regimes",
      paragraphs: [
        "Dividing all sides of the voltage phasor triangle by the common current I yields the famous Impedance Triangle:",
        "1. Base = Resistance R (horizontal).",
        "2. Perpendicular = Net Reactance (X_L - X_C) (vertical).",
        "3. Hypotenuse = Total Impedance Z = √[R² + (X_L - X_C)²].",
        "4. Angle between R and Z = Phase Angle φ: tanφ = (X_L - X_C) / R, cosφ = R / Z.",
        "Three Distinct Operational Regimes:",
        "Case 1: Inductive Circuit (X_L > X_C or ω > ω₀)",
        "Net reactance is positive. tanφ > 0 (φ is positive). Supply voltage LEADS current by angle φ. The circuit behaves predominantly as an inductive circuit.",
        "Case 2: Capacitive Circuit (X_C > X_L or ω < ω₀)",
        "Net reactance is negative. tanφ < 0 (φ is negative). Supply voltage LAGS current by angle |φ| (or current LEADS voltage). The circuit behaves predominantly as a capacitive circuit.",
        "Case 3: Resonant / Purely Resistive Circuit (X_L = X_C or ω = ω₀)",
        "Net reactance is zero. tanφ = 0 (φ = 0°). Current and voltage are strictly IN PHASE. Impedance reaches its absolute minimum: Z = R."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 740 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
          <rect width="740" height="270" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="370" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">IMPEDANCE TRIANGLE &amp; PHASE ANGLE (tanφ = (X_L - X_C)/R)</text>
          
          <!-- Impedance Triangle on Left -->
          <g transform="translate(60, 50)">
            <rect width="280" height="190" fill="#ffffff" stroke="#cbd5e1" rx="8"/>
            <text x="140" y="22" fill="#0f172a" font-size="11.5" font-weight="bold" text-anchor="middle">Geometric Impedance Triangle</text>
            
            <!-- Base R -->
            <line x1="40" y1="150" x2="200" y2="150" stroke="#dc2626" stroke-width="3.5"/>
            <text x="120" y="170" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">Base = Resistance (R)</text>

            <!-- Perpendicular (X_L - X_C) -->
            <line x1="200" y1="150" x2="200" y2="55" stroke="#7c3aed" stroke-width="3"/>
            <text x="210" y="105" fill="#7c3aed" font-size="11" font-weight="bold">(X_L - X_C)</text>

            <!-- Hypotenuse Z -->
            <line x1="40" y1="150" x2="200" y2="55" stroke="#2563eb" stroke-width="3.5"/>
            <text x="95" y="90" fill="#2563eb" font-size="12" font-weight="bold">Z = √[R²+(X_L-X_C)²]</text>

            <!-- Angle Arc -->
            <path d="M 80 150 A 40 40 0 0 0 75 130" fill="none" stroke="#2563eb" stroke-width="2"/>
            <text x="90" y="142" fill="#2563eb" font-size="11" font-weight="bold">φ</text>
          </g>

          <!-- Decision Diagram on Right -->
          <g transform="translate(370, 50)">
            <rect width="330" height="190" fill="#ffffff" stroke="#cbd5e1" rx="8"/>
            <text x="165" y="22" fill="#0f172a" font-size="11.5" font-weight="bold" text-anchor="middle">PHASE DECISION MATRIX</text>
            
            <!-- Box 1 -->
            <rect x="15" y="38" width="300" height="38" fill="#fef2f2" stroke="#dc2626" rx="5"/>
            <text x="25" y="54" fill="#991b1b" font-size="10.5" font-weight="bold">X_L &gt; X_C (ω &gt; ω₀) ===&gt; Inductive</text>
            <text x="25" y="68" fill="#b91c1c" font-size="10">φ &gt; 0: Voltage leads Current by angle φ</text>

            <!-- Box 2 -->
            <rect x="15" y="86" width="300" height="38" fill="#f0fdfa" stroke="#0d9488" rx="5"/>
            <text x="25" y="102" fill="#0f766e" font-size="10.5" font-weight="bold">X_C &gt; X_L (ω &lt; ω₀) ===&gt; Capacitive</text>
            <text x="25" y="116" fill="#115e59" font-size="10">φ &lt; 0: Current leads Voltage by angle |φ|</text>

            <!-- Box 3 -->
            <rect x="15" y="134" width="300" height="42" fill="#fefce8" stroke="#ca8a04" rx="5"/>
            <text x="25" y="150" fill="#854d0e" font-size="10.5" font-weight="bold">X_L = X_C (ω = ω₀) ===&gt; Resonance</text>
            <text x="25" y="166" fill="#a16207" font-size="10">φ = 0°: V and I strictly in phase, Z = R (minimum)</text>
          </g>
        </svg>`,
        caption: "Figure 7.11: Impedance triangle geometry and systematic decision rules for inductive, capacitive, and resonant LCR circuit conditions.",
        guide: "Always check whether frequency is above or below resonant frequency f₀ to immediately classify the circuit as inductive or capacitive."
      },
      importantPoints: [
        "tanφ = (X_L - X_C) / R.",
        "cosφ = R / Z (Power Factor of the circuit)."
      ]
    },
    {
      heading: "4. Series Electrical Resonance: Derivation & Characteristics",
      paragraphs: [
        "Resonance occurs when the frequency of the external applied AC EMF equals the natural oscillation frequency of the LCR circuit.",
        "Condition for Resonance: The reactive components cancel each other out completely: X_L = X_C.",
        "Derivation of Resonant Angular Frequency (ω₀):",
        "ω₀ L = 1 / (ω₀ C)  ===>  ω₀² = 1 / (L C)  ===>  ω₀ = 1 / √(LC) rad/s.",
        "Resonant Frequency (f₀): f₀ = ω₀ / 2π = 1 / (2π√(LC)) Hz.",
        "Key Properties of Series LCR at Resonance:",
        "1. Impedance is strictly MINIMUM: Z_min = √[R² + (0)²] = R (purely resistive).",
        "2. Current is strictly MAXIMUM: I_max = V / Z_min = V / R.",
        "3. Phase Difference is ZERO: φ = 0° (current and voltage are in phase).",
        "4. Power Factor is UNITY: cosφ = R / Z = R / R = 1.",
        "5. Maximum Average Power: P_max = V_rms I_rms = V_rms² / R.",
        "6. Voltage Magnification: The individual voltages across the inductor and capacitor (V_L and V_C) can be MUCH HIGHER than the supply voltage V! Specifically, V_L = V_C = Q · V_source, where Q is the Quality factor."
      ],
      importantPoints: [
        "At resonance, total opposition is governed ONLY by resistor R. Inductor and capacitor voltages cancel each other out (V_L + V_C = 0 in phasor sum).",
        "Series resonance circuit is called an ACCEPTOR circuit because it accepts maximum current at frequency f₀."
      ]
    },
    {
      heading: "5. Resonance Curve, Bandwidth & Quality Factor (Q)",
      paragraphs: [
        "A graph plotted between current amplitude I and angular frequency ω shows a pronounced peak at ω = ω₀.",
        "Half-Power Frequencies (ω₁ and ω₂):",
        "The frequencies on either side of resonance where power dissipated drops to half of its peak value (P = P_max / 2) are called half-power frequencies. At these points, current drops to I = I_max / √2 ≈ 0.707 I_max.",
        "Bandwidth (Δω): The frequency separation between the two half-power frequencies: Δω = ω₂ - ω₁ = R / L (rad/s), or in Hertz: 2Δf = R / (2πL).",
        "Quality Factor (Q-Factor):",
        "The Quality factor measures the sharpness of the resonance curve. Mathematically: Q = Resonant Frequency / Bandwidth = ω₀ / Δω.",
        "Substituting ω₀ = 1/√(LC) and Δω = R/L:",
        "Q = (1/√(LC)) / (R/L) = (L / R) · (1/√(LC)) = (1 / R) · √(L / C) = (ω₀ L) / R = 1 / (ω₀ C R).",
        "Physical Significance in NEET: A radio receiver tunes into a desired broadcast station by adjusting C so that f₀ matches the transmitter frequency. For high selectivity (tuning sharpness to prevent interference from adjacent stations), Q must be large, requiring high L, small C, and minimum resistance R."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
          <rect width="740" height="300" fill="#ffffff" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="370" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">RESONANCE CURVES &amp; QUALITY FACTOR (CURRENT vs FREQUENCY)</text>
          
          <!-- Axes -->
          <line x1="80" y1="240" x2="660" y2="240" stroke="#334155" stroke-width="2"/>
          <line x1="120" y1="40" x2="120" y2="255" stroke="#334155" stroke-width="2"/>
          
          <text x="670" y="244" fill="#334155" font-size="12" font-weight="bold">Angular Frequency (ω)</text>
          <text x="115" y="35" fill="#334155" font-size="12" font-weight="bold" text-anchor="end">Current I_rms</text>

          <!-- Sharp Curve (Small R, High Q) - Blue -->
          <path d="M 140 235 Q 320 230 360 65 Q 400 230 580 235" fill="none" stroke="#2563eb" stroke-width="3.5"/>
          <text x="415" y="70" fill="#2563eb" font-size="11.5" font-weight="bold">Small R (High Q, Sharp)</text>

          <!-- Broad Curve (Large R, Low Q) - Orange -->
          <path d="M 140 235 Q 300 220 360 140 Q 420 220 580 235" fill="none" stroke="#d97706" stroke-width="2.5" stroke-dasharray="5 3"/>
          <text x="430" y="145" fill="#d97706" font-size="11" font-weight="bold">Large R (Low Q, Flat)</text>

          <!-- Resonant Peak Line at x=360 -->
          <line x1="360" y1="65" x2="360" y2="240" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/>
          <circle cx="360" cy="65" r="5" fill="#dc2626"/>
          <text x="360" y="258" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">ω₀ = 1/√(LC)</text>
          <text x="360" y="55" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">I_max = V/R</text>

          <!-- Half-power line (y = 65 + (240-65)*(1-0.707) = 116) -->
          <line x1="120" y1="116" x2="520" y2="116" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/>
          <text x="80" y="120" fill="#475569" font-size="10.5" font-weight="bold">I_max/√2</text>

          <!-- Half-power frequencies points -->
          <circle cx="335" cy="116" r="4" fill="#16a34a"/>
          <circle cx="385" cy="116" r="4" fill="#16a34a"/>
          <line x1="335" y1="116" x2="335" y2="240" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3 3"/>
          <line x1="385" y1="116" x2="385" y2="240" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3 3"/>
          <text x="330" y="255" fill="#16a34a" font-size="10.5" font-weight="bold">ω₁</text>
          <text x="390" y="255" fill="#16a34a" font-size="10.5" font-weight="bold">ω₂</text>

          <!-- Bandwidth dimension -->
          <line x1="335" y1="200" x2="385" y2="200" stroke="#16a34a" stroke-width="2" marker-start="url(#dim-arrow)" marker-end="url(#dim-arrow)"/>
          <text x="360" y="192" fill="#16a34a" font-size="10.5" font-weight="bold" text-anchor="middle">Δω = R/L</text>

          <!-- Q factor box -->
          <g transform="translate(520, 160)">
            <rect width="190" height="65" fill="#f8fafc" stroke="#cbd5e1" rx="6"/>
            <text x="95" y="20" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">QUALITY FACTOR (Q)</text>
            <text x="95" y="38" fill="#2563eb" font-size="11.5" font-weight="bold" text-anchor="middle">Q = (1/R) √(L/C)</text>
            <text x="95" y="54" fill="#475569" font-size="10" text-anchor="middle">Sharpness = ω₀ / Δω</text>
          </g>
        </svg>`,
        caption: "Figure 7.12: Series LCR Resonance Curves illustrating peak current I_max, half-power bandwidth Δω = R/L, and the sharpening effect of reducing resistance R.",
        guide: "Remember: Smaller resistance R produces both higher peak current (I_max = V/R) and narrower bandwidth (Δω = R/L), yielding a vastly higher Quality Factor."
      },
      importantPoints: [
        "Bandwidth Δω = R / L (rad/s).",
        "Q = (1 / R) √(L / C) = ω₀ L / R."
      ]
    }
  ],

  formulae: [
    {
      title: "Series LCR Total Impedance",
      formula: "Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}",
      meaning: "Total effective AC opposition of a series resistor, inductor, and capacitor combination.",
      variables: "Z = Impedance (Ω), R = Resistance (Ω), X_L = ωL (Ω), X_C = 1/(ωC) (Ω)",
      unit: "Ohms (Ω)",
      whenToUse: "To find total current I_rms = V_rms / Z or net circuit opposition.",
      calculationExample: {
        problem: "In a series LCR circuit, R = 30 Ω, X_L = 80 Ω, and X_C = 40 Ω. If connected to a 200 V AC source, find impedance and RMS current.",
        stepByStep: [
          "Z = √[R² + (X_L - X_C)²] = √[30² + (80 - 40)²] = √[30² + 40²] = √[900 + 1600] = √2500 = 50 Ω.",
          "I_rms = V_rms / Z = 200 / 50 = 4 A."
        ],
        answer: "Z = 50 Ω, I_rms = 4 A"
      }
    },
    {
      title: "Phase Angle in Series LCR",
      formula: "\\tan\\phi = \\frac{X_L - X_C}{R} = \\frac{\\omega L - \\frac{1}{\\omega C}}{R}",
      meaning: "Phase angle between the total applied voltage and series current.",
      variables: "φ = Phase angle (rad or degrees), X_L = Inductive reactance, X_C = Capacitive reactance, R = Resistance",
      unit: "Degrees (°) or Radians (rad)",
      whenToUse: "To determine leading/lagging relationships and calculate power factor cosφ.",
      calculationExample: {
        problem: "In an LCR circuit, R = 100 Ω, X_L = 200 Ω, and X_C = 100 Ω. Find the phase angle φ.",
        stepByStep: [
          "tanφ = (X_L - X_C) / R = (200 - 100) / 100 = 100 / 100 = 1.",
          "φ = arctan(1) = 45° (or π/4 rad).",
          "Since X_L > X_C, voltage leads current by 45°."
        ],
        answer: "φ = 45° (voltage leads current)"
      }
    },
    {
      title: "Resonant Frequency Equations",
      formula: "\\omega_0 = \\frac{1}{\\sqrt{LC}}, \\quad f_0 = \\frac{1}{2\\pi \\sqrt{LC}}",
      meaning: "Frequency at which capacitive and inductive reactances cancel perfectly in series.",
      variables: "ω₀ = Resonant angular frequency (rad/s), f₀ = Resonant frequency (Hz), L = Inductance (H), C = Capacitance (F)",
      unit: "rad/s / Hz",
      whenToUse: "To find resonance frequency, tuning condition, or maximum current frequency.",
      calculationExample: {
        problem: "A series LCR circuit has L = 0.1 H, C = 10 μF, and R = 10 Ω. Calculate the resonant frequency in Hz.",
        stepByStep: [
          "L = 0.1 H, C = 10 × 10⁻⁶ F = 10⁻⁵ F.",
          "LC = 0.1 × 10⁻⁵ = 10⁻⁶ ==> √(LC) = 10⁻³ s.",
          "f₀ = 1 / (2π√(LC)) = 1 / (2 × 3.1416 × 10⁻³) = 1000 / 6.2832 ≈ 159.15 Hz."
        ],
        answer: "f₀ ≈ 159.15 Hz"
      }
    },
    {
      title: "Quality Factor (Q) & Bandwidth",
      formula: "Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{\\omega_0 L}{R} = \\frac{\\omega_0}{\\Delta\\omega}, \\quad \\Delta\\omega = \\frac{R}{L}",
      meaning: "Figure of merit quantifying resonance sharpness and voltage magnification.",
      variables: "Q = Quality factor (dimensionless), Δω = Bandwidth (rad/s), R = Resistance, L = Inductance, C = Capacitance",
      unit: "Dimensionless (Q) / rad/s (Δω)",
      whenToUse: "For selectivity calculations and voltage magnification across reactive elements.",
      calculationExample: {
        problem: "For a circuit with L = 2 H, C = 2 μF, and R = 10 Ω, find the Q-factor and voltage across inductor at resonance if supply voltage is 20 V.",
        stepByStep: [
          "Q = (1/R) √(L/C) = (1/10) √(2 / (2 × 10⁻⁶)) = (1/10) √(10⁶) = (1/10) × 1000 = 100.",
          "Voltage across inductor at resonance: V_L = Q × V_source = 100 × 20 = 2000 V."
        ],
        answer: "Q = 100, V_L = 2000 V"
      }
    }
  ],

  neetImportantPoints: [
    "At resonance, total impedance is purely resistive: Z = R. The phase difference φ = 0° and power factor cosφ = 1.",
    "Voltages across L and C at resonance are equal in magnitude but opposite in phase (180° apart), cancelling out completely in the vector sum: V_L + V_C = 0.",
    "Voltage magnification occurs at resonance: V_L = V_C = Q · V_source. This value can easily exceed the insulation limit of components!",
    "To maximize Quality factor Q for sharp radio tuning, design the circuit with large L, small C, and small R.",
    "Bandwidth Δω = R/L depends only on resistance and inductance, NOT on capacitance C."
  ],

  commonConfusions: [
    {
      commonConfusion: "Believing that at resonance, the voltages across the inductor and capacitor are zero.",
      correctFact: "Individually, V_L and V_C can be enormous (Q × V_source, often thousands of volts). However, because they are exactly 180° out of phase, their simultaneous vector sum is zero.",
      whyItMattersForNEET: "A favorite NEET trap testing the difference between individual component voltages and their net series sum."
    },
    {
      commonConfusion: "Thinking that adding voltages algebraically in an LCR circuit (V_total = V_R + V_L + V_C) is valid.",
      correctFact: "Voltages must be added as vectors: V_total = √[V_R² + (V_L - V_C)²]. A voltmeter across the source will read 50 V even if individual meters read V_R = 40 V, V_L = 40 V, and V_C = 10 V!",
      whyItMattersForNEET: "Consistently tested in multi-voltmeter numericals."
    }
  ],

  quickRevision: [
    "Series LCR Impedance: Z = √[R² + (X_L - X_C)²].",
    "Phase Angle: tanφ = (X_L - X_C) / R, cosφ = R / Z.",
    "Inductive (ω > ω₀): V leads I. Capacitive (ω < ω₀): I leads V.",
    "Resonance (X_L = X_C): ω₀ = 1/√(LC), f₀ = 1/(2π√(LC)), Z_min = R, I_max = V/R, φ = 0°, cosφ = 1.",
    "Bandwidth: Δω = R / L; Quality Factor: Q = (1/R) √(L/C) = ω₀ L / R.",
    "Voltage magnification: V_L = V_C = Q × V_source at resonance."
  ],

  pyqs: [
    {
      id: "pyq-ac-2023",
      year: 2023,
      exam: "NEET UG",
      question: "A series LCR circuit with R = 10 Ω, L = 1.0 mH and C = 0.1 μF is connected to an AC source of voltage V = 100 sin(ωt) V. The resonant frequency of the circuit is:",
      options: [
        "10⁵ / (2π) Hz",
        "10⁴ / (2π) Hz",
        "10⁶ / (2π) Hz",
        "10³ / (2π) Hz"
      ],
      correctAnswer: 0,
      explanation: "Step 1: Formula for resonant frequency is f₀ = 1 / (2π√(LC)).\nStep 2: Given L = 1.0 mH = 10⁻³ H, and C = 0.1 μF = 10⁻⁷ F.\nStep 3: LC = 10⁻³ × 10⁻⁷ = 10⁻¹⁰ s² ==> √(LC) = 10⁻⁵ s.\nStep 4: f₀ = 1 / (2π × 10⁻⁵) = 10⁵ / (2π) Hz. Option A is correct.",
      conceptTested: "Resonant frequency calculation in series LCR circuit.",
      difficulty: "Easy"
    },
    {
      id: "pyq-ac-2022",
      year: 2022,
      exam: "NEET UG",
      question: "In a series LCR circuit, the inductance L is 10 mH, capacitance C is 1 μF and resistance R is 100 Ω. The frequency at which resonance occurs is:",
      options: [
        "15.9 kHz",
        "1.59 kHz",
        "159 Hz",
        "15.9 Hz"
      ],
      correctAnswer: 1,
      explanation: "Step 1: Resonant frequency f₀ = 1 / (2π√(LC)).\nStep 2: LC = (10 × 10⁻³) × (1 × 10⁻⁶) = 10⁻⁸ s² ==> √(LC) = 10⁻⁴ s.\nStep 3: f₀ = 1 / (2π × 10⁻⁴) = 10⁴ / (2 × 3.1416) = 10000 / 6.2832 ≈ 1591.5 Hz ≈ 1.59 kHz. Option B is correct.",
      conceptTested: "Series resonance frequency formula application.",
      difficulty: "Easy"
    },
    {
      id: "pyq-ac-2017",
      year: 2017,
      exam: "NEET UG",
      question: "Which of the following combinations should be selected for better tuning of an LCR circuit used for communication?",
      options: [
        "R = 20 Ω, L = 1.5 H, C = 35 μF",
        "R = 25 Ω, L = 2.5 H, C = 45 μF",
        "R = 15 Ω, L = 3.5 H, C = 30 μF",
        "R = 25 Ω, L = 1.5 H, C = 45 μF"
      ],
      correctAnswer: 2,
      explanation: "Step 1: Quality of tuning is governed by the Quality Factor Q = (1/R) √(L/C). Higher Q yields sharper tuning and better selectivity.\nStep 2: Let us evaluate Q for each option:\nOption A: Q = (1/20) √(1.5 / (35×10⁻⁶)) = (1/20) √(42857) = 207 / 20 ≈ 10.35.\nOption B: Q = (1/25) √(2.5 / (45×10⁻⁶)) = (1/25) √(55555) = 235.7 / 25 ≈ 9.43.\nOption C: Q = (1/15) √(3.5 / (30×10⁻⁶)) = (1/15) √(116666) = 341.5 / 15 ≈ 22.77.\nOption D: Q = (1/25) √(1.5 / (45×10⁻⁶)) = (1/25) √(33333) = 182.5 / 25 ≈ 7.30.\nOption C has the smallest R (15 Ω) and largest L/C ratio, yielding the maximum Q-factor (~22.8).",
      conceptTested: "Quality factor optimization for communication tuning.",
      difficulty: "Medium"
    }
  ],

  practiceQuestions: [
    {
      id: "prac-lcr-1",
      question: "In a series LCR circuit, the voltage across R, L, and C are measured to be 80 V, 100 V, and 40 V respectively. The total voltage of the source is:",
      options: [
        "220 V",
        "100 V",
        "140 V",
        "80 V"
      ],
      correctAnswer: 1,
      explanation: "Total applied voltage is V = √[V_R² + (V_L - V_C)²] = √[80² + (100 - 40)²] = √[80² + 60²] = √[6400 + 3600] = √10000 = 100 V.",
      conceptTested: "Phasor addition of RMS voltages in series LCR.",
      difficulty: "Easy"
    },
    {
      id: "prac-lcr-2",
      question: "At resonance in a series LCR circuit, if the supply voltage is V, the potential difference across the series combination of L and C is:",
      options: [
        "V",
        "2V",
        "Zero",
        "Q × V"
      ],
      correctAnswer: 2,
      explanation: "Across the series combination of L and C, the net reactive voltage is (V_L - V_C). At resonance, V_L = V_C in magnitude but they are 180° out of phase. Therefore, the net potential difference across (L + C) is V_L - V_C = 0.",
      conceptTested: "Net reactive voltage at resonance.",
      difficulty: "Medium"
    }
  ]
};
