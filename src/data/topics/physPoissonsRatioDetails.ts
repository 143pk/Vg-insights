import { DetailedTopicContent } from '../../types/neet';

export const physPoissonsRatioDetails: DetailedTopicContent = {
  topicId: 'phys-poissons-ratio-elasticity',
  topicName: "Poisson's Ratio & Elastic Behaviour",
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Properties of Bulk Matter',
  chapter: 'Mechanical Properties of Solids',

  whatIsThisTopic: 'When a wire or rod is pulled axially, it undergoes a longitudinal extension along the direction of force, accompanied by a simultaneous lateral contraction perpendicular to the force. Poisson\'s ratio (σ or ν) is defined as the ratio of lateral strain to longitudinal strain. It quantifies transverse dimensional changes occurring during axial deformation. This topic provides a detailed, NCERT-aligned, NEET UG study module covering Poisson\'s ratio, lateral strain vs longitudinal strain, fractional change in volume during stretching, theoretical (-1 to 0.5) and practical (0 to 0.5) limits, interrelations between elastic constants (Y, B, η, σ), and key NEET numerical applications.',

  basicIdea: [
    'When a wire stretches longitudinally (length increases by ΔL), its cross-sectional diameter simultaneously contracts laterally (diameter decreases by Δd).',
    'Lateral Strain = - Δd / d (where negative sign denotes decrease in diameter d). Longitudinal Strain = ΔL / L.',
    'Poisson\'s Ratio σ = - (Lateral Strain) / (Longitudinal Strain) = - (Δd / d) / (ΔL / L). Since it is a ratio of two strains, it is a pure dimensionless scalar.',
    'Fractional change in volume when a wire is stretched axially: ΔV / V = (ΔL / L) · (1 - 2σ).',
    'If σ = 0.5, ΔV / V = 0, meaning the volume of the material remains ABSOLUTELY CONSTANT upon stretching (Incompressible material).',
    'Interrelations between Elastic Constants: Y = 3B(1 - 2σ), Y = 2η(1 + σ), σ = (3B - 2η) / (6B + 2η), and 9/Y = 1/B + 3/η.'
  ],

  importantTerms: [
    {
      term: 'Longitudinal Strain',
      definition: 'Ratio of change in length ΔL to original length L along the direction of applied stretching force: Strain_long = ΔL / L.'
    },
    {
      term: 'Lateral Strain',
      definition: 'Ratio of change in diameter Δd to original diameter d in the direction perpendicular to applied force: Strain_lat = - Δd / d.'
    },
    {
      term: 'Poisson\'s Ratio (σ)',
      definition: 'Ratio of lateral strain to longitudinal strain: σ = - (Δd / d) / (ΔL / L). Pure dimensionless scalar quantity.'
    },
    {
      term: 'Incompressible Material',
      definition: 'A material whose volume does not change when stretched or compressed (ΔV = 0), corresponding strictly to Poisson\'s ratio σ = 0.5.'
    },
    {
      term: 'Elastic Constants',
      definition: 'The four parameters (Young\'s modulus Y, Bulk modulus B, Shear modulus η, and Poisson\'s ratio σ) describing elastic properties of isotropic solids.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Lateral Contraction & Poisson\'s Ratio Definition',
      paragraphs: [
        'PHYSICAL MECHANISM:',
        'When an axial tensile load F is applied to a cylindrical wire of initial length L and diameter d, interatomic bonds are stretched along the longitudinal axis. To minimize interatomic volume changes, neighboring atomic planes pull inward transversely, causing the diameter to decrease from d to (d - Δd).',
        'MATHEMATICAL DEFINITION:',
        '• Longitudinal Strain = ΔL / L',
        '• Lateral Strain = - Δd / d  (the minus sign ensures lateral strain is positive when length increases)',
        'Poisson\'s Ratio σ:',
        'σ = - (Lateral Strain) / (Longitudinal Strain) = - (Δd / d) / (ΔL / L) = - (L · Δd) / (d · ΔL)',
        'DIMENSIONS & UNITS:',
        'Poisson\'s ratio is a pure ratio of two dimensionless strains. It has NO UNITS and NO DIMENSIONS [M⁰ L⁰ T⁰].'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
          <rect width="520" height="200" fill="#f8fafc" rx="12"/>
          <text x="260" y="25" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="14">Axial Stretching with Lateral Contraction</text>
          
          <!-- Original Wire (Dashed outline) -->
          <rect x="100" y="70" width="300" height="60" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
          <text x="250" y="60" font-size="11" fill="#64748b" text-anchor="middle" font-weight="bold">Original Wire (Diameter d, Length L)</text>
          
          <!-- Stretched Wire -->
          <rect x="60" y="78" width="380" height="44" fill="#3b82f6" fill-opacity="0.2" stroke="#2563eb" stroke-width="2"/>
          <text x="250" y="105" font-size="11" fill="#1e40af" text-anchor="middle" font-weight="bold">Stretched Wire (Diameter d - Δd, Length L + ΔL)</text>
          
          <!-- Force Arrows -->
          <line x1="60" y1="100" x2="20" y2="100" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow)"/>
          <text x="35" y="90" font-size="11" fill="#dc2626" font-weight="bold">F</text>
          
          <line x1="440" y1="100" x2="480" y2="100" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow)"/>
          <text x="460" y="90" font-size="11" fill="#dc2626" font-weight="bold">F</text>

          <!-- Annotations -->
          <line x1="100" y1="145" x2="400" y2="145" stroke="#64748b" stroke-width="1.5"/>
          <text x="250" y="160" font-size="11" fill="#475569" text-anchor="middle">Initial Length L</text>
          <text x="420" y="160" font-size="11" fill="#2563eb" text-anchor="middle">ΔL</text>
        </svg>`,
        caption: 'Stretching a wire causes longitudinal extension ΔL and lateral contraction Δd.'
      }
    },
    {
      heading: '2. Fractional Change in Volume During Stretching (Derivation)',
      paragraphs: [
        'COMPLETE DERIVATION:',
        'Consider a cylindrical wire of radius r (diameter d = 2r) and length L. Its volume V is:',
        'V = π r² L = (π / 4) d² L',
        'Taking natural logarithm on both sides:',
        'ln V = ln(π / 4) + 2 ln d + ln L',
        'Differentiating partially to find small fractional changes:',
        'ΔV / V = 0 + 2 (Δd / d) + (ΔL / L)',
        'By definition of Poisson\'s ratio: Δd / d = - σ (ΔL / L). Substituting this:',
        'ΔV / V = 2 [ - σ (ΔL / L) ] + (ΔL / L)',
        'Factoring out (ΔL / L):',
        'ΔV / V = (ΔL / L) · (1 - 2 σ)',
        'SPECIAL CASE ANALYSIS:',
        '• Case 1: If σ = 0.5, then (1 - 2σ) = 0 ⇒ ΔV / V = 0. Volume remains strictly constant upon stretching! (Incompressible material, e.g., ideal rubber).',
        '• Case 2: For real metallic wires (0 < σ < 0.5), (1 - 2σ) > 0, so stretching INCREASES volume slightly (ΔV > 0).'
      ]
    },
    {
      heading: '3. Theoretical & Practical Limits of Poisson\'s Ratio',
      paragraphs: [
        'DERIVATION OF LIMITS FROM ELASTIC CONSTANTS:',
        'The elastic moduli Y, B, and η must all be physically positive quantities (Y > 0, B > 0, η > 0).',
        'Using Relation 1: Y = 3B (1 - 2σ) > 0  ⇒  1 - 2σ > 0  ⇒  σ < 0.5.',
        'Using Relation 2: Y = 2η (1 + σ) > 0  ⇒  1 + σ > 0  ⇒  σ > -1.',
        'Combining both inequalities gives the THEORETICAL LIMITS:',
        '-1 ≤ σ ≤ 0.5',
        'PRACTICAL RANGE FOR SOLIDS:',
        'For almost all real isotropic solids (metals, alloys, polymers), lateral contraction occurs when stretched, so lateral strain is negative and σ is positive:',
        'Practical Limits: 0 ≤ σ ≤ 0.5',
        '• Cork: σ ≈ 0 (Compressing cork along one axis causes negligible lateral expansion, making cork ideal for bottle stoppers!).',
        '• Steel / Aluminium: σ ≈ 0.28 to 0.33.',
        '• Vulcanized Rubber: σ ≈ 0.49 to 0.499 (~0.5).'
      ]
    },
    {
      heading: '4. Interrelations Between Elastic Constants (Y, B, η, σ)',
      paragraphs: [
        'An isotropic solid has four elastic parameters (Y, B, η, σ), but only TWO of them are independent! The four equations connecting them are:',
        '1. Relation 1:  Y = 3 B (1 - 2 σ)',
        '2. Relation 2:  Y = 2 η (1 + σ)',
        '3. Relation 3 (Eliminating Y):  σ = (3 B - 2 η) / (6 B + 2 η)',
        '4. Relation 4 (Eliminating σ):  9 / Y = 1 / B + 3 / η',
        'HIGH-YIELD NEET TIP:',
        'Relation 4 (9/Y = 1/B + 3/η) is extremely high yield in NEET UG numericals where you are given B and η and asked to calculate Young\'s modulus Y directly without finding σ!'
      ]
    }
  ],

  formulae: [
    {
      title: "Poisson's Ratio Formula",
      formulaName: "Lateral-to-Longitudinal Strain Ratio",
      formula: "\\sigma = - \\frac{\\Delta d / d}{\\Delta L / L} = - \\frac{\\Delta r / r}{\\Delta L / L}",
      expression: "σ = - (Δd / d) / (ΔL / L)",
      meaning: "Measures transverse contraction per unit axial strain.",
      whatItRepresents: "Ratio of lateral strain to longitudinal strain.",
      symbols: "σ = Poisson's ratio, d = Diameter, r = Radius, L = Length.",
      unit: "Dimensionless [M⁰ L⁰ T⁰]",
      conditions: "Axial tensile or compressive loading within elastic limit."
    },
    {
      title: "Fractional Change in Volume Formula",
      formulaName: "Volumetric Strain under Uniaxial Load",
      formula: "\\frac{\\Delta V}{V} = \\frac{\\Delta L}{L} \\left( 1 - 2\\sigma \\right)",
      expression: "ΔV / V = (ΔL / L) (1 - 2σ)",
      meaning: "Fractional volume change when a wire is stretched.",
      whatItRepresents: "Coupling between axial elongation and volume expansion.",
      symbols: "ΔV/V = Volumetric strain, ΔL/L = Longitudinal strain, σ = Poisson's ratio.",
      unit: "Dimensionless"
    },
    {
      title: "Interrelation 1 (Y, B, σ)",
      formulaName: "Young's-Bulk-Poisson Relation",
      formula: "Y = 3 B (1 - 2\\sigma)",
      expression: "Y = 3 B (1 - 2σ)",
      meaning: "Connects Young's modulus, Bulk modulus, and Poisson's ratio.",
      whatItRepresents: "Elastic constant interrelation.",
      symbols: "Y = Young's modulus, B = Bulk modulus, σ = Poisson's ratio."
    },
    {
      title: "Interrelation 2 (Y, η, σ)",
      formulaName: "Young's-Shear-Poisson Relation",
      formula: "Y = 2 \\eta (1 + \\sigma)",
      expression: "Y = 2 η (1 + σ)",
      meaning: "Connects Young's modulus, Shear modulus, and Poisson's ratio.",
      whatItRepresents: "Elastic constant interrelation.",
      symbols: "Y = Young's modulus, η = Shear modulus, σ = Poisson's ratio."
    },
    {
      title: "Interrelation 4 (Y, B, η)",
      formulaName: "Three Moduli Relation",
      formula: "\\frac{9}{Y} = \\frac{1}{B} + \\frac{3}{\\eta}",
      expression: "9 / Y = 1 / B + 3 / η",
      meaning: "Connects Young's, Bulk, and Shear moduli directly.",
      whatItRepresents: "Direct relation between the three elastic moduli.",
      symbols: "Y = Young's modulus, B = Bulk modulus, η = Shear modulus."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
      <rect width="500" height="160" fill="#f8fafc" rx="12"/>
      <g transform="translate(40, 20)">
        <text x="210" y="20" font-size="14" fill="#0f172a" font-weight="bold" text-anchor="middle">Interrelations Between Elastic Constants</text>
        <rect x="20" y="40" width="180" height="40" fill="#dbeafe" rx="6" stroke="#2563eb"/>
        <text x="110" y="65" font-size="12" fill="#1e40af" font-weight="bold" text-anchor="middle">Y = 3B (1 - 2σ)</text>

        <rect x="220" y="40" width="180" height="40" fill="#dbeafe" rx="6" stroke="#2563eb"/>
        <text x="310" y="65" font-size="12" fill="#1e40af" font-weight="bold" text-anchor="middle">Y = 2η (1 + σ)</text>

        <rect x="120" y="95" width="200" height="40" fill="#f1f5f9" rx="6" stroke="#475569"/>
        <text x="220" y="120" font-size="12" fill="#0f172a" font-weight="bold" text-anchor="middle">9/Y = 1/B + 3/η</text>
      </g>
    </svg>`,
    caption: 'Summary of key interrelations between Young\'s modulus Y, Bulk modulus B, Shear modulus η, and Poisson\'s ratio σ.'
  },

  neetImportantPoints: [
    "Poisson's ratio σ is dimensionless [M⁰ L⁰ T⁰].",
    "Theoretical range: -1 ≤ σ ≤ 0.5 | Practical range for real solids: 0 ≤ σ ≤ 0.5.",
    "For an INCOMPRESSIBLE material (volume does not change when stretched, ΔV = 0), σ = 0.5.",
    "For cork, σ ≈ 0, which is why pushing a cork into a wine bottle does not cause lateral expansion.",
    "Useful formula for Poisson's ratio from B and η: σ = (3B - 2η) / (6B + 2η).",
    "Formula for Y in terms of B and η: 9/Y = 1/B + 3/η  ⇒  Y = (9 B η) / (3 B + η)."
  ],

  commonConfusions: [
    {
      misconception: "Thinking Poisson's ratio can be negative in real engineering materials.",
      correction: "While theoretical elasticity permits negative σ (auxetic materials like foam stretched in 2D), all standard isotropic natural solids have positive σ (0 to 0.5)."
    },
    {
      misconception: "Assuming volume increases by ΔL/L when a wire is stretched.",
      correction: "Because the diameter contracts laterally, the volume change is ΔV/V = (ΔL/L) (1 - 2σ), which is less than ΔL/L!"
    }
  ],

  quickRevision: [
    "Poisson's ratio σ = - (Δd/d) / (ΔL/L) [Dimensionless]",
    "Fractional volume change: ΔV/V = (ΔL/L) (1 - 2σ)",
    "If σ = 0.5, ΔV = 0 (Incompressible material)",
    "Limits: Theoretical -1 to 0.5 | Practical 0 to 0.5",
    "Key Interrelations: Y = 3B(1-2σ) = 2η(1+σ), 9/Y = 1/B + 3/η"
  ],

  practiceQuestions: [
  {
    "id": "pq-poissons-ratio-1",
    "question": "A material has a Poisson's ratio of 0.20. If a longitudinal strain of 4.0 × 10⁻³ is produced in a wire made of this material, the percentage change in its volume is:",
    "options": [
      "0.24%",
      "0.40%",
      "0.16%",
      "0.08%"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Fractional Change in Volume Formula",
    "explanation": "Given: Poisson's ratio σ = 0.20, Longitudinal strain ΔL / L = 4.0 × 10⁻³.\nFormula: ΔV / V = (ΔL / L) · (1 - 2σ)\nSubstitute values:\nΔV / V = (4.0 × 10⁻³) · (1 - 2 × 0.20) = (4.0 × 10⁻³) · (0.60) = 2.4 × 10⁻³.\nPercentage change = (ΔV / V) × 100 = 2.4 × 10⁻³ × 100 = 0.24%."
  },
  {
    "id": "pq-poissons-ratio-2",
    "question": "For a given material, Young's modulus is 2.4 times its Shear modulus (Y = 2.4 η). The Poisson's ratio σ of the material is:",
    "options": [
      "0.2",
      "0.3",
      "0.4",
      "0.25"
    ],
    "correctAnswer": 0,
    "difficulty": "Easy",
    "conceptTested": "Elastic Interrelation Y = 2η(1 + σ)",
    "explanation": "Use the interrelation formula: Y = 2 η (1 + σ).\nGiven Y = 2.4 η:\n2.4 η = 2 η (1 + σ)\nDivide by η: 2.4 = 2 (1 + σ) ⇒ 1.2 = 1 + σ ⇒ σ = 1.2 - 1 = 0.2."
  },
  {
    "id": "pq-poissons-ratio-3",
    "question": "A rubber cord has a Poisson's ratio of 0.50. If the longitudinal strain in the cord is 2 × 10⁻³, the fractional change in its volume (ΔV / V) is:",
    "options": [
      "1 × 10⁻³",
      "2 × 10⁻³",
      "0",
      "4 × 10⁻³"
    ],
    "correctAnswer": 2,
    "difficulty": "Easy",
    "conceptTested": "Incompressible Material Condition σ = 0.5",
    "explanation": "Formula: ΔV / V = (ΔL / L) · (1 - 2σ).\nGiven σ = 0.50:\nΔV / V = (2 × 10⁻³) · (1 - 2 × 0.50) = (2 × 10⁻³) · (0) = 0.\nWhen Poisson's ratio is 0.5, volume change is zero."
  },
  {
    "id": "pq-poissons-ratio-4",
    "question": "If the Bulk modulus B and Shear modulus η of a material are 1.4 × 10¹¹ Pa and 0.84 × 10¹¹ Pa respectively, Young's modulus Y of the material is:",
    "options": [
      "2.0 × 10¹¹ Pa",
      "2.1 × 10¹¹ Pa",
      "1.8 × 10¹¹ Pa",
      "2.5 × 10¹¹ Pa"
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "conceptTested": "Elastic Interrelation 9/Y = 1/B + 3/η",
    "explanation": "Use formula: 9 / Y = 1 / B + 3 / η = (η + 3B) / (B η) ⇒ Y = (9 B η) / (3 B + η).\nSubstitute B = 1.4 × 10¹¹ and η = 0.84 × 10¹¹:\n3 B + η = 3(1.4) + 0.84 = 4.20 + 0.84 = 5.04 × 10¹¹ Pa.\n9 B η = 9 × (1.4 × 10¹¹) × (0.84 × 10¹¹) = 10.584 × 10²².\nY = (10.584 × 10²²) / (5.04 × 10¹¹) = 2.1 × 10¹¹ Pa."
  },
  {
    "id": "prac-physpoissonsratioelasticity-5",
    "question": "Regarding Poisson's Ratio & Elastic Behaviour, which of the following statements correctly resolves a common misconception about \"Thinking Poisson's ratio can be negative in real engineering materials.\"?",
    "options": [
      "While theoretical elasticity permits negative σ (auxetic materials like foam stretched in 2D), all standard isotropic natural solids have positive σ (0 to 0.5).",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Poisson's Ratio & Elastic Behaviour - Conceptual Clarity"
  },
  {
    "id": "prac-physpoissonsratioelasticity-6",
    "question": "Regarding Poisson's Ratio & Elastic Behaviour, which of the following statements correctly resolves a common misconception about \"Assuming volume increases by ΔL/L when a wire is stretched.\"?",
    "options": [
      "Because the diameter contracts laterally, the volume change is ΔV/V = (ΔL/L) (1 - 2σ), which is less than ΔL/L!",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Poisson's Ratio & Elastic Behaviour - Conceptual Clarity"
  },
  {
    "id": "prac-physpoissonsratioelasticity-7",
    "question": "In the study of Poisson's Ratio & Elastic Behaviour, what is the exact definition and significance of \"Longitudinal Strain\"?",
    "options": [
      "Ratio of change in length ΔL to original length L along the direction of applied stretching force: Strain_long = ΔL / L.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Ratio of change in length ΔL to original length L along the direction of applied stretching force: Strain_long = ΔL / L.. ",
    "difficulty": "Easy",
    "conceptTested": "Longitudinal Strain definition"
  },
  {
    "id": "prac-physpoissonsratioelasticity-8",
    "question": "In the study of Poisson's Ratio & Elastic Behaviour, what is the exact definition and significance of \"Lateral Strain\"?",
    "options": [
      "Ratio of change in diameter Δd to original diameter d in the direction perpendicular to applied force: Strain_lat = - Δd / d.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Ratio of change in diameter Δd to original diameter d in the direction perpendicular to applied force: Strain_lat = - Δd / d.. ",
    "difficulty": "Easy",
    "conceptTested": "Lateral Strain definition"
  },
  {
    "id": "prac-physpoissonsratioelasticity-9",
    "question": "In the study of Poisson's Ratio & Elastic Behaviour, what is the exact definition and significance of \"Poisson's Ratio (σ)\"?",
    "options": [
      "Ratio of lateral strain to longitudinal strain: σ = - (Δd / d) / (ΔL / L). Pure dimensionless scalar quantity.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Ratio of lateral strain to longitudinal strain: σ = - (Δd / d) / (ΔL / L). Pure dimensionless scalar quantity.. ",
    "difficulty": "Easy",
    "conceptTested": "Poisson's Ratio (σ) definition"
  },
  {
    "id": "prac-physpoissonsratioelasticity-10",
    "question": "In the study of Poisson's Ratio & Elastic Behaviour, what is the exact definition and significance of \"Incompressible Material\"?",
    "options": [
      "A material whose volume does not change when stretched or compressed (ΔV = 0), corresponding strictly to Poisson's ratio σ = 0.5.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A material whose volume does not change when stretched or compressed (ΔV = 0), corresponding strictly to Poisson's ratio σ = 0.5.. ",
    "difficulty": "Easy",
    "conceptTested": "Incompressible Material definition"
  }
],
  pyqs: [
    {
      id: "pyq-poissons-ratio-1",
      year: 2018,
      exam: "NEET UG",
      question: "Which of the following relations between Young's modulus Y, Bulk modulus B, Shear modulus η and Poisson's ratio σ is INCORRECT?",
      options: [
        "Y = 3 B (1 - 2σ)",
        "Y = 2 η (1 + σ)",
        "σ = (3B - 2η) / (6B + 2η)",
        "Y = 3 η (1 - 2σ)"
      ],
      correctAnswer: 3,
      explanation: "The standard correct interrelation formulas are:\n1) Y = 3B(1 - 2σ)\n2) Y = 2η(1 + σ)\n3) σ = (3B - 2η) / (6B + 2η)\nOption D states Y = 3η(1 - 2σ) which is mathematically INCORRECT.",
      topicId: "phys-poissons-ratio-elasticity",
      difficulty: "Easy",
      conceptTested: "Interrelations Between Elastic Constants",
      ncertReference: "NCERT Physics Class 11 Chapter 9 - Mechanical Properties of Solids",
      verified: true
    },
    {
      id: "pyq-poissons-ratio-2",
      year: 2012,
      exam: "AIPMT",
      question: "The value of Poisson's ratio lies between:",
      options: [
        "-1 to 0.5",
        "0 to 1",
        "-1 to 1",
        "0.5 to 1"
      ],
      correctAnswer: 0,
      explanation: "From the positivity conditions of elastic constants Y, B, and η, the theoretical limits of Poisson's ratio σ are from -1 to +0.5.",
      topicId: "phys-poissons-ratio-elasticity",
      difficulty: "Easy",
      conceptTested: "Theoretical Limits of Poisson's Ratio",
      ncertReference: "NCERT Physics Class 11 Chapter 9 - Mechanical Properties of Solids",
      verified: true
    }
  ]
};
