import { rayOpticsDiagrams } from './rayOpticsDiagrams';

export interface ConceptExplanationItem {
  heading: string;
  paragraphs: string[];
  visual?: {
    type: 'svg';
    svgContent: string;
    caption: string;
    guide?: string;
  };
  importantPoints?: string[];
}

export const rayOpticsTerms = [
  {
    term: "Ray of Light",
    definition: "An idealized straight line path along which light energy travels in a homogeneous, isotropic optical medium.",
    neetNote: "Represented with a directional arrow. The ray approximation is valid whenever the aperture or obstacle size 'a' is much larger than the wavelength of light λ (a >> λ)."
  },
  {
    term: "Beam of Light",
    definition: "A collection or bundle of adjacent light rays. Can be parallel (collimated), convergent (converging to a focal point), or divergent (spreading outward from a point source).",
    neetNote: "Parallel beams carry uniform wavefronts; convergent beams form real images; divergent beams originate from point sources or virtual focal points."
  },
  {
    term: "Normal & Point of Incidence",
    definition: "The normal is a line drawn perpendicular (at 90°) to the reflecting or refracting interface at the exact location (point of incidence O) where the light ray strikes.",
    neetNote: "CRITICAL NEET RULE: All angles of incidence (i), reflection (r), and refraction (r') are ALWAYS measured strictly relative to the Normal line, never relative to the surface plane."
  },
  {
    term: "Refractive Index (Absolute & Relative)",
    definition: "Absolute refractive index n = c / v is the ratio of speed of light in vacuum (c = 3×10⁸ m/s) to speed in the medium (v). Relative index ¹n₂ = n₂/n₁ = v₁/v₂ = λ₁/λ₂.",
    neetNote: "n is dimensionless and always ≥ 1 for matter. Optical density is not the same as mass density (e.g., turpentine has lower mass density than water but higher refractive index n ≈ 1.47 vs 1.33)."
  },
  {
    term: "Pole (P) & Optical Centre (O)",
    definition: "Pole (P) is the geometric center of a spherical mirror. Optical Centre (O) is the central point of a lens through which light rays pass without net lateral deviation.",
    neetNote: "All axial distances in mirror optics are measured starting from Pole P; in lens optics, all distances are measured starting from Optical Centre O."
  },
  {
    term: "Centre of Curvature (C) & Radius (R)",
    definition: "The center and radius of the imaginary hollow sphere of which the mirror or lens surface forms a spherical segment.",
    neetNote: "For paraxial rays in spherical mirrors, the focal length f = R/2. In Cartesian convention, Concave mirror has R < 0, f < 0; Convex mirror has R > 0, f > 0."
  },
  {
    term: "Principal Focus (F) & Focal Length (f)",
    definition: "The point on the principal axis where rays incident parallel to the principal axis either actually converge (real focus) or appear to diverge from (virtual focus) after reflection/refraction.",
    neetNote: "Concave mirror & Convex lens have REAL foci (f > 0 for lens in air, f < 0 for mirror in Cartesian frame). Convex mirror & Concave lens have VIRTUAL foci."
  },
  {
    term: "Critical Angle & Total Internal Reflection (TIR)",
    definition: "The specific angle of incidence in an optically denser medium for which the angle of refraction in the rarer medium equals 90°. If i > C, 100% of light reflects back internally.",
    neetNote: "Formula: sin C = 1/n (where n is the refractive index of the denser medium with respect to air). Required conditions: 1) Denser to rarer propagation, 2) Angle of incidence i > C."
  },
  {
    term: "Angle of Minimum Deviation (δ_m)",
    definition: "The lowest possible angular deviation suffered by a ray passing symmetrically through a prism, occurring uniquely when angle of incidence equals angle of emergence (i = e).",
    neetNote: "At minimum deviation, the refracted ray inside the prism travels parallel to its base, r₁ = r₂ = A/2, and μ = sin[(A + δ_m)/2] / sin(A/2)."
  },
  {
    term: "Power of a Lens (P)",
    definition: "The measure of a lens's ability to converge or diverge an incident beam of light, defined mathematically as the reciprocal of its focal length in metres: P = 1/f(m).",
    neetNote: "SI unit is Dioptre (D = m⁻¹). Converging (convex) lens has P > 0; Diverging (concave) lens has P < 0. Always convert cm into metres before finding Power!"
  }
];

