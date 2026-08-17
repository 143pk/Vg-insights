import { DetailedTopicContent } from '../../types/neet';
import { SOLUTIONS_SVGS } from '../solutions/solutionsDiagrams';
import { SOLUTIONS_IMPORTANT_TERMS, SOLUTIONS_COMPARISON_TABLES, SOLUTIONS_CONCEPTUAL_QAS, SOLUTIONS_RAPID_REVISION_POINTS } from '../solutions/solutionsTermsAndConcepts';
import { SOLUTIONS_NUMERICALS } from '../solutions/solutionsNumericals';
import { SOLUTIONS_VERIFIED_PYQS } from '../solutions/solutionsPyqs';
import { SOLUTIONS_NEET_TRAPS, SOLUTIONS_MASTER_FORMULAE, SOLUTIONS_SELF_TEST_MCQS } from '../solutions/solutionsTrapsAndFormulaSheet';

export const chemHenrysRaoultsLawDetails: DetailedTopicContent = {
  topicId: "chem-henrys-raoults-law",
  topicName: "Vapour Pressure of Solutions & Raoult's Law (Methods of Expressing Concentration)",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Physical Chemistry (Class 12)",
  chapter: "Solutions",

  whatIsThisTopic: "Comprehensive coverage of methods of expressing concentration (molality, molarity, mole fraction, mass %, volume %), vapour pressure of pure liquids vs solutions, and Raoult's law for volatile liquid mixtures and non-volatile solutes.",

  basicIdea: [
    "A solution is a homogeneous single-phase binary mixture where solute particles are uniformly dispersed at the molecular scale (< 1 nm).",
    "Concentration expresses the relative amount of solute in a given quantity of solution or solvent.",
    "Molality (m), Mass Percentage (% w/w), and Mole Fraction (x) are completely INDEPENDENT of temperature because they depend strictly on mass.",
    "Molarity (M) and Volume Percentage (% v/v) are DEPENDENT on temperature because liquid volume expands with increasing temperature (causing Molarity to decrease).",
    "Vapour pressure is the equilibrium pressure exerted by gaseous vapour above its liquid in a closed vessel at constant temperature.",
    "Dissolution of a non-volatile solute lowers the solvent's vapour pressure because solute particles occupy surface sites, reducing the evaporation rate.",
    "Raoult's Law for volatile binary liquids: p_A = x_A · p_A° and p_B = x_B · p_B°. Total pressure p_total = p_A + p_B = p_A° + x_B(p_B° - p_A°).",
    "Dalton's Law gives vapour phase composition: y_A = p_A / p_total, where the vapour is always enriched in the more volatile component."
  ],

  importantTerms: SOLUTIONS_IMPORTANT_TERMS.slice(0, 10),

  conceptExplanation: [
    {
      heading: "1. Solutions & Concentration Expressing Methods (NMC Official Master Checklist)",
      paragraphs: [
        "A binary solution consists of two components: the SOLVENT (present in larger amount, determines the physical state) and the SOLUTE (dissolved in the solvent). In aqueous systems, water is universally designated as the solvent.",
        "Under the official NEET UG 2026 NMC syllabus, mastery of the 5 quantitative concentration terms is essential:",
        "1. Mass Percentage (% w/w): Grams of solute per 100 g of solution. % w/w = [w₂ / (w₁ + w₂)] × 100. Temperature independent.",
        "2. Volume Percentage (% v/v): Volume of liquid solute per 100 mL of solution. % v/v = (V₂ / V_total) × 100. Temperature dependent.",
        "3. Molarity (M): Moles of solute dissolved in 1 Litre (1000 mL) of total solution. M = (w₂ × 1000) / (M₂ × V_mL). Unit: mol L⁻¹. Decreases as temperature rises.",
        "4. Molality (m): Moles of solute dissolved in 1 Kilogram (1000 g) of PURE SOLVENT. m = (w₂ × 1000) / (M₂ × w₁_g). Unit: mol kg⁻¹. Temperature invariant.",
        "5. Mole Fraction (x): Ratio of moles of a component to total moles. x_A = n_A / (n_A + n_B), with x_A + x_B = 1.0. Dimensionless and temperature invariant."
      ],
      visual: {
        type: 'svg',
        svgContent: SOLUTIONS_SVGS.solutionConcept,
        caption: "Homogeneous binary solution formation: Solute particles (< 1 nm) uniformly dispersed in solvent medium.",
        guide: "Observe the single thermodynamic phase and random uniform distribution of solute and solvent molecules."
      },
      importantPoints: [
        "Molarity decreases with increasing temperature because volume expands (V ∝ T).",
        "Molality, mass percentage, and mole fraction do not change with temperature because mass is invariant.",
        "In dilute aqueous solutions at ~4°C (density ≈ 1.0 g/mL), 1 L solution ≈ 1 kg solvent, so M ≈ m. In non-aqueous or dense concentrated solutions, M and m diverge significantly!"
      ]
    },
    {
      heading: "2. Vapour Pressure of Pure Liquids vs Solutions with Non-Volatile Solute",
      paragraphs: [
        "Vapour pressure is an intensive thermodynamic property defined as the pressure exerted by vapour molecules in dynamic equilibrium with the liquid phase in a closed container at a given constant temperature.",
        "In pure solvent, 100% of the surface area is available for volatile solvent molecules to evaporate. When a non-volatile solute (e.g. glucose, urea, cane sugar, NaCl) is dissolved, non-volatile solute particles occupy a fraction of the surface area.",
        "Because fewer volatile solvent molecules reside at the liquid-gas interface per unit area, the rate of evaporation decreases while the condensation rate adjusts, reaching equilibrium at a LOWER vapour pressure (p₁ < p₁°)."
      ],
      visual: {
        type: 'svg',
        svgContent: SOLUTIONS_SVGS.pureVsSolutionVapourPressure,
        caption: "Surface blockage mechanism: Non-volatile solute particles reduce the rate of solvent evaporation, causing Vapour Pressure Lowering.",
        guide: "Compare the density of vapour molecules in the headspace: pure solvent has a high vapor density; solution has a reduced vapor density."
      },
      importantPoints: [
        "Vapour pressure depends ONLY on temperature and intermolecular forces of the liquid. It is independent of container shape, surface area, or volume of liquid.",
        "Lowering of vapour pressure Δp = p₁° - p₁.",
        "Relative Lowering of Vapour Pressure (RLVP) = (p₁° - p₁) / p₁° = x₂ (mole fraction of solute)."
      ]
    },
    {
      heading: "3. Raoult's Law for Binary Volatile Liquid Mixtures & Dalton's Vapour Phase Composition",
      paragraphs: [
        "For a solution of two volatile miscible liquids (A and B):",
        "Raoult's Law states that the partial vapour pressure of each component at a given temperature is equal to the product of its mole fraction in the liquid phase and the vapour pressure of the pure component:",
        "p_A = x_A · p_A°  and  p_B = x_B · p_B°",
        "According to Dalton's law of partial pressures, the total vapour pressure exerted by the mixture in the vapor phase is the sum of the partial pressures:",
        "p_total = p_A + p_B = x_A p_A° + x_B p_B° = (1 - x_B) p_A° + x_B p_B° = p_A° + x_B (p_B° - p_A°)",
        "The composition of the vapour phase in equilibrium with the liquid is calculated using Dalton's law:",
        "y_A = p_A / p_total = (x_A p_A°) / p_total  and  y_B = p_B / p_total = (x_B p_B°) / p_total",
        "Konovalov's Rule: The vapour phase is ALWAYS enriched in the more volatile component (the component with the higher pure vapour pressure p°)."
      ],
      visual: {
        type: 'svg',
        svgContent: SOLUTIONS_SVGS.raoultsLawBinary,
        caption: "Raoult's Law binary volatile mixture mechanics: Additivity of partial pressures in ideal binary mixtures.",
        guide: "Observe the linear dependency of partial pressures on liquid mole fractions x_A and x_B."
      },
      importantPoints: [
        "If p_A° > p_B°, component A is more volatile. Consequently, y_A > x_A and y_B < x_B.",
        "Total vapour pressure p_total varies linearly with the mole fraction of either component in the liquid phase.",
        "Raoult's law is a special case of Henry's law where K_H = p_A°."
      ]
    }
  ],

  formulae: SOLUTIONS_MASTER_FORMULAE.slice(0, 9),

  neetMarksPotential: {
    topicName: "Vapour Pressure & Raoult's Law",
    confidenceLabel: 'HIGH',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 13,
    totalDirectPyqs: 18,
    totalHistoricalMarks: 72,
    weightagePercentage: 4.5,
    expectedQuestionsCount: 1,
    highYieldStatus: true,
    scoreWeightage: "4 - 8 Marks (1-2 Questions guaranteed)",
    difficultyRating: "Moderate to High (Heavy Numerical Weightage)",
    trendAnalysis: "NEET consistently tests concentration conversions using density [M = (% × d × 10) / M₂] and vapour phase mole fraction calculations (y_A = p_A / p_total)."
  },

  neetImportantPoints: SOLUTIONS_RAPID_REVISION_POINTS.slice(0, 10),

  commonConfusions: SOLUTIONS_NEET_TRAPS.slice(0, 12).map(t => ({
    commonConfusion: t.studentMistake,
    correctFact: t.actualFact,
    whyItMattersForNEET: `${t.trapTitle}: ${t.neetRule}`
  })),

  quickRevision: SOLUTIONS_RAPID_REVISION_POINTS.slice(0, 10),

  practiceQuestions: SOLUTIONS_SELF_TEST_MCQS.slice(0, 8).map(q => ({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation
  })),

  pyqs: SOLUTIONS_VERIFIED_PYQS.slice(0, 4)
};
