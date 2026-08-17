export const CHEMICAL_KINETICS_TRAPS_AND_FORMULAS = {
  neetTraps: [
    {
      trap: "Equating Rate of Reaction with Rate of Disappearance without Stoichiometric Division",
      explanation: "In 2N₂O₅ → 4NO₂ + O₂, rate of disappearance of N₂O₅ is -d[N₂O₅]/dt, but the Overall Rate of Reaction is -(1/2) d[N₂O₅]/dt = +(1/4) d[NO₂]/dt = +d[O₂]/dt. NEET questions frequently ask for rate of formation of NO₂ when given rate of disappearance of N₂O₅ (Formation rate = 2 × Disappearance rate!).",
      prevention: "Always set up: Rate = (1/coefficient) × (d[species]/dt) before solving."
    },
    {
      trap: "Assuming Order of Reaction Equals Stoichiometric Coefficients",
      explanation: "Order can ONLY be determined experimentally for complex reactions. For 2NO + 2H₂ → N₂ + 2H₂O, the experimental rate law is Rate = k [NO]² [H₂]¹ (order 3, not 4). Only for an elementary (single-step) reaction does Order = Stoichiometric coefficients.",
      prevention: "Never write rate law from balanced equation unless the problem explicitly states the reaction is elementary."
    },
    {
      trap: "Confusing Zero-Order and First-Order Half-Life Relationships",
      explanation: "Zero-order half-life is DIRECTLY proportional to initial concentration (t₁/₂ = [A]₀ / 2k). If [A]₀ doubles, t₁/₂ doubles! In first-order, half-life is completely INDEPENDENT of [A]₀ (t₁/₂ = 0.693 / k). If [A]₀ doubles, t₁/₂ remains unchanged.",
      prevention: "Check the reaction order before using half-life formulas!"
    },
    {
      trap: "Forgetting the 2.303 Factor in Arrhenius Slope & Rate Law",
      explanation: "Slope of ln k vs 1/T is -Ea / R, but Slope of log₁₀ k vs 1/T is -Ea / (2.303 R). Also R must be in J K⁻¹ mol⁻¹ (8.314 J K⁻¹ mol⁻¹) when Ea is in Joules, or 8.314 × 10⁻³ kJ K⁻¹ mol⁻¹ when Ea is in kJ.",
      prevention: "Check whether the natural log (ln) or common log (log₁₀) is given, and match energy units with R."
    },
    {
      trap: "Believing Catalysts Change Equilibrium Constant (Keq) or Enthalpy (ΔH)",
      explanation: "A catalyst provides an alternate reaction path with lower activation energy (Ea' < Ea). It lowers forward and backward Ea by the exact same amount. Therefore, it does NOT alter ΔH (Ea_fwd - Ea_bwd = constant), ΔG°, or Keq.",
      prevention: "Remember: Catalysts only change kinetics (k, Ea, time to reach equilibrium), NEVER thermodynamics (ΔH, ΔG, ΔS, Keq)."
    }
  ],

  formulaSheet: [
    {
      title: "Rate of Reaction Normalized by Stoichiometry",
      formula: "\\text{Rate} = -\\frac{1}{a}\\frac{d[A]}{dt} = -\\frac{1}{b}\\frac{d[B]}{dt} = +\\frac{1}{c}\\frac{d[C]}{dt} = +\\frac{1}{d}\\frac{d[D]}{dt}",
      variables: "a, b, c, d = stoichiometric coefficients of balanced reaction",
      notes: "Rate of reaction is always a positive quantity."
    },
    {
      title: "Dimensional Units of Rate Constant k",
      formula: "\\text{Unit of } k = (\\text{mol L}^{-1})^{1-n} \\text{ s}^{-1} = \\text{M}^{1-n} \\text{ s}^{-1}",
      variables: "n = overall reaction order (0, 1, 2, 3, etc.)",
      notes: "n=0: mol L⁻¹ s⁻¹; n=1: s⁻¹; n=2: L mol⁻¹ s⁻¹; n=3: L² mol⁻² s⁻¹."
    },
    {
      title: "Zero-Order Integrated Rate Equations",
      formula: "[A]_t = [A]_0 - k t \\quad | \\quad t_{1/2} = \\frac{[A]_0}{2k} \\quad | \\quad t_{100\\%} = \\frac{[A]_0}{k} = 2 t_{1/2}",
      variables: "[A]₀ = initial concentration, [A]_t = concentration at time t, k = rate constant",
      notes: "Linear decay. Slope of [A] vs t is -k. Half-life is directly proportional to [A]₀."
    },
    {
      title: "First-Order Integrated Rate Equations",
      formula: "k = \\frac{2.303}{t} \\log_{10}\\left(\\frac{[A]_0}{[A]_t}\\right) \\quad | \\quad [A]_t = [A]_0 e^{-kt} \\quad | \\quad t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}",
      variables: "[A]₀ = initial concentration, [A]_t = concentration at time t, t = elapsed time",
      notes: "Exponential decay. Half-life is independent of [A]₀. Theoretical completion time is infinite."
    },
    {
      title: "First-Order Half-Life Shortcut Multipliers",
      formula: "[A]_t = [A]_0 \\left(\\frac{1}{2}\\right)^n \\quad (n = t / t_{1/2}) \\quad | \\quad t_{75\\%} = 2 t_{1/2} \\quad | \\quad t_{87.5\\%} = 3 t_{1/2} \\quad | \\quad t_{99.9\\%} = 10 t_{1/2}",
      variables: "n = number of elapsed half-lives",
      notes: "t_90% ≈ 3.32 t₁/₂; t_99% ≈ 6.64 t₁/₂ = 2 × t_90%."
    },
    {
      title: "First-Order Gas Phase Reaction Pressure Equation",
      formula: "k = \\frac{2.303}{t} \\log_{10}\\left(\\frac{P_i}{2P_i - P_t}\\right) \\quad \\text{for } A(g) \\rightarrow B(g) + C(g)",
      variables: "P_i = initial pressure of A, P_t = total system pressure at time t",
      notes: "Derivation: P_A at time t is P_i - x, where total pressure P_t = P_i + x ⇒ x = P_t - P_i ⇒ P_A = 2P_i - P_t."
    },
    {
      title: "Arrhenius Equation (Differential & Integrated Forms)",
      formula: "k = A e^{-E_a / RT} \\quad | \\quad \\log_{10}\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R}\\left[\\frac{T_2 - T_1}{T_1 T_2}\\right]",
      variables: "A = pre-exponential factor, Ea = activation energy (J mol⁻¹), R = 8.314 J K⁻¹ mol⁻¹, T = absolute temp (K)",
      notes: "Slope of log₁₀ k vs 1/T is -Ea / (2.303 R). Slope of ln k vs 1/T is -Ea / R."
    },
    {
      title: "Temperature Coefficient (μ)",
      formula: "\\mu = \\frac{k_{T+10}}{k_T} \\approx 2 \\text{ to } 3 \\quad | \\quad \\frac{\\text{Rate}_2}{\\text{Rate}_1} = \\mu^{(\\Delta T / 10)}",
      variables: "ΔT = temperature increase in °C or K",
      notes: "If μ = 2 and ΔT = 90 °C, Rate increases by 2⁹ = 512 times."
    }
  ],

  oneMinuteRevision: [
    "⚡ Rate of reaction: Rate = -(1/a) d[A]/dt = +(1/c) d[C]/dt (always positive).",
    "⚡ Order is experimental (0, fraction, integer, negative); Molecularity is theoretical integer (1, 2, 3) for elementary steps.",
    "⚡ Zero order: Rate = k (mol L⁻¹ s⁻¹); [A] = [A]₀ - kt; t₁/₂ = [A]₀ / (2k) (directly ∝ [A]₀).",
    "⚡ First order: Rate = k[A] (s⁻¹); k = (2.303/t) log([A]₀/[A]); t₁/₂ = 0.693/k (INDEPENDENT of [A]₀).",
    "⚡ Decay shortcuts: [A]_t = [A]₀ (1/2)^n; t_75% = 2 t₁/₂; t_90% = 3.32 t₁/₂; t_99% = 2 t_90% = 6.64 t₁/₂; t_99.9% = 10 t₁/₂.",
    "⚡ Gas first-order A(g) → B(g) + C(g): k = (2.303/t) log[P_i / (2P_i - P_t)].",
    "⚡ Pseudo-first-order: Acid hydrolysis of ester; Inversion of cane sugar (water in excess).",
    "⚡ Arrhenius: k = A e^(-Ea/RT); log(k₂/k₁) = (Ea/2.303R) [(T₂ - T₁)/(T₁T₂)].",
    "⚡ Arrhenius Plot: Slope of log₁₀ k vs 1/T = -Ea / (2.303 R); Slope of ln k vs 1/T = -Ea / R.",
    "⚡ Catalyst: Lowers Ea for both forward & reverse reactions by same amount; NO change in ΔH, ΔG, or Keq."
  ]
};
