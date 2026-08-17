// NEET Traps, Complete Formula Sheet, and Rapid Revision Guide for Ray Optics

export interface NeetTrap {
  id: string;
  trapName: string;
  pitfall: string;
  whyStudentsFail: string;
  correctConcept: string;
  goldenRule: string;
}

export interface FormulaItem {
  name: string;
  formula: string;
  variables: string;
  siUnits: string;
  conditions: string;
}

export const rayOpticsTraps: NeetTrap[] = [
  {
    id: "trap-1",
    trapName: "Angle Measured with Surface vs Normal",
    pitfall: "Using the glancing angle with the surface instead of the angle with the normal in Snell's law or reflection laws.",
    whyStudentsFail: "Question states: 'A ray is incident at 30° to the mirror surface.' Students directly take i = 30° instead of i = 90° - 30° = 60°.",
    correctConcept: "All optical angles (incidence i, reflection r, refraction r', deviation δ) are strictly defined relative to the perpendicular Normal line at the point of incidence.",
    goldenRule: "Always draw the normal first: Angle of incidence i = 90° - (glancing angle with surface)."
  },
  {
    trapName: "Frequency Change during Refraction",
    id: "trap-2",
    pitfall: "Assuming frequency changes when light enters an optically denser medium.",
    whyStudentsFail: "Seeing velocity decrease (v = c/n) and wavelength decrease (λ = λ₀/n), students mistakenly compute frequency ν' = ν/n.",
    correctConcept: "Frequency ν is an intrinsic property of the emitting source (oscillation rate of source electrons) and remains strictly invariant across all refractions, reflections, and medium boundaries.",
    goldenRule: "Frequency ν = constant. Color perceived by the eye is fundamentally governed by frequency, not wavelength."
  },
  {
    trapName: "Mirror Formula vs Lens Formula Signs",
    id: "trap-3",
    pitfall: "Mixing up '+' and '-' in the Mirror formula vs Lens formula and Magnification.",
    whyStudentsFail: "Both formulas look similar, causing students to use 1/v - 1/u for mirrors or +v/u for mirror magnification.",
    correctConcept: "• Mirrors: 1/f = 1/v + 1/u (Plus) and m = -v/u (Minus). • Lenses: 1/f = 1/v - 1/u (Minus) and m = +v/u (Plus).",
    goldenRule: "Mirror has PLUS in formula, MINUS in magnification. Lens has MINUS in formula, PLUS in magnification."
  },
  {
    trapName: "Pre-assigning Signs to Unknowns",
    id: "trap-4",
    pitfall: "Manually inserting a negative sign for an unknown variable like v or f before solving.",
    whyStudentsFail: "Knowing that a concave mirror forms an inverted real image on the left, the student writes 1/(-v) = 1/f - 1/u, creating double-negative algebraic chaos.",
    correctConcept: "Only known given values get explicit Cartesian signs. Leave the unknown variable as a plain algebraic symbol; the equation will automatically yield the correct sign.",
    goldenRule: "Put signs on KNOWN quantities only; never assign a sign to the UNKNOWN variable being calculated."
  },
  {
    trapName: "Power Calculation Without Converting to Metres",
    id: "trap-5",
    pitfall: "Calculating Power as P = 1 / f(in cm) or forgetting the negative sign for concave lenses.",
    whyStudentsFail: "For f = 20 cm, writing P = 1/20 = 0.05 D instead of P = 100/20 = +5.0 D.",
    correctConcept: "Power P in Dioptres is the reciprocal of focal length in METRES (P = 1/f(m) = 100/f(cm)).",
    goldenRule: "Always use P = 100 / f(cm). Converging (convex) lens has +P; Diverging (concave) lens has -P."
  },
  {
    trapName: "Critical Angle & Direction of Propagation",
    id: "trap-6",
    pitfall: "Applying Total Internal Reflection formulas when light travels from Rarer to Denser media.",
    whyStudentsFail: "Students memorize sin C = 1/n and apply it blindly whenever light encounters an interface, even from air to glass.",
    correctConcept: "TIR is physically possible ONLY when light travels from an optically DENSER medium toward an optically RARER medium (n₁ > n₂) and angle of incidence i > C.",
    goldenRule: "No TIR is possible when light goes from Rarer to Denser (air to glass). TIR requires Denser to Rarer."
  },
  {
    trapName: "Immersion of Convex Lens in Denser Liquid",
    id: "trap-7",
    pitfall: "Assuming a convex lens always behaves as a converging lens regardless of the surrounding medium.",
    whyStudentsFail: "In air, convex lenses are converging. When placed in a liquid with μ_liquid > μ_glass (e.g. CS₂ with n = 1.65), students still calculate positive power.",
    correctConcept: "From Lens Maker: 1/f = (μ_lens/μ_med - 1)(1/R₁ - 1/R₂). If μ_med > μ_lens, the term (μ_lens/μ_med - 1) becomes negative, converting a convex lens into a DIVERGING lens!",
    goldenRule: "If medium is denser than glass (μ_med > μ_lens), lens flips nature: convex becomes diverging, concave becomes converging."
  },
  {
    trapName: "Cutting a Lens Vertically vs Horizontally",
    id: "trap-8",
    pitfall: "Confusing focal length and power changes when a lens is cut along vs perpendicular to the principal axis.",
    whyStudentsFail: "Students think any cut doubles the focal length.",
    correctConcept: "• Cut Transversely (normal to axis): Each half becomes plano-convex, f doubles (2f), power is halved (P/2), intensity unchanged (I). • Cut Longitudinally (along axis): Each half retains both curved surfaces, f is unchanged (f), power is unchanged (P), but aperture area is halved, so intensity is halved (I/2).",
    goldenRule: "Vertical Cut → f doubles (2f), P halves. Horizontal Cut → f unchanged, Intensity halves (I/2)."
  },
  {
    trapName: "Microscope vs Telescope Magnification Dependencies",
    id: "trap-9",
    pitfall: "Swapping the objective focal length requirements for microscope vs telescope.",
    whyStudentsFail: "Both instruments use objective and eyepiece lenses, causing students to forget whether large or small f_o is needed.",
    correctConcept: "• Microscope: M ≈ (L/f_o)(D/f_e). Needs both f_o and f_e as SMALL as possible (f_o ~ mm). • Telescope: M = f_o / f_e. Needs f_o as LARGE as possible and f_e as small as possible.",
    goldenRule: "Microscope: f_o in denominator (f_o must be tiny). Telescope: f_o in numerator (f_o must be huge)."
  },
  {
    trapName: "Magnification Sign Interpretation",
    id: "trap-10",
    pitfall: "Confusing negative magnification with a diminished image.",
    whyStudentsFail: "Seeing m = -3, students think the image is smaller because '-3 is less than 1'.",
    correctConcept: "The minus sign indicates ONLY the orientation (Real & Inverted). The magnitude |m| indicates the sizing scale (|m| = 3 > 1 means 3 times magnified).",
    goldenRule: "Sign (+ / -) gives Nature (Virtual / Real). Absolute value |m| gives Size (Enlarged / Diminished)."
  }
];

