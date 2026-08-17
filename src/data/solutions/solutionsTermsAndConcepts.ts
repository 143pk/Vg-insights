// Master terms, comparison tables, conceptual Q&A, and in-depth explanations for Solutions (NEET UG 2026)

export interface SolutionTerm {
  term: string;
  definition: string;
  formula?: string;
  unit?: string;
  neetNote: string;
}

export interface ComparisonTable {
  id: string;
  title: string;
  headers: string[];
  rows: string[][];
  neetTakeaway: string;
}

export interface SolvedConversionExample {
  id: string;
  title: string;
  given: string;
  asked: string;
  conceptAndFormula: string;
  stepByStep: string[];
  finalAnswer: string;
  neetTip: string;
}

export const SOLUTIONS_IMPORTANT_TERMS: SolutionTerm[] = [
  {
    term: "Solution (Binary)",
    definition: "A homogeneous mixture of two chemical components where particles are of molecular size (< 1 nm) and properties are completely uniform throughout.",
    neetNote: "Consists of exactly one solute (minor component) and one solvent (major component). Always exists in a single thermodynamic phase."
  },
  {
    term: "Solute vs Solvent",
    definition: "The solute is the component present in smaller proportion or dissolved in the solvent. The solvent determines the physical state of the solution and is present in larger amount.",
    neetNote: "In aqueous solutions, water is always considered the solvent regardless of its relative mass."
  },
  {
    term: "Mass Percentage (% w/w)",
    definition: "Mass of solute in grams dissolved per 100 grams of total solution.",
    formula: "\\text{Mass \\%} = \\frac{\\text{Mass of solute}}{\\text{Mass of solution}} \\times 100",
    unit: "Dimensionless (%)",
    neetNote: "Temperature independent because mass does not change with thermal expansion."
  },
  {
    term: "Volume Percentage (% v/v)",
    definition: "Volume of liquid solute dissolved per 100 units volume of total solution.",
    formula: "\\text{Volume \\%} = \\frac{\\text{Volume of solute}}{\\text{Volume of solution}} \\times 100",
    unit: "Dimensionless (%)",
    neetNote: "Temperature dependent due to thermal expansion of liquids. Commonly used for liquid-liquid mixtures (e.g. 35% ethylene glycol antifreeze)."
  },
  {
    term: "Molarity (M)",
    definition: "The number of moles of solute dissolved in 1 Litre (1000 mL) of total solution.",
    formula: "M = \\frac{n_\\text{solute}}{V_\\text{solution} \\text{ (in L)}} = \\frac{w_2 \\times 1000}{M_2 \\times V_\\text{mL}}",
    unit: "\\text{mol L}^{-1} \\text{ (or Molar, M)}",
    neetNote: "Temperature DEPENDENT! As temperature increases, volume V increases, so Molarity decreases."
  },
  {
    term: "Molality (m)",
    definition: "The number of moles of solute dissolved in 1 kilogram (1000 g) of pure solvent.",
    formula: "m = \\frac{n_\\text{solute}}{w_\\text{solvent} \\text{ (in kg)}} = \\frac{w_2 \\times 1000}{M_2 \\times w_1 \\text{ (in g)}}",
    unit: "\\text{mol kg}^{-1} \\text{ (or molal, m)}",
    neetNote: "Temperature INDEPENDENT! Denominator uses MASS OF SOLVENT ONLY, never mass of solution."
  },
  {
    term: "Mole Fraction (x)",
    definition: "Ratio of the number of moles of a specific component to the total number of moles of all components present in the mixture.",
    formula: "x_A = \\frac{n_A}{n_A + n_B}, \\quad x_A + x_B = 1",
    unit: "Dimensionless",
    neetNote: "Sum of mole fractions of all components is always exactly equal to 1. Temperature independent."
  },
  {
    term: "Vapour Pressure",
    definition: "The pressure exerted by the vapour in dynamic equilibrium with its liquid phase at a specific constant temperature in a closed vessel.",
    formula: "\\ln\\left(\\frac{P_2}{P_1}\\right) = \\frac{\\Delta H_\\text{vap}}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)",
    unit: "\\text{mm Hg, torr, atm, or Pa}",
    neetNote: "Depends ONLY on temperature and nature of the liquid (intermolecular forces). Independent of container shape, surface area, or volume of liquid."
  },
  {
    term: "Raoult's Law (Volatile Liquids)",
    definition: "For a solution of volatile liquids, the partial vapour pressure of each component at a given temperature is directly proportional to its mole fraction in the liquid phase.",
    formula: "p_A = x_A p_A^\\circ, \\quad p_B = x_B p_B^\\circ, \\quad p_\\text{total} = x_A p_A^\\circ + x_B p_B^\\circ",
    unit: "\\text{mm Hg or torr}",
    neetNote: "In vapour phase, Dalton's law gives mole fractions: y_A = p_A / p_total, y_B = p_B / p_total."
  },
  {
    term: "Relative Lowering of Vapour Pressure (RLVP)",
    definition: "The ratio of the decrease in vapour pressure (p₁° - p₁) caused by dissolving a non-volatile solute to the vapour pressure of the pure solvent (p₁°).",
    formula: "\\frac{p_1^\\circ - p_1}{p_1^\\circ} = x_2 = \\frac{n_2}{n_1 + n_2} \\approx \\frac{w_2 M_1}{M_2 w_1}",
    unit: "Dimensionless",
    neetNote: "True colligative property because it equals the mole fraction of solute (x₂), depending solely on particle count."
  },
  {
    term: "Ideal Solution",
    definition: "A solution that obeys Raoult's law over the entire range of concentration, where solute-solvent interactions equal pure component interactions.",
    formula: "\\Delta H_\\text{mix} = 0, \\quad \\Delta V_\\text{mix} = 0, \\quad \\Delta S_\\text{mix} > 0, \\quad \\Delta G_\\text{mix} < 0",
    neetNote: "Examples: n-hexane + n-heptane, benzene + toluene, bromoethane + chloroethane."
  },
  {
    term: "Non-Ideal Solution (Positive Deviation)",
    definition: "A solution where solute-solvent (A-B) intermolecular attractive forces are weaker than A-A and B-B forces, leading to higher vapour pressure and lower boiling points.",
    formula: "p_A > x_A p_A^\\circ, \\quad \\Delta H_\\text{mix} > 0 \\text{ (endothermic)}, \\quad \\Delta V_\\text{mix} > 0",
    neetNote: "Forms MINIMUM boiling azeotropes (e.g. 95% ethanol + 5% water by volume; acetone + CS₂; acetone + ethanol)."
  },
  {
    term: "Non-Ideal Solution (Negative Deviation)",
    definition: "A solution where solute-solvent (A-B) intermolecular attractive forces are stronger than A-A and B-B forces (often due to new H-bonding), leading to lower vapour pressure.",
    formula: "p_A < x_A p_A^\\circ, \\quad \\Delta H_\\text{mix} < 0 \\text{ (exothermic)}, \\quad \\Delta V_\\text{mix} < 0",
    neetNote: "Forms MAXIMUM boiling azeotropes (e.g. 68% HNO₃ + 32% H₂O by mass, 20.2% HCl + 79.8% H₂O; chloroform + acetone)."
  },
  {
    term: "Azeotrope (Constant Boiling Mixture)",
    definition: "A binary liquid mixture having the same composition in both the liquid and vapour phases, boiling at a constant temperature without change in composition.",
    neetNote: "Cannot be separated into pure components by fractional distillation. Only non-ideal solutions with large deviations form azeotropes."
  },
  {
    term: "Colligative Properties",
    definition: "Properties of dilute solutions containing non-volatile solutes that depend solely on the number of solute particles (concentration) and not on their chemical nature.",
    neetNote: "The 4 official colligative properties: 1. RLVP, 2. Elevation of Boiling Point, 3. Depression of Freezing Point, 4. Osmotic Pressure."
  },
  {
    term: "Molal Elevation Constant (Kb / Ebullioscopic Constant)",
    definition: "The elevation in boiling point produced when 1 mole of a non-volatile non-electrolyte solute is dissolved in 1000 g (1 kg) of solvent (i.e. m = 1 mol/kg).",
    formula: "K_b = \\frac{R M_1 T_b^{\\circ 2}}{1000 \\Delta_\\text{vap} H}",
    unit: "\\text{K kg mol}^{-1} \\text{ (or } ^\\circ\\text{C kg mol}^{-1}\\text{)}",
    neetNote: "Depends ONLY on the nature of the solvent. For water, K_b = 0.52 K kg mol⁻¹."
  },
  {
    term: "Molal Depression Constant (Kf / Cryoscopic Constant)",
    definition: "The depression in freezing point produced when 1 mole of a non-volatile solute is dissolved in 1 kg of solvent (m = 1 mol/kg).",
    formula: "K_f = \\frac{R M_1 T_f^{\\circ 2}}{1000 \\Delta_\\text{fus} H}",
    unit: "\\text{K kg mol}^{-1}",
    neetNote: "Depends ONLY on the nature of the solvent. For water, K_f = 1.86 K kg mol⁻¹."
  },
  {
    term: "Osmotic Pressure (π)",
    definition: "The excess hydrostatic pressure that must be applied to the solution side to completely prevent the inward flow of pure solvent through a semipermeable membrane.",
    formula: "\\pi = C R T = \\frac{n_2 R T}{V} = \\frac{w_2 R T}{M_2 V}",
    unit: "\\text{atm, bar, or Pa}",
    neetNote: "Best method for determining molar masses of proteins, polymers, and biomolecules because it is measured at room temperature (preventing denaturation) and produces large, readable values even at low molar concentrations."
  },
  {
    term: "Reverse Osmosis (RO)",
    definition: "The phenomenon where pure solvent molecules are forced to flow from the concentrated solution into pure solvent through an SPM by applying an external pressure greater than the osmotic pressure (P > π).",
    neetNote: "Used in seawater desalination and household water purifiers using porous cellulose acetate membranes."
  },
  {
    term: "Isotonic Solutions",
    definition: "Two solutions having identical osmotic pressures (π₁ = π₂) at the same temperature across a semipermeable membrane, resulting in zero net osmosis.",
    formula: "C_1 = C_2 \\implies \\frac{w_1}{M_1 V_1} = \\frac{w_2}{M_2 V_2}",
    neetNote: "0.9% (m/V) NaCl solution (normal saline) is isotonic with human red blood cell (RBC) intracellular fluid."
  },
  {
    term: "Hypotonic vs Hypertonic Solutions",
    definition: "A hypotonic solution has lower osmotic pressure than cellular fluid (causes water to rush in → cell swells and bursts/haemolysis). A hypertonic solution has higher osmotic pressure (causes water to exit → cell shrinks/plasmolysis).",
    neetNote: "Salting meat/pickles and sweetening jams kills bacteria by hypertonic plasmolysis."
  },
  {
    term: "van't Hoff Factor (i)",
    definition: "The ratio of the experimentally observed colligative property to the theoretical colligative property calculated assuming no association or dissociation.",
    formula: "i = \\frac{\\text{Observed Colligative Property}}{\\text{Calculated Colligative Property}} = \\frac{\\text{Normal Molar Mass}}{\\text{Abnormal (Experimental) Molar Mass}} = \\frac{\\text{Total moles after reaction}}{\\text{Initial moles}}",
    unit: "Dimensionless",
    neetNote: "i > 1 for dissociation (ionic electrolytes); i < 1 for association (carboxylic acids in benzene); i = 1 for non-electrolytes (glucose, urea, sucrose)."
  },
  {
    term: "Degree of Dissociation (α)",
    definition: "The fraction of total electrolyte molecules that ionize into constituent ions in solution.",
    formula: "\\alpha = \\frac{i - 1}{n - 1} \\implies i = 1 + \\alpha(n - 1)",
    neetNote: "n is the number of ions produced per formula unit (e.g. NaCl: n=2; CaCl₂: n=3; K₄[Fe(CN)₆]: n=5; Al₂(SO₄)₃: n=5)."
  },
  {
    term: "Degree of Association (α)",
    definition: "The fraction of total solute molecules that combine to form polymeric or dimeric clusters in solution.",
    formula: "\\alpha = \\frac{1 - i}{1 - 1/n} \\implies i = 1 - \\alpha\\left(1 - \\frac{1}{n}\\right)",
    neetNote: "For dimerization (n = 2), i = 1 - α/2. For 100% dimerization (α = 1), i = 0.5, and observed molar mass is exactly 2 × normal molar mass."
  }
];

