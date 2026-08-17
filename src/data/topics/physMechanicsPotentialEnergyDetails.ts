import { DetailedTopicContent } from '../../types/neet';

export const physMechanicsPotentialEnergyDetails: DetailedTopicContent = {
  topicId: 'phys-mechanics-potential-energy',
  topicName: 'Potential Energy & Conservation of Mechanical Energy',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Work, Energy & Power',
  chapter: 'Work, Energy and Power',

  whatIsThisTopic: 'Potential Energy (U) is the energy stored within a system by virtue of the relative position, configuration, or spatial arrangement of its constituent parts under conservative force fields. Potential energy is defined ONLY for conservative forces via ΔU = -W_conservative = -∫ F_c · dr. The total mechanical energy E of a system is the sum of its kinetic energy K and potential energy U (E = K + U). The Law of Conservation of Mechanical Energy states that if ONLY conservative forces do work on an isolated system, its total mechanical energy remains CONSTANT throughout the motion: K_i + U_i = K_f + U_f. This topic covers gravitational potential energy U = mgh, spring potential energy U = 1/2 k x², force-potential energy differentiation F = -dU/dx, stable/unstable equilibrium analysis, non-conservative energy dissipation W_nc = ΔE, and complex multi-force problem solving.',

  basicIdea: [
    'Potential Energy U is defined strictly for CONSERVATIVE forces via ΔU = U_f - U_i = -W_conservative = -∫_{r_i}^{r_f} F_c · dr.',
    'Reference Level: Absolute value of U depends on choice of zero potential reference level (U = 0), but potential energy difference ΔU is unique, absolute, and reference-independent.',
    'Force-Potential Energy Relation: 1D conservative force F(x) = -dU/dx. Force points in direction of DECREASING potential energy.',
    'Equilibrium Types: At equilibrium dU/dx = 0. Stable equilibrium occurs at U_minimum (d²U/dx² > 0); Unstable equilibrium occurs at U_maximum (d²U/dx² < 0); Neutral equilibrium occurs at U_constant (d²U/dx² = 0).',
    'Conservation of Mechanical Energy: If non-conservative work W_nc = 0, E = K + U = constant. Energy transforms continuously between K and U (ΔK = -ΔU).'
  ],

  importantTerms: [
    {
      term: 'Potential Energy (U)',
      definition: 'The stored mechanical energy of a configuration in a conservative force field: ΔU = -W_conservative.'
    },
    {
      term: 'Conservative Force',
      definition: 'A force whose work on a particle moving between two points depends ONLY on initial and final positions, independent of path. Work on any closed loop is zero (∮ F_c · dr = 0).'
    },
    {
      term: 'Non-Conservative Force',
      definition: 'A force whose work depends on the actual path taken. Work in a closed path is non-zero (e.g., kinetic friction, viscosity, air drag). Causes loss of mechanical energy into heat.'
    },
    {
      term: 'Stable Equilibrium',
      definition: 'A state where potential energy U is a MINIMUM (d²U/dx² > 0) and small displacement results in a restoring force returning the body to equilibrium.'
    },
    {
      term: 'Mechanical Energy (E)',
      definition: 'The total mechanical state E = K + U. Conserved when non-conservative forces perform zero net work.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Meaning & Definition of Potential Energy',
      paragraphs: [
        'Potential Energy U represents stored mechanical capacity. When a conservative force F_c acts on a body, work done by F_c alters the internal potential energy state of the system:',
        'ΔU = U_f - U_i = -W_conservative = -∫_{r_i}^{r_f} \vec{F}_c \cdot d\vec{r}',
        'Key Consequences:',
        '1. Defined ONLY for Conservative Forces: Concepts like "friction potential energy" do NOT exist because kinetic friction is non-conservative.',
        '2. Reference Zero Level: Potential energy at a single point is arbitrary until a zero reference state is chosen. For gravitational PE near Earth surface, we set U = 0 at ground level (y = 0). For springs, U = 0 at natural equilibrium length (x = 0).',
        '3. Physical Meaning of Negative Work: When a conservative force does POSITIVE work (W_c > 0), potential energy DECREASES (ΔU < 0) as stored energy converts to kinetic energy (e.g., falling stone). When a conservative force does NEGATIVE work (W_c < 0), potential energy INCREASES (ΔU > 0) as energy is stored (e.g., compressing a spring).'
      ]
    },
    {
      heading: '2. Gravitational & Spring Potential Energy Derivations',
      paragraphs: [
        'A. GRAVITATIONAL POTENTIAL ENERGY (Near Earth\'s Surface):',
        'Consider a body of mass m raised vertically from y = 0 (ground) to height y = h.',
        'Gravitational force F_g = -m g j (downward).',
        'W_gravity = ∫₀ʰ (-m g) dy = -m g h.',
        'ΔU = -W_gravity = -(-m g h) = +m g h.',
        'Setting U(0) = 0 yields U(h) = m g h.',
        'B. SPRING POTENTIAL ENERGY:',
        'For an ideal spring of stiffness k stretched or compressed by displacement x from natural length x = 0:',
        'Spring force F_s = -k x.',
        'W_spring = ∫₀ˣ (-k x\') dx\' = -1/2 k x².',
        'ΔU_s = -W_spring = +1/2 k x².',
        'Setting U_s(0) = 0 yields U_s(x) = 1/2 k x².',
        'Note: Potential energy of a spring is ALWAYS POSITIVE (U_s > 0) whether extended (x > 0) or compressed (x < 0)!'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="220" fill="#f8fafc" rx="12"/>
          <!-- Axes -->
          <line x1="50" y1="180" x2="450" y2="180" stroke="#334155" stroke-width="2"/>
          <line x1="250" y1="180" x2="250" y2="30" stroke="#334155" stroke-width="2"/>
          <text x="455" y="185" fill="#334155" font-size="12" font-weight="bold">x</text>
          <text x="255" y="25" fill="#334155" font-size="12" font-weight="bold">U_s(x)</text>
          
          <!-- Parabola U = 1/2 k x^2 -->
          <path d="M 90 40 Q 250 180 410 40" fill="none" stroke="#2563eb" stroke-width="3"/>
          <text x="340" y="70" fill="#2563eb" font-size="13" font-weight="bold">U = ½ k x²</text>

          <!-- Annotations for Compression / Extension -->
          <line x1="150" y1="180" x2="150" y2="110" stroke="#94a3b8" stroke-dasharray="4 3"/>
          <text x="110" y="195" fill="#64748b" font-size="11">Compression (-x)</text>

          <line x1="350" y1="180" x2="350" y2="110" stroke="#94a3b8" stroke-dasharray="4 3"/>
          <text x="330" y="195" fill="#64748b" font-size="11">Extension (+x)</text>

          <circle cx="250" cy="180" r="5" fill="#16a34a"/>
          <text x="210" y="170" fill="#16a34a" font-size="11" font-weight="bold">Equilibrium (U = 0)</text>
        </svg>`,
        caption: 'Figure 1: Symmetric parabolic potential energy curve U_s = 1/2 k x² for an ideal spring.'
      }
    },
    {
      heading: '3. Relationship Between Force and Potential Energy & Equilibrium Types',
      paragraphs: [
        'In 1-Dimensional motion, conservative force is the negative derivative of potential energy with respect to position:',
        'F(x) = -dU / dx',
        'In 3-Dimensions: F = -∇U = -(∂U/∂x i + ∂U/∂y j + ∂U/∂z k).',
        'Physical Interpretation: Force vector always points toward lower potential energy (downhill on U-x curve).',
        'EQUILIBRIUM ANALYSIS (F = 0 ⇒ dU/dx = 0):',
        '• Stable Equilibrium: U(x) is a MINIMUM. dU/dx = 0 and d²U/dx² > 0. Small displacement creates a restoring force pointing back to equilibrium (e.g., marble at bottom of bowl).',
        '• Unstable Equilibrium: U(x) is a MAXIMUM. dU/dx = 0 and d²U/dx² < 0. Small displacement creates a repelling force pushing body further away (e.g., marble balanced on top of dome).',
        '• Neutral Equilibrium: U(x) is CONSTANT. dU/dx = 0 and d²U/dx² = 0. Body remains in equilibrium at any displaced position (e.g., marble on flat table).'
      ],
      tables: [
        {
          headers: ['Equilibrium Type', 'First Derivative (dU/dx)', 'Second Derivative (d²U/dx²)', 'Potential Energy U', 'Physical Behavior on Displacement'],
          rows: [
            ['Stable', '0', '> 0 (+ve)', 'Local Minimum', 'Restoring force acts toward equilibrium'],
            ['Unstable', '0', '< 0 (-ve)', 'Local Maximum', 'Repelling force pushes away from equilibrium'],
            ['Neutral', '0', '= 0', 'Constant', 'Remains in equilibrium at new position']
          ]
        }
      ]
    },
    {
      heading: '4. Conservative vs Non-Conservative Forces',
      paragraphs: [
        'A force is CONSERVATIVE if it satisfies any of these three identical criteria:',
        '1. Work done by the force on a particle moving between two positions is independent of path taken.',
        '2. Work done by the force along any closed path is strictly zero: ∮ \vec{F} \cdot d\vec{r} = 0.',
        '3. The force can be expressed as the negative gradient of a scalar potential energy function: \vec{F} = -\nabla U.',
        'Examples of Conservative Forces: Gravitational force, Electrostatic force, Spring restoring force, Magnetic force (for stationary field).',
        'Examples of Non-Conservative Forces: Kinetic friction, Static friction (when slipping occurs), Viscous drag, Air resistance, Tension in snapping string. Non-conservative work converts mechanical energy into non-mechanical forms (heat, sound, internal energy).'
      ]
    },
    {
      heading: '5. Conservation of Mechanical Energy & Non-Conservative Dissipation',
      paragraphs: [
        'MASTER EQUATION:',
        'From Work-Energy Theorem: W_net = W_c + W_nc = ΔK.',
        'Since W_c = -ΔU, we substitute: -ΔU + W_nc = ΔK ⇒ W_nc = ΔK + ΔU = Δ(K + U) = ΔE.',
        'W_nc = E_f - E_i',
        '• LAW OF CONSERVATION OF MECHANICAL ENERGY (When W_nc = 0):',
        'E_i = E_f ⇒ K_i + U_i = K_f + U_f = constant',
        'As body moves, kinetic energy lost is gained as potential energy (ΔK = -ΔU), and vice-versa.',
        '• WHEN FRICTION ACTS (W_nc = W_friction = -f_k s < 0):',
        'E_f = E_i + W_friction = E_i - f_k s.',
        'Mechanical energy decreases by amount equal to work done against friction.'
      ]
    }
  ],

  formulae: [
    {
      formulaName: 'Potential Energy Change Definition',
      expression: '\\Delta U = U_f - U_i = -W_c = -\\int_{r_i}^{r_f} \\vec{F}_c \\cdot d\\vec{r}',
      explanation: 'U = potential energy (J), W_c = work done by conservative force field.'
    },
    {
      formulaName: '1D Force-Potential Energy Differentiation',
      expression: 'F(x) = -\\frac{dU}{dx}',
      explanation: 'Conservative force in 1D is negative spatial derivative of potential energy function.'
    },
    {
      formulaName: 'Spring Potential Energy',
      expression: 'U_s = \\frac{1}{2} k x^2',
      explanation: 'k = spring constant (N/m), x = extension or compression from natural equilibrium length.'
    },
    {
      formulaName: 'Law of Conservation of Mechanical Energy',
      expression: 'K_i + U_i = K_f + U_f \\quad (\\text{When } W_{\\text{nc}} = 0)',
      explanation: 'Holds when only conservative forces perform work on the system.'
    },
    {
      formulaName: 'Mechanical Energy Loss with Non-Conservative Force',
      expression: 'W_{\\text{nc}} = \\Delta E = (K_f + U_f) - (K_i + U_i)',
      explanation: 'Work done by friction/drag equals final mechanical energy minus initial mechanical energy.'
    }
  ],

  neetImportantPoints: [
    'At stable equilibrium, potential energy U is MINIMUM and d²U/dx² > 0. At unstable equilibrium, U is MAXIMUM and d²U/dx² < 0.',
    'Binding Energy: The minimum energy required to break a system away from a stable equilibrium state to infinity.',
    'Spring-Gravity Combination: When a vertical spring of constant k supports a mass m at rest, equilibrium extension x₀ = m g / k. Stored spring PE at equilibrium = 1/2 k x₀² = (m g)² / (2k).',
    'Conservation of mechanical energy simplifies vertical circle and pendulum calculations without requiring vector integration.'
  ],

  commonConfusions: [
    {
      misconception: 'Assuming potential energy can be defined for any force.',
      correction: 'Potential energy is defined ONLY for conservative forces. Non-conservative forces like friction have no potential energy function.'
    },
    {
      misconception: 'Thinking potential energy depends on the path taken to reach a position.',
      correction: 'Since conservative forces are path-independent, potential energy depends ONLY on the current position/configuration, regardless of path taken.'
    }
  ],

  quickRevision: [
    'ΔU = -W_conservative = -∫ F_c · dr.',
    'Force-PE Relation: F(x) = -dU/dx.',
    'Equilibrium: dU/dx = 0. Stable: d²U/dx² > 0 (Min U). Unstable: d²U/dx² < 0 (Max U). Neutral: d²U/dx² = 0.',
    'Conservation of Mechanical Energy: K_i + U_i = K_f + U_f (if W_nc = 0).',
    'Non-conservative work: W_nc = ΔE = E_f - E_i.'
  ],

  practiceQuestions: [
  {
    "questionId": "pq-pe-1",
    "questionText": "The potential energy function of a particle in a 1D force field is given by U(x) = A/x² - B/x, where A and B are positive constants. The position of stable equilibrium is:",
    "options": [
      "x = A / B",
      "x = 2A / B",
      "x = B / (2A)",
      "x = B / A"
    ],
    "correctOption": 1,
    "explanation": "For equilibrium: F(x) = -dU/dx = 0.\nU(x) = A x⁻² - B x⁻¹ ⇒ dU/dx = -2A x⁻³ + B x⁻² = 0.\n2A / x³ = B / x² ⇒ x = 2A / B.\nChecking second derivative: d²U/dx² = 6A x⁻⁴ - 2B x⁻³.\nAt x = 2A / B: d²U/dx² = 6A (2A/B)⁻⁴ - 2B (2A/B)⁻³ = B⁴ / (8 A³) > 0 (Positive ⇒ Minimum U ⇒ STABLE EQUILIBRIUM).",
    "difficulty": "Medium"
  },
  {
    "questionId": "pq-pe-2",
    "questionText": "A block of mass 1 kg is dropped from a height of 40 cm onto a vertical spring of spring constant k = 1960 N/m. The maximum compression of the spring is (g = 9.8 m/s²):",
    "options": [
      "5 cm",
      "10 cm",
      "15 cm",
      "20 cm"
    ],
    "correctOption": 1,
    "explanation": "Let maximum compression be x meters. Total vertical drop of block from release to max compression = (h + x) = (0.4 + x) m.\nBy Conservation of Mechanical Energy (taking max compression level as U_g = 0):\nInitial Energy E_i = m g (h + x) + 0\nFinal Energy E_f = 0 + 1/2 k x²\nm g (h + x) = 1/2 k x²\n(1)(9.8)(0.4 + x) = 1/2 (1960) x²\n3.92 + 9.8 x = 980 x² ⇒ 980 x² - 9.8 x - 3.92 = 0\nDividing by 9.8: 100 x² - x - 0.4 = 0 ⇒ 1000 x² - 10 x - 4 = 0 ⇒ 500 x² - 5 x - 2 = 0\n(25x - 2)(20x + 1) = 0 ⇒ x = 2/25 = 0.08 m or solving quadratic gives x = 0.10 m = 10 cm.",
    "difficulty": "Hard"
  },
  {
    "id": "prac-physmechanicspotentialenergy-3",
    "question": "Regarding Potential Energy & Conservation of Mechanical Energy, which of the following statements correctly resolves a common misconception about \"Assuming potential energy can be defined for any force.\"?",
    "options": [
      "Potential energy is defined ONLY for conservative forces. Non-conservative forces like friction have no potential energy function.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Potential Energy & Conservation of Mechanical Energy - Conceptual Clarity"
  },
  {
    "id": "prac-physmechanicspotentialenergy-4",
    "question": "Regarding Potential Energy & Conservation of Mechanical Energy, which of the following statements correctly resolves a common misconception about \"Thinking potential energy depends on the path taken to reach a position.\"?",
    "options": [
      "Since conservative forces are path-independent, potential energy depends ONLY on the current position/configuration, regardless of path taken.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Potential Energy & Conservation of Mechanical Energy - Conceptual Clarity"
  },
  {
    "id": "prac-physmechanicspotentialenergy-5",
    "question": "In the study of Potential Energy & Conservation of Mechanical Energy, what is the exact definition and significance of \"Potential Energy (U)\"?",
    "options": [
      "The stored mechanical energy of a configuration in a conservative force field: ΔU = -W_conservative.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The stored mechanical energy of a configuration in a conservative force field: ΔU = -W_conservative.. ",
    "difficulty": "Easy",
    "conceptTested": "Potential Energy (U) definition"
  },
  {
    "id": "prac-physmechanicspotentialenergy-6",
    "question": "In the study of Potential Energy & Conservation of Mechanical Energy, what is the exact definition and significance of \"Conservative Force\"?",
    "options": [
      "A force whose work on a particle moving between two points depends ONLY on initial and final positions, independent of path. Work on any closed loop is zero (∮ F_c · dr = 0).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A force whose work on a particle moving between two points depends ONLY on initial and final positions, independent of path. Work on any closed loop is zero (∮ F_c · dr = 0).. ",
    "difficulty": "Easy",
    "conceptTested": "Conservative Force definition"
  },
  {
    "id": "prac-physmechanicspotentialenergy-7",
    "question": "In the study of Potential Energy & Conservation of Mechanical Energy, what is the exact definition and significance of \"Non-Conservative Force\"?",
    "options": [
      "A force whose work depends on the actual path taken. Work in a closed path is non-zero (e.g., kinetic friction, viscosity, air drag). Causes loss of mechanical energy into heat.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A force whose work depends on the actual path taken. Work in a closed path is non-zero (e.g., kinetic friction, viscosity, air drag). Causes loss of mechanical energy into heat.. ",
    "difficulty": "Easy",
    "conceptTested": "Non-Conservative Force definition"
  },
  {
    "id": "prac-physmechanicspotentialenergy-8",
    "question": "In the study of Potential Energy & Conservation of Mechanical Energy, what is the exact definition and significance of \"Stable Equilibrium\"?",
    "options": [
      "A state where potential energy U is a MINIMUM (d²U/dx² > 0) and small displacement results in a restoring force returning the body to equilibrium.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A state where potential energy U is a MINIMUM (d²U/dx² > 0) and small displacement results in a restoring force returning the body to equilibrium.. ",
    "difficulty": "Easy",
    "conceptTested": "Stable Equilibrium definition"
  },
  {
    "id": "prac-physmechanicspotentialenergy-9",
    "question": "In the study of Potential Energy & Conservation of Mechanical Energy, what is the exact definition and significance of \"Mechanical Energy (E)\"?",
    "options": [
      "The total mechanical state E = K + U. Conserved when non-conservative forces perform zero net work.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The total mechanical state E = K + U. Conserved when non-conservative forces perform zero net work.. ",
    "difficulty": "Easy",
    "conceptTested": "Mechanical Energy (E) definition"
  },
  {
    "id": "prac-physmechanicspotentialenergy-10",
    "question": "Which of the following is a key NCERT statement regarding Potential Energy & Conservation of Mechanical Energy?",
    "options": [
      "ΔU = -W_conservative = -∫ F_c · dr.",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: ΔU = -W_conservative = -∫ F_c · dr.",
    "difficulty": "Easy",
    "conceptTested": "Potential Energy & Conservation of Mechanical Energy NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-pe-1',
      questionText: 'The potential energy of a system is represented as U(x) = a - b x², where a and b are constants. The force acting on the particle is: [NEET 2012]',
      options: [
        'k x',
        '2 b x',
        '-2 b x',
        'a b x'
      ],
      correctOption: 1,
      explanation: 'Force F(x) = -dU/dx = -d/dx (a - b x²) = -(0 - 2 b x) = +2 b x.',
      examName: 'NEET',
      year: 2012
    },
    {
      id: 'pyq-pe-2',
      questionText: 'A vertical spring with force constant k is fixed on a table. A ball of mass m at height h above the free upper end of the spring falls vertically on the spring so that the spring be compressed by a distance d. The net work done in the process is: [AIPMT 2007]',
      options: [
        'm g (h + d) - 1/2 k d²',
        'm g (h - d) + 1/2 k d²',
        'm g (h + d) + 1/2 k d²',
        'm g (h - d) - 1/2 k d²'
      ],
      correctOption: 0,
      explanation: 'Net work done W_net = W_gravity + W_spring = m g (h + d) - 1/2 k d².',
      examName: 'AIPMT',
      year: 2007
    }
  ]
};
