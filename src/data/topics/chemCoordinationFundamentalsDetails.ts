import { DetailedTopicContent } from '../../types/neet';
import { COORDINATION_DIAGRAMS } from '../coordinationCompounds/coordinationDiagrams';
import { COORDINATION_CONCEPTS } from '../coordinationCompounds/coordinationTermsAndConcepts';
import { COORDINATION_TRAPS_AND_SHEET } from '../coordinationCompounds/coordinationTrapsAndFormulaSheet';
import { COORDINATION_PYQS } from '../coordinationCompounds/coordinationPyqs';
import { COORDINATION_PRACTICE_SETS } from '../coordinationCompounds/coordinationPracticeSets';

export const chemCoordinationFundamentalsDetails: DetailedTopicContent = {
  topicId: "chem-coordination-fundamentals",
  topicName: "Coordination Chemistry Fundamentals & Nomenclature",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Inorganic Chemistry",
  chapter: "Coordination Compounds",

  whatIsThisTopic: "Coordination chemistry deals with compounds in which a central metal atom or ion is bonded to a definite number of anions or neutral molecules (ligands) by coordinate (dative) bonds. This foundational module covers Alfred Werner's pioneering coordination theory, the anatomy of coordination complexes (coordination sphere, oxidation state, coordination number, denticity, chelating and ambidentate ligands), and rigorous NCERT/IUPAC rules for formulating and naming coordination compounds.",

  basicIdea: [
    "Coordination Entity: A central metal atom/cation bonded to a fixed number of electron-rich ligands via coordinate covalent bonds, enclosed in square brackets [ ].",
    "Werner's Theory: Metals exhibit two types of valency — Primary Valency (ionisable, non-directional, equals Oxidation State) and Secondary Valency (non-ionisable, directional, equals Coordination Number).",
    "Ligand Classification: Classed by denticity into monodentate (Cl⁻, NH₃, H₂O), bidentate (en, C₂O₄²⁻), and polydentate (EDTA⁴⁻); chelating ligands form stable 5- or 6-membered rings.",
    "Ambidentate Ligands: Monodentate ligands with two distinct donor atoms (e.g. NO₂⁻, SCN⁻) that can bind through either donor atom, causing linkage isomerism.",
    "IUPAC Nomenclature: Cation is named before anion; within the coordination entity, ligands are listed alphabetically before the metal; anionic complexes append the suffix '-ate' to the metal name followed by its oxidation state in Roman numerals."
  ],

  importantTerms: [
    {
      term: "Coordination Entity",
      definition: "A central transition metal atom or cation surrounded by and bonded to a fixed number of ions or neutral molecules.",
      neetSignificance: "Species inside the brackets [ ] do not dissociate in solution."
    },
    {
      term: "Primary Valency",
      definition: "The ionisable, non-directional valency of a metal in a complex, satisfied only by anions and equal to the metal's oxidation state.",
      neetSignificance: "Determines the number of precipitable counter-ions (e.g. AgCl ppt with AgNO₃)."
    },
    {
      term: "Secondary Valency",
      definition: "The non-ionisable, directional valency satisfied by neutral molecules or anions, equal to the Coordination Number and governing geometry.",
      neetSignificance: "Directly determines the spatial geometry (octahedral, tetrahedral, or square planar)."
    },
    {
      term: "Denticity",
      definition: "The number of donor atom pairs donated by a single ligand molecule to the central metal ion.",
      neetSignificance: "Crucial for calculating Coordination Number = Σ (ligand count × denticity)."
    },
    {
      term: "Chelate Effect",
      definition: "The exceptional thermodynamic stabilization of a coordination complex when polydentate ligands form 5- or 6-membered ring structures around the metal ion.",
      neetSignificance: "Driven by entropy gain (ΔS° > 0) due to displacement of multiple monodentate solvent molecules."
    },
    {
      term: "Ambidentate Ligand",
      definition: "A unidentate ligand capable of coordinating through two different donor atoms (e.g. -NO₂ vs -ONO; -SCN vs -NCS).",
      neetSignificance: "The sole structural prerequisite for Linkage Isomerism in NEET questions."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Werner's Coordination Theory & Classic Precipitation Reactions",
      paragraphs: [
        "In 1893, Alfred Werner formulated the first coherent theory of coordination chemistry by postulating that transition metals exhibit two types of valency: Primary (Ionisable) Valency and Secondary (Non-Ionisable) Valency.",
        "Primary valency corresponds to the Oxidation State of the metal and is satisfied solely by negative ions. Secondary valency corresponds to the Coordination Number, is directional in space, and is satisfied by ligands (neutral molecules or anions).",
        "Precipitation experiments with excess silver nitrate (AgNO₃) provide direct experimental proof of the number of ionisable chloride counter-ions outside the coordination sphere."
      ],
      visual: {
        caption: "Werner's Cobalt(III) Ammines & AgNO₃ Precipitation Reactions.",
        guide: "Observe that only chloride ions residing in the ionisation sphere (outside brackets) precipitate with silver nitrate.",
        svgContent: COORDINATION_DIAGRAMS.wernerPrecipitationExperiment
      },
      tables: [
        COORDINATION_TRAPS_AND_SHEET.comparisonTables.primaryVsSecondaryValency,
        {
          title: "Werner's Series of Cobalt(III) Ammines",
          headers: ["Molecular Formula", "Modern Formulation", "Colour", "Conductivity (Ions)", "Moles of AgCl ppt / mol"],
          rows: [
            ["CoCl₃ · 6NH₃", "[Co(NH₃)₆]Cl₃", "Yellow", "4 ions (1:3)", "3 mol AgCl"],
            ["CoCl₃ · 5NH₃", "[Co(NH₃)₅Cl]Cl₂", "Purple", "3 ions (1:2)", "2 mol AgCl"],
            ["CoCl₃ · 4NH₃ (trans)", "trans-[Co(NH₃)₄Cl₂]Cl", "Green", "2 ions (1:1)", "1 mol AgCl"],
            ["CoCl₃ · 4NH₃ (cis)", "cis-[Co(NH₃)₄Cl₂]Cl", "Violet", "2 ions (1:1)", "1 mol AgCl"],
            ["CoCl₃ · 3NH₃", "[Co(NH₃)₃Cl₃]", "Blue", "0 (Non-electrolyte)", "0 mol AgCl (No ppt)"]
          ]
        }
      ]
    },
    {
      heading: "2. Anatomy of Coordination Complexes & Polyhedra",
      paragraphs: [
        "A coordination complex consists of: (1) Central metal atom/ion (Lewis acid), (2) Ligands (Lewis bases), (3) Coordination Sphere (square brackets), (4) Ionisation Sphere (counter-ions).",
        "The spatial arrangement of ligand donor atoms directly attached to the central atom defines the Coordination Polyhedron (Octahedral for C.N.=6; Tetrahedral or Square Planar for C.N.=4; Linear for C.N.=2).",
        "Homoleptic complexes possess identical ligands (e.g. [Co(NH₃)₆]³⁺), whereas Heteroleptic complexes possess two or more distinct ligand types (e.g. [Co(NH₃)₄Cl₂]⁺)."
      ],
      visual: {
        caption: "Anatomy of a Coordination Compound & Coordination Polyhedra.",
        guide: "Note the distinction between the non-ionisable coordination sphere and the ionisable counter-ions.",
        svgContent: COORDINATION_DIAGRAMS.coordinationEntityGeometries
      }
    },
    {
      heading: "3. NCERT Ligand Classification Master Table",
      paragraphs: [
        "Ligands are classified by denticity, charge, and bonding mode. Polydentate ligands with ring-forming capability are chelating ligands, creating enhanced stability (e.g. EDTA⁴⁻, en, ox²⁻).",
        "Ambidentate ligands have two possible donor atoms and can bind in two distinct ways to generate linkage isomers."
      ],
      tables: [
        {
          title: "Comprehensive NCERT Ligand Data",
          headers: ["Ligand Name", "Formula", "Charge", "Denticity", "Donor Atom(s)", "IUPAC Name in Complex"],
          rows: COORDINATION_CONCEPTS.ligandClassificationTable.map(l => [
            l.name,
            l.formula,
            String(l.charge),
            String(l.denticity),
            l.donorAtom,
            l.iupacName
          ])
        }
      ]
    },
    {
      heading: "4. IUPAC Nomenclature Rules & Solved Examples",
      paragraphs: [
        "Rule 1: In ionic coordination compounds, the cation is ALWAYS named before the anion, regardless of whether the complex entity is cationic or anionic.",
        "Rule 2: Within the coordination sphere, ligands are named in ALPHABETICAL ORDER before the name of the central metal atom/ion. Numerical prefixes (di, tri, tetra) are ignored during alphabetization.",
        "Rule 3: Anionic ligands end in '-ido' (chlorido, cyanido, oxalato). Neutral ligands retain special names: H₂O = aqua, NH₃ = ammine (double 'm'), CO = carbonyl, NO = nitrosyl.",
        "Rule 4: Multipliers: Use di-, tri-, tetra- for simple ligands. For polydentate ligands or ligands already containing numerical prefixes (e.g. ethane-1,2-diamine), use bis-, tris-, tetrakis- and place the ligand name in parentheses.",
        "Rule 5: Metal naming: In cationic or neutral complexes, the metal retains its standard English name. In anionic complexes, the metal name ends with the suffix '-ate' (e.g. ferrate, cuprate, argentate, platinate, aurate).",
        "Rule 6: Oxidation state of the central metal is specified in Roman numerals in parentheses immediately following the metal name."
      ],
      examples: COORDINATION_CONCEPTS.iupacSolvedExamples.map(ex => ({
        problem: `Determine the IUPAC name for: ${ex.formula}`,
        given: `Complex formula: ${ex.formula}`,
        stepByStep: [
          `Identify ion type: Cation is ${ex.cation}, Anion is ${ex.anion}.`,
          `Analyze ligands: ${ex.ligands}.`,
          `Calculate Oxidation State: ${ex.metalOxidationState}.`,
          `Coordination Number: ${ex.coordinationNumber}.`
        ],
        answer: `IUPAC Name: ${ex.iupacName} (${ex.neetExplanation})`
      }))
    }
  ],

  formulae: [
    {
      title: "Coordination Number Calculation",
      formula: "\\text{C.N.} = \\sum \\left( \\text{Number of each ligand} \\times \\text{Denticity} \\right)",
      variables: "Denticity: monodentate = 1, bidentate (en, ox²⁻) = 2, hexadentate (EDTA⁴⁻) = 6",
      whenToUse: "When determining coordination geometry and secondary valency"
    },
    {
      title: "Metal Oxidation State Calculation",
      formula: "x + \\sum q_{\\text{ligands}} = q_{\\text{sphere}}",
      variables: "x = oxidation state of metal, q = charge on ligands, q_sphere = net charge on complex ion",
      whenToUse: "In every IUPAC naming and VBT/CFT electron counting problem"
    }
  ],

  neetImportantPoints: [
    "Werner's Theory: Primary valency = Oxidation State (ionisable); Secondary valency = Coordination Number (non-ionisable, directional).",
    "Only counter-ions in the ionisation sphere (outside brackets) precipitate with AgNO₃ or BaCl₂.",
    "Ammine in IUPAC has TWO 'm's (ammine), whereas organic amines have one 'm' (amine).",
    "In [Fe(C₂O₄)₃]³⁻, coordination number is 6 (3 × 2 = 6), NOT 3, because oxalate is bidentate.",
    "When naming anionic complexes, use Latin roots with '-ate': Fe → ferrate, Cu → cuprate, Ag → argentate, Au → aurate, Pb → plumbate, Sn → stannate.",
    "EDTA⁴⁻ is a hexadentate ligand with 2 N and 4 O donor atoms.",
    "Ambidentate ligands (NO₂⁻, SCN⁻) have two different donor atoms and lead to Linkage Isomerism."
  ],

  commonConfusions: COORDINATION_TRAPS_AND_SHEET.neetTraps.slice(0, 5).map(t => ({
    commonConfusion: t.confusion,
    correctFact: t.correction,
    whyItMattersForNEET: t.neetTip
  })),

  quickRevision: COORDINATION_TRAPS_AND_SHEET.rapidRevisionPoints.slice(0, 4),

  practiceQuestions: COORDINATION_PRACTICE_SETS.fundamentals,

  pyqs: COORDINATION_PYQS.fundamentals,

  neetMarksPotential: {
    topicName: "Coordination Chemistry Fundamentals & Nomenclature",
    confidenceLabel: "HIGH",
    confidenceText: "High-yield core topic tested in virtually every NEET UG paper (1-2 direct questions annually).",
    totalAnalyzedPapers: 12,
    papersWithDirectPyqs: 11,
    totalDirectPyqs: 14,
    totalHistoricalMarks: 56,
    averageDirectPyqsPerPaper: 1.2,
    minDirectMarks: 4,
    maxDirectMarks: 8,
    weightagePercentage: 35,
    expectedQuestionsCount: 1,
    preparationStrategy: "Master Werner's precipitation mole ratios and memorize IUPAC naming rules for cationic, anionic, and neutral coordination complexes."
  }
};
