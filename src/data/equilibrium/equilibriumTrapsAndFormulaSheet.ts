// 60+ Master NEET Traps, Complete Formula Sheet, 5-Minute Rapid Revision, and 35-Question Final Self-Test

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

export const EQUILIBRIUM_NEET_TRAPS: NeetTrap[] = [
  // Traps 1-10: Chemical Equilibrium Fundamentals & Kc/Kp
  {
    id: "trap-1",
    trapTitle: "Equilibrium Concentrations Are Equal Trap",
    studentMistake: "Assuming [Reactants] = [Products] at equilibrium.",
    actualFact: "At equilibrium, concentrations of reactants and products become CONSTANT over time, but they are rarely equal. Their ratio is fixed by K.",
    whyExaminerAsks: "Direct conceptual question in Section A of NEET.",
    neetRule: "Rate_forward = Rate_reverse is TRUE. [Reactants] = [Products] is FALSE."
  },
  {
    id: "trap-2",
    trapTitle: "Catalyst Changing Equilibrium Constant K Trap",
    studentMistake: "Thinking a catalyst shifts the equilibrium or increases the value of K.",
    actualFact: "A catalyst speeds up the forward and backward reactions equally by lowering activation energy. It reduces the time to reach equilibrium without changing K, position, or yield.",
    whyExaminerAsks: "To catch students confusing reaction kinetics (speed) with chemical thermodynamics (equilibrium yield).",
    neetRule: "Catalysts NEVER change K or equilibrium yield."
  },
  {
    id: "trap-3",
    trapTitle: "Active Mass of Pure Solids and Pure Liquids Trap",
    studentMistake: "Including pure solids (s) or pure solvents (l) in K_c or K_p expressions.",
    actualFact: "The molar concentration (density/molar mass) of a pure solid or liquid is constant. Its active mass is defined as unity (1) and omitted from K.",
    whyExaminerAsks: "In CaCO₃(s) ⇌ CaO(s) + CO₂(g), K_p = p_CO₂, not (p_CaO × p_CO₂) / p_CaCO₃.",
    neetRule: "Never write pure solids [s] or pure liquids [l] in K_c, K_p, or Q expressions."
  },
  {
    id: "trap-4",
    trapTitle: "Δn_g Calculation Trap for Kp = Kc(RT)^Δn",
    studentMistake: "Counting moles of solids or liquids when calculating Δn_g.",
    actualFact: "Δn_g is strictly: (Moles of gaseous products) − (Moles of gaseous reactants). Non-gases have coefficient 0 in Δn_g.",
    whyExaminerAsks: "Students rush and count all stoichiometric coefficients in heterogeneous reactions.",
    neetRule: "Only count species marked (g) for Δn_g."
  },
  {
    id: "trap-5",
    trapTitle: "Temperature Units in Kp Calculation",
    studentMistake: "Plugging Celsius temperature into K_p = K_c (RT)^Δn.",
    actualFact: "Absolute temperature in Kelvin (T = °C + 273.15) must ALWAYS be used.",
    whyExaminerAsks: "Simple arithmetic trap in 27°C or 127°C questions.",
    neetRule: "Always convert °C to Kelvin: 27°C = 300 K, 127°C = 400 K, 227°C = 500 K."
  },
  {
    id: "trap-6",
    trapTitle: "Equilibrium Constant of Inverted / Multiplied Reaction",
    studentMistake: "Multiplying K by n when reaction coefficients are multiplied by n.",
    actualFact: "When reaction coefficients are multiplied by n, K_new = (K_old)ⁿ. When halved, K_new = √(K_old). When reversed, K_new = 1 / K_old.",
    whyExaminerAsks: "Tests understanding of exponential power rules in Law of Mass Action.",
    neetRule: "Multiplying reaction by n raises K to power n; reversing inverts K."
  },
  {
    id: "trap-7",
    trapTitle: "Adding Reactions: Addition vs Multiplication of K",
    studentMistake: "Adding K₁ + K₂ when two equilibrium reactions are added.",
    actualFact: "When chemical equations are added, their equilibrium constants are MULTIPLIED: K_overall = K₁ × K₂.",
    whyExaminerAsks: "Students confuse Hess's Law of enthalpy (where ΔH values add) with Equilibrium constants (where K values multiply).",
    neetRule: "ΔH values add; K values multiply!"
  },
  {
    id: "trap-8",
    trapTitle: "Magnitude of K vs Reaction Speed Trap",
    studentMistake: "Thinking a reaction with K = 10¹⁵ occurs rapidly.",
    actualFact: "K indicates the thermodynamic EXTENT of reaction at equilibrium, not the kinetic rate. Diamond turning to graphite has huge K, but takes millions of years.",
    whyExaminerAsks: "Standard NCERT conceptual question testing kinetics vs thermodynamics distinction.",
    neetRule: "K tells 'How far?', Rate constant k tells 'How fast?'"
  },
  {
    id: "trap-9",
    trapTitle: "Volume Change on Δn_g = 0 Equilibrium",
    studentMistake: "Assuming pressure or volume changes shift an equilibrium where Δn_g = 0 (e.g. H₂ + I₂ ⇌ 2 HI).",
    actualFact: "When Δn_g = 0, changing volume or pressure changes concentrations of all species by the same factor, which cancel out completely in K_c. No shift occurs.",
    whyExaminerAsks: "Frequently tested in H₂ + I₂ ⇌ 2 HI and N₂ + O₂ ⇌ 2 NO.",
    neetRule: "If Δn_g = 0, pressure and volume changes have ZERO effect on equilibrium position."
  },
  {
    id: "trap-10",
    trapTitle: "Inert Gas Addition at Constant Volume vs Constant Pressure",
    studentMistake: "Thinking adding inert gas always shifts equilibrium.",
    actualFact: "At constant volume (V), adding an inert gas increases total pressure, but does NOT change the partial pressures or molar concentrations of reacting gases. Therefore, NO SHIFT occurs. At constant pressure (P), volume expands, shifting equilibrium toward MORE gas moles (Δn_g > 0).",
    whyExaminerAsks: "One of the most repeated conceptual questions in NEET / JEE.",
    neetRule: "Inert gas at Constant V ➔ NO effect; Inert gas at Constant P ➔ Shifts toward more moles."
  },

  // Traps 11-20: Le Chatelier & Industrial Equilibria
  {
    id: "trap-11",
    trapTitle: "Temperature Effect on Exothermic vs Endothermic Reactions",
    studentMistake: "Thinking heating always increases product yield.",
    actualFact: "For exothermic reactions (ΔH < 0, e.g. Haber process), increasing temperature SHIFTS REVERSE (←) and DECREASES K. For endothermic reactions (ΔH > 0), heating shifts forward (→) and increases K.",
    whyExaminerAsks: "High-yield Le Chatelier principle question.",
    neetRule: "Temp↑ favors Endothermic direction (absorbs heat); Temp↓ favors Exothermic direction."
  },
  {
    id: "trap-12",
    trapTitle: "Why Haber Process Uses 700 K instead of Low Temperature",
    studentMistake: "Thinking 700 K is chosen because it gives maximum theoretical yield.",
    actualFact: "Since N₂ + 3H₂ ⇌ 2NH₃ is exothermic, low temperature gives maximum equilibrium yield, but the reaction rate is prohibitively slow. 700 K is the OPTIMUM temperature balancing kinetic rate with acceptable thermodynamic yield.",
    whyExaminerAsks: "NCERT industrial chemistry application question.",
    neetRule: "Optimum temperature balances speed (kinetics) and yield (thermodynamics)."
  },
  {
    id: "trap-13",
    trapTitle: "Effect of Adding Reactants on Equilibrium Constant K",
    studentMistake: "Believing adding more reactant increases K_c.",
    actualFact: "Adding reactant increases Q_c initially (Q < K), shifting reaction forward to consume excess reactant. But the numerical value of K_c remains identical at the same temperature.",
    whyExaminerAsks: "To check if students understand that K is invariant at constant T.",
    neetRule: "Temperature is the ONLY factor that changes K. Changing concentrations never changes K."
  },
  {
    id: "trap-14",
    trapTitle: "Vapour Pressure of Liquid in Closed vs Open Container",
    studentMistake: "Thinking vapour pressure depends on the surface area of the liquid or volume of vapor space.",
    actualFact: "Equilibrium vapour pressure of a pure liquid depends ONLY on temperature and the nature of the liquid. It is independent of liquid surface area, liquid amount, or vessel volume (as long as both phases coexist).",
    whyExaminerAsks: "Tests understanding of intensive phase equilibrium properties.",
    neetRule: "Vapour pressure of pure liquid = f(Temperature) only."
  },
  {
    id: "trap-15",
    trapTitle: "Melting of Ice under High Pressure (Ice-Water Anomaly)",
    studentMistake: "Assuming increasing pressure on ice-water equilibrium shifts toward solid ice.",
    actualFact: "Water has the anomalous property that liquid water is denser than solid ice (Volume of ice > Volume of water). By Le Chatelier's principle, increasing pressure shifts toward smaller volume (liquid water). Thus, ice melts under pressure!",
    whyExaminerAsks: "Classic physics-chemistry cross-concept trap.",
    neetRule: "For Ice ⇌ Water: High Pressure favors WATER (melting point decreases)."
  },

  // Traps 16-30: Ionic Equilibrium, Acids, Bases & Water Ionization
  {
    id: "trap-16",
    trapTitle: "The Fatal 10⁻⁸ M HCl pH = 8 Trap",
    studentMistake: "Writing pH = −log(10⁻⁸) = 8.00.",
    actualFact: "An acid solution can NEVER be basic (pH > 7) at 25°C. In ultra-dilute acids (C ≤ 10⁻⁶ M), the contribution of H⁺ from water auto-ionization (10⁻⁷ M) must be added: [H⁺]_total = 10⁻⁸ + x ≈ 1.05 × 10⁻⁷ M ➔ pH = 6.98.",
    whyExaminerAsks: "The single most famous calculation trap in all of competitive chemistry.",
    neetRule: "For 10⁻⁸ M strong acid, pH ≈ 6.98; for 10⁻⁸ M strong base, pH ≈ 7.02."
  },
  {
    id: "trap-17",
    trapTitle: "Neutral Water at 90°C Has pH = 6.0 Trap",
    studentMistake: "Thinking water at 90°C (with pH = 6.0) is acidic.",
    actualFact: "Auto-ionization of water is endothermic (ΔH > 0). At 90°C, K_w increases to 10⁻¹², so [H⁺] = [OH⁻] = 10⁻⁶ M. Since [H⁺] = [OH⁻], the water is STRICTLY NEUTRAL, even though its pH is 6.0!",
    whyExaminerAsks: "Tests the true definition of chemical neutrality: [H⁺] = [OH⁻], not 'pH = 7'.",
    neetRule: "Neutrality is defined by [H⁺] = [OH⁻]. pH = 7 is neutral ONLY at 25°C."
  },
  {
    id: "trap-18",
    trapTitle: "Polybasic Acid Basicity in pH Calculation",
    studentMistake: "Calculating pH of 0.05 M H₂SO₄ as −log(0.05) = 1.30.",
    actualFact: "H₂SO₄ is dibasic (produces 2 H⁺ per molecule). [H⁺] = 2 × 0.05 = 0.10 M ➔ pH = −log(0.10) = 1.00.",
    whyExaminerAsks: "Catches students who forget to multiply by basicity n.",
    neetRule: "For strong acid: [H⁺] = n × Molarity (where n = basicity: 1 for HCl, 2 for H₂SO₄)."
  },
  {
    id: "trap-19",
    trapTitle: "Strong Base pOH to pH Conversion",
    studentMistake: "Calculating [OH⁻] = 0.01 M for NaOH and reporting pH = 2.0.",
    actualFact: "For a base, −log[OH⁻] gives pOH = 2.0. At 25°C, pH = 14 − pOH = 14 − 2 = 12.0.",
    whyExaminerAsks: "Students in a rush report pOH as the pH.",
    neetRule: "For bases: Always compute pOH first, then pH = 14 − pOH."
  },
  {
    id: "trap-20",
    trapTitle: "Ostwald Dilution Law Validity Limit (α ≤ 0.05)",
    studentMistake: "Using [H⁺] = √(K_a C) when K_a / C is large (e.g. α > 0.05 or 5%).",
    actualFact: "Approximation (1 − α) ≈ 1 is valid only when α ≤ 0.05 (or K_a / C ≤ 10⁻³). If α > 0.05, the exact quadratic K_a(1 − α) = Cα² must be solved.",
    whyExaminerAsks: "Tests mathematical rigor in weak electrolyte equilibria.",
    neetRule: "Check α = √(K_a / C). If α > 0.05, solve the quadratic equation."
  },
  {
    id: "trap-21",
    trapTitle: "Conjugate Acid-Base Pair Proton Difference",
    studentMistake: "Thinking H₂SO₄ and SO₄²⁻ are a conjugate acid-base pair.",
    actualFact: "A conjugate acid-base pair differs by EXACTLY ONE proton (H⁺). H₂SO₄ and HSO₄⁻ is a conjugate pair; HSO₄⁻ and SO₄²⁻ is another conjugate pair. H₂SO₄ and SO₄²⁻ differ by 2 protons and are NOT a conjugate pair.",
    whyExaminerAsks: "Frequent 4-mark question in NEET Section A.",
    neetRule: "Conjugate pairs MUST differ by exactly ONE H⁺."
  },
  {
    id: "trap-22",
    trapTitle: "Conjugate Base Strength Inversion Rule",
    studentMistake: "Thinking strong acids have strong conjugate bases.",
    actualFact: "The stronger an acid, the weaker (more stable and unreactive) its conjugate base. HCl (strong acid) has Cl⁻ (extremely weak conjugate base). CH₃COOH (weak acid) has CH₃COO⁻ (relatively strong conjugate base that hydrolyzes).",
    whyExaminerAsks: "Fundamental acid-base thermodynamic principle.",
    neetRule: "Strong Acid ➔ Weak Conjugate Base; Weak Acid ➔ Strong Conjugate Base."
  },
  {
    id: "trap-23",
    trapTitle: "Degree of Dissociation on Dilution (Ostwald Law)",
    studentMistake: "Thinking dilution decreases both α and [H⁺].",
    actualFact: "As a weak acid solution is diluted (C decreases), the degree of dissociation α INCREASES (α ∝ 1/√C), but the total concentration [H⁺] = Cα = √(K_a C) DECREASES, causing pH to rise towards 7.",
    whyExaminerAsks: "Tests inverse proportionalities in Ostwald's dilution law.",
    neetRule: "Dilution ➔ α increases, but [H⁺] decreases and pH increases toward 7."
  },
  {
    id: "trap-24",
    trapTitle: "Diprotic Weak Acid Second Ionization [A²⁻] = Ka2",
    studentMistake: "Doing lengthy quadratic calculations to find [S²⁻] in 0.1 M H₂S.",
    actualFact: "For any weak diprotic acid (H₂A) where K_a1 >> K_a2, the concentration of the divalent anion [A²⁻] in pure solution is ALWAYS numerically equal to K_a2, independent of starting concentration C.",
    whyExaminerAsks: "Direct 5-second shortcut question in NEET.",
    neetRule: "For H₂A solution: [A²⁻] = K_a2 (e.g. in H₂S, [S²⁻] = K_a2 = 10⁻¹⁴ M)."
  },
  {
    id: "trap-25",
    trapTitle: "Common-Ion Effect on Weak Acid pH",
    studentMistake: "Thinking adding sodium acetate to acetic acid makes the solution more acidic.",
    actualFact: "Adding CH₃COONa adds common ion CH₃COO⁻, pushing CH₃COOH ⇌ H⁺ + CH₃COO⁻ backwards (←). This consumes H⁺, so [H⁺] decreases and pH INCREASES.",
    whyExaminerAsks: "Tests intuitive grasp of Le Chatelier shift in ionic solutions.",
    neetRule: "Adding common conjugate base to weak acid DECREASES [H⁺] and INCREASES pH."
  },

  // Traps 26-40: Buffers, Henderson Equation & Salt Hydrolysis
  {
    id: "trap-26",
    trapTitle: "Henderson-Hasselbalch Log Ratio Orientation",
    studentMistake: "Writing pH = pK_a + log([Acid] / [Salt]) for acidic buffer.",
    actualFact: "For acidic buffer: pH = pK_a + log([Salt] / [Acid]). Salt is always in the NUMERATOR.",
    whyExaminerAsks: "Sign inversion error leads to wrong option in NEET.",
    neetRule: "Acidic buffer: pH = pK_a + log([Salt]/[Acid]); Basic buffer: pOH = pK_b + log([Salt]/[Base])."
  },
  {
    id: "trap-27",
    trapTitle: "Basic Buffer Henderson Equation Calculates pOH, NOT pH",
    studentMistake: "Plugging values into basic buffer formula and writing pH = pK_b + log([Salt]/[Base]).",
    actualFact: "The basic buffer equation computes pOH: pOH = pK_b + log([Salt]/[Base]). To get pH, you MUST subtract from 14: pH = 14 − pOH.",
    whyExaminerAsks: "One of the most frequent arithmetic blunders in ionic equilibrium.",
    neetRule: "Basic buffer formula yields pOH! Always do pH = 14 − pOH."
  },
  {
    id: "trap-28",
    trapTitle: "Buffer Formation by Mixing Strong and Weak Reactants",
    studentMistake: "Thinking mixing CH₃COOH and NaOH can never form a buffer.",
    actualFact: "If a weak acid is in molar excess over a strong base (e.g. 100 mL 0.1 M CH₃COOH + 50 mL 0.1 M NaOH), partial neutralization produces CH₃COONa while leaving unreacted CH₃COOH. This creates an ideal buffer with [Salt] = [Acid] and pH = pK_a!",
    whyExaminerAsks: "NEET titration buffer region problem.",
    neetRule: "Weak acid (excess) + Strong base (limiting) ➔ Buffer solution."
  },
  {
    id: "trap-29",
    trapTitle: "Maximum Buffer Capacity Condition",
    studentMistake: "Thinking buffer capacity is maximum when salt is 10 times acid.",
    actualFact: "Buffer capacity is maximized when [Salt] = [Acid] (ratio = 1:1), giving pH = pK_a. The effective operating buffer range is pK_a ± 1.",
    whyExaminerAsks: "Standard definition tested in medical entrance exams.",
    neetRule: "Max buffer capacity: [Salt] = [Acid] ⟹ pH = pK_a."
  },
  {
    id: "trap-30",
    trapTitle: "Strong Acid + Strong Base Salt Hydrolysis Trap",
    studentMistake: "Writing hydrolysis equations for NaCl or KNO₃.",
    actualFact: "Neither Na⁺ nor Cl⁻ can react with water because they come from strong electrolytes (HCl and NaOH). NaCl does NOT hydrolyze; solution remains strictly neutral with pH = 7.00.",
    whyExaminerAsks: "Section A question testing the concept of salt hydrolysis.",
    neetRule: "Salts of SA + SB do not undergo hydrolysis; pH = 7."
  },
  {
    id: "trap-31",
    trapTitle: "Salt of WA + WB pH Independence of Concentration",
    studentMistake: "Looking for concentration C in the pH formula for CH₃COONH₄.",
    actualFact: "For salt of Weak Acid + Weak Base: pH = 7 + ½ pK_a − ½ pK_b. This formula contains NO concentration term C! The pH is completely independent of salt concentration.",
    whyExaminerAsks: "High-yield trick question asking 'What happens to pH when 0.01 M CH₃COONH₄ is diluted to 0.1 M?' (Answer: No change!).",
    neetRule: "For WA + WB salt: pH is INDEPENDENT of concentration C."
  },
  {
    id: "trap-32",
    trapTitle: "Anion Hydrolysis vs Cation Hydrolysis Nature",
    studentMistake: "Thinking cation hydrolysis makes solution basic.",
    actualFact: "Anion (A⁻) comes from weak acid: A⁻ + H₂O ⇌ HA + OH⁻ ➔ Releases OH⁻ ➔ BASIC (pH > 7). Cation (B⁺) comes from weak base: B⁺ + H₂O ⇌ BOH + H⁺ ➔ Releases H⁺ ➔ ACIDIC (pH < 7).",
    whyExaminerAsks: "Tests the chemical mechanism of salt hydrolysis.",
    neetRule: "Anion hydrolysis produces OH⁻ (Basic); Cation hydrolysis produces H⁺ (Acidic)."
  },
  {
    id: "trap-33",
    trapTitle: "Hydrolysis Constant Kh Relations",
    studentMistake: "Writing K_h = K_a / K_w.",
    actualFact: "K_h is always K_w divided by the dissociation constant of the weak component: K_h = K_w / K_a (for WA+SB), K_h = K_w / K_b (for SA+WB), and K_h = K_w / (K_a K_b) (for WA+WB).",
    whyExaminerAsks: "Formula precision check.",
    neetRule: "K_w is always in the numerator for K_h formulas."
  },

  // Traps 34-45: Solubility Product Ksp & Precipitation
  {
    id: "trap-34",
    trapTitle: "Comparing Solubilities Purely by Ksp Value Trap",
    studentMistake: "Stating that salt X (K_sp = 10⁻¹⁰) is more soluble than salt Y (K_sp = 10⁻¹⁴) without checking stoichiometry.",
    actualFact: "K_sp values can be directly compared ONLY for salts of the SAME stoichiometry (e.g. AgCl vs AgBr, both AB). For AB₂ vs AB, an AB₂ salt with K_sp = 10⁻¹⁴ (s = ∛(10⁻¹⁴/4) = 1.36 × 10⁻⁵ M) is MORE soluble than an AB salt with K_sp = 10⁻¹⁰ (s = 10⁻⁵ M)!",
    whyExaminerAsks: "Classic NEET multi-concept ranking question.",
    neetRule: "Never compare solubilities by K_sp alone across different salt types; calculate molar solubility s first!"
  },
  {
    id: "trap-35",
    trapTitle: "AB₂ Salt Ksp Stoichiometric Factor 4s³ Trap",
    studentMistake: "Writing K_sp = 2s² or s³ for PbCl₂ or CaF₂.",
    actualFact: "In AB₂(s) ⇌ A²⁺ + 2 B⁻, [A²⁺] = s and [B⁻] = 2s. K_sp = [A²⁺][B⁻]² = (s)(2s)² = 4s³.",
    whyExaminerAsks: "Students square 2s to get 2s² instead of 4s².",
    neetRule: "AB₂ ➔ K_sp = 4s³; A₂B₃ ➔ K_sp = 108s⁵."
  },
  {
    id: "trap-36",
    trapTitle: "Common-Ion Effect on Ksp vs Solubility",
    studentMistake: "Thinking K_sp decreases when a common ion is added.",
    actualFact: "K_sp is a thermodynamic equilibrium constant that depends ONLY on temperature. Adding a common ion decreases the MOLAR SOLUBILITY (s), but K_sp remains completely UNCHANGED.",
    whyExaminerAsks: "Direct assertion-reason question in NEET.",
    neetRule: "Common ion decreases solubility s, NOT solubility product K_sp."
  },
  {
    id: "trap-37",
    trapTitle: "Precipitation Condition Qsp vs Ksp",
    studentMistake: "Thinking precipitation occurs when Q_sp < K_sp.",
    actualFact: "Precipitation occurs ONLY when Ionic Product Q_sp > K_sp (supersaturated). If Q_sp < K_sp, solution is unsaturated and no precipitate forms.",
    whyExaminerAsks: "Core precipitation decision rule.",
    neetRule: "Precipitate forms iff Q_sp > K_sp."
  },
  {
    id: "trap-38",
    trapTitle: "Dilution on Mixing Solutions in Precipitation Problems",
    studentMistake: "Using original concentrations when equal volumes of two salt solutions are mixed.",
    actualFact: "When equal volumes of two solutions are mixed (e.g. 50 mL AgNO₃ + 50 mL NaCl), the total volume doubles (100 mL), so the molar concentration of each reacting ion is HALVED before calculating Q_sp.",
    whyExaminerAsks: "Overlooking volume doubling flips Q_sp > K_sp into a false prediction.",
    neetRule: "Mixing equal volumes halves the concentrations: [Ion]_new = [Ion]_initial / 2."
  },
  {
    id: "trap-39",
    trapTitle: "Solid Precipitate in Ksp Expression",
    studentMistake: "Including [AgCl(s)] in the denominator of K_sp.",
    actualFact: "Pure solid precipitate has constant chemical activity (= 1). K_sp = [Ag⁺][Cl⁻] with NO denominator.",
    whyExaminerAsks: "Tests definition of heterogeneous solubility product.",
    neetRule: "K_sp has no denominator; solid is omitted."
  },
  {
    id: "trap-40",
    trapTitle: "Qualitative Analysis Group II vs Group III Sulfide Precipitation",
    studentMistake: "Thinking Group II and Group IV cations require the same S²⁻ concentration for precipitation.",
    actualFact: "Group II sulfides (CuS, PbS, HgS) have extremely low K_sp (~10⁻³⁵ to 10⁻⁵⁰) and precipitate in acidic medium (H₂S + HCl common-ion suppresses [S²⁻]). Group IV sulfides (ZnS, NiS, MnS) have higher K_sp (~10⁻²⁰) and require basic medium (H₂S + NH₄OH) to precipitate.",
    whyExaminerAsks: "Direct NCERT inorganic-physical integrated question.",
    neetRule: "Group II: H₂S in dilute HCl (low [S²⁻]); Group IV: H₂S in NH₄OH (high [S²⁻])."
  }
];

