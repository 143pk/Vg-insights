import { DetailedTopicContent } from '../../types/neet';

export const physWaveSuperpositionDetails: DetailedTopicContent = {
  topicId: 'phys-wave-superposition',
  topicName: 'Wave Superposition & Reflection',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Oscillations & Waves',
  chapter: 'Waves',

  whatIsThisTopic: 'Wave Superposition & Reflection explores what happens when two or more wave pulses overlap in space (Principle of Superposition) and how waves behave upon encountering boundary interfaces. It details algebraic wave vector addition, constructive and destructive interference, resultant intensity formulas, phase-path-time difference conversions (Δφ = (2π/λ) Δx), and phase shifts during reflection from rigid (π phase flip) versus free boundaries (zero phase flip).',

  basicIdea: [
    'Principle of Superposition: When two or more waves travel simultaneously through a medium, the net displacement at any point is the vector sum of individual displacements: y_net(x,t) = y_1(x,t) + y_2(x,t) + ...',
    'Interference of Waves: Superposition of two coherent waves of equal frequency and constant phase difference produces spatial redistribution of energy into bright/loud maxima and dark/silent minima.',
    'Phase Difference vs Path Difference: Phase difference Δφ is related to path difference Δx and time difference Δt by: Δφ = (2π / λ) Δx = (2π / T) Δt.',
    'Constructive Interference (Maxima): Phase difference Δφ = 2n π (or Δx = n λ, where n = 0, 1, 2...). Resultant amplitude A_max = A_1 + A_2 and maximum intensity I_max = (√I_1 + √I_2)².',
    'Destructive Interference (Minima): Phase difference Δφ = (2n + 1) π (or Δx = (n + ½) λ). Resultant amplitude A_min = |A_1 - A_2| and minimum intensity I_min = (√I_1 - √I_2)².',
    'Reflection at Rigid Boundary (Fixed End): When a wave hits a rigid support or denser medium, the reflected wave flips upside down, undergoing a PHASE CHANGE OF π RADIANS (180°). A crest reflects as a trough.',
    'Reflection at Free Boundary (Open End): When a wave reflects from a free boundary or rarer medium, it reflects with ZERO PHASE CHANGE (Δφ = 0). A crest reflects as a crest.'
  ],

  importantTerms: [
    {
      term: 'Principle of Superposition',
      definition: 'Vector summation of individual wave displacements when multiple waves overlap at the same position and instant.'
    },
    {
      term: 'Phase Difference (Δφ)',
      definition: 'Angular measure of how far two wave oscillations are out of step with each other at a given position/time.'
    },
    {
      term: 'Coherent Wave Sources',
      definition: 'Sources that emit waves of the exact same frequency with a zero or constant phase difference over time.'
    },
    {
      term: 'Rigid Boundary Reflection',
      definition: 'Reflection off a denser medium or fixed wall causing a phase reversal of π (180°).'
    },
    {
      term: 'Free Boundary Reflection',
      definition: 'Reflection off a flexible ring or rarer medium resulting in zero phase shift.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Interference & Resultant Amplitude Equations',
      paragraphs: [
        'Superposition of Two Harmonic Waves:',
        '• Let two waves be y_1 = A_1 sin(ω t) and y_2 = A_2 sin(ω t + φ).',
        '• Net displacement: y_net = y_1 + y_2 = A_R sin(ω t + θ).',
        '• Resultant Amplitude: A_R = √[ A_1² + A_2² + 2 A_1 A_2 cos φ ].',
        '• Resultant Intensity (since I ∝ A²): I_R = I_1 + I_2 + 2 √(I_1 I_2) cos φ.',
        'Special Interference Cases (Equal Initial Amplitudes A_1 = A_2 = A, I_1 = I_2 = I_0):',
        '1. Constructive Interference (In-Phase, φ = 0, 2π, 4π...):',
        '   • A_max = 2 A, Maximum Intensity I_max = 4 I_0.',
        '2. Destructive Interference (Out-of-Phase, φ = π, 3π, 5π...):',
        '   • A_min = 0, Minimum Intensity I_min = 0.',
        'Contrast Ratio Formula:',
        '• (I_max / I_min) = [ (A_1 + A_2) / (A_1 - A_2) ]² = [ (√I_1 + √I_2) / (√I_1 - √I_2) ]².',
        '• Average Intensity in Interference Pattern: I_avg = (I_max + I_min) / 2 = I_1 + I_2 (Strict conservation of energy!).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 230" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Fixed Boundary Reflection (Top) -->
          <text x="20" y="30" fill="#38bdf8" font-size="11" font-weight="bold">1. Reflection at Rigid End (Phase shift π)</text>
          <line x1="200" y1="20" x2="200" y2="100" stroke="#ef4444" stroke-width="4"/>
          <!-- Incident crest -->
          <path d="M 30 60 Q 70 20 110 60" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
          <text x="70" y="75" fill="#38bdf8" font-size="10">Incident Crest →</text>
          <!-- Reflected trough -->
          <path d="M 110 60 Q 150 100 190 60" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4"/>
          <text x="130" y="45" fill="#f59e0b" font-size="10">← Reflected Trough</text>

          <!-- Divider -->
          <line x1="20" y1="115" x2="480" y2="115" stroke="#475569" stroke-dasharray="4"/>

          <!-- Free Boundary Reflection (Bottom) -->
          <text x="20" y="140" fill="#10b981" font-size="11" font-weight="bold">2. Reflection at Free End (Zero phase shift)</text>
          <line x1="200" y1="130" x2="200" y2="210" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3"/>
          <circle cx="200" cy="170" r="5" fill="#none" stroke="#10b981" stroke-width="2"/>
          <!-- Incident crest -->
          <path d="M 30 170 Q 70 130 110 170" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
          <!-- Reflected crest -->
          <path d="M 110 170 Q 150 130 190 170" fill="none" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4"/>
          <text x="130" y="190" fill="#10b981" font-size="10">← Reflected Crest</text>
        </svg>`,
        caption: 'Wave Reflection Boundaries: Rigid end flips wave phase by π (180°), whereas Free end reflects with 0 phase shift.'
      }
    },
    {
      heading: '2. Boundary Reflection Rules & Phase Shift',
      paragraphs: [
        'Rigid (Denser) Boundary Reflection:',
        '• Incident Wave: y_i(x,t) = A_i sin(k x - ω t).',
        '• Reflected Wave: y_r(x,t) = - A_r sin(- k x - ω t) = A_r sin(k x + ω t + π).',
        '• A phase jump of π occurs because the rigid boundary exerts an equal and opposite reaction force on the medium.',
        'Free (Rarer) Boundary Reflection:',
        '• Incident Wave: y_i(x,t) = A_i sin(k x - ω t).',
        '• Reflected Wave: y_r(x,t) = A_r sin(- k x - ω t) = A_r sin(k x + ω t).',
        '• No phase shift occurs (Δφ = 0).',
        'Phase-Path-Time Triad Formulas:',
        '• Δφ = (2π / λ) Δx.',
        '• Δφ = (2π / T) Δt.',
        '• Δx = (v) Δt.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Resultant Interference Intensity',
      formulaName: 'Interference Intensity Equation',
      formula: 'I_R = I_1 + I_2 + 2 \\sqrt{I_1 I_2} \\cos \\phi',
      meaning: 'Calculates net wave intensity resulting from superposition of two coherent waves with phase difference φ.',
      variables: 'I_R = resultant intensity, I_1, I_2 = individual wave intensities, φ = phase difference',
      whenToUse: 'Use to calculate maximum, minimum, or arbitrary phase interference intensity.'
    },
    {
      title: 'Phase-Path Difference Conversion',
      formulaName: 'Phase to Path Difference Formula',
      formula: '\\Delta \\phi = \\frac{2\\pi}{\\lambda} \\Delta x',
      meaning: 'Converts spatial path difference Δx between two wave routes into angular phase difference Δφ.',
      variables: 'Δφ = phase difference (radians), λ = wavelength (m), Δx = path difference (m)',
      whenToUse: 'Essential bridge equation for wave interference and double-path problems.'
    },
    {
      title: 'Intensity Contrast Ratio',
      formulaName: 'Max to Min Intensity Ratio',
      formula: '\\frac{I_{max}}{I_{min}} = \\left( \\frac{A_1 + A_2}{A_1 - A_2} \\right)^2 = \\left( \\frac{\\sqrt{I_1} + \\sqrt{I_2}}{\\sqrt{I_1} - \\sqrt{I_2}} \\right)^2',
      meaning: 'Gives ratio of peak constructive intensity to trough destructive intensity in an interference fringe pattern.',
      variables: 'A_1, A_2 = amplitudes of interfering waves, I_1, I_2 = individual wave intensities',
      whenToUse: 'Use when given amplitude/intensity ratios and asked for contrast or maximum/minimum ratios.'
    },
    {
      title: 'Reflected Wave Equation (Rigid End)',
      formulaName: 'Rigid End Wave Reflection',
      formula: 'y_r(x,t) = - A \\sin(k x + \\omega t) = A \\sin(k x + \\omega t + \\pi)',
      meaning: 'Represents wave reflected from a fixed/rigid boundary with direction reversal and π phase shift.',
      variables: 'y_r = reflected displacement, A = amplitude, k = wave number, ω = angular frequency',
      whenToUse: 'Use when finding wave equations of reflected pulses on fixed string boundaries.'
    }
  ],

  neetImportantPoints: [
    '🔥 Reflection off a RIGID/FIXED boundary flips the wave phase by π radians (180°). A crest reflects back as a trough!',
    '🔥 Reflection off a FREE/OPEN boundary causes ZERO phase shift. A crest reflects back as a crest!',
    '🔥 Interference redistributes wave energy without losing any energy: Average intensity across the entire pattern is I_avg = I_1 + I_2.',
    '🔥 Sum of maximum and minimum intensities in interference is I_{max} + I_{min} = 2(I_1 + I_2).',
    '🔥 Path difference for constructive interference is Δx = n λ, and for destructive interference is Δx = (n + ½) λ.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking energy is destroyed during destructive interference when I_min = 0.',
      correctFact: 'Energy is NOT destroyed! Total energy is conserved. The missing energy at destructive minima is redirected to enhance constructive maxima (where I_max = 4 I_0 instead of 2 I_0).',
      whyItMattersForNEET: 'Conceptual assertion-reason question on energy conservation in waves.'
    },
    {
      commonConfusion: 'Forgetting the phase reversal for string waves fixed to a wall.',
      correctFact: 'When a wave on a string hits a fixed wall (denser boundary), both direction of motion AND phase flip (y_r = -A sin(kx + ωt)).',
      whyItMattersForNEET: 'Trap in writing reflected wave equations.'
    },
    {
      commonConfusion: 'Mixing up formula for phase difference vs path difference.',
      correctFact: 'Remember: Δφ / (2π) = Δx / λ = Δt / T. Multiply by 2π to get phase difference Δφ = (2π/λ) Δx.',
      whyItMattersForNEET: 'Standard conversion error in numericals.'
    }
  ],

  quickRevision: [
    'Superposition: y_{net} = y_1 + y_2.',
    'Phase difference: Δφ = (2π/λ) Δx = (2π/T) Δt.',
    'Resultant Amplitude: A_R = √(A_1² + A_2² + 2 A_1 A_2 cos φ).',
    'Constructive: Δφ = 2nπ, Δx = nλ, I_{max} = (√I_1 + √I_2)².',
    'Destructive: Δφ = (2n+1)π, Δx = (n+½)λ, I_{min} = (√I_1 - √I_2)².',
    'I_{max} + I_{min} = 2(I_1 + I_2); I_{avg} = I_1 + I_2.',
    'Rigid boundary reflection: Phase shift = π (180°).',
    'Free boundary reflection: Phase shift = 0.'
  ],

  practiceQuestions: [
  {
    "id": "p-wavesuper-1",
    "question": "Two coherent sound sources produce waves of amplitudes 3 cm and 4 cm at a point. What is the ratio of maximum intensity to minimum intensity at that point?",
    "options": [
      "49 : 1",
      "7 : 1",
      "16 : 9",
      "25 : 1"
    ],
    "correctOption": 0,
    "explanation": "A_max = A_1 + A_2 = 3 + 4 = 7 cm. A_min = |A_1 - A_2| = |3 - 4| = 1 cm. Since I ∝ A², the intensity ratio is I_max / I_min = (A_max / A_min)² = (7 / 1)² = 49 / 1 = 49 : 1.",
    "difficulty": "Easy",
    "conceptTested": "Max to min intensity ratio calculation"
  },
  {
    "id": "p-wavesuper-2",
    "question": "A progressive wave y = A sin(kx - ωt) is reflected from a rigid boundary at x = 0. What is the equation of the reflected wave?",
    "options": [
      "y_r = -A sin(kx + ωt)",
      "y_r = A sin(kx + ωt)",
      "y_r = -A sin(kx - ωt)",
      "y_r = A cos(kx + ωt)"
    ],
    "correctOption": 0,
    "explanation": "Reflection from a rigid boundary reverses direction of propagation (-x direction, so kx + ωt) and introduces a phase change of π radians. Thus y_r = A sin(kx + ωt + π) = -A sin(kx + ωt).",
    "difficulty": "Easy",
    "conceptTested": "Reflected wave equation at rigid boundary"
  },
  {
    "id": "prac-physwavesuperposition-3",
    "question": "Regarding Wave Superposition & Reflection, which of the following statements correctly resolves a common misconception about \"Thinking energy is destroyed during destructive interference when I_min = 0.\"?",
    "options": [
      "Energy is NOT destroyed! Total energy is conserved. The missing energy at destructive minima is redirected to enhance constructive maxima (where I_max = 4 I_0 instead of 2 I_0).",
      "Incorrect assumption: Thinking energy is destroyed during destructive interference when I_min = 0.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Energy is NOT destroyed! Total energy is conserved. The missing energy at destructive minima is redirected to enhance constructive maxima (where I_max = 4 I_0 instead of 2 I_0).. Conceptual assertion-reason question on energy conservation in waves.",
    "difficulty": "Medium",
    "conceptTested": "Wave Superposition & Reflection - Conceptual Clarity"
  },
  {
    "id": "prac-physwavesuperposition-4",
    "question": "Regarding Wave Superposition & Reflection, which of the following statements correctly resolves a common misconception about \"Forgetting the phase reversal for string waves fixed to a wall.\"?",
    "options": [
      "When a wave on a string hits a fixed wall (denser boundary), both direction of motion AND phase flip (y_r = -A sin(kx + ωt)).",
      "Incorrect assumption: Forgetting the phase reversal for string waves fixed to a wall.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "When a wave on a string hits a fixed wall (denser boundary), both direction of motion AND phase flip (y_r = -A sin(kx + ωt)).. Trap in writing reflected wave equations.",
    "difficulty": "Medium",
    "conceptTested": "Wave Superposition & Reflection - Conceptual Clarity"
  },
  {
    "id": "prac-physwavesuperposition-5",
    "question": "Regarding Wave Superposition & Reflection, which of the following statements correctly resolves a common misconception about \"Mixing up formula for phase difference vs path difference.\"?",
    "options": [
      "Remember: Δφ / (2π) = Δx / λ = Δt / T. Multiply by 2π to get phase difference Δφ = (2π/λ) Δx.",
      "Incorrect assumption: Mixing up formula for phase difference vs path difference.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Remember: Δφ / (2π) = Δx / λ = Δt / T. Multiply by 2π to get phase difference Δφ = (2π/λ) Δx.. Standard conversion error in numericals.",
    "difficulty": "Medium",
    "conceptTested": "Wave Superposition & Reflection - Conceptual Clarity"
  },
  {
    "id": "prac-physwavesuperposition-6",
    "question": "In the study of Wave Superposition & Reflection, what is the exact definition and significance of \"Principle of Superposition\"?",
    "options": [
      "Vector summation of individual wave displacements when multiple waves overlap at the same position and instant.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Vector summation of individual wave displacements when multiple waves overlap at the same position and instant.. ",
    "difficulty": "Easy",
    "conceptTested": "Principle of Superposition definition"
  },
  {
    "id": "prac-physwavesuperposition-7",
    "question": "In the study of Wave Superposition & Reflection, what is the exact definition and significance of \"Phase Difference (Δφ)\"?",
    "options": [
      "Angular measure of how far two wave oscillations are out of step with each other at a given position/time.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Angular measure of how far two wave oscillations are out of step with each other at a given position/time.. ",
    "difficulty": "Easy",
    "conceptTested": "Phase Difference (Δφ) definition"
  },
  {
    "id": "prac-physwavesuperposition-8",
    "question": "In the study of Wave Superposition & Reflection, what is the exact definition and significance of \"Coherent Wave Sources\"?",
    "options": [
      "Sources that emit waves of the exact same frequency with a zero or constant phase difference over time.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Sources that emit waves of the exact same frequency with a zero or constant phase difference over time.. ",
    "difficulty": "Easy",
    "conceptTested": "Coherent Wave Sources definition"
  },
  {
    "id": "prac-physwavesuperposition-9",
    "question": "In the study of Wave Superposition & Reflection, what is the exact definition and significance of \"Rigid Boundary Reflection\"?",
    "options": [
      "Reflection off a denser medium or fixed wall causing a phase reversal of π (180°).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Reflection off a denser medium or fixed wall causing a phase reversal of π (180°).. ",
    "difficulty": "Easy",
    "conceptTested": "Rigid Boundary Reflection definition"
  },
  {
    "id": "prac-physwavesuperposition-10",
    "question": "In the study of Wave Superposition & Reflection, what is the exact definition and significance of \"Free Boundary Reflection\"?",
    "options": [
      "Reflection off a flexible ring or rarer medium resulting in zero phase shift.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Reflection off a flexible ring or rarer medium resulting in zero phase shift.. ",
    "difficulty": "Easy",
    "conceptTested": "Free Boundary Reflection definition"
  }
],
  pyqs: [
    {
      id: 'pyq-wavesuper-2018',
      year: 2018,
      exam: 'NEET UG 2018',
      question: 'Two periodic waves of intensities I_1 and I_2 pass through a region at the same time in the same direction. The sum of the maximum and minimum intensities is:',
      options: [
        '2(I_1 + I_2)',
        'I_1 + I_2',
        '\\sqrt{I_1} + \\sqrt{I_2}',
        '(\\sqrt{I_1} + \\sqrt{I_2})^2'
      ],
      correctOption: 0,
      explanation: 'Maximum intensity I_{max} = I_1 + I_2 + 2 \\sqrt{I_1 I_2}. Minimum intensity I_{min} = I_1 + I_2 - 2 \\sqrt{I_1 I_2}. Adding both: I_{max} + I_{min} = (I_1 + I_2 + 2 \\sqrt{I_1 I_2}) + (I_1 + I_2 - 2 \\sqrt{I_1 I_2}) = 2(I_1 + I_2).',
      difficulty: 'Easy',
      conceptTested: 'Sum of maximum and minimum interference intensities',
      verified: true
    },
    {
      id: 'pyq-wavesuper-2014',
      year: 2014,
      exam: 'AIPMT 2014',
      question: 'A wave travelling in a medium has wavelength \\lambda and time period T. The path difference corresponding to a phase difference of \\phi is:',
      options: [
        '\\frac{\\lambda}{2\\pi} \\phi',
        '\\frac{2\\pi}{\\lambda} \\phi',
        '\\frac{\\lambda}{2\\pi T} \\phi',
        '2\\pi \\lambda \\phi'
      ],
      correctOption: 0,
      explanation: 'The fundamental relation between phase difference \\phi and path difference \\Delta x is: \\phi = \\frac{2\\pi}{\\lambda} \\Delta x. Rearranging for path difference \\Delta x yields: \\Delta x = \\frac{\\lambda}{2\\pi} \\phi.',
      difficulty: 'Easy',
      conceptTested: 'Relationship between phase difference and path difference',
      verified: true
    }
  ]
};
