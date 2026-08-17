// Original worked numericals for Wave Optics covering the full NEET UG 2026 syllabus.
// Structured in rigorous 8-point format:
// 1. Given 2. Required 3. Concept 4. Formula 5. Substitution 6. Calculation 7. Final answer 8. NEET shortcut/insight

export interface WorkedNumerical {
  id: string;
  topicCategory: string;
  title: string;
  problem: string;
  given: string[];
  required: string;
  concept: string;
  formula: string;
  substitution: string;
  calculation: string[];
  finalAnswer: string;
  neetShortcut: string;
}

export const WAVE_OPTICS_NUMERICALS: WorkedNumerical[] = [
  {
    id: "num-wo-1",
    topicCategory: "Wavelength, Frequency & Speed in Media",
    title: "Change of Wavelength and Frequency across Refractive Boundary",
    problem: "A monochromatic yellow light beam of wavelength 6000 Å in vacuum enters a water tank of refractive index μ = 4/3. Calculate (a) the speed of light in water, (b) the wavelength of light in water, and (c) the frequency of light in water.",
    given: [
      "Wavelength in vacuum λ₀ = 6000 Å = 6000 × 10⁻¹⁰ m = 6 × 10⁻⁷ m",
      "Refractive index of water μ = 4/3",
      "Speed of light in vacuum c = 3 × 10⁸ m/s"
    ],
    required: "Speed in water (v), wavelength in water (λ_w), and frequency (f).",
    concept: "Frequency is a source property and remains constant upon entering any medium. Speed decreases as v = c/μ and wavelength decreases as λ = λ₀/μ.",
    formula: "v = c / μ,  λ = λ₀ / μ,  f = c / λ₀ = v / λ",
    substitution: "v = (3 × 10⁸) / (4/3);  λ_w = (6000 Å) / (4/3);  f = (3 × 10⁸) / (6 × 10⁻⁷)",
    calculation: [
      "1. Speed v = 3 × 10⁸ × (3/4) = 2.25 × 10⁸ m/s",
      "2. Wavelength λ_w = 6000 × (3/4) = 4500 Å = 4.5 × 10⁻⁷ m",
      "3. Frequency f = (3 × 10⁸) / (6 × 10⁻⁷) = 5.0 × 10¹⁴ Hz"
    ],
    finalAnswer: "Speed v = 2.25 × 10⁸ m/s, Wavelength λ_w = 4500 Å, Frequency f = 5.0 × 10¹⁴ Hz (Unchanged).",
    neetShortcut: "NEET Trap: Frequency NEVER changes during refraction. Color is determined by frequency, but wavelength inside medium compresses directly by factor 1/μ."
  },
  {
    id: "num-wo-2",
    topicCategory: "Path Difference to Phase Difference & Intensity",
    title: "Resultant Intensity at a Given Path Difference",
    problem: "Two coherent light sources of equal intensity I₀ interfere at a point on a screen. If the optical path difference between them at that point is λ/6, find the ratio of the resultant intensity at this point to the maximum intensity on the screen.",
    given: [
      "Individual source intensities I₁ = I₂ = I₀",
      "Path difference Δ = λ / 6"
    ],
    required: "Ratio of resultant intensity I to maximum intensity I_max (I / I_max).",
    concept: "Phase difference φ = (2π / λ) · Δ. For equal sources, I = 4I₀ cos²(φ/2) and I_max = 4I₀, so I / I_max = cos²(φ/2).",
    formula: "φ = (2π / λ) · Δ ;   I / I_max = cos²(φ / 2)",
    substitution: "φ = (2π / λ) × (λ / 6) = π / 3 rad (60°) ;  φ / 2 = π / 6 = 30°",
    calculation: [
      "1. Phase difference φ = 2π / 6 = π/3 rad",
      "2. Half-phase φ/2 = π/6 rad (30°)",
      "3. cos(30°) = √3 / 2",
      "4. I / I_max = cos²(30°) = (√3 / 2)² = 3 / 4 = 0.75"
    ],
    finalAnswer: "Resultant intensity I = 0.75 I_max (or ratio = 3 : 4).",
    neetShortcut: "Direct Table Shortcut for equal sources: Δ = λ/6 ⇒ φ = 60° ⇒ I = 0.75 I_max; Δ = λ/4 ⇒ φ = 90° ⇒ I = 0.50 I_max; Δ = λ/3 ⇒ φ = 120° ⇒ I = 0.25 I_max; Δ = λ/2 ⇒ φ = 180° ⇒ I = 0."
  },
  {
    id: "num-wo-3",
    topicCategory: "Ratio of Maximum to Minimum Intensity",
    title: "Intensity and Slit Width Ratios",
    problem: "In Young's double-slit experiment, the ratio of the widths of the two slits is 4 : 1. Calculate (a) the ratio of the amplitudes of the light waves, (b) the ratio of the individual intensities, and (c) the ratio of maximum to minimum intensity in the interference fringe pattern.",
    given: [
      "Ratio of slit widths: w₁ / w₂ = 4 / 1"
    ],
    required: "A₁/A₂, I₁/I₂, and I_max/I_min.",
    concept: "Slit width is directly proportional to intensity: w ∝ I ∝ A². Therefore, A ∝ √w.",
    formula: "I₁ / I₂ = w₁ / w₂ ;  A₁ / A₂ = √(I₁ / I₂) ;  I_max / I_min = (A₁ + A₂)² / (A₁ - A₂)² = (√I₁ + √I₂)² / (√I₁ - √I₂)²",
    substitution: "I₁ / I₂ = 4 / 1 ⇒ A₁ / A₂ = √4 / √1 = 2 / 1. Let A₁ = 2, A₂ = 1.",
    calculation: [
      "1. Amplitude ratio A₁ / A₂ = 2 / 1",
      "2. Individual intensity ratio I₁ / I₂ = 4 / 1",
      "3. I_max = (A₁ + A₂)² = (2 + 1)² = 3² = 9",
      "4. I_min = (A₁ - A₂)² = (2 - 1)² = 1² = 1",
      "5. I_max / I_min = 9 / 1"
    ],
    finalAnswer: "A₁ : A₂ = 2 : 1, I₁ : I₂ = 4 : 1, I_max : I_min = 9 : 1.",
    neetShortcut: "Formula Shortcut: If A₁/A₂ = r, then I_max / I_min = ((r + 1)/(r - 1))². Here r = 2 ⇒ ((2+1)/(2-1))² = 3² = 9/1."
  },
  {
    id: "num-wo-4",
    topicCategory: "YDSE Fringe Width & Parameter Scaling",
    title: "Finding Slit Separation from Observed Fringe Width",
    problem: "In YDSE using monochromatic light of wavelength 500 nm, fringes are obtained on a screen placed 1.2 m away from the slits. The distance between the central bright fringe and the 5th bright fringe is measured to be 1.5 cm. Find (a) the fringe width β and (b) the slit separation d in mm.",
    given: [
      "Wavelength λ = 500 nm = 500 × 10⁻⁹ m = 5 × 10⁻⁷ m",
      "Screen distance D = 1.2 m",
      "Position of 5th bright fringe y₅ = 1.5 cm = 1.5 × 10⁻² m"
    ],
    required: "Fringe width β and slit separation d.",
    concept: "The position of the nth bright fringe is y_n = n·β. Fringe width is β = λD/d, which gives d = λD/β.",
    formula: "β = y_n / n ;   d = λD / β",
    substitution: "β = (1.5 × 10⁻² m) / 5 = 3 × 10⁻³ m = 3 mm.  d = (5 × 10⁻⁷ × 1.2) / (3 × 10⁻³)",
    calculation: [
      "1. Fringe width β = 1.5 cm / 5 = 0.3 cm = 3 mm = 3 × 10⁻³ m",
      "2. Slit separation d = (5 × 10⁻⁷ × 1.2) / (3 × 10⁻³) = (6.0 × 10⁻⁷) / (3 × 10⁻³)",
      "3. d = 2.0 × 10⁻⁴ m = 0.2 mm"
    ],
    finalAnswer: "Fringe width β = 3 mm, Slit separation d = 0.2 mm (2 × 10⁻⁴ m).",
    neetShortcut: "Keep units in meters during intermediate algebra: (5 × 10⁻⁷ × 1.2) / 3 × 10⁻³ = 2 × 10⁻⁴ m = 0.2 mm."
  },
  {
    id: "num-wo-5",
    topicCategory: "Fringe Shift / Parameter Scaling in YDSE",
    title: "Changing Screen Distance and Fringe Separation",
    problem: "In a Young's double-slit experiment, the fringe width is 0.4 mm. If the distance of the screen from the slits is increased by 25% and the slit separation is reduced to half its original value, what will be the new fringe width?",
    given: [
      "Initial fringe width β₁ = 0.4 mm",
      "New screen distance D₂ = D₁ + 0.25 D₁ = 1.25 D₁ = (5/4) D₁",
      "New slit separation d₂ = d₁ / 2 = 0.5 d₁"
    ],
    required: "New fringe width β₂.",
    concept: "Fringe width is directly proportional to D and inversely proportional to d: β ∝ D / d.",
    formula: "β₂ / β₁ = (D₂ / D₁) × (d₁ / d₂)",
    substitution: "β₂ / 0.4 mm = (1.25) × (1 / 0.5) = 1.25 × 2 = 2.5",
    calculation: [
      "1. Ratio β₂ / β₁ = (5/4) / (1/2) = (5/4) × 2 = 5/2 = 2.5",
      "2. New fringe width β₂ = 2.5 × β₁ = 2.5 × 0.4 mm = 1.0 mm"
    ],
    finalAnswer: "New fringe width β₂ = 1.0 mm.",
    neetShortcut: "Scaling factor: D becomes 1.25×, d becomes 0.5× ⇒ β changes by 1.25 / 0.5 = 2.5×. 0.4 × 2.5 = 1.0 mm in 5 seconds."
  },
  {
    id: "num-wo-6",
    topicCategory: "YDSE in Liquid Medium",
    title: "Immersion of YDSE Apparatus in Liquid",
    problem: "In YDSE with light of wavelength λ = 600 nm in air, the angular fringe width is found to be 0.20° on a distant screen. When the entire apparatus is immersed in a liquid, the angular fringe width becomes 0.15°. Find the refractive index of the liquid.",
    given: [
      "Angular fringe width in air θ_air = 0.20°",
      "Angular fringe width in liquid θ_liq = 0.15°"
    ],
    required: "Refractive index of the liquid μ.",
    concept: "Angular fringe width is θ = β / D = λ / d. In a medium of refractive index μ, the wavelength becomes λ_liq = λ / μ, so θ_liq = θ_air / μ.",
    formula: "μ = θ_air / θ_liq",
    substitution: "μ = 0.20° / 0.15° = 20 / 15",
    calculation: [
      "1. μ = 20 / 15 = 4 / 3 ≈ 1.33"
    ],
    finalAnswer: "Refractive index of liquid μ = 4/3 ≈ 1.33 (water).",
    neetShortcut: "Angular fringe width θ does NOT depend on screen distance D! θ = λ/d. Simply divide the two angles: 0.20 / 0.15 = 1.33."
  },
  {
    id: "num-wo-7",
    topicCategory: "Overlapping of Fringes of Two Wavelengths",
    title: "Coincidence Position of Two Wavelengths in YDSE",
    problem: "In YDSE, light containing two wavelengths λ₁ = 600 nm and λ₂ = 480 nm is used. Find the minimum distance from the central bright fringe where a bright fringe of λ₁ coincides with a bright fringe of λ₂ on a screen placed at D = 1.0 m with slit separation d = 1.0 mm.",
    given: [
      "Wavelength λ₁ = 600 nm = 6 × 10⁻⁷ m",
      "Wavelength λ₂ = 480 nm = 4.8 × 10⁻⁷ m",
      "Screen distance D = 1.0 m",
      "Slit separation d = 1.0 mm = 10⁻³ m"
    ],
    required: "Smallest non-zero distance y from center where bright fringes coincide.",
    concept: "At the position of coincidence, the linear distance y is identical for both: y = n₁λ₁D/d = n₂λ₂D/d ⇒ n₁λ₁ = n₂λ₂.",
    formula: "n₁ / n₂ = λ₂ / λ₁ ;  y_min = n₁ λ₁ D / d",
    substitution: "n₁ / n₂ = 480 / 600 = 4 / 5. Smallest integers: n₁ = 4 (for λ₁) and n₂ = 5 (for λ₂).",
    calculation: [
      "1. n₁ / n₂ = 4 / 5 ⇒ 4th bright fringe of 600 nm coincides with 5th bright fringe of 480 nm",
      "2. y = (n₁ λ₁ D) / d = (4 × 6 × 10⁻⁷ m × 1.0 m) / (10⁻³ m)",
      "3. y = 24 × 10⁻⁴ m = 2.4 mm"
    ],
    finalAnswer: "Coincidence occurs at distance y = 2.4 mm from the central maximum.",
    neetShortcut: "Cross-multiplication: n₁ × 600 = n₂ × 480 ⇒ n₁/n₂ = 4/5. Use LCM(600, 480) = 2400 nm. y = 2400 × 10⁻⁹ × 1 / 10⁻³ = 2.4 mm."
  },
  {
    id: "num-wo-8",
    topicCategory: "Single-Slit Diffraction Minima Condition",
    title: "Angular Spread of First Diffraction Minimum",
    problem: "A parallel beam of monochromatic light of wavelength 589 nm is incident normally on a narrow single slit of width a = 0.20 mm. The diffraction pattern is observed on a screen placed at D = 2.0 m. Calculate (a) the angular half-width of the central maximum in radians and (b) the linear width of the central maximum on the screen.",
    given: [
      "Wavelength λ = 589 nm = 5.89 × 10⁻⁷ m",
      "Slit width a = 0.20 mm = 2.0 × 10⁻⁴ m",
      "Screen distance D = 2.0 m"
    ],
    required: "Angular half-width θ₁, total angular width 2θ₁, and linear width 2y₁.",
    concept: "For single-slit diffraction, first minimum occurs at a sin θ₁ = λ ⇒ θ₁ ≈ λ/a. Central maximum extends from -θ₁ to +θ₁, so its total angular width is 2λ/a and total linear width is 2λD/a.",
    formula: "θ₁ = λ / a ;   Total Linear Width W = 2λD / a",
    substitution: "θ₁ = (5.89 × 10⁻⁷) / (2.0 × 10⁻⁴) ;   W = 2 × (5.89 × 10⁻⁷ × 2.0) / (2.0 × 10⁻⁴)",
    calculation: [
      "1. Angular half-width θ₁ = 2.945 × 10⁻³ rad",
      "2. Total angular width 2θ₁ = 5.89 × 10⁻³ rad",
      "3. Total linear width W = 2 × θ₁ × D = 2 × (2.945 × 10⁻³) × 2.0 = 1.178 × 10⁻² m = 11.78 mm ≈ 1.18 cm"
    ],
    finalAnswer: "Angular half-width = 2.945 × 10⁻³ rad, Linear width of central maximum = 11.78 mm (1.18 cm).",
    neetShortcut: "Remember: Linear width of central maximum = 2λD/a (TWICE the width of a secondary maximum λD/a)."
  },
  {
    id: "num-wo-9",
    topicCategory: "Diffraction Slit Width Calculation",
    title: "Finding Slit Width for Given Linear Central Maximum",
    problem: "Light of wavelength 600 nm illuminates a single narrow slit. The central maximum in the Fraunhofer diffraction pattern on a screen 1.5 m away has a width of 3.0 mm. Calculate the width of the slit.",
    given: [
      "Wavelength λ = 600 nm = 6 × 10⁻⁷ m",
      "Screen distance D = 1.5 m",
      "Width of central maximum W = 3.0 mm = 3 × 10⁻³ m"
    ],
    required: "Slit width a.",
    concept: "Linear width of central maximum W = 2λD / a. Rearranging gives a = 2λD / W.",
    formula: "a = 2λD / W",
    substitution: "a = (2 × 6 × 10⁻⁷ m × 1.5 m) / (3.0 × 10⁻³ m)",
    calculation: [
      "1. Numerator = 2 × 6 × 10⁻⁷ × 1.5 = 1.8 × 10⁻⁶",
      "2. a = (1.8 × 10⁻⁶) / (3.0 × 10⁻³) = 0.6 × 10⁻³ m = 0.6 mm"
    ],
    finalAnswer: "Slit width a = 0.6 mm (6.0 × 10⁻⁴ m).",
    neetShortcut: "Do not forget the factor of 2 in central maximum width W = 2λD/a! If you forget it, you will get 0.3 mm (a classic NEET trap option)."
  },
  {
    id: "num-wo-10",
    topicCategory: "Malus's Law & Sequential Polaroids",
    title: "Three Polaroids with Intermediate Angle",
    problem: "Unpolarised light of intensity I_in = 64 W/m² is incident on a system of three polaroids P₁, P₂, and P₃. The transmission axis of P₃ is perpendicular to that of P₁ (crossed polaroids). The axis of P₂ is oriented at 30° to that of P₁. Find the final transmitted intensity after P₃.",
    given: [
      "Incident unpolarised intensity I_in = 64 W/m²",
      "Angle between P₁ and P₂: θ₁₂ = 30°",
      "Angle between P₁ and P₃: 90° ⇒ Angle between P₂ and P₃: θ₂₃ = 90° - 30° = 60°"
    ],
    required: "Final transmitted intensity I₃.",
    concept: "1. Unpolarised light through first polaroid: I₁ = ½ I_in.\n2. Through P₂: I₂ = I₁ cos²(θ₁₂).\n3. Through P₃: I₃ = I₂ cos²(θ₂₃).",
    formula: "I₁ = ½ I_in ;  I₂ = I₁ cos²(30°) ;  I₃ = I₂ cos²(60°)",
    substitution: "I₁ = 64 / 2 = 32 W/m² ;  I₂ = 32 × cos²(30°) = 32 × (√3/2)² ;  I₃ = I₂ × cos²(60°) = I₂ × (1/2)²",
    calculation: [
      "1. I₁ = 32 W/m²",
      "2. I₂ = 32 × (3/4) = 24 W/m²",
      "3. I₃ = 24 × (1/4) = 6 W/m²"
    ],
    finalAnswer: "Final transmitted intensity I₃ = 6 W/m².",
    neetShortcut: "Direct formula for 3 polaroids with middle at θ to first: I_final = (I_in / 8) · sin²(2θ). Here θ = 30° ⇒ 2θ = 60° ⇒ sin²(60°) = 3/4. I_final = (64/8) × (3/4) = 8 × 0.75 = 6 W/m²!"
  },
  {
    id: "num-wo-11",
    topicCategory: "Brewster's Law & Critical Angle Link",
    title: "Brewster Angle and Critical Angle Relationship",
    problem: "For a certain transparent optical material, the Brewster polarising angle for light incident from air is found to be 60°. Calculate (a) the refractive index of the medium, (b) the angle of refraction at Brewster incidence, and (c) the critical angle for total internal reflection inside this medium.",
    given: [
      "Brewster polarising angle i_B = 60°"
    ],
    required: "Refractive index μ, angle of refraction r, and critical angle C.",
    concept: "By Brewster's law, μ = tan i_B. At Brewster angle, i_B + r = 90° ⇒ r = 90° - i_B. Critical angle is given by sin C = 1/μ.",
    formula: "μ = tan(i_B) ;   r = 90° - i_B ;   sin C = 1 / μ",
    substitution: "μ = tan(60°) = √3 ≈ 1.732 ;  r = 90° - 60° = 30° ;  sin C = 1 / √3",
    calculation: [
      "1. Refractive index μ = tan(60°) = √3 ≈ 1.732",
      "2. Angle of refraction r = 90° - 60° = 30°",
      "3. Critical angle sin C = 1 / √3 ≈ 0.577 ⇒ C = sin⁻¹(1/√3) ≈ 35.26° (or sin C = 1/√3)"
    ],
    finalAnswer: "Refractive index μ = √3 (1.732), Angle of refraction r = 30°, Critical angle C = sin⁻¹(1/√3).",
    neetShortcut: "Universal link: sin C = 1 / tan(i_B) = cot(i_B). Here cot(60°) = 1/√3, so sin C = 1/√3 instantly."
  },
  {
    id: "num-wo-12",
    topicCategory: "Combination of Interference and Diffraction",
    title: "Number of Interference Fringes within Central Diffraction Maximum",
    problem: "In a double-slit experiment, the slit separation is d = 1.0 mm and the width of each individual slit is a = 0.2 mm. How many complete bright interference fringes are contained within the central diffraction maximum?",
    given: [
      "Slit separation d = 1.0 mm",
      "Slit width a = 0.2 mm",
      "Screen distance D and wavelength λ are identical for both"
    ],
    required: "Number of interference fringes N within the central diffraction envelope.",
    concept: "The angular width of the central diffraction maximum is 2θ_diff = 2λ/a. The angular fringe width of an interference fringe is θ_int = λ/d. The number of interference fringes is the ratio N = 2θ_diff / θ_int = (2λ/a) / (λ/d) = 2d / a.",
    formula: "N = 2d / a",
    substitution: "N = 2 × (1.0 mm) / (0.2 mm)",
    calculation: [
      "1. N = 2.0 / 0.2 = 10",
      "2. Interference orders: Central fringe (n = 0) + 4 fringes on left (n = 1, 2, 3, 4) + 4 fringes on right (n = 1, 2, 3, 4) = 9 full fringes. The 5th interference bright fringe (n = d/a = 5) falls exactly at the 1st diffraction minimum and is extinguished (missing order)!"
    ],
    finalAnswer: "Ratio = 2d/a = 10 (giving 9 visible bright fringes inside, with the 5th order being a missing order).",
    neetShortcut: "Missing order condition: n_int = m_diff · (d / a). Since d/a = 5, the 5th, 10th, 15th bright interference fringes will have zero intensity (missing orders)."
  }
];
