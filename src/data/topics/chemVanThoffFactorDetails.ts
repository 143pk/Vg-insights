import { DetailedTopicContent } from '../../types/neet';
import { SOLUTIONS_SVGS } from '../solutions/solutionsDiagrams';
import { SOLUTIONS_IMPORTANT_TERMS, SOLUTIONS_COMPARISON_TABLES, SOLUTIONS_CONCEPTUAL_QAS, SOLUTIONS_RAPID_REVISION_POINTS } from '../solutions/solutionsTermsAndConcepts';
import { SOLUTIONS_NUMERICALS } from '../solutions/solutionsNumericals';
import { SOLUTIONS_VERIFIED_PYQS } from '../solutions/solutionsPyqs';
import { SOLUTIONS_NEET_TRAPS, SOLUTIONS_MASTER_FORMULAE, SOLUTIONS_SELF_TEST_MCQS } from '../solutions/solutionsTrapsAndFormulaSheet';

export const chemVanThoffFactorDetails: DetailedTopicContent = {
  topicId: "chem-van-thoff-factor",
  topicName: "Abnormal Molar Mass, van't Hoff Factor & Degree of Dissociation/Association",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Physical Chemistry (Class 12)",
  chapter: "Solutions",

  whatIsThisTopic: "Masterclass on abnormal molar masses, van't Hoff factor (i), modified colligative property equations, mathematical derivations of degree of dissociation (α) and degree of association, and equimolar colligative property rankings.",

  basicIdea: [
    "When a solute undergoes dissociation (splitting into ions) or association (clustering into dimers/polymers) in solution, the number of particles deviates from the theoretical expectation.",
    "Because colligative properties depend on the total count of solute particles, experimental colligative properties deviate from theoretical values, resulting in 'Abnormal Molar Masses'.",
    "van't Hoff Factor (i) is defined as: i = Observed Colligative Property / Calculated Colligative Property = Normal Molar Mass / Abnormal (Observed) Molar Mass = Total moles of particles after reaction / Initial moles of solute.",
    "For Dissociation (Electrolytes): Particle count increases → i > 1 → Observed CP > Theoretical CP → Experimental Molar Mass < Normal Molar Mass. Degree of dissociation α = (i - 1) / (n - 1).",
    "For Association (Carboxylic acids in benzene): Particle count decreases → i < 1 → Observed CP < Theoretical CP → Experimental Molar Mass > Normal Molar Mass. Degree of association α = (1 - i) / (1 - 1/n). For dimerization, α = 2(1 - i).",
    "For Non-Electrolytes (Glucose, Urea, Sucrose): i = 1.0 (No dissociation or association).",
    "Modified Colligative Equations: (p₁° - p₁)/p₁° = i·x₂, ΔT_b = i·K_b·m, ΔT_f = i·K_f·m, π = i·C·R·T."
  ],

  importantTerms: SOLUTIONS_IMPORTANT_TERMS.slice(20),

  conceptExplanation: [
    {
      heading: "1. Origin of Abnormal Molar Mass & van't Hoff Factor (i) Triple Definition",
      paragraphs: [
        "Colligative properties provide a direct physical method to determine solute molar mass: M₂ ∝ 1 / (Colligative Property).",
        "If a solute does not maintain its molecular integrity upon dissolution, the experimental molar mass determined experimentally deviates significantly from the true chemical formula mass. Such a mass is termed an ABNORMAL MOLAR MASS.",
        "In 1880, J.H. van't Hoff introduced the factor (i) to account for the extent of association or dissociation of solutes:",
        "Definition 1 (In terms of Colligative Properties):",
        "i = \\frac{\\text{Experimental (Observed) Colligative Property}}{\\text{Calculated (Theoretical) Colligative Property}}",
        "Definition 2 (In terms of Molar Masses):",
        "i = \\frac{\\text{Normal (Theoretical Formula) Molar Mass}}{\\text{Abnormal (Experimentally Determined) Molar Mass}} = \\frac{M_\\text{normal}}{M_\\text{obs}}",
        "Definition 3 (In terms of Particle Quantities):",
        "i = \\frac{\\text{Total number of moles of particles after dissociation/association}}{\\text{Number of moles of solute dissolved initially}}"
      ],
      visual: {
        type: 'svg',
        svgContent: SOLUTIONS_SVGS.dissociationDiagram,
        caption: "Dissociation of Ionic Electrolyte (NaCl in water): Particle count doubles (i = 2), doubling colligative properties and halving observed molar mass.",
        guide: "Observe the breakdown of formula units into hydrated cations and anions."
      },
      importantPoints: [
        "i > 1: Dissociation (salts, strong acids, bases in water). M_obs < M_normal.",
        "i < 1: Association (dimerization of carboxylic acids in benzene). M_obs > M_normal.",
        "i = 1: Ideal non-electrolytes (glucose, urea, sucrose). M_obs = M_normal."
      ]
    },
    {
      heading: "2. Quantitative Dissociation & Degree of Ionization (α)",
      paragraphs: [
        "Consider 1 mole of an electrolyte A_x B_y that dissociates into 'n' ions per formula unit:",
        "A_x B_y ⇌ x A^(y+) + y B^(x-), where total ions n = x + y.",
        "Let α be the degree of dissociation (fraction of electrolyte dissociated):",
        "• Initial moles at t = 0: Reactant = 1 mol, Ions = 0 mol.",
        "• At equilibrium: Undissociated reactant = (1 - α) mol; Ions produced = nα mol.",
        "• Total moles of all particles at equilibrium = (1 - α) + nα = 1 + α(n - 1).",
        "Therefore, the van't Hoff factor is: i = [1 + α(n - 1)] / 1 = 1 + (n - 1)α.",
        "Rearranging for Degree of Dissociation (α):",
        "\\alpha = \\frac{i - 1}{n - 1}",
        "Master Ion-Count (n) Reference Table for 100% Dissociation (α = 1, i = n):",
        "• Binary Electrolytes (n = 2, i = 2): NaCl, KCl, MgSO₄, KNO₃, HCl.",
        "• Ternary Electrolytes (n = 3, i = 3): CaCl₂, BaCl₂, Na₂SO₄, K₂CO₃, Mg(NO₃)₂.",
        "• Quaternary Electrolytes (n = 4, i = 4): FeCl₃, AlCl₃, [Co(NH₃)₆]Cl₃.",
        "• Pentanary Electrolytes (n = 5, i = 5): Al₂(SO₄)₃, K₄[Fe(CN)₆]."
      ],
      importantPoints: [
        "In complex coordination compounds, only species outside the coordination sphere ([...]) ionize: [Co(NH₃)₅Cl]Cl₂ gives 1 complex cation + 2 Cl⁻ = 3 ions (n = 3, i = 3).",
        "For weak acids/bases (e.g. CH₃COOH, HCN, NH₄OH), α < 1, so 1 < i < n."
      ]
    },
    {
      heading: "3. Quantitative Association & Degree of Dimerization (α)",
      paragraphs: [
        "In non-polar solvents (such as benzene, CCl₄, or CS₂), molecules containing polar functional groups (like carboxylic acids) undergo intermolecular association through strong pairs of hydrogen bonds.",
        "Consider 'n' simple molecules of solute A combining to form an associated cluster A_n:",
        "n A ⇌ A_n",
        "Let α be the degree of association:",
        "• Initial moles at t = 0: Monomer A = 1 mol, Cluster A_n = 0 mol.",
        "• At equilibrium: Unassociated monomer A = (1 - α) mol; Cluster A_n formed = (α / n) mol.",
        "• Total moles of all particles at equilibrium = (1 - α) + (α / n) = 1 - α(1 - 1/n).",
        "Therefore, van't Hoff factor is: i = 1 - \\alpha\\left(1 - \\frac{1}{n}\\right).",
        "Rearranging for Degree of Association (α):",
        "\\alpha = \\frac{1 - i}{1 - 1/n}",
        "Special High-Yield Case: Dimerization of Carboxylic Acids (n = 2):",
        "2 CH₃COOH ⇌ (CH₃COOH)₂  and  2 C₆H₅COOH ⇌ (C₆H₅COOH)₂",
        "For dimerization (n = 2): i = 1 - \\frac{\\alpha}{2} \\implies \\alpha = 2(1 - i)",
        "For 100% complete dimerization (α = 1): i = 1 - 0.5 = 0.5. The observed molar mass of benzoic acid in benzene is exactly 2 × 122 = 244 g mol⁻¹."
      ],
      visual: {
        type: 'svg',
        svgContent: SOLUTIONS_SVGS.associationDiagram,
        caption: "Association (Dimerization of Benzoic Acid in Benzene): Two molecules pair up via hydrogen bonds, reducing particle count by half (i = 0.5).",
        guide: "Notice the formation of cyclic 8-membered hydrogen-bonded dimers in non-polar benzene."
      },
      importantPoints: [
        "Association: i < 1 and M_obs > M_normal.",
        "Benzoic acid dissociates in water (i > 1) but dimerizes in benzene (i ≈ 0.5)."
      ]
    },
    {
      heading: "4. Master Ranking Rules for Equimolar Solutions in NEET UG",
      paragraphs: [
        "Examiners frequently present 4 equimolar solutions (e.g. 0.1 M) and ask for rankings across physical properties:",
        "1. Colligative Properties (ΔT_b, ΔT_f, π, RLVP) ∝ (i · C): Follows van't Hoff factor directly!",
        "Order: 0.1 M Al₂(SO₄)₃ (i=5) > 0.1 M BaCl₂ (i=3) > 0.1 M NaCl (i=2) > 0.1 M Glucose (i=1) > 0.1 M Benzoic acid in benzene (i=0.5).",
        "2. Boiling Point (T_b = 100°C + ΔT_b): Higher i produces HIGHER boiling point! (Al₂(SO₄)₃ > BaCl₂ > NaCl > Glucose).",
        "3. Freezing Point (T_f = 0°C - ΔT_f): Higher i produces GREATER depression, resulting in a LOWER freezing point! (Glucose > NaCl > BaCl₂ > Al₂(SO₄)₃).",
        "4. Vapour Pressure (p = p° - Δp): Higher i produces greater lowering, resulting in a LOWER vapour pressure! (Glucose > NaCl > BaCl₂ > Al₂(SO₄)₃)."
      ],
      importantPoints: [
        "GOLDEN MNEMONIC: CP, ΔTb, ΔTf, π, and Boiling Point follow i directly.",
        "ONLY Freezing Point and Vapour Pressure follow 1/i (inversely)!"
      ]
    }
  ],

  formulae: [
    SOLUTIONS_MASTER_FORMULAE[14],
    SOLUTIONS_MASTER_FORMULAE[15],
    {
      title: "Modified Colligative Equations Master Set",
      formula: "\\frac{p_1^\\circ - p_1}{p_1^\\circ} = i \\cdot x_2, \\quad \\Delta T_b = i K_b m, \\quad \\Delta T_f = i K_f m, \\quad \\pi = i C R T",
      meaning: "Universal colligative property relations incorporating van't Hoff factor for all solutes.",
      unit: "Standard colligative units",
      conditions: "Mandatory for all electrolyte and associating solute calculations."
    }
  ],

  neetMarksPotential: {
    topicName: "van't Hoff Factor & Abnormal Molar Mass",
    confidenceLabel: 'HIGH',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 15,
    totalDirectPyqs: 22,
    totalHistoricalMarks: 88,
    weightagePercentage: 5.5,
    expectedQuestionsCount: 1,
    highYieldStatus: true,
    scoreWeightage: "4 - 8 Marks (Guaranteed Question)",
    difficultyRating: "High (Requires clear distinction between α, n, and i)",
    trendAnalysis: "NEET consistently asks degree of dissociation calculations from ΔTf / ΔTb and comparative freezing point / osmotic pressure rankings of equimolar salts."
  },

  neetImportantPoints: SOLUTIONS_RAPID_REVISION_POINTS.slice(20),

  commonConfusions: SOLUTIONS_NEET_TRAPS.slice(35, 50).map(t => ({
    commonConfusion: t.studentMistake,
    correctFact: t.actualFact,
    whyItMattersForNEET: `${t.trapTitle}: ${t.neetRule}`
  })),

  quickRevision: [
    "van't Hoff factor i = Observed CP / Calculated CP = Normal Molar Mass / Abnormal Molar Mass.",
    "Dissociation: i > 1, α = (i - 1) / (n - 1). For complete ionization: NaCl (i=2), CaCl₂ (i=3), Al₂(SO₄)₃ (i=5).",
    "Association (Dimerization): i < 1, α = 2(1 - i). For 100% dimerization: i = 0.5, M_obs = 2 × M_normal.",
    "Modified Equations: RLVP = i·x₂, ΔTb = i·Kb·m, ΔTf = i·Kf·m, π = i·CRT.",
    "Ranking Rule: π, ΔTb, ΔTf, and Boiling Point follow i. Freezing Point and Vapour Pressure follow 1/i."
  ],

  practiceQuestions: SOLUTIONS_SELF_TEST_MCQS.slice(15, 25).map(q => ({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation
  })),

  pyqs: [SOLUTIONS_VERIFIED_PYQS[5], SOLUTIONS_VERIFIED_PYQS[6], SOLUTIONS_VERIFIED_PYQS[8], SOLUTIONS_VERIFIED_PYQS[9]]
};
