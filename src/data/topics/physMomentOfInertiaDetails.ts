import { DetailedTopicContent } from '../../types/neet';

export const physMomentOfInertiaDetails: DetailedTopicContent = {
  topicId: 'phys-moment-of-inertia',
  topicName: 'Moment of Inertia & Radius of Gyration',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Rotational Motion',
  chapter: 'System of Particles and Rotational Motion',

  whatIsThisTopic: 'Moment of Inertia (I), also called Rotational Inertia, is the quantitative measure of a rigid body\'s resistance to change in its state of rotational motion about a specified axis. Just as inertial mass (m) resists changes in linear velocity in translational dynamics, moment of inertia resists changes in angular velocity in rotational dynamics. Unlike linear mass (which is an intrinsic constant scalar property of an object regardless of motion), the moment of inertia depends strongly NOT ONLY on the total mass, but also on the shape, size, distribution of mass relative to the axis, and the specific orientation of the axis of rotation. This topic covers discrete and continuous moment of inertia derivations, radius of gyration, standard body formulas (rod, ring, disc, cylinder, spheres), Parallel-Axis Theorem, Perpendicular-Axis Theorem, composite body calculation algorithms, and cutout cavity theorems.',

  basicIdea: [
    '1. Fundamental Definition: For a system of discrete masses m_i at perpendicular distances r_i from the rotation axis, I = sum m_i r_i^2. For continuous bodies, I = int r^2 dm.',
    '2. Physical Intuition: Concentrating mass further away from the axis of rotation dramatically INCREASES the moment of inertia (due to the r^2 term). For equal mass and radius, a Ring has a LARGER moment of inertia than a Disc, which has a LARGER moment of inertia than a Solid Sphere!',
    '3. Radius of Gyration (k): The effective radial distance from the rotation axis at which, if the total mass M were concentrated as a single point mass, it would possess the exact same moment of inertia: I = M k^2 => k = sqrt(I / M).',
    '4. Parallel-Axis Theorem: I = I_cm + M d^2. Relates moment of inertia about ANY arbitrary axis I to a PARALLEL axis passing through the CENTRE OF MASS I_cm, where d is the perpendicular distance between axes. Valid for 1D, 2D, and 3D bodies!',
    '5. Perpendicular-Axis Theorem: I_z = I_x + I_y. Relates the out-of-plane perpendicular axis I_z to two mutually perpendicular in-plane axes I_x and I_y intersecting at the same point. STRICTLY VALID ONLY FOR 2D PLANAR LAMINAS!'
  ],

  importantTerms: [
    {
      term: 'Moment of Inertia (Rotational Inertia)',
      symbol: 'I',
      definition: 'The scalar rotational inertia of a body about a specific axis: I = sum m_i r_i^2 = int r^2 dm.',
      neetNote: 'SI unit: kg m^2. Dimensions: [M L^2 T^0]. Depends on total mass, shape, and axis of rotation.'
    },
    {
      term: 'Radius of Gyration',
      symbol: 'k',
      definition: 'The effective distance from the axis of rotation where the entire mass M could be concentrated: k = sqrt(I / M).',
      neetNote: 'SI unit: meter (m). Dimensions: [M^0 L^1 T^0]. Pure geometric indicator of mass distribution.'
    },
    {
      term: 'Parallel-Axis Theorem',
      definition: 'Mathematical relation I = I_cm + M d^2 where I_cm MUST pass through the centre of mass.',
      neetNote: 'Crucial rule: You CANNOT use I = I_1 + M d^2 if I_1 does NOT pass through the Centre of Mass!'
    },
    {
      term: 'Perpendicular-Axis Theorem',
      definition: 'Planar theorem I_z = I_x + I_y for a 2D sheet in xy-plane.',
      neetNote: 'Strictly restricted to 2D thin planar sheets/laminas (rings, discs, flat sheets). CANNOT be applied to 3D spheres or cylinders!'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Definition, Dependence & Radius of Gyration',
      paragraphs: [
        'Definition of Moment of Inertia:',
        'When a body rotates about a fixed axis with angular velocity $\\omega$, its total rotational kinetic energy $K_{rot}$ is the sum of translational kinetic energies of all its constituent particles:',
        '$$K_{rot} = \\sum \\frac{1}{2} m_i v_i^2 = \\sum \\frac{1}{2} m_i (r_i \\omega)^2 = \\frac{1}{2} \\left( \\sum m_i r_i^2 \\right) \\omega^2 = \\frac{1}{2} I \\omega^2$$',
        'where $I = \\sum m_i r_i^2$ is defined as the Moment of Inertia.',
        'Dependence of Moment of Inertia:',
        '• Total Mass of the body $M$.',
        '• Shape and Size of the body.',
        '• Distribution of mass relative to the axis of rotation ($r^2$ factor).',
        '• Orientation and location of the Axis of Rotation.',
        'Radius of Gyration ($k$):',
        'If a body of mass $M$ and moment of inertia $I$ about an axis is imagined to be compressed into a thin ring or point mass of radius $k$ about the same axis:',
        '$$I = M k^2 \\implies k = \\sqrt{\\frac{I}{M}}$$',
        'Physical Significance: $k$ measures how far on average the mass is distributed from the rotation axis.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="180" fill="#f8fafc" rx="12"/>
          <!-- Axis Line -->
          <line x1="100" y1="20" x2="100" y2="160" stroke="#0f172a" stroke-width="4" stroke-dasharray="6 4"/>
          <text x="100" y="15" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Axis of Rotation</text>
          <!-- Irregular Distributed Mass -->
          <path d="M 180,40 Q 280,30 320,80 T 260,150 Q 170,140 180,40 Z" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
          <text x="250" y="95" fill="#334155" font-size="12" font-weight="bold" text-anchor="middle">Distributed Mass M (Moment of Inertia I)</text>
          <!-- Equivalent Radius of Gyration Circle -->
          <circle cx="100" cy="90" r="110" fill="none" stroke="#2563eb" stroke-dasharray="4 3" stroke-width="2"/>
          <line x1="100" y1="90" x2="210" y2="90" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-k)"/>
          <text x="155" y="82" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">k = √(I / M)</text>
          <defs>
            <marker id="arrow-k" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/></marker>
          </defs>
        </svg>`,
        caption: 'Figure 1: Concept of Radius of Gyration k compressing distributed body mass M into an equivalent radius.'
      }
    },
    {
      heading: '2. Master Table of Standard Bodies & Moments of Inertia',
      paragraphs: [
        'NEET UG frequently tests moments of inertia of standard geometric shapes about various axes. Memorize this table thoroughly:'
      ],
      tables: [
        {
          headers: ['Body & Shape', 'Axis Description', 'Moment of Inertia (I)', 'Radius of Gyration (k)'],
          rows: [
            ['Thin Uniform Rod (M, L)', 'Perpendicular through Centre (COM)', 'I = (1/12) M L²', 'k = L / √12'],
            ['Thin Uniform Rod (M, L)', 'Perpendicular through One End', 'I = (1/3) M L²', 'k = L / √3'],
            ['Circular Ring (M, R)', 'Central axis perpendicular to plane', 'I = M R²', 'k = R'],
            ['Circular Ring (M, R)', 'Along any Diameter in plane', 'I = (1/2) M R²', 'k = R / √2'],
            ['Circular Ring (M, R)', 'Tangent perpendicular to plane', 'I = 2 M R²', 'k = R √2'],
            ['Circular Ring (M, R)', 'Tangent in the plane of ring', 'I = (3/2) M R²', 'k = R √(3/2)'],
            ['Circular Disc (M, R)', 'Central axis perpendicular to plane', 'I = (1/2) M R²', 'k = R / √2'],
            ['Circular Disc (M, R)', 'Along any Diameter in plane', 'I = (1/4) M R²', 'k = R / 2'],
            ['Circular Disc (M, R)', 'Tangent perpendicular to plane', 'I = (3/2) M R²', 'k = R √(3/2)'],
            ['Circular Disc (M, R)', 'Tangent in the plane of disc', 'I = (5/4) M R²', 'k = R √(5/4)'],
            ['Solid Cylinder (M, R, L)', 'Own longitudinal central axis', 'I = (1/2) M R²', 'k = R / √2'],
            ['Hollow Cylinder / Shell (M, R)', 'Own longitudinal central axis', 'I = M R²', 'k = R'],
            ['Solid Sphere (M, R)', 'Along any Diameter through center', 'I = (2/5) M R²', 'k = R √(2/5)'],
            ['Solid Sphere (M, R)', 'Along any Tangent to surface', 'I = (7/5) M R²', 'k = R √(7/5)'],
            ['Hollow Sphere / Shell (M, R)', 'Along any Diameter through center', 'I = (2/3) M R²', 'k = R √(2/3)'],
            ['Hollow Sphere / Shell (M, R)', 'Along any Tangent to surface', 'I = (5/3) M R²', 'k = R √(5/3)']
          ]
        }
      ]
    },
    {
      heading: '3. Theorems of Moment of Inertia (Derivations & Strict Conditions)',
      paragraphs: [
        'Theorem 1: Parallel-Axis Theorem',
        'Statement: The moment of inertia $I$ of any rigid body about an arbitrary axis is equal to its moment of inertia $I_{cm}$ about a parallel axis passing through its CENTRE OF MASS plus the product of total mass $M$ and the square of perpendicular distance $d$ between the two parallel axes:',
        '$$I = I_{cm} + M d^2$$',
        'Derivation:',
        'Let origin be at Centre of Mass ($X_{cm} = 0, Y_{cm} = 0$). Consider elemental mass $dm$ at $(x, y)$. Distance from parallel axis shifted by $d$ along x-axis is $r = \\sqrt{(x + d)^2 + y^2}$.',
        '$$I = \\int r^2 dm = \\int [(x + d)^2 + y^2] dm = \\int (x^2 + y^2) dm + d^2 \\int dm + 2d \\int x dm$$',
        'Since origin is at COM, $\\int x dm = M X_{cm} = 0$. Also $\\int (x^2 + y^2) dm = I_{cm}$ and $\\int dm = M$.',
        '$$I = I_{cm} + M d^2 \\quad (\\text{Q.E.D.})$$',
        'CRITICAL RULE: The reference axis $I_{cm}$ MUST pass through the Centre of Mass. You CANNOT apply $I_B = I_A + M d^2$ if neither A nor B passes through the COM!',
        'Theorem 2: Perpendicular-Axis Theorem',
        'Statement: For a 2D thin planar lamina lying in the xy-plane, the moment of inertia $I_z$ about a z-axis perpendicular to the plane passing through origin $O$ is equal to the sum of moments of inertia about two mutually perpendicular in-plane axes $I_x$ and $I_y$ passing through $O$:',
        '$$I_z = I_x + I_y$$',
        'Derivation:',
        'For element $dm$ at $(x, y)$ in plane, distance from z-axis is $r = \\sqrt{x^2 + y^2}$.',
        '$$I_z = \\int r^2 dm = \\int (x^2 + y^2) dm = \\int y^2 dm + \\int x^2 dm = I_x + I_y \\quad (\\text{Q.E.D.})$$',
        'STRICT LIMITATION: Valid ONLY for 2D thin planar bodies (sheets, rings, discs). Completely INVALID for 3D solids (spheres, cylinders, cubes)!'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="180" fill="#f8fafc" rx="12"/>
          <!-- Parallel Axis Diagram (Left) -->
          <g transform="translate(20, 0)">
            <line x1="80" y1="20" x2="80" y2="160" stroke="#2563eb" stroke-width="3"/>
            <text x="80" y="15" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">COM Axis (I_cm)</text>
            <line x1="170" y1="20" x2="170" y2="160" stroke="#ef4444" stroke-width="3"/>
            <text x="170" y="15" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">Parallel Axis (I)</text>
            <line x1="80" y1="90" x2="170" y2="90" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-d)" marker-start="url(#arrow-d)"/>
            <text x="125" y="82" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">d</text>
            <text x="125" y="170" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">I = I_cm + M d²</text>
          </g>
          <!-- Perpendicular Axis Diagram (Right) -->
          <g transform="translate(270, 0)">
            <ellipse cx="120" cy="100" rx="70" ry="35" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
            <line x1="50" y1="100" x2="190" y2="100" stroke="#3b82f6" stroke-width="2"/>
            <text x="195" y="105" fill="#1d4ed8" font-size="11" font-weight="bold">I_x</text>
            <line x1="120" y1="135" x2="120" y2="65" stroke="#059669" stroke-width="2"/>
            <text x="125" y="60" fill="#047857" font-size="11" font-weight="bold">I_y</text>
            <line x1="120" y1="100" x2="120" y2="25" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-z)"/>
            <text x="120" y="18" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">I_z = I_x + I_y</text>
          </g>
          <defs>
            <marker id="arrow-d" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#0f172a"/></marker>
            <marker id="arrow-z" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker>
          </defs>
        </svg>`,
        caption: 'Figure 2: Geometrical definitions of Parallel-Axis Theorem (Left) and Perpendicular-Axis Theorem (Right).'
      }
    },
    {
      heading: '4. Theorem Selection Algorithm & Cavity Method for Moment of Inertia',
      paragraphs: [
        'Systematic Algorithm for Arbitrary Axis Problems:',
        'Step 1: Identify the body shape and its standard moment of inertia about the CENTRE OF MASS ($I_{cm}$).',
        'Step 2: Inspect the target axis. Is it parallel to the COM axis? If YES, measure perpendicular distance $d$ and apply $I_{target} = I_{cm} + M d^2$.',
        'Step 3: Is it an in-plane axis for a 2D planar body? If YES, use symmetry $I_x = I_y = I_z / 2$ (via perpendicular-axis theorem).',
        'Cavity / Removed Mass Theorem:',
        'When a portion of mass $m_{cut}$ is removed from a complete body of mass $M$:',
        '$$I_{remaining} = I_{original} - I_{cutout}$$',
        'Note: Both $I_{original}$ and $I_{cutout}$ MUST be calculated about the SAME target axis of rotation!'
      ]
    }
  ],

  formulae: [
    {
      formulaName: 'Discrete Moment of Inertia',
      expression: 'I = \\sum m_i r_i^2',
      explanation: 'Sum of products of individual particle masses and square of perpendicular distances to axis.'
    },
    {
      formulaName: 'Radius of Gyration Formula',
      expression: 'k = \\sqrt{\\frac{I}{M}} \\implies I = M k^2',
      explanation: 'Calculates equivalent radial distance k for body mass M.'
    },
    {
      formulaName: 'Parallel-Axis Theorem',
      expression: 'I = I_{cm} + M d^2',
      explanation: 'Relates moment of inertia I about parallel axis at distance d from COM axis I_cm.'
    },
    {
      formulaName: 'Perpendicular-Axis Theorem',
      expression: 'I_z = I_x + I_y',
      explanation: 'Relates perpendicular out-of-plane axis I_z to sum of in-plane perpendicular axes I_x and I_y for 2D lamina.'
    },
    {
      formulaName: 'Cavity Method for Moment of Inertia',
      expression: 'I_{rem} = I_{orig} - I_{cut}',
      explanation: 'Moment of inertia of remaining portion after removing a part from a uniform body.'
    }
  ],

  neetImportantPoints: [
    'Parallel-Axis theorem applies to 1D, 2D, and 3D objects. Perpendicular-Axis theorem applies ONLY to 2D thin planar sheets.',
    'For a given total mass M and radius R, order of moment of inertia about central axis: I_ring (MR²) > I_shell ((2/3)MR²) > I_disc ((1/2)MR²) > I_solid_sphere ((2/5)MR²).',
    'Solid sphere has the SMALLEST moment of inertia for a given mass and radius because its mass is concentrated closest to the center.'
  ],

  commonConfusions: [
    {
      misconception: 'Applying Parallel-Axis Theorem using an axis that is NOT the Centre of Mass axis.',
      correction: 'In I = I_cm + M d², the base axis MUST pass through the Centre of Mass. You cannot shift between two non-COM parallel axes directly without passing through I_cm!'
    },
    {
      misconception: 'Applying Perpendicular-Axis Theorem to a 3D solid sphere or cylinder.',
      correction: 'Perpendicular-Axis theorem is strictly mathematical for 2D planar laminas (z = 0 plane).'
    }
  ],

  quickRevision: [
    'I = Σ m r² = M k²',
    'Ring: I_cm = MR² | Disc: I_cm = (1/2)MR² | Solid Sphere: I_cm = (2/5)MR² | Hollow Sphere: (2/3)MR²',
    'Thin Rod: I_cm = (1/12)ML² | I_end = (1/3)ML²',
    'Parallel-Axis Theorem: I = I_cm + M d² (1D, 2D, 3D)',
    'Perpendicular-Axis Theorem: Iz = Ix + Iy (2D Planar only)'
  ],

  practiceQuestions: [
  {
    "questionId": "pq-moi-1",
    "questionText": "The ratio of radius of gyration of a solid sphere of mass M and radius R about its tangent to that of a hollow sphere of same mass and radius about its tangent is:",
    "options": [
      "√(21) / 5",
      "√(21 / 25)",
      "√(7 / 5)",
      "√(3) / 2"
    ],
    "correctOption": 1,
    "explanation": "Solid sphere tangent MI: I1 = (2/5) M R² + M R² = (7/5) M R² => k1 = R √(7/5).\nHollow sphere tangent MI: I2 = (2/3) M R² + M R² = (5/3) M R² => k2 = R √(5/3).\nRatio k1 / k2 = √( (7/5) / (5/3) ) = √( (7 * 3) / (5 * 5) ) = √(21 / 25) = √(21) / 5.",
    "difficulty": "Medium"
  },
  {
    "questionId": "pq-moi-2",
    "questionText": "Four point masses each of mass m are placed at the four corners of a square of side a. The moment of inertia of the system about an axis passing through one corner and perpendicular to the plane of the square is:",
    "options": [
      "2 m a²",
      "3 m a²",
      "4 m a²",
      "√2 m a²"
    ],
    "correctOption": 2,
    "explanation": "Let origin be at the chosen corner (0,0).\nMass 1 at (0,0): r1 = 0.\nMass 2 at (a,0): r2 = a.\nMass 3 at (0,a): r3 = a.\nMass 4 at (a,a): r4 = √(a² + a²) = a √2.\nTotal MI I = m(0)² + m(a)² + m(a)² + m(a √2)² = m a² + m a² + 2 m a² = 4 m a².",
    "difficulty": "Medium"
  },
  {
    "id": "prac-physmomentofinertia-3",
    "question": "Regarding Moment of Inertia & Radius of Gyration, which of the following statements correctly resolves a common misconception about \"Applying Parallel-Axis Theorem using an axis that is NOT the Centre of Mass axis.\"?",
    "options": [
      "In I = I_cm + M d², the base axis MUST pass through the Centre of Mass. You cannot shift between two non-COM parallel axes directly without passing through I_cm!",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Moment of Inertia & Radius of Gyration - Conceptual Clarity"
  },
  {
    "id": "prac-physmomentofinertia-4",
    "question": "Regarding Moment of Inertia & Radius of Gyration, which of the following statements correctly resolves a common misconception about \"Applying Perpendicular-Axis Theorem to a 3D solid sphere or cylinder.\"?",
    "options": [
      "Perpendicular-Axis theorem is strictly mathematical for 2D planar laminas (z = 0 plane).",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Moment of Inertia & Radius of Gyration - Conceptual Clarity"
  },
  {
    "id": "prac-physmomentofinertia-5",
    "question": "In the study of Moment of Inertia & Radius of Gyration, what is the exact definition and significance of \"Moment of Inertia (Rotational Inertia)\"?",
    "options": [
      "The scalar rotational inertia of a body about a specific axis: I = sum m_i r_i^2 = int r^2 dm.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The scalar rotational inertia of a body about a specific axis: I = sum m_i r_i^2 = int r^2 dm.. SI unit: kg m^2. Dimensions: [M L^2 T^0]. Depends on total mass, shape, and axis of rotation.",
    "difficulty": "Easy",
    "conceptTested": "Moment of Inertia (Rotational Inertia) definition"
  },
  {
    "id": "prac-physmomentofinertia-6",
    "question": "In the study of Moment of Inertia & Radius of Gyration, what is the exact definition and significance of \"Radius of Gyration\"?",
    "options": [
      "The effective distance from the axis of rotation where the entire mass M could be concentrated: k = sqrt(I / M).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The effective distance from the axis of rotation where the entire mass M could be concentrated: k = sqrt(I / M).. SI unit: meter (m). Dimensions: [M^0 L^1 T^0]. Pure geometric indicator of mass distribution.",
    "difficulty": "Easy",
    "conceptTested": "Radius of Gyration definition"
  },
  {
    "id": "prac-physmomentofinertia-7",
    "question": "In the study of Moment of Inertia & Radius of Gyration, what is the exact definition and significance of \"Parallel-Axis Theorem\"?",
    "options": [
      "Mathematical relation I = I_cm + M d^2 where I_cm MUST pass through the centre of mass.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Mathematical relation I = I_cm + M d^2 where I_cm MUST pass through the centre of mass.. Crucial rule: You CANNOT use I = I_1 + M d^2 if I_1 does NOT pass through the Centre of Mass!",
    "difficulty": "Easy",
    "conceptTested": "Parallel-Axis Theorem definition"
  },
  {
    "id": "prac-physmomentofinertia-8",
    "question": "In the study of Moment of Inertia & Radius of Gyration, what is the exact definition and significance of \"Perpendicular-Axis Theorem\"?",
    "options": [
      "Planar theorem I_z = I_x + I_y for a 2D sheet in xy-plane.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Planar theorem I_z = I_x + I_y for a 2D sheet in xy-plane.. Strictly restricted to 2D thin planar sheets/laminas (rings, discs, flat sheets). CANNOT be applied to 3D spheres or cylinders!",
    "difficulty": "Easy",
    "conceptTested": "Perpendicular-Axis Theorem definition"
  },
  {
    "id": "prac-physmomentofinertia-9",
    "question": "Which of the following is a key NCERT statement regarding Moment of Inertia & Radius of Gyration?",
    "options": [
      "I = Σ m r² = M k²",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: I = Σ m r² = M k²",
    "difficulty": "Easy",
    "conceptTested": "Moment of Inertia & Radius of Gyration NCERT High-Yield Point"
  },
  {
    "id": "prac-physmomentofinertia-10",
    "question": "Which of the following is a key NCERT statement regarding Moment of Inertia & Radius of Gyration?",
    "options": [
      "Ring: I_cm = MR² | Disc: I_cm = (1/2)MR² | Solid Sphere: I_cm = (2/5)MR² | Hollow Sphere: (2/3)MR²",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Ring: I_cm = MR² | Disc: I_cm = (1/2)MR² | Solid Sphere: I_cm = (2/5)MR² | Hollow Sphere: (2/3)MR²",
    "difficulty": "Easy",
    "conceptTested": "Moment of Inertia & Radius of Gyration NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-moi-1',
      questionText: 'The ratio of the radius of gyration of a thin uniform disc about an axis passing through its centre and normal to its plane to the radius of gyration of the disc about its diameter is: [NEET 2022]',
      options: [
        '√2 : 1',
        '1 : √2',
        '2 : 1',
        '1 : 2'
      ],
      correctOption: 0,
      explanation: 'For central normal axis: I1 = (1/2) M R² => k1 = R / √2.\nFor diameter axis: I2 = (1/4) M R² => k2 = R / 2.\nRatio k1 / k2 = (R / √2) / (R / 2) = 2 / √2 = √2 : 1.',
      examName: 'NEET',
      year: 2022
    },
    {
      id: 'pyq-moi-2',
      questionText: 'From a disc of radius R and mass M, a circular hole of diameter R, whose rim passes through the centre is cut. What is the moment of inertia of the remaining part of the disc about a perpendicular axis passing through the centre? [NEET 2016]',
      options: [
        '13 MR² / 32',
        '11 MR² / 32',
        '9 MR² / 32',
        '15 MR² / 32'
      ],
      correctOption: 0,
      explanation: 'Main disc MI about central axis I_orig = (1/2) M R².\nCutout radius r = R/2, cutout mass m = M/4.\nCutout COM is at distance d = R/2 from main center.\nCutout MI about its own COM = (1/2) m r² = (1/2) (M/4) (R/2)² = MR² / 32.\nCutout MI about main central axis (via Parallel-Axis theorem) = I_cut,cm + m d² = (MR²/32) + (M/4)(R/2)² = (MR²/32) + (MR²/16) = 3 MR² / 32.\nRemaining MI I_rem = I_orig - I_cut = (1/2) MR² - (3/32) MR² = (16/32 - 3/32) MR² = 13 MR² / 32.',
      examName: 'NEET',
      year: 2016
    }
  ]
};
