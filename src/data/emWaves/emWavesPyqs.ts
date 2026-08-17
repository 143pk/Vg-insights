// Genuine Traceable NEET UG & AIPMT Previous Years Questions for Electromagnetic Waves

export interface EmPyq {
  id: string;
  year: string;
  exam: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  correctAnswer: string;
  conceptTested: string;
  stepByStepSolution: string;
  trapWarning: string;
}

export const emPyqs: EmPyq[] = [
  {
    id: "pyq-1",
    year: "NEET 2023",
    exam: "NEET UG",
    question: "An electromagnetic wave is moving along the +z direction. If the electric field is along the +y direction, then the magnetic field is directed along:",
    options: [
      "+x direction",
      "-x direction",
      "-y direction",
      "+z direction"
    ],
    correctOptionIndex: 1,
    correctAnswer: "-x direction (-î)",
    conceptTested: "Direction of propagation of an EM wave is given by the cross product v̂ = (Ê × B̂).",
    stepByStepSolution: "1. The direction of propagation is along +z, so v̂ = +k̂.\n2. The electric field is along +y, so Ê = +ĵ.\n3. We know v̂ = Ê × B̂ ⇒ +k̂ = (+ĵ) × (B̂).\n4. Using standard unit vector cross products:\n   - ĵ × (+î) = -k̂ (Incorrect)\n   - ĵ × (-î) = -(ĵ × î) = -(-k̂) = +k̂ (Correct!)\n5. Therefore, B̂ must be directed along the -x direction (-î).",
    trapWarning: "NEET Trap: Many students rush and choose +x because they remember 'i, j, k'. But ĵ × î = -k̂! To get +k̂, you need ĵ × (-î)."
  },
  {
    id: "pyq-2",
    year: "NEET 2022",
    exam: "NEET UG",
    question: "When light propagates through a material medium of relative permittivity ε_r and relative permeability μ_r, the velocity of light, v is given by: (c = velocity of light in vacuum)",
    options: [
      "v = c",
      "v = √(μ_r / ε_r)",
      "v = c / √(ε_r · μ_r)",
      "v = √(ε_r · μ_r) / c"
    ],
    correctOptionIndex: 2,
    correctAnswer: "v = c / √(ε_r · μ_r)",
    conceptTested: "Speed of EM wave in medium vs vacuum permittivity and permeability.",
    stepByStepSolution: "1. In vacuum, c = 1 / √(μ₀ ε₀).\n2. In a material medium, speed v = 1 / √(μ ε) = 1 / √(μ₀ μ_r · ε₀ ε_r).\n3. Rearranging: v = [ 1 / √(μ₀ ε₀) ] / √(μ_r ε_r) = c / √(μ_r ε_r).\n4. Hence, the correct option is v = c / √(ε_r · μ_r).",
    trapWarning: "Direct NCERT textbook formula! Do not confuse refractive index n = √(μ_r ε_r) with speed v = c/n."
  },
  {
    id: "pyq-3",
    year: "NEET 2021",
    exam: "NEET UG",
    question: "The ratio of contributions made by the electric field and magnetic field components to the total intensity of an electromagnetic wave is:",
    options: [
      "c : 1",
      "1 : 1",
      "1 : c",
      "1 : c²"
    ],
    correctOptionIndex: 1,
    correctAnswer: "1 : 1",
    conceptTested: "Equipartition of energy between electric and magnetic fields in an EM wave.",
    stepByStepSolution: "1. Average electric energy density: ⟨u_E⟩ = ¼ ε₀ E₀².\n2. Average magnetic energy density: ⟨u_B⟩ = B₀² / (4μ₀).\n3. Since E₀ = c B₀ and c² = 1 / (μ₀ ε₀):\n   ⟨u_B⟩ = (E₀/c)² / (4μ₀) = E₀² / (4μ₀ c²) = (E₀² · μ₀ ε₀) / (4μ₀) = ¼ ε₀ E₀² = ⟨u_E⟩.\n4. Since both electric and magnetic energy densities are identically equal, their contributions to the intensity I = ⟨u⟩ c are in the exact ratio 1 : 1.",
    trapWarning: "Huge NEET trap! Because E₀ = c B₀ (ratio of field amplitudes is c:1), students mistakenly pick c:1. But the ratio of ENERGY/INTENSITY is strictly 1:1."
  },
  {
    id: "pyq-4",
    year: "NEET 2020",
    exam: "NEET UG",
    question: "The magnetic field in a plane electromagnetic wave is given by B_y = 2 × 10⁻⁷ sin(0.5 × 10³ x + 1.5 × 10¹¹ t) T. The expression for the corresponding electric field will be:",
    options: [
      "E_z = 60 sin(0.5 × 10³ x + 1.5 × 10¹¹ t) k̂ V/m",
      "E_z = 60 sin(0.5 × 10³ x + 1.5 × 10¹¹ t) (-k̂) V/m",
      "E_y = 60 sin(0.5 × 10³ x + 1.5 × 10¹¹ t) ĵ V/m",
      "E_x = 60 sin(0.5 × 10³ x + 1.5 × 10¹¹ t) î V/m"
    ],
    correctOptionIndex: 0,
    correctAnswer: "E_z = 60 sin(0.5 × 10³ x + 1.5 × 10¹¹ t) k̂ V/m",
    conceptTested: "Wave propagation vector cross-product E₀ = c B₀ and direction sign.",
    stepByStepSolution: "1. E₀ = c · B₀ = (3 × 10⁸ m/s) × (2 × 10⁻⁷ T) = 60 V/m.\n2. The argument is (0.5 × 10³ x + 1.5 × 10¹¹ t) ⇒ wave travels in -x direction (-î).\n3. B is along +y direction (ĵ).\n4. We require Ê × B̂ = -î.\n   Let's test Ê = +k̂:  k̂ × ĵ = -î (Matches propagation direction!).\n5. Therefore, E must oscillate along +z (k̂) with amplitude 60 V/m.",
    trapWarning: "Students often forget that (kx + ωt) means wave travels in -x direction. If they assumed +x, they would choose -k̂ and lose marks."
  },
  {
    id: "pyq-5",
    year: "NEET 2019",
    exam: "NEET UG",
    question: "Which of the following electromagnetic waves has the minimum wavelength?",
    options: [
      "Microwaves",
      "Ultraviolet rays",
      "X-rays",
      "Gamma rays"
    ],
    correctOptionIndex: 3,
    correctAnswer: "Gamma rays",
    conceptTested: "Electromagnetic spectrum ordering of wavelengths.",
    stepByStepSolution: "1. Decreasing order of wavelength: Radio waves > Microwaves > Infrared > Visible > Ultraviolet > X-rays > Gamma rays.\n2. Gamma rays have the shortest wavelength (λ < 10⁻¹² m / 10⁻³ nm) and highest frequency (f > 10¹⁹ Hz).\n3. Hence, Gamma rays have the minimum wavelength among all options.",
    trapWarning: "Remember: Minimum wavelength = Maximum frequency = Maximum photon energy (E = hc/λ)."
  },
  {
    id: "pyq-6",
    year: "NEET 2018",
    exam: "NEET UG",
    question: "An EM wave propagates in vacuum. The electric field component is E = 30 sin(1.8 y + 5.4 × 10⁸ t) î V/m. The frequency of the wave is:",
    options: [
      "8.6 × 10⁷ Hz",
      "5.4 × 10⁸ Hz",
      "1.8 × 10⁸ Hz",
      "9.0 × 10⁷ Hz"
    ],
    correctOptionIndex: 0,
    correctAnswer: "8.6 × 10⁷ Hz (86 MHz)",
    conceptTested: "Extraction of angular frequency ω and conversion to linear frequency f = ω / (2π).",
    stepByStepSolution: "1. The wave equation is E = E₀ sin(ky + ωt).\n2. Comparing terms: ω = 5.4 × 10⁸ rad/s.\n3. Frequency f = ω / (2π) = (5.4 × 10⁸) / (2 × 3.1416).\n4. f = 5.4 × 10⁸ / 6.2832 ≈ 0.8595 × 10⁸ Hz ≈ 8.6 × 10⁷ Hz (86 MHz, in FM radio range).",
    trapWarning: "NEET Trap: 5.4 × 10⁸ is the ANGULAR frequency (ω) in rad/s, not the frequency (f) in Hz! Always divide by 2π."
  },
  {
    id: "pyq-7",
    year: "NEET 2016 (Phase 1)",
    exam: "NEET UG",
    question: "Out of the following options, which one can be used to produce a propagating electromagnetic wave?",
    options: [
      "A charge moving at constant velocity",
      "A stationary charge",
      "A chargeless particle",
      "An accelerating charge"
    ],
    correctOptionIndex: 3,
    correctAnswer: "An accelerating charge",
    conceptTested: "Source of electromagnetic radiation according to Maxwell's electromagnetic theory.",
    stepByStepSolution: "1. A stationary charge produces only a static electric field (no magnetic field, no radiation).\n2. A charge moving with uniform (constant) velocity produces both steady electric and magnetic fields, but no energy is radiated into space.\n3. A chargeless particle (e.g. neutron) cannot create electric or magnetic fields.\n4. An ACCELERATING charge (such as an oscillating electron in an antenna or LC circuit) produces time-varying E and B fields that mutually regenerate and radiate as EM waves.",
    trapWarning: "Core theoretical principle: ONLY accelerated (or oscillating) charges radiate electromagnetic waves."
  },
  {
    id: "pyq-8",
    year: "AIPMT 2015",
    exam: "AIPMT",
    question: "Radiation of energy 'E' falls normally on a perfectly reflecting surface. The momentum transferred to the surface is (c = velocity of light):",
    options: [
      "E / c",
      "2E / c",
      "2E / c²",
      "E / c²"
    ],
    correctOptionIndex: 1,
    correctAnswer: "2E / c",
    conceptTested: "Momentum transfer of electromagnetic radiation upon reflection.",
    stepByStepSolution: "1. Incident photon momentum p_initial = +E / c.\n2. Upon 100% reflection (perfect mirror), reflected photon momentum p_final = -E / c.\n3. Total momentum delivered to the surface Δp = p_initial - p_final = E/c - (-E/c) = 2E/c.\n4. (For complete absorption, momentum delivered would be E/c).",
    trapWarning: "Read the surface type carefully! 'Perfect absorbing' = E/c; 'Perfect reflecting' = 2E/c."
  },
  {
    id: "pyq-9",
    year: "AIPMT 2013",
    exam: "AIPMT",
    question: "The condition under which a microwave oven heats up a food item containing water molecules most efficiently is:",
    options: [
      "The frequency of the microwaves must match the resonant rotational frequency of the water molecules",
      "The frequency of the microwaves has no relation with natural frequency of water molecules",
      "Microwaves are heat waves, so always produce heating",
      "Infrared waves produce heating in a microwave oven"
    ],
    correctOptionIndex: 0,
    correctAnswer: "The frequency of the microwaves must match the resonant rotational frequency of the water molecules",
    conceptTested: "Working mechanism of microwave oven and resonance principle.",
    stepByStepSolution: "1. Water is a polar molecule with a permanent electric dipole moment.\n2. Microwaves of frequency ~2.45 GHz resonate with the rotational energy levels of water molecules.\n3. The oscillating electric field of the microwave exerts periodic torque on the water dipoles, inducing intense molecular rotation.\n4. Intermolecular friction transfers this rotational kinetic energy directly into thermal heat.",
    trapWarning: "NCERT Highlight: Only water-containing foods are heated efficiently. Containers made of porcelain, glass, or plastic lack free dipoles and remain unheated."
  },
  {
    id: "pyq-10",
    year: "AIPMT 2011",
    exam: "AIPMT",
    question: "The electric field part of an electromagnetic wave in a medium is represented by E_x = 0, E_y = 2.5 N/C · cos[(2π × 10⁶ rad/m) x - (π × 10⁻² rad/s) t], E_z = 0. The wave is:",
    options: [
      "moving along x-direction with frequency 10⁶ Hz and wavelength 10⁻² m",
      "moving along x-direction with frequency 2π × 10⁶ Hz and wavelength (1/π) × 10⁻² m",
      "moving along -x direction with frequency 10⁶ Hz and wavelength 10⁻² m",
      "moving along +x direction with frequency 5 × 10⁻³ Hz and wavelength 10⁻⁶ m"
    ],
    correctOptionIndex: 3,
    correctAnswer: "moving along +x direction with frequency 5 × 10⁻³ Hz and wavelength 10⁻⁶ m",
    conceptTested: "Identification of wave vector k, angular frequency ω, and direction in general medium.",
    stepByStepSolution: "1. Standard form: E_y = E₀ cos(kx - ωt).\n2. Since the form has a minus sign (kx - ωt), the wave propagates along +x direction.\n3. k = 2π × 10⁶ rad/m ⇒ Wavelength λ = 2π / k = 2π / (2π × 10⁶) = 10⁻⁶ m.\n4. ω = π × 10⁻² rad/s ⇒ Frequency f = ω / (2π) = (π × 10⁻²) / (2π) = 0.5 × 10⁻² = 5 × 10⁻³ Hz.\n5. Therefore, the wave moves along +x with f = 5 × 10⁻³ Hz and λ = 10⁻⁶ m.",
    trapWarning: "Don't confuse k = 2π/λ and ω = 2πf. Keep your units and factor of 2π strictly organised."
  }
];
