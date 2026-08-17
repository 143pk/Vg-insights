// 8+ Complete Original Solved Numericals for NEET UG 2026 Physics - Electromagnetic Waves

export interface WorkedNumerical {
  id: string;
  title: string;
  problem: string;
  given: string[];
  required: string;
  concept: string;
  formula: string;
  substitution: string;
  calculation: string;
  finalAnswer: string;
  neetShortcut: string;
}

export const emNumericals: WorkedNumerical[] = [
  {
    id: "num-1",
    title: "Numerical 1: Displacement Current in a Circular Parallel Plate Capacitor",
    problem: "A parallel plate capacitor with circular plates of radius R = 10 cm has a capacitance C = 100 pF. It is connected to a 230 V AC supply with an angular frequency ω = 300 rad/s. Find: (a) the rms value of the conduction current, and (b) the displacement current at a distance r = 5 cm from the central axis between the plates.",
    given: [
      "Radius of plates R = 10 cm = 0.1 m",
      "Capacitance C = 100 pF = 100 × 10⁻¹² F = 10⁻¹⁰ F",
      "rms Voltage V_rms = 230 V",
      "Angular frequency ω = 300 rad/s",
      "Distance from axis r = 5 cm = 0.05 m"
    ],
    required: "(a) I_rms (conduction current), and (b) I_d(r) inside the area of radius r",
    concept: "Capacitive reactance X_C = 1/(ωC). By Maxwell's continuity theorem, the total displacement current between the entire plates equals the conduction current I_c. Inside a circular sub-region of radius r < R, the electric flux is proportional to the area πr², so I_d(r) = (r²/R²) · I_d(total).",
    formula: "X_C = 1/(ωC),  I_rms = V_rms / X_C = V_rms · ω · C,  I_d(r) = (r / R)² · I_c",
    substitution: "I_rms = 230 × 300 × 10⁻¹⁰ A\nI_d(r) = (0.05 / 0.1)² × I_rms = (1/2)² × I_rms = 0.25 × I_rms",
    calculation: "1. I_rms = 230 × 300 × 10⁻¹⁰ = 6.9 × 10⁴ × 10⁻¹⁰ = 6.9 × 10⁻⁶ A = 6.9 μA.\n2. Total displacement current I_d(total) = I_rms = 6.9 μA.\n3. Fraction enclosed by radius r = 5 cm: (5/10)² = 1/4 = 0.25.\n4. I_d(r=5cm) = 0.25 × 6.9 μA = 1.725 μA.",
    finalAnswer: "(a) I_rms = 6.9 μA,  (b) I_d at r = 5 cm is 1.725 μA.",
    neetShortcut: "For uniform E-field between circular plates: I_d(r) / I_d(total) = r² / R². Since r = R/2, the answer is directly (1/2)² = 1/4 of total I_c = 1.725 μA."
  },
  {
    id: "num-2",
    title: "Numerical 2: Electric and Magnetic Field Amplitudes in Plane EM Wave",
    problem: "In a plane electromagnetic wave propagating in vacuum along the +x direction, the electric field oscillates sinusoidally with an amplitude E₀ = 48 V/m and frequency f = 2.0 × 10¹⁰ Hz. (a) Calculate the wavelength λ. (b) Find the amplitude of the oscillating magnetic field B₀. (c) Write the vector equations for E and B if the electric field oscillates along the y-axis.",
    given: [
      "E₀ = 48 V/m",
      "f = 2.0 × 10¹⁰ Hz",
      "Speed in vacuum c = 3.0 × 10⁸ m/s",
      "Propagation direction = +x (î)",
      "E polarization = +y (ĵ)"
    ],
    required: "(a) Wavelength λ, (b) Magnetic field amplitude B₀, (c) Vector wave functions E(x,t) and B(x,t)",
    concept: "In vacuum, c = fλ ⇒ λ = c/f. The field amplitudes satisfy E₀ / B₀ = c ⇒ B₀ = E₀ / c. Since propagation is along +x (î) and E is along +y (ĵ), the magnetic field B must oscillate along +z (k̂) because Ê × B̂ = ĵ × k̂ = î.",
    formula: "λ = c / f,  B₀ = E₀ / c,  k = 2π / λ,  ω = 2πf\nE(x,t) = E₀ sin(kx - ωt) ĵ\nB(x,t) = B₀ sin(kx - ωt) k̂",
    substitution: "λ = (3.0 × 10⁸) / (2.0 × 10¹⁰) m\nB₀ = 48 / (3.0 × 10⁸) T\nk = 2π / 0.015 = 418.9 rad/m\nω = 2π × (2.0 × 10¹⁰) = 1.26 × 10¹¹ rad/s",
    calculation: "1. λ = 1.5 × 10⁻² m = 1.5 cm = 0.015 m (Microwave region).\n2. B₀ = 48 / (3 × 10⁸) = 1.6 × 10⁻⁷ T = 0.16 μT.\n3. k = 2π / 0.015 ≈ 418.9 rad/m.\n4. E(x,t) = 48 sin(4.19 × 10² x - 1.26 × 10¹¹ t) ĵ V/m.\n5. B(x,t) = 1.6 × 10⁻⁷ sin(4.19 × 10² x - 1.26 × 10¹¹ t) k̂ T.",
    finalAnswer: "(a) λ = 1.5 cm (0.015 m),  (b) B₀ = 1.6 × 10⁻⁷ T,  (c) E along ĵ and B along k̂.",
    neetShortcut: "Always check Ê × B̂ = propagation direction. Here ĵ × k̂ = +î (matches +x direction). If propagation was -x, B would be -k̂."
  },
  {
    id: "num-3",
    title: "Numerical 3: Intensity and Energy Density of Solar Radiation",
    problem: "The average intensity of sunlight reaching the upper atmosphere of Earth is I = 1380 W/m² (the Solar Constant). Calculate: (a) the total average energy density ⟨u⟩ of this radiation, (b) the peak electric field amplitude E₀, and (c) the peak magnetic field amplitude B₀.",
    given: [
      "Intensity I = 1380 W/m²",
      "Speed of light c = 3.0 × 10⁸ m/s",
      "Permittivity of vacuum ε₀ = 8.854 × 10⁻¹² C²/(N·m²)",
      "Permeability of vacuum μ₀ = 4π × 10⁻⁷ T·m/A"
    ],
    required: "(a) Average energy density ⟨u⟩, (b) E₀, (c) B₀",
    concept: "Intensity is related to energy density by I = ⟨u⟩ · c. Furthermore, ⟨u⟩ = ½ ε₀ E₀², which allows determining E₀. Then B₀ = E₀ / c.",
    formula: "⟨u⟩ = I / c\nE₀ = √(2 · I / (ε₀ · c)) = √(2 · ⟨u⟩ / ε₀)\nB₀ = E₀ / c",
    substitution: "⟨u⟩ = 1380 / (3.0 × 10⁸) J/m³\nE₀ = √[ 2 × 1380 / (8.854 × 10⁻¹² × 3.0 × 10⁸) ] V/m\nB₀ = E₀ / (3.0 × 10⁸) T",
    calculation: "1. ⟨u⟩ = 1380 / (3 × 10⁸) = 4.60 × 10⁻⁶ J/m³.\n2. E₀² = (2 × 1380) / (8.854 × 10⁻¹² × 3 × 10⁸) = 2760 / (2.656 × 10⁻³) = 1.039 × 10⁶.\n   E₀ = √(1.039 × 10⁶) ≈ 1019.4 V/m ≈ 1.02 × 10³ V/m.\n3. B₀ = 1019.4 / (3 × 10⁸) ≈ 3.40 × 10⁻⁶ T = 3.40 μT.",
    finalAnswer: "(a) ⟨u⟩ = 4.60 × 10⁻⁶ J/m³,  (b) E₀ = 1019 V/m,  (c) B₀ = 3.40 × 10⁻⁶ T.",
    neetShortcut: "Use E_rms = √(I / (ε₀ c)) and E₀ = √2 · E_rms. E_rms ≈ √(1380 / 0.00265) = √520754 ≈ 721.6 V/m. Then E₀ = 721.6 × 1.414 = 1020 V/m."
  },
  {
    id: "num-4",
    title: "Numerical 4: Radiation Force & Pressure on Absorbing vs Reflecting Surfaces",
    problem: "A parallel beam of light with power P = 60 W is incident normally on a flat surface for t = 30 minutes. Calculate the total momentum delivered to the surface and the average force exerted if the surface is: (a) a completely absorbing black surface, and (b) a completely reflecting mirror.",
    given: [
      "Power P = 60 W = 60 J/s",
      "Time t = 30 min = 30 × 60 s = 1800 s",
      "Speed of light c = 3.0 × 10⁸ m/s"
    ],
    required: "Total momentum p and radiation force F for (a) complete absorption and (b) complete reflection.",
    concept: "Total radiant energy delivered U = P · t. For complete absorption, momentum p_abs = U / c and force F_abs = P / c. For complete reflection, momentum doubles due to rebound: p_refl = 2U / c and force F_refl = 2P / c.",
    formula: "U = P · t,  p_abs = U / c,  F_abs = P / c\np_refl = 2U / c = 2 p_abs,  F_refl = 2P / c = 2 F_abs",
    substitution: "U = 60 × 1800 = 1.08 × 10⁵ J\nF_abs = 60 / (3.0 × 10⁸) N\np_abs = (1.08 × 10⁵) / (3.0 × 10⁸) kg·m/s",
    calculation: "1. Total energy U = 108,000 J = 1.08 × 10⁵ J.\n2. (a) Absorbing surface:\n   - Momentum p_abs = (1.08 × 10⁵) / (3 × 10⁸) = 3.6 × 10⁻⁴ kg·m/s (or N·s).\n   - Force F_abs = 60 / (3 × 10⁸) = 2.0 × 10⁻⁷ N.\n3. (b) Reflecting surface:\n   - Momentum p_refl = 2 × 3.6 × 10⁻⁴ = 7.2 × 10⁻⁴ kg·m/s.\n   - Force F_refl = 2 × 2.0 × 10⁻⁷ = 4.0 × 10⁻⁷ N.",
    finalAnswer: "(a) Absorption: p = 3.6 × 10⁻⁴ N·s, F = 2.0 × 10⁻⁷ N.\n(b) Reflection: p = 7.2 × 10⁻⁴ N·s, F = 4.0 × 10⁻⁷ N.",
    neetShortcut: "Force is independent of exposure time: F_abs = P/c and F_refl = 2P/c. Just compute 60/(3×10⁸) = 2×10⁻⁷ N directly in 5 seconds!"
  },
  {
    id: "num-5",
    title: "Numerical 5: EM Wave Propagation in a Non-Magnetic Dielectric Medium",
    problem: "An electromagnetic wave of frequency f = 5.0 × 10¹⁴ Hz enters a non-magnetic dielectric medium having relative permittivity (dielectric constant) ε_r = 4.0 and relative permeability μ_r = 1.0. Calculate: (a) the speed of the wave in this medium, (b) the refractive index of the medium, (c) the wavelength of the wave in vacuum and inside the medium, and (d) the frequency of the wave inside the medium.",
    given: [
      "f = 5.0 × 10¹⁴ Hz",
      "ε_r = 4.0",
      "μ_r = 1.0 (non-magnetic)",
      "c = 3.0 × 10⁸ m/s"
    ],
    required: "(a) Speed v, (b) Refractive index n, (c) λ_vacuum and λ_medium, (d) Frequency f_medium",
    concept: "Speed of EM wave in a medium is v = 1 / √(με) = c / √(μ_r ε_r). The refractive index is n = c/v = √(μ_r ε_r). Frequency is an intrinsic property of the source and NEVER changes on entering another medium. Wavelength inside the medium reduces to λ' = λ_vacuum / n = v / f.",
    formula: "v = c / √(μ_r ε_r),  n = √(μ_r ε_r),  λ_vac = c / f,  λ_med = v / f = λ_vac / n",
    substitution: "n = √(1.0 × 4.0) = √4.0 = 2.0\nv = (3.0 × 10⁸) / 2.0 m/s\nλ_vac = (3.0 × 10⁸) / (5.0 × 10¹⁴) m\nλ_med = λ_vac / 2.0",
    calculation: "1. Refractive index n = √4 = 2.0.\n2. Speed in medium v = 3.0 × 10⁸ / 2.0 = 1.5 × 10⁸ m/s.\n3. λ_vacuum = 3.0 × 10⁸ / (5.0 × 10¹⁴) = 6.0 × 10⁻⁷ m = 600 nm (Orange-Yellow light).\n4. λ_medium = 600 nm / 2 = 300 nm (UV wavelength range, but perceived color remains determined by frequency!).\n5. Frequency in medium f_medium = 5.0 × 10¹⁴ Hz (UNCHANGED).",
    finalAnswer: "(a) v = 1.5 × 10⁸ m/s,  (b) n = 2.0,  (c) λ_vac = 600 nm, λ_med = 300 nm,  (d) f_med = 5.0 × 10¹⁴ Hz.",
    neetShortcut: "For non-magnetic media (μ_r = 1), n = √ε_r. Here n = √4 = 2. Everything cuts in half (v = c/2, λ = λ₀/2), except frequency f which remains 100% constant."
  },
  {
    id: "num-6",
    title: "Numerical 6: Identifying Direction of Wave Propagation and Fields",
    problem: "The magnetic field in a plane electromagnetic wave is given by:\nB_y = 2 × 10⁻⁷ sin(0.5 × 10³ x + 1.5 × 10¹¹ t) T.\n(a) What is the wavelength and frequency of the wave?\n(b) In which direction is the wave travelling?\n(c) Write an expression for the electric field vector E.",
    given: [
      "B(x,t) = 2 × 10⁻⁷ sin(0.5 × 10³ x + 1.5 × 10¹¹ t) ĵ T",
      "Wave number k = 0.5 × 10³ rad/m = 500 rad/m",
      "Angular frequency ω = 1.5 × 10¹¹ rad/s",
      "B₀ = 2 × 10⁻⁷ T along +y (ĵ)"
    ],
    required: "(a) λ and f, (b) Direction of propagation, (c) Vector expression for E",
    concept: "Standard wave form is sin(kx + ωt). The plus sign between kx and ωt means the wave is travelling in the NEGATIVE x-direction (-î). Wavelength λ = 2π/k, frequency f = ω/(2π). The electric field amplitude is E₀ = c · B₀. Since wave travels along -î and B is along +ĵ, E must be along +k̂ because Ê × B̂ = k̂ × ĵ = -î.",
    formula: "λ = 2π / k,  f = ω / (2π),  E₀ = c · B₀,  v̂ = (Ê × B̂)",
    substitution: "λ = 2π / 500 m\nf = (1.5 × 10¹¹) / (2π) Hz\nE₀ = (3.0 × 10⁸) × (2 × 10⁻⁷) V/m",
    calculation: "1. λ = 2 × 3.1416 / 500 = 6.283 / 500 = 0.01257 m = 1.26 cm = 1.26 × 10⁻² m.\n2. f = 1.5 × 10¹¹ / (2 × 3.1416) = 2.39 × 10¹⁰ Hz = 23.9 GHz.\n3. Direction: The term is (kx + ωt) ⇒ propagating in -x direction (-î).\n4. E₀ = (3 × 10⁸) × (2 × 10⁻⁷) = 60 V/m.\n5. Vector alignment: We require Ê × B̂ = -î. Since B̂ = +ĵ, choosing Ê = +k̂ gives k̂ × ĵ = -î (matches!).\n   Therefore, E_z = 60 sin(0.5 × 10³ x + 1.5 × 10¹¹ t) k̂ V/m.",
    finalAnswer: "(a) λ = 1.26 cm, f = 2.39 × 10¹⁰ Hz,\n(b) Propagating along -x direction (-î),\n(c) E(x,t) = 60 sin(0.5 × 10³ x + 1.5 × 10¹¹ t) k̂ V/m.",
    neetShortcut: "Sign rule: (kx - ωt) travels in +x; (kx + ωt) travels in -x. Cross product check: k̂ × ĵ = -î. Takes under 15 seconds to eliminate wrong options!"
  },
  {
    id: "num-7",
    title: "Numerical 7: Laser Beam Intensity, Power & Electric Field Amplitude",
    problem: "A helium-neon laser emits a cylindrical beam of light with optical power P = 3.14 mW and beam diameter d = 2.0 mm. Assuming the beam intensity is uniform across its cross-section, calculate: (a) the intensity I of the beam, (b) the rms electric field E_rms, and (c) the rms magnetic field B_rms.",
    given: [
      "Power P = 3.14 mW = 3.14 × 10⁻³ W = π × 10⁻³ W",
      "Diameter d = 2.0 mm ⇒ Radius r = 1.0 mm = 10⁻³ m",
      "Cross-sectional area A = πr² = π × (10⁻³)² = π × 10⁻⁶ m²",
      "c = 3.0 × 10⁸ m/s,  ε₀ = 8.85 × 10⁻¹² C²/(N·m²)"
    ],
    required: "(a) Beam intensity I, (b) E_rms, (c) B_rms",
    concept: "Intensity I = Power / Area = P / (πr²). In terms of rms field, I = ε₀ · c · E_rms². Then B_rms = E_rms / c.",
    formula: "I = P / A,  E_rms = √(I / (ε₀ · c)),  B_rms = E_rms / c",
    substitution: "I = (π × 10⁻³) / (π × 10⁻⁶) W/m²\nE_rms = √[ 1000 / (8.854 × 10⁻¹² × 3.0 × 10⁸) ] V/m\nB_rms = E_rms / (3.0 × 10⁸) T",
    calculation: "1. I = (3.14 × 10⁻³) / (3.14 × 10⁻⁶) = 1000 W/m² = 1.0 × 10³ W/m².\n2. ε₀ · c = 8.854 × 10⁻¹² × 3 × 10⁸ = 2.656 × 10⁻³ C²/(N·m·s).\n3. E_rms² = 1000 / (2.656 × 10⁻³) = 3.765 × 10⁵ V²/m².\n   E_rms = √(3.765 × 10⁵) ≈ 613.6 V/m.\n4. B_rms = 613.6 / (3.0 × 10⁸) ≈ 2.05 × 10⁻⁶ T = 2.05 μT.",
    finalAnswer: "(a) I = 1000 W/m²,  (b) E_rms = 614 V/m,  (c) B_rms = 2.05 × 10⁻⁶ T (2.05 μT).",
    neetShortcut: "Note how π cancels in P/A: (π × 10⁻³)/(π × 10⁻⁶) = 1000 W/m²! Always keep numbers in terms of π before multiplying."
  },
  {
    id: "num-8",
    title: "Numerical 8: Radiation Pressure on an Earth Satellite Solar Panel",
    problem: "A spacecraft orbiting Earth has solar panels with a total surface area A = 5.0 m². Sunlight of intensity I = 1400 W/m² falls normally on the panels. If the panels are designed with a special coating that absorbs 80% of the light and reflects 20%, calculate the total radiation force exerted on the satellite.",
    given: [
      "Surface area A = 5.0 m²",
      "Intensity I = 1400 W/m²",
      "Absorption fraction a = 0.80 (80%)",
      "Reflection fraction r = 0.20 (20%)",
      "c = 3.0 × 10⁸ m/s"
    ],
    required: "Total radiation force F_total on the solar panels",
    concept: "Total incident power P = I · A. The absorbed portion experiences radiation force F_abs = P_abs / c = (a · P) / c. The reflected portion experiences radiation force F_refl = 2 · P_refl / c = (2 · r · P) / c. Total force F = F_abs + F_refl = [P/c] · (a + 2r) = [P/c] · (1 + r), since a + r = 1.",
    formula: "P = I · A,  F_total = (P / c) · (1 + r) = (I · A / c) · (1 + r)",
    substitution: "P = 1400 × 5.0 = 7000 W\nF_total = [ 7000 / (3.0 × 10⁸) ] × (1 + 0.20)",
    calculation: "1. Total power incident P = 7000 W = 7 kW.\n2. Base force factor P/c = 7000 / (3 × 10⁸) = 2.333 × 10⁻⁵ N.\n3. Reflection multiplier = 1 + r = 1 + 0.20 = 1.20.\n4. Total Force F = 2.333 × 10⁻⁵ × 1.20 = 2.80 × 10⁻⁵ N = 28 μN.",
    finalAnswer: "Total Radiation Force F = 2.80 × 10⁻⁵ N (28 μN).",
    neetShortcut: "Universal formula for partial reflection: Pressure P_rad = (I/c)(1 + r). Force F = (IA/c)(1 + r). Here 1 + 0.2 = 1.2. (7000 / 3e8) × 1.2 = 2.8 × 10⁻⁵ N."
  }
];
