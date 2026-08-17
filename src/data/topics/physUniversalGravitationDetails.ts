import { DetailedTopicContent } from '../../types/neet';

export const physUniversalGravitationDetails: DetailedTopicContent = {
  topicId: 'phys-universal-gravitation',
  topicName: 'Universal Law of Gravitation & Gravitational Field',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Gravitation',
  chapter: 'Gravitation',

  whatIsThisTopic: 'Newton\'s Universal Law of Gravitation states that every point mass in the universe attracts every other point mass with a force directly proportional to the product of their masses and inversely proportional to the square of the distance separating their centers. Gravitational force is always attractive, conservative, central, and acts along the line joining the centers of the interacting bodies. This topic covers Newton\'s law, Cavendish\'s determination of the universal gravitational constant G, vector representation, principle of superposition for multi-body systems, gravitational field intensity Eg = F/m, field lines, and field distribution due to point masses, hollow thin spherical shells, and solid uniform spheres.',

  basicIdea: [
    'Universal Law of Gravitation: Gravitational force magnitude F = (G * m1 * m2) / r², where G = 6.674 × 10⁻¹¹ N·m²/kg² is a universal scalar constant.',
    'Gravitational forces form an action-reaction pair obeying Newton\'s Third Law: F12 = -F21. The force is independent of the intervening medium.',
    'Principle of Superposition: Net gravitational force on a mass due to multiple other masses is the vector sum of individual forces: F_net = ∑ F_i.',
    'Gravitational Field Intensity Eg is the gravitational force experienced per unit test mass at a point: Eg = F / m_test = (G * M) / r² (directed radially inward).',
    'Shell Theorem: Inside a uniform thin spherical shell of mass M and radius R, gravitational field intensity Eg = 0. Outside (r ≥ R), the shell attracts as if its entire mass M were concentrated at its geometric center.'
  ],

  importantTerms: [
    {
      term: 'Universal Gravitational Constant (G)',
      definition: 'A fundamental physical constant equal to 6.674 × 10⁻¹¹ N·m²/kg² (or m³·kg⁻¹·s⁻²). Dimensional formula: [M⁻¹ L³ T⁻²]. Determined experimentally by Henry Cavendish.'
    },
    {
      term: 'Central Force',
      definition: 'A force whose line of action always passes through a fixed point (origin/center) and whose magnitude depends solely on radial distance r. Gravitational torque about the center is always zero.'
    },
    {
      term: 'Principle of Superposition',
      definition: 'States that the gravitational force between any two point masses is completely unaffected by the presence of other surrounding masses. Net force is the vector sum of individual forces.'
    },
    {
      term: 'Gravitational Field Intensity (Eg)',
      definition: 'A vector quantity representing force experienced per unit mass placed at a point in space. Eg = F / m_test (Unit: N/kg or m/s²).'
    },
    {
      term: 'Shell Theorem',
      definition: 'A uniform spherical shell of mass exerts zero gravitational force on any mass located inside it, and acts as a point mass at its center for all external points.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Newton\'s Universal Law of Gravitation & Vector Form',
      paragraphs: [
        'Sir Isaac Newton formulated that the gravitational attraction F between two point masses m1 and m2 separated by distance r is:',
        'F = G · (m1 · m2) / r²',
        'where G = 6.674 × 10⁻¹¹ N·m²/kg² is the Universal Gravitational Constant. Notice that gravitational force is directly proportional to product of masses and follows an Inverse-Square Law with distance (F ∝ 1/r²).',
        'VECTOR REPRESENTATION:',
        'Let r12 be the position vector directed from mass m1 to mass m2, and r12 = |r12| = r. The vector force F21 exerted ON mass m2 BY mass m1 is directed TOWARD m1:',
        'F21 = - (G · m1 · m2 / r²) · r̂12 = - (G · m1 · m2 / r³) · r12',
        'Similarly, F12 = - F21. Thus, gravitational forces satisfy Newton\'s Third Law of Motion in strong vector form (action and reaction forces act along the line connecting centers).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="180" fill="#f8fafc" rx="12"/>
          <!-- Mass 1 -->
          <circle cx="120" cy="90" r="28" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
          <text x="120" y="95" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">m₁</text>
          
          <!-- Mass 2 -->
          <circle cx="380" cy="90" r="20" fill="#10b981" stroke="#047857" stroke-width="2"/>
          <text x="380" y="95" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">m₂</text>

          <!-- Connecting center line -->
          <line x1="120" y1="90" x2="380" y2="90" stroke="#94a3b8" stroke-dasharray="4 4" stroke-width="2"/>

          <!-- Force F21 on m2 toward m1 -->
          <line x1="380" y1="90" x2="280" y2="90" stroke="#ef4444" stroke-width="3.5" marker-end="url(#arrow-red)"/>
          <text x="330" y="75" fill="#dc2626" font-size="13" font-weight="bold" text-anchor="middle">F₂₁ (Force on m₂)</text>

          <!-- Force F12 on m1 toward m2 -->
          <line x1="120" y1="90" x2="220" y2="90" stroke="#3b82f6" stroke-width="3.5" marker-end="url(#arrow-blue)"/>
          <text x="170" y="75" fill="#1d4ed8" font-size="13" font-weight="bold" text-anchor="middle">F₁₂ (Force on m₁)</text>

          <!-- Separation distance indicator -->
          <line x1="120" y1="140" x2="380" y2="140" stroke="#334155" stroke-width="1.5"/>
          <line x1="120" y1="135" x2="120" y2="145" stroke="#334155" stroke-width="1.5"/>
          <line x1="380" y1="135" x2="380" y2="145" stroke="#334155" stroke-width="1.5"/>
          <text x="250" y="158" fill="#334155" font-size="13" font-weight="bold" text-anchor="middle">Separation r</text>

          <defs>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/>
            </marker>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/>
            </marker>
          </defs>
        </svg>`,
        caption: 'Figure 1: Mutual gravitational attraction between masses m₁ and m₂. Forces are equal in magnitude (F₁₂ = F₂₁) and opposite in direction.'
      }
    },
    {
      heading: '2. Principle of Superposition for Multiple Point Masses',
      paragraphs: [
        'When a mass m0 interacts with N surrounding point masses (m1, m2, m3, ..., mN), the individual gravitational forces exerted on m0 by each mass act independently of one another.',
        'The total net gravitational force F_net acting on m0 is equal to the vector sum of all individual gravitational forces:',
        'F_net = F01 + F02 + F03 + ... + F0N = ∑_{i=1}^{N} [ (G · m0 · mi / |ri|²) · r̂i ]',
        'NEET GEOMETRY TRAP: Since force is a vector quantity, you MUST resolve forces into orthogonal components (Fx and Fy) or use the triangle/parallelogram vector addition formula:',
        'F_net = √(F1² + F2² + 2 F1 F2 cos θ)',
        'For example, three equal masses m placed at vertices of an equilateral triangle of side L exert a net force of F_net = √3 · (G m² / L²) on each other, directed along the angle bisector.'
      ]
    },
    {
      heading: '3. Gravitational Field Intensity (Eg) & Field Lines',
      paragraphs: [
        'A source mass M creates a gravitational field in the space surrounding it. The Gravitational Field Intensity Eg at any point in space is defined as the gravitational force experienced per unit test mass placed at that point:',
        'Eg = F / m_test = (G · M) / r² (radially inward toward source mass M)',
        'SI Unit: N/kg or m/s². Dimensional Formula: [M⁰ L¹ T⁻²].',
        'GRAVITATIONAL FIELD LINES PROPERTIES:',
        '1. Continuous lines directed radially inward toward mass M (since gravity is purely attractive).',
        '2. Field line density (number of lines per unit cross-sectional area) is directly proportional to field intensity Eg.',
        '3. Field lines never intersect each other (otherwise two directions of field would exist at the intersection point).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="200" fill="#f8fafc" rx="12"/>
          <!-- Central Mass M -->
          <circle cx="250" cy="100" r="30" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
          <text x="250" y="105" fill="#ffffff" font-size="15" font-weight="bold" text-anchor="middle">Mass M</text>

          <!-- Radial Inward Field Lines -->
          <!-- Right -->
          <line x1="420" y1="100" x2="290" y2="100" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow-field)"/>
          <!-- Left -->
          <line x1="80" y1="100" x2="210" y2="100" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow-field)"/>
          <!-- Top -->
          <line x1="250" y1="10" x2="250" y2="60" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow-field)"/>
          <!-- Bottom -->
          <line x1="250" y1="190" x2="250" y2="140" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow-field)"/>
          <!-- Diagonals -->
          <line x1="370" y1="30" x2="275" y2="75" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow-field)"/>
          <line x1="130" y1="170" x2="225" y2="125" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow-field)"/>
          <line x1="130" y1="30" x2="225" y2="75" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow-field)"/>
          <line x1="370" y1="170" x2="275" y2="125" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow-field)"/>

          <defs>
            <marker id="arrow-field" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#0284c7"/>
            </marker>
          </defs>
        </svg>`,
        caption: 'Figure 2: Radially inward gravitational field lines surrounding a point mass M. Intensity decreases with distance as 1/r².'
      }
    },
    {
      heading: '4. Gravitational Field Intensity of Spherical Bodies (Shell vs Solid Sphere)',
      paragraphs: [
        '1. THIN HOLLOW SPHERICAL SHELL (Mass M, Radius R):',
        '• Exterior points (r ≥ R): Eg = G M / r² (behaves like a point mass concentrated at center).',
        '• Interior points (r < R): Eg = 0 (zero field inside shell because gravitational contributions from opposing shell elements cancel out perfectly).',
        '2. UNIFORM SOLID SPHERE (Mass M, Radius R):',
        '• Exterior points (r ≥ R): Eg = G M / r².',
        '• Surface points (r = R): Eg = G M / R² = g.',
        '• Interior points (r < R): Eg = (G M / R³) · r = g · (r / R). The field inside a solid sphere increases linearly with distance r from the center!'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="220" fill="#f8fafc" rx="12"/>
          <!-- Axes -->
          <line x1="50" y1="180" x2="460" y2="180" stroke="#334155" stroke-width="2"/>
          <line x1="50" y1="180" x2="50" y2="20" stroke="#334155" stroke-width="2"/>
          <text x="465" y="185" fill="#334155" font-size="12" font-weight="bold">r (distance from center)</text>
          <text x="45" y="15" fill="#334155" font-size="12" font-weight="bold">Field Eg</text>

          <!-- R marker -->
          <line x1="200" y1="180" x2="200" y2="40" stroke="#94a3b8" stroke-dasharray="4 3"/>
          <text x="195" y="198" fill="#475569" font-size="12" font-weight="bold">r = R</text>

          <!-- Solid Sphere Graph (Linear inside, 1/r^2 outside) -->
          <line x1="50" y1="180" x2="200" y2="60" stroke="#2563eb" stroke-width="3"/>
          <path d="M 200 60 Q 280 140 440 165" fill="none" stroke="#2563eb" stroke-width="3"/>
          <text x="110" y="110" fill="#1d4ed8" font-size="11" font-weight="bold">E ∝ r (Solid Sphere)</text>
          <text x="320" y="120" fill="#1d4ed8" font-size="11" font-weight="bold">E ∝ 1/r²</text>

          <!-- Shell Graph (0 inside, step jump at R, 1/r^2 outside) -->
          <line x1="50" y1="180" x2="200" y2="180" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 3"/>
          <circle cx="200" cy="180" r="4" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
          <circle cx="200" cy="60" r="4" fill="#dc2626"/>
          <text x="110" y="172" fill="#b91c1c" font-size="11" font-weight="bold">E = 0 (Shell)</text>
        </svg>`,
        caption: 'Figure 3: Gravitational field Eg vs distance r from center. Solid blue line = Uniform Solid Sphere. Red dashed line = Hollow Spherical Shell.'
      }
    }
  ],

  formulae: [
    {
      title: 'Newton\'s Universal Law of Gravitation',
      formula: 'F = \\frac{G \\cdot m_1 \\cdot m_2}{r^2}',
      meaning: 'Calculates the magnitude of attractive gravitational force between two point masses separated by distance r.',
      symbols: 'F = gravitational force (N), G = 6.674×10⁻¹¹ N·m²/kg², m1 & m2 = point masses (kg), r = distance between mass centers (m).',
      unit: 'Newton (N)',
      conditions: 'Valid for point masses or spherically symmetric bodies where r is measured between geometric centers.',
      whenToUse: 'Use whenever calculating mutual gravitational attraction between two known masses.',
      calculationExample: {
        problem: 'Calculate the gravitational force between two 50 kg spheres separated by a distance of 2 meters.',
        given: 'm1 = 50 kg, m2 = 50 kg, r = 2 m, G = 6.67×10⁻¹¹ N·m²/kg².',
        stepByStep: [
          'Formula: F = G · m1 · m2 / r²',
          'Substitute values: F = (6.67×10⁻¹¹) × (50) × (50) / (2)²',
          'Numerator: (6.67×10⁻¹¹) × 2500 = 1.6675×10⁻⁷ N',
          'Divide by 4: F = 1.6675×10⁻⁷ / 4 = 4.17 × 10⁻⁸ N'
        ],
        answer: '4.17 × 10⁻⁸ N'
      }
    },
    {
      title: 'Gravitational Field Intensity of Point Mass',
      formula: 'E_g = \\frac{G \\cdot M}{r^2}',
      meaning: 'Calculates the gravitational field strength (force per unit mass) at distance r from source mass M.',
      symbols: 'Eg = gravitational field intensity (N/kg or m/s²), M = source mass (kg), r = distance from source (m).',
      unit: 'N/kg or m/s²',
      conditions: 'Applies outside a point mass or external to a spherically symmetric distribution of mass.',
      whenToUse: 'Use when finding acceleration due to gravity or field strength caused by a primary mass M at distance r.',
      calculationExample: {
        problem: 'Find the gravitational field intensity at a point 3 × 10⁶ m from the center of a planet of mass 6 × 10²⁴ kg.',
        given: 'M = 6 × 10²⁴ kg, r = 3 × 10⁶ m, G = 6.67 × 10⁻¹¹ N·m²/kg².',
        stepByStep: [
          'Formula: Eg = G M / r²',
          'Substitute: Eg = (6.67×10⁻¹¹) × (6×10²⁴) / (3×10⁶)²',
          'Numerator: 4.002 × 10¹⁴',
          'Denominator: 9 × 10¹²',
          'Calculate: Eg = 4.002×10¹⁴ / 9×10¹² = 44.47 N/kg'
        ],
        answer: '44.47 N/kg'
      }
    },
    {
      title: 'Field Intensity Inside Uniform Solid Sphere',
      formula: 'E_{\\text{in}} = \\frac{G \\cdot M \\cdot r}{R^3} = g_{\\text{surface}} \\cdot \\left(\\frac{r}{R}\\right)',
      meaning: 'Gravitational field intensity inside a solid uniform sphere increases linearly from 0 at center to maximum g at surface.',
      symbols: 'Ein = field inside (N/kg), M = total mass of sphere (kg), R = radius of sphere (m), r = distance from center (r ≤ R).',
      unit: 'N/kg or m/s²',
      conditions: 'Applies strictly inside a uniform solid sphere of constant mass density ρ.',
      whenToUse: 'Use when finding gravitational field or acceleration at interior points of Earth or solid planets.',
      calculationExample: {
        problem: 'Calculate field intensity at r = R/2 inside a planet where surface gravity is g = 10 m/s².',
        given: 'g_surface = 10 m/s², r = R/2.',
        stepByStep: [
          'Formula: Ein = g_surface × (r / R)',
          'Substitute r = R/2: Ein = 10 × ((R/2) / R)',
          'Ein = 10 × 0.5 = 5 m/s²'
        ],
        answer: '5 m/s²'
      }
    }
  ],

  neetImportantPoints: [
    'Gravitational force is independent of the nature of intervening medium (unlike electrostatic force).',
    'G is a UNIVERSAL constant (same everywhere in universe), whereas g is a LOCAL variable that depends on mass, radius, altitude, and rotation.',
    'Inside a thin hollow shell, Eg = 0 and gravitational potential V is CONSTANT and equal to its value at the surface V = -GM/R.',
    'Inside a solid sphere, Eg increases linearly with r (Eg ∝ r), whereas outside it decreases as 1/r² (Eg ∝ 1/r²).'
  ],

  commonConfusions: [
    {
      misconception: 'Confusing G (Universal Gravitational Constant) with g (acceleration due to gravity).',
      correction: 'G = 6.674×10⁻¹¹ N·m²/kg² is a universal scalar constant. g = GM/R² is local acceleration due to gravity that varies with location and altitude.'
    },
    {
      misconception: 'Assuming gravitational field inside a solid sphere is zero.',
      correction: 'Gravitational field is zero inside a HOLLOW shell, but inside a SOLID sphere Eg = G M r / R³ increases linearly from 0 at center to max at surface!'
    }
  ],

  quickRevision: [
    'F = G m1 m2 / r² (Universal Inverse Square Law)',
    'Cavendish experiment: G = 6.674 × 10⁻¹¹ N·m²/kg²',
    'Inside Shell: Eg = 0 | Surface/Outside Shell: Eg = G M / r²',
    'Inside Solid Sphere: Eg = G M r / R³ | Surface: Eg = G M / R²'
  ],

  practiceQuestions: [
  {
    "id": "pq-univ-grav-1",
    "question": "Two spherical lead balls of mass 10 kg and 40 kg are placed with their centers separated by 2 m. Where should a third body of mass 2 kg be placed on the line joining their centers so that the net gravitational force on it is zero?",
    "options": [
      "0.67 m from the 10 kg ball",
      "1.33 m from the 10 kg ball",
      "0.50 m from the 10 kg ball",
      "1.00 m from the 10 kg ball"
    ],
    "correctAnswer": 0,
    "explanation": "Let x be the distance of the 2 kg mass from the 10 kg ball. Its distance from the 40 kg ball is (2 - x).\nFor net force to be zero: F1 = F2\n=> G (10) (2) / x² = G (40) (2) / (2 - x)²\n=> 10 / x² = 40 / (2 - x)² => 1 / x² = 4 / (2 - x)²\nTaking square root on both sides:\n1 / x = 2 / (2 - x) => 2 - x = 2x => 3x = 2 => x = 2/3 m ≈ 0.67 m from 10 kg ball.",
    "difficulty": "Medium"
  },
  {
    "id": "pq-univ-grav-2",
    "question": "The gravitational field intensity at a distance 2R from the center of a uniform solid sphere of radius R and mass M is E1. The field intensity at distance R/2 from the center is E2. The ratio E1 / E2 is:",
    "options": [
      "1 : 2",
      "2 : 1",
      "1 : 1",
      "1 : 4"
    ],
    "correctAnswer": 2,
    "explanation": "At r = 2R (outside): E1 = G M / (2R)² = G M / (4 R²).\nAt r = R/2 (inside solid sphere): E2 = (G M / R³) × (R/2) = G M / (2 R²).\nRatio E1 / E2 = [G M / (4 R²)] / [G M / (2 R²)] = (1/4) / (1/2) = 2/4 = 1/2.\nWait, let us re-check the ratio E1 / E2:\nE1 = GM / (4 R²)\nE2 = GM / (2 R²)\nE1 / E2 = (1/4) / (1/2) = 1/2.\nThus E1 : E2 = 1 : 2.",
    "difficulty": "Medium"
  },
  {
    "id": "prac-physuniversalgravitation-3",
    "question": "Regarding Universal Law of Gravitation & Gravitational Field, which of the following statements correctly resolves a common misconception about \"Confusing G (Universal Gravitational Constant) with g (acceleration due to gravity).\"?",
    "options": [
      "G = 6.674×10⁻¹¹ N·m²/kg² is a universal scalar constant. g = GM/R² is local acceleration due to gravity that varies with location and altitude.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Universal Law of Gravitation & Gravitational Field - Conceptual Clarity"
  },
  {
    "id": "prac-physuniversalgravitation-4",
    "question": "Regarding Universal Law of Gravitation & Gravitational Field, which of the following statements correctly resolves a common misconception about \"Assuming gravitational field inside a solid sphere is zero.\"?",
    "options": [
      "Gravitational field is zero inside a HOLLOW shell, but inside a SOLID sphere Eg = G M r / R³ increases linearly from 0 at center to max at surface!",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Universal Law of Gravitation & Gravitational Field - Conceptual Clarity"
  },
  {
    "id": "prac-physuniversalgravitation-5",
    "question": "In the study of Universal Law of Gravitation & Gravitational Field, what is the exact definition and significance of \"Universal Gravitational Constant (G)\"?",
    "options": [
      "A fundamental physical constant equal to 6.674 × 10⁻¹¹ N·m²/kg² (or m³·kg⁻¹·s⁻²). Dimensional formula: [M⁻¹ L³ T⁻²]. Determined experimentally by Henry Cavendish.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A fundamental physical constant equal to 6.674 × 10⁻¹¹ N·m²/kg² (or m³·kg⁻¹·s⁻²). Dimensional formula: [M⁻¹ L³ T⁻²]. Determined experimentally by Henry Cavendish.. ",
    "difficulty": "Easy",
    "conceptTested": "Universal Gravitational Constant (G) definition"
  },
  {
    "id": "prac-physuniversalgravitation-6",
    "question": "In the study of Universal Law of Gravitation & Gravitational Field, what is the exact definition and significance of \"Central Force\"?",
    "options": [
      "A force whose line of action always passes through a fixed point (origin/center) and whose magnitude depends solely on radial distance r. Gravitational torque about the center is always zero.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A force whose line of action always passes through a fixed point (origin/center) and whose magnitude depends solely on radial distance r. Gravitational torque about the center is always zero.. ",
    "difficulty": "Easy",
    "conceptTested": "Central Force definition"
  },
  {
    "id": "prac-physuniversalgravitation-7",
    "question": "In the study of Universal Law of Gravitation & Gravitational Field, what is the exact definition and significance of \"Principle of Superposition\"?",
    "options": [
      "States that the gravitational force between any two point masses is completely unaffected by the presence of other surrounding masses. Net force is the vector sum of individual forces.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "States that the gravitational force between any two point masses is completely unaffected by the presence of other surrounding masses. Net force is the vector sum of individual forces.. ",
    "difficulty": "Easy",
    "conceptTested": "Principle of Superposition definition"
  },
  {
    "id": "prac-physuniversalgravitation-8",
    "question": "In the study of Universal Law of Gravitation & Gravitational Field, what is the exact definition and significance of \"Gravitational Field Intensity (Eg)\"?",
    "options": [
      "A vector quantity representing force experienced per unit mass placed at a point in space. Eg = F / m_test (Unit: N/kg or m/s²).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A vector quantity representing force experienced per unit mass placed at a point in space. Eg = F / m_test (Unit: N/kg or m/s²).. ",
    "difficulty": "Easy",
    "conceptTested": "Gravitational Field Intensity (Eg) definition"
  },
  {
    "id": "prac-physuniversalgravitation-9",
    "question": "In the study of Universal Law of Gravitation & Gravitational Field, what is the exact definition and significance of \"Shell Theorem\"?",
    "options": [
      "A uniform spherical shell of mass exerts zero gravitational force on any mass located inside it, and acts as a point mass at its center for all external points.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A uniform spherical shell of mass exerts zero gravitational force on any mass located inside it, and acts as a point mass at its center for all external points.. ",
    "difficulty": "Easy",
    "conceptTested": "Shell Theorem definition"
  },
  {
    "id": "prac-physuniversalgravitation-10",
    "question": "Which of the following is a key NCERT statement regarding Universal Law of Gravitation & Gravitational Field?",
    "options": [
      "F = G m1 m2 / r² (Universal Inverse Square Law)",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: F = G m1 m2 / r² (Universal Inverse Square Law)",
    "difficulty": "Easy",
    "conceptTested": "Universal Law of Gravitation & Gravitational Field NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-univ-grav-1',
      year: 2021,
      exam: 'NEET',
      question: 'A body of mass 60 g experiences a gravitational force of 3.0 N when placed at a particular point. The magnitude of the gravitational field intensity at that point is:',
      options: [
        '50 N/kg',
        '20 N/kg',
        '180 N/kg',
        '0.05 N/kg'
      ],
      correctAnswer: 0,
      explanation: 'Given: mass m = 60 g = 60 × 10⁻³ kg = 0.06 kg, Force F = 3.0 N.\nGravitational Field Intensity Eg = F / m\n=> Eg = 3.0 N / 0.06 kg = 300 / 6 = 50 N/kg.\nConcept Tested: Definition of Gravitational Field Intensity Eg = F / m.\nNEET Takeaway: Always convert mass into standard SI units (kg) before dividing.',
      difficulty: 'Easy',
      conceptTested: 'Gravitational Field Intensity Definition',
      classification: 'Direct',
      marks: 4,
      ncertReference: 'NCERT Physics Class 11 Chapter 8 - Gravitation'
    },
    {
      id: 'pyq-univ-grav-2',
      year: 2017,
      exam: 'NEET',
      question: 'Two astronauts are floating in gravity-free space after having lost contact with their spaceship. The two will:',
      options: [
        'Move towards each other due to mutual gravitational attraction',
        'Move away from each other',
        'Will become stationary',
        'Keep floating at the same distance between them'
      ],
      correctAnswer: 0,
      explanation: 'In gravity-free space, no external gravitational forces act on the two astronauts. However, due to Newton\'s Law of Gravitation, any two masses exert a mutual attractive gravitational force F = G m1 m2 / r² on each other. Thus, they will accelerate towards each other under this weak mutual attraction.',
      difficulty: 'Easy',
      conceptTested: 'Universal Nature of Gravitational Attraction',
      classification: 'Direct',
      marks: 4,
      ncertReference: 'NCERT Physics Class 11 Chapter 8 - Gravitation'
    }
  ]
};
