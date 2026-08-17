// 16 Original Solved Numericals for Class 12 Chapter 12: Atoms

export interface SolvedNumerical {
  id: string;
  problemTitle: string;
  problemStatement: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Challenging";
  given: { symbol: string; value: string; note?: string }[];
  required: string;
  concept: string;
  formula: string;
  unitConversions: string[];
  stepByStepSolution: string[];
  finalAnswer: string;
  neetShortcut: string;
}

export const ATOMS_NUMERICALS: SolvedNumerical[] = [
  {
    id: "num-1",
    problemTitle: "Bohr Radius of 3rd Orbit of Hydrogen Atom",
    problemStatement: "Calculate the radius of the third stationary Bohr orbit (n = 3) in a neutral hydrogen atom. Given that the radius of the ground state is 0.529 Å.",
    category: "Bohr Orbit Radius",
    difficulty: "Easy",
    given: [
      { symbol: "n", value: "3", note: "Principal quantum number (2nd excited state)" },
      { symbol: "Z", value: "1", note: "Atomic number of Hydrogen" },
      { symbol: "a₀ (r₁)", value: "0.529 Å = 5.29 × 10⁻¹¹ m", note: "Bohr radius" }
    ],
    required: "Radius of 3rd orbit (r₃) in Angstroms and meters",
    concept: "According to Bohr's second postulate, the radius of the nth stationary orbit is directly proportional to n² and inversely proportional to atomic number Z: r_n = a₀ · (n² / Z).",
    formula: "r_n = a_0 \\frac{n^2}{Z} = 0.529 \\frac{n^2}{Z} \\text{ Å}",
    unitConversions: [
      "1 Å = 10⁻¹⁰ m"
    ],
    stepByStepSolution: [
      "Step 1: Identify n and Z for Hydrogen in the 3rd orbit: n = 3, Z = 1.",
      "Step 2: Apply the Bohr radius proportionality formula: r₃ = r₁ × (3² / 1) = 9 × r₁.",
      "Step 3: Substitute r₁ = 0.529 Å: r₃ = 9 × 0.529 Å.",
      "Step 4: Perform arithmetic: 9 × 0.529 = 4.761 Å.",
      "Step 5: Convert to SI meters: r₃ = 4.761 × 10⁻¹⁰ m = 0.4761 nm."
    ],
    finalAnswer: "r₃ = 4.761 Å = 4.761 × 10⁻¹⁰ m",
    neetShortcut: "Remember the square sequence: r₁ = 0.53 Å, r₂ = 4(0.53) = 2.12 Å, r₃ = 9(0.53) = 4.76 Å, r₄ = 16(0.53) = 8.46 Å."
  },
  {
    id: "num-2",
    problemTitle: "Radius of 2nd Orbit in Singly Ionized Helium (He⁺)",
    problemStatement: "Determine the radius of the first excited state (n = 2) of a singly ionized helium atom (He⁺).",
    category: "Hydrogenic Species Radius",
    difficulty: "Easy",
    given: [
      { symbol: "Z", value: "2", note: "Atomic number of Helium" },
      { symbol: "n", value: "2", note: "1st excited state means n = 2" },
      { symbol: "a₀", value: "0.529 Å", note: "First Bohr radius of H" }
    ],
    required: "Radius r₂ of He⁺",
    concept: "He⁺ is a one-electron hydrogen-like ion with Z = 2. The orbital radius scales as r_n = a₀ (n² / Z).",
    formula: "r_n(He^+) = a_0 \\frac{n^2}{Z} = 0.529 \\times \\frac{2^2}{2} \\text{ Å}",
    unitConversions: [
      "1 Å = 10⁻¹⁰ m"
    ],
    stepByStepSolution: [
      "Step 1: Note that 'first excited state' corresponds to principal quantum number n = 2.",
      "Step 2: Helium atomic number Z = 2.",
      "Step 3: Substitute into the scaling relation: r₂(He⁺) = 0.529 × (2² / 2) = 0.529 × (4 / 2) = 2 × 0.529 Å.",
      "Step 4: Calculate: r₂ = 1.058 Å = 1.058 × 10⁻¹⁰ m."
    ],
    finalAnswer: "r₂(He⁺) = 1.058 Å = 1.058 × 10⁻¹⁰ m (which is exactly twice the ground state radius of H)",
    neetShortcut: "For He⁺, r_n = 0.529 (n²/2). For n=2, r = 2 a₀ = 1.058 Å. Always verify whether the question asks for ground state (n=1) or 1st excited state (n=2)."
  },
  {
    id: "num-3",
    problemTitle: "Orbital Speed of Electron in 1st Bohr Orbit of Hydrogen",
    problemStatement: "Calculate the orbital speed of an electron revolving in the ground state (n = 1) of a hydrogen atom, and express it as a fraction of the speed of light in vacuum (c).",
    category: "Orbital Velocity",
    difficulty: "Medium",
    given: [
      { symbol: "e", value: "1.602 × 10⁻¹⁹ C", note: "Electronic charge" },
      { symbol: "ε₀", value: "8.854 × 10⁻¹² F/m", note: "Permittivity of free space" },
      { symbol: "h", value: "6.626 × 10⁻³⁴ J·s", note: "Planck constant" },
      { symbol: "c", value: "3.00 × 10⁸ m/s", note: "Speed of light in vacuum" },
      { symbol: "Z", value: "1", note: "Hydrogen" },
      { symbol: "n", value: "1", note: "Ground state" }
    ],
    required: "Velocity v₁ (m/s) and ratio v₁ / c",
    concept: "From Bohr's postulates (mvr = nh/2π and mv²/r = e²/4πε₀r²), orbital speed is given by v = e² / (2ε₀nh) = (c/137) · (Z/n).",
    formula: "v_n = \\frac{e^2}{2 \\varepsilon_0 n h} = \\left(\\frac{c}{137}\\right) \\frac{Z}{n}",
    unitConversions: [],
    stepByStepSolution: [
      "Step 1: Set n = 1, Z = 1 for ground state hydrogen.",
      "Step 2: v₁ = (1.602 × 10⁻¹⁹)² / [2 × (8.854 × 10⁻¹²) × 1 × (6.626 × 10⁻³⁴)].",
      "Step 3: Numerator = 2.5664 × 10⁻³⁸.",
      "Step 4: Denominator = 2 × 8.854 × 10⁻¹² × 6.626 × 10⁻³⁴ = 1.1732 × 10⁻⁴⁴.",
      "Step 5: v₁ = 2.5664 × 10⁻³⁸ / 1.1732 × 10⁻⁴⁴ ≈ 2.187 × 10⁶ m/s.",
      "Step 6: Compute ratio with c: v₁ / c = 2.187 × 10⁶ / 3.00 × 10⁸ ≈ 1 / 137.04."
    ],
    finalAnswer: "v₁ = 2.187 × 10⁶ m/s ≈ c / 137",
    neetShortcut: "Never do long division in NEET! Memorize: v₁ = c / 137 ≈ 2.18 × 10⁶ m/s. Then v_n = 2.18 × 10⁶ (Z / n) m/s."
  },
  {
    id: "num-4",
    problemTitle: "Kinetic, Potential, and Total Energy in 2nd Orbit of Hydrogen",
    problemStatement: "For an electron in the second stationary orbit (n = 2) of a hydrogen atom, calculate: (a) Total Energy E₂, (b) Kinetic Energy K₂, and (c) Potential Energy U₂ in electron-volts.",
    category: "Energy Levels & Relations",
    difficulty: "Easy",
    given: [
      { symbol: "E₁", value: "-13.6 eV", note: "Ground state total energy of Hydrogen" },
      { symbol: "n", value: "2", note: "First excited state" },
      { symbol: "Z", value: "1", note: "Hydrogen" }
    ],
    required: "E₂ (eV), K₂ (eV), U₂ (eV)",
    concept: "Total energy E_n = E₁ / n². By virial theorem for inverse-square electrostatic force: Kinetic energy K = -E, Potential energy U = 2E.",
    formula: "E_n = -\\frac{13.6}{n^2} \\text{ eV}, \\quad K_n = -E_n = +\\frac{13.6}{n^2} \\text{ eV}, \\quad U_n = 2E_n = -\\frac{27.2}{n^2} \\text{ eV}",
    unitConversions: [],
    stepByStepSolution: [
      "Step 1: Calculate Total Energy for n = 2: E₂ = -13.6 / (2²) = -13.6 / 4 = -3.40 eV.",
      "Step 2: Kinetic Energy is the negative of Total Energy: K₂ = -E₂ = -(-3.40 eV) = +3.40 eV.",
      "Step 3: Potential Energy is twice the Total Energy: U₂ = 2 × E₂ = 2 × (-3.40 eV) = -6.80 eV.",
      "Step 4: Verify energy conservation: Total Energy = K₂ + U₂ = +3.40 + (-6.80) = -3.40 eV (Consistent!)."
    ],
    finalAnswer: "E₂ = -3.40 eV, K₂ = +3.40 eV, U₂ = -6.80 eV",
    neetShortcut: "Golden rule for NEET: K is always POSITIVE. U and E are always NEGATIVE. |U| = 2K = 2|E|."
  },
  {
    id: "num-5",
    problemTitle: "First and Second Excitation Energies of Hydrogen",
    problemStatement: "Determine the energy required to excite an electron in a hydrogen atom from: (a) ground state to the 1st excited state, and (b) ground state to the 2nd excited state.",
    category: "Excitation Energy",
    difficulty: "Easy",
    given: [
      { symbol: "E₁", value: "-13.60 eV", note: "Ground state (n=1)" },
      { symbol: "E₂", value: "-3.40 eV", note: "1st excited state (n=2)" },
      { symbol: "E₃", value: "-1.51 eV", note: "2nd excited state (n=3)" }
    ],
    required: "1st Excitation energy ΔE₁➔₂ and 2nd Excitation energy ΔE₁➔₃",
    concept: "Excitation energy is the difference in total energy between the higher excited state and the ground state: ΔE = E_n - E₁.",
    formula: "\\Delta E_{\\text{exc}} = E_n - E_1 = 13.6 \\left(1 - \\frac{1}{n^2}\\right) \\text{ eV}",
    unitConversions: [],
    stepByStepSolution: [
      "Step 1: Part (a) - 1st excited state is n = 2.",
      "ΔE(1➔2) = E₂ - E₁ = -3.40 eV - (-13.60 eV) = -3.40 + 13.60 = +10.20 eV.",
      "Step 2: Part (b) - 2nd excited state is n = 3.",
      "ΔE(1➔3) = E₃ - E₁ = -1.51 eV - (-13.60 eV) = -1.51 + 13.60 = +12.09 eV."
    ],
    finalAnswer: "1st Excitation Energy = +10.20 eV; 2nd Excitation Energy = +12.09 eV",
    neetShortcut: "Memorize these two key numbers: 10.2 eV (1➔2) and 12.09 eV (1➔3). NEET often asks: 'If hydrogen is bombarded with 12.5 eV electrons, up to which level can it be excited?' Answer: n = 3 (since 12.5 eV > 12.09 eV but < 12.75 eV for n=4)."
  },
  {
    id: "num-6",
    problemTitle: "Ionisation Energy of Doubly Ionized Lithium (Li²⁺)",
    problemStatement: "Find the ionisation energy and ionisation potential of doubly ionized lithium (Li²⁺) in its ground state. Also find the energy required to excite it from n = 1 to n = 3.",
    category: "Ionisation & Hydrogenic Ions",
    difficulty: "Medium",
    given: [
      { symbol: "Z", value: "3", note: "Lithium atomic number" },
      { symbol: "E₁(H)", value: "-13.6 eV", note: "Hydrogen ground state energy" }
    ],
    required: "Ionisation energy E_ion(Li²⁺), Ionisation potential V_ion, and excitation energy ΔE(1➔3)",
    concept: "Li²⁺ is a single-electron ion (Z = 3). Energy of nth level is E_n = -13.6 (Z² / n²) eV. Ionisation energy is E_∞ - E₁ = +13.6 Z² eV.",
    formula: "E_n = -13.6 \\frac{Z^2}{n^2} \\text{ eV}, \\quad E_{\\text{ion}} = 13.6 Z^2 \\text{ eV}",
    unitConversions: [],
    stepByStepSolution: [
      "Step 1: Ground state energy of Li²⁺ (n=1, Z=3): E₁ = -13.6 × (3² / 1²) = -13.6 × 9 = -122.4 eV.",
      "Step 2: Ionisation energy = E_∞ - E₁ = 0 - (-122.4 eV) = +122.4 eV.",
      "Step 3: Ionisation potential V_ion = E_ion / e = 122.4 Volts.",
      "Step 4: Energy in n=3: E₃ = -13.6 × (3² / 3²) = -13.6 × (9 / 9) = -13.6 eV.",
      "Step 5: Excitation energy (1 ➔ 3): ΔE = E₃ - E₁ = -13.6 eV - (-122.4 eV) = +108.8 eV."
    ],
    finalAnswer: "Ionisation Energy = 122.4 eV, Ionisation Potential = 122.4 V, Excitation Energy (1➔3) = 108.8 eV",
    neetShortcut: "Note that E₃ of Li²⁺ (-13.6 eV) is EXACTLY equal to E₁ of H (-13.6 eV) because Z/n = 3/3 = 1!"
  },
  {
    id: "num-7",
    problemTitle: "Wavelength and Photon Energy of Balmer First Line (H-alpha)",
    problemStatement: "Calculate the wavelength (in nm and Å) and photon energy (in eV) of the first line of the Balmer series (H_α line) of hydrogen spectrum. (R = 1.097 × 10⁷ m⁻¹)",
    category: "Spectral Transitions",
    difficulty: "Medium",
    given: [
      { symbol: "n₁", value: "2", note: "Balmer series lower level" },
      { symbol: "n₂", value: "3", note: "First line (H-alpha) upper level" },
      { symbol: "R", value: "1.097 × 10⁷ m⁻¹", note: "Rydberg constant" },
      { symbol: "Z", value: "1", note: "Hydrogen" }
    ],
    required: "Wavelength λ and photon energy E_photon",
    concept: "The Rydberg formula gives 1/λ = R Z² (1/n₁² - 1/n₂²). Photon energy is ΔE = E₃ - E₂.",
    formula: "\\frac{1}{\\lambda} = R \\left(\\frac{1}{2^2} - \\frac{1}{3^2}\\right) = R \\left(\\frac{1}{4} - \\frac{1}{9}\\right) = \\frac{5R}{36}",
    unitConversions: [
      "1 m = 10⁹ nm = 10¹⁰ Å"
    ],
    stepByStepSolution: [
      "Step 1: Identify transition levels for H_α line: n₁ = 2, n₂ = 3.",
      "Step 2: 1/λ = R (1/4 - 1/9) = R (5/36).",
      "Step 3: Invert to solve for λ: λ = 36 / (5 R).",
      "Step 4: Substitute R = 1.097 × 10⁷ m⁻¹: λ = 36 / (5 × 1.097 × 10⁷) = 36 / (5.485 × 10⁷) = 6.563 × 10⁻⁷ m.",
      "Step 5: Convert units: λ = 656.3 nm = 6563 Å (Red line).",
      "Step 6: Calculate photon energy: ΔE = E₃ - E₂ = -1.51 eV - (-3.40 eV) = +1.89 eV."
    ],
    finalAnswer: "λ(H_α) = 656.3 nm = 6563 Å, Photon Energy = 1.89 eV (Red region)",
    neetShortcut: "Use 1/R ≈ 912 Å: λ(H_α) = (36/5) × 912 Å = 7.2 × 912 = 6566 Å ≈ 656.3 nm. Solves in under 10 seconds!"
  },
  {
    id: "num-8",
    problemTitle: "Frequency and Wavelength of Lyman Series Limit",
    problemStatement: "Find the wavelength (in Å) and frequency (in Hz) of the series limit (shortest wavelength line) of the Lyman series of hydrogen atom.",
    category: "Series Limit",
    difficulty: "Easy",
    given: [
      { symbol: "n₁", value: "1", note: "Lyman series lower level" },
      { symbol: "n₂", value: "∞", note: "Series limit corresponds to n₂ = infinity" },
      { symbol: "R", value: "1.097 × 10⁷ m⁻¹", note: "Rydberg constant" },
      { symbol: "c", value: "3.00 × 10⁸ m/s", note: "Speed of light" }
    ],
    required: "Wavelength λ_min and frequency ν_max",
    concept: "The series limit is the shortest wavelength / highest frequency transition in the series, occurring when an electron transitions from n₂ = ∞ to n₁.",
    formula: "\\frac{1}{\\lambda_{\\text{min}}} = R \\left(\\frac{1}{1^2} - \\frac{1}{\\infty^2}\\right) = R \\implies \\lambda_{\\text{min}} = \\frac{1}{R}",
    unitConversions: [
      "1/R = 911.6 Å ≈ 912 Å = 91.2 nm"
    ],
    stepByStepSolution: [
      "Step 1: Set n₁ = 1 and n₂ = ∞ in the Rydberg formula.",
      "Step 2: 1/λ_min = R (1 - 0) = R ⟹ λ_min = 1/R.",
      "Step 3: Calculate λ_min = 1 / (1.097 × 10⁷ m⁻¹) = 9.116 × 10⁻⁸ m = 91.2 nm = 912 Å.",
      "Step 4: Calculate frequency: ν_max = c / λ_min = c × R = (3.00 × 10⁸ m/s) × (1.097 × 10⁷ m⁻¹).",
      "Step 5: ν_max = 3.29 × 10¹⁵ Hz."
    ],
    finalAnswer: "λ_min(Lyman) = 91.2 nm = 912 Å (Ultraviolet), ν_max = 3.29 × 10¹⁵ Hz",
    neetShortcut: "Series limit of Lyman is directly 1/R = 912 Å. Series limit of Balmer is 4/R = 4 × 912 = 3648 Å = 364.8 nm."
  },
  {
    id: "num-9",
    problemTitle: "Ratio of Longest to Shortest Wavelength in Lyman and Balmer Series",
    problemStatement: "Calculate: (a) the ratio of longest to shortest wavelength in the Lyman series, and (b) the ratio of longest to shortest wavelength in the Balmer series of hydrogen atom.",
    category: "Wavelength Ratios",
    difficulty: "Medium",
    given: [
      { symbol: "Lyman", value: "n₁ = 1; longest: n₂=2; shortest: n₂=∞" },
      { symbol: "Balmer", value: "n₁ = 2; longest: n₂=3; shortest: n₂=∞" }
    ],
    required: "(λ_max / λ_min) for Lyman and Balmer series",
    concept: "For any series with base level n₁, λ_max occurs for n₂ = n₁ + 1, and λ_min occurs for n₂ = ∞. The ratio is given by (λ_max / λ_min) = (n₁+1)² / (2n₁+1).",
    formula: "\\frac{\\lambda_{\\text{max}}}{\\lambda_{\\text{min}}} = \\frac{(n_1 + 1)^2}{2n_1 + 1}",
    unitConversions: [],
    stepByStepSolution: [
      "Step 1: For Lyman Series (n₁ = 1):",
      "1/λ_max = R (1/1² - 1/2²) = R (1 - 1/4) = 3R/4 ⟹ λ_max = 4 / (3R).",
      "1/λ_min = R (1/1² - 1/∞) = R ⟹ λ_min = 1/R.",
      "Ratio = λ_max / λ_min = [4 / (3R)] / [1/R] = 4/3 = 1.333.",
      "Step 2: For Balmer Series (n₁ = 2):",
      "1/λ_max = R (1/2² - 1/3²) = R (1/4 - 1/9) = 5R/36 ⟹ λ_max = 36 / (5R).",
      "1/λ_min = R (1/2² - 1/∞) = R/4 ⟹ λ_min = 4/R.",
      "Ratio = λ_max / λ_min = [36 / (5R)] / [4/R] = 36 / (5 × 4) = 36 / 20 = 9/5 = 1.80."
    ],
    finalAnswer: "Lyman ratio = 4/3; Balmer ratio = 9/5; Paschen ratio = 16/7",
    neetShortcut: "Universal series formula: λ_max / λ_min = (n₁+1)² / (2n₁+1). Plug in n₁=1 ➔ 4/3; n₁=2 ➔ 9/5; n₁=3 ➔ 16/7; n₁=4 ➔ 25/9!"
  },
  {
    id: "num-10",
    problemTitle: "Matching Spectral Wavelength between He⁺ and Hydrogen",
    problemStatement: "Which transition in singly ionized Helium (He⁺) will emit a photon having the EXACT same wavelength as the first line of the Lyman series (n=2 ➔ n=1) in Hydrogen atom?",
    category: "Hydrogenic Equivalence",
    difficulty: "Challenging",
    given: [
      { symbol: "H-transition", value: "n_i = 2 ➔ n_f = 1, Z = 1" },
      { symbol: "He⁺", value: "Z = 2" }
    ],
    required: "Initial and final quantum numbers (n₂, n₁) in He⁺",
    concept: "Wavelength formula: 1/λ = R Z² (1/n₁² - 1/n₂²). For λ(He⁺) = λ(H), the factor Z²(1/n₁² - 1/n₂²) must be identical for both species.",
    formula: "Z_H^2 \\left(\\frac{1}{1^2} - \\frac{1}{2^2}\\right) = Z_{He}^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)",
    unitConversions: [],
    stepByStepSolution: [
      "Step 1: Calculate the spectral factor for Hydrogen: (1)² × (1/1 - 1/4) = 3/4.",
      "Step 2: For He⁺, Z = 2. So Z² = 4.",
      "Step 3: Set up the equality: 3/4 = 4 × (1/n₁² - 1/n₂²).",
      "Step 4: Divide both sides by 4: (1/n₁² - 1/n₂²) = 3/16.",
      "Step 5: Express 3/16 as difference of squares: 3/16 = (4 - 1)/16 = 4/16 - 1/16 = 1/4 - 1/16 = 1/2² - 1/4².",
      "Step 6: By direct comparison: n₁ = 2 and n₂ = 4."
    ],
    finalAnswer: "Transition in He⁺ is n = 4 ➔ n = 2 (which is the first line of the Balmer series of He⁺)",
    neetShortcut: "General Rule: For He⁺ (Z=2) to match H (Z=1), simply multiply the hydrogen quantum numbers by 2! So (2 ➔ 1) in H becomes (2×2 ➔ 1×2) = (4 ➔ 2) in He⁺. For Li²⁺ (Z=3), multiply by 3!"
  },
  {
    id: "num-11",
    problemTitle: "Total Number of Spectral Lines Emitted from n = 5",
    problemStatement: "A sample of hydrogen gas is excited such that all electrons reach the state with principal quantum number n = 5. Calculate: (a) the maximum total number of spectral lines emitted during de-excitation to ground state, and (b) how many of these lines fall in the visible (Balmer) region.",
    category: "Spectral Line Counting",
    difficulty: "Easy",
    given: [
      { symbol: "n", value: "5", note: "Highest excited state" },
      { symbol: "Ground state", value: "n = 1" }
    ],
    required: "(a) Total spectral lines N, (b) Number of Balmer lines",
    concept: "The total number of emission lines possible when electrons drop from state n to ground state (n=1) is given by the combination formula N = ⁿC₂ = n(n - 1) / 2.",
    formula: "N = \\frac{n(n - 1)}{2}",
    unitConversions: [],
    stepByStepSolution: [
      "Step 1: Total number of emission lines for n = 5:",
      "N = 5 × (5 - 1) / 2 = (5 × 4) / 2 = 10 lines.",
      "Step 2: Breakdown of lines by series:",
      "• Lyman lines (terminating at n₁=1): transitions from n=5, 4, 3, 2 ➔ 4 lines (UV).",
      "• Balmer lines (terminating at n₁=2): transitions from n=5, 4, 3 ➔ 3 lines (Visible).",
      "• Paschen lines (terminating at n₁=3): transitions from n=5, 4 ➔ 2 lines (IR).",
      "• Brackett lines (terminating at n₁=4): transition from n=5 ➔ 1 line (IR).",
      "Check sum: 4 + 3 + 2 + 1 = 10 lines."
    ],
    finalAnswer: "(a) Total lines = 10; (b) Visible (Balmer) lines = 3 lines (5➔2, 4➔2, 3➔2)",
    neetShortcut: "Number of lines in any series terminating at n₁ from upper level n is simply (n - n₁). For Balmer (n₁=2): 5 - 2 = 3 lines!"
  },
  {
    id: "num-12",
    problemTitle: "Angular Momentum in 3rd Bohr Orbit",
    problemStatement: "Calculate the orbital angular momentum of an electron in the 3rd orbit of hydrogen atom in SI units. Also find the change in angular momentum when it jumps to the ground state.",
    category: "Angular Momentum Quantisation",
    difficulty: "Easy",
    given: [
      { symbol: "n_initial", value: "3" },
      { symbol: "n_final", value: "1" },
      { symbol: "h", value: "6.626 × 10⁻³⁴ J·s", note: "Planck constant" }
    ],
    required: "L₃ and ΔL(3 ➔ 1)",
    concept: "Bohr's second postulate states L_n = n (h / 2π). The change during transition is ΔL = (n_initial - n_final) · (h / 2π).",
    formula: "L_n = \\frac{n h}{2\\pi}, \\quad \\Delta L = \\frac{(n_2 - n_1) h}{2\\pi}",
    unitConversions: [],
    stepByStepSolution: [
      "Step 1: Calculate L₃ for n = 3:",
      "L₃ = 3 × [6.626 × 10⁻³⁴ / (2 × 3.1416)] = 3 × [1.0546 × 10⁻³⁴] = 3.164 × 10⁻³⁴ J·s (or kg·m²/s).",
      "Step 2: Calculate change in angular momentum during 3 ➔ 1 jump:",
      "ΔL = L₃ - L₁ = (3 - 1) × (h / 2π) = 2 × (h / 2π) = h / π.",
      "Step 3: ΔL = 6.626 × 10⁻³⁴ / 3.1416 = 2.109 × 10⁻³⁴ J·s."
    ],
    finalAnswer: "L₃ = 3.164 × 10⁻³⁴ J·s, ΔL = 2.109 × 10⁻³⁴ J·s = h/π",
    neetShortcut: "ΔL between any two levels is always an integer multiple of (h/2π). For 3➔1, Δn = 2, so ΔL = 2(h/2π) = h/π."
  },
  {
    id: "num-13",
    problemTitle: "Recoil Speed of Hydrogen Atom Emitting Lyman-alpha Photon",
    problemStatement: "A stationary hydrogen atom in its first excited state (n = 2) de-excites to the ground state (n = 1) by emitting a photon. Calculate the recoil speed acquired by the hydrogen atom. (Mass of H-atom m_H = 1.67 × 10⁻²⁷ kg).",
    category: "Conservation of Momentum in Atom",
    difficulty: "Challenging",
    given: [
      { symbol: "E₂ - E₁", value: "10.2 eV", note: "Lyman-alpha transition energy" },
      { symbol: "m_H", value: "1.67 × 10⁻²⁷ kg", note: "Mass of hydrogen atom" },
      { symbol: "c", value: "3.00 × 10⁸ m/s", note: "Speed of light" },
      { symbol: "1 eV", value: "1.602 × 10⁻¹⁹ J" }
    ],
    required: "Recoil speed v_recoil (m/s)",
    concept: "By conservation of linear momentum: Initial momentum = 0. Momentum of emitted photon p_photon = E_photon / c. Momentum of recoiling atom p_atom = m_H · v_recoil = p_photon.",
    formula: "v_{\\text{recoil}} = \\frac{E_{\\text{photon}}}{m_H c} = \\frac{h\\nu}{m_H c}",
    unitConversions: [
      "10.2 eV = 10.2 × 1.602 × 10⁻¹⁹ J = 1.634 × 10⁻¹⁸ J"
    ],
    stepByStepSolution: [
      "Step 1: Calculate energy of Lyman-α photon in Joules:",
      "E = 10.2 eV = 1.634 × 10⁻¹⁸ J.",
      "Step 2: Momentum of the photon: p = E / c = (1.634 × 10⁻¹⁸ J) / (3.00 × 10⁸ m/s) = 5.447 × 10⁻²⁷ kg·m/s.",
      "Step 3: Equate to atomic recoil momentum: m_H × v_recoil = 5.447 × 10⁻²⁷.",
      "Step 4: Solve for v_recoil: v_recoil = 5.447 × 10⁻²⁷ / (1.67 × 10⁻²⁷) ≈ 3.26 m/s."
    ],
    finalAnswer: "v_recoil = 3.26 m/s",
    neetShortcut: "Formula: v_recoil = ΔE / (M c). For H emitting 10.2 eV, v ≈ 3.26 m/s."
  },
  {
    id: "num-14",
    problemTitle: "Distance of Closest Approach for 5.5 MeV Alpha Particle",
    problemStatement: "In a Geiger-Marsden experiment, an alpha particle of kinetic energy 5.5 MeV is directed head-on toward a gold nucleus (Z = 79). Calculate the distance of closest approach. (1 / 4πε₀ = 9 × 10⁹ N·m²/C²).",
    category: "Rutherford Scattering",
    difficulty: "Medium",
    given: [
      { symbol: "K_α", value: "5.5 MeV", note: "Kinetic energy of alpha particle" },
      { symbol: "Z", value: "79", note: "Gold nucleus" },
      { symbol: "e", value: "1.6 × 10⁻¹⁹ C" },
      { symbol: "1 / 4πε₀", value: "9 × 10⁹ N·m²/C²" }
    ],
    required: "Distance of closest approach r₀",
    concept: "At closest approach (turning point), initial kinetic energy of the α-particle is entirely converted into electrostatic potential energy between the α-particle (q₁ = +2e) and gold nucleus (q₂ = +Ze).",
    formula: "r_0 = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2 Z e^2}{K_\\alpha}",
    unitConversions: [
      "5.5 MeV = 5.5 × 10⁶ × 1.6 × 10⁻¹⁹ J = 8.8 × 10⁻¹³ J"
    ],
    stepByStepSolution: [
      "Step 1: Convert K_α to Joules: K_α = 5.5 × 1.6 × 10⁻¹³ J = 8.8 × 10⁻¹³ J.",
      "Step 2: Substitute values into formula: r₀ = [9 × 10⁹ × 2 × 79 × (1.6 × 10⁻¹⁹)²] / [8.8 × 10⁻¹³].",
      "Step 3: Numerator = 9 × 10⁹ × 158 × 2.56 × 10⁻³⁸ = 3.640 × 10⁻²⁶.",
      "Step 4: Divide: r₀ = (3.640 × 10⁻²⁶) / (8.8 × 10⁻¹³) = 4.136 × 10⁻¹⁴ m = 41.4 fm."
    ],
    finalAnswer: "r₀ = 4.14 × 10⁻¹⁴ m = 41.4 fm (approx 4.1 × 10⁻¹⁴ m)",
    neetShortcut: "r₀ ∝ Z / K. If energy of α-particle is doubled, r₀ is halved. If gold (Z=79) is replaced by copper (Z=29), r₀ becomes 29/79 of original."
  },
  {
    id: "num-15",
    problemTitle: "Orbital Frequency and Time Period in First Bohr Orbit",
    problemStatement: "Calculate the orbital frequency (revolutions per second) and orbital period of an electron in the ground state (n = 1) of a hydrogen atom. (r₁ = 5.29 × 10⁻¹¹ m, v₁ = 2.18 × 10⁶ m/s).",
    category: "Orbital Kinematics",
    difficulty: "Medium",
    given: [
      { symbol: "r₁", value: "5.29 × 10⁻¹¹ m" },
      { symbol: "v₁", value: "2.18 × 10⁶ m/s" }
    ],
    required: "Frequency f₁ (Hz) and Time period T₁ (s)",
    concept: "Orbital period T = 2πr / v. Orbital frequency f = 1 / T = v / (2πr).",
    formula: "f = \\frac{v}{2\\pi r}, \\quad T = \\frac{2\\pi r}{v}",
    unitConversions: [],
    stepByStepSolution: [
      "Step 1: Compute circumference of 1st orbit: 2πr₁ = 2 × 3.1416 × 5.29 × 10⁻¹¹ = 3.324 × 10⁻¹⁰ m.",
      "Step 2: Calculate time period: T₁ = (3.324 × 10⁻¹⁰ m) / (2.18 × 10⁶ m/s) = 1.525 × 10⁻¹⁶ s.",
      "Step 3: Calculate frequency: f₁ = 1 / T₁ = 1 / (1.525 × 10⁻¹⁶) ≈ 6.56 × 10¹⁵ Hz (or rev/s)."
    ],
    finalAnswer: "Orbital Frequency f₁ = 6.56 × 10¹⁵ Hz, Orbital Period T₁ = 1.52 × 10⁻¹⁶ s",
    neetShortcut: "Proportionality rules for NEET: T ∝ n³ / Z² and f ∝ Z² / n³. For n=2, period is 2³ = 8 times longer; frequency is 1/8th."
  },
  {
    id: "num-16",
    problemTitle: "Equivalent Electric Current and Magnetic Field in 1st Orbit",
    problemStatement: "Due to the orbital motion of an electron in the ground state of hydrogen atom, calculate: (a) the equivalent electric current (in mA), and (b) the magnetic field produced at the nucleus (in Tesla).",
    category: "Electrodynamic Analogies",
    difficulty: "Challenging",
    given: [
      { symbol: "e", value: "1.602 × 10⁻¹⁹ C" },
      { symbol: "f₁", value: "6.56 × 10¹⁵ Hz", note: "Orbital frequency" },
      { symbol: "r₁", value: "5.29 × 10⁻¹¹ m", note: "Orbit radius" },
      { symbol: "μ₀", value: "4π × 10⁻⁷ T·m/A" }
    ],
    required: "Current I₁ (mA) and Magnetic field B₁ (Tesla)",
    concept: "Equivalent current I = q / T = e · f. Magnetic field at the center of a circular current loop is B = μ₀ I / (2r).",
    formula: "I = e f, \\quad B = \\frac{\\mu_0 I}{2 r}",
    unitConversions: [
      "1 A = 1000 mA"
    ],
    stepByStepSolution: [
      "Step 1: Calculate equivalent orbital current:",
      "I = (1.602 × 10⁻¹⁹ C) × (6.56 × 10¹⁵ s⁻¹) = 1.051 × 10⁻³ A = 1.05 mA.",
      "Step 2: Calculate magnetic field at center (nucleus):",
      "B = (4π × 10⁻⁷ × 1.051 × 10⁻³) / (2 × 5.29 × 10⁻¹¹).",
      "Step 3: B = (1.321 × 10⁻⁹) / (1.058 × 10⁻¹⁰) ≈ 12.48 Tesla ≈ 12.5 T."
    ],
    finalAnswer: "Orbital Current I₁ = 1.05 mA, Magnetic Field at Nucleus B₁ = 12.5 Tesla",
    neetShortcut: "Proportionality for NEET: Current I ∝ Z² / n³; Magnetic Field B ∝ Z³ / n⁵."
  }
];
