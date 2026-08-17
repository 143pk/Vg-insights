import { DetailedTopicContent } from '../../types/neet';
import { rayOpticsDiagrams } from '../rayOptics/rayOpticsDiagrams';

export const physRefractionTirDetails: DetailedTopicContent = {
  topicId: "phys-refraction-tir",
  topicName: "Refraction, TIR & Optical Fibres",
  subject: "Physics",
  class: "Class 12",
  classification: "Electromagnetic Waves & Optics",
  chapter: "Ray Optics and Optical Instruments",

  whatIsThisTopic: "Comprehensive first-principles study of light refraction across plane and spherical interfaces, Snell's law, frequency invariance, wavelength reduction, glass slab lateral shift, apparent depth in composite liquids, total internal reflection, critical angle derivation, illuminated circle radius, mirage physics, optical fibre communication, and single curved spherical surface refraction.",

  basicIdea: [
    "Refraction occurs because light travels at different phase velocities in different media (v = c/n).",
    "During refraction, FREQUENCY remains strictly constant, while speed and wavelength change proportionally (v = ν λ).",
    "Snell's Law (n₁ sin i = n₂ sin r) governs all plane and curved boundary refractions.",
    "A parallel-faced glass slab produces zero net angular deviation (i = e) but produces a lateral shift d = t sin(i - r)/cos r.",
    "When viewed from rarer to denser, submerged objects appear raised: apparent depth h' = h/n, apparent shift Δh = h(1 - 1/n).",
    "Total Internal Reflection (TIR) occurs when light travels from Denser to Rarer at angle i > Critical Angle C (sin C = 1/n). TIR is 100% lossless.",
    "Optical fibres transmit optical signals across continents using core-cladding TIR with acceptance angle sin θ = √(n₁² - n₂²).",
    "Single spherical curved surface refraction obeys n₂/v - n₁/u = (n₂ - n₁)/R."
  ],

  importantTerms: [
    {
      term: "Absolute Refractive Index (n)",
      definition: "The ratio of speed of light in vacuum (c) to speed of light in the medium (v): n = c / v.",
      neetNote: "Dimensionless scalar ≥ 1. For air n ≈ 1.0, water n = 4/3, crown glass n = 1.5, diamond n = 2.42."
    },
    {
      term: "Snell's Law of Refraction",
      definition: "The fundamental law stating that n₁ sin i = n₂ sin r across any optical interface.",
      neetNote: "Denser to rarer: bends AWAY from normal (r > i). Rarer to denser: bends TOWARDS normal (r < i)."
    },
    {
      term: "Lateral Displacement (d)",
      definition: "The perpendicular distance separating the original path of the incident ray and the parallel emergent ray from a glass slab.",
      neetNote: "Formula: d = t sin(i - r) / cos r. For small angles: d ≈ t i (1 - 1/n)."
    },
    {
      term: "Critical Angle (C)",
      definition: "The specific angle of incidence in a denser medium for which the angle of refraction in the rarer medium is exactly 90°.",
      neetNote: "Formula: sin C = n₂ / n₁ = 1 / n (for medium to air). Water C ≈ 49°, Glass C ≈ 42°, Diamond C ≈ 24.4°."
    },
    {
      term: "Total Internal Reflection (TIR)",
      definition: "The 100% reflection of light energy back into the denser medium when incident at an angle exceeding the critical angle (i > C).",
      neetNote: "Two strict conditions: 1) Light must travel from Denser to Rarer, 2) Angle of incidence i > C."
    },
    {
      term: "Optical Fibre (Core & Cladding)",
      definition: "A flexible glass waveguide with a high-index inner core (n₁) surrounded by a lower-index outer cladding (n₂ < n₁) for lossless signal transmission.",
      neetNote: "Light is guided by repeated TIR. Numerical Aperture NA = √(n₁² - n₂²)."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Refraction of Light & Snell's Law",
      paragraphs: [
        "Refraction is the bending of light when it passes obliquely from one transparent optical medium to another. It occurs fundamentally because light changes its phase speed when transitioning between media of different optical polarizabilities.",
        "Universal Laws of Refraction:",
        "1. Coplanarity: The incident ray, refracted ray, and normal to the interface at the incidence point all lie in the same geometric plane.",
        "2. Snell's Law: The ratio of the sine of incidence angle i to the sine of refraction angle r equals the relative refractive index of the second medium relative to the first:",
        "n₁ sin i = n₂ sin r   ⇒   sin i / sin r = n₂ / n₁ = ¹n₂ = v₁ / v₂ = λ₁ / λ₂",
        "Normal Incidence (i = 0°): When light strikes normally, sin r = 0 ⇒ r = 0°. The ray passes completely undeviated, but its speed and wavelength still decrease in the denser medium!"
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.refractionPlaneSurface,
        caption: "Refraction of Light at a Plane Interface Obeying Snell's Law (n₁ sin i = n₂ sin r).",
        guide: "Observe the bending of the refracted ray towards the normal as it enters the denser lower medium."
      },
      importantPoints: [
        "Light bends towards the normal when slowing down (rarer to denser) and away from the normal when speeding up (denser to rarer).",
        "Optical density is not the same as physical mass density (e.g. kerosene has lower mass density than water but higher refractive index)."
      ]
    },
    {
      heading: "2. Invariant Frequency & Wavelength Scaling",
      paragraphs: [
        "A foundational principle in wave and ray optics is the INVARIANCE OF FREQUENCY:",
        "1. Frequency (ν): Frequency is the number of wave cycles emitted per second. It is determined exclusively by the atomic oscillator in the source. When light enters glass or water, its frequency ν remains strictly CONSTANT.",
        "2. Speed (v): Speed decreases in material media: v = c / n.",
        "3. Wavelength (λ): Since v = ν λ, wavelength must decrease in direct proportion to speed: λ_medium = λ_vacuum / n.",
        "Perception of Color: The human eye perceives color based fundamentally on the FREQUENCY of the light waves striking retinal photoreceptors, not their wavelength inside the ocular medium."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.refractionPlaneSurface,
        caption: "Wavelength Shortening (λ' = λ/n) with Invariant Frequency ν inside a Denser Optical Medium.",
        guide: "When 600 nm yellow light enters glass (n = 1.5), its wavelength becomes 400 nm, but it still appears yellow because frequency is constant."
      },
      importantPoints: [
        "Frequency ν does NOT change during refraction or reflection.",
        "Wavelength inside medium: λ' = λ₀ / n. Wave speed inside medium: v = c / n.",
        "Relative refractive index: ¹n₂ = 1 / ²n₁."
      ]
    },
    {
      heading: "3. Refraction Through Glass Slab & Lateral Shift",
      paragraphs: [
        "When a ray passes through a rectangular glass plate of thickness t with parallel opposite faces:",
        "1. Parallel Emergence: Refraction at the top face gives sin i / sin r = n. Refraction at the bottom face gives sin r / sin e = 1/n ⇒ sin e = n sin r = sin i ⇒ ∠i = ∠e. Thus, the emergent ray is strictly parallel to the incident ray (net angular deviation δ = 0).",
        "2. Lateral Displacement (d): Although parallel, the emergent ray is shifted sideways by distance d:",
        "d = [ t · sin(i - r) ] / cos r",
        "For small paraxial angles of incidence (where sin θ ≈ θ and cos r ≈ 1):",
        "d ≈ t · i [ 1 - 1/n ]",
        "Lateral shift increases directly with slab thickness t, higher refractive index n, and larger incident angle i."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.glassSlabLateralShift,
        caption: "Lateral Displacement d Produced by a Plane-Parallel Glass Slab of Thickness t.",
        guide: "Notice how the emergent ray remains strictly parallel to the incident direction while suffering lateral shift d."
      },
      importantPoints: [
        "Zero angular deviation: i = e, δ = 0.",
        "If a glass slab is inserted into a converging beam, it shifts the focus backward away from the lens by Δx = t(1 - 1/n)."
      ]
    },
    {
      heading: "4. Apparent Depth & Apparent Shift in Liquids",
      paragraphs: [
        "When an object immersed in a liquid of refractive index n is viewed near-normally from air above:",
        "Light rays emerging into air bend away from the normal, making the object appear elevated at a shallower apparent depth h':",
        "Apparent Depth: h' = Real Depth / n = h / n",
        "Apparent Upward Shift: Δh = Real Depth - Apparent Depth = h - h/n = h [ 1 - 1/n ]",
        "Composite Liquids: If a container holds multiple immiscible liquid layers of thicknesses t₁, t₂, t₃... with refractive indices n₁, n₂, n₃..., the total apparent depth is:",
        "h'_total = t₁/n₁ + t₂/n₂ + t₃/n₃ + ...   and   Δh_total = Σ t_i (1 - 1/n_i)",
        "Observer inside Denser Medium: When an underwater diver looks up at a bird flying in air at real height H, the bird appears at an apparent height H' = n · H (farther away)."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.apparentDepth,
        caption: "Apparent Depth Phenomenon: A Submerged Coin Appears Raised by Shift Δh = h(1 - 1/n).",
        guide: "For water (n = 4/3), a 12 cm deep coin appears at 9 cm depth (raised by 3 cm)."
      },
      importantPoints: [
        "Apparent depth: h' = h / n (viewing from rarer to denser).",
        "Apparent height: H' = n · H (viewing from denser to rarer).",
        "Apparent shift does NOT depend on the height of the observer above the liquid surface."
      ]
    },
    {
      heading: "5. Total Internal Reflection (TIR) & Critical Angle",
      paragraphs: [
        "Total Internal Reflection is the optical phenomenon in which 100% of incident light energy is reflected back into the denser medium with zero transmission into the rarer medium.",
        "Two Essential Conditions for TIR:",
        "1. Light must travel from an optically DENSER medium toward an optically RARER medium (n₁ > n₂).",
        "2. The angle of incidence i must be strictly GREATER than the Critical Angle C (i > C).",
        "Derivation of Critical Angle Formula: At the critical angle i = C, the refracted ray emerges along the boundary (r = 90°). Applying Snell's law:",
        "n₁ sin C = n₂ sin 90° = n₂ (1)",
        "sin C = n₂ / n₁ = 1 / n   (where n is the refractive index of denser medium relative to rarer medium)",
        "C = sin⁻¹(1 / n)",
        "Illuminated Circular Disk at Liquid Surface: For a point source placed at depth h in liquid of index n, light emerges into air only within a cone of half-angle C, forming an illuminated circular patch on the surface of radius R = h · tan C = h / √(n² - 1).",
        "Area of illuminated disk: A = π R² = π h² / (n² - 1)."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.totalInternalReflection,
        caption: "Transition from Normal Refraction to Critical Angle Grazing Emergence (r = 90°) and Lossless TIR (i > C).",
        guide: "At i > C, 100% of light energy is reflected back; zero energy is transmitted."
      },
      importantPoints: [
        "TIR is 100% efficient — zero absorption compared to silvered mirrors (which absorb 4-10%).",
        "Because n_violet > n_red, sin C_violet < sin C_red ⇒ C_violet < C_red. Violet light undergoes TIR more easily than red light!",
        "Radius of illuminated circle on water surface: R = h / √(n² - 1) = 3h / √7 (for water n = 4/3)."
      ]
    },
    {
      heading: "6. High-Yield Applications: Mirage & Optical Fibres",
      paragraphs: [
        "1. Mirage (Desert Illusion): On hot days, ground-level air is heated, becoming less dense and optically rarer (lower n). Cooler upper air is denser (higher n). Downward light rays from the sky bend progressively away from the normal until i > C at a near-ground layer, undergoing upward TIR. The observer sees a reflected image of the sky, mimicking a shimmering water surface.",
        "2. Diamond Brilliance: Diamond has high index n ≈ 2.42 and extremely small critical angle C ≈ 24.4°. Cut facets ensure that light entering the top face suffers multiple successive TIRs before exiting, creating dazzling sparkle.",
        "3. Totally Reflecting Prisms: 45°-90°-45° glass prisms (C ≈ 42°) use 45° incidence (45° > 42°) for 90° ray turning and 180° image inversion in binoculars.",
        "4. Optical Fibres: Consist of high-purity silica glass core (n₁ ≈ 1.52) coated with cladding (n₂ ≈ 1.48, n₁ > n₂). Light launched into the core at angle θ < θ_acceptance strikes the core-cladding boundary at i > C, propagating via repeated lossless TIR over hundreds of kilometers.",
        "Numerical Aperture (NA) = √(n₁² - n₂²) and Acceptance Angle sin θ_a = √(n₁² - n₂²)."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.opticalFibre,
        caption: "Optical Fibre Architecture showing Light Guidance via Total Internal Reflection at Core-Cladding Boundary.",
        guide: "Condition for guiding: n_core > n_cladding. If cladding is damaged, light leaks out."
      },
      importantPoints: [
        "Optical fibres are immune to electromagnetic interference (EMI) and have massive bandwidth.",
        "Endoscopes use optical fibre bundles to illuminate and capture images of internal organs.",
        "If a diamond is submerged in a liquid matching its refractive index (n = 2.42), its critical angle becomes 90° and all brilliance vanishes."
      ]
    },
    {
      heading: "7. Refraction at Single Spherical Curved Surfaces",
      paragraphs: [
        "When light refracts across a curved spherical interface separating medium 1 (index n₁) and medium 2 (index n₂) with radius of curvature R:",
        "Fundamental Curved Interface Equation:",
        "n₂ / v - n₁ / u = (n₂ - n₁) / R",
        "Sign Conventions:",
        "• n₁ = index of the medium in which incident light originates.",
        "• n₂ = index of the medium into which refracted light enters.",
        "• u = object distance (-u for real object).",
        "• v = image distance (+v for real image formed in medium 2).",
        "• R = radius of curvature (+R for convex surface facing rarer medium; -R for concave surface facing rarer medium).",
        "Linear Magnification: m = h_i / h_o = (n₁ · v) / (n₂ · u). (Notice the ratio n₁/n₂ multiplying v/u!)."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.sphericalRefraction,
        caption: "Refraction at a Single Convex Spherical Interface from Medium n₁ into Medium n₂.",
        guide: "This curved surface equation is the fundamental mathematical bridge used to derive the Lens Maker's Formula!"
      },
      importantPoints: [
        "Magnification formula: m = (n₁ v) / (n₂ u), NOT simply v/u.",
        "If an air bubble is trapped in a glass sphere (n = 1.5), light travels from glass (n₁ = 1.5) to air (n₂ = 1.0)."
      ]
    }
  ],

  formulae: [
    {
      formulaName: "Snell's Law of Refraction",
      expression: "n₁ sin i = n₂ sin r   ⇒   sin i / sin r = n₂ / n₁",
      whatItRepresents: "Relates angles of incidence and refraction to refractive indices.",
      symbols: "n₁ = first medium index, n₂ = second medium index, i = incidence angle, r = refraction angle",
      unit: "Angles in degrees/radians, indices are dimensionless",
      conditions: "Plane or curved optical interface. Angles measured from surface normal.",
      calculationExample: {
        problem: "A ray enters glass (n = 1.5) from air (n = 1) at incidence angle 30°. Find sin r.",
        given: "n₁ = 1.0, n₂ = 1.5, i = 30°",
        stepByStep: ["sin r = (n₁ / n₂) sin i = (1.0 / 1.5) × sin 30° = (2/3) × (1/2) = 1/3 ≈ 0.333."],
        answer: "r = sin⁻¹(1/3) ≈ 19.47°."
      }
    },
    {
      formulaName: "Apparent Depth & Upward Shift",
      expression: "h' = h / n   and   Δh = h [ 1 - 1/n ]",
      whatItRepresents: "Apparent reduction in depth when viewing submerged objects from rarer medium.",
      symbols: "h = real depth, h' = apparent depth, Δh = apparent shift, n = refractive index",
      unit: "metres (m) or cm",
      conditions: "Near-normal viewing from rarer into denser medium.",
      calculationExample: {
        problem: "A coin lies at the bottom of a 12 cm deep water tank (n = 4/3). Find apparent depth and shift.",
        given: "h = 12 cm, n = 4/3",
        stepByStep: [
          "h' = h / n = 12 / (4/3) = 9.0 cm.",
          "Δh = h - h' = 12 - 9 = 3.0 cm."
        ],
        answer: "Apparent depth = 9.0 cm; Upward shift = 3.0 cm."
      }
    },
    {
      formulaName: "Critical Angle & Illuminated Disk Radius",
      expression: "sin C = 1 / n   and   R = h / √(n² - 1)",
      whatItRepresents: "Condition for TIR and radius of circular light patch escaping from a submerged point source.",
      symbols: "C = critical angle, n = refractive index, h = depth of source, R = circle radius",
      unit: "C in degrees, R and h in metres",
      conditions: "Denser to rarer propagation (n > 1).",
      calculationExample: {
        problem: "Find critical angle for water (n = 4/3) and radius of illuminated circle if depth is 80 cm.",
        given: "n = 4/3, h = 80 cm",
        stepByStep: [
          "sin C = 1 / (4/3) = 3/4 = 0.75 ⇒ C ≈ 48.75°.",
          "R = h / √(n² - 1) = 80 / √[(16/9) - 1] = 80 / √(7/9) = 240 / √7 ≈ 90.7 cm."
        ],
        answer: "Critical angle C ≈ 48.8°; Disk radius R ≈ 90.7 cm."
      }
    },
    {
      formulaName: "Single Spherical Refracting Surface",
      expression: "n₂ / v - n₁ / u = (n₂ - n₁) / R",
      whatItRepresents: "Relates object and image distances for refraction across a single curved interface.",
      symbols: "n₁ = incident medium index, n₂ = refractive medium index, u = object dist, v = image dist, R = radius",
      unit: "metres (m) or cm",
      conditions: "Paraxial rays across spherical boundary.",
      calculationExample: {
        problem: "Light from air (n₁ = 1) enters a glass sphere (n₂ = 1.5, R = +10 cm) with object at u = -40 cm. Find v.",
        given: "n₁ = 1.0, n₂ = 1.5, R = +10 cm, u = -40 cm",
        stepByStep: [
          "1.5/v - 1.0/(-40) = (1.5 - 1.0)/(+10) = 0.5/10 = 1/20",
          "1.5/v + 1/40 = 1/20 ⇒ 1.5/v = 1/20 - 1/40 = 1/40",
          "v = 1.5 × 40 = +60 cm."
        ],
        answer: "v = +60 cm (Real image formed inside the glass medium)."
      }
    }
  ],

  neetImportantPoints: [
    "Frequency of light is invariant during all refractions and reflections (ν = const). Wavelength and velocity change (v = c/n, λ = λ₀/n).",
    "TIR is 100% efficient with zero reflection losses, making optical fibres superior to copper cables.",
    "Since n_violet > n_red, critical angle C_violet < C_red. Violet undergoes TIR at smaller angles of incidence than red light.",
    "For an illuminated spot on water surface: Radius R = h/√(n² - 1) and Area A = πh²/(n² - 1).",
    "In single surface refraction magnification: m = (n₁ v) / (n₂ u)."
  ],

  commonConfusions: [
    {
      misconception: "Assuming light frequency decreases when entering glass because light slows down.",
      correctFact: "Frequency is set by the emitting source oscillator and NEVER changes during refraction. Wavelength decreases to compensate for reduced speed: v = ν λ.",
      whyItMattersForNEET: "Frequently tested core assertion in NEET."
    },
    {
      misconception: "Trying to calculate TIR when light travels from air to glass.",
      correctFact: "TIR is physically impossible when going from rarer to denser. It requires light travelling from Denser to Rarer at i > C.",
      whyItMattersForNEET: "Prevents applying TIR formulas in inappropriate contexts."
    },
    {
      misconception: "Confusing n₁ and n₂ in the single spherical surface equation.",
      correctFact: "n₁ is ALWAYS the medium where the incident light starts; n₂ is the medium into which the refracted light travels.",
      whyItMattersForNEET: "Crucial for bubble-in-glass and underwater lens problems."
    }
  ],

  quickRevision: [
    "Snell's Law: n₁ sin i = n₂ sin r  |  v = c/n  |  λ = λ₀/n  |  ν = const.",
    "Glass Slab: Emergent ray is parallel (i = e, δ = 0) with lateral shift d = t sin(i - r)/cos r.",
    "Apparent Depth: h' = h/n  |  Apparent Shift: Δh = h(1 - 1/n)  |  h'_total = Σ(t_i / n_i).",
    "Critical Angle: sin C = 1/n  |  TIR occurs when i > C from Denser to Rarer.",
    "Illuminated Circle on Surface: Radius R = h / √(n² - 1)  |  Area A = πh² / (n² - 1).",
    "Curved Surface Equation: n₂/v - n₁/u = (n₂ - n₁)/R  |  m = (n₁ v)/(n₂ u)."
  ],

  pyqs: [
    {
      year: 2019,
      exam: "NEET UG",
      question: "In total internal reflection when the angle of incidence is equal to the critical angle for the pair of media in contact, what will be angle of refraction?",
      options: ["(a) 90°", "(b) 180°", "(c) 0°", "(d) Equal to angle of incidence"],
      correctAnswer: 0,
      explanation: "By the fundamental definition of critical angle C, when the angle of incidence i = C in the denser medium, the refracted ray grazes the interface boundary, meaning the angle of refraction r = 90°.",
      conceptTested: "Snell's Law & Definition of Critical Angle",
      difficulty: "Easy",
      verified: true
    },
    {
      year: 2017,
      exam: "NEET UG",
      question: "A beam of light consisting of red, green and blue colours is incident on a right angled prism. The refractive index of the material of the prism for the above red, green and blue wavelengths are 1.39, 1.44 and 1.47 respectively. The prism will:",
      options: [
        "(a) Separate all the three colours",
        "(b) Not separate the three colours",
        "(c) Separate the red colour part from the green and blue colours",
        "(d) Separate the blue colour part from the red and green colours"
      ],
      correctAnswer: 2,
      explanation: "At the hypotenuse face of the 45°-90°-45° prism, angle of incidence i = 45°. Condition for TIR: sin 45° > 1/μ ⇒ 1/√2 > 1/μ ⇒ μ > √2 ≈ 1.414. For Red: μ_r = 1.39 < 1.414 (Refracts OUT). For Green: μ_g = 1.44 > 1.414 (Undergoes TIR). For Blue: μ_b = 1.47 > 1.414 (Undergoes TIR). Thus, Red is separated from Green and Blue.",
      conceptTested: "Wavelength-Dependent Critical Angle & Prism TIR",
      difficulty: "Medium",
      verified: true
    }
  ]
};
