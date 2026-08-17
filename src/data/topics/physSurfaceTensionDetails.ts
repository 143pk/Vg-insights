import { DetailedTopicContent } from '../../types/neet';

export const physSurfaceTensionDetails: DetailedTopicContent = {
  topicId: 'phys-surface-tension',
  topicName: 'Surface Tension',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Properties of Bulk Matter',
  chapter: 'Mechanical Properties of Fluids',

  whatIsThisTopic: 'Surface Tension is the elastic membrane-like property of liquid surfaces arising from unbalanced inward intermolecular cohesive forces. Because surface molecules possess higher potential energy than bulk molecules, liquids naturally contract to minimize their surface area (forming spherical drops). This topic covers molecular theory, surface energy, work done in forming drops and soap bubbles, temperature/impurity dependencies, angle of contact, wetting, capillary rise/depression (Ascent formula), and excess pressure inside drops and bubbles.',

  basicIdea: [
    'Cohesive Force is the attraction between identical molecules (e.g. water-water). Adhesive Force is the attraction between unidentical molecules (e.g. water-glass).',
    'Surface Tension (T) is defined as force per unit length along an imaginary line drawn on the liquid surface: T = F / L. SI Unit: N/m or J/m². Dimensions: [M L⁰ T⁻²].',
    'Surface Energy (U) is the potential energy per unit surface area: Surface Energy = Work Done / Increase in Area = T. For liquid film with 2 surfaces (soap bubble), W = 2 T ΔA.',
    'Angle of Contact (θ) is the angle between the tangent to liquid surface and solid surface inside the liquid. Acute angle (θ < 90°) → liquid wets solid, concave meniscus. Obtuse angle (θ > 90°) → liquid does not wet solid, convex meniscus.',
    'Capillary Action: Liquid rises or falls in fine tubes due to surface tension. Capillary rise h = (2 T cosθ) / (ρ g r). In tube of insufficient length L < h, liquid rises to top L and increases contact angle so it NEVER overflows!',
    'Excess Pressure: Curved liquid interfaces create higher internal pressure. Inside liquid drop / air bubble in water: ΔP = 2T/R. Inside soap bubble in air (2 surfaces): ΔP = 4T/R.'
  ],

  importantTerms: [
    {
      term: 'Surface Tension (T)',
      definition: 'The property of liquid surfaces to behave like a stretched elastic membrane, contracting to minimum surface area. T = F / L. Unit: N/m or J/m².'
    },
    {
      term: 'Cohesive vs Adhesive Forces',
      definition: 'Cohesion: Intermolecular force between same liquid molecules. Adhesion: Intermolecular force between liquid and solid container molecules.'
    },
    {
      term: 'Surface Energy (U)',
      definition: 'The extra potential energy possessed by surface molecules due to unsatisfied intermolecular bonds compared to bulk molecules: U = T · ΔA.'
    },
    {
      term: 'Angle of Contact (θ)',
      definition: 'The angle made by the tangent to the liquid surface at the line of contact with the solid surface inside the liquid.'
    },
    {
      term: 'Capillarity',
      definition: 'The phenomenon of elevation (rise) or depression (fall) of a liquid surface in a tube of fine bore (capillary tube) immersed in the liquid.'
    },
    {
      term: 'Excess Pressure (ΔP)',
      definition: 'The pressure difference P_inside - P_outside across a curved liquid surface, directed towards the concave side of the surface.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Molecular Theory of Surface Tension & Surface Energy',
      paragraphs: [
        'MOLECULAR ORIGIN:',
        'Consider two liquid molecules:',
        '1. Molecule A in Bulk Liquid: Surrounded equally by neighboring molecules in all directions. Net intermolecular cohesive force is ZERO.',
        '2. Molecule B on Liquid Surface: Has liquid molecules below and beside it, but none above. It experiences a net INWARD cohesive force pulling it towards the liquid bulk.',
        'SURFACE ENERGY FORMULA:',
        'To bring a molecule from bulk to surface, work must be done against inward cohesive forces. This work is stored as excess Surface Potential Energy.',
        '• Work Done in increasing surface area by ΔA:',
        'W = T · ΔA (for single liquid surface, e.g., water drop / air bubble in liquid)',
        'W = 2 T · ΔA (for double surface liquid film, e.g., soap bubble in air!)',
        'WORK DONE IN FORMING / BLOWING DROPS & BUBBLES:',
        '1. Liquid Drop of radius R (1 free surface): W = T (4 π R²).',
        '2. Soap Bubble of radius R (2 free surfaces): W = 2 T (4 π R²) = 8 π T R².',
        '3. Expanding a Soap Bubble from radius R₁ to R₂:',
        'W = 8 π T (R₂² - R₁²).',
        'SPLITTING BIG DROP INTO n SMALL DROPLETS:',
        'Volume conserved: (4/3 π R³) = n (4/3 π r³)  ⇒  r = R / n^(1/3).',
        'Work required to split drop: W = 4 π T R² [ n^(1/3) - 1 ].',
        'COALESCENCE OF DROPLETS (RELEASE OF HEAT):',
        'When n droplets combine into one big drop, surface area decreases, releasing energy ΔU = 4 π T R² [ n^(1/3) - 1 ], causing liquid temperature to rise!'
      ],
      visual: {
        caption: 'Molecular Origin of Surface Tension: Bulk molecule experiences zero net force; surface molecule experiences net inward cohesive pull.',
        guide: 'Unbalanced cohesive pull creates surface energy and elastic membrane tension T = F/L.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <rect x="100" y="40" width="400" height="150" rx="8" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <line x1="100" y1="70" x2="500" y2="70" stroke="#0284c7" stroke-width="2" stroke-dasharray="4 4"/>
          <!-- Bulk Molecule A -->
          <circle cx="200" cy="130" r="12" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
          <text x="200" y="134" font-size="10" fill="#0f172a" font-weight="extrabold" text-anchor="middle">A</text>
          <!-- Arrows in all directions -->
          <path d="M 200 110 L 200 118 M 200 150 L 200 142 M 180 130 L 188 130 M 220 130 L 212 130" stroke="#0f172a" stroke-width="2"/>
          <text x="200" y="170" font-size="11" fill="#0369a1" font-weight="bold" text-anchor="middle">Bulk: Net Force = 0</text>
          <!-- Surface Molecule B -->
          <circle cx="380" cy="70" r="12" fill="#38bdf8" stroke="#dc2626" stroke-width="2"/>
          <text x="380" y="74" font-size="10" fill="#0f172a" font-weight="extrabold" text-anchor="middle">B</text>
          <!-- Inward pull arrow down -->
          <path d="M 380 82 L 380 115" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow)"/>
          <text x="380" y="140" font-size="11" fill="#dc2626" font-weight="bold" text-anchor="middle">Surface: Net Inward Cohesive Pull!</text>
          <text x="300" y="205" font-size="12" fill="#0f172a" font-weight="bold" text-anchor="middle">Surface Tension T = F/L (Surface Energy U = T · ΔA)</text>
        </svg>`
      }
    },
    {
      heading: '2. Factors Affecting Surface Tension (Temperature & Impurities)',
      paragraphs: [
        'EFFECT OF TEMPERATURE:',
        'As temperature increases, thermal kinetic energy increases, weakening intermolecular cohesive forces.',
        '• Surface tension DECREASES continuously with rising temperature.',
        '• At Critical Temperature T_c, surface tension becomes EXACTLY ZERO!',
        'EFFECT OF IMPURITIES:',
        '1. Highly Soluble Impurities (e.g. NaCl, sugar in water): Increase intermolecular cohesive attraction ⇒ Surface tension INCREASES.',
        '2. Sparingly Soluble Impurities (e.g. phenol, alcohol in water): Weakens cohesive bonds ⇒ Surface tension DECREASES.',
        '3. Detergents & Soaps: Highly active surface-tension reducers! Adding soap/detergent drastically reduces surface tension of water, allowing it to penetrate dirt particles easily.'
      ]
    },
    {
      heading: '3. Angle of Contact (θ), Wetting & Meniscus Shape',
      paragraphs: [
        'ANGLE OF CONTACT DEFINITION:',
        'The angle θ between the tangent to liquid surface and solid surface inside liquid at line of contact.',
        'DEPENDENCE ON ADHESIVE VS COHESIVE FORCES:',
        '• Case 1: Strong Adhesion (F_adhesion > F_cohesion / √2):',
        'Liquid wets solid wall. Angle of contact θ < 90° (Acute angle). Meniscus is CONCAVE (e.g., water-glass, θ ≈ 8° for normal water, θ = 0° for pure water and clean glass).',
        '• Case 2: Strong Cohesion (F_cohesion > √2 F_adhesion):',
        'Liquid does NOT wet solid wall. Angle of contact θ > 90° (Obtuse angle). Meniscus is CONVEX (e.g., mercury-glass, θ ≈ 135° to 140°).',
        '• Case 3: Silver-Water Interface:',
        'Adhesive and cohesive forces balance such that θ = 90° (Plane flat meniscus).'
      ]
    },
    {
      heading: '4. Capillary Action & Ascent Formula',
      paragraphs: [
        'CAPILLARY RISE DERIVATION (ASCENT FORMULA):',
        'When a glass capillary tube of radius r is dipped vertically into a liquid of density ρ and surface tension T with contact angle θ:',
        'Vertical upward force due to surface tension along circumference = (2 π r T) cosθ.',
        'Downward weight of raised liquid column = m g = (π r² h ρ) g.',
        'In vertical equilibrium:',
        '2 π r T cosθ = π r² h ρ g',
        'CAPILLARY ASCENT FORMULA:',
        'h = (2 T cosθ) / (ρ g r)',
        'KEY RELATIONSHIPS FOR NEET:',
        '1. Inverse Radius Law (Jurin\'s Law): h · r = (2 T cosθ) / (ρ g) = constant. Narrower capillary tube produces GREATER rise h!',
        '2. Capillary Rise vs Depression:',
        '• For θ < 90° (concave, cosθ > 0): Liquid RISES (h > 0).',
        '• For θ > 90° (convex, cosθ < 0): Liquid FALLS / Depresses (h < 0, e.g. Mercury).',
        'TUBE OF INSUFFICIENT LENGTH L < h:',
        'If capillary tube height L is less than calculated rise h:',
        'Liquid rises up to top edge L, then increases its radius of curvature R\' and angle of contact θ\' such that L · cosθ\' = h · cosθ.',
        'The liquid NEVER overflows out of the top of the tube!'
      ],
      visual: {
        caption: 'Capillary Action & Excess Pressure: Water rises in narrow tube with concave meniscus (θ < 90°); Mercury depresses with convex meniscus (θ > 90°).',
        guide: 'Ascent formula h = (2T cosθ)/(ρgr). Jurin\'s law: h · r = constant.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <!-- Water Capillary Rise -->
          <rect x="80" y="100" width="180" height="110" rx="4" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <rect x="155" y="40" width="30" height="160" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
          <path d="M 155 70 Q 170 82 185 70 L 185 200 L 155 200 Z" fill="#bae6fd"/>
          <text x="170" y="30" font-size="12" fill="#0284c7" font-weight="bold" text-anchor="middle">Water (Rise h > 0, θ < 90°)</text>
          <!-- Mercury Capillary Depression -->
          <rect x="340" y="100" width="180" height="110" rx="4" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
          <rect x="415" y="40" width="30" height="160" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
          <path d="M 415 130 Q 430 118 445 130 L 445 200 L 415 200 Z" fill="#cbd5e1"/>
          <text x="430" y="30" font-size="12" fill="#475569" font-weight="bold" text-anchor="middle">Mercury (Fall h < 0, θ > 90°)</text>
          <text x="300" y="225" font-size="12" fill="#0f172a" font-weight="bold" text-anchor="middle">Ascent Formula: h = (2T cosθ) / (ρgr)  ⇒  h · r = constant</text>
        </svg>`
      }
    },
    {
      heading: '5. Excess Pressure Inside Drops, Bubbles & Coalescence',
      paragraphs: [
        'EXCESS PRESSURE FORMULAS:',
        'Pressure on the concave side of a curved surface is always GREATER than pressure on the convex side.',
        '1. Liquid Drop / Air Bubble in Liquid (1 surface): ΔP = P_in - P_out = 2 T / R',
        '2. Soap Bubble in Air (2 free surfaces): ΔP = P_in - P_out = 4 T / R',
        'KEY DEDUCTIONS FOR NEET:',
        '• Excess pressure is inversely proportional to radius (ΔP ∝ 1/R). Smaller bubbles have HIGHER internal pressure!',
        '• If a small soap bubble (R₁) is connected by a tube to a large soap bubble (R₂), air flows from SMALL bubble (high P) to LARGE bubble (low P), causing small bubble to shrink and large bubble to grow larger!',
        'ISOTHERMAL COALESCENCE OF SOAP BUBBLES:',
        'When two soap bubbles of radii R₁ and R₂ coalesce in vacuum under isothermal conditions to form a single soap bubble of radius R:',
        'R² = R₁² + R₂²',
        'If two bubbles combine forming a common internal interface film of radius R_int:',
        '1 / R_int = 1 / R₁ - 1 / R₂   ⇒   R_int = (R₁ R₂) / (R₂ - R₁)'
      ]
    }
  ],

  formulae: [
    {
      title: 'Surface Tension Definition',
      formula: 'T = \\frac{F}{L}',
      variables: 'T = Surface Tension (N/m or J/m²), F = Force (N), L = Length along line (m)'
    },
    {
      title: 'Work Done in Forming / Expanding Soap Bubble',
      formula: 'W = 8 \\pi T R^2 \\quad (\\text{Expanding: } W = 8 \\pi T (R_2^2 - R_1^2))',
      variables: 'W = Work Done (J), T = Surface tension, R = Bubble radius (2 surfaces)'
    },
    {
      title: 'Work Done in Splitting Drop into n Droplets',
      formula: 'W = 4 \\pi T R^2 \\left( n^{1/3} - 1 \\right)',
      variables: 'R = Radius of original big drop, n = Number of identical small droplets formed'
    },
    {
      title: 'Excess Pressure in Liquid Drop / Air Bubble',
      formula: '\\Delta P = \\frac{2 T}{R}',
      variables: 'ΔP = P_in - P_out (Pa), T = Surface tension, R = Drop radius (1 surface)'
    },
    {
      title: 'Excess Pressure in Soap Bubble in Air',
      formula: '\\Delta P = \\frac{4 T}{R}',
      variables: 'ΔP = Excess pressure inside soap bubble (2 surfaces)'
    },
    {
      title: 'Capillary Ascent Formula',
      formula: 'h = \\frac{2 T \\cos\\theta}{\\rho g r}',
      variables: 'h = Capillary rise (m), T = Surface tension, θ = Angle of contact, ρ = Density, r = Tube radius'
    },
    {
      title: 'Common Interface Radius of Coalescing Soap Bubbles',
      formula: 'R_{\\text{int}} = \\frac{R_1 R_2}{R_2 - R_1}',
      variables: 'R_int = Radius of common interface film between two soap bubbles of radii R₁ and R₂'
    }
  ],

  neetImportantPoints: [
    'Surface tension decreases continuously with rising temperature and becomes ZERO at the critical temperature.',
    'Adding soap/detergent drastically REDUCES surface tension of water, lowering contact angle and aiding dirt removal.',
    'Work done in blowing a soap bubble of radius R in air is W = 8 π T R² (due to 2 free surfaces!), whereas for liquid drop W = 4 π T R².',
    'Excess pressure inside soap bubble ΔP = 4T/R. Smaller bubble has higher pressure than larger bubble!',
    'Capillary rise h is inversely proportional to tube radius r (Jurin\'s Law h · r = const).',
    'In a capillary tube of insufficient length L < h, liquid rises up to top L, flattens its meniscus (increases θ\'), but NEVER overflows!',
    'For pure water and clean glass, angle of contact θ = 0° (cosθ = 1). For mercury and glass, θ ≈ 135° (convex meniscus, depresses).',
    'When two soap bubbles coalesce isothermally in vacuum, R² = R₁² + R₂².'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Forgetting the factor of 2 for soap bubble surface area work calculations.',
      correctFact: 'A soap bubble in air has TWO free surfaces (inner and outer), so surface area is 2 × (4πR²) = 8πR². Work W = 8πTR². A liquid drop has only ONE surface (4πR²), so W = 4πTR².',
      whyItMattersForNEET: 'Single most frequent 2x calculation error in NEET surface energy questions.'
    },
    {
      commonConfusion: 'Thinking liquid will overflow out of an insufficient length capillary tube.',
      correctFact: 'Liquid will rise to the top height L, adjust its angle of contact to θ\' such that L cosθ\' = h cosθ, and remain at rest without overflowing.',
      whyItMattersForNEET: 'Classic conceptual assertion-reason question in NEET.'
    },
    {
      commonConfusion: 'Confusing excess pressure of liquid drop (2T/R) with soap bubble (4T/R).',
      correctFact: 'Liquid drop has 1 interface (ΔP = 2T/R). Soap bubble in air has 2 interfaces (ΔP = 4T/R).',
      whyItMattersForNEET: 'Direct formula substitution question.'
    },
    {
      commonConfusion: 'Assuming air flows from large soap bubble to small soap bubble when connected.',
      correctFact: 'Since ΔP = 4T/R, smaller bubble has HIGHER internal pressure. Air flows from SMALL bubble to LARGE bubble!',
      whyItMattersForNEET: 'Conceptual demonstration question in NEET.'
    }
  ],

  quickRevision: [
    'Surface Tension T = F/L = J/m² [M L⁰ T⁻²] | Decreases with Temp T ↑ (Zero at T_c)',
    'Soap / Detergent ↓ Surface Tension | NaCl / Sugar ↑ Surface Tension',
    'Work forming Drop: W = 4πTR² | Work blowing Soap Bubble: W = 8πTR²',
    'Splitting drop: W = 4πTR² (n^(1/3) - 1) | Coalescing droplets releases heat!',
    'Angle of Contact θ < 90° (Wets, Concave) | θ > 90° (Does not wet, Convex)',
    'Capillary Rise h = (2T cosθ) / (ρgr) | Jurin\'s Law h · r = constant',
    'Insufficient tube length L < h: Flatters meniscus, NEVER overflows!',
    'Excess Pressure: Drop ΔP = 2T/R | Soap Bubble ΔP = 4T/R | Air flows small → big bubble'
  ],

  practiceQuestions: [
  {
    "id": "pq-surface-tension-1",
    "question": "The work done in blowing a soap bubble of radius 10 cm in air is (Surface tension of soap solution T = 0.03 N/m):",
    "options": [
      "7.54 × 10⁻³ J",
      "3.77 × 10⁻³ J",
      "1.51 × 10⁻² J",
      "2.26 × 10⁻³ J"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Work Done Blowing Soap Bubble (W = 8πTR²)",
    "explanation": "A soap bubble in air has 2 free surfaces.\nFormula: W = 2 × T × (4 π R²) = 8 π T R².\nGiven T = 0.03 N/m, R = 10 cm = 0.1 m.\nW = 8 × 3.1416 × 0.03 × (0.1)² = 0.75398 × 10⁻² J ≈ 7.54 × 10⁻³ J."
  },
  {
    "id": "pq-surface-tension-2",
    "question": "A capillary tube of radius r is immersed in water and water rises in it to a height h. The mass of water in the capillary tube is m. If another capillary tube of radius 2r is immersed in water, the mass of water that will rise in this tube is:",
    "options": [
      "2m",
      "m",
      "m / 2",
      "4m"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Mass of Liquid Raised in Capillary Tube",
    "explanation": "Capillary rise h = (2 T cosθ) / (ρ g r)  ⇒  h ∝ 1 / r.\nMass of water column m = Volume × ρ = (π r² h) ρ = π r² [ (2 T cosθ) / (ρ g r) ] ρ = (2 π T cosθ / g) · r.\nThus, mass of liquid raised m is DIRECTLY proportional to radius r (m ∝ r)!\nWhen radius becomes 2r, mass raised becomes 2m."
  },
  {
    "id": "pq-surface-tension-3",
    "question": "Two soap bubbles of radii 3 cm and 4 cm combine in vacuum under isothermal conditions to form a single soap bubble. The radius of the new soap bubble is:",
    "options": [
      "5 cm",
      "7 cm",
      "3.5 cm",
      "2.4 cm"
    ],
    "correctAnswer": 0,
    "difficulty": "Easy",
    "conceptTested": "Isothermal Coalescence of Soap Bubbles R² = R₁² + R₂²",
    "explanation": "For isothermal coalescence of two soap bubbles in vacuum:\nR² = R₁² + R₂²\nR = √(3² + 4²) = √(9 + 16) = √25 = 5 cm."
  },
  {
    "id": "pq-surface-tension-4",
    "question": "Excess pressure inside a liquid drop of radius R is ΔP₁. Excess pressure inside a soap bubble of radius 2R is ΔP₂. The ratio ΔP₁ / ΔP₂ is:",
    "options": [
      "1 : 1",
      "2 : 1",
      "1 : 2",
      "4 : 1"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Excess Pressure Drop vs Soap Bubble",
    "explanation": "Excess pressure inside liquid drop (1 surface): ΔP₁ = 2 T / R.\nExcess pressure inside soap bubble (2 surfaces): ΔP₂ = 4 T / (2R) = 2 T / R.\nRatio ΔP₁ / ΔP₂ = (2 T / R) / (2 T / R) = 1 : 1."
  },
  {
    "id": "prac-physsurfacetension-5",
    "question": "Regarding Surface Tension, which of the following statements correctly resolves a common misconception about \"Forgetting the factor of 2 for soap bubble surface area work calculations.\"?",
    "options": [
      "A soap bubble in air has TWO free surfaces (inner and outer), so surface area is 2 × (4πR²) = 8πR². Work W = 8πTR². A liquid drop has only ONE surface (4πR²), so W = 4πTR².",
      "Incorrect assumption: Forgetting the factor of 2 for soap bubble surface area work calculations.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "A soap bubble in air has TWO free surfaces (inner and outer), so surface area is 2 × (4πR²) = 8πR². Work W = 8πTR². A liquid drop has only ONE surface (4πR²), so W = 4πTR².. Single most frequent 2x calculation error in NEET surface energy questions.",
    "difficulty": "Medium",
    "conceptTested": "Surface Tension - Conceptual Clarity"
  },
  {
    "id": "prac-physsurfacetension-6",
    "question": "Regarding Surface Tension, which of the following statements correctly resolves a common misconception about \"Thinking liquid will overflow out of an insufficient length capillary tube.\"?",
    "options": [
      "Liquid will rise to the top height L, adjust its angle of contact to θ' such that L cosθ' = h cosθ, and remain at rest without overflowing.",
      "Incorrect assumption: Thinking liquid will overflow out of an insufficient length capillary tube.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Liquid will rise to the top height L, adjust its angle of contact to θ' such that L cosθ' = h cosθ, and remain at rest without overflowing.. Classic conceptual assertion-reason question in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Surface Tension - Conceptual Clarity"
  },
  {
    "id": "prac-physsurfacetension-7",
    "question": "Regarding Surface Tension, which of the following statements correctly resolves a common misconception about \"Confusing excess pressure of liquid drop (2T/R) with soap bubble (4T/R).\"?",
    "options": [
      "Liquid drop has 1 interface (ΔP = 2T/R). Soap bubble in air has 2 interfaces (ΔP = 4T/R).",
      "Incorrect assumption: Confusing excess pressure of liquid drop (2T/R) with soap bubble (4T/R).",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Liquid drop has 1 interface (ΔP = 2T/R). Soap bubble in air has 2 interfaces (ΔP = 4T/R).. Direct formula substitution question.",
    "difficulty": "Medium",
    "conceptTested": "Surface Tension - Conceptual Clarity"
  },
  {
    "id": "prac-physsurfacetension-8",
    "question": "Regarding Surface Tension, which of the following statements correctly resolves a common misconception about \"Assuming air flows from large soap bubble to small soap bubble when connected.\"?",
    "options": [
      "Since ΔP = 4T/R, smaller bubble has HIGHER internal pressure. Air flows from SMALL bubble to LARGE bubble!",
      "Incorrect assumption: Assuming air flows from large soap bubble to small soap bubble when connected.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Since ΔP = 4T/R, smaller bubble has HIGHER internal pressure. Air flows from SMALL bubble to LARGE bubble!. Conceptual demonstration question in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Surface Tension - Conceptual Clarity"
  },
  {
    "id": "prac-physsurfacetension-9",
    "question": "In the study of Surface Tension, what is the exact definition and significance of \"Surface Tension (T)\"?",
    "options": [
      "The property of liquid surfaces to behave like a stretched elastic membrane, contracting to minimum surface area. T = F / L. Unit: N/m or J/m².",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The property of liquid surfaces to behave like a stretched elastic membrane, contracting to minimum surface area. T = F / L. Unit: N/m or J/m².. ",
    "difficulty": "Easy",
    "conceptTested": "Surface Tension (T) definition"
  },
  {
    "id": "prac-physsurfacetension-10",
    "question": "In the study of Surface Tension, what is the exact definition and significance of \"Cohesive vs Adhesive Forces\"?",
    "options": [
      "Cohesion: Intermolecular force between same liquid molecules. Adhesion: Intermolecular force between liquid and solid container molecules.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Cohesion: Intermolecular force between same liquid molecules. Adhesion: Intermolecular force between liquid and solid container molecules.. ",
    "difficulty": "Easy",
    "conceptTested": "Cohesive vs Adhesive Forces definition"
  }
],
  pyqs: [
    {
      id: 'pyq-surface-tension-1',
      year: 2020,
      exam: 'NEET UG',
      question: 'A capillary tube of radius r is immersed in water and water rises in it to a height h. The mass of water in the capillary is 5 g. Another capillary tube of radius 2r is immersed in water. The mass of water that will rise in this tube is:',
      options: [
        '10.0 g',
        '5.0 g',
        '2.5 g',
        '20.0 g'
      ],
      correctAnswer: 0,
      difficulty: 'Medium',
      conceptTested: 'Mass of Capillary Liquid Column (m ∝ r)',
      explanation: 'Mass of liquid in capillary m = (π r² h) ρ.\nSince h = (2 T cosθ) / (ρ g r), substituting gives m = (2 π T cosθ / g) · r  ⇒  m ∝ r.\nWhen radius doubles (r → 2r), mass doubles (m → 2m = 2 × 5 g = 10.0 g).',
      topicId: 'phys-surface-tension',
      verified: true
    },
    {
      id: 'pyq-surface-tension-2',
      year: 2019,
      exam: 'NEET UG',
      question: 'The total energy of a spherical soap bubble of radius r and surface tension T is:',
      options: [
        '8 π r² T',
        '4 π r² T',
        '2 π r² T',
        '16 π r² T'
      ],
      correctAnswer: 0,
      difficulty: 'Easy',
      conceptTested: 'Surface Energy of Soap Bubble (2 surfaces)',
      explanation: 'A soap bubble has two free surfaces (inner and outer).\nTotal surface area A = 2 × (4 π r²) = 8 π r².\nTotal Surface Energy U = T × A = 8 π r² T.',
      topicId: 'phys-surface-tension',
      verified: true
    }
  ]
};
