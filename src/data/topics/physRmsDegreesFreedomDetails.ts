import { DetailedTopicContent } from '../../types/neet';

export const physRmsDegreesFreedomDetails: DetailedTopicContent = {
  topicId: 'phys-rms-degrees-freedom',
  topicName: 'RMS Speed, Degrees of Freedom & Equipartition',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Thermodynamics & Kinetic Theory',
  chapter: 'Kinetic Theory',

  whatIsThisTopic: 'This topic explores the statistical distribution of molecular speeds in gases and the internal energy storage mechanism via degrees of freedom. Key topics include Root Mean Square (RMS) speed, Average speed, Most Probable speed, Maxwell-Boltzmann velocity distribution, translational/rotational/vibrational degrees of freedom for monoatomic, diatomic, and polyatomic gases, Law of Equipartition of Energy, and total internal energy calculations.',

  basicIdea: [
    'Molecular Speeds in Gas: Gas molecules move with a wide range of speeds. Three characteristic speeds describe this distribution: Most Probable Speed (v_mp), Average Speed (v_avg), and Root Mean Square Speed (v_rms).',
    'Root Mean Square Speed (v_rms): Defined as the square root of the mean of squared molecular speeds: v_rms = √(3RT / M) = √(3 k_B T / m) = √(3P / ρ).',
    'Most Probable Speed (v_mp): The speed possessed by the maximum fraction of gas molecules at a given temperature: v_mp = √(2RT / M).',
    'Average Speed (v_avg): Arithmetic mean of molecular speeds: v_avg = √(8RT / πM).',
    'Speed Inequality (RAM Rule): v_rms > v_avg > v_mp. Ratio v_mp : v_avg : v_rms = √2 : √(8/π) : √3 ≈ 1 : 1.128 : 1.225.',
    'Degrees of Freedom (f): The total number of independent coordinates or modes required to specify the position and configuration of a dynamical system completely.',
    'Law of Equipartition of Energy: In thermal equilibrium at temperature T, total energy is equally distributed among all degrees of freedom, each contributing (1/2) k_B T per molecule or (1/2) RT per mole.',
    'Internal Energy (U): Total energy of an ideal gas stored in all its degrees of freedom: U = (f/2) n RT = (f/2) N k_B T.'
  ],

  importantTerms: [
    {
      term: 'RMS Speed (v_rms)',
      definition: 'The square root of the average of the squares of individual molecular speeds, directly determining gas pressure and temperature.'
    },
    {
      term: 'Degrees of Freedom (f)',
      definition: 'The number of independent directions in which a molecule can move or store energy (translational, rotational, vibrational).'
    },
    {
      term: 'Law of Equipartition of Energy',
      definition: 'A fundamental principle stating that each degree of freedom of a gas molecule possesses an average energy of (1/2) k_B T at thermal equilibrium.'
    },
    {
      term: 'Maxwell-Boltzmann Distribution',
      definition: 'A probability density function giving the statistical distribution of molecular speeds in an ideal gas at a given absolute temperature.'
    },
    {
      term: 'Vibrational Mode',
      definition: 'High-temperature energy storage mode involving potential and kinetic energy of oscillation along molecular bond axes, contributing 2 degrees of freedom per mode.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Molecular Speeds & Maxwell-Boltzmann Distribution',
      paragraphs: [
        'Because gas molecules undergo frequent random collisions, individual molecular speeds constantly change. James Clerk Maxwell derived the speed distribution function N(v) dv giving the number of molecules with speeds between v and v + dv.',
        'Key Speed Formulas:',
        '1. RMS Speed: v_rms = √(3RT / M) = √(3 k_B T / m) = √(3P / ρ)',
        '2. Average Speed: v_avg = √(8RT / πM) = √(8 k_B T / πm)',
        '3. Most Probable Speed: v_mp = √(2RT / M) = √(2 k_B T / m)',
        'Important Speed Ratios:',
        '• v_mp : v_avg : v_rms = √2 : √(8/π) : √3 ≈ 1 : 1.128 : 1.225',
        '• Memory Trick (RAM): v_rms is largest, followed by v_avg, then v_mp.',
        'Temperature Dependence: All three speeds are directly proportional to √(T / M). As temperature increases or molar mass decreases, the distribution curve flattens and shifts towards higher speeds.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 220" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Axes -->
          <line x1="50" y1="180" x2="450" y2="180" stroke="#94a3b8" stroke-width="2"/>
          <line x1="50" y1="180" x2="50" y2="20" stroke="#94a3b8" stroke-width="2"/>
          <text x="400" y="200" fill="#94a3b8" font-size="11">Speed (v)</text>
          <text x="15" y="30" fill="#94a3b8" font-size="11">N(v)</text>

          <!-- Distribution Curve -->
          <path d="M 50 180 Q 120 20 200 120 T 430 180" fill="none" stroke="#38bdf8" stroke-width="3"/>

          <!-- Speed Markers -->
          <!-- v_mp -->
          <line x1="120" y1="35" x2="120" y2="180" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4"/>
          <text x="95" y="195" fill="#f59e0b" font-size="10" font-weight="bold">v_mp (√2)</text>

          <!-- v_avg -->
          <line x1="150" y1="65" x2="150" y2="180" stroke="#10b981" stroke-width="2" stroke-dasharray="4"/>
          <text x="140" y="195" fill="#10b981" font-size="10" font-weight="bold">v_avg (√8/π)</text>

          <!-- v_rms -->
          <line x1="180" y1="95" x2="180" y2="180" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
          <text x="180" y="195" fill="#ef4444" font-size="10" font-weight="bold">v_rms (√3)</text>

          <!-- Callout -->
          <rect x="270" y="30" width="170" height="90" fill="#1e293b" stroke="#334155" rx="6"/>
          <text x="280" y="55" fill="#f8fafc" font-size="11" font-weight="bold">RAM Inequality:</text>
          <text x="280" y="75" fill="#38bdf8" font-size="12" font-weight="bold">v_rms &gt; v_avg &gt; v_mp</text>
          <text x="280" y="98" fill="#a7f3d0" font-size="10">v_rms = √(3RT/M)</text>
        </svg>`,
        caption: 'Maxwell-Boltzmann Speed Distribution Curve highlighting relative positions of v_mp, v_avg, and v_rms.'
      }
    },
    {
      heading: '2. Degrees of Freedom (f) for Different Gas Molecules',
      paragraphs: [
        'The degree of freedom (f) represents the total number of independent squared terms appearing in the expression for molecular energy.',
        '1. Monoatomic Gas (He, Ne, Ar):',
        '• 3 translational degrees of freedom (x, y, z motion).',
        '• Rotational inertia is negligible because mass is concentrated at a point center.',
        '• Total f = 3.',
        '2. Diatomic Gas (H₂, O₂, N₂, CO) at Room Temperature:',
        '• 3 translational + 2 rotational degrees of freedom (rotation about 2 axes perpendicular to molecular bond).',
        '• Total f = 5.',
        '3. Diatomic Gas at High Temperature (> 750 K):',
        '• Vibrational mode activates, adding 1 kinetic + 1 potential term = 2 vibrational degrees of freedom.',
        '• Total f = 5 + 2 = 7.',
        '4. Polyatomic Non-Linear Gas (H₂O, NH₃, CH₄):',
        '• 3 translational + 3 rotational degrees of freedom.',
        '• Total f = 6 (at room temperature).'
      ]
    },
    {
      heading: '3. Law of Equipartition & Total Internal Energy',
      paragraphs: [
        'According to the Equipartition Theorem, for a gas in thermal equilibrium at temperature T:',
        '• Energy per single molecule per degree of freedom = (1/2) k_B T.',
        '• Energy per mole per degree of freedom = (1/2) R T.',
        'Average Energy per Molecule for a gas with f degrees of freedom:',
        'e_avg = f × (1/2) k_B T = (f / 2) k_B T.',
        'Total Internal Energy U for n moles of an ideal gas:',
        'U = n × N_A × e_avg = n × (f / 2) R T.',
        'Important Consequence for Ideal Gas: Internal energy U depends ONLY on temperature T and degrees of freedom f. In an isothermal process (ΔT = 0), ΔU = 0.'
      ]
    }
  ],

  formulae: [
    {
      title: 'RMS Speed Formulae',
      formula: 'v_{rms} = sqrt{frac{3RT}{M}} = sqrt{frac{3 k_B T}{m}} = sqrt{frac{3P}{rho}}',
      variables: 'R = 8.314, T = Kelvin temp, M = molar mass (kg/mol), k_B = 1.38 × 10⁻²³, m = molecule mass (kg), P = pressure, ρ = density'
    },
    {
      title: 'Speed Comparison & Ratio',
      formula: 'v_{mp} : v_{avg} : v_{rms} = sqrt{2} : sqrt{frac{8}{pi}} : sqrt{3} approx 1 : 1.128 : 1.225',
      variables: 'v_mp = √(2RT/M), v_avg = √(8RT/πM), v_rms = √(3RT/M)',
      note: 'Memory mnemonic: RAM (v_rms > v_avg > v_mp).'
    },
    {
      title: 'Degrees of Freedom (f)',
      formula: 'f_{mono} = 3, quad f_{dia, rigid} = 5, quad f_{dia, vib} = 7, quad f_{poly, non-linear} = 6',
      variables: 'f = degrees of freedom'
    },
    {
      title: 'Total Internal Energy of Ideal Gas',
      formula: 'U = frac{f}{2} n R T = frac{f}{2} N k_B T',
      variables: 'f = degrees of freedom, n = moles, R = gas constant, T = Kelvin temp'
    }
  ],

  neetImportantPoints: [
    'v_rms is directly proportional to √(T) and inversely proportional to √(M). For a given gas, v₂/v₁ = √(T₂/T₁).',
    'To DOUBLE the RMS speed of a gas, its absolute temperature T must be multiplied by 4 (since v_rms ∝ √T).',
    'For escape velocity problems: if RMS speed equals Earth escape velocity (11.2 km/s), T = (m v_esc²) / (3 k_B).',
    'Vibrational degree of freedom contributes TWO units to f (1 potential + 1 kinetic), contributing k_B T energy per molecule.',
    'Internal energy U of an ideal gas depends ONLY on absolute temperature T, NOT on volume V or pressure P independently.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing "increased by 3 times" with "increased to 3 times" in temperature calculations.',
      correctFact: 'If v_rms is "increased BY 3 times", new speed v₂ = v₁ + 3v₁ = 4v₁. If it is "increased TO 3 times", v₂ = 3v₁.',
      whyItMattersForNEET: 'Direct trap tested in NEET 2023 Physics!'
    },
    {
      commonConfusion: 'Plugging molar mass M in grams/mol into v_rms = √(3RT/M).',
      correctFact: 'Molar mass M MUST be converted to SI units (kg/mol)! For O₂, M = 32 g/mol = 32 × 10⁻³ kg/mol.',
      whyItMattersForNEET: 'Using grams leads to a 10³ factor calculation error in NEET options.'
    },
    {
      commonConfusion: 'Thinking rotational degrees of freedom apply to monoatomic gases.',
      correctFact: 'Monoatomic gases have negligible moment of inertia (point mass), so rotational energy is zero. f = 3 always.',
      whyItMattersForNEET: 'Fundamental conceptual question.'
    }
  ],

  quickRevision: [
    'v_rms = √(3RT/M) = √(3P/ρ)',
    'v_mp = √(2RT/M), v_avg = √(8RT/πM)',
    'RAM Rule: v_rms > v_avg > v_mp',
    'f_mono = 3, f_dia = 5 (rigid) or 7 (vib)',
    'Equipartition: (1/2) k_B T per degree of freedom per molecule',
    'Internal Energy: U = (f/2) n RT'
  ],

  practiceQuestions: [
  {
    "id": "rms-p1",
    "question": "At what temperature will the RMS speed of Hydrogen molecules be equal to the RMS speed of Oxygen molecules at 47°C?",
    "options": [
      "20 K",
      "80 K",
      "-253°C",
      "-193°C"
    ],
    "correctOption": 0,
    "explanation": "v_rms ∝ √(T / M). Given v_rms(H₂) = v_rms(O₂). So √(T_H2 / M_H2) = √(T_O2 / M_O2) ⇒ T_H2 / 2 = (47 + 273) / 32 = 320 / 32 = 10. Thus T_H2 = 2 × 10 = 20 K."
  },
  {
    "id": "prac-physrmsdegreesfreedom-2",
    "question": "Regarding RMS Speed, Degrees of Freedom & Equipartition, which of the following statements correctly resolves a common misconception about \"Confusing \"increased by 3 times\" with \"increased to 3 times\" in temperature calculations.\"?",
    "options": [
      "If v_rms is \"increased BY 3 times\", new speed v₂ = v₁ + 3v₁ = 4v₁. If it is \"increased TO 3 times\", v₂ = 3v₁.",
      "Incorrect assumption: Confusing \"increased by 3 times\" with \"increased to 3 times\" in temperature calculations.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "If v_rms is \"increased BY 3 times\", new speed v₂ = v₁ + 3v₁ = 4v₁. If it is \"increased TO 3 times\", v₂ = 3v₁.. Direct trap tested in NEET 2023 Physics!",
    "difficulty": "Medium",
    "conceptTested": "RMS Speed, Degrees of Freedom & Equipartition - Conceptual Clarity"
  },
  {
    "id": "prac-physrmsdegreesfreedom-3",
    "question": "Regarding RMS Speed, Degrees of Freedom & Equipartition, which of the following statements correctly resolves a common misconception about \"Plugging molar mass M in grams/mol into v_rms = √(3RT/M).\"?",
    "options": [
      "Molar mass M MUST be converted to SI units (kg/mol)! For O₂, M = 32 g/mol = 32 × 10⁻³ kg/mol.",
      "Incorrect assumption: Plugging molar mass M in grams/mol into v_rms = √(3RT/M).",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Molar mass M MUST be converted to SI units (kg/mol)! For O₂, M = 32 g/mol = 32 × 10⁻³ kg/mol.. Using grams leads to a 10³ factor calculation error in NEET options.",
    "difficulty": "Medium",
    "conceptTested": "RMS Speed, Degrees of Freedom & Equipartition - Conceptual Clarity"
  },
  {
    "id": "prac-physrmsdegreesfreedom-4",
    "question": "Regarding RMS Speed, Degrees of Freedom & Equipartition, which of the following statements correctly resolves a common misconception about \"Thinking rotational degrees of freedom apply to monoatomic gases.\"?",
    "options": [
      "Monoatomic gases have negligible moment of inertia (point mass), so rotational energy is zero. f = 3 always.",
      "Incorrect assumption: Thinking rotational degrees of freedom apply to monoatomic gases.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Monoatomic gases have negligible moment of inertia (point mass), so rotational energy is zero. f = 3 always.. Fundamental conceptual question.",
    "difficulty": "Medium",
    "conceptTested": "RMS Speed, Degrees of Freedom & Equipartition - Conceptual Clarity"
  },
  {
    "id": "prac-physrmsdegreesfreedom-5",
    "question": "In the study of RMS Speed, Degrees of Freedom & Equipartition, what is the exact definition and significance of \"RMS Speed (v_rms)\"?",
    "options": [
      "The square root of the average of the squares of individual molecular speeds, directly determining gas pressure and temperature.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The square root of the average of the squares of individual molecular speeds, directly determining gas pressure and temperature.. ",
    "difficulty": "Easy",
    "conceptTested": "RMS Speed (v_rms) definition"
  },
  {
    "id": "prac-physrmsdegreesfreedom-6",
    "question": "In the study of RMS Speed, Degrees of Freedom & Equipartition, what is the exact definition and significance of \"Degrees of Freedom (f)\"?",
    "options": [
      "The number of independent directions in which a molecule can move or store energy (translational, rotational, vibrational).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The number of independent directions in which a molecule can move or store energy (translational, rotational, vibrational).. ",
    "difficulty": "Easy",
    "conceptTested": "Degrees of Freedom (f) definition"
  },
  {
    "id": "prac-physrmsdegreesfreedom-7",
    "question": "In the study of RMS Speed, Degrees of Freedom & Equipartition, what is the exact definition and significance of \"Law of Equipartition of Energy\"?",
    "options": [
      "A fundamental principle stating that each degree of freedom of a gas molecule possesses an average energy of (1/2) k_B T at thermal equilibrium.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A fundamental principle stating that each degree of freedom of a gas molecule possesses an average energy of (1/2) k_B T at thermal equilibrium.. ",
    "difficulty": "Easy",
    "conceptTested": "Law of Equipartition of Energy definition"
  },
  {
    "id": "prac-physrmsdegreesfreedom-8",
    "question": "In the study of RMS Speed, Degrees of Freedom & Equipartition, what is the exact definition and significance of \"Maxwell-Boltzmann Distribution\"?",
    "options": [
      "A probability density function giving the statistical distribution of molecular speeds in an ideal gas at a given absolute temperature.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A probability density function giving the statistical distribution of molecular speeds in an ideal gas at a given absolute temperature.. ",
    "difficulty": "Easy",
    "conceptTested": "Maxwell-Boltzmann Distribution definition"
  },
  {
    "id": "prac-physrmsdegreesfreedom-9",
    "question": "In the study of RMS Speed, Degrees of Freedom & Equipartition, what is the exact definition and significance of \"Vibrational Mode\"?",
    "options": [
      "High-temperature energy storage mode involving potential and kinetic energy of oscillation along molecular bond axes, contributing 2 degrees of freedom per mode.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "High-temperature energy storage mode involving potential and kinetic energy of oscillation along molecular bond axes, contributing 2 degrees of freedom per mode.. ",
    "difficulty": "Easy",
    "conceptTested": "Vibrational Mode definition"
  },
  {
    "id": "prac-physrmsdegreesfreedom-10",
    "question": "Which of the following is a key NCERT statement regarding RMS Speed, Degrees of Freedom & Equipartition?",
    "options": [
      "v_rms = √(3RT/M) = √(3P/ρ)",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: v_rms = √(3RT/M) = √(3P/ρ)",
    "difficulty": "Easy",
    "conceptTested": "RMS Speed, Degrees of Freedom & Equipartition NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-rms-1',
      examYear: 'NEET 2023',
      question: 'The temperature of a gas is -50°C. To what temperature should the gas be heated so that its RMS (Root Mean Square) speed is increased by 3 times?',
      options: [
        '3295°C',
        '3097°C',
        '223°C',
        '669°C'
      ],
      correctOption: 0,
      explanation: 'Initial temperature T₁ = -50 + 273 = 223 K. "Increased BY 3 times" implies new speed v₂ = v₁ + 3v₁ = 4v₁. Since v_rms ∝ √T, we have v₂ / v₁ = 4 = √(T₂ / 223). Squaring both sides: 16 = T₂ / 223 ⇒ T₂ = 16 × 223 = 3568 K. Converting to Celsius: T₂ = 3568 - 273 = 3295°C.',
      conceptTested: 'RMS speed temperature dependence and proportional reasoning',
      difficulty: 'Medium'
    },
    {
      id: 'pyq-rms-2',
      examYear: 'NEET 2018',
      question: 'At what temperature will the rms speed of oxygen molecules become just sufficient for escaping from the Earth\'s atmosphere? (Given: Mass of oxygen molecule m = 2.76 × 10⁻²⁶ kg, Boltzmann\'s constant k_B = 1.38 × 10⁻²³ J K⁻¹, Earth escape velocity v_esc = 11.2 km/s)',
      options: [
        '1.254 × 10⁴ K',
        '2.508 × 10⁴ K',
        '5.016 × 10⁴ K',
        '8.360 × 10⁴ K'
      ],
      correctOption: 3,
      explanation: 'Condition for escape: v_rms = v_esc = 11.2 km/s = 11.2 × 10³ m/s. Formula: v_rms = √(3 k_B T / m) ⇒ T = (m v_esc²) / (3 k_B). Substitute values: T = [2.76 × 10⁻²⁶ × (11.2 × 10³)²] / [3 × 1.38 × 10⁻²³] = [2.76 × 125.44 × 10⁻²⁰] / [4.14 × 10⁻²³] = 8.360 × 10⁴ K.',
      conceptTested: 'RMS speed calculation and escape velocity condition',
      difficulty: 'Medium'
    }
  ]
};
