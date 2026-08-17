import { DetailedTopicContent } from '../../types/neet';

export const physKirchhoffsLawsDetails: DetailedTopicContent = {
  topicId: 'phys-kirchhoffs-laws',
  topicName: 'Kirchhoff\'s Laws, Wheatstone Bridge, Metre Bridge & Potentiometer',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Current Electricity',
  chapter: 'Current Electricity',

  whatIsThisTopic:
    'Comprehensive mastery of Kirchhoff\'s First Law (Junction Rule / KCL — Conservation of Charge) and Second Law (Loop Rule / KVL — Conservation of Energy), rigorous sign conventions, multi-loop circuit analysis, balanced Wheatstone Bridge (P/Q = R/S), Metre Bridge experiments (X = R · l/(100-l)) with end-error minimization, and Potentiometer principles (potential gradient k = V/L, comparison of EMFs E₁/E₂ = l₁/l₂, internal resistance r = R(l₁/l₂ - 1), and null-deflection advantages).',

  basicIdea: [
    'Kirchhoff\'s First Law (Junction Rule / KCL): The algebraic sum of all electric currents meeting at any electrical junction in a circuit is zero: ∑ I = 0, or ∑ I_in = ∑ I_out. Based strictly on the Law of Conservation of Electric Charge.',
    'Kirchhoff\'s Second Law (Loop Rule / KVL): The algebraic sum of changes in electric potential around any closed circuit loop is zero: ∑ ΔV = 0 (or ∑ E = ∑ I R). Based strictly on the Law of Conservation of Energy.',
    'Universal Sign Conventions for KVL:',
    '• Resistor: Moving in the direction of current drops potential: ΔV = -I R. Moving opposite to current rises potential: ΔV = +I R.',
    '• Battery: Moving from negative to positive terminal rises potential: ΔV = +E. Moving from positive to negative terminal drops potential: ΔV = -E (regardless of current direction!).',
    'Wheatstone Bridge: A network of four resistors (P, Q, R, S) arranged in a quadrilateral. When no current flows through the central galvanometer (null condition, I_G = 0, V_B = V_D), the bridge is balanced: P / Q = R / S. Interchanging the battery and galvanometer does NOT alter the balance condition (conjugate arms).',
    'Metre Bridge: An experimental application of the balanced Wheatstone bridge consisting of a uniform 100 cm manganin/constantan wire. If null point is obtained at length l cm from the zero end: Unknown resistance X = R · [l / (100 - l)].',
    'Potentiometer Principle: The potential drop V across any length l of a uniform wire carrying steady current is directly proportional to its length: V ∝ l => V = k l, where k = V/L is the Potential Gradient (V/m).',
    'Potentiometer Applications:',
    '• Comparison of EMFs of two cells: E₁ / E₂ = l₁ / l₂.',
    '• Sum and Difference method: E₁ / E₂ = (l₁ + l₂) / (l₁ - l₂).',
    '• Internal Resistance of a cell: r = R · [(l₁ - l₂) / l₂] = R · (l₁/l₂ - 1).',
    '• Superiority over Voltmeter: At the null balance point, the potentiometer draws ZERO current from the test cell, measuring its TRUE open-circuit EMF (acting as an ideal voltmeter with infinite internal resistance).'
  ],

  importantTerms: [
    {
      term: 'Kirchhoff\'s First Law (Junction Rule)',
      symbol: '∑ I_in = ∑ I_out',
      definition:
        'At any junction in an electrical circuit, the sum of incoming currents equals the sum of outgoing currents.',
      neetNote: 'Directly consequences Conservation of Electric Charge. Valid for both AC and DC circuits.'
    },
    {
      term: 'Kirchhoff\'s Second Law (Loop Rule)',
      symbol: '∑ ΔV = 0',
      definition:
        'The algebraic sum of potential differences across all circuit elements around any closed loop is zero.',
      neetNote: 'Directly consequences Conservation of Energy. Electrostatic field is conservative, so work done in a closed loop is zero.'
    },
    {
      term: 'Balanced Wheatstone Bridge',
      symbol: 'P / Q = R / S',
      definition:
        'A bridge circuit condition where the potentials at opposite bridge nodes are equal (V_B = V_D), resulting in zero galvanometer current (I_G = 0).',
      neetNote: 'Bridge sensitivity is highest when all four resistances are of comparable magnitude (P ≈ Q ≈ R ≈ S).'
    },
    {
      term: 'Metre Bridge',
      symbol: 'X = R · [l / (100 - l)]',
      definition:
        'A practical laboratory apparatus with a 1 m uniform resistance wire to determine unknown resistance using Wheatstone bridge balance.',
      neetNote: 'End errors are minimized by adjusting R so the balance point lies near 50 cm (40 cm to 60 cm) and repeating with X and R interchanged.'
    },
    {
      term: 'Potential Gradient (k)',
      symbol: 'k = V / L = (I ρ) / A',
      definition:
        'The fall of electric potential per unit length along the potentiometer wire. SI Unit: V/m (or V/cm).',
      neetNote: 'A smaller potential gradient k means higher sensitivity. k is reduced by increasing wire length L or decreasing driver current I (adding series rheostat resistance).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Kirchhoff\'s First & Second Laws (KCL & KVL)',
      paragraphs: [
        'Complex electrical circuits containing multiple voltage sources and cross-connected loops cannot be solved using simple series and parallel reduction formulas alone. Gustav Kirchhoff formulated two fundamental rules grounded in foundational conservation laws.',
        'Kirchhoff\'s First Law (Junction Rule / KCL): At any circuit junction (node), electric charge cannot accumulate or deplete under steady-state conditions. Therefore, the total rate of charge entering a junction must equal the total rate of charge leaving: ∑ I_in = ∑ I_out (or ∑ I = 0). This is a direct expression of the CONSERVATION OF CHARGE.',
        'Kirchhoff\'s Second Law (Loop Rule / KVL): In any closed electrical loop, the electrostatic potential is single-valued at every point. Starting from any node, traversing the complete loop in either clockwise or counter-clockwise sense, and returning to the starting point yields a net potential change of zero: ∑ ΔV = 0 (or ∑ E = ∑ I R). This is a direct expression of the CONSERVATION OF ENERGY.',
        'Physical Significance for NEET: In medical entrance questions, examiners frequently ask which conservation law underlies each rule: First Law → Conservation of Charge; Second Law → Conservation of Energy.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="300" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="180" y="42" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">Junction Rule (KCL)</text><circle cx="180" cy="110" r="6" fill="#1e40af"/><line x1="80" y1="60" x2="180" y2="110" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arr-kcl)"/><text x="110" y="75" fill="#b91c1c" font-size="11" font-weight="bold">I₁ (in)</text><line x1="80" y1="160" x2="180" y2="110" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arr-kcl)"/><text x="110" y="150" fill="#b91c1c" font-size="11" font-weight="bold">I₂ (in)</text><line x1="180" y1="110" x2="280" y2="70" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#arr-kcl-out)"/><text x="245" y="80" fill="#1d4ed8" font-size="11" font-weight="bold">I₃ (out)</text><line x1="180" y1="110" x2="280" y2="150" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#arr-kcl-out)"/><text x="245" y="145" fill="#1d4ed8" font-size="11" font-weight="bold">I₄ (out)</text><text x="180" y="195" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">I₁ + I₂ = I₃ + I₄ (Charge Conserved)</text><rect x="370" y="20" width="300" height="200" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="8"/><text x="520" y="42" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">Loop Rule (KVL)</text><rect x="420" y="70" width="200" height="90" fill="none" stroke="#047857" stroke-width="2" rx="6"/><path d="M 500 100 A 20 20 0 1 1 530 120" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#arr-kcl-out)"/><text x="520" y="118" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Loop</text><text x="520" y="195" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">∑ ΔV = 0 (Energy Conserved)</text><defs><marker id="arr-kcl" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker><marker id="arr-kcl-out" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/></marker></defs></svg>',
        caption:
          'Figure 3.15: Kirchhoff\'s Junction Rule (Conservation of Charge) and Loop Rule (Conservation of Energy).',
        guide:
          'KCL: Sum of incoming currents = Sum of outgoing currents. KVL: Sum of voltage drops and rises around any closed loop = 0.'
      },
      importantPoints: [
        'Kirchhoff\'s 1st Law (KCL) = Conservation of Charge.',
        'Kirchhoff\'s 2nd Law (KVL) = Conservation of Energy.',
        'Both laws are universally applicable to complex multi-source DC and AC networks.'
      ]
    },
    {
      heading: '2. Rigorous Sign Conventions & Multi-Loop Solving Methodology',
      paragraphs: [
        'To apply KVL without mathematical error, follow these standardized rules:',
        '1. Traversal across a Resistor:',
        '• In the direction of assumed current: Potential DROPS by I R => ΔV = -I R.',
        '• Opposite to the direction of assumed current: Potential RISES by I R => ΔV = +I R.',
        '2. Traversal across a Cell/Battery (INDEPENDENT of current direction!):',
        '• From negative terminal (-) to positive terminal (+): Potential RISES by EMF E => ΔV = +E.',
        '• From positive terminal (+) to negative terminal (-): Potential DROPS by EMF E => ΔV = -E.',
        'Multi-Loop Solving Algorithm:',
        'Step 1: Identify all nodes and independent loops.',
        'Step 2: Assign branch currents with directional arrows (e.g., I₁, I₂, and at junction write I₃ = I₁ + I₂ using KCL).',
        'Step 3: Choose a loop traversal direction (clockwise or counterclockwise) for each independent closed mesh.',
        'Step 4: Write KVL loop equations applying the sign conventions.',
        'Step 5: Solve the simultaneous linear algebraic equations for the unknown currents. If any calculated current comes out NEGATIVE, its actual physical flow is simply OPPOSITE to the initially assumed direction!'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="230" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="190" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="45" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Standard KVL Sign Conventions for Circuit Traversal</text><rect x="60" y="70" width="260" height="55" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" rx="6"/><text x="190" y="90" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Along Current: ΔV = -I R</text><line x1="80" y1="105" x2="300" y2="105" stroke="#ef4444" stroke-width="2" marker-end="url(#arr-kcl)"/><text x="190" y="120" fill="#ef4444" font-size="10" text-anchor="middle">Traversal Direction → (Current →)</text><rect x="380" y="70" width="260" height="55" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" rx="6"/><text x="510" y="90" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Opposite Current: ΔV = +I R</text><line x1="620" y1="105" x2="400" y2="105" stroke="#3b82f6" stroke-width="2" marker-end="url(#arr-kcl-out)"/><text x="510" y="120" fill="#3b82f6" font-size="10" text-anchor="middle">← Traversal Direction (Current →)</text><rect x="60" y="135" width="260" height="55" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" rx="6"/><text x="190" y="155" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Cell - to + : ΔV = +E</text><text x="190" y="175" fill="#047857" font-size="10" text-anchor="middle">Potential Gains from Low to High Terminal</text><rect x="380" y="135" width="260" height="55" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" rx="6"/><text x="510" y="155" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Cell + to - : ΔV = -E</text><text x="510" y="175" fill="#b91c1c" font-size="10" text-anchor="middle">Potential Drops from High to Low Terminal</text></svg>',
        caption:
          'Figure 3.16: Complete reference sign chart for traversing resistors and EMF sources in Kirchhoff\'s loop rule.',
        guide:
          'Master this 4-part sign rule to eliminate sign errors in complex multi-loop circuit numericals.'
      },
      importantPoints: [
        'Resistor along current: -IR; Resistor opposite current: +IR.',
        'Battery (-) to (+): +E; Battery (+) to (-): -E (independent of current!).',
        'Negative current answer means real current flows opposite to assumed arrow.'
      ]
    },
    {
      heading: '3. Wheatstone Bridge & Metre Bridge',
      paragraphs: [
        'Wheatstone Bridge Network: Consists of four resistors P, Q, R, and S arranged to form the four arms of a quadrilateral ABCD. A galvanometer G is connected across junctions B and D, while a battery E is connected across junctions A and C.',
        'Balance Condition Derivation:',
        '• At balance, no current passes through the galvanometer: I_G = 0, which means V_B = V_D.',
        '• Applying KCL at junction B: current through P equals current through Q (I_P = I_Q = I₁).',
        '• Applying KCL at junction D: current through R equals current through S (I_R = I_S = I₂).',
        '• Since V_B = V_D, the potential drop across AB equals AD: I₁ P = I₂ R. Similarly, potential drop across BC equals DC: I₁ Q = I₂ S.',
        '• Dividing the two equations: (I₁ P) / (I₁ Q) = (I₂ R) / (I₂ S) => P / Q = R / S.',
        'Conjugate Arms Theorem: If the battery and galvanometer are interchanged (battery across BD and galvanometer across AC), the balance condition P/Q = R/S remains totally UNCHANGED!',
        'Metre Bridge Apparatus: Consists of a uniform wire AC of length 100 cm (1 m) stretched on a wooden meter scale. Resistance box R is connected in the left gap, and unknown resistance X is connected in the right gap. If the jockey finds a null deflection at length l cm from end A (where wire resistance is P = r_w · l and Q = r_w · (100 - l)):',
        '• Balance condition: R / X = l / (100 - l) => Unknown X = R · [(100 - l) / l]. (Or if X is in left gap and R in right gap: X = R · [l / (100 - l)]).',
        'Minimizing End Errors: End resistance arises from copper strip contacts and soldering at ends A and C. To eliminate end errors: (1) Choose R such that the null point lies near the center (40 cm to 60 cm), and (2) Interchange the positions of X and R and take the arithmetic mean of the two measurements.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="250" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="300" height="210" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="180" y="40" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">Wheatstone Bridge Diamond</text><polygon points="180,60 260,120 180,180 100,120" fill="none" stroke="#334155" stroke-width="2"/><text x="130" y="85" fill="#b91c1c" font-size="11" font-weight="bold">P</text><text x="230" y="85" fill="#b91c1c" font-size="11" font-weight="bold">Q</text><text x="130" y="160" fill="#b91c1c" font-size="11" font-weight="bold">R</text><text x="230" y="160" fill="#b91c1c" font-size="11" font-weight="bold">S</text><line x1="180" y1="60" x2="180" y2="180" stroke="#64748b" stroke-width="1.5"/><circle cx="180" cy="120" r="14" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="180" y="125" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">G</text><text x="180" y="210" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">Balance: P/Q = R/S (I_G = 0)</text><rect x="370" y="20" width="300" height="210" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="8"/><text x="520" y="40" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">Metre Bridge Experiment</text><line x1="410" y1="160" x2="630" y2="160" stroke="#047857" stroke-width="3"/><text x="520" y="180" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">100 cm Uniform Wire</text><rect x="430" y="70" width="50" height="20" fill="#fee2e2" stroke="#ef4444" stroke-width="1" rx="2"/><text x="455" y="84" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">R (Box)</text><rect x="550" y="70" width="50" height="20" fill="#fee2e2" stroke="#ef4444" stroke-width="1" rx="2"/><text x="575" y="84" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">X (Unk)</text><circle cx="520" cy="115" r="12" fill="#fef3c7" stroke="#d97706" stroke-width="1"/><text x="520" y="119" fill="#b45309" font-size="10" font-weight="bold" text-anchor="middle">G</text><line x1="520" y1="127" x2="500" y2="160" stroke="#334155" stroke-width="1.5" marker-end="url(#arr-kcl)"/><text x="455" y="150" fill="#065f46" font-size="10" font-weight="bold">l cm</text><text x="565" y="150" fill="#065f46" font-size="10" font-weight="bold">100 - l cm</text><text x="520" y="210" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">X = R · [(100 - l) / l]</text></svg>',
        caption:
          'Figure 3.17: (Left) Balanced Wheatstone bridge diamond topology. (Right) Standard Metre Bridge setup with null balance point l.',
        guide:
          'In Metre Bridge, left resistance / right resistance = left wire length / right wire length: R / X = l / (100 - l).'
      },
      importantPoints: [
        'Wheatstone bridge balanced condition: P/Q = R/S => I_G = 0.',
        'Swapping battery and galvanometer maintains balance (conjugate arms).',
        'Metre bridge formula: X = R · [(100 - l) / l] (if R is in left gap, X in right).',
        'End error minimized when balance point is near 50 cm.'
      ]
    },
    {
      heading: '4. Potentiometer: Principle, Gradient & Core Applications',
      paragraphs: [
        'Working Principle of Potentiometer: A potentiometer consists of a long, uniform high-resistance wire AB (usually 4 to 10 meters long, made of constantan or manganin) connected across a primary driver accumulator of EMF E_driver. A steady current I flows through wire AB.',
        'Potential Gradient (k): The drop in potential per unit length of the wire is: k = V_AB / L = (I R_wire) / L = [I (ρ L / A)] / L = (I ρ) / A. Current from driver battery is I = E_driver / (R_wire + R_rh + r_driver). Thus, k = [E_driver / (R_wire + R_rh + r_driver)] · [R_wire / L].',
        'Principle of Operation: When an unknown voltage or test cell EMF E is connected in the secondary circuit, balancing it against wire length l yields: V_l = k · l. At the null balance point (galvanometer deflection = 0), the unknown voltage exactly matches V_l: E = k · l.',
        'Key Applications:',
        '1. Comparison of EMFs of Two Cells: Cell 1 balances at length l₁: E₁ = k l₁. Cell 2 balances at length l₂: E₂ = k l₂. Dividing gives: E₁ / E₂ = l₁ / l₂.',
        '2. Sum and Difference Method: When two cells aid each other (E₁ + E₂), balance length is l₁. When they oppose each other (E₁ - E₂), balance length is l₂. Thus: (E₁ + E₂) / (E₁ - E₂) = l₁ / l₂ => E₁ / E₂ = (l₁ + l₂) / (l₁ - l₂).',
        '3. Determination of Internal Resistance of a Cell: Open circuit (switch S open, no current drawn from test cell), balance length is l₁: E = k l₁. Closed circuit (test cell shunted by resistance box R, drawing current), terminal voltage V balances at length l₂: V = k l₂. Internal resistance is: r = R (E/V - 1) = R · [(k l₁) / (k l₂) - 1] = R · [(l₁ - l₂) / l₂] = R · (l₁/l₂ - 1).',
        'Why Potentiometer is Superior to Voltmeter: A real voltmeter must draw a small current from the cell to produce needle deflection, thereby measuring terminal voltage V = E - Ir instead of true EMF. In contrast, at the null point, the potentiometer draws ZERO current (I = 0), measuring the exact, true open-circuit EMF (infinite effective internal resistance).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="260" fill="#f8fafc" rx="14"/><rect x="40" y="20" width="620" height="220" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="42" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Potentiometer Circuit for Measuring Cell Internal Resistance</text><line x1="80" y1="70" x2="160" y2="70" stroke="#334155" stroke-width="2"/><line x1="160" y1="60" x2="160" y2="80" stroke="#ef4444" stroke-width="3"/><line x1="170" y1="65" x2="170" y2="75" stroke="#334155" stroke-width="3"/><text x="165" y="52" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">E_driver</text><line x1="170" y1="70" x2="260" y2="70" stroke="#334155" stroke-width="2"/><rect x="260" y="63" width="50" height="15" fill="#fee2e2" stroke="#ef4444" stroke-width="1" rx="2"/><text x="285" y="74" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">Rh</text><line x1="310" y1="70" x2="620" y2="70" stroke="#334155" stroke-width="2"/><line x1="80" y1="70" x2="80" y2="120" stroke="#334155" stroke-width="2"/><line x1="620" y1="70" x2="620" y2="120" stroke="#334155" stroke-width="2"/><line x1="80" y1="120" x2="620" y2="120" stroke="#047857" stroke-width="4"/><text x="70" y="125" fill="#047857" font-size="12" font-weight="bold" text-anchor="end">A</text><text x="630" y="125" fill="#047857" font-size="12" font-weight="bold">B</text><text x="350" y="110" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Potentiometer Wire AB (Length L)</text><line x1="80" y1="120" x2="80" y2="180" stroke="#334155" stroke-width="1.5"/><line x1="80" y1="180" x2="160" y2="180" stroke="#334155" stroke-width="1.5"/><line x1="160" y1="170" x2="160" y2="190" stroke="#ef4444" stroke-width="3"/><line x1="170" y1="175" x2="170" y2="185" stroke="#334155" stroke-width="3"/><text x="165" y="162" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">Test Cell (E, r)</text><line x1="170" y1="180" x2="260" y2="180" stroke="#334155" stroke-width="1.5"/><circle cx="280" cy="180" r="12" fill="#fef3c7" stroke="#d97706" stroke-width="1"/><text x="280" y="184" fill="#b45309" font-size="10" font-weight="bold" text-anchor="middle">G</text><line x1="292" y1="180" x2="380" y2="180" stroke="#334155" stroke-width="1.5"/><line x1="380" y1="180" x2="380" y2="124" stroke="#ef4444" stroke-width="2" marker-end="url(#arr-kcl)"/><text x="380" y="145" fill="#ef4444" font-size="10" font-weight="bold">Jockey (J)</text><text x="230" y="135" fill="#1e40af" font-size="10" font-weight="bold">Balance Length l</text><text x="350" y="225" fill="#1e3a8a" font-size="13" font-weight="bold" text-anchor="middle">r = R · [(l₁ - l₂) / l₂]   |   E₁/E₂ = l₁/l₂   |   k = V/L</text></svg>',
        caption:
          'Figure 3.18: Complete potentiometer circuit diagram for measuring internal resistance of a test cell.',
        guide:
          'Open circuit (no shunt) gives l₁ (proportional to E); closed circuit (shunted with R) gives l₂ (proportional to V). Then r = R(l₁/l₂ - 1).'
      },
      importantPoints: [
        'Potential gradient k = V / L = (I ρ) / A.',
        'Comparison of EMFs: E₁ / E₂ = l₁ / l₂.',
        'Internal resistance: r = R · [(l₁ - l₂) / l₂].',
        'Potentiometer acts as ideal voltmeter of infinite resistance because current at null point is ZERO.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Kirchhoff\'s First Law (Junction Rule)',
      formula: '\\sum I_{\\text{in}} = \\sum I_{\\text{out}} \\iff \\sum I = 0',
      variables: 'Conservation of Electric Charge'
    },
    {
      title: 'Kirchhoff\'s Second Law (Loop Rule)',
      formula: '\\sum \\Delta V = 0 \\iff \\sum E = \\sum I R',
      variables: 'Conservation of Energy around any closed circuit loop'
    },
    {
      title: 'Wheatstone Bridge Balance Condition',
      formula: '\\frac{P}{Q} = \\frac{R}{S} \\implies I_G = 0 \\text{ and } V_B = V_D',
      variables: 'P, Q, R, S = four bridge arm resistances, I_G = galvanometer current'
    },
    {
      title: 'Metre Bridge Unknown Resistance',
      formula: 'X = R \\left(\\frac{100 - l}{l}\\right) \\quad \\text{or} \\quad X = R \\left(\\frac{l}{100 - l}\\right)',
      variables: 'l = balancing length (cm), R = known resistance from resistance box (Ω)'
    },
    {
      title: 'Potentiometer Potential Gradient',
      formula: 'k = \\frac{V}{L} = \\frac{I \\rho}{A} = \\left(\\frac{E_{\\text{driver}}}{R_{\\text{wire}} + R_{\\text{rh}} + r}\\right) \\left(\\frac{R_{\\text{wire}}}{L}\\right)',
      variables: 'k = potential gradient (V/m), L = wire length, I = primary current'
    },
    {
      title: 'Potentiometer Cell Comparison & Internal Resistance',
      formula: '\\frac{E_1}{E_2} = \\frac{l_1}{l_2}, \\quad r = R \\left(\\frac{l_1 - l_2}{l_2}\\right) = R \\left(\\frac{l_1}{l_2} - 1\\right)',
      variables: 'l₁ = open circuit balance length (EMF E), l₂ = closed circuit balance length (terminal voltage V)'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="230" fill="#f8fafc" rx="14"/><rect x="40" y="25" width="280" height="180" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" rx="10"/><text x="180" y="55" fill="#1e40af" font-size="15" font-weight="bold" text-anchor="middle">Voltmeter</text><text x="180" y="85" fill="#1e3a8a" font-size="13" text-anchor="middle">• Finite internal resistance</text><text x="180" y="110" fill="#1e3a8a" font-size="13" text-anchor="middle">• Draws current from test cell</text><text x="180" y="135" fill="#1e3a8a" font-size="13" text-anchor="middle">• Measures terminal voltage V = E - Ir</text><text x="180" y="160" fill="#1e3a8a" font-size="13" text-anchor="middle">• Cannot measure true open-circuit EMF</text><text x="180" y="185" fill="#1e3a8a" font-size="13" text-anchor="middle">• Deflection method (less accurate)</text><rect x="380" y="25" width="280" height="180" fill="#ecfdf5" stroke="#10b981" stroke-width="2" rx="10"/><text x="520" y="55" fill="#047857" font-size="15" font-weight="bold" text-anchor="middle">Potentiometer</text><text x="520" y="85" fill="#065f46" font-size="13" text-anchor="middle">• Infinite effective resistance</text><text x="520" y="110" fill="#065f46" font-size="13" text-anchor="middle">• Draws ZERO current at null point</text><text x="520" y="135" fill="#065f46" font-size="13" text-anchor="middle">• Measures exact, true EMF E</text><text x="520" y="160" fill="#065f46" font-size="13" text-anchor="middle">• Can measure internal resistance r</text><text x="520" y="185" fill="#065f46" font-size="13" text-anchor="middle">• Null balance method (highly accurate)</text></svg>',
    caption: 'Comparison: Why Potentiometer is an Ideal Instrument compared to a standard Voltmeter.'
  },

  neetImportantPoints: [
    'Kirchhoff\'s First Law is based on Conservation of Charge; Second Law is based on Conservation of Energy.',
    'In balanced Wheatstone bridge, no current flows through galvanometer (I_G = 0). Resistor in galvanometer branch can be removed.',
    'Swapping battery and galvanometer positions leaves the balanced Wheatstone bridge condition unchanged (conjugate arms).',
    'Potentiometer condition for balance: Driver battery EMF must be GREATER than test cell EMF (E_driver > E_test), and positive terminal of driver battery and test cell must be connected to the SAME starting point A.',
    'Internal resistance formula on potentiometer: r = R(l₁/l₂ - 1), where l₁ > l₂ always.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Connecting driver battery and test cell with opposite polarities at point A.',
      correctFact:
        'If positive of driver and negative of test cell are connected to point A, potentials add up instead of opposing, and the galvanometer will deflect to only ONE side throughout the entire wire (no null point can be found!).',
      whyItMattersForNEET: 'Extremely popular experimental reasoning question in NEET.'
    },
    {
      commonConfusion: 'Using E_driver < E_test in a potentiometer experiment.',
      correctFact:
        'If driver EMF is smaller than test cell EMF, the potential drop across the entire wire V_AB is less than E_test, so no balance point exists on the wire (galvanometer deflects to one side even at end B).',
      whyItMattersForNEET: 'Tested repeatedly in NEET practical physics MCQs.'
    },
    {
      commonConfusion: 'Confusing l₁ and l₂ in internal resistance formula.',
      correctFact:
        'l₁ is the OPEN-CIRCUIT balance point (larger length, corresponding to EMF E). l₂ is the CLOSED-CIRCUIT balance point (smaller length, corresponding to terminal voltage V < E). Since E > V, l₁ > l₂ always.',
      whyItMattersForNEET: 'Prevents negative internal resistance calculation mistakes.'
    }
  ],

  quickRevision: [
    'KCL: ∑ I = 0 (Conservation of Charge).',
    'KVL: ∑ ΔV = 0 (Conservation of Energy).',
    'Sign rules: Along current = -IR; Against current = +IR; Battery - to + = +E; Battery + to - = -E.',
    'Wheatstone: P/Q = R/S (I_G = 0).',
    'Metre Bridge: X = R · [(100 - l)/l].',
    'Potentiometer: k = V/L; E₁/E₂ = l₁/l₂; r = R(l₁/l₂ - 1).',
    'Potentiometer draws no current at null point => acts as ideal voltmeter.'
  ],

  practiceQuestions: [
    {
      id: 'kirch-p1',
      question:
        'In a metre bridge experiment, the null point is obtained at 40 cm from the left end when a known resistance of 12 Ω is connected in the right gap. The value of unknown resistance in the left gap is:',
      options: ['8 Ω', '18 Ω', '6 Ω', '16 Ω'],
      correctAnswer: 0,
      explanation:
        'Let unknown resistance in left gap be X, known resistance in right gap R = 12 Ω. Null point l = 40 cm. Formula: X / R = l / (100 - l) => X / 12 = 40 / (100 - 40) = 40 / 60 = 2/3. Therefore, X = 12 × (2/3) = 8 Ω.'
    },
    {
      id: 'kirch-p2',
      question:
        'In a potentiometer arrangement, a cell of EMF 1.5 V gives a balance point at 30 cm length of the wire. If another cell of EMF 2.5 V is used, the balancing length will be:',
      options: ['50 cm', '45 cm', '20 cm', '60 cm'],
      correctAnswer: 0,
      explanation:
        'Formula: E₁ / E₂ = l₁ / l₂ => l₂ = l₁ × (E₂ / E₁). Given: E₁ = 1.5 V, l₁ = 30 cm, E₂ = 2.5 V. l₂ = 30 × (2.5 / 1.5) = 30 × (5/3) = 50 cm.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2022,
      question:
        'In a potentiometer circuit, a cell of EMF 1.5 V gives balance point at 36 cm length of wire. If another cell of EMF 2.5 V replaces the first cell, then at what length of the wire will the balance point occur?',
      options: ['60 cm', '21.6 cm', '64 cm', '54 cm'],
      correctAnswer: 0,
      explanation:
        'Using E₁ / E₂ = l₁ / l₂ => l₂ = l₁ (E₂ / E₁) = 36 × (2.5 / 1.5) = 36 × (5/3) = 12 × 5 = 60 cm.',
      conceptTested: 'Potentiometer EMF Comparison Principle'
    },
    {
      exam: 'NEET UG',
      year: 2020,
      question:
        'A resistance wire connected in the left gap of a metre bridge balances a 10 Ω resistance in the right gap at a point which divides the bridge wire in the ratio 3 : 2. If the length of the resistance wire is 1.5 m, then the length of 1 Ω of the resistance wire is:',
      options: ['1.0 × 10⁻¹ m', '1.5 × 10⁻¹ m', '1.5 × 10⁻² m', '1.0 × 10⁻² m'],
      correctAnswer: 0,
      explanation:
        'Let left wire resistance be R_wire. Ratio l₁ : l₂ = 3 : 2 => R_wire / 10 = 3 / 2 => R_wire = 15 Ω. Length of wire is 1.5 m for 15 Ω resistance. Therefore, resistance per unit length is 15 Ω / 1.5 m = 10 Ω/m. Thus, length corresponding to 1 Ω is 1 / 10 = 0.1 m = 1.0 × 10⁻¹ m.',
      conceptTested: 'Metre Bridge Balance Condition & Linear Resistance Calculation'
    }
  ]
};
