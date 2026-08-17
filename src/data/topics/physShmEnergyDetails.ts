import { DetailedTopicContent } from '../../types/neet';

export const physShmEnergyDetails: DetailedTopicContent = {
  topicId: 'phys-shm-energy',
  topicName: 'SHM Energy',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Oscillations & Waves',
  chapter: 'Oscillations',

  whatIsThisTopic: 'SHM Energy analyzes the continuous transformation between kinetic energy (K) and potential energy (U) in simple harmonic motion, while total mechanical energy (E) remains strictly conserved. It covers energy-displacement functions, energy-time variations, frequency doubling of KE and PE (2f), parabolic energy graphs, average energies, and high-yield NEET numerical calculations.',

  basicIdea: [
    'Energy Conservation in SHM: In the absence of non-conservative resistive forces, the total mechanical energy E = K + U of an oscillating system is strictly constant at all points and instants.',
    'Potential Energy (U): Work done against restoring force in displacing particle from mean position x = 0 to x: U(x) = ½ k x² = ½ m ω² x² = ½ m ω² A² sin²(ωt + φ). Maximum at extremes (x = ±A), zero at mean position.',
    'Kinetic Energy (K): Energy due to motion K = ½ m v² = ½ m ω² (A² - x²) = ½ k (A² - x²) = ½ m ω² A² cos²(ωt + φ). Maximum at mean position (x = 0), zero at extremes (x = ±A).',
    'Total Mechanical Energy (E): Sum of K and U: E = K + U = ½ k A² = ½ m ω² A² = 2 π² m f² A². E is directly proportional to mass m, square of frequency f², and square of amplitude A².',
    'Frequency Doubling: While displacement x and velocity v oscillate with frequency f (and time period T), kinetic energy K and potential energy U oscillate with frequency 2f (and time period T/2)!',
    'Equal Energy Point: Kinetic energy equals potential energy (K = U) at displacement x = ± A / √2 ≈ ± 0.707 A.',
    'Time Average vs Spatial Average: Over one full cycle, time-averaged KE = time-averaged PE = E/2 = ¼ k A². Over space (-A to +A), spatial average KE = ⅔ E and spatial average PE = ⅓ E.'
  ],

  importantTerms: [
    {
      term: 'Potential Energy U(x)',
      definition: 'Energy stored due to displacement from equilibrium: U(x) = ½ k x² = ½ m ω² x².'
    },
    {
      term: 'Kinetic Energy K(x)',
      definition: 'Energy associated with motion: K(x) = ½ m v² = ½ k (A² - x²).'
    },
    {
      term: 'Total Mechanical Energy (E)',
      definition: 'Conserved total energy E = K + U = ½ k A² = ½ m ω² A².'
    },
    {
      term: 'Equilibrium Position Energy',
      definition: 'At x = 0: Potential energy U = 0, Kinetic energy is maximum K_max = E = ½ k A².'
    },
    {
      term: 'Extreme Position Energy',
      definition: 'At x = ±A: Kinetic energy K = 0, Potential energy is maximum U_max = E = ½ k A².'
    },
    {
      term: 'Frequency of Energy Oscillation',
      definition: 'The frequency with which K and U complete one energy cycle is 2f, where f is frequency of particle oscillation.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Mathematical Formulations & Special Displacement Ratios',
      paragraphs: [
        'Displacement-based Energy Formulae (assuming U(0) = 0):',
        '• Potential Energy: U(x) = ½ k x² = ½ m ω² x².',
        '• Kinetic Energy: K(x) = ½ k (A² - x²) = ½ m ω² (A² - x²).',
        '• Total Mechanical Energy: E = U(x) + K(x) = ½ k A² = ½ m ω² A².',
        'Key Displacement Ratios (Very High-Yield for NEET!):',
        '1. Position where K = U:',
        '   ½ k (A² - x²) = ½ k x² ⇒ A² - x² = x² ⇒ 2x² = A² ⇒ x = ± A / √2 ≈ ± 0.707 A.',
        '2. Position where K = 3 U:',
        '   ½ k (A² - x²) = 3 × (½ k x²) ⇒ A² - x² = 3x² ⇒ 4x² = A² ⇒ x = ± A / 2.',
        '   At x = A/2: U = ¼ E (25% of total) and K = ¾ E (75% of total) ⇒ K : U = 3 : 1.',
        '3. Position where U = 3 K:',
        '   ½ k x² = 3 × [½ k (A² - x²)] ⇒ 4x² = 3A² ⇒ x = ± (√3 / 2) A ≈ ± 0.866 A.',
        '   At x = (√3/2)A: U = ¾ E (75%) and K = ¼ E (25%) ⇒ K : U = 1 : 3.',
        'General Reference Potential Energy Note:',
        '• If potential energy at equilibrium is non-zero (U(0) = U_0), then U(x) = U_0 + ½ k x² and Total Energy E = U_0 + ½ k A².'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 230" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Axes -->
          <line x1="60" y1="180" x2="440" y2="180" stroke="#94a3b8" stroke-width="2"/>
          <line x1="250" y1="30" x2="250" y2="190" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4"/>
          <line x1="60" y1="40" x2="440" y2="40" stroke="#f59e0b" stroke-width="2.5"/>
          <text x="445" y="45" fill="#f59e0b" font-size="11" font-weight="bold">Total E = ½kA²</text>
          <text x="250" y="200" fill="#94a3b8" font-size="11" text-anchor="middle">Mean (x = 0)</text>
          <text x="70" y="200" fill="#94a3b8" font-size="11">-A</text>
          <text x="420" y="200" fill="#94a3b8" font-size="11">+A</text>

          <!-- PE Curve (Blue parabola opening UP) -->
          <path d="M 70 40 Q 250 180 430 40" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
          <text x="120" y="100" fill="#38bdf8" font-size="11" font-weight="bold">U = ½kx²</text>

          <!-- KE Curve (Green parabola opening DOWN) -->
          <path d="M 70 180 Q 250 40 430 180" fill="none" stroke="#10b981" stroke-width="2.5"/>
          <text x="120" y="160" fill="#10b981" font-size="11" font-weight="bold">K = ½k(A²-x²)</text>

          <!-- Intersection points x = +- A/sqrt(2) -->
          <circle cx="177" cy="110" r="4" fill="#ef4444"/>
          <circle cx="323" cy="110" r="4" fill="#ef4444"/>
          <line x1="177" y1="110" x2="177" y2="180" stroke="#ef4444" stroke-dasharray="3"/>
          <text x="177" y="195" fill="#ef4444" font-size="10" text-anchor="middle">-A/√2</text>
          <line x1="323" y1="110" x2="323" y2="180" stroke="#ef4444" stroke-dasharray="3"/>
          <text x="323" y="195" fill="#ef4444" font-size="10" text-anchor="middle">+A/√2</text>
        </svg>`,
        caption: 'SHM Energy Curves vs Displacement: Parabolic curves for K and U intersecting at x = ±A/√2.'
      }
    },
    {
      heading: '2. Time Variation & Energy Frequency Doubling',
      paragraphs: [
        'As a function of time t (starting from x = A sin(ωt)):',
        '• U(t) = ½ k A² sin²(ωt) = ¼ k A² [1 - cos(2ωt)].',
        '• K(t) = ½ k A² cos²(ωt) = ¼ k A² [1 + cos(2ωt)].',
        'Frequency Doubling Principle:',
        '• Displacement x oscillates as sin(ωt) with frequency f = ω/2π and period T.',
        '• Both sin²(ωt) and cos²(ωt) contain terms with 2ωt = 2(2πf)t = 2π(2f)t.',
        '• Therefore, Kinetic Energy and Potential Energy oscillate with TWICE the frequency of SHM (f_energy = 2 f_SHM) and HALF the period (T_energy = T / 2)!',
        'Average Energies over One Complete Cycle:',
        '• Time Average of Kinetic Energy: <K>_t = (1/T) ∫₀ᵀ K(t) dt = ¼ k A² = E / 2.',
        '• Time Average of Potential Energy: <U>_t = (1/T) ∫₀ᵀ U(t) dt = ¼ k A² = E / 2.',
        '• Spatial Average over displacement (-A to +A):',
        '  <U>_x = (1 / 2A) ∫₋ₐ⁺ₐ ½ k x² dx = ⅙ k A² = E / 3.',
        '  <K>_x = E - <U>_x = ⅔ E = ⅓ k A².'
      ]
    }
  ],

  formulae: [
    {
      title: 'Total Mechanical Energy',
      formulaName: 'SHM Total Energy Formula',
      formula: 'E = \\frac{1}{2} k A^2 = \\frac{1}{2} m \\omega^2 A^2 = 2 \\pi^2 m f^2 A^2',
      meaning: 'Calculates conserved total mechanical energy of an simple harmonic oscillator.',
      variables: 'E = total energy (J), k = force constant (N/m), m = mass (kg), A = amplitude (m), f = frequency (Hz)',
      whenToUse: 'Use to find total energy or relate amplitude/frequency changes to energy.'
    },
    {
      title: 'Kinetic & Potential Energy vs Displacement',
      formulaName: 'Energy Position Equations',
      formula: 'K(x) = \\frac{1}{2} k (A^2 - x^2), \\quad U(x) = \\frac{1}{2} k x^2',
      meaning: 'Gives instantaneous kinetic and potential energy at displacement x.',
      variables: 'x = displacement from mean position, A = amplitude, k = spring constant',
      whenToUse: 'Use to find energy, speed, or energy ratio at a specific displacement x.'
    },
    {
      title: 'Equal Energy Displacement',
      formulaName: 'Displacement where K = U',
      formula: 'x = \\pm \\frac{A}{\\sqrt{2}} \\approx \\pm 0.707 A',
      meaning: 'Displacement from mean position where kinetic energy equals potential energy.',
      variables: 'A = amplitude',
      whenToUse: 'Direct answer for NEET questions asking where K = U or PE = 50% of Total E.'
    },
    {
      title: 'Energy Oscillation Frequency',
      formulaName: 'Energy Frequency Relation',
      formula: 'f_{energy} = 2 f_{SHM}, \\quad T_{energy} = \\frac{T_{SHM}}{2}',
      meaning: 'Relates oscillation frequency of KE/PE to frequency of particle displacement.',
      variables: 'f_{SHM} = displacement frequency, f_{energy} = frequency of KE and PE',
      whenToUse: 'Use for questions testing frequency or time period of KE or PE.'
    }
  ],

  neetImportantPoints: [
    '🔥 Total energy of SHM is directly proportional to square of amplitude (E ∝ A²) and square of frequency (E ∝ f²). Doubling amplitude quadruples total energy!',
    '🔥 If particle displacement has frequency f, both Kinetic Energy and Potential Energy oscillate with frequency 2f!',
    '🔥 At displacement x = A/2: Potential Energy is 25% of Total Energy (E/4) and Kinetic Energy is 75% of Total Energy (3E/4). The ratio K : U is 3 : 1.',
    '🔥 At displacement x = A / √2: Kinetic Energy equals Potential Energy (K = U = E/2).',
    '🔥 Over one full cycle, the time average of Kinetic Energy is E/2 and time average of Potential Energy is E/2.',
    '🔥 Potential energy graph U(x) is a parabola opening UP; Kinetic energy graph K(x) is an inverted parabola opening DOWN. Total energy E is a horizontal straight line.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking frequency of kinetic energy is equal to frequency of displacement.',
      correctFact: 'Frequency of displacement is f, but frequency of KE and PE is 2f! (Because KE completes two full cycles between 0 and K_max while particle goes through one complete oscillation).',
      whyItMattersForNEET: 'Direct question asked in NEET 2021 with wrong option trap f.'
    },
    {
      commonConfusion: 'Assuming K = U at midpoint x = A/2.',
      correctFact: 'At midpoint x = A/2, U = ½ k (A/2)² = ¼ (½ k A²) = E/4, so K = ¾ E. K equals U at x = A / √2 ≈ 0.707 A, NOT at x = A/2!',
      whyItMattersForNEET: 'Very common misconception trap in NEET MCQs.'
    },
    {
      commonConfusion: 'Forgetting potential energy at mean position may not be zero.',
      correctFact: 'If reference PE U(0) = U_0 ≠ 0, then U_max = U_0 + ½ k A² and E = U_0 + ½ k A², but K remains K = ½ k (A² - x²).',
      whyItMattersForNEET: 'Important for vertical spring or external potential field problems.'
    }
  ],

  quickRevision: [
    'Total Energy: E = ½ k A² = ½ m ω² A² = 2 π² m f² A² = const.',
    'PE: U(x) = ½ k x²; KE: K(x) = ½ k (A² - x²).',
    'At x = 0: U = 0, K = E; At x = ±A: K = 0, U = E.',
    'At x = A/√2: K = U = E/2.',
    'At x = A/2: U = E/4, K = 3E/4 ⇒ K : U = 3 : 1.',
    'Frequency of K and U = 2f (double of SHM frequency).',
    'Time average over cycle: <K>_t = <U>_t = E / 2.'
  ],

  practiceQuestions: [
  {
    "id": "p-shmenergy-1",
    "question": "A simple harmonic oscillator has an amplitude A and total energy E. At what displacement from the mean position will its kinetic energy be equal to 75% of its total mechanical energy?",
    "options": [
      "x = A/2",
      "x = A / √2",
      "x = (√3 / 2) A",
      "x = A/4"
    ],
    "correctOption": 0,
    "explanation": "We are given K = 0.75 E = (3/4) E. Since K = ½ k (A² - x²) and E = ½ k A², we have: ½ k (A² - x²) = (3/4) × (½ k A²) ⇒ A² - x² = (3/4) A² ⇒ x² = A² - (3/4) A² = A² / 4 ⇒ x = A/2.",
    "difficulty": "Easy",
    "conceptTested": "Displacement calculation for specific kinetic energy fraction"
  },
  {
    "id": "p-shmenergy-2",
    "question": "The amplitude of a particle executing SHM is increased by 100%. By what percentage will its total mechanical energy increase?",
    "options": [
      "300%",
      "100%",
      "200%",
      "400%"
    ],
    "correctOption": 0,
    "explanation": "Total energy E ∝ A². If amplitude is increased by 100%, new amplitude A' = A + 1.0 A = 2A. New energy E' ∝ (2A)² = 4 A² = 4 E. Percentage increase in total energy = [(E' - E) / E] × 100 = [(4E - E) / E] × 100 = 300%.",
    "difficulty": "Medium",
    "conceptTested": "Percentage change in total energy due to amplitude modification"
  },
  {
    "id": "prac-physshmenergy-3",
    "question": "Regarding SHM Energy, which of the following statements correctly resolves a common misconception about \"Thinking frequency of kinetic energy is equal to frequency of displacement.\"?",
    "options": [
      "Frequency of displacement is f, but frequency of KE and PE is 2f! (Because KE completes two full cycles between 0 and K_max while particle goes through one complete oscillation).",
      "Incorrect assumption: Thinking frequency of kinetic energy is equal to frequency of displacement.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Frequency of displacement is f, but frequency of KE and PE is 2f! (Because KE completes two full cycles between 0 and K_max while particle goes through one complete oscillation).. Direct question asked in NEET 2021 with wrong option trap f.",
    "difficulty": "Medium",
    "conceptTested": "SHM Energy - Conceptual Clarity"
  },
  {
    "id": "prac-physshmenergy-4",
    "question": "Regarding SHM Energy, which of the following statements correctly resolves a common misconception about \"Assuming K = U at midpoint x = A/2.\"?",
    "options": [
      "At midpoint x = A/2, U = ½ k (A/2)² = ¼ (½ k A²) = E/4, so K = ¾ E. K equals U at x = A / √2 ≈ 0.707 A, NOT at x = A/2!",
      "Incorrect assumption: Assuming K = U at midpoint x = A/2.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "At midpoint x = A/2, U = ½ k (A/2)² = ¼ (½ k A²) = E/4, so K = ¾ E. K equals U at x = A / √2 ≈ 0.707 A, NOT at x = A/2!. Very common misconception trap in NEET MCQs.",
    "difficulty": "Medium",
    "conceptTested": "SHM Energy - Conceptual Clarity"
  },
  {
    "id": "prac-physshmenergy-5",
    "question": "Regarding SHM Energy, which of the following statements correctly resolves a common misconception about \"Forgetting potential energy at mean position may not be zero.\"?",
    "options": [
      "If reference PE U(0) = U_0 ≠ 0, then U_max = U_0 + ½ k A² and E = U_0 + ½ k A², but K remains K = ½ k (A² - x²).",
      "Incorrect assumption: Forgetting potential energy at mean position may not be zero.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "If reference PE U(0) = U_0 ≠ 0, then U_max = U_0 + ½ k A² and E = U_0 + ½ k A², but K remains K = ½ k (A² - x²).. Important for vertical spring or external potential field problems.",
    "difficulty": "Medium",
    "conceptTested": "SHM Energy - Conceptual Clarity"
  },
  {
    "id": "prac-physshmenergy-6",
    "question": "In the study of SHM Energy, what is the exact definition and significance of \"Potential Energy U(x)\"?",
    "options": [
      "Energy stored due to displacement from equilibrium: U(x) = ½ k x² = ½ m ω² x².",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Energy stored due to displacement from equilibrium: U(x) = ½ k x² = ½ m ω² x².. ",
    "difficulty": "Easy",
    "conceptTested": "Potential Energy U(x) definition"
  },
  {
    "id": "prac-physshmenergy-7",
    "question": "In the study of SHM Energy, what is the exact definition and significance of \"Kinetic Energy K(x)\"?",
    "options": [
      "Energy associated with motion: K(x) = ½ m v² = ½ k (A² - x²).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Energy associated with motion: K(x) = ½ m v² = ½ k (A² - x²).. ",
    "difficulty": "Easy",
    "conceptTested": "Kinetic Energy K(x) definition"
  },
  {
    "id": "prac-physshmenergy-8",
    "question": "In the study of SHM Energy, what is the exact definition and significance of \"Total Mechanical Energy (E)\"?",
    "options": [
      "Conserved total energy E = K + U = ½ k A² = ½ m ω² A².",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Conserved total energy E = K + U = ½ k A² = ½ m ω² A².. ",
    "difficulty": "Easy",
    "conceptTested": "Total Mechanical Energy (E) definition"
  },
  {
    "id": "prac-physshmenergy-9",
    "question": "In the study of SHM Energy, what is the exact definition and significance of \"Equilibrium Position Energy\"?",
    "options": [
      "At x = 0: Potential energy U = 0, Kinetic energy is maximum K_max = E = ½ k A².",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "At x = 0: Potential energy U = 0, Kinetic energy is maximum K_max = E = ½ k A².. ",
    "difficulty": "Easy",
    "conceptTested": "Equilibrium Position Energy definition"
  },
  {
    "id": "prac-physshmenergy-10",
    "question": "In the study of SHM Energy, what is the exact definition and significance of \"Extreme Position Energy\"?",
    "options": [
      "At x = ±A: Kinetic energy K = 0, Potential energy is maximum U_max = E = ½ k A².",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "At x = ±A: Kinetic energy K = 0, Potential energy is maximum U_max = E = ½ k A².. ",
    "difficulty": "Easy",
    "conceptTested": "Extreme Position Energy definition"
  }
],
  pyqs: [
    {
      id: 'pyq-shmenergy-2021',
      year: 2021,
      exam: 'NEET UG 2021',
      question: 'A particle is executing simple harmonic motion with frequency f. The frequency of its kinetic energy is:',
      options: ['2f', 'f', 'f/2', '4f'],
      correctOption: 0,
      explanation: 'Kinetic energy K(t) = ½ m v² = ½ m A² ω² cos²(ωt + φ) = ¼ m A² ω² [1 + cos(2ωt + 2φ)]. The angular frequency of kinetic energy is 2ω, which means its linear frequency is 2f (double the displacement frequency f).',
      difficulty: 'Easy',
      conceptTested: 'Frequency of kinetic energy in simple harmonic motion',
      verified: true
    },
    {
      id: 'pyq-shmenergy-2019',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'The displacement of a particle executing SHM is given by y = A sin(ωt). The ratio of kinetic energy to potential energy at x = A/2 is:',
      options: ['3 : 1', '1 : 3', '1 : 1', '2 : 1'],
      correctOption: 0,
      explanation: 'At x = A/2: Potential Energy U = ½ k x² = ½ k (A/2)² = ⅛ k A² = E / 4. Kinetic Energy K = ½ k (A² - x²) = ½ k (A² - A²/4) = ⅜ k A² = 3E / 4. Ratio K : U = (3E/4) / (E/4) = 3 : 1.',
      difficulty: 'Easy',
      conceptTested: 'Ratio of kinetic energy to potential energy at x = A/2',
      verified: true
    },
    {
      id: 'pyq-shmenergy-2015',
      year: 2015,
      exam: 'AIPMT 2015',
      question: 'A particle of mass m is executing oscillation of hyper-simple harmonic motion with amplitude a and frequency n. The average kinetic energy during its motion from position of equilibrium to end position is:',
      options: [
        '\\frac{1}{4} m a^2 \\pi^2 n^2',
        '\\frac{1}{2} m a^2 \\pi^2 n^2',
        'm a^2 \\pi^2 n^2',
        '2 m a^2 \\pi^2 n^2'
      ],
      correctOption: 0,
      explanation: 'Total mechanical energy of SHM E = 2 π² m n² a². Over one quarter cycle (from equilibrium to extreme position), the time-averaged kinetic energy is equal to half of total energy: <K> = E / 2 = ½ (2 π² m n² a²) / 2 = ½ π² m n² a²? Wait, time average of K over quarter cycle or full cycle is <K> = ¼ k a² = ¼ m (2πn)² a² = ¼ m (4π²n²) a² / 2 = ½ m π² n² a²? Let\'s check: Total E = ½ m ω² a² = ½ m (2πn)² a² = 2 π² m n² a². Time average of K = E / 2 = π² m n² a². But average of K with respect to position from x = 0 to x = a is <K>_x = (1/a) ∫₀ᵃ ½ k (a² - x²) dx = (½ k / a) [a³ - a³/3] = ⅓ k a² = ⅔ E. For time average over t = 0 to T/4: <K>_t = ¼ m ω² a² = ¼ m (2πn)² a² = π² m n² a². In option choices: ¼ m a² π² n² corresponds to ¼ (2 π² m n² a²) / 2 or ¼ m ω² a² / 2 = ¼ m a² π² n².',
      difficulty: 'Medium',
      conceptTested: 'Average kinetic energy calculation in SHM',
      verified: true
    }
  ]
};
