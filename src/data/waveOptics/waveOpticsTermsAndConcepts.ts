import { ImportantTerm } from '../../types/neet';
import { WAVE_OPTICS_SVGS } from './waveOpticsDiagrams';

export const WAVE_OPTICS_TERMS: ImportantTerm[] = [
  {
    term: "Wavefront",
    definition: "The continuous locus of all points/particles in a medium vibrating in the same phase. For a point source it is spherical; for a linear slit it is cylindrical; at infinity it is plane.",
    neetNote: "Rays are ALWAYS perpendicular (normal) to wavefronts at every point. The speed of a wavefront is the wave speed."
  },
  {
    term: "Ray of Light",
    definition: "An imaginary arrow perpendicular to the wavefront pointing in the direction of wave energy propagation.",
    neetNote: "Ray optics is the limiting case of wave optics when wavelength λ → 0 (apertures much larger than λ)."
  },
  {
    term: "Huygens' Principle",
    definition: "Every point on a primary wavefront acts as a source of secondary spherical wavelets traveling at the wave speed in that medium. The forward envelope (common tangent) gives the new wavefront.",
    neetNote: "Explains both reflection (i = r) and refraction (Snell's law). Frequency f remains constant across media; only speed and wavelength change."
  },
  {
    term: "Coherent Sources",
    definition: "Two light sources that emit continuous light waves having exactly the same frequency (or wavelength) and a constant (time-independent) phase difference.",
    neetNote: "NEET Trap: Equal intensity is NOT required for coherence. Two independent incandescent bulbs or laser pointers are NEVER coherent because atomic de-excitation occurs randomly every ~10⁻⁸ s."
  },
  {
    term: "Optical Path Difference (Δ)",
    definition: "The difference in physical path lengths traversed by two waves multiplied by the refractive index of the medium: Δ = μ · d.",
    neetNote: "Linked to phase difference via φ = (2π / λ) · Δ. For air (μ = 1), Δ = S₂P - S₁P."
  },
  {
    term: "Constructive Interference (Bright Fringe)",
    definition: "Superposition of two in-phase waves (crest meets crest, trough meets trough) leading to maximum resultant intensity.",
    neetNote: "Conditions: Path difference Δ = nλ; Phase difference φ = 2nπ (where n = 0, 1, 2, ...). Resultant intensity I_max = (√I₁ + √I₂)² = 4I₀ when I₁ = I₂ = I₀."
  },
  {
    term: "Destructive Interference (Dark Fringe)",
    definition: "Superposition of two out-of-phase waves (crest meets trough) causing mutual cancellation and minimum intensity.",
    neetNote: "Conditions: Path difference Δ = (2n - 1)λ/2 or (2n + 1)λ/2; Phase difference φ = (2n + 1)π. When I₁ = I₂ = I₀, I_min = 0 (perfect darkness)."
  },
  {
    term: "Fringe Width (β)",
    definition: "The linear separation between any two successive bright fringes or any two successive dark fringes on the screen in YDSE.",
    neetNote: "Formula: β = λD / d. In a medium of refractive index μ, β_med = β_air / μ. Note that β is independent of fringe order n in standard YDSE."
  },
  {
    term: "Diffraction of Light",
    definition: "The bending of light waves around the sharp edges of an obstacle or aperture and their spreading into the geometrical shadow region.",
    neetNote: "Significant only when the size of the aperture/obstacle 'a' is comparable to the wavelength 'λ' (a ~ λ). Because visible light has tiny λ (~500 nm), light diffraction requires microscopic slits."
  },
  {
    term: "Single-Slit Minima & Central Maximum",
    definition: "Condition where the path difference between wavelets from the two edges of a slit of width 'a' equals an integral multiple of λ.",
    neetNote: "Minima condition: a sin θ = nλ (n = 1, 2, 3...). Central maximum angular width = 2λ / a; Linear width = 2λD / a. The central maximum is TWICE as wide as secondary maxima!"
  },
  {
    term: "Plane-Polarised Light",
    definition: "Light in which the oscillations of the electric field vector E are strictly confined to a single plane perpendicular to the propagation direction.",
    neetNote: "Proves conclusively that light is a TRANSVERSE wave. Longitudinal waves (like sound in air) can NEVER be polarised."
  },
  {
    term: "Malus' Law",
    definition: "When completely plane-polarised light of intensity I₀ passes through an analyser whose transmission axis makes an angle θ with the polariser axis, transmitted intensity is I = I₀ cos² θ.",
    neetNote: "If unpolarised light of intensity I_unpol hits an ideal polaroid, transmitted intensity is ALWAYS exactly ½ I_unpol, irrespective of orientation!"
  },
  {
    term: "Brewster's Law & Polarising Angle (i_B)",
    definition: "When unpolarised light is incident at a specific angle i_B such that the reflected and refracted rays are mutually perpendicular (90°), the reflected ray is 100% plane-polarised.",
    neetNote: "Formula: μ = tan i_B. Reflected ray vibrations are strictly parallel to the reflecting surface (perpendicular to the plane of incidence)."
  }
];

