import { DetailedTopicContent } from '../../types/neet';
import { ATOMS_SVGS } from '../atoms/atomsDiagrams';
import { ATOMS_IMPORTANT_TERMS, ATOMS_COMPARISON_TABLES, ATOMS_CONCEPTUAL_QAS, ATOMS_RAPID_REVISION_POINTS } from '../atoms/atomsTermsAndConcepts';
import { ATOMS_NUMERICALS } from '../atoms/atomsNumericals';
import { ATOMS_VERIFIED_PYQS, ATOMS_PRACTICE_MCQS } from '../atoms/atomsPyqs';
import { ATOMS_NEET_TRAPS, ATOMS_MASTER_FORMULAE } from '../atoms/atomsTrapsAndFormulaSheet';

export const physHydrogenSpectrumDetails: DetailedTopicContent = {
  topicId: "phys-hydrogen-spectrum",
  topicName: "Hydrogen Spectrum & Spectral Series",
  subject: "Physics",
  class: "Class 12",
  classification: "Modern Physics",
  chapter: "Atoms",

  whatIsThisTopic: "Complete first-principles NEET UG 2026 master module covering the origin of discrete atomic spectra, hydrogen emission vs absorption spectrum, Rydberg formula derivation, exhaustive analysis of all spectral series (Lyman, Balmer, Paschen, Brackett, Pfund, Humphreys), calculations of longest wavelengths (λ_max) and series limits (λ_min), visible Balmer lines (H_α, H_β, H_γ, H_δ), hydrogen-like species transitions (He⁺, Li²⁺), combinatorics of total emitted lines, atomic recoil kinetics, verified past exam questions, high-yield comparison tables, and examiner traps.",

  basicIdea: [
    "When atomic hydrogen gas is excited by an electric discharge or thermal energy, electrons jump to higher stationary levels and subsequently de-excite to lower levels, emitting photons with discrete energies hν = E_initial - E_final.",
    "Because stationary electronic energy levels are quantized as E_n = -13.6 Z²/n² eV, the emitted photons possess exact wavelengths given by the Rydberg formula: 1/λ = R Z² (1/n₁² - 1/n₂²), producing sharp spectral lines rather than a continuous spectrum.",
    "The spectral lines naturally group into distinct series depending on the terminal lower energy level n₁: Lyman (n₁=1, Ultraviolet), Balmer (n₁=2, Visible), Paschen (n₁=3, Infrared), Brackett (n₁=4, Infrared), and Pfund (n₁=5, Far Infrared)."
  ],

  importantTerms: ATOMS_IMPORTANT_TERMS.slice(14),

  conceptExplanation: [
    {
      heading: "1. Origin of Discrete Line Spectra vs Continuous Spectra",
      paragraphs: [
        "A continuous spectrum (like sunlight through a prism or radiation from a glowing solid incandescent filament) contains a smooth, unbroken continuum of all wavelengths without any dark gaps.",
        "In stark contrast, low-pressure atomic gases (like hydrogen in a discharge tube) emit radiation at ONLY specific, sharply defined wavelengths, separated by wide dark regions. This is called a LINE EMISSION SPECTRUM.",
        "Why is the Hydrogen Spectrum Discrete? In classical physics, an orbiting electron could have any arbitrary orbit radius and radiate at all continuous frequencies. But in quantum mechanics, the electron can exist ONLY in discrete, stationary energy levels E_n = -13.6/n² eV. When an electron falls from an initial level n₂ to a lower level n₁, energy conservation dictates that a single photon is emitted with energy:",
        "E_photon = hν = E_{n2} - E_{n1} = 13.6 · (1/n₁² - 1/n₂²) eV.",
        "Because n₁ and n₂ are integers, ΔE takes only discrete values, producing discrete, sharp spectral lines."
      ],
      visual: {
        type: 'svg',
        svgContent: ATOMS_SVGS.hydrogenSpectrumLines,
        caption: "Continuous Rainbow Spectrum vs Discrete Hydrogen Line Emission Spectrum (Balmer Visible Lines).",
        guide: "Compare the continuous band with the 4 discrete visible Balmer lines: H_α (656.3 nm Red), H_β (486.1 nm Blue-green), H_γ (434.0 nm Blue), H_δ (410.2 nm Violet), and the series limit (364.6 nm UV)."
      },
      importantPoints: [
        "Discrete spectra serve as an unmistakable 'atomic fingerprint' unique to each element.",
        "Discovered empirically by Johann Jakob Balmer (1885) and Johannes Rydberg (1890) before Bohr explained its theoretical origin."
      ]
    },
    {
      heading: "2. Derivation of the Rydberg Formula from Bohr's Postulates",
      paragraphs: [
        "Let an electron transition from an initial state n₂ (energy E_{n2}) to a lower final state n₁ (energy E_{n1}) in a single-electron species of atomic number Z.",
        "From Bohr's third postulate: hν = E_{n2} - E_{n1}.",
        "Substitute the derived energy expression E_n = - [m Z² e⁴ / (8 ε₀² n² h²)]:",
        "h (c / λ) = - [m Z² e⁴ / (8 ε₀² n₂² h²)] - [ - m Z² e⁴ / (8 ε₀² n₁² h²) ]",
        "h c / λ = [m Z² e⁴ / (8 ε₀² h²)] · [1/n₁² - 1/n₂²]",
        "Dividing both sides by (h c) gives the wave number (ν̄ = 1/λ):",
        "1 / λ = [m e⁴ / (8 ε₀² h³ c)] · Z² · [1/n₁² - 1/n₂²] = R · Z² · [1/n₁² - 1/n₂²]",
        "Where R = m e⁴ / (8 ε₀² h³ c) is the fundamental Rydberg Constant.",
        "Value of R: R ≈ 1.09737 × 10⁷ m⁻¹. High-yield NEET Shortcut: 1 / R ≈ 911.6 Å ≈ 912 Å = 91.2 nm."
      ],
      visual: {
        type: 'svg',
        svgContent: ATOMS_SVGS.bohrEnergyLevels,
        caption: "Master Hydrogen Energy Level Diagram illustrating all 5 major spectral series.",
        guide: "Trace downward arrows terminating at n₁=1 (Lyman, UV), n₁=2 (Balmer, Visible), n₁=3 (Paschen, IR), n₁=4 (Brackett, IR), and n₁=5 (Pfund, Far IR)."
      },
      importantPoints: [
        "1/λ = R Z² (1/n₁² - 1/n₂²), where n₂ > n₁.",
        "NEET Mental Math: To find any wavelength, factor out 1/R as 912 Å: λ = (912 Å / Z²) · [n₁² n₂² / (n₂² - n₁²)]."
      ]
    },
    {
      heading: "3. Detailed Breakdown of Hydrogen Spectral Series",
      paragraphs: [
        "1. Lyman Series: Formed when electrons drop from any level n₂ = 2, 3, 4... ∞ down to ground level n₁ = 1. Formula: 1/λ = R (1/1² - 1/n₂²). Region: Ultraviolet (UV). First line (Lyman-α, 2➔1): 1/λ = R(1 - 1/4) = 3R/4 ⟹ λ_max = 4/(3R) = (4/3) × 912 Å = 1216 Å. Series Limit (∞➔1): 1/λ = R(1 - 0) = R ⟹ λ_min = 1/R = 912 Å.",
        "2. Balmer Series: Formed when electrons drop from n₂ = 3, 4, 5... ∞ to n₁ = 2. Formula: 1/λ = R (1/4 - 1/n₂²). Region: Visible (first 4 lines) and near-UV limit. First line (H_α, 3➔2): λ_max = 36/(5R) = 7.2 × 912 Å = 6563 Å = 656.3 nm (Red). Second line (H_β, 4➔2): λ = 16/(3R) = 486.1 nm (Blue-green). Third line (H_γ, 5➔2): 434.0 nm (Blue). Fourth line (H_δ, 6➔2): 410.2 nm (Violet). Series Limit (∞➔2): λ_min = 4/R = 4 × 912 Å = 3646 Å = 364.6 nm.",
        "3. Paschen Series: Transitions from n₂ ≥ 4 to n₁ = 3. Region: Near Infrared (IR). First line (4➔3): λ_max = 144/(7R) = 1875 nm. Series Limit (∞➔3): λ_min = 9/R = 9 × 912 Å = 8208 Å = 820.8 nm.",
        "4. Brackett Series: Transitions from n₂ ≥ 5 to n₁ = 4. Region: Mid Infrared. First line (5➔4): λ_max = 400/(9R) = 4051 nm. Series Limit (∞➔4): λ_min = 16/R = 16 × 912 Å = 1459 nm.",
        "5. Pfund Series: Transitions from n₂ ≥ 6 to n₁ = 5. Region: Far Infrared. First line (6➔5): λ_max = 900/(11R) = 7458 nm. Series Limit (∞➔5): λ_min = 25/R = 25 × 912 Å = 2280 nm.",
        "6. Humphreys Series: Transitions from n₂ ≥ 7 to n₁ = 6. Region: Far Infrared. Series Limit: λ_min = 36/R = 3283 nm."
      ],
      importantPoints: [
        "Lyman = UV; Balmer = Visible; Paschen/Brackett/Pfund = Infrared.",
        "For any series with base level n₁, λ_max occurs at n₂ = n₁+1 (smallest ΔE), and λ_min occurs at n₂ = ∞ (largest ΔE).",
        "Universal ratio of longest to shortest wavelength: λ_max / λ_min = (n₁+1)² / (2n₁+1). Lyman: 4/3; Balmer: 9/5; Paschen: 16/7; Brackett: 25/9."
      ]
    },
    {
      heading: "4. Emission vs Absorption Spectrum (Why Room Temp Shows Only Lyman Lines)",
      paragraphs: [
        "Emission vs Absorption Mechanics: Emission occurs when an excited electron in state n₂ de-excites to state n₁ (n₂ > n₁), emitting a photon of energy hν = E_{n2} - E_{n1}. Absorption occurs when a ground-state or low-state electron absorbs a photon of EXACT energy hν = E_{n2} - E_{n1} and is promoted to the higher level.",
        "The Room Temperature Phenomenon (NCERT Key Insight): Why does cold hydrogen gas at room temperature (300 K) exhibit ONLY Lyman absorption lines?",
        "Explanation: The thermal kinetic energy of gas molecules at 300 K is approx kT ≈ (1.38 × 10⁻²³ J/K)(300 K) ≈ 4.14 × 10⁻²¹ J ≈ 0.026 eV. The energy required to excite hydrogen from n=1 to n=2 is ΔE = 10.20 eV.",
        "Since 0.026 eV << 10.20 eV, virtually 100.00% of hydrogen atoms in cold gas reside in their ground state (n = 1). Therefore, when white light passes through cold hydrogen gas, electrons can absorb only those photon energies that initiate from n = 1 (i.e. transitions 1➔2, 1➔3, 1➔4...), which belong exclusively to the Lyman series (UV region). No Balmer or Paschen absorption lines are observed in cold gas!"
      ],
      visual: {
        type: 'svg',
        svgContent: ATOMS_SVGS.emissionVsAbsorption,
        caption: "Mechanisms of Atomic Photon Emission vs Photon Absorption.",
        guide: "Notice how photon absorption requires an incoming photon matching ΔE exactly, while emission releases an identical photon during de-excitation."
      },
      importantPoints: [
        "Cold hydrogen gas absorbs ONLY Lyman series lines (UV).",
        "Hot stellar atmospheres (like the Sun's chromosphere) have high temperatures where atoms are thermally excited to n=2, exhibiting strong Balmer absorption lines (Fraunhofer lines)."
      ]
    },
    {
      heading: "5. Hydrogenic Single-Electron Ions (He⁺, Li²⁺, Be³⁺) & Spectral Scaling",
      paragraphs: [
        "Bohr's theory applies directly to all single-electron ions by replacing Z = 1 with the appropriate nuclear charge: He⁺ (Z = 2), Li²⁺ (Z = 3), Be³⁺ (Z = 4), B⁴⁺ (Z = 5).",
        "Wavelength Scaling Law: 1/λ = R Z² (1/n₁² - 1/n₂²).",
        "For a given transition (n₂ ➔ n₁), the emitted wavelength is inversely proportional to Z²: λ(Z) = λ(H) / Z².",
        "Example: First line of Lyman series in He⁺ (Z = 2): λ(He⁺) = λ(H) / (2²) = 1216 Å / 4 = 304 Å.",
        "Equivalence Condition Between Hydrogenic Species and Hydrogen: A transition (n_a ➔ n_b) in He⁺ will have the EXACT same wavelength as transition (n_c ➔ n_d) in Hydrogen if: Z_{He}² (1/n_b² - 1/n_a²) = Z_H² (1/n_d² - 1/n_c²).",
        "Since Z_{He} = 2 and Z_H = 1, setting n_a = 2 n_c and n_b = 2 n_d makes the two wavelengths identical! Thus, the (4 ➔ 2) transition in He⁺ matches the (2 ➔ 1) Lyman-α line in Hydrogen."
      ],
      visual: {
        type: 'svg',
        svgContent: ATOMS_SVGS.hydrogenLikeIons,
        caption: "Comparison of Energy Levels and Scaling between H (Z=1), He⁺ (Z=2), and Li²⁺ (Z=3).",
        guide: "Observe that ground state energy scales as -13.6 × Z² eV: H is -13.6 eV, He⁺ is -54.4 eV, and Li²⁺ is -122.4 eV."
      },
      importantPoints: [
        "Ionisation energy of He⁺ = 13.6 × 2² = 54.4 eV.",
        "Ionisation energy of Li²⁺ = 13.6 × 3² = 122.4 eV.",
        "Wavelength for same transition scales as 1/Z² (shorter wavelengths for higher Z)."
      ]
    },
    {
      heading: "6. Maximum Number of Spectral Lines Emitted (Gas Sample vs Single Atom)",
      paragraphs: [
        "Case A: Gas Sample with Many Excited Atoms: If a collection of hydrogen atoms is excited to the state with principal quantum number n, different atoms in the sample will de-excite via different intermediate permutations (e.g., some go 4➔1 directly, others go 4➔3➔2➔1, others go 4➔2➔1).",
        "The total number of possible distinct emission lines is given by the combination formula:",
        "N = ⁿC₂ = n (n - 1) / 2.",
        "For general transition from higher level n₂ to lower level n₁: N = (n₂ - n₁) (n₂ - n₁ + 1) / 2.",
        "Examples: From n = 4: N = 4(3)/2 = 6 lines. From n = 5: N = 5(4)/2 = 10 lines. From n = 6: N = 6(5)/2 = 15 lines.",
        "Case B: A SINGLE Isolated Atom (NEET Trap Alert!): If a question specifies 'a single isolated hydrogen atom excited to level n', it cannot be in multiple places at once! In a single cascade from level n down to ground state (n=1), the maximum number of photons/lines it can emit is only: N_single = (n - 1) lines (occurring when it drops one step at a time: n ➔ n-1 ➔ n-2 ➔ ... ➔ 1)."
      ],
      importantPoints: [
        "Gas sample: N = n(n-1)/2.",
        "Single isolated atom: Maximum (n - 1) lines.",
        "Number of lines in series terminating at n₁ from upper state n is (n - n₁)."
      ]
    },
    {
      heading: "7. Conservation of Momentum & Atomic Recoil during Photon Emission",
      paragraphs: [
        "When an isolated stationary hydrogen atom of mass M in an excited state emits a photon, conservation of momentum requires that the atom must recoil in the direction opposite to the photon.",
        "Momentum of emitted photon: p_{photon} = E / c = hν / c.",
        "By conservation of momentum: p_{atom} = p_{photon} ⟹ M v_{recoil} = hν / c ⟹ v_{recoil} = hν / (M c).",
        "Recoil Kinetic Energy: K_{recoil} = p² / (2M) = (hν)² / (2 M c²).",
        "Energy Conservation: The transition energy ΔE is partitioned between the photon energy and the recoil kinetic energy: ΔE = hν + K_{recoil}.",
        "Thus, the emitted photon frequency is infinitesimally smaller than the ideal transition frequency: hν = ΔE - K_{recoil}.",
        "For Hydrogen emitting a 10.2 eV Lyman-α photon: v_{recoil} ≈ 3.26 m/s, and K_{recoil} ≈ 5.5 × 10⁻⁹ eV (negligible for basic calculations, but conceptually profound)."
      ],
      importantPoints: [
        "Recoil speed: v_{recoil} = ΔE / (M c).",
        "Recoil energy is inversely proportional to atomic mass M."
      ]
    }
  ],

  formulae: ATOMS_MASTER_FORMULAE.slice(7),

  visualLearning: {
    type: 'svg',
    svgContent: ATOMS_SVGS.bohrEnergyLevels,
    caption: "Master Hydrogen Energy Levels and Spectral Series Diagram."
  },

  neetImportantPoints: ATOMS_RAPID_REVISION_POINTS.slice(12),

  commonConfusions: ATOMS_NEET_TRAPS.slice(6).map(t => ({
    misconception: t.studentMistake,
    correction: t.correctConcept,
    whyItMattersForNEET: t.whyExaminerTestsIt
  })),

  quickRevision: ATOMS_RAPID_REVISION_POINTS.slice(10),

  practiceQuestions: ATOMS_PRACTICE_MCQS.slice(6).map(q => ({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctOptionIndex,
    explanation: q.explanation,
    topicTested: q.subtopic,
    difficulty: "Medium"
  })),

  pyqs: ATOMS_VERIFIED_PYQS.map(p => ({
    exam: p.exam,
    examYear: p.year,
    question: p.question,
    options: p.options,
    correctAnswer: p.correctOptionIndex,
    explanation: p.explanation,
    conceptTested: p.conceptTested,
    difficulty: p.difficulty,
    isVerifiedPYQ: true
  }))
};
