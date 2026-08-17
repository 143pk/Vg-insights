import { DetailedTopicContent } from '../../types/neet';

export const physPowerDetails: DetailedTopicContent = {
  topicId: 'phys-power',
  topicName: 'Power & Efficiency',
  subject: 'Physics',
  class: 'Class 11',
  classification: 'Work, Energy & Power',
  chapter: 'Work, Energy and Power',

  whatIsThisTopic: 'Power (P) is defined as the time rate at which work is performed or mechanical energy is transferred by a force. While work measures the total cumulative energy delivered, power quantifies how fast that delivery occurs. Instantaneous power is the dot product of force vector F and instantaneous velocity vector v: P = dW/dt = F · v = F v cos θ. Mechanical efficiency η measures the ratio of useful output power to total input power supplied: η = (P_out / P_in) × 100%. This topic covers average vs instantaneous power, power derivations for constant and variable forces, vehicle motion under constant power delivery (v ∝ t¹/², s ∝ t³/²), water pump/engine power calculations, horsepower conversions, kilowatt-hour energy consumption, machine efficiency, and common NEET problem patterns.',

  basicIdea: [
    'Power is a SCALAR quantity equal to time derivative of work: P = dW/dt = F · v = F v cos θ.',
    'SI Unit of power is Watt (W) = 1 Joule/second (J/s). Dimensional Formula: [M¹ L² T⁻³]. Commercial energy unit: 1 kWh = 3.6 × 10⁶ J. 1 Horsepower (hp) = 746 W.',
    'Constant Power Motion: A machine delivering constant power P to accelerate mass m from rest yields speed v ∝ t¹/², displacement s ∝ t³/², and acceleration a ∝ t⁻¹/².',
    'Constant Force Motion: A machine exerting constant force F yields velocity v ∝ t, displacement s ∝ t², and power P ∝ t.',
    'Efficiency η = (P_out / P_in) × 100% = (Useful Output Work / Total Input Energy) × 100%. Power Loss P_loss = P_in - P_out.'
  ],

  importantTerms: [
    {
      term: 'Power (P)',
      definition: 'The rate of doing work or transferring energy per unit time: P = dW/dt.'
    },
    {
      term: 'Instantaneous Power',
      definition: 'Power at a specific instant of time, given by the scalar product of force vector F and velocity vector v: P = F · v = F v cos θ.'
    },
    {
      term: 'Average Power (P_avg)',
      definition: 'Total work done divided by total time elapsed: P_avg = ΔW / Δt = W_total / t_total.'
    },
    {
      term: 'Horsepower (hp)',
      definition: 'An imperial unit of mechanical power output: 1 hp = 746 Watts = 0.746 kW.'
    },
    {
      term: 'Mechanical Efficiency (η)',
      definition: 'The percentage of input power converted into useful mechanical work: η = (P_out / P_in) × 100%.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Meaning & Mathematical Derivation of Power',
      paragraphs: [
        'Suppose two workers lift identical 50 kg sacks to a height of 10 meters. Worker A takes 10 seconds, while Worker B takes 20 seconds. Both perform the EXACT SAME WORK (W = mgh = 4900 J). However, Worker A operates at TWICE THE POWER because Worker A completes the work in half the time!',
        'DEFINITIONS:',
        '• Average Power (P_avg): P_avg = Total Work Done (ΔW) / Total Time Elapsed (Δt) = ΔW / Δt.',
        '• Instantaneous Power (P): P = lim_{Δt → 0} (ΔW / Δt) = dW / dt.',
        'DERIVATION OF P = F · v:',
        'By definition, elemental work dW done by force F during infinitesimal displacement dr is dW = F · dr.',
        'Substituting dW into instantaneous power expression:',
        'P = dW / dt = (F · dr) / dt = F · (dr / dt) = F · v',
        'P = |F| |v| cos θ = F v cos θ',
        'where θ is the angle between force vector F and velocity vector v at that instant.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
          <rect width="500" height="220" fill="#f8fafc" rx="12"/>
          <!-- Car / Object -->
          <rect x="180" y="100" width="120" height="60" fill="#2563eb" rx="10"/>
          <circle cx="210" cy="160" r="15" fill="#1e293b"/>
          <circle cx="270" cy="160" r="15" fill="#1e293b"/>
          <text x="240" y="135" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Mass m</text>
          
          <!-- Velocity arrow -->
          <line x1="300" y1="130" x2="410" y2="130" stroke="#059669" stroke-width="3" marker-end="url(#arrow-green)"/>
          <text x="355" y="120" fill="#059669" font-size="12" font-weight="bold" text-anchor="middle">Velocity v</text>

          <!-- Engine Force arrow -->
          <line x1="300" y1="110" x2="430" y2="110" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/>
          <text x="365" y="100" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">Engine Force F</text>

          <!-- Resistive Friction arrow -->
          <line x1="180" y1="140" x2="80" y2="140" stroke="#d97706" stroke-width="3" marker-end="url(#arrow-amber)"/>
          <text x="130" y="130" fill="#d97706" font-size="11" font-weight="bold" text-anchor="middle">Resistance F_r</text>

          <!-- Formula Text -->
          <text x="250" y="45" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">Instantaneous Power P = F · v = F v cos θ</text>
          <text x="250" y="70" fill="#64748b" font-size="12" text-anchor="middle">At constant velocity (F = F_r): P = F_r × v</text>
          
          <defs>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/>
            </marker>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
            </marker>
            <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#d97706"/>
            </marker>
          </defs>
        </svg>`,
        caption: 'Figure 1: Vehicle driven by engine force F against resistive drag F_r at velocity v. Delivered power P = F · v.'
      }
    },
    {
      heading: '2. Vehicle Motion under Constant Power vs Constant Force (NEET Classic)',
      paragraphs: [
        'A. CONSTANT POWER ENGINE (P = constant):',
        'Consider a vehicle of mass m starting from rest driven by an engine supplying constant power P.',
        'P = F v = (m a) v = m v (dv/dt)',
        'm v dv = P dt',
        'Integrating from t = 0 (v = 0) to t (velocity v):',
        '∫₀ᵛ m v dv = ∫₀ᵗ P dt ⇒ 1/2 m v² = P t ⇒ v(t) = √(2 P t / m)',
        'Key Inferences for Constant Power:',
        '1. Velocity vs Time: v ∝ t¹/² (Velocity increases with square root of time).',
        '2. Displacement vs Time: s = ∫ v dt = ∫ √(2P/m) t¹/² dt = 2/3 √(2P/m) t³/² ⇒ s ∝ t³/².',
        '3. Acceleration vs Time: a = dv/dt = √(P / (2 m t)) ⇒ a ∝ t⁻¹/² (Acceleration decreases over time!).',
        'B. CONSTANT FORCE ENGINE (F = constant):',
        'If force F is constant, acceleration a = F / m = constant.',
        '• Velocity: v = a t ∝ t (Linear).',
        '• Displacement: s = 1/2 a t² ∝ t² (Quadratic).',
        '• Power: P = F v = F (a t) = m a² t ∝ t (Power increases linearly with time!).'
      ],
      tables: [
        {
          headers: ['Parameter', 'Constant Power Delivery (P = const)', 'Constant Force Delivery (F = const)'],
          rows: [
            ['Velocity v(t)', 'v ∝ t¹/² (Square root)', 'v ∝ t¹ (Linear)'],
            ['Displacement s(t)', 's ∝ t³/²', 's ∝ t² (Quadratic)'],
            ['Acceleration a(t)', 'a ∝ t⁻¹/² (Decreases with time)', 'a = constant'],
            ['Power P(t)', 'P = constant', 'P ∝ t (Increases linearly)']
          ]
        }
      ]
    },
    {
      heading: '3. Power Applications: Pumps, Lifting & Vehicles',
      paragraphs: [
        '1. Water Pumps Lifting Water:',
        'Suppose a water pump raises mass m of water to height h in time t and ejects it with velocity v.',
        'Total Work Done = Gravitational Potential Energy + Kinetic Energy imparted = m g h + 1/2 m v².',
        'Power Output P_out = (m/t) g h + 1/2 (m/t) v² = (dm/dt) g h + 1/2 (dm/dt) v².',
        'where (dm/dt) is the mass rate of water flow in kg/s (equal to volume flow rate Q (m³/s) × density ρ (kg/m³)).',
        '2. Pumping Water into Overhead Tank (Ejected at negligible speed):',
        'P_out = (m/t) g h = (ρ V / t) g h.',
        '3. Vehicle Moving at Constant Terminal Speed v against Resistance F_r:',
        'When speed is constant (a = 0), engine driving force F = F_resistance.',
        'Engine Power required: P = F_r × v.'
      ]
    },
    {
      heading: '4. Commercial Units of Energy & Efficiency',
      paragraphs: [
        'Commercial Energy Unit - Kilowatt-Hour (kWh):',
        '1 kWh is the total energy consumed by an appliance of power 1 kW (1000 W) operating continuously for 1 hour.',
        '1 kWh = 1000 Watts × 3600 seconds = 3.6 × 10⁶ Joules (3.6 MJ).',
        'MECHANICAL EFFICIENCY (η):',
        'No real machine is 100% efficient due to internal friction, thermal dissipation, and acoustic losses.',
        'η = (Useful Output Power / Total Input Power) × 100% = (P_out / P_in) × 100%',
        'P_in = P_out / η and P_loss = P_in - P_out = P_out (1/η - 1).'
      ]
    }
  ],

  formulae: [
    {
      formulaName: 'Instantaneous Power Dot Product',
      expression: 'P = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v} = F v \\cos \\theta',
      explanation: 'F = force magnitude (N), v = velocity magnitude (m/s), θ = angle between force and velocity.'
    },
    {
      formulaName: 'Constant Power Motion Equations',
      expression: 'v(t) = \\sqrt{\\frac{2 P t}{m}} \\propto t^{1/2}, \\quad s(t) = \\frac{2}{3} \\sqrt{\\frac{2P}{m}} t^{3/2} \\propto t^{3/2}',
      explanation: 'Applies to a body of mass m accelerated from rest by an engine delivering constant power P.'
    },
    {
      formulaName: 'Water Pump Output Power Formula',
      expression: 'P_{\\text{out}} = \\left(\\frac{dm}{dt}\\right) g h + \\frac{1}{2} \\left(\\frac{dm}{dt}\\right) v^2',
      explanation: 'dm/dt = mass flow rate (kg/s), h = height raised (m), v = ejection velocity (m/s).'
    },
    {
      formulaName: 'Mechanical Efficiency Percentage',
      expression: '\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\%',
      explanation: 'P_out = useful output power, P_in = electrical or fuel input power supplied.'
    }
  ],

  neetImportantPoints: [
    'Crucial Distinction: Energy ≠ Power. Energy is the TOTAL WORK capacity (Joules), while Power is the RATE of doing work (Joules/sec).',
    'Crucial Distinction: Power ≠ Force. A massive force holding a wall stationary produces ZERO power because velocity v = 0.',
    'For constant power engine: Velocity v ∝ t¹/², displacement s ∝ t³/². For constant force engine: Velocity v ∝ t, displacement s ∝ t².',
    'Conversion: 1 hp = 746 Watts; 1 kWh = 3.6 × 10⁶ Joules.'
  ],

  commonConfusions: [
    {
      misconception: 'Confusing constant power acceleration with constant force acceleration.',
      correction: 'Under constant power, acceleration DECREASES with time (a ∝ t⁻¹/²). Under constant force, acceleration is strictly constant (a = const).'
    },
    {
      misconception: 'Assuming 1 kWh is a unit of power.',
      correction: '1 kWh is a unit of ENERGY (Power × Time = Energy). Watt is the unit of power.'
    }
  ],

  quickRevision: [
    'P = dW/dt = F · v = F v cos θ (Scalar, SI Unit: Watt = J/s).',
    '1 hp = 746 W; 1 kWh = 3.6 × 10⁶ J.',
    'Constant Power: v ∝ t¹/², s ∝ t³/², a ∝ t⁻¹/².',
    'Constant Force: v ∝ t, s ∝ t², P ∝ t.',
    'Pump Power: P = (dm/dt) g h. Efficiency: η = (P_out / P_in) × 100%.'
  ],

  practiceQuestions: [
  {
    "questionId": "pq-power-1",
    "questionText": "An engine pumps water continuously through a hose with velocity v. If the rate at which mass of water flows per unit time through the hose is m, the rate at which kinetic energy is imparted to water is:",
    "options": [
      "m v²",
      "1/2 m v²",
      "1/2 m² v²",
      "m v³"
    ],
    "correctOption": 1,
    "explanation": "Rate of kinetic energy imparted = dK/dt = d/dt (1/2 M v²) = 1/2 (dM/dt) v² = 1/2 m v² (where m = dM/dt is mass flow rate)."
  },
  {
    "questionId": "pq-power-2",
    "questionText": "An electric motor of efficiency 80% is used to drive a water pump which lifts 1200 kg of water per minute to a height of 10 m. The electrical power input to the motor is (g = 10 m/s²):",
    "options": [
      "2.0 kW",
      "2.5 kW",
      "3.0 kW",
      "3.5 kW"
    ],
    "correctOption": 1,
    "explanation": "Mass rate m/t = 1200 kg / 60 s = 20 kg/s.\nUseful Output Power P_out = (m/t) g h = 20 × 10 × 10 = 2000 W = 2.0 kW.\nEfficiency η = 80% = 0.80.\nInput Power P_in = P_out / η = 2.0 kW / 0.80 = 2.5 kW."
  },
  {
    "id": "prac-physpower-3",
    "question": "Regarding Power & Efficiency, which of the following statements correctly resolves a common misconception about \"Confusing constant power acceleration with constant force acceleration.\"?",
    "options": [
      "Under constant power, acceleration DECREASES with time (a ∝ t⁻¹/²). Under constant force, acceleration is strictly constant (a = const).",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Power & Efficiency - Conceptual Clarity"
  },
  {
    "id": "prac-physpower-4",
    "question": "Regarding Power & Efficiency, which of the following statements correctly resolves a common misconception about \"Assuming 1 kWh is a unit of power.\"?",
    "options": [
      "1 kWh is a unit of ENERGY (Power × Time = Energy). Watt is the unit of power.",
      "Incorrect assumption: misconception",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCERT Fact. ",
    "difficulty": "Medium",
    "conceptTested": "Power & Efficiency - Conceptual Clarity"
  },
  {
    "id": "prac-physpower-5",
    "question": "In the study of Power & Efficiency, what is the exact definition and significance of \"Power (P)\"?",
    "options": [
      "The rate of doing work or transferring energy per unit time: P = dW/dt.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The rate of doing work or transferring energy per unit time: P = dW/dt.. ",
    "difficulty": "Easy",
    "conceptTested": "Power (P) definition"
  },
  {
    "id": "prac-physpower-6",
    "question": "In the study of Power & Efficiency, what is the exact definition and significance of \"Instantaneous Power\"?",
    "options": [
      "Power at a specific instant of time, given by the scalar product of force vector F and velocity vector v: P = F · v = F v cos θ.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Power at a specific instant of time, given by the scalar product of force vector F and velocity vector v: P = F · v = F v cos θ.. ",
    "difficulty": "Easy",
    "conceptTested": "Instantaneous Power definition"
  },
  {
    "id": "prac-physpower-7",
    "question": "In the study of Power & Efficiency, what is the exact definition and significance of \"Average Power (P_avg)\"?",
    "options": [
      "Total work done divided by total time elapsed: P_avg = ΔW / Δt = W_total / t_total.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Total work done divided by total time elapsed: P_avg = ΔW / Δt = W_total / t_total.. ",
    "difficulty": "Easy",
    "conceptTested": "Average Power (P_avg) definition"
  },
  {
    "id": "prac-physpower-8",
    "question": "In the study of Power & Efficiency, what is the exact definition and significance of \"Horsepower (hp)\"?",
    "options": [
      "An imperial unit of mechanical power output: 1 hp = 746 Watts = 0.746 kW.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "An imperial unit of mechanical power output: 1 hp = 746 Watts = 0.746 kW.. ",
    "difficulty": "Easy",
    "conceptTested": "Horsepower (hp) definition"
  },
  {
    "id": "prac-physpower-9",
    "question": "In the study of Power & Efficiency, what is the exact definition and significance of \"Mechanical Efficiency (η)\"?",
    "options": [
      "The percentage of input power converted into useful mechanical work: η = (P_out / P_in) × 100%.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The percentage of input power converted into useful mechanical work: η = (P_out / P_in) × 100%.. ",
    "difficulty": "Easy",
    "conceptTested": "Mechanical Efficiency (η) definition"
  },
  {
    "id": "prac-physpower-10",
    "question": "Which of the following is a key NCERT statement regarding Power & Efficiency?",
    "options": [
      "P = dW/dt = F · v = F v cos θ (Scalar, SI Unit: Watt = J/s).",
      "Statement is reversed in all living organisms",
      "This process only occurs under zero gravity conditions",
      "Applicable only to synthetic organic polymers"
    ],
    "correctAnswer": 0,
    "explanation": "According to NCERT: P = dW/dt = F · v = F v cos θ (Scalar, SI Unit: Watt = J/s).",
    "difficulty": "Easy",
    "conceptTested": "Power & Efficiency NCERT High-Yield Point"
  }
],
  pyqs: [
    {
      id: 'pyq-power-1',
      questionText: 'A body of mass 1 kg accelerates uniformly from rest to velocity 20 m/s in 4 seconds. The instantaneous power delivered to the body as a function of time t is: [NEET 2021]',
      options: [
        '25 t',
        '50 t',
        '100 t',
        '200 t'
      ],
      correctOption: 0,
      explanation: 'Acceleration a = (v - u) / t = (20 - 0) / 4 = 5 m/s².\nForce F = m a = 1 × 5 = 5 N.\nVelocity at time t: v(t) = a t = 5 t.\nInstantaneous power P(t) = F v(t) = 5 × (5 t) = 25 t.'
    },
    {
      id: 'pyq-power-2',
      questionText: 'An engine pulls a train of mass 2 × 10⁵ kg up an incline of 1 in 100 at a constant speed of 36 km/h. If friction force is 5 N per 100 kg, the power of the engine is (g = 10 m/s²): [AIPMT 2010]',
      options: [
        '150 kW',
        '200 kW',
        '300 kW',
        '400 kW'
      ],
      correctOption: 2,
      explanation: 'Incline sin θ = 1/100. Constant speed v = 36 km/h = 10 m/s.\nMass M = 2 × 10⁵ kg.\nComponent of gravity down incline F_g = M g sin θ = (2 × 10⁵) × 10 × (1/100) = 20,000 N.\nFriction force F_f = 5 N per 100 kg ⇒ Total F_f = 5 × (2 × 10⁵ / 100) = 10,000 N.\nTotal resisting force F_total = F_g + F_f = 20,000 + 10,000 = 30,000 N.\nSince speed is constant, Engine Force F_engine = F_total = 30,000 N.\nEngine Power P = F_engine × v = 30,000 N × 10 m/s = 300,000 W = 300 kW.'
    }
  ]
};
