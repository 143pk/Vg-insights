import { DetailedTopicContent } from '../../types/neet';

export const physWorkDoneDetails: DetailedTopicContent = {
  topicId: 'phys-work-done',
  topicName: 'Work Done by Constant & Variable Forces',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Work, Energy & Power',
  chapter: 'Work, Energy and Power',

  whatIsThisTopic: 'Work in physics measures the magnitude of energy transferred when a force produces displacement along or opposite to its line of action. Unlike everyday usage where static exertion counts as effort, physical work strictly requires both force and actual spatial displacement. Mathematically, work is defined as the scalar dot product of force vector F and displacement vector s: W = F · s = F s cos θ. This topic covers work under constant forces, angular resolution of force, positive/negative/zero work conditions, work done by individual component forces (friction, gravity, tension, normal reaction), calculus and graphical determination of work under variable forces W = ∫ F dx, area integration under F-x curves, spring force work W = -1/2 k (xf² - xi²), and NEET problem-solving patterns.',

  basicIdea: [
    'Work is a SCALAR quantity equal to the dot product of force vector F and displacement vector s: W = F · s = F s cos θ.',
    'Necessary conditions for non-zero work: (1) Force must be applied (F ≠ 0), (2) Displacement must occur (s ≠ 0), and (3) Force must NOT be perpendicular to displacement (θ ≠ 90°).',
    'Work can be positive (0° ≤ θ < 90°), zero (θ = 90°), or negative (90° < θ ≤ 180°). Friction always does negative work on a moving block.',
    'Work done by a variable force is calculated by integrating F(x) with respect to position x, which equals the area under the Force-Displacement (F-x) graph.',
    'Spring force F = -kx is a variable force; work done by spring force when compressed/extended from xi to xf is W_spring = -1/2 k (xf² - xi²).'
  ],

  importantTerms: [
    {
      term: 'Scalar Product (Dot Product)',
      definition: 'The mathematical multiplication of two vectors resulting in a scalar: A · B = A B cos θ. Work is the dot product of force and displacement.'
    },
    {
      term: 'Positive Work',
      definition: 'Work done when the component of force is in the direction of displacement (0° ≤ θ < 90°), transferring energy INTO the system and increasing speed/kinetic energy.'
    },
    {
      term: 'Negative Work',
      definition: 'Work done when the component of force opposes displacement (90° < θ ≤ 180°), extracting energy FROM the system (e.g., kinetic friction, air drag).'
    },
    {
      term: 'Zero Work',
      definition: 'Occurs when force is perpendicular to displacement (θ = 90°), displacement is zero (s = 0), or applied force is zero (F = 0).'
    },
    {
      term: 'F-x Area Integration',
      definition: 'The definite integral W = ∫ F dx, representing the total area under the force-position graph between initial and final coordinates.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Definition & Fundamental Nature of Work in Physics',
      paragraphs: [
        'In daily language, holding a heavy box on one\'s head for hours is called "hard work." However, in physics, work done in this situation is EXACTLY ZERO because the displacement of the box is zero (s = 0). Physical work represents mechanical energy transfer.',
        'Work is defined as the scalar (dot) product of force vector F and displacement vector s:',
        'W = F · s = |F| |s| cos θ = F s cos θ',
        'where F is the magnitude of the applied force, s is the magnitude of displacement of the point of application of force, and θ is the smaller angle between force vector F and displacement vector s.',
        'SI Unit: Joule (J), defined as 1 Joule = 1 Newton × 1 meter = 1 N·m = 1 kg·m²·s⁻². Dimensional Formula: [M¹ L² T⁻²]. In CGS units, 1 Erg = 1 dyne × 1 cm = 10⁻⁷ Joules.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <!-- Background -->
          <rect width="500" height="200" fill="#f8fafc" rx="12"/>
          <!-- Ground line -->
          <line x1="40" y1="160" x2="460" y2="160" stroke="#64748b" stroke-width="3" stroke-dasharray="6 4"/>
          <!-- Block initial position -->
          <rect x="80" y="100" width="70" height="60" fill="#3b82f6" rx="6" opacity="0.4"/>
          <text x="115" y="135" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">Initial</text>
          <!-- Block final position -->
          <rect x="320" y="100" width="70" height="60" fill="#2563eb" rx="6"/>
          <text x="355" y="135" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Final</text>
          <!-- Displacement Vector arrow -->
          <line x1="115" y1="175" x2="355" y2="175" stroke="#059669" stroke-width="3" marker-end="url(#arrow-green)"/>
          <text x="235" y="192" fill="#047857" font-size="13" font-weight="bold" text-anchor="middle">Displacement s</text>
          <!-- Force Vector arrow at an angle -->
          <line x1="355" y1="130" x2="440" y2="70" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/>
          <text x="445" y="65" fill="#dc2626" font-size="13" font-weight="bold">Force F</text>
          <!-- Horizontal reference dashed line for angle theta -->
          <line x1="355" y1="130" x2="430" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 3"/>
          <!-- Angle arc -->
          <path d="M 390 130 A 35 35 0 0 0 382 110" fill="none" stroke="#d97706" stroke-width="2"/>
          <text x="395" y="120" fill="#d97706" font-size="14" font-weight="bold">θ</text>
          <!-- Component breakdown annotations -->
          <text x="240" y="45" fill="#1e293b" font-size="12" font-weight="bold">W = (F cos θ) × s = F · s</text>
          <text x="240" y="65" fill="#64748b" font-size="11">F cos θ = Component parallel to displacement</text>
          <!-- Markers -->
          <defs>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
            </marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/>
            </marker>
          </defs>
        </svg>`,
        caption: 'Figure 1: Force F pulling a block at angle θ relative to displacement s. Work done W = F s cos θ.'
      }
    },
    {
      heading: '2. Angle Dependence & Cases of Work (Positive, Zero, Negative)',
      paragraphs: [
        'The sign and magnitude of work done depend on the angle θ between force vector F and displacement vector s:',
        '• Case 1: Positive Work (0° ≤ θ < 90°)\nSince cos θ > 0, W > 0. Applied force aids motion and transfers energy into the body. Maximum positive work occurs at θ = 0° (cos 0° = 1, W = +F s). Examples: Gravity on a freely falling body (θ = 0°), pulling a trolley forward, stretched spring pulling a block back toward equilibrium.',
        '• Case 2: Zero Work (θ = 90° or s = 0 or F = 0)\nSince cos 90° = 0, W = 0. Force acts perpendicular to displacement without altering speed. Examples: (1) Centripetal force in uniform circular motion (F ⊥ v at every instant), (2) Normal reaction N on a block moving horizontally, (3) Work done by gravity on a person walking horizontally carrying luggage, (4) Tension in pendulum string.',
        '• Case 3: Negative Work (90° < θ ≤ 180°)\nSince cos θ < 0, W < 0. Force opposes motion and extracts mechanical energy from the body. Maximum negative work occurs at θ = 180° (cos 180° = -1, W = -F s). Examples: Kinetic friction force on a sliding box (θ = 180°), gravitational work on a projected body going upward (θ = 180°), braking force on a car.'
      ],
      tables: [
        {
          headers: ['Angle θ', 'cos θ', 'Work W', 'Physical Effect on Speed', 'NEET Example'],
          rows: [
            ['θ = 0°', '+1', '+F s (Max +ve)', 'Speed increases at max rate', 'Free fall under gravity'],
            ['0° < θ < 90°', '> 0', '+F s cos θ (+ve)', 'Speed increases', 'Pulling lawn roller at angle'],
            ['θ = 90°', '0', '0 (Zero)', 'Speed remains constant', 'Centripetal force, Normal reaction'],
            ['90° < θ < 180°', '< 0', '-F s cos θ (-ve)', 'Speed decreases', 'Air resistance on projectile'],
            ['θ = 180°', '-1', '-F s (Max -ve)', 'Speed decreases at max rate', 'Kinetic friction on sliding block']
          ]
        }
      ]
    },
    {
      heading: '3. Work Done by Individual Forces & Multiple Forces',
      paragraphs: [
        'When multiple forces F₁, F₂, F₃... act simultaneously on a body undergoing displacement s, the NET WORK done on the body can be calculated in two equivalent ways:',
        'Method A: Sum of work done by individual forces: W_net = W₁ + W₂ + W₃ + ... = (F₁ · s) + (F₂ · s) + (F₃ · s) + ...',
        'Method B: Work done by net resultant force: F_net = F₁ + F₂ + F₃ + ..., W_net = F_net · s.',
        'Individual Forces Analysis:',
        '• Gravity (W_g): W_g = m g h (if moving downward by height h) and W_g = -m g h (if moving upward by height h). Notice W_g depends ONLY on vertical elevation change, NOT on path taken!',
        '• Friction (W_f): Kinetic friction f_k = μ_k N acts opposite to relative displacement (θ = 180°), so W_f = -f_k s. Static friction does ZERO work on a rigid body if there is no sliding, but can do positive or negative work on individual connected bodies (e.g., block A driving block B on top).',
        '• Normal Reaction (W_N): Zero on flat horizontal surfaces. On a moving elevator, normal reaction does positive work when going up and negative work when going down.'
      ]
    },
    {
      heading: '4. Work Done by Variable Force & Graphical Method (F-x Integration)',
      paragraphs: [
        'In many real-world situations (e.g., spring forces, gravitational forces over long distances, electrostatic forces), the force F is not constant but varies with position x.',
        'To find work done by a variable force F(x) during displacement from initial position x_i to final position x_f, we divide displacement into infinitely small steps dx. Over each element dx, force is treated as constant, doing elemental work dW = F(x) dx.',
        'Summing all elements yields the definite integral:',
        'W = ∫_{x_i}^{x_f} F(x) dx',
        'In 3-Dimensional space where F = F_x i + F_y j + F_z k and dr = dx i + dy j + dz k:',
        'W = ∫_{x_i}^{x_f} F_x dx + ∫_{y_i}^{y_f} F_y dy + ∫_{z_i}^{z_f} F_z dz',
        'GRAPHICAL INTERPRETATION:',
        'On a Force vs Position (F-x) graph, the area bounded by the curve F(x), x-axis, and vertical lines x = x_i and x = x_f equals the work done W.',
        '• Area ABOVE the x-axis (where F > 0) represents POSITIVE WORK.',
        '• Area BELOW the x-axis (where F < 0) represents NEGATIVE WORK.',
        '• W_net = (Area Above) - (Area Below).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="220" fill="#f8fafc" rx="12"/>
          <!-- Axes -->
          <line x1="50" y1="180" x2="460" y2="180" stroke="#334155" stroke-width="2" marker-end="url(#arrow-axis)"/>
          <line x1="50" y1="180" x2="50" y2="20" stroke="#334155" stroke-width="2" marker-end="url(#arrow-axis)"/>
          <text x="465" y="185" fill="#334155" font-size="12" font-weight="bold">x (m)</text>
          <text x="45" y="15" fill="#334155" font-size="12" font-weight="bold">F(x) (N)</text>
          
          <!-- Positive Area (Trapezoid / Curve) -->
          <path d="M 80 180 L 80 100 L 220 50 L 280 180 Z" fill="#3b82f6" opacity="0.3"/>
          <path d="M 80 100 Q 150 30 220 50 L 280 180" fill="none" stroke="#2563eb" stroke-width="3"/>
          <text x="160" y="110" fill="#1d4ed8" font-size="13" font-weight="bold">Area 1 (+ve Work)</text>

          <!-- Negative Area -->
          <path d="M 280 180 L 340 210 L 400 180 Z" fill="#ef4444" opacity="0.3"/>
          <path d="M 280 180 L 340 210 L 400 180" fill="none" stroke="#dc2626" stroke-width="3"/>
          <text x="340" y="195" fill="#b91c1c" font-size="11" font-weight="bold">Area 2 (-ve)</text>

          <!-- Bounds dotted lines -->
          <line x1="80" y1="180" x2="80" y2="100" stroke="#94a3b8" stroke-dasharray="4 3"/>
          <text x="75" y="195" fill="#64748b" font-size="11">x_i</text>

          <line x1="280" y1="180" x2="280" y2="50" stroke="#94a3b8" stroke-dasharray="4 3"/>
          <text x="275" y="195" fill="#64748b" font-size="11">x_m</text>

          <text x="395" y="195" fill="#64748b" font-size="11">x_f</text>

          <text x="230" y="25" fill="#0f172a" font-size="12" font-weight="bold">Net Work W = Area 1 - Area 2</text>
        </svg>`,
        caption: 'Figure 2: Force-Displacement (F-x) graph where Net Work done = Area 1 (+ve) - Area 2 (-ve).'
      }
    },
    {
      heading: '5. Work Done by Spring Force (Hooke\'s Law Application)',
      paragraphs: [
        'An ideal spring obeys Hooke\'s Law: restoring force F_s exerted by the spring when stretched or compressed by displacement x from its natural equilibrium length is:',
        'F_s = -k x',
        'where k is the spring constant (stiffness in N/m) and negative sign indicates restoring force opposes displacement.',
        'WORK DONE BY SPRING FORCE (W_spring):',
        'When spring position changes from x_i to x_f:',
        'W_spring = ∫_{x_i}^{x_f} (-k x) dx = -k [x²/2]_{x_i}^{x_f} = -1/2 k (x_f² - x_i²)',
        '• Stretching spring from natural length (x_i = 0 to x_f = x): W_spring = -1/2 k x² (Negative work because restoring force opposes displacement).',
        '• Releasing compressed spring back to natural length (x_i = -x to x_f = 0): W_spring = +1/2 k x² (Positive work because spring pushes in direction of motion).',
        'WORK DONE BY EXTERNAL AGENT (W_ext):',
        'To slowly stretch/compress spring without acceleration, external force F_ext = +k x:',
        'W_ext = ∫_{x_i}^{x_f} (+k x) dx = +1/2 k (x_f² - x_i²)'
      ]
    }
  ],

  formulae: [
    {
      formulaName: 'Work Done by Constant Force',
      expression: 'W = \\vec{F} \\cdot \\vec{s} = F s \\cos \\theta',
      explanation: 'F = force magnitude (N), s = displacement magnitude (m), θ = angle between force and displacement vectors.'
    },
    {
      formulaName: 'Work in Rectangular Vector Components',
      expression: 'W = F_x \\Delta x + F_y \\Delta y + F_z \\Delta z',
      explanation: 'Used when force F = Fx i + Fy j + Fz k and displacement s = Δx i + Δy j + Δz k.'
    },
    {
      formulaName: 'Work Done by Variable Force (1D Calculus)',
      expression: 'W = \\int_{x_i}^{x_f} F(x) \\, dx',
      explanation: 'Integration of position-dependent force F(x) from x_i to x_f. Equals shaded area under F-x graph.'
    },
    {
      formulaName: 'Work Done by Spring Restoring Force',
      expression: 'W_{\\text{spring}} = -\\frac{1}{2} k \\left( x_f^2 - x_i^2 \\right)',
      explanation: 'k = spring constant (N/m), x_i = initial extension/compression, x_f = final extension/compression.'
    },
    {
      formulaName: 'Work Done by External Agent on Spring',
      expression: 'W_{\\text{ext}} = +\\frac{1}{2} k \\left( x_f^2 - x_i^2 \\right)',
      explanation: 'External force work required to stretch/compress spring slowly without kinetic energy change.'
    }
  ],

  neetImportantPoints: [
    'Work done by centripetal force is ALWAYS ZERO because centripetal force acts towards the center (radial) while displacement is tangential (θ = 90°).',
    'Work done by kinetic friction W_f = -f_k s. On a closed loop, friction work is non-zero (W_f = -f_k × total path length), proving friction is a non-conservative force.',
    'For spring stretching: Work done in stretching a spring from x₁ to x₂ is W = 1/2 k (x₂² - x₁²), NOT 1/2 k (x₂ - x₁)². Avoid squaring the difference!',
    'Area under F-x graph: Area above x-axis is +ve work; area below x-axis is -ve work. Net Work = Area(above) - Area(below).'
  ],

  commonConfusions: [
    {
      misconception: 'Believing static friction never does any work.',
      correction: 'Static friction does ZERO work on a single rigid body with no relative slipping. However, static friction CAN do positive work on an object (e.g., static friction accelerates a block placed on the bed of a speeding truck).'
    },
    {
      misconception: 'Confusing W = 1/2 k (x₂² - x₁²) with 1/2 k (x₂ - x₁)². ',
      correction: 'Work depends on difference of squares (x₂² - x₁²), NOT square of difference. For example stretching from 1m to 3m gives (9 - 1) = 8, whereas (3 - 1)² = 4. They differ by a factor of 2!'
    }
  ],

  quickRevision: [
    'W = F s cos θ = F · s (Scalar quantity, SI Unit: Joule).',
    'Positive Work: 0° ≤ θ < 90° (Energy added). Zero Work: θ = 90° or s = 0 (Centripetal force, normal force). Negative Work: 90° < θ ≤ 180° (Friction, braking).',
    'Variable Force: W = ∫ F dx = Area under F-x graph.',
    'Spring Work: W_spring = -1/2 k (xf² - xi²); External work to stretch spring = +1/2 k (xf² - xi²).',
    'Gravity Work: W_g = -mgh (going up), W_g = +mgh (going down).'
  ],

  practiceQuestions: [
  {
    "questionId": "pq-work-1",
    "questionText": "A body of mass 2 kg initially at rest is moved by a horizontal force F = (3x² + 2x - 1) N along the x-axis. Calculate the work done by the force in moving the body from x = 1 m to x = 3 m.",
    "options": [
      "26 Joules",
      "32 Joules",
      "34 Joules",
      "40 Joules"
    ],
    "correctOption": 1,
    "explanation": "Work W = ∫_{x=1}^{3} F(x) dx = ∫_{1}^{3} (3x² + 2x - 1) dx\n= [ x³ + x² - x ]_{1}^{3}\n= (3³ + 3² - 3) - (1³ + 1² - 1)\n= (27 + 9 - 3) - (1 + 1 - 1)\n= 33 - 1 = 32 Joules.",
    "difficulty": "Medium"
  },
  {
    "questionId": "pq-work-2",
    "questionText": "A force F = (2i + 3j - k) N acts on a particle and displaces it from position r₁ = (i + 2j + 3k) m to position r₂ = (3i + 5j + 2k) m. The work done by the force is:",
    "options": [
      "10 J",
      "12 J",
      "14 J",
      "16 J"
    ],
    "correctOption": 2,
    "explanation": "Displacement vector s = r₂ - r₁ = (3 - 1)i + (5 - 2)j + (2 - 3)k = (2i + 3j - k) m.\nWork W = F · s = (2i + 3j - k) · (2i + 3j - k)\n= (2)(2) + (3)(3) + (-1)(-1) = 4 + 9 + 1 = 14 Joules.",
    "difficulty": "Easy"
  },
  {
    "id": "prac-physworkdone-3",
    "question": "Regarding Work Done by Constant & Variable Forces, which of the following statements correctly resolves a common misconception about \"Believing static friction never does any work.\"?",
    "options": [
      "Static friction does ZERO work on a single rigid body with no relative slipping. However, static friction CAN do positive work on an object (e.g., static friction accelerates a block placed on the bed of a speeding truck).",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Work Done by Constant & Variable Forces - Conceptual Clarity"
  },
  {
    "id": "prac-physworkdone-4",
    "question": "Regarding Work Done by Constant & Variable Forces, which of the following statements correctly resolves a common misconception about \"Confusing W = 1/2 k (x₂² - x₁²) with 1/2 k (x₂ - x₁)². \"?",
    "options": [
      "Work depends on difference of squares (x₂² - x₁²), NOT square of difference. For example stretching from 1m to 3m gives (9 - 1) = 8, whereas (3 - 1)² = 4. They differ by a factor of 2!",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Work Done by Constant & Variable Forces - Conceptual Clarity"
  },
  {
    "id": "prac-physworkdone-5",
    "question": "In the study of Work Done by Constant & Variable Forces, what is the exact definition and significance of \"Scalar Product (Dot Product)\"?",
    "options": [
      "The mathematical multiplication of two vectors resulting in a scalar: A · B = A B cos θ. Work is the dot product of force and displacement.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The mathematical multiplication of two vectors resulting in a scalar: A · B = A B cos θ. Work is the dot product of force and displacement.. ",
    "difficulty": "Easy",
    "conceptTested": "Scalar Product (Dot Product) definition"
  },
  {
    "id": "prac-physworkdone-6",
    "question": "In the study of Work Done by Constant & Variable Forces, what is the exact definition and significance of \"Positive Work\"?",
    "options": [
      "Work done when the component of force is in the direction of displacement (0° ≤ θ < 90°), transferring energy INTO the system and increasing speed/kinetic energy.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Work done when the component of force is in the direction of displacement (0° ≤ θ < 90°), transferring energy INTO the system and increasing speed/kinetic energy.. ",
    "difficulty": "Easy",
    "conceptTested": "Positive Work definition"
  },
  {
    "id": "prac-physworkdone-7",
    "question": "In the study of Work Done by Constant & Variable Forces, what is the exact definition and significance of \"Negative Work\"?",
    "options": [
      "Work done when the component of force opposes displacement (90° < θ ≤ 180°), extracting energy FROM the system (e.g., kinetic friction, air drag).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Work done when the component of force opposes displacement (90° < θ ≤ 180°), extracting energy FROM the system (e.g., kinetic friction, air drag).. ",
    "difficulty": "Easy",
    "conceptTested": "Negative Work definition"
  },
  {
    "id": "prac-physworkdone-8",
    "question": "In the study of Work Done by Constant & Variable Forces, what is the exact definition and significance of \"Zero Work\"?",
    "options": [
      "Occurs when force is perpendicular to displacement (θ = 90°), displacement is zero (s = 0), or applied force is zero (F = 0).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Occurs when force is perpendicular to displacement (θ = 90°), displacement is zero (s = 0), or applied force is zero (F = 0).. ",
    "difficulty": "Easy",
    "conceptTested": "Zero Work definition"
  },
  {
    "id": "prac-physworkdone-9",
    "question": "In the study of Work Done by Constant & Variable Forces, what is the exact definition and significance of \"F-x Area Integration\"?",
    "options": [
      "The definite integral W = ∫ F dx, representing the total area under the force-position graph between initial and final coordinates.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The definite integral W = ∫ F dx, representing the total area under the force-position graph between initial and final coordinates.. ",
    "difficulty": "Easy",
    "conceptTested": "F-x Area Integration definition"
  },
  {
    "id": "prac-physworkdone-10",
    "question": "Which of the following is a key NCERT statement regarding Work Done by Constant & Variable Forces?",
    "options": [
      "W = F s cos θ = F · s (Scalar quantity, SI Unit: Joule).",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: W = F s cos θ = F · s (Scalar quantity, SI Unit: Joule).",
    "difficulty": "Easy",
    "conceptTested": "Work Done by Constant & Variable Forces NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-work-1',
      questionText: 'A uniform force of (3i + j) N acts on a particle of mass 2 kg. Hence the particle is displaced from position (2i + k) m to position (4i + 3j - k) m. The work done by the force on the particle is: [NEET 2013]',
      options: [
        '9 J',
        '6 J',
        '13 J',
        '15 J'
      ],
      correctOption: 0,
      explanation: 'Force vector F = 3i + 1j + 0k N.\nDisplacement vector s = r₂ - r₁ = (4i + 3j - k) - (2i + 0j + k) = (2i + 3j - 2k) m.\nWork W = F · s = (3)(2) + (1)(3) + (0)(-2) = 6 + 3 + 0 = 9 Joules.',
      examName: 'NEET',
      year: 2013
    },
    {
      id: 'pyq-work-2',
      questionText: 'A force F acting on an object varies with distance x as shown in the force-distance graph. The work done by the force in moving the object from x = 0 to x = 6 m is: [NEET 2019]',
      options: [
        '18 J',
        '13.5 J',
        '9 J',
        '24 J'
      ],
      correctOption: 1,
      explanation: 'Work done equals the total area under F-x curve from x = 0 to x = 6 m.\nTrapezoid/Triangle geometry: Area = (1/2) × base × height for triangular section + rectangular section = 13.5 J.',
      examName: 'NEET',
      year: 2019
    }
  ]
};
