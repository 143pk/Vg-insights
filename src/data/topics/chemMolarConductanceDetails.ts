import { DetailedTopicContent } from '../../types/neet';
import {
  CONDUCTIVITY_CELL_DIAGRAM,
  KOHLRAUSCH_LAW_GRAPH_DIAGRAM
} from '../electrochemistry/electrochemistryDiagrams';
import { ELECTROCHEMISTRY_VERIFIED_PYQS } from '../electrochemistry/electrochemistryPyqs';

export const chemMolarConductanceDetails: DetailedTopicContent = {
  topicId: "chem-molar-conductance",
  topicName: "Electrolytic Conductance & Kohlrausch's Law",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Physical Chemistry (Class 12)",
  chapter: "Electrochemistry",

  whatIsThisTopic: "Electrolytic resistance and conductance, specific conductivity (κ), cell constant (G*), measurement of conductivity using AC Wheatstone bridge, molar conductivity (Λ_m), variation of conductivity and molar conductivity with dilution, Debye-Hückel-Onsager equation for strong electrolytes, Kohlrausch's Law of independent migration of ions, and quantitative applications (degree of dissociation α, dissociation constant Ka, and solubility product Ksp of sparingly soluble salts).",

  basicIdea: [
    "Electrolytic Conductance (G = 1/R) is the reciprocal of resistance, measured in Siemens (S = Ω⁻¹). Unlike metals, electrolytic conductance increases with temperature due to reduced solvent viscosity and higher ionic mobilities.",
    "Specific Conductivity (κ = G · G*) is the conductance of 1 cm³ (or 1 m³) of electrolytic solution. Cell constant G* = l / A = R · κ.",
    "Conductivity (κ) ALWAYS DECREASES upon dilution for both strong and weak electrolytes because the number of current-carrying ions per unit volume decreases.",
    "Molar Conductivity (Λ_m = 1000 · κ / M) is the conducting power of all ions produced by 1 mole of electrolyte. Λ_m ALWAYS INCREASES upon dilution.",
    "For strong electrolytes, Λ_m increases linearly with √c according to the Debye-Hückel-Onsager equation: Λ_m = Λ°_m - A√c. The limiting molar conductivity Λ°_m can be found by linear extrapolation to c = 0.",
    "For weak electrolytes, Λ_m surges non-linearly at infinite dilution (cannot be extrapolated). Kohlrausch's Law must be used: Λ°_m(A_x B_y) = x λ°(Aⁿ⁺) + y λ°(Bᵐ⁻).",
    "Degree of dissociation for weak electrolyte: α = Λ_m / Λ°_m, and dissociation constant K_a = (c · α²) / (1 - α)."
  ],

  importantTerms: [
    {
      term: "Electrolytic Conductance (G)",
      symbol: "G",
      unit: "Siemens (S) or ohm⁻¹ (Ω⁻¹ / mho)",
      formula: "G = \\frac{1}{R}",
      definition: "The ease with which electric current is carried through an electrolytic solution via the physical migration of solvated cations and anions.",
      neetNote: "Increases with rising temperature due to decreased solvent viscosity and higher ion dissociation/velocity."
    },
    {
      term: "Conductivity / Specific Conductance (κ)",
      symbol: "\\kappa \\text{ (kappa)}",
      unit: "S cm⁻¹ or S m⁻¹ (1 S cm⁻¹ = 100 S m⁻¹)",
      formula: "\\kappa = \\frac{1}{R} \\cdot \\frac{l}{A} = G \\cdot G*",
      definition: "The conductance of a solution of 1 cm (or 1 m) length with a cross-sectional area of 1 cm² (or 1 m²).",
      neetNote: "Crucial rule: κ ALWAYS decreases on dilution for ALL electrolytes because the concentration of ions per unit volume decreases."
    },
    {
      term: "Cell Constant (G*)",
      symbol: "G*",
      unit: "cm⁻¹ or m⁻¹ (1 cm⁻¹ = 100 m⁻¹)",
      formula: "G* = \\frac{l}{A} = R \\cdot \\kappa",
      definition: "The fixed geometric ratio of the distance between the two parallel platinized platinum electrodes (l) to their cross-sectional plate area (A).",
      neetNote: "Calibrated experimentally using a standard 0.1 M or 0.01 M KCl reference solution of known conductivity."
    },
    {
      term: "Molar Conductivity (Λm)",
      symbol: "\\Lambda_m",
      unit: "S cm² mol⁻¹ (1 S m² mol⁻¹ = 10⁴ S cm² mol⁻¹)",
      formula: "\\Lambda_m = \\frac{1000 \\cdot \\kappa}{\\text{Molarity } (M)}",
      definition: "The conducting power of all the ions produced by dissolving one mole of an electrolyte in a given volume V of solution.",
      neetNote: "Λ_m ALWAYS increases on dilution because the expansion in solution volume V overcomes the decrease in specific conductivity κ."
    },
    {
      term: "Limiting Molar Conductivity (Λ°m)",
      symbol: "\\Lambda°_m",
      unit: "S cm² mol⁻¹",
      definition: "The molar conductivity of an electrolytic solution at infinite dilution (as concentration c approaches zero), where inter-ionic attractions become zero.",
      neetNote: "Obtained by linear extrapolation for strong electrolytes; obtained via Kohlrausch's law for weak electrolytes."
    },
    {
      term: "Debye-Hückel-Onsager Equation",
      formula: "\\Lambda_m = \\Lambda°_m - A \\sqrt{c}",
      definition: "Empirical relationship for strong electrolytes showing linear variation of molar conductivity with square root of molar concentration (c). The constant A depends on electrolyte valency type, solvent, and temperature.",
      neetNote: "Plot of Λ_m vs √c gives y-intercept = Λ°_m and slope = -A."
    },
    {
      term: "Kohlrausch's Law of Independent Migration of Ions",
      formula: "\\Lambda°_m(A_x B_y) = x \\lambda°(A^{y+}) + y \\lambda°(B^{x-})",
      definition: "At infinite dilution, each individual ion makes a definite and independent contribution to the total limiting molar conductivity of the electrolyte, regardless of the chemical nature of the counter-ion.",
      neetNote: "Used to determine Λ°_m of weak acids (CH₃COOH) from salts: Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl)."
    },
    {
      term: "Degree of Dissociation (α) & Dissociation Constant (Ka)",
      formula: "\\alpha = \\frac{\\Lambda_m}{\\Lambda°_m} \\quad \\text{and} \\quad K_a = \\frac{c \\alpha^2}{1 - \\alpha}",
      definition: "Quantitative measure of the fraction of weak electrolyte dissociated into ions at concentration c, and the resulting equilibrium acid dissociation constant.",
      neetNote: "Valid only for weak electrolytes (e.g. acetic acid, ammonium hydroxide)."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Electrolytic Resistance, Conductance & Measurement via Wheatstone Bridge",
      paragraphs: [
        "Electrolytic conduction involves the physical transport of matter as hydrated cations and anions migrate under an applied electric field. According to Ohm's law, the resistance R of an electrolytic column is directly proportional to its length l and inversely proportional to its cross-sectional area A: R = ρ · (l / A).",
        "The reciprocal of resistance is Conductance (G = 1/R, in Siemens S), and the reciprocal of resistivity ρ is Specific Conductivity (κ = 1/ρ = G · G*, in S cm⁻¹ or S m⁻¹). The quantity G* = l / A is the Cell Constant.",
        "Measuring Electrolytic Resistance (NCERT Experimental Technique): Measuring the resistance of an ionic solution presents two fundamental experimental hurdles:",
        "Problem 1: Passing Direct Current (DC) causes chemical electrolysis and electrode polarization, altering the solution concentration.",
        "Solution 1: An Alternating Current (AC) source in the audio frequency range (500–5000 Hz) is used instead of DC, eliminating polarization.",
        "Problem 2: An ionic solution cannot be connected directly like a metallic wire to a Wheatstone bridge.",
        "Solution 2: The solution is contained in a specially designed Conductivity Cell with fixed platinized platinum plates. A detector (earphone or magic eye) replaces the galvanometer on the AC Wheatstone bridge."
      ],
      visual: {
        type: 'svg',
        svgContent: CONDUCTIVITY_CELL_DIAGRAM,
        caption: "Standard Conductivity Cell & AC Wheatstone Bridge setup for precision electrolytic resistance and conductivity determination.",
        guide: "Observe the parallel platinized platinum electrodes of cross-sectional area A separated by fixed distance l. The cell constant G* = l/A is calibrated using standard 0.1 M KCl reference solution."
      },
      importantPoints: [
        "Formula chain: G = 1/R;  κ = G · G* = (1/R) · (l/A);  G* = R · κ.",
        "Why AC is used: Direct current causes electrolysis and electrode polarization; AC reverses polarity continuously to prevent chemical changes.",
        "Platinized platinum foil: Platinum black coating increases the effective surface area and reduces capacitive polarization reactance.",
        "Temperature effect: Electrolytic conductance INCREASES with temperature (unlike metals, where conductance decreases with temperature due to lattice thermal vibrations)."
      ]
    },
    {
      heading: "2. Molar Conductivity (Λm) & Variation with Concentration (Dilution)",
      paragraphs: [
        "Molar Conductivity (Λ_m) is defined as the conducting power of all the ions produced by dissolving one mole of an electrolyte in solution. Mathematically: Λ_m = (1000 · κ) / M when κ is in S cm⁻¹ and M is molarity in mol L⁻¹.",
        "Effect of Dilution on Specific Conductivity (κ): As any solution is diluted, the total number of ions per unit volume (per cm³ or per mL) DECREASES. Therefore, specific conductivity (κ) ALWAYS DECREASES with dilution for both strong and weak electrolytes.",
        "Effect of Dilution on Molar Conductivity (Λ_m): Molar conductivity represents the conductance of 1 mole of electrolyte contained in a total volume V = 1000 / M. Although κ decreases upon dilution, the solution volume V containing 1 mole increases at a much faster rate. Therefore, Molar Conductivity (Λ_m = κ · V) ALWAYS INCREASES upon dilution.",
        "Strong Electrolytes (e.g., KCl, NaCl, HCl): Completely ionized at all concentrations. Dilution increases the inter-ionic distance, weakening Debye-Hückel inter-ionic retarding forces (electrophoretic effect and relaxation effect), allowing ions to migrate faster. Λ_m increases linearly with √c according to the Debye-Hückel-Onsager equation: Λ_m = Λ°_m - A√c.",
        "Weak Electrolytes (e.g., CH₃COOH, NH₄OH): Poorly ionized at moderate concentrations (α ≈ 1–5%). Dilution causes a steep, non-linear increase in degree of dissociation α (Ostwald's Dilution Law). At infinite dilution, α → 1.0, causing an asymptotic vertical surge in Λ_m. Consequently, Λ°_m of weak electrolytes CANNOT be determined by extrapolation to c = 0."
      ],
      visual: {
        type: 'svg',
        svgContent: KOHLRAUSCH_LAW_GRAPH_DIAGRAM,
        caption: "Debye-Hückel-Onsager plot of Molar Conductivity (Λ_m) vs Square Root of Concentration (√c) comparing Strong Electrolyte (KCl) and Weak Electrolyte (CH₃COOH).",
        guide: "Notice the linear Debye-Hückel-Onsager plot for KCl (slope = -A, intercept = Λ°_m). In stark contrast, CH₃COOH exhibits a steep asymptotic curve near c → 0 that never intercepts the y-axis, proving why Kohlrausch's law is essential for weak electrolytes."
      },
      importantPoints: [
        "Summary Table of Dilution Effects:",
        "• Specific Conductivity (κ): DECREASES for both strong and weak electrolytes.",
        "• Molar Conductivity (Λ_m): INCREASES for both strong and weak electrolytes.",
        "• Equivalent Conductivity (Λ_eq): INCREASES for both strong and weak electrolytes.",
        "Debye-Hückel-Onsager constant A: Depends on electrolyte valency type (1-1 type like NaCl/KCl, 2-1 type like CaCl₂, 2-2 type like MgSO₄), solvent viscosity, dielectric constant, and temperature."
      ]
    },
    {
      heading: "3. Kohlrausch's Law of Independent Migration & Its Applications",
      paragraphs: [
        "Friedrich Kohlrausch (1875) systematically analyzed the limiting molar conductivities of series of strong electrolytes with common ions (e.g. [Λ°_m(KCl) - Λ°_m(NaCl)] = [Λ°_m(KBr) - Λ°_m(NaBr)] = 23.4 S cm² mol⁻¹). He concluded that at infinite dilution, each ion contributes independently to the total conductance.",
        "Kohlrausch's Law: At infinite dilution, when dissociation is complete and inter-ionic interactions vanish, each constituent ion makes a definite, independent contribution to the total limiting molar conductivity of the electrolyte, irrespective of the nature of the co-ion.",
        "Mathematical formulation: Λ°_m(A_x B_y) = x · λ°(Aⁿ⁺) + y · λ°(Bᵐ⁻), where x and y are the numbers of cations and anions per formula unit, and λ° are individual limiting ionic molar conductivities.",
        "Application 1: Calculation of Λ°_m for Weak Electrolytes: Since weak electrolytes (CH₃COOH) cannot be extrapolated, their Λ°_m is computed algebraically by combining Λ°_m values of suitable strong electrolytes: Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl).",
        "Application 2: Calculation of Degree of Dissociation (α) and Dissociation Constant (Ka): For a weak monobasic acid: α = Λ_m / Λ°_m  and  K_a = (c · α²) / (1 - α) = [c · (Λ_m / Λ°_m)²] / [1 - (Λ_m / Λ°_m)].",
        "Application 3: Determination of Solubility (S) and Solubility Product (Ksp) of Sparingly Soluble Salts (e.g. AgCl, BaSO₄): In a saturated solution of a sparingly soluble salt, the solution is so dilute that concentration equals solubility S, and Λ_m equals Λ°_m: S = (1000 · κ_salt) / Λ°_m(salt), where κ_salt = κ_solution - κ_water. For 1:1 salt AgCl, K_sp = S²."
      ],
      importantPoints: [
        "Kohlrausch formula for salts: e.g. For Al₂(SO₄)₃: Λ°_m = 2 λ°(Al³⁺) + 3 λ°(SO₄²⁻).",
        "Degree of dissociation formula: α = Λ_m / Λ°_m (where Λ_m is measured at concentration c, and Λ°_m is from Kohlrausch's law).",
        "Ostwald's Dilution Law: K_a = [c · α²] / [1 - α]. If α < 0.05 (5%), approximate to K_a ≈ c · α².",
        "Sparingly Soluble Salt Solubility: S (in mol L⁻¹) = (1000 · κ_salt) / Λ°_m."
      ]
    }
  ],

  formulae: [
    {
      title: "Conductivity (Specific Conductance)",
      formula: "\\kappa = G \\cdot G* = \\frac{1}{R} \\cdot \\left( \\frac{l}{A} \\right)",
      meaning: "Relates measured resistance and cell constant to specific conductivity.",
      symbols: "κ = conductivity (S cm⁻¹ or S m⁻¹); R = resistance (Ω); G* = cell constant = l/A (cm⁻¹ or m⁻¹).",
      unit: "S cm⁻¹ or S m⁻¹",
      conditions: "Uniform current density between parallel planar electrodes.",
      whenToUse: "Use to calculate solution conductivity from bridge resistance."
    },
    {
      title: "Molar Conductivity (Λm)",
      formula: "\\Lambda_m = \\frac{1000 \\cdot \\kappa}{\\text{Molarity } (M)} \\text{ (in S cm}^2\\text{ mol}^{-1}\\text{)}",
      meaning: "Conductance of 1 mole of electrolyte dissolved in volume V.",
      symbols: "κ in S cm⁻¹; M in mol L⁻¹; Λ_m in S cm² mol⁻¹.",
      unit: "S cm² mol⁻¹ (or S m² mol⁻¹ where Λ_m = κ / (1000 · M))",
      conditions: "Applicable to all electrolytic solutions at any concentration.",
      whenToUse: "Use to find molar conductivity from measured specific conductivity and molarity."
    },
    {
      title: "Debye-Hückel-Onsager Equation",
      formula: "\\Lambda_m = \\Lambda°_m - A \\sqrt{c}",
      meaning: "Linear concentration dependence of molar conductivity for strong electrolytes.",
      symbols: "Λ°_m = Limiting molar conductivity; A = Onsager constant; c = molar concentration.",
      unit: "S cm² mol⁻¹",
      conditions: "Dilute solutions of strong electrolytes (c ≤ 0.1 M).",
      whenToUse: "Use to find Λ°_m by linear extrapolation of Λ_m vs √c to c = 0."
    },
    {
      title: "Kohlrausch's Law of Independent Migration",
      formula: "\\Lambda°_m(A_x B_y) = x \\cdot \\lambda°(A^{y+}) + y \\cdot \\lambda°(B^{x-})",
      meaning: "Limiting molar conductivity is the stoichiometric sum of individual limiting ionic conductivities.",
      symbols: "x, y = number of cations and anions per formula unit; λ° = limiting ionic molar conductivities.",
      unit: "S cm² mol⁻¹",
      conditions: "Infinite dilution (c → 0).",
      whenToUse: "Use to compute Λ°_m for weak electrolytes and sparingly soluble salts."
    },
    {
      title: "Degree of Dissociation (α) and Acid Dissociation Constant (Ka)",
      formula: "\\alpha = \\frac{\\Lambda_m}{\\Lambda°_m} \\quad \\text{and} \\quad K_a = \\frac{c \\alpha^2}{1 - \\alpha} = \\frac{c (\\Lambda_m / \\Lambda°_m)^2}{1 - (\\Lambda_m / \\Lambda°_m)}",
      meaning: "Calculates the fraction of dissociation and equilibrium acid dissociation constant.",
      symbols: "α = degree of dissociation (0 < α < 1); c = molar concentration; K_a in mol L⁻¹.",
      unit: "α is dimensionless; K_a in mol L⁻¹",
      conditions: "Weak monobasic acids / weak monoacidic bases in dilute aqueous solutions.",
      whenToUse: "Use to calculate α and K_a from conductance measurements."
    },
    {
      title: "Solubility of Sparingly Soluble Salts",
      formula: "S = \\frac{1000 \\cdot (\\kappa_{\\text{solution}} - \\kappa_{\\text{water}})}{\\Lambda°_m(\\text{salt})}",
      meaning: "Calculates the molar solubility S (mol L⁻¹) of sparingly soluble salts like AgCl, BaSO₄.",
      symbols: "S = molar solubility (mol L⁻¹); κ_salt = corrected conductivity; Λ°_m = limiting molar conductivity.",
      unit: "mol L⁻¹",
      conditions: "Saturated solution at infinite dilution.",
      whenToUse: "Use to determine solubility and solubility product (K_sp = S² for 1:1 salts)."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: KOHLRAUSCH_LAW_GRAPH_DIAGRAM,
    caption: "Molar Conductivity vs √c Comparison: Strong Electrolyte (KCl) Linear Extrapolation vs Weak Electrolyte (CH₃COOH) Asymptotic Surge."
  },

  neetImportantPoints: [
    "Conductivity κ ALWAYS decreases on dilution because the number of current-carrying ions per unit volume decreases.",
    "Molar Conductivity Λ_m ALWAYS increases on dilution because the volume increase V = 1000/M overcomes the decrease in κ.",
    "For strong electrolytes, Λ°_m is determined by extrapolating the linear Λ_m vs √c plot to zero concentration.",
    "For weak electrolytes, Λ°_m CANNOT be determined by extrapolation; it MUST be determined via Kohlrausch's law.",
    "Formula for acetic acid: Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl).",
    "Formula for NH₄OH: Λ°_m(NH₄OH) = Λ°_m(NH₄Cl) + Λ°_m(NaOH) - Λ°_m(NaCl).",
    "In Wheatstone bridge, AC current is used to prevent chemical electrolysis and polarization; platinized platinum electrodes reduce capacitive reactance."
  ],

  commonConfusions: [
    {
      commonConfusion: "Believing that conductivity (κ) increases on dilution because ions become more free to move.",
      correctFact: "Conductivity (κ) is conductance per unit volume (1 cm³). On dilution, the number of ions present inside 1 cm³ decreases; therefore, κ ALWAYS DECREASES on dilution for all electrolytes.",
      whyItMattersForNEET: "A recurring NCERT direct statement question that traps many NEET aspirants."
    },
    {
      commonConfusion: "Attempting to find Λ°_m of weak electrolytes by Debye-Hückel extrapolation.",
      correctFact: "Weak electrolytes do not follow a linear Debye-Hückel-Onsager plot. The curve becomes asymptotically steep near zero concentration, making graphical extrapolation to the y-axis impossible. Kohlrausch's law must be used.",
      whyItMattersForNEET: "Frequently tested in Assertion-Reason questions."
    },
    {
      commonConfusion: "Mixing unit systems in Λ_m = (1000 · κ) / M.",
      correctFact: "When κ is in S cm⁻¹, multiply by 1000 to obtain Λ_m in S cm² mol⁻¹. If κ is in S m⁻¹ (SI units), Λ_m = κ / (1000 · M) in S m² mol⁻¹. Note: 1 S m² mol⁻¹ = 10⁴ S cm² mol⁻¹.",
      whyItMattersForNEET: "A power-of-10 unit conversion trap in numerical questions."
    }
  ],

  quickRevision: [
    "G = 1/R (Siemens, S).",
    "κ = G · G* = (1/R) · (l/A)  [S cm⁻¹ or S m⁻¹].",
    "Cell Constant G* = l/A = R · κ  [cm⁻¹ or m⁻¹].",
    "Molar Cond: Λ_m = (1000 · κ) / M  [S cm² mol⁻¹].",
    "Debye-Hückel-Onsager: Λ_m = Λ°_m - A√c  (Strong electrolytes).",
    "Kohlrausch's Law: Λ°_m = ν₊ λ°₊ + ν₋ λ°₋.",
    "Degree of dissociation: α = Λ_m / Λ°_m.",
    "Dissociation constant: K_a = (c · α²) / (1 - α).",
    "Sparingly Soluble Salt: S = (1000 · κ) / Λ°_m."
  ],

  practiceQuestions: [
    {
      questionId: "prac-cond-1",
      topicId: "chem-molar-conductance",
      question: "The resistance of a 0.01 M KCl solution in a conductivity cell is 300 Ω. If the cell constant is 0.60 cm⁻¹, the molar conductivity of the solution is:",
      options: [
        "200 S cm² mol⁻¹",
        "20 S cm² mol⁻¹",
        "2.0 S cm² mol⁻¹",
        "2000 S cm² mol⁻¹"
      ],
      correctAnswerIndex: 0,
      explanation: "Conductivity κ = G* / R = 0.60 cm⁻¹ / 300 Ω = 0.0020 S cm⁻¹ = 2.0 × 10⁻³ S cm⁻¹.\nMolar conductivity Λ_m = (1000 × κ) / M = (1000 × 2.0 × 10⁻³) / 0.01 = 2.0 / 0.01 = 200 S cm² mol⁻¹.",
      difficulty: "Easy",
      conceptTested: "Molar Conductivity Calculation from Resistance & Cell Constant"
    },
    {
      questionId: "prac-cond-2",
      topicId: "chem-molar-conductance",
      question: "The limiting molar conductivities of KCl, KNO₃, and AgNO₃ at 298 K are 149.9, 145.0, and 133.4 S cm² mol⁻¹ respectively. The limiting molar conductivity (Λ°_m) of AgCl is:",
      options: [
        "138.3 S cm² mol⁻¹",
        "161.5 S cm² mol⁻¹",
        "128.5 S cm² mol⁻¹",
        "141.5 S cm² mol⁻¹"
      ],
      correctAnswerIndex: 0,
      explanation: "By Kohlrausch's law:\nΛ°_m(AgCl) = Λ°_m(AgNO₃) + Λ°_m(KCl) - Λ°_m(KNO₃)\nΛ°_m(AgCl) = 133.4 + 149.9 - 145.0 = 283.3 - 145.0 = 138.3 S cm² mol⁻¹.",
      difficulty: "Easy",
      conceptTested: "Kohlrausch's Law Combination for Sparingly Soluble Salt"
    },
    {
      questionId: "prac-cond-3",
      topicId: "chem-molar-conductance",
      question: "For a weak acid HA, the molar conductivity at 0.025 M is 19.5 S cm² mol⁻¹. If the limiting molar conductivity Λ°_m(HA) is 390 S cm² mol⁻¹, what is the value of K_a?",
      options: [
        "6.58 × 10⁻⁵ mol L⁻¹",
        "1.25 × 10⁻⁴ mol L⁻¹",
        "3.25 × 10⁻⁵ mol L⁻¹",
        "1.32 × 10⁻⁴ mol L⁻¹"
      ],
      correctAnswerIndex: 0,
      explanation: "Step 1: α = Λ_m / Λ°_m = 19.5 / 390 = 0.05 (5%).\nStep 2: K_a = [c · α²] / [1 - α] = [0.025 × (0.05)²] / [1 - 0.05] = [0.025 × 0.0025] / 0.95 = 6.25 × 10⁻⁵ / 0.95 = 6.579 × 10⁻⁵ ≈ 6.58 × 10⁻⁵ mol L⁻¹.",
      difficulty: "Medium",
      conceptTested: "Degree of Dissociation & Ka Calculation"
    }
  ],

  pyqs: ELECTROCHEMISTRY_VERIFIED_PYQS.filter(q => q.topicId === "chem-molar-conductance")
};
