import { DetailedTopicContent } from '../../types/neet';

export const physShmEquationDetails: DetailedTopicContent = {
  topicId: 'phys-shm-equation',
  topicName: 'SHM Equation',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Oscillations & Waves',
  chapter: 'Oscillations',

  whatIsThisTopic: 'SHM Equation introduces Simple Harmonic Motion—a special type of periodic oscillatory motion where restoring force is directly proportional to displacement from equilibrium and acts in the opposite direction. It covers kinematics of SHM including displacement x = A sin(ωt + φ), velocity v = ±ω √(A² - x²), acceleration a = -ω² x, phase relationships, maximum values, and graph interpretations for NEET UG.',

  basicIdea: [
    'Periodic vs Oscillatory Motion: Periodic motion repeats itself in equal time intervals (e.g., motion of planets). Oscillatory motion is to-and-fro motion about a fixed mean position (e.g., pendulum, vibrating tuning fork). Every oscillatory motion is periodic, but not every periodic motion is oscillatory.',
    'Simple Harmonic Motion (SHM): A special linear oscillatory motion where restoring force F is directly proportional to displacement x from mean position and acts towards mean position: F = -k x, or acceleration a = -(k/m) x = -ω² x.',
    'Displacement Equation: x(t) = A sin(ωt + φ) or x(t) = A cos(ωt + φ), where A is amplitude, ω is angular frequency (2π/T = 2πf), and (ωt + φ) is phase at time t, with φ being the initial phase (epoch).',
    'Velocity in SHM: Derivative of displacement v = dx/dt = Aω cos(ωt + φ) = ±ω √(A² - x²). Maximum velocity occurs at mean position (x = 0): v_max = Aω. Velocity is zero at extreme positions (x = ±A).',
    'Acceleration in SHM: Derivative of velocity a = dv/dt = -Aω² sin(ωt + φ) = -ω² x. Maximum acceleration occurs at extreme positions (x = ±A): a_max = ω² A. Acceleration is zero at mean position (x = 0).',
    'Phase Relationships: Velocity leads displacement by π/2 rad (90°). Acceleration leads velocity by π/2 rad (90°). Acceleration leads displacement by π rad (180°, opposite phase).'
  ],

  importantTerms: [
    {
      term: 'Mean Position (Equilibrium)',
      definition: 'The fixed point where net force on the oscillating particle is zero (F = 0, x = 0).'
    },
    {
      term: 'Amplitude (A)',
      definition: 'The maximum magnitude of displacement of the particle on either side from its mean position (unit: meter, m).'
    },
    {
      term: 'Time Period (T)',
      definition: 'The time taken by the particle to complete one full oscillation: T = 2π / ω (unit: second, s).'
    },
    {
      term: 'Frequency (f or n)',
      definition: 'The number of complete oscillations executed by the particle per second: f = 1 / T = ω / (2π) (unit: Hertz, Hz).'
    },
    {
      term: 'Angular Frequency (ω)',
      definition: 'Rate of change of phase angle: ω = 2π f = 2π / T = √(k/m) (unit: rad/s).'
    },
    {
      term: 'Phase & Initial Phase (Epoch φ)',
      definition: 'Phase (ωt + φ) defines state of motion (position and velocity direction) at instant t. Epoch φ is the initial phase at t = 0.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Kinematics of Simple Harmonic Motion',
      paragraphs: [
        'Definition & Differential Equation:',
        '• Condition for SHM: Restoring force F = -k x ⇒ m a = -k x ⇒ a = - (k/m) x = - ω² x.',
        '• Differential Equation: d²x / dt² + ω² x = 0, where ω = √(k/m).',
        '• Displacement: If particle starts from mean position x(0) = 0, x(t) = A sin(ωt). If particle starts from extreme position x(0) = A, x(t) = A cos(ωt). General form: x(t) = A sin(ωt + φ).',
        'Velocity Formulae:',
        '• As a function of time: v(t) = dx/dt = A ω cos(ωt + φ).',
        '• As a function of position: v(x) = ± ω √(A² - x²).',
        '• At mean position (x = 0): v is maximum, v_max = A ω.',
        '• At extreme positions (x = ±A): v = 0.',
        'Acceleration Formulae:',
        '• As a function of time: a(t) = dv/dt = - A ω² sin(ωt + φ).',
        '• As a function of position: a(x) = - ω² x.',
        '• At mean position (x = 0): a = 0.',
        '• At extreme positions (x = ±A): a is maximum, a_max = ω² A (directed towards mean position).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 230" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Axes -->
          <line x1="40" y1="115" x2="460" y2="115" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4"/>
          <line x1="40" y1="20" x2="40" y2="210" stroke="#94a3b8" stroke-width="2"/>
          <text x="460" y="110" fill="#94a3b8" font-size="11">Time (t)</text>
          <text x="15" y="25" fill="#94a3b8" font-size="11">Value</text>

          <!-- Displacement x(t) = A sin(wt) - Blue -->
          <path d="M 40 115 Q 120 20 200 115 T 360 115 T 440 115" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
          <text x="210" y="45" fill="#38bdf8" font-size="11" font-weight="bold">x = A sin(ωt)</text>

          <!-- Velocity v(t) = A w cos(wt) - Green -->
          <path d="M 40 45 Q 120 115 200 185 T 360 45 T 440 185" fill="none" stroke="#10b981" stroke-width="2.5"/>
          <text x="120" y="145" fill="#10b981" font-size="11" font-weight="bold">v = Aω cos(ωt) [Leads by π/2]</text>

          <!-- Acceleration a(t) = -A w^2 sin(wt) - Red -->
          <path d="M 40 115 Q 120 210 200 115 T 360 115 T 440 115" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="5,3"/>
          <text x="280" y="200" fill="#ef4444" font-size="11" font-weight="bold">a = -Aω² sin(ωt) [Opposite phase π]</text>
        </svg>`,
        caption: 'SHM Kinematics Graphs: Displacement x(t), Velocity v(t), and Acceleration a(t) showing phase lead.'
      }
    },
    {
      heading: '2. SHM Phase Differences & Graph Relationships',
      paragraphs: [
        'Phase Lead Comparison:',
        '• Phase of displacement = (ωt + φ)',
        '• Phase of velocity = (ωt + φ + π/2) ⇒ Velocity leads displacement by π/2 (90°).',
        '• Phase of acceleration = (ωt + φ + π) ⇒ Acceleration leads displacement by π (180°) and leads velocity by π/2 (90°).',
        'Key SHM Graphs:',
        '1. v-x Graph: (v/Aω)² + (x/A)² = 1 ⇒ An ELLIPSE centered at origin. If axes are scaled as v/ω and x, it becomes a CIRCLE.',
        '2. a-x Graph: a = - ω² x ⇒ A STRAIGHT LINE passing through origin with negative slope m = - ω².',
        '3. F-x Graph: F = - k x ⇒ A STRAIGHT LINE with negative slope m = - k.',
        'Standard Time-Fraction Calculations (Very common in NEET!):',
        '• Time to move from x = 0 to x = A/2: x = A sin(ωt) ⇒ A/2 = A sin(ωt) ⇒ ωt = π/6 ⇒ t = T/12.',
        '• Time to move from x = A/2 to x = A: Δt = T/4 - T/12 = T/6.',
        '• Time to move from x = 0 to x = A/√2: t = T/8.'
      ]
    }
  ],

  formulae: [
    {
      title: 'SHM Displacement',
      formulaName: 'Displacement Equation',
      formula: 'x(t) = A \\sin(\\omega t + \\phi)',
      meaning: 'Gives particle position at any instant t.',
      variables: 'x = displacement, A = amplitude, ω = angular frequency, t = time, φ = initial phase',
      whenToUse: 'Use for position, phase, or time calculations in SHM.'
    },
    {
      title: 'SHM Velocity',
      formulaName: 'Velocity-Position Relation',
      formula: 'v = \\pm \\omega \\sqrt{A^2 - x^2}',
      meaning: 'Relates particle speed directly to its displacement from mean position.',
      variables: 'v = speed at position x, ω = angular frequency, A = amplitude, x = displacement',
      whenToUse: 'Use when position x is given and speed v needs to be calculated.'
    },
    {
      title: 'SHM Acceleration',
      formulaName: 'Acceleration-Position Relation',
      formula: 'a = - \\omega^2 x',
      meaning: 'Fundamental defining relation of SHM.',
      variables: 'a = acceleration, ω = angular frequency, x = displacement from mean position',
      whenToUse: 'Use to check if motion is SHM or to find maximum acceleration a_max = ω² A.'
    },
    {
      title: 'Angular Frequency & Time Period',
      formulaName: 'Frequency Relations',
      formula: '\\omega = \\frac{2\\pi}{T} = 2\\pi f = \\sqrt{\\frac{k}{m}}',
      meaning: 'Connects angular frequency, time period, linear frequency, mass, and force constant.',
      variables: 'ω = angular frequency (rad/s), T = time period (s), f = frequency (Hz), k = spring constant (N/m), m = mass (kg)',
      whenToUse: 'Universal conversion formula across all SHM numerical problems.'
    }
  ],

  neetImportantPoints: [
    '🔥 Phase difference between displacement and acceleration in SHM is strictly π radians (180°).',
    '🔥 Phase difference between displacement and velocity is π/2 radians (90°).',
    '🔥 The v-x graph of an SHM is an ELLIPSE. It becomes a circle if v/ω is plotted against x.',
    '🔥 The a-x graph of an SHM is a STRAIGHT LINE passing through origin with negative slope (-ω²).',
    '🔥 Time taken to go from mean position (x = 0) to x = A/2 is T/12, whereas time to go from x = A/2 to extreme (x = A) is T/6! (Note: T/12 < T/6 because particle moves faster near mean position!).',
    '🔥 If two SHMs in same direction x_1 = A_1 sin(ωt) and x_2 = A_2 sin(ωt + φ) superimpose, resultant amplitude is A = √(A_1² + A_2² + 2 A_1 A_2 cos φ).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming time taken to go from 0 to A/2 is equal to time taken to go from A/2 to A.',
      correctFact: 'Since speed is highest near mean position and decreases towards extreme position, time from 0 to A/2 is T/12 (shorter), while time from A/2 to A is T/6 (longer). Total time = T/12 + T/6 = T/4.',
      whyItMattersForNEET: 'Direct numerical questions on time intervals from x = 0 to x = A/2 appear frequently in NEET.'
    },
    {
      commonConfusion: 'Confusing phase difference between displacement and acceleration with phase difference between displacement and velocity.',
      correctFact: 'Displacement and velocity differ by π/2 (90°). Displacement and acceleration differ by π (180°, opposite direction).',
      whyItMattersForNEET: 'Very common theoretical MCQ in NEET paper.'
    },
    {
      commonConfusion: 'Forgetting minus sign in a = -ω² x.',
      correctFact: 'The minus sign signifies that acceleration is ALWAYS directed opposite to displacement (towards mean position).',
      whyItMattersForNEET: 'Affects vector directions and phase calculation.'
    }
  ],

  quickRevision: [
    'Condition for SHM: F = -k x or a = -ω² x.',
    'Displacement: x = A sin(ωt + φ).',
    'Velocity: v = Aω cos(ωt + φ) = ±ω √(A² - x²); v_max = Aω (at x = 0).',
    'Acceleration: a = -ω² x; a_max = ω² A (at x = ±A).',
    'Phase lead: Velocity leads x by π/2; Acceleration leads x by π.',
    'v-x graph = Ellipse; a-x graph = Straight line with slope -ω².',
    'Time intervals: 0 → A/2 is T/12; A/2 → A is T/6; 0 → A/√2 is T/8.'
  ],

  practiceQuestions: [
  {
    "id": "p-shmeq-1",
    "question": "A particle executes simple harmonic motion along a straight line. Its maximum speed is 10 cm/s and its maximum acceleration is 31.4 cm/s². Calculate the time period of oscillation. (Take π = 3.14)",
    "options": [
      "2.0 s",
      "1.0 s",
      "3.14 s",
      "0.5 s"
    ],
    "correctOption": 0,
    "explanation": "We know v_max = Aω = 10 cm/s and a_max = ω² A = 31.4 cm/s². Dividing a_max by v_max gives: ω = a_max / v_max = 31.4 / 10 = 3.14 rad/s. Time period T = 2π / ω = (2 × 3.14) / 3.14 = 2.0 s.",
    "difficulty": "Easy",
    "conceptTested": "Relation between maximum velocity, maximum acceleration, and time period"
  },
  {
    "id": "p-shmeq-2",
    "question": "The displacement of a particle in SHM is x = A sin(ωt). The time taken by the particle to travel from x = 0 to x = A/2 is t_1, and from x = A/2 to x = A is t_2. The ratio t_1 : t_2 is:",
    "options": [
      "1 : 2",
      "1 : 1",
      "2 : 1",
      "1 : 3"
    ],
    "correctOption": 0,
    "explanation": "For x = 0 to A/2: A/2 = A sin(ω t_1) ⇒ sin(ω t_1) = 1/2 ⇒ ω t_1 = π/6 ⇒ t_1 = T/12. Time from x = 0 to A is T/4, so t_2 = T/4 - t_1 = T/4 - T/12 = T/6. Ratio t_1 : t_2 = (T/12) : (T/6) = 1 : 2.",
    "difficulty": "Medium",
    "conceptTested": "Time interval calculation in SHM"
  },
  {
    "id": "prac-physshmequation-3",
    "question": "Regarding SHM Equation, which of the following statements correctly resolves a common misconception about \"Assuming time taken to go from 0 to A/2 is equal to time taken to go from A/2 to A.\"?",
    "options": [
      "Since speed is highest near mean position and decreases towards extreme position, time from 0 to A/2 is T/12 (shorter), while time from A/2 to A is T/6 (longer). Total time = T/12 + T/6 = T/4.",
      "Incorrect assumption: Assuming time taken to go from 0 to A/2 is equal to time taken to go from A/2 to A.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Since speed is highest near mean position and decreases towards extreme position, time from 0 to A/2 is T/12 (shorter), while time from A/2 to A is T/6 (longer). Total time = T/12 + T/6 = T/4.. Direct numerical questions on time intervals from x = 0 to x = A/2 appear frequently in NEET.",
    "difficulty": "Medium",
    "conceptTested": "SHM Equation - Conceptual Clarity"
  },
  {
    "id": "prac-physshmequation-4",
    "question": "Regarding SHM Equation, which of the following statements correctly resolves a common misconception about \"Confusing phase difference between displacement and acceleration with phase difference between displacement and velocity.\"?",
    "options": [
      "Displacement and velocity differ by π/2 (90°). Displacement and acceleration differ by π (180°, opposite direction).",
      "Incorrect assumption: Confusing phase difference between displacement and acceleration with phase difference between displacement and velocity.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Displacement and velocity differ by π/2 (90°). Displacement and acceleration differ by π (180°, opposite direction).. Very common theoretical MCQ in NEET paper.",
    "difficulty": "Medium",
    "conceptTested": "SHM Equation - Conceptual Clarity"
  },
  {
    "id": "prac-physshmequation-5",
    "question": "Regarding SHM Equation, which of the following statements correctly resolves a common misconception about \"Forgetting minus sign in a = -ω² x.\"?",
    "options": [
      "The minus sign signifies that acceleration is ALWAYS directed opposite to displacement (towards mean position).",
      "Incorrect assumption: Forgetting minus sign in a = -ω² x.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "The minus sign signifies that acceleration is ALWAYS directed opposite to displacement (towards mean position).. Affects vector directions and phase calculation.",
    "difficulty": "Medium",
    "conceptTested": "SHM Equation - Conceptual Clarity"
  },
  {
    "id": "prac-physshmequation-6",
    "question": "In the study of SHM Equation, what is the exact definition and significance of \"Mean Position (Equilibrium)\"?",
    "options": [
      "The fixed point where net force on the oscillating particle is zero (F = 0, x = 0).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The fixed point where net force on the oscillating particle is zero (F = 0, x = 0).. ",
    "difficulty": "Easy",
    "conceptTested": "Mean Position (Equilibrium) definition"
  },
  {
    "id": "prac-physshmequation-7",
    "question": "In the study of SHM Equation, what is the exact definition and significance of \"Amplitude (A)\"?",
    "options": [
      "The maximum magnitude of displacement of the particle on either side from its mean position (unit: meter, m).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The maximum magnitude of displacement of the particle on either side from its mean position (unit: meter, m).. ",
    "difficulty": "Easy",
    "conceptTested": "Amplitude (A) definition"
  },
  {
    "id": "prac-physshmequation-8",
    "question": "In the study of SHM Equation, what is the exact definition and significance of \"Time Period (T)\"?",
    "options": [
      "The time taken by the particle to complete one full oscillation: T = 2π / ω (unit: second, s).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The time taken by the particle to complete one full oscillation: T = 2π / ω (unit: second, s).. ",
    "difficulty": "Easy",
    "conceptTested": "Time Period (T) definition"
  },
  {
    "id": "prac-physshmequation-9",
    "question": "In the study of SHM Equation, what is the exact definition and significance of \"Frequency (f or n)\"?",
    "options": [
      "The number of complete oscillations executed by the particle per second: f = 1 / T = ω / (2π) (unit: Hertz, Hz).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The number of complete oscillations executed by the particle per second: f = 1 / T = ω / (2π) (unit: Hertz, Hz).. ",
    "difficulty": "Easy",
    "conceptTested": "Frequency (f or n) definition"
  },
  {
    "id": "prac-physshmequation-10",
    "question": "In the study of SHM Equation, what is the exact definition and significance of \"Angular Frequency (ω)\"?",
    "options": [
      "Rate of change of phase angle: ω = 2π f = 2π / T = √(k/m) (unit: rad/s).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Rate of change of phase angle: ω = 2π f = 2π / T = √(k/m) (unit: rad/s).. ",
    "difficulty": "Easy",
    "conceptTested": "Angular Frequency (ω) definition"
  }
],
  pyqs: [
    {
      id: 'pyq-shmeq-2020',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'The phase difference between displacement and acceleration of a particle in a simple harmonic motion is:',
      options: ['π rad', 'π/2 rad', 'zero', '3π/2 rad'],
      correctOption: 0,
      explanation: 'In SHM, x = A sin(ωt) and acceleration a = -ω² A sin(ωt) = ω² A sin(ωt + π). The phase difference between displacement (ωt) and acceleration (ωt + π) is π radians (180°).',
      difficulty: 'Easy',
      conceptTested: 'Phase difference between displacement and acceleration in SHM',
      verified: true
    },
    {
      id: 'pyq-shmeq-2019',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'A particle is executing SHM along a straight line. Its velocities at distances x_1 and x_2 from the mean position are v_1 and v_2, respectively. Its time period is:',
      options: [
        '2π \\sqrt{\\frac{x_2^2 - x_1^2}{v_1^2 - v_2^2}}',
        '2π \\sqrt{\\frac{v_1^2 - v_2^2}{x_2^2 - x_1^2}}',
        '2π \\sqrt{\\frac{x_1^2 + x_2^2}{v_1^2 + v_2^2}}',
        '2π \\sqrt{\\frac{v_1^2 + v_2^2}{x_1^2 + x_2^2}}'
      ],
      correctOption: 0,
      explanation: 'Using v² = ω² (A² - x²): v_1² = ω² (A² - x_1²) and v_2² = ω² (A² - x_2²). Subtracting the two equations gives: v_1² - v_2² = ω² (x_2² - x_1²) ⇒ ω = \\sqrt{\\frac{v_1^2 - v_2^2}{x_2^2 - x_1^2}}. Since T = 2π / ω, T = 2π \\sqrt{\\frac{x_2^2 - x_1^2}{v_1^2 - v_2^2}}.',
      difficulty: 'Medium',
      conceptTested: 'Time period derivation from velocities at two positions in SHM',
      verified: true
    },
    {
      id: 'pyq-shmeq-2017',
      year: 2017,
      exam: 'NEET UG 2017',
      question: 'A particle executes simple harmonic motion with an amplitude of 5 cm. When its displacement is 3 cm, the magnitude of its velocity is 3π cm/s. Its time period is:',
      options: ['2.67 s', '1.33 s', '4.0 s', '2.0 s'],
      correctOption: 0,
      explanation: 'Given A = 5 cm, x = 3 cm, v = 3π cm/s. Using v = ω \\sqrt{A^2 - x^2} ⇒ 3π = ω \\sqrt{5^2 - 3^2} = ω \\sqrt{16} = 4ω ⇒ ω = 3π / 4 rad/s. Time period T = 2π / ω = 2π / (3π/4) = 8/3 ≈ 2.67 s.',
      difficulty: 'Medium',
      conceptTested: 'Calculation of time period using velocity-displacement formula',
      verified: true
    }
  ]
};
