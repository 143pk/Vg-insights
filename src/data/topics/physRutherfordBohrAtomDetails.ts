import { DetailedTopicContent } from '../../types/neet';
import { ATOMS_SVGS } from '../atoms/atomsDiagrams';
import { ATOMS_IMPORTANT_TERMS, ATOMS_COMPARISON_TABLES, ATOMS_CONCEPTUAL_QAS, ATOMS_RAPID_REVISION_POINTS } from '../atoms/atomsTermsAndConcepts';
import { ATOMS_NUMERICALS } from '../atoms/atomsNumericals';
import { ATOMS_VERIFIED_PYQS, ATOMS_PRACTICE_MCQS } from '../atoms/atomsPyqs';
import { ATOMS_NEET_TRAPS, ATOMS_MASTER_FORMULAE } from '../atoms/atomsTrapsAndFormulaSheet';

export const physRutherfordBohrAtomDetails: DetailedTopicContent = {
  topicId: "phys-rutherford-bohr-atom",
  topicName: "Rutherford & Bohr Atomic Models",
  subject: "Physics",
  class: "Class 12",
  classification: "Modern Physics",
  chapter: "Atoms",

  whatIsThisTopic: "First-principles master module for NEET UG 2026 covering the historical necessity of atomic models, Geiger-Marsden α-particle scattering experiment, discovery of the dense nucleus, distance of closest approach, impact parameter, Rutherford planetary model, classical electrodynamic spiral catastrophe, Bohr quantum postulates, first-principles derivations of orbit radius, speed, kinetic, potential, and total energies, excitation/ionisation energies, de Broglie's standing wave explanation of quantization, and Bohr model limitations.",

  basicIdea: [
    "Classical atomic physics faced a catastrophic breakdown at the turn of the 20th century: Thomson's plum pudding model could not account for large-angle α-particle deflections, while Rutherford's planetary model predicted that accelerating electrons must continuously radiate electromagnetic energy and spiral into the nucleus in ~10⁻⁸ seconds, rendering all matter unstable.",
    "Bohr resolved this crisis in 1913 by introducing quantum mechanics into atomic structure: electrons reside in non-radiating 'stationary orbits' where orbital angular momentum is strictly quantized in integral multiples of ℏ = h/(2π), radiating energy only when making discrete quantum jumps between stationary states (ΔE = hν).",
    "Understanding the mathematical relationships (r_n ∝ n²/Z, v_n ∝ Z/n, E_n ∝ -Z²/n², Virial Theorem E = -K = U/2) is essential for mastering numerical problems in NEET UG Modern Physics."
  ],

  importantTerms: ATOMS_IMPORTANT_TERMS.slice(0, 14),

  conceptExplanation: [
    {
      heading: "1. Historical Necessity & Conceptual Evolution of Atomic Models",
      paragraphs: [
        "In late 19th-century physics, J.J. Thomson discovered the electron (1897) and proposed the 'Plum Pudding Model' (1898): a sphere of positive electric charge (~10⁻¹⁰ m) in which negatively charged electrons were embedded like seeds in a watermelon.",
        "Thomson's model failed dramatically when tested experimentally by Hans Geiger and Ernest Marsden under the guidance of Ernest Rutherford (1911). If positive charge was diffused across the entire atom, electric field strengths would be tiny, and incoming high-velocity alpha particles would experience only deflections of less than a fraction of a degree. However, experiments showed that alpha particles occasionally bounced straight backward at angles exceeding 90° and up to 180°.",
        "This demonstrated that the entire positive charge and almost the entire mass of the atom (~99.9%) are concentrated in an extraordinarily compact central core called the NUCLEUS (radius ~ 10⁻¹⁵ m), with electrons orbiting in surrounding empty space (~10⁻¹⁰ m)."
      ],
      visual: {
        type: 'svg',
        svgContent: ATOMS_SVGS.conceptFlow,
        caption: "Evolution from Thomson's Plum Pudding Model to Rutherford's Nuclear Discovery and Bohr's Quantum Atom.",
        guide: "Observe the three stages of conceptual development: Thomson (uniform sphere) ➔ Rutherford (dense central nucleus with classical orbits) ➔ Bohr (quantized stationary orbits resolving radiative collapse)."
      },
      importantPoints: [
        "Atomic radius ≈ 10⁻¹⁰ m (1 Å); Nuclear radius ≈ 10⁻¹⁵ to 10⁻¹⁴ m (1 to 10 fm).",
        "The atom is roughly 100,000 times larger in diameter than its nucleus, meaning the volume of an atom is approximately 10¹⁵ times the volume of its nucleus."
      ]
    },
    {
      heading: "2. Geiger-Marsden Alpha-Particle Scattering Experiment",
      paragraphs: [
        "Experimental Setup: A radioactive bismuth source (²¹⁴Bi) emitted 5.5 MeV alpha particles (⁴₂He²⁺). The alpha beam was collimated into a sharp, narrow parallel stream by passing through lead slits and directed at an ultra-thin gold foil of thickness d ≈ 2.1 × 10⁻⁷ m (approx 1000 atomic layers).",
        "Detection: Scattered alpha particles struck a circular zinc sulphide (ZnS) screen mounted on a movable microscope detector. Each alpha particle impact produced a brief, microscopic flash of light (scintillation) recorded as a function of the scattering angle θ.",
        "Key Experimental Observations: (1) More than 99.86% of the incident alpha particles passed straight through the gold foil with virtually zero deflection (θ ≈ 0°). (2) Only about 0.14% of particles were deflected by angles greater than 1°. (3) Only about 1 in 8,000 particles (0.0125%) was deflected by more than 90°, and an even smaller fraction rebounded backward (θ ≈ 180°).",
        "Rutherford's Famous Remark: 'It was quite the most incredible event that has ever happened to me in my life. It was almost as incredible as if you fired a 15-inch shell at a piece of tissue paper and it came back and hit you.'"
      ],
      visual: {
        type: 'svg',
        svgContent: ATOMS_SVGS.rutherfordApparatus,
        caption: "Geiger-Marsden Experimental Apparatus for Alpha Particle Scattering on Gold Foil.",
        guide: "Note the radioactive alpha source, collimator slits, thin gold foil, circular ZnS scintillation screen, and movable detector tracking the scattering angle θ."
      },
      importantPoints: [
        "Most α-particles pass straight through ⟹ Atom is mostly empty space.",
        "Occasional massive deflections ⟹ Positive charge and mass are concentrated in a tiny central volume (Nucleus).",
        "Electrons have negligible mass (m_α ≈ 7300 m_e), so orbital electrons cannot deflect high-energy alpha particles."
      ]
    },
    {
      heading: "3. Distance of Closest Approach & Impact Parameter (First Principles Derivation)",
      paragraphs: [
        "Distance of Closest Approach (r₀): When an alpha particle (q₁ = +2e, mass m_α) is directed head-on (impact parameter b = 0) toward a target nucleus of charge +Ze, it decelerates due to electrostatic repulsion, momentarily comes to rest at distance r₀ (where v = 0), and then reverses its trajectory (θ = 180°).",
        "Derivation from Conservation of Mechanical Energy: Initial Kinetic Energy K_α = Final Electrostatic Potential Energy U = (1 / 4πε₀) · [q₁ q₂ / r₀] = (1 / 4πε₀) · [(2e)(Ze) / r₀]. Solving for r₀:",
        "r₀ = (1 / 4πε₀) · (2Ze² / K_α) = (1 / 4πε₀) · (4Ze² / [m_α v_α²]). For 5.5 MeV α on gold (Z=79), r₀ ≈ 4.13 × 10⁻¹⁴ m = 41.3 fm. Because the alpha particle does not touch the nucleus, the actual nuclear radius must be LESS than 41.3 fm.",
        "Impact Parameter (b): The perpendicular distance of the initial velocity vector of the α-particle from the center of the nucleus. Rutherford derived the relation: b = (1 / 4πε₀) · [Ze² cot(θ/2) / K_α].",
        "When b = 0, cot(θ/2) = 0 ⟹ θ/2 = 90° ⟹ θ = 180° (head-on rebound). When b is large, cot(θ/2) is large ⟹ θ ≈ 0° (undeviated).",
        "Rutherford's Scattering Formula: Number of scattered particles detected at angle θ per unit area is N(θ) ∝ 1 / sin⁴(θ/2)."
      ],
      visual: {
        type: 'svg',
        svgContent: ATOMS_SVGS.rutherfordTrajectories,
        caption: "Alpha Particle Trajectories as a Function of Impact Parameter (b) and Distance of Closest Approach (r₀).",
        guide: "Observe that large b trajectories experience negligible deflection, while small b trajectories experience large electrostatic repulsion, and b=0 produces head-on rebound at r₀."
      },
      importantPoints: [
        "r₀ ∝ Z / K_α. If initial speed of alpha particle is doubled, r₀ becomes 1/4th (since K ∝ v²).",
        "Impact parameter b ∝ cot(θ/2). Decreasing b increases the scattering angle θ.",
        "N(θ) ∝ 1 / sin⁴(θ/2). If θ increases from 60° to 90°, N(90°)/N(60°) = [sin(30°)/sin(45°)]⁴ = [(1/2)/(1/√2)]⁴ = (1/√2)⁴ = 1/4."
      ]
    },
    {
      heading: "4. Classical Electrodynamic Collapse: Why Rutherford's Model Failed",
      paragraphs: [
        "Rutherford proposed a planetary model: electrons revolve in circular/elliptical orbits around the nucleus under the attractive Coulomb force, which provides the necessary centripetal force: (1/4πε₀)(Ze²/r²) = mv²/r.",
        "Fatal Flaw 1 (Instability of the Atom): According to classical electromagnetic theory (Maxwell-Hertz-Larmor equations), an accelerating electric charge continuously radiates energy in the form of electromagnetic waves (Radiated Power P = q²a² / 6πε₀c³). An electron moving in a circle possesses centripetal acceleration a = v²/r. Therefore, the electron must continuously radiate energy, causing its orbital radius r to decrease continuously. Calculations show that the electron would spiral into the nucleus within approx 10⁻⁸ seconds! If classical physics held, stable atoms could not exist.",
        "Fatal Flaw 2 (Discrete vs Continuous Spectrum): As the electron spirals inward, its orbital radius shrinks smoothly and its orbital revolution frequency increases continuously. Thus, the emitted radiation should span a continuous spectrum of all possible frequencies (like a rainbow). In reality, excited atoms emit sharp, discrete LINE spectra with distinct, well-defined wavelengths."
      ],
      visual: {
        type: 'svg',
        svgContent: ATOMS_SVGS.spiralCollapse,
        caption: "Classical Electromagnetic Spiral Collapse predicted by Maxwell's Theory for Rutherford's Planetary Atom.",
        guide: "Note the continuous radiation of EM energy, causing inward spiraling of the electron into the nucleus in 10⁻⁸ seconds, rendering matter unstable."
      },
      importantPoints: [
        "Accelerated charge radiates EM radiation in classical physics.",
        "Rutherford's model could not explain atomic stability or discrete atomic line spectra.",
        "Could not calculate the absolute dimensions of atoms or the distribution of electrons."
      ]
    },
    {
      heading: "5. Bohr's Quantum Atomic Model & Three Fundamental Postulates",
      paragraphs: [
        "In 1913, Danish physicist Niels Bohr revolutionized atomic theory by combining Rutherford's nuclear model with Max Planck's quantum theory of radiation.",
        "Postulate 1 (Stationary Orbits): An electron in an atom can revolve only in certain stable, non-radiating circular orbits called 'stationary orbits'. Despite undergoing centripetal acceleration, the electron in a stationary orbit does NOT emit electromagnetic radiation. The atom is stable in these states.",
        "Postulate 2 (Bohr's Quantisation of Angular Momentum): An electron can revolve only in those permitted stationary orbits for which its orbital angular momentum (L) is an integral multiple of h/(2π) (where h is Planck's constant): L = m v r = n (h / 2π) = n ℏ, where n = 1, 2, 3... is the Principal Quantum Number.",
        "Postulate 3 (Bohr's Frequency Condition for Transitions): An electron does not radiate energy while in a stationary state. It emits or absorbs a discrete quantum of radiation (a photon) only when jumping from one stationary orbit (initial energy E_i) to another (final energy E_f): hν = E_i - E_f (for emission where E_i > E_f) or hν = E_f - E_i (for absorption where E_f > E_i)."
      ],
      visual: {
        type: 'svg',
        svgContent: ATOMS_SVGS.bohrStationaryOrbits,
        caption: "Bohr's Permitted Stationary Circular Orbits and Angular Momentum Quantisation.",
        guide: "Observe the discrete concentric stationary orbits with quantized radii r_n = 0.529 n²/Z Å and energies E_n = -13.6 Z²/n² eV."
      },
      importantPoints: [
        "Postulate 1 directly overcomes the classical radiative collapse.",
        "Postulate 2 quantizes angular momentum: L₁ = h/2π, L₂ = 2(h/2π) = h/π, L₃ = 3(h/2π)...",
        "Postulate 3 connects photon frequency to discrete energy level difference: ν = (E_i - E_f)/h."
      ]
    },
    {
      heading: "6. First-Principles Derivation of Bohr Orbit Radius, Velocity, and Energy Levels",
      paragraphs: [
        "Let an electron of mass m and charge -e revolve with tangential speed v_n in a circular orbit of radius r_n around a nucleus of charge +Ze.",
        "Condition 1 (Coulomb Centripetal Balance): (1 / 4πε₀) · (Z e² / r_n²) = m v_n² / r_n ⟹ m v_n² r_n = (1 / 4πε₀) Z e²  --- (Eq. 1)",
        "Condition 2 (Bohr Angular Momentum Quantisation): m v_n r_n = n h / (2π) ⟹ v_n = n h / (2π m r_n)  --- (Eq. 2)",
        "Derivation of Orbital Radius (r_n): Substitute Eq. 2 into Eq. 1: m · [n² h² / (4π² m² r_n²)] · r_n = (1 / 4πε₀) Z e². Simplifying gives:",
        "r_n = [ε₀ h² / (π m e²)] · (n² / Z) = a₀ · (n² / Z) = 0.529 · (n² / Z) Å.",
        "For Hydrogen ground state (n = 1, Z = 1): r₁ = a₀ = 0.529 Å = 5.29 × 10⁻¹¹ m.",
        "Derivation of Orbital Speed (v_n): Substitute r_n into Eq. 2:",
        "v_n = [e² / (2 ε₀ h)] · (Z / n) = (c / 137) · (Z / n) ≈ 2.18 × 10⁶ · (Z / n) m/s.",
        "For Hydrogen ground state (n = 1, Z = 1): v₁ ≈ 2.18 × 10⁶ m/s ≈ c / 137.",
        "Derivation of Energies (K, U, E):",
        "Kinetic Energy: K_n = 1/2 m v_n² = (1 / 8πε₀) · (Z e² / r_n) = +13.6 · (Z² / n²) eV.",
        "Electrostatic Potential Energy: U_n = -(1 / 4πε₀) · (Z e² / r_n) = -27.2 · (Z² / n²) eV.",
        "Total Mechanical Energy: E_n = K_n + U_n = -(1 / 8πε₀) · (Z e² / r_n) = -13.6 · (Z² / n²) eV.",
        "Virial Theorem Master Relationship: E_n = -K_n = U_n / 2. (Kinetic energy is positive; Potential and Total energy are negative; |U| = 2K = 2|E|)."
      ],
      visual: {
        type: 'svg',
        svgContent: ATOMS_SVGS.bohrEnergyLevels,
        caption: "Quantized Energy Ladder for Hydrogen Atom showing E_n = -13.6/n² eV and Spectral Transitions.",
        guide: "Note that energy levels become progressively closer together as n increases (spacing ΔE ∝ 1/n³)."
      },
      importantPoints: [
        "Radius r_n ∝ n² / Z (r₁ : r₂ : r₃ = 1 : 4 : 9).",
        "Speed v_n ∝ Z / n (v₁ : v₂ : v₃ = 1 : 1/2 : 1/3).",
        "Energy E_n ∝ -Z² / n² (E₁ = -13.6 eV, E₂ = -3.40 eV, E₃ = -1.51 eV, E₄ = -0.85 eV, E_∞ = 0 eV).",
        "Orbital Time Period T_n = 2πr/v ∝ n³ / Z² (T₁ : T₂ : T₃ = 1 : 8 : 27).",
        "Equivalent Current I_n = ef ∝ Z² / n³; Magnetic field at center B_n ∝ Z³ / n⁵."
      ]
    },
    {
      heading: "7. de Broglie Standing Wave Explanation of Bohr's Quantisation",
      paragraphs: [
        "In 1924, French physicist Louis de Broglie provided the physical justification for Bohr's mysterious second postulate (mvr = nh/2π).",
        "According to de Broglie, an orbiting electron exhibits matter wave behavior with wavelength λ = h / p = h / (m v).",
        "For a stationary orbit to be stable without destructive self-interference over billions of revolutions, the circular orbit must accommodate a standing matter wave. This requires that the circumference of the circular orbit must be an exact integer multiple of the electron's de Broglie wavelength:",
        "2π r_n = n λ_n = n · (h / [m v_n]).",
        "Rearranging terms immediately gives: m v_n r_n = n h / (2π).",
        "Thus, Bohr's quantization condition is not an ad-hoc postulate, but a direct geometric requirement for constructive standing matter waves!"
      ],
      visual: {
        type: 'svg',
        svgContent: ATOMS_SVGS.emissionVsAbsorption,
        caption: "Absorption vs Emission Electronic Transitions in Quantized Energy States.",
        guide: "Upward transition absorbs a photon of energy hν = E_f - E_i; downward transition emits a photon of energy hν = E_i - E_f."
      },
      importantPoints: [
        "n = 1 orbit contains exactly 1 complete standing wave (2πr₁ = λ₁).",
        "n = 2 orbit contains exactly 2 complete standing waves (2πr₂ = 2λ₂).",
        "n = 4 orbit contains exactly 4 complete standing waves (2πr₄ = 4λ₄ ⟹ λ₄ = πr₄/2)."
      ]
    },
    {
      heading: "8. Limitations of the Bohr Model (Beyond Single-Electron Systems)",
      paragraphs: [
        "Despite its immense success in explaining the hydrogen atom, Bohr's model has fundamental limitations:",
        "1. Multi-Electron Atoms: Bohr's model is strictly valid ONLY for single-electron (hydrogenic) systems: H, He⁺ (Z=2), Li²⁺ (Z=3), Be³⁺ (Z=4). It fails completely for neutral Helium (2 electrons) or multi-electron atoms because it ignores inter-electronic Coulomb repulsion.",
        "2. Fine Structure of Spectral Lines: High-resolution spectrometers show that spectral lines (like the H_α line) are not single lines but close doublets or multiplets. Bohr's model cannot explain this fine structure (which arises from relativistic effects and electron spin-orbit coupling).",
        "3. Violation of Heisenberg's Uncertainty Principle: Bohr assumes that an electron orbits in a precise, well-defined circular track with simultaneously known exact position and momentum, which directly violates Heisenberg's principle (Δx · Δp ≥ ℏ/2).",
        "4. Zeeman & Stark Effects: It cannot explain the splitting of spectral lines in the presence of an external magnetic field (Zeeman Effect) or an external electric field (Stark Effect).",
        "5. Relative Intensities: It predicts line frequencies but cannot predict why certain spectral transition lines are bright and intense while others are faint."
      ],
      importantPoints: [
        "Bohr model applies only to single-electron species.",
        "Led directly to modern wave mechanics (Schrödinger equation and quantum numbers n, l, m_l, m_s)."
      ]
    }
  ],

  formulae: ATOMS_MASTER_FORMULAE.slice(0, 7),

  visualLearning: {
    type: 'svg',
    svgContent: ATOMS_SVGS.conceptFlow,
    caption: "Concept flowchart summarizing the transition from classical atomic physics to Bohr's quantum model."
  },

  neetImportantPoints: ATOMS_RAPID_REVISION_POINTS.slice(0, 12),

  commonConfusions: ATOMS_NEET_TRAPS.slice(0, 6).map(t => ({
    misconception: t.studentMistake,
    correction: t.correctConcept,
    whyItMattersForNEET: t.whyExaminerTestsIt
  })),

  quickRevision: ATOMS_RAPID_REVISION_POINTS.slice(0, 10),

  practiceQuestions: ATOMS_PRACTICE_MCQS.slice(0, 6).map(q => ({
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
