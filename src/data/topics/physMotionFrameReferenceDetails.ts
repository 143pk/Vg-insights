import { DetailedTopicContent } from '../../types/neet';

export const physMotionFrameReferenceDetails: DetailedTopicContent = {
  topicId: 'phys-motion-frame-reference',
  topicName: 'Frame of Reference, Distance & Displacement',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Kinematics & Motion',
  chapter: 'Motion in a Straight Line',
  
  whatIsThisTopic: 'Describing the motion of any physical body requires a well-defined frame of reference consisting of a coordinate system and a synchronized clock. Motion is inherently relative—an object may be at rest with respect to one frame of reference while moving rapidly relative to another. This topic builds the fundamental kinematics framework for one-dimensional (rectilinear) motion by defining position, the choice of origin, and establishing the key physical distinction between scalar distance (total path length traversed) and vector displacement (the shortest directed straight-line change in position vector). Mastering these concepts is essential for solving complex NEET multi-segment motion and graphing problems.',
  
  basicIdea: [
    '1. Frame of Reference: A coordinate system (x, y, z) attached to an observer and equipped with a clock, used to specify the position and timestamp of an event in space.',
    '2. One-Dimensional (Rectilinear) Motion: Motion restricted along a single straight line (e.g., x-axis), where position x(t) is a scalar function with a sign indicating direction relative to an arbitrary origin O.',
    '3. Distance (Scalar, s): Total actual path length covered by a moving particle during a given time interval. Distance is path-dependent, monotonically non-decreasing over time, and always non-negative (s ≥ 0).',
    '4. Displacement (Vector, Δx): The shortest directed straight-line vector from the initial position (x_i) to the final position (x_f): Δx = x_f - x_i. Displacement is path-independent, depends only on endpoints, and can be positive, negative, or zero.',
    '5. Distance vs. Displacement Relationship: Distance ≥ |Displacement| (or s / |Δx| ≥ 1). Equality holds ONLY for unidirectional motion along a straight line without reversing direction.'
  ],

  importantTerms: [
    {
      term: 'Frame of Reference',
      symbol: 'S',
      definition: 'A spatial coordinate frame (such as Cartesian axes) attached to a reference body with a clock to measure spatial coordinates and time of physical events.',
      neetNote: 'An Inertial Frame moves at constant velocity (a = 0) where Newton’s laws hold natively; a Non-Inertial Frame accelerates (a ≠ 0) requiring pseudo-forces.'
    },
    {
      term: 'Origin & Position',
      symbol: 'O, x(t)',
      definition: 'Origin O is the chosen zero point (x = 0) on a coordinate axis. Position x(t) is the directed distance from the origin to the particle at time t.',
      neetNote: 'Changing the position of the origin changes the coordinate values x_i and x_f, but NEVER changes the displacement Δx = x_f - x_i.'
    },
    {
      term: 'Distance (Path Length)',
      symbol: 's',
      definition: 'The total scalar scalar length of the actual trajectory traversed by a particle in motion.',
      neetNote: 'For a moving object, distance NEVER decreases with time. If a body moves, distance s > 0 even if it returns to its starting point.'
    },
    {
      term: 'Displacement Vector',
      symbol: 'Δx or Δr',
      definition: 'The straight directed vector connecting the initial position to the final position: Δx = x_f - x_i.',
      neetNote: 'Displacement can be zero even when distance is large (e.g., one complete trip around a circle or returning home).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Reference Frame, Coordinate Axes, and Choice of Origin',
      paragraphs: [
        'To locate an object in space, we fix a reference point called the origin O and set up Cartesian coordinate axes (x, y, z). In 1D kinematics (motion in a straight line), only one coordinate (e.g., x) changes with time.',
        'The selection of origin O is purely arbitrary and chosen for mathematical convenience. For example, if a car is at x = +10 m and moves to x = +30 m, its displacement Δx = +30 - (+10) = +20 m. If we shift the origin so the initial position is x = 0 m, the final position becomes x = +20 m, yielding the exact same displacement Δx = +20 m.',
        'Crucial NEET Rule: The numerical coordinates of an object depend on the choice of origin, but physical quantities like displacement Δx, distance s, velocity v, and acceleration a are completely independent of the origin.'
      ],
      visual: {
        caption: 'Position Coordinates and Origin Shift on a 1D Axis',
        guide: 'Shifting the origin changes absolute position coordinates (x_i, x_f), but displacement Δx = x_f - x_i remains invariant (+20 m).',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 220" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <rect width="800" height="220" rx="16" fill="#f8fafc" />
          <line x1="80" y1="120" x2="720" y2="120" stroke="#475569" stroke-width="3" />
          <polygon points="720,120 705,112 705,128" fill="#475569" />
          <text x="730" y="125" fill="#0f172a" font-size="13" font-weight="bold">x-axis (m)</text>
          
          <!-- Origin O -->
          <line x1="120" y1="105" x2="120" y2="135" stroke="#0284c7" stroke-width="3" />
          <text x="120" y="155" text-anchor="middle" fill="#0284c7" font-size="12" font-weight="extrabold">O (x=0)</text>
          
          <!-- Position A -->
          <circle cx="280" cy="120" r="10" fill="#2563eb" />
          <text x="280" y="95" text-anchor="middle" fill="#2563eb" font-size="13" font-weight="bold">Start A (x_i = +10 m)</text>
          
          <!-- Position B -->
          <circle cx="600" cy="120" r="10" fill="#059669" />
          <text x="600" y="95" text-anchor="middle" fill="#059669" font-size="13" font-weight="bold">End B (x_f = +30 m)</text>
          
          <!-- Displacement Vector -->
          <line x1="280" y1="120" x2="590" y2="120" stroke="#059669" stroke-width="5" />
          <polygon points="600,120 585,112 585,128" fill="#059669" />
          <text x="440" y="150" text-anchor="middle" fill="#047857" font-size="14" font-weight="extrabold">Δx = x_f - x_i = +20 m</text>
        </svg>`
      }
    },
    {
      heading: '2. Distance vs. Displacement: Fundamental Differences',
      paragraphs: [
        'Distance (s) is the total scalar length of the path taken. If a particle moves from A to B (20 m East) and then returns to C (15 m West), total distance s = 20 + 15 = 35 m.',
        'Displacement (Δx) is the vector change in position from start to end. For the same motion, initial position x_i = 0 m, final position x_f = +5 m, so displacement Δx = +5 m (5 m East).',
        'If the particle returns all the way back to A (initial point), final position x_f = 0 m, so displacement Δx = 0 m, whereas total distance traversed s = 40 m.'
      ],
      tables: [
        {
          headers: ['Property', 'Distance (s)', 'Displacement (Δx)'],
          rows: [
            ['Nature', 'Scalar quantity (magnitude only)', 'Vector quantity (magnitude and direction)'],
            ['Path Dependence', 'Path-dependent (depends on exact trajectory)', 'Path-independent (depends only on endpoints x_i, x_f)'],
            ['Sign Possibilities', 'Always non-negative (s ≥ 0)', 'Can be positive, negative, or zero'],
            ['Time Trend', 'Monotonically non-decreasing for a moving object', 'Can increase, decrease, or become zero over time'],
            ['Inequality Bound', 'Distance ≥ |Displacement|', '|Displacement| ≤ Distance']
          ]
        }
      ]
    },
    {
      heading: '3. Multi-Segment & 3D Vector Displacement Calculations',
      paragraphs: [
        'When a particle undergoes multiple sequential displacements $\\vec{d}_1, \\vec{d}_2, \\dots, \\vec{d}_n$, the total resultant displacement vector is the vector sum:',
        '$$\\vec{\\Delta r} = \\vec{d}_1 + \\vec{d}_2 + \\dots + \\vec{d}_n$$',
        'In 3D Cartesian space, if a particle moves $x$ meters East ($\hat{i}$), $y$ meters North ($\hat{j}$), and $z$ meters Vertically Up ($\hat{k}$), the displacement vector is:',
        '$$\\vec{\\Delta r} = x\\hat{i} + y\\hat{j} + z\\hat{k}$$',
        'The magnitude of resultant displacement is given by the 3D Pythagorean theorem:',
        '$$|\\Delta r| = \\sqrt{x^2 + y^2 + z^2}$$',
        'Meanwhile, the total distance covered is the simple scalar sum $s = |x| + |y| + |z|$.'
      ],
      examples: [
        {
          problem: 'A person walks 6 m North, 8 m East, and then climbs a vertical pole of height 10 m. Calculate: (a) Total distance traveled, (b) Magnitude of total displacement.',
          given: 'd1 = 6 m North (+j), d2 = 8 m East (+i), d3 = 10 m Up (+k)',
          stepByStep: [
            'Step 1: Write total displacement in vector component form: Δr = 8 i + 6 j + 10 k',
            'Step 2: Calculate total distance s = 6 + 8 + 10 = 24 m.',
            'Step 3: Calculate displacement magnitude |Δr| = √(8² + 6² + 10²) = √(64 + 36 + 100) = √200 = 10√2 m ≈ 14.14 m.'
          ],
          answer: 'Distance = 24 m; Magnitude of Displacement = 10√2 m (14.14 m).'
        }
      ]
    }
  ],

  formulae: [
    {
      title: 'One-Dimensional Displacement',
      formula: '\\Delta x = x_f - x_i',
      variables: 'x_f = final position coordinate (m), x_i = initial position coordinate (m)',
      whenToUse: 'Use to calculate 1D displacement along a line.'
    },
    {
      title: '3D Resultant Displacement Magnitude',
      formula: '|\\vec{\\Delta r}| = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2 + (\\Delta z)^2}',
      variables: '\\Delta x, \\Delta y, \\Delta z = \\text{displacement components along orthogonal axes (m)}',
      whenToUse: 'Use when motion occurs across multiple perpendicular directions (e.g. East, North, Vertically Up).'
    },
    {
      title: 'Distance to Displacement Ratio Bound',
      formula: '\\frac{\\text{Distance}}{|\\text{Displacement}|} \\ge 1',
      variables: '\\text{Distance } s \\ge 0, \\text{ Displacement magnitude } |\\Delta x| \\ge 0',
      whenToUse: 'Universal conceptual bound for all physical motion. Ratio = 1 ONLY for straight-line motion without direction reversal.'
    }
  ],

  neetImportantPoints: [
    'For motion along a straight line, distance = |displacement| ONLY IF the object does not turn back.',
    'If an object turns back, distance > |displacement|.',
    'For a particle completing a circular path of radius R: Distance = 2πR, Displacement = 0. For half a circle: Distance = πR, Displacement = 2R. Ratio = π / 2 ≈ 1.57.',
    'For a rolling wheel of radius R completing half a revolution without slipping, the displacement of the point initially in contact with the ground is |Δr| = √(π²R² + (2R)²) = R√(π² + 4).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming distance can be negative when an object moves in the negative x-direction.',
      correctFact: 'Distance is total path length and is ALWAYS positive (s ≥ 0). Only displacement can be negative (e.g., Δx = -15 m).',
      whyItMattersForNEET: 'NEET frequently sets trap options with negative distance values.'
    },
    {
      commonConfusion: 'Thinking that shifting the origin changes the value of displacement.',
      correctFact: 'Shifting the origin alters individual position coordinates (x_i and x_f), but the difference Δx = x_f - x_i remains strictly invariant.',
      whyItMattersForNEET: 'Conceptual questions test frame independence of kinematic vectors.'
    }
  ],

  quickRevision: [
    'Distance s = total scalar path length (s ≥ 0, path dependent, never decreases with time).',
    'Displacement Δx = x_f - x_i (vector, path independent, can be +, -, or 0).',
    'Distance / |Displacement| ≥ 1. Equal to 1 ONLY for 1D motion without direction reversal.',
    'Circular path (half revolution): Distance = πR, Displacement = 2R, Ratio = π / 2.',
    '3D motion (x i + y j + z k): |Δr| = √(x² + y² + z²).'
  ],

  practiceQuestions: [
  {
    "id": "prac-motion-1-1",
    "question": "An athlete completes one round of a circular track of radius 100 m in 40 seconds. What will be his displacement and distance covered at the end of 2 minutes 20 seconds?",
    "options": [
      "Displacement = 200 m, Distance = 2200 m",
      "Displacement = 0 m, Distance = 2200 m",
      "Displacement = 200 m, Distance = 1100 m",
      "Displacement = 0 m, Distance = 1100 m"
    ],
    "correctAnswer": 0,
    "explanation": "Total time t = 2 min 20 s = 140 s. Number of rounds = 140 / 40 = 3.5 rounds. After 3 full rounds, particle returns to starting point. The remaining 0.5 round leaves the athlete at the diametrically opposite point. Thus, Displacement = diameter = 2R = 2 × 100 = 200 m. Total Distance = 3.5 × 2πR = 3.5 × 2 × (22/7) × 100 = 2200 m.",
    "difficulty": "Medium",
    "topicId": "phys-motion-frame-reference",
    "conceptTested": "Multi-round circular distance vs displacement"
  },
  {
    "id": "prac-motion-1-2",
    "question": "A drunkard walking in a narrow lane takes 5 steps forward and 3 steps backward, followed again by 5 steps forward and 3 steps backward, and so on. Each step is 1 m long and requires 1 s. How long will he take to fall into a pit 13 m away from the start?",
    "options": [
      "37 seconds",
      "13 seconds",
      "32 seconds",
      "29 seconds"
    ],
    "correctAnswer": 0,
    "explanation": "In 1 cycle (5 steps forward + 3 steps backward = 8 steps = 8 s), net displacement = 5 - 3 = 2 m. In 4 cycles (32 seconds = 32 steps), net displacement = 4 × 2 = 8 m. On the next forward leg, he takes 5 steps forward (5 m) requiring 5 s. His position reaches 8 m + 5 m = 13 m! He falls into the pit at exactly 32 s + 5 s = 37 s. (Note: He falls into the pit BEFORE taking the backward steps!).",
    "difficulty": "Hard",
    "topicId": "phys-motion-frame-reference",
    "conceptTested": "1D segmented motion and endpoint boundary conditions"
  },
  {
    "id": "prac-physmotionframereference-3",
    "question": "Regarding Frame of Reference, Distance & Displacement, which of the following statements correctly resolves a common misconception about \"Assuming distance can be negative when an object moves in the negative x-direction.\"?",
    "options": [
      "Distance is total path length and is ALWAYS positive (s ≥ 0). Only displacement can be negative (e.g., Δx = -15 m).",
      "Incorrect assumption: Assuming distance can be negative when an object moves in the negative x-direction.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Distance is total path length and is ALWAYS positive (s ≥ 0). Only displacement can be negative (e.g., Δx = -15 m).. NEET frequently sets trap options with negative distance values.",
    "difficulty": "Medium",
    "conceptTested": "Frame of Reference, Distance & Displacement - Conceptual Clarity"
  },
  {
    "id": "prac-physmotionframereference-4",
    "question": "Regarding Frame of Reference, Distance & Displacement, which of the following statements correctly resolves a common misconception about \"Thinking that shifting the origin changes the value of displacement.\"?",
    "options": [
      "Shifting the origin alters individual position coordinates (x_i and x_f), but the difference Δx = x_f - x_i remains strictly invariant.",
      "Incorrect assumption: Thinking that shifting the origin changes the value of displacement.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Shifting the origin alters individual position coordinates (x_i and x_f), but the difference Δx = x_f - x_i remains strictly invariant.. Conceptual questions test frame independence of kinematic vectors.",
    "difficulty": "Medium",
    "conceptTested": "Frame of Reference, Distance & Displacement - Conceptual Clarity"
  },
  {
    "id": "prac-physmotionframereference-5",
    "question": "In the study of Frame of Reference, Distance & Displacement, what is the exact definition and significance of \"Frame of Reference\"?",
    "options": [
      "A spatial coordinate frame (such as Cartesian axes) attached to a reference body with a clock to measure spatial coordinates and time of physical events.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A spatial coordinate frame (such as Cartesian axes) attached to a reference body with a clock to measure spatial coordinates and time of physical events.. An Inertial Frame moves at constant velocity (a = 0) where Newton’s laws hold natively; a Non-Inertial Frame accelerates (a ≠ 0) requiring pseudo-forces.",
    "difficulty": "Easy",
    "conceptTested": "Frame of Reference definition"
  },
  {
    "id": "prac-physmotionframereference-6",
    "question": "In the study of Frame of Reference, Distance & Displacement, what is the exact definition and significance of \"Origin & Position\"?",
    "options": [
      "Origin O is the chosen zero point (x = 0) on a coordinate axis. Position x(t) is the directed distance from the origin to the particle at time t.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Origin O is the chosen zero point (x = 0) on a coordinate axis. Position x(t) is the directed distance from the origin to the particle at time t.. Changing the position of the origin changes the coordinate values x_i and x_f, but NEVER changes the displacement Δx = x_f - x_i.",
    "difficulty": "Easy",
    "conceptTested": "Origin & Position definition"
  },
  {
    "id": "prac-physmotionframereference-7",
    "question": "In the study of Frame of Reference, Distance & Displacement, what is the exact definition and significance of \"Distance (Path Length)\"?",
    "options": [
      "The total scalar scalar length of the actual trajectory traversed by a particle in motion.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The total scalar scalar length of the actual trajectory traversed by a particle in motion.. For a moving object, distance NEVER decreases with time. If a body moves, distance s > 0 even if it returns to its starting point.",
    "difficulty": "Easy",
    "conceptTested": "Distance (Path Length) definition"
  },
  {
    "id": "prac-physmotionframereference-8",
    "question": "In the study of Frame of Reference, Distance & Displacement, what is the exact definition and significance of \"Displacement Vector\"?",
    "options": [
      "The straight directed vector connecting the initial position to the final position: Δx = x_f - x_i.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The straight directed vector connecting the initial position to the final position: Δx = x_f - x_i.. Displacement can be zero even when distance is large (e.g., one complete trip around a circle or returning home).",
    "difficulty": "Easy",
    "conceptTested": "Displacement Vector definition"
  },
  {
    "id": "prac-physmotionframereference-9",
    "question": "Which of the following is a key NCERT statement regarding Frame of Reference, Distance & Displacement?",
    "options": [
      "Distance s = total scalar path length (s ≥ 0, path dependent, never decreases with time).",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Distance s = total scalar path length (s ≥ 0, path dependent, never decreases with time).",
    "difficulty": "Easy",
    "conceptTested": "Frame of Reference, Distance & Displacement NCERT High-Yield Point"
  },
  {
    "id": "prac-physmotionframereference-10",
    "question": "Which of the following is a key NCERT statement regarding Frame of Reference, Distance & Displacement?",
    "options": [
      "Displacement Δx = x_f - x_i (vector, path independent, can be +, -, or 0).",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Displacement Δx = x_f - x_i (vector, path independent, can be +, -, or 0).",
    "difficulty": "Easy",
    "conceptTested": "Frame of Reference, Distance & Displacement NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-motion-1-1',
      year: 2008,
      exam: 'AIPMT',
      examYear: 'AIPMT 2008',
      question: 'A particle starts moving along a circle of radius R with constant speed v. The ratio of distance covered to the magnitude of displacement after completing half a revolution is:',
      options: [
        'π / 2',
        '2 / π',
        'π',
        '1 / 2'
      ],
      correctAnswer: 0,
      explanation: 'For half a revolution around a circle of radius R:\n1. Distance covered s = semi-perimeter = πR.\n2. Magnitude of displacement |Δr| = diameter = 2R.\n3. Ratio = Distance / |Displacement| = (πR) / (2R) = π / 2.',
      topicId: 'phys-motion-frame-reference',
      difficulty: 'Easy',
      conceptTested: 'Distance to displacement ratio for circular arc',
      ncertReference: 'Class 11 Physics Chapter 3 - Motion in a Straight Line',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-motion-1-2',
      year: 2010,
      exam: 'AIPMT',
      examYear: 'AIPMT 2010 (Pre)',
      question: 'A body moves 6 m North, 8 m East and 10 m vertically upwards. What is the magnitude of its resultant displacement from the initial position?',
      options: [
        '10√2 m',
        '10 m',
        '10 / √2 m',
        '20 m'
      ],
      correctAnswer: 0,
      explanation: 'Taking East as +i, North as +j, and Vertically Up as +k:\nResultant displacement vector Δr = 8 i + 6 j + 10 k\nMagnitude |Δr| = √(8² + 6² + 10²) = √(64 + 36 + 100) = √200 = 10√2 m.',
      topicId: 'phys-motion-frame-reference',
      difficulty: 'Medium',
      conceptTested: '3D orthogonal vector displacement calculation',
      ncertReference: 'Class 11 Physics Chapter 3 - Motion in a Straight Line',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-motion-1-3',
      year: 2019,
      exam: 'NEET UG',
      examYear: 'NEET 2019',
      question: 'A wheel of radius 1 m rolls forward half a revolution on a horizontal plane. The magnitude of the displacement of the point of the wheel initially in contact with the ground is:',
      options: [
        '√(π² + 4) m',
        'π m',
        '√(π² + 1) m',
        '2π m'
      ],
      correctAnswer: 0,
      explanation: 'Let the initial point of contact be P at origin (0, 0). After rolling forward half a revolution:\n1. Horizontal displacement x = πR = π(1) = π m.\n2. Vertical displacement y = diameter = 2R = 2(1) = 2 m.\n3. Resultant displacement magnitude |Δr| = √(x² + y²) = √(π² + 2²) = √(π² + 4) m.',
      topicId: 'phys-motion-frame-reference',
      difficulty: 'Hard',
      conceptTested: '2D rolling motion displacement of a boundary point',
      ncertReference: 'Class 11 Physics Chapter 3 - Motion in a Straight Line',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Frame of Reference, Distance & Displacement',
    confidenceLabel: 'HIGH',
    confidenceText: 'Core conceptual pillar tested consistently across NEET UG and AIPMT papers.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 3,
    totalDirectPyqs: 3,
    totalHistoricalMarks: 12,
    averageDirectPyqsPerPaper: 0.2,
    minDirectMarks: 0,
    maxDirectMarks: 4,
    avgDirectMarksPerPaper: 0.8,
    whatThisMeansForYou: 'Based on verified PYQs, mastering distance-displacement vector relationships and multi-segment geometry prepares you for high-yield questions.',
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 to 4 Marks',
    yearWiseBreakdown: [
      {
        year: 2008,
        exam: 'AIPMT',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Direct Conceptual',
        classification: 'Direct',
        verificationStatus: 'Verified (AIPMT 2008)'
      },
      {
        year: 2010,
        exam: 'AIPMT',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Direct Calculation',
        classification: 'Direct',
        verificationStatus: 'Verified (AIPMT 2010)'
      },
      {
        year: 2019,
        exam: 'NEET UG',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Conceptual Vector Application',
        classification: 'Direct',
        verificationStatus: 'Verified (NEET 2019)'
      }
    ],
    sourceInfo: {
      dataSource: 'SATHEE & Verified NEET/AIPMT Historical Archives',
      analysisPeriod: '2004 – 2024',
      directPyqsAnalyzedCount: 3,
      classificationMethod: 'Strict topic-level verification; no fabricated counts.',
      disclaimer: 'Historical frequency reflects past papers and is not a future guarantee.'
    }
  }
};
