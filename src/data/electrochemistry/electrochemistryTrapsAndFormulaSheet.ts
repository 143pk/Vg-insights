import { FormulaDetail, PracticeQuestion } from '../../types/neet';

export interface NeetTrap {
  trapTitle: string;
  studentMistake: string;
  actualFact: string;
  neetRule: string;
}

export const ELECTROCHEMISTRY_MASTER_FORMULAE: FormulaDetail[] = [
  // Topic 1 Formulas
  {
    title: "Standard Cell EMF (E°cell)",
    formula: "E°_{cell} = E°_{cathode} - E°_{anode} = E°_{right} - E°_{left}",
    meaning: "Difference in standard reduction potentials of the two half-cells.",
    symbols: "E°_cathode = Standard reduction potential of reduction electrode (V); E°_anode = Standard reduction potential of oxidation electrode (V).",
    unit: "Volt (V)",
    conditions: "Standard state: All solute concentrations = 1.0 M, gas pressures = 1.0 bar (or 1 atm), T = 298.15 K.",
    whenToUse: "Use to predict cell spontaneity and calculate standard open-circuit potential."
  },
  {
    title: "Nernst Equation for Full Cell EMF at 298 K",
    formula: "E_{cell} = E°_{cell} - \\frac{2.303 RT}{nF} \\log_{10} Q = E°_{cell} - \\frac{0.0591}{n} \\log_{10} \\left( \\frac{[\\text{Products}]^p}{[\\text{Reactants}]^r} \\right)",
    meaning: "Quantifies the dependence of cell potential on ionic concentrations and temperature.",
    symbols: "n = number of moles of electrons transferred in balanced reaction; Q = reaction quotient; F = Faraday constant (96487 C mol⁻¹).",
    unit: "Volt (V)",
    conditions: "Applicable at 298 K (25°C). Activities of pure solids and pure liquids are taken as unity (1.0).",
    whenToUse: "Use whenever electrolyte concentrations differ from 1.0 M."
  },
  {
    title: "Gibbs Free Energy & Cell Potential Relation",
    formula: "\\Delta_r G = -n F E_{cell} \\quad \\text{and} \\quad \\Delta_r G° = -n F E°_{cell}",
    meaning: "Relates maximum electrical work output to Gibbs free energy decrease.",
    symbols: "Δ_r G° = Standard Gibbs energy change (J mol⁻¹); n = transferred electrons; F = 96487 C mol⁻¹; E°_cell = Standard cell EMF (V).",
    unit: "Joules per mole (J mol⁻¹) or kJ mol⁻¹",
    conditions: "Standard state for ΔG° and E°_cell.",
    whenToUse: "Use to evaluate thermodynamic spontaneity (ΔG < 0 ⟺ E_cell > 0) and calculate maximum electrical work W_max = -ΔG."
  },
  {
    title: "Equilibrium Constant (Kc) from Standard Potential",
    formula: "\\log_{10} K_c = \\frac{n F E°_{cell}}{2.303 RT} = \\frac{n E°_{cell}}{0.0591} \\text{ at } 298\\text{ K}",
    meaning: "Calculates the chemical equilibrium constant of a redox reaction from electrochemical potential data.",
    symbols: "K_c = Equilibrium constant; n = number of electrons; E°_cell = Standard cell EMF.",
    unit: "Dimensionless",
    conditions: "At equilibrium, cell is dead (E_cell = 0, Q = K_c).",
    whenToUse: "Use to find K_c without measuring equilibrium concentrations directly."
  },

  // Topic 2 Formulas
  {
    title: "Electrolytic Conductance & Conductivity",
    formula: "G = \\frac{1}{R} \\quad \\text{and} \\quad \\kappa = G \\cdot \\left(\\frac{l}{A}\\right) = \\frac{1}{R} \\cdot G*",
    meaning: "Relations between resistance (R), conductance (G), specific conductivity (κ), and cell constant (G* = l/A).",
    symbols: "R in Ohms (Ω); G in Siemens (S = Ω⁻¹); l in cm or m; A in cm² or m²; G* in cm⁻¹ or m⁻¹; κ in S cm⁻¹ or S m⁻¹.",
    unit: "Conductance: S (Siemens); Conductivity κ: S cm⁻¹ or S m⁻¹",
    conditions: "Uniform current density across parallel platinized platinum electrodes.",
    whenToUse: "Use to convert measured bridge resistance into specific conductivity."
  },
  {
    title: "Molar Conductivity (Λm)",
    formula: "\\Lambda_m = \\frac{\\kappa}{c} = \\frac{1000 \\cdot \\kappa}{\\text{Molarity } (M)} \\text{ (in S cm}^2\\text{ mol}^{-1}\\text{)}",
    meaning: "Conducting capability of one mole of dissolved electrolyte in solution volume V.",
    symbols: "κ = conductivity in S cm⁻¹; M = molar concentration in mol L⁻¹; Λ_m in S cm² mol⁻¹.",
    unit: "S cm² mol⁻¹ (Note: 1 S m² mol⁻¹ = 10⁴ S cm² mol⁻¹)",
    conditions: "Concentration in mol L⁻¹ with κ in S cm⁻¹.",
    whenToUse: "Use to evaluate concentration-dependence of ionic conductance."
  },
  {
    title: "Debye-Hückel-Onsager Equation for Strong Electrolytes",
    formula: "\\Lambda_m = \\Lambda°_m - A \\sqrt{c}",
    meaning: "Linear variation of molar conductivity with square root of concentration for strong electrolytes.",
    symbols: "Λ°_m = Limiting molar conductivity at infinite dilution; A = constant depending on solvent, temperature, and electrolyte valency type.",
    unit: "S cm² mol⁻¹",
    conditions: "Valid for dilute solutions of strong electrolytes (e.g. KCl, NaCl).",
    whenToUse: "Use to find Λ°_m of strong electrolytes by linear extrapolation to c = 0."
  },
  {
    title: "Kohlrausch's Law of Independent Migration",
    formula: "\\Lambda°_m(A_x B_y) = x \\cdot \\lambda°(A^{y+}) + y \\cdot \\lambda°(B^{x-})",
    meaning: "Limiting molar conductivity is the sum of stoichiometric individual ionic limiting conductivities.",
    symbols: "x, y = stoichiometric numbers of cations and anions per formula unit; λ° = limiting ionic molar conductivities.",
    unit: "S cm² mol⁻¹",
    conditions: "Infinite dilution (c → 0).",
    whenToUse: "Use to calculate Λ°_m for weak electrolytes and sparingly soluble salts."
  },
  {
    title: "Degree of Dissociation (α) and Ostwald Dissociation Constant (Ka)",
    formula: "\\alpha = \\frac{\\Lambda_m}{\\Lambda°_m} \\quad \\text{and} \\quad K_a = \\frac{c \\alpha^2}{1 - \\alpha} = \\frac{c (\\Lambda_m / \\Lambda°_m)^2}{1 - (\\Lambda_m / \\Lambda°_m)}",
    meaning: "Calculates the fraction of ionization and equilibrium ionization constant for weak electrolytes.",
    symbols: "α = degree of dissociation; c = molar concentration; K_a = acid dissociation constant.",
    unit: "α is dimensionless; K_a in mol L⁻¹",
    conditions: "Valid for weak monobasic acids / monoacidic bases in dilute solution.",
    whenToUse: "Use to find α, pH, or K_a from conductance measurements."
  },

  // Topic 3 Formulas
  {
    title: "Faraday's First Law of Electrolysis",
    formula: "m = Z \\cdot Q = Z \\cdot I \\cdot t = \\left( \\frac{M}{n F} \\right) \\cdot I \\cdot t",
    meaning: "Mass of substance deposited is proportional to charge passed.",
    symbols: "m = mass deposited (g); Z = Electrochemical equivalent (g C⁻¹); I = current (A); t = time (s); M = molar mass (g mol⁻¹); n = electron count in electrode reaction; F = 96500 C mol⁻¹.",
    unit: "Mass in grams (g)",
    conditions: "Current efficiency = 100% (no side reactions).",
    whenToUse: "Use for quantitative electrolysis calculations."
  },
  {
    title: "Faraday's Second Law of Electrolysis",
    formula: "\\frac{m_1}{E_1} = \\frac{m_2}{E_2} = \\frac{Q}{F} \\quad \\text{where } E = \\frac{\\text{Molar Mass}}{n}",
    meaning: "Equal amounts of electricity deposit chemically equivalent amounts of different substances in series.",
    symbols: "m₁, m₂ = masses deposited; E₁, E₂ = chemical equivalent weights.",
    unit: "Dimensionless ratios; E in g eq⁻¹",
    conditions: "Same electric charge Q passed through series-connected electrolytic cells.",
    whenToUse: "Use for multi-cell series electrolysis problems."
  }
];

