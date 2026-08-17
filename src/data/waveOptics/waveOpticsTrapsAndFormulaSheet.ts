import { Misconception, FormulaDetail, PracticeQuestion } from '../../types/neet';

export const WAVE_OPTICS_TRAPS: Misconception[] = [
  {
    commonConfusion: "Believing that rays and wavefronts are parallel to each other.",
    correctFact: "Rays are ALWAYS strictly perpendicular (normal) to wavefronts at every point in an isotropic medium.",
    whyItMattersForNEET: "Direct NCERT assertion question trap."
  },
  {
    commonConfusion: "Thinking that light frequency changes when entering glass or water.",
    correctFact: "Frequency is an intrinsic property of the emitting source and remains strictly unchanged during reflection and refraction. Only wave speed (v = c/μ) and wavelength (λ = λ₀/μ) change.",
    whyItMattersForNEET: "Frequently tested in NEET conceptual questions."
  },
  {
    commonConfusion: "Assuming that coherent sources must have identical intensity.",
    correctFact: "Coherent sources only require identical frequency and a constant phase difference. Their intensities (amplitudes) can be completely different (e.g., I₁ = 9I₀ and I₂ = 4I₀).",
    whyItMattersForNEET: "High-yield NEET trap on coherence conditions."
  },
  {
    commonConfusion: "Thinking two independent lasers or light bulbs can produce interference.",
    correctFact: "Independent sources emit photons via random spontaneous emission; their relative phase jumps randomly every ~10⁻⁸ seconds, washing out any interference pattern into uniform average intensity.",
    whyItMattersForNEET: "NCERT assertion and reasoning favourite."
  },
  {
    commonConfusion: "Confusing the dark fringe condition in interference with the dark fringe condition in diffraction.",
    correctFact: "In interference, dark fringe is at d sin θ = (2n - 1)λ/2. In single-slit diffraction, dark fringe (minimum) is at a sin θ = nλ (where n = 1, 2, 3...).",
    whyItMattersForNEET: "Top source of negative marking in NEET optics questions!"
  },
  {
    commonConfusion: "Forgetting the factor of 2 in the width of the central diffraction maximum.",
    correctFact: "Central maximum has linear width W = 2λD/a (angular width 2λ/a), which is TWICE the width of secondary maxima (λD/a).",
    whyItMattersForNEET: "Forgetting 2 leads to an erroneous factor of 0.5."
  },
  {
    commonConfusion: "Applying I = I₀ cos² θ directly to unpolarised light entering the first polaroid.",
    correctFact: "When unpolarised light hits a polaroid, the transmitted intensity is ALWAYS ½ I_unpol, regardless of polaroid rotation. Malus's Law applies only AFTER light is already polarised.",
    whyItMattersForNEET: "Crucial for 3-polaroid sequence numericals."
  },
  {
    commonConfusion: "Thinking that both reflected and refracted rays are 100% polarised at Brewster's angle.",
    correctFact: "At Brewster's angle (i_B), ONLY the reflected ray is 100% plane-polarised. The refracted ray is only PARTIALLY polarised.",
    whyItMattersForNEET: "Common statement-based question trap in NEET."
  },
  {
    commonConfusion: "Assuming Brewster's angle formula is μ = sin i_B or μ = cos i_B.",
    correctFact: "Brewster's Law is strictly μ = tan i_B, derived from reflected ray ⟂ refracted ray (i_B + r = 90°).",
    whyItMattersForNEET: "Direct formula identification."
  },
  {
    commonConfusion: "Thinking fringe width β changes as fringe order n increases in YDSE.",
    correctFact: "In standard YDSE (small angles), all fringes (bright and dark) have the EXACT same uniform width β = λD/d.",
    whyItMattersForNEET: "Contrast with diffraction where secondary peaks have half the central width."
  },
  {
    commonConfusion: "Believing that energy is destroyed at dark fringes.",
    correctFact: "Interference strictly obeys conservation of energy. Light energy is not lost; it is redistributed from dark regions (I = 0) to bright regions (I = 4I₀), keeping average intensity at 2I₀.",
    whyItMattersForNEET: "Classic NCERT conceptual assertion."
  },
  {
    commonConfusion: "Assuming sound waves in air can be polarised using special acoustic polaroids.",
    correctFact: "Sound waves in air are longitudinal (oscillations parallel to propagation). Longitudinal waves CANNOT be polarised under any circumstances.",
    whyItMattersForNEET: "Direct conceptual question in NEET."
  },
  {
    commonConfusion: "Forgetting that fringe width in a medium is β_med = β_air / μ.",
    correctFact: "Since λ decreases by factor μ in a medium, fringe width shrinks proportionally: β_med = β_air / μ.",
    whyItMattersForNEET: "Appears frequently in NEET numericals (e.g., water tank immersion)."
  },
  {
    commonConfusion: "Mixing up angular fringe width θ with linear fringe width β.",
    correctFact: "Linear fringe width is β = λD/d (depends on screen distance D). Angular fringe width is θ = β/D = λ/d (independent of D!).",
    whyItMattersForNEET: "Questions asking for angular width do NOT change when D is changed."
  },
  {
    commonConfusion: "Using n = 0 for the first dark fringe in YDSE with formula (2n+1)λ/2.",
    correctFact: "If using (2n - 1)λ/2, n starts at 1 (1st dark: λ/2, 2nd dark: 3λ/2). If using (2n + 1)λ/2, n starts at 0. Always double check your indexing!",
    whyItMattersForNEET: "Index shifts cause 1-off errors in numerical answers."
  },
  {
    commonConfusion: "Assuming white light produces monochromatic interference bands everywhere.",
    correctFact: "White light produces a CENTRAL WHITE fringe (Δ = 0 for all λ), flanked on either side by a few colored fringes (violet forms first dark fringe closest to center), before overlapping into uniform white illumination.",
    whyItMattersForNEET: "NCERT descriptive question."
  },
  {
    commonConfusion: "Thinking that an infinitely narrow slit in single-slit diffraction gives no pattern.",
    correctFact: "As slit width a → 0, central maximum angular width 2λ/a → ∞ (light spreads over the entire screen uniformly).",
    whyItMattersForNEET: "Conceptual limit testing."
  },
  {
    commonConfusion: "Thinking that covered slit in YDSE with transparent mica sheet decreases fringe width.",
    correctFact: "Introducing a thin transparent plate of thickness t and index μ does NOT change the fringe width β; it merely shifts the entire fringe pattern by distance y_shift = (μ - 1)t D / d towards the covered slit.",
    whyItMattersForNEET: "High-yield optical shift problem."
  },
  {
    commonConfusion: "Assuming the central fringe shifts when the source S is moved parallel to the slit plane.",
    correctFact: "Moving source S upwards by distance s shifts the central fringe downwards by y = (s / s_source) · D, maintaining zero total path difference.",
    whyItMattersForNEET: "Source displacement questions."
  },
  {
    commonConfusion: "Assuming amplitude ratio is equal to intensity ratio.",
    correctFact: "Intensity is proportional to the SQUARE of amplitude: I ∝ A². If A₁/A₂ = 2/1, then I₁/I₂ = 4/1.",
    whyItMattersForNEET: "Fundamental mathematical trap in wave optics."
  },
  {
    commonConfusion: "Believing that secondary maxima in diffraction have equal brightness.",
    correctFact: "In single-slit diffraction, secondary maxima intensities fall off drastically: I₀ : I₁ : I₂ ≈ 1 : (1/22) : (1/61). Central max carries ~95% of total power.",
    whyItMattersForNEET: "Diffraction vs interference comparison trap."
  },
  {
    commonConfusion: "Thinking Huygens' principle works only for light waves.",
    correctFact: "Huygens' construction is a universal geometrical wave principle applicable to all wave phenomena, including sound waves, water ripples, and seismic waves.",
    whyItMattersForNEET: "Theoretical physics assertion."
  },
  {
    commonConfusion: "Assuming Brewster angle is always 45°.",
    correctFact: "Brewster angle depends on refractive index: i_B = tan⁻¹(μ). For water (μ = 4/3), i_B ≈ 53°; for glass (μ = 1.5), i_B ≈ 56.3°.",
    whyItMattersForNEET: "Formula application."
  },
  {
    commonConfusion: "Confusing plane of vibration with plane of polarisation.",
    correctFact: "Plane of vibration contains the E-vector vibrations and ray of light. Plane of polarisation is perpendicular to the plane of vibration.",
    whyItMattersForNEET: "Definition matching MCQ."
  },
  {
    commonConfusion: "Thinking that polaroid sunglasses only dim light like tinted glass.",
    correctFact: "Polaroid sunglasses selectively block horizontally polarised glare reflected from roads and water surfaces, drastically cutting glare without heavily darkening the entire scene.",
    whyItMattersForNEET: "Applied physics question."
  },
  {
    commonConfusion: "Assuming coherent waves must be in the same direction.",
    correctFact: "Coherent waves can travel in different directions and meet at an angle to produce interference.",
    whyItMattersForNEET: "Conceptual clarity."
  },
  {
    commonConfusion: "Believing that constructive interference means intensity is 2I₀ for equal sources.",
    correctFact: "Constructive interference amplitude is A = A₀ + A₀ = 2A₀, so intensity is (2A₀)² = 4A₀² = 4I₀ (FOUR times single source, not 2×!).",
    whyItMattersForNEET: "Most common numerical calculation mistake."
  },
  {
    commonConfusion: "Assuming destructive interference amplitude is negative.",
    correctFact: "Amplitude is a magnitude and is zero for equal sources: A_min = |A₁ - A₂| = 0. Intensity is 0.",
    whyItMattersForNEET: "Sign error trap."
  },
  {
    commonConfusion: "Thinking that Doppler effect in light changes amplitude.",
    correctFact: "Doppler effect changes observed frequency/wavelength (redshift/blueshift), not the intrinsic amplitude.",
    whyItMattersForNEET: "Wave optics concept."
  },
  {
    commonConfusion: "Believing that diffraction happens only at sharp edges.",
    correctFact: "Diffraction occurs whenever a wave is obstructed or limited by any aperture, edge, wire, disc, or slit.",
    whyItMattersForNEET: "Broad definition trap."
  },
  {
    commonConfusion: "Thinking that resolving power increases with larger wavelength.",
    correctFact: "Resolving limit is proportional to λ (θ_min = 1.22λ/D), so Resolving Power = 1/θ_min is INVERSELY proportional to λ. Shorter λ (blue/UV) gives HIGHER resolution.",
    whyItMattersForNEET: "Optical instruments crossover."
  },
  {
    commonConfusion: "Assuming that interference pattern requires a laser.",
    correctFact: "Thomas Young used sunlight filtered through a pinhole in 1801. Any monochromatic source split by two narrow slits produces interference.",
    whyItMattersForNEET: "Historical physics question."
  },
  {
    commonConfusion: "Forgetting that at crossed polarisers (θ = 90°), adding a 3rd polaroid at 45° RESTORES light.",
    correctFact: "Two crossed polaroids give 0 intensity. Inserting a middle polaroid at 45° outputs I = (I_unpol / 8) because E-field is projected sequentially at 45° twice!",
    whyItMattersForNEET: "Classic 4-mark numerical in NEET."
  },
  {
    commonConfusion: "Thinking that ray optics is completely wrong.",
    correctFact: "Ray optics is the asymptotic high-frequency limit of wave optics when λ → 0. In macroscopic systems, wave effects are too tiny to observe.",
    whyItMattersForNEET: "NCERT introductory statement."
  },
  {
    commonConfusion: "Assuming path difference Δ = d sin θ is exact for any angle.",
    correctFact: "Δ = d sin θ is exact when D ≫ d. The further approximation Δ ≈ yd/D is valid only when θ is small (y ≪ D).",
    whyItMattersForNEET: "Approximation validity in tough numericals."
  }
];

