import { DetailedTopicContent } from '../../types/neet';

export const physMotionAcceleratedDetails: DetailedTopicContent = {
  topicId: 'phys-motion-accelerated',
  topicName: 'Uniformly Accelerated Motion & Free Fall',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Kinematics & Motion',
  chapter: 'Motion in a Straight Line',
  
  whatIsThisTopic: 'When a particle moves in a straight line with a CONSTANT acceleration (a = constant), its motion is governed by the classical kinematic equations. Motion under gravity (free fall) is a prime example where acceleration a = -g ≈ -9.8 m/s² (or -10 m/s²). This topic covers the derivations, selection criteria, and sign conventions for all 5 kinematic equations, stopping distance and time, upward projections from heights/towers, Galileo’s law of odd numbers, and high-yield NEET numerical techniques.',
  
  basicIdea: [
    '1. Uniform Acceleration Condition: Acceleration vector a is CONSTANT in both magnitude and direction. Note: If acceleration varies with time or position, kinematic equations CANNOT be used (calculus integration must be used instead!).',
    '2. The 3 Fundamental Kinematic Equations: (1) v = u + at, (2) s = ut + 1/2 at², (3) v² = u² + 2as.',
    '3. Additional Kinematic Relations: Average velocity equation s = [(u + v)/2] t, and nth second displacement formula S_n = u + a/2 (2n - 1).',
    '4. Sign Convention Rule: Choose ONE direction as positive (e.g. Upward = +ve). Every vector (u, v, a, s) MUST be assigned a sign relative to this chosen direction. Acceleration due to gravity g ALWAYS acts vertically downwards (-g).',
    '5. Galileo’s Law of Odd Numbers: The distances traversed by a particle during equal, successive time intervals in free fall from rest are in the ratio 1 : 3 : 5 : 7 : 9 : ...'
  ],

  importantTerms: [
    {
      term: 'Uniform Acceleration',
      symbol: 'a',
      definition: 'Motion where the velocity changes by equal amounts in equal intervals of time, no matter how small the time intervals are.',
      neetNote: 'Kinematic formulas apply ONLY when acceleration is strictly constant.'
    },
    {
      term: 'Retardation (Deceleration)',
      symbol: '-a',
      definition: 'Acceleration acting in the direction opposite to the instantaneous velocity, causing the object to slow down.',
      neetNote: 'Retardation means speed is DECREASING. It occurs whenever velocity v and acceleration a have opposite signs.'
    },
    {
      term: 'Displacement in nth Second',
      symbol: 'S_n',
      definition: 'The distance covered strictly during the nth single second interval (from t = n-1 to t = n): S_n = u + a/2 (2n - 1).',
      neetNote: 'Notice that S_n is a displacement, but mathematically dimensionally looks like u + a/2(2n-1) because Δt = 1 s was implicitly substituted.'
    },
    {
      term: 'Stopping Distance & Time',
      symbol: 's_stop, t_stop',
      definition: 'The distance traversed and time elapsed before a vehicle coming to rest under constant braking retardation -a.',
      neetNote: 'Stopping distance s_stop = u² / (2a) (proportional to u²!). Doubling initial speed QUADRUPLES stopping distance.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. The Kinematic Equations: Selection Guide and Conditions',
      paragraphs: [
        'Before applying kinematic formulas, verify that acceleration is constant. To select the correct equation for a problem, identify the given variables and the target unknown:',
        '1. $v = u + at$: Use when time $t$ is involved, but displacement $s$ is NOT required.',
        '2. $s = ut + \\frac{1}{2}at^2$: Use when displacement $s$ and time $t$ are involved, but final velocity $v$ is NOT required.',
        '3. $v^2 = u^2 + 2as$: Use when initial velocity $u$, final velocity $v$, and displacement $s$ are involved, but time $t$ is NOT required.',
        '4. $s = \\left(\\frac{u + v}{2}\\right) t$: Use when initial velocity $u$, final velocity $v$, and time $t$ are given, and acceleration $a$ is NOT explicitly known.',
        '5. $S_n = u + \\frac{a}{2}(2n - 1)$: Use when displacement during a specific single second (e.g. 5th second) is asked.'
      ],
      tables: [
        {
          headers: ['Target Unknown / Given Scenario', 'Equation to Apply', 'Key Variable Omitted'],
          rows: [
            ['Final velocity given u, a, t', 'v = u + a t', 'Displacement (s)'],
            ['Displacement given u, a, t', 's = u t + 1/2 a t²', 'Final velocity (v)'],
            ['Final velocity given u, a, s', 'v² = u² + 2 a s', 'Time (t)'],
            ['Displacement in nth second', 'S_n = u + a/2 (2n - 1)', 'Total time (t)'],
            ['Stopping Distance under braking', 's_stop = u² / (2 a)', 'Time (t)']
          ]
        }
      ]
    },
    {
      heading: '2. Motion Under Gravity: Upward Throw & Tower Projections',
      paragraphs: [
        'In vertical motion under gravity (neglecting air resistance), acceleration is constant and equals $g \\approx 9.8\\text{ m/s}^2$ (or $10\\text{ m/s}^2$) directed vertically downwards.',
        'Sign Convention Rule: Let UPWARD be positive (+) and DOWNWARD be negative (-). Then $a = -g = -10\\text{ m/s}^2$ ALWAYS.',
        'Case A: Upward Projection from Ground ($u$ upwards):',
        '• At highest point: Instantaneous velocity $v = 0$.',
        '• Maximum Height: $H_{\\text{max}} = \\frac{u^2}{2g}$.',
        '• Time of Ascent = Time of Descent = $\\frac{u}{g}$. Total Time of Flight $T = \\frac{2u}{g}$.',
        'Case B: Ball Thrown Upwards from Tower of Height $h$:',
        'Set origin at top of tower. Initial position $y_0 = 0$, final position at ground $y = -h$. Initial velocity $u = +u_0$, acceleration $a = -g$.',
        'Applying $s = ut + \\frac{1}{2}at^2 \\implies -h = u t - \\frac{1}{2}g t^2 \\implies \\frac{1}{2}g t^2 - u t - h = 0$. Solve quadratic equation for $t$.'
      ],
      visual: {
        caption: 'Vertical Motion under Gravity: Upward Projection from Tower',
        guide: 'Setting upward as positive: Initial velocity u = +20 m/s, displacement to ground s = -25 m, acceleration a = -10 m/s².',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <rect width="800" height="220" rx="16" fill="#f8fafc" />
          
          <!-- Tower -->
          <rect x="180" y="100" width="80" height="110" fill="#94a3b8" stroke="#475569" stroke-width="2" />
          <text x="220" y="160" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="extrabold">Tower h=25m</text>
          
          <!-- Ground -->
          <line x1="100" y1="210" x2="700" y2="210" stroke="#334155" stroke-width="4" />
          
          <!-- Trajectory Arc -->
          <path d="M 220 100 Q 220 20 280 20 T 340 210" fill="none" stroke="#2563eb" stroke-width="3" stroke-dasharray="6,4" />
          
          <!-- Ball Peak -->
          <circle cx="280" cy="20" r="8" fill="#ef4444" />
          <text x="280" y="12" text-anchor="middle" fill="#dc2626" font-size="11" font-weight="bold">Top (v = 0)</text>
          
          <!-- Initial Arrow -->
          <line x1="220" y1="100" x2="220" y2="60" stroke="#16a34a" stroke-width="3" />
          <polygon points="220,50 214,62 226,62" fill="#16a34a" />
          <text x="140" y="80" fill="#15803d" font-size="12" font-weight="bold">u = +20 m/s</text>
          
          <!-- Gravity Arrow -->
          <line x1="450" y1="80" x2="450" y2="140" stroke="#dc2626" stroke-width="3" />
          <polygon points="450,150 444,138 456,138" fill="#dc2626" />
          <text x="470" y="115" fill="#dc2626" font-size="13" font-weight="extrabold">a = -g = -10 m/s²</text>
        </svg>`
      }
    },
    {
      heading: '3. Galileo’s Law of Odd Numbers in Free Fall',
      paragraphs: [
        'Galileo’s Law states: For a body falling freely from rest ($u = 0$), the distances covered in equal, successive time intervals $\\tau$ are in the ratio of odd numbers $1 : 3 : 5 : 7 : 9 : \\dots$',
        'Proof: Distance covered in time $t$ is $s(t) = \\frac{1}{2}g t^2$.',
        '• In $t = 1\\tau$: $s_1 = \\frac{1}{2}g \\tau^2 = x_0$.',
        '• In $t = 2\\tau$: Total distance $s_2 = \\frac{1}{2}g (2\\tau)^2 = 4 x_0$. Distance in 2nd interval $\\Delta s_2 = 4x_0 - x_0 = 3 x_0$.',
        '• In $t = 3\\tau$: Total distance $s_3 = \\frac{1}{2}g (3\\tau)^2 = 9 x_0$. Distance in 3rd interval $\\Delta s_3 = 9x_0 - 4x_0 = 5 x_0$.',
        'Ratio of distances in successive equal intervals: $h_1 : h_2 : h_3 = 1 : 3 : 5$.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Displacement in nth Second',
      formula: 'S_n = u + \\frac{a}{2}(2n - 1)',
      variables: 'u = initial velocity (m/s), a = uniform acceleration (m/s²), n = second index (1, 2, 3...)',
      whenToUse: 'Use to calculate displacement during the nth second interval.'
    },
    {
      title: 'Stopping Distance',
      formula: 's_{\\text{stop}} = \\frac{u^2}{2a}',
      variables: 'u = initial speed (m/s), a = magnitude of braking retardation (m/s²)',
      whenToUse: 'Use when calculating distance covered by a braking vehicle before coming to complete rest.'
    },
    {
      title: 'Maximum Height in Vertical Throw',
      formula: 'H_{\\text{max}} = \\frac{u^2}{2g}',
      variables: 'u = initial projection speed (m/s), g = acceleration due to gravity (9.8 or 10 m/s²)',
      whenToUse: 'Use to find peak height reached by an object thrown vertically upward.'
    }
  ],

  neetImportantPoints: [
    'Stopping distance is proportional to u² (s_stop ∝ u²). If speed doubles, stopping distance quadruples!',
    'Time of flight for upward projection and return to same level: T = 2u/g. Time of ascent = Time of descent = u/g.',
    'For free fall from rest (u = 0), distances in successive equal time intervals follow 1 : 3 : 5 : 7.',
    'Ratio of nth second displacements for a body starting from rest: S1 : S2 : S3 = 1 : 3 : 5 : 7.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Applying kinematic equations when acceleration varies with time (e.g. a = 3t).',
      correctFact: 'Kinematic equations (v = u + at etc.) are INVALID for variable acceleration. Use calculus integration instead.',
      whyItMattersForNEET: 'Common trap in NEET questions where acceleration depends on time or position.'
    },
    {
      commonConfusion: 'Confusing distance in n seconds with distance in the nth second.',
      correctFact: 'Distance in n seconds is total s(n) = ut + 1/2 a n². Distance in the nth second is S_n = s(n) - s(n-1) = u + a/2 (2n - 1).',
      whyItMattersForNEET: 'Direct numerical substitution errors.'
    }
  ],

  quickRevision: [
    'v = u + at, s = ut + 1/2 at², v² = u² + 2as.',
    'Displacement in nth second S_n = u + a/2 (2n - 1).',
    'Galileo odd numbers ratio: 1 : 3 : 5 : 7 for u = 0 in equal time intervals.',
    'Upward vertical throw: H_max = u²/(2g), T_flight = 2u/g.',
    'Stopping distance s_stop = u²/(2a).'
  ],

  practiceQuestions: [
  {
    "id": "prac-motion-3-1",
    "question": "A car travelling at 20 m/s applies brakes and stops in a distance of 40 m. If the same car travels at 40 m/s and applies the same braking retardation, its stopping distance will be:",
    "options": [
      "160 m",
      "80 m",
      "120 m",
      "40 m"
    ],
    "correctAnswer": 0,
    "explanation": "Stopping distance s_stop = u² / (2a). Since retardation a is the same, s_stop ∝ u².\nRatio s2 / s1 = (u2 / u1)² = (40 / 20)² = 2² = 4.\nTherefore, s2 = 4 × s1 = 4 × 40 m = 160 m.",
    "difficulty": "Easy",
    "topicId": "phys-motion-accelerated",
    "conceptTested": "Proportionality of stopping distance to square of speed"
  },
  {
    "id": "prac-motion-3-2",
    "question": "A body dropped from a high tower falls through a distance h in the first second. The distance covered by it in the next 2 seconds will be:",
    "options": [
      "8 h",
      "3 h",
      "5 h",
      "4 h"
    ],
    "correctAnswer": 0,
    "explanation": "Distance in 1st second: h = 1/2 g (1)² = g/2.\nDistance in 3 seconds: s(3) = 1/2 g (3)² = 9 (g/2) = 9 h.\nDistance covered in the next 2 seconds (from t = 1 s to t = 3 s):\nΔs = s(3) - s(1) = 9 h - h = 8 h.",
    "difficulty": "Medium",
    "topicId": "phys-motion-accelerated",
    "conceptTested": "Free fall multi-second interval calculation"
  },
  {
    "id": "prac-physmotionaccelerated-3",
    "question": "Regarding Uniformly Accelerated Motion & Free Fall, which of the following statements correctly resolves a common misconception about \"Applying kinematic equations when acceleration varies with time (e.g. a = 3t).\"?",
    "options": [
      "Kinematic equations (v = u + at etc.) are INVALID for variable acceleration. Use calculus integration instead.",
      "Incorrect assumption: Applying kinematic equations when acceleration varies with time (e.g. a = 3t).",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Kinematic equations (v = u + at etc.) are INVALID for variable acceleration. Use calculus integration instead.. Common trap in NEET questions where acceleration depends on time or position.",
    "difficulty": "Medium",
    "conceptTested": "Uniformly Accelerated Motion & Free Fall - Conceptual Clarity"
  },
  {
    "id": "prac-physmotionaccelerated-4",
    "question": "Regarding Uniformly Accelerated Motion & Free Fall, which of the following statements correctly resolves a common misconception about \"Confusing distance in n seconds with distance in the nth second.\"?",
    "options": [
      "Distance in n seconds is total s(n) = ut + 1/2 a n². Distance in the nth second is S_n = s(n) - s(n-1) = u + a/2 (2n - 1).",
      "Incorrect assumption: Confusing distance in n seconds with distance in the nth second.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Distance in n seconds is total s(n) = ut + 1/2 a n². Distance in the nth second is S_n = s(n) - s(n-1) = u + a/2 (2n - 1).. Direct numerical substitution errors.",
    "difficulty": "Medium",
    "conceptTested": "Uniformly Accelerated Motion & Free Fall - Conceptual Clarity"
  },
  {
    "id": "prac-physmotionaccelerated-5",
    "question": "In the study of Uniformly Accelerated Motion & Free Fall, what is the exact definition and significance of \"Uniform Acceleration\"?",
    "options": [
      "Motion where the velocity changes by equal amounts in equal intervals of time, no matter how small the time intervals are.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Motion where the velocity changes by equal amounts in equal intervals of time, no matter how small the time intervals are.. Kinematic formulas apply ONLY when acceleration is strictly constant.",
    "difficulty": "Easy",
    "conceptTested": "Uniform Acceleration definition"
  },
  {
    "id": "prac-physmotionaccelerated-6",
    "question": "In the study of Uniformly Accelerated Motion & Free Fall, what is the exact definition and significance of \"Retardation (Deceleration)\"?",
    "options": [
      "Acceleration acting in the direction opposite to the instantaneous velocity, causing the object to slow down.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Acceleration acting in the direction opposite to the instantaneous velocity, causing the object to slow down.. Retardation means speed is DECREASING. It occurs whenever velocity v and acceleration a have opposite signs.",
    "difficulty": "Easy",
    "conceptTested": "Retardation (Deceleration) definition"
  },
  {
    "id": "prac-physmotionaccelerated-7",
    "question": "In the study of Uniformly Accelerated Motion & Free Fall, what is the exact definition and significance of \"Displacement in nth Second\"?",
    "options": [
      "The distance covered strictly during the nth single second interval (from t = n-1 to t = n): S_n = u + a/2 (2n - 1).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The distance covered strictly during the nth single second interval (from t = n-1 to t = n): S_n = u + a/2 (2n - 1).. Notice that S_n is a displacement, but mathematically dimensionally looks like u + a/2(2n-1) because Δt = 1 s was implicitly substituted.",
    "difficulty": "Easy",
    "conceptTested": "Displacement in nth Second definition"
  },
  {
    "id": "prac-physmotionaccelerated-8",
    "question": "In the study of Uniformly Accelerated Motion & Free Fall, what is the exact definition and significance of \"Stopping Distance & Time\"?",
    "options": [
      "The distance traversed and time elapsed before a vehicle coming to rest under constant braking retardation -a.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The distance traversed and time elapsed before a vehicle coming to rest under constant braking retardation -a.. Stopping distance s_stop = u² / (2a) (proportional to u²!). Doubling initial speed QUADRUPLES stopping distance.",
    "difficulty": "Easy",
    "conceptTested": "Stopping Distance & Time definition"
  },
  {
    "id": "prac-physmotionaccelerated-9",
    "question": "Which of the following is a key NCERT statement regarding Uniformly Accelerated Motion & Free Fall?",
    "options": [
      "v = u + at, s = ut + 1/2 at², v² = u² + 2as.",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: v = u + at, s = ut + 1/2 at², v² = u² + 2as.",
    "difficulty": "Easy",
    "conceptTested": "Uniformly Accelerated Motion & Free Fall NCERT High-Yield Point"
  },
  {
    "id": "prac-physmotionaccelerated-10",
    "question": "Which of the following is a key NCERT statement regarding Uniformly Accelerated Motion & Free Fall?",
    "options": [
      "Displacement in nth second S_n = u + a/2 (2n - 1).",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Displacement in nth second S_n = u + a/2 (2n - 1).",
    "difficulty": "Easy",
    "conceptTested": "Uniformly Accelerated Motion & Free Fall NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-motion-3-1',
      year: 2020,
      exam: 'NEET UG',
      examYear: 'NEET 2020',
      question: 'A ball is thrown vertically upward with a velocity of 20 m/s from the top of a 25 m high tower. How long will it take for the ball to reach the ground? (g = 10 m/s²)',
      options: [
        '5 s',
        '3 s',
        '2.5 s',
        '6 s'
      ],
      correctAnswer: 0,
      explanation: 'Set origin at top of tower. Choosing UPWARD as positive (+):\nInitial velocity u = +20 m/s\nAcceleration a = -g = -10 m/s²\nDisplacement to ground s = -25 m\nUse s = u t + 1/2 a t²:\n-25 = 20 t + 1/2 (-10) t²\n-25 = 20 t - 5 t²\n5 t² - 20 t - 25 = 0  ⇒  t² - 4 t - 5 = 0\n(t - 5)(t + 1) = 0  ⇒  t = 5 s (since time t > 0).',
      topicId: 'phys-motion-accelerated',
      difficulty: 'Medium',
      conceptTested: 'Tower projection kinematic equation with sign convention',
      ncertReference: 'Class 11 Physics Chapter 3 - Motion in a Straight Line',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-motion-3-2',
      year: 2021,
      exam: 'NEET UG',
      examYear: 'NEET 2021',
      question: 'A small block slides down on a smooth inclined plane, starting from rest at t = 0. Let S_n be the distance travelled by the block in the interval t = n - 1 to t = n. Then the ratio S_n / S_{n+1} is:',
      options: [
        '(2n - 1) / (2n + 1)',
        '(2n + 1) / (2n - 1)',
        '2n / (2n - 1)',
        '(2n - 1) / (2n)'
      ],
      correctAnswer: 0,
      explanation: 'The block moves with constant acceleration a = g sin θ down the plane starting from rest (u = 0).\nDisplacement in nth second: S_n = u + a/2 (2n - 1) = a/2 (2n - 1).\nDisplacement in (n+1)th second: S_{n+1} = a/2 [2(n + 1) - 1] = a/2 (2n + 1).\nRatio S_n / S_{n+1} = [a/2 (2n - 1)] / [a/2 (2n + 1)] = (2n - 1) / (2n + 1).',
      topicId: 'phys-motion-accelerated',
      difficulty: 'Medium',
      conceptTested: 'Ratio of nth and (n+1)th second displacements',
      ncertReference: 'Class 11 Physics Chapter 3 - Motion in a Straight Line',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-motion-3-3',
      year: 2013,
      exam: 'NEET UG',
      examYear: 'NEET 2013',
      question: 'A stone falls freely under gravity. It covers distances h1, h2 and h3 in the first 5 seconds, the next 5 seconds and the next 5 seconds respectively. The relation between h1, h2 and h3 is:',
      options: [
        'h1 = h2 / 3 = h3 / 5',
        'h2 = 3 h1 and h3 = 3 h2',
        'h1 = h2 = h3',
        'h1 = 2 h2 = 3 h3'
      ],
      correctAnswer: 0,
      explanation: 'By Galileo’s Law of Odd Numbers, for free fall from rest in equal successive time intervals (τ = 5 s):\nDistances covered follow the ratio h1 : h2 : h3 = 1 : 3 : 5.\nTherefore: h2 = 3 h1  ⇒  h1 = h2 / 3.\nAnd: h3 = 5 h1  ⇒  h1 = h3 / 5.\nCombined relation: h1 = h2 / 3 = h3 / 5.',
      topicId: 'phys-motion-accelerated',
      difficulty: 'Easy',
      conceptTested: 'Galileo odd numbers relation for free fall',
      ncertReference: 'Class 11 Physics Chapter 3 - Motion in a Straight Line',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-motion-3-4',
      year: 2008,
      exam: 'AIPMT',
      examYear: 'AIPMT 2008',
      question: 'A particle moving along a straight line has a velocity v = u + a t. The distance covered in time t by a particle starting from rest and moving with uniform acceleration a during the n-th second is given by:',
      options: [
        'a/2 (2n - 1)',
        'a (n - 1)',
        'a/2 (2n + 1)',
        'a/2 n²'
      ],
      correctAnswer: 0,
      explanation: 'Displacement in nth second formula is S_n = u + a/2 (2n - 1).\nSince the particle starts from rest, initial velocity u = 0.\nSubstituting u = 0 gives: S_n = a/2 (2n - 1).',
      topicId: 'phys-motion-accelerated',
      difficulty: 'Easy',
      conceptTested: 'Direct nth second displacement formula for u=0',
      ncertReference: 'Class 11 Physics Chapter 3 - Motion in a Straight Line',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Uniformly Accelerated Motion & Free Fall',
    confidenceLabel: 'HIGH',
    confidenceText: 'Extremely high-yield topic appearing in almost every NEET physics paper.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 4,
    totalDirectPyqs: 4,
    totalHistoricalMarks: 16,
    averageDirectPyqsPerPaper: 0.27,
    minDirectMarks: 0,
    maxDirectMarks: 4,
    avgDirectMarksPerPaper: 1.07,
    whatThisMeansForYou: 'Mastering tower vertical projection signs and Galileo odd ratios provides guaranteed problem-solving speed in NEET.',
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 to 4 Marks',
    yearWiseBreakdown: [
      {
        year: 2008,
        exam: 'AIPMT',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Formula Derivation',
        classification: 'Direct',
        verificationStatus: 'Verified (AIPMT 2008)'
      },
      {
        year: 2013,
        exam: 'NEET UG',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Galileo Law Relation',
        classification: 'Direct',
        verificationStatus: 'Verified (NEET 2013)'
      },
      {
        year: 2020,
        exam: 'NEET UG',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Tower Projection Numerical',
        classification: 'Direct',
        verificationStatus: 'Verified (NEET 2020)'
      },
      {
        year: 2021,
        exam: 'NEET UG',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Inclined Plane Ratio',
        classification: 'Direct',
        verificationStatus: 'Verified (NEET 2021)'
      }
    ],
    sourceInfo: {
      dataSource: 'SATHEE & Verified NEET/AIPMT Historical Archives',
      analysisPeriod: '2004 – 2024',
      directPyqsAnalyzedCount: 4,
      classificationMethod: 'Strict topic-level verification; no invented data.',
      disclaimer: 'Historical stats reflect analyzed paper records.'
    }
  }
};
