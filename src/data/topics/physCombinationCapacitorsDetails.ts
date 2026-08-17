import { DetailedTopicContent } from '../../types/neet';

export const physCombinationCapacitorsDetails: DetailedTopicContent = {
  topicId: 'phys-combination-capacitors',
  topicName: 'Capacitor Combinations, Networks & Charge Sharing',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Electrostatics',
  chapter: 'Electrostatic Potential and Capacitance',

  whatIsThisTopic:
    'Complex electrical circuits and energy storage banks require combining capacitors in series, parallel, and mixed bridge networks. This module provides systematic problem-solving methods for series combinations (1/C_eq = ∑ 1/C_i, same charge, voltage division), parallel combinations (C_eq = ∑ C_i, same voltage, charge division), mixed ladder networks, Wheatstone bridge capacitor conditions, common potential after connection, and exact formulas for electrostatic energy loss during charge redistribution.',

  basicIdea: [
    'In a Series Combination, the magnitude of charge on every capacitor plate is IDENTICAL (Q₁ = Q₂ = ... = Q_total). Voltages add: V_total = V₁ + V₂ + ... Equivalent capacitance: 1/C_eq = 1/C₁ + 1/C₂ + ... C_eq is always smaller than the smallest individual capacitance.',
    'For two capacitors in series: C_eq = (C₁ C₂) / (C₁ + C₂). The voltage divides inversely proportional to capacitance: V₁ = [C₂ / (C₁ + C₂)] V_total.',
    'In a Parallel Combination, the potential difference across every capacitor is IDENTICAL (V₁ = V₂ = ... = V_total). Charges add: Q_total = Q₁ + Q₂ + ... Equivalent capacitance: C_eq = C₁ + C₂ + ... C_eq is always greater than the largest individual capacitance.',
    'For two capacitors in parallel: Charge divides directly proportional to capacitance: Q₁ = [C₁ / (C₁ + C₂)] Q_total.',
    'When two charged capacitors (C₁, V₁) and (C₂, V₂) are connected in parallel, charge flows until they reach a Common Potential: V_common = (C₁ V₁ + C₂ V₂) / (C₁ + C₂).',
    'During charge redistribution, electrostatic energy is ALWAYS lost as Joule heat and electromagnetic radiation. Energy Loss formula: ΔU_loss = ½ [C₁ C₂ / (C₁ + C₂)] (V₁ - V₂)². If connected with opposite polarities: ΔU_loss = ½ [C₁ C₂ / (C₁ + C₂)] (V₁ + V₂)²',
    'Wheatstone Bridge for Capacitors: If C₁/C₂ = C₃/C₄, the bridge is balanced. The potential difference across the central bridge capacitor is zero, so no charge flows through it and it can be removed from the equivalent circuit.'
  ],

  importantTerms: [
    {
      term: 'Series Combination',
      symbol: '1/C_eq = ∑ 1/C_i',
      definition:
        'A connection where capacitors are connected end-to-end along a single branch such that each capacitor stores the exact same charge Q.',
      neetNote: 'Voltage splits inversely with capacitance (V ∝ 1/C). C_eq < C_min.'
    },
    {
      term: 'Parallel Combination',
      symbol: 'C_eq = ∑ C_i',
      definition:
        'A connection where all positive plates are connected to one common junction and all negative plates to another, ensuring equal potential difference V.',
      neetNote: 'Charge splits directly with capacitance (Q ∝ C). C_eq > C_max.'
    },
    {
      term: 'Common Potential (V_common)',
      symbol: 'V_common = (C₁V₁ + C₂V₂) / (C₁ + C₂)',
      definition:
        'The equilibrium voltage across two connected capacitors after charge redistribution ceases.',
      neetNote: 'Derived from total charge conservation: Q_total = C_total · V_common.'
    },
    {
      term: 'Energy Loss on Sharing (ΔU_loss)',
      symbol: 'ΔU = ½ [C₁C₂ / (C₁ + C₂)] (V₁ - V₂)²',
      definition:
        'The loss of electrostatic potential energy dissipated as heat in connecting wires when two charged capacitors are joined.',
      neetNote: 'Energy loss is always positive (or zero if V₁ = V₂), independent of wire resistance.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Series Combination of Capacitors',
      paragraphs: [
        'In a series combination, capacitors C₁, C₂, C₃ are connected sequentially. When a voltage V is applied across the combination, a charge +Q leaves the battery and collects on the first plate. By electrostatic induction, -Q appears on the opposite plate, inducing +Q on the next plate, and so on. Thus, the charge Q on each capacitor in series is IDENTICAL: Q₁ = Q₂ = Q₃ = Q.',
        'The total potential difference V is the sum of the individual potential differences: V = V₁ + V₂ + V₃. Substituting V = Q/C yields: Q / C_eq = Q / C₁ + Q / C₂ + Q / C₃ => 1 / C_eq = 1 / C₁ + 1 / C₂ + 1 / C₃.',
        'Two capacitors in series shortcut: C_eq = (C₁ C₂) / (C₁ + C₂) = Product / Sum.',
        'Voltage Division Rule: Since V = Q/C and Q is constant, V ∝ 1/C. The smaller capacitor gets a larger voltage share! Specifically: V₁ = [C₂ / (C₁ + C₂)] V and V₂ = [C₁ / (C₁ + C₂)] V.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><line x1="80" y1="100" x2="200" y2="100" stroke="#3b82f6" stroke-width="2.5"/><rect x="200" y="70" width="12" height="60" fill="#ef4444" rx="2"/><rect x="230" y="70" width="12" height="60" fill="#3b82f6" rx="2"/><text x="221" y="55" fill="#1e293b" font-size="13" font-weight="bold" text-anchor="middle">C₁</text><line x1="242" y1="100" x2="350" y2="100" stroke="#3b82f6" stroke-width="2.5"/><rect x="350" y="70" width="12" height="60" fill="#ef4444" rx="2"/><rect x="380" y="70" width="12" height="60" fill="#3b82f6" rx="2"/><text x="371" y="55" fill="#1e293b" font-size="13" font-weight="bold" text-anchor="middle">C₂</text><line x1="392" y1="100" x2="500" y2="100" stroke="#3b82f6" stroke-width="2.5"/><rect x="500" y="70" width="12" height="60" fill="#ef4444" rx="2"/><rect x="530" y="70" width="12" height="60" fill="#3b82f6" rx="2"/><text x="521" y="55" fill="#1e293b" font-size="13" font-weight="bold" text-anchor="middle">C₃</text><line x1="542" y1="100" x2="620" y2="100" stroke="#3b82f6" stroke-width="2.5"/><text x="221" y="150" fill="#64748b" font-size="12" text-anchor="middle">V₁ (Q/C₁)</text><text x="371" y="150" fill="#64748b" font-size="12" text-anchor="middle">V₂ (Q/C₂)</text><text x="521" y="150" fill="#64748b" font-size="12" text-anchor="middle">V₃ (Q/C₃)</text><line x1="120" y1="190" x2="580" y2="190" stroke="#10b981" stroke-width="2"/><text x="350" y="210" fill="#047857" font-size="14" font-weight="bold" text-anchor="middle">Total Voltage V = V₁ + V₂ + V₃   (Same Charge Q on all)</text></svg>',
        caption:
          'Figure 2.13: Series combination of capacitors showing identical charge Q and voltage division V = V₁ + V₂ + V₃.',
        guide:
          'In series, equivalent capacitance C_eq is ALWAYS smaller than the smallest individual capacitor in the string.'
      },
      importantPoints: [
        '1 / C_eq = 1 / C₁ + 1 / C₂ + 1 / C₃.',
        'Two capacitors in series: C_eq = (C₁ C₂) / (C₁ + C₂).',
        'Charge is identical on every series capacitor: Q₁ = Q₂ = Q.'
      ]
    },
    {
      heading: '2. Parallel Combination of Capacitors',
      paragraphs: [
        'In a parallel combination, the positive plates of all capacitors are connected to a common high-potential terminal, and the negative plates are connected to a common low-potential terminal. Therefore, the potential difference V across each capacitor is IDENTICAL: V₁ = V₂ = V₃ = V.',
        'The total charge Q drawn from the power source is the sum of the charges on individual capacitors: Q = Q₁ + Q₂ + Q₃. Substituting Q = CV yields: C_eq V = C₁ V + C₂ V + C₃ V => C_eq = C₁ + C₂ + C₃.',
        'Charge Division Rule: Since Q = CV and V is constant, Q ∝ C. The larger capacitor stores a proportionally larger charge! Specifically for two parallel capacitors: Q₁ = [C₁ / (C₁ + C₂)] Q_total and Q₂ = [C₂ / (C₁ + C₂)] Q_total.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><line x1="120" y1="120" x2="220" y2="120" stroke="#3b82f6" stroke-width="3"/><line x1="220" y1="50" x2="220" y2="190" stroke="#3b82f6" stroke-width="3"/><line x1="480" y1="50" x2="480" y2="190" stroke="#3b82f6" stroke-width="3"/><line x1="480" y1="120" x2="580" y2="120" stroke="#3b82f6" stroke-width="3"/><line x1="220" y1="50" x2="330" y2="50" stroke="#3b82f6" stroke-width="2"/><rect x="330" y="30" width="12" height="40" fill="#ef4444" rx="2"/><rect x="360" y="30" width="12" height="40" fill="#3b82f6" rx="2"/><line x1="372" y1="50" x2="480" y2="50" stroke="#3b82f6" stroke-width="2"/><text x="400" y="55" fill="#1e293b" font-size="12" font-weight="bold">C₁ (Q₁)</text><line x1="220" y1="120" x2="330" y2="120" stroke="#3b82f6" stroke-width="2"/><rect x="330" y="100" width="12" height="40" fill="#ef4444" rx="2"/><rect x="360" y="100" width="12" height="40" fill="#3b82f6" rx="2"/><line x1="372" y1="120" x2="480" y2="120" stroke="#3b82f6" stroke-width="2"/><text x="400" y="125" fill="#1e293b" font-size="12" font-weight="bold">C₂ (Q₂)</text><line x1="220" y1="190" x2="330" y2="190" stroke="#3b82f6" stroke-width="2"/><rect x="330" y="170" width="12" height="40" fill="#ef4444" rx="2"/><rect x="360" y="170" width="12" height="40" fill="#3b82f6" rx="2"/><line x1="372" y1="190" x2="480" y2="190" stroke="#3b82f6" stroke-width="2"/><text x="400" y="195" fill="#1e293b" font-size="12" font-weight="bold">C₃ (Q₃)</text><text x="350" y="230" fill="#047857" font-size="14" font-weight="bold" text-anchor="middle">Same Voltage V Across All   |   C_eq = C₁ + C₂ + C₃</text></svg>',
        caption:
          'Figure 2.14: Parallel combination of capacitors showing identical voltage V and total charge Q = Q₁ + Q₂ + Q₃.',
        guide:
          'In parallel, equivalent capacitance C_eq is ALWAYS larger than the largest individual capacitor in the bank.'
      },
      importantPoints: [
        'C_eq = C₁ + C₂ + C₃ + ...',
        'Potential difference V is identical across all parallel branches.',
        'Charge splits proportionally to capacitance: Q ∝ C.'
      ]
    },
    {
      heading: '3. Charge Sharing, Common Potential & Energy Loss',
      paragraphs: [
        'When a capacitor of capacitance C₁ charged to potential V₁ (charge Q₁ = C₁V₁) is connected in parallel with another capacitor of capacitance C₂ charged to potential V₂ (charge Q₂ = C₂V₂), charge flows between them until both reach a common potential V_common.',
        'By conservation of total charge: Q_total = Q₁ + Q₂ = C₁ V₁ + C₂ V₂. Total equivalent capacitance in parallel is C_total = C₁ + C₂. Thus: V_common = Q_total / C_total = (C₁ V₁ + C₂ V₂) / (C₁ + C₂).',
        'Energy Loss during Sharing: Initial electrostatic energy is U_i = ½ C₁ V₁² + ½ C₂ V₂². Final electrostatic energy is U_f = ½ (C₁ + C₂) V_common². Subtracting U_f from U_i gives the universal energy loss formula: ΔU_loss = ½ [C₁ C₂ / (C₁ + C₂)] (V₁ - V₂)². This energy is completely converted into Joule heat in connecting wires and EM radiation.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="220" fill="#f8fafc" rx="14"/><rect x="60" y="30" width="580" height="160" fill="#f8fafc" stroke="#3b82f6" stroke-width="2" rx="10"/><text x="350" y="65" fill="#1e3a8a" font-size="16" font-weight="bold" text-anchor="middle">Charge Sharing & Energy Dissipation</text><rect x="100" y="90" width="500" height="40" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" rx="6"/><text x="350" y="116" fill="#1d4ed8" font-size="15" font-weight="bold" text-anchor="middle">V_common = (C₁ V₁ + C₂ V₂) / (C₁ + C₂)</text><rect x="100" y="140" width="500" height="40" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5" rx="6"/><text x="350" y="166" fill="#b91c1c" font-size="15" font-weight="bold" text-anchor="middle">ΔU_loss = ½ [C₁ C₂ / (C₁ + C₂)] (V₁ - V₂)²</text></svg>',
        caption:
          'Figure 2.15: Master formulas for Common Potential and Electrostatic Energy Loss during capacitor charge sharing.',
        guide:
          'Notice that if V₁ = V₂, ΔU_loss = 0. The energy loss is maximum when one capacitor is initially uncharged (V₂ = 0).'
      },
      importantPoints: [
        'V_common = (C₁V₁ + C₂V₂) / (C₁ + C₂).',
        'Energy loss ΔU = ½ [C₁C₂ / (C₁ + C₂)] (V₁ - V₂)²',
        'If connected with reverse polarity: (V₁ - V₂) becomes (V₁ + V₂).'
      ]
    }
  ],

  formulae: [
    {
      title: 'Series Combination of Capacitors',
      formula: '\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\dots + \\frac{1}{C_n}',
      variables: 'C_eq = equivalent series capacitance (F), Q = identical charge on each capacitor'
    },
    {
      title: 'Two Capacitors in Series',
      formula: 'C_{\\text{eq}} = \\frac{C_1 C_2}{C_1 + C_2}',
      variables: 'C₁, C₂ = branch capacitances'
    },
    {
      title: 'Parallel Combination of Capacitors',
      formula: 'C_{\\text{eq}} = C_1 + C_2 + \\dots + C_n',
      variables: 'C_eq = equivalent parallel capacitance (F), V = common potential difference'
    },
    {
      title: 'Common Potential After Connection',
      formula: 'V_{\\text{common}} = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2}',
      variables: 'V_common = equilibrium voltage, C₁, C₂ = capacitances, V₁, V₂ = initial voltages'
    },
    {
      title: 'Electrostatic Energy Loss on Charge Sharing',
      formula: '\\Delta U_{\\text{loss}} = \\frac{1}{2} \\frac{C_1 C_2}{C_1 + C_2} (V_1 - V_2)^2',
      variables: 'ΔU = energy dissipated as heat/sparks (J)'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="50" y="25" width="280" height="190" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" rx="10"/><text x="190" y="55" fill="#1d4ed8" font-size="15" font-weight="bold" text-anchor="middle">Series Combination</text><text x="190" y="85" fill="#1e3a8a" font-size="13" text-anchor="middle">• Same charge Q on each</text><text x="190" y="110" fill="#1e3a8a" font-size="13" text-anchor="middle">• Voltages add: V = ∑ Vᵢ</text><text x="190" y="135" fill="#1e3a8a" font-size="13" text-anchor="middle">• 1/C_eq = 1/C₁ + 1/C₂</text><text x="190" y="160" fill="#1e3a8a" font-size="13" text-anchor="middle">• C_eq &lt; smallest C</text><text x="190" y="185" fill="#1e3a8a" font-size="13" text-anchor="middle">• Voltage divider: V ∝ 1/C</text><rect x="370" y="25" width="280" height="190" fill="#ecfdf5" stroke="#10b981" stroke-width="2" rx="10"/><text x="510" y="55" fill="#047857" font-size="15" font-weight="bold" text-anchor="middle">Parallel Combination</text><text x="510" y="85" fill="#065f46" font-size="13" text-anchor="middle">• Same voltage V across each</text><text x="510" y="110" fill="#065f46" font-size="13" text-anchor="middle">• Charges add: Q = ∑ Qᵢ</text><text x="510" y="135" fill="#065f46" font-size="13" text-anchor="middle">• C_eq = C₁ + C₂ + ...</text><text x="510" y="160" fill="#065f46" font-size="13" text-anchor="middle">• C_eq &gt; largest C</text><text x="510" y="185" fill="#065f46" font-size="13" text-anchor="middle">• Charge divider: Q ∝ C</text></svg>',
    caption: 'Comparative breakdown of Series vs. Parallel Capacitor Networks.'
  },

  neetImportantPoints: [
    'In series: Q is the same on all capacitors; 1/C_eq = ∑ 1/C_i; C_eq < C_min.',
    'In parallel: V is the same across all capacitors; C_eq = ∑ C_i; C_eq > C_max.',
    'Common potential V_common = (C₁V₁ + C₂V₂) / (C₁ + C₂).',
    'Energy loss on sharing: ΔU = ½ [C₁C₂ / (C₁ + C₂)] (V₁ - V₂)². Energy is dissipated as heat in connecting wires.',
    'Balanced Wheatstone bridge: If C₁/C₂ = C₃/C₄, remove the central bridging capacitor.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing capacitor formulas with resistor formulas.',
      correctFact:
        'Capacitors combine opposite to resistors: Series capacitors add reciprocally (1/C_eq = 1/C₁ + 1/C₂); Parallel capacitors add directly (C_eq = C₁ + C₂).',
      whyItMattersForNEET:
        'Frequent silly mistake made by students under time pressure during the NEET exam.'
    },
    {
      commonConfusion: 'Assuming energy is conserved when sharing charge between capacitors.',
      correctFact:
        'Charge is strictly conserved (Q_total = const), but electrostatic potential energy is NOT conserved (ΔU_loss > 0). The missing energy is dissipated as heat in the circuit wires.',
      whyItMattersForNEET: 'Directly tested in multiple previous NEET/AIPMT exam questions.'
    }
  ],

  quickRevision: [
    'Series: Q same, 1/C_eq = 1/C₁ + 1/C₂, C_eq = (C₁C₂)/(C₁+C₂).',
    'Parallel: V same, C_eq = C₁ + C₂.',
    'Common Potential: V_common = (C₁V₁ + C₂V₂) / (C₁ + C₂).',
    'Energy Loss: ΔU = ½ [C₁C₂ / (C₁ + C₂)] (V₁ - V₂)²',
    'Balanced Bridge: C₁/C₂ = C₃/C₄ => Ignore central capacitor.'
  ],

  practiceQuestions: [
    {
      id: 'comb-p1',
      question:
        'Three identical capacitors each of capacitance C are connected in series, and this group is connected in parallel with another capacitor of capacitance C. The equivalent capacitance of the combination is:',
      options: ['4C / 3', '3C / 4', '4C', 'C / 4'],
      correctAnswer: 0,
      explanation:
        'Three capacitors in series give C_s = C/3. This combination in parallel with C gives C_eq = C_s + C = C/3 + C = 4C / 3.'
    },
    {
      id: 'comb-p2',
      question:
        'A 20 μF capacitor charged to 500 V is connected in parallel with an uncharged 10 μF capacitor. The loss of energy in this process is:',
      options: ['0.83 J', '1.67 J', '2.5 J', '0.42 J'],
      correctAnswer: 0,
      explanation:
        'ΔU_loss = ½ [C₁ C₂ / (C₁ + C₂)] (V₁ - V₂)² = ½ [(20 × 10 × 10⁻¹²) / (30 × 10⁻⁶)] (500 - 0)² = ½ [200 / 30 × 10⁻⁶] (250,000) = (10/3 × 10⁻⁶) × 2.5 × 10⁵ = 2.5 / 3 ≈ 0.833 J.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2016,
      question:
        'A capacitor of 20 μF is charged to 500 V and connected in parallel with another uncharged capacitor of 10 μF. The loss of energy in this process is:',
      options: ['0.83 J', '1.67 J', '2.5 J', '0.42 J'],
      correctAnswer: 0,
      explanation:
        'ΔU_loss = ½ [C₁ C₂ / (C₁ + C₂)] (V₁ - V₂)² = ½ [(20 × 10⁻⁶ × 10 × 10⁻⁶) / (30 × 10⁻⁶)] (500)² = (10/3 × 10⁻⁶) × 250000 = 0.833 J.',
      conceptTested: 'Energy Loss in Capacitor Charge Sharing'
    }
  ]
};
