// 35+ NEET High-Yield Traps, Critical Misconceptions, and Master Formula Sheet for Dual Nature of Radiation and Matter

export interface NEETExamTrap {
  id: string;
  trapTitle: string;
  commonMistake: string;
  correctPhysicsFact: string;
  whyExaminerSetsThisTrap: string;
  neetStrategy: string;
}

export interface FormulaSheetItem {
  name: string;
  formula: string;
  variables: string;
  siUnits: string;
  whenToUse: string;
  commonMistake: string;
}

export const DUAL_NATURE_NEET_TRAPS: NEETExamTrap[] = [
  {
    id: "trap-1",
    trapTitle: "Threshold Frequency vs Threshold Wavelength Directionality",
    commonMistake: "Assuming emission occurs when λ ≥ λ₀ just like ν ≥ ν₀.",
    correctPhysicsFact: "Frequency must be GREATER than threshold (ν ≥ ν₀), but wavelength must be LESS than or equal to threshold (λ ≤ λ₀) because E = hc/λ.",
    whyExaminerSetsThisTrap: "Tests whether students blindly memorize 'greater than' without recognizing the inverse relationship between wavelength and energy.",
    neetStrategy: "Always double-check: Frequency = MINIMUM threshold (ν ≥ ν₀); Wavelength = MAXIMUM threshold (λ ≤ λ₀)."
  },
  {
    id: "trap-2",
    trapTitle: "Intensity Effect on Stopping Potential",
    commonMistake: "Thinking high intensity (brighter light) requires a larger negative stopping potential to stop electrons.",
    correctPhysicsFact: "Stopping potential V₀ is STRICTLY INDEPENDENT of intensity. Intensity only changes the number of photoelectrons, not their maximum kinetic energy.",
    whyExaminerSetsThisTrap: "Classical intuition suggests stronger waves hit electrons harder; NTA tests the quantum principle that photon energy depends only on frequency.",
    neetStrategy: "If frequency is constant, stopping potential V₀ remains 100% constant regardless of whether intensity increases by 10× or 1000×."
  },
  {
    id: "trap-3",
    trapTitle: "Doubling Frequency Does NOT Double Maximum Kinetic Energy",
    commonMistake: "Assuming K_max doubles when frequency of incident light is doubled.",
    correctPhysicsFact: "K_max becomes MORE THAN DOUBLE. K₂ = h(2ν) - φ₀ = 2(hν - φ₀) + φ₀ = 2K₁ + φ₀ > 2K₁.",
    whyExaminerSetsThisTrap: "Superficial proportional thinking (K ∝ ν) ignores the constant subtractive work function term φ₀.",
    neetStrategy: "Write K = hν - φ₀ explicitly. Never assume direct linear scaling through the origin for K_max vs ν."
  },
  {
    id: "trap-4",
    trapTitle: "Stopping Potential Slope is Material-Independent",
    commonMistake: "Assuming the slope of V₀ vs ν graph depends on the metal's work function.",
    correctPhysicsFact: "The slope of V₀ vs ν is ALWAYS h/e = 4.14 × 10⁻¹⁵ V·s, a universal constant identical for Caesium, Zinc, Platinum, or any metal.",
    whyExaminerSetsThisTrap: "Examiners present parallel lines for different metals and ask which metal has a steeper slope.",
    neetStrategy: "Lines for all metals in a V₀ vs ν plot are PARALLEL. Only their intercepts (ν₀ on x-axis, -φ₀/e on y-axis) shift."
  },
  {
    id: "trap-5",
    trapTitle: "Photon vs Electron Wavelength at Same Energy",
    commonMistake: "Thinking a photon and an electron of the same energy (e.g. 100 eV) have the same wavelength.",
    correctPhysicsFact: "For a photon: λ = hc/E (λ ∝ 1/E). For an electron: λ = h/√(2mK) (λ ∝ 1/√E). At 100 eV, λ_photon ≈ 124 Å, while λ_electron = 1.227 Å (nearly 100 times smaller!).",
    whyExaminerSetsThisTrap: "Confuses relativistic massless photon relations with non-relativistic massive particle matter wave relations.",
    neetStrategy: "Identify whether the particle is a photon (E=pc) or matter particle (E=p²/2m) before picking the wavelength formula."
  },
  {
    id: "trap-6",
    trapTitle: "Photon vs Electron Momentum at Same Wavelength",
    commonMistake: "Assuming electron and photon have different momentum if they have the same wavelength.",
    correctPhysicsFact: "If wavelength λ is identical, linear momentum p = h/λ is STRICTLY IDENTICAL for both photon and electron!",
    whyExaminerSetsThisTrap: "Students overcomplicate by factoring in electron mass, forgetting de Broglie's universal relation p = h/λ.",
    neetStrategy: "Equal wavelength ALWAYS implies equal momentum (p₁ : p₂ = 1 : 1), regardless of the particle identity."
  },
  {
    id: "trap-7",
    trapTitle: "Unit Mismatch: eV vs Joules in Velocity Calculations",
    commonMistake: "Substituting K_max in eV directly into v = √(2K/m) without multiplying by 1.6 × 10⁻¹⁹.",
    correctPhysicsFact: "Mass is in kg (SI), so Kinetic Energy K MUST be converted to Joules (SI) before computing velocity.",
    whyExaminerSetsThisTrap: "Calculations in eV produce answers off by a factor of √(10⁻¹⁹) ≈ 3 × 10⁻¹⁰.",
    neetStrategy: "Always check units: 1 eV = 1.602 × 10⁻¹⁹ J. In v_max = √(2K/m), K must be in Joules!"
  },
  {
    id: "trap-8",
    trapTitle: "Davisson–Germer Scattering Angle vs Glancing Angle",
    commonMistake: "Using the scattering angle θ = 50° directly into Bragg's law 2d sin θ = nλ.",
    correctPhysicsFact: "Bragg's law requires glancing angle ϕ with the crystal plane: ϕ = 90° - θ/2. For θ = 50°, ϕ = 65° (so 2d sin 65° = λ).",
    whyExaminerSetsThisTrap: "Directly tests geometrical clarity in crystal diffraction vs detector scattering angle.",
    neetStrategy: "Remember: Glancing angle ϕ = 90° - (Scattering angle θ / 2)."
  },
  {
    id: "trap-9",
    trapTitle: "Alpha Particle vs Proton Potential Ratio Trap",
    commonMistake: "Forgetting that an alpha particle has charge q_α = 2e and mass m_α = 4 m_p.",
    correctPhysicsFact: "λ = h / √(2mqV). For same V: λ_p / λ_α = √(m_α q_α / m_p q_p) = √(4 × 2 / 1 × 1) = √8 = 2√2.",
    whyExaminerSetsThisTrap: "Commonly tested ratio question in NEET with traps like 2, 4, 1/2, or 2√2.",
    neetStrategy: "Always write down (m, q) table: Proton (1, 1), Deuteron (2, 1), Alpha (4, 2), Electron (1/1836, 1)."
  },
  {
    id: "trap-10",
    trapTitle: "Thermal Neutrons: Factor of 3 vs Factor of 2",
    commonMistake: "Using K = (1/2) kT instead of K = (3/2) kT for average thermal kinetic energy.",
    correctPhysicsFact: "In 3D thermal equilibrium at temperature T, average kinetic energy is K = (3/2) kT. Therefore, λ = h / √(3mkT), NOT √(2mkT).",
    whyExaminerSetsThisTrap: "Tests kinetic theory of gases integration with quantum matter waves.",
    neetStrategy: "For thermal matter waves at temperature T, remember the '3' inside the radical: λ = h / √(3mkT)."
  },
  {
    id: "trap-11",
    trapTitle: "Point Source Distance vs Photocurrent vs Stopping Potential",
    commonMistake: "Thinking changing distance between light source and photoelectric tube changes stopping potential.",
    correctPhysicsFact: "Moving a point source to 2× distance reduces intensity to 1/4th (I ∝ 1/r²), so photocurrent becomes I/4, but stopping potential V₀ remains COMPLETELY UNCHANGED.",
    whyExaminerSetsThisTrap: "Combines inverse-square law with photoelectric principles.",
    neetStrategy: "Distance affects Intensity ⟹ affects Current. Distance NEVER affects Frequency ⟹ Stopping Potential V₀ is constant."
  },
  {
    id: "trap-12",
    trapTitle: "Photons in Refraction (Entering Denser Medium)",
    commonMistake: "Assuming photon energy or frequency changes when light enters water or glass.",
    correctPhysicsFact: "Frequency ν and photon energy E = hν REMAIN CONSTANT during refraction. Speed decreases (v = c/μ) and wavelength decreases (λ' = λ/μ).",
    whyExaminerSetsThisTrap: "Frequency is an intrinsic property of the source, unaffected by the medium.",
    neetStrategy: "In any medium transition: Frequency ν = constant; Energy E = constant; Speed v and Wavelength λ change."
  },
  {
    id: "trap-13",
    trapTitle: "Work Function in eV vs Joules in Graph Y-Intercept",
    commonMistake: "Saying y-intercept of V₀ vs ν graph is -φ₀.",
    correctPhysicsFact: "The y-intercept of the V₀ vs ν graph is -φ₀/e (in Volts), NOT -φ₀ (in Joules). Only the graph of K_max vs ν has y-intercept = -φ₀.",
    whyExaminerSetsThisTrap: "Tests whether the student observes the vertical axis quantity (V₀ in Volts vs K_max in Joules).",
    neetStrategy: "Axis is V₀ ⟹ Intercept is -φ₀/e; Axis is K_max ⟹ Intercept is -φ₀."
  },
  {
    id: "trap-14",
    trapTitle: "Sub-Threshold Light Laser Trap",
    commonMistake: "Thinking a 1000 W laser of red light can cause photoemission from zinc because it is very powerful.",
    correctPhysicsFact: "Zinc has work function ~4.3 eV (UV region). Red light has photon energy ~1.8 eV < 4.3 eV. ZERO electrons will be emitted, regardless of laser power.",
    whyExaminerSetsThisTrap: "Checks if student understands that photoelectric effect is an all-or-none single photon-electron quantum collision.",
    neetStrategy: "If ν < ν₀, Photoemission = ZERO, even for a megawatt laser."
  },
  {
    id: "trap-15",
    trapTitle: "Photoelectron Kinetic Energy is a Range, Not a Single Value",
    commonMistake: "Assuming ALL emitted photoelectrons have the same kinetic energy K = hν - φ₀.",
    correctPhysicsFact: "K_max = hν - φ₀ is the MAXIMUM kinetic energy (for surface electrons). Photoelectrons emerge with a continuous spectrum of kinetic energies from 0 to K_max due to internal collisions.",
    whyExaminerSetsThisTrap: "Assertion-Reason questions frequently test if students know that photoelectrons have varying energies.",
    neetStrategy: "Emitted electron kinetic energies lie in the range 0 ≤ K ≤ K_max."
  }
];

