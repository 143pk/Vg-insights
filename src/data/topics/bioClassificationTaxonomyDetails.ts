import { DetailedTopicContent } from '../../types/neet';

export const bioClassificationTaxonomyDetails: DetailedTopicContent = {
  topicId: 'bio-classification-taxonomy',
  topicName: 'Need for Classification & Taxonomy',
  subject: 'Biology',
  class: 'Class 11',
  classification: 'Diversity in Living World',
  chapter: 'The Living World',
  
  whatIsThisTopic: 'Covers the essential need for biological classification, fundamental processes of taxonomy (Characterisation, Identification, Nomenclature, Classification), and the shift from classical morphology-based taxonomy to modern biosystematics.',
  
  basicIdea: [
    'Classification is the process by which anything is grouped into convenient categories based on some easily observable characters.',
    'Taxonomy is the branch of science dealing with the identification, nomenclature, and classification of organisms.',
    'The four fundamental processes of taxonomy according to NCERT are: Characterisation, Identification, Nomenclature, and Classification (CINC).',
    'Modern taxonomic studies utilize external and internal structure, cell structure (cytology), developmental processes, and ecological information of organisms.'
  ],
  
  importantTerms: [
    {
      term: 'Taxonomy',
      definition: 'Branch of biology concerned with characterisation, identification, nomenclature, and classification of organisms.',
      neetNote: 'Term "Taxonomy" was coined by A.P. de Candolle. Carolus Linnaeus is known as the Father of Taxonomy.'
    },
    {
      term: 'Characterisation',
      definition: 'Understanding and describing the morphological, anatomical, cellular, and physiological traits of an organism.',
      neetNote: 'The first step in taxonomic study of an unknown organism.'
    },
    {
      term: 'Identification',
      definition: 'Determining whether an unknown organism belongs to a known taxo group by matching its characters.',
      neetNote: 'Correct identification requires thorough knowledge of existing taxonomical records.'
    },
    {
      term: 'Taxon (plural: Taxa)',
      definition: 'A concrete biological entity or group of real organisms occupying a category at any level in taxonomic hierarchy (e.g., Mammals, Insects, Plants).',
      neetNote: 'Taxon indicates real biological categories at different levels. "Dogs", "Mammals", "Animals" are all taxa at different levels.'
    },
    {
      term: 'Biosystematics / Modern Taxonomy',
      definition: 'Taxonomic studies based on evolutionary history (phylogeny), ecology, cytology, anatomy, and biochemistry.',
      neetNote: 'Introduced by Julian Huxley (1940) to incorporate genetics and evolutionary relationships into classical taxonomy.'
    }
  ],
  
  conceptExplanation: [
    {
      heading: '1. Need for Biological Classification',
      paragraphs: [
        'With 1.7 to 1.8 million species described and millions more yet to be discovered, it is impossible to study every organism individually. Biological classification organizes organisms into a structured framework.',
        'Benefits of Classification:',
        '• Makes the study of millions of organisms organized, easy, and systematic.',
        '• Helps in identifying new organisms by comparing them with known groups.',
        '• Reveals evolutionary relationships and interrelationships between different groups of organisms.',
        '• Allows accurate prediction of traits based on group characteristics.'
      ]
    },
    {
      heading: '2. Four Fundamental Processes of Taxonomy',
      paragraphs: [
        'Taxonomy is not merely naming organisms; it is a systematic four-step process:',
        '1. Characterisation: Listing all observable features (external morphology, internal anatomy, cell structure, developmental pattern).',
        '2. Identification: Correctly determining that an unknown specimen is identical to an already known organism or represents a new species.',
        '3. Nomenclature: Assigning a standardized, universally accepted scientific name to the organism according to international rules.',
        '4. Classification: Placing the organism into a convenient category (Taxon) based on shared traits.'
      ],
      tables: [
        {
          headers: ['Step', 'Process Name', 'Key Activity', 'NCERT Significance'],
          rows: [
            ['1', 'Characterisation', 'Observing & listing morphological / anatomical traits', 'First prerequisite step'],
            ['2', 'Identification', 'Matching traits with existing herbarium / records', 'Determines if specimen is known or new'],
            ['3', 'Nomenclature', 'Naming as per ICBN / ICZN rules', 'Ensures one name worldwide'],
            ['4', 'Classification', 'Grouping into hierarchical categories (Taxa)', 'Simplifies diversity study']
          ]
        }
      ]
    },
    {
      heading: '3. Classical Taxonomy vs Modern Biosystematics',
      paragraphs: [
        'Classical Taxonomy (Alpha Taxonomy) relied almost exclusively on external morphological characters (like flower color, leaf shape, or habit). It treated species as static, unchanging entities (typological concept).',
        'Modern Taxonomy (Biosystematics / Omega Taxonomy) considers organisms as dynamic and evolving. It uses multiple lines of evidence: internal anatomy, embryology, cell structure (cytology), chromosome count/behaviour (cytotaxonomy), chemical constituents (chemotaxonomy), ecological interactions, and evolutionary lineage (phylogeny).'
      ],
      importantPoints: [
        'Classical taxonomy = Based mainly on external morphology.',
        'Modern taxonomy = Based on external + internal structure, cytology, development, and ecology.',
        'Taxon refers to actual living groups (e.g., Angiosperms, Diptera, Felidae).'
      ]
    }
  ],

  formulae: [],

  neetImportantPoints: [
    'Taxonomy processes according to NCERT: Characterisation -> Identification -> Nomenclature -> Classification.',
    'Term "Taxonomy" coined by A.P. de Candolle.',
    'Carolus Linnaeus = Father of Taxonomy.',
    'Taxon represents real biological entities at any level (e.g. "Mammalia" or "Insecta").',
    'Category represents an abstract rank or status in hierarchy (e.g. "Class" or "Order").',
    'Modern taxonomy incorporates ecological information, developmental processes, cytology, and internal anatomy.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Taxon and Category are identical terms.',
      correctFact: 'Category is an abstract rank (e.g., Class, Family), whereas Taxon refers to the actual group of organisms occupying that category (e.g., Mammalia, Solanaceae).',
      whyItMattersForNEET: 'Frequent conceptual question in NEET.'
    },
    {
      commonConfusion: 'Classical taxonomy considered evolutionary relationships.',
      correctFact: 'Classical taxonomy was based purely on morphological similarities; evolutionary relationships (phylogeny) were introduced in modern biosystematics.',
      whyItMattersForNEET: 'High-yield true/false assertion option.'
    }
  ],

  quickRevision: [
    'Four steps of taxonomy = CINC (Characterisation, Identification, Nomenclature, Classification).',
    'Father of Taxonomy = Carolus Linnaeus.',
    'Taxon = Concrete biological group; Category = Abstract hierarchical rank.',
    'Modern taxonomy uses cytology, anatomy, embryology, and ecology.'
  ],

  practiceQuestions: [
  {
    "id": "prac-class-1",
    "question": "Which of the following represents the correct sequential order of basic processes of taxonomy?",
    "options": [
      "Identification -> Characterisation -> Classification -> Nomenclature",
      "Characterisation -> Identification -> Nomenclature -> Classification",
      "Nomenclature -> Identification -> Characterisation -> Classification",
      "Classification -> Characterisation -> Identification -> Nomenclature"
    ],
    "correctAnswer": 1,
    "explanation": "According to NCERT, the fundamental processes of taxonomy are Characterisation, Identification, Nomenclature, and Classification in sequence.",
    "difficulty": "Easy",
    "conceptTested": "Taxonomic processes sequence"
  },
  {
    "id": "prac-class-2",
    "question": "The term \"Taxon\" refers to:",
    "options": [
      "A type of living organism only",
      "A rank in taxonomic hierarchy",
      "A group of real organisms belonging to any taxonomic category",
      "A category used in plant classification only"
    ],
    "correctAnswer": 2,
    "explanation": "Taxon represents a real, concrete group of living organisms at any category level (e.g., Dogs, Mammals, Plants).",
    "difficulty": "Medium",
    "conceptTested": "Definition of Taxon"
  },
  {
    "id": "prac-bioclassificationtaxonomy-3",
    "question": "Regarding Need for Classification & Taxonomy, which of the following statements correctly resolves a common misconception about \"Taxon and Category are identical terms.\"?",
    "options": [
      "Category is an abstract rank (e.g., Class, Family), whereas Taxon refers to the actual group of organisms occupying that category (e.g., Mammalia, Solanaceae).",
      "Incorrect assumption: Taxon and Category are identical terms.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Category is an abstract rank (e.g., Class, Family), whereas Taxon refers to the actual group of organisms occupying that category (e.g., Mammalia, Solanaceae).. Frequent conceptual question in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Need for Classification & Taxonomy - Conceptual Clarity"
  },
  {
    "id": "prac-bioclassificationtaxonomy-4",
    "question": "Regarding Need for Classification & Taxonomy, which of the following statements correctly resolves a common misconception about \"Classical taxonomy considered evolutionary relationships.\"?",
    "options": [
      "Classical taxonomy was based purely on morphological similarities; evolutionary relationships (phylogeny) were introduced in modern biosystematics.",
      "Incorrect assumption: Classical taxonomy considered evolutionary relationships.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Classical taxonomy was based purely on morphological similarities; evolutionary relationships (phylogeny) were introduced in modern biosystematics.. High-yield true/false assertion option.",
    "difficulty": "Medium",
    "conceptTested": "Need for Classification & Taxonomy - Conceptual Clarity"
  },
  {
    "id": "prac-bioclassificationtaxonomy-5",
    "question": "In the study of Need for Classification & Taxonomy, what is the exact definition and significance of \"Taxonomy\"?",
    "options": [
      "Branch of biology concerned with characterisation, identification, nomenclature, and classification of organisms.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Branch of biology concerned with characterisation, identification, nomenclature, and classification of organisms.. Term \"Taxonomy\" was coined by A.P. de Candolle. Carolus Linnaeus is known as the Father of Taxonomy.",
    "difficulty": "Easy",
    "conceptTested": "Taxonomy definition"
  },
  {
    "id": "prac-bioclassificationtaxonomy-6",
    "question": "In the study of Need for Classification & Taxonomy, what is the exact definition and significance of \"Characterisation\"?",
    "options": [
      "Understanding and describing the morphological, anatomical, cellular, and physiological traits of an organism.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Understanding and describing the morphological, anatomical, cellular, and physiological traits of an organism.. The first step in taxonomic study of an unknown organism.",
    "difficulty": "Easy",
    "conceptTested": "Characterisation definition"
  },
  {
    "id": "prac-bioclassificationtaxonomy-7",
    "question": "In the study of Need for Classification & Taxonomy, what is the exact definition and significance of \"Identification\"?",
    "options": [
      "Determining whether an unknown organism belongs to a known taxo group by matching its characters.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Determining whether an unknown organism belongs to a known taxo group by matching its characters.. Correct identification requires thorough knowledge of existing taxonomical records.",
    "difficulty": "Easy",
    "conceptTested": "Identification definition"
  },
  {
    "id": "prac-bioclassificationtaxonomy-8",
    "question": "In the study of Need for Classification & Taxonomy, what is the exact definition and significance of \"Taxon (plural: Taxa)\"?",
    "options": [
      "A concrete biological entity or group of real organisms occupying a category at any level in taxonomic hierarchy (e.g., Mammals, Insects, Plants).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A concrete biological entity or group of real organisms occupying a category at any level in taxonomic hierarchy (e.g., Mammals, Insects, Plants).. Taxon indicates real biological categories at different levels. \"Dogs\", \"Mammals\", \"Animals\" are all taxa at different levels.",
    "difficulty": "Easy",
    "conceptTested": "Taxon (plural: Taxa) definition"
  },
  {
    "id": "prac-bioclassificationtaxonomy-9",
    "question": "In the study of Need for Classification & Taxonomy, what is the exact definition and significance of \"Biosystematics / Modern Taxonomy\"?",
    "options": [
      "Taxonomic studies based on evolutionary history (phylogeny), ecology, cytology, anatomy, and biochemistry.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Taxonomic studies based on evolutionary history (phylogeny), ecology, cytology, anatomy, and biochemistry.. Introduced by Julian Huxley (1940) to incorporate genetics and evolutionary relationships into classical taxonomy.",
    "difficulty": "Easy",
    "conceptTested": "Biosystematics / Modern Taxonomy definition"
  },
  {
    "id": "prac-bioclassificationtaxonomy-10",
    "question": "Which of the following is a key NCERT statement regarding Need for Classification & Taxonomy?",
    "options": [
      "Four steps of taxonomy = CINC (Characterisation, Identification, Nomenclature, Classification).",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: Four steps of taxonomy = CINC (Characterisation, Identification, Nomenclature, Classification).",
    "difficulty": "Easy",
    "conceptTested": "Need for Classification & Taxonomy NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-class-1',
      year: 2007,
      exam: 'AIPMT 2007',
      question: 'ICBN stands for:',
      options: [
        'International Code of Botanical Nomenclature',
        'International Congress of Biological Names',
        'Indian Code of Botanical Nomenclature',
        'International Class of Botanical Nomenclature'
      ],
      correctAnswer: 0,
      explanation: 'ICBN stands for International Code of Botanical Nomenclature (now updated to ICN - International Code of Nomenclature for algae, fungi, and plants).',
      topicId: 'bio-classification-taxonomy',
      difficulty: 'Easy',
      conceptTested: 'Nomenclature codes',
      ncertReference: 'NCERT Class 11 Biology, Chapter 1, Page 6',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Need for Classification & Taxonomy',
    confidenceLabel: 'HIGH',
    confidenceText: 'Frequently tested in basic terminology questions and NCERT statement matching.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 5,
    totalDirectPyqs: 5,
    totalHistoricalMarks: 20,
    averageDirectPyqsPerPaper: 0.33,
    maxDirectPyqsInSinglePaper: 1,
    minDirectPyqsInSinglePaper: 0,
    minDirectMarks: 0,
    maxDirectMarks: 4,
    avgDirectMarksPerPaper: 1.33,
    whatThisMeansForYou: 'Memorize the four steps of taxonomy, distinction between Taxon and Category, and contributions of Linnaeus.',
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 - 4 Marks',
    weightagePercentage: 1.2,
    expectedQuestionsCount: 1,
    totalMarksPotential: 4,
    historicalFrequencyYears: '2007, 2013, 2016, 2019',
    trendAnalysis: 'Focuses on fundamental definitions, NCERT exact steps, and taxonomy principles.',
    preparationStrategy: 'Understand the difference between classical morphology-based taxonomy and modern biosystematics.'
  }
};
