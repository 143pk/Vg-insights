import { DetailedTopicContent } from '../../types/neet';

export const physCollisionsDetails: DetailedTopicContent = {
  topicId: 'phys-collisions',
  topicName: 'Collisions in 1D & 2D',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Work, Energy & Power',
  chapter: 'Work, Energy and Power',

  whatIsThisTopic: 'A collision is an isolated physical event in which two or more interacting bodies exert relatively strong impulsive internal forces on each other over a short time interval Δt, altering their motion and kinetic state. Linear momentum vector P is conserved in ALL collisions provided net external force F_ext = 0. Collisions are classified based on kinetic energy conservation via the Coefficient of Restitution e = (v₂ - v₁) / (u₁ - u₂). In Elastic collisions (e = 1), total kinetic energy is conserved. In Inelastic collisions (0 < e < 1) and Perfectly Inelastic collisions (e = 0), kinetic energy is lost to heat/sound/deformation. This topic covers 1D head-on collision master equations, velocity exchange cases, kinetic energy loss formulas, rebounding ball mechanics (h_n = e²ⁿ h₀), 2D oblique vector component resolution, and the equal-mass 90° scatter theorem.',

  basicIdea: [
    'Momentum Conservation: Holds in ALL collisions (Elastic, Inelastic, 1D, 2D) because internal impulsive forces cancel in pairs (Newton\'s 3rd Law): P_initial = P_final.',
    'Kinetic Energy Conservation: Total kinetic energy is conserved ONLY in Elastic collisions (e = 1). In inelastic collisions, KE decreases (ΔK > 0).',
    'Coefficient of Restitution: e = (Relative Speed of Separation) / (Relative Speed of Approach) = (v₂ - v₁) / (u₁ - u₂). For elastic e = 1, for perfectly inelastic e = 0, for real inelastic 0 < e < 1.',
    'Elastic 1D Equal Mass Collision: When two identical masses (m₁ = m₂) collide elastically in 1D, they COMPLETELY SWAP THEIR VELOCITIES (v₁ = u₂ and v₂ = u₁).',
    '2D Oblique Equal Mass Collision: When a moving body collides elastically at an angle with an identical stationary mass (u₂ = 0, m₁ = m₂), the two bodies diverge at a right angle (θ₁ + θ₂ = 90°).'
  ],

  importantTerms: [
    {
      term: 'Impulsive Force',
      definition: 'A large force acting over a very short time interval Δt, producing a finite change in linear momentum: J = ∫ F dt = Δp.'
    },
    {
      term: 'Coefficient of Restitution (e)',
      definition: 'The ratio of relative velocity of separation to relative velocity of approach along the line of impact: e = (v₂ - v₁) / (u₁ - u₂).'
    },
    {
      term: 'Elastic Collision',
      definition: 'A collision in which both total linear momentum AND total kinetic energy are conserved (e = 1, no permanent deformation or thermal dissipation).'
    },
    {
      term: 'Perfectly Inelastic Collision',
      definition: 'A collision in which colliding bodies stick together after impact and move with a common final velocity (e = 0, maximum kinetic energy loss).'
    },
    {
      term: 'Line of Impact',
      definition: 'The common normal vector line drawn at the point of contact during collision along which impulsive normal forces act.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Fundamentals & Classification of Collisions',
      paragraphs: [
        'During a collision between two masses m₁ and m₂, internal contact forces F₁₂ and F₂₁ act for a duration Δt.',
        'By Newton\'s Third Law, F₁₂ = -F₂₁. The net external force on the two-body system is zero (F_ext,net = 0).',
        'Therefore, TOTAL LINEAR MOMENTUM IS CONSERVED IN EVERY COLLISION:',
        'm₁ u₁ + m₂ u₂ = m₁ v₁ + m₂ v₂',
        'CLASSIFICATION OF COLLISIONS BY COEFFICIENT OF RESTITUTION (e):',
        '• Elastic Collision (e = 1): Momentum Conserved, Kinetic Energy Conserved (K_i = K_f). Example: Collision between atomic subatomic particles, hard steel balls.',
        '• Inelastic Collision (0 < e < 1): Momentum Conserved, Kinetic Energy NOT Conserved (K_f < K_i). Example: Real-world automobile crashes, billiard balls.',
        '• Perfectly Inelastic Collision (e = 0): Momentum Conserved, Bodies stick together (v₁ = v₂ = V_common), Maximum KE Loss. Example: Bullet embedded in block, clay dropped on floor.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="220" fill="#f8fafc" rx="12"/>
          
          <!-- BEFORE COLLISION -->
          <text x="120" y="30" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">1. BEFORE COLLISION</text>
          <circle cx="70" cy="70" r="22" fill="#2563eb"/>
          <text x="70" y="75" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">m₁</text>
          <line x1="92" y1="70" x2="135" y2="70" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow-blue)"/>
          <text x="110" y="60" fill="#2563eb" font-size="11" font-weight="bold">u₁</text>

          <circle cx="180" cy="70" r="18" fill="#d97706"/>
          <text x="180" y="75" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">m₂</text>
          <line x1="198" y1="70" x2="225" y2="70" stroke="#d97706" stroke-width="2.5" marker-end="url(#arrow-amber)"/>
          <text x="210" y="60" fill="#d97706" font-size="11" font-weight="bold">u₂</text>

          <!-- AFTER COLLISION -->
          <text x="380" y="30" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">2. AFTER COLLISION</text>
          <circle cx="330" cy="70" r="22" fill="#2563eb"/>
          <text x="330" y="75" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">m₁</text>
          <line x1="352" y1="70" x2="380" y2="70" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow-blue)"/>
          <text x="365" y="60" fill="#2563eb" font-size="11" font-weight="bold">v₁</text>

          <circle cx="440" cy="70" r="18" fill="#d97706"/>
          <text x="440" y="75" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">m₂</text>
          <line x1="458" y1="70" x2="490" y2="70" stroke="#d97706" stroke-width="2.5" marker-end="url(#arrow-amber)"/>
          <text x="470" y="60" fill="#d97706" font-size="11" font-weight="bold">v₂</text>

          <!-- Summary Box -->
          <rect x="50" y="125" width="400" height="75" fill="#e2e8f0" rx="8"/>
          <text x="250" y="145" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">Coefficient of Restitution (e):</text>
          <text x="250" y="168" fill="#1e293b" font-size="13" font-weight="bold" text-anchor="middle">e = (Separation Speed) / (Approach Speed) = (v₂ - v₁) / (u₁ - u₂)</text>

          <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
            </marker>
            <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#d97706"/>
            </marker>
          </defs>
        </svg>`,
        caption: 'Figure 1: One-dimensional head-on collision before and after impact along the line of centers.'
      }
    },
    {
      heading: '2. One-Dimensional Collision Master Velocity Equations',
      paragraphs: [
        'By combining Momentum Conservation (m₁ u₁ + m₂ u₂ = m₁ v₁ + m₂ v₂) and Restitution Equation (v₂ - v₁ = e (u₁ - u₂)), we solve for final velocities v₁ and v₂:',
        'v₁ = [ (m₁ - e m₂) / (m₁ + m₂) ] u₁ + [ (1 + e) m₂ / (m₁ + m₂) ] u₂',
        'v₂ = [ (1 + e) m₁ / (m₁ + m₂) ] u₁ + [ (m₂ - e m₁) / (m₁ + m₂) ] u₂',
        'CRUCIAL SPECIAL CASES FOR ELASTIC 1D COLLISION (e = 1):',
        '• Case A: Equal Masses (m₁ = m₂ = m):\nSubstituting m₁ = m₂ and e = 1 yields:\nv₁ = u₂ and v₂ = u₁.\nIdentical masses completely SWAP their velocities! If target m₂ was at rest (u₂ = 0), projectile m₁ comes to a dead stop (v₁ = 0) and target m₂ flies off with initial speed u₂ = u₁.',
        '• Case B: Massive Target at Rest (m₂ ≫ m₁, u₂ = 0):\nv₁ ≈ -u₁ and v₂ ≈ 0.\nThe light ball rebounds backward with same speed u₁, while massive target barely moves.',
        '• Case C: Massive Projectile colliding with Light Target at Rest (m₁ ≫ m₂, u₂ = 0):\nv₁ ≈ u₁ and v₂ ≈ 2 u₁.\nThe light target flies away at TWICE the speed of the heavy incoming projectile!'
      ]
    },
    {
      heading: '3. Kinetic Energy Loss & Rebounding Ball Formulae',
      paragraphs: [
        'LOSS OF KINETIC ENERGY IN 1D INELASTIC COLLISION (ΔK):',
        'ΔK = K_initial - K_final = 1/2 [ (m₁ m₂) / (m₁ + m₂) ] (u₁ - u₂)² (1 - e²)',
        '• For Elastic Collision (e = 1): ΔK = 0 (No energy loss).',
        '• For Perfectly Inelastic Collision (e = 0): ΔK_max = 1/2 [ (m₁ m₂) / (m₁ + m₂) ] (u₁ - u₂)². Maximum possible kinetic energy dissipated.',
        'REBOUNDING BALL DROPPED FROM HEIGHT h₀:',
        'A ball dropped from height h₀ strikes a rigid floor at speed u₁ = √(2 g h₀).',
        '• Rebound Speed after 1st bounce: v₁ = e u₁ = e √(2 g h₀).',
        '• Height reached after 1st bounce: h₁ = v₁² / (2g) = e² h₀.',
        '• Height reached after n-th bounce: h_n = e²ⁿ h₀.',
        '• Total Distance Travelled until coming to complete rest: S = h₀ [ (1 + e²) / (1 - e²) ].',
        '• Total Time Elapsed until coming to complete rest: T = √(2 h₀ / g) [ (1 + e) / (1 - e) ].'
      ],
      tables: [
        {
          headers: ['Parameter', '1st Bounce', '2nd Bounce', 'n-th Bounce', 'Total Series Sum to Infinity'],
          rows: [
            ['Rebound Speed v', 'e u₀', 'e² u₀', 'eⁿ u₀', '—'],
            ['Rebound Height h', 'e² h₀', 'e⁴ h₀', 'e²ⁿ h₀', 'S = h₀ (1 + e²) / (1 - e²)'],
            ['Time taken T', 'e t₀', 'e² t₀', 'eⁿ t₀', 'T_total = t₀ (1 + e) / (1 - e)']
          ]
        }
      ]
    },
    {
      heading: '4. Two-Dimensional Oblique Collisions (Vector Component Treatment)',
      paragraphs: [
        'In a 2D oblique collision, velocity vectors lie in a plane. Momentum MUST be conserved separately along perpendicular x-axis and y-axis:',
        '• Along x-axis: m₁ u₁ cos α₁ + m₂ u₂ cos α₂ = m₁ v₁ cos θ₁ + m₂ v₂ cos θ₂',
        '• Along y-axis: m₁ u₁ sin α₁ + m₂ u₂ sin α₂ = m₁ v₁ sin θ₁ + m₂ v₂ sin θ₂',
        'THE 90° SCATTER THEOREM FOR EQUAL MASSES (NEET High-Yield):',
        'Consider an elastic collision (e = 1) between two identical masses (m₁ = m₂ = m) where target m₂ is initially at rest (u₂ = 0).',
        'From momentum conservation: m u₁ = m v₁ + m v₂ ⇒ u₁ = v₁ + v₂.',
        'Squaring both sides (dot product): u₁² = v₁² + v₂² + 2 (v₁ · v₂).',
        'From Kinetic Energy Conservation: 1/2 m u₁² = 1/2 m v₁² + 1/2 m v₂² ⇒ u₁² = v₁² + v₂².',
        'Comparing both equations:',
        'v₁² + v₂² + 2 (v₁ · v₂) = v₁² + v₂² ⇒ 2 (v₁ · v₂) = 0 ⇒ v₁ · v₂ = 0.',
        'Since v₁ · v₂ = v₁ v₂ cos (θ₁ + θ₂) = 0, the divergence angle θ₁ + θ₂ = 90°!',
        'After an oblique elastic collision with an identical stationary body, the two masses ALWAYS move mutually perpendicular to each other!'
      ]
    }
  ],

  formulae: [
    {
      formulaName: 'Coefficient of Restitution',
      expression: 'e = \\frac{v_2 - v_1}{u_1 - u_2}',
      explanation: 'v_1, v_2 = final velocities along line of impact; u_1, u_2 = initial velocities.'
    },
    {
      formulaName: '1D Final Velocities Equations',
      expression: 'v_1 = \\left( \\frac{m_1 - e m_2}{m_1 + m_2} \\right) u_1 + \\left( \\frac{(1+e) m_2}{m_1 + m_2} \\right) u_2',
      explanation: 'Master formula for velocity of mass m_1 after 1D collision.'
    },
    {
      formulaName: 'Kinetic Energy Loss in 1D Inelastic Collision',
      expression: '\\Delta K = \\frac{1}{2} \\left[ \\frac{m_1 m_2}{m_1 + m_2} \\right] (u_1 - u_2)^2 \\left( 1 - e^2 \\right)',
      explanation: 'Quantifies mechanical energy lost into heat/sound during impact.'
    },
    {
      formulaName: 'Rebounding Ball Height after n-th Bounce',
      expression: 'h_n = e^{2n} h_0 \\quad \\text{and Total Distance } S = h_0 \\left( \\frac{1 + e^2}{1 - e^2} \\right)',
      explanation: 'h_0 = initial drop height, e = coefficient of restitution of floor.'
    },
    {
      formulaName: '2D Oblique Equal-Mass Divergence Angle',
      expression: '\\theta_1 + \\theta_2 = 90^\\circ \\quad (\\text{When } m_1 = m_2, e = 1, u_2 = 0)',
      explanation: 'After elastic oblique collision with identical stationary body, velocities are perpendicular.'
    }
  ],

  neetImportantPoints: [
    'Momentum is conserved in ALL collisions (Elastic & Inelastic). Kinetic energy is conserved ONLY in Elastic collisions.',
    'For elastic head-on collision between EQUAL MASSES, velocities swap completely (v₁ = u₂, v₂ = u₁).',
    'For oblique elastic collision between equal masses with target at rest, final motion directions are at 90° (θ₁ + θ₂ = 90°).',
    'Rebounding ball total time until rest: T = √(2h₀/g) × [(1 + e) / (1 - e)]. Total distance S = h₀ [(1 + e²) / (1 - e²)].'
  ],

  commonConfusions: [
    {
      misconception: 'Assuming momentum is lost during inelastic collisions.',
      correction: 'Momentum is strictly conserved in inelastic collisions. ONLY kinetic energy is converted into non-mechanical forms!'
    },
    {
      misconception: 'Applying 1D velocity formulas directly to 2D oblique collisions.',
      correction: 'In 2D collisions, restitution e applies ONLY along the normal line of impact, NOT along the tangential contact plane.'
    }
  ],

  quickRevision: [
    'Momentum conserved in ALL collisions. KE conserved ONLY in Elastic (e = 1).',
    'e = (v₂ - v₁) / (u₁ - u₂). Elastic: e = 1. Perfectly Inelastic: e = 0.',
    '1D Equal Masses Elastic: Velocities swap completely (v₁ = u₂, v₂ = u₁).',
    'KE Loss: ΔK = 1/2 [ (m₁ m₂) / (m₁ + m₂) ] (u₁ - u₂)² (1 - e²).',
    'Bounce Height: h_n = e²ⁿ h₀. Total Distance S = h₀ (1 + e²) / (1 - e²).',
    '2D Equal Mass Oblique Elastic: Scatter angle θ₁ + θ₂ = 90°.'
  ],

  practiceQuestions: [
  {
    "questionId": "pq-coll-1",
    "questionText": "A body of mass m moving with speed v collides head-on elastically with another stationary body of mass 2m. The fraction of initial kinetic energy transferred to the stationary body is:",
    "options": [
      "1/9",
      "4/9",
      "5/9",
      "8/9"
    ],
    "correctOption": 3,
    "explanation": "Given: m₁ = m, m₂ = 2m, u₁ = v, u₂ = 0, e = 1.\nFinal velocity of target m₂: v₂ = [ 2 m₁ / (m₁ + m₂) ] u₁ = [ 2 m / (m + 2m) ] v = (2/3) v.\nFinal KE of target m₂: K₂ = 1/2 (2m) v₂² = m (2/3 v)² = (4/9) m v².\nInitial KE of system K_i = 1/2 m v².\nFraction of KE transferred = K₂ / K_i = [ (4/9) m v² ] / [ (1/2) m v² ] = 8/9.",
    "difficulty": "Medium"
  },
  {
    "questionId": "pq-coll-2",
    "questionText": "A ball is dropped from a height of 20 m above a horizontal smooth floor. If the coefficient of restitution between ball and floor is e = 0.5, the total distance travelled by the ball before coming to rest is:",
    "options": [
      "33.3 m",
      "33.3 m",
      "33.3 m",
      "33.3 m"
    ],
    "correctOption": 0,
    "explanation": "Given: h₀ = 20 m, e = 0.5.\nTotal Distance S = h₀ [ (1 + e²) / (1 - e²) ] = 20 × [ (1 + 0.25) / (1 - 0.25) ] = 20 × (1.25 / 0.75) = 20 × (5/3) = 100/3 = 33.3 meters.",
    "difficulty": "Easy"
  },
  {
    "id": "prac-physcollisions-3",
    "question": "Regarding Collisions in 1D & 2D, which of the following statements correctly resolves a common misconception about \"Assuming momentum is lost during inelastic collisions.\"?",
    "options": [
      "Momentum is strictly conserved in inelastic collisions. ONLY kinetic energy is converted into non-mechanical forms!",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Collisions in 1D & 2D - Conceptual Clarity"
  },
  {
    "id": "prac-physcollisions-4",
    "question": "Regarding Collisions in 1D & 2D, which of the following statements correctly resolves a common misconception about \"Applying 1D velocity formulas directly to 2D oblique collisions.\"?",
    "options": [
      "In 2D collisions, restitution e applies ONLY along the normal line of impact, NOT along the tangential contact plane.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Collisions in 1D & 2D - Conceptual Clarity"
  },
  {
    "id": "prac-physcollisions-5",
    "question": "In the study of Collisions in 1D & 2D, what is the exact definition and significance of \"Impulsive Force\"?",
    "options": [
      "A large force acting over a very short time interval Δt, producing a finite change in linear momentum: J = ∫ F dt = Δp.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A large force acting over a very short time interval Δt, producing a finite change in linear momentum: J = ∫ F dt = Δp.. ",
    "difficulty": "Easy",
    "conceptTested": "Impulsive Force definition"
  },
  {
    "id": "prac-physcollisions-6",
    "question": "In the study of Collisions in 1D & 2D, what is the exact definition and significance of \"Coefficient of Restitution (e)\"?",
    "options": [
      "The ratio of relative velocity of separation to relative velocity of approach along the line of impact: e = (v₂ - v₁) / (u₁ - u₂).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The ratio of relative velocity of separation to relative velocity of approach along the line of impact: e = (v₂ - v₁) / (u₁ - u₂).. ",
    "difficulty": "Easy",
    "conceptTested": "Coefficient of Restitution (e) definition"
  },
  {
    "id": "prac-physcollisions-7",
    "question": "In the study of Collisions in 1D & 2D, what is the exact definition and significance of \"Elastic Collision\"?",
    "options": [
      "A collision in which both total linear momentum AND total kinetic energy are conserved (e = 1, no permanent deformation or thermal dissipation).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A collision in which both total linear momentum AND total kinetic energy are conserved (e = 1, no permanent deformation or thermal dissipation).. ",
    "difficulty": "Easy",
    "conceptTested": "Elastic Collision definition"
  },
  {
    "id": "prac-physcollisions-8",
    "question": "In the study of Collisions in 1D & 2D, what is the exact definition and significance of \"Perfectly Inelastic Collision\"?",
    "options": [
      "A collision in which colliding bodies stick together after impact and move with a common final velocity (e = 0, maximum kinetic energy loss).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A collision in which colliding bodies stick together after impact and move with a common final velocity (e = 0, maximum kinetic energy loss).. ",
    "difficulty": "Easy",
    "conceptTested": "Perfectly Inelastic Collision definition"
  },
  {
    "id": "prac-physcollisions-9",
    "question": "In the study of Collisions in 1D & 2D, what is the exact definition and significance of \"Line of Impact\"?",
    "options": [
      "The common normal vector line drawn at the point of contact during collision along which impulsive normal forces act.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The common normal vector line drawn at the point of contact during collision along which impulsive normal forces act.. ",
    "difficulty": "Easy",
    "conceptTested": "Line of Impact definition"
  },
  {
    "id": "prac-physcollisions-10",
    "question": "Which of the following is a key NCERT statement regarding Collisions in 1D & 2D?",
    "options": [
      "Momentum conserved in ALL collisions. KE conserved ONLY in Elastic (e = 1).",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Momentum conserved in ALL collisions. KE conserved ONLY in Elastic (e = 1).",
    "difficulty": "Easy",
    "conceptTested": "Collisions in 1D & 2D NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-coll-1',
      questionText: 'A body of mass 4 m moving with speed u collides head-on elastically with another body of mass 2 m at rest. The fraction of initial kinetic energy retained by the colliding body of mass 4 m is: [NEET 2019]',
      options: [
        '1/9',
        '8/9',
        '4/9',
        '1/3'
      ],
      correctOption: 0,
      explanation: 'Given: m₁ = 4m, m₂ = 2m, u₁ = u, u₂ = 0, e = 1.\nFinal velocity of m₁: v₁ = [ (m₁ - m₂) / (m₁ + m₂) ] u₁ = [ (4m - 2m) / (4m + 2m) ] u = (2/6) u = u / 3.\nFinal KE of m₁: K_f = 1/2 (4m) v₁² = 1/2 (4m) (u/3)² = (1/9) [ 1/2 (4m) u² ] = (1/9) K_i.\nFraction of KE retained = K_f / K_i = 1/9.',
      examName: 'NEET',
      year: 2019
    },
    {
      id: 'pyq-coll-2',
      questionText: 'A bullet of mass 10 g moving horizontal with velocity 400 m/s strikes a wooden block of mass 2 kg suspended by a light thread. As a result, the bullet gets embedded in the block and the combination rises through a vertical height h. The height h is (g = 10 m/s²): [AIPMT 2016]',
      options: [
        '10 cm',
        '20 cm',
        '30 cm',
        '40 cm'
      ],
      correctOption: 1,
      explanation: 'Given: m₁ = 0.01 kg, u₁ = 400 m/s, m₂ = 2 kg, u₂ = 0.\nPerfectly inelastic collision (bullet embedded):\nCommon velocity V = (m₁ u₁) / (m₁ + m₂) = (0.01 × 400) / (0.01 + 2) = 4 / 2.01 ≈ 2 m/s.\nBy conservation of mechanical energy for pendulum combo: 1/2 (m₁ + m₂) V² = (m₁ + m₂) g h\nh = V² / (2g) = 2² / (2 × 10) = 4 / 20 = 0.2 m = 20 cm.',
      examName: 'AIPMT',
      year: 2016
    }
  ]
};
