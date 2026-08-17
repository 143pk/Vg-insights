import { DetailedTopicContent } from '../../types/neet';

export const bioNomenclatureSystematicsDetails: DetailedTopicContent = {
  topicId: 'bio-nomenclature-systematics',
  topicName: 'Binomial Nomenclature & Systematics',
  subject: 'Biology',
  class: 'Class 11',
  classification: 'Diversity in Living World',
  chapter: 'The Living World',
  
  whatIsThisTopic: 'Detailed study of Binomial Nomenclature rules formulated by Carolus Linnaeus, ICBN and ICZN nomenclature codes, author citation rules, tautonyms, and the scope of Systematics.',
  
  basicIdea: [
    'Systematics is the branch of science that deals with diversity of organisms and all their comparative and evolutionary relationships (phylogeny). Derived from Latin "systema".',
    'Binomial Nomenclature is a standardized system of naming organisms using two Latin/Latinized words: Generic name + Specific epithet.',
    'Carolus Linnaeus published Binomial Nomenclature rules in "Species Plantarum" (1753) for plants and "Systema Naturae" (10th Edition, 1758) for animals.',
    'Universal rules of nomenclature regulate how scientific names are formatted, capitalized, underlined when handwritten, and italicized when printed.'
  ],
  
  importantTerms: [
    {
      term: 'Systematics',
      definition: 'Branch of study dealing with identification, nomenclature, classification, and evolutionary relationships (phylogeny) among organisms.',
      neetNote: 'Linnaeus used "Systema Naturae" as the title of his publication. Systematics = Taxonomy + Phylogeny.'
    },
    {
      term: 'Binomial Nomenclature',
      definition: 'Naming system in which every species receives a two-word scientific name: the first word indicates Genus and the second indicates Specific Epithet.',
      neetNote: 'Introduced by Carolus Linnaeus. Used worldwide to ensure every organism has only one universal scientific name.'
    },
    {
      term: 'ICBN / ICN',
      definition: 'International Code of Botanical Nomenclature (now International Code of Nomenclature for algae, fungi, and plants).',
      neetNote: 'Sets standardized rules for assigning scientific names to plants.'
    },
    {
      term: 'ICZN',
      definition: 'International Code of Zoological Nomenclature.',
      neetNote: 'Sets standardized rules for assigning scientific names to animals.'
    },
    {
      term: 'Author Citation',
      definition: 'Writing the abbreviated name of the author who first described the species after the specific epithet in Roman font (e.g., Mangifera indica Linn.).',
      neetNote: 'The author\'s name is NOT italicized and NOT underlined.'
    },
    {
      term: 'Tautonym',
      definition: 'A scientific name in which the generic name and specific epithet are identical (e.g., Naja naja - Cobra, Rattus rattus - Rat).',
      neetNote: 'Tautonyms are VALID in zoology (ICZN), but strictly INVALID / FORBIDDEN in botany (ICBN).'
    }
  ],
  
  conceptExplanation: [
    {
      heading: '1. Systematics vs Taxonomy',
      paragraphs: [
        'The word "Systematics" comes from the Latin word \'*systema*\' which means systematic arrangement of organisms.',
        'Linnaeus used \'*Systema Naturae*\' as the title of his famous publication.',
        'While Taxonomy deals with characterisation, identification, nomenclature, and classification, Systematics is broader because it incorporates evolutionary relationships (phylogeny) between organisms.',
        'Modern Systematics (Biosystematics) takes into account evolutionary history, genetic makeup, ecological roles, and cellular biochemistry.'
      ]
    },
    {
      heading: '2. Four Universal Rules of Binomial Nomenclature (NCERT)',
      paragraphs: [
        'To eliminate confusion caused by local common names, Carolus Linnaeus established Binomial Nomenclature. The four universal rules (NCERT) are:',
        '1. **Latin Language & Italics**: Biological names are generally in Latin or Latinized, regardless of their origin. They are printed in *italics*.',
        '2. **Two Words**: The first word in a biological name represents the **Genus** (Generic name), while the second word denotes the **Specific Epithet** (Species name).',
        '3. **Handwritten Rule**: Both words in a biological name, when handwritten, are **separately underlined**, or printed in *italics* to indicate their Latin origin.',
        '4. **Capitalization**: The first word representing Genus starts with a **Capital letter**, while the specific epithet starts with a **small letter** (lowercase). Example: *Mangifera indica*.'
      ],
      tables: [
        {
          headers: ['Parameter', 'Rule / Requirement', 'Correct Example', 'Incorrect Example (Violation)'],
          rows: [
            ['Language', 'Latin / Latinized', '*Mangifera indica*', 'Mangifera indian'],
            ['Printing', 'Italics', '*Solanum tuberosum*', 'Solanum tuberosum (plain)'],
            ['Handwriting', 'Separately Underlined', '<u>Mangifera</u> <u>indica</u>', '<u>Mangifera indica</u> (single line)'],
            ['Capitalization', 'Genus Capital, species small', '*Panthera leo*', '*Panthera Leo* or *panthera leo*']
          ]
        }
      ]
    },
    {
      heading: '3. Author Citation & Special Conventions',
      paragraphs: [
        'Author Citation: Name of the author who first published the scientific description appears after the specific epithet in abbreviated form, written in Roman (upright) font (not in italics).',
        'Example: *Mangifera indica* Linn. indicates that this species was first described by Carolus Linnaeus.',
        'Tautonyms: When generic name and specific epithet are identical:',
        '• Valid in Animal Nomenclature (ICZN): *Naja naja* (Indian Cobra), *Rattus rattus* (Roof Rat), *Catla catla* (Freshwater Fish).',
        '• Invalid in Plant Nomenclature (ICBN): Tautonyms are strictly prohibited for plants (e.g., *Mangifera mangifera* is illegal).'
      ],
      importantPoints: [
        'Author name is written in Roman font at the end, e.g. *Mangifera indica* Linn.',
        'Author name is neither italicized nor underlined.',
        'Tautonyms allowed in ICZN (animals), prohibited in ICBN (plants).'
      ]
    }
  ],

  formulae: [],

  neetImportantPoints: [
    'Binomial Nomenclature proposed by Carolus Linnaeus.',
    'Plants named according to ICBN rules; Animals named according to ICZN rules.',
    'Generic name starts with Capital letter; Specific epithet starts with small letter.',
    'Printed in Italics; when handwritten, separately underlined.',
    'Author citation appears at the end in abbreviated Roman font (*Mangifera indica* Linn.).',
    'Tautonyms are valid for animals (*Naja naja*), but invalid for plants.',
    'Linnaeus books: "Species Plantarum" (1753 - Plants) and "Systema Naturae" (10th ed, 1758 - Animals).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Author name in binomial nomenclature should be printed in italics.',
      correctFact: 'Author name is printed in ROMAN (upright) font at the end of the scientific name in abbreviated form (e.g. Linn.).',
      whyItMattersForNEET: 'Direct question in NEET 2019.'
    },
    {
      commonConfusion: 'When handwritten, a scientific name should be underlined with a single continuous line.',
      correctFact: 'Both words (Genus and Specific epithet) must be SEPARATELY underlined.',
      whyItMattersForNEET: 'Frequent option trap in NEET rules of nomenclature questions.'
    },
    {
      commonConfusion: 'Tautonyms are allowed in plant classification.',
      correctFact: 'Tautonyms are allowed ONLY in animal classification (ICZN), and strictly forbidden in plant classification (ICBN).',
      whyItMattersForNEET: 'High-yield assertion-reason topic.'
    }
  ],

  quickRevision: [
    'Binomial = Genus (Capital) + Specific Epithet (lowercase).',
    'Print = Italics; Handwritten = Separately Underlined.',
    'Author Citation = Roman font at end (*Mangifera indica* Linn.).',
    'ICBN = Botanical; ICZN = Zoological.',
    'Tautonyms = Valid in animals (*Naja naja*), invalid in plants.',
    'Linnaeus books = "Systema Naturae" & "Species Plantarum".'
  ],

  practiceQuestions: [
  {
    "id": "prac-nom-1",
    "question": "Which of the following is CONTRARY to the universal rules of nomenclature?",
    "options": [
      "Biological names are written in Latin and italicized",
      "When written by hand, generic and specific names are separately underlined",
      "Biological names can be written in any language of preference",
      "First word represents genus starting with capital letter"
    ],
    "correctAnswer": 2,
    "explanation": "Biological names MUST be in Latin or Latinized regardless of their origin. Writing biological names in any random language is contrary to international nomenclature rules.",
    "difficulty": "Easy",
    "conceptTested": "Universal rules of nomenclature"
  },
  {
    "id": "prac-nom-2",
    "question": "Select the correct statement regarding Tautonyms:",
    "options": [
      "They are allowed in both plant and animal nomenclature",
      "They are allowed in plant nomenclature but forbidden in animals",
      "They are allowed in animal nomenclature but forbidden in plants",
      "They are forbidden in both plant and animal nomenclature"
    ],
    "correctAnswer": 2,
    "explanation": "Tautonyms (identical generic name and specific epithet, e.g. Naja naja) are valid under ICZN (zoology) but strictly forbidden under ICBN (botany).",
    "difficulty": "Medium",
    "conceptTested": "Tautonyms rule"
  },
  {
    "id": "prac-bionomenclaturesystematics-3",
    "question": "Regarding Binomial Nomenclature & Systematics, which of the following statements correctly resolves a common misconception about \"Author name in binomial nomenclature should be printed in italics.\"?",
    "options": [
      "Author name is printed in ROMAN (upright) font at the end of the scientific name in abbreviated form (e.g. Linn.).",
      "Incorrect assumption: Author name in binomial nomenclature should be printed in italics.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Author name is printed in ROMAN (upright) font at the end of the scientific name in abbreviated form (e.g. Linn.).. Direct question in NEET 2019.",
    "difficulty": "Medium",
    "conceptTested": "Binomial Nomenclature & Systematics - Conceptual Clarity"
  },
  {
    "id": "prac-bionomenclaturesystematics-4",
    "question": "Regarding Binomial Nomenclature & Systematics, which of the following statements correctly resolves a common misconception about \"When handwritten, a scientific name should be underlined with a single continuous line.\"?",
    "options": [
      "Both words (Genus and Specific epithet) must be SEPARATELY underlined.",
      "Incorrect assumption: When handwritten, a scientific name should be underlined with a single continuous line.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Both words (Genus and Specific epithet) must be SEPARATELY underlined.. Frequent option trap in NEET rules of nomenclature questions.",
    "difficulty": "Medium",
    "conceptTested": "Binomial Nomenclature & Systematics - Conceptual Clarity"
  },
  {
    "id": "prac-bionomenclaturesystematics-5",
    "question": "Regarding Binomial Nomenclature & Systematics, which of the following statements correctly resolves a common misconception about \"Tautonyms are allowed in plant classification.\"?",
    "options": [
      "Tautonyms are allowed ONLY in animal classification (ICZN), and strictly forbidden in plant classification (ICBN).",
      "Incorrect assumption: Tautonyms are allowed in plant classification.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Tautonyms are allowed ONLY in animal classification (ICZN), and strictly forbidden in plant classification (ICBN).. High-yield assertion-reason topic.",
    "difficulty": "Medium",
    "conceptTested": "Binomial Nomenclature & Systematics - Conceptual Clarity"
  },
  {
    "id": "prac-bionomenclaturesystematics-6",
    "question": "In the study of Binomial Nomenclature & Systematics, what is the exact definition and significance of \"Systematics\"?",
    "options": [
      "Branch of study dealing with identification, nomenclature, classification, and evolutionary relationships (phylogeny) among organisms.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Branch of study dealing with identification, nomenclature, classification, and evolutionary relationships (phylogeny) among organisms.. Linnaeus used \"Systema Naturae\" as the title of his publication. Systematics = Taxonomy + Phylogeny.",
    "difficulty": "Easy",
    "conceptTested": "Systematics definition"
  },
  {
    "id": "prac-bionomenclaturesystematics-7",
    "question": "In the study of Binomial Nomenclature & Systematics, what is the exact definition and significance of \"Binomial Nomenclature\"?",
    "options": [
      "Naming system in which every species receives a two-word scientific name: the first word indicates Genus and the second indicates Specific Epithet.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Naming system in which every species receives a two-word scientific name: the first word indicates Genus and the second indicates Specific Epithet.. Introduced by Carolus Linnaeus. Used worldwide to ensure every organism has only one universal scientific name.",
    "difficulty": "Easy",
    "conceptTested": "Binomial Nomenclature definition"
  },
  {
    "id": "prac-bionomenclaturesystematics-8",
    "question": "In the study of Binomial Nomenclature & Systematics, what is the exact definition and significance of \"ICBN / ICN\"?",
    "options": [
      "International Code of Botanical Nomenclature (now International Code of Nomenclature for algae, fungi, and plants).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "International Code of Botanical Nomenclature (now International Code of Nomenclature for algae, fungi, and plants).. Sets standardized rules for assigning scientific names to plants.",
    "difficulty": "Easy",
    "conceptTested": "ICBN / ICN definition"
  },
  {
    "id": "prac-bionomenclaturesystematics-9",
    "question": "In the study of Binomial Nomenclature & Systematics, what is the exact definition and significance of \"ICZN\"?",
    "options": [
      "International Code of Zoological Nomenclature.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "International Code of Zoological Nomenclature.. Sets standardized rules for assigning scientific names to animals.",
    "difficulty": "Easy",
    "conceptTested": "ICZN definition"
  },
  {
    "id": "prac-bionomenclaturesystematics-10",
    "question": "In the study of Binomial Nomenclature & Systematics, what is the exact definition and significance of \"Author Citation\"?",
    "options": [
      "Writing the abbreviated name of the author who first described the species after the specific epithet in Roman font (e.g., Mangifera indica Linn.).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Writing the abbreviated name of the author who first described the species after the specific epithet in Roman font (e.g., Mangifera indica Linn.).. The author's name is NOT italicized and NOT underlined.",
    "difficulty": "Easy",
    "conceptTested": "Author Citation definition"
  }
],
  pyqs: [
    {
      id: 'pyq-nom-1',
      year: 2016,
      exam: 'NEET 2016 (Phase 1)',
      question: 'Nomenclature is governed by certain universal rules. Which one of the following is contrary to the rules of nomenclature?',
      options: [
        'The names are written in Latin and are italicised',
        'When written by hand the names are to be underlined',
        'Biological names can be written in any language',
        'The first word in a biological name represents the genus name and the second is a specific epithet'
      ],
      correctAnswer: 2,
      explanation: 'Biological names are strictly Latinized or derived from Latin, irrespective of their origin. They cannot be written in any arbitrary language.',
      topicId: 'bio-nomenclature-systematics',
      difficulty: 'Medium',
      conceptTested: 'Universal rules of nomenclature',
      ncertReference: 'NCERT Class 11 Biology, Chapter 1, Page 7',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-nom-2',
      year: 2019,
      exam: 'NEET 2019',
      question: 'Select the correctly written scientific name of Mango which was first described by Carolus Linnaeus.',
      options: [
        'Mangifera Indica',
        'Mangifera indica Car. Linn.',
        'Mangifera indica Linn.',
        'Mangifera indica'
      ],
      correctAnswer: 2,
      explanation: 'According to NCERT, author citation appears at the end of the specific epithet in abbreviated form in Roman font: "Mangifera indica Linn."',
      topicId: 'bio-nomenclature-systematics',
      difficulty: 'Easy',
      conceptTested: 'Author citation rule in Binomial Nomenclature',
      ncertReference: 'NCERT Class 11 Biology, Chapter 1, Page 7',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Binomial Nomenclature & Systematics',
    confidenceLabel: 'HIGH',
    confidenceText: 'Regularly tested in NEET questions on nomenclature rules, Linnaeus contributions, and scientific name formatting.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 8,
    totalDirectPyqs: 8,
    totalHistoricalMarks: 32,
    averageDirectPyqsPerPaper: 0.53,
    maxDirectPyqsInSinglePaper: 1,
    minDirectPyqsInSinglePaper: 0,
    minDirectMarks: 0,
    maxDirectMarks: 4,
    avgDirectMarksPerPaper: 2.12,
    whatThisMeansForYou: 'Learn all four NCERT rules of Binomial Nomenclature, author citation format, ICBN/ICZN full forms, and tautonyms rule.',
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 - 4 Marks',
    weightagePercentage: 1.8,
    expectedQuestionsCount: 1,
    totalMarksPotential: 4,
    historicalFrequencyYears: '2013, 2016, 2019, 2020, 2023',
    trendAnalysis: 'Focuses on identifying true/false statements regarding nomenclature rules and scientific name conventions.',
    preparationStrategy: 'Read NCERT pages 6 and 7 carefully. Remember formatting details like separate underlining and Roman font for author citation.'
  }
};