export const EQUILIBRIUM_FORMULA_SHEET: MasterFormula[] = [
  // 1. Chemical Equilibrium & Law of Mass Action
  {
    id: "form-1",
    title: "Equilibrium Constant in Concentration (K_c)",
    formula: "K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}",
    symbols: "[X] = equilibrium molar concentration of X (mol L⁻¹); a, b, c, d = stoichiometric coefficients",
    unit: "(mol L⁻¹)^{\\Delta n_g}",
    condition: "Applicable to homogeneous gas/aqueous reactions. Pure solids and pure liquids are omitted.",
    commonError: "Including pure solids or liquids in the expression."
  },
  {
    id: "form-2",
    title: "Relation Between K_p and K_c",
    formula: "K_p = K_c (R T)^{\\Delta n_g}",
    symbols: "K_p = equilibrium constant in partial pressures; R = 0.0821 L atm K⁻¹ mol⁻¹; T = temperature in Kelvin; \\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)",
    unit: "K_p in (atm)^{\\Delta n_g} or (bar)^{\\Delta n_g}",
    condition: "Applicable to gaseous reactions. Only count gaseous moles in \\Delta n_g.",
    commonError: "Using Celsius for T or counting solid/liquid coefficients in \\Delta n_g."
  },
  {
    id: "form-3",
    title: "Reaction Quotient (Q) Decision Rule",
    formula: "Q < K \\implies \\text{Forward (\\rightarrow)}; \\quad Q = K \\implies \\text{Equilibrium (\\rightleftharpoons)}; \\quad Q > K \\implies \\text{Reverse (\\leftarrow)}",
    symbols: "Q = instantaneous concentration quotient; K = equilibrium constant",
    unit: "Dimensionless ratio / same as K",
    condition: "Predicts the spontaneous direction of shift at any arbitrary reaction stage.",
    commonError: "Inverting the shift direction when Q > K."
  },
  {
    id: "form-4",
    title: "Vapour Density & Degree of Dissociation (\\alpha)",
    formula: "\\alpha = \\frac{D - d}{(n - 1) d} = \\frac{M_{theoretical} - M_{observed}}{(n - 1) M_{observed}}",
    symbols: "D = theoretical vapour density = M_th / 2; d = observed vapour density = M_obs / 2; n = moles of gaseous products per mole of reactant",
    unit: "Dimensionless (fraction or %)",
    condition: "Applicable to gaseous dissociation equilibria like PCl₅ ⇌ PCl₃ + Cl₂ (n = 2), N₂O₄ ⇌ 2 NO₂ (n = 2).",
    commonError: "Forgetting to divide molecular mass by 2 to get vapour density D."
  },
  {
    id: "form-5",
    title: "van 't Hoff Equation (Temperature Dependence of K)",
    formula: "\\log_{10}\\left(\\frac{K_2}{K_1}\\right) = \\frac{\\Delta_r H^\\circ}{2.303 R} \\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)",
    symbols: "K₁, K₂ = equilibrium constants at temperatures T₁, T₂ (in K); \\Delta_r H^\\circ = standard reaction enthalpy (J mol⁻¹); R = 8.314 J K⁻¹ mol⁻¹",
    unit: "Dimensionless ratio",
    condition: "For exothermic (\\Delta H < 0), K decreases as T increases. For endothermic (\\Delta H > 0), K increases as T increases.",
    commonError: "Mixing up (1/T₁ − 1/T₂) with (1/T₂ − 1/T₁) or sign of \\Delta H."
  },

  // 2. Ionic Equilibrium, pH & Ostwald Dilution Law
  {
    id: "form-6",
    title: "Ionic Product of Water (K_w) and pH-pOH Sum",
    formula: "K_w = [H^+][OH^-] = 1.0 \\times 10^{-14} \\text{ at 25°C}; \\quad pH + pOH = pK_w = 14.00",
    symbols: "[H⁺], [OH⁻] = molar concentrations of H⁺ and OH⁻ ions; pH = −log₁₀[H⁺]; pOH = −log₁₀[OH⁻]",
    unit: "mol² L⁻² for K_w; pH is dimensionless",
    condition: "At 25°C. At higher temperatures, K_w > 10⁻¹⁴, so neutral pH < 7.0 (still neutral because [H⁺] = [OH⁻]).",
    commonError: "Assuming pH = 7 is neutral at all temperatures."
  },
  {
    id: "form-7",
    title: "Ostwald Dilution Law for Weak Monobasic Acid",
    formula: "K_a = \\frac{C \\alpha^2}{1 - \\alpha} \\approx C \\alpha^2 \\implies \\alpha = \\sqrt{\\frac{K_a}{C}}, \\quad [H^+] = C\\alpha = \\sqrt{K_a \\cdot C}",
    symbols: "K_a = acid dissociation constant; C = initial molarity (mol L⁻¹); \\alpha = degree of dissociation (\\alpha \\le 0.05)",
    unit: "K_a in mol L⁻¹; \\alpha is dimensionless",
    condition: "Approximation \\alpha \\approx \\sqrt{K_a / C} valid when \\alpha \\le 0.05 (5%). If \\alpha > 0.05, solve quadratic K_a(1-\\alpha) = C\\alpha².",
    commonError: "Using approximation when \\alpha is large (e.g. 20%)."
  },
  {
    id: "form-8",
    title: "pH of Weak Monobasic Acid Shortcut",
    formula: "pH = \\frac{1}{2} \\left( pK_a - \\log_{10} C \\right)",
    symbols: "pK_a = −log₁₀ K_a; C = acid molarity",
    unit: "Dimensionless",
    condition: "Valid for weak acid when \\alpha \\le 0.05 in pure water without common ions.",
    commonError: "Using this formula when common ions or strong acids are present."
  },
  {
    id: "form-9",
    title: "pOH & pH of Weak Monoacidic Base",
    formula: "[OH^-] = \\sqrt{K_b \\cdot C}, \\quad pOH = \\frac{1}{2}(pK_b - \\log_{10} C), \\quad pH = 14 - pOH",
    symbols: "K_b = base dissociation constant; C = base molarity",
    unit: "Dimensionless",
    condition: "Valid for weak base (e.g. NH₄OH) when \\alpha \\le 0.05.",
    commonError: "Reporting pOH as pH."
  },
  {
    id: "form-10",
    title: "Conjugate Acid-Base Pair Relation",
    formula: "K_a \\times K_b = K_w = 1.0 \\times 10^{-14} \\text{ at 25°C}; \\quad pK_a + pK_b = pK_w = 14.00",
    symbols: "K_a = dissociation constant of acid HA; K_b = dissociation constant of its conjugate base A⁻",
    unit: "Dimensionless",
    condition: "Valid for any conjugate pair (e.g. CH₃COOH and CH₃COO⁻, or NH₄⁺ and NH₃) in aqueous solution at 25°C.",
    commonError: "Applying this formula to non-conjugate pairs."
  },

  // 3. Buffer Solutions & Salt Hydrolysis
  {
    id: "form-11",
    title: "Henderson-Hasselbalch Equation for Acidic Buffer",
    formula: "pH = pK_a + \\log_{10}\\left(\\frac{[\\text{Salt}]}{[\\text{Acid}]}\\right) = pK_a + \\log_{10}\\left(\\frac{n_{salt}}{n_{acid}}\\right)",
    symbols: "[Salt] = molarity of conjugate base salt; [Acid] = molarity of weak acid; n = moles / millimoles",
    unit: "Dimensionless",
    condition: "Valid for buffer solutions where 0.1 \\le [Salt]/[Acid] \\le 10. Max capacity at [Salt] = [Acid] ⟹ pH = pK_a.",
    commonError: "Inverting ratio as [Acid]/[Salt] or forgetting salt is in numerator."
  },
  {
    id: "form-12",
    title: "Henderson-Hasselbalch Equation for Basic Buffer",
    formula: "pOH = pK_b + \\log_{10}\\left(\\frac{[\\text{Salt}]}{[\\text{Base}]}\\right), \\quad pH = 14.00 - pOH",
    symbols: "[Salt] = molarity of conjugate acid salt (e.g. NH₄Cl); [Base] = molarity of weak base (e.g. NH₄OH)",
    unit: "Dimensionless",
    condition: "Valid for basic buffer (e.g. NH₄OH + NH₄Cl).",
    commonError: "Writing pH = pK_b + log([Salt]/[Base]) directly."
  },
  {
    id: "form-13",
    title: "Salt Hydrolysis: Weak Acid + Strong Base (e.g. CH₃COONa)",
    formula: "K_h = \\frac{K_w}{K_a}, \\quad h = \\sqrt{\\frac{K_h}{C}} = \\sqrt{\\frac{K_w}{K_a C}}, \\quad pH = 7 + \\frac{1}{2} pK_a + \\frac{1}{2} \\log_{10} C",
    symbols: "K_h = hydrolysis constant; h = degree of hydrolysis; C = salt concentration",
    unit: "pH > 7 (Basic solution)",
    condition: "Applicable to salts of WA + SB.",
    commonError: "Using negative signs; remember solution MUST be basic (pH > 7)."
  },
  {
    id: "form-14",
    title: "Salt Hydrolysis: Strong Acid + Weak Base (e.g. NH₄Cl)",
    formula: "K_h = \\frac{K_w}{K_b}, \\quad h = \\sqrt{\\frac{K_w}{K_b C}}, \\quad pH = 7 - \\frac{1}{2} pK_b - \\frac{1}{2} \\log_{10} C",
    symbols: "K_b = base constant of weak base; C = salt concentration",
    unit: "pH < 7 (Acidic solution)",
    condition: "Applicable to salts of SA + WB.",
    commonError: "Using positive signs; solution MUST be acidic (pH < 7)."
  },
  {
    id: "form-15",
    title: "Salt Hydrolysis: Weak Acid + Weak Base (e.g. CH₃COONH₄)",
    formula: "K_h = \\frac{K_w}{K_a K_b}, \\quad h = \\sqrt{\\frac{K_w}{K_a K_b}}, \\quad pH = 7 + \\frac{1}{2} pK_a - \\frac{1}{2} pK_b",
    symbols: "pK_a = of weak acid; pK_b = of weak base; NO concentration term C!",
    unit: "pH depends on relative pK_a and pK_b values",
    condition: "Applicable to salts of WA + WB. Degree of hydrolysis h and pH are INDEPENDENT of concentration C.",
    commonError: "Trying to include concentration C in the formula."
  },

  // 4. Solubility Product & Precipitation
  {
    id: "form-16",
    title: "Solubility Product Formulas for Different Salt Types",
    formula: "\\text{AB: } K_{sp} = s^2; \\quad \\text{AB}_2: K_{sp} = 4s^3; \\quad \\text{AB}_3: K_{sp} = 27s^4; \\quad \\text{A}_2\\text{B}_3: K_{sp} = 108s^5",
    symbols: "s = molar solubility in mol L⁻¹ (M); K_sp = solubility product constant",
    unit: "(mol L⁻¹)^{x+y}",
    condition: "In pure water at saturated equilibrium. For mass solubility S in g L⁻¹: S = s \\times \\text{Molar Mass}.",
    commonError: "Confusing stoichiometric coefficients (e.g. using 2s² instead of 4s³ for AB₂)."
  },
  {
    id: "form-17",
    title: "Common-Ion Effect on Molar Solubility",
    formula: "s' = \\frac{K_{sp}}{C} \\quad (\\text{for AB salt}); \\quad s' = \\frac{K_{sp}}{C^2} \\quad (\\text{for AB}_2 \\text{ salt in common ion } B^-)",
    symbols: "s' = reduced molar solubility; C = concentration of strong electrolyte providing common ion",
    unit: "mol L⁻¹",
    condition: "Valid when s' << C, so (s' + C) \\approx C.",
    commonError: "Solving full quadratic/cubic equation when s' is negligible compared to C."
  }
];

