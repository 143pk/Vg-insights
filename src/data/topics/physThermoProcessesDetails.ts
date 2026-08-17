import { DetailedTopicContent } from '../../types/neet';

export const physThermoProcessesDetails: DetailedTopicContent = {
  topicId: 'phys-thermo-processes',
  topicName: 'Thermodynamic Processes',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Thermodynamics & Kinetic Theory',
  chapter: 'Thermodynamics',

  whatIsThisTopic: 'Thermodynamic Processes analyzes the specific ways a thermodynamic system transitions between equilibrium states. It covers Isothermal, Adiabatic, Isobaric, Isochoric, and Cyclic processes, focusing on process equations (PV = const, PV^γ = const), work done formulas, heat exchanges, internal energy variations, P-V graph interpretations, and high-yield numerical problem patterns in NEET UG Physics.',

  basicIdea: [
    'Isothermal Process: Occurs at constant temperature (T = const, ΔT = 0). For ideal gas, ΔU = 0. Gas obeys Boyle\'s Law (P_1 V_1 = P_2 V_2). Heat supplied converts entirely into work: Q = W = n R T ln(V_2/V_1).',
    'Adiabatic Process: Occurs with zero heat exchange with surroundings (Q = 0, ΔQ = 0). Gas obeys P V^γ = const, T V^(γ-1) = const, and P^(1-γ) T^γ = const. Work done comes at the expense of internal energy: W = -ΔU = n R (T_1 - T_2) / (γ - 1).',
    'Isobaric Process: Occurs at constant pressure (P = const). Gas obeys Charles\' Law (V/T = const). Work done W = P (V_2 - V_1) = n R ΔT. Heat exchange Q = n C_p ΔT.',
    'Isochoric Process: Occurs at constant volume (V = const, dV = 0). Work done is zero (W = 0). All heat added goes into increasing internal energy: Q = ΔU = n C_v ΔT.',
    'Cyclic Process: System undergoes a series of changes and returns to initial state. Net change in state functions is zero (ΔU = 0, ΔP = 0, ΔV = 0, ΔT = 0). Net work done equals net heat absorbed: W_net = Q_net = Area enclosed by P-V loop.',
    'Comparison of Slopes on P-V Graph: At any given point (P, V), slope of adiabatic curve is γ times steeper than slope of isothermal curve: (dP/dV)_adiabatic = -γ (P/V) vs (dP/dV)_isothermal = -P/V.'
  ],

  importantTerms: [
    {
      term: 'Isothermal Process',
      definition: 'A process in which system temperature remains strictly constant throughout (ΔT = 0). Requires thermally conducting walls and very slow operation.'
    },
    {
      term: 'Adiabatic Process',
      definition: 'A process in which no heat enters or leaves the system (Q = 0). Requires thermally insulating boundaries or extremely rapid execution.'
    },
    {
      term: 'Isobaric Process',
      definition: 'A process conducted at constant pressure (P = const). System is free to expand or contract against constant external pressure.'
    },
    {
      term: 'Isochoric Process',
      definition: 'A process conducted at constant volume (V = const, dV = 0) in a rigid container.'
    },
    {
      term: 'Adiabatic Index (γ)',
      definition: 'Ratio of principal molar specific heats γ = C_p / C_v = 1 + 2/f, where f is degrees of freedom (γ = 5/3 for monatomic, 7/5 for diatomic, 4/3 for non-linear polyatomic).'
    },
    {
      term: 'Mayer\'s Relation',
      definition: 'Universal relation between molar heat capacities of ideal gas: C_p - C_v = R.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Isothermal vs Adiabatic Processes',
      paragraphs: [
        'Isothermal Process:',
        '• Condition: Temperature remains constant (T = const ⇒ ΔT = 0). Container walls must be diathermic (conducting) and process must be infinitely slow.',
        '• Equation of State: P V = const ⇒ P_1 V_1 = P_2 V_2.',
        '• Internal Energy Change: Since T is constant, ΔU = 0.',
        '• First Law Application: ΔQ = ΔU + ΔW ⇒ Q = W.',
        '• Work Done Formula: W_iso = n R T \\ln\\left(\\frac{V_2}{V_1}\\right) = 2.303 n R T \\log_{10}\\left(\\frac{V_2}{V_1}\\right) = 2.303 n R T \\log_{10}\\left(\\frac{P_1}{P_2}\\right).',
        'Adiabatic Process:',
        '• Condition: Zero heat transfer (Q = 0 ⇒ ΔQ = 0). Container walls must be adiabatic (insulating) or process must occur very rapidly (e.g., sudden bursting of tire, sound wave propagation in air).',
        '• Process Relations:',
        '  1. P V^γ = const',
        '  2. T V^(γ-1) = const',
        '  3. P^(1-γ) T^γ = const',
        '• First Law Application: ΔQ = ΔU + ΔW ⇒ 0 = ΔU + W ⇒ W = -ΔU.',
        '• Work Done Formula: W_adia = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1} = \\frac{n R (T_1 - T_2)}{\\gamma - 1}.',
        '• Note on Adiabatic Temperature Change: In adiabatic expansion (V_2 > V_1), work is done BY gas (W > 0), so ΔU < 0 and temperature decreases (gas cools down). In adiabatic compression, gas heats up (T increases).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 220" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Axes -->
          <line x1="60" y1="180" x2="440" y2="180" stroke="#94a3b8" stroke-width="2"/>
          <line x1="60" y1="180" x2="60" y2="20" stroke="#94a3b8" stroke-width="2"/>
          <text x="440" y="200" fill="#94a3b8" font-size="12">Volume (V)</text>
          <text x="15" y="30" fill="#94a3b8" font-size="12">Pressure (P)</text>

          <!-- Initial point A -->
          <circle cx="120" cy="50" r="5" fill="#f59e0b"/>
          <text x="100" y="42" fill="#f59e0b" font-size="12" font-weight="bold">A (P1, V1)</text>

          <!-- Isothermal Curve (Yellow) -->
          <path d="M 120 50 Q 220 120 380 150" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
          <text x="385" y="145" fill="#38bdf8" font-size="11" font-weight="bold">Isothermal (Slope = -P/V)</text>

          <!-- Adiabatic Curve (Red, steeper) -->
          <path d="M 120 50 Q 180 130 320 170" fill="none" stroke="#ef4444" stroke-width="2.5"/>
          <text x="325" y="175" fill="#ef4444" font-size="11" font-weight="bold">Adiabatic (Slope = -γ P/V)</text>
        </svg>`,
        caption: 'P-V Diagram Comparison: Adiabatic expansion curve drops faster and is steeper than Isothermal.'
      }
    },
    {
      heading: '2. Isobaric, Isochoric, and Cyclic Processes Summary',
      paragraphs: [
        'Isobaric Process (Constant Pressure):',
        '• Work Done: W = P (V_2 - V_1) = n R (T_2 - T_1).',
        '• Heat Exchange: Q = n C_p ΔT.',
        '• Internal Energy Change: ΔU = n C_v ΔT.',
        '• Ratio of Work to Heat: W / Q = (n R ΔT) / (n C_p ΔT) = R / C_p = 1 - 1/γ.',
        'Isochoric Process (Constant Volume):',
        '• Work Done: dV = 0 ⇒ W = 0.',
        '• Heat Exchange: Q = ΔU = n C_v ΔT.',
        'Cyclic Process:',
        '• Initial state = Final state ⇒ ΔU = 0.',
        '• Net Heat = Net Work = Enclosed Area of loop on P-V diagram.',
        '• Clockwise loop: Net Work is Positive (+W, expansion area > compression area).',
        '• Counter-clockwise loop: Net Work is Negative (-W).'
      ]
    }
  ],

  formulae: [
    {
      title: 'Isothermal Work',
      formulaName: 'Work Done in Isothermal Process',
      formula: 'W = n R T \\ln\\left(\\frac{V_2}{V_1}\\right) = 2.303 n R T \\log_{10}\\left(\\frac{V_2}{V_1}\\right)',
      meaning: 'Calculates work during constant temperature expansion/compression.',
      variables: 'n = moles, R = 8.314 J/mol·K, T = temperature in K, V_1 = initial volume, V_2 = final volume',
      whenToUse: 'Use when gas expands or compresses at constant temperature.'
    },
    {
      title: 'Adiabatic Work',
      formulaName: 'Work Done in Adiabatic Process',
      formula: 'W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1} = \\frac{n R (T_1 - T_2)}{\\gamma - 1}',
      meaning: 'Calculates work done when heat transfer is zero.',
      variables: 'P_1, V_1, T_1 = initial state; P_2, V_2, T_2 = final state; γ = C_p/C_v',
      whenToUse: 'Use when process is sudden or thermally isolated.'
    },
    {
      title: 'Isobaric Work & Heat',
      formulaName: 'Isobaric Heat and Work',
      formula: 'W = P \\Delta V = n R \\Delta T, \\quad Q = n C_p \\Delta T',
      meaning: 'Energy relations during constant pressure expansion.',
      variables: 'P = constant pressure, ΔV = volume change, C_p = molar heat capacity at constant P',
      whenToUse: 'Use when gas expands against constant atmospheric or piston pressure.'
    }
  ],

  neetImportantPoints: [
    '🔥 Slope of Adiabatic curve on P-V diagram = -γ (P/V) = γ × (Slope of Isothermal curve). Since γ > 1, the adiabatic curve is ALWAYS steeper than the isothermal curve.',
    '🔥 In adiabatic expansion, T decreases (cooling effect). In adiabatic compression, T increases (heating effect).',
    '🔥 For the SAME initial state (P_1, V_1) expanding to the SAME final volume V_2:',
    '  Work done: W_isobaric > W_isothermal > W_adiabatic > W_isochoric (0).',
    '🔥 For the SAME initial state (P_1, V_1) compressed to the SAME final volume V_2:',
    '  Work done magnitude: |W_adiabatic| > |W_isothermal| > |W_isobaric|.',
    '🔥 For an isobaric expansion of an ideal gas, fraction of heat converted into work is W/Q = 1 - 1/γ. For a monatomic gas (γ = 5/3), W/Q = 2/5 (40%) and ΔU/Q = 3/5 (60%).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing adiabatic expansion temperature change with isothermal expansion.',
      correctFact: 'In isothermal expansion, T remains constant (ΔT = 0). In adiabatic expansion, gas does work at the expense of its internal energy, so T MUST decrease (cooling occurs).',
      whyItMattersForNEET: 'Numerical questions frequently test T_2 calculation using T_1 V_1^(γ-1) = T_2 V_2^(γ-1).'
    },
    {
      commonConfusion: 'Forgetting to convert Temperature to Kelvin when applying T V^(γ-1) = const.',
      correctFact: 'All gas thermodynamic relations involving T (such as T_1 V_1^(γ-1) = T_2 V_2^(γ-1)) MUST strictly use absolute temperature in Kelvin (T = °C + 273.15).',
      whyItMattersForNEET: 'Using Celsius values leads directly to wrong option traps in NEET.'
    },
    {
      commonConfusion: 'Thinking work done in an isochoric process is non-zero.',
      correctFact: 'In an isochoric process, volume is constant (dV = 0). Since dW = P dV, work done is STRICTLY ZERO (W = 0).',
      whyItMattersForNEET: 'Saves calculation time in multi-step cycle problems.'
    }
  ],

  quickRevision: [
    'Isothermal: T = const, ΔU = 0, Q = W = n RT ln(V_2/V_1).',
    'Adiabatic: Q = 0, P V^γ = const, W = n R (T_1 - T_2)/(γ - 1) = -ΔU.',
    'Isobaric: P = const, W = P ΔV = n R ΔT, Q = n C_p ΔT.',
    'Isochoric: V = const, W = 0, Q = ΔU = n C_v ΔT.',
    'Slope of Adiabatic = γ × (Slope of Isothermal).',
    'Cyclic process: ΔU = 0, W_net = Q_net = Enclosed P-V Area.',
    'Isobaric fraction: W/Q = (γ - 1)/γ.'
  ],

  practiceQuestions: [
  {
    "id": "p-proc-1",
    "question": "One mole of an ideal gas undergoes an isothermal expansion at 300 K from an initial volume of 2 L to a final volume of 20 L. Calculate the work done by the gas. (Take R = 8.31 J/mol·K, ln(10) = 2.303)",
    "options": [
      "5730 J",
      "2493 J",
      "1150 J",
      "573 J"
    ],
    "correctOption": 0,
    "explanation": "For isothermal process: W = n R T ln(V_2 / V_1) = 2.303 n R T log_10(V_2 / V_1). Substituting n = 1, R = 8.31, T = 300 K, V_2/V_1 = 20/2 = 10: W = 2.303 × 1 × 8.31 × 300 × log_10(10) = 2.303 × 2493 × 1 ≈ 5741 J ≈ 5730 J.",
    "difficulty": "Medium",
    "conceptTested": "Isothermal work done numerical formula"
  },
  {
    "id": "p-proc-2",
    "question": "In an isobaric expansion of a monatomic ideal gas (γ = 5/3), heat Q is supplied to the gas. What fraction of this heat is converted into work done by the gas?",
    "options": [
      "2/5 (40%)",
      "3/5 (60%)",
      "1/2 (50%)",
      "1/3 (33%)"
    ],
    "correctOption": 0,
    "explanation": "In isobaric expansion, W = n R ΔT and Q = n C_p ΔT. Fraction converted into work = W / Q = (n R ΔT) / (n C_p ΔT) = R / C_p = 1 - 1/γ. For monatomic gas γ = 5/3: W/Q = 1 - 3/5 = 2/5 = 0.40 (40%).",
    "difficulty": "Medium",
    "conceptTested": "Fraction of heat converted to work in isobaric process"
  },
  {
    "id": "prac-physthermoprocesses-3",
    "question": "Regarding Thermodynamic Processes, which of the following statements correctly resolves a common misconception about \"Confusing adiabatic expansion temperature change with isothermal expansion.\"?",
    "options": [
      "In isothermal expansion, T remains constant (ΔT = 0). In adiabatic expansion, gas does work at the expense of its internal energy, so T MUST decrease (cooling occurs).",
      "Incorrect assumption: Confusing adiabatic expansion temperature change with isothermal expansion.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "In isothermal expansion, T remains constant (ΔT = 0). In adiabatic expansion, gas does work at the expense of its internal energy, so T MUST decrease (cooling occurs).. Numerical questions frequently test T_2 calculation using T_1 V_1^(γ-1) = T_2 V_2^(γ-1).",
    "difficulty": "Medium",
    "conceptTested": "Thermodynamic Processes - Conceptual Clarity"
  },
  {
    "id": "prac-physthermoprocesses-4",
    "question": "Regarding Thermodynamic Processes, which of the following statements correctly resolves a common misconception about \"Forgetting to convert Temperature to Kelvin when applying T V^(γ-1) = const.\"?",
    "options": [
      "All gas thermodynamic relations involving T (such as T_1 V_1^(γ-1) = T_2 V_2^(γ-1)) MUST strictly use absolute temperature in Kelvin (T = °C + 273.15).",
      "Incorrect assumption: Forgetting to convert Temperature to Kelvin when applying T V^(γ-1) = const.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "All gas thermodynamic relations involving T (such as T_1 V_1^(γ-1) = T_2 V_2^(γ-1)) MUST strictly use absolute temperature in Kelvin (T = °C + 273.15).. Using Celsius values leads directly to wrong option traps in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Thermodynamic Processes - Conceptual Clarity"
  },
  {
    "id": "prac-physthermoprocesses-5",
    "question": "Regarding Thermodynamic Processes, which of the following statements correctly resolves a common misconception about \"Thinking work done in an isochoric process is non-zero.\"?",
    "options": [
      "In an isochoric process, volume is constant (dV = 0). Since dW = P dV, work done is STRICTLY ZERO (W = 0).",
      "Incorrect assumption: Thinking work done in an isochoric process is non-zero.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "In an isochoric process, volume is constant (dV = 0). Since dW = P dV, work done is STRICTLY ZERO (W = 0).. Saves calculation time in multi-step cycle problems.",
    "difficulty": "Medium",
    "conceptTested": "Thermodynamic Processes - Conceptual Clarity"
  },
  {
    "id": "prac-physthermoprocesses-6",
    "question": "In the study of Thermodynamic Processes, what is the exact definition and significance of \"Isothermal Process\"?",
    "options": [
      "A process in which system temperature remains strictly constant throughout (ΔT = 0). Requires thermally conducting walls and very slow operation.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A process in which system temperature remains strictly constant throughout (ΔT = 0). Requires thermally conducting walls and very slow operation.. ",
    "difficulty": "Easy",
    "conceptTested": "Isothermal Process definition"
  },
  {
    "id": "prac-physthermoprocesses-7",
    "question": "In the study of Thermodynamic Processes, what is the exact definition and significance of \"Adiabatic Process\"?",
    "options": [
      "A process in which no heat enters or leaves the system (Q = 0). Requires thermally insulating boundaries or extremely rapid execution.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A process in which no heat enters or leaves the system (Q = 0). Requires thermally insulating boundaries or extremely rapid execution.. ",
    "difficulty": "Easy",
    "conceptTested": "Adiabatic Process definition"
  },
  {
    "id": "prac-physthermoprocesses-8",
    "question": "In the study of Thermodynamic Processes, what is the exact definition and significance of \"Isobaric Process\"?",
    "options": [
      "A process conducted at constant pressure (P = const). System is free to expand or contract against constant external pressure.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A process conducted at constant pressure (P = const). System is free to expand or contract against constant external pressure.. ",
    "difficulty": "Easy",
    "conceptTested": "Isobaric Process definition"
  },
  {
    "id": "prac-physthermoprocesses-9",
    "question": "In the study of Thermodynamic Processes, what is the exact definition and significance of \"Isochoric Process\"?",
    "options": [
      "A process conducted at constant volume (V = const, dV = 0) in a rigid container.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A process conducted at constant volume (V = const, dV = 0) in a rigid container.. ",
    "difficulty": "Easy",
    "conceptTested": "Isochoric Process definition"
  },
  {
    "id": "prac-physthermoprocesses-10",
    "question": "In the study of Thermodynamic Processes, what is the exact definition and significance of \"Adiabatic Index (γ)\"?",
    "options": [
      "Ratio of principal molar specific heats γ = C_p / C_v = 1 + 2/f, where f is degrees of freedom (γ = 5/3 for monatomic, 7/5 for diatomic, 4/3 for non-linear polyatomic).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Ratio of principal molar specific heats γ = C_p / C_v = 1 + 2/f, where f is degrees of freedom (γ = 5/3 for monatomic, 7/5 for diatomic, 4/3 for non-linear polyatomic).. ",
    "difficulty": "Easy",
    "conceptTested": "Adiabatic Index (γ) definition"
  }
],
  pyqs: [
    {
      id: 'pyq-proc-2022',
      year: 2022,
      exam: 'NEET UG 2022',
      question: 'An ideal gas undergoes four different processes from the same initial state as shown in the P-V diagram. Curves 1, 2, 3, and 4 represent Isochoric, Adiabatic, Isothermal, and Isobaric processes respectively. Which curve represents the adiabatic process?',
      options: ['Curve 1', 'Curve 2', 'Curve 3', 'Curve 4'],
      correctOption: 1,
      explanation: 'In a P-V diagram: Curve 1 is vertical (V = const, Isochoric). Curve 4 is horizontal (P = const, Isobaric). Between Curves 2 and 3, both represent expansion, but Curve 2 drops more steeply than Curve 3. Since slope of adiabatic curve (-γ P/V) is steeper than isothermal curve (-P/V), Curve 2 represents the Adiabatic process and Curve 3 represents Isothermal.',
      difficulty: 'Medium',
      conceptTested: 'Identification of thermodynamic processes and slopes on P-V graph',
      verified: true
    },
    {
      id: 'pyq-proc-2019',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'In an adiabatic expansion, the temperature of 1 mole of an ideal monatomic gas (γ = 5/3) decreases from 60 K to 50 K. The work done by the gas in the process is (take R = 8.3 J mol⁻¹ K⁻¹):',
      options: ['166 J', '41.5 J', '83.1 J', '124.5 J'],
      correctOption: 3,
      explanation: 'Work done in adiabatic process: W = n R (T_1 - T_2) / (γ - 1). Given n = 1 mole, T_1 = 60 K, T_2 = 50 K, γ = 5/3, R = 8.3 J/mol·K. W = 1 × 8.3 × (60 - 50) / (5/3 - 1) = (8.3 × 10) / (2/3) = 83 × 1.5 = 124.5 J.',
      difficulty: 'Medium',
      conceptTested: 'Adiabatic work done calculation formula',
      verified: true
    },
    {
      id: 'pyq-proc-2017',
      year: 2017,
      exam: 'NEET UG 2017',
      question: 'A gas is compressed at a constant pressure of 50 N/m² from a volume of 10 m³ to 4 m³. Energy of 100 J is then added to the gas by heating. Its internal energy:',
      options: ['Increases by 400 J', 'Increases by 200 J', 'Decreases by 200 J', 'Increases by 100 J'],
      correctOption: 0,
      explanation: 'Given constant pressure P = 50 N/m², V_1 = 10 m³, V_2 = 4 m³. Work done BY gas W = P (V_2 - V_1) = 50 × (4 - 10) = -300 J (work done ON gas is +300 J). Heat added ΔQ = +100 J. Using First Law: ΔQ = ΔU + ΔW ⇒ 100 = ΔU + (-300) ⇒ ΔU = 100 + 300 = +400 J. Internal energy increases by 400 J.',
      difficulty: 'Medium',
      conceptTested: 'First law application to isobaric compression with heating',
      verified: true
    }
  ]
};