// All 8 Master Comparison Tables specified in the official prompt
export const SOLUTIONS_COMPARISON_TABLES: ComparisonTable[] = [
  // 1. Molarity vs Molality
  {
    id: "table-molarity-vs-molality",
    title: "1. Molarity (M) vs Molality (m)",
    headers: ["Parameter", "Molarity (M)", "Molality (m)"],
    rows: [
      ["Definition", "Moles of solute per Litre of solution", "Moles of solute per kilogram of solvent"],
      ["Formula", "M = n / V_solution (in L)", "m = n / w_solvent (in kg)"],
      ["SI / Practical Unit", "mol L⁻¹ (or M)", "mol kg⁻¹ (or m)"],
      ["Denominator Component", "Total volume of SOLUTION", "Mass of PURE SOLVENT only"],
      ["Effect of Temperature", "Changes with temperature (V increases with T, so M decreases)", "INDEPENDENT of temperature (mass is invariant)"],
      ["Measurement Ease in Lab", "Easier (measured using volumetric flasks/pipettes)", "Requires precise gravimetric weighing of solvent"],
      ["NEET Preference for Thermodynamics", "Avoided in Colligative properties (Kb, Kf)", "Strictly used in ΔTb and ΔTf equations"]
    ],
    neetTakeaway: "Trap Alert: In dilute aqueous solutions at 4°C, 1 L solution ≈ 1 kg solvent, so M ≈ m. But for non-aqueous or dense concentrated solutions, M and m differ substantially!"
  },

  // 2. Mass % vs Volume %
  {
    id: "table-mass-vs-volume-percent",
    title: "2. Mass Percentage (% w/w) vs Volume Percentage (% v/v)",
    headers: ["Parameter", "Mass Percentage (% w/w)", "Volume Percentage (% v/v)"],
    rows: [
      ["Definition", "(Mass of solute / Total mass of solution) × 100", "(Volume of solute / Total volume of solution) × 100"],
      ["Denominator", "Mass of Solute + Mass of Solvent", "Total Volume of Solution"],
      ["Typical Application", "Solid in liquid, industrial chemicals, commercial acids (e.g. 68% HNO₃)", "Liquid in liquid mixtures, automobile antifreeze (e.g. 35% v/v ethylene glycol)"],
      ["Temperature Dependence", "Independent of Temperature", "Dependent on Temperature (liquids expand unequally)"],
      ["Volume Additivity", "Strictly additive by mass conservation", "Volumes may NOT be strictly additive due to intermolecular contraction/expansion"]
    ],
    neetTakeaway: "To convert % w/w to % w/v or Molarity, the exact DENSITY (d in g/mL) of the solution MUST be provided: % w/v = (% w/w) × d."
  },

  // 3. Ideal vs Non-Ideal Solution
  {
    id: "table-ideal-vs-nonideal",
    title: "3. Ideal Solution vs Non-Ideal Solution",
    headers: ["Property", "Ideal Solution", "Non-Ideal Solution"],
    rows: [
      ["Obedience to Raoult's Law", "Obeys Raoult's law over the entire range of concentration and temperature", "Deviates from Raoult's law at moderate to high concentrations"],
      ["Intermolecular Forces", "F_A-B = F_A-A = F_B-B (Identical magnitude)", "F_A-B ≠ F_A-A or F_B-B (Weaker or stronger)"],
      ["Enthalpy of Mixing (ΔH_mix)", "ΔH_mix = 0 (Neither heat absorbed nor evolved)", "ΔH_mix ≠ 0 (Can be > 0 endothermic or < 0 exothermic)"],
      ["Volume Change of Mixing (ΔV_mix)", "ΔV_mix = 0 (Total volume = V_A + V_B)", "ΔV_mix ≠ 0 (Contraction or expansion occurs)"],
      ["Azeotrope Formation", "Never forms azeotropes (separated completely by fractional distillation)", "Forms minimum or maximum boiling azeotropes"],
      ["Classic Examples", "Benzene + Toluene; n-Hexane + n-Heptane; Bromoethane + Chloroethane", "Ethanol + Water (Positive); Acetone + Chloroform (Negative)"]
    ],
    neetTakeaway: "For both ideal and non-ideal solutions, mixing is always spontaneous: ΔS_mix > 0 and ΔG_mix < 0 always!"
  },

  // 4. Positive vs Negative Deviation from Raoult's Law
  {
    id: "table-positive-vs-negative-deviation",
    title: "4. Positive Deviation vs Negative Deviation",
    headers: ["Characteristic", "Positive Deviation (+ve)", "Negative Deviation (-ve)"],
    rows: [
      ["Intermolecular Forces", "A-B interactions are WEAKER than A-A and B-B", "A-B interactions are STRONGER than A-A and B-B"],
      ["Vapour Pressure", "p_A > x_A p_A°, p_B > x_B p_B°, p_total > (p_A + p_B)_ideal", "p_A < x_A p_A°, p_B < x_B p_B°, p_total < (p_A + p_B)_ideal"],
      ["Boiling Point Trend", "Boiling points are LOWER than ideal expectation", "Boiling points are HIGHER than ideal expectation"],
      ["Enthalpy Change (ΔH_mix)", "ΔH_mix > 0 (Endothermic: heat is absorbed, solution cools)", "ΔH_mix < 0 (Exothermic: heat is released, solution warms)"],
      ["Volume Change (ΔV_mix)", "ΔV_mix > 0 (Volume expands: V_obs > V_A + V_B)", "ΔV_mix < 0 (Volume contracts: V_obs < V_A + V_B)"],
      ["Azeotrope Formed", "MINIMUM Boiling Azeotrope (at intermediate composition)", "MAXIMUM Boiling Azeotrope (at intermediate composition)"],
      ["High-Yield NEET Examples", "Ethanol + Water (95.4%); Acetone + CS₂; Acetone + Ethanol; CCl₄ + Benzene", "Acetone + Chloroform (H-bonding); HNO₃ + H₂O (68%); HCl + H₂O (20.2%); Phenol + Aniline"]
    ],
    neetTakeaway: "Mnemonic: Weak A-B escape easily → High VP → Low Boiling Point (Min-boiling azeotrope) = Positive Deviation. Strong A-B trap molecules → Low VP → High Boiling Point (Max-boiling azeotrope) = Negative Deviation."
  },

  // 5. Boiling Point Elevation vs Freezing Point Depression
  {
    id: "table-boiling-vs-freezing",
    title: "5. Boiling Point Elevation (ΔTb) vs Freezing Point Depression (ΔTf)",
    headers: ["Feature", "Elevation of Boiling Point (ΔTb)", "Depression of Freezing Point (ΔTf)"],
    rows: [
      ["Phenomenon", "Solution boils at a HIGHER temperature than pure solvent", "Solution freezes at a LOWER temperature than pure solvent"],
      ["Thermodynamic Cause", "Solute lowers VP → Liquid requires higher T to make VP = 1 atm", "Solute lowers liquid VP → Intersects solid solvent VP at lower T"],
      ["Fundamental Formula", "ΔT_b = T_b - T_b° = i K_b m", "ΔT_f = T_f° - T_f = i K_f m"],
      ["Temperature Difference Order", "T_solution - T_solvent (positive value)", "T_solvent - T_solution (positive value)"],
      ["Constant Name", "K_b = Ebullioscopic constant (Molal elevation constant)", "K_f = Cryoscopic constant (Molal depression constant)"],
      ["Formula for Constant", "K_b = (R · M₁ · T_b°²) / (1000 · Δ_vap H)", "K_f = (R · M₁ · T_f°²) / (1000 · Δ_fus H)"],
      ["Water Values", "K_b(H₂O) = 0.52 K kg mol⁻¹", "K_f(H₂O) = 1.86 K kg mol⁻¹ (3.58× larger than K_b)"],
      ["Practical Application", "Cooking in salt water boils at > 100°C", "Antifreeze (ethylene glycol) in car radiators; salt to clear snow"]
    ],
    neetTakeaway: "Notice that for water, K_f (1.86) is much larger than K_b (0.52). Hence, depression of freezing point is more easily measured than elevation of boiling point for the same concentration!"
  },

  // 6. Association vs Dissociation
  {
    id: "table-association-vs-dissociation",
    title: "6. Solute Association vs Dissociation",
    headers: ["Parameter", "Dissociation (Ionization)", "Association (Polymerization/Dimerization)"],
    rows: [
      ["Process", "Solute molecule splits into multiple smaller ions/particles", "Multiple solute molecules combine into single molecular clusters"],
      ["Particle Count in Solution", "INCREASES (N_obs > N_calc)", "DECREASES (N_obs < N_calc)"],
      ["van't Hoff factor (i)", "i > 1", "i < 1"],
      ["Colligative Property Magnitude", "Observed Colligative Property > Calculated Normal", "Observed Colligative Property < Calculated Normal"],
      ["Experimental Molar Mass (M_obs)", "M_obs < M_normal (Abnormally Lower Molar Mass)", "M_obs > M_normal (Abnormally Higher Molar Mass)"],
      ["Degree of Reaction Formula", "α = (i - 1) / (n - 1)", "α = (1 - i) / (1 - 1/n)"],
      ["Typical Chemical Examples", "NaCl in water (i ≈ 2), BaCl₂ (i ≈ 3), K₄[Fe(CN)₆] (i ≈ 5)", "Benzoic acid or Ethanoic acid in Benzene (Dimerization via H-bonds, i ≈ 0.5)"]
    ],
    neetTakeaway: "Inverse Relation Rule: Colligative Property ∝ i, but Experimental Molar Mass ∝ 1/i. Thus, dissociation doubles the colligative property but cuts observed molar mass in half!"
  },

  // 7. Osmosis vs Reverse Osmosis
  {
    id: "table-osmosis-vs-reverse-osmosis",
    title: "7. Osmosis vs Reverse Osmosis (RO)",
    headers: ["Parameter", "Normal Osmosis", "Reverse Osmosis (RO)"],
    rows: [
      ["Direction of Solvent Flow", "From Dilute side (Pure solvent) → Concentrated solution side", "From Concentrated solution side → Dilute (Pure solvent) side"],
      ["Driving Force", "Chemical potential difference across SPM (Spontaneous, ΔG < 0)", "External mechanical pressure exceeding osmotic pressure (P_ext > π)"],
      ["Pressure Condition", "Natural equilibrium reached when P_solution = π", "Requires P_applied > π (Non-spontaneous, driven by work)"],
      ["Membrane Requirement", "Semipermeable Membrane (SPM) permeable only to solvent", "High-strength porous synthetic SPM (e.g. Cellulose Acetate film)"],
      ["Biological / Industrial Role", "Water uptake by plant roots, cell turgidity, RBC homeostasis", "Desalination of seawater, residential RO drinking water purification"]
    ],
    neetTakeaway: "In Reverse Osmosis, the membrane must withstand high hydrostatic pressure without rupturing while rejecting hydrated salt ions (Na⁺, Cl⁻, Mg²⁺)."
  },

  // 8. i > 1 vs i < 1
  {
    id: "table-vant-hoff-comparison",
    title: "8. van't Hoff Factor: i > 1 vs i < 1",
    headers: ["Condition", "i > 1 (Dissociation)", "i < 1 (Association)", "i = 1 (Ideal / Non-electrolyte)"],
    rows: [
      ["Nature of Solute", "Ionic electrolytes, inorganic acids, bases, salts", "Carboxylic acids, polar molecules in non-polar solvents", "Non-electrolytes (Glucose, Urea, Sucrose, Glycerol)"],
      ["Total Particles in Solution", "Greater than initial molecules dissolved", "Fewer than initial molecules dissolved", "Identical to initial molecules dissolved"],
      ["Observed ΔTb, ΔTf, π, RLVP", "Larger than normal theoretical value", "Smaller than normal theoretical value", "Exactly equals normal theoretical value"],
      ["Experimental Molar Mass", "M_obs = M_normal / i < M_normal", "M_obs = M_normal / i > M_normal", "M_obs = M_normal"],
      ["Sample Numerical Case", "0.1 M NaCl: π ≈ 2 × (0.1 RT) = 0.2 RT", "0.1 M Benzoic acid in benzene: π ≈ 0.5 × (0.1 RT) = 0.05 RT", "0.1 M Glucose: π = 0.1 RT"]
    ],
    neetTakeaway: "Equimolar Colligative Ranking: 0.1 M Al₂(SO₄)₃ (i=5) > 0.1 M FeCl₃ (i=4) > 0.1 M BaCl₂ (i=3) > 0.1 M NaCl (i=2) > 0.1 M Urea (i=1) > 0.1 M Acetic acid in benzene (i=0.5)."
  }
];

