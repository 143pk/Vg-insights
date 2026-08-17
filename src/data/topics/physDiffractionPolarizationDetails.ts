import { DetailedTopicContent } from '../../types/neet';
import { WAVE_OPTICS_SVGS } from '../waveOptics/waveOpticsDiagrams';
import { WAVE_OPTICS_TERMS, WAVE_OPTICS_CONCEPT_SECTIONS } from '../waveOptics/waveOpticsTermsAndConcepts';
import { WAVE_OPTICS_NUMERICALS } from '../waveOptics/waveOpticsNumericals';
import { WAVE_OPTICS_VERIFIED_PYQS } from '../waveOptics/waveOpticsPyqs';
import { WAVE_OPTICS_TRAPS, WAVE_OPTICS_FORMULA_SHEET, WAVE_OPTICS_PRACTICE_QUESTIONS } from '../waveOptics/waveOpticsTrapsAndFormulaSheet';

export const physDiffractionPolarizationDetails: DetailedTopicContent = {
  topicId: "phys-diffraction-polarization",
  topicName: "Diffraction of Light & Polarisation",
  subject: "Physics",
  class: "Class 12",
  classification: "Electromagnetic Waves & Optics",
  chapter: "Wave Optics",

  whatIsThisTopic: "Comprehensive first-principles coverage of Fraunhofer Single-Slit Diffraction, Minima and Secondary Maxima derivations, Central Maximum linear and angular widths, Transverse wave proof, Polarisation of light, Malus's Law (I = I₀ cos² θ), and Brewster's Law (μ = tan i_B).",

  basicIdea: [
    "Diffraction is the bending of light waves around obstacles or apertures into the geometrical shadow region. It is pronounced only when obstacle size 'a' is comparable to wavelength 'λ' (a ~ λ).",
    "In single-slit diffraction of slit width 'a', minima occur at a sin θ = nλ (n = 1, 2, 3...). The central maximum has angular width 2λ/a and linear width 2λD/a (TWICE the width of secondary maxima!).",
    "Polarisation proves conclusively that light is a TRANSVERSE electromagnetic wave (longitudinal waves like sound in air CANNOT be polarised).",
    "Malus's Law: For polarised light passing through an analyser, transmitted intensity is I = I₀ cos² θ. Unpolarised light through the first polaroid always transmits exactly ½ I_unpol.",
    "Brewster's Law: When light is incident at Brewster angle i_B such that μ = tan i_B, the reflected ray is 100% plane-polarised, and the reflected and refracted rays are mutually perpendicular (i_B + r = 90°)."
  ],

  importantTerms: WAVE_OPTICS_TERMS.slice(8),

  conceptExplanation: [
    WAVE_OPTICS_CONCEPT_SECTIONS[4],
    WAVE_OPTICS_CONCEPT_SECTIONS[5],
    {
      heading: "3. Practical & NEET High-Yield Applications of Polarisation",
      paragraphs: [
        "1. Polaroid Sunglasses & Glare Reduction: When sunlight reflects off horizontal surfaces (wet roads, snow, water reservoirs), it becomes predominantly horizontally polarised. Polaroid sunglasses feature vertically oriented transmission axes, selectively absorbing horizontal glare and enhancing visual comfort and safety.",
        "2. Liquid Crystal Displays (LCDs): LCD computer monitors and smartphone screens sandwich liquid crystal molecules between two crossed polaroid sheets. Applying an electric voltage twists or untwists the crystal molecules, rotating the plane of polarisation and controlling light transmission through each sub-pixel.",
        "3. 3D Cinema Projection: Left and right camera stereoscopic views are projected with mutually perpendicular polarisation states (or orthogonal circular polarisation). Viewers wear polarizing glasses so that the left eye sees only the left image and the right eye sees only the right image, creating depth perception.",
        "4. Photoelastic Stress Analysis: Transparent plastic engineering models placed between crossed polaroids exhibit colourful fringe patterns when subjected to mechanical stresses, revealing high-stress concentration zones."
      ],
      visual: {
        type: 'svg',
        svgContent: WAVE_OPTICS_SVGS.polariserAnalyser,
        caption: "Figure: Transmission of light through polariser and analyser obeying Malus' Law."
      },
      importantPoints: [
        "Polaroid sunglasses have vertical transmission axes to eliminate horizontal glare.",
        "LCDs use liquid crystals between crossed polaroids to modulate light electronically.",
        "Sound waves in air cannot be polarised because they are longitudinal.",
        "At Brewster's angle, reflected ray ⟂ refracted ray (i_B + r = 90°)."
      ],
      examples: [
        {
          problem: WAVE_OPTICS_NUMERICALS[7].problem,
          stepByStep: WAVE_OPTICS_NUMERICALS[7].calculation,
          solution: WAVE_OPTICS_NUMERICALS[7].calculation.join("\n"),
          answer: WAVE_OPTICS_NUMERICALS[7].finalAnswer
        },
        {
          problem: WAVE_OPTICS_NUMERICALS[8].problem,
          stepByStep: WAVE_OPTICS_NUMERICALS[8].calculation,
          solution: WAVE_OPTICS_NUMERICALS[8].calculation.join("\n"),
          answer: WAVE_OPTICS_NUMERICALS[8].finalAnswer
        },
        {
          problem: WAVE_OPTICS_NUMERICALS[9].problem,
          stepByStep: WAVE_OPTICS_NUMERICALS[9].calculation,
          solution: WAVE_OPTICS_NUMERICALS[9].calculation.join("\n"),
          answer: WAVE_OPTICS_NUMERICALS[9].finalAnswer
        },
        {
          problem: WAVE_OPTICS_NUMERICALS[10].problem,
          stepByStep: WAVE_OPTICS_NUMERICALS[10].calculation,
          solution: WAVE_OPTICS_NUMERICALS[10].calculation.join("\n"),
          answer: WAVE_OPTICS_NUMERICALS[10].finalAnswer
        }
      ]
    }
  ],

  formulae: [
    WAVE_OPTICS_FORMULA_SHEET[11],
    WAVE_OPTICS_FORMULA_SHEET[12],
    WAVE_OPTICS_FORMULA_SHEET[13],
    WAVE_OPTICS_FORMULA_SHEET[14],
    WAVE_OPTICS_FORMULA_SHEET[15]
  ],

  visualLearning: {
    type: 'svg',
    svgContent: WAVE_OPTICS_SVGS.singleSlitDiffraction,
    caption: "Single-slit Fraunhofer diffraction geometry and wave division into canceling zones (minima at a sin θ = nλ)."
  },

  neetImportantPoints: [
    "Diffraction Minima: a sin θ = nλ (where n = 1, 2, 3...).",
    "Central Maximum Angular Width = 2λ / a; Linear Width = 2λD / a.",
    "Secondary Maxima Angular Width = λ / a; Linear Width = λD / a.",
    "Peak intensity ratios: I₀ : I₁ : I₂ ≈ 1 : (1/22) : (1/61).",
    "Malus's Law: I = I₀ cos² θ.",
    "Brewster's Law: μ = tan i_B  ⇒  i_B + r = 90°."
  ],

  commonConfusions: WAVE_OPTICS_TRAPS.slice(4, 15),

  practiceQuestions: WAVE_OPTICS_PRACTICE_QUESTIONS.slice(11),

  quickRevision: [
    "Diffraction occurs when obstacle size a ~ λ. Minima condition: a sin θ = nλ (n = 1, 2, 3...).",
    "Central maximum width = 2λD/a (TWICE as wide as secondary maxima λD/a).",
    "Polarisation PROVES transverse nature of light (longitudinal sound waves cannot be polarised).",
    "Malus's Law: I = I₀ cos² θ. Unpolarised light into polaroid yields ½ I_unpol.",
    "Brewster's Law: μ = tan i_B; reflected ray is 100% polarised and perpendicular to refracted ray (i_B + r = 90°)."
  ],

  pyqs: WAVE_OPTICS_VERIFIED_PYQS.filter(q => q.id.includes("2017") || q.id.includes("2014"))
};