export const rayOpticsConceptExplanations: ConceptExplanationItem[] = [
  {
    heading: "1. Chapter Introduction & Conceptual Propagation Chain",
    paragraphs: [
      "Optics is the branch of physics that studies the behavior, propagation, and interactions of light. Light exhibits a dual nature: under microscopic scales comparable to its wavelength (λ ~ 400–700 nm), light exhibits wave phenomena (interference, diffraction, polarization). However, when light interacts with macroscopic objects, mirrors, lenses, and apertures whose geometric dimensions (a) are thousands of times larger than λ (a >> λ), the wave nature can be approximated as straight lines called light rays.",
      "This geometric approximation is called Ray Optics (or Geometrical Optics). It rests upon the foundational principle of rectilinear propagation of light in homogeneous, isotropic media.",
      "The entire conceptual architecture of Ray Optics flows logically: Rectilinear Rays → Reflection at Plane & Curved Mirrors → Refraction across Plane Boundaries → Total Internal Reflection (TIR) → Refraction at Curved Interfaces & Thin Lenses → Dispersion in Prisms → Multi-element Optical Instruments (Microscopes & Telescopes)."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.conceptFlow,
      caption: "Conceptual Flowchart of Ray Optics and Optical Instruments for NEET UG 2026.",
      guide: "Trace the logical progression from rectilinear propagation to complex optical instruments."
    },
    importantPoints: [
      "Ray optics is an asymptotic limit (λ → 0) of wave optics valid when obstacles/apertures are significantly larger than 1 μm.",
      "Reflection reverses direction in the same medium; Refraction transmits light into a different medium with a change in speed and wavelength.",
      "Optical instruments combine refraction and reflection to maximize the visual angle subtended at the human eye."
    ]
  },
  {
    heading: "2. Basic Terminology & Cartesian Sign Convention",
    paragraphs: [
      "To solve optical numericals without sign errors, standard New Cartesian Sign Convention must be adhered to strictly:",
      "1. All optical distances along the principal axis are measured from the Pole (P) for mirrors and from the Optical Centre (O) for lenses.",
      "2. The direction of incident light is taken as the POSITIVE X-direction. Distances measured in the direction of incident light are positive (+); distances measured opposite to the direction of incident light are negative (-).",
      "3. Heights measured vertically upwards (above the principal axis) are positive (+); heights measured vertically downwards (below the principal axis) are negative (-)."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.concaveMirrorGeometry,
      caption: "Geometric Parameters and Cartesian Origin (Pole P) for Spherical Mirrors.",
      guide: "Notice how object distance u is always negative for real objects placed to the left of the mirror."
    },
    importantPoints: [
      "Object distance 'u' is ALWAYS NEGATIVE for real objects in standard ray diagrams.",
      "Concave mirror & Concave lens have NEGATIVE focal length (f < 0).",
      "Convex mirror & Convex lens have POSITIVE focal length (f > 0)."
    ]
  },
  {
    heading: "3. Reflection of Light & The Laws of Reflection",
    paragraphs: [
      "When a beam of light strikes a boundary separating two media, a portion of the energy is sent back into the original medium. This phenomenon is called reflection.",
      "Laws of Reflection (Universal for all reflecting surfaces — flat or curved):",
      "Law 1: The incident ray, the reflected ray, and the normal to the reflecting surface at the point of incidence all lie in the same geometric plane (coplanar).",
      "Law 2: The angle of incidence (i) is strictly equal to the angle of reflection (r): ∠i = ∠r.",
      "Regular vs Diffuse Reflection: On a smooth, polished plane (like a silvered mirror), parallel incident rays reflect as parallel reflected rays, forming sharp specular images. On a rough or irregular surface, micro-facets have normals pointing in random directions; although every individual ray obeys ∠i = ∠r at its microscopic contact point, the overall reflected light is scattered in all directions (diffuse reflection), allowing objects to be viewed from any vantage point."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.lawsOfReflection,
      caption: "The Fundamental Laws of Reflection: Angle i = Angle r with Respect to the Surface Normal.",
      guide: "CRITICAL NEET TRAP: If a question says 'a ray strikes a mirror at an angle of 30° to the surface', angle i = 90° - 30° = 60°!"
    },
    importantPoints: [
      "Angles i and r are ALWAYS defined with respect to the normal N, NOT the mirror surface plane.",
      "For normal incidence (i = 0°), the ray retraces its path straight back (r = 0°, angle of deviation δ = 180° - 2i = 180°).",
      "Deviation produced by a plane mirror for angle of incidence i is δ = 180° - 2i = π - 2i."
    ]
  },
  {
    heading: "4. Spherical Mirrors: Geometry & Relation f = R/2",
    paragraphs: [
      "A spherical mirror is a curved reflecting surface that forms part of a hollow sphere of glass with one surface silvered.",
      "• Concave Mirror (Converging Mirror): Inner curved surface is reflecting; outer bulged surface is silvered. Incident parallel rays converge at a real focus F in front of the mirror.",
      "• Convex Mirror (Diverging Mirror): Outer bulged surface is reflecting; inner hollow surface is silvered. Incident parallel rays diverge as if originating from a virtual focus F behind the mirror.",
      "Derivation of Paraxial Relation f = R/2: Consider a ray parallel to the principal axis striking a concave mirror at point M at height h from the axis. The normal to the surface at M passes through the Centre of Curvature C. By the law of reflection, ∠i = ∠r. From alternate interior angles, the angle subtended at C is θ = i, and the angle subtended at F is 2θ = 2i. For small aperture paraxial rays (tan θ ≈ θ ≈ h/R and tan 2θ ≈ 2θ ≈ h/f), we have 2(h/R) = h/f ⇒ f = R/2."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.convexMirrorGeometry,
      caption: "Convex Mirror Geometry showing Virtual Focus F and Radius of Curvature R Behind the Mirror.",
      guide: "Observe that for a convex mirror, both F and C lie behind the reflecting boundary, making +f and +R positive."
    },
    importantPoints: [
      "The relation f = R/2 holds strictly for paraxial rays (rays close to the principal axis making small angles).",
      "Marginal rays (striking near the outer edge) converge closer to the pole than paraxial rays, causing spherical aberration.",
      "Parabolic mirrors eliminate spherical aberration completely and are used in astronomical reflecting telescopes and searchlight reflectors."
    ]
  },
  {
    heading: "5. Principal Rays for Spherical Mirrors",
    paragraphs: [
      "To locate the position and nature of the image formed by any spherical mirror, we trace at least two of the four standard principal rays:",
      "1. Parallel Ray: A ray travelling parallel to the principal axis passes through the principal focus F after reflection (concave mirror) or appears to diverge from F (convex mirror).",
      "2. Focal Ray: A ray passing through F (or directed toward F) emerges strictly parallel to the principal axis after reflection.",
      "3. Central Ray: A ray passing through the Centre of Curvature C (or directed toward C) strikes the mirror normally (i = 0°) and retraces its own path back along the same line.",
      "4. Pole Ray: A ray incident obliquely at the Pole P reflects symmetrically across the principal axis such that the reflected ray makes an angle equal to the incident angle (∠i = ∠r)."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.concavePrincipalRays,
      caption: "The Four Standard Principal Rays Used for Spherical Mirror Ray Construction.",
      guide: "Any two rays intersecting give the real image point; their backward virtual extensions give the virtual image point."
    },
    importantPoints: [
      "Image formation is simply the geometric intersection of reflected rays (or their virtual extensions).",
      "Real images are formed by actual ray intersections and can be caught on a screen; virtual images cannot be caught on a screen."
    ]
  },
  {
    heading: "6. Image Formation by Concave Mirror (All 6 Standard Cases)",
    paragraphs: [
      "A concave mirror forms diverse image types depending upon the position of the object along the principal axis:",
      "Case 1: Object at Infinity (u = -∞) → Image is at Focus F (v = -f), Real, Inverted, Extremely Diminished (Point size), m << -1.",
      "Case 2: Object Beyond C (-∞ < u < -2f) → Image is Between C and F (-2f < v < -f), Real, Inverted, Diminished, -1 < m < 0.",
      "Case 3: Object Exactly at C (u = -2f) → Image is Exactly at C (v = -2f), Real, Inverted, Same Size as Object, m = -1.",
      "Case 4: Object Between C and F (-2f < u < -f) → Image is Beyond C (v < -2f), Real, Inverted, Magnified, m < -1.",
      "Case 5: Object Exactly at F (u = -f) → Image is at Infinity (v = -∞), Real, Inverted, Highly Magnified.",
      "Case 6: Object Between F and Pole P (-f < u < 0) → Image is Behind the Mirror (v > 0), VIRTUAL, ERECT, MAGNIFIED, m > +1."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.concaveObjectBetweenCandF,
      caption: "Concave Mirror Case 4: Object between C and F forms a Real, Inverted, Magnified Image beyond C.",
      guide: "Notice how moving the object from infinity towards F pushes the real image from F outwards to infinity."
    },
    importantPoints: [
      "Concave mirror forms a VIRTUAL image in ONLY ONE CASE: when the object is placed between F and P.",
      "Dental examination mirrors, shaving mirrors, and makeup mirrors use Case 6 (object inside focal length) to provide an erect, enlarged view.",
      "When object is at C, image is at C with magnification m = -1 (equal size, inverted)."
    ]
  },
  {
    heading: "7. Image Formation by Convex Mirror",
    paragraphs: [
      "A convex mirror always diverges incident light. Consequently, for all real object positions in front of the mirror, the reflected rays never intersect in real space; their backward extensions intersect behind the mirror between Pole P and Focus F.",
      "• Case 1: Object at Infinity (u = -∞) → Image is formed at Virtual Focus F behind the mirror (v = +f), Virtual, Erect, Point-sized (m → 0).",
      "• Case 2: Object at any Finite Distance in front of mirror (-∞ < u < 0) → Image is formed behind the mirror between P and F (0 < v < +f), VIRTUAL, ERECT, DIMINISHED, with magnification 0 < m < +1.",
      "Practical Advantage in Automobiles: Convex mirrors are universally employed as rear-view mirrors because: 1) They always give an erect image, 2) The diminished image size provides a significantly wider field of view compared to plane or concave mirrors."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.convexMirrorImageFormation,
      caption: "Image Formation by Convex Mirror: Always Virtual, Erect, and Diminished Behind the Mirror.",
      guide: "No matter how far or close a real object is placed, a convex mirror NEVER forms a real or magnified image."
    },
    importantPoints: [
      "For a convex mirror with real object: v is ALWAYS positive, m is ALWAYS positive and strictly less than 1 (0 < m < 1).",
      "Warning inscription: 'Objects in mirror are closer than they appear' occurs because the diminished image makes drivers perceive them as farther away."
    ]
  },
  {
    heading: "8. The Mirror Formula & Mathematical Derivation",
    paragraphs: [
      "The mirror equation relates the object distance (u), image distance (v), and focal length (f) of a spherical mirror:",
      "1/f = 1/v + 1/u",
      "Derivation from Similar Triangles: For an object AB placed beyond C of a concave mirror forming image A'B' between C and F, triangle ABP is similar to triangle A'B'P. Thus: A'B'/AB = B'P/BP = -v/(-u) = v/u. Similarly, from triangles A'B'F and MPF (where MP is the vertical drop from mirror), A'B'/MP = A'B'/AB = B'F/FP = (v - f)/f. Equating both expressions: v/u = (v - f)/f = v/f - 1. Dividing throughout by v yields 1/u = 1/f - 1/v ⇒ 1/f = 1/v + 1/u.",
      "Crucial Calculation Protocol: In numerical problems, ALWAYS substitute known variables with their proper Cartesian signs (+/-), and leave the unknown variable sign-free. The equation will automatically yield the correct sign for the unknown."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.concaveObjectBetweenFandP,
      caption: "Mirror Formula Verification for Virtual Image Case (Object between F and P).",
      guide: "When u is smaller than f (e.g. u = -10 cm, f = -15 cm), 1/v = 1/f - 1/u = -1/15 + 1/10 = +1/30 ⇒ v = +30 cm (virtual, behind mirror)."
    },
    importantPoints: [
      "Mirror formula holds universally for both concave and convex mirrors under paraxial conditions.",
      "Useful derived forms: v = (u · f) / (u - f) and u = (v · f) / (v - f).",
      "Focal length in terms of object and image distance: f = (u · v) / (u + v)."
    ]
  },
  {
    heading: "9. Linear Magnification for Spherical Mirrors",
    paragraphs: [
      "Linear (or transverse) magnification m is defined as the ratio of the height of the image (h_i) to the height of the object (h_o):",
      "m = h_i / h_o = -v / u",
      "Physical Meaning of the Minus Sign in m = -v/u:",
      "• If m is NEGATIVE (m < 0): The image is REAL and INVERTED (since real images have v < 0 and u < 0, giving m = -(-v)/(-u) = -v/u < 0).",
      "• If m is POSITIVE (m > 0): The image is VIRTUAL and ERECT (since virtual images have v > 0 and u < 0, giving m = -(+v)/(-u) = +v/u > 0).",
      "• Magnitude |m| indicates scaling: |m| > 1 means enlarged, |m| = 1 means same size, |m| < 1 means diminished.",
      "Alternative High-Yield Formulas for NEET:",
      "m = f / (f - u)   and   m = (f - v) / f"
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.concaveObjectBetweenCandF,
      caption: "Negative Magnification corresponding to a Real, Inverted Image below the Principal Axis.",
      guide: "Never judge image size solely from the negative sign; m = -3 means the image is 3 times LARGER than the object and inverted."
    },
    importantPoints: [
      "NEET TRAP: A magnification of m = -0.5 represents a REAL, INVERTED, and DIMINISHED image.",
      "A magnification of m = +2.5 represents a VIRTUAL, ERECT, and ENLARGED image.",
      "For a plane mirror: m = +1 strictly (virtual, erect, identical size)."
    ]
  },
  {
    heading: "10. Refraction of Light & Snell's Law",
    paragraphs: [
      "When a ray of light transitions obliquely from one transparent optical medium into another, it undergoes an abrupt change in direction at the interface. This bending of light is called Refraction.",
      "Fundamental Cause of Refraction: Light travels at different phase velocities in different physical media due to the varying electromagnetic polarizability of atoms. When crossing the interface, the wavefront bends to maintain wave continuity.",
      "Laws of Refraction:",
      "Law 1: The incident ray, the refracted ray, and the normal to the interface at the point of incidence all lie in the same plane.",
      "Law 2 (Snell's Law): The ratio of the sine of the angle of incidence (i) to the sine of the angle of refraction (r) is a constant equal to the relative refractive index of the second medium with respect to the first:",
      "n₁ sin i = n₂ sin r   ⇒   sin i / sin r = n₂ / n₁ = ¹n₂",
      "Bending Behavior:",
      "• Denser to Rarer (n₁ > n₂): Light speeds up and bends AWAY from the normal (r > i).",
      "• Rarer to Denser (n₁ < n₂): Light slows down and bends TOWARDS the normal (r < i)."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.refractionPlaneSurface,
      caption: "Refraction of Light at a Plane Interface Obeying Snell's Law: n₁ sin i = n₂ sin r.",
      guide: "Notice how the ray bends towards the normal as it enters the optically denser lower medium."
    },
    importantPoints: [
      "If a ray strikes the interface normally (i = 0°), sin r = 0 ⇒ r = 0°. The ray passes undeviated, but its SPEED and WAVELENGTH still change!",
      "Refraction is purely a boundary effect; inside a homogeneous medium, light continues in straight lines."
    ]
  },
  {
    heading: "11. Refractive Index: Speed, Wavelength & Invariant Frequency",
    paragraphs: [
      "The absolute refractive index n of a medium is defined as the ratio of the speed of light in vacuum (c) to its phase speed in that medium (v):",
      "n = c / v",
      "Since light cannot travel faster than c in any material medium, n is always greater than or equal to 1 (n_vacuum = 1, n_air ≈ 1.0003, n_water ≈ 1.333 = 4/3, n_crown glass ≈ 1.5 = 3/2, n_diamond ≈ 2.42).",
      "CRITICAL NEET INVARIANCE PRINCIPLE: When light enters another medium:",
      "1. Frequency (ν) remains STRICTLY CONSTANT. Frequency is determined solely by the periodic oscillation of the original emitting source.",
      "2. Speed (v) DECREASES in optically denser media: v = c / n.",
      "3. Wavelength (λ) DECREASES proportionally: λ_medium = λ_vacuum / n.",
      "4. Wave relation: v = ν · λ_medium ⇒ (c/n) = ν · (λ_vacuum/n)."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.refractionPlaneSurface,
      caption: "Wavelength Shortening and Velocity Reduction during Refraction into a Denser Medium.",
      guide: "Remember: The color of light perceived by the human eye is fundamentally determined by its frequency ν."
    },
    importantPoints: [
      "Frequency ν does NOT change during refraction or reflection.",
      "Wavelength in medium: λ' = λ / n. If green light (λ = 540 nm) enters glass (n = 1.5), its wavelength inside glass becomes 540 / 1.5 = 360 nm (which is in the UV range in air, but it still appears green because its frequency is unchanged!).",
      "Relative refractive index: ¹n₂ = 1 / ²n₁."
    ]
  },
  {
    heading: "12. Refraction Through a Glass Slab & Lateral Displacement",
    paragraphs: [
      "When a ray of light passes through a rectangular glass slab with parallel opposing faces, it undergoes two successive refractions: first from air to glass at the top interface, and then from glass to air at the bottom interface.",
      "Parallel Emergence: At the first surface: sin i / sin r = n. At the second surface: sin r / sin e = 1/n ⇒ sin e = n sin r = sin i ⇒ ∠i = ∠e. Thus, the emergent ray is strictly parallel to the incident ray, meaning there is ZERO net angular deviation (δ = 0).",
      "Lateral Displacement (Shift d): Although parallel, the emergent ray is shifted sideways relative to the incident ray's original path. From right-angled trigonometry in the ray diagram:",
      "d = [ t · sin(i - r) ] / cos r",
      "where t is the thickness of the glass slab.",
      "For small angles of incidence (paraxial approximation where sin(i - r) ≈ i - r and cos r ≈ 1):",
      "d ≈ t · i [ 1 - 1/n ]"
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.glassSlabLateralShift,
      caption: "Lateral Shift d Produced by a Plane-Parallel Glass Slab of Thickness t.",
      guide: "Notice that lateral displacement increases with increasing slab thickness t, higher refractive index n, and larger incident angle i."
    },
    importantPoints: [
      "A parallel-faced slab produces ZERO angular deviation (i = e) but produces a finite lateral shift d.",
      "If a slab is placed in front of a converging lens focus, it shifts the focal point forward by Δx = t(1 - 1/n)."
    ]
  },
  {
    heading: "13. Apparent Depth & Apparent Shift in Optical Media",
    paragraphs: [
      "When an object immersed in an optically denser medium (such as a coin at the bottom of a water tank) is viewed from a rarer medium (such as air), light rays originating from the object bend away from the normal upon exiting the liquid surface.",
      "To an observer's eye, the backward extensions of these diverging refracted rays intersect at a virtual image point I located higher than the actual object O.",
      "Mathematical Relation for Near-Normal Viewing (Small angles i and r):",
      "From Snell's law: n · sin i = 1 · sin r ⇒ n · tan i ≈ tan r. In the geometric triangles: tan i = x / d_real and tan r = x / d_apparent.",
      "Therefore: Refractive Index n = Real Depth / Apparent Depth = h / h'",
      "Apparent Depth: h' = h / n",
      "Apparent Upward Shift: Δh = Real Depth - Apparent Depth = h - h/n = h [ 1 - 1/n ]",
      "Multiple Immiscible Liquid Layers: If a tank contains multiple liquids of thicknesses t₁, t₂, t₃... with indices n₁, n₂, n₃..., the total apparent depth is:",
      "h'_total = t₁/n₁ + t₂/n₂ + t₃/n₃ + ..."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.apparentDepth,
      caption: "Apparent Depth Phenomenon: A Submerged Object Appears Raised by Shift Δh = h(1 - 1/n).",
      guide: "When viewed from denser to rarer (e.g. fish looking at a bird in air), the bird appears FARTHER away: apparent height = n · real height."
    },
    importantPoints: [
      "A 12 cm deep pool of water (n = 4/3) appears to be only 12 / (4/3) = 9 cm deep (raised by 3 cm).",
      "If an object in rarer medium is viewed from denser medium: Apparent Distance = n × Real Distance."
    ]
  },
  {
    heading: "14. Total Internal Reflection (TIR) & Critical Angle",
    paragraphs: [
      "Total Internal Reflection is an optical phenomenon in which 100% of incident light energy is reflected back into the denser medium with ZERO transmission/refraction across the boundary.",
      "Two Mandatory Conditions for TIR to Occur:",
      "1. Light must travel from an optically DENSER medium toward an optically RARER medium (n₁ > n₂).",
      "2. The angle of incidence i in the denser medium must be strictly GREATER than the Critical Angle C (i > C).",
      "Definition of Critical Angle (C): The critical angle is that specific angle of incidence in the denser medium for which the corresponding angle of refraction in the rarer medium is exactly 90° (grazing emergence along the boundary).",
      "Mathematical Derivation using Snell's Law:",
      "n₁ sin C = n₂ sin(90°) = n₂ · 1",
      "sin C = n₂ / n₁",
      "For a medium of refractive index n surrounded by air (n₂ = 1):",
      "sin C = 1 / n   ⇒   C = sin⁻¹(1/n)",
      "Standard Critical Angles: Water (n = 1.33) → C ≈ 48.75°; Crown Glass (n = 1.50) → C ≈ 41.8° ≈ 42°; Dense Flint Glass (n = 1.65) → C ≈ 37.3°; Diamond (n = 2.42) → C ≈ 24.4°."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.totalInternalReflection,
      caption: "Step-by-Step Transition from Normal Refraction to Critical Grazing Emergence and Total Internal Reflection.",
      guide: "At i > C, the boundary behaves as a 100% perfect, lossless mirror with zero absorption."
    },
    importantPoints: [
      "TIR is 100% efficient — ordinary silvered mirrors absorb 4–10% of light energy, whereas TIR reflects 100%.",
      "Because n_violet > n_red, sin C_violet < sin C_red ⇒ C_violet < C_red. Violet undergoes TIR more readily than red!",
      "If white light is incident at an angle between C_violet and C_red, violet reflects internally while red refracts out."
    ]
  },
  {
    heading: "15. High-Yield Applications of Total Internal Reflection",
    paragraphs: [
      "1. Mirage (Desert Illusion & Looming): On hot sunny days, air layers near the ground become very hot and optically rarer (lower n), while upper air layers remain cooler and denser (higher n). Light from the sky or distant trees travelling downward bends progressively away from the normal until i > C at a hot ground layer, undergoing TIR upward. The observer's eye projects this light as a shimmering reflection, creating the illusion of a water puddle.",
      "2. Diamond Brilliance: Diamond has an exceptionally high refractive index (n ≈ 2.42), which makes its critical angle remarkably small (C ≈ 24.4°). Skilled diamond cutters shape the facets such that light entering the top face suffers multiple successive total internal reflections inside before exiting through specific top faces, producing dazzling sparkle.",
      "3. Totally Reflecting Prisms (Porro & Amici Prisms): Right-angled isosceles glass prisms (angles 45°-90°-45°, glass C ≈ 42°) are used to: a) Deviate rays by 90°, b) Deviate rays by 180° (inverting images without loss of intensity in binoculars), c) Invert images without changing the ray direction."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.totalInternalReflection,
      caption: "Physics of Totally Reflecting Prisms utilizing 45° Angle of Incidence (45° > Critical Angle 42°).",
      guide: "Prisms replace silvered mirrors in premium binoculars (like Porro prism binoculars) to prevent tarnishing and light loss."
    },
    importantPoints: [
      "Mirage in hot deserts is due to atmospheric TIR caused by a negative vertical temperature gradient.",
      "Loaming (cold regions) is superior mirage where light bends downward from warmer upper air over cold ice.",
      "A diamond submerged in a liquid of matching refractive index loses all its sparkle and becomes nearly invisible."
    ]
  },
  {
    heading: "16. Optical Fibres: Structure & High-Speed Transmission",
    paragraphs: [
      "An optical fibre is an ultra-thin, flexible dielectric waveguide fabricated from high-purity silica glass or fused quartz designed to transmit light signals over thousands of kilometers with negligible attenuation.",
      "Structural Architecture:",
      "1. Core: The central inner cylindrical glass fiber of higher refractive index (n₁ ≈ 1.52).",
      "2. Cladding: The concentric outer protective glass jacket of slightly lower refractive index (n₂ ≈ 1.48, where n₁ > n₂).",
      "3. Protective Buffer/Jacket: Polyurethane outer sheath that provides mechanical tensile strength and moisture insulation.",
      "Mechanism of Transmission: Light entering one end of the core at an angle within the acceptance cone strikes the core-cladding boundary at an angle of incidence θ > C. It undergoes repeated lossless total internal reflections along the zig-zag path and emerges at the opposite end with virtually 100% intensity.",
      "NEET High-Yield Applications: Optical telecommunications (terabit fiber internet), Medical Endoscopy (light pipe bundles illuminating and imaging internal organs like stomach and colon), Photonic temperature/pressure sensors."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.opticalFibre,
      caption: "Optical Fibre Architecture showing Light Guidance by Successive Total Internal Reflections at the Core-Cladding Boundary.",
      guide: "Condition for light guidance: n_core > n_cladding. If cladding is removed or damaged, light leaks out."
    },
    importantPoints: [
      "Numerical Aperture (NA) = √(n₁² - n₂²) measures the light gathering capacity of the optical fibre.",
      "Maximum angle of incidence in air for transmission (Acceptance Angle): sin θ_max = √(n₁² - n₂²).",
      "Endoscopes use an incoherent bundle to carry illumination light in and a coherent bundle to transmit the image out."
    ]
  },
  {
    heading: "17. Refraction at Single Spherical Curved Surfaces",
    paragraphs: [
      "When light refracts across a curved spherical interface separating two media of refractive indices n₁ and n₂ with radius of curvature R, the object distance u and image distance v are related by the fundamental curved interface equation:",
      "n₂ / v - n₁ / u = (n₂ - n₁) / R",
      "Sign Conventions & System Rules:",
      "• n₁ is the refractive index of the medium in which the incident light ORIGINATES.",
      "• n₂ is the refractive index of the medium into which the refracted light ENTERS.",
      "• R is the radius of curvature (+R for convex surface facing rarer medium; -R for concave surface facing rarer medium).",
      "• u is object distance (-u for real object); v is image distance (+v for real image formed in medium 2).",
      "Physical Interpretation: The term (n₂ - n₁)/R represents the refracting power of the single spherical surface. If n₂ > n₁ and R is positive (convex surface), the power is positive, meaning the interface converges the incident light rays."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.sphericalRefraction,
      caption: "Refraction at a Single Convex Spherical Interface from Medium n₁ into Medium n₂.",
      guide: "Master this equation: It is the foundational building block used to derive the Lens Maker's formula!"
    },
    importantPoints: [
      "Linear magnification for a single spherical surface: m = h_i / h_o = (n₁ · v) / (n₂ · u).",
      "Notice the presence of refractive indices in the magnification formula: m = (n₁ v) / (n₂ u), NOT simply v/u!",
      "If a small air bubble is trapped inside a glass sphere (n = 1.5), light travels from glass (n₁) to air (n₂), so n₁ = 1.5 and n₂ = 1.0."
    ]
  },
  {
    heading: "18. Lenses: Classifications & Cardinal Parameters",
    paragraphs: [
      "A lens is an optical transparent medium bounded by two surfaces, of which at least one is spherical.",
      "Types of Lenses:",
      "1. Convex Lens (Converging Lens): Thicker in the middle than at the edges. (Biconvex, Plano-convex, Concavo-convex). Converges a parallel beam to a real focus (f > 0).",
      "2. Concave Lens (Diverging Lens): Thinner in the middle than at the edges. (Biconcave, Plano-concave, Convexo-concave). Diverges a parallel beam as if originating from a virtual focus (f < 0).",
      "Key Parameters:",
      "• Optical Centre (O): Central point of the lens through which a ray passes without suffering any angular deviation.",
      "• Principal Focus (F₁ and F₂): Lenses have two foci. First Focus F₁ is the object point whose image is formed at infinity. Second Focus F₂ (Principal Focus) is the image point formed when incident rays are parallel to the principal axis. By convention, 'focal length of a lens' always refers to F₂."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.convexLensGeometry,
      caption: "Convex Lens Geometry showing Optical Centre O, Foci F₁ & F₂, and Positive Focal Length f.",
      guide: "A convex lens behaves as a converging lens only when surrounded by a medium of lower refractive index (e.g. glass lens in air)."
    },
    importantPoints: [
      "If a glass convex lens (n = 1.5) is immersed in water (n = 1.33), its focal length increases by ~4 times, but it remains converging.",
      "If a glass convex lens (n = 1.5) is immersed in carbon disulfide (n = 1.65 > 1.5), its nature REVERSES: it becomes a DIVERGING lens!"
    ]
  },
  {
    heading: "19. Principal Rays for Thin Lenses",
    paragraphs: [
      "To determine image position and size formed by a thin lens, we trace at least two of the three standard principal rays:",
      "1. Parallel Ray: A ray incident parallel to the principal axis refracts through the second principal focus F₂ (convex lens) or appears to diverge from the second focus F₂ (concave lens).",
      "2. Focal Ray: A ray passing through the first principal focus F₁ (convex lens) or directed toward F₁ (concave lens) emerges parallel to the principal axis after refraction.",
      "3. Optical Centre Ray: A ray passing directly through the Optical Centre O of a thin lens passes straight through with negligible lateral deviation and zero angular deviation."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.convexLensBetweenFand2F,
      caption: "Principal Ray Tracing for a Convex Lens with Object between F and 2F.",
      guide: "Always use the optical centre ray (straight line through O) and the parallel ray (bending through F₂) for quick sketches."
    },
    importantPoints: [
      "A thin lens approximation assumes the thickness of the lens is negligible compared to u, v, and R.",
      "Rays passing through O undergo tiny lateral shift inside the glass, but for a thin lens this shift is taken as zero."
    ]
  },
  {
    heading: "20. Image Formation by Convex Lens (All 6 Standard Cases)",
    paragraphs: [
      "Case 1: Object at Infinity (u = -∞) → Image at F₂ (v = +f), Real, Inverted, Point-sized, m << -1.",
      "Case 2: Object Beyond 2F₁ (-∞ < u < -2f) → Image between F₂ and 2F₂ (+f < v < +2f), Real, Inverted, Diminished, -1 < m < 0 (Camera lens mode).",
      "Case 3: Object Exactly at 2F₁ (u = -2f) → Image exactly at 2F₂ (v = +2f), Real, Inverted, Same size, m = -1 (Photocopier 1:1 mode).",
      "Case 4: Object Between F₁ and 2F₁ (-2f < u < -f) → Image beyond 2F₂ (v > +2f), Real, Inverted, Magnified, m < -1 (Cinema projector mode).",
      "Case 5: Object Exactly at F₁ (u = -f) → Image at Infinity (v = +∞), Real, Inverted, Highly Magnified (Searchlight collimator).",
      "Case 6: Object Between F₁ and Optical Centre O (-f < u < 0) → Image on the same side as object (v < 0), VIRTUAL, ERECT, MAGNIFIED, m > +1 (Simple microscope / Reading magnifier mode)."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.convexLensBetweenFandO,
      caption: "Convex Lens Case 6: Object inside Focal Length forms a Virtual, Erect, and Magnified Image.",
      guide: "This is the fundamental operating principle of a simple magnifying glass."
    },
    importantPoints: [
      "A convex lens forms a virtual image ONLY when the object is placed closer than its focal length (u < f).",
      "Minimum distance between a real object and its real image formed by a convex lens is 4f (occurring when u = 2f and v = 2f)."
    ]
  },
  {
    heading: "21. Image Formation by Concave Lens",
    paragraphs: [
      "A concave lens is a diverging lens. For all real objects placed at any location in front of the lens:",
      "• Case 1: Object at Infinity (u = -∞) → Image is formed at Virtual Focus F₁ on the same side (v = -f), Virtual, Erect, Point-sized (m → 0).",
      "• Case 2: Object at Finite Distance in front of lens (-∞ < u < 0) → Image is formed between Optical Centre O and Focus F₁ (0 > v > -f), VIRTUAL, ERECT, DIMINISHED, with magnification 0 < m < +1.",
      "Everyday Application: Concave lenses are prescribed in spectacles for correcting Myopia (short-sightedness) to diverge incoming rays so that the eye's crystalline lens can focus them properly onto the retina."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.concaveLensGeometry,
      caption: "Concave Lens: Forms Always Virtual, Erect, Diminished Images on the Same Side as the Object.",
      guide: "Just like a convex mirror, a concave lens NEVER forms a real or magnified image for any real object position."
    },
    importantPoints: [
      "For a concave lens with a real object: v is ALWAYS negative, m is ALWAYS positive and strictly between 0 and 1 (0 < m < 1).",
      "Focal length f of a concave lens is always negative (f < 0)."
    ]
  },
  {
    heading: "22. The Thin Lens Formula & Calculation Rules",
    paragraphs: [
      "The thin lens formula relates the object distance u, image distance v, and focal length f of a lens:",
      "1/f = 1/v - 1/u",
      "Comparison with Mirror Formula: Notice the minus sign! In mirrors: 1/f = 1/v + 1/u. In lenses: 1/f = 1/v - 1/u.",
      "Useful Rearranged Forms for Rapid NEET Problem-Solving:",
      "v = (u · f) / (u + f)   and   u = (v · f) / (f - v)",
      "Standard Sign Substitution Rules:",
      "• Convex lens: f is POSITIVE (+f).",
      "• Concave lens: f is NEGATIVE (-f).",
      "• Real object: u is NEGATIVE (-u).",
      "• Real image (formed on the other side): v is POSITIVE (+v).",
      "• Virtual image (formed on the same side as object): v is NEGATIVE (-v)."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.convexLensBetweenFand2F,
      caption: "Application of Lens Formula for Real Image Formation: 1/f = 1/v - 1/u.",
      guide: "When calculating in NEET, substitute with signs. E.g. u = -30 cm, f = +20 cm ⇒ 1/v = 1/20 + 1/(-30) = 1/60 ⇒ v = +60 cm."
    },
    importantPoints: [
      "Never assign a sign to the unknown quantity; solve algebraically and the resultant sign reveals its nature.",
      "Displacement Method: If a lens is moved between a fixed screen and object separated by distance D > 4f, the two positions give focal length f = (D² - d²) / (4D)."
    ]
  },
  {
    heading: "23. Linear Magnification of Lenses",
    paragraphs: [
      "Linear magnification m produced by a lens is the ratio of image height (h_i) to object height (h_o):",
      "m = h_i / h_o = +v / u",
      "Mirror vs Lens Magnification Contrast:",
      "• For Mirrors: m = -v/u (has a negative sign).",
      "• For Lenses: m = +v/u (has a positive sign).",
      "Interpretation of Signs for Lenses:",
      "• If m is POSITIVE (m > 0): Image is VIRTUAL and ERECT (since both v and u are negative, v/u > 0).",
      "• If m is NEGATIVE (m < 0): Image is REAL and INVERTED (since v is positive and u is negative, v/u < 0).",
      "Alternative High-Yield Formulas in terms of f:",
      "m = f / (f + u)   and   m = (f - v) / f"
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.convexLensBetweenFandO,
      caption: "Positive Magnification (m > +1) for Virtual, Erect Image in Magnifying Glass Mode.",
      guide: "Notice: In lenses, m = +v/u. In mirrors, m = -v/u. Do not mix these two up in the exam!"
    },
    importantPoints: [
      "m = -1 means image is REAL, INVERTED, and EQUAL in size to the object (object at 2F).",
      "For a convex lens, if m = -2, the image is real and magnified; if m = +2, the image is virtual and magnified.",
      "For a concave lens, m is always positive and less than 1 (0 < m < +1)."
    ]
  },
  {
    heading: "24. Power of a Lens & Dioptre Units",
    paragraphs: [
      "The power P of a lens is a quantitative measure of its degree of convergence or divergence introduced in the light path. Mathematically, it is defined as the reciprocal of its focal length expressed strictly in metres:",
      "P = 1 / f(in metres) = 100 / f(in cm)",
      "SI Unit of Power: Dioptre (D), where 1 D = 1 m⁻¹.",
      "1 Dioptre is the power of a lens having a focal length of exactly 1 metre.",
      "Signs and Nature:",
      "• Convex (Converging) Lens: f > 0 ⇒ Power P is POSITIVE (+D). (e.g., f = +50 cm = +0.5 m ⇒ P = +2.0 D).",
      "• Concave (Diverging) Lens: f < 0 ⇒ Power P is NEGATIVE (-D). (e.g., f = -20 cm = -0.2 m ⇒ P = -5.0 D).",
      "CRITICAL NEET TRAP: Always convert the focal length from centimeters to metres BEFORE taking the reciprocal!"
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.convexLensGeometry,
      caption: "Lens Power: P = 1/f(m). Shorter focal length produces stronger ray bending and higher power.",
      guide: "A lens of focal length 10 cm has P = +10 D (strong), while f = 100 cm has P = +1 D (weak)."
    },
    importantPoints: [
      "Optometrist prescription '+2.5 D' means a CONVEX lens with focal length f = 100 / 2.5 = 40 cm (for Hypermetropia).",
      "Optometrist prescription '-1.5 D' means a CONCAVE lens with focal length f = -100 / 1.5 = -66.7 cm (for Myopia)."
    ]
  },
  {
    heading: "25. Combination of Thin Lenses in Contact",
    paragraphs: [
      "When two or more thin lenses of focal lengths f₁, f₂, f₃... are placed in coaxial contact with each other, the effective equivalent focal length F of the combination is given by:",
      "1/F = 1/f₁ + 1/f₂ + 1/f₃ + ...",
      "In terms of Lens Power:",
      "P_total = P₁ + P₂ + P₃ + ...",
      "Net Linear Magnification: The total magnification produced by the optical combination is the multiplicative product of the individual magnifications:",
      "m_total = m₁ × m₂ × m₃ × ...",
      "Separated Lenses (Distance d apart in air): If two lenses of focal lengths f₁ and f₂ are separated by distance d along their common principal axis:",
      "1/F = 1/f₁ + 1/f₂ - d / (f₁ · f₂)   ⇒   P = P₁ + P₂ - d · P₁ · P₂"
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.convexLensGeometry,
      caption: "Combination of Coaxial Thin Lenses: Powers Add Algebraically (P = P₁ + P₂).",
      guide: "If a convex lens of +4 D is combined in contact with a concave lens of -2 D, net power = +2 D (f = +50 cm, converging)."
    },
    importantPoints: [
      "If two identical convex lenses of focal length f are placed in contact, equivalent focal length F = f/2 and net power doubles (2P).",
      "If a convex lens (+f) and concave lens (-f) of identical focal length are placed in contact, 1/F = 1/f - 1/f = 0 ⇒ F = ∞, P = 0 (behaves as a plane glass plate).",
      "Cutting a lens vertically into two symmetric halves: each half has focal length 2f and power P/2."
    ]
  },
  {
    heading: "26. Lens Maker's Formula & Medium Dependence",
    paragraphs: [
      "The Lens Maker's formula allows optical engineers to design a lens with a specific focal length f by selecting the glass refractive index μ and grinding the surfaces to radii of curvature R₁ and R₂:",
      "1/f = (μ_lens / μ_medium - 1) [ 1/R₁ - 1/R₂ ]",
      "For a lens made of glass (refractive index μ) placed in air (μ_medium = 1):",
      "1/f = (μ - 1) [ 1/R₁ - 1/R₂ ]",
      "Sign Conventions for Radii R₁ and R₂:",
      "• Equibiconvex Lens: Surface 1 is convex (+R₁ = +R), Surface 2 is concave (-R₂ = -R) ⇒ 1/f = (μ - 1)[ 1/R - (-1/R) ] = 2(μ - 1)/R.",
      "• Equibiconcave Lens: Surface 1 is concave (-R₁ = -R), Surface 2 is convex (+R₂ = +R) ⇒ 1/f = (μ - 1)[ -1/R - 1/R ] = -2(μ - 1)/R.",
      "• Plano-convex Lens: R₁ = +R, R₂ = ∞ ⇒ 1/f = (μ - 1)/R.",
      "Focal Length in a Liquid Medium:",
      "f_liquid / f_air = [ (μ_g - 1) ] / [ (μ_g / μ_l - 1) ]",
      "For glass (μ_g = 1.5) in water (μ_l = 4/3): f_water = 4 × f_air!"
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.lensMakerGeometry,
      caption: "Lens Maker Geometry showing Radii of Curvature +R₁ (First Surface) and -R₂ (Second Surface).",
      guide: "Notice how the center of curvature C₁ for the left convex surface lies to the right (+R₁), while C₂ for the right surface lies to the left (-R₂)."
    },
    importantPoints: [
      "For standard glass (μ = 1.5) equibiconvex lens in air: 1/f = (1.5 - 1)(2/R) = 1/R ⇒ f = R.",
      "If a lens is immersed in a liquid having the exact same refractive index (μ_l = μ_g), 1/f = 0 ⇒ f = ∞ (lens becomes invisible).",
      "If a lens is immersed in a denser liquid (μ_l > μ_g), the sign of f flips (convex lens becomes diverging)."
    ]
  },
  {
    heading: "27. Refraction Through a Prism & Geometric Relations",
    paragraphs: [
      "A prism is an optical element bounded by two non-parallel plane refracting surfaces inclined at a dihedral angle called the Angle of Prism (or refracting angle, A).",
      "Ray Path Geometry:",
      "An incident ray strikes the first face at angle of incidence i, refracts into the prism at angle r₁, traverses through the glass, strikes the second face at internal angle r₂, and emerges into air at angle of emergence e.",
      "Two Fundamental Governing Equations for All Prisms:",
      "1. Prism Angle Relation: In quadrilateral AQNR, the sum of opposite angles is 180°. In triangle QNR: r₁ + r₂ + ∠QNR = 180°. Therefore:",
      "A = r₁ + r₂",
      "2. Total Angle of Deviation (δ): The net deviation suffered by the ray is the sum of deviations at both faces: δ = (i - r₁) + (e - r₂) = (i + e) - (r₁ + r₂):",
      "δ = i + e - A   ⇒   i + e = A + δ"
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.prismGeometry,
      caption: "Geometry of Light Refraction Through a Triangular Prism showing Angles A, i, r₁, r₂, e, and Deviation δ.",
      guide: "Angle of deviation δ is the external angle between the forward extension of the incident ray and the backward extension of the emergent ray."
    },
    importantPoints: [
      "The equation i + e = A + δ holds universally for any triangular prism at all angles of incidence.",
      "Thin Prism Approximation (A < 10°): For small angles, sin i ≈ i, sin r₁ ≈ r₁, giving δ = (μ - 1) A."
    ]
  },
  {
    heading: "28. Minimum Deviation & Prism Formula",
    paragraphs: [
      "When the angle of incidence i is varied from 0° upwards, the angle of deviation δ initially decreases, reaches a unique absolute minimum value called the Angle of Minimum Deviation (δ_m), and thereafter increases.",
      "Symmetry Conditions at Minimum Deviation (δ = δ_m):",
      "1. Angle of incidence equals angle of emergence: i = e.",
      "2. Angle of refraction at first face equals internal angle at second face: r₁ = r₂ = r.",
      "3. The refracted ray inside the prism travels strictly parallel to the base of an equilateral/isosceles prism.",
      "Derivation of the Prism Formula:",
      "From A = r₁ + r₂ = 2r ⇒ r = A / 2",
      "From δ_m = i + e - A = 2i - A ⇒ i = (A + δ_m) / 2",
      "Applying Snell's law at the first interface: μ = sin i / sin r₁:",
      "μ = sin [ (A + δ_m) / 2 ] / sin (A / 2)",
      "This standard formula is widely used in spectrometers to determine the refractive index of unknown transparent solids with extreme experimental precision."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.minimumDeviation,
      caption: "Condition for Minimum Deviation: Symmetrical Ray Path (i = e, r₁ = r₂ = A/2) Traveling Parallel to Prism Base.",
      guide: "At minimum deviation, there is only one unique angle of incidence; for any other deviation δ > δ_m, two different angles of incidence produce the same deviation."
    },
    importantPoints: [
      "At minimum deviation: r = A/2. If an equilateral prism (A = 60°) is at minimum deviation, r = 30° strictly.",
      "For a thin prism: δ_m = (μ - 1) A.",
      "If a prism is immersed in water, δ_m decreases because the relative refractive index decreases."
    ]
  },
  {
    heading: "29. Dispersion of White Light & VIBGYOR Spectrum",
    paragraphs: [
      "Dispersion is the phenomenon of splitting of composite white light into its constituent spectral colors when passing through a refracting medium like a glass prism.",
      "Physical Origin (Cauchy's Dispersion Equation):",
      "The refractive index of any material medium depends inversely on the wavelength λ of the transmitted light according to Cauchy's empirical formula:",
      "μ(λ) = A + B / λ² + C / λ⁴",
      "Since in the visible spectrum: λ_violet (≈ 400 nm) < λ_red (≈ 700 nm):",
      "μ_violet > μ_indigo > μ_blue > μ_green > μ_yellow > μ_orange > μ_red",
      "Because the deviation for a thin prism is δ = (μ - 1)A:",
      "δ_violet > δ_red",
      "Violet light has the shortest wavelength, experiences the highest refractive index, slows down the most in glass, and therefore suffers the MAXIMUM angular deviation. Red light has the longest wavelength, lowest refractive index, and suffers the LEAST angular deviation, separating the beam into the continuous VIBGYOR spectrum."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.dispersionPrism,
      caption: "Dispersion of White Light by a Glass Prism: Differential Deviation produces the VIBGYOR Spectrum.",
      guide: "Red light bends the least (top of exiting spectrum); Violet light bends the most (bottom of exiting spectrum)."
    },
    importantPoints: [
      "In vacuum, all wavelengths travel at the exact same speed c = 3×10⁸ m/s (zero dispersion in vacuum).",
      "Dispersion occurs only in material media where wave velocity v depends on wavelength λ.",
      "Yellow light is taken as the mean (representative) color of the visible spectrum: μ_yellow ≈ (μ_violet + μ_red)/2."
    ]
  },
  {
    heading: "30. Angular Dispersion & Dispersive Power",
    paragraphs: [
      "1. Angular Dispersion (θ): The angular difference in deviation between the extreme rays (violet and red) exiting the prism:",
      "θ = δ_violet - δ_red = (μ_v - 1)A - (μ_r - 1)A = (μ_v - μ_r) A",
      "2. Mean Deviation (δ_y): The deviation suffered by the mean yellow ray: δ_y = (μ_y - 1) A.",
      "3. Dispersive Power (ω): The ratio of angular dispersion to mean deviation. It measures the intrinsic ability of a prism material to separate colors independent of the prism angle A:",
      "ω = θ / δ_y = (μ_v - μ_r) / (μ_y - 1)",
      "Achromatic Combination of Prisms (Dispersion without Average Deviation):",
      "To produce dispersion without net deviation, two prisms of different glasses (crown and flint) are combined with opposing angles such that net deviation δ_net = δ₁ + δ₂ = 0 ⇒ (μ_y - 1)A + (μ'_y - 1)A' = 0.",
      "Direct Vision Prism (Deviation without Dispersion): Net dispersion θ_net = 0 ⇒ (μ_v - μ_r)A + (μ'_v - μ'_r)A' = 0."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.dispersionPrism,
      caption: "Angular Dispersion θ = (μ_v - μ_r)A between Violet and Red Emergent Rays.",
      guide: "Notice that Dispersive Power ω depends solely on the material of the prism (refractive indices), not on the prism angle A."
    },
    importantPoints: [
      "Dispersive power ω is dimensionless and unitless.",
      "Flint glass has higher refractive index and higher dispersive power than Crown glass.",
      "A single prism cannot produce deviation without dispersion; an achromatic combination of at least two different materials is mandatory."
    ]
  },
  {
    heading: "31. Atmospheric Refraction Phenomena",
    paragraphs: [
      "The Earth's atmosphere is not uniform: optical density and refractive index decrease continuously with altitude as air becomes thinner.",
      "Key Phenomena Caused by Atmospheric Refraction:",
      "1. Apparent Elevation of Stars: Light from a star entering Earth's atmosphere bends continuously toward the normal as it encounters progressively denser air layers. An observer's eye traces the ray backwards along the tangent at arrival, making stars appear slightly higher in the sky than their true astronomical positions.",
      "2. Twinkling of Stars: Due to atmospheric convection currents, wind turbulence, and temperature fluctuations, the local refractive index along the line of sight fluctuates dynamically. Because stars are point sources subtending negligible visual angles, the intensity reaching the eye fluctuates rapidly (twinkling). Planets do not twinkle because they are extended disc sources subtending larger visual angles, averaging out fluctuations.",
      "3. Advanced Sunrise & Delayed Sunset: Light rays from the Sun when it is just below the horizon bend downward toward the Earth's surface by ~0.5° (~30 arcminutes) due to atmospheric refraction. As a result, the Sun becomes visible ~2 minutes BEFORE actual geometric sunrise and remains visible ~2 minutes AFTER actual sunset, lengthening daylight duration by ~4 minutes every day."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.apparentDepth,
      caption: "Atmospheric Refraction: Continuous Bending in Density Gradients Elevates Celestial Objects.",
      guide: "The apparent flattening (oval shape) of the Sun at sunrise and sunset is also caused by differential atmospheric refraction between the top and bottom limbs."
    },
    importantPoints: [
      "Advanced sunrise (~2 min) + Delayed sunset (~2 min) increases apparent day length by ~4 minutes.",
      "The apparent shift in the sun's position at the horizon is approximately 0.5° (the sun's angular diameter).",
      "Planets do not twinkle because they act as extended sources composed of billions of point emitters that cancel intensity fluctuations."
    ]
  },
  {
    heading: "32. Optical Instruments: Visual Angle & Magnifying Power",
    paragraphs: [
      "Why do we need optical instruments? The perceived size of an object is determined not by its physical height alone, but by the Visual Angle (θ) subtended by the object at the observer's eye.",
      "Near Point of Human Eye (D): The minimum distance at which an object can be positioned to form a distinct, focused image on the retina without ocular muscle strain is called the Least Distance of Distinct Vision (D ≈ 25 cm for a normal healthy adult eye).",
      "Definition of Magnifying Power (Angular Magnification, M):",
      "Magnifying Power is defined as the ratio of the visual angle subtended at the eye by the final image formed by the instrument (β) to the visual angle subtended by the unaided object placed at the near point D (α):",
      "M = β / α",
      "Contrast between Linear Magnification (m) and Angular Magnification (M):",
      "• Linear magnification m = h_i / h_o is the ratio of physical image size to object size.",
      "• Magnifying power M = β / α is the ratio of visual angles subtended at the eye, which governs how large the object actually appears to the brain."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.simpleMicroscopeRay,
      caption: "Visual Angle Concept: Subtended Angle β with Optical Aid vs Angle α with Unaided Eye at D = 25 cm.",
      guide: "Optical instruments enlarge the visual angle β so that fine structural details can be resolved by the retina."
    },
    importantPoints: [
      "For a normal adult human eye: Near point D = 25 cm, Far point = Infinity (∞).",
      "Magnifying power M is a dimensionless ratio; a magnification of '10X' means the image subtends 10 times the visual angle."
    ]
  },
  {
    heading: "33. Simple Microscope (Magnifying Glass)",
    paragraphs: [
      "A simple microscope consists of a single converging (convex) lens of short focal length f held close to the eye.",
      "Working Principle: The tiny object AB is placed within the focal length of the lens (between F and Optical Centre O). The lens forms a virtual, erect, and magnified image A'B' on the same side as the object.",
      "Magnifying Power Formulas for NEET:",
      "Case 1: Final Image at Near Point (D = 25 cm) — Maximum Magnification:",
      "When the final image is formed at the least distance of distinct vision (v = -D):",
      "M = 1 + D / f",
      "(The eye muscles are under maximum accommodation / strained condition).",
      "Case 2: Final Image at Infinity (Normal Adjustment) — Relaxed Eye:",
      "When the object is placed exactly at the focus (u = -f), the emergent rays are parallel and the image is formed at infinity (v = -∞):",
      "M = D / f",
      "(The ciliary eye muscles are completely relaxed with zero strain).",
      "Example: For a lens of f = 5 cm, M_max = 1 + 25/5 = 6X; M_normal = 25/5 = 5X."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.simpleMicroscopeRay,
      caption: "Ray Diagram of Simple Microscope forming a Virtual, Erect, Magnified Image at Distance D.",
      guide: "To achieve high magnification with a simple microscope, focal length f must be as small as possible."
    },
    importantPoints: [
      "M_near_point = 1 + D/f is strictly greater than M_normal = D/f by exactly 1.",
      "A simple microscope cannot provide magnifications greater than ~10X due to severe chromatic and spherical aberrations in single thick lenses."
    ]
  },
  {
    heading: "34. Astronomical Telescope: Structure & Ray Optics",
    paragraphs: [
      "An astronomical refracting telescope is an optical instrument used to view angularly small, distant celestial objects (planets, stars, lunar craters).",
      "Structural Architecture: Consists of two coaxial convex lenses mounted in a cylindrical tube:",
      "1. Objective Lens: The lens facing the distant object. It has a LARGE focal length (f_o) and a LARGE aperture to gather maximum light energy from faint stars and achieve high resolving power.",
      "2. Eyepiece Lens: The lens placed near the observer's eye. It has a SMALL focal length (f_e) and a SMALL aperture to act as a powerful magnifier for the intermediate image.",
      "Working Mechanism:",
      "Parallel light rays from the distant celestial object enter the objective lens and are brought to focus in the focal plane of the objective, forming a real, inverted, and diminished intermediate image A'B'. The eyepiece is positioned so that A'B' falls inside its focal point or at its focus, projecting an enlarged final image to the observer's eye."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.astronomicalTelescopeRay,
      caption: "Ray Diagram of Astronomical Refracting Telescope in Normal Adjustment (Final Image at Infinity).",
      guide: "Notice that the objective has large focal length f_o and wide diameter; the eyepiece has short focal length f_e."
    },
    importantPoints: [
      "In a telescope: f_objective >> f_eyepiece (Objective is large; Eyepiece is small).",
      "In a compound microscope: f_eyepiece > f_objective (Objective is extremely small; Eyepiece is larger).",
      "The intermediate image formed by the telescope objective is REAL, INVERTED, and DIMINISHED."
    ]
  },
  {
    heading: "35. Telescope in Normal Adjustment & Tube Length",
    paragraphs: [
      "Normal adjustment occurs when the final image is formed at infinity (v = ∞), allowing the observer to view the celestial body with a completely relaxed eye.",
      "Condition for Normal Adjustment:",
      "The intermediate real image A'B' formed at the focal point of the objective (F_o) must coincide exactly with the focal point of the eyepiece (F_e). That is, the distance between the two lenses equals the sum of their focal lengths.",
      "Formulas for Astronomical Telescope in Normal Adjustment:",
      "1. Magnifying Power (Angular Magnification):",
      "M = f_o / f_e   (or M = -f_o / f_e accounting for inverted image)",
      "2. Length of the Telescope Tube (Separation between lenses):",
      "L = f_o + f_e",
      "Telescope with Final Image at Near Point (D = 25 cm):",
      "M = (f_o / f_e) [ 1 + f_e / D ]   and   L = f_o + u_e = f_o + (f_e · D)/(f_e + D)",
      "Why Reflecting Telescopes (Cassegrain) are Superior to Refracting Telescopes:",
      "1. No Chromatic Aberration (mirrors reflect all wavelengths equally).",
      "2. High Resolving Power & Light Gathering (mirrors can be constructed with diameters > 10 metres, whereas large glass lenses sag under gravity).",
      "3. Mechanical Support (mirrors are supported across their entire rear back, whereas lenses can only be supported at the rims)."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.astronomicalTelescopeRay,
      caption: "Astronomical Telescope in Normal Adjustment showing Tube Length L = f_o + f_e and Magnification M = f_o / f_e.",
      guide: "To obtain high magnifying power in a telescope, make f_o as large as possible and f_e as small as possible."
    },
    importantPoints: [
      "In normal adjustment: Magnification M = f_o / f_e; Tube length L = f_o + f_e.",
      "The final image in an astronomical telescope is INVERTED (which is acceptable for spherical stars and planets). Terrestrial telescopes add an erecting lens to make it erect."
    ]
  },
  {
    heading: "36. Comprehensive Comparison: Microscope vs Telescope",
    paragraphs: [
      "High-Yield Comparative Matrix for NEET UG Examination:",
      "• Primary Objective: Microscope magnifies tiny nearby objects; Telescope magnifies distant objects by enlarging visual angle.",
      "• Objective Lens: Microscope has very small focal length (f_o ~ mm) and small aperture; Telescope has very large focal length (f_o ~ metres) and large aperture.",
      "• Eyepiece Lens: Microscope has larger focal length than its objective (f_e > f_o); Telescope has much smaller focal length than its objective (f_e << f_o).",
      "• Object Distance: Microscope has object placed just beyond F_o (u_o > f_o); Telescope has object at infinity (u_o = ∞).",
      "• Intermediate Image: Microscope forms a magnified real inverted image beyond 2F; Telescope forms a diminished real inverted image at F_o.",
      "• Normal Adjustment Magnification: Compound Microscope M = (L/f_o) · (D/f_e); Telescope M = f_o / f_e.",
      "• Tube Length in Normal Adjustment: Microscope L ≈ v_o + f_e; Telescope L = f_o + f_e."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.astronomicalTelescopeRay,
      caption: "Structural Differences between Microscope (Short f_o) and Telescope (Long f_o) Optics.",
      guide: "Review this comparative table before every test: Questions testing f_o vs f_e relationships appear frequently in NEET."
    },
    importantPoints: [
      "Microscope: f_o < f_e (Objective is smaller than Eyepiece).",
      "Telescope: f_o > f_e (Objective is much larger than Eyepiece).",
      "If a telescope is inverted (looked through the objective), objects appear minified, NOT magnified."
    ]
  },
  {
    heading: "37. High-Yield Master Conceptual Comparison Tables",
    paragraphs: [
      "Table 1: Concave Mirror vs Convex Mirror",
      "• Focus: Concave has Real Focus (f < 0 in Cartesian); Convex has Virtual Focus (f > 0).",
      "• Image Types: Concave forms Real (5 cases) and Virtual (1 case); Convex forms ONLY Virtual, Erect, Diminished images.",
      "• Applications: Concave used in shaving/dental mirrors, searchlights; Convex used in automobile rear-view mirrors.",
      "",
      "Table 2: Convex Lens vs Concave Lens",
      "• Power & Focus: Convex has P > 0, f > 0 (Converging); Concave has P < 0, f < 0 (Diverging).",
      "• Real Object Images: Convex forms Real (inverted) and Virtual (erect, magnified); Concave forms ONLY Virtual, Erect, Diminished images.",
      "• Defect Correction: Convex corrects Hypermetropia; Concave corrects Myopia.",
      "",
      "Table 3: Real Image vs Virtual Image",
      "• Ray Intersection: Real is formed by actual ray intersection; Virtual is formed by backward extension of diverging rays.",
      "• Screen Reception: Real CAN be cast on a screen; Virtual CANNOT be cast on a screen (can only be photographed).",
      "• Inversion: Real images are always INVERTED relative to object; Virtual images are always ERECT.",
      "",
      "Table 4: Reflection vs Total Internal Reflection",
      "• Medium: Reflection occurs at any interface back into same medium; TIR requires light travelling from Denser to Rarer at i > C.",
      "• Energy Loss: Ordinary reflection loses 4-10% energy via absorption; TIR reflects 100% of incident light energy without loss."
    ],
    visual: {
      type: "svg",
      svgContent: rayOpticsDiagrams.lawsOfReflection,
      caption: "Master Summary of Optical System Characteristics for NEET UG 2026.",
      guide: "Use these consolidated comparison points for quick revision before exams."
    },
    importantPoints: [
      "Real images are always inverted; Virtual images are always erect.",
      "TIR is the only 100% lossless reflection process in nature."
    ]
  }
];
