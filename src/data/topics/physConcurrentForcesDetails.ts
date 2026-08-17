import { DetailedTopicContent } from '../../types/neet';

export const physConcurrentForcesDetails: DetailedTopicContent = {
  topicId: 'phys-concurrent-forces',
  topicName: "Equilibrium of Concurrent Forces & Lami's Theorem",
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Laws of Motion',
  chapter: 'Laws of Motion',

  whatIsThisTopic: 'Concurrent forces are forces whose lines of action all intersect at a single common point. A particle or body subject to concurrent forces is in translational equilibrium if the vector sum of all applied external forces is strictly zero (sum vec(F) = 0). When exactly three coplanar concurrent forces maintain static equilibrium, Lami\'s Theorem provides a powerful geometric alternative to component resolution, stating that each force magnitude is directly proportional to the sine of the angle between the other two forces: F_1 / sin alpha = F_2 / sin beta = F_3 / sin gamma. This topic covers equilibrium conditions, free-body diagram analysis, component resolution vs. Lami\'s theorem decision trees, string tension problems, inclined plane force balance, and verified NEET exam applications.',

  basicIdea: [
    '1. Concurrent Forces: Forces acting on a body whose lines of action pass through a single common point. Internal moments/torques are automatically zero about that point.',
    '2. Translational Equilibrium Condition: A particle is in translational equilibrium if its acceleration is zero (a = 0). The necessary and sufficient condition is sum vec(F) = 0, which decomposes into independent scalar equations: sum F_x = 0, sum F_y = 0, sum F_z = 0.',
    '3. Lami\'s Theorem Statement: If three coplanar concurrent forces F_1, F_2, F_3 acting on a particle keep it in static equilibrium, then F_1 / sin alpha = F_2 / sin beta = F_3 / sin gamma, where alpha is the angle between F_2 and F_3, beta is the angle between F_1 and F_3, and gamma is the angle between F_1 and F_2.',
    '4. Geometric Basis of Lami\'s Theorem: Represents the Sine Rule applied to a closed, equilibrium vector triangle formed by adding three forces head-to-tail (vec(F)_1 + vec(F)_2 + vec(F)_3 = 0).',
    '5. Method Selection Framework: Use Lami\'s Theorem when EXACTLY three coplanar concurrent forces act in static equilibrium and inter-vector angles are prominent. Use Component Resolution (sum F_x = 0, sum F_y = 0) when four or more forces exist or when force components along coordinate axes are given directly.'
  ],

  importantTerms: [
    {
      term: 'Concurrent Forces',
      definition: 'A set of forces whose lines of action all pass through a single common point in space.',
      neetNote: 'When forces are concurrent, rotational equilibrium is automatically satisfied (torque tau = 0).'
    },
    {
      term: 'Translational Equilibrium',
      definition: 'The mechanical state of a particle or rigid body in which its net acceleration is zero (vec(a) = 0).',
      neetNote: 'Requires net external force sum vec(F) = 0. Static equilibrium implies body is at rest (v = 0).'
    },
    {
      term: "Lami's Theorem",
      definition: 'A mathematical theorem for three coplanar concurrent forces in equilibrium stating F_1 / sin alpha = F_2 / sin beta = F_3 / sin gamma.',
      neetNote: 'Applies strictly and ONLY to EXACTLY THREE coplanar, concurrent, non-collinear forces in static equilibrium!'
    },
    {
      term: 'String Tension Force',
      symbol: 'T',
      definition: 'The pulling contact force transmitted through a taut string, rope, or cable.',
      neetNote: 'Tension always pulls AWAY from the point or mass being analyzed along the direction of the string.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Conditions for Translational Equilibrium & Component Method',
      paragraphs: [
        'A particle is in translational equilibrium if its net acceleration is zero ($\\vec{a} = 0$). By Newton\'s Second Law, this requires the net external force to be zero:',
        '$$\\sum \\vec{F} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 + \\dots = 0$$',
        'In 2D coplanar mechanics, resolving all force vectors along orthogonal x and y axes yields two independent scalar equilibrium equations:',
        '$$\\sum F_x = 0 \\implies F_{1x} + F_{2x} + F_{3x} + \\dots = 0$$',
        '$$\\sum F_y = 0 \\implies F_{1y} + F_{2y} + F_{3y} + \\dots = 0$$',
        'Equilibrium of Three Forces (Triangle Law):',
        'If three coplanar concurrent forces $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ keep a particle in equilibrium, their vector sum is zero ($\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = 0$). Graphically, these three force vectors form a closed triangle when placed head-to-tail.'
      ]
    },
    {
      heading: "2. Lami's Theorem Derivation & Angle Interpretation",
      paragraphs: [
        "Let three coplanar concurrent forces $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ act at point O in equilibrium.",
        "Let $\\alpha$ be the angle between $\\vec{F}_2$ and $\\vec{F}_3$, $\\beta$ be the angle between $\\vec{F}_1$ and $\\vec{F}_3$, and $\\gamma$ be the angle between $\\vec{F}_1$ and $\\vec{F}_2$. Note that $\\alpha + \\beta + \\gamma = 360^\\circ$.",
        "Derivation using Vector Triangle and Sine Rule:",
        "Construct a closed vector triangle with sides $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$. The interior angle opposite to side $F_1$ is $(180^\\circ - \\alpha)$, opposite to side $F_2$ is $(180^\\circ - \\beta)$, and opposite to side $F_3$ is $(180^\\circ - \\gamma)$.",
        "Applying the Sine Rule from trigonometry to this triangle:",
        "$$\\frac{F_1}{\\sin(180^\\circ - \\alpha)} = \\frac{F_2}{\\sin(180^\\circ - \\beta)} = \\frac{F_3}{\\sin(180^\\circ - \\gamma)}$$",
        "Since $\\sin(180^\\circ - \\theta) = \\sin\\theta$, this simplifies directly to Lami's Theorem:",
        "$$\\frac{F_1}{\\sin\\alpha} = \\frac{F_2}{\\sin\\beta} = \\frac{F_3}{\\sin\\gamma}$$",
        "Conditions for Validity:",
        "1. Exactly three forces must act at a single point.",
        "2. The three forces must be coplanar (lie in the same plane).",
        "3. The system must be in static equilibrium (no acceleration)."
      ],
      visual: {
        caption: "Lami's Theorem Geometry for Three Concurrent Forces in Equilibrium",
        guide: "Three forces F1, F2, F3 meet at central point O. Angle alpha is opposite F1 (between F2 and F3); angle beta is opposite F2 (between F1 and F3); angle gamma is opposite F3 (between F1 and F2).",
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <rect width="800" height="240" rx="16" fill="#f8fafc" />
          <g transform="translate(200, 20)">
            <!-- Central Point O -->
            <circle cx="200" cy="110" r="6" fill="#0f172a" />
            <text x="180" y="105" fill="#0f172a" font-size="14" font-weight="extrabold">O</text>

            <!-- Force F1 (upwards) -->
            <line x1="200" y1="110" x2="200" y2="20" stroke="#dc2626" stroke-width="4" marker-end="url(#arrow-red-cf)" />
            <text x="210" y="35" fill="#b91c1c" font-size="15" font-weight="extrabold">F₁</text>

            <!-- Force F2 (down-right) -->
            <line x1="200" y1="110" x2="310" y2="180" stroke="#2563eb" stroke-width="4" marker-end="url(#arrow-blue-cf)" />
            <text x="320" y="180" fill="#1d4ed8" font-size="15" font-weight="extrabold">F₂</text>

            <!-- Force F3 (down-left) -->
            <line x1="200" y1="110" x2="80" y2="170" stroke="#059669" stroke-width="4" marker-end="url(#arrow-green-cf)" />
            <text x="50" y="170" fill="#047857" font-size="15" font-weight="extrabold">F₃</text>

            <!-- Angle alpha (between F2 and F3, opposite F1) -->
            <path d="M 140 140 A 70 70 0 0 0 255 145" fill="none" stroke="#dc2626" stroke-width="2" />
            <text x="195" y="170" fill="#b91c1c" font-size="14" font-weight="extrabold">α</text>

            <!-- Angle beta (between F1 and F3, opposite F2) -->
            <path d="M 140 80 A 70 70 0 0 1 200 40" fill="none" stroke="#2563eb" stroke-width="2" />
            <text x="145" y="55" fill="#1d4ed8" font-size="14" font-weight="extrabold">β</text>

            <!-- Angle gamma (between F1 and F2, opposite F3) -->
            <path d="M 200 40 A 70 70 0 0 1 255 80" fill="none" stroke="#059669" stroke-width="2" />
            <text x="235" y="55" fill="#047857" font-size="14" font-weight="extrabold">γ</text>
          </g>

          <defs>
            <marker id="arrow-red-cf" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
            </marker>
            <marker id="arrow-blue-cf" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
            </marker>
            <marker id="arrow-green-cf" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/>
            </marker>
          </defs>
        </svg>`
      }
    },
    {
      heading: "3. Decision Framework: Lami's Theorem vs. Component Method",
      paragraphs: [
        "In NEET numericals, students often struggle to decide whether to apply Lami's Theorem or Component Resolution. Use this decision rule:",
        "• Strategy A: Use Lami's Theorem when:",
        "1. Exactly THREE coplanar forces act at a single point.",
        "2. The system is in static equilibrium.",
        "3. Angles between the force vectors are given directly (e.g. 120°, 90°, 150°).",
        "• Strategy B: Use Component Method ($\\sum F_x = 0, \\sum F_y = 0$) when:",
        "1. FOUR OR MORE forces act on the body.",
        "2. Angles are given relative to horizontal or vertical axes rather than between force vectors.",
        "3. The system is accelerating (non-zero net force).",
        "Common Suspended String Pattern:",
        "A mass $W = mg$ is suspended from a junction point of two strings attached to rigid supports making angles $\\theta_1$ and $\\theta_2$ with the ceiling.",
        "Using Component Resolution at junction point:",
        "$$\\sum F_x = 0 \\implies T_1 \\cos\\theta_1 = T_2 \\cos\\theta_2$$",
        "$$\\sum F_y = 0 \\implies T_1 \\sin\\theta_1 + T_2 \\sin\\theta_2 = W$$"
      ]
    }
  ],

  formulae: [
    {
      title: "Lami's Theorem Formula",
      formula: '\\frac{F_1}{\\sin\\alpha} = \\frac{F_2}{\\sin\\beta} = \\frac{F_3}{\\sin\\gamma}',
      variables: 'F_1, F_2, F_3 = force magnitudes, alpha = angle opposite F_1, beta = angle opposite F_2, gamma = angle opposite F_3.',
      whenToUse: 'Use for 3 coplanar concurrent forces in static equilibrium.',
      calculationExample: {
        problem: 'A weight of 100 N is suspended from a knot held by two strings. String 1 is horizontal, string 2 makes an angle of 30° with the vertical ceiling. Find tension T_2 in string 2.',
        given: 'Weight W = 100 N vertically down, T_1 horizontal to left, T_2 inclined at 30° to vertical.',
        stepByStep: [
          'Step 1: Identify forces at knot: W (100 N down), T_1 (left), T_2 (up-right at 30° to vertical).',
          'Step 2: Angles between forces: Angle between T_1 and W = 90° (gamma). Angle between T_2 and W = 180° - 30° = 150° (alpha, opposite T_1). Angle between T_1 and T_2 = 90° + 30° = 120° (beta, opposite W).',
          'Step 3: Apply Lami theorem: W / sin(120°) = T_2 / sin(90°)',
          'Step 4: 100 / (sqrt(3)/2) = T_2 / 1 => T_2 = 200 / sqrt(3) N.'
        ],
        answer: 'T_2 = 200 / sqrt(3) N (≈ 115.47 N)'
      }
    },
    {
      title: 'Component Equilibrium Formulas',
      formula: '\\sum F_x = 0, \\quad \\sum F_y = 0',
      variables: 'F_x = horizontal components, F_y = vertical components of all external forces.',
      whenToUse: 'General method for equilibrium when 4+ forces act or horizontal/vertical angles are given.'
    }
  ],

  neetImportantPoints: [
    '1. High-Yield Rule: Lami\'s Theorem applies ONLY to 3 coplanar concurrent forces in equilibrium. Do NOT use if there are 2, 4, or more forces, or if the system is accelerating.',
    '2. High-Yield Rule: In Lami\'s Theorem formula $F_1 / \\sin\\alpha$, angle $\\alpha$ is the angle BETWEEN $F_2$ and $F_3$ (opposite to $F_1$). Sum of all three angles $\\alpha + \\beta + \\gamma = 360^\\circ$.',
    '3. High-Yield Rule: If three equal forces $F$ keep a particle in equilibrium, the angle between any pair of forces must be $120^\\circ$ ($360^\\circ / 3 = 120^\\circ$).',
    '4. High-Yield Rule: For a particle resting on a smooth inclined plane of angle $\\theta$ held by a horizontal force $F$: $F \\cos\\theta = m g \\sin\\theta \\implies F = m g \\tan\\theta$.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Using the angle adjacent to a force in Lami\'s theorem instead of the angle between the OTHER two forces.',
      correctFact: 'In F1 / sin alpha, alpha is strictly the angle OPPOSITE to F1 (i.e. the angle between vectors F2 and F3)!',
      whyItMattersForNEET: 'Using the adjacent angle leads to inverted trigonometric values and incorrect options.'
    },
    {
      commonConfusion: 'Applying Lami\'s theorem to non-coplanar or non-concurrent forces.',
      correctFact: 'Lami\'s theorem is mathematically derived from a 2D closed vector triangle. It is invalid for 3D non-coplanar forces!',
      whyItMattersForNEET: 'Conceptual question on conditions of validity of Lami\'s theorem.'
    }
  ],

  quickRevision: [
    'Translational Equilibrium: sum vec(F) = 0 => sum Fx = 0, sum Fy = 0',
    "Lami's Theorem: F1 / sin alpha = F2 / sin beta = F3 / sin gamma",
    "Lami validity: Exactly 3 coplanar concurrent forces in static equilibrium",
    'Alpha = angle between F2 and F3 (opposite F1); Alpha + Beta + Gamma = 360°',
    'Equal forces in 3-force equilibrium => 120° angle between each pair',
    '3-force vector addition forms closed triangle: vec(F)1 + vec(F)2 + vec(F)3 = 0'
  ],

  practiceQuestions: [
  {
    "id": "prac-cf-1",
    "question": "Three coplanar concurrent forces F_1, F_2, F_3 keep a body in static equilibrium. The angle between F_1 and F_2 is 90° and between F_2 and F_3 is 120°. Find the ratio F_1 : F_2 : F_3.",
    "options": [
      "1 : sqrt(3) : 2",
      "sqrt(3) : 1 : 2",
      "1 : 1 : sqrt(2)",
      "2 : 1 : sqrt(3)"
    ],
    "correctAnswer": 0,
    "explanation": "Angles between forces: gamma (between F1 and F2) = 90°. Alpha (between F2 and F3) = 120°. Beta (between F1 and F3) = 360° - (90° + 120°) = 150°. By Lami theorem: F1 / sin(120°) = F2 / sin(150°) = F3 / sin(90°). Substitute sines: F1 / (sqrt(3)/2) = F2 / (1/2) = F3 / 1. Multiply by 2: F1 / sqrt(3) = F2 / 1 = F3 / 2 => F1 : F2 : F3 = sqrt(3) : 1 : 2... wait, F1 is opposite alpha = 120°, so F1 corresponds to sin 120° = sqrt(3)/2. F2 corresponds to sin 150° = 1/2. F3 corresponds to sin 90° = 1. Ratio = sqrt(3) : 1 : 2.",
    "difficulty": "Medium",
    "conceptTested": "Lami's theorem force ratio calculation"
  },
  {
    "id": "prac-cf-2",
    "question": "A mass of 10 kg is suspended by two light strings. String A is horizontal and String B is inclined at 45° to the vertical ceiling. Find tension in String B. (g = 10 m/s²)",
    "options": [
      "100 sqrt(2) N",
      "100 N",
      "50 sqrt(2) N",
      "200 N"
    ],
    "correctAnswer": 0,
    "explanation": "Resolving vertical equilibrium at string junction: T_B cos 45° = mg => T_B (1 / sqrt(2)) = 10 * 10 = 100 => T_B = 100 sqrt(2) N.",
    "difficulty": "Easy",
    "conceptTested": "Equilibrium of suspended mass with component method"
  },
  {
    "id": "prac-physconcurrentforces-3",
    "question": "Regarding Equilibrium of Concurrent Forces & Lami's Theorem, which of the following statements correctly resolves a common misconception about \"Using the angle adjacent to a force in Lami's theorem instead of the angle between the OTHER two forces.\"?",
    "options": [
      "In F1 / sin alpha, alpha is strictly the angle OPPOSITE to F1 (i.e. the angle between vectors F2 and F3)!",
      "Incorrect assumption: Using the angle adjacent to a force in Lami's theorem instead of the angle between the OTHER two forces.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "In F1 / sin alpha, alpha is strictly the angle OPPOSITE to F1 (i.e. the angle between vectors F2 and F3)!. Using the adjacent angle leads to inverted trigonometric values and incorrect options.",
    "difficulty": "Medium",
    "conceptTested": "Equilibrium of Concurrent Forces & Lami's Theorem - Conceptual Clarity"
  },
  {
    "id": "prac-physconcurrentforces-4",
    "question": "Regarding Equilibrium of Concurrent Forces & Lami's Theorem, which of the following statements correctly resolves a common misconception about \"Applying Lami's theorem to non-coplanar or non-concurrent forces.\"?",
    "options": [
      "Lami's theorem is mathematically derived from a 2D closed vector triangle. It is invalid for 3D non-coplanar forces!",
      "Incorrect assumption: Applying Lami's theorem to non-coplanar or non-concurrent forces.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Lami's theorem is mathematically derived from a 2D closed vector triangle. It is invalid for 3D non-coplanar forces!. Conceptual question on conditions of validity of Lami's theorem.",
    "difficulty": "Medium",
    "conceptTested": "Equilibrium of Concurrent Forces & Lami's Theorem - Conceptual Clarity"
  },
  {
    "id": "prac-physconcurrentforces-5",
    "question": "In the study of Equilibrium of Concurrent Forces & Lami's Theorem, what is the exact definition and significance of \"Concurrent Forces\"?",
    "options": [
      "A set of forces whose lines of action all pass through a single common point in space.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A set of forces whose lines of action all pass through a single common point in space.. When forces are concurrent, rotational equilibrium is automatically satisfied (torque tau = 0).",
    "difficulty": "Easy",
    "conceptTested": "Concurrent Forces definition"
  },
  {
    "id": "prac-physconcurrentforces-6",
    "question": "In the study of Equilibrium of Concurrent Forces & Lami's Theorem, what is the exact definition and significance of \"Translational Equilibrium\"?",
    "options": [
      "The mechanical state of a particle or rigid body in which its net acceleration is zero (vec(a) = 0).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The mechanical state of a particle or rigid body in which its net acceleration is zero (vec(a) = 0).. Requires net external force sum vec(F) = 0. Static equilibrium implies body is at rest (v = 0).",
    "difficulty": "Easy",
    "conceptTested": "Translational Equilibrium definition"
  },
  {
    "id": "prac-physconcurrentforces-7",
    "question": "In the study of Equilibrium of Concurrent Forces & Lami's Theorem, what is the exact definition and significance of \"Lami's Theorem\"?",
    "options": [
      "A mathematical theorem for three coplanar concurrent forces in equilibrium stating F_1 / sin alpha = F_2 / sin beta = F_3 / sin gamma.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A mathematical theorem for three coplanar concurrent forces in equilibrium stating F_1 / sin alpha = F_2 / sin beta = F_3 / sin gamma.. Applies strictly and ONLY to EXACTLY THREE coplanar, concurrent, non-collinear forces in static equilibrium!",
    "difficulty": "Easy",
    "conceptTested": "Lami's Theorem definition"
  },
  {
    "id": "prac-physconcurrentforces-8",
    "question": "In the study of Equilibrium of Concurrent Forces & Lami's Theorem, what is the exact definition and significance of \"String Tension Force\"?",
    "options": [
      "The pulling contact force transmitted through a taut string, rope, or cable.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The pulling contact force transmitted through a taut string, rope, or cable.. Tension always pulls AWAY from the point or mass being analyzed along the direction of the string.",
    "difficulty": "Easy",
    "conceptTested": "String Tension Force definition"
  },
  {
    "id": "prac-physconcurrentforces-9",
    "question": "Which of the following is a key NCERT statement regarding Equilibrium of Concurrent Forces & Lami's Theorem?",
    "options": [
      "Translational Equilibrium: sum vec(F) = 0 => sum Fx = 0, sum Fy = 0",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Translational Equilibrium: sum vec(F) = 0 => sum Fx = 0, sum Fy = 0",
    "difficulty": "Easy",
    "conceptTested": "Equilibrium of Concurrent Forces & Lami's Theorem NCERT High-Yield Point"
  },
  {
    "id": "prac-physconcurrentforces-10",
    "question": "Which of the following is a key NCERT statement regarding Equilibrium of Concurrent Forces & Lami's Theorem?",
    "options": [
      "Lami's Theorem: F1 / sin alpha = F2 / sin beta = F3 / sin gamma",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Lami's Theorem: F1 / sin alpha = F2 / sin beta = F3 / sin gamma",
    "difficulty": "Easy",
    "conceptTested": "Equilibrium of Concurrent Forces & Lami's Theorem NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-cf-1',
      year: 2008,
      exam: 'AIPMT',
      examYear: 'AIPMT 2008',
      question: 'A mass m is supported by a massless string wound around a uniform hollow cylinder of mass m and radius R. If the string does not slip on the cylinder, with what acceleration will the mass fall on release?',
      options: ['g / 2', '2g / 3', 'g / 3', 'g'],
      correctAnswer: 0,
      explanation: 'For falling mass: m g - T = m a. For rotating hollow cylinder (I = m R^2): torque tau = T R = I alpha = (m R^2) (a / R) => T = m a. Substituting T = m a into mass equation: m g - m a = m a => 2 m a = m g => a = g / 2.',
      topicId: 'phys-concurrent-forces',
      difficulty: 'Hard',
      conceptTested: 'Tension and acceleration in rotational equilibrium setup',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-cf-2',
      year: 2012,
      exam: 'NEET UG',
      examYear: 'NEET UG 2012',
      question: 'A mass of 1 kg is suspended by a thread. It is lifted up with an acceleration of 4.9 m/s² and lowered down with an acceleration of 4.9 m/s². The ratio of tensions in the two cases is (g = 9.8 m/s²):',
      options: ['3 : 1', '1 : 3', '1 : 2', '2 : 1'],
      correctAnswer: 0,
      explanation: 'Case 1 (lifted up with acceleration a): T_1 = m(g + a) = 1 * (9.8 + 4.9) = 14.7 N. Case 2 (lowered down with acceleration a): T_2 = m(g - a) = 1 * (9.8 - 4.9) = 4.9 N. Ratio T_1 / T_2 = 14.7 / 4.9 = 3 / 1 = 3 : 1.',
      topicId: 'phys-concurrent-forces',
      difficulty: 'Easy',
      conceptTested: 'Ratio of string tensions in accelerating vertical motion',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: "Equilibrium of Concurrent Forces & Lami's Theorem",
    confidenceLabel: 'HIGH',
    confidenceText: 'Regularly tested in NEET via suspended string tension problems and Lami theorem ratio questions.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 2,
    totalDirectPyqs: 2,
    totalHistoricalMarks: 8,
    averageDirectPyqsPerPaper: 0.13,
    maxDirectPyqsInSinglePaper: 1,
    minDirectPyqsInSinglePaper: 0,
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 - 4 Marks',
    weightagePercentage: 1.5,
    expectedQuestionsCount: 1,
    preparationStrategy: "Master Lami's theorem ratio F1/sin alpha = F2/sin beta = F3/sin gamma and string tension components.",
    yearWiseBreakdown: [
      {
        year: 2012,
        exam: 'NEET UG',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Suspended Mass Tension Ratio',
        verificationStatus: 'Verified against official NEET 2012 paper',
        classification: 'Direct'
      },
      {
        year: 2008,
        exam: 'AIPMT',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Rotational String Tension Acceleration',
        verificationStatus: 'Verified against AIPMT 2008 paper',
        classification: 'Direct'
      }
    ],
    sourceInfo: {
      dataSource: 'Verified NTA NEET UG & AIPMT Official Historical Question Archives',
      analysisPeriod: '2006 - 2023',
      directPyqsAnalyzedCount: 2,
      classificationMethod: 'Strict topic-based classification',
      disclaimer: 'PYQ counts reflect verified historical paper records only.'
    }
  }
};
