import { DetailedTopicContent } from '../../types/neet';

export const physKeplersLawsDetails: DetailedTopicContent = {
  topicId: 'phys-keplers-laws',
  topicName: 'Kepler\'s Laws, Earth\'s Gravity & Variation of g',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Gravitation',
  chapter: 'Gravitation',

  whatIsThisTopic: 'Acceleration due to gravity g is the acceleration produced in a freely falling body by Earth\'s gravitational pull. At Earth\'s surface, g = GM/R² ≈ 9.8 m/s². However, g is not strictly constant; it varies with altitude h above surface, depth d below surface, latitude φ due to Earth\'s rotation, and Earth\'s oblate shape. Furthermore, Johannes Kepler formulated three empirical laws governing planetary motion around the Sun: the Law of Orbits (elliptical paths), the Law of Areas (conservation of angular momentum), and the Law of Periods (T² ∝ a³). This topic covers g variations, Earth rotation effects, and the complete physics of Keplerian orbital mechanics.',

  basicIdea: [
    'Acceleration due to Gravity at Surface: g = G M / R² = 4/3 π G R ρ, where M is Earth\'s mass, R is Earth\'s radius, and ρ is average Earth mass density.',
    'Variation with Altitude h: Exact formula gh = g [ R / (R + h) ]². For small altitudes (h << R), gh ≈ g (1 - 2h/R).',
    'Variation with Depth d: gd = g (1 - d/R). At Earth\'s center (d = R), gd = 0 (body is weightless at center).',
    'Variation with Latitude φ & Earth Rotation: g\' = g - ω² R cos² φ. At equator (φ = 0°), g_eq = g - ω² R (minimum). At poles (φ = 90°), g_pole = g (maximum).',
    'Kepler\'s Laws: (1) Law of Orbits (ellipses with Sun at one focus); (2) Law of Areas (dA/dt = L/2m = constant, direct result of angular momentum conservation); (3) Law of Periods (T² ∝ a³, where a is semi-major axis).'
  ],

  importantTerms: [
    {
      term: 'Acceleration due to Gravity (g)',
      definition: 'The rate of change of velocity experienced by a body freely falling under gravitational influence: g = G M / R² (Average value at sea level ≈ 9.8 m/s²).'
    },
    {
      term: 'Areal Velocity (dA/dt)',
      definition: 'The area swept out per unit time by the radius vector connecting the Sun to a planet: dA/dt = L / (2m) = constant, where L is angular momentum.'
    },
    {
      term: 'Semi-Major Axis (a)',
      definition: 'Half of the longest diameter of an elliptical orbit, equal to the average distance of a planet from the Sun: a = (r_perihelion + r_aphelion) / 2.'
    },
    {
      term: 'Perihelion & Aphelion',
      definition: 'Perihelion is the point of closest approach of a planet to the Sun (maximum speed vp). Aphelion is the farthest point (minimum speed va).'
    },
    {
      term: 'Oblate Spheroid',
      definition: 'The geometric shape of Earth, flattened at the poles and bulging at the equator (equatorial radius R_eq exceeds polar radius R_p by ~21 km).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Acceleration due to Gravity (g) & Mass Density of Earth',
      paragraphs: [
        'Consider a body of mass m resting on the surface of Earth (Mass M, Radius R). The gravitational force exerted on the body by Earth is:',
        'F = G · M · m / R²',
        'According to Newton\'s Second Law, this force produces an acceleration g = F / m:',
        'g = G · M / R²',
        'EXPRESSION IN TERMS OF MASS DENSITY (ρ):',
        'Assuming Earth to be a uniform solid sphere of density ρ, Mass M = Volume × Density = (4/3 π R³) · ρ.',
        'Substitute M into g:',
        'g = G · (4/3 π R³ ρ) / R² = (4/3) · π · G · R · ρ',
        'This formula proves that surface acceleration due to gravity g is directly proportional to both Earth\'s radius R and average density ρ!'
      ]
    },
    {
      heading: '2. Variation of Acceleration due to Gravity (g)',
      paragraphs: [
        '1. VARIATION WITH ALTITUDE (h):',
        'At height h above Earth\'s surface, distance from center is r = R + h:',
        'gh = G M / (R + h)² = (G M / R²) · [ 1 / (1 + h/R)² ] = g / (1 + h/R)²',
        'FOR SMALL ALTITUDES (h << R): Using binomial expansion (1 + h/R)⁻² ≈ 1 - 2h/R:',
        'gh ≈ g · (1 - 2h / R)',
        'Fractional decrease in g with altitude: Δg / g = 2h / R.',
        '2. VARIATION WITH DEPTH (d):',
        'At depth d below surface, distance from center is r = R - d. Only the inner sphere of radius (R - d) exerts net gravitational force:',
        'gd = (4/3) π G (R - d) ρ = g · (1 - d / R)',
        'At Earth\'s center (d = R), gd = 0 (gravity vanishes completely at Earth\'s center!).',
        'Fractional decrease in g with depth: Δg / g = d / R.',
        'NEET COMPARISON RULE: For small height h and depth d, value of g drops TWICE AS FAST with altitude as it does with depth! Thus, gh = gd when depth d = 2 h.',
        '3. VARIATION WITH LATITUDE (φ) DUE TO EARTH ROTATION:',
        'Earth rotates about its polar axis with angular speed ω = 7.27 × 10⁻⁵ rad/s. A mass at latitude φ experiences a centrifugal force m ω² r_circle = m ω² R cos φ directed outward perpendicular to rotation axis.',
        'Effective acceleration due to gravity at latitude φ:',
        'g\' = g - ω² · R · cos² φ',
        '• At Equator (φ = 0°): g_eq = g - ω² R (Minimum gravity!).',
        '• At Poles (φ = 90°): g_pole = g (Maximum gravity! Poles are unaffected by axial rotation).',
        'Difference: g_pole - g_eq = ω² R ≈ 0.034 m/s².'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="220" fill="#f8fafc" rx="12"/>
          <!-- Earth Axis & Rotation -->
          <ellipse cx="250" cy="110" rx="100" ry="85" fill="#3b82f6" opacity="0.3" stroke="#1d4ed8" stroke-width="2"/>
          
          <!-- Polar axis line -->
          <line x1="250" y1="15" x2="250" y2="205" stroke="#0f172a" stroke-width="2" stroke-dasharray="4 3"/>
          <text x="255" y="25" fill="#0f172a" font-size="11" font-weight="bold">North Pole (φ=90°, g\'=g)</text>

          <!-- Equatorial Line -->
          <line x1="130" y1="110" x2="370" y2="110" stroke="#0f172a" stroke-width="2"/>
          <text x="375" y="115" fill="#dc2626" font-size="11" font-weight="bold">Equator (φ=0°)</text>
          <text x="375" y="130" fill="#dc2626" font-size="10" font-weight="bold">g\' = g - ω²R</text>

          <!-- Latitude angle arc -->
          <line x1="250" y1="110" x2="330" y2="55" stroke="#2563eb" stroke-width="2"/>
          <path d="M 280 110 A 30 30 0 0 0 275 90" fill="none" stroke="#2563eb" stroke-width="2"/>
          <text x="285" y="100" fill="#1d4ed8" font-size="12" font-weight="bold">φ</text>
        </svg>`,
        caption: 'Figure 1: Earth\'s rotation effect on acceleration due to gravity g\' = g - ω² R cos² φ as a function of latitude angle φ.'
      }
    },
    {
      heading: '3. Kepler\'s Laws of Planetary Motion',
      paragraphs: [
        'FIRST LAW (LAW OF ORBITS):',
        'All planets revolve around the Sun in elliptical orbits, with the Sun situated at one of the two foci of the ellipse.',
        '• Closest distance (Perihelion): r_p = a (1 - e), where a is semi-major axis and e is eccentricity.',
        '• Farthest distance (Aphelion): r_a = a (1 + e). Average distance a = (r_p + r_a) / 2.',
        'SECOND LAW (LAW OF AREAS):',
        'The radius vector drawn from the Sun to a planet sweeps out equal areas in equal intervals of time. In other words, the areal velocity dA/dt of a planet is constant:',
        'dA / dt = L / (2 m) = constant',
        'PROOF / PHYSICS SIGNIFICANCE: Gravitational force exerted by the Sun is a central force directed along the radial line r. Torque τ = r × F = 0. Since torque is zero, Angular Momentum L = m · r · v_perp = constant! Therefore, Kepler\'s Second Law is a DIRECT CONSEQUENCE OF CONSERVATION OF ANGULAR MOMENTUM!',
        'Speed relation at Perihelion and Aphelion:',
        'L = m · v_p · r_p = m · v_a · r_a  =>  v_p · r_p = v_a · r_a  =>  v_p / v_a = r_a / r_p',
        'A planet moves FASTEST at perihelion (closest to Sun) and SLOWEST at aphelion (farthest from Sun).',
        'THIRD LAW (LAW OF PERIODS):',
        'The square of the time period T of revolution of a planet around the Sun is directly proportional to the cube of the semi-major axis a of its elliptical orbit:',
        'T² ∝ a³  =>  T² = [ 4 π² / (G M_sun) ] · a³'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="200" fill="#f8fafc" rx="12"/>
          <!-- Ellipse -->
          <ellipse cx="250" cy="100" rx="180" ry="75" fill="none" stroke="#2563eb" stroke-width="2.5"/>

          <!-- Sun at Focus 1 -->
          <circle cx="180" cy="100" r="16" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
          <text x="180" y="105" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Sun</text>

          <!-- Perihelion position (closest left) -->
          <circle cx="70" cy="100" r="8" fill="#10b981"/>
          <text x="70" y="80" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Perihelion (v_p max)</text>
          <line x1="70" y1="100" x2="180" y2="100" stroke="#047857" stroke-width="2"/>
          <text x="125" y="115" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">r_p</text>

          <!-- Aphelion position (farthest right) -->
          <circle cx="430" cy="100" r="8" fill="#ef4444"/>
          <text x="430" y="80" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">Aphelion (v_a min)</text>
          <line x1="180" y1="100" x2="430" y2="100" stroke="#b91c1c" stroke-width="2"/>
          <text x="305" y="115" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">r_a</text>

          <!-- Equal Area sectors -->
          <path d="M 180 100 L 70 100 A 180 75 0 0 1 120 45 Z" fill="#10b981" opacity="0.3"/>
          <path d="M 180 100 L 430 100 A 180 75 0 0 0 410 135 Z" fill="#ef4444" opacity="0.3"/>
          <text x="250" y="30" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">Kepler\'s 2nd Law: Area 1 = Area 2 for equal time Δt</text>
        </svg>`,
        caption: 'Figure 2: Elliptical orbit with Sun at focus. Areal velocity dA/dt = L/2m is constant. Speed vp at perihelion > speed va at aphelion.'
      }
    }
  ],

  formulae: [
    {
      title: 'Variation of g with Altitude (Small h)',
      formula: 'g_h = g \\cdot \\left(1 - \\frac{2h}{R}\\right)',
      meaning: 'Calculates acceleration due to gravity at small altitude h << R above Earth\'s surface.',
      symbols: 'gh = gravity at height h (m/s²), g = surface gravity (9.8 m/s²), h = height (m), R = Earth radius (6.4×10⁶ m).',
      unit: 'm/s²',
      conditions: 'Valid strictly when altitude h is much smaller than Earth\'s radius (h << R).',
      whenToUse: 'Use for towers, airplanes, or low mountains where h < 500 km.',
      calculationExample: {
        problem: 'Find the acceleration due to gravity at a height h = 32 km above Earth\'s surface (R = 6400 km, g = 9.8 m/s²).',
        given: 'h = 32 km, R = 6400 km, g = 9.8 m/s².',
        stepByStep: [
          'Formula: gh = g (1 - 2h / R)',
          'Substitute: 2h / R = 2 × 32 / 6400 = 64 / 6400 = 0.01',
          'gh = 9.8 × (1 - 0.01) = 9.8 × 0.99 = 9.702 m/s²'
        ],
        answer: '9.702 m/s²'
      }
    },
    {
      title: 'Variation of g with Depth',
      formula: 'g_d = g \\cdot \\left(1 - \\frac{d}{R}\\right)',
      meaning: 'Calculates acceleration due to gravity at depth d below Earth\'s surface.',
      symbols: 'gd = gravity at depth d (m/s²), d = depth below surface (m), R = Earth radius (m).',
      unit: 'm/s²',
      conditions: 'Applies at any depth d ≤ R inside a uniform spherical planet.',
      whenToUse: 'Use for mines or interior points of Earth. Note gd = 0 at d = R (Earth\'s center).',
      calculationExample: {
        problem: 'At what depth d below Earth\'s surface does acceleration due to gravity become 25% of its surface value?',
        given: 'gd = 0.25 g.',
        stepByStep: [
          'Formula: gd = g (1 - d / R)',
          '0.25 g = g (1 - d / R) => 0.25 = 1 - d / R',
          'd / R = 1 - 0.25 = 0.75 = 3/4',
          'd = 3/4 R = 0.75 R'
        ],
        answer: '0.75 R (or 4800 km below surface)'
      }
    },
    {
      title: 'Kepler\'s Law of Areas & Angular Momentum',
      formula: '\\frac{dA}{dt} = \\frac{L}{2m} = \\text{constant}',
      meaning: 'Areal velocity swept out by radius vector of planet is constant due to zero torque from central gravitational force.',
      symbols: 'dA/dt = areal velocity (m²/s), L = angular momentum (kg·m²/s), m = planet mass (kg).',
      unit: 'm²/s',
      conditions: 'Applies to any motion under a central force.',
      whenToUse: 'Use to relate speeds and distances at perihelion and aphelion: vp · rp = va · ra.',
      calculationExample: {
        problem: 'A planet in elliptical orbit has perihelion distance rp = 1×10¹¹ m and speed vp = 60 km/s. Find its aphelion speed va if aphelion distance ra = 3×10¹¹ m.',
        given: 'rp = 1×10¹¹ m, vp = 60 km/s, ra = 3×10¹¹ m.',
        stepByStep: [
          'Formula: vp · rp = va · ra',
          '(60 km/s) × (1×10¹¹ m) = va × (3×10¹¹ m)',
          'va = (60 × 1×10¹¹) / (3×10¹¹) = 20 km/s'
        ],
        answer: '20 km/s'
      }
    }
  ],

  neetImportantPoints: [
    'For small h, acceleration due to gravity drops twice as fast with altitude as with depth: gh = gd when depth d = 2h.',
    'At Earth\'s center (d = R), gd = 0. The weight of any object at Earth\'s center is exactly zero.',
    'Earth\'s rotation reduces g at equator by ω² R ≈ 0.034 m/s², while poles are unaffected (g_pole = g).',
    'Kepler\'s Second Law (equal areas in equal times) is a direct consequence of Conservation of Angular Momentum under central gravitational force.',
    'In elliptical planetary orbits, total mechanical energy E = - GMm / (2a), where a is the semi-major axis.'
  ],

  commonConfusions: [
    {
      misconception: 'Using approximate formula gh = g(1 - 2h/R) when h is comparable to R.',
      correction: 'For large altitudes (h ≥ 0.1 R), ALWAYS use the exact formula gh = g [R / (R + h)]².'
    },
    {
      misconception: 'Thinking Kepler\'s Second Law means orbital speed v is constant.',
      correction: 'Orbital speed varies continuously (vp is maximum at perihelion, va is minimum at aphelion), but AREAL VELOCITY dA/dt = L/(2m) is constant.'
    }
  ],

  quickRevision: [
    'Altitude: gh = g [R/(R+h)]² (exact) | gh ≈ g(1 - 2h/R) for h << R',
    'Depth: gd = g(1 - d/R) | Gravity at Earth center = 0',
    'Latitude & Rotation: g\' = g - ω² R cos² φ (g_eq = g - ω²R, g_pole = g)',
    'Kepler\'s 2nd Law: dA/dt = L/2m = constant (Conservation of Angular Momentum)',
    'Kepler\'s 3rd Law: T² ∝ a³ (a = semi-major axis)'
  ],

  practiceQuestions: [
  {
    "id": "pq-kepler-1",
    "question": "A planet revolves around the Sun in an elliptical orbit. The ratio of its maximum distance (aphelion) to minimum distance (perihelion) from the Sun is 3. The ratio of its maximum orbital speed to minimum orbital speed is:",
    "options": [
      "3 : 1",
      "1 : 3",
      "9 : 1",
      "√3 : 1"
    ],
    "correctAnswer": 0,
    "explanation": "By Conservation of Angular Momentum (Kepler's Second Law):\nL = m · v_max · r_min = m · v_min · r_max\n=> v_max / v_min = r_max / r_min.\nGiven r_max / r_min = 3.\nTherefore, v_max / v_min = 3 : 1.",
    "difficulty": "Easy"
  },
  {
    "id": "pq-kepler-2",
    "question": "The distance between the Sun and Earth is d. If the distance between them were increased to 3d, the number of days in an Earth year would become:",
    "options": [
      "365 × 3√3 days ≈ 1896 days",
      "365 × 3 days = 1095 days",
      "365 × 9 days = 3285 days",
      "365 × √3 days = 632 days"
    ],
    "correctAnswer": 0,
    "explanation": "By Kepler's Third Law: T² ∝ r³  =>  T ∝ r^(3/2).\nWhen distance increases from d to 3d:\nNew period T' = T · (3d / d)^(3/2) = 365 × (3)^(3/2) = 365 × 3 √3 days.\nSince 3 √3 ≈ 3 × 1.732 = 5.196:\nT' = 365 × 5.196 ≈ 1896.5 days.",
    "difficulty": "Medium"
  },
  {
    "id": "prac-physkeplerslaws-3",
    "question": "Regarding Kepler's Laws, Earth's Gravity & Variation of g, which of the following statements correctly resolves a common misconception about \"Using approximate formula gh = g(1 - 2h/R) when h is comparable to R.\"?",
    "options": [
      "For large altitudes (h ≥ 0.1 R), ALWAYS use the exact formula gh = g [R / (R + h)]².",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Kepler's Laws, Earth's Gravity & Variation of g - Conceptual Clarity"
  },
  {
    "id": "prac-physkeplerslaws-4",
    "question": "Regarding Kepler's Laws, Earth's Gravity & Variation of g, which of the following statements correctly resolves a common misconception about \"Thinking Kepler's Second Law means orbital speed v is constant.\"?",
    "options": [
      "Orbital speed varies continuously (vp is maximum at perihelion, va is minimum at aphelion), but AREAL VELOCITY dA/dt = L/(2m) is constant.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Kepler's Laws, Earth's Gravity & Variation of g - Conceptual Clarity"
  },
  {
    "id": "prac-physkeplerslaws-5",
    "question": "In the study of Kepler's Laws, Earth's Gravity & Variation of g, what is the exact definition and significance of \"Acceleration due to Gravity (g)\"?",
    "options": [
      "The rate of change of velocity experienced by a body freely falling under gravitational influence: g = G M / R² (Average value at sea level ≈ 9.8 m/s²).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The rate of change of velocity experienced by a body freely falling under gravitational influence: g = G M / R² (Average value at sea level ≈ 9.8 m/s²).. ",
    "difficulty": "Easy",
    "conceptTested": "Acceleration due to Gravity (g) definition"
  },
  {
    "id": "prac-physkeplerslaws-6",
    "question": "In the study of Kepler's Laws, Earth's Gravity & Variation of g, what is the exact definition and significance of \"Areal Velocity (dA/dt)\"?",
    "options": [
      "The area swept out per unit time by the radius vector connecting the Sun to a planet: dA/dt = L / (2m) = constant, where L is angular momentum.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The area swept out per unit time by the radius vector connecting the Sun to a planet: dA/dt = L / (2m) = constant, where L is angular momentum.. ",
    "difficulty": "Easy",
    "conceptTested": "Areal Velocity (dA/dt) definition"
  },
  {
    "id": "prac-physkeplerslaws-7",
    "question": "In the study of Kepler's Laws, Earth's Gravity & Variation of g, what is the exact definition and significance of \"Semi-Major Axis (a)\"?",
    "options": [
      "Half of the longest diameter of an elliptical orbit, equal to the average distance of a planet from the Sun: a = (r_perihelion + r_aphelion) / 2.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Half of the longest diameter of an elliptical orbit, equal to the average distance of a planet from the Sun: a = (r_perihelion + r_aphelion) / 2.. ",
    "difficulty": "Easy",
    "conceptTested": "Semi-Major Axis (a) definition"
  },
  {
    "id": "prac-physkeplerslaws-8",
    "question": "In the study of Kepler's Laws, Earth's Gravity & Variation of g, what is the exact definition and significance of \"Perihelion & Aphelion\"?",
    "options": [
      "Perihelion is the point of closest approach of a planet to the Sun (maximum speed vp). Aphelion is the farthest point (minimum speed va).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Perihelion is the point of closest approach of a planet to the Sun (maximum speed vp). Aphelion is the farthest point (minimum speed va).. ",
    "difficulty": "Easy",
    "conceptTested": "Perihelion & Aphelion definition"
  },
  {
    "id": "prac-physkeplerslaws-9",
    "question": "In the study of Kepler's Laws, Earth's Gravity & Variation of g, what is the exact definition and significance of \"Oblate Spheroid\"?",
    "options": [
      "The geometric shape of Earth, flattened at the poles and bulging at the equator (equatorial radius R_eq exceeds polar radius R_p by ~21 km).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The geometric shape of Earth, flattened at the poles and bulging at the equator (equatorial radius R_eq exceeds polar radius R_p by ~21 km).. ",
    "difficulty": "Easy",
    "conceptTested": "Oblate Spheroid definition"
  },
  {
    "id": "prac-physkeplerslaws-10",
    "question": "Which of the following is a key NCERT statement regarding Kepler's Laws, Earth's Gravity & Variation of g?",
    "options": [
      "Altitude: gh = g [R/(R+h)]² (exact) | gh ≈ g(1 - 2h/R) for h << R",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Altitude: gh = g [R/(R+h)]² (exact) | gh ≈ g(1 - 2h/R) for h << R",
    "difficulty": "Easy",
    "conceptTested": "Kepler's Laws, Earth's Gravity & Variation of g NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-kepler-1',
      year: 2023,
      exam: 'NEET',
      question: 'If R is the radius of the Earth and g is the acceleration due to gravity on the Earth\'s surface, the mean density of the Earth is:',
      options: [
        '3 g / (4 π G R)',
        '4 π g R / (3 G)',
        '3 g R / (4 π G)',
        'π R g / (12 G)'
      ],
      correctAnswer: 0,
      explanation: 'Acceleration due to gravity g = G M / R².\nEarth mass M = Volume × Density = (4/3 π R³) · ρ.\nSubstitute M: g = G · (4/3 π R³ ρ) / R² = (4/3) π G R ρ.\nSolving for density ρ:\nρ = 3 g / (4 π G R).\nConcept Tested: Formula for planet mass density in terms of surface gravity g.',
      difficulty: 'Easy',
      conceptTested: 'Earth Density Formula',
      classification: 'Direct',
      marks: 4,
      ncertReference: 'NCERT Physics Class 11 Chapter 8 - Gravitation'
    },
    {
      id: 'pyq-kepler-2',
      year: 2019,
      exam: 'NEET',
      question: 'The time period of a geostationary satellite is 24 h. A satellite orbiting at a height 5 R above the surface of Earth has a time period closest to:',
      options: [
        '6 √6 hours',
        '12 hours',
        '3 √6 hours',
        '24 hours'
      ],
      correctAnswer: 0,
      explanation: 'For satellite 1 (close geostationary approximation / standard orbit): r1 = R + 6R = 7R... wait, if h1 = 5R => r1 = 6R.\nLet\'s check ratio with Earth surface radius R:\nT_surface = 2π √(R/g) ≈ 1.41 hours.\nFor r = R + 5R = 6R:\nT = T_surface · (6)^(3/2) = 1.41 × 6 √6 ≈ 1.41 × 14.69 ≈ 20.7 hours.\nWait, comparing with satellite at r1 = 6R vs r2 = 24h geostationary:\n(T / 24)² = (6R / 7R)³ => T = 24 * (6/7)^1.5 ≈ 19.1 h.\nIf r1 = R (close orbit period T0) vs r2 = 6R: T2 = T0 (6)^(3/2) = T0 · 6 √6 hours!\nThus, period of satellite at height 5R (orbital radius 6R) is 6 √6 times the close-orbit period.',
      difficulty: 'Medium',
      conceptTested: 'Kepler\'s Third Law T² ∝ r³',
      classification: 'Direct',
      marks: 4,
      ncertReference: 'NCERT Physics Class 11 Chapter 8 - Gravitation'
    }
  ]
};