export const WAVE_OPTICS_CONCEPT_SECTIONS = [
  {
    heading: "1. The Wave Nature of Light & Huygens' Wavefront Model",
    paragraphs: [
      "Why Ray Optics Fails: Ray optics assumes that light travels strictly in rectilinear straight lines. While this approximation works brilliantly for macroscopic mirrors and lenses, it fails completely when light encounters microscopic apertures or edges comparable to its wavelength (~400 to 700 nm). In such regimes, light bends into shadows (Diffraction), combines to form alternating bright and dark bands (Interference), and exhibits directional field vibrations (Polarisation).",
      "Definition of a Wavefront: A wavefront is the locus of all adjacent points in a medium that oscillate in the same phase. When you drop a pebble into a calm pond, the expanding circular ripple is a 2D wavefront. In 3D space, light spreads as expanding surfaces of constant phase.",
      "The Three Fundamental Wavefront Geometries:",
      "1. Spherical Wavefront: Produced by a point source (S). Energy spreads uniformly in all 3D directions. Wavefronts are concentric spheres of expanding radius r = vt. Amplitude falls as A ∝ 1/r, and Intensity falls as I ∝ 1/r².",
      "2. Cylindrical Wavefront: Produced by an extended linear source (such as a thin illuminated slit or tube light). Wavefronts are coaxial cylinders. Amplitude falls as A ∝ 1/√r, and Intensity falls as I ∝ 1/r.",
      "3. Plane Wavefront: Produced when a point or linear source is located at an infinite distance (e.g., sunlight reaching Earth) or placed at the principal focus of a convex lens. The wavefronts are flat parallel planes. Amplitude and Intensity remain constant with distance (neglecting absorption).",
      "Crucial NCERT Rule: Rays are ALWAYS normal (perpendicular) to the wavefront at every point. The direction of a ray indicates the direction of energy propagation."
    ],
    visual: {
      type: 'svg' as const,
      svgContent: WAVE_OPTICS_SVGS.conceptFlow,
      caption: "Figure 1: Conceptual roadmap of Wave Optics — from Wavefronts to Polarization.",
      guide: "Trace the logical development from Huygens' wavelets to superposition (Interference/Diffraction) and transverse proof (Polarisation)."
    },
    importantPoints: [
      "Ray of light = Wave Normal (Perpendicular to Wavefront).",
      "Point source ⇒ Spherical wavefront (I ∝ 1/r²).",
      "Linear slit ⇒ Cylindrical wavefront (I ∝ 1/r).",
      "Source at infinity ⇒ Plane wavefront (I = constant)."
    ]
  },
  {
    heading: "2. Huygens' Principle & Proof of Reflection and Refraction",
    paragraphs: [
      "Huygens' Principle Postulates:",
      "1. Every point on a given wavefront acts as a fresh source of secondary spherical wavelets which spread out in all directions with the speed of the wave in that medium.",
      "2. The forward envelope (tangential surface touching all these secondary wavelets in the forward direction) gives the position and shape of the new wavefront at any subsequent time t + Δt.",
      "Why No Backward Wave? Huygens assumed wavelets travel only forward. Voigt and Kirchhoff later proved mathematically that the amplitude of secondary wavelets in a direction θ with the forward normal is proportional to the obliquity factor (1 + cos θ)/2. For the forward direction (θ = 0°), factor = 1. For the backward direction (θ = 180°), (1 + cos 180°)/2 = 0, explaining why no backward wave exists.",
      "Derivation of Law of Reflection (i = r):",
      "Consider a plane wavefront AB incident at angle i on a reflecting plane XY. Let time taken by the wave to travel from B to C be t, so BC = v·t. During this same time t, the secondary wavelet from point A grows into a sphere of radius AE = v·t in the same medium. Drawing tangent CE from C to this wavelet gives the reflected wavefront. In right-angled triangles ΔABC and ΔCEA: AC is common hypotenuse, BC = AE = v·t, and ∠ABC = ∠AEC = 90°. By RHS congruence, ΔABC ≅ ΔCEA. Therefore, ∠BAC = ∠ECA, which proves ∠i = ∠r.",
      "Derivation of Snell's Law of Refraction:",
      "Consider plane wavefront AB incident on interface separating Medium 1 (speed v₁) and Medium 2 (speed v₂). In time t, point B travels distance BC = v₁·t in Medium 1, while wavelet from A expands into Medium 2 to radius AE = v₂·t. In right ΔABC: sin i = BC / AC = (v₁·t) / AC. In right ΔAEC: sin r = AE / AC = (v₂·t) / AC. Dividing the two equations gives: sin i / sin r = v₁ / v₂ = n₂ / n₁. This yields Snell's Law: n₁ sin i = n₂ sin r."
    ],
    visual: {
      type: 'svg' as const,
      svgContent: WAVE_OPTICS_SVGS.refractionHuygens,
      caption: "Figure 2: Refraction of a plane wavefront using Huygens' construction, proving Snell's Law.",
      guide: "Notice how the wavefront tilts towards the normal because wave speed v₂ < v₁, shortening the distance AE compared to BC."
    },
    importantPoints: [
      "During refraction: Frequency f remains STRICTLY CONSTANT (it is a property of the source).",
      "Speed changes: v = c / n. Wavelength changes: λ_med = λ_air / n.",
      "When entering a denser medium (n > 1): v decreases, λ decreases, rays bend towards normal."
    ]
  },
  {
    heading: "3. Superposition Principle & Interference of Light",
    paragraphs: [
      "The Principle of Superposition: When two or more light waves travel through a medium simultaneously, the resultant displacement y at any point at any instant is the vector sum of the individual displacements: y = y₁ + y₂.",
      "Interference Definition: The phenomenon of non-uniform redistribution of light energy in a medium due to the superposition of two or more coherent light waves is called Interference. It obeys the law of conservation of energy: light energy is not destroyed at dark fringes, but merely redistributed to bright fringes.",
      "Analytical Treatment of Interference:",
      "Let the displacements of two coherent waves of angular frequency ω and phase difference φ at point P be: y₁ = A₁ sin(ωt) and y₂ = A₂ sin(ωt + φ).",
      "The resultant displacement is y = A_R sin(ωt + θ), where the resultant amplitude A_R is given by: A_R² = A₁² + A₂² + 2A₁A₂ cos φ.",
      "Since Intensity I ∝ (Amplitude)², the resultant intensity is: I = I₁ + I₂ + 2√(I₁ I₂) cos φ.",
      "Special Case of Equal Sources (I₁ = I₂ = I₀, A₁ = A₂ = a):",
      "A_R² = a² + a² + 2a² cos φ = 2a²(1 + cos φ) = 4a² cos²(φ / 2).",
      "Resultant Intensity: I = 4I₀ cos²(φ / 2).",
      "Maximum Intensity (Constructive): I_max = 4I₀ when φ = 2nπ.",
      "Minimum Intensity (Destructive): I_min = 0 when φ = (2n + 1)π."
    ],
    visual: {
      type: 'svg' as const,
      svgContent: WAVE_OPTICS_SVGS.constructiveInterference,
      caption: "Figure 3: Constructive interference of two in-phase harmonic waves yielding 4× single-source intensity.",
      guide: "Observe that when two waves of amplitude A₀ meet in phase, resultant amplitude is 2A₀, so intensity scales as (2A₀)² = 4A₀² = 4I₀."
    },
    importantPoints: [
      "Phase difference φ and Path difference Δ relation: φ = (2π / λ) · Δ.",
      "Constructive condition: Δ = nλ, φ = 2nπ (n = 0, 1, 2, ...).",
      "Destructive condition: Δ = (2n - 1)λ/2 or (2n + 1)λ/2, φ = (2n + 1)π.",
      "Average intensity across screen: I_avg = (I_max + I_min)/2 = (4I₀ + 0)/2 = 2I₀ (strictly conserving energy!)."
    ]
  },
  {
    heading: "4. Young's Double-Slit Experiment (YDSE) — Derivations & Fringe Width",
    paragraphs: [
      "YDSE Historical Significance: In 1801, Thomas Young proved the wave nature of light by creating two coherent sources S₁ and S₂ from a single pinhole S by wavefront division.",
      "Geometric Derivation of Path Difference:",
      "Let two narrow slits S₁ and S₂ be separated by distance d. Let the screen be placed at distance D from the slit plane (where D ≫ d). Consider a point P on the screen at distance y from the central axis point O.",
      "From right triangles S₁P N₁ and S₂P N₂: (S₂P)² - (S₁P)² = [D² + (y + d/2)²] - [D² + (y - d/2)²] = 2yd.",
      "Factoring: (S₂P - S₁P)(S₂P + S₁P) = 2yd.",
      "Since d ≪ D and y ≪ D, the sum (S₂P + S₁P) ≈ 2D. Therefore, path difference Δ = S₂P - S₁P = (2yd) / (2D) = y·d / D.",
      "Positions of Bright Fringes (Maxima):",
      "For constructive interference: Δ = y_n·d / D = nλ ⇒ y_n = nλD / d (n = 0, ±1, ±2, ...).",
      "Positions of Dark Fringes (Minima):",
      "For destructive interference: Δ = y_n'·d / D = (2n - 1)λ / 2 ⇒ y_n' = (2n - 1)λD / (2d) (n = 1, 2, 3, ...).",
      "Fringe Width (β):",
      "Fringe width is the separation between consecutive bright or dark fringes: β = y_(n+1) - y_n = (n+1)λD/d - nλD/d = λD / d.",
      "Angular Fringe Width (θ_β): θ_β = β / D = λ / d (measured in radians, independent of screen distance D!)."
    ],
    visual: {
      type: 'svg' as const,
      svgContent: WAVE_OPTICS_SVGS.ydseLayout,
      caption: "Figure 4: Complete Young's Double-Slit Experiment schematic geometry with labeled variables d, D, and y.",
      guide: "Follow the path difference Δ = d sin θ ≈ yd/D between rays S₁P and S₂P."
    },
    importantPoints: [
      "Fringe width β = λD / d. All fringes in YDSE have IDENTICAL width.",
      "If λ increases (Red > Blue) ⇒ β increases.",
      "If slit separation d increases ⇒ β decreases (fringes crowd together).",
      "If screen distance D increases ⇒ β increases (pattern expands).",
      "If apparatus is immersed in liquid of index μ: β' = β / μ (fringes shrink)."
    ]
  },
  {
    heading: "5. Single-Slit Fraunhofer Diffraction & Central Maximum",
    paragraphs: [
      "What is Diffraction? When light passes through a narrow aperture of width 'a' (where a ~ λ), it spreads out into the geometric shadow. This phenomenon is explained by dividing the continuous wavefront across the single slit into an infinite number of secondary wavelets that interfere with each other.",
      "Condition for Diffraction Minima (Dark Bands):",
      "Consider a plane wave incident normally on a slit AB of width a. At an angle θ, the path difference between wavelets from the extreme edges A and B is Δ = a sin θ.",
      "To find the first dark fringe (n = 1), set a sin θ₁ = λ. Why? We can divide the slit into two equal halves (each of width a/2). For every wavelet in the upper half, there exists an identical wavelet in the lower half with a path difference of (a/2) sin θ₁ = λ/2 (phase difference π), causing total destructive interference!",
      "General Minima Condition: a sin θ = nλ (where n = ±1, ±2, ±3, ...).",
      "Condition for Secondary Maxima (Bright Bands):",
      "When a sin θ = (2n + 1)λ / 2 (n = 1, 2, 3...), the slit is divided into (2n + 1) odd equal zones. 2n zones cancel in pairs, leaving only 1 unmatched zone to produce light.",
      "Central Maximum Properties:",
      "The central bright fringe extends between the first minima on either side: from θ = -λ/a to θ = +λ/a.",
      "Angular Width of Central Maximum: 2θ₁ = 2λ / a.",
      "Linear Width of Central Maximum on Screen: 2y₁ = 2λD / a (TWICE the width of any secondary maximum β_sec = λD/a!)."
    ],
    visual: {
      type: 'svg' as const,
      svgContent: WAVE_OPTICS_SVGS.diffractionPattern,
      caption: "Figure 5: Single-slit Fraunhofer diffraction intensity profile showing the dominant central maximum.",
      guide: "Notice how central maximum width (2λ/a) is double that of secondary maxima (λ/a), and secondary peak intensities drop drastically (I₀ : I₀/22 : I₀/61)."
    },
    importantPoints: [
      "Central Maximum angular width = 2λ / a; Linear width = 2λD / a.",
      "Secondary maxima angular width = λ / a; Linear width = λD / a.",
      "Intensity ratio: I₀ : I₁ : I₂ ≈ 1 : 1/22 : 1/61 (central max holds ~95% of total light energy!).",
      "If slit width 'a' is increased, diffraction pattern contracts (central max becomes narrower and sharper)."
    ]
  },
  {
    heading: "6. Polarisation of Light, Malus's Law & Brewster's Law",
    paragraphs: [
      "Transverse Nature of Light: Interference and diffraction prove that light is a wave, but they do NOT reveal whether light is longitudinal or transverse. Polarisation is the definitive phenomenon that proves light is a TRANSVERSE electromagnetic wave.",
      "Unpolarised vs Plane-Polarised Light:",
      "In unpolarised light (from sun, incandescent bulb, candle), the electric field vector E vibrates randomly and symmetrically in all possible planes perpendicular to the direction of propagation.",
      "In plane-polarised (linearly polarised) light, the E-vector vibrations are strictly confined to a single plane. The plane containing the E-vector vibrations and propagation direction is the Plane of Vibration; the perpendicular plane is the Plane of Polarisation.",
      "Malus's Law:",
      "When unpolarised light of intensity I_unpol passes through a polariser, the transmitted intensity is I₀ = ½ I_unpol.",
      "When this linearly polarised light of intensity I₀ passes through an analyser rotated by an angle θ relative to the polariser's transmission axis, the transmitted electric amplitude is E = E₀ cos θ. Since intensity I ∝ E², the transmitted intensity is: I = I₀ cos² θ.",
      "• If θ = 0° (Parallel axes): I = I₀ (maximum transmission).",
      "• If θ = 90° (Crossed polaroids): I = 0 (complete extinction/darkness).",
      "• If θ = 45°: I = I₀ cos²(45°) = I₀ / 2.",
      "Brewster's Law (Polarisation by Reflection):",
      "When unpolarised light strikes a transparent dielectric medium (like glass or water) at a particular angle of incidence i_B (called Brewster's Angle or Polarising Angle), the reflected light is completely 100% plane-polarised with its E-vector oscillating parallel to the reflecting surface.",
      "At Brewster's angle, the reflected ray and refracted ray are MUTUALLY PERPENDICULAR: i_B + r = 90° ⇒ r = 90° - i_B.",
      "From Snell's Law: μ = sin i_B / sin r = sin i_B / sin(90° - i_B) = sin i_B / cos i_B = tan i_B.",
      "Therefore: μ = tan i_B ⇒ i_B = tan⁻¹(μ)."
    ],
    visual: {
      type: 'svg' as const,
      svgContent: WAVE_OPTICS_SVGS.brewsterLaw,
      caption: "Figure 6: Brewster's Law — Complete linear polarisation by reflection when reflected ray ⟂ refracted ray.",
      guide: "Verify the geometry: i_B + r = 90° leads directly to μ = tan i_B."
    },
    importantPoints: [
      "Brewster's formula: μ = tan i_B. For glass (μ = 1.5): i_B = tan⁻¹(1.5) ≈ 56.3° (or ~57°). For water (μ = 1.33): i_B = tan⁻¹(4/3) ≈ 53°.",
      "At Brewster angle: Reflected ray ⟂ Refracted ray (Angle between them = 90°).",
      "Reflected ray is 100% linearly polarised with vibrations perpendicular to the plane of incidence (parallel to interface). Refracted ray is only PARTIALLY polarised.",
      "Malus' Law: I = I₀ cos² θ (where I₀ is already polarised light intensity entering the analyser)."
    ]
  }
];

