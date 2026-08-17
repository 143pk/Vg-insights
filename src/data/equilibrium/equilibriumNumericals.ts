// 30+ Original NEET-level Solved Numericals for Equilibrium (NEET UG 2026 Masterclass)

export interface EquilibriumNumerical {
  id: string;
  category: 'Chemical Equilibrium' | 'Kc & Kp Relations' | 'pH of Acids & Bases' | 'Ka & Kb Ionization' | 'Buffers & Salt Hydrolysis' | 'Ksp & Precipitation';
  title: string;
  question: string;
  given: string[];
  asked: string;
  concept: string;
  formula: string;
  unitConversion?: string;
  calculation: string[];
  finalAnswer: string;
  neetShortcut: string;
  commonTrap: string;
}

export const EQUILIBRIUM_NUMERICALS: EquilibriumNumerical[] = [
  // ==========================================
  // CATEGORY 1: Chemical Equilibrium (1-5)
  // ==========================================
  {
    id: "num-1",
    category: "Chemical Equilibrium",
    title: "1. Equilibrium Concentrations for H₂ + I₂ ⇌ 2 HI",
    question: "At 700 K, 1.0 mol of H₂ and 1.0 mol of I₂ are heated in a sealed 1.0 L vessel until equilibrium is reached. If K_c = 64 for H₂(g) + I₂(g) ⇌ 2 HI(g), calculate the equilibrium molar concentration of HI.",
    given: [
      "Initial moles of H₂ = 1.0 mol",
      "Initial moles of I₂ = 1.0 mol",
      "Volume of vessel V = 1.0 L",
      "K_c = 64 at 700 K"
    ],
    asked: "Equilibrium concentration [HI]_eq in mol L⁻¹",
    concept: "Homogeneous gaseous equilibrium where Δn_g = 0. Set up standard ICE table and take square roots of both sides.",
    formula: "K_c = \\frac{[HI]^2}{[H_2][I_2]} = \\frac{(2x)^2}{(1-x)(1-x)}",
    calculation: [
      "Step 1: Set up ICE table in 1.0 L container (moles = molarity):",
      "Initial: [H₂] = 1.0 M, [I₂] = 1.0 M, [HI] = 0",
      "Change: [H₂] = −x, [I₂] = −x, [HI] = +2x",
      "Equilibrium: [H₂] = 1 − x, [I₂] = 1 − x, [HI] = 2x",
      "Step 2: Substitute into K_c expression:",
      "K_c = (2x)² / (1 − x)² = 64",
      "Step 3: Taking square root on both sides:",
      "2x / (1 − x) = √64 = 8",
      "2x = 8(1 − x) = 8 − 8x",
      "10x = 8 ⟹ x = 0.80 M",
      "Step 4: Find equilibrium concentration of HI:",
      "[HI]_eq = 2x = 2 × 0.80 = 1.60 M"
    ],
    finalAnswer: "[HI]_eq = 1.60 mol L⁻¹",
    neetShortcut: "When reactants are in 1:1 equimolar ratio and Δn_g = 0, directly take square root: 2x / (a − x) = √K_c. Here 2x / (1 − x) = 8 ➔ x = 8/10 = 0.8 M ➔ [HI] = 1.6 M.",
    commonTrap: "Forgetting that [HI] is 2x, not x. Reporting x = 0.8 M is a classic wrong option in NEET."
  },
  {
    id: "num-2",
    category: "Chemical Equilibrium",
    title: "2. Dissociation of PCl₅(g) into PCl₃(g) and Cl₂(g)",
    question: "In a 2.0 L closed vessel, 2.0 mol of PCl₅ is heated to 500 K. At equilibrium, PCl₅ is found to be 40% dissociated according to PCl₅(g) ⇌ PCl₃(g) + Cl₂(g). Calculate the equilibrium constant K_c.",
    given: [
      "Initial moles of PCl₅ n₀ = 2.0 mol",
      "Volume V = 2.0 L",
      "Degree of dissociation α = 40% = 0.40"
    ],
    asked: "Equilibrium constant K_c",
    concept: "Heterogeneous/homogeneous dissociation equilibrium where moles dissociated = n₀ × α.",
    formula: "K_c = \\frac{[PCl_3][Cl_2]}{[PCl_5]} = \\frac{(n_0\\alpha / V)(n_0\\alpha / V)}{n_0(1-\\alpha) / V} = \\frac{n_0 \\alpha^2}{(1-\\alpha)V}",
    calculation: [
      "Step 1: Calculate moles of each species at equilibrium:",
      "Moles of PCl₅ reacted = n₀ × α = 2.0 × 0.40 = 0.80 mol",
      "n(PCl₅)_eq = 2.0 − 0.80 = 1.20 mol",
      "n(PCl₃)_eq = 0.80 mol",
      "n(Cl₂)_eq = 0.80 mol",
      "Step 2: Convert moles to molar concentrations in 2.0 L:",
      "[PCl₅] = 1.20 / 2.0 = 0.60 M",
      "[PCl₃] = 0.80 / 2.0 = 0.40 M",
      "[Cl₂] = 0.80 / 2.0 = 0.40 M",
      "Step 3: Calculate K_c:",
      "K_c = ([PCl₃][Cl₂]) / [PCl₅] = (0.40 × 0.40) / 0.60 = 0.16 / 0.60 = 0.267 mol L⁻¹"
    ],
    finalAnswer: "K_c = 0.267 mol L⁻¹ (or 4/15 M)",
    neetShortcut: "Use direct formula K_c = (n₀ α²) / ((1 − α) V) = (2.0 × 0.16) / (0.60 × 2.0) = 0.16 / 0.60 = 0.267 M.",
    commonTrap: "Plugging moles directly into K_c without dividing by volume V = 2.0 L (since Δn_g = +1, volume does not cancel!)."
  },
  {
    id: "num-3",
    category: "Chemical Equilibrium",
    title: "3. Reaction Quotient & Shift Direction for N₂O₄ ⇌ 2 NO₂",
    question: "For the reaction N₂O₄(g) ⇌ 2 NO₂(g), K_c = 0.20 at 373 K. In a 5.0 L container, a mixture contains 0.10 mol of N₂O₄ and 0.40 mol of NO₂. Determine whether the system is at equilibrium; if not, predict the direction of spontaneous shift.",
    given: [
      "Moles of N₂O₄ = 0.10 mol,  Moles of NO₂ = 0.40 mol",
      "Volume V = 5.0 L",
      "K_c = 0.20 at 373 K"
    ],
    asked: "Reaction Quotient Q_c and direction of net shift",
    concept: "Evaluate Q_c at given instantaneous concentrations and compare with K_c.",
    formula: "Q_c = \\frac{[NO_2]^2}{[N_2O_4]}",
    calculation: [
      "Step 1: Calculate instantaneous molar concentrations:",
      "[N₂O₄] = 0.10 mol / 5.0 L = 0.020 M",
      "[NO₂] = 0.40 mol / 5.0 L = 0.080 M",
      "Step 2: Calculate Reaction Quotient Q_c:",
      "Q_c = (0.080)² / 0.020 = 0.0064 / 0.020 = 0.32",
      "Step 3: Compare Q_c with K_c:",
      "Q_c = 0.32  >  K_c = 0.20",
      "Step 4: Deduce direction:",
      "Since Q_c > K_c, there is an excess of products (NO₂). The reaction must shift in the REVERSE direction (←) to reach equilibrium."
    ],
    finalAnswer: "Q_c = 0.32 > K_c (0.20); Reaction shifts in the REVERSE direction (←)",
    neetShortcut: "Q_c = (0.40/5)² / (0.10/5) = 0.16 / (5 × 0.10) = 0.16 / 0.50 = 0.32 > 0.20 ➔ Shifts Left (←).",
    commonTrap: "Forgetting to square the [NO₂] concentration or forgetting to divide moles by 5 L container volume."
  },
  {
    id: "num-4",
    category: "Chemical Equilibrium",
    title: "4. Combining Equilibrium Constants for Multi-Step Reactions",
    question: "Given the following reactions at 1000 K:\n(1) N₂(g) + O₂(g) ⇌ 2 NO(g),  K₁ = 4.0 × 10⁻⁴\n(2) 2 NO(g) + O₂(g) ⇌ 2 NO₂(g),  K₂ = 1.6 × 10³\nCalculate the equilibrium constant K_net for the reaction: NO₂(g) ⇌ ½ N₂(g) + O₂(g).",
    given: [
      "K₁ = 4.0 × 10⁻⁴ for N₂ + O₂ ⇌ 2 NO",
      "K₂ = 1.6 × 10³ for 2 NO + O₂ ⇌ 2 NO₂"
    ],
    asked: "K_net for NO₂(g) ⇌ ½ N₂(g) + O₂(g)",
    concept: "Rules for manipulating equilibrium constants: Adding reactions multiplies K; reversing inverts K; multiplying coefficients by n raises K to the power n.",
    formula: "K_{net} = \\left( \\frac{1}{K_1 \\times K_2} \\right)^{1/2} = \\frac{1}{\\sqrt{K_1 \\times K_2}}",
    calculation: [
      "Step 1: Add reaction (1) and reaction (2) to get overall formation of 2 NO₂:",
      "N₂(g) + 2 O₂(g) ⇌ 2 NO₂(g),  K_comb = K₁ × K₂",
      "K_comb = (4.0 × 10⁻⁴) × (1.6 × 10³) = 6.4 × 10⁻¹ = 0.64",
      "Step 2: Target equation is reversed and halved:",
      "2 NO₂(g) ⇌ N₂(g) + 2 O₂(g) ⟹ K' = 1 / K_comb = 1 / 0.64",
      "Multiplying equation by ½ gives target reaction: NO₂ ⇌ ½ N₂ + O₂",
      "K_net = (K')^{1/2} = 1 / √(0.64) = 1 / 0.80 = 1.25"
    ],
    finalAnswer: "K_net = 1.25",
    neetShortcut: "K_net = 1 / √(K₁ × K₂) = 1 / √(4.0 × 10⁻⁴ × 1600) = 1 / √(0.64) = 1 / 0.8 = 1.25.",
    commonTrap: "Adding equilibrium constants (K₁ + K₂) instead of multiplying, or forgetting to take square root when coefficients are halved."
  },
  {
    id: "num-5",
    category: "Chemical Equilibrium",
    title: "5. Degree of Dissociation from Vapour Density",
    question: "At 250°C, the vapour density of PCl₅ is found to be 70.0. Calculate the degree of dissociation (α) of PCl₅ if its theoretical molecular mass is 208.5 g mol⁻¹.",
    given: [
      "Observed vapour density D_obs (or d) = 70.0",
      "Theoretical molecular mass M_th = 208.5 g mol⁻¹",
      "Reaction: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) (n = 2)"
    ],
    asked: "Degree of dissociation α",
    concept: "Vapour density relation for gaseous dissociation: D_theoretical = M_th / 2. Degree of dissociation α = (D − d) / ((n − 1) d).",
    formula: "\\alpha = \\frac{D - d}{(n - 1)d} \\quad \\text{where } D = \\frac{M_{th}}{2}, \\; n = 2",
    calculation: [
      "Step 1: Calculate theoretical vapour density D:",
      "D = M_th / 2 = 208.5 / 2 = 104.25",
      "Step 2: Identify n (number of moles of gas produced from 1 mole PCl₅):",
      "PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) ⟹ n = 1 + 1 = 2",
      "Step 3: Substitute into dissociation formula:",
      "α = (D − d) / ((2 − 1) × d) = (104.25 − 70.0) / 70.0",
      "α = 34.25 / 70.0 = 0.4893 ≈ 0.49 (or 48.9%)"
    ],
    finalAnswer: "α = 0.49 (or 48.9% dissociated)",
    neetShortcut: "α = (104.25 − 70) / 70 = 34.25 / 70 ≈ 0.489 ➔ ~49%.",
    commonTrap: "Using M_th directly instead of theoretical vapour density D = M_th / 2 in the formula."
  },

  // ==========================================
  // CATEGORY 2: Kc & Kp Relations (6-10)
  // ==========================================
  {
    id: "num-6",
    category: "Kc & Kp Relations",
    title: "6. Calculating Kp from Kc for N₂O₄ ⇌ 2 NO₂",
    question: "For the equilibrium N₂O₄(g) ⇌ 2 NO₂(g), K_c = 4.66 × 10⁻³ mol L⁻¹ at 27°C. Calculate K_p at this temperature in atm (R = 0.0821 L atm K⁻¹ mol⁻¹).",
    given: [
      "K_c = 4.66 × 10⁻³ mol L⁻¹",
      "Temperature T = 27°C = 27 + 273.15 = 300.15 K (use 300 K)",
      "R = 0.0821 L atm K⁻¹ mol⁻¹"
    ],
    asked: "Equilibrium constant K_p in atm",
    concept: "Relate K_p and K_c using K_p = K_c (RT)^Δn_g, where Δn_g = moles of gaseous products − moles of gaseous reactants.",
    formula: "K_p = K_c (R T)^{\\Delta n_g}, \\quad \\Delta n_g = 2 - 1 = +1",
    unitConversion: "T = 27°C + 273 = 300 K",
    calculation: [
      "Step 1: Calculate Δn_g for the balanced gaseous reaction:",
      "Δn_g = n_products(g) − n_reactants(g) = 2 − 1 = +1",
      "Step 2: Compute RT product:",
      "RT = 0.0821 × 300 = 24.63 L atm mol⁻¹",
      "Step 3: Calculate K_p:",
      "K_p = K_c × (RT)¹ = (4.66 × 10⁻³) × 24.63",
      "K_p = 0.1148 atm ≈ 0.115 atm"
    ],
    finalAnswer: "K_p = 0.115 atm",
    neetShortcut: "At 300 K, RT ≈ 24.6. K_p = 4.66 × 10⁻³ × 24.6 ≈ 0.115 atm.",
    commonTrap: "Using temperature in Celsius (27) instead of converting to Kelvin (300 K)."
  },
  {
    id: "num-7",
    category: "Kc & Kp Relations",
    title: "7. Heterogeneous Equilibrium Kp for CaCO₃(s) Decomposition",
    question: "At 1000 K, the equilibrium pressure of CO₂ over solid CaCO₃ and CaO according to CaCO₃(s) ⇌ CaO(s) + CO₂(g) is 0.50 atm. Calculate K_p and K_c for this reaction at 1000 K (R = 0.0821 L atm K⁻¹ mol⁻¹).",
    given: [
      "Equilibrium pressure of CO₂ p_CO₂ = 0.50 atm",
      "Temperature T = 1000 K",
      "R = 0.0821 L atm K⁻¹ mol⁻¹"
    ],
    asked: "K_p and K_c values at 1000 K",
    concept: "In heterogeneous equilibria, pure solids have active mass = 1. Only gaseous CO₂ appears in K_p and K_c.",
    formula: "K_p = p_{CO_2}, \\quad K_c = \\frac{K_p}{(R T)^{\\Delta n_g}} \\quad (\\Delta n_g = 1)",
    calculation: [
      "Step 1: Write K_p expression omitting pure solids CaCO₃(s) and CaO(s):",
      "K_p = p_CO₂ = 0.50 atm",
      "Step 2: Determine Δn_g:",
      "Δn_g = 1 (CO₂ gas) − 0 (no gaseous reactants) = +1",
      "Step 3: Relate K_c to K_p:",
      "K_c = K_p / (RT)¹ = 0.50 / (0.0821 × 1000) = 0.50 / 82.1",
      "K_c = 6.09 × 10⁻³ mol L⁻¹"
    ],
    finalAnswer: "K_p = 0.50 atm,  K_c = 6.09 × 10⁻³ mol L⁻¹",
    neetShortcut: "K_p is simply 0.50 atm directly. K_c = 0.50 / 82.1 = 6.1 × 10⁻³ M.",
    commonTrap: "Including solid CaCO₃ or CaO in the denominator of K_p or calculating Δn_g as 2 − 1 = 1 from total substances instead of only gases."
  },
  {
    id: "num-8",
    category: "Kc & Kp Relations",
    title: "8. Finding Temperature Where Kp = Kc (Δn ≠ 0)",
    question: "For a reaction with Δn_g = +1, at what temperature (in Kelvin and Celsius) will the numerical value of K_p be equal to K_c? (Take R = 0.0821 L atm K⁻¹ mol⁻¹)",
    given: [
      "Δn_g = +1",
      "Condition: Numerical value K_p = K_c",
      "R = 0.0821 L atm K⁻¹ mol⁻¹"
    ],
    asked: "Temperature T in K and °C",
    concept: "K_p = K_c (RT)^Δn. When K_p = K_c and Δn ≠ 0, (RT)^Δn must equal 1, which means RT = 1.",
    formula: "R T = 1 \\implies T = \\frac{1}{R}",
    calculation: [
      "Step 1: Set up condition:",
      "K_p / K_c = (RT)¹ = 1",
      "Step 2: Solve for T:",
      "T = 1 / R = 1 / 0.0821 = 12.18 K",
      "Step 3: Convert to Celsius:",
      "T(°C) = 12.18 − 273.15 = −260.97°C ≈ −261°C"
    ],
    finalAnswer: "T = 12.18 K (−261°C)",
    neetShortcut: "1 / 0.0821 ≈ 12.2 K.",
    commonTrap: "Confusing with the condition Δn_g = 0 (where K_p = K_c at ALL temperatures). Here Δn_g = 1, so RT must specifically equal 1."
  },
  {
    id: "num-9",
    category: "Kc & Kp Relations",
    title: "9. Total Pressure and Kp for NH₄HS(s) Dissociation",
    question: "Solid ammonium hydrogen sulfide dissociates as NH₄HS(s) ⇌ NH₃(g) + H₂S(g). In a closed vessel at 25°C, the total pressure at equilibrium is found to be 0.60 atm. Calculate the equilibrium constant K_p for this reaction.",
    given: [
      "Total equilibrium pressure P_total = 0.60 atm",
      "Solid reactant: NH₄HS(s) (active mass = 1)"
    ],
    asked: "Equilibrium constant K_p",
    concept: "Gaseous products NH₃ and H₂S are produced in an exact 1:1 molar ratio, so their partial pressures are equal.",
    formula: "p_{NH_3} = p_{H_2S} = \\frac{P_{total}}{2}, \\quad K_p = (p_{NH_3})(p_{H_2S}) = \\left(\\frac{P_{total}}{2}\\right)^2 = \\frac{P_{total}^2}{4}",
    calculation: [
      "Step 1: Find partial pressure of each gas:",
      "Since 1 mole NH₃ is formed per 1 mole H₂S, p_NH₃ = p_H₂S = P_total / 2 = 0.60 / 2 = 0.30 atm",
      "Step 2: Calculate K_p (omitting solid NH₄HS):",
      "K_p = (p_NH₃)(p_H₂S) = (0.30)(0.30) = 0.090 atm²"
    ],
    finalAnswer: "K_p = 0.090 atm²",
    neetShortcut: "For NH₄HS dissociation: K_p = P_total² / 4 = (0.60)² / 4 = 0.36 / 4 = 0.09 atm².",
    commonTrap: "Squaring the total pressure directly (K_p = 0.60² = 0.36), forgetting that each gas only contributes half the total pressure."
  },
  {
    id: "num-10",
    category: "Kc & Kp Relations",
    title: "10. Kc to Kp Conversion for Haber Process (Δn < 0)",
    question: "For N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), K_c = 0.50 (mol L⁻¹)⁻² at 400°C. Calculate K_p in (atm)⁻² at this temperature (R = 0.0821 L atm K⁻¹ mol⁻¹).",
    given: [
      "K_c = 0.50 M⁻²",
      "Temperature T = 400°C = 400 + 273 = 673 K",
      "R = 0.0821 L atm K⁻¹ mol⁻¹"
    ],
    asked: "K_p in atm⁻²",
    concept: "Calculate Δn_g = 2 − (1 + 3) = −2. Since Δn_g is negative, K_p = K_c / (RT)².",
    formula: "K_p = K_c (R T)^{\\Delta n_g} = \\frac{K_c}{(R T)^2}",
    unitConversion: "T = 400 + 273 = 673 K",
    calculation: [
      "Step 1: Calculate Δn_g = 2 − 4 = −2",
      "Step 2: Calculate RT = 0.0821 × 673 = 55.25 L atm mol⁻¹",
      "Step 3: Calculate (RT)² = (55.25)² = 3052.56",
      "Step 4: Compute K_p:",
      "K_p = 0.50 / 3052.56 = 1.64 × 10⁻⁴ atm⁻²"
    ],
    finalAnswer: "K_p = 1.64 × 10⁻⁴ atm⁻²",
    neetShortcut: "K_p = 0.50 / (55.25)² ≈ 0.50 / 3050 ≈ 1.64 × 10⁻⁴ atm⁻².",
    commonTrap: "Multiplying by (RT)² instead of dividing (forgetting that Δn_g = −2 is negative!)."
  },

  // ==========================================
  // CATEGORY 3: pH of Strong and Weak Acids & Bases (11-15)
  // ==========================================
  {
    id: "num-11",
    category: "pH of Acids & Bases",
    title: "11. pH of Polyprotic Strong Acid (0.005 M H₂SO₄)",
    question: "Calculate the pH of a 0.005 M aqueous solution of sulfuric acid (H₂SO₄), assuming complete ionization of both protons.",
    given: [
      "Molarity of H₂SO₄ C = 0.005 M",
      "Basicity of acid n = 2 (dibasic acid)"
    ],
    asked: "pH of the solution",
    concept: "H₂SO₄ is dibasic: H₂SO₄ ➔ 2 H⁺ + SO₄²⁻. Therefore, [H⁺] = 2 × C.",
    formula: "[H^+] = 2 \\times [H_2SO_4], \\quad pH = -\\log_{10}[H^+]",
    calculation: [
      "Step 1: Determine [H⁺]:",
      "[H⁺] = 2 × 0.005 M = 0.010 M = 1.0 × 10⁻² M",
      "Step 2: Calculate pH:",
      "pH = −log₁₀(1.0 × 10⁻²) = 2.00"
    ],
    finalAnswer: "pH = 2.00",
    neetShortcut: "[H⁺] = 2 × 0.005 = 10⁻² M ➔ pH = 2.0.",
    commonTrap: "Calculating pH = −log(0.005) = 2.30, forgetting to multiply concentration by basicity 2 for H₂SO₄."
  },
  {
    id: "num-12",
    category: "pH of Acids & Bases",
    title: "12. The Ultra-Dilute 10⁻⁸ M HCl Trap",
    question: "Calculate the exact pH of a 1.0 × 10⁻⁸ M aqueous solution of hydrochloric acid (HCl) at 25°C.",
    given: [
      "[HCl] = 1.0 × 10⁻⁸ M",
      "K_w = 1.0 × 10⁻¹⁴ at 25°C"
    ],
    asked: "True pH of the solution",
    concept: "Because [HCl] ≤ 10⁻⁶ M, H⁺ contribution from the auto-ionization of water (10⁻⁷ M) is greater than the acid itself and CANNOT be neglected.",
    formula: "[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x, \\quad (10^{-8} + x)(x) = K_w = 10^{-14}",
    calculation: [
      "Step 1: Set up quadratic equation for water ionization in presence of 10⁻⁸ M H⁺:",
      "x² + 10⁻⁸ x − 10⁻¹⁴ = 0",
      "Step 2: Solve using quadratic formula x = [−b + √(b² − 4ac)] / 2a:",
      "x = [−10⁻⁸ + √(10⁻¹⁶ + 4 × 10⁻¹⁴)] / 2",
      "√(4.01 × 10⁻¹⁴) ≈ 2.0025 × 10⁻⁷",
      "x = (2.0025 × 10⁻⁷ − 0.10 × 10⁻⁷) / 2 = 1.9025 × 10⁻⁷ / 2 = 0.951 × 10⁻⁷ M",
      "Step 3: Calculate total [H⁺]:",
      "[H⁺]_total = 1.0 × 10⁻⁸ + 0.951 × 10⁻⁷ = 0.10 × 10⁻⁷ + 0.951 × 10⁻⁷ = 1.051 × 10⁻⁷ M",
      "Step 4: Calculate pH:",
      "pH = −log₁₀(1.051 × 10⁻⁷) = 7 − log₁₀(1.051) = 7 − 0.0216 = 6.98"
    ],
    finalAnswer: "pH = 6.98",
    neetShortcut: "Memorize standard NEET value: 10⁻⁸ M HCl always has pH = 6.98 (slightly below 7, acidic).",
    commonTrap: "Claiming pH = −log(10⁻⁸) = 8.00! An acid solution can NEVER turn basic (pH > 7) simply by adding pure water."
  },
  {
    id: "num-13",
    category: "pH of Acids & Bases",
    title: "13. pH of 0.05 M Ba(OH)₂ Strong Diacidic Base",
    question: "Calculate the pH of a 0.05 M aqueous solution of barium hydroxide, Ba(OH)₂, at 25°C.",
    given: [
      "Molarity of Ba(OH)₂ C = 0.05 M",
      "Acidity of base = 2 OH⁻ ions per formula unit",
      "K_w = 1.0 × 10⁻¹⁴ at 25°C"
    ],
    asked: "pH of the basic solution",
    concept: "Ba(OH)₂ ➔ Ba²⁺ + 2 OH⁻. Calculate [OH⁻], then pOH, and finally pH = 14 − pOH.",
    formula: "[OH^-] = 2 \\times C, \\quad pOH = -\\log_{10}[OH^-], \\quad pH = 14 - pOH",
    calculation: [
      "Step 1: Calculate [OH⁻]:",
      "[OH⁻] = 2 × 0.05 M = 0.10 M = 1.0 × 10⁻¹ M",
      "Step 2: Calculate pOH:",
      "pOH = −log₁₀(10⁻¹) = 1.00",
      "Step 3: Calculate pH at 25°C:",
      "pH = 14.00 − pOH = 14.00 − 1.00 = 13.00"
    ],
    finalAnswer: "pH = 13.00",
    neetShortcut: "[OH⁻] = 0.1 M ➔ pOH = 1 ➔ pH = 14 − 1 = 13.",
    commonTrap: "Stopping at pOH = 1 and reporting 1.0 as the pH, or using [OH⁻] = 0.05 M."
  },
  {
    id: "num-14",
    category: "pH of Acids & Bases",
    title: "14. pH of Weak Monobasic Acid (0.1 M CH₃COOH, Ka = 1.8 × 10⁻⁵)",
    question: "Calculate the degree of dissociation (α), hydrogen ion concentration [H⁺], and pH of a 0.10 M acetic acid (CH₃COOH) solution. (K_a = 1.8 × 10⁻⁵, log 1.34 = 0.127)",
    given: [
      "Concentration C = 0.10 M",
      "K_a = 1.8 × 10⁻⁵"
    ],
    asked: "Degree of dissociation α, [H⁺], and pH",
    concept: "Ostwald dilution law for weak acid: When K_a / C = 1.8 × 10⁻⁴ << 1, α = √(K_a / C) < 0.05.",
    formula: "\\alpha = \\sqrt{\\frac{K_a}{C}}, \\quad [H^+] = \\sqrt{K_a \\cdot C}, \\quad pH = \\frac{1}{2}(pK_a - \\log C)",
    calculation: [
      "Step 1: Check Ostwald approximation validity:",
      "α = √(1.8 × 10⁻⁵ / 0.10) = √(1.8 × 10⁻⁴) = 1.34 × 10⁻² = 0.0134 (1.34% < 5%, approximation valid!)",
      "Step 2: Calculate [H⁺]:",
      "[H⁺] = Cα = 0.10 × 0.0134 = 1.34 × 10⁻³ M",
      "Step 3: Calculate pH:",
      "pH = −log₁₀(1.34 × 10⁻³) = 3 − log₁₀(1.34) = 3 − 0.127 = 2.873 ≈ 2.87"
    ],
    finalAnswer: "α = 0.0134 (1.34%), [H⁺] = 1.34 × 10⁻³ M, pH = 2.87",
    neetShortcut: "pH = ½(pK_a − log C) = ½(4.74 − log 10⁻¹) = ½(4.74 + 1.0) = ½(5.74) = 2.87.",
    commonTrap: "Treating CH₃COOH as a strong acid and calculating pH = −log(0.1) = 1.00."
  },
  {
    id: "num-15",
    category: "pH of Acids & Bases",
    title: "15. Dilution of Strong Acid Solution",
    question: "To what volume (in mL) must 100 mL of a pH = 2.0 HCl solution be diluted with pure water so that its pH becomes 4.0?",
    given: [
      "Initial volume V₁ = 100 mL",
      "Initial pH₁ = 2.0 ⟹ [H⁺]₁ = 10⁻² M",
      "Final pH₂ = 4.0 ⟹ [H⁺]₂ = 10⁻⁴ M"
    ],
    asked: "Final volume V₂ and volume of water added",
    concept: "Law of dilution: M₁ V₁ = M₂ V₂ (moles of solute remain constant upon adding pure solvent).",
    formula: "M_1 V_1 = M_2 V_2 \\implies V_2 = \\frac{M_1 V_1}{M_2}",
    calculation: [
      "Step 1: Determine initial and target molarities:",
      "M₁ = 10⁻² M = 0.01 M",
      "M₂ = 10⁻⁴ M = 0.0001 M",
      "Step 2: Calculate final volume V₂:",
      "V₂ = (M₁ × V₁) / M₂ = (10⁻² × 100 mL) / 10⁻⁴ = 100 × 10² = 10,000 mL = 10.0 L",
      "Step 3: Calculate volume of water added:",
      "V_water = V₂ − V₁ = 10,000 mL − 100 mL = 9,900 mL = 9.9 L"
    ],
    finalAnswer: "Final volume V₂ = 10,000 mL (10 L); Water added = 9,900 mL",
    neetShortcut: "Each 1-unit increase in pH requires a 10× dilution. Increasing pH from 2 to 4 (ΔpH = 2) requires a 10² = 100× dilution: V₂ = 100 × 100 mL = 10,000 mL.",
    commonTrap: "Answering 9,900 mL when asked for final volume, or 10,000 mL when asked for volume of water added. Read question wording carefully."
  },

  // ==========================================
  // CATEGORY 4: Ka & Kb Ionization (16-20)
  // ==========================================
  {
    id: "num-16",
    category: "Ka & Kb Ionization",
    title: "16. Finding Ka from Degree of Dissociation α and Concentration",
    question: "A 0.02 M monobasic acid is found to be 5.0% ionized in water at 25°C. Calculate the acid dissociation constant (K_a) and pK_a of this acid.",
    given: [
      "Concentration C = 0.02 M",
      "Degree of ionization α = 5.0% = 0.05"
    ],
    asked: "K_a and pK_a",
    concept: "Ostwald dilution law: K_a = Cα² / (1 − α). At α = 0.05, (1 − α) = 0.95.",
    formula: "K_a = \\frac{C \\alpha^2}{1 - \\alpha}",
    calculation: [
      "Step 1: Calculate K_a using exact Ostwald formula:",
      "K_a = [0.02 × (0.05)²] / (1 − 0.05) = [0.02 × 0.0025] / 0.95",
      "K_a = 5.0 × 10⁻⁵ / 0.95 = 5.26 × 10⁻⁵ mol L⁻¹",
      "Step 2: (Using approximation K_a ≈ Cα² = 0.02 × 0.0025 = 5.0 × 10⁻⁵)",
      "Step 3: Calculate pK_a:",
      "pK_a = −log₁₀(5.26 × 10⁻⁵) = 5 − log₁₀(5.26) = 5 − 0.721 = 4.28"
    ],
    finalAnswer: "K_a = 5.26 × 10⁻⁵ mol L⁻¹ (Approx: 5.0 × 10⁻⁵),  pK_a = 4.28",
    neetShortcut: "K_a ≈ C α² = 2 × 10⁻² × 25 × 10⁻⁴ = 5.0 × 10⁻⁵.",
    commonTrap: "Squaring α without squaring the percentage factor (e.g., using 5 instead of 0.05)."
  },
  {
    id: "num-17",
    category: "Ka & Kb Ionization",
    title: "17. Finding pH of Weak Base (0.1 M NH₄OH, Kb = 1.8 × 10⁻⁵)",
    question: "Calculate the concentration of OH⁻ ions, pOH, and pH of a 0.10 M aqueous ammonia (NH₄OH) solution at 25°C. (K_b = 1.8 × 10⁻⁵, log 1.34 = 0.127)",
    given: [
      "Concentration of NH₄OH C = 0.10 M",
      "K_b = 1.8 × 10⁻⁵"
    ],
    asked: "[OH⁻], pOH, and pH",
    concept: "Weak base ionization: NH₄OH ⇌ NH₄⁺ + OH⁻. [OH⁻] = √(K_b C).",
    formula: "[OH^-] = \\sqrt{K_b \\cdot C}, \\quad pOH = -\\log_{10}[OH^-], \\quad pH = 14 - pOH",
    calculation: [
      "Step 1: Calculate [OH⁻]:",
      "[OH⁻] = √(1.8 × 10⁻⁵ × 0.10) = √(1.8 × 10⁻⁴) = 1.34 × 10⁻³ M",
      "Step 2: Calculate pOH:",
      "pOH = −log₁₀(1.34 × 10⁻³) = 3 − 0.127 = 2.87",
      "Step 3: Calculate pH at 25°C:",
      "pH = 14.00 − pOH = 14.00 − 2.87 = 11.13"
    ],
    finalAnswer: "[OH⁻] = 1.34 × 10⁻³ M,  pOH = 2.87,  pH = 11.13",
    neetShortcut: "pOH = ½(pK_b − log C) = ½(4.74 + 1.0) = 2.87 ➔ pH = 14 − 2.87 = 11.13.",
    commonTrap: "Reporting pOH = 2.87 directly as the pH for a base!"
  },
  {
    id: "num-18",
    category: "Ka & Kb Ionization",
    title: "18. Relation Between Ka and Kb for Conjugate Pair (CH₃COOH / CH₃COO⁻)",
    question: "The ionization constant of acetic acid (CH₃COOH) is 1.8 × 10⁻⁵ at 298 K. Calculate the base dissociation constant (K_b) and pK_b for its conjugate base, the acetate ion (CH₃COO⁻).",
    given: [
      "K_a(CH₃COOH) = 1.8 × 10⁻⁵",
      "K_w = 1.0 × 10⁻¹⁴ at 298 K"
    ],
    asked: "K_b and pK_b of CH₃COO⁻",
    concept: "For any conjugate acid-base pair in aqueous solution: K_a × K_b = K_w and pK_a + pK_b = 14.00.",
    formula: "K_b = \\frac{K_w}{K_a}, \\quad pK_b = 14.00 - pK_a",
    calculation: [
      "Step 1: Calculate K_b of conjugate base CH₃COO⁻:",
      "K_b = (1.0 × 10⁻¹⁴) / (1.8 × 10⁻⁵) = 5.56 × 10⁻¹⁰ mol L⁻¹",
      "Step 2: Calculate pK_a of CH₃COOH:",
      "pK_a = −log₁₀(1.8 × 10⁻⁵) = 5 − 0.255 = 4.745 ≈ 4.75",
      "Step 3: Calculate pK_b:",
      "pK_b = 14.00 − 4.75 = 9.25"
    ],
    finalAnswer: "K_b = 5.56 × 10⁻¹⁰ mol L⁻¹,  pK_b = 9.25",
    neetShortcut: "pK_b = 14 − 4.74 = 9.26.",
    commonTrap: "Dividing K_a by K_w instead of K_w by K_a."
  },
  {
    id: "num-19",
    category: "Ka & Kb Ionization",
    title: "19. Successive Ionization of Polyprotic Acid (H₂S)",
    question: "For hydrogen sulfide (H₂S), K_a1 = 1.0 × 10⁻⁷ and K_a2 = 1.0 × 10⁻¹⁴. In a 0.10 M aqueous solution of H₂S, calculate [H⁺], [HS⁻], and [S²⁻].",
    given: [
      "Concentration of H₂S C = 0.10 M",
      "K_a1 = 1.0 × 10⁻⁷",
      "K_a2 = 1.0 × 10⁻¹⁴"
    ],
    asked: "[H⁺], [HS⁻], and [S²⁻]",
    concept: "For polyprotic weak acids where K_a1 >> K_a2: [H⁺] and [HS⁻] are governed almost entirely by the first ionization step. The concentration of divalent anion [S²⁻] is numerically equal to K_a2.",
    formula: "[H^+] \\approx [HS^-] \\approx \\sqrt{K_{a1} \\cdot C}, \\quad [S^{2-}] \\approx K_{a2}",
    calculation: [
      "Step 1: First ionization step: H₂S ⇌ H⁺ + HS⁻",
      "[H⁺] ≈ [HS⁻] = √(K_a1 × C) = √(1.0 × 10⁻⁷ × 0.10) = √(1.0 × 10⁻⁸) = 1.0 × 10⁻⁴ M",
      "Step 2: Second ionization step: HS⁻ ⇌ H⁺ + S²⁻",
      "K_a2 = ([H⁺][S²⁻]) / [HS⁻]",
      "Since [H⁺] ≈ [HS⁻] = 1.0 × 10⁻⁴ M, they cancel out exactly in the expression!",
      "[S²⁻] = K_a2 = 1.0 × 10⁻¹⁴ M"
    ],
    finalAnswer: "[H⁺] = 1.0 × 10⁻⁴ M,  [HS⁻] = 1.0 × 10⁻⁴ M,  [S²⁻] = 1.0 × 10⁻¹⁴ M",
    neetShortcut: "Universal rule for diprotic weak acid: [Divalent Anion] = K_a2. Here [S²⁻] = K_a2 = 10⁻¹⁴ M immediately!",
    commonTrap: "Trying to solve a complex quadratic equation for the second step, when [H⁺] is fixed by the dominant first step."
  },
  {
    id: "num-20",
    category: "Ka & Kb Ionization",
    title: "20. Common-Ion Suppression of Acetic Acid Ionization",
    question: "Calculate the degree of dissociation (α) and [H⁺] of 0.10 M CH₃COOH (K_a = 1.8 × 10⁻⁵) in a solution that is also 0.05 M in sodium acetate (CH₃COONa). Compare with pure 0.10 M CH₃COOH.",
    given: [
      "[CH₃COOH] = 0.10 M",
      "[CH₃COONa] = 0.05 M (fully dissociated strong electrolyte)",
      "K_a = 1.8 × 10⁻⁵"
    ],
    asked: "Degree of dissociation α' and [H⁺]' in presence of common ion",
    concept: "CH₃COONa supplies common ion [CH₃COO⁻] = 0.05 M. This pushes CH₃COOH equilibrium backwards, suppressing ionization.",
    formula: "K_a = \\frac{[H^+][\\text{CH}_3\\text{COO}^-]}{[\\text{CH}_3\\text{COOH}]} = \\frac{[H^+](0.05)}{0.10}",
    calculation: [
      "Step 1: Express equilibrium concentrations with common ion:",
      "[CH₃COO⁻] ≈ 0.05 M (from salt)",
      "[CH₃COOH] ≈ 0.10 M (unionized)",
      "Step 2: Solve for [H⁺]:",
      "[H⁺] = K_a × ([CH₃COOH] / [CH₃COO⁻]) = (1.8 × 10⁻⁵) × (0.10 / 0.05)",
      "[H⁺] = (1.8 × 10⁻⁵) × 2 = 3.6 × 10⁻⁵ M",
      "Step 3: Calculate new degree of dissociation α':",
      "α' = [H⁺] / C = (3.6 × 10⁻⁵) / 0.10 = 3.6 × 10⁻⁴ (0.036%)",
      "Step 4: Comparison:",
      "In pure water, α was 1.34% (1.34 × 10⁻²). The common ion suppressed ionization by ~37 times!"
    ],
    finalAnswer: "[H⁺] = 3.6 × 10⁻⁵ M,  α' = 3.6 × 10⁻⁴ (0.036%)",
    neetShortcut: "[H⁺] = K_a × [Acid]/[Salt] = 1.8 × 10⁻⁵ × (0.10/0.05) = 3.6 × 10⁻⁵ M.",
    commonTrap: "Assuming [H⁺] = √(K_a C) — that formula is valid ONLY in pure water without common ions!"
  },

  // ==========================================
  // CATEGORY 5: Buffers & Salt Hydrolysis (21-25)
  // ==========================================
  {
    id: "num-21",
    category: "Buffers & Salt Hydrolysis",
    title: "21. Henderson-Hasselbalch Equation for Acidic Buffer",
    question: "A buffer solution is prepared by mixing 50 mL of 0.20 M CH₃COOH with 50 mL of 0.10 M CH₃COONa. Calculate the pH of the resulting buffer solution. (pK_a of CH₃COOH = 4.74)",
    given: [
      "Volume and conc. of CH₃COOH: 50 mL of 0.20 M ⟹ Moles = 10 mmol",
      "Volume and conc. of CH₃COONa: 50 mL of 0.10 M ⟹ Moles = 5 mmol",
      "Total volume = 100 mL",
      "pK_a = 4.74, log 2 = 0.301"
    ],
    asked: "pH of the buffer solution",
    concept: "Henderson-Hasselbalch equation: pH = pK_a + log([Salt] / [Acid]). When equal volumes are mixed, ratio of concentrations equals ratio of millimoles.",
    formula: "pH = pK_a + \\log_{10}\\left(\\frac{[\\text{Salt}]}{[\\text{Acid}]}\\right) = pK_a + \\log_{10}\\left(\\frac{n_{salt}}{n_{acid}}\\right)",
    calculation: [
      "Step 1: Calculate millimoles of salt and acid:",
      "n_salt = 50 mL × 0.10 M = 5.0 mmol",
      "n_acid = 50 mL × 0.20 M = 10.0 mmol",
      "Step 2: Apply Henderson-Hasselbalch equation:",
      "pH = 4.74 + log₁₀(5.0 / 10.0) = 4.74 + log₁₀(0.50)",
      "log₁₀(0.50) = −log₁₀(2) = −0.301",
      "pH = 4.74 − 0.301 = 4.439 ≈ 4.44"
    ],
    finalAnswer: "pH = 4.44",
    neetShortcut: "pH = 4.74 + log(1/2) = 4.74 − 0.30 = 4.44.",
    commonTrap: "Inverting the ratio as [Acid]/[Salt] (giving 4.74 + 0.30 = 5.04). Remember: Salt is always in the numerator for acidic buffers."
  },
  {
    id: "num-22",
    category: "Buffers & Salt Hydrolysis",
    title: "22. Basic Buffer pH (NH₄OH + NH₄Cl)",
    question: "Calculate the pH of a basic buffer solution containing 0.15 M NH₄OH and 0.25 M NH₄Cl at 25°C. (pK_b of NH₄OH = 4.75, log 1.67 = 0.222)",
    given: [
      "[Base] (NH₄OH) = 0.15 M",
      "[Salt] (NH₄Cl) = 0.25 M",
      "pK_b = 4.75"
    ],
    asked: "pH of the buffer solution",
    concept: "Henderson-Hasselbalch for basic buffer gives pOH = pK_b + log([Salt]/[Base]). Then pH = 14 − pOH.",
    formula: "pOH = pK_b + \\log_{10}\\left(\\frac{[\\text{Salt}]}{[\\text{Base}]}\\right), \\quad pH = 14.00 - pOH",
    calculation: [
      "Step 1: Calculate pOH:",
      "pOH = 4.75 + log₁₀(0.25 / 0.15) = 4.75 + log₁₀(5 / 3)",
      "log₁₀(5/3) = log 1.67 = 0.222",
      "pOH = 4.75 + 0.222 = 4.972 ≈ 4.97",
      "Step 2: Calculate pH at 25°C:",
      "pH = 14.00 − 4.97 = 9.03"
    ],
    finalAnswer: "pH = 9.03",
    neetShortcut: "pOH = 4.75 + 0.22 = 4.97 ➔ pH = 14 − 4.97 = 9.03.",
    commonTrap: "Writing pH = pK_b + log([Salt]/[Base]) = 4.97 directly, forgetting that the basic buffer equation calculates pOH first!"
  },
  {
    id: "num-23",
    category: "Buffers & Salt Hydrolysis",
    title: "23. pH of Salt of Weak Acid + Strong Base (0.1 M CH₃COONa)",
    question: "Calculate the hydrolysis constant (K_h), degree of hydrolysis (h), and pH of a 0.10 M sodium acetate (CH₃COONa) solution at 25°C. (K_a = 1.8 × 10⁻⁵, K_w = 10⁻¹⁴, pK_a = 4.74)",
    given: [
      "Concentration of salt C = 0.10 M",
      "K_a = 1.8 × 10⁻⁵,  pK_a = 4.74",
      "K_w = 1.0 × 10⁻¹⁴"
    ],
    asked: "K_h, degree of hydrolysis h, and pH",
    concept: "CH₃COONa is a salt of WA + SB. Anion hydrolysis generates basic solution (pH > 7).",
    formula: "K_h = \\frac{K_w}{K_a}, \\quad h = \\sqrt{\\frac{K_h}{C}}, \\quad pH = 7 + \\frac{1}{2} pK_a + \\frac{1}{2} \\log_{10} C",
    calculation: [
      "Step 1: Calculate K_h:",
      "K_h = 10⁻¹⁴ / (1.8 × 10⁻⁵) = 5.56 × 10⁻¹⁰",
      "Step 2: Calculate degree of hydrolysis h:",
      "h = √(K_h / C) = √(5.56 × 10⁻¹⁰ / 0.10) = √(5.56 × 10⁻⁹) = 7.46 × 10⁻⁵ (0.0075%)",
      "Step 3: Calculate pH:",
      "pH = 7 + ½(4.74) + ½(log₁₀ 0.10)",
      "log₁₀(0.10) = −1.0",
      "pH = 7 + 2.37 + ½(−1.0) = 7 + 2.37 − 0.50 = 8.87"
    ],
    finalAnswer: "K_h = 5.56 × 10⁻¹⁰,  h = 7.46 × 10⁻⁵,  pH = 8.87",
    neetShortcut: "pH = 7 + ½ pK_a + ½ log C = 7 + 2.37 − 0.50 = 8.87.",
    commonTrap: "Using minus signs for WA+SB salt. Remember: Salt of strong base MUST produce a basic solution (pH > 7), so both 7 and ½ pK_a are positive."
  },
  {
    id: "num-24",
    category: "Buffers & Salt Hydrolysis",
    title: "24. pH of Salt of Strong Acid + Weak Base (0.1 M NH₄Cl)",
    question: "Calculate the pH of a 0.10 M ammonium chloride (NH₄Cl) solution at 25°C. (pK_b of NH₄OH = 4.74)",
    given: [
      "Concentration of salt C = 0.10 M",
      "pK_b = 4.74"
    ],
    asked: "pH of the solution",
    concept: "NH₄Cl is a salt of SA + WB. Cation hydrolysis produces acidic solution (pH < 7).",
    formula: "pH = 7 - \\frac{1}{2} pK_b - \\frac{1}{2} \\log_{10} C",
    calculation: [
      "Step 1: Identify formula for SA + WB salt:",
      "pH = 7 − ½ pK_b − ½ log₁₀ C",
      "Step 2: Substitute values:",
      "½ pK_b = ½(4.74) = 2.37",
      "½ log₁₀(0.10) = ½(−1.0) = −0.50",
      "Step 3: Calculate pH:",
      "pH = 7 − 2.37 − (−0.50) = 7 − 2.37 + 0.50 = 5.13"
    ],
    finalAnswer: "pH = 5.13",
    neetShortcut: "pH = 7 − 2.37 + 0.50 = 5.13 (< 7, clearly acidic as expected for SA + WB).",
    commonTrap: "Messing up the double negative: − ½ log(0.1) = − ½(−1) = +0.50."
  },
  {
    id: "num-25",
    category: "Buffers & Salt Hydrolysis",
    title: "25. pH of Salt of Weak Acid + Weak Base (CH₃COONH₄)",
    question: "Calculate the pH of a 0.05 M ammonium acetate (CH₃COONH₄) solution at 25°C. (pK_a of CH₃COOH = 4.76, pK_b of NH₄OH = 4.75). What happens to the pH if the concentration is changed to 0.20 M?",
    given: [
      "Concentration C = 0.05 M",
      "pK_a = 4.76,  pK_b = 4.75"
    ],
    asked: "pH of CH₃COONH₄ and effect of concentration change",
    concept: "For a salt of WA + WB, pH is completely INDEPENDENT of salt concentration C.",
    formula: "pH = 7 + \\frac{1}{2} pK_a - \\frac{1}{2} pK_b",
    calculation: [
      "Step 1: Apply WA + WB formula:",
      "pH = 7 + ½(pK_a − pK_b)",
      "Step 2: Substitute values:",
      "pK_a − pK_b = 4.76 − 4.75 = +0.01",
      "pH = 7 + ½(0.01) = 7 + 0.005 = 7.005 ≈ 7.01",
      "Step 3: Concentration change evaluation:",
      "Because the formula contains no concentration term (C), changing the concentration to 0.20 M has ZERO effect on pH. pH remains 7.01."
    ],
    finalAnswer: "pH = 7.01; pH remains 7.01 upon changing concentration to 0.20 M (Concentration Independent)",
    neetShortcut: "pH = 7 + ½(4.76 − 4.75) = 7.005 ≈ 7.01.",
    commonTrap: "Trying to plug concentration C into the formula; forgetting that for WA + WB, pH is independent of C."
  },

  // ==========================================
  // CATEGORY 6: Ksp & Precipitation (26-30)
  // ==========================================
  {
    id: "num-26",
    category: "Ksp & Precipitation",
    title: "26. Molar Solubility from Ksp for AB₂ Salt (PbCl₂)",
    question: "The solubility product (K_sp) of lead(II) chloride, PbCl₂, is 3.2 × 10⁻⁸ at 25°C. Calculate its molar solubility (s) in mol L⁻¹ and solubility in g L⁻¹. (Molar mass of PbCl₂ = 278 g mol⁻¹)",
    given: [
      "K_sp(PbCl₂) = 3.2 × 10⁻⁸",
      "Molar mass of PbCl₂ M = 278 g mol⁻¹",
      "Stoichiometry: AB₂ type salt"
    ],
    asked: "Molar solubility s (mol L⁻¹) and mass solubility S (g L⁻¹)",
    concept: "PbCl₂(s) ⇌ Pb²⁺(aq) + 2 Cl⁻(aq). If solubility is s, [Pb²⁺] = s and [Cl⁻] = 2s. K_sp = 4s³.",
    formula: "K_{sp} = (s)(2s)^2 = 4s^3 \\implies s = \\sqrt[3]{\\frac{K_{sp}}{4}}",
    calculation: [
      "Step 1: Set up K_sp equation in terms of s:",
      "4s³ = 3.2 × 10⁻⁸ = 32 × 10⁻⁹",
      "s³ = (32 × 10⁻⁹) / 4 = 8.0 × 10⁻⁹",
      "Step 2: Take cube root:",
      "s = ∛(8.0 × 10⁻⁹) = 2.0 × 10⁻³ mol L⁻¹",
      "Step 3: Convert molar solubility to g L⁻¹:",
      "Solubility in g L⁻¹ = s × M = (2.0 × 10⁻³ mol L⁻¹) × (278 g mol⁻¹)",
      "Solubility = 0.556 g L⁻¹"
    ],
    finalAnswer: "s = 2.0 × 10⁻³ mol L⁻¹ (or 0.556 g L⁻¹)",
    neetShortcut: "s = ∛(32 × 10⁻⁹ / 4) = ∛(8 × 10⁻⁹) = 2 × 10⁻³ M. S = 2 × 10⁻³ × 278 = 0.556 g/L.",
    commonTrap: "Using K_sp = s² (forgetting the coefficient 2 for Cl⁻ and the resulting factor 4 in 4s³)."
  },
  {
    id: "num-27",
    category: "Ksp & Precipitation",
    title: "27. Common-Ion Effect on Solubility of BaSO₄ in 0.01 M Na₂SO₄",
    question: "The solubility product of barium sulfate (BaSO₄) is 1.0 × 10⁻¹⁰ at 25°C. Calculate its molar solubility in: (a) Pure water, (b) 0.010 M Na₂SO₄ aqueous solution.",
    given: [
      "K_sp(BaSO₄) = 1.0 × 10⁻¹⁰",
      "[Na₂SO₄] = 0.010 M ⟹ [SO₄²⁻] = 0.010 M (common ion)"
    ],
    asked: "Solubility s in pure water and s' in 0.010 M Na₂SO₄",
    concept: "In pure water, K_sp = s². In presence of common ion of concentration C, K_sp = (s')(C + s') ≈ s' × C.",
    formula: "\\text{Pure water: } s = \\sqrt{K_{sp}}, \\quad \\text{In common ion: } s' = \\frac{K_{sp}}{[\\text{Common Ion}]}",
    calculation: [
      "Step 1: Solubility in pure water:",
      "s = √(1.0 × 10⁻¹⁰) = 1.0 × 10⁻⁵ mol L⁻¹",
      "Step 2: Solubility in 0.010 M Na₂SO₄:",
      "BaSO₄(s) ⇌ Ba²⁺ + SO₄²⁻",
      "[Ba²⁺] = s',  [SO₄²⁻] = s' + 0.010 ≈ 0.010 M (since s' << 0.010)",
      "K_sp = s' × (0.010) = 1.0 × 10⁻¹⁰",
      "s' = (1.0 × 10⁻¹⁰) / 0.010 = 1.0 × 10⁻⁸ mol L⁻¹",
      "Step 3: Comparison:",
      "Solubility decreased by 1,000 times due to common-ion effect!"
    ],
    finalAnswer: "(a) s = 1.0 × 10⁻⁵ M in water;  (b) s' = 1.0 × 10⁻⁸ M in 0.01 M Na₂SO₄",
    neetShortcut: "s' = K_sp / C = 10⁻¹⁰ / 10⁻² = 10⁻⁸ M directly.",
    commonTrap: "Trying to solve a full quadratic equation when s' is 10⁻⁸ (negligible compared to 0.01)."
  },
  {
    id: "num-28",
    category: "Ksp & Precipitation",
    title: "28. Precipitation Criterion (Qsp vs Ksp) for Ag₂CrO₄",
    question: "Equal volumes of 2.0 × 10⁻⁴ M AgNO₃ and 2.0 × 10⁻⁴ M K₂CrO₄ are mixed together. Will a precipitate of silver chromate (Ag₂CrO₄) form? (K_sp of Ag₂CrO₄ = 1.1 × 10⁻¹²)",
    given: [
      "Initial [AgNO₃] = 2.0 × 10⁻⁴ M,  Initial [K₂CrO₄] = 2.0 × 10⁻⁴ M",
      "Mixing equal volumes (V₁ = V₂) ⟹ Total volume is doubled (dilution factor = 2)",
      "K_sp(Ag₂CrO₄) = 1.1 × 10⁻¹²"
    ],
    asked: "Whether precipitation occurs",
    concept: "Calculate diluted ion concentrations upon mixing, determine Ionic Product Q_sp = [Ag⁺]²[CrO₄²⁻], and compare with K_sp.",
    formula: "Q_{sp} = [Ag^+]^2 [CrO_4^{2-}]",
    calculation: [
      "Step 1: Calculate diluted concentrations after mixing equal volumes:",
      "[Ag⁺] = (2.0 × 10⁻⁴) / 2 = 1.0 × 10⁻⁴ M",
      "[CrO₄²⁻] = (2.0 × 10⁻⁴) / 2 = 1.0 × 10⁻⁴ M",
      "Step 2: Calculate Ionic Product Q_sp for Ag₂CrO₄ ⇌ 2 Ag⁺ + CrO₄²⁻:",
      "Q_sp = [Ag⁺]² [CrO₄²⁻] = (1.0 × 10⁻⁴)² × (1.0 × 10⁻⁴)",
      "Q_sp = (1.0 × 10⁻⁸) × (1.0 × 10⁻⁴) = 1.0 × 10⁻¹²",
      "Step 3: Compare Q_sp with K_sp:",
      "Q_sp = 1.0 × 10⁻¹²  <  K_sp = 1.1 × 10⁻¹²",
      "Step 4: Conclusion:",
      "Since Q_sp < K_sp, the solution is unsaturated. NO precipitation will occur!"
    ],
    finalAnswer: "Q_sp = 1.0 × 10⁻¹² < K_sp (1.1 × 10⁻¹²); NO PRECIPITATION occurs",
    neetShortcut: "After mixing equal volumes, ions halve to 10⁻⁴ M. Q_sp = (10⁻⁴)²(10⁻⁴) = 10⁻¹² < 1.1 × 10⁻¹² ➔ No ppt.",
    commonTrap: "Forgetting to halve the concentrations when equal volumes are mixed (using 2×10⁻⁴ gives Q_sp = 8×10⁻¹² > K_sp, which yields the wrong answer!)."
  },
  {
    id: "num-29",
    category: "Ksp & Precipitation",
    title: "29. Minimum pH Required to Precipitate Mg(OH)₂",
    question: "At what minimum pH will magnesium hydroxide, Mg(OH)₂, begin to precipitate from a 0.010 M solution of Mg(NO₃)₂? (K_sp of Mg(OH)₂ = 1.0 × 10⁻¹¹ at 25°C)",
    given: [
      "[Mg²⁺] = 0.010 M = 1.0 × 10⁻² M",
      "K_sp(Mg(OH)₂) = 1.0 × 10⁻¹¹"
    ],
    asked: "Minimum pH for precipitation to start",
    concept: "Precipitation starts when Q_sp = K_sp. For Mg(OH)₂ ⇌ Mg²⁺ + 2 OH⁻, K_sp = [Mg²⁺][OH⁻]².",
    formula: "[OH^-]_{min} = \\sqrt{\\frac{K_{sp}}{[Mg^{2+}]}}, \\quad pOH = -\\log[OH^-], \\quad pH = 14 - pOH",
    calculation: [
      "Step 1: Calculate minimum [OH⁻] needed for saturation:",
      "[OH⁻]² = K_sp / [Mg²⁺] = (1.0 × 10⁻¹¹) / (1.0 × 10⁻²) = 1.0 × 10⁻⁹",
      "[OH⁻] = √(1.0 × 10⁻⁹) = √(10 × 10⁻¹⁰) = 3.16 × 10⁻⁵ M",
      "Step 2: Calculate pOH:",
      "pOH = −log₁₀(3.16 × 10⁻⁵) = 5 − log₁₀(3.16) = 5 − 0.50 = 4.50",
      "Step 3: Calculate pH at 25°C:",
      "pH = 14.00 − pOH = 14.00 − 4.50 = 9.50"
    ],
    finalAnswer: "Minimum pH = 9.50",
    neetShortcut: "[OH⁻]² = 10⁻⁹ ➔ [OH⁻] = 3.16 × 10⁻⁵ M ➔ pOH = 4.5 ➔ pH = 9.5.",
    commonTrap: "Confusing [OH⁻] with [OH⁻]² or calculating pH directly as −log[OH⁻]."
  },
  {
    id: "num-30",
    category: "Ksp & Precipitation",
    title: "30. Molar Solubility of A₂B₃ Salt (Bi₂S₃)",
    question: "The solubility product of bismuth sulfide (Bi₂S₃) is 1.08 × 10⁻⁷³ at 25°C. Calculate its molar solubility (s) in pure water.",
    given: [
      "Salt: Bi₂S₃ (A₂B₃ type: 2 Bi³⁺ + 3 S²⁻)",
      "K_sp = 1.08 × 10⁻⁷³"
    ],
    asked: "Molar solubility s in mol L⁻¹",
    concept: "Bi₂S₃(s) ⇌ 2 Bi³⁺ + 3 S²⁻. [Bi³⁺] = 2s, [S²⁻] = 3s. K_sp = (2s)²(3s)³ = 4s² × 27s³ = 108 s⁵.",
    formula: "K_{sp} = 108 s^5 \\implies s = \\sqrt[5]{\\frac{K_{sp}}{108}}",
    calculation: [
      "Step 1: Set up K_sp formula:",
      "108 s⁵ = 1.08 × 10⁻⁷³ = 108 × 10⁻⁷⁵",
      "Step 2: Divide by 108:",
      "s⁵ = 1.0 × 10⁻⁷⁵",
      "Step 3: Take 5th root:",
      "s = (1.0 × 10⁻⁷⁵)^(1/5) = 1.0 × 10⁻¹⁵ mol L⁻¹"
    ],
    finalAnswer: "s = 1.0 × 10⁻¹⁵ mol L⁻¹",
    neetShortcut: "s = (108 × 10⁻⁷⁵ / 108)^(1/5) = (10⁻⁷⁵)^(1/5) = 10⁻¹⁵ M.",
    commonTrap: "Using 6s⁵ or 27s⁵ instead of 108s⁵ ((2)² × (3)³ = 4 × 27 = 108)."
  }
];
