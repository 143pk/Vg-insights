import { DetailedTopicContent } from '../../types/neet';

export const physEquipartitionMeanFreePathDetails: DetailedTopicContent = {
  topicId: 'phys-equipartition-mean-free-path',
  topicName: 'Specific Heat, Mean Free Path & Applications',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Thermodynamics & Kinetic Theory',
  chapter: 'Kinetic Theory',

  whatIsThisTopic: 'This topic applies the kinetic theory of gases and degrees of freedom to determine the molar specific heat capacities (C_V, C_P), adiabatic exponent (γ = C_P / C_V), properties of gas mixtures, internal energy of gas combinations, and the concept of Mean Free Path (λ). It covers fundamental derivations, Mayer\'s relation, gas mixture formulas, collision dynamics, and exact NEET UG calculation patterns.',

  basicIdea: [
    'Molar Specific Heat Capacity at Constant Volume (C_V): Amount of heat required to raise the temperature of 1 mole of gas by 1 K at constant volume: C_V = (f/2) R.',
    'Molar Specific Heat Capacity at Constant Pressure (C_P): Amount of heat required to raise temperature of 1 mole of gas by 1 K at constant pressure: C_P = C_V + R = (f/2 + 1) R.',
    'Adiabatic Index / Ratio of Specific Heats (γ): γ = C_P / C_V = 1 + (2 / f).',
    'Gas Mixtures: When non-reacting gases are mixed, total internal energy is additive (U_mix = U₁ + U₂). Mixture specific heats follow mole-weighted averages: C_V,mix = (n₁ C_V1 + n₂ C_V2) / (n₁ + n₂).',
    'Mean Free Path (λ): The average distance traveled by a gas molecule between two successive collisions with other gas molecules: λ = 1 / (√2 n π d²), where n is number density and d is molecular diameter.',
    'Dependence of Mean Free Path: λ is inversely proportional to molecular diameter squared (λ ∝ 1/d²) and number density n. In terms of P and T: λ = k_B T / (√2 π d² P).'
  ],

  importantTerms: [
    {
      term: 'Molar Heat Capacity C_V',
      definition: 'Heat capacity per mole at constant volume, representing internal energy increase per Kelvin: C_V = dU / dT = (f/2) R.'
    },
    {
      term: 'Molar Heat Capacity C_P',
      definition: 'Heat capacity per mole at constant pressure, accounting for both internal energy change and expansion work: C_P = C_V + R.'
    },
    {
      term: 'Adiabatic Exponent (γ)',
      definition: 'The ratio of specific heat capacities γ = C_P / C_V, determining the slope of adiabatic processes on PV diagrams.'
    },
    {
      term: 'Mean Free Path (λ)',
      definition: 'The mean distance traversed by a particle between consecutive impact collisions.'
    },
    {
      term: 'Number Density (n)',
      definition: 'Number of gas molecules per unit volume: n = N / V = P / (k_B T).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Specific Heat Capacities & Adiabatic Exponent (γ)',
      paragraphs: [
        'By the Equipartition Theorem, internal energy of 1 mole of gas with f degrees of freedom is U = (f/2) RT.',
        '1. Constant Volume Molar Heat Capacity (C_V):',
        'From First Law dQ = dU + dW. At constant volume (dW = 0), C_V = dU / dT = (f/2) R.',
        '2. Constant Pressure Molar Heat Capacity (C_P):',
        'By Mayer\'s Relation C_P - C_V = R ⇒ C_P = (f/2 + 1) R.',
        '3. Ratio of Specific Heats (γ):',
        'γ = C_P / C_V = [(f/2 + 1) R] / [(f/2) R] = 1 + (2 / f).',
        'Specific Heat Table for Gas Types:',
        '• Monoatomic (f=3): C_V = 1.5 R, C_P = 2.5 R, γ = 5/3 ≈ 1.67',
        '• Diatomic Rigid (f=5): C_V = 2.5 R, C_P = 3.5 R, γ = 7/5 = 1.40',
        '• Diatomic Vibrational (f=7): C_V = 3.5 R, C_P = 4.5 R, γ = 9/7 ≈ 1.29',
        '• Polyatomic Non-Linear (f=6): C_V = 3 R, C_P = 4 R, γ = 4/3 ≈ 1.33'
      ]
    },
    {
      heading: '2. Gas Mixtures & Total Internal Energy',
      paragraphs: [
        'For a non-reacting mixture containing n₁ moles of gas 1 (degrees of freedom f₁) and n₂ moles of gas 2 (degrees of freedom f₂) at temperature T:',
        '1. Total Internal Energy of Mixture:',
        'U_total = U₁ + U₂ = n₁ (f₁ / 2) R T + n₂ (f₂ / 2) R T.',
        '2. Equivalent Molar Heat Capacity at Constant Volume (C_V,mix):',
        'C_V,mix = (n₁ C_V1 + n₂ C_V2) / (n₁ + n₂) = [n₁ (f₁/2) R + n₂ (f₂/2) R] / (n₁ + n₂).',
        '3. Equivalent Molar Heat Capacity at Constant Pressure (C_P,mix):',
        'C_P,mix = C_V,mix + R = (n₁ C_P1 + n₂ C_P2) / (n₁ + n₂).',
        '4. Equivalent Ratio of Specific Heats (γ_mix):',
        'γ_mix = C_P,mix / C_V,mix = (n₁ C_P1 + n₂ C_P2) / (n₁ C_V1 + n₂ C_V2).'
      ]
    },
    {
      heading: '3. Mean Free Path (λ) & Collision Frequency',
      paragraphs: [
        'Molecules in a gas move with high thermal speeds (~500 m/s for O₂ at 300 K), yet gas diffusion is slow. This is because molecules undergo frequent collisions, changing direction randomly.',
        'Derivation & Formula:',
        'Consider a molecule of diameter d moving through stationary target molecules. In time Δt, it sweeps out a collision cylinder of radius d and volume V_cyl = π d² v_avg Δt.',
        'Number of collisions in time Δt = n × V_cyl = n π d² v_avg Δt, where n = N/V is number density.',
        'Mean Free Path λ = (distance traveled) / (number of collisions) = (v_avg Δt) / (n π d² v_avg Δt) = 1 / (n π d²).',
        'Accounting for relative motion of all colliding molecules (average relative speed v_rel = √2 v_avg), the rigorous formula becomes:',
        'λ = 1 / (√2 n π d²).',
        'In terms of Pressure P and Temperature T (using n = P / k_B T):',
        'λ = k_B T / (√2 π d² P).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 220" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Collision Cylinder -->
          <ellipse cx="80" cy="110" rx="20" ry="45" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3"/>
          <ellipse cx="380" cy="110" rx="20" ry="45" fill="none" stroke="#38bdf8" stroke-width="2"/>
          <line x1="80" y1="65" x2="380" y2="65" stroke="#38bdf8" stroke-width="2"/>
          <line x1="80" y1="155" x2="380" y2="155" stroke="#38bdf8" stroke-width="2"/>

          <!-- Central Moving Molecule Path -->
          <line x1="60" y1="110" x2="400" y2="110" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)"/>
          <circle cx="80" cy="110" r="10" fill="#f59e0b"/>
          <text x="75" y="140" fill="#f59e0b" font-size="10" font-weight="bold">Molecule (d)</text>

          <!-- Colliding Target Molecules -->
          <circle cx="210" cy="80" r="10" fill="#ef4444"/>
          <circle cx="290" cy="135" r="10" fill="#ef4444"/>

          <!-- Cylinder Radius d -->
          <line x1="80" y1="110" x2="80" y2="65" stroke="#10b981" stroke-width="2"/>
          <text x="88" y="92" fill="#10b981" font-size="11" font-weight="bold">Radius d</text>

          <!-- Formula Box -->
          <rect x="250" y="15" width="230" height="90" fill="#1e293b" stroke="#334155" rx="8"/>
          <text x="260" y="40" fill="#f8fafc" font-size="12" font-weight="bold">Mean Free Path Formula:</text>
          <text x="260" y="65" fill="#38bdf8" font-size="14" font-weight="bold">λ = 1 / (√2 n π d²)</text>
          <text x="260" y="88" fill="#a7f3d0" font-size="11">λ = k_B T / (√2 π d² P)</text>
        </svg>`,
        caption: 'Collision cylinder model for deriving Mean Free Path λ = 1 / (√2 n π d²).'
      }
    }
  ],

  formulae: [
    {
      title: 'Specific Heat Capacities & Gamma',
      formula: 'C_V = frac{f}{2} R, quad C_P = left(frac{f}{2} + 1right) R, quad gamma = frac{C_P}{C_V} = 1 + frac{2}{f}',
      variables: 'f = degrees of freedom, R = 8.314 J/(mol·K)'
    },
    {
      title: 'Gas Mixture Specific Heats & Internal Energy',
      formula: 'C_{V,mix} = frac{n_1 C_{V1} + n_2 C_{V2}}{n_1 + n_2}, quad U_{mix} = n_1 frac{f_1}{2} RT + n_2 frac{f_2}{2} RT',
      variables: 'n₁, n₂ = moles of constituent gases, C_V1, C_V2 = molar heat capacities'
    },
    {
      title: 'Mean Free Path Formulae',
      formula: 'lambda = frac{1}{sqrt{2} n pi d^2} = frac{k_B T}{sqrt{2} pi d^2 P}',
      variables: 'n = N/V = number density (m⁻³), d = molecular diameter (m), k_B = 1.38 × 10⁻²³, P = pressure, T = Kelvin temp'
    }
  ],

  neetImportantPoints: [
    'Ratio of specific heats γ = C_P / C_V = 1 + 2/f. As degrees of freedom f increases, γ DECREASES (γ_mono > γ_dia > γ_poly).',
    'Mean free path λ is inversely proportional to the SQUARE of molecular diameter d (λ ∝ 1/d²). Doubling diameter reduces λ to 1/4.',
    'At constant volume (fixed container), number density n = N/V is constant, so mean free path λ remains CONSTANT even if temperature or pressure changes!',
    'Total internal energy of a mixture is the direct sum of internal energies of individual gases: U_mix = U₁ + U₂.',
    'For monoatomic gas γ = 5/3 = 1.67; for diatomic rigid gas γ = 7/5 = 1.40.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming mean free path λ increases with temperature at constant volume.',
      correctFact: 'At CONSTANT VOLUME, number density n = N/V is fixed. Since λ = 1 / (√2 n π d²), mean free path depends ONLY on n and d, so it remains CONSTANT regardless of T change!',
      whyItMattersForNEET: 'Frequent conceptual trap question in NEET.'
    },
    {
      commonConfusion: 'Applying γ_mix = (γ₁ + γ₂) / 2 as a simple arithmetic average.',
      correctFact: 'γ_mix is NOT a simple average! You MUST calculate C_P,mix and C_V,mix first, then take γ_mix = C_P,mix / C_V,mix.',
      whyItMattersForNEET: 'Using simple average of γ gives incorrect answers in NEET numericals.'
    },
    {
      commonConfusion: 'Mixing up molecular diameter d with molecular radius r in mean free path formula.',
      correctFact: 'Formula uses molecular DIAMETER d. If radius r is given, substitute d = 2r, so d² = 4r².',
      whyItMattersForNEET: 'Formula substitution errors.'
    }
  ],

  quickRevision: [
    'C_V = (f/2) R, C_P = (f/2 + 1) R',
    'γ = C_P / C_V = 1 + 2/f',
    'Monoatomic: γ = 5/3 (1.67); Diatomic: γ = 7/5 (1.40)',
    'U_total = n₁ (f₁/2) RT + n₂ (f₂/2) RT',
    'C_V,mix = (n₁ C_V1 + n₂ C_V2) / (n₁ + n₂)',
    'Mean Free Path: λ = 1 / (√2 n π d²)'
  ],

  practiceQuestions: [
  {
    "id": "mfp-p1",
    "question": "If the diameter of gas molecules is doubled while keeping the number density constant, the mean free path becomes:",
    "options": [
      "Double",
      "Half",
      "One-fourth",
      "Four times"
    ],
    "correctOption": 2,
    "explanation": "Mean free path λ = 1 / (√2 n π d²). Since λ ∝ 1/d², doubling diameter d (d′ = 2d) reduces mean free path to 1/(2)² = 1/4 of its original value."
  },
  {
    "id": "prac-physequipartitionmeanfreepath-2",
    "question": "Regarding Specific Heat, Mean Free Path & Applications, which of the following statements correctly resolves a common misconception about \"Assuming mean free path λ increases with temperature at constant volume.\"?",
    "options": [
      "At CONSTANT VOLUME, number density n = N/V is fixed. Since λ = 1 / (√2 n π d²), mean free path depends ONLY on n and d, so it remains CONSTANT regardless of T change!",
      "Incorrect assumption: Assuming mean free path λ increases with temperature at constant volume.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "At CONSTANT VOLUME, number density n = N/V is fixed. Since λ = 1 / (√2 n π d²), mean free path depends ONLY on n and d, so it remains CONSTANT regardless of T change!. Frequent conceptual trap question in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Specific Heat, Mean Free Path & Applications - Conceptual Clarity"
  },
  {
    "id": "prac-physequipartitionmeanfreepath-3",
    "question": "Regarding Specific Heat, Mean Free Path & Applications, which of the following statements correctly resolves a common misconception about \"Applying γ_mix = (γ₁ + γ₂) / 2 as a simple arithmetic average.\"?",
    "options": [
      "γ_mix is NOT a simple average! You MUST calculate C_P,mix and C_V,mix first, then take γ_mix = C_P,mix / C_V,mix.",
      "Incorrect assumption: Applying γ_mix = (γ₁ + γ₂) / 2 as a simple arithmetic average.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "γ_mix is NOT a simple average! You MUST calculate C_P,mix and C_V,mix first, then take γ_mix = C_P,mix / C_V,mix.. Using simple average of γ gives incorrect answers in NEET numericals.",
    "difficulty": "Medium",
    "conceptTested": "Specific Heat, Mean Free Path & Applications - Conceptual Clarity"
  },
  {
    "id": "prac-physequipartitionmeanfreepath-4",
    "question": "Regarding Specific Heat, Mean Free Path & Applications, which of the following statements correctly resolves a common misconception about \"Mixing up molecular diameter d with molecular radius r in mean free path formula.\"?",
    "options": [
      "Formula uses molecular DIAMETER d. If radius r is given, substitute d = 2r, so d² = 4r².",
      "Incorrect assumption: Mixing up molecular diameter d with molecular radius r in mean free path formula.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Formula uses molecular DIAMETER d. If radius r is given, substitute d = 2r, so d² = 4r².. Formula substitution errors.",
    "difficulty": "Medium",
    "conceptTested": "Specific Heat, Mean Free Path & Applications - Conceptual Clarity"
  },
  {
    "id": "prac-physequipartitionmeanfreepath-5",
    "question": "In the study of Specific Heat, Mean Free Path & Applications, what is the exact definition and significance of \"Molar Heat Capacity C_V\"?",
    "options": [
      "Heat capacity per mole at constant volume, representing internal energy increase per Kelvin: C_V = dU / dT = (f/2) R.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Heat capacity per mole at constant volume, representing internal energy increase per Kelvin: C_V = dU / dT = (f/2) R.. ",
    "difficulty": "Easy",
    "conceptTested": "Molar Heat Capacity C_V definition"
  },
  {
    "id": "prac-physequipartitionmeanfreepath-6",
    "question": "In the study of Specific Heat, Mean Free Path & Applications, what is the exact definition and significance of \"Molar Heat Capacity C_P\"?",
    "options": [
      "Heat capacity per mole at constant pressure, accounting for both internal energy change and expansion work: C_P = C_V + R.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Heat capacity per mole at constant pressure, accounting for both internal energy change and expansion work: C_P = C_V + R.. ",
    "difficulty": "Easy",
    "conceptTested": "Molar Heat Capacity C_P definition"
  },
  {
    "id": "prac-physequipartitionmeanfreepath-7",
    "question": "In the study of Specific Heat, Mean Free Path & Applications, what is the exact definition and significance of \"Adiabatic Exponent (γ)\"?",
    "options": [
      "The ratio of specific heat capacities γ = C_P / C_V, determining the slope of adiabatic processes on PV diagrams.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The ratio of specific heat capacities γ = C_P / C_V, determining the slope of adiabatic processes on PV diagrams.. ",
    "difficulty": "Easy",
    "conceptTested": "Adiabatic Exponent (γ) definition"
  },
  {
    "id": "prac-physequipartitionmeanfreepath-8",
    "question": "In the study of Specific Heat, Mean Free Path & Applications, what is the exact definition and significance of \"Mean Free Path (λ)\"?",
    "options": [
      "The mean distance traversed by a particle between consecutive impact collisions.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The mean distance traversed by a particle between consecutive impact collisions.. ",
    "difficulty": "Easy",
    "conceptTested": "Mean Free Path (λ) definition"
  },
  {
    "id": "prac-physequipartitionmeanfreepath-9",
    "question": "In the study of Specific Heat, Mean Free Path & Applications, what is the exact definition and significance of \"Number Density (n)\"?",
    "options": [
      "Number of gas molecules per unit volume: n = N / V = P / (k_B T).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Number of gas molecules per unit volume: n = N / V = P / (k_B T).. ",
    "difficulty": "Easy",
    "conceptTested": "Number Density (n) definition"
  },
  {
    "id": "prac-physequipartitionmeanfreepath-10",
    "question": "Which of the following is a key NCERT statement regarding Specific Heat, Mean Free Path & Applications?",
    "options": [
      "C_V = (f/2) R, C_P = (f/2 + 1) R",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: C_V = (f/2) R, C_P = (f/2 + 1) R",
    "difficulty": "Easy",
    "conceptTested": "Specific Heat, Mean Free Path & Applications NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-mfp-1',
      examYear: 'NEET 2024',
      question: 'A gas mixture consists of 2 moles of oxygen (O₂) and 4 moles of Argon (Ar) at temperature T. Neglecting vibrational modes, which of the following statements is INCORRECT? (Given: R is the universal gas constant)',
      options: [
        'The total internal energy of the mixture is 17 RT',
        'The ratio of specific heats (γ) for oxygen is approximately 1.4',
        'If the temperature of the gas mixture is doubled, the root mean square (RMS) speed of oxygen molecules will increase by a factor of √2',
        'The mean free path of the gas molecules is inversely proportional to the square of the molecular diameter'
      ],
      correctOption: 0,
      explanation: 'Let us evaluate each statement:\n1. Oxygen (O₂, diatomic, f=5): U_O2 = 2 × (5/2) RT = 5 RT. Argon (Ar, monoatomic, f=3): U_Ar = 4 × (3/2) RT = 6 RT. Total internal energy U_total = 5 RT + 6 RT = 11 RT. Statement (1) claims it is 17 RT, which is INCORRECT!\n2. For O₂ (f=5), γ = 1 + 2/5 = 1.4 (Correct).\n3. v_rms ∝ √T, so doubling T increases v_rms by √2 (Correct).\n4. Mean free path λ = 1 / (√2 n π d²) ∝ 1/d² (Correct).\nTherefore, statement (1) is the incorrect one.',
      conceptTested: 'Total internal energy of gas mixture, gamma, RMS speed, and mean free path',
      difficulty: 'Medium'
    },
    {
      id: 'pyq-mfp-2',
      examYear: 'NEET 2022',
      question: 'The ratio of the specific heats (C_P / C_V = γ) in terms of degrees of freedom (n) is given by:',
      options: [
        '1 + 1/n',
        '1 + n/3',
        '1 + 2/n',
        '1 + n/2'
      ],
      correctOption: 2,
      explanation: 'For a gas with n degrees of freedom (often denoted by f):\nMolar heat capacity at constant volume C_V = (n/2) R.\nMolar heat capacity at constant pressure C_P = C_V + R = (n/2 + 1) R.\nRatio of specific heats γ = C_P / C_V = [(n/2 + 1) R] / [(n/2) R] = 1 + 2/n.',
      conceptTested: 'Ratio of specific heats in terms of degrees of freedom',
      difficulty: 'Easy'
    },
    {
      id: 'pyq-mfp-3',
      examYear: 'NEET 2020',
      question: 'The mean free path for a gas, with molecular diameter d and number density n can be expressed as:',
      options: [
        '1 / (√2 n π d²)',
        '1 / (√2 n² π d²)',
        '1 / (√2 n π d)',
        '1 / (√2 n² π² d²)'
      ],
      correctOption: 0,
      explanation: 'The standard formula for the mean free path of gas molecules considering the relative motion of molecules is λ = 1 / (√2 n π d²), where n is the number density (number of molecules per unit volume) and d is the molecular diameter.',
      conceptTested: 'Mean free path formula',
      difficulty: 'Easy'
    }
  ]
};