export const WAVE_OPTICS_COMPARISON_TABLES = [
  {
    title: "1. Interference vs Single-Slit Diffraction",
    headers: ["Parameter", "Interference (YDSE)", "Diffraction (Single Slit)"],
    rows: [
      ["Origin", "Superposition of waves from two distinct coherent slits (S₁ and S₂)", "Superposition of secondary wavelets from different parts of the same single slit"],
      ["Fringe Width", "All fringes have equal uniform width (β = λD/d)", "Central maximum is 2× wider (2λD/a); secondary fringes have width λD/a"],
      ["Intensity of Maxima", "All bright fringes have equal intensity (4I₀)", "Central maximum is intensely bright; secondary peaks diminish rapidly (I₀ : I₀/22 : I₀/61)"],
      ["Minima Condition", "d sin θ = (2n - 1)λ/2 (Dark fringe)", "a sin θ = nλ (n = 1, 2, 3...) (Dark fringe / Minimum)"],
      ["Central Fringe", "Central bright fringe has width β", "Central maximum is twice as wide as secondary bands (2β_sec)"],
      ["Darkness of Minima", "Good contrast; perfect darkness if I₁ = I₂", "Minima are dark, but contrast is less sharp at higher orders"]
    ]
  },
  {
    title: "2. Constructive vs Destructive Interference",
    headers: ["Feature", "Constructive Interference (Bright)", "Destructive Interference (Dark)"],
    rows: [
      ["Path Difference (Δ)", "Δ = nλ  (n = 0, 1, 2, 3...)", "Δ = (2n - 1)λ/2  (n = 1, 2, 3...)"],
      ["Phase Difference (φ)", "φ = 2nπ  (0, 2π, 4π, 6π...)", "φ = (2n - 1)π  (π, 3π, 5π...)"],
      ["Resultant Amplitude (A_R)", "A_max = A₁ + A₂ (for equal: 2A₀)", "A_min = |A₁ - A₂| (for equal: 0)"],
      ["Resultant Intensity (I)", "I_max = (√I₁ + √I₂)² (for equal: 4I₀)", "I_min = (√I₁ - √I₂)² (for equal: 0)"],
      ["Wave Alignment", "Crest meets Crest, Trough meets Trough", "Crest meets Trough (Out of phase by 180°)"]
    ]
  },
  {
    title: "3. Coherent vs Incoherent Sources",
    headers: ["Property", "Coherent Sources", "Incoherent Sources"],
    rows: [
      ["Phase Difference", "Constant and independent of time", "Fluctuates randomly every ~10⁻⁸ s"],
      ["Frequency & Wavelength", "Must be strictly identical", "May be same or different"],
      ["Resultant Intensity", "I = I₁ + I₂ + 2√(I₁I₂) cos φ (Varies with position)", "I = I₁ + I₂ (Uniform average everywhere)"],
      ["Fringe Visibility", "Clear, sustained bright and dark fringes", "No visible fringes; uniform illumination"],
      ["Real-world Example", "Two slits illuminated by single monochromatic laser", "Two separate independent filament bulbs / torches"]
    ]
  },
  {
    title: "4. Unpolarised vs Plane-Polarised Light",
    headers: ["Characteristic", "Unpolarised Light", "Plane-Polarised Light"],
    rows: [
      ["Electric Vector Vibrations", "Occur in all possible planes ⟂ to ray symmetrically", "Confined strictly to a single plane ⟂ to ray"],
      ["Symmetry", "Completely symmetrical about propagation axis", "Asymmetrical about propagation axis"],
      ["Action through Rotating Polaroid", "Transmitted intensity remains CONSTANT (½ I_unpol)", "Transmitted intensity varies as I₀ cos² θ (drops to 0 at 90°)"],
      ["Sources", "Sunlight, candle flame, filament lamp, fluorescent tube", "Light passed through Polaroid, reflected at Brewster angle"]
    ]
  },
  {
    title: "5. Polariser vs Analyser",
    headers: ["Device", "Primary Function", "Key Behaviour"],
    rows: [
      ["Polariser", "Converts incident unpolarised light into plane-polarised light", "Transmits 50% of unpolarised light along its transmission axis"],
      ["Analyser", "Detects and verifies whether incoming light is plane-polarised", "Transmits according to Malus's Law: I = I₀ cos² θ (darkness at 90°)"]
    ]
  },
  {
    title: "6. Effect of Parameter Changes in YDSE (β = λD / d)",
    headers: ["Parameter Change", "Effect on Fringe Width (β)", "Effect on Angular Width (θ = λ/d)", "Visual Consequence"],
    rows: [
      ["Increase Wavelength λ (Blue → Red)", "Increases (β ∝ λ)", "Increases (θ ∝ λ)", "Fringes spread wider apart"],
      ["Increase Screen Distance D", "Increases (β ∝ D)", "UNCHANGED (independent of D)", "Fringes expand on screen"],
      ["Increase Slit Separation d", "Decreases (β ∝ 1/d)", "Decreases (θ ∝ 1/d)", "Fringes crowd closely together"],
      ["Immerse Setup in Liquid (index μ)", "Decreases (β' = β/μ)", "Decreases (θ' = θ/μ)", "Fringe pattern compresses"],
      ["Cover one slit with black paper", "Pattern vanishes", "Pattern vanishes", "Uniform single-slit diffraction illumination"]
    ]
  },
  {
    title: "7. Wavefront Geometrical Types",
    headers: ["Wavefront Type", "Source Geometry", "Wavefront Shape", "Amplitude vs Distance (r)", "Intensity vs Distance (r)"],
    rows: [
      ["Spherical Wavefront", "Point source (S)", "Concentric Spheres", "A ∝ 1/r", "I ∝ 1/r²"],
      ["Cylindrical Wavefront", "Linear slit / Line source", "Coaxial Cylinders", "A ∝ 1/√r", "I ∝ 1/r"],
      ["Plane Wavefront", "Source at infinity / Collimated beam", "Parallel Planes", "A = Constant", "I = Constant"]
    ]
  },
  {
    title: "8. Ray Optics vs Wave Optics",
    headers: ["Feature", "Ray (Geometric) Optics", "Wave (Physical) Optics"],
    rows: [
      ["Fundamental Assumption", "Light travels strictly in straight lines (rays)", "Light propagates as electromagnetic wavefronts"],
      ["Aperture Regime", "Obstacle size ≫ Wavelength (a ≫ λ)", "Obstacle size comparable to Wavelength (a ~ λ)"],
      ["Explained Phenomena", "Reflection, Refraction, Image formation in mirrors/lenses", "Interference, Diffraction, Polarisation, Doppler effect"],
      ["Wavelength Limit", "Limiting approximation as λ → 0", "Full general theory valid for all λ"]
    ]
  }
];

