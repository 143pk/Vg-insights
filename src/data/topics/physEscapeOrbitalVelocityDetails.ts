import { DetailedTopicContent } from '../../types/neet';

export const physEscapeOrbitalVelocityDetails: DetailedTopicContent = {
  topicId: 'phys-escape-orbital-velocity',
  topicName: 'Satellites, Orbital Velocity & Time Period',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Gravitation',
  chapter: 'Gravitation',

  whatIsThisTopic: 'Artificial and natural satellites revolve around host planets in circular or elliptical orbits under the centripetal influence of gravitational attraction. This topic covers satellite orbital velocity vo = √(GM/r), time period of revolution T = 2π√(r³/GM), relation between orbital and escape velocities (ve = √2 vo), energy analysis of orbiting satellites (Kinetic Energy K = GMm/2r, Potential Energy U = -GMm/r, Total Mechanical Energy E = -GMm/2r, Binding Energy BE = GMm/2r), geostationary equatorial orbits (T = 24 hours, height h ≈ 35,800 km), low-altitude polar satellites, and the phenomenon of weightlessness experienced by astronauts inside orbiting spacecraft.',

  basicIdea: [
    'Orbital Velocity vo = √(G M / r) = √[ G M / (R + h) ]. For a satellite orbiting close to Earth\'s surface (h << R), vo = √(g R) ≈ 7.92 km/s.',
    'Relation between Escape and Orbital Velocities: ve = √2 · vo ≈ 1.414 vo. An increase of 41.4% in the speed of a satellite causes it to escape Earth\'s gravity completely!',
    'Time Period of Revolution: T = 2π r / vo = 2π √[ r³ / (G M) ]. For a close Earth satellite (h ≈ 0), T = 2π √(R/g) ≈ 84.6 minutes.',
    'Satellite Energy Relations: Kinetic Energy K = G M m / (2r), Potential Energy U = - G M m / r, Total Mechanical Energy E = - G M m / (2r). Note: |E| = K = - U / 2.',
    'Geostationary Satellite: Time period T = 24 hours, height h ≈ 35,800 km (r ≈ 6.6 R), orbits in equatorial plane from West to East matching Earth\'s rotation.'
  ],

  importantTerms: [
    {
      term: 'Orbital Velocity (vo)',
      definition: 'The constant tangential speed required by a satellite to maintain a stable circular orbit at distance r from the center of a planet: vo = √(GM/r).'
    },
    {
      term: 'Binding Energy (BE)',
      definition: 'The minimum energy required to liberate a satellite from its orbit and send it to infinity: BE = - Total Energy = + G M m / (2r).'
    },
    {
      term: 'Geostationary (Synchronous) Orbit',
      definition: 'A circular equatorial orbit with period T = 24 hours. A satellite in this orbit appears stationary relative to any observer on Earth\'s surface.'
    },
    {
      term: 'Polar Satellite',
      definition: 'A satellite orbiting at low altitude (500-800 km) in a North-South plane passing over Earth\'s poles, completing one orbit in ~100 minutes.'
    },
    {
      term: 'Weightlessness',
      definition: 'State of effective zero weight (Normal contact reaction N = 0) experienced by an observer in a freely falling frame or orbiting satellite.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Derivation of Orbital Velocity (vo) & Relation with Escape Velocity',
      paragraphs: [
        'Consider a satellite of mass m revolving in a stable circular orbit of radius r = R + h around Earth (Mass M, Radius R) with constant tangential speed vo.',
        'The centripetal force required for circular orbital motion is provided exclusively by the gravitational attraction exerted by Earth on the satellite:',
        'F_centripetal = F_gravitational',
        'm · vo² / r = G · M · m / r²',
        'Canceling satellite mass m and one power of r:',
        'vo² = G · M / r  =>  vo = √[ G · M / r ] = √[ G · M / (R + h) ]',
        'CLOSE EARTH SATELLITE (h << R):',
        'When a satellite orbits very close to Earth\'s surface, r ≈ R. Since g = G M / R² => G M = g R²:',
        'vo = √[ g · R² / R ] = √[ g · R ]',
        'For Earth (g = 9.8 m/s², R = 6.4 × 10⁶ m):',
        'vo = √(9.8 × 6.4 × 10⁶) = 7.92 × 10³ m/s ≈ 7.92 km/s.',
        'RELATION BETWEEN ESCAPE VELOCITY AND ORBITAL VELOCITY:',
        've = √[ 2 G M / R ] = √2 · √[ G M / R ] = √2 · vo ≈ 1.414 vo',
        'NEET INSIGHT: If the orbital speed of a satellite is increased by 41.4% (or its kinetic energy is doubled), its total energy becomes zero, causing it to leave its orbit and escape to infinity along a parabolic trajectory!'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="200" fill="#f8fafc" rx="12"/>
          <!-- Earth -->
          <circle cx="250" cy="100" r="45" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
          <text x="250" y="105" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Earth (M)</text>

          <!-- Circular Orbit line -->
          <circle cx="250" cy="100" r="80" fill="none" stroke="#94a3b8" stroke-dasharray="5 4" stroke-width="2"/>

          <!-- Satellite -->
          <circle cx="330" cy="100" r="10" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
          <text x="330" y="80" fill="#b45309" font-size="11" font-weight="bold">Satellite (m)</text>

          <!-- Centripetal Force Vector (Inward) -->
          <line x1="330" y1="100" x2="275" y2="100" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrow-f)"/>
          <text x="295" y="115" fill="#dc2626" font-size="10" font-weight="bold">F_g = GMm/r²</text>

          <!-- Velocity Vector (Tangential UP) -->
          <line x1="330" y1="100" x2="330" y2="40" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow-v)"/>
          <text x="340" y="55" fill="#047857" font-size="11" font-weight="bold">v_o = √(GM/r)</text>

          <defs>
            <marker id="arrow-f" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/>
            </marker>
            <marker id="arrow-v" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
            </marker>
          </defs>
        </svg>`,
        caption: 'Figure 1: Circular satellite orbit around Earth. Gravitational attraction provides the required centripetal force perpendicular to orbital velocity vo.'
      }
    },
    {
      heading: '2. Time Period of Revolution (T) & Kepler\'s Third Law Connection',
      paragraphs: [
        'The time period T is the time taken by a satellite to complete one full revolution around the planet:',
        'T = Distance / Speed = (2π r) / vo = (2π r) / √[ G M / r ]',
        'T = 2π √[ r³ / (G M) ] = 2π √[ (R + h)³ / (G M) ]',
        'Squaring both sides yields Kepler\'s Third Law:',
        'T² = [ 4π² / (G M) ] · r³  =>  T² ∝ r³',
        'FOR CLOSE EARTH SATELLITES (r ≈ R):',
        'T_min = 2π √[ R³ / (G M) ] = 2π √[ R / g ]',
        'For R = 6.4 × 10⁶ m and g = 9.8 m/s²:',
        'T_min = 2π √(6.4 × 10⁶ / 9.8) = 2π √(6.53 × 10⁵) = 2π × 808 = 5078 seconds ≈ 84.6 minutes.'
      ]
    },
    {
      heading: '3. Energy Analysis of Orbiting Satellites',
      paragraphs: [
        'A satellite revolving in a circular orbit of radius r possesses both kinetic energy (due to motion) and potential energy (due to position in gravitational field):',
        '1. Kinetic Energy (K):',
        'K = (1/2) m vo² = (1/2) m (G M / r) = + (G M m) / (2r)',
        '2. Potential Energy (U):',
        'U = - (G M m) / r',
        '3. Total Mechanical Energy (E = K + U):',
        'E = [ (G M m) / (2r) ] - [ (G M m) / r ] = - (G M m) / (2r)',
        'CRITICAL ENERGY COMPARISONS (NEET FAVORITE):',
        '• Total Energy E is NEGATIVE, signifying that the satellite is bound to the planet.',
        '• |E| = K = - (1/2) U',
        '• U = - 2 K = 2 E',
        '• Binding Energy (BE) = - E = + (G M m) / (2r).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="200" fill="#f8fafc" rx="12"/>
          <!-- Zero Energy Line -->
          <line x1="40" y1="100" x2="460" y2="100" stroke="#64748b" stroke-width="2" stroke-dasharray="4 3"/>
          <text x="400" y="93" fill="#475569" font-size="12" font-weight="bold">Zero Energy Axis (E = 0)</text>

          <!-- Kinetic Energy (+E_0) -->
          <rect x="100" y="40" width="80" height="60" fill="#10b981" opacity="0.8" rx="6"/>
          <text x="140" y="75" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">K = +E₀</text>

          <!-- Total Energy (-E_0) -->
          <rect x="210" y="100" width="80" height="60" fill="#3b82f6" opacity="0.8" rx="6"/>
          <text x="250" y="135" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">E = -E₀</text>

          <!-- Potential Energy (-2E_0) -->
          <rect x="320" y="100" width="80" height="120" fill="#ef4444" opacity="0.8" rx="6"/>
          <text x="360" y="155" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">U = -2E₀</text>
        </svg>`,
        caption: 'Figure 2: Relative energy proportions of an orbiting satellite. K = +E₀, Total Energy E = -E₀, Potential Energy U = -2E₀.'
      }
    },
    {
      heading: '4. Geostationary vs Polar Satellites & Weightlessness',
      paragraphs: [
        'GEOSTATIONARY (SYNCHRONOUS) SATELLITE:',
        '• Time period T = 24 hours = 86,400 s (synchronous with Earth\'s rotation period).',
        '• Direction of orbit: West to East (same direction as Earth\'s axial rotation).',
        '• Orbit plane: Equatorial plane of Earth (inclination angle i = 0°).',
        '• Height above surface: h ≈ 35,800 km ≈ 36,000 km (orbital radius r ≈ 42,200 km ≈ 6.6 R).',
        '• Primary Application: Satellite television, weather telecommunication, GPS broadcasting.',
        'POLAR SATELLITES:',
        '• Low-altitude orbit (h = 500 - 800 km above surface), passing over North and South poles.',
        '• Time period T ≈ 100 minutes (completes ~14 to 15 orbits per day as Earth rotates beneath it).',
        '• Primary Application: Environmental monitoring, remote sensing, military reconnaissance.',
        'WEIGHTLESSNESS IN SATELLITES:',
        'An astronaut inside an orbiting spacecraft experiences zero apparent weight because both the astronaut and spacecraft fall freely toward Earth with the exact same gravitational acceleration g_orbital. The normal contact force between astronaut and spaceship floor is N = 0.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Orbital Velocity of Satellite',
      formula: 'v_o = \\sqrt{\\frac{G \\cdot M}{r}} = \\sqrt{\\frac{G \\cdot M}{R + h}}',
      meaning: 'Tangential speed required for a body of mass m to remain in a stable circular orbit of radius r around mass M.',
      symbols: 'vo = orbital speed (m/s), M = planet mass (kg), r = orbital radius (m) = R + h, h = altitude above surface (m).',
      unit: 'm/s or km/s',
      conditions: 'Circular orbit under central gravitational attraction.',
      whenToUse: 'Use when finding speed or kinetic energy of orbiting satellites or planets.',
      calculationExample: {
        problem: 'Calculate the orbital velocity of a satellite orbiting at a height h = 3 R above Earth\'s surface (g = 10 m/s², R = 6400 km).',
        given: 'r = R + 3R = 4R, G M = g R².',
        stepByStep: [
          'Formula: vo = √(G M / r) = √[ (g R²) / (4 R) ] = √[ g R / 4 ] = 1/2 √(g R)',
          'Substitute g = 10, R = 6.4×10⁶ m:',
          'vo = 1/2 × √(10 × 6.4×10⁶) = 1/2 × √(6.4×10⁷) = 1/2 × (8000 m/s) = 4000 m/s = 4 km/s'
        ],
        answer: '4 km/s'
      }
    },
    {
      title: 'Time Period of Satellite Orbit',
      formula: 'T = 2\\pi \\cdot \\sqrt{\\frac{r^3}{G \\cdot M}} = 2\\pi \\cdot \\sqrt{\\frac{(R + h)^3}{g \\cdot R^2}}',
      meaning: 'Time taken for one complete circular revolution around a planet.',
      symbols: 'T = time period (seconds), r = orbital radius (m), M = planet mass (kg).',
      unit: 'seconds or hours',
      conditions: 'Applies to circular orbits.',
      whenToUse: 'Use when relating satellite period T to orbital height h or comparing periods of two satellites.',
      calculationExample: {
        problem: 'Two satellites A and B revolve around a planet in circular orbits of radii 4 R and R respectively. Find the ratio of their periods TA / TB.',
        given: 'rA = 4 R, rB = R.',
        stepByStep: [
          'Kepler\'s Third Law: T² ∝ r³  =>  T ∝ r^(3/2)',
          'Ratio TA / TB = (rA / rB)^(3/2) = (4 R / R)^(3/2) = (4)^(3/2)',
          'Calculate: (4)^(3/2) = (√4)³ = 2³ = 8'
        ],
        answer: '8'
      }
    },
    {
      title: 'Total Mechanical Energy of Orbiting Satellite',
      formula: 'E = - \\frac{G \\cdot M \\cdot m}{2r} = - K = \\frac{1}{2} U',
      meaning: 'Sum of kinetic and gravitational potential energies of an orbiting satellite.',
      symbols: 'E = total energy (J), K = kinetic energy (J), U = potential energy (J), m = satellite mass (kg), r = orbital radius (m).',
      unit: 'Joule (J)',
      conditions: 'Negative sign indicates bound orbit.',
      whenToUse: 'Use when calculating energy required to shift satellite between orbits or finding binding energy.',
      calculationExample: {
        problem: 'A satellite of mass 200 kg is in a circular orbit of radius r = 2 R. Find its total mechanical energy. (G M / R² = g = 10 m/s², R = 6.4 × 10⁶ m)',
        given: 'm = 200 kg, r = 2 R, G M = g R².',
        stepByStep: [
          'Formula: E = - (G M m) / (2 r) = - (g R² m) / (2 × 2 R) = - (1/4) m g R',
          'Substitute values: E = - (1/4) × (200 kg) × (10 m/s²) × (6.4 × 10⁶ m)',
          'Calculate: E = - 50 × 10 × 6.4×10⁶ = - 3.2 × 10⁹ J'
        ],
        answer: '- 3.2 × 10⁹ J'
      }
    }
  ],

  neetImportantPoints: [
    'For any orbiting satellite: Kinetic Energy K = +E₀, Total Energy E = -E₀, Potential Energy U = -2E₀.',
    'Binding Energy = + (G M m) / (2r). To transfer a satellite from orbit r1 to r2 (r2 > r1), work required W = E2 - E1 = (G M m / 2) · [1/r1 - 1/r2].',
    'Geostationary satellites rotate from West to East in the equatorial plane with period T = 24 hours at height h ≈ 35,800 km.',
    'Weightlessness in a satellite is due to free-fall condition (normal reaction N = 0), NOT because gravity is zero!'
  ],

  commonConfusions: [
    {
      misconception: 'Confusing energy signs for an orbiting satellite.',
      correction: 'Kinetic energy K is ALWAYS POSITIVE, whereas potential energy U and total energy E are ALWAYS NEGATIVE for bound orbits.'
    },
    {
      misconception: 'Assuming geostationary satellites can be placed over any latitude.',
      correction: 'Geostationary orbits MUST lie in the equatorial plane (i = 0°); they cannot be stationed over non-equatorial latitudes like Delhi or London.'
    }
  ],

  quickRevision: [
    'Orbital speed: vo = √(GM/r) = √(gR) for close orbits (~7.92 km/s)',
    've = √2 vo (Increasing speed by 41.4% allows satellite to escape)',
    'Time Period: T = 2π √(r³/GM) (For close orbit, T ≈ 84.6 min)',
    'Energy: K = GMm/2r, U = -GMm/r, E = -GMm/2r (|E| = K = -U/2)'
  ],

  practiceQuestions: [
  {
    "id": "pq-esc-orb-1",
    "question": "A satellite is revolving in a circular orbit close to Earth's surface with speed vo. If its speed is suddenly increased by a factor of √2, the satellite will:",
    "options": [
      "Escape Earth's gravitational field completely along a parabolic path",
      "Fall back to Earth",
      "Revolve in an elliptical orbit of double radius",
      "Continue in the same orbit with higher frequency"
    ],
    "correctAnswer": 0,
    "explanation": "When speed increases from vo to √2 vo, the new speed becomes v = √2 vo = ve (the escape velocity!).\nNew Kinetic Energy K' = 1/2 m (√2 vo)² = m vo² = G M m / R.\nTotal Mechanical Energy E' = K' + U = (G M m / R) - (G M m / R) = 0.\nWith total energy E' = 0, the satellite is no longer bound and escapes to infinity along a parabolic trajectory.",
    "difficulty": "Easy"
  },
  {
    "id": "pq-esc-orb-2",
    "question": "A satellite orbits Earth at a height 6R above Earth's surface with a time period of 24 hours. The time period of another satellite orbiting at a height of 2.5R above Earth's surface is:",
    "options": [
      "6 √2 hours",
      "12 hours",
      "6 hours",
      "3 √2 hours"
    ],
    "correctAnswer": 0,
    "explanation": "First satellite: altitude h1 = 6R => orbital radius r1 = R + 6R = 7R, T1 = 24 hours.\nSecond satellite: altitude h2 = 2.5R => orbital radius r2 = R + 2.5R = 3.5R.\nBy Kepler's Third Law: (T2 / T1)² = (r2 / r1)³\n=> (T2 / 24)² = (3.5R / 7R)³ = (1 / 2)³ = 1 / 8.\nTaking square root on both sides:\nT2 / 24 = 1 / √8 = 1 / (2 √2)\n=> T2 = 24 / (2 √2) = 12 / √2 = 6 √2 hours ≈ 8.49 hours.",
    "difficulty": "Medium"
  },
  {
    "id": "prac-physescapeorbitalvelocity-3",
    "question": "Regarding Satellites, Orbital Velocity & Time Period, which of the following statements correctly resolves a common misconception about \"Confusing energy signs for an orbiting satellite.\"?",
    "options": [
      "Kinetic energy K is ALWAYS POSITIVE, whereas potential energy U and total energy E are ALWAYS NEGATIVE for bound orbits.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Satellites, Orbital Velocity & Time Period - Conceptual Clarity"
  },
  {
    "id": "prac-physescapeorbitalvelocity-4",
    "question": "Regarding Satellites, Orbital Velocity & Time Period, which of the following statements correctly resolves a common misconception about \"Assuming geostationary satellites can be placed over any latitude.\"?",
    "options": [
      "Geostationary orbits MUST lie in the equatorial plane (i = 0°); they cannot be stationed over non-equatorial latitudes like Delhi or London.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Satellites, Orbital Velocity & Time Period - Conceptual Clarity"
  },
  {
    "id": "prac-physescapeorbitalvelocity-5",
    "question": "In the study of Satellites, Orbital Velocity & Time Period, what is the exact definition and significance of \"Orbital Velocity (vo)\"?",
    "options": [
      "The constant tangential speed required by a satellite to maintain a stable circular orbit at distance r from the center of a planet: vo = √(GM/r).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The constant tangential speed required by a satellite to maintain a stable circular orbit at distance r from the center of a planet: vo = √(GM/r).. ",
    "difficulty": "Easy",
    "conceptTested": "Orbital Velocity (vo) definition"
  },
  {
    "id": "prac-physescapeorbitalvelocity-6",
    "question": "In the study of Satellites, Orbital Velocity & Time Period, what is the exact definition and significance of \"Binding Energy (BE)\"?",
    "options": [
      "The minimum energy required to liberate a satellite from its orbit and send it to infinity: BE = - Total Energy = + G M m / (2r).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The minimum energy required to liberate a satellite from its orbit and send it to infinity: BE = - Total Energy = + G M m / (2r).. ",
    "difficulty": "Easy",
    "conceptTested": "Binding Energy (BE) definition"
  },
  {
    "id": "prac-physescapeorbitalvelocity-7",
    "question": "In the study of Satellites, Orbital Velocity & Time Period, what is the exact definition and significance of \"Geostationary (Synchronous) Orbit\"?",
    "options": [
      "A circular equatorial orbit with period T = 24 hours. A satellite in this orbit appears stationary relative to any observer on Earth's surface.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A circular equatorial orbit with period T = 24 hours. A satellite in this orbit appears stationary relative to any observer on Earth's surface.. ",
    "difficulty": "Easy",
    "conceptTested": "Geostationary (Synchronous) Orbit definition"
  },
  {
    "id": "prac-physescapeorbitalvelocity-8",
    "question": "In the study of Satellites, Orbital Velocity & Time Period, what is the exact definition and significance of \"Polar Satellite\"?",
    "options": [
      "A satellite orbiting at low altitude (500-800 km) in a North-South plane passing over Earth's poles, completing one orbit in ~100 minutes.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A satellite orbiting at low altitude (500-800 km) in a North-South plane passing over Earth's poles, completing one orbit in ~100 minutes.. ",
    "difficulty": "Easy",
    "conceptTested": "Polar Satellite definition"
  },
  {
    "id": "prac-physescapeorbitalvelocity-9",
    "question": "In the study of Satellites, Orbital Velocity & Time Period, what is the exact definition and significance of \"Weightlessness\"?",
    "options": [
      "State of effective zero weight (Normal contact reaction N = 0) experienced by an observer in a freely falling frame or orbiting satellite.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "State of effective zero weight (Normal contact reaction N = 0) experienced by an observer in a freely falling frame or orbiting satellite.. ",
    "difficulty": "Easy",
    "conceptTested": "Weightlessness definition"
  },
  {
    "id": "prac-physescapeorbitalvelocity-10",
    "question": "Which of the following is a key NCERT statement regarding Satellites, Orbital Velocity & Time Period?",
    "options": [
      "Orbital speed: vo = √(GM/r) = √(gR) for close orbits (~7.92 km/s)",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Orbital speed: vo = √(GM/r) = √(gR) for close orbits (~7.92 km/s)",
    "difficulty": "Easy",
    "conceptTested": "Satellites, Orbital Velocity & Time Period NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-esc-orb-1',
      year: 2022,
      exam: 'NEET',
      question: 'A body of mass 600 g is revolving in a circular orbit of radius r around a planet. If its kinetic energy is K, the total mechanical energy of the satellite is:',
      options: [
        '- K',
        '- 2 K',
        '- K / 2',
        '+ K'
      ],
      correctAnswer: 0,
      explanation: 'For any satellite in a circular orbit:\nKinetic Energy K = + G M m / (2r)\nPotential Energy U = - G M m / r = - 2 K\nTotal Mechanical Energy E = K + U = K - 2 K = - K.\nThus, Total Mechanical Energy = - Kinetic Energy.',
      difficulty: 'Easy',
      conceptTested: 'Satellite Energy Relations',
      classification: 'Direct',
      marks: 4,
      ncertReference: 'NCERT Physics Class 11 Chapter 8 - Gravitation'
    },
    {
      id: 'pyq-esc-orb-2',
      year: 2020,
      exam: 'NEET',
      question: 'The time period of a geostationary satellite is 24 hours at a height 6R above the surface of Earth, where R is the radius of Earth. The time period of another satellite at a height of 2.5R from the surface of Earth is:',
      options: [
        '6 √2 hours',
        '12 hours',
        '6 hours',
        '3 √2 hours'
      ],
      correctAnswer: 0,
      explanation: 'Geostationary satellite: altitude h1 = 6R => r1 = R + 6R = 7R, T1 = 24 h.\nSecond satellite: altitude h2 = 2.5R => r2 = R + 2.5R = 3.5R.\nBy Kepler\'s Third Law: (T2 / T1)² = (r2 / r1)³\n=> (T2 / 24)² = (3.5R / 7R)³ = (1 / 2)³ = 1 / 8.\nTaking square root: T2 / 24 = 1 / √8 = 1 / (2 √2)\n=> T2 = 24 / (2 √2) = 12 / √2 = 6 √2 hours!\nConcept Tested: Kepler\'s Third Law T² ∝ r³ applied to satellite altitudes.',
      difficulty: 'Medium',
      conceptTested: 'Kepler\'s Third Law and Altitude',
      classification: 'Direct',
      marks: 4,
      ncertReference: 'NCERT Physics Class 11 Chapter 8 - Gravitation'
    }
  ]
};
