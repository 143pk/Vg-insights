import { DetailedTopicContent } from '../../types/neet';

export const physFluidPressureDetails: DetailedTopicContent = {
  topicId: 'phys-fluid-pressure',
  topicName: 'Fluid Pressure',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Properties of Bulk Matter',
  chapter: 'Mechanical Properties of Fluids',

  whatIsThisTopic: 'Fluid pressure and buoyancy form the foundational pillars of hydrostatics. Unlike solids, fluids (liquids and gases) cannot sustain shearing stress at rest and yield continuously under applied tangential forces. Consequently, a static fluid exerts only normal forces (thrust) on any surface in contact with it. This topic comprehensively covers thrust, pressure, Pascal\'s Law, hydraulic machinery, pressure variation with depth, atmospheric pressure measurement (barometer and manometer), Archimedes\' Principle, buoyancy, and laws of flotation—providing complete NCERT alignment and high-yield problem-solving strategies for NEET UG.',

  basicIdea: [
    'Thrust is the total normal force exerted by a fluid on a surface. Pressure is thrust per unit area: P = F_normal / A.',
    'Pressure at a point in a static fluid is scalar, isotropic (equal in all directions), and depends solely on depth h, fluid density ρ, and acceleration due to gravity g: P = P₀ + ρgh.',
    'Pascal\'s Law states that pressure applied to an enclosed fluid is transmitted undiminished to every point in the fluid and container walls. This principle powers hydraulic lifts, presses, and brakes.',
    'Gauge pressure is the excess pressure above atmospheric pressure (P_gauge = P - P₀ = ρgh). Absolute pressure is total pressure (P_abs = P₀ + ρgh).',
    'Archimedes\' Principle states that an object partially or fully submerged in a fluid experiences an upward buoyant force equal to the weight of the displaced fluid: F_B = V_submerged · ρ_fluid · g.',
    'Law of Flotation: A body floats in a liquid when its total weight equals the weight of displaced liquid, leading to the submerged volume fraction formula: V_submerged / V_total = ρ_body / ρ_fluid.'
  ],

  importantTerms: [
    {
      term: 'Fluid Thrust',
      definition: 'The total force exerted by a static fluid perpendicular to any surface in contact with it. Unit: Newton (N).'
    },
    {
      term: 'Fluid Pressure (P)',
      definition: 'The normal force exerted per unit cross-sectional area: P = dF / dA. SI Unit: Pascal (Pa) or N/m². Dimensions: [M L⁻¹ T⁻²].'
    },
    {
      term: 'Atmospheric Pressure (P₀)',
      definition: 'Pressure exerted by Earth\'s atmosphere at sea level: P₀ = 1.013 × 10⁵ Pa = 1.013 bar = 76 cm of Hg = 760 mmHg = 760 Torr.'
    },
    {
      term: 'Gauge Pressure (P_gauge)',
      definition: 'The difference between absolute pressure and atmospheric pressure: P_gauge = P_abs - P₀ = ρgh.'
    },
    {
      term: 'Pascal\'s Law',
      definition: 'In an enclosed incompressible fluid at rest, any pressure change applied at any point is transmitted undiminished to every point of the fluid.'
    },
    {
      term: 'Buoyant Force / Upthrust (F_B)',
      definition: 'The net upward force exerted by a fluid on a submerged body due to higher hydrostatic pressure at greater depths: F_B = V_displaced · ρ_fluid · g.'
    },
    {
      term: 'Relative Density (Specific Gravity)',
      definition: 'The ratio of the density of a substance to the density of pure water at 4°C (1000 kg/m³). Dimensionless quantity.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Thrust, Pressure & Isotropic Nature of Fluid Pressure',
      paragraphs: [
        'WHAT IS FLUID PRESSURE?',
        'When a fluid is at rest, it cannot withstand tangential or shearing stress. If a shear stress were present, the fluid layers would slip past one another. Therefore, the force exerted by a static fluid on any surface is ALWAYS perpendicular (normal) to the surface. This perpendicular force is called Fluid Thrust.',
        'PRESSURE DEFINITION & UNITS:',
        'Pressure P is defined as normal force per unit area: P = F / A.',
        '• SI Unit: Pascal (Pa) where 1 Pa = 1 N/m².',
        '• CGS Unit: dyne/cm² (1 Pa = 10 dyne/cm²).',
        '• Practical Units: 1 bar = 10⁵ Pa; 1 atm = 1.013 × 10⁵ Pa = 760 Torr = 760 mmHg.',
        '• Dimensional Formula: [M L⁻¹ T⁻²] (same as stress and Young\'s modulus).',
        'ISOTROPIC NATURE:',
        'Pressure at a point inside a static fluid is equal in all directions (scalar quantity). Pressure has no specific vector direction; only the thrust force exerted on a boundary surface has direction (normal to the surface).'
      ],
      visual: {
        caption: 'Isotropic Fluid Pressure at Depth: Equal pressure in all directions on a fluid element and normal thrust on container walls.',
        guide: 'At depth h, pressure P = P₀ + ρgh acts equally in all directions on a small fluid parcel.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <rect x="150" y="30" width="300" height="180" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
          <line x1="150" y1="70" x2="450" y2="70" stroke="#0284c7" stroke-width="2" stroke-dasharray="6 4"/>
          <text x="300" y="55" font-size="12" fill="#0369a1" font-weight="bold" text-anchor="middle">Free Liquid Surface (Atmospheric Pressure P₀)</text>
          <!-- Element at depth h -->
          <circle cx="300" cy="150" r="22" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
          <!-- Arrows pointing inwards -->
          <path d="M 300 115 L 300 125" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow)"/>
          <path d="M 300 185 L 300 175" stroke="#0f172a" stroke-width="2"/>
          <path d="M 265 150 L 275 150" stroke="#0f172a" stroke-width="2"/>
          <path d="M 335 150 L 325 150" stroke="#0f172a" stroke-width="2"/>
          <text x="300" y="154" font-size="11" fill="#0f172a" font-weight="extrabold" text-anchor="middle">P</text>
          <!-- Depth h dimension -->
          <line x1="120" y1="70" x2="120" y2="150" stroke="#0284c7" stroke-width="1.5"/>
          <text x="105" y="115" font-size="12" fill="#0284c7" font-weight="bold">h</text>
          <text x="300" y="225" font-size="12" fill="#0f172a" font-weight="bold" text-anchor="middle">Pressure P = P₀ + ρgh (Isotropic at depth h)</text>
        </svg>`
      }
    },
    {
      heading: '2. Pressure Variation with Depth & Hydrostatic Paradox',
      paragraphs: [
        'DERIVATION OF HYDROSTATIC PRESSURE FORMULA:',
        'Consider a vertical cylindrical fluid element of cross-sectional area A and height h in a static fluid of uniform density ρ.',
        'Forces acting in vertical equilibrium:',
        '1. Downward force on top face: F₁ = P₁ A (at depth y₁)',
        '2. Upward force on bottom face: F₂ = P₂ A (at depth y₂ = y₁ + h)',
        '3. Downward weight of fluid element: W = mg = (A h ρ) g',
        'For vertical equilibrium: F₂ = F₁ + W  ⇒  P₂ A = P₁ A + A h ρ g',
        'Dividing by area A: P₂ - P₁ = ρ g h.',
        'If top face is at the free surface exposed to atmosphere (P₁ = P₀), then absolute pressure at depth h is:',
        'P = P₀ + ρ g h',
        'GAUGE PRESSURE VS ABSOLUTE PRESSURE:',
        '• Absolute Pressure (P): Total pressure including atmospheric pressure.',
        '• Gauge Pressure (P_gauge): Excess pressure above atmospheric pressure: P_gauge = P - P₀ = ρ g h.',
        'HYDROSTATIC PARADOX:',
        'Liquid pressure depends ONLY on vertical depth h and fluid density ρ, NOT on the shape, total volume, or total weight of liquid in the container! Thus, in interconnected vessels of different shapes filled with the same liquid, the liquid rises to the exact same vertical height in all vessels.'
      ]
    },
    {
      heading: '3. Pascal\'s Law & Hydraulic Machinery Applications',
      paragraphs: [
        'STATEMENT OF PASCAL\'S LAW:',
        'If gravity is neglected (or at the same horizontal level), pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and to the walls of the containing vessel.',
        'WORKING OF HYDRAULIC LIFT / PRESS:',
        'A hydraulic lift consists of two interconnected vertical cylinders filled with fluid, fitted with pistons of cross-sectional areas A₁ (smaller) and A₂ (larger).',
        'When a small downward force F₁ is applied to the smaller piston:',
        'Pressure generated P = F₁ / A₁.',
        'By Pascal\'s law, this exact pressure P is transmitted to the larger piston of area A₂.',
        'Upward force produced on larger piston: F₂ = P · A₂ = F₁ · (A₂ / A₁).',
        'Since A₂ >> A₁, the output force F₂ is much greater than input force F₁ (Force Multiplier!).',
        'CONSERVATION OF WORK / ENERGY:',
        'Liquid is incompressible, so volume displaced by small piston equals volume entering large piston: A₁ d₁ = A₂ d₂  ⇒  d₂ = d₁ (A₁ / A₂).',
        'Work done W₂ = F₂ d₂ = [F₁ (A₂/A₁)] · [d₁ (A₁/A₂)] = F₁ d₁ = W₁.',
        'Thus, force is multiplied, but total mechanical work done remains conserved!'
      ],
      visual: {
        caption: 'Hydraulic Lift Principle: Small force F₁ on area A₁ generates magnified force F₂ = F₁ (A₂/A₁) on area A₂.',
        guide: 'Pressure P = F₁/A₁ = F₂/A₂ is transmitted equally across the fluid.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <!-- Fluid reservoir -->
          <path d="M 120 70 L 120 180 L 480 180 L 480 50 L 360 50 L 360 140 L 240 140 L 240 70 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="3"/>
          <!-- Small piston -->
          <rect x="122" y="75" width="116" height="18" fill="#475569" rx="3"/>
          <path d="M 180 30 L 180 75" stroke="#dc2626" stroke-width="4" marker-end="url(#arrow)"/>
          <text x="180" y="22" font-size="13" fill="#dc2626" font-weight="extrabold" text-anchor="middle">Input Force F₁</text>
          <text x="180" y="110" font-size="11" fill="#0369a1" font-weight="bold" text-anchor="middle">Area A₁</text>
          <!-- Large piston -->
          <rect x="362" y="55" width="116" height="22" fill="#475569" rx="3"/>
          <path d="M 420 55 L 420 15" stroke="#16a34a" stroke-width="4" marker-end="url(#arrow)"/>
          <text x="420" y="10" font-size="13" fill="#16a34a" font-weight="extrabold" text-anchor="middle">Output Load F₂ = F₁(A₂/A₁)</text>
          <text x="420" y="100" font-size="11" fill="#0369a1" font-weight="bold" text-anchor="middle">Area A₂ (A₂ >> A₁)</text>
          <text x="300" y="215" font-size="12" fill="#0f172a" font-weight="bold" text-anchor="middle">Pascal's Principle: Pressure P = F₁/A₁ = F₂/A₂ (Work W₁ = W₂)</text>
        </svg>`
      }
    },
    {
      heading: '4. Atmospheric Pressure, Barometer & U-Tube Manometer',
      paragraphs: [
        'MERCURY BAROMETER (TORRICELLI BAROMETER):',
        'A long glass tube sealed at one end is filled with mercury and inverted into a mercury trough.',
        'The mercury column drops until hydrostatic pressure at base equals atmospheric pressure P₀:',
        'P₀ = ρ_Hg g h',
        'At standard atmospheric pressure: h = 76 cm = 0.76 m of Hg. Given ρ_Hg = 13600 kg/m³ and g = 9.8 m/s²:',
        'P₀ = (13600)(9.8)(0.76) = 1.013 × 10⁵ Pa.',
        'Vacuum space above mercury column is called Torricellian Vacuum (contains negligible mercury vapor pressure ~0.0015 mmHg).',
        'OPEN-TUBE U-MANOMETER:',
        'Used to measure gauge pressure of a gas container.',
        'One arm is connected to the gas container (pressure P), and the other arm is open to atmosphere (P₀).',
        'If liquid level difference between two arms is h:',
        'P = P₀ + ρ_liquid g h  ⇒  P_gauge = P - P₀ = ρ_liquid g h.',
        'U-TUBE WITH IMMISCIBLE LIQUIDS:',
        'When two immiscible liquids of densities ρ₁ and ρ₂ are poured into a U-tube, at the horizontal level separating interface: ρ₁ h₁ = ρ₂ h₂.'
      ]
    },
    {
      heading: '5. Archimedes\' Principle, Buoyancy & Laws of Flotation',
      paragraphs: [
        'ARCHIMEDES\' PRINCIPLE:',
        'When a body is partially or fully submerged in a fluid at rest, it experiences an upward buoyant force (Upthrust F_B) equal to the weight of the fluid displaced by the body.',
        'F_B = Weight of displaced fluid = m_fluid g = V_submerged · ρ_fluid · g',
        'APPARENT WEIGHT IN FLUID:',
        'When a solid of mass m, volume V, and density ρ_s is submerged in a fluid of density ρ_f:',
        'Actual Weight W = V · ρ_s · g',
        'Buoyant Force F_B = V · ρ_f · g',
        'Apparent Weight W_app = W - F_B = V g (ρ_s - ρ_f) = W (1 - ρ_f / ρ_s)',
        'LAW OF FLOTATION:',
        'For a body floating in equilibrium in a liquid:',
        'Weight of floating body = Buoyant force = Weight of liquid displaced by submerged part.',
        'V_total · ρ_body · g = V_submerged · ρ_liquid · g',
        'Fraction of submerged volume: V_submerged / V_total = ρ_body / ρ_liquid',
        'Fraction of volume above liquid surface: V_above / V_total = 1 - (ρ_body / ρ_liquid) = (ρ_liquid - ρ_body) / ρ_liquid',
        'CONDITIONS FOR EQUILIBRIUM:',
        '1. If ρ_body > ρ_liquid: Body sinks to bottom (Apparent weight > 0).',
        '2. If ρ_body = ρ_liquid: Body remains in neutral equilibrium fully submerged anywhere in liquid.',
        '3. If ρ_body < ρ_liquid: Body floats partially submerged with fraction (ρ_body / ρ_liquid) below surface.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Fluid Pressure',
      formula: 'P = \\frac{F_{\\perp}}{A}',
      variables: 'P = Pressure (Pa), F_⊥ = Normal Force / Thrust (N), A = Area (m²)'
    },
    {
      title: 'Hydrostatic Pressure at Depth h',
      formula: 'P = P_0 + \\rho g h',
      variables: 'P = Absolute Pressure at depth h (Pa), P₀ = Atmospheric Pressure (1.013×10⁵ Pa), ρ = Fluid Density (kg/m³), g = 9.8 m/s²'
    },
    {
      title: 'Gauge Pressure',
      formula: 'P_{\\text{gauge}} = P - P_0 = \\rho g h',
      variables: 'P_gauge = Gauge Pressure (Pa), ρ = Fluid Density, h = Vertical Depth'
    },
    {
      title: 'Pascal\'s Law (Hydraulic Machine)',
      formula: '\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\left(\\frac{A_2}{A_1}\\right)',
      variables: 'F₁, F₂ = Input & Output Forces, A₁, A₂ = Piston Cross-sectional Areas'
    },
    {
      title: 'Barometer Equation',
      formula: 'P_0 = \\rho_{\\text{Hg}} g h',
      variables: 'P₀ = Atmospheric Pressure, ρ_Hg = Density of Mercury (13600 kg/m³), h = Column Height (0.76 m)'
    },
    {
      title: 'Buoyant Force (Upthrust)',
      formula: 'F_B = V_{\\text{sub}} \\cdot \\rho_{\\text{fluid}} \\cdot g',
      variables: 'F_B = Upthrust (N), V_sub = Submerged Volume (m³), ρ_fluid = Density of Fluid (kg/m³)'
    },
    {
      title: 'Apparent Weight in Liquid',
      formula: 'W_{\\text{app}} = W \\left(1 - \\frac{\\rho_{\\text{fluid}}}{\\rho_{\\text{body}}}\\right)',
      variables: 'W_app = Apparent Weight (N), W = Actual Weight in air, ρ_fluid = Liquid Density, ρ_body = Solid Density'
    },
    {
      title: 'Flotation Submerged Fraction',
      formula: '\\frac{V_{\\text{sub}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{body}}}{\\rho_{\\text{fluid}}}',
      variables: 'V_sub = Submerged Volume, V_total = Total Body Volume, ρ_body = Density of Body, ρ_fluid = Liquid Density'
    }
  ],

  neetImportantPoints: [
    'Fluid pressure at rest is strictly perpendicular (normal) to any contacting surface. A static fluid CANNOT exert parallel/tangential shearing force.',
    'Pressure is a SCALAR quantity, not a vector! Thrust force F = P A is a vector directed normal to the surface.',
    'Pressure depends ONLY on vertical depth h, NOT on total liquid volume, container shape, or surface area (Hydrostatic Paradox).',
    'Gauge pressure can be positive, zero, or negative (suction/vacuum), whereas absolute pressure MUST always be positive.',
    'Hydraulic machines multiply FORCE (F₂ = F₁ A₂/A₁), but DO NOT multiply WORK or ENERGY (Work in = Work out).',
    'Buoyant force F_B depends on the volume of DISPLACED fluid and density of FLUID (ρ_f), NOT on the weight or density of the submerged object.',
    'When a body floats in water, its apparent weight is EXACTLY ZERO because Upthrust F_B = Actual Weight W.',
    'When a block of ice floating in water inside a beaker melts completely, the water level in the beaker remains UNCHANGED! (V_ice · ρ_ice = V_melted_water · ρ_water).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing Fluid Pressure with Force/Thrust, treating pressure as a vector.',
      correctFact: 'Pressure P is a scalar quantity equal in all directions at a point. Thrust F = P A is a vector perpendicular to the surface.',
      whyItMattersForNEET: 'Direct conceptual questions in NEET test whether pressure has a vector direction.'
    },
    {
      commonConfusion: 'Assuming gauge pressure cannot be negative.',
      correctFact: 'Gauge pressure P_gauge = P - P₀ is negative whenever absolute pressure P is less than atmospheric pressure P₀ (vacuum/suction).',
      whyItMattersForNEET: 'Crucial for medical manometer problems, lung inspiration mechanics, and siphon calculations.'
    },
    {
      commonConfusion: 'Thinking buoyant force depends on the mass or density of the submerged object.',
      correctFact: 'Buoyant force F_B = V_sub · ρ_fluid · g depends ONLY on the fluid density ρ_fluid and displaced volume V_sub. Two spheres of equal volume (one lead, one wood) submerged in water experience the EXACT same buoyant force!',
      whyItMattersForNEET: 'Frequent NEET trap where lead and aluminum spheres of equal volume are submerged.'
    },
    {
      commonConfusion: 'Assuming hydraulic lift creates extra energy because F₂ > F₁.',
      correctFact: 'Force increases by ratio A₂/A₁, but displacement decreases by ratio A₁/A₂. Total work done W = F · d remains constant.',
      whyItMattersForNEET: 'Tested in assertion-reason and energy conservation questions.'
    }
  ],

  quickRevision: [
    'Pressure P = F_normal / A [Pa, N/m², M L⁻¹ T⁻²] | 1 atm = 1.013 × 10⁵ Pa = 760 mmHg',
    'Absolute Pressure at depth h: P = P₀ + ρgh | Gauge Pressure P_gauge = ρgh',
    'Pascal\'s Law: F₁/A₁ = F₂/A₂ (Force multiplier, Work conserved: F₁d₁ = F₂d₂)',
    'Barometer: P₀ = ρ_Hg g h (h = 76 cm of Hg) | U-tube manometer: P_gauge = ρgh',
    'Archimedes\' Principle: Upthrust F_B = V_sub · ρ_fluid · g',
    'Apparent Weight W_app = W (1 - ρ_fluid / ρ_body)',
    'Law of Flotation: Submerged Fraction V_sub/V_total = ρ_body / ρ_fluid',
    'Ice melting in water beaker: Water level remains unchanged.'
  ],

  practiceQuestions: [
  {
    "id": "pq-fluid-pressure-1",
    "question": "A hydraulic automobile lift is designed to lift cars with a maximum mass of 3000 kg. The area of cross-section of the piston carrying the load is 425 cm². What maximum pressure would the smaller piston have to bear?",
    "options": [
      "6.92 × 10⁵ Pa",
      "1.25 × 10⁵ Pa",
      "3.45 × 10⁴ Pa",
      "9.80 × 10⁵ Pa"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Pascal's Law & Hydraulic Pressure Calculation",
    "explanation": "Maximum load on larger piston F₂ = m g = 3000 kg × 9.8 m/s² = 29400 N.\nArea of larger piston A₂ = 425 cm² = 425 × 10⁻⁴ m² = 0.0425 m².\nBy Pascal's law, pressure transmitted across fluid is uniform.\nPressure P = F₂ / A₂ = 29400 N / 0.0425 m² = 6.917 × 10⁵ Pa ≈ 6.92 × 10⁵ Pa."
  },
  {
    "id": "pq-fluid-pressure-2",
    "question": "A U-tube contains water and methylated spirit separated by mercury. The mercury columns in the two arms are at the same level with 10 cm of water in one arm and 12.5 cm of spirit in the other. The relative density of spirit is:",
    "options": [
      "0.8",
      "1.25",
      "0.75",
      "0.9"
    ],
    "correctAnswer": 0,
    "difficulty": "Easy",
    "conceptTested": "U-Tube Hydrostatic Equilibrium",
    "explanation": "At the mercury interface level, pressures in both arms must be equal.\nPressure due to water column = Pressure due to spirit column\nρ_water · g · h_water = ρ_spirit · g · h_spirit\nρ_spirit / ρ_water = h_water / h_spirit = 10 cm / 12.5 cm = 0.8.\nRelative density of spirit = 0.8."
  },
  {
    "id": "pq-fluid-pressure-3",
    "question": "A solid body of mass 600 g and density 1.2 g/cm³ is completely immersed in a liquid of density 0.8 g/cm³. The apparent weight of the body in the liquid is (g = 10 m/s²):",
    "options": [
      "2 N",
      "4 N",
      "6 N",
      "1.5 N"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Apparent Weight in Fluid Formula",
    "explanation": "Actual Weight W = m g = 0.6 kg × 10 m/s² = 6 N.\nApparent Weight W_app = W (1 - ρ_fluid / ρ_body)\nGiven ρ_fluid = 0.8 g/cm³ and ρ_body = 1.2 g/cm³:\nW_app = 6 N × (1 - 0.8 / 1.2) = 6 N × (1 - 2/3) = 6 N × (1/3) = 2 N."
  },
  {
    "id": "pq-fluid-pressure-4",
    "question": "A piece of ice floating in a beaker filled with water melts completely. The level of water in the beaker will:",
    "options": [
      "Remain unchanged",
      "Rise",
      "Fall",
      "First rise then fall"
    ],
    "correctAnswer": 0,
    "difficulty": "Easy",
    "conceptTested": "Archimedes' Principle & Flotation of Ice",
    "explanation": "For a floating ice block of mass m: Weight = Upthrust ⇒ m g = V_displaced · ρ_water · g ⇒ V_displaced = m / ρ_water.\nWhen the ice melts completely, it becomes water of mass m.\nVolume of melted water formed = m / ρ_water.\nSince volume of melted water EXACTLY equals the initial volume of displaced water, the water level remains UNCHANGED."
  },
  {
    "id": "prac-physfluidpressure-5",
    "question": "Regarding Fluid Pressure, which of the following statements correctly resolves a common misconception about \"Confusing Fluid Pressure with Force/Thrust, treating pressure as a vector.\"?",
    "options": [
      "Pressure P is a scalar quantity equal in all directions at a point. Thrust F = P A is a vector perpendicular to the surface.",
      "Incorrect assumption: Confusing Fluid Pressure with Force/Thrust, treating pressure as a vector.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Pressure P is a scalar quantity equal in all directions at a point. Thrust F = P A is a vector perpendicular to the surface.. Direct conceptual questions in NEET test whether pressure has a vector direction.",
    "difficulty": "Medium",
    "conceptTested": "Fluid Pressure - Conceptual Clarity"
  },
  {
    "id": "prac-physfluidpressure-6",
    "question": "Regarding Fluid Pressure, which of the following statements correctly resolves a common misconception about \"Assuming gauge pressure cannot be negative.\"?",
    "options": [
      "Gauge pressure P_gauge = P - P₀ is negative whenever absolute pressure P is less than atmospheric pressure P₀ (vacuum/suction).",
      "Incorrect assumption: Assuming gauge pressure cannot be negative.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Gauge pressure P_gauge = P - P₀ is negative whenever absolute pressure P is less than atmospheric pressure P₀ (vacuum/suction).. Crucial for medical manometer problems, lung inspiration mechanics, and siphon calculations.",
    "difficulty": "Medium",
    "conceptTested": "Fluid Pressure - Conceptual Clarity"
  },
  {
    "id": "prac-physfluidpressure-7",
    "question": "Regarding Fluid Pressure, which of the following statements correctly resolves a common misconception about \"Thinking buoyant force depends on the mass or density of the submerged object.\"?",
    "options": [
      "Buoyant force F_B = V_sub · ρ_fluid · g depends ONLY on the fluid density ρ_fluid and displaced volume V_sub. Two spheres of equal volume (one lead, one wood) submerged in water experience the EXACT same buoyant force!",
      "Incorrect assumption: Thinking buoyant force depends on the mass or density of the submerged object.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Buoyant force F_B = V_sub · ρ_fluid · g depends ONLY on the fluid density ρ_fluid and displaced volume V_sub. Two spheres of equal volume (one lead, one wood) submerged in water experience the EXACT same buoyant force!. Frequent NEET trap where lead and aluminum spheres of equal volume are submerged.",
    "difficulty": "Medium",
    "conceptTested": "Fluid Pressure - Conceptual Clarity"
  },
  {
    "id": "prac-physfluidpressure-8",
    "question": "Regarding Fluid Pressure, which of the following statements correctly resolves a common misconception about \"Assuming hydraulic lift creates extra energy because F₂ > F₁.\"?",
    "options": [
      "Force increases by ratio A₂/A₁, but displacement decreases by ratio A₁/A₂. Total work done W = F · d remains constant.",
      "Incorrect assumption: Assuming hydraulic lift creates extra energy because F₂ > F₁.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Force increases by ratio A₂/A₁, but displacement decreases by ratio A₁/A₂. Total work done W = F · d remains constant.. Tested in assertion-reason and energy conservation questions.",
    "difficulty": "Medium",
    "conceptTested": "Fluid Pressure - Conceptual Clarity"
  },
  {
    "id": "prac-physfluidpressure-9",
    "question": "In the study of Fluid Pressure, what is the exact definition and significance of \"Fluid Thrust\"?",
    "options": [
      "The total force exerted by a static fluid perpendicular to any surface in contact with it. Unit: Newton (N).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The total force exerted by a static fluid perpendicular to any surface in contact with it. Unit: Newton (N).. ",
    "difficulty": "Easy",
    "conceptTested": "Fluid Thrust definition"
  },
  {
    "id": "prac-physfluidpressure-10",
    "question": "In the study of Fluid Pressure, what is the exact definition and significance of \"Fluid Pressure (P)\"?",
    "options": [
      "The normal force exerted per unit cross-sectional area: P = dF / dA. SI Unit: Pascal (Pa) or N/m². Dimensions: [M L⁻¹ T⁻²].",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The normal force exerted per unit cross-sectional area: P = dF / dA. SI Unit: Pascal (Pa) or N/m². Dimensions: [M L⁻¹ T⁻²].. ",
    "difficulty": "Easy",
    "conceptTested": "Fluid Pressure (P) definition"
  }
],
  pyqs: [
    {
      id: 'pyq-fluid-pressure-1',
      year: 2021,
      exam: 'NEET UG',
      question: 'A neck and bottom of a bottle have diameters 2 cm and 10 cm respectively. The bottle is completely filled with oil. If a force of 1.2 N is applied at the neck piston, the force exerted on the bottom is:',
      options: [
        '30 N',
        '15 N',
        '300 N',
        '3000 N'
      ],
      correctAnswer: 0,
      difficulty: 'Medium',
      conceptTested: 'Pascal\'s Law (Force Multiplier in Hydraulic System)',
      explanation: 'By Pascal\'s Law: P_neck = P_bottom ⇒ F_neck / A_neck = F_bottom / A_bottom.\nArea A = π d² / 4 ⇒ Ratio A_bottom / A_neck = (d_bottom / d_neck)² = (10 cm / 2 cm)² = 5² = 25.\nForce on bottom F_bottom = F_neck × (A_bottom / A_neck) = 1.2 N × 25 = 30 N.',
      topicId: 'phys-fluid-pressure',
      verified: true
    },
    {
      id: 'pyq-fluid-pressure-2',
      year: 2020,
      exam: 'NEET UG',
      question: 'Two small spherical balls of radii r and 2r are made of materials of densities ρ and 2ρ respectively. If they are dropped into a liquid of density σ (where σ < ρ), the ratio of buoyant forces acting on them is:',
      options: [
        '1 : 8',
        '1 : 4',
        '1 : 2',
        '1 : 1'
      ],
      correctAnswer: 0,
      difficulty: 'Easy',
      conceptTested: 'Buoyant Force Dependence on Volume',
      explanation: 'Buoyant force F_B = V_submerged · σ_liquid · g = (4/3 π r³) · σ · g.\nF_B ∝ r³ (independent of sphere density ρ!).\nRatio F_B1 / F_B2 = (r₁ / r₂)³ = (r / 2r)³ = 1 / 8.\nTherefore, ratio of buoyant forces is 1 : 8.',
      topicId: 'phys-fluid-pressure',
      verified: true
    }
  ]
};
