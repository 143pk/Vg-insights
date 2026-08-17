import { DetailedTopicContent } from '../../types/neet';

export const physBernoullisPrincipleDetails: DetailedTopicContent = {
  topicId: 'phys-bernoullis-principle',
  topicName: "Bernoulli's Principle",
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Properties of Bulk Matter',
  chapter: 'Mechanical Properties of Fluids',

  whatIsThisTopic: 'Bernoulli\'s Principle and the Equation of Continuity form the cornerstone of ideal fluid dynamics (hydrodynamics). The Equation of Continuity expresses conservation of mass, demonstrating that fluid speed increases in narrow constrictions (A₁v₁ = A₂v₂). Bernoulli\'s Theorem expresses conservation of mechanical energy for an ideal, non-viscous, incompressible fluid in steady streamline flow, showing that where fluid speed is high, internal static pressure is low (P + ½ρv² + ρgh = constant). This topic covers the continuity equation, Bernoulli\'s theorem, Venturimeter, Torricelli\'s Law of Efflux, aerodynamic lift (aerofoil), Magnus effect on spinning balls, atomizers, and blood vascular flow.',

  basicIdea: [
    'An Ideal Fluid is incompressible (constant density ρ), non-viscous (zero internal friction), irrotational (no turbulent swirls), and steady (constant velocity at a point).',
    'Equation of Continuity (Mass Conservation): For an incompressible fluid, volume flow rate Q = A · v = constant (A₁v₁ = A₂v₂). Fluid flows faster through narrower sections.',
    'Bernoulli\'s Theorem (Energy Conservation): Along any streamline in steady ideal fluid flow, the sum of pressure energy, kinetic energy per unit volume, and potential energy per unit volume remains constant: P + ½ρv² + ρgh = constant.',
    'Pressure-Speed Trade-off: At constant horizontal height (h = constant), higher fluid speed v leads to LOWER static pressure P. High speed = Low pressure!',
    'Venturimeter measures fluid flow rate in pipes using a constricted throat and differential manometer.',
    'Torricelli\'s Law of Efflux: Fluid exits an orifice at depth h below free liquid surface with efflux speed v = √(2gh), identical to free-fall velocity from height h.'
  ],

  importantTerms: [
    {
      term: 'Ideal Fluid',
      definition: 'A theoretical fluid model that is non-viscous, incompressible (ρ = const), steady in flow, and irrotational.'
    },
    {
      term: 'Equation of Continuity',
      definition: 'Mathematical statement of mass conservation in fluid dynamics: Mass flow rate dm/dt = ρ A v = constant. For incompressible fluids, A₁v₁ = A₂v₂.'
    },
    {
      term: 'Volume Flow Rate (Discharge Q)',
      definition: 'Volume of fluid passing through a cross-section per unit time: Q = A v = dV/dt. SI Unit: m³/s.'
    },
    {
      term: 'Pressure Energy per Unit Volume',
      definition: 'The work done in moving a fluid volume without changing its velocity or height, represented directly by static pressure P (Unit: J/m³ or Pa).'
    },
    {
      term: 'Velocity Head & Elevation Head',
      definition: 'Bernoulli equation expressed in length units (meters of fluid): Head Form = P/(ρg) + v²/(2g) + h = constant. Velocity head = v²/(2g); Elevation head = h.'
    },
    {
      term: 'Torricelli\'s Efflux Velocity',
      definition: 'The speed of liquid discharging from a small orifice at depth h beneath an open liquid surface: v = √(2gh).'
    },
    {
      term: 'Dynamic Lift (Aerofoil)',
      definition: 'The upward aerodynamic force produced on a wing when air flows faster over its curved top surface than its flat bottom surface, creating lower pressure above.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Equation of Continuity (Mass Conservation)',
      paragraphs: [
        'DERIVATION & CONCEPT:',
        'Consider a steady streamline flow of an incompressible fluid through a pipe of varying cross-sectional area A₁ to A₂.',
        'In a small time interval Δt, the mass of fluid entering the pipe at section 1 is:',
        'Δm₁ = ρ₁ A₁ v₁ Δt',
        'Mass leaving the pipe at section 2 is:',
        'Δm₂ = ρ₂ A₂ v₂ Δt',
        'By conservation of mass (no fluid created or destroyed inside pipe): Δm₁ = Δm₂  ⇒  ρ₁ A₁ v₁ = ρ₂ A₂ v₂.',
        'FOR INCOMPRESSIBLE FLUIDS (ρ₁ = ρ₂ = ρ):',
        'A₁ v₁ = A₂ v₂   or   A · v = constant (Volume Flow Rate Q = m³/s)',
        'WHY SPEED INCREASES IN NARROW SECTIONS:',
        'Since A · v = constant, velocity v is inversely proportional to cross-sectional area A (v ∝ 1/A). When fluid enters a narrow constriction (A decreases), fluid particles accelerate forward to allow the same mass to pass per second!'
      ],
      visual: {
        caption: 'Equation of Continuity A₁v₁ = A₂v₂: Fluid accelerates in the narrower pipe region where cross-sectional area is smaller.',
        guide: 'Narrow cross-section A₂ requires higher velocity v₂ to maintain constant discharge Q = Av.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <!-- Tapered Pipe -->
          <path d="M 60 50 L 260 85 L 420 85 L 540 50 L 540 170 L 420 135 L 260 135 L 60 170 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
          <!-- Wide section A1 -->
          <ellipse cx="120" cy="110" rx="15" ry="50" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <path d="M 120 110 L 190 110" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow)"/>
          <text x="120" y="40" font-size="12" fill="#0284c7" font-weight="bold" text-anchor="middle">Area A₁ (Wide)</text>
          <text x="160" y="100" font-size="12" fill="#2563eb" font-weight="bold">Speed v₁ (Slow)</text>
          <!-- Narrow section A2 -->
          <ellipse cx="340" cy="110" rx="8" ry="25" fill="#7dd3fc" stroke="#0284c7" stroke-width="2"/>
          <path d="M 340 110 L 430 110" stroke="#dc2626" stroke-width="3.5" marker-end="url(#arrow)"/>
          <text x="340" y="70" font-size="12" fill="#0284c7" font-weight="bold" text-anchor="middle">Area A₂ (Narrow)</text>
          <text x="380" y="100" font-size="12" fill="#dc2626" font-weight="bold">Speed v₂ (Fast!)</text>
          <text x="300" y="205" font-size="12" fill="#0f172a" font-weight="bold" text-anchor="middle">Mass Conservation: A₁ v₁ = A₂ v₂  ⇒  v₂ = v₁ (A₁ / A₂)</text>
        </svg>`
      }
    },
    {
      heading: '2. Bernoulli\'s Theorem & Energy Terms',
      paragraphs: [
        'BERNOULLI\'S THEOREM STATEMENT:',
        'For an ideal, incompressible, non-viscous fluid undergoing steady streamline flow, the total mechanical energy per unit volume remains CONSTANT along any given streamline.',
        'BERNOULLI EQUATION:',
        'P + ½ ρ v² + ρ g h = constant',
        'Where:',
        '1. P = Pressure Energy per unit volume (J/m³ or N/m²).',
        '2. ½ ρ v² = Kinetic Energy per unit volume (J/m³).',
        '3. ρ g h = Gravitational Potential Energy per unit volume (J/m³).',
        'HORIZONTAL FLOW SPECIAL CASE (h = constant):',
        'P + ½ ρ v² = constant',
        'This is the famous Pressure-Speed Paradox: In horizontal fluid flow, where velocity is HIGH, static pressure is LOW! Conversely, where velocity is LOW (or stagnant), static pressure is HIGH.',
        'CONDITIONS / ASSUMPTIONS FOR BERNOULLI\'S THEOREM:',
        '• Fluid must be Non-viscous (no internal energy loss due to fluid friction).',
        '• Fluid must be Incompressible (constant density ρ).',
        '• Flow must be Steady and Streamline (laminar, non-turbulent).',
        '• Flow must be Irrotational (no vorticity or eddies).',
        '• Valid strictly along a single streamline.'
      ]
    },
    {
      heading: '3. Venturimeter & Measuring Flow Rate',
      paragraphs: [
        'WORKING PRINCIPLE OF VENTURIMETER:',
        'A venturimeter consists of a wide tube of area A₁ tapering into a narrow throat of area A₂, connected to a differential U-tube manometer containing liquid of density ρ_m.',
        'Applying Continuity Equation: v₂ = (A₁ / A₂) v₁.',
        'Applying Bernoulli Equation for horizontal pipe (h₁ = h₂):',
        'P₁ + ½ ρ v₁² = P₂ + ½ ρ v₂²',
        'P₁ - P₂ = ½ ρ (v₂² - v₁²) = ½ ρ v₁² [(A₁ / A₂)² - 1]',
        'From differential manometer height h:',
        'P₁ - P₂ = h ρ_m g',
        'FLOW SPEED & VOLUME DISCHARGE FORMULA:',
        'v₁ = A₂ · √[ 2 h ρ_m g / (ρ (A₁² - A₂²)) ]',
        'Volume Flow Rate Q = A₁ v₁ = A₁ A₂ · √[ 2 h g / (A₁² - A₂²) ] (when ρ_m = ρ).'
      ]
    },
    {
      heading: '4. Torricelli\'s Law of Efflux & Tank Emptying Time',
      paragraphs: [
        'TORRICELLI\'S LAW DERIVATION:',
        'Consider a wide tank open to atmosphere at top (area A₁) filled with liquid of density ρ to height H. A small orifice of area A₂ (A₂ << A₁) is opened at depth h below the free surface.',
        'Applying Bernoulli Equation between top surface (point 1) and orifice exit (point 2):',
        'P₀ + ½ ρ v₁² + ρ g H = P₀ + ½ ρ v₂² + ρ g (H - h)',
        'Since A₁ >> A₂, v₁ ≈ 0 (top surface drops very slowly). Atmospheric pressure P₀ cancels on both sides:',
        'ρ g h = ½ ρ v₂²   ⇒   v₂ = √(2 g h)',
        'EFFLUX VELOCITY FORMULA:',
        'v = √(2 g h)',
        'Notice that efflux speed v is identical to the speed acquired by a body falling freely through vertical distance h!',
        'HORIZONTAL RANGE OF LIQUID JET:',
        'If orifice is at depth h from top surface, vertical height above ground is (H - h).',
        'Time of fall to ground: t = √[ 2 (H - h) / g ].',
        'Horizontal Range R = v · t = √(2gh) · √[ 2(H-h)/g ] = 2 √[ h (H - h) ].',
        '• Maximum Range R_max = H, achieved when orifice is placed at midpoint h = H / 2!',
        '• Equal ranges occur for two orifice depths h₁ and h₂ if h₁ + h₂ = H.',
        'TIME TO EMPTY TANK COMPLETELY:',
        't_empty = (A₁ / A₂) · √[ 2 H / g ].'
      ],
      visual: {
        caption: 'Torricelli\'s Law of Efflux: Efflux velocity v = √(2gh) from orifice at depth h, reaching maximum horizontal range when h = H/2.',
        guide: 'At depth h, efflux speed v = √(2gh). Trajectory parabolic with Range R = 2√[h(H-h)].',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <!-- Tank -->
          <rect x="100" y="30" width="180" height="170" rx="4" fill="#bae6fd" stroke="#0284c7" stroke-width="3"/>
          <line x1="100" y1="60" x2="280" y2="60" stroke="#0284c7" stroke-width="2" stroke-dasharray="4 4"/>
          <!-- Orifice at depth h -->
          <circle cx="280" cy="130" r="5" fill="#f8fafc" stroke="#dc2626" stroke-width="2"/>
          <!-- Parabolic jet stream -->
          <path d="M 280 130 Q 380 130 480 200" fill="none" stroke="#2563eb" stroke-width="3"/>
          <!-- Ground line -->
          <line x1="80" y1="200" x2="520" y2="200" stroke="#475569" stroke-width="2"/>
          <!-- Dimension h -->
          <line x1="80" y1="60" x2="80" y2="130" stroke="#0284c7" stroke-width="1.5"/>
          <text x="65" y="100" font-size="12" fill="#0284c7" font-weight="bold">h</text>
          <!-- Efflux velocity arrow -->
          <path d="M 285 130 L 340 130" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow)"/>
          <text x="310" y="120" font-size="12" fill="#dc2626" font-weight="extrabold">v = √(2gh)</text>
          <text x="380" y="220" font-size="12" fill="#0f172a" font-weight="bold" text-anchor="middle">Horizontal Range R = 2√[h(H-h)] (R_max = H at h = H/2)</text>
        </svg>`
      }
    },
    {
      heading: '5. Dynamic Lift, Aerofoil, Magnus Effect & Applications',
      paragraphs: [
        'AEROFOIL / AEROPLANE WING LIFT:',
        'An aircraft wing is shaped so that top surface is curved and bottom surface is flat.',
        'When moving through air, air streamlines crowd together over top curved surface, forcing air to flow faster (v_top > v_bottom).',
        'By Bernoulli\'s theorem (P + ½ρv² = const): P_top < P_bottom.',
        'The pressure difference ΔP = P_bottom - P_top creates a net upward force called Aerodynamic Dynamic Lift:',
        'F_lift = ΔP · A = ½ ρ (v_top² - v_bottom²) A',
        'MAGNUS EFFECT ON SPINNING BALLS:',
        'When a ball spins while traveling forward in air:',
        '• On the side where surface spin assists air flow, air speed is higher ⇒ lower pressure.',
        '• On the opposite side where spin opposes air flow, air speed is lower ⇒ higher pressure.',
        '• The resulting lateral pressure difference curves the ball\'s trajectory (swerving/curving in cricket, tennis, football).',
        'ATOMIZER / SPRAYER / CARBURETOR:',
        'Rapid air jet blown through narrow nozzle creates high air speed v ⇒ low pressure P inside nozzle. Atmospheric pressure on liquid container pushes liquid up the dip tube, atomizing it into fine spray.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Equation of Continuity',
      formula: 'A_1 v_1 = A_2 v_2 = Q = \\text{constant}',
      variables: 'A₁, A₂ = Cross-sectional areas (m²), v₁, v₂ = Flow velocities (m/s), Q = Volume flow rate (m³/s)'
    },
    {
      title: 'Bernoulli\'s Equation (Energy Conservation)',
      formula: 'P + \\frac{1}{2} \\rho v^2 + \\rho g h = \\text{constant}',
      variables: 'P = Static Pressure (Pa), ρ = Fluid density (kg/m³), v = Velocity (m/s), h = Height (m)'
    },
    {
      title: 'Venturimeter Flow Rate',
      formula: 'Q = A_1 A_2 \\sqrt{\\frac{2 g h}{A_1^2 - A_2^2}}',
      variables: 'Q = Volume flow rate (m³/s), A₁ = Pipe area, A₂ = Throat area, h = Manometer liquid height diff'
    },
    {
      title: 'Torricelli\'s Efflux Velocity',
      formula: 'v = \\sqrt{2 g h}',
      variables: 'v = Efflux velocity (m/s), g = 9.8 m/s², h = Depth of orifice below free surface (m)'
    },
    {
      title: 'Horizontal Range of Jet',
      formula: 'R = 2 \\sqrt{h (H - h)}',
      variables: 'R = Horizontal distance reached by jet (m), h = Orifice depth, H = Total liquid height'
    },
    {
      title: 'Dynamic Lift on Aerofoil',
      formula: 'F_{\\text{lift}} = \\frac{1}{2} \\rho (v_{\\text{top}}^2 - v_{\\text{bottom}}^2) A',
      variables: 'F_lift = Upward lift force (N), ρ = Air density, v_top & v_bottom = Air speeds, A = Wing area'
    }
  ],

  neetImportantPoints: [
    'Equation of Continuity (A₁v₁ = A₂v₂) represents Conservation of MASS. Bernoulli\'s Equation represents Conservation of MECHANICAL ENERGY.',
    'In horizontal flow (h = const), static pressure is MINIMUM where flow speed is MAXIMUM (High Speed = Low Pressure).',
    'Efflux velocity v = √(2gh) is independent of liquid density ρ and orifice area A₂ (provided A₂ << A₁).',
    'Maximum horizontal range of efflux jet R_max = H occurs when orifice is placed at midpoint h = H / 2.',
    'Two orifices at depths h₁ and (H - h₁) produce the EXACT same horizontal range R.',
    'Bernoulli\'s equation CANNOT be applied to viscous fluids, turbulent flows, or flows where energy is added by pumps / lost to friction.',
    'Dynamic lift on aeroplane wing: Upward force F = ½ ρ (v_top² - v_bottom²) A.',
    'Magnus effect causes a spinning ball to curve towards the low-pressure (high relative speed) side.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Expecting higher velocity to mean higher pressure.',
      correctFact: 'By Bernoulli\'s equation (P + ½ρv² = const), higher fluid velocity leads to LOWER static pressure.',
      whyItMattersForNEET: 'Fundamental pressure-velocity paradox tested in atomizers, aerofoils, and artery blockage problems.'
    },
    {
      commonConfusion: 'Applying Torricelli\'s formula v = √(2gh) using height from bottom instead of depth from top surface.',
      correctFact: 'In v = √(2gh), h is strictly the vertical DEPTH of orifice BELOW the free liquid surface, NOT height above ground!',
      whyItMattersForNEET: 'Frequent numerical trap in tank problems.'
    },
    {
      commonConfusion: 'Confusing Continuity Equation (Mass Conservation) with Bernoulli\'s Equation (Energy Conservation).',
      correctFact: 'A₁v₁ = A₂v₂ comes from mass conservation. P + ½ρv² + ρgh = const comes from work-energy theorem.',
      whyItMattersForNEET: 'Direct conceptual classification questions in NEET.'
    },
    {
      commonConfusion: 'Assuming efflux speed depends on the liquid density.',
      correctFact: 'Efflux velocity v = √(2gh) is completely independent of fluid density ρ.',
      whyItMattersForNEET: 'Conceptual questions comparing water vs mercury vs oil tanks.'
    }
  ],

  quickRevision: [
    'Continuity Eq: A₁v₁ = A₂v₂  ⇒  Mass Conservation (v ∝ 1/A)',
    'Bernoulli Eq: P + ½ρv² + ρgh = const  ⇒  Energy Conservation',
    'Horizontal flow: Speed v ↑  ⇒  Static Pressure P ↓',
    'Venturimeter Q = A₁A₂ √[2gh / (A₁² - A₂²)]',
    'Torricelli Efflux: v = √(2gh) | Range R = 2√[h(H-h)] | R_max = H at h = H/2',
    'Aerofoil Lift: F = ½ ρ (v_top² - v_bottom²) A',
    'Tank Emptying Time: t = (A₁/A₂) √(2H/g)'
  ],

  practiceQuestions: [
  {
    "id": "pq-bernoulli-1",
    "question": "Water flows through a horizontal pipe of non-uniform cross-section. At a point where pipe radius is 2 cm, water speed is 1 m/s and pressure is 8000 Pa. At another point where pipe radius is 1 cm, the pressure is (ρ_water = 1000 kg/m³):",
    "options": [
      "500 Pa",
      "1000 Pa",
      "1500 Pa",
      "2000 Pa"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Continuity Equation + Bernoulli Equation Combination",
    "explanation": "Step 1: Apply Continuity Equation A₁ v₁ = A₂ v₂.\nπ r₁² v₁ = π r₂² v₂  ⇒  π (0.02)² (1) = π (0.01)² v₂  ⇒  v₂ = 4 m/s.\nStep 2: Apply Bernoulli Equation for horizontal pipe (h₁ = h₂):\nP₁ + ½ ρ v₁² = P₂ + ½ ρ v₂²\n8000 + ½ (1000) (1)² = P₂ + ½ (1000) (4)²\n8000 + 500 = P₂ + 8000  ⇒  P₂ = 500 Pa."
  },
  {
    "id": "pq-bernoulli-2",
    "question": "A open cylindrical tank filled with water up to height H has a small hole at depth h = H/4 below the water surface. The horizontal range of the water stream on the ground level is:",
    "options": [
      "√3 H / 2",
      "H / 2",
      "√3 H",
      "H"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Torricelli's Horizontal Range Formula R = 2√[h(H-h)]",
    "explanation": "Given depth of hole h = H / 4.\nHeight of hole above ground level = H - h = H - H/4 = 3H / 4.\nHorizontal Range R = 2 √[ h (H - h) ] = 2 √[ (H/4) × (3H/4) ] = 2 × (H/4) √3 = (√3 / 2) H."
  },
  {
    "id": "pq-bernoulli-3",
    "question": "In a stream line flow, the velocity of liquid at a point where total pressure is P is v. If the speed becomes 2v at another point on the same horizontal level, the new pressure P' is:",
    "options": [
      "P - 3/2 ρ v²",
      "P - 1/2 ρ v²",
      "P + 3/2 ρ v²",
      "P - 2 ρ v²"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Bernoulli Horizontal Pressure Reduction",
    "explanation": "Bernoulli equation for horizontal flow: P₁ + ½ ρ v₁² = P₂ + ½ ρ v₂².\nGiven P₁ = P, v₁ = v, v₂ = 2v.\nP + ½ ρ v² = P' + ½ ρ (2v)²\nP + ½ ρ v² = P' + 2 ρ v²\nP' = P + ½ ρ v² - 2 ρ v² = P - 3/2 ρ v²."
  },
  {
    "id": "pq-bernoulli-4",
    "question": "An aeroplane wing of area 30 m² moves horizontally. The speed of air over top and bottom surfaces are 70 m/s and 50 m/s respectively. If air density is 1.2 kg/m³, the upward dynamic lift force is:",
    "options": [
      "43.2 kN",
      "21.6 kN",
      "86.4 kN",
      "14.4 kN"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Aerofoil Lift Force Formula F = ½ ρ (v_top² - v_bot²) A",
    "explanation": "Formula: F_lift = ½ ρ (v_top² - v_bottom²) A.\nGiven: ρ = 1.2 kg/m³, v_top = 70 m/s, v_bottom = 50 m/s, A = 30 m².\nv_top² - v_bottom² = 70² - 50² = 4900 - 2500 = 2400 m²/s².\nF_lift = ½ × 1.2 × 2400 × 30 = 0.6 × 72000 = 43200 N = 43.2 kN."
  },
  {
    "id": "prac-physbernoullisprinciple-5",
    "question": "Regarding Bernoulli's Principle, which of the following statements correctly resolves a common misconception about \"Expecting higher velocity to mean higher pressure.\"?",
    "options": [
      "By Bernoulli's equation (P + ½ρv² = const), higher fluid velocity leads to LOWER static pressure.",
      "Incorrect assumption: Expecting higher velocity to mean higher pressure.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "By Bernoulli's equation (P + ½ρv² = const), higher fluid velocity leads to LOWER static pressure.. Fundamental pressure-velocity paradox tested in atomizers, aerofoils, and artery blockage problems.",
    "difficulty": "Medium",
    "conceptTested": "Bernoulli's Principle - Conceptual Clarity"
  },
  {
    "id": "prac-physbernoullisprinciple-6",
    "question": "Regarding Bernoulli's Principle, which of the following statements correctly resolves a common misconception about \"Applying Torricelli's formula v = √(2gh) using height from bottom instead of depth from top surface.\"?",
    "options": [
      "In v = √(2gh), h is strictly the vertical DEPTH of orifice BELOW the free liquid surface, NOT height above ground!",
      "Incorrect assumption: Applying Torricelli's formula v = √(2gh) using height from bottom instead of depth from top surface.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "In v = √(2gh), h is strictly the vertical DEPTH of orifice BELOW the free liquid surface, NOT height above ground!. Frequent numerical trap in tank problems.",
    "difficulty": "Medium",
    "conceptTested": "Bernoulli's Principle - Conceptual Clarity"
  },
  {
    "id": "prac-physbernoullisprinciple-7",
    "question": "Regarding Bernoulli's Principle, which of the following statements correctly resolves a common misconception about \"Confusing Continuity Equation (Mass Conservation) with Bernoulli's Equation (Energy Conservation).\"?",
    "options": [
      "A₁v₁ = A₂v₂ comes from mass conservation. P + ½ρv² + ρgh = const comes from work-energy theorem.",
      "Incorrect assumption: Confusing Continuity Equation (Mass Conservation) with Bernoulli's Equation (Energy Conservation).",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "A₁v₁ = A₂v₂ comes from mass conservation. P + ½ρv² + ρgh = const comes from work-energy theorem.. Direct conceptual classification questions in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Bernoulli's Principle - Conceptual Clarity"
  },
  {
    "id": "prac-physbernoullisprinciple-8",
    "question": "Regarding Bernoulli's Principle, which of the following statements correctly resolves a common misconception about \"Assuming efflux speed depends on the liquid density.\"?",
    "options": [
      "Efflux velocity v = √(2gh) is completely independent of fluid density ρ.",
      "Incorrect assumption: Assuming efflux speed depends on the liquid density.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Efflux velocity v = √(2gh) is completely independent of fluid density ρ.. Conceptual questions comparing water vs mercury vs oil tanks.",
    "difficulty": "Medium",
    "conceptTested": "Bernoulli's Principle - Conceptual Clarity"
  },
  {
    "id": "prac-physbernoullisprinciple-9",
    "question": "In the study of Bernoulli's Principle, what is the exact definition and significance of \"Ideal Fluid\"?",
    "options": [
      "A theoretical fluid model that is non-viscous, incompressible (ρ = const), steady in flow, and irrotational.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A theoretical fluid model that is non-viscous, incompressible (ρ = const), steady in flow, and irrotational.. ",
    "difficulty": "Easy",
    "conceptTested": "Ideal Fluid definition"
  },
  {
    "id": "prac-physbernoullisprinciple-10",
    "question": "In the study of Bernoulli's Principle, what is the exact definition and significance of \"Equation of Continuity\"?",
    "options": [
      "Mathematical statement of mass conservation in fluid dynamics: Mass flow rate dm/dt = ρ A v = constant. For incompressible fluids, A₁v₁ = A₂v₂.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Mathematical statement of mass conservation in fluid dynamics: Mass flow rate dm/dt = ρ A v = constant. For incompressible fluids, A₁v₁ = A₂v₂.. ",
    "difficulty": "Easy",
    "conceptTested": "Equation of Continuity definition"
  }
],
  pyqs: [
    {
      id: 'pyq-bernoulli-1',
      year: 2019,
      exam: 'NEET UG',
      question: 'A small hole of area of cross-section 2 mm² is present near the bottom of a fully filled open water tank of height 2 m. Taking g = 10 m/s², the rate of flow of water through the open hole is:',
      options: [
        '12.6 × 10⁻⁶ m³/s',
        '8.9 × 10⁻⁶ m³/s',
        '2.23 × 10⁻⁶ m³/s',
        '6.3 × 10⁻⁶ m³/s'
      ],
      correctAnswer: 0,
      difficulty: 'Medium',
      conceptTested: 'Torricelli Efflux Speed & Discharge Q = A v',
      explanation: 'Efflux velocity v = √(2 g h) = √(2 × 10 × 2) = √40 ≈ 6.32 m/s.\nArea of orifice A = 2 mm² = 2 × 10⁻⁶ m².\nRate of flow Q = A · v = (2 × 10⁻⁶ m²) × 6.32 m/s = 12.64 × 10⁻⁶ m³/s ≈ 12.6 × 10⁻⁶ m³/s.',
      topicId: 'phys-bernoullis-principle',
      verified: true
    },
    {
      id: 'pyq-bernoulli-2',
      year: 2015,
      exam: 'AIPMT / NEET',
      question: 'A wind with speed 40 m/s blows parallel to the roof of a house. The area of the roof is 250 m². Assuming that the pressure inside the house is atmospheric pressure, the force exerted by the wind on the roof and the direction of force will be (ρ_air = 1.2 kg/m³):',
      options: [
        '2.4 × 10⁵ N, upwards',
        '2.4 × 10⁵ N, downwards',
        '4.8 × 10⁵ N, upwards',
        '4.8 × 10⁵ N, downwards'
      ],
      correctAnswer: 0,
      difficulty: 'Medium',
      conceptTested: 'Roof Blowing Off by Bernoulli Effect',
      explanation: 'Air speed above roof v = 40 m/s; air inside house is still (v = 0).\nPressure difference ΔP = P_inside - P_outside = ½ ρ_air v².\nΔP = ½ × 1.2 × (40)² = 0.6 × 1600 = 960 Pa.\nUpward force F = ΔP × Area = 960 Pa × 250 m² = 240,000 N = 2.4 × 10⁵ N, directed UPWARDS (roof gets blown off upwards!).',
      topicId: 'phys-bernoullis-principle',
      verified: true
    }
  ]
};
