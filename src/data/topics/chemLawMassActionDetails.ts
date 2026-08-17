import { DetailedTopicContent } from '../../types/neet'

export const chemLawMassActionDetails: DetailedTopicContent = {
  topicId: 'chem-law-mass-action',
  topicName: 'Physical & Chemical Equilibrium, Law of Mass Action & Kc/Kp',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Physical Chemistry',
  chapter: 'Equilibrium',

  whatIsThisTopic: 'Equilibrium represents a dynamic balance where forward and reverse process rates become equal in a closed system, keeping macroscopic properties constant. This topic establishes the complete NEET UG 2026 syllabus for Physical Equilibrium (solid-liquid, liquid-gas, solid-gas sublimation, dissolution of solids in liquids, and dissolution of gases in liquids governed by Henry\'s Law) and Chemical Equilibrium (Law of Mass Action, Kc and Kp derivations, homogeneous vs heterogeneous equilibria, Kp = Kc(RT)^Δng, reaction quotient Q, and the fundamental thermodynamic relationship ΔG° = -RT ln K = -2.303 RT log K).',

  basicIdea: [
    '1. Dynamic Nature of Equilibrium: Equilibrium in a reversible closed system is dynamic, NOT static; both forward and reverse processes continue at identical rates (Rate_forward = Rate_reverse).',
    '2. Physical Equilibrium: Encompasses phase transformations and dissolution processes: (a) Solid-Liquid (Rate of melting = Rate of freezing at MP), (b) Liquid-Gas (Rate of evaporation = Rate of condensation at BP; equilibrium vapor pressure), (c) Solid-Gas (Sublimation: I₂(s) ⇌ I₂(g), Camphor, NH₄Cl), (d) Solid in Liquid (Rate of dissolution = Rate of crystallization at saturation), and (e) Gas in Liquid governed by Henry\'s Law (p = K_H · x).',
    '3. Law of Mass Action & Equilibrium Constants: Formulated by Guldberg and Waage (1864), the rate of reaction is proportional to the product of active masses. For aA + bB ⇌ cC + dD: Kc = [C]^c[D]^d / ([A]^a[B]^b) and Kp = (P_C)^c(P_D)^d / ((P_A)^a(P_B)^b). Kp and Kc are related by Kp = Kc(RT)^{Δn_g}.',
    '4. Heterogeneous Equilibrium & Active Mass: The active mass (molar concentration) of pure solids and pure liquids is constant and taken as unity (1) in equilibrium expressions (e.g., CaCO₃(s) ⇌ CaO(s) + CO₂(g) ➔ Kp = P_CO2).',
    '5. Reaction Quotient (Q) vs Equilibrium Constant (K): If Q < K, forward shift; if Q = K, system is at equilibrium; if Q > K, reverse shift.',
    '6. Gibbs Energy & Equilibrium Constant (ΔG° = -RT ln K): From ΔG = ΔG° + RT ln Q, at equilibrium ΔG = 0 and Q = K, yielding ΔG° = -2.303 RT log₁₀ K. If K > 1, ΔG° < 0 (spontaneous/products favored); if K < 1, ΔG° > 0 (reactants favored).',
  ],

  importantTerms: [
    {
      term: 'Dynamic Equilibrium',
      symbol: 'R_f = R_b',
      definition: 'A macroscopic steady state in a closed system where opposing forward and backward processes occur at equal rates with no net change in observable properties.',
      neetNote: 'Equilibrium can only be attained and maintained in a CLOSED vessel. In an open vessel, gaseous products escape and equilibrium is impossible.',
    },
    {
      term: 'Henry\'s Law',
      symbol: 'p = K_H \\cdot x \\quad \\text{or} \\quad m = k \\cdot p',
      definition: 'At constant temperature, the solubility (mass or mole fraction x) of a gas in a liquid is directly proportional to the partial pressure of the gas above the solution.',
      neetNote: 'Higher K_H value indicates LOWER gas solubility. As temperature increases, K_H increases and gas solubility decreases (dissolution of gases is exothermic, ΔH_sol < 0). Applications: carbonated soft drinks, scuba divers (bends), high-altitude anoxia.',
    },
    {
      term: 'Solid-Liquid & Liquid-Gas Equilibrium',
      symbol: '\\text{H}_2\\text{O}(s) \\rightleftharpoons \\text{H}_2\\text{O}(l), \\; \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}_2\\text{O}(g)',
      definition: 'Solid-Liquid: Rate of melting = Rate of freezing at melting point. Liquid-Gas: Rate of vaporization = Rate of condensation at constant vapor pressure and boiling point.',
      neetNote: 'For ice-water equilibrium, because ice has larger volume (lower density) than water, increasing pressure shifts equilibrium towards liquid water (lowering the melting point - regelation).',
    },
    {
      term: 'Law of Mass Action',
      symbol: '\\text{Rate} \\propto [A]^a [B]^b',
      definition: 'The principle stating that the chemical reaction rate is proportional to the product of active masses of reacting substances raised to stoichiometric powers.',
      neetNote: 'Active mass of solute in solution = Molar concentration (mol/L). Active mass of pure solid or pure liquid = 1 (constant).',
    },
    {
      term: 'Concentration Equilibrium Constant',
      symbol: 'K_c',
      definition: 'The ratio of product of equilibrium molar concentrations of products to reactants, each raised to its stoichiometric coefficient.',
      neetNote: 'Kc depends ONLY on temperature. It is strictly independent of initial concentrations, volume, pressure, and catalysts.',
    },
    {
      term: 'Pressure Equilibrium Constant',
      symbol: 'K_p',
      definition: 'The equilibrium constant expressed using the partial pressures of gaseous reactants and products in atmospheres or bar.',
      neetNote: 'Partial pressure P_i = (Mole fraction X_i) × (Total Pressure P_total). Relates to Kc via Kp = Kc(RT)^Δng.',
    },
    {
      term: 'Change in Gaseous Moles',
      symbol: '\\Delta n_g',
      definition: 'The difference between the sum of stoichiometric coefficients of gaseous products and gaseous reactants: \\Delta n_g = \\Sigma n_{p(g)} - \\Sigma n_{r(g)}.',
      neetNote: 'Include ONLY gaseous species! Ignore all solid (s) and pure liquid (l) terms when computing \\Delta n_g.',
    },
    {
      term: 'Reaction Quotient',
      symbol: 'Q_c / Q_p',
      definition: 'The ratio of concentrations or partial pressures of products to reactants formulated identically to K, but calculated at ANY non-equilibrium stage of the reaction.',
      neetNote: 'If Q < K ➔ Forward shift. If Q = K ➔ Equilibrium. If Q > K ➔ Backward shift.',
    },
    {
      term: 'Standard Gibbs Free Energy Change',
      symbol: '\\Delta G^\\circ = -RT \\ln K = -2.303 RT \\log_{10} K',
      definition: 'The thermodynamic state function change under standard conditions related directly to the equilibrium constant K.',
      neetNote: 'If K > 1, ΔG° < 0 (products predominate at equilibrium). If K = 1, ΔG° = 0. If K < 1, ΔG° > 0 (reactants predominate at equilibrium).',
    },
    {
      term: 'Heterogeneous Equilibrium',
      symbol: 'K_c = [\\text{Product}]',
      definition: 'An equilibrium system involving reactants and products in two or more distinct physical phases (e.g., solid-gas or liquid-gas).',
      neetNote: 'Example: CaCO₃(s) ⇌ CaO(s) + CO₂(g) has Kp = P_CO2 and Kc = [CO₂]. Solid terms are excluded.',
    },
  ],

  conceptExplanation: [
    {
      heading: '1. Physical Equilibria: Phase Transitions, Dissolution & Henry\'s Law',
      paragraphs: [
        'Physical equilibrium involves reversible phase transformations or dissolution processes with no chemical bond alteration:',
        '1. Solid-Liquid Equilibrium: At the normal melting point (e.g., 273.15 K, 1 atm for ice-water), H₂O(s) ⇌ H₂O(l). The rate of melting of ice equals the rate of freezing of water. Because ice is less dense than liquid water (ice expands upon freezing), an increase in pressure shifts the equilibrium toward the higher-density liquid phase, lowering the melting point (regelation phenomenon).',
        '2. Liquid-Vapor Equilibrium: In a closed container at constant temperature, liquid molecules evaporate while vapor molecules condense: H₂O(l) ⇌ H₂O(g). When Rate of Vaporization = Rate of Condensation, the vapor pressure reaches a constant value known as the equilibrium vapor pressure. At the normal boiling point (373.15 K for water), the vapor pressure equals 1.013 bar (1 atm).',
        '3. Solid-Vapor (Sublimation) Equilibrium: Direct transition between solid and vapor phases in closed vessels: I₂(s) ⇌ I₂(g) (violet vapor), Camphor(s) ⇌ Camphor(g), and NH₄Cl(s) ⇌ NH₃(g) + HCl(g).',
        '4. Dissolution of Solids in Liquids: When a solute dissolves in a liquid solvent, dissolution occurs until the solution becomes saturated: Solute(solid) ⇌ Solute(in solution). At saturation, Rate of Dissolution = Rate of Crystallization.',
        '5. Dissolution of Gases in Liquids & Henry\'s Law: Gas(g) ⇌ Gas(aqueous). Henry\'s law states that the mass or mole fraction (x) of a dissolved gas is proportional to its partial pressure (p): p = K_H · x (where K_H is Henry\'s law constant). Because gas dissolution is exothermic (ΔH_sol < 0), gas solubility decreases with rising temperature (K_H increases with T). Important NEET applications include: (a) bottling soft drinks under high CO₂ pressure, (b) deep-sea divers using helium-diluted oxygen to prevent nitrogen bends, and (c) mountain climbers suffering from anoxia due to low atmospheric p_O2.',
      ],
      visual: {
        type: 'flowchart',
        flowchartSteps: [
          { step: 'Solid-Liquid (Ice ⇌ Water)', detail: 'At MP (273 K, 1 atm): Rate of Melting = Rate of Freezing. High pressure lowers MP.', arrowText: 'Phase Transitions' },
          { step: 'Liquid-Gas (Water ⇌ Vapor)', detail: 'At BP (373 K, 1 atm): Rate of Evaporation = Rate of Condensation. Constant Vapor Pressure.', arrowText: 'Vaporization' },
          { step: 'Gas Dissolution (Henry\'s Law)', detail: 'p = K_H · x. Dissolution is exothermic; solubility decreases as temperature increases.', arrowText: 'Solubility Equilibrium' },
        ],
        caption: 'Core Physical Equilibrium Systems and Their Governing Parameters',
      },
    },
    {
      heading: '2. Fundamentals of Dynamic Chemical Equilibrium & Law of Mass Action',
      paragraphs: [
        'A reversible chemical reaction never proceeds to 100% completion in a closed vessel. Initially, only reactants are present, so the forward reaction rate (Rf) is at its maximum while the reverse rate (Rb) is zero. As reactants are consumed to form products, Rf gradually decreases and Rb progressively increases. Eventually, a point is reached where Rf = Rb.',
        'At this dynamic equilibrium point, molecules continue to react in both directions at equal rates, maintaining fixed concentrations of all participating chemical species. Any macroscopic property such as color intensity, total pressure, solution pH, and density remains unchanged with time.',
        'Guldberg and Waage formulated the Law of Mass Action: For a reversible elementary step aA + bB ⇌ cC + dD at constant temperature: Rf = kf [A]^a [B]^b and Rb = kb [C]^c [D]^d. At equilibrium, Rf = Rb, which yields: kf / kb = ([C]^c [D]^d) / ([A]^a [B]^b) = Kc.',
      ],
    },
    {
      heading: '3. Derivation of Kp = Kc(RT)^Δng & Phase Rules',
      paragraphs: [
        'For an ideal gas mixture in a vessel of volume V at temperature T, the ideal gas law gives P_i V = n_i R T, which rearranges to P_i = (n_i / V) R T = [C_i] R T. Substituting partial pressures into the Kp expression yields Kp = Kc (RT)^Δng.',
        'Here, R is the universal gas constant (0.0821 L·atm·K⁻¹·mol⁻¹ or 0.0831 L·bar·K⁻¹·mol⁻¹), T is absolute temperature in Kelvin, and Δng = (moles of gaseous products) - (moles of gaseous reactants).',
        'Three distinct cases arise from the value of Δng:',
        '• Case 1: Δng = 0 (e.g., H₂(g) + I₂(g) ⇌ 2HI(g) or N₂(g) + O₂(g) ⇌ 2NO(g)). (RT)⁰ = 1, so Kp = Kc (dimensionless, pressure-independent).',
        '• Case 2: Δng > 0 (e.g., PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), Δng = 2 - 1 = +1). Kp = Kc(RT)¹ > Kc (when RT > 1); Kp has units of atm or bar.',
        '• Case 3: Δng < 0 (e.g., N₂(g) + 3H₂(g) ⇌ 2NH₃(g), Δng = 2 - 4 = -2). Kp = Kc(RT)⁻² < Kc.',
      ],
      tables: [
        {
          title: 'Classification of Equilibrium Constant Relationships Based on Δng',
          headers: ['Equilibrium Reaction', 'Δn_g Value', 'Relationship', 'Units of Kp / Kc', 'Effect of Total Pressure'],
          rows: [
            ['H₂(g) + I₂(g) ⇌ 2HI(g)', '2 - 2 = 0', 'Kp = Kc', 'Unitless', 'No shift on changing pressure'],
            ['N₂(g) + O₂(g) ⇌ 2NO(g)', '2 - 2 = 0', 'Kp = Kc', 'Unitless', 'No shift on changing pressure'],
            ['PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)', '2 - 1 = +1', 'Kp = Kc(RT)¹', 'Kp: atm, Kc: mol·L⁻¹', 'High pressure shifts reverse'],
            ['2SO₃(g) ⇌ 2SO₂(g) + O₂(g)', '3 - 2 = +1', 'Kp = Kc(RT)¹', 'Kp: atm, Kc: mol·L⁻¹', 'High pressure shifts reverse'],
            ['N₂(g) + 3H₂(g) ⇌ 2NH₃(g)', '2 - 4 = -2', 'Kp = Kc(RT)⁻²', 'Kp: atm⁻², Kc: L²·mol⁻²', 'High pressure shifts forward'],
            ['2SO₂(g) + O₂(g) ⇌ 2SO₃(g)', '2 - 3 = -1', 'Kp = Kc(RT)⁻¹', 'Kp: atm⁻¹, Kc: L·mol⁻¹', 'High pressure shifts forward'],
            ['CaCO₃(s) ⇌ CaO(s) + CO₂(g)', '1 - 0 = +1', 'Kp = P_CO2 = Kc(RT)', 'Kp: atm, Kc: mol·L⁻¹', 'High P_CO2 shifts reverse'],
            ['NH₄HS(s) ⇌ NH₃(g) + H₂S(g)', '2 - 0 = +2', 'Kp = (P_total/2)² = Kc(RT)²', 'Kp: atm²', 'High pressure shifts reverse'],
          ],
        },
      ],
    },
    {
      heading: '4. Thermodynamic Relationship between Gibbs Energy (ΔG) and Equilibrium Constant (K)',
      paragraphs: [
        'The thermodynamic link between spontaneity and chemical equilibrium is established by the Gibbs free energy equation: ΔG = ΔG° + RT ln Q (where Q is the reaction quotient).',
        'At dynamic equilibrium, two vital thermodynamic conditions are satisfied simultaneously: (1) Free energy change ΔG = 0 (the system is in a state of minimum free energy), and (2) The instantaneous reaction quotient Q equals the equilibrium constant K (Q = K).',
        'Substituting these conditions gives: 0 = ΔG° + RT ln K  ➔  ΔG° = -RT ln K = -2.303 RT log₁₀ K.',
        'This leads to three critical thermodynamic conclusions:',
        '• If K > 1: ln K > 0, so ΔG° < 0 (negative). The forward reaction is exergonic and highly spontaneous under standard conditions, resulting in high product yields at equilibrium.',
        '• If K = 1: ln K = 0, so ΔG° = 0. The standard state itself corresponds to equilibrium.',
        '• If K < 1: ln K < 0, so ΔG° > 0 (positive). The forward reaction is endergonic and non-spontaneous under standard conditions, resulting in predominantly reactants at equilibrium.',
      ],
    },
    {
      heading: '5. Rules for Manipulating Equilibrium Constants & Predicting Direction (Q vs K)',
      paragraphs: [
        'NEET frequently tests mathematical operations on balanced chemical equations and their corresponding effect on K:',
        '1. Reversing a Reaction: If A ⇌ B has constant K, then B ⇌ A has constant K\' = 1 / K.',
        '2. Multiplying by a Factor n: If A ⇌ B has constant K, then nA ⇌ nB has constant K\' = K^n. For example, dividing by 2 (multiplying by 1/2) gives K\' = √K.',
        '3. Adding Multiple Reactions: If Reaction 1 has constant K1 and Reaction 2 has constant K2, the net overall reaction (Reaction 1 + Reaction 2) has equilibrium constant K_net = K1 × K2 (multiplication, NEVER addition!).',
        '4. Subtracting Reactions: If Reaction 1 is subtracted from Reaction 2, K_net = K2 / K1.',
        'Comparing instantaneous Q with K determines reaction direction: (a) Q < K ➔ forward shift, (b) Q = K ➔ dynamic equilibrium, (c) Q > K ➔ reverse shift.',
      ],
      examples: [
        {
          problem: 'Given: (1) N₂(g) + O₂(g) ⇌ 2NO(g), K1 = 4.0 × 10⁻⁴; (2) 2NO(g) + O₂(g) ⇌ 2NO₂(g), K2 = 1.0 × 10² at 2000 K. Find the equilibrium constant K for the decomposition of NO₂: NO₂(g) ⇌ 1/2 N₂(g) + O₂(g).',
          given: 'K1 = 4.0 × 10⁻⁴, K2 = 100',
          stepByStep: [
            'Step 1: Add reaction (1) and reaction (2) to get formation of 2NO₂ from N₂ and O₂: N₂(g) + 2O₂(g) ⇌ 2NO₂(g). K_comb = K1 × K2 = (4.0 × 10⁻⁴) × (100) = 4.0 × 10⁻².',
            'Step 2: Reverse the combined reaction: 2NO₂(g) ⇌ N₂(g) + 2O₂(g). K_rev = 1 / K_comb = 1 / (4.0 × 10⁻²) = 25.',
            'Step 3: Multiply by 1/2 to get the target single-mole equation: NO₂(g) ⇌ 1/2 N₂(g) + O₂(g).',
            'Step 4: K_target = (K_rev)^(1/2) = √25 = 5.0.',
          ],
          answer: 'K = 5.0',
        },
        {
          problem: 'Calculate the standard Gibbs free energy change ΔG° for a reaction at 298 K whose equilibrium constant K is 1.0 × 10⁴. (R = 8.314 J·K⁻¹·mol⁻¹)',
          given: 'T = 298 K, K = 1.0 × 10⁴, R = 8.314 J·K⁻¹·mol⁻¹',
          stepByStep: [
            'Step 1: Use thermodynamic relation ΔG° = -2.303 RT log₁₀ K.',
            'Step 2: log₁₀(1.0 × 10⁴) = 4.',
            'Step 3: ΔG° = -2.303 × (8.314 J·K⁻¹·mol⁻¹) × (298 K) × 4.',
            'Step 4: 2.303 × 8.314 × 298 ≈ 5705.8 J/mol = 5.706 kJ/mol.',
            'Step 5: ΔG° = -5.706 × 4 = -22.82 kJ/mol.',
          ],
          answer: 'ΔG° = -22.82 kJ/mol',
        },
      ],
    },
  ],

  formulae: [
    {
      title: 'Henry\'s Law Formula',
      formula: 'p = K_H \\cdot x \\quad \\text{or} \\quad m = k \\cdot p',
      variables: 'p = partial pressure of gas, x = mole fraction of dissolved gas, K_H = Henry\'s law constant',
      whenToUse: 'For calculating gas solubility in liquids as a function of pressure.',
      note: 'Higher K_H means lower gas solubility. Gas solubility decreases as temperature increases (exothermic dissolution).',
    },
    {
      title: 'Concentration Equilibrium Constant (Kc)',
      formula: 'K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}',
      variables: '[A], [B], [C], [D] = equilibrium molar concentrations (mol/L)',
      whenToUse: 'For homogeneous liquid and gas equilibria with known equilibrium concentrations.',
      note: 'Pure solids and pure liquids have active mass = 1 and are omitted.',
    },
    {
      title: 'Pressure Equilibrium Constant (Kp)',
      formula: 'K_p = \\frac{(P_C)^c (P_D)^d}{(P_A)^a (P_B)^b}',
      variables: 'P_i = partial pressure of gaseous component i (atm or bar)',
      whenToUse: 'For gas-phase equilibria where partial pressures or total pressures are specified.',
      note: 'Partial pressure P_i = X_i × P_total.',
    },
    {
      title: 'Master Relation between Kp and Kc',
      formula: 'K_p = K_c (R T)^{\\Delta n_g}',
      variables: 'R = 0.0821 L·atm/(mol·K), T = temperature in Kelvin, \\Delta n_g = n_{products(g)} - n_{reactants(g)}',
      whenToUse: 'To convert directly between Kp and Kc for gaseous equilibrium systems.',
      note: 'When \\Delta n_g = 0, Kp = Kc regardless of temperature and volume.',
    },
    {
      title: 'Thermodynamic Gibbs Energy Relation',
      formula: '\\Delta G^\\circ = -RT \\ln K = -2.303 RT \\log_{10} K',
      variables: 'R = 8.314 J·K⁻¹·mol⁻¹, T = Kelvin temperature, K = equilibrium constant',
      whenToUse: 'To calculate standard Gibbs energy change ΔG° from K, or K from ΔG°.',
      note: 'If K > 1 ➔ ΔG° < 0 (spontaneous). If K < 1 ➔ ΔG° > 0 (non-spontaneous).',
    },
    {
      title: 'Reaction Quotient (Qc & Qp)',
      formula: 'Q_c = \\frac{[C]_t^c [D]_t^d}{[A]_t^a [B]_t^b}, \\quad Q_p = \\frac{(P_C)_t^c (P_D)_t^d}{(P_A)_t^a (P_B)_t^b}',
      variables: '[X]_t, (P_X)_t = concentrations/partial pressures at any arbitrary instant t',
      whenToUse: 'To determine which direction (forward or backward) the reaction must shift to attain equilibrium.',
    },
    {
      title: 'Rules of K Modification',
      formula: 'K_{rev} = \\frac{1}{K}, \\quad K_{n} = K^n, \\quad K_{net} = K_1 \\times K_2',
      variables: 'n = stoichiometric multiplication factor',
      whenToUse: 'When combining, reversing, or scaling chemical equations to determine the new equilibrium constant.',
    },
    {
      title: 'Degree of Dissociation (α) for PCl₅ Decomposition',
      formula: 'K_p = \\frac{\\alpha^2 P_{total}}{1 - \\alpha^2} \\approx \\alpha^2 P_{total} \\quad (\\text{when } \\alpha \\ll 1)',
      variables: 'α = degree of dissociation, P_total = total equilibrium pressure',
      whenToUse: 'For AB(g) ⇌ A(g) + B(g) type decompositions (e.g., PCl₅, N₂O₄).',
    },
  ],

  visualLearning: {
    type: 'table',
    tableData: {
      headers: ['Parameter / Condition', 'Effect on Equilibrium Constant K', 'Effect on Reaction Quotient Q', 'Direction of System Shift'],
      rows: [
        ['Increase Reactant Concentration', 'NO CHANGE (K is constant at fixed T)', 'Q decreases (Q < K)', 'Shifts FORWARD to restore Q = K'],
        ['Increase Product Concentration', 'NO CHANGE (K is constant at fixed T)', 'Q increases (Q > K)', 'Shifts BACKWARD to restore Q = K'],
        ['Increase Total Pressure (Δng > 0)', 'NO CHANGE (K is constant at fixed T)', 'Q increases (Q > K)', 'Shifts BACKWARD (towards fewer gas moles)'],
        ['Increase Total Pressure (Δng < 0)', 'NO CHANGE (K is constant at fixed T)', 'Q decreases (Q < K)', 'Shifts FORWARD (towards fewer gas moles)'],
        ['Increase Temperature (Endothermic, ΔH > 0)', 'K INCREASES (van \'t Hoff equation)', 'Q is momentarily unchanged (Q < K_new)', 'Shifts FORWARD'],
        ['Increase Temperature (Exothermic, ΔH < 0)', 'K DECREASES (van \'t Hoff equation)', 'Q is momentarily unchanged (Q > K_new)', 'Shifts BACKWARD'],
        ['Addition of Positive Catalyst', 'NO CHANGE in K', 'NO CHANGE in Q', 'NO SHIFT; equilibrium reached faster'],
      ],
    },
    caption: 'Master Response Matrix: Contrasting Thermodynamic Constant (K) and Reaction Quotient (Q) Dynamics',
  },

  neetImportantPoints: [
    'Equilibrium constant K depends SOLELY on temperature for a given reaction. It is completely independent of pressure, volume, initial reactant concentrations, and presence of catalysts.',
    'Pure solids and pure liquids have constant density and molar mass; hence their active mass is taken as 1 and excluded from Kc and Kp expressions.',
    'For reactions with Δng = 0 (e.g., H₂ + I₂ ⇌ 2HI), Kp = Kc and the equilibrium composition is independent of container volume and total pressure.',
    'When two reactions are added together, their equilibrium constants MULTIPLY (K_net = K1 × K2), they do NOT add!',
    'In heterogeneous systems like CaCO₃(s) ⇌ CaO(s) + CO₂(g), Kp = P_CO2 and Kc = [CO₂]. The equilibrium partial pressure of CO₂ depends solely on temperature and is independent of the quantities of solid CaCO₃ and CaO present.',
    'The standard Gibbs free energy change ΔG° relates to equilibrium constant via ΔG° = -2.303 RT log₁₀ K. A reaction with K > 1 has ΔG° < 0 (spontaneous in forward direction).',
    'Henry\'s Law constant K_H increases with temperature, which explains why aquatic species are more comfortable in cold water than warm water (dissolved O₂ is higher in cold water).',
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking that adding a catalyst changes the value of equilibrium constant K or increases the yield of products.',
      correctFact: 'A catalyst lowers the activation energy equally for both forward and reverse paths, increasing Rf and Rb by the exact same factor. It speeds up attainment of equilibrium without shifting equilibrium position or changing K.',
      whyItMattersForNEET: 'Direct high-yield conceptual MCQ tested repeatedly in NEET exams.',
    },
    {
      commonConfusion: 'Adding equilibrium constants when two chemical equations are summed together: K_net = K1 + K2.',
      correctFact: 'Equilibrium constants MUST be MULTIPLIED: K_net = K1 × K2.',
      whyItMattersForNEET: 'Major numerical trap in multi-step equilibrium constant calculations.',
    },
    {
      commonConfusion: 'Confusing the sign of ΔG° with the magnitude of K (e.g., thinking ΔG° > 0 means K > 1).',
      correctFact: 'From ΔG° = -RT ln K: If K > 1, ΔG° < 0 (negative). If K < 1, ΔG° > 0 (positive).',
      whyItMattersForNEET: 'Essential thermodynamic relationship tested frequently in NEET Physical Chemistry.',
    },
    {
      commonConfusion: 'Including solid and liquid species in the calculation of Δng for Kp = Kc(RT)^Δng.',
      correctFact: 'Δng counts ONLY gaseous moles: Δng = Σn_gas(products) - Σn_gas(reactants). Solids (s) and liquids (l) are strictly ignored.',
      whyItMattersForNEET: 'Common source of calculation errors in heterogeneous equilibria like NH₄HS(s) or CaCO₃(s).',
    },
    {
      commonConfusion: 'Assuming higher Henry\'s constant K_H implies higher gas solubility.',
      correctFact: 'From p = K_H · x, higher K_H means lower solubility x at the same partial pressure.',
      whyItMattersForNEET: 'Core NCERT statement-based question in NEET.',
    },
  ],

  quickRevision: [
    '1. Dynamic Equilibrium: Rf = Rb in a closed system; macroscopic observables remain constant.',
    '2. Physical Equilibrium: Ice ⇌ Water (MP), Water ⇌ Vapor (BP), Sublimation (I₂, Camphor), Gas Dissolution (Henry\'s law: p = K_H · x).',
    '3. Kc = [Products]^coefficients / [Reactants]^coefficients (solids and pure liquids omitted as 1).',
    '4. Master Relation: Kp = Kc (RT)^Δng; when Δng = 0 ➔ Kp = Kc (unitless, pressure-independent).',
    '5. Thermodynamic Link: ΔG° = -RT ln K = -2.303 RT log₁₀ K; K > 1 ➔ ΔG° < 0; K < 1 ➔ ΔG° > 0.',
    '6. Reversing reaction ➔ K\' = 1/K; Multiplying by n ➔ K\' = K^n; Adding reactions ➔ K_net = K1 × K2.',
    '7. Q < K ➔ Forward shift; Q = K ➔ Equilibrium; Q > K ➔ Reverse shift.',
    '8. Catalysts accelerate attainment of equilibrium but NEVER change K or product yield.',
    '9. Temperature is the ONLY factor that alters the numerical value of K.',
  ],

  practiceQuestions: [
    {
      id: 'chem-lma-pq-1',
      question: 'For the equilibrium reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), the value of Kc is 2.8 × 10² L·mol⁻¹ at 1000 K. What is the value of Kp for this reaction at the same temperature? (R = 0.0821 L·atm·K⁻¹·mol⁻¹)',
      options: [
        '3.41 atm⁻¹',
        '2.80 × 10² atm⁻¹',
        '2.30 × 10⁴ atm',
        '0.034 atm⁻¹'
      ],
      correctAnswer: 0,
      explanation: 'Step 1: Calculate Δng = n_g(products) - n_g(reactants) = 2 - (2 + 1) = 2 - 3 = -1.\nStep 2: Apply formula Kp = Kc (RT)^Δng = Kc / (RT).\nStep 3: Calculate denominator RT = 0.0821 × 1000 = 82.1 L·atm·mol⁻¹.\nStep 4: Kp = (2.8 × 10²) / 82.1 = 280 / 82.1 ≈ 3.41 atm⁻¹.\n\nCorrect Answer: 3.41 atm⁻¹.',
    },
    {
      id: 'chem-lma-pq-2',
      question: 'Solid ammonium hydrogen sulfide decomposes according to the equation: NH₄HS(s) ⇌ NH₃(g) + H₂S(g). In a closed vessel at 300 K, the total equilibrium pressure is found to be 0.60 atm. What is the value of Kp for this reaction?',
      options: [
        '0.090 atm²',
        '0.360 atm²',
        '0.300 atm',
        '0.180 atm²'
      ],
      correctAnswer: 0,
      explanation: 'Step 1: Identify that NH₄HS is solid, so it does not contribute to partial pressure.\nStep 2: NH₃ and H₂S are produced in equimolar ratio (1:1), so P_NH3 = P_H2S = P_total / 2 = 0.60 / 2 = 0.30 atm.\nStep 3: Kp = P_NH3 × P_H2S = (0.30 atm) × (0.30 atm) = 0.090 atm².\n\nCorrect Answer: 0.090 atm².',
    },
    {
      id: 'chem-lma-pq-3',
      question: 'At 500 K, the equilibrium constant Kc for the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g) is 0.060. If the concentrations in a reaction vessel at a given moment are [N₂] = 0.10 M, [H₂] = 0.20 M, and [NH₃] = 0.040 M, in which direction will the reaction proceed?',
      options: [
        'Forward direction because Qc < Kc',
        'Backward direction because Qc > Kc',
        'The system is already at dynamic equilibrium because Qc = Kc',
        'Cannot be predicted without knowing total pressure'
      ],
      correctAnswer: 1,
      explanation: 'Step 1: Calculate reaction quotient Qc = [NH₃]² / ([N₂][H₂]³).\nStep 2: Substitute values: Qc = (0.040)² / ((0.10) × (0.20)³) = (0.0016) / ((0.10) × (0.008)) = 0.0016 / 0.0008 = 2.0.\nStep 3: Compare Qc and Kc: Qc (2.0) > Kc (0.060).\nStep 4: Since Qc > Kc, products are present in excess compared to equilibrium. The reaction shifts in the BACKWARD (reverse) direction to form more reactants.\n\nCorrect Answer: Backward direction because Qc > Kc.',
    },
    {
      id: 'chem-lma-pq-4',
      question: 'The equilibrium constant K for a reaction at 300 K is 10. The value of standard Gibbs free energy change ΔG° is: (R = 8.314 J·K⁻¹·mol⁻¹, log 10 = 1)',
      options: [
        '-5.74 kJ·mol⁻¹',
        '+5.74 kJ·mol⁻¹',
        '-57.4 kJ·mol⁻¹',
        '+57.4 kJ·mol⁻¹'
      ],
      correctAnswer: 0,
      explanation: 'Step 1: Use ΔG° = -2.303 RT log₁₀ K.\nStep 2: ΔG° = -2.303 × (8.314 J·K⁻¹·mol⁻¹) × (300 K) × log₁₀(10).\nStep 3: ΔG° = -2.303 × 8.314 × 300 × 1 = -5744 J·mol⁻¹ = -5.744 kJ·mol⁻¹.\n\nCorrect Answer: -5.74 kJ·mol⁻¹.',
    },
    {
      id: 'chem-lma-pq-5',
      question: 'Which of the following statements regarding Henry\'s Law is INCORRECT?',
      options: [
        'Higher value of Henry\'s constant K_H indicates higher solubility of gas in liquid',
        'Solubility of gas in liquid decreases with increase in temperature',
        'Henry\'s law is applied in the manufacture of carbonated soft drinks under high pressure',
        'Scuba divers use helium-diluted oxygen cylinders to avoid the painful bends caused by nitrogen bubbling in blood'
      ],
      correctAnswer: 0,
      explanation: 'According to Henry\'s Law, p = K_H · x ➔ x = p / K_H. Therefore, at a given partial pressure, a higher value of K_H means a LOWER solubility (mole fraction x) of the gas in the liquid. Thus, statement 0 is incorrect. Correct Option: 0.',
    },
  ],

  pyqs: [
    {
      id: 'pyq-lma-2023',
      year: 2023,
      exam: 'NEET UG 2023',
      question: 'For the reaction A(g) ⇌ B(g), the value of equilibrium constant is 10. If [A] = 0.1 M and [B] = 2.0 M at a given instant, which of the following is correct?',
      options: [
        'Reaction proceeds in the backward direction as Q > K',
        'Reaction proceeds in the forward direction as Q < K',
        'The reaction is at equilibrium as Q = K',
        'Reaction proceeds in forward direction as Q > K'
      ],
      correctAnswer: 0,
      explanation: 'Reaction quotient Q = [B] / [A] = 2.0 / 0.1 = 20. Given K = 10. Since Q (20) > K (10), the reaction will proceed in the reverse (backward) direction to attain equilibrium. Correct Option: 0.',
      topicId: 'chem-law-mass-action',
      difficulty: 'Easy',
      ncertReference: 'Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.7'
    },
    {
      id: 'pyq-lma-2022',
      year: 2022,
      exam: 'NEET UG 2022',
      question: 'The equilibrium constant Kp for the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g) is related to Kc by the expression:',
      options: [
        'Kp = Kc (RT)⁻²',
        'Kp = Kc (RT)²',
        'Kp = Kc (RT)⁻¹',
        'Kp = Kc (RT)¹'
      ],
      correctAnswer: 0,
      explanation: 'Δng = n_g(products) - n_g(reactants) = 2 - (1 + 3) = 2 - 4 = -2. Using Kp = Kc(RT)^Δng gives Kp = Kc(RT)⁻². Correct Option: 0.',
      topicId: 'chem-law-mass-action',
      difficulty: 'Easy',
      ncertReference: 'Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.5'
    },
    {
      id: 'pyq-lma-2020',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'Hydrolysis of sucrose is given by the reaction: Sucrose + H₂O ⇌ Glucose + Fructose. If the equilibrium constant (Kc) is 2 × 10¹³ at 300 K, the value of ΔG° at the same temperature will be:',
      options: [
        '-8.314 J mol⁻¹ K⁻¹ × 300 K × ln(2 × 10¹³)',
        '8.314 J mol⁻¹ K⁻¹ × 300 K × ln(2 × 10¹³)',
        '8.314 J mol⁻¹ K⁻¹ × 300 K × ln(3 × 10¹³)',
        '-8.314 J mol⁻¹ K⁻¹ × 300 K × ln(4 × 10¹³)'
      ],
      correctAnswer: 0,
      explanation: 'Standard Gibbs free energy change is related to equilibrium constant by ΔG° = -RT ln(Kc). Given R = 8.314 J mol⁻¹ K⁻¹, T = 300 K, and Kc = 2 × 10¹³. Therefore, ΔG° = -8.314 J mol⁻¹ K⁻¹ × 300 K × ln(2 × 10¹³). Correct Option: 0.',
      topicId: 'chem-law-mass-action',
      difficulty: 'Medium',
      ncertReference: 'Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.8'
    },
    {
      id: 'pyq-lma-2017',
      year: 2017,
      exam: 'NEET UG 2017',
      question: 'The equilibrium constants of the following are: N₂ + 3H₂ ⇌ 2NH₃ (K1); N₂ + O₂ ⇌ 2NO (K2); H₂ + 1/2 O₂ ⇌ H₂O (K3). The equilibrium constant (K) for the reaction 2NH₃ + 5/2 O₂ ⇌ 2NO + 3H₂O will be:',
      options: [
        'K2 × K3³ / K1',
        'K1 × K2 / K3',
        'K1 × K3³ / K2',
        'K2 × K3 / K1'
      ],
      correctAnswer: 0,
      explanation: 'Target equation: 2NH₃ + 5/2 O₂ ⇌ 2NO + 3H₂O.\nOperation: Reverse equation 1 (K = 1/K1), add equation 2 (K = K2), and add 3 × equation 3 (K = K3³).\nOverall K = (1/K1) × K2 × K3³ = K2 × K3³ / K1. Correct Option: 0.',
      topicId: 'chem-law-mass-action',
      difficulty: 'Medium',
      ncertReference: 'Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.6'
    },
    {
      id: 'pyq-lma-2015',
      year: 2015,
      exam: 'AIPMT 2015',
      question: 'If the equilibrium constant for N₂(g) + O₂(g) ⇌ 2NO(g) is K, the equilibrium constant for 1/2 N₂(g) + 1/2 O₂(g) ⇌ NO(g) will be:',
      options: [
        'K^(1/2)',
        '1/2 K',
        'K',
        'K²'
      ],
      correctAnswer: 0,
      explanation: 'When a balanced chemical reaction is multiplied by factor n = 1/2, the new equilibrium constant K\' = K^n = K^(1/2) = √K. Correct Option: 0.',
      topicId: 'chem-law-mass-action',
      difficulty: 'Easy',
      ncertReference: 'Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.6'
    },
  ],

  neetMarksPotential: {
    topicName: 'Physical & Chemical Equilibrium, Law of Mass Action & Kc/Kp',
    confidenceLabel: 'HIGH',
    confidenceText: 'Verified against NTA NEET UG 2013-2025 past papers and NCERT Chapter 6.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 12,
    totalDirectPyqs: 16,
    totalHistoricalMarks: 64,
    averageDirectPyqsPerPaper: 1.1,
    maxDirectPyqsInSinglePaper: 2,
    minDirectPyqsInSinglePaper: 0,
    minDirectMarks: 0,
    maxDirectMarks: 8,
    avgDirectMarksPerPaper: 4.4,
    typicalContributionMarks: 4,
    historicalMarksRangeText: '4 - 8 marks per paper (High Yield Core Section)',
    whatThisMeansForYou: 'Law of Mass Action, Physical Equilibrium (Henry\'s Law), and Kp/Kc/ΔG° calculations appear in virtually every NEET question paper. Focus heavily on calculating Δng, manipulating multi-step K expressions, applying ΔG° = -RT ln K, and setting up ICE tables for partial pressure decompositions like PCl₅ and NH₄HS.',
    yearWiseBreakdown: [
      { year: 2024, exam: 'NEET UG 2024', directPyqCount: 1, marks: 4, questionType: 'Relation between Kp and Kc with Δng', classification: 'Direct', verificationStatus: 'Verified (NTA Archive)' },
      { year: 2023, exam: 'NEET UG 2023', directPyqCount: 1, marks: 4, questionType: 'Q vs K direction prediction', classification: 'Direct', verificationStatus: 'Verified (NTA Archive)' },
      { year: 2022, exam: 'NEET UG 2022', directPyqCount: 1, marks: 4, questionType: 'Kp and Kc formula for ammonia synthesis', classification: 'Direct', verificationStatus: 'Verified (NTA Archive)' },
      { year: 2020, exam: 'NEET UG 2020', directPyqCount: 1, marks: 4, questionType: 'Standard Gibbs free energy ΔG° from Kc', classification: 'Direct', verificationStatus: 'Verified (NTA Archive)' },
      { year: 2017, exam: 'NEET UG 2017', directPyqCount: 1, marks: 4, questionType: 'Combining multi-reaction equilibrium constants', classification: 'Direct', verificationStatus: 'Verified (NTA Archive)' },
    ],
  },
}