export const DUAL_NATURE_MASTER_FORMULA_SHEET: FormulaSheetItem[] = [
  {
    name: "Photon Energy",
    formula: "E = hν = hc / λ",
    variables: "E = photon energy (J or eV), h = 6.626×10⁻³⁴ J·s, ν = frequency (Hz), c = 3×10⁸ m/s, λ = wavelength (m)",
    siUnits: "Energy in Joules (J); for calculations use hc ≈ 12400 eV·Å = 1240 eV·nm",
    whenToUse: "To find energy of a single quantum of light from wavelength or frequency.",
    commonMistake: "Mixing Ångströms with SI meters without conversion factor 10⁻¹⁰."
  },
  {
    name: "Photon Momentum",
    formula: "p = E / c = h / λ = hν / c",
    variables: "p = linear momentum (kg·m/s), E = energy (J), λ = wavelength (m)",
    siUnits: "kg·m/s or N·s",
    whenToUse: "To calculate momentum carried by radiation or transferred during collisions.",
    commonMistake: "Trying to use p = mv with m₀ = 0 for a photon (photons have no rest mass!)."
  },
  {
    name: "Photon Emission Rate (Flux)",
    formula: "n = N / t = P / E = (P × λ) / (hc)",
    variables: "n = photons emitted per second (s⁻¹), P = optical power (W), E = photon energy (J)",
    siUnits: "s⁻¹ or photons/sec",
    whenToUse: "To calculate number of photons emitted by a lamp or incident on a surface per second.",
    commonMistake: "Using total electrical power instead of optical power when efficiency η < 100%."
  },
  {
    name: "Work Function & Threshold Relations",
    formula: "φ₀ = hν₀ = hc / λ₀",
    variables: "φ₀ = work function (J or eV), ν₀ = threshold frequency (Hz), λ₀ = threshold cut-off wavelength (m)",
    siUnits: "J or eV (1 eV = 1.602 × 10⁻¹⁹ J)",
    whenToUse: "To determine minimum energy, threshold frequency, or cut-off wavelength of a metal.",
    commonMistake: "Thinking λ₀ is minimum wavelength (it is the MAXIMUM wavelength for emission!)."
  },
  {
    name: "Einstein's Photoelectric Equation",
    formula: "K_max = hν - φ₀ = hc(1/λ - 1/λ₀) = ½ m v_max² = e V₀",
    variables: "K_max = max kinetic energy (J or eV), V₀ = stopping potential (V), v_max = max speed (m/s), m = 9.1×10⁻³¹ kg",
    siUnits: "K_max in Joules or eV; V₀ in Volts; v_max in m/s",
    whenToUse: "Core master equation for all photoelectric energy, stopping potential, and maximum speed calculations.",
    commonMistake: "Calculating v_max directly from K in eV without converting to Joules."
  },
  {
    name: "Stopping Potential Linear Equation",
    formula: "V₀ = (h / e) ν - (φ₀ / e)",
    variables: "V₀ = stopping potential (V), slope = h/e ≈ 4.14 × 10⁻¹⁵ V·s, x-intercept = ν₀, y-intercept = -φ₀/e",
    siUnits: "Volts (V)",
    whenToUse: "To analyze V₀ vs frequency graphs, determine Planck's constant, and find work functions.",
    commonMistake: "Assuming slope changes for different metals (slope is universal = h/e)."
  },
  {
    name: "Radiation Force (Normal Incidence)",
    formula: "Absorbing: F = P / c  |  Reflecting: F = 2P / c",
    variables: "F = force (N), P = incident power (W), c = 3 × 10⁸ m/s",
    siUnits: "Newtons (N)",
    whenToUse: "To calculate mechanical force and radiation pressure exerted by a light beam.",
    commonMistake: "Forgetting the factor of 2 for perfectly reflecting surfaces."
  },
  {
    name: "de Broglie Matter Wavelength (General)",
    formula: "λ = h / p = h / (m v) = h / √(2mK)",
    variables: "λ = matter wavelength (m), m = particle mass (kg), v = velocity (m/s), K = kinetic energy (J)",
    siUnits: "Meters (m) or Ångströms (Å)",
    whenToUse: "To find wavelength associated with any moving mass particle.",
    commonMistake: "Using this formula for photons (use λ = c/ν for photons)."
  },
  {
    name: "Accelerated Charged Particle Matter Wave",
    formula: "λ = h / √(2mqV)",
    variables: "q = particle charge (C), V = accelerating potential (V), m = mass (kg)",
    siUnits: "Meters (m)",
    whenToUse: "For protons, deuterons, alpha particles, ions accelerated through potential difference V.",
    commonMistake: "Forgetting charge numbers: Proton (1), Deuteron (1), Alpha (2)."
  },
  {
    name: "Electron de Broglie Shortcut",
    formula: "λ_electron = 12.27 / √V  Å = 1.227 / √V  nm",
    variables: "V = accelerating potential in Volts (V), λ in Ångströms (Å)",
    siUnits: "Å (10⁻¹⁰ m)",
    whenToUse: "NEET super-fast calculation for electrons accelerated from rest through V volts.",
    commonMistake: "Applying this shortcut to protons or alpha particles (valid ONLY for electrons!)."
  },
  {
    name: "Thermal Neutron de Broglie Wavelength",
    formula: "λ = h / √(3 m_n k T) ≈ 25.6 / √T  Å",
    variables: "m_n = 1.675×10⁻²⁷ kg, k = 1.38×10⁻²³ J/K, T = absolute temperature in Kelvin (K)",
    siUnits: "Å (10⁻¹⁰ m)",
    whenToUse: "For neutrons in thermal equilibrium at temperature T.",
    commonMistake: "Using Celsius instead of Kelvin for temperature T."
  },
  {
    name: "Bragg's Diffraction Law",
    formula: "2d sin ϕ = n λ",
    variables: "d = interplanar lattice spacing, ϕ = glancing angle = 90° - θ/2, θ = scattering angle, n = order (1,2...)",
    siUnits: "Distance in Å or meters",
    whenToUse: "For Davisson–Germer experiment and electron/X-ray crystal diffraction calculations.",
    commonMistake: "Using scattering angle θ instead of glancing angle ϕ in sin(ϕ)."
  }
];
