import { DetailedTopicContent } from '../../types/neet';
import { SOLUTIONS_SVGS } from '../solutions/solutionsDiagrams';
import { SOLUTIONS_IMPORTANT_TERMS, SOLUTIONS_COMPARISON_TABLES, SOLUTIONS_CONCEPTUAL_QAS, SOLUTIONS_RAPID_REVISION_POINTS } from '../solutions/solutionsTermsAndConcepts';
import { SOLUTIONS_NUMERICALS } from '../solutions/solutionsNumericals';
import { SOLUTIONS_VERIFIED_PYQS } from '../solutions/solutionsPyqs';
import { SOLUTIONS_NEET_TRAPS, SOLUTIONS_MASTER_FORMULAE, SOLUTIONS_SELF_TEST_MCQS } from '../solutions/solutionsTrapsAndFormulaSheet';

export const chemColligativePropertiesDetails: DetailedTopicContent = {
  topicId: "chem-colligative-properties",
  topicName: "Colligative Properties: RLVP, Boiling Point Elevation, Freezing Point Depression & Osmotic Pressure",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Physical Chemistry (Class 12)",
  chapter: "Solutions",

  whatIsThisTopic: "Comprehensive pedagogical coverage of all 4 colligative properties of dilute solutions (RLVP, boiling point elevation, freezing point depression, osmotic pressure), determination of molecular mass, reverse osmosis desalination, and biological osmosis phenomena.",

  basicIdea: [
    "Colligative properties depend SOLELY on the total number (concentration) of solute particles present in solution, and NOT on their chemical identity or nature.",
    "The 4 official colligative properties are: 1. Relative Lowering of Vapour Pressure, 2. Elevation of Boiling Point, 3. Depression of Freezing Point, 4. Osmotic Pressure.",
    "Relative Lowering of Vapour Pressure: (p₁° - p₁) / p₁° = x₂ ≈ (w₂ M₁) / (M₂ w₁) for dilute solutions.",
    "Elevation of Boiling Point: ΔT_b = T_b - T_b° = K_b · m. The ebullioscopic constant K_b depends only on the solvent (for water, K_b = 0.52 K kg mol⁻¹).",
    "Depression of Freezing Point: ΔT_f = T_f° - T_f = K_f · m. The cryoscopic constant K_f depends only on the solvent (for water, K_f = 1.86 K kg mol⁻¹).",
    "Osmotic Pressure: π = C R T = (w₂ R T) / (M₂ V). It is the excess hydrostatic pressure required to prevent inward osmosis of pure solvent across an SPM.",
    "Osmotic pressure is the golden standard for determining the molar mass of biomolecules (proteins, DNA) and synthetic polymers because it is measured at room temperature and produces large, readable values even at tiny molar concentrations.",
    "Reverse Osmosis (RO) occurs when applied pressure exceeds osmotic pressure (P > π), forcing pure water out of seawater through a cellulose acetate membrane.",
    "0.9% (m/V) NaCl solution (normal saline) is isotonic with RBCs. Hypotonic solutions cause endosmosis & haemolysis (bursting); hypertonic solutions cause exosmosis & plasmolysis (shrinking)."
  ],

  importantTerms: SOLUTIONS_IMPORTANT_TERMS.slice(9, 21),

  conceptExplanation: [
    {
      heading: "1. Elevation of Boiling Point (ΔTb) & Ebullioscopic Constant (Kb)",
      paragraphs: [
        "The boiling point of a liquid is the temperature at which its equilibrium vapour pressure equals atmospheric pressure (1 atm or 1.013 bar).",
        "Because a non-volatile solute lowers the vapour pressure of the solvent, the solution's vapour pressure curve is shifted below that of the pure solvent. Consequently, the solution must be heated to a HIGHER temperature to reach 1 atm pressure.",
        "Boiling Point Elevation: ΔT_b = T_b - T_b° = K_b · m = (K_b · w₂ · 1000) / (M₂ · w₁).",
        "Where T_b is the boiling point of the solution, T_b° is the boiling point of pure solvent, and w₁ is in grams.",
        "Thermodynamic Definition of K_b (Molal Elevation Constant): K_b = (R · M₁ · T_b°²) / (1000 · Δ_vap H).",
        "K_b represents the elevation in boiling point for a 1 molal solution. It depends ONLY on the solvent (K_b for water = 0.52 K kg mol⁻¹; for benzene = 2.53 K kg mol⁻¹)."
      ],
      visual: {
        type: 'svg',
        svgContent: SOLUTIONS_SVGS.boilingPointElevation,
        caption: "Boiling Point Elevation P-T curve: Non-volatile solute shifts vapour pressure curve right, raising boiling point to T_b.",
        guide: "Observe the intersection of the pure solvent curve (T_b°) and solution curve (T_b) with the horizontal 1 atm isobar line."
      },
      importantPoints: [
        "ΔT_b in °C is numerically IDENTICAL to ΔT_b in Kelvin! (ΔT(K) = ΔT(°C)). Never add 273 to a temperature difference.",
        "T_b(solution) = T_b° + ΔT_b (Boiling point is elevated above 100°C for aqueous solutions)."
      ]
    },
    {
      heading: "2. Depression of Freezing Point (ΔTf) & Cryoscopic Constant (Kf)",
      paragraphs: [
        "The freezing point of a substance is the temperature at which the vapour pressure of the liquid phase equals the vapour pressure of its solid phase.",
        "Dissolving a non-volatile solute lowers the vapour pressure of the liquid solvent. Therefore, the liquid solution curve intersects the steep sublimation curve of the frozen solid solvent at a LOWER temperature.",
        "Freezing Point Depression: ΔT_f = T_f° - T_f = K_f · m = (K_f · w₂ · 1000) / (M₂ · w₁).",
        "Where T_f° is the freezing point of pure solvent (0.00°C for water), T_f is the solution freezing point, and w₁ is in grams.",
        "Thermodynamic Formula for K_f: K_f = (R · M₁ · T_f°²) / (1000 · Δ_fus H). For water, K_f = 1.86 K kg mol⁻¹ (3.58× larger than K_b).",
        "Practical Applications: 1. Ethylene glycol antifreeze in automobile radiators prevents coolant freezing in sub-zero winters. 2. Common salt (NaCl) or CaCl₂ is spread over snow-covered roads to depress the freezing point and melt ice into brine."
      ],
      visual: {
        type: 'svg',
        svgContent: SOLUTIONS_SVGS.freezingPointDepression,
        caption: "Freezing Point Depression P-T curve: Solution curve intersects solid solvent sublimation curve at lower temperature T_f.",
        guide: "Follow the intersection of the liquid solution curve with the steep solid solvent sublimation curve."
      },
      importantPoints: [
        "Solution freezing point: T_f = T_f° - ΔT_f = 0.00°C - ΔT_f (always negative in Celsius for aqueous solutions).",
        "Because K_f(H₂O) = 1.86 is much larger than K_b(H₂O) = 0.52, freezing point depression provides much more sensitive and accurate molar mass measurements than boiling point elevation."
      ]
    },
    {
      heading: "3. Osmosis, Osmotic Pressure (π), Reverse Osmosis & Biological Applications",
      paragraphs: [
        "Osmosis is the spontaneous net flow of pure solvent molecules into a solution (or from dilute to concentrated solution) through a semipermeable membrane (SPM).",
        "Osmotic Pressure (π): The excess hydrostatic pressure that must be applied to the solution side to completely stop the inward flow of solvent across the SPM.",
        "van't Hoff Equation for Osmotic Pressure: π = C R T = (n₂ / V) R T = (w₂ R T) / (M₂ V).",
        "Why Osmotic Pressure is the Preferred Method for Biomolecules & Polymers:",
        "1. Measured at ambient room temperature (avoiding high temperatures that denature proteins or decompose fragile biomolecules).",
        "2. Uses Molarity (readily prepared at room temperature) rather than molality.",
        "3. Produces high-magnitude readable pressure signals (several mm of liquid column) even for millimolar concentrations of huge macromolecules (M > 10,000 g/mol).",
        "Reverse Osmosis (RO): When applied pressure exceeds osmotic pressure (P > π), the flow is reversed—pure solvent is forced from the concentrated solution through the SPM into the pure solvent side. Commercial desalination plants use synthetic cellulose acetate membranes to extract fresh drinking water from seawater.",
        "Biological Osmotic Phenomena:",
        "• Isotonic Solutions: Equal osmotic pressures (π₁ = π₂ ⟹ C₁ = C₂). 0.9% (m/V) NaCl is isotonic with human blood plasma.",
        "• Hypotonic (< 0.9% NaCl): Water enters RBCs by endosmosis → RBCs swell and burst (haemolysis).",
        "• Hypertonic (> 0.9% NaCl): Water leaves RBCs by exosmosis → RBCs shrink and shrivel (crenation/plasmolysis).",
        "• Food Preservation: High salt in pickles and high sugar in jams kills bacteria by hypertonic plasmolytic dehydration.",
        "• Edema: High dietary salt intake causes hypertonic tissue fluid, drawing water into tissues and causing puffiness/swelling."
      ],
      visual: {
        type: 'svg',
        svgContent: SOLUTIONS_SVGS.osmosisApparatus,
        caption: "Osmosis & U-tube apparatus: Hydrostatic pressure difference (h) developed across a semipermeable membrane.",
        guide: "Observe the net solvent flow across SPM from dilute pure solvent into the concentrated solution chamber."
      },
      importantPoints: [
        "Osmosis stops when applied pressure P = π. Reverse osmosis occurs when P > π.",
        "R = 0.0821 L atm K⁻¹ mol⁻¹ (or 0.083 L bar K⁻¹ mol⁻¹) must be used when volume is in Litres and π is in atm (or bar)."
      ]
    },
    {
      heading: "4. Determination of Molecular Mass from Colligative Properties (Master Summary)",
      paragraphs: [
        "Every colligative property can be rearranged to calculate the unknown molar mass (M₂) of a non-volatile non-electrolyte solute:",
        "1. From Relative Lowering of Vapour Pressure: M₂ = (w₂ · M₁ · p₁°) / (w₁ · [p₁° - p₁])",
        "2. From Elevation of Boiling Point: M₂ = (K_b · w₂ · 1000) / (ΔT_b · w₁)",
        "3. From Depression of Freezing Point: M₂ = (K_f · w₂ · 1000) / (ΔT_f · w₁)",
        "4. From Osmotic Pressure: M₂ = (w₂ · R · T) / (π · V)",
        "Units Check: w₁ and w₂ in grams; V in Litres; T in Kelvin; R = 0.0821 L atm K⁻¹ mol⁻¹.",
        "Prerequisite: These equations strictly assume ideal dilute behavior with NO association or dissociation (i = 1). If the solute ionizes or associates, the van't Hoff factor (i) must be introduced into every formula!"
      ],
      importantPoints: [
        "For non-electrolytes (glucose, urea, sucrose), M_calculated = M_normal.",
        "For electrolytes or associating molecules, colligative measurements yield 'Abnormal Molar Masses' unless corrected with van't Hoff factor i."
      ]
    }
  ],

  formulae: SOLUTIONS_MASTER_FORMULAE.slice(9, 14),

  neetMarksPotential: {
    topicName: "Colligative Properties & Molecular Mass Determination",
    confidenceLabel: 'HIGH',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 15,
    totalDirectPyqs: 24,
    totalHistoricalMarks: 96,
    weightagePercentage: 6.0,
    expectedQuestionsCount: 2,
    highYieldStatus: true,
    scoreWeightage: "8 Marks (Highest yield in Physical Chemistry)",
    difficultyRating: "High (Multi-step numerical and comparative ranking)",
    trendAnalysis: "Every single NEET paper contains at least 1-2 direct numericals calculating molar mass from ΔTb, ΔTf, or π, or ranking isotonic solutions."
  },

  neetImportantPoints: SOLUTIONS_RAPID_REVISION_POINTS.slice(13, 21),

  commonConfusions: SOLUTIONS_NEET_TRAPS.slice(20, 35).map(t => ({
    commonConfusion: t.studentMistake,
    correctFact: t.actualFact,
    whyItMattersForNEET: `${t.trapTitle}: ${t.neetRule}`
  })),

  quickRevision: [
    "RLVP: (p₁° - p₁) / p₁° = x₂ ≈ (w₂ M₁) / (M₂ w₁). True colligative property.",
    "Boiling Point Elevation: ΔT_b = K_b · m. Water K_b = 0.52 K kg mol⁻¹. T_b = 100 + ΔT_b.",
    "Freezing Point Depression: ΔT_f = K_f · m. Water K_f = 1.86 K kg mol⁻¹. T_f = 0 - ΔT_f.",
    "Osmotic Pressure: π = C R T = (w₂ R T) / (M₂ V). R = 0.0821 L atm K⁻¹ mol⁻¹. Best for biomolecules/polymers.",
    "Reverse Osmosis: P_applied > π. Uses cellulose acetate SPM for seawater desalination.",
    "Normal Saline = 0.9% (m/V) NaCl. Hypotonic (< 0.9%) → Haemolysis (swelling/bursting); Hypertonic (> 0.9%) → Plasmolysis (shrinkage)."
  ],

  practiceQuestions: SOLUTIONS_SELF_TEST_MCQS.slice(6, 15).map(q => ({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation
  })),

  pyqs: [SOLUTIONS_VERIFIED_PYQS[0], SOLUTIONS_VERIFIED_PYQS[7], SOLUTIONS_VERIFIED_PYQS[8], SOLUTIONS_VERIFIED_PYQS[9], SOLUTIONS_VERIFIED_PYQS[11]]
};
