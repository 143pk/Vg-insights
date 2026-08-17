import { DetailedTopicContent } from '../../types/neet';

export const physPendulumSpringDetails: DetailedTopicContent = {
  topicId: 'phys-pendulum-spring',
  topicName: 'Pendulum & Spring',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Oscillations & Waves',
  chapter: 'Oscillations',

  whatIsThisTopic: 'Pendulum & Spring covers the two foundational physical realization models of simple harmonic motion: the Spring-Mass System and the Simple Pendulum. It details restoring force derivation, time period equations, combinations of springs (series & parallel), cutting of springs, effective gravity g_eff variations (elevators, buoyancy, electric fields), and thermal clock drift numerical patterns in NEET UG.',

  basicIdea: [
    'Spring-Mass Oscillator: A block of mass m attached to a light spring of stiffness k undergoes SHM with angular frequency ω = √(k/m) and time period T = 2π √(m/k). Time period depends ONLY on mass m and spring constant k — it is completely independent of gravity g and orientation (horizontal, vertical, or inclined)!',
    'Vertical Spring Stretch: When mass m is hung vertically, it stretches the spring by equilibrium extension x_0 = m g / k. Substituting k = m g / x_0 into time period gives T = 2π √(x_0 / g).',
    'Cutting Springs: Spring constant k is inversely proportional to spring length L (k L = const). If a spring is cut into two parts in length ratio l_1 : l_2, the force constants become k_1 = k (L / l_1) and k_2 = k (L / l_2).',
    'Combinations of Springs: Series combination 1/k_eq = 1/k_1 + 1/k_eq (k_eq = k_1 k_2 / (k_1 + k_2)). Parallel combination k_eq = k_1 + k_2. (Note: A mass between two fixed walls attached to two springs is in PARALLEL, k_eq = k_1 + k_2!).',
    'Simple Pendulum: A point mass m suspended by a massless in-extensible string of length L. For small angular displacement (θ < 10°), restoring torque τ = -m g L sin θ ≈ -m g L θ. Time period T = 2π √(L / g).',
    'Seconds Pendulum: A simple pendulum with time period T = 2 seconds (1 sec for forward swing, 1 sec for return swing). Its length on Earth is approximately L ≈ 1.0 meter (since L = g / π² ≈ 0.993 m).',
    'Effective Gravity (g_eff) Modifications: In an accelerating lift with upward acceleration a, g_eff = g + a (T decreases, pendulum swings faster). In downward acceleration a, g_eff = g - a (T increases, swings slower). In free fall (a = g), g_eff = 0 ⇒ T → ∞ (pendulum stops oscillating).'
  ],

  importantTerms: [
    {
      term: 'Spring Constant (k)',
      definition: 'Restoring force per unit elongation or compression (k = F/x, unit: N/m). Measure of spring stiffness.'
    },
    {
      term: 'Effective Spring Constant (k_eq)',
      definition: 'Equivalent force constant representing a combination of multiple springs.'
    },
    {
      term: 'Simple Pendulum',
      definition: 'An ideal system comprising a heavy point mass (bob) suspended by a light, flexible, in-extensible string from a rigid support.'
    },
    {
      term: 'Seconds Pendulum',
      definition: 'A simple pendulum whose time period of oscillation is strictly equal to 2 seconds (length L ≈ 1 m).'
    },
    {
      term: 'Effective Acceleration due to Gravity (g_eff)',
      definition: 'Net acceleration experienced by pendulum bob due to vector sum of gravity, fictitious forces (in non-inertial frames), buoyant force, or electric forces.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Spring-Mass Oscillators & Spring Combinations',
      paragraphs: [
        'Spring-Mass System Mechanics:',
        '• Restoring Force: F = - k x ⇒ m a = - k x ⇒ a = - (k/m) x.',
        '• Time Period: T = 2π √(m/k) and Frequency: f = (1/2π) √(k/m).',
        '• Vertical Spring: At equilibrium position, m g = k x_0 ⇒ x_0 = m g / k. When displaced further by x, restoring force F = - k (x_0 + x) + m g = - k x. Time period remains T = 2π √(m/k) = 2π √(x_0 / g).',
        'Cutting of Springs (Very Common NEET Question!):',
        '• Property: k × L = constant.',
        '• If a spring of length L and constant k is cut into n equal pieces: each piece has length L/n and spring constant k\' = n k.',
        '• If cut into ratio l_1 : l_2 (where l_1 + l_2 = L): k_1 = k (1 + l_2/l_1) and k_2 = k (1 + l_1/l_2).',
        'Spring Combinations:',
        '1. Series Combination: Springs connected end-to-end. Same force F acts on both springs, elongations add (x_net = x_1 + x_2).',
        '   1/k_eq = 1/k_1 + 1/k_2 ⇒ k_eq = (k_1 k_2) / (k_1 + k_2). Time period T = 2π √[m (k_1 + k_2) / (k_1 k_2)].',
        '2. Parallel Combination: Springs connected alongside. Same displacement x for both springs, forces add (F_net = F_1 + F_2).',
        '   k_eq = k_1 + k_2. Time period T = 2π √[m / (k_1 + k_2)].',
        '   Special Trap: A mass block placed between two fixed walls attached to two springs of constants k_1 and k_2 is in PARALLEL! Both springs pull/push together, so k_eq = k_1 + k_2.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 220" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Simple Pendulum (Left) -->
          <line x1="60" y1="20" x2="160" y2="20" stroke="#94a3b8" stroke-width="4"/>
          <line x1="110" y1="20" x2="130" y2="130" stroke="#f59e0b" stroke-width="2"/>
          <circle cx="130" cy="130" r="14" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
          <text x="130" y="135" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">m</text>
          <text x="110" y="170" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Pendulum: T = 2π√(L/g)</text>

          <!-- Divider -->
          <line x1="230" y1="20" x2="230" y2="200" stroke="#475569" stroke-dasharray="4"/>

          <!-- Spring System (Right) -->
          <line x1="270" y1="20" x2="270" y2="200" stroke="#94a3b8" stroke-width="4"/>
          <!-- Spring zig-zag -->
          <path d="M 270 50 L 320 50 L 330 40 L 340 60 L 350 40 L 360 60 L 370 40 L 380 60 L 390 50 L 410 50" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
          <rect x="410" y="30" width="40" height="40" rx="4" fill="#10b981" stroke="#ffffff" stroke-width="1.5"/>
          <text x="430" y="55" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">m</text>
          <text x="360" y="110" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Spring: T = 2π√(m/k)</text>
          <text x="360" y="130" fill="#94a3b8" font-size="10" text-anchor="middle">(Independent of g!)</text>
        </svg>`,
        caption: 'Simple Pendulum (depends on L and g) vs Spring-Mass Oscillator (depends on m and k).'
      }
    },
    {
      heading: '2. Simple Pendulum & Variations of g_eff',
      paragraphs: [
        'Simple Pendulum Derivation:',
        '• Restoring torque about point of suspension: τ = - m g L sin θ.',
        '• For small angles (θ < 10°): sin θ ≈ θ ⇒ τ = - (m g L) θ.',
        '• Moment of Inertia I = m L² ⇒ I α = - (m g L) θ ⇒ α = - (m g L / m L²) θ = - (g / L) θ.',
        '• Comparing with α = - ω² θ: ω = √(g/L) ⇒ Time Period T = 2π √(L/g).',
        '• Important Properties: T is independent of bob mass m and material, independent of amplitude (for small angles), depends on length L and acceleration due to gravity g.',
        'Effective Gravity Variations in NEET Numerical Problems:',
        '1. Accelerating Lift / Elevator:',
        '   • Moving UP with acceleration a: g_eff = g + a ⇒ T\' = 2π √[L / (g + a)] < T (Clock runs fast, gains time).',
        '   • Moving DOWN with acceleration a: g_eff = g - a ⇒ T\' = 2π √[L / (g - a)] > T (Clock runs slow, loses time).',
        '   • Freely Falling Lift (a = g): g_eff = 0 ⇒ T\' → ∞ (Pendulum stops oscillating).',
        '2. Pendulum Submerged in Liquid of Density ρ_l (Bob Density ρ_b):',
        '   • Apparent weight = m g - Upthrust = m g (1 - ρ_l / ρ_b) ⇒ g_eff = g (1 - ρ_l / ρ_b).',
        '   • New Time Period T\' = T / √(1 - ρ_l / ρ_b) > T.',
        '3. Pendulum Clock Thermal Expansion (Temperature Change Δθ):',
        '   • Change in length ΔL = L α Δθ ⇒ ΔT / T = ½ (ΔL / L) = ½ α Δθ.',
        '   • Time lost or gained per day: Δt = ½ α Δθ × 86400 seconds.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Spring Oscillator Time Period',
      formulaName: 'Spring-Mass Time Period',
      formula: 'T = 2\\pi \\sqrt{\\frac{m}{k}}',
      meaning: 'Calculates period of simple harmonic oscillation for spring-mass system.',
      variables: 'm = mass of oscillating block (kg), k = spring constant (N/m)',
      whenToUse: 'Universal equation for horizontal or vertical spring-mass oscillators.'
    },
    {
      title: 'Spring Combinations',
      formulaName: 'Series and Parallel Spring Constants',
      formula: 'k_{series} = \\frac{k_1 k_2}{k_1 + k_2}, \\quad k_{parallel} = k_1 + k_2',
      meaning: 'Calculates equivalent spring constant for series and parallel arrangements.',
      variables: 'k_1, k_2 = force constants of individual springs',
      whenToUse: 'Use when multiple springs are connected to a single oscillating mass.'
    },
    {
      title: 'Simple Pendulum Time Period',
      formulaName: 'Simple Pendulum Equation',
      formula: 'T = 2\\pi \\sqrt{\\frac{L}{g}}',
      meaning: 'Gives time period of small-angle oscillations of simple pendulum.',
      variables: 'L = length of pendulum string (m), g = acceleration due to gravity (m/s²)',
      whenToUse: 'Use for simple pendulum problems on Earth or other celestial bodies.'
    },
    {
      title: 'Effective Gravity Time Period',
      formulaName: 'Accelerated Frame Pendulum Period',
      formula: 'T\' = 2\\pi \\sqrt{\\frac{L}{g_{eff}}}',
      meaning: 'Calculates pendulum period in accelerating lifts, electric fields, or liquids.',
      variables: 'g_{eff} = effective acceleration (g ± a for lift, g(1 - ρ_l/ρ_b) for liquid)',
      whenToUse: 'Use when pendulum is placed inside non-inertial frame, liquid, or electric field.'
    }
  ],

  neetImportantPoints: [
    '🔥 Time period of a spring-mass system T = 2π √(m/k) does NOT depend on gravity g. It remains unchanged whether operated on Earth, Moon, or inside a freely falling elevator!',
    '🔥 If a spring of constant k is cut into two pieces of equal length, each half has a spring constant of 2k (stiffness doubles!).',
    '🔥 A block attached between two fixed walls by two springs is in PARALLEL combination, so k_eq = k_1 + k_2.',
    '🔥 Time period of a simple pendulum T = 2π √(L/g) is completely independent of the mass of the bob and material of the bob.',
    '🔥 In a lift accelerating UPWARD with acceleration a, effective gravity g_eff = g + a, so time period DECREASES (clock runs FASTER). In a lift accelerating DOWNWARD, g_eff = g - a, so time period INCREASES (clock runs SLOWER).',
    '🔥 In a freely falling lift (a = g), g_eff = 0, so time period T → ∞ (pendulum bob stays wherever positioned and does not oscillate!).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking vertical spring oscillator time period changes when taken to Moon.',
      correctFact: 'Spring oscillator period T = 2π √(m/k) depends strictly on mass and spring constant. It does NOT depend on g, so its period is the SAME on Earth and Moon! (Unlike pendulum period T = 2π √(L/g), which increases on Moon).',
      whyItMattersForNEET: 'A classic comparison question tested repeatedly in NEET.'
    },
    {
      commonConfusion: 'Misidentifying a block attached to springs on opposite sides as a series combination.',
      correctFact: 'When a block is between two fixed walls attached to two springs, displacing the block stretches one spring and compresses the other by the SAME amount x. Total restoring force is F = -(k_1 + k_2)x, which is PARALLEL (k_eq = k_1 + k_2).',
      whyItMattersForNEET: 'Very frequent diagram-based trap in NEET.'
    },
    {
      commonConfusion: 'Assuming spring constant decreases when spring is cut into shorter pieces.',
      correctFact: 'Spring constant is inversely proportional to length (k ∝ 1/L). Shorter springs are stiffer and have LARGER spring constants (k\' > k).',
      whyItMattersForNEET: 'Formula k L = const must be applied correctly.'
    }
  ],

  quickRevision: [
    'Spring-mass: T = 2π √(m/k) (independent of g!).',
    'Vertical spring equilibrium stretch x_0: T = 2π √(x_0/g).',
    'Cutting spring: k L = const; 2 equal halves have k\' = 2k.',
    'Spring series: 1/k_eq = 1/k_1 + 1/k_2; Parallel: k_eq = k_1 + k_2.',
    'Block between 2 spring walls = PARALLEL (k_eq = k_1 + k_2).',
    'Simple pendulum: T = 2π √(L/g) (independent of bob mass).',
    'Seconds pendulum: T = 2 s ⇒ L ≈ 1 m on Earth.',
    'Lift accelerating UP: g_eff = g + a ⇒ T decreases.',
    'Lift accelerating DOWN: g_eff = g - a ⇒ T increases.',
    'Free fall: g_eff = 0 ⇒ T → ∞.'
  ],

  practiceQuestions: [
  {
    "id": "p-pendspr-1",
    "question": "A simple pendulum has a time period T on the surface of Earth. If it is taken inside a spacecraft orbiting Earth at an altitude equal to Earth's radius, what will be its time period of oscillation?",
    "options": [
      "Infinite (∞)",
      "2 T",
      "T / 2",
      "4 T"
    ],
    "correctOption": 0,
    "explanation": "Inside an orbiting spacecraft, the system is in a state of weightlessness (free fall towards Earth). The effective acceleration due to gravity is g_eff = 0. Therefore, time period T' = 2π √(L / g_eff) = 2π √(L / 0) → ∞. The pendulum will not oscillate at all.",
    "difficulty": "Easy",
    "conceptTested": "Pendulum time period in weightlessness frame"
  },
  {
    "id": "p-pendspr-2",
    "question": "Two springs of force constants k_1 and k_2 are connected in series and attached to a mass m. If k_1 = 100 N/m and k_2 = 200 N/m, and m = 2 kg, find the time period of oscillation. (Take π = 3.14)",
    "options": [
      "1.08 s",
      "0.54 s",
      "2.16 s",
      "0.28 s"
    ],
    "correctOption": 0,
    "explanation": "For series springs: k_eq = (k_1 k_2) / (k_1 + k_2) = (100 × 200) / (100 + 200) = 20000 / 300 = 200/3 N/m. Time period T = 2π √(m / k_eq) = 2 × 3.14 × √[2 / (200/3)] = 6.28 × √(6/200) = 6.28 × √(0.03) = 6.28 × 0.1732 ≈ 1.087 s ≈ 1.08 s.",
    "difficulty": "Medium",
    "conceptTested": "Series spring combination time period calculation"
  },
  {
    "id": "prac-physpendulumspring-3",
    "question": "Regarding Pendulum & Spring, which of the following statements correctly resolves a common misconception about \"Thinking vertical spring oscillator time period changes when taken to Moon.\"?",
    "options": [
      "Spring oscillator period T = 2π √(m/k) depends strictly on mass and spring constant. It does NOT depend on g, so its period is the SAME on Earth and Moon! (Unlike pendulum period T = 2π √(L/g), which increases on Moon).",
      "Incorrect assumption: Thinking vertical spring oscillator time period changes when taken to Moon.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Spring oscillator period T = 2π √(m/k) depends strictly on mass and spring constant. It does NOT depend on g, so its period is the SAME on Earth and Moon! (Unlike pendulum period T = 2π √(L/g), which increases on Moon).. A classic comparison question tested repeatedly in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Pendulum & Spring - Conceptual Clarity"
  },
  {
    "id": "prac-physpendulumspring-4",
    "question": "Regarding Pendulum & Spring, which of the following statements correctly resolves a common misconception about \"Misidentifying a block attached to springs on opposite sides as a series combination.\"?",
    "options": [
      "When a block is between two fixed walls attached to two springs, displacing the block stretches one spring and compresses the other by the SAME amount x. Total restoring force is F = -(k_1 + k_2)x, which is PARALLEL (k_eq = k_1 + k_2).",
      "Incorrect assumption: Misidentifying a block attached to springs on opposite sides as a series combination.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "When a block is between two fixed walls attached to two springs, displacing the block stretches one spring and compresses the other by the SAME amount x. Total restoring force is F = -(k_1 + k_2)x, which is PARALLEL (k_eq = k_1 + k_2).. Very frequent diagram-based trap in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Pendulum & Spring - Conceptual Clarity"
  },
  {
    "id": "prac-physpendulumspring-5",
    "question": "Regarding Pendulum & Spring, which of the following statements correctly resolves a common misconception about \"Assuming spring constant decreases when spring is cut into shorter pieces.\"?",
    "options": [
      "Spring constant is inversely proportional to length (k ∝ 1/L). Shorter springs are stiffer and have LARGER spring constants (k' > k).",
      "Incorrect assumption: Assuming spring constant decreases when spring is cut into shorter pieces.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Spring constant is inversely proportional to length (k ∝ 1/L). Shorter springs are stiffer and have LARGER spring constants (k' > k).. Formula k L = const must be applied correctly.",
    "difficulty": "Medium",
    "conceptTested": "Pendulum & Spring - Conceptual Clarity"
  },
  {
    "id": "prac-physpendulumspring-6",
    "question": "In the study of Pendulum & Spring, what is the exact definition and significance of \"Spring Constant (k)\"?",
    "options": [
      "Restoring force per unit elongation or compression (k = F/x, unit: N/m). Measure of spring stiffness.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Restoring force per unit elongation or compression (k = F/x, unit: N/m). Measure of spring stiffness.. ",
    "difficulty": "Easy",
    "conceptTested": "Spring Constant (k) definition"
  },
  {
    "id": "prac-physpendulumspring-7",
    "question": "In the study of Pendulum & Spring, what is the exact definition and significance of \"Effective Spring Constant (k_eq)\"?",
    "options": [
      "Equivalent force constant representing a combination of multiple springs.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Equivalent force constant representing a combination of multiple springs.. ",
    "difficulty": "Easy",
    "conceptTested": "Effective Spring Constant (k_eq) definition"
  },
  {
    "id": "prac-physpendulumspring-8",
    "question": "In the study of Pendulum & Spring, what is the exact definition and significance of \"Simple Pendulum\"?",
    "options": [
      "An ideal system comprising a heavy point mass (bob) suspended by a light, flexible, in-extensible string from a rigid support.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "An ideal system comprising a heavy point mass (bob) suspended by a light, flexible, in-extensible string from a rigid support.. ",
    "difficulty": "Easy",
    "conceptTested": "Simple Pendulum definition"
  },
  {
    "id": "prac-physpendulumspring-9",
    "question": "In the study of Pendulum & Spring, what is the exact definition and significance of \"Seconds Pendulum\"?",
    "options": [
      "A simple pendulum whose time period of oscillation is strictly equal to 2 seconds (length L ≈ 1 m).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A simple pendulum whose time period of oscillation is strictly equal to 2 seconds (length L ≈ 1 m).. ",
    "difficulty": "Easy",
    "conceptTested": "Seconds Pendulum definition"
  },
  {
    "id": "prac-physpendulumspring-10",
    "question": "In the study of Pendulum & Spring, what is the exact definition and significance of \"Effective Acceleration due to Gravity (g_eff)\"?",
    "options": [
      "Net acceleration experienced by pendulum bob due to vector sum of gravity, fictitious forces (in non-inertial frames), buoyant force, or electric forces.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Net acceleration experienced by pendulum bob due to vector sum of gravity, fictitious forces (in non-inertial frames), buoyant force, or electric forces.. ",
    "difficulty": "Easy",
    "conceptTested": "Effective Acceleration due to Gravity (g_eff) definition"
  }
],
  pyqs: [
    {
      id: 'pyq-pendspr-2022',
      year: 2022,
      exam: 'NEET UG 2022',
      question: 'A body of mass m is attached to the lower end of a spring whose upper end is fixed. The spring has negligible mass. When the body is released from rest, the spring stretches by a length l. The time period of oscillation is:',
      options: [
        '2π \\sqrt{\\frac{l}{g}}',
        '2π \\sqrt{\\frac{g}{l}}',
        '2π \\sqrt{\\frac{2l}{g}}',
        '\\frac{1}{2π} \\sqrt{\\frac{l}{g}}'
      ],
      correctOption: 0,
      explanation: 'At equilibrium elongation l, gravitational force equals spring restoring force: m g = k l ⇒ m / k = l / g. The time period of spring-mass system is T = 2π \\sqrt{\\frac{m}{k}}. Substituting m/k = l/g gives T = 2π \\sqrt{\\frac{l}{g}}.',
      difficulty: 'Easy',
      conceptTested: 'Spring system time period from equilibrium elongation',
      verified: true
    },
    {
      id: 'pyq-pendspr-2020',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'A simple pendulum has time period T_1. The point of suspension is now moved upward according to the relation y = k t², (k = 1 m/s²), where y is the vertical displacement. The time period is now T_2. The ratio of T_1²/T_2² is: (take g = 10 m/s²)',
      options: ['6/5', '5/6', '1', '4/5'],
      correctOption: 0,
      explanation: 'Given displacement of point of suspension y = k t² = 1 t². Velocity v = dy/dt = 2t, Acceleration a = d²y/dt² = 2 m/s² (upward). Since suspension point accelerates upward with a = 2 m/s², effective gravity g_eff = g + a = 10 + 2 = 12 m/s². Time periods: T_1 = 2π \\sqrt{L/g} and T_2 = 2π \\sqrt{L/g_{eff}}. Therefore, T_1²/T_2² = g_{eff} / g = 12 / 10 = 6/5.',
      difficulty: 'Medium',
      conceptTested: 'Pendulum time period in accelerating reference frame',
      verified: true
    },
    {
      id: 'pyq-pendspr-2017',
      year: 2017,
      exam: 'NEET UG 2017',
      question: 'A spring of force constant k is cut into two pieces such that one piece is double the length of the other. The force constant of the longer piece will be:',
      options: ['\\frac{3}{2} k', '3 k', '2 k', '\\frac{2}{3} k'],
      correctOption: 0,
      explanation: 'Let original length be L. The spring is cut in ratio 1 : 2. Length of longer piece l_2 = (2/3) L. Since force constant is inversely proportional to length (k \\times L = const): k_2 \\times l_2 = k \\times L ⇒ k_2 \\times (2/3 L) = k L ⇒ k_2 = \\frac{3}{2} k.',
      difficulty: 'Easy',
      conceptTested: 'Effect of cutting spring on spring constant',
      verified: true
    }
  ]
};
