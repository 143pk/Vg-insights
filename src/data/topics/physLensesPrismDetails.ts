import { DetailedTopicContent } from '../../types/neet';
import { rayOpticsDiagrams } from '../rayOptics/rayOpticsDiagrams';

export const physLensesPrismDetails: DetailedTopicContent = {
  topicId: "phys-lenses-prism",
  topicName: "Lenses, Lens Maker & Prisms",
  subject: "Physics",
  class: "Class 12",
  classification: "Electromagnetic Waves & Optics",
  chapter: "Ray Optics and Optical Instruments",

  whatIsThisTopic: "Comprehensive first-principles mastery of thin lens theory, convex and concave lens image constructions, thin lens formula 1/f = 1/v - 1/u, magnification m = +v/u, lens power in Dioptres, coaxial combination of lenses, Lens Maker's formula with Cartesian curvature radii, lens immersion behavior, vertical vs horizontal lens slicing, triangular prism geometry, minimum deviation formula, and chromatic dispersion into the VIBGYOR spectrum.",

  basicIdea: [
    "A lens is a transparent refracting optical medium bounded by two curved spherical surfaces (or one curved and one plane).",
    "Convex lenses converge light rays (f > 0, P > 0); Concave lenses diverge light rays (f < 0, P < 0).",
    "The thin lens equation 1/f = 1/v - 1/u and magnification m = +v/u determine all image characteristics when used with Cartesian signs.",
    "Lens power P = 1/f(in metres) measured in Dioptres (D). For lenses in contact, powers add algebraically: P = P₁ + P₂.",
    "Lens Maker's formula 1/f = (μ_lens/μ_med - 1)(1/R₁ - 1/R₂) shows that focal length depends on curvature radii AND relative refractive index.",
    "In a triangular prism, geometry gives A = r₁ + r₂ and δ = i + e - A. Minimum deviation δ_m occurs uniquely when i = e and r = A/2.",
    "Dispersion splits white light into VIBGYOR because refractive index increases as wavelength decreases (Cauchy's law: μ_violet > μ_red)."
  ],

  importantTerms: [
    {
      term: "Optical Centre (O)",
      definition: "The central point of a thin lens through which incident light rays pass straight through with zero net angular deviation.",
      neetNote: "Acts as the origin (0, 0) for all Cartesian axial distance measurements for lenses."
    },
    {
      term: "Principal Focus & Focal Length (f)",
      definition: "The point on the principal axis where incident parallel rays converge (Convex lens, real focus, f > 0) or appear to diverge from (Concave lens, virtual focus, f < 0).",
      neetNote: "Second focus F₂ is by international convention the Principal Focus of any lens."
    },
    {
      term: "Power of a Lens (P)",
      definition: "The measure of a lens's converging or diverging ability, defined as P = 1 / f(m) = 100 / f(cm).",
      neetNote: "SI unit is Dioptre (D = m⁻¹). Convex has +P; Concave has -P. Always convert cm into metres first!"
    },
    {
      term: "Lens Maker's Formula",
      definition: "1/f = (μ_lens/μ_medium - 1)[ 1/R₁ - 1/R₂ ]. Used to calculate focal length based on glass index and surface radii.",
      neetNote: "For equibiconvex glass lens in air: f = R / [2(μ - 1)]. When μ = 1.5, f = R."
    },
    {
      term: "Angle of Minimum Deviation (δ_m)",
      definition: "The minimum angular deviation of a ray passing symmetrically through a prism, occurring when i = e and r₁ = r₂ = A/2.",
      neetNote: "Prism Formula: μ = sin[(A + δ_m)/2] / sin(A/2)."
    },
    {
      term: "Dispersive Power (ω)",
      definition: "The ratio of angular dispersion between extreme rays to the mean deviation: ω = (μ_v - μ_r) / (μ_y - 1).",
      neetNote: "Dimensionless property that depends purely on the prism material, independent of the prism angle A."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Thin Lenses: Classifications & Principal Rays",
      paragraphs: [
        "A lens is an optical transparent medium bounded by two spherical surfaces.",
        "• Convex Lens (Converging): Thicker at the center than at the edges. (f > 0, P > 0).",
        "• Concave Lens (Diverging): Thinner at the center than at the edges. (f < 0, P < 0).",
        "Three Standard Principal Rays for Thin Lenses:",
        "1. Parallel Ray: A ray incident parallel to the principal axis passes through F₂ (convex) or appears to diverge from F₂ (concave).",
        "2. Focal Ray: A ray passing through F₁ (convex) or directed toward F₁ (concave) emerges parallel to the principal axis after refraction.",
        "3. Optical Centre Ray: A ray directed through Optical Centre O passes straight through with negligible deviation."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.convexLensBetweenFand2F,
        caption: "Principal Ray Tracing for a Convex Lens with Object between F and 2F.",
        guide: "Intersection of refracted rays creates the Real, Inverted image on the right side of the lens."
      },
      importantPoints: [
        "Thin lens approximation assumes lens thickness is negligible compared to u, v, and R.",
        "Convex lens forms real images for u > f and a virtual image for u < f."
      ]
    },
    {
      heading: "2. Image Formation by Convex & Concave Lenses",
      paragraphs: [
        "Convex Lens (All 6 Standard Cases):",
        "• Case 1: Object at Infinity (u = -∞) → Image at F₂ (v = +f), Real, Inverted, Point-sized, m << -1.",
        "• Case 2: Object Beyond 2F₁ (-∞ < u < -2f) → Image between F₂ and 2F₂ (+f < v < +2f), Real, Inverted, Diminished (-1 < m < 0). (Camera mode).",
        "• Case 3: Object at 2F₁ (u = -2f) → Image at 2F₂ (v = +2f), Real, Inverted, Same Size (m = -1). (Photocopier 1:1 mode).",
        "• Case 4: Object Between F₁ and 2F₁ (-2f < u < -f) → Image beyond 2F₂ (v > +2f), Real, Inverted, Magnified (m < -1). (Projector mode).",
        "• Case 5: Object at F₁ (u = -f) → Image at Infinity (v = +∞), Real, Inverted, Highly Magnified.",
        "• Case 6: Object Between F₁ and O (-f < u < 0) → Image on the same side as object (v < 0), VIRTUAL, ERECT, MAGNIFIED (m > +1). (Magnifying glass mode).",
        "Concave Lens: For all real objects at any distance, it forms ONLY VIRTUAL, ERECT, DIMINISHED images on the same side (0 < m < 1, 0 > v > -f)."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.convexLensBetweenFandO,
        caption: "Convex Lens Case 6: Object inside Focal Length Forms a Virtual, Erect, and Magnified Image.",
        guide: "This setup forms the foundation of a simple magnifier: object inside f produces an erect enlarged view."
      },
      importantPoints: [
        "Minimum distance between a real object and its real image for a convex lens is 4f (when u = 2f, v = 2f).",
        "A concave lens NEVER forms a real or magnified image for any real object position."
      ]
    },
    {
      heading: "3. Thin Lens Formula & Linear Magnification",
      paragraphs: [
        "The thin lens formula relates object distance u, image distance v, and focal length f:",
        "1/f = 1/v - 1/u",
        "Derived forms: v = (u · f) / (u + f)   and   u = (v · f) / (f - v).",
        "Linear Magnification: m = h_i / h_o = +v / u.",
        "Magnification in terms of f: m = f / (f + u) = (f - v) / f.",
        "Contrast with Mirrors: In mirrors, 1/f = 1/v + 1/u (Plus) and m = -v/u (Minus). In lenses, 1/f = 1/v - 1/u (Minus) and m = +v/u (Plus)."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.concaveLensGeometry,
        caption: "Concave Lens Geometry: Diverging Rays and Virtual Focal Point F₁ (f < 0).",
        guide: "Concave lenses have negative focal length (f < 0) and negative image distance (v < 0) for real objects."
      },
      importantPoints: [
        "Real image formed by lens: v is POSITIVE (+v), m is NEGATIVE (-m, inverted).",
        "Virtual image formed by lens: v is NEGATIVE (-v), m is POSITIVE (+m, erect)."
      ]
    },
    {
      heading: "4. Power of Lens & Combination of Thin Lenses",
      paragraphs: [
        "Power of a lens P is the degree of convergence or divergence it introduces in a light beam:",
        "P = 1 / f(in metres) = 100 / f(in cm)   [Unit: Dioptre, D = m⁻¹]",
        "• Convex lens: f > 0 ⇒ P > 0 (+D).",
        "• Concave lens: f < 0 ⇒ P < 0 (-D).",
        "Combination of Lenses in Physical Contact:",
        "When thin lenses of focal lengths f₁, f₂, f₃... are placed in coaxial contact:",
        "1/F = 1/f₁ + 1/f₂ + 1/f₃ + ...",
        "P_total = P₁ + P₂ + P₃ + ...",
        "Net Linear Magnification: m_total = m₁ × m₂ × m₃ × ...",
        "Separated Lenses (Distance d apart in air): 1/F = 1/f₁ + 1/f₂ - d/(f₁ f₂)."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.convexLensGeometry,
        caption: "Lens Power Geometry: P = 1/f(m). Shorter focal length bends rays more sharply.",
        guide: "A +4 D convex lens combined with a -2 D concave lens yields a net power of +2 D (F = +50 cm, converging)."
      },
      importantPoints: [
        "Always convert cm into metres before computing power P = 1/f(m) = 100/f(cm).",
        "If a convex lens (+f) and concave lens (-f) of equal focal length touch, P = 0, F = ∞ (acts as a plane glass slab)."
      ]
    },
    {
      heading: "5. Lens Maker's Formula & Medium Dependence",
      paragraphs: [
        "The Lens Maker's formula relates the focal length of a lens to its refractive index μ and radii of curvature R₁ and R₂:",
        "1/f = (μ_lens / μ_medium - 1) [ 1/R₁ - 1/R₂ ]",
        "For a lens in air (μ_medium = 1):",
        "1/f = (μ - 1) [ 1/R₁ - 1/R₂ ]",
        "Cartesian Rules for Radii R₁ and R₂:",
        "• Equibiconvex Lens: R₁ = +R, R₂ = -R ⇒ 1/f = (μ - 1)[ 1/R - (-1/R) ] = 2(μ - 1)/R.",
        "• Plano-convex Lens: R₁ = +R, R₂ = ∞ ⇒ 1/f = (μ - 1)/R.",
        "• Equibiconcave Lens: R₁ = -R, R₂ = +R ⇒ 1/f = -2(μ - 1)/R.",
        "Immersion in Liquid Medium: f_liquid / f_air = (μ_g - 1) / [ (μ_g / μ_l) - 1 ].",
        "For standard glass (μ_g = 1.5) in water (μ_w = 4/3): f_water = 4 × f_air.",
        "If μ_liquid > μ_lens: The sign of focal length reverses (convex lens turns diverging!).",
        "If μ_liquid = μ_lens: 1/f = 0 ⇒ f = ∞ (lens disappears and becomes invisible)."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.lensMakerGeometry,
        caption: "Lens Maker Geometry showing Radii of Curvature +R₁ (Left Surface) and -R₂ (Right Surface).",
        guide: "For a glass lens with μ = 1.5, 1/f = (1.5 - 1)(2/R) = 1/R ⇒ f = R."
      },
      importantPoints: [
        "Cutting lens transversely (vertical cut): Each half gets f' = 2f and power P' = P/2.",
        "Cutting lens longitudinally (horizontal cut along axis): Each half retains f' = f and P' = P, but intensity is halved (I/2).",
        "Standard glass lens in water: Focal length quadruples (f_water = 4 f_air)."
      ]
    },
    {
      heading: "6. Refraction Through a Prism & Minimum Deviation",
      paragraphs: [
        "A triangular prism has two plane refracting faces inclined at prism angle A.",
        "Fundamental Prism Relations:",
        "1. Prism Angle: A = r₁ + r₂",
        "2. Net Deviation: δ = i + e - A   ⇒   i + e = A + δ",
        "Minimum Deviation Condition (δ = δ_m):",
        "At minimum deviation, the ray travels symmetrically inside the prism parallel to the base:",
        "1. i = e   and   r₁ = r₂ = r = A / 2",
        "2. i = (A + δ_m) / 2",
        "Applying Snell's law gives the Prism Formula:",
        "μ = sin [ (A + δ_m) / 2 ] / sin (A / 2)",
        "Thin Prism (A < 10°): For small angles, sin θ ≈ θ, giving the deviation formula:",
        "δ = (μ - 1) A"
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.minimumDeviation,
        caption: "Symmetrical Ray Path at Minimum Deviation Condition: i = e and r₁ = r₂ = A/2.",
        guide: "At minimum deviation, the refracted ray inside the prism runs strictly parallel to the prism base."
      },
      importantPoints: [
        "At minimum deviation: r = A/2. For an equilateral prism (A = 60°), r = 30° strictly.",
        "Thin prism deviation: δ = (μ - 1)A is independent of angle of incidence for small angles."
      ]
    },
    {
      heading: "7. Dispersion of Light & VIBGYOR Spectrum",
      paragraphs: [
        "Dispersion is the splitting of composite white light into its constituent colors when passing through a refracting medium.",
        "Origin (Cauchy's Equation): Refractive index varies inversely with wavelength: μ(λ) = A + B/λ².",
        "Since λ_violet (~400 nm) < λ_red (~700 nm):",
        "μ_violet > μ_red   ⇒   δ_violet > δ_red",
        "Violet bends the most; Red bends the least, separating white light into VIBGYOR.",
        "Quantitative Metrics:",
        "1. Angular Dispersion: θ = δ_v - δ_r = (μ_v - μ_r) A.",
        "2. Dispersive Power: ω = θ / δ_y = (μ_v - μ_r) / (μ_y - 1).",
        "Dispersive power ω depends solely on the material of the prism, NOT on the angle of the prism A."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.dispersionPrism,
        caption: "Dispersion of White Light into VIBGYOR Spectrum by Differential Refraction.",
        guide: "Red light suffers minimum deviation (top of spectrum); Violet suffers maximum deviation (bottom of spectrum)."
      },
      importantPoints: [
        "In vacuum, all colors travel at identical speed c (no dispersion in vacuum).",
        "Dispersive power ω is dimensionless.",
        "A combination of crown and flint glass prisms produces Achromatism (deviation without dispersion)."
      ]
    }
  ],

  formulae: [
    {
      formulaName: "Thin Lens Formula",
      expression: "1/f = 1/v - 1/u   ⇒   v = (u · f) / (u + f)",
      whatItRepresents: "Relates object distance u, image distance v, and focal length f of a thin lens.",
      symbols: "f = focal length, v = image distance, u = object distance",
      unit: "metres (m) or cm",
      conditions: "Thin lenses of negligible axial thickness.",
      calculationExample: {
        problem: "An object is placed 30 cm in front of a convex lens of focal length 20 cm. Find image distance.",
        given: "u = -30 cm, f = +20 cm",
        stepByStep: [
          "1/v = 1/f + 1/u = 1/(+20) + 1/(-30) = 1/20 - 1/30 = (3 - 2)/60 = 1/60",
          "v = +60 cm."
        ],
        answer: "v = +60 cm (Real image formed 60 cm behind lens)."
      }
    },
    {
      formulaName: "Lens Linear Magnification",
      expression: "m = h_i / h_o = +v / u = f / (f + u)",
      whatItRepresents: "Ratio of image height to object height for a lens.",
      symbols: "m = linear magnification, h_i = image height, h_o = object height, u, v, f",
      unit: "Dimensionless",
      conditions: "Negative m = Real/Inverted; Positive m = Virtual/Erect.",
      calculationExample: {
        problem: "Find magnification for u = -30 cm, f = +20 cm.",
        given: "u = -30 cm, f = +20 cm",
        stepByStep: ["m = f / (f + u) = (+20) / [ (+20) + (-30) ] = 20 / (-10) = -2.0."],
        answer: "m = -2.0 (Real, Inverted, 2 times magnified)."
      }
    },
    {
      formulaName: "Lens Maker's Formula",
      expression: "1/f = (μ_lens / μ_medium - 1) [ 1/R₁ - 1/R₂ ]",
      whatItRepresents: "Calculates focal length from surface radii and relative refractive index.",
      symbols: "μ = refractive indices, R₁, R₂ = curvature radii, f = focal length",
      unit: "metres (m) or cm",
      conditions: "Valid for thin lenses in any surrounding medium.",
      calculationExample: {
        problem: "An equibiconvex glass lens (μ = 1.5) has R = 20 cm. Find f in air.",
        given: "μ = 1.5, R₁ = +20 cm, R₂ = -20 cm",
        stepByStep: [
          "1/f = (1.5 - 1)[ 1/20 - (-1/20) ] = 0.5 × (2/20) = 1/20",
          "f = +20 cm."
        ],
        answer: "f = +20 cm (Power P = +5.0 D)."
      }
    },
    {
      formulaName: "Prism Formula at Minimum Deviation",
      expression: "μ = sin [ (A + δ_m) / 2 ] / sin (A / 2)",
      whatItRepresents: "Relates prism refractive index to apex angle A and minimum deviation δ_m.",
      symbols: "μ = refractive index, A = prism angle, δ_m = minimum deviation",
      unit: "Angles in degrees/radians, μ is dimensionless",
      conditions: "Occurs when ray passes symmetrically through prism (i = e).",
      calculationExample: {
        problem: "An equilateral prism (A = 60°) has δ_m = 30°. Find μ.",
        given: "A = 60°, δ_m = 30°",
        stepByStep: [
          "μ = sin[(60° + 30°)/2] / sin(60°/2) = sin 45° / sin 30° = (1/√2) / (1/2) = 2/√2 = √2 ≈ 1.414."
        ],
        answer: "μ = √2 ≈ 1.414."
      }
    }
  ],

  neetImportantPoints: [
    "Mirror formula has PLUS (1/f = 1/v + 1/u) and MINUS in magnification (m = -v/u). Lens formula has MINUS (1/f = 1/v - 1/u) and PLUS in magnification (m = +v/u).",
    "For glass lens (μ = 1.5) in water (μ = 4/3): f_water = 4 × f_air. Power in water is 1/4th of power in air.",
    "If a lens is cut vertically into two halves, each half has double the focal length (2f) and half the power (P/2).",
    "If a lens is cut horizontally along principal axis, focal length and power remain UNCHANGED, but intensity is halved (I/2).",
    "At minimum deviation: r = A/2 strictly. In equilateral prism (A = 60°), r = 30°.",
    "Violet light suffers maximum deviation because it has the shortest wavelength and highest refractive index."
  ],

  commonConfusions: [
    {
      misconception: "Thinking a convex lens is always converging in all liquids.",
      correctFact: "If immersed in a liquid of higher refractive index than glass (μ_liquid > μ_glass), the sign of f reverses and the convex lens becomes DIVERGING.",
      whyItMattersForNEET: "Frequently tested conceptual problem in NEET."
    },
    {
      misconception: "Confusing the effects of vertical vs horizontal slicing of a lens.",
      correctFact: "Vertical cut changes focal length (f becomes 2f, P becomes P/2). Horizontal cut does NOT change focal length (f remains f), only intensity drops to I/2.",
      whyItMattersForNEET: "Direct NEET 2023 question."
    },
    {
      misconception: "Calculating power as P = 1 / f(in cm).",
      correctFact: "Power in Dioptres requires focal length in METRES: P = 1/f(m) = 100/f(cm).",
      whyItMattersForNEET: "Prevents a factor of 100 calculation error."
    }
  ],

  quickRevision: [
    "Lens Formula: 1/f = 1/v - 1/u  |  m = +v/u = f/(f + u).",
    "Power: P = 100 / f(cm)  |  Lenses in contact: P_net = P₁ + P₂  |  1/F = 1/f₁ + 1/f₂.",
    "Lens Maker: 1/f = (μ_lens/μ_med - 1)(1/R₁ - 1/R₂). Glass in water: f_water = 4 f_air.",
    "Vertical Cut: f' = 2f, P' = P/2  |  Horizontal Cut: f' = f, P' = P, I' = I/2.",
    "Prism Geometry: A = r₁ + r₂  |  δ = i + e - A  |  Thin Prism: δ = (μ - 1)A.",
    "Minimum Deviation: i = e, r = A/2  |  μ = sin[(A + δ_m)/2] / sin(A/2).",
    "Dispersion: μ_v > μ_r ⇒ δ_v > δ_r  |  θ = (μ_v - μ_r)A  |  ω = (μ_v - μ_r)/(μ_y - 1)."
  ],

  pyqs: [
    {
      year: 2023,
      exam: "NEET UG",
      question: "An equiconvex lens has power P. It is cut into two symmetrical halves by a plane normal to the principal axis. The power of each half will be:",
      options: ["(a) P / 2", "(b) 2P", "(c) P", "(d) Zero"],
      correctAnswer: 0,
      explanation: "Original lens: 1/f = 2(μ - 1)/R ⇒ P = 1/f. When cut vertically normal to principal axis, each resulting half is a plano-convex lens with 1/f' = (μ - 1)/R = 1/(2f). Therefore, new focal length f' = 2f and new power P' = P / 2.",
      conceptTested: "Lens Maker's Formula & Vertical Slicing",
      difficulty: "Medium",
      verified: true
    },
    {
      year: 2022,
      exam: "NEET UG",
      question: "A biconvex lens has radii of curvature, 20 cm each. If the refractive index of the material of the lens is 1.5, the power of the lens is:",
      options: ["(a) +2 D", "(b) +20 D", "(c) +5 D", "(d) Infinity"],
      correctAnswer: 2,
      explanation: "Using Lens Maker's Formula: R₁ = +20 cm, R₂ = -20 cm, μ = 1.5. 1/f = (1.5 - 1)[1/20 - (-1/20)] = 0.5 × (2/20) = 1/20 cm⁻¹ ⇒ f = +20 cm = +0.2 m. Power P = 1/f(m) = 1/0.2 = +5.0 D.",
      conceptTested: "Lens Maker's Formula & Dioptre Power",
      difficulty: "Easy",
      verified: true
    },
    {
      year: 2016,
      exam: "NEET UG (Phase 1)",
      question: "The angle of incidence for a ray of light at a refracting surface of a prism is 45°. The angle of prism is 60°. If the ray suffers minimum deviation through the prism, the angle of minimum deviation and refractive index of the material of the prism respectively, are:",
      options: ["(a) 45°, 1/√2", "(b) 30°, √2", "(c) 45°, √2", "(d) 30°, 1/√2"],
      correctAnswer: 1,
      explanation: "At minimum deviation: i = 45°, A = 60°. δ_m = 2i - A = 2(45°) - 60° = 30°. Angle r = A/2 = 30°. Refractive index μ = sin i / sin r = sin 45° / sin 30° = (1/√2) / (1/2) = √2.",
      conceptTested: "Prism Minimum Deviation & Refractive Index",
      difficulty: "Easy",
      verified: true
    }
  ]
};