// 8 Solved Numerical Conversion Examples for Section 5
export const CONCENTRATION_CONVERSION_EXAMPLES: SolvedConversionExample[] = [
  {
    id: "conv-1",
    title: "Example 1: Mass % to Molarity",
    given: "Commercial concentrated nitric acid is 68% HNO₃ by mass (% w/w) and has a density of 1.504 g mL⁻¹.",
    asked: "Calculate the Molarity (M) of the acid solution.",
    conceptAndFormula: "Molarity M = \\frac{(\\% \\text{ w/w}) \\times d \\times 10}{M_2}, \\text{ where } M_2(\\text{HNO}_3) = 1 + 14 + 48 = 63 \\text{ g mol}^{-1}.",
    stepByStep: [
      "Step 1: Basis of calculation: Assume 100 g of solution.",
      "Step 2: Mass of HNO₃ (solute w₂) = 68 g. Mass of solution = 100 g.",
      "Step 3: Moles of HNO₃ n₂ = 68 / 63 = 1.0794 mol.",
      "Step 4: Volume of 100 g solution = Mass / Density = 100 g / 1.504 g mL⁻¹ = 66.49 mL = 0.06649 L.",
      "Step 5: Molarity M = Moles / Volume (L) = 1.0794 / 0.06649 = 16.23 M (or using formula M = (68 × 1.504 × 10) / 63 = 16.23 M)."
    ],
    finalAnswer: "Molarity of HNO₃ = 16.23 mol L⁻¹ (16.23 M)",
    neetTip: "NEET Shortcut: M = (% × d × 10) / M₂. Memorize this 5-second formula!"
  },
  {
    id: "conv-2",
    title: "Example 2: Mass % to Molality",
    given: "An aqueous solution of glucose (C₆H₁₂O₆, M₂ = 180 g mol⁻¹) is labeled as 10% by mass (% w/w).",
    asked: "Find the Molality (m) of the glucose solution.",
    conceptAndFormula: "Molality m = \\frac{w_2 \\times 1000}{M_2 \\times w_1 \\text{ (g of solvent)}}",
    stepByStep: [
      "Step 1: In 100 g of solution, Mass of glucose (w₂) = 10 g.",
      "Step 2: Mass of water solvent (w₁) = Total solution - Solute = 100 g - 10 g = 90 g.",
      "Step 3: Moles of glucose n₂ = 10 / 180 = 0.0556 mol.",
      "Step 4: Molality m = (0.0556 mol / 90 g) × 1000 g/kg = 0.617 mol kg⁻¹."
    ],
    finalAnswer: "Molality of glucose = 0.617 mol kg⁻¹ (0.617 m)",
    neetTip: "Common Trap: Do NOT divide by 100 g solution! Denominator must be 90 g solvent."
  },
  {
    id: "conv-3",
    title: "Example 3: Molarity to Molality (Using Density)",
    given: "A 3.0 M aqueous solution of NaCl has a density of 1.25 g mL⁻¹. (Molar mass of NaCl = 58.5 g mol⁻¹).",
    asked: "Calculate the molality (m) of this NaCl solution.",
    conceptAndFormula: "m = \\frac{1000 \\times M}{1000 \\times d - M \\times M_2}",
    stepByStep: [
      "Step 1: Consider 1 Litre (1000 mL) of solution.",
      "Step 2: Moles of NaCl = 3.0 mol. Mass of NaCl (w₂) = 3.0 × 58.5 = 175.5 g.",
      "Step 3: Total mass of 1000 mL solution = V × d = 1000 mL × 1.25 g/mL = 1250 g.",
      "Step 4: Mass of solvent water (w₁) = Mass of solution - Mass of solute = 1250 g - 175.5 g = 1074.5 g = 1.0745 kg.",
      "Step 5: Molality m = Moles of solute / kg of solvent = 3.0 / 1.0745 = 2.79 mol kg⁻¹."
    ],
    finalAnswer: "Molality of NaCl = 2.79 mol kg⁻¹ (2.79 m)",
    neetTip: "Notice that molality (2.79 m) is less than molarity (3.0 M) because the solution density is significantly greater than 1.0."
  },
  {
    id: "conv-4",
    title: "Example 4: Mole Fraction to Molality",
    given: "The mole fraction of ethylene glycol (C₂H₆O₂) in an aqueous solution is 0.100.",
    asked: "Calculate the molality (m) of the ethylene glycol solution.",
    conceptAndFormula: "m = \\frac{x_2 \\times 1000}{(1 - x_2) \\times M_1}, \\text{ where } M_1(\\text{water}) = 18 \\text{ g mol}^{-1}.",
    stepByStep: [
      "Step 1: Assume total moles of solution = 1.000 mol.",
      "Step 2: Moles of solute glycol (n₂) = 0.100 mol. Moles of solvent water (n₁) = 1.000 - 0.100 = 0.900 mol.",
      "Step 3: Mass of solvent water (w₁) = n₁ × M₁ = 0.900 mol × 18 g/mol = 16.2 g = 0.0162 kg.",
      "Step 4: Molality m = n₂ / w₁(kg) = 0.100 / 0.0162 = 6.17 mol kg⁻¹."
    ],
    finalAnswer: "Molality = 6.17 mol kg⁻¹ (6.17 m)",
    neetTip: "Shortcut: For any aqueous solution, m = (x₂ × 55.55) / (1 - x₂), since 1000/18 = 55.55."
  },
  {
    id: "conv-5",
    title: "Example 5: Molality to Mole Fraction",
    given: "An aqueous solution of urea (NH₂CONH₂, M₂ = 60 g mol⁻¹) has a molality of 2.50 mol kg⁻¹.",
    asked: "Determine the mole fraction of urea (x₂) and water (x₁).",
    conceptAndFormula: "x_2 = \\frac{m}{m + 55.55}",
    stepByStep: [
      "Step 1: 2.50 molal means 2.50 moles of urea in 1000 g (1 kg) of water.",
      "Step 2: Moles of water solvent n₁ = 1000 g / 18 g mol⁻¹ = 55.55 mol.",
      "Step 3: Total moles in system = 2.50 + 55.55 = 58.05 mol.",
      "Step 4: Mole fraction of urea x₂ = 2.50 / 58.05 = 0.0431.",
      "Step 5: Mole fraction of water x₁ = 1 - 0.0431 = 0.9569."
    ],
    finalAnswer: "x(urea) = 0.0431, x(water) = 0.9569",
    neetTip: "Remember that 1 kg of pure water is always exactly 55.55 moles."
  },
  {
    id: "conv-6",
    title: "Example 6: Volume % and Mass of Solute",
    given: "An automobile radiator contains 4.0 Litres of a 35% (v/v) aqueous solution of ethylene glycol (density of pure ethylene glycol = 1.11 g mL⁻¹).",
    asked: "Calculate the volume and mass of ethylene glycol present in the radiator.",
    conceptAndFormula: "\\text{Volume of solute} = \\text{Total Volume} \\times \\frac{\\% v/v}{100}, \\quad \\text{Mass} = \\text{Volume} \\times \\text{Density}",
    stepByStep: [
      "Step 1: Total volume of coolant solution = 4.0 L = 4000 mL.",
      "Step 2: Volume of ethylene glycol = 4000 mL × (35 / 100) = 1400 mL = 1.40 L.",
      "Step 3: Mass of ethylene glycol = Volume × Density = 1400 mL × 1.11 g mL⁻¹ = 1554 g = 1.554 kg."
    ],
    finalAnswer: "Volume = 1.40 L, Mass of glycol = 1554 g (1.554 kg)",
    neetTip: "35% (v/v) ethylene glycol lowers the freezing point of water to -17.6°C (255.4 K), preventing engine block freezing."
  },
  {
    id: "conv-7",
    title: "Example 7: Dilution Law (M₁V₁ = M₂V₂)",
    given: "How many mL of concentrated 18.0 M H₂SO₄ are required to prepare 500 mL of 0.200 M H₂SO₄ solution?",
    asked: "Volume of stock acid required (V₁ in mL).",
    conceptAndFormula: "M_1 V_1 = M_2 V_2 \\text{ (Moles of solute remain unchanged during dilution)}",
    stepByStep: [
      "Step 1: Initial concentrated state: M₁ = 18.0 M, V₁ = ?",
      "Step 2: Final diluted state: M₂ = 0.200 M, V₂ = 500 mL.",
      "Step 3: Apply dilution equation: 18.0 × V₁ = 0.200 × 500.",
      "Step 4: V₁ = (0.200 × 500) / 18.0 = 100 / 18.0 = 5.56 mL."
    ],
    finalAnswer: "Volume of 18 M H₂SO₄ needed = 5.56 mL",
    neetTip: "Safety note for NEET Practical Chemistry: Always add ACID TO WATER slowly with stirring, never water to concentrated acid (violently exothermic)."
  },
  {
    id: "conv-8",
    title: "Example 8: Mixing Two Solutions of Different Molarities",
    given: "100 mL of 0.5 M HCl is mixed with 300 mL of 0.1 M HCl. Assume volumes are strictly additive.",
    asked: "Calculate the resulting molarity (M_mix) of the final solution.",
    conceptAndFormula: "M_\\text{mix} = \\frac{M_1 V_1 + M_2 V_2}{V_1 + V_2}",
    stepByStep: [
      "Step 1: Millimoles of HCl from Solution 1 = M₁ × V₁ = 0.5 mmol/mL × 100 mL = 50 mmol.",
      "Step 2: Millimoles of HCl from Solution 2 = M₂ × V₂ = 0.1 mmol/mL × 300 mL = 30 mmol.",
      "Step 3: Total millimoles of HCl = 50 + 30 = 80 mmol = 0.080 mol.",
      "Step 4: Total volume of mixture V_total = 100 mL + 300 mL = 400 mL = 0.400 L.",
      "Step 5: M_mix = Total mmol / Total mL = 80 / 400 = 0.20 M."
    ],
    finalAnswer: "Resulting Molarity = 0.20 mol L⁻¹ (0.20 M)",
    neetTip: "Check: M_mix (0.20 M) must lie strictly between M₁ (0.50 M) and M₂ (0.10 M)."
  }
];

