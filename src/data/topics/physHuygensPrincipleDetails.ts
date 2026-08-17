import { DetailedTopicContent } from '../../types/neet';
import { WAVE_OPTICS_SVGS } from '../waveOptics/waveOpticsDiagrams';
import { WAVE_OPTICS_TERMS, WAVE_OPTICS_CONCEPT_SECTIONS } from '../waveOptics/waveOpticsTermsAndConcepts';
import { WAVE_OPTICS_NUMERICALS } from '../waveOptics/waveOpticsNumericals';
import { WAVE_OPTICS_VERIFIED_PYQS } from '../waveOptics/waveOpticsPyqs';
import { WAVE_OPTICS_TRAPS, WAVE_OPTICS_FORMULA_SHEET, WAVE_OPTICS_PRACTICE_QUESTIONS } from '../waveOptics/waveOpticsTrapsAndFormulaSheet';

export const physHuygensPrincipleDetails: DetailedTopicContent = {
  topicId: "phys-huygens-principle",
  topicName: "Wave Nature of Light & Huygens' Principle",
  subject: "Physics",
  class: "Class 12",
  classification: "Electromagnetic Waves & Optics",
  chapter: "Wave Optics",

  whatIsThisTopic: "First-principles study of wave optics, wavefront geometries (spherical, cylindrical, plane), Huygens' construction of secondary wavelets, and mathematical proofs of the laws of reflection (i = r) and refraction (Snell's Law: n₁ sin i = n₂ sin r).",

  basicIdea: [
    "Ray optics fails when light encounters microscopic apertures comparable to its wavelength (400–700 nm). Wave optics describes light as propagating electromagnetic wavefronts.",
    "A wavefront is the continuous locus of all points vibrating in the same phase. Rays are ALWAYS strictly perpendicular (normal) to wavefronts at every point.",
    "Huygens' Principle: Every point on a primary wavefront acts as a source of secondary spherical wavelets. The forward envelope touching these wavelets forms the new wavefront.",
    "During refraction across a medium boundary, wave speed (v = c/n) and wavelength (λ = λ₀/n) change, but frequency f remains strictly constant because it is determined solely by the source."
  ],

  importantTerms: WAVE_OPTICS_TERMS.slice(0, 5),

  conceptExplanation: [
    WAVE_OPTICS_CONCEPT_SECTIONS[0],
    WAVE_OPTICS_CONCEPT_SECTIONS[1],
    {
      heading: "3. Behavior of Wavefronts Passing Through Optical Elements (Prisms, Lenses & Mirrors)",
      paragraphs: [
        "How do flat plane wavefronts transform when interacting with optical devices?",
        "1. Thin Prism: A plane wavefront AB falls on a prism. The lower part of the wavefront traverses the thick glass base, slowing down (v = c/n), while the upper part travels through air. Consequently, the emerging wavefront BC tilts towards the base of the prism, producing the refracted angle of deviation.",
        "2. Convex Lens: A plane wavefront falls on a convex lens. The central part of the wavefront passes through the thickest central part of the lens and experiences maximum time delay. The outer edges pass through thin glass. The emerging wavefront becomes a CONVERGING SPHERICAL WAVEFRONT focusing towards the principal focus F.",
        "3. Concave Mirror: A plane wavefront reflects off a concave mirror. The outer edges of the wavefront hit the mirror and reflect earlier than the center. The reflected wavefront becomes a CONVERGING SPHERICAL WAVEFRONT heading towards focus F."
      ],
      visual: {
        type: 'svg',
        svgContent: WAVE_OPTICS_SVGS.refractionHuygens,
        caption: "Figure 3: Wavefront refraction and transformation through optical boundaries."
      },
      importantPoints: [
        "Prism: Plane wavefront in ⇒ Tilted plane wavefront out.",
        "Convex Lens: Plane wavefront in ⇒ Converging spherical wavefront out.",
        "Concave Mirror: Plane wavefront in ⇒ Converging spherical wavefront out."
      ],
      examples: [
        {
          problem: WAVE_OPTICS_NUMERICALS[0].problem,
          stepByStep: WAVE_OPTICS_NUMERICALS[0].calculation,
          solution: WAVE_OPTICS_NUMERICALS[0].calculation.join("\n") + "\n" + WAVE_OPTICS_NUMERICALS[0].finalAnswer,
          answer: WAVE_OPTICS_NUMERICALS[0].finalAnswer
        }
      ]
    }
  ],

  formulae: [
    WAVE_OPTICS_FORMULA_SHEET[0],
    WAVE_OPTICS_FORMULA_SHEET[1],
    {
      title: "Snell's Law via Wave Speed",
      formula: "sin i / sin r = v₁ / v₂ = n₂ / n₁",
      variables: "i = angle of incidence, r = angle of refraction, v₁, v₂ = wave speeds, n₁, n₂ = refractive indices",
      whenToUse: "Refraction proofs using Huygens' construction."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: WAVE_OPTICS_SVGS.huygensConstruction,
    caption: "Huygens' secondary wavelets construction generating a new forward envelope wavefront."
  },

  neetImportantPoints: [
    "Frequency f of light NEVER changes during reflection or refraction.",
    "Wavelength in medium: λ_med = λ_air / μ.",
    "Speed in medium: v_med = c / μ.",
    "Rays are ALWAYS normal to wavefronts: Ray ⟂ Wavefront.",
    "Obliquity factor (1 + cos θ)/2 mathematically explains why no backward wavefront exists (for θ = 180°, factor = 0)."
  ],

  commonConfusions: WAVE_OPTICS_TRAPS.slice(0, 5),

  practiceQuestions: WAVE_OPTICS_PRACTICE_QUESTIONS.slice(0, 5),

  quickRevision: [
    "Light behaves as a transverse electromagnetic wave with wavelength ~400–700 nm.",
    "Wavefront types: Point source → Spherical; Line slit → Cylindrical; Infinity → Plane.",
    "Huygens' Principle: Every wavefront point creates secondary wavelets of radius v·t. Forward envelope gives new wavefront.",
    "Reflection (i = r) and Refraction (n₁ sin i = n₂ sin r) proved via congruent triangles in wave geometry."
  ],

  pyqs: WAVE_OPTICS_VERIFIED_PYQS.filter(q => q.year === 2010 || q.id === "pyq-wo-2010")
};
