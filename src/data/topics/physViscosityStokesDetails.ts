import { DetailedTopicContent } from '../../types/neet';

export const physViscosityStokesDetails: DetailedTopicContent = {
  topicId: 'phys-viscosity-stokes',
  topicName: 'Viscosity Stokes',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Properties of Bulk Matter',
  chapter: 'Mechanical Properties of Fluids',

  whatIsThisTopic: 'Viscosity is the internal friction of a fluid that opposes relative motion between its adjacent layers. When a fluid flows over a solid surface, velocity varies across layers, giving rise to tangential viscous drag forces governed by Newton\'s Law of Viscosity. At high velocities or around moving obstacles, flow transitions from steady streamline/laminar motion to chaotic turbulent flow, governed by Reynolds Number. For small spherical objects falling through viscous media, Stokes\' Law provides the viscous drag force F = 6πηrv, leading to a constant maximum velocity called Terminal Velocity. This module delivers complete NCERT + NEET UG concepts, derivations, formulas, and high-yield problem patterns.',

  basicIdea: [
    'Viscosity is fluid friction that arises due to intermolecular cohesive forces and momentum transport between moving fluid layers.',
    'Newton\'s Law of Viscosity states that viscous drag force between fluid layers is proportional to surface area A and velocity gradient dv/dx: F = -η A (dv/dx).',
    'Coefficient of Viscosity η has SI unit Pa·s (or N·s/m² or kg·m⁻¹·s⁻¹) and CGS unit Poise (1 Pa·s = 10 Poise). Its dimensions are [M L⁻¹ T⁻¹].',
    'Flow Types: Streamline flow (orderly, fixed path), Laminar flow (parallel non-mixing sheets), and Turbulent flow (chaotic eddies above critical velocity). Reynolds Number R_e = ρvd/η predicts turbulence (R_e < 1000 for streamline, R_e > 2000 for turbulent).',
    'Stokes\' Law states that the retarding viscous force on a smooth sphere of radius r moving at speed v in a fluid of viscosity η is F_v = 6πηrv.',
    'Terminal Velocity v_T is the constant maximum velocity attained by a falling sphere when net acceleration becomes zero (Weight = Upthrust + Viscous Drag): v_T = (2/9) r² (ρ - σ) g / η.'
  ],

  importantTerms: [
    {
      term: 'Viscosity (η)',
      definition: 'The intrinsic property of a fluid by virtue of which it resists relative motion between its adjacent layers. Internal fluid friction.'
    },
    {
      term: 'Velocity Gradient (dv/dx)',
      definition: 'The rate of change of fluid velocity with perpendicular distance from a fixed boundary surface. Unit: s⁻¹.'
    },
    {
      term: 'Poise & Poiseuille',
      definition: 'Units of viscosity. 1 Poiseuille (or Pa·s) = 1 N·s/m² = 10 Poise (CGS dyne·s/cm²).'
    },
    {
      term: 'Streamline Flow',
      definition: 'A fluid motion in which every fluid particle passing through a given point follows the exact same path with identical velocity as preceding particles.'
    },
    {
      term: 'Critical Velocity (v_c)',
      definition: 'The maximum velocity up to which fluid flow remains steady and streamline. Above v_c, flow turns turbulent.'
    },
    {
      term: 'Reynolds Number (R_e)',
      definition: 'A dimensionless variable R_e = ρ v d / η representing the ratio of inertial forces to viscous forces in fluid flow.'
    },
    {
      term: 'Terminal Velocity (v_T)',
      definition: 'The maximum, constant velocity reached by a body moving through a viscous fluid when viscous drag plus buoyant force exactly balances its weight.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Internal Friction in Fluids & Newton\'s Law of Viscosity',
      paragraphs: [
        'ORIGIN OF VISCOSITY:',
        'Consider a liquid flowing over a fixed horizontal solid plane. The liquid layer directly in contact with the solid surface remains at rest (zero slip condition). As distance x above the plate increases, fluid velocity v increases progressively. Faster upper layers pull slower lower layers forward, while slower lower layers drag faster upper layers backward.',
        'NEWTON\'S LAW OF VISCOSITY:',
        'Sir Isaac Newton established that the viscous tangential force F_v between two liquid layers of contact area A separated by distance dx with velocity difference dv is:',
        'F_v = -η A (dv / dx)',
        'Where:',
        '• η = Coefficient of Viscosity of the liquid.',
        '• (dv / dx) = Velocity Gradient perpendicular to flow direction.',
        '• The negative sign indicates that viscous force opposes relative motion.',
        'UNITS & DIMENSIONS OF VISCOSITY:',
        '• SI Unit: N·s/m² or Pascal-second (Pa·s) or kg·m⁻¹·s⁻¹.',
        '• CGS Unit: dyne·s/cm² or Poise (P).',
        '• Conversion: 1 Pa·s = 1 N·s/m² = 10 Poise = 100 Centipoise (cP).',
        '• Dimensional Formula: [M L⁻¹ T⁻¹].'
      ],
      visual: {
        caption: 'Viscous Shear Flow: Velocity gradient dv/dx across parallel liquid layers moving over a stationary bottom plate.',
        guide: 'Layer velocity v increases linearly with distance x above the stationary plate.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <!-- Fixed bottom plate -->
          <rect x="80" y="170" width="440" height="20" fill="#64748b"/>
          <line x1="80" y1="170" x2="520" y2="170" stroke="#0f172a" stroke-width="2"/>
          <!-- Hatching lines for fixed boundary -->
          <path d="M 100 190 L 115 170 M 150 190 L 165 170 M 200 190 L 215 170 M 250 190 L 265 170 M 300 190 L 315 170 M 350 190 L 365 170 M 400 190 L 415 170 M 450 190 L 465 170" stroke="#475569" stroke-width="1.5"/>
          <!-- Velocity profile arrows -->
          <line x1="120" y1="170" x2="120" y2="40" stroke="#0284c7" stroke-width="2" stroke-dasharray="4 4"/>
          <path d="M 120 140 L 180 140" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)"/>
          <path d="M 120 110 L 250 110" stroke="#0284c7" stroke-width="2"/>
          <path d="M 120 80 L 320 80" stroke="#0284c7" stroke-width="2"/>
          <path d="M 120 50 L 390 50" stroke="#0284c7" stroke-width="2"/>
          <text x="405" y="55" font-size="12" fill="#0284c7" font-weight="bold">v + dv</text>
          <text x="335" y="85" font-size="12" fill="#0284c7" font-weight="bold">v</text>
          <text x="200" y="25" font-size="12" fill="#0f172a" font-weight="bold" text-anchor="middle">Viscous Drag F = η A (dv/dx)</text>
        </svg>`
      }
    },
    {
      heading: '2. Temperature & Pressure Dependence of Viscosity',
      paragraphs: [
        'VISCOSITY OF LIQUIDS VS TEMPERATURE:',
        'In liquids, viscosity is primarily caused by cohesive intermolecular attractive forces. As temperature increases, thermal kinetic energy increases and weakens intermolecular cohesive bonds.',
        '• Consequently, viscosity of liquids DECREASES rapidly with increasing temperature.',
        '• Empirical Relation (Arrhenius equation): η = η₀ e^(E_a / R T).',
        'VISCOSITY OF GASES VS TEMPERATURE:',
        'In gases, viscosity is caused by molecular momentum transfer across layers. As temperature increases, average molecular speed v_avg increases (v_avg ∝ √T), leading to more frequent molecular collisions and momentum transport.',
        '• Consequently, viscosity of gases INCREASES with increasing temperature: η_gas ∝ √T.',
        'PRESSURE DEPENDENCE:',
        '• Viscosity of liquids increases under very high pressure (except water between 0°C and 4°C).',
        '• Viscosity of gases is nearly independent of pressure at moderate densities.'
      ]
    },
    {
      heading: '3. Streamline, Laminar, Turbulent Flow & Reynolds Number',
      paragraphs: [
        'STREAMLINE FLOW:',
        'Flow in which every particle passing through a point follows the same smooth trajectory (streamline). Streamlines never intersect each other!',
        'LAMINAR FLOW:',
        'Flow in which fluid glides in parallel layers (laminae) without lateral mixing.',
        'TURBULENT FLOW:',
        'When fluid velocity exceeds critical velocity v_c, orderly streamline flow breaks down into chaotic motion with swirls, eddies, and high energy dissipation.',
        'REYNOLDS NUMBER (R_e):',
        'R_e = (Inertial Force) / (Viscous Force) = (ρ v d) / η',
        'Where ρ = fluid density, v = flow speed, d = pipe diameter, η = viscosity.',
        '• R_e < 1000: Flow is steady, streamline/laminar.',
        '• 1000 < R_e < 2000: Unstable flow transitioning between laminar and turbulent.',
        '• R_e > 2000: Flow is fully turbulent.'
      ]
    },
    {
      heading: '4. Stokes\' Law & Terminal Velocity Derivation',
      paragraphs: [
        'STOKES\' LAW:',
        'When a smooth spherical body of radius r moves through a viscous fluid of viscosity η at speed v, it experiences a retarding viscous drag force:',
        'F_v = 6 π η r v',
        'Assumptions: Spherical shape, smooth surface, infinite fluid medium, low velocity (no turbulence).',
        'CONCEPT OF TERMINAL VELOCITY:',
        'Consider a sphere of radius r and density ρ falling freely under gravity in a viscous liquid of density σ and viscosity η.',
        'Forces acting on falling sphere:',
        '1. Downward Weight: W = mg = (4/3 π r³ ρ) g',
        '2. Upward Buoyant Force: F_B = (4/3 π r³ σ) g',
        '3. Upward Viscous Drag: F_v = 6 π η r v',
        'WHY TERMINAL VELOCITY OCCURS:',
        'Initially at v = 0, F_v = 0, so net force is downward (W - F_B) causing acceleration. As speed v increases, viscous drag F_v = 6πηrv increases proportionately. Eventually, total upward forces balance downward weight:',
        'W = F_B + F_v  ⇒  (4/3 π r³ ρ) g = (4/3 π r³ σ) g + 6 π η r v_T',
        '6 π η r v_T = (4/3 π r³) (ρ - σ) g',
        'TERMINAL VELOCITY FORMULA:',
        'v_T = (2 / 9) · [r² (ρ - σ) g] / η',
        'CRITICAL PROPORTIONALITIES FOR NEET:',
        '• v_T ∝ r² (Terminal velocity is proportional to the SQUARE of radius!).',
        '• v_T ∝ (ρ - σ) (If ρ > σ, sphere falls downward; if ρ < σ like air bubble in water, v_T is negative and bubble rises upward!).',
        '• v_T ∝ 1 / η (Higher fluid viscosity slows down terminal velocity).'
      ],
      visual: {
        caption: 'Terminal Velocity Force Balance: Downward weight W balanced by upward Buoyant Force F_B and Viscous Drag F_v = 6πηrv_T.',
        guide: 'When a = 0, W = F_B + F_v leading to constant terminal speed v_T ∝ r².',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <rect x="200" y="20" width="200" height="200" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
          <!-- Falling sphere -->
          <circle cx="300" cy="120" r="32" fill="#38bdf8" stroke="#0284c7" stroke-width="3"/>
          <text x="300" y="125" font-size="12" fill="#0f172a" font-weight="extrabold" text-anchor="middle">Radius r</text>
          <!-- Weight arrow down -->
          <path d="M 300 152 L 300 210" stroke="#dc2626" stroke-width="3.5" marker-end="url(#arrow)"/>
          <text x="305" y="195" font-size="12" fill="#dc2626" font-weight="bold">Weight W = (4/3)πr³ρg</text>
          <!-- Upthrust arrow up -->
          <path d="M 282 88 L 282 35" stroke="#16a34a" stroke-width="3"/>
          <text x="175" y="50" font-size="11" fill="#16a34a" font-weight="bold">F_B = (4/3)πr³σg</text>
          <!-- Viscous drag up -->
          <path d="M 318 88 L 318 35" stroke="#2563eb" stroke-width="3"/>
          <text x="325" y="50" font-size="11" fill="#2563eb" font-weight="bold">F_v = 6πηrv_T</text>
          <text x="300" y="232" font-size="12" fill="#0f172a" font-weight="bold" text-anchor="middle">Equilibrium at v_T: W = F_B + F_v  ⇒  v_T = (2/9)r²(ρ-σ)g/η</text>
        </svg>`
      }
    }
  ],

  formulae: [
    {
      title: 'Newton\'s Law of Viscosity',
      formula: 'F_v = -\\eta A \\frac{dv}{dx}',
      variables: 'F_v = Viscous force (N), η = Coefficient of viscosity (Pa·s), A = Contact Area (m²), dv/dx = Velocity Gradient (s⁻¹)'
    },
    {
      title: 'Reynolds Number',
      formula: 'R_e = \\frac{\\rho v d}{\\eta}',
      variables: 'R_e = Reynolds Number (dimensionless), ρ = Density, v = Flow speed, d = Tube diameter, η = Viscosity'
    },
    {
      title: 'Stokes\' Law',
      formula: 'F_v = 6 \\pi \\eta r v',
      variables: 'F_v = Viscous drag force on sphere (N), η = Fluid viscosity, r = Sphere radius (m), v = Speed (m/s)'
    },
    {
      title: 'Terminal Velocity Formula',
      formula: 'v_T = \\frac{2}{9} \\frac{r^2 (\\rho - \\sigma) g}{\\eta}',
      variables: 'v_T = Terminal Velocity (m/s), r = Sphere radius, ρ = Density of sphere, σ = Density of fluid, η = Viscosity'
    },
    {
      title: 'Terminal Velocity Scaling with Coalescing Drops',
      formula: 'v_{\\text{big}} = N^{2/3} v_{\\text{small}}',
      variables: 'N = Number of identical small drops coalescing into one big drop, v_small = Terminal velocity of small drop'
    }
  ],

  neetImportantPoints: [
    'Viscosity of LIQUIDS decreases with rising temperature, whereas viscosity of GASES increases with rising temperature (η_gas ∝ √T).',
    'Stokes\' law applies strictly to SPHERICAL bodies in smooth, laminar, unbounded fluid motion.',
    'Terminal velocity v_T is directly proportional to the SQUARE of radius (v_T ∝ r²). Doubling sphere radius increases terminal velocity 4 times!',
    'If sphere density ρ is LESS than liquid density σ (e.g. air bubble in water), (ρ - σ) is negative, so terminal velocity is UPWARD.',
    'When N identical small drops (each of radius r and terminal velocity v₀) combine to form a single big drop of radius R:',
    'R = N^(1/3) r, and terminal velocity of big drop v_big = N^(2/3) v₀.',
    'Terminal velocity is independent of height through which the body fell prior to reaching terminal speed.',
    'Reynolds number R_e < 1000 indicates streamline flow, while R_e > 2000 indicates turbulent flow.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing liquid viscosity temperature dependence with gas viscosity temperature dependence.',
      correctFact: 'Viscosity of liquids DECREASES with temperature (cohesive forces decrease), while viscosity of gases INCREASES with temperature (molecular collisions increase, η_gas ∝ √T).',
      whyItMattersForNEET: 'Frequently tested in NCERT direct assertion-reason questions.'
    },
    {
      commonConfusion: 'Assuming terminal velocity v_T is proportional to r instead of r².',
      correctFact: 'By Stokes\' law force balance, weight W ∝ r³ and viscous drag F_v ∝ r v. Balancing gives v_T ∝ r² (proportional to radius squared!).',
      whyItMattersForNEET: 'Numerical ratio problems involving spheres of radii r₁ and r₂.'
    },
    {
      commonConfusion: 'Thinking viscous force equals drag force in turbulent flow.',
      correctFact: 'In streamline flow, drag is governed by viscosity (Stokes\' law F ∝ v). In turbulent flow, drag is governed by pressure differences and density (F_drag ∝ ρ A v²).',
      whyItMattersForNEET: 'Distinguishes low-speed viscous resistance from high-speed turbulent resistance.'
    },
    {
      commonConfusion: 'Assuming an air bubble in water falls downward because of gravity.',
      correctFact: 'For an air bubble, ρ_air < ρ_water, so buoyant force exceeds weight (ρ - σ < 0). The bubble attains UPWARD terminal velocity!',
      whyItMattersForNEET: 'Trap question involving sign and direction of bubble velocity in liquids.'
    }
  ],

  quickRevision: [
    'Newton\'s Viscosity: F = η A (dv/dx) | SI Unit: Pa·s = N·s/m² | CGS: 1 Pa·s = 10 Poise | Dim: [M L⁻¹ T⁻¹]',
    'Liquid Viscosity ↓ with Temp T ↑ | Gas Viscosity ↑ with Temp T ↑ (η_gas ∝ √T)',
    'Reynolds Number R_e = ρvd/η | R_e < 1000 (Streamline) | R_e > 2000 (Turbulent)',
    'Stokes\' Law: F_v = 6πηrv (Valid for smooth spheres in laminar fluid)',
    'Terminal Velocity: v_T = (2/9) r² (ρ - σ) g / η  ⇒  v_T ∝ r²',
    'Coalescing N drops: R = N^(1/3) r  ⇒  v_big = N^(2/3) v_small',
    'Air bubble in water: ρ < σ  ⇒  Upward terminal velocity!'
  ],

  practiceQuestions: [
  {
    "id": "pq-viscosity-1",
    "question": "A spherical raindrops of radius 1 mm falls through air with a terminal velocity of 10 cm/s. If 8 such identical raindrops coalesce to form a single larger drop, the terminal velocity of the new drop will be:",
    "options": [
      "40 cm/s",
      "20 cm/s",
      "80 cm/s",
      "10 cm/s"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Terminal Velocity of Coalescing Drops (v_big = N^(2/3) v_small)",
    "explanation": "When N identical drops coalesce into a single big drop, volume is conserved:\n(4/3 π R³) = N × (4/3 π r³) ⇒ R = N^(1/3) r.\nTerminal velocity v_T ∝ r² ⇒ v_big / v_small = (R / r)² = [N^(1/3)]² = N^(2/3).\nGiven N = 8 and v_small = 10 cm/s:\nv_big = (8)^(2/3) × 10 cm/s = (2³)^(2/3) × 10 = 4 × 10 cm/s = 40 cm/s."
  },
  {
    "id": "pq-viscosity-2",
    "question": "Two small metallic spheres of radii r₁ and r₂ (where r₁ = 2 r₂) fall through a viscous liquid. The ratio of their terminal velocities (v₁ / v₂) is:",
    "options": [
      "4 : 1",
      "2 : 1",
      "1 : 4",
      "8 : 1"
    ],
    "correctAnswer": 0,
    "difficulty": "Easy",
    "conceptTested": "Terminal Velocity Proportionality v_T ∝ r²",
    "explanation": "Terminal velocity formula v_T = (2/9) r² (ρ - σ) g / η.\nSince both spheres are made of the same material and fall in the same liquid, v_T ∝ r².\nRatio v₁ / v₂ = (r₁ / r₂)² = (2 r₂ / r₂)² = 2² = 4 : 1."
  },
  {
    "id": "pq-viscosity-3",
    "question": "With increase in temperature, the viscosity of liquids and gases respectively:",
    "options": [
      "Decreases, increases",
      "Increases, decreases",
      "Decreases, decreases",
      "Increases, increases"
    ],
    "correctAnswer": 0,
    "difficulty": "Easy",
    "conceptTested": "Temperature Dependence of Viscosity",
    "explanation": "In liquids, rising temperature weakens cohesive intermolecular forces, causing viscosity to DECREASE.\nIn gases, rising temperature increases molecular thermal speeds and momentum transport, causing viscosity to INCREASE (η_gas ∝ √T)."
  },
  {
    "id": "pq-viscosity-4",
    "question": "A plate of area 100 cm² is placed on a upper layer of glycerine 2 mm thick. If coefficient of viscosity of glycerine is 2 Pa·s, the horizontal force required to move the plate with a velocity of 5 cm/s is:",
    "options": [
      "0.5 N",
      "0.25 N",
      "1.0 N",
      "2.0 N"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Newton's Law of Viscosity Formula",
    "explanation": "Given: Area A = 100 cm² = 100 × 10⁻⁴ m² = 10⁻² m².\nLayer thickness dx = 2 mm = 2 × 10⁻³ m.\nVelocity dv = 5 cm/s = 5 × 10⁻² m/s.\nViscosity η = 2 Pa·s.\nBy Newton's Law: F = η A (dv / dx)\nF = 2 × 10⁻² × (5 × 10⁻² / 2 × 10⁻³) = 2 × 10⁻² × 25 = 0.5 N."
  },
  {
    "id": "prac-physviscositystokes-5",
    "question": "Regarding Viscosity Stokes, which of the following statements correctly resolves a common misconception about \"Confusing liquid viscosity temperature dependence with gas viscosity temperature dependence.\"?",
    "options": [
      "Viscosity of liquids DECREASES with temperature (cohesive forces decrease), while viscosity of gases INCREASES with temperature (molecular collisions increase, η_gas ∝ √T).",
      "Incorrect assumption: Confusing liquid viscosity temperature dependence with gas viscosity temperature dependence.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Viscosity of liquids DECREASES with temperature (cohesive forces decrease), while viscosity of gases INCREASES with temperature (molecular collisions increase, η_gas ∝ √T).. Frequently tested in NCERT direct assertion-reason questions.",
    "difficulty": "Medium",
    "conceptTested": "Viscosity Stokes - Conceptual Clarity"
  },
  {
    "id": "prac-physviscositystokes-6",
    "question": "Regarding Viscosity Stokes, which of the following statements correctly resolves a common misconception about \"Assuming terminal velocity v_T is proportional to r instead of r².\"?",
    "options": [
      "By Stokes' law force balance, weight W ∝ r³ and viscous drag F_v ∝ r v. Balancing gives v_T ∝ r² (proportional to radius squared!).",
      "Incorrect assumption: Assuming terminal velocity v_T is proportional to r instead of r².",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "By Stokes' law force balance, weight W ∝ r³ and viscous drag F_v ∝ r v. Balancing gives v_T ∝ r² (proportional to radius squared!).. Numerical ratio problems involving spheres of radii r₁ and r₂.",
    "difficulty": "Medium",
    "conceptTested": "Viscosity Stokes - Conceptual Clarity"
  },
  {
    "id": "prac-physviscositystokes-7",
    "question": "Regarding Viscosity Stokes, which of the following statements correctly resolves a common misconception about \"Thinking viscous force equals drag force in turbulent flow.\"?",
    "options": [
      "In streamline flow, drag is governed by viscosity (Stokes' law F ∝ v). In turbulent flow, drag is governed by pressure differences and density (F_drag ∝ ρ A v²).",
      "Incorrect assumption: Thinking viscous force equals drag force in turbulent flow.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "In streamline flow, drag is governed by viscosity (Stokes' law F ∝ v). In turbulent flow, drag is governed by pressure differences and density (F_drag ∝ ρ A v²).. Distinguishes low-speed viscous resistance from high-speed turbulent resistance.",
    "difficulty": "Medium",
    "conceptTested": "Viscosity Stokes - Conceptual Clarity"
  },
  {
    "id": "prac-physviscositystokes-8",
    "question": "Regarding Viscosity Stokes, which of the following statements correctly resolves a common misconception about \"Assuming an air bubble in water falls downward because of gravity.\"?",
    "options": [
      "For an air bubble, ρ_air < ρ_water, so buoyant force exceeds weight (ρ - σ < 0). The bubble attains UPWARD terminal velocity!",
      "Incorrect assumption: Assuming an air bubble in water falls downward because of gravity.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "For an air bubble, ρ_air < ρ_water, so buoyant force exceeds weight (ρ - σ < 0). The bubble attains UPWARD terminal velocity!. Trap question involving sign and direction of bubble velocity in liquids.",
    "difficulty": "Medium",
    "conceptTested": "Viscosity Stokes - Conceptual Clarity"
  },
  {
    "id": "prac-physviscositystokes-9",
    "question": "In the study of Viscosity Stokes, what is the exact definition and significance of \"Viscosity (η)\"?",
    "options": [
      "The intrinsic property of a fluid by virtue of which it resists relative motion between its adjacent layers. Internal fluid friction.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The intrinsic property of a fluid by virtue of which it resists relative motion between its adjacent layers. Internal fluid friction.. ",
    "difficulty": "Easy",
    "conceptTested": "Viscosity (η) definition"
  },
  {
    "id": "prac-physviscositystokes-10",
    "question": "In the study of Viscosity Stokes, what is the exact definition and significance of \"Velocity Gradient (dv/dx)\"?",
    "options": [
      "The rate of change of fluid velocity with perpendicular distance from a fixed boundary surface. Unit: s⁻¹.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The rate of change of fluid velocity with perpendicular distance from a fixed boundary surface. Unit: s⁻¹.. ",
    "difficulty": "Easy",
    "conceptTested": "Velocity Gradient (dv/dx) definition"
  }
],
  pyqs: [
    {
      id: 'pyq-viscosity-1',
      year: 2020,
      exam: 'NEET UG',
      question: 'A small sphere of radius r falls from rest in a viscous liquid. As a result of friction, heat is produced. The rate of production of heat at terminal velocity is proportional to:',
      options: [
        'r⁵',
        'r⁴',
        'r³',
        'r²'
      ],
      correctAnswer: 0,
      difficulty: 'Hard',
      conceptTested: 'Rate of Work Done by Viscous Force (P = F_v · v_T ∝ r⁵)',
      explanation: 'Rate of heat production = Power dissipated by viscous force P = F_v · v_T.\nFrom Stokes\' law: F_v = 6 π η r v_T.\nThus P = (6 π η r v_T) · v_T = 6 π η r v_T².\nSince terminal velocity v_T ∝ r², substituting gives:\nP ∝ r · (r²)² = r · r⁴ = r⁵.\nTherefore, rate of heat production is proportional to r⁵.',
      topicId: 'phys-viscosity-stokes',
      verified: true
    },
    {
      id: 'pyq-viscosity-2',
      year: 2018,
      exam: 'NEET UG',
      question: 'A small tiny spherical drop of water of radius 10⁻⁶ m is falling in air. If the viscosity of air is 1.8 × 10⁻⁵ Pa·s and density of water is 1000 kg/m³, the terminal velocity of the water drop is (neglect air density, g = 10 m/s²):',
      options: [
        '1.23 × 10⁻⁴ m/s',
        '1.23 × 10⁻³ m/s',
        '2.47 × 10⁻⁴ m/s',
        '4.35 × 10⁻⁵ m/s'
      ],
      correctAnswer: 0,
      difficulty: 'Medium',
      conceptTested: 'Terminal Velocity Direct Calculation',
      explanation: 'Formula: v_T = (2/9) r² ρ g / η (neglecting air density σ).\nGiven: r = 10⁻⁶ m, ρ = 1000 kg/m³, g = 10 m/s², η = 1.8 × 10⁻⁵ Pa·s.\nv_T = (2/9) × (10⁻⁶)² × 1000 × 10 / (1.8 × 10⁻⁵)\nv_T = (2/9) × 10⁻¹² × 10⁴ / (1.8 × 10⁻⁵) = (2 / 16.2) × 10⁻³ = 0.123 × 10⁻³ m/s = 1.23 × 10⁻⁴ m/s.',
      topicId: 'phys-viscosity-stokes',
      verified: true
    }
  ]
};
