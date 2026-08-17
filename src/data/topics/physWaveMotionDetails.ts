import { DetailedTopicContent } from '../../types/neet';

export const physWaveMotionDetails: DetailedTopicContent = {
  topicId: 'phys-wave-motion',
  topicName: 'Wave Motion & Sound Speed',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Oscillations & Waves',
  chapter: 'Waves',

  whatIsThisTopic: 'Wave Motion & Sound Speed examines the fundamental mechanics of mechanical wave propagation through elastic media. It covers transverse and longitudinal waves, progressive wave mathematical equations, particle velocity versus wave speed, speed of transverse waves on stretched strings (v = √(T/μ)), and speed of sound in gases using Laplace\'s correction (v = √(γRT/M)) along with factors like temperature, pressure, and humidity.',

  basicIdea: [
    'Mechanical Waves: Waves that require a material medium for propagation (e.g., sound waves, water waves, string waves). Electromagnetic waves do not require a material medium.',
    'Transverse vs Longitudinal Waves: In transverse waves, medium particles oscillate perpendicular to the direction of wave propagation (crests and troughs; e.g., string waves). In longitudinal waves, particles oscillate parallel to wave propagation direction (compressions and rarefactions; e.g., sound waves in air).',
    'Progressive Wave Equation: A wave travelling in positive x-direction is represented by y(x,t) = A sin(k x - ω t + φ) or y(x,t) = A sin(ω t - k x + φ), where k = 2π/λ is propagation constant (wave number) and ω = 2π f is angular frequency.',
    'Wave Velocity vs Particle Velocity: Wave velocity v = f λ = ω / k is constant in a given uniform medium. Particle velocity v_p = ∂y/∂t oscillates between -Aω and +Aω and satisfies v_p = - v × (slope of wave curve dy/dx).',
    'Transverse Wave Speed on String: Speed of wave on stretched string depends on string tension T and linear mass density μ = m/L: v = √(T/μ).',
    'Speed of Sound in Gases (Laplace Correction): Newton assumed isothermal compression (v = √(P/ρ)), which gave 280 m/s in air (15% error). Laplace corrected this by using ADIABATIC compression: v = √(γ P / ρ) = √(γ R T / M).',
    'Environmental Factors on Sound Speed: Speed of sound increases with absolute temperature (v ∝ √T_K) and humidity (moist air density < dry air density). Pressure has ZERO effect on speed of sound at constant temperature!'
  ],

  importantTerms: [
    {
      term: 'Wavelength (λ)',
      definition: 'Distance between two consecutive points in the same phase of oscillation (e.g., crest to crest or compression to compression).'
    },
    {
      term: 'Propagation Constant / Wave Number (k)',
      definition: 'Phase change per unit distance travelled by the wave: k = 2π / λ (SI unit: rad/m).'
    },
    {
      term: 'Particle Velocity (v_p)',
      definition: 'Velocity of an individual medium particle executing SHM: v_p = ∂y/∂t = - v (dy/dx).'
    },
    {
      term: 'Linear Mass Density (μ)',
      definition: 'Mass per unit length of a string or wire: μ = m / L = ρ A (SI unit: kg/m).'
    },
    {
      term: 'Laplace Correction',
      definition: 'Inclusion of adiabatic bulk modulus B_ad = γ P in sound speed formula, resolving Newton\'s isothermal error.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Harmonic Progressive Wave Equations & Phase Relations',
      paragraphs: [
        'Mathematical Representation of Travelling Waves:',
        '• Wave travelling along +x direction: y(x,t) = A sin(k x - ω t + φ) or y(x,t) = A sin(ω t - k x + φ).',
        '• Wave travelling along -x direction: y(x,t) = A sin(k x + ω t + φ).',
        '• Wave Velocity: v = ω / k = (2π f) / (2π / λ) = f λ.',
        'Particle Kinematics in Progressive Waves:',
        '• Particle Displacement: y(x,t) = A sin(k x - ω t).',
        '• Particle Velocity: v_p = ∂y/∂t = - A ω cos(k x - ω t). Maximum particle speed v_{p,max} = A ω.',
        '• Slope of Wave Curve: dy/dx = A k cos(k x - ω t).',
        '• Key Relation: v_p = - v × (dy/dx). If wave moves right (+x) and slope is positive (+), particle moves downward (-y).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 220" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Axes -->
          <line x1="40" y1="110" x2="460" y2="110" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4"/>
          <line x1="40" y1="20" x2="40" y2="200" stroke="#94a3b8" stroke-width="2"/>
          <text x="460" y="105" fill="#94a3b8" font-size="11">x (position)</text>
          <text x="15" y="25" fill="#94a3b8" font-size="11">y(x,t)</text>

          <!-- Wave curve -->
          <path d="M 40 110 Q 90 20 140 110 T 240 110 T 340 110 T 440 110" fill="none" stroke="#38bdf8" stroke-width="2.5"/>

          <!-- Wavelength arrow -->
          <line x1="40" y1="35" x2="240" y2="35" stroke="#f59e0b" stroke-width="2"/>
          <polygon points="40,35 48,31 48,39" fill="#f59e0b"/>
          <polygon points="240,35 232,31 232,39" fill="#f59e0b"/>
          <text x="140" y="28" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Wavelength λ</text>

          <!-- Amplitude arrow -->
          <line x1="90" y1="110" x2="90" y2="20" stroke="#10b981" stroke-width="2" stroke-dasharray="3"/>
          <text x="98" y="70" fill="#10b981" font-size="11" font-weight="bold">Amplitude A</text>

          <!-- Wave motion direction arrow -->
          <line x1="300" y1="170" x2="380" y2="170" stroke="#ef4444" stroke-width="3"/>
          <polygon points="380,170 370,164 370,176" fill="#ef4444"/>
          <text x="340" y="190" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Wave Velocity v</text>
        </svg>`,
        caption: 'Harmonic Progressive Wave: Wavelength λ, Amplitude A, and Direction of Wave Propagation.'
      }
    },
    {
      heading: '2. Speed of Sound & Laplace\'s Formula',
      paragraphs: [
        'Speed of Wave on Stretched String:',
        '• v = √(T / μ), where T is tension in Newton and μ = m / L is linear mass density (kg/m).',
        '• In a hanging uniform heavy rope of mass m and length L, tension increases with height: T(y) = (m/L) g y = μ g y.',
        '• Speed of pulse at height y: v(y) = √(g y). Time taken for pulse to travel from bottom to top: t = 2 √(L / g).',
        'Speed of Sound in Gases:',
        '• Newton\'s Formula (Isothermal): B = P ⇒ v = √(P / ρ). For air at STP: v = 280 m/s (Inaccurate!).',
        '• Laplace Correction (Adiabatic): Sound propagation is extremely rapid, so heat cannot exchange ⇒ B_ad = γ P. Thus, v = √(γ P / ρ) = √(γ R T / M).',
        'Effect of Environmental Factors on Speed of Sound:',
        '1. Pressure: Independent! At constant T, if P doubles, density ρ also doubles, so P/ρ remains constant.',
        '2. Temperature: v ∝ √T_K. Speed increases by approx 0.61 m/s for every 1°C rise in temperature.',
        '3. Humidity: Moist air contains water vapor (M_H2O = 18 g/mol) replacing dry air molecules (M_dry ≈ 29 g/mol). Thus density decreases, so v_moist > v_dry.',
        '4. Frequency / Wavelength: Sound speed in a non-dispersive medium is independent of frequency!'
      ]
    }
  ],

  formulae: [
    {
      title: 'Progressive Wave Velocity',
      formulaName: 'Wave Speed Equation',
      formula: 'v = f \\lambda = \\frac{\\omega}{k}',
      meaning: 'Relates propagation velocity of wave to frequency, wavelength, angular frequency, and wave number.',
      variables: 'v = wave speed (m/s), f = frequency (Hz), λ = wavelength (m), ω = 2πf (rad/s), k = 2π/λ (rad/m)',
      whenToUse: 'Universal relation for all progressive mechanical and electromagnetic waves.'
    },
    {
      title: 'Transverse Wave Speed on String',
      formulaName: 'Stretched String Wave Speed',
      formula: 'v = \\sqrt{\\frac{T}{\\mu}} = \\sqrt{\\frac{T}{\\rho A}}',
      meaning: 'Calculates speed of transverse waves on a stretched string or wire.',
      variables: 'T = string tension (N), μ = mass per unit length (kg/m), ρ = density (kg/m³), A = cross-sectional area (m²)',
      whenToUse: 'Use for string waves, pulses on hanging ropes, and sonometer wire calculations.'
    },
    {
      title: 'Speed of Sound in Gas (Laplace Formula)',
      formulaName: 'Laplace Adiabatic Sound Speed',
      formula: 'v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma R T}{M}}',
      meaning: 'Gives speed of longitudinal sound wave in an ideal gas under adiabatic conditions.',
      variables: 'γ = C_p/C_v, P = pressure (Pa), ρ = density (kg/m³), R = 8.314 J/mol·K, T = temperature in Kelvin (K), M = molar mass (kg/mol)',
      whenToUse: 'Use to calculate sound speed in gases and evaluate temperature/molar mass variation.'
    },
    {
      title: 'Particle Velocity vs Wave Velocity',
      formulaName: 'Particle Velocity Wave Slope Relation',
      formula: 'v_p = - v \\left(\\frac{\\partial y}{\\partial x}\\right)',
      meaning: 'Relates transverse velocity of medium particle to wave propagation velocity and slope of wave curve.',
      variables: 'v_p = particle velocity (m/s), v = wave velocity (m/s), ∂y/∂x = slope of wave profile at position x',
      whenToUse: 'Use to find direction of particle motion from a given wave profile graph.'
    }
  ],

  neetImportantPoints: [
    '🔥 Pressure changes have ZERO effect on the speed of sound in a gas provided the temperature remains constant! (Because P/ρ = RT/M = constant).',
    '🔥 Speed of sound in moist air is GREATER than in dry air because water vapor lowers the effective molar mass and density of air.',
    '🔥 When a wave enters from one medium to another, FREQUENCY (f) remains STRICTLY CONSTANT because it depends only on the source, while velocity v and wavelength λ change!',
    '🔥 Particle velocity v_p = - v × (slope of wave). Maximum particle speed is v_{p,max} = A ω.',
    '🔥 Time taken for a pulse to travel from bottom to top of a heavy hanging rope of mass m and length L is t = 2 √(L / g).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking speed of sound increases when pressure increases at constant temperature.',
      correctFact: 'At constant temperature, increasing pressure compresses the gas proportionally, keeping P/ρ strictly constant. Hence, speed of sound is completely independent of pressure changes at constant T!',
      whyItMattersForNEET: 'One of the most frequently tested true/false conceptual assertion questions in NEET.'
    },
    {
      commonConfusion: 'Confusing wave propagation velocity v with medium particle velocity v_p.',
      correctFact: 'Wave velocity v = f λ is constant for a given medium, whereas particle velocity v_p = ∂y/∂t oscillates periodically in time between -Aω and +Aω.',
      whyItMattersForNEET: 'Crucial for graph interpretation and kinematics of wave motion.'
    },
    {
      commonConfusion: 'Assuming frequency changes when sound passes from air to water.',
      correctFact: 'Frequency depends ONLY on the source of sound. When sound enters water, frequency remains unchanged, but speed increases dramatically (from ~340 m/s to ~1480 m/s), so wavelength λ increases proportionally (v = f λ).',
      whyItMattersForNEET: 'Direct numerical question trap in NEET.'
    }
  ],

  quickRevision: [
    'Progressive wave: y = A sin(kx - ωt + φ); v = ω/k = f λ.',
    'Particle velocity: v_p = - v (dy/dx); v_{p,max} = A ω.',
    'Transverse wave on string: v = √(T/μ).',
    'Laplace formula: v = √(γ P/ρ) = √(γ R T / M).',
    'Temperature effect: v ∝ √T_K; Humidity: v_moist > v_dry.',
    'Pressure effect at constant T: NONE (v is independent of P).',
    'Refraction across media: Frequency f stays constant, v and λ change.'
  ],

  practiceQuestions: [
  {
    "id": "p-wavemotion-1",
    "question": "A transverse wave travelling on a stretched string is described by y(x,t) = 0.05 sin(20x - 400t), where x and y are in meters and t is in seconds. What is the maximum particle velocity in the string?",
    "options": [
      "20 m/s",
      "10 m/s",
      "800 m/s",
      "400 m/s"
    ],
    "correctOption": 0,
    "explanation": "Comparing with y = A sin(kx - ωt): Amplitude A = 0.05 m and angular frequency ω = 400 rad/s. The maximum particle velocity is given by v_{p,max} = A ω = 0.05 × 400 = 20 m/s.",
    "difficulty": "Easy",
    "conceptTested": "Maximum particle velocity calculation in progressive wave"
  },
  {
    "id": "p-wavemotion-2",
    "question": "The speed of sound in hydrogen gas at STP is v_H. What will be the speed of sound in oxygen gas at STP, assuming both are diatomic gases with same γ?",
    "options": [
      "v_H / 4",
      "v_H / 16",
      "4 v_H",
      "16 v_H"
    ],
    "correctOption": 0,
    "explanation": "Speed of sound in ideal gas v = √(γ RT / M). For same temperature and γ, v ∝ 1 / √M. Molar mass of H2 is 2 g/mol, and molar mass of O2 is 32 g/mol. Ratio v_O / v_H = √(M_H / M_O) = √(2 / 32) = √(1 / 16) = 1 / 4. Thus v_O = v_H / 4.",
    "difficulty": "Medium",
    "conceptTested": "Speed of sound dependence on molar mass"
  },
  {
    "id": "prac-physwavemotion-3",
    "question": "Regarding Wave Motion & Sound Speed, which of the following statements correctly resolves a common misconception about \"Thinking speed of sound increases when pressure increases at constant temperature.\"?",
    "options": [
      "At constant temperature, increasing pressure compresses the gas proportionally, keeping P/ρ strictly constant. Hence, speed of sound is completely independent of pressure changes at constant T!",
      "Incorrect assumption: Thinking speed of sound increases when pressure increases at constant temperature.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "At constant temperature, increasing pressure compresses the gas proportionally, keeping P/ρ strictly constant. Hence, speed of sound is completely independent of pressure changes at constant T!. One of the most frequently tested true/false conceptual assertion questions in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Wave Motion & Sound Speed - Conceptual Clarity"
  },
  {
    "id": "prac-physwavemotion-4",
    "question": "Regarding Wave Motion & Sound Speed, which of the following statements correctly resolves a common misconception about \"Confusing wave propagation velocity v with medium particle velocity v_p.\"?",
    "options": [
      "Wave velocity v = f λ is constant for a given medium, whereas particle velocity v_p = ∂y/∂t oscillates periodically in time between -Aω and +Aω.",
      "Incorrect assumption: Confusing wave propagation velocity v with medium particle velocity v_p.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Wave velocity v = f λ is constant for a given medium, whereas particle velocity v_p = ∂y/∂t oscillates periodically in time between -Aω and +Aω.. Crucial for graph interpretation and kinematics of wave motion.",
    "difficulty": "Medium",
    "conceptTested": "Wave Motion & Sound Speed - Conceptual Clarity"
  },
  {
    "id": "prac-physwavemotion-5",
    "question": "Regarding Wave Motion & Sound Speed, which of the following statements correctly resolves a common misconception about \"Assuming frequency changes when sound passes from air to water.\"?",
    "options": [
      "Frequency depends ONLY on the source of sound. When sound enters water, frequency remains unchanged, but speed increases dramatically (from ~340 m/s to ~1480 m/s), so wavelength λ increases proportionally (v = f λ).",
      "Incorrect assumption: Assuming frequency changes when sound passes from air to water.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Frequency depends ONLY on the source of sound. When sound enters water, frequency remains unchanged, but speed increases dramatically (from ~340 m/s to ~1480 m/s), so wavelength λ increases proportionally (v = f λ).. Direct numerical question trap in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Wave Motion & Sound Speed - Conceptual Clarity"
  },
  {
    "id": "prac-physwavemotion-6",
    "question": "In the study of Wave Motion & Sound Speed, what is the exact definition and significance of \"Wavelength (λ)\"?",
    "options": [
      "Distance between two consecutive points in the same phase of oscillation (e.g., crest to crest or compression to compression).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Distance between two consecutive points in the same phase of oscillation (e.g., crest to crest or compression to compression).. ",
    "difficulty": "Easy",
    "conceptTested": "Wavelength (λ) definition"
  },
  {
    "id": "prac-physwavemotion-7",
    "question": "In the study of Wave Motion & Sound Speed, what is the exact definition and significance of \"Propagation Constant / Wave Number (k)\"?",
    "options": [
      "Phase change per unit distance travelled by the wave: k = 2π / λ (SI unit: rad/m).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Phase change per unit distance travelled by the wave: k = 2π / λ (SI unit: rad/m).. ",
    "difficulty": "Easy",
    "conceptTested": "Propagation Constant / Wave Number (k) definition"
  },
  {
    "id": "prac-physwavemotion-8",
    "question": "In the study of Wave Motion & Sound Speed, what is the exact definition and significance of \"Particle Velocity (v_p)\"?",
    "options": [
      "Velocity of an individual medium particle executing SHM: v_p = ∂y/∂t = - v (dy/dx).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Velocity of an individual medium particle executing SHM: v_p = ∂y/∂t = - v (dy/dx).. ",
    "difficulty": "Easy",
    "conceptTested": "Particle Velocity (v_p) definition"
  },
  {
    "id": "prac-physwavemotion-9",
    "question": "In the study of Wave Motion & Sound Speed, what is the exact definition and significance of \"Linear Mass Density (μ)\"?",
    "options": [
      "Mass per unit length of a string or wire: μ = m / L = ρ A (SI unit: kg/m).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Mass per unit length of a string or wire: μ = m / L = ρ A (SI unit: kg/m).. ",
    "difficulty": "Easy",
    "conceptTested": "Linear Mass Density (μ) definition"
  },
  {
    "id": "prac-physwavemotion-10",
    "question": "In the study of Wave Motion & Sound Speed, what is the exact definition and significance of \"Laplace Correction\"?",
    "options": [
      "Inclusion of adiabatic bulk modulus B_ad = γ P in sound speed formula, resolving Newton's isothermal error.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Inclusion of adiabatic bulk modulus B_ad = γ P in sound speed formula, resolving Newton's isothermal error.. ",
    "difficulty": "Easy",
    "conceptTested": "Laplace Correction definition"
  }
],
  pyqs: [
    {
      id: 'pyq-wavemotion-2019',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'A wave travelling in the +x-direction having displacement along y-direction as 1 m, wavelength 2π m and frequency 1/π Hz is represented by:',
      options: [
        'y = \\sin(x - 2t)',
        'y = \\sin(x + 2t)',
        'y = \\sin(2x - t)',
        'y = \\sin(10\\pi x - 20\\pi t)'
      ],
      correctOption: 0,
      explanation: 'Given: Amplitude A = 1 m, wavelength λ = 2π m, frequency f = 1/π Hz. Wave number k = 2π / λ = 2π / (2π) = 1 rad/m. Angular frequency ω = 2π f = 2π (1/π) = 2 rad/s. A wave propagating in +x direction is given by y = A \\sin(k x - \\omega t) = 1 \\sin(1 x - 2 t) = \\sin(x - 2t).',
      difficulty: 'Easy',
      conceptTested: 'Mathematical representation of progressive travelling wave',
      verified: true
    },
    {
      id: 'pyq-wavemotion-2016',
      year: 2016,
      exam: 'NEET UG 2016',
      question: 'A uniform rope of length L and mass m_1 hangs vertically from a rigid support. A block of mass m_2 is attached to the free end of the rope. A transverse pulse of wavelength \\lambda_1 is produced at the lower end of the rope. The wavelength of the pulse when it reaches the top of the rope is \\lambda_2. The ratio \\lambda_2 / \\lambda_1 is:',
      options: [
        '\\sqrt{\\frac{m_1 + m_2}{m_2}}',
        '\\sqrt{\\frac{m_2}{m_1 + m_2}}',
        '\\sqrt{\\frac{m_1}{m_2}}',
        '\\sqrt{\\frac{m_1 + m_2}{m_1}}'
      ],
      correctOption: 0,
      explanation: 'Tension at lower end T_1 = m_2 g. Tension at top end T_2 = (m_1 + m_2) g. Wave speed on string v = \\sqrt{T/\\mu}. Since frequency f remains constant during pulse propagation: v = f \\lambda \\implies \\lambda \\propto v \\propto \\sqrt{T}. Therefore, \\lambda_2 / \\lambda_1 = v_2 / v_1 = \\sqrt{T_2 / T_1} = \\sqrt{\\frac{(m_1 + m_2)g}{m_2 g}} = \\sqrt{\\frac{m_1 + m_2}{m_2}}.',
      difficulty: 'Medium',
      conceptTested: 'Transverse wave speed and wavelength variation with tension',
      verified: true
    }
  ]
};
