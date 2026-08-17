import { DetailedTopicContent } from '../../types/neet';

export const chemZeroFirstOrderDetails: DetailedTopicContent = {
  topicId: "chem-zero-first-order",
  topicName: "Integrated Rate Equations: Zero & First Order Reactions",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Physical Chemistry (Class 12)",
  chapter: "Chemical Kinetics",

  whatIsThisTopic: "Integrated rate equations are mathematical formulas derived by integrating the differential rate law expressions. They directly relate reactant concentration to elapsed time, allowing exact calculation of rate constants, half-lives, remaining concentrations, and the time required for any fractional or percentage completion. This masterclass covers complete zero-order and first-order derivations, graphical analysis (slopes and intercepts), half-life behavior, high-yield shortcut formulas ((1/2)^n decay rules, t75%, t90%, t99%, t99.9%), gaseous pressure kinetics, and pseudo-first-order reactions.",

  basicIdea: [
    "1. Purpose of Integration: Differential rate laws (-d[A]/dt = k[A]^n) give instantaneous rates at a specific moment. Integrating them gives explicit algebraic relations between [A]_t (concentration at time t) and t (time elapsed).",
    "2. Zero-Order Kinetics: Rate is completely independent of reactant concentration: Rate = k. The integrated equation is [A]_t = [A]_0 - kt. The concentration decreases linearly with time. Half-life is t_1/2 = [A]_0 / (2k), which is DIRECTLY PROPORTIONAL to the initial concentration [A]_0.",
    "3. First-Order Kinetics: Rate is directly proportional to reactant concentration: Rate = k [A]. The integrated equation is ln([A]_0 / [A]_t) = kt, or k = (2.303 / t) log₁₀([A]_0 / [A]_t). Concentration decays exponentially: [A]_t = [A]_0 e^(-kt).",
    "4. First-Order Half-Life Independence: For a first-order reaction, t_1/2 = ln 2 / k = 0.693 / k. The half-life is completely INDEPENDENT of initial concentration [A]_0—a unique hallmark of first-order kinetics.",
    "5. Decay Shortcuts: After n half-lives, the fraction of reactant remaining is (1/2)^n, and the percentage remaining is 100 × (1/2)^n. Standard time relations: t_75% = 2 × t_1/2; t_87.5% = 3 × t_1/2; t_90% = 3.32 × t_1/2; t_99% = 2 × t_90% = 6.64 × t_1/2; t_99.9% = 10 × t_1/2.",
    "6. Pseudo-First-Order Reactions: Higher-order reactions made to behave as first-order when one reactant is present in large excess (e.g., water in ester hydrolysis: [H₂O] ≈ constant, so Rate = k [Ester])."
  ],

  importantTerms: [
    {
      term: "Zero-Order Reaction",
      symbol: "Rate = k [A]⁰ = k",
      definition: "A reaction whose rate is completely independent of the concentration of reactants. Rate remains constant throughout the entire course of the reaction until reactants are fully consumed.",
      unit: "k in mol L⁻¹ s⁻¹",
      neetNote: "Occurs under saturated surface conditions: Decomposition of NH₃ on hot Pt surface at high pressure; decomposition of HI on gold; photochemical H₂ + Cl₂ reaction over water."
    },
    {
      term: "First-Order Reaction",
      symbol: "Rate = k [A]¹",
      definition: "A reaction whose rate is directly proportional to the first power of the concentration of the reactant.",
      unit: "k in s⁻¹ (or min⁻¹, hr⁻¹)",
      neetNote: "All natural and artificial radioactive decays (alpha/beta/gamma emission), decomposition of N₂O₅, SO₂Cl₂, and H₂O₂ follow first-order kinetics."
    },
    {
      term: "Half-Life of a Reaction (t_1/2)",
      symbol: "t_1/2 (or t₀.₅)",
      definition: "The time required for the concentration of a reactant to be reduced to exactly half of its initial value: [A]_t = [A]₀ / 2.",
      neetNote: "For order 0: t_1/2 ∝ [A]₀; For order 1: t_1/2 is independent of [A]₀; For general order n: t_1/2 ∝ 1 / [A]₀^(n-1)."
    },
    {
      term: "Time of Completion (t_100%)",
      symbol: "t_100% (or t_complete)",
      definition: "The time required for 100% of the reactant to be consumed ([A]_t = 0).",
      neetNote: "For zero-order: t_100% = [A]₀ / k = 2 × t_1/2 (finite time). For first-order: t_100% = ∞ (first-order reactions theoretically never reach 100% completion)."
    },
    {
      term: "Pseudo-First-Order Reaction",
      definition: "A bimolecular (or higher molecularity) reaction that experimentally follows first-order kinetics because one reactant is present in such overwhelming excess that its concentration remains practically constant.",
      neetNote: "Classic NCERT examples: Acid-catalyzed hydrolysis of ethyl acetate (CH₃COOC₂H₅ + H₂O → CH₃COOH + C₂H₅OH) and inversion of cane sugar (sucrose + H₂O → glucose + fructose)."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Zero-Order Reactions: Derivation, Integrated Equation & Properties",
      paragraphs: [
        "In a zero-order reaction, the rate of reaction is proportional to the zero power of the concentration of reactants: R → P.",
        "• Differential Rate Law: Rate = -d[R]/dt = k [R]⁰ = k.",
        "• Integration: Rearranging gives d[R] = -k dt. Integrating both sides from t = 0 (where [R] = [R]₀) to time t (where [R] = [R]_t):",
        "∫_{[R]₀}^{[R]_t} d[R] = -k ∫₀^t dt  =>  [R]_t - [R]₀ = -kt.",
        "• Master Zero-Order Equation: [R]_t = [R]₀ - kt, or k = ([R]₀ - [R]_t) / t.",
        "• Amount of Product Formed (x): If x is the concentration of R reacted after time t, then [R]_t = [R]₀ - x. Substituting gives: [R]₀ - x = [R]₀ - kt  =>  x = kt. Product concentration increases linearly with time!",
        "• Half-Life Derivation (t_1/2): At t = t_1/2, [R]_t = [R]₀ / 2. Substituting into the equation: [R]₀ / 2 = [R]₀ - k t_1/2  =>  k t_1/2 = [R]₀ / 2.",
        "t_1/2 = [R]₀ / (2k).",
        "• Total Time for Completion (t_100%): At complete consumption, [R]_t = 0. Therefore: 0 = [R]₀ - k t_100%  =>  t_100% = [R]₀ / k = 2 × t_1/2.",
        "• Microscopic Cause of Zero-Order Kinetics: Heterogeneous metal catalysis. For example, 2NH₃(g) --(Pt/1130 K)--> N₂(g) + 3H₂(g). At high ammonia pressure, the entire metal surface is completely saturated with adsorbed NH₃ molecules. Adding more NH₃ gas cannot increase the number of adsorbed molecules on the surface, so rate becomes constant and independent of [NH₃]."
      ],
      tables: [
        {
          title: "Complete Mathematical Summary of Zero-Order Kinetics",
          headers: ["Parameter", "Zero-Order Formula", "NEET Significance"],
          rows: [
            ["Differential Rate", "-d[R]/dt = k", "Rate is constant over time"],
            ["Integrated Rate Law", "[R]_t = [R]₀ - kt", "Linear decline of reactant concentration"],
            ["Product Concentration", "[P]_t = kt", "Linear growth of product concentration"],
            ["Half-Life (t_1/2)", "t_1/2 = [R]₀ / (2k)", "Directly proportional to initial concentration [R]₀"],
            ["Completion Time (t_100%)", "t_100% = [R]₀ / k = 2 × t_1/2", "Reaction reaches 100% completion in finite time"],
            ["Units of k", "mol L⁻¹ s⁻¹ (or M s⁻¹)", "Same units as rate of reaction"]
          ]
        }
      ]
    },
    {
      heading: "2. First-Order Reactions: Derivation, Integrated Rate Law & Exponential Decay",
      paragraphs: [
        "In a first-order reaction, the rate is directly proportional to the first power of the reactant concentration: R → P.",
        "• Differential Rate Law: Rate = -d[R]/dt = k [R].",
        "• Integration: Rearranging gives d[R]/[R] = -k dt. Integrating both sides from t = 0 ([R] = [R]₀) to time t ([R] = [R]_t):",
        "∫_{[R]₀}^{[R]_t} (d[R]/[R]) = -k ∫₀^t dt  =>  ln([R]_t) - ln([R]₀) = -kt.",
        "• Logarithmic & Exponential Forms:",
        "  1. Natural log form: ln([R]₀ / [R]_t) = kt  =>  ln[R]_t = ln[R]₀ - kt.",
        "  2. Exponential decay form: [R]_t = [R]₀ e^(-kt).",
        "  3. Base-10 log form (Standard NCERT Formula):",
        "     k = (2.303 / t) log₁₀([R]₀ / [R]_t)",
        "• If 'a' is the initial concentration [R]₀ and 'x' is the amount reacted at time t (so [R]_t = a - x):",
        "  k = (2.303 / t) log₁₀(a / (a - x)).",
        "• Half-Life Derivation (t_1/2): At t = t_1/2, [R]_t = [R]₀ / 2 (or x = a/2). Substituting:",
        "  k = (2.303 / t_1/2) log₁₀([R]₀ / ([R]₀/2)) = (2.303 / t_1/2) log₁₀(2) = (2.303 × 0.30103) / t_1/2 = 0.693 / t_1/2.",
        "  t_1/2 = 0.693 / k = ln 2 / k.",
        "• Independence of Initial Concentration: Notice that [R]₀ does NOT appear in the half-life expression! Whether initial concentration is 0.001 M, 1 M, or 100 M, the time required to reduce it by 50% is ALWAYS the same. This is the single most tested property in NEET kinetics."
      ]
    },
    {
      heading: "3. Master Comparison: Zero-Order vs First-Order Kinetics",
      paragraphs: [
        "Direct visual and quantitative comparison of the two primary reaction orders tested in NEET:"
      ],
      tables: [
        {
          title: "Comprehensive NEET Comparison: Zero-Order vs First-Order Kinetics",
          headers: ["Property / Feature", "Zero-Order Reaction", "First-Order Reaction"],
          rows: [
            ["Rate Law", "Rate = k [A]⁰ = k", "Rate = k [A]¹"],
            ["Integrated Equation", "[A]_t = [A]₀ - kt", "k = (2.303/t) log₁₀([A]₀/[A]_t)"],
            ["Concentration vs Time", "Linear decrease: [A]_t = [A]₀ - kt", "Exponential decay: [A]_t = [A]₀ e^(-kt)"],
            ["Half-Life Formula", "t_1/2 = [A]₀ / (2k)", "t_1/2 = 0.693 / k"],
            ["Dependence of t_1/2 on [A]₀", "t_1/2 ∝ [A]₀ (Doubling [A]₀ doubles t_1/2)", "t_1/2 is INDEPENDENT of [A]₀"],
            ["Time for 100% Completion", "t_100% = [A]₀ / k = 2 × t_1/2", "t_100% = ∞ (Never finishes completely)"],
            ["Ratio of t_75% to t_50%", "t_75% / t_50% = 1.5", "t_75% / t_50% = 2.0"],
            ["Units of Rate Constant (k)", "mol L⁻¹ s⁻¹ (or M s⁻¹)", "s⁻¹ (or min⁻¹, hr⁻¹ time⁻¹)"],
            ["Plot of [A] vs t", "Straight line, Slope = -k, Intercept = [A]₀", "Curved exponential drop"],
            ["Plot of ln[A] vs t", "Curved line", "Straight line, Slope = -k, Intercept = ln[A]₀"],
            ["Plot of log[A] vs t", "Curved line", "Straight line, Slope = -k/2.303, Intercept = log[A]₀"],
            ["Plot of Rate vs [A]", "Horizontal line (Slope = 0)", "Straight line through origin (Slope = k)"],
            ["Plot of t_1/2 vs [A]₀", "Straight line through origin (Slope = 1/2k)", "Horizontal flat line (Slope = 0)"]
          ]
        }
      ]
    },
    {
      heading: "4. First-Order Decay Shortcuts: Fraction Remaining & Time Relations",
      paragraphs: [
        "In first-order kinetics, successive equal time intervals (each equal to t_1/2) reduce the reactant concentration by successive factors of 1/2. This geometric progression creates extremely powerful NEET calculation shortcuts:",
        "• Remaining Concentration after n Half-Lives: [A]_n = [A]₀ × (1/2)^n, where n = total time / t_1/2 = t / t_1/2.",
        "• Percentage of Reactant Remaining: % Remaining = 100 × (1/2)^n.",
        "• Percentage of Reactant Reacted / Completed: % Reacted = 100 × [1 - (1/2)^n].",
        "• High-Yield Milestone Breakdown Table:",
        "  - After 1 half-life (t = 1 t_1/2): 50% reacted, 50% remaining ([A] = [A]₀/2).",
        "  - After 2 half-lives (t = 2 t_1/2): 75% reacted, 25% remaining ([A] = [A]₀/4).  =>  t_75% = 2 × t_1/2.",
        "  - After 3 half-lives (t = 3 t_1/2): 87.5% reacted, 12.5% remaining ([A] = [A]₀/8).  =>  t_87.5% = 3 × t_1/2.",
        "  - After 4 half-lives (t = 4 t_1/2): 93.75% reacted, 6.25% remaining ([A] = [A]₀/16).  =>  t_93.75% = 4 × t_1/2.",
        "  - After 5 half-lives (t = 5 t_1/2): 96.875% reacted, 3.125% remaining ([A] = [A]₀/32).",
        "  - After 6.64 half-lives: 99% reacted, 1% remaining ([A] = [A]₀/100).  =>  t_99% = 2 × t_90% = 6.64 × t_1/2.",
        "  - After 10 half-lives: 99.9% reacted, 0.1% remaining ([A] = [A]₀/1000).  =>  t_99.9% = 10 × t_1/2 = 3 × t_90%."
      ],
      tables: [
        {
          title: "Master NEET Shortcut Formula Matrix for First-Order Reactions",
          headers: ["Percentage Completion", "Formula in terms of k", "Relation to t_1/2", "Exact Ratio"],
          rows: [
            ["50% (t_50% / t_1/2)", "t = (2.303/k) log(100/50) = 0.693/k", "1.0 × t_1/2", "t_50% = t_1/2"],
            ["75% (t_75%)", "t = (2.303/k) log(100/25) = (2.303/k)(0.602) = 1.386/k", "2.0 × t_1/2", "t_75% = 2 × t_50%"],
            ["87.5% (t_87.5%)", "t = (2.303/k) log(100/12.5) = (2.303/k)(0.903) = 2.079/k", "3.0 × t_1/2", "t_87.5% = 3 × t_50%"],
            ["90% (t_90%)", "t = (2.303/k) log(100/10) = 2.303/k", "3.32 × t_1/2", "t_90% = 3.32 × t_50%"],
            ["99% (t_99%)", "t = (2.303/k) log(100/1) = 4.606/k", "6.64 × t_1/2", "t_99% = 2 × t_90%"],
            ["99.9% (t_99.9%)", "t = (2.303/k) log(100/0.1) = 6.909/k", "10.0 × t_1/2", "t_99.9% = 10 × t_50% = 3 × t_90%"]
          ]
        }
      ]
    },
    {
      heading: "5. First-Order Gaseous Phase Reactions (Pressure Kinetics)",
      paragraphs: [
        "In gaseous phase reactions, measuring concentrations directly is difficult. Instead, we monitor the total pressure (P_total) of the closed reaction vessel at various times t.",
        "• Consider a typical gaseous decomposition: A(g) → B(g) + C(g).",
        "  At t = 0: Pressure of A = P_i (initial pressure), Pressure of B = 0, Pressure of C = 0. Total Initial Pressure = P_i.",
        "  At time t: Let pressure of A decrease by 'p'. Pressure of A = P_i - p, Pressure of B = p, Pressure of C = p.",
        "  Total Pressure at time t (P_t) = (P_i - p) + p + p = P_i + p  =>  p = P_t - P_i.",
        "  Therefore, the remaining partial pressure of reactant A at time t is: P_A = P_i - p = P_i - (P_t - P_i) = 2P_i - P_t.",
        "• Rate Constant Equation for Gaseous Decomposition:",
        "  k = (2.303 / t) log₁₀(P_i / (2P_i - P_t)).",
        "• For the general reaction A(g) → n B(g): Total pressure P_t = P_i - p + np = P_i + (n - 1)p  =>  p = (P_t - P_i) / (n - 1).",
        "  k = (2.303 / t) log₁₀(P_i / [P_i - (P_t - P_i)/(n - 1)])."
      ]
    },
    {
      heading: "6. Pseudo-First-Order Reactions: Principles & NCERT Case Studies",
      paragraphs: [
        "A reaction having a molecularity of two or more, but experimentally obeying first-order kinetics because all reactants except one are present in large excess, is called a Pseudo-First-Order Reaction.",
        "• Case Study 1: Acid Hydrolysis of Ethyl Acetate:",
        "  CH₃COOC₂H₅ + H₂O --(H⁺)--> CH₃COOH + C₂H₅OH.",
        "  Initial: 0.01 mol of ester in 10 mol of H₂O (55.5 M).",
        "  At completion: 0.01 mol ester consumed, leaving 9.99 mol of H₂O. The change in [H₂O] is completely negligible (~0.1%).",
        "  Differential Rate Law: Rate = k' [CH₃COOC₂H₅] [H₂O]. Since [H₂O] remains constant, we define a new pseudo-first-order rate constant: k = k' [H₂O].",
        "  Final Rate Law: Rate = k [CH₃COOC₂H₅], which is First-Order overall!",
        "• Case Study 2: Inversion of Cane Sugar (Sucrose):",
        "  C₁₂H₂₂O₁₁ + H₂O --(H⁺)--> C₆H₁₂O₆ (D-glucose) + C₆H₁₂O₆ (D-fructose).",
        "  Sucrose is dextrorotatory (+66.5°), but the hydrolyzed mixture is levorotatory (-39.7° for equimolar mixture because fructose has specific rotation -92.4° and glucose +52.7°).",
        "  The reaction is monitored polarimetrically: k = (2.303 / t) log₁₀((r₀ - r_∞) / (r_t - r_∞)), where r₀, r_t, and r_∞ are optical rotations at times 0, t, and infinity."
      ]
    }
  ],

  formulae: [
    {
      title: "Zero-Order Integrated Rate Equation",
      formula: "[A]_t = [A]_0 - kt \\implies k = \\frac{[A]_0 - [A]_t}{t}",
      meaning: "Directly calculates remaining concentration or rate constant for zero-order reactions.",
      variables: "[A]_0 = initial concentration (M), [A]_t = concentration at time t (M), k = rate constant (M s⁻¹), t = time (s)",
      unit: "k in mol L⁻¹ s⁻¹",
      whenToUse: "When rate is independent of concentration or reaction is zero order."
    },
    {
      title: "Zero-Order Half-Life & Completion Time",
      formula: "t_{1/2} = \\frac{[A]_0}{2k} \\quad \\text{and} \\quad t_{100\\%} = \\frac{[A]_0}{k} = 2 \\times t_{1/2}",
      meaning: "Calculates half-life and 100% completion time for zero-order reactions.",
      whenToUse: "To relate zero-order half-life directly to initial reactant concentration."
    },
    {
      title: "First-Order Integrated Rate Equation (Base-10 Log)",
      formula: "k = \\frac{2.303}{t} \\log_{10}\\left(\\frac{[A]_0}{[A]_t}\\right) = \\frac{2.303}{t} \\log_{10}\\left(\\frac{a}{a-x}\\right)",
      meaning: "Standard formula for calculating rate constant, time, or remaining concentration in first-order kinetics.",
      variables: "a = [A]_0 = initial amount, (a-x) = [A]_t = amount remaining at time t",
      unit: "k in s⁻¹ (or min⁻¹, hr⁻¹)",
      whenToUse: "In all first-order kinetics numerical calculations."
    },
    {
      title: "First-Order Half-Life Formula",
      formula: "t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}",
      meaning: "Direct relation between first-order rate constant and half-life (independent of [A]_0).",
      whenToUse: "To convert back and forth between k and t_1/2 for first-order and radioactive decay processes."
    },
    {
      title: "First-Order Exponential Decay & Half-Life Multiplier",
      formula: "[A]_t = [A]_0 \\left(\\frac{1}{2}\\right)^n = [A]_0 \\left(\\frac{1}{2}\\right)^{t / t_{1/2}} = [A]_0 e^{-kt}",
      meaning: "Computes amount remaining after n half-lives (n = t / t_1/2).",
      whenToUse: "High-speed shortcut for determining remaining or reacted amounts without logarithms."
    },
    {
      title: "First-Order Gaseous Reaction (Pressure Kinetics)",
      formula: "k = \\frac{2.303}{t} \\log_{10}\\left(\\frac{P_i}{2P_i - P_t}\\right)",
      meaning: "Calculates rate constant from initial pressure P_i and total pressure P_t at time t for A(g) → B(g) + C(g).",
      whenToUse: "In gas-phase kinetics problems where total pressure data is provided."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
      <rect width="760" height="260" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Graph 1: Zero Order [A] vs t -->
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="220" height="210" fill="#ffffff" rx="10" stroke="#0284c7" stroke-width="1.5"/>
        <text x="110" y="24" fill="#0284c7" font-size="12" font-weight="bold" text-anchor="middle">Zero Order: [A] vs t</text>
        <line x1="30" y1="170" x2="190" y2="170" stroke="#64748b" stroke-width="1.5"/>
        <line x1="30" y1="170" x2="30" y2="40" stroke="#64748b" stroke-width="1.5"/>
        <line x1="30" y1="60" x2="170" y2="170" stroke="#0284c7" stroke-width="2.5"/>
        <circle cx="30" cy="60" r="4" fill="#0284c7"/>
        <circle cx="170" cy="170" r="4" fill="#0284c7"/>
        <text x="25" y="55" fill="#0284c7" font-size="10" font-weight="bold" text-anchor="end">[A]₀</text>
        <text x="170" y="185" fill="#0284c7" font-size="10" font-weight="bold" text-anchor="middle">t_100%</text>
        <text x="110" y="110" fill="#0369a1" font-size="11" font-weight="bold">Slope = -k</text>
        <text x="110" y="198" fill="#475569" font-size="10" text-anchor="middle">[A]_t = [A]₀ - kt</text>
      </g>
      <!-- Graph 2: First Order ln[A] vs t -->
      <g transform="translate(270, 20)">
        <rect x="0" y="0" width="220" height="210" fill="#ffffff" rx="10" stroke="#059669" stroke-width="1.5"/>
        <text x="110" y="24" fill="#059669" font-size="12" font-weight="bold" text-anchor="middle">First Order: ln[A] vs t</text>
        <line x1="30" y1="170" x2="190" y2="170" stroke="#64748b" stroke-width="1.5"/>
        <line x1="30" y1="170" x2="30" y2="40" stroke="#64748b" stroke-width="1.5"/>
        <line x1="30" y1="60" x2="180" y2="155" stroke="#059669" stroke-width="2.5"/>
        <circle cx="30" cy="60" r="4" fill="#059669"/>
        <text x="25" y="55" fill="#059669" font-size="10" font-weight="bold" text-anchor="end">ln[A]₀</text>
        <text x="110" y="100" fill="#047857" font-size="11" font-weight="bold">Slope = -k</text>
        <text x="110" y="125" fill="#047857" font-size="10">log[A] vs t: -k/2.303</text>
        <text x="110" y="198" fill="#475569" font-size="10" text-anchor="middle">ln[A]_t = ln[A]₀ - kt</text>
      </g>
      <!-- Graph 3: Half-Life Comparison -->
      <g transform="translate(510, 20)">
        <rect x="0" y="0" width="220" height="210" fill="#ffffff" rx="10" stroke="#7c3aed" stroke-width="1.5"/>
        <text x="110" y="24" fill="#7c3aed" font-size="12" font-weight="bold" text-anchor="middle">Half-Life (t_1/2) vs [A]₀</text>
        <line x1="30" y1="170" x2="190" y2="170" stroke="#64748b" stroke-width="1.5"/>
        <line x1="30" y1="170" x2="30" y2="40" stroke="#64748b" stroke-width="1.5"/>
        <!-- First order flat line -->
        <line x1="30" y1="120" x2="180" y2="120" stroke="#059669" stroke-width="2.5"/>
        <text x="130" y="110" fill="#059669" font-size="10" font-weight="bold">1st Order (Flat)</text>
        <!-- Zero order linear line -->
        <line x1="30" y1="170" x2="170" y2="60" stroke="#0284c7" stroke-width="2.5"/>
        <text x="120" y="65" fill="#0284c7" font-size="10" font-weight="bold">0th Order (Linear)</text>
        <text x="110" y="198" fill="#475569" font-size="10" text-anchor="middle">0th: t_1/2∝[A]₀ | 1st: t_1/2=Const</text>
      </g>
    </svg>`,
    caption: "Essential Graphs in Kinetics: [A] vs t for zero-order (linear drop to zero); ln[A] vs t for first-order (slope = -k); and t_1/2 vs [A]₀ comparing zero-order (slope = 1/2k) vs first-order (horizontal flat line)."
  },

  neetImportantPoints: [
    "NEET HIGH YIELD: For a first-order reaction, t_75% = 2 × t_50% (exactly 2 half-lives).",
    "NEET HIGH YIELD: For a first-order reaction, t_87.5% = 3 × t_50% (exactly 3 half-lives).",
    "NEET HIGH YIELD: For a first-order reaction, t_99% = 2 × t_90% (since t_90% = 2.303/k and t_99% = 4.606/k).",
    "NEET HIGH YIELD: For a first-order reaction, t_99.9% = 10 × t_50% ≈ 3 × t_90% (since t_99.9% = 6.909/k = 10 × 0.693/k).",
    "NEET TRAP 1: Zero-order reactions HAVE a finite completion time: t_100% = [A]₀ / k = 2 × t_1/2. First-order reactions require infinite time for 100% completion (t_100% = ∞).",
    "NEET TRAP 2: If a graph of log₁₀[A] vs t is given, the slope is NOT -k; it is -k / 2.303!",
    "NEET TRAP 3: If half-life doubles when initial concentration is doubled, reaction order = 0 (since t_1/2 ∝ [A]₀). If half-life remains constant, order = 1. If half-life is halved when [A]₀ is doubled, order = 2 (t_1/2 ∝ 1/[A]₀)."
  ],

  commonConfusions: [
    {
      commonConfusion: "Applying the formula t_75% = 2 × t_50% to a zero-order reaction.",
      correctFact: "t_75% = 2 × t_50% is valid ONLY for first-order kinetics. For a zero-order reaction: t_50% = [A]₀ / (2k) and t_75% = (0.75 [A]₀) / k = 1.5 × t_50% (NOT 2 times!).",
      whyItMattersForNEET: "Frequent calculation trap in NEET."
    },
    {
      commonConfusion: "Assuming [A]_t in the first-order equation represents the amount of reactant that has reacted.",
      correctFact: "[A]_t (or a - x) represents the concentration REMAINING at time t. If a problem states 'reaction is 60% complete', then [A]_t = 40% of [A]₀ = 0.40 [A]₀ (x = 0.60 [A]₀).",
      whyItMattersForNEET: "Using 60 instead of 40 in log([A]₀/[A]_t) yields completely incorrect results."
    },
    {
      commonConfusion: "Forgetting the factor 2.303 when calculating k from slope of log₁₀[A] vs t plot.",
      correctFact: "Slope of ln[A] vs t = -k  =>  k = -Slope. But Slope of log₁₀[A] vs t = -k / 2.303  =>  k = -2.303 × Slope.",
      whyItMattersForNEET: "Examiners include both options with and without the 2.303 multiplier."
    }
  ],

  quickRevision: [
    "Zero Order: [A]_t = [A]₀ - kt; t_1/2 = [A]₀ / (2k); t_100% = [A]₀ / k = 2 t_1/2",
    "Zero Order Graphs: [A] vs t has slope = -k; Rate vs [A] has slope = 0; t_1/2 vs [A]₀ has slope = 1/(2k)",
    "First Order: k = (2.303/t) log₁₀([A]₀/[A]_t); [A]_t = [A]₀ e^(-kt)",
    "First Order Half-Life: t_1/2 = 0.693 / k (independent of [A]₀)",
    "First Order Graphs: ln[A] vs t has slope = -k; log[A] vs t has slope = -k/2.303",
    "Remaining after n half-lives = [A]₀ / 2ⁿ; Fraction reacted = 1 - (1/2)ⁿ",
    "Key Multipliers: t_75% = 2 t_50%; t_87.5% = 3 t_50%; t_99% = 2 t_90% = 6.64 t_50%; t_99.9% = 10 t_50%",
    "Gas Phase: k = (2.303/t) log(P_i / (2P_i - P_t)) for A(g) → B(g) + C(g)",
    "Pseudo-1st Order: Acid hydrolysis of ester (water in large excess)"
  ],

  practiceQuestions: [
    {
      id: "prac-zero-first-1",
      question: "A zero-order reaction has a rate constant of 0.002 mol L⁻¹ s⁻¹. If the initial concentration of reactant is 0.40 M, what will be the concentration after 60 seconds?",
      options: [
        "0.28 M",
        "0.12 M",
        "0.24 M",
        "0.32 M"
      ],
      correctAnswer: 0,
      explanation: "Step 1: Formula for zero-order reaction: [A]_t = [A]₀ - kt.\nStep 2: Substitute given values: [A]₀ = 0.40 M, k = 0.002 M s⁻¹, t = 60 s.\nStep 3: [A]_t = 0.40 - (0.002 × 60) = 0.40 - 0.12 = 0.28 M. Correct Option: 0 (0.28 M).",
      difficulty: "Easy",
      conceptTested: "Zero-Order Integrated Equation"
    },
    {
      id: "prac-zero-first-2",
      question: "A first-order reaction is 60% complete in 60 minutes. How much time is required for 90% completion of the same reaction? (Given log 10 = 1, log 4 = 0.602, log 2.5 = 0.398)",
      options: [
        "150.8 min",
        "120.0 min",
        "180.5 min",
        "90.4 min"
      ],
      correctAnswer: 0,
      explanation: "Step 1: For 60% completion: [A]₀ = 100, [A]_t = 100 - 60 = 40. t₁ = 60 min.\nk = (2.303 / 60) log(100/40) = (2.303 / 60) log(2.5) = (2.303 / 60) × 0.398 = 0.01528 min⁻¹.\nStep 2: For 90% completion: [A]₀ = 100, [A]_t = 100 - 90 = 10.\nt₂ = (2.303 / k) log(100/10) = (2.303 / 0.01528) log(10) = 2.303 / 0.01528 = 150.8 min. Correct Option: 0 (150.8 min).",
      difficulty: "Medium",
      conceptTested: "First-Order Percentage Completion"
    },
    {
      id: "prac-zero-first-3",
      question: "For a first-order reaction, the ratio of time required for 99.9% completion (t_99.9%) to the half-life of the reaction (t_50%) is exactly:",
      options: [
        "2",
        "4",
        "10",
        "100"
      ],
      correctAnswer: 2,
      explanation: "Step 1: t_99.9% = (2.303 / k) log(100 / (100 - 99.9)) = (2.303 / k) log(100 / 0.1) = (2.303 / k) log(10³) = (3 × 2.303) / k = 6.909 / k.\nStep 2: t_50% = 0.693 / k = (2.303 × log 2) / k = 0.693 / k.\nStep 3: Ratio = t_99.9% / t_50% = (6.909 / k) / (0.693 / k) = 10. Correct Option: 2 (10).",
      difficulty: "Easy",
      conceptTested: "First-Order Milestone Relations"
    },
    {
      id: "prac-zero-first-4",
      question: "The thermal decomposition of a gaseous compound A(g) → 2B(g) + C(g) follows first-order kinetics. Initially, only A is present and the pressure is 100 mm Hg. After 10 minutes, the total pressure of the system becomes 180 mm Hg. What is the rate constant k? (Given log 1.67 = 0.222)",
      options: [
        "0.051 min⁻¹",
        "0.023 min⁻¹",
        "0.082 min⁻¹",
        "0.011 min⁻¹"
      ],
      correctAnswer: 0,
      explanation: "Step 1: Stoichiometry: A(g) → 2B(g) + C(g).\nAt t = 0: P_A = 100, P_B = 0, P_C = 0.\nAt t = 10 min: P_A = 100 - p, P_B = 2p, P_C = p.\nTotal pressure P_t = (100 - p) + 2p + p = 100 + 2p = 180 mm Hg  =>  2p = 80  =>  p = 40 mm Hg.\nStep 2: Remaining pressure of A at 10 min = 100 - p = 100 - 40 = 60 mm Hg.\nStep 3: k = (2.303 / 10) log(100 / 60) = (2.303 / 10) log(1.667) = (2.303 / 10) × 0.222 = 0.0511 min⁻¹. Correct Option: 0 (0.051 min⁻¹).",
      difficulty: "Hard",
      conceptTested: "First-Order Pressure Kinetics"
    },
    {
      id: "prac-zero-first-5",
      question: "A radioactive isotope has a half-life of 20 days. If you start with 64 g of the isotope, how much of it will remain un-decayed after 100 days?",
      options: [
        "1 g",
        "2 g",
        "4 g",
        "8 g"
      ],
      correctAnswer: 1,
      explanation: "Step 1: Number of half-lives elapsed: n = total time / t_1/2 = 100 days / 20 days = 5 half-lives.\nStep 2: Remaining mass formula: N = N₀ × (1/2)ⁿ = 64 g × (1/2)⁵ = 64 / 32 = 2 g.\nStep 3: Exactly 2 g remains un-decayed. Correct Option: 1 (2 g).",
      difficulty: "Easy",
      conceptTested: "Radioactive Decay & Half-Life Shortcut"
    }
  ],

  pyqs: [
    {
      id: "kinetics-pyq-2023-firstorder",
      year: 2023,
      exam: "NEET UG 2023",
      question: "A first-order reaction has a rate constant of 4.606 × 10⁻³ s⁻¹. The time required for 3.0 g of the reactant to reduce to 0.75 g is: (Given log 2 = 0.3010, log 4 = 0.6020)",
      options: [
        "301 s",
        "602 s",
        "150 s",
        "450 s"
      ],
      correctAnswer: 0,
      explanation: "Step 1: [A]₀ = 3.0 g and [A]_t = 0.75 g.\nNotice that 0.75 g is exactly (3.0 / 4) g, which represents 2 half-lives!\nStep 2: Using the integrated formula: t = (2.303 / k) log([A]₀ / [A]_t) = (2.303 / (4.606 × 10⁻³)) log(3.0 / 0.75) = (2.303 / (4.606 × 10⁻³)) log(4).\nStep 3: t = (1 / (2 × 10⁻³)) × 0.6020 = (1000 / 2) × 0.6020 = 500 × 0.6020 = 301 s.\nShortcut: t_1/2 = 0.693 / (4.606 × 10⁻³) = 150.5 s. Time for 2 half-lives = 2 × 150.5 = 301 s. Correct Option: 0 (301 s).",
      topicId: "chem-zero-first-order",
      difficulty: "Easy",
      ncertReference: "Class 12 NCERT Chemistry, Chapter 4, Section 4.3.2"
    },
    {
      id: "kinetics-pyq-2021",
      year: 2021,
      exam: "NEET UG 2021",
      question: "The slope of the line in the plot of log₁₀[A] versus time (t) for a first-order reaction is:",
      options: [
        "-k",
        "-k / 2.303",
        "+k / 2.303",
        "-2.303 / k"
      ],
      correctAnswer: 1,
      explanation: "Step 1: First order integrated equation in base-10 log is: log₁₀[A]_t = log₁₀[A]₀ - (k / 2.303) t.\nStep 2: Comparing with y = mx + c (where y = log₁₀[A]_t and x = t):\nSlope m = -k / 2.303 and Intercept c = log₁₀[A]₀.\nStep 3: Correct Option is 1 (or Option B).",
      topicId: "chem-zero-first-order",
      difficulty: "Easy",
      ncertReference: "Class 12 NCERT Chemistry, Chapter 4, Section 4.3"
    },
    {
      id: "kinetics-pyq-2019",
      year: 2019,
      exam: "NEET UG 2019",
      question: "If the rate constant for a first order reaction is k, the time (t) required for the completion of 99% of the reaction is given by:",
      options: [
        "t = 2.303 / k",
        "t = 0.693 / k",
        "t = 6.909 / k",
        "t = 4.606 / k"
      ],
      correctAnswer: 3,
      explanation: "Step 1: For 99% completion: [A]₀ = 100, [A]_t = 100 - 99 = 1.\nStep 2: t = (2.303 / k) log(100 / 1) = (2.303 / k) log(10²) = (2.303 × 2) / k = 4.606 / k.\nStep 3: Correct Option: 3 (Option D).",
      topicId: "chem-zero-first-order",
      difficulty: "Easy",
      ncertReference: "Class 12 NCERT Chemistry, Chapter 4, Section 4.3.2"
    },
    {
      id: "kinetics-pyq-2017",
      year: 2017,
      exam: "NEET UG 2017",
      question: "A first-order reaction has a half-life of 1.40 × 10³ s. How long will it take for the concentration of the reactant to fall to 1/8 of its initial value?",
      options: [
        "2.80 × 10³ s",
        "4.20 × 10³ s",
        "5.60 × 10³ s",
        "1.40 × 10³ s"
      ],
      correctAnswer: 1,
      explanation: "Step 1: Concentration falls to 1/8 of initial value: [A]_t = [A]₀ / 8 = [A]₀ / 2³.\nStep 2: The power of 2 is 3, which means exactly 3 half-lives have elapsed (n = 3).\nStep 3: Total time t = n × t_1/2 = 3 × (1.40 × 10³ s) = 4.20 × 10³ s. Correct Option: 1 (Option B).",
      topicId: "chem-zero-first-order",
      difficulty: "Easy",
      ncertReference: "Class 12 NCERT Chemistry, Chapter 4, Section 4.3"
    },
    {
      id: "kinetics-pyq-2013",
      year: 2013,
      exam: "NEET UG (AIPMT) 2013",
      question: "In a zero-order reaction, for every 10° rise of temperature, the rate is doubled. If the temperature is increased from 10°C to 100°C, the rate of the reaction will become:",
      options: [
        "256 times",
        "512 times",
        "64 times",
        "128 times"
      ],
      correctAnswer: 1,
      explanation: "Step 1: Number of 10°C temperature steps: n = (T₂ - T₁) / 10 = (100 - 10) / 10 = 90 / 10 = 9 steps.\nStep 2: Rate increase factor = (Temperature coefficient)ⁿ = 2⁹ = 512.\nStep 3: The rate increases by 512 times. Correct Option: 1 (Option B).",
      topicId: "chem-zero-first-order",
      difficulty: "Medium",
      ncertReference: "Class 12 NCERT Chemistry, Chapter 4, Section 4.4"
    }
  ],

  neetMarksPotential: {
    topicName: "Integrated Rate Equations: Zero & First Order Reactions",
    confidenceLabel: "HIGH",
    confidenceText: "High Confidence: Tested in 100% of NEET UG examinations (1 to 2 direct numericals per paper, 4 to 8 marks).",
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 15,
    totalDirectPyqs: 22,
    totalHistoricalMarks: 88,
    avgDirectMarksPerPaper: 5.9,
    whatThisMeansForYou: "Zero & First order calculations are guaranteed marks in NEET. Memorize t75% = 2 t1/2, t99% = 2 t90%, and the (1/2)^n decay rule to solve MCQs in under 45 seconds."
  }
};
