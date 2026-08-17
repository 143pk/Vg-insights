// 35+ High-Yield NEET Traps, Misconceptions, and Complete Master Formula Sheet for Atoms

export interface NeetTrap {
  id: string;
  trapTitle: string;
  studentMistake: string;
  correctConcept: string;
  whyExaminerTestsIt: string;
}

export interface MasterFormula {
  formulaName: string;
  expression: string;
  symbols: string;
  units: string;
  whenToUse: string;
  commonMistake: string;
}

export const ATOMS_NEET_TRAPS: NeetTrap[] = [
  {
    id: "trap-1",
    trapTitle: "1st Excited State is n = 2, NOT n = 1",
    studentMistake: "Assuming that '1st excited state' corresponds to principal quantum number n = 1.",
    correctConcept: "Ground state is n = 1. The first excited state is n = 2. In general, the 'nth excited state' corresponds to principal quantum number (n + 1).",
    whyExaminerTestsIt: "Extremely common careless error that instantly ruins energy, radius, velocity, and wavelength calculations."
  },
  {
    id: "trap-2",
    trapTitle: "Signs of Kinetic, Potential, and Total Energy",
    studentMistake: "Assigning negative sign to kinetic energy or forgetting the negative sign on potential and total energy.",
    correctConcept: "Kinetic energy K is STRICTLY positive (K = +13.6 Z²/n² eV). Total energy E is STRICTLY negative for bound states (E = -13.6 Z²/n² eV). Potential energy U is STRICTLY negative (U = 2E = -27.2 Z²/n² eV). Relationship: E = -K = U/2.",
    whyExaminerTestsIt: "Frequently tested in options containing pairs like (3.4 eV, -6.8 eV) vs (-3.4 eV, 6.8 eV)."
  },
  {
    id: "trap-3",
    trapTitle: "Longest vs Shortest Wavelength Transition Logic",
    studentMistake: "Thinking longest wavelength means transition from n = ∞ (largest leap).",
    correctConcept: "Since E = hc/λ, wavelength λ is INVERSELY proportional to energy gap ΔE (λ ∝ 1/ΔE). Therefore: (1) Longest wavelength (λ_max) corresponds to the SMALLEST energy gap (n₂ = n₁ + 1). (2) Shortest wavelength (λ_min, series limit) corresponds to the LARGEST energy gap (n₂ = ∞).",
    whyExaminerTestsIt: "Students confuse largest transition gap with largest wavelength."
  },
  {
    id: "trap-4",
    trapTitle: "Z-Dependence in Hydrogenic Ions (He⁺, Li²⁺, Be³⁺)",
    studentMistake: "Forgetting to multiply/divide by atomic number Z or squaring it in the wrong place.",
    correctConcept: "Radius: r_n ∝ n² / Z. Velocity: v_n ∝ Z / n. Energy: E_n ∝ Z² / n². Rydberg transition: 1/λ ∝ Z². Frequency/Current: f, I ∝ Z² / n³. Magnetic Field: B ∝ Z³ / n⁵.",
    whyExaminerTestsIt: "Examiners replace Hydrogen with He⁺ (Z=2) or Li²⁺ (Z=3) to test if students blindly remember 13.6 or correctly apply Z²."
  },
  {
    id: "trap-5",
    trapTitle: "Only Balmer Series Lines Fall in the Visible Spectrum",
    studentMistake: "Believing that Lyman or Paschen series have visible lines, or that ALL Balmer lines are strictly visible.",
    correctConcept: "Only the first four lines of the Balmer series (H_α, H_β, H_γ, H_δ) fall within the human visible spectrum (400 nm to 700 nm). The Balmer series limit (364.6 nm) actually falls in the near-ultraviolet. Lyman is entirely UV; Paschen, Brackett, and Pfund are entirely Infrared.",
    whyExaminerTestsIt: "NCERT fact-based question: 'Which series of hydrogen spectrum lies partially in the visible region?'"
  },
  {
    id: "trap-6",
    trapTitle: "Number of Spectral Lines: Single Atom vs Gas Sample",
    studentMistake: "Using N = n(n-1)/2 for a SINGLE isolated atom.",
    correctConcept: "Formula N = n(n-1)/2 gives the maximum possible number of lines emitted by a GAS SAMPLE containing millions of atoms undergoing all statistical permutations. For a SINGLE isolated atom excited to level n, the maximum number of photons it can emit in a single de-excitation cascade to ground state is only (n - 1) photons!",
    whyExaminerTestsIt: "Examiners specifically insert 'a single isolated hydrogen atom' in the question stem to catch formula-memorizers."
  },
  {
    id: "trap-7",
    trapTitle: "Impact Parameter b = 0 Means Head-on Collision (θ = 180°)",
    studentMistake: "Thinking b = 0 means the alpha particle misses the nucleus or has zero deflection.",
    correctConcept: "Impact parameter b is the perpendicular offset from the center. When b = 0, the trajectory points directly at the center of the nucleus (head-on collision), resulting in full 180° rebound.",
    whyExaminerTestsIt: "Tests geometric understanding of Rutherford scattering."
  },
  {
    id: "trap-8",
    trapTitle: "Bohr Model Applicability: Single Electron Species Only",
    studentMistake: "Applying Bohr formulas to neutral Helium (He) or neutral Lithium (Li).",
    correctConcept: "Bohr theory works ONLY for single-electron systems (H, D, T, He⁺, Li²⁺, Be³⁺). In multi-electron systems, inter-electronic repulsion destroys the simple central inverse-square field approximation.",
    whyExaminerTestsIt: "Standard NEET MCQ: 'Which of the following cannot be explained by Bohr model? (a) H (b) He⁺ (c) He (d) Li²⁺' -> Correct answer is (c)."
  },
  {
    id: "trap-9",
    trapTitle: "Absorption Spectrum at Room Temperature Shows ONLY Lyman Lines",
    studentMistake: "Assuming cold hydrogen gas absorbs Balmer or Paschen wavelengths.",
    correctConcept: "At room temperature (300 K), thermal energy kT ≈ 0.026 eV is far too small to excite electrons from n=1 to n=2 (which requires 10.2 eV). Hence, virtually 100% of hydrogen atoms reside in the ground state (n=1). Consequently, cold hydrogen gas can ONLY absorb photons that start from n=1 (Lyman series lines).",
    whyExaminerTestsIt: "Tests thermodynamic understanding of electronic population distributions."
  },
  {
    id: "trap-10",
    trapTitle: "Photon Absorption vs Electron Collision Excitation",
    studentMistake: "Treating photon absorption and electron impact excitation identically.",
    correctConcept: "A bound electron can absorb a photon ONLY if the photon energy EXACTLY matches the energy difference between two discrete levels (hν = E_f - E_i), or if hν ≥ Ionisation energy. However, an incident free electron (colliding particle) can transfer ANY partial amount of its kinetic energy equal to or greater than the excitation threshold, with the remaining energy kept as kinetic energy of the scattered electron.",
    whyExaminerTestsIt: "Classic question: 'A photon of 11.5 eV and an electron of 11.5 eV collide with a ground-state H atom. Which one causes excitation?' -> Only the electron can excite it to n=2 (using 10.2 eV and retaining 1.3 eV KE); the photon is NOT absorbed at all!"
  }
];

