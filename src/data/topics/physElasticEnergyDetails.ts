import { DetailedTopicContent } from '../../types/neet';

export const physElasticEnergyDetails: DetailedTopicContent = {
  topicId: 'phys-elastic-energy-apps',
  topicName: 'Elastic Energy & Applications',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Properties of Bulk Matter',
  chapter: 'Mechanical Properties of Solids',

  whatIsThisTopic: 'When a wire is stretched by an external force, work is done against internal interatomic forces. This work is stored within the body as elastic potential energy. The strain energy density (energy per unit volume) depends directly on the product of stress and strain. Beyond fundamental energy calculations, elasticity plays a vital role in real-world structural engineering, such as thermal stress in clamped rods, spring equivalences, beam bending and sagging (I-beam girders), calculating the maximum height of mountains on Earth, and designing safe crane wire ropes. This NCERT-aligned NEET module provides comprehensive derivations, engineering applications, formulas, practice questions, and verified PYQs.',

  basicIdea: [
    'Work done in stretching a wire by length ΔL: W = 1/2 × Force × Extension = 1/2 × F × ΔL.',
    'Elastic Potential Energy U = (1/2) · (Y A / L) · (ΔL)².',
    'Elastic Energy Density u = Energy / Volume = 1/2 × Stress × Strain = 1/2 × Y × (Strain)² = (Stress)² / (2Y).',
    'Area under the Force vs Extension (F-x) graph equals the total work done / stored elastic energy.',
    'Thermal Stress in a clamped rod whose thermal expansion is prevented: Thermal Strain = α ΔT, Thermal Stress = Y α ΔT, Thermal Force = Y A α ΔT.',
    'Spring Equivalence: A wire behaves like a spring of force constant k = (Y A) / L.',
    'Beam Bending / Sagging: Sag δ = (W L³) / (4 Y b d³). Cross-section with large depth d minimizes sag (I-shaped girders).',
    'Max Mountain Height on Earth: h_max = σ_yield / (ρ g) ≈ (3 × 10⁸) / (10³ × 10) = 10 km (e.g. Mt. Everest ~ 8.8 km).'
  ],

  importantTerms: [
    {
      term: 'Elastic Potential Energy (U)',
      definition: 'Work done against interatomic restoring forces in deforming a body, stored as potential energy: U = 1/2 × F × ΔL.'
    },
    {
      term: 'Elastic Energy Density (u)',
      definition: 'Elastic potential energy stored per unit volume of the deformed body: u = 1/2 × Stress × Strain. SI Unit: J/m³.'
    },
    {
      term: 'Thermal Stress',
      definition: 'Internal stress developed in a rigid body when its natural thermal expansion or contraction is prevented by rigid supports: σ_th = Y α ΔT.'
    },
    {
      term: 'Equivalent Spring Constant (k)',
      definition: 'Stiffness of an elastic wire: k = (Y A) / L, analogous to a spring obeying Hooke\'s law F = k x.'
    },
    {
      term: 'I-Section Girder',
      definition: 'A structural beam with an I-shaped cross section designed to maximize depth d and moment of inertia, minimizing bending sag δ = (W L³) / (4 Y b d³) while reducing weight.'
    },
    {
      term: 'Safety Factor',
      definition: 'The ratio of ultimate breaking stress to allowable working stress in engineering design: Safety Factor = Breaking Stress / Working Stress.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Derivation of Stored Elastic Potential Energy & Energy Density',
      paragraphs: [
        'DERIVATION OF WORK DONE IN STRETCHING:',
        'Consider a wire of original length L and cross-sectional area A. When the extension at any instant is x, the stretching force F(x) required according to Hooke\'s law is:',
        'F(x) = (Y A / L) · x',
        'Work done dW in producing an infinitesimal further extension dx is:',
        'dW = F(x) dx = (Y A / L) x dx',
        'Total work done W in extending the wire from x = 0 to x = ΔL:',
        'W = ∫₀^{ΔL} (Y A / L) x dx = (Y A / L) [ x² / 2 ]₀^{ΔL} = 1/2 · (Y A / L) · (ΔL)²',
        'Since F_max = (Y A / L) · ΔL, we can rewrite W as:',
        'W = 1/2 · F · ΔL = 1/2 × (Max Force) × (Total Extension)',
        'ELASTIC ENERGY DENSITY (u):',
        'Energy density u is defined as stored energy per unit volume V (V = A · L):',
        'u = W / V = [ 1/2 · F · ΔL ] / [ A · L ] = 1/2 · (F / A) · (ΔL / L)',
        'u = 1/2 × Stress × Strain',
        'Alternative expressions using Stress = Y × Strain:',
        '1) u = 1/2 · Y · (Strain)²',
        '2) u = (Stress)² / (2 Y)',
        'CRITICAL NEET WORK-ENERGY PARADOX:',
        'When a weight W = M g is suspended from a wire, work done BY GRAVITY is W_gravity = M g ΔL. But energy stored IN THE WIRE is U = 1/2 M g ΔL. Where did the remaining half (1/2 M g ΔL) go? It was dissipated as HEAT during damped oscillations when the weight settled!'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="180" fill="#f8fafc" rx="12"/>
          <text x="250" y="25" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="14">Force vs Extension Graph & Stored Energy</text>
          
          <!-- Axes -->
          <line x1="60" y1="140" x2="440" y2="140" stroke="#334155" stroke-width="2"/>
          <line x1="60" y1="140" x2="60" y2="40" stroke="#334155" stroke-width="2"/>
          <text x="435" y="160" font-size="11" fill="#334155" font-weight="bold">Extension (x)</text>
          <text x="25" y="45" font-size="11" fill="#334155" font-weight="bold" transform="rotate(-90 25,45)">Force (F)</text>

          <!-- Linear curve and Shaded Area -->
          <polygon points="60,140 360,50 360,140" fill="#3b82f6" fill-opacity="0.2"/>
          <line x1="60" y1="140" x2="360" y2="50" stroke="#2563eb" stroke-width="3"/>
          <line x1="360" y1="50" x2="360" y2="140" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>

          <!-- Text Labels -->
          <text x="230" y="115" font-size="12" fill="#1e40af" font-weight="bold">Area = 1/2 F ΔL</text>
          <text x="230" y="130" font-size="10" fill="#1e40af">(Stored Elastic Energy)</text>
          <text x="360" y="155" font-size="11" fill="#dc2626" font-weight="bold" text-anchor="middle">ΔL</text>
          <text x="375" y="55" font-size="11" fill="#2563eb" font-weight="bold">F</text>
        </svg>`,
        caption: 'The triangular area under the Force-Extension (F-x) graph equals stored elastic energy U = 1/2 F ΔL.'
      }
    },
    {
      heading: '2. Thermal Stress & Thermal Strain in Clamped Rods',
      paragraphs: [
        'DERIVATION:',
        'Consider a metallic rod of length L, cross-sectional area A, coefficient of linear expansion α, and Young\'s modulus Y fixed rigidly between two unyielding walls.',
        'If temperature is increased by ΔT, the rod attempts to expand naturally by:',
        'ΔL_thermal = L · α · ΔT',
        'Since rigid walls prevent this expansion, the effective compressive strain forced upon the rod is:',
        'Thermal Strain = ΔL_thermal / L = (L α ΔT) / L = α · ΔT',
        'Corresponding Thermal Stress developed in the rod:',
        'Thermal Stress = Y × Thermal Strain = Y · α · ΔT',
        'Thermal Force exerted by the rod on rigid supports:',
        'F_thermal = Stress × Area = Y · A · α · ΔT'
      ]
    },
    {
      heading: '3. Spring Analogy & Combinations of Wires',
      paragraphs: [
        'EQUIVALENT SPRING CONSTANT k:',
        'For an elastic wire, F = (Y A / L) · ΔL. Comparing with spring law F = k x:',
        'Equivalent Spring Constant k = (Y A) / L',
        'SERIES & PARALLEL COMBINATIONS:',
        '• Series Combination (two wires joined end to end, same tension F):',
        '  1 / k_eq = 1 / k₁ + 1 / k₂   ⇒   L_eq / (Y_eq A_eq) = L₁ / (Y₁ A₁) + L₂ / (Y₂ A₂)',
        '• Parallel Combination (two wires side by side, same extension ΔL):',
        '  k_eq = k₁ + k₂   ⇒   Y_eq A_eq / L_eq = Y₁ A₁ / L₁ + Y₂ A₂ / L₂',
        'CUTTING AN ELASTIC WIRE / SPRING:',
        'Since k = Y A / L, force constant k is inversely proportional to length (k ∝ 1/L).',
        'If a wire/spring of constant k is cut into two pieces of length ratio m : n, the new spring constants become:',
        'k₁ = [ (m + n) / m ] · k   and   k₂ = [ (m + n) / n ] · k'
      ]
    },
    {
      heading: '4. Practical Engineering Applications of Elasticity',
      paragraphs: [
        '1. BEAM BENDING & SAGGING (I-BEAM GIRDERS):',
        'A rectangular beam of length L, breadth b, and depth d loaded at its center by weight W bends with central depression (sag) δ:',
        'δ = (W · L³) / (4 · Y · b · d³)',
        'To minimize sag δ for a given load W:',
        '• Increasing depth d is far more effective than increasing breadth b because δ ∝ 1/d³ while δ ∝ 1/b!',
        '• Therefore, girders are designed with an I-shaped cross section (I-beam) to maximize depth d while keeping weight low and avoiding buckling.',
        '2. MAXIMUM HEIGHT OF A MOUNTAIN ON EARTH:',
        'At the base of a mountain of height h, the rock is subjected to a vertical stress σ = ρ g h (where ρ ≈ 3 × 10³ kg/m³ is rock density).',
        'For the mountain not to sink under its own weight, this stress must not exceed the elastic limit / yield strength of rock (σ_yield ≈ 3 × 10⁸ N/m²):',
        'ρ g h_max ≤ σ_yield   ⇒   h_max = σ_yield / (ρ g)',
        'h_max ≈ (3 × 10⁸ N/m²) / (3 × 10³ kg/m³ × 10 m/s²) = 10,000 m = 10 km',
        'This explains why no mountain on Earth can exceed ~10 km in height! (Mt. Everest is ~8.8 km).',
        '3. CRANE METALLIC ROPES:',
        'Cranes use braided multi-strand steel wire ropes to increase flexibility while maintaining huge cross-sectional area. Working load is designed well below breaking load using a Safety Factor (typically 5 to 10).'
      ]
    }
  ],

  formulae: [
    {
      title: "Stored Elastic Potential Energy Formula",
      formulaName: "Stretched Wire Energy",
      formula: "U = \\frac{1}{2} F \\Delta L = \\frac{1}{2} \\frac{Y A (\\Delta L)^2}{L}",
      expression: "U = 1/2 F ΔL",
      meaning: "Total work stored in stretched wire.",
      whatItRepresents: "Elastic strain energy.",
      symbols: "U = Energy (J), F = Stretching force (N), ΔL = Extension (m).",
      unit: "Joule (J)"
    },
    {
      title: "Elastic Energy Density Formula",
      formulaName: "Energy per Unit Volume",
      formula: "u = \\frac{1}{2} \\sigma \\varepsilon = \\frac{1}{2} Y \\varepsilon^2 = \\frac{\\sigma^2}{2Y}",
      expression: "u = 1/2 × Stress × Strain",
      meaning: "Elastic energy stored per unit volume of deformed body.",
      whatItRepresents: "Volumetric energy density.",
      symbols: "u = Energy density (J/m³), σ = Stress, ε = Strain, Y = Young's modulus.",
      unit: "J/m³ or Pa"
    },
    {
      title: "Thermal Stress & Force Formula",
      formulaName: "Prevented Expansion Stress",
      formula: "\\sigma_{\\text{th}} = Y \\alpha \\Delta T, \\quad F_{\\text{th}} = Y A \\alpha \\Delta T",
      expression: "Thermal Stress = Y α ΔT",
      meaning: "Stress developed when thermal expansion is completely constrained.",
      whatItRepresents: "Thermal expansion force in fixed structures.",
      symbols: "Y = Young's modulus, α = Coeff. of linear expansion (K⁻¹), ΔT = Temp change (K)."
    },
    {
      title: "Beam Bending Sag Formula",
      formulaName: "Central Depression of Bending Beam",
      formula: "\\delta = \\frac{W L^3}{4 Y b d^3}",
      expression: "δ = (W L³) / (4 Y b d³)",
      meaning: "Central sag of a loaded beam of rectangular cross section.",
      whatItRepresents: "Deflection of structural beam.",
      symbols: "δ = Sag (m), W = Load (N), L = Length, b = Breadth, d = Depth, Y = Young's modulus."
    },
    {
      title: "Maximum Mountain Height Formula",
      formulaName: "Yield Limit of Planetary Mountain",
      formula: "h_{\\text{max}} = \\frac{\\sigma_{\\text{yield}}}{\\rho g}",
      expression: "h_max = σ_yield / (ρ g)",
      meaning: "Maximum supportable mountain height on a planet.",
      whatItRepresents: "Gravitational yield boundary.",
      symbols: "h_max = Max height (m), σ_yield = Yield stress of rock (Pa), ρ = Density (kg/m³), g = Gravity."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
      <rect width="500" height="160" fill="#f8fafc" rx="12"/>
      <!-- I-Beam Girder Cross Section -->
      <g transform="translate(60, 20)">
        <path d="M 10 10 L 90 10 L 90 30 L 60 30 L 60 90 L 90 90 L 90 110 L 10 110 L 10 90 L 40 90 L 40 30 L 10 30 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
        <text x="50" y="135" font-size="11" fill="#0f172a" font-weight="bold" text-anchor="middle">I-Section Girder</text>
        <text x="50" y="148" font-size="9" fill="#475569" text-anchor="middle">Large depth d → Min Sag</text>
      </g>
      <!-- Mountain Height Limit -->
      <g transform="translate(280, 20)">
        <polygon points="100,20 30,120 170,120" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
        <line x1="100" y1="20" x2="100" y2="120" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
        <text x="105" y="70" font-size="10" fill="#dc2626" font-weight="bold">h_max ≈ 10 km</text>
        <text x="100" y="140" font-size="11" fill="#0f172a" font-weight="bold" text-anchor="middle">Max Mountain Height</text>
        <text x="100" y="152" font-size="9" fill="#475569" text-anchor="middle">h = σ_yield / (ρ g)</text>
      </g>
    </svg>`,
    caption: 'Engineering applications of elasticity: I-girder cross-section and maximum mountain height calculation.'
  },

  neetImportantPoints: [
    "Energy stored in stretched wire U = 1/2 F ΔL = 1/2 k (ΔL)².",
    "Energy density u = 1/2 × Stress × Strain = (Stress)² / (2Y) = 1/2 Y (Strain)².",
    "When a weight W = Mg stretches a wire by ΔL, work done by gravity is Mg ΔL, but stored elastic energy is 1/2 Mg ΔL; 50% is lost as heat!",
    "Thermal stress σ_th = Y α ΔT is independent of length L or area A of the rod.",
    "Central depression (sag) of beam δ = (W L³) / (4 Y b d³). Sag is inversely proportional to d³ (depth cubed).",
    "Maximum mountain height on Earth h_max ≈ σ_yield / (ρ g) ≈ 10 km."
  ],

  commonConfusions: [
    {
      misconception: "Assuming thermal stress depends on the length of the rod.",
      correction: "Thermal stress σ = Y α ΔT is completely INDEPENDENT of the rod's length L and area A!"
    },
    {
      misconception: "Confusing total work done by load with stored elastic energy.",
      correction: "Work done by suspended load = Mg ΔL. Stored elastic potential energy = 1/2 Mg ΔL."
    },
    {
      misconception: "Thinking cutting a spring in half reduces its spring constant.",
      correction: "Spring constant k ∝ 1/L. Cutting a spring in half DOUBLES its spring constant (k_new = 2 k)!"
    }
  ],

  quickRevision: [
    "U = 1/2 F ΔL = 1/2 (Y A / L) (ΔL)² | Energy Density u = 1/2 σ ε = σ² / (2Y)",
    "Thermal Stress: σ_th = Y α ΔT | Thermal Force: F_th = Y A α ΔT",
    "Wire stiffness: k = Y A / L | k ∝ 1/L",
    "Beam Sag: δ = (W L³) / (4 Y b d³) (I-beam maximizes depth d)",
    "Mountain Height Limit: h_max = σ_yield / (ρ g) ≈ 10 km"
  ],

  practiceQuestions: [
  {
    "id": "pq-elastic-energy-1",
    "question": "A steel wire of length 2.0 m and cross-sectional area 2.0 mm² is stretched by 1.0 mm. If Young's modulus of steel is 2.0 × 10¹¹ N/m², the elastic potential energy stored in the wire is:",
    "options": [
      "0.10 J",
      "0.20 J",
      "0.05 J",
      "0.40 J"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Stored Elastic Potential Energy U = 1/2 (Y A / L) (ΔL)²",
    "explanation": "Given: L = 2.0 m, A = 2.0 mm² = 2.0 × 10⁻⁶ m², ΔL = 1.0 mm = 1.0 × 10⁻³ m, Y = 2.0 × 10¹¹ N/m².\nFormula: U = 1/2 · (Y A / L) · (ΔL)²\nSubstitute values:\nU = 1/2 · [ (2.0 × 10¹¹ × 2.0 × 10⁻⁶) / 2.0 ] · (1.0 × 10⁻³)²\nU = 1/2 · [ 2.0 × 10⁵ ] · (1.0 × 10⁻⁶) = 1/2 · (0.20) = 0.10 J."
  },
  {
    "id": "pq-elastic-energy-2",
    "question": "A steel rod of cross-sectional area 4 cm² and length 1 m is clamped rigidly between two fixed walls at 20°C. If the temperature is raised to 100°C, the thermal force exerted by the rod on the walls is: (Y = 2 × 10¹¹ N/m², α = 1.2 × 10⁻⁵ K⁻¹)",
    "options": [
      "76.8 kN",
      "38.4 kN",
      "153.6 kN",
      "19.2 kN"
    ],
    "correctAnswer": 0,
    "difficulty": "Hard",
    "conceptTested": "Thermal Force F_th = Y A α ΔT",
    "explanation": "Given: A = 4 cm² = 4 × 10⁻⁴ m², ΔT = 100 - 20 = 80 K, Y = 2 × 10¹¹ N/m², α = 1.2 × 10⁻⁵ K⁻¹.\nFormula: Thermal Force F_th = Y · A · α · ΔT\nF_th = (2 × 10¹¹) × (4 × 10⁻⁴) × (1.2 × 10⁻⁵) × 80\nF_th = (8 × 10⁷) × (1.2 × 10⁻⁵) × 80 = 960 × 80 = 76,800 N = 76.8 kN."
  },
  {
    "id": "pq-elastic-energy-3",
    "question": "Two wires A and B are made of the same material and have equal volumes. Wire A has cross-sectional area A and wire B has cross-sectional area 3A. If both wires are stretched by the same force F within elastic limit, the ratio of energy stored in A to energy stored in B (U_A / U_B) is:",
    "options": [
      "9 : 1",
      "3 : 1",
      "1 : 9",
      "1 : 3"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Stored Energy in Terms of Force, Volume, and Area",
    "explanation": "Volume V = A · L ⇒ L = V / A.\nStored Energy U = 1/2 · F · ΔL = 1/2 · F · (F L / A Y) = (F² L) / (2 A Y) = (F² V) / (2 A² Y).\nSince force F, volume V, and Young's modulus Y are identical for both wires:\nU ∝ 1 / A².\nRatio U_A / U_B = (A_B / A_A)² = (3A / A)² = 3² = 9 : 1."
  },
  {
    "id": "pq-elastic-energy-4",
    "question": "A uniform metallic beam of rectangular cross-section bends under a central load W. To reduce the central sag δ by a factor of 8 without changing the length, load, material, or breadth of the beam, the depth d of the beam must be:",
    "options": [
      "Doubled (2d)",
      "Quadrupled (4d)",
      "Increased 8 times (8d)",
      "Halved (d/2)"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "conceptTested": "Beam Sagging Formula δ ∝ 1/d³",
    "explanation": "Central sag formula: δ = (W L³) / (4 Y b d³) ⇒ δ ∝ 1 / d³.\nTo get δ_new = δ / 8:\n1 / d_new³ = (1 / 8) · (1 / d³) = 1 / (2d)³ ⇒ d_new = 2d.\nTherefore, doubling the depth d reduces the central sag by a factor of 8!"
  },
  {
    "id": "prac-physelasticenergyapps-5",
    "question": "Regarding Elastic Energy & Applications, which of the following statements correctly resolves a common misconception about \"Assuming thermal stress depends on the length of the rod.\"?",
    "options": [
      "Thermal stress σ = Y α ΔT is completely INDEPENDENT of the rod's length L and area A!",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Elastic Energy & Applications - Conceptual Clarity"
  },
  {
    "id": "prac-physelasticenergyapps-6",
    "question": "Regarding Elastic Energy & Applications, which of the following statements correctly resolves a common misconception about \"Confusing total work done by load with stored elastic energy.\"?",
    "options": [
      "Work done by suspended load = Mg ΔL. Stored elastic potential energy = 1/2 Mg ΔL.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Elastic Energy & Applications - Conceptual Clarity"
  },
  {
    "id": "prac-physelasticenergyapps-7",
    "question": "Regarding Elastic Energy & Applications, which of the following statements correctly resolves a common misconception about \"Thinking cutting a spring in half reduces its spring constant.\"?",
    "options": [
      "Spring constant k ∝ 1/L. Cutting a spring in half DOUBLES its spring constant (k_new = 2 k)!",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Elastic Energy & Applications - Conceptual Clarity"
  },
  {
    "id": "prac-physelasticenergyapps-8",
    "question": "In the study of Elastic Energy & Applications, what is the exact definition and significance of \"Elastic Potential Energy (U)\"?",
    "options": [
      "Work done against interatomic restoring forces in deforming a body, stored as potential energy: U = 1/2 × F × ΔL.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Work done against interatomic restoring forces in deforming a body, stored as potential energy: U = 1/2 × F × ΔL.. ",
    "difficulty": "Easy",
    "conceptTested": "Elastic Potential Energy (U) definition"
  },
  {
    "id": "prac-physelasticenergyapps-9",
    "question": "In the study of Elastic Energy & Applications, what is the exact definition and significance of \"Elastic Energy Density (u)\"?",
    "options": [
      "Elastic potential energy stored per unit volume of the deformed body: u = 1/2 × Stress × Strain. SI Unit: J/m³.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Elastic potential energy stored per unit volume of the deformed body: u = 1/2 × Stress × Strain. SI Unit: J/m³.. ",
    "difficulty": "Easy",
    "conceptTested": "Elastic Energy Density (u) definition"
  },
  {
    "id": "prac-physelasticenergyapps-10",
    "question": "In the study of Elastic Energy & Applications, what is the exact definition and significance of \"Thermal Stress\"?",
    "options": [
      "Internal stress developed in a rigid body when its natural thermal expansion or contraction is prevented by rigid supports: σ_th = Y α ΔT.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Internal stress developed in a rigid body when its natural thermal expansion or contraction is prevented by rigid supports: σ_th = Y α ΔT.. ",
    "difficulty": "Easy",
    "conceptTested": "Thermal Stress definition"
  }
],
  pyqs: [
    {
      id: "pyq-elastic-energy-1",
      year: 2019,
      exam: "NEET UG",
      question: "Two wires are made of the same material and have the same volume. The first wire has cross-sectional area A and the second wire has cross-sectional area 3A. If the length of the first wire is increased by Δl on applying a force F, how much force is needed to stretch the second wire by the same amount Δl?",
      options: [
        "9 F",
        "6 F",
        "4 F",
        "F"
      ],
      correctAnswer: 0,
      explanation: "Volume V = A₁ L₁ = A₂ L₂ ⇒ L₂ / L₁ = A₁ / A₂ = A / (3A) = 1/3.\nForce formula: F = (Y A Δl) / L.\nFor wire 1: F = (Y A Δl) / L₁.\nFor wire 2: F₂ = (Y A₂ Δl) / L₂ = [ Y (3A) Δl ] / [ L₁ / 3 ] = 9 · [ (Y A Δl) / L₁ ] = 9 F.",
      topicId: "phys-elastic-energy-apps",
      difficulty: "Medium",
      conceptTested: "Wire Extension Scaling with Area and Volume",
      ncertReference: "NCERT Physics Class 11 Chapter 9 - Mechanical Properties of Solids",
      verified: true
    },
    {
      id: "pyq-elastic-energy-2",
      year: 2020,
      exam: "NEET UG",
      question: "A wire of length L, area of cross section A is suspended vertically. A mass m is suspended from its free end, extending the wire by ΔL. The elastic energy density stored in the stretched wire is:",
      options: [
        "(1/2) (m g ΔL) / (A L)",
        "(m g ΔL) / (A L)",
        "(1/2) (m g) / (A L)",
        "(1/2) (m g ΔL)"
      ],
      correctAnswer: 0,
      explanation: "Stored Energy U = 1/2 · F · ΔL = 1/2 · (m g) · ΔL.\nVolume of wire V = A · L.\nElastic Energy Density u = U / V = [ 1/2 · m g · ΔL ] / [ A · L ] = (1/2) (m g ΔL) / (A L).",
      topicId: "phys-elastic-energy-apps",
      difficulty: "Easy",
      conceptTested: "Elastic Energy Density Formula",
      ncertReference: "NCERT Physics Class 11 Chapter 9 - Mechanical Properties of Solids",
      verified: true
    }
  ]
};