export const WAVE_OPTICS_FORMULA_SHEET: FormulaDetail[] = [
  {
    title: "Wave Speed Equation",
    formula: "v = f · λ  =  c / n",
    variables: "v = speed (m/s), f = frequency (Hz), λ = wavelength (m), c = 3×10⁸ m/s, n = refractive index",
    whenToUse: "Refraction of wave across media boundaries.",
    note: "Frequency f NEVER changes across media; only v and λ scale as 1/n."
  },
  {
    title: "Phase Difference & Path Difference Relation",
    formula: "φ = (2π / λ) · Δ",
    variables: "φ = phase difference (rad), Δ = optical path difference (m), λ = wavelength (m)",
    whenToUse: "Converting spatial path difference to temporal phase difference."
  },
  {
    title: "Resultant Interference Intensity",
    formula: "I = I₁ + I₂ + 2√(I₁ I₂) cos φ",
    variables: "I = resultant intensity, I₁, I₂ = individual intensities, φ = phase difference",
    whenToUse: "Calculating intensity at any point in an interference pattern."
  },
  {
    title: "Equal Source Interference Intensity",
    formula: "I = 4I₀ cos²(φ / 2)",
    variables: "I₀ = intensity of single slit, I_max = 4I₀, I_min = 0",
    whenToUse: "Standard YDSE with identical slits."
  },
  {
    title: "Intensity Max/Min Ratio",
    formula: "I_max / I_min = (A₁ + A₂)² / (A₁ - A₂)² = (√I₁ + √I₂)² / (√I₁ - √I₂)²",
    variables: "A₁, A₂ = wave amplitudes; I₁, I₂ = slit intensities",
    whenToUse: "Given slit width ratio w₁/w₂ = I₁/I₂ = A₁²/A₂²."
  },
  {
    title: "YDSE Path Difference Approximation",
    formula: "Δ = d sin θ ≈ y · d / D",
    variables: "d = slit separation, D = screen distance, y = position from center, θ = angle",
    whenToUse: "Finding path difference for point P on screen when d ≪ D."
  },
  {
    title: "YDSE Bright Fringe Position",
    formula: "y_n = n · λ · D / d    (n = 0, ±1, ±2...)",
    variables: "y_n = distance of nth bright fringe from central maximum",
    whenToUse: "Finding location of nth maximum on screen."
  },
  {
    title: "YDSE Dark Fringe Position",
    formula: "y_n' = (2n - 1) · λ · D / (2d)    (n = 1, 2, 3...)",
    variables: "y_n' = distance of nth dark fringe from central maximum",
    whenToUse: "Finding location of nth minimum on screen."
  },
  {
    title: "YDSE Fringe Width",
    formula: "β = λ · D / d",
    variables: "β = fringe width (m), λ = wavelength (m), D = screen distance (m), d = slit spacing (m)",
    whenToUse: "Finding separation between successive bright or dark fringes."
  },
  {
    title: "Angular Fringe Width",
    formula: "θ_β = β / D = λ / d",
    variables: "θ_β = angular fringe width in radians",
    whenToUse: "Angular width calculations (independent of screen distance D!)."
  },
  {
    title: "YDSE in a Medium",
    formula: "β_med = β_air / μ   ;   λ_med = λ_air / μ",
    variables: "μ = refractive index of liquid medium",
    whenToUse: "When experimental apparatus is completely immersed in liquid."
  },
  {
    title: "Single-Slit Diffraction Minima",
    formula: "a sin θ = n · λ    (n = 1, 2, 3...)",
    variables: "a = slit width, θ = diffraction angle, n = order of minimum",
    whenToUse: "Locating dark bands in single-slit Fraunhofer diffraction."
  },
  {
    title: "Central Maximum Angular Width",
    formula: "2θ₁ = 2λ / a",
    variables: "2θ₁ = full angular width of central maximum in radians",
    whenToUse: "Diffraction spread angle."
  },
  {
    title: "Central Maximum Linear Width",
    formula: "W = 2λ · D / a",
    variables: "W = linear width on screen, D = screen distance, a = slit width",
    whenToUse: "Finding linear size of the central bright patch on screen."
  },
  {
    title: "Malus's Law",
    formula: "I = I₀ cos² θ",
    variables: "I₀ = polarised intensity entering analyser, θ = angle between transmission axes",
    whenToUse: "Intensity transmitted through rotating polaroids."
  },
  {
    title: "Brewster's Law",
    formula: "μ = tan i_B   ⇒   i_B + r = 90°",
    variables: "μ = refractive index, i_B = Brewster polarising angle, r = angle of refraction",
    whenToUse: "Complete polarisation by reflection."
  }
];

