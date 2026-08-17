import { PYQuestion } from '../../types/neet';

export const CHEMICAL_KINETICS_VERIFIED_PYQS: PYQuestion[] = [
  // --- NEET 2024 / Re-NEET 2024 ---
  {
    id: "pyq-kinetics-2024-1",
    year: 2024,
    exam: "NEET UG 2024",
    question: "For a reaction A → Products, the initial concentration of A is 0.1 M, which becomes 0.001 M in 100 minutes. If the reaction follows first order kinetics, the rate constant (k) of the reaction is:",
    options: [
      "0.04606 min⁻¹",
      "0.02303 min⁻¹",
      "0.4606 min⁻¹",
      "0.2303 min⁻¹"
    ],
    correctAnswer: 0,
    explanation: "For a first-order reaction:\n\nk = (2.303 / t) × log₁₀([A]₀ / [A]_t)\n\nGiven:\n• [A]₀ = 0.1 M\n• [A]_t = 0.001 M\n• t = 100 min\n\n[A]₀ / [A]_t = 0.1 / 0.001 = 100 = 10²\nlog₁₀(100) = 2\n\nk = (2.303 / 100) × 2 = 4.606 / 100 = 0.04606 min⁻¹.",
    conceptTested: "First Order Integrated Rate Law Calculation",
    difficulty: "Medium",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-zero-first-order"
  },
  {
    id: "pyq-kinetics-2024-2",
    year: 2024,
    exam: "NEET UG 2024",
    question: "In a reaction, for every 10 °C rise in temperature, the rate of reaction is doubled. If the temperature is increased from 10 °C to 100 °C, the rate of reaction will become:",
    options: [
      "512 times",
      "256 times",
      "64 times",
      "128 times"
    ],
    correctAnswer: 0,
    explanation: "Temperature rise ΔT = 100 °C - 10 °C = 90 °C.\nNumber of 10 °C intervals n = ΔT / 10 = 90 / 10 = 9.\n\nSince rate doubles for every 10 °C rise:\nRate_final / Rate_initial = (2)^n = 2⁹ = 512 times.",
    conceptTested: "Temperature Coefficient & Rate Acceleration",
    difficulty: "Easy",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-arrhenius-collision-theory"
  },
  {
    id: "pyq-kinetics-2023-1",
    year: 2023,
    exam: "NEET UG 2023",
    question: "For a reaction A + B → Products, the rate is first order with respect to A and second order with respect to B. If the concentration of A is doubled and that of B is halved, the rate of reaction will:",
    options: [
      "Decrease by a factor of 2 (become halved)",
      "Increase by a factor of 4",
      "Increase by a factor of 2",
      "Remain unchanged"
    ],
    correctAnswer: 0,
    explanation: "Initial Rate Law: R₁ = k [A]¹ [B]²\n\nWhen [A]' = 2[A] and [B]' = [B] / 2:\nNew Rate: R₂ = k (2[A])¹ ([B]/2)² = k (2[A]) ([B]²/4) = (2/4) × k [A] [B]² = 0.5 × R₁.\n\nTherefore, the rate of reaction decreases by a factor of 2 (becomes halved).",
    conceptTested: "Rate Law Concentration Dependence",
    difficulty: "Easy",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-rate-order-molecularity"
  },
  {
    id: "pyq-kinetics-2023-2",
    year: 2023,
    exam: "NEET UG 2023",
    question: "Which of the following statements is INCORRECT regarding catalysts in chemical reactions?",
    options: [
      "A catalyst alters Gibbs free energy change (ΔrG°) of the reaction",
      "A catalyst lowers the activation energy by providing an alternate pathway",
      "A catalyst accelerates both forward and reverse reaction rates equally",
      "A catalyst does not shift the equilibrium position"
    ],
    correctAnswer: 0,
    explanation: "According to NCERT Chemical Kinetics:\n• A catalyst DOES NOT alter the enthalpy change (ΔH), Gibbs free energy change (ΔG), or entropy change (ΔS) of a reaction, as these are state functions.\n• A catalyst lowers the activation energy (Ea) for both forward and reverse directions by the exact same amount.\n• A catalyst helps achieve equilibrium faster but DOES NOT alter the equilibrium constant (K_eq) or equilibrium composition.",
    conceptTested: "Catalyst Properties & Thermodynamic Independence",
    difficulty: "Easy",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-arrhenius-collision-theory"
  },
  {
    id: "pyq-kinetics-2022-1",
    year: 2022,
    exam: "NEET UG 2022",
    question: "The slope of the straight line obtained by plotting log₁₀ k vs 1/T for a reaction according to the Arrhenius equation is equal to:",
    options: [
      "-Ea / (2.303 R)",
      "-Ea / R",
      "+Ea / (2.303 R)",
      "Ea / R"
    ],
    correctAnswer: 0,
    explanation: "Arrhenius equation in logarithmic form:\nlog₁₀ k = log₁₀ A - (Ea / (2.303 R)) × (1/T)\n\nComparing with the linear equation y = mx + c (where y = log₁₀ k, x = 1/T):\n• Slope m = -Ea / (2.303 R)\n• Y-intercept c = log₁₀ A.",
    conceptTested: "Arrhenius Plot Graphical Slope",
    difficulty: "Easy",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-arrhenius-collision-theory"
  },
  {
    id: "pyq-kinetics-2022-2",
    year: 2022,
    exam: "NEET UG 2022",
    question: "The half-life period of a first-order chemical reaction is 69.3 minutes. The time required for the completion of 99% of the chemical reaction will be (log 10 = 1):",
    options: [
      "460.6 minutes",
      "230.3 minutes",
      "693 minutes",
      "990 minutes"
    ],
    correctAnswer: 0,
    explanation: "1. Calculate rate constant k:\nk = 0.693 / t₁/₂ = 0.693 / 69.3 min = 0.01 min⁻¹ = 10⁻² min⁻¹.\n\n2. For 99% completion:\n• [A]₀ = 100\n• [A]_t = 100 - 99 = 1\n\nt_99% = (2.303 / k) × log₁₀([A]₀ / [A]_t)\nt_99% = (2.303 / 0.01) × log₁₀(100 / 1)\nt_99% = 230.3 × 2 = 460.6 minutes.\n\nShortcut: t_99% ≈ 6.64 × t₁/₂ = 6.64 × 69.3 ≈ 460.6 min.",
    conceptTested: "First-Order Percentage Completion Time Calculation",
    difficulty: "Medium",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-zero-first-order"
  },
  {
    id: "pyq-kinetics-2021-1",
    year: 2021,
    exam: "NEET UG 2021",
    question: "The unit of the rate constant (k) for a second-order reaction is:",
    options: [
      "L mol⁻¹ s⁻¹",
      "mol L⁻¹ s⁻¹",
      "s⁻¹",
      "L² mol⁻² s⁻¹"
    ],
    correctAnswer: 0,
    explanation: "The general dimensional unit of rate constant for an n-th order reaction is:\nUnit of k = (mol L⁻¹)^(1-n) s⁻¹\n\nFor a second-order reaction (n = 2):\nUnit = (mol L⁻¹)^(1-2) s⁻¹ = (mol L⁻¹)⁻¹ s⁻¹ = mol⁻¹ L s⁻¹ = L mol⁻¹ s⁻¹.",
    conceptTested: "Rate Constant Units by Order",
    difficulty: "Easy",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-rate-order-molecularity"
  },
  {
    id: "pyq-kinetics-2020-1",
    year: 2020,
    exam: "NEET UG 2020",
    question: "A first-order reaction has a rate constant of 2.303 × 10⁻³ s⁻¹. The time required for 40 g of this reactant to reduce to 10 g will be [Given: log 2 = 0.3010, log 4 = 0.6020]:",
    options: [
      "602 s",
      "230.3 s",
      "301 s",
      "2000 s"
    ],
    correctAnswer: 0,
    explanation: "For a first order reaction:\nt = (2.303 / k) × log₁₀([A]₀ / [A]_t)\n\nGiven:\n• k = 2.303 × 10⁻³ s⁻¹\n• [A]₀ = 40 g\n• [A]_t = 10 g\n• [A]₀ / [A]_t = 40 / 10 = 4 = 2²\n\nt = (2.303 / (2.303 × 10⁻³)) × log₁₀(4)\nt = 10³ × 0.6020 = 602 s.\n\nShortcut: 40 g → 20 g (1st t₁/₂) → 10 g (2nd t₁/₂). Total time = 2 × t₁/₂ = 2 × (0.693 / 2.303 × 10⁻³) = 2 × 301 s = 602 s.",
    conceptTested: "First Order Time from Mass Decay",
    difficulty: "Medium",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-zero-first-order"
  },
  {
    id: "pyq-kinetics-2019-1",
    year: 2019,
    exam: "NEET UG 2019",
    question: "If the rate constant for a first order reaction is k, the time (t) required for the completion of 99% of the reaction is given by:",
    options: [
      "t = 4.606 / k",
      "t = 2.303 / k",
      "t = 0.693 / k",
      "t = 6.909 / k"
    ],
    correctAnswer: 0,
    explanation: "For a first-order reaction:\nt = (2.303 / k) × log₁₀([A]₀ / [A]_t)\n\nFor 99% completion:\n• [A]₀ = 100\n• [A]_t = 100 - 99 = 1\n• log₁₀(100 / 1) = log₁₀(10²) = 2\n\nt = (2.303 / k) × 2 = 4.606 / k.",
    conceptTested: "First Order Algebraic Time Expression",
    difficulty: "Easy",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-zero-first-order"
  },
  {
    id: "pyq-kinetics-2018-1",
    year: 2018,
    exam: "NEET UG 2018",
    question: "The correct difference between first- and second-order reactions is that:",
    options: [
      "The half-life of a first-order reaction does not depend on [A]₀; the half-life of a second-order reaction does depend on [A]₀",
      "The rate of a first-order reaction does not depend on reactant concentrations; the rate of a second-order reaction does depend on reactant concentrations",
      "First-order reactions can be catalyzed; second-order reactions cannot be catalyzed",
      "First-order reactions are always elementary; second-order reactions are complex"
    ],
    correctAnswer: 0,
    explanation: "General half-life formula for n-th order reaction:\nt₁/₂ ∝ 1 / [A]₀^(n-1)\n\n• For First Order (n = 1): t₁/₂ = 0.693 / k (independent of [A]₀).\n• For Second Order (n = 2): t₁/₂ = 1 / (k [A]₀) (inversely proportional to [A]₀).\n• For Zero Order (n = 0): t₁/₂ = [A]₀ / (2k) (directly proportional to [A]₀).",
    conceptTested: "Order Comparison & Half-Life Concentration Dependency",
    difficulty: "Easy",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-zero-first-order"
  },
  {
    id: "pyq-kinetics-2017-1",
    year: 2017,
    exam: "NEET UG 2017",
    question: "Mechanism of a hypothetical reaction X₂ + Y₂ → 2XY is given below:\n(i) X₂ ⇌ X + X (fast equilibrium)\n(ii) X + Y₂ → XY + Y (slow)\n(iii) X + Y → XY (fast)\nThe overall order of the reaction will be:",
    options: [
      "1.5",
      "1.0",
      "2.0",
      "0.5"
    ],
    correctAnswer: 0,
    explanation: "1. The slowest step is the Rate Determining Step (RDS):\nRate = k₂ [X] [Y₂]\n\n2. Since X is a reaction intermediate, eliminate it using the fast equilibrium step (i):\nK_eq = [X]² / [X₂]  ⇒  [X] = (K_eq)¹/² [X₂]¹/²\n\n3. Substitute [X] into the rate law:\nRate = k₂ × (K_eq)¹/² [X₂]¹/² [Y₂]¹ = k_overall [X₂]⁰·⁵ [Y₂]¹\n\n4. Overall Order = 0.5 + 1 = 1.5.",
    conceptTested: "Multi-Step Mechanism & Intermediate Elimination",
    difficulty: "Hard",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-rate-order-molecularity"
  },
  {
    id: "pyq-kinetics-2016-1",
    year: 2016,
    exam: "NEET Phase-I 2016",
    question: "The rate of a first-order reaction is 0.04 mol L⁻¹ s⁻¹ at 10 seconds and 0.03 mol L⁻¹ s⁻¹ at 20 seconds after initiation of the reaction. The half-life period of the reaction is:",
    options: [
      "24.1 s",
      "34.1 s",
      "44.1 s",
      "54.1 s"
    ],
    correctAnswer: 0,
    explanation: "For a first-order reaction, Rate = k [A]. Thus, Rate₁ / Rate₂ = [A]₁ / [A]₂.\n\nk = (2.303 / (t₂ - t₁)) × log₁₀(Rate₁ / Rate₂)\nk = (2.303 / (20 - 10)) × log₁₀(0.04 / 0.03) = (2.303 / 10) × log₁₀(1.333)\nk = 0.2303 × 0.1249 = 0.02877 s⁻¹.\n\nt₁/₂ = 0.693 / k = 0.693 / 0.02877 ≈ 24.1 s.",
    conceptTested: "First Order Rate Ratio to Half-Life",
    difficulty: "Hard",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-zero-first-order"
  }
];
