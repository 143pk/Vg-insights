import { DetailedTopicContent } from '../../types/neet';

export const physBlackbodyRadiationDetails: DetailedTopicContent = {
  topicId: 'phys-blackbody-radiation',
  topicName: 'Blackbody Radiation',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Properties of Bulk Matter',
  chapter: 'Thermal Properties of Matter',

  whatIsThisTopic: 'Blackbody Radiation is the electromagnetic radiation emitted by a perfect absorber and emitter in thermal equilibrium with its surroundings. This topic forms the cornerstone of radiation physics, quantum theory, and astrophysics—covering absorptive power, emissive power, emissivity, Kirchhoff\'s Law, Stefan-Boltzmann Law, Wien\'s Displacement Law, blackbody energy distribution spectrum, stellar temperature determination, and the greenhouse effect with full NCERT alignment and NEET UG numerical problem patterns.',

  basicIdea: [
    'All bodies at absolute temperature T > 0 K continuously emit electromagnetic radiation (thermal radiation) into their surroundings.',
    'An Ideal Blackbody absorbs 100% of all incident radiation of all wavelengths falling on it (Absorptivity a = 1, Reflectivity r = 0, Transmittivity t = 0).',
    'Kirchhoff\'s Law: Good absorbers are good emitters at any given wavelength and temperature (E_λ / a_λ = Constant = E_blackbody).',
    'Stefan-Boltzmann Law: Total power radiated per unit area by a blackbody is proportional to the 4th power of absolute temperature: P = σ A T⁴.',
    'Net radiant heat loss in surroundings at temperature T₀: P_net = e σ A (T⁴ - T₀⁴).',
    'Wien\'s Displacement Law: The wavelength λ_max at which spectral emissive power peaks is inversely proportional to absolute temperature: λ_max · T = b (Wien\'s Constant b = 2.898 × 10⁻³ m·K).'
  ],

  importantTerms: [
    {
      term: 'Ideal Blackbody',
      definition: 'A surface or enclosure that absorbs all electromagnetic radiation incident upon it, regardless of frequency or angle of incidence (a = 1, e = 1).'
    },
    {
      term: 'Absorptive Power / Absorptivity (a)',
      definition: 'The ratio of radiant energy absorbed by a surface to total radiant energy incident on it in a given time: a = dQ_absorbed / dQ_incident (Dimensionless, 0 ≤ a ≤ 1).'
    },
    {
      term: 'Emissive Power (E_λ)',
      definition: 'Radiant energy emitted per unit surface area per unit time per unit wavelength interval at a specific wavelength λ. SI Unit: W/(m²·m) or W/m³.'
    },
    {
      term: 'Emissivity (e)',
      definition: 'The ratio of total radiant energy emitted by a real surface to that emitted by an ideal blackbody at the same temperature: e = E_real / E_blackbody (Dimensionless, 0 ≤ e ≤ 1).'
    },
    {
      term: 'Stefan\'s Constant (σ)',
      definition: 'Universal constant in Stefan-Boltzmann Law: σ = 5.67 × 10⁻⁸ W/(m²·K⁴) or J/(s·m²·K⁴). Dimensions: [M L⁰ T⁻³ K⁻⁴].'
    },
    {
      term: 'Wien\'s Constant (b)',
      definition: 'Constant of proportionality in Wien\'s Displacement Law: b = 2.898 × 10⁻³ m·K (or ~2.9 × 10⁻³ m·K).'
    },
    {
      term: 'Ferry\'s Blackbody',
      definition: 'A double-walled hollow sphere painted black inside with a tiny aperture and a conical projection opposite to the hole to ensure multiple internal reflections and 99% absorption.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Nature of Thermal Radiation & Ferry\'s Blackbody',
      paragraphs: [
        'Thermal radiation consists of electromagnetic waves (infrared to optical spectrum) emitted due to thermal agitation of atoms/molecules. It requires no material medium, travels through vacuum at the speed of light c = 3 × 10⁸ m/s, and exhibits reflection, refraction, interference, and polarization.',
        'An ideal blackbody is a theoretical concept. In practice, Ferry\'s Blackbody achieves nearly 99% absorption using a hollow double-walled metal sphere with a tiny hole. Any ray entering through the hole undergoes repeated internal reflections at the lamp-black inner walls, ensuring total absorption before escaping.'
      ]
    },
    {
      heading: '2. Kirchhoff\'s Law of Radiation & Solar Fraunhofer Lines',
      paragraphs: [
        'Kirchhoff\'s Law states that at thermal equilibrium, the ratio of monochromatic emissive power E_λ to monochromatic absorptive power a_λ is identical for all bodies and equal to the monochromatic emissive power of a perfect blackbody at that temperature: (E_λ / a_λ) = E_(blackbody, λ).',
        'Implication: Good absorbers of a specific wavelength are also good emitters of that same wavelength (a_λ = e_λ).',
        'Fraunhofer Lines Explanation: The core of the Sun emits a continuous spectrum. As this light passes through the cooler solar atmosphere (chromosphere), gaseous elements absorb their characteristic spectral lines. During a total solar eclipse, the hot solar atmosphere emits those exact wavelengths, causing dark Fraunhofer lines to instantly flash bright (flash spectrum).'
      ]
    },
    {
      heading: '3. Stefan-Boltzmann Law & Net Heat Loss',
      paragraphs: [
        'Stefan\'s Law: Total energy emitted per second per unit surface area by a perfect blackbody is proportional to the fourth power of its absolute temperature: E = σ T⁴.',
        'For a real body of surface area A and emissivity e (0 < e < 1), total radiated power P = e σ A T⁴.',
        'Net Radiation Exchange (Prevost\'s Theory): A body at temperature T inside surroundings at temperature T₀ simultaneously emits power P_emitted = e σ A T⁴ and absorbs power P_absorbed = e σ A T₀⁴.',
        'Net rate of radiant heat loss: P_net = e σ A (T⁴ - T₀⁴).',
        'Important Note: In radiation equations, temperature T MUST strictly be expressed in Kelvin (K = °C + 273.15). Using Celsius will yield completely incorrect answers!'
      ]
    },
    {
      heading: '4. Wien\'s Displacement Law & Spectral Energy Distribution',
      paragraphs: [
        'The radiation spectrum emitted by a blackbody at temperature T contains a continuous distribution of wavelengths. The spectral emissive power E_λ rises from zero at λ = 0, reaches a maximum peak at a characteristic wavelength λ_max, and falls back to zero at λ → ∞.',
        'Wien\'s Displacement Law: As absolute temperature T increases, the peak emission wavelength λ_max shifts (is displaced) toward shorter wavelengths (higher frequencies): λ_max · T = b = 2.898 × 10⁻³ m·K.',
        'Area under the E_λ vs λ curve represents total radiant energy emitted per unit area per second: Area = ∫ E_λ dλ = σ T⁴. Therefore, the area under the blackbody curve is proportional to T⁴.',
        'Astrophysical Application: Measuring λ_max in the spectrum of a distant star yields its surface temperature directly (e.g. Sun surface temp T = b / λ_max ≈ 2.898 × 10⁻³ / (490 × 10⁻⁹ m) ≈ 5800 K).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 220" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <line x1="50" y1="180" x2="450" y2="180" stroke="#94a3b8" stroke-width="2"/>
          <line x1="60" y1="20" x2="60" y2="190" stroke="#94a3b8" stroke-width="2"/>
          <text x="220" y="210" fill="#94a3b8" font-size="12" font-weight="bold">Wavelength λ (nm)</text>
          <text x="15" y="110" fill="#38bdf8" font-size="11" font-weight="bold" transform="rotate(-90 15 110)">Spectral Energy Eλ</text>

          <!-- T3 = 6000K (highest peak) -->
          <path d="M 60 180 Q 120 20 160 30 T 440 175" fill="none" stroke="#ef4444" stroke-width="3"/>
          <circle cx="140" cy="25" r="4" fill="#ef4444"/>
          <text x="150" y="25" fill="#ef4444" font-size="10" font-weight="bold">T3 = 6000 K (Peak λ3)</text>

          <!-- T2 = 5000K -->
          <path d="M 60 180 Q 140 70 190 80 T 440 177" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
          <circle cx="170" cy="73" r="4" fill="#f59e0b"/>
          <text x="180" y="73" fill="#f59e0b" font-size="10" font-weight="bold">T2 = 5000 K (Peak λ2)</text>

          <!-- T1 = 4000K -->
          <path d="M 60 180 Q 170 120 230 130 T 440 179" fill="none" stroke="#38bdf8" stroke-width="2"/>
          <circle cx="210" cy="122" r="4" fill="#38bdf8"/>
          <text x="220" y="122" fill="#38bdf8" font-size="10" font-weight="bold">T1 = 4000 K (Peak λ1)</text>

          <!-- Wien displacement dashed curve -->
          <path d="M 140 25 Q 170 73 210 122" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3"/>
          <text x="230" y="150" fill="#94a3b8" font-size="9">← λmax shifts left as T rises</text>
        </svg>`,
        caption: 'Blackbody Radiation Spectrum at Different Temperatures: As T increases, total area under curve (energy ∝ T⁴) grows rapidly and peak wavelength λ_max shifts to shorter wavelengths (left).'
      }
    }
  ],

  formulae: [
    {
      title: 'Stefan-Boltzmann Law (Blackbody)',
      formula: 'P = sigma A T^4',
      variables: 'P = radiated power (W), σ = 5.67 × 10⁻⁸ W/(m²·K⁴), A = surface area (m²), T = absolute temp (K)'
    },
    {
      title: 'Stefan-Boltzmann Law (Real Body & Net Exchange)',
      formula: 'P = e sigma A T^4, quad P_{net} = e sigma A (T^4 - T_0^4)',
      variables: 'e = emissivity (0 ≤ e ≤ 1), T₀ = temperature of surrounding enclosure (K)',
      note: 'CRITICAL: T and T₀ MUST be in Kelvin!'
    },
    {
      title: 'Wien\'s Displacement Law',
      formula: 'lambda_{max} T = b = 2.898 times 10^{-3} text{ m}cdottext{K}',
      variables: 'λ_max = peak emission wavelength (m), T = temperature in Kelvin, b = Wien\'s Constant'
    },
    {
      title: 'Spectral Area Relation',
      formula: 'text{Area under } E_lambda text{ vs } lambda text{ curve} = int_0^infty E_lambda , dlambda = sigma T^4',
      note: 'If temperature doubles (2T), the area under the blackbody spectrum increases by 2⁴ = 16 times!'
    }
  ],

  neetImportantPoints: [
    'Temperature in Stefan\'s law and Wien\'s law MUST ALWAYS BE IN KELVIN (K = °C + 273.15).',
    'A blackbody is not necessarily black in color! The Sun behaves nearly as a blackbody at 5800 K emitting visible yellow-white light.',
    'Area under the E_λ vs λ curve is proportional to T⁴. Ratio of areas for temperatures T₁ and T₂ is Area₁ / Area₂ = (T₁ / T₂)⁴.',
    'Ratio of peak wavelengths for two blackbodies at temperatures T₁ and T₂: λ_{max,1} / λ_{max,2} = T₂ / T₁.',
    'Greenhouse Effect: Solar radiation (short λ, high T) easily penetrates Earth\'s atmosphere. Earth absorbs it and re-emits long-wavelength infrared thermal radiation (long λ, low T), which is trapped by greenhouse gases (CO₂, H₂O vapor, CH₄), keeping Earth warm.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Plugging Celsius temperature directly into Stefan\'s Law P = e σ A T⁴.',
      correctFact: 'Since T is raised to the 4th power (T⁴), using Celsius instead of Kelvin leads to a massive numerical error!',
      whyItMattersForNEET: 'Number 1 trap in radiation numerical questions in NEET UG.'
    },
    {
      commonConfusion: 'Confusing peak wavelength λ_max with total emitted energy.',
      correctFact: 'λ_max is the wavelength at which maximum energy density occurs (governed by Wien\'s law λ_max ∝ 1/T). Total energy emitted across ALL wavelengths is governed by Stefan\'s law (E ∝ T⁴).',
      whyItMattersForNEET: 'Frequent conceptual trap comparing two blackbody spectra.'
    },
    {
      commonConfusion: 'Assuming a good reflector is a good emitter.',
      correctFact: 'By Kirchhoff\'s law, good absorbers are good emitters (a = e). Highly reflective polished silver surfaces (high r, low a) are POOR emitters (low e).',
      whyItMattersForNEET: 'Thermo flask and radiation shield conceptual questions.'
    }
  ],

  quickRevision: [
    'Radiated Power: P = e σ A T⁴ (Blackbody e = 1)',
    'Net Radiant Heat Loss: P_net = e σ A (T⁴ - T₀⁴)',
    'Stefan\'s Constant σ = 5.67 × 10⁻⁸ W/(m²·K⁴)',
    'Wien\'s Law: λ_max T = b = 2.898 × 10⁻³ m·K (λ_max ∝ 1/T)',
    'Kirchhoff\'s Law: E_λ / a_λ = E_blackbody (Good absorbers = Good emitters)',
    'Area under E_λ vs λ spectrum = ∫ E_λ dλ = σ T⁴',
    'T must strictly be in KELVIN (K)'
  ],

  practiceQuestions: [
  {
    "id": "br-1",
    "question": "A blackbody at temperature 27°C radiates heat at a rate of 10 W. If its temperature is increased to 327°C, what will be the new rate of heat radiation?",
    "options": [
      "160 W",
      "80 W",
      "20 W",
      "121.5 W"
    ],
    "correctOption": 0,
    "explanation": "Convert temperatures to Kelvin: T₁ = 27 + 273 = 300 K; T₂ = 327 + 273 = 600 K. Note T₂ / T₁ = 600 / 300 = 2. From Stefan's Law P ∝ T⁴: P₂ / P₁ = (T₂ / T₁)⁴ = (2)⁴ = 16. Therefore P₂ = 16 × P₁ = 16 × 10 W = 160 W."
  },
  {
    "id": "br-2",
    "question": "The wavelength of maximum emission for a blackbody at 2000 K is 1.5 μm. At what temperature will the peak emission wavelength be 0.5 μm?",
    "options": [
      "6000 K",
      "4000 K",
      "3000 K",
      "666.7 K"
    ],
    "correctOption": 0,
    "explanation": "According to Wien's Displacement Law, λ_max · T = Constant => λ₁ T₁ = λ₂ T₂. Given λ₁ = 1.5 μm, T₁ = 2000 K, λ₂ = 0.5 μm. Therefore T₂ = (λ₁ T₁) / λ₂ = (1.5 × 2000) / 0.5 = 6000 K."
  },
  {
    "id": "prac-physblackbodyradiation-3",
    "question": "Regarding Blackbody Radiation, which of the following statements correctly resolves a common misconception about \"Plugging Celsius temperature directly into Stefan's Law P = e σ A T⁴.\"?",
    "options": [
      "Since T is raised to the 4th power (T⁴), using Celsius instead of Kelvin leads to a massive numerical error!",
      "Incorrect assumption: Plugging Celsius temperature directly into Stefan's Law P = e σ A T⁴.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Since T is raised to the 4th power (T⁴), using Celsius instead of Kelvin leads to a massive numerical error!. Number 1 trap in radiation numerical questions in NEET UG.",
    "difficulty": "Medium",
    "conceptTested": "Blackbody Radiation - Conceptual Clarity"
  },
  {
    "id": "prac-physblackbodyradiation-4",
    "question": "Regarding Blackbody Radiation, which of the following statements correctly resolves a common misconception about \"Confusing peak wavelength λ_max with total emitted energy.\"?",
    "options": [
      "λ_max is the wavelength at which maximum energy density occurs (governed by Wien's law λ_max ∝ 1/T). Total energy emitted across ALL wavelengths is governed by Stefan's law (E ∝ T⁴).",
      "Incorrect assumption: Confusing peak wavelength λ_max with total emitted energy.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "λ_max is the wavelength at which maximum energy density occurs (governed by Wien's law λ_max ∝ 1/T). Total energy emitted across ALL wavelengths is governed by Stefan's law (E ∝ T⁴).. Frequent conceptual trap comparing two blackbody spectra.",
    "difficulty": "Medium",
    "conceptTested": "Blackbody Radiation - Conceptual Clarity"
  },
  {
    "id": "prac-physblackbodyradiation-5",
    "question": "Regarding Blackbody Radiation, which of the following statements correctly resolves a common misconception about \"Assuming a good reflector is a good emitter.\"?",
    "options": [
      "By Kirchhoff's law, good absorbers are good emitters (a = e). Highly reflective polished silver surfaces (high r, low a) are POOR emitters (low e).",
      "Incorrect assumption: Assuming a good reflector is a good emitter.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "By Kirchhoff's law, good absorbers are good emitters (a = e). Highly reflective polished silver surfaces (high r, low a) are POOR emitters (low e).. Thermo flask and radiation shield conceptual questions.",
    "difficulty": "Medium",
    "conceptTested": "Blackbody Radiation - Conceptual Clarity"
  },
  {
    "id": "prac-physblackbodyradiation-6",
    "question": "In the study of Blackbody Radiation, what is the exact definition and significance of \"Ideal Blackbody\"?",
    "options": [
      "A surface or enclosure that absorbs all electromagnetic radiation incident upon it, regardless of frequency or angle of incidence (a = 1, e = 1).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A surface or enclosure that absorbs all electromagnetic radiation incident upon it, regardless of frequency or angle of incidence (a = 1, e = 1).. ",
    "difficulty": "Easy",
    "conceptTested": "Ideal Blackbody definition"
  },
  {
    "id": "prac-physblackbodyradiation-7",
    "question": "In the study of Blackbody Radiation, what is the exact definition and significance of \"Absorptive Power / Absorptivity (a)\"?",
    "options": [
      "The ratio of radiant energy absorbed by a surface to total radiant energy incident on it in a given time: a = dQ_absorbed / dQ_incident (Dimensionless, 0 ≤ a ≤ 1).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The ratio of radiant energy absorbed by a surface to total radiant energy incident on it in a given time: a = dQ_absorbed / dQ_incident (Dimensionless, 0 ≤ a ≤ 1).. ",
    "difficulty": "Easy",
    "conceptTested": "Absorptive Power / Absorptivity (a) definition"
  },
  {
    "id": "prac-physblackbodyradiation-8",
    "question": "In the study of Blackbody Radiation, what is the exact definition and significance of \"Emissive Power (E_λ)\"?",
    "options": [
      "Radiant energy emitted per unit surface area per unit time per unit wavelength interval at a specific wavelength λ. SI Unit: W/(m²·m) or W/m³.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Radiant energy emitted per unit surface area per unit time per unit wavelength interval at a specific wavelength λ. SI Unit: W/(m²·m) or W/m³.. ",
    "difficulty": "Easy",
    "conceptTested": "Emissive Power (E_λ) definition"
  },
  {
    "id": "prac-physblackbodyradiation-9",
    "question": "In the study of Blackbody Radiation, what is the exact definition and significance of \"Emissivity (e)\"?",
    "options": [
      "The ratio of total radiant energy emitted by a real surface to that emitted by an ideal blackbody at the same temperature: e = E_real / E_blackbody (Dimensionless, 0 ≤ e ≤ 1).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The ratio of total radiant energy emitted by a real surface to that emitted by an ideal blackbody at the same temperature: e = E_real / E_blackbody (Dimensionless, 0 ≤ e ≤ 1).. ",
    "difficulty": "Easy",
    "conceptTested": "Emissivity (e) definition"
  },
  {
    "id": "prac-physblackbodyradiation-10",
    "question": "In the study of Blackbody Radiation, what is the exact definition and significance of \"Stefan's Constant (σ)\"?",
    "options": [
      "Universal constant in Stefan-Boltzmann Law: σ = 5.67 × 10⁻⁸ W/(m²·K⁴) or J/(s·m²·K⁴). Dimensions: [M L⁰ T⁻³ K⁻⁴].",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Universal constant in Stefan-Boltzmann Law: σ = 5.67 × 10⁻⁸ W/(m²·K⁴) or J/(s·m²·K⁴). Dimensions: [M L⁰ T⁻³ K⁻⁴].. ",
    "difficulty": "Easy",
    "conceptTested": "Stefan's Constant (σ) definition"
  }
],
  pyqs: []
};
