import { DetailedTopicContent } from '../../types/neet';

export const physRotationalKinematicsDetails: DetailedTopicContent = {
  topicId: 'phys-rotational-kinematics',
  topicName: 'Rotational Kinematics & Rolling Motion',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Rotational Motion',
  chapter: 'System of Particles and Rotational Motion',

  whatIsThisTopic: 'Rotational Kinematics describes the relationship between angular displacement (theta), angular velocity (omega), angular acceleration (alpha), and time (t) without directly considering the forces or torques causing the rotation. Rolling motion represents a combined motion consisting of simultaneous translation of the centre of mass and rotation about the centre of mass. In pure rolling (rolling without slipping) on a stationary surface, the point of contact between the rolling body and the surface is instantaneously at rest relative to the ground (v_contact = 0), yielding the fundamental kinematic condition v_cm = R * omega. This topic covers rotational kinematic equations, linear-angular relations, torque dynamics (tau = I alpha), rotational kinetic energy, energy partition ratios in pure rolling, static friction in rolling, and acceleration down an inclined plane.',

  basicIdea: [
    '1. Angular Kinematic Variables: Angular displacement theta (rad), Angular velocity omega = d(theta)/dt (rad/s), Angular acceleration alpha = d(omega)/dt = omega * d(omega)/d(theta) (rad/s^2). Note: 1 Revolution = 2π radians = 360°.',
    '2. Rotational Kinematic Equations (Constant Alpha): Mirror standard linear kinematic equations: omega = omega0 + alpha * t, theta = omega0 * t + (1/2) * alpha * t^2, omega^2 = omega0^2 + 2 * alpha * theta.',
    '3. Linear vs Angular Variable Relations: Linear distance s = r * theta, Tangential velocity v_t = r * omega, Tangential acceleration a_t = r * alpha, Radial (Centripetal) acceleration a_c = omega^2 * r = v^2 / r. Total acceleration a_total = sqrt(a_t^2 + a_c^2).',
    '4. Pure Rolling Condition: On a stationary floor, pure rolling without slipping requires v_cm = R * omega and a_cm = R * alpha. The bottom contact point has zero instantaneous velocity relative to the ground (v_bot = 0), while the top point moves at v_top = 2 v_cm.',
    '5. Rolling Down an Inclined Plane: Total kinetic energy K_total = (1/2) M v_cm^2 (1 + k^2 / R^2). Acceleration down incline a_cm = [g sin(theta)] / [1 + k^2 / R^2]. Bodies with SMALLER k^2/R^2 ratio (e.g. Solid Sphere = 0.4 < Disc = 0.5 < Ring = 1.0) roll faster and reach the bottom FIRST!'
  ],

  importantTerms: [
    {
      term: 'Angular Velocity',
      symbol: 'omega',
      definition: 'The rate of change of angular displacement with time: omega = d(theta) / dt.',
      neetNote: 'SI unit: rad/s. Conversion: f revolutions per minute (rpm) => omega = (2π * f) / 60 rad/s.'
    },
    {
      term: 'Pure Rolling (Rolling Without Slipping)',
      definition: 'Combined translational and rotational motion where the instantaneous velocity of the contact point relative to the surface is strictly zero.',
      neetNote: 'Kinematic relation: v_cm = R * omega. Static friction prevents slipping and does NO net work!'
    },
    {
      term: 'Energy Partition Ratio',
      definition: 'The fractional breakdown of total kinetic energy into translational and rotational kinetic energy during pure rolling.',
      neetNote: 'K_trans / K_total = 1 / (1 + k^2/R^2) and K_rot / K_total = (k^2/R^2) / (1 + k^2/R^2).'
    },
    {
      term: 'Instantaneous Centre of Zero Velocity',
      definition: 'The point of contact on a rolling wheel with a stationary floor that has v = 0 at that exact instant.',
      neetNote: 'Pure rolling can be analyzed as pure rotation about this contact point with moment of inertia I_contact = I_cm + M R².'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Rotational Kinematics & Linear-Angular Connections',
      paragraphs: [
        'When a rigid body rotates about a fixed axis with constant angular acceleration $\\alpha$, the angular motion is governed by equations analogous to linear motion under constant linear acceleration:',
        '1. $\\omega = \\omega_0 + \\alpha t$',
        '2. $\\theta = \\omega_0 t + \\frac{1}{2} \\alpha t^2$',
        '3. $\\omega^2 = \\omega_0^2 + 2 \\alpha \\theta$',
        '4. $\\theta_n = \\omega_0 + \\frac{\\alpha}{2} (2n - 1) \\quad (\\text{angular displacement in n-th second})$',
        'Relationships between Linear and Angular Quantities:',
        'For a point at radial distance $r$ from the axis of rotation:',
        '• Arc length traveled: $s = r \\theta$',
        '• Tangential velocity: $v_t = r \\omega$',
        '• Tangential acceleration (changing speed): $a_t = r \\alpha$',
        '• Radial / Centripetal acceleration (changing direction): $a_c = \\omega^2 r = \\frac{v_t^2}{r}$',
        'Total Linear Acceleration Vector:',
        '$$\\vec{a}_{total} = \\vec{a}_t + \\vec{a}_c \\implies a_{total} = \\sqrt{a_t^2 + a_c^2} = \\sqrt{(r\\alpha)^2 + (\\omega^2 r)^2}$$'
      ]
    },
    {
      heading: '2. Pure Rolling Mechanics & Point Velocity Superposition',
      paragraphs: [
        'Rolling motion is a combination of Translational Motion of Centre of Mass + Rotational Motion about Centre of Mass.',
        'Pure Rolling Condition on Stationary Floor:',
        'At the lowest point of contact $P_{bot}$, translational velocity vector $\\vec{v}_{cm}$ points forward, while rotational velocity vector $R \\vec{\\omega}$ points backward.',
        '$$\\vec{v}_{bot} = \\vec{v}_{cm} - R \\vec{\\omega} = 0 \\implies v_{cm} = R \\omega \\quad (\\text{No-slip condition})$$',
        'Velocities at Key Points on a Rolling Wheel of Radius $R$:',
        '• Topmost point ($P_{top}$): $\\vec{v}_{top} = \\vec{v}_{cm} + R \\vec{\\omega} = 2 \\vec{v}_{cm}$ (directed forward).',
        '• Centre of mass ($C$): $\\vec{v}_C = \\vec{v}_{cm}$ (directed forward).',
        '• Lowest contact point ($P_{bot}$): $\\vec{v}_{bot} = \\vec{v}_{cm} - R \\vec{\\omega} = 0$ (at rest relative to floor).',
        '• Any arbitrary point $P$ at angle $\\theta$ from lowest point: $v(\\theta) = 2 v_{cm} \\sin\\left(\\frac{\\theta}{2}\\right)$.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="180" fill="#f8fafc" rx="12"/>
          <!-- Floor -->
          <line x1="40" y1="150" x2="460" y2="150" stroke="#334155" stroke-width="3"/>
          <!-- Rolling Wheel -->
          <circle cx="250" cy="90" r="60" fill="#e2e8f0" stroke="#0f172a" stroke-width="3"/>
          <!-- Center Point -->
          <circle cx="250" cy="90" r="4" fill="#2563eb"/>
          <line x1="250" y1="90" x2="310" y2="90" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-v)"/>
          <text x="280" y="82" fill="#1d4ed8" font-size="11" font-weight="bold">v_cm</text>
          <!-- Top Point -->
          <circle cx="250" cy="30" r="4" fill="#ef4444"/>
          <line x1="250" y1="30" x2="350" y2="30" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-top)"/>
          <text x="300" y="22" fill="#dc2626" font-size="11" font-weight="bold">v_top = 2 v_cm</text>
          <!-- Bottom Point -->
          <circle cx="250" cy="150" r="5" fill="#059669"/>
          <text x="250" y="168" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">v_bot = 0 (Rest)</text>
          <defs>
            <marker id="arrow-v" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/></marker>
            <marker id="arrow-top" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker>
          </defs>
        </svg>`,
        caption: 'Figure 1: Point velocity superposition in pure rolling: v_top = 2 v_cm and v_bot = 0.'
      }
    },
    {
      heading: '3. Total Kinetic Energy & Energy Partition in Pure Rolling',
      paragraphs: [
        'Total Kinetic Energy of a Pure Rolling Body:',
        '$$K_{total} = K_{trans} + K_{rot} = \\frac{1}{2} M v_{cm}^2 + \\frac{1}{2} I_{cm} \\omega^2$$',
        'Substituting $I_{cm} = M k^2$ and $\\omega = \\frac{v_{cm}}{R}$:',
        '$$K_{total} = \\frac{1}{2} M v_{cm}^2 + \\frac{1}{2} (M k^2) \\left(\\frac{v_{cm}}{R}\\right)^2 = \\frac{1}{2} M v_{cm}^2 \\left( 1 + \\frac{k^2}{R^2} \\right)$$',
        'Energy Partition Ratios:',
        '• Fraction of Translational KE: $\\frac{K_{trans}}{K_{total}} = \\frac{1}{1 + k^2 / R^2}$',
        '• Fraction of Rotational KE: $\\frac{K_{rot}}{K_{total}} = \\frac{k^2 / R^2}{1 + k^2 / R^2}$',
        'Values of $\\frac{k^2}{R^2}$ for Standard Bodies (Must-Memorize Table):'
      ],
      tables: [
        {
          headers: ['Rolling Body', 'Ratio (k² / R²)', 'Fraction K_trans / K_total', 'Fraction K_rot / K_total'],
          rows: [
            ['Ring / Thin Cylindrical Shell', '1.00', '1 / 2 = 50%', '1 / 2 = 50%'],
            ['Disc / Solid Cylinder', '1 / 2 = 0.50', '2 / 3 ≈ 66.7%', '1 / 3 ≈ 33.3%'],
            ['Solid Sphere', '2 / 5 = 0.40', '5 / 7 ≈ 71.4%', '2 / 7 ≈ 28.6%'],
            ['Hollow Sphere / Thin Shell', '2 / 3 ≈ 0.67', '3 / 5 = 60.0%', '2 / 5 = 40.0%']
          ]
        }
      ]
    },
    {
      heading: '4. Pure Rolling Down an Inclined Plane (Derivations & Race Order)',
      paragraphs: [
        'Consider a body of mass $M$, radius $R$, and radius of gyration $k$ rolling down a rough inclined plane of inclination angle $\\theta$ and height $h$ without slipping.',
        'Linear Acceleration Down Incline ($a_{cm}$):',
        'Forces acting down incline: Gravity component $M g \\sin \\theta$ down, Static friction $f_s$ up the incline.',
        '1. Translational motion equation: $M g \\sin \\theta - f_s = M a_{cm}$',
        '2. Torque about COM: $\\tau = f_s R = I_{cm} \\alpha = (M k^2) \\left( \\frac{a_{cm}}{R} \\right) \\implies f_s = M a_{cm} \\left( \\frac{k^2}{R^2} \\right)$',
        '3. Substituting $f_s$ into translational equation:',
        '$$M g \\sin \\theta - M a_{cm} \\left( \\frac{k^2}{R^2} \\right) = M a_{cm} \\implies a_{cm} = \\frac{g \\sin \\theta}{1 + \\frac{k^2}{R^2}}$$',
        'Velocity at Bottom of Incline ($v_{cm}$):',
        'Applying conservation of mechanical energy $M g h = \\frac{1}{2} M v_{cm}^2 \\left( 1 + \\frac{k^2}{R^2} \\right)$:',
        '$$v_{cm} = \\sqrt{\\frac{2 g h}{1 + \\frac{k^2}{R^2}}}$$',
        'Time Taken to Reach Bottom ($t$):',
        '$$t = \\frac{1}{\sin \\theta} \\sqrt{\\frac{2 h \\left(1 + \\frac{k^2}{R^2}\\right)}{g}}$$',
        'The Great Incline Race Rule:',
        'Since $a_{cm} \\propto \\frac{1}{1 + k^2/R^2}$, bodies with SMALLER $k^2/R^2$ have HIGHER acceleration, reach HIGHER velocity at bottom, and take LESS TIME to reach bottom!',
        'Race Arrival Order at Bottom (Fastest to Slowest):',
        '$$\\text{Solid Sphere } (0.4) > \\text{Disc } (0.5) > \\text{Hollow Sphere } (0.67) > \\text{Ring } (1.0)$$'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="180" fill="#f8fafc" rx="12"/>
          <!-- Incline Triangle -->
          <polygon points="60,150 420,150 60,30" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
          <text x="140" y="140" fill="#1e293b" font-size="12" font-weight="bold">Angle θ</text>
          <!-- Rolling Body -->
          <circle cx="150" cy="60" r="30" fill="#cbd5e1" stroke="#2563eb" stroke-width="3"/>
          <circle cx="150" cy="60" r="4" fill="#2563eb"/>
          <!-- Forces -->
          <line x1="150" y1="60" x2="150" y2="110" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-mg)"/>
          <text x="155" y="105" fill="#0f172a" font-size="11" font-weight="bold">mg</text>
          <line x1="150" y1="60" x2="200" y2="77" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-a)"/>
          <text x="180" y="65" fill="#1d4ed8" font-size="11" font-weight="bold">a_cm</text>
          <line x1="135" y1="80" x2="110" y2="72" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-f)"/>
          <text x="115" y="65" fill="#dc2626" font-size="11" font-weight="bold">f_s</text>
          <defs>
            <marker id="arrow-mg" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#0f172a"/></marker>
            <marker id="arrow-a" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/></marker>
            <marker id="arrow-f" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker>
          </defs>
        </svg>`,
        caption: 'Figure 2: Body rolling down an incline showing gravity, static friction f_s, and acceleration a_cm.'
      }
    }
  ],

  formulae: [
    {
      formulaName: 'Rotational Kinematic Equations',
      expression: '\\omega = \\omega_0 + \\alpha t, \\quad \\theta = \\omega_0 t + \\frac{1}{2} \\alpha t^2, \\quad \\omega^2 = \\omega_0^2 + 2 \\alpha \\theta',
      explanation: 'Equations governing rotational motion under constant angular acceleration alpha.'
    },
    {
      formulaName: 'Pure Rolling No-Slip Condition',
      expression: 'v_{cm} = R \\omega, \\quad a_{cm} = R \\alpha',
      explanation: 'Kinematic link between linear COM motion and rotation on a stationary floor.'
    },
    {
      formulaName: 'Total Kinetic Energy of Pure Rolling',
      expression: 'K_{total} = \\frac{1}{2} M v_{cm}^2 \\left( 1 + \\frac{k^2}{R^2} \\right)',
      explanation: 'Combined translational and rotational kinetic energy of pure rolling body.'
    },
    {
      formulaName: 'Incline Acceleration Formula',
      expression: 'a_{cm} = \\frac{g \\sin \\theta}{1 + \\frac{k^2}{R^2}}',
      explanation: 'Linear acceleration of a body rolling down an incline of angle theta.'
    },
    {
      formulaName: 'Velocity at Bottom of Incline',
      expression: 'v_{cm} = \\sqrt{\\frac{2 g h}{1 + \\frac{k^2}{R^2}}}',
      explanation: 'Final COM velocity of body rolling down incline of height h from rest.'
    }
  ],

  neetImportantPoints: [
    'Static friction in pure rolling does NO NET WORK because the instantaneous velocity of the contact point is zero.',
    'For a solid sphere rolling down an incline, rotational KE is 2/7 (28.6%) of total KE, while translational KE is 5/7 (71.4%).',
    'When a solid sphere, disc, and ring are released simultaneously on the same incline, the Solid Sphere reaches the bottom FIRST.'
  ],

  commonConfusions: [
    {
      misconception: 'Assuming kinetic friction acts during pure rolling.',
      correction: 'In pure rolling without slipping, static friction acts to enforce v_cm = Rω. Kinetic friction acts ONLY during sliding/slipping.'
    },
    {
      misconception: 'Believing heavier objects roll down an incline faster.',
      correction: 'Incline acceleration a_cm depends ONLY on the mass distribution ratio k²/R² and angle θ, completely independent of total mass M or radius R!'
    }
  ],

  quickRevision: [
    'v_cm = R ω | a_cm = R α (Pure Rolling)',
    'v_top = 2 v_cm | v_bot = 0',
    'K_total = (1/2) M v² (1 + k²/R²)',
    'Incline acceleration: a_cm = g sinθ / (1 + k²/R²)',
    'Incline velocity: v_cm = √(2gh / (1 + k²/R²))',
    'Incline race winner: Solid Sphere (0.4) > Disc (0.5) > Hollow Sphere (0.67) > Ring (1.0)'
  ],

  practiceQuestions: [
  {
    "questionId": "pq-rk-1",
    "questionText": "A solid cylinder of mass 3 kg and radius 0.2 m rolls without slipping on a horizontal floor at a speed of 4 m/s. Its total kinetic energy is:",
    "options": [
      "24 J",
      "36 J",
      "16 J",
      "48 J"
    ],
    "correctOption": 1,
    "explanation": "For a solid cylinder, k²/R² = 1/2 = 0.5.\nTotal KE K = (1/2) M v² (1 + k²/R²) = (1/2) * 3 * (4)² * (1 + 0.5) = (1.5) * 16 * (1.5) = 24 * 1.5 = 36 Joules.",
    "difficulty": "Easy"
  },
  {
    "questionId": "pq-rk-2",
    "questionText": "A wheel starting from rest accelerates uniformly at 4 rad/s². The total angle rotated and the number of revolutions completed in 10 seconds are respectively:",
    "options": [
      "200 rad, 31.8 rev",
      "400 rad, 63.7 rev",
      "200 rad, 63.7 rev",
      "100 rad, 31.8 rev"
    ],
    "correctOption": 0,
    "explanation": "θ = ω0 t + (1/2) α t² = 0 + (1/2) * 4 * (10)² = 200 radians.\nNumber of revolutions N = θ / (2π) = 200 / (2 * 3.14159) = 200 / 6.283 = 31.83 revolutions.",
    "difficulty": "Easy"
  },
  {
    "id": "prac-physrotationalkinematics-3",
    "question": "Regarding Rotational Kinematics & Rolling Motion, which of the following statements correctly resolves a common misconception about \"Assuming kinetic friction acts during pure rolling.\"?",
    "options": [
      "In pure rolling without slipping, static friction acts to enforce v_cm = Rω. Kinetic friction acts ONLY during sliding/slipping.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Rotational Kinematics & Rolling Motion - Conceptual Clarity"
  },
  {
    "id": "prac-physrotationalkinematics-4",
    "question": "Regarding Rotational Kinematics & Rolling Motion, which of the following statements correctly resolves a common misconception about \"Believing heavier objects roll down an incline faster.\"?",
    "options": [
      "Incline acceleration a_cm depends ONLY on the mass distribution ratio k²/R² and angle θ, completely independent of total mass M or radius R!",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Rotational Kinematics & Rolling Motion - Conceptual Clarity"
  },
  {
    "id": "prac-physrotationalkinematics-5",
    "question": "In the study of Rotational Kinematics & Rolling Motion, what is the exact definition and significance of \"Angular Velocity\"?",
    "options": [
      "The rate of change of angular displacement with time: omega = d(theta) / dt.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The rate of change of angular displacement with time: omega = d(theta) / dt.. SI unit: rad/s. Conversion: f revolutions per minute (rpm) => omega = (2π * f) / 60 rad/s.",
    "difficulty": "Easy",
    "conceptTested": "Angular Velocity definition"
  },
  {
    "id": "prac-physrotationalkinematics-6",
    "question": "In the study of Rotational Kinematics & Rolling Motion, what is the exact definition and significance of \"Pure Rolling (Rolling Without Slipping)\"?",
    "options": [
      "Combined translational and rotational motion where the instantaneous velocity of the contact point relative to the surface is strictly zero.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Combined translational and rotational motion where the instantaneous velocity of the contact point relative to the surface is strictly zero.. Kinematic relation: v_cm = R * omega. Static friction prevents slipping and does NO net work!",
    "difficulty": "Easy",
    "conceptTested": "Pure Rolling (Rolling Without Slipping) definition"
  },
  {
    "id": "prac-physrotationalkinematics-7",
    "question": "In the study of Rotational Kinematics & Rolling Motion, what is the exact definition and significance of \"Energy Partition Ratio\"?",
    "options": [
      "The fractional breakdown of total kinetic energy into translational and rotational kinetic energy during pure rolling.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The fractional breakdown of total kinetic energy into translational and rotational kinetic energy during pure rolling.. K_trans / K_total = 1 / (1 + k^2/R^2) and K_rot / K_total = (k^2/R^2) / (1 + k^2/R^2).",
    "difficulty": "Easy",
    "conceptTested": "Energy Partition Ratio definition"
  },
  {
    "id": "prac-physrotationalkinematics-8",
    "question": "In the study of Rotational Kinematics & Rolling Motion, what is the exact definition and significance of \"Instantaneous Centre of Zero Velocity\"?",
    "options": [
      "The point of contact on a rolling wheel with a stationary floor that has v = 0 at that exact instant.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The point of contact on a rolling wheel with a stationary floor that has v = 0 at that exact instant.. Pure rolling can be analyzed as pure rotation about this contact point with moment of inertia I_contact = I_cm + M R².",
    "difficulty": "Easy",
    "conceptTested": "Instantaneous Centre of Zero Velocity definition"
  },
  {
    "id": "prac-physrotationalkinematics-9",
    "question": "Which of the following is a key NCERT statement regarding Rotational Kinematics & Rolling Motion?",
    "options": [
      "v_cm = R ω | a_cm = R α (Pure Rolling)",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: v_cm = R ω | a_cm = R α (Pure Rolling)",
    "difficulty": "Easy",
    "conceptTested": "Rotational Kinematics & Rolling Motion NCERT High-Yield Point"
  },
  {
    "id": "prac-physrotationalkinematics-10",
    "question": "Which of the following is a key NCERT statement regarding Rotational Kinematics & Rolling Motion?",
    "options": [
      "v_top = 2 v_cm | v_bot = 0",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: v_top = 2 v_cm | v_bot = 0",
    "difficulty": "Easy",
    "conceptTested": "Rotational Kinematics & Rolling Motion NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-rk-1',
      questionText: 'A solid sphere is in pure rolling motion on an inclined plane. The ratio of rotational kinetic energy to the total kinetic energy is: [NEET 2018]',
      options: [
        '2 / 7',
        '2 / 5',
        '1 / 2',
        '5 / 7'
      ],
      correctOption: 0,
      explanation: 'For a solid sphere, k²/R² = 2/5.\nFraction K_rot / K_total = (k²/R²) / (1 + k²/R²) = (2/5) / (1 + 2/5) = (2/5) / (7/5) = 2 / 7.',
      examName: 'NEET',
      year: 2018
    },
    {
      id: 'pyq-rk-2',
      questionText: 'A solid cylinder of mass 2 kg and radius 50 cm rolls up an inclined plane of angle 30° with an initial velocity of 4 m/s. The distance traveled by the cylinder up the incline before coming to rest is (g = 10 m/s²): [NEET 2021]',
      options: [
        '1.2 m',
        '2.4 m',
        '1.6 m',
        '0.8 m'
      ],
      correctOption: 1,
      explanation: 'At initial point, total KE K = (1/2) M v² (1 + k²/R²) = (1/2) * 2 * (4)² * (1 + 0.5) = 16 * 1.5 = 24 J.\nAt highest point along incline at distance s, vertical height h = s sin(30°) = s / 2.\nPotential energy M g h = 2 * 10 * (s / 2) = 10 s.\nEquating energy: 10 s = 24 => s = 2.4 meters.',
      examName: 'NEET',
      year: 2021
    }
  ]
};
