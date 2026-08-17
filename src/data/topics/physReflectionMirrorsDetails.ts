import { DetailedTopicContent } from '../../types/neet';
import { rayOpticsDiagrams } from '../rayOptics/rayOpticsDiagrams';

export const physReflectionMirrorsDetails: DetailedTopicContent = {
  topicId: "phys-reflection-mirrors",
  topicName: "Reflection & Spherical Mirrors",
  subject: "Physics",
  class: "Class 12",
  classification: "Electromagnetic Waves & Optics",
  chapter: "Ray Optics and Optical Instruments",

  whatIsThisTopic: "Comprehensive first-principles mastery of rectilinear light propagation, universal laws of reflection, plane mirror characteristics, concave and convex spherical mirrors, geometric parameters, paraxial derivation f = R/2, standard ray tracing, all 6 image cases, mirror formula 1/f = 1/v + 1/u, linear magnification m = -v/u, solved NEET numericals, and verified previous-year questions.",

  basicIdea: [
    "Light behaves as rays traveling in straight paths when encountering macroscopic boundaries (aperture >> wavelength).",
    "Reflection reverses light propagation back into the same medium while strictly conserving frequency, speed, and wavelength.",
    "The universal laws of reflection (angle i = angle r and coplanarity) apply identically to both plane and curved spherical surfaces at the local tangent.",
    "Paraxial rays close to the principal axis focus at f = R/2. Concave mirrors form both real and virtual images; convex mirrors strictly form virtual, erect, and diminished images.",
    "The mirror equation 1/f = 1/v + 1/u and magnification m = -v/u allow precise determination of image location, size, and orientation when used with Cartesian sign conventions."
  ],

  importantTerms: [
    {
      term: "Ray of Light",
      definition: "An idealized straight-line trajectory along which optical radiant energy propagates through a homogeneous isotropic medium.",
      neetNote: "Valid under the geometrical optics approximation where obstacle/aperture size a >> λ (λ ~ 400-700 nm)."
    },
    {
      term: "Normal & Point of Incidence",
      definition: "The normal is a line drawn perpendicular (at 90°) to the reflecting interface at the exact coordinate where the incident ray strikes.",
      neetNote: "CRITICAL NEET RULE: All angles of incidence (i) and reflection (r) are ALWAYS measured relative to the Normal, never relative to the surface plane."
    },
    {
      term: "Pole (P) & Principal Axis",
      definition: "Pole (P) is the geometric vertex of a spherical mirror. The Principal Axis is the straight line passing through the Pole and the Centre of Curvature (C).",
      neetNote: "In Cartesian sign conventions, Pole P serves as the origin (0, 0) for all axial distance measurements."
    },
    {
      term: "Centre of Curvature (C) & Radius (R)",
      definition: "The geometric center and radius of the hollow glass sphere from which the spherical mirror segment was cut.",
      neetNote: "For paraxial rays, f = R/2. Concave mirror has R < 0, f < 0; Convex mirror has R > 0, f > 0."
    },
    {
      term: "Principal Focus (F) & Focal Length (f)",
      definition: "The axial point where rays incident parallel to the principal axis converge (real focus in concave mirror) or appear to diverge from (virtual focus in convex mirror).",
      neetNote: "Focal length of a spherical mirror depends ONLY on its radius of curvature (f = R/2) and is completely INDEPENDENT of the surrounding medium (unlike a lens!)."
    },
    {
      term: "Linear Magnification (m)",
      definition: "The ratio of the transverse height of the image (h_i) to the transverse height of the object (h_o): m = h_i / h_o = -v / u.",
      neetNote: "m < 0 signifies a Real, Inverted image. m > 0 signifies a Virtual, Erect image. |m| > 1 means enlarged, |m| < 1 means diminished."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Chapter Introduction & Rectilinear Propagation of Light",
      paragraphs: [
        "Optics investigates the generation, propagation, and detection of electromagnetic radiation in the optical spectrum. In Ray Optics, we treat light as propagating along geometric rays. This approximation is valid whenever the macroscopic dimensions of obstacles, slits, and mirrors are vastly larger than the wavelength of light (a >> λ).",
        "The conceptual framework of optics progresses systematically: Rectilinear Propagation → Reflection at Plane & Spherical Mirrors → Refraction at Plane Interfaces → Total Internal Reflection → Curved Surface Refraction & Lenses → Prism Dispersion → Optical Instruments.",
        "When light reflects from a smooth boundary back into the original medium, its speed (v = c/n), frequency (ν), and wavelength (λ) remain strictly unchanged, while its direction vector is altered according to the laws of reflection."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.conceptFlow,
        caption: "Conceptual Hierarchy of Ray Optics and Optical Instruments for NEET UG 2026.",
        guide: "Follow the sequential chain from rectilinear propagation through spherical mirrors to optical instruments."
      },
      importantPoints: [
        "Light travels at c ≈ 3.0 × 10⁸ m/s in vacuum.",
        "Rectilinear propagation accounts for shadow formation, eclipses, and pinhole camera image formation.",
        "Reflection conserves frequency, speed, and wavelength 100%."
      ]
    },
    {
      heading: "2. The Universal Laws of Reflection",
      paragraphs: [
        "Whenever light strikes any reflecting boundary separating two media:",
        "1. First Law of Reflection: The incident ray, the reflected ray, and the normal to the reflecting surface at the point of incidence all lie in the same geometric plane (coplanar).",
        "2. Second Law of Reflection: The angle of incidence (i) is strictly equal to the angle of reflection (r): ∠i = ∠r.",
        "Angle of Deviation (δ): For a single reflection on a plane surface, the angle between the original path of the incident ray and the reflected ray is given by δ = 180° - 2i = π - 2i.",
        "Normal Incidence: When a ray strikes normally (i = 0°), it reflects straight back along the normal (r = 0°), suffering a total deviation of δ = 180°."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.lawsOfReflection,
        caption: "The Fundamental Laws of Reflection: Angle of Incidence (i) = Angle of Reflection (r).",
        guide: "Angles i and r are strictly measured relative to the dashed Normal line perpendicular to the surface."
      },
      importantPoints: [
        "Glancing angle θ = 90° - i. If glancing angle is 30°, then i = 60° and r = 60°.",
        "If a plane mirror is rotated by an angle θ keeping the incident ray fixed, the reflected ray rotates by 2θ.",
        "Minimum height of a plane mirror required for a person of height H to view their full image is H/2."
      ]
    },
    {
      heading: "3. Spherical Mirrors: Geometry & Derivation of f = R/2",
      paragraphs: [
        "A spherical mirror is a curved section cut from a hollow glass sphere with one surface silvered:",
        "• Concave Mirror (Converging): Inner curved surface is reflecting; outer bulged surface is silvered. Focus F lies in front of the mirror (Real focus).",
        "• Convex Mirror (Diverging): Outer bulged surface is reflecting; inner surface is silvered. Focus F lies behind the mirror (Virtual focus).",
        "Derivation of f = R/2 for Paraxial Rays: Consider a ray parallel to the principal axis striking a concave mirror at point M at height h from the principal axis. The normal drawn from the Centre of Curvature C strikes the surface at M. By reflection law, ∠i = ∠r. From alternate angles, ∠MCP = i. The exterior angle to triangle CFM at F is ∠MFP = 2i. For paraxial rays (small angles), tan i ≈ i ≈ h/R and tan 2i ≈ 2i ≈ h/f. Substituting gives 2(h/R) = h/f ⇒ f = R/2."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.concaveMirrorGeometry,
        caption: "Geometry of Concave Mirror: Pole P, Focus F (f = R/2), and Centre of Curvature C.",
        guide: "Cartesian origin is at Pole P. Inward distances to the left are negative: f = -R/2."
      },
      importantPoints: [
        "f = R/2 holds strictly for paraxial rays (rays making small angles with the principal axis).",
        "Marginal rays focus closer to the pole than paraxial rays, causing Spherical Aberration.",
        "Parabolic mirrors have zero spherical aberration and are used in astronomical telescopes and vehicle headlights."
      ]
    },
    {
      heading: "4. Standard Principal Rays for Spherical Mirrors",
      paragraphs: [
        "To construct any image formed by a spherical mirror, we trace at least two of the four principal rays:",
        "1. Parallel Ray: A ray traveling parallel to the principal axis passes through F after reflection (concave mirror) or appears to diverge from F (convex mirror).",
        "2. Focal Ray: A ray passing through F (or directed towards F) emerges parallel to the principal axis after reflection.",
        "3. Centre of Curvature Ray: A ray passing through C (or directed towards C) strikes the mirror normally (i = 0°) and retraces its path straight back.",
        "4. Pole Ray: A ray incident at Pole P reflects symmetrically such that ∠i = ∠r with respect to the principal axis."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.concavePrincipalRays,
        caption: "The Four Standard Principal Rays Used for Spherical Mirror Image Construction.",
        guide: "Intersection of reflected rays defines the Real Image point; intersection of backward extensions defines the Virtual Image."
      },
      importantPoints: [
        "Real image: Reflected rays actually intersect. Can be projected onto a screen.",
        "Virtual image: Reflected rays diverge; backward extensions intersect behind mirror. Cannot be caught on a screen."
      ]
    },
    {
      heading: "5. Image Formation by Concave Mirror (All 6 Cases)",
      paragraphs: [
        "The position, nature, and magnification of images formed by a concave mirror depend on object distance u:",
        "• Case 1: Object at Infinity (u = -∞) → Image at Focus F (v = -f), Real, Inverted, Point-sized (m << -1).",
        "• Case 2: Object Beyond C (-∞ < u < -2f) → Image between C and F (-2f < v < -f), Real, Inverted, Diminished (-1 < m < 0).",
        "• Case 3: Object Exactly at C (u = -2f) → Image at C (v = -2f), Real, Inverted, Same Size (m = -1).",
        "• Case 4: Object Between C and F (-2f < u < -f) → Image beyond C (v < -2f), Real, Inverted, Magnified (m < -1).",
        "• Case 5: Object Exactly at F (u = -f) → Image at Infinity (v = -∞), Real, Inverted, Highly Magnified.",
        "• Case 6: Object Between F and Pole P (-f < u < 0) → Image behind mirror (v > 0), VIRTUAL, ERECT, MAGNIFIED (m > +1). Used in shaving and dental mirrors."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.concaveObjectBetweenCandF,
        caption: "Concave Mirror Case 4: Object between C and F Forms a Real, Inverted, Magnified Image Beyond C.",
        guide: "Observe that moving an object from infinity toward F moves its real image from F outward toward infinity."
      },
      importantPoints: [
        "Concave mirror forms a VIRTUAL image in only ONE situation: when object is inside the focal length (u < f).",
        "When object is at C (u = 2f), image is at C (v = 2f) with magnification m = -1.",
        "Solar furnaces place crucible at Focus F to concentrate parallel solar rays."
      ]
    },
    {
      heading: "6. Image Formation by Convex Mirror",
      paragraphs: [
        "A convex mirror diverges incident light. For all real objects positioned in front of the mirror:",
        "• Case 1: Object at Infinity (u = -∞) → Image at virtual focus F behind mirror (v = +f), Virtual, Erect, Point-sized (m → 0).",
        "• Case 2: Object at any finite distance (-∞ < u < 0) → Image formed behind mirror between P and F (0 < v < +f), VIRTUAL, ERECT, DIMINISHED (0 < m < +1).",
        "Automobile Rear-View Mirrors: Convex mirrors are universally installed as side rear-view mirrors because: 1) They always give an erect image, 2) The diminished image provides a vastly wider field of view compared to plane mirrors."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.convexMirrorImageFormation,
        caption: "Convex Mirror Image Formation: Always Virtual, Erect, and Diminished Behind the Mirror.",
        guide: "For any real object distance, v is always positive and strictly less than focal length f."
      },
      importantPoints: [
        "A convex mirror NEVER forms a real or magnified image for any real object position.",
        "Magnification m for convex mirror is ALWAYS positive and strictly between 0 and 1 (0 < m < 1)."
      ]
    },
    {
      heading: "7. Mirror Formula & Linear Magnification",
      paragraphs: [
        "The mirror formula relates object distance u, image distance v, and focal length f:",
        "1/f = 1/v + 1/u",
        "Derived forms: v = (u · f) / (u - f) and u = (v · f) / (v - f).",
        "Linear Magnification: m = h_i / h_o = -v / u.",
        "Magnification in terms of f: m = f / (f - u) = (f - v) / f.",
        "Sign Rules: Concave mirror has f < 0; Convex mirror has f > 0. Real object has u < 0. Real image has v < 0 (m < 0, inverted). Virtual image has v > 0 (m > 0, erect)."
      ],
      visual: {
        type: 'svg',
        svgContent: rayOpticsDiagrams.concaveObjectBetweenFandP,
        caption: "Concave Mirror Case 6: Virtual, Erect, Magnified Image formed when Object is between F and P.",
        guide: "When u < f, 1/v = 1/f - 1/u yields positive v, producing an erect virtual image behind the mirror."
      },
      importantPoints: [
        "Mirror formula: PLUS sign in 1/f = 1/v + 1/u; MINUS sign in magnification m = -v/u.",
        "Do not substitute signs for the unknown variable; let algebra determine its sign."
      ]
    }
  ],

  formulae: [
    {
      formulaName: "Paraxial Mirror Focal Length",
      expression: "f = R / 2",
      whatItRepresents: "Relation between focal length and radius of curvature for small aperture spherical mirrors.",
      symbols: "f = focal length (m), R = radius of curvature (m)",
      unit: "metres (m)",
      conditions: "Valid for paraxial rays close to principal axis.",
      calculationExample: {
        problem: "Find the focal length of a convex mirror of radius of curvature 30 cm.",
        given: "R = +30 cm (Convex mirror)",
        stepByStep: ["f = R / 2 = (+30 cm) / 2 = +15 cm."],
        answer: "f = +15 cm (Virtual focus behind mirror)."
      }
    },
    {
      formulaName: "Mirror Formula",
      expression: "1/f = 1/v + 1/u   ⇒   v = (u · f) / (u - f)",
      whatItRepresents: "Relates object distance u, image distance v, and focal length f.",
      symbols: "u = object distance, v = image distance, f = focal length",
      unit: "metres (m) or cm",
      conditions: "Universal for spherical mirrors under Cartesian sign convention.",
      calculationExample: {
        problem: "An object is placed 30 cm in front of a concave mirror of focal length 20 cm. Find image position.",
        given: "u = -30 cm, f = -20 cm",
        stepByStep: [
          "1/v = 1/f - 1/u = 1/(-20) - 1/(-30) = -1/20 + 1/30 = (-3 + 2)/60 = -1/60",
          "v = -60 cm."
        ],
        answer: "v = -60 cm (Real image formed 60 cm in front of mirror)."
      }
    },
    {
      formulaName: "Linear Magnification for Mirrors",
      expression: "m = h_i / h_o = -v / u = f / (f - u)",
      whatItRepresents: "Transverse sizing and orientation factor of the image.",
      symbols: "m = magnification, h_i = image height, h_o = object height, u, v, f",
      unit: "Dimensionless",
      conditions: "Negative m means Real & Inverted; Positive m means Virtual & Erect.",
      calculationExample: {
        problem: "Calculate magnification for an object at u = -30 cm with concave mirror f = -20 cm.",
        given: "u = -30 cm, f = -20 cm",
        stepByStep: [
          "m = f / (f - u) = (-20) / [ (-20) - (-30) ] = -20 / (+10) = -2.0"
        ],
        answer: "m = -2.0 (Real, Inverted, 2 times magnified)."
      }
    }
  ],

  neetImportantPoints: [
    "Focal length of a spherical mirror depends ONLY on its radius of curvature (f = R/2) and does NOT change when immersed in water or any other liquid.",
    "A plane mirror has infinite radius of curvature (R = ∞), infinite focal length (f = ∞), zero power (P = 0), and strictly magnification m = +1.",
    "If a concave mirror is cut longitudinally along its principal axis, focal length of each half remains f, but the image brightness/intensity is halved.",
    "For a concave mirror, minimum distance between a real object and its real image is ZERO (occurring when object is at C, u = 2f, v = 2f).",
    "Convex mirror gives a wide field of view because it always forms a diminished virtual image behind the mirror."
  ],

  commonConfusions: [
    {
      misconception: "Thinking focal length of a concave mirror changes when placed in water.",
      correctFact: "Focal length of a mirror is f = R/2, determined purely by geometry. It is completely independent of the surrounding medium (unlike a lens).",
      whyItMattersForNEET: "Frequent conceptual trap in NEET Physics."
    },
    {
      misconception: "Believing that m = -3 represents a diminished image because -3 is less than 1.",
      correctFact: "The minus sign denotes ONLY that the image is inverted (real). The magnitude |m| = 3 > 1 means the image is 3 times larger than the object.",
      whyItMattersForNEET: "Crucial for interpreting magnification options correctly in MCQs."
    },
    {
      misconception: "Pre-assigning a negative sign to an unknown image distance in the mirror formula.",
      correctFact: "Only substitute known values with signs. Keep the unknown variable as v; its resulting sign will tell you whether it is real (v < 0) or virtual (v > 0).",
      whyItMattersForNEET: "Prevents double-negative algebraic errors."
    }
  ],

  quickRevision: [
    "Universal Laws: ∠i = ∠r and coplanar rays. Glancing angle θ ⇒ i = 90° - θ.",
    "Paraxial Relation: f = R/2. Concave mirror: f < 0. Convex mirror: f > 0.",
    "Mirror Formula: 1/f = 1/v + 1/u  |  v = uf/(u - f).",
    "Magnification: m = -v/u = f/(f - u). Real image: m < 0. Virtual image: m > 0.",
    "Concave Mirror: Real images for u > f; Virtual magnified image for u < f.",
    "Convex Mirror: Always forms Virtual, Erect, Diminished image (0 < m < 1, 0 < v < f)."
  ],

  pyqs: [
    {
      year: 2018,
      exam: "NEET UG",
      question: "An object is placed at a distance of 40 cm from a concave mirror of focal length 15 cm. If the object is displaced through a distance of 20 cm towards the mirror, the displacement of the image will be:",
      options: [
        "(a) 30 cm away from the mirror",
        "(b) 36 cm away from the mirror",
        "(c) 30 cm towards the mirror",
        "(d) 36 cm towards the mirror"
      ],
      correctAnswer: 1,
      explanation: "Initial state: u₁ = -40 cm, f = -15 cm. 1/v₁ = 1/f - 1/u₁ = -1/15 + 1/40 = -5/120 = -1/24 ⇒ v₁ = -24 cm. New state: u₂ = -(40 - 20) = -20 cm. 1/v₂ = 1/(-15) - 1/(-20) = -1/15 + 1/20 = -1/60 ⇒ v₂ = -60 cm. Image displacement Δv = |v₂| - |v₁| = 60 - 24 = 36 cm away from the mirror.",
      conceptTested: "Two-Step Concave Mirror Position Calculation",
      difficulty: "Medium",
      verified: true
    }
  ]
};
