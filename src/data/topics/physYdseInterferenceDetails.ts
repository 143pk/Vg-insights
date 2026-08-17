import { DetailedTopicContent } from '../../types/neet';
import { WAVE_OPTICS_SVGS } from '../waveOptics/waveOpticsDiagrams';
import { WAVE_OPTICS_TERMS, WAVE_OPTICS_CONCEPT_SECTIONS } from '../waveOptics/waveOpticsTermsAndConcepts';
import { WAVE_OPTICS_NUMERICALS } from '../waveOptics/waveOpticsNumericals';
import { WAVE_OPTICS_VERIFIED_PYQS } from '../waveOptics/waveOpticsPyqs';
import { WAVE_OPTICS_TRAPS, WAVE_OPTICS_FORMULA_SHEET, WAVE_OPTICS_PRACTICE_QUESTIONS, WAVE_OPTICS_COMPARISON_TABLES } from '../waveOptics/waveOpticsTrapsAndFormulaSheet';

export const physYdseInterferenceDetails: DetailedTopicContent = {
  topicId: "phys-ydse-interference",
  topicName: "Interference of Light & Young's Double-Slit Experiment (YDSE)",
  subject: "Physics",
  class: "Class 12",
  classification: "Electromagnetic Waves & Optics",
  chapter: "Wave Optics",

  whatIsThisTopic: "Complete conceptual study of the Superposition Principle, Coherence, Constructive and Destructive Interference, Young's Double-Slit Experiment (YDSE), fringe width derivation (β = λD/d), intensity distributions, medium immersion, and white light interference.",

  basicIdea: [
    "Interference is the non-uniform redistribution of light energy caused by the superposition of two or more coherent waves. Energy is strictly conserved (I_avg = 2I₀).",
    "Coherence condition: Two light sources must have identical frequency and maintain a constant, time-independent phase difference. Two independent sources can NEVER be coherent.",
    "In YDSE, path difference at distance y on screen is Δ = yd / D. Bright fringes occur at Δ = nλ, and dark fringes occur at Δ = (2n - 1)λ/2.",
    "Fringe width β = λD / d is identical for all bright and dark fringes. In a liquid medium of index μ, the fringe width compresses to β' = β / μ."
  ],

  importantTerms: WAVE_OPTICS_TERMS.slice(3, 8),

  conceptExplanation: [
    WAVE_OPTICS_CONCEPT_SECTIONS[2],
    WAVE_OPTICS_CONCEPT_SECTIONS[3],
    {
      heading: "3. Special Effects in YDSE: Medium Immersion, White Light & Fringe Shift",
      paragraphs: [
        "1. Immersion in a Liquid Medium: When the entire YDSE apparatus is immersed in a liquid of refractive index μ, the frequency f of light remains unchanged, but wave speed decreases to v = c/μ and wavelength shortens to λ' = λ/μ. Consequently, the fringe width contracts: β_med = β_air / μ.",
        "2. Interference with White Light: At the geometric center of the screen (y = 0), the path difference Δ = 0 for all wavelengths in white light. All colors interfere constructively in phase, producing a bright WHITE central fringe. On either side, the nearest colored fringe is violet/red because violet (shortest λ ~ 400 nm) reaches its first minimum first. Far from the center, overlapping of many orders results in uniform white illumination.",
        "3. Insertion of a Thin Transparent Plate: If a thin transparent sheet (glass/mica) of thickness t and refractive index μ is placed in the path of one slit S₁, an extra optical path length (μ - 1)t is introduced. The entire fringe pattern shifts towards the covered slit by distance: y_shift = (μ - 1)t D / d = (μ - 1)t (β / λ). Notice that the fringe width β remains strictly UNCHANGED.",
        "4. Intensity Distribution across the Screen: The intensity varies cosinusoidally: I(y) = 4I₀ cos²(πyd / λD). Peak intensity is 4I₀, and minimum intensity is 0."
      ],
      visual: {
        type: 'svg',
        svgContent: WAVE_OPTICS_SVGS.fringePatternProfile,
        caption: "Figure: Idealised cosinusoidal intensity profile and fringe bands in Young's Double-Slit Experiment."
      },
      importantPoints: [
        "In medium μ: β_med = β_air / μ and θ_med = θ_air / μ.",
        "White light YDSE: Central fringe is WHITE, flanked by colored bands.",
        "Thin sheet of thickness t: Fringes shift by y = (μ - 1)t D / d; fringe width β is UNCHANGED.",
        "Average intensity = (I_max + I_min)/2 = 2I₀ (strictly conserving energy)."
      ],
      examples: [
        {
          problem: WAVE_OPTICS_NUMERICALS[1].problem,
          stepByStep: WAVE_OPTICS_NUMERICALS[1].calculation,
          solution: WAVE_OPTICS_NUMERICALS[1].calculation.join("\n"),
          answer: WAVE_OPTICS_NUMERICALS[1].finalAnswer
        },
        {
          problem: WAVE_OPTICS_NUMERICALS[2].problem,
          stepByStep: WAVE_OPTICS_NUMERICALS[2].calculation,
          solution: WAVE_OPTICS_NUMERICALS[2].calculation.join("\n"),
          answer: WAVE_OPTICS_NUMERICALS[2].finalAnswer
        },
        {
          problem: WAVE_OPTICS_NUMERICALS[3].problem,
          stepByStep: WAVE_OPTICS_NUMERICALS[3].calculation,
          solution: WAVE_OPTICS_NUMERICALS[3].calculation.join("\n"),
          answer: WAVE_OPTICS_NUMERICALS[3].finalAnswer
        },
        {
          problem: WAVE_OPTICS_NUMERICALS[5].problem,
          stepByStep: WAVE_OPTICS_NUMERICALS[5].calculation,
          solution: WAVE_OPTICS_NUMERICALS[5].calculation.join("\n"),
          answer: WAVE_OPTICS_NUMERICALS[5].finalAnswer
        }
      ]
    }
  ],

  formulae: [
    WAVE_OPTICS_FORMULA_SHEET[2],
    WAVE_OPTICS_FORMULA_SHEET[3],
    WAVE_OPTICS_FORMULA_SHEET[4],
    WAVE_OPTICS_FORMULA_SHEET[5],
    WAVE_OPTICS_FORMULA_SHEET[6],
    WAVE_OPTICS_FORMULA_SHEET[7],
    WAVE_OPTICS_FORMULA_SHEET[8],
    WAVE_OPTICS_FORMULA_SHEET[9],
    WAVE_OPTICS_FORMULA_SHEET[10]
  ],

  visualLearning: {
    type: 'svg',
    svgContent: WAVE_OPTICS_SVGS.ydseLayout,
    caption: "Young's Double-Slit Experiment geometry and ray paths (path difference Δ = d sin θ ≈ yd/D)."
  },

  neetImportantPoints: [
    "Path difference Δ = yd / D (for small angles y ≪ D).",
    "Bright fringes: y_n = nλD / d; Dark fringes: y_n' = (2n - 1)λD / 2d.",
    "Fringe width β = λD / d; Angular fringe width θ = λ / d (independent of D!).",
    "Equal sources: I = 4I₀ cos²(φ/2); I_max = 4I₀; I_min = 0.",
    "Unequal sources: I_max/I_min = ((√I₁ + √I₂)/(√I₁ - √I₂))² = ((A₁ + A₂)/(A₁ - A₂))²."
  ],

  commonConfusions: WAVE_OPTICS_TRAPS.slice(2, 11),

  practiceQuestions: WAVE_OPTICS_PRACTICE_QUESTIONS.slice(2, 11),

  quickRevision: [
    "Coherent sources have equal frequency and constant phase difference.",
    "Superposition: I = I₁ + I₂ + 2√(I₁I₂) cos φ; for equal sources I = 4I₀ cos²(φ/2).",
    "YDSE path difference: Δ = yd/D. Bright: Δ = nλ; Dark: Δ = (2n-1)λ/2.",
    "Fringe width β = λD/d. In water: β' = β / (4/3) = 0.75 β.",
    "White light gives central white fringe; thin plate shifts pattern by (μ - 1)t D / d without changing β."
  ],

  pyqs: WAVE_OPTICS_VERIFIED_PYQS.filter(q => q.id.includes("2023") || q.id.includes("2022") || q.id.includes("2020") || q.id.includes("2018") || q.id.includes("2016") || q.id.includes("2015") || q.id.includes("2011"))
};