export const rayOpticsFormulaSheet: FormulaItem[] = [
  {
    name: "Paraxial Mirror Focal Length",
    formula: "f = R / 2",
    variables: "f = focal length, R = radius of curvature",
    siUnits: "metres (m)",
    conditions: "Valid for spherical mirrors under small aperture paraxial ray approximation."
  },
  {
    name: "Mirror Formula",
    formula: "1/f = 1/v + 1/u",
    variables: "f = focal length, v = image distance, u = object distance",
    siUnits: "metres (m)",
    conditions: "Universal for all spherical mirrors using standard Cartesian sign convention."
  },
  {
    name: "Mirror Linear Magnification",
    formula: "m = h_i / h_o = -v / u = f / (f - u) = (f - v) / f",
    variables: "m = magnification, h_i = image height, h_o = object height, u, v, f",
    siUnits: "Dimensionless",
    conditions: "Minus sign indicates inverted real image; positive indicates erect virtual image."
  },
  {
    name: "Absolute Refractive Index",
    formula: "n = c / v",
    variables: "n = absolute refractive index, c = speed in vacuum (3×10⁸ m/s), v = speed in medium",
    siUnits: "Dimensionless (n ≥ 1)",
    conditions: "Applies to any homogeneous isotropic dielectric medium."
  },
  {
    name: "Snell's Law of Refraction",
    formula: "n₁ sin i = n₂ sin r   ⇒   sin i / sin r = n₂ / n₁ = ¹n₂ = v₁ / v₂ = λ₁ / λ₂",
    variables: "n₁, n₂ = refractive indices, i = angle of incidence, r = angle of refraction, v = speed, λ = wavelength",
    siUnits: "Angles in degrees/radians, speeds in m/s, wavelengths in m",
    conditions: "Interface separating two transparent media. Angles measured from normal."
  },
  {
    name: "Lateral Shift in Glass Slab",
    formula: "d = [ t · sin(i - r) ] / cos r   ≈   t · i [ 1 - 1/n ] (for small i)",
    variables: "d = lateral displacement, t = slab thickness, i = incidence angle, r = refraction angle",
    siUnits: "metres (m)",
    conditions: "Parallel-faced rectangular refracting slab."
  },
  {
    name: "Apparent Depth & Upward Shift",
    formula: "h' = h / n;   Δh = h [ 1 - 1/n ];   h'_total = Σ(t_i / n_i)",
    variables: "h = real depth, h' = apparent depth, Δh = apparent shift, n = refractive index",
    siUnits: "metres (m)",
    conditions: "Near-normal viewing from rarer medium looking into denser medium."
  },
  {
    name: "Critical Angle & TIR Condition",
    formula: "sin C = n₂ / n₁ = 1 / n (for medium to air);   i > C",
    variables: "C = critical angle, n₁ = denser index, n₂ = rarer index, n = relative index",
    siUnits: "Degrees / Radians",
    conditions: "Light must travel from Denser into Rarer medium (n₁ > n₂)."
  },
  {
    name: "Refraction at Spherical Curved Interface",
    formula: "n₂ / v - n₁ / u = (n₂ - n₁) / R;   m = (n₁ · v) / (n₂ · u)",
    variables: "n₁ = incident medium index, n₂ = refractive medium index, u = object distance, v = image distance, R = radius",
    siUnits: "metres (m)",
    conditions: "Single spherical refracting surface under paraxial approximation."
  },
  {
    name: "Lens Maker's Formula",
    formula: "1/f = (μ_lens / μ_medium - 1) [ 1/R₁ - 1/R₂ ]",
    variables: "f = focal length, μ_lens = lens index, μ_medium = ambient index, R₁, R₂ = radii of curvature",
    siUnits: "metres (m)",
    conditions: "Thin lens in arbitrary surrounding medium."
  },
  {
    name: "Thin Lens Formula",
    formula: "1/f = 1/v - 1/u",
    variables: "f = focal length, v = image distance, u = object distance",
    siUnits: "metres (m)",
    conditions: "Thin lenses of negligible thickness."
  },
  {
    name: "Lens Linear Magnification",
    formula: "m = h_i / h_o = +v / u = f / (f + u) = (f - v) / f",
    variables: "m = linear magnification, h_i = image height, h_o = object height, u, v, f",
    siUnits: "Dimensionless",
    conditions: "Thin lens. Positive for virtual/erect; negative for real/inverted."
  },
  {
    name: "Power of Lens & Combination",
    formula: "P = 1 / f(m) = 100 / f(cm);   P_total = P₁ + P₂ + ...;   1/F = 1/f₁ + 1/f₂ + ...",
    variables: "P = power in Dioptres (D), F = equivalent focal length",
    siUnits: "Dioptre (D = m⁻¹)",
    conditions: "Thin lenses in coaxial physical contact."
  },
  {
    name: "Prism Deviation & Prism Formula",
    formula: "A = r₁ + r₂;   δ = i + e - A;   μ = sin[(A + δ_m)/2] / sin(A/2);   δ_thin = (μ - 1)A",
    variables: "A = prism angle, i = incident angle, e = emergence angle, δ = deviation, δ_m = minimum deviation",
    siUnits: "Degrees / Radians",
    conditions: "Triangular optical prism. Minimum deviation occurs when i = e, r₁ = r₂ = A/2."
  },
  {
    name: "Angular Dispersion & Dispersive Power",
    formula: "θ = δ_v - δ_r = (μ_v - μ_r) A;   ω = θ / δ_y = (μ_v - μ_r) / (μ_y - 1)",
    variables: "θ = angular dispersion, ω = dispersive power, μ_v, μ_r, μ_y = refractive indices",
    siUnits: "θ in radians/degrees, ω is dimensionless",
    conditions: "Small angle prism dispersion across visible spectrum."
  },
  {
    name: "Simple Microscope Magnification",
    formula: "M_near = 1 + D / f (Image at D = 25 cm);   M_normal = D / f (Image at infinity)",
    variables: "M = magnifying power, D = 25 cm (near point), f = focal length of lens",
    siUnits: "Dimensionless (X)",
    conditions: "Single convex magnifying lens."
  },
  {
    name: "Astronomical Telescope (Normal Adjustment)",
    formula: "M = f_o / f_e;   L = f_o + f_e;   M_near = (f_o / f_e) [ 1 + f_e / D ]",
    variables: "f_o = objective focal length, f_e = eyepiece focal length, L = tube length, D = 25 cm",
    siUnits: "M is dimensionless, L in metres (m)",
    conditions: "Refracting telescope observing distant objects at infinity."
  }
];