export const ELECTROCHEMISTRY_NEET_TRAPS: NeetTrap[] = [
  {
    trapTitle: "Standard Potential is Intensive vs Gibbs Energy is Extensive",
    studentMistake: "Multiplying a half-cell reaction by 2 (e.g. 2Ag⁺ + 2e⁻ → 2Ag) and doubling E° from +0.80 V to +1.60 V.",
    actualFact: "E° is an INTENSIVE property and does NOT change when the stoichiometric equation is multiplied! E°(Ag⁺/Ag) remains +0.80 V. However, ΔG° is an EXTENSIVE property and DOES double (ΔG° = -nFE°).",
    neetRule: "NEVER multiply E° by stoichiometric coefficients! Only multiply n in ΔG° = -nFE°."
  },
  {
    trapTitle: "Oxidation Potential vs Reduction Potential IUPAC Sign Convention",
    studentMistake: "Using oxidation potential directly in the cell formula E°_cell = E°_cathode - E°_anode without converting to reduction potential.",
    actualFact: "The formula E°_cell = E°_cathode - E°_anode strictly requires STANDARD REDUCTION POTENTIALS for BOTH electrodes. If given E°_ox(Zn/Zn²⁺) = +0.76 V, you must first convert to E°_red(Zn²⁺/Zn) = -0.76 V before subtracting.",
    neetRule: "Always convert all given electrode potentials into Standard Reduction Potentials (SRP) before plugging into E°_cell = E°_cathode - E°_anode."
  },
  {
    trapTitle: "Sign of Anode and Cathode in Galvanic vs Electrolytic Cells",
    studentMistake: "Believing that Anode is always negative in all chemical cells.",
    actualFact: "Anode is NEGATIVE (-) in a Galvanic cell, but POSITIVE (+) in an Electrolytic cell! Cathode is POSITIVE (+) in a Galvanic cell, but NEGATIVE (-) in an Electrolytic cell. However, OXIDATION always occurs at the Anode, and REDUCTION always occurs at the Cathode in ALL electrochemical systems.",
    neetRule: "Mnemonic: In both cell types, Anode = Oxidation, Cathode = Reduction. Galvanic Anode is (-); Electrolytic Anode is (+)."
  },
  {
    trapTitle: "Conductivity (κ) vs Molar Conductivity (Λm) on Dilution",
    studentMistake: "Stating that conductivity increases on dilution because ions move faster.",
    actualFact: "Specific Conductivity (κ) ALWAYS DECREASES on dilution because the number of current-carrying ions per unit volume (per cm³) decreases. In contrast, Molar Conductivity (Λ_m = 1000κ/M) ALWAYS INCREASES on dilution because the expansion in volume V overcomes the decrease in κ.",
    neetRule: "Dilution ⟹ Specific Conductivity (κ) DECREASES, Molar Conductivity (Λ_m) INCREASES. This holds true for BOTH strong and weak electrolytes."
  },
  {
    trapTitle: "Determination of Limiting Molar Conductivity (Λ°m) of Weak Electrolytes",
    studentMistake: "Attempting to determine Λ°_m of acetic acid (CH₃COOH) by extrapolating the Λ_m vs √c curve to the y-axis.",
    actualFact: "For weak electrolytes, Λ_m increases sharply (almost asymptotically parallel to the y-axis) at infinite dilution due to sudden surge in degree of dissociation α. Therefore, extrapolation to c = 0 is IMPOSSIBLE. Λ°_m for weak electrolytes MUST be determined indirectly via Kohlrausch's law.",
    neetRule: "Debye-Hückel-Onsager extrapolation works ONLY for strong electrolytes (KCl, NaCl, HCl). Weak electrolytes require Kohlrausch's law."
  },
  {
    trapTitle: "Stoichiometric Exponents in Reaction Quotient (Q) of Nernst Equation",
    studentMistake: "Writing Q = [Mg²⁺] / [Ag⁺] for the cell Mg(s) + 2Ag⁺(aq) → Mg²⁺(aq) + 2Ag(s).",
    actualFact: "The balanced reaction involves 2Ag⁺ ions. Therefore, by the law of mass action, the concentration of Ag⁺ must be SQUARED: Q = [Mg²⁺] / [Ag⁺]² with n = 2 in E_cell = E°_cell - (0.0591/2) log([Mg²⁺]/[Ag⁺]²).",
    neetRule: "Always raise ionic concentrations to their stoichiometric powers in the Nernst reaction quotient Q."
  },
  {
    trapTitle: "Electrolysis of Aqueous NaCl: Overpotential of Oxygen",
    studentMistake: "Predicting that O₂ gas will be liberated at the anode because oxidation of water (E° = +1.23 V) is thermodynamically easier than oxidation of chloride ion (E° = +1.36 V).",
    actualFact: "Although O₂ liberation has a lower standard potential, the oxidation of water to O₂ is kinetically very slow and requires a large OVERPOTENTIAL (activation overvoltage). Therefore, in concentrated aqueous NaCl (brine), Cl₂ gas is liberated at the anode preferentially!",
    neetRule: "Aqueous NaCl electrolysis yields H₂(g) at Cathode, Cl₂(g) at Anode (due to overpotential of O₂), and leaves NaOH(aq) in solution."
  },
  {
    trapTitle: "Mercury Cell Constant Voltage Throughout Working Life",
    studentMistake: "Thinking mercury cell voltage drops gradually like a dry cell.",
    actualFact: "The overall cell reaction of a mercury cell is: Zn(Hg) + HgO(s) → ZnO(s) + Hg(l). Because pure solids and pure liquids have constant activities (unity) and NO ions in solution appear in the net reaction, Q does not change. Hence, the EMF remains strictly constant at 1.35 V throughout its life.",
    neetRule: "Mercury cell voltage does not change during life because no ionic species whose concentration can change are involved in the overall cell reaction."
  },
  {
    trapTitle: "Lead Accumulator Discharging: Products at Both Electrodes",
    studentMistake: "Assuming Pb is formed at anode and PbO₂ is formed at cathode during discharge.",
    actualFact: "During discharge, BOTH electrodes form insoluble white lead sulfate: PbSO₄(s)! At anode: Pb + SO₄²⁻ → PbSO₄ + 2e⁻. At cathode: PbO₂ + SO₄²⁻ + 4H⁺ + 2e⁻ → PbSO₄ + 2H₂O. Sulfuric acid is consumed and its density drops below 1.20 g/cm³.",
    neetRule: "On discharge of a lead storage battery, BOTH electrodes get coated with PbSO₄, H₂SO₄ is consumed, and water is produced."
  },
  {
    trapTitle: "Unit Conversion of Time in Faraday's First Law (m = Z · I · t)",
    studentMistake: "Plugging time in minutes or hours directly into Q = I · t.",
    actualFact: "Current is in Amperes (Coulombs per second). Therefore, time t MUST strictly be in SECONDS! (1 minute = 60 s; 1 hour = 3600 s).",
    neetRule: "1 Ampere = 1 Coulomb/second. Always multiply time by 60 for minutes or 3600 for hours."
  }
];

