// Master Terms, 12 Comparison Tables, and Step-by-Step Concepts for NEET UG 2026 Equilibrium

export interface EquilibriumTerm {
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

export const EQUILIBRIUM_TERMS: EquilibriumTerm[] = [
  {
    term: "Dynamic Equilibrium",
    definition: "A state in a reversible process where the rate of the forward reaction equals the rate of the reverse reaction, and macroscopic properties (concentrations, pressure, temperature, colour) remain invariant over time.",
    formula: "\\text{Rate}_\\text{forward} = \\text{Rate}_\\text{backward}",
    unit: "Dimensionless state",
    neetNote: "Equilibrium is DYNAMIC, meaning chemical change continues unabated at the microscopic particle level."
  },
  {
    term: "Law of Mass Action (Guldberg & Waage)",
    definition: "At a given temperature, the rate of a chemical reaction is directly proportional to the product of active masses (molar concentrations) of the reacting species, each raised to a power equal to its stoichiometric coefficient in the balanced equation.",
    formula: "r_f = k_f [A]^a [B]^b, \\quad r_b = k_b [C]^c [D]^d",
    neetNote: "Pure solids and pure liquids have constant density, so their active mass is taken as unity (1) and omitted from K expressions."
  },
  {
    term: "Equilibrium Constant in Concentration (K_c)",
    definition: "The ratio of the product of equilibrium concentrations of products to the product of equilibrium concentrations of reactants, each raised to their respective stoichiometric coefficients.",
    formula: "K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}",
    unit: "(\\text{mol L}^{-1})^{\\Delta n_g}",
    neetNote: "K_c depends SOLELY on temperature for a given reaction. It is completely independent of initial concentrations, volume, pressure, and catalyst."
  },
  {
    term: "Equilibrium Constant in Partial Pressures (K_p)",
    definition: "The equilibrium constant expressed in terms of partial pressures of reacting gases in a closed system.",
    formula: "K_p = \\frac{(p_C)^c (p_D)^d}{(p_A)^a (p_B)^b}",
    unit: "(\\text{atm})^{\\Delta n_g} \\text{ or } (\\text{bar})^{\\Delta n_g}",
    neetNote: "Related to K_c via K_p = K_c (R T)^{\\Delta n_g}, where R = 0.0821 L atm K⁻¹ mol⁻¹ (or 0.0831 L bar K⁻¹ mol⁻¹) and T is in Kelvin."
  },
  {
    term: "Reaction Quotient (Q_c / Q_p)",
    definition: "The ratio of concentrations (or partial pressures) of products to reactants at any arbitrary point in time during the reaction, not necessarily at equilibrium.",
    formula: "Q_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b} \\quad (\\text{at arbitrary time } t)",
    neetNote: "If Q < K ➔ forward shift (→); if Q > K ➔ reverse shift (←); if Q = K ➔ system is at dynamic equilibrium."
  },
  {
    term: "Le Chatelier's Principle",
    definition: "When an external stress (change in concentration, pressure, volume, or temperature) is applied to a system at equilibrium, the system readjusts itself in such a direction as to partially counteract or relieve the imposed stress.",
    neetNote: "Temperature is the only stress that changes the numerical value of K. All other stresses shift the equilibrium position without changing K."
  },
  {
    term: "Strong vs Weak Electrolytes",
    definition: "Strong electrolytes dissociate virtually 100% (α ≈ 1) into ions in aqueous solution (e.g. HCl, NaOH, NaCl), whereas weak electrolytes dissociate only partially (α << 1) establishing an ionization equilibrium (e.g. CH₃COOH, NH₃).",
    neetNote: "'Strong' refers to the degree of ionization α, NOT to whether a solution is concentrated or dilute."
  },
  {
    term: "Brønsted-Lowry Conjugate Acid-Base Pair",
    definition: "An acid is a proton (H⁺) donor; a base is a proton (H⁺) acceptor. A pair of species that differ by exactly ONE proton (H⁺) constitutes a conjugate acid-base pair.",
    formula: "\\text{Acid} \\rightleftharpoons \\text{Conjugate Base} + H^+",
    neetNote: "Conjugate base of strong acid is weak (stable); conjugate base of weak acid is strong."
  },
  {
    term: "Acid Ionization Constant (K_a) & pK_a",
    definition: "Quantitative measure of the strength of an acid in aqueous solution. pK_a = −log₁₀(K_a). Lower pK_a denotes a stronger acid.",
    formula: "K_a = \\frac{[H^+][A^-]}{[HA]} = \\frac{C\\alpha^2}{1-\\alpha}, \\quad pK_a = -\\log_{10} K_a",
    neetNote: "For weak monobasic acid where α ≤ 0.05, [H⁺] ≈ √(K_a C) and pH = ½(pK_a − log C)."
  },
  {
    term: "Ionic Product of Water (K_w)",
    definition: "The product of the molar concentrations of hydrogen ions and hydroxide ions in pure water or any aqueous solution at a given temperature.",
    formula: "K_w = [H^+][OH^-] = 1.0 \\times 10^{-14} \\text{ at 25°C (298 K)}",
    neetNote: "Water auto-ionization is endothermic. At 90°C, K_w ≈ 10⁻¹² and neutral pH = 6.0 (still neutral because [H⁺] = [OH⁻])."
  },
  {
    term: "pH and pOH Scale (Sørensen)",
    definition: "Negative base-10 logarithm of hydrogen ion (or hydronium ion) molarity: pH = −log₁₀[H⁺]. Similarly, pOH = −log₁₀[OH⁻].",
    formula: "pH = -\\log_{10}[H^+], \\quad pH + pOH = pK_w = 14.00 \\text{ at 25°C}",
    neetNote: "At 25°C, pH < 7 is acidic, pH = 7 is neutral, pH > 7 is basic. Dilution of an acid increases its pH towards 7 (can never exceed 7!)."
  },
  {
    term: "Common-Ion Effect",
    definition: "The suppression of the degree of dissociation of a weak electrolyte by the addition of a strong electrolyte containing an ion common to the weak electrolyte.",
    neetNote: "Crucial in qualitative salt analysis: Addition of NH₄Cl suppresses NH₄OH ionization in Group III, and HCl suppresses H₂S ionization in Group II."
  },
  {
    term: "Buffer Solution",
    definition: "A solution that resists significant changes in its pH upon the addition of small amounts of strong acid, strong base, or upon moderate dilution.",
    formula: "\\text{Acidic: } pH = pK_a + \\log_{10}\\left(\\frac{[\\text{Salt}]}{[\\text{Acid}]}\\right), \\quad \\text{Basic: } pOH = pK_b + \\log_{10}\\left(\\frac{[\\text{Salt}]}{[\\text{Base}]}\\right)",
    neetNote: "Maximum buffer capacity occurs when [Salt] = [Acid] (or [Salt] = [Base]), giving pH = pK_a."
  },
  {
    term: "Salt Hydrolysis Constant (K_h)",
    definition: "The equilibrium constant for the reaction between ions of a dissolved salt and water molecules to generate excess H⁺ or OH⁻ ions.",
    formula: "\\text{WA+SB: } K_h = \\frac{K_w}{K_a}, \\quad \\text{SA+WB: } K_h = \\frac{K_w}{K_b}, \\quad \\text{WA+WB: } K_h = \\frac{K_w}{K_a K_b}",
    neetNote: "Salts of Strong Acid + Strong Base (e.g. NaCl) do not undergo hydrolysis and have pH = 7."
  },
  {
    term: "Solubility Product (K_sp)",
    definition: "The product of the molar concentrations of constituent ions in a saturated solution of a sparingly soluble salt, each raised to the power of its stoichiometric coefficient.",
    formula: "K_{sp} = [A^{y+}]^x [B^{x-}]^y \\quad (\\text{for } A_x B_y(s) \\rightleftharpoons x A^{y+} + y B^{x-})",
    neetNote: "Precipitation occurs only if Ionic Product Q_sp > K_sp. Pure solid precipitate is omitted from the K_sp expression."
  }
];

export const EQUILIBRIUM_COMPARISON_TABLES: ComparisonTable[] = [
  // 1. Physical vs Chemical Equilibrium
  {
    id: "table-phys-vs-chem-eq",
    title: "1. Physical Equilibrium vs Chemical Equilibrium",
    headers: ["Parameter", "Physical Equilibrium", "Chemical Equilibrium"],
    rows: [
      ["Nature of Process", "Change in physical state or phase without forming new chemical substances", "Transformation of chemical reactants into new chemical products"],
      ["Examples", "H₂O(l) ⇌ H₂O(g), I₂(s) ⇌ I₂(g), H₂O(s) ⇌ H₂O(l)", "N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g)"],
      ["Characteristic Measurable", "Equilibrium vapour pressure, normal boiling/melting points, saturation solubility", "Equilibrium constant K_c, K_p, extent of reaction, degree of dissociation α"],
      ["Driving Forces", "Intermolecular forces (van der Waals, H-bonding), thermal kinetic energy", "Chemical bond breaking and bond formation, Gibbs free energy minimization (ΔG = 0)"],
      ["System Requirement", "Strictly closed vessel (e.g. liquid-vapour, solid-vapour)", "Closed vessel for gaseous reactions; open container allowed for liquid-phase equilibria"]
    ],
    neetTakeaway: "Both physical and chemical equilibria are dynamic in nature; at equilibrium, opposing process rates become equal while macroscopic observables remain constant."
  },

  // 2. Homogeneous vs Heterogeneous Equilibrium
  {
    id: "table-homo-vs-hetero-eq",
    title: "2. Homogeneous vs Heterogeneous Equilibrium",
    headers: ["Feature", "Homogeneous Equilibrium", "Heterogeneous Equilibrium"],
    rows: [
      ["Phase Count", "Single uniform phase throughout the entire system (all gas or all liquid)", "Two or more distinct physical phases present in equilibrium"],
      ["Example 1 (Gas Phase)", "H₂(g) + I₂(g) ⇌ 2 HI(g)  |  K_c = [HI]² / ([H₂][I₂])", "CaCO₃(s) ⇌ CaO(s) + CO₂(g)  |  K_c = [CO₂], K_p = p_CO₂"],
      ["Example 2 (Solution Phase)", "CH₃COOH(aq) ⇌ CH₃COO⁻(aq) + H⁺(aq)", "AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)  |  K_sp = [Ag⁺][Cl⁻]"],
      ["Active Mass of Solids/Liquids", "All reacting components appear in the equilibrium expression", "Pure solids and pure liquids have active mass = 1 and are completely OMITTED from K"],
      ["Pressure Effect Dependency", "Depends on Δn_g calculated from all gaseous participants", "Depends on Δn_g calculated strictly from gaseous species (ignoring solid/liquid phases)"]
    ],
    neetTakeaway: "In heterogeneous equilibria, never include concentrations of pure solids (s) or pure liquids (l) in K_c, K_p, or Δn_g calculations."
  },

  // 3. Equilibrium Constant Kc vs Kp
  {
    id: "table-kc-vs-kp",
    title: "3. Equilibrium Constant K_c vs K_p",
    headers: ["Parameter", "K_c (Concentration)", "K_p (Partial Pressure)"],
    rows: [
      ["Expressed In Terms Of", "Molar concentrations ([X] in mol L⁻¹)", "Partial pressures (p_X in atm or bar)"],
      ["Applicability", "Applicable to gas-phase and solution-phase (aqueous) reactions", "Applicable STRICTLY to gaseous equilibria"],
      ["Ideal Gas Relation", "K_c = [Products]^p / [Reactants]^r", "K_p = K_c (R T)^{\\Delta n_g}"],
      ["Units", "(mol L⁻¹)^{\\Delta n_g}", "(atm)^{\\Delta n_g} or (bar)^{\\Delta n_g}"],
      ["Condition for K_p = K_c", "When \\Delta n_g = 0 (e.g. H₂ + I₂ ⇌ 2 HI)", "When \\Delta n_g = 0 (since (RT)⁰ = 1)"],
      ["Gas Constant R Value", "Use R = 0.0821 L atm K⁻¹ mol⁻¹ (or 0.0831 L bar K⁻¹ mol⁻¹)", "Temperature MUST always be converted to Kelvin (K)"]
    ],
    neetTakeaway: "If Δn_g > 0 ➔ K_p > K_c (at RT > 1); if Δn_g = 0 ➔ K_p = K_c; if Δn_g < 0 ➔ K_p < K_c."
  },

  // 4. Equilibrium Constant K vs Reaction Quotient Q
  {
    id: "table-k-vs-q",
    title: "4. Equilibrium Constant (K) vs Reaction Quotient (Q)",
    headers: ["Criterion", "Equilibrium Constant (K)", "Reaction Quotient (Q)"],
    rows: [
      ["Definition", "Ratio of product to reactant concentrations strictly at equilibrium state", "Ratio of product to reactant concentrations at ANY arbitrary instant of time"],
      ["Time Dependence", "Time independent; constant at fixed temperature", "Time dependent; continually changes as reaction proceeds toward equilibrium"],
      ["Significance", "Indicates the intrinsic thermodynamic extent/limit of the reaction", "Compared with K to predict the spontaneous direction of net reaction shift"],
      ["Q < K Condition", "N/A (Reference target)", "Reaction shifts FORWARD (→) to produce more products"],
      ["Q = K Condition", "System is at dynamic equilibrium", "NO net shift; forward and reverse rates are equal (⇌)"],
      ["Q > K Condition", "N/A (Reference target)", "Reaction shifts REVERSE (←) to consume excess products"]
    ],
    neetTakeaway: "Reaction quotient Q acts as the navigational compass pointing toward equilibrium constant K."
  },

  // 5. Strong Electrolyte vs Weak Electrolyte
  {
    id: "table-strong-vs-weak-electrolyte",
    title: "5. Strong Electrolyte vs Weak Electrolyte",
    headers: ["Parameter", "Strong Electrolyte", "Weak Electrolyte"],
    rows: [
      ["Degree of Dissociation (α)", "Virtually complete: α ≈ 1 (100% ionization in water)", "Partial: α << 1 (typically α < 0.05 or 5% in normal solutions)"],
      ["Equilibrium State", "Irreversible single arrow (➔); no unionized molecular equilibrium", "Reversible double arrow (⇌); dynamic equilibrium between ions and molecules"],
      ["Examples: Acids", "HCl, HNO₃, H₂SO₄, HClO₄, HBr, HI", "CH₃COOH, HCOOH, HCN, H₂CO₃, H₃PO₄, HF"],
      ["Examples: Bases", "NaOH, KOH, Ba(OH)₂, Ca(OH)₂ (in dissolved fraction)", "NH₄OH, NH₃(aq), CH₃NH₂, pyridine"],
      ["Examples: Salts", "All soluble salts (NaCl, KNO₃, CH₃COONa, NH₄Cl)", "Insoluble/sparingly soluble salts establish heterogeneous K_sp equilibrium"],
      ["Ostwald Dilution Law", "Not applicable (Debye-Hückel-Onsager theory applies)", "Strictly applicable: α = √(K_a / C) at high dilution"]
    ],
    neetTakeaway: "Strong vs weak refers strictly to the intrinsic degree of dissociation α, NOT concentration. A 0.001 M HCl solution is dilute but a strong electrolyte."
  },

  // 6. Strong Acid vs Weak Acid
  {
    id: "table-strong-vs-weak-acid",
    title: "6. Strong Acid vs Weak Acid",
    headers: ["Feature", "Strong Acid (e.g. HCl, HNO₃)", "Weak Acid (e.g. CH₃COOH, HCN)"],
    rows: [
      ["Ionization Extent", "Complete ionization: [H⁺] = C × (basicities)", "Partial ionization: [H⁺] = Cα = √(K_a · C)"],
      ["Acid Constant (K_a)", "K_a >> 1 (very large, essentially undefined in dilute water)", "K_a << 1 (e.g. CH₃COOH K_a = 1.8 × 10⁻⁵)"],
      ["pK_a Value", "pK_a < 0 (negative values)", "pK_a > 0 (typically between 2 and 12)"],
      ["Conjugate Base Strength", "Extremely weak conjugate base (negligible basicity, e.g. Cl⁻, NO₃⁻)", "Relatively strong conjugate base (undergoes anion hydrolysis, e.g. CH₃COO⁻, CN⁻)"],
      ["Dilution Effect on [H⁺]", "[H⁺] decreases linearly with dilution: [H⁺] = C", "[H⁺] decreases as √C with dilution because α increases (α ∝ 1/√C)"]
    ],
    neetTakeaway: "For 0.1 M strong monoprotic acid, pH = 1. For 0.1 M weak acid with K_a = 10⁻⁵, [H⁺] = √(10⁻⁵ × 0.1) = 10⁻³ M, giving pH = 3."
  },

  // 7. Acid Constant Ka vs Base Constant Kb
  {
    id: "table-ka-vs-kb",
    title: "7. Acid Constant (K_a) vs Base Constant (K_b)",
    headers: ["Property", "Acid Dissociation Constant (K_a)", "Base Dissociation Constant (K_b)"],
    rows: [
      ["Governing Reaction", "HA(aq) + H₂O(l) ⇌ H₃O⁺(aq) + A⁻(aq)", "B(aq) + H₂O(l) ⇌ BH⁺(aq) + OH⁻(aq)"],
      ["Mathematical Formula", "K_a = [H₃O⁺][A⁻] / [HA] = Cα² / (1 − α)", "K_b = [BH⁺][OH⁻] / [B] = Cα² / (1 − α)"],
      ["Ion Produced", "Hydronium / Hydrogen ion (H⁺ / H₃O⁺)", "Hydroxide ion (OH⁻)"],
      ["Relation for Conjugate Pair", "K_a × K_b = K_w = 1.0 × 10⁻¹⁴ (at 25°C)", "K_a × K_b = K_w = 1.0 × 10⁻¹⁴ (at 25°C)"],
      ["Logarithmic Relation", "pK_a + pK_b = pK_w = 14.00 (at 25°C)", "pK_a + pK_b = pK_w = 14.00 (at 25°C)"],
      ["Strength Indicator", "Higher K_a ⟹ Lower pK_a ⟹ Stronger Acid", "Higher K_b ⟹ Lower pK_b ⟹ Stronger Base"]
    ],
    neetTakeaway: "For any conjugate acid-base pair in water at 25°C, K_a · K_b = 10⁻¹⁴ and pK_a + pK_b = 14."
  },

  // 8. pKa vs pKb
  {
    id: "table-pka-vs-pkb",
    title: "8. pK_a vs pK_b Interpretation",
    headers: ["Parameter", "pK_a (−log₁₀ K_a)", "pK_b (−log₁₀ K_b)"],
    rows: [
      ["Meaning", "Negative logarithm of acid dissociation constant", "Negative logarithm of base dissociation constant"],
      ["Scale Behavior", "Smaller / More negative pK_a = STRONGER acid", "Smaller / More negative pK_b = STRONGER base"],
      ["Benchmark Example", "HCOOH (pK_a = 3.75) is stronger than CH₃COOH (pK_a = 4.75)", "CH₃NH₂ (pK_b = 3.38) is stronger than NH₃ (pK_b = 4.75)"],
      ["Conjugate Pair Sum", "pK_a(HA) + pK_b(A⁻) = 14.00 at 25°C", "pK_b(B) + pK_a(BH⁺) = 14.00 at 25°C"],
      ["Buffer Region Link", "Effective acidic buffer pH range = pK_a ± 1", "Effective basic buffer pOH range = pK_b ± 1"]
    ],
    neetTakeaway: "Remember the inverse relationship: Higher K ⟹ Lower pK ⟹ Greater acid/base strength."
  },

  // 9. Acidic Buffer vs Basic Buffer
  {
    id: "table-acidic-vs-basic-buffer",
    title: "9. Acidic Buffer vs Basic Buffer",
    headers: ["Feature", "Acidic Buffer", "Basic Buffer"],
    rows: [
      ["Composition", "Weak Acid + Salt with Strong Base (e.g. CH₃COOH + CH₃COONa)", "Weak Base + Salt with Strong Acid (e.g. NH₄OH + NH₄Cl)"],
      ["pH Working Range", "pH < 7 (typically pH = pK_a ± 1)", "pH > 7 (typically pOH = pK_b ± 1 ⟹ pH = 14 − pK_b ± 1)"],
      ["Governing Equation", "pH = pK_a + log₁₀([Salt] / [Acid])", "pOH = pK_b + log₁₀([Salt] / [Base]),  pH = 14 − pOH"],
      ["Action on adding H⁺", "CH₃COO⁻ + H⁺ ➔ CH₃COOH (neutralized by salt anion)", "NH₄OH + H⁺ ➔ NH₄⁺ + H₂O (neutralized by weak base)"],
      ["Action on adding OH⁻", "CH₃COOH + OH⁻ ➔ CH₃COO⁻ + H₂O (neutralized by weak acid)", "NH₄⁺ + OH⁻ ➔ NH₄OH (neutralized by salt cation)"],
      ["Maximum Buffer Capacity", "When [Salt] = [Acid] ⟹ pH = pK_a", "When [Salt] = [Base] ⟹ pOH = pK_b ⟹ pH = 14 − pK_b"]
    ],
    neetTakeaway: "Henderson-Hasselbalch equation is valid when buffer components are in molar ratio between 0.1 and 10."
  },

  // 10. Hydrolysis of Different Types of Salts
  {
    id: "table-salt-hydrolysis-master",
    title: "10. Master Summary of Salt Hydrolysis",
    headers: ["Salt Type", "Example", "Hydrolyzing Ion", "K_h Formula", "Degree of Hydrolysis (h)", "pH Formula at 25°C", "Nature of Solution"],
    rows: [
      ["Strong Acid + Strong Base", "NaCl, KNO₃, Na₂SO₄", "Neither ion hydrolyzes", "No hydrolysis", "h = 0", "pH = 7.00", "Strictly Neutral"],
      ["Weak Acid + Strong Base", "CH₃COONa, NaCN, K₂CO₃", "Anion hydrolyzes (A⁻ + H₂O ⇌ HA + OH⁻)", "K_h = K_w / K_a", "h = √(K_w / (K_a · C))", "pH = 7 + ½ pK_a + ½ log₁₀ C", "Basic (pH > 7)"],
      ["Strong Acid + Weak Base", "NH₄Cl, (NH₄)₂SO₄, AlCl₃", "Cation hydrolyzes (B⁺ + H₂O ⇌ BOH + H⁺)", "K_h = K_w / K_b", "h = √(K_w / (K_b · C))", "pH = 7 − ½ pK_b − ½ log₁₀ C", "Acidic (pH < 7)"],
      ["Weak Acid + Weak Base", "CH₃COONH₄, NH₄CN", "Both cation & anion hydrolyze", "K_h = K_w / (K_a · K_b)", "h = √(K_w / (K_a · K_b)) (No C!)", "pH = 7 + ½ pK_a − ½ pK_b", "Depends on K_a & K_b (Conc. Independent!)"]
    ],
    neetTakeaway: "For salt of WA + WB: If pK_a < pK_b (K_a > K_b) ➔ Acidic; If pK_a > pK_b (K_b > K_a) ➔ Basic; If pK_a = pK_b ➔ Neutral (pH = 7)."
  },

  // 11. Solubility Product Ksp vs Ionic Product Qsp
  {
    id: "table-ksp-vs-qsp",
    title: "11. Solubility Product (K_sp) vs Ionic Product (Q_sp)",
    headers: ["Parameter", "Solubility Product (K_sp)", "Ionic Product (Q_sp)"],
    rows: [
      ["Condition", "Applicable strictly to a SATURATED solution in dynamic equilibrium with solid", "Applicable to ANY solution (unsaturated, saturated, or supersaturated)"],
      ["Value Stability", "Constant at a given temperature for a specific sparingly soluble salt", "Variable; depends on initial concentrations of mixing solutions"],
      ["Expression", "K_sp = [A^{y+}]^x [B^{x-}]^y (at equilibrium)", "Q_sp = [A^{y+}]^x [B^{x-}]^y (at arbitrary mixing concentrations)"],
      ["Condition Q_sp < K_sp", "Reference threshold", "Solution is UNSATURATED; NO precipitation occurs; more solute can dissolve"],
      ["Condition Q_sp = K_sp", "Equilibrium state", "Solution is SATURATED; exact dynamic equilibrium between solid and dissolved ions"],
      ["Condition Q_sp > K_sp", "Reference threshold", "Solution is SUPERSATURATED; PRECIPITATION OCCURS until Q_sp drops to K_sp"]
    ],
    neetTakeaway: "To test if precipitation will occur upon mixing two solutions, always calculate new diluted ion concentrations, evaluate Q_sp, and compare with K_sp."
  },

  // 12. Molar Solubility (s) vs Solubility Product (Ksp)
  {
    id: "table-solubility-vs-ksp",
    title: "12. Molar Solubility (s) vs Solubility Product (K_sp) Relations",
    headers: ["Salt Type", "Stoichiometry & Ionization", "K_sp Expression in terms of s", "Solubility Formula (s)", "Example Salt"],
    rows: [
      ["AB type (1:1)", "AB(s) ⇌ A⁺ + B⁻  (s, s)", "K_sp = (s)(s) = s²", "s = √(K_sp)", "AgCl, AgBr, BaSO₄, CaSO₄"],
      ["AB₂ / A₂B type (1:2 / 2:1)", "AB₂(s) ⇌ A²⁺ + 2 B⁻  (s, 2s)", "K_sp = (s)(2s)² = 4s³", "s = ∛(K_sp / 4)", "PbCl₂, CaF₂, Mg(OH)₂, Ag₂CrO₄"],
      ["AB₃ / A₃B type (1:3 / 3:1)", "AB₃(s) ⇌ A³⁺ + 3 B⁻  (s, 3s)", "K_sp = (s)(3s)³ = 27s⁴", "s = ⁴√(K_sp / 27)", "Al(OH)₃, Fe(OH)₃, Ag₃PO₄"],
      ["A₂B₃ type (2:3)", "A₂B₃(s) ⇌ 2 A³⁺ + 3 B²⁻  (2s, 3s)", "K_sp = (2s)²(3s)³ = 108s⁵", "s = ⁵√(K_sp / 108)", "As₂S₃, Bi₂S₃, Ca₃(PO₄)₂ (A₃B₂)"],
      ["General Salt A_x B_y", "A_x B_y(s) ⇌ x A^{y+} + y B^{x-}  (xs, ys)", "K_sp = (xs)^x (ys)^y = x^x y^y s^{x+y}", "s = ^{x+y}√(K_sp / (x^x y^y))", "General stoichiometry"]
    ],
    neetTakeaway: "Never compare solubilities of different salts purely by their K_sp values unless they have the EXACT SAME stoichiometry type!"
  }
];
