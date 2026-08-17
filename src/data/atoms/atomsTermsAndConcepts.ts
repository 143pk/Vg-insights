// Comprehensive terms, comparison tables, conceptual Q&A, and rapid revision for Chapter 12: Atoms

export interface AtomTerm {
  term: string;
  definition: string;
  formula?: string;
  neetNote: string;
}

export interface ComparisonTable {
  id: string;
  title: string;
  headers: string[];
  rows: string[][];
  neetTakeaway: string;
}

export interface ConceptualQA {
  id: string;
  question: string;
  answer: string;
  corePrinciple: string;
  neetRelevance: string;
}

export const ATOMS_IMPORTANT_TERMS: AtomTerm[] = [
  {
    term: "Alpha Particle (α-particle)",
    definition: "A doubly ionized helium nucleus (⁴₂He²⁺) consisting of 2 protons and 2 neutrons. It has a positive charge of +2e (3.2 × 10⁻¹⁹ C) and mass approx 4 times the proton mass (6.64 × 10⁻²⁷ kg).",
    formula: "q = +2e, m_α ≈ 4 m_p = 7300 m_e",
    neetNote: "Because of its large mass compared to an electron, an α-particle is not noticeably deflected by atomic electrons; its deflection is solely due to the heavy atomic nucleus."
  },
  {
    term: "Impact Parameter (b)",
    definition: "The perpendicular distance of the initial velocity vector of an alpha particle from the center of the target nucleus when it is far away from the atom.",
    formula: "b = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Z e^2 \\cot(\\theta/2)}{K_\\alpha}",
    neetNote: "b = 0 corresponds to a head-on collision with maximum deflection (θ = 180°). A large value of b results in almost zero deflection (θ ≈ 0°)."
  },
  {
    term: "Distance of Closest Approach (r₀)",
    definition: "The minimum distance between the center of a target nucleus and a directly incoming alpha particle (b = 0) at the turning point where all its initial kinetic energy is converted into electrostatic potential energy.",
    formula: "r_0 = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2 Z e^2}{K_\\alpha}",
    neetNote: "Used to estimate the upper limit of nuclear size. r₀ ∝ Z and r₀ ∝ 1/K_α. If speed of α is doubled, r₀ becomes 1/4th."
  },
  {
    term: "Scattering Angle (θ)",
    definition: "The angle between the initial direction of approach of an alpha particle and its final direction of motion after electrostatic repulsion by the target nucleus.",
    formula: "N(\\theta) \\propto \\frac{1}{\\sin^4(\\theta/2)}",
    neetNote: "Rutherford's scattering formula predicts that the number of scattered particles per unit area is inversely proportional to sin⁴(θ/2)."
  },
  {
    term: "Stationary Orbit",
    definition: "A non-radiating, stable circular orbit in which an electron revolves around the nucleus without emitting electromagnetic radiation, despite having continuous centripetal acceleration.",
    formula: "L = m v r = \\frac{n h}{2\\pi} \\quad (n = 1, 2, 3...)",
    neetNote: "Directly resolves the classical electromagnetic spiral collapse predicted by Maxwell's theory."
  },
  {
    term: "Bohr's Angular Momentum Quantisation",
    definition: "Bohr's second postulate stating that an electron can only revolve in those orbits in which its orbital angular momentum is an integral multiple of h/2π (or ℏ).",
    formula: "L_n = m v_n r_n = n \\hbar = \\frac{n h}{2\\pi}",
    neetNote: "Angular momentum is quantized in units of h/2π ≈ 1.054 × 10⁻³⁴ J·s. For ground state (n=1), L = h/2π. Change in L between adjacent orbits is always h/2π."
  },
  {
    term: "Bohr Radius (a₀)",
    definition: "The radius of the innermost permitted stationary orbit (n=1) of a hydrogen atom (Z=1).",
    formula: "a_0 = \\frac{\\varepsilon_0 h^2}{\\pi m e^2} \\approx 0.529 \\text{ Å} = 5.29 \\times 10^{-11} \\text{ m}",
    neetNote: "General orbit radius is r_n = 0.529 \\frac{n^2}{Z} \\text{ Å}. Note that r_n ∝ n² and r_n ∝ 1/Z."
  },
  {
    term: "Orbital Speed (v_n)",
    definition: "The tangential velocity of an electron revolving in the nth Bohr orbit.",
    formula: "v_n = \\frac{e^2}{2 \\varepsilon_0 n h} = \\left(\\frac{c}{137}\\right) \\frac{Z}{n} \\approx 2.18 \\times 10^6 \\frac{Z}{n} \\text{ m/s}",
    neetNote: "v_n ∝ Z/n. In the 1st orbit of H, v₁ ≈ c/137 ≈ 2.18 × 10⁶ m/s. Fine structure constant α = e²/(2ε₀hc) = 1/137."
  },
  {
    term: "Principal Quantum Number (n)",
    definition: "A positive integer (n = 1, 2, 3...) that designates the stationary energy level and orbit of an electron in an atom.",
    formula: "n \\in \\{1, 2, 3, \\dots, \\infty\\}",
    neetNote: "n = 1 is ground state; n = 2 is 1st excited state; n = 3 is 2nd excited state. NEET Trap: 'nth excited state' corresponds to principal quantum number (n+1)."
  },
  {
    term: "Ground State",
    definition: "The lowest, most stable electronic energy level of an atom (n = 1 for Hydrogen, with total energy E₁ = -13.6 eV).",
    formula: "E_1 = -13.6 \\text{ eV} \\quad (Z=1, n=1)",
    neetNote: "Electrons in ground state have maximum binding energy (13.6 eV) and smallest orbit radius (0.529 Å)."
  },
  {
    term: "Excited State",
    definition: "Any stationary energy level with principal quantum number n > 1 where the electron possesses higher total energy than the ground state.",
    formula: "E_n = -\\frac{13.6 Z^2}{n^2} \\text{ eV}",
    neetNote: "The 1st excited state is n = 2 (E = -3.40 eV). The 2nd excited state is n = 3 (E = -1.51 eV). Lifetime of electron in excited state is typically ~ 10⁻⁸ s."
  },
  {
    term: "Excitation Energy",
    definition: "The energy required to lift an electron from its ground state (n=1) to a specific excited state (n > 1).",
    formula: "\\Delta E_{\\text{exc}} = E_n - E_1 = 13.6 Z^2 \\left(1 - \\frac{1}{n^2}\\right) \\text{ eV}",
    neetNote: "1st excitation energy of H (1 ➔ 2) = -3.4 - (-13.6) = +10.2 eV. 2nd excitation energy (1 ➔ 3) = -1.51 - (-13.6) = +12.09 eV."
  },
  {
    term: "Ionisation Energy (Binding Energy)",
    definition: "The minimum energy required to completely remove an electron from its ground state (n=1) to infinity (n=∞) where it is free from nuclear attraction.",
    formula: "E_{\\text{ion}} = E_\\infty - E_1 = 0 - (-13.6 Z^2) = +13.6 Z^2 \\text{ eV}",
    neetNote: "For H: 13.6 eV. For He⁺ (Z=2): 13.6 × 4 = 54.4 eV. For Li²⁺ (Z=3): 13.6 × 9 = 122.4 eV."
  },
  {
    term: "Ionisation Potential",
    definition: "The accelerating potential difference through which a stationary electron must fall to acquire the ionisation energy of an atom.",
    formula: "V_{\\text{ion}} = \\frac{E_{\\text{ion}}}{e} = 13.6 Z^2 \\text{ Volts}",
    neetNote: "For hydrogen, ionisation potential = 13.6 V. For He⁺, V_ion = 54.4 V."
  },
  {
    term: "Rydberg Constant (R)",
    definition: "A fundamental physical constant appearing in the Rydberg formula for atomic spectral transitions.",
    formula: "R = \\frac{m e^4}{8 \\varepsilon_0^2 h^3 c} \\approx 1.09737 \\times 10^7 \\text{ m}^{-1}",
    neetNote: "NEET shortcut: 1/R ≈ 912 Å = 91.2 nm. This value is exceptionally useful for rapid wavelength calculations."
  },
  {
    term: "Wave Number (ν̄)",
    definition: "The number of complete electromagnetic waves per unit distance in vacuum, equal to the reciprocal of wavelength.",
    formula: "\\bar{\\nu} = \\frac{1}{\\lambda} = R Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)",
    neetNote: "SI unit is m⁻¹ (often expressed as cm⁻¹). Directly proportional to photon energy (E = hc·ν̄)."
  },
  {
    term: "Lyman Series",
    definition: "Spectral lines emitted when an excited electron de-excites from higher levels (n₂ = 2, 3, 4... ∞) down to the ground level n₁ = 1.",
    formula: "\\frac{1}{\\lambda} = R Z^2 \\left(\\frac{1}{1^2} - \\frac{1}{n_2^2}\\right), \\quad n_2 = 2, 3, 4 \\dots",
    neetNote: "Lies entirely in the Ultraviolet (UV) region. Shortest line (series limit) = 912 Å. Longest line (Lyman-α, 2➔1) = 1216 Å."
  },
  {
    term: "Balmer Series",
    definition: "Spectral lines emitted when an excited electron transitions from higher levels (n₂ = 3, 4, 5... ∞) to the second energy level n₁ = 2.",
    formula: "\\frac{1}{\\lambda} = R Z^2 \\left(\\frac{1}{2^2} - \\frac{1}{n_2^2}\\right), \\quad n_2 = 3, 4, 5 \\dots",
    neetNote: "The ONLY series in the hydrogen spectrum that falls in the VISIBLE spectrum (first 4 lines: Red 656.3 nm, Blue-green 486.1 nm, Blue 434.0 nm, Violet 410.2 nm)."
  },
  {
    term: "Paschen Series",
    definition: "Spectral lines emitted during transitions from n₂ ≥ 4 to the n₁ = 3 level.",
    formula: "\\frac{1}{\\lambda} = R Z^2 \\left(\\frac{1}{3^2} - \\frac{1}{n_2^2}\\right), \\quad n_2 = 4, 5, 6 \\dots",
    neetNote: "Lies in the Infrared (near-IR) region. Longest wavelength (4➔3) = 1875 nm."
  },
  {
    term: "Brackett & Pfund Series",
    definition: "Infrared spectral series terminating at n₁ = 4 (Brackett, n₂ ≥ 5) and n₁ = 5 (Pfund, n₂ ≥ 6).",
    formula: "\\text{Brackett: } n_1 = 4, n_2 \\ge 5 \\quad | \\quad \\text{Pfund: } n_1 = 5, n_2 \\ge 6",
    neetNote: "Both lie in the Far Infrared region."
  },
  {
    term: "Series Limit (Marginal Line)",
    definition: "The shortest wavelength (highest frequency, highest photon energy) line in any spectral series corresponding to an electron falling from n₂ = ∞ to n₁.",
    formula: "\\lambda_{\\text{min}} = \\frac{n_1^2}{R Z^2}",
    neetNote: "For Lyman: λ_min = 1/R ≈ 912 Å. For Balmer: λ_min = 4/R ≈ 3646 Å = 364.6 nm."
  },
  {
    term: "Hydrogen-Like (Hydrogenic) Species",
    definition: "Any atom or ion stripped of all its electrons except exactly one single orbital electron (e.g., He⁺, Li²⁺, Be³⁺).",
    formula: "E_n = -13.6 \\frac{Z^2}{n^2} \\text{ eV}, \\quad r_n = 0.529 \\frac{n^2}{Z} \\text{ Å}",
    neetNote: "Bohr theory is strictly valid ONLY for single-electron species. It completely fails for multi-electron atoms like neutral He or Li."
  },
  {
    term: "de Broglie Explanation of Bohr's Quantisation",
    definition: "Louis de Broglie's wave interpretation showing that stationary orbits correspond to circular standing waves where the circumference is an integral number of de Broglie wavelengths (2πr = nλ).",
    formula: "2\\pi r = n \\lambda = n \\left(\\frac{h}{m v}\\right) \\implies m v r = \\frac{n h}{2\\pi}",
    neetNote: "Provides the physical first-principle justification for Bohr's empirical postulate of angular momentum quantisation."
  }
];

