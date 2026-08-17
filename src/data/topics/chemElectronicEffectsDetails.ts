import { DetailedTopicContent } from '../../types/neet';

export const chemElectronicEffectsDetails: DetailedTopicContent = {
  topicId: "chem-electronic-effects",
  topicName: "Electronic Effects & Reaction Intermediates",
  subject: "Chemistry",
  class: "Class 11",
  classification: "Organic Chemistry (Class 11)",
  chapter: "Organic Chemistry: Some Basic Principles & Techniques",

  whatIsThisTopic: "Inductive effect (+I/-I), resonance/mesomeric (+M/-M), hyperconjugation, electromeric effect, and stability of carbocations, carbanions, and free radicals.",

  basicIdea: [
  "Inductive Effect (I-effect): Permanent displacement of σ-electrons along carbon chain due to electronegativity difference. Distance-dependent (diminishes after 3 carbons). -I groups: -NO₂ > -CN > -COOH > -F > -Cl > -Br > -I > -OH > -Ph. +I groups: -O⁻ > -COO⁻ > 3° alkyl > 2° alkyl > 1° alkyl > -CH₃.",
  "Resonance / Mesomeric Effect (M/R-effect): Permanent delocalization of π-electrons/lone pairs through conjugated system. Distance independent. +M (electron donating via lone pair): -O⁻ > -NH₂ > -OH > -OR > -NHCOCH₃ > -X. -M (electron withdrawing via double/triple bond to electronegative atom): -NO₂ > -CN > -CHO > >C=O > -COOH.",
  "Hyperconjugation (No-Bond Resonance / Baker-Nathan Effect): Delocalization of σ-electrons of C-H bond of an alkyl group directly attached to an unsaturated system or atom with unshared p-orbital (carbocation, free radical). Stability proportional to number of α-hydrogens.",
  "Reaction Intermediates: Carbocation (sp², planar, 6 e⁻, paramagnetic = false, stability: Allyl/Benzyl > 3° > 2° > 1° > CH₃⁺). Carbanion (sp³, pyramidal, 8 e⁻, stability: CH₃⁻ > 1° > 2° > 3°). Free Radical (sp²/planar, 7 e⁻, stability: Allyl/Benzyl > 3° > 2° > 1° > CH₃•)."
],

  importantTerms: [
    {
        "term": "Stability Order Rule",
        "definition": "Benzyl/Allyl carbocations stabilized by resonance > Alkyl carbocations stabilized by hyperconjugation (α-H count) and +I effect.",
        "neetNote": "High-yield term for NEET UG examination."
    },
    {
        "term": "Carbanion stability is INCREASED by -I / -M groups and DECREASED by +I / +M groups.",
        "definition": "Key technical term in NCERT syllabus required for NEET UG examination.",
        "neetNote": "Essential concept for NEET MCQs."
    }
],

  conceptExplanation: [
    {
      heading: "1. Fundamentals & Core Principles of Electronic Effects & Reaction Intermediates",
      paragraphs: [
        "Electronic Effects & Reaction Intermediates forms a foundational component of Organic Chemistry: Some Basic Principles & Techniques in NEET UG Chemistry.",
        "Mastering this topic requires a clear understanding of basic concepts, intermediate reasoning, and NEET-level applications. Students must focus on WHY physical/chemical/biological phenomena occur rather than merely memorizing facts.",
        ...["Inductive Effect (I-effect): Permanent displacement of σ-electrons along carbon chain due to electronegativity difference. Distance-dependent (diminishes after 3 carbons). -I groups: -NO₂ > -CN > -COOH > -F > -Cl > -Br > -I > -OH > -Ph. +I groups: -O⁻ > -COO⁻ > 3° alkyl > 2° alkyl > 1° alkyl > -CH₃.","Resonance / Mesomeric Effect (M/R-effect): Permanent delocalization of π-electrons/lone pairs through conjugated system. Distance independent. +M (electron donating via lone pair): -O⁻ > -NH₂ > -OH > -OR > -NHCOCH₃ > -X. -M (electron withdrawing via double/triple bond to electronegative atom): -NO₂ > -CN > -CHO > >C=O > -COOH.","Hyperconjugation (No-Bond Resonance / Baker-Nathan Effect): Delocalization of σ-electrons of C-H bond of an alkyl group directly attached to an unsaturated system or atom with unshared p-orbital (carbocation, free radical). Stability proportional to number of α-hydrogens."]
      ],
      visual: {
        type: 'svg',
        svgContent: "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-lg mx-auto\"><rect width=\"500\" height=\"200\" fill=\"#f8fafc\" rx=\"12\"/><circle cx=\"150\" cy=\"100\" r=\"40\" fill=\"#ec4899\" opacity=\"0.8\"/><text x=\"150\" y=\"105\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Species A</text><circle cx=\"350\" cy=\"100\" r=\"40\" fill=\"#8b5cf6\" opacity=\"0.8\"/><text x=\"350\" y=\"105\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Species B</text><path d=\"M 200 100 Q 250 60 300 100\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" marker-end=\"url(#arrow-chem)\"/><text x=\"250\" y=\"70\" fill=\"#2563eb\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Reaction Pathway</text><defs><marker id=\"arrow-chem\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#2563eb\"/></marker></defs></svg>",
        caption: "Reaction coordinate & molecular structural transition schematic for Electronic Effects & Reaction Intermediates.",
        guide: "Diagram Guide: Observe the key structural components, vectors, or pathways illustrated in the diagram for Electronic Effects & Reaction Intermediates."
      },
      importantPoints: ["Halogens (-Cl, -Br, -I) exhibit -I effect OVERPOWERING +M effect in electrophilic substitution reactions, so they are DEACTIVATING yet ORTHO/PARA directing.","Stability of carbocations: (C₆H₅)₃C⁺ > (C₆H₅)₂CH⁺ > C₆H₅CH₂⁺ ≈ CH₂=CH-CH₂⁺ > (CH₃)₃C⁺ > (CH₃)₂CH⁺ > CH₃CH₂⁺ > CH₃⁺.","Acidic strength of carboxylic acids increases with -I groups (stabilize carboxylate anion RCOO⁻) and decreases with +I groups."]
    },
    {
      heading: "2. Step-by-Step Mechanisms & NEET Application",
      paragraphs: [
        "In NEET UG questions on Electronic Effects & Reaction Intermediates, examiners frequently test multi-step logical reasoning and NCERT textual statements.",
        "Step 1: Identify the underlying physical/chemical/biological system and key variables.",
        "Step 2: Apply standard NCERT principles or quantitative relations to evaluate the correct outcome.",
        "Step 3: Watch out for negative marking traps and common student misconceptions."
      ],
      importantPoints: []
    }
  ],

  formulae: [
  {
    "title": "Carbocation / Radical Hyperconjugative Structures",
    "formula": "Number of hyperconjugative structures = Number of α-hydrogens + 1",
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
    caption: "Visual summary diagram for Electronic Effects & Reaction Intermediates."
  },

  neetImportantPoints: [
  "Halogens (-Cl, -Br, -I) exhibit -I effect OVERPOWERING +M effect in electrophilic substitution reactions, so they are DEACTIVATING yet ORTHO/PARA directing.",
  "Stability of carbocations: (C₆H₅)₃C⁺ > (C₆H₅)₂CH⁺ > C₆H₅CH₂⁺ ≈ CH₂=CH-CH₂⁺ > (CH₃)₃C⁺ > (CH₃)₂CH⁺ > CH₃CH₂⁺ > CH₃⁺.",
  "Acidic strength of carboxylic acids increases with -I groups (stabilize carboxylate anion RCOO⁻) and decreases with +I groups."
],

  commonConfusions: [
  {
    "commonConfusion": "Confusing halogen behavior on benzene rings.",
    "correctFact": "Halogens are net DEACTIVATING (due to strong -I effect) but ORTHO/PARA directing (due to weak +M lone pair donation).",
    "whyItMattersForNEET": "A classical NEET trap in electrophilic substitution stability & orientation."
  }
],

  quickRevision: [
  "Carbocation stability: Benzyl > Allyl > 3° > 2° > 1° > CH₃⁺",
  "Carbanion stability: CH₃⁻ > 1° > 2° > 3°",
  "Halogens: Deactivating (-I > +M) but Ortho/Para directing"
],

  practiceQuestions: [],

  pyqs: [
  {
    "id": "pyq-eei-1",
    "year": 2023,
    "exam": "NEET UG 2023",
    "question": "Which among the following carbocations is expected to be the most stable?",
    "options": [
      "(C₆H₅)₃C⁺ (Triphenylmethyl carbocation)",
      "(CH₃)₃C⁺ (tert-Butyl carbocation)",
      "(CH₃)₂CH⁺ (Isopropyl carbocation)",
      "CH₃-CH₂⁺ (Ethyl carbocation)"
    ],
    "correctAnswer": 0,
    "explanation": "Triphenylmethyl carbocation (C₆H₅)₃C⁺ is stabilized by extensive resonance delocalization across 3 phenyl rings (9 canonical structures), overruling simple hyperconjugative stability.",
    "difficulty": "Medium",
    "conceptTested": "Resonance vs Hyperconjugation Stabilization of Carbocations",
    "marks": 4,
    "classification": "Direct",
    "verified": true,
    "topicId": "chem-electronic-effects-intermediates"
  },
  {
    "id": "pyq-eei-2",
    "year": 2022,
    "exam": "NEET UG 2022",
    "question": "Which of the following carbocations is the most stable due to hyperconjugation?",
    "options": [
      "(CH₃)₃C⁺",
      "(CH₃)₂CH⁺",
      "CH₃-CH₂⁺",
      "CH₃⁺"
    ],
    "correctAnswer": 0,
    "explanation": "Hyperconjugation stability depends directly on α-hydrogen count. (CH₃)₃C⁺ has 9 α-hydrogens, (CH₃)₂CH⁺ has 6, CH₃-CH₂⁺ has 3, and CH₃⁺ has 0.",
    "difficulty": "Easy",
    "conceptTested": "Hyperconjugation & α-Hydrogen Count in Carbocations",
    "marks": 4,
    "classification": "Direct",
    "verified": true,
    "topicId": "chem-electronic-effects-intermediates"
  },
  {
    "id": "pyq-eei-3",
    "year": 2021,
    "exam": "NEET UG 2021",
    "question": "Which of the following species acts as an ELECTROPHILE?",
    "options": [
      "BF₃ (Boron trifluoride)",
      "NH₃ (Ammonia)",
      "H₂O (Water)",
      "OH⁻ (Hydroxide ion)"
    ],
    "correctAnswer": 0,
    "explanation": "BF₃ has an incomplete octet (6 valence electrons) and a vacant 2p orbital, making it an electron-pair acceptor (electrophile). NH₃, H₂O, and OH⁻ are nucleophiles.",
    "difficulty": "Easy",
    "conceptTested": "Identification of Neutral Electrophiles vs Nucleophiles",
    "marks": 4,
    "classification": "Direct",
    "verified": true,
    "topicId": "chem-electronic-effects-intermediates"
  },
  {
    "id": "pyq-eei-4",
    "year": 2020,
    "exam": "NEET UG 2020",
    "question": "Homolytic fission of a covalent C-C bond in an organic molecule results in the formation of:",
    "options": [
      "Free Radicals",
      "Carbocations only",
      "Carbanions only",
      "Zwitterions"
    ],
    "correctAnswer": 0,
    "explanation": "Homolytic fission involves equal splitting of bonding electrons, yielding neutral species carrying an unpaired electron, known as Free Radicals.",
    "difficulty": "Easy",
    "conceptTested": "Homolytic Bond Cleavage & Free Radical Generation",
    "marks": 4,
    "classification": "Direct",
    "verified": true,
    "topicId": "chem-electronic-effects-intermediates"
  },
  {
    "id": "pyq-eei-5",
    "year": 2019,
    "exam": "NEET UG 2019",
    "question": "The correct stability order of simple alkyl carbanions is:",
    "options": [
      "CH₃⁻ > 1° > 2° > 3°",
      "3° > 2° > 1° > CH₃⁻",
      "1° > 3° > 2° > CH₃⁻",
      "3° > 1° > 2° > CH₃⁻"
    ],
    "correctAnswer": 0,
    "explanation": "In carbanions, alkyl groups donate electron density (+I effect) onto a negatively charged carbon, increasing charge density and destabilizing it. CH₃⁻ > 1° > 2° > 3°.",
    "difficulty": "Medium",
    "conceptTested": "Inductive Effect (+I) on Carbanion Stability",
    "marks": 4,
    "classification": "Direct",
    "verified": true,
    "topicId": "chem-electronic-effects-intermediates"
  },
  {
    "id": "pyq-eei-6",
    "year": 2018,
    "exam": "NEET UG 2018",
    "question": "Which of the following organic groups exhibits the strongest -I (electron-withdrawing inductive) effect?",
    "options": [
      "-NO₂",
      "-CN",
      "-COOH",
      "-F"
    ],
    "correctAnswer": 0,
    "explanation": "The established NEET order of -I effect is: -NO₂ > -CN > -COOH > -F > -Cl > -Br > -I > -OH. Nitro (-NO₂) is the strongest electron-withdrawing group.",
    "difficulty": "Medium",
    "conceptTested": "Relative Strength Order of -I Groups",
    "marks": 4,
    "classification": "Direct",
    "verified": true,
    "topicId": "chem-electronic-effects-intermediates"
  },
  {
    "id": "pyq-eei-7",
    "year": 2017,
    "exam": "NEET UG 2017",
    "question": "Hyperconjugation involves the delocalization of which type of electrons?",
    "options": [
      "σ electrons of C-H bond into empty p-orbital or π-system",
      "π electrons into another π-system",
      "Lone pair electrons into a σ-orbital",
      "σ electrons of C-C bond only"
    ],
    "correctAnswer": 0,
    "explanation": "Hyperconjugation is the delocalization of σ-electrons of an alkyl C-H bond attached directly to an unsaturated carbon or a carbon with an unshared p-orbital.",
    "difficulty": "Easy",
    "conceptTested": "Definition and Mechanism of Hyperconjugation",
    "marks": 4,
    "classification": "Direct",
    "verified": true,
    "topicId": "chem-electronic-effects-intermediates"
  },
  {
    "id": "pyq-eei-8",
    "year": 2016,
    "exam": "NEET UG 2016",
    "question": "Regarding halogens (-Cl, -Br) attached to a benzene ring, which statement correctly describes their electronic effects in electrophilic substitution?",
    "options": [
      "Deactivating due to -I effect, but Ortho/Para directing due to +M effect",
      "Activating and Ortho/Para directing due to +M effect",
      "Deactivating and Meta directing due to -I effect",
      "Activating and Meta directing due to -M effect"
    ],
    "correctAnswer": 0,
    "explanation": "In halogenobenzenes, -I effect is stronger than +M resonance donation, deactivating the ring, but +M lone pair donation stabilizes ortho/para intermediates.",
    "difficulty": "Hard",
    "conceptTested": "Halogen Anomaly in Electrophilic Aromatic Substitution (-I vs +M)",
    "marks": 4,
    "classification": "Direct",
    "verified": true,
    "topicId": "chem-electronic-effects-intermediates"
  }
]
};
