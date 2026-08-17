import { DetailedTopicContent } from '../../types/neet';

export const chemIupacNomenclatureDetails: DetailedTopicContent = {
  topicId: "chem-iupac-nomenclature",
  topicName: "Classification & IUPAC Nomenclature",
  subject: "Chemistry",
  class: "Class 11",
  classification: "Organic Chemistry (Class 11)",
  chapter: "Organic Chemistry: Some Basic Principles & Techniques",

  whatIsThisTopic: "Classification of organic compounds (acyclic, cyclic, homocyclic, heterocyclic) and IUPAC nomenclature rules for polyfunctional organic compounds.",

  basicIdea: [
  "Classification: Organic compounds are classified into Acyclic (open-chain/aliphatic) and Cyclic (closed-chain/ring). Cyclic compounds are divided into Homocyclic/Carbocyclic (alicyclic and aromatic e.g., benzene) and Heterocyclic (e.g., furan, thiophene, pyridine).",
  "Functional Groups & Homologous Series: Homologous series share same functional group, general formula, and consecutive members differ by -CH₂- (14 u mass).",
  "IUPAC Rules: 1. Select longest carbon chain containing principal functional group & maximum multiple bonds. 2. Number chain to give lowest locants to principal functional group > multiple bonds > substituents. 3. Name format: Secondary Prefix + Primary Prefix + Word Root + Primary Suffix + Secondary Suffix."
],

  importantTerms: [
    {
        "term": "Principal Functional Group Priority",
        "definition": "-COOH > -SO₃H > -COOR > -COCl > -CONH₂ > -CN > -CHO > >C=O > -OH > -NH₂ > >C=C< > -C≡C-.",
        "neetNote": "High-yield term for NEET UG examination."
    },
    {
        "term": "Substituents named alphabetically",
        "definition": "Bromo before Chloro, Ethyl before Methyl (ignore di, tri prefixes when alphabetizing).",
        "neetNote": "High-yield term for NEET UG examination."
    }
],

  conceptExplanation: [
    {
      heading: "1. Fundamentals & Core Principles of Classification & IUPAC Nomenclature",
      paragraphs: [
        "Classification & IUPAC Nomenclature forms a foundational component of Organic Chemistry: Some Basic Principles & Techniques in NEET UG Chemistry.",
        "Mastering this topic requires a clear understanding of basic concepts, intermediate reasoning, and NEET-level applications. Students must focus on WHY physical/chemical/biological phenomena occur rather than merely memorizing facts.",
        ...["Classification: Organic compounds are classified into Acyclic (open-chain/aliphatic) and Cyclic (closed-chain/ring). Cyclic compounds are divided into Homocyclic/Carbocyclic (alicyclic and aromatic e.g., benzene) and Heterocyclic (e.g., furan, thiophene, pyridine).","Functional Groups & Homologous Series: Homologous series share same functional group, general formula, and consecutive members differ by -CH₂- (14 u mass).","IUPAC Rules: 1. Select longest carbon chain containing principal functional group & maximum multiple bonds. 2. Number chain to give lowest locants to principal functional group > multiple bonds > substituents. 3. Name format: Secondary Prefix + Primary Prefix + Word Root + Primary Suffix + Secondary Suffix."]
      ],
      visual: {
        type: 'svg',
        svgContent: "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-lg mx-auto\"><rect width=\"500\" height=\"200\" fill=\"#f8fafc\" rx=\"12\"/><circle cx=\"150\" cy=\"100\" r=\"40\" fill=\"#ec4899\" opacity=\"0.8\"/><text x=\"150\" y=\"105\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Species A</text><circle cx=\"350\" cy=\"100\" r=\"40\" fill=\"#8b5cf6\" opacity=\"0.8\"/><text x=\"350\" y=\"105\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Species B</text><path d=\"M 200 100 Q 250 60 300 100\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" marker-end=\"url(#arrow-chem)\"/><text x=\"250\" y=\"70\" fill=\"#2563eb\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Reaction Pathway</text><defs><marker id=\"arrow-chem\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#2563eb\"/></marker></defs></svg>",
        caption: "Reaction coordinate & molecular structural transition schematic for Classification & IUPAC Nomenclature.",
        guide: "Diagram Guide: Observe the key structural components, vectors, or pathways illustrated in the diagram for Classification & IUPAC Nomenclature."
      },
      importantPoints: ["When carboxylic acid carbon is included in main chain, suffix is '-oic acid'; when carbon is excluded (e.g., attached directly to ring or in tricarboxylic acids), suffix is 'carboxylic acid'.","Halogens (-F, -Cl, -Br, -I), Nitro (-NO₂), and Alkoxy (-OR) are ALWAYS treated as substituents (secondary prefixes), never as principal suffixes."]
    },
    {
      heading: "2. Step-by-Step Mechanisms & NEET Application",
      paragraphs: [
        "In NEET UG questions on Classification & IUPAC Nomenclature, examiners frequently test multi-step logical reasoning and NCERT textual statements.",
        "Step 1: Identify the underlying physical/chemical/biological system and key variables.",
        "Step 2: Apply standard NCERT principles or quantitative relations to evaluate the correct outcome.",
        "Step 3: Watch out for negative marking traps and common student misconceptions."
      ],
      importantPoints: []
    }
  ],

  formulae: [
  {
    "title": "IUPAC Name Structure",
    "formula": "\text{Prefix (Substituents)} + \text{Word Root (Chain length)} + \text{Primary Suffix (en/yn)} + \text{Secondary Suffix (Principal FG)}",
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
    caption: "Visual summary diagram for Classification & IUPAC Nomenclature."
  },

  neetImportantPoints: [
  "When carboxylic acid carbon is included in main chain, suffix is '-oic acid'; when carbon is excluded (e.g., attached directly to ring or in tricarboxylic acids), suffix is 'carboxylic acid'.",
  "Halogens (-F, -Cl, -Br, -I), Nitro (-NO₂), and Alkoxy (-OR) are ALWAYS treated as substituents (secondary prefixes), never as principal suffixes."
],

  commonConfusions: [
  {
    "commonConfusion": "Assuming di/tri/tetra prefixes count in alphabetical order of substituents.",
    "correctFact": "Prefixes like di, tri, tetra are IGNORED in alphabetization (e.g., 'dimethyl' comes under 'm', 'ethyl' comes under 'e').",
    "whyItMattersForNEET": "A frequent trap in NEET IUPAC naming options."
  }
],

  quickRevision: [
  "Priority: -COOH > -CHO > -C=O > -OH > -NH₂ > C=C > C≡C",
  "-NO₂, -X, -OR are always prefixes, never principal suffixes"
],

  practiceQuestions: [],

  pyqs: []
};
