import { DetailedTopicContent } from '../../types/neet';

export const physCellsEmfInternalRDetails: DetailedTopicContent = {
  topicId: 'phys-cells-emf-internal-r',
  topicName: 'Cells, EMF, Internal Resistance & Cell Combinations',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Current Electricity',
  chapter: 'Current Electricity',

  whatIsThisTopic:
    'Comprehensive mastery of Electromotive Force (EMF, E), Internal Resistance (r), Terminal Potential Difference (V) during discharging (V = E - Ir) vs. charging (V = E + Ir), Maximum Power Transfer Theorem (P_max = E²/(4r) at R = r), series grouping of cells with aiding and opposing polarities, reversed cell mechanics (E_net = (n - 2m)E), parallel grouping with Millman\'s EMF formula, and mixed cell grouping optimization.',

  basicIdea: [
    'Electromotive Force (EMF, E) is the maximum potential difference between the terminals of a cell when no current is drawn from it (open circuit). It represents the non-electrostatic work done per unit charge in driving it through the complete circuit: E = W/q. SI Unit: Volt (V).',
    'Internal Resistance (r) is the finite resistance offered by the electrolyte and electrodes of the cell to the flow of ionic current inside the cell.',
    'Terminal Potential Difference (V):',
    '• Discharging (Cell delivering current to load R): Current flows from positive to negative terminal externally. V = E - I r (V < E).',
    '• Charging (External source driving current into positive terminal): V = E + I r (V > E).',
    '• Open Circuit (I = 0): V = E.',
    '• Short Circuit (R = 0): Current is maximum I_sc = E/r, and terminal voltage drops to V = 0.',
    'Current in a Simple Circuit: I = E / (R + r). Terminal voltage V = I R = E R / (R + r). The internal resistance of the cell is r = R (E/V - 1).',
    'Maximum Power Transfer Theorem: The power transferred from a real cell (EMF E, internal resistance r) to an external load resistor R is maximized when the load resistance equals the internal resistance: R = r. At this condition, P_max = E² / (4r), and the circuit efficiency is η = 50%.',
    'Cells in Series: For n identical cells (each E, r): E_eq = n E, r_eq = n r. If m cells are connected with reversed polarity out of n total cells, E_net = (n - 2m) E, while total internal resistance remains r_net = n r (resistance never subtracts!).',
    'Cells in Parallel: For two general cells (E₁, r₁) and (E₂, r₂) in parallel with same polarity: E_eq = (E₁ r₂ + E₂ r₁) / (r₁ + r₂) and r_eq = (r₁ r₂) / (r₁ + r₂). For n identical cells: E_eq = E, r_eq = r/n.'
  ],

  importantTerms: [
    {
      term: 'Electromotive Force (EMF, E)',
      symbol: 'E = W / q',
      definition:
        'The total chemical energy converted into electrical energy per unit charge as it traverses the entire closed circuit including the cell itself.',
      neetNote: 'EMF is a potential difference (measured in Volts), NOT a force! It depends on electrode materials and electrolyte nature, independent of cell size or electrode area.'
    },
    {
      term: 'Internal Resistance (r)',
      symbol: 'r = R (E/V - 1)',
      definition:
        'The inherent electrical resistance offered by the chemical electrolyte and electrodes to the passage of current inside the cell.',
      neetNote: 'r increases with: increasing distance between electrodes, decreasing electrode immersion area, increasing electrolyte concentration, and decreasing temperature.'
    },
    {
      term: 'Terminal Potential Difference (V)',
      symbol: 'V = E - I r (discharging)',
      definition:
        'The potential difference between the external terminals of a cell when current I is drawn from it.',
      neetNote: 'V < E during discharging; V > E during charging; V = E when no current flows.'
    },
    {
      term: 'Maximum Power Transfer Condition',
      symbol: 'R = r => P_max = E² / (4r)',
      definition:
        'The state where external load resistance exactly matches the internal resistance of the source, resulting in peak power delivery.',
      neetNote: 'At maximum power output, exactly 50% of the energy is delivered to the load and 50% is wasted as internal heat inside the cell.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. EMF, Internal Resistance & Terminal Potential Difference',
      paragraphs: [
        'An electric cell is a source of continuous electrical energy maintained by internal chemical reactions. Inside the cell, non-electrostatic chemical forces perform work W to transport positive charges from the lower potential (negative cathode) to the higher potential (positive anode).',
        'EMF Definition: Electromotive Force (E) is the work done per unit positive charge in transporting it across the complete circuit (both external load and internal electrolyte): E = W / q. On an open circuit (when switch is open, I = 0), the terminal potential difference equals the EMF: V = E.',
        'Internal Resistance (r): Because the electrolyte is a real physical medium, ions moving through it collide with solvent molecules, creating an internal resistance r. The factors determining r are: (1) Electrode separation d (r ∝ d), (2) Immersed electrode area A (r ∝ 1/A), (3) Electrolyte concentration C (r ∝ C), and (4) Temperature T (r decreases as T increases due to higher ionic mobility).',
        'Discharging vs. Charging Mechanics:',
        '• Discharging (Normal use): Current I leaves the positive terminal and enters the negative terminal. Traveling along current direction inside the cell drops potential by I r: V = E - I r. Hence, Terminal Voltage < EMF.',
        '• Charging (Recharging battery): An external charging source forces current INTO the positive terminal. Traveling against the cell\'s EMF requires: V = E + I r. Hence, Terminal Voltage > EMF.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="300" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="180" y="45" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Discharging Cell (Supplying Power)</text><rect x="60" y="70" width="240" height="60" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,4" rx="6"/><line x1="90" y1="90" x2="90" y2="110" stroke="#ef4444" stroke-width="3"/><line x1="100" y1="95" x2="100" y2="105" stroke="#334155" stroke-width="3"/><text x="95" y="80" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">EMF E</text><rect x="150" y="93" width="45" height="15" fill="#fee2e2" stroke="#ef4444" stroke-width="1" rx="2"/><text x="172" y="105" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">r</text><line x1="60" y1="100" x2="90" y2="100" stroke="#334155" stroke-width="2"/><line x1="100" y1="100" x2="150" y2="100" stroke="#334155" stroke-width="2"/><line x1="195" y1="100" x2="300" y2="100" stroke="#334155" stroke-width="2"/><line x1="280" y1="75" x2="230" y2="75" stroke="#ef4444" stroke-width="2" marker-end="url(#arr-disch)"/><text x="255" y="65" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">I (out)</text><text x="180" y="160" fill="#1e3a8a" font-size="14" font-weight="bold" text-anchor="middle">V = E - I r</text><text x="180" y="185" fill="#1e3a8a" font-size="11" text-anchor="middle">Terminal Voltage V &lt; EMF E</text><rect x="370" y="20" width="300" height="200" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" rx="8"/><text x="520" y="45" fill="#b45309" font-size="14" font-weight="bold" text-anchor="middle">Charging Cell (Receiving Power)</text><rect x="400" y="70" width="240" height="60" fill="#fef9c3" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4,4" rx="6"/><line x1="430" y1="90" x2="430" y2="110" stroke="#ef4444" stroke-width="3"/><line x1="440" y1="95" x2="440" y2="105" stroke="#334155" stroke-width="3"/><text x="435" y="80" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">EMF E</text><rect x="490" y="93" width="45" height="15" fill="#fee2e2" stroke="#ef4444" stroke-width="1" rx="2"/><text x="512" y="105" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">r</text><line x1="400" y1="100" x2="430" y2="100" stroke="#334155" stroke-width="2"/><line x1="440" y1="100" x2="490" y2="100" stroke="#334155" stroke-width="2"/><line x1="535" y1="100" x2="640" y2="100" stroke="#334155" stroke-width="2"/><line x1="580" y1="75" x2="630" y2="75" stroke="#3b82f6" stroke-width="2" marker-end="url(#arr-char)"/><text x="605" y="65" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="middle">I (in)</text><text x="520" y="160" fill="#92400e" font-size="14" font-weight="bold" text-anchor="middle">V = E + I r</text><text x="520" y="185" fill="#92400e" font-size="11" text-anchor="middle">Terminal Voltage V &gt; EMF E</text><defs><marker id="arr-disch" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker><marker id="arr-char" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/></marker></defs></svg>',
        caption:
          'Figure 3.11: Discharging (V = E - Ir) vs. Charging (V = E + Ir) representations of a real chemical cell.',
        guide:
          'Notice current direction: If current leaves positive terminal, V = E - Ir. If current enters positive terminal, V = E + Ir.'
      },
      importantPoints: [
        'Discharging: V = E - Ir (V < E).',
        'Charging: V = E + Ir (V > E).',
        'Open Circuit: I = 0 => V = E.',
        'Short Circuit: R = 0 => I_sc = E/r, V = 0.'
      ]
    },
    {
      heading: '2. Circuit with External Resistor & Maximum Power Transfer Theorem',
      paragraphs: [
        'Cell Connected to Load R: When a cell of EMF E and internal resistance r is connected across external resistance R, total circuit resistance is R_total = R + r. The current is I = E / (R + r).',
        'The potential difference across the external resistor is V = I R = [E R] / (R + r).',
        'Formula for Internal Resistance: From V = E - I r => I r = E - V => (V/R) r = E - V => r = R [(E - V) / V] = R (E/V - 1). This is the key equation used in potentiometer experiments!',
        'Maximum Power Transfer Theorem: Power dissipated in external load R is P(R) = I² R = [E / (R + r)]² R = [E² R] / (R + r)². To find the condition for maximum power, differentiate P with respect to R and set dP/dR = 0: dP/dR = E² [(R + r)² - 2R(R + r)] / (R + r)⁴ = 0 => (R + r) - 2R = 0 => R = r.',
        'Maximum Power Output: When R = r, P_max = [E² · r] / (r + r)² = [E² · r] / (4r²) = E² / (4r).',
        'Efficiency at Maximum Power: Total power generated by cell = E I = E² / (2r). Power delivered to load = E² / (4r). Efficiency η = P_load / P_total = [E² / (4r)] / [E² / (2r)] = 50%.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="220" fill="#f8fafc" rx="14"/><rect x="40" y="20" width="300" height="180" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" rx="8"/><text x="190" y="42" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">Power vs Load Resistance (R)</text><line x1="70" y1="160" x2="310" y2="160" stroke="#334155" stroke-width="2"/><text x="300" y="175" fill="#334155" font-size="10" font-weight="bold">R</text><line x1="70" y1="160" x2="70" y2="50" stroke="#334155" stroke-width="2"/><text x="60" y="60" fill="#334155" font-size="10" font-weight="bold" text-anchor="end">P</text><path d="M 70 160 Q 150 60 190 60 T 310 140" fill="none" stroke="#ef4444" stroke-width="2.5"/><line x1="190" y1="60" x2="190" y2="160" stroke="#64748b" stroke-dasharray="3,3"/><circle cx="190" cy="60" r="4" fill="#ef4444"/><text x="190" y="175" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">R = r</text><text x="190" y="48" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">P_max = E² / 4r</text><rect x="370" y="20" width="300" height="180" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="520" y="42" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">V vs Current I Graph (V = E - Ir)</text><line x1="400" y1="160" x2="640" y2="160" stroke="#334155" stroke-width="2"/><text x="630" y="175" fill="#334155" font-size="10" font-weight="bold">I</text><line x1="400" y1="160" x2="400" y2="50" stroke="#334155" stroke-width="2"/><text x="390" y="60" fill="#334155" font-size="10" font-weight="bold" text-anchor="end">V</text><line x1="400" y1="70" x2="610" y2="160" stroke="#2563eb" stroke-width="2.5"/><circle cx="400" cy="70" r="4" fill="#2563eb"/><text x="420" y="70" fill="#1e40af" font-size="11" font-weight="bold">E (y-intercept)</text><circle cx="610" cy="160" r="4" fill="#2563eb"/><text x="610" y="180" fill="#1e40af" font-size="11" font-weight="bold">I_sc = E/r</text><text x="520" y="115" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Slope = -r</text></svg>',
        caption:
          'Figure 3.12: (Left) Peak power delivered at R = r. (Right) V vs I graph for a cell where y-intercept is EMF E and slope magnitude is internal resistance r.',
        guide:
          'On a V vs I graph of a discharging cell: y-intercept = EMF E, x-intercept = Short circuit current I_sc = E/r, and Magnitude of Slope = Internal resistance r.'
      },
      importantPoints: [
        'r = R (E/V - 1).',
        'Maximum power delivered to load when R = r.',
        'P_max = E² / (4r). Efficiency at max power is 50%.',
        'V vs I graph: Intercept = E, Slope = -r.'
      ]
    },
    {
      heading: '3. Cells in Series: Aiding, Opposing & Reversed Cells',
      paragraphs: [
        'Aiding Polarity (Standard Series): Positive terminal of one cell connected to negative of next. Total EMF is E_eq = E₁ + E₂ + ... + E_n. Total internal resistance is r_eq = r₁ + r₂ + ... + r_n.',
        'Current through external load R: I = [∑ Eᵢ] / [R + ∑ rᵢ].',
        'For n identical cells in series (each E, r): E_eq = n E, r_eq = n r => I = (n E) / (R + n r).',
        '• Case 1: If external resistance is very large (R >> n r), I ≈ (n E) / R = n (E/R) = n × current from single cell. Series combination is advantageous when R >> n r!',
        '• Case 2: If external resistance is very small (R << n r), I ≈ (n E) / (n r) = E / r = current from a single cell. Series grouping provides NO benefit when R << n r!',
        'Reversed Cells (CRITICAL NEET TRAP): Suppose n identical cells are connected in series, but m cells are mistakenly connected with reversed polarity. Each reversed cell cancels out one normally connected cell (loss of 2m E). Thus, Net EMF = (n - 2m) E. However, internal resistance is always additive: r_net = n r (never subtracts!). Net current I = [(n - 2m) E] / (R + n r).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="230" fill="#f8fafc" rx="14"/><rect x="40" y="20" width="620" height="190" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="45" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Reversed Cell Mechanics in Series Grouping</text><line x1="80" y1="90" x2="120" y2="90" stroke="#334155" stroke-width="2"/><line x1="120" y1="75" x2="120" y2="105" stroke="#ef4444" stroke-width="3"/><line x1="130" y1="80" x2="130" y2="100" stroke="#334155" stroke-width="3"/><text x="125" y="65" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">Cell 1 (+ -)</text><line x1="130" y1="90" x2="190" y2="90" stroke="#334155" stroke-width="2"/><line x1="190" y1="75" x2="190" y2="105" stroke="#ef4444" stroke-width="3"/><line x1="200" y1="80" x2="200" y2="100" stroke="#334155" stroke-width="3"/><text x="195" y="65" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">Cell 2 (+ -)</text><line x1="200" y1="90" x2="260" y2="90" stroke="#334155" stroke-width="2"/><text x="290" y="95" fill="#64748b" font-size="14" font-weight="bold">...</text><line x1="320" y1="90" x2="380" y2="90" stroke="#334155" stroke-width="2"/><line x1="380" y1="80" x2="380" y2="100" stroke="#334155" stroke-width="3"/><line x1="390" y1="75" x2="390" y2="105" stroke="#ef4444" stroke-width="3"/><text x="385" y="65" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">Reversed (- +)</text><line x1="390" y1="90" x2="470" y2="90" stroke="#334155" stroke-width="2"/><rect x="470" y="78" width="80" height="24" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" rx="3"/><text x="510" y="94" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">Load R</text><line x1="550" y1="90" x2="620" y2="90" stroke="#334155" stroke-width="2"/><text x="350" y="145" fill="#1e3a8a" font-size="14" font-weight="bold" text-anchor="middle">Net EMF = (n - 2m) E   |   Net Internal Resistance = n r</text><text x="350" y="175" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">CRITICAL: Internal resistance of reversed cells is STILL ADDED (+nr), NEVER subtracted!</text></svg>',
        caption:
          'Figure 3.13: Series combination with reversed cells showing Net EMF = (n - 2m)E while total internal resistance remains nr.',
        guide:
          'If 2 out of 10 cells (each 2V, 1Ω) are reversed: E_net = (10 - 2×2)×2 = 12 V, and r_net = 10×1 = 10 Ω.'
      },
      importantPoints: [
        'Series aiding: E_eq = ∑ Eᵢ, r_eq = ∑ rᵢ.',
        'Series advantageous only when R >> n r (I = n E / R).',
        'Reversed cells: E_net = (n - 2m) E, r_net = n r.'
      ]
    },
    {
      heading: '4. Cells in Parallel & Mixed Grouping Strategy',
      paragraphs: [
        'Parallel Combination of Two Non-Identical Cells: For two cells of EMFs E₁, E₂ and internal resistances r₁, r₂ connected in parallel with aiding polarities: Equivalent EMF is E_eq = [E₁ / r₁ + E₂ / r₂] / [1 / r₁ + 1 / r₂] = (E₁ r₂ + E₂ r₁) / (r₁ + r₂). Equivalent internal resistance is 1 / r_eq = 1 / r₁ + 1 / r₂ => r_eq = (r₁ r₂) / (r₁ + r₂).',
        'If polarities are opposing (positive of E₁ to negative of E₂): E_eq = (E₁ r₂ - E₂ r₁) / (r₁ + r₂).',
        'For n Identical Cells in Parallel (each E, r): E_eq = E, r_eq = r / n. Total current I = E / [R + r/n].',
        '• Parallel is advantageous when external resistance is very small (R << r/n): I ≈ E / (r/n) = n (E/r) = n × current from single cell!',
        'Mixed Grouping of Cells: Suppose total N cells are arranged in m parallel rows, each row containing n cells in series (Total cells N = n × m).',
        '• Equivalent EMF = n E. Equivalent internal resistance = (n r) / m.',
        '• Total current through external load R: I = (n E) / [R + (n r)/m] = (m n E) / [m R + n r] = (N E) / [m R + n r].',
        '• Condition for Maximum Current in Mixed Grouping: External resistance must equal total equivalent internal resistance: R = (n r) / m, or m R = n r. Maximum current is I_max = (N E) / [2 m R] = (n E) / [2 R] = (m E) / [2 r].'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="300" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="180" y="42" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">Parallel Grouping (Millman\'s Formula)</text><text x="180" y="80" fill="#1e3a8a" font-size="13" font-weight="bold" text-anchor="middle">E_eq = (E₁/r₁ + E₂/r₂) / (1/r₁ + 1/r₂)</text><text x="180" y="110" fill="#1e3a8a" font-size="12" text-anchor="middle">= (E₁ r₂ + E₂ r₁) / (r₁ + r₂)</text><text x="180" y="145" fill="#1e3a8a" font-size="13" font-weight="bold" text-anchor="middle">r_eq = (r₁ r₂) / (r₁ + r₂)</text><text x="180" y="180" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Useful when R &lt;&lt; r (I = n E/r)</text><rect x="370" y="20" width="300" height="200" fill="#fdf4ff" stroke="#c084fc" stroke-width="1.5" rx="8"/><text x="520" y="42" fill="#7e22ce" font-size="13" font-weight="bold" text-anchor="middle">Mixed Grouping (n series × m rows)</text><text x="520" y="80" fill="#581c87" font-size="13" font-weight="bold" text-anchor="middle">E_eq = n E   |   r_eq = (n r) / m</text><text x="520" y="110" fill="#581c87" font-size="12" text-anchor="middle">Total Current: I = (n E) / [R + (n r)/m]</text><text x="520" y="145" fill="#b91c1c" font-size="12" font-weight="bold" text-anchor="middle">Condition for MAX Current:</text><text x="520" y="170" fill="#b91c1c" font-size="13" font-weight="bold" text-anchor="middle">R = (n r) / m  =>  m R = n r</text></svg>',
        caption:
          'Figure 3.14: Parallel cell grouping formulas and mixed grouping maximum current optimization condition.',
        guide:
          'Mixed grouping rule: For maximum current from N cells, match external resistance R to total internal resistance (nr/m).'
      },
      importantPoints: [
        'Two non-identical cells in parallel: E_eq = (E₁ r₂ + E₂ r₁) / (r₁ + r₂), r_eq = (r₁ r₂) / (r₁ + r₂).',
        'Parallel grouping is useful when R << r/n.',
        'Mixed grouping max current condition: R = (n r) / m.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Discharging & Charging Cell Terminal Voltage',
      formula: 'V = E - I r \\quad (\\text{Discharging}), \\quad V = E + I r \\quad (\\text{Charging})',
      variables: 'V = terminal potential difference (V), E = EMF (V), I = current (A), r = internal resistance (Ω)'
    },
    {
      title: 'Internal Resistance of a Cell',
      formula: 'r = R \\left(\\frac{E}{V} - 1\\right) = R \\left(\\frac{E - V}{V}\\right)',
      variables: 'R = external load resistance (Ω), V = terminal potential difference across R'
    },
    {
      title: 'Maximum Power Transfer Theorem',
      formula: 'P_{\\text{max}} = \\frac{E^2}{4r} \\quad \\text{when } R = r',
      variables: 'P_max = maximum power delivered to external load, efficiency η = 50%'
    },
    {
      title: 'Series Grouping with Reversed Cells',
      formula: 'E_{\\text{net}} = (n - 2m) E, \\quad r_{\\text{net}} = n r, \\quad I = \\frac{(n - 2m) E}{R + n r}',
      variables: 'n = total cells in series, m = number of reversed cells'
    },
    {
      title: 'Parallel Grouping of Two Non-Identical Cells',
      formula: 'E_{\\text{eq}} = \\frac{E_1 r_2 + E_2 r_1}{r_1 + r_2}, \\quad r_{\\text{eq}} = \\frac{r_1 r_2}{r_1 + r_2}',
      variables: 'E₁, E₂ = EMFs of cells; r₁, r₂ = internal resistances'
    },
    {
      title: 'Mixed Grouping Maximum Current Condition',
      formula: 'R = \\frac{n r}{m} \\implies I_{\\text{max}} = \\frac{N E}{2 \\sqrt{N R r}} = \\frac{n E}{2 R}',
      variables: 'n = cells in series per row, m = parallel rows, N = n × m total cells'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="230" fill="#f8fafc" rx="14"/><rect x="40" y="25" width="280" height="180" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" rx="10"/><text x="180" y="55" fill="#1e40af" font-size="15" font-weight="bold" text-anchor="middle">Series Cell Grouping</text><text x="180" y="85" fill="#1e3a8a" font-size="13" text-anchor="middle">• E_eq = n E</text><text x="180" y="110" fill="#1e3a8a" font-size="13" text-anchor="middle">• r_eq = n r</text><text x="180" y="135" fill="#1e3a8a" font-size="13" text-anchor="middle">• I = (n E) / (R + n r)</text><text x="180" y="160" fill="#1e3a8a" font-size="13" font-weight="bold" text-anchor="middle">• Useful when R &gt;&gt; n r</text><text x="180" y="185" fill="#1e3a8a" font-size="12" text-anchor="middle">Gives n × single cell current</text><rect x="380" y="25" width="280" height="180" fill="#ecfdf5" stroke="#10b981" stroke-width="2" rx="10"/><text x="520" y="55" fill="#047857" font-size="15" font-weight="bold" text-anchor="middle">Parallel Cell Grouping</text><text x="520" y="85" fill="#065f46" font-size="13" text-anchor="middle">• E_eq = E</text><text x="520" y="110" fill="#065f46" font-size="13" text-anchor="middle">• r_eq = r / n</text><text x="520" y="135" fill="#065f46" font-size="13" text-anchor="middle">• I = E / (R + r/n)</text><text x="520" y="160" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">• Useful when R &lt;&lt; r / n</text><text x="520" y="185" fill="#065f46" font-size="12" text-anchor="middle">Gives n × single cell current</text></svg>',
    caption: 'Decision matrix: When to use Series vs Parallel grouping of cells in NEET circuits.'
  },

  neetImportantPoints: [
    'Terminal voltage during discharging is V = E - Ir (V < E), but during charging it is V = E + Ir (V > E).',
    'Internal resistance r = R (E/V - 1).',
    'Max power is delivered to external resistance when R = r, yielding P_max = E² / (4r).',
    'When m cells are reversed in a series of n identical cells, E_net = (n - 2m)E, while r_net = nr.',
    'For two cells in parallel: E_eq = (E₁ r₂ + E₂ r₁) / (r₁ + r₂) and r_eq = (r₁ r₂) / (r₁ + r₂).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Subtracting internal resistance of reversed cells.',
      correctFact:
        'Resistance represents physical dissipation and is always strictly positive (r_net = n r). Only EMF is subtracted (E_net = (n - 2m) E).',
      whyItMattersForNEET: 'Extremely high frequency calculation error in NEET.'
    },
    {
      commonConfusion: 'Thinking terminal potential difference is always less than EMF.',
      correctFact:
        'During charging of a battery, external current is forced into the positive terminal, making V = E + I r > E.',
      whyItMattersForNEET: 'Direct conceptual MCQ in NEET.'
    },
    {
      commonConfusion: 'Thinking parallel grouping increases the overall voltage.',
      correctFact:
        'Identical cells in parallel maintain the same EMF (E_eq = E). They reduce internal resistance (r_eq = r/n) and increase current capacity.',
      whyItMattersForNEET: 'Common misconception tested in assertion-reason problems.'
    }
  ],

  quickRevision: [
    'EMF E = W/q (open circuit V).',
    'Discharging: V = E - Ir; Charging: V = E + Ir.',
    'r = R (E/V - 1).',
    'P_max = E² / (4r) at R = r (η = 50%).',
    'Series: E_eq = ∑ Eᵢ, r_eq = ∑ rᵢ. Reversed m cells: E_net = (n - 2m)E, r_net = nr.',
    'Parallel (two cells): E_eq = (E₁r₂ + E₂r₁) / (r₁ + r₂), r_eq = (r₁r₂) / (r₁ + r₂).',
    'Mixed grouping max current: R = nr/m.'
  ],

  practiceQuestions: [
    {
      id: 'cell-p1',
      question:
        'A battery of EMF 10 V and internal resistance 3 Ω is connected to a resistor. If the current in the circuit is 0.5 A, the terminal voltage of the battery is:',
      options: ['10 V', '8.5 V', '1.5 V', '7.0 V'],
      correctAnswer: 1,
      explanation:
        'For a discharging cell: Terminal voltage V = E - I r = 10 - (0.5 × 3) = 10 - 1.5 = 8.5 V.'
    },
    {
      id: 'cell-p2',
      question:
        'Twelve cells each of EMF 2 V and internal resistance 0.5 Ω are connected in series. If 3 cells are mistakenly connected with reversed polarity, the net EMF and total internal resistance of the combination are:',
      options: ['12 V, 6 Ω', '18 V, 6 Ω', '12 V, 3 Ω', '6 V, 6 Ω'],
      correctAnswer: 0,
      explanation:
        'Total cells n = 12, reversed cells m = 3, E = 2 V, r = 0.5 Ω. Net EMF = (n - 2m) E = (12 - 2 × 3) × 2 = (12 - 6) × 2 = 6 × 2 = 12 V. Total internal resistance = n r = 12 × 0.5 = 6 Ω. (Note that internal resistance is NEVER subtracted!).'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2021,
      question:
        'A car battery of EMF 12 V and internal resistance 5 × 10⁻² Ω receives a charging current of 60 A from an external charger. The terminal voltage of the battery during charging is:',
      options: ['12 V', '9 V', '15 V', '11.7 V'],
      correctAnswer: 2,
      explanation:
        'During charging, terminal voltage is V = E + I r = 12 + (60 × 5 × 10⁻²) = 12 + 3 = 15 V.',
      conceptTested: 'Terminal Potential Difference of a Charging Cell'
    },
    {
      exam: 'NEET UG',
      year: 2018,
      question:
        'A set of \'n\' equal resistors, of value \'R\' each, are connected in series to a battery of EMF \'E\' and internal resistance \'R\'. The current drawn is I. Now, the \'n\' resistors are connected in parallel to the same battery. The current drawn is 10 I. The value of \'n\' is:',
      options: ['10', '11', '20', '9'],
      correctAnswer: 0,
      explanation:
        'In series: I = E / (nR + R) = E / [R(n + 1)]. In parallel: 10 I = E / (R/n + R) = E / [R(1/n + 1)] = nE / [R(n + 1)]. Dividing the parallel equation by the series equation: 10 = n => n = 10.',
      conceptTested: 'Series vs Parallel Resistor Networks with Cell Internal Resistance'
    }
  ]
};
