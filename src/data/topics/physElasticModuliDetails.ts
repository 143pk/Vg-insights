import { DetailedTopicContent } from '../../types/neet';

export const physElasticModuliDetails: DetailedTopicContent = {
  topicId: 'phys-elastic-moduli',
  topicName: 'Elastic Moduli',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Properties of Bulk Matter',
  chapter: 'Mechanical Properties of Solids',

  whatIsThisTopic: 'The ratio of stress to strain within the elastic limit is called the Modulus of Elasticity. Depending on the nature of deformation, there are three fundamental elastic moduli: Young\'s Modulus (Y) for longitudinal extension/compression, Bulk Modulus (B) for volume changes under hydraulic pressure, and Shear Modulus or Modulus of Rigidity (η) for shape changes under tangential shearing force. This NCERT-focused NEET module covers the definition, mathematical derivation, physical interpretation, units, dimensions, wire elongation under applied load and own weight, compressibility, and why steel is more elastic than rubber.',

  basicIdea: [
    'Modulus of Elasticity E = Stress / Strain. It is a material characteristic constant that quantifies resistance to deformation.',
    'Young\'s Modulus Y = Longitudinal Stress / Longitudinal Strain = (F L) / (A ΔL). Applies ONLY to solids (not liquids or gases).',
    'Bulk Modulus B = Volumetric Stress / Volumetric Strain = - ΔP / (ΔV / V). Applies to solids, liquids, and gases. Compressibility K = 1 / B.',
    'Shear Modulus (Modulus of Rigidity) η = Shearing Stress / Shearing Strain = (F/A) / θ. Applies ONLY to solids.',
    'Elongation of a wire under its OWN WEIGHT: ΔL_own = (M g L) / (2 A Y) = (ρ g L²) / (2 Y).',
    'Steel is MORE ELASTIC than rubber because for the same stretching force and dimensions, steel elongates far less than rubber (Y_steel > Y_rubber).'
  ],

  importantTerms: [
    {
      term: 'Young\'s Modulus (Y)',
      definition: 'Ratio of longitudinal stress to longitudinal strain within elastic limit: Y = (F L) / (A ΔL). SI Unit: N/m² or Pa. Dimensions: [M L⁻¹ T⁻²].'
    },
    {
      term: 'Bulk Modulus (B)',
      definition: 'Ratio of hydraulic stress to volumetric strain: B = - ΔP / (ΔV / V). Represents resistance to volume change under pressure.'
    },
    {
      term: 'Compressibility (K)',
      definition: 'Reciprocal of Bulk Modulus: K = 1 / B = - (ΔV / V) / ΔP. Measures ease of volume compression (highest in gases, lowest in solids).'
    },
    {
      term: 'Shear Modulus / Modulus of Rigidity (η)',
      definition: 'Ratio of shearing stress to shearing strain: η = (F/A) / θ. Measures resistance to shape distortion at constant volume.'
    },
    {
      term: 'Elongation under Own Weight',
      definition: 'Self-stretching produced in a hanging wire due to its own distributed gravitational mass: ΔL = (ρ g L²) / (2 Y).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Young\'s Modulus (Y) & Extension of a Wire',
      paragraphs: [
        'DEFINITION & FORMULA:',
        'Consider a wire of original length L and uniform cross-sectional area A fixed at one end and stretched by a longitudinal force F. If elongation produced is ΔL, then:',
        'Longitudinal Stress = F / A',
        'Longitudinal Strain = ΔL / L',
        'By definition, Young\'s Modulus Y is:',
        'Y = (Longitudinal Stress) / (Longitudinal Strain) = (F / A) / (ΔL / L) = (F · L) / (A · ΔL)',
        'If force is applied by suspending a mass m (F = m g) and wire has circular radius r (A = π r²):',
        'Y = (m g L) / (π r² ΔL)   ⇒   ΔL = (m g L) / (π r² Y)',
        'WHY STEEL IS MORE ELASTIC THAN RUBBER:',
        'In colloquial language, "elastic" implies stretchability. But in Physics, ELASTICITY MEASURES RESISTANCE TO DEFORMATION. Suppose equal tensile force F is applied to a steel wire and a rubber string of identical length L and radius r.',
        'ΔL_rubber >> ΔL_steel  ⇒  Since Y = (F L) / (A ΔL), Y_steel >> Y_rubber.',
        'Steel resists deformation far more strongly and recovers immediately, so STEEL IS PHYSICALLY MORE ELASTIC THAN RUBBER!'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="180" fill="#f8fafc" rx="12"/>
          <text x="250" y="25" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="14">Wire Extension under Applied Load</text>
          <!-- Rigid Support -->
          <rect x="180" y="35" width="140" height="10" fill="#334155"/>
          <!-- Unstretched wire -->
          <line x1="220" y1="45" x2="220" y2="135" stroke="#64748b" stroke-width="3"/>
          <text x="205" y="90" font-size="11" fill="#475569" font-weight="bold">L</text>
          <!-- Stretched wire -->
          <line x1="280" y1="45" x2="280" y2="155" stroke="#2563eb" stroke-width="3"/>
          <line x1="270" y1="135" x2="290" y2="135" stroke="#dc2626" stroke-width="1" stroke-dasharray="2,2"/>
          <text x="295" y="148" font-size="11" fill="#dc2626" font-weight="bold">ΔL</text>
          <!-- Load -->
          <rect x="265" y="155" width="30" height="20" fill="#2563eb" rx="3"/>
          <text x="280" y="169" text-anchor="middle" font-size="10" fill="#ffffff" font-weight="bold">m g</text>
        </svg>`,
        caption: 'Extension ΔL produced in a suspended wire of length L when subjected to load F = m g.'
      }
    },
    {
      heading: '2. Elongation of a Wire Under Its Own Weight (Derivation)',
      paragraphs: [
        'DERIVATION USING CALCULUS:',
        'Consider a uniform heavy wire of mass M, density ρ, length L, and cross-sectional area A suspended vertically from a rigid ceiling.',
        'Consider an element of length dy located at distance y from the bottom free end.',
        'Mass of portion below length y: m(y) = (M / L) · y = ρ A y.',
        'Tension / Restoring force acting at element dy: F(y) = m(y) · g = ρ A y g.',
        'Elongation d(ΔL) produced in element dy of length dy is:',
        'd(ΔL) = [F(y) dy] / (A Y) = [ρ A y g dy] / (A Y) = (ρ g / Y) · y dy.',
        'Total elongation ΔL_own of the wire is obtained by integrating from y = 0 to y = L:',
        'ΔL_own = ∫₀ᴸ (ρ g / Y) y dy = (ρ g / Y) [y² / 2]₀ᴸ = (ρ g L²) / (2 Y)',
        'In terms of total mass M = ρ A L:',
        'ΔL_own = (M g L) / (2 A Y)',
        'CRITICAL NEET TAKEAWAY:',
        'Notice the factor of 1/2! The effective stretching force due to self-weight acts at the center of gravity (distance L/2 from support).'
      ]
    },
    {
      heading: '3. Bulk Modulus (B) & Compressibility (K)',
      paragraphs: [
        'DEFINITION:',
        'When a body is subjected to a uniform normal hydraulic pressure change ΔP, its volume changes by ΔV without changing shape.',
        'Hydraulic Stress = ΔP',
        'Volumetric Strain = - ΔV / V (Negative sign indicates volume decreases as pressure increases).',
        'Bulk Modulus B:',
        'B = - ΔP / (ΔV / V) = - V · (ΔP / ΔV)',
        'SI Unit: N/m² or Pascal (Pa). Solids have highest B (~10¹¹ Pa), liquids moderate (~10⁹ Pa), and gases lowest (~10⁵ Pa).',
        'COMPRESSIBILITY (K):',
        'Compressibility K is the fractional decrease in volume per unit increase in pressure:',
        'K = 1 / B = - (1 / V) · (ΔV / ΔP)',
        'SI Unit: Pa⁻¹ or m²/N.'
      ]
    },
    {
      heading: '4. Shear Modulus or Modulus of Rigidity (η)',
      paragraphs: [
        'DEFINITION:',
        'When a tangential force F is applied on a face of area A while the opposite face is fixed, a shearing deformation occurs:',
        'Shearing Stress = F_tangential / A',
        'Shearing Strain = θ = Δx / h',
        'Shear Modulus η:',
        'η = (F / A) / θ = (F · h) / (A · Δx)',
        'MODULUS COMPARISON FOR TYPICAL SOLIDS:',
        'For most isotropic solids, Young\'s modulus is largest, Bulk modulus is intermediate, and Shear modulus is smallest:',
        'Y > B > η   (Typically, η ≈ Y / 3)'
      ]
    }
  ],

  formulae: [
    {
      title: "Young's Modulus Formula",
      formulaName: "Longitudinal Elasticity",
      formula: "Y = \\frac{F \\cdot L}{A \\cdot \\Delta L} = \\frac{m \\g L}{\\pi r^2 \\Delta L}",
      expression: "Y = (F L) / (A ΔL)",
      meaning: "Resistance to longitudinal stretching or compression.",
      whatItRepresents: "Ratio of tensile/compressive stress to longitudinal strain.",
      symbols: "Y = Young's modulus (Pa), F = Force (N), L = Length (m), A = Area (m²), ΔL = Extension (m).",
      unit: "N/m² or Pascal (Pa)",
      conditions: "Applies exclusively to solids within elastic limit.",
      whenToUse: "Use to calculate wire extension ΔL, required load m, or radius r."
    },
    {
      title: "Elongation under Own Weight Formula",
      formulaName: "Self-Weight Elongation",
      formula: "\\Delta L_{\\text{own}} = \\frac{M g L}{2 A Y} = \\frac{\\rho g L^2}{2 Y}",
      expression: "ΔL = (ρ g L²) / (2 Y)",
      meaning: "Elongation produced in a heavy wire hanging under gravity.",
      whatItRepresents: "Integrated extension due to distributed gravitational weight.",
      symbols: "M = Total mass, L = Length, ρ = Mass density (kg/m³), g = Acceleration due to gravity.",
      unit: "Meter (m)",
      conditions: "Uniform vertical hanging wire fixed at top end."
    },
    {
      title: "Bulk Modulus Formula",
      formulaName: "Volumetric Elasticity",
      formula: "B = - V \\frac{\\Delta P}{\\Delta V}",
      expression: "B = - V (ΔP / ΔV)",
      meaning: "Resistance to volume compression under hydraulic pressure.",
      whatItRepresents: "Ratio of pressure change to fractional volume contraction.",
      symbols: "B = Bulk Modulus (Pa), ΔP = Pressure change, V = Initial volume, ΔV = Volume change.",
      unit: "N/m² or Pascal (Pa)",
      conditions: "Applies to solids, liquids, and gases."
    },
    {
      title: "Compressibility Formula",
      formulaName: "Reciprocal of Bulk Modulus",
      formula: "K = \\frac{1}{B} = - \\frac{\\Delta V}{V \\cdot \\Delta P}",
      expression: "K = 1 / B",
      meaning: "Ease of volume reduction under external pressure.",
      whatItRepresents: "Fractional volume change per unit change in pressure.",
      symbols: "K = Compressibility (Pa⁻¹ or m²/N).",
      unit: "Pa⁻¹ or m²/N"
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
      <rect width="500" height="160" fill="#f8fafc" rx="12"/>
      <!-- Young's Modulus -->
      <g transform="translate(30, 20)">
        <line x1="30" y1="20" x2="30" y2="90" stroke="#2563eb" stroke-width="3"/>
        <line x1="30" y1="90" x2="30" y2="110" stroke="#dc2626" stroke-width="3"/>
        <text x="30" y="135" font-size="10" text-anchor="middle" fill="#1e293b" font-weight="bold">Young's Modulus Y</text>
        <text x="30" y="150" font-size="9" text-anchor="middle" fill="#475569">Longitudinal (Solids)</text>
      </g>
      <!-- Bulk Modulus -->
      <g transform="translate(200, 20)">
        <circle cx="45" cy="65" r="35" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
        <circle cx="45" cy="65" r="25" fill="#bae6fd" stroke="#0369a1" stroke-width="1.5" stroke-dasharray="3,3"/>
        <text x="45" y="135" font-size="10" text-anchor="middle" fill="#1e293b" font-weight="bold">Bulk Modulus B</text>
        <text x="45" y="150" font-size="9" text-anchor="middle" fill="#475569">Volume (S, L, G)</text>
      </g>
      <!-- Shear Modulus -->
      <g transform="translate(360, 20)">
        <polygon points="10,95 70,95 85,35 25,35" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
        <text x="45" y="135" font-size="10" text-anchor="middle" fill="#1e293b" font-weight="bold">Shear Modulus η</text>
        <text x="45" y="150" font-size="9" text-anchor="middle" fill="#475569">Shape / Rigidity (Solids)</text>
      </g>
    </svg>`,
    caption: 'Comparison of deformations governed by Young\'s Modulus Y, Bulk Modulus B, and Shear Modulus η.'
  },

  neetImportantPoints: [
    "Young's modulus Y and Shear modulus η apply ONLY to solids.",
    "Bulk modulus B applies to solids, liquids, and gases (B_solid > B_liquid > B_gas).",
    "Steel is more elastic than rubber because Y_steel > Y_rubber.",
    "Elongation under self-weight ΔL_own = (ρ g L²) / (2 Y) depends on length squared L², density ρ, and Young's modulus Y.",
    "Isothermal Bulk Modulus of an Ideal Gas is B_iso = P (pressure).",
    "Adiabatic Bulk Modulus of an Ideal Gas is B_adia = γ P (where γ = C_p / C_v)."
  ],

  commonConfusions: [
    {
      misconception: "Thinking rubber has a higher Young's modulus because it stretches easily.",
      correction: "Young's modulus Y measures resistance to stretching. Since steel requires a huge force to stretch even slightly, Y_steel (~2 × 10¹¹ Pa) is much larger than Y_rubber (~10⁶ Pa)."
    },
    {
      misconception: "Forgetting the factor of 1/2 in self-weight wire extension.",
      correction: "Self-weight extension is ΔL = (M g L) / (2 A Y), NOT (M g L) / (A Y), because tension varies linearly from 0 at the bottom to M g at the top."
    }
  ],

  quickRevision: [
    "Y = (F L)/(A ΔL) [Solids only] | B = - V (ΔP / ΔV) [All phases] | η = (F/A)/θ [Solids only]",
    "Compressibility K = 1/B [Pa⁻¹]",
    "Self-weight elongation: ΔL_own = (ρ g L²) / (2 Y) = (M g L) / (2 A Y)",
    "Y_steel > Y_rubber (Steel is more elastic than rubber)",
    "For ideal gas: B_isothermal = P, B_adiabatic = γ P"
  ],

  practiceQuestions: [
  {
    "id": "pq-elastic-moduli-1",
    "question": "A copper wire of length 2.2 m and a steel wire of length 1.6 m, both of diameter 3.0 mm, are connected end to end and stretched by a force F. If the net elongation produced is 0.70 mm, find the load F. (Y_steel = 2.0 × 10¹¹ N/m², Y_copper = 1.1 × 10¹¹ N/m²)",
    "options": [
      "250 N",
      "176.6 N",
      "500 N",
      "100 N"
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "conceptTested": "Composite Wire Extension in Series",
    "explanation": "Total elongation ΔL_total = ΔL_copper + ΔL_steel = 0.70 mm = 7.0 × 10⁻⁴ m.\nSince wires are in series, stretching force F is identical in both.\nCross-sectional area A = π r² = 3.1416 × (1.5 × 10⁻³)² = 7.0686 × 10⁻⁶ m².\nΔL_total = F / A · [ L_copper / Y_copper + L_steel / Y_steel ]\n7.0 × 10⁻⁴ = (F / 7.0686 × 10⁻⁶) · [ 2.2 / (1.1 × 10¹¹) + 1.6 / (2.0 × 10¹¹) ]\n7.0 × 10⁻⁴ = (F / 7.0686 × 10⁻⁶) · [ 2.0 × 10⁻¹¹ + 0.8 × 10⁻¹¹ ] = (F / 7.0686 × 10⁻⁶) · (2.8 × 10⁻¹¹)\n7.0 × 10⁻⁴ = F · (3.961 × 10⁻⁶)\nF = 7.0 × 10⁻⁴ / 3.961 × 10⁻⁶ = 176.7 N."
  },
  {
    "id": "pq-elastic-moduli-2",
    "question": "A heavy uniform rubber rope of density 1.5 × 10³ kg/m³, length 8 m, and Young's modulus 5 × 10⁶ N/m² hangs vertically from a ceiling. The extension produced in the rope due to its own weight is: (g = 10 m/s²)",
    "options": [
      "0.096 m",
      "0.192 m",
      "0.048 m",
      "0.24 m"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Wire Extension under Own Weight Formula",
    "explanation": "Formula: ΔL_own = (ρ g L²) / (2 Y)\nGiven: ρ = 1.5 × 10³ kg/m³, g = 10 m/s², L = 8 m, Y = 5 × 10⁶ N/m².\nΔL_own = [ (1.5 × 10³) × 10 × (8)² ] / [ 2 × (5 × 10⁶) ]\nΔL_own = [ 1.5 × 10⁴ × 64 ] / [ 10⁷ ] = 9.6 × 10⁵ / 10⁷ = 0.096 m = 9.6 cm."
  },
  {
    "id": "pq-elastic-moduli-3",
    "question": "The average depth of Indian Ocean is about 3000 m. Calculate the fractional compression ΔV / V of water at the bottom of the ocean. (Density of water = 10³ kg/m³, Bulk modulus of water = 2.2 × 10⁹ N/m², g = 10 m/s²)",
    "options": [
      "1.36 × 10⁻²",
      "2.72 × 10⁻²",
      "0.68 × 10⁻²",
      "4.08 × 10⁻²"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Bulk Modulus and Water Compressibility at Depth",
    "explanation": "Pressure at depth h: ΔP = ρ g h = 10³ × 10 × 3000 = 3 × 10⁷ Pa.\nBulk modulus formula: B = ΔP / (ΔV / V) ⇒ Fractional compression ΔV / V = ΔP / B.\nΔV / V = (3 × 10⁷) / (2.2 × 10⁹) = 3 / 220 = 0.013636 = 1.36 × 10⁻²."
  },
  {
    "id": "pq-elastic-moduli-4",
    "question": "The compressibility of water is 4 × 10⁻⁵ per atm. The decrease in volume of 100 cm³ of water under a pressure of 100 atm is:",
    "options": [
      "0.4 cm³",
      "0.04 cm³",
      "4 cm³",
      "0.004 cm³"
    ],
    "correctAnswer": 0,
    "difficulty": "Easy",
    "conceptTested": "Compressibility K = (1/V) (ΔV / ΔP)",
    "explanation": "Given: Compressibility K = 4 × 10⁻⁵ atm⁻¹, Initial volume V = 100 cm³, Pressure change ΔP = 100 atm.\nFormula: K = ΔV / (V · ΔP) ⇒ ΔV = K × V × ΔP.\nΔV = (4 × 10⁻⁵ atm⁻¹) × (100 cm³) × (100 atm) = 4 × 10⁻⁵ × 10⁴ = 0.4 cm³."
  },
  {
    "id": "prac-physelasticmoduli-5",
    "question": "Regarding Elastic Moduli, which of the following statements correctly resolves a common misconception about \"Thinking rubber has a higher Young's modulus because it stretches easily.\"?",
    "options": [
      "Young's modulus Y measures resistance to stretching. Since steel requires a huge force to stretch even slightly, Y_steel (~2 × 10¹¹ Pa) is much larger than Y_rubber (~10⁶ Pa).",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Elastic Moduli - Conceptual Clarity"
  },
  {
    "id": "prac-physelasticmoduli-6",
    "question": "Regarding Elastic Moduli, which of the following statements correctly resolves a common misconception about \"Forgetting the factor of 1/2 in self-weight wire extension.\"?",
    "options": [
      "Self-weight extension is ΔL = (M g L) / (2 A Y), NOT (M g L) / (A Y), because tension varies linearly from 0 at the bottom to M g at the top.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Elastic Moduli - Conceptual Clarity"
  },
  {
    "id": "prac-physelasticmoduli-7",
    "question": "In the study of Elastic Moduli, what is the exact definition and significance of \"Young's Modulus (Y)\"?",
    "options": [
      "Ratio of longitudinal stress to longitudinal strain within elastic limit: Y = (F L) / (A ΔL). SI Unit: N/m² or Pa. Dimensions: [M L⁻¹ T⁻²].",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Ratio of longitudinal stress to longitudinal strain within elastic limit: Y = (F L) / (A ΔL). SI Unit: N/m² or Pa. Dimensions: [M L⁻¹ T⁻²].. ",
    "difficulty": "Easy",
    "conceptTested": "Young's Modulus (Y) definition"
  },
  {
    "id": "prac-physelasticmoduli-8",
    "question": "In the study of Elastic Moduli, what is the exact definition and significance of \"Bulk Modulus (B)\"?",
    "options": [
      "Ratio of hydraulic stress to volumetric strain: B = - ΔP / (ΔV / V). Represents resistance to volume change under pressure.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Ratio of hydraulic stress to volumetric strain: B = - ΔP / (ΔV / V). Represents resistance to volume change under pressure.. ",
    "difficulty": "Easy",
    "conceptTested": "Bulk Modulus (B) definition"
  },
  {
    "id": "prac-physelasticmoduli-9",
    "question": "In the study of Elastic Moduli, what is the exact definition and significance of \"Compressibility (K)\"?",
    "options": [
      "Reciprocal of Bulk Modulus: K = 1 / B = - (ΔV / V) / ΔP. Measures ease of volume compression (highest in gases, lowest in solids).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Reciprocal of Bulk Modulus: K = 1 / B = - (ΔV / V) / ΔP. Measures ease of volume compression (highest in gases, lowest in solids).. ",
    "difficulty": "Easy",
    "conceptTested": "Compressibility (K) definition"
  },
  {
    "id": "prac-physelasticmoduli-10",
    "question": "In the study of Elastic Moduli, what is the exact definition and significance of \"Shear Modulus / Modulus of Rigidity (η)\"?",
    "options": [
      "Ratio of shearing stress to shearing strain: η = (F/A) / θ. Measures resistance to shape distortion at constant volume.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Ratio of shearing stress to shearing strain: η = (F/A) / θ. Measures resistance to shape distortion at constant volume.. ",
    "difficulty": "Easy",
    "conceptTested": "Shear Modulus / Modulus of Rigidity (η) definition"
  }
],
  pyqs: [
    {
      id: "pyq-elastic-moduli-1",
      year: 2021,
      exam: "NEET UG",
      question: "A wire of length L, area of cross section A is hanging from a fixed support. The length of the wire changes to L1 when mass M is suspended from its free end. The expression for Young's modulus is:",
      options: [
        "(M g L1) / (A L)",
        "(M g (L1 - L)) / (A L)",
        "(M g L) / (A L1)",
        "(M g L) / (A (L1 - L))"
      ],
      correctAnswer: 3,
      explanation: "Initial length = L, Final length = L1 ⇒ Elongation ΔL = (L1 - L).\nStretching force F = M g, Area = A.\nYoung's modulus Y = (F L) / (A ΔL) = (M g L) / [ A (L1 - L) ].",
      topicId: "phys-elastic-moduli",
      difficulty: "Easy",
      conceptTested: "Young's Modulus Definition from Elongation",
      ncertReference: "NCERT Physics Class 11 Chapter 9 - Mechanical Properties of Solids",
      verified: true
    },
    {
      id: "pyq-elastic-moduli-2",
      year: 2018,
      exam: "NEET UG",
      question: "The bulk modulus of a spherical object is B. If it is subjected to uniform pressure p, the fractional decrease in radius is:",
      options: [
        "p / (3 B)",
        "p / B",
        "B / (3 p)",
        "3 p / B"
      ],
      correctAnswer: 0,
      explanation: "For a sphere, Volume V = (4/3) π r³.\nTaking log and differentiating: ΔV / V = 3 (Δr / r).\nBy definition of Bulk Modulus: B = p / (ΔV / V) ⇒ ΔV / V = p / B.\nTherefore, 3 (Δr / r) = p / B ⇒ Fractional decrease in radius Δr / r = p / (3 B).",
      topicId: "phys-elastic-moduli",
      difficulty: "Medium",
      conceptTested: "Bulk Modulus Relation with Fractional Radius Decrease",
      ncertReference: "NCERT Physics Class 11 Chapter 9 - Mechanical Properties of Solids",
      verified: true
    }
  ]
};