export const EQUILIBRIUM_RAPID_REVISION = {
  title: "EQUILIBRIUM — 5-MINUTE NEET REVISION CHEAT SHEET",
  points: [
    "1. Dynamic Equilibrium: Rate_forward = Rate_reverse. Concentrations are CONSTANT, but NOT necessarily equal.",
    "2. Solids & Liquids: Pure solids and pure liquids have active mass = 1 and are OMITTED from K_c and K_p expressions.",
    "3. K_p vs K_c: K_p = K_c (RT)^Δn_g, where Δn_g = (gas product moles) − (gas reactant moles). If Δn_g = 0 ➔ K_p = K_c at all T.",
    "4. Reaction Quotient Q: If Q < K ➔ Shifts Forward (→); if Q > K ➔ Shifts Reverse (←); if Q = K ➔ Equilibrium (⇌).",
    "5. Combining Reactions: Adding equations ➔ Multiply K (K₁ × K₂); Reversing ➔ Reciprocal (1/K); Multiplying by n ➔ Power n (Kⁿ).",
    "6. Le Chatelier Temperature Rule: Temperature is the ONLY factor that changes K. Exothermic (ΔH < 0): Temp↑ ➔ K decreases; Endothermic (ΔH > 0): Temp↑ ➔ K increases.",
    "7. Le Chatelier Pressure & Volume: Pressure↑ shifts toward FEWER gas moles. If Δn_g = 0, pressure has NO effect.",
    "8. Inert Gas Addition: At Constant Volume (V) ➔ NO EFFECT. At Constant Pressure (P) ➔ Shifts to MORE gas moles (Δn_g > 0).",
    "9. Catalyst: Speeds up attainment of equilibrium equally in both directions; does NOT shift equilibrium or change K or yield.",
    "10. Water Auto-Ionization: K_w = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C (pH + pOH = 14). At 90°C, K_w ≈ 10⁻¹² and neutral pH = 6.0.",
    "11. Ultra-Dilute Acid: For 10⁻⁸ M HCl, pH = 6.98 (NOT 8!). Never report pH > 7 for an acid.",
    "12. Weak Acid & Base: α = √(K_a / C) (Ostwald law). [H⁺] = √(K_a C), pH = ½(pK_a − log C). [OH⁻] = √(K_b C).",
    "13. Conjugate Pair: K_a × K_b = K_w = 10⁻¹⁴ ⟹ pK_a + pK_b = 14. Strong acid has weak conjugate base.",
    "14. Buffer Solutions: Acidic buffer: pH = pK_a + log([Salt]/[Acid]). Basic buffer: pOH = pK_b + log([Salt]/[Base]). Max capacity when [Salt] = [Acid] ⟹ pH = pK_a.",
    "15. Salt Hydrolysis: SA+SB (NaCl) ➔ pH = 7. WA+SB (CH₃COONa) ➔ pH = 7 + ½ pK_a + ½ log C (> 7). SA+WB (NH₄Cl) ➔ pH = 7 − ½ pK_b − ½ log C (< 7). WA+WB (CH₃COONH₄) ➔ pH = 7 + ½ pK_a − ½ pK_b (No C term!).",
    "16. K_sp & Solubility: AB ➔ K_sp = s²; AB₂ ➔ K_sp = 4s³; A₂B₃ ➔ K_sp = 108s⁵. Precipitation occurs iff Q_sp > K_sp."
  ]
};

