import { DetailedTopicContent } from '../../types/neet';

export const bioLivingBiodiversityDetails: DetailedTopicContent = {
  topicId: 'bio-living-biodiversity',
  topicName: 'What is Living? & Biodiversity',
  subject: 'Biology',
  class: 'Class 11',
  classification: 'Diversity in Living World',
  chapter: 'The Living World',
  
  whatIsThisTopic: 'Explores the defining vs non-defining characteristics of living organisms (Growth, Reproduction, Metabolism, Cellular Organisation, Consciousness) and introduces the vast concept of Earth\'s biodiversity.',
  
  basicIdea: [
    'Living organisms display distinct characteristics such as growth, reproduction, ability to sense environment, metabolism, cellular organisation, and self-replication.',
    'Growth and reproduction are characteristic features of living organisms, but are NOT defining properties because non-living objects can grow (by accumulation of mass on the surface) and several living organisms do not reproduce (mules, sterile worker bees, infertile human couples).',
    'Metabolism, Cellular Organisation, and Consciousness are ABSOLUTE DEFINING PROPERTIES of all living organisms without exception.',
    'Biodiversity refers to the total number and types of organisms present on Earth. Currently, 1.7 to 1.8 million species are known and described.'
  ],
  
  importantTerms: [
    {
      term: 'Intrinsic Growth',
      definition: 'Growth occurring from inside the body through cell division and synthesis of protoplasmic substances. Characteristic of living organisms.',
      neetNote: 'In animals, intrinsic growth stops after a certain age, whereas in plants, growth occurs continuously throughout life via meristems.'
    },
    {
      term: 'Extrinsic Growth',
      definition: 'Increase in mass due to accumulation of material on the outer surface (e.g., mountains, boulders, sand dunes).',
      neetNote: 'Because non-living objects exhibit extrinsic growth, growth as a whole is not an exclusive defining property of life.'
    },
    {
      term: 'Metabolism',
      definition: 'Sum total of all chemical reactions taking place inside a living body (Anabolism + Catabolism).',
      neetNote: 'Metabolism is an absolute defining property. No non-living object exhibits metabolism.'
    },
    {
      term: 'Isolated Metabolic Reaction',
      definition: 'Chemical reactions performed outside the body in a test tube (in vitro).',
      neetNote: 'NCERT Fact: An isolated metabolic reaction in a test tube is neither living nor non-living; it is a "living reaction", but NOT a living organism.'
    },
    {
      term: 'Consciousness',
      definition: 'Ability of an organism to sense its physical, chemical, or biological surroundings and respond to external environmental stimuli.',
      neetNote: 'The most obvious and technically complicated defining feature of all living organisms. Humans also possess self-consciousness.'
    },
    {
      term: 'Biodiversity',
      definition: 'The total variety and variability of living organisms present on Earth.',
      neetNote: 'Estimated number of described species is 1.7 to 1.8 million (17–18 lakh).'
    }
  ],
  
  conceptExplanation: [
    {
      heading: '1. Characteristic Features vs Defining Properties of Life',
      paragraphs: [
        'To decide whether an entity is living, biologists distinguish between characteristic features (found in living beings, but with exceptions or shared with non-living entities) and defining properties (present in ALL living organisms without exception, and absent in non-living entities).',
        'Growth and Reproduction are characteristic features. Growth by cell division occurs in living beings, but non-living things like mountains and crystal structures also grow by surface accretion. Furthermore, organisms like mules, sterile worker bees, and infertile human couples do not reproduce, proving reproduction is not essential for being alive.',
        'Metabolism, Cellular Organisation, and Consciousness are absolute defining properties. Every living cell performs thousands of metabolic reactions simultaneously. All living organisms are composed of cells. Consciousness is universal—even prokaryotes respond to environmental cues like light, chemical concentration, and temperature.'
      ],
      tables: [
        {
          headers: ['Feature / Property', 'Present in All Living?', 'Exhibited by Non-Living?', 'Defining Property?'],
          rows: [
            ['Growth (Mass / Number)', 'Yes (stops at age in animals)', 'Yes (surface accretion)', 'NO'],
            ['Reproduction', 'No (Exceptions: Mules, Bees)', 'No', 'NO'],
            ['Metabolism', 'Yes (all living cells)', 'No (except in vitro reaction)', 'YES'],
            ['Cellular Organisation', 'Yes (unicellular & multicellular)', 'No', 'YES'],
            ['Consciousness', 'Yes (prokaryotes to eukaryotes)', 'No', 'YES'],
            ['Self-Consciousness', 'No (Only in Humans)', 'No', 'NO (Human specific)']
          ]
        }
      ]
    },
    {
      heading: '2. Detailed Analysis of Key Life Processes',
      paragraphs: [
        'Growth: In unicellular organisms like Amoeba or Bacteria, growth and reproduction are synonymous (mutually inclusive events) because cell division increases both cell size and population number. In multicellular plants and animals, growth and reproduction are mutually exclusive events.',
        'Metabolism: All plants, animals, fungi, and microbes exhibit metabolism. Isolated reactions in a test tube (in vitro) are non-living objects themselves, but the reactions are living reactions because they mimic biological catalysis.',
        'Consciousness: Photoperiod affects reproduction in seasonal breeders, both plants and animals. All organisms handle chemicals entering their bodies. Man is the only organism who is aware of himself (possesses self-consciousness). Patients lying in a coma in hospitals supported by life-support machines have dead brains; whether they are living or non-living is a philosophical question, but biologically their organs display cellular metabolism.'
      ],
      importantPoints: [
        'Unicellular organisms: Growth and reproduction are mutually inclusive.',
        'Multicellular organisms: Growth and reproduction are mutually exclusive.',
        'In vitro metabolic reaction = Living reaction, but NOT a living organism.',
        'Self-consciousness is unique to humans.'
      ]
    },
    {
      heading: '3. Biodiversity & Need for Systematic Study',
      paragraphs: [
        'If you look around, you will see a large variety of living organisms—be it potted plants, insects, birds, pets, or unseen microorganisms. The total described species count ranges between 1.7 - 1.8 million.',
        'Insects form the largest animal group (~70% of all animal species). Due to this immense diversity, local names vary from region to region, creating confusion. Hence, a standardized nomenclature and systematic classification system is mandatory.'
      ]
    }
  ],

  formulae: [],

  neetImportantPoints: [
    'Growth is an increase in mass and increase in number of individuals (twin characteristics of growth).',
    'Mountains, boulders, and sand dunes grow extrinsically by surface accumulation.',
    'Mules, hinny, sterile worker bees, and infertile human couples do not reproduce.',
    'Metabolism and Cellular Organisation are defining properties with zero exceptions.',
    'Consciousness is the most technically complicated defining property of living organisms.',
    'Photoperiod affects reproduction in seasonal breeders (both plants and animals).',
    'Currently known and described species count: 1.7 to 1.8 million (NCERT exact numbers).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Growth is an absolute defining property of life.',
      correctFact: 'Growth is NOT a defining property because non-living objects grow by extrinsic accretion, and growth is not unique to living beings without specifying "intrinsic".',
      whyItMattersForNEET: 'Direct statement-based true/false question in NEET.'
    },
    {
      commonConfusion: 'An isolated metabolic reaction in a test tube is a living organism.',
      correctFact: 'It is a living reaction, but NOT a living organism because it lacks cellular organisation.',
      whyItMattersForNEET: 'High-yield NCERT assertion-reason topic.'
    },
    {
      commonConfusion: 'Self-consciousness is present in all living organisms.',
      correctFact: 'Consciousness is present in all organisms, but self-consciousness is unique to human beings only.',
      whyItMattersForNEET: 'Trap in NCERT line-matching questions.'
    }
  ],

  quickRevision: [
    'Twin characteristics of growth = Increase in body mass + Increase in number of individuals.',
    'Defining properties = Metabolism, Cellular Organisation, Consciousness.',
    'Non-defining features = Growth, Reproduction.',
    'In vitro metabolic reaction = Living reaction (not living organism).',
    'Described species count = 1.7 - 1.8 million.'
  ],

  practiceQuestions: [
  {
    "id": "prac-living-1",
    "question": "Which of the following sets represents absolute defining properties of living organisms?",
    "options": [
      "Growth, Metabolism, Consciousness",
      "Reproduction, Cellular Organisation, Growth",
      "Metabolism, Cellular Organisation, Consciousness",
      "Growth, Reproduction, Self-consciousness"
    ],
    "correctAnswer": 2,
    "explanation": "Metabolism, Cellular Organisation, and Consciousness are present in all living organisms without exception and absent in non-living things. Growth and Reproduction have exceptions.",
    "difficulty": "Easy",
    "conceptTested": "Defining vs Non-defining characteristics of life"
  },
  {
    "id": "prac-living-2",
    "question": "In unicellular organisms like Amoeba, growth and reproduction are:",
    "options": [
      "Mutually exclusive events",
      "Mutually inclusive events",
      "Unrelated events",
      "Antagonistic events"
    ],
    "correctAnswer": 1,
    "explanation": "In unicellular organisms, cell division leads to both growth in size/mass and increase in population number, making growth and reproduction mutually inclusive events.",
    "difficulty": "Medium",
    "conceptTested": "Growth and reproduction relationships"
  },
  {
    "id": "prac-biolivingbiodiversity-3",
    "question": "Regarding What is Living? & Biodiversity, which of the following statements correctly resolves a common misconception about \"Growth is an absolute defining property of life.\"?",
    "options": [
      "Growth is NOT a defining property because non-living objects grow by extrinsic accretion, and growth is not unique to living beings without specifying \"intrinsic\".",
      "Incorrect assumption: Growth is an absolute defining property of life.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Growth is NOT a defining property because non-living objects grow by extrinsic accretion, and growth is not unique to living beings without specifying \"intrinsic\".. Direct statement-based true/false question in NEET.",
    "difficulty": "Medium",
    "conceptTested": "What is Living? & Biodiversity - Conceptual Clarity"
  },
  {
    "id": "prac-biolivingbiodiversity-4",
    "question": "Regarding What is Living? & Biodiversity, which of the following statements correctly resolves a common misconception about \"An isolated metabolic reaction in a test tube is a living organism.\"?",
    "options": [
      "It is a living reaction, but NOT a living organism because it lacks cellular organisation.",
      "Incorrect assumption: An isolated metabolic reaction in a test tube is a living organism.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "It is a living reaction, but NOT a living organism because it lacks cellular organisation.. High-yield NCERT assertion-reason topic.",
    "difficulty": "Medium",
    "conceptTested": "What is Living? & Biodiversity - Conceptual Clarity"
  },
  {
    "id": "prac-biolivingbiodiversity-5",
    "question": "Regarding What is Living? & Biodiversity, which of the following statements correctly resolves a common misconception about \"Self-consciousness is present in all living organisms.\"?",
    "options": [
      "Consciousness is present in all organisms, but self-consciousness is unique to human beings only.",
      "Incorrect assumption: Self-consciousness is present in all living organisms.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Consciousness is present in all organisms, but self-consciousness is unique to human beings only.. Trap in NCERT line-matching questions.",
    "difficulty": "Medium",
    "conceptTested": "What is Living? & Biodiversity - Conceptual Clarity"
  },
  {
    "id": "prac-biolivingbiodiversity-6",
    "question": "In the study of What is Living? & Biodiversity, what is the exact definition and significance of \"Intrinsic Growth\"?",
    "options": [
      "Growth occurring from inside the body through cell division and synthesis of protoplasmic substances. Characteristic of living organisms.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Growth occurring from inside the body through cell division and synthesis of protoplasmic substances. Characteristic of living organisms.. In animals, intrinsic growth stops after a certain age, whereas in plants, growth occurs continuously throughout life via meristems.",
    "difficulty": "Easy",
    "conceptTested": "Intrinsic Growth definition"
  },
  {
    "id": "prac-biolivingbiodiversity-7",
    "question": "In the study of What is Living? & Biodiversity, what is the exact definition and significance of \"Extrinsic Growth\"?",
    "options": [
      "Increase in mass due to accumulation of material on the outer surface (e.g., mountains, boulders, sand dunes).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Increase in mass due to accumulation of material on the outer surface (e.g., mountains, boulders, sand dunes).. Because non-living objects exhibit extrinsic growth, growth as a whole is not an exclusive defining property of life.",
    "difficulty": "Easy",
    "conceptTested": "Extrinsic Growth definition"
  },
  {
    "id": "prac-biolivingbiodiversity-8",
    "question": "In the study of What is Living? & Biodiversity, what is the exact definition and significance of \"Metabolism\"?",
    "options": [
      "Sum total of all chemical reactions taking place inside a living body (Anabolism + Catabolism).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Sum total of all chemical reactions taking place inside a living body (Anabolism + Catabolism).. Metabolism is an absolute defining property. No non-living object exhibits metabolism.",
    "difficulty": "Easy",
    "conceptTested": "Metabolism definition"
  },
  {
    "id": "prac-biolivingbiodiversity-9",
    "question": "In the study of What is Living? & Biodiversity, what is the exact definition and significance of \"Isolated Metabolic Reaction\"?",
    "options": [
      "Chemical reactions performed outside the body in a test tube (in vitro).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Chemical reactions performed outside the body in a test tube (in vitro).. NCERT Fact: An isolated metabolic reaction in a test tube is neither living nor non-living; it is a \"living reaction\", but NOT a living organism.",
    "difficulty": "Easy",
    "conceptTested": "Isolated Metabolic Reaction definition"
  },
  {
    "id": "prac-biolivingbiodiversity-10",
    "question": "In the study of What is Living? & Biodiversity, what is the exact definition and significance of \"Consciousness\"?",
    "options": [
      "Ability of an organism to sense its physical, chemical, or biological surroundings and respond to external environmental stimuli.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Ability of an organism to sense its physical, chemical, or biological surroundings and respond to external environmental stimuli.. The most obvious and technically complicated defining feature of all living organisms. Humans also possess self-consciousness.",
    "difficulty": "Easy",
    "conceptTested": "Consciousness definition"
  }
],
  pyqs: [
    {
      id: 'pyq-living-1',
      year: 2011,
      exam: 'AIPMT Mains 2011',
      question: 'Which one of the following aspects is an exclusive characteristic of living things?',
      options: [
        'Isolated metabolic reactions occur in vitro',
        'Increase in mass from inside only',
        'Perception of events happening in the environment and their memory',
        'Increase in mass by accumulation of material both on surface as well as internally'
      ],
      correctAnswer: 2,
      explanation: 'Consciousness (perception of environmental events and response/memory) is an exclusive defining property of all living organisms. Intrinsic growth alone is a property, but option 2 is the exact NCERT defining feature.',
      topicId: 'bio-living-biodiversity',
      difficulty: 'Medium',
      conceptTested: 'Defining feature of living organisms (Consciousness)',
      ncertReference: 'NCERT Class 11 Biology, Chapter 1, Page 5',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'What is Living? & Biodiversity',
    confidenceLabel: 'HIGH',
    confidenceText: 'Regularly tested in NEET statement-based questions and NCERT line-by-line true/false options.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 6,
    totalDirectPyqs: 6,
    totalHistoricalMarks: 24,
    averageDirectPyqsPerPaper: 0.4,
    maxDirectPyqsInSinglePaper: 1,
    minDirectPyqsInSinglePaper: 0,
    minDirectMarks: 0,
    maxDirectMarks: 4,
    avgDirectMarksPerPaper: 1.6,
    whatThisMeansForYou: 'Focus on NCERT definitions of growth, reproduction, metabolism, and consciousness. Memorize exceptions like mules and in vitro reactions.',
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 - 4 Marks',
    weightagePercentage: 1.5,
    expectedQuestionsCount: 1,
    totalMarksPotential: 4,
    historicalFrequencyYears: '2011, 2014, 2018, 2020, 2022',
    trendAnalysis: 'Focuses on direct statement-based MCQs checking conceptual clarity on defining properties of life.',
    preparationStrategy: 'Read NCERT pages 3 to 5 thoroughly. Pay attention to terms like "mutually inclusive", "in vitro", and "self-consciousness".'
  }
};
