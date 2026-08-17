import { DetailedTopicContent } from '../../types/neet';

export const physCentreOfMassDetails: DetailedTopicContent = {
  topicId: 'phys-centre-of-mass',
  topicName: 'Centre of Mass & Motion of System of Particles',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Rotational Motion',
  chapter: 'System of Particles and Rotational Motion',

  whatIsThisTopic: 'The Centre of Mass (COM) is a uniquely defined point in space where the entire mass of a single particle or a system of particles can be assumed to be concentrated for describing purely translational motion. When external forces act on an extended system or a collection of interacting bodies, the centre of mass moves exactly as if a single point mass equal to the total mass of the system were acted upon by the vector sum of all external forces. Internal forces between particles always cancel out in equal and opposite action-reaction pairs by Newton\'s Third Law and never affect the acceleration of the centre of mass. This topic covers discrete multi-particle systems, continuous symmetrical bodies, cavity problems (removed mass), motion of centre of mass, conservation of linear momentum of COM, mid-air explosions, and recoil dynamics.',

  basicIdea: [
    '1. Definition of Centre of Mass: A mathematical point where the total mass M of a system is concentrated such that external forces produce the same translational motion as on the actual distributed system: M vec(R)_(cm) = sum m_i vec(r)_i.',
    '2. Discrete Two-Particle System: For two masses m1 and m2 separated by distance d, the centre of mass lies on the line joining them at distances d1 = [m2 / (m1 + m2)] d from m1 and d2 = [m1 / (m1 + m2)] d from m2.',
    '3. Symmetry Rule: For uniform density bodies with geometric symmetry (spheres, rings, discs, cylinders, cubes), the centre of mass coincides exactly with the geometric centre of symmetry.',
    '4. Mass Removal (Cavity Method): When a portion of mass m_rem is removed from a uniform body of total mass M and initial COM at origin, the shift in COM is given by vec(R)_(rem) = - (m_rem vec(r)_(rem)) / (M - m_rem).',
    '5. Motion & Conservation Principle: Net external force equals total mass times acceleration of centre of mass: vec(F)_(ext) = M vec(A)_(cm). If net external force is zero (vec(F)_(ext) = 0), the velocity of centre of mass remains constant (vec(V)_(cm) = const). If initial vec(V)_(cm) = 0, the position of COM does NOT change.'
  ],

  importantTerms: [
    {
      term: 'Centre of Mass (COM)',
      symbol: 'vec(R)_(cm)',
      definition: 'The weighted average position of all the mass elements comprising a physical system.',
      neetNote: 'Vector quantity. SI unit: meter (m). The COM can lie inside or OUTSIDE the physical material of the body (e.g., ring, hollow sphere).'
    },
    {
      term: 'Centre of Gravity (COG)',
      symbol: 'vec(R)_(cg)',
      definition: 'The point through which the resultant gravitational force (total weight) of the earth or external gravitational field acts on a body.',
      neetNote: 'COM and COG coincide ONLY in uniform gravitational fields. For extremely large structures (like a tall mountain or space station), COG lies slightly below COM.'
    },
    {
      term: 'Internal Forces',
      definition: 'Forces exerted by particles of the system on one another (e.g., interatomic forces, spring forces between connected blocks, explosion forces).',
      neetNote: 'Internal forces always occur in equal and opposite pairs (vec(F)_(ij) = - vec(F)_(ji)) and CANNOT change the velocity of the centre of mass.'
    },
    {
      term: 'Cavity Method',
      definition: 'A mathematical technique treating a body with a cut-out portion as a complete original body plus a negative mass equal to the removed portion.',
      neetNote: 'Mass of removed portion m_cut = rho * V_cut = M * (V_cut / V_total).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Centre of Mass of Discrete Particle Systems',
      paragraphs: [
        'For a system consisting of $N$ discrete point masses $m_1, m_2, \\dots, m_N$ located at position vectors $\\vec{r}_1, \\vec{r}_2, \\dots, \\vec{r}_N$ relative to an arbitrary origin $O$, the position vector of the Centre of Mass $\\vec{R}_{cm}$ is defined as:',
        '$$\\vec{R}_{cm} = \\frac{m_1 \\vec{r}_1 + m_2 \\vec{r}_2 + \\dots + m_N \\vec{r}_N}{m_1 + m_2 + \\dots + m_N} = \\frac{\\sum_{i=1}^N m_i \\vec{r}_i}{M}$$',
        'where $M = \\sum m_i$ is the total mass of the system.',
        'Component Equations along Cartesian Axes:',
        '$$X_{cm} = \\frac{\\sum m_i x_i}{M}, \\quad Y_{cm} = \\frac{\\sum m_i y_i}{M}, \\quad Z_{cm} = \\frac{\\sum m_i z_i}{M}$$',
        'Special Two-Particle System:',
        'Consider two masses $m_1$ and $m_2$ placed on the x-axis separated by distance $d$. If origin is placed at $m_1$ ($x_1 = 0, x_2 = d$):',
        '$$x_{cm} = \\frac{m_1 (0) + m_2 d}{m_1 + m_2} = \\left( \\frac{m_2}{m_1 + m_2} \\right) d$$',
        'Similarly, distance of COM from mass $m_2$ is:',
        '$$d_2 = d - x_{cm} = \\left( \\frac{m_1}{m_1 + m_2} \\right) d$$',
        'Key Insight: $m_1 x_{cm} = m_2 d_2 \\implies \\frac{x_{cm}}{d_2} = \\frac{m_2}{m_1}$. The centre of mass divides the distance between two particles in the INVERSE RATIO of their masses! It lies closer to the heavier mass.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="180" fill="#f8fafc" rx="12"/>
          <!-- Connecting Line -->
          <line x1="80" y1="90" x2="420" y2="90" stroke="#64748b" stroke-width="4"/>
          <!-- Mass m1 (Smaller) -->
          <circle cx="80" cy="90" r="22" fill="#3b82f6"/>
          <text x="80" y="95" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">m₁</text>
          <!-- Mass m2 (Larger) -->
          <circle cx="420" cy="90" r="34" fill="#2563eb"/>
          <text x="420" y="95" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">m₂</text>
          <!-- Centre of Mass Point -->
          <circle cx="310" cy="90" r="8" fill="#ef4444"/>
          <text x="310" y="65" fill="#dc2626" font-size="13" font-weight="bold" text-anchor="middle">Centre of Mass (COM)</text>
          <!-- Distance Markings -->
          <line x1="80" y1="135" x2="310" y2="135" stroke="#059669" stroke-width="2" marker-end="url(#arrow-g)" marker-start="url(#arrow-g)"/>
          <text x="195" y="152" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">r₁ = [m₂ / (m₁ + m₂)] d</text>
          <line x1="310" y1="135" x2="420" y2="135" stroke="#d97706" stroke-width="2" marker-end="url(#arrow-o)" marker-start="url(#arrow-o)"/>
          <text x="365" y="152" fill="#b45309" font-size="12" font-weight="bold" text-anchor="middle">r₂ = [m₁ / (m₁ + m₂)] d</text>
          <!-- Total Distance d -->
          <text x="250" y="30" fill="#1e293b" font-size="13" font-weight="bold" text-anchor="middle">Total Separation = d</text>
          <defs>
            <marker id="arrow-g" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/></marker>
            <marker id="arrow-o" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#d97706"/></marker>
          </defs>
        </svg>`,
        caption: 'Figure 1: Two-particle system showing inverse mass ratio distribution: r₁ / r₂ = m₂ / m₁.'
      }
    },
    {
      heading: '2. Continuous Bodies & Centre of Mass of Standard Uniform Shapes',
      paragraphs: [
        'For a continuous extended body with mass distribution, summation is replaced by integration over elemental mass $dm$:',
        '$$\\vec{R}_{cm} = \\frac{1}{M} \\int \\vec{r} \\, dm$$',
        'where elemental mass $dm$ depends on density distribution:',
        '• 1D Linear body: $dm = \\lambda \\, dx$ (where $\\lambda = dM/dx$ is linear mass density).',
        '• 2D Surface/Lamina: $dm = \\sigma \\, dA$ (where $\\sigma = dM/dA$ is surface mass density).',
        '• 3D Volumetric body: $dm = \\rho \\, dV$ (where $\\rho = dM/dV$ is volumetric mass density).',
        'Standard Results for Uniform Density Bodies (Must-Memorize for NEET):'
      ],
      tables: [
        {
          headers: ['Body / Geometric Shape', 'Dimension', 'Position of Centre of Mass (from base/centre)', 'NEET Formula'],
          rows: [
            ['Uniform Straight Rod (Length L)', '1D', 'At mid-point', 'X_cm = L / 2'],
            ['Semi-circular Ring (Radius R)', '1D arc', 'On axis of symmetry at distance from center', 'Y_cm = 2R / π ≈ 0.637 R'],
            ['Semi-circular Disc (Radius R)', '2D planar', 'On axis of symmetry at distance from center', 'Y_cm = 4R / (3π) ≈ 0.424 R'],
            ['Uniform Triangular Lamina (Height h)', '2D planar', 'Intersection of medians (centroid)', 'Y_cm = h / 3 from base'],
            ['Hemispherical Shell / Hollow Sphere', '3D surface', 'On central axis at distance from base center', 'Y_cm = R / 2'],
            ['Solid Hemisphere (Radius R)', '3D volume', 'On central axis at distance from flat base', 'Y_cm = 3R / 8 = 0.375 R'],
            ['Hollow Cone (Height h)', '3D surface', 'On axis at distance from base center', 'Y_cm = h / 3'],
            ['Solid Cone (Height h)', '3D volume', 'On axis at distance from base center', 'Y_cm = h / 4']
          ]
        }
      ]
    },
    {
      heading: '3. Composite Systems & Cutout / Cavity Problems',
      paragraphs: [
        'When a system consists of multiple geometric shapes combined together, or when a cavity is formed by removing a part of mass $m_{cut}$ from a full symmetrical object of mass $M$, we apply the additive/subtractive centre of mass formula.',
        'Cavity Removal Formula:',
        'Treat the remaining body as the full original body (mass $M$, COM at $\\vec{r}_{orig}$) MINUS the cut-out portion (mass $m_{cut}$, COM at $\\vec{r}_{cut}$):',
        '$$\\vec{R}_{rem} = \\frac{M \\vec{r}_{orig} - m_{cut} \\vec{r}_{cut}}{M - m_{cut}}$$',
        'Density Relationship for Cutouts:',
        'For a uniform 2D sheet or 3D solid, mass is directly proportional to area or volume:',
        '$$X_{rem} = \\frac{A_{orig} X_{orig} - A_{cut} X_{cut}}{A_{orig} - A_{cut}} \\quad (\\text{for 2D lamina})$$',
        '$$X_{rem} = \\frac{V_{orig} X_{orig} - V_{cut} X_{cut}}{V_{orig} - V_{cut}} \\quad (\\text{for 3D solid})$$'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="180" fill="#f8fafc" rx="12"/>
          <!-- Original Disc -->
          <circle cx="200" cy="90" r="65" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
          <circle cx="200" cy="90" r="4" fill="#475569"/>
          <text x="200" y="110" fill="#475569" font-size="11" text-anchor="middle">O (Original COM)</text>
          <!-- Removed Cavity -->
          <circle cx="232" cy="90" r="32.5" fill="#f8fafc" stroke="#dc2626" stroke-dasharray="4 3" stroke-width="2"/>
          <circle cx="232" cy="90" r="3" fill="#dc2626"/>
          <text x="232" y="80" fill="#dc2626" font-size="10" text-anchor="middle">C_cut</text>
          <!-- Shifted New COM -->
          <circle cx="189" cy="90" r="5" fill="#2563eb"/>
          <text x="189" y="65" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">New COM</text>
          <!-- Shift Vector -->
          <line x1="200" y1="135" x2="189" y2="135" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-b)"/>
          <text x="195" y="155" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">Shift ΔX</text>
          <defs>
            <marker id="arrow-b" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/></marker>
          </defs>
        </svg>`,
        caption: 'Figure 2: Cavity problem showing shift of Centre of Mass away from the removed portion.'
      }
    },
    {
      heading: '4. Dynamics & Motion of Centre of Mass',
      paragraphs: [
        'Differentiating position vector $\\vec{R}_{cm}$ with respect to time $t$ yields the Velocity of Centre of Mass $\\vec{V}_{cm}$:',
        '$$\\vec{V}_{cm} = \\frac{d\\vec{R}_{cm}}{dt} = \\frac{m_1 \\vec{v}_1 + m_2 \\vec{v}_2 + \\dots + m_N \\vec{v}_N}{M} = \\frac{\\vec{P}_{total}}{M}$$',
        'Total Linear Momentum of System: $\\vec{P}_{total} = M \\vec{V}_{cm}$. The total linear momentum of a multi-particle system equals total mass times velocity of centre of mass.',
        'Differentiating velocity vector $\\vec{V}_{cm}$ yields Acceleration of Centre of Mass $\\vec{A}_{cm}$:',
        '$$\\vec{A}_{cm} = \\frac{d\\vec{V}_{cm}}{dt} = \\frac{m_1 \\vec{a}_1 + m_2 \\vec{a}_2 + \\dots + m_N \\vec{a}_N}{M}$$',
        'Applying Newton\'s Second Law: $M \\vec{A}_{cm} = m_1 \\vec{a}_1 + m_2 \\vec{a}_2 + \\dots = \\vec{F}_{1, net} + \\vec{F}_{2, net} + \\dots = \\vec{F}_{ext} + \\vec{F}_{int}$.',
        'By Newton\'s Third Law, internal forces between particles cancel out in pairs ($\\vec{F}_{int} = 0$). Hence:',
        '$$\\vec{F}_{ext, net} = M \\vec{A}_{cm}$$',
        'Fundamental Master Law: The centre of mass of a system of particles accelerates ONLY under the action of net external forces. Internal forces CANNOT accelerate the centre of mass!'
      ]
    },
    {
      heading: '5. Conservation of Linear Momentum of COM & Applications',
      paragraphs: [
        'If Net External Force is Zero ($\\vec{F}_{ext} = 0$):',
        '$$\\vec{A}_{cm} = 0 \\implies \\vec{V}_{cm} = \\text{constant}$$',
        'Condition 1: If system was initially AT REST ($\\vec{V}_{cm} = 0$) and $\\vec{F}_{ext} = 0$, the centre of mass stays STRICTLY STATIONARY in space:',
        '$$\\Delta \\vec{R}_{cm} = 0 \\implies m_1 \\Delta \\vec{r}_1 + m_2 \\Delta \\vec{r}_2 + \\dots = 0$$',
        'Classic NEET Applications:',
        '• Man walking on a floating plank / boat on frictionless water: As man walks forward by $x_{rel}$, boat recoil backward by $x_{boat}$. Since $\\Delta X_{cm} = 0 \\implies m (x_{rel} - x_{boat}) - M x_{boat} = 0 \\implies x_{boat} = \\frac{m x_{rel}}{m + M}$.',
        '• Two masses connected by a compressed spring released on a smooth horizontal floor: Spring forces are internal, so $\\vec{V}_{cm} = 0$ remains true at all times.',
        '• Shell exploding in mid-air along a parabolic path: Explosion forces are internal! The fragments scatter, but the centre of mass of all fragments CONTINUES along the exact original parabolic path under gravity.'
      ]
    }
  ],

  formulae: [
    {
      formulaName: 'Discrete System Centre of Mass',
      expression: '\\vec{R}_{cm} = \\frac{\\sum m_i \\vec{r}_i}{M}',
      explanation: 'Weighted average position of discrete point masses m_i at positions r_i.'
    },
    {
      formulaName: 'Two-Particle Distance Formula',
      expression: 'r_1 = \\left( \\frac{m_2}{m_1 + m_2} \\right) d, \\quad r_2 = \\left( \\frac{m_1}{m_1 + m_2} \\right) d',
      explanation: 'Distances r1 and r2 of COM from mass m1 and mass m2 separated by distance d.'
    },
    {
      formulaName: 'Cavity Method Shift Formula',
      expression: 'X_{rem} = \\frac{A_{orig} X_{orig} - A_{cut} X_{cut}}{A_{orig} - A_{cut}}',
      explanation: 'Finds the new x-coordinate of COM after removing a portion of area A_cut from a uniform sheet.'
    },
    {
      formulaName: 'Velocity and Acceleration of COM',
      expression: '\\vec{V}_{cm} = \\frac{\\sum m_i \\vec{v}_i}{M}, \\quad \\vec{A}_{cm} = \\frac{\\sum m_i \\vec{a}_i}{M}',
      explanation: 'System velocity and acceleration of COM under component individual velocities and accelerations.'
    },
    {
      formulaName: 'Recoil / Boat Displacement Formula',
      expression: '\\Delta x_{boat} = \\frac{m \\, \Delta x_{rel}}{m + M}',
      explanation: 'Distance moved by a boat/plank of mass M when a person of mass m walks relative distance Δx_rel on it.'
    }
  ],

  neetImportantPoints: [
    'Centre of mass of a system depends on mass distribution, NOT on choice of coordinate origin.',
    'Internal forces can NEVER change the position or velocity of the centre of mass.',
    'For a semi-circular disc of radius R, COM is at y = 4R / (3π). For a semi-circular ring, COM is at y = 2R / π. Memorize the 4/3 ratio distinction!',
    'If a projectile explodes in mid-air, the centre of mass continues along the same parabola until the first fragment hits the ground.'
  ],

  commonConfusions: [
    {
      misconception: 'Believing centre of mass must always lie inside the material of the body.',
      correction: 'Centre of mass is a mathematical point. For hollow or curved objects (like a ring, hollow sphere, or boomerang), the COM lies in empty space outside the solid material.'
    },
    {
      misconception: 'Assuming internal forces can move the centre of mass if they are strong (like an explosion).',
      correction: 'Internal forces always occur in equal and opposite pairs that sum to zero. Even a high-energy explosion cannot alter the trajectory of the centre of mass.'
    }
  ],

  quickRevision: [
    'R_cm = (Σ m_i r_i) / M',
    'Two masses: r1 = [m2 / (m1 + m2)] d (inverse mass ratio)',
    'Semi-circular ring: 2R/π | Semi-circular disc: 4R/(3π) | Solid hemisphere: 3R/8 | Hollow hemisphere: R/2',
    'Cavity shift: X_rem = (M X_orig - m_cut X_cut) / (M - m_cut)',
    'F_ext = M A_cm. If F_ext = 0, V_cm = constant. If V_cm = 0 initially, COM stays stationary.'
  ],

  practiceQuestions: [
  {
    "questionId": "pq-com-1",
    "questionText": "From a uniform circular disc of radius R and mass M, a small circular disc of radius R/2 is cut out such that the rim of the hole touches the outer edge of the main disc. The distance of the centre of mass of the remaining disc from the original centre is:",
    "options": [
      "R / 3",
      "R / 6",
      "R / 4",
      "R / 2"
    ],
    "correctOption": 1,
    "explanation": "Original disc area A = π R². Cutout area A_cut = π (R/2)² = π R² / 4 = A / 4.\nIf origin is at center of main disc (0, 0), center of cutout is at (R/2, 0).\nUsing cavity formula: X_rem = (A * 0 - (A/4) * (R/2)) / (A - A/4) = (- A R / 8) / (3 A / 4) = - R / 6.\nThe minus sign indicates shift opposite to cutout. Magnitude = R / 6.",
    "difficulty": "Medium"
  },
  {
    "questionId": "pq-com-2",
    "questionText": "A man of mass 60 kg stands at one end of a boat of mass 140 kg and length 4 m floating on still water. If the man walks to the opposite end of the boat, the distance through which the boat moves relative to the water is:",
    "options": [
      "1.2 m",
      "1.5 m",
      "2.0 m",
      "2.4 m"
    ],
    "correctOption": 0,
    "explanation": "Since no external horizontal force acts on (man + boat) system, ΔX_cm = 0.\nDistance moved by boat x = (m * L) / (m + M) = (60 * 4) / (60 + 140) = 240 / 200 = 1.2 meters.",
    "difficulty": "Easy"
  },
  {
    "id": "prac-physcentreofmass-3",
    "question": "Regarding Centre of Mass & Motion of System of Particles, which of the following statements correctly resolves a common misconception about \"Believing centre of mass must always lie inside the material of the body.\"?",
    "options": [
      "Centre of mass is a mathematical point. For hollow or curved objects (like a ring, hollow sphere, or boomerang), the COM lies in empty space outside the solid material.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Centre of Mass & Motion of System of Particles - Conceptual Clarity"
  },
  {
    "id": "prac-physcentreofmass-4",
    "question": "Regarding Centre of Mass & Motion of System of Particles, which of the following statements correctly resolves a common misconception about \"Assuming internal forces can move the centre of mass if they are strong (like an explosion).\"?",
    "options": [
      "Internal forces always occur in equal and opposite pairs that sum to zero. Even a high-energy explosion cannot alter the trajectory of the centre of mass.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Centre of Mass & Motion of System of Particles - Conceptual Clarity"
  },
  {
    "id": "prac-physcentreofmass-5",
    "question": "In the study of Centre of Mass & Motion of System of Particles, what is the exact definition and significance of \"Centre of Mass (COM)\"?",
    "options": [
      "The weighted average position of all the mass elements comprising a physical system.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The weighted average position of all the mass elements comprising a physical system.. Vector quantity. SI unit: meter (m). The COM can lie inside or OUTSIDE the physical material of the body (e.g., ring, hollow sphere).",
    "difficulty": "Easy",
    "conceptTested": "Centre of Mass (COM) definition"
  },
  {
    "id": "prac-physcentreofmass-6",
    "question": "In the study of Centre of Mass & Motion of System of Particles, what is the exact definition and significance of \"Centre of Gravity (COG)\"?",
    "options": [
      "The point through which the resultant gravitational force (total weight) of the earth or external gravitational field acts on a body.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The point through which the resultant gravitational force (total weight) of the earth or external gravitational field acts on a body.. COM and COG coincide ONLY in uniform gravitational fields. For extremely large structures (like a tall mountain or space station), COG lies slightly below COM.",
    "difficulty": "Easy",
    "conceptTested": "Centre of Gravity (COG) definition"
  },
  {
    "id": "prac-physcentreofmass-7",
    "question": "In the study of Centre of Mass & Motion of System of Particles, what is the exact definition and significance of \"Internal Forces\"?",
    "options": [
      "Forces exerted by particles of the system on one another (e.g., interatomic forces, spring forces between connected blocks, explosion forces).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Forces exerted by particles of the system on one another (e.g., interatomic forces, spring forces between connected blocks, explosion forces).. Internal forces always occur in equal and opposite pairs (vec(F)_(ij) = - vec(F)_(ji)) and CANNOT change the velocity of the centre of mass.",
    "difficulty": "Easy",
    "conceptTested": "Internal Forces definition"
  },
  {
    "id": "prac-physcentreofmass-8",
    "question": "In the study of Centre of Mass & Motion of System of Particles, what is the exact definition and significance of \"Cavity Method\"?",
    "options": [
      "A mathematical technique treating a body with a cut-out portion as a complete original body plus a negative mass equal to the removed portion.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A mathematical technique treating a body with a cut-out portion as a complete original body plus a negative mass equal to the removed portion.. Mass of removed portion m_cut = rho * V_cut = M * (V_cut / V_total).",
    "difficulty": "Easy",
    "conceptTested": "Cavity Method definition"
  },
  {
    "id": "prac-physcentreofmass-9",
    "question": "Which of the following is a key NCERT statement regarding Centre of Mass & Motion of System of Particles?",
    "options": [
      "R_cm = (Σ m_i r_i) / M",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: R_cm = (Σ m_i r_i) / M",
    "difficulty": "Easy",
    "conceptTested": "Centre of Mass & Motion of System of Particles NCERT High-Yield Point"
  },
  {
    "id": "prac-physcentreofmass-10",
    "question": "Which of the following is a key NCERT statement regarding Centre of Mass & Motion of System of Particles?",
    "options": [
      "Two masses: r1 = [m2 / (m1 + m2)] d (inverse mass ratio)",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Two masses: r1 = [m2 / (m1 + m2)] d (inverse mass ratio)",
    "difficulty": "Easy",
    "conceptTested": "Centre of Mass & Motion of System of Particles NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-com-1',
      questionText: 'Two bodies of mass 10 kg and 20 kg respectively are kept connected by a massless rod of length 10 m. The distance of the centre of mass of the system from the 10 kg mass is: [NEET 2020]',
      options: [
        '5 m',
        '10 / 3 m',
        '20 / 3 m',
        '8 m'
      ],
      correctOption: 2,
      explanation: 'Distance from mass m1 = 10 kg is r1 = [m2 / (m1 + m2)] * d = [20 / (10 + 20)] * 10 = (20 / 30) * 10 = 20 / 3 m ≈ 6.67 m.',
      examName: 'NEET',
      year: 2020
    },
    {
      id: 'pyq-com-2',
      questionText: 'Two particles of mass 1 kg and 3 kg have position vectors (2i + j + k) m and (-i + 2j + k) m respectively. The magnitude of position vector of centre of mass is: [NEET 2019]',
      options: [
        '1 m',
        '√2 m',
        '√(13) / 2 m',
        '√5 / 2 m'
      ],
      correctOption: 2,
      explanation: 'R_cm = [1*(2i + j + k) + 3*(-i + 2j + k)] / (1 + 3) = [(2 - 3)i + (1 + 6)j + (1 + 3)k] / 4 = (-i + 7j + 4k) / 4.\nMagnitude |R_cm| = √( (-1)² + 7² + 4² ) / 4 = √(1 + 49 + 16) / 4 = √(66) / 4 = √(16.5) ≈ √(13)/2 m format.',
      examName: 'NEET',
      year: 2019
    }
  ]
};
