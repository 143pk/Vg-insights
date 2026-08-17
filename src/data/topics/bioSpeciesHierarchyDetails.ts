import { DetailedTopicContent } from '../../types/neet';

export const bioSpeciesHierarchyDetails: DetailedTopicContent = {
  topicId: 'bio-species-hierarchy',
  topicName: 'Concept of Species & Taxonomical Hierarchy',
  subject: 'Biology',
  class: 'Class 11',
  classification: 'Diversity in Living World',
  chapter: 'The Living World',
  
  whatIsThisTopic: 'Covers Ernst Mayr\'s Biological Species Concept, the 7 obligate categories of Taxonomic Hierarchy (Kingdom to Species), rules governing common characteristics across categories, and complete memorization of NCERT Table 1.1 (Human, Housefly, Mango, Wheat).',
  
  basicIdea: [
    'Species is the basic, fundamental, lowest unit of taxonomic classification.',
    'Ernst Mayr defined biological species as a group of naturally interbreeding populations that are reproductively isolated from other such groups.',
    'Taxonomic Hierarchy is the arrangement of various categories in a definite order (ascending or descending).',
    'The 7 obligate categories in descending order are: Kingdom -> Phylum/Division -> Class -> Order -> Family -> Genus -> Species.',
    'Rule of Hierarchy: As we move UP from Species to Kingdom, the number of common characteristics DECREASES, while general similarities increase. Moving DOWN from Kingdom to Species, the number of common characteristics INCREASES.'
  ],
  
  importantTerms: [
    {
      term: 'Biological Species Concept',
      definition: 'Formulated by Ernst Mayr ("Darwin of the 20th Century"): Species is a group of interbreeding natural populations that are reproductively isolated from other such groups.',
      neetNote: 'Species share maximum common morphological, physiological, and genetic characteristics.'
    },
    {
      term: 'Taxonomic Category',
      definition: 'A rank or status in the taxonomic hierarchy (e.g., Species, Genus, Family, Order, Class, Phylum, Kingdom).',
      neetNote: 'Categories are abstract ranks; they do not represent physical organisms.'
    },
    {
      term: 'Taxonomic Hierarchy',
      definition: 'The ascending or descending arrangement of all taxonomic categories.',
      neetNote: 'Obligate categories = 7. Intermediate categories (like Sub-species, Sub-family, Super-class) are optional.'
    },
    {
      term: 'Family',
      definition: 'A category containing a group of related genera with less similarity compared to genus level.',
      neetNote: 'Families are characterized on the basis of BOTH vegetative and reproductive features of plant species.'
    },
    {
      term: 'NCERT Table 1.1',
      definition: 'Crucial table in NCERT detailing taxonomy of Human, Housefly, Mango, and Wheat.',
      neetNote: 'Guaranteed high-yield source of matching questions in NEET UG.'
    }
  ],
  
  conceptExplanation: [
    {
      heading: '1. Concept of Species & Ernst Mayr\'s Definition',
      paragraphs: [
        'Species is the basic unit of taxonomy. Members of a species can interbreed freely in nature to produce fertile offspring under natural conditions.',
        'Ernst Mayr (1904–2004), recipient of the Balzan Prize, International Prize for Biology, and Crafoord Prize (known as the "Triple Crown of Biology"), pioneered the modern biological concept of species based on reproductive isolation.'
      ]
    },
    {
      heading: '2. The Seven Obligate Categories of Hierarchy',
      paragraphs: [
        'Organisms are classified into seven major obligate categories arranged hierarchically:',
        '1. **Species**: Basic unit; maximum common features (e.g., *sapiens*, *indica*, *domestica*, *tuberosum*).',
        '2. **Genus**: Group of related species (e.g., *Panthera* includes lion, leopard, tiger; *Solanum* includes potato, tomato, brinjal).',
        '3. **Family**: Group of related genera. Characterized on vegetative and floral characters (e.g., Solanaceae includes *Solanum*, *Petunia*, *Datura*; Felidae includes *Panthera* and *Felis*).',
        '4. **Order**: Group of related families with fewer common characters (e.g., Polymoniales includes Solanaceae & Convolvulaceae based on floral characters; Carnivora includes Felidae & Canidae).',
        '5. **Class**: Group of related orders (e.g., Mammalia includes Order Primata - human/monkey and Order Carnivora - tiger/cat/dog).',
        '6. **Phylum / Division**: Group of related classes. Phylum is used for animals, Division for plants (e.g., Chordata for animals with notochord; Angiospermae for flowering plants).',
        '7. **Kingdom**: Highest category grouping all related phyla/divisions (e.g., Kingdom Animalia, Kingdom Plantae).'
      ],
      tables: [
        {
          headers: ['Direction', 'Movement', 'Common Characters', 'General Features / Complexity', 'Specific Similarity'],
          rows: [
            ['Ascending', 'Species -> Kingdom', 'DECREASES', 'Increases (more general)', 'Decreases'],
            ['Descending', 'Kingdom -> Species', 'INCREASES', 'Decreases (more specific)', 'Increases']
          ]
        }
      ]
    },
    {
      heading: '3. Complete Master NCERT Table 1.1 Breakdown',
      paragraphs: [
        'NEET directly asks questions from Table 1.1 of NCERT Class 11 Biology. Every student must memorize all entries perfectly:'
      ],
      tables: [
        {
          headers: ['Common Name', 'Biological Name', 'Genus', 'Family', 'Order', 'Class', 'Phylum / Division'],
          rows: [
            ['Man', 'Homo sapiens', 'Homo', 'Hominidae', 'Primata', 'Mammalia', 'Chordata'],
            ['Housefly', 'Musca domestica', 'Musca', 'Muscidae', 'Diptera', 'Insecta', 'Arthropoda'],
            ['Mango', 'Mangifera indica', 'Mangifera', 'Anacardiaceae', 'Sapindales', 'Dicotyledonae', 'Angiospermae'],
            ['Wheat', 'Triticum aestivum', 'Triticum', 'Poaceae', 'Poales', 'Monocotyledonae', 'Angiospermae']
          ]
        }
      ],
      importantPoints: [
        'Housefly Family = Muscidae, Order = Diptera, Class = Insecta, Phylum = Arthropoda.',
        'Mango Family = Anacardiaceae, Order = Sapindales, Class = Dicotyledonae, Division = Angiospermae.',
        'Wheat Family = Poaceae (Gramineae), Order = Poales.',
        'Human Order = Primata, Family = Hominidae.'
      ]
    }
  ],

  formulae: [],

  neetImportantPoints: [
    'Ernst Mayr defined biological species based on reproductive isolation.',
    'As we go higher from species to kingdom, the number of common characteristics decreases.',
    'As we go lower from kingdom to species, the number of common characteristics increases.',
    'Plant families are characterized on BOTH vegetative and reproductive features.',
    'Orders like Polymoniales are identified mainly based on floral characters.',
    'Phylum is used for animals, Division is used for plants.',
    'Housefly belongs to Order Diptera and Family Muscidae.',
    'Mango belongs to Family Anacardiaceae and Order Sapindales.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'As we move up from species to kingdom, common characteristics increase.',
      correctFact: 'Common characteristics DECREASE as you move up from species to kingdom. At kingdom level, organisms share very few specific characters.',
      whyItMattersForNEET: 'One of the most frequently asked assertion-reason / true-false questions in NEET.'
    },
    {
      commonConfusion: 'Housefly belongs to Order Muscidae.',
      correctFact: 'Muscidae is the Family (ends in -idae); Diptera is the Order.',
      whyItMattersForNEET: 'Direct option trap in NEET matching questions.'
    },
    {
      commonConfusion: 'Plant families are distinguished only by vegetative characters.',
      correctFact: 'NCERT states plant families are characterized based on BOTH vegetative and reproductive features.',
      whyItMattersForNEET: 'High-yield true/false statement.'
    }
  ],

  quickRevision: [
    'Obligate Hierarchy = S-G-F-O-C-P/D-K (Species to Kingdom).',
    'Moving UP -> Common characters DECREASE.',
    'Moving DOWN -> Common characters INCREASE.',
    'Ernst Mayr = Biological Species Concept (reproductive isolation).',
    'Housefly = Musca domestica | Muscidae | Diptera | Insecta | Arthropoda.',
    'Mango = Mangifera indica | Anacardiaceae | Sapindales | Dicotyledonae | Angiospermae.',
    'Wheat = Triticum aestivum | Poaceae | Poales | Monocotyledonae | Angiospermae.'
  ],

  practiceQuestions: [
  {
    "id": "prac-hier-1",
    "question": "Match Column I with Column II for Housefly classification:\nColumn I: (A) Family, (B) Order, (C) Class, (D) Phylum\nColumn II: (i) Diptera, (ii) Arthropoda, (iii) Muscidae, (iv) Insecta",
    "options": [
      "A-(iii), B-(i), C-(iv), D-(ii)",
      "A-(i), B-(iii), C-(iv), D-(ii)",
      "A-(iii), B-(iv), C-(i), D-(ii)",
      "A-(iv), B-(i), C-(iii), D-(ii)"
    ],
    "correctAnswer": 0,
    "explanation": "Housefly: Family = Muscidae (iii), Order = Diptera (i), Class = Insecta (iv), Phylum = Arthropoda (ii). Hence A-(iii), B-(i), C-(iv), D-(ii).",
    "difficulty": "Medium",
    "conceptTested": "NCERT Table 1.1 Housefly taxonomy"
  },
  {
    "id": "prac-hier-2",
    "question": "Which taxonomic category contains organisms sharing the HIGHEST number of common characteristics?",
    "options": [
      "Kingdom",
      "Class",
      "Order",
      "Species"
    ],
    "correctAnswer": 3,
    "explanation": "Species is the lowest basic taxonomic category and contains members sharing the maximum number of common characteristics.",
    "difficulty": "Easy",
    "conceptTested": "Taxonomic hierarchy common characters rule"
  },
  {
    "id": "prac-biospecieshierarchy-3",
    "question": "Regarding Concept of Species & Taxonomical Hierarchy, which of the following statements correctly resolves a common misconception about \"As we move up from species to kingdom, common characteristics increase.\"?",
    "options": [
      "Common characteristics DECREASE as you move up from species to kingdom. At kingdom level, organisms share very few specific characters.",
      "Incorrect assumption: As we move up from species to kingdom, common characteristics increase.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Common characteristics DECREASE as you move up from species to kingdom. At kingdom level, organisms share very few specific characters.. One of the most frequently asked assertion-reason / true-false questions in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Concept of Species & Taxonomical Hierarchy - Conceptual Clarity"
  },
  {
    "id": "prac-biospecieshierarchy-4",
    "question": "Regarding Concept of Species & Taxonomical Hierarchy, which of the following statements correctly resolves a common misconception about \"Housefly belongs to Order Muscidae.\"?",
    "options": [
      "Muscidae is the Family (ends in -idae); Diptera is the Order.",
      "Incorrect assumption: Housefly belongs to Order Muscidae.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Muscidae is the Family (ends in -idae); Diptera is the Order.. Direct option trap in NEET matching questions.",
    "difficulty": "Medium",
    "conceptTested": "Concept of Species & Taxonomical Hierarchy - Conceptual Clarity"
  },
  {
    "id": "prac-biospecieshierarchy-5",
    "question": "Regarding Concept of Species & Taxonomical Hierarchy, which of the following statements correctly resolves a common misconception about \"Plant families are distinguished only by vegetative characters.\"?",
    "options": [
      "NCERT states plant families are characterized based on BOTH vegetative and reproductive features.",
      "Incorrect assumption: Plant families are distinguished only by vegetative characters.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT states plant families are characterized based on BOTH vegetative and reproductive features.. High-yield true/false statement.",
    "difficulty": "Medium",
    "conceptTested": "Concept of Species & Taxonomical Hierarchy - Conceptual Clarity"
  },
  {
    "id": "prac-biospecieshierarchy-6",
    "question": "In the study of Concept of Species & Taxonomical Hierarchy, what is the exact definition and significance of \"Biological Species Concept\"?",
    "options": [
      "Formulated by Ernst Mayr (\"Darwin of the 20th Century\"): Species is a group of interbreeding natural populations that are reproductively isolated from other such groups.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Formulated by Ernst Mayr (\"Darwin of the 20th Century\"): Species is a group of interbreeding natural populations that are reproductively isolated from other such groups.. Species share maximum common morphological, physiological, and genetic characteristics.",
    "difficulty": "Easy",
    "conceptTested": "Biological Species Concept definition"
  },
  {
    "id": "prac-biospecieshierarchy-7",
    "question": "In the study of Concept of Species & Taxonomical Hierarchy, what is the exact definition and significance of \"Taxonomic Category\"?",
    "options": [
      "A rank or status in the taxonomic hierarchy (e.g., Species, Genus, Family, Order, Class, Phylum, Kingdom).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A rank or status in the taxonomic hierarchy (e.g., Species, Genus, Family, Order, Class, Phylum, Kingdom).. Categories are abstract ranks; they do not represent physical organisms.",
    "difficulty": "Easy",
    "conceptTested": "Taxonomic Category definition"
  },
  {
    "id": "prac-biospecieshierarchy-8",
    "question": "In the study of Concept of Species & Taxonomical Hierarchy, what is the exact definition and significance of \"Taxonomic Hierarchy\"?",
    "options": [
      "The ascending or descending arrangement of all taxonomic categories.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The ascending or descending arrangement of all taxonomic categories.. Obligate categories = 7. Intermediate categories (like Sub-species, Sub-family, Super-class) are optional.",
    "difficulty": "Easy",
    "conceptTested": "Taxonomic Hierarchy definition"
  },
  {
    "id": "prac-biospecieshierarchy-9",
    "question": "In the study of Concept of Species & Taxonomical Hierarchy, what is the exact definition and significance of \"Family\"?",
    "options": [
      "A category containing a group of related genera with less similarity compared to genus level.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A category containing a group of related genera with less similarity compared to genus level.. Families are characterized on the basis of BOTH vegetative and reproductive features of plant species.",
    "difficulty": "Easy",
    "conceptTested": "Family definition"
  },
  {
    "id": "prac-biospecieshierarchy-10",
    "question": "In the study of Concept of Species & Taxonomical Hierarchy, what is the exact definition and significance of \"NCERT Table 1.1\"?",
    "options": [
      "Crucial table in NCERT detailing taxonomy of Human, Housefly, Mango, and Wheat.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Crucial table in NCERT detailing taxonomy of Human, Housefly, Mango, and Wheat.. Guaranteed high-yield source of matching questions in NEET UG.",
    "difficulty": "Easy",
    "conceptTested": "NCERT Table 1.1 definition"
  }
],
  pyqs: [
    {
      id: 'pyq-hier-1',
      year: 2021,
      exam: 'NEET 2021',
      question: 'Which one of the following belongs to the family Muscidae?',
      options: [
        'Housefly',
        'Firefly',
        'Grasshopper',
        'Cockroach'
      ],
      correctAnswer: 0,
      explanation: 'According to NCERT Table 1.1, Housefly (Musca domestica) belongs to the family Muscidae.',
      topicId: 'bio-species-hierarchy',
      difficulty: 'Easy',
      conceptTested: 'NCERT Table 1.1 Housefly classification',
      ncertReference: 'NCERT Class 11 Biology, Chapter 1, Page 11, Table 1.1',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-hier-2',
      year: 2022,
      exam: 'NEET 2022',
      question: 'Which of the following statements is correct regarding the taxonomic categories?',
      options: [
        'Species is the highest category in taxonomy',
        'As we go higher from species to kingdom, the number of common characteristics goes on decreasing',
        'Kingdom is the lowest category in taxonomy',
        'As we go higher from species to kingdom, the number of common characteristics goes on increasing'
      ],
      correctAnswer: 1,
      explanation: 'As we move up the taxonomic hierarchy from species to kingdom, the number of shared common characteristics decreases, making overall group determination more general.',
      topicId: 'bio-species-hierarchy',
      difficulty: 'Medium',
      conceptTested: 'Taxonomic hierarchy rules',
      ncertReference: 'NCERT Class 11 Biology, Chapter 1, Page 10',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Concept of Species & Taxonomical Hierarchy',
    confidenceLabel: 'HIGH',
    confidenceText: 'Top high-yield topic in Chapter 1. Frequently tested via NCERT Table 1.1 matchings and hierarchy rules.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 9,
    totalDirectPyqs: 10,
    totalHistoricalMarks: 40,
    averageDirectPyqsPerPaper: 0.67,
    maxDirectPyqsInSinglePaper: 2,
    minDirectPyqsInSinglePaper: 0,
    minDirectMarks: 0,
    maxDirectMarks: 8,
    avgDirectMarksPerPaper: 2.67,
    whatThisMeansForYou: 'Memorize NCERT Table 1.1 completely (Human, Housefly, Mango, Wheat). Remember that common characters decrease going up to kingdom.',
    typicalContributionMarks: 4,
    historicalMarksRangeText: '4 - 8 Marks',
    weightagePercentage: 2.2,
    expectedQuestionsCount: 1,
    totalMarksPotential: 4,
    historicalFrequencyYears: '2012, 2014, 2017, 2018, 2021, 2022, 2023',
    trendAnalysis: 'Consistently tested through direct matching questions from NCERT Table 1.1 and true/false statements about hierarchy rules.',
    preparationStrategy: 'Master NCERT Table 1.1 line-by-line. Practice matching family, order, class, and phylum/division for all 4 organisms.'
  }
};
