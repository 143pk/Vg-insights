import { DetailedTopicContent } from '../../types/neet';

export const physThermalExpansionDetails: DetailedTopicContent = {
  topicId: 'phys-thermal-expansion',
  topicName: 'Thermal Expansion',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Properties of Bulk Matter',
  chapter: 'Thermal Properties of Matter',

  whatIsThisTopic: 'Thermal expansion is the fractional change in dimension (length, surface area, or volume) of a body when its temperature is increased. Virtually all solids, liquids, and gases expand on heating due to the asymmetrical nature of interatomic potential energy curves. This topic covers the microscopic origin of expansion, coefficients of linear (α), superficial (β), and cubical (γ) expansion, thermal stress in clamped rods, bimetallic strips, real vs. apparent expansion of liquids, vessel expansion, the anomalous behavior of water between 0°C and 4°C, and pendulum clock errors—providing full NCERT alignment and NEET numerical patterns.',

  basicIdea: [
    'Heating increases the kinetic energy of atoms, causing them to vibrate with greater amplitude around their equilibrium positions.',
    'Because the interatomic potential energy curve is asymmetric, the mean interatomic separation distance increases as vibrational energy rises.',
    'Solids exhibit three modes of expansion: Linear (1D), Superficial/Area (2D), and Cubical/Volume (3D).',
    'For isotropic solids, the coefficients are related by α : β : γ = 1 : 2 : 3, meaning β = 2α and γ = 3α.',
    'Liquids have no definite shape, so they undergo volume expansion. Since the containing vessel also expands, Real Liquid Expansion = Apparent Expansion + Vessel Expansion (γ_real = γ_apparent + γ_vessel).',
    'Density of a substance decreases with increasing temperature according to ρ_T = ρ₀ / (1 + γ ΔT) ≈ ρ₀ (1 - γ ΔT).',
    'Water exhibits anomalous expansion: as temperature rises from 0°C to 4°C, its volume contracts and density increases to a maximum at 4°C (1000 kg/m³).'
  ],

  importantTerms: [
    {
      term: 'Coefficient of Linear Expansion (α)',
      definition: 'The fractional change in length per unit temperature change: α = ΔL / (L₀ · ΔT). SI Unit: K⁻¹ or °C⁻¹. Dimensions: [M⁰ L⁰ T⁰ K⁻¹].'
    },
    {
      term: 'Coefficient of Area Expansion (β)',
      definition: 'The fractional change in surface area per unit temperature change: β = ΔA / (A₀ · ΔT). Equal to 2α for isotropic solids.'
    },
    {
      term: 'Coefficient of Volume Expansion (γ)',
      definition: 'The fractional change in volume per unit temperature change: γ = ΔV / (V₀ · ΔT). Equal to 3α for isotropic solids.'
    },
    {
      term: 'Real vs. Apparent Expansion of Liquid',
      definition: 'Real expansion (γ_real) is the true increase in liquid volume per unit degree rise in temperature. Apparent expansion (γ_app) is the observed expansion relative to an expanding container.'
    },
    {
      term: 'Thermal Stress (σ)',
      definition: 'The internal elastic stress developed in a rigid, constrained bar when temperature change is prevented from causing free thermal expansion: σ = Y · α · ΔT.'
    },
    {
      term: 'Anomalous Expansion of Water',
      definition: 'The peculiar contraction of water between 0°C and 4°C upon heating, resulting in maximum density at 4°C (1000 kg/m³).'
    },
    {
      term: 'Bimetallic Strip',
      definition: 'A strip consisting of two riveted metal strips with different α values. Upon heating, it bends toward the metal with the smaller α value.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Microscopic Mechanism & Potential Energy Curve',
      paragraphs: [
        'At absolute zero, atoms occupy positions corresponding to the minimum potential energy (U_min) in the interatomic potential energy well. As temperature rises, atoms absorb thermal energy and vibrate about their equilibrium positions.',
        'The potential energy curve U(r) as a function of interatomic separation r is asymmetric: the curve is steeper at distances closer than r₀ and flatter at distances greater than r₀. Consequently, as the amplitude of atomic vibration increases with temperature, the average interatomic separation <r> shifts to higher values.',
        'If the potential energy curve were perfectly symmetric (parabolic), the average atomic separation would remain constant with temperature and no thermal expansion would occur.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 240" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Axes -->
          <line x1="50" y1="200" x2="450" y2="200" stroke="#94a3b8" stroke-width="2"/>
          <line x1="80" y1="20" x2="80" y2="220" stroke="#94a3b8" stroke-width="2"/>
          <text x="460" y="205" fill="#94a3b8" font-size="12" font-weight="bold">r (Interatomic distance)</text>
          <text x="75" y="15" fill="#94a3b8" font-size="12" font-weight="bold">U(r) Potential Energy</text>
          
          <!-- Asymmetric Potential Well -->
          <path d="M 100 30 C 105 150 140 190 180 190 C 250 190 350 120 440 100" fill="none" stroke="#38bdf8" stroke-width="3"/>
          
          <!-- Energy levels -->
          <line x1="120" y1="160" x2="230" y2="160" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4"/>
          <text x="235" y="164" fill="#f59e0b" font-size="10">Lower Temp (E1) → &lt;r1&gt;</text>
          
          <line x1="108" y1="100" x2="350" y2="100" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4"/>
          <text x="355" y="104" fill="#ef4444" font-size="10">Higher Temp (E2) → &lt;r2&gt;</text>

          <!-- Mean Positions -->
          <circle cx="175" cy="160" r="4" fill="#f59e0b"/>
          <circle cx="229" cy="100" r="4" fill="#ef4444"/>
          <line x1="175" y1="160" x2="175" y2="200" stroke="#f59e0b" stroke-dasharray="2"/>
          <line x1="229" y1="100" x2="229" y2="200" stroke="#ef4444" stroke-dasharray="2"/>
          
          <!-- Equilibrium r0 -->
          <text x="180" y="215" fill="#f59e0b" font-size="11" font-weight="bold">r1</text>
          <text x="234" y="215" fill="#ef4444" font-size="11" font-weight="bold">r2 (&gt; r1)</text>
        </svg>`,
        caption: 'Asymmetric Interatomic Potential Energy Curve: Higher vibrational energy level E2 shifts the mean interatomic separation <r2> to a larger value than <r1>, causing macroscopic thermal expansion.'
      }
    },
    {
      heading: '2. Expansion of Solids: Linear, Superficial & Cubical Expansion',
      paragraphs: [
        'Linear Expansion: For a solid rod of initial length L₀ heated by ΔT, the change in length is ΔL = α L₀ ΔT, and final length L_T = L₀ (1 + α ΔT).',
        'Superficial Expansion: For a surface of initial area A₀, the change in area is ΔA = β A₀ ΔT, and final area A_T = A₀ (1 + β ΔT).',
        'Cubical Expansion: For a 3D block of initial volume V₀, the change in volume is ΔV = γ V₀ ΔT, and final volume V_T = V₀ (1 + γ ΔT).',
        'Derivation of β = 2α and γ = 3α for isotropic solids:',
        'Consider a square sheet of side L₀. Heated by ΔT, L_T = L₀(1 + α ΔT). The new area A_T = L_T² = L₀²(1 + α ΔT)² = A₀(1 + 2α ΔT + α² ΔT²). Since α ΔT << 1, neglecting α² ΔT² gives A_T ≈ A₀(1 + 2α ΔT). Comparing with A_T = A₀(1 + β ΔT) yields β = 2α.',
        'Similarly for a cube of volume V₀, V_T = L_T³ = L₀³(1 + α ΔT)³ = V₀(1 + 3α ΔT + 3α² ΔT² + α³ ΔT³) ≈ V₀(1 + 3α ΔT), which yields γ = 3α.',
        'For anisotropic solids (having different directional expansion coefficients α_x, α_y, α_z), the cubical expansion coefficient is γ = α_x + α_y + α_z.'
      ]
    },
    {
      heading: '3. Thermal Stress & Pendulum Clock Time Errors',
      paragraphs: [
        'Thermal Stress in Constrained Rods: If a rod clamped rigidly between two unbreakable walls is heated by ΔT, free expansion ΔL = α L₀ ΔT is prevented. The walls exert compressive force causing thermal strain = ΔL / L₀ = α ΔT.',
        'From Young\'s Modulus Y = Stress / Strain, Thermal Stress σ = Y · α · ΔT. The force exerted by the rod on clamps is F = A · σ = Y A α ΔT.',
        'Time Period Error in Pendulum Clock: Time period T_p = 2π √(L / g). If temperature increases by Δθ, length becomes L\' = L(1 + α Δθ). The new period T_p\' = T_p (1 + α Δθ)^(1/2) ≈ T_p (1 + ½ α Δθ).',
        'Fractional change in time period ΔT_p / T_p = ½ α Δθ. The time lost or gained per day (86,400 seconds) is Δt = ½ α Δθ × 86400 seconds. In summer (temp rises), length L increases, period T_p increases (clock runs slow, losing time). In winter, clock runs fast (gaining time).'
      ]
    },
    {
      heading: '4. Expansion of Liquids & Vessel Expansion',
      paragraphs: [
        'Because liquids must be held in containers, heating the liquid also heats the vessel. Both the vessel and liquid expand simultaneously.',
        'Real Expansion (γ_real) represents true bulk expansion of liquid molecules. Apparent Expansion (γ_app) represents the observed liquid rise above the expanding container.',
        'Relation: γ_real = γ_apparent + γ_vessel = γ_apparent + 3α_vessel.',
        'Variation of Density with Temperature: Mass M = V_T · ρ_T = V₀ · ρ₀. Therefore ρ_T = ρ₀ / (1 + γ ΔT) = ρ₀ (1 + γ ΔT)⁻¹ ≈ ρ₀ (1 - γ ΔT). Density decreases with rising temperature.'
      ]
    },
    {
      heading: '5. Anomalous Expansion of Water',
      paragraphs: [
        'Unlike most liquids, water contracts when heated from 0°C to 4°C (volume decreases, density increases). At 4°C, water reaches its MAXIMUM density (1000 kg/m³ or 1.000 g/cm³).',
        'Above 4°C, water expands normally like other liquids (volume increases, density decreases).',
        'Ecological Importance in Winter: In freezing cold weather, surface water cools down to 4°C, becomes denser, and sinks to the bottom. As surface water cools below 4°C (e.g. to 0°C), it becomes lighter and stays at the surface to freeze into ice.',
        'Because ice and water at 0°C stay at top while 4°C denser liquid remains at the bottom of deep lakes, aquatic life (fish, plants) survives comfortably under the insulating ice sheet.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 200" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <line x1="50" y1="160" x2="450" y2="160" stroke="#94a3b8" stroke-width="2"/>
          <line x1="80" y1="30" x2="80" y2="170" stroke="#94a3b8" stroke-width="2"/>
          <text x="220" y="190" fill="#94a3b8" font-size="12" font-weight="bold">Temperature (°C)</text>
          <text x="15" y="100" fill="#38bdf8" font-size="11" font-weight="bold" transform="rotate(-90 15 100)">Density ρ (g/cm³)</text>
          
          <!-- Curve for density vs temp -->
          <path d="M 80 120 Q 180 40 220 40 Q 300 60 440 150" fill="none" stroke="#38bdf8" stroke-width="3"/>
          <circle cx="220" cy="40" r="5" fill="#f59e0b"/>
          <line x1="220" y1="40" x2="220" y2="160" stroke="#f59e0b" stroke-dasharray="3"/>
          
          <text x="210" y="175" fill="#f59e0b" font-size="12" font-weight="bold">4°C</text>
          <text x="75" y="175" fill="#94a3b8" font-size="11">0°C</text>
          <text x="230" y="35" fill="#f59e0b" font-size="11" font-weight="bold">Max Density = 1.000 g/cm³</text>
        </svg>`,
        caption: 'Anomalous Expansion Curve of Water: Density peaks sharply at 4°C, creating a dense 4°C bottom layer in freezing lakes.'
      }
    }
  ],

  formulae: [
    {
      title: 'Linear Expansion Formula',
      formula: 'Delta L = alpha L_0 Delta T implies L_T = L_0 (1 + alpha Delta T)',
      variables: 'ΔL = change in length (m), L₀ = initial length (m), α = linear expansion coefficient (K⁻¹), ΔT = temp change (K or °C)',
      note: 'Valid for isotropic uniform rods.'
    },
    {
      title: 'Superficial & Cubical Expansion',
      formula: 'Delta A = beta A_0 Delta T, quad Delta V = gamma V_0 Delta T',
      variables: 'β = superficial expansion coefficient, γ = cubical expansion coefficient',
      note: 'For isotropic solids: α : β : γ = 1 : 2 : 3.'
    },
    {
      title: 'Thermal Stress & Clamp Force',
      formula: 'sigma = Y alpha Delta T, quad F = Y A alpha Delta T',
      variables: 'σ = thermal stress (N/m²), Y = Young\'s Modulus (Pa), A = cross-sectional area (m²), F = compressive force on clamps (N)'
    },
    {
      title: 'Real vs. Apparent Expansion of Liquids',
      formula: 'gamma_{real} = gamma_{apparent} + gamma_{vessel} = gamma_{apparent} + 3 alpha_{vessel}',
      variables: 'γ_real = true liquid expansion coeff, γ_apparent = observed liquid expansion coeff, α_vessel = linear expansion coeff of vessel material'
    },
    {
      title: 'Density Variation with Temperature',
      formula: 'rho_T = frac{rho_0}{1 + gamma Delta T} approx rho_0 (1 - gamma Delta T)',
      variables: 'ρ_T = density at temp T, ρ₀ = initial density, γ = volume expansion coefficient of liquid/solid'
    },
    {
      title: 'Pendulum Clock Time Loss / Gain',
      formula: 'frac{Delta T_p}{T_p} = frac{1}{2} alpha Delta theta implies Delta t_{day} = frac{1}{2} alpha Delta theta times 86400 text{ s}',
      variables: 'ΔT_p/T_p = fractional period change, α = linear coeff of pendulum wire, Δθ = temp rise, Δt_day = seconds lost per day'
    },
    {
      title: 'Temperature Scale Conversion',
      formula: 'frac{C}{5} = frac{F - 32}{9} = frac{K - 273.15}{5}',
      variables: 'C = Celsius, F = Fahrenheit, K = Kelvin',
      note: 'Note that temperature differences are equal in Celsius and Kelvin: ΔT(°C) = ΔT(K).'
    }
  ],

  neetImportantPoints: [
    'Water has maximum density at 4°C (1000 kg/m³ or 1 g/cm³) and minimum volume at 4°C.',
    'A cavity/hole inside a solid expands on heating exactly as if it were filled with the surrounding solid material (fractional radius increase Δr/r₀ = α ΔT).',
    'When a bimetallic strip (composed of metals A and B with α_A > α_B) is heated, it bends into an arc with metal A on the outer convex side. When cooled, metal A shrinks more and ends on the inner concave side.',
    'For two rods of lengths L₁ and L₂ to maintain a constant difference in length (L₁ - L₂) at all temperatures, L₁ α₁ = L₂ α₂.',
    'Fractional change in temperature ΔT is identical in Celsius and Kelvin scales: 1 °C change = 1 K change.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking a hole or cavity in a metal plate contracts or shrinks when heated.',
      correctFact: 'Every linear dimension expands uniformly on heating. The hole expands with the exact same coefficient α as the solid metal plate.',
      whyItMattersForNEET: 'A classic NTA trap question asking whether a hole in a washer gets larger or smaller when heated.'
    },
    {
      commonConfusion: 'Confusing real liquid expansion coefficient with apparent liquid expansion coefficient.',
      correctFact: 'Real expansion γ_real = γ_apparent + γ_vessel. If vessel material expands faster than liquid (γ_vessel > γ_real), the liquid level in the neck actually drops on heating!',
      whyItMattersForNEET: 'Direct numerical and conceptual question in NEET.'
    },
    {
      commonConfusion: 'Using Celsius formula directly when evaluating ratio of absolute densities or gas laws.',
      correctFact: 'Density formula ρ_T ≈ ρ₀(1 - γ ΔT) uses temperature difference ΔT. But for absolute ratios, T must be in Kelvin.',
      whyItMattersForNEET: 'Units error leading to negative mark traps.'
    }
  ],

  quickRevision: [
    'ΔL = α L₀ ΔT, ΔA = β A₀ ΔT, ΔV = γ V₀ ΔT',
    'Isotropic solid relation: α : β : γ = 1 : 2 : 3 (β = 2α, γ = 3α)',
    'Cavity expands on heating (same α as solid body)',
    'Thermal Stress σ = Y α ΔT, Thermal Force F = Y A α ΔT',
    'γ_real = γ_apparent + γ_vessel = γ_apparent + 3 α_vessel',
    'Density variation: ρ_T ≈ ρ₀ (1 - γ ΔT)',
    'Water max density at 4°C (1000 kg/m³)',
    'Pendulum time loss per day: Δt = ½ α Δθ × 86400 s'
  ],

  practiceQuestions: [
  {
    "id": "pe-1",
    "question": "A copper rod of length 1 m is clamped between two rigid unbreakable supports at 20°C. Find the compressive thermal stress developed in the rod if its temperature is raised to 120°C. (Given: α = 1.7 × 10⁻⁵ K⁻¹, Y = 1.2 × 10¹¹ N/m²)",
    "options": [
      "1.7 × 10⁸ N/m²",
      "2.04 × 10⁸ N/m²",
      "1.2 × 10⁷ N/m²",
      "3.4 × 10⁸ N/m²"
    ],
    "correctOption": 1,
    "explanation": "Thermal stress σ = Y · α · ΔT. Here ΔT = 120°C - 20°C = 100 K. Thus σ = (1.2 × 10¹¹ N/m²) × (1.7 × 10⁻⁵ K⁻¹) × 100 K = 2.04 × 10⁸ N/m²."
  },
  {
    "id": "pe-2",
    "question": "A brass vessel of volume 1000 cm³ is completely filled with paraffin oil at 20°C. When heated to 70°C, 15 cm³ of oil overflows. If the linear expansion coefficient of brass is 2.0 × 10⁻⁵ °C⁻¹, calculate the real cubical expansion coefficient of paraffin oil.",
    "options": [
      "3.6 × 10⁻⁴ °C⁻¹",
      "3.0 × 10⁻⁴ °C⁻¹",
      "2.4 × 10⁻⁴ °C⁻¹",
      "1.8 × 10⁻⁴ °C⁻¹"
    ],
    "correctOption": 0,
    "explanation": "Overflow volume ΔV_overflow = V₀ · γ_apparent · ΔT. Here ΔV_overflow = 15 cm³, V₀ = 1000 cm³, ΔT = 50°C. Thus γ_apparent = 15 / (1000 × 50) = 3.0 × 10⁻⁴ °C⁻¹. Vessel cubical expansion γ_vessel = 3 α_brass = 3 × (2.0 × 10⁻⁵) = 0.6 × 10⁻⁴ °C⁻¹. Real expansion γ_real = γ_apparent + γ_vessel = 3.0 × 10⁻⁴ + 0.6 × 10⁻⁴ = 3.6 × 10⁻⁴ °C⁻¹."
  },
  {
    "id": "prac-physthermalexpansion-3",
    "question": "Regarding Thermal Expansion, which of the following statements correctly resolves a common misconception about \"Thinking a hole or cavity in a metal plate contracts or shrinks when heated.\"?",
    "options": [
      "Every linear dimension expands uniformly on heating. The hole expands with the exact same coefficient α as the solid metal plate.",
      "Incorrect assumption: Thinking a hole or cavity in a metal plate contracts or shrinks when heated.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Every linear dimension expands uniformly on heating. The hole expands with the exact same coefficient α as the solid metal plate.. A classic NTA trap question asking whether a hole in a washer gets larger or smaller when heated.",
    "difficulty": "Medium",
    "conceptTested": "Thermal Expansion - Conceptual Clarity"
  },
  {
    "id": "prac-physthermalexpansion-4",
    "question": "Regarding Thermal Expansion, which of the following statements correctly resolves a common misconception about \"Confusing real liquid expansion coefficient with apparent liquid expansion coefficient.\"?",
    "options": [
      "Real expansion γ_real = γ_apparent + γ_vessel. If vessel material expands faster than liquid (γ_vessel > γ_real), the liquid level in the neck actually drops on heating!",
      "Incorrect assumption: Confusing real liquid expansion coefficient with apparent liquid expansion coefficient.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Real expansion γ_real = γ_apparent + γ_vessel. If vessel material expands faster than liquid (γ_vessel > γ_real), the liquid level in the neck actually drops on heating!. Direct numerical and conceptual question in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Thermal Expansion - Conceptual Clarity"
  },
  {
    "id": "prac-physthermalexpansion-5",
    "question": "Regarding Thermal Expansion, which of the following statements correctly resolves a common misconception about \"Using Celsius formula directly when evaluating ratio of absolute densities or gas laws.\"?",
    "options": [
      "Density formula ρ_T ≈ ρ₀(1 - γ ΔT) uses temperature difference ΔT. But for absolute ratios, T must be in Kelvin.",
      "Incorrect assumption: Using Celsius formula directly when evaluating ratio of absolute densities or gas laws.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Density formula ρ_T ≈ ρ₀(1 - γ ΔT) uses temperature difference ΔT. But for absolute ratios, T must be in Kelvin.. Units error leading to negative mark traps.",
    "difficulty": "Medium",
    "conceptTested": "Thermal Expansion - Conceptual Clarity"
  },
  {
    "id": "prac-physthermalexpansion-6",
    "question": "In the study of Thermal Expansion, what is the exact definition and significance of \"Coefficient of Linear Expansion (α)\"?",
    "options": [
      "The fractional change in length per unit temperature change: α = ΔL / (L₀ · ΔT). SI Unit: K⁻¹ or °C⁻¹. Dimensions: [M⁰ L⁰ T⁰ K⁻¹].",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The fractional change in length per unit temperature change: α = ΔL / (L₀ · ΔT). SI Unit: K⁻¹ or °C⁻¹. Dimensions: [M⁰ L⁰ T⁰ K⁻¹].. ",
    "difficulty": "Easy",
    "conceptTested": "Coefficient of Linear Expansion (α) definition"
  },
  {
    "id": "prac-physthermalexpansion-7",
    "question": "In the study of Thermal Expansion, what is the exact definition and significance of \"Coefficient of Area Expansion (β)\"?",
    "options": [
      "The fractional change in surface area per unit temperature change: β = ΔA / (A₀ · ΔT). Equal to 2α for isotropic solids.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The fractional change in surface area per unit temperature change: β = ΔA / (A₀ · ΔT). Equal to 2α for isotropic solids.. ",
    "difficulty": "Easy",
    "conceptTested": "Coefficient of Area Expansion (β) definition"
  },
  {
    "id": "prac-physthermalexpansion-8",
    "question": "In the study of Thermal Expansion, what is the exact definition and significance of \"Coefficient of Volume Expansion (γ)\"?",
    "options": [
      "The fractional change in volume per unit temperature change: γ = ΔV / (V₀ · ΔT). Equal to 3α for isotropic solids.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The fractional change in volume per unit temperature change: γ = ΔV / (V₀ · ΔT). Equal to 3α for isotropic solids.. ",
    "difficulty": "Easy",
    "conceptTested": "Coefficient of Volume Expansion (γ) definition"
  },
  {
    "id": "prac-physthermalexpansion-9",
    "question": "In the study of Thermal Expansion, what is the exact definition and significance of \"Real vs. Apparent Expansion of Liquid\"?",
    "options": [
      "Real expansion (γ_real) is the true increase in liquid volume per unit degree rise in temperature. Apparent expansion (γ_app) is the observed expansion relative to an expanding container.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Real expansion (γ_real) is the true increase in liquid volume per unit degree rise in temperature. Apparent expansion (γ_app) is the observed expansion relative to an expanding container.. ",
    "difficulty": "Easy",
    "conceptTested": "Real vs. Apparent Expansion of Liquid definition"
  },
  {
    "id": "prac-physthermalexpansion-10",
    "question": "In the study of Thermal Expansion, what is the exact definition and significance of \"Thermal Stress (σ)\"?",
    "options": [
      "The internal elastic stress developed in a rigid, constrained bar when temperature change is prevented from causing free thermal expansion: σ = Y · α · ΔT.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The internal elastic stress developed in a rigid, constrained bar when temperature change is prevented from causing free thermal expansion: σ = Y · α · ΔT.. ",
    "difficulty": "Easy",
    "conceptTested": "Thermal Stress (σ) definition"
  }
],
  pyqs: []
};
