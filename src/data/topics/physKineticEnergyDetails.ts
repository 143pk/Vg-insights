import { DetailedTopicContent } from '../../types/neet';

export const physKineticEnergyDetails: DetailedTopicContent = {
  topicId: 'phys-kinetic-energy',
  topicName: 'Kinetic Energy & Work-Energy Theorem',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Work, Energy & Power',
  chapter: 'Work, Energy and Power',

  whatIsThisTopic: 'Kinetic Energy (K) is the form of mechanical energy possessed by a body solely by virtue of its motion. Translational kinetic energy for a body of mass m moving with speed v is given by K = 1/2 m v². The Work-Energy Theorem is a fundamental principles of mechanics stating that the NET work done by ALL forces acting on a body equals the change in its kinetic energy: W_net = ΔK = K_f - K_i. This theorem provides a powerful scalar method for solving complex dynamics problems where acceleration is variable or path geometry is non-rectilinear, bypassing force vector integration. This topic covers kinetic energy derivations, momentum-KE mathematical transformations, braking/stopping distance calculations, variable force applications, and work-energy vs Newton\'s laws method comparisons.',

  basicIdea: [
    'Kinetic Energy K = 1/2 m v² is a non-negative scalar quantity (K ≥ 0). It depends on speed v squared, making it independent of velocity direction.',
    'Momentum-Kinetic Energy Relation: p = m v ⇒ K = p² / (2m) and p = √(2mK). For two bodies with equal momentum, the lighter body has GREATER kinetic energy.',
    'Work-Energy Theorem: W_net = ΔK = K_f - K_i. Here W_net includes work done by EVERY force: conservative, non-conservative, internal, external, and pseudo forces.',
    'Net Work vs Individual Force Work: Work done by a specific force W_i changes potential energy or energy loss, whereas W_net directly changes kinetic energy.',
    'Stopping Distance: Under constant braking force f, stopping distance s = (m v²) / (2 f) = v² / (2 μ g). Doubling speed quadruples stopping distance!'
  ],

  importantTerms: [
    {
      term: 'Kinetic Energy (K)',
      definition: 'The mechanical energy possessed by a mass m moving at velocity v: K = 1/2 m v² = 1/2 m (v · v). Always a positive scalar quantity.'
    },
    {
      term: 'Work-Energy Theorem',
      definition: 'The fundamental law stating that the total scalar sum of work done by all net forces equals the final kinetic energy minus initial kinetic energy: W_net = K_f - K_i.'
    },
    {
      term: 'Linear Momentum (p)',
      definition: 'The vector product p = m v. Related to kinetic energy by K = p² / (2m) or p = √(2mK).'
    },
    {
      term: 'Stopping Distance (s)',
      definition: 'The displacement required for a moving vehicle of mass m and speed v to come to rest under a retarding force f: s = m v² / (2f).'
    },
    {
      term: 'Net Work (W_net)',
      definition: 'The algebraic sum of work done by all conservative (W_c), non-conservative (W_nc), external (W_ext), and constraint forces acting on a particle.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Meaning & Mathematical Derivation of Kinetic Energy',
      paragraphs: [
        'Kinetic Energy represents the work that must be performed on an initially stationary body of mass m to accelerate it from rest to velocity v.',
        'Derivation using Calculus:',
        'Consider a body of mass m subjected to a force F(x) moving along x-axis from x = 0 (v = 0) to x (velocity v).',
        'By Newton\'s Second Law, F = m a = m (dv/dt) = m (dv/dx) (dx/dt) = m v (dv/dx).',
        'Elemental work dW = F dx = m v (dv/dx) dx = m v dv.',
        'Integrating from initial speed 0 to final speed v:',
        'W = ∫₀ᵛ m v dv = m [v²/2]₀ᵛ = 1/2 m v²',
        'This work stored as kinetic energy: K = 1/2 m v².',
        'Properties of Kinetic Energy:',
        '• Scalar Quantity: Has magnitude only, never negative (K ≥ 0 since m > 0 and v² ≥ 0).',
        '• Frame Dependency: Since speed v depends on the reference frame, kinetic energy is relative to the observer\'s reference frame.',
        '• Dimensions: [M¹ L² T⁻²]. SI Unit: Joule (J).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="200" fill="#f8fafc" rx="12"/>
          <!-- Ground -->
          <line x1="30" y1="160" x2="470" y2="160" stroke="#475569" stroke-width="3"/>
          <!-- Block initial rest -->
          <rect x="60" y="100" width="60" height="60" fill="#94a3b8" rx="6"/>
          <text x="90" y="135" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">v = 0</text>
          <text x="90" y="85" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">K_i = 0</text>
          <!-- Applied Force arrow -->
          <line x1="120" y1="130" x2="220" y2="130" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-blue)"/>
          <text x="170" y="120" fill="#2563eb" font-size="12" font-weight="bold" text-anchor="middle">Force F</text>
          <!-- Block final moving -->
          <rect x="340" y="100" width="60" height="60" fill="#2563eb" rx="6"/>
          <text x="370" y="135" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">v</text>
          <text x="370" y="85" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">K_f = ½ m v²</text>
          <!-- Displacement arrow -->
          <line x1="90" y1="175" x2="370" y2="175" stroke="#059669" stroke-width="2" marker-end="url(#arrow-green)"/>
          <text x="230" y="192" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">Displacement s</text>
          <!-- Summary Formula -->
          <text x="230" y="45" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">Work Done W = F · s = ½ m v² = ΔK</text>
          <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
            </marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/>
            </marker>
          </defs>
        </svg>`,
        caption: 'Figure 1: Work done by applied force F over distance s increases kinetic energy from K_i = 0 to K_f = 1/2 m v².'
      }
    },
    {
      heading: '2. Momentum and Kinetic Energy Relations (NEET High-Yield)',
      paragraphs: [
        'Linear momentum magnitude p = m v. Expressing Kinetic Energy in terms of momentum:',
        'K = 1/2 m v² = 1/2 m (p / m)² = p² / (2m)',
        'Conversely, linear momentum in terms of Kinetic Energy:',
        'p = √(2 m K)',
        'Crucial NEET Conceptual Comparisons:',
        '1. Constant Momentum (p₁ = p₂): Since K = p² / (2m), K ∝ 1/m. The lighter body possesses GREATER kinetic energy!',
        '2. Constant Kinetic Energy (K₁ = K₂): Since p = √(2mK), p ∝ √m. The heavier body possesses GREATER linear momentum!',
        '3. Percentage Variation Calculations:',
        '• Small variations (Δp / p < 10%): ΔK / K = 2 (Δp / p) [Using differentials dK/K = 2 dp/p].',
        '• Large variations: If momentum increases by 100% (p_f = 2 p_i), then K_f = (2 p_i)² / (2m) = 4 K_i. Thus Kinetic Energy increases by 300%!'
      ]
    },
    {
      heading: '3. Work-Energy Theorem: Statement & Rigorous Derivation',
      paragraphs: [
        'STATEMENT: "The work done by the net force acting on a body equals the change in the kinetic energy of the body."',
        'W_net = ΔK = K_f - K_i = 1/2 m v_f² - 1/2 m v_i²',
        'RIGOROUS DERIVATION (Variable Force Case):',
        'Let a body of mass m move from x_i to x_f under a net force F_net(x).',
        'W_net = ∫_{x_i}^{x_f} F_net dx = ∫_{x_i}^{x_f} m a dx',
        'Substituting acceleration a = v (dv/dx):',
        'W_net = ∫_{x_i}^{x_f} m v (dv/dx) dx = ∫_{v_i}^{v_f} m v dv = m [v²/2]_{v_i}^{v_f} = 1/2 m v_f² - 1/2 m v_i²',
        'W_net = K_f - K_i = ΔK. (Q.E.D.)',
        'SIGNIFICANCE OF W_net:',
        'W_net is the algebraic sum of work done by ALL internal and external forces:',
        'W_net = W_conservative + W_non-conservative + W_external = ΔK',
        'If W_net > 0 ⇒ K_f > K_i (Speed increases).\nIf W_net < 0 ⇒ K_f < K_i (Speed decreases).\nIf W_net = 0 ⇒ K_f = K_i (Speed remains constant).'
      ]
    },
    {
      heading: '4. Stopping Distance, Braking & Application Patterns',
      paragraphs: [
        'A vehicle of mass m moving at speed v applies brakes providing retarding friction force f_k = μ_k m g.',
        'Applying Work-Energy Theorem:',
        'W_friction = K_f - K_i',
        '-f_k s = 0 - 1/2 m v² ⇒ -μ_k m g s = -1/2 m v²',
        'Stopping Distance formula: s = (m v²) / (2 f_k) = v² / (2 μ_k g)',
        'Key Inferences for NEET:',
        '1. Stopping distance s is directly proportional to speed squared (s ∝ v²). If initial speed is doubled, stopping distance becomes 4 TIMES as long!',
        '2. Stopping distance s is INDEPENDENT of vehicle mass m! A heavy truck and a light car moving at the same speed v with identical friction coefficient μ will stop in the exact same distance s.',
        '3. Stopping Time t: From v = u + a t ⇒ 0 = v - (f_k / m) t ⇒ t = (m v) / f_k = v / (μ_k g). Stopping time scales linearly with speed (t ∝ v).'
      ],
      tables: [
        {
          headers: ['Property', 'Stopping Distance s', 'Stopping Time t'],
          rows: [
            ['Formula', 's = v² / (2 μ g)', 't = v / (μ g)'],
            ['Speed Dependence', 's ∝ v² (Quadratic)', 't ∝ v (Linear)'],
            ['Mass Dependence', 'Independent of mass', 'Independent of mass'],
            ['Doubling Speed (v → 2v)', 's becomes 4s (400%)', 't becomes 2t (200%)']
          ]
        }
      ]
    },
    {
      heading: '5. Work-Energy Method vs Newton\'s Laws Method',
      paragraphs: [
        'Why prefer the Work-Energy Theorem for complex NEET problems?',
        '• Newton\'s Laws Method: Requires vector acceleration a = F_net / m, finding position x(t) and velocity v(t) via vector differential equations. Difficult when path is curved or force varies with position.',
        '• Work-Energy Method: Purely SCALAR calculation. Does not require tracking instantaneous direction of motion or acceleration. Directly links initial and final speeds via scalar work integration W = ∫ F dx.'
      ]
    }
  ],

  formulae: [
    {
      formulaName: 'Translational Kinetic Energy',
      expression: 'K = \\frac{1}{2} m v^2',
      explanation: 'm = mass of particle (kg), v = speed (m/s).'
    },
    {
      formulaName: 'Momentum-Kinetic Energy Transformations',
      expression: 'K = \\frac{p^2}{2m} \\quad \\text{and} \\quad p = \\sqrt{2mK}',
      explanation: 'p = linear momentum magnitude (kg·m/s), m = mass (kg), K = kinetic energy (J).'
    },
    {
      formulaName: 'Work-Energy Theorem Master Equation',
      expression: 'W_{\\text{net}} = W_c + W_{\\text{nc}} + W_{\\text{ext}} = \\Delta K = \\frac{1}{2} m v_f^2 - \\frac{1}{2} m v_i^2',
      explanation: 'W_net = algebraic sum of work done by all forces, ΔK = final minus initial kinetic energy.'
    },
    {
      formulaName: 'Vehicle Stopping Distance under Retarding Force',
      expression: 's = \\frac{m v^2}{2 f} = \\frac{v^2}{2 \\mu_k g}',
      explanation: 'v = initial speed, f = retarding force, μ_k = coefficient of kinetic friction.'
    }
  ],

  neetImportantPoints: [
    'Work-Energy Theorem applies to BOTH inertial and non-inertial reference frames. In non-inertial frames, work done by pseudo forces (W_pseudo = F_pseudo · s) MUST be included in W_net.',
    'If two masses m₁ and m₂ (m₁ > m₂) have equal kinetic energies, momentum ratio p₁/p₂ = √(m₁/m₂) > 1. The heavier body has greater momentum.',
    'Work done by net force on a particle equals change in KE, BUT work done by a SINGLE force equals change in KE ONLY IF no other forces do work.',
    'Stopping distance s ∝ v². If speed increases from 50 km/h to 100 km/h (2x), stopping distance increases 4x.'
  ],

  commonConfusions: [
    {
      misconception: 'Believing Kinetic Energy can be negative if direction of velocity is reversed.',
      correction: 'Kinetic energy involves speed squared (v² = v · v), so it is ALWAYS positive or zero regardless of velocity vector direction.'
    },
    {
      misconception: 'Assuming lighter body always stops in shorter distance than heavy body.',
      correction: 'Under identical braking friction coefficient μ, stopping distance s = v² / (2 μ g) is completely independent of mass!'
    }
  ],

  quickRevision: [
    'K = 1/2 m v² = p² / (2m); p = √(2mK).',
    'Work-Energy Theorem: W_net = ΔK = K_f - K_i (Valid for constant & variable forces).',
    'Equal Momentum: Lighter body has greater KE (K ∝ 1/m). Equal KE: Heavier body has greater momentum (p ∝ √m).',
    'Stopping Distance: s = v² / (2 μ g) [Mass independent, s ∝ v²].',
    'Percent Change: If p increases by 100%, K increases by 300%.'
  ],

  practiceQuestions: [
  {
    "questionId": "pq-ke-1",
    "questionText": "A bullet of mass 20 g moving with velocity 200 m/s penetrates a wooden block and comes to rest after travelling 10 cm inside it. The average retarding force exerted by the block on the bullet is:",
    "options": [
      "2000 N",
      "4000 N",
      "6000 N",
      "8000 N"
    ],
    "correctOption": 1,
    "explanation": "Given: m = 20 g = 0.02 kg, v_i = 200 m/s, v_f = 0, s = 10 cm = 0.1 m.\nBy Work-Energy Theorem: W_net = ΔK\n-F_retarding × s = 0 - 1/2 m v_i²\nF_retarding × 0.1 = 1/2 × 0.02 × (200)²\nF_retarding × 0.1 = 0.01 × 40000 = 400 N ⇒ F = 4000 N.",
    "difficulty": "Medium"
  },
  {
    "questionId": "pq-ke-2",
    "questionText": "If the linear momentum of a body is increased by 50%, the percentage increase in its kinetic energy will be:",
    "options": [
      "50%",
      "100%",
      "125%",
      "150%"
    ],
    "correctOption": 2,
    "explanation": "Let initial momentum be p_i. New momentum p_f = 1.5 p_i.\nSince K ∝ p², K_f / K_i = (p_f / p_i)² = (1.5)² = 2.25.\nPercentage increase = [(K_f - K_i) / K_i] × 100 = (2.25 - 1) × 100 = 125%.",
    "difficulty": "Easy"
  },
  {
    "id": "prac-physkineticenergy-3",
    "question": "Regarding Kinetic Energy & Work-Energy Theorem, which of the following statements correctly resolves a common misconception about \"Believing Kinetic Energy can be negative if direction of velocity is reversed.\"?",
    "options": [
      "Kinetic energy involves speed squared (v² = v · v), so it is ALWAYS positive or zero regardless of velocity vector direction.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Kinetic Energy & Work-Energy Theorem - Conceptual Clarity"
  },
  {
    "id": "prac-physkineticenergy-4",
    "question": "Regarding Kinetic Energy & Work-Energy Theorem, which of the following statements correctly resolves a common misconception about \"Assuming lighter body always stops in shorter distance than heavy body.\"?",
    "options": [
      "Under identical braking friction coefficient μ, stopping distance s = v² / (2 μ g) is completely independent of mass!",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Kinetic Energy & Work-Energy Theorem - Conceptual Clarity"
  },
  {
    "id": "prac-physkineticenergy-5",
    "question": "In the study of Kinetic Energy & Work-Energy Theorem, what is the exact definition and significance of \"Kinetic Energy (K)\"?",
    "options": [
      "The mechanical energy possessed by a mass m moving at velocity v: K = 1/2 m v² = 1/2 m (v · v). Always a positive scalar quantity.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The mechanical energy possessed by a mass m moving at velocity v: K = 1/2 m v² = 1/2 m (v · v). Always a positive scalar quantity.. ",
    "difficulty": "Easy",
    "conceptTested": "Kinetic Energy (K) definition"
  },
  {
    "id": "prac-physkineticenergy-6",
    "question": "In the study of Kinetic Energy & Work-Energy Theorem, what is the exact definition and significance of \"Work-Energy Theorem\"?",
    "options": [
      "The fundamental law stating that the total scalar sum of work done by all net forces equals the final kinetic energy minus initial kinetic energy: W_net = K_f - K_i.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The fundamental law stating that the total scalar sum of work done by all net forces equals the final kinetic energy minus initial kinetic energy: W_net = K_f - K_i.. ",
    "difficulty": "Easy",
    "conceptTested": "Work-Energy Theorem definition"
  },
  {
    "id": "prac-physkineticenergy-7",
    "question": "In the study of Kinetic Energy & Work-Energy Theorem, what is the exact definition and significance of \"Linear Momentum (p)\"?",
    "options": [
      "The vector product p = m v. Related to kinetic energy by K = p² / (2m) or p = √(2mK).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The vector product p = m v. Related to kinetic energy by K = p² / (2m) or p = √(2mK).. ",
    "difficulty": "Easy",
    "conceptTested": "Linear Momentum (p) definition"
  },
  {
    "id": "prac-physkineticenergy-8",
    "question": "In the study of Kinetic Energy & Work-Energy Theorem, what is the exact definition and significance of \"Stopping Distance (s)\"?",
    "options": [
      "The displacement required for a moving vehicle of mass m and speed v to come to rest under a retarding force f: s = m v² / (2f).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The displacement required for a moving vehicle of mass m and speed v to come to rest under a retarding force f: s = m v² / (2f).. ",
    "difficulty": "Easy",
    "conceptTested": "Stopping Distance (s) definition"
  },
  {
    "id": "prac-physkineticenergy-9",
    "question": "In the study of Kinetic Energy & Work-Energy Theorem, what is the exact definition and significance of \"Net Work (W_net)\"?",
    "options": [
      "The algebraic sum of work done by all conservative (W_c), non-conservative (W_nc), external (W_ext), and constraint forces acting on a particle.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The algebraic sum of work done by all conservative (W_c), non-conservative (W_nc), external (W_ext), and constraint forces acting on a particle.. ",
    "difficulty": "Easy",
    "conceptTested": "Net Work (W_net) definition"
  },
  {
    "id": "prac-physkineticenergy-10",
    "question": "Which of the following is a key NCERT statement regarding Kinetic Energy & Work-Energy Theorem?",
    "options": [
      "K = 1/2 m v² = p² / (2m); p = √(2mK).",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: K = 1/2 m v² = p² / (2m); p = √(2mK).",
    "difficulty": "Easy",
    "conceptTested": "Kinetic Energy & Work-Energy Theorem NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-ke-1',
      questionText: 'A particle of mass 10 g moves along a circle of radius 6.4 cm with a constant tangential acceleration. What is the magnitude of this acceleration if the kinetic energy of the particle becomes equal to 8 × 10⁻⁴ J by the end of the second revolution after the beginning of the motion? [NEET 2016]',
      options: [
        '0.1 m/s²',
        '0.2 m/s²',
        '0.3 m/s²',
        '0.4 m/s²'
      ],
      correctOption: 0,
      explanation: 'Given: m = 10 g = 0.01 kg, r = 6.4 cm = 0.064 m, N = 2 revolutions.\nTotal distance travelled s = 2 × (2 π r) = 4 π (0.064) m.\nBy Work-Energy Theorem: W_net = ΔK ⇒ F_t × s = K_f - 0\n(m a_t) × (4 π r) = K_f\n0.01 × a_t × 4 × 3.1416 × 0.064 = 8 × 10⁻⁴\n0.01 × 0.8042 × a_t = 0.0008 ⇒ a_t ≈ 0.1 m/s².',
      examName: 'NEET',
      year: 2016
    },
    {
      id: 'pyq-ke-2',
      questionText: 'Two bodies of masses 1 kg and 4 kg are moving with equal kinetic energies. The ratio of the magnitudes of their linear momenta is: [AIPMT 2015]',
      options: [
        '1 : 2',
        '1 : 4',
        '2 : 1',
        '4 : 1'
      ],
      correctOption: 0,
      explanation: 'p = √(2mK). Since K₁ = K₂ = K:\np₁ / p₂ = √(2 m₁ K) / √(2 m₂ K) = √(m₁ / m₂) = √(1 / 4) = 1 / 2.',
      examName: 'AIPMT',
      year: 2015
    }
  ]
};