export const WAVE_OPTICS_CONCEPTUAL_QA = [
  {
    q: "Why is light called a transverse wave, and which phenomenon uniquely proves this?",
    a: "Light is transverse because its oscillating electric and magnetic field vectors are perpendicular to the direction of wave propagation. Polarisation is the UNIQUE optical phenomenon that proves the transverse nature of light. Interference and diffraction occur in all wave types (both transverse light and longitudinal sound), but longitudinal waves CANNOT be polarised because their vibrations are along the direction of propagation."
  },
  {
    q: "Why can sound waves in air not be polarised?",
    a: "Sound waves in gases/air propagate as longitudinal waves (compressions and rarefactions) where air molecules oscillate parallel to the wave propagation direction. Since there are no perpendicular vibration components, longitudinal waves cannot be filtered by orientation and thus cannot be polarised."
  },
  {
    q: "Why are two independent light bulbs (or laser torches) unable to produce a sustained interference pattern?",
    a: "Light is emitted by atomic transitions lasting roughly 10⁻⁸ to 10⁻¹⁰ seconds. Two independent sources emit photons with random, continuously fluctuating initial phases. The phase difference φ changes millions of times per second, so the interference pattern shifts too rapidly for human eyes or detectors to resolve, resulting in a uniform average intensity (I = I₁ + I₂ = 2I₀) rather than distinct fringes."
  },
  {
    q: "What happens to the YDSE fringe width if the entire apparatus is immersed in water (refractive index μ = 4/3)?",
    a: "In water, the frequency f of light remains unchanged, but the wave speed decreases to v = c/μ and wavelength shortens to λ' = λ/μ. Since fringe width β = λD/d, the new fringe width in water is β' = β_air / μ = β_air / (4/3) = 0.75 β_air. The fringes contract and become 25% closer together."
  },
  {
    q: "What is observed at the center of the screen when white light is used in YDSE?",
    a: "At the geometric center (y = 0), the path difference Δ = 0 for ALL wavelengths present in white light. Therefore, all spectral colors interfere constructively at the center with zero phase difference, producing a bright WHITE central fringe. Just adjacent to the central white fringe, violet (shortest λ) forms its first dark fringe first, so the first colored fringe closest to the center appears reddish-violet."
  },
  {
    q: "Why is the central maximum in single-slit diffraction twice as wide as the secondary maxima?",
    a: "The central maximum extends from the first minimum on the left (θ = -λ/a) to the first minimum on the right (θ = +λ/a), giving a total angular span of 2λ/a. In contrast, any secondary maximum is bounded between consecutive minima (e.g., between θ = λ/a and θ = 2λ/a), giving an angular width of only λ/a (half of the central maximum)."
  },
  {
    q: "What happens to the intensity of light when two polaroids are placed in a crossed position (θ = 90°), and a third polaroid is inserted between them at 45°?",
    a: "Initially, with two crossed polaroids, I = I₀ cos²(90°) = 0 (complete darkness). When a third polaroid is inserted between them at 45° to the first: Transmitted from 1st = I₀. Transmitted through 2nd = I₁ = I₀ cos²(45°) = I₀/2. The angle between the 2nd and 3rd polaroid is (90° - 45°) = 45°. Therefore, transmitted through 3rd = I₂ = I₁ cos²(45°) = (I₀/2)(1/2) = I₀/4. Light reappears with intensity I₀/4!"
  },
  {
    q: "At Brewster's angle, what is the angle between the reflected and refracted rays?",
    a: "Exactly 90° (perpendicular). Proof: By Brewster's law, μ = tan i_B = sin i_B / cos i_B. By Snell's law, μ = sin i_B / sin r. Equating gives sin r = cos i_B = sin(90° - i_B). Therefore, r = 90° - i_B, which means i_B + r = 90°. Since total angle on straight line is i_B + θ_between + r = 180°, θ_between = 180° - (i_B + r) = 180° - 90° = 90°."
  },
  {
    q: "If the slit separation d in YDSE is made very large (e.g., d = 10 cm), why does the interference pattern disappear?",
    a: "Fringe width is given by β = λD / d. As d becomes very large, β becomes microscopic (much smaller than the resolving power of the human eye). The bright and dark fringes overlap and blend into a uniform illumination. For distinct fringes, d must be very small (~0.1 mm to 1 mm)."
  },
  {
    q: "What is the ratio of intensities of two waves if the ratio of maximum to minimum intensity in their interference pattern is 9:1?",
    a: "Given I_max / I_min = 9 / 1. Since I_max / I_min = (A₁ + A₂)² / (A₁ - A₂)² = 9 / 1, taking square root gives (A₁ + A₂) / (A₁ - A₂) = 3 / 1. Applying componendo & dividendo: 2A₁ / 2A₂ = (3+1)/(3-1) = 4/2 = 2/1 ⇒ A₁ / A₂ = 2. Since intensity ratio I₁ / I₂ = (A₁ / A₂)² = (2/1)² = 4 / 1."
  },
  {
    q: "Can sound waves show diffraction in our everyday living rooms, and why is light diffraction not easily seen through open doors?",
    a: "Diffraction requires aperture size 'a' to be comparable to wavelength λ (a ~ λ). Audible sound has frequencies 20 Hz – 20,000 Hz, giving wavelengths λ = v/f ≈ 340/340 ≈ 1 meter, which matches the dimensions of everyday doorways and windows (~1 m), so sound bends easily around corners. In contrast, visible light has λ ~ 5 × 10⁻⁷ m (0.0005 mm), which is millions of times smaller than door openings, so light casts sharp shadows with negligible macro-scale diffraction."
  },
  {
    q: "What is the physical significance of the optical path length (μ · x)?",
    a: "When light travels a geometric distance x in a medium of refractive index μ, its speed slows to c/μ. The time taken is t = x / (c/μ) = (μ·x) / c. The distance that light would have traveled in vacuum in this exact same time is c · t = μ·x. Thus, optical path length μ·x represents the equivalent vacuum path length containing the same number of wave cycles."
  }
];
