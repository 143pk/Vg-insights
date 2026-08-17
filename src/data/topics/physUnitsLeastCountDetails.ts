import { DetailedTopicContent } from '../../types/neet'

export const physUnitsLeastCountDetails: DetailedTopicContent = {
  topicId: 'phys-units-least-count',
  topicName: 'Least Count & Significant Figures',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Physics & Measurement',
  chapter: 'Units and Measurements',

  whatIsThisTopic: 'Precision and limits of measurement are core concepts in experimental physics. Every physical measurement carried out in a laboratory is constrained by the resolution of the measuring instrument used. This topic provides an exhaustive, step-by-step guide to understanding accuracy, precision, and resolution; calculating the least count of essential NEET laboratory instruments (Vernier Calipers and Screw Gauge); determining positive and negative zero errors and zero corrections; and applying the mandatory rules for counting significant figures, rounding off numerical results, and carrying out arithmetic operations in experimental calculations.',

  basicIdea: [
    '1. Accuracy vs Precision vs Resolution: Accuracy indicates how close a measured value is to the true value. Precision indicates the sharpness, degree of exactness, or repeatability of repeated measurements. Resolution is the smallest increment an instrument can detect.',
    '2. Least Count (LC): The smallest value that can be measured directly and accurately by a measuring instrument. For Vernier Calipers, LC = 1 MSD - 1 VSD = 1 MSD / N. For Screw Gauge, LC = Pitch / Total Circular Scale Divisions.',
    '3. Zero Error and Zero Correction: Occurs when the zero mark of the auxiliary scale does not align with the zero mark of the main scale when jaws/anvil touch. Positive zero error means reading is overestimated (correction is SUBTRACTED). Negative zero error means reading is underestimated (correction is ADDED).',
    '4. Significant Figures (Sig Figs): Digits in a measured quantity that carry meaning contributing to its structural precision. All non-zero digits are significant. Captive zeros are significant. Leading zeros are NEVER significant. Trailing zeros are significant ONLY if a decimal point is present.',
    '5. Significant Figure Arithmetic Rules: For Addition/Subtraction, round the final result to the fewest DECIMAL PLACES. For Multiplication/Division, round the final result to the fewest TOTAL SIGNIFICANT FIGURES.'
  ],

  importantTerms: [
    {
      term: 'Accuracy',
      definition: 'A measure of how close an experimental value is to the accepted true value of the quantity being measured.',
      neetNote: 'Depends on systematic errors, calibration quality, and experimental methodology.'
    },
    {
      term: 'Precision',
      definition: 'The closeness of agreement between independent test results obtained under stipulated conditions; governed by instrument resolution.',
      neetNote: 'An instrument with a smaller least count gives higher precision, regardless of whether it is accurate!'
    },
    {
      term: 'Least Count (LC)',
      symbol: 'LC',
      definition: 'The smallest value of a physical quantity that can be measured directly by an instrument.',
      neetNote: 'Standard Vernier Calipers LC = 0.1 mm (0.01 cm); Standard Screw Gauge LC = 0.01 mm (0.001 cm).'
    },
    {
      term: 'Pitch',
      symbol: 'P',
      definition: 'The linear distance moved by the spindle of a screw gauge along the main scale during one complete rotation of the circular thimble.',
      neetNote: 'Pitch = (Distance moved on main scale) / (Number of full rotations).'
    },
    {
      term: 'Positive Zero Error',
      definition: 'Error present when the zero mark of the vernier or circular scale lies ahead (to the right or above) the main scale zero mark when jaws touch.',
      neetNote: 'Positive zero error is ALWAYS SUBTRACTED from the observed reading: True = Observed - Error.'
    },
    {
      term: 'Negative Zero Error',
      definition: 'Error present when the zero mark of the vernier or circular scale lies behind (to the left or below) the main scale zero mark when jaws touch.',
      neetNote: 'Negative zero error is ADDED: True = Observed - (-Error) = Observed + |Error|.'
    },
    {
      term: 'Significant Figures',
      symbol: 'Sig Figs',
      definition: 'All reliably known digits in a measured value plus the first uncertain/estimated digit.',
      neetNote: 'Exact numbers (e.g. 2, π, count of 5 apples) have INFINITE significant figures and do not limit calculation precision.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Accuracy, Precision, and Resolution Compared',
      paragraphs: [
        'In experimental physics, students often confuse accuracy and precision. Understanding their exact distinctions is a high-yield conceptual requirement in NEET.'
      ],
      tables: [
        {
          headers: ['Feature', 'Accuracy', 'Precision', 'Resolution'],
          rows: [
            ['Definition', 'Closeness of measurement to the true value', 'Closeness among repeated measurements', 'Smallest change an instrument can detect'],
            ['Governing Factor', 'Systematic errors and calibration', 'Random errors and instrument least count', 'Physical scale construction/division'],
            ['How to Improve', 'Eliminate systematic errors and calibrate', 'Use instrument with smaller least count', 'Use finer scale graduations'],
            ['Dartboard Analogy', 'Shots clustered tightly around center bullseye', 'Shots tightly grouped together anywhere on board', 'Precision grid size of the target board']
          ]
        }
      ]
    },
    {
      heading: '2. Vernier Calipers: Principle, Least Count & Reading Formula',
      paragraphs: [
        'A Vernier Calipers consists of a Main Scale (fixed) and a Vernier Scale (sliding). The vernier scale has N divisions coinciding with (N - 1) main scale divisions (MSD).',
        'Mathematical Derivation of Least Count:',
        'N Vernier Scale Divisions (VSD) = (N - 1) Main Scale Divisions (MSD)',
        '⇒ 1 VSD = [(N - 1) / N] MSD',
        'Least Count (LC) = 1 MSD - 1 VSD = 1 MSD - [(N - 1) / N] MSD = (1 / N) MSD.',
        'Total Reading Formula: Observed Reading = Main Scale Reading (MSR) + [Vernier Scale Reading (VSR) × LC].',
        'Corrected True Reading = Observed Reading - Zero Error.'
      ]
    },
    {
      heading: '3. Screw Gauge (Micrometer): Pitch, Least Count & Zero Errors',
      paragraphs: [
        'A Screw Gauge works on the principle of a screw moving inside a nut. Rotating the circular thimble advances the spindle along the linear main scale.',
        'Pitch = Linear distance moved on main scale / Number of complete rotations.',
        'Least Count (LC) = Pitch / Total number of divisions on circular scale.',
        'Total Reading Formula: Observed Reading = Main Scale Reading (MSR) + [Circular Scale Reading (CSR) × LC].',
        'Positive Zero Error: Circular scale zero is BELOW/BEHIND reference line when stud touches anvil. Error = + (n × LC). Subtracted from reading.',
        'Negative Zero Error: Circular scale zero is ABOVE/AHEAD of reference line. Error = - (Total Divisions - n) × LC. Added to reading.'
      ]
    },
    {
      heading: '4. Rules for Counting Significant Figures',
      paragraphs: [
        'When writing experimental measurements, significant figures reflect precision:',
        'Rule 1: All non-zero digits are significant (e.g. 154.3 has 4 sig figs).',
        'Rule 2: Captive Zeros (zeros between two non-zero digits) are always significant (e.g. 2008 has 4 sig figs, 5.003 has 4 sig figs).',
        'Rule 3: Leading Zeros (zeros to the left of the first non-zero digit) are NEVER significant (e.g. 0.0025 has 2 sig figs; 0.050 has 2 sig figs).',
        'Rule 4: Trailing Zeros in a number containing a decimal point ARE significant (e.g. 3.500 has 4 sig figs; 40.0 has 3 sig figs).',
        'Rule 5: Trailing Zeros in a whole number WITHOUT a decimal point are NOT significant unless specified by scientific notation (e.g. 3500 m has 2 sig figs; 3.50 × 10³ m has 3 sig figs).',
        'Rule 6: Exact Numbers (counts of objects, mathematical constants like π, 2 in 2πr) have INFINITE significant figures.'
      ]
    },
    {
      heading: '5. Arithmetic Operations with Significant Figures',
      paragraphs: [
        'Rule for Addition and Subtraction: The final calculated result must be rounded off to contain the same number of DECIMAL PLACES (digits after decimal) as the number in the calculation having the FEWEST decimal places.',
        'Example: 9.99 m (2 decimal places) - 0.0099 m (4 decimal places) = 9.9801 m ⇒ Round to 2 decimal places = 9.98 m.',
        'Rule for Multiplication and Division: The final calculated result must be rounded off to contain the same number of TOTAL SIGNIFICANT FIGURES as the number in the calculation having the FEWEST total significant figures.',
        'Example: Mass = 4.237 g (4 sig figs), Volume = 2.51 cm³ (3 sig figs) ⇒ Density = 4.237 / 2.51 = 1.6880478... g/cm³ ⇒ Round to 3 total sig figs = 1.69 g/cm³.'
      ]
    },
    {
      heading: '6. Solved Step-by-Step Worked Examples',
      paragraphs: ['Step-by-step worked teaching examples illustrating Vernier Calipers and Screw Gauge reading calculations with zero errors:'],
      examples: [
        {
          problem: 'Teaching Example 1: A Vernier Calipers has 1 MSD = 1 mm. 10 vernier scale divisions coincide with 9 main scale divisions. During measurement of a sphere diameter, MSR = 2.4 cm, and 6th vernier division coincides with a main scale line. Zero error is +0.02 cm. Find the true diameter.',
          given: '1 MSD = 1 mm = 0.1 cm; 10 VSD = 9 MSD; MSR = 2.4 cm; VSR = 6; Zero Error = +0.02 cm',
          stepByStep: [
            'Step 1: Calculate Least Count LC = 1 MSD / N = 1 mm / 10 = 0.1 mm = 0.01 cm.',
            'Step 2: Calculate Observed Reading = MSR + (VSR × LC) = 2.4 cm + (6 × 0.01 cm) = 2.46 cm.',
            'Step 3: Calculate True Diameter = Observed Reading - Positive Zero Error = 2.46 cm - 0.02 cm = 2.44 cm.'
          ],
          solution: 'True diameter of the sphere is 2.44 cm.',
          answer: '2.44 cm'
        },
        {
          problem: 'Teaching Example 2: A Screw Gauge has a pitch of 0.5 mm and 50 circular scale divisions. When measuring wire thickness, main scale reads 2 mm and circular scale reads 28 divisions. Zero error is -0.05 mm. Find the true wire thickness.',
          given: 'Pitch = 0.5 mm; Total circular divisions = 50; MSR = 2 mm; CSR = 28; Zero Error = -0.05 mm',
          stepByStep: [
            'Step 1: Calculate Least Count LC = Pitch / Divisions = 0.5 mm / 50 = 0.01 mm.',
            'Step 2: Calculate Observed Reading = MSR + (CSR × LC) = 2 mm + (28 × 0.01 mm) = 2.28 mm.',
            'Step 3: Calculate True Thickness = Observed Reading - Zero Error = 2.28 mm - (-0.05 mm) = 2.28 + 0.05 = 2.33 mm.'
          ],
          solution: 'True wire thickness is 2.33 mm.',
          answer: '2.33 mm'
        }
      ]
    }
  ],

  formulae: [
    {
      title: 'Vernier Calipers Least Count Formula',
      formula: 'LC = 1 text{ MSD} - 1 text{ VSD} = frac{1 text{ MSD}}{N}',
      variables: 'LC = least count, MSD = main scale division value, VSD = vernier scale division value, N = number of vernier divisions',
      whenToUse: 'Determining the resolution of vernier calipers from scale alignment specifications.'
    },
    {
      title: 'Screw Gauge Least Count Formula',
      formula: 'LC = frac{text{Pitch}}{text{Total Circular Scale Divisions}}',
      variables: 'LC = least count, Pitch = linear distance per 1 full thimble rotation',
      whenToUse: 'Calculating screw gauge resolution or pitch in micrometer problems.'
    },
    {
      title: 'True Measurement Zero Error Correction',
      formula: 'text{True Measurement} = text{Observed Reading} - text{Zero Error}',
      variables: 'Observed Reading = MSR + (Scale Reading × LC), Zero Error = signed error value',
      whenToUse: 'Correcting instrument readings for positive (+ error subtracted) or negative (- error added) zero offsets.'
    }
  ],

  neetImportantPoints: [
    'Zero error correction formula is ALWAYS: True Reading = Observed Reading - Zero Error.',
    'Positive zero error is subtracted; negative zero error is added.',
    'Addition/Subtraction uses DECIMAL PLACES. Multiplication/Division uses TOTAL SIGNIFICANT FIGURES.',
    'Leading zeros in numbers like 0.00045 are never significant (only 2 sig figs: 4 and 5).',
    'Change of units does NOT change the number of significant figures in a measurement (e.g. 2.30 m, 230 cm, 2300 mm all have 3 sig figs).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing accuracy with precision.',
      correctFact: 'Accuracy means closeness to true value; precision means closeness among repeated measurements governed by least count.',
      whyItMattersForNEET: 'An instrument can be highly precise (LC = 0.001 mm) yet completely inaccurate if zero error is present!'
    },
    {
      commonConfusion: 'Rounding multiplication results using decimal places.',
      correctFact: 'Multiplication and division are governed by total significant figures, whereas addition and subtraction are governed by decimal places!',
      whyItMattersForNEET: 'NEET option choices test whether students applied decimal place rule vs sig fig rule.'
    },
    {
      commonConfusion: 'Adding positive zero error to the observed reading.',
      correctFact: 'Positive zero error causes the instrument to read HIGHER than the true value, so positive error MUST BE SUBTRACTED!',
      whyItMattersForNEET: 'Sign mistakes in zero error lead directly to distractor options.'
    }
  ],

  quickRevision: [
    'Vernier Calipers LC = 1 MSD - 1 VSD = 1 MSD / N.',
    'Screw Gauge LC = Pitch / Total Circular Divisions.',
    'True Reading = MSR + (Aux Scale × LC) - Zero Error.',
    'Add/Sub: Least DECIMAL PLACES. Mul/Div: Least TOTAL SIG FIGS.',
    'Leading zeros are never significant; trailing zeros count ONLY with decimal point.'
  ],

  practiceQuestions: [
  {
    "id": "prac-lc-1",
    "question": "Practice Question — Original: A Vernier Calipers has 1 mm main scale divisions. 20 vernier scale divisions coincide with 19 main scale divisions. What is the least count of the instrument?",
    "options": [
      "0.05 mm",
      "0.01 mm",
      "0.1 mm",
      "0.005 mm"
    ],
    "correctAnswer": 0,
    "explanation": "LC = 1 MSD / N = 1 mm / 20 = 0.05 mm = 0.005 cm. Option 1 is correct.",
    "difficulty": "Easy",
    "topicId": "phys-units-least-count",
    "conceptTested": "Vernier Calipers Least Count Calculation"
  },
  {
    "id": "prac-lc-2",
    "question": "Practice Question — Original: Calculate the density of a cube of mass 12.4 g and edge length 2.1 cm to the correct number of significant figures.",
    "options": [
      "1.3 g/cm³",
      "1.34 g/cm³",
      "1.339 g/cm³",
      "1.340 g/cm³"
    ],
    "correctAnswer": 0,
    "explanation": "Mass = 12.4 g (3 sig figs). Length = 2.1 cm (2 sig figs). Volume = (2.1)³ = 9.261 cm³. Density = 12.4 / 9.261 = 1.3389... g/cm³. Since length has 2 sig figs, density must be rounded to 2 total sig figs: 1.3 g/cm³.",
    "difficulty": "Medium",
    "topicId": "phys-units-least-count",
    "conceptTested": "Significant Figures in Density Calculation"
  },
  {
    "id": "prac-physunitsleastcount-3",
    "question": "Regarding Least Count & Significant Figures, which of the following statements correctly resolves a common misconception about \"Confusing accuracy with precision.\"?",
    "options": [
      "Accuracy means closeness to true value; precision means closeness among repeated measurements governed by least count.",
      "Incorrect assumption: Confusing accuracy with precision.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Accuracy means closeness to true value; precision means closeness among repeated measurements governed by least count.. An instrument can be highly precise (LC = 0.001 mm) yet completely inaccurate if zero error is present!",
    "difficulty": "Medium",
    "conceptTested": "Least Count & Significant Figures - Conceptual Clarity"
  },
  {
    "id": "prac-physunitsleastcount-4",
    "question": "Regarding Least Count & Significant Figures, which of the following statements correctly resolves a common misconception about \"Rounding multiplication results using decimal places.\"?",
    "options": [
      "Multiplication and division are governed by total significant figures, whereas addition and subtraction are governed by decimal places!",
      "Incorrect assumption: Rounding multiplication results using decimal places.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Multiplication and division are governed by total significant figures, whereas addition and subtraction are governed by decimal places!. NEET option choices test whether students applied decimal place rule vs sig fig rule.",
    "difficulty": "Medium",
    "conceptTested": "Least Count & Significant Figures - Conceptual Clarity"
  },
  {
    "id": "prac-physunitsleastcount-5",
    "question": "Regarding Least Count & Significant Figures, which of the following statements correctly resolves a common misconception about \"Adding positive zero error to the observed reading.\"?",
    "options": [
      "Positive zero error causes the instrument to read HIGHER than the true value, so positive error MUST BE SUBTRACTED!",
      "Incorrect assumption: Adding positive zero error to the observed reading.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Positive zero error causes the instrument to read HIGHER than the true value, so positive error MUST BE SUBTRACTED!. Sign mistakes in zero error lead directly to distractor options.",
    "difficulty": "Medium",
    "conceptTested": "Least Count & Significant Figures - Conceptual Clarity"
  },
  {
    "id": "prac-physunitsleastcount-6",
    "question": "In the study of Least Count & Significant Figures, what is the exact definition and significance of \"Accuracy\"?",
    "options": [
      "A measure of how close an experimental value is to the accepted true value of the quantity being measured.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A measure of how close an experimental value is to the accepted true value of the quantity being measured.. Depends on systematic errors, calibration quality, and experimental methodology.",
    "difficulty": "Easy",
    "conceptTested": "Accuracy definition"
  },
  {
    "id": "prac-physunitsleastcount-7",
    "question": "In the study of Least Count & Significant Figures, what is the exact definition and significance of \"Precision\"?",
    "options": [
      "The closeness of agreement between independent test results obtained under stipulated conditions; governed by instrument resolution.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The closeness of agreement between independent test results obtained under stipulated conditions; governed by instrument resolution.. An instrument with a smaller least count gives higher precision, regardless of whether it is accurate!",
    "difficulty": "Easy",
    "conceptTested": "Precision definition"
  },
  {
    "id": "prac-physunitsleastcount-8",
    "question": "In the study of Least Count & Significant Figures, what is the exact definition and significance of \"Least Count (LC)\"?",
    "options": [
      "The smallest value of a physical quantity that can be measured directly by an instrument.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The smallest value of a physical quantity that can be measured directly by an instrument.. Standard Vernier Calipers LC = 0.1 mm (0.01 cm); Standard Screw Gauge LC = 0.01 mm (0.001 cm).",
    "difficulty": "Easy",
    "conceptTested": "Least Count (LC) definition"
  },
  {
    "id": "prac-physunitsleastcount-9",
    "question": "In the study of Least Count & Significant Figures, what is the exact definition and significance of \"Pitch\"?",
    "options": [
      "The linear distance moved by the spindle of a screw gauge along the main scale during one complete rotation of the circular thimble.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The linear distance moved by the spindle of a screw gauge along the main scale during one complete rotation of the circular thimble.. Pitch = (Distance moved on main scale) / (Number of full rotations).",
    "difficulty": "Easy",
    "conceptTested": "Pitch definition"
  },
  {
    "id": "prac-physunitsleastcount-10",
    "question": "In the study of Least Count & Significant Figures, what is the exact definition and significance of \"Positive Zero Error\"?",
    "options": [
      "Error present when the zero mark of the vernier or circular scale lies ahead (to the right or above) the main scale zero mark when jaws touch.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Error present when the zero mark of the vernier or circular scale lies ahead (to the right or above) the main scale zero mark when jaws touch.. Positive zero error is ALWAYS SUBTRACTED from the observed reading: True = Observed - Error.",
    "difficulty": "Easy",
    "conceptTested": "Positive Zero Error definition"
  }
],
  pyqs: [
    {
      id: 'pyq-lc-2020-1',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'Taking into account the significant figures, what is the value of 9.99 m - 0.0099 m?',
      options: [
        '9.9801 m',
        '9.98 m',
        '9.980 m',
        '9.9 m'
      ],
      correctAnswer: 1,
      explanation: 'In subtraction, result is rounded to least decimal places. 9.99 m has 2 decimal places, 0.0099 m has 4. 9.99 - 0.0099 = 9.9801 m ⇒ Rounding to 2 decimal places gives 9.98 m.',
      topicId: 'phys-units-least-count',
      difficulty: 'Easy',
      conceptTested: 'Significant Figures in Subtraction',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-lc-2020-2',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'A screw gauge has least count of 0.01 mm and there are 50 divisions in its circular scale. The pitch of the screw gauge is:',
      options: [
        '0.01 mm',
        '0.25 mm',
        '0.50 mm',
        '1.0 mm'
      ],
      correctAnswer: 2,
      explanation: 'Least Count = Pitch / Circular Scale Divisions ⇒ Pitch = LC × Divisions = 0.01 mm × 50 = 0.50 mm.',
      topicId: 'phys-units-least-count',
      difficulty: 'Easy',
      conceptTested: 'Pitch and Least Count of Screw Gauge',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Least Count & Significant Figures',
    confidenceLabel: 'MODERATE',
    confidenceText: 'Moderate Confidence: Based on 2 verified direct PYQs in official archives.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 1,
    totalDirectPyqs: 2,
    totalHistoricalMarks: 8,
    averageDirectPyqsPerPaper: 0.13,
    maxDirectPyqsInSinglePaper: 2,
    minDirectPyqsInSinglePaper: 2,
    minDirectMarks: 8,
    maxDirectMarks: 8,
    avgDirectMarksPerPaper: 0.53,
    typicalContributionMarks: 8,
    historicalMarksRangeText: '8 marks per paper when present (tested in 1 of 15 analyzed papers)',
    whatThisMeansForYou: 'Mastering Vernier Calipers, Screw Gauge least count, zero error correction, and significant figure rules provides high reliability for scoring direct marks in NEET Physics.',
    yearWiseBreakdown: [
      {
        year: 2020,
        exam: 'NEET UG 2020',
        directPyqCount: 2,
        marks: 8,
        questionType: 'Significant Figures in Subtraction & Screw Gauge Pitch',
        classification: 'Direct',
        verificationStatus: 'Verified (NEET UG 2020 Paper)'
      }
    ],
    sourceInfo: {
      dataSource: 'Official NEET UG Examination Archives',
      analysisPeriod: '2010 – 2024 (15 Verified Papers)',
      directPyqsAnalyzedCount: 2,
      classificationMethod: 'Strict topic-level matching against verified NEET UG historical papers.',
      disclaimer: 'Historical records serve as learning reference and do not guarantee future question selection.'
    }
  }
}
