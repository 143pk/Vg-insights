import { DetailedTopicContent } from '../../types/neet'

export const physUnitsSiDerivedDetails: DetailedTopicContent = {
  topicId: 'phys-units-si-derived',
  topicName: 'SI Units & Fundamental Quantities',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Physics & Measurement',
  chapter: 'Units and Measurements',

  whatIsThisTopic: 'Physics is a quantitative science based on the accurate measurement of physical properties. To describe physical phenomena—from subatomic electron orbits to galactic motions—we compare measurable quantities against standardized reference values called units. The International System of Units (SI) establishes the universal standard for scientific measurements worldwide. This topic covers the foundational framework of physical quantities, the 7 SI base quantities and their base units, supplementary angle units, derived quantities, unit conversion techniques, metric prefixes, and high-yield NEET conventions.',

  basicIdea: [
    '1. Physical Quantity (Q = n × u): Any measurable property of a physical body or system. It is expressed as the product of a numerical value (n) and a unit (u). The magnitude of a physical quantity remains constant regardless of the unit chosen: n1 × u1 = n2 × u2.',
    '2. Fundamental (Base) Quantities: A set of independent physical quantities that cannot be defined in terms of each other. In the SI system, there are exactly 7 base quantities: Length, Mass, Time, Electric Current, Thermodynamic Temperature, Amount of Substance, and Luminous Intensity.',
    '3. Derived Quantities: Physical quantities whose units are expressed as algebraic combinations (products or quotients) of base units (e.g., Velocity = m/s, Force = kg·m/s² = Newton, Pressure = N/m² = Pascal).',
    '4. Supplementary Quantities (Dimensionless with Units): Plane Angle (measured in Radians, rad) and Solid Angle (measured in Steradians, sr). These quantities possess SI units but have NO dimensions (dimensionless).',
    '5. Unit Conversion Principle: As unit size increases, numerical value decreases proportionally (n ∝ 1/u). Switching from MKS to CGS or imperial units uses ratio equality n2 = n1 × (u1/u2).'
  ],

  importantTerms: [
    {
      term: 'Physical Quantity',
      symbol: 'Q',
      definition: 'A quantifiable property of a physical system that can be measured using an instrument and expressed as Q = n × u.',
      neetNote: 'The magnitude Q is invariant under unit conversion: if unit u becomes smaller, number n becomes larger!'
    },
    {
      term: 'SI Base Units',
      symbol: 'm, kg, s, A, K, mol, cd',
      definition: 'The seven primary units adopted by the General Conference on Weights and Measures (CGPM) as the universal basis of the SI metric system.',
      neetNote: 'In 2019, all 7 base units were redefined in terms of fixed physical constants (e.g., speed of light c, Planck constant h, elementary charge e).'
    },
    {
      term: 'Derived Unit',
      symbol: 'N, J, W, Pa, V, T, etc.',
      definition: 'A unit of measurement formed by multiplying or dividing base units without any numerical factor other than 1.',
      neetNote: '1 Newton = 1 kg·m/s²; 1 Joule = 1 kg·m²/s²; 1 Watt = 1 kg·m²/s³.'
    },
    {
      term: 'Plane Angle (Radian)',
      symbol: 'rad',
      definition: 'The angle subtended at the center of a circle by an arc whose length is equal to the radius of the circle: θ = s / r.',
      neetNote: 'Plane angle is DIMENSIONLESS ([M⁰L⁰T⁰]) but HAS a physical SI unit (radian). 1 rad = 180°/π ≈ 57.3°.'
    },
    {
      term: 'Solid Angle (Steradian)',
      symbol: 'sr',
      definition: 'The 3D angle subtended at the center of a sphere by a surface area equal to the square of the radius: Ω = A / r².',
      neetNote: 'Total solid angle enclosed by a sphere at its center is exactly 4π steradians.'
    },
    {
      term: 'SI Metric Prefix',
      symbol: 'p, n, μ, m, k, M, G, T',
      definition: 'Standard power-of-10 prefixes attached to SI unit names to represent very large or very small magnitudes.',
      neetNote: '1 pico (p) = 10⁻¹²; 1 nano (n) = 10⁻⁹; 1 micro (μ) = 10⁻⁶; 1 milli (m) = 10⁻³; 1 mega (M) = 10⁶; 1 giga (G) = 10⁹.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. The 7 SI Base Quantities and Definitions',
      paragraphs: [
        'The International System of Units (SI) is built upon seven fundamental base quantities. Each base quantity is independently defined through fundamental physical constants of nature.',
        'The table below summarizes the 7 SI base quantities, their base units, standard symbols, and base physical references.'
      ],
      tables: [
        {
          headers: ['Base Quantity', 'Base Unit Name', 'Symbol', 'Physical Reference / Defining Constant'],
          rows: [
            ['Length', 'Metre', 'm', 'Fixed numerical value of speed of light in vacuum c = 299,792,458 m/s'],
            ['Mass', 'Kilogram', 'kg', 'Fixed numerical value of Planck constant h = 6.62607015 × 10⁻³⁴ J·s'],
            ['Time', 'Second', 's', 'Fixed caesium-133 hyperfine transition frequency ΔνCs = 9,192,631,770 Hz'],
            ['Electric Current', 'Ampere', 'A', 'Fixed numerical value of elementary charge e = 1.602176634 × 10⁻¹⁹ C'],
            ['Thermodynamic Temp.', 'Kelvin', 'K', 'Fixed numerical value of Boltzmann constant kB = 1.380649 × 10⁻²³ J/K'],
            ['Amount of Substance', 'Mole', 'mol', 'Fixed Avogadro constant NA = 6.02214076 × 10²³ mol⁻¹'],
            ['Luminous Intensity', 'Candela', 'cd', 'Luminous efficacy Kcd of monochromatic radiation of frequency 540 × 10¹² Hz']
          ]
        }
      ]
    },
    {
      heading: '2. Supplementary Units & The Angle Paradox',
      paragraphs: [
        'In addition to the 7 base units, the SI system includes two supplementary units for measuring angles: Plane Angle (Radian) and Solid Angle (Steradian).',
        'Plane Angle θ is defined as arc length divided by radius: θ = s / r. Because arc length and radius both have dimensions of length [L], plane angle is mathematically dimensionless ([L]/[L] = [M⁰L⁰T⁰]). However, it is assigned the SI unit radian (rad).',
        'Solid Angle Ω is defined as surface area divided by radius squared: Ω = A / r². Since area [L²] divided by radius squared [L²] is dimensionless, solid angle is also dimensionless ([M⁰L⁰T⁰]) but carries the SI unit steradian (sr).',
        'CRITICAL NEET TAKEAWAY: Radian and Steradian prove that a physical quantity can be DIMENSIONLESS while still possessing an SI UNIT!'
      ]
    },
    {
      heading: '3. Essential Derived SI Units in NEET Physics',
      paragraphs: [
        'Derived physical quantities are obtained by combining SI base units according to physical laws. Understanding how derived units decompose into base units (m, kg, s, A, K) is essential for solving dimensional analysis and error problems in NEET.'
      ],
      tables: [
        {
          headers: ['Derived Quantity', 'Unit Name', 'Symbol', 'Formula Relation', 'SI Base Unit Equivalent'],
          rows: [
            ['Force', 'Newton', 'N', 'F = m · a', 'kg · m · s⁻²'],
            ['Work / Energy', 'Joule', 'J', 'W = F · d', 'kg · m² · s⁻²'],
            ['Power', 'Watt', 'W', 'P = W / t', 'kg · m² · s⁻³'],
            ['Pressure / Stress', 'Pascal', 'Pa', 'P = F / A', 'kg · m⁻¹ · s⁻²'],
            ['Frequency', 'Hertz', 'Hz', 'f = 1 / T', 's⁻¹'],
            ['Electric Charge', 'Coulomb', 'C', 'q = I · t', 'A · s'],
            ['Electric Potential', 'Volt', 'V', 'V = W / q', 'kg · m² · s⁻³ · A⁻¹'],
            ['Electric Resistance', 'Ohm', 'Ω', 'R = V / I', 'kg · m² · s⁻³ · A⁻²'],
            ['Capacitance', 'Farad', 'F', 'C = q / V', 'kg⁻¹ · m⁻² · s⁴ · A²'],
            ['Magnetic Field (B)', 'Tesla', 'T', 'F = q v B ⇒ B = F/(qv)', 'kg · s⁻² · A⁻¹'],
            ['Magnetic Flux (Φ)', 'Weber', 'Wb', 'Φ = B · A', 'kg · m² · s⁻² · A⁻¹'],
            ['Self Inductance (L)', 'Henry', 'H', 'e = L (dI/dt)', 'kg · m² · s⁻² · A⁻²']
          ]
        }
      ]
    },
    {
      heading: '4. Dimensionless Quantities: With Units vs Without Units',
      paragraphs: [
        'NEET questions frequently test the distinction between dimensionless quantities that possess SI units and those that are purely unitless number ratios.'
      ],
      tables: [
        {
          headers: ['Category', 'Examples', 'SI Unit', 'Dimensions'],
          rows: [
            ['Dimensionless WITH SI Units', 'Plane Angle (θ), Solid Angle (Ω)', 'Radian (rad), Steradian (sr)', '[M⁰L⁰T⁰]'],
            ['Dimensionless WITHOUT Units (Pure Ratios)', 'Refractive Index (n), Relative Density, Strain (ΔL/L), Dielectric Constant (Er), Friction Coefficient (μ), Relative Permeability (μr)', 'None (Unitless number)', '[M⁰L⁰T⁰]']
          ]
        }
      ]
    },
    {
      heading: '5. Practical Metric Prefixes and Conversion Factors',
      paragraphs: [
        'In numerical physics problems, physical dimensions span vast scales. Memory of standard metric power-of-10 prefixes and practical conversion units is mandatory.'
      ],
      tables: [
        {
          headers: ['Prefix', 'Symbol', 'Power of 10', 'Common Practical Conversion Units'],
          rows: [
            ['Pico', 'p', '10⁻¹²', '1 Ångström (Å) = 10⁻¹⁰ m = 0.1 nm'],
            ['Nano', 'n', '10⁻⁹', '1 Fermi / Femtometre (fm) = 10⁻¹⁵ m'],
            ['Micro', 'μ', '10⁻⁶', '1 Astronomical Unit (AU) = 1.496 × 10¹¹ m'],
            ['Milli', 'm', '10⁻³', '1 Light Year (ly) = 9.46 × 10¹⁵ m'],
            ['Kilo', 'k', '10³', '1 Parsec (pc) = 3.08 × 10¹⁶ m = 3.26 ly'],
            ['Mega', 'M', '10⁶', '1 Electron-Volt (eV) = 1.602 × 10⁻¹⁹ J'],
            ['Giga', 'G', '10⁹', '1 Kilowatt-hour (kWh) = 3.6 × 10⁶ J'],
            ['Tera', 'T', '10¹²', '1 Bar = 10⁵ Pa; 1 Atmosphere (atm) = 1.013 × 10⁵ Pa = 760 Torr']
          ]
        }
      ]
    },
    {
      heading: '6. Solved Step-by-Step Worked Examples',
      paragraphs: ['Step-by-step worked teaching examples illustrating core unit conversion principles and derived unit decompositions:'],
      examples: [
        {
          problem: 'Teaching Example 1: Express the unit of Thermal Conductivity (K) in terms of SI base units and derived units.',
          given: 'Fourier Law of Heat Conduction: dQ/dt = K · A · (T1 - T2) / L',
          stepByStep: [
            'Step 1: Rearrange Fourier Law for Thermal Conductivity K: K = (dQ/dt · L) / (A · ΔT)',
            'Step 2: Substitute SI units for each term: dQ/dt is heat transfer rate in Watts (W) or Joules per second (J/s); L is length in metres (m); A is area in m²; ΔT is temperature difference in Kelvin (K).',
            'Step 3: Combine derived SI units: K = (W · m) / (m² · K) = W · m⁻¹ · K⁻¹.',
            'Step 4: Convert to SI base units: Since 1 Watt = 1 kg·m²·s⁻³, K = (kg·m²·s⁻³) · m⁻¹ · K⁻¹ = kg · m · s⁻³ · K⁻¹.'
          ],
          solution: 'SI Unit of Thermal Conductivity is W m⁻¹ K⁻¹ (or kg m s⁻³ K⁻¹ in base units).',
          answer: 'W m⁻¹ K⁻¹ (or kg m s⁻³ K⁻¹)'
        },
        {
          problem: 'Teaching Example 2: Convert electrical energy of 5.5 kWh into Joules (J).',
          given: 'Energy E = 5.5 kWh',
          stepByStep: [
            'Step 1: Recall 1 kW = 1000 Watts = 1000 J/s.',
            'Step 2: Recall 1 hour = 3600 seconds.',
            'Step 3: Multiply: 1 kWh = (1000 J/s) × (3600 s) = 3.6 × 10⁶ Joules.',
            'Step 4: Calculate E = 5.5 × 3.6 × 10⁶ J = 1.98 × 10⁷ Joules.'
          ],
          solution: '5.5 kWh = 1.98 × 10⁷ J.',
          answer: '1.98 × 10⁷ J'
        }
      ]
    }
  ],

  formulae: [
    {
      title: 'Magnitude Invariance under Unit Conversion',
      formula: 'Q = n_1 u_1 = n_2 u_2',
      variables: 'Q = physical quantity magnitude, n = numerical value, u = unit size',
      whenToUse: 'When converting numerical values of physical quantities between different unit systems (e.g. MKS to CGS).'
    },
    {
      title: 'Plane Angle Formula',
      formula: 'theta = frac{s}{r} text{ (radians)}',
      variables: 'θ = plane angle in radians (rad), s = arc length, r = radius',
      whenToUse: 'Calculating plane angular displacement in circular motion or astronomical distance parallax.'
    },
    {
      title: 'Solid Angle Formula',
      formula: 'Omega = frac{A}{r^2} text{ (steradians)}',
      variables: 'Ω = solid angle in steradians (sr), A = spherical surface area, r = sphere radius',
      whenToUse: 'Calculating 3D angular exposure in radiometry, photometry, flux, and nuclear radiation physics.'
    }
  ],

  neetImportantPoints: [
    'Radian (rad) and Steradian (sr) are dimensionless quantities that possess SI units.',
    'SI unit symbols are NEVER pluralized with an "s" (write 10 kg, NOT 10 kgs).',
    'Unit symbols named after scientists are capitalized (e.g. N, J, W, Pa, V, T, H), but their full written names are kept entirely in lowercase (newton, joule, watt, pascal, volt).',
    'Supplementary units (radian & steradian) do not require independent base unit dimensions.',
    '1 Tesla = 1 Wb/m² = 1 N/(A·m) = 1 kg · s⁻² · A⁻¹.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming Ampere (A) is a derived unit because charge q = I·t.',
      correctFact: 'Electric current (Ampere, A) is one of the 7 fundamental SI base quantities, whereas Electric Charge (Coulomb, C = A·s) is a derived quantity!',
      whyItMattersForNEET: 'NEET frequently sets traps asking students to identify base vs derived quantities in electromagnetism.'
    },
    {
      commonConfusion: 'Thinking that any quantity with an SI unit must have dimensions.',
      correctFact: 'Plane angle (radian) and solid angle (steradian) have SI units but are completely dimensionless ([M⁰L⁰T⁰]).',
      whyItMattersForNEET: 'Direct conceptual questions test this exception.'
    },
    {
      commonConfusion: 'Confusing 1 kgf (kilogram-force) with 1 kg (kilogram-mass).',
      correctFact: '1 kg is a base unit of mass. 1 kgf is a unit of force equal to the weight of 1 kg mass under standard gravity: 1 kgf = 9.8 N.',
      whyItMattersForNEET: 'Mechanics problems stating forces in kgf must be multiplied by 9.8 m/s² to convert to Newtons.'
    }
  ],

  quickRevision: [
    '7 Base SI Units: metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd).',
    'Supplementary Units: Radian (rad) for plane angle, Steradian (sr) for solid angle. Both are dimensionless.',
    'SI prefixes: pico (10⁻¹²), nano (10⁻⁹), micro (10⁻⁶), milli (10⁻³), kilo (10³), mega (10⁶), giga (10⁹).',
    '1 eV = 1.602 × 10⁻¹⁹ J; 1 kWh = 3.6 × 10⁶ J; 1 Å = 10⁻¹⁰ m; 1 bar = 10⁵ Pa.'
  ],

  practiceQuestions: [
  {
    "id": "prac-si-1",
    "question": "Practice Question — Original: Which of the following pairs consists of a dimensionless quantity that nevertheless possesses an SI unit, and a dimensionless quantity without any unit, respectively?",
    "options": [
      "Plane angle and Refractive index",
      "Refractive index and Plane angle",
      "Solid angle and Plane angle",
      "Relative density and Strain"
    ],
    "correctAnswer": 0,
    "explanation": "Plane angle has SI unit radian (rad) but is dimensionless ([M⁰L⁰T⁰]). Refractive index is a pure ratio of speeds (n = c/v), so it has neither dimensions nor units. Thus option 1 is correct.",
    "difficulty": "Easy",
    "topicId": "phys-units-si-derived",
    "conceptTested": "Dimensionless quantities with and without SI units"
  },
  {
    "id": "prac-si-2",
    "question": "Practice Question — Original: Express the SI derived unit of Electric Resistance (Ohm, Ω) in terms of fundamental SI base units (kg, m, s, A).",
    "options": [
      "kg · m² · s⁻³ · A⁻²",
      "kg · m² · s⁻² · A⁻¹",
      "kg⁻¹ · m⁻² · s³ · A²",
      "kg · m · s⁻³ · A⁻¹"
    ],
    "correctAnswer": 0,
    "explanation": "Resistance R = V / I = (W / q) / I = (F · d) / (I · t · I). Base units = (kg · m · s⁻² · m) / (A · s · A) = kg · m² · s⁻³ · A⁻².",
    "difficulty": "Medium",
    "topicId": "phys-units-si-derived",
    "conceptTested": "Decomposition of Ohm into SI base units"
  },
  {
    "id": "prac-physunitssiderived-3",
    "question": "Regarding SI Units & Fundamental Quantities, which of the following statements correctly resolves a common misconception about \"Assuming Ampere (A) is a derived unit because charge q = I·t.\"?",
    "options": [
      "Electric current (Ampere, A) is one of the 7 fundamental SI base quantities, whereas Electric Charge (Coulomb, C = A·s) is a derived quantity!",
      "Incorrect assumption: Assuming Ampere (A) is a derived unit because charge q = I·t.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Electric current (Ampere, A) is one of the 7 fundamental SI base quantities, whereas Electric Charge (Coulomb, C = A·s) is a derived quantity!. NEET frequently sets traps asking students to identify base vs derived quantities in electromagnetism.",
    "difficulty": "Medium",
    "conceptTested": "SI Units & Fundamental Quantities - Conceptual Clarity"
  },
  {
    "id": "prac-physunitssiderived-4",
    "question": "Regarding SI Units & Fundamental Quantities, which of the following statements correctly resolves a common misconception about \"Thinking that any quantity with an SI unit must have dimensions.\"?",
    "options": [
      "Plane angle (radian) and solid angle (steradian) have SI units but are completely dimensionless ([M⁰L⁰T⁰]).",
      "Incorrect assumption: Thinking that any quantity with an SI unit must have dimensions.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Plane angle (radian) and solid angle (steradian) have SI units but are completely dimensionless ([M⁰L⁰T⁰]).. Direct conceptual questions test this exception.",
    "difficulty": "Medium",
    "conceptTested": "SI Units & Fundamental Quantities - Conceptual Clarity"
  },
  {
    "id": "prac-physunitssiderived-5",
    "question": "Regarding SI Units & Fundamental Quantities, which of the following statements correctly resolves a common misconception about \"Confusing 1 kgf (kilogram-force) with 1 kg (kilogram-mass).\"?",
    "options": [
      "1 kg is a base unit of mass. 1 kgf is a unit of force equal to the weight of 1 kg mass under standard gravity: 1 kgf = 9.8 N.",
      "Incorrect assumption: Confusing 1 kgf (kilogram-force) with 1 kg (kilogram-mass).",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "1 kg is a base unit of mass. 1 kgf is a unit of force equal to the weight of 1 kg mass under standard gravity: 1 kgf = 9.8 N.. Mechanics problems stating forces in kgf must be multiplied by 9.8 m/s² to convert to Newtons.",
    "difficulty": "Medium",
    "conceptTested": "SI Units & Fundamental Quantities - Conceptual Clarity"
  },
  {
    "id": "prac-physunitssiderived-6",
    "question": "In the study of SI Units & Fundamental Quantities, what is the exact definition and significance of \"Physical Quantity\"?",
    "options": [
      "A quantifiable property of a physical system that can be measured using an instrument and expressed as Q = n × u.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A quantifiable property of a physical system that can be measured using an instrument and expressed as Q = n × u.. The magnitude Q is invariant under unit conversion: if unit u becomes smaller, number n becomes larger!",
    "difficulty": "Easy",
    "conceptTested": "Physical Quantity definition"
  },
  {
    "id": "prac-physunitssiderived-7",
    "question": "In the study of SI Units & Fundamental Quantities, what is the exact definition and significance of \"SI Base Units\"?",
    "options": [
      "The seven primary units adopted by the General Conference on Weights and Measures (CGPM) as the universal basis of the SI metric system.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The seven primary units adopted by the General Conference on Weights and Measures (CGPM) as the universal basis of the SI metric system.. In 2019, all 7 base units were redefined in terms of fixed physical constants (e.g., speed of light c, Planck constant h, elementary charge e).",
    "difficulty": "Easy",
    "conceptTested": "SI Base Units definition"
  },
  {
    "id": "prac-physunitssiderived-8",
    "question": "In the study of SI Units & Fundamental Quantities, what is the exact definition and significance of \"Derived Unit\"?",
    "options": [
      "A unit of measurement formed by multiplying or dividing base units without any numerical factor other than 1.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A unit of measurement formed by multiplying or dividing base units without any numerical factor other than 1.. 1 Newton = 1 kg·m/s²; 1 Joule = 1 kg·m²/s²; 1 Watt = 1 kg·m²/s³.",
    "difficulty": "Easy",
    "conceptTested": "Derived Unit definition"
  },
  {
    "id": "prac-physunitssiderived-9",
    "question": "In the study of SI Units & Fundamental Quantities, what is the exact definition and significance of \"Plane Angle (Radian)\"?",
    "options": [
      "The angle subtended at the center of a circle by an arc whose length is equal to the radius of the circle: θ = s / r.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The angle subtended at the center of a circle by an arc whose length is equal to the radius of the circle: θ = s / r.. Plane angle is DIMENSIONLESS ([M⁰L⁰T⁰]) but HAS a physical SI unit (radian). 1 rad = 180°/π ≈ 57.3°.",
    "difficulty": "Easy",
    "conceptTested": "Plane Angle (Radian) definition"
  },
  {
    "id": "prac-physunitssiderived-10",
    "question": "In the study of SI Units & Fundamental Quantities, what is the exact definition and significance of \"Solid Angle (Steradian)\"?",
    "options": [
      "The 3D angle subtended at the center of a sphere by a surface area equal to the square of the radius: Ω = A / r².",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The 3D angle subtended at the center of a sphere by a surface area equal to the square of the radius: Ω = A / r².. Total solid angle enclosed by a sphere at its center is exactly 4π steradians.",
    "difficulty": "Easy",
    "conceptTested": "Solid Angle (Steradian) definition"
  }
],
  pyqs: [
    {
      id: 'pyq-si-2020-1',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'The unit of thermal conductivity is:',
      options: [
        'W m⁻¹ K⁻¹',
        'W m K⁻¹',
        'W m⁻¹ K',
        'J m⁻¹ K⁻¹'
      ],
      correctAnswer: 0,
      explanation: 'Heat transfer rate dQ/dt = K · A · (T1 - T2) / L ⇒ K = (dQ/dt · L) / (A · ΔT). Units = (W · m) / (m² · K) = W m⁻¹ K⁻¹.',
      topicId: 'phys-units-si-derived',
      difficulty: 'Easy',
      conceptTested: 'SI Units of Thermal Conductivity',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-si-2019-1',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'Which of the following physical quantities has the SI unit watt per square metre per kelvin to the power four (W m⁻² K⁻⁴)?',
      options: [
        'Stefan-Boltzmann constant',
        'Planck constant',
        'Wien constant',
        'Universal gas constant'
      ],
      correctAnswer: 0,
      explanation: 'According to Stefan-Boltzmann Law, radiant power per unit area E = σ T⁴ ⇒ σ = E / T⁴. Unit of E is W/m², so unit of Stefan constant σ is W m⁻² K⁻⁴.',
      topicId: 'phys-units-si-derived',
      difficulty: 'Easy',
      conceptTested: 'SI Units of Physical Constants',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'SI Units & Fundamental Quantities',
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
    whatThisMeansForYou: 'Mastering SI base unit conversions and derived unit definitions provides a solid 4-mark score potential when tested directly in NEET Physics.',
    yearWiseBreakdown: [
      {
        year: 2020,
        exam: 'NEET UG 2020',
        directPyqCount: 1,
        marks: 4,
        questionType: 'SI Unit of Thermal Conductivity',
        classification: 'Direct',
        verificationStatus: 'Verified (NEET UG 2020 Paper)'
      },
      {
        year: 2019,
        exam: 'NEET UG 2019',
        directPyqCount: 1,
        marks: 4,
        questionType: 'SI Unit of Stefan-Boltzmann Constant',
        classification: 'Direct',
        verificationStatus: 'Verified (NEET UG 2019 Paper)'
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