export const rayOpticsRapidRevision = {
  corePrinciples: [
    "Rectilinear Propagation: Light travels in straight lines in homogeneous media.",
    "Fermat's Principle of Least Time: Light travels along the path that takes the minimum time, yielding Snell's law and Reflection laws.",
    "Frequency Invariance: When light crosses an interface, frequency ν remains constant; speed v = c/n and wavelength λ = λ₀/n scale with index.",
    "Total Internal Reflection: Occurs strictly from Denser to Rarer media when angle of incidence i > Critical Angle C (sin C = 1/n).",
    "Principle of Reversibility: If the direction of a ray of light is reversed, it retraces its entire path identically."
  ],
  mustRememberFormulas: [
    "Mirror Formula: 1/f = 1/v + 1/u  |  m = -v/u = f/(f - u)",
    "Lens Formula: 1/f = 1/v - 1/u  |  m = +v/u = f/(f + u)",
    "Lens Maker: 1/f = (μ_lens/μ_med - 1)(1/R₁ - 1/R₂)",
    "Power: P = 100 / f(cm)  |  P_total = P₁ + P₂",
    "Apparent Shift: Δh = h(1 - 1/n)  |  R_spot = h / √(n² - 1)",
    "Prism Formula: μ = sin[(A + δ_m)/2] / sin(A/2)  |  δ_thin = (μ - 1)A",
    "Simple Microscope: M = 1 + D/f (strained)  |  M = D/f (relaxed)",
    "Astronomical Telescope: M = f_o / f_e  |  L = f_o + f_e (relaxed)"
  ],
  essentialSignRules: [
    "Origin: Pole P (mirrors) or Optical Centre O (lenses).",
    "Incident Light Direction: +X direction (to the right).",
    "Distances against incident light: Negative (-). Real object distance u is ALWAYS negative (-u).",
    "Concave mirror & Concave lens: ALWAYS negative focal length (f < 0).",
    "Convex mirror & Convex lens: ALWAYS positive focal length (f > 0).",
    "Real Image: Inverted (m < 0), v is negative for mirrors and positive for lenses.",
    "Virtual Image: Erect (m > 0), v is positive for mirrors and negative for lenses."
  ],
  highYieldShortcuts: [
    "Standard glass lens (μ = 1.5) in water (μ = 4/3): f_water = 4 × f_air.",
    "Equibiconvex glass lens (μ = 1.5) in air: f = R (focal length equals radius).",
    "Cut lens vertically into two: f doubles (2f), power halves (P/2).",
    "TIR at 45° in prism: Condition is μ > √2 ≈ 1.414.",
    "Minimum distance between real object and real image by convex lens: D_min = 4f (when u = 2f, v = 2f).",
    "Astronomical Telescope in normal adjustment: Tube length L = f_o + f_e, Magnification M = f_o / f_e."
  ]
};