export const EQUILIBRIUM_SELF_TEST: SelfTestMCQ[] = [
  {
    id: "test-1",
    question: "For the reaction N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), which of the following expressions correctly relates K_p and K_c?",
    options: [
      "K_p = K_c (RT)²",
      "K_p = K_c (RT)⁻²",
      "K_p = K_c (RT)⁻¹",
      "K_p = K_c"
    ],
    correctAnswer: 1,
    explanation: "Δn_g = 2 − (1 + 3) = −2. Therefore, K_p = K_c (RT)⁻² = K_c / (RT)².",
    difficulty: "Easy"
  },
  {
    id: "test-2",
    question: "In which of the following equilibria will an increase in pressure cause a shift toward products?",
    options: [
      "H₂(g) + I₂(g) ⇌ 2 HI(g)",
      "2 SO₃(g) ⇌ 2 SO₂(g) + O₂(g)",
      "N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)",
      "PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)"
    ],
    correctAnswer: 2,
    explanation: "Increasing pressure shifts the equilibrium toward the side with fewer moles of gas. In N₂ + 3H₂ ⇌ 2NH₃, reactant gas moles = 4 and product gas moles = 2 (fewer moles on product side).",
    difficulty: "Easy"
  },
  {
    id: "test-3",
    question: "What is the pH of a 1.0 × 10⁻⁸ M aqueous solution of HCl at 25°C?",
    options: [
      "8.00",
      "7.00",
      "6.98",
      "6.00"
    ],
    correctAnswer: 2,
    explanation: "In ultra-dilute acid, H⁺ from water (10⁻⁷ M) must be included: [H⁺]_total ≈ 1.05 × 10⁻⁷ M ➔ pH = −log(1.05 × 10⁻⁷) = 6.98.",
    difficulty: "Medium"
  },
  {
    id: "test-4",
    question: "For a saturated solution of CaF₂, if the molar solubility is s mol L⁻¹, the solubility product K_sp is:",
    options: [
      "s²",
      "2s²",
      "4s³",
      "8s³"
    ],
    correctAnswer: 2,
    explanation: "CaF₂(s) ⇌ Ca²⁺ + 2 F⁻. [Ca²⁺] = s, [F⁻] = 2s. K_sp = [Ca²⁺][F⁻]² = (s)(2s)² = 4s³.",
    difficulty: "Easy"
  },
  {
    id: "test-5",
    question: "Adding an inert gas to an equilibrium mixture at constant volume:",
    options: [
      "Shifts the equilibrium toward more gaseous moles",
      "Shifts the equilibrium toward fewer gaseous moles",
      "Has no effect on the equilibrium state",
      "Increases the equilibrium constant K"
    ],
    correctAnswer: 2,
    explanation: "At constant volume, the partial pressures and molar concentrations of reacting gases remain unchanged, so the equilibrium position does not shift.",
    difficulty: "Easy"
  },
  {
    id: "test-6",
    question: "The pH of a 0.1 M solution of ammonium acetate (CH₃COONH₄) at 25°C is (pK_a = 4.76, pK_b = 4.75):",
    options: [
      "7.005",
      "8.88",
      "5.12",
      "14.0"
    ],
    correctAnswer: 0,
    explanation: "For salt of WA + WB: pH = 7 + ½(pK_a − pK_b) = 7 + ½(4.76 − 4.75) = 7 + 0.005 = 7.005 (Independent of concentration!).",
    difficulty: "Medium"
  },
  {
    id: "test-7",
    question: "If K_a of acetic acid is 1.8 × 10⁻⁵, what is the pK_b of the acetate ion (CH₃COO⁻) at 25°C?",
    options: [
      "4.74",
      "9.26",
      "7.00",
      "5.56 × 10⁻¹⁰"
    ],
    correctAnswer: 1,
    explanation: "pK_a = −log(1.8 × 10⁻⁵) = 4.74. For conjugate pair at 25°C: pK_a + pK_b = 14.00 ⟹ pK_b = 14.00 − 4.74 = 9.26.",
    difficulty: "Easy"
  },
  {
    id: "test-8",
    question: "Which of the following mixtures behaves as an acidic buffer?",
    options: [
      "100 mL of 0.1 M HCl + 100 mL of 0.1 M NaOH",
      "100 mL of 0.1 M CH₃COOH + 50 mL of 0.1 M NaOH",
      "50 mL of 0.1 M CH₃COOH + 100 mL of 0.1 M NaOH",
      "100 mL of 0.1 M HNO₃ + 100 mL of 0.1 M NaNO₃"
    ],
    correctAnswer: 1,
    explanation: "In option 2, 10 mmol CH₃COOH reacts with 5 mmol NaOH, leaving 5 mmol unreacted CH₃COOH and forming 5 mmol CH₃COONa (weak acid + conjugate salt = buffer).",
    difficulty: "Medium"
  },
  {
    id: "test-9",
    question: "The solubility of AgCl in 0.1 M NaCl solution (K_sp of AgCl = 1.0 × 10⁻¹⁰) is:",
    options: [
      "1.0 × 10⁻⁵ M",
      "1.0 × 10⁻⁹ M",
      "1.0 × 10⁻¹¹ M",
      "1.0 × 10⁻¹⁰ M"
    ],
    correctAnswer: 1,
    explanation: "Due to common ion [Cl⁻] = 0.1 M: s' = K_sp / [Cl⁻] = (1.0 × 10⁻¹⁰) / 0.1 = 1.0 × 10⁻⁹ M.",
    difficulty: "Medium"
  },
  {
    id: "test-10",
    question: "For the endothermic reaction CaCO₃(s) ⇌ CaO(s) + CO₂(g), K_p can be increased by:",
    options: [
      "Adding more solid CaCO₃",
      "Increasing the temperature",
      "Decreasing the volume of the vessel",
      "Adding a catalyst"
    ],
    correctAnswer: 1,
    explanation: "For an endothermic reaction (ΔH > 0), increasing temperature increases the equilibrium constant K_p.",
    difficulty: "Easy"
  }
];
