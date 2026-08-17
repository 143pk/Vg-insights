import { DetailedTopicContent } from '../../types/neet';

export const physTorqueAngularMomentumDetails: DetailedTopicContent = {
  topicId: 'phys-torque-angular-momentum',
  topicName: 'Torque & Angular Momentum',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Rotational Motion',
  chapter: 'System of Particles and Rotational Motion',

  whatIsThisTopic: 'Torque (also called moment of force) is the quantitative measure of the turning or rotational tendency imparted to a rigid body by an applied force about a pivot point or axis of rotation. Angular momentum is the rotational analog of linear momentum, representing the quantity of angular motion possessed by a rotating particle or rigid system. The relation vec(tau) = d vec(L) / dt forms the fundamental dynamical equation of rotational motion, exactly mirroring Newton\'s second law vec(F) = d vec(p) / dt. When the net external torque on a system is zero, its total angular momentum remains strictly conserved (vec(L) = const). This topic covers cross-product torque and angular momentum calculations, right-hand rule directionality, lever arm concepts, couple force balance, mechanical equilibrium conditions, rotational dynamics, and angular momentum conservation applications.',

  basicIdea: [
    '1. Vector Definition of Torque: Torque about a point O is vec(tau) = vec(r) x vec(F), where vec(r) is the position vector from O to the line of application of force vec(F). Magnitude tau = r F sin(theta) = F * d_perp (where d_perp = r sin(theta) is the lever arm).',
    '2. Couple & Rotational Equilibrium: A couple consists of two equal and opposite forces whose lines of action do not coincide. Net force is zero, but net torque is non-zero (tau = F * d) and independent of pivot location. Complete mechanical equilibrium requires BOTH sum vec(F)_ext = 0 and sum vec(tau)_ext = 0.',
    '3. Definition of Angular Momentum: For a point particle of momentum vec(p) = m vec(v), angular momentum about origin is vec(L) = vec(r) x vec(p) = m (vec(r) x vec(v)). For a rigid body rotating about a fixed axis, L = I omega.',
    '4. Torque-Angular Momentum Relation: Net external torque equals the time rate of change of angular momentum: vec(tau)_ext = d vec(L) / dt. In rigid body rotation with constant I, tau = I alpha.',
    '5. Conservation Law of Angular Momentum: If net external torque is zero (vec(tau)_ext = 0), then vec(L) = constant => I1 omega1 = I2 omega2. Decreasing moment of inertia automatically increases angular speed!'
  ],

  importantTerms: [
    {
      term: 'Torque (Moment of Force)',
      symbol: 'vec(tau)',
      definition: 'The vector measure of the rotational effect of a force about an origin or axis: vec(tau) = vec(r) x vec(F).',
      neetNote: 'Vector quantity. SI unit: Newton-meter (N m). Dimensions: [M L^2 T^-2] (Same dimensions as Work and Energy!).'
    },
    {
      term: 'Lever Arm (Moment Arm)',
      symbol: 'd_perp',
      definition: 'The perpendicular distance from the axis or point of rotation to the line of action of the force: d_perp = r sin(theta).',
      neetNote: 'If line of action of force passes directly through the pivot point, lever arm d_perp = 0 and torque tau = 0.'
    },
    {
      term: 'Angular Momentum',
      symbol: 'vec(L)',
      definition: 'The vector measure of the rotational momentum of a particle or system: vec(L) = vec(r) x vec(p) = I vec(omega).',
      neetNote: 'Vector quantity. SI unit: kg m^2 / s or J s. Dimensions: [M L^2 T^-1] (Identical dimensions to Planck\'s constant h!).'
    },
    {
      term: 'Couple',
      definition: 'A pair of two equal, parallel, and oppositely directed forces acting at different points on a rigid body.',
      neetNote: 'Produces purely rotational acceleration without any translational acceleration. Net force = 0.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Torque (Moment of Force) & Lever Arm Geometry',
      paragraphs: [
        'To produce rotation in a rigid body pivoted about a fixed point or axis, applying a force is necessary, but the turning effect depends on THREE factors:',
        '1. Magnitude of the applied force $F$.',
        '2. Distance $r$ of the point of application from the pivot point.',
        '3. Angle $\\theta$ between the position vector $\\vec{r}$ and force vector $\\vec{F}$.',
        'Mathematical Cross Product Definition:',
        '$$\\vec{\\tau} = \\vec{r} \\times \\vec{F}$$',
        'Magnitude of Torque:',
        '$$\\tau = r F \\sin \\theta = F (r \\sin \\theta) = F d_{\\perp}$$',
        'where $d_{\\perp} = r \\sin \\theta$ is called the Lever Arm or Moment Arm (the perpendicular distance from the origin to the line of action of force).',
        'Direction of Torque: Determined by the Right-Hand Thumb Rule. Curl fingers from $\\vec{r}$ to $\\vec{F}$ through the smaller angle $\\theta$; thumb points in direction of $\\vec{\\tau}$.',
        'Zero Torque Conditions:',
        '• $F = 0$ (no force applied).',
        '• $r = 0$ (force applied directly at the pivot point).',
        '• $\\theta = 0^\\circ$ or $180^\\circ$ (force directed radially along position vector; line of action passes through pivot).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="180" fill="#f8fafc" rx="12"/>
          <!-- Pivot Point O -->
          <circle cx="100" cy="120" r="8" fill="#1e293b"/>
          <text x="100" y="145" fill="#1e293b" font-size="12" font-weight="bold" text-anchor="middle">Pivot O</text>
          <!-- Rigid Arm Position Vector r -->
          <line x1="100" y1="120" x2="300" y2="80" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow-r)"/>
          <text x="190" y="85" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">Position Vector r</text>
          <!-- Force Vector F -->
          <line x1="300" y1="80" x2="380" y2="30" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-f)"/>
          <text x="350" y="30" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">Force F</text>
          <!-- Perpendicular Distance Lever Arm -->
          <line x1="100" y1="120" x2="255" y2="28" stroke="#059669" stroke-width="2" stroke-dasharray="4 3"/>
          <text x="170" y="55" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">d_perp = r sinθ</text>
          <defs>
            <marker id="arrow-r" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/></marker>
            <marker id="arrow-f" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker>
          </defs>
        </svg>`,
        caption: 'Figure 1: Vector definition of Torque τ = r × F and Lever Arm d_perp = r sinθ.'
      }
    },
    {
      heading: '2. Angular Momentum of a Particle & Rigid Body',
      paragraphs: [
        'Definition for a Single Particle:',
        'The angular momentum $\\vec{L}$ of a particle of mass $m$ moving with velocity $\\vec{v}$ (linear momentum $\\vec{p} = m \\vec{v}$) about origin $O$ is defined as:',
        '$$\\vec{L} = \\vec{r} \\times \\vec{p} = m (\\vec{r} \\times \\vec{v})$$',
        'Magnitude of Angular Momentum:',
        '$$L = r p \\sin \\theta = m v (r \\sin \\theta) = m v r_{\\perp}$$',
        'where $r_{\\perp} = r \\sin \\theta$ is the perpendicular distance from the origin to the velocity line of motion.',
        'Angular Momentum of a Rigid Body in Fixed-Axis Rotation:',
        'For a rigid body composed of masses $m_i$ rotating with uniform angular velocity $\\vec{\\omega}$ about a fixed axis:',
        '$$L = \\sum m_i v_i r_i = \\sum m_i (r_i \\omega) r_i = \\left( \\sum m_i r_i^2 \\right) \\omega = I \\omega$$',
        'Vector Form: $\\vec{L} = I \\vec{\\omega}$ (when rotation axis is a principal axis of symmetry).'
      ]
    },
    {
      heading: '3. Fundamental Relation between Torque & Angular Momentum (Derivation)',
      paragraphs: [
        'First-Principles Derivation:',
        'Differentiating the particle angular momentum definition $\\vec{L} = \\vec{r} \\times \\vec{p}$ with respect to time $t$:',
        '$$\\frac{d\\vec{L}}{dt} = \\frac{d}{dt} (\\vec{r} \\times \\vec{p}) = \\left( \\frac{d\\vec{r}}{dt} \\times \\vec{p} \\right) + \\left( \\vec{r} \\times \\frac{d\\vec{p}}{dt} \\right)$$',
        'Since $\\frac{d\\vec{r}}{dt} = \\vec{v}$ and $\\vec{p} = m \\vec{v}$, the first term becomes:',
        '$$\\vec{v} \\times (m \\vec{v}) = m (\\vec{v} \\times \\vec{v}) = 0 \\quad (\\text{cross product of parallel vectors is zero})$$',
        'By Newton\'s Second Law, $\\frac{d\\vec{p}}{dt} = \\vec{F}_{net}$. Thus the second term becomes $\\vec{r} \\times \\vec{F}_{net} = \\vec{\\tau}_{net}$.',
        'Hence:',
        '$$\\vec{\\tau}_{net} = \\frac{d\\vec{L}}{dt}$$',
        'This is the rotational equivalent of Newton\'s Second Law ($\\vec{F} = \\frac{d\\vec{p}}{dt}$).',
        'For a rigid body with constant moment of inertia $I$:',
        '$$\\tau = \\frac{d(I\\omega)}{dt} = I \\frac{d\\omega}{dt} = I \\alpha$$'
      ]
    },
    {
      heading: '4. Law of Conservation of Angular Momentum & High-Yield Applications',
      paragraphs: [
        'Statement: If the net external torque acting on a system about a given axis is zero ($\\vec{\\tau}_{ext} = 0$), the total angular momentum of the system about that axis remains CONSTANT:',
        '$$\\vec{\\tau}_{ext} = 0 \\implies \\frac{d\\vec{L}}{dt} = 0 \\implies \\vec{L} = \\text{constant}$$',
        'For a flexible or variable-shape rigid body rotating about an axis:',
        '$$I_1 \\omega_1 = I_2 \\omega_2 \\implies \\omega_2 = \\left( \\frac{I_1}{I_2} \\right) \\omega_1$$',
        'Consequence on Rotational Kinetic Energy:',
        'Rotational Kinetic Energy $K_{rot} = \\frac{1}{2} I \\omega^2 = \\frac{L^2}{2 I}$.',
        'When $I$ decreases (e.g., skater folding arms), $L$ stays constant, so $K_{rot} \\propto \\frac{1}{I}$ INCREASES! The extra kinetic energy comes from work done by muscle internal forces.',
        'NEET Applications:',
        '1. Diver / Acrobat: Folds body arms and legs inward $\\implies I$ decreases $\\implies \\omega$ increases (spins faster in air).',
        '2. Person standing on rotating turntable holding heavy weights in extended hands: Pulling hands inward decreases $I \\implies \\omega$ increases.',
        '3. Planet in elliptical orbit around Sun: Gravitational force is central (torque about Sun $\\tau = 0$) $\\implies L = m v r \\sin \\theta = \\text{const} \\implies r_1 v_1 = r_2 v_2$. Planet moves fastest at perihelion (closest distance) and slowest at aphelion.'
      ]
    },
    {
      heading: '5. Complete Translational vs Rotational Analogies Table',
      paragraphs: [
        'Mastering rotational mechanics in NEET becomes easy by converting every linear formula into its exact rotational counterpart:'
      ],
      tables: [
        {
          headers: ['Translational Motion Quantity', 'Translational Formula', 'Rotational Motion Quantity', 'Rotational Analogy Formula'],
          rows: [
            ['Linear Displacement (s)', 's', 'Angular Displacement (θ)', 'θ = s / r'],
            ['Linear Velocity (v)', 'v = ds / dt', 'Angular Velocity (ω)', 'ω = dθ / dt'],
            ['Linear Acceleration (a)', 'a = dv / dt', 'Angular Acceleration (α)', 'α = dω / dt'],
            ['Inertial Mass (m)', 'm', 'Moment of Inertia (I)', 'I = Σ m r²'],
            ['Linear Momentum (p)', 'p = m v', 'Angular Momentum (L)', 'L = I ω'],
            ['Linear Force (F)', 'F = m a = dp / dt', 'Torque (τ)', 'τ = I α = dL / dt'],
            ['Translational Kinetic Energy (K)', 'K = (1/2) m v²', 'Rotational Kinetic Energy (K_rot)', 'K_rot = (1/2) I ω² = L² / (2I)'],
            ['Translational Work (W)', 'W = ∫ F ds', 'Rotational Work (W)', 'W = ∫ τ dθ'],
            ['Translational Power (P)', 'P = F v', 'Rotational Power (P)', 'P = τ ω']
          ]
        }
      ]
    }
  ],

  formulae: [
    {
      formulaName: 'Vector Torque Formula',
      expression: '\\vec{\\tau} = \\vec{r} \\times \\vec{F}, \\quad \\tau = r F \\sin \\theta = F d_{\\perp}',
      explanation: 'Torque vector produced by force F acting at position vector r with lever arm d_perp.'
    },
    {
      formulaName: 'Angular Momentum of Particle',
      expression: '\\vec{L} = \\vec{r} \\times \\vec{p} = m (\\vec{r} \\times \\vec{v})',
      explanation: 'Angular momentum of a point mass m moving at velocity v at position r.'
    },
    {
      formulaName: 'Rigid Body Angular Momentum',
      expression: 'L = I \\omega',
      explanation: 'Angular momentum of a rigid body of moment of inertia I rotating at angular speed ω.'
    },
    {
      formulaName: 'Torque-Angular Acceleration Relation',
      expression: '\\tau_{net} = I \\alpha = \\frac{d L}{d t}',
      explanation: 'Rotational dynamical equation relating torque, moment of inertia, and angular acceleration.'
    },
    {
      formulaName: 'Conservation of Angular Momentum',
      expression: 'I_1 \\omega_1 = I_2 \\omega_2 \\quad (\\text{when } \\tau_{ext} = 0)',
      explanation: 'Equating initial and final angular momentum when net external torque is zero.'
    }
  ],

  neetImportantPoints: [
    'Torque and Angular Momentum are AXIAL VECTORS (pseudovectors) directed along the axis of rotation.',
    'Dimensions of Angular Momentum [M L^2 T^-1] are identical to Planck\'s constant h.',
    'Torque has the exact same dimensions as Work and Energy [M L^2 T^-2], but torque is a VECTOR while work is a SCALAR.',
    'When a rotating system contracts internally, L remains constant, but K_rot increases because K_rot = L² / (2I).'
  ],

  commonConfusions: [
    {
      misconception: 'Confusing torque with force or assuming a force always produces torque.',
      correction: 'A force produces zero torque if its line of action passes through the pivot point or axis of rotation.'
    },
    {
      misconception: 'Assuming kinetic energy remains conserved when arms are folded during rotation.',
      correction: 'Angular momentum L is conserved, but rotational kinetic energy K_rot INCREASES because internal work is done by muscles.'
    }
  ],

  quickRevision: [
    'τ = r × F = r F sinθ = F d_perp',
    'L = r × p = m v r sinθ = I ω',
    'τ = dL / dt = I α',
    'Conservation of L: If τ_ext = 0 ⇒ I1 ω1 = I2 ω2',
    'K_rot = (1/2) I ω² = L² / (2I)'
  ],

  practiceQuestions: [
  {
    "questionId": "pq-tam-1",
    "questionText": "Find the torque about origin when a force F = (2i - 3j + 4k) N acts on a particle whose position vector is r = (3i + 2j + 3k) m:",
    "options": [
      "17i - 6j - 13k N m",
      "-17i + 6j + 13k N m",
      "17i + 6j - 13k N m",
      "7i - 6j - 13k N m"
    ],
    "correctOption": 0,
    "explanation": "Torque τ = r × F.\nExpanding determinant:\n| i   j   k |\n| 3   2   3 |\n| 2  -3   4 |\n= i * (2*4 - 3*(-3)) - j * (3*4 - 3*2) + k * (3*(-3) - 2*2)\n= i * (8 + 9) - j * (12 - 6) + k * (-9 - 4)\n= 17i - 6j - 13k N m.",
    "difficulty": "Medium"
  },
  {
    "questionId": "pq-tam-2",
    "questionText": "A thin circular disc of mass M and radius R rotates about its central axis at angular speed ω. If two small point masses m are gently attached to opposite ends of its diameter, the new angular speed of the system is:",
    "options": [
      "M ω / (M + 2m)",
      "M ω / (M + 4m)",
      "(M + 2m) ω / M",
      "M ω / (M + m)"
    ],
    "correctOption": 1,
    "explanation": "Initial moment of inertia I1 = (1/2) M R².\nFinal moment of inertia I2 = (1/2) M R² + m R² + m R² = (1/2) M R² + 2 m R² = R² (M/2 + 2m) = R² (M + 4m) / 2.\nApplying conservation of angular momentum: I1 ω = I2 ω_new\n=> [(1/2) M R²] ω = [R² (M + 4m) / 2] ω_new\n=> ω_new = M ω / (M + 4m).",
    "difficulty": "Medium"
  },
  {
    "id": "prac-phystorqueangularmomentum-3",
    "question": "Regarding Torque & Angular Momentum, which of the following statements correctly resolves a common misconception about \"Confusing torque with force or assuming a force always produces torque.\"?",
    "options": [
      "A force produces zero torque if its line of action passes through the pivot point or axis of rotation.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Torque & Angular Momentum - Conceptual Clarity"
  },
  {
    "id": "prac-phystorqueangularmomentum-4",
    "question": "Regarding Torque & Angular Momentum, which of the following statements correctly resolves a common misconception about \"Assuming kinetic energy remains conserved when arms are folded during rotation.\"?",
    "options": [
      "Angular momentum L is conserved, but rotational kinetic energy K_rot INCREASES because internal work is done by muscles.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Torque & Angular Momentum - Conceptual Clarity"
  },
  {
    "id": "prac-phystorqueangularmomentum-5",
    "question": "In the study of Torque & Angular Momentum, what is the exact definition and significance of \"Torque (Moment of Force)\"?",
    "options": [
      "The vector measure of the rotational effect of a force about an origin or axis: vec(tau) = vec(r) x vec(F).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The vector measure of the rotational effect of a force about an origin or axis: vec(tau) = vec(r) x vec(F).. Vector quantity. SI unit: Newton-meter (N m). Dimensions: [M L^2 T^-2] (Same dimensions as Work and Energy!).",
    "difficulty": "Easy",
    "conceptTested": "Torque (Moment of Force) definition"
  },
  {
    "id": "prac-phystorqueangularmomentum-6",
    "question": "In the study of Torque & Angular Momentum, what is the exact definition and significance of \"Lever Arm (Moment Arm)\"?",
    "options": [
      "The perpendicular distance from the axis or point of rotation to the line of action of the force: d_perp = r sin(theta).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The perpendicular distance from the axis or point of rotation to the line of action of the force: d_perp = r sin(theta).. If line of action of force passes directly through the pivot point, lever arm d_perp = 0 and torque tau = 0.",
    "difficulty": "Easy",
    "conceptTested": "Lever Arm (Moment Arm) definition"
  },
  {
    "id": "prac-phystorqueangularmomentum-7",
    "question": "In the study of Torque & Angular Momentum, what is the exact definition and significance of \"Angular Momentum\"?",
    "options": [
      "The vector measure of the rotational momentum of a particle or system: vec(L) = vec(r) x vec(p) = I vec(omega).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The vector measure of the rotational momentum of a particle or system: vec(L) = vec(r) x vec(p) = I vec(omega).. Vector quantity. SI unit: kg m^2 / s or J s. Dimensions: [M L^2 T^-1] (Identical dimensions to Planck's constant h!).",
    "difficulty": "Easy",
    "conceptTested": "Angular Momentum definition"
  },
  {
    "id": "prac-phystorqueangularmomentum-8",
    "question": "In the study of Torque & Angular Momentum, what is the exact definition and significance of \"Couple\"?",
    "options": [
      "A pair of two equal, parallel, and oppositely directed forces acting at different points on a rigid body.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A pair of two equal, parallel, and oppositely directed forces acting at different points on a rigid body.. Produces purely rotational acceleration without any translational acceleration. Net force = 0.",
    "difficulty": "Easy",
    "conceptTested": "Couple definition"
  },
  {
    "id": "prac-phystorqueangularmomentum-9",
    "question": "Which of the following is a key NCERT statement regarding Torque & Angular Momentum?",
    "options": [
      "τ = r × F = r F sinθ = F d_perp",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: τ = r × F = r F sinθ = F d_perp",
    "difficulty": "Easy",
    "conceptTested": "Torque & Angular Momentum NCERT High-Yield Point"
  },
  {
    "id": "prac-phystorqueangularmomentum-10",
    "question": "Which of the following is a key NCERT statement regarding Torque & Angular Momentum?",
    "options": [
      "L = r × p = m v r sinθ = I ω",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: L = r × p = m v r sinθ = I ω",
    "difficulty": "Easy",
    "conceptTested": "Torque & Angular Momentum NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-tam-1',
      questionText: 'Find the torque about the origin for a force F = -3i + j + 5k N acting on a particle whose position vector is r = 7i + 3j + k m: [NEET 2021]',
      options: [
        '14i - 38j + 16k N m',
        '4i + 4j + 6k N m',
        '-14i + 38j - 16k N m',
        '14i + 38j + 16k N m'
      ],
      correctOption: 0,
      explanation: 'τ = r × F = | i  j  k | / | 7  3  1 | / | -3  1  5 |\n= i(15 - 1) - j(35 - (-3)) + k(7 - (-9))\n= 14i - 38j + 16k N m.',
      examName: 'NEET',
      year: 2021
    },
    {
      id: 'pyq-tam-2',
      questionText: 'A solid sphere is rotating freely about its symmetry axis in free space. The radius of the sphere is increased keeping its mass constant. Which of the following physical quantities would remain constant for the sphere? [NEET 2018]',
      options: [
        'Angular velocity',
        'Moment of inertia',
        'Rotational kinetic energy',
        'Angular momentum'
      ],
      correctOption: 3,
      explanation: 'Since no external torque acts on the sphere in free space (τ_ext = 0), its Angular Momentum (L = I ω) remains strictly conserved.',
      examName: 'NEET',
      year: 2018
    }
  ]
};
