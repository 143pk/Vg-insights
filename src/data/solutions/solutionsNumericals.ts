// Master Solved Numerical Collection for Chapter 5: Solutions (NEET UG 2026)
// Exactly 20 detailed numericals with the 10-point pedagogical structure

export interface SolvedNumerical {
  id: string;
  category: 'Concentration' | 'RaoultsLaw' | 'RLVP' | 'BoilingPointElevation' | 'FreezingPointDepression' | 'OsmoticPressure' | 'VantHoffFactor';
  title: string;
  problemStatement: string;
  given: Record<string, string>;
  asked: string;
  concept: string;
  formula: string;
  unitConversion: string;
  substitution: string;
  calculation: string[];
  finalAnswer: string;
  neetShortcut: string;
  commonMistake: string;
}

export const SOLUTIONS_NUMERICALS: SolvedNumerical[] = [
  // --- Category 1: Concentration Terms (4 Problems) ---
  {
    id: "num-conc-1",
    category: "Concentration",
    title: "Problem 1: Molarity and Molality from Mass % with Density",
    problemStatement: "A commercial sample of sulphuric acid is 98% H₂SO₄ by mass (% w/w) and has a density of 1.84 g mL⁻¹. Calculate the (i) Molarity and (ii) Molality of the acid solution. (Molar mass of H₂SO₄ = 98 g mol⁻¹)",
    given: {
      "Mass % of H₂SO₄ (% w/w)": "98%",
      "Density of solution (d)": "1.84 g mL⁻¹",
      "Molar mass of solute H₂SO₄ (M₂)": "98 g mol⁻¹"
    },
    asked: "Molarity (M) and Molality (m) of the sulphuric acid solution.",
    concept: "Mass % represents solute mass in 100 g solution. Density relates solution mass to solution volume. Molality depends solely on solvent mass.",
    formula: "M = \\frac{(\\% \\text{ w/w}) \\times d \\times 10}{M_2}, \\quad m = \\frac{w_2 \\times 1000}{M_2 \\times w_1}",
    unitConversion: "100 g solution volume = 100 / 1.84 = 54.35 mL = 0.05435 L. Mass of water solvent w₁ = 100 g - 98 g = 2 g = 0.002 kg.",
    substitution: "M = \\frac{98 \\times 1.84 \\times 10}{98}, \\quad m = \\frac{98 \\times 1000}{98 \\times 2}",
    calculation: [
      "Step 1: Calculate Molarity: M = (98 × 1.84 × 10) / 98 = 1.84 × 10 = 18.4 M.",
      "Step 2: Moles of H₂SO₄ in 100 g solution = 98 g / 98 g mol⁻¹ = 1.0 mol.",
      "Step 3: Mass of solvent water w₁ = 100 g - 98 g = 2 g = 0.002 kg.",
      "Step 4: Calculate Molality: m = 1.0 mol / 0.002 kg = 500 mol kg⁻¹ (500 m)."
    ],
    finalAnswer: "Molarity = 18.4 mol L⁻¹ (18.4 M); Molality = 500 mol kg⁻¹ (500 m)",
    neetShortcut: "Use direct formula M = (% × d × 10) / M₂. Here 98 in numerator and denominator cancel out immediately, giving M = 1.84 × 10 = 18.4 M in 2 seconds!",
    commonMistake: "Forgetting that mass of solvent in molality is ONLY 2 g (100 - 98), NOT 100 g! Dividing by 100 g results in 10 m instead of the correct 500 m."
  },
  {
    id: "num-conc-2",
    category: "Concentration",
    title: "Problem 2: Mole Fraction from Molality in Aqueous Medium",
    problemStatement: "An aqueous solution of sodium hydroxide (NaOH) has a molality of 2.0 mol kg⁻¹. Find the mole fraction of NaOH (x₂) and water (x₁) in the solution. (Molar mass of H₂O = 18 g mol⁻¹)",
    given: {
      "Molality of NaOH (m)": "2.0 mol kg⁻¹ (2.0 m)",
      "Molar mass of solvent H₂O (M₁)": "18 g mol⁻¹"
    },
    asked: "Mole fraction of NaOH (x₂) and water (x₁).",
    concept: "Molality indicates 2.0 moles of NaOH in 1000 g of water. Moles of water in 1 kg is constant at 55.55 mol.",
    formula: "x_2 = \\frac{n_2}{n_1 + n_2} = \\frac{m}{m + 55.55}, \\quad x_1 = 1 - x_2",
    unitConversion: "1000 g of water = 1000 / 18 = 55.55 mol.",
    substitution: "x_2 = \\frac{2.0}{2.0 + 55.55} = \\frac{2.0}{57.55}",
    calculation: [
      "Step 1: n(NaOH) = 2.0 mol, n(H₂O) = 1000 / 18 = 55.55 mol.",
      "Step 2: Total moles = 2.0 + 55.55 = 57.55 mol.",
      "Step 3: x(NaOH) = 2.0 / 57.55 = 0.03475 ≈ 0.0348.",
      "Step 4: x(H₂O) = 1 - 0.0348 = 0.9652."
    ],
    finalAnswer: "Mole fraction of NaOH x₂ = 0.0348; Mole fraction of H₂O x₁ = 0.9652",
    neetShortcut: "Always remember: 1 kg water = 55.55 moles. Then x₂ = m / (m + 55.55).",
    commonMistake: "Confusing mole fraction of solute with mass fraction. Mole fraction is always dimensionless and < 1."
  },
  {
    id: "num-conc-3",
    category: "Concentration",
    title: "Problem 3: Dilution and Molarity of Mixture",
    problemStatement: "Calculate the molarity of a solution obtained by mixing 250 mL of 0.5 M HCl and 750 mL of 0.1 M HCl. Assume total volume is additive.",
    given: {
      "Solution 1": "V₁ = 250 mL, M₁ = 0.5 M",
      "Solution 2": "V₂ = 750 mL, M₂ = 0.1 M"
    },
    asked: "Resulting molarity M_mix.",
    concept: "Millimoles of solute are conserved upon mixing identical solutes.",
    formula: "M_\\text{mix} = \\frac{M_1 V_1 + M_2 V_2}{V_1 + V_2}",
    unitConversion: "V_total = 250 + 750 = 1000 mL = 1.0 L.",
    substitution: "M_\\text{mix} = \\frac{(0.5 \\times 250) + (0.1 \\times 750)}{250 + 750}",
    calculation: [
      "Step 1: Millimoles from Sol 1 = 0.5 × 250 = 125 mmol.",
      "Step 2: Millimoles from Sol 2 = 0.1 × 750 = 75 mmol.",
      "Step 3: Total millimoles = 125 + 75 = 200 mmol.",
      "Step 4: Total volume = 1000 mL.",
      "Step 5: M_mix = 200 mmol / 1000 mL = 0.20 M."
    ],
    finalAnswer: "Final Molarity = 0.20 mol L⁻¹ (0.20 M)",
    neetShortcut: "Since V₂ is 3× V₁, M_mix is weighted average: (1×0.5 + 3×0.1)/4 = (0.5 + 0.3)/4 = 0.8/4 = 0.20 M.",
    commonMistake: "Simply averaging the molarities (0.5 + 0.1)/2 = 0.3 M, ignoring unequal volumes."
  },
  {
    id: "num-conc-4",
    category: "Concentration",
    title: "Problem 4: Conversion of Molarity to Molality for Urea Solution",
    problemStatement: "The molarity of an aqueous urea [CO(NH₂)₂] solution is 1.5 M. If the density of the solution is 1.05 g mL⁻¹, calculate its molality. (Molar mass of urea = 60 g mol⁻¹)",
    given: {
      "Molarity (M)": "1.5 mol L⁻¹",
      "Density of solution (d)": "1.05 g mL⁻¹",
      "Molar mass of urea (M₂)": "60 g mol⁻¹"
    },
    asked: "Molality (m) in mol kg⁻¹.",
    concept: "1 Litre contains 1.5 moles of urea. Subtract solute mass from total solution mass to get solvent mass.",
    formula: "m = \\frac{1000 \\times M}{1000 \\times d - M \\times M_2}",
    unitConversion: "1000 mL solution mass = 1000 × 1.05 = 1050 g.",
    substitution: "m = \\frac{1000 \\times 1.5}{1000 \\times 1.05 - 1.5 \\times 60} = \\frac{1500}{1050 - 90}",
    calculation: [
      "Step 1: Mass of 1 L solution = 1000 × 1.05 = 1050 g.",
      "Step 2: Mass of urea = 1.5 mol × 60 g mol⁻¹ = 90 g.",
      "Step 3: Mass of water solvent w₁ = 1050 - 90 = 960 g = 0.960 kg.",
      "Step 4: Molality m = 1.5 mol / 0.960 kg = 1.5625 mol kg⁻¹ ≈ 1.56 m."
    ],
    finalAnswer: "Molality = 1.56 mol kg⁻¹ (1.56 m)",
    neetShortcut: "Use direct formula m = 1000M / (1000d - M·M₂) = 1500 / (1050 - 90) = 1500 / 960 = 1.5625 m.",
    commonMistake: "Using mass of solution (1050 g) in the denominator instead of mass of solvent (960 g)."
  },

  // --- Category 2: Raoult's Law & Binary Volatile Liquids (3 Problems) ---
  {
    id: "num-raoult-1",
    category: "RaoultsLaw",
    title: "Problem 5: Total Vapour Pressure and Vapour Phase Composition",
    problemStatement: "At 300 K, the vapour pressures of pure benzene (C₆H₆) and pure toluene (C₇H₈) are 50.71 mm Hg and 32.06 mm Hg respectively. If 80 g of benzene is mixed with 100 g of toluene, calculate: (a) total vapour pressure of the ideal solution, (b) mole fraction of benzene in the vapour phase. (Molar mass of benzene = 78 g mol⁻¹, toluene = 92 g mol⁻¹)",
    given: {
      "p°(benzene, A)": "50.71 mm Hg",
      "p°(toluene, B)": "32.06 mm Hg",
      "Mass of benzene (w_A)": "80 g (M_A = 78 g mol⁻¹)",
      "Mass of toluene (w_B)": "100 g (M_B = 92 g mol⁻¹)"
    },
    asked: "(a) Total vapour pressure p_total, (b) Mole fraction of benzene in vapour phase y_A.",
    concept: "Raoult's law determines liquid partial pressures. Dalton's law determines vapour phase mole fractions.",
    formula: "p_\\text{total} = x_A p_A^\\circ + x_B p_B^\\circ, \\quad y_A = \\frac{p_A}{p_\\text{total}}",
    unitConversion: "n_A = 80/78 = 1.0256 mol; n_B = 100/92 = 1.0870 mol.",
    substitution: "x_A = \\frac{1.0256}{1.0256 + 1.0870} = 0.4855, \\quad x_B = 1 - 0.4855 = 0.5145",
    calculation: [
      "Step 1: n(benzene) = 80/78 = 1.0256 mol; n(toluene) = 100/92 = 1.0870 mol.",
      "Step 2: Total liquid moles = 1.0256 + 1.0870 = 2.1126 mol.",
      "Step 3: Mole fractions: x_A = 1.0256 / 2.1126 = 0.4855; x_B = 0.5145.",
      "Step 4: Partial pressures: p_A = 0.4855 × 50.71 = 24.62 mm Hg; p_B = 0.5145 × 32.06 = 16.49 mm Hg.",
      "Step 5: Total pressure p_total = 24.62 + 16.49 = 41.11 mm Hg.",
      "Step 6: Vapour phase mole fraction y_A = p_A / p_total = 24.62 / 41.11 = 0.5989 ≈ 0.60."
    ],
    finalAnswer: "Total Pressure = 41.11 mm Hg; Mole fraction of benzene in vapour phase y_A = 0.60",
    neetShortcut: "Note that y_A (0.60) > x_A (0.4855) because benzene is more volatile (higher p°). The vapour is always enriched in the more volatile component!",
    commonMistake: "Using liquid mole fraction x_A directly as vapour mole fraction y_A."
  },
  {
    id: "num-raoult-2",
    category: "RaoultsLaw",
    title: "Problem 6: Finding Pure Component Vapour Pressures from Mixture Data",
    problemStatement: "A binary solution of liquid A and liquid B obeys Raoult's law. When mole fraction of A in liquid is 0.4, total vapour pressure is 400 mm Hg. When mole fraction of A is increased to 0.7, total vapour pressure becomes 490 mm Hg. Determine the vapour pressures of pure components A and B (p_A° and p_B°).",
    given: {
      "Case 1": "x_A = 0.4, x_B = 0.6, p_total = 400 mm Hg",
      "Case 2": "x_A = 0.7, x_B = 0.3, p_total = 490 mm Hg"
    },
    asked: "p_A° and p_B° in mm Hg.",
    concept: "p_total = x_A p_A° + (1 - x_A) p_B° = p_B° + x_A(p_A° - p_B°). This is a linear system in two unknowns.",
    formula: "p_\\text{total} = p_B^\\circ + x_A (p_A^\\circ - p_B^\\circ)",
    unitConversion: "All pressures given in mm Hg.",
    substitution: "400 = 0.4 p_A^\\circ + 0.6 p_B^\\circ \\quad \\text{(Eq 1)}; \\quad 490 = 0.7 p_A^\\circ + 0.3 p_B^\\circ \\quad \\text{(Eq 2)}",
    calculation: [
      "Step 1: Subtract Eq 1 from Eq 2: 490 - 400 = (0.7 - 0.4) p_A° + (0.3 - 0.6) p_B°.",
      "Step 2: 90 = 0.3 p_A° - 0.3 p_B° = 0.3 (p_A° - p_B°).",
      "Step 3: (p_A° - p_B°) = 90 / 0.3 = 300 mm Hg.",
      "Step 4: From Eq 1: 400 = p_B° + 0.4(300) = p_B° + 120.",
      "Step 5: p_B° = 400 - 120 = 280 mm Hg.",
      "Step 6: p_A° = 280 + 300 = 580 mm Hg."
    ],
    finalAnswer: "p_A° = 580 mm Hg; p_B° = 280 mm Hg",
    neetShortcut: "Slope of p_total vs x_A is (p_A° - p_B°) = Δp / Δx_A = (490 - 400) / (0.7 - 0.4) = 90 / 0.3 = 300. When x_A = 0, p_total = p_B° = 400 - 0.4(300) = 280 mm Hg!",
    commonMistake: "Algebraic sign errors when eliminating equations."
  },
  {
    id: "num-raoult-3",
    category: "RaoultsLaw",
    title: "Problem 7: Equimolar Volatile Mixture Vapour Phase Analysis",
    problemStatement: "Liquids X and Y form an ideal solution. At 50°C, p_X° = 200 mm Hg and p_Y° = 100 mm Hg. For an equimolar liquid mixture of X and Y, find the mole fraction of X in the vapour phase.",
    given: {
      "p_X°": "200 mm Hg",
      "p_Y°": "100 mm Hg",
      "Equimolar liquid mixture": "x_X = 0.5, x_Y = 0.5"
    },
    asked: "Mole fraction of X in vapour phase (y_X).",
    concept: "Partial pressures are p_X = x_X p_X° and p_Y = x_Y p_Y°. y_X = p_X / (p_X + p_Y).",
    formula: "y_X = \\frac{x_X p_X^\\circ}{x_X p_X^\\circ + x_Y p_Y^\\circ}",
    unitConversion: "All pressures in mm Hg.",
    substitution: "y_X = \\frac{0.5 \\times 200}{(0.5 \\times 200) + (0.5 \\times 100)} = \\frac{100}{100 + 50}",
    calculation: [
      "Step 1: p_X = 0.5 × 200 = 100 mm Hg.",
      "Step 2: p_Y = 0.5 × 100 = 50 mm Hg.",
      "Step 3: p_total = 100 + 50 = 150 mm Hg.",
      "Step 4: y_X = 100 / 150 = 2/3 ≈ 0.667."
    ],
    finalAnswer: "Mole fraction in vapour y_X = 0.667 (or 2/3)",
    neetShortcut: "For equimolar liquid (x_X = x_Y), y_X = p_X° / (p_X° + p_Y°) = 200 / (200 + 100) = 200/300 = 2/3. Direct 3-second shortcut!",
    commonMistake: "Thinking equimolar liquid produces equimolar vapour. The more volatile liquid always dominates the vapour phase."
  },

  // --- Category 3: Relative Lowering of Vapour Pressure (3 Problems) ---
  {
    id: "num-rlvp-1",
    category: "RLVP",
    title: "Problem 8: Molar Mass of Non-Volatile Solute from RLVP",
    problemStatement: "The vapour pressure of pure water at 293 K is 17.535 mm Hg. When 25 g of a non-volatile non-electrolyte solute is dissolved in 450 g of water, the vapour pressure decreases by 0.350 mm Hg. Calculate the molar mass of the solute.",
    given: {
      "Vapour pressure of pure water (p₁°)": "17.535 mm Hg",
      "Lowering of vapour pressure (Δp = p₁° - p₁)": "0.350 mm Hg",
      "Mass of solute (w₂)": "25 g",
      "Mass of solvent water (w₁)": "450 g (M₁ = 18 g mol⁻¹)"
    },
    asked: "Molar mass of solute M₂ in g mol⁻¹.",
    concept: "RLVP = (p₁° - p₁) / p₁° = x₂ ≈ (w₂ M₁) / (M₂ w₁) for dilute solution.",
    formula: "\\frac{p_1^\\circ - p_1}{p_1^\\circ} = \\frac{w_2 \\times M_1}{M_2 \\times w_1}",
    unitConversion: "Pressures in mm Hg, masses in grams.",
    substitution: "\\frac{0.350}{17.535} = \\frac{25 \\times 18}{M_2 \\times 450}",
    calculation: [
      "Step 1: Simplify right-hand numerator: 25 × 18 = 450.",
      "Step 2: Right side becomes 450 / (M₂ × 450) = 1 / M₂.",
      "Step 3: 0.350 / 17.535 = 1 / M₂.",
      "Step 4: M₂ = 17.535 / 0.350 = 50.1 g mol⁻¹."
    ],
    finalAnswer: "Molar mass of solute M₂ = 50.1 g mol⁻¹",
    neetShortcut: "Notice 25 × 18 = 450, which cancels 450 g in denominator! So M₂ is simply p₁° / Δp = 17.535 / 0.350 = 50.1 g/mol.",
    commonMistake: "Using solution vapour pressure (17.535 - 0.350 = 17.185) in the denominator instead of pure solvent vapour pressure p₁°."
  },
  {
    id: "num-rlvp-2",
    category: "RLVP",
    title: "Problem 9: Exact vs Approximate Raoult's Law Formulation",
    problemStatement: "A 5% (w/w) aqueous solution of a non-volatile non-electrolyte solute has a vapour pressure of 745 mm Hg at 373 K. (Pure water boils at 373 K where p₁° = 760 mm Hg). Calculate the exact molar mass of the solute using Ostwald-Walker exact formula.",
    given: {
      "p₁°": "760 mm Hg (at 100°C / 373 K)",
      "p₁ (solution VP)": "745 mm Hg",
      "Solute mass (w₂)": "5 g in 100 g solution",
      "Solvent mass (w₁)": "95 g water (M₁ = 18 g mol⁻¹)"
    },
    asked: "Exact molar mass of solute M₂.",
    concept: "The exact Raoult formula is (p₁° - p₁) / p₁ = n₂ / n₁ = (w₂ M₁) / (M₂ w₁), which avoids dilute solution approximation.",
    formula: "\\frac{p_1^\\circ - p_1}{p_1} = \\frac{w_2 \\times M_1}{M_2 \\times w_1}",
    unitConversion: "Δp = 760 - 745 = 15 mm Hg.",
    substitution: "\\frac{15}{745} = \\frac{5 \\times 18}{M_2 \\times 95}",
    calculation: [
      "Step 1: Left side = 15 / 745 = 0.020134.",
      "Step 2: Right side = 90 / (95 × M₂) = 0.94737 / M₂.",
      "Step 3: M₂ = 0.94737 / 0.020134 = 47.05 g mol⁻¹."
    ],
    finalAnswer: "Exact Molar Mass M₂ = 47.05 g mol⁻¹",
    neetShortcut: "Formula (p₁° - p₁)/p₁ = (w₂ M₁) / (M₂ w₁) is exact for ALL concentrations. Use it whenever Δp/p₁° > 5%.",
    commonMistake: "Using 100 g as solvent mass instead of 100 - 5 = 95 g."
  },
  {
    id: "num-rlvp-3",
    category: "RLVP",
    title: "Problem 10: Percentage Lowering of Vapour Pressure for Glucose Solution",
    problemStatement: "Calculate the relative lowering of vapour pressure and percentage lowering of vapour pressure for a solution containing 18 g of glucose (C₆H₁₂O₆, M₂ = 180 g mol⁻¹) dissolved in 178.2 g of water.",
    given: {
      "Mass of glucose (w₂)": "18 g (M₂ = 180 g mol⁻¹)",
      "Mass of water (w₁)": "178.2 g (M₁ = 18 g mol⁻¹)"
    },
    asked: "RLVP and Percentage lowering of vapour pressure.",
    concept: "RLVP = x₂ = n₂ / (n₁ + n₂). Percentage lowering = RLVP × 100%.",
    formula: "\\text{RLVP} = \\frac{n_2}{n_1 + n_2}, \\quad \\% \\text{ Lowering} = \\text{RLVP} \\times 100",
    unitConversion: "n₂ = 18 / 180 = 0.10 mol; n₁ = 178.2 / 18 = 9.90 mol.",
    substitution: "\\text{RLVP} = \\frac{0.10}{9.90 + 0.10} = \\frac{0.10}{10.00} = 0.010",
    calculation: [
      "Step 1: Moles of glucose n₂ = 18 / 180 = 0.10 mol.",
      "Step 2: Moles of water n₁ = 178.2 / 18 = 9.90 mol.",
      "Step 3: Total moles = 9.90 + 0.10 = 10.00 mol.",
      "Step 4: RLVP = 0.10 / 10.00 = 0.010.",
      "Step 5: % Lowering = 0.010 × 100% = 1.0%."
    ],
    finalAnswer: "RLVP = 0.010; Percentage Lowering = 1.0%",
    neetShortcut: "Total moles sum to a clean integer (10.0 mol). 0.1 / 10 = 0.01 = 1.0%.",
    commonMistake: "Forgetting to multiply by 100 when asked for percentage lowering."
  },

  // --- Category 4: Elevation of Boiling Point (3 Problems) ---
  {
    id: "num-ebp-1",
    category: "BoilingPointElevation",
    title: "Problem 11: Molar Mass of Unknown Solute from Boiling Point Elevation",
    problemStatement: "18.0 g of a non-volatile non-electrolyte solute is dissolved in 200 g of water. The solution boils at 100.26°C at 1 atm. Find the molar mass of the solute. (K_b for water = 0.52 K kg mol⁻¹)",
    given: {
      "Mass of solute (w₂)": "18.0 g",
      "Mass of solvent water (w₁)": "200 g",
      "Boiling point of solution (T_b)": "100.26°C",
      "Boiling point of pure water (T_b°)": "100.00°C",
      "K_b for water": "0.52 K kg mol⁻¹"
    },
    asked: "Molar mass of solute M₂.",
    concept: "ΔT_b = T_b - T_b° = K_b · m = (K_b · w₂ · 1000) / (M₂ · w₁).",
    formula: "M_2 = \\frac{K_b \\times w_2 \\times 1000}{\\Delta T_b \\times w_1}",
    unitConversion: "ΔT_b = 100.26 - 100.00 = 0.26°C = 0.26 K.",
    substitution: "M_2 = \\frac{0.52 \\times 18.0 \\times 1000}{0.26 \\times 200}",
    calculation: [
      "Step 1: ΔT_b = 0.26 K.",
      "Step 2: 0.52 / 0.26 = 2.0 exactly.",
      "Step 3: 1000 / 200 = 5.0.",
      "Step 4: M₂ = 2.0 × 18.0 × 5.0 = 180 g mol⁻¹."
    ],
    finalAnswer: "Molar mass of solute M₂ = 180 g mol⁻¹ (matches Glucose)",
    neetShortcut: "0.52 / 0.26 = 2; 1000 / 200 = 5; M₂ = 2 × 18 × 5 = 180. Clean mental calculation in 5 seconds!",
    commonMistake: "Converting ΔT from °C to K by adding 273. A temperature DIFFERENCE in °C is numerically IDENTICAL in Kelvin (ΔT in °C = ΔT in K)."
  },
  {
    id: "num-ebp-2",
    category: "BoilingPointElevation",
    title: "Problem 12: Boiling Point Elevation in Non-Aqueous Solvent (Benzene)",
    problemStatement: "The boiling point of pure benzene is 353.23 K. When 1.80 g of a non-volatile solute was dissolved in 90 g of benzene, the boiling point was raised to 354.11 K. Calculate the molar mass of the solute. (K_b for benzene = 2.53 K kg mol⁻¹)",
    given: {
      "T_b° (benzene)": "353.23 K",
      "T_b (solution)": "354.11 K",
      "Mass of solute (w₂)": "1.80 g",
      "Mass of solvent (w₁)": "90 g",
      "K_b (benzene)": "2.53 K kg mol⁻¹"
    },
    asked: "Molar mass of solute M₂ in g mol⁻¹.",
    concept: "Apply ebullioscopic equation with benzene's specific K_b constant.",
    formula: "M_2 = \\frac{K_b \\times w_2 \\times 1000}{\\Delta T_b \\times w_1}",
    unitConversion: "ΔT_b = 354.11 - 353.23 = 0.88 K.",
    substitution: "M_2 = \\frac{2.53 \\times 1.80 \\times 1000}{0.88 \\times 90}",
    calculation: [
      "Step 1: ΔT_b = 0.88 K.",
      "Step 2: Numerator = 2.53 × 1.80 × 1000 = 4554.",
      "Step 3: Denominator = 0.88 × 90 = 79.2.",
      "Step 4: M₂ = 4554 / 79.2 = 57.5 g mol⁻¹."
    ],
    finalAnswer: "Molar mass of solute M₂ = 57.5 g mol⁻¹",
    neetShortcut: "1.80 / 90 = 1 / 50. Then M₂ = (2.53 × 1000) / (0.88 × 50) = 2530 / 44 = 57.5 g/mol.",
    commonMistake: "Using K_b of water (0.52) instead of K_b of benzene (2.53)."
  },
  {
    id: "num-ebp-3",
    category: "BoilingPointElevation",
    title: "Problem 13: Elevation of Boiling Point for Sucrose Solution",
    problemStatement: "Calculate the boiling point of a solution prepared by dissolving 34.2 g of sucrose (C₁₂H₂₂O₁₁, M₂ = 342 g mol⁻¹) in 1000 g of water at 1.013 bar pressure. (K_b = 0.52 K kg mol⁻¹, normal boiling point of water = 373.15 K).",
    given: {
      "Mass of sucrose (w₂)": "34.2 g (M₂ = 342 g mol⁻¹)",
      "Mass of water (w₁)": "1000 g = 1.0 kg",
      "K_b for water": "0.52 K kg mol⁻¹",
      "Normal boiling point of water": "373.15 K (or 100.00°C)"
    },
    asked: "Actual boiling point of the solution T_b.",
    concept: "T_b = T_b° + ΔT_b, where ΔT_b = K_b · m.",
    formula: "\\Delta T_b = K_b \\times \\frac{w_2 / M_2}{w_1 \\text{ (in kg)}}",
    unitConversion: "Moles of sucrose = 34.2 / 342 = 0.10 mol in 1.0 kg water → m = 0.10 mol kg⁻¹.",
    substitution: "\\Delta T_b = 0.52 \\times 0.10 = 0.052 \\text{ K}",
    calculation: [
      "Step 1: m = 0.10 mol / 1 kg = 0.10 m.",
      "Step 2: ΔT_b = 0.52 × 0.10 = 0.052 K (or 0.052°C).",
      "Step 3: T_b = 100.00 + 0.052 = 100.052°C (or 373.15 + 0.052 = 373.202 K)."
    ],
    finalAnswer: "Boiling point of solution = 100.052°C (373.202 K)",
    neetShortcut: "ΔT_b for 0.1 m aqueous solution is always 0.1 × 0.52 = 0.052 K.",
    commonMistake: "Writing ΔT_b (0.052°C) as the final boiling point rather than adding it to 100°C."
  },

  // --- Category 5: Depression of Freezing Point (3 Problems) ---
  {
    id: "num-dfp-1",
    category: "FreezingPointDepression",
    title: "Problem 14: Car Radiator Antifreeze Calculation",
    problemStatement: "How much ethylene glycol (C₂H₆O₂, M₂ = 62 g mol⁻¹) must be added to 4.0 kg of water in a car radiator so that the water does not freeze at -10.0°C? (K_f for water = 1.86 K kg mol⁻¹)",
    given: {
      "Freezing point required": "-10.0°C → ΔT_f = 0.0 - (-10.0) = 10.0 K",
      "Mass of water solvent (w₁)": "4.0 kg = 4000 g",
      "Molar mass of glycol (M₂)": "62 g mol⁻¹",
      "K_f for water": "1.86 K kg mol⁻¹"
    },
    asked: "Mass of ethylene glycol (w₂ in g or kg).",
    concept: "ΔT_f = K_f · m = (K_f · w₂) / (M₂ · w₁_kg). Rearrange to solve for w₂.",
    formula: "w_2 = \\frac{\\Delta T_f \\times M_2 \\times w_{1\\text{ (kg)}}}{K_f}",
    unitConversion: "w₁ = 4.0 kg, ΔT_f = 10.0 K.",
    substitution: "w_2 = \\frac{10.0 \\times 62 \\times 4.0}{1.86}",
    calculation: [
      "Step 1: Numerator = 10.0 × 62 × 4.0 = 2480.",
      "Step 2: w₂ = 2480 / 1.86 = 1333.3 g = 1.333 kg."
    ],
    finalAnswer: "Mass of ethylene glycol needed = 1333.3 g (1.333 kg)",
    neetShortcut: "Required molality m = ΔT_f / K_f = 10 / 1.86 = 5.376 m. Mass = 5.376 × 62 × 4 = 1333.3 g.",
    commonMistake: "Using ΔT_f as -10 in the formula resulting in negative mass."
  },
  {
    id: "num-dfp-2",
    category: "FreezingPointDepression",
    title: "Problem 15: Molar Mass of Organic Compound from Freezing Point",
    problemStatement: "1.00 g of a non-electrolyte solute dissolved in 50.0 g of benzene lowered the freezing point of benzene by 0.40 K. The freezing point depression constant of benzene is 5.12 K kg mol⁻¹. Find the molar mass of the solute.",
    given: {
      "Mass of solute (w₂)": "1.00 g",
      "Mass of benzene (w₁)": "50.0 g",
      "ΔT_f": "0.40 K",
      "K_f (benzene)": "5.12 K kg mol⁻¹"
    },
    asked: "Molar mass of solute M₂.",
    concept: "Apply cryoscopic equation: M₂ = (K_f · w₂ · 1000) / (ΔT_f · w₁).",
    formula: "M_2 = \\frac{K_f \\times w_2 \\times 1000}{\\Delta T_f \\times w_1}",
    unitConversion: "All quantities in standard lab units.",
    substitution: "M_2 = \\frac{5.12 \\times 1.00 \\times 1000}{0.40 \\times 50.0}",
    calculation: [
      "Step 1: Denominator = 0.40 × 50.0 = 20.0.",
      "Step 2: Numerator = 5.12 × 1000 = 5120.",
      "Step 3: M₂ = 5120 / 20.0 = 256 g mol⁻¹."
    ],
    finalAnswer: "Molar mass of solute M₂ = 256 g mol⁻¹",
    neetShortcut: "1000 / 50 = 20; 20 / 0.40 = 50; M₂ = 5.12 × 50 = 256. Fast arithmetic!",
    commonMistake: "Using water's K_f (1.86) instead of benzene's K_f (5.12)."
  },
  {
    id: "num-dfp-3",
    category: "FreezingPointDepression",
    title: "Problem 16: Freezing Point of 5% Aqueous Glucose Solution",
    problemStatement: "Calculate the freezing point of a 5% (w/w) aqueous solution of glucose (C₆H₁₂O₆, M₂ = 180 g mol⁻¹). (K_f for water = 1.86 K kg mol⁻¹, pure water freezes at 273.15 K).",
    given: {
      "5% w/w glucose": "5 g glucose in 95 g water",
      "M₂ (glucose)": "180 g mol⁻¹",
      "K_f (water)": "1.86 K kg mol⁻¹",
      "T_f° (water)": "0.00°C (273.15 K)"
    },
    asked: "Freezing point of solution T_f.",
    concept: "m = (w₂ × 1000) / (M₂ × w₁). ΔT_f = K_f · m. T_f = T_f° - ΔT_f.",
    formula: "\\Delta T_f = K_f \\times \\frac{w_2 \\times 1000}{M_2 \\times w_1}",
    unitConversion: "w₂ = 5 g, w₁ = 95 g water.",
    substitution: "\\Delta T_f = 1.86 \\times \\frac{5 \\times 1000}{180 \\times 95}",
    calculation: [
      "Step 1: Molality m = 5000 / (180 × 95) = 5000 / 17100 = 0.2924 mol kg⁻¹.",
      "Step 2: ΔT_f = 1.86 × 0.2924 = 0.544 K (or 0.544°C).",
      "Step 3: Freezing point T_f = 0.00°C - 0.544°C = -0.544°C (or 273.15 - 0.544 = 272.606 K)."
    ],
    finalAnswer: "Freezing point = -0.544°C (272.61 K)",
    neetShortcut: "Remember: Freezing point DEPRESSES, so solution freezes BELOW 0°C (negative in Celsius).",
    commonMistake: "Adding ΔT_f to 0°C instead of subtracting it (T_f = T_f° - ΔT_f)."
  },

  // --- Category 6: Osmotic Pressure (3 Problems) ---
  {
    id: "num-osm-1",
    category: "OsmoticPressure",
    title: "Problem 17: Molar Mass of Protein from Osmotic Pressure",
    problemStatement: "200 cm³ of an aqueous solution of a protein contains 1.26 g of the protein. The osmotic pressure of such a solution at 300 K is found to be 2.57 × 10⁻³ bar. Calculate the molar mass of the protein. (R = 0.083 L bar K⁻¹ mol⁻¹)",
    given: {
      "Volume of solution (V)": "200 cm³ = 0.200 L",
      "Mass of protein (w₂)": "1.26 g",
      "Temperature (T)": "300 K",
      "Osmotic pressure (π)": "2.57 × 10⁻³ bar",
      "Gas constant (R)": "0.083 L bar K⁻¹ mol⁻¹"
    },
    asked: "Molar mass of the protein M₂ in g mol⁻¹.",
    concept: "Osmotic pressure formula π = (w₂ R T) / (M₂ V). Rearrange for M₂.",
    formula: "M_2 = \\frac{w_2 R T}{\\pi V}",
    unitConversion: "V = 200 cm³ = 0.200 L; π = 2.57 × 10⁻³ bar.",
    substitution: "M_2 = \\frac{1.26 \\times 0.083 \\times 300}{(2.57 \\times 10^{-3}) \\times 0.200}",
    calculation: [
      "Step 1: Numerator = 1.26 × 0.083 × 300 = 31.374.",
      "Step 2: Denominator = 2.57 × 10⁻³ × 0.200 = 5.14 × 10⁻⁴.",
      "Step 3: M₂ = 31.374 / (5.14 × 10⁻⁴) = 61038.9 g mol⁻¹ ≈ 61,039 g mol⁻¹."
    ],
    finalAnswer: "Molar mass of protein M₂ = 61,039 g mol⁻¹ (6.10 × 10⁴ g mol⁻¹)",
    neetShortcut: "Proteins and polymers typically have huge molar masses (10,000 to 100,000+ g/mol). A large answer confirms physical reasonableness!",
    commonMistake: "Leaving volume in cm³ (200) without converting to Litres (0.2 L)."
  },
  {
    id: "num-osm-2",
    category: "OsmoticPressure",
    title: "Problem 18: Isotonic Solutions and Unknown Solute Molar Mass",
    problemStatement: "A 5% (w/V) solution of cane sugar (C₁₂H₂₂O₁₁, M₁ = 342 g mol⁻¹) is isotonic with a 0.877% (w/V) solution of an unknown substance X at the same temperature. Determine the molar mass of substance X.",
    given: {
      "Cane sugar solution": "5 g per 100 mL (M₁ = 342 g mol⁻¹)",
      "Unknown X solution": "0.877 g per 100 mL",
      "Condition": "Isotonic (π₁ = π₂ at same T)"
    },
    asked: "Molar mass of unknown substance X (M_X).",
    concept: "Isotonic non-electrolyte solutions at the same temperature have equal molar concentrations: C₁ = C₂.",
    formula: "C_1 = C_2 \\implies \\frac{w_1}{M_1 V_1} = \\frac{w_2}{M_2 V_2}",
    unitConversion: "Both solutions are per 100 mL, so V₁ = V₂ = 100 mL cancels out.",
    substitution: "\\frac{5}{342} = \\frac{0.877}{M_X}",
    calculation: [
      "Step 1: 5 / 342 = 0.877 / M_X.",
      "Step 2: M_X = (0.877 × 342) / 5.",
      "Step 3: 0.877 × 342 = 299.934.",
      "Step 4: M_X = 299.934 / 5 = 59.987 ≈ 60 g mol⁻¹ (matches Urea)."
    ],
    finalAnswer: "Molar mass of substance X = 60 g mol⁻¹",
    neetShortcut: "Direct cross-multiplication: M_X = (342 × 0.877) / 5 = 68.4 × 0.877 ≈ 60 g/mol in 5 seconds!",
    commonMistake: "Calculating absolute osmotic pressure π with R and T when they cancel out completely."
  },
  {
    id: "num-osm-3",
    category: "OsmoticPressure",
    title: "Problem 19: Osmotic Pressure of Glucose Solution at 27°C",
    problemStatement: "Calculate the osmotic pressure in atmospheres of a solution prepared by dissolving 45.0 g of glucose (C₆H₁₂O₆, M = 180 g mol⁻¹) in enough water to make 2.50 L of solution at 27°C. (R = 0.0821 L atm K⁻¹ mol⁻¹)",
    given: {
      "Mass of glucose (w₂)": "45.0 g (M = 180 g mol⁻¹)",
      "Volume of solution (V)": "2.50 L",
      "Temperature": "27°C = 27 + 273.15 = 300.15 K ≈ 300 K",
      "R": "0.0821 L atm K⁻¹ mol⁻¹"
    },
    asked: "Osmotic pressure π in atm.",
    concept: "π = C R T = (n / V) R T.",
    formula: "\\pi = \\frac{w_2 \\times R \\times T}{M_2 \\times V}",
    unitConversion: "T = 27°C = 300 K; n = 45.0 / 180 = 0.25 mol.",
    substitution: "\\pi = \\frac{0.25 \\times 0.0821 \\times 300}{2.50}",
    calculation: [
      "Step 1: n = 45 / 180 = 0.25 mol.",
      "Step 2: Molar concentration C = 0.25 / 2.50 = 0.10 mol L⁻¹.",
      "Step 3: π = 0.10 × 0.0821 × 300 = 2.463 atm."
    ],
    finalAnswer: "Osmotic Pressure π = 2.46 atm",
    neetShortcut: "At 300 K, RT = 0.0821 × 300 = 24.63. So for any 0.1 M solution at 27°C, π = 0.1 × 24.63 = 2.46 atm!",
    commonMistake: "Using temperature in Celsius (27) instead of Kelvin (300 K)."
  },

  // --- Category 7: van't Hoff Factor & Abnormal Molar Mass (4 Problems) ---
  {
    id: "num-vant-1",
    category: "VantHoffFactor",
    title: "Problem 20: Degree of Dissociation of Calcium Nitrate from Boiling Point",
    problemStatement: "A 0.1 molal aqueous solution of Ca(NO₃)₂ boils at 100.14°C at 1 atm. Calculate the van't Hoff factor (i) and the degree of dissociation (α) of the salt. (K_b for water = 0.52 K kg mol⁻¹)",
    given: {
      "Molality (m)": "0.1 mol kg⁻¹",
      "Observed boiling point T_b": "100.14°C → ΔT_b(obs) = 0.14 K",
      "K_b for water": "0.52 K kg mol⁻¹",
      "Electrolyte": "Ca(NO₃)₂ → Ca²⁺ + 2NO₃⁻ (n = 3 ions)"
    },
    asked: "van't Hoff factor (i) and Degree of dissociation (α).",
    concept: "ΔT_b(obs) = i · K_b · m. Degree of dissociation α = (i - 1) / (n - 1).",
    formula: "i = \\frac{\\Delta T_b\\text{(obs)}}{K_b \\times m}, \\quad \\alpha = \\frac{i - 1}{n - 1}",
    unitConversion: "ΔT_b(calc) = K_b × m = 0.52 × 0.1 = 0.052 K.",
    substitution: "i = \\frac{0.14}{0.52 \\times 0.1} = \\frac{0.14}{0.052} = 2.692, \\quad \\alpha = \\frac{2.692 - 1}{3 - 1}",
    calculation: [
      "Step 1: Calculate normal ΔT_b(calc) = 0.52 × 0.1 = 0.052 K.",
      "Step 2: i = 0.14 / 0.052 = 2.692.",
      "Step 3: For Ca(NO₃)₂, n = 1 (Ca²⁺) + 2 (NO₃⁻) = 3 ions.",
      "Step 4: α = (2.692 - 1) / (3 - 1) = 1.692 / 2 = 0.846 = 84.6%."
    ],
    finalAnswer: "van't Hoff factor i = 2.69; Degree of dissociation α = 0.846 (84.6%)",
    neetShortcut: "Direct step: α = (ΔT_obs - ΔT_calc) / [(n - 1) × ΔT_calc] = (0.14 - 0.052) / [2 × 0.052] = 0.088 / 0.104 = 0.846.",
    commonMistake: "Taking n = 2 for Ca(NO₃)₂ instead of n = 3 (1 Ca²⁺ + 2 NO₃⁻)."
  },
  {
    id: "num-vant-2",
    category: "VantHoffFactor",
    title: "Problem 21: Degree of Association of Benzoic Acid in Benzene",
    problemStatement: "2.0 g of benzoic acid (C₆H₅COOH, M = 122 g mol⁻¹) dissolved in 25.0 g of benzene shows a depression in freezing point of 1.62 K. Calculate the percentage association of benzoic acid if it exists as a dimer in benzene. (K_f for benzene = 4.9 K kg mol⁻¹)",
    given: {
      "Mass of benzoic acid (w₂)": "2.0 g (M_normal = 122 g mol⁻¹)",
      "Mass of benzene (w₁)": "25.0 g = 0.025 kg",
      "Observed ΔT_f": "1.62 K",
      "K_f (benzene)": "4.9 K kg mol⁻¹",
      "Dimerization": "2 C₆H₅COOH ⇌ (C₆H₅COOH)₂ → n = 2"
    },
    asked: "Percentage association (α × 100%).",
    concept: "Calculate experimental molar mass M_obs. i = M_normal / M_obs. α = (1 - i) / (1 - 1/n).",
    formula: "M_\\text{obs} = \\frac{K_f \\times w_2 \\times 1000}{\\Delta T_f \\times w_1}, \\quad i = \\frac{M_\\text{normal}}{M_\\text{obs}}, \\quad \\alpha = \\frac{1 - i}{1 - 1/2} = 2(1 - i)",
    unitConversion: "w₁ = 25 g.",
    substitution: "M_\\text{obs} = \\frac{4.9 \\times 2.0 \\times 1000}{1.62 \\times 25.0} = \\frac{9800}{40.5} = 241.98 \\text{ g mol}^{-1}",
    calculation: [
      "Step 1: M_obs = 9800 / 40.5 = 241.98 g mol⁻¹.",
      "Step 2: i = M_normal / M_obs = 122 / 241.98 = 0.504.",
      "Step 3: For dimerization (n = 2), α = 2(1 - i).",
      "Step 4: α = 2(1 - 0.504) = 2(0.496) = 0.992 = 99.2%."
    ],
    finalAnswer: "Percentage association = 99.2%",
    neetShortcut: "M_obs (241.98) is nearly double M_normal (122), showing almost complete (> 99%) dimerization via hydrogen bonding in non-polar benzene!",
    commonMistake: "Using dissociation formula α = (i - 1)/(n - 1) instead of association formula α = 2(1 - i)."
  },
  {
    id: "num-vant-3",
    category: "VantHoffFactor",
    title: "Problem 22: Freezing Point of Electrolyte Solution (0.01 m BaCl₂)",
    problemStatement: "Calculate the freezing point of a 0.01 m aqueous solution of barium chloride (BaCl₂) assuming it is 100% ionized. (K_f for water = 1.86 K kg mol⁻¹)",
    given: {
      "Molality (m)": "0.01 mol kg⁻¹",
      "Electrolyte": "BaCl₂ → Ba²⁺ + 2Cl⁻ (100% ionized → i = 3)",
      "K_f (water)": "1.86 K kg mol⁻¹"
    },
    asked: "Freezing point of the solution T_f in °C.",
    concept: "ΔT_f = i · K_f · m. T_f = 0.00°C - ΔT_f.",
    formula: "\\Delta T_f = i \\times K_f \\times m",
    unitConversion: "i = 3, m = 0.01.",
    substitution: "\\Delta T_f = 3 \\times 1.86 \\times 0.01",
    calculation: [
      "Step 1: ΔT_f = 3 × 1.86 × 0.01 = 0.0558 K (or 0.0558°C).",
      "Step 2: T_f = 0.00 - 0.0558 = -0.0558°C."
    ],
    finalAnswer: "Freezing point T_f = -0.0558°C (273.094 K)",
    neetShortcut: "1.86 × 3 = 5.58. For 0.01 m, ΔT_f = 0.0558°C. Direct mental multiplication!",
    commonMistake: "Forgetting the van't Hoff factor i = 3 and calculating ΔT_f as 0.0186°C."
  },
  {
    id: "num-vant-4",
    category: "VantHoffFactor",
    title: "Problem 23: Comparative Ranking of Colligative Properties for 0.1 M Solutions",
    problemStatement: "Arrange the following 0.10 M aqueous solutions in increasing order of their: (a) Osmotic Pressure (π), (b) Freezing Point (T_f), (c) Boiling Point (T_b). Solutions: I. 0.1 M Glucose, II. 0.1 M NaCl, III. 0.1 M BaCl₂, IV. 0.1 M Al₂(SO₄)₃. (Assume complete ionization).",
    given: {
      "I. Glucose": "Non-electrolyte → i = 1 → Effective concentration = 0.10 M",
      "II. NaCl": "Na⁺ + Cl⁻ → i = 2 → Effective concentration = 0.20 M",
      "III. BaCl₂": "Ba²⁺ + 2Cl⁻ → i = 3 → Effective concentration = 0.30 M",
      "IV. Al₂(SO₄)₃": "2Al³⁺ + 3SO₄²⁻ → i = 5 → Effective concentration = 0.50 M"
    },
    asked: "Increasing order for (a) π, (b) Freezing Point T_f, (c) Boiling Point T_b.",
    concept: "Colligative properties (π, ΔT_b, ΔT_f) ∝ i · C. Boiling Point T_b = T_b° + ΔT_b (Higher i → Higher T_b). Freezing Point T_f = T_f° - ΔT_f (Higher i → GREATER depression → LOWER freezing point!).",
    formula: "\\pi \\propto i, \\quad T_b \\propto i, \\quad T_f \\propto \\frac{1}{i}",
    unitConversion: "All concentrations are 0.1 M.",
    substitution: "i values: Glucose (1) < NaCl (2) < BaCl₂ (3) < Al₂(SO₄)₃ (5)",
    calculation: [
      "Step 1: Ranking of effective particle concentration (i · C): Glucose (0.1) < NaCl (0.2) < BaCl₂ (0.3) < Al₂(SO₄)₃ (0.5).",
      "Step 2: (a) Osmotic pressure order: Glucose < NaCl < BaCl₂ < Al₂(SO₄)₃ (I < II < III < IV).",
      "Step 3: (b) Freezing point order: Higher i gives lower T_f. Thus lowest T_f is Al₂(SO₄)₃ and highest T_f is Glucose: Al₂(SO₄)₃ < BaCl₂ < NaCl < Glucose (IV < III < II < I).",
      "Step 4: (c) Boiling point order: Higher i gives higher T_b: Glucose < NaCl < BaCl₂ < Al₂(SO₄)₃ (I < II < III < IV)."
    ],
    finalAnswer: "(a) Osmotic Pressure: I < II < III < IV; (b) Freezing Point: IV < III < II < I; (c) Boiling Point: I < II < III < IV",
    neetShortcut: "GOLDEN RULE: Colligative properties (ΔTb, ΔTf, π, RLVP) and Boiling Point follow i. ONLY FREEZING POINT AND VAPOUR PRESSURE REVERSE THE ORDER!",
    commonMistake: "Ranking Freezing Point in the same order as Freezing Point Depression. More depression means a LOWER freezing temperature!"
  }
];
