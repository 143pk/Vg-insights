import { DetailedTopicContent } from '../../types/neet';

export const chemReactionIntermediatesDetails: DetailedTopicContent = {
  topicId: "chem-reaction-intermediates",
  topicName: "Basic Organic Reaction Mechanisms",
  subject: "Chemistry",
  class: "Class 11",
  classification: "Organic Chemistry (Class 11)",
  chapter: "Organic Chemistry: Some Basic Principles & Techniques",

  whatIsThisTopic: "Bond cleavage (homolytic & heterolytic), electrophiles, nucleophiles, curved-arrow notation, substitution, addition, elimination, and rearrangement reactions.",

  basicIdea: [
  "Bond Cleavage: Homolytic cleavage gives FREE RADICALS (equal electron sharing, favoured by UV light, peroxide, high temperature, non-polar solvent). Heterolytic cleavage gives CARBOCATION and CARBANION (unequal sharing, favoured by polar solvents).",
  "Attacking Reagents: Electrophiles (E⁺ / electron loving, e.g., H⁺, NO₂⁺, Cl⁺, BF₃, AlCl₃, SO₃, carbene). Nucleophiles (Nu⁻ / nucleus loving, e.g., OH⁻, CN⁻, H₂O, NH₃, R-OH, RMgX). Ambiphiles act as both (e.g., H₂O, ROH).",
  "Curved Arrow Notation: Curved arrow indicates movement of an electron pair (from electron source/lone pair/bond to electron sink). Half-headed arrow (fishhook) shows single electron movement in homolysis.",
  "Types of Organic Reactions: 1. Substitution (Nucleophilic SN1/SN2, Electrophilic SE, Free Radical). 2. Addition (Electrophilic, Nucleophilic, Free Radical). 3. Elimination (E1, E2, E1cB). 4. Rearrangement (carbocation 1,2-hydride/methyl shift)."
],

  importantTerms: [
    {
        "term": "Carbocation Rearrangement Rule",
        "definition": "Any less stable carbocation (1° or 2°) will spontaneously rearrange to a more stable carbocation (2° or 3°) via 1,2-hydride or 1,2-methyl shift if possible.",
        "neetNote": "High-yield term for NEET UG examination."
    },
    {
        "term": "Electrophiles have vacant orbitals or positive charge; Nucleophiles have lone pair of electrons or negative charge.",
        "definition": "Key technical term in NCERT syllabus required for NEET UG examination.",
        "neetNote": "Essential concept for NEET MCQs."
    }
],

  conceptExplanation: [
    {
      heading: "1. Fundamentals & Core Principles of Basic Organic Reaction Mechanisms",
      paragraphs: [
        "Basic Organic Reaction Mechanisms forms a foundational component of Organic Chemistry: Some Basic Principles & Techniques in NEET UG Chemistry.",
        "Mastering this topic requires a clear understanding of basic concepts, intermediate reasoning, and NEET-level applications. Students must focus on WHY physical/chemical/biological phenomena occur rather than merely memorizing facts.",
        ...["Bond Cleavage: Homolytic cleavage gives FREE RADICALS (equal electron sharing, favoured by UV light, peroxide, high temperature, non-polar solvent). Heterolytic cleavage gives CARBOCATION and CARBANION (unequal sharing, favoured by polar solvents).","Attacking Reagents: Electrophiles (E⁺ / electron loving, e.g., H⁺, NO₂⁺, Cl⁺, BF₃, AlCl₃, SO₃, carbene). Nucleophiles (Nu⁻ / nucleus loving, e.g., OH⁻, CN⁻, H₂O, NH₃, R-OH, RMgX). Ambiphiles act as both (e.g., H₂O, ROH).","Curved Arrow Notation: Curved arrow indicates movement of an electron pair (from electron source/lone pair/bond to electron sink). Half-headed arrow (fishhook) shows single electron movement in homolysis."]
      ],
      visual: {
        type: 'svg',
        svgContent: "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-lg mx-auto\"><rect width=\"500\" height=\"200\" fill=\"#f8fafc\" rx=\"12\"/><circle cx=\"150\" cy=\"100\" r=\"40\" fill=\"#ec4899\" opacity=\"0.8\"/><text x=\"150\" y=\"105\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Species A</text><circle cx=\"350\" cy=\"100\" r=\"40\" fill=\"#8b5cf6\" opacity=\"0.8\"/><text x=\"350\" y=\"105\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Species B</text><path d=\"M 200 100 Q 250 60 300 100\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" marker-end=\"url(#arrow-chem)\"/><text x=\"250\" y=\"70\" fill=\"#2563eb\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Reaction Pathway</text><defs><marker id=\"arrow-chem\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#2563eb\"/></marker></defs></svg>",
        caption: "Reaction coordinate & molecular structural transition schematic for Basic Organic Reaction Mechanisms.",
        guide: "Diagram Guide: Observe the key structural components, vectors, or pathways illustrated in the diagram for Basic Organic Reaction Mechanisms."
      },
      importantPoints: ["BF₃, AlCl₃, and FeCl₃ are Lewis acids and act as ELECTROPHILES despite having no positive charge, due to incomplete octets.","Water and Ammonia are neutral nucleophiles because oxygen and nitrogen carry unshared electron pairs.","Carbocation rearrangements occur in SN1 and E1 reactions, but NOT in SN2 or E2 reactions."]
    },
    {
      heading: "2. Step-by-Step Mechanisms & NEET Application",
      paragraphs: [
        "In NEET UG questions on Basic Organic Reaction Mechanisms, examiners frequently test multi-step logical reasoning and NCERT textual statements.",
        "Step 1: Identify the underlying physical/chemical/biological system and key variables.",
        "Step 2: Apply standard NCERT principles or quantitative relations to evaluate the correct outcome.",
        "Step 3: Watch out for negative marking traps and common student misconceptions."
      ],
      importantPoints: []
    }
  ],

  formulae: [
  {
    "title": "Heterolytic Cleavage",
    "formula": "A-B xrightarrow{\text{Heterolysis}} A^+ + :B^-",
    "meaning": "",
    "symbols": "",
    "unit": "",
    "conditions": "",
    "whenToUse": "Use in standard NEET problem solving."
  },
  {
    "title": "Homolytic Cleavage",
    "formula": "A-B xrightarrow[\text{or } h\nu]{Delta} A^\bullet + B^\bullet",
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
    caption: "Visual summary diagram for Basic Organic Reaction Mechanisms."
  },

  neetImportantPoints: [
  "BF₃, AlCl₃, and FeCl₃ are Lewis acids and act as ELECTROPHILES despite having no positive charge, due to incomplete octets.",
  "Water and Ammonia are neutral nucleophiles because oxygen and nitrogen carry unshared electron pairs.",
  "Carbocation rearrangements occur in SN1 and E1 reactions, but NOT in SN2 or E2 reactions."
],

  commonConfusions: [
  {
    "commonConfusion": "Assuming neutral molecules cannot be electrophiles or nucleophiles.",
    "correctFact": "BF₃ / AlCl₃ are neutral electrophiles (incomplete octet); H₂O / NH₃ / ROH are neutral nucleophiles (lone pairs).",
    "whyItMattersForNEET": "Frequently tested in NEET identification questions."
  }
],

  quickRevision: [
  "Heterolysis -> Carbocation + Carbanion; Homolysis -> Free Radicals",
  "BF₃, AlCl₃ = Lewis Acid Electrophiles",
  "H₂O, NH₃ = Neutral Nucleophiles"
],

  practiceQuestions: [],

  pyqs: []
};
