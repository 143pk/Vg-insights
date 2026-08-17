import { DetailedTopicContent } from '../../types/neet';

export const physGravitationalPotentialDetails: DetailedTopicContent = {
  topicId: 'phys-gravitational-potential',
  topicName: 'Gravitational Potential, Potential Energy & Escape Velocity',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Gravitation',
  chapter: 'Gravitation',

  whatIsThisTopic: 'Gravitational potential V at a point is the work done per unit test mass by an external agent in bringing a test mass slowly from infinity to that point without acceleration. Gravitational potential energy U is the work done in assembling a system of masses from infinite separation. Because gravity is an attractive conservative force, both V and U are always negative quantities (taking infinity as zero potential reference). This topic covers scalar gravitational potential V = -GM/r, potential energy U = -GMm/r, potential of shells and solid spheres, field-potential relation Eg = -dV/dr, and escape velocity ve = √(2GM/R) = √(2gR) ≈ 11.2 km/s required for a body to break completely free from a celestial body\'s gravitational pull.',

  basicIdea: [
    'Gravitational Potential V = - G M / r is a scalar quantity. It is maximum (equal to zero) at infinity and grows more negative as r decreases.',
    'Gravitational Potential Energy of two point masses m1 and m2: U = - (G m1 m2) / r. Change in potential energy ΔU = U_final - U_initial = - W_grav = + W_ext.',
    'Relation between Field and Potential: Eg = - dV / dr (Field intensity is equal to the negative spatial gradient of gravitational potential).',
    'Potential of Solid Sphere: At center (r = 0), V_center = - 3/2 (G M / R) = 1.5 V_surface. Inside solid sphere, V(r) = - (G M / 2R³) (3R² - r²).',
    'Escape Velocity ve = √(2 G M / R) = √(2 g R). On Earth, ve ≈ 11.2 km/s. It is independent of mass of projected body and angle of projection!'
  ],

  importantTerms: [
    {
      term: 'Gravitational Potential (V)',
      definition: 'Work done per unit mass in bringing a small test mass from infinity to a given point: V = W_ext / m = - GM / r (Unit: J/kg or m²/s²).'
    },
    {
      term: 'Gravitational Potential Energy (U)',
      definition: 'Energy stored in a system of interacting masses due to their relative spatial positions: U = - G m1 m2 / r (Unit: Joule).'
    },
    {
      term: 'Escape Velocity (ve)',
      definition: 'Minimum projection speed required for a particle at the surface of a celestial body to escape its gravitational pull completely and reach infinity with zero kinetic energy.'
    },
    {
      term: 'Equipotential Surface',
      definition: 'A surface over which gravitational potential V is constant everywhere. Gravitational field lines are always perpendicular to equipotential surfaces.'
    },
    {
      term: 'Binding Energy',
      definition: 'The minimum energy required to completely liberate a body bound in a gravitational field: Binding Energy = - Total Mechanical Energy.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Gravitational Potential (V) & Potential Energy (U)',
      paragraphs: [
        'Because gravity is an attractive force, bringing a test mass from infinity toward a mass M requires no positive work from an external agent (gravity pulls it in naturally). Thus, work done by external force is negative, making gravitational potential V ALWAYS NEGATIVE:',
        'V(r) = - (G · M) / r',
        'Reference: V = 0 at r = ∞.',
        'GRAVITATIONAL POTENTIAL ENERGY (U):',
        'For two point masses m1 and m2 separated by distance r, the gravitational potential energy is:',
        'U(r) = m2 · V(r) = - (G · m1 · m2) / r',
        'Work done by external agent to change distance from r1 to r2:',
        'W_ext = U_final - U_initial = - G m1 m2 · (1/r2 - 1/r1)',
        'If a body of mass m is raised to height h above Earth\'s surface (r1 = R, r2 = R + h):',
        'ΔU = - G M m (1/(R+h) - 1/R) = (G M m h) / [R (R + h)] = (m g h) / [1 + (h/R)]',
        'When h << R, 1 + h/R ≈ 1, which reduces to the familiar school physics formula ΔU ≈ m g h!'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="200" fill="#f8fafc" rx="12"/>
          <!-- Axes -->
          <line x1="50" y1="30" x2="460" y2="30" stroke="#334155" stroke-width="2"/>
          <line x1="50" y1="30" x2="50" y2="180" stroke="#334155" stroke-width="2"/>
          <text x="465" y="35" fill="#334155" font-size="12" font-weight="bold">r</text>
          <text x="15" y="100" fill="#334155" font-size="12" font-weight="bold">Potential V</text>
          <text x="60" y="25" fill="#059669" font-size="12" font-weight="bold">V = 0 at r = ∞</text>

          <!-- Hyperbolic curve in negative quadrant -->
          <path d="M 80 170 Q 120 160 200 80 T 450 40" fill="none" stroke="#dc2626" stroke-width="3"/>

          <!-- R line -->
          <line x1="160" y1="30" x2="160" y2="180" stroke="#94a3b8" stroke-dasharray="4 3"/>
          <text x="150" y="195" fill="#475569" font-size="12" font-weight="bold">r = R</text>
          <circle cx="160" cy="100" r="4" fill="#dc2626"/>
          <text x="170" y="105" fill="#b91c1c" font-size="12" font-weight="bold">V = -GM/R</text>
        </svg>`,
        caption: 'Figure 1: Gravitational potential V vs distance r. V is negative everywhere and approaches 0 as r → ∞.'
      }
    },
    {
      heading: '2. Potential Distribution in Spherical Shells and Solid Spheres',
      paragraphs: [
        '1. THIN HOLLOW SPHERICAL SHELL (Mass M, Radius R):',
        '• Outside (r ≥ R): V_out = - G M / r',
        '• Surface (r = R): V_surface = - G M / R',
        '• Inside (r < R): V_in = - G M / R (CONSTANT everywhere inside shell!). Because Eg = -dV/dr = 0 inside shell, potential remains completely uniform.',
        '2. UNIFORM SOLID SPHERE (Mass M, Radius R):',
        '• Outside (r ≥ R): V_out = - G M / r',
        '• Surface (r = R): V_surface = - G M / R',
        '• Inside (r ≤ R): V_in(r) = - (G M / 2R³) · (3 R² - r²)',
        '• Center (r = 0): V_center = - (3/2) · (G M / R) = 1.5 · V_surface (Magnitude of potential is 1.5 times higher at center than at surface!).'
      ]
    },
    {
      heading: '3. Derivation & Properties of Escape Velocity (ve)',
      paragraphs: [
        'Consider a body of mass m projected from the surface of Earth (Mass M, Radius R) with speed ve.',
        'Initial Total Energy at Surface:',
        'E_initial = K_i + U_i = (1/2) m ve² - (G M m / R)',
        'For the body to just escape to infinity, its velocity at infinity can be zero, so Final Total Energy at ∞:',
        'E_final = K_f + U_f = 0 + 0 = 0',
        'By Conservation of Mechanical Energy (E_initial = E_final):',
        '(1/2) m ve² - (G M m / R) = 0  =>  (1/2) m ve² = (G M m / R)',
        'Canceling mass m from both sides:',
        've = √[ 2 G M / R ] = √[ 2 g R ]  (since g = G M / R²)',
        'CRITICAL PROPERTIES OF ESCAPE VELOCITY:',
        '1. Independent of Mass m of projected body (a feather and a rocket have the same escape velocity on Earth!).',
        '2. Independent of Angle of Projection θ (whether fired vertically upward or at 45° angle, escape velocity remains √[2gR]).',
        '3. Depends on Mass M and Radius R of the host planet.',
        '4. Numerical Value for Earth: ve = √(2 × 9.8 × 6.4 × 10⁶) = 11.2 km/s = 11.2 × 10³ m/s.',
        '5. Condition for Atmospheric Retention: Earth has an atmosphere because root-mean-square thermal speed of air molecules (v_rms) is far less than 11.2 km/s. Moon has no atmosphere because moon\'s escape velocity (ve ≈ 2.38 km/s) is less than v_rms of air molecules!'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="200" fill="#f8fafc" rx="12"/>
          <!-- Earth Circle -->
          <circle cx="120" cy="100" r="50" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
          <text x="120" y="105" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">Earth</text>

          <!-- Trajectory 1: v < ve (falls back) -->
          <path d="M 170 100 Q 250 50 200 130" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="5 3"/>
          <text x="220" y="60" fill="#dc2626" font-size="11" font-weight="bold">v &lt; v_e (Bound / Falls back)</text>

          <!-- Trajectory 2: v = ve (Parabolic Escape) -->
          <path d="M 170 100 Q 300 100 460 30" fill="none" stroke="#10b981" stroke-width="3"/>
          <text x="320" y="105" fill="#047857" font-size="12" font-weight="bold">v = v_e (Escapes to ∞)</text>

          <!-- Trajectory 3: v > ve (Hyperbolic Escape) -->
          <path d="M 170 100 Q 300 80 460 10" fill="none" stroke="#8b5cf6" stroke-width="2.5"/>
          <text x="330" y="25" fill="#6d28d9" font-size="11" font-weight="bold">v &gt; v_e (Hyperbolic)</text>
        </svg>`,
        caption: 'Figure 2: Projection trajectories from planet surface. Speeds v < ve result in elliptical orbits or collision; v = ve reaches infinity with zero residual kinetic energy.'
      }
    }
  ],

  formulae: [
    {
      title: 'Gravitational Potential of Point Mass',
      formula: 'V = - \\frac{G \\cdot M}{r}',
      meaning: 'Calculates the scalar potential energy per unit mass at distance r from a body of mass M.',
      symbols: 'V = gravitational potential (J/kg), G = 6.674×10⁻¹¹ N·m²/kg², M = source mass (kg), r = distance from center (m).',
      unit: 'J/kg or m²/s²',
      conditions: 'Valid outside a point mass or external to spherical mass distribution.',
      whenToUse: 'Use when finding potential or calculating work done in moving unit mass in gravitational field.',
      calculationExample: {
        problem: 'Find the gravitational potential at the surface of Earth (Mass = 6×10²⁴ kg, Radius = 6.4×10⁶ m).',
        given: 'M = 6×10²⁴ kg, R = 6.4×10⁶ m, G = 6.67×10⁻¹¹ N·m²/kg².',
        stepByStep: [
          'Formula: V = - G M / R',
          'Substitute: V = - (6.67×10⁻¹¹) × (6×10²⁴) / (6.4×10⁶)',
          'Numerator: 4.002 × 10¹⁴',
          'Divide by 6.4×10⁶: V = - 6.25 × 10⁷ J/kg'
        ],
        answer: '- 6.25 × 10⁷ J/kg'
      }
    },
    {
      title: 'Gravitational Potential Energy of Two Point Masses',
      formula: 'U = - \\frac{G \\cdot m_1 \\cdot m_2}{r}',
      meaning: 'Energy stored in a two-body system separated by distance r relative to zero energy at infinite separation.',
      symbols: 'U = potential energy (J), m1 & m2 = masses (kg), r = separation distance (m).',
      unit: 'Joule (J)',
      conditions: 'Reference point chosen as U = 0 at r = ∞.',
      whenToUse: 'Use when calculating system potential energy or total mechanical energy of interacting masses.',
      calculationExample: {
        problem: 'Calculate the potential energy of a 100 kg satellite at a height equal to Earth\'s radius R = 6.4×10⁶ m above Earth surface.',
        given: 'm = 100 kg, r = R + h = 2R = 12.8×10⁶ m, M = 6×10²⁴ kg, G = 6.67×10⁻¹¹ N·m²/kg².',
        stepByStep: [
          'Formula: U = - G M m / (2 R)',
          'Substitute: U = - (6.67×10⁻¹¹) × (6×10²⁴) × (100) / (12.8×10⁶)',
          'Numerator: 4.002 × 10¹⁶',
          'Divide by 12.8×10⁶: U = - 3.125 × 10⁹ J'
        ],
        answer: '- 3.125 × 10⁹ J'
      }
    },
    {
      title: 'Escape Velocity Formula',
      formula: 'v_e = \\sqrt{\\frac{2 \\cdot G \\cdot M}{R}} = \\sqrt{2 \\cdot g \\cdot R}',
      meaning: 'Minimum projection velocity required to escape the gravitational field of a body of mass M and radius R.',
      symbols: 've = escape speed (m/s), M = planet mass (kg), R = planet radius (m), g = surface acceleration due to gravity (m/s²).',
      unit: 'm/s or km/s',
      conditions: 'Ignores atmospheric air resistance and rotation of planet.',
      whenToUse: 'Use when calculating escape speed for planets, moons, or rockets launched into deep space.',
      calculationExample: {
        problem: 'A planet has radius twice that of Earth and mass 8 times that of Earth. Find its escape velocity if Earth\'s escape velocity is 11.2 km/s.',
        given: 'M_planet = 8 M_earth, R_planet = 2 R_earth, ve_earth = 11.2 km/s.',
        stepByStep: [
          'Formula: ve ∝ √(M / R)',
          'Ratio: ve_planet / ve_earth = √[ (M_planet / M_earth) / (R_planet / R_earth) ]',
          'Substitute: ve_planet / 11.2 = √[ 8 / 2 ] = √4 = 2',
          'Calculate: ve_planet = 2 × 11.2 = 22.4 km/s'
        ],
        answer: '22.4 km/s'
      }
    }
  ],

  neetImportantPoints: [
    'Gravitational potential V and potential energy U are ALWAYS NEGATIVE because gravity is an attractive force.',
    'At the center of a solid uniform sphere, potential magnitude is 1.5 times the surface potential: V_center = 1.5 V_surface.',
    'Escape velocity ve is INDEPENDENT of mass of projected body and direction of projection.',
    'If a body is projected with speed v > ve, its residual speed v_residual at infinity is given by: v_residual = √(v² - ve²).'
  ],

  commonConfusions: [
    {
      misconception: 'Forgetting the negative sign in potential energy U = - G M m / r.',
      correction: 'Gravitational attraction means U is always negative. Zero potential energy is defined at infinity (r = ∞).'
    },
    {
      misconception: 'Believing escape velocity depends on projection angle.',
      correction: 'Escape velocity ve = √(2gR) is a pure scalar independent of projection angle or mass of projected body!'
    }
  ],

  quickRevision: [
    'Potential: V = - G M / r | Potential Energy: U = - G M m / r',
    'Work done: W = ΔU = G M m (1/r1 - 1/r2)',
    'Solid Sphere Center: V_center = 1.5 V_surface = - 1.5 (G M / R)',
    'Escape Velocity: ve = √(2 G M / R) = √(2 g R) ≈ 11.2 km/s'
  ],

  practiceQuestions: [
  {
    "id": "pq-grav-pot-1",
    "question": "A projectile is fired vertically upward from the surface of Earth with a velocity k · ve, where ve is the escape velocity and k < 1. The maximum height reached by the projectile above the surface of Earth is:",
    "options": [
      "R · k² / (1 - k²)",
      "R · k / (1 - k)",
      "R · (1 - k²)",
      "R · k²"
    ],
    "correctAnswer": 0,
    "explanation": "Initial Total Energy at surface = 1/2 m (k ve)² - G M m / R.\nSince ve² = 2 G M / R, 1/2 m k² (2 G M / R) - G M m / R = - (G M m / R) (1 - k²).\nAt max height h (r = R + h), final velocity = 0, so Final Energy = - G M m / (R + h).\nBy Conservation of Energy:\n- (G M m / R) (1 - k²) = - G M m / (R + h)\n=> (1 - k²) / R = 1 / (R + h) => R + h = R / (1 - k²)\n=> h = R / (1 - k²) - R = R [ 1 / (1 - k²) - 1 ] = R · k² / (1 - k²).",
    "difficulty": "Hard"
  },
  {
    "id": "pq-grav-pot-2",
    "question": "The ratio of escape velocity at Earth's surface to the escape velocity at a planet having twice the radius and twice the mean density of Earth is:",
    "options": [
      "1 : 2",
      "1 : 2√2",
      "1 : 4",
      "1 : √2"
    ],
    "correctAnswer": 1,
    "explanation": "Escape velocity ve = √(2 G M / R). Mass of planet M = 4/3 π R³ ρ.\nSubstitute M: ve = √[ 2 G (4/3 π R³ ρ) / R ] = R · √[ (8/3) π G ρ ] => ve ∝ R · √ρ.\nRatio ve_earth / ve_planet = (R_earth / R_planet) · √(ρ_earth / ρ_planet)\n= (1 / 2) · √(1 / 2) = 1 / (2 √2) = 1 : 2√2.",
    "difficulty": "Medium"
  },
  {
    "id": "prac-physgravitationalpotential-3",
    "question": "Regarding Gravitational Potential, Potential Energy & Escape Velocity, which of the following statements correctly resolves a common misconception about \"Forgetting the negative sign in potential energy U = - G M m / r.\"?",
    "options": [
      "Gravitational attraction means U is always negative. Zero potential energy is defined at infinity (r = ∞).",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Gravitational Potential, Potential Energy & Escape Velocity - Conceptual Clarity"
  },
  {
    "id": "prac-physgravitationalpotential-4",
    "question": "Regarding Gravitational Potential, Potential Energy & Escape Velocity, which of the following statements correctly resolves a common misconception about \"Believing escape velocity depends on projection angle.\"?",
    "options": [
      "Escape velocity ve = √(2gR) is a pure scalar independent of projection angle or mass of projected body!",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Gravitational Potential, Potential Energy & Escape Velocity - Conceptual Clarity"
  },
  {
    "id": "prac-physgravitationalpotential-5",
    "question": "In the study of Gravitational Potential, Potential Energy & Escape Velocity, what is the exact definition and significance of \"Gravitational Potential (V)\"?",
    "options": [
      "Work done per unit mass in bringing a small test mass from infinity to a given point: V = W_ext / m = - GM / r (Unit: J/kg or m²/s²).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Work done per unit mass in bringing a small test mass from infinity to a given point: V = W_ext / m = - GM / r (Unit: J/kg or m²/s²).. ",
    "difficulty": "Easy",
    "conceptTested": "Gravitational Potential (V) definition"
  },
  {
    "id": "prac-physgravitationalpotential-6",
    "question": "In the study of Gravitational Potential, Potential Energy & Escape Velocity, what is the exact definition and significance of \"Gravitational Potential Energy (U)\"?",
    "options": [
      "Energy stored in a system of interacting masses due to their relative spatial positions: U = - G m1 m2 / r (Unit: Joule).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Energy stored in a system of interacting masses due to their relative spatial positions: U = - G m1 m2 / r (Unit: Joule).. ",
    "difficulty": "Easy",
    "conceptTested": "Gravitational Potential Energy (U) definition"
  },
  {
    "id": "prac-physgravitationalpotential-7",
    "question": "In the study of Gravitational Potential, Potential Energy & Escape Velocity, what is the exact definition and significance of \"Escape Velocity (ve)\"?",
    "options": [
      "Minimum projection speed required for a particle at the surface of a celestial body to escape its gravitational pull completely and reach infinity with zero kinetic energy.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Minimum projection speed required for a particle at the surface of a celestial body to escape its gravitational pull completely and reach infinity with zero kinetic energy.. ",
    "difficulty": "Easy",
    "conceptTested": "Escape Velocity (ve) definition"
  },
  {
    "id": "prac-physgravitationalpotential-8",
    "question": "In the study of Gravitational Potential, Potential Energy & Escape Velocity, what is the exact definition and significance of \"Equipotential Surface\"?",
    "options": [
      "A surface over which gravitational potential V is constant everywhere. Gravitational field lines are always perpendicular to equipotential surfaces.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A surface over which gravitational potential V is constant everywhere. Gravitational field lines are always perpendicular to equipotential surfaces.. ",
    "difficulty": "Easy",
    "conceptTested": "Equipotential Surface definition"
  },
  {
    "id": "prac-physgravitationalpotential-9",
    "question": "In the study of Gravitational Potential, Potential Energy & Escape Velocity, what is the exact definition and significance of \"Binding Energy\"?",
    "options": [
      "The minimum energy required to completely liberate a body bound in a gravitational field: Binding Energy = - Total Mechanical Energy.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The minimum energy required to completely liberate a body bound in a gravitational field: Binding Energy = - Total Mechanical Energy.. ",
    "difficulty": "Easy",
    "conceptTested": "Binding Energy definition"
  },
  {
    "id": "prac-physgravitationalpotential-10",
    "question": "Which of the following is a key NCERT statement regarding Gravitational Potential, Potential Energy & Escape Velocity?",
    "options": [
      "Potential: V = - G M / r | Potential Energy: U = - G M m / r",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Potential: V = - G M / r | Potential Energy: U = - G M m / r",
    "difficulty": "Easy",
    "conceptTested": "Gravitational Potential, Potential Energy & Escape Velocity NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-grav-pot-1',
      year: 2020,
      exam: 'NEET',
      question: 'A body weighs 72 N on the surface of the Earth. What is the gravitational force on it, at a height equal to half the radius of the Earth?',
      options: [
        '32 N',
        '30 N',
        '24 N',
        '48 N'
      ],
      correctAnswer: 0,
      explanation: 'Weight at surface W = m g = 72 N.\nVariation of gravity at height h: g_h = g · [ R / (R + h) ]².\nGiven h = R / 2 => R + h = 3R / 2.\nSubstitute: g_h = g · [ R / (3R/2) ]² = g · (2/3)² = (4/9) g.\nWeight at height h: W_h = m g_h = 72 N × (4/9) = 8 × 4 = 32 N.',
      difficulty: 'Medium',
      conceptTested: 'Variation of Gravity with Height',
      classification: 'Direct',
      marks: 4,
      ncertReference: 'NCERT Physics Class 11 Chapter 8 - Gravitation'
    },
    {
      id: 'pyq-grav-pot-2',
      year: 2019,
      exam: 'NEET',
      question: 'The work done to raise a mass m from the surface of the earth to a height h, which is equal to the radius of the earth, is:',
      options: [
        '1/2 m g R',
        'm g R',
        '2 m g R',
        '1/4 m g R'
      ],
      correctAnswer: 0,
      explanation: 'Work done W = ΔU = U_final - U_initial = - G M m / (R + h) - (- G M m / R).\nGiven h = R => r_final = 2R.\nW = G M m (1/R - 1/2R) = (G M m) / (2R).\nSince g = G M / R² => G M = g R².\nSubstitute: W = (g R² m) / (2R) = 1/2 m g R.',
      difficulty: 'Easy',
      conceptTested: 'Work Done in Gravitational Field',
      classification: 'Direct',
      marks: 4,
      ncertReference: 'NCERT Physics Class 11 Chapter 8 - Gravitation'
    }
  ]
};
