import { DetailedTopicContent } from '../../types/neet';
import { DUAL_NATURE_SVGS } from '../dualNature/dualNatureDiagrams';
import {
  DUAL_NATURE_IMPORTANT_TERMS,
  DUAL_NATURE_COMPARISON_TABLES,
  DUAL_NATURE_CONCEPTUAL_QA,
  DUAL_NATURE_5_MIN_REVISION,
  DUAL_NATURE_CONSTANTS
} from '../dualNature/dualNatureTermsAndConcepts';
import { DUAL_NATURE_WORKED_EXAMPLES } from '../dualNature/dualNatureNumericals';
import { DUAL_NATURE_VERIFIED_PYQS, DUAL_NATURE_PRACTICE_QUESTIONS } from '../dualNature/dualNaturePyqs';
import { DUAL_NATURE_NEET_TRAPS, DUAL_NATURE_MASTER_FORMULA_SHEET } from '../dualNature/dualNatureTrapsAndFormulaSheet';

export const physPhotoelectricEffectDetails: DetailedTopicContent = {
  topicId: "phys-photoelectric-effect",
  topicName: "Photoelectric Effect & Photon Picture of Radiation",
  subject: "Physics",
  class: "Class 12",
  classification: "Modern Physics",
  chapter: "Dual Nature of Radiation and Matter",

  whatIsThisTopic: "Complete first-principles conceptual foundation, mathematical formulation, experimental proofs, graphical analysis, and verified NEET UG problem solving for the Photoelectric Effect and Einstein's Photon Theory of Radiation.",

  basicIdea: [
    "Light exhibits a dual nature: behaving as continuous electromagnetic waves during propagation (interference, diffraction, polarisation) and as localized discrete packets of energy called photons during emission, absorption, and interactions with matter.",
    "The Photoelectric Effect is the instantaneous emission of electrons from a photosensitive surface when illuminated by electromagnetic radiation of frequency greater than or equal to the metal's threshold frequency (ν ≥ ν₀).",
    "Classical wave theory failed completely to explain: (1) the existence of a threshold frequency, (2) the instantaneous nature of electron emission (< 10⁻⁹ s), and (3) the dependence of maximum kinetic energy on frequency rather than intensity.",
    "Albert Einstein resolved this crisis in 1905 by proposing that light consists of energy quanta (photons) of energy E = hν. An electron absorbs a single photon in an all-or-none collision; the energy is split between the surface work function φ₀ and the maximum kinetic energy K_max (hν = φ₀ + K_max)."
  ],

  importantTerms: DUAL_NATURE_IMPORTANT_TERMS.slice(0, 9),

  conceptExplanation: [
    {
      heading: "1. Chapter Conceptual Evolution & What Dual Nature Means",
      paragraphs: [
        "In classical 19th-century physics, Maxwell's electrodynamics and Young's wave optics established light unequivocally as a continuous electromagnetic wave. While wave theory perfectly explained interference, diffraction, and polarisation, it crumbled when confronted with microscopic phenomena like blackbody radiation, X-ray emission, and the Photoelectric Effect.",
        "Dual Nature means that electromagnetic radiation and material particles possess both wave-like and particle-like properties. These are not mutually exclusive contradictions, but complementary aspects of nature. Light propagates as a wave through space, spreading phase and wavefronts; but when it exchanges energy and momentum with individual atomic electrons, it behaves strictly as a stream of localized particle-like energy packets called photons.",
        "The conceptual journey unfolds in a logical sequence: Classical Wave Optics ➔ Discovery of Photoelectric Effect ➔ Catastrophic Failure of Wave Theory ➔ Einstein's Photon Hypothesis ➔ Einstein's Photoelectric Equation ➔ Experimental Verification by Millikan ➔ de Broglie's Matter Wave Symmetry ➔ Davisson–Germer Electron Diffraction ➔ Modern Quantum Duality."
      ],
      visual: {
        type: 'svg',
        svgContent: DUAL_NATURE_SVGS.conceptFlow,
        caption: "Master Concept Flowchart: Historical and conceptual evolution of Wave-Particle Duality in Class 12 Physics.",
        guide: "Follow the logical chain from the classical wave nature of light down to the universal wave-particle duality synthesis."
      },
      importantPoints: [
        "Wave theory explains: Interference, Diffraction, Polarisation (macroscopic propagation).",
        "Photon/Particle theory explains: Photoelectric Effect, Compton Effect, Blackbody radiation (microscopic energy exchange).",
        "Light never exhibits wave and particle characteristics simultaneously in the exact same measurement."
      ]
    },
    {
      heading: "2. Photoelectric Effect Experimental Setup & Key Observations",
      paragraphs: [
        "The experimental setup consists of an evacuated quartz-window glass tube enclosing two metal electrodes: a photosensitive cathode emitter (C) and an anode collector (A). The electrodes are connected through a commutator (reversing key), a sensitive microammeter (μA), and a voltmeter across a variable voltage divider (potentiometer).",
        "Monochromatic light of frequency ν passes through the quartz window and strikes the photosensitive cathode C. Emitted photoelectrons travel across the evacuated space to collector A, generating a measurable photocurrent I.",
        "Systematic experiments by Hertz (1887), Hallwachs & Lenard (1900-1902), and Millikan (1916) established four fundamental experimental laws that baffled classical physicists:",
        "1. Direct Proportionality of Photocurrent to Intensity: For a fixed frequency above threshold (ν > ν₀) and fixed accelerating potential, the photocurrent is strictly directly proportional to incident light intensity.",
        "2. Existence of Threshold Frequency (ν₀): For every photosensitive material, there exists a definite minimum frequency ν₀ below which NO photoelectric emission occurs, no matter how high the light intensity or how long the surface is illuminated.",
        "3. Maximum Kinetic Energy (K_max) is Independent of Intensity: For a given metal, K_max of emitted photoelectrons depends linearly on the frequency of incident radiation and is completely independent of light intensity.",
        "4. Instantaneous Emission (< 10⁻⁹ s): The time lag between the incidence of light photons and the ejection of photoelectrons is less than 1 nanosecond (10⁻⁹ s), even for extremely faint, low-intensity light."
      ],
      visual: {
        type: 'svg',
        svgContent: DUAL_NATURE_SVGS.photoelectricSetup,
        caption: "Schematic diagram of the experimental apparatus used to investigate the Photoelectric Effect.",
        guide: "Notice the quartz window (transparent to UV), photosensitive cathode C, anode collector A, commutator for reversing potential polarity, microammeter, and potential divider."
      },
      importantPoints: [
        "Quartz window is essential because ordinary glass absorbs ultraviolet radiation.",
        "Photocurrent depends on: Incident intensity, accelerating/retarding potential, and frequency.",
        "Commutator allows switching the collector plate between positive (accelerating) and negative (retarding) potentials."
      ]
    },
    {
      heading: "3. Microscopic Mechanism: One-Photon / One-Electron Interaction",
      paragraphs: [
        "Inside a metal lattice, conduction electrons move freely within the bulk crystal but are bound to the metal by the electrostatic attraction of positive ion cores. To cross the surface boundary into vacuum, an electron must overcome a potential energy barrier called the Work Function (φ₀).",
        "Einstein formulated the interaction as an elementary one-to-one collision: exactly one incident photon is absorbed entirely by exactly one bound conduction electron. The photon ceases to exist, delivering its full energy E = hν instantaneously.",
        "If E = hν < φ₀, the electron cannot overcome the surface barrier, and no emission takes place. If E = hν ≥ φ₀, the electron utilizes energy φ₀ to overcome the surface barrier and emerges into vacuum with kinetic energy.",
        "Surface electrons that experience zero collisions with lattice ions emerge with the absolute maximum kinetic energy: K_max = hν - φ₀. Electrons situated deeper inside the metal undergo random scattering collisions with ions, dissipating part of their energy as thermal vibrations, and emerge with kinetic energies ranging from 0 up to K_max."
      ],
      visual: {
        type: 'svg',
        svgContent: DUAL_NATURE_SVGS.photonEmissionMechanism,
        caption: "Microscopic one-photon/one-electron collision mechanism showing surface electron emission (K_max) vs deep electron collisions.",
        guide: "Contrast the surface electron (zero collisions, emerging with K_max) with the deep electron (undergoing internal lattice collisions, emerging with K < K_max)."
      },
      importantPoints: [
        "Work Function (φ₀) values: Caesium (Cs = 2.14 eV, lowest), Potassium (K = 2.30 eV), Sodium (Na = 2.75 eV), Zinc (Zn = 4.31 eV), Platinum (Pt = 5.65 eV, highest).",
        "Photoelectric emission is an all-or-none process; partial photon absorption does not occur.",
        "Emitted electrons have a continuous kinetic energy distribution: 0 ≤ K ≤ K_max."
      ]
    },
    {
      heading: "4. Einstein's Photoelectric Equation & Energy Conservation",
      paragraphs: [
        "In 1905, Albert Einstein applied Planck's quantum concept to electromagnetic radiation and derived the master photoelectric equation from the principle of conservation of energy:",
        "Total Incident Photon Energy = Work Function + Maximum Kinetic Energy of Photoelectron",
        "Mathematically: hν = φ₀ + K_max",
        "Rearranging: K_max = hν - φ₀ = hν - hν₀ = h(ν - ν₀) = hc(1/λ - 1/λ₀)",
        "Since the maximum kinetic energy is related to the maximum photoelectron velocity v_max by K_max = ½ m v_max², and to the stopping potential V₀ by K_max = e V₀, we obtain the unified master relation:",
        "e V₀ = ½ m v_max² = hν - φ₀ = (hc / λ) - φ₀"
      ],
      visual: {
        type: 'svg',
        svgContent: DUAL_NATURE_SVGS.energyBalanceDiagram,
        caption: "Energy balance pillar diagram illustrating energy conservation in Einstein's Photoelectric Equation.",
        guide: "Observe how total incident photon energy E = hν splits into the fixed work function threshold φ₀ and the variable kinetic surplus K_max."
      },
      importantPoints: [
        "For NEET numericals, use shortcut: hc ≈ 12400 eV·Å = 1240 eV·nm.",
        "If E(eV) = 1240 / λ(nm), then K_max(eV) = E(eV) - φ₀(eV).",
        "Stopping potential in Volts has the exact same numerical magnitude as K_max in eV!"
      ]
    },
    {
      heading: "5. Comprehensive Graphical Analysis & Stopping Potential",
      paragraphs: [
        "NEET UG frequently tests graphical interpretations of photoelectric data. Master these three fundamental graphs:",
        "Graph A: Photocurrent (I) vs Collector Potential (V) for Single Condition: As accelerating potential increases, current rises until it saturates at I_sat (all emitted electrons collected). When potential is made negative (retarding), current decreases smoothly until it drops to zero at the Stopping Potential (-V₀).",
        "Graph B: Effect of Intensity (Fixed ν > ν₀): Higher intensity light contains more photons per second, ejecting more electrons per second, resulting in proportionally higher saturation currents (I_sat3 > I_sat2 > I_sat1). However, since photon energy E = hν is unchanged, all curves converge to the EXACT same stopping potential -V₀.",
        "Graph C: Effect of Frequency (Fixed Intensity): Higher frequency radiation (ν₃ > ν₂ > ν₁) carries greater energy per photon, producing faster photoelectrons requiring greater retarding potentials (|V₀₃| > |V₀₂| > |V₀₁|). For constant total energy flux, saturation currents remain equal.",
        "Graph D: Stopping Potential (V₀) vs Frequency (ν): Rewriting Einstein's equation in slope-intercept form (y = mx + c): V₀ = (h/e)ν - (φ₀/e). This is a straight line with: (1) Universal Slope = h/e (identical for all metals), (2) X-intercept = Threshold frequency ν₀, (3) Y-intercept = -φ₀/e."
      ],
      visual: {
        type: 'svg',
        svgContent: DUAL_NATURE_SVGS.stoppingPotentialVsFrequency,
        caption: "Stopping potential (V₀) vs frequency (ν) plot for two different metals showing universal slope h/e and distinct work function intercepts.",
        guide: "Notice that lines for different metals are strictly parallel because the slope h/e is a universal constant of nature."
      },
      importantPoints: [
        "Slope of V₀ vs ν graph = h/e = 4.14 × 10⁻¹⁵ V·s.",
        "Slope of K_max vs ν graph = h = 6.626 × 10⁻³⁴ J·s.",
        "X-intercept of V₀ vs ν gives ν₀. Y-intercept gives -φ₀/e."
      ]
    },
    {
      heading: "6. Catastrophic Failure of Classical Wave Theory & Einstein's Triumph",
      paragraphs: [
        "Why did 19th-century classical wave physics completely fail to explain the photoelectric effect? Classical electromagnetism treated light as continuous wavefronts of oscillating E and B fields spreading energy uniformly across space.",
        "Failure 1 (Threshold Frequency): Classical wave theory asserted that the energy absorbed by an electron depends purely on the light wave's amplitude (intensity). Thus, light of ANY frequency should eject electrons if made intense enough. Reality: Sub-threshold light (ν < ν₀) ejects ZERO electrons, even with a multi-kilowatt laser.",
        "Failure 2 (Time Delay): In classical wave theory, continuous wavefront energy spreads over millions of surface atoms. A single electron occupying atomic area ~10⁻¹⁹ m² would require hours to days to accumulate the ~2 eV required to escape. Reality: Photoelectrons emerge instantaneously in less than 1 nanosecond (< 10⁻⁹ s).",
        "Failure 3 (Kinetic Energy vs Intensity): Classical wave theory predicted that brighter light (larger electric field amplitude E₀) would exert larger forces and impart greater kinetic energy to electrons. Reality: K_max is completely independent of intensity and depends strictly on frequency ν.",
        "Einstein's Quantum Solution: By modeling radiation as discrete localized packets (photons, E = hν), energy is delivered in a single quantum leap. If hν ≥ φ₀, the electron escapes immediately with K_max = hν - φ₀."
      ],
      visual: {
        type: 'svg',
        svgContent: DUAL_NATURE_SVGS.thresholdConcept,
        caption: "Threshold frequency critical condition: Sub-threshold red light fails completely, while above-threshold UV light triggers instantaneous emission.",
        guide: "Observe the all-or-none quantum nature of photoemission: intensity cannot compensate for insufficient individual photon energy."
      },
      importantPoints: [
        "Wave theory predicts: Energy ∝ Intensity, Time lag ~ hours, No threshold frequency.",
        "Quantum reality: Energy ∝ Frequency, Time lag < 10⁻⁹ s, Strict threshold frequency ν₀.",
        "Einstein was awarded the 1921 Nobel Prize in Physics specifically for explaining the Photoelectric Effect."
      ]
    },
    {
      heading: "7. The Photon Picture of Electromagnetic Radiation",
      paragraphs: [
        "The photon hypothesis transformed modern physics. The key attributes of photons are summarized below:",
        "1. Energy and Momentum: Every photon of frequency ν and wavelength λ carries energy E = hν = hc/λ and linear momentum p = E/c = h/λ.",
        "2. Speed: In vacuum, all photons travel at the invariant speed of light c = 3.00 × 10⁸ m/s, regardless of their frequency, intensity, or the motion of the source/observer.",
        "3. Rest Mass & Charge: Photons have zero rest mass (m₀ = 0) and zero electric charge. They are completely unaffected by static electric and magnetic fields.",
        "4. Photon-Particle Collisions: In photon-electron collisions (e.g. Compton scattering), total energy and total linear momentum are conserved. However, the number of photons may not be conserved (photons can be absorbed or created).",
        "5. Light Intensity in Photon Picture: Light intensity I is the energy incident per unit area per second. For monochromatic light of frequency ν, Intensity I = (Number of photons per unit area per second) × (hν) = Φ × hν, where Φ is the photon flux."
      ],
      visual: {
        type: 'svg',
        svgContent: DUAL_NATURE_SVGS.photonQuantaConcept,
        caption: "The Photon: Fundamental quantum packet of radiation showing localized energy E = hν and linear momentum p = h/λ.",
        guide: "Review the five fundamental photon properties highlighted in the right-hand panel."
      },
      importantPoints: [
        "Photons are uncharged quanta; they do not produce magnetic deflection in cathode ray tubes.",
        "When light passes from air to glass: Frequency ν = constant, Photon energy E = constant, Wavelength λ decreases (λ/μ), Speed v decreases (c/μ).",
        "Radiation force on absorbing surface: F = P/c; on reflecting surface: F = 2P/c."
      ]
    }
  ],

  formulae: DUAL_NATURE_MASTER_FORMULA_SHEET.slice(0, 7),

  visualLearning: {
    type: 'svg',
    svgContent: DUAL_NATURE_SVGS.intensityIVComparison,
    caption: "Master Photoelectric I-V graph under varying intensity: Constant stopping potential V₀ with proportionally scaling saturation currents."
  },

  neetImportantPoints: [
    "Threshold frequency ν₀ = φ₀/h (minimum frequency for emission).",
    "Threshold wavelength λ₀ = hc/φ₀ (maximum wavelength for emission; λ ≤ λ₀ required).",
    "Work Function φ₀ is lowest for Caesium (2.14 eV) and highest for Platinum (5.65 eV).",
    "Stopping potential V₀ depends ONLY on frequency ν and metal work function φ₀; it is 100% INDEPENDENT of intensity.",
    "Photocurrent and saturation current are directly proportional to incident light intensity.",
    "Slope of V₀ vs ν graph is a universal constant: Slope = h/e = 4.14 × 10⁻¹⁵ V·s.",
    "Photoelectric emission is instantaneous, occurring within < 10⁻⁹ seconds.",
    "When frequency of incident light is doubled, maximum kinetic energy becomes MORE than double (K₂ = 2K₁ + φ₀).",
    "Photons have zero rest mass (m₀ = 0) and zero electric charge.",
    "hc shortcut: hc ≈ 12400 eV·Å = 1240 eV·nm."
  ],

  commonConfusions: DUAL_NATURE_NEET_TRAPS.slice(0, 8).map(trap => ({
    commonConfusion: trap.commonMistake,
    correctFact: trap.correctPhysicsFact,
    whyItMattersForNEET: trap.whyExaminerSetsThisTrap
  })),

  quickRevision: DUAL_NATURE_5_MIN_REVISION.slice(0, 9),

  practiceQuestions: DUAL_NATURE_PRACTICE_QUESTIONS.slice(0, 5).map(q => ({
    questionId: q.id,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    difficulty: q.difficulty,
    topicTested: q.category,
    conceptTested: q.category
  })),

  pyqs: DUAL_NATURE_VERIFIED_PYQS.slice(0, 5).map(p => ({
    id: p.id,
    year: parseInt(p.year),
    exam: p.exam,
    question: p.question,
    options: p.options,
    correctAnswer: p.correctAnswer,
    explanation: p.solution,
    difficulty: p.difficulty,
    conceptTested: p.conceptTested,
    verified: true,
    isVerifiedPYQ: true
  }))
};
