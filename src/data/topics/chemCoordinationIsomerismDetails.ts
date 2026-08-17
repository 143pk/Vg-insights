import { DetailedTopicContent } from '../../types/neet';
import { COORDINATION_DIAGRAMS } from '../coordinationCompounds/coordinationDiagrams';
import { COORDINATION_TRAPS_AND_SHEET } from '../coordinationCompounds/coordinationTrapsAndFormulaSheet';
import { COORDINATION_PYQS } from '../coordinationCompounds/coordinationPyqs';
import { COORDINATION_PRACTICE_SETS } from '../coordinationCompounds/coordinationPracticeSets';

export const chemCoordinationIsomerismDetails: DetailedTopicContent = {
  topicId: "chem-coordination-isomerism",
  topicName: "Isomerism in Coordination Compounds",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Inorganic Chemistry",
  chapter: "Coordination Compounds",

  whatIsThisTopic: "Isomerism in coordination compounds encompasses compounds having the same molecular formula but differing in chemical structure, atom connectivity, or three-dimensional spatial orientation. This topic systematically classifies Structural Isomerism (Ionisation, Hydrate/Solvate, Linkage, Coordination) and Stereoisomerism (Geometrical: cis/trans, fac/mer; Optical: chiral enantiomers, non-superimposable mirror images). Understanding symmetry elements, optical activity criteria, and isomer counting algorithms is essential for NEET UG.",

  basicIdea: [
    "Structural Isomerism: Different bonds/connectivity. Includes Ionisation (exchange of ligand with counter-ion), Solvate/Hydrate (water inside vs outside sphere), Linkage (ambidentate ligands NO₂⁻, SCN⁻), and Coordination (cation-anion ligand interchange).",
    "Geometrical Isomerism: Different spatial arrangements of ligands around the central metal. Occurs in Square Planar ([MA₂B₂], [MABCD]) and Octahedral ([MA₄B₂], [MA₃B₃], [M(AA)₂B₂]).",
    "Tetrahedral Non-Isomerism: Tetrahedral complexes [MA₂B₂] or [MABCD] CANNOT show geometrical isomerism because all 4 positions are adjacent and equivalent (109.5° angles).",
    "Facial (fac) vs Meridional (mer): Specific to octahedral [MA₃B₃] complexes; fac has 3 like ligands on one triangular face; mer has 3 like ligands spanning a meridian plane.",
    "Optical Isomerism (Chirality): Complexes lacking plane of symmetry (σ) and inversion centre (i) form non-superimposable mirror images (enantiomers: d and l). Octahedral [M(AA)₃] and cis-[M(AA)₂B₂] are optically active, whereas trans-[M(AA)₂B₂] is optically INACTIVE due to centrosymmetry."
  ],

  importantTerms: [
    {
      term: "Ionisation Isomerism",
      definition: "Isomerism arising when a ligand in the coordination sphere exchanges places with a counter-ion in the ionisation sphere, producing distinct ions in solution.",
      neetSignificance: "Distinguished experimentally by adding AgNO₃ or BaCl₂."
    },
    {
      term: "Linkage Isomerism",
      definition: "Isomerism occurring in complexes with ambidentate ligands (NO₂⁻, SCN⁻, CN⁻) that coordinate through different donor atoms.",
      neetSignificance: "e.g. [Co(NH₃)₅(NO₂)]Cl₂ (Yellow) vs [Co(NH₃)₅(ONO)]Cl₂ (Red)."
    },
    {
      term: "Solvate / Hydrate Isomerism",
      definition: "Isomerism where water molecules differ in being directly coordinated ligands inside the sphere versus crystalline solvent of hydration outside the sphere.",
      neetSignificance: "Tested by weight loss with dehydrating agents (conc. H₂SO₄) and AgNO₃ precipitation."
    },
    {
      term: "Coordination Isomerism",
      definition: "Isomerism arising in compounds containing BOTH complex cation and complex anion from the interchange of ligands between the two coordination entities.",
      neetSignificance: "Requires two sets of square brackets, e.g. [Co(NH₃)₆][Cr(CN)₆] and [Cr(NH₃)₆][Co(CN)₆]."
    },
    {
      term: "fac-mer Isomerism",
      definition: "Geometrical isomerism in octahedral [MA₃B₃] complexes where 3 donor atoms occupy one octahedral face (fac) or a meridian plane passing through the metal (mer).",
      neetSignificance: "fac-isomer has C₃ axis; mer-isomer has C₂ axis with two ligands mutually trans (180°)."
    },
    {
      term: "Enantiomers (Optical Isomers)",
      definition: "Chiral stereoisomers that are non-superimposable mirror images of each other and rotate plane-polarized light in opposite directions (dextro and laevo).",
      neetSignificance: "Requires complete absence of improper rotation axes (no plane σ or centre of inversion i)."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Complete Classification of Isomerism in Complexes",
      paragraphs: [
        "Isomerism in coordination compounds is divided into two primary categories: Structural Isomerism (differing atom connectivity) and Stereoisomerism (identical connectivity but differing 3D spatial arrangement).",
        "Mastering isomerism requires recognizing specific ligand types (ambidentate for linkage, water for solvate, bidentate for optical) and geometric constraints (square planar vs tetrahedral vs octahedral)."
      ],
      visual: {
        caption: "Isomerism in Coordination Compounds: Structural & Stereoisomerism Tree.",
        guide: "Trace the structural subtypes on the left and stereoisomeric branches on the right.",
        svgContent: COORDINATION_DIAGRAMS.isomerismOverview
      }
    },
    {
      heading: "2. Structural Isomerism: Types, Chemical Tests & Solved Examples",
      paragraphs: [
        "A. Ionisation Isomerism: [Co(NH₃)₅(SO₄)]Br (Red) gives a pale yellow AgBr precipitate with AgNO₃ but no precipitate with BaCl₂. Its isomer [Co(NH₃)₅Br]SO₄ (Violet) gives a white BaSO₄ precipitate with BaCl₂ but no precipitate with AgNO₃.",
        "B. Hydrate / Solvate Isomerism: In CrCl₃ · 6H₂O, three distinct hydrate isomers exist: (1) [Cr(H₂O)₆]Cl₃ (Violet, 3 mol AgCl, 0 H₂O lost over H₂SO₄); (2) [Cr(H₂O)₅Cl]Cl₂ · H₂O (Grey-green, 2 mol AgCl, 1 H₂O lost); (3) [Cr(H₂O)₄Cl₂]Cl · 2H₂O (Bright green, 1 mol AgCl, 2 H₂O lost).",
        "C. Linkage Isomerism: In [Co(NH₃)₅(NO₂)]Cl₂, coordination via Nitrogen (nitro) gives a yellow compound that is stable to acids. Coordination via Oxygen [Co(NH₃)₅(ONO)]Cl₂ (nitrito-O) yields a red compound that rearranges to nitro on heating.",
        "D. Coordination Isomerism: Observed when both cation and anion are complexes, e.g. [Co(NH₃)₆][Cr(CN)₆] and [Cr(NH₃)₆][Co(CN)₆], or [Pt(NH₃)₄][PtCl₄] and [Pt(NH₃)₃Cl][Pt(NH₃)Cl₃]."
      ],
      tables: [
        {
          title: "Distinguishing Structural Isomers by Chemical Reagents",
          headers: ["Isomer Pair", "Isomerism Type", "Reagent 1 Result", "Reagent 2 Result"],
          rows: [
            ["[Co(NH₃)₅(SO₄)]Br vs [Co(NH₃)₅Br]SO₄", "Ionisation", "AgNO₃: Pale yellow AgBr ppt with Br-outside", "BaCl₂: White BaSO₄ ppt with SO₄-outside"],
            ["[Cr(H₂O)₆]Cl₃ vs [Cr(H₂O)₅Cl]Cl₂·H₂O", "Hydrate", "AgNO₃: 3 mol AgCl vs 2 mol AgCl", "Conc. H₂SO₄: 0% weight loss vs 1 mol H₂O loss"],
            ["[Co(NH₃)₅(NO₂)]Cl₂ vs [Co(NH₃)₅(ONO)]Cl₂", "Linkage", "IR spectroscopy: N-bonded ν(NO₂) vs O-bonded ν(ONO)", "Colour: Yellow (nitro) vs Red (nitrito)"],
            ["[Co(NH₃)₆][Cr(CN)₆] vs [Cr(NH₃)₆][Co(CN)₆]", "Coordination", "Conductivity & metal precipitation upon specific cation oxidation", "Two complex coordination spheres"]
          ]
        }
      ]
    },
    {
      heading: "3. Stereoisomerism: Geometrical Isomerism (cis/trans & fac/mer)",
      paragraphs: [
        "Geometrical isomerism arises when ligands occupy different relative positions around the central metal atom (adjacent = cis, opposite = trans).",
        "Square Planar Complexes (C.N. = 4): [MA₂B₂] gives 2 geometrical isomers (cis and trans). Cisplatin (cis-[Pt(NH₃)₂Cl₂]) is a powerful anti-cancer drug; transplatin is biologically inactive. [MABCD] gives exactly 3 geometrical isomers.",
        "Octahedral Complexes (C.N. = 6): [MA₄B₂] gives 2 isomers (cis = 90° ligand angle, trans = 180° ligand angle). [MA₃B₃] gives 2 isomers: facial (fac) where 3 like ligands occupy one triangular face, and meridional (mer) where 3 like ligands form a planar semicircle along the meridian.",
        "Crucial NEET Rule: Tetrahedral complexes [MA₂B₂] and [MABCD] NEVER show geometrical isomerism because all four vertices in a regular tetrahedron are adjacent and equivalent."
      ],
      visual: {
        caption: "Stereoisomers: Cis/Trans, Fac/Mer & Optical Enantiomers.",
        guide: "Compare Cisplatin vs Transplatin, fac vs mer octahedral arrangements, and d/l chiral enantiomers.",
        svgContent: COORDINATION_DIAGRAMS.stereoisomersFacMerCisTrans
      }
    },
    {
      heading: "4. Optical Isomerism & Chirality in Octahedral Complexes",
      paragraphs: [
        "Optical isomers (enantiomers) are non-superimposable mirror images that rotate plane-polarized light in equal and opposite directions: Dextrorotatory (+ or d) and Laevorotatory (− or l).",
        "Condition for Optical Activity: The complex must be asymmetric / chiral, meaning it lacks a plane of symmetry (σ) and an inversion center (i).",
        "Key Systems Tested in NEET:",
        "1. [M(AA)₃] (e.g. [Co(en)₃]³⁺, [Fe(ox)₃]³⁻, [Cr(ox)₃]³⁻): Always chiral! Possesses a propeller-like helical arrangement. Exists as 2 optically active enantiomers (Δ and Λ or d and l).",
        "2. cis-[M(AA)₂B₂] (e.g. cis-[Co(en)₂Cl₂]⁺): Lacks plane of symmetry → CHIRAL and OPTICALLY ACTIVE (2 enantiomers).",
        "3. trans-[M(AA)₂B₂] (e.g. trans-[Co(en)₂Cl₂]⁺): Possesses a centre of inversion (i) and plane of symmetry (σ) → ACHIRAL and OPTICALLY INACTIVE (superimposable mirror image).",
        "Square Planar complexes are almost always optically inactive because the molecular plane itself acts as a plane of symmetry (σ_h)."
      ],
      tables: [
        {
          title: "Comprehensive Isomer Summary Matrix for Coordination Geometries",
          headers: ["Complex Type", "Geometry", "Geometrical Isomers", "Optical Isomers (Enantiomer Pairs)", "Total Stereoisomers"],
          rows: [
            ["[MA₂B₂]", "Tetrahedral", "0 (No cis/trans)", "0 (Achiral)", "1"],
            ["[M(AB)₂] (unsym bidentate)", "Tetrahedral", "0", "1 pair (d and l)", "2"],
            ["[MA₂B₂]", "Square Planar", "2 (cis and trans)", "0 (Planar symmetry)", "2"],
            ["[MABCD]", "Square Planar", "3 isomers", "0 (Planar symmetry)", "3"],
            ["[MA₄B₂]", "Octahedral", "2 (cis and trans)", "0 (Both achiral)", "2"],
            ["[MA₃B₃]", "Octahedral", "2 (fac and mer)", "0 (Both achiral)", "2"],
            ["[M(AA)₃]", "Octahedral", "1 (No cis/trans)", "1 pair (d and l)", "2"],
            ["[M(AA)₂B₂]", "Octahedral", "2 (cis and trans)", "1 pair (only cis is chiral; trans is meso)", "3 (cis-d, cis-l, trans)"],
            ["[M(AA)B₂C₂]", "Octahedral", "3 geometrical", "2 pairs from cis-forms", "5 total"],
            ["[M(AA)₂BC]", "Octahedral", "2 (cis and trans)", "1 pair (cis is chiral)", "3 (cis-d, cis-l, trans)"]
          ]
        }
      ]
    }
  ],

  formulae: [
    {
      title: "Stereoisomer Counting Rule for [M(AA)₂B₂]",
      formula: "\\text{Total Stereoisomers} = \\text{cis-d} + \\text{cis-l} + \\text{trans (achiral)} = 3",
      variables: "cis = chiral (2 enantiomers), trans = achiral (inversion centre)",
      whenToUse: "When asked for total stereoisomers of [Co(en)₂Cl₂]⁺ or [Cr(en)₂Br₂]⁺"
    },
    {
      title: "Geometrical Isomers of Square Planar [MABCD]",
      formula: "N_{\\text{geo}} = \\frac{(n-1)!}{2} = 3 \\text{ isomers}",
      variables: "Fix one ligand, permute the other 3 in trans position",
      whenToUse: "For [Pt(NH₃)(Br)(Cl)(py)] or similar heteroleptic square planar complexes"
    }
  ],

  neetImportantPoints: [
    "cis-[Co(en)₂Cl₂]⁺ is OPTICALLY ACTIVE (forms d and l enantiomers); trans-[Co(en)₂Cl₂]⁺ has an inversion centre (i) and is OPTICALLY INACTIVE.",
    "[M(AA)₃] complexes (like [Co(en)₃]³⁺, [Fe(C₂O₄)₃]³⁻) have NO geometrical isomers, but exist as 2 optical enantiomers (d and l).",
    "Tetrahedral complexes NEVER show geometrical (cis-trans) isomerism because all bond angles are equal (109.5°).",
    "Square planar complexes of type [MABCD] have exactly 3 geometrical isomers and 0 optical isomers.",
    "Octahedral [MA₃B₃] complexes exhibit facial (fac) and meridional (mer) isomerism.",
    "Ionisation isomers give different precipitates with test reagents: [Co(NH₃)₅SO₄]Br gives AgBr with AgNO₃; [Co(NH₃)₅Br]SO₄ gives BaSO₄ with BaCl₂.",
    "Linkage isomerism requires an ambidentate ligand: NO₂⁻ (nitro vs nitrito), SCN⁻ (thiocyanato vs isothiocyanato)."
  ],

  commonConfusions: COORDINATION_TRAPS_AND_SHEET.neetTraps.slice(2, 6).map(t => ({
    commonConfusion: t.confusion,
    correctFact: t.correction,
    whyItMattersForNEET: t.neetTip
  })),

  quickRevision: COORDINATION_TRAPS_AND_SHEET.rapidRevisionPoints.slice(3, 7),

  practiceQuestions: COORDINATION_PRACTICE_SETS.isomerism,

  pyqs: COORDINATION_PYQS.isomerism,

  neetMarksPotential: {
    topicName: "Isomerism in Coordination Compounds",
    confidenceLabel: "HIGH",
    confidenceText: "One of the most heavily tested areas in NEET Inorganic Chemistry (1-2 questions every year).",
    totalAnalyzedPapers: 12,
    papersWithDirectPyqs: 12,
    totalDirectPyqs: 16,
    totalHistoricalMarks: 64,
    averageDirectPyqsPerPaper: 1.33,
    minDirectMarks: 4,
    maxDirectMarks: 8,
    weightagePercentage: 38,
    expectedQuestionsCount: 1,
    preparationStrategy: "Focus on distinguishing cis/trans optical activity in [M(AA)₂B₂], fac/mer in [MA₃B₃], and identifying ambidentate linkage isomers."
  }
};
