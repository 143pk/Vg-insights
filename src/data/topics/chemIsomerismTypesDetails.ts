import { DetailedTopicContent } from '../../types/neet';

export const chemIsomerismTypesDetails: DetailedTopicContent = {
  topicId: "chem-isomerism-types",
  topicName: "Isomerism",
  subject: "Chemistry",
  class: "Class 11",
  classification: "Organic Chemistry (Class 11)",
  chapter: "Organic Chemistry: Some Basic Principles & Techniques",

  whatIsThisTopic: "Structural isomerism (chain, position, functional, metamerism, ring-chain) and stereoisomerism (geometrical cis/trans E/Z, optical isomerism).",

  basicIdea: [
  "Structural Isomerism: 1. Chain (different carbon skeleton). 2. Position (different position of functional group/multiple bond). 3. Functional (different functional groups e.g., alcohol & ether, aldehyde & ketone, carboxylic acid & ester). 4. Metamerism (different alkyl groups on either side of polyvalent heteroatom e.g., ethers, 2° amines, esters). 5. Ring-Chain (open chain & cyclic with same molecular formula).",
  "Stereoisomerism: Geometrical isomerism arises from restricted rotation around C=C or ring bonds. Requires each sp² carbon to have two DIFFERENT groups attached. Cis (same sides), Trans (opposite sides); E/Z nomenclature based on CIP priority rules.",
  "Optical Isomerism: Requires chiral carbon (asymmetric carbon with 4 different attached groups). Non-superimposable mirror images are Enantiomers. Equal mixture of d and l enantiomers forms optically inactive Racemic Mixture (external compensation)."
],

  importantTerms: [
    {
        "term": "Geometrical Isomerism condition",
        "definition": "Carbon-carbon double bond with structural pattern abC=Cab or abC=Ccd (a ≠ b and c ≠ d).",
        "neetNote": "High-yield term for NEET UG examination."
    },
    {
        "term": "CIP Priority Rules for E/Z",
        "definition": "Higher atomic number gets higher priority. If atoms attached directly are identical, compare next atoms attached.",
        "neetNote": "High-yield term for NEET UG examination."
    }
],

  conceptExplanation: [
    {
      heading: "1. Fundamentals & Core Principles of Isomerism",
      paragraphs: [
        "Isomerism forms a foundational component of Organic Chemistry: Some Basic Principles & Techniques in NEET UG Chemistry.",
        "Mastering this topic requires a clear understanding of basic concepts, intermediate reasoning, and NEET-level applications. Students must focus on WHY physical/chemical/biological phenomena occur rather than merely memorizing facts.",
        ...["Structural Isomerism: 1. Chain (different carbon skeleton). 2. Position (different position of functional group/multiple bond). 3. Functional (different functional groups e.g., alcohol & ether, aldehyde & ketone, carboxylic acid & ester). 4. Metamerism (different alkyl groups on either side of polyvalent heteroatom e.g., ethers, 2° amines, esters). 5. Ring-Chain (open chain & cyclic with same molecular formula).","Stereoisomerism: Geometrical isomerism arises from restricted rotation around C=C or ring bonds. Requires each sp² carbon to have two DIFFERENT groups attached. Cis (same sides), Trans (opposite sides); E/Z nomenclature based on CIP priority rules.","Optical Isomerism: Requires chiral carbon (asymmetric carbon with 4 different attached groups). Non-superimposable mirror images are Enantiomers. Equal mixture of d and l enantiomers forms optically inactive Racemic Mixture (external compensation)."]
      ],
      visual: {
        type: 'svg',
        svgContent: "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-lg mx-auto\"><rect width=\"500\" height=\"200\" fill=\"#f8fafc\" rx=\"12\"/><circle cx=\"150\" cy=\"100\" r=\"40\" fill=\"#ec4899\" opacity=\"0.8\"/><text x=\"150\" y=\"105\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Species A</text><circle cx=\"350\" cy=\"100\" r=\"40\" fill=\"#8b5cf6\" opacity=\"0.8\"/><text x=\"350\" y=\"105\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Species B</text><path d=\"M 200 100 Q 250 60 300 100\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" marker-end=\"url(#arrow-chem)\"/><text x=\"250\" y=\"70\" fill=\"#2563eb\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Reaction Pathway</text><defs><marker id=\"arrow-chem\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#2563eb\"/></marker></defs></svg>",
        caption: "Reaction coordinate & molecular structural transition schematic for Isomerism.",
        guide: "Diagram Guide: Observe the key structural components, vectors, or pathways illustrated in the diagram for Isomerism."
      },
      importantPoints: ["Trans isomer generally has HIGHER melting point (symmetrical crystal packing) and LOWER dipole moment/boiling point than Cis isomer.","Meso compounds possess chiral carbons and a plane of symmetry (internal compensation), making them optically inactive."]
    },
    {
      heading: "2. Step-by-Step Mechanisms & NEET Application",
      paragraphs: [
        "In NEET UG questions on Isomerism, examiners frequently test multi-step logical reasoning and NCERT textual statements.",
        "Step 1: Identify the underlying physical/chemical/biological system and key variables.",
        "Step 2: Apply standard NCERT principles or quantitative relations to evaluate the correct outcome.",
        "Step 3: Watch out for negative marking traps and common student misconceptions."
      ],
      importantPoints: []
    }
  ],

  formulae: [
  {
    "title": "Number of Optical Isomers",
    "formula": "\text{For molecule with } n \text{ asymmetric carbons (unsymmetrical): } N = 2^n",
    "meaning": "",
    "symbols": "",
    "unit": "",
    "conditions": "",
    "whenToUse": "Use in standard NEET problem solving."
  }
],

  visualLearning: {
    type: 'svg',
    svgContent: "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-lg mx-auto\"><rect width=\"500\" height=\"200\" fill=\"#f8fafc\" rx=\"12\"/><circle cx=\"150\" cy=\"100\" r=\"40\" fill=\"#ec4899\" opacity=\"0.8\"/><text x=\"150\" y=\"105\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Species A</text><circle cx=\"350\" cy=\"100\" r=\"40\" fill=\"#8b5cf6\" opacity=\"0.8\"/><text x=\"350\" y=\"105\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Species B</text><path d=\"M 200 100 Q 250 60 300 100\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" marker-end=\"url(#arrow-chem)\"/><text x=\"250\" y=\"70\" fill=\"#2563eb\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Reaction Pathway</text><defs><marker id=\"arrow-chem\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#2563eb\"/></marker></defs></svg>",
    caption: "Visual summary diagram for Isomerism."
  },

  neetImportantPoints: [
  "Trans isomer generally has HIGHER melting point (symmetrical crystal packing) and LOWER dipole moment/boiling point than Cis isomer.",
  "Meso compounds possess chiral carbons and a plane of symmetry (internal compensation), making them optically inactive."
],

  commonConfusions: [
  {
    "commonConfusion": "Confusing Metamerism with Position Isomerism.",
    "correctFact": "Metamerism specifically requires a polyvalent functional group (-O-, -S-, -NH-, -COO-) with different alkyl groups attached on either side.",
    "whyItMattersForNEET": "Frequently tested distinction in NEET structural isomerism questions."
  }
],

  quickRevision: [
  "Metamerism needs polyvalent heteroatom (-O-, -NH-, -COO-)",
  "Cis has higher dipole moment; Trans has higher melting point",
  "Meso is optically inactive due to internal compensation"
],

  practiceQuestions: [],

  pyqs: []
};
