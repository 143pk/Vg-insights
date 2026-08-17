import { DetailedTopicContent } from '../../types/neet';

export const physStandingWavesDetails: DetailedTopicContent = {
  topicId: 'phys-standing-waves',
  topicName: 'Standing Waves & Organ Pipes',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Oscillations & Waves',
  chapter: 'Waves',

  whatIsThisTopic: 'Standing Waves & Organ Pipes examines stationary wave patterns formed by the superposition of two counter-propagating harmonic waves of identical frequency. It details node and antinode positions, fundamental frequencies, harmonics and overtones in stretched strings, open organ pipes (all harmonics present), closed organ pipes (odd harmonics only), end correction formulas (e ≈ 0.6 r), and resonance tube experiment calculations.',

  basicIdea: [
    'Formation of Standing Waves: When two identical waves of same amplitude A, frequency f, and wavelength λ travel in opposite directions along a line, their superposition forms a stationary (standing) wave: y_net(x,t) = [2 A sin(k x)] cos(ω t).',
    'Nodes & Antinodes: Nodes (N) are points of ZERO displacement amplitude (distance between consecutive nodes = λ/2). Antinodes (AN) are points of MAXIMUM displacement amplitude 2A (distance between consecutive antinodes = λ/2). Distance between a node and adjacent antinode = λ/4.',
    'Energy in Standing Waves: No net energy flows across node positions! Energy remains localized inside individual loops, sloshing continuously between kinetic and potential forms.',
    'Stretched Strings (Fixed at Both Ends): Ends must be nodes. Fundamental frequency f_1 = v / (2L) = (1 / 2L) √(T/μ). Harmonic frequencies f_n = n f_1 = n (v / 2L) (All harmonics n = 1, 2, 3... are present).',
    'Open Organ Pipe (Open at Both Ends): Displacement antinodes at both ends. Fundamental frequency f_1 = v / (2L). Harmonic frequencies f_n = n f_1 = n (v / 2L) (All harmonics n = 1, 2, 3... are present).',
    'Closed Organ Pipe (Closed at One End, Open at Other): Displacement node at closed end, antinode at open end. Fundamental frequency f_1 = v / (4L). Harmonic frequencies f_n = (2n - 1) f_1 = (2n - 1) (v / 4L) (ONLY ODD harmonics 1, 3, 5... are present!).',
    'End Correction (e): The displacement antinode forms slightly outside an open pipe end by e ≈ 0.6 r (where r is pipe radius). For open pipe L_eff = L + 2e; for closed pipe L_eff = L + e. In resonance column: v = 2 f (L_2 - L_1).'
  ],

  importantTerms: [
    {
      term: 'Nodes (N)',
      definition: 'Positions in a standing wave where amplitude is permanently ZERO and strain is maximum.'
    },
    {
      term: 'Antinodes (AN)',
      definition: 'Positions in a standing wave where amplitude is MAXIMUM (2A) and strain is zero.'
    },
    {
      term: 'Fundamental Frequency (f_1)',
      definition: 'Lowest possible natural frequency of vibration of a system (also called 1st Harmonic).'
    },
    {
      term: 'Harmonics',
      definition: 'Integral multiples of fundamental frequency (n f_1). The n-th harmonic has frequency n f_1.'
    },
    {
      term: 'Overtones',
      definition: 'Higher natural frequencies above the fundamental (1st overtone = next available frequency above f_1).'
    },
    {
      term: 'End Correction (e)',
      definition: 'Small distance e ≈ 0.6 r beyond the physical open end of a pipe where the actual antinode forms.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Standing Wave Equation & Node-Antinode Geometry',
      paragraphs: [
        'Superposition of Opposite Waves:',
        '• Incident wave y_1 = A sin(k x - ω t), Reflected wave y_2 = A sin(k x + ω t).',
        '• Resultant standing wave: y_net = y_1 + y_2 = 2 A sin(k x) cos(ω t).',
        '• Position-dependent Amplitude: A(x) = 2 A |sin(k x)|.',
        'Node Conditions:',
        '• Amplitude = 0 ⇒ sin(k x) = 0 ⇒ k x = n π ⇒ x = n (λ / 2) = 0, λ/2, λ, 3λ/2...',
        '• Distance between consecutive nodes = λ/2.',
        'Antinode Conditions:',
        '• Amplitude = 2A ⇒ |sin(k x)| = 1 ⇒ k x = (2n + 1) (π / 2) ⇒ x = (2n + 1) (λ / 4) = λ/4, 3λ/4, 5λ/4...',
        '• Distance between consecutive antinodes = λ/2.',
        '• Distance between adjacent Node and Antinode = λ/4.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 220" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Central equilibrium line -->
          <line x1="40" y1="110" x2="460" y2="110" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4"/>

          <!-- Standing Wave Loop 1 -->
          <path d="M 40 110 Q 145 20 250 110" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
          <path d="M 40 110 Q 145 200 250 110" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="3"/>

          <!-- Standing Wave Loop 2 -->
          <path d="M 250 110 Q 355 20 460 110" fill="none" stroke="#10b981" stroke-width="2.5"/>
          <path d="M 250 110 Q 355 200 460 110" fill="none" stroke="#10b981" stroke-width="2.5" stroke-dasharray="3"/>

          <!-- Node Markers -->
          <circle cx="40" cy="110" r="5" fill="#ef4444"/>
          <text x="40" y="130" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Node</text>
          <circle cx="250" cy="110" r="5" fill="#ef4444"/>
          <text x="250" y="130" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Node</text>
          <circle cx="460" cy="110" r="5" fill="#ef4444"/>
          <text x="460" y="130" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Node</text>

          <!-- Antinode Markers -->
          <circle cx="145" cy="20" r="4" fill="#f59e0b"/>
          <text x="145" y="15" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Antinode</text>
          <circle cx="355" cy="20" r="4" fill="#f59e0b"/>
          <text x="355" y="15" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Antinode</text>

          <!-- Distance λ/2 label -->
          <line x1="40" y1="180" x2="250" y2="180" stroke="#f59e0b" stroke-width="2"/>
          <polygon points="40,180 48,176 48,184" fill="#f59e0b"/>
          <polygon points="250,180 242,176 242,184" fill="#f59e0b"/>
          <text x="145" y="175" fill="#f59e0b" font-size="11" text-anchor="middle">λ / 2</text>
        </svg>`,
        caption: 'Standing Wave Profile: Nodes (Zero displacement) and Antinodes (Max displacement) spaced by λ/2.'
      }
    },
    {
      heading: '2. Stretched Strings vs Open & Closed Organ Pipes',
      paragraphs: [
        'Stretched String & Open Organ Pipe Comparison:',
        '• Stretched String (Fixed ends = Nodes): L = n (λ/2) ⇒ f_n = n (v / 2L) = n f_1.',
        '• Open Organ Pipe (Open ends = Antinodes): L = n (λ/2) ⇒ f_n = n (v / 2L) = n f_1.',
        '• BOTH string and open pipe produce ALL HARMONICS (1f_1, 2f_1, 3f_1, 4f_1...).',
        '• Fundamental frequency f_1 = v / (2L).',
        'Closed Organ Pipe (Closed at one end, open at other):',
        '• Closed end = Node, Open end = Antinode.',
        '• L = (2n - 1) (λ / 4) ⇒ Wavelength λ_n = 4L / (2n - 1).',
        '• Harmonic Frequencies: f_n = (2n - 1) (v / 4L) = (2n - 1) f_1.',
        '• Produces ONLY ODD HARMONICS (1f_1, 3f_1, 5f_1, 7f_1...).',
        '• Fundamental frequency f_1 = v / (4L). Note: An open pipe of length L has TWICE the fundamental frequency of a closed pipe of same length L (f_{open} = 2 f_{closed}).',
        'End Correction & Resonance Column Apparatus:',
        '• End correction e ≈ 0.6 r, where r is tube radius.',
        '• First resonance length: L_1 + e = λ / 4.',
        '• Second resonance length: L_2 + e = 3 λ / 4.',
        '• Subtracting equations: L_2 - L_1 = λ / 2 ⇒ Speed of sound v = 2 f (L_2 - L_1).',
        '• End correction formula from lengths: e = (L_2 - 3 L_1) / 2.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Stretched String & Open Pipe Frequency',
      formulaName: 'Open Pipe & String Harmonics',
      formula: 'f_n = n \\frac{v}{2L} = n f_1 \\quad (n = 1, 2, 3...)',
      meaning: 'Gives harmonic frequencies for a stretched string fixed at both ends or an open organ pipe.',
      variables: 'f_n = n-th harmonic frequency, n = harmonic number, v = wave speed (m/s), L = length (m)',
      whenToUse: 'Use for open pipes, stretched strings, sonometers, and all-harmonic systems.'
    },
    {
      title: 'Closed Organ Pipe Frequency',
      formulaName: 'Closed Pipe Odd Harmonics',
      formula: 'f_n = (2n - 1) \\frac{v}{4L} = (2n - 1) f_1 \\quad (n = 1, 2, 3...)',
      meaning: 'Gives harmonic frequencies for a pipe closed at one end (odd harmonics only).',
      variables: 'f_n = frequency of n-th mode, n = 1 gives fundamental (1st harmonic), n = 2 gives 1st overtone (3rd harmonic)',
      whenToUse: 'Use for closed organ pipes, resonance columns, and single-closed tubes.'
    },
    {
      title: 'Speed of Sound in Resonance Column',
      formulaName: 'Resonance Tube Sound Speed',
      formula: 'v = 2 f (L_2 - L_1)',
      meaning: 'Calculates speed of sound using first two resonance lengths in a water tube.',
      variables: 'v = speed of sound (m/s), f = tuning fork frequency (Hz), L_1 = 1st resonance length, L_2 = 2nd resonance length',
      whenToUse: 'Direct formula for NEET resonance column experiment questions.'
    },
    {
      title: 'End Correction Formula',
      formulaName: 'Organ Pipe End Correction',
      formula: 'e = \\frac{L_2 - 3 L_1}{2} \\approx 0.6 r',
      meaning: 'Calculates antinode offset outside open pipe end using inner radius r or resonance lengths.',
      variables: 'e = end correction (m), r = tube inner radius (m), L_1, L_2 = 1st and 2nd resonance air column lengths',
      whenToUse: 'Use when pipe radius or end correction is given in organ pipe numericals.'
    }
  ],

  neetImportantPoints: [
    '🔥 Closed organ pipes produce ONLY ODD HARMONICS (1f_1, 3f_1, 5f_1...), whereas open pipes produce ALL HARMONICS (1f_1, 2f_1, 3f_1...).',
    '🔥 An open pipe of length L has TWICE the fundamental frequency of a closed pipe of the same length L: f_{open} = 2 f_{closed} = v / (2L).',
    '🔥 The difference between consecutive harmonic frequencies in a closed organ pipe is 2 f_1 = v / (2L).',
    '🔥 Distance between adjacent node and antinode is λ/4; distance between adjacent nodes is λ/2.',
    '🔥 In a resonance tube experiment, speed of sound is v = 2 f (L_2 - L_1) and end correction is e = (L_2 - 3L_1) / 2.',
    '🔥 When an open organ pipe is half-immersed vertically in water, it becomes a closed organ pipe of half length (L/2), so its fundamental frequency remains UNCHANGED (f\' = f)!'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing 1st overtone with 2nd harmonic in closed organ pipes.',
      correctFact: 'In a closed pipe, the fundamental is 1st harmonic (f_1). The next available frequency (1st overtone) is the 3rd harmonic (3f_1). There is NO 2nd harmonic in a closed pipe!',
      whyItMattersForNEET: 'Very frequent trap in NEET numerical questions on organ pipes.'
    },
    {
      commonConfusion: 'Forgetting end correction when tube radius r is explicitly given.',
      correctFact: 'If pipe radius r is provided, replace physical length L with effective length L_{eff} = L + 0.6 r (for closed pipe) or L + 1.2 r (for open pipe).',
      whyItMattersForNEET: 'Numerical precision error trap in NEET.'
    },
    {
      commonConfusion: 'Thinking energy flows in standing waves.',
      correctFact: 'Standing waves do NOT transport energy through space. Nodes act as rigid energy barriers, trapping energy within individual loops.',
      whyItMattersForNEET: 'Conceptual comparison between progressive and standing waves.'
    }
  ],

  quickRevision: [
    'Standing wave: y = 2A sin(kx) cos(ωt).',
    'Nodes: A = 0, separated by λ/2; Antinodes: A = 2A, separated by λ/2.',
    'Node to Antinode distance = λ/4.',
    'Stretched string / Open pipe: f_n = n (v / 2L) (All harmonics 1, 2, 3...).',
    'Closed pipe: f_n = (2n - 1) (v / 4L) (Odd harmonics 1, 3, 5...).',
    'Open pipe fundamental = 2 × Closed pipe fundamental (for same L).',
    'Closed pipe adjacent harmonic difference = 2 f_1.',
    'Resonance tube: v = 2f (L_2 - L_1); e = (L_2 - 3L_1) / 2 ≈ 0.6 r.'
  ],

  practiceQuestions: [
  {
    "id": "p-standing-1",
    "question": "An open organ pipe of length 50 cm is sounded with a tuning fork. If the speed of sound in air is 340 m/s, what is the fundamental frequency of the pipe?",
    "options": [
      "340 Hz",
      "170 Hz",
      "680 Hz",
      "510 Hz"
    ],
    "correctOption": 0,
    "explanation": "Length L = 50 cm = 0.5 m, speed of sound v = 340 m/s. Fundamental frequency of open pipe is f_1 = v / (2L) = 340 / (2 × 0.5) = 340 / 1.0 = 340 Hz.",
    "difficulty": "Easy",
    "conceptTested": "Fundamental frequency calculation for open organ pipe"
  },
  {
    "id": "p-standing-2",
    "question": "In a resonance column experiment, the first two resonance lengths are observed at L_1 = 18 cm and L_2 = 58 cm with a tuning fork of frequency 400 Hz. What is the speed of sound in air?",
    "options": [
      "320 m/s",
      "340 m/s",
      "360 m/s",
      "300 m/s"
    ],
    "correctOption": 0,
    "explanation": "Using resonance column formula: v = 2 f (L_2 - L_1). Here L_1 = 0.18 m, L_2 = 0.58 m, f = 400 Hz. Therefore, v = 2 × 400 × (0.58 - 0.18) = 800 × 0.40 = 320 m/s.",
    "difficulty": "Medium",
    "conceptTested": "Speed of sound in resonance tube experiment"
  },
  {
    "id": "prac-physstandingwaves-3",
    "question": "Regarding Standing Waves & Organ Pipes, which of the following statements correctly resolves a common misconception about \"Confusing 1st overtone with 2nd harmonic in closed organ pipes.\"?",
    "options": [
      "In a closed pipe, the fundamental is 1st harmonic (f_1). The next available frequency (1st overtone) is the 3rd harmonic (3f_1). There is NO 2nd harmonic in a closed pipe!",
      "Incorrect assumption: Confusing 1st overtone with 2nd harmonic in closed organ pipes.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "In a closed pipe, the fundamental is 1st harmonic (f_1). The next available frequency (1st overtone) is the 3rd harmonic (3f_1). There is NO 2nd harmonic in a closed pipe!. Very frequent trap in NEET numerical questions on organ pipes.",
    "difficulty": "Medium",
    "conceptTested": "Standing Waves & Organ Pipes - Conceptual Clarity"
  },
  {
    "id": "prac-physstandingwaves-4",
    "question": "Regarding Standing Waves & Organ Pipes, which of the following statements correctly resolves a common misconception about \"Forgetting end correction when tube radius r is explicitly given.\"?",
    "options": [
      "If pipe radius r is provided, replace physical length L with effective length L_{eff} = L + 0.6 r (for closed pipe) or L + 1.2 r (for open pipe).",
      "Incorrect assumption: Forgetting end correction when tube radius r is explicitly given.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "If pipe radius r is provided, replace physical length L with effective length L_{eff} = L + 0.6 r (for closed pipe) or L + 1.2 r (for open pipe).. Numerical precision error trap in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Standing Waves & Organ Pipes - Conceptual Clarity"
  },
  {
    "id": "prac-physstandingwaves-5",
    "question": "Regarding Standing Waves & Organ Pipes, which of the following statements correctly resolves a common misconception about \"Thinking energy flows in standing waves.\"?",
    "options": [
      "Standing waves do NOT transport energy through space. Nodes act as rigid energy barriers, trapping energy within individual loops.",
      "Incorrect assumption: Thinking energy flows in standing waves.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Standing waves do NOT transport energy through space. Nodes act as rigid energy barriers, trapping energy within individual loops.. Conceptual comparison between progressive and standing waves.",
    "difficulty": "Medium",
    "conceptTested": "Standing Waves & Organ Pipes - Conceptual Clarity"
  },
  {
    "id": "prac-physstandingwaves-6",
    "question": "In the study of Standing Waves & Organ Pipes, what is the exact definition and significance of \"Nodes (N)\"?",
    "options": [
      "Positions in a standing wave where amplitude is permanently ZERO and strain is maximum.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Positions in a standing wave where amplitude is permanently ZERO and strain is maximum.. ",
    "difficulty": "Easy",
    "conceptTested": "Nodes (N) definition"
  },
  {
    "id": "prac-physstandingwaves-7",
    "question": "In the study of Standing Waves & Organ Pipes, what is the exact definition and significance of \"Antinodes (AN)\"?",
    "options": [
      "Positions in a standing wave where amplitude is MAXIMUM (2A) and strain is zero.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Positions in a standing wave where amplitude is MAXIMUM (2A) and strain is zero.. ",
    "difficulty": "Easy",
    "conceptTested": "Antinodes (AN) definition"
  },
  {
    "id": "prac-physstandingwaves-8",
    "question": "In the study of Standing Waves & Organ Pipes, what is the exact definition and significance of \"Fundamental Frequency (f_1)\"?",
    "options": [
      "Lowest possible natural frequency of vibration of a system (also called 1st Harmonic).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Lowest possible natural frequency of vibration of a system (also called 1st Harmonic).. ",
    "difficulty": "Easy",
    "conceptTested": "Fundamental Frequency (f_1) definition"
  },
  {
    "id": "prac-physstandingwaves-9",
    "question": "In the study of Standing Waves & Organ Pipes, what is the exact definition and significance of \"Harmonics\"?",
    "options": [
      "Integral multiples of fundamental frequency (n f_1). The n-th harmonic has frequency n f_1.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Integral multiples of fundamental frequency (n f_1). The n-th harmonic has frequency n f_1.. ",
    "difficulty": "Easy",
    "conceptTested": "Harmonics definition"
  },
  {
    "id": "prac-physstandingwaves-10",
    "question": "In the study of Standing Waves & Organ Pipes, what is the exact definition and significance of \"Overtones\"?",
    "options": [
      "Higher natural frequencies above the fundamental (1st overtone = next available frequency above f_1).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Higher natural frequencies above the fundamental (1st overtone = next available frequency above f_1).. ",
    "difficulty": "Easy",
    "conceptTested": "Overtones definition"
  }
],
  pyqs: [
    {
      id: 'pyq-standing-2020',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'A pipe open at both ends has a fundamental frequency f in air. The pipe is dipped vertically in water so that half of it is in water. The fundamental frequency of the air column is now:',
      options: ['f', '2 f', 'f / 2', '3 f / 4'],
      correctOption: 0,
      explanation: 'Initial fundamental frequency of open pipe of length L is f = v / (2L). When half dipped in water, it becomes a closed pipe of length L\' = L / 2. Fundamental frequency of this closed pipe is f\' = v / (4 L\') = v / (4 \\times (L/2)) = v / (2L) = f. Hence, the fundamental frequency remains f.',
      difficulty: 'Easy',
      conceptTested: 'Organ pipe transition from open to closed by water immersion',
      verified: true
    },
    {
      id: 'pyq-standing-2017',
      year: 2017,
      exam: 'NEET UG 2017',
      question: 'The two nearest harmonics of a tube closed at one end and open at the other end are 220 Hz and 260 Hz. What is the fundamental frequency of the system?',
      options: ['20 Hz', '40 Hz', '10 Hz', '30 Hz'],
      correctOption: 0,
      explanation: 'For a closed organ pipe, harmonics are odd multiples: (2n - 1) f_1 and (2n + 1) f_1. The difference between two consecutive harmonics is: [(2n + 1) - (2n - 1)] f_1 = 2 f_1. Given difference = 260 - 220 = 40 Hz. Therefore, 2 f_1 = 40 Hz \\implies f_1 = 20 Hz.',
      difficulty: 'Medium',
      conceptTested: 'Fundamental frequency from adjacent harmonics in closed organ pipe',
      verified: true
    },
    {
      id: 'pyq-standing-2016',
      year: 2016,
      exam: 'NEET UG 2016',
      question: 'The second harmonic of an open organ pipe has the same frequency as the third harmonic of a closed organ pipe of length L. The length of the open organ pipe is:',
      options: [
        '\\frac{4}{3} L',
        '\\frac{3}{4} L',
        '2 L',
        '\\frac{1}{2} L'
      ],
      correctOption: 0,
      explanation: 'Second harmonic of open pipe of length L_o: f_{open,2} = 2 \\left( \\frac{v}{2 L_o} \\right) = \\frac{v}{L_o}. Third harmonic of closed pipe of length L: f_{closed,3} = 3 \\left( \\frac{v}{4 L} \\right) = \\frac{3v}{4L}. Equating frequencies: \\frac{v}{L_o} = \\frac{3v}{4L} \\implies L_o = \\frac{4}{3} L.',
      difficulty: 'Medium',
      conceptTested: 'Equating harmonic frequencies of open and closed organ pipes',
      verified: true
    }
  ]
};