export const ATOMS_COMPARISON_TABLES: ComparisonTable[] = [
  {
    id: "rutherford-vs-bohr",
    title: "1. Rutherford Model vs Bohr Model: Systematic Comparison",
    headers: ["Parameter", "Rutherford Model (1911)", "Bohr Model (1913)", "NEET Diagnostic Insight"],
    rows: [
      ["Theoretical Basis", "Classical Mechanics + Coulomb's Law", "Classical Mechanics + Planck's Quantum Theory", "Bohr introduced energy quantisation"],
      ["Permitted Orbits", "All possible radii allowed (continuous)", "Only discrete stationary orbits (L = nh/2π)", "Orbits are quantized: r_n ∝ n²"],
      ["Stability of Atom", "Unstable (e⁻ spirals into nucleus in 10⁻⁸ s)", "Stable (no radiation in stationary orbits)", "Postulate 1 resolves collapse"],
      ["Emission Spectrum", "Continuous spectrum predicted", "Discrete line spectrum explained", "Lines arise from discrete ΔE"],
      ["Calculations", "Could not calculate orbital radii or speeds", "Derived exact formulas for r_n, v_n, E_n", "r₁=0.529 Å, E₁=-13.6 eV"],
      ["Applicability", "Qualitative nuclear model for all atoms", "Quantitative, but single-electron only", "Valid only for H, He⁺, Li²⁺, Be³⁺"]
    ],
    neetTakeaway: "Bohr salvaged Rutherford's nuclear model by introducing quantum stationary states where classical radiation laws are suspended."
  },
  {
    id: "ground-vs-excited",
    title: "2. Ground State vs Excited State in Hydrogen Atom",
    headers: ["Property", "Ground State (n = 1)", "1st Excited State (n = 2)", "2nd Excited State (n = 3)"],
    rows: [
      ["Principal Quantum No. (n)", "n = 1", "n = 2", "n = 3"],
      ["Total Energy (E)", "-13.6 eV", "-3.40 eV", "-1.51 eV"],
      ["Kinetic Energy (K = -E)", "+13.6 eV", "+3.40 eV", "+1.51 eV"],
      ["Potential Energy (U = 2E)", "-27.2 eV", "-6.80 eV", "-3.02 eV"],
      ["Orbital Radius (r)", "0.529 Å (a₀)", "2.116 Å (4 a₀)", "4.761 Å (9 a₀)"],
      ["Orbital Velocity (v)", "2.18 × 10⁶ m/s (v₁)", "1.09 × 10⁶ m/s (v₁/2)", "0.73 × 10⁶ m/s (v₁/3)"],
      ["Angular Momentum (L)", "h / 2π = 1.05 × 10⁻³⁴ J·s", "2h / 2π = 2.11 × 10⁻³⁴ J·s", "3h / 2π = 3.16 × 10⁻³⁴ J·s"],
      ["Orbital Time Period (T ∝ n³)", "T₁ (approx 1.5 × 10⁻¹⁶ s)", "8 T₁", "27 T₁"],
      ["Orbital Current (I ∝ 1/n³)", "I₁ (approx 1.05 mA)", "I₁ / 8", "I₁ / 27"]
    ],
    neetTakeaway: "NEET Trap Alert: 1st excited state is n=2, NOT n=1. As n increases, Total Energy increases (becomes less negative), Kinetic Energy decreases, and Potential Energy increases."
  },
  {
    id: "excitation-vs-ionisation",
    title: "3. Excitation Energy vs Ionisation Energy vs Binding Energy",
    headers: ["Term", "Initial State", "Final State", "Energy Required (H-atom)", "Physical Meaning"],
    rows: [
      ["1st Excitation Energy", "n = 1", "n = 2", "+10.20 eV", "Energy to promote e⁻ to 1st excited state"],
      ["2nd Excitation Energy", "n = 1", "n = 3", "+12.09 eV", "Energy to promote e⁻ to 2nd excited state"],
      ["Ionisation Energy", "n = 1", "n = ∞", "+13.60 eV", "Energy to completely free e⁻ from ground state"],
      ["Ionisation from n=2", "n = 2", "n = ∞", "+3.40 eV", "Energy to free an already excited e⁻"],
      ["Binding Energy in n=n", "n = n", "n = ∞", "+13.6 / n² eV", "Magnitude of total energy in state n"]
    ],
    neetTakeaway: "Excitation is bound-to-bound transition (discrete energy needed). Ionisation is bound-to-free transition (any photon with hν ≥ E_ion can ionise the atom, with excess energy appearing as KE of free e⁻)."
  },
  {
    id: "emission-vs-absorption",
    title: "4. Atomic Emission vs Atomic Absorption Spectrum",
    headers: ["Parameter", "Emission Spectrum", "Absorption Spectrum"],
    rows: [
      ["Electron Movement", "Higher level to lower level (n_i ➔ n_f, n_i > n_f)", "Lower level to higher level (n_i ➔ n_f, n_i < n_f)"],
      ["Photon Behavior", "Photons are emitted (hν = E_i - E_f)", "Photons are absorbed (hν = E_f - E_i)"],
      ["Visual Appearance", "Bright colored discrete lines on a dark background", "Dark discrete absorption lines on a continuous bright background"],
      ["Experimental Setup", "Excited gas discharge tube viewed through spectrometer", "White light passed through cold gas, then analyzed"],
      ["Series Observed at Room Temp", "All series (Lyman, Balmer, Paschen...) if gas is hot", "Only Lyman series (since nearly all atoms are in ground state n=1)"]
    ],
    neetTakeaway: "Why does cold hydrogen gas show ONLY Lyman absorption lines? Because at room temperature (kT ≈ 0.026 eV), thermal energy is far too small to excite electrons to n=2 (needs 10.2 eV), so 100% of electrons reside in n=1."
  },
  {
    id: "spectral-series-master",
    title: "5. Comprehensive Master Table of Hydrogen Spectral Series",
    headers: ["Series Name", "Lower Level (n₁)", "Upper Levels (n₂)", "Spectral Region", "Longest Wavelength (λ_max)", "Shortest / Limit (λ_min)", "Ratio λ_max / λ_min"],
    rows: [
      ["Lyman", "n₁ = 1", "2, 3, 4... ∞", "Ultraviolet (UV)", "4 / (3R) = 1216 Å (2➔1)", "1 / R = 912 Å (∞➔1)", "4 / 3 = 1.33"],
      ["Balmer", "n₁ = 2", "3, 4, 5... ∞", "Visible (partly near UV)", "36 / (5R) = 6563 Å (3➔2)", "4 / R = 3646 Å (∞➔2)", "9 / 5 = 1.80"],
      ["Paschen", "n₁ = 3", "4, 5, 6... ∞", "Infrared (Near IR)", "144 / (7R) = 18750 Å (4➔3)", "9 / R = 8205 Å (∞➔3)", "16 / 7 = 2.29"],
      ["Brackett", "n₁ = 4", "5, 6, 7... ∞", "Infrared (Mid IR)", "400 / (9R) = 40510 Å (5➔4)", "16 / R = 14580 Å (∞➔4)", "25 / 9 = 2.78"],
      ["Pfund", "n₁ = 5", "6, 7... ∞", "Far Infrared", "900 / (11R) = 74580 Å (6➔5)", "25 / R = 22790 Å (∞➔5)", "36 / 11 = 3.27"],
      ["Humphreys", "n₁ = 6", "7, 8... ∞", "Far Infrared", "1764 / (13R)", "36 / R", "49 / 13 = 3.77"]
    ],
    neetTakeaway: "Memorize: λ_max is always obtained for n₂ = n₁ + 1 (smallest energy gap ΔE). λ_min (series limit) is always for n₂ = ∞ (largest energy gap ΔE = 13.6/n₁² eV). Formula for λ_max/λ_min = (n₁+1)² / (2n₁+1)."
  },
  {
    id: "longest-vs-shortest",
    title: "6. Longest vs Shortest Wavelength Transitions",
    headers: ["Parameter", "Longest Wavelength (λ_max, First Line)", "Shortest Wavelength (λ_min, Series Limit)"],
    rows: [
      ["Energy Gap (ΔE)", "Minimum possible energy gap in series", "Maximum possible energy gap in series"],
      ["Frequency (ν)", "Lowest frequency (ν_min)", "Highest frequency (ν_max)"],
      ["Transition Levels", "n₂ = n₁ + 1", "n₂ = ∞"],
      ["General Formula for λ", "\\lambda_{\\text{max}} = \\frac{n_1^2 (n_1+1)^2}{(2n_1+1) R Z^2}", "\\lambda_{\\text{min}} = \\frac{n_1^2}{R Z^2}"],
      ["Ratio λ_max / λ_min", "\\frac{(n_1+1)^2}{2n_1+1}", "Always fixed for any single-electron atom"]
    ],
    neetTakeaway: "NEET Exam Trick: The ratio of longest to shortest wavelength for any given series is completely independent of atomic number Z!"
  },
  {
    id: "hydrogen-vs-hydrogen-like",
    title: "7. Hydrogen (Z=1) vs Hydrogenic Ions (He⁺, Li²⁺, Be³⁺)",
    headers: ["Quantity", "Proportionality to n and Z", "Hydrogen (¹H, Z=1)", "Helium Ion (He⁺, Z=2)", "Lithium Ion (Li²⁺, Z=3)"],
    rows: [
      ["Radius r_n", "r_n ∝ n² / Z", "r₁ = 0.529 Å", "r₁ = 0.265 Å", "r₁ = 0.176 Å"],
      ["Speed v_n", "v_n ∝ Z / n", "v₁ = 2.18 × 10⁶ m/s", "v₁ = 4.36 × 10⁶ m/s", "v₁ = 6.54 × 10⁶ m/s"],
      ["Kinetic Energy K_n", "K_n ∝ Z² / n²", "+13.6 eV", "+54.4 eV", "+122.4 eV"],
      ["Potential Energy U_n", "U_n ∝ -Z² / n²", "-27.2 eV", "-108.8 eV", "-244.8 eV"],
      ["Total Energy E_n", "E_n ∝ -Z² / n²", "-13.6 eV", "-54.4 eV", "-122.4 eV"],
      ["Frequency of Orbit f_n", "f_n ∝ Z² / n³", "f₁ = 6.6 × 10¹⁵ Hz", "4 f₁", "9 f₁"],
      ["Magnetic Field at Nucleus B", "B ∝ Z³ / n⁵", "B₁ ≈ 12.5 T", "8 B₁", "27 B₁"]
    ],
    neetTakeaway: "Z-scaling is one of the top 3 most frequently tested concepts in NEET Modern Physics. Always check if the question asks for H (Z=1), He⁺ (Z=2), or Li²⁺ (Z=3)."
  },
  {
    id: "rutherford-flaws-bohr-fixes",
    title: "8. Rutherford's Limitations & Bohr's Quantum Resolutions",
    headers: ["Rutherford's Theoretical Dilemma", "Classical Physics Cause", "Bohr's Postulate / Quantum Resolution"],
    rows: [
      ["Atomic Instability: Orbiting electron should radiate energy and spiral into nucleus in 10⁻⁸ s", "Larmor's formula: Any accelerating electric charge radiated power P = (q² a²) / (6πε₀ c³)", "Postulate 1: Electrons exist in non-radiating 'stationary orbits' where classical electrodynamics does not apply."],
      ["Continuous Spectrum vs Discrete Lines: Rutherford predicted all emission frequencies", "Orbital frequency changes continuously as radius shrinks smoothly", "Postulate 3: Radiation occurs ONLY during sudden discrete quantum jumps between stationary states (ΔE = hν)."],
      ["No Explanation for Fixed Atomic Dimensions: Why do all hydrogen atoms have the same size (~0.53 Å)?", "Classical mechanics permits any arbitrary orbit radius depending on initial kinetic energy", "Postulate 2: Orbital angular momentum is quantized (L = nh/2π), fixing r₁ = 0.529 Å mathematically."]
    ],
    neetTakeaway: "Bohr did not invent a completely new model from scratch; he retained the heavy central nucleus and planetary orbiting electron from Rutherford, but imposed quantum restrictions on angular momentum and radiation."
  }
];