export const ATOMS_MASTER_FORMULAE: MasterFormula[] = [
  {
    formulaName: "Rutherford Distance of Closest Approach",
    expression: "r_0 = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2 Z e^2}{K_\\alpha} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{4 Z e^2}{m_\\alpha v_\\alpha^2}",
    symbols: "r₀: closest distance, Z: target atomic number, e: elementary charge, K_α: initial KE of α-particle, m_α, v_α: mass and speed of α",
    units: "Meters (m)",
    whenToUse: "Head-on collision (b = 0, θ = 180°) to estimate upper limit of nuclear size.",
    commonMistake: "Forgetting factor of 2 for α-particle charge (q_α = +2e)."
  },
  {
    formulaName: "Rutherford Impact Parameter Formula",
    expression: "b = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Z e^2 \\cot(\\theta/2)}{K_\\alpha}",
    symbols: "b: impact parameter, θ: scattering angle, K_α: kinetic energy of α",
    units: "Meters (m)",
    whenToUse: "Finding scattering angle θ from impact parameter b or vice versa.",
    commonMistake: "Confusing cot(θ/2) with tan(θ/2) or sin(θ/2)."
  },
  {
    formulaName: "Bohr's Angular Momentum Quantisation Postulate",
    expression: "L_n = m v_n r_n = \\frac{n h}{2\\pi} = n \\hbar",
    symbols: "L_n: orbital angular momentum, m: electron mass, v_n: orbital speed, r_n: orbit radius, n: principal quantum number, h: Planck constant",
    units: "J·s or kg·m²/s",
    whenToUse: "Calculating angular momentum in nth orbit or finding change in L during transition (ΔL = Δn · h/2π).",
    commonMistake: "Using n=1 for first excited state instead of n=2."
  },
  {
    formulaName: "Bohr Orbit Radius Formula",
    expression: "r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m Z e^2} = a_0 \\frac{n^2}{Z} = 0.529 \\frac{n^2}{Z} \\text{ Å} = 5.29 \\times 10^{-11} \\frac{n^2}{Z} \\text{ m}",
    symbols: "r_n: radius of nth orbit, a₀: first Bohr radius (0.529 Å), n: principal quantum number, Z: atomic number",
    units: "Angstroms (Å) or meters (m)",
    whenToUse: "Calculating orbit sizes of H, He⁺, Li²⁺, Be³⁺.",
    commonMistake: "Writing n/Z instead of n²/Z."
  },
  {
    formulaName: "Bohr Orbital Speed Formula",
    expression: "v_n = \\frac{Z e^2}{2 \\varepsilon_0 n h} = \\left(\\frac{c}{137}\\right) \\frac{Z}{n} = 2.18 \\times 10^6 \\frac{Z}{n} \\text{ m/s}",
    symbols: "v_n: orbital speed, c: speed of light, Z: atomic number, n: quantum number",
    units: "Meters per second (m/s)",
    whenToUse: "Finding electron velocity, orbital time period, or fine structure ratio.",
    commonMistake: "Writing n/Z instead of Z/n."
  },
  {
    formulaName: "Bohr Energy Levels Formula",
    expression: "E_n = -\\frac{m Z^2 e^4}{8 \\varepsilon_0^2 n^2 h^2} = -13.6 \\frac{Z^2}{n^2} \\text{ eV} = -2.18 \\times 10^{-18} \\frac{Z^2}{n^2} \\text{ Joules}",
    symbols: "E_n: total energy of nth orbit, Z: atomic number, n: quantum number",
    units: "Electron-volts (eV) or Joules (J)",
    whenToUse: "Finding total energy, excitation energy, or ionisation energy.",
    commonMistake: "Omitting the negative sign or forgetting to multiply by Z²."
  },
  {
    formulaName: "Energy Breakdown Relations (Virial Theorem)",
    expression: "K_n = -E_n = +13.6 \\frac{Z^2}{n^2} \\text{ eV}, \\quad U_n = 2 E_n = -27.2 \\frac{Z^2}{n^2} \\text{ eV}, \\quad E_n = K_n + U_n = -K_n = \\frac{U_n}{2}",
    symbols: "K_n: kinetic energy, U_n: electrostatic potential energy, E_n: total energy",
    units: "Electron-volts (eV)",
    whenToUse: "Connecting K, U, and E in any Bohr stationary state.",
    commonMistake: "Writing U = -K instead of U = -2K."
  },
  {
    formulaName: "Rydberg Spectral Formula (Wavelength & Wave Number)",
    expression: "\\bar{\\nu} = \\frac{1}{\\lambda} = R Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)",
    symbols: "ν̄: wave number (m⁻¹), λ: wavelength, R: Rydberg constant (1.097 × 10⁷ m⁻¹), n₁: lower level, n₂: higher level",
    units: "λ in meters (m) or Angstroms (Å); 1/R ≈ 912 Å",
    whenToUse: "Calculating wavelengths of emitted or absorbed spectral lines.",
    commonMistake: "Subtracting 1/n₁² - 1/n₂² in wrong order or forgetting Z² for He⁺/Li²⁺."
  },
  {
    formulaName: "Total Number of Emitted Spectral Lines",
    expression: "N = \\frac{n(n - 1)}{2} \\quad \\text{(from state } n \\text{ to ground state } n=1\\text{)} \\quad | \\quad N = \\frac{(n_2 - n_1)(n_2 - n_1 + 1)}{2}",
    symbols: "N: maximum number of spectral lines, n or n₂: highest excited level, n₁: lowest level",
    units: "Dimensionless count",
    whenToUse: "Counting spectral lines emitted by a gas sample.",
    commonMistake: "Using n instead of (n-1) or applying it to a single isolated atom."
  },
  {
    formulaName: "de Broglie Standing Wave Quantisation Condition",
    expression: "2\\pi r_n = n \\lambda_n = n \\left(\\frac{h}{m v_n}\\right) \\implies m v_n r_n = \\frac{n h}{2\\pi}",
    symbols: "r_n: orbit radius, λ_n: de Broglie wavelength, v_n: orbital speed, n: number of complete standing waves",
    units: "Meters (m)",
    whenToUse: "Relating orbit circumference to matter wavelength in nth Bohr orbit.",
    commonMistake: "Thinking 2πr = λ instead of 2πr = nλ."
  },
  {
    formulaName: "Orbital Time Period, Current, and Magnetic Field Proportionalities",
    expression: "T_n \\propto \\frac{n^3}{Z^2}, \\quad f_n \\propto \\frac{Z^2}{n^3}, \\quad I_n = e f_n \\propto \\frac{Z^2}{n^3}, \\quad B_n = \\frac{\\mu_0 I_n}{2 r_n} \\propto \\frac{Z^3}{n^5}",
    symbols: "T: period, f: frequency, I: equivalent current, B: magnetic field at nucleus",
    units: "Seconds, Hz, Amperes, Tesla",
    whenToUse: "Ratio problems involving current, frequency, period, or magnetic field.",
    commonMistake: "Writing T ∝ n² instead of n³, or B ∝ 1/n³ instead of 1/n⁵."
  }
];
