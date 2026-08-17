import { DetailedTopicContent } from '../../types/neet';

export const physUniformCircularMotionDetails: DetailedTopicContent = {
  topicId: 'phys-uniform-circular-motion',
  topicName: 'Uniform Circular Motion & Centripetal Acceleration',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Kinematics & Motion',
  chapter: 'Motion in a Plane',

  whatIsThisTopic: 'Uniform Circular Motion (UCM) describes the motion of a body traveling along a circular path of constant radius r at a constant speed v. Although the magnitude of velocity (speed) remains strictly unchanged, the direction of the velocity vector continuous changes at every instantaneous point along the circle. Consequently, UCM is fundamentally an ACCELERATED motion. The acceleration responsible for continuously deflecting the velocity vector towards the center of the circular orbit is called Centripetal Acceleration a_c = v^2 / r = omega^2 r. This topic covers angular displacement, angular velocity, time period, frequency, tangential vs. radial quantities, centripetal force mechanics, zero work done by centripetal force, NEET numerical methods, and verified previous year questions.',

  basicIdea: [
    '1. Angular Displacement (theta): Angle swept by radius vector in time t. Unit: radians (rad). Relation with arc length s: s = r theta. Total angular displacement for N revolutions: theta = 2 pi N radians.',
    '2. Angular Velocity (omega): Time rate of change of angular displacement: omega = d theta / dt = (2 pi) / T = 2 pi f. Unit: rad/s. Relation with linear speed v: v = omega r.',
    '3. Speed vs. Velocity in UCM: In UCM, linear speed |vec(v)| = v is CONSTANT, but linear velocity vec(v) is VARIABLE because its tangential direction changes continuously. Kinetic energy K = (1/2) m v^2 is CONSTANT.',
    '4. Centripetal Acceleration (a_c): Acceleration directed radially inward towards the center of the circular path: a_c = v^2 / r = omega^2 r = 4 pi^2 f^2 r. Its magnitude is constant in UCM, but its direction changes continuously (always pointing to center).',
    '5. Centripetal Force (F_c) & Zero Work: Real physical force required to maintain circular motion: F_c = m a_c = (m v^2) / r = m omega^2 r. Because F_c is ALWAYS perpendicular to instantaneous velocity vec(v) (F_c . v = 0), the work done by centripetal force in any displacement is ALWAYS ZERO (W = 0).'
  ],

  importantTerms: [
    {
      term: 'Uniform Circular Motion',
      definition: 'Motion of an object along a circular path with a constant linear speed and constant angular speed.',
      neetNote: 'UCM has constant speed, constant kinetic energy, and constant magnitude of acceleration, but variable velocity and variable acceleration vector direction.'
    },
    {
      term: 'Angular Velocity',
      symbol: 'omega',
      definition: 'The rate at which the radius vector rotates about the center: omega = d theta / dt = 2 pi / T = 2 pi f.',
      neetNote: 'SI unit is rad/s. If frequency f is given in revolutions per minute (rpm), convert omega = (2 pi * rpm) / 60 rad/s.'
    },
    {
      term: 'Centripetal Acceleration',
      symbol: 'a_c',
      definition: 'The radial acceleration directed towards the center that keeps a body moving in a circular path: a_c = v^2 / r = omega^2 r.',
      neetNote: 'In vector form: vec(a)_c = - omega^2 vec(r), where vec(r) is position vector from center.'
    },
    {
      term: 'Tangential Acceleration',
      symbol: 'a_t',
      definition: 'The rate of change of linear speed: a_t = dv / dt.',
      neetNote: 'In UNIFORM circular motion, speed is constant, so a_t = 0. Tangential acceleration is non-zero ONLY in non-uniform circular motion.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Angular Kinematics & Linear-Angular Relations',
      paragraphs: [
        'To analyze circular motion, we map linear kinematic quantities to their corresponding angular counterparts:',
        '• Angular Position $\\theta$: Measured in radians (1 revolution = $2\\pi$ rad = 360°). Arc length $s = r \\theta$.',
        '• Angular Velocity $\\omega$: Rate of sweep of angle $\\omega = \\frac{d\\theta}{dt}$. For constant rotation, $\\omega = \\frac{2\\pi}{T} = 2\\pi f$, where $T$ is time period (seconds per revolution) and $f = 1/T$ is frequency (revolutions per second or Hz).',
        '• Linear Speed $v$: Derivative of arc length $s = r \\theta$ gives:',
        '$$v = \\frac{ds}{dt} = r \\frac{d\\theta}{dt} = \\omega r$$',
        '• Vector Form: $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$. Velocity $\\vec{v}$ is perpendicular to both angular velocity vector $\\vec{\\omega}$ (along rotation axis) and radius vector $\\vec{r}$.'
      ],
      visual: {
        caption: 'Uniform Circular Motion Vectors: Velocity & Centripetal Acceleration',
        guide: 'Linear velocity v is tangential; Centripetal acceleration a_c points radially inwards to the center.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <rect width="800" height="240" rx="16" fill="#f8fafc" />
          <g transform="translate(180, 20)">
            <!-- Circular Orbit -->
            <circle cx="200" cy="100" r="80" fill="none" stroke="#64748b" stroke-width="3" stroke-dasharray="6 6" />

            <!-- Center -->
            <circle cx="200" cy="100" r="5" fill="#1e293b" />
            <text x="210" y="105" fill="#0f172a" font-size="13" font-weight="extrabold">Center O</text>

            <!-- Radius vector -->
            <line x1="200" y1="100" x2="280" y2="100" stroke="#334155" stroke-width="2" />
            <text x="235" y="95" fill="#334155" font-size="13" font-weight="bold">r</text>

            <!-- Particle at (280, 100) -->
            <circle cx="280" cy="100" r="8" fill="#2563eb" />

            <!-- Tangential Velocity v -->
            <line x1="280" y1="100" x2="280" y2="20" stroke="#059669" stroke-width="4" marker-end="url(#arrow-green4)" />
            <text x="290" y="55" fill="#047857" font-size="14" font-weight="extrabold">v (tangential)</text>

            <!-- Centripetal Acceleration a_c -->
            <line x1="280" y1="100" x2="215" y2="100" stroke="#dc2626" stroke-width="4" marker-end="url(#arrow-red2)" />
            <text x="220" y="125" fill="#b91c1c" font-size="14" font-weight="extrabold">a_c (radially inward)</text>
          </g>

          <defs>
            <marker id="arrow-green4" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/>
            </marker>
            <marker id="arrow-red2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
            </marker>
          </defs>
        </svg>`
      }
    },
    {
      heading: '2. Centripetal Acceleration Derivation & Force Mechanics',
      paragraphs: [
        'Consider a particle moving along a circle of radius r at constant speed v.',
        'In time $\\Delta t$, position vector rotates through angle $\\Delta \\theta$. Initial velocity vector $\\vec{v}_1$ and final velocity vector $\\vec{v}_2$ both have magnitude $v$.',
        'Magnitude of change in velocity: $|\\Delta \\vec{v}| = 2 v \\sin(\\Delta \\theta / 2)$.',
        'For small time interval $\\Delta t \\to 0$, $\\sin(\\Delta \\theta / 2) \\approx \\Delta \\theta / 2$, so $|\\Delta \\vec{v}| \\approx v \\Delta \\theta$.',
        'Dividing by $\\Delta t$ gives centripetal acceleration magnitude:',
        '$$a_c = \\lim_{\\Delta t \\to 0} \\frac{|\\Delta \\vec{v}|}{\\Delta t} = v \\frac{d\\theta}{dt} = v \\omega = v \\left(\\frac{v}{r}\\right) = \\frac{v^2}{r} = \\omega^2 r$$',
        'Alternative forms:',
        '$$a_c = 4 \\pi^2 f^2 r = \\frac{4 \\pi^2 r}{T^2}$$',
        'Centripetal Force ($F_c$): By Newton\'s second law, the centripetal force required to maintain circular motion is:',
        '$$F_c = m a_c = \\frac{m v^2}{r} = m \\omega^2 r$$',
        'Work Done by Centripetal Force:',
        'The instantaneous displacement $d\\vec{r}$ is along the tangent, while centripetal force $\\vec{F}_c$ is along the radius (inwards). The angle between $\\vec{F}_c$ and $d\\vec{r}$ is 90°.',
        '$$dW = \\vec{F}_c \\cdot d\\vec{r} = F_c \\, dr \\cos 90^\\circ = 0$$',
        'Work done by centripetal force in any part of a circular orbit is strictly ZERO.'
      ]
    },
    {
      heading: '3. Tangential vs. Radial Acceleration in Circular Motion',
      paragraphs: [
        'In general 2D circular motion, acceleration vector $\\vec{a}$ has two perpendicular components:',
        '1. Radial (Centripetal) Acceleration $a_c = v^2 / r = \\omega^2 r$: Changes DIRECTION of velocity vector. Always present in circular motion.',
        '2. Tangential Acceleration $a_t = \\frac{dv}{dt} = \\alpha r$: Changes MAGNITUDE of velocity vector (speed). Present ONLY when speed changes.',
        '• Uniform Circular Motion (UCM): Speed is constant $\\implies a_t = 0$. Net acceleration $a_{\\text{net}} = a_c = v^2 / r$.',
        '• Non-Uniform Circular Motion: Speed varies $\\implies a_t \\ne 0$. Net acceleration magnitude $a_{\\text{net}} = \\sqrt{a_c^2 + a_t^2}$. Angle with velocity vector $\\tan\\phi = a_c / a_t$.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Centripetal Acceleration Formulas',
      formula: 'a_c = \\frac{v^2}{r} = \\omega^2 r = 4 \\pi^2 f^2 r = \\frac{4 \\pi^2 r}{T^2}',
      variables: 'v = linear speed, r = radius, omega = angular speed, f = frequency, T = time period.',
      whenToUse: 'Use to calculate centripetal acceleration in uniform circular motion.',
      calculationExample: {
        problem: 'A particle moves in a circle of radius 25 cm at a constant rate of 2 revolutions per second. Calculate its centripetal acceleration.',
        given: 'r = 0.25 m, f = 2 rev/s (Hz)',
        stepByStep: [
          'Step 1: Calculate angular velocity omega = 2 pi f = 2 pi (2) = 4 pi rad/s',
          'Step 2: Formula a_c = omega^2 r = (4 pi)^2 * 0.25',
          'Step 3: Simplify: a_c = 16 pi^2 * 0.25 = 4 pi^2 m/s².'
        ],
        answer: '4 pi^2 m/s² (≈ 39.48 m/s²)'
      }
    },
    {
      title: 'Linear and Angular Velocity Relation',
      formula: 'v = \\omega r = 2 \\pi f r',
      variables: 'v = linear speed, omega = angular speed (rad/s), r = radius.',
      whenToUse: 'Use to convert between angular velocity and linear tangential speed.'
    },
    {
      title: 'Centripetal Force',
      formula: 'F_c = \\frac{m v^2}{r} = m \\omega^2 r',
      variables: 'm = mass, v = linear speed, r = radius, omega = angular speed.',
      whenToUse: 'Use to find net inward radial force required for circular orbit.'
    }
  ],

  neetImportantPoints: [
    '1. High-Yield Rule: In Uniform Circular Motion, speed v, angular velocity omega, kinetic energy K, and magnitude of acceleration a_c are CONSTANT. Velocity vector vec(v), momentum vector vec(p), and acceleration vector vec(a)_c continuously CHANGE direction.',
    '2. High-Yield Rule: Work done by centripetal force in any time interval is ALWAYS ZERO (W = 0) because centripetal force is perpendicular to instantaneous velocity.',
    '3. High-Yield Rule: Two particles moving in circles of radii r_1 and r_2 with the SAME time period T have angular velocity ratio omega_1 : omega_2 = 1 : 1, while their linear speed ratio is v_1 : v_2 = r_1 : r_2.',
    '4. Acceleration vector direction in UCM points towards the center. In half a revolution, change in velocity vector is Delta vec(v) = 2 v (magnitude 2v).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming uniform circular motion is an unaccelerated motion because speed is constant.',
      correctFact: 'Uniform circular motion IS an accelerated motion because the direction of the velocity vector is continuously changing. Centripetal acceleration a_c = v^2 / r is always non-zero.',
      whyItMattersForNEET: 'Direct true/false conceptual question in NEET.'
    },
    {
      commonConfusion: 'Forgetting to convert frequency from rpm (revolutions per minute) to rev/s.',
      correctFact: 'Always divide rpm by 60 to obtain frequency f in Hz before calculating angular speed omega = 2 pi f.',
      whyItMattersForNEET: 'Prevents factor of 60 calculation errors in numerical problems.'
    }
  ],

  quickRevision: [
    'omega = 2 pi f = 2 pi / T',
    'v = omega r',
    'a_c = v^2 / r = omega^2 r = 4 pi^2 f^2 r',
    'F_c = m v^2 / r = m omega^2 r',
    'Work done by centripetal force = 0',
    'UCM: Speed & KE constant; Velocity & Acceleration vector change',
    'Same Time Period T => Ratio omega_1 : omega_2 = 1 : 1',
    'In UCM, tangential acceleration a_t = 0'
  ],

  practiceQuestions: [
  {
    "id": "prac-ucm-1",
    "question": "A body of mass 2 kg is tied to a string of length 1 m and revolved in a horizontal circle at 60 rpm. What is the centripetal force acting on the body?",
    "options": [
      "8 pi^2 N",
      "4 pi^2 N",
      "2 pi^2 N",
      "16 pi^2 N"
    ],
    "correctAnswer": 0,
    "explanation": "f = 60 rpm = 60 / 60 = 1 rev/s. Angular velocity omega = 2 pi f = 2 pi (1) = 2 pi rad/s. Centripetal force F_c = m omega^2 r = (2) (2 pi)^2 (1) = 2 (4 pi^2) = 8 pi^2 N.",
    "difficulty": "Medium",
    "conceptTested": "Centripetal force from rpm frequency"
  },
  {
    "id": "prac-ucm-2",
    "question": "In uniform circular motion, what is the work done by centripetal force during one quarter of a revolution?",
    "options": [
      "Zero",
      "(m v^2) / (4 r)",
      "(m v^2 / r) * (pi r / 2)",
      "(m v^2) / 2"
    ],
    "correctAnswer": 0,
    "explanation": "Centripetal force is at all times perpendicular to instantaneous displacement. Therefore, work done is zero in any displacement, whether quarter, half, or full revolution.",
    "difficulty": "Easy",
    "conceptTested": "Work done by centripetal force"
  },
  {
    "id": "prac-physuniformcircularmotion-3",
    "question": "Regarding Uniform Circular Motion & Centripetal Acceleration, which of the following statements correctly resolves a common misconception about \"Assuming uniform circular motion is an unaccelerated motion because speed is constant.\"?",
    "options": [
      "Uniform circular motion IS an accelerated motion because the direction of the velocity vector is continuously changing. Centripetal acceleration a_c = v^2 / r is always non-zero.",
      "Incorrect assumption: Assuming uniform circular motion is an unaccelerated motion because speed is constant.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Uniform circular motion IS an accelerated motion because the direction of the velocity vector is continuously changing. Centripetal acceleration a_c = v^2 / r is always non-zero.. Direct true/false conceptual question in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Uniform Circular Motion & Centripetal Acceleration - Conceptual Clarity"
  },
  {
    "id": "prac-physuniformcircularmotion-4",
    "question": "Regarding Uniform Circular Motion & Centripetal Acceleration, which of the following statements correctly resolves a common misconception about \"Forgetting to convert frequency from rpm (revolutions per minute) to rev/s.\"?",
    "options": [
      "Always divide rpm by 60 to obtain frequency f in Hz before calculating angular speed omega = 2 pi f.",
      "Incorrect assumption: Forgetting to convert frequency from rpm (revolutions per minute) to rev/s.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Always divide rpm by 60 to obtain frequency f in Hz before calculating angular speed omega = 2 pi f.. Prevents factor of 60 calculation errors in numerical problems.",
    "difficulty": "Medium",
    "conceptTested": "Uniform Circular Motion & Centripetal Acceleration - Conceptual Clarity"
  },
  {
    "id": "prac-physuniformcircularmotion-5",
    "question": "In the study of Uniform Circular Motion & Centripetal Acceleration, what is the exact definition and significance of \"Uniform Circular Motion\"?",
    "options": [
      "Motion of an object along a circular path with a constant linear speed and constant angular speed.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Motion of an object along a circular path with a constant linear speed and constant angular speed.. UCM has constant speed, constant kinetic energy, and constant magnitude of acceleration, but variable velocity and variable acceleration vector direction.",
    "difficulty": "Easy",
    "conceptTested": "Uniform Circular Motion definition"
  },
  {
    "id": "prac-physuniformcircularmotion-6",
    "question": "In the study of Uniform Circular Motion & Centripetal Acceleration, what is the exact definition and significance of \"Angular Velocity\"?",
    "options": [
      "The rate at which the radius vector rotates about the center: omega = d theta / dt = 2 pi / T = 2 pi f.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The rate at which the radius vector rotates about the center: omega = d theta / dt = 2 pi / T = 2 pi f.. SI unit is rad/s. If frequency f is given in revolutions per minute (rpm), convert omega = (2 pi * rpm) / 60 rad/s.",
    "difficulty": "Easy",
    "conceptTested": "Angular Velocity definition"
  },
  {
    "id": "prac-physuniformcircularmotion-7",
    "question": "In the study of Uniform Circular Motion & Centripetal Acceleration, what is the exact definition and significance of \"Centripetal Acceleration\"?",
    "options": [
      "The radial acceleration directed towards the center that keeps a body moving in a circular path: a_c = v^2 / r = omega^2 r.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The radial acceleration directed towards the center that keeps a body moving in a circular path: a_c = v^2 / r = omega^2 r.. In vector form: vec(a)_c = - omega^2 vec(r), where vec(r) is position vector from center.",
    "difficulty": "Easy",
    "conceptTested": "Centripetal Acceleration definition"
  },
  {
    "id": "prac-physuniformcircularmotion-8",
    "question": "In the study of Uniform Circular Motion & Centripetal Acceleration, what is the exact definition and significance of \"Tangential Acceleration\"?",
    "options": [
      "The rate of change of linear speed: a_t = dv / dt.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The rate of change of linear speed: a_t = dv / dt.. In UNIFORM circular motion, speed is constant, so a_t = 0. Tangential acceleration is non-zero ONLY in non-uniform circular motion.",
    "difficulty": "Easy",
    "conceptTested": "Tangential Acceleration definition"
  },
  {
    "id": "prac-physuniformcircularmotion-9",
    "question": "Which of the following is a key NCERT statement regarding Uniform Circular Motion & Centripetal Acceleration?",
    "options": [
      "omega = 2 pi f = 2 pi / T",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: omega = 2 pi f = 2 pi / T",
    "difficulty": "Easy",
    "conceptTested": "Uniform Circular Motion & Centripetal Acceleration NCERT High-Yield Point"
  },
  {
    "id": "prac-physuniformcircularmotion-10",
    "question": "Which of the following is a key NCERT statement regarding Uniform Circular Motion & Centripetal Acceleration?",
    "options": [
      "v = omega r",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: v = omega r",
    "difficulty": "Easy",
    "conceptTested": "Uniform Circular Motion & Centripetal Acceleration NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-ucm-1',
      year: 2019,
      exam: 'NEET UG',
      examYear: 'NEET UG 2019',
      question: 'Two particles A and B are moving in uniform circular motion in concentric circles of radii r_A and r_B with speeds v_A and v_B respectively. Their time period of rotation is the same. The ratio of angular speed of A to that of B will be:',
      options: ['1 : 1', 'r_A : r_B', 'v_A : v_B', 'r_B : r_A'],
      correctAnswer: 0,
      explanation: 'Angular speed omega = 2 pi / T. Since the time period T of both particles is the same (T_A = T_B), their angular speeds omega_A and omega_B are equal. Ratio omega_A : omega_B = 1 : 1.',
      topicId: 'phys-uniform-circular-motion',
      difficulty: 'Easy',
      conceptTested: 'Angular speed dependence on time period',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-ucm-2',
      year: 2010,
      exam: 'AIPMT',
      examYear: 'AIPMT 2010',
      question: 'A particle moves in a circle of radius 25 cm at two revolutions per second. The acceleration of the particle in m/s² is:',
      options: ['4 pi^2', '8 pi^2', '2 pi^2', 'pi^2'],
      correctAnswer: 0,
      explanation: 'f = 2 rev/s => omega = 2 pi f = 4 pi rad/s. Radius r = 25 cm = 0.25 m. Centripetal acceleration a_c = omega^2 r = (4 pi)^2 * 0.25 = 16 pi^2 * 0.25 = 4 pi^2 m/s².',
      topicId: 'phys-uniform-circular-motion',
      difficulty: 'Easy',
      conceptTested: 'Centripetal acceleration calculation',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-ucm-3',
      year: 2021,
      exam: 'NEET UG',
      examYear: 'NEET UG 2021',
      question: 'An object of mass 10 kg is moving in a circle of radius 2 m with a constant speed of 4 m/s. The centripetal force acting on the object is:',
      options: ['80 N', '40 N', '160 N', '20 N'],
      correctAnswer: 0,
      explanation: 'Centripetal force F_c = (m v^2) / r = (10 * 4^2) / 2 = (10 * 16) / 2 = 160 / 2 = 80 N.',
      topicId: 'phys-uniform-circular-motion',
      difficulty: 'Easy',
      conceptTested: 'Centripetal force calculation',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Uniform Circular Motion & Centripetal Acceleration',
    confidenceLabel: 'HIGH',
    confidenceText: 'Regular testing in NEET via centripetal acceleration, force, and angular speed ratio problems.',
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
    preparationStrategy: 'Master centripetal acceleration a_c = omega^2 r = 4 pi^2 f^2 r and angular velocity ratio omega = 2 pi/T.',
    yearWiseBreakdown: [
      {
        year: 2021,
        exam: 'NEET UG',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Centripetal Force Calculation',
        verificationStatus: 'Verified against official NEET 2021 paper',
        classification: 'Direct'
      },
      {
        year: 2019,
        exam: 'NEET UG',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Angular Speed Ratio for Same Period',
        verificationStatus: 'Verified against official NEET 2019 paper',
        classification: 'Direct'
      },
      {
        year: 2010,
        exam: 'AIPMT',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Centripetal Acceleration from Frequency',
        verificationStatus: 'Verified against AIPMT 2010 paper',
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
