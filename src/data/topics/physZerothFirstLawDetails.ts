import { DetailedTopicContent } from '../../types/neet';

export const physZerothFirstLawDetails: DetailedTopicContent = {
  topicId: 'phys-zeroth-first-law',
  topicName: 'Zeroth & First Law of Thermodynamics',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Thermodynamics & Kinetic Theory',
  chapter: 'Thermodynamics',

  whatIsThisTopic: 'Zeroth & First Law of Thermodynamics establishes the thermodynamic concepts of temperature, heat, internal energy, work, and thermal equilibrium. It provides the foundational energy conservation equation for thermodynamic systems (ΔQ = ΔU + ΔW), defines sign conventions for heat and work, explains P-V diagram work interpretation, and forms the core pillar for numerical analysis in NEET UG Physics.',

  basicIdea: [
    'Thermodynamic System & Surroundings: A system is a region of interest undergoing energy transfers, separated from surroundings by diathermic (heat-conducting) or adiabatic (thermally insulating) boundaries.',
    'Thermodynamic Equilibrium: A system is in thermodynamic equilibrium if it simultaneously satisfies thermal equilibrium (uniform temperature), mechanical equilibrium (no unbalanced forces/pressure gradients), and chemical equilibrium (no net chemical reaction).',
    'Zeroth Law of Thermodynamics: If two systems A and B are separately in thermal equilibrium with a third system C, then A and B are also in thermal equilibrium with each other. This law introduces temperature as a fundamental state variable.',
    'Internal Energy (U): A state function representing the total energy stored within a system (sum of microscopic kinetic and potential energies). For an ideal gas, U depends solely on absolute temperature T: U = (f/2) n R T.',
    'First Law of Thermodynamics (FLOT): Energy conservation applied to heat and work: ΔQ = ΔU + ΔW (where ΔQ is heat supplied TO system, ΔU is change in internal energy, and ΔW is work done BY system).',
    'Path Functions vs State Functions: Internal energy (U) is a state function (independent of path, ΔU_cyclic = 0). Heat (Q) and Work (W) are path functions (path-dependent, represented by areas on state diagrams).',
    'Work Done by Gas: ΔW = P dV. Graphically, work done during any thermodynamic process equals the area under the curve on a P-V diagram.'
  ],

  importantTerms: [
    {
      term: 'Thermodynamic System',
      definition: 'A specific macroscopically defined quantity of matter enclosed within boundary walls, separated from surroundings.'
    },
    {
      term: 'Diathermic Boundary',
      definition: 'A heat-conducting wall that permits energy transfer as heat between system and surroundings until thermal equilibrium is attained.'
    },
    {
      term: 'Adiabatic Boundary',
      definition: 'A perfectly thermally insulated wall that completely prevents heat exchange (ΔQ = 0) between system and surroundings.'
    },
    {
      term: 'State Function',
      definition: 'A thermodynamic property (like P, V, T, U) whose change depends only on initial and final states, not on the path taken (ΔU = U_final - U_initial).'
    },
    {
      term: 'Path Function',
      definition: 'A quantity (like Heat Q and Work W) whose magnitude depends on the specific path or process followed during transformation.'
    },
    {
      term: 'Quasi-Static Process',
      definition: 'An infinitely slow process in which the system remains infinitely close to thermodynamic equilibrium at every intermediate instant.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Thermodynamic Equilibrium & Zeroth Law of Thermodynamics',
      paragraphs: [
        'A thermodynamic system is characterized by macroscopic state variables: Pressure (P), Volume (V), Temperature (T), and Amount of substance (n).',
        'Thermodynamic Equilibrium requires three simultaneous conditions:',
        '1. Thermal Equilibrium: Temperature is uniform throughout system and equals surroundings.',
        '2. Mechanical Equilibrium: Pressure is uniform and no net unbalanced forces exist.',
        '3. Chemical Equilibrium: Chemical composition remains constant over time with no internal reactions or diffusion.',
        'Zeroth Law Statement: "If systems A and B are in thermal equilibrium with C separately (T_A = T_C and T_B = T_C), then A and B are in thermal equilibrium with each other (T_A = T_B)."',
        'NEET Significance: The Zeroth Law forms the physical basis for thermometry — defining Temperature as the fundamental property that determines whether systems are in thermal equilibrium.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 200" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Systems A, B, C -->
          <rect x="50" y="40" width="100" height="60" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <text x="100" y="75" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">System A</text>
          
          <rect x="50" y="120" width="100" height="60" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <text x="100" y="155" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">System B</text>

          <rect x="280" y="80" width="110" height="80" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
          <text x="335" y="125" fill="#10b981" font-size="14" font-weight="bold" text-anchor="middle">System C</text>

          <!-- Heat transfer lines -->
          <line x1="150" y1="70" x2="280" y2="100" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4"/>
          <text x="215" y="75" fill="#f59e0b" font-size="10" text-anchor="middle">T_A = T_C</text>

          <line x1="150" y1="150" x2="280" y2="140" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4"/>
          <text x="215" y="160" fill="#f59e0b" font-size="10" text-anchor="middle">T_B = T_C</text>

          <!-- Conclusion arrow -->
          <path d="M 100 100 Q 120 110 100 120" fill="none" stroke="#a855f7" stroke-width="2.5" marker-end="url(#arrow)"/>
          <text x="20" y="115" fill="#a855f7" font-size="11" font-weight="bold">⇒ T_A = T_B</text>
        </svg>`,
        caption: 'Zeroth Law: Thermal equilibrium between (A,C) and (B,C) guarantees T_A = T_B.'
      }
    },
    {
      heading: '2. Internal Energy (U), Heat (Q), and Work (W)',
      paragraphs: [
        'Internal Energy (U): Total internal microscopic energy of all molecules in a gas.',
        '• For an Ideal Gas: Intermolecular forces are zero, so internal potential energy is zero. Internal energy is strictly kinetic energy depending purely on Temperature: U = (f/2) n R T.',
        '• Change in Internal Energy: ΔU = n C_v ΔT = (f/2) n R ΔT = (P_2 V_2 - P_1 V_1) / (γ - 1). This holds true for ANY thermodynamic process (isothermal, isobaric, isochoric, adiabatic).',
        'Heat (Q): Energy transferred across system boundary due to a temperature difference.',
        'Work (W): Energy transferred through mechanical force acting through a displacement.',
        'Work done during volume expansion dV: dW = F dx = (P · A) dx = P dV.',
        'Total Work: W = ∫ P dV from V_1 to V_2. On a P-V graph, W equals the area bounded by the curve, the V-axis, and vertical lines V = V_1, V = V_2.'
      ]
    },
    {
      heading: '3. First Law of Thermodynamics (FLOT) & Sign Conventions',
      paragraphs: [
        'Statement: "The heat ΔQ added to a system is equal to the sum of change in its internal energy ΔU and work done ΔW by the system on its surroundings."',
        'Mathematical Formula: ΔQ = ΔU + ΔW',
        'CRITICAL NEET SIGN CONVENTION (Physics Standard):',
        '1. Heat (ΔQ): Positive (+ΔQ) when heat is absorbed by system. Negative (-ΔQ) when heat is released by system.',
        '2. Work (ΔW): Positive (+ΔW) when work is done BY system (expansion, V_2 > V_1). Negative (-ΔW) when work is done ON system (compression, V_2 < V_1).',
        '3. Internal Energy (ΔU): Positive (+ΔU) when temperature increases (T_2 > T_1). Negative (-ΔU) when temperature decreases (T_2 < T_1). Zero (ΔU = 0) for isothermal process or complete cyclic process.',
        'Cyclic Process: Initial state = Final state ⇒ ΔU_net = 0. From FLOT: Q_net = W_net. In a P-V loop, clockwise loop gives positive net work done BY gas; counter-clockwise loop gives negative net work (work done ON gas).'
      ]
    }
  ],

  formulae: [
    {
      title: 'First Law Equation',
      formulaName: 'First Law of Thermodynamics',
      formula: 'ΔQ = ΔU + ΔW',
      meaning: 'Energy conservation in thermodynamic energy transfers.',
      variables: 'ΔQ = Heat added to system (J or cal), ΔU = Change in internal energy (J), ΔW = Work done by system (J)',
      whenToUse: 'Use in any thermodynamic state change to relate heat, work, and internal energy.'
    },
    {
      title: 'Internal Energy Change',
      formulaName: 'Change in Internal Energy for Ideal Gas',
      formula: 'ΔU = n C_v ΔT = \\frac{f}{2} n R ΔT = \\frac{P_2 V_2 - P_1 V_1}{\\gamma - 1}',
      meaning: 'Calculates internal energy variation regardless of path.',
      variables: 'n = moles, C_v = molar heat capacity at constant volume, f = degrees of freedom, γ = C_p/C_v',
      whenToUse: 'ALWAYS applicable to calculate ΔU for ideal gas in any process.'
    },
    {
      title: 'General Work Expression',
      formulaName: 'Work Done by Gas',
      formula: 'W = \\int_{V_1}^{V_2} P \\, dV',
      meaning: 'Mechanical work done during volume change.',
      variables: 'P = pressure, V_1 = initial volume, V_2 = final volume',
      whenToUse: 'Calculates area under P-V curve to determine work done.'
    }
  ],

  neetImportantPoints: [
    '🔥 Internal Energy (U) of an ideal gas is strictly a state function and depends ONLY on Temperature T. It does NOT depend on pressure or volume independently.',
    '🔥 ΔU = n C_v ΔT is valid for ALL thermodynamic processes (isothermal, adiabatic, isobaric, isochoric).',
    '🔥 In a cyclic process, the system returns to its initial state, so ΔU_cyclic = 0 and Q_net = W_net.',
    '🔥 On a P-V graph, area enclosed inside a closed cyclic loop represents net work done. Clockwise cycle = positive work (+W); Counter-clockwise cycle = negative work (-W).',
    '🔥 Free Expansion into vacuum: System expands into evacuated chamber with no external pressure (P_ext = 0). Here W = 0 and Q = 0, so ΔU = 0 and temperature remains constant for ideal gas.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing Physics and Chemistry sign conventions for Work (W).',
      correctFact: 'In Physics, W is work done BY system (+W = expansion). In Chemistry, W is work done ON system (+W = compression, ΔU = Q + W). For NEET Physics, always use ΔQ = ΔU + ΔW.',
      whyItMattersForNEET: 'Using the chemistry sign convention in physics numericals reverses signs and leads to negative mark traps.'
    },
    {
      commonConfusion: 'Believing ΔU = n C_v ΔT applies only to isochoric processes.',
      correctFact: 'Since U is a state function depending only on temperature T, ΔU = n C_v ΔT applies to EVERY thermodynamic process for an ideal gas.',
      whyItMattersForNEET: 'Students incorrectly try to use C_p to calculate ΔU in isobaric expansion.'
    },
    {
      commonConfusion: 'Assuming Heat (Q) and Work (W) are state functions.',
      correctFact: 'Heat and Work depend on the path taken between initial and final states, making them path functions. Only internal energy U is a state function.',
      whyItMattersForNEET: 'Key conceptual MCQs test whether Q, W, or U are path-dependent.'
    }
  ],

  quickRevision: [
    'Zeroth Law defines Temperature T and thermal equilibrium.',
    'First Law (FLOT): ΔQ = ΔU + ΔW (Conservation of Energy).',
    'Ideal Gas Internal Energy: U = (f/2) n R T; ΔU = n C_v ΔT.',
    'Work done BY gas = ∫ P dV = Area under P-V curve.',
    'Cyclic process: ΔU = 0 ⇒ Q_net = W_net = Area enclosed by loop.',
    'Clockwise P-V loop = Work done BY gas (+W); Counter-clockwise P-V loop = Work done ON gas (-W).',
    'Free expansion into vacuum: W = 0, Q = 0 ⇒ ΔU = 0, ΔT = 0.'
  ],

  practiceQuestions: [
  {
    "id": "p-flot-1",
    "question": "A thermodynamic system undergoes a process in which 300 J of heat is supplied to the gas and the gas expands doing 120 J of work against external pressure. Calculate the change in internal energy of the gas.",
    "options": [
      "180 J",
      "420 J",
      "-180 J",
      "300 J"
    ],
    "correctOption": 0,
    "explanation": "Using First Law of Thermodynamics: ΔQ = ΔU + ΔW. Given ΔQ = +300 J (heat supplied) and ΔW = +120 J (work done by gas expansion). ΔU = ΔQ - ΔW = 300 J - 120 J = 180 J. Internal energy increases by 180 J.",
    "difficulty": "Easy",
    "conceptTested": "First Law of Thermodynamics basic sign convention and calculation"
  },
  {
    "id": "p-flot-2",
    "question": "An ideal gas is taken through a cyclic process ABCDA represented on a P-V diagram by a clockwise rectangle with pressure limits P_1 to P_2 and volume limits V_1 to V_2. What is the net heat absorbed by the gas during one complete cycle?",
    "options": [
      "(P_2 - P_1)(V_2 - V_1)",
      "-(P_2 - P_1)(V_2 - V_1)",
      "Zero",
      "2(P_2 - P_1)(V_2 - V_1)"
    ],
    "correctOption": 0,
    "explanation": "For a complete cyclic process, initial state equals final state, so ΔU_net = 0. By First Law, Q_net = W_net. The work done W_net equals the area enclosed by the rectangular loop: Area = (P_2 - P_1)(V_2 - V_1). Since the cycle is clockwise, net work is positive, so Q_net = +(P_2 - P_1)(V_2 - V_1).",
    "difficulty": "Medium",
    "conceptTested": "Cyclic process P-V diagram area and heat exchange"
  },
  {
    "id": "prac-physzerothfirstlaw-3",
    "question": "Regarding Zeroth & First Law of Thermodynamics, which of the following statements correctly resolves a common misconception about \"Confusing Physics and Chemistry sign conventions for Work (W).\"?",
    "options": [
      "In Physics, W is work done BY system (+W = expansion). In Chemistry, W is work done ON system (+W = compression, ΔU = Q + W). For NEET Physics, always use ΔQ = ΔU + ΔW.",
      "Incorrect assumption: Confusing Physics and Chemistry sign conventions for Work (W).",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "In Physics, W is work done BY system (+W = expansion). In Chemistry, W is work done ON system (+W = compression, ΔU = Q + W). For NEET Physics, always use ΔQ = ΔU + ΔW.. Using the chemistry sign convention in physics numericals reverses signs and leads to negative mark traps.",
    "difficulty": "Medium",
    "conceptTested": "Zeroth & First Law of Thermodynamics - Conceptual Clarity"
  },
  {
    "id": "prac-physzerothfirstlaw-4",
    "question": "Regarding Zeroth & First Law of Thermodynamics, which of the following statements correctly resolves a common misconception about \"Believing ΔU = n C_v ΔT applies only to isochoric processes.\"?",
    "options": [
      "Since U is a state function depending only on temperature T, ΔU = n C_v ΔT applies to EVERY thermodynamic process for an ideal gas.",
      "Incorrect assumption: Believing ΔU = n C_v ΔT applies only to isochoric processes.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Since U is a state function depending only on temperature T, ΔU = n C_v ΔT applies to EVERY thermodynamic process for an ideal gas.. Students incorrectly try to use C_p to calculate ΔU in isobaric expansion.",
    "difficulty": "Medium",
    "conceptTested": "Zeroth & First Law of Thermodynamics - Conceptual Clarity"
  },
  {
    "id": "prac-physzerothfirstlaw-5",
    "question": "Regarding Zeroth & First Law of Thermodynamics, which of the following statements correctly resolves a common misconception about \"Assuming Heat (Q) and Work (W) are state functions.\"?",
    "options": [
      "Heat and Work depend on the path taken between initial and final states, making them path functions. Only internal energy U is a state function.",
      "Incorrect assumption: Assuming Heat (Q) and Work (W) are state functions.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Heat and Work depend on the path taken between initial and final states, making them path functions. Only internal energy U is a state function.. Key conceptual MCQs test whether Q, W, or U are path-dependent.",
    "difficulty": "Medium",
    "conceptTested": "Zeroth & First Law of Thermodynamics - Conceptual Clarity"
  },
  {
    "id": "prac-physzerothfirstlaw-6",
    "question": "In the study of Zeroth & First Law of Thermodynamics, what is the exact definition and significance of \"Thermodynamic System\"?",
    "options": [
      "A specific macroscopically defined quantity of matter enclosed within boundary walls, separated from surroundings.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A specific macroscopically defined quantity of matter enclosed within boundary walls, separated from surroundings.. ",
    "difficulty": "Easy",
    "conceptTested": "Thermodynamic System definition"
  },
  {
    "id": "prac-physzerothfirstlaw-7",
    "question": "In the study of Zeroth & First Law of Thermodynamics, what is the exact definition and significance of \"Diathermic Boundary\"?",
    "options": [
      "A heat-conducting wall that permits energy transfer as heat between system and surroundings until thermal equilibrium is attained.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A heat-conducting wall that permits energy transfer as heat between system and surroundings until thermal equilibrium is attained.. ",
    "difficulty": "Easy",
    "conceptTested": "Diathermic Boundary definition"
  },
  {
    "id": "prac-physzerothfirstlaw-8",
    "question": "In the study of Zeroth & First Law of Thermodynamics, what is the exact definition and significance of \"Adiabatic Boundary\"?",
    "options": [
      "A perfectly thermally insulated wall that completely prevents heat exchange (ΔQ = 0) between system and surroundings.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A perfectly thermally insulated wall that completely prevents heat exchange (ΔQ = 0) between system and surroundings.. ",
    "difficulty": "Easy",
    "conceptTested": "Adiabatic Boundary definition"
  },
  {
    "id": "prac-physzerothfirstlaw-9",
    "question": "In the study of Zeroth & First Law of Thermodynamics, what is the exact definition and significance of \"State Function\"?",
    "options": [
      "A thermodynamic property (like P, V, T, U) whose change depends only on initial and final states, not on the path taken (ΔU = U_final - U_initial).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A thermodynamic property (like P, V, T, U) whose change depends only on initial and final states, not on the path taken (ΔU = U_final - U_initial).. ",
    "difficulty": "Easy",
    "conceptTested": "State Function definition"
  },
  {
    "id": "prac-physzerothfirstlaw-10",
    "question": "In the study of Zeroth & First Law of Thermodynamics, what is the exact definition and significance of \"Path Function\"?",
    "options": [
      "A quantity (like Heat Q and Work W) whose magnitude depends on the specific path or process followed during transformation.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A quantity (like Heat Q and Work W) whose magnitude depends on the specific path or process followed during transformation.. ",
    "difficulty": "Easy",
    "conceptTested": "Path Function definition"
  }
],
  pyqs: [
    {
      id: 'pyq-flot-2021',
      year: 2021,
      exam: 'NEET UG 2021',
      question: 'If 100 J of heat is added to a system and the system does 60 J of work, what is the change in internal energy of the system?',
      options: ['40 J', '160 J', '-40 J', '100 J'],
      correctOption: 0,
      explanation: 'According to the First Law of Thermodynamics: ΔQ = ΔU + ΔW. Given heat added ΔQ = +100 J and work done by system ΔW = +60 J. Therefore, ΔU = ΔQ - ΔW = 100 J - 60 J = 40 J.',
      difficulty: 'Easy',
      conceptTested: 'First Law of Thermodynamics (ΔQ = ΔU + ΔW)',
      verified: true
    },
    {
      id: 'pyq-flot-2019',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'The First Law of Thermodynamics is a consequence of the law of conservation of:',
      options: ['Charge', 'Momentum', 'Energy', 'Mass'],
      correctOption: 2,
      explanation: 'The First Law of Thermodynamics states that energy can neither be created nor destroyed; it can only be transformed from one form to another (heat into internal energy and work). Hence, it is a direct statement of the Law of Conservation of Energy.',
      difficulty: 'Easy',
      conceptTested: 'Fundamental principle of First Law of Thermodynamics',
      verified: true
    },
    {
      id: 'pyq-flot-2016',
      year: 2016,
      exam: 'NEET UG 2016',
      question: 'A gas is compressed isothermally to half its initial volume. The amount of work done on the gas is W_1. If the same gas is compressed adiabatically until its volume is halved, the work done on the gas will be W_2. Which of the following statements is correct?',
      options: ['W_2 > W_1', 'W_2 < W_1', 'W_2 = W_1', 'W_2 = 2 W_1'],
      correctOption: 0,
      explanation: 'On a P-V diagram during compression from V to V/2, the adiabatic curve rises more steeply than the isothermal curve because gamma > 1. Therefore, the area under the P-V curve for adiabatic compression is greater than for isothermal compression, meaning W_2 > W_1.',
      difficulty: 'Medium',
      conceptTested: 'Comparison of work done in isothermal and adiabatic compression',
      verified: true
    }
  ]
};