export const ATOMS_CONCEPTUAL_QAS: ConceptualQA[] = [
  {
    id: "qa-1",
    question: "Why was a very thin gold foil (≈ 2.1 × 10⁻⁷ m) used in the Geiger-Marsden α-particle scattering experiment?",
    answer: "Gold was chosen for two critical physical reasons: (1) Extreme Malleability: Gold can be hammered into an extraordinarily thin foil (approx 1000 atomic layers thick). A thin foil ensures that an incident α-particle undergoes only a SINGLE scattering event rather than multiple scatterings, allowing direct application of Coulomb's single-nucleus formula. (2) Heavy Nucleus: Gold has a high atomic number (Z = 79), meaning its nucleus carries a massive positive charge (+79e) and large mass (approx 50 times that of an α-particle), producing strong electrostatic repulsion without rebounding itself.",
    corePrinciple: "Single-scattering condition and heavy static nucleus approximation.",
    neetRelevance: "High-yield NCERT conceptual question often tested in Assertion-Reason format."
  },
  {
    id: "qa-2",
    question: "Why did Rutherford assume the nucleus remains stationary during an α-particle collision?",
    answer: "A gold nucleus (mass number A ≈ 197) is roughly 50 times heavier than an α-particle (A = 4). In an elastic collision between a light projectile (m) and a very heavy target (M >> m), the target nucleus experiences negligible recoil velocity and kinetic energy, absorbing virtually zero energy while reflecting the projectile. Thus, conservation of energy applies solely to the kinetic and potential energy of the α-particle.",
    corePrinciple: "Elastic collision kinematics with target mass M >> projectile mass m.",
    neetRelevance: "Crucial for deriving the formula for distance of closest approach r₀ = 2Ze² / (4πε₀ K)."
  },
  {
    id: "qa-3",
    question: "Why does the total energy of an electron in a Bohr orbit have a negative sign?",
    answer: "The negative sign signifies that the electron is electrostatically BOUND to the positive nucleus. Potential energy is defined to be zero at infinite separation (r = ∞) where the electron is completely free. Because attractive forces do positive work as the electron is brought from infinity to radius r, the potential energy becomes negative (U = -Ze² / 4πε₀r). Since |U| = 2K, the total energy E = K + U = +K - 2K = -K, which is strictly negative. A bound state requires energy input to liberate the electron.",
    corePrinciple: "Bound state mechanics: E < 0 implies bound system; E = 0 implies ionisation threshold; E > 0 implies an unbound, free electron.",
    neetRelevance: "Forms the mathematical basis of relation E = -K = U/2."
  },
  {
    id: "qa-4",
    question: "State and prove the relationship between Kinetic Energy (K), Potential Energy (U), and Total Energy (E) for an electron in a Bohr orbit.",
    answer: "From centripetal force balance: mv²/r = (1/4πε₀)(Ze²/r²). Thus, Kinetic Energy K = 1/2 mv² = (1/8πε₀)(Ze²/r). Potential Energy U = -(1/4πε₀)(Ze²/r). Therefore, U = -2K. Total Energy E = K + U = K + (-2K) = -K. In summary: E = -K = U / 2, or K = |E| = -E, and U = 2E = -2K.",
    corePrinciple: "Virial Theorem for inverse-square central force fields.",
    neetRelevance: "Directly asked in NEET in at least 5 different past papers!"
  },
  {
    id: "qa-5",
    question: "How did Louis de Broglie explain Bohr's second postulate of angular momentum quantisation?",
    answer: "de Broglie proposed that an orbiting electron behaves as a standing matter wave along its circular orbit. For a stable, constructive standing wave, the circumference of the orbit (2πr) must contain an integral number (n) of de Broglie wavelengths: 2πr = nλ. Substituting de Broglie's wavelength λ = h/p = h/(mv) gives 2πr = n(h/mv), which upon rearranging yields mvr = nh / 2π. Thus, Bohr's empirical quantization rule is an inevitable consequence of the wave-particle duality of matter.",
    corePrinciple: "Constructive interference of electronic matter standing waves: 2πr_n = nλ_n.",
    neetRelevance: "Frequently tested NCERT question linking Chapter 11 (Dual Nature) and Chapter 12 (Atoms)."
  },
  {
    id: "qa-6",
    question: "What is the physical meaning of the fine structure constant α = 1/137?",
    answer: "The fine structure constant α is a dimensionless constant characterizing the strength of the electromagnetic interaction: α = e² / (2ε₀hc) = (1/4πε₀)(e² / ℏc) ≈ 1/137. In Bohr's atomic model, it represents the ratio of the electron's orbital speed in the first Bohr orbit of hydrogen (v₁) to the speed of light in vacuum (c): v₁ = α c = c / 137 ≈ 2.18 × 10⁶ m/s.",
    corePrinciple: "Relativistic scaling parameter in quantum atomic physics.",
    neetRelevance: "Helps memorize electron velocity v₁ = c/137 without complex calculations."
  },
  {
    id: "qa-7",
    question: "When a hydrogen atom emits a photon, does the atom recoil? What is the effect on the photon energy?",
    answer: "Yes, by conservation of linear momentum, when a stationary excited hydrogen atom emits a photon of momentum p = hν/c, the residual atom must recoil in the opposite direction with an equal momentum p_atom = hν/c. The recoil kinetic energy of the atom is K_recoil = p² / (2M). Consequently, the actual emitted photon energy is slightly less than the electronic transition energy: hν = ΔE - K_recoil. For hydrogen, because atomic mass M is large (~1.67 × 10⁻²⁷ kg), K_recoil is extremely small (~10⁻⁸ eV) and typically negligible for NEET calculations, but conceptually non-zero.",
    corePrinciple: "Conservation of linear momentum and total energy in atomic photon emission.",
    neetRelevance: "High-yield advanced NEET numerical concept."
  },
  {
    id: "qa-8",
    question: "Why do spectral lines get crowded (closer together) as we approach the series limit (n₂ ➔ ∞)?",
    answer: "The energy difference between successive energy levels decreases rapidly as n increases, because E_n ∝ -1/n². Specifically, ΔE = E_{n+1} - E_n = 13.6 [1/n² - 1/(n+1)²] ≈ 27.2 / n³ for large n. As n₂ approaches infinity, the energy step approaches zero, meaning the emitted wavelengths differ by progressively smaller increments, causing the spectral lines to converge toward a continuous spectrum at the series limit.",
    corePrinciple: "Inverse cube scaling of energy level separation (ΔE ∝ 1/n³).",
    neetRelevance: "Explains line crowding in hydrogen emission spectrograms."
  },
  {
    id: "qa-9",
    question: "What are the major limitations of the Bohr Atomic Model?",
    answer: "Bohr's model has four major limitations: (1) Single-electron limitation: It is strictly valid only for hydrogen and hydrogenic ions (He⁺, Li²⁺); it fails completely for multi-electron atoms due to electron-electron electrostatic repulsion. (2) Fine structure failure: It cannot explain the splitting of spectral lines into doublets/triplets observed with high-resolution spectrometers. (3) Wave-mechanics violation: It assumes definite, circular orbits with simultaneous exact position and momentum, violating Heisenberg's Uncertainty Principle. (4) Inability to explain Zeeman effect (spectral line splitting in magnetic fields) and Stark effect (spectral line splitting in electric fields) or relative intensities of spectral lines.",
    corePrinciple: "Transition from semi-classical quantum mechanics to modern wave mechanics (Schrödinger equation).",
    neetRelevance: "Frequently tested in multiple-choice questions on 'Which of the following is NOT explained by Bohr's model?'"
  }
];

