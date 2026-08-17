import { DetailedTopicContent } from '../../types/neet';
import {
  emImportantTerms,
  emConceptExplanations,
  emFormulaSheet,
  emCommonConfusions,
  emQuickRevisionPoints,
  emConceptualQuestions
} from '../emWaves/emWavesContent';
import { emPyqs } from '../emWaves/emWavesPyqs';
import { emSelfTestQuestions } from '../emWaves/emWavesSelfTest';
import { emNumericals } from '../emWaves/emWavesNumericals';

export const physEmSpectrumDetails: DetailedTopicContent = {
  topicId: "phys-em-spectrum",
  topicName: "Electromagnetic Waves (Masterclass)",
  subject: "Physics",
  class: "Class 12",
  classification: "Electromagnetic Waves & Optics",
  chapter: "Electromagnetic Waves",

  whatIsThisTopic: "Electromagnetic Waves are self-sustaining, transverse disturbances comprising mutually perpendicular oscillating electric (E) and magnetic (B) fields that propagate through space and vacuum at universal speed c = 1/√(μ₀ε₀) ≈ 3.0 × 10⁸ m/s. Introduced by James Clerk Maxwell in 1865 via the revolutionary concept of Displacement Current I_d = ε₀(dΦ_E/dt), EM waves unify electricity, magnetism, and light into a single comprehensive spectrum spanning Radio Waves, Microwaves, Infrared, Visible Light, Ultraviolet, X-Rays, and Gamma Rays.",

  basicIdea: [
    "1. Displacement Current (I_d): Maxwell resolved the inconsistency in Ampère's Circuital Law by showing that a time-varying electric field produces a displacement current I_d = ε₀(dΦ_E/dt), ensuring continuity of total current everywhere (I_c outside capacitor = I_d between plates).",
    "2. Maxwell's Prediction: Time-varying E induces B (Ampère-Maxwell Law), and time-varying B induces E (Faraday's Law). This mutual regeneration allows EM waves to propagate through vacuum without any material medium at speed c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s.",
    "3. Transverse Wave Nature: Electric and magnetic fields oscillate perpendicular to each other and perpendicular to the direction of propagation (E ⟂ B ⟂ v̂). Direction of wave travel is given by the unit vector v̂ = (Ê × B̂).",
    "4. In-Phase Oscillations: In vacuum, the electric field E(x,t) = E₀ sin(kx - ωt) and magnetic field B(x,t) = B₀ sin(kx - ωt) oscillate in EXACT phase (Δφ = 0). They reach their peaks and nodes at the exact same space-time coordinates.",
    "5. Amplitude Relationship: At every instant and point in vacuum, E₀ / B₀ = c. While B₀ is numerically small in SI units (~μT), its physical energy contribution is equal to that of the electric field.",
    "6. Equipartition of Energy: Energy is divided equally between electric and magnetic fields: ⟨u_E⟩ = ⟨u_B⟩ = ¼ ε₀ E₀². The total average energy density is ⟨u⟩ = ½ ε₀ E₀² = B₀²/(2μ₀).",
    "7. Radiation Momentum & Pressure: EM waves carry linear momentum p = U/c (complete absorption) and p = 2U/c (complete reflection). Radiation pressure is P_rad = I/c or 2I/c.",
    "8. Origin of Radiation: Static charges produce static E; charges with uniform velocity produce steady E and B with zero radiation; ACCELERATED or OSCILLATING charges radiate electromagnetic waves.",
    "9. Universal Vacuum Speed: All 7 regions of the electromagnetic spectrum travel at the EXACT same speed c = 3.0 × 10⁸ m/s in vacuum. In matter, speed reduces to v = c/√(μ_r ε_r) = c/n.",
    "10. Spectrum Sequence: Wavelength decreases (Frequency & Photon Energy increase) in the order: Radio Waves > Microwaves > Infrared > Visible Light (VIBGYOR: 700nm to 400nm) > Ultraviolet > X-Rays > Gamma Rays.",
    "11. Polarisation: Transverse waves can be polarised by Polaroid filters (Malus's Law: I = I₁ cos²θ), conclusively proving that EM waves are transverse. Longitudinal sound waves cannot be polarised.",
    "12. Distinct Sources & Applications: Microwaves (Klystron/Magnetron, 2.45 GHz resonant water heating in ovens, Radar); Infrared (Thermal radiation, TV remotes, Greenhouse effect); UV (Stratospheric ozone absorption, germicidal water purification, LASIK); X-Rays (Coolidge tube, bone radiography, crystallography); Gamma Rays (Nuclear transitions, Cobalt-60 cancer radiotherapy)."
  ],

  importantTerms: emImportantTerms,

  conceptExplanation: emConceptExplanations,

  formulae: emFormulaSheet,

  neetImportantPoints: [
    "Displacement current I_d = ε₀ (dΦ_E/dt) = C (dV/dt). In steady DC, dV/dt = 0 ⇒ I_d = 0.",
    "Generalised Ampère-Maxwell Law: ∮ B · dl = μ₀(I_c + I_d).",
    "Speed in vacuum c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s. Dimensions of 1/√(μ₀ε₀) are [L T⁻¹].",
    "Speed in a medium: v = c/n = c/√(μ_r ε_r). Frequency remains strictly unchanged on refraction.",
    "Direction of propagation is parallel to the cross product (E × B). Note that (B × E) points opposite!",
    "Field ratio E₀/B₀ = c. Ratio of electric to magnetic energy density is strictly 1:1 (⟨u_E⟩ = ⟨u_B⟩ = ¼ ε₀ E₀²).",
    "Total energy density ⟨u⟩ = ½ ε₀ E₀² = B₀²/(2μ₀) = ε₀ E_rms². Intensity I = ⟨u⟩ c = ½ ε₀ c E₀².",
    "Momentum delivered: Absorption p = U/c, Force F = P/c; Reflection p = 2U/c, Force F = 2P/c.",
    "Polarisation proves transverse nature; longitudinal waves cannot be polarised.",
    "Electromagnetic spectrum memory trick: 'Rich Men In Velvet Use X-ray Glasses' (Radio, Micro, IR, Visible, UV, X-ray, Gamma).",
    "Microwave ovens operate at 2.45 GHz matching water rotational resonance; glass/plastic stay cool.",
    "Stratospheric ozone (O₃) absorbs solar UV (λ < 290 nm); ordinary glass blocks UV rays.",
    "X-rays originate from atomic electron decelerations; Gamma rays originate from nuclear transitions."
  ],

  commonConfusions: emCommonConfusions,

  quickRevision: emQuickRevisionPoints,

  pyqs: emPyqs.map(p => ({
    id: p.id,
    year: parseInt(p.year.replace(/\D/g, '')) || 2023,
    exam: p.exam,
    examName: `${p.exam} ${p.year}`,
    question: p.question,
    questionText: p.question,
    options: p.options,
    correctAnswer: p.correctOptionIndex,
    correctAnswerIndex: p.correctOptionIndex,
    correctOption: p.correctOptionIndex,
    explanation: `${p.stepByStepSolution}\n\n⚠️ ${p.trapWarning}`,
    conceptTested: p.conceptTested,
    topicTested: "Electromagnetic Waves & Spectrum",
    difficulty: "Medium",
    verified: true,
    isVerifiedPYQ: true
  })),

  practiceQuestions: emSelfTestQuestions.map(q => ({
    id: `self-test-${q.id}`,
    questionId: `self-test-${q.id}`,
    question: q.question,
    questionText: q.question,
    options: q.options,
    correctAnswer: q.correctIndex,
    correctAnswerIndex: q.correctIndex,
    correctOption: q.correctIndex,
    explanation: q.explanation,
    difficulty: q.id <= 7 ? "Easy" : (q.id <= 15 ? "Medium" : "Hard"),
    topicTested: "Electromagnetic Waves Comprehensive Masterclass",
    conceptTested: "NEET UG 2026 Core Syllabus"
  }))
};
