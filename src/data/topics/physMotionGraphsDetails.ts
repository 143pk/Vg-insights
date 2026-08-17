import { DetailedTopicContent } from '../../types/neet';

export const physMotionGraphsDetails: DetailedTopicContent = {
  topicId: 'phys-motion-graphs',
  topicName: 'Position-Time & Velocity-Time Graphs',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Kinematics & Motion',
  chapter: 'Motion in a Straight Line',
  
  whatIsThisTopic: 'Graphical representation is a powerful tool to visualize, analyze, and solve 1D kinematics problems in NEET Physics. Position-Time (x-t), Velocity-Time (v-t), and Acceleration-Time (a-t) graphs convey instantaneous values, rates of change via slopes, and cumulative totals via areas. Understanding slope relationships (v = dx/dt, a = dv/dt) and area relationships (Δx = ∫ v dt, Δv = ∫ a dt) allows rapid, visual problem solving without writing long algebraic equations.',
  
  basicIdea: [
    '1. Position-Time (x-t) Graph Slope: The tangent slope at any point on an x-t curve equals Instantaneous Velocity v = dx / dt = tan θ. A horizontal x-t line means velocity is zero (at rest).',
    '2. Curvature of x-t Graph: Concave UP (opening upward ∪) indicates POSITIVE acceleration (a > 0). Concave DOWN (opening downward ∩) indicates NEGATIVE acceleration (a < 0).',
    '3. Velocity-Time (v-t) Graph Slope: The tangent slope on a v-t graph equals Instantaneous Acceleration a = dv / dt = tan θ.',
    '4. Area Under v-t Curve: The area enclosed by the v-t curve and the time axis equals Displacement Δx = ∫ v dt. Taking the sum of absolute values of all areas gives Total Scalar Distance.',
    '5. Area Under a-t Curve: The area under an acceleration-time graph gives Change in Velocity Δv = v_f - v_i = ∫ a dt (NOT final velocity!).'
  ],

  importantTerms: [
    {
      term: 'Slope (Gradient)',
      symbol: 'm = tan θ',
      definition: 'The tangent of the angle θ made by the graph line with the positive time axis: m = Δy / Δt = dy / dt.',
      neetNote: 'Slope of x-t gives Velocity v. Slope of v-t gives Acceleration a. Slope of distance-time graph can NEVER be negative!'
    },
    {
      term: 'Area Under Curve',
      symbol: '∫ y dt',
      definition: 'The geometric area bounded between the graph curve, the time axis, and initial/final time ordinates.',
      neetNote: 'Area under v-t = Displacement. Area under speed-t = Distance. Area under a-t = Change in Velocity (v_f - v_i).'
    },
    {
      term: 'Concavity & Curvature',
      symbol: 'd²x / dt²',
      definition: 'The bending direction of an x-t graph indicating the sign of acceleration.',
      neetNote: 'Smile curve (∪) means a > 0. Frown curve (∩) means a < 0.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Position-Time (x-t) Graph Analysis and Slope Interpretation',
      paragraphs: [
        'The slope of an x-t graph represents instantaneous velocity $v = \\frac{dx}{dt} = \\tan \\theta$.',
        '1. Horizontal Line (Slope = 0): $v = 0$ (Particle is stationary at rest).',
        '2. Straight Line with Positive Slope ($0 < \\theta < 90^\\circ$): $v = \\text{constant} > 0$ (Uniform positive velocity).',
        '3. Straight Line with Negative Slope ($90^\\circ < \\theta < 180^\\circ$): $v = \\text{constant} < 0$ (Uniform negative velocity moving backward).',
        '4. Curve Bending Upward (Increasing Slope): $v$ increases with time $\\implies$ Acceleration $a > 0$.',
        '5. Curve Bending Downward (Decreasing Slope): $v$ decreases with time $\\implies$ Acceleration $a < 0$.'
      ],
      visual: {
        caption: 'Position-Time (x-t) Graph Types and Velocity Slopes',
        guide: 'Slope = tan θ = Velocity. Straight lines mean constant velocity; curves mean accelerated motion.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 220" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <rect width="800" height="220" rx="16" fill="#f8fafc" />
          
          <!-- Axes -->
          <g transform="translate(60, 180)">
            <line x1="0" y1="0" x2="680" y2="0" stroke="#475569" stroke-width="2.5" />
            <line x1="0" y1="0" x2="0" y2="-150" stroke="#475569" stroke-width="2.5" />
            <text x="680" y="20" fill="#0f172a" font-size="12" font-weight="bold">Time t</text>
            <text x="-15" y="-150" fill="#0f172a" font-size="12" font-weight="bold">Position x</text>
            
            <!-- Rest Line -->
            <line x1="0" y1="-120" x2="160" y2="-120" stroke="#94a3b8" stroke-width="3" />
            <text x="80" y="-130" text-anchor="middle" fill="#64748b" font-size="11" font-weight="bold">Rest (v=0)</text>
            
            <!-- Uniform Velocity -->
            <line x1="160" y1="0" x2="340" y2="-140" stroke="#2563eb" stroke-width="3.5" />
            <text x="270" y="-80" text-anchor="middle" fill="#1d4ed8" font-size="11" font-weight="extrabold">v = const > 0</text>
            
            <!-- Accelerating Curve (a>0) -->
            <path d="M 360 0 Q 460 -10 520 -140" fill="none" stroke="#059669" stroke-width="3.5" />
            <text x="470" y="-40" text-anchor="middle" fill="#047857" font-size="11" font-weight="extrabold">a > 0 (Concave UP)</text>
            
            <!-- Decelerating Curve (a<0) -->
            <path d="M 540 0 Q 600 -120 660 -130" fill="none" stroke="#dc2626" stroke-width="3.5" />
            <text x="610" y="-100" text-anchor="middle" fill="#b91c1c" font-size="11" font-weight="extrabold">a < 0 (Concave DOWN)</text>
          </g>
        </svg>`
      }
    },
    {
      heading: '2. Velocity-Time (v-t) Graph: Area & Slope Calculations',
      paragraphs: [
        'A v-t graph provides both instantaneous acceleration (slope) and cumulative displacement/distance (area):',
        '• Slope = Acceleration $a = \\frac{dv}{dt} = \\tan \\theta$. Positive sloped line = positive acceleration; negative sloped line = deceleration/retardation.',
        '• Area Above Time Axis ($v > 0$): Positive displacement $+A_1$.',
        '• Area Below Time Axis ($v < 0$): Negative displacement $-A_2$.',
        '• Net Displacement $\\Delta x = A_1 - A_2 + A_3$.',
        '• Total Distance $s = |A_1| + |A_2| + |A_3|$.'
      ],
      visual: {
        caption: 'Velocity-Time Graph Area Calculation for Displacement vs Distance',
        guide: 'Displacement takes sign into account: Area 1 - Area 2 + Area 3. Distance adds all absolute areas: Area 1 + Area 2 + Area 3.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <rect width="800" height="240" rx="16" fill="#f8fafc" />
          <g transform="translate(100, 120)">
            <line x1="0" y1="0" x2="600" y2="0" stroke="#334155" stroke-width="2.5" />
            <line x1="0" y1="-90" x2="0" y2="90" stroke="#334155" stroke-width="2.5" />
            <text x="600" y="20" fill="#0f172a" font-size="12" font-weight="bold">t (s)</text>
            <text x="-15" y="-90" fill="#0f172a" font-size="12" font-weight="bold">v (m/s)</text>
            
            <!-- Positive Area 1 -->
            <polygon points="0,0 150,-80 300,0" fill="#d1fae5" opacity="0.8" />
            <path d="M 0 0 L 150 -80 L 300 0" fill="none" stroke="#059669" stroke-width="3" />
            <text x="150" y="-30" text-anchor="middle" fill="#047857" font-size="13" font-weight="extrabold">+A1 = +8 m</text>
            
            <!-- Negative Area 2 -->
            <polygon points="300,0 420,60 540,0" fill="#fee2e2" opacity="0.8" />
            <path d="M 300 0 L 420 60 L 540 0" fill="none" stroke="#dc2626" stroke-width="3" />
            <text x="420" y="30" text-anchor="middle" fill="#b91c1c" font-size="13" font-weight="extrabold">-A2 = -4 m</text>
            
            <!-- Labels -->
            <text x="150" y="-100" text-anchor="middle" fill="#0284c7" font-size="12" font-weight="bold">Displacement = A1 - A2 = 8 - 4 = 4 m</text>
            <text x="420" y="-100" text-anchor="middle" fill="#16a34a" font-size="12" font-weight="bold">Distance = |A1| + |A2| = 8 + 4 = 12 m</text>
          </g>
        </svg>`
      },
      examples: [
        {
          problem: 'A body moves along a straight line with a velocity-time graph having three segments: (1) v = +4 m/s from t = 0 to 2 s, (2) v = -2 m/s from t = 2 to 4 s, (3) v = +2 m/s from t = 4 to 6 s. Calculate: (a) Displacement in 6 s, (b) Distance in 6 s.',
          given: 'Segment 1: v1 = +4 m/s, Δt1 = 2 s; Segment 2: v2 = -2 m/s, Δt2 = 2 s; Segment 3: v3 = +2 m/s, Δt3 = 2 s',
          stepByStep: [
            'Step 1: Calculate individual rectangular areas:',
            '• Area 1 = 4 × 2 = +8 m.',
            '• Area 2 = (-2) × 2 = -4 m.',
            '• Area 3 = 2 × 2 = +4 m.',
            'Step 2: Calculate displacement Δx = Area 1 + Area 2 + Area 3 = 8 - 4 + 4 = 8 m.',
            'Step 3: Calculate distance s = |Area 1| + |Area 2| + |Area 3| = 8 + 4 + 4 = 16 m.'
          ],
          answer: 'Displacement = 8 m, Distance = 16 m.'
        }
      ]
    },
    {
      heading: '3. Common Graph Traps and Physically Impossible Graphs',
      paragraphs: [
        'NEET frequently tests whether students can spot physically impossible graphs:',
        '1. Vertical Line on x-t Graph: Implies infinite velocity ($v = \\tan 90^\\circ = \\infty$) and particle existing at multiple positions simultaneously—Physically IMPOSSIBLE.',
        '2. Decreasing Distance-Time Graph: Distance is non-decreasing; a distance-time graph line can NEVER go downward—Physically IMPOSSIBLE.',
        '3. Speed-Time Graph Below Time Axis: Speed is scalar magnitude ($|v| \\ge 0$); speed can NEVER be negative—Physically IMPOSSIBLE.',
        '4. Closed Loop on x-t or v-t Graph: Means two different velocities or positions at the exact same instant of time—Physically IMPOSSIBLE.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Velocity from x-t Graph Slope',
      formula: 'v = \\frac{dx}{dt} = \\tan \\theta',
      variables: '\\theta = \\text{angle made by tangent to x-t curve with time axis}, v = \\text{instantaneous velocity (m/s)}',
      whenToUse: 'Use to find instantaneous velocity from a position-time graph.'
    },
    {
      title: 'Acceleration from v-t Graph Slope',
      formula: 'a = \\frac{dv}{dt} = \\tan \\theta',
      variables: '\\theta = \\text{angle made by tangent to v-t curve with time axis}, a = \\text{instantaneous acceleration (m/s²)}',
      whenToUse: 'Use to find acceleration from a velocity-time graph.'
    },
    {
      title: 'Displacement from v-t Graph Area',
      formula: '\\Delta x = \\int_{t_1}^{t_2} v(t) \\, dt = \\text{Net Area under v-t curve}',
      variables: '\\Delta x = \\text{displacement (m)}',
      whenToUse: 'Use to calculate net displacement from velocity-time graph area.'
    }
  ],

  neetImportantPoints: [
    'Slope of x-t graph = Velocity. Slope of v-t graph = Acceleration.',
    'Area under v-t graph = Displacement (with sign) or Distance (absolute values).',
    'Area under a-t graph = CHANGE in velocity Δv = v_f - v_i.',
    'Ratio of velocities v1 / v2 from x-t graph slopes: v1 / v2 = tan θ1 / tan θ2.',
    'Distance-time graph can NEVER have a negative slope. Speed-time graph can NEVER be below time axis.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming area under a-t graph gives final velocity v_f.',
      correctFact: 'Area under a-t graph gives CHANGE in velocity Δv = v_f - v_i. You must add initial velocity v_i to get final velocity!',
      whyItMattersForNEET: 'Frequent conceptual trap in NEET multi-step graph questions.'
    },
    {
      commonConfusion: 'Subtracting negative areas when calculating distance from a v-t graph.',
      correctFact: 'Displacement subtracts negative areas below time axis. Distance ADDS ALL AREAS as positive absolute values.',
      whyItMattersForNEET: 'Direct numerical question trap.'
    }
  ],

  quickRevision: [
    'x-t slope = v = tan θ.',
    'v-t slope = a = tan θ.',
    'v-t area = Displacement (signed sum) or Distance (absolute sum).',
    'a-t area = Change in velocity Δv = v_f - v_i.',
    'x-t concavity ∪ → a > 0; ∩ → a < 0.'
  ],

  practiceQuestions: [
  {
    "id": "prac-motion-4-1",
    "question": "The acceleration-time graph of a particle starting from rest at t = 0 is a triangle with base 10 s and peak acceleration 6 m/s² at t = 5 s. The velocity of the particle at t = 10 s is:",
    "options": [
      "30 m/s",
      "60 m/s",
      "15 m/s",
      "0 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "Change in velocity Δv = Area under acceleration-time graph.\nSince the graph is a triangle with base b = 10 s and height h = 6 m/s²:\nArea = 1/2 × base × height = 1/2 × 10 × 6 = 30 m/s.\nSince particle starts from rest (v_i = 0), Δv = v_f - 0 = 30 m/s  ⇒  v_f = 30 m/s.",
    "difficulty": "Easy",
    "topicId": "phys-motion-graphs",
    "conceptTested": "Velocity change from area under acceleration-time graph"
  },
  {
    "id": "prac-motion-4-2",
    "question": "Which of the following position-time graphs represents a particle moving with negative acceleration?",
    "options": [
      "An x-t curve opening downwards (concave downward ∩)",
      "An x-t curve opening upwards (concave upward ∪)",
      "A straight line inclined at 45° with time axis",
      "A horizontal line parallel to time axis"
    ],
    "correctAnswer": 0,
    "explanation": "Acceleration is given by the second derivative d²x/dt² (concavity of x-t graph). A curve opening downwards (concave downward ∩) has d²x/dt² < 0, representing negative acceleration (retardation).",
    "difficulty": "Easy",
    "topicId": "phys-motion-graphs",
    "conceptTested": "Sign of acceleration from concavity of position-time graph"
  },
  {
    "id": "prac-physmotiongraphs-3",
    "question": "Regarding Position-Time & Velocity-Time Graphs, which of the following statements correctly resolves a common misconception about \"Assuming area under a-t graph gives final velocity v_f.\"?",
    "options": [
      "Area under a-t graph gives CHANGE in velocity Δv = v_f - v_i. You must add initial velocity v_i to get final velocity!",
      "Incorrect assumption: Assuming area under a-t graph gives final velocity v_f.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Area under a-t graph gives CHANGE in velocity Δv = v_f - v_i. You must add initial velocity v_i to get final velocity!. Frequent conceptual trap in NEET multi-step graph questions.",
    "difficulty": "Medium",
    "conceptTested": "Position-Time & Velocity-Time Graphs - Conceptual Clarity"
  },
  {
    "id": "prac-physmotiongraphs-4",
    "question": "Regarding Position-Time & Velocity-Time Graphs, which of the following statements correctly resolves a common misconception about \"Subtracting negative areas when calculating distance from a v-t graph.\"?",
    "options": [
      "Displacement subtracts negative areas below time axis. Distance ADDS ALL AREAS as positive absolute values.",
      "Incorrect assumption: Subtracting negative areas when calculating distance from a v-t graph.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Displacement subtracts negative areas below time axis. Distance ADDS ALL AREAS as positive absolute values.. Direct numerical question trap.",
    "difficulty": "Medium",
    "conceptTested": "Position-Time & Velocity-Time Graphs - Conceptual Clarity"
  },
  {
    "id": "prac-physmotiongraphs-5",
    "question": "In the study of Position-Time & Velocity-Time Graphs, what is the exact definition and significance of \"Slope (Gradient)\"?",
    "options": [
      "The tangent of the angle θ made by the graph line with the positive time axis: m = Δy / Δt = dy / dt.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The tangent of the angle θ made by the graph line with the positive time axis: m = Δy / Δt = dy / dt.. Slope of x-t gives Velocity v. Slope of v-t gives Acceleration a. Slope of distance-time graph can NEVER be negative!",
    "difficulty": "Easy",
    "conceptTested": "Slope (Gradient) definition"
  },
  {
    "id": "prac-physmotiongraphs-6",
    "question": "In the study of Position-Time & Velocity-Time Graphs, what is the exact definition and significance of \"Area Under Curve\"?",
    "options": [
      "The geometric area bounded between the graph curve, the time axis, and initial/final time ordinates.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The geometric area bounded between the graph curve, the time axis, and initial/final time ordinates.. Area under v-t = Displacement. Area under speed-t = Distance. Area under a-t = Change in Velocity (v_f - v_i).",
    "difficulty": "Easy",
    "conceptTested": "Area Under Curve definition"
  },
  {
    "id": "prac-physmotiongraphs-7",
    "question": "In the study of Position-Time & Velocity-Time Graphs, what is the exact definition and significance of \"Concavity & Curvature\"?",
    "options": [
      "The bending direction of an x-t graph indicating the sign of acceleration.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The bending direction of an x-t graph indicating the sign of acceleration.. Smile curve (∪) means a > 0. Frown curve (∩) means a < 0.",
    "difficulty": "Easy",
    "conceptTested": "Concavity & Curvature definition"
  },
  {
    "id": "prac-physmotiongraphs-8",
    "question": "Which of the following is a key NCERT statement regarding Position-Time & Velocity-Time Graphs?",
    "options": [
      "x-t slope = v = tan θ.",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: x-t slope = v = tan θ.",
    "difficulty": "Easy",
    "conceptTested": "Position-Time & Velocity-Time Graphs NCERT High-Yield Point"
  },
  {
    "id": "prac-physmotiongraphs-9",
    "question": "Which of the following is a key NCERT statement regarding Position-Time & Velocity-Time Graphs?",
    "options": [
      "v-t slope = a = tan θ.",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: v-t slope = a = tan θ.",
    "difficulty": "Easy",
    "conceptTested": "Position-Time & Velocity-Time Graphs NCERT High-Yield Point"
  },
  {
    "id": "prac-physmotiongraphs-10",
    "question": "Which of the following is a key NCERT statement regarding Position-Time & Velocity-Time Graphs?",
    "options": [
      "v-t area = Displacement (signed sum) or Distance (absolute sum).",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: v-t area = Displacement (signed sum) or Distance (absolute sum).",
    "difficulty": "Easy",
    "conceptTested": "Position-Time & Velocity-Time Graphs NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-motion-4-1',
      year: 2021,
      exam: 'NEET UG',
      examYear: 'NEET 2021',
      question: 'The velocity-time graph of a body moving along a straight line is shown in the figure. The displacement and distance travelled by the body in 6 seconds are respectively: (Graph details: v = +4 m/s for 0 to 2 s; v = -2 m/s for 2 to 4 s; v = +2 m/s for 4 to 6 s)',
      options: [
        '8 m, 16 m',
        '16 m, 8 m',
        '16 m, 16 m',
        '8 m, 8 m'
      ],
      correctAnswer: 0,
      explanation: 'Calculate areas of the three rectangular sections:\n1. Area 1 (0 to 2 s) = 4 × 2 = +8 m.\n2. Area 2 (2 to 4 s) = (-2) × 2 = -4 m.\n3. Area 3 (4 to 6 s) = 2 × 2 = +4 m.\n• Displacement = Area 1 + Area 2 + Area 3 = 8 - 4 + 4 = 8 m.\n• Distance = |Area 1| + |Area 2| + |Area 3| = 8 + 4 + 4 = 16 m.',
      topicId: 'phys-motion-graphs',
      difficulty: 'Easy',
      conceptTested: 'Displacement and distance calculation from piecewise v-t graph',
      ncertReference: 'Class 11 Physics Chapter 3 - Motion in a Straight Line',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-motion-4-2',
      year: 2022,
      exam: 'NEET UG',
      examYear: 'NEET 2022',
      question: 'The displacement-time graphs of two moving particles make angles of 30° and 45° with the X-axis (time axis). The ratio of their velocities is:',
      options: [
        '1 : √3',
        '1 : 1',
        '1 : 2',
        '√3 : 1'
      ],
      correctAnswer: 0,
      explanation: 'Velocity from displacement-time (x-t) graph slope: v = tan θ.\n• Velocity of 1st particle: v1 = tan 30° = 1 / √3.\n• Velocity of 2nd particle: v2 = tan 45° = 1.\n• Ratio v1 / v2 = (1 / √3) / 1 = 1 : √3.',
      topicId: 'phys-motion-graphs',
      difficulty: 'Easy',
      conceptTested: 'Ratio of velocities from tangent slopes of x-t graphs',
      ncertReference: 'Class 11 Physics Chapter 3 - Motion in a Straight Line',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-motion-4-3',
      year: 2007,
      exam: 'AIPMT',
      examYear: 'AIPMT 2007',
      question: 'A particle shows distance-time curve as given in a figure. The maximum instantaneous velocity of the particle is around the point where:',
      options: [
        'The slope of the tangent to the curve is maximum',
        'The slope of the tangent to the curve is zero',
        'The curve crosses the time axis',
        'The area under the curve is maximum'
      ],
      correctAnswer: 0,
      explanation: 'Since instantaneous velocity v = dx/dt = slope of the tangent to position-time graph, the instantaneous velocity is maximum at the point where the positive slope of the curve is maximum (steepest tangent).',
      topicId: 'phys-motion-graphs',
      difficulty: 'Easy',
      conceptTested: 'Max velocity location on graph via steepest slope',
      ncertReference: 'Class 11 Physics Chapter 3 - Motion in a Straight Line',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Position-Time & Velocity-Time Graphs',
    confidenceLabel: 'HIGH',
    confidenceText: 'Graph interpretation is a core staple of NEET UG Physics.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 3,
    totalDirectPyqs: 3,
    totalHistoricalMarks: 12,
    averageDirectPyqsPerPaper: 0.2,
    minDirectMarks: 0,
    maxDirectMarks: 4,
    avgDirectMarksPerPaper: 0.8,
    whatThisMeansForYou: 'Understanding slope for velocity/acceleration and area for displacement gives quick visual solutions without calculus.',
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 to 4 Marks',
    yearWiseBreakdown: [
      {
        year: 2007,
        exam: 'AIPMT',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Graph Slope Interpretation',
        classification: 'Direct',
        verificationStatus: 'Verified (AIPMT 2007)'
      },
      {
        year: 2021,
        exam: 'NEET UG',
        directPyqCount: 1,
        marks: 4,
        questionType: 'v-t Graph Area Calculation',
        classification: 'Direct',
        verificationStatus: 'Verified (NEET 2021)'
      },
      {
        year: 2022,
        exam: 'NEET UG',
        directPyqCount: 1,
        marks: 4,
        questionType: 'x-t Graph Angle Slope Ratio',
        classification: 'Direct',
        verificationStatus: 'Verified (NEET 2022)'
      }
    ],
    sourceInfo: {
      dataSource: 'SATHEE & Verified NEET/AIPMT Historical Archives',
      analysisPeriod: '2004 – 2024',
      directPyqsAnalyzedCount: 3,
      classificationMethod: 'Strict topic-level verification; no invented statistics.',
      disclaimer: 'Historical stats reflect analyzed paper records.'
    }
  }
};