export const ATOMS_RAPID_REVISION_POINTS = [
  "Geiger-Marsden Experiment: α-particles scattered by thin gold foil. >99.86% pass undeflected, 0.14% deflect >1°, and only 1 in 8000 deflects >90° or rebounds (180°).",
  "Distance of Closest Approach: r₀ = (1/4πε₀) · (2Ze² / K_α) ≈ 10⁻¹⁴ m. Gives upper limit of nuclear radius.",
  "Impact Parameter: b = (1/4πε₀) · [Ze² cot(θ/2) / K]. b = 0 ⟹ θ = 180° (rebound); b large ⟹ θ ≈ 0°.",
  "Rutherford Nuclear Model: Atom consists of a tiny positive nucleus (~10⁻¹⁵ m) surrounded by electrons in empty space (~10⁻¹⁰ m). Failed due to classical EM radiative collapse and inability to explain discrete line spectra.",
  "Bohr Postulate 1: Electrons revolve in non-radiating stationary circular orbits.",
  "Bohr Postulate 2: Orbital angular momentum is quantized: L = mvr = nh / 2π (n = 1, 2, 3...).",
  "Bohr Postulate 3: Photon emitted/absorbed only during electronic transitions: hν = E_i - E_f.",
  "Bohr Radius: r_n = 0.529 (n² / Z) Å. For H ground state: r₁ = 0.529 Å = 5.29 × 10⁻¹¹ m.",
  "Orbital Velocity: v_n = 2.18 × 10⁶ (Z / n) m/s = (c / 137) · (Z / n).",
  "Energy Levels: E_n = -13.6 (Z² / n²) eV. Ground state of H = -13.6 eV; n=2 is -3.40 eV; n=3 is -1.51 eV; n=4 is -0.85 eV.",
  "Energy Relations: Kinetic Energy K = -E; Potential Energy U = 2E = -2K; Total Energy E = K + U = -K = U/2.",
  "Excitation Energy (1 ➔ n): ΔE_exc = 13.6 (1 - 1/n²) eV. 1st excitation (1➔2) = 10.2 eV; 2nd excitation (1➔3) = 12.09 eV.",
  "Ionisation Energy: E_ion = +13.6 Z² eV from ground state. Ionisation Potential V_ion = 13.6 Z² Volts.",
  "Rydberg Formula: 1/λ = R Z² (1/n₁² - 1/n₂²). Rydberg constant R ≈ 1.097 × 10⁷ m⁻¹; 1/R ≈ 912 Å.",
  "Lyman Series: n₁ = 1, n₂ = 2, 3... (Ultraviolet). Lyman-α (2➔1) = 1216 Å; Lyman Limit (∞➔1) = 912 Å.",
  "Balmer Series: n₁ = 2, n₂ = 3, 4... (Visible spectrum). H-α (3➔2) = 6563 Å (Red); Balmer Limit (∞➔2) = 3646 Å.",
  "Paschen (n₁=3, IR), Brackett (n₁=4, IR), Pfund (n₁=5, Far IR), Humphreys (n₁=6, Far IR).",
  "Maximum Spectral Lines from state n: N = n(n-1)/2 (if dropping from state n to ground state n=1).",
  "Lines in transition from n₂ to n₁: N = (n₂ - n₁)(n₂ - n₁ + 1) / 2.",
  "de Broglie Standing Wave Condition: 2πr_n = nλ_n = n (h / mv_n) ⟹ mvr = nh/2π.",
  "Orbital Period & Current: Time period T ∝ n³ / Z²; Frequency f ∝ Z² / n³; Orbital current I ∝ Z² / n³.",
  "Magnetic Field at Center: B ∝ Z³ / n⁵.",
  "Recoil Momentum of Atom upon Photon Emission: p = h/λ = hν/c; K_recoil = p² / (2M)."
];
