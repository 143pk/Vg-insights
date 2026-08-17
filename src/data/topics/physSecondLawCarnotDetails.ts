import { DetailedTopicContent } from '../../types/neet';

export const physSecondLawCarnotDetails: DetailedTopicContent = {
  topicId: 'phys-second-law-carnot',
  topicName: 'Second Law of Thermodynamics & Carnot Engine',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Thermodynamics & Kinetic Theory',
  chapter: 'Thermodynamics',

  whatIsThisTopic: 'Second Law of Thermodynamics & Carnot Engine addresses the direction of heat flow, limitations of energy conversion, heat engines, refrigerators, coefficient of performance, and the ideal reversible Carnot cycle. It provides the fundamental theoretical limit for thermal efficiency (η = 1 - T_2/T_1), governing high-yield NEET UG Physics numerical calculations.',

  basicIdea: [
    'Limitations of First Law: The First Law asserts energy conservation but fails to predict direction of spontaneous heat flow (e.g., heat flows spontaneously from hot to cold, never cold to hot) or why 100% conversion of heat into work is impossible.',
    'Kelvin-Planck Statement: "It is impossible to construct an engine operating in a cycle whose sole result is to absorb heat from a single reservoir and convert it completely into work without rejecting heat to a colder sink."',
    'Clausius Statement: "It is impossible to construct a self-acting machine operating in a cycle that transfers heat from a colder body to a hotter body without any external work input."',
    'Heat Engine: A device that absorbs heat Q_1 from a high-temperature source T_1, converts a portion into mechanical work W = Q_1 - Q_2, and rejects remaining heat Q_2 to a low-temperature sink T_2. Thermal efficiency η = W / Q_1 = 1 - Q_2 / Q_1.',
    'Refrigerator / Heat Pump: A heat engine operating in reverse. It extracts heat Q_2 from a cold reservoir at T_2 using external work input W, and rejects heat Q_1 = Q_2 + W to a warmer reservoir at T_1. Coefficient of Performance (COP, β) = Q_2 / W = Q_2 / (Q_1 - Q_2).',
    'Carnot Engine & Cycle: An ideal reversible heat engine consisting of four reversible stages: 1) Isothermal Expansion at T_1, 2) Adiabatic Expansion from T_1 to T_2, 3) Isothermal Compression at T_2, 4) Adiabatic Compression from T_2 to T_1. Efficiency depends ONLY on absolute temperatures: η_Carnot = 1 - T_2 / T_1.',
    'Carnot Theorem: No engine operating between two given temperatures T_1 and T_2 can be more efficient than a Carnot engine operating between the same temperatures.'
  ],

  importantTerms: [
    {
      term: 'Heat Source',
      definition: 'A thermal reservoir at a constant high temperature T_1 from which heat Q_1 is extracted without changing its temperature.'
    },
    {
      term: 'Heat Sink',
      definition: 'A thermal reservoir at a constant lower temperature T_2 into which waste heat Q_2 is dumped without raising its temperature.'
    },
    {
      term: 'Efficiency (η)',
      definition: 'Ratio of net mechanical work output to total heat input: η = W / Q_1 = 1 - Q_2 / Q_1.'
    },
    {
      term: 'Coefficient of Performance (COP, β)',
      definition: 'Measure of refrigerator effectiveness: β = Heat extracted from cold body / Work input = Q_2 / W = Q_2 / (Q_1 - Q_2).'
    },
    {
      term: 'Reversible Process',
      definition: 'A quasi-static process that can be retraced in the reverse direction without leaving any trace or net change in system and surroundings.'
    },
    {
      term: 'Carnot Engine',
      definition: 'A theoretical ideal reversible heat engine operating on the Carnot cycle, providing maximum possible efficiency between two thermal reservoirs.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Heat Engine & Refrigerator Principles',
      paragraphs: [
        'Heat Engine:',
        '• Working substance undergoes a cycle between Source (T_1) and Sink (T_2).',
        '• Absorbs heat Q_1 from Source at T_1 (Kelvin).',
        '• Performs net work output W = Q_1 - Q_2.',
        '• Rejects waste heat Q_2 to Sink at T_2 (Kelvin).',
        '• Efficiency η = W / Q_1 = (Q_1 - Q_2) / Q_1 = 1 - Q_2 / Q_1.',
        '• Since Q_2 > 0 according to Second Law, efficiency η is ALWAYS strictly less than 1 (100%).',
        'Refrigerator / Heat Pump (Reversed Heat Engine):',
        '• Absorbs heat Q_2 from cold interior at T_2 (Kelvin).',
        '• Requires external work input W (e.g., compressor).',
        '• Rejects heat Q_1 = Q_2 + W to warmer room at T_1 (Kelvin).',
        '• Coefficient of Performance: β = Q_2 / W = Q_2 / (Q_1 - Q_2).',
        '• For an ideal Carnot refrigerator: Q_2 / Q_1 = T_2 / T_1 ⇒ β_Carnot = T_2 / (T_1 - T_2).',
        '• Relationship between Efficiency η and COP β: β = (1 - η) / η.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 230" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Source T1 -->
          <rect x="50" y="20" width="160" height="40" rx="6" fill="#ef4444" opacity="0.8"/>
          <text x="130" y="45" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Source (T1 K)</text>

          <!-- Engine Circle -->
          <circle cx="130" cy="115" r="30" fill="#1e293b" stroke="#f59e0b" stroke-width="3"/>
          <text x="130" y="120" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">Engine</text>

          <!-- Sink T2 -->
          <rect x="50" y="170" width="160" height="40" rx="6" fill="#3b82f6" opacity="0.8"/>
          <text x="130" y="195" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Sink (T2 K)</text>

          <!-- Heat Q1 down -->
          <line x1="130" y1="60" x2="130" y2="85" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow)"/>
          <text x="142" y="75" fill="#ef4444" font-size="11" font-weight="bold">Q1</text>

          <!-- Work W right -->
          <line x1="160" y1="115" x2="220" y2="115" stroke="#10b981" stroke-width="3" marker-end="url(#arrow)"/>
          <text x="190" y="105" fill="#10b981" font-size="12" font-weight="bold">W = Q1 - Q2</text>

          <!-- Heat Q2 down -->
          <line x1="130" y1="145" x2="130" y2="170" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow)"/>
          <text x="142" y="162" fill="#3b82f6" font-size="11" font-weight="bold">Q2</text>

          <!-- Refrigerator side divider -->
          <line x1="260" y1="20" x2="260" y2="210" stroke="#475569" stroke-dasharray="4"/>

          <!-- Refrigerator diagram -->
          <rect x="290" y="20" width="160" height="40" rx="6" fill="#ef4444" opacity="0.8"/>
          <text x="370" y="45" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Room (T1 K)</text>

          <circle cx="370" cy="115" r="30" fill="#1e293b" stroke="#a855f7" stroke-width="3"/>
          <text x="370" y="120" fill="#a855f7" font-size="11" font-weight="bold" text-anchor="middle">Fridge</text>

          <rect x="290" y="170" width="160" height="40" rx="6" fill="#3b82f6" opacity="0.8"/>
          <text x="370" y="195" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Inside (T2 K)</text>

          <!-- Work in -->
          <line x1="480" y1="115" x2="400" y2="115" stroke="#10b981" stroke-width="3" marker-end="url(#arrow)"/>
          <text x="435" y="105" fill="#10b981" font-size="11" font-weight="bold">Work W</text>

          <!-- Q2 up -->
          <line x1="370" y1="170" x2="370" y2="145" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow)"/>
          <text x="382" y="162" fill="#3b82f6" font-size="11" font-weight="bold">Q2</text>

          <!-- Q1 up -->
          <line x1="370" y1="85" x2="370" y2="60" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow)"/>
          <text x="382" y="75" fill="#ef4444" font-size="11" font-weight="bold">Q1</text>
        </svg>`,
        caption: 'Schematic comparison of Heat Engine (left) and Refrigerator (right).'
      }
    },
    {
      heading: '2. The Four Stages of the Carnot Cycle',
      paragraphs: [
        'A Carnot Engine uses an ideal gas in a cylinder with frictionless piston and undergoes 4 reversible steps:',
        '1. Step 1: Isothermal Expansion (State 1 → State 2): Cylinder placed on Source at T_1. Gas expands slowly at constant T_1. Heat absorbed Q_1 = W_12 = n R T_1 ln(V_2/V_1).',
        '2. Step 2: Adiabatic Expansion (State 2 → State 3): Cylinder placed on insulating stand. Gas expands rapidly/adiabatically from T_1 to T_2. Q = 0, Work done W_23 = n R (T_1 - T_2) / (γ - 1).',
        '3. Step 3: Isothermal Compression (State 3 → State 4): Cylinder placed on Sink at T_2. Gas compressed slowly at constant T_2. Heat rejected Q_2 = |W_34| = n R T_2 ln(V_3/V_4).',
        '4. Step 4: Adiabatic Compression (State 4 → State 1): Cylinder placed on insulating stand. Gas compressed adiabatically from T_2 back to T_1. Q = 0, Work done W_41 = n R (T_2 - T_1) / (γ - 1).',
        'Carnot Efficiency Derivation:',
        'Since steps 2 and 4 are adiabatic: T_1 V_2^(γ-1) = T_2 V_3^(γ-1) and T_1 V_1^(γ-1) = T_2 V_4^(γ-1) ⇒ V_2/V_1 = V_3/V_4.',
        'Therefore: Q_2 / Q_1 = T_2 / T_1.',
        'Efficiency Formula: η = 1 - Q_2 / Q_1 = 1 - T_2 / T_1.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Carnot Engine Efficiency',
      formulaName: 'Efficiency of Carnot Engine',
      formula: 'η = 1 - \\frac{T_2}{T_1} = \\frac{T_1 - T_2}{T_1}',
      meaning: 'Maximum theoretical thermal efficiency of an engine operating between temperatures T_1 and T_2.',
      variables: 'T_1 = Source temperature in KELVIN, T_2 = Sink temperature in KELVIN (T_1 > T_2)',
      whenToUse: 'Use to find efficiency or source/sink temperatures for Carnot engine.'
    },
    {
      title: 'Heat Engine Work & Heat',
      formulaName: 'General Heat Engine Efficiency',
      formula: 'η = \\frac{W}{Q_1} = \\frac{Q_1 - Q_2}{Q_1} = 1 - \\frac{Q_2}{Q_1}',
      meaning: 'Relates mechanical work output W, absorbed heat Q_1, and rejected heat Q_2.',
      variables: 'W = Work output (J or cal), Q_1 = Heat absorbed from source, Q_2 = Heat rejected to sink',
      whenToUse: 'Use for any general heat engine problem.'
    },
    {
      title: 'Refrigerator COP',
      formulaName: 'Coefficient of Performance (COP)',
      formula: 'β = \\frac{Q_2}{W} = \\frac{Q_2}{Q_1 - Q_2} = \\frac{T_2}{T_1 - T_2}',
      meaning: 'Effectiveness of refrigerator or heat pump in removing heat from cold space.',
      variables: 'T_2 = Inside cold temperature (K), T_1 = Outside room temperature (K), Q_2 = Heat removed',
      whenToUse: 'Use to calculate refrigerator performance or work required for cooling.'
    },
    {
      title: 'Relation between η and β',
      formulaName: 'Efficiency-COP Conversion',
      formula: 'β = \\frac{1 - η}{η}',
      meaning: 'Direct algebraic relation connecting Carnot engine efficiency and reverse refrigerator COP.',
      variables: 'η = engine efficiency (decimal fraction), β = COP',
      whenToUse: 'Use to instantly convert between engine efficiency and refrigerator COP.'
    }
  ],

  neetImportantPoints: [
    '🔥 Temperatures T_1 and T_2 in Carnot efficiency η = 1 - T_2 / T_1 MUST ALWAYS BE CONVERTED TO KELVIN (K = °C + 273).',
    '🔥 Efficiency of a Carnot engine depends ONLY on the source temperature T_1 and sink temperature T_2. It is completely independent of the nature of the working substance (ideal gas, real gas, liquid).',
    '🔥 To INCREASE Carnot efficiency η = 1 - T_2/T_1:',
    '  - Either INCREASE source temperature T_1',
    '  - Or DECREASE sink temperature T_2 (decreasing T_2 by ΔT is more effective than increasing T_1 by the same ΔT).',
    '🔥 A Carnot engine has 100% efficiency (η = 1) ONLY if sink temperature T_2 = 0 K (Absolute Zero), which is physically unattainable according to the Third Law of Thermodynamics.',
    '🔥 If a refrigerator door is left open inside a closed room, the room temperature INCREASES (heats up), because Q_1 = Q_2 + W (heat rejected to room is greater than heat absorbed from fridge).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Plugging Celsius values directly into η = 1 - T_2 / T_1.',
      correctFact: 'Never use Celsius directly! For example, if T_1 = 327°C and T_2 = 27°C, T_1 = 600 K and T_2 = 300 K. η = 1 - 300/600 = 50%. (Using Celsius 1 - 27/327 would give 91.7%, which is WRONG).',
      whyItMattersForNEET: 'Direct Celsius substitution is the single most frequent calculation mistake in NEET.'
    },
    {
      commonConfusion: 'Expecting a refrigerator left open to cool the room.',
      correctFact: 'A refrigerator dumps heat Q_1 = Q_2 + W into the room. Since W > 0 (electrical work input), net heat added to the room is positive, causing the room temperature to RISE.',
      whyItMattersForNEET: 'Popular conceptual question in NEET exams.'
    },
    {
      commonConfusion: 'Confusing COP (β) with Efficiency (η).',
      correctFact: 'Efficiency η is always less than 1 (η < 100%). Coefficient of Performance β is usually GREATER than 1 (e.g., β = 5 to 10).',
      whyItMattersForNEET: 'Helps quickly spot impossible answers in MCQs.'
    }
  ],

  quickRevision: [
    'Second Law limits heat-to-work conversion: η < 100%.',
    'Heat Engine Efficiency: η = W / Q_1 = 1 - Q_2 / Q_1.',
    'Carnot Engine Efficiency: η = 1 - T_2 / T_1 (T in Kelvin!).',
    'Refrigerator COP: β = Q_2 / W = T_2 / (T_1 - T_2).',
    'Relation: β = (1 - η) / η.',
    'Carnot cycle: 2 Isothermal + 2 Adiabatic reversible processes.',
    'Leaving fridge door open in sealed room heats up the room.'
  ],

  practiceQuestions: [
  {
    "id": "p-carnot-1",
    "question": "A Carnot engine operates between a source at 400 K and a sink at 300 K. If it absorbs 1200 J of heat from the source in each cycle, calculate the work done per cycle and the heat rejected to the sink.",
    "options": [
      "Work = 300 J, Heat Rejected = 900 J",
      "Work = 400 J, Heat Rejected = 800 J",
      "Work = 900 J, Heat Rejected = 300 J",
      "Work = 600 J, Heat Rejected = 600 J"
    ],
    "correctOption": 0,
    "explanation": "Efficiency η = 1 - T_2 / T_1 = 1 - 300 / 400 = 1/4 = 0.25 (25%). Work done W = η × Q_1 = 0.25 × 1200 J = 300 J. Heat rejected Q_2 = Q_1 - W = 1200 J - 300 J = 900 J.",
    "difficulty": "Easy",
    "conceptTested": "Carnot efficiency and work/heat calculation"
  },
  {
    "id": "p-carnot-2",
    "question": "The efficiency of a Carnot engine is 1/6. When the temperature of the sink is reduced by 62 K, its efficiency doubles. Find the temperature of the source and the sink.",
    "options": [
      "Source = 372 K, Sink = 310 K",
      "Source = 400 K, Sink = 300 K",
      "Source = 310 K, Sink = 248 K",
      "Source = 500 K, Sink = 350 K"
    ],
    "correctOption": 0,
    "explanation": "Initially η_1 = 1 - T_2 / T_1 = 1/6 ⇒ T_2 / T_1 = 5/6. When sink temperature is T_2 - 62, efficiency doubles to 2 × (1/6) = 1/3. So 1 - (T_2 - 62)/T_1 = 1/3 ⇒ (T_2 - 62)/T_1 = 2/3. Subtracting the two equations: (T_2 / T_1) - (T_2 - 62)/T_1 = 5/6 - 2/3 = 1/6 ⇒ 62 / T_1 = 1/6 ⇒ T_1 = 372 K. Then T_2 = (5/6) × 372 = 310 K.",
    "difficulty": "Hard",
    "conceptTested": "Two-variable Carnot efficiency numerical problem"
  },
  {
    "id": "prac-physsecondlawcarnot-3",
    "question": "Regarding Second Law of Thermodynamics & Carnot Engine, which of the following statements correctly resolves a common misconception about \"Plugging Celsius values directly into η = 1 - T_2 / T_1.\"?",
    "options": [
      "Never use Celsius directly! For example, if T_1 = 327°C and T_2 = 27°C, T_1 = 600 K and T_2 = 300 K. η = 1 - 300/600 = 50%. (Using Celsius 1 - 27/327 would give 91.7%, which is WRONG).",
      "Incorrect assumption: Plugging Celsius values directly into η = 1 - T_2 / T_1.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Never use Celsius directly! For example, if T_1 = 327°C and T_2 = 27°C, T_1 = 600 K and T_2 = 300 K. η = 1 - 300/600 = 50%. (Using Celsius 1 - 27/327 would give 91.7%, which is WRONG).. Direct Celsius substitution is the single most frequent calculation mistake in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Second Law of Thermodynamics & Carnot Engine - Conceptual Clarity"
  },
  {
    "id": "prac-physsecondlawcarnot-4",
    "question": "Regarding Second Law of Thermodynamics & Carnot Engine, which of the following statements correctly resolves a common misconception about \"Expecting a refrigerator left open to cool the room.\"?",
    "options": [
      "A refrigerator dumps heat Q_1 = Q_2 + W into the room. Since W > 0 (electrical work input), net heat added to the room is positive, causing the room temperature to RISE.",
      "Incorrect assumption: Expecting a refrigerator left open to cool the room.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "A refrigerator dumps heat Q_1 = Q_2 + W into the room. Since W > 0 (electrical work input), net heat added to the room is positive, causing the room temperature to RISE.. Popular conceptual question in NEET exams.",
    "difficulty": "Medium",
    "conceptTested": "Second Law of Thermodynamics & Carnot Engine - Conceptual Clarity"
  },
  {
    "id": "prac-physsecondlawcarnot-5",
    "question": "Regarding Second Law of Thermodynamics & Carnot Engine, which of the following statements correctly resolves a common misconception about \"Confusing COP (β) with Efficiency (η).\"?",
    "options": [
      "Efficiency η is always less than 1 (η < 100%). Coefficient of Performance β is usually GREATER than 1 (e.g., β = 5 to 10).",
      "Incorrect assumption: Confusing COP (β) with Efficiency (η).",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Efficiency η is always less than 1 (η < 100%). Coefficient of Performance β is usually GREATER than 1 (e.g., β = 5 to 10).. Helps quickly spot impossible answers in MCQs.",
    "difficulty": "Medium",
    "conceptTested": "Second Law of Thermodynamics & Carnot Engine - Conceptual Clarity"
  },
  {
    "id": "prac-physsecondlawcarnot-6",
    "question": "In the study of Second Law of Thermodynamics & Carnot Engine, what is the exact definition and significance of \"Heat Source\"?",
    "options": [
      "A thermal reservoir at a constant high temperature T_1 from which heat Q_1 is extracted without changing its temperature.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A thermal reservoir at a constant high temperature T_1 from which heat Q_1 is extracted without changing its temperature.. ",
    "difficulty": "Easy",
    "conceptTested": "Heat Source definition"
  },
  {
    "id": "prac-physsecondlawcarnot-7",
    "question": "In the study of Second Law of Thermodynamics & Carnot Engine, what is the exact definition and significance of \"Heat Sink\"?",
    "options": [
      "A thermal reservoir at a constant lower temperature T_2 into which waste heat Q_2 is dumped without raising its temperature.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A thermal reservoir at a constant lower temperature T_2 into which waste heat Q_2 is dumped without raising its temperature.. ",
    "difficulty": "Easy",
    "conceptTested": "Heat Sink definition"
  },
  {
    "id": "prac-physsecondlawcarnot-8",
    "question": "In the study of Second Law of Thermodynamics & Carnot Engine, what is the exact definition and significance of \"Efficiency (η)\"?",
    "options": [
      "Ratio of net mechanical work output to total heat input: η = W / Q_1 = 1 - Q_2 / Q_1.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Ratio of net mechanical work output to total heat input: η = W / Q_1 = 1 - Q_2 / Q_1.. ",
    "difficulty": "Easy",
    "conceptTested": "Efficiency (η) definition"
  },
  {
    "id": "prac-physsecondlawcarnot-9",
    "question": "In the study of Second Law of Thermodynamics & Carnot Engine, what is the exact definition and significance of \"Coefficient of Performance (COP, β)\"?",
    "options": [
      "Measure of refrigerator effectiveness: β = Heat extracted from cold body / Work input = Q_2 / W = Q_2 / (Q_1 - Q_2).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Measure of refrigerator effectiveness: β = Heat extracted from cold body / Work input = Q_2 / W = Q_2 / (Q_1 - Q_2).. ",
    "difficulty": "Easy",
    "conceptTested": "Coefficient of Performance (COP, β) definition"
  },
  {
    "id": "prac-physsecondlawcarnot-10",
    "question": "In the study of Second Law of Thermodynamics & Carnot Engine, what is the exact definition and significance of \"Reversible Process\"?",
    "options": [
      "A quasi-static process that can be retraced in the reverse direction without leaving any trace or net change in system and surroundings.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A quasi-static process that can be retraced in the reverse direction without leaving any trace or net change in system and surroundings.. ",
    "difficulty": "Easy",
    "conceptTested": "Reversible Process definition"
  }
],
  pyqs: [
    {
      id: 'pyq-carnot-2023',
      year: 2023,
      exam: 'NEET UG 2023',
      question: 'A Carnot engine has an efficiency of 50% when its source is at a temperature of 327°C. The temperature of the sink is:',
      options: ['15°C', '100°C', '200°C', '27°C'],
      correctOption: 3,
      explanation: 'Convert source temperature to Kelvin: T_1 = 327°C + 273 = 600 K. Efficiency η = 50% = 0.50. Formula: η = 1 - T_2 / T_1 ⇒ 0.50 = 1 - T_2 / 600 ⇒ T_2 / 600 = 0.50 ⇒ T_2 = 300 K. Convert back to Celsius: T_2 = 300 - 273 = 27°C.',
      difficulty: 'Easy',
      conceptTested: 'Carnot efficiency temperature calculation and Kelvin conversion',
      verified: true
    },
    {
      id: 'pyq-carnot-2020-1',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'A refrigerator is to maintain eatables kept inside at 9°C. If room temperature is 36°C, the coefficient of performance (COP) is:',
      options: ['9.3', '12.4', '11.2', '10.4'],
      correctOption: 3,
      explanation: 'Convert temperatures to Kelvin: Cold reservoir T_2 = 9°C + 273 = 282 K. Hot reservoir T_1 = 36°C + 273 = 309 K. Coefficient of performance COP (β) = T_2 / (T_1 - T_2) = 282 / (309 - 282) = 282 / 27 ≈ 10.44 ≈ 10.4.',
      difficulty: 'Medium',
      conceptTested: 'Refrigerator coefficient of performance (COP) formula',
      verified: true
    },
    {
      id: 'pyq-carnot-2020-2',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'An ideal gas heat engine operates in a Carnot cycle between 227°C and 127°C. It absorbs 6 × 10⁴ cal of heat at higher temperature. The amount of heat converted to work will be:',
      options: ['4.8 × 10⁴ cal', '3.5 × 10⁴ cal', '1.2 × 10⁴ cal', '2.4 × 10⁴ cal'],
      correctOption: 2,
      explanation: 'Source T_1 = 227°C + 273 = 500 K. Sink T_2 = 127°C + 273 = 400 K. Efficiency η = 1 - T_2 / T_1 = 1 - 400 / 500 = 1 - 0.80 = 0.20 (20%). Heat absorbed Q_1 = 6 × 10⁴ cal. Work done W = η × Q_1 = 0.20 × (6 × 10⁴ cal) = 1.2 × 10⁴ cal.',
      difficulty: 'Easy',
      conceptTested: 'Carnot engine work output from heat absorbed and temperatures',
      verified: true
    }
  ]
};