// Conceptual Q&A for NEET Masterclass
export const SOLUTIONS_CONCEPTUAL_QAS = [
  {
    id: "qa-1",
    question: "Why is Molality preferred over Molarity in expressing colligative properties such as ΔTb and ΔTf?",
    answer: "Colligative property measurements involve changes in temperature (boiling or freezing). Molarity depends on solution volume, which expands or contracts as temperature changes, altering the concentration value. Molality is based purely on the mass of solvent, which is completely independent of temperature, ensuring precision across varying thermal states.",
    corePrinciple: "Conservation of mass vs thermal expansion of liquid volume.",
    neetRelevance: "High-yield Assertion-Reasoning topic in NEET UG."
  },
  {
    id: "qa-2",
    question: "Why does the dissolution of non-volatile solute lower the vapour pressure of the liquid solvent?",
    answer: "In a pure liquid, the entire surface area is occupied by volatile solvent molecules capable of escaping into the vapour phase. When a non-volatile solute is dissolved, a fraction of the surface area is blocked by solute particles. Consequently, the rate of solvent evaporation per unit surface area decreases, lowering the equilibrium vapour pressure.",
    corePrinciple: "Vapour pressure is a surface phenomenon governed by surface escape rate.",
    neetRelevance: "Foundational concept for Raoult's Law and all colligative properties."
  },
  {
    id: "qa-3",
    question: "Why do equimolar solutions of NaCl and Glucose exhibit different elevations in boiling point?",
    answer: "Elevation of boiling point is a colligative property governed by the total particle count in solution (ΔTb = i Kb m). Glucose is a non-electrolyte (i = 1), so 0.1 m glucose yields 0.1 mol/kg of particles. NaCl is a strong electrolyte that dissociates into Na⁺ and Cl⁻ ions (i ≈ 2), producing approximately 0.2 mol/kg of particles. Therefore, 0.1 m NaCl produces roughly double the boiling point elevation of 0.1 m glucose.",
    corePrinciple: "Colligative properties depend on the total number of solute particles, not their mass or identity.",
    neetRelevance: "Frequently tested in NEET comparative ranking MCQs."
  },
  {
    id: "qa-4",
    question: "Why is Osmotic Pressure the preferred colligative property for determining the molar mass of biomolecules and polymers?",
    answer: "1. Osmotic pressure is measured at ambient room temperature (avoiding high temperatures that denature proteins or cause polymer decomposition). 2. Osmotic pressure uses Molarity instead of Molality. 3. Osmotic pressure produces very large, easily measurable pressure readings (several millimetres of liquid column) even for extremely dilute solutions of heavy macromolecules (M > 10,000 g/mol), where ΔTb or ΔTf would be negligibly small (e.g. 0.001°C) and prone to huge experimental error.",
    corePrinciple: "π = CRT produces high-magnitude measurable signals for large molar masses at room temperature.",
    neetRelevance: "Direct NCERT textbook question frequently asked in NEET."
  },
  {
    id: "qa-5",
    question: "What happens when Red Blood Cells (RBCs) are placed in: (a) 0.5% NaCl solution, (b) 1.5% NaCl solution?",
    answer: "Human RBC intracellular fluid is isotonic with 0.9% (m/V) NaCl solution. (a) In 0.5% NaCl (Hypotonic solution), water rushes into the RBC by endosmosis; the cell swells and bursts (haemolysis). (b) In 1.5% NaCl (Hypertonic solution), water flows out of the RBC by exosmosis into the surrounding solution; the cell shrinks and shrivels (crenation/plasmolysis).",
    corePrinciple: "Direction of osmosis across biological semipermeable membranes depends on relative tonicity.",
    neetRelevance: "Interdisciplinary Chemistry-Biology high-yield question."
  }
];

