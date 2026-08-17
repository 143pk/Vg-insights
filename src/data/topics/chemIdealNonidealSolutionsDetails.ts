import { DetailedTopicContent } from '../../types/neet';
import { SOLUTIONS_SVGS } from '../solutions/solutionsDiagrams';
import { SOLUTIONS_IMPORTANT_TERMS, SOLUTIONS_COMPARISON_TABLES, SOLUTIONS_CONCEPTUAL_QAS, SOLUTIONS_RAPID_REVISION_POINTS } from '../solutions/solutionsTermsAndConcepts';
import { SOLUTIONS_NUMERICALS } from '../solutions/solutionsNumericals';
import { SOLUTIONS_VERIFIED_PYQS } from '../solutions/solutionsPyqs';
import { SOLUTIONS_NEET_TRAPS, SOLUTIONS_MASTER_FORMULAE, SOLUTIONS_SELF_TEST_MCQS } from '../solutions/solutionsTrapsAndFormulaSheet';

export const chemIdealNonidealSolutionsDetails: DetailedTopicContent = {
  topicId: "chem-ideal-nonideal-solutions",
  topicName: "Ideal & Non-Ideal Solutions, V-P Composition Plots & Azeotropes",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Physical Chemistry (Class 12)",
  chapter: "Solutions",

  whatIsThisTopic: "Detailed classification of binary liquid mixtures into ideal and non-ideal solutions, molecular interaction analysis, positive and negative deviations from Raoult's law, vapour pressure-composition graphs, and minimum/maximum boiling azeotropes.",

  basicIdea: [
    "Ideal solutions obey Raoult's law over the entire range of concentration and temperature.",
    "For an ideal solution, intermolecular attractions between solute-solvent (A-B) are identical in magnitude to solvent-solvent (A-A) and solute-solute (B-B) attractions.",
    "Thermodynamics of Ideal Solutions: ΔH_mix = 0, ΔV_mix = 0, ΔS_mix > 0, ΔG_mix < 0.",
    "Non-ideal solutions show either positive or negative deviation from Raoult's law due to unequal molecular interaction forces.",
    "Positive Deviation: A-B attractive forces are WEAKER than A-A and B-B. Molecules escape more readily → higher vapour pressure, lower boiling point, ΔH_mix > 0 (endothermic), ΔV_mix > 0 (expansion). Forms Minimum Boiling Azeotropes.",
    "Negative Deviation: A-B attractive forces are STRONGER than A-A and B-B (e.g. new H-bonds formed). Molecules escape less readily → lower vapour pressure, higher boiling point, ΔH_mix < 0 (exothermic), ΔV_mix < 0 (contraction). Forms Maximum Boiling Azeotropes.",
    "Azeotropes are constant-boiling binary mixtures where the liquid and vapour have identical compositions (x = y) and boil at a fixed temperature without separation by fractional distillation."
  ],

  importantTerms: SOLUTIONS_IMPORTANT_TERMS.slice(9, 15),

  conceptExplanation: [
    {
      heading: "1. Ideal Solutions: Criteria, Molecular Forces & V-P Composition Plot",
      paragraphs: [
        "An ideal solution is defined as a solution in which every component obeys Raoult's Law over the entire range of concentration and temperature.",
        "Molecular Criteria: In an ideal binary mixture of liquids A and B, the intermolecular attractive forces between A-A, B-B, and A-B molecules are of nearly identical magnitude and type (F_A-B ≈ F_A-A ≈ F_B-B). Neither bond formation nor bond breaking requires a net enthalpy change.",
        "Thermodynamic Characteristics of Ideal Solutions:",
        "• ΔH_mix = 0 (No heat is absorbed or evolved on mixing pure components)",
        "• ΔV_mix = 0 (Total volume of solution is exactly equal to the sum of individual volumes: V_total = V_A + V_B)",
        "• ΔS_mix > 0 (Entropy increases spontaneously due to increased molecular randomness)",
        "• ΔG_mix < 0 (Free energy decrease drives spontaneous dissolution)",
        "Classic NCERT Examples: 1. Benzene + Toluene, 2. n-Hexane + n-Heptane, 3. Bromoethane + Chloroethane, 4. Chlorobenzene + Bromobenzene, 5. Carbon tetrachloride + Silicon tetrachloride."
      ],
      visual: {
        type: 'svg',
        svgContent: SOLUTIONS_SVGS.idealVpGraph,
        caption: "Ideal solution Vapour Pressure vs Composition Plot: Straight lines for partial pressures p₁ and p₂ and total pressure p_total.",
        guide: "Observe the linear progression of p_total from p₂° at x₁=0 to p₁° at x₁=1."
      },
      importantPoints: [
        "Ideal solutions NEVER form azeotropes; they can be completely separated into pure components by fractional distillation.",
        "Even in ideal solutions, ΔS_mix is ALWAYS POSITIVE (never zero!) because mixing increases system disorder."
      ]
    },
    {
      heading: "2. Positive Deviation from Raoult's Law & Minimum Boiling Azeotropes",
      paragraphs: [
        "In non-ideal solutions showing POSITIVE deviation, the intermolecular attractive forces between unlike molecules (A-B) are WEAKER than the attractive forces between like molecules (A-A or B-B).",
        "Because A-B interactions are weak, solute and solvent molecules can escape into the vapour phase more readily than from their pure states. Consequently:",
        "• Partial vapour pressures and total vapour pressure are HIGHER than predicted by Raoult's Law: p_A > x_A p_A°, p_B > x_B p_B°, and p_total > (x_A p_A° + x_B p_B°).",
        "• Enthalpy of mixing is POSITIVE (ΔH_mix > 0): Energy must be supplied to break stronger A-A or B-B bonds (endothermic process, solution becomes cooler).",
        "• Volume change of mixing is POSITIVE (ΔV_mix > 0): Weaker A-B attractions allow molecules to sit further apart, causing volume expansion (V_obs > V_A + V_B).",
        "Minimum Boiling Azeotrope: The large upward curve in vapour pressure creates a MAXIMUM vapour pressure point at an intermediate composition. At this exact composition, the mixture exhibits the MINIMUM boiling point. It distills over at constant temperature without changing composition.",
        "NCERT Positive Deviation Examples: 1. Ethanol + Water (forms min-boiling azeotrope at 95.4% ethanol by volume), 2. Acetone + Carbon Disulphide (CS₂), 3. Acetone + Ethanol, 4. Carbon tetrachloride + Benzene, 5. Cyclohexane + Ethanol."
      ],
      visual: {
        type: 'svg',
        svgContent: SOLUTIONS_SVGS.positiveDeviationGraph,
        caption: "Positive Deviation Plot: Upward bowing vapour pressure curves showing total pressure maximum (Minimum Boiling Azeotrope).",
        guide: "Note how the solid curves bow above the dashed ideal lines, reaching a peak maximum."
      },
      importantPoints: [
        "Positive Deviation: F_A-B < F_A-A/B-B → High Vapour Pressure → LOW Boiling Point (Minimum Boiling Azeotrope).",
        "Ethanol molecules have strong H-bonds. Adding acetone or CS₂ enters between ethanol molecules, breaking existing H-bonds and increasing escaping tendency."
      ]
    },
    {
      heading: "3. Negative Deviation from Raoult's Law & Maximum Boiling Azeotropes",
      paragraphs: [
        "In non-ideal solutions showing NEGATIVE deviation, the intermolecular attractive forces between unlike molecules (A-B) are STRONGER than the attractive forces between like molecules (A-A or B-B).",
        "Stronger A-B attractions hold the molecules tightly together in the liquid phase, reducing their escaping tendency. Consequently:",
        "• Partial vapour pressures and total vapour pressure are LOWER than predicted by Raoult's Law: p_A < x_A p_A°, p_B < x_B p_B°, and p_total < (x_A p_A° + x_B p_B°).",
        "• Enthalpy of mixing is NEGATIVE (ΔH_mix < 0): Formation of stronger new intermolecular bonds (such as H-bonding or dipole-dipole) releases energy (exothermic process, solution warms up).",
        "• Volume change of mixing is NEGATIVE (ΔV_mix < 0): Stronger attractions pull molecules closer together, causing volume contraction (V_obs < V_A + V_B).",
        "Maximum Boiling Azeotrope: The downward dip in vapour pressure creates a MINIMUM vapour pressure point at an intermediate composition. At this exact composition, the mixture exhibits the MAXIMUM boiling point.",
        "NCERT Negative Deviation Examples: 1. Acetone + Chloroform (forms new H-bond: (CH₃)₂C=O ··· H-CCl₃), 2. Nitric acid + Water (68% HNO₃ + 32% H₂O by mass, b.p. 393.5 K), 3. Hydrochloric acid + Water (20.2% HCl + 79.8% H₂O by mass, b.p. 381.6 K), 4. Phenol + Aniline, 5. Chloroform + Diethyl ether."
      ],
      visual: {
        type: 'svg',
        svgContent: SOLUTIONS_SVGS.negativeDeviationGraph,
        caption: "Negative Deviation Plot: Downward bowing vapour pressure curves showing total pressure minimum (Maximum Boiling Azeotrope).",
        guide: "Observe the dip below the ideal dotted lines, demonstrating reduced escaping tendency."
      },
      importantPoints: [
        "Negative Deviation: F_A-B > F_A-A/B-B → Lower Vapour Pressure → HIGH Boiling Point (Maximum Boiling Azeotrope).",
        "Commercial concentrated nitric acid (68% HNO₃) cannot be concentrated further by simple distillation because it forms a maximum boiling azeotrope."
      ]
    }
  ],

  formulae: [
    SOLUTIONS_MASTER_FORMULAE[7],
    SOLUTIONS_MASTER_FORMULAE[8],
    {
      title: "Thermodynamics of Non-Ideal Mixing",
      formula: "\\Delta H_\\text{mix} \\neq 0, \\quad \\Delta V_\\text{mix} \\neq 0, \\quad \\Delta S_\\text{mix} > 0, \\quad \\Delta G_\\text{mix} < 0",
      meaning: "Mixing is always spontaneous (ΔG < 0, ΔS > 0), but enthalpy and volume changes depend on relative A-B vs A-A/B-B interaction strengths.",
      unit: "\\text{kJ mol}^{-1} \\text{ and } \\text{cm}^3",
      conditions: "Applies to all non-ideal liquid mixtures."
    }
  ],

  neetMarksPotential: {
    topicName: "Ideal & Non-Ideal Solutions and Azeotropes",
    confidenceLabel: 'HIGH',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 12,
    totalDirectPyqs: 16,
    totalHistoricalMarks: 64,
    weightagePercentage: 4.0,
    expectedQuestionsCount: 1,
    highYieldStatus: true,
    scoreWeightage: "4 Marks (Assertion-Reason or Match-the-Pair guarantee)",
    difficultyRating: "Moderate (Conceptual Precision Required)",
    trendAnalysis: "NEET focuses heavily on identifying deviation types from given pairs (e.g. Acetone+Chloroform vs Acetone+CS₂) and thermodynamic signs (ΔH_mix, ΔV_mix, ΔS_mix)."
  },

  neetImportantPoints: [
    "Ideal solutions: ΔH_mix = 0, ΔV_mix = 0, ΔS_mix > 0, ΔG_mix < 0. No azeotropes.",
    "Positive deviation: F_A-B < F_A-A/B-B; ΔH > 0 (endothermic); ΔV > 0 (expansion); Forms Minimum Boiling Azeotrope.",
    "Negative deviation: F_A-B > F_A-A/B-B; ΔH < 0 (exothermic); ΔV < 0 (contraction); Forms Maximum Boiling Azeotrope.",
    "Acetone + Chloroform = Negative Deviation due to new H-bonding [(CH₃)₂C=O ··· H-CCl₃].",
    "Ethanol + Water (95.4% v/v) = Minimum Boiling Azeotrope (Positive deviation).",
    "68% HNO₃ + 32% H₂O (by mass) = Maximum Boiling Azeotrope (Negative deviation).",
    "Azeotropic mixtures boil at constant temperature without change in liquid or vapour composition (x_A = y_A).",
    "Azeotropes cannot be separated by fractional distillation."
  ],

  commonConfusions: SOLUTIONS_NEET_TRAPS.slice(10, 20).map(t => ({
    commonConfusion: t.studentMistake,
    correctFact: t.actualFact,
    whyItMattersForNEET: `${t.trapTitle}: ${t.neetRule}`
  })),

  quickRevision: [
    "Ideal: F_A-B = F_A-A = F_B-B | ΔH=0, ΔV=0, ΔS>0 | Benzene+Toluene, n-Hexane+n-Heptane.",
    "Positive Dev: F_A-B < F_A-A | ΔH>0, ΔV>0, High VP, Low BP | Min Boiling Azeotrope (95.4% Ethanol).",
    "Negative Dev: F_A-B > F_A-A | ΔH<0, ΔV<0, Low VP, High BP | Max Boiling Azeotrope (68% HNO₃, Acetone+Chloroform).",
    "Azeotropes: Constant boiling mixtures, x_liquid = y_vapour, cannot be separated by fractional distillation."
  ],

  practiceQuestions: SOLUTIONS_SELF_TEST_MCQS.slice(2, 6).map(q => ({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation
  })),

  pyqs: [SOLUTIONS_VERIFIED_PYQS[1], SOLUTIONS_VERIFIED_PYQS[3], SOLUTIONS_VERIFIED_PYQS[4]]
};