export const ELECTROCHEMISTRY_SELF_TEST_MCQS: PracticeQuestion[] = [
  {
    questionId: "mcq-ec-1",
    topicId: "chem-galvanic-cells-nernst",
    question: "For the cell reaction: 2Fe³⁺(aq) + 2I⁻(aq) → 2Fe²⁺(aq) + I₂(s), the standard cell potential E°_cell = 0.236 V at 298 K. The standard Gibbs energy change (Δ_r G°) of the cell reaction is (F = 96500 C mol⁻¹):",
    options: [
      "-45.55 kJ mol⁻¹",
      "-22.77 kJ mol⁻¹",
      "+45.55 kJ mol⁻¹",
      "-91.10 kJ mol⁻¹"
    ],
    correctAnswerIndex: 0,
    explanation: "From the balanced redox reaction: 2Fe³⁺ + 2e⁻ → 2Fe²⁺ and 2I⁻ → I₂ + 2e⁻, the number of transferred electrons n = 2.\nΔ_r G° = -n F E°_cell = - (2) × (96500 C mol⁻¹) × (0.236 V) = - 45,548 J mol⁻¹ = - 45.55 kJ mol⁻¹.",
    difficulty: "Medium",
    conceptTested: "Standard Gibbs Free Energy Calculation from E°cell"
  },
  {
    questionId: "mcq-ec-2",
    topicId: "chem-galvanic-cells-nernst",
    question: "The reduction potentials of four elements A, B, C, and D are: E°(A⁺/A) = -2.93 V, E°(B⁺/B) = -0.76 V, E°(C⁺/C) = +0.80 V, E°(D⁺/D) = +0.34 V. The correct order of their reducing power is:",
    options: [
      "A > B > D > C",
      "C > D > B > A",
      "A > B > C > D",
      "D > C > B > A"
    ],
    correctAnswerIndex: 0,
    explanation: "Reducing power is inversely proportional to standard reduction potential (E°_red). The more negative (lower) the reduction potential, the greater the tendency of the element to lose electrons (get oxidized) and therefore act as a stronger reducing agent.\nE°: A (-2.93 V) < B (-0.76 V) < D (+0.34 V) < C (+0.80 V).\nTherefore, Reducing Power order: A > B > D > C.",
    difficulty: "Easy",
    conceptTested: "Electrochemical Series & Reducing Power Trends"
  },
  {
    questionId: "mcq-ec-3",
    topicId: "chem-galvanic-cells-nernst",
    question: "A hydrogen gas electrode is made by dipping platinum wire in a solution of HCl of pH = 3 and by passing hydrogen gas around the platinum wire at 1 atm pressure. The potential of the electrode at 298 K will be:",
    options: [
      "-0.177 V",
      "+0.177 V",
      "-0.059 V",
      "+0.059 V"
    ],
    correctAnswerIndex: 0,
    explanation: "For the hydrogen electrode reduction: H⁺(aq) + e⁻ → 1/2 H₂(g).\nE(H⁺/H₂) = E° - (0.0591 / 1) log₁₀(1 / [H⁺]) = 0 - 0.0591 × pH.\nGiven pH = 3: E = -0.0591 × 3 = -0.1773 V ≈ -0.177 V.",
    difficulty: "Easy",
    conceptTested: "Hydrogen Electrode Potential Dependence on pH"
  },
  {
    questionId: "mcq-ec-4",
    topicId: "chem-molar-conductance",
    question: "Which of the following statements is TRUE regarding the effect of dilution on conductance, specific conductivity (κ), and molar conductivity (Λ_m)?",
    options: [
      "Conductance and molar conductivity increase, but specific conductivity decreases on dilution.",
      "Conductance, specific conductivity, and molar conductivity all increase on dilution.",
      "Specific conductivity increases, but molar conductivity decreases on dilution.",
      "Both specific conductivity and molar conductivity decrease on dilution."
    ],
    correctAnswerIndex: 0,
    explanation: "On dilution:\n1. Total conductance (G) increases because ions dissociate more and move faster.\n2. Specific conductivity (κ) DECREASES because the number of current-carrying ions per unit volume (per cm³) decreases.\n3. Molar conductivity (Λ_m = 1000κ/M) INCREASES because the large increase in solution volume V overcomes the decrease in κ.",
    difficulty: "Easy",
    conceptTested: "Effect of Dilution on Conductance and Conductivity"
  },
  {
    questionId: "mcq-ec-5",
    topicId: "chem-molar-conductance",
    question: "The limiting molar conductivities (Λ°_m) of Ba(OH)₂, BaCl₂, and NH₄Cl are 523.28, 280.0, and 129.8 S cm² mol⁻¹ respectively. The limiting molar conductivity of NH₄OH in S cm² mol⁻¹ is:",
    options: [
      "251.44",
      "502.88",
      "373.08",
      "125.72"
    ],
    correctAnswerIndex: 0,
    explanation: "According to Kohlrausch's law of independent migration of ions:\nΛ°_m(NH₄OH) = λ°(NH₄⁺) + λ°(OH⁻)\nWe can write:\nΛ°_m(NH₄OH) = Λ°_m(NH₄Cl) + 1/2 · Λ°_m(Ba(OH)₂) - 1/2 · Λ°_m(BaCl₂)\nΛ°_m(NH₄OH) = 129.8 + (523.28 / 2) - (280.0 / 2)\nΛ°_m(NH₄OH) = 129.8 + 261.64 - 140.0 = 391.44 - 140.0 = 251.44 S cm² mol⁻¹.",
    difficulty: "Medium",
    conceptTested: "Kohlrausch's Law for Polyvalent Weak Bases"
  },
  {
    questionId: "mcq-ec-6",
    topicId: "chem-electrolysis-batteries",
    question: "The number of Faradays (F) of electricity required to produce 20 g of calcium from molten CaCl₂ (Atomic mass of Ca = 40 g mol⁻¹) is:",
    options: [
      "1 F",
      "2 F",
      "0.5 F",
      "4 F"
    ],
    correctAnswerIndex: 0,
    explanation: "Cathode reduction: Ca²⁺ + 2e⁻ → Ca(s).\n1 mole of Ca (40 g) requires 2 moles of electrons = 2 Faradays (2 F).\nTo deposit 20 g of Ca (which is 20/40 = 0.5 moles):\nRequired electricity = 0.5 mol × 2 F/mol = 1.0 Faraday (1 F).",
    difficulty: "Easy",
    conceptTested: "Faraday's First Law Quantitative Stoichiometry"
  },
  {
    questionId: "mcq-ec-7",
    topicId: "chem-electrolysis-batteries",
    question: "During the discharge of a lead storage battery, which of the following chemical transformations takes place?",
    options: [
      "Both Pb and PbO₂ are converted into PbSO₄(s), and H₂SO₄ is consumed.",
      "PbSO₄ is converted into Pb at the anode and PbO₂ at the cathode.",
      "Density of H₂SO₄ increases due to formation of SO₄²⁻ ions.",
      "Lead is oxidized to PbO₂ at the anode."
    ],
    correctAnswerIndex: 0,
    explanation: "During the discharging process of a lead storage accumulator:\nAnode: Pb(s) + SO₄²⁻(aq) → PbSO₄(s) + 2e⁻\nCathode: PbO₂(s) + SO₄²⁻(aq) + 4H⁺(aq) + 2e⁻ → PbSO₄(s) + 2H₂O(l)\nNet: Pb(s) + PbO₂(s) + 2H₂SO₄(aq) → 2PbSO₄(s) + 2H₂O(l).\nBoth electrodes get coated with white insoluble PbSO₄(s), H₂SO₄ is consumed, and the density of H₂SO₄ drops below 1.20 g/cm³.",
    difficulty: "Easy",
    conceptTested: "Lead Storage Battery Discharging Reactions"
  },
  {
    questionId: "mcq-ec-8",
    topicId: "chem-electrolysis-batteries",
    question: "Why is zinc used for the sacrificial cathodic protection (galvanization) of iron against rusting even though zinc is more reactive than iron?",
    options: [
      "Zinc has a more negative standard reduction potential (E° = -0.76 V) than iron (E° = -0.44 V) and oxidizes preferentially.",
      "Zinc has a more positive standard reduction potential than iron.",
      "Zinc forms a volatile oxide that evaporates away.",
      "Zinc absorbs all atmospheric moisture preventing iron from getting wet."
    ],
    correctAnswerIndex: 0,
    explanation: "Standard reduction potentials are: E°(Zn²⁺/Zn) = -0.76 V and E°(Fe²⁺/Fe) = -0.44 V. Because zinc has a more negative reduction potential (higher oxidation potential), zinc acts as a stronger reducing agent and oxidizes preferentially (sacrificially) to Zn²⁺, supplying electrons to prevent iron from ionizing even if the outer coating is scratched.",
    difficulty: "Easy",
    conceptTested: "Electrochemical Theory of Corrosion & Galvanization"
  }
];
