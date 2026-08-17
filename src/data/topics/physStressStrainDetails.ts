import { DetailedTopicContent } from '../../types/neet';

export const physStressStrainDetails: DetailedTopicContent = {
  topicId: 'phys-stress-strain',
  topicName: "Stress, Strain & Hooke's Law",
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Properties of Bulk Matter',
  chapter: 'Mechanical Properties of Solids',

  whatIsThisTopic: 'When an external deforming force acts on a rigid body, the body undergoes a change in shape or size. In response, internal microscopic restoring forces develop between neighboring atoms to bring the body back to its original equilibrium configuration. Stress measures this internal restoring force per unit area, while strain quantifies the fractional deformation produced. Hooke\'s Law states that for small deformations within the elastic limit, stress is directly proportional to strain. This topic provides a thorough, NCERT-aligned, NEET UG module covering elastic and plastic behavior, types of stress and strain, Hooke\'s law, comprehensive stress-strain curve analysis, ductile/brittle classification, and high-yield NEET applications.',

  basicIdea: [
    'Elasticity is the property by virtue of which a material body tends to regain its original shape and size after the removal of external deforming forces. Plasticity is the inability to recover, resulting in permanent deformation.',
    'Stress is defined as the internal restoring force developed per unit cross-sectional area: Stress = F_restoring / A. In static equilibrium, restoring force equals external deforming force.',
    'Strain is the fractional change in dimension produced in the body: Strain = Change in dimension / Original dimension. It is a pure dimensionless scalar ratio.',
    'Hooke\'s Law: Within the elastic limit, Stress ∝ Strain (Stress = E × Strain, where E is the Modulus of Elasticity of the material).',
    'Stress-Strain Graph features key regions: Proportional Limit (A), Elastic Limit / Yield Point (B), Plastic Region, Ultimate Tensile Strength (D), and Breaking / Fracture Point (E).'
  ],

  importantTerms: [
    {
      term: 'Deforming Force',
      definition: 'An external force applied on a body that changes its physical dimensions (length, volume, or shape).'
    },
    {
      term: 'Restoring Force',
      definition: 'Internal molecular force developed inside a deformed body that opposes deformation and attempts to restore original dimensions.'
    },
    {
      term: 'Stress (σ or τ)',
      definition: 'Internal restoring force per unit cross-sectional area: σ = F / A. SI Unit: N/m² or Pascal (Pa). Dimensional Formula: [M L⁻¹ T⁻²].'
    },
    {
      term: 'Strain (ε or θ)',
      definition: 'Ratio of change in dimension to original dimension: Strain = ΔX / X. Pure number with no units or dimensions [M⁰ L⁰ T⁰].'
    },
    {
      term: 'Proportional Limit',
      definition: 'The maximum stress up to which stress is strictly proportional to strain, obeying Hooke\'s Law (straight-line graph).'
    },
    {
      term: 'Elastic Limit (Yield Point)',
      definition: 'The maximum stress up to which a material completely regains its original dimensions upon removal of the deforming force.'
    },
    {
      term: 'Permanent Set',
      definition: 'The residual permanent deformation remaining in a material when loaded beyond its elastic limit and then unloaded.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Elasticity, Deformation & Interatomic Restoring Forces',
      paragraphs: [
        'WHAT IS ELASTICITY?',
        'When an external deforming force is applied to a solid, its constituent atoms or molecules are displaced from their stable equilibrium positions. This alters the interatomic distances.',
        'WHY DOES IT HAPPEN? (INTERATOMIC POTENTIAL ENERGY CURVE)',
        'In a solid lattice, atoms reside at a balance position r₀ where interatomic potential energy U(r) is minimum and net interatomic force is zero. When pulled apart (r > r₀), attractive interatomic forces pull them back. When compressed (r < r₀), strong repulsive interatomic forces push them apart. This spring-like interatomic restoring behavior gives rise to macroscopically observable elasticity.',
        'ELASTIC VS PLASTIC BEHAVIOR:',
        '• Elastic Body: Completely recovers its original size and shape when deforming forces are removed (e.g., steel, quartz wire).',
        '• Plastic Body: Shows zero restoring tendency and retains deformation permanently (e.g., putty, paraffin wax, wet clay).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="180" fill="#f8fafc" rx="12"/>
          <text x="250" y="25" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="14">Interatomic Spring-Ball Model of Solid Lattice</text>
          <!-- Atoms row 1 -->
          <circle cx="100" cy="70" r="14" fill="#3b82f6"/>
          <circle cx="250" cy="70" r="14" fill="#3b82f6"/>
          <circle cx="400" cy="70" r="14" fill="#3b82f6"/>
          <!-- Atoms row 2 -->
          <circle cx="100" cy="140" r="14" fill="#3b82f6"/>
          <circle cx="250" cy="140" r="14" fill="#3b82f6"/>
          <circle cx="400" cy="140" r="14" fill="#3b82f6"/>
          <!-- Horizontal Springs -->
          <path d="M 114 70 Q 130 60 145 70 T 175 70 T 205 70 T 236 70" stroke="#64748b" fill="none" stroke-width="2"/>
          <path d="M 264 70 Q 280 60 295 70 T 325 70 T 355 70 T 386 70" stroke="#64748b" fill="none" stroke-width="2"/>
          <path d="M 114 140 Q 130 130 145 140 T 175 140 T 205 140 T 236 140" stroke="#64748b" fill="none" stroke-width="2"/>
          <path d="M 264 140 Q 280 130 295 140 T 325 140 T 355 140 T 386 140" stroke="#64748b" fill="none" stroke-width="2"/>
          <!-- Vertical Springs -->
          <path d="M 100 84 Q 90 95 100 105 T 100 126" stroke="#64748b" fill="none" stroke-width="2"/>
          <path d="M 250 84 Q 240 95 250 105 T 250 126" stroke="#64748b" fill="none" stroke-width="2"/>
          <path d="M 400 84 Q 390 95 400 105 T 400 126" stroke="#64748b" fill="none" stroke-width="2"/>
          <text x="175" y="55" font-size="11" fill="#475569" text-anchor="middle">Interatomic Spring (r₀)</text>
        </svg>`,
        caption: 'Microscopic origin of elasticity: Atoms held by interatomic spring-like bonds at equilibrium separation r₀.'
      }
    },
    {
      heading: '2. Classification of Stress',
      paragraphs: [
        'Stress is defined mathematically as:',
        'Stress = (Internal Restoring Force F) / (Cross-sectional Area A)',
        'In equilibrium under external deforming force F_ext, F_restoring = F_ext.',
        'SI Unit: N/m² or Pascal (Pa). Dimensional Formula: [M L⁻¹ T⁻²].',
        'TYPES OF STRESS:',
        '1. Normal Stress: Deforming force acts perpendicular (normal) to the surface area.',
        '   a) Tensile Stress: Forces stretch the body, increasing its length (e.g., pulling a wire).',
        '   b) Compressive Stress: Forces compress the body, decreasing its length (e.g., pushing a pillar).',
        '2. Tangential or Shearing Stress: Deforming force acts parallel (tangential) to the surface, altering shape without changing volume (e.g., pushing top cover of a book).',
        '3. Hydraulic / Volumetric Stress: Uniform fluid pressure acts perpendicular to every point of a submerged body, changing volume without altering geometric shape.'
      ]
    },
    {
      heading: '3. Classification of Strain & Dimensionless Nature',
      paragraphs: [
        'Strain quantifies relative deformation and is defined as:',
        'Strain = (Change in Dimension ΔX) / (Original Dimension X)',
        'Since strain is the ratio of two identical physical quantities (length/length, volume/volume), it is a PURE DIMENSIONLESS SCALAR (unitless and dimensionless: [M⁰ L⁰ T⁰]).',
        'TYPES OF STRAIN:',
        '1. Longitudinal Strain: Ratio of change in length ΔL to original length L.',
        '   Longitudinal Strain = ΔL / L',
        '2. Shearing Strain (θ): Angle of shear produced when a tangential force acts. Measured by angular displacement θ of a line originally perpendicular to fixed face:',
        '   Shearing Strain θ = Δx / h (where Δx is relative displacement of top face and h is height).',
        '3. Volumetric Strain: Ratio of change in volume ΔV to original volume V.',
        '   Volumetric Strain = ΔV / V'
      ]
    },
    {
      heading: '4. Hooke\'s Law & Detailed Stress-Strain Curve Analysis',
      paragraphs: [
        'HOOKE\'S LAW:',
        'Robert Hooke (1676) discovered experimentally that for small deformations within the elastic limit, stress is directly proportional to strain:',
        'Stress ∝ Strain  ⇒  Stress = Modulus of Elasticity (E) × Strain',
        'DETAILED REGION-BY-REGION ANALYSIS OF THE STRESS-STRAIN GRAPH:',
        '• Region OA (Proportional Region): Curve is a strict straight line from origin O to point A. Stress is directly proportional to strain. Slope = Young\'s Modulus Y. Point A is the Proportional Limit.',
        '• Region AB (Elastic Region): Curve is non-linear between A and B, but the material STILL recovers its original dimension completely when unloaded. Point B is the Elastic Limit or Yield Point (Yield Stress σ_y).',
        '• Region BC (Permanent Set): Beyond B, material enters plastic region. If unloaded at point C, the curve follows path C-O\' instead of C-O. When stress becomes zero, a residual strain OO\' remains. This is called Permanent Set (typically ~1% or less).',
        '• Region CD (Plastic Flow): Small increase in stress causes large increase in strain. Point D represents the Ultimate Tensile Strength (maximum stress material can withstand).',
        '• Region DE (Fracture / Breaking Point): Material necks down locally, stress drops, and material fractures at point E (Breaking Stress).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
          <rect width="520" height="280" fill="#f8fafc" rx="12"/>
          <text x="260" y="24" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="14">Standard Stress-Strain Curve for Metallic Wire</text>
          <!-- Axes -->
          <line x1="60" y1="230" x2="480" y2="230" stroke="#334155" stroke-width="2"/>
          <line x1="60" y1="230" x2="60" y2="40" stroke="#334155" stroke-width="2"/>
          <text x="475" y="250" font-size="12" fill="#334155" font-weight="bold">Strain (ε)</text>
          <text x="20" y="45" font-size="12" fill="#334155" font-weight="bold" transform="rotate(-90 20,45)">Stress (σ)</text>
          
          <!-- Curve O-A-B-C-D-E -->
          <!-- O(60,230) -> A(160,110) straight line -->
          <!-- A(160,110) -> B(210,85) slight bend -->
          <!-- B(210,85) -> D(360,60) peak -->
          <!-- D(360,60) -> E(430,95) drop to fracture -->
          <path d="M 60 230 L 160 110 Q 185 92 210 85 Q 280 65 360 60 Q 400 70 430 95" fill="none" stroke="#2563eb" stroke-width="3"/>
          
          <!-- Unloading path from C for permanent set -->
          <path d="M 270 75 L 120 230" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,4"/>
          
          <!-- Points and Labels -->
          <circle cx="60" cy="230" r="4" fill="#0f172a"/>
          <text x="50" y="245" font-size="11" fill="#0f172a" font-weight="bold">O</text>
          
          <circle cx="160" cy="110" r="4" fill="#2563eb"/>
          <text x="145" y="100" font-size="11" fill="#1e40af" font-weight="bold">A (Prop. Limit)</text>
          
          <circle cx="210" cy="85" r="4" fill="#2563eb"/>
          <text x="195" y="73" font-size="11" fill="#1e40af" font-weight="bold">B (Yield Point / σ_y)</text>
          
          <circle cx="360" cy="60" r="4" fill="#2563eb"/>
          <text x="340" y="48" font-size="11" fill="#1e40af" font-weight="bold">D (Tensile Strength)</text>
          
          <circle cx="430" cy="95" r="4" fill="#dc2626"/>
          <text x="435" y="110" font-size="11" fill="#dc2626" font-weight="bold">E (Fracture)</text>
          
          <circle cx="120" cy="230" r="3" fill="#dc2626"/>
          <text x="105" y="250" font-size="10" fill="#dc2626" font-weight="bold">O' (Permanent Set)</text>
        </svg>`,
        caption: 'Complete Stress-Strain Curve showing Proportional Limit (A), Yield Point (B), Tensile Strength (D), Fracture (E), and Permanent Set (O\').'
      }
    },
    {
      heading: '5. Ductile, Brittle Materials & Elastomers',
      paragraphs: [
        'CLASSIFICATION BASED ON STRESS-STRAIN BEHAVIOR:',
        '1. Ductile Materials: Possess a large plastic region between yield point B and fracture point E. Can be drawn into thin wires or hammered into sheets (e.g., copper, aluminum, mild steel, gold).',
        '2. Brittle Materials: Fracture point E lies very close to elastic limit B. Break suddenly with almost zero plastic deformation (e.g., glass, cast iron, ceramics).',
        '3. Elastomers: Materials that can be stretched to large strains (several hundred percent) and recover, but DO NOT obey Hooke\'s law (no linear region). Stress-strain curve has no sharp yield point (e.g., vulcanized rubber, tissue of aorta in human heart).'
      ]
    }
  ],

  formulae: [
    {
      title: "Stress Formula",
      formulaName: "Tensile / Compressive / Shearing Stress",
      formula: "σ = \\frac{F}{A}",
      expression: "σ = F / A",
      meaning: "Internal restoring force per unit cross-sectional area.",
      whatItRepresents: "Measures internal intensity of forces resisting deformation.",
      symbols: "σ = Stress (Pa or N/m²), F = Force (N), A = Area (m²).",
      unit: "N/m² or Pascal (Pa)",
      conditions: "System in static equilibrium under deforming force.",
      whenToUse: "Use to calculate load capacity, pressure, or internal force intensity in a wire/pillar.",
      calculationExample: {
        problem: "A steel wire of radius 1 mm supports a load of 3.14 kg. Find the tensile stress in the wire. (g = 10 m/s²)",
        given: "r = 1 mm = 10⁻³ m, m = 3.14 kg, g = 10 m/s²",
        stepByStep: [
          "1. Calculate weight F = m × g = 3.14 × 10 = 31.4 N.",
          "2. Calculate cross-sectional area A = π r² = 3.14 × (10⁻³)² = 3.14 × 10⁻⁶ m².",
          "3. Apply Stress formula: σ = F / A = 31.4 / (3.14 × 10⁻⁶) = 10⁷ N/m²."
        ],
        answer: "1.0 × 10⁷ N/m²"
      }
    },
    {
      title: "Longitudinal Strain Formula",
      formulaName: "Linear Strain",
      formula: "ε = \\frac{\\Delta L}{L}",
      expression: "ε = ΔL / L",
      meaning: "Fractional change in length.",
      whatItRepresents: "Measures length deformation relative to original length.",
      symbols: "ε = Strain, ΔL = Elongation / Compression (m), L = Original length (m).",
      unit: "Dimensionless (no unit)",
      conditions: "Uniform elongation or compression along longitudinal axis.",
      whenToUse: "Use whenever wire extension or rod compression percentage is given or asked."
    },
    {
      title: "Shearing Strain Formula",
      formulaName: "Angle of Shear",
      formula: "θ = \\frac{\\Delta x}{h}",
      expression: "θ = Δx / h",
      meaning: "Angular displacement between opposite faces separated by distance h.",
      whatItRepresents: "Quantifies shape change under tangential shearing force.",
      symbols: "θ = Shearing strain (radians), Δx = Relative displacement of top face (m), h = Height / distance between faces (m).",
      unit: "Radian (Dimensionless)"
    },
    {
      title: "Hooke's Law Formula",
      formulaName: "Stress-Strain Proportionality",
      formula: "σ = E \\cdot ε",
      expression: "Stress = E × Strain",
      meaning: "Within elastic limit, stress is directly proportional to strain.",
      whatItRepresents: "Linear elasticity law governed by Elastic Modulus E.",
      symbols: "σ = Stress, ε = Strain, E = Elastic Modulus of material.",
      unit: "E has unit N/m² (Pa)",
      conditions: "Valid strictly WITHIN THE ELASTIC LIMIT (proportional region)."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
      <rect width="500" height="160" fill="#f8fafc" rx="12"/>
      <!-- Longitudinal Stress -->
      <g transform="translate(40, 20)">
        <rect x="20" y="10" width="10" height="80" fill="#94a3b8"/>
        <line x1="25" y1="90" x2="25" y2="120" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow)"/>
        <text x="25" y="135" font-size="10" text-anchor="middle" fill="#dc2626" font-weight="bold">F (Tensile)</text>
        <text x="25" y="150" font-size="10" text-anchor="middle" fill="#1e293b">σ = F / A</text>
      </g>
      <!-- Shearing Stress -->
      <g transform="translate(190, 20)">
        <polygon points="20,90 80,90 100,20 40,20" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
        <line x1="40" y1="20" x2="80" y2="20" stroke="#2563eb" stroke-width="2"/>
        <text x="60" y="12" font-size="10" text-anchor="middle" fill="#2563eb" font-weight="bold">F (Tangential)</text>
        <text x="60" y="150" font-size="10" text-anchor="middle" fill="#1e293b">Shear Strain θ = Δx / h</text>
      </g>
      <!-- Hydraulic Stress -->
      <g transform="translate(360, 20)">
        <circle cx="50" cy="55" r="30" fill="#e2e8f0" stroke="#0284c7" stroke-width="2"/>
        <line x1="10" y1="55" x2="20" y2="55" stroke="#0284c7" stroke-width="2"/>
        <line x1="90" y1="55" x2="80" y2="55" stroke="#0284c7" stroke-width="2"/>
        <line x1="50" y1="15" x2="50" y2="25" stroke="#0284c7" stroke-width="2"/>
        <line x1="50" y1="95" x2="50" y2="85" stroke="#0284c7" stroke-width="2"/>
        <text x="50" y="150" font-size="10" text-anchor="middle" fill="#1e293b">Hydraulic Stress = ΔP</text>
      </g>
    </svg>`,
    caption: 'Visual comparisons of Longitudinal Tensile Stress, Shearing Stress, and Hydraulic Stress.'
  },

  neetImportantPoints: [
    "Strain is dimensionless [M⁰ L⁰ T⁰] while Stress has dimensions of pressure [M L⁻¹ T⁻²].",
    "Breaking stress depends ONLY on the material of the wire, NOT on its length or radius!",
    "Breaking LOAD (Force) = Breaking Stress × Cross-sectional Area = Breaking Stress × (π r²). Breaking load is proportional to r², independent of length L.",
    "The slope of the straight-line region (OA) on a Stress vs Strain graph gives the Young's Modulus Y.",
    "Ductile materials have large plastic region (D and E far apart); Brittle materials have small plastic region (D and E close together).",
    "Elastomers (like aorta tissue and rubber) do NOT obey Hooke's Law."
  ],

  commonConfusions: [
    {
      misconception: "Assuming breaking stress increases if a wire is made thicker or longer.",
      correction: "Breaking stress is an INTENSIVE material property (constant for a given material). Only breaking FORCE/LOAD increases with cross-sectional area (F_break = σ_break × A)."
    },
    {
      misconception: "Thinking elastomers are plastic because they stretch hundreds of percent.",
      correction: "Elastomers are ELASTIC because they recover their original shape when unloaded; they simply lack a linear Hookean region."
    },
    {
      misconception: "Confusing proportional limit with yield point.",
      correction: "Proportional limit A is the boundary of Hooke's law (straight line). Yield point B is the boundary of elastic recovery."
    }
  ],

  quickRevision: [
    "Stress σ = F/A [N/m², M L⁻¹ T⁻²] | Strain ε = ΔL/L [Dimensionless]",
    "Hooke's Law: Stress = E × Strain (valid within elastic limit)",
    "Breaking Force = Breaking Stress × Area (∝ r², independent of L)",
    "Ductile: Large plastic region | Brittle: Micro plastic region",
    "Elastomers: Non-linear elastic curve (e.g. Aorta, Rubber)"
  ],

  practiceQuestions: [
  {
    "id": "pq-stress-strain-1",
    "question": "A wire of length 2 m and cross-sectional area 1 mm² is stretched by a force of 100 N. If the Young's modulus of the wire is 2 × 10¹¹ N/m², the strain produced in the wire is:",
    "options": [
      "5 × 10⁻⁴",
      "2.5 × 10⁻⁴",
      "1 × 10⁻³",
      "5 × 10⁻³"
    ],
    "correctAnswer": 0,
    "difficulty": "Easy",
    "conceptTested": "Hooke's Law and Strain Calculation",
    "explanation": "Given: Force F = 100 N, Area A = 1 mm² = 10⁻⁶ m², Young's modulus Y = 2 × 10¹¹ N/m².\nStress = F / A = 100 / 10⁻⁶ = 10⁸ N/m².\nBy Hooke's Law: Stress = Y × Strain ⇒ Strain = Stress / Y = 10⁸ / (2 × 10¹¹) = 0.5 × 10⁻³ = 5 × 10⁻⁴."
  },
  {
    "id": "pq-stress-strain-2",
    "question": "A steel wire of diameter 2 mm can withstand a maximum breaking force of 400 N. What is the maximum breaking force that a steel wire of the same material having a diameter of 4 mm can withstand?",
    "options": [
      "400 N",
      "800 N",
      "1600 N",
      "3200 N"
    ],
    "correctAnswer": 2,
    "difficulty": "Medium",
    "conceptTested": "Breaking Load Dependence on Wire Diameter",
    "explanation": "Breaking stress σ_break is a material property and remains constant for steel.\nBreaking force F = σ_break × Area = σ_break × (π d² / 4) ⇒ F ∝ d².\nRatio: F₂ / F₁ = (d₂ / d₁)² = (4 / 2)² = 2² = 4.\nTherefore, F₂ = 4 × F₁ = 4 × 400 N = 1600 N."
  },
  {
    "id": "pq-stress-strain-3",
    "question": "A square aluminum block of side 10 cm and thickness 1 cm is subjected to a shearing force of 100 N on its top face, while the bottom face is fixed. If the shearing strain produced is 0.01 rad, the relative displacement of the top face is:",
    "options": [
      "1 mm",
      "0.1 mm",
      "0.01 mm",
      "10 mm"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Shearing Strain Formula θ = Δx / h",
    "explanation": "Given: Height / distance between opposite faces h = 10 cm = 0.1 m.\nShearing strain θ = 0.01 rad.\nFormula: θ = Δx / h ⇒ Δx = θ × h = 0.01 × 0.1 m = 0.001 m = 1 mm."
  },
  {
    "id": "pq-stress-strain-4",
    "question": "Two wires A and B are made of the same material. Wire A has length L and radius r, while wire B has length 2L and radius 2r. If both wires are stretched by equal forces F, the ratio of strain in A to strain in B (ε_A / ε_B) is:",
    "options": [
      "1 : 1",
      "2 : 1",
      "4 : 1",
      "1 : 4"
    ],
    "correctAnswer": 2,
    "difficulty": "Medium",
    "conceptTested": "Stress and Strain Scaling with Dimensions",
    "explanation": "Same material ⇒ same Young's modulus Y.\nStrain = Stress / Y = F / (A Y) = F / (π r² Y).\nNotice that strain depends ONLY on force F and radius r, independent of wire length L!\nε_A = F / (π r² Y)\nε_B = F / (π (2r)² Y) = F / (4 π r² Y) = ε_A / 4.\nTherefore, ε_A / ε_B = 4 : 1."
  },
  {
    "id": "prac-physstressstrain-5",
    "question": "Regarding Stress, Strain & Hooke's Law, which of the following statements correctly resolves a common misconception about \"Assuming breaking stress increases if a wire is made thicker or longer.\"?",
    "options": [
      "Breaking stress is an INTENSIVE material property (constant for a given material). Only breaking FORCE/LOAD increases with cross-sectional area (F_break = σ_break × A).",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Stress, Strain & Hooke's Law - Conceptual Clarity"
  },
  {
    "id": "prac-physstressstrain-6",
    "question": "Regarding Stress, Strain & Hooke's Law, which of the following statements correctly resolves a common misconception about \"Thinking elastomers are plastic because they stretch hundreds of percent.\"?",
    "options": [
      "Elastomers are ELASTIC because they recover their original shape when unloaded; they simply lack a linear Hookean region.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Stress, Strain & Hooke's Law - Conceptual Clarity"
  },
  {
    "id": "prac-physstressstrain-7",
    "question": "Regarding Stress, Strain & Hooke's Law, which of the following statements correctly resolves a common misconception about \"Confusing proportional limit with yield point.\"?",
    "options": [
      "Proportional limit A is the boundary of Hooke's law (straight line). Yield point B is the boundary of elastic recovery.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Stress, Strain & Hooke's Law - Conceptual Clarity"
  },
  {
    "id": "prac-physstressstrain-8",
    "question": "In the study of Stress, Strain & Hooke's Law, what is the exact definition and significance of \"Deforming Force\"?",
    "options": [
      "An external force applied on a body that changes its physical dimensions (length, volume, or shape).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "An external force applied on a body that changes its physical dimensions (length, volume, or shape).. ",
    "difficulty": "Easy",
    "conceptTested": "Deforming Force definition"
  },
  {
    "id": "prac-physstressstrain-9",
    "question": "In the study of Stress, Strain & Hooke's Law, what is the exact definition and significance of \"Restoring Force\"?",
    "options": [
      "Internal molecular force developed inside a deformed body that opposes deformation and attempts to restore original dimensions.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Internal molecular force developed inside a deformed body that opposes deformation and attempts to restore original dimensions.. ",
    "difficulty": "Easy",
    "conceptTested": "Restoring Force definition"
  },
  {
    "id": "prac-physstressstrain-10",
    "question": "In the study of Stress, Strain & Hooke's Law, what is the exact definition and significance of \"Stress (σ or τ)\"?",
    "options": [
      "Internal restoring force per unit cross-sectional area: σ = F / A. SI Unit: N/m² or Pascal (Pa). Dimensional Formula: [M L⁻¹ T⁻²].",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Internal restoring force per unit cross-sectional area: σ = F / A. SI Unit: N/m² or Pascal (Pa). Dimensional Formula: [M L⁻¹ T⁻²].. ",
    "difficulty": "Easy",
    "conceptTested": "Stress (σ or τ) definition"
  }
],
  pyqs: [
    {
      id: "pyq-stress-strain-1",
      year: 2020,
      exam: "NEET UG",
      question: "The stress-strain curves are drawn for two different materials X and Y. It is observed that the ultimate strength point and the fracture point are close to each other for material X, but are far apart for material Y. We can conclude that materials X and Y are respectively:",
      options: [
        "Ductile and brittle",
        "Brittle and ductile",
        "Brittle and plastic",
        "Plastic and ductile"
      ],
      correctAnswer: 1,
      explanation: "For material X: Ultimate tensile strength point and fracture point are close to each other ⇒ very small plastic region ⇒ material X is BRITTLE.\nFor material Y: Ultimate tensile strength point and fracture point are far apart ⇒ large plastic region ⇒ material Y is DUCTILE.\nHence, X and Y are brittle and ductile respectively.",
      topicId: "phys-stress-strain",
      difficulty: "Easy",
      conceptTested: "Ductile vs Brittle Classification from Stress-Strain Curve",
      ncertReference: "NCERT Physics Class 11 Chapter 9 - Mechanical Properties of Solids",
      verified: true
    },
    {
      id: "pyq-stress-strain-2",
      year: 2019,
      exam: "NEET UG",
      question: "When a block of mass M is suspended by a long wire of length L and cross-sectional area A, the length of the wire becomes (L + l). The elastic potential energy stored in the stretched wire is:",
      options: [
        "M g l",
        "1/2 M g l",
        "1/2 M g L",
        "M g L"
      ],
      correctAnswer: 1,
      explanation: "Stretching force F = M g. Elongation produced ΔL = l.\nElastic potential energy stored in a stretched wire U = 1/2 × Force × Extension = 1/2 × (M g) × l = 1/2 M g l.",
      topicId: "phys-stress-strain",
      difficulty: "Easy",
      conceptTested: "Energy Stored in Stretched Wire",
      ncertReference: "NCERT Physics Class 11 Chapter 9 - Mechanical Properties of Solids",
      verified: true
    }
  ]
};
