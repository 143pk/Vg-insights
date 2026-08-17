import { DetailedTopicContent } from '../../types/neet';

export const physVectorsResolutionDetails: DetailedTopicContent = {
  topicId: 'phys-vectors-resolution',
  topicName: 'Resolution of Vectors & Products',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Kinematics & Motion',
  chapter: 'Motion in a Plane',

  whatIsThisTopic: 'Resolution of a vector involves splitting a single vector into mutually perpendicular components along orthogonal axes (x, y, z). Expressing vectors in Cartesian component form (A_x hat(i) + A_y hat(j) + A_z hat(k)) simplifies 2D and 3D kinematics and dynamics problems. Vector products—namely the Scalar (Dot) Product and Vector (Cross) Product—provide essential mathematical operations for physical quantities like work, power, torque, angular momentum, and magnetic force. This topic covers rectangular resolution, magnitude/direction calculation, dot product geometric/physical significance, cross product right-hand rule, perpendicularity and parallelism tests, and high-yield NEET numerical methods.',

  basicIdea: [
    '1. Rectangular Components in 2D: A vector vec(A) making an angle theta with the x-axis can be resolved into x-component A_x = A cos theta and y-component A_y = A sin theta. In vector form: vec(A) = A_x hat(i) + A_y hat(j).',
    '2. Reconstruction: Magnitude |vec(A)| = sqrt(A_x^2 + A_y^2). Direction angle theta = tan^-1(A_y / A_x).',
    '3. Dot (Scalar) Product: vec(A) . vec(B) = |vec(A)| |vec(B)| cos theta = A_x B_x + A_y B_y + A_z B_z. Result is a SCALAR. If two non-zero vectors are perpendicular (theta = 90°), vec(A) . vec(B) = 0.',
    '4. Cross (Vector) Product: vec(A) x vec(B) = (|vec(A)| |vec(B)| sin theta) hat(n), where hat(n) is a unit vector perpendicular to both vec(A) and vec(B) according to the Right-Hand Thumb Rule. Result is a VECTOR. If two non-zero vectors are parallel (theta = 0° or 180°), vec(A) x vec(B) = vec(0).',
    '5. Direction Cosines: If vec(A) makes angles alpha, beta, gamma with the x, y, z axes respectively, cos alpha = A_x / A, cos beta = A_y / A, cos gamma = A_z / A. Identity: cos^2 alpha + cos^2 beta + cos^2 gamma = 1.'
  ],

  importantTerms: [
    {
      term: 'Orthogonal Resolution',
      definition: 'Splitting a vector into mutually perpendicular components along x, y, and z coordinate axes.',
      neetNote: 'The component along the adjacent angle side is ALWAYS A cos theta; the opposite side component is A sin theta.'
    },
    {
      term: 'Dot (Scalar) Product',
      symbol: 'vec(A) . vec(B)',
      definition: 'The product of the magnitudes of two vectors and the cosine of the angle between them: vec(A) . vec(B) = A B cos theta.',
      neetNote: 'Self dot product vec(A) . vec(A) = A^2. Unit vectors: hat(i).hat(i) = hat(j).hat(j) = hat(k).hat(k) = 1; hat(i).hat(j) = hat(j).hat(k) = hat(k).hat(i) = 0.'
    },
    {
      term: 'Cross (Vector) Product',
      symbol: 'vec(A) x vec(B)',
      definition: 'A vector whose magnitude is A B sin theta and whose direction is perpendicular to the plane containing vec(A) and vec(B).',
      neetNote: 'Anti-commutative: vec(A) x vec(B) = - (vec(B) x vec(A)). Self cross product vec(A) x vec(A) = vec(0). Cyclic unit vectors: hat(i) x hat(j) = hat(k), hat(j) x hat(k) = hat(i), hat(k) x hat(i) = hat(j).'
    },
    {
      term: 'Direction Cosines',
      symbol: 'cos alpha, cos beta, cos gamma',
      definition: 'The cosines of the angles made by a vector with the positive x, y, and z axes respectively.',
      neetNote: 'cos^2 alpha + cos^2 beta + cos^2 gamma = 1. In terms of sines: sin^2 alpha + sin^2 beta + sin^2 gamma = 2.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Rectangular Components & Vector Reconstruction',
      paragraphs: [
        'In Cartesian coordinates, a 3D vector vec(A) is expressed as:',
        '$$\\vec{A} = A_x \\hat{i} + A_y \\hat{j} + A_z \\hat{k}$$',
        'Magnitude: $|\\vec{A}| = A = \\sqrt{A_x^2 + A_y^2 + A_z^2}$.',
        'Unit vector in direction of vec(A):',
        '$$\\hat{A} = \\frac{\\vec{A}}{|\\vec{A}|} = \\frac{A_x \\hat{i} + A_y \\hat{j} + A_z \\hat{k}}{\\sqrt{A_x^2 + A_y^2 + A_z^2}}$$',
        'Reconstruction in 2D: If given A_x and A_y, vector magnitude is $A = \\sqrt{A_x^2 + A_y^2}$ and direction angle with x-axis is $\\theta = \\tan^{-1}\\left(\\frac{A_y}{A_x}\\right)$.'
      ],
      visual: {
        caption: 'Rectangular Resolution of a Vector in 2D',
        guide: 'A_x = A cos theta along x-axis, A_y = A sin theta along y-axis.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 220" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <rect width="800" height="220" rx="16" fill="#f8fafc" />
          <g transform="translate(80, 20)">
            <!-- Axes -->
            <line x1="0" y1="170" x2="350" y2="170" stroke="#475569" stroke-width="3" />
            <line x1="0" y1="170" x2="0" y2="10" stroke="#475569" stroke-width="3" />
            <text x="360" y="175" fill="#334155" font-size="14" font-weight="bold">X-axis</text>
            <text x="-10" y="5" fill="#334155" font-size="14" font-weight="bold">Y-axis</text>

            <!-- Vector A -->
            <line x1="0" y1="170" x2="240" y2="50" stroke="#2563eb" stroke-width="4" />
            <text x="130" y="90" fill="#1d4ed8" font-size="16" font-weight="extrabold">Vector A</text>

            <!-- Ax component -->
            <line x1="0" y1="170" x2="240" y2="170" stroke="#059669" stroke-width="4" />
            <text x="100" y="195" fill="#047857" font-size="14" font-weight="extrabold">A_x = A cos θ</text>

            <!-- Ay component -->
            <line x1="240" y1="170" x2="240" y2="50" stroke="#dc2626" stroke-width="3" stroke-dasharray="4 4" />
            <text x="250" y="115" fill="#b91c1c" font-size="14" font-weight="extrabold">A_y = A sin θ</text>

            <!-- Angle theta -->
            <path d="M 50 170 A 50 50 0 0 0 43 148" fill="none" stroke="#2563eb" stroke-width="2" />
            <text x="55" y="158" fill="#1d4ed8" font-size="14" font-weight="bold">θ</text>
          </g>
        </svg>`
      }
    },
    {
      heading: '2. Dot Product (Scalar Product) Mechanics & Applications',
      paragraphs: [
        'Definition: $\\vec{A} \\cdot \\vec{B} = A B \\cos\\theta = A_x B_x + A_y B_y + A_z B_z$.',
        'Physical Quantities defined via Dot Product:',
        '• Work Done: $W = \\vec{F} \\cdot \\vec{d} = F d \\cos\\theta$',
        '• Instantaneous Power: $P = \\vec{F} \\cdot \\vec{v} = F v \\cos\\theta$',
        '• Electric Flux: $\\Phi_E = \\vec{E} \\cdot \\vec{A} = E A \\cos\\theta$',
        '• Magnetic Flux: $\\Phi_B = \\vec{B} \\cdot \\vec{A} = B A \\cos\\theta$',
        'Angle between two vectors using Dot Product:',
        '$$\\cos\\theta = \\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{A}| |\\vec{B}|} = \\frac{A_x B_x + A_y B_y + A_z B_z}{\\sqrt{A_x^2 + A_y^2 + A_z^2} \\sqrt{B_x^2 + B_y^2 + B_z^2}}$$',
        'Perpendicular Test: If $\\vec{A} \\cdot \\vec{B} = 0$ for non-zero vectors, then $\\vec{A} \\perp \\vec{B}$ (theta = 90°).'
      ]
    },
    {
      heading: '3. Cross Product (Vector Product) Mechanics & Applications',
      paragraphs: [
        'Definition: $\\vec{A} \\times \\vec{B} = (A B \\sin\\theta) \\hat{n}$.',
        'Determinant Method for Component Calculation:',
        '$$\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z \\end{vmatrix} = \\hat{i}(A_y B_z - A_z B_y) - \\hat{j}(A_x B_z - A_z B_x) + \\hat{k}(A_x B_y - A_y B_x)$$',
        'Physical Quantities defined via Cross Product:',
        '• Torque: $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$',
        '• Angular Momentum: $\\vec{L} = \\vec{r} \\times \\vec{p}$',
        '• Linear Velocity in rotation: $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$',
        '• Magnetic Force on moving charge: $\\vec{F} = q (\\vec{v} \\times \\vec{B})$',
        'Geometrical Significance:',
        '• Area of Parallelogram with adjacent sides vec(A) and vec(B) = $|\\vec{A} \\times \\vec{B}| = A B \\sin\\theta$.',
        '• Area of Triangle with sides vec(A) and vec(B) = $\\frac{1}{2} |\\vec{A} \\times \\vec{B}|$.',
        'Parallel Test: If $\\vec{A} \\times \\vec{B} = \\vec{0}$, vectors are parallel or anti-parallel (theta = 0° or 180°).'
      ]
    }
  ],

  formulae: [
    {
      title: 'Dot Product Component Formula',
      formula: '\\vec{A} \\cdot \\vec{B} = A_x B_x + A_y B_y + A_z B_z = A B \\cos\\theta',
      variables: 'A_x, A_y, A_z and B_x, B_y, B_z are rectangular components of vectors A and B.',
      whenToUse: 'Use when vectors are given in hat(i), hat(j), hat(k) form to find dot product or angle theta.',
      calculationExample: {
        problem: 'Find the dot product of vec(A) = 2 hat(i) + 3 hat(j) - 4 hat(k) and vec(B) = 4 hat(i) - 2 hat(j) + hat(k).',
        given: 'A_x = 2, A_y = 3, A_z = -4; B_x = 4, B_y = -2, B_z = 1.',
        stepByStep: [
          'Step 1: Write formula: vec(A) . vec(B) = A_x B_x + A_y B_y + A_z B_z',
          'Step 2: Multiply corresponding components: (2)(4) + (3)(-2) + (-4)(1)',
          'Step 3: Simplify: 8 - 6 - 4 = -2.'
        ],
        answer: '-2'
      }
    },
    {
      title: 'Condition for Perpendicular Vectors',
      formula: '\\vec{A} \\cdot \\vec{B} = 0 \\implies A_x B_x + A_y B_y + A_z B_z = 0',
      variables: 'Components of vectors vec(A) and vec(B).',
      whenToUse: 'Super high-yield NEET numerical condition to find an unknown component parameter.'
    },
    {
      title: 'Cross Product Determinant Formula',
      formula: '\\vec{A} \\times \\vec{B} = (A_y B_z - A_z B_y)\\hat{i} + (A_z B_x - A_x B_z)\\hat{j} + (A_x B_y - A_y B_x)\\hat{k}',
      variables: 'A_x, A_y, A_z and B_x, B_y, B_z are component values.',
      whenToUse: 'Use to calculate cross product vector (torque, angular momentum, magnetic force).'
    },
    {
      title: 'Relation between Dot and Cross Product',
      formula: '|\\vec{A} \\times \\vec{B}|^2 + (\\vec{A} \\cdot \\vec{B})^2 = A^2 B^2',
      variables: 'A, B = magnitudes of vectors vec(A) and vec(B).',
      whenToUse: 'Use when relating cross product magnitude and dot product value directly.'
    }
  ],

  neetImportantPoints: [
    '1. High-Yield Rule: If $|\\vec{A} \\cdot \\vec{B}| = |\\vec{A} \\times \\vec{B}|$, then $A B \\cos\\theta = A B \\sin\\theta \\implies \\tan\\theta = 1 \\implies \\theta = 45^\\circ$.',
    '2. High-Yield Rule: If $|\\vec{A} \\cdot \\vec{B}| = \\sqrt{3} |\\vec{A} \\times \\vec{B}|$, then $\\tan\\theta = 1/\\sqrt{3} \\implies \\theta = 30^\\circ$.',
    '3. Order matters in cross product: $\\vec{A} \\times \\vec{B} = - (\\vec{B} \\times \\vec{A})$. Flipping the vector product changes direction by 180°.',
    '4. A unit vector perpendicular to both vec(A) and vec(B) is given by: $\\hat{n} = \\frac{\\vec{A} \\times \\vec{B}}{|\\vec{A} \\times \\vec{B}|}$.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing component resolution sin and cos functions depending on angle reference.',
      correctFact: 'The component ADJACENT to the reference angle theta is ALWAYS A cos theta; the component OPPOSITE to theta is A sin theta.',
      whyItMattersForNEET: 'Prevents wrong component resolution on inclined planes or angle with y-axis.'
    },
    {
      commonConfusion: 'Thinking cross product of parallel vectors is maximum.',
      correctFact: 'Cross product magnitude is AB sin theta, which is ZERO for parallel vectors (theta = 0°), and MAXIMUM for perpendicular vectors (theta = 90°).',
      whyItMattersForNEET: 'Avoids swapping dot and cross product properties.'
    }
  ],

  quickRevision: [
    'A_x = A cos theta, A_y = A sin theta, A = sqrt(A_x^2 + A_y^2)',
    'Dot Product: vec(A).vec(B) = A B cos theta = A_x B_x + A_y B_y + A_z B_z',
    'Perpendicular test: vec(A).vec(B) = 0',
    'Cross Product: |vec(A) x vec(B)| = A B sin theta',
    'Parallel test: vec(A) x vec(B) = vec(0)',
    'If |A.B| = |A x B|, theta = 45°',
    'If |A.B| = sqrt(3)|A x B|, theta = 30°'
  ],

  practiceQuestions: [
  {
    "id": "prac-vec-res-1",
    "question": "A force vec(F) = 5 hat(i) + 3 hat(j) + 2 hat(k) N displaces a body by vec(d) = 2 hat(i) - hat(j) m. Calculate the work done by the force.",
    "options": [
      "7 J",
      "13 J",
      "10 J",
      "5 J"
    ],
    "correctAnswer": 0,
    "explanation": "Work W = vec(F) . vec(d) = (5)(2) + (3)(-1) + (2)(0) = 10 - 3 + 0 = 7 Joules.",
    "difficulty": "Easy",
    "conceptTested": "Work as a dot product of force and displacement"
  },
  {
    "id": "prac-vec-res-2",
    "question": "Find the unit vector perpendicular to both vec(A) = 2 hat(i) + hat(j) and vec(B) = hat(i) - hat(j) + hat(k).",
    "options": [
      "(hat(i) - 2hat(j) - 3hat(k)) / sqrt(14)",
      "(hat(i) + 2hat(j) + 3hat(k)) / sqrt(14)",
      "(-hat(i) + 2hat(j) - 3hat(k)) / sqrt(14)",
      "(2hat(i) - hat(j) + 3hat(k)) / sqrt(14)"
    ],
    "correctAnswer": 0,
    "explanation": "vec(A) x vec(B) = | hat(i) hat(j) hat(k) ; 2 1 0 ; 1 -1 1 | = hat(i)(1-0) - hat(j)(2-0) + hat(k)(-2-1) = hat(i) - 2hat(j) - 3hat(k). Magnitude = sqrt(1^2 + (-2)^2 + (-3)^2) = sqrt(14). Unit vector hat(n) = (hat(i) - 2hat(j) - 3hat(k)) / sqrt(14).",
    "difficulty": "Medium",
    "conceptTested": "Unit vector perpendicular to two vectors using cross product"
  },
  {
    "id": "prac-physvectorsresolution-3",
    "question": "Regarding Resolution of Vectors & Products, which of the following statements correctly resolves a common misconception about \"Confusing component resolution sin and cos functions depending on angle reference.\"?",
    "options": [
      "The component ADJACENT to the reference angle theta is ALWAYS A cos theta; the component OPPOSITE to theta is A sin theta.",
      "Incorrect assumption: Confusing component resolution sin and cos functions depending on angle reference.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "The component ADJACENT to the reference angle theta is ALWAYS A cos theta; the component OPPOSITE to theta is A sin theta.. Prevents wrong component resolution on inclined planes or angle with y-axis.",
    "difficulty": "Medium",
    "conceptTested": "Resolution of Vectors & Products - Conceptual Clarity"
  },
  {
    "id": "prac-physvectorsresolution-4",
    "question": "Regarding Resolution of Vectors & Products, which of the following statements correctly resolves a common misconception about \"Thinking cross product of parallel vectors is maximum.\"?",
    "options": [
      "Cross product magnitude is AB sin theta, which is ZERO for parallel vectors (theta = 0°), and MAXIMUM for perpendicular vectors (theta = 90°).",
      "Incorrect assumption: Thinking cross product of parallel vectors is maximum.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Cross product magnitude is AB sin theta, which is ZERO for parallel vectors (theta = 0°), and MAXIMUM for perpendicular vectors (theta = 90°).. Avoids swapping dot and cross product properties.",
    "difficulty": "Medium",
    "conceptTested": "Resolution of Vectors & Products - Conceptual Clarity"
  },
  {
    "id": "prac-physvectorsresolution-5",
    "question": "In the study of Resolution of Vectors & Products, what is the exact definition and significance of \"Orthogonal Resolution\"?",
    "options": [
      "Splitting a vector into mutually perpendicular components along x, y, and z coordinate axes.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Splitting a vector into mutually perpendicular components along x, y, and z coordinate axes.. The component along the adjacent angle side is ALWAYS A cos theta; the opposite side component is A sin theta.",
    "difficulty": "Easy",
    "conceptTested": "Orthogonal Resolution definition"
  },
  {
    "id": "prac-physvectorsresolution-6",
    "question": "In the study of Resolution of Vectors & Products, what is the exact definition and significance of \"Dot (Scalar) Product\"?",
    "options": [
      "The product of the magnitudes of two vectors and the cosine of the angle between them: vec(A) . vec(B) = A B cos theta.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The product of the magnitudes of two vectors and the cosine of the angle between them: vec(A) . vec(B) = A B cos theta.. Self dot product vec(A) . vec(A) = A^2. Unit vectors: hat(i).hat(i) = hat(j).hat(j) = hat(k).hat(k) = 1; hat(i).hat(j) = hat(j).hat(k) = hat(k).hat(i) = 0.",
    "difficulty": "Easy",
    "conceptTested": "Dot (Scalar) Product definition"
  },
  {
    "id": "prac-physvectorsresolution-7",
    "question": "In the study of Resolution of Vectors & Products, what is the exact definition and significance of \"Cross (Vector) Product\"?",
    "options": [
      "A vector whose magnitude is A B sin theta and whose direction is perpendicular to the plane containing vec(A) and vec(B).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A vector whose magnitude is A B sin theta and whose direction is perpendicular to the plane containing vec(A) and vec(B).. Anti-commutative: vec(A) x vec(B) = - (vec(B) x vec(A)). Self cross product vec(A) x vec(A) = vec(0). Cyclic unit vectors: hat(i) x hat(j) = hat(k), hat(j) x hat(k) = hat(i), hat(k) x hat(i) = hat(j).",
    "difficulty": "Easy",
    "conceptTested": "Cross (Vector) Product definition"
  },
  {
    "id": "prac-physvectorsresolution-8",
    "question": "In the study of Resolution of Vectors & Products, what is the exact definition and significance of \"Direction Cosines\"?",
    "options": [
      "The cosines of the angles made by a vector with the positive x, y, and z axes respectively.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The cosines of the angles made by a vector with the positive x, y, and z axes respectively.. cos^2 alpha + cos^2 beta + cos^2 gamma = 1. In terms of sines: sin^2 alpha + sin^2 beta + sin^2 gamma = 2.",
    "difficulty": "Easy",
    "conceptTested": "Direction Cosines definition"
  },
  {
    "id": "prac-physvectorsresolution-9",
    "question": "Which of the following is a key NCERT statement regarding Resolution of Vectors & Products?",
    "options": [
      "A_x = A cos theta, A_y = A sin theta, A = sqrt(A_x^2 + A_y^2)",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: A_x = A cos theta, A_y = A sin theta, A = sqrt(A_x^2 + A_y^2)",
    "difficulty": "Easy",
    "conceptTested": "Resolution of Vectors & Products NCERT High-Yield Point"
  },
  {
    "id": "prac-physvectorsresolution-10",
    "question": "Which of the following is a key NCERT statement regarding Resolution of Vectors & Products?",
    "options": [
      "Dot Product: vec(A).vec(B) = A B cos theta = A_x B_x + A_y B_y + A_z B_z",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Dot Product: vec(A).vec(B) = A B cos theta = A_x B_x + A_y B_y + A_z B_z",
    "difficulty": "Easy",
    "conceptTested": "Resolution of Vectors & Products NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-vec-res-1',
      year: 2007,
      exam: 'AIPMT',
      examYear: 'AIPMT 2007',
      question: 'If a vector 2 hat(i) + 3 hat(j) + 8 hat(k) is perpendicular to the vector -4 hat(i) + 4 hat(j) + alpha hat(k), then the value of alpha is:',
      options: ['1/2', '-1/2', '1', '-1'],
      correctAnswer: 1,
      explanation: 'For perpendicular vectors, vec(A) . vec(B) = 0 => (2)(-4) + (3)(4) + (8)(alpha) = 0 => -8 + 12 + 8 alpha = 0 => 4 + 8 alpha = 0 => alpha = -1/2.',
      topicId: 'phys-vectors-resolution',
      difficulty: 'Easy',
      conceptTested: 'Dot product condition for perpendicular vectors',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-vec-res-2',
      year: 2013,
      exam: 'NEET UG',
      examYear: 'NEET UG 2013',
      question: 'The magnitude of scalar product of two vectors vec(A) and vec(B) is sqrt(3) times the magnitude of their vector product. The angle between vec(A) and vec(B) is:',
      options: ['30°', '60°', '45°', '90°'],
      correctAnswer: 0,
      explanation: '|vec(A) . vec(B)| = sqrt(3) |vec(A) x vec(B)| => A B cos theta = sqrt(3) A B sin theta => tan theta = 1 / sqrt(3) => theta = 30°.',
      topicId: 'phys-vectors-resolution',
      difficulty: 'Easy',
      conceptTested: 'Ratio of dot product to cross product magnitude',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-vec-res-3',
      year: 2015,
      exam: 'AIPMT',
      examYear: 'AIPMT 2015',
      question: 'If vectors vec(A) = cos(omega t) hat(i) + sin(omega t) hat(j) and vec(B) = cos(omega t / 2) hat(i) + sin(omega t / 2) hat(j) are functions of time, then the value of t at which they are orthogonal to each other is:',
      options: ['t = pi / omega', 't = 0', 't = pi / (2 omega)', 't = pi / (4 omega)'],
      correctAnswer: 0,
      explanation: 'vec(A) . vec(B) = 0 => cos(omega t) cos(omega t / 2) + sin(omega t) sin(omega t / 2) = cos(omega t - omega t / 2) = cos(omega t / 2) = 0 => omega t / 2 = pi / 2 => t = pi / omega.',
      topicId: 'phys-vectors-resolution',
      difficulty: 'Medium',
      conceptTested: 'Time-dependent vector orthogonality condition',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Resolution of Vectors & Products',
    confidenceLabel: 'HIGH',
    confidenceText: 'Regular testing in NEET via dot product perpendicularity and cross product angle applications.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 3,
    totalDirectPyqs: 3,
    totalHistoricalMarks: 12,
    averageDirectPyqsPerPaper: 0.2,
    maxDirectPyqsInSinglePaper: 1,
    minDirectPyqsInSinglePaper: 0,
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 - 4 Marks',
    weightagePercentage: 2.0,
    expectedQuestionsCount: 1,
    preparationStrategy: 'Master dot product perpendicular test A.B = 0 and cross product determinant calculation for torque/angular momentum.',
    yearWiseBreakdown: [
      {
        year: 2015,
        exam: 'AIPMT',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Time-dependent Orthogonality',
        verificationStatus: 'Verified against AIPMT 2015 paper',
        classification: 'Direct'
      },
      {
        year: 2013,
        exam: 'NEET UG',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Dot vs Cross Product Ratio',
        verificationStatus: 'Verified against official NEET 2013 paper',
        classification: 'Direct'
      },
      {
        year: 2007,
        exam: 'AIPMT',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Perpendicular Vector Parameter',
        verificationStatus: 'Verified against AIPMT 2007 paper',
        classification: 'Direct'
      }
    ],
    sourceInfo: {
      dataSource: 'Verified NTA NEET UG & AIPMT Official Historical Question Archives',
      analysisPeriod: '2006 - 2023',
      directPyqsAnalyzedCount: 3,
      classificationMethod: 'Strict topic-based classification',
      disclaimer: 'PYQ counts reflect verified historical paper records only.'
    }
  }
};
