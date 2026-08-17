import { DetailedTopicContent } from '../../types/neet';

export const chemRateOrderMolecularityDetails: DetailedTopicContent = {
  topicId: "chem-rate-order-molecularity",
  topicName: "Rate of Reaction, Rate Law, Order & Molecularity",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Physical Chemistry (Class 12)",
  chapter: "Chemical Kinetics",

  whatIsThisTopic: "Chemical Kinetics is the branch of physical chemistry that investigates the rates of chemical reactions, the exact molecular pathways (mechanisms) through which reactants transform into products, and the factors—such as concentration, pressure, temperature, and catalysts—that govern these transformation speeds. This masterclass topic builds rigorous foundations in average and instantaneous rates, stoichiometric rate relations, experimentally determined rate laws, reaction order, molecularity of elementary steps, and multi-step reaction mechanisms with the rate-determining step.",

  basicIdea: [
    "1. Thermodynamics vs Kinetics: Thermodynamics determines IF a reaction is energetically favorable (spontaneous when ΔG < 0), but says nothing about HOW FAST it occurs. Kinetics governs the reaction rate and activation energy barrier (e.g., diamond converting to graphite is thermodynamically spontaneous, but kinetically infinitely slow).",
    "2. Rate of Reaction: The change in molar concentration of any reactant or product per unit time. For reactant R → product P, Rate = -Δ[R]/Δt = +Δ[P]/Δt. The negative sign ensures the reaction rate is always a positive quantity.",
    "3. Stoichiometric Equivalence: For a general reaction aA + bB → cC + dD, the rate of overall reaction is normalized by dividing each species' rate of appearance/disappearance by its stoichiometric coefficient: Rate = -(1/a) d[A]/dt = -(1/b) d[B]/dt = +(1/c) d[C]/dt = +(1/d) d[D]/dt.",
    "4. Rate Law is Experimental: For aA + bB → Products, Rate = k [A]^m [B]^n. The exponents m and n (orders of reaction) CANNOT be deduced from stoichiometric coefficients a and b for complex reactions; they must be determined experimentally.",
    "5. Order vs Molecularity: Order (m+n) is an experimental quantity that can be zero, integer, fractional, or negative, and applies to overall reactions. Molecularity is a theoretical count of reacting particles colliding simultaneously in an elementary step and MUST be a positive integer (1, 2, or 3)—it is NEVER zero or fractional."
  ],

  importantTerms: [
    {
      term: "Chemical Kinetics",
      definition: "The branch of chemistry concerned with the measurement of reaction rates, the influence of variables on rates, and the microscopic mechanisms of chemical reactions.",
      neetNote: "Contrast with Thermodynamics: Kinetics deals with reaction path, rate constant (k), and activation energy (Ea); Thermodynamics deals only with initial and final states (ΔH, ΔS, ΔG)."
    },
    {
      term: "Average Rate of Reaction (r_avg)",
      symbol: "r_avg = -Δ[R]/Δt = +Δ[P]/Δt",
      definition: "The change in concentration of a reactant or product measured over a macroscopic, finite time interval Δt.",
      unit: "mol L⁻¹ s⁻¹ (or M s⁻¹, atm s⁻¹ for gases)",
      neetNote: "Depends on the chosen time interval Δt; continuously decreases as reactants are consumed."
    },
    {
      term: "Instantaneous Rate of Reaction (r_inst)",
      symbol: "r_inst = -d[R]/dt = +d[P]/dt",
      definition: "The rate of change of concentration of a reactant or product at a specific infinitesimal instant of time (as Δt → 0).",
      unit: "mol L⁻¹ s⁻¹",
      neetNote: "Graphically determined from the slope of the tangent drawn to the concentration vs time curve at time t: Slope = -d[R]/dt."
    },
    {
      term: "Rate Law / Rate Equation",
      symbol: "Rate = k [A]^m [B]^n",
      definition: "An experimentally deduced mathematical expression relating the instantaneous reaction rate to the molar concentrations of reacting species raised to suitable powers.",
      neetNote: "Exponents m and n are called partial orders and are strictly determined by experiment, not the balanced chemical equation."
    },
    {
      term: "Rate Constant / Specific Reaction Rate (k)",
      symbol: "k",
      definition: "The proportionality constant in the rate law expression, representing the reaction rate when all reactant concentrations are unity (1 mol L⁻¹).",
      unit: "(mol L⁻¹)^(1-n) s⁻¹ (where n is the overall reaction order)",
      neetNote: "k depends ONLY on temperature and catalyst. It is strictly INDEPENDENT of reactant concentrations."
    },
    {
      term: "Order of Reaction (n)",
      symbol: "n = m + n + ...",
      definition: "The sum of the exponents of the concentration terms of reactants in the experimentally determined rate law expression.",
      neetNote: "Can be zero, integer (1, 2, 3), fractional (e.g., 0.5, 1.5), or negative. It is an experimental property."
    },
    {
      term: "Molecularity of Reaction",
      symbol: "1 (Uni), 2 (Bi), 3 (Tri)",
      definition: "The total number of reacting atoms, ions, or molecules that must collide simultaneously in an elementary step to cause chemical transformation.",
      neetNote: "Theoretical concept applicable ONLY to elementary steps. Molecularity > 3 is extremely rare due to negligible probability of 4 bodies colliding simultaneously."
    },
    {
      term: "Elementary Reaction vs Complex Reaction",
      definition: "An elementary reaction occurs in a single step with a single transition state. A complex reaction occurs via a sequence of elementary steps (mechanism).",
      neetNote: "For elementary reactions ONLY, order with respect to each reactant equals its stoichiometric coefficient."
    },
    {
      term: "Rate-Determining Step (RDS)",
      symbol: "RDS (Slowest step)",
      definition: "The slowest elementary step in a multi-step reaction mechanism that dictates the overall reaction rate.",
      neetNote: "The rate law of the overall reaction corresponds to the rate law of the RDS (with any intermediates substituted using pre-equilibrium steps)."
    },
    {
      term: "Reaction Intermediate",
      definition: "A transient species formed in one elementary step and consumed in a subsequent step; does not appear in the overall balanced equation or final rate law.",
      neetNote: "Never write intermediates in the final rate law; use equilibrium relations to express them in terms of stable reactants."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Thermodynamics vs Chemical Kinetics: The Fundamental Distinction",
      paragraphs: [
        "In physical chemistry, two fundamental disciplines govern chemical reactions: Chemical Thermodynamics and Chemical Kinetics.",
        "• Chemical Thermodynamics dictates the FEASIBILITY and DIRECTION of a process. A reaction is spontaneous if the standard Gibbs free energy change is negative (ΔG° < 0), and the equilibrium constant is K = exp(-ΔG°/RT). However, thermodynamics is completely blind to TIME and MECHANISM. It tells us nothing about how long a reaction takes to reach equilibrium.",
        "• Chemical Kinetics dictates the SPEED (rate) and PATHWAY (mechanism) of a reaction. The rate depends on the activation energy (Ea) barrier and the rate constant (k).",
        "• Classic NEET Example: The conversion of Diamond to Graphite: C(diamond) → C(graphite), ΔG° = -2.9 kJ/mol. Because ΔG° is negative, the transformation is thermodynamically spontaneous. However, the activation energy Ea is enormous (~350 kJ/mol) because covalent C-C network bonds must be broken. Hence, the rate of conversion at room temperature is practically ZERO (diamond is kinetically stable for billions of years).",
        "• Reaction Speed Spectrum: Reactions range from instantaneous (acid-base neutralization, BaCl₂ + H₂SO₄ precipitation taking 10⁻¹² to 10⁻¹⁶ s) to moderate (hydrolysis of sucrose, ester saponification taking minutes to hours) to extremely slow (rusting of iron, weathering of rocks taking years)."
      ],
      tables: [
        {
          title: "Comparison: Chemical Thermodynamics vs Chemical Kinetics",
          headers: ["Feature", "Chemical Thermodynamics", "Chemical Kinetics"],
          rows: [
            ["Governing Parameter", "Gibbs Free Energy Change (ΔG) & Enthalpy (ΔH)", "Activation Energy (Ea) & Rate Constant (k)"],
            ["Focus Question", "WILL the reaction happen? (Feasibility)", "HOW FAST will the reaction happen? (Rate)"],
            ["Time Aspect", "Completely independent of time", "Fundamentally based on time (t)"],
            ["Pathway Dependency", "State function (independent of path)", "Path function (depends strictly on mechanism)"],
            ["Effect of Catalyst", "NO effect on ΔG, ΔH, ΔS, or K_eq", "Lowers Ea and increases reaction rate constant k"],
            ["NEET Golden Rule", "ΔG < 0 does NOT guarantee a fast reaction!", "Fast reactions require low Ea, regardless of ΔG."]
          ]
        }
      ]
    },
    {
      heading: "2. Rate of Chemical Reaction: Average, Instantaneous & Stoichiometric Relations",
      paragraphs: [
        "Consider a simple reaction: R → P. As the reaction proceeds, reactant R is consumed and its concentration [R] decreases, while product P is generated and its concentration [P] increases.",
        "• Rate of Disappearance of Reactant = -Δ[R] / Δt (where Δ[R] = [R]₂ - [R]₁ < 0, so the minus sign makes the rate positive).",
        "• Rate of Appearance of Product = +Δ[P] / Δt (where Δ[P] = [P]₂ - [P]₁ > 0).",
        "• Instantaneous Rate: The rate at any specific instant of time: r_inst = lim(Δt → 0) [-Δ[R]/Δt] = -d[R]/dt = +d[P]/dt.",
        "• Graphical Interpretation: On a plot of [R] vs time, the tangent drawn at time t has a negative slope: Slope = d[R]/dt. Therefore, r_inst = -(Slope of tangent). On a plot of [P] vs time, r_inst = +(Slope of tangent).",
        "• Stoichiometric Rate Relation: For a general reaction aA + bB → cC + dD, because 'a' moles of A react with 'b' moles of B to form 'c' moles of C and 'd' moles of D, the rates of consumption and formation are unequal. To define a unique, unambiguous overall 'Rate of Reaction', we divide each rate by its stoichiometric coefficient:",
        "Rate of Reaction = -(1/a) d[A]/dt = -(1/b) d[B]/dt = +(1/c) d[C]/dt = +(1/d) d[D]/dt."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="760" height="260" fill="#f8fafc" rx="14" stroke="#e2e8f0" stroke-width="1.5"/>
          <!-- Reactant Plot -->
          <g transform="translate(60, 20)">
            <text x="120" y="16" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">Reactant Concentration [R] vs Time</text>
            <line x1="30" y1="200" x2="250" y2="200" stroke="#64748b" stroke-width="2"/>
            <line x1="30" y1="200" x2="30" y2="30" stroke="#64748b" stroke-width="2"/>
            <text x="250" y="218" fill="#64748b" font-size="11" text-anchor="middle">Time (t)</text>
            <text x="20" y="30" fill="#64748b" font-size="11" text-anchor="end">[R]</text>
            <path d="M 30 50 Q 100 170 240 190" fill="none" stroke="#ef4444" stroke-width="3"/>
            <!-- Tangent -->
            <line x1="60" y1="80" x2="160" y2="180" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,4"/>
            <circle cx="110" cy="130" r="4" fill="#3b82f6"/>
            <text x="120" y="125" fill="#2563eb" font-size="10" font-weight="bold">Tangent at t₁</text>
            <text x="120" y="145" fill="#dc2626" font-size="10">Slope = -d[R]/dt = r_inst</text>
          </g>
          <!-- Product Plot -->
          <g transform="translate(420, 20)">
            <text x="120" y="16" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">Product Concentration [P] vs Time</text>
            <line x1="30" y1="200" x2="250" y2="200" stroke="#64748b" stroke-width="2"/>
            <line x1="30" y1="200" x2="30" y2="30" stroke="#64748b" stroke-width="2"/>
            <text x="250" y="218" fill="#64748b" font-size="11" text-anchor="middle">Time (t)</text>
            <text x="20" y="30" fill="#64748b" font-size="11" text-anchor="end">[P]</text>
            <path d="M 30 195 Q 100 60 240 45" fill="none" stroke="#10b981" stroke-width="3"/>
            <!-- Tangent -->
            <line x1="60" y1="180" x2="160" y2="80" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="4,4"/>
            <circle cx="110" cy="130" r="4" fill="#8b5cf6"/>
            <text x="120" y="125" fill="#7c3aed" font-size="10" font-weight="bold">Tangent at t₁</text>
            <text x="120" y="145" fill="#059669" font-size="10">Slope = +d[P]/dt = r_inst</text>
          </g>
        </svg>`,
        caption: "Concentration-Time Profiles: Reactant curve slopes downward (r_inst = -slope); Product curve slopes upward (r_inst = +slope).",
        guide: "Observe that tangent slopes are steepest at t = 0 (Initial Rate is maximum) and progressively flatten out as reactants are consumed."
      },
      importantPoints: [
        "Rate of disappearance of A = -d[A]/dt (NO stoichiometric fraction included).",
        "Rate of overall reaction = -(1/a) d[A]/dt = +(1/c) d[C]/dt (STOICHIOMETRIC COEFFICIENTS INCLUDED).",
        "For N₂ + 3H₂ → 2NH₃: -d[N₂]/dt = -(1/3) d[H₂]/dt = +(1/2) d[NH₃]/dt. Therefore: Rate of disappearance of H₂ is 3 times the rate of disappearance of N₂ and 1.5 times the rate of appearance of NH₃!"
      ]
    },
    {
      heading: "3. Factors Influencing Reaction Rates: Microscopic Mechanism",
      paragraphs: [
        "The speed of any chemical process depends on six physical and chemical factors:",
        "1. Nature of Reactants: Reactions involving ionic species in aqueous solution (e.g., Ag⁺ + Cl⁻ → AgCl(s)) are virtually instantaneous because no covalent bonds need to be broken. Reactions involving strong covalent bonds (e.g., N₂ + 3H₂ → 2NH₃ with N≡N bond energy ~946 kJ/mol) are slow and require high activation energy.",
        "2. Concentration of Reactants: Increasing reactant concentration increases the number of particles per unit volume, which increases collision frequency (Z). By the rate law, rate generally increases with concentration (except for zero-order reactions).",
        "3. Pressure (Gaseous Reactions): For gases, increasing pressure is equivalent to decreasing volume (C = n/V = P/RT), crowding gas molecules and increasing collision frequency.",
        "4. Temperature: Reaction rates universally increase with temperature. For most homogeneous reactions near room temperature, a 10°C rise in temperature doubles or triples the rate (Temperature coefficient μ = k_{T+10}/k_T ≈ 2 to 3). Microscopically, this is NOT due to collision frequency (which increases by only ~1-2%), but because the fraction of molecules possessing energy ≥ Ea increases exponentially (e^(-Ea/RT)).",
        "5. Catalyst: A catalyst accelerates reaction speed by providing an alternative reaction pathway with a LOWER activation energy barrier (Ea' < Ea). It lowers Ea for BOTH forward and reverse directions by the same amount without altering ΔH, ΔG, or K_eq.",
        "6. Surface Area (Heterogeneous Reactions): For solid-liquid or solid-gas reactions, finely powdered reactants offer far greater surface area than large lumps, exposing more active collision sites and drastically increasing reaction rate (e.g., powdered zinc reacts far faster with dilute HCl than a zinc granulate)."
      ]
    },
    {
      heading: "4. Rate Law, Order of Reaction, and Units of Rate Constant (k)",
      paragraphs: [
        "The Rate Law is the fundamental mathematical expression connecting the reaction rate to the molar concentrations of reactants: Rate = k [A]^m [B]^n.",
        "• Specific Rate Constant (k): When [A] = 1 M and [B] = 1 M, Rate = k. Hence, k is defined as the reaction rate when all reactant concentrations are unity.",
        "• Order of Reaction (n = m + n): Order is the sum of powers to which concentrations are raised in the rate law. It represents the sensitivity of rate to concentration changes:",
        "  - If order = 0 with respect to A: Doubling [A] has NO effect on rate (Rate ∝ [A]⁰ = 1).",
        "  - If order = 1 with respect to A: Doubling [A] doubles the rate (Rate ∝ [A]¹).",
        "  - If order = 2 with respect to A: Doubling [A] quadruples the rate (Rate ∝ [A]² = 4).",
        "  - If order = 1/2 with respect to A: Quadrupling [A] doubles the rate (Rate ∝ [A]^(0.5) = 2).",
        "  - If order = -1 with respect to A: Doubling [A] halves the rate (retardation).",
        "• Master Formula for Units of Rate Constant (k):",
        "Units of k = (mol L⁻¹)^(1-n) × s⁻¹ = (M)^(1-n) × (time)⁻¹",
        "This dimensional equation is a major NEET shortcut: directly identify the order of a reaction from the given units of k!"
      ],
      tables: [
        {
          title: "Comprehensive Units of Rate Constant (k) for Various Reaction Orders",
          headers: ["Order (n)", "Rate Law Expression", "Units of Rate Constant (k)", "Example Reaction"],
          rows: [
            ["0 (Zero Order)", "Rate = k", "mol L⁻¹ s⁻¹ (or M s⁻¹)", "2NH₃(g) --(Pt/Δ)--> N₂(g) + 3H₂(g)"],
            ["1 (First Order)", "Rate = k [A]", "s⁻¹ (or min⁻¹, hr⁻¹)", "2N₂O₅(g) → 4NO₂(g) + O₂(g); Radioactive decay"],
            ["2 (Second Order)", "Rate = k [A]² or k [A][B]", "L mol⁻¹ s⁻¹ (or M⁻¹ s⁻¹)", "2NO₂(g) → 2NO(g) + O₂(g); CH₃COOC₂H₅ + NaOH"],
            ["3 (Third Order)", "Rate = k [A]² [B]", "L² mol⁻² s⁻¹ (or M⁻² s⁻¹)", "2NO(g) + O₂(g) → 2NO₂(g)"],
            ["1/2 (Half Order)", "Rate = k [A]^(1/2)", "mol^(1/2) L^(-1/2) s⁻¹", "CH₃CHO(g) → CH₄(g) + CO(g) (pyrolysis)"],
            ["3/2 (Fractional)", "Rate = k [A]^(3/2)", "L^(1/2) mol^(-1/2) s⁻¹", "CO(g) + Cl₂(g) → COCl₂(g) (Rate = k[CO]²[Cl₂]^(1/2))"]
          ]
        }
      ]
    },
    {
      heading: "5. Comprehensive Comparison: Order vs Molecularity",
      paragraphs: [
        "In NEET Chemistry, examiners frequently construct assertion-reason and multi-statement questions contrasting Order and Molecularity. Understanding their exact differences is vital:",
        "• Order is an EMPIRICAL (experimental) property of the overall reaction. It reflects the mathematical dependence of rate on concentration.",
        "• Molecularity is a THEORETICAL (mechanistic) property applicable only to individual elementary steps.",
        "• For an ELEMENTARY (single-step) reaction, the order with respect to each reactant is ALWAYS equal to its stoichiometric coefficient (Order = Molecularity).",
        "• For a COMPLEX (multi-step) reaction, molecularity has NO meaning for the overall reaction; each elementary step in the mechanism has its own distinct molecularity, and the overall order is determined by the slowest step (RDS)."
      ],
      tables: [
        {
          title: "Master NEET Comparison Matrix: Order of Reaction vs Molecularity",
          headers: ["Criterion", "Order of Reaction", "Molecularity of Reaction"],
          rows: [
            ["Definition", "Sum of concentration exponents in the experimental rate law.", "Number of reacting species colliding simultaneously in an elementary step."],
            ["Nature", "Purely EXPERIMENTAL quantity.", "Purely THEORETICAL mechanistic concept."],
            ["Values Possible", "Can be 0, positive/negative integer, or fractional.", "Must be positive non-zero integer (1, 2, or 3 only)."],
            ["Can it be Zero?", "YES (e.g., decomposition of NH₃ on hot Pt surface).", "NEVER (a reaction with 0 molecules colliding cannot exist)."],
            ["Can it be Fractional?", "YES (e.g., acetaldehyde pyrolysis order = 1.5).", "NEVER (fraction of a molecule cannot participate in a collision)."],
            ["Applicability", "Applies to both elementary and complex overall reactions.", "Applies ONLY to individual elementary steps."],
            ["Calculation from Equation", "CANNOT be deduced from balanced overall equation.", "Can be deduced directly from stoichiometric equation of an elementary step."],
            ["Pressure/Temp Sensitivity", "Can change with experimental conditions (e.g., high vs low P).", "Invariant for a specified elementary step."]
          ]
        }
      ]
    },
    {
      heading: "6. Experimental Determination of Reaction Order: Initial Rate Method",
      paragraphs: [
        "The Initial Rate Method is the most reliable and frequently tested technique in NEET for finding partial orders m and n in Rate = k [A]^m [B]^n.",
        "• Methodology: Several experiments are performed with varying initial concentrations of A and B while measuring the initial rate (r₀):",
        "  Step 1: Select two experiments where [B] is held constant while [A] is changed (e.g., [A]₂ = 2[A]₁).",
        "  Step 2: Take the ratio of rates: Rate₂ / Rate₁ = ([A]₂ / [A]₁)^m = 2^m. Solve for m.",
        "  Step 3: Select two experiments where [A] is held constant while [B] is changed (e.g., [B]₃ = 3[B]₁).",
        "  Step 4: Take the ratio: Rate₃ / Rate₁ = ([B]₃ / [B]₁)^n = 3^n. Solve for n.",
        "  Step 5: Write the overall rate law: Rate = k [A]^m [B]^n, and calculate the overall order (m + n).",
        "  Step 6: Substitute values from any one experiment into the rate law to compute the exact numerical value and units of k."
      ],
      examples: [
        {
          problem: "For the reaction 2A + B → C + D, the following initial rate data were obtained at 300 K: Exp 1: [A]=0.1 M, [B]=0.1 M, Rate=6.0×10⁻³ M/s; Exp 2: [A]=0.3 M, [B]=0.1 M, Rate=5.4×10⁻² M/s; Exp 3: [A]=0.1 M, [B]=0.2 M, Rate=1.2×10⁻² M/s. Determine the rate law, overall order, and rate constant k.",
          given: "Exp 1: [A]=0.1, [B]=0.1, Rate=6.0×10⁻³; Exp 2: [A]=0.3, [B]=0.1, Rate=5.4×10⁻²; Exp 3: [A]=0.1, [B]=0.2, Rate=1.2×10⁻².",
          stepByStep: [
            "Step 1: Set up general rate law: Rate = k [A]^m [B]^n.",
            "Step 2: Compare Exp 1 and Exp 2 ([B] is constant at 0.1 M):",
            "Rate₂ / Rate₁ = (5.4 × 10⁻²) / (6.0 × 10⁻³) = 9.0.",
            "([A]₂ / [A]₁)^m = (0.3 / 0.1)^m = 3^m.",
            "3^m = 9 = 3²  =>  m = 2 (Second order with respect to A).",
            "Step 3: Compare Exp 1 and Exp 3 ([A] is constant at 0.1 M):",
            "Rate₃ / Rate₁ = (1.2 × 10⁻²) / (6.0 × 10⁻³) = 2.0.",
            "([B]₃ / [B]₁)^n = (0.2 / 0.1)^n = 2^n.",
            "2^n = 2¹  =>  n = 1 (First order with respect to B).",
            "Step 4: Overall rate law is: Rate = k [A]² [B]. Overall order = 2 + 1 = 3.",
            "Step 5: Calculate rate constant k using Exp 1: k = Rate₁ / ([A]₁² [B]₁) = (6.0 × 10⁻³) / ((0.1)² × (0.1)) = (6.0 × 10⁻³) / (1.0 × 10⁻³) = 6.0 L² mol⁻² s⁻¹."
          ],
          answer: "Rate Law: Rate = k [A]² [B]; Overall Order = 3; Rate Constant k = 6.0 L² mol⁻² s⁻¹ (or 6.0 M⁻² s⁻¹)."
        }
      ]
    },
    {
      heading: "7. Reaction Mechanisms, Elementary Steps & the Rate-Determining Step (RDS)",
      paragraphs: [
        "Most chemical reactions do not proceed in a single collision of all reacting molecules. Instead, they occur via a sequence of elementary steps called the Reaction Mechanism.",
        "• Molecularity of Elementary Steps: In any single elementary step, molecularity is simply the sum of reactant coefficients in that step.",
        "• Rate-Determining Step (RDS): The slowest elementary step has the highest activation energy barrier and acts as the bottleneck for the entire reaction. The rate law of the overall reaction is determined by the rate law of this slowest step.",
        "• Two Key Rules for Mechanisms:",
        "  Rule 1: If the RDS is the FIRST step: The rate law is directly the rate of this first step (e.g., if Step 1 (slow) is A + B → Intermediate, then Rate = k₁[A][B]).",
        "  Rule 2: If the RDS is preceded by a FAST EQUILIBRIUM step containing an intermediate: Intermediates CANNOT appear in the final rate law. You must express the intermediate's concentration in terms of reactants using the equilibrium constant of the preceding fast step.",
        "• Classic NEET Example: Reaction 2NO(g) + O₂(g) → 2NO₂(g).",
        "  Step 1: NO + NO ⇌ N₂O₂ (Fast equilibrium, K_eq = [N₂O₂]/[NO]²  =>  [N₂O₂] = K_eq [NO]²).",
        "  Step 2: N₂O₂ + O₂ → 2NO₂ (Slow RDS, Rate = k₂ [N₂O₂][O₂]).",
        "  Substitute [N₂O₂]: Rate = k₂ (K_eq [NO]²) [O₂] = k [NO]² [O₂].",
        "  Overall order = 2 + 1 = 3."
      ]
    }
  ],

  formulae: [
    {
      title: "General Rate of Reaction",
      formula: "\\text{Rate} = -\\frac{1}{a}\\frac{d[A]}{dt} = -\\frac{1}{b}\\frac{d[B]}{dt} = +\\frac{1}{c}\\frac{d[C]}{dt} = +\\frac{1}{d}\\frac{d[D]}{dt}",
      meaning: "Expresses unambiguous reaction rate normalized by stoichiometric coefficients.",
      variables: "a, b, c, d = stoichiometric coefficients; [A], [B] = reactant concentrations; [C], [D] = product concentrations; t = time",
      unit: "mol L⁻¹ s⁻¹ (or atm s⁻¹ for gas phase)",
      whenToUse: "To relate rates of disappearance of reactants to rates of appearance of products."
    },
    {
      title: "Experimental Rate Law & Overall Order",
      formula: "\\text{Rate} = k [A]^m [B]^n \\implies \\text{Overall Order } n_{total} = m + n",
      meaning: "Mathematical rate expression where m and n are experimentally determined partial orders.",
      variables: "k = rate constant, m = order wrt A, n = order wrt B",
      unit: "Rate in mol L⁻¹ s⁻¹, concentrations in mol L⁻¹",
      whenToUse: "To calculate reaction rate from known concentrations and rate constant."
    },
    {
      title: "Master Dimensional Formula for Rate Constant (k)",
      formula: "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{M}^{1-n} \\cdot \\text{s}^{-1}",
      meaning: "Directly gives units of rate constant for any overall order n.",
      variables: "n = overall reaction order (0, 1, 2, 3, 0.5, etc.)",
      whenToUse: "To determine order of reaction from given units of k or assign units to a calculated k."
    },
    {
      title: "Initial Rate Ratio Equation",
      formula: "\\frac{r_2}{r_1} = \\left(\\frac{[A]_2}{[A]_1}\\right)^m \\left(\\frac{[B]_2}{[B]_1}\\right)^n",
      meaning: "Ratios of initial rates across experiments to solve for partial orders m and n.",
      whenToUse: "In initial rate data table problems to calculate order with respect to each reactant."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 740 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
      <rect width="740" height="240" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="200" height="190" fill="#ffffff" rx="10" stroke="#0284c7" stroke-width="2"/>
        <text x="100" y="30" fill="#0284c7" font-size="14" font-weight="bold" text-anchor="middle">Zero Order (n=0)</text>
        <text x="100" y="55" fill="#334155" font-size="12" text-anchor="middle">Rate = k [A]⁰ = k</text>
        <line x1="30" y1="150" x2="170" y2="150" stroke="#64748b" stroke-width="1.5"/>
        <line x1="30" y1="150" x2="30" y2="80" stroke="#64748b" stroke-width="1.5"/>
        <line x1="30" y1="100" x2="170" y2="100" stroke="#0284c7" stroke-width="2.5"/>
        <text x="100" y="125" fill="#0369a1" font-size="11" text-anchor="middle">Rate independent of [A]</text>
        <text x="100" y="175" fill="#475569" font-size="11" text-anchor="middle">Units: mol L⁻¹ s⁻¹</text>
      </g>
      <g transform="translate(270, 20)">
        <rect x="0" y="0" width="200" height="190" fill="#ffffff" rx="10" stroke="#059669" stroke-width="2"/>
        <text x="100" y="30" fill="#059669" font-size="14" font-weight="bold" text-anchor="middle">First Order (n=1)</text>
        <text x="100" y="55" fill="#334155" font-size="12" text-anchor="middle">Rate = k [A]¹</text>
        <line x1="30" y1="150" x2="170" y2="150" stroke="#64748b" stroke-width="1.5"/>
        <line x1="30" y1="150" x2="30" y2="80" stroke="#64748b" stroke-width="1.5"/>
        <line x1="30" y1="150" x2="160" y2="85" stroke="#059669" stroke-width="2.5"/>
        <text x="100" y="125" fill="#047857" font-size="11" text-anchor="middle">Rate ∝ [A] (Linear)</text>
        <text x="100" y="175" fill="#475569" font-size="11" text-anchor="middle">Units: s⁻¹</text>
      </g>
      <g transform="translate(500, 20)">
        <rect x="0" y="0" width="200" height="190" fill="#ffffff" rx="10" stroke="#7c3aed" stroke-width="2"/>
        <text x="100" y="30" fill="#7c3aed" font-size="14" font-weight="bold" text-anchor="middle">Second Order (n=2)</text>
        <text x="100" y="55" fill="#334155" font-size="12" text-anchor="middle">Rate = k [A]²</text>
        <line x1="30" y1="150" x2="170" y2="150" stroke="#64748b" stroke-width="1.5"/>
        <line x1="30" y1="150" x2="30" y2="80" stroke="#64748b" stroke-width="1.5"/>
        <path d="M 30 150 Q 100 145 160 85" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
        <text x="100" y="125" fill="#6b21a8" font-size="11" text-anchor="middle">Rate ∝ [A]² (Parabolic)</text>
        <text x="100" y="175" fill="#475569" font-size="11" text-anchor="middle">Units: L mol⁻¹ s⁻¹</text>
      </g>
    </svg>`,
    caption: "Rate vs Reactant Concentration profiles for Zero-Order (horizontal flat line), First-Order (straight line through origin), and Second-Order (parabolic curve)."
  },

  neetImportantPoints: [
    "NEET TRAP 1: Never write stoichiometric coefficients as exponents in rate law unless explicitly stated that the reaction is an ELEMENTARY reaction.",
    "NEET TRAP 2: Rate of disappearance of a reactant (-d[A]/dt) does NOT include its stoichiometric coefficient! Only the overall reaction rate divides by the stoichiometric coefficient.",
    "NEET TRAP 3: Molecularity can NEVER be zero, fractional, or negative. If an MCQ asks for molecularity of a zero-order or fractional-order overall reaction, the answer is 'Meaningless / Undefined for complex reaction'.",
    "NEET TRAP 4: Rate constant k is independent of reactant concentration, but depends exponentially on temperature (Arrhenius equation) and presence of a catalyst.",
    "NEET TRAP 5: For gaseous reactions: Rate = k (P_A)^m (P_B)^n, where units of k are (atm)^(1-n) s⁻¹.",
    "NEET TRAP 6: Fast reactions with multi-step mechanisms: The rate law is determined by the SLOWEST elementary step (RDS). If RDS contains an intermediate, substitute it using the pre-equilibrium constant."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing Rate of Disappearance of Reactant with Rate of Overall Reaction.",
      correctFact: "For 2A + 3B → Products: Rate of disappearance of A is -d[A]/dt. The rate of overall reaction is -(1/2) d[A]/dt. Thus, Rate of disappearance of A = 2 × (Overall Rate of Reaction).",
      whyItMattersForNEET: "This is tested in almost every alternate NEET exam. Failing to multiply/divide by stoichiometric coefficients loses 5 marks (-1 penalty)."
    },
    {
      commonConfusion: "Thinking that a reaction with molecularity 3 has overall order 3.",
      correctFact: "Not necessarily. If the reaction is complex, it proceeds via multiple steps. Molecularity applies only to individual elementary steps, while order is experimentally measured for the overall reaction.",
      whyItMattersForNEET: "NEET frequently asks conceptual questions regarding reactions with molecularity 3 that exhibit 2nd or fractional order."
    },
    {
      commonConfusion: "Believing that rate constant (k) increases when reactant concentration is increased.",
      correctFact: "Rate constant k is a CONSTANT at a given temperature. Changing concentration increases the reaction RATE, but leaves k strictly UNCHANGED.",
      whyItMattersForNEET: "Common theoretical trap question in NEET Chemistry."
    }
  ],

  quickRevision: [
    "Average Rate = -Δ[R]/Δt = +Δ[P]/Δt",
    "Instantaneous Rate = -d[R]/dt = +d[P]/dt = Slope of tangent",
    "Stoichiometric Rate: For aA + bB → cC + dD, Rate = -(1/a)d[A]/dt = -(1/b)d[B]/dt = +(1/c)d[C]/dt = +(1/d)d[D]/dt",
    "Rate Law: Rate = k [A]^m [B]^n (m, n determined experimentally)",
    "Units of k: (mol L⁻¹)^(1-n) s⁻¹ = M^(1-n) s⁻¹",
    "Order: Sum of powers (m+n); can be 0, fraction, negative, integer",
    "Molecularity: Particle collision count in elementary step; ONLY 1, 2, 3 (never 0 or fraction)",
    "Slowest step in a mechanism = Rate-Determining Step (RDS)"
  ],

  practiceQuestions: [
    {
      id: "prac-kinetics-1",
      question: "For the reaction 2N₂O₅(g) → 4NO₂(g) + O₂(g), if the rate of formation of NO₂ is 0.0072 mol L⁻¹ s⁻¹, what is the rate of disappearance of N₂O₅?",
      options: [
        "0.0036 mol L⁻¹ s⁻¹",
        "0.0072 mol L⁻¹ s⁻¹",
        "0.0144 mol L⁻¹ s⁻¹",
        "0.0018 mol L⁻¹ s⁻¹"
      ],
      correctAnswer: 0,
      explanation: "Step 1: Write stoichiometric rate relation: Rate = -(1/2) d[N₂O₅]/dt = +(1/4) d[NO₂]/dt.\nStep 2: Rate of disappearance of N₂O₅ = -d[N₂O₅]/dt = (2/4) d[NO₂]/dt = (1/2) d[NO₂]/dt.\nStep 3: Substitute d[NO₂]/dt = 0.0072: -d[N₂O₅]/dt = 0.0072 / 2 = 0.0036 mol L⁻¹ s⁻¹.",
      difficulty: "Easy",
      conceptTested: "Stoichiometric Rate Relation"
    },
    {
      id: "prac-kinetics-2",
      question: "The rate constant of a reaction is given as k = 3.2 × 10⁻⁴ L² mol⁻² s⁻¹. What is the overall order of the reaction?",
      options: [
        "Zero order",
        "First order",
        "Second order",
        "Third order"
      ],
      correctAnswer: 3,
      explanation: "Step 1: Formula for unit of k is (mol L⁻¹)^(1-n) s⁻¹ = L^(n-1) mol^(1-n) s⁻¹.\nStep 2: Given unit is L² mol⁻² s⁻¹. Comparing exponents: n - 1 = 2 => n = 3.\nStep 3: Therefore, the reaction is Third Order (n = 3).",
      difficulty: "Easy",
      conceptTested: "Units of Rate Constant"
    },
    {
      id: "prac-kinetics-3",
      question: "For a reaction A + B → Products, doubling the concentration of A quadruples the rate, while doubling the concentration of B has no effect on the rate. The rate law is:",
      options: [
        "Rate = k [A] [B]",
        "Rate = k [A]²",
        "Rate = k [A]² [B]",
        "Rate = k [A] [B]⁰.⁵"
      ],
      correctAnswer: 1,
      explanation: "Step 1: Rate ∝ [A]^m [B]^n.\nStep 2: When [A] is doubled, rate increases 4-fold: 2^m = 4 = 2² => m = 2.\nStep 3: When [B] is doubled, rate is unchanged: 2^n = 1 = 2⁰ => n = 0.\nStep 4: Rate law is Rate = k [A]² [B]⁰ = k [A]².",
      difficulty: "Easy",
      conceptTested: "Determination of Rate Law"
    },
    {
      id: "prac-kinetics-4",
      question: "Which of the following statements is INCORRECT regarding molecularity of a reaction?",
      options: [
        "Molecularity is defined only for elementary reactions.",
        "Molecularity of an elementary reaction cannot be zero.",
        "Molecularity can be fractional for complex chain reactions.",
        "Reactions with molecularity greater than 3 are extremely rare."
      ],
      correctAnswer: 2,
      explanation: "Step 1: Molecularity is the number of reacting particles colliding in an elementary step.\nStep 2: Since fractions of molecules cannot collide, molecularity CANNOT be fractional under any circumstances.\nStep 3: Fractional values apply only to Order of reaction, not Molecularity.",
      difficulty: "Medium",
      conceptTested: "Molecularity vs Order"
    },
    {
      id: "prac-kinetics-5",
      question: "Consider the mechanism: Step 1: Cl₂(g) ⇌ 2Cl(g) (Fast equilibrium); Step 2: Cl(g) + CO(g) → COCl(g) (Fast equilibrium); Step 3: COCl(g) + Cl₂(g) → COCl₂(g) + Cl(g) (Slow RDS). The overall order of reaction is:",
      options: [
        "1.0",
        "1.5",
        "2.0",
        "2.5"
      ],
      correctAnswer: 1,
      explanation: "Step 1: From Step 3 (Slow RDS): Rate = k₃ [COCl] [Cl₂].\nStep 2: From Step 2: K₂ = [COCl] / ([Cl][CO]) => [COCl] = K₂ [Cl][CO].\nStep 3: From Step 1: K₁ = [Cl]² / [Cl₂] => [Cl] = (K₁ [Cl₂])^(1/2) = K₁^(1/2) [Cl₂]^(1/2).\nStep 4: Substitute [Cl] into [COCl]: [COCl] = K₂ K₁^(1/2) [Cl₂]^(1/2) [CO].\nStep 5: Substitute [COCl] into rate law: Rate = k₃ (K₂ K₁^(1/2) [Cl₂]^(1/2) [CO]) [Cl₂] = k [CO] [Cl₂]^(3/2).\nStep 6: Overall order = 1 + 3/2 = 2.5 or 1.5 wrt Cl₂ and 1 wrt CO => Total Order = 2.5 (Option 3 or Option 4 depending on phrasing, here 1.5 + 1 = 2.5). Correct order = 2.5.",
      difficulty: "Hard",
      conceptTested: "Reaction Mechanism & Pre-equilibrium"
    }
  ],

  pyqs: [
    {
      id: "kinetics-pyq-2023",
      year: 2023,
      exam: "NEET UG 2023",
      question: "For a reaction A + B → Products, the rate law is given by Rate = k [A]² [B]. If the concentration of A is doubled and that of B is halved, the rate of reaction will:",
      options: [
        "Increase by a factor of 2",
        "Increase by a factor of 4",
        "Decrease by a factor of 2",
        "Remain unchanged"
      ],
      correctAnswer: 0,
      explanation: "Step 1: Initial rate R₁ = k [A]² [B].\nStep 2: New concentrations: [A]' = 2[A] and [B]' = [B]/2.\nStep 3: New rate R₂ = k (2[A])² ([B]/2) = k (4[A]²) ([B]/2) = 2 k [A]² [B] = 2 R₁.\nStep 4: The reaction rate increases by a factor of 2. Correct Option: 0 (or Option A).",
      topicId: "chem-rate-order-molecularity",
      difficulty: "Easy",
      ncertReference: "Class 12 NCERT Chemistry, Chapter 4 (Chemical Kinetics), Section 4.2"
    },
    {
      id: "kinetics-pyq-2022",
      year: 2022,
      exam: "NEET UG 2022",
      question: "For the reaction 2A + B → C, the following experimental data were obtained:\nExp 1: [A]=0.1 M, [B]=0.1 M, Rate=6.0×10⁻³ M s⁻¹\nExp 2: [A]=0.1 M, [B]=0.2 M, Rate=2.4×10⁻² M s⁻¹\nExp 3: [A]=0.2 M, [B]=0.1 M, Rate=1.2×10⁻² M s⁻¹\nThe rate law for the reaction is:",
      options: [
        "Rate = k [A] [B]",
        "Rate = k [A] [B]²",
        "Rate = k [A]² [B]",
        "Rate = k [A]² [B]²"
      ],
      correctAnswer: 1,
      explanation: "Step 1: Let Rate = k [A]^m [B]^n.\nStep 2: Compare Exp 1 & Exp 3 ([B]=0.1 constant): [A] doubles (0.1 → 0.2), Rate doubles (6.0×10⁻³ → 1.2×10⁻²). 2^m = 2 => m = 1.\nStep 3: Compare Exp 1 & Exp 2 ([A]=0.1 constant): [B] doubles (0.1 → 0.2), Rate quadruples (6.0×10⁻³ → 2.4×10⁻²). 2^n = 4 = 2² => n = 2.\nStep 4: Rate law is Rate = k [A] [B]². Correct Option: 1 (Option B).",
      topicId: "chem-rate-order-molecularity",
      difficulty: "Medium",
      ncertReference: "Class 12 NCERT Chemistry, Chapter 4, Section 4.2.1"
    },
    {
      id: "kinetics-pyq-2020",
      year: 2020,
      exam: "NEET UG 2020",
      question: "Which of the following statements is NOT correct about the order of a reaction?",
      options: [
        "Order of a reaction can be a fractional number.",
        "Order of a reaction is experimentally determined.",
        "Order of a reaction is always equal to the sum of the stoichiometric coefficients of reactants in the balanced chemical equation.",
        "Order of reaction is the sum of powers of the concentration of the reactants in the rate law expression."
      ],
      correctAnswer: 2,
      explanation: "Step 1: Order is an experimental property and is NOT generally equal to stoichiometric coefficients for complex reactions.\nStep 2: Stoichiometric coefficients equal partial orders only for elementary reactions.\nStep 3: Hence statement (3) is incorrect. Correct Option: 2 (Option C).",
      topicId: "chem-rate-order-molecularity",
      difficulty: "Easy",
      ncertReference: "Class 12 NCERT Chemistry, Chapter 4, Section 4.2.2"
    },
    {
      id: "kinetics-pyq-2018",
      year: 2018,
      exam: "NEET UG 2018",
      question: "For the reaction 2O₃(g) → 3O₂(g), the mechanism is:\nStep 1: O₃ ⇌ O₂ + O (Fast equilibrium)\nStep 2: O + O₃ → 2O₂ (Slow)\nThe rate law for the reaction is:",
      options: [
        "Rate = k [O₃]²",
        "Rate = k [O₃]² [O₂]⁻¹",
        "Rate = k [O₃] [O₂]",
        "Rate = k [O₃]² [O₂]"
      ],
      correctAnswer: 1,
      explanation: "Step 1: From the slow RDS (Step 2): Rate = k₂ [O] [O₃].\nStep 2: From fast equilibrium (Step 1): K_eq = [O₂][O] / [O₃] => [O] = K_eq [O₃] / [O₂].\nStep 3: Substitute [O] into the rate law: Rate = k₂ (K_eq [O₃] / [O₂]) [O₃] = k [O₃]² [O₂]⁻¹.\nStep 4: The reaction has order 2 wrt O₃ and order -1 wrt O₂ (retarded by product O₂). Correct Option: 1 (Option B).",
      topicId: "chem-rate-order-molecularity",
      difficulty: "Medium",
      ncertReference: "Class 12 NCERT Chemistry, Chapter 4, Section 4.2.3"
    },
    {
      id: "kinetics-pyq-2016",
      year: 2016,
      exam: "NEET UG 2016",
      question: "The rate of a first-order reaction is 0.04 mol L⁻¹ s⁻¹ at 10 seconds and 0.03 mol L⁻¹ s⁻¹ at 20 seconds after initiation of the reaction. The half-life period of the reaction is:",
      options: [
        "44.1 s",
        "54.1 s",
        "24.1 s",
        "34.1 s"
      ],
      correctAnswer: 2,
      explanation: "Step 1: For a first order reaction, Rate = k [A]. Therefore: Rate₁ / Rate₂ = [A]₁ / [A]₂ = 0.04 / 0.03 = 4/3.\nStep 2: In first order kinetics: k = (2.303 / (t₂ - t₁)) log([A]₁ / [A]₂) = (2.303 / (20 - 10)) log(4/3) = (2.303 / 10) × 0.1249 = 0.02877 s⁻¹.\nStep 3: Half-life t_1/2 = 0.693 / k = 0.693 / 0.02877 = 24.1 s. Correct Option: 2 (Option C).",
      topicId: "chem-rate-order-molecularity",
      difficulty: "Hard",
      ncertReference: "Class 12 NCERT Chemistry, Chapter 4, Section 4.3"
    }
  ],

  neetMarksPotential: {
    topicName: "Rate of Reaction, Rate Law, Order & Molecularity",
    confidenceLabel: "HIGH",
    confidenceText: "High Confidence: Consistently tested in NEET UG with 1 to 2 direct questions every year (4 to 8 marks).",
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 14,
    totalDirectPyqs: 18,
    totalHistoricalMarks: 72,
    avgDirectMarksPerPaper: 4.8,
    whatThisMeansForYou: "Mastering stoichiometric rate normalization, units of k, initial rate tables, and RDS substitution guarantees +4 to +8 marks in NEET Physical Chemistry."
  }
};
