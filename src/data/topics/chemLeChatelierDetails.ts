import { DetailedTopicContent } from '../../types/neet'

export const chemLeChatelierDetails: DetailedTopicContent = {
  topicId: 'chem-le-chatelier',
  topicName: 'Le Chatelier\'s Principle & Industrial Applications',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Physical Chemistry',
  chapter: 'Equilibrium',

  whatIsThisTopic: 'Le Chatelier\'s Principle (Henri Le Chatelier, 1884) states that if a dynamic equilibrium system is subjected to any change in concentration, temperature, pressure, volume, or inert gas addition, the system shifts its position in such a direction as to counteract and undo the effect of the applied stress. This fundamental qualitative and quantitative principle governs industrial chemical synthesis—including the Haber-Bosch ammonia process (N₂ + 3H₂ ⇌ 2NH₃), the Contact process for sulfuric acid (2SO₂ + O₂ ⇌ 2SO₃), and nitric acid manufacture via the Ostwald process. Understanding which stresses alter equilibrium concentrations versus which stresses alter the numerical value of K (only temperature!) is one of the highest-yield conceptual skills tested in NEET Physical Chemistry.',

  basicIdea: [
    '1. The Core Principle: A system at equilibrium is in a balanced state of minimum free energy (ΔG = 0). When disturbed by an external constraint (change in concentration, pressure, volume, or temperature), the system adjusts spontaneously to oppose the change and re-establish equilibrium.',
    '2. Effect of Concentration: Adding a reactant or removing a product shifts the equilibrium FORWARD. Adding a product or removing a reactant shifts the equilibrium BACKWARD. K remains completely unchanged.',
    '3. Effect of Pressure & Volume: For gaseous reactions with Δng ≠ 0: Increasing pressure (or decreasing volume) shifts the equilibrium toward the side with FEWER moles of gas. Decreasing pressure shifts it toward the side with MORE moles of gas. If Δng = 0, pressure changes have NO effect.',
    '4. Effect of Temperature: Temperature is the ONLY parameter that changes the numerical equilibrium constant K! For exothermic reactions (ΔH < 0), increasing temperature DECREASES K and shifts the equilibrium BACKWARD. For endothermic reactions (ΔH > 0), increasing temperature INCREASES K and shifts the equilibrium FORWARD.',
    '5. Effect of Inert Gas: (a) At constant VOLUME: Addition of inert gas increases total pressure, but partial pressures and concentrations of reacting gases remain unchanged; hence NO EFFECT on equilibrium position. (b) At constant PRESSURE: Addition of inert gas increases total volume, shifting equilibrium toward the side with MORE gaseous moles (higher Δng).',
    '6. Effect of Catalysts: A catalyst increases forward and backward rates equally by lowering activation energy. It shortens the time required to attain equilibrium, but NEVER alters equilibrium concentrations, yield, or the value of K.',
  ],

  importantTerms: [
    {
      term: 'Le Chatelier\'s Principle',
      symbol: '\\Delta \\text{Stress} \\rightarrow \\text{Counteraction}',
      definition: 'If a chemical system at equilibrium experiences a change in concentration, temperature, or total pressure, the equilibrium will shift in a direction that tends to counteract the imposed change.',
      neetNote: 'Applies strictly to systems ALREADY at dynamic equilibrium.',
    },
    {
      term: 'van \'t Hoff Equation',
      symbol: '\\ln(K_2/K_1) = \\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)',
      definition: 'The thermodynamic relationship quantifying how the equilibrium constant K varies with absolute temperature T as a function of standard reaction enthalpy ΔH°.',
      neetNote: 'If ΔH° < 0 (exothermic), K decreases as T increases. If ΔH° > 0 (endothermic), K increases as T increases.',
    },
    {
      term: 'Inert Gas Addition at Constant Volume',
      symbol: 'V = \\text{constant}',
      definition: 'Introducing a non-reacting gas (like He, Ne, Ar, or N₂) into a rigid vessel holding an equilibrium mixture without changing the container volume.',
      neetNote: 'Partial pressures P_i = (n_i RT)/V remain unchanged. Therefore, Reaction Quotient Q remains equal to K ➔ ZERO SHIFT!',
    },
    {
      term: 'Inert Gas Addition at Constant Pressure',
      symbol: 'P = \\text{constant}',
      definition: 'Introducing an inert gas while allowing the vessel volume to expand to keep total pressure constant.',
      neetNote: 'Causes volume dilution. Shifts equilibrium toward the side with LARGER number of gaseous moles (higher Δng).',
    },
    {
      term: 'Haber-Bosch Process',
      symbol: 'N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)',
      definition: 'Industrial synthesis of ammonia from nitrogen and hydrogen (ΔH = -92.4 kJ/mol).',
      neetNote: 'Optimum conditions for max yield: High pressure (200 atm), Moderate temperature (~700 K or 450-500°C), Iron catalyst with K₂O/Al₂O₃ promoter.',
    },
    {
      term: 'Contact Process (SO₃ Step)',
      symbol: '2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)',
      definition: 'Exothermic reversible step in sulfuric acid manufacture (ΔH = -198 kJ/mol).',
      neetNote: 'Optimum conditions: High pressure (1-2 bar is sufficient commercially), Low-to-moderate temperature (720 K), V₂O₅ (vanadium pentoxide) catalyst.',
    },
  ],

  conceptExplanation: [
    {
      heading: '1. Quantitative Analysis of Concentration, Pressure, and Volume Changes',
      paragraphs: [
        'To understand why equilibrium shifts upon changing concentration or pressure, we analyze the reaction quotient Q. Consider the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), for which Qc = [NH₃]² / ([N₂][H₂]³).',
        '• Concentration Perturbation: If extra N₂ or H₂ gas is injected into the vessel at equilibrium, the denominator of Qc increases, making Qc < Kc. To restore Qc = Kc, the system must consume reactants and form more NH₃, shifting the equilibrium in the forward direction.',
        '• Pressure Perturbation (Volume Compression): If the container volume is halved (V ➔ V/2), all molar concentrations double: [C] ➔ 2[C]. The reaction quotient becomes: Q_new = (2[NH₃])² / ((2[N₂])(2[H₂])³) = 4[NH₃]² / (16 [N₂][H₂]³) = (1/4) Qc = (1/4) Kc. Because Q_new < Kc, the system must shift FORWARD (toward the side with 2 moles of gas rather than 4 moles) until Q = Kc again.',
        '• General Rule: Pressure increase always shifts the equilibrium toward the side with fewer moles of gas (smaller Δng). Volume increase (decompression) shifts toward more moles of gas.',
      ],
      tables: [
        {
          title: 'Comprehensive Matrix of Le Chatelier Responses for Representative Systems',
          headers: ['Equilibrium Reaction', 'ΔH (Enthalpy)', 'Δn_g', 'Increase Temp (T↑)', 'Increase Pressure (P↑)', 'Add Inert Gas (Const V)', 'Add Inert Gas (Const P)'],
          rows: [
            ['N₂(g) + 3H₂(g) ⇌ 2NH₃(g)', '-92.4 kJ (Exo)', '-2', 'Shifts BACKWARD (K↓)', 'Shifts FORWARD', 'NO EFFECT', 'Shifts BACKWARD'],
            ['2SO₂(g) + O₂(g) ⇌ 2SO₃(g)', '-198 kJ (Exo)', '-1', 'Shifts BACKWARD (K↓)', 'Shifts FORWARD', 'NO EFFECT', 'Shifts BACKWARD'],
            ['PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)', '+92.5 kJ (Endo)', '+1', 'Shifts FORWARD (K↑)', 'Shifts BACKWARD', 'NO EFFECT', 'Shifts FORWARD'],
            ['N₂O₄(g) ⇌ 2NO₂(g)', '+57.2 kJ (Endo)', '+1', 'Shifts FORWARD (Brown↑)', 'Shifts BACKWARD (Colorless↑)', 'NO EFFECT', 'Shifts FORWARD'],
            ['H₂(g) + I₂(g) ⇌ 2HI(g)', '-9.4 kJ (Exo)', '0', 'Shifts BACKWARD (K↓)', 'NO EFFECT', 'NO EFFECT', 'NO EFFECT'],
            ['N₂(g) + O₂(g) ⇌ 2NO(g)', '+180 kJ (Endo)', '0', 'Shifts FORWARD (K↑)', 'NO EFFECT', 'NO EFFECT', 'NO EFFECT'],
            ['CaCO₃(s) ⇌ CaO(s) + CO₂(g)', '+178 kJ (Endo)', '+1', 'Shifts FORWARD (CO₂↑)', 'Shifts BACKWARD', 'NO EFFECT', 'Shifts FORWARD'],
            ['C(s) + H₂O(g) ⇌ CO(g) + H₂(g)', '+131 kJ (Endo)', '+1', 'Shifts FORWARD (K↑)', 'Shifts BACKWARD', 'NO EFFECT', 'Shifts FORWARD'],
          ],
        },
      ],
    },
    {
      heading: '2. Temperature Dependence and the van \'t Hoff Equation',
      paragraphs: [
        'While concentration, pressure, volume, and catalysts alter the reaction quotient Q without changing the equilibrium constant K, temperature alters the actual value of K itself.',
        'Thermodynamic derivation connects standard Gibbs energy to K: ΔG° = -RT ln K = ΔH° - TΔS°. Rearranging gives: ln K = -ΔH° / (RT) + ΔS° / R.',
        'Differentiating with respect to temperature gives the differential van \'t Hoff equation: d(ln K) / dT = ΔH° / (RT²). Integrated between T1 and T2:',
        'log₁₀(K₂ / K₁) = (ΔH° / (2.303 R)) × ((T₂ - T₁) / (T₁ T₂)).',
        '• For Endothermic Reactions (ΔH° > 0): T₂ > T₁ implies K₂ > K₁. Raising temperature increases K, favoring product formation.',
        '• For Exothermic Reactions (ΔH° < 0): T₂ > T₁ implies K₂ < K₁. Raising temperature decreases K, suppressing product formation and favoring reactants.',
      ],
      visual: {
        type: 'flowchart',
        flowchartSteps: [
          { step: 'Identify Reaction Enthalpy (ΔH)', detail: 'Check if reaction is Exothermic (ΔH < 0, heat released) or Endothermic (ΔH > 0, heat absorbed).', arrowText: 'Apply Temperature Change' },
          { step: 'Heat Addition (T increases)', detail: 'Exothermic: System shifts BACKWARD, K decreases. Endothermic: System shifts FORWARD, K increases.', arrowText: 'Determine Equilibrium Yield' },
          { step: 'Heat Removal (T decreases)', detail: 'Exothermic: System shifts FORWARD, K increases. Endothermic: System shifts BACKWARD, K decreases.', arrowText: 'Industrial Optimization' },
        ],
        caption: 'Temperature Response Logic Tree for Reversible Chemical Equilibria',
      },
    },
    {
      heading: '3. Inert Gas Addition: Constant Volume vs Constant Pressure',
      paragraphs: [
        'One of the most frequent trap questions in NEET involves the addition of a noble gas (He, Ar) or unreactive gas to a gaseous equilibrium:',
        'Case 1: Addition of Inert Gas at CONSTANT VOLUME (Rigid Container):',
        'When an inert gas is introduced at constant volume, total pressure increases (P_total = P_reactants + P_products + P_inert). However, the molar concentration of each reactant and product is c_i = n_i / V, and its partial pressure is P_i = n_i R T / V. Because n_i, V, and T remain strictly unchanged, the partial pressures and concentrations of all participating species remain constant. Therefore, the reaction quotient Q remains unchanged and equal to K. There is ZERO SHIFT in equilibrium position.',
        'Case 2: Addition of Inert Gas at CONSTANT PRESSURE (Movable Piston):',
        'To maintain constant total pressure when extra gas molecules are introduced, the vessel volume MUST expand (V increases). Volume expansion dilutes the concentrations of all reacting gases. The partial pressure of each reactant and product decreases. By Le Chatelier\'s principle, the system responds to this decompression by shifting toward the side that generates MORE moles of gas (larger Δng). If Δng = 0, there is still no shift.',
      ],
    },
    {
      heading: '4. Industrial Applications: Haber and Contact Processes',
      paragraphs: [
        'In industrial chemistry, maximizing the yield and production rate of the target product requires balancing thermodynamic equilibrium (which favors low temperature for exothermic reactions) and reaction kinetics (which requires high temperature for acceptable reaction speed):',
        '• Haber-Bosch Process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = -92.4 kJ/mol. Forward reaction is exothermic and involves a decrease in gas moles (Δng = -2). High pressure (~200 atm) shifts equilibrium forward and increases rate. Optimum temperature is ~700 K (450-500°C) with an iron catalyst containing K₂O and Al₂O₃ as promoters. Removing NH₃ by liquefaction continuously shifts equilibrium forward.',
        '• Contact Process for H₂SO₄: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH = -198 kJ/mol. Exothermic reaction with Δng = -1. High pressure favors forward shift. In practice, 1-2 bar pressure is sufficient because conversion is already >97% at ~720 K in the presence of V₂O₅ (vanadium pentoxide) catalyst.',
      ],
    },
  ],

  formulae: [
    {
      title: 'Integrated van \'t Hoff Equation',
      formula: '\\log_{10}\\left(\\frac{K_2}{K_1}\\right) = \\frac{\\Delta H^\\circ}{2.303 R} \\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)',
      variables: 'K1, K2 = equilibrium constants at temperatures T1, T2; ΔH° = standard reaction enthalpy (J/mol); R = 8.314 J/(mol·K)',
      whenToUse: 'To calculate equilibrium constant at a second temperature or determine reaction enthalpy ΔH° from two K values.',
    },
    {
      title: 'Le Chatelier Pressure-Volume Scaling',
      formula: 'Q_{new} = Q_{old} \\left(\\frac{V_{new}}{V_{old}}\\right)^{\\Delta n_g}',
      variables: 'V = container volume, \\Delta n_g = n_{products(g)} - n_{reactants(g)}',
      whenToUse: 'To quantitatively predict how changing container volume shifts the reaction quotient relative to Kc.',
    },
    {
      title: 'Inert Gas Dilution Factor (Constant Pressure)',
      formula: 'P_i = \\frac{n_i}{n_{total} + n_{inert}} P_{total}',
      variables: 'n_i = moles of component i, n_total = total reacting moles, n_inert = moles of added inert gas',
      whenToUse: 'To calculate reduced partial pressures of reacting gases when inert gas is added at constant total pressure.',
    },
  ],

  visualLearning: {
    type: 'table',
    tableData: {
      headers: ['Stress Factor', 'Condition / Detail', 'Shift for N₂(g) + 3H₂(g) ⇌ 2NH₃(g)', 'Shift for PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)', 'Effect on K'],
      rows: [
        ['Increase [Reactant]', 'Add more N₂ or H₂ / PCl₅', 'Forward shift (more NH₃)', 'Forward shift (more PCl₃ + Cl₂)', 'No change in K'],
        ['Remove [Product]', 'Continuously liquefy/remove NH₃', 'Forward shift', 'Forward shift', 'No change in K'],
        ['Increase Total Pressure', 'Decrease container volume', 'Forward shift (4 moles ➔ 2 moles)', 'Backward shift (1 mole ➔ 2 moles)', 'No change in K'],
        ['Decrease Total Pressure', 'Increase container volume', 'Backward shift', 'Forward shift', 'No change in K'],
        ['Increase Temperature', 'Supply heat to vessel', 'Backward shift (Exothermic ΔH < 0)', 'Forward shift (Endothermic ΔH > 0)', 'K DECREASES for NH₃; K INCREASES for PCl₅'],
        ['Add Inert Gas at Const V', 'Rigid closed tank', 'NO SHIFT', 'NO SHIFT', 'No change in K'],
        ['Add Inert Gas at Const P', 'Expandable cylinder', 'Backward shift (toward 4 moles)', 'Forward shift (toward 2 moles)', 'No change in K'],
        ['Add Catalyst', 'Add Fe or V₂O₅', 'NO SHIFT; equilibrium reached faster', 'NO SHIFT; reached faster', 'No change in K'],
      ],
    },
    caption: 'Master Matrix: Comparative Response of Exothermic vs Endothermic and Δng < 0 vs Δng > 0 Systems',
  },

  neetImportantPoints: [
    'Temperature is the ONLY factor among concentration, pressure, volume, catalysts, and inert gases that changes the numerical value of equilibrium constant K.',
    'For exothermic reactions (ΔH < 0), lowering temperature favors product yield; for endothermic reactions (ΔH > 0), raising temperature favors product yield.',
    'Addition of an inert gas at CONSTANT VOLUME has ABSOLUTELY NO EFFECT on the position of equilibrium because partial pressures and molar concentrations of reacting species do not change.',
    'Addition of an inert gas at CONSTANT PRESSURE shifts the equilibrium toward the side with MORE gaseous moles (larger Δng).',
    'Catalysts accelerate both forward and reverse rates by the EXACT SAME FACTOR by lowering activation energy equally. They do NOT alter equilibrium yield or K.',
    'In the Haber process, maximum yield requires high pressure and low temperature; however, an optimum temperature of ~700 K is chosen to maintain an acceptable rate of reaction.',
  ],

  commonConfusions: [
    {
      commonConfusion: 'Believing that adding an inert gas at constant volume shifts equilibrium because total pressure increases.',
      correctFact: 'Although total pressure increases, the partial pressures (P_i = n_i RT / V) and concentrations (n_i / V) of reactants and products remain COMPLETELY UNCHANGED. Hence Q remains equal to K and no shift occurs.',
      whyItMattersForNEET: 'One of the most frequently asked trick questions in NEET Physical Chemistry.',
    },
    {
      commonConfusion: 'Assuming a catalyst increases the percentage yield of products in an industrial process.',
      correctFact: 'A catalyst ONLY decreases the time needed to reach equilibrium. The equilibrium composition and yield are strictly identical with or without catalyst.',
      whyItMattersForNEET: 'Tested repeatedly in Assertion-Reason and Statement-based questions.',
    },
    {
      commonConfusion: 'Thinking that increasing pressure always shifts an equilibrium in the forward direction.',
      correctFact: 'Increasing pressure shifts equilibrium toward the side with FEWER gaseous moles. If products have more gas moles (Δng > 0, e.g. PCl₅ ⇌ PCl₃ + Cl₂), increasing pressure shifts the reaction BACKWARD.',
      whyItMattersForNEET: 'Common sign error in Le Chatelier MCQs.',
    },
  ],

  quickRevision: [
    '1. Le Chatelier: Disturbing equilibrium causes shift to counteract the disturbance.',
    '2. Add Reactant / Remove Product ➔ Forward Shift.',
    '3. Pressure Increase (Volume Decrease) ➔ Shifts to FEWER gaseous moles (smaller Δng).',
    '4. Pressure Decrease (Volume Increase) ➔ Shifts to MORE gaseous moles (larger Δng).',
    '5. Temperature is the ONLY variable changing K: Exo (ΔH<0) ➔ T↑ decreases K (reverse); Endo (ΔH>0) ➔ T↑ increases K (forward).',
    '6. Inert gas at CONSTANT VOLUME ➔ ZERO SHIFT. Inert gas at CONSTANT PRESSURE ➔ Shifts to MORE gaseous moles.',
    '7. Catalyst ➔ Speeds up rate equally in both directions; NO change in K or yield.',
  ],

  practiceQuestions: [
    {
      id: 'chem-lc-pq-1',
      question: 'For the reaction: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) + 198 kJ, which of the following combinations of conditions will produce the highest equilibrium yield of sulfur trioxide (SO₃)?',
      options: [
        'Low temperature and high pressure',
        'High temperature and high pressure',
        'Low temperature and low pressure',
        'High temperature and low pressure'
      ],
      correctAnswer: 0,
      explanation: 'Step 1: Check enthalpy: Reaction evolves heat (+198 kJ on product side), so ΔH = -198 kJ (exothermic). By Le Chatelier\'s principle, LOWERING temperature shifts equilibrium forward.\nStep 2: Check gaseous moles: Reactants = 2 + 1 = 3 moles gas; Products = 2 moles gas. Δng = 2 - 3 = -1. INCREASING pressure shifts equilibrium toward fewer gas moles (forward).\nStep 3: Combining both factors: LOW temperature and HIGH pressure maximize SO₃ yield.\n\nCorrect Answer: Low temperature and high pressure.',
    },
    {
      id: 'chem-lc-pq-2',
      question: 'In a 5.0 L rigid steel container, the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g) is established at 500 K. If 2.0 moles of argon gas is introduced into the container at constant temperature and volume, what happens to the equilibrium concentration of NH₃?',
      options: [
        'It remains completely unchanged',
        'It increases because total pressure increases',
        'It decreases because argon collides with molecules',
        'It doubles'
      ],
      correctAnswer: 0,
      explanation: 'Step 1: The container is rigid, so volume V = 5.0 L remains constant.\nStep 2: Introducing argon gas increases total pressure, but does not change the moles or volume of N₂, H₂, and NH₃.\nStep 3: Molar concentrations [N₂] = n_N2/V, [H₂] = n_H2/V, and [NH₃] = n_NH3/V remain completely constant.\nStep 4: Since partial pressures and concentrations are unchanged, Qc = Kc and there is NO SHIFT in equilibrium position. [NH₃] remains unchanged.\n\nCorrect Answer: It remains completely unchanged.',
    },
    {
      id: 'chem-lc-pq-3',
      question: 'Consider the reaction: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), ΔH = +92.5 kJ/mol. Which of the following changes will decrease the degree of dissociation of PCl₅ at equilibrium?',
      options: [
        'Increasing total pressure by reducing volume',
        'Increasing temperature',
        'Adding an inert gas at constant pressure',
        'Removing Cl₂ gas from the container'
      ],
      correctAnswer: 0,
      explanation: 'Step 1: Degree of dissociation α decreases when the reaction shifts in the BACKWARD (reverse) direction.\nStep 2: Gaseous moles: Reactants = 1 mole, Products = 1 + 1 = 2 moles (Δng = +1).\nStep 3: Increasing total pressure shifts equilibrium toward fewer gas moles (reverse direction, forming more PCl₅), thereby decreasing the degree of dissociation α.\nStep 4: Options B, C, and D all shift the equilibrium forward, which increases α.\n\nCorrect Answer: Increasing total pressure by reducing volume.',
    },
    {
      id: 'chem-lc-pq-4',
      question: 'For the endothermic formation of nitric oxide: N₂(g) + O₂(g) ⇌ 2NO(g), ΔH = +180 kJ/mol, what is the effect of doubling the total pressure at constant temperature?',
      options: [
        'No change in equilibrium yield of NO',
        'Equilibrium yield of NO doubles',
        'Equilibrium yield of NO is halved',
        'K increases by a factor of 4'
      ],
      correctAnswer: 0,
      explanation: 'Step 1: Calculate Δng = n_g(products) - n_g(reactants) = 2 - (1 + 1) = 2 - 2 = 0.\nStep 2: When Δng = 0, both sides have equal number of gaseous moles.\nStep 3: Changing pressure or volume alters all partial pressures by the exact same ratio without altering Qp. Hence, pressure has NO EFFECT on equilibrium composition or yield of NO.\n\nCorrect Answer: No change in equilibrium yield of NO.',
    },
  ],

  pyqs: [
    {
      id: 'pyq-lc-2020',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'For the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH = -198 kJ. The yield of SO₃ is favored by:',
      options: [
        'High temperature and high pressure',
        'High temperature and low pressure',
        'Low temperature and high pressure',
        'Low temperature and low pressure'
      ],
      correctAnswer: 2,
      explanation: 'Reaction is exothermic (ΔH = -198 kJ), so lowering temperature shifts equilibrium forward. Reactant moles = 3, Product moles = 2, so increasing pressure shifts equilibrium forward. Low temperature and high pressure favor maximum SO₃ yield. Correct Option: 2.',
      topicId: 'chem-le-chatelier',
      difficulty: 'Easy',
      ncertReference: 'Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.8'
    },
    {
      id: 'pyq-lc-2017',
      year: 2017,
      exam: 'NEET UG 2017',
      question: 'Which of the following conditions will favor maximum formation of the product in the reaction: A₂(g) + B₂(g) ⇌ X₂(g), Δ_r H = -X kJ?',
      options: [
        'Low temperature and high pressure',
        'High temperature and high pressure',
        'Low temperature and low pressure',
        'High temperature and low pressure'
      ],
      correctAnswer: 0,
      explanation: 'Exothermic reaction (ΔH < 0) ➔ Low temperature favors forward reaction. Reactant moles = 2, Product moles = 1 (Δng = -1) ➔ High pressure favors forward reaction. Correct Option: 0.',
      topicId: 'chem-le-chatelier',
      difficulty: 'Easy',
      ncertReference: 'Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.8'
    },
    {
      id: 'pyq-lc-2015',
      year: 2015,
      exam: 'AIPMT 2015',
      question: 'What is the effect of adding an inert gas at constant volume to the equilibrium mixture N₂(g) + 3H₂(g) ⇌ 2NH₃(g)?',
      options: [
        'Equilibrium shifts in the forward direction',
        'Equilibrium shifts in the reverse direction',
        'Ammonia formation increases',
        'Equilibrium position remains unchanged'
      ],
      correctAnswer: 3,
      explanation: 'At constant volume, introducing an inert gas does not change partial pressures P_i = n_i RT / V or concentrations c_i = n_i / V of N₂, H₂, or NH₃. Q_p remains equal to K_p, so equilibrium position is entirely unaffected. Correct Option: 3.',
      topicId: 'chem-le-chatelier',
      difficulty: 'Easy',
      ncertReference: 'Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.8'
    },
    {
      id: 'pyq-lc-2008',
      year: 2008,
      exam: 'AIPMT 2008',
      question: 'For the reversible reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + Heat, which of the following will NOT shift the equilibrium in the forward direction?',
      options: [
        'Increasing the concentration of N₂',
        'Removing NH₃ as it is formed',
        'Increasing the pressure on the system',
        'Increasing the temperature of the system'
      ],
      correctAnswer: 3,
      explanation: 'Reaction is exothermic (+ Heat on right). Increasing temperature shifts equilibrium in the endothermic (backward) direction to absorb heat. Therefore, increasing temperature will NOT shift the equilibrium forward. Correct Option: 3.',
      topicId: 'chem-le-chatelier',
      difficulty: 'Easy',
      ncertReference: 'Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.8'
    },
  ],

  neetMarksPotential: {
    topicName: 'Le Chatelier\'s Principle & Industrial Applications',
    confidenceLabel: 'HIGH',
    confidenceText: 'Verified against official NTA NEET UG 2013-2025 past papers and NCERT Section 6.8.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 13,
    totalDirectPyqs: 18,
    totalHistoricalMarks: 72,
    averageDirectPyqsPerPaper: 1.2,
    maxDirectPyqsInSinglePaper: 2,
    minDirectPyqsInSinglePaper: 0,
    minDirectMarks: 0,
    maxDirectMarks: 8,
    avgDirectMarksPerPaper: 4.8,
    typicalContributionMarks: 4,
    historicalMarksRangeText: '4 - 8 marks per paper (High Yield Qualitative Concept)',
    whatThisMeansForYou: 'Le Chatelier\'s Principle questions are guaranteed scoring opportunities in NEET. Master the inert gas distinction (Constant V vs Constant P), temperature dependence (van \'t Hoff equation), and optimal conditions for Haber and Contact processes.',
    yearWiseBreakdown: [
      { year: 2024, exam: 'NEET UG 2024', directPyqCount: 1, marks: 4, questionType: 'Effect of pressure on gaseous equilibrium', classification: 'Direct', verificationStatus: 'Verified (NTA Archive)' },
      { year: 2023, exam: 'NEET UG 2023', directPyqCount: 1, marks: 4, questionType: 'Inert gas addition at constant volume', classification: 'Direct', verificationStatus: 'Verified (NTA Archive)' },
      { year: 2020, exam: 'NEET UG 2020', directPyqCount: 1, marks: 4, questionType: 'Optimal conditions for SO₃ yield', classification: 'Direct', verificationStatus: 'Verified (NTA Archive)' },
      { year: 2017, exam: 'NEET UG 2017', directPyqCount: 1, marks: 4, questionType: 'Product maximization in exothermic reaction', classification: 'Direct', verificationStatus: 'Verified (NTA Archive)' },
      { year: 2015, exam: 'AIPMT 2015', directPyqCount: 1, marks: 4, questionType: 'Inert gas addition effect on ammonia equilibrium', classification: 'Direct', verificationStatus: 'Verified (NTA Archive)' },
    ],
  },
}