export const SOLUTIONS_RAPID_REVISION_POINTS = [
  "Binary Solution = 1 Solute + 1 Solvent. Homogeneous single phase (< 1 nm particle diameter).",
  "Mass % (% w/w) = (Mass of solute / Mass of solution) × 100. Temperature independent.",
  "Volume % (% v/v) = (Volume of solute / Volume of solution) × 100. Temperature dependent.",
  "Molarity (M) = Moles of solute / Litres of solution. Unit: mol L⁻¹. Decreases with increasing Temperature.",
  "Molality (m) = Moles of solute / Kilograms of solvent. Unit: mol kg⁻¹. Independent of Temperature.",
  "Mole fraction sum: x₁ + x₂ = 1. Dimensionless and temperature independent.",
  "Conversion shortcut: M = (% w/w × density × 10) / M₂.",
  "Raoult's Law (Volatile): p_total = x_A p_A° + x_B p_B° = p_A° + x_B(p_B° - p_A°).",
  "Vapour phase mole fractions: y_A = p_A / p_total, y_B = p_B / p_total.",
  "Ideal solution: Obeys Raoult's law over full range; ΔH_mix = 0; ΔV_mix = 0; F_A-B = F_A-A = F_B-B. No azeotrope.",
  "Positive deviation: F_A-B < F_A-A/B-B; ΔH_mix > 0 (endothermic); ΔV_mix > 0; Higher VP; Lower BP; Forms Minimum Boiling Azeotrope (e.g. 95% Ethanol).",
  "Negative deviation: F_A-B > F_A-A/B-B; ΔH_mix < 0 (exothermic); ΔV_mix < 0; Lower VP; Higher BP; Forms Maximum Boiling Azeotrope (e.g. 68% HNO₃, Chloroform + Acetone).",
  "All spontaneous mixing processes have ΔS_mix > 0 and ΔG_mix < 0.",
  "Colligative properties depend solely on the NUMBER of solute particles, not chemical identity.",
  "Relative Lowering of Vapour Pressure (RLVP): (p₁° - p₁) / p₁° = x₂ ≈ (w₂ M₁) / (M₂ w₁) for dilute solutions.",
  "Elevation of Boiling Point: ΔT_b = T_b - T_b° = i K_b m. K_b for water = 0.52 K kg mol⁻¹.",
  "Depression of Freezing Point: ΔT_f = T_f° - T_f = i K_f m. K_f for water = 1.86 K kg mol⁻¹.",
  "Osmotic Pressure: π = i C R T = i (w₂ R T) / (M₂ V). R = 0.0821 L atm K⁻¹ mol⁻¹.",
  "Reverse Osmosis occurs when applied pressure P > π, pushing pure solvent from solution through SPM into pure solvent.",
  "0.9% (m/V) NaCl is isotonic with human blood. < 0.9% = Hypotonic (haemolysis); > 0.9% = Hypertonic (crenation).",
  "van't Hoff Factor i = Observed Colligative Property / Calculated Colligative Property = Normal Molar Mass / Abnormal Molar Mass.",
  "Dissociation: i > 1, α = (i - 1) / (n - 1). For complete dissociation (α = 1): NaCl → i=2, CaCl₂ → i=3, K₄[Fe(CN)₆] → i=5.",
  "Association (Dimerization n=2): i < 1, α = (1 - i) / (1 - 1/n) = 2(1 - i). For 100% dimerization, i = 0.5, M_obs = 2 × M_normal.",
  "Colligative ranking for equimolar solutions: 0.1 M Al₂(SO₄)₃ (i=5) > 0.1 M BaCl₂ (i=3) > 0.1 M NaCl (i=2) > 0.1 M Glucose (i=1)."
];
