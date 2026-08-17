export interface ElectroNumerical {
  id: string;
  topicId: string;
  title: string;
  problemStatement: string;
  givenData: string;
  formulaUsed: string;
  stepByStepSolution: string[];
  finalAnswer: string;
  neetStrategyTip: string;
}

export const ELECTROCHEMISTRY_NUMERICALS: ElectroNumerical[] = [
  // 1. Nernst Equation Calculation for Cell EMF
  {
    id: "num-nernst-cell-emf",
    topicId: "chem-galvanic-cells-nernst",
    title: "Calculation of Cell EMF using Nernst Equation at 298 K",
    problemStatement: "Calculate the EMF of the following cell at 298 K:\nMg(s) | Mg²⁺(0.001 M) || Cu²⁺(0.0001 M) | Cu(s)\nGiven: E°(Mg²⁺/Mg) = -2.37 V and E°(Cu²⁺/Cu) = +0.34 V.",
    givenData: "[Mg²⁺] = 0.001 M = 10⁻³ M; [Cu²⁺] = 0.0001 M = 10⁻⁴ M; E°_anode(Mg²⁺/Mg) = -2.37 V; E°_cathode(Cu²⁺/Cu) = +0.34 V.",
    formulaUsed: "E°_cell = E°_cathode - E°_anode;  E_cell = E°_cell - (0.0591 / n) log₁₀ ([Mg²⁺] / [Cu²⁺])",
    stepByStepSolution: [
      "Step 1: Write the half-cell reactions and determine the number of transferred electrons (n):\nAnode (Oxidation): Mg(s) → Mg²⁺(aq) + 2e⁻\nCathode (Reduction): Cu²⁺(aq) + 2e⁻ → Cu(s)\nNet cell reaction: Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s)  ⟹  n = 2 moles of electrons.",
      "Step 2: Calculate the Standard Cell Potential (E°_cell):\nE°_cell = E°(Cu²⁺/Cu) - E°(Mg²⁺/Mg) = +0.34 V - (-2.37 V) = +0.34 + 2.37 = +2.71 V.",
      "Step 3: Write the reaction quotient Q:\nQ = [Mg²⁺] / [Cu²⁺] = 10⁻³ / 10⁻⁴ = 10¹ = 10.",
      "Step 4: Substitute all values into the Nernst Equation at 298 K:\nE_cell = 2.71 - (0.0591 / 2) · log₁₀(10)\nE_cell = 2.71 - (0.02955) · (1) = 2.71 - 0.02955 = 2.68045 V ≈ 2.68 V."
    ],
    finalAnswer: "E_cell = 2.68 V",
    neetStrategyTip: "Always verify the number of electrons n. In multi-valent asymmetric cells (e.g. Mg-Ag cell where Mg → Mg²⁺ + 2e⁻ and 2Ag⁺ + 2e⁻ → 2Ag), the reaction quotient Q is [Mg²⁺]/[Ag⁺]² with the stoichiometric power 2!"
  },

  // 2. Gibbs Free Energy (ΔG°) and Equilibrium Constant (Kc)
  {
    id: "num-gibbs-and-kc",
    topicId: "chem-galvanic-cells-nernst",
    title: "Determination of Standard Gibbs Free Energy Change (ΔrG°) and Equilibrium Constant (Kc)",
    problemStatement: "The standard electrode potential for the Daniell cell is +1.10 V. Calculate the standard Gibbs free energy change (Δ_r G°) and the equilibrium constant (K_c) for the reaction at 298 K:\nZn(s) + Cu²⁺(aq) ⇌ Zn²⁺(aq) + Cu(s)\n(Take F = 96487 C mol⁻¹ or 96500 C mol⁻¹).",
    givenData: "E°_cell = +1.10 V; n = 2; T = 298 K; F = 96487 C mol⁻¹.",
    formulaUsed: "Δ_r G° = -n F E°_cell;  log₁₀ K_c = (n E°_cell) / 0.0591",
    stepByStepSolution: [
      "Step 1: Calculate Standard Gibbs Free Energy Change (Δ_r G°):\nΔ_r G° = -n F E°_cell = - (2) × (96487 C mol⁻¹) × (1.10 V)\nΔ_r G° = - 212,271.4 J mol⁻¹ = - 212.27 kJ mol⁻¹.",
      "Step 2: Calculate the Equilibrium Constant (K_c) at 298 K:\nlog₁₀ K_c = (n E°_cell) / 0.0591 = (2 × 1.10) / 0.0591 = 2.20 / 0.0591 = 37.225.\nTaking antilog: K_c = 10³⁷·²²⁵ = 10⁰·²²⁵ × 10³⁷ = 1.68 × 10³⁷."
    ],
    finalAnswer: "Δ_r G° = -212.27 kJ mol⁻¹;  K_c = 1.68 × 10³⁷",
    neetStrategyTip: "Notice how an enormous equilibrium constant (10³⁷) corresponds to a moderate positive E° (+1.10 V). This proves the reaction goes virtually to 100% completion."
  },

  // 3. Hydrogen Electrode Potential vs pH
  {
    id: "num-hydrogen-potential-ph",
    topicId: "chem-galvanic-cells-nernst",
    title: "Electrode Potential of Hydrogen Electrode in a Solution of pH = 10",
    problemStatement: "Calculate the electrode potential of a hydrogen electrode placed in contact with a solution whose pH is 10 at 298 K (pressure of H₂ gas = 1 bar).",
    givenData: "pH = 10; [H⁺] = 10⁻¹⁰ M; P(H₂) = 1 bar; E°(H⁺/H₂) = 0.00 V.",
    formulaUsed: "Reduction half-reaction: H⁺(aq) + e⁻ → 1/2 H₂(g);  E(H⁺/H₂) = E° - (0.0591 / 1) log₁₀( [P(H₂)]¹/² / [H⁺] ) = -0.0591 × pH",
    stepByStepSolution: [
      "Step 1: Write the reduction half-cell reaction:\nH⁺(aq) + e⁻ → 1/2 H₂(g)  (n = 1)",
      "Step 2: Apply the Nernst equation for reduction potential:\nE(H⁺/H₂) = E°(H⁺/H₂) - (0.0591 / 1) · log₁₀( 1 / [H⁺] )\nSince E°(H⁺/H₂) = 0.00 V and log₁₀(1 / [H⁺]) = - log₁₀[H⁺] = pH:\nE(H⁺/H₂) = 0 - 0.0591 · (pH)",
      "Step 3: Substitute pH = 10:\nE(H⁺/H₂) = - 0.0591 × 10 = - 0.591 V."
    ],
    finalAnswer: "E(H⁺/H₂) = -0.591 V",
    neetStrategyTip: "Direct NEET shortcut: Standard reduction potential of hydrogen electrode at any pH is ALWAYS: E = -0.0591 × pH (at 298 K and 1 bar H₂). For neutral water (pH = 7), E = -0.0591 × 7 = -0.414 V."
  },

  // 4. Conductivity Cell Constant & Specific Conductivity
  {
    id: "num-cell-constant-conductivity",
    topicId: "chem-molar-conductance",
    title: "Determination of Cell Constant and Conductivity of Electrolyte Solution",
    problemStatement: "Resistance of a conductivity cell filled with 0.1 mol L⁻¹ KCl solution is 100 Ω. If the resistance of the same cell when filled with 0.02 mol L⁻¹ KCl solution is 520 Ω, calculate the conductivity (κ) and molar conductivity (Λ_m) of 0.02 mol L⁻¹ KCl solution.\n(Given: Conductivity of 0.1 mol L⁻¹ KCl solution is 1.29 S m⁻¹ = 0.0129 S cm⁻¹).",
    givenData: "For 0.1 M KCl: R₁ = 100 Ω, κ₁ = 1.29 S m⁻¹ = 1.29 × 10⁻² S cm⁻¹.\nFor 0.02 M KCl: R₂ = 520 Ω, M₂ = 0.02 mol L⁻¹.",
    formulaUsed: "Cell Constant G* = R₁ · κ₁;  Conductivity κ₂ = G* / R₂;  Molar Conductivity Λ_m = (1000 · κ₂) / M₂",
    stepByStepSolution: [
      "Step 1: Calculate the Cell Constant (G*) using the 0.1 M KCl reference solution:\nG* = R₁ × κ₁ = 100 Ω × 1.29 S m⁻¹ = 129 m⁻¹ = 1.29 cm⁻¹.",
      "Step 2: Calculate the Conductivity (κ₂) of the 0.02 M KCl solution:\nκ₂ = G* / R₂ = 129 m⁻¹ / 520 Ω = 0.248 S m⁻¹ = 0.248 × 10⁻² S cm⁻¹ = 2.48 × 10⁻³ S cm⁻¹.",
      "Step 3: Calculate the Molar Conductivity (Λ_m) in S cm² mol⁻¹:\nΛ_m = (1000 × κ₂) / M₂ = (1000 × 2.48 × 10⁻³) / 0.02 = 2.48 / 0.02 = 124 S cm² mol⁻¹."
    ],
    finalAnswer: "Conductivity κ = 0.248 S m⁻¹ (2.48 × 10⁻³ S cm⁻¹);  Molar Conductivity Λ_m = 124 S cm² mol⁻¹",
    neetStrategyTip: "Check your units carefully! If κ is in S m⁻¹, Λ_m = κ / (1000 · M) in S m² mol⁻¹. If κ is in S cm⁻¹, Λ_m = (1000 · κ) / M in S cm² mol⁻¹."
  },

  // 5. Kohlrausch's Law Calculation for Weak Acid Limiting Molar Conductivity
  {
    id: "num-kohlrausch-acetic-acid",
    topicId: "chem-molar-conductance",
    title: "Application of Kohlrausch's Law to Calculate Limiting Molar Conductivity of CH₃COOH",
    problemStatement: "The limiting molar conductivities (Λ°_m) for NaCl, HCl, and CH₃COONa at 298 K are 126.4, 425.9, and 91.0 S cm² mol⁻¹ respectively. Calculate the limiting molar conductivity (Λ°_m) of acetic acid (CH₃COOH).",
    givenData: "Λ°_m(NaCl) = 126.4 S cm² mol⁻¹; Λ°_m(HCl) = 425.9 S cm² mol⁻¹; Λ°_m(CH₃COONa) = 91.0 S cm² mol⁻¹.",
    formulaUsed: "Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl)",
    stepByStepSolution: [
      "Step 1: Write the Kohlrausch ionic expansion for each given electrolyte:\n(1) Λ°_m(CH₃COONa) = λ°(CH₃COO⁻) + λ°(Na⁺) = 91.0 S cm² mol⁻¹\n(2) Λ°_m(HCl) = λ°(H⁺) + λ°(Cl⁻) = 425.9 S cm² mol⁻¹\n(3) Λ°_m(NaCl) = λ°(Na⁺) + λ°(Cl⁻) = 126.4 S cm² mol⁻¹",
      "Step 2: Combine equations (1) + (2) - (3) to isolate [λ°(CH₃COO⁻) + λ°(H⁺)]:\nΛ°_m(CH₃COOH) = [λ°(CH₃COO⁻) + λ°(Na⁺)] + [λ°(H⁺) + λ°(Cl⁻)] - [λ°(Na⁺) + λ°(Cl⁻)]\nΛ°_m(CH₃COOH) = λ°(CH₃COO⁻) + λ°(H⁺)",
      "Step 3: Substitute the numerical values:\nΛ°_m(CH₃COOH) = 91.0 + 425.9 - 126.4 = 516.9 - 126.4 = 390.5 S cm² mol⁻¹."
    ],
    finalAnswer: "Λ°_m(CH₃COOH) = 390.5 S cm² mol⁻¹",
    neetStrategyTip: "This exact numerical is one of the most frequently asked in NEET Chemistry. Mnemonic: Weak Acid = Salt of weak acid + Strong acid - Salt of strong acid."
  },

  // 6. Degree of Dissociation (α) and Dissociation Constant (Ka)
  {
    id: "num-degree-dissociation-ka",
    topicId: "chem-molar-conductance",
    title: "Calculation of Degree of Dissociation (α) and Dissociation Constant (Ka) of Acetic Acid",
    problemStatement: "The conductivity of 0.001028 mol L⁻¹ acetic acid is 4.95 × 10⁻⁵ S cm⁻¹. Calculate its dissociation constant (K_a) if Λ°_m for acetic acid is 390.5 S cm² mol⁻¹.",
    givenData: "c = 0.001028 M; κ = 4.95 × 10⁻⁵ S cm⁻¹; Λ°_m = 390.5 S cm² mol⁻¹.",
    formulaUsed: "Λ_m = (1000 · κ) / c;  α = Λ_m / Λ°_m;  K_a = (c · α²) / (1 - α)",
    stepByStepSolution: [
      "Step 1: Calculate the molar conductivity (Λ_m):\nΛ_m = (1000 × 4.95 × 10⁻⁵ S cm⁻¹) / 0.001028 mol L⁻¹ = 0.0495 / 0.001028 = 48.15 S cm² mol⁻¹.",
      "Step 2: Calculate the degree of dissociation (α):\nα = Λ_m / Λ°_m = 48.15 / 390.5 = 0.1233 (or 12.33%).",
      "Step 3: Calculate the dissociation constant (K_a):\nK_a = [c · α²] / [1 - α] = [0.001028 × (0.1233)²] / [1 - 0.1233]\nK_a = [0.001028 × 0.0152] / 0.8767 = 1.562 × 10⁻⁵ / 0.8767 = 1.78 × 10⁻⁵ mol L⁻¹."
    ],
    finalAnswer: "α = 0.1233 (12.33%);  K_a = 1.78 × 10⁻⁵ mol L⁻¹",
    neetStrategyTip: "Since α = 0.1233 (> 0.05 or 5%), do NOT approximate (1 - α) ≈ 1 in the denominator! Always calculate (1 - α) = 0.8767 for accurate results."
  },

  // 7. Faraday's 1st Law Calculation: Mass of Metal Deposited
  {
    id: "num-faraday-first-law-cu",
    topicId: "chem-electrolysis-batteries",
    title: "Mass of Copper Deposited by Electrolysis (Faraday's First Law)",
    problemStatement: "A solution of CuSO₄ is electrolysed for 10 minutes with a current of 1.5 amperes. What is the mass of copper deposited at the cathode?\n(Given: Molar mass of Cu = 63.5 g mol⁻¹, F = 96500 C mol⁻¹).",
    givenData: "Current I = 1.5 A; Time t = 10 min = 10 × 60 s = 600 s; Molar mass M = 63.5 g mol⁻¹; n = 2 for Cu²⁺ + 2e⁻ → Cu.",
    formulaUsed: "Q = I · t;  m = (M · I · t) / (n · F)",
    stepByStepSolution: [
      "Step 1: Calculate the total electric charge passed (Q in Coulombs):\nQ = I × t = 1.5 A × 600 s = 900 Coulombs.",
      "Step 2: Determine the n-factor from the cathode reaction:\nCu²⁺(aq) + 2e⁻ → Cu(s)  ⟹  n = 2 (2 Faradays or 2 × 96500 C deposit 1 mol Cu = 63.5 g).",
      "Step 3: Calculate the mass deposited:\nm = (63.5 g mol⁻¹ × 900 C) / (2 × 96500 C mol⁻¹)\nm = 57150 / 193000 = 0.2961 g ≈ 0.296 g."
    ],
    finalAnswer: "Mass of Cu deposited = 0.296 g",
    neetStrategyTip: "Always convert time into seconds! Forgetting to multiply minutes by 60 is the #1 student trap in Faraday's law numericals."
  },

  // 8. Electricity Required for Stoichiometric Redox Reductions
  {
    id: "num-coulombs-mno4-cr2o7",
    topicId: "chem-electrolysis-batteries",
    title: "Electricity (in Faradays and Coulombs) Required for Redox Reductions",
    problemStatement: "How many Coulombs of electricity are required for the complete reduction of:\n(i) 1 mole of Al³⁺ to Al\n(ii) 1 mole of Cu²⁺ to Cu\n(iii) 1 mole of MnO₄⁻ to Mn²⁺ in acidic medium?",
    givenData: "Moles of reactant = 1 mol in each case; F = 96500 C mol⁻¹.",
    formulaUsed: "Q = n · F  (where n is the number of moles of electrons in the balanced half-reaction)",
    stepByStepSolution: [
      "Case (i): Al³⁺ + 3e⁻ → Al(s)\n1 mole of Al³⁺ requires 3 moles of electrons = 3 Faradays (3 F).\nQ = 3 × 96500 C = 289,500 C = 2.895 × 10⁵ C.",
      "Case (ii): Cu²⁺ + 2e⁻ → Cu(s)\n1 mole of Cu²⁺ requires 2 moles of electrons = 2 Faradays (2 F).\nQ = 2 × 96500 C = 193,000 C = 1.93 × 10⁵ C.",
      "Case (iii): MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (Oxidation state of Mn changes from +7 to +2, requiring 5e⁻ per Mn atom).\n1 mole of MnO₄⁻ requires 5 moles of electrons = 5 Faradays (5 F).\nQ = 5 × 96500 C = 482,500 C = 4.825 × 10⁵ C."
    ],
    finalAnswer: "(i) 3 F = 2.895 × 10⁵ C;  (ii) 2 F = 1.93 × 10⁵ C;  (iii) 5 F = 4.825 × 10⁵ C",
    neetStrategyTip: "For Cr₂O₇²⁻ to 2Cr³⁺ in acidic medium: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O. 1 mole of dichromate requires 6 Faradays (6 F = 579,000 C)!"
  },

  // 9. Faraday's 2nd Law Series Electrolysis
  {
    id: "num-faraday-second-law-series",
    topicId: "chem-electrolysis-batteries",
    title: "Series Electrolysis of AgNO₃, CuSO₄, and Al(NO₃)₃ (Faraday's Second Law)",
    problemStatement: "Three electrolytic cells A, B, and C containing solutions of ZnSO₄, AgNO₃, and CuSO₄ respectively are connected in series. A steady current of 1.5 A was passed until 1.45 g of silver was deposited at the cathode of cell B. How long did the current flow? What masses of copper and zinc were deposited?\n(Atomic masses: Ag = 108, Cu = 63.5, Zn = 65.4 g mol⁻¹; F = 96500 C mol⁻¹).",
    givenData: "m(Ag) = 1.45 g; I = 1.5 A; M(Ag) = 108, M(Cu) = 63.5, M(Zn) = 65.4.",
    formulaUsed: "Q = (m · n · F) / M;  t = Q / I;  Faraday's 2nd Law: (m₁ / E₁) = (m₂ / E₂)",
    stepByStepSolution: [
      "Step 1: Calculate Equivalent Weights (E = M / n):\nE(Ag) = 108 / 1 = 108 g eq⁻¹\nE(Cu) = 63.5 / 2 = 31.75 g eq⁻¹\nE(Zn) = 65.4 / 2 = 32.7 g eq⁻¹",
      "Step 2: Calculate total charge Q and time of flow t from silver deposition:\nAg⁺ + e⁻ → Ag  ⟹  Q = (1.45 g × 1 × 96500 C) / 108 = 1295.6 C.\nTime t = Q / I = 1295.6 C / 1.5 A = 863.7 seconds ≈ 14.4 minutes.",
      "Step 3: Calculate mass of copper deposited using Faraday's 2nd law:\nm(Cu) / E(Cu) = m(Ag) / E(Ag)  ⟹  m(Cu) = [1.45 × 31.75] / 108 = 46.0375 / 108 = 0.426 g.",
      "Step 4: Calculate mass of zinc deposited:\nm(Zn) / E(Zn) = m(Ag) / E(Ag)  ⟹  m(Zn) = [1.45 × 32.7] / 108 = 47.415 / 108 = 0.439 g."
    ],
    finalAnswer: "Time t = 863.7 s (14.4 min);  Mass of Cu = 0.426 g;  Mass of Zn = 0.439 g",
    neetStrategyTip: "In series electrolysis, ratio of moles deposited is: n(Ag) : n(Cu) : n(Zn) = (1/1) : (1/2) : (1/2) = 2 : 1 : 1."
  }
];
