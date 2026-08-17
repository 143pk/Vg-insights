import { DetailedTopicContent } from '../../types/neet';

export const physKtgAssumptionsDetails: DetailedTopicContent = {
  topicId: 'phys-ktg-assumptions',
  topicName: 'Kinetic Theory & Ideal Gas',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Thermodynamics & Kinetic Theory',
  chapter: 'Kinetic Theory',

  whatIsThisTopic: 'Kinetic Theory & Ideal Gas provides a microscopic explanation of gas behavior by connecting molecular motion, kinetic energy, and collisions to macroscopic properties like pressure, volume, and temperature. This topic covers the ideal gas concept, equation of state (PV = nRT = N k_B T), gas laws (Boyle\'s, Charles\', Pressure/Gay-Lussac\'s), kinetic theory postulates, derivation of pressure (P = 1/3 ρ c²), kinetic energy-temperature equivalence, and NEET numerical calculation patterns.',

  basicIdea: [
    'An Ideal Gas consists of identical point masses with negligible molecular volume and zero intermolecular attractive/repulsive forces, perfectly obeying PV = nRT at all temperatures and pressures.',
    'Boyle\'s Law: At constant temperature (isothermal), gas pressure is inversely proportional to volume (P ∝ 1/V or P₁V₁ = P₂V₂).',
    'Charles\' Law: At constant pressure (isobaric), gas volume is directly proportional to absolute temperature (V ∝ T or V₁/T₁ = V₂/T₂).',
    'Pressure Law (Gay-Lussac\'s): At constant volume (isochoric), gas pressure is directly proportional to absolute temperature (P ∝ T or P₁/T₁ = P₂/T₂).',
    'Kinetic Pressure Equation: Gas pressure arises from momentum transfer during elastic molecular collisions with vessel walls: P = (1/3) ρ c² = (1/3) (m N / V) v_rms².',
    'Kinetic Temperature Interpretation: Absolute temperature T is a direct quantitative measure of average translational kinetic energy per molecule: E_avg = (3/2) k_B T.',
    'Pressure in terms of Energy Density: Gas pressure equals two-thirds of the total translational kinetic energy per unit volume: P = (2/3) E_vol.'
  ],

  importantTerms: [
    {
      term: 'Ideal Gas',
      definition: 'A theoretical model gas whose particles occupy negligible volume and exert no mutual forces on each other except during perfectly elastic collisions.'
    },
    {
      term: 'Universal Gas Constant (R)',
      definition: 'The constant of proportionality in the ideal gas equation: R = 8.314 J/(mol·K) ≈ 2 cal/(mol·K) ≈ 0.0821 L·atm/(mol·K).'
    },
    {
      term: 'Boltzmann Constant (k_B)',
      definition: 'Gas constant per individual molecule: k_B = R / N_A = 1.38 × 10⁻²³ J/K.'
    },
    {
      term: 'Avogadro\'s Number (N_A)',
      definition: 'Number of molecules contained in 1 mole of any substance: N_A = 6.022 × 10²³ molecules/mol.'
    },
    {
      term: 'Elastic Collision',
      definition: 'A collision in which both total momentum and total kinetic energy of colliding bodies are strictly conserved without any transformation into thermal, sound, or deformation energy.'
    },
    {
      term: 'Kinetic Energy Density (E_vol)',
      definition: 'Total translational kinetic energy of gas molecules per unit volume: E_vol = E_trans / V = (1/2) ρ v_rms².'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Ideal Gas Concept, State Equation & Gas Laws',
      paragraphs: [
        'Real gases consist of molecules having finite size and weak intermolecular forces (van der Waals interactions). However, at high temperatures (where thermal motion dominates) and low pressures (where molecules are far apart), real gases closely approximate Ideal Gas behavior.',
        'The Equation of State relates macroscopic state variables for n moles (or N molecules) of an ideal gas: PV = nRT = N k_B T, where n = m_total / M = N / N_A.',
        'Gas Laws as Special Cases:',
        '• Boyle\'s Law (T = const): P ∝ 1/V ⇒ P₁V₁ = P₂V₂. Graph of P vs V is a rectangular hyperbola (isotherm).',
        '• Charles\' Law (P = const): V ∝ T (T in Kelvin) ⇒ V₁/T₁ = V₂/T₂. Graph of V vs T (K) is a straight line passing through the origin.',
        '• Gay-Lussac\'s / Pressure Law (V = const): P ∝ T ⇒ P₁/T₁ = P₂/T₂.'
      ]
    },
    {
      heading: '2. Postulates of Kinetic Theory of Gases (KTG)',
      paragraphs: [
        '1. A gas consists of an enormous number of identical, tiny, hard spherical particles (molecules) in continuous, random motion in all directions.',
        '2. Molecular Volume Negligible: The actual volume occupied by all gas molecules combined is negligible compared to the total volume occupied by the gas enclosure.',
        '3. Zero Intermolecular Forces: Molecules exert no forces of attraction or repulsion on one another except during collisions. Hence, potential energy of an ideal gas is zero (Internal Energy U is purely kinetic).',
        '4. Elastic Collisions: Collisions between molecules, and between molecules and vessel walls, are perfectly elastic (kinetic energy and momentum conserved).',
        '5. Collision Duration Negligible: Time spent during a collision is vanishingly small compared to time interval between successive collisions.',
        '6. Uniform Molecular Density: Molecules are uniformly distributed throughout the container, so pressure is uniform at all points in the vessel.'
      ]
    },
    {
      heading: '3. Microscopic Derivation of Gas Pressure',
      paragraphs: [
        'Consider a cubical box of side L containing N molecules, each of mass m. When a molecule moves along the x-axis with speed v_x and hits a wall perpendicular to x, its momentum changes from +m v_x to -m v_x.',
        'Change in x-momentum per collision: Δp_x = -m v_x - (+m v_x) = -2 m v_x.',
        'Time between consecutive collisions with the same wall: Δt = 2L / v_x.',
        'Average force exerted by one molecule on the wall: F_x = |Δp_x| / Δt = m v_x² / L.',
        'Summing over all N molecules and resolving 3D isotropic motion (v_rms² = v_x² + v_y² + v_z² = 3 v_x²), total force on wall area L² yields pressure:',
        'P = F_total / L² = (1/3) (N m / L³) v_rms² = (1/3) ρ v_rms².'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 220" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Container Box -->
          <rect x="60" y="30" width="160" height="150" fill="none" stroke="#38bdf8" stroke-width="2.5" rx="4"/>
          <text x="110" y="22" fill="#38bdf8" font-size="11" font-weight="bold">Volume V, Density ρ</text>

          <!-- Molecule hitting right wall -->
          <circle cx="170" cy="100" r="7" fill="#f59e0b"/>
          <!-- Incoming arrow -->
          <line x1="120" y1="100" x2="160" y2="100" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="125" y="90" fill="#f59e0b" font-size="10">+m vx</text>

          <!-- Wall rebound arrow -->
          <line x1="170" y1="115" x2="130" y2="115" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="135" y="130" fill="#ef4444" font-size="10">-m vx</text>

          <!-- Wall area highlight -->
          <line x1="220" y1="30" x2="220" y2="180" stroke="#10b981" stroke-width="4"/>
          <text x="228" y="105" fill="#10b981" font-size="11" font-weight="bold">Wall Area A = L²</text>

          <!-- Formula callout box -->
          <rect x="290" y="45" width="190" height="120" fill="#1e293b" stroke="#64748b" rx="8"/>
          <text x="305" y="75" fill="#f8fafc" font-size="13" font-weight="bold">Kinetic Pressure:</text>
          <text x="305" y="105" fill="#38bdf8" font-size="15" font-weight="bold">P = ⅓ ρ v_rms²</text>
          <text x="305" y="130" fill="#a7f3d0" font-size="12" font-weight="bold">P = ⅔ E_vol</text>
        </svg>`,
        caption: 'Microscopic Origin of Gas Pressure: Elastic collision of molecules with container wall creates continuous momentum change, leading to macroscopic pressure P = (1/3) ρ v_rms².'
      }
    },
    {
      heading: '4. Pressure-Energy Equivalence & Temperature Interpretation',
      paragraphs: [
        'Total translational kinetic energy of N molecules: E_trans = N × (1/2 m v_rms²) = (1/2) M v_rms².',
        'Substituting v_rms² into the pressure expression P = (1/3) (N m / V) v_rms² gives:',
        'P = (2/3) (E_trans / V) = (2/3) E_vol.',
        'Therefore, pressure of an ideal gas equals two-thirds of its kinetic energy per unit volume.',
        'Connecting with PV = N k_B T:',
        '(2/3) E_trans = N k_B T ⇒ E_trans = (3/2) N k_B T = (3/2) n R T.',
        'Average translational kinetic energy per single molecule: e_avg = E_trans / N = (3/2) k_B T.',
        'Conclusion: Absolute temperature T is directly proportional to average kinetic energy of gas molecules (e_avg ∝ T). At absolute zero (T = 0 K), all translational molecular motion ceases.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Ideal Gas Equation',
      formula: 'PV = nRT = N k_B T = frac{m_{total}}{M} RT',
      variables: 'P = pressure (Pa), V = volume (m³), n = moles, R = 8.314 J/(mol·K), N = molecules, k_B = 1.38 × 10⁻²³ J/K, T = temp in Kelvin'
    },
    {
      title: 'Pressure in terms of Density and RMS Speed',
      formula: 'P = frac{1}{3} rho v_{rms}^2 = frac{1}{3} frac{N m}{V} v_{rms}^2',
      variables: 'ρ = mass density = m N / V (kg/m³), v_rms = root mean square speed (m/s)'
    },
    {
      title: 'Pressure vs Energy Density',
      formula: 'P = frac{2}{3} E_{vol} = frac{2}{3} left( frac{E_{trans}}{V} right)',
      variables: 'E_vol = translational kinetic energy per unit volume (J/m³)'
    },
    {
      title: 'Average Kinetic Energy per Molecule & Mole',
      formula: 'e_{molecule} = frac{3}{2} k_B T, quad E_{mole} = frac{3}{2} R T',
      variables: 'k_B = Boltzmann constant, T = absolute temp in Kelvin (K)',
      note: 'Average translational KE depends ONLY on absolute temperature T, independent of nature or molar mass of the gas!'
    }
  ],

  neetImportantPoints: [
    'An ideal gas has ZERO potential energy because intermolecular forces are zero. Its total internal energy U is purely kinetic.',
    'Average kinetic energy per molecule e_avg = (3/2) k_B T depends ONLY on temperature T and is identical for all gases (He, H₂, O₂, etc.) at the same temperature.',
    'Gas pressure depends on both mass density ρ and rms speed squared (P = 1/3 ρ v_rms²).',
    'When two different non-reacting ideal gases at same T and P are mixed, total pressure P = P₁ + P₂ (Dalton\'s Law of Partial Pressures).',
    'Real gases behave most ideally at HIGH Temperature and LOW Pressure.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming heavy gas molecules (like O₂) have less average kinetic energy than light molecules (like He) at the same temperature.',
      correctFact: 'At the same temperature T, average kinetic energy per molecule e_avg = (3/2) k_B T is EXACTLY THE SAME for all gases regardless of molar mass! Heavy molecules move slower, but their kinetic energy is identical.',
      whyItMattersForNEET: 'A classic conceptual question in NEET asking to compare KE of He and O₂ at 300 K.'
    },
    {
      commonConfusion: 'Using Celsius temperature in ideal gas calculations.',
      correctFact: 'Temperature MUST always be converted to Kelvin: T (K) = T (°C) + 273.15.',
      whyItMattersForNEET: 'Using °C leads to wrong ratios in P₁/T₁ = P₂/T₂.'
    },
    {
      commonConfusion: 'Confusing total internal energy with translational kinetic energy for diatomic/polyatomic gases.',
      correctFact: 'Translational KE per molecule is ALWAYS (3/2) k_B T for any gas. Total internal energy depends on total degrees of freedom (f/2) k_B T.',
      whyItMattersForNEET: 'NTA specifically distinguishes between translational KE and total internal energy.'
    }
  ],

  quickRevision: [
    'Ideal Gas Equation: PV = nRT = N k_B T',
    'Gas Pressure Formula: P = (1/3) ρ v_rms² = (2/3) E_vol',
    'Avg KE per molecule: e = (3/2) k_B T (depends ONLY on T)',
    'Avg KE per mole: E = (3/2) R T',
    'Real gas is most ideal at HIGH T and LOW P',
    'Internal energy of ideal gas is purely kinetic (U_potential = 0)'
  ],

  practiceQuestions: [
  {
    "id": "ktg-p1",
    "question": "At what temperature will the average kinetic energy of a gas molecule be double its value at 27°C?",
    "options": [
      "54°C",
      "327°C",
      "600°C",
      "108°C"
    ],
    "correctOption": 1,
    "explanation": "Average kinetic energy e ∝ T (in Kelvin). T₁ = 27 + 273 = 300 K. To double the KE, new temperature T₂ = 2 × T₁ = 2 × 300 = 600 K. In Celsius: T₂ = 600 - 273 = 327°C."
  },
  {
    "id": "prac-physktgassumptions-2",
    "question": "Regarding Kinetic Theory & Ideal Gas, which of the following statements correctly resolves a common misconception about \"Assuming heavy gas molecules (like O₂) have less average kinetic energy than light molecules (like He) at the same temperature.\"?",
    "options": [
      "At the same temperature T, average kinetic energy per molecule e_avg = (3/2) k_B T is EXACTLY THE SAME for all gases regardless of molar mass! Heavy molecules move slower, but their kinetic energy is identical.",
      "Incorrect assumption: Assuming heavy gas molecules (like O₂) have less average kinetic energy than light molecules (like He) at the same temperature.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "At the same temperature T, average kinetic energy per molecule e_avg = (3/2) k_B T is EXACTLY THE SAME for all gases regardless of molar mass! Heavy molecules move slower, but their kinetic energy is identical.. A classic conceptual question in NEET asking to compare KE of He and O₂ at 300 K.",
    "difficulty": "Medium",
    "conceptTested": "Kinetic Theory & Ideal Gas - Conceptual Clarity"
  },
  {
    "id": "prac-physktgassumptions-3",
    "question": "Regarding Kinetic Theory & Ideal Gas, which of the following statements correctly resolves a common misconception about \"Using Celsius temperature in ideal gas calculations.\"?",
    "options": [
      "Temperature MUST always be converted to Kelvin: T (K) = T (°C) + 273.15.",
      "Incorrect assumption: Using Celsius temperature in ideal gas calculations.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Temperature MUST always be converted to Kelvin: T (K) = T (°C) + 273.15.. Using °C leads to wrong ratios in P₁/T₁ = P₂/T₂.",
    "difficulty": "Medium",
    "conceptTested": "Kinetic Theory & Ideal Gas - Conceptual Clarity"
  },
  {
    "id": "prac-physktgassumptions-4",
    "question": "Regarding Kinetic Theory & Ideal Gas, which of the following statements correctly resolves a common misconception about \"Confusing total internal energy with translational kinetic energy for diatomic/polyatomic gases.\"?",
    "options": [
      "Translational KE per molecule is ALWAYS (3/2) k_B T for any gas. Total internal energy depends on total degrees of freedom (f/2) k_B T.",
      "Incorrect assumption: Confusing total internal energy with translational kinetic energy for diatomic/polyatomic gases.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Translational KE per molecule is ALWAYS (3/2) k_B T for any gas. Total internal energy depends on total degrees of freedom (f/2) k_B T.. NTA specifically distinguishes between translational KE and total internal energy.",
    "difficulty": "Medium",
    "conceptTested": "Kinetic Theory & Ideal Gas - Conceptual Clarity"
  },
  {
    "id": "prac-physktgassumptions-5",
    "question": "In the study of Kinetic Theory & Ideal Gas, what is the exact definition and significance of \"Ideal Gas\"?",
    "options": [
      "A theoretical model gas whose particles occupy negligible volume and exert no mutual forces on each other except during perfectly elastic collisions.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A theoretical model gas whose particles occupy negligible volume and exert no mutual forces on each other except during perfectly elastic collisions.. ",
    "difficulty": "Easy",
    "conceptTested": "Ideal Gas definition"
  },
  {
    "id": "prac-physktgassumptions-6",
    "question": "In the study of Kinetic Theory & Ideal Gas, what is the exact definition and significance of \"Universal Gas Constant (R)\"?",
    "options": [
      "The constant of proportionality in the ideal gas equation: R = 8.314 J/(mol·K) ≈ 2 cal/(mol·K) ≈ 0.0821 L·atm/(mol·K).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The constant of proportionality in the ideal gas equation: R = 8.314 J/(mol·K) ≈ 2 cal/(mol·K) ≈ 0.0821 L·atm/(mol·K).. ",
    "difficulty": "Easy",
    "conceptTested": "Universal Gas Constant (R) definition"
  },
  {
    "id": "prac-physktgassumptions-7",
    "question": "In the study of Kinetic Theory & Ideal Gas, what is the exact definition and significance of \"Boltzmann Constant (k_B)\"?",
    "options": [
      "Gas constant per individual molecule: k_B = R / N_A = 1.38 × 10⁻²³ J/K.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Gas constant per individual molecule: k_B = R / N_A = 1.38 × 10⁻²³ J/K.. ",
    "difficulty": "Easy",
    "conceptTested": "Boltzmann Constant (k_B) definition"
  },
  {
    "id": "prac-physktgassumptions-8",
    "question": "In the study of Kinetic Theory & Ideal Gas, what is the exact definition and significance of \"Avogadro's Number (N_A)\"?",
    "options": [
      "Number of molecules contained in 1 mole of any substance: N_A = 6.022 × 10²³ molecules/mol.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Number of molecules contained in 1 mole of any substance: N_A = 6.022 × 10²³ molecules/mol.. ",
    "difficulty": "Easy",
    "conceptTested": "Avogadro's Number (N_A) definition"
  },
  {
    "id": "prac-physktgassumptions-9",
    "question": "In the study of Kinetic Theory & Ideal Gas, what is the exact definition and significance of \"Elastic Collision\"?",
    "options": [
      "A collision in which both total momentum and total kinetic energy of colliding bodies are strictly conserved without any transformation into thermal, sound, or deformation energy.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A collision in which both total momentum and total kinetic energy of colliding bodies are strictly conserved without any transformation into thermal, sound, or deformation energy.. ",
    "difficulty": "Easy",
    "conceptTested": "Elastic Collision definition"
  },
  {
    "id": "prac-physktgassumptions-10",
    "question": "In the study of Kinetic Theory & Ideal Gas, what is the exact definition and significance of \"Kinetic Energy Density (E_vol)\"?",
    "options": [
      "Total translational kinetic energy of gas molecules per unit volume: E_vol = E_trans / V = (1/2) ρ v_rms².",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Total translational kinetic energy of gas molecules per unit volume: E_vol = E_trans / V = (1/2) ρ v_rms².. ",
    "difficulty": "Easy",
    "conceptTested": "Kinetic Energy Density (E_vol) definition"
  }
],
  pyqs: [
    {
      id: 'pyq-ktg-1',
      examYear: 'NEET 2021',
      question: 'The average thermal energy for a monoatomic gas is:',
      options: [
        '(3/2) k_B T',
        '(1/2) k_B T',
        '(5/2) k_B T',
        '(7/2) k_B T'
      ],
      correctOption: 0,
      explanation: 'A monoatomic gas has 3 translational degrees of freedom and no rotational or vibrational modes. By the equipartition theorem, each degree of freedom contributes (1/2) k_B T. Therefore, total average thermal energy per molecule = 3 × (1/2) k_B T = (3/2) k_B T.',
      conceptTested: 'Average thermal energy of monoatomic gas',
      difficulty: 'Easy'
    },
    {
      id: 'pyq-ktg-2',
      examYear: 'NEET 2019',
      question: 'Increase in temperature of a gas filled in a container would lead to:',
      options: [
        'Decrease in its pressure',
        'Decrease in intermolecular distance',
        'Increase in its mass',
        'Increase in its kinetic energy'
      ],
      correctOption: 3,
      explanation: 'According to kinetic theory of gases, absolute temperature T is a direct measure of the average translational kinetic energy of gas molecules (E_avg = 3/2 k_B T). Thus, an increase in temperature leads directly to an increase in the kinetic energy of gas molecules.',
      conceptTested: 'Temperature and kinetic energy relationship',
      difficulty: 'Easy'
    }
  ]
};
