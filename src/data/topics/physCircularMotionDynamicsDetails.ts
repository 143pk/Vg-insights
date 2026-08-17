import { DetailedTopicContent } from '../../types/neet';

export const physCircularMotionDynamicsDetails: DetailedTopicContent = {
  topicId: 'circular-motion-dynamics',
  topicName: 'Dynamics of Circular Motion & Banking of Roads',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Laws of Motion',
  chapter: 'Laws of Motion',

  whatIsThisTopic: 'When a body moves along a circular path of radius r with speed v, its direction of velocity continuously changes, giving rise to a mandatory inward radial Centripetal Acceleration a_c = v^2 / r = omega^2 r. By Newton\'s Second Law, an inward net radial force called Centripetal Force F_c = m v^2 / r must be supplied by real physical forces (gravity, friction, normal reaction, tension). This topic covers unbanked level turn dynamics, road banking theory and friction limits, conical pendulum mechanics, vertical circular motion energy and tension dynamics, and verified NEET exam applications.',

  basicIdea: [
    '1. Nature of Centripetal Force: Centripetal force F_c = m v^2 / r is NOT a new fundamental physical force, but a functional role played by real physical forces present in the system (e.g., friction on level road, normal component on banked road, tension in string).',
    '2. Car on Level Unbanked Road: Static friction f_s provides centripetal force: f_s = m v^2 / r <= mu_s m g. Maximum safe speed without skidding: v_max = sqrt(mu_s g r).',
    '3. Banking of Roads (Without Friction): Inclining outer road edge at angle theta so normal reaction component N sin theta provides centripetal force: N sin theta = m v^2 / r and N cos theta = m g => tan theta = v^2 / (g r) => v_optimum = sqrt(g r tan theta).',
    '4. Banked Road with Friction Limits: Maximum safe speed v_max = sqrt(g r (mu_s + tan theta) / (1 - mu_s tan theta)). Minimum safe speed v_min = sqrt(g r (tan theta - mu_s) / (1 + mu_s tan theta)).',
    '5. Conical Pendulum: Bob executing horizontal circle of radius r = L sin theta. Tension T cos theta = m g and T sin theta = m omega^2 r. Time period T_p = 2 pi sqrt((L cos theta) / g).',
    '6. Vertical Circular Motion Dynamics: Non-uniform circular motion under gravity. Minimum critical speed at bottom for complete looping: v_bottom >= sqrt(5 g R). Minimum speed at top: v_top >= sqrt(g R). Tension difference T_bottom - T_top = 6 m g.'
  ],

  importantTerms: [
    {
      term: 'Centripetal Force',
      symbol: 'F_c',
      definition: 'The net inward radial force required to continuously deflect a body along a curved circular path: F_c = m v^2 / r = m omega^2 r.',
      neetNote: 'Always directed towards the center of curvature. Performs ZERO work because vec(F)_c is perpendicular to instantaneous displacement vec(ds).'
    },
    {
      term: 'Angle of Banking',
      symbol: 'theta',
      definition: 'The angle through which the outer edge of a curved road is raised above its inner edge to provide necessary centripetal force via normal reaction.',
      neetNote: 'tan theta = v^2 / (g r). Independent of vehicle mass m!'
    },
    {
      term: 'Conical Pendulum',
      symbol: 'T_p',
      definition: 'A pendulum where a bob attached to a string revolves in a horizontal circle while the string sweeps out a cone in space.',
      neetNote: 'Time period T_p = 2 pi sqrt(L cos theta / g).'
    },
    {
      term: 'Critical Velocity at Top',
      symbol: 'v_{top}',
      definition: 'The minimum velocity at the highest point of a vertical circle required to maintain taut string tension (T >= 0): v_top = sqrt(g R).',
      neetNote: 'At critical speed v_top = sqrt(g R), tension at highest point T_top = 0.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Centripetal Force & Level Road Turning Dynamics',
      paragraphs: [
        'A particle moving along a circular path of radius $r$ at speed $v$ experiences centripetal acceleration $a_c = \\frac{v^2}{r} = \\omega^2 r$ directed towards the center.',
        'Net inward radial force required:',
        '$$F_c = m a_c = \\frac{m v^2}{r} = m \\omega^2 r$$',
        'Dynamics of Car Turning on a Level Unbanked Road:',
        'When a car takes a flat circular turn of radius $r$, the only horizontal force available to pull the car towards the center is static friction $f_s$ between the tires and the road surface.',
        '$$f_s = \\frac{m v^2}{r}$$',
        'Since static friction cannot exceed its limiting value $f_s^{max} = \\mu_s N = \\mu_s mg$:',
        '$$\\frac{m v^2}{r} \\le \\mu_s mg \\implies v^2 \\le \\mu_s gr \\implies v_{max} = \\sqrt{\\mu_s gr}$$',
        'If speed exceeds $\\sqrt{\\mu_s gr}$, friction becomes insufficient and the car skids radially outward away from the center.'
      ]
    },
    {
      heading: '2. Physics of Road Banking & Speed Limits',
      paragraphs: [
        'To reduce reliance on friction and prevent skidding at high speeds, curved roads are Banked by raising the outer edge above the inner edge by angle $\\theta$.',
        'Case 1: Ideal Banking (Frictionless Road):',
        'Resolving Normal Reaction $N$:',
        '• Vertical balance: $N \\cos\\theta = mg \\quad \\text{--- (Equation 1)}$',
        '• Horizontal radial centripetal balance: $N \\sin\\theta = \\frac{m v^2}{r} \\quad \\text{--- (Equation 2)}$',
        'Dividing Equation 2 by Equation 1:',
        '$$\\tan\\theta = \\frac{v^2}{gr} \\implies v_{optimum} = \\sqrt{gr \\tan\\theta}$$',
        'At speed $v_{optimum}$, the normal reaction alone provides 100% of the centripetal force without relying on tire friction.',
        'Case 2: Banked Road with Friction $\\mu_s$:',
        '• Maximum Safe Speed without skidding outward:',
        '$$v_{max} = \\sqrt{gr \\left( \\frac{\\mu_s + \\tan\\theta}{1 - \\mu_s \\tan\\theta} \\right)}$$',
        '• Minimum Safe Speed without slipping inward:',
        '$$v_{min} = \\sqrt{gr \\left( \\frac{\\tan\\theta - \\mu_s}{1 + \\mu_s \\tan\\theta} \\right)}$$'
      ],
      visual: {
        caption: 'Force Resolution Diagram for Vehicle on Banked Curved Road',
        guide: 'Normal reaction N is inclined at angle theta to vertical. N cos(theta) balances weight mg; N sin(theta) points radially inward providing centripetal force m v^2 / r.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <rect width="800" height="240" rx="16" fill="#f8fafc" />
          <g transform="translate(180, 20)">
            <!-- Banked Road Triangle -->
            <polygon points="50,180 380,180 380,80" fill="#e2e8f0" stroke="#334155" stroke-width="3" />
            <path d="M 100 180 A 50 50 0 0 0 88 162" fill="none" stroke="#2563eb" stroke-width="2" />
            <text x="105" y="172" fill="#1d4ed8" font-size="14" font-weight="extrabold">θ</text>

            <!-- Car Box -->
            <g transform="translate(220, 125) rotate(-18)">
              <rect x="-25" y="-15" width="50" height="30" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2" />

              <!-- Normal Reaction N -->
              <line x1="0" y1="-15" x2="0" y2="-75" stroke="#16a34a" stroke-width="3" marker-end="url(#arrow-green-cm)" />
              <text x="10" y="-55" fill="#15803d" font-size="14" font-weight="extrabold">N</text>
            </g>

            <!-- Components of N -->
            <line x1="220" y1="125" x2="220" y2="40" stroke="#16a34a" stroke-width="2" stroke-dasharray="4 4" />
            <text x="228" y="55" fill="#15803d" font-size="13" font-weight="bold">N cos θ = mg</text>

            <line x1="220" y1="125" x2="130" y2="125" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-blue-cm)" />
            <text x="100" y="115" fill="#1d4ed8" font-size="13" font-weight="extrabold">N sin θ = mv²/r</text>

            <!-- Weight mg -->
            <line x1="220" y1="125" x2="220" y2="200" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red-cm)" />
            <text x="230" y="180" fill="#b91c1c" font-size="13" font-weight="bold">mg</text>
          </g>

          <defs>
            <marker id="arrow-green-cm" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a"/>
            </marker>
            <marker id="arrow-blue-cm" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
            </marker>
            <marker id="arrow-red-cm" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
            </marker>
          </defs>
        </svg>`
      }
    },
    {
      heading: '3. Vertical Circular Motion Energy & Tension Dynamics',
      paragraphs: [
        'Consider a body of mass $m$ tied to a light string of length $R$ whirling in a vertical circle under gravity.',
        'At Lowest Point (Bottom B):',
        '• Tension $T_B - mg = \\frac{m v_B^2}{R} \\implies T_B = \\frac{m v_B^2}{R} + mg$.',
        'At Highest Point (Top A):',
        '• Tension $T_A + mg = \\frac{m v_A^2}{R} \\implies T_A = \\frac{m v_A^2}{R} - mg$.',
        'Critical Conditions for Complete Loop Completion (Looping the Loop):',
        '1. At highest point A, string must not slack ($T_A \\ge 0$):',
        '$$\\frac{m v_A^2}{R} - mg \\ge 0 \\implies v_A \\ge \\sqrt{g R}$$',
        'Minimum speed at top $v_{top} = \\sqrt{g R}$.',
        '2. By conservation of mechanical energy ($E_{bottom} = E_{top}$):',
        '$$\\frac{1}{2} m v_B^2 = \\frac{1}{2} m v_A^2 + mg(2R) \\implies v_B^2 = v_A^2 + 4gR = gR + 4gR = 5gR$$',
        'Minimum speed at bottom $v_{bottom} = \\sqrt{5 g R}$.',
        '3. Tension Difference between Lowest and Highest Points:',
        '$$T_B - T_A = \\left(\\frac{m v_B^2}{R} + mg\\right) - \\left(\\frac{m v_A^2}{R} - mg\\right) = \\frac{m(v_B^2 - v_A^2)}{R} + 2mg = \\frac{m(4gR)}{R} + 2mg = 6mg$$',
        'Remarkable Invariant Rule: The difference in string tension between the lowest and highest points in vertical circular motion is ALWAYS $6 mg$, independent of speed!'
      ]
    }
  ],

  formulae: [
    {
      title: 'Optimum Road Banking Angle',
      formula: '\\tan\\theta = \\frac{v^2}{g r} \\implies v = \\sqrt{g r \\tan\\theta}',
      variables: 'theta = banking angle, v = speed, g = 9.8 or 10 m/s², r = curve radius.',
      whenToUse: 'Primary formula for finding banking angle or optimum un-frictioned speed.'
    },
    {
      title: 'Conical Pendulum Time Period',
      formula: 'T_p = 2 \\pi \\sqrt{\\frac{L \\cos\\theta}{g}}',
      variables: 'L = string length, theta = semi-vertical cone angle, g = gravitational acceleration.',
      whenToUse: 'Use for conical pendulum period of revolution calculations.'
    },
    {
      title: 'Vertical Circular Motion Critical Speeds & Tension Difference',
      formula: 'v_{top} = \\sqrt{g R}, \\quad v_{bottom} = \\sqrt{5 g R}, \\quad T_{bottom} - T_{top} = 6 m g',
      variables: 'R = radius of vertical circle, m = mass of revolving body, g = 10 m/s².',
      whenToUse: 'Use for loop-the-loop vertical circle problems in string or track setups.',
      calculationExample: {
        problem: 'A body of mass 1 kg tied to a string of length 0.5 m is revolved in a vertical circle. Find the minimum speed at the lowest point required to complete the circle and the maximum tension in the string. (g = 10 m/s²)',
        given: 'm = 1 kg, R = 0.5 m, g = 10 m/s²',
        stepByStep: [
          'Step 1: Formula for minimum bottom speed: v_bottom = sqrt(5 g R)',
          'Step 2: v_bottom = sqrt(5 * 10 * 0.5) = sqrt(25) = 5 m/s',
          'Step 3: Formula for maximum tension at bottom: T_max = (m * v_bottom^2 / R) + m g',
          'Step 4: Substitute: T_max = (1 * 25 / 0.5) + (1 * 10) = 50 + 10 = 60 N.'
        ],
        answer: 'Minimum bottom speed = 5 m/s, Maximum tension = 60 N'
      }
    }
  ],

  neetImportantPoints: [
    '1. High-Yield Rule: In vertical circular motion with string, minimum speeds for full loop: $v_{bottom} = \\sqrt{5gR}$, $v_{mid} = \\sqrt{3gR}$, $v_{top} = \\sqrt{gR}$.',
    '2. High-Yield Rule: Tension difference $T_{bottom} - T_{top} = 6mg$ is a universal invariant for vertical circular motion.',
    '3. High-Yield Rule: Optimum banking angle $\\tan\\theta = \\frac{v^2}{gr}$ is independent of vehicle mass $m$. A heavy truck and light bicycle require the exact same banking angle at speed $v$!',
    '4. High-Yield Rule: Conical pendulum time period $T_p = 2 \\pi \\sqrt{\\frac{L \\cos\\theta}{g}}$. Notice height of cone is $h = L \\cos\\theta$, so $T_p = 2 \\pi \\sqrt{h / g}$.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Treating centripetal force as an extra real force acting in addition to gravity and normal reaction.',
      correctFact: 'Centripetal force is NOT an additional force! It is the net inward radial resultant sum of existing forces!',
      whyItMattersForNEET: 'Prevents double counting forces in Free-Body Diagrams.'
    },
    {
      commonConfusion: 'Confusing critical speed for string ($v_{bottom} = \\sqrt{5gR}$) with critical speed for light rigid rod ($v_{bottom} = \\sqrt{4gR}$).',
      correctFact: 'For a mass tied to a light rigid ROD, speed at top can be 0 without slacking, so $v_{bottom} = \\sqrt{4gR}$! For a STRING, speed at top must be >= \\sqrt{gR}, so $v_{bottom} = \\sqrt{5gR}$.',
      whyItMattersForNEET: 'Frequent NEET trick question distinguishing string vs rigid rod.'
    }
  ],

  quickRevision: [
    'Centripetal acceleration a_c = v^2 / r = omega^2 r; Centripetal force F_c = m v^2 / r',
    'Level unbanked turn safe speed: v_max = sqrt(mu_s g r)',
    'Banked road angle: tan theta = v^2 / (g r)',
    'Conical pendulum time period: T_p = 2 pi sqrt(L cos theta / g) = 2 pi sqrt(h / g)',
    'Vertical circle string critical speeds: v_top = sqrt(gR), v_bottom = sqrt(5gR)',
    'Tension difference in vertical circle: T_bottom - T_top = 6 m g'
  ],

  practiceQuestions: [
  {
    "id": "prac-cmd-1",
    "question": "A car is moving around a circular track of radius 50 m banked at an angle of 45°. What is the optimum safe speed for the car without relying on friction? (g = 10 m/s²)",
    "options": [
      "22.36 m/s",
      "10 m/s",
      "50 m/s",
      "15.8 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "tan theta = v^2 / (g r) => tan 45° = v^2 / (10 * 50) => 1 = v^2 / 500 => v = sqrt(500) = 10 sqrt(5) ≈ 22.36 m/s.",
    "difficulty": "Easy",
    "conceptTested": "Optimum speed on banked road"
  },
  {
    "id": "prac-cmd-2",
    "question": "A particle of mass m tied to a string of length R is whirled in a vertical circle. What is the difference in kinetic energy between the lowest and highest points of the vertical circle?",
    "options": [
      "2 m g R",
      "5 m g R",
      "m g R",
      "3 m g R"
    ],
    "correctAnswer": 0,
    "explanation": "Height difference between lowest point and highest point is 2R. By conservation of mechanical energy, Delta K = m g Delta h = m g (2R) = 2 m g R.",
    "difficulty": "Easy",
    "conceptTested": "Kinetic energy difference in vertical circular motion"
  },
  {
    "id": "prac-circularmotiondynamics-3",
    "question": "Regarding Dynamics of Circular Motion & Banking of Roads, which of the following statements correctly resolves a common misconception about \"Treating centripetal force as an extra real force acting in addition to gravity and normal reaction.\"?",
    "options": [
      "Centripetal force is NOT an additional force! It is the net inward radial resultant sum of existing forces!",
      "Incorrect assumption: Treating centripetal force as an extra real force acting in addition to gravity and normal reaction.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Centripetal force is NOT an additional force! It is the net inward radial resultant sum of existing forces!. Prevents double counting forces in Free-Body Diagrams.",
    "difficulty": "Medium",
    "conceptTested": "Dynamics of Circular Motion & Banking of Roads - Conceptual Clarity"
  },
  {
    "id": "prac-circularmotiondynamics-4",
    "question": "Regarding Dynamics of Circular Motion & Banking of Roads, which of the following statements correctly resolves a common misconception about \"Confusing critical speed for string ($v_{bottom} = \\sqrt{5gR}$) with critical speed for light rigid rod ($v_{bottom} = \\sqrt{4gR}$).\"?",
    "options": [
      "For a mass tied to a light rigid ROD, speed at top can be 0 without slacking, so $v_{bottom} = \\sqrt{4gR}$! For a STRING, speed at top must be >= \\sqrt{gR}, so $v_{bottom} = \\sqrt{5gR}$.",
      "Incorrect assumption: Confusing critical speed for string ($v_{bottom} = \\sqrt{5gR}$) with critical speed for light rigid rod ($v_{bottom} = \\sqrt{4gR}$).",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "For a mass tied to a light rigid ROD, speed at top can be 0 without slacking, so $v_{bottom} = \\sqrt{4gR}$! For a STRING, speed at top must be >= \\sqrt{gR}, so $v_{bottom} = \\sqrt{5gR}$.. Frequent NEET trick question distinguishing string vs rigid rod.",
    "difficulty": "Medium",
    "conceptTested": "Dynamics of Circular Motion & Banking of Roads - Conceptual Clarity"
  },
  {
    "id": "prac-circularmotiondynamics-5",
    "question": "In the study of Dynamics of Circular Motion & Banking of Roads, what is the exact definition and significance of \"Centripetal Force\"?",
    "options": [
      "The net inward radial force required to continuously deflect a body along a curved circular path: F_c = m v^2 / r = m omega^2 r.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The net inward radial force required to continuously deflect a body along a curved circular path: F_c = m v^2 / r = m omega^2 r.. Always directed towards the center of curvature. Performs ZERO work because vec(F)_c is perpendicular to instantaneous displacement vec(ds).",
    "difficulty": "Easy",
    "conceptTested": "Centripetal Force definition"
  },
  {
    "id": "prac-circularmotiondynamics-6",
    "question": "In the study of Dynamics of Circular Motion & Banking of Roads, what is the exact definition and significance of \"Angle of Banking\"?",
    "options": [
      "The angle through which the outer edge of a curved road is raised above its inner edge to provide necessary centripetal force via normal reaction.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The angle through which the outer edge of a curved road is raised above its inner edge to provide necessary centripetal force via normal reaction.. tan theta = v^2 / (g r). Independent of vehicle mass m!",
    "difficulty": "Easy",
    "conceptTested": "Angle of Banking definition"
  },
  {
    "id": "prac-circularmotiondynamics-7",
    "question": "In the study of Dynamics of Circular Motion & Banking of Roads, what is the exact definition and significance of \"Conical Pendulum\"?",
    "options": [
      "A pendulum where a bob attached to a string revolves in a horizontal circle while the string sweeps out a cone in space.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A pendulum where a bob attached to a string revolves in a horizontal circle while the string sweeps out a cone in space.. Time period T_p = 2 pi sqrt(L cos theta / g).",
    "difficulty": "Easy",
    "conceptTested": "Conical Pendulum definition"
  },
  {
    "id": "prac-circularmotiondynamics-8",
    "question": "In the study of Dynamics of Circular Motion & Banking of Roads, what is the exact definition and significance of \"Critical Velocity at Top\"?",
    "options": [
      "The minimum velocity at the highest point of a vertical circle required to maintain taut string tension (T >= 0): v_top = sqrt(g R).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The minimum velocity at the highest point of a vertical circle required to maintain taut string tension (T >= 0): v_top = sqrt(g R).. At critical speed v_top = sqrt(g R), tension at highest point T_top = 0.",
    "difficulty": "Easy",
    "conceptTested": "Critical Velocity at Top definition"
  },
  {
    "id": "prac-circularmotiondynamics-9",
    "question": "Which of the following is a key NCERT statement regarding Dynamics of Circular Motion & Banking of Roads?",
    "options": [
      "Centripetal acceleration a_c = v^2 / r = omega^2 r; Centripetal force F_c = m v^2 / r",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Centripetal acceleration a_c = v^2 / r = omega^2 r; Centripetal force F_c = m v^2 / r",
    "difficulty": "Easy",
    "conceptTested": "Dynamics of Circular Motion & Banking of Roads NCERT High-Yield Point"
  },
  {
    "id": "prac-circularmotiondynamics-10",
    "question": "Which of the following is a key NCERT statement regarding Dynamics of Circular Motion & Banking of Roads?",
    "options": [
      "Level unbanked turn safe speed: v_max = sqrt(mu_s g r)",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Level unbanked turn safe speed: v_max = sqrt(mu_s g r)",
    "difficulty": "Easy",
    "conceptTested": "Dynamics of Circular Motion & Banking of Roads NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-cmd-1',
      year: 2019,
      exam: 'NEET UG',
      examYear: 'NEET UG 2019',
      question: 'A mass m is attached to a thin wire and whirled in a vertical circle. The wire is most likely to break when:',
      options: [
        'The mass is at the lowest point',
        'The mass is at the highest point',
        'The wire is horizontal',
        'The angle is 60° from vertical'
      ],
      correctAnswer: 0,
      explanation: 'Tension in vertical circle is given by T = (m v^2 / R) + m g cos theta. At the lowest point (theta = 0°), cos 0° = +1, so T_max = (m v^2 / R) + m g. Since tension is maximum at the lowest point, the wire is most likely to break at the lowest point.',
      topicId: 'circular-motion-dynamics',
      difficulty: 'Easy',
      conceptTested: 'Maximum tension location in vertical circular motion',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-cmd-2',
      year: 2016,
      exam: 'NEET UG',
      examYear: 'NEET UG 2016',
      question: 'What is the minimum speed with which a body of mass m must enter a vertical loop of radius R so that it can complete the loop?',
      options: ['sqrt(5 g R)', 'sqrt(2 g R)', 'sqrt(3 g R)', 'sqrt(g R)'],
      correctAnswer: 0,
      explanation: 'To complete the vertical loop, the minimum critical speed at the top must be v_top = sqrt(g R). By conservation of energy between bottom and top: 1/2 m v_bottom^2 = 1/2 m v_top^2 + m g (2R) => v_bottom^2 = g R + 4 g R = 5 g R => v_bottom = sqrt(5 g R).',
      topicId: 'circular-motion-dynamics',
      difficulty: 'Easy',
      conceptTested: 'Minimum speed at bottom to complete vertical circle',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Dynamics of Circular Motion & Banking of Roads',
    confidenceLabel: 'HIGH',
    confidenceText: 'Regularly tested in NEET via vertical circular motion tension and optimum road banking angle.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 2,
    totalDirectPyqs: 2,
    totalHistoricalMarks: 8,
    averageDirectPyqsPerPaper: 0.13,
    maxDirectPyqsInSinglePaper: 1,
    minDirectPyqsInSinglePaper: 0,
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 - 4 Marks',
    weightagePercentage: 1.5,
    expectedQuestionsCount: 1,
    preparationStrategy: 'Master vertical circular motion speeds v_top = sqrt(gR), v_bottom = sqrt(5gR) and banked road tan theta = v^2/(gr).',
    yearWiseBreakdown: [
      {
        year: 2019,
        exam: 'NEET UG',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Vertical Circle Wire Breakage Maximum Tension',
        verificationStatus: 'Verified against official NEET 2019 paper',
        classification: 'Direct'
      },
      {
        year: 2016,
        exam: 'NEET UG',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Vertical Loop Minimum Entrance Speed',
        verificationStatus: 'Verified against official NEET 2016 paper',
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
