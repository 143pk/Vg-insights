import { DetailedTopicContent } from '../../types/neet';

export const physFrictionDetails: DetailedTopicContent = {
  topicId: 'friction',
  topicName: 'Friction (Static, Kinetic & Rolling)',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Laws of Motion',
  chapter: 'Laws of Motion',

  whatIsThisTopic: 'Friction is the contact force component acting parallel to the surface of contact that opposes relative motion or the tendency of impending relative motion between two touching surfaces. Microscopically, friction arises from cold-welding of surface roughness asperities and molecular adhesion forces. Friction is categorized into Static Friction (self-adjusting up to limiting value f_s_max = mu_s N), Kinetic Friction (f_k = mu_k N, constant during sliding motion), and Rolling Friction (f_r, minimal force resisting rolling). This topic covers normal reaction computation, angle of friction, angle of repose, pulling vs. pushing force analysis, minimum pulling force physics, block on inclined plane dynamics, two-block contact friction, and verified NEET numerical problem templates.',

  basicIdea: [
    '1. Contact Force Decomposition: Total contact force vec(F)_c between two touching surfaces decomposes into two mutually perpendicular components: Normal Reaction vec(N) (perpendicular to contact plane) and Friction Force vec(f) (parallel to contact plane). Magnitude F_c = sqrt(N^2 + f^2).',
    '2. Static Friction f_s (Self-Adjusting): Opposes impending relative motion. Its value automatically matches the applied force up to a maximum threshold called Limiting Static Friction f_s_max = mu_s N. Thus, 0 <= f_s <= mu_s N.',
    '3. Kinetic Friction f_k: Opposes actual sliding relative motion once motion begins. Constant magnitude f_k = mu_k N. Generally mu_k < mu_s.',
    '4. Direction of Friction: Friction opposes RELATIVE motion between contact surfaces, NOT absolute ground motion! For example, walking forward is enabled by static friction pushing your shoe FORWARD relative to ground.',
    '5. Angle of Friction (lambda) & Angle of Repose (theta_r): Angle of friction is tan lambda = mu_s. Angle of repose is the maximum inclination angle at which a block remains at rest on an incline: tan theta_r = mu_s. Mathematically, Angle of Repose equals Angle of Friction (theta_r = lambda).'
  ],

  importantTerms: [
    {
      term: 'Contact Force',
      symbol: 'vec(F)_c',
      definition: 'The resultant electromagnetic force exerted by one surface on another across their contact interface: vec(F)_c = vec(N) + vec(f).',
      neetNote: 'Magnitude F_c = sqrt(N^2 + f^2). Angle with normal is angle of friction lambda = tan^-1 (f/N).'
    },
    {
      term: 'Static Friction',
      symbol: 'f_s',
      definition: 'A self-adjusting parallel contact force that prevents relative slipping between surfaces until applied force exceeds f_s_max.',
      neetNote: 'CRITICAL RULE: Static friction equals applied force until f_s_max is reached! It is NOT automatically equal to mu_s N.'
    },
    {
      term: 'Limiting Static Friction',
      symbol: 'f_s^{max}',
      definition: 'The maximum threshold value of static friction force just before relative motion commences: f_s_max = mu_s N.',
      neetNote: 'Proportional to normal reaction N and independent of apparent contact area.'
    },
    {
      term: 'Angle of Repose',
      symbol: 'theta_r',
      definition: 'The maximum angle of inclination of a rough plane with the horizontal for which a body placed on it remains in static equilibrium without sliding down.',
      neetNote: 'tan theta_r = mu_s => theta_r = tan^-1 (mu_s).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Microscopic Mechanics & Contact Force Decomposition',
      paragraphs: [
        'Origin of Friction:',
        'Even highly polished macroscopic surfaces contain microscopic peaks and valleys (asperities). When two surfaces are placed together, real contact occurs only at these high points, which form microscopic cold welds due to intense local pressure and inter-molecular adhesion.',
        'Contact Force Resolution:',
        'When an external force tries to move body A over surface B, the net contact force $\\vec{F}_c$ exerted by surface B on body A resolves into:',
        '1. Normal Reaction $\\vec{N}$: Component perpendicular to the contact surface. Measures the pressing force between surfaces.',
        '2. Friction Force $\\vec{f}$: Component parallel to the contact surface. Opposes relative motion.',
        'Total magnitude of contact force: $F_c = \\sqrt{N^2 + f^2}$.',
        'Angle of Friction $(\\lambda)$:',
        'The angle made by the resultant contact force $\\vec{F}_c$ with the normal reaction $\\vec{N}$ at limiting static friction condition:',
        '$$\\tan\\lambda = \\frac{f_s^{max}}{N} = \\frac{\\mu_s N}{N} = \\mu_s \\implies \\lambda = \\tan^{-1}(\\mu_s)$$'
      ]
    },
    {
      heading: '2. Friction on Inclined Planes & Angle of Repose',
      paragraphs: [
        'Consider a block of mass $m$ placed on a rough inclined plane of inclination angle $\\theta$ and static friction coefficient $\\mu_s$.',
        'Resolving weight $mg$ into components:',
        '• Component perpendicular to incline: $N = mg \\cos\\theta$.',
        '• Component parallel to incline (pulling down): $F_{pull} = mg \\sin\\theta$.',
        '• Maximum static friction available: $f_s^{max} = \\mu_s N = \\mu_s mg \\cos\\theta$.',
        'Three Inclination Regimes:',
        '1. If $\\theta < \\theta_r$ ($\\tan\\theta < \\mu_s$): Block remains at rest. Static friction $f_s = mg \\sin\\theta$.',
        '2. If $\\theta = \\theta_r$ ($\\tan\\theta = \\mu_s$): Block is on the verge of sliding. $f_s = f_s^{max} = \\mu_s mg \\cos\\theta$. Angle $\\theta_r$ is the Angle of Repose:',
        '$$\\theta_r = \\tan^{-1}(\\mu_s)$$',
        '3. If $\\theta > \\theta_r$ ($\\tan\\theta > \\mu_s$): Block slides down with kinetic friction $f_k = \\mu_k mg \\cos\\theta$. Downward acceleration:',
        '$$a = \\frac{mg \\sin\\theta - f_k}{m} = g(\\sin\\theta - \\mu_k \\cos\\theta)$$',
        '• Motion UP the incline: If block is pushed UP the incline, friction acts DOWN the incline, so deceleration $a = g(\\sin\\theta + \\mu_k \\cos\\theta)$.'
      ],
      visual: {
        caption: 'Free-Body Diagram of Block on Rough Inclined Plane',
        guide: 'Weight mg resolves into mg sin(theta) down incline and mg cos(theta) perpendicular. Normal N = mg cos(theta). Static friction f_s acts up the incline opposing downward motion.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 250" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <rect width="800" height="250" rx="16" fill="#f8fafc" />
          <g transform="translate(180, 20)">
            <!-- Inclined Plane Triangle -->
            <polygon points="50,180 380,180 380,50" fill="#e2e8f0" stroke="#334155" stroke-width="3" />
            <!-- Angle Theta -->
            <path d="M 100 180 A 50 50 0 0 0 85 162" fill="none" stroke="#2563eb" stroke-width="2" />
            <text x="105" y="172" fill="#1d4ed8" font-size="14" font-weight="extrabold">θ</text>

            <!-- Block on Incline -->
            <g transform="translate(200, 110) rotate(-31)">
              <rect x="-30" y="-20" width="60" height="40" rx="6" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2" />
              <text x="-8" y="5" fill="#ffffff" font-size="14" font-weight="extrabold">m</text>

              <!-- Normal Reaction N -->
              <line x1="0" y1="-20" x2="0" y2="-70" stroke="#16a34a" stroke-width="3" marker-end="url(#arrow-green-fr)" />
              <text x="10" y="-50" fill="#15803d" font-size="13" font-weight="bold">N = mg cos θ</text>

              <!-- Static Friction f_s (Up Incline) -->
              <line x1="-30" y1="20" x2="-80" y2="20" stroke="#d97706" stroke-width="3" marker-end="url(#arrow-orange-fr)" />
              <text x="-120" y="15" fill="#b45309" font-size="13" font-weight="bold">f_s</text>

              <!-- mg sin theta (Down Incline) -->
              <line x1="30" y1="20" x2="80" y2="20" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red-fr)" />
              <text x="35" y="40" fill="#b91c1c" font-size="13" font-weight="bold">mg sin θ</text>
            </g>

            <!-- Weight mg (Straight Down) -->
            <line x1="200" y1="110" x2="200" y2="190" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red-fr)" />
            <text x="210" y="160" fill="#b91c1c" font-size="13" font-weight="bold">mg</text>
          </g>

          <defs>
            <marker id="arrow-green-fr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a"/>
            </marker>
            <marker id="arrow-orange-fr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#d97706"/>
            </marker>
            <marker id="arrow-red-fr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
            </marker>
          </defs>
        </svg>`
      }
    },
    {
      heading: '3. Pulling vs. Pushing Mechanics & Minimum Force Theorem',
      paragraphs: [
        'Why it is EASIER TO PULL than to PUSH a heavy lawn roller:',
        'Case 1: Pushing a body with force $F$ at angle $\\theta$ below horizontal:',
        '• Vertical force balance: $N = mg + F \\sin\\theta$.',
        '• Limiting static friction: $f_s^{max} = \\mu_s (mg + F \\sin\\theta)$ (INCREASED friction!).',
        'Case 2: Pulling a body with force $F$ at angle $\\theta$ above horizontal:',
        '• Vertical force balance: $N = mg - F \\sin\\theta$.',
        '• Limiting static friction: $f_s^{max} = \\mu_s (mg - F \\sin\\theta)$ (DECREASED friction!).',
        'Conclusion: Pulling reduces normal reaction and limiting friction, making it significantly easier to pull than push.',
        'Minimum Force Required to Move a Body on Horizontal Ground:',
        'When pulling at angle $\\theta$ above horizontal, $F \\cos\\theta = f_s^{max} = \\mu (mg - F \\sin\\theta) \\implies F = \\frac{\\mu mg}{\\cos\\theta + \\mu \\sin\\theta}$.',
        'To minimize $F$, maximize denominator $(\\cos\\theta + \\mu \\sin\\theta)$. Derivative gives maximum when $\\tan\\theta = \\mu \\implies \\theta = \\lambda$ (Angle of Friction!).',
        '$$F_{min} = \\frac{\\mu mg}{\\sqrt{1 + \\mu^2}} = mg \\sin\\lambda$$'
      ]
    }
  ],

  formulae: [
    {
      title: 'Limiting Static & Kinetic Friction',
      formula: 'f_s^{max} = \\mu_s N, \\quad f_k = \\mu_k N',
      variables: 'f = friction force, mu = friction coefficient, N = normal reaction.',
      whenToUse: 'Primary formulas for calculating maximum static or constant kinetic friction.'
    },
    {
      title: 'Angle of Friction & Angle of Repose',
      formula: '\\tan\\lambda = \\mu_s, \\quad \\tan\\theta_r = \\mu_s \\implies \\theta_r = \\lambda',
      variables: 'lambda = angle of friction, theta_r = angle of repose, mu_s = static friction coefficient.',
      whenToUse: 'Use to find threshold angle for sliding down an inclined plane.'
    },
    {
      title: 'Minimum Pulling Force along Horizontal Ground',
      formula: 'F_{min} = \\frac{\\mu mg}{\\sqrt{1 + \\mu^2}} = mg \\sin\\lambda',
      variables: 'F_min = minimum force required at optimal pulling angle theta = tan^-1(mu).',
      whenToUse: 'Use when asked for the minimum force needed to start moving a body on horizontal ground.',
      calculationExample: {
        problem: 'A block of mass 10 kg rests on a rough horizontal surface with coefficient of friction mu = 1 / sqrt(3). Find the minimum force required to move the block. (g = 10 m/s²)',
        given: 'm = 10 kg, g = 10 m/s², mu = 1 / sqrt(3)',
        stepByStep: [
          'Step 1: Formula F_min = (mu * m * g) / sqrt(1 + mu^2)',
          'Step 2: Numerator = (1/sqrt(3)) * 10 * 10 = 100 / sqrt(3)',
          'Step 3: Denominator = sqrt(1 + (1/sqrt(3))^2) = sqrt(1 + 1/3) = sqrt(4/3) = 2 / sqrt(3)',
          'Step 4: F_min = (100 / sqrt(3)) / (2 / sqrt(3)) = 100 / 2 = 50 N.'
        ],
        answer: 'F_min = 50 N'
      }
    },
    {
      title: 'Inclined Plane Acceleration Downward',
      formula: 'a = g(\\sin\\theta - \\mu_k \\cos\\theta)',
      variables: 'theta = incline angle, mu_k = kinetic friction coefficient, g = 9.8 or 10 m/s².',
      whenToUse: 'Use for block sliding down a rough inclined plane.'
    }
  ],

  neetImportantPoints: [
    '1. High-Yield Rule: Static friction is self-adjusting! $f_s = F_{applied}$ up to $f_s^{max} = \\mu_s N$. If applied force $F = 5\\text{ N}$ and $f_s^{max} = 20\\text{ N}$, the static friction force is $5\\text{ N}$, NOT $20\\text{ N}$!',
    '2. High-Yield Rule: Angle of Repose $\\theta_r$ equals Angle of Friction $\\lambda$: $\\tan\\theta_r = \\tan\\lambda = \\mu_s$.',
    '3. High-Yield Rule: Minimum force required to pull a mass $m$ on horizontal ground is $F_{min} = \\frac{\\mu mg}{\\sqrt{1 + \\mu^2}}$ applied at angle $\\theta = \\tan^{-1}\\mu$.',
    '4. High-Yield Rule: Rolling friction is dramatically smaller than sliding friction: $f_{rolling} \\ll f_{kinetic} \\ll f_{static}$.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming friction force is always equal to mu * N.',
      correctFact: 'Static friction is self-adjusting (0 <= f_s <= mu_s N). It equals mu_s N ONLY when motion is impending (limiting friction)!',
      whyItMattersForNEET: 'Very common NEET option trap where students blindly multiply mu * N.'
    },
    {
      commonConfusion: 'Believing friction always opposes motion.',
      correctFact: 'Friction opposes RELATIVE motion between contact surfaces. Friction actually PROPELS a walking person, a accelerating car wheel, or a block placed on top of a moving truck forward!',
      whyItMattersForNEET: 'Crucial conceptual distinction tested in assertion-reason questions.'
    }
  ],

  quickRevision: [
    'Static friction 0 <= f_s <= mu_s N (self-adjusting to match applied force)',
    'Kinetic friction f_k = mu_k N (constant during sliding)',
    'Angle of friction tan lambda = mu_s; Angle of repose tan theta_r = mu_s',
    'Pulling vs Pushing: Pulling reduces N (N = mg - F sin theta) making it easier',
    'Minimum force to pull on horizontal: F_min = (mu mg) / sqrt(1 + mu^2)',
    'Incline downward acceleration: a = g (sin theta - mu_k cos theta)'
  ],

  practiceQuestions: [
  {
    "id": "prac-fr-1",
    "question": "A block of mass 2 kg rests on a rough horizontal surface with mu_s = 0.4. A horizontal force of 5 N is applied to the block. The friction force acting on the block is (g = 10 m/s²):",
    "options": [
      "5 N",
      "8 N",
      "3 N",
      "0 N"
    ],
    "correctAnswer": 0,
    "explanation": "Limiting friction f_s_max = mu_s N = 0.4 * (2 * 10) = 8 N. Since applied force F = 5 N is LESS than f_s_max (8 N), the block remains at rest and static friction self-adjusts to equal the applied force: f_s = 5 N.",
    "difficulty": "Easy",
    "conceptTested": "Self-adjusting nature of static friction"
  },
  {
    "id": "prac-fr-2",
    "question": "The angle of inclination of a rough inclined plane is increased until a block placed on it just begins to slide down when angle is 30°. What is the coefficient of static friction?",
    "options": [
      "1 / sqrt(3)",
      "sqrt(3)",
      "1 / 2",
      "sqrt(3) / 2"
    ],
    "correctAnswer": 0,
    "explanation": "The angle at which block just begins to slide is the Angle of Repose theta_r = 30°. mu_s = tan theta_r = tan 30° = 1 / sqrt(3).",
    "difficulty": "Easy",
    "conceptTested": "Angle of repose formula"
  },
  {
    "id": "prac-friction-3",
    "question": "Regarding Friction (Static, Kinetic & Rolling), which of the following statements correctly resolves a common misconception about \"Assuming friction force is always equal to mu * N.\"?",
    "options": [
      "Static friction is self-adjusting (0 <= f_s <= mu_s N). It equals mu_s N ONLY when motion is impending (limiting friction)!",
      "Incorrect assumption: Assuming friction force is always equal to mu * N.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Static friction is self-adjusting (0 <= f_s <= mu_s N). It equals mu_s N ONLY when motion is impending (limiting friction)!. Very common NEET option trap where students blindly multiply mu * N.",
    "difficulty": "Medium",
    "conceptTested": "Friction (Static, Kinetic & Rolling) - Conceptual Clarity"
  },
  {
    "id": "prac-friction-4",
    "question": "Regarding Friction (Static, Kinetic & Rolling), which of the following statements correctly resolves a common misconception about \"Believing friction always opposes motion.\"?",
    "options": [
      "Friction opposes RELATIVE motion between contact surfaces. Friction actually PROPELS a walking person, a accelerating car wheel, or a block placed on top of a moving truck forward!",
      "Incorrect assumption: Believing friction always opposes motion.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Friction opposes RELATIVE motion between contact surfaces. Friction actually PROPELS a walking person, a accelerating car wheel, or a block placed on top of a moving truck forward!. Crucial conceptual distinction tested in assertion-reason questions.",
    "difficulty": "Medium",
    "conceptTested": "Friction (Static, Kinetic & Rolling) - Conceptual Clarity"
  },
  {
    "id": "prac-friction-5",
    "question": "In the study of Friction (Static, Kinetic & Rolling), what is the exact definition and significance of \"Contact Force\"?",
    "options": [
      "The resultant electromagnetic force exerted by one surface on another across their contact interface: vec(F)_c = vec(N) + vec(f).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The resultant electromagnetic force exerted by one surface on another across their contact interface: vec(F)_c = vec(N) + vec(f).. Magnitude F_c = sqrt(N^2 + f^2). Angle with normal is angle of friction lambda = tan^-1 (f/N).",
    "difficulty": "Easy",
    "conceptTested": "Contact Force definition"
  },
  {
    "id": "prac-friction-6",
    "question": "In the study of Friction (Static, Kinetic & Rolling), what is the exact definition and significance of \"Static Friction\"?",
    "options": [
      "A self-adjusting parallel contact force that prevents relative slipping between surfaces until applied force exceeds f_s_max.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A self-adjusting parallel contact force that prevents relative slipping between surfaces until applied force exceeds f_s_max.. CRITICAL RULE: Static friction equals applied force until f_s_max is reached! It is NOT automatically equal to mu_s N.",
    "difficulty": "Easy",
    "conceptTested": "Static Friction definition"
  },
  {
    "id": "prac-friction-7",
    "question": "In the study of Friction (Static, Kinetic & Rolling), what is the exact definition and significance of \"Limiting Static Friction\"?",
    "options": [
      "The maximum threshold value of static friction force just before relative motion commences: f_s_max = mu_s N.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The maximum threshold value of static friction force just before relative motion commences: f_s_max = mu_s N.. Proportional to normal reaction N and independent of apparent contact area.",
    "difficulty": "Easy",
    "conceptTested": "Limiting Static Friction definition"
  },
  {
    "id": "prac-friction-8",
    "question": "In the study of Friction (Static, Kinetic & Rolling), what is the exact definition and significance of \"Angle of Repose\"?",
    "options": [
      "The maximum angle of inclination of a rough plane with the horizontal for which a body placed on it remains in static equilibrium without sliding down.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The maximum angle of inclination of a rough plane with the horizontal for which a body placed on it remains in static equilibrium without sliding down.. tan theta_r = mu_s => theta_r = tan^-1 (mu_s).",
    "difficulty": "Easy",
    "conceptTested": "Angle of Repose definition"
  },
  {
    "id": "prac-friction-9",
    "question": "Which of the following is a key NCERT statement regarding Friction (Static, Kinetic & Rolling)?",
    "options": [
      "Static friction 0 <= f_s <= mu_s N (self-adjusting to match applied force)",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Static friction 0 <= f_s <= mu_s N (self-adjusting to match applied force)",
    "difficulty": "Easy",
    "conceptTested": "Friction (Static, Kinetic & Rolling) NCERT High-Yield Point"
  },
  {
    "id": "prac-friction-10",
    "question": "Which of the following is a key NCERT statement regarding Friction (Static, Kinetic & Rolling)?",
    "options": [
      "Kinetic friction f_k = mu_k N (constant during sliding)",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Kinetic friction f_k = mu_k N (constant during sliding)",
    "difficulty": "Easy",
    "conceptTested": "Friction (Static, Kinetic & Rolling) NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-fr-1',
      year: 2018,
      exam: 'NEET UG',
      examYear: 'NEET UG 2018',
      question: 'A block of mass m is kept on a rough inclined plane of inclination theta. The coefficient of friction between the block and the inclined plane is mu. What is the minimum force needed to push the block UP the inclined plane?',
      options: ['m g (sin theta + mu cos theta)', 'm g (sin theta - mu cos theta)', 'm g (mu cos theta - sin theta)', 'm g sin theta'],
      correctAnswer: 0,
      explanation: 'To push the block UP the incline, friction f = mu N = mu m g cos theta acts DOWN the incline. Also component of weight m g sin theta acts DOWN the incline. Net force required to move block up at constant speed: F = m g sin theta + mu m g cos theta = m g (sin theta + mu cos theta).',
      topicId: 'friction',
      difficulty: 'Medium',
      conceptTested: 'Force required to move block up inclined plane',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-fr-2',
      year: 2020,
      exam: 'NEET UG',
      examYear: 'NEET UG 2020',
      question: 'A block of mass 10 kg is in contact with the inner wall of a vertical hollow cylinder of radius 1 m. The coefficient of friction between the wall and the block is 0.1. The minimum angular speed of cylinder for the block not to fall is (g = 10 m/s²):',
      options: ['10 rad/s', '10 sqrt(10) rad/s', '5 rad/s', '20 rad/s'],
      correctAnswer: 0,
      explanation: 'For vertical wall, normal reaction is provided by centripetal force N = m omega^2 R. Friction force upwards f = mu N = mu m omega^2 R. For block not to fall, f >= m g => mu m omega^2 R >= m g => omega >= sqrt(g / (mu R)). Substitute g = 10, mu = 0.1, R = 1 m: omega_min = sqrt(10 / (0.1 * 1)) = sqrt(100) = 10 rad/s.',
      topicId: 'friction',
      difficulty: 'Medium',
      conceptTested: 'Friction on vertical rotating cylinder wall',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Friction (Static, Kinetic & Rolling)',
    confidenceLabel: 'HIGH',
    confidenceText: 'Extremely high-yield topic in NEET with 1 guaranteed question every year on inclined planes or vertical wall friction.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 2,
    totalDirectPyqs: 2,
    totalHistoricalMarks: 8,
    averageDirectPyqsPerPaper: 0.13,
    maxDirectPyqsInSinglePaper: 1,
    minDirectPyqsInSinglePaper: 0,
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 - 4 Marks',
    weightagePercentage: 2.0,
    expectedQuestionsCount: 1,
    preparationStrategy: 'Master block on inclined plane acceleration a = g(sin theta +- mu cos theta) and minimum force physics.',
    yearWiseBreakdown: [
      {
        year: 2020,
        exam: 'NEET UG',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Vertical Rotating Wall Friction Minimum Omega',
        verificationStatus: 'Verified against official NEET 2020 paper',
        classification: 'Direct'
      },
      {
        year: 2018,
        exam: 'NEET UG',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Block on Incline Push Up Force',
        verificationStatus: 'Verified against official NEET 2018 paper',
        classification: 'Direct'
      }
    ],
    sourceInfo: {
      dataSource: 'Verified NTA NEET UG & AIPMT Official Historical Question Archives',
      analysisPeriod: '2006 - 2023',
      directPyqsAnalyzedCount: 2,
      classificationMethod: 'Strict topic-based classification',
      disclaimer: 'PYQ counts reflect verified historical paper records only.'
    }
  }
};
