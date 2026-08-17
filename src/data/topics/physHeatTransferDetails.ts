import { DetailedTopicContent } from '../../types/neet';

export const physHeatTransferDetails: DetailedTopicContent = {
  topicId: 'phys-heat-transfer',
  topicName: 'Heat Transfer',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Properties of Bulk Matter',
  chapter: 'Thermal Properties of Matter',

  whatIsThisTopic: 'Heat Transfer encompasses the fundamental thermal processes by which energy flows from a body at higher temperature to one at lower temperature, including calorimetry, phase changes, thermal conduction, convection, radiation, and Newton\'s Law of Cooling. This comprehensive topic covers heat capacity, specific heat, latent heat of fusion and vaporization, multi-stage phase transitions, thermal conductivity, thermal resistance in composite rods, natural/forced convection, thermal radiation, and the rate of cooling—delivering full NCERT coverage and essential NEET numerical solving patterns.',

  basicIdea: [
    'Heat is energy in transit due to a temperature difference between a system and its surroundings (SI Unit: Joule; 1 cal = 4.186 J).',
    'Sensible heat causes a temperature change without changing state (Q = m · c · ΔT). Latent heat causes a change of state at constant temperature (Q = m · L).',
    'Principle of Calorimetry: In an isolated system, Heat Lost by Hot Bodies = Heat Gained by Cold Bodies.',
    'Water has an exceptionally high specific heat capacity (4186 J/(kg·K) = 1 cal/(g·°C)), making it an effective climate moderator and industrial coolant.',
    'Thermal Conduction is heat transfer through molecular vibrations and free electrons without bulk motion of matter. Rate of heat flow H = k A (T₁ - T₂) / L.',
    'Thermal Resistance R_th = L / (k A) is analogous to electrical resistance, allowing composite slabs/rods to be analyzed using series (R_eq = R₁ + R₂) and parallel rules.',
    'Newton\'s Law of Cooling states that the rate of loss of heat by a body is directly proportional to the temperature difference between the body and its surroundings for small excess temperatures: dT/dt = -k\' (T - T₀).'
  ],

  importantTerms: [
    {
      term: 'Specific Heat Capacity (c)',
      definition: 'The amount of heat energy required to raise the temperature of unit mass (1 kg) of a substance by 1 K (or 1°C): c = Q / (m · ΔT). SI Unit: J/(kg·K) or cal/(g·°C).'
    },
    {
      term: 'Molar Heat Capacity (C_m)',
      definition: 'The amount of heat required to raise the temperature of 1 mole of a substance by 1 K: C_m = Q / (n · ΔT) = M · c.'
    },
    {
      term: 'Water Equivalent of a Body (W)',
      definition: 'The mass of water that absorbs or emits the same amount of heat as the given body for the same rise or fall in temperature: W = m · (c_body / c_water).'
    },
    {
      term: 'Latent Heat of Fusion (L_f)',
      definition: 'The heat required to convert unit mass of solid into liquid at its melting point without any change in temperature. For ice: L_f = 80 cal/g = 3.33 × 10⁵ J/kg.'
    },
    {
      term: 'Latent Heat of Vaporization (L_v)',
      definition: 'The heat required to convert unit mass of liquid into gas/steam at its boiling point at 1 atm without temperature change. For water: L_v = 540 cal/g = 2.26 × 10⁶ J/kg.'
    },
    {
      term: 'Thermal Conductivity (k)',
      definition: 'A measure of the ability of a material to conduct heat. Defined by Fourier\'s law: H = dQ/dt = k A (dT/dx). SI Unit: W/(m·K) or J/(s·m·K).'
    },
    {
      term: 'Thermal Resistance (R_th)',
      definition: 'The opposition offered by a conductor to heat current: R_th = L / (k A). SI Unit: K/W or °C/W.'
    },
    {
      term: 'Newton\'s Law of Cooling',
      definition: 'States that the rate of fall of temperature of a hot body is proportional to the excess temperature above its surroundings: (T₁ - T₂)/t = k\' [ ((T₁ + T₂)/2) - T₀ ].'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Heat, Temperature & Specific Heat Capacity',
      paragraphs: [
        'Temperature measures the degree of hotness or coldness of a body and determines the direction of heat flow (from high T to low T). Zeroth Law of Thermodynamics establishes temperature as a thermodynamic state variable.',
        'Heat capacity C = dQ/dT is the heat required to change the temperature of an entire body by 1 K.',
        'Specific heat capacity c = Q / (m ΔT). For water, c_water = 1 cal/(g·°C) = 4186 J/(kg·K). For ice and steam, c_ice = c_steam ≈ 0.5 cal/(g·°C) = 2100 J/(kg·K).',
        'Applications of Water\'s High Specific Heat: High c of water moderates coastal climates (sea breeze/land breeze) and makes water ideal as an engine coolant in automobile radiators.'
      ]
    },
    {
      heading: '2. Calorimetry & Method of Mixtures',
      paragraphs: [
        'Calorimetry is based on the Law of Conservation of Energy: In an insulated container (calorimeter), Heat Lost by Hot Body = Heat Gained by Cold Body.',
        'If mass m₁ at T₁ is mixed with mass m₂ at T₂ (T₁ > T₂), final equilibrium temperature T_f is given by m₁ c₁ (T₁ - T_f) = m₂ c₂ (T_f - T₂).',
        'If a metal body of mass m_m and specific heat c_m is placed in a copper calorimeter (mass m_c, specific heat c_c) containing water (mass m_w, specific heat c_w), Water Equivalent W = m_c (c_c / c_w). Heat balance: m_m c_m (T_metal - T_f) = (m_w + W) c_w (T_f - T_initial).'
      ]
    },
    {
      heading: '3. Change of State & Heating Curve',
      paragraphs: [
        'Phase transitions occur at fixed temperatures at a given pressure: Melting/Freezing point for solid-liquid, Boiling/Condensation point for liquid-gas.',
        'During a phase transition, added heat energy does NOT increase kinetic energy or temperature; instead, it breaks interatomic/intermolecular bonds, increasing potential energy.',
        'Heating Curve of Water: Plotting Temperature vs Heat Added displays horizontal plateaus during melting at 0°C (Q = m L_f) and boiling at 100°C (Q = m L_v).',
        'Total heat to convert 1 g of ice at -10°C to steam at 100°C: Stage 1 (Ice -10°C to 0°C): Q₁ = m c_ice (10) = 0.5m; Stage 2 (Ice 0°C to Water 0°C): Q₂ = m L_f = 80m; Stage 3 (Water 0°C to Water 100°C): Q₃ = m c_water (100) = 100m; Stage 4 (Water 100°C to Steam 100°C): Q₄ = m L_v = 540m. Total Q = 720.5m cal/g.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 220" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Axes -->
          <line x1="50" y1="180" x2="450" y2="180" stroke="#94a3b8" stroke-width="2"/>
          <line x1="60" y1="20" x2="60" y2="190" stroke="#94a3b8" stroke-width="2"/>
          <text x="220" y="210" fill="#94a3b8" font-size="12" font-weight="bold">Heat Added Q (Joules / Calories)</text>
          <text x="15" y="100" fill="#38bdf8" font-size="11" font-weight="bold" transform="rotate(-90 15 100)">Temp T (°C)</text>

          <!-- Temperature grid lines -->
          <line x1="60" y1="140" x2="450" y2="140" stroke="#334155" stroke-dasharray="2"/>
          <text x="30" y="144" fill="#94a3b8" font-size="10">0°C</text>
          <line x1="60" y1="60" x2="450" y2="60" stroke="#334155" stroke-dasharray="2"/>
          <text x="25" y="64" fill="#94a3b8" font-size="10">100°C</text>

          <!-- Heating path -->
          <!-- Ice heating -10 to 0 -->
          <line x1="60" y1="165" x2="90" y2="140" stroke="#38bdf8" stroke-width="3"/>
          <!-- Melting plateau at 0°C -->
          <line x1="90" y1="140" x2="180" y2="140" stroke="#f59e0b" stroke-width="3"/>
          <!-- Water heating 0 to 100 -->
          <line x1="180" y1="140" x2="270" y2="60" stroke="#38bdf8" stroke-width="3"/>
          <!-- Vaporization plateau at 100°C -->
          <line x1="270" y1="60" x2="410" y2="60" stroke="#ef4444" stroke-width="3"/>
          <!-- Steam heating >100 -->
          <line x1="410" y1="60" x2="440" y2="30" stroke="#38bdf8" stroke-width="3"/>

          <!-- Labels -->
          <text x="100" y="130" fill="#f59e0b" font-size="10" font-weight="bold">Melting (mLf)</text>
          <text x="300" y="50" fill="#ef4444" font-size="10" font-weight="bold">Boiling (mLv)</text>
        </svg>`,
        caption: 'Heating Curve of Water: Note the horizontal plateaus at 0°C and 100°C where added heat (latent heat) changes the state at constant temperature.'
      }
    },
    {
      heading: '4. Thermal Conduction & Thermal Resistance',
      paragraphs: [
        'Conduction: Heat flows from higher T₁ to lower T₂ along a solid conductor of length L and cross-section A. Heat current H = dQ/dt = k A (T₁ - T₂) / L.',
        'In steady state, the rate of heat flow H is uniform across every cross-section of the rod, and temperature decreases linearly along the rod (constant temperature gradient dT/dx = -(T₁ - T₂)/L).',
        'Thermal Resistance Analogy: H = (T₁ - T₂) / R_th, where R_th = L / (k A). This directly mirrors Ohm\'s Law I = ΔV / R.',
        'Composite Rods in Series: For two rods of lengths L₁, L₂ and thermal conductivities k₁, k₂ joined in series, total resistance R_eq = R₁ + R₂ = L₁/(k₁A) + L₂/(k₂A). Interface temperature T_i is found by equating heat currents: k₁ A (T₁ - T_i) / L₁ = k₂ A (T_i - T₂) / L₂.',
        'Composite Slabs in Parallel: For two slabs side by side with same length L and areas A₁, A₂, 1/R_eq = 1/R₁ + 1/R₂. Equivalent thermal conductivity k_eq = (k₁ A₁ + k₂ A₂) / (A₁ + A₂).'
      ]
    },
    {
      heading: '5. Convection, Radiation & Newton\'s Law of Cooling',
      paragraphs: [
        'Convection: Heat transfer in fluids via actual bulk movement of fluid particles. Natural convection is driven by buoyant density differences (warm light fluid rises, cool dense fluid sinks, creating convection currents like land/sea breeze). Forced convection uses external pumps or blowers.',
        'Thermal Radiation: Electromagnetic radiation (infrared waves) emitted by all matter above 0 K. Requires no material medium and travels at the speed of light (3 × 10⁸ m/s).',
        'Newton\'s Law of Cooling: For small excess temperatures above surroundings (T - T₀ << T₀), the rate of loss of heat dQ/dt = -K (T - T₀).',
        'Rate of fall of temperature: dT/dt = - (K / m c) (T - T₀) = - k\' (T - T₀). Integrating yields T(t) - T₀ = (T_initial - T₀) e^(-k\' t).',
        'Average Formula for NEET Numericals: If a body cools from T₁ to T₂ in time t minutes in surroundings at T₀: (T₁ - T₂) / t = k\' [ ((T₁ + T₂)/2) - T₀ ].'
      ]
    }
  ],

  formulae: [
    {
      title: 'Sensible Heat Formula',
      formula: 'Q = m c Delta T',
      variables: 'Q = heat added/lost (J), m = mass (kg), c = specific heat capacity (J/kg·K), ΔT = temp change (K or °C)'
    },
    {
      title: 'Latent Heat Formula',
      formula: 'Q = m L',
      variables: 'L = specific latent heat (J/kg or cal/g); L_f (ice) = 80 cal/g, L_v (steam) = 540 cal/g'
    },
    {
      title: 'Principle of Calorimetry',
      formula: 'text{Heat Lost by Hot Body} = text{Heat Gained by Cold Body}',
      note: 'Valid for thermally insulated systems without heat loss to surroundings.'
    },
    {
      title: 'Thermal Conduction & Heat Current',
      formula: 'H = frac{dQ}{dt} = frac{k A (T_1 - T_2)}{L} = frac{T_1 - T_2}{R_{th}}',
      variables: 'H = heat current (W), k = thermal conductivity (W/m·K), A = area (m²), L = length (m), R_th = L/(kA) = thermal resistance (K/W)'
    },
    {
      title: 'Series Composite Rods',
      formula: 'R_{eq} = R_1 + R_2 implies frac{L_1 + L_2}{k_{eq} A} = frac{L_1}{k_1 A} + frac{L_2}{k_2 A}',
      variables: 'k_eq = equivalent thermal conductivity of series combination'
    },
    {
      title: 'Parallel Composite Slabs',
      formula: 'frac{1}{R_{eq}} = frac{1}{R_1} + frac{1}{R_2} implies k_{eq} (A_1 + A_2) = k_1 A_1 + k_2 A_2'
    },
    {
      title: 'Newton\'s Law of Cooling (Average Form for NEET)',
      formula: 'frac{T_1 - T_2}{t} = k\' left( frac{T_1 + T_2}{2} - T_0 right)',
      variables: 'T₁ = initial temp, T₂ = final temp, t = time interval, T₀ = surrounding temp, k\' = cooling constant'
    }
  ],

  neetImportantPoints: [
    'During phase change (melting/boiling), temperature remains CONSTANT and specific heat capacity c becomes INFINITE (c = Q / (m × 0) = ∞).',
    'During adiabatic processes, c = 0 because Q = 0.',
    'Steam causes much more severe burns than boiling water at 100°C because 1 g of steam releases an additional 540 calories of latent heat upon condensing on skin.',
    'Thermal resistance R_th = L / (k A). Good thermal conductors (metals) have high k and low R_th; insulators (wood, wool, still air) have low k and high R_th.',
    'In Newton\'s Law of Cooling average formula, the approximation ((T₁ + T₂)/2) is accurate only when the temperature drop (T₁ - T₂) is small relative to T₀.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing Heat Capacity with Specific Heat Capacity.',
      correctFact: 'Heat Capacity C = m · c depends on the mass of the object (extensive property). Specific Heat Capacity c is per unit mass and depends only on material nature (intensive property).',
      whyItMattersForNEET: 'Direct conceptual distinction tested in NEET MCQs.'
    },
    {
      commonConfusion: 'Assuming temperature increases whenever heat is supplied to a body.',
      correctFact: 'During a change of state (e.g. melting ice or boiling water), temperature stays strictly constant despite continuous heat input!',
      whyItMattersForNEET: 'Trap in heating curve graph interpretations.'
    },
    {
      commonConfusion: 'Applying Newton\'s Law of Cooling for large temperature differences (e.g. 500°C drop).',
      correctFact: 'Newton\'s Law of Cooling is a linear approximation valid ONLY for small excess temperature differences above surroundings (T - T₀ << T₀). For large ΔT, Stefan-Boltzmann 4th power law must be used.',
      whyItMattersForNEET: 'Conceptual question on validity conditions.'
    }
  ],

  quickRevision: [
    'Q = m c ΔT (sensible heat), Q = m L (latent heat)',
    'Water: c = 1 cal/g·°C = 4186 J/kg·K; L_f = 80 cal/g; L_v = 540 cal/g',
    'Calorimetry: Heat Lost = Heat Gained; Water equivalent W = m_c (c_c / c_w)',
    'Heat Current H = k A (T₁ - T₂) / L = ΔT / R_th',
    'Thermal Resistance R_th = L / (k A) (Series: R_eq = R₁ + R₂; Parallel: 1/R_eq = 1/R₁ + 1/R₂)',
    'Newton\'s Law of Cooling: (T₁ - T₂)/t = k\' [ ((T₁ + T₂)/2) - T₀ ]'
  ],

  practiceQuestions: [
  {
    "id": "ht-1",
    "question": "How much heat is required to convert 10 g of ice at -10°C into steam at 100°C? (Given: c_ice = 0.5 cal/g·°C, L_f = 80 cal/g, c_water = 1 cal/g·°C, L_v = 540 cal/g)",
    "options": [
      "7205 calories",
      "6400 calories",
      "5400 calories",
      "7250 calories"
    ],
    "correctOption": 0,
    "explanation": "Break into 4 stages: Q₁ (Ice -10°C to 0°C) = 10 × 0.5 × 10 = 50 cal; Q₂ (Ice 0°C to Water 0°C) = 10 × 80 = 800 cal; Q₃ (Water 0°C to Water 100°C) = 10 × 1 × 100 = 1000 cal; Q₄ (Water 100°C to Steam 100°C) = 10 × 540 = 5400 cal. Total Q = 50 + 800 + 1000 + 5400 = 7205 calories."
  },
  {
    "id": "ht-2",
    "question": "A body cools from 80°C to 60°C in 5 minutes when surrounding temperature is 20°C. How much time will it take to cool from 60°C to 40°C in the same surroundings?",
    "options": [
      "5 minutes",
      "8.33 minutes",
      "10 minutes",
      "6.67 minutes"
    ],
    "correctOption": 1,
    "explanation": "Using Newton's Law of Cooling average formula: Step 1 (80°C to 60°C in 5 min): (80 - 60)/5 = k' [ (80+60)/2 - 20 ] => 4 = k' (70 - 20) = 50 k' => k' = 4/50 = 0.08 min⁻¹. Step 2 (60°C to 40°C in time t): (60 - 40)/t = k' [ (60+40)/2 - 20 ] => 20/t = 0.08 × (50 - 20) = 0.08 × 30 = 2.4 => t = 20 / 2.4 = 8.33 minutes."
  },
  {
    "id": "prac-physheattransfer-3",
    "question": "Regarding Heat Transfer, which of the following statements correctly resolves a common misconception about \"Confusing Heat Capacity with Specific Heat Capacity.\"?",
    "options": [
      "Heat Capacity C = m · c depends on the mass of the object (extensive property). Specific Heat Capacity c is per unit mass and depends only on material nature (intensive property).",
      "Incorrect assumption: Confusing Heat Capacity with Specific Heat Capacity.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Heat Capacity C = m · c depends on the mass of the object (extensive property). Specific Heat Capacity c is per unit mass and depends only on material nature (intensive property).. Direct conceptual distinction tested in NEET MCQs.",
    "difficulty": "Medium",
    "conceptTested": "Heat Transfer - Conceptual Clarity"
  },
  {
    "id": "prac-physheattransfer-4",
    "question": "Regarding Heat Transfer, which of the following statements correctly resolves a common misconception about \"Assuming temperature increases whenever heat is supplied to a body.\"?",
    "options": [
      "During a change of state (e.g. melting ice or boiling water), temperature stays strictly constant despite continuous heat input!",
      "Incorrect assumption: Assuming temperature increases whenever heat is supplied to a body.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "During a change of state (e.g. melting ice or boiling water), temperature stays strictly constant despite continuous heat input!. Trap in heating curve graph interpretations.",
    "difficulty": "Medium",
    "conceptTested": "Heat Transfer - Conceptual Clarity"
  },
  {
    "id": "prac-physheattransfer-5",
    "question": "Regarding Heat Transfer, which of the following statements correctly resolves a common misconception about \"Applying Newton's Law of Cooling for large temperature differences (e.g. 500°C drop).\"?",
    "options": [
      "Newton's Law of Cooling is a linear approximation valid ONLY for small excess temperature differences above surroundings (T - T₀ << T₀). For large ΔT, Stefan-Boltzmann 4th power law must be used.",
      "Incorrect assumption: Applying Newton's Law of Cooling for large temperature differences (e.g. 500°C drop).",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Newton's Law of Cooling is a linear approximation valid ONLY for small excess temperature differences above surroundings (T - T₀ << T₀). For large ΔT, Stefan-Boltzmann 4th power law must be used.. Conceptual question on validity conditions.",
    "difficulty": "Medium",
    "conceptTested": "Heat Transfer - Conceptual Clarity"
  },
  {
    "id": "prac-physheattransfer-6",
    "question": "In the study of Heat Transfer, what is the exact definition and significance of \"Specific Heat Capacity (c)\"?",
    "options": [
      "The amount of heat energy required to raise the temperature of unit mass (1 kg) of a substance by 1 K (or 1°C): c = Q / (m · ΔT). SI Unit: J/(kg·K) or cal/(g·°C).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The amount of heat energy required to raise the temperature of unit mass (1 kg) of a substance by 1 K (or 1°C): c = Q / (m · ΔT). SI Unit: J/(kg·K) or cal/(g·°C).. ",
    "difficulty": "Easy",
    "conceptTested": "Specific Heat Capacity (c) definition"
  },
  {
    "id": "prac-physheattransfer-7",
    "question": "In the study of Heat Transfer, what is the exact definition and significance of \"Molar Heat Capacity (C_m)\"?",
    "options": [
      "The amount of heat required to raise the temperature of 1 mole of a substance by 1 K: C_m = Q / (n · ΔT) = M · c.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The amount of heat required to raise the temperature of 1 mole of a substance by 1 K: C_m = Q / (n · ΔT) = M · c.. ",
    "difficulty": "Easy",
    "conceptTested": "Molar Heat Capacity (C_m) definition"
  },
  {
    "id": "prac-physheattransfer-8",
    "question": "In the study of Heat Transfer, what is the exact definition and significance of \"Water Equivalent of a Body (W)\"?",
    "options": [
      "The mass of water that absorbs or emits the same amount of heat as the given body for the same rise or fall in temperature: W = m · (c_body / c_water).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The mass of water that absorbs or emits the same amount of heat as the given body for the same rise or fall in temperature: W = m · (c_body / c_water).. ",
    "difficulty": "Easy",
    "conceptTested": "Water Equivalent of a Body (W) definition"
  },
  {
    "id": "prac-physheattransfer-9",
    "question": "In the study of Heat Transfer, what is the exact definition and significance of \"Latent Heat of Fusion (L_f)\"?",
    "options": [
      "The heat required to convert unit mass of solid into liquid at its melting point without any change in temperature. For ice: L_f = 80 cal/g = 3.33 × 10⁵ J/kg.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The heat required to convert unit mass of solid into liquid at its melting point without any change in temperature. For ice: L_f = 80 cal/g = 3.33 × 10⁵ J/kg.. ",
    "difficulty": "Easy",
    "conceptTested": "Latent Heat of Fusion (L_f) definition"
  },
  {
    "id": "prac-physheattransfer-10",
    "question": "In the study of Heat Transfer, what is the exact definition and significance of \"Latent Heat of Vaporization (L_v)\"?",
    "options": [
      "The heat required to convert unit mass of liquid into gas/steam at its boiling point at 1 atm without temperature change. For water: L_v = 540 cal/g = 2.26 × 10⁶ J/kg.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The heat required to convert unit mass of liquid into gas/steam at its boiling point at 1 atm without temperature change. For water: L_v = 540 cal/g = 2.26 × 10⁶ J/kg.. ",
    "difficulty": "Easy",
    "conceptTested": "Latent Heat of Vaporization (L_v) definition"
  }
],
  pyqs: []
};
