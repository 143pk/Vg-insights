import { DetailedTopicContent } from '../../types/neet'

export const physUnitsDimensionalAnalysisDetails: DetailedTopicContent = {
  topicId: 'phys-units-dimensional-analysis',
  topicName: 'Dimensional Analysis & Applications',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Physics & Measurement',
  chapter: 'Units and Measurements',

  whatIsThisTopic: 'Dimensions represent the physical nature of a quantity regardless of the measurement units used. Dimensional analysis is one of the most powerful analytical tools in NEET Physics, allowing students to check the mathematical consistency of equations, derive functional relationships between physical variables, determine the dimensions and units of unknown physical constants, convert numerical values between unit systems, and quickly eliminate incorrect options in complex numerical questions. This topic covers the definition of dimensions, master reference tables, high-yield groups of identical dimensions, the Principle of Homogeneity, four major applications, and the five fundamental limitations of dimensional analysis.',

  basicIdea: [
    '1. Dimensions of a Physical Quantity: The powers (or exponents) to which the fundamental base quantities (Mass [M], Length [L], Time [T], Current [A], Temperature [K], Amount of substance [mol], Luminous intensity [cd]) must be raised to express that physical quantity.',
    '2. Dimensional Formula & Equation: An expression showing how and which base quantities enter into a physical quantity. Example: Force = [M¹ L¹ T⁻²]. An equation equating a physical quantity to its dimensional formula is a dimensional equation.',
    '3. Principle of Homogeneity of Dimensions: In any physically valid equation A = B + C, every individual term added, subtracted, or equated MUST possess identical dimensions: [A] = [B] = [C].',
    '4. Dimensionless Functions: Arguments of trigonometric functions (sin θ, cos θ), exponential functions (eˣ), logarithmic functions (ln x), and power exponents MUST BE DIMENSIONLESS ([M⁰ L⁰ T⁰]).',
    '5. Limitations of Dimensional Analysis: Dimensional analysis CANNOT determine dimensionless numerical constants (e.g., 1/2, 2π), cannot derive equations involving trigonometric/exponential terms, fails if a mechanical quantity depends on more than 3 variables, cannot distinguish scalars from vectors sharing the same dimensions (e.g., Work vs Torque), and cannot guarantee physical correctness.'
  ],

  importantTerms: [
    {
      term: 'Dimension',
      symbol: '[M^a L^b T^c A^d K^e]',
      definition: 'The exponent to which a base quantity is raised to represent a derived physical quantity.',
      neetNote: 'Dimensions depend purely on the physical nature of the quantity, independent of unit systems!'
    },
    {
      term: 'Dimensional Formula',
      definition: 'An expression showing which fundamental base quantities and what powers enter into the definition of a physical quantity.',
      neetNote: 'Example: Energy = [M L² T⁻²]; Gravitational Constant G = [M⁻¹ L³ T⁻²].'
    },
    {
      term: 'Principle of Homogeneity',
      definition: 'The fundamental law stating that terms added or subtracted in a physical equation must have identical dimensions.',
      neetNote: 'Used in NEET to find unknown constants in equations like (P + a/V²)(V - b) = RT.'
    },
    {
      term: 'Dimensional Constant',
      symbol: 'G, h, k_B, σ, c, μ_0, ε_0',
      definition: 'Physical constants that possess non-zero physical dimensions and units.',
      neetNote: 'Universal Gravitational Constant G, Planck constant h, Permittivity ε₀, Permeability μ₀.'
    },
    {
      term: 'Dimensionless Constant',
      symbol: 'π, e, 1/2, 2, √2',
      definition: 'Pure numerical values or mathematical constants that have no physical dimensions ([M⁰ L⁰ T⁰]).',
      neetNote: 'Cannot be determined or evaluated using dimensional analysis alone!'
    },
    {
      term: 'Dimensionless Variable',
      symbol: 'n, θ, strain, μ, Er',
      definition: 'Physical variables whose magnitude changes depending on physical state but remain dimensionless (pure ratios).',
      neetNote: 'Refractive Index n, Strain ΔL/L, Angle θ, Friction Coefficient μ, Dielectric Constant Er.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Master Reference Table of High-Yield Physical Dimensions',
      paragraphs: [
        'A thorough memory of dimensional formulas for key physical quantities across Mechanics, Thermodynamics, and Electromagnetism is mandatory for NEET.'
      ],
      tables: [
        {
          headers: ['Physical Quantity', 'Defining Formula', 'Dimensional Formula', 'SI Base Unit Equivalent'],
          rows: [
            ['Velocity / Speed', 'v = d / t', '[L T⁻¹]', 'm s⁻¹'],
            ['Acceleration', 'a = Δv / t', '[L T⁻²]', 'm s⁻²'],
            ['Force / Weight', 'F = m · a', '[M L T⁻¹]', 'kg m s⁻² (Newton)'],
            ['Work / Energy / Heat', 'W = F · d', '[M L² T⁻²]', 'kg m² s⁻² (Joule)'],
            ['Power', 'P = W / t', '[M L² T⁻³]', 'kg m² s⁻³ (Watt)'],
            ['Pressure / Stress / Elastic Modulus', 'P = F / A', '[M L⁻¹ T⁻²]', 'kg m⁻¹ s⁻² (Pascal)'],
            ['Momentum / Impulse', 'p = m · v', '[M L T⁻¹]', 'kg m s⁻¹'],
            ['Torque / Moment of Force', 'τ = F · r', '[M L² T⁻²]', 'kg m² s⁻² (N m)'],
            ['Angular Momentum / Planck Constant (h)', 'L = r × p; E = h ν', '[M L² T⁻¹]', 'kg m² s⁻¹ (J s)'],
            ['Surface Tension / Spring Constant', 'T = F / L; k = F / x', '[M T⁻²]', 'kg s⁻² (N m⁻¹)'],
            ['Coefficient of Viscosity (η)', 'F = 6π η r v', '[M L⁻¹ T⁻¹]', 'kg m⁻¹ s⁻¹ (Pa s)'],
            ['Universal Gravitational Constant (G)', 'F = G m1 m2 / r²', '[M⁻¹ L³ T⁻²]', 'm³ kg⁻¹ s⁻²'],
            ['Thermal Conductivity (K)', 'dQ/dt = K A ΔT / L', '[M L T⁻³ K⁻¹]', 'kg m s⁻³ K⁻¹'],
            ['Boltzmann Constant (kB) / Entropy', 'E = (3/2) kB T', '[M L² T⁻² K⁻¹]', 'kg m² s⁻² K⁻¹'],
            ['Electric Charge (q)', 'q = I · t', '[A T]', 'A s (Coulomb)'],
            ['Electric Potential / EMF (V)', 'V = W / q', '[M L² T⁻³ A⁻¹]', 'kg m² s⁻³ A⁻¹ (Volt)'],
            ['Capacitance (C)', 'C = q / V', '[M⁻¹ L⁻² T⁴ A²]', 'kg⁻¹ m⁻² s⁴ A² (Farad)'],
            ['Permittivity of Free Space (ε₀)', 'F = q1 q2 / (4π ε₀ r²)', '[M⁻¹ L⁻³ T⁴ A²]', 'A² s⁴ kg⁻¹ m⁻³'],
            ['Permeability of Free Space (μ₀)', 'F/L = μ₀ I1 I2 / (2π d)', '[M L T⁻² A⁻²]', 'kg m s⁻² A⁻² (H m⁻¹)'],
            ['Self / Mutual Inductance (L, M)', 'e = L (dI/dt)', '[M L² T⁻² A⁻²]', 'kg m² s⁻² A⁻² (Henry)']
          ]
        }
      ]
    },
    {
      heading: '2. High-Yield Groups of Identical Dimensions (NEET Shortcut Memory List)',
      paragraphs: [
        'NEET frequently asks which pair of physical quantities share identical dimensions. Memorize these standard groupings:',
        'Group 1: Work, Energy, Heat, Torque, Moment of Force ⇒ [M L² T⁻²]',
        'Group 2: Pressure, Stress, Young Modulus, Bulk Modulus, Shear Modulus, Energy Density ⇒ [M L⁻¹ T⁻²]',
        'Group 3: Linear Momentum, Impulse ⇒ [M L T⁻¹]',
        'Group 4: Angular Momentum, Planck Constant (h) ⇒ [M L² T⁻¹]',
        'Group 5: Frequency, Angular Velocity, Velocity Gradient, Decay Constant (λ) ⇒ [T⁻¹]',
        'Group 6: Surface Tension, Surface Energy, Spring Constant (Force Constant) ⇒ [M T⁻²]',
        'Group 7: Thermal Capacity, Entropy, Boltzmann Constant (kB) ⇒ [M L² T⁻² K⁻¹]',
        'Group 8: Speed of Light c = 1 / √(μ₀ ε₀) ⇒ [L T⁻¹] ⇒ [μ₀ ε₀] = [L⁻² T²]'
      ]
    },
    {
      heading: '3. Principle of Homogeneity and Applications',
      paragraphs: [
        'Application 1: Finding Dimensions of Unknown Constants in Equations.',
        'In the van der Waals gas equation: (P + a/V²)(V - b) = R T',
        'By Homogeneity, terms added together must have identical dimensions:',
        '• [a / V²] = [P] ⇒ [a] = [P] · [V²] = [M L⁻¹ T⁻²] · [L³]² = [M L⁵ T⁻²].',
        '• [b] = [V] = [L³].',
        'Application 2: Dimensionless Arguments in Transcendental Functions.',
        'In the wave equation y = A sin(ω t - k x + φ):',
        '• Argument (ω t - k x) MUST BE DIMENSIONLESS ([M⁰ L⁰ T⁰]).',
        '• [ω t] = 1 ⇒ [ω] = [T⁻¹] (Angular Frequency).',
        '• [k x] = 1 ⇒ [k] = [L⁻¹] (Wave Number).',
        'Application 3: Unit Conversion between Systems (n1 u1 = n2 u2).',
        'Formula: n2 = n1 × [M1/M2]ᵃ × [L1/L2]ᵇ × [T1/T2]ᶜ.',
        'Conversion of 1 Joule to Ergs: 1 J = 1 kg m² s⁻² = (1000 g)(100 cm)² s⁻² = 10⁷ g cm² s⁻² = 10⁷ Ergs.',
        'Conversion of 1 Newton to Dynes: 1 N = 1 kg m s⁻² = (1000 g)(100 cm) s⁻² = 10⁵ Dynes.'
      ]
    },
    {
      heading: '4. Critical Limitations of Dimensional Analysis (CRITICAL NEET THEORY)',
      paragraphs: [
        'Although highly versatile, dimensional analysis has five strict mathematical limitations that are regularly tested in conceptual NEET questions:',
        '1. Cannot determine dimensionless constants: Proportionality constants like 1/2 in K = 1/2 m v² or 2π in T = 2π √(L/g) cannot be deduced dimensionally.',
        '2. Cannot derive equations with non-algebraic functions: Relations containing sin θ, cos θ, tan θ, eˣ, or ln x cannot be derived dimensionally.',
        '3. Cannot derive formulas depending on more than 3 mechanical variables: Since mechanics yields only 3 equations ([M], [L], [T]), a formula depending on 4 variables cannot be uniquely solved.',
        '4. Cannot distinguish scalar vs vector quantities: Work (scalar) and Torque (vector) both have dimensions [M L² T⁻²]. Dimensional analysis cannot tell if a quantity is scalar or vector.',
        '5. Dimensional consistency does NOT guarantee physical validity: Equation s = u t + a t² is dimensionally correct ([L] = [L]), but physically wrong because the correct factor is 1/2 a t²!'
      ]
    },
    {
      heading: '5. Solved Step-by-Step Worked Examples',
      paragraphs: ['Step-by-step worked teaching examples illustrating Principle of Homogeneity and dimensional ratio evaluation:'],
      examples: [
        {
          problem: 'Teaching Example 1: Velocity of a particle is given by v = a t + b / (t + c). Find the dimensions of constants a, b, and c.',
          given: 'v = velocity [L T⁻¹], t = time [T]',
          stepByStep: [
            'Step 1: Apply Principle of Homogeneity to the denominator term (t + c). Quantities added must have identical dimensions: [c] = [t] = [T].',
            'Step 2: Apply Homogeneity to the first term (a t): [a t] = [v] ⇒ [a] · [T] = [L T⁻¹] ⇒ [a] = [L T⁻²] (acceleration).',
            'Step 3: Apply Homogeneity to the second term b / (t + c): [b / (t + c)] = [v] ⇒ [b] / [T] = [L T⁻¹] ⇒ [b] = [L] (length).'
          ],
          solution: 'Dimensions are: [a] = [L T⁻²], [b] = [L], [c] = [T].',
          answer: '[a] = L T⁻², [b] = L, [c] = T'
        },
        {
          problem: 'Teaching Example 2: Find the dimensions of the ratio E / G, where E denotes energy and G denotes universal gravitational constant.',
          given: 'Energy [E] = [M L² T⁻²], Gravitational Constant [G] = [M⁻¹ L³ T⁻²]',
          stepByStep: [
            'Step 1: Write dimensional formulas: [E] = [M L² T⁻²], [G] = [M⁻¹ L³ T⁻²].',
            'Step 2: Divide [E] by [G]: [E / G] = [M L² T⁻²] / [M⁻¹ L³ T⁻²].',
            'Step 3: Combine powers of M, L, T:',
            'M: 1 - (-1) = 2',
            'L: 2 - 3 = -1',
            'T: -2 - (-2) = 0',
            'Step 4: Final dimensional formula: [M² L⁻¹ T⁰].'
          ],
          solution: 'Dimensions of E / G are [M² L⁻¹ T⁰].',
          answer: '[M² L⁻¹ T⁰]'
        }
      ]
    }
  ],

  formulae: [
    {
      title: 'Principle of Homogeneity Formula',
      formula: '[A] = [B] = [C] text{ in } A = B + C',
      variables: 'A, B, C = individual terms in a physical equation',
      whenToUse: 'Finding dimensions of unknown coefficients or checking equation consistency.'
    },
    {
      title: 'Unit Conversion Formula via Dimensions',
      formula: 'n_2 = n_1 left(frac{M_1}{M_2}right)^a left(frac{L_1}{L_2}right)^b left(frac{T_1}{T_2}right)^c',
      variables: 'n1, n2 = numerical values; M, L, T = unit ratios; a, b, c = dimensional exponents',
      whenToUse: 'Converting numerical values between SI, CGS, or custom unit systems.'
    },
    {
      title: 'Electromagnetic Speed of Light Dimensional Relation',
      formula: 'c = frac{1}{sqrt{mu_0 epsilon_0}} implies [mu_0 epsilon_0] = [L^{-2} T^2]',
      variables: 'c = speed of light, μ0 = permeability of free space, ε0 = permittivity of free space',
      whenToUse: 'Evaluating combinations of electric and magnetic field constants.'
    }
  ],

  neetImportantPoints: [
    'Planck constant h and Angular momentum L share the exact same dimensions: [M L² T⁻¹].',
    'Stress, Pressure, Young Modulus, Bulk Modulus, Shear Modulus, and Energy Density share [M L⁻¹ T⁻²].',
    '1 / √(μ₀ ε₀) has dimensions of velocity [L T⁻¹].',
    'Arguments of sin, cos, tan, eˣ, ln x are strictly DIMENSIONLESS ([M⁰ L⁰ T⁰]).',
    'Dimensional consistency is a NECESSARY condition for physical correctness, but NOT a SUFFICIENT condition!'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming that if an equation is dimensionally correct, it MUST be physically correct.',
      correctFact: 'Dimensional correctness does NOT guarantee physical validity (e.g., s = ut + at² is dimensionally correct, but physically wrong due to missing factor 1/2).',
      whyItMattersForNEET: 'NEET conceptual true/false questions frequently test this distinction.'
    },
    {
      commonConfusion: 'Confusing dimensions of Permittivity ε₀ and Permeability μ₀.',
      correctFact: 'Permittivity ε₀ = [M⁻¹ L⁻³ T⁴ A²]; Permeability μ₀ = [M L T⁻² A⁻²]. Their product [μ₀ ε₀] = [L⁻² T²] = 1/c².',
      whyItMattersForNEET: 'Electromagnetism dimensional questions are high yield in NEET.'
    },
    {
      commonConfusion: 'Treating exponent terms in e^(k t) as having dimensions.',
      correctFact: 'Any exponent term in an exponential or trigonometric expression MUST be dimensionless, so [k t] = 1 ⇒ [k] = [T⁻¹].',
      whyItMattersForNEET: 'Used to solve dimensional questions involving damping or wave equations.'
    }
  ],

  quickRevision: [
    'Homogeneity Rule: Every term in A = B + C must have identical dimensions.',
    '[h] = [Angular Momentum] = M L² T⁻¹.',
    '[Pressure] = [Stress] = [Modulus of Elasticity] = M L⁻¹ T⁻².',
    '[G] = M⁻¹ L³ T⁻², [η] = M L⁻¹ T⁻¹, [μ₀ ε₀] = L⁻² T².',
    'Trig, exponential, and log arguments are dimensionless.'
  ],

  practiceQuestions: [
  {
    "id": "prac-dim-1",
    "question": "Practice Question — Original: If Force (F), Velocity (V), and Time (T) are taken as fundamental quantities, find the dimensional formula for Mass (M).",
    "options": [
      "[F V⁻¹ T]",
      "[F V T⁻¹]",
      "[F V⁻² T]",
      "[F V¹ T¹]"
    ],
    "correctAnswer": 0,
    "explanation": "Let Mass M = k Fᵃ Vᵇ Tᶜ. Dimensions: [M] = [M L T⁻²]ᵃ [L T⁻¹]ᵇ [T]ᶜ = Mᵃ Lᵃ⁺ᵇ T⁻²ᵃ⁻ᵇ⁺ᶜ. Equating exponents: a = 1; a + b = 0 ⇒ b = -1; -2a - b + c = 0 ⇒ -2(1) - (-1) + c = 0 ⇒ -1 + c = 0 ⇒ c = 1. Thus [M] = [F V⁻¹ T]. Option 1 is correct.",
    "difficulty": "Medium",
    "topicId": "phys-units-dimensional-analysis",
    "conceptTested": "Deriving Dimensions in terms of Custom Base Quantities"
  },
  {
    "id": "prac-dim-2",
    "question": "Practice Question — Original: In the formula X = 3 Y Z², X and Z have dimensions of capacitance and magnetic induction respectively. What are the dimensions of Y in the SI system?",
    "options": [
      "[M⁻³ L⁻² T⁸ A⁴]",
      "[M⁻² L⁻² T⁶ A³]",
      "[M⁻¹ L⁻² T⁴ A²]",
      "[M⁻³ L⁻⁴ T⁸ A⁴]"
    ],
    "correctAnswer": 0,
    "explanation": "X = Capacitance C = [M⁻¹ L⁻² T⁴ A²]. Z = Magnetic Induction B = [M T⁻² A⁻¹]. Z² = [M² T⁻⁴ A⁻²]. Y = X / Z² = [M⁻¹ L⁻² T⁴ A²] / [M² T⁻⁴ A⁻²] = [M⁻³ L⁻² T⁸ A⁴]. Option 1 is correct.",
    "difficulty": "Hard",
    "topicId": "phys-units-dimensional-analysis",
    "conceptTested": "Dimensional Equation Solving"
  },
  {
    "id": "prac-physunitsdimensionalanalysis-3",
    "question": "Regarding Dimensional Analysis & Applications, which of the following statements correctly resolves a common misconception about \"Assuming that if an equation is dimensionally correct, it MUST be physically correct.\"?",
    "options": [
      "Dimensional correctness does NOT guarantee physical validity (e.g., s = ut + at² is dimensionally correct, but physically wrong due to missing factor 1/2).",
      "Incorrect assumption: Assuming that if an equation is dimensionally correct, it MUST be physically correct.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Dimensional correctness does NOT guarantee physical validity (e.g., s = ut + at² is dimensionally correct, but physically wrong due to missing factor 1/2).. NEET conceptual true/false questions frequently test this distinction.",
    "difficulty": "Medium",
    "conceptTested": "Dimensional Analysis & Applications - Conceptual Clarity"
  },
  {
    "id": "prac-physunitsdimensionalanalysis-4",
    "question": "Regarding Dimensional Analysis & Applications, which of the following statements correctly resolves a common misconception about \"Confusing dimensions of Permittivity ε₀ and Permeability μ₀.\"?",
    "options": [
      "Permittivity ε₀ = [M⁻¹ L⁻³ T⁴ A²]; Permeability μ₀ = [M L T⁻² A⁻²]. Their product [μ₀ ε₀] = [L⁻² T²] = 1/c².",
      "Incorrect assumption: Confusing dimensions of Permittivity ε₀ and Permeability μ₀.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Permittivity ε₀ = [M⁻¹ L⁻³ T⁴ A²]; Permeability μ₀ = [M L T⁻² A⁻²]. Their product [μ₀ ε₀] = [L⁻² T²] = 1/c².. Electromagnetism dimensional questions are high yield in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Dimensional Analysis & Applications - Conceptual Clarity"
  },
  {
    "id": "prac-physunitsdimensionalanalysis-5",
    "question": "Regarding Dimensional Analysis & Applications, which of the following statements correctly resolves a common misconception about \"Treating exponent terms in e^(k t) as having dimensions.\"?",
    "options": [
      "Any exponent term in an exponential or trigonometric expression MUST be dimensionless, so [k t] = 1 ⇒ [k] = [T⁻¹].",
      "Incorrect assumption: Treating exponent terms in e^(k t) as having dimensions.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Any exponent term in an exponential or trigonometric expression MUST be dimensionless, so [k t] = 1 ⇒ [k] = [T⁻¹].. Used to solve dimensional questions involving damping or wave equations.",
    "difficulty": "Medium",
    "conceptTested": "Dimensional Analysis & Applications - Conceptual Clarity"
  },
  {
    "id": "prac-physunitsdimensionalanalysis-6",
    "question": "In the study of Dimensional Analysis & Applications, what is the exact definition and significance of \"Dimension\"?",
    "options": [
      "The exponent to which a base quantity is raised to represent a derived physical quantity.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The exponent to which a base quantity is raised to represent a derived physical quantity.. Dimensions depend purely on the physical nature of the quantity, independent of unit systems!",
    "difficulty": "Easy",
    "conceptTested": "Dimension definition"
  },
  {
    "id": "prac-physunitsdimensionalanalysis-7",
    "question": "In the study of Dimensional Analysis & Applications, what is the exact definition and significance of \"Dimensional Formula\"?",
    "options": [
      "An expression showing which fundamental base quantities and what powers enter into the definition of a physical quantity.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "An expression showing which fundamental base quantities and what powers enter into the definition of a physical quantity.. Example: Energy = [M L² T⁻²]; Gravitational Constant G = [M⁻¹ L³ T⁻²].",
    "difficulty": "Easy",
    "conceptTested": "Dimensional Formula definition"
  },
  {
    "id": "prac-physunitsdimensionalanalysis-8",
    "question": "In the study of Dimensional Analysis & Applications, what is the exact definition and significance of \"Principle of Homogeneity\"?",
    "options": [
      "The fundamental law stating that terms added or subtracted in a physical equation must have identical dimensions.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The fundamental law stating that terms added or subtracted in a physical equation must have identical dimensions.. Used in NEET to find unknown constants in equations like (P + a/V²)(V - b) = RT.",
    "difficulty": "Easy",
    "conceptTested": "Principle of Homogeneity definition"
  },
  {
    "id": "prac-physunitsdimensionalanalysis-9",
    "question": "In the study of Dimensional Analysis & Applications, what is the exact definition and significance of \"Dimensional Constant\"?",
    "options": [
      "Physical constants that possess non-zero physical dimensions and units.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Physical constants that possess non-zero physical dimensions and units.. Universal Gravitational Constant G, Planck constant h, Permittivity ε₀, Permeability μ₀.",
    "difficulty": "Easy",
    "conceptTested": "Dimensional Constant definition"
  },
  {
    "id": "prac-physunitsdimensionalanalysis-10",
    "question": "In the study of Dimensional Analysis & Applications, what is the exact definition and significance of \"Dimensionless Constant\"?",
    "options": [
      "Pure numerical values or mathematical constants that have no physical dimensions ([M⁰ L⁰ T⁰]).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Pure numerical values or mathematical constants that have no physical dimensions ([M⁰ L⁰ T⁰]).. Cannot be determined or evaluated using dimensional analysis alone!",
    "difficulty": "Easy",
    "conceptTested": "Dimensionless Constant definition"
  }
],
  pyqs: [
    {
      id: 'pyq-dim-2021-1',
      year: 2021,
      exam: 'NEET UG 2021',
      question: 'If E and G respectively denote energy and gravitational constant, then E / G has the dimensions of:',
      options: [
        '[M² L⁻¹ T⁰]',
        '[M L⁻¹ T⁻¹]',
        '[M L⁰ T⁻²]',
        '[M² L⁻² T⁻¹]'
      ],
      correctAnswer: 0,
      explanation: 'Dimensions of Energy [E] = [M L² T⁻²]. Dimensions of Gravitational Constant [G] = [M⁻¹ L³ T⁻²]. Ratio [E / G] = [M L² T⁻²] / [M⁻¹ L³ T⁻²] = [M² L⁻¹ T⁰].',
      topicId: 'phys-units-dimensional-analysis',
      difficulty: 'Easy',
      conceptTested: 'Dimensions of Derived Physical Ratios',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-dim-2022-1',
      year: 2022,
      exam: 'NEET UG 2022',
      question: 'The dimensions [M L T⁻² A⁻²] belong to the physical quantity:',
      options: [
        'Magnetic permeability',
        'Magnetic flux',
        'Self-inductance',
        'Electric permittivity'
      ],
      correctAnswer: 0,
      explanation: 'Force per unit length between parallel currents F/L = μ₀ I1 I2 / (2π d) ⇒ μ₀ = 2π d F / (L I1 I2). Dimensions [μ₀] = [L][M L T⁻²] / ([L][A²]) = [M L T⁻² A⁻²], which is magnetic permeability of free space.',
      topicId: 'phys-units-dimensional-analysis',
      difficulty: 'Medium',
      conceptTested: 'Dimensions of Magnetic Permeability',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Dimensional Analysis & Applications',
    confidenceLabel: 'MODERATE',
    confidenceText: 'Moderate Confidence: Based on 2 verified direct PYQs in official archives.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 2,
    totalDirectPyqs: 2,
    totalHistoricalMarks: 8,
    averageDirectPyqsPerPaper: 0.13,
    maxDirectPyqsInSinglePaper: 1,
    minDirectPyqsInSinglePaper: 1,
    minDirectMarks: 4,
    maxDirectMarks: 4,
    avgDirectMarksPerPaper: 0.53,
    typicalContributionMarks: 4,
    historicalMarksRangeText: '4 marks per paper (tested in 2 of 15 analyzed papers)',
    whatThisMeansForYou: 'Dimensional analysis questions appear frequently in NEET Physics. Mastering dimensions of physical constants (G, h, μ₀, ε₀) provides reliable 4-mark questions.',
    yearWiseBreakdown: [
      {
        year: 2022,
        exam: 'NEET UG 2022',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Dimensions of Magnetic Permeability μ₀',
        classification: 'Direct',
        verificationStatus: 'Verified (NEET UG 2022 Paper)'
      },
      {
        year: 2021,
        exam: 'NEET UG 2021',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Dimensions of Physical Ratio E / G',
        classification: 'Direct',
        verificationStatus: 'Verified (NEET UG 2021 Paper)'
      }
    ],
    sourceInfo: {
      dataSource: 'Official NEET UG Examination Archives',
      analysisPeriod: '2010 – 2024 (15 Verified Papers)',
      directPyqsAnalyzedCount: 2,
      classificationMethod: 'Strict topic-level matching against verified NEET UG historical papers.',
      disclaimer: 'Historical records serve as learning reference and do not guarantee future question selection.'
    }
  }
}
