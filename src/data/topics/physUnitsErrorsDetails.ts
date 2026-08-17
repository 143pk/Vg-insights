import { DetailedTopicContent } from '../../types/neet'

export const physUnitsErrorsDetails: DetailedTopicContent = {
  topicId: 'phys-units-errors',
  topicName: 'Error Analysis & Propagation of Errors',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Physics & Measurement',
  chapter: 'Units and Measurements',

  whatIsThisTopic: 'Experimental error analysis quantifies uncertainty in physical measurements. No real-world physical measurement is infinitely accurate. In NEET Physics, error calculation is one of the highest-yielding topics in the entire syllabus. This section covers systematic, random, and gross errors; absolute, mean absolute, relative, and percentage errors; statistical mean calculation; worst-case error propagation rules for sums, differences, products, quotients, and power relations; and high-yield experimental applications (simple pendulum, density of sphere, Ohm’s law, kinetic energy).',

  basicIdea: [
    '1. Measurement Error: The difference between the measured value of a physical quantity and its true value. True value is best estimated by taking the arithmetic mean of repeated measurements: am = (a1 + a2 + ... + an) / n.',
    '2. Classification of Errors: Systematic Errors (directional, reproducible, caused by instrument calibration or personal flaw; removable) vs Random Errors (irregular, unpredictable fluctuations; reduced by taking n repeated observations, which reduces error by factor of 1/√n) vs Gross Errors (human carelessness).',
    '3. Absolute, Relative & Percentage Errors: Absolute Error Δai = |ai - am|. Mean Absolute Error Δam = Σ|Δai| / n. Relative Error = Δam / am. Percentage Error = (Δam / am) × 100%.',
    '4. Error Propagation Rules: Absolute errors ALWAYS ADD in addition and subtraction (ΔZ = ΔA + ΔB for Z = A ± B). Relative/Percentage errors ADD in multiplication, division, and power relations.',
    '5. Power Rule for Errors: For Z = (A^a · B^b) / C^c, the maximum relative error is ΔZ / Z = a(ΔA / A) + b(ΔB / B) + c(ΔC / C). Notice that exponent coefficients are ALWAYS POSITIVE (+c, NOT -c) because errors accumulate in worst-case combination!'
  ],

  importantTerms: [
    {
      term: 'Systematic Error',
      definition: 'Errors that tend to occur in one specific direction (consistently positive or consistently negative) due to known causes.',
      neetNote: 'Includes instrumental error, imperfect experimental technique, or personal parallax error. Can be eliminated by calibration!'
    },
    {
      term: 'Random Error',
      definition: 'Irregular errors occurring unpredictably in magnitude and sign due to uncontrolled environmental fluctuations.',
      neetNote: 'Taking n repeated observations reduces random error by a factor of 1 / √n.'
    },
    {
      term: 'Absolute Error',
      symbol: 'Δa',
      definition: 'The absolute magnitude of the difference between the true value (mean value) and an individual measured value: Δai = |ai - am|.',
      neetNote: 'Always non-negative! Represents the physical boundary of uncertainty in a single measurement.'
    },
    {
      term: 'Mean Absolute Error',
      symbol: 'Δam',
      definition: 'The arithmetic mean of the absolute errors of all individual measurements: Δam = Σ|Δai| / n.',
      neetNote: 'Represented as: Physical Quantity = am ± Δam.'
    },
    {
      term: 'Relative (Fractional) Error',
      symbol: 'Δa / a',
      definition: 'The ratio of the mean absolute error to the mean value of the quantity: Relative Error = Δam / am.',
      neetNote: 'A unitless ratio indicating the proportional precision of a measurement.'
    },
    {
      term: 'Percentage Error',
      symbol: '% Error',
      definition: 'Relative error expressed as a percentage: Percentage Error = (Δam / am) × 100%.',
      neetNote: 'The standard format used in NEET numerical questions.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Types and Sources of Measurement Errors',
      paragraphs: [
        'Experimental errors are broadly classified into three categories based on their origin and behavior:'
      ],
      tables: [
        {
          headers: ['Error Category', 'Primary Origin / Cause', 'Direction & Reproducibility', 'How to Eliminate / Reduce'],
          rows: [
            ['Systematic Error', 'Instrument zero error, faulty calibration, temperature shift, parallax', 'One direction (consistently + or consistently -)', 'Calibrate instrument, correct zero error, use proper technique'],
            ['Random Error', 'Unpredictable voltage fluctuations, air currents, temperature jitter', 'Irregular (both positive and negative)', 'Take large number n of observations and compute arithmetic mean'],
            ['Gross Error', 'Human carelessness, incorrect recording, misreading scale divisions', 'Random or massive outlier', 'Exercise care and re-check raw data recordings']
          ]
        }
      ]
    },
    {
      heading: '2. Quantitative Definitions of Error Metrics',
      paragraphs: [
        'Given n repeated measurements a1, a2, a3, ..., an:',
        '1. Mean (True) Value: am = (a1 + a2 + ... + an) / n',
        '2. Absolute Errors: Δa1 = |a1 - am|, Δa2 = |a2 - am|, ..., Δan = |an - am|',
        '3. Mean Absolute Error: Δam = (|Δa1| + |Δa2| + ... + |Δan|) / n',
        '4. Final Stated Value: Quantity a = am ± Δam',
        '5. Relative (Fractional) Error = Δam / am',
        '6. Percentage Error = (Δam / am) × 100%'
      ]
    },
    {
      heading: '3. Propagation of Errors: Rules for All Mathematical Operations',
      paragraphs: [
        'When physical quantities are combined algebraically to compute a derived result, uncertainties accumulate according to worst-case combination rules.'
      ],
      tables: [
        {
          headers: ['Mathematical Relation', 'Formula', 'Error Propagation Rule', 'Key Rule Notes'],
          rows: [
            ['Sum', 'Z = A + B', 'ΔZ = ΔA + ΔB', 'Absolute errors ADD directly'],
            ['Difference', 'Z = A - B', 'ΔZ = ΔA + ΔB', 'Absolute errors ALWAYS ADD! Never subtract ΔB!'],
            ['Product', 'Z = A · B', 'ΔZ / Z = ΔA / A + ΔB / B', 'Relative (fractional) errors ADD'],
            ['Quotient', 'Z = A / B', 'ΔZ / Z = ΔA / A + ΔB / B', 'Relative errors ADD! Denominator error adds!'],
            ['Power Function', 'Z = Aⁿ', 'ΔZ / Z = n (ΔA / A)', 'Exponent multiplies the relative error'],
            ['General Power Combination', 'Z = (Aᵃ · Bᵇ) / Cᶜ', 'ΔZ / Z = a(ΔA / A) + b(ΔB / B) + c(ΔC / C)', 'All exponents (a, b, c) are POSITIVE coefficients']
          ]
        }
      ]
    },
    {
      heading: '4. High-Yield Experimental Physics Examples in NEET',
      paragraphs: [
        '1. Simple Pendulum Acceleration due to Gravity g:',
        'Period T = 2π √(L / g) ⇒ g = 4π² L / T².',
        'Fractional Error: Δg / g = ΔL / L + 2 (ΔT / T).',
        'Percentage Error: % Error in g = (% Error in L) + 2 × (% Error in T).',
        '2. Density of a Spherical Body:',
        'Density ρ = M / V = M / [(4/3) π R³].',
        'Fractional Error: Δρ / ρ = ΔM / M + 3 (ΔR / R).',
        'Percentage Error: % Error in ρ = (% Error in M) + 3 × (% Error in R).',
        '3. Kinetic Energy and Momentum:',
        'K = (1/2) m v² = p² / (2m).',
        'Via velocity v: % Error in K = (% Error in m) + 2 × (% Error in v).',
        'Via momentum p: % Error in K = 2 × (% Error in p) + (% Error in m).'
      ]
    },
    {
      heading: '5. Solved Step-by-Step Worked Examples',
      paragraphs: ['Step-by-step worked teaching examples illustrating statistical error mean calculations and power-rule error propagation:'],
      examples: [
        {
          problem: 'Teaching Example 1: In an experiment, the period of oscillation of a simple pendulum is measured as 2.63 s, 2.56 s, 2.42 s, 2.71 s, and 2.80 s. Calculate the mean value, mean absolute error, and percentage error.',
          given: 'n = 5 readings: t1 = 2.63 s, t2 = 2.56 s, t3 = 2.42 s, t4 = 2.71 s, t5 = 2.80 s',
          stepByStep: [
            'Step 1: Calculate Mean Value tm = (2.63 + 2.56 + 2.42 + 2.71 + 2.80) / 5 = 13.12 / 5 = 2.624 s ≈ 2.62 s.',
            'Step 2: Calculate Absolute Errors: |2.63 - 2.62| = 0.01; |2.56 - 2.62| = 0.06; |2.42 - 2.62| = 0.20; |2.71 - 2.62| = 0.09; |2.80 - 2.62| = 0.18.',
            'Step 3: Calculate Mean Absolute Error Δtm = (0.01 + 0.06 + 0.20 + 0.09 + 0.18) / 5 = 0.54 / 5 = 0.108 s ≈ 0.11 s.',
            'Step 4: Calculate Percentage Error = (Δtm / tm) × 100% = (0.11 / 2.62) × 100% = 4.2%.'
          ],
          solution: 'Time period = (2.62 ± 0.11) s. Relative error = 0.042. Percentage error = 4.2%.',
          answer: '4.2%'
        },
        {
          problem: 'Teaching Example 2: Physical quantity P is given by P = (A³ B²) / (√C · D⁴). If percentage errors in A, B, C, D are 1%, 2%, 4%, and 1% respectively, find the maximum percentage error in P.',
          given: 'P = A³ B² C⁻¹/² D⁻⁴; %A = 1%, %B = 2%, %C = 4%, %D = 1%',
          stepByStep: [
            'Step 1: Write power rule equation for relative error in P:',
            'ΔP / P = 3(ΔA / A) + 2(ΔB / B) + (1/2)(ΔC / C) + 4(ΔD / D)',
            'Step 2: Substitute percentage errors as positive terms:',
            '% Error in P = 3(1%) + 2(2%) + (1/2)(4%) + 4(1%)',
            'Step 3: Calculate: 3% + 4% + 2% + 4% = 13%.'
          ],
          solution: 'Maximum percentage error in P is 13%.',
          answer: '13%'
        }
      ]
    }
  ],

  formulae: [
    {
      title: 'Arithmetic Mean Value',
      formula: 'a_m = frac{sum_{i=1}^n a_i}{n}',
      variables: 'am = mean true value estimate, ai = individual measurement, n = total readings',
      whenToUse: 'Determining the best estimate of true value from repeated experimental trials.'
    },
    {
      title: 'Percentage Error Formula',
      formula: 'text{Percentage Error} = left(frac{Delta a_m}{a_m}right) times 100\\%',
      variables: 'Δam = mean absolute error, am = mean value',
      whenToUse: 'Converting absolute uncertainties into percentage uncertainty.'
    },
    {
      title: 'General Power Rule for Error Propagation',
      formula: 'frac{Delta Z}{Z} = a left(frac{Delta A}{A}right) + b left(frac{Delta B}{B}right) + c left(frac{Delta C}{C}right)',
      variables: 'Z = (A^a · B^b) / C^c; a, b, c = power exponents; ΔA/A, ΔB/B, ΔC/C = relative errors',
      whenToUse: 'Calculating maximum fractional or percentage error for complex algebraic physical equations.'
    }
  ],

  neetImportantPoints: [
    'Errors ALWAYS ADD UP in worst-case analysis. Never subtract error terms, even for quantities in the denominator or subtracted variables!',
    'The physical variable with the highest exponent/power contributes the dominant share of error to the calculated result.',
    'Taking n repeated observations reduces random error by 1 / √n (e.g. taking 100 observations reduces random error to 1/10th).',
    'Percentage error in g determined via pendulum: % Error in g = % Error in L + 2 × (% Error in T).',
    'Percentage error in density of sphere: % Error in ρ = % Error in Mass + 3 × (% Error in Radius).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Subtracting percentage error terms for quantities in the denominator.',
      correctFact: 'For Z = A / B, ΔZ / Z = ΔA / A + ΔB / B (ADDITION, NOT SUBTRACTION)! Negative powers produce POSITIVE coefficients in error propagation.',
      whyItMattersForNEET: 'NEET examiners include distractor options where denominator errors are subtracted.'
    },
    {
      commonConfusion: 'Forgetting power multiplier coefficients in percentage error calculations.',
      correctFact: 'In Z = A³, relative error in Z is THREE TIMES relative error in A (3 × %A).',
      whyItMattersForNEET: 'Students frequently forget to multiply the percentage error by the exponent power.'
    },
    {
      commonConfusion: 'Subtracting absolute errors in Z = A - B.',
      correctFact: 'When subtracting two quantities (Z = A - B), their absolute uncertainties ADD: ΔZ = ΔA + ΔB!',
      whyItMattersForNEET: 'Because quantities subtract, students mistakenly subtract errors, leading to zero uncertainty.'
    }
  ],

  quickRevision: [
    'True value = Arithmetic Mean am = Σai / n.',
    'Sum/Diff: ΔZ = ΔA + ΔB. Prod/Quot: ΔZ/Z = ΔA/A + ΔB/B.',
    'Power relation Z = (Aᵃ Bᵇ) / Cᶜ ⇒ %Z = a(%A) + b(%B) + c(%C).',
    'Pendulum g error: %g = %L + 2(%T). Sphere density error: %ρ = %M + 3(%R).',
    'Random error reduced by 1 / √n through n repeated measurements.'
  ],

  practiceQuestions: [
  {
    "id": "prac-err-1",
    "question": "Practice Question — Original: The density of a sphere is determined by measuring its mass and diameter. If the maximum percentage error in measuring mass is 2% and in measuring diameter is 1.5%, what is the maximum percentage error in the calculated density?",
    "options": [
      "6.5%",
      "3.5%",
      "5.0%",
      "8.0%"
    ],
    "correctAnswer": 0,
    "explanation": "Density ρ = M / [(4/3) π (D/2)³] = 6 M / (π D³). Fractional error Δρ / ρ = ΔM / M + 3 (ΔD / D). % Error = 2% + 3(1.5%) = 2% + 4.5% = 6.5%. Option 1 is correct.",
    "difficulty": "Easy",
    "topicId": "phys-units-errors",
    "conceptTested": "Error Propagation in Density of Sphere"
  },
  {
    "id": "prac-err-2",
    "question": "Practice Question — Original: In a simple pendulum experiment, the length is measured as 100 cm with a 1 mm accuracy ruler, and time for 100 oscillations is measured as 200 s using a 0.1 s stopwatch. Find the percentage error in g.",
    "options": [
      "0.2%",
      "0.1%",
      "0.3%",
      "0.4%"
    ],
    "correctAnswer": 0,
    "explanation": "g = 4π² L / T². % Error in L = (0.1 cm / 100 cm) × 100% = 0.1%. % Error in T = (0.1 s / 200 s) × 100% = 0.05%. % Error in g = %L + 2(%T) = 0.1% + 2(0.05%) = 0.1% + 0.1% = 0.2%. Option 1 is correct.",
    "difficulty": "Medium",
    "topicId": "phys-units-errors",
    "conceptTested": "Experimental Physics Pendulum Error Analysis"
  },
  {
    "id": "prac-physunitserrors-3",
    "question": "Regarding Error Analysis & Propagation of Errors, which of the following statements correctly resolves a common misconception about \"Subtracting percentage error terms for quantities in the denominator.\"?",
    "options": [
      "For Z = A / B, ΔZ / Z = ΔA / A + ΔB / B (ADDITION, NOT SUBTRACTION)! Negative powers produce POSITIVE coefficients in error propagation.",
      "Incorrect assumption: Subtracting percentage error terms for quantities in the denominator.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "For Z = A / B, ΔZ / Z = ΔA / A + ΔB / B (ADDITION, NOT SUBTRACTION)! Negative powers produce POSITIVE coefficients in error propagation.. NEET examiners include distractor options where denominator errors are subtracted.",
    "difficulty": "Medium",
    "conceptTested": "Error Analysis & Propagation of Errors - Conceptual Clarity"
  },
  {
    "id": "prac-physunitserrors-4",
    "question": "Regarding Error Analysis & Propagation of Errors, which of the following statements correctly resolves a common misconception about \"Forgetting power multiplier coefficients in percentage error calculations.\"?",
    "options": [
      "In Z = A³, relative error in Z is THREE TIMES relative error in A (3 × %A).",
      "Incorrect assumption: Forgetting power multiplier coefficients in percentage error calculations.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "In Z = A³, relative error in Z is THREE TIMES relative error in A (3 × %A).. Students frequently forget to multiply the percentage error by the exponent power.",
    "difficulty": "Medium",
    "conceptTested": "Error Analysis & Propagation of Errors - Conceptual Clarity"
  },
  {
    "id": "prac-physunitserrors-5",
    "question": "Regarding Error Analysis & Propagation of Errors, which of the following statements correctly resolves a common misconception about \"Subtracting absolute errors in Z = A - B.\"?",
    "options": [
      "When subtracting two quantities (Z = A - B), their absolute uncertainties ADD: ΔZ = ΔA + ΔB!",
      "Incorrect assumption: Subtracting absolute errors in Z = A - B.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "When subtracting two quantities (Z = A - B), their absolute uncertainties ADD: ΔZ = ΔA + ΔB!. Because quantities subtract, students mistakenly subtract errors, leading to zero uncertainty.",
    "difficulty": "Medium",
    "conceptTested": "Error Analysis & Propagation of Errors - Conceptual Clarity"
  },
  {
    "id": "prac-physunitserrors-6",
    "question": "In the study of Error Analysis & Propagation of Errors, what is the exact definition and significance of \"Systematic Error\"?",
    "options": [
      "Errors that tend to occur in one specific direction (consistently positive or consistently negative) due to known causes.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Errors that tend to occur in one specific direction (consistently positive or consistently negative) due to known causes.. Includes instrumental error, imperfect experimental technique, or personal parallax error. Can be eliminated by calibration!",
    "difficulty": "Easy",
    "conceptTested": "Systematic Error definition"
  },
  {
    "id": "prac-physunitserrors-7",
    "question": "In the study of Error Analysis & Propagation of Errors, what is the exact definition and significance of \"Random Error\"?",
    "options": [
      "Irregular errors occurring unpredictably in magnitude and sign due to uncontrolled environmental fluctuations.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Irregular errors occurring unpredictably in magnitude and sign due to uncontrolled environmental fluctuations.. Taking n repeated observations reduces random error by a factor of 1 / √n.",
    "difficulty": "Easy",
    "conceptTested": "Random Error definition"
  },
  {
    "id": "prac-physunitserrors-8",
    "question": "In the study of Error Analysis & Propagation of Errors, what is the exact definition and significance of \"Absolute Error\"?",
    "options": [
      "The absolute magnitude of the difference between the true value (mean value) and an individual measured value: Δai = |ai - am|.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The absolute magnitude of the difference between the true value (mean value) and an individual measured value: Δai = |ai - am|.. Always non-negative! Represents the physical boundary of uncertainty in a single measurement.",
    "difficulty": "Easy",
    "conceptTested": "Absolute Error definition"
  },
  {
    "id": "prac-physunitserrors-9",
    "question": "In the study of Error Analysis & Propagation of Errors, what is the exact definition and significance of \"Mean Absolute Error\"?",
    "options": [
      "The arithmetic mean of the absolute errors of all individual measurements: Δam = Σ|Δai| / n.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The arithmetic mean of the absolute errors of all individual measurements: Δam = Σ|Δai| / n.. Represented as: Physical Quantity = am ± Δam.",
    "difficulty": "Easy",
    "conceptTested": "Mean Absolute Error definition"
  },
  {
    "id": "prac-physunitserrors-10",
    "question": "In the study of Error Analysis & Propagation of Errors, what is the exact definition and significance of \"Relative (Fractional) Error\"?",
    "options": [
      "The ratio of the mean absolute error to the mean value of the quantity: Relative Error = Δam / am.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The ratio of the mean absolute error to the mean value of the quantity: Relative Error = Δam / am.. A unitless ratio indicating the proportional precision of a measurement.",
    "difficulty": "Easy",
    "conceptTested": "Relative (Fractional) Error definition"
  }
],
  pyqs: [
    {
      id: 'pyq-err-2019-1',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'In an experiment, the percentage errors in the measurement of physical quantities A, B, C and D are 1%, 2%, 3% and 4% respectively. Then the maximum percentage error in the measurement of X, where X = (A² B¹/²) / (C¹/³ D³), will be:',
      options: [
        '10%',
        '(3/13)%',
        '16%',
        '-10%'
      ],
      correctAnswer: 2,
      explanation: 'For X = (A² B¹/²) / (C¹/³ D³), fractional error ΔX / X = 2(ΔA / A) + (1/2)(ΔB / B) + (1/3)(ΔC / C) + 3(ΔD / D). Substituting % errors = 2(1%) + (1/2)(2%) + (1/3)(3%) + 3(4%) = 2% + 1% + 1% + 12% = 16%.',
      topicId: 'phys-units-errors',
      difficulty: 'Easy',
      conceptTested: 'Error Propagation with Powers',
      marks: 4,
      classification: 'Direct',
      verified: true
    },
    {
      id: 'pyq-err-2013-1',
      year: 2013,
      exam: 'AIPMT 2013',
      question: 'A student measures the distance traversed in free fall of a body, initially at rest, in a given time. He uses this data to estimate g, the acceleration due to gravity. If the maximum percentage errors in measurement of the distance and the time are e1 and e2 respectively, the percentage error in the estimation of g is:',
      options: [
        'e1 - e2',
        'e1 + 2e2',
        'e1 + e2',
        'e1 - 2e2'
      ],
      correctAnswer: 1,
      explanation: 'Distance s = (1/2) g t² ⇒ g = 2s / t². Fractional error Δg / g = Δs / s + 2 (Δt / t). Given % error in s is e1 and % error in t is e2, percentage error in g = e1 + 2e2.',
      topicId: 'phys-units-errors',
      difficulty: 'Easy',
      conceptTested: 'Error Propagation in Free Fall Experiment',
      marks: 4,
      classification: 'Direct',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Error Analysis & Propagation of Errors',
    confidenceLabel: 'MODERATE',
    confidenceText: 'Moderate Confidence: Based on 2 verified direct PYQs in official archives.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 2,
    totalDirectPyqs: 2,
    totalHistoricalMarks: 8,
    averageDirectPyqsPerPaper: 0.13,
    maxDirectPyqsInSinglePaper: 1,
    minDirectPyqsInSinglePaper: 1,
    minDirectMarks: 4,
    maxDirectMarks: 4,
    avgDirectMarksPerPaper: 0.53,
    typicalContributionMarks: 4,
    historicalMarksRangeText: '4 marks per paper (tested in 2 of 15 analyzed papers)',
    whatThisMeansForYou: 'Error propagation is one of the most consistent and high-scoring question types in NEET Physics. Mastering the power rule guarantees fast 4-mark questions.',
    yearWiseBreakdown: [
      {
        year: 2019,
        exam: 'NEET UG 2019',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Error Propagation with Exponents & Power Formula',
        classification: 'Direct',
        verificationStatus: 'Verified (NEET UG 2019 Paper)'
      },
      {
        year: 2013,
        exam: 'AIPMT 2013',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Error Propagation in Free Fall Acceleration due to Gravity',
        classification: 'Direct',
        verificationStatus: 'Verified (AIPMT 2013 Paper)'
      }
    ],
    sourceInfo: {
      dataSource: 'Official NEET UG & AIPMT Examination Archives',
      analysisPeriod: '2010 – 2024 (15 Verified Papers)',
      directPyqsAnalyzedCount: 2,
      classificationMethod: 'Strict topic-level matching against verified NEET UG historical papers.',
      disclaimer: 'Historical records serve as learning reference and do not guarantee future question selection.'
    }
  }
}
