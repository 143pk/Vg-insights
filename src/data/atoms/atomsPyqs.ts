// Verified NEET UG / AIPMT Past Questions & Practice MCQs for Chapter 12: Atoms

export interface PYQItem {
  id: string;
  year: string;
  exam: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  conceptTested: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface PracticeMCQ {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  subtopic: string;
  trapAlert?: string;
}

export const ATOMS_VERIFIED_PYQS: PYQItem[] = [
  {
    id: "pyq-2023",
    year: "NEET 2023",
    exam: "NEET UG",
    question: "The ratio of the radius of the 2nd orbit of He⁺ to the radius of the 1st orbit of H-atom is:",
    options: [
      "1 : 1",
      "2 : 1",
      "1 : 2",
      "4 : 1"
    ],
    correctOptionIndex: 1,
    explanation: "Radius of nth orbit in a single electron species is given by r_n = a₀ (n² / Z). For He⁺ in 2nd orbit (n = 2, Z = 2): r₂(He⁺) = a₀ (2² / 2) = 2 a₀. For H in 1st orbit (n = 1, Z = 1): r₁(H) = a₀ (1² / 1) = a₀. Ratio = r₂(He⁺) / r₁(H) = 2 a₀ / a₀ = 2 / 1 = 2 : 1.",
    conceptTested: "Bohr orbit radius proportionality r_n ∝ n²/Z",
    difficulty: "Easy"
  },
  {
    id: "pyq-2022",
    year: "NEET 2022",
    exam: "NEET UG",
    question: "If the radius of the inner-most Bohr orbit of hydrogen atom is r₁, the radius of the orbit in the first excited state of Li²⁺ ion will be:",
    options: [
      "r₁",
      "4/3 r₁",
      "9/4 r₁",
      "3/4 r₁"
    ],
    correctOptionIndex: 1,
    explanation: "For single-electron atom/ion: r_n = r₁ · (n² / Z). For Li²⁺: Z = 3. 'First excited state' corresponds to principal quantum number n = 2. Therefore, r = r₁ · (2² / 3) = (4/3) r₁.",
    conceptTested: "Identification of first excited state as n=2 and Z-scaling of Bohr radius",
    difficulty: "Easy"
  },
  {
    id: "pyq-2021",
    year: "NEET 2021",
    exam: "NEET UG",
    question: "The ratio of the wavelengths of the last line of Balmer series and the last line of Lyman series is:",
    options: [
      "1",
      "4",
      "0.5",
      "2"
    ],
    correctOptionIndex: 1,
    explanation: "'Last line' of any series is its series limit (n₂ = ∞). For Lyman: 1/λ_L = R(1/1² - 1/∞) = R ⟹ λ_L = 1/R. For Balmer: 1/λ_B = R(1/2² - 1/∞) = R/4 ⟹ λ_B = 4/R. Ratio λ_B / λ_L = (4/R) / (1/R) = 4.",
    conceptTested: "Series limits in hydrogen spectrum and wavelength ratios",
    difficulty: "Easy"
  },
  {
    id: "pyq-2020",
    year: "NEET 2020",
    exam: "NEET UG",
    question: "For which one of the following, Bohr model is not valid?",
    options: [
      "Singly ionised helium atom (He⁺)",
      "Deuteron atom",
      "Singly ionised neon atom (Ne⁺)",
      "Hydrogen atom"
    ],
    correctOptionIndex: 2,
    explanation: "Bohr's atomic model is strictly valid ONLY for single-electron (hydrogenic) systems. Hydrogen (1 e⁻), Deuteron (1 e⁻), and He⁺ (1 e⁻) are all single-electron systems. Singly ionised neon (Ne⁺) has 9 electrons (Z = 10, electrons = 10 - 1 = 9) and is a multi-electron system where electron-electron electrostatic repulsion invalidates Bohr's theory.",
    conceptTested: "Applicability limit of Bohr's atomic model",
    difficulty: "Easy"
  },
  {
    id: "pyq-2019",
    year: "NEET 2019",
    exam: "NEET UG",
    question: "The total energy of an electron in an atom in an orbit is -3.4 eV. Its kinetic and potential energies are, respectively:",
    options: [
      "3.4 eV, 3.4 eV",
      "-3.4 eV, -6.8 eV",
      "3.4 eV, -6.8 eV",
      "-3.4 eV, -3.4 eV"
    ],
    correctOptionIndex: 2,
    explanation: "By the Virial Theorem for electrostatic central forces: Kinetic energy K = -E = -(-3.4 eV) = +3.4 eV. Potential energy U = 2E = 2 × (-3.4 eV) = -6.8 eV.",
    conceptTested: "Fundamental energy relations: E = -K = U/2",
    difficulty: "Easy"
  },
  {
    id: "pyq-2018",
    year: "NEET 2018",
    exam: "NEET UG",
    question: "The ratio of kinetic energy to the total energy of an electron in a Bohr orbit of the hydrogen atom is:",
    options: [
      "1 : 1",
      "1 : -1",
      "2 : -1",
      "1 : -2"
    ],
    correctOptionIndex: 1,
    explanation: "In any stationary Bohr orbit, Kinetic Energy K = +13.6/n² eV and Total Energy E = -13.6/n² eV. Thus, K = -E. The ratio K / E = K / (-K) = 1 / (-1) = 1 : -1.",
    conceptTested: "Signs and magnitudes of K and E",
    difficulty: "Easy"
  },
  {
    id: "pyq-2016",
    year: "NEET 2016 (Phase 1)",
    exam: "NEET UG",
    question: "When an electron in hydrogen atom jumps from state n = 4 to n = 1, the number of spectral lines emitted is:",
    options: [
      "3",
      "4",
      "6",
      "15"
    ],
    correctOptionIndex: 2,
    explanation: "Maximum number of spectral lines emitted when electron transitions from level n to ground state (n=1) is N = n(n-1)/2. For n = 4: N = 4 × (4 - 1) / 2 = (4 × 3) / 2 = 6 lines (specifically: 4➔3, 4➔2, 4➔1, 3➔2, 3➔1, 2➔1).",
    conceptTested: "Spectral line combination formula N = n(n-1)/2",
    difficulty: "Easy"
  },
  {
    id: "pyq-2015",
    year: "AIPMT 2015",
    exam: "AIPMT",
    question: "Consider 3rd orbit of He⁺ (Helium ion), using non-relativistic approach, the speed of electron in this orbit will be: (given K = 9 × 10⁹ N·m²/C², Z = 2 and h = 6.6 × 10⁻³⁴ J·s)",
    options: [
      "2.92 × 10⁶ m/s",
      "1.46 × 10⁶ m/s",
      "0.73 × 10⁶ m/s",
      "3.0 × 10⁸ m/s"
    ],
    correctOptionIndex: 1,
    explanation: "Velocity in nth orbit is v_n = 2.18 × 10⁶ (Z / n) m/s. For He⁺ in 3rd orbit (Z = 2, n = 3): v = 2.18 × 10⁶ × (2 / 3) = 1.453 × 10⁶ m/s ≈ 1.46 × 10⁶ m/s.",
    conceptTested: "Orbital speed calculation in hydrogenic ions",
    difficulty: "Medium"
  }
];

export const ATOMS_PRACTICE_MCQS: PracticeMCQ[] = [
  {
    id: "mcq-1",
    subtopic: "Rutherford Alpha Scattering",
    question: "In the Rutherford alpha-particle scattering experiment, what fraction of incident α-particles are deflected by more than 90°?",
    options: [
      "About 1 in 100",
      "About 1 in 8000",
      "About 1 in 1000",
      "About 1 in 10"
    ],
    correctOptionIndex: 1,
    explanation: "According to NCERT Physics data, only about 0.14% of incident alpha particles scatter by more than 1°, and about 1 in 8000 (0.0125%) deflects by more than 90° or rebounds backward.",
    trapAlert: "Do not confuse the 0.14% (deflection > 1°) with 1 in 8000 (deflection > 90°)."
  },
  {
    id: "mcq-2",
    subtopic: "Impact Parameter",
    question: "If an alpha particle is directed in a pure head-on collision toward a heavy nucleus, its impact parameter (b) and scattering angle (θ) are:",
    options: [
      "b = 0, θ = 0°",
      "b = ∞, θ = 180°",
      "b = 0, θ = 180°",
      "b = r₀, θ = 90°"
    ],
    correctOptionIndex: 2,
    explanation: "In a head-on collision, the line of velocity passes directly through the center of the nucleus, so the perpendicular distance b = 0. The particle is repelled straight back along its initial trajectory, giving a scattering angle θ = 180°.",
    trapAlert: "b = 0 gives maximum deflection θ = 180°, NOT θ = 0°."
  },
  {
    id: "mcq-3",
    subtopic: "Distance of Closest Approach",
    question: "An alpha particle of energy K approaches a gold nucleus to a distance of closest approach r₀. If the kinetic energy of the alpha particle is doubled to 2K, the new distance of closest approach will be:",
    options: [
      "2 r₀",
      "4 r₀",
      "r₀ / 2",
      "r₀ / 4"
    ],
    correctOptionIndex: 2,
    explanation: "Distance of closest approach is given by r₀ = (1/4πε₀)(2Ze² / K). Thus r₀ is inversely proportional to kinetic energy K (r₀ ∝ 1/K). When K is doubled, r₀ is halved (r₀ / 2).",
    trapAlert: "If question states that 'speed' is doubled, then K quadruples, so r₀ becomes r₀/4. Read carefully whether energy or speed is doubled!"
  },
  {
    id: "mcq-4",
    subtopic: "Bohr Postulates",
    question: "The de Broglie wavelength of an electron revolving in the 4th stationary orbit of hydrogen atom is related to its radius r₄ by:",
    options: [
      "λ = 2π r₄ / 4 = π r₄ / 2",
      "λ = 4 × 2π r₄",
      "λ = r₄ / 4",
      "λ = 4 r₄"
    ],
    correctOptionIndex: 0,
    explanation: "According to de Broglie's standing wave interpretation of Bohr orbits, the circumference of the nth orbit equals n de Broglie wavelengths: 2π r_n = n λ. For n = 4: 2π r₄ = 4 λ ⟹ λ = (2π r₄) / 4 = π r₄ / 2.",
    trapAlert: "2πr = nλ is the condition, so λ = 2πr/n."
  },
  {
    id: "mcq-5",
    subtopic: "Angular Momentum Quantisation",
    question: "What is the change in orbital angular momentum of an electron when it makes a transition from the 4th orbit to the 2nd orbit of a hydrogen atom?",
    options: [
      "h / 2π",
      "h / π",
      "2h / π",
      "h / 4π"
    ],
    correctOptionIndex: 1,
    explanation: "Angular momentum L_n = n (h / 2π). Change ΔL = (n₂ - n₁) (h / 2π) = (4 - 2) (h / 2π) = 2 (h / 2π) = h / π.",
    trapAlert: "Option A gives (h/2π), but Δn = 4 - 2 = 2, so ΔL = 2(h/2π) = h/π."
  },
  {
    id: "mcq-6",
    subtopic: "Orbital Time Period Proportionality",
    question: "In Bohr's model of hydrogen atom, the orbital time period of an electron (T) depends on the principal quantum number (n) as:",
    options: [
      "T ∝ n",
      "T ∝ n²",
      "T ∝ n³",
      "T ∝ n⁴"
    ],
    correctOptionIndex: 2,
    explanation: "Time period T = 2πr / v. Since r ∝ n² and v ∝ 1/n, we have T ∝ (n²) / (1/n) = n³. Thus T ∝ n³.",
    trapAlert: "Frequency f = 1/T ∝ 1/n³, while Time period T ∝ n³."
  },
  {
    id: "mcq-7",
    subtopic: "Excitation vs Ionisation",
    question: "How much energy is required to excite a hydrogen atom from its ground state to its second excited state?",
    options: [
      "10.20 eV",
      "12.09 eV",
      "13.60 eV",
      "1.51 eV"
    ],
    correctOptionIndex: 1,
    explanation: "'Second excited state' is n = 3 (NOT n = 2). E₁ = -13.60 eV, E₃ = -13.60 / 9 = -1.51 eV. Required excitation energy ΔE = E₃ - E₁ = -1.51 - (-13.60) = +12.09 eV.",
    trapAlert: "1st excited state = n=2 (10.2 eV). 2nd excited state = n=3 (12.09 eV). Do not pick 10.2 eV!"
  },
  {
    id: "mcq-8",
    subtopic: "Balmer Series Spectral Lines",
    question: "The wavelength of the first line of Balmer series of hydrogen is 656 nm. The wavelength of the second line of the Balmer series (H_β line) is:",
    options: [
      "486 nm",
      "410 nm",
      "1216 nm",
      "912 nm"
    ],
    correctOptionIndex: 0,
    explanation: "First line (3➔2): 1/λ₁ = R(1/4 - 1/9) = 5R/36 ⟹ λ₁ = 36 / (5R) = 656 nm. Second line (4➔2): 1/λ₂ = R(1/4 - 1/16) = 3R/16 ⟹ λ₂ = 16 / (3R). Ratio λ₂ / λ₁ = [16/(3R)] / [36/(5R)] = (16 × 5) / (3 × 36) = 80 / 108 = 20 / 27. Therefore λ₂ = (20 / 27) × 656 nm ≈ 485.9 nm ≈ 486 nm.",
    trapAlert: "H_β (4➔2) is in the blue-green region (486 nm)."
  },
  {
    id: "mcq-9",
    subtopic: "Lyman Wavelength Limit",
    question: "The shortest wavelength in the Lyman series of hydrogen atom is 912 Å. The shortest wavelength in the Paschen series will be:",
    options: [
      "912 × 3 Å = 2736 Å",
      "912 × 9 Å = 8208 Å",
      "912 / 9 Å = 101.3 Å",
      "912 × 4 Å = 3648 Å"
    ],
    correctOptionIndex: 1,
    explanation: "Shortest wavelength (series limit) for any series is λ_min = n₁² / R. For Lyman (n₁=1): λ_L = 1/R = 912 Å. For Paschen (n₁=3): λ_P = 3² / R = 9 / R = 9 × (1/R) = 9 × 912 Å = 8208 Å.",
    trapAlert: "Series limit scales as n₁², NOT n₁."
  },
  {
    id: "mcq-10",
    subtopic: "Hydrogenic Ion Transitions",
    question: "The ionisation energy of He⁺ ion is 54.4 eV. The ionisation energy of Li²⁺ ion in its ground state will be:",
    options: [
      "54.4 eV",
      "13.6 eV",
      "122.4 eV",
      "244.8 eV"
    ],
    correctOptionIndex: 2,
    explanation: "Ionisation energy E_ion = 13.6 Z² eV. For H (Z=1): 13.6 eV. For He⁺ (Z=2): 13.6 × 4 = 54.4 eV. For Li²⁺ (Z=3): 13.6 × 3² = 13.6 × 9 = 122.4 eV.",
    trapAlert: "Z² scaling: (3² / 2²) × 54.4 = (9/4) × 54.4 = 122.4 eV."
  }
];
