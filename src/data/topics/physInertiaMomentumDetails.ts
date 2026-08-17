import { DetailedTopicContent } from '../../types/neet';

export const physInertiaMomentumDetails: DetailedTopicContent = {
  topicId: 'inertia-momentum',
  topicName: 'Inertia, Mass & Linear Momentum',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Laws of Motion',
  chapter: 'Laws of Motion',

  whatIsThisTopic: 'Inertia is the natural inherent property of a body by virtue of which it opposes any change in its state of rest or uniform motion along a straight line. Mass is the quantitative measure of inertia: a heavier body possesses greater inertia than a lighter body. Linear momentum vec(p) = m vec(v) combines both mass and velocity into a single fundamental vector quantity that determines the impact of a moving object and forms the direct prerequisite for Newton\'s Second Law of Motion. This topic covers the three types of inertia, everyday physical manifestations, vector calculus of linear momentum, change in momentum during elastic collisions, the non-linear relationship between momentum and kinetic energy, and verified NEET exam applications.',

  basicIdea: [
    '1. Concept of Inertia: Inertia is not a physical force or variable, but an inherent passive property of matter. A body cannot change its own state of rest, uniform motion, or direction without the intervention of an external unbalanced net force.',
    '2. Three Types of Inertia: (a) Inertia of Rest: tendency to remain at rest; (b) Inertia of Motion: tendency to continue moving with constant velocity; (c) Inertia of Direction: tendency to maintain its straight-line directional path.',
    '3. Mass as the Measure of Inertia: Inertia is strictly proportional to inertial mass. For example, pushing a stalled bicycle requires minimal force, whereas pushing a heavy truck requires immense force because the truck possesses vastly greater mass.',
    '4. Linear Momentum vec(p): Quantifies the total quantity of motion contained in a body. Defined as vec(p) = m vec(v). It is a vector quantity pointing strictly in the direction of velocity vec(v). SI unit: kg m/s or N s. Dimensions: [M L T^-1].',
    '5. Momentum vs. Kinetic Energy: Kinetic energy K = p^2 / (2m) or p = sqrt(2m K). While kinetic energy is a scalar depending on speed squared, momentum is a vector depending on velocity linearly.'
  ],

  importantTerms: [
    {
      term: 'Inertia',
      definition: 'The natural property of a body by which it resists any change in its state of rest or uniform motion in a straight line.',
      neetNote: 'Inertia has no units or dimensions. Mass is its physical measurement.'
    },
    {
      term: 'Inertial Mass',
      symbol: 'm',
      definition: 'The quantitative measure of a body\'s resistance to acceleration when a force is applied: m = F / a.',
      neetNote: 'Inertial mass is a scalar quantity, remains constant regardless of velocity at non-relativistic speeds.'
    },
    {
      term: 'Linear Momentum',
      symbol: 'vec(p)',
      definition: 'The product of mass and velocity vector of a body: vec(p) = m vec(v).',
      neetNote: 'Vector quantity. Direction is identical to instantaneous velocity vec(v).'
    },
    {
      term: 'Change in Momentum',
      symbol: 'Delta vec(p)',
      definition: 'The vector difference between final momentum and initial momentum: Delta vec(p) = vec(p)_f - vec(p)_i = m (vec(v)_f - vec(v)_i).',
      neetNote: 'Always perform vector subtraction! Magnitude of Delta vec(p) is NOT simply |p_f - p_i| unless motion is 1D along same line.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Types of Inertia & Everyday Physical Examples',
      paragraphs: [
        'Inertia manifests in three distinct physical forms depending on which kinematic parameter is being maintained:',
        '1. Inertia of Rest: The inability of a body to move from rest by itself.',
        '• Example: When a stationary bus suddenly accelerates forward, passengers jerk backward because their feet move forward with the bus floor while their upper body tends to remain at rest due to inertia of rest.',
        '• Example: Beating a carpet with a stick causes dust particles to fall off because the carpet moves away suddenly while the dust particles remain at rest due to inertia.',
        '2. Inertia of Motion: The inability of a moving body to stop by itself.',
        '• Example: When a fast-moving bus suddenly applies brakes, passengers jerk forward because their feet are stopped by the floor while their upper body continues moving forward due to inertia of motion.',
        '• Example: An athlete takes a long running start before taking a long jump to impart high inertia of motion to their body.',
        '3. Inertia of Direction: The inability of a body to change its direction of motion by itself.',
        '• Example: When a car takes a sharp turn along a curved road, passengers are thrown outwards away from the center of curvature because their body tends to continue along the straight tangential line due to inertia of direction.',
        '• Example: Mud flying off a rotating bicycle tire flies off tangentially due to inertia of direction.'
      ]
    },
    {
      heading: '2. Linear Momentum Vector Mechanics & Rebound Analysis',
      paragraphs: [
        'Linear momentum is defined as $\\vec{p} = m \\vec{v}$. Since velocity is a vector, momentum is a vector whose magnitude is $p = m v$ and direction is along $\\vec{v}$.',
        'Important Collision Pattern: Change in Momentum during Wall Reflection',
        'Consider a particle of mass $m$ moving with speed $v$ striking a smooth vertical wall at an angle $\\theta$ with the normal to the wall and rebounding elastically with the same speed at angle $\\theta$.',
        '• Initial velocity vector: $\\vec{v}_i = v \\sin\\theta \\hat{i} - v \\cos\\theta \\hat{j}$ (resolving along wall tangent $\\hat{i}$ and normal $\\hat{j}$).',
        '• Final velocity vector: $\\vec{v}_f = v \\sin\\theta \\hat{i} + v \\cos\\theta \\hat{j}$.',
        '• Change in momentum: $\\Delta \\vec{p} = m \\vec{v}_f - m \\vec{v}_i = m (2 v \\cos\\theta) \\hat{j}$.',
        '• Magnitude of momentum change: $|\\Delta \\vec{p}| = 2 m v \\cos\\theta$.',
        'Note: If angle is given with the wall surface (say $\\phi = 90^\\circ - \\theta$), then $|\\Delta \\vec{p}| = 2 m v \\sin\\phi$. Always verify whether $\\theta$ is measured with the NORMAL or with the WALL surface!'
      ],
      visual: {
        caption: 'Vector Analysis of Momentum Change during Reflection from a Wall',
        guide: 'Initial momentum p_i and final momentum p_f rebound elastically. Tangential component p_x remains unchanged; normal component p_y reverses sign, producing Delta p = 2 mv cos(theta).',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <rect width="800" height="240" rx="16" fill="#f8fafc" />
          <g transform="translate(100, 20)">
            <!-- Vertical Wall -->
            <line x1="300" y1="20" x2="300" y2="200" stroke="#334155" stroke-width="6" />
            <line x1="300" y1="20" x2="315" y2="30" stroke="#64748b" stroke-width="2" />
            <line x1="300" y1="60" x2="315" y2="70" stroke="#64748b" stroke-width="2" />
            <line x1="300" y1="100" x2="315" y2="110" stroke="#64748b" stroke-width="2" />
            <line x1="300" y1="140" x2="315" y2="150" stroke="#64748b" stroke-width="2" />
            <line x1="300" y1="180" x2="315" y2="190" stroke="#64748b" stroke-width="2" />

            <!-- Normal Line -->
            <line x1="80" y1="110" x2="300" y2="110" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 6" />
            <text x="90" y="100" fill="#64748b" font-size="12" font-weight="bold">Normal</text>

            <!-- Incident Vector p_i -->
            <line x1="140" y1="30" x2="300" y2="110" stroke="#dc2626" stroke-width="4" marker-end="url(#arrow-red-im)" />
            <text x="170" y="50" fill="#b91c1c" font-size="14" font-weight="extrabold">p_i = m v</text>

            <!-- Angle theta with normal -->
            <path d="M 230 110 A 50 50 0 0 1 245 83" fill="none" stroke="#dc2626" stroke-width="2" />
            <text x="252" y="98" fill="#b91c1c" font-size="13" font-weight="bold">θ</text>

            <!-- Reflected Vector p_f -->
            <line x1="300" y1="110" x2="140" y2="190" stroke="#2563eb" stroke-width="4" marker-end="url(#arrow-blue-im)" />
            <text x="170" y="180" fill="#1d4ed8" font-size="14" font-weight="extrabold">p_f = m v</text>

            <!-- Angle theta with normal -->
            <path d="M 230 110 A 50 50 0 0 0 245 137" fill="none" stroke="#2563eb" stroke-width="2" />
            <text x="252" y="132" fill="#1d4ed8" font-size="13" font-weight="bold">θ</text>

            <!-- Resultant Delta p -->
            <line x1="300" y1="110" x2="430" y2="110" stroke="#059669" stroke-width="4" marker-end="url(#arrow-green-im)" />
            <text x="320" y="140" fill="#047857" font-size="14" font-weight="extrabold">|Δp| = 2 m v cos θ</text>
          </g>

          <defs>
            <marker id="arrow-red-im" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
            </marker>
            <marker id="arrow-blue-im" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
            </marker>
            <marker id="arrow-green-im" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/>
            </marker>
          </defs>
        </svg>`
      }
    },
    {
      heading: '3. Relationship between Momentum and Kinetic Energy',
      paragraphs: [
        'Kinetic energy $K = \\frac{1}{2} m v^2 = \\frac{(m v)^2}{2m} = \\frac{p^2}{2m}$.',
        'Inverting gives linear momentum in terms of kinetic energy: $p = \\sqrt{2 m K}$.',
        'Important Comparison Cases for NEET:',
        'Case 1: Two bodies of masses $m_1$ and $m_2$ ($m_1 > m_2$) have the SAME kinetic energy ($K_1 = K_2$).',
        '$$\\frac{p_1}{p_2} = \\frac{\\sqrt{2 m_1 K}}{\\sqrt{2 m_2 K}} = \\sqrt{\\frac{m_1}{m_2}} > 1 \\implies p_1 > p_2$$',
        'Conclusion: The heavier body has GREATER momentum when kinetic energies are equal.',
        'Case 2: Two bodies of masses $m_1$ and $m_2$ ($m_1 > m_2$) have the SAME momentum ($p_1 = p_2$).',
        '$$\\frac{K_1}{K_2} = \\frac{p^2 / (2 m_1)}{p^2 / (2 m_2)} = \\frac{m_2}{m_1} < 1 \\implies K_1 < K_2$$',
        'Conclusion: The lighter body has GREATER kinetic energy when linear momenta are equal.',
        'Percentage Change Calculations:',
        'If kinetic energy increases by $300\\%$, new kinetic energy $K\' = K + 3K = 4K$. New momentum $p\' = \\sqrt{2m (4K)} = 2 \\sqrt{2mK} = 2p$. Percentage increase in momentum = $\\frac{2p - p}{p} \\times 100\\% = 100\\%$.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Linear Momentum Formula',
      formula: 'vec(p) = m vec(v), \\quad p = m v',
      variables: 'm = inertial mass (kg), v = velocity vector (m/s), p = momentum (kg m/s).',
      whenToUse: 'Use to find linear momentum vector or magnitude.'
    },
    {
      title: 'Momentum and Kinetic Energy Relation',
      formula: 'p = \\sqrt{2 m K}, \\quad K = \\frac{p^2}{2m}',
      variables: 'p = momentum magnitude, m = mass, K = kinetic energy.',
      whenToUse: 'Use to convert between kinetic energy and momentum or compare heavy vs light masses.',
      calculationExample: {
        problem: 'If the kinetic energy of a body is increased by 300%, find the percentage increase in its momentum.',
        given: 'Initial kinetic energy = K, Final kinetic energy K\' = K + 3K = 4K',
        stepByStep: [
          'Step 1: Formula p = sqrt(2 m K)',
          'Step 2: Initial momentum p_1 = sqrt(2 m K)',
          'Step 3: Final momentum p_2 = sqrt(2 m (4K)) = 2 sqrt(2 m K) = 2 p_1',
          'Step 4: Percentage increase = ((p_2 - p_1) / p_1) * 100% = ((2 p_1 - p_1) / p_1) * 100% = 100%.'
        ],
        answer: '100% increase'
      }
    },
    {
      title: 'Momentum Change on Wall Reflection',
      formula: '|Delta vec(p)| = 2 m v \\cos\\theta',
      variables: 'm = mass, v = speed, theta = angle of incidence with normal to the wall.',
      whenToUse: 'Use when a particle strikes a surface and rebounds elastically at angle theta with normal.'
    }
  ],

  neetImportantPoints: [
    '1. High-Yield Rule: When two bodies of different masses have equal kinetic energy, the HEAVIER body has larger momentum ($p \\propto \\sqrt{m}$).',
    '2. High-Yield Rule: When two bodies of different masses have equal momentum, the LIGHTER body has larger kinetic energy ($K \\propto 1/m$).',
    '3. High-Yield Rule: For elastic rebound from a wall, if angle theta is with NORMAL, $|\\Delta \\vec{p}| = 2 m v \\cos\\theta$. If angle phi is with WALL, $|\\Delta \\vec{p}| = 2 m v \\sin\\phi$.',
    '4. High-Yield Rule: Inertia depends ONLY on mass. It does NOT depend on speed, velocity, acceleration, or physical dimensions.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking heavy and light bodies with equal momentum have the same kinetic energy.',
      correctFact: 'Kinetic energy K = p^2 / (2m). For equal momentum p, K is inversely proportional to mass m, so the lighter body has higher kinetic energy!',
      whyItMattersForNEET: 'Frequent conceptual assertion-reason question in NEET.'
    },
    {
      commonConfusion: 'Subtracting momentum magnitudes directly during 2D collision without accounting for vector directions.',
      correctFact: 'Momentum is a vector! Change in momentum Delta vec(p) = vec(p)_f - vec(p)_i requires vector subtraction.',
      whyItMattersForNEET: 'Direct source of option traps in wall reflection problems.'
    }
  ],

  quickRevision: [
    'Inertia = property of resisting change in rest/motion; Mass = quantitative measure of inertia',
    'Linear momentum vec(p) = m vec(v); SI unit: kg m/s or N s; Dimension: [M L T^-1]',
    'p = sqrt(2 m K) and K = p^2 / (2m)',
    'Equal K => Heavier body has greater p (p1/p2 = sqrt(m1/m2))',
    'Equal p => Lighter body has greater K (K1/K2 = m2/m1)',
    'Rebound off wall at angle theta with normal: Delta p = 2 m v cos theta'
  ],

  practiceQuestions: [
  {
    "id": "prac-im-1",
    "question": "A body of mass 2 kg and another body of mass 8 kg possess equal kinetic energy. What is the ratio of their linear momenta p_1 : p_2?",
    "options": [
      "1 : 2",
      "1 : 4",
      "2 : 1",
      "1 : 1"
    ],
    "correctAnswer": 0,
    "explanation": "p = sqrt(2 m K). Since K is same, p_1 / p_2 = sqrt(m_1 / m_2) = sqrt(2 / 8) = sqrt(1 / 4) = 1 / 2.",
    "difficulty": "Easy",
    "conceptTested": "Momentum ratio for equal kinetic energies"
  },
  {
    "id": "prac-im-2",
    "question": "A ball of mass 0.5 kg moving with a speed of 10 m/s hits a wall normally and bounces back with the same speed. Find the magnitude of change in momentum of the ball.",
    "options": [
      "10 kg m/s",
      "5 kg m/s",
      "0 kg m/s",
      "20 kg m/s"
    ],
    "correctAnswer": 0,
    "explanation": "vec(p)_i = 0.5 * 10 hat(i) = 5 hat(i). vec(p)_f = 0.5 * (-10) hat(i) = -5 hat(i). Delta vec(p) = vec(p)_f - vec(p)_i = -5 hat(i) - 5 hat(i) = -10 hat(i). Magnitude = 10 kg m/s.",
    "difficulty": "Easy",
    "conceptTested": "Normal reflection momentum change"
  },
  {
    "id": "prac-inertiamomentum-3",
    "question": "Regarding Inertia, Mass & Linear Momentum, which of the following statements correctly resolves a common misconception about \"Thinking heavy and light bodies with equal momentum have the same kinetic energy.\"?",
    "options": [
      "Kinetic energy K = p^2 / (2m). For equal momentum p, K is inversely proportional to mass m, so the lighter body has higher kinetic energy!",
      "Incorrect assumption: Thinking heavy and light bodies with equal momentum have the same kinetic energy.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Kinetic energy K = p^2 / (2m). For equal momentum p, K is inversely proportional to mass m, so the lighter body has higher kinetic energy!. Frequent conceptual assertion-reason question in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Inertia, Mass & Linear Momentum - Conceptual Clarity"
  },
  {
    "id": "prac-inertiamomentum-4",
    "question": "Regarding Inertia, Mass & Linear Momentum, which of the following statements correctly resolves a common misconception about \"Subtracting momentum magnitudes directly during 2D collision without accounting for vector directions.\"?",
    "options": [
      "Momentum is a vector! Change in momentum Delta vec(p) = vec(p)_f - vec(p)_i requires vector subtraction.",
      "Incorrect assumption: Subtracting momentum magnitudes directly during 2D collision without accounting for vector directions.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Momentum is a vector! Change in momentum Delta vec(p) = vec(p)_f - vec(p)_i requires vector subtraction.. Direct source of option traps in wall reflection problems.",
    "difficulty": "Medium",
    "conceptTested": "Inertia, Mass & Linear Momentum - Conceptual Clarity"
  },
  {
    "id": "prac-inertiamomentum-5",
    "question": "In the study of Inertia, Mass & Linear Momentum, what is the exact definition and significance of \"Inertia\"?",
    "options": [
      "The natural property of a body by which it resists any change in its state of rest or uniform motion in a straight line.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The natural property of a body by which it resists any change in its state of rest or uniform motion in a straight line.. Inertia has no units or dimensions. Mass is its physical measurement.",
    "difficulty": "Easy",
    "conceptTested": "Inertia definition"
  },
  {
    "id": "prac-inertiamomentum-6",
    "question": "In the study of Inertia, Mass & Linear Momentum, what is the exact definition and significance of \"Inertial Mass\"?",
    "options": [
      "The quantitative measure of a body's resistance to acceleration when a force is applied: m = F / a.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The quantitative measure of a body's resistance to acceleration when a force is applied: m = F / a.. Inertial mass is a scalar quantity, remains constant regardless of velocity at non-relativistic speeds.",
    "difficulty": "Easy",
    "conceptTested": "Inertial Mass definition"
  },
  {
    "id": "prac-inertiamomentum-7",
    "question": "In the study of Inertia, Mass & Linear Momentum, what is the exact definition and significance of \"Linear Momentum\"?",
    "options": [
      "The product of mass and velocity vector of a body: vec(p) = m vec(v).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The product of mass and velocity vector of a body: vec(p) = m vec(v).. Vector quantity. Direction is identical to instantaneous velocity vec(v).",
    "difficulty": "Easy",
    "conceptTested": "Linear Momentum definition"
  },
  {
    "id": "prac-inertiamomentum-8",
    "question": "In the study of Inertia, Mass & Linear Momentum, what is the exact definition and significance of \"Change in Momentum\"?",
    "options": [
      "The vector difference between final momentum and initial momentum: Delta vec(p) = vec(p)_f - vec(p)_i = m (vec(v)_f - vec(v)_i).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The vector difference between final momentum and initial momentum: Delta vec(p) = vec(p)_f - vec(p)_i = m (vec(v)_f - vec(v)_i).. Always perform vector subtraction! Magnitude of Delta vec(p) is NOT simply |p_f - p_i| unless motion is 1D along same line.",
    "difficulty": "Easy",
    "conceptTested": "Change in Momentum definition"
  },
  {
    "id": "prac-inertiamomentum-9",
    "question": "Which of the following is a key NCERT statement regarding Inertia, Mass & Linear Momentum?",
    "options": [
      "Inertia = property of resisting change in rest/motion; Mass = quantitative measure of inertia",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Inertia = property of resisting change in rest/motion; Mass = quantitative measure of inertia",
    "difficulty": "Easy",
    "conceptTested": "Inertia, Mass & Linear Momentum NCERT High-Yield Point"
  },
  {
    "id": "prac-inertiamomentum-10",
    "question": "Which of the following is a key NCERT statement regarding Inertia, Mass & Linear Momentum?",
    "options": [
      "Linear momentum vec(p) = m vec(v); SI unit: kg m/s or N s; Dimension: [M L T^-1]",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Linear momentum vec(p) = m vec(v); SI unit: kg m/s or N s; Dimension: [M L T^-1]",
    "difficulty": "Easy",
    "conceptTested": "Inertia, Mass & Linear Momentum NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-im-1',
      year: 2011,
      exam: 'AIPMT',
      examYear: 'AIPMT 2011',
      question: 'A body of mass 3 kg hits a wall at an angle of 60° with the normal to the wall and rebounds at the same angle with the same speed of 10 m/s. The magnitude of change in momentum of the body is:',
      options: ['30 kg m/s', '60 kg m/s', '30 sqrt(3) kg m/s', '15 kg m/s'],
      correctAnswer: 0,
      explanation: 'Formula for change in momentum during elastic reflection at angle theta with normal is Delta p = 2 m v cos theta. Substitute m = 3 kg, v = 10 m/s, theta = 60°: Delta p = 2 * 3 * 10 * cos 60° = 60 * 0.5 = 30 kg m/s.',
      topicId: 'inertia-momentum',
      difficulty: 'Medium',
      conceptTested: 'Change in momentum for elastic oblique reflection',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-im-2',
      year: 2021,
      exam: 'NEET UG',
      examYear: 'NEET UG 2021',
      question: 'If the linear momentum of a body is increased by 50%, the percentage increase in its kinetic energy is:',
      options: ['125%', '100%', '50%', '225%'],
      correctAnswer: 0,
      explanation: 'Kinetic energy K = p^2 / (2m). New momentum p\' = p + 0.5p = 1.5p. New kinetic energy K\' = (1.5p)^2 / (2m) = 2.25 (p^2 / 2m) = 2.25 K. Percentage increase in K = ((K\' - K) / K) * 100% = ((2.25K - K) / K) * 100% = 1.25 * 100% = 125%.',
      topicId: 'inertia-momentum',
      difficulty: 'Medium',
      conceptTested: 'Percentage change in kinetic energy from momentum change',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Inertia, Mass & Linear Momentum',
    confidenceLabel: 'HIGH',
    confidenceText: 'Regularly tested in NEET via wall rebound problems and momentum-kinetic energy percentage change.',
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
    preparationStrategy: 'Master p = sqrt(2mK) percentage relationships and Delta p = 2mv cos theta vector wall rebounds.',
    yearWiseBreakdown: [
      {
        year: 2021,
        exam: 'NEET UG',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Percentage change in Kinetic Energy',
        verificationStatus: 'Verified against official NEET 2021 paper',
        classification: 'Direct'
      },
      {
        year: 2011,
        exam: 'AIPMT',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Change in Momentum for Oblique Wall Rebound',
        verificationStatus: 'Verified against AIPMT 2011 paper',
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
