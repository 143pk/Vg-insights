import { DetailedTopicContent } from '../../types/neet';

export const chemArrheniusCollisionTheoryDetails: DetailedTopicContent = {
  topicId: "chem-arrhenius-collision-theory",
  topicName: "Arrhenius Equation, Activation Energy & Collision Theory",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Physical Chemistry (Class 12)",
  chapter: "Chemical Kinetics",

  whatIsThisTopic: "This masterclass covers the temperature dependence of reaction rates, the microscopic mechanics of chemical transformations via Collision Theory, the nature of Activation Energy (Ea), and the quantitative formulation of the Arrhenius Equation. Students will master the differential and integrated Arrhenius equations, two-temperature calculations, graphical slope determination (ln k vs 1/T and log k vs 1/T), Maxwell-Boltzmann kinetic energy distributions, and the exact catalytic mechanism of activation barrier lowering.",

  basicIdea: [
    "1. Microscopic Collision Theory: Chemical reactions occur when reactant particles collide. However, only a tiny fraction of collisions produce a chemical change. An effective collision requires meeting two simultaneous conditions: (a) Threshold Energy Criterion (kinetic energy ≥ Ea), and (b) Steric Orientation Criterion (proper geometric orientation during collision).",
    "2. Rate from Collision Theory: Rate = P × Z_AB × e^(-Ea/RT), where Z_AB is collision frequency, e^(-Ea/RT) is the Boltzmann fraction of molecules exceeding Ea, and P is the steric (probability) factor accounting for molecular geometry.",
    "3. Activation Energy (Ea): The minimum extra kinetic energy that colliding reactant molecules must absorb to form the high-energy Activated Complex (Transition State) at the energy barrier peak: Ea = E_threshold - E_reactants.",
    "4. Arrhenius Equation: Quantitatively connects rate constant (k) to absolute temperature (T): k = A e^(-Ea/RT). The pre-exponential factor A (frequency factor) has the same dimensional units as k.",
    "5. Temperature Effect on k: Temperature coefficient μ = k_{T+10} / k_T ≈ 2 to 3. A 10°C rise doubles or triples reaction rate not because collision frequency changes (Z increases by only ~1-2%), but because the fraction of molecules with energy ≥ Ea roughly DOUBLES (Maxwell-Boltzmann distribution peak shifts right and broadens).",
    "6. Catalysis & Activation Barrier: A catalyst accelerates reactions by providing an alternate mechanistic route with a LOWER activation energy (Ea' < Ea). It reduces Ea by the exact same amount for both forward and reverse directions, leaving enthalpy change (ΔH), Gibbs free energy (ΔG), and equilibrium constant (K_eq) completely unchanged."
  ],

  importantTerms: [
    {
      term: "Collision Frequency (Z)",
      symbol: "Z_AB",
      definition: "The total number of binary collisions between reactant molecules per second per unit volume of the reaction mixture.",
      unit: "collisions cm⁻³ s⁻¹ (typically 10²⁵ to 10²⁸)",
      neetNote: "Collision frequency increases by only ~1-2% for a 10°C rise in temperature (Z ∝ √T); hence, collision frequency is NOT the main cause of rate doubling."
    },
    {
      term: "Effective Collision",
      definition: "A collision between reactant particles that successfully breaks existing bonds and forms new products by possessing energy ≥ threshold energy and proper steric orientation.",
      neetNote: "Requires BOTH: Energy factor (e^(-Ea/RT)) AND Orientation / Steric factor (P)."
    },
    {
      term: "Threshold Energy (E_threshold)",
      symbol: "E_th = E_reactants + Ea",
      definition: "The minimum total kinetic and internal energy that colliding reactant molecules must possess to overcome the barrier and form products.",
      unit: "J mol⁻¹ (or kJ mol⁻¹)",
      neetNote: "Always greater than the average energy of reactant molecules."
    },
    {
      term: "Activation Energy (Ea)",
      symbol: "Ea = E_threshold - E_reactants",
      definition: "The minimum extra energy required by reactant molecules to reach the threshold energy barrier and form the activated complex.",
      unit: "J mol⁻¹ (or kJ mol⁻¹)",
      neetNote: "Higher Ea implies a higher barrier, smaller fraction of effective collisions, and slower reaction rate. Lower Ea implies a faster reaction."
    },
    {
      term: "Activated Complex / Transition State",
      symbol: "[X]‡",
      definition: "An unstable, high-energy molecular configuration formed at the peak of the potential energy barrier where old bonds are partially broken and new bonds are partially formed.",
      neetNote: "Has the highest potential energy along the reaction coordinate; cannot be isolated."
    },
    {
      term: "Arrhenius Pre-exponential Factor (A)",
      symbol: "A (Frequency Factor)",
      definition: "A constant in the Arrhenius equation representing the frequency of binary collisions with appropriate steric orientation per unit time.",
      unit: "Same units as rate constant k ((mol L⁻¹)^(1-n) s⁻¹)",
      neetNote: "Represents the theoretical value of k as T approaches infinity (k → A as T → ∞)."
    },
    {
      term: "Temperature Coefficient (μ)",
      symbol: "μ = k_{T+10} / k_T",
      definition: "The ratio of rate constants of a reaction at two temperatures differing by 10°C (usually 35°C / 25°C or 308 K / 298 K).",
      neetNote: "For most homogeneous chemical reactions, μ lies between 2 and 3."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Collision Theory of Chemical Reactions & Dual Criteria for Reaction",
      paragraphs: [
        "Proposed by Max Trautz (1916) and William Lewis (1918), Collision Theory is based on the kinetic theory of gases. It visualizes reactant molecules as hard, rigid spheres and assumes that chemical reactions occur only when particles collide with one another.",
        "• The Collision Paradox: In a gas at standard temperature and pressure (STP), the collision frequency Z is astronomical—approximately 10²⁵ to 10²⁸ collisions per cm³ per second. If every collision were to result in a chemical reaction, all chemical processes would finish in less than a nanosecond (10⁻⁹ s)! In reality, many reactions take hours, days, or years.",
        "• Explanation: Over 99.999% of molecular collisions are INEFFECTIVE. They are simple elastic bounces where molecules collide and rebound without any chemical transformation.",
        "• The Two Mandatory Criteria for an Effective Collision:",
        "  1. Energy Barrier Criterion: Molecules possess a distribution of kinetic energies. Only molecules whose kinetic energy equals or exceeds a critical minimum value called the Threshold Energy (E_th) can disrupt existing electron clouds and break chemical bonds upon impact.",
        "     The fraction of molecules possessing energy ≥ Ea is given by the Maxwell-Boltzmann factor: f = e^(-Ea/RT).",
        "  2. Steric Orientation Criterion: Even if two colliding molecules have sufficient energy, they will not react unless they collide in the correct spatial orientation such that reacting functional groups/atoms make direct contact.",
        "     Example: Nucleophilic substitution of bromomethane: CH₃Br + OH⁻ → CH₃OH + Br⁻.",
        "     - Ineffective Orientation: OH⁻ attacks from the front side near the bulky, electronegative Br atom. Electrostatic repulsion prevents bond formation.",
        "     - Effective Orientation: OH⁻ attacks from the backside directly opposite the C-Br bond (180° inversion), forming the pentacoordinate transition state and displacing Br⁻.",
        "• Mathematical Collision Rate Equation: Rate = P × Z_AB × e^(-Ea/RT), where P is the steric (probability) factor (P < 1)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="760" height="260" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
          <!-- Ineffective Collision -->
          <g transform="translate(40, 20)">
            <rect x="0" y="0" width="310" height="210" fill="#ffffff" rx="10" stroke="#ef4444" stroke-width="1.5"/>
            <text x="155" y="26" fill="#dc2626" font-size="13" font-weight="bold" text-anchor="middle">❌ Ineffective Collision (Improper Orientation)</text>
            <circle cx="80" cy="80" r="22" fill="#3b82f6"/>
            <text x="80" y="85" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">OH⁻</text>
            <circle cx="170" cy="80" r="22" fill="#ef4444"/>
            <text x="170" y="85" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Br-CH₃</text>
            <path d="M 105 80 L 145 80" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="3,3"/>
            <text x="155" y="130" fill="#991b1b" font-size="11" text-anchor="middle">Front-side attack causes electrostatic repulsion</text>
            <text x="155" y="150" fill="#64748b" font-size="11" text-anchor="middle">Molecules rebound elastically</text>
            <rect x="55" y="165" width="200" height="30" rx="6" fill="#fee2e2"/>
            <text x="155" y="184" fill="#991b1b" font-size="12" font-weight="bold" text-anchor="middle">NO REACTION OCCURS</text>
          </g>
          <!-- Effective Collision -->
          <g transform="translate(410, 20)">
            <rect x="0" y="0" width="310" height="210" fill="#ffffff" rx="10" stroke="#10b981" stroke-width="1.5"/>
            <text x="155" y="26" fill="#059669" font-size="13" font-weight="bold" text-anchor="middle">✅ Effective Collision (Proper Backside Attack)</text>
            <circle cx="60" cy="80" r="20" fill="#3b82f6"/>
            <text x="60" y="85" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">OH⁻</text>
            <circle cx="130" cy="80" r="18" fill="#10b981"/>
            <text x="130" y="84" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">CH₃</text>
            <circle cx="190" cy="80" r="20" fill="#ef4444"/>
            <text x="190" y="85" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Br</text>
            <text x="155" y="130" fill="#065f46" font-size="11" text-anchor="middle">Backside attack: Direct C-O overlap</text>
            <text x="155" y="150" fill="#64748b" font-size="11" text-anchor="middle">Activated Transition State formed [HO···C···Br]‡</text>
            <rect x="55" y="165" width="200" height="30" rx="6" fill="#d1fae5"/>
            <text x="155" y="184" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">PRODUCTS: CH₃OH + Br⁻</text>
          </g>
        </svg>`,
        caption: "Collision Theory Mechanics: Collisions succeed only when kinetic energy exceeds Ea AND spatial orientation aligns reacting orbitals."
      }
    },
    {
      heading: "2. Potential Energy Profiles: Exothermic vs Endothermic Reactions",
      paragraphs: [
        "A chemical reaction coordinate diagram plots the potential energy of the molecular system against the progress of the reaction:",
        "• Activated Complex / Transition State (‡): The summit of the potential energy curve. It represents a state where old bonds are stretched/partially broken and new bonds are partially formed. Its lifetime is extremely short (~10⁻¹³ s).",
        "• Forward Activation Energy (E_a,f): The energy difference between the Transition State and the Reactants: E_a,f = E‡ - E_R.",
        "• Backward / Reverse Activation Energy (E_a,b): The energy difference between the Transition State and the Products: E_a,b = E‡ - E_P.",
        "• Enthalpy of Reaction (ΔH): ΔH = E_P - E_R = E_a,f - E_a,b.",
        "• Exothermic Reactions (ΔH < 0): Products lie at lower potential energy than reactants (E_P < E_R). Therefore, Forward Activation Energy is LESS than Reverse Activation Energy: E_a,f < E_a,b.",
        "• Endothermic Reactions (ΔH > 0): Products lie at higher potential energy than reactants (E_P > E_R). Therefore, Forward Activation Energy is GREATER than Reverse Activation Energy: E_a,f > E_a,b.",
        "• High-Yield NEET Rule: For an endothermic reaction, the minimum possible value of activation energy is ΔH (E_a,f ≥ ΔH). It can never be less than ΔH!"
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="760" height="260" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
          <!-- Exothermic Diagram -->
          <g transform="translate(40, 20)">
            <rect x="0" y="0" width="310" height="210" fill="#ffffff" rx="10" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="155" y="24" fill="#b45309" font-size="12" font-weight="bold" text-anchor="middle">🔥 Exothermic Reaction (ΔH &lt; 0)</text>
            <line x1="40" y1="180" x2="280" y2="180" stroke="#64748b" stroke-width="1.5"/>
            <line x1="40" y1="180" x2="40" y2="35" stroke="#64748b" stroke-width="1.5"/>
            <!-- Curve -->
            <path d="M 40 120 L 90 120 Q 150 40 190 40 Q 230 40 250 160 L 280 160" fill="none" stroke="#dc2626" stroke-width="3"/>
            <circle cx="190" cy="40" r="4" fill="#dc2626"/>
            <text x="190" y="30" fill="#dc2626" font-size="10" font-weight="bold" text-anchor="middle">Transition State ‡</text>
            <text x="65" y="115" fill="#334155" font-size="10" font-weight="bold">Reactants (E_R)</text>
            <text x="255" y="175" fill="#334155" font-size="10" font-weight="bold">Products (E_P)</text>
            <!-- Ea_f -->
            <line x1="120" y1="120" x2="120" y2="40" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
            <text x="115" y="85" fill="#0284c7" font-size="10" font-weight="bold" text-anchor="end">E_a,f</text>
            <!-- ΔH -->
            <line x1="260" y1="120" x2="260" y2="160" stroke="#d97706" stroke-width="1.5"/>
            <text x="265" y="145" fill="#d97706" font-size="10" font-weight="bold">ΔH &lt; 0</text>
            <text x="155" y="200" fill="#475569" font-size="10" text-anchor="middle">E_a,f &lt; E_a,b  |  ΔH = E_a,f - E_a,b</text>
          </g>
          <!-- Endothermic Diagram -->
          <g transform="translate(410, 20)">
            <rect x="0" y="0" width="310" height="210" fill="#ffffff" rx="10" stroke="#3b82f6" stroke-width="1.5"/>
            <text x="155" y="24" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">❄️ Endothermic Reaction (ΔH &gt; 0)</text>
            <line x1="40" y1="180" x2="280" y2="180" stroke="#64748b" stroke-width="1.5"/>
            <line x1="40" y1="180" x2="40" y2="35" stroke="#64748b" stroke-width="1.5"/>
            <!-- Curve -->
            <path d="M 40 160 L 90 160 Q 150 40 190 40 Q 230 40 250 100 L 280 100" fill="none" stroke="#2563eb" stroke-width="3"/>
            <circle cx="190" cy="40" r="4" fill="#2563eb"/>
            <text x="190" y="30" fill="#2563eb" font-size="10" font-weight="bold" text-anchor="middle">Transition State ‡</text>
            <text x="65" y="175" fill="#334155" font-size="10" font-weight="bold">Reactants (E_R)</text>
            <text x="255" y="95" fill="#334155" font-size="10" font-weight="bold">Products (E_P)</text>
            <!-- Ea_f -->
            <line x1="120" y1="160" x2="120" y2="40" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
            <text x="115" y="105" fill="#0284c7" font-size="10" font-weight="bold" text-anchor="end">E_a,f</text>
            <!-- ΔH -->
            <line x1="260" y1="160" x2="260" y2="100" stroke="#2563eb" stroke-width="1.5"/>
            <text x="265" y="135" fill="#2563eb" font-size="10" font-weight="bold">ΔH &gt; 0</text>
            <text x="155" y="200" fill="#475569" font-size="10" text-anchor="middle">E_a,f &gt; E_a,b  |  E_a,f ≥ ΔH always</text>
          </g>
        </svg>`,
        caption: "Reaction Coordinate Energy Profiles for Exothermic (E_a,f < E_a,b, ΔH < 0) and Endothermic (E_a,f > E_a,b, ΔH > 0) Reactions."
      }
    },
    {
      heading: "3. Arrhenius Equation: Theoretical Formulation & Logarithmic Variants",
      paragraphs: [
        "In 1889, Swedish chemist Svante Arrhenius formulated the quantitative mathematical relationship between temperature and the rate constant of a chemical reaction:",
        "k = A e^(-Ea / RT)",
        "• Explanation of Terms:",
        "  - k: Specific rate constant at absolute temperature T.",
        "  - A: Arrhenius pre-exponential factor (frequency factor), having the same units as k.",
        "  - Ea: Activation energy of the reaction (in J mol⁻¹ or kJ mol⁻¹).",
        "  - R: Universal gas constant = 8.314 J mol⁻¹ K⁻¹ (or 1.987 cal mol⁻¹ K⁻¹ or 0.0821 L atm mol⁻¹ K⁻¹). Always use 8.314 J mol⁻¹ K⁻¹ for SI calculations.",
        "  - T: Absolute temperature in KELVIN (T(K) = t(°C) + 273.15).",
        "  - e^(-Ea/RT): The Maxwell-Boltzmann factor representing the fraction of molecules with kinetic energy ≥ Ea.",
        "• Derivation of Logarithmic Forms:",
        "  Taking natural logarithm (ln) on both sides of k = A e^(-Ea/RT):",
        "  ln k = ln A - (Ea / RT)",
        "  Converting natural log to common base-10 log (ln x = 2.303 log₁₀ x):",
        "  2.303 log₁₀ k = 2.303 log₁₀ A - (Ea / RT)",
        "  Dividing throughout by 2.303 gives the Standard Base-10 Arrhenius Equation:",
        "  log₁₀ k = log₁₀ A - (Ea / (2.303 R T))",
        "• Theoretical Behavior at Extremes:",
        "  1. When T → ∞: e^(-Ea/RT) → e⁰ = 1  =>  k = A. (A represents the maximum attainable rate constant).",
        "  2. When Ea = 0: k = A at all temperatures (reaction rate is independent of temperature, e.g., radical recombinations: CH₃• + CH₃• → C₂H₆)."
      ]
    },
    {
      heading: "4. Two-Temperature Arrhenius Equation (Most High-Yield NEET Formula)",
      paragraphs: [
        "If the rate constant of a reaction is measured as k₁ at temperature T₁ and k₂ at temperature T₂:",
        "  log₁₀ k₁ = log₁₀ A - Ea / (2.303 R T₁)",
        "  log₁₀ k₂ = log₁₀ A - Ea / (2.303 R T₂)",
        "Subtracting the first equation from the second eliminates the unknown frequency factor A:",
        "  log₁₀(k₂ / k₁) = (Ea / (2.303 R)) × [1/T₁ - 1/T₂]",
        "• Simplified Master Calculation Formula:",
        "  log₁₀(k₂ / k₁) = (Ea / (2.303 R)) × [(T₂ - T₁) / (T₁ T₂)]",
        "• Temperature Increase Rule: If T₂ > T₁, then (T₂ - T₁) > 0, which implies log(k₂/k₁) > 0  =>  k₂ > k₁. Rate constant ALWAYS increases with temperature for reactions with positive activation energy (Ea > 0).",
        "• Sensitivity Rule: Reactions with HIGHER activation energy (Ea) have a steeper slope and are far more sensitive to temperature changes than reactions with low activation energy."
      ]
    },
    {
      heading: "5. Graphical Analysis of the Arrhenius Plot (Slope & Intercept Calculations)",
      paragraphs: [
        "The Arrhenius equation yields straight-line plots when plotted against reciprocal absolute temperature (1/T):",
        "• Plot 1: ln k versus (1/T):",
        "  Equation: ln k = (-Ea / R) × (1/T) + ln A (Matching y = mx + c).",
        "  - y-axis = ln k",
        "  - x-axis = 1/T (in K⁻¹)",
        "  - Slope (m) = -Ea / R",
        "  - y-intercept (c) = ln A",
        "  - Calculation of Activation Energy: Ea = -Slope × R = -Slope × 8.314 J mol⁻¹.",
        "• Plot 2: log₁₀ k versus (1/T):",
        "  Equation: log₁₀ k = (-Ea / (2.303 R)) × (1/T) + log₁₀ A.",
        "  - y-axis = log₁₀ k",
        "  - x-axis = 1/T (in K⁻¹)",
        "  - Slope (m) = -Ea / (2.303 R) = -Ea / 19.147",
        "  - y-intercept (c) = log₁₀ A",
        "  - Calculation of Activation Energy: Ea = -Slope × 2.303 R = -Slope × 19.147 J mol⁻¹."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="760" height="260" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
          <!-- Plot 1: ln k vs 1/T -->
          <g transform="translate(40, 20)">
            <rect x="0" y="0" width="310" height="210" fill="#ffffff" rx="10" stroke="#0284c7" stroke-width="1.5"/>
            <text x="155" y="24" fill="#0284c7" font-size="12" font-weight="bold" text-anchor="middle">Arrhenius Plot: ln k vs 1/T</text>
            <line x1="40" y1="180" x2="280" y2="180" stroke="#64748b" stroke-width="1.5"/>
            <line x1="40" y1="180" x2="40" y2="35" stroke="#64748b" stroke-width="1.5"/>
            <text x="280" y="196" fill="#64748b" font-size="11" text-anchor="middle">1/T (K⁻¹)</text>
            <text x="30" y="40" fill="#64748b" font-size="11" text-anchor="end">ln k</text>
            <line x1="40" y1="55" x2="260" y2="165" stroke="#0284c7" stroke-width="2.5"/>
            <circle cx="40" cy="55" r="4" fill="#0284c7"/>
            <text x="30" y="60" fill="#0284c7" font-size="10" font-weight="bold" text-anchor="end">ln A</text>
            <text x="175" y="90" fill="#0369a1" font-size="12" font-weight="bold">Slope = -Ea / R</text>
            <text x="175" y="115" fill="#0369a1" font-size="10">Ea = -Slope × R</text>
            <text x="155" y="200" fill="#475569" font-size="10" text-anchor="middle">ln k = ln A - (Ea/R)(1/T)</text>
          </g>
          <!-- Plot 2: log10 k vs 1/T -->
          <g transform="translate(410, 20)">
            <rect x="0" y="0" width="310" height="210" fill="#ffffff" rx="10" stroke="#059669" stroke-width="1.5"/>
            <text x="155" y="24" fill="#059669" font-size="12" font-weight="bold" text-anchor="middle">Arrhenius Plot: log₁₀ k vs 1/T</text>
            <line x1="40" y1="180" x2="280" y2="180" stroke="#64748b" stroke-width="1.5"/>
            <line x1="40" y1="180" x2="40" y2="35" stroke="#64748b" stroke-width="1.5"/>
            <text x="280" y="196" fill="#64748b" font-size="11" text-anchor="middle">1/T (K⁻¹)</text>
            <text x="30" y="40" fill="#64748b" font-size="11" text-anchor="end">log₁₀ k</text>
            <line x1="40" y1="55" x2="260" y2="165" stroke="#059669" stroke-width="2.5"/>
            <circle cx="40" cy="55" r="4" fill="#059669"/>
            <text x="30" y="60" fill="#059669" font-size="10" font-weight="bold" text-anchor="end">log₁₀ A</text>
            <text x="175" y="90" fill="#047857" font-size="12" font-weight="bold">Slope = -Ea / (2.303 R)</text>
            <text x="175" y="115" fill="#047857" font-size="10">Ea = -Slope × 2.303 R</text>
            <text x="155" y="200" fill="#475569" font-size="10" text-anchor="middle">log k = log A - (Ea/2.303R)(1/T)</text>
          </g>
        </svg>`,
        caption: "Arrhenius Straight-Line Plots: Linear negative slopes allowing direct calculation of activation energy Ea from experimental rate constant data."
      }
    },
    {
      heading: "6. Maxwell-Boltzmann Energy Distribution & Catalytic Barrier Lowering",
      paragraphs: [
        "The Maxwell-Boltzmann distribution curve explains WHY a modest 10°C temperature rise can double or triple reaction rate:",
        "• Kinetic Energy Distribution: At temperature T₁, the distribution of molecular kinetic energies is represented by a bell-like curve. The peak represents the Most Probable Kinetic Energy. Only a tiny fraction of molecules at the far-right tail have kinetic energy ≥ Ea (shaded area).",
        "• Temperature Elevation (T₂ = T₁ + 10 K): As temperature rises, molecules gain thermal energy. The distribution curve flattens out, broadens, and its peak shifts toward higher energy. Consequently, the shaded area under the curve beyond the activation energy threshold Ea roughly DOUBLES. This directly doubles the fraction of effective collisions and thus doubles the rate constant k!",
        "• Action of a Catalyst: A catalyst does NOT shift the kinetic energy distribution of the molecules. Instead, it alters the reaction pathway, creating an alternative route with a LOWER activation energy barrier (Ea' < Ea).",
        "  - The activation energy line on the Maxwell-Boltzmann graph shifts to the LEFT (from Ea to Ea').",
        "  - A vastly greater fraction of molecules now possess kinetic energy ≥ Ea' without heating.",
        "  - Rate constant with catalyst: k_cat = A e^(-Ea'/RT). The speedup factor is: k_cat / k_uncat = e^((Ea - Ea') / RT) = e^(ΔEa / RT)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="760" height="260" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
          <!-- Maxwell-Boltzmann Curve -->
          <g transform="translate(40, 20)">
            <rect x="0" y="0" width="320" height="210" fill="#ffffff" rx="10" stroke="#6366f1" stroke-width="1.5"/>
            <text x="160" y="24" fill="#4f46e5" font-size="12" font-weight="bold" text-anchor="middle">Maxwell-Boltzmann Distribution</text>
            <line x1="30" y1="180" x2="290" y2="180" stroke="#64748b" stroke-width="1.5"/>
            <line x1="30" y1="180" x2="30" y2="35" stroke="#64748b" stroke-width="1.5"/>
            <text x="290" y="196" fill="#64748b" font-size="10" text-anchor="middle">Kinetic Energy (E)</text>
            <text x="25" y="40" fill="#64748b" font-size="10" text-anchor="end">Fraction</text>
            <!-- Curve T1 -->
            <path d="M 30 180 Q 70 40 110 90 Q 170 160 280 180" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
            <text x="90" y="55" fill="#2563eb" font-size="10" font-weight="bold">Curve at T₁</text>
            <!-- Curve T2 = T1 + 10 -->
            <path d="M 30 180 Q 90 70 140 110 Q 200 160 280 180" fill="none" stroke="#ef4444" stroke-width="2.5"/>
            <text x="145" y="75" fill="#dc2626" font-size="10" font-weight="bold">Curve at T₂ (T₁+10)</text>
            <!-- Ea Line -->
            <line x1="200" y1="180" x2="200" y2="50" stroke="#10b981" stroke-width="2" stroke-dasharray="4,3"/>
            <text x="200" y="45" fill="#059669" font-size="10" font-weight="bold" text-anchor="middle">Ea Threshold</text>
            <rect x="200" y="150" width="80" height="30" fill="#fee2e2" opacity="0.8"/>
            <text x="240" y="168" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">Area Doubles at T₂</text>
          </g>
          <!-- Catalyst Energy Barrier Profile -->
          <g transform="translate(400, 20)">
            <rect x="0" y="0" width="320" height="210" fill="#ffffff" rx="10" stroke="#10b981" stroke-width="1.5"/>
            <text x="160" y="24" fill="#059669" font-size="12" font-weight="bold" text-anchor="middle">Catalyst: Lowering of Activation Barrier</text>
            <line x1="30" y1="180" x2="290" y2="180" stroke="#64748b" stroke-width="1.5"/>
            <line x1="30" y1="180" x2="30" y2="35" stroke="#64748b" stroke-width="1.5"/>
            <text x="290" y="196" fill="#64748b" font-size="10" text-anchor="middle">Reaction Coordinate</text>
            <!-- Uncatalyzed path -->
            <path d="M 30 130 L 70 130 Q 150 30 170 30 Q 190 30 250 150 L 290 150" fill="none" stroke="#dc2626" stroke-width="2.5"/>
            <text x="170" y="22" fill="#dc2626" font-size="10" font-weight="bold" text-anchor="middle">Uncatalyzed Ea</text>
            <!-- Catalyzed path -->
            <path d="M 30 130 L 70 130 Q 150 75 170 75 Q 190 75 250 150 L 290 150" fill="none" stroke="#059669" stroke-width="2.5" stroke-dasharray="4,3"/>
            <text x="170" y="90" fill="#059669" font-size="10" font-weight="bold" text-anchor="middle">Catalyzed Ea' (Lower)</text>
            <text x="50" y="125" fill="#334155" font-size="10" font-weight="bold">Reactants</text>
            <text x="260" y="165" fill="#334155" font-size="10" font-weight="bold">Products</text>
            <text x="160" y="198" fill="#047857" font-size="10" text-anchor="middle">ΔH &amp; ΔG remain strictly UNCHANGED</text>
          </g>
        </svg>`,
        caption: "Thermal and Catalytic Rate Acceleration: (Left) Maxwell-Boltzmann curve showing doubling of fraction of molecules exceeding Ea at T + 10 K; (Right) Catalyst providing an alternate pathway with reduced Ea."
      }
    }
  ],

  formulae: [
    {
      title: "Arrhenius Exponential Equation",
      formula: "k = A e^{-E_a / RT}",
      meaning: "Quantitative relationship connecting rate constant k with absolute temperature T.",
      variables: "k = rate constant, A = frequency factor, E_a = activation energy (J mol⁻¹), R = 8.314 J mol⁻¹ K⁻¹, T = absolute temperature (K)",
      unit: "A has same units as k",
      whenToUse: "To compute rate constant at a given temperature from A and Ea."
    },
    {
      title: "Logarithmic Form of Arrhenius Equation (Base-10)",
      formula: "\\log_{10} k = \\log_{10} A - \\frac{E_a}{2.303 R T}",
      meaning: "Linear equation for Arrhenius plot and single-temperature calculations.",
      whenToUse: "To find Ea from slope of log k vs 1/T or compute A from intercept."
    },
    {
      title: "Two-Temperature Arrhenius Master Formula",
      formula: "\\log_{10}\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R} \\left[\\frac{T_2 - T_1}{T_1 T_2}\\right]",
      meaning: "Calculates activation energy Ea from rate constants at two different temperatures T₁ and T₂.",
      variables: "T₁, T₂ in KELVIN; R = 8.314 J mol⁻¹ K⁻¹; Ea in J mol⁻¹",
      whenToUse: "In all two-temperature kinetics numericals."
    },
    {
      title: "Catalytic Rate Acceleration Ratio",
      formula: "\\frac{k_{\\text{cat}}}{k_{\\text{uncat}}} = e^{\\Delta E_a / RT} \\implies \\log_{10}\\left(\\frac{k_{\\text{cat}}}{k_{\\text{uncat}}}\\right) = \\frac{\\Delta E_a}{2.303 R T}",
      meaning: "Calculates the factor by which reaction rate increases when activation energy is lowered by ΔEa = Ea - Ea'.",
      whenToUse: "To determine catalytic rate increase or required Ea lowering for a desired speedup."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 740 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
      <rect width="740" height="240" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="200" height="190" fill="#ffffff" rx="10" stroke="#0284c7" stroke-width="1.5"/>
        <text x="100" y="26" fill="#0284c7" font-size="12" font-weight="bold" text-anchor="middle">1. Arrhenius Plot</text>
        <line x1="30" y1="150" x2="170" y2="150" stroke="#64748b" stroke-width="1.5"/>
        <line x1="30" y1="150" x2="30" y2="45" stroke="#64748b" stroke-width="1.5"/>
        <line x1="30" y1="60" x2="160" y2="135" stroke="#0284c7" stroke-width="2.5"/>
        <text x="100" y="80" fill="#0369a1" font-size="10" font-weight="bold">Slope = -Ea / 2.303R</text>
        <text x="100" y="105" fill="#0369a1" font-size="10">Intercept = log A</text>
        <text x="100" y="175" fill="#475569" font-size="10" text-anchor="middle">log k vs 1/T</text>
      </g>
      <g transform="translate(270, 20)">
        <rect x="0" y="0" width="200" height="190" fill="#ffffff" rx="10" stroke="#059669" stroke-width="1.5"/>
        <text x="100" y="26" fill="#059669" font-size="12" font-weight="bold" text-anchor="middle">2. Catalyzed Profile</text>
        <path d="M 20 120 Q 80 40 100 40 Q 120 40 180 140" fill="none" stroke="#dc2626" stroke-width="2"/>
        <path d="M 20 120 Q 80 80 100 80 Q 120 80 180 140" fill="none" stroke="#059669" stroke-width="2" stroke-dasharray="3,3"/>
        <text x="100" y="32" fill="#dc2626" font-size="9" text-anchor="middle">Uncatalyzed Ea</text>
        <text x="100" y="95" fill="#059669" font-size="9" text-anchor="middle">Catalyzed Ea'</text>
        <text x="100" y="175" fill="#475569" font-size="10" text-anchor="middle">Ea lowered by ΔEa</text>
      </g>
      <g transform="translate(500, 20)">
        <rect x="0" y="0" width="200" height="190" fill="#ffffff" rx="10" stroke="#7c3aed" stroke-width="1.5"/>
        <text x="100" y="26" fill="#7c3aed" font-size="12" font-weight="bold" text-anchor="middle">3. Effective Collision</text>
        <circle cx="60" cy="90" r="18" fill="#3b82f6"/>
        <circle cx="140" cy="90" r="18" fill="#ef4444"/>
        <path d="M 80 90 L 120 90" stroke="#7c3aed" stroke-width="2" marker-end="url(#arrow)"/>
        <text x="100" y="130" fill="#6b21a8" font-size="10" font-weight="bold" text-anchor="middle">Energy ≥ Ea + Proper Steric</text>
        <text x="100" y="175" fill="#475569" font-size="10" text-anchor="middle">Rate = P Z e^(-Ea/RT)</text>
      </g>
    </svg>`,
    caption: "Visual Key of Temperature and Catalytic Principles in Physical Chemistry."
  },

  neetImportantPoints: [
    "NEET HIGH YIELD: In the Arrhenius equation log₁₀(k₂/k₁) = (Ea / 2.303 R) [(T₂ - T₁) / (T₁ T₂)], temperature MUST be in KELVIN. Forgetting to convert °C to K is the #1 mistake in NEET.",
    "NEET HIGH YIELD: The value of R in the Arrhenius equation is 8.314 J mol⁻¹ K⁻¹. If Ea is asked in kJ mol⁻¹, divide your final answer by 1000!",
    "NEET TRAP 1: A catalyst DOES NOT CHANGE: ΔH of reaction, ΔG of reaction, ΔS of reaction, or Equilibrium constant (K_eq). It ONLY changes: Activation energy (Ea) and Rate constant (k).",
    "NEET TRAP 2: A catalyst accelerates BOTH the forward reaction and reverse reaction by the EXACT same factor. Hence, the equilibrium composition is unchanged; only the time required to attain equilibrium is reduced.",
    "NEET TRAP 3: If activation energy of a reaction is zero (Ea = 0), rate constant k = A and the rate is COMPLETELY INDEPENDENT of temperature.",
    "NEET TRAP 4: For an endothermic reaction (ΔH > 0), the minimum activation energy is Ea ≥ ΔH."
  ],

  commonConfusions: [
    {
      commonConfusion: "Believing that temperature doubles the reaction rate because molecules collide twice as frequently.",
      correctFact: "Collision frequency (Z) increases proportional to √T, which is only a ~1.7% increase for a 10°C rise. The 200-300% rate increase is caused entirely by the exponential Boltzmann factor e^(-Ea/RT), which doubles the fraction of molecules possessing energy ≥ Ea.",
      whyItMattersForNEET: "Frequently tested in Assertion-Reason questions in NEET."
    },
    {
      commonConfusion: "Assuming a catalyst shifts the equilibrium position toward products.",
      correctFact: "A catalyst lowers activation energy equally for forward and reverse directions (E_a,f and E_a,b are both reduced by ΔEa). It speeds up both rates equally (r_f and r_b) and leaves the equilibrium constant K_eq = k_f / k_b completely unchanged.",
      whyItMattersForNEET: "Standard multiple-choice distractor in NEET."
    },
    {
      commonConfusion: "Confusing the slope of ln k vs 1/T (-Ea/R) with the slope of log₁₀ k vs 1/T (-Ea / 2.303R).",
      correctFact: "Plot of ln k vs 1/T has Slope = -Ea / R. Plot of log₁₀ k vs 1/T has Slope = -Ea / (2.303 R). Always check the y-axis base before calculating Ea!",
      whyItMattersForNEET: "Examiners intentionally swap these two formulas in MCQ options."
    }
  ],

  quickRevision: [
    "Arrhenius Equation: k = A e^(-Ea/RT)",
    "Base-10 Form: log₁₀ k = log₁₀ A - Ea / (2.303 R T)",
    "Two-Temperature Form: log₁₀(k₂/k₁) = (Ea / 2.303 R) [(T₂ - T₁) / (T₁ T₂)]",
    "Slope of ln k vs 1/T = -Ea / R  =>  Ea = -Slope × 8.314 J/mol",
    "Slope of log k vs 1/T = -Ea / (2.303 R)  =>  Ea = -Slope × 19.147 J/mol",
    "Temperature Coefficient μ = k_{T+10} / k_T ≈ 2 to 3",
    "Effective Collision = Threshold Energy (E ≥ Ea) + Proper Steric Orientation (P)",
    "Collision Rate: Rate = P × Z_AB × e^(-Ea/RT)",
    "Catalyst lowers Ea for forward and reverse paths equally by ΔEa; ΔH, ΔG, K_eq UNCHANGED",
    "Exothermic: E_a,f < E_a,b | Endothermic: E_a,f > E_a,b (E_a,f ≥ ΔH)"
  ],

  practiceQuestions: [
    {
      id: "prac-arrhenius-1",
      question: "The rate constant of a reaction at 500 K and 700 K are 0.02 s⁻¹ and 0.07 s⁻¹ respectively. What is the activation energy Ea of the reaction? (Given R = 8.314 J mol⁻¹ K⁻¹, log(3.5) = 0.544)",
      options: [
        "18.23 kJ mol⁻¹",
        "36.46 kJ mol⁻¹",
        "9.12 kJ mol⁻¹",
        "54.69 kJ mol⁻¹"
      ],
      correctAnswer: 0,
      explanation: "Step 1: Formula: log(k₂/k₁) = (Ea / (2.303 R)) × [(T₂ - T₁) / (T₁ T₂)].\nStep 2: Given: k₁ = 0.02, k₂ = 0.07, T₁ = 500 K, T₂ = 700 K. k₂/k₁ = 0.07/0.02 = 3.5.\nStep 3: log(3.5) = 0.544.\n0.544 = (Ea / (2.303 × 8.314)) × [(700 - 500) / (500 × 700)] = (Ea / 19.147) × [200 / 350000] = (Ea / 19.147) × (5.714 × 10⁻⁴).\nStep 4: Ea = (0.544 × 19.147) / (5.714 × 10⁻⁴) = 10.416 / (5.714 × 10⁻⁴) = 18228 J mol⁻¹ = 18.23 kJ mol⁻¹. Correct Option: 0 (18.23 kJ mol⁻¹).",
      difficulty: "Medium",
      conceptTested: "Two-Temperature Arrhenius Equation"
    },
    {
      id: "prac-arrhenius-2",
      question: "The slope of the line in the plot of log₁₀ k versus 1/T for a chemical reaction is -5000 K. The activation energy of the reaction is: (R = 8.314 J mol⁻¹ K⁻¹)",
      options: [
        "95.7 kJ mol⁻¹",
        "41.6 kJ mol⁻¹",
        "83.1 kJ mol⁻¹",
        "191.5 kJ mol⁻¹"
      ],
      correctAnswer: 0,
      explanation: "Step 1: In the plot of log₁₀ k vs 1/T: Slope = -Ea / (2.303 R).\nStep 2: Given Slope = -5000 K.\n-Ea / (2.303 × 8.314) = -5000  =>  Ea = 5000 × 2.303 × 8.314 = 5000 × 19.147 = 95735 J mol⁻¹ = 95.7 kJ mol⁻¹.\nStep 3: Correct Option: 0 (95.7 kJ mol⁻¹).",
      difficulty: "Easy",
      conceptTested: "Activation Energy from Arrhenius Slope"
    },
    {
      id: "prac-arrhenius-3",
      question: "A catalyst lowers the activation energy of a reaction by 20 kJ mol⁻¹ at 300 K. By what factor does the rate of reaction increase? (Given R = 8.314 J mol⁻¹ K⁻¹, e^(8.02) = 3041)",
      options: [
        "3041 times",
        "1000 times",
        "500 times",
        "20 times"
      ],
      correctAnswer: 0,
      explanation: "Step 1: Ratio of rate constants: k_cat / k_uncat = e^(ΔEa / RT).\nStep 2: ΔEa = 20 kJ mol⁻¹ = 20,000 J mol⁻¹. R = 8.314 J mol⁻¹ K⁻¹, T = 300 K.\nStep 3: Exponent = ΔEa / RT = 20000 / (8.314 × 300) = 20000 / 2494.2 = 8.018 ≈ 8.02.\nStep 4: k_cat / k_uncat = e^(8.02) = 3041.\nStep 5: The reaction rate increases by 3041 times. Correct Option: 0 (3041 times).",
      difficulty: "Hard",
      conceptTested: "Catalytic Speedup Calculation"
    },
    {
      id: "prac-arrhenius-4",
      question: "For an endothermic reaction where ΔH represents the enthalpy of reaction in kJ mol⁻¹, the minimum value for the activation energy Ea will be:",
      options: [
        "Less than ΔH",
        "Zero",
        "Equal to or greater than ΔH",
        "Equal to ΔH / 2"
      ],
      correctAnswer: 2,
      explanation: "Step 1: In an endothermic reaction, products have higher energy than reactants: ΔH = E_P - E_R > 0.\nStep 2: Since the activated complex (Transition State) must lie at or above the product energy level, E_a,f = E‡ - E_R = (E‡ - E_P) + (E_P - E_R) = E_a,b + ΔH.\nStep 3: Since E_a,b ≥ 0, we must have E_a,f ≥ ΔH. The activation energy is always equal to or greater than ΔH. Correct Option: 2 (Equal to or greater than ΔH).",
      difficulty: "Easy",
      conceptTested: "Thermodynamics vs Activation Energy in Endothermic Reactions"
    },
    {
      id: "prac-arrhenius-5",
      question: "Which of the following statements about a catalyst is TRUE?",
      options: [
        "A catalyst alters the equilibrium constant K_eq of a reversible reaction.",
        "A catalyst increases the average kinetic energy of the reacting molecules.",
        "A catalyst lowers the activation energy equally for both forward and backward reactions.",
        "A catalyst makes a non-spontaneous reaction (ΔG > 0) spontaneous."
      ],
      correctAnswer: 2,
      explanation: "Step 1: A catalyst provides an alternate pathway with lower activation energy (Ea' < Ea).\nStep 2: It lowers the activation energy by the EXACT same amount for both forward and reverse paths, accelerating both rates equally.\nStep 3: It has ZERO effect on ΔH, ΔG, ΔS, or K_eq, and cannot make a non-spontaneous reaction spontaneous. Correct Option: 2 (Option C).",
      difficulty: "Easy",
      conceptTested: "Catalyst Properties & Limitations"
    }
  ],

  pyqs: [
    {
      id: "kinetics-pyq-2022-arrhenius",
      year: 2022,
      exam: "NEET UG 2022",
      question: "The rate constant for a first order reaction is given by the equation: log₁₀ k = 14.34 - (1.25 × 10⁴ K) / T. The activation energy (Ea) for the reaction is: (R = 8.314 J mol⁻¹ K⁻¹)",
      options: [
        "239.34 kJ mol⁻¹",
        "103.88 kJ mol⁻¹",
        "51.94 kJ mol⁻¹",
        "125.00 kJ mol⁻¹"
      ],
      correctAnswer: 0,
      explanation: "Step 1: Compare with the Arrhenius equation: log₁₀ k = log₁₀ A - (Ea / (2.303 R T)).\nStep 2: Comparing coefficients of 1/T: Ea / (2.303 R) = 1.25 × 10⁴ K.\nStep 3: Ea = 1.25 × 10⁴ × 2.303 × 8.314 = 1.25 × 10⁴ × 19.147 = 239337.5 J mol⁻¹ = 239.34 kJ mol⁻¹.\nStep 4: Correct Option: 0 (239.34 kJ mol⁻¹).",
      topicId: "chem-arrhenius-collision-theory",
      difficulty: "Medium",
      ncertReference: "Class 12 NCERT Chemistry, Chapter 4, Section 4.4"
    },
    {
      id: "kinetics-pyq-2020-arrhenius",
      year: 2020,
      exam: "NEET UG 2020",
      question: "An increase in the concentration of the reactants of a reaction leads to change in:",
      options: [
        "Activation energy",
        "Heat of reaction",
        "Threshold energy",
        "Collision frequency"
      ],
      correctAnswer: 3,
      explanation: "Step 1: Increasing the concentration of reactants increases the number of molecules per unit volume.\nStep 2: This directly increases the number of collisions taking place per unit volume per second, which is the Collision Frequency (Z).\nStep 3: Activation energy, heat of reaction, and threshold energy are intrinsic thermodynamic/kinetic properties independent of reactant concentration. Correct Option: 3 (Collision frequency).",
      topicId: "chem-arrhenius-collision-theory",
      difficulty: "Easy",
      ncertReference: "Class 12 NCERT Chemistry, Chapter 4, Section 4.5"
    },
    {
      id: "kinetics-pyq-2018-arrhenius",
      year: 2018,
      exam: "NEET UG 2018",
      question: "The addition of a catalyst during a chemical reaction alters which of the following quantities?",
      options: [
        "Enthalpy",
        "Activation energy",
        "Entropy",
        "Internal energy"
      ],
      correctAnswer: 1,
      explanation: "Step 1: A catalyst provides an alternative pathway with a lower activation energy (Ea).\nStep 2: It does not alter state functions such as Enthalpy (ΔH), Entropy (ΔS), Gibbs free energy (ΔG), or Internal energy (ΔU).\nStep 3: Correct Option: 1 (Activation energy).",
      topicId: "chem-arrhenius-collision-theory",
      difficulty: "Easy",
      ncertReference: "Class 12 NCERT Chemistry, Chapter 4, Section 4.4.1"
    },
    {
      id: "kinetics-pyq-2010",
      year: 2010,
      exam: "AIPMT 2010",
      question: "For a reaction, activation energy Ea = 0 and the rate constant at 200 K is 1.6 × 10⁶ s⁻¹. The rate constant at 400 K will be:",
      options: [
        "3.2 × 10⁶ s⁻¹",
        "1.6 × 10⁶ s⁻¹",
        "6.4 × 10⁶ s⁻¹",
        "0.8 × 10⁶ s⁻¹"
      ],
      correctAnswer: 1,
      explanation: "Step 1: Arrhenius equation: log(k₂/k₁) = (Ea / 2.303 R) [(T₂ - T₁) / (T₁ T₂)].\nStep 2: Given Ea = 0. Therefore: log(k₂/k₁) = 0  =>  k₂/k₁ = 1  =>  k₂ = k₁.\nStep 3: At 400 K, k₂ remains exactly 1.6 × 10⁶ s⁻¹. When Ea = 0, the reaction rate constant is completely independent of temperature. Correct Option: 1 (Option B).",
      topicId: "chem-arrhenius-collision-theory",
      difficulty: "Easy",
      ncertReference: "Class 12 NCERT Chemistry, Chapter 4, Section 4.4"
    }
  ],

  neetMarksPotential: {
    topicName: "Arrhenius Equation, Activation Energy & Collision Theory",
    confidenceLabel: "HIGH",
    confidenceText: "High Confidence: Tested in 14 of 15 recent NEET papers (1 to 2 questions per paper, 4 to 8 marks).",
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 14,
    totalDirectPyqs: 16,
    totalHistoricalMarks: 64,
    avgDirectMarksPerPaper: 4.3,
    whatThisMeansForYou: "Arrhenius calculations (log(k2/k1) = (Ea/2.303R)[ΔT/T1T2]) and catalyst concept questions are guaranteed marks. Always keep T in Kelvin and R = 8.314 J/(mol·K)."
  }
};
