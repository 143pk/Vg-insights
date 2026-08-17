// Master NEET Traps, Complete Formula Sheet, Rapid Revision, and 30-Question Self Test for Solutions (NEET UG 2026)

export interface NeetTrap {
  id: string;
  trapTitle: string;
  studentMistake: string;
  actualFact: string;
  whyExaminerAsks: string;
  neetRule: string;
}

export interface MasterFormula {
  id: string;
  title: string;
  formula: string;
  symbols: string;
  unit: string;
  condition: string;
  commonError: string;
}

export interface SelfTestMCQ {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const SOLUTIONS_NEET_TRAPS: NeetTrap[] = [
  // Concentration Traps (1-10)
  {
    id: "trap-1",
    trapTitle: "Molarity vs Molality Temperature Dependence",
    studentMistake: "Thinking both Molarity and Molality change with temperature.",
    actualFact: "Molarity (M = n/V) changes with temperature because liquid volume expands with heat. Molality (m = n/w₁) is based strictly on MASS of solvent, which is invariant with temperature.",
    whyExaminerAsks: "Standard NCERT conceptual question tested almost every year.",
    neetRule: "Molality, Mass %, and Mole fraction are temperature independent; Molarity and Volume % are temperature dependent."
  },
  {
    id: "trap-2",
    trapTitle: "Molality Denominator Confusion",
    studentMistake: "Dividing moles of solute by mass of the entire solution instead of mass of pure solvent.",
    actualFact: "Molality denominator is w₁ (mass of PURE SOLVENT only). Mass of solution = w₁ + w₂.",
    whyExaminerAsks: "To trap students rushing through 10% or 20% solution numericals.",
    neetRule: "In a 10% (w/w) solution, solvent mass is 90 g (100 - 10), NEVER 100 g!"
  },
  {
    id: "trap-3",
    trapTitle: "Units of Density in M = (% × d × 10) / M₂",
    studentMistake: "Plugging in density in kg/m³ instead of g/mL (or g/cm³).",
    actualFact: "The constant factor 10 in the shortcut is derived assuming density in g mL⁻¹ and mass % as a number (e.g. 98, not 0.98).",
    whyExaminerAsks: "Tests whether students memorize formulas blindly without unit checks.",
    neetRule: "Always ensure density is in g/mL. If given 1200 kg/m³, convert to 1.20 g/mL."
  },
  {
    id: "trap-4",
    trapTitle: "Mole Fraction of Pure Liquid",
    studentMistake: "Thinking mole fraction of pure liquid is 0.",
    actualFact: "For any pure single substance, mole fraction x = n / n = 1.0 exactly.",
    whyExaminerAsks: "Conceptual check in Raoult's law boundary conditions.",
    neetRule: "Mole fraction of pure component is ALWAYS 1.0."
  },
  {
    id: "trap-5",
    trapTitle: "Moles of Water in 1 Litre vs 1 Kilogram",
    studentMistake: "Assuming moles of water is always 55.55 regardless of temperature and density.",
    actualFact: "1000 g of pure water contains 1000 / 18.015 = 55.55 moles. Only if density = 1.00 g/mL does 1 L equal 55.55 moles.",
    whyExaminerAsks: "Numerical shortcut verification in aqueous solutions.",
    neetRule: "For water: n = 55.55 mol per kg of water."
  },
  {
    id: "trap-6",
    trapTitle: "Volume % Non-Additivity",
    studentMistake: "Assuming 50 mL ethanol + 50 mL water equals exactly 100 mL solution.",
    actualFact: "Due to strong intermolecular hydrogen bonding and contraction, 50 mL ethanol + 50 mL water gives ~96 mL solution.",
    whyExaminerAsks: "Tests real physical behavior vs theoretical idealization.",
    neetRule: "Mass is always strictly additive; Volume is only additive in strictly ideal solutions (ΔV_mix = 0)."
  },
  {
    id: "trap-7",
    trapTitle: "Dilution of Acids (Practical Chemistry)",
    studentMistake: "Adding water directly to concentrated acid.",
    actualFact: "Water must never be added to concentrated acid because hydration is violently exothermic and causes dangerous acid splattering. Always add ACID SLOWLY TO WATER with constant stirring.",
    whyExaminerAsks: "Included in Practical Chemistry syllabus of NEET 2026.",
    neetRule: "Always Acid to Water (A to W, alphabetical order safe!)."
  },
  {
    id: "trap-8",
    trapTitle: "Molarity of Diluted Mixture",
    studentMistake: "Taking arithmetic mean (M₁ + M₂)/2 when mixing unequal volumes.",
    actualFact: "M_mix = (M₁V₁ + M₂V₂) / (V₁ + V₂). M_mix is a volume-weighted average.",
    whyExaminerAsks: "Calculation trap in volumetric mixing MCQs.",
    neetRule: "Calculate total millimoles and divide by total volume in mL."
  },
  {
    id: "trap-9",
    trapTitle: "Parts Per Million (ppm) by Mass vs Volume",
    studentMistake: "Using 10³ instead of 10⁶.",
    actualFact: "ppm = (Mass of component / Total mass of solution) × 10⁶. Used for atmospheric pollutants and water hardness.",
    whyExaminerAsks: "Checks definition of ultra-trace concentration units.",
    neetRule: "ppm = mass fraction × 10⁶; 1 ppm in water ≈ 1 mg / L."
  },
  {
    id: "trap-10",
    trapTitle: "Normality vs Molarity for Polyprotic Acids",
    studentMistake: "Treating 1 M H₂SO₄ as 1 N H₂SO₄.",
    actualFact: "Normality = Molarity × n-factor (basicity). For H₂SO₄, basicity = 2, so 1 M H₂SO₄ = 2 N H₂SO₄.",
    whyExaminerAsks: "Volumetric titration crossover question.",
    neetRule: "N = M × (n-factor)."
  },

  // Raoult's Law & Azeotrope Traps (11-20)
  {
    id: "trap-11",
    trapTitle: "Raoult's Law Liquid vs Vapour Mole Fractions",
    studentMistake: "Using liquid mole fraction (x_A) when asked for vapour phase mole fraction (y_A).",
    actualFact: "Liquid mole fraction is x_A. Vapour phase mole fraction is y_A = p_A / p_total = (x_A p_A°) / p_total.",
    whyExaminerAsks: "Examiners intentionally provide options matching x_A to trick hasty candidates.",
    neetRule: "Liquid = x; Vapour = y. The more volatile component always has y > x."
  },
  {
    id: "trap-12",
    trapTitle: "Ideal Solution Thermodynamic Entropy (ΔS_mix)",
    studentMistake: "Assuming ΔS_mix = 0 for ideal solutions because ΔH_mix = 0 and ΔV_mix = 0.",
    actualFact: "Mixing always increases randomness/disorder, so ΔS_mix > 0 ALWAYS, and ΔG_mix < 0 ALWAYS for all spontaneous solutions!",
    whyExaminerAsks: "One of the most famous trick questions in NEET Physical Chemistry.",
    neetRule: "For Ideal Solutions: ΔH_mix = 0, ΔV_mix = 0, but ΔS_mix > 0 and ΔG_mix < 0."
  },
  {
    id: "trap-13",
    trapTitle: "Positive Deviation vs Boiling Point",
    studentMistake: "Assuming positive deviation means boiling point increases.",
    actualFact: "Positive deviation means higher vapour pressure than ideal. Higher vapour pressure means the liquid boils at a LOWER temperature (Minimum Boiling Azeotrope)!",
    whyExaminerAsks: "Tests inverse relationship between vapour pressure and boiling point.",
    neetRule: "Positive Deviation → Vapour Pressure Increases → Boiling Point DECREASES (Minimum Boiling Azeotrope)."
  },
  {
    id: "trap-14",
    trapTitle: "Negative Deviation vs Boiling Point",
    studentMistake: "Assuming negative deviation means minimum boiling azeotrope.",
    actualFact: "Negative deviation means stronger intermolecular bonds (A-B > A-A/B-B), lowering vapour pressure. Thus, more heat is required to boil (Maximum Boiling Azeotrope)!",
    whyExaminerAsks: "Direct NCERT assertion-reason question.",
    neetRule: "Negative Deviation → Vapour Pressure Decreases → Boiling Point INCREASES (Maximum Boiling Azeotrope)."
  },
  {
    id: "trap-15",
    trapTitle: "Separation of Azeotropes by Fractional Distillation",
    studentMistake: "Believing a 95.4% ethanol-water mixture can be purified to 100% pure ethanol by repeated fractional distillation.",
    actualFact: "At the azeotropic composition, liquid and vapour have IDENTICAL compositions (x = y). The mixture boils at a constant temperature without any separation.",
    whyExaminerAsks: "NCERT core principle on azeotropic distillation limits.",
    neetRule: "Azeotropes CANNOT be separated into pure components by fractional distillation."
  },
  {
    id: "trap-16",
    trapTitle: "Acetone + Chloroform Deviation Type",
    studentMistake: "Classifying Acetone + Chloroform as positive deviation.",
    actualFact: "Chloroform (CH-group) forms a strong new HYDROGEN BOND with the carbonyl oxygen of acetone. A-B interactions are stronger than pure components → NEGATIVE DEVIATION (ΔH < 0, ΔV < 0).",
    whyExaminerAsks: "NCERT's flagship example of negative deviation.",
    neetRule: "Acetone + Chloroform = Intermolecular H-bonding = Negative Deviation."
  },
  {
    id: "trap-17",
    trapTitle: "Acetone + Carbon Disulphide (CS₂) Deviation Type",
    studentMistake: "Classifying Acetone + CS₂ as negative deviation.",
    actualFact: "CS₂ molecules break the dipole-dipole attractions of acetone without forming strong new bonds. A-B is weaker than A-A → POSITIVE DEVIATION (ΔH > 0, ΔV > 0).",
    whyExaminerAsks: "NCERT classic positive deviation example.",
    neetRule: "Acetone + CS₂ / Acetone + Ethanol = Positive Deviation."
  },
  {
    id: "trap-18",
    trapTitle: "Vapour Pressure Dependency on Surface Area",
    studentMistake: "Thinking a wider beaker has higher equilibrium vapour pressure than a narrow test tube.",
    actualFact: "Vapour pressure in a closed container depends ONLY on temperature and nature of liquid. It is completely independent of surface area, container volume, or liquid volume.",
    whyExaminerAsks: "Tests understanding of intensive thermodynamic equilibrium properties.",
    neetRule: "Equilibrium VP is an INTENSIVE property: independent of volume or surface area."
  },
  {
    id: "trap-19",
    trapTitle: "Azeotrope Definition Criteria",
    studentMistake: "Thinking ideal solutions can form azeotropes at 50:50 mole ratio.",
    actualFact: "Ideal solutions NEVER form azeotropes. Only non-ideal solutions with large positive or negative deviations form azeotropes.",
    whyExaminerAsks: "Definitional clarity between ideal and non-ideal behaviors.",
    neetRule: "Ideal solutions never form azeotropes; they can always be separated by fractional distillation."
  },
  {
    id: "trap-20",
    trapTitle: "Nitric Acid + Water Azeotrope Composition",
    studentMistake: "Confusing percentage by mass with percentage by volume.",
    actualFact: "The maximum boiling azeotrope of nitric acid and water contains exactly 68% HNO₃ and 32% H₂O by MASS, boiling at 393.5 K (120.5°C).",
    whyExaminerAsks: "Direct factual question from NCERT Solutions chapter.",
    neetRule: "68% HNO₃ + 32% H₂O by mass = Maximum Boiling Azeotrope (Negative deviation)."
  },

  // Colligative Property Traps (21-35)
  {
    id: "trap-21",
    trapTitle: "Colligative Property Definition",
    studentMistake: "Thinking colligative properties depend on the mass, size, or chemical identity of solute particles.",
    actualFact: "Colligative properties depend SOLELY on the NUMBER (count) of solute particles in a given volume of solvent, completely independent of their nature or chemical identity.",
    whyExaminerAsks: "Foundational definition tested in multi-statement questions.",
    neetRule: "Colligative = 'Bound together' (Depends on particle count, not identity)."
  },
  {
    id: "trap-22",
    trapTitle: "Lowering of Vapour Pressure vs Relative Lowering",
    studentMistake: "Treating 'Lowering of Vapour Pressure' (Δp = p₁° - p₁) as a colligative property.",
    actualFact: "Δp is NOT a colligative property because its value depends on the pure solvent pressure p₁°. ONLY the RELATIVE Lowering of Vapour Pressure (Δp / p₁° = x₂) is a true colligative property!",
    whyExaminerAsks: "Subtle semantic trap designed to catch careless reading.",
    neetRule: "RLVP (Δp/p₁°) is colligative; Lowering (Δp) alone is NOT colligative."
  },
  {
    id: "trap-23",
    trapTitle: "Temperature Unit Conversion in ΔT",
    studentMistake: "Adding 273 when converting temperature difference ΔT from °C to K (e.g. ΔT = 0.52°C → writing 273.52 K).",
    actualFact: "A temperature DIFFERENCE of 1°C is exactly equal to a difference of 1 Kelvin! ΔT(K) = ΔT(°C).",
    whyExaminerAsks: "Destroys numerical calculations of M₂.",
    neetRule: "Never add 273 to a temperature DIFFERENCE (ΔT). Only add 273 to absolute temperature T."
  },
  {
    id: "trap-24",
    trapTitle: "Units and Values of Kb and Kf for Water",
    studentMistake: "Swapping K_b and K_f values (using K_b = 1.86 for boiling).",
    actualFact: "For water: K_b = 0.52 K kg mol⁻¹ (Ebullioscopic constant); K_f = 1.86 K kg mol⁻¹ (Cryoscopic constant). Notice K_f is ~3.58× larger than K_b.",
    whyExaminerAsks: "Memory check on standard water constants.",
    neetRule: "Water: K_b = 0.52 K kg mol⁻¹, K_f = 1.86 K kg mol⁻¹."
  },
  {
    id: "trap-25",
    trapTitle: "Dependence of Kb and Kf Constants",
    studentMistake: "Thinking K_b and K_f depend on the nature or concentration of the solute.",
    actualFact: "K_b and K_f depend ONLY on the nature of the SOLVENT and its thermodynamic properties (M₁, T_b°, Δ_vap H). They are independent of solute identity or concentration.",
    whyExaminerAsks: "NCERT assertion-reason favorite.",
    neetRule: "K_b and K_f are solvent-specific constants, completely independent of solute."
  },
  {
    id: "trap-26",
    trapTitle: "Freezing Point of Solution vs Depression in Freezing Point",
    studentMistake: "Writing Freezing Point of solution as +0.54°C when depression ΔT_f is 0.54°C.",
    actualFact: "Freezing point is DEPRESSED below pure solvent. For water (freezes at 0.00°C), T_f = 0.00°C - ΔT_f = -0.54°C.",
    whyExaminerAsks: "Sign convention error in numerical options.",
    neetRule: "Boiling point elevates (T_b = 100 + ΔT_b); Freezing point depresses (T_f = 0 - ΔT_f)."
  },
  {
    id: "trap-27",
    trapTitle: "Gas Constant R Units in Osmotic Pressure (π = CRT)",
    studentMistake: "Using R = 8.314 J K⁻¹ mol⁻¹ with volume in Litres and pressure in atmospheres.",
    actualFact: "If volume V is in Litres and π is in atmospheres, R MUST be 0.0821 L atm K⁻¹ mol⁻¹ (or 0.083 L bar K⁻¹ mol⁻¹ if π is in bar).",
    whyExaminerAsks: "Dimensional consistency error trap.",
    neetRule: "For π in atm and V in L, use R = 0.0821 L atm K⁻¹ mol⁻¹ (or ~1/12)."
  },
  {
    id: "trap-28",
    trapTitle: "Why Osmotic Pressure is Preferred for Macromolecules",
    studentMistake: "Thinking osmotic pressure is used because proteins freeze at very low temperatures.",
    actualFact: "Osmotic pressure is preferred because: 1. It is measured at room temperature (proteins denature at boiling point), 2. Uses molarity, 3. Yields large measurable pressure values even for tiny molar concentrations of huge molecules.",
    whyExaminerAsks: "Direct NCERT 3-point explanation question.",
    neetRule: "Biomolecule molar mass determination → Always Osmotic Pressure."
  },
  {
    id: "trap-29",
    trapTitle: "Isotonic Solutions of Different Molar Masses",
    studentMistake: "Assuming equal mass percentage solutions of different solutes are isotonic.",
    actualFact: "Isotonicity requires equal MOLAR concentration (C₁ = C₂). A 5% glucose solution (M=180) has C = 50/180 = 0.28 M, while 5% sucrose (M=342) has C = 50/342 = 0.15 M. They are NOT isotonic!",
    whyExaminerAsks: "Mass % vs Molar concentration confusion.",
    neetRule: "Isotonic means equal MOLARITY (w₁/M₁V₁ = w₂/M₂V₂), NOT equal mass %."
  },
  {
    id: "trap-30",
    trapTitle: "Biological Saline Isotonicity Percentage",
    studentMistake: "Thinking normal saline is 0.9% (m/m) or 9.0% NaCl.",
    actualFact: "Normal saline solution is strictly 0.9% (mass/volume) NaCl, equivalent to 0.9 g NaCl per 100 mL of solution.",
    whyExaminerAsks: "Medical application tested in NEET biology and chemistry interface.",
    neetRule: "0.9% (m/V) NaCl = Isotonic with human RBC intracellular fluid."
  },
  {
    id: "trap-31",
    trapTitle: "Endosmosis vs Exosmosis in Blood Cells",
    studentMistake: "Thinking RBC shrinks in pure water.",
    actualFact: "In pure water / hypotonic solution (< 0.9% NaCl), water enters RBC by endosmosis causing it to swell and burst (haemolysis). In hypertonic solution (> 0.9% NaCl), water leaves causing shrinkage (crenation).",
    whyExaminerAsks: "Common clinical reasoning question in NEET.",
    neetRule: "Hypotonic → Swells/Bursts (Haemolysis); Hypertonic → Shrinks (Crenation)."
  },
  {
    id: "trap-32",
    trapTitle: "Reverse Osmosis Pressure Threshold",
    studentMistake: "Thinking Reverse Osmosis occurs when applied pressure P equals osmotic pressure π.",
    actualFact: "At P = π, osmosis is merely halted (dynamic equilibrium, zero net flow). For REVERSE Osmosis, applied pressure MUST strictly EXCEED osmotic pressure (P > π).",
    whyExaminerAsks: "Precision on thermodynamic equilibrium vs non-spontaneous driving force.",
    neetRule: "P = π halts osmosis; P > π causes Reverse Osmosis."
  },
  {
    id: "trap-33",
    trapTitle: "Membrane Material in Industrial Desalination",
    studentMistake: "Naming animal bladder or parchment paper for commercial desalination plants.",
    actualFact: "Commercial reverse osmosis uses synthetic semipermeable membranes made of porous CELLULOSE ACETATE supported on suitable substrate.",
    whyExaminerAsks: "NCERT specific material identification question.",
    neetRule: "Desalination SPM = Cellulose Acetate."
  },
  {
    id: "trap-34",
    trapTitle: "Preservation of Pickles and Jams Mechanism",
    studentMistake: "Thinking high salt or sugar acts as a chemical toxin to bacteria.",
    actualFact: "High salt/sugar creates a highly HYPERTONIC environment. When bacteria land on pickles or jams, water is drawn out of bacterial cells by exosmosis, causing bacterial shrinkage and death by plasmolysis.",
    whyExaminerAsks: "Everyday application of osmotic pressure.",
    neetRule: "Salt/Sugar preservation works by hypertonic plasmolysis of bacterial cells."
  },
  {
    id: "trap-35",
    trapTitle: "Edema (Water Retention) Cause",
    studentMistake: "Attributing swelling in people consuming high salt to blood pressure alone.",
    actualFact: "High salt intake increases NaCl in tissue fluids, making them hypertonic, drawing water into intercellular spaces by osmosis, leading to puffiness/swelling called Edema.",
    whyExaminerAsks: "Direct NCERT biological application of solutions.",
    neetRule: "High salt intake → Water retention in tissues → Edema."
  },

  // van't Hoff Factor & Abnormal Molar Mass Traps (36-50)
  {
    id: "trap-36",
    trapTitle: "van't Hoff Factor (i) Definition Ratio",
    studentMistake: "Inverting the molar mass ratio (writing i = Abnormal Molar Mass / Normal Molar Mass).",
    actualFact: "Since colligative properties are inversely proportional to molar mass: i = Observed Colligative Property / Calculated Colligative Property = NORMAL Molar Mass / ABNORMAL Molar Mass.",
    whyExaminerAsks: "Classic formula inversion error.",
    neetRule: "i = (Observed CP / Calculated CP) = (Normal Molar Mass / Observed Molar Mass)."
  },
  {
    id: "trap-37",
    trapTitle: "van't Hoff Factor for Complex Coordination Compounds",
    studentMistake: "Dissociating coordination ligands inside the square bracket [Co(NH₃)₆]Cl₃ as free ions.",
    actualFact: "Ligands inside the coordination sphere ([...]) DO NOT ionize! [Co(NH₃)₆]Cl₃ ionizes into 1 [Co(NH₃)₆]³⁺ cation and 3 Cl⁻ anions → total n = 1 + 3 = 4 ions (i = 4).",
    whyExaminerAsks: "Inorganic Chemistry + Physical Chemistry crossover question.",
    neetRule: "Species inside square brackets stay as ONE single complex ion!"
  },
  {
    id: "trap-38",
    trapTitle: "K₄[Fe(CN)₆] Particle Count (n)",
    studentMistake: "Counting Fe and CN separately giving n = 1 + 1 + 6 = 8.",
    actualFact: "K₄[Fe(CN)₆] ionizes into 4 K⁺ cations and 1 [Fe(CN)₆]⁴⁻ complex anion → total n = 4 + 1 = 5 ions. For 100% dissociation, i = 5.",
    whyExaminerAsks: "Frequent NEET question on maximum colligative property.",
    neetRule: "K₄[Fe(CN)₆] → 4 K⁺ + [Fe(CN)₆]⁴⁻ (n = 5)."
  },
  {
    id: "trap-39",
    trapTitle: "Carboxylic Acids in Polar vs Non-Polar Solvents",
    studentMistake: "Assuming acetic acid (CH₃COOH) always dissociates with i > 1.",
    actualFact: "In polar water, CH₃COOH dissociates into CH₃COO⁻ + H⁺ (i > 1). But in NON-POLAR BENZENE, it associates via intermolecular hydrogen bonding to form dimers (i < 1, i ≈ 0.5)!",
    whyExaminerAsks: "Solvent effect trap on solute molecular state.",
    neetRule: "Acetic/Benzoic acid in Water → Dissociates (i > 1); In Benzene → Dimers (i ≈ 0.5)."
  },
  {
    id: "trap-40",
    trapTitle: "Degree of Dissociation (α) Formula",
    studentMistake: "Writing α = (i - 1) / n instead of (i - 1) / (n - 1).",
    actualFact: "The correct relation is: i = 1 + (n - 1)α ⟹ α = (i - 1) / (n - 1).",
    whyExaminerAsks: "Formula derivation precision.",
    neetRule: "Dissociation: α = (i - 1) / (n - 1)."
  },
  {
    id: "trap-41",
    trapTitle: "Degree of Association (α) Formula for Dimerization",
    studentMistake: "Using dissociation formula for association.",
    actualFact: "For association into n-mers: i = 1 - α(1 - 1/n). For dimerization (n = 2), i = 1 - α/2 ⟹ α = 2(1 - i).",
    whyExaminerAsks: "Dimerization numericals in organic solvents.",
    neetRule: "Dimerization: i = 1 - α/2 ⟹ α = 2(1 - i)."
  },
  {
    id: "trap-42",
    trapTitle: "Equimolar Freezing Point Ranking Trap",
    studentMistake: "Ranking freezing point in the same order as van't Hoff factor (thinking 0.1 M Al₂(SO₄)₃ has the highest freezing point).",
    actualFact: "Higher i causes GREATER freezing point depression (ΔT_f), which lowers the freezing point further below 0°C. Thus, 0.1 M Al₂(SO₄)₃ has the LOWEST freezing point and 0.1 M Glucose has the HIGHEST freezing point!",
    whyExaminerAsks: "The #1 most repeated trick question across 15 years of NEET/AIPMT.",
    neetRule: "Highest i → Highest ΔT_f → LOWEST Freezing Point (T_f)!"
  },
  {
    id: "trap-43",
    trapTitle: "Equimolar Boiling Point Ranking",
    studentMistake: "Thinking glucose solution boils higher than NaCl solution.",
    actualFact: "Higher i causes greater elevation ΔT_b, raising the boiling point higher above 100°C. 0.1 M Al₂(SO₄)₃ (i=5) > 0.1 M BaCl₂ (i=3) > 0.1 M NaCl (i=2) > 0.1 M Glucose (i=1).",
    whyExaminerAsks: "Contrasting boiling point trend with freezing point trend.",
    neetRule: "Boiling point follows i directly; Freezing point is opposite to i."
  },
  {
    id: "trap-44",
    trapTitle: "van't Hoff Factor for Non-Electrolytes",
    studentMistake: "Setting i = 0 for glucose or urea.",
    actualFact: "For non-electrolytes that neither dissociate nor associate, exactly 1 mole of solute dissolved gives 1 mole of particles in solution. Hence i = 1.0 (NEVER 0).",
    whyExaminerAsks: "Checks understanding of ratio baseline.",
    neetRule: "Non-electrolytes (Glucose, Urea, Sucrose): i = 1.0."
  },
  {
    id: "trap-45",
    trapTitle: "Abnormal Molar Mass of Dimerizing Solute",
    studentMistake: "Thinking association lowers the experimental molar mass.",
    actualFact: "Association combines particles, reducing total particle count. Since M_obs = M_normal / i and i < 1, the experimental molar mass is GREATER than normal (e.g. 2× normal for dimer).",
    whyExaminerAsks: "Tests inverse relation between particle count and apparent molar mass.",
    neetRule: "Association → i < 1 → Observed Molar Mass > Normal Molar Mass."
  },
  {
    id: "trap-46",
    trapTitle: "Dissociation Molar Mass Halving",
    studentMistake: "Expecting experimental molar mass of NaCl in water to be 58.5 g/mol.",
    actualFact: "Because NaCl dissociates into Na⁺ and Cl⁻ (i ≈ 2), the experimentally determined molar mass from colligative properties is 58.5 / 2 = 29.25 g/mol.",
    whyExaminerAsks: "Checks why colligative molar mass of salts is called 'abnormal'.",
    neetRule: "100% dissociated NaCl in water gives M_obs = 29.25 g/mol."
  },
  {
    id: "trap-47",
    trapTitle: "Effect of Dilution on Degree of Dissociation (Ostwald Dilution Law)",
    studentMistake: "Thinking van't Hoff factor of weak acid is constant at all concentrations.",
    actualFact: "As a weak electrolyte solution is diluted (C → 0), its degree of dissociation increases (α → 1) according to Ostwald's dilution law, so van't Hoff factor i approaches n at infinite dilution.",
    whyExaminerAsks: "Links Solutions unit with Ionic Equilibrium.",
    neetRule: "With infinite dilution: α → 1 and i → n for weak electrolytes."
  },
  {
    id: "trap-48",
    trapTitle: "Equimolar Osmotic Pressure Ranking",
    studentMistake: "Ignoring van't Hoff factor in π = iCRT for ionic solutions.",
    actualFact: "Osmotic pressure is directly proportional to (i × C). For 0.1 M solutions: π(Al₂(SO₄)₃) = 5(0.1RT) = 0.5RT > π(BaCl₂) = 3(0.1RT) = 0.3RT > π(NaCl) = 2(0.1RT) = 0.2RT > π(Urea) = 0.1RT.",
    whyExaminerAsks: "Standard NEET ranking MCQ.",
    neetRule: "Osmotic pressure follows i directly for equimolar solutions."
  },
  {
    id: "trap-49",
    trapTitle: "Modified Raoult's Law for Electrolytes",
    studentMistake: "Forgetting to multiply mole fraction of solute by i in RLVP.",
    actualFact: "For electrolyte solutions: (p₁° - p₁) / p₁° = i · x₂ ≈ i · (w₂ M₁) / (M₂ w₁).",
    whyExaminerAsks: "Examiners test whether students apply van't Hoff factor to ALL 4 colligative properties.",
    neetRule: "All 4 CP formulas must include i: RLVP = i·x₂, ΔTb = i·Kb·m, ΔTf = i·Kf·m, π = i·CRT."
  },
  {
    id: "trap-50",
    trapTitle: "Alum / Double Salts Ion Count",
    studentMistake: "Treating Potash Alum K₂SO₄·Al₂(SO₄)₃·24H₂O as a single complex ion.",
    actualFact: "Potash alum is a double salt that dissociates completely in water: 2 K⁺ + 2 Al³⁺ + 4 SO₄²⁻ = 8 total ions (n = 8).",
    whyExaminerAsks: "Tests distinction between double salts (complete ionization) and coordination complexes.",
    neetRule: "Double salts dissociate completely into all individual constituent simple ions!"
  }
];

export const SOLUTIONS_MASTER_FORMULAE: MasterFormula[] = [
  {
    id: "form-1",
    title: "Mass Percentage (% w/w)",
    formula: "\\% \\text{ w/w} = \\frac{\\text{Mass of solute } (w_2)}{\\text{Total mass of solution } (w_1 + w_2)} \\times 100",
    symbols: "w₂ = mass of solute (g), w₁ = mass of solvent (g)",
    unit: "Dimensionless (%)",
    condition: "Valid for all solutions; temperature independent.",
    commonError: "Dividing by mass of solvent w₁ instead of total solution mass (w₁ + w₂)."
  },
  {
    id: "form-2",
    title: "Volume Percentage (% v/v)",
    formula: "\\% \\text{ v/v} = \\frac{\\text{Volume of solute } (V_2)}{\\text{Total volume of solution } (V_\\text{total})} \\times 100",
    symbols: "V₂ = volume of liquid solute, V_total = volume of solution",
    unit: "Dimensionless (%)",
    condition: "Liquid-liquid mixtures; temperature dependent.",
    commonError: "Assuming volumes are strictly additive when mixing polar liquids."
  },
  {
    id: "form-3",
    title: "Molarity (M)",
    formula: "M = \\frac{n_2}{V_\\text{solution (L)}} = \\frac{w_2 \\times 1000}{M_2 \\times V_\\text{mL}}",
    symbols: "n₂ = moles of solute, M₂ = molar mass of solute (g/mol), V = volume of solution",
    unit: "\\text{mol L}^{-1} \\text{ (or M)}",
    condition: "Standard volumetric concentration; decreases with increasing temperature.",
    commonError: "Using volume of solvent instead of total volume of solution."
  },
  {
    id: "form-4",
    title: "Molality (m)",
    formula: "m = \\frac{n_2}{w_1 \\text{ (kg)}} = \\frac{w_2 \\times 1000}{M_2 \\times w_1 \\text{ (g)}}",
    symbols: "w₁ = mass of pure solvent (g), w₂ = mass of solute (g)",
    unit: "\\text{mol kg}^{-1} \\text{ (or m)}",
    condition: "Temperature independent; mandatory for boiling and freezing colligative calculations.",
    commonError: "Using mass of solution in denominator instead of mass of solvent w₁."
  },
  {
    id: "form-5",
    title: "Mole Fraction (x)",
    formula: "x_A = \\frac{n_A}{n_A + n_B}, \\quad x_B = \\frac{n_B}{n_A + n_B}, \\quad x_A + x_B = 1",
    symbols: "n_A, n_B = moles of components A and B",
    unit: "Dimensionless",
    condition: "Binary and multi-component mixtures; temperature independent.",
    commonError: "Summing mole fractions to a value other than 1."
  },
  {
    id: "form-6",
    title: "Mass % to Molarity Conversion Shortcut",
    formula: "M = \\frac{(\\% \\text{ w/w}) \\times d \\times 10}{M_2}",
    symbols: "% w/w = mass percent number, d = solution density (g/mL), M₂ = solute molar mass",
    unit: "\\text{mol L}^{-1}",
    condition: "Requires solution density in g/mL.",
    commonError: "Plugging in % w/w as decimal (e.g. 0.98) instead of percentage integer (98)."
  },
  {
    id: "form-7",
    title: "Molarity to Molality Conversion",
    formula: "m = \\frac{1000 \\times M}{1000 \\times d - M \\times M_2}",
    symbols: "M = molarity, d = density (g/mL), M₂ = solute molar mass",
    unit: "\\text{mol kg}^{-1}",
    condition: "Density must be in g/mL.",
    commonError: "Sign error in denominator (writing + instead of -)."
  },
  {
    id: "form-8",
    title: "Raoult's Law for Binary Volatile Liquids",
    formula: "p_\\text{total} = x_A p_A^\\circ + x_B p_B^\\circ = p_A^\\circ + x_B(p_B^\\circ - p_A^\\circ)",
    symbols: "p_A°, p_B° = pure vapour pressures; x_A, x_B = liquid mole fractions",
    unit: "\\text{mm Hg, torr, or atm}",
    condition: "Ideal solutions across all concentrations.",
    commonError: "Confusing liquid mole fractions (x) with vapour mole fractions (y)."
  },
  {
    id: "form-9",
    title: "Dalton's Law: Vapour Phase Mole Fractions",
    formula: "y_A = \\frac{p_A}{p_\\text{total}} = \\frac{x_A p_A^\\circ}{x_A p_A^\\circ + x_B p_B^\\circ}, \\quad y_B = \\frac{p_B}{p_\\text{total}}",
    symbols: "y_A, y_B = mole fractions in vapour phase",
    unit: "Dimensionless",
    condition: "Applies to ideal gas vapour above liquid mixture.",
    commonError: "Assuming vapour phase composition is identical to liquid phase composition."
  },
  {
    id: "form-10",
    title: "Relative Lowering of Vapour Pressure (RLVP)",
    formula: "\\frac{p_1^\\circ - p_1}{p_1^\\circ} = i \\cdot x_2 \\approx i \\cdot \\frac{w_2 M_1}{M_2 w_1}",
    symbols: "p₁° = pure solvent VP, p₁ = solution VP, x₂ = solute mole fraction, i = van't Hoff factor",
    unit: "Dimensionless",
    condition: "Dilute solutions of non-volatile solutes.",
    commonError: "Omitting solvent molar mass M₁ in the molecular mass formula."
  },
  {
    id: "form-11",
    title: "Elevation of Boiling Point (ΔTb)",
    formula: "\\Delta T_b = T_b - T_b^\\circ = i K_b m = i \\cdot \\frac{K_b \\times w_2 \\times 1000}{M_2 \\times w_1}",
    symbols: "K_b = molal elevation constant (K kg/mol), m = molality",
    unit: "\\text{K (or } ^\\circ\\text{C)}",
    condition: "Dilute solutions containing non-volatile solutes.",
    commonError: "Using Molarity instead of Molality."
  },
  {
    id: "form-12",
    title: "Depression of Freezing Point (ΔTf)",
    formula: "\\Delta T_f = T_f^\\circ - T_f = i K_f m = i \\cdot \\frac{K_f \\times w_2 \\times 1000}{M_2 \\times w_1}",
    symbols: "K_f = molal depression constant (K kg/mol), m = molality",
    unit: "\\text{K (or } ^\\circ\\text{C)}",
    condition: "Dilute solutions containing non-volatile solutes.",
    commonError: "Adding ΔT_f to 0°C instead of subtracting it (T_f = T_f° - ΔT_f)."
  },
  {
    id: "form-13",
    title: "Thermodynamic Formulas for Kb and Kf",
    formula: "K_b = \\frac{R M_1 T_b^{\\circ 2}}{1000 \\Delta_\\text{vap} H}, \\quad K_f = \\frac{R M_1 T_f^{\\circ 2}}{1000 \\Delta_\\text{fus} H}",
    symbols: "R = 8.314 J/(K mol), M₁ = solvent molar mass (g/mol), ΔH in J/mol",
    unit: "\\text{K kg mol}^{-1}",
    condition: "Relates ebullioscopic/cryoscopic constants to latent heats of phase transition.",
    commonError: "Forgetting the 1000 factor when enthalpy ΔH is in J/mol."
  },
  {
    id: "form-14",
    title: "Osmotic Pressure (π)",
    formula: "\\pi = i C R T = i \\cdot \\frac{w_2 R T}{M_2 V}",
    symbols: "C = molarity (mol/L), R = 0.0821 L atm/(K mol), T = temperature in Kelvin, V = volume in Litres",
    unit: "\\text{atm (or bar, Pa)}",
    condition: "Dilute solutions across semipermeable membranes.",
    commonError: "Using Celsius temperature instead of Kelvin (T = °C + 273.15)."
  },
  {
    id: "form-15",
    title: "van't Hoff Factor for Dissociation (Degree α)",
    formula: "i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}",
    symbols: "n = number of ions per formula unit, α = degree of dissociation (0 to 1)",
    unit: "Dimensionless",
    condition: "Electrolytes in ionizing solvents (water).",
    commonError: "Miscounting ions n for polyatomic or coordination ions."
  },
  {
    id: "form-16",
    title: "van't Hoff Factor for Association (Dimerization)",
    formula: "i = 1 - \\alpha\\left(1 - \\frac{1}{n}\\right) \\implies \\text{For dimer (n=2): } \\alpha = 2(1 - i)",
    symbols: "n = association cluster size (n = 2 for dimers)",
    unit: "Dimensionless",
    condition: "Carboxylic acids in non-polar solvents (benzene).",
    commonError: "Using dissociation formula for association problems."
  }
];

export const SOLUTIONS_SELF_TEST_MCQS: SelfTestMCQ[] = [
  {
    id: "mcq-1",
    question: "Which of the following concentration terms is independent of temperature?",
    options: [
      "Molarity and Volume %",
      "Molality and Mole fraction",
      "Molarity and Mass %",
      "Normality and Formality"
    ],
    correctAnswer: 1,
    explanation: "Molality and Mole fraction depend solely on masses of solute and solvent, which do not change with temperature. Molarity, Normality, and Volume % involve volume, which expands with temperature.",
    difficulty: "Easy"
  },
  {
    id: "mcq-2",
    question: "If 100 mL of 0.2 M NaOH is mixed with 100 mL of 0.1 M HCl, the resulting solution will be:",
    options: [
      "Acidic with [H⁺] = 0.05 M",
      "Basic with [OH⁻] = 0.05 M",
      "Neutral with pH = 7",
      "Basic with [OH⁻] = 0.10 M"
    ],
    correctAnswer: 1,
    explanation: "Millimoles of OH⁻ = 100 × 0.2 = 20 mmol. Millimoles of H⁺ = 100 × 0.1 = 10 mmol. Excess OH⁻ = 20 - 10 = 10 mmol. Total volume = 100 + 100 = 200 mL. Resulting [OH⁻] = 10 mmol / 200 mL = 0.05 M.",
    difficulty: "Medium"
  },
  {
    id: "mcq-3",
    question: "For a non-ideal solution exhibiting positive deviation from Raoult's law, which of the following is correct?",
    options: [
      "ΔH_mix < 0 and ΔV_mix < 0",
      "ΔH_mix > 0 and ΔV_mix > 0",
      "ΔH_mix = 0 and ΔV_mix = 0",
      "ΔH_mix > 0 and ΔV_mix < 0"
    ],
    correctAnswer: 1,
    explanation: "In positive deviation, A-B attractive forces are weaker than A-A and B-B forces. Overcoming stronger pure bonds requires energy (ΔH_mix > 0, endothermic) and molecules occupy more volume (ΔV_mix > 0).",
    difficulty: "Easy"
  },
  {
    id: "mcq-4",
    question: "A mixture of ethanol and water containing 95.4% ethanol by volume boils at 351.15 K (lower than pure ethanol 351.5 K and water 373 K). This mixture is called:",
    options: [
      "Maximum boiling azeotrope",
      "Minimum boiling azeotrope",
      "Ideal solution",
      "Zeotropic mixture"
    ],
    correctAnswer: 1,
    explanation: "Solutions showing large positive deviations from Raoult's law form minimum boiling azeotropes at a specific composition where the boiling point is lower than either pure component.",
    difficulty: "Easy"
  },
  {
    id: "mcq-5",
    question: "When acetone and chloroform are mixed, hydrogen bonding occurs between them. The resulting solution will show:",
    options: [
      "Positive deviation from Raoult's law with ΔH_mix > 0",
      "Negative deviation from Raoult's law with ΔH_mix < 0",
      "Ideal behavior with ΔH_mix = 0",
      "Positive deviation from Raoult's law with ΔV_mix > 0"
    ],
    correctAnswer: 1,
    explanation: "New intermolecular H-bonds form between the H-atom of chloroform and the carbonyl O-atom of acetone. A-B interactions become stronger than pure components, leading to negative deviation, heat evolution (ΔH_mix < 0), and volume contraction (ΔV_mix < 0).",
    difficulty: "Medium"
  },
  {
    id: "mcq-6",
    question: "Which of the following is a true colligative property?",
    options: [
      "Vapour pressure of solution",
      "Boiling point of solution",
      "Relative lowering of vapour pressure",
      "Freezing point of solution"
    ],
    correctAnswer: 2,
    explanation: "Vapour pressure, Boiling point, and Freezing point are not colligative properties. Only their relative change or shifts—Relative Lowering of VP ((p₁°-p₁)/p₁°), Elevation of Boiling Point (ΔTb), Depression of Freezing Point (ΔTf), and Osmotic Pressure (π)—are true colligative properties.",
    difficulty: "Medium"
  },
  {
    id: "mcq-7",
    question: "The molal elevation constant (Kb) of a solvent depends upon:",
    options: [
      "Nature of the solute dissolved",
      "Nature of the solvent",
      "Concentration of the solution",
      "Enthalpy of solution"
    ],
    correctAnswer: 1,
    explanation: "Kb = (R · M₁ · Tb°²) / (1000 · Δvap H). All terms in the equation (M₁, Tb°, Δvap H) are intrinsic properties of the SOLVENT ONLY. Kb is completely independent of solute identity or concentration.",
    difficulty: "Easy"
  },
  {
    id: "mcq-8",
    question: "An aqueous solution of 0.1 molal concentration will have the lowest freezing point for which solute?",
    options: [
      "Glucose",
      "Sodium chloride (NaCl)",
      "Barium chloride (BaCl₂)",
      "Aluminium sulphate [Al₂(SO₄)₃]"
    ],
    correctAnswer: 3,
    explanation: "Depression in freezing point ΔTf = i · Kf · m. Higher i causes GREATER depression, resulting in a LOWER freezing point. For Al₂(SO₄)₃, n = 2 + 3 = 5 ions → i = 5 (effective conc = 0.5 m), giving the largest ΔTf and therefore the lowest freezing point.",
    difficulty: "Medium"
  },
  {
    id: "mcq-9",
    question: "A 0.9% (m/V) aqueous NaCl solution is known as normal saline. Human red blood cells placed in 0.2% NaCl solution will:",
    options: [
      "Shrink due to exosmosis (plasmolysis)",
      "Swell and burst due to endosmosis (haemolysis)",
      "Remain unchanged because NaCl is an electrolyte",
      "Lose their haemoglobin by active transport"
    ],
    correctAnswer: 1,
    explanation: "0.2% NaCl is HYPOTONIC relative to RBC intracellular fluid (0.9%). Water rushes into the RBC by endosmosis, causing the cell to swell and burst (haemolysis).",
    difficulty: "Medium"
  },
  {
    id: "mcq-10",
    question: "Reverse osmosis is observed when:",
    options: [
      "Atmospheric pressure equals osmotic pressure",
      "Hydrostatic pressure on the solution side is less than osmotic pressure",
      "Hydrostatic pressure on the solution side exceeds osmotic pressure",
      "The temperature of the solvent is lowered below its freezing point"
    ],
    correctAnswer: 2,
    explanation: "When external mechanical pressure P applied to the concentrated solution exceeds the osmotic pressure (P > π), solvent molecules are forced to flow in reverse—from the solution through the semipermeable membrane into the pure solvent.",
    difficulty: "Easy"
  },
  {
    id: "mcq-11",
    question: "If van't Hoff factor for a solute is 0.5, it indicates that the solute in solution undergoes:",
    options: [
      "100% dissociation into 2 ions",
      "100% association to form dimers",
      "Partial dissociation with α = 0.5",
      "Hydrolysis with solvent"
    ],
    correctAnswer: 1,
    explanation: "For dimerization (2A ⇌ A₂), i = 1 - α(1 - 1/2) = 1 - α/2. If α = 1 (100% association), i = 1 - 1/2 = 0.5. Example: Benzoic acid in benzene.",
    difficulty: "Medium"
  },
  {
    id: "mcq-12",
    question: "The van't Hoff factor (i) for a 0.1 M solution of K₄[Fe(CN)₆] which is 50% dissociated is:",
    options: [
      "2.0",
      "3.0",
      "4.0",
      "5.0"
    ],
    correctAnswer: 1,
    explanation: "K₄[Fe(CN)₆] → 4 K⁺ + [Fe(CN)₆]⁴⁻, so n = 4 + 1 = 5 ions. i = 1 + (n - 1)α. Given α = 0.50. i = 1 + (5 - 1)(0.50) = 1 + 4(0.50) = 1 + 2.0 = 3.0.",
    difficulty: "Hard"
  },
  {
    id: "mcq-13",
    question: "Which of the following equimolar aqueous solutions will produce the maximum osmotic pressure at 25°C?",
    options: [
      "0.1 M Glucose",
      "0.1 M Urea",
      "0.1 M CaCl₂",
      "0.1 M FeCl₃"
    ],
    correctAnswer: 3,
    explanation: "Osmotic pressure π = i · C · R · T. For FeCl₃ → Fe³⁺ + 3Cl⁻ (i = 4, effective conc = 0.4 M); for CaCl₂ (i = 3, 0.3 M); for Glucose and Urea (i = 1, 0.1 M). FeCl₃ produces the highest effective concentration and maximum π.",
    difficulty: "Medium"
  },
  {
    id: "mcq-14",
    question: "A solution of 1.25 g of a non-electrolyte in 20 g of water freezes at 271.94 K. If Kf for water is 1.86 K kg mol⁻¹ and pure water freezes at 273.15 K, the molar mass of the solute is:",
    options: [
      "96.0 g/mol",
      "105.4 g/mol",
      "180.0 g/mol",
      "48.0 g/mol"
    ],
    correctAnswer: 0,
    explanation: "ΔTf = 273.15 - 271.94 = 1.21 K. M₂ = (Kf · w₂ · 1000) / (ΔTf · w₁) = (1.86 × 1.25 × 1000) / (1.21 × 20) = 2325 / 24.2 = 96.07 ≈ 96.0 g/mol.",
    difficulty: "Medium"
  },
  {
    id: "mcq-15",
    question: "The vapour pressure of pure liquid A is 70 torr and pure liquid B is 20 torr at 25°C. For an ideal solution with mole fraction of A = 0.4 in the liquid phase, the total vapour pressure is:",
    options: [
      "35 torr",
      "40 torr",
      "50 torr",
      "90 torr"
    ],
    correctAnswer: 1,
    explanation: "p_total = x_A p_A° + x_B p_B° = (0.4 × 70) + (0.6 × 20) = 28 + 12 = 40 torr.",
    difficulty: "Easy"
  },
  {
    id: "mcq-16",
    question: "In the above question (Q15), what is the mole fraction of A in the vapour phase (y_A)?",
    options: [
      "0.40",
      "0.70",
      "0.30",
      "0.50"
    ],
    correctAnswer: 1,
    explanation: "y_A = p_A / p_total = 28 / 40 = 0.70. Notice the vapour is enriched in the more volatile component A (y_A = 0.70 > x_A = 0.40).",
    difficulty: "Medium"
  },
  {
    id: "mcq-17",
    question: "What is the mass percent of glucose in a solution made by dissolving 25 g of glucose in 225 g of water?",
    options: [
      "10%",
      "11.1%",
      "9.0%",
      "25%"
    ],
    correctAnswer: 0,
    explanation: "Total mass of solution = 25 g solute + 225 g water = 250 g. Mass % = (25 / 250) × 100% = 10%.",
    difficulty: "Easy"
  },
  {
    id: "mcq-18",
    question: "Why does the freezing point depression method give an 'abnormal' molar mass for benzoic acid dissolved in benzene?",
    options: [
      "Benzoic acid decomposes in benzene",
      "Benzoic acid dimerizes via hydrogen bonds, halving the particle count",
      "Benzene reacts chemically with benzoic acid",
      "Benzoic acid completely ionizes into ions in benzene"
    ],
    correctAnswer: 1,
    explanation: "In non-polar benzene, benzoic acid molecules associate in pairs through two hydrogen bonds (dimerization). Particle count is halved (i ≈ 0.5), making the apparent molar mass roughly double (244 g/mol instead of 122 g/mol).",
    difficulty: "Medium"
  },
  {
    id: "mcq-19",
    question: "Two solutions of KNO₃ (M₁ = 0.1 M) and CH₃COOH (M₂ = 0.1 M) are prepared in water. Which statement is correct?",
    options: [
      "Both have identical boiling point elevation",
      "KNO₃ has greater boiling point elevation than CH₃COOH",
      "CH₃COOH has greater boiling point elevation than KNO₃",
      "Neither shows any boiling point elevation"
    ],
    correctAnswer: 1,
    explanation: "KNO₃ is a strong electrolyte that dissociates completely (i = 2). CH₃COOH is a weak electrolyte that is only partially dissociated (1 < i < 2). Since i(KNO₃) > i(CH₃COOH), ΔTb is greater for KNO₃.",
    difficulty: "Medium"
  },
  {
    id: "mcq-20",
    question: "The semipermeable membrane used in the reverse osmosis desalination of seawater is made of:",
    options: [
      "Parchment paper",
      "Cellulose acetate",
      "Gelatinous copper ferrocyanide",
      "Animal bladder"
    ],
    correctAnswer: 1,
    explanation: "Cellulose acetate is permeable to water molecules but impermeable to hydrated salt ions, and is mechanically strong enough to withstand high desalination pressures.",
    difficulty: "Easy"
  },
  {
    id: "mcq-21",
    question: "If an aqueous solution of a non-volatile solute has a boiling point of 100.104°C, its freezing point will be: (Kb = 0.52 K kg mol⁻¹, Kf = 1.86 K kg mol⁻¹)",
    options: [
      "-0.104°C",
      "-0.372°C",
      "+0.372°C",
      "-0.520°C"
    ],
    correctAnswer: 1,
    explanation: "ΔTb = 100.104 - 100.00 = 0.104 K. Molality m = ΔTb / Kb = 0.104 / 0.52 = 0.20 mol/kg. Now ΔTf = Kf · m = 1.86 × 0.20 = 0.372 K. Freezing point Tf = 0.00 - 0.372 = -0.372°C.",
    difficulty: "Hard"
  },
  {
    id: "mcq-22",
    question: "Which of the following pairs forms an ideal solution?",
    options: [
      "n-Hexane + n-Heptane",
      "Ethanol + Acetone",
      "Chloroform + Acetone",
      "Water + Nitric acid"
    ],
    correctAnswer: 0,
    explanation: "n-Hexane and n-Heptane are non-polar hydrocarbons of similar size and structure. A-B dispersion forces are virtually identical to A-A and B-B forces (ΔH_mix ≈ 0, ΔV_mix ≈ 0), forming an ideal solution.",
    difficulty: "Easy"
  },
  {
    id: "mcq-23",
    question: "The relative lowering of vapour pressure for a dilute solution containing 1 mol of non-volatile solute in 100 mol of solvent is:",
    options: [
      "0.01",
      "0.10",
      "0.99",
      "0.001"
    ],
    correctAnswer: 0,
    explanation: "RLVP = x₂ = n₂ / (n₁ + n₂) = 1 / (100 + 1) = 1 / 101 ≈ 0.0099 ≈ 0.01.",
    difficulty: "Easy"
  },
  {
    id: "mcq-24",
    question: "When common salt (NaCl) is added to ice-water mixture, the temperature drops below 0°C. This is because:",
    options: [
      "NaCl absorbs heat by exothermic reaction",
      "Dissolution of NaCl causes depression of freezing point",
      "NaCl decreases the heat capacity of water",
      "NaCl raises the boiling point of ice"
    ],
    correctAnswer: 1,
    explanation: "Adding NaCl creates a freezing mixture. The non-volatile salt ions lower the chemical potential and vapour pressure of the liquid phase, depressing the freezing point down to as low as -21°C.",
    difficulty: "Easy"
  },
  {
    id: "mcq-25",
    question: "A 1.0 M aqueous solution of glucose is compared with 1.0 m aqueous solution of glucose. Which is more concentrated at 20°C? (Density of water = 1.0 g/mL)",
    options: [
      "1.0 M solution is more concentrated",
      "1.0 m solution is more concentrated",
      "Both have exactly identical concentration",
      "Cannot be determined without atmospheric pressure"
    ],
    correctAnswer: 0,
    explanation: "1.0 m solution contains 1 mole glucose in 1000 g water (total volume > 1000 mL, roughly 1080 mL). 1.0 M solution contains 1 mole glucose in EXACTLY 1000 mL total solution (which contains only ~880 g water). Thus, 1.0 M has more solute per unit volume of water, making 1.0 M more concentrated than 1.0 m.",
    difficulty: "Hard"
  },
  {
    id: "mcq-26",
    question: "The osmotic pressure of a 5% (w/V) solution of a polymer of molar mass 50,000 g/mol at 300 K is (R = 0.0821 L atm K⁻¹ mol⁻¹):",
    options: [
      "0.0246 atm",
      "0.246 atm",
      "2.46 atm",
      "24.6 atm"
    ],
    correctAnswer: 0,
    explanation: "5% (w/V) = 5 g in 100 mL = 50 g in 1 L. Molarity C = 50 g / 50,000 g/mol = 10⁻³ mol/L. π = CRT = 10⁻³ × 0.0821 × 300 = 0.02463 atm.",
    difficulty: "Medium"
  },
  {
    id: "mcq-27",
    question: "The ebullioscopic constant (Kb) of water is 0.52 K kg mol⁻¹. This means that:",
    options: [
      "1 mole of non-volatile solute in 1 L of water boils at 100.52°C",
      "1 mole of non-volatile solute in 1 kg of water elevates the boiling point by 0.52 K",
      "100 g of water requires 0.52 kJ of heat to boil",
      "Boiling point of water increases by 0.52% for every 10 g salt"
    ],
    correctAnswer: 1,
    explanation: "By definition, Kb is the elevation in boiling point produced when 1 mole of a non-volatile non-electrolyte solute is dissolved in 1 kg (1000 g) of solvent (i.e. a 1 molal solution).",
    difficulty: "Easy"
  },
  {
    id: "mcq-28",
    question: "What is the van't Hoff factor (i) for complete ionization of potassium ferrocyanide K₄[Fe(CN)₆]?",
    options: [
      "1",
      "4",
      "5",
      "6"
    ],
    correctAnswer: 2,
    explanation: "K₄[Fe(CN)₆] (aq) → 4 K⁺ (aq) + [Fe(CN)₆]⁴⁻ (aq). 1 formula unit produces 4 potassium cations + 1 complex ferrocyanide anion = 5 ions. For complete ionization (α = 1), i = 5.",
    difficulty: "Easy"
  },
  {
    id: "mcq-29",
    question: "Which of the following statement is FALSE regarding colligative properties?",
    options: [
      "Osmotic pressure is directly proportional to absolute temperature",
      "Elevation in boiling point is directly proportional to molality",
      "Relative lowering of vapour pressure equals the mole fraction of solute",
      "Freezing point of a solution is directly proportional to van't Hoff factor"
    ],
    correctAnswer: 3,
    explanation: "Freezing point depression (ΔTf) is directly proportional to i, but the actual FREEZING POINT (Tf = Tf° - ΔTf) DECREASES as i increases (it is inversely related to i).",
    difficulty: "Hard"
  },
  {
    id: "mcq-30",
    question: "An electrolyte AB₂ is 20% ionized in aqueous solution. The van't Hoff factor (i) is:",
    options: [
      "1.2",
      "1.4",
      "1.6",
      "2.0"
    ],
    correctAnswer: 1,
    explanation: "AB₂ → A²⁺ + 2 B⁻ (n = 1 + 2 = 3 ions). i = 1 + (n - 1)α. Given α = 0.20. i = 1 + (3 - 1)(0.20) = 1 + 2(0.20) = 1 + 0.40 = 1.40.",
    difficulty: "Medium"
  }
];