export const WAVE_OPTICS_FIVE_MINUTE_REVISION = [
  "1. Wavefront & Ray: Wavefront is locus of constant phase. Rays are ALWAYS normal to wavefronts (Ray ⟂ Wavefront). Point source → Spherical; Line source → Cylindrical; Infinity → Plane.",
  "2. Huygens' Principle: Every wavefront point creates secondary wavelets of radius v·t. Forward envelope gives new wavefront. Proves i = r and n₁ sin i = n₂ sin r. Frequency f never changes in refraction.",
  "3. Coherence: Requires SAME frequency and CONSTANT phase difference. Two independent sources are NEVER coherent. Equal intensity is NOT required.",
  "4. Interference Conditions: Constructive: Δ = nλ, φ = 2nπ, I_max = 4I₀. Destructive: Δ = (2n-1)λ/2, φ = (2n-1)π, I_min = 0. Energy is conserved, average I = 2I₀.",
  "5. YDSE: Path difference Δ = yd/D. Fringe width β = λD/d. Angular width θ = λ/d. All fringes have identical width.",
  "6. YDSE Parameter Changes: λ↑ → β↑; D↑ → β↑; d↑ → β↓; In medium μ → β_med = β_air / μ. White light → Central fringe is WHITE, followed by colored fringes.",
  "7. Single-Slit Diffraction: Minima at a sin θ = nλ (n = 1, 2, 3...). Central maximum angular width = 2λ/a, Linear width = 2λD/a (TWICE as wide as secondary maxima). Peak intensities drop as 1 : 1/22 : 1/61.",
  "8. Polarisation: PROVES light is a TRANSVERSE wave (sound cannot be polarised). Unpolarised light through 1 polaroid → I = I_unpol / 2.",
  "9. Malus's Law: I = I₀ cos² θ. For crossed polaroids (90°), I = 0. Inserting 3rd polaroid at 45° yields I = I₀/4 (or I_unpol / 8).",
  "10. Brewster's Law: μ = tan i_B. At Brewster angle, Reflected ray ⟂ Refracted ray (i_B + r = 90°). Reflected light is 100% plane-polarised."
];

