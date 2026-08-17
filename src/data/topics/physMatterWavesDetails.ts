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

export const physMatterWavesDetails: DetailedTopicContent = {
  topicId: "phys-matter-waves",
  topicName: "Matter Waves, de Broglie Hypothesis & Davisson–Germer Experiment",
  subject: "Physics",
  class: "Class 12",
  classification: "Modern Physics",
  chapter: "Dual Nature of Radiation and Matter",

  whatIsThisTopic: "Comprehensive first-principles mastery of de Broglie's Matter Wave Hypothesis, mathematical forms for accelerated particles and thermal neutrons, experimental validation by Davisson & Germer, electron diffraction, and the Wave-Particle Duality of Nature.",

  basicIdea: [
    "Nature loves symmetry: the universe consists entirely of radiation (energy) and matter (mass). Since radiation exhibits dual wave-particle character, matter must also possess an inherent wave nature when in motion.",
    "In 1924, Louis de Broglie proposed that a moving material particle of mass m and velocity v has an associated matter wave with wavelength λ = h/p = h/(mv).",
    "For microscopic particles (like electrons), the de Broglie wavelength is on the order of 10⁻¹⁰ m (Ångströms), comparable to crystal lattice spacing, making wave phenomena like diffraction observable.",
    "In 1927, Davisson and Germer directly confirmed electron matter waves by demonstrating nickel crystal electron diffraction, with peak scattering at 54 V and θ = 50° giving λ_exp = 1.65 Å, in precise agreement with de Broglie's theoretical prediction (1.67 Å)."
  ],

  importantTerms: DUAL_NATURE_IMPORTANT_TERMS.slice(8),

  conceptExplanation: [
    {
      heading: "1. The de Broglie Hypothesis & Matter Wave Principles",
      paragraphs: [
        "In 1924, French physicist Louis-Victor de Broglie reasoned that if light waves can manifest particle-like momentum (p = h/λ), then by universal physical symmetry, material particles in motion should exhibit wave-like properties.",
        "The de Broglie relation connects the wave aspect (wavelength λ) of a material entity directly to its particle aspect (linear momentum p):",
        "λ = h / p = h / (m v)",
        "Where h is Planck's constant (6.626 × 10⁻³⁴ J·s), m is the mass of the particle, and v is its velocity.",
        "Properties of Matter Waves:",
        "1. Matter waves are NOT electromagnetic waves. EM waves are produced by accelerated electric charges and travel at speed c. Matter waves are associated with ANY moving particle (neutral or charged) and travel with particle group velocity.",
        "2. Matter waves are NOT mechanical sound waves. They require no elastic material medium to propagate.",
        "3. Wavelength is inversely proportional to momentum: Lighter particles and slower particles have larger de Broglie wavelengths.",
        "4. Why macroscopic objects don't show matter waves: Because Planck's constant h is extremely small (~10⁻³⁴ J·s). For a 0.15 kg cricket ball at 30 m/s, λ ≈ 1.5 × 10⁻³⁴ m—unmeasurably smaller than an atomic nucleus (~10⁻¹⁵ m). But for an electron (m ≈ 10⁻³¹ kg) moving at 10⁶ m/s, λ ≈ 7 Å, perfectly comparable to atomic spacings!"
      ],
      visual: {
        type: 'svg',
        svgContent: DUAL_NATURE_SVGS.deBroglieMatterWave,
        caption: "de Broglie Matter Wave: Moving particle of mass m and momentum p accompanied by its associated matter wave envelope.",
        guide: "Observe the inverse relationship: higher velocity or heavier mass compresses the matter wavelength into unobservable scales."
      },
      importantPoints: [
        "de Broglie wavelength: λ = h/p = h/(mv).",
        "Matter waves are probability waves representing quantum probability amplitudes.",
        "Matter waves exist for uncharged particles (like neutrons and atoms) as well as charged particles (electrons, protons)."
      ]
    },
    {
      heading: "2. Mathematical Forms of de Broglie Wavelength for NEET",
      paragraphs: [
        "NEET UG questions require converting the de Broglie equation across different physical parameter representations:",
        "Form A: In terms of Kinetic Energy (K):",
        "From classical mechanics, Kinetic Energy K = p² / (2m) ⟹ Linear Momentum p = √(2mK).",
        "Substituting into de Broglie's equation: λ = h / √(2mK)",
        "Form B: Charged Particle Accelerated through Potential Difference (V):",
        "When a particle of charge q is accelerated from rest through a potential difference of V Volts, the work done by the electric field equals its kinetic energy: K = q V.",
        "Substituting into the kinetic energy form: λ = h / √(2 m q V)",
        "Form C: The Golden Shortcut for Accelerated Electrons:",
        "For an electron: Mass m_e = 9.109 × 10⁻³¹ kg, Charge e = 1.602 × 10⁻¹⁹ C, h = 6.626 × 10⁻³⁴ J·s.",
        "Substituting constants: λ_e = (6.626 × 10⁻³⁴) / √[ 2 × (9.109 × 10⁻³¹) × (1.602 × 10⁻¹⁹) × V ]",
        "λ_electron = 12.27 / √V  Å  =  1.227 / √V  nm  =  √[ 150 / V ]  Å",
        "Where V is in Volts and λ is in Ångströms (10⁻¹⁰ m) or nanometers (10⁻⁹ m)."
      ],
      visual: {
        type: 'svg',
        svgContent: DUAL_NATURE_SVGS.electronAcceleratedV,
        caption: "Electron accelerated from rest through potential difference V acquiring de Broglie wavelength λ = 12.27 / √V Å.",
        guide: "Memorize the derivation and Golden Shortcut box: at V = 100 V, λ = 1.227 Å; at V = 54 V, λ = 1.67 Å."
      },
      importantPoints: [
        "For Electron: λ_e = 12.27 / √V Å = 1.227 / √V nm.",
        "For Proton (m_p ≈ 1836 m_e, q = e): λ_p = 0.286 / √V Å.",
        "For Deuteron (m_d ≈ 2 m_p, q = e): λ_d = 0.202 / √V Å.",
        "For Alpha particle (m_α = 4 m_p, q = 2e): λ_α = 0.101 / √V Å."
      ]
    },
    {
      heading: "3. Thermal Neutrons & Matter Waves of Uncharged Particles",
      paragraphs: [
        "Uncharged particles like neutrons cannot be accelerated by electric fields (q = 0). Instead, their kinetic energy is acquired through thermal collisions with matter at absolute temperature T.",
        "From the Kinetic Theory of Gases, the average translational kinetic energy of a particle in thermal equilibrium at absolute temperature T (in Kelvin) is given by equipartition of energy in 3 dimensions:",
        "Kinetic Energy K = (3/2) k T",
        "Where k is the Boltzmann constant (k = 1.38 × 10⁻²³ J/K).",
        "Substituting this thermal kinetic energy into the de Broglie formula yields:",
        "λ_thermal = h / √(2 m K) = h / √[ 2 m (3/2 k T) ] = h / √(3 m k T)",
        "For thermal neutrons (mass m_n = 1.675 × 10⁻²⁷ kg), substituting numerical constants yields the NEET shortcut:",
        "λ_neutron ≈ 25.6 / √T  Å  (with T in Kelvin)"
      ],
      visual: {
        type: 'svg',
        svgContent: DUAL_NATURE_SVGS.photonQuantaConcept,
        caption: "Summary comparison of quantum wave-particle parameters across fundamental physical interactions.",
        guide: "Remember: For thermal neutrons, the factor inside the square root is 3 (from 3/2 kT), NOT 2!"
      },
      importantPoints: [
        "Thermal neutron de Broglie formula: λ = h / √(3 m k T).",
        "Temperature T MUST ALWAYS be expressed in Kelvin (K = °C + 273).",
        "Thermal neutrons at room temperature (300 K) have λ ≈ 1.46 Å, ideal for probing crystal structures."
      ]
    },
    {
      heading: "4. The Davisson–Germer Experiment: Direct Proof of Matter Waves",
      paragraphs: [
        "In 1927, C.J. Davisson and L.H. Germer performed a historic experiment that provided the first conclusive, direct experimental verification of de Broglie's matter wave hypothesis.",
        "Apparatus Setup:",
        "1. Electron Gun: A tungsten filament (F) coated with barium oxide heated by a low-tension battery emits thermionic electrons. Electrons are collimated and accelerated to desired velocity by a cylindrical anode maintained at a variable high potential V (44 V to 68 V).",
        "2. Nickel Crystal Target: The fine, parallel electron beam strikes the surface of a single crystal of Nickel (Ni).",
        "3. Movable Electron Collector (Detector): A Faraday cylinder collector connected to a sensitive galvanometer moves along a circular graduated scale (0° to 90°) to record the intensity of electrons scattered at various scattering angles θ.",
        "Key Observation:",
        "When the accelerating voltage was varied systematically, a pronounced, sharp peak in scattered electron intensity appeared at an accelerating potential of exactly V = 54 Volts and a scattering angle of θ = 50°.",
        "Analysis & Proof:",
        "• Theoretical de Broglie Wavelength: λ_theory = 12.27 / √54 = 1.67 Å.",
        "• Experimental Bragg Diffraction: For scattering angle θ = 50°, the glancing angle with the crystal plane is ϕ = 90° - θ/2 = 65°. For nickel crystal interplanar spacing d = 0.91 Å, Bragg's law for 1st order diffraction (2d sin ϕ = 1 × λ) gives:",
        "λ_experimental = 2 × (0.91 Å) × sin(65°) = 2 × 0.91 × 0.9063 = 1.65 Å.",
        "The extraordinary match between λ_theory (1.67 Å) and λ_experimental (1.65 Å) conclusively proved that moving electrons undergo constructive interference diffraction—a behavior unique to waves!"
      ],
      visual: {
        type: 'svg',
        svgContent: DUAL_NATURE_SVGS.davissonGermerSetup,
        caption: "Davisson–Germer experimental apparatus showing electron gun, nickel target, and movable collector tracking the 54 V / 50° peak.",
        guide: "Trace the path from the electron gun to the nickel crystal and scattered beam at θ = 50° into the collector detector."
      },
      importantPoints: [
        "Peak diffraction condition: Voltage V = 54 Volts, Scattering angle θ = 50°, Glancing angle ϕ = 65°.",
        "Interplanar spacing for Nickel: d = 0.91 Å.",
        "Theoretical wavelength = 1.67 Å; Experimental wavelength = 1.65 Å.",
        "G.P. Thomson simultaneously proved electron wave nature by transmitting high-speed electrons through thin gold foils (Davisson and Thomson shared the 1937 Nobel Prize in Physics)."
      ]
    },
    {
      heading: "5. Electron Diffraction & Applications (The Electron Microscope)",
      paragraphs: [
        "The discovery that electrons possess wave properties led to the invention of the Electron Microscope by Ernst Ruska and Max Knoll.",
        "Resolving Power Principle:",
        "From wave optics, the limit of resolution of an optical microscope is proportional to the wavelength of illumination used (d_min ≈ λ / 2 NA). Visible light has wavelengths of 4000 Å to 7000 Å (0.4 to 0.7 μm), fundamentally limiting optical microscope magnification to ~2000×.",
        "In contrast, electrons accelerated through 50 kV to 100 kV acquire de Broglie wavelengths of ~0.04 Å to 0.05 Å—nearly 100,000 times shorter than visible light photons!",
        "This extraordinarily short wavelength virtually eliminates diffraction blurring, enabling transmission electron microscopes (TEM) to achieve atomic-scale resolution down to ~0.1 nm (1 Å) and magnifications exceeding 1,000,000×."
      ],
      visual: {
        type: 'svg',
        svgContent: DUAL_NATURE_SVGS.electronDiffractionBragg,
        caption: "Bragg diffraction mechanism of electron matter waves reflecting constructively from parallel crystal lattice planes.",
        guide: "Path difference between adjacent planes is 2d sin ϕ. Constructive interference occurs when this path difference equals an integer number of wavelengths nλ."
      },
      importantPoints: [
        "Electron microscope utilizes matter waves of high-voltage accelerated electrons.",
        "Resolving power is inversely proportional to wavelength (RP ∝ 1/λ).",
        "Shorter de Broglie wavelength enables atomic resolution unobtainable by optical microscopes."
      ]
    },
    {
      heading: "6. Wave-Particle Duality Synthesis & Complementarity Principle",
      paragraphs: [
        "Bohr's Principle of Complementarity states that the wave and particle models of radiation and matter are complementary descriptions of physical phenomena. Both descriptions are indispensable for a complete understanding, yet no single experimental arrangement can reveal both wave and particle aspects at the exact same instant.",
        "Synthesis of Universal Duality:",
        "1. Radiation (Photons): Manifests wave nature during free spatial propagation (interference, diffraction, polarization) and particle nature during localized energy-momentum interactions with matter (photoelectric effect, Compton scattering).",
        "2. Matter (Electrons, Protons, Atoms): Manifests particle nature in classical collisions and trajectories (cathode rays, cloud chambers) and wave nature during spatial propagation and lattice scattering (Davisson-Germer diffraction, electron microscopy).",
        "Universal Master Equations:",
        "• Energy-Frequency Link: E = hν  (Planck-Einstein)",
        "• Momentum-Wavelength Link: p = h / λ  (de Broglie)"
      ],
      visual: {
        type: 'svg',
        svgContent: DUAL_NATURE_SVGS.dualityComplementarity,
        caption: "Universal Wave-Particle Duality synthesis showing symmetric wave and particle manifestations across Radiation and Matter.",
        guide: "Review the complementary dual columns: Radiation on the left, Matter on the right."
      },
      importantPoints: [
        "Wave and particle natures are complementary, never contradictory.",
        "Propagation is governed by wave rules (interference, phase, λ = h/p).",
        "Energy-momentum exchange is governed by particle rules (quantized E = hν, localized collisions)."
      ]
    }
  ],

  formulae: DUAL_NATURE_MASTER_FORMULA_SHEET.slice(7),

  visualLearning: {
    type: 'svg',
    svgContent: DUAL_NATURE_SVGS.davissonGermerSetup,
    caption: "Davisson–Germer Experiment: Definitive experimental proof of the wave nature of electrons through nickel crystal diffraction."
  },

  neetImportantPoints: [
    "de Broglie wavelength: λ = h/p = h/(mv) = h/√(2mK).",
    "Accelerated charged particle: λ = h/√(2mqV).",
    "Electron golden shortcut: λ_e = 12.27 / √V Å = 1.227 / √V nm.",
    "For same accelerating potential V: λ_p : λ_d : λ_α = 2√2 : 2 : 1.",
    "Thermal neutron de Broglie wavelength: λ = h / √(3 m k T) ≈ 25.6 / √T Å.",
    "Davisson-Germer experiment observed peak at V = 54 V and scattering angle θ = 50° (glancing angle ϕ = 65°).",
    "Theoretical wavelength = 1.67 Å; Experimental Bragg wavelength = 1.65 Å.",
    "If kinetic energy of a particle increases by 4 times, its de Broglie wavelength is halved (50% decrease).",
    "If a photon and an electron have the SAME wavelength, they have the EXACT SAME linear momentum (p = h/λ).",
    "Electron microscope achieves atomic resolution because accelerated electrons have de Broglie wavelengths ~100,000× smaller than visible light photons."
  ],

  commonConfusions: DUAL_NATURE_NEET_TRAPS.slice(4, 12).map(trap => ({
    commonConfusion: trap.commonMistake,
    correctFact: trap.correctPhysicsFact,
    whyItMattersForNEET: trap.whyExaminerSetsThisTrap
  })),

  quickRevision: DUAL_NATURE_5_MIN_REVISION.slice(9),

  practiceQuestions: DUAL_NATURE_PRACTICE_QUESTIONS.slice(5).map(q => ({
    questionId: q.id,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    difficulty: q.difficulty,
    topicTested: q.category,
    conceptTested: q.category
  })),

  pyqs: DUAL_NATURE_VERIFIED_PYQS.slice(3).map(p => ({
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
