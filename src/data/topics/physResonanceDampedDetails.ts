import { DetailedTopicContent } from '../../types/neet';

export const physResonanceDampedDetails: DetailedTopicContent = {
  topicId: 'phys-resonance-damped',
  topicName: 'Resonance & Damped Oscillations',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Oscillations & Waves',
  chapter: 'Oscillations',

  whatIsThisTopic: 'Resonance & Damped Oscillations studies real-world oscillatory systems where energy loss occurs (Damped Oscillations) or where external periodic driving forces maintain motion (Forced Oscillations & Resonance). It covers damping force F_d = -b v, exponential amplitude decay A(t) = A_0 e^(-bt/2m), forced oscillation amplitude response, resonance conditions (ω_d = ω_0), resonance sharpness, and practical NEET applications.',

  basicIdea: [
    'Free Oscillations: An ideal oscillator displaced and released oscillates with its natural frequency ω_0 = √(k/m). In ideal free oscillations, no energy is dissipated, so amplitude and total mechanical energy remain strictly constant indefinitely.',
    'Damped Oscillations: Real oscillators experience drag/resistive forces (such as air resistance or viscous friction). Damping force is proportional to velocity: F_d = -b v, where b is damping constant (SI unit: kg/s or N·s/m).',
    'Exponential Amplitude Decay: Damping reduces displacement amplitude exponentially with time: A(t) = A_0 e^(-b t / 2m). Mechanical energy decays twice as fast: E(t) = E_0 e^(-b t / m).',
    'Damped Natural Frequency: Damping slows down the oscillation. Damped angular frequency is ω\' = √(ω_0² - b² / 4m²). Since ω\' < ω_0, damping INCREASES the time period of oscillation (T\' > T_0).',
    'Forced (Driven) Oscillations: When a system is driven by a continuous external periodic force F(t) = F_0 cos(ω_d t), after initial transients die out, the system oscillates stably at the DRIVING FREQUENCY ω_d (NOT its natural frequency!).',
    'Resonance Condition: When driving frequency ω_d equals natural frequency ω_0 (ω_d = ω_0), the amplitude of forced oscillation reaches its absolute maximum value: A_max = F_0 / (b ω_0).',
    'Sharpness of Resonance & Q-Factor: Sharpness of resonance peak depends inversely on damping b. Small damping produces a tall, narrow peak (sharp resonance, high Q-factor); large damping produces a broad, flat peak (low Q-factor).'
  ],

  importantTerms: [
    {
      term: 'Damping Constant (b)',
      definition: 'Constant of proportionality between damping force and velocity (F_d = -b v, SI unit: kg/s).'
    },
    {
      term: 'Damping Coefficient (γ)',
      definition: 'Decay constant γ = b / (2m), defining rate of exponential amplitude attenuation.'
    },
    {
      term: 'Natural Frequency (ω_0)',
      definition: 'Frequency at which an undamped system oscillates naturally when disturbed from equilibrium (ω_0 = √(k/m)).'
    },
    {
      term: 'Driving Frequency (ω_d)',
      definition: 'Frequency of external periodic driving force applied to a forced oscillator.'
    },
    {
      term: 'Resonance',
      definition: 'Phenomenon of dramatically enlarged oscillation amplitude when driving frequency matches natural frequency (ω_d = ω_0).'
    },
    {
      term: 'Quality Factor (Q-factor)',
      definition: 'Dimensionless parameter representing sharpness of resonance: Q = ω_0 / Δω = 2π (Energy Stored / Energy Dissipated per cycle).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Damped Oscillations Mechanics',
      paragraphs: [
        'Differential Equation of Damped Harmonic Oscillator:',
        '• Net force F_net = Restoring Force + Damping Force = - k x - b v.',
        '• m (d²x / dt²) + b (dx / dt) + k x = 0 ⇒ (d²x / dt²) + (b/m) (dx / dt) + (k/m) x = 0.',
        '• Solution for Small Damping (b² < 4 m k): x(t) = A_0 e^(-b t / 2m) cos(ω\' t + φ).',
        'Kinematic & Energetic Features:',
        '1. Amplitude Decay: A(t) = A_0 e^(-b t / 2m). As time t increases, amplitude decreases exponentially.',
        '   • Amplitude after n oscillations (time t = n T\'): A_n = A_0 [e^(-b T\' / 2m)]ⁿ.',
        '   • Key NEET Pattern: If amplitude becomes (1/x) A_0 after N oscillations, after 2N oscillations it becomes (1/x)² A_0, and after 3N oscillations it becomes (1/x)³ A_0!',
        '2. Damped Angular Frequency: ω\' = √[ (k/m) - (b² / 4m²) ] = √[ ω_0² - (b / 2m)² ].',
        '   • Because ω\' < ω_0, the time period T\' = 2π / ω\' is GREATER than undamped period T_0.',
        '3. Energy Dissipation: E(t) = ½ k [A(t)]² = ½ k A_0² e^(-b t / m) = E_0 e^(-b t / m).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 230" className="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-3 border border-slate-800">
          <!-- Axes -->
          <line x1="40" y1="115" x2="460" y2="115" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4"/>
          <line x1="40" y1="20" x2="40" y2="210" stroke="#94a3b8" stroke-width="2"/>
          <text x="460" y="110" fill="#94a3b8" font-size="11">Time (t)</text>
          <text x="15" y="25" fill="#94a3b8" font-size="11">x(t)</text>

          <!-- Exponential Envelope (Dashed Yellow) -->
          <path d="M 40 30 Q 200 80 440 110" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4"/>
          <path d="M 40 200 Q 200 150 440 120" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4"/>
          <text x="250" y="45" fill="#f59e0b" font-size="11" font-weight="bold">A(t) = A₀ e^(-bt/2m)</text>

          <!-- Damped Oscillation Wave (Blue) -->
          <path d="M 40 30 Q 80 200 120 45 T 200 115 T 280 115 T 360 115 T 440 115" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
          <text x="100" y="180" fill="#38bdf8" font-size="11" font-weight="bold">Damped Wave x(t)</text>
        </svg>`,
        caption: 'Damped Oscillation Envelope: Exponential decay of amplitude A(t) over time due to damping force F = -bv.'
      }
    },
    {
      heading: '2. Forced Oscillations & Resonance Response',
      paragraphs: [
        'Forced Oscillations Mechanics:',
        '• Differential Equation: m (d²x / dt²) + b (dx / dt) + k x = F_0 cos(ω_d t).',
        '• Steady-state Amplitude: A = F_0 / √[ m² (ω_d² - ω_0²)² + b² ω_d² ].',
        'Resonance Conditions & Characteristics:',
        '1. Resonance Condition: Driving frequency equals natural frequency (ω_d = ω_0).',
        '2. Amplitude at Resonance: Substituting ω_d = ω_0 into amplitude formula yields: A_res = F_0 / (b ω_0).',
        '3. Role of Damping: If b → 0 (zero damping), A_res → ∞ (infinite resonance). In real systems with finite damping b, A_res is large but finite.',
        'Sharpness of Resonance & Practical Applications:',
        '• High Q-Factor (Small b): Resonance curve has a narrow, tall peak. System is highly selective to driving frequency.',
        '• Low Q-Factor (Large b): Resonance curve is broad and flat.',
        'Practical Applications in NEET:',
        '• Soldiers marching across a bridge break step to avoid matching the bridge\'s natural frequency, which could induce destructive resonance.',
        '• Tuning a radio: Changing capacitance/inductance adjusts LCR natural frequency ω_0 to match desired radio station frequency ω_d.',
        '• Earthquakes: Buildings whose natural frequency matches seismic wave frequency suffer maximum sway amplitude and collapse.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Damping Force',
      formulaName: 'Viscous Drag Formula',
      formula: 'F_d = - b v',
      meaning: 'Restive force opposing velocity during damped oscillation.',
      variables: 'F_d = damping force (N), b = damping constant (kg/s), v = velocity (m/s)',
      whenToUse: 'Use to find units/dimensions of damping constant or resistive force.'
    },
    {
      title: 'Damped Amplitude Decay',
      formulaName: 'Exponential Amplitude Formula',
      formula: 'A(t) = A_0 e^{-\\frac{b t}{2m}}',
      meaning: 'Calculates amplitude at time t in damped harmonic motion.',
      variables: 'A(t) = amplitude at time t, A_0 = initial amplitude, b = damping constant, m = mass',
      whenToUse: 'Use for questions on amplitude reduction after specified time or oscillations.'
    },
    {
      title: 'Damped Angular Frequency',
      formulaName: 'Damped Frequency Equation',
      formula: '\\omega\' = \\sqrt{\\omega_0^2 - \\left(\\frac{b}{2m}\\right)^2}',
      meaning: 'Calculates reduced angular frequency of damped oscillation.',
      variables: 'ω\' = damped angular frequency, ω_0 = undamped natural frequency = √(k/m)',
      whenToUse: 'Use to calculate change in frequency or time period due to damping.'
    },
    {
      title: 'Resonance Amplitude',
      formulaName: 'Maximum Forced Oscillation Amplitude',
      formula: 'A_{res} = \\frac{F_0}{b \\omega_0}',
      meaning: 'Gives peak amplitude during forced oscillation at resonance (ω_d = ω_0).',
      variables: 'F_0 = peak driving force, b = damping constant, ω_0 = natural frequency',
      whenToUse: 'Use to find maximum amplitude at resonance or evaluate effect of damping.'
    }
  ],

  neetImportantPoints: [
    '🔥 SI unit of damping constant b is kg/s (or N·s/m), and its dimensional formula is [M¹ L⁰ T⁻¹].',
    '🔥 If amplitude reduces to A_0 / x after N oscillations, it reduces to A_0 / x² after 2N oscillations and A_0 / x³ after 3N oscillations!',
    '🔥 Damping REDUCES oscillation frequency (ω\' < ω_0) and INCREASES time period (T\' > T_0).',
    '🔥 In steady-state forced oscillations, the particle oscillates strictly with the DRIVING FREQUENCY ω_d, NOT its natural frequency ω_0.',
    '🔥 Resonance occurs when driving frequency matches natural frequency (ω_d = ω_0), producing maximum amplitude A_max = F_0 / (b ω_0).',
    '🔥 Small damping produces a SHARP (narrow, high) resonance peak; large damping produces a FLAT (broad, low) resonance peak.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Expecting a forced oscillator to vibrate with its natural frequency in steady state.',
      correctFact: 'In steady state, the system forgets its natural frequency and vibrates strictly at the frequency of the external driving force ω_d.',
      whyItMattersForNEET: 'Very popular conceptual trap question in NEET.'
    },
    {
      commonConfusion: 'Confusing exponent in amplitude decay formula with energy decay formula.',
      correctFact: 'Amplitude decays as e^(-bt / 2m), whereas Energy decays as e^(-bt / m) (because E ∝ A², so power of 2 in exponent cancels the 2 in denominator!).',
      whyItMattersForNEET: 'Exponent mismatch causes wrong factor of 2 in numericals.'
    },
    {
      commonConfusion: 'Thinking damping increases frequency of oscillation.',
      correctFact: 'Damping opposes motion and slows down oscillations, reducing frequency (ω\' = √(ω_0² - b²/4m²)) and increasing time period.',
      whyItMattersForNEET: 'Conceptual assertion-reason questions in NEET.'
    }
  ],

  quickRevision: [
    'Damping Force: F = -b v; Unit of b = kg/s [M T⁻¹].',
    'Amplitude decay: A(t) = A_0 e^(-bt/2m).',
    'Energy decay: E(t) = E_0 e^(-bt/m).',
    'After N oscillations A → A_0/x ⇒ after 2N oscillations A → A_0/x².',
    'Damped frequency: ω\' = √(ω_0² - b²/4m²) < ω_0 ⇒ T\' > T_0.',
    'Forced oscillation frequency = Driving frequency ω_d.',
    'Resonance: ω_d = ω_0 ⇒ A_max = F_0 / (b ω_0).',
    'Small damping = Sharp resonance peak; Large damping = Flat peak.'
  ],

  practiceQuestions: [
  {
    "id": "p-resdamp-1",
    "question": "A damped harmonic oscillator has a mass of 250 g and a spring constant of 100 N/m. If the damping constant b is 0.2 kg/s, calculate the time required for its amplitude to drop to 1/e of its initial value.",
    "options": [
      "2.5 s",
      "5.0 s",
      "1.25 s",
      "10.0 s"
    ],
    "correctOption": 0,
    "explanation": "The amplitude formula is A(t) = A_0 e^(-bt / 2m). We need A(t) = A_0 / e = A_0 e⁻¹. Therefore: bt / 2m = 1 ⇒ t = 2m / b. Given m = 250 g = 0.25 kg and b = 0.2 kg/s: t = (2 × 0.25) / 0.2 = 0.50 / 0.2 = 2.5 seconds.",
    "difficulty": "Medium",
    "conceptTested": "Time constant for amplitude decay in damped oscillation"
  },
  {
    "id": "p-resdamp-2",
    "question": "Which of the following statements is INCORRECT regarding forced oscillations?",
    "options": [
      "In steady state, the oscillator vibrates with its natural frequency.",
      "At resonance, the amplitude of oscillation reaches maximum.",
      "Smaller damping leads to sharper resonance peak.",
      "The amplitude at resonance is inversely proportional to damping constant."
    ],
    "correctOption": 0,
    "explanation": "In steady state, a forced oscillator vibrates strictly with the DRIVING FREQUENCY (ω_d), NOT its natural frequency (ω_0). Therefore, option 0 is incorrect.",
    "difficulty": "Easy",
    "conceptTested": "Properties of forced oscillations and steady state response"
  },
  {
    "id": "prac-physresonancedamped-3",
    "question": "Regarding Resonance & Damped Oscillations, which of the following statements correctly resolves a common misconception about \"Expecting a forced oscillator to vibrate with its natural frequency in steady state.\"?",
    "options": [
      "In steady state, the system forgets its natural frequency and vibrates strictly at the frequency of the external driving force ω_d.",
      "Incorrect assumption: Expecting a forced oscillator to vibrate with its natural frequency in steady state.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "In steady state, the system forgets its natural frequency and vibrates strictly at the frequency of the external driving force ω_d.. Very popular conceptual trap question in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Resonance & Damped Oscillations - Conceptual Clarity"
  },
  {
    "id": "prac-physresonancedamped-4",
    "question": "Regarding Resonance & Damped Oscillations, which of the following statements correctly resolves a common misconception about \"Confusing exponent in amplitude decay formula with energy decay formula.\"?",
    "options": [
      "Amplitude decays as e^(-bt / 2m), whereas Energy decays as e^(-bt / m) (because E ∝ A², so power of 2 in exponent cancels the 2 in denominator!).",
      "Incorrect assumption: Confusing exponent in amplitude decay formula with energy decay formula.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Amplitude decays as e^(-bt / 2m), whereas Energy decays as e^(-bt / m) (because E ∝ A², so power of 2 in exponent cancels the 2 in denominator!).. Exponent mismatch causes wrong factor of 2 in numericals.",
    "difficulty": "Medium",
    "conceptTested": "Resonance & Damped Oscillations - Conceptual Clarity"
  },
  {
    "id": "prac-physresonancedamped-5",
    "question": "Regarding Resonance & Damped Oscillations, which of the following statements correctly resolves a common misconception about \"Thinking damping increases frequency of oscillation.\"?",
    "options": [
      "Damping opposes motion and slows down oscillations, reducing frequency (ω' = √(ω_0² - b²/4m²)) and increasing time period.",
      "Incorrect assumption: Thinking damping increases frequency of oscillation.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Damping opposes motion and slows down oscillations, reducing frequency (ω' = √(ω_0² - b²/4m²)) and increasing time period.. Conceptual assertion-reason questions in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Resonance & Damped Oscillations - Conceptual Clarity"
  },
  {
    "id": "prac-physresonancedamped-6",
    "question": "In the study of Resonance & Damped Oscillations, what is the exact definition and significance of \"Damping Constant (b)\"?",
    "options": [
      "Constant of proportionality between damping force and velocity (F_d = -b v, SI unit: kg/s).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Constant of proportionality between damping force and velocity (F_d = -b v, SI unit: kg/s).. ",
    "difficulty": "Easy",
    "conceptTested": "Damping Constant (b) definition"
  },
  {
    "id": "prac-physresonancedamped-7",
    "question": "In the study of Resonance & Damped Oscillations, what is the exact definition and significance of \"Damping Coefficient (γ)\"?",
    "options": [
      "Decay constant γ = b / (2m), defining rate of exponential amplitude attenuation.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Decay constant γ = b / (2m), defining rate of exponential amplitude attenuation.. ",
    "difficulty": "Easy",
    "conceptTested": "Damping Coefficient (γ) definition"
  },
  {
    "id": "prac-physresonancedamped-8",
    "question": "In the study of Resonance & Damped Oscillations, what is the exact definition and significance of \"Natural Frequency (ω_0)\"?",
    "options": [
      "Frequency at which an undamped system oscillates naturally when disturbed from equilibrium (ω_0 = √(k/m)).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Frequency at which an undamped system oscillates naturally when disturbed from equilibrium (ω_0 = √(k/m)).. ",
    "difficulty": "Easy",
    "conceptTested": "Natural Frequency (ω_0) definition"
  },
  {
    "id": "prac-physresonancedamped-9",
    "question": "In the study of Resonance & Damped Oscillations, what is the exact definition and significance of \"Driving Frequency (ω_d)\"?",
    "options": [
      "Frequency of external periodic driving force applied to a forced oscillator.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Frequency of external periodic driving force applied to a forced oscillator.. ",
    "difficulty": "Easy",
    "conceptTested": "Driving Frequency (ω_d) definition"
  },
  {
    "id": "prac-physresonancedamped-10",
    "question": "In the study of Resonance & Damped Oscillations, what is the exact definition and significance of \"Resonance\"?",
    "options": [
      "Phenomenon of dramatically enlarged oscillation amplitude when driving frequency matches natural frequency (ω_d = ω_0).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Phenomenon of dramatically enlarged oscillation amplitude when driving frequency matches natural frequency (ω_d = ω_0).. ",
    "difficulty": "Easy",
    "conceptTested": "Resonance definition"
  }
],
  pyqs: [
    {
      id: 'pyq-resdamp-2019',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'When an oscillator completes 100 oscillations, its amplitude reduces to 1/3 of its initial value. What will be its amplitude when it completes 200 oscillations?',
      options: ['1/9', '1/6', '2/3', '1/27'],
      correctOption: 0,
      explanation: 'Amplitude in damped oscillation decays as A(t) = A_0 e^(-γ t). Let time for 1 oscillation be T\'. After 100 oscillations (t_1 = 100 T\'), A_1 = A_0 e^(-γ 100 T\') = (1/3) A_0 ⇒ e^(-γ 100 T\') = 1/3. After 200 oscillations (t_2 = 200 T\'), A_2 = A_0 e^(-γ 200 T\') = A_0 [e^(-γ 100 T\')]² = A_0 (1/3)² = (1/9) A_0. The amplitude becomes 1/9 of its initial value.',
      difficulty: 'Medium',
      conceptTested: 'Exponential amplitude decay over multiple oscillation cycles',
      verified: true
    },
    {
      id: 'pyq-resdamp-2017',
      year: 2017,
      exam: 'NEET UG 2017',
      question: 'The damping force on an oscillator is directly proportional to the velocity. The units of the constant of proportionality are:',
      options: ['kg s⁻¹', 'kg m s⁻¹', 'kg s', 'kg m s⁻²'],
      correctOption: 0,
      explanation: 'Given damping force F = b v ⇒ b = F / v. Unit of force F is Newton (N) = kg m s⁻², and unit of velocity v is m s⁻¹. Therefore, unit of constant b = (kg m s⁻²) / (m s⁻¹) = kg s⁻¹.',
      difficulty: 'Easy',
      conceptTested: 'Units and dimensions of damping constant b',
      verified: true
    },
    {
      id: 'pyq-resdamp-2016',
      year: 2016,
      exam: 'NEET UG 2016',
      question: 'A body performs forced oscillations. Let the displacement amplitude be maximum at driving frequency ω_1 and velocity amplitude be maximum at driving frequency ω_2. Then:',
      options: ['ω_1 < ω_0 and ω_2 = ω_0', 'ω_1 = ω_0 and ω_2 < ω_0', 'ω_1 = ω_0 and ω_2 = ω_0', 'ω_1 < ω_0 and ω_2 > ω_0'],
      correctOption: 0,
      explanation: 'In forced oscillations with damping: Velocity amplitude is V = ω_d A = F_0 / √[ m² (ω_d - ω_0²/ω_d)² + b² ]. Velocity amplitude (and kinetic energy) is maximum when ω_d = ω_0 (so ω_2 = ω_0). Displacement amplitude is A = F_0 / √[ m² (ω_d² - ω_0²)² + b² ω_d² ]. Maximizing A with respect to ω_d gives resonant driving frequency ω_1 = √(ω_0² - b²/2m²) < ω_0. Therefore, ω_1 < ω_0 and ω_2 = ω_0.',
      difficulty: 'Hard',
      conceptTested: 'Resonance frequency comparison for displacement vs velocity amplitude',
      verified: true
    }
  ]
};