export const WAVE_OPTICS_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    id: "wo-prac-1",
    question: "Which of the following optical phenomena conclusively establishes the transverse wave nature of light?",
    options: [
      "Interference",
      "Diffraction",
      "Polarisation",
      "Total Internal Reflection"
    ],
    correctAnswer: 2,
    explanation: "Polarisation occurs ONLY in transverse waves where vibrations are perpendicular to propagation. Longitudinal waves (like sound in air) cannot be polarised. Interference and diffraction occur in all wave types.",
    conceptTested: "Transverse nature of light and polarisation"
  },
  {
    id: "wo-prac-2",
    question: "When a monochromatic light beam of wavelength 600 nm in air enters a glass block of refractive index 1.5, its wavelength and frequency in glass will be respectively:",
    options: [
      "400 nm and unchanged",
      "900 nm and unchanged",
      "400 nm and 1.5 times",
      "600 nm and unchanged"
    ],
    correctAnswer: 0,
    explanation: "Frequency f is an intrinsic source property and remains strictly unchanged. Wavelength in glass is λ_g = λ_air / μ = 600 nm / 1.5 = 400 nm.",
    conceptTested: "Refraction invariants (frequency constant, λ scales as 1/μ)"
  },
  {
    id: "wo-prac-3",
    question: "In Young's double-slit experiment, if the distance between the slits is halved and the distance between the slits and screen is doubled, the fringe width will become:",
    options: [
      "Half",
      "Double",
      "Four times",
      "Unchanged"
    ],
    correctAnswer: 2,
    explanation: "Fringe width β = λD/d. If D becomes 2D and d becomes d/2, then β' = λ(2D)/(d/2) = 4(λD/d) = 4β (four times).",
    conceptTested: "Fringe width parameter scaling (β ∝ D/d)"
  },
  {
    id: "wo-prac-4",
    question: "Two coherent sources of light have intensity ratio 9 : 1. The ratio of maximum to minimum intensity in the resulting interference fringe pattern is:",
    options: [
      "9 : 1",
      "4 : 1",
      "16 : 1",
      "10 : 8"
    ],
    correctAnswer: 1,
    explanation: "Given I₁/I₂ = 9/1 ⇒ Amplitude ratio A₁/A₂ = √9/√1 = 3/1. Then I_max / I_min = ((A₁ + A₂)/(A₁ - A₂))² = ((3 + 1)/(3 - 1))² = (4/2)² = 2² = 4 : 1.",
    conceptTested: "Intensity max/min ratio formula"
  },
  {
    id: "wo-prac-5",
    question: "In single-slit Fraunhofer diffraction, the first diffraction minimum for light of wavelength 500 nm occurs at an angle of 30°. The width of the slit is:",
    options: [
      "1.0 μm",
      "0.5 μm",
      "2.0 μm",
      "0.25 μm"
    ],
    correctAnswer: 0,
    explanation: "First minimum condition: a sin θ = 1 · λ ⇒ a = λ / sin(30°) = 500 nm / 0.5 = 1000 nm = 1.0 μm.",
    conceptTested: "Single-slit diffraction minimum formula (a sin θ = nλ)"
  },
  {
    id: "wo-prac-6",
    question: "At Brewster's angle of incidence i_B on a glass slab, what is the angle between the reflected ray and refracted ray?",
    options: [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    correctAnswer: 2,
    explanation: "At Brewster's angle, the reflected and refracted rays are mutually perpendicular (angle = 90°). This is why i_B + r = 90° and μ = tan i_B.",
    conceptTested: "Brewster's angle geometric condition"
  },
  {
    id: "wo-prac-7",
    question: "An unpolarised light beam of intensity I₀ passes through two polaroids placed with their transmission axes at 60° to each other. The transmitted intensity is:",
    options: [
      "I₀ / 2",
      "I₀ / 4",
      "I₀ / 8",
      "3I₀ / 8"
    ],
    correctAnswer: 2,
    explanation: "1. Through 1st polaroid: I₁ = I₀ / 2.\n2. Through 2nd polaroid at 60°: I₂ = I₁ cos²(60°) = (I₀ / 2) × (1/2)² = I₀ / 8.",
    conceptTested: "Malus's Law application"
  },
  {
    id: "wo-prac-8",
    question: "In a YDSE, if white light is used instead of monochromatic light, what is observed at the center of the screen?",
    options: [
      "A dark fringe",
      "A white bright fringe",
      "A violet bright fringe",
      "A red bright fringe"
    ],
    correctAnswer: 1,
    explanation: "At the geometric center (y = 0), the path difference Δ = 0 for all wavelengths. Hence, all colors interfere constructively in phase, producing a central WHITE fringe.",
    conceptTested: "White light interference pattern"
  },
  {
    id: "wo-prac-9",
    question: "What is the shape of the wavefront originating from a distant star reaching the Earth?",
    options: [
      "Spherical",
      "Cylindrical",
      "Plane",
      "Elliptical"
    ],
    correctAnswer: 2,
    explanation: "A small portion of a spherical wavefront coming from a source located at an immense (infinite) distance appears flat, forming a plane wavefront.",
    conceptTested: "Wavefront geometries"
  },
  {
    id: "wo-prac-10",
    question: "In YDSE, the path difference between two interfering waves at a point on the screen is λ / 4. The ratio of intensity at this point to the maximum intensity is:",
    options: [
      "0.25",
      "0.50",
      "0.75",
      "1.00"
    ],
    correctAnswer: 1,
    explanation: "Phase difference φ = (2π/λ) · (λ/4) = π/2 rad (90°). Resultant intensity I / I_max = cos²(φ/2) = cos²(45°) = (1/√2)² = 0.50.",
    conceptTested: "Path difference to intensity calculation"
  },
  {
    id: "wo-prac-11",
    question: "If a thin mica sheet of refractive index μ and thickness t is placed in front of one of the slits in YDSE, the fringe width:",
    options: [
      "Increases",
      "Decreases",
      "Remains unchanged",
      "Becomes zero"
    ],
    correctAnswer: 2,
    explanation: "The introduction of a thin sheet introduces an additional optical path difference (μ - 1)t which shifts the entire fringe pattern by y = (μ - 1)t D / d, but the fringe width β = λD/d remains STRICTLY UNCHANGED.",
    conceptTested: "Effect of thin transparent plate on YDSE"
  },
  {
    id: "wo-prac-12",
    question: "The angular width of the central maximum in single-slit Fraunhofer diffraction is independent of:",
    options: [
      "Wavelength of light λ",
      "Width of the slit a",
      "Distance of the screen D",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "Angular width of central maximum is 2θ = 2λ / a, which depends on λ and slit width a, but is completely independent of screen distance D.",
    conceptTested: "Angular width vs linear width in diffraction"
  },
  {
    id: "wo-prac-13",
    question: "For a given medium, the Brewster angle is 45°. The critical angle for total internal reflection inside this medium is:",
    options: [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    correctAnswer: 1,
    explanation: "By Brewster's Law: μ = tan(45°) = 1. Critical angle sin C = 1/μ = 1/1 = 1 ⇒ C = 90° (or for μ = tan i_B). If i_B = 45°, μ = 1, C = 90°.",
    conceptTested: "Link between Brewster angle and critical angle"
  },
  {
    id: "wo-prac-14",
    question: "In YDSE, the 4th bright fringe of light of wavelength λ₁ coincides with the 5th bright fringe of light of wavelength λ₂. If λ₁ = 600 nm, then λ₂ is:",
    options: [
      "480 nm",
      "750 nm",
      "500 nm",
      "400 nm"
    ],
    correctAnswer: 0,
    explanation: "At the position of coincidence: y = n₁λ₁D/d = n₂λ₂D/d ⇒ n₁λ₁ = n₂λ₂ ⇒ 4 × 600 nm = 5 × λ₂ ⇒ λ₂ = 2400 / 5 = 480 nm.",
    conceptTested: "Coincidence of fringes of different wavelengths"
  },
  {
    id: "wo-prac-15",
    question: "Two polaroids are oriented with their transmission axes perpendicular (crossed). An unpolarised light of intensity I₀ is incident. If a third polaroid is placed between them with its axis at 45° to the first, the transmitted intensity is:",
    options: [
      "Zero",
      "I₀ / 4",
      "I₀ / 8",
      "I₀ / 16"
    ],
    correctAnswer: 2,
    explanation: "1. Through 1st: I₁ = I₀/2.\n2. Through middle (45°): I₂ = (I₀/2) cos²(45°) = I₀/4.\n3. Through 3rd (angle 45° to middle): I₃ = (I₀/4) cos²(45°) = I₀/8.",
    conceptTested: "Three-polaroid crossed system"
  },
  {
    id: "wo-prac-16",
    question: "The primary difference between a wavefront and a ray is that:",
    options: [
      "Wavefront is 1D while ray is 3D",
      "Wavefront represents surface of constant phase while ray is normal to it indicating energy flow",
      "Wavefronts move faster than rays",
      "Rays can be curved while wavefronts are always flat"
    ],
    correctAnswer: 1,
    explanation: "A wavefront is the continuous locus of all points vibrating in the same phase, while a light ray is a line drawn perpendicular to the wavefront pointing in the direction of wave propagation.",
    conceptTested: "Fundamental definitions of wavefront and ray"
  },
  {
    id: "wo-prac-17",
    question: "In YDSE, if the width of one slit is twice that of the other, the ratio of maximum to minimum intensity in the interference pattern is:",
    options: [
      "2 : 1",
      "3 : 1",
      "34.3 : 1",
      "((√2 + 1) / (√2 - 1))² ≈ 34 : 1"
    ],
    correctAnswer: 3,
    explanation: "Given w₁/w₂ = 2/1 ⇒ I₁/I₂ = 2/1 ⇒ A₁/A₂ = √2/1. Then I_max / I_min = ((√2 + 1)/(√2 - 1))² = (2.414 / 0.414)² ≈ (5.83)² ≈ 34 : 1.",
    conceptTested: "Unequal slit widths in YDSE"
  },
  {
    id: "wo-prac-18",
    question: "According to Huygens' principle, the amplitude of secondary wavelets in the backward direction is zero because of:",
    options: [
      "Destructive interference with forward waves",
      "The obliquity factor (1 + cos θ)/2, which equals zero when θ = 180°",
      "Conservation of momentum",
      "Absorption by the medium"
    ],
    correctAnswer: 1,
    explanation: "Kirchhoff proved that the amplitude of secondary wavelets in direction θ is proportional to (1 + cos θ)/2. In the backward direction (θ = 180°), cos 180° = -1, making (1 - 1)/2 = 0.",
    conceptTested: "Obliquity factor in Huygens' wavelets"
  },
  {
    id: "wo-prac-19",
    question: "In single-slit diffraction, if the slit width 'a' is increased from 0.1 mm to 0.2 mm, the linear width of the central maximum will:",
    options: [
      "Double",
      "Be halved",
      "Quadruple",
      "Remain unchanged"
    ],
    correctAnswer: 1,
    explanation: "Central maximum width W = 2λD / a. Since W is inversely proportional to a, doubling 'a' reduces the width of the central maximum to half.",
    conceptTested: "Slit width dependence in diffraction"
  },
  {
    id: "wo-prac-20",
    question: "When unpolarised light of intensity 32 W/m² strikes a glass surface at Brewster's angle, the reflected light is completely plane-polarised. What is the orientation of its electric field vibrations?",
    options: [
      "Parallel to the plane of incidence",
      "Perpendicular to the plane of incidence (parallel to reflecting interface)",
      "At 45° to the plane of incidence",
      "Randomly vibrating in all directions"
    ],
    correctAnswer: 1,
    explanation: "In polarisation by reflection at Brewster's angle, the reflected light is 100% plane-polarised with its electric field vector oscillating strictly perpendicular to the plane of incidence (i.e., parallel to the interface).",
    conceptTested: "Electric field vibration direction at Brewster angle"
  }
];
