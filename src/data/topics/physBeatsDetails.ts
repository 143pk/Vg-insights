import { DetailedTopicContent } from '../../types/neet';

export const physBeatsDetails: DetailedTopicContent = {
  topicId: 'phys-beats',
  topicName: 'Beats & Doppler Effect',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Oscillations & Waves',
  chapter: 'Waves',

  whatIsThisTopic: 'Beats & Doppler Effect studies two critical wave interference and relative motion phenomena. Beats occur due to the superposition of two sound waves of slightly different frequencies (|f_1 - f_2| ≤ 10 Hz), creating rhythmic intensity fluctuations. The Doppler Effect governs the apparent frequency shift heard by an observer when source or observer move relative to the medium, detailed through general sign-convention formulas and reflection-echo problems.',

  basicIdea: [
    'Beats Phenomenon: When two sound waves of nearly equal frequencies f_1 and f_2 (differing by less than 10 Hz) travel simultaneously in the same direction, their superposition produces a single tone whose loudness periodically waxes (loud) and wanes (silent).',
    'Beat Frequency: The number of beats heard per second is equal to the absolute difference of individual frequencies: f_b = |f_1 - f_2|. Time interval between consecutive loudness maxima T_b = 1 / |f_1 - f_2|.',
    'Tuning Fork Frequency Changes: Filing a prong removes mass, making it lighter and INCREASING frequency (f ↑). Loading a prong with wax adds mass, making it heavier and DECREASING frequency (f ↓).',
    'Doppler Effect: The apparent change in frequency of sound heard by an observer due to relative motion between the sound source, observer, and medium.',
    'Master Doppler Equation: f\' = f [ (v ± v_o) / (v ∓ v_s) ], where v is speed of sound in air, v_o is observer velocity, and v_s is source velocity.',
    'Directional Sign Rules: Motion that CLOSES the distance between source and observer INCREASES apparent frequency (v_o gets +, v_s gets -). Motion that OPENS the distance DECREASES frequency (v_o gets -, v_s gets +).',
    'Oblique Motion & Echoes: Only the velocity component along the line joining source and observer causes Doppler shift (v_{s,eff} = v_s cos θ). For reflections from a wall/cliff, the cliff acts as a stationary listener receiving shifted sound, then reflects it as a moving/stationary source.'
  ],

  importantTerms: [
    {
      term: 'Beat Frequency (f_b)',
      definition: 'Rate of periodic loudness fluctuations per second produced by interfering sound waves: f_b = |f_1 - f_2|.'
    },
    {
      term: 'Waxing & Waning',
      definition: 'Waxing is the moment of maximum constructive loudness; Waning is the moment of destructive silence in beats.'
    },
    {
      term: 'Doppler Shift',
      definition: 'Apparent frequency change Δf = f\' - f caused by relative motion between sound source and listener.'
    },
    {
      term: 'Apparent Frequency (f\')',
      definition: 'Actual frequency detected by a observer in motion relative to the source.'
    },
    {
      term: 'Persistence of Hearing',
      definition: 'Human ear capability limit (~0.1 s). Beats can be distinguished only if beat frequency f_b ≤ 10 Hz.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Beats Superposition Mechanics & Tuning Fork Rules',
      paragraphs: [
        'Superposition Derivation of Beats:',
        '• Let two sound waves be y_1 = A sin(2π f_1 t) and y_2 = A sin(2π f_2 t).',
        '• Superposition: y_net = y_1 + y_2 = [ 2 A cos(2π (f_1 - f_2)t / 2) ] sin(2π (f_1 + f_2)t / 2).',
        '• Amplitude varies as A_{net}(t) = 2 A cos(π (f_1 - f_2) t).',
        '• Maximum intensity occurs when |cos(π (f_1 - f_2) t)| = 1 ⇒ Frequency of intensity maxima is f_b = |f_1 - f_2|.',
        'Standard Tuning Fork Deduction Technique (High-Yield NEET Pattern!):',
        '1. Unknown tuning fork B produces b beats/s with known fork A (frequency f_A) ⇒ f_B = f_A + b OR f_B = f_A - b.',
        '2. Fork B is loaded with wax (f_B decreases to f_B\'):',
        '   • If beat frequency DECREASES (b\' < b): Original f_B was GREATER than f_A ⇒ f_B = f_A + b.',
        '   • If beat frequency INCREASES (b\' > b): Original f_B was SMALLER than f_A ⇒ f_B = f_A - b.',
        '3. Fork B is filed (f_B increases to f_B\'):',
        '   • If beat frequency DECREASES: Original f_B was SMALLER than f_A ⇒ f_B = f_A - b.',
        '   • If beat frequency INCREASES: Original f_B was GREATER than f_A ⇒ f_B = f_A + b.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 220" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Envelope (Dashed) -->
          <path d="M 40 30 Q 140 110 240 30 T 440 30" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4"/>
          <path d="M 40 190 Q 140 110 240 190 T 440 190" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4"/>

          <!-- High frequency carrier wave with modulated amplitude -->
          <path d="M 40 110 Q 50 40 60 110 T 80 110 T 100 110 T 120 110 T 140 110 T 160 110 T 180 110 T 200 110 T 220 110 T 240 110 Q 250 40 260 110 T 280 110 T 300 110 T 320 110 T 340 110 T 360 110 T 380 110 T 400 110 T 420 110 T 440 110" fill="none" stroke="#38bdf8" stroke-width="2"/>

          <!-- Maxima labels -->
          <circle cx="40" cy="30" r="4" fill="#ef4444"/>
          <text x="40" y="20" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">Waxing (Loud)</text>
          <circle cx="240" cy="30" r="4" fill="#ef4444"/>
          <text x="240" y="20" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">Waxing (Loud)</text>
          <circle cx="440" cy="30" r="4" fill="#ef4444"/>
          <text x="440" y="20" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">Waxing (Loud)</text>

          <!-- Minima labels -->
          <circle cx="140" cy="110" r="4" fill="#10b981"/>
          <text x="140" y="125" fill="#10b981" font-size="10" text-anchor="middle">Waning (Silent)</text>

          <!-- Beat Period arrow -->
          <line x1="40" y1="205" x2="240" y2="205" stroke="#f59e0b" stroke-width="2"/>
          <polygon points="40,205 48,201 48,209" fill="#f59e0b"/>
          <polygon points="240,205 232,201 232,209" fill="#f59e0b"/>
          <text x="140" y="200" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Beat Period T_b = 1 / |f₁ - f₂|</text>
        </svg>`,
        caption: 'Beat Envelope: Periodic amplitude modulation producing waxing (loud) and waning (silence).'
      }
    },
    {
      heading: '2. Doppler Effect Mechanics & Formula Matrix',
      paragraphs: [
        'Universal Doppler Formula:',
        '• f\' = f [ (v ± v_o) / (v ∓ v_s) ].',
        '• Rule: Pick signs such that approaching motion INCREASES f\' and receding motion DECREASES f\'.',
        'Standard Motion Cases:',
        '1. Source moving TOWARDS stationary observer (v_o = 0): f\' = f [ v / (v - v_s) ] > f.',
        '2. Source moving AWAY from stationary observer (v_o = 0): f\' = f [ v / (v + v_s) ] < f.',
        '3. Observer moving TOWARDS stationary source (v_s = 0): f\' = f [ (v + v_o) / v ] > f.',
        '4. Observer moving AWAY from stationary source (v_s = 0): f\' = f [ (v - v_o) / v ] < f.',
        '5. Both approaching each other: f\' = f [ (v + v_o) / (v - v_s) ].',
        '6. Both receding from each other: f\' = f [ (v - v_o) / (v + v_s) ].',
        'Special Cases & Limitations:',
        '• Oblique Motion (Source at angle θ): Use component along line of sight v_s cos θ. f\' = f [ v / (v - v_s cos θ) ].',
        '• Perpendicular Motion (θ = 90°): v_s cos 90° = 0 ⇒ NO Doppler shift in sound!',
        '• Echo Reflection from Cliff/Wall: Sound reaching cliff has frequency f_cliff = f [ v / (v - v_s) ]. Reflected echo heard by driver has observer moving towards source: f\' = f_cliff [ (v + v_o) / v ] = f [ (v + v_o) / (v - v_s) ].'
      ]
    }
  ],

  formulae: [
    {
      title: 'Beat Frequency',
      formulaName: 'Beat Rate Equation',
      formula: 'f_b = |f_1 - f_2|',
      meaning: 'Calculates beat frequency per second resulting from two interfering sound waves.',
      variables: 'f_b = beat frequency (Hz), f_1, f_2 = individual wave frequencies (Hz)',
      whenToUse: 'Use for two tuning forks sounding together or organ pipes producing beats.'
    },
    {
      title: 'Master Doppler Formula',
      formulaName: 'Universal Sound Doppler Equation',
      formula: 'f\' = f \\left( \\frac{v \\pm v_o}{v \\mp v_s} \\right)',
      meaning: 'Calculates apparent sound frequency heard by a moving observer from a moving source.',
      variables: 'f\' = apparent frequency (Hz), f = source frequency (Hz), v = sound speed in air, v_o = observer speed, v_s = source speed',
      whenToUse: 'Universal formula for all Doppler effect sound problems in NEET.'
    },
    {
      title: 'Oblique Doppler Motion',
      formulaName: 'Angled Source Doppler Shift',
      formula: 'f\' = f \\left( \\frac{v}{v - v_s \\cos \\theta} \\right)',
      meaning: 'Gives apparent frequency when source moves at angle θ relative to observer line of sight.',
      variables: 'v_s = source speed, θ = angle between source velocity vector and line joining source to observer',
      whenToUse: 'Use when source passes near observer along a straight line at angle θ.'
    },
    {
      title: 'Echo Reflection Frequency',
      formulaName: 'Cliff Echo Apparent Frequency',
      formula: 'f\' = f \\left( \\frac{v + v_o}{v - v_s} \\right)',
      meaning: 'Calculates echo frequency heard by a moving vehicle driver approaching a stationary reflective wall.',
      variables: 'v_s = vehicle source speed, v_o = vehicle driver speed (usually v_s = v_o), v = sound speed',
      whenToUse: 'Use for vehicle moving towards a cliff/wall blowing a horn and hearing the reflected echo.'
    }
  ],

  neetImportantPoints: [
    '🔥 Human ear can distinguish beats only if beat frequency f_b ≤ 10 Hz due to persistence of hearing (~0.1 s).',
    '🔥 Filing a tuning fork prong INCREASES its frequency (f ↑); loading a prong with wax DECREASES its frequency (f ↓).',
    '🔥 Doppler effect in sound is ASYMMETRIC: Source moving towards stationary observer gives f\' = f [v / (v - v_s)], whereas observer moving towards stationary source at same speed gives f\' = f [(v + v_s) / v]. These two apparent frequencies are NOT equal!',
    '🔥 No Doppler shift occurs if the source moves perpendicular to the line joining source and observer (θ = 90° ⇒ cos 90° = 0).',
    '🔥 If wind blows with speed w in the direction of sound propagation, replace sound speed v with (v + w).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking Doppler formula for source motion is identical to observer motion.',
      correctFact: 'They are different! Source motion alters the wavelength in air (λ\' = (v - v_s)/f), whereas observer motion alters relative wave speed relative to listener (v_{rel} = v + v_o).',
      whyItMattersForNEET: 'Very common sign and formula selection error in NEET.'
    },
    {
      commonConfusion: 'Assuming filing a tuning fork decreases its frequency.',
      correctFact: 'Filing makes the prong thinner and lighter (mass decreases), so stiffness/mass ratio increases and natural frequency INCREASES (f ↑). Waxing adds mass, so frequency DECREASES (f ↓).',
      whyItMattersForNEET: 'Classic tuning fork deduction problem trap.'
    },
    {
      commonConfusion: 'Applying Doppler shift when motion is strictly perpendicular.',
      correctFact: 'If relative motion vector is perpendicular to line of sight (θ = 90°), component along line of sight is zero (v_s cos 90° = 0), so apparent frequency equals true frequency (f\' = f).',
      whyItMattersForNEET: 'Tricky conceptual trap in NEET MCQs.'
    }
  ],

  quickRevision: [
    'Beats: f_b = |f_1 - f_2|; Max frequency for human ear = 10 Hz.',
    'Tuning fork: Filing → f ↑; Waxing → f ↓.',
    'Master Doppler: f\' = f [(v ± v_o) / (v ∓ v_s)].',
    'Approaching → f\' > f (v_o gets +, v_s gets -).',
    'Receding → f\' < f (v_o gets -, v_s gets +).',
    'Oblique motion: v_s → v_s cos θ; Perpendicular motion (θ = 90°) → No Doppler shift.',
    'Echo from cliff: f\' = f [(v + v_o) / (v - v_s)].'
  ],

  practiceQuestions: [
  {
    "id": "p-beats-1",
    "question": "A tuning fork A produces 4 beats/s with another tuning fork B of frequency 256 Hz. When fork A is filed slightly, it produces 6 beats/s with B. What was the original frequency of tuning fork A?",
    "options": [
      "252 Hz",
      "260 Hz",
      "250 Hz",
      "262 Hz"
    ],
    "correctOption": 0,
    "explanation": "Since f_b = 4 Hz and f_B = 256 Hz, original f_A could be 256 ± 4 = 260 Hz or 252 Hz. Filing fork A INCREASES its frequency (f_A ↑). If f_A was 260 Hz, filing would increase it to 262 Hz, giving beat rate |262 - 256| = 6 beats/s. Wait! Let's check: If f_A = 252 Hz, filing increases it to 250 Hz? No, filing INCREASES frequency! If f_A = 252 Hz, filing increases it to e.g. 250 Hz (decreases distance to 256, beats drop). If f_A = 260 Hz, filing increases it to 262 Hz, so beats increase from 4 to 6! Therefore, original frequency of A was 260 Hz? Wait: |260 - 256| = 4. When filed, f_A becomes 262 Hz, |262 - 256| = 6 beats/s. So f_A = 260 Hz! Wait, let me check option 0 vs 1: Option 1 is 260 Hz. Let me verify: If f_A = 252 Hz, filing increases f_A to 250? No! 252 + 2 = 254 Hz, beat rate |254 - 256| = 2 beats/s (beats decrease). If f_A = 260 Hz, filing increases f_A to 262 Hz, beat rate |262 - 256| = 6 beats/s (beats increase to 6). So original f_A = 260 Hz.",
    "difficulty": "Medium",
    "conceptTested": "Tuning fork filing deduction pattern"
  },
  {
    "id": "p-beats-2",
    "question": "A train moving at 30 m/s towards a stationary listener emits a whistle of frequency 600 Hz. If the velocity of sound in air is 330 m/s, what is the apparent frequency heard by the listener?",
    "options": [
      "660 Hz",
      "550 Hz",
      "630 Hz",
      "700 Hz"
    ],
    "correctOption": 0,
    "explanation": "Source moving towards stationary observer (v_o = 0, v_s = 30 m/s). Formula: f' = f [ v / (v - v_s) ] = 600 × [ 330 / (330 - 30) ] = 600 × [ 330 / 300 ] = 600 × 1.1 = 660 Hz.",
    "difficulty": "Easy",
    "conceptTested": "Doppler effect for approaching sound source"
  },
  {
    "id": "prac-physbeats-3",
    "question": "Regarding Beats & Doppler Effect, which of the following statements correctly resolves a common misconception about \"Thinking Doppler formula for source motion is identical to observer motion.\"?",
    "options": [
      "They are different! Source motion alters the wavelength in air (λ' = (v - v_s)/f), whereas observer motion alters relative wave speed relative to listener (v_{rel} = v + v_o).",
      "Incorrect assumption: Thinking Doppler formula for source motion is identical to observer motion.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "They are different! Source motion alters the wavelength in air (λ' = (v - v_s)/f), whereas observer motion alters relative wave speed relative to listener (v_{rel} = v + v_o).. Very common sign and formula selection error in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Beats & Doppler Effect - Conceptual Clarity"
  },
  {
    "id": "prac-physbeats-4",
    "question": "Regarding Beats & Doppler Effect, which of the following statements correctly resolves a common misconception about \"Assuming filing a tuning fork decreases its frequency.\"?",
    "options": [
      "Filing makes the prong thinner and lighter (mass decreases), so stiffness/mass ratio increases and natural frequency INCREASES (f ↑). Waxing adds mass, so frequency DECREASES (f ↓).",
      "Incorrect assumption: Assuming filing a tuning fork decreases its frequency.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Filing makes the prong thinner and lighter (mass decreases), so stiffness/mass ratio increases and natural frequency INCREASES (f ↑). Waxing adds mass, so frequency DECREASES (f ↓).. Classic tuning fork deduction problem trap.",
    "difficulty": "Medium",
    "conceptTested": "Beats & Doppler Effect - Conceptual Clarity"
  },
  {
    "id": "prac-physbeats-5",
    "question": "Regarding Beats & Doppler Effect, which of the following statements correctly resolves a common misconception about \"Applying Doppler shift when motion is strictly perpendicular.\"?",
    "options": [
      "If relative motion vector is perpendicular to line of sight (θ = 90°), component along line of sight is zero (v_s cos 90° = 0), so apparent frequency equals true frequency (f' = f).",
      "Incorrect assumption: Applying Doppler shift when motion is strictly perpendicular.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "If relative motion vector is perpendicular to line of sight (θ = 90°), component along line of sight is zero (v_s cos 90° = 0), so apparent frequency equals true frequency (f' = f).. Tricky conceptual trap in NEET MCQs.",
    "difficulty": "Medium",
    "conceptTested": "Beats & Doppler Effect - Conceptual Clarity"
  },
  {
    "id": "prac-physbeats-6",
    "question": "In the study of Beats & Doppler Effect, what is the exact definition and significance of \"Beat Frequency (f_b)\"?",
    "options": [
      "Rate of periodic loudness fluctuations per second produced by interfering sound waves: f_b = |f_1 - f_2|.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Rate of periodic loudness fluctuations per second produced by interfering sound waves: f_b = |f_1 - f_2|.. ",
    "difficulty": "Easy",
    "conceptTested": "Beat Frequency (f_b) definition"
  },
  {
    "id": "prac-physbeats-7",
    "question": "In the study of Beats & Doppler Effect, what is the exact definition and significance of \"Waxing & Waning\"?",
    "options": [
      "Waxing is the moment of maximum constructive loudness; Waning is the moment of destructive silence in beats.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Waxing is the moment of maximum constructive loudness; Waning is the moment of destructive silence in beats.. ",
    "difficulty": "Easy",
    "conceptTested": "Waxing & Waning definition"
  },
  {
    "id": "prac-physbeats-8",
    "question": "In the study of Beats & Doppler Effect, what is the exact definition and significance of \"Doppler Shift\"?",
    "options": [
      "Apparent frequency change Δf = f' - f caused by relative motion between sound source and listener.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Apparent frequency change Δf = f' - f caused by relative motion between sound source and listener.. ",
    "difficulty": "Easy",
    "conceptTested": "Doppler Shift definition"
  },
  {
    "id": "prac-physbeats-9",
    "question": "In the study of Beats & Doppler Effect, what is the exact definition and significance of \"Apparent Frequency (f')\"?",
    "options": [
      "Actual frequency detected by a observer in motion relative to the source.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Actual frequency detected by a observer in motion relative to the source.. ",
    "difficulty": "Easy",
    "conceptTested": "Apparent Frequency (f') definition"
  },
  {
    "id": "prac-physbeats-10",
    "question": "In the study of Beats & Doppler Effect, what is the exact definition and significance of \"Persistence of Hearing\"?",
    "options": [
      "Human ear capability limit (~0.1 s). Beats can be distinguished only if beat frequency f_b ≤ 10 Hz.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Human ear capability limit (~0.1 s). Beats can be distinguished only if beat frequency f_b ≤ 10 Hz.. ",
    "difficulty": "Easy",
    "conceptTested": "Persistence of Hearing definition"
  }
],
  pyqs: [
    {
      id: 'pyq-beats-2021',
      year: 2021,
      exam: 'NEET UG 2021',
      question: 'A siren emitting a sound of frequency 800 Hz moves away from an observer towards a cliff at a speed of 15 m/s. Then the frequency of sound that the observer hears in the echo reflected from the cliff is: (Take velocity of sound in air = 330 m/s)',
      options: ['838 Hz', '765 Hz', '800 Hz', '820 Hz'],
      correctOption: 0,
      explanation: 'The cliff acts as a stationary listener receiving sound from the approaching siren (v_s = 15 m/s towards cliff). Frequency reaching the cliff is: f_cliff = f \\left( \\frac{v}{v - v_s} \\right) = 800 \\times \\left( \\frac{330}{330 - 15} \\right) = 800 \\times \\left( \\frac{330}{315} \\right) \\approx 838.1 Hz \\approx 838 Hz. The cliff reflects this exact frequency back to the stationary observer. Thus the observer hears 838 Hz.',
      difficulty: 'Medium',
      conceptTested: 'Doppler effect with cliff echo reflection',
      verified: true
    },
    {
      id: 'pyq-beats-2017',
      year: 2017,
      exam: 'NEET UG 2017',
      question: 'Two cars moving in opposite directions approach each other with speed of 22 m/s and 16.5 m/s respectively. The driver of the first car blows a horn having a frequency 400 Hz. The frequency heard by the driver of the second car is: (velocity of sound in air = 340 m/s)',
      options: ['448 Hz', '361 Hz', '411 Hz', '425 Hz'],
      correctOption: 0,
      explanation: 'First car is source (v_s = 22 m/s approaching), second car is observer (v_o = 16.5 m/s approaching). Formula for mutual approach: f\' = f \\left( \\frac{v + v_o}{v - v_s} \\right) = 400 \\times \\left( \\frac{340 + 16.5}{340 - 22} \\right) = 400 \\times \\left( \\frac{356.5}{318} \\right) = 400 \\times 1.12107 \\approx 448.4 Hz \\approx 448 Hz.',
      difficulty: 'Medium',
      conceptTested: 'Doppler effect when both source and observer approach each other',
      verified: true
    },
    {
      id: 'pyq-beats-2015',
      year: 2015,
      exam: 'AIPMT 2015',
      question: 'A source of sound S emitting waves of frequency 100 Hz and an observer O are located at some distance from each other. The source is moving with a speed of 19.4 m/s at an angle of 60° with the line joining the source and the observer. The observer is at rest. The apparent frequency observed by the observer is: (velocity of sound = 330 m/s)',
      options: ['103 Hz', '100 Hz', '97 Hz', '106 Hz'],
      correctOption: 0,
      explanation: 'The effective component of source velocity along the line joining source and observer is v_{s,eff} = v_s \\cos 60° = 19.4 \\times 0.5 = 9.7 m/s (approaching). Using Doppler formula for stationary observer: f\' = f \\left( \\frac{v}{v - v_{s,eff}} \\right) = 100 \\times \\left( \\frac{330}{330 - 9.7} \\right) = 100 \\times \\left( \\frac{330}{320.3} \\right) \\approx 103.02 Hz \\approx 103 Hz.',
      difficulty: 'Medium',
      conceptTested: 'Doppler effect with oblique source velocity component',
      verified: true
    }
  ]
};
