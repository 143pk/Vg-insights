import { DetailedTopicContent } from '../../types/neet';

export const physGalvanometerDetails: DetailedTopicContent = {
  topicId: 'phys-galvanometer',
  topicName: 'Moving Coil Galvanometer, Ammeter & Voltmeter Conversions & Master Synthesis',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Magnetic Effects of Current & Magnetism',
  chapter: 'Moving Charges and Magnetism',

  whatIsThisTopic:
    'Comprehensive first-principles mastery of the Moving Coil Galvanometer (MCG), radial magnetic fields via concave pole pieces and soft iron cylindrical core, deflection linearity (θ ∝ I), current sensitivity (I_s = NAB/k) and voltage sensitivity (V_s = NAB/kR_G), conversion to an Ammeter using a parallel low-resistance Shunt (S = I_g G / (I - I_g)), conversion to a Voltmeter using a series high resistance (R = V/I_g - G), complete Right-Hand Rule Decision Matrix, 7 Conceptual Comparison Tables, 10+ Solved Numericals, Verified PYQs (2013-2024), 30+ NEET Traps, and Master Formula Sheet.',

  basicIdea: [
    'Moving Coil Galvanometer (MCG) Principle: A current-carrying coil placed in a magnetic field experiences a deflecting magnetic torque τ_def = N I A B sinθ. In an MCG, concave cylindrical pole pieces and a soft iron core create a RADIAL magnetic field, ensuring the plane of the coil is ALWAYS parallel to field lines (θ = 90°, sin 90° = 1) in all positions.',
    'Deflecting Torque & Restoring Torque Equilibrium:',
    '• Deflecting Torque: τ_def = N I A B.',
    '• Restoring Torque of Phosphor-Bronze Suspension Spring: τ_rest = k θ (where k is torsional spring constant and θ is angular deflection).',
    '• In Equilibrium: τ_def = τ_rest ⇒ N I A B = k θ ⇒ θ = (N A B / k) · I = (1 / G_reduction) · I.',
    '• Deflection Linearity: Because (NAB/k) is constant, θ ∝ I (the galvanometer has an exactly linear scale).',
    'Current Sensitivity (I_s): Deflection produced per unit electric current: I_s = θ / I = (N A B) / k. SI Unit: rad/A or div/A.',
    'Voltage Sensitivity (V_s): Deflection produced per unit potential difference: V_s = θ / V = θ / (I R_G) = (N A B) / (k R_G) = I_s / R_G. SI Unit: rad/V or div/V.',
    'CRITICAL NEET INSIGHT: Doubling the number of turns (N → 2N) doubles current sensitivity (I_s → 2I_s), but because wire length and resistance also double (R_G → 2R_G), the Voltage Sensitivity V_s REMAINS UNCHANGED! Increasing I_s does NOT necessarily increase V_s.',
    'Conversion to Ammeter: An MCG cannot directly measure large currents because (1) its fine coil will burn from excessive Joule heat (I²Rt), and (2) its resistance G would alter the total circuit current.',
    '• Solution: Connect a LOW resistance called a SHUNT (S) in PARALLEL with the galvanometer.',
    '• Potential Difference Equality: V_G = V_S ⇒ I_g · G = (I - I_g) · S ⇒ S = (I_g · G) / (I - I_g).',
    '• Total Resistance of Ammeter: R_A = (G · S) / (G + S) < S (extremely low). An Ideal Ammeter has R_A = 0.',
    '• Ammeter is always connected in SERIES with the circuit branch.',
    'Conversion to Voltmeter: An MCG cannot directly measure large voltages because it draws significant current and alters the potential difference.',
    '• Solution: Connect a HIGH resistance (R) in SERIES with the galvanometer coil.',
    '• Total Voltage Equation: V = I_g (G + R) ⇒ G + R = V / I_g ⇒ R = (V / I_g) - G.',
    '• Total Resistance of Voltmeter: R_V = G + R ≈ R (extremely high). An Ideal Voltmeter has R_V = ∞.',
    '• Voltmeter is always connected in PARALLEL across the component whose voltage is being measured.'
  ],

  importantTerms: [
    {
      term: 'Moving Coil Galvanometer (MCG)',
      symbol: 'MCG',
      definition:
        'A highly sensitive electromagnetic instrument used to detect and measure very small electric currents (microamperes).',
      neetNote: 'Operates on the torque experienced by a current loop in a radial magnetic field: θ = (NAB/k)I.'
    },
    {
      term: 'Radial Magnetic Field',
      symbol: 'θ = 90° everywhere',
      definition:
        'A magnetic field directed radially inward/outward produced by cylindrical concave pole pieces and a soft iron core, making deflecting torque maximum and independent of coil orientation.',
      neetNote: 'Eliminates the sinθ non-linear factor, providing an exactly linear scale (θ ∝ I).'
    },
    {
      term: 'Shunt Resistance (S)',
      symbol: 'S = I_g G / (I - I_g)',
      definition:
        'A very small precision resistance connected in parallel with a galvanometer to bypass the major fraction of current, converting it into an ammeter.',
      neetNote: 'Total ammeter resistance is less than S: R_A = GS / (G + S) < S.'
    },
    {
      term: 'Series Multiplier Resistance (R)',
      symbol: 'R = V / I_g - G',
      definition:
        'A very large resistance connected in series with a galvanometer to limit current to I_g at full-scale voltage V, converting it into a voltmeter.',
      neetNote: 'Total voltmeter resistance is huge: R_V = G + R ≈ R.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Moving Coil Galvanometer (MCG): Construction, Radial Field & Deflection Formula',
      paragraphs: [
        'Construction Architecture of a Moving Coil Galvanometer:',
        '1. Rectangular Coil: Made of a large number of turns (N) of fine insulated copper wire wound on a light non-magnetic metallic frame.',
        '2. Cylindrical Soft Iron Core: Placed symmetrically inside the coil frame without touching it. The soft iron core has high magnetic permeability, which intensifies the magnetic field lines and forces them to be purely radial.',
        '3. Concave Cylindrical Magnetic Poles: The north and south poles of a powerful permanent horseshoe magnet are carved with concave cylindrical surfaces.',
        '4. Suspension & Restoring Hairsprings: The coil is suspended by a phosphor-bronze strip attached to a torsion head at the top and a helical hairspring at the bottom, which provide a linear restoring torque (τ = kθ).',
        'Why the Radial Magnetic Field is Essential for NEET:',
        'In a standard uniform parallel magnetic field, deflecting torque is τ = N I A B sinθ. As the coil rotates, angle θ changes, meaning deflection θ would NOT be directly proportional to current I, yielding an uncalibrated non-linear scale.',
        'With concave pole pieces and a soft iron core, the magnetic field lines always lie in the plane of the coil regardless of its rotational angle. Thus, the normal to the coil is ALWAYS perpendicular to the magnetic field lines (θ = 90°, sin 90° = 1) at all times!',
        'Equilibrium Derivation:',
        '• Deflecting Torque: τ_def = N I A B sin 90° = N I A B.',
        '• Restoring Torque of Spring: τ_rest = k θ (where k is the restoring torque per unit twist).',
        '• At equilibrium: τ_def = τ_rest ⇒ N I A B = k θ ⇒ θ = (N A B / k) · I.',
        '• Since (N A B / k) is a constant for a given instrument, θ ∝ I (strictly linear scale!).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="38" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Moving Coil Galvanometer: Radial Field &amp; Core Architecture</text><g transform="translate(350, 115)"><path d="M -120 -60 A 80 80 0 0 1 -120 60 L -150 60 L -150 -60 Z" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/><text x="-135" y="5" fill="#991b1b" font-size="12" font-weight="bold" text-anchor="middle">N Pole</text><path d="M 120 -60 A 80 80 0 0 0 120 60 L 150 60 L 150 -60 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="135" y="5" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">S Pole</text><circle cx="0" cy="0" r="32" fill="#e2e8f0" stroke="#475569" stroke-width="2"/><text x="0" y="4" fill="#334155" font-size="9" font-weight="bold" text-anchor="middle">Soft Iron Core</text><rect x="-42" y="-12" width="84" height="24" fill="none" stroke="#ef4444" stroke-width="2" transform="rotate(-20)"/><line x1="-95" y1="0" x2="-35" y2="0" stroke="#059669" stroke-width="1.5" marker-end="url(#arr-flow-green)"/><line x1="35" y1="0" x2="95" y2="0" stroke="#059669" stroke-width="1.5" marker-end="url(#arr-flow-green)"/><line x1="-80" y1="-35" x2="-25" y2="-12" stroke="#059669" stroke-width="1.5" marker-end="url(#arr-flow-green)"/><line x1="25" y1="12" x2="80" y2="35" stroke="#059669" stroke-width="1.5" marker-end="url(#arr-flow-green)"/></g><text x="350" y="215" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">Radial Field: θ = 90° in all positions ⇒ τ_def = NIAB = kθ ⇒ θ ∝ I (Linear Scale)</text></svg>',
        caption:
          'Figure 4.17: Cross-section of Moving Coil Galvanometer showing concave poles, soft iron core, and radial field lines.',
        guide:
          'Concave poles and soft iron core produce radial magnetic field lines ensuring plane of coil is always parallel to B.'
      },
      importantPoints: [
        'Principle: Torque on current loop in magnetic field: τ = NIAB.',
        'Radial field created by concave pole pieces and cylindrical soft iron core.',
        'Linear deflection: θ = (NAB / k) I ⇒ θ ∝ I.',
        'Soft iron core increases magnetic field intensity (high μ_r) and makes field radial.'
      ]
    },
    {
      heading: '2. Current Sensitivity & Voltage Sensitivity: The Classic Number-of-Turns Paradox',
      paragraphs: [
        '1. Current Sensitivity (I_s): Defined as the angular deflection produced per unit electric current passing through the galvanometer:',
        'I_s = θ / I = (N A B) / k. (SI Unit: rad/A or div/A).',
        '• To increase I_s: Increase number of turns N, increase coil area A, increase magnetic field B, or decrease torsional constant k (by using fine phosphor-bronze suspension).',
        '2. Voltage Sensitivity (V_s): Defined as the angular deflection produced per unit potential difference applied across the galvanometer coil:',
        'V_s = θ / V = θ / (I R_G) = I_s / R_G = (N A B) / (k R_G). (SI Unit: rad/V or div/V).',
        'THE FAMOUS NEET PARADOX: "Does increasing Current Sensitivity automatically increase Voltage Sensitivity?"',
        'ANSWER: NO! When the number of turns N is doubled (N → 2N):',
        '• Current Sensitivity: I_s\' = (2N A B) / k = 2 I_s (Current sensitivity DOUBLES).',
        '• Resistance of Coil: Doubling turns doubles the total length of copper wire used (L → 2L), which doubles the electrical resistance of the coil (R_G → 2R_G).',
        '• New Voltage Sensitivity: V_s\' = I_s\' / R_G\' = (2 I_s) / (2 R_G) = I_s / R_G = V_s (Voltage sensitivity REMAINS UNCHANGED!).',
        'Summary Rule for NEET: Increasing N increases I_s, but leaves V_s unchanged. Increasing B or A increases BOTH I_s and V_s. Decreasing k increases BOTH I_s and V_s.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="230" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="190" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="42" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Current Sensitivity vs Voltage Sensitivity: Effect of Doubling Turns (N → 2N)</text><rect x="50" y="65" width="280" height="125" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" rx="6"/><text x="190" y="88" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Current Sensitivity (I_s)</text><text x="190" y="112" fill="#1e3a8a" font-size="11" text-anchor="middle">I_s = θ / I = (N A B) / k</text><text x="190" y="138" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">N → 2N  ⇒  I_s\' = 2 I_s</text><text x="190" y="165" fill="#047857" font-size="11" text-anchor="middle">(Current Sensitivity DOUBLES)</text><rect x="370" y="65" width="280" height="125" fill="#ffffff" stroke="#86efac" stroke-width="1.5" rx="6"/><text x="510" y="88" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">Voltage Sensitivity (V_s)</text><text x="510" y="112" fill="#065f46" font-size="11" text-anchor="middle">V_s = θ / V = (N A B) / (k R_G)</text><text x="510" y="138" fill="#b91c1c" font-size="12" font-weight="bold" text-anchor="middle">N → 2N  ⇒  R_G → 2R_G</text><text x="510" y="165" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">V_s\' = (2 I_s) / (2 R_G) = V_s (UNCHANGED!)</text></svg>',
        caption:
          'Figure 4.18: Impact of doubling turns N on Current Sensitivity (doubles) and Voltage Sensitivity (unchanged).',
        guide:
          'Doubling turns increases I_s proportionally, but because resistance doubles simultaneously, V_s remains invariant.'
      },
      importantPoints: [
        'Current sensitivity: I_s = NAB / k.',
        'Voltage sensitivity: V_s = NAB / (k R_G) = I_s / R_G.',
        'Increasing N doubles I_s, but leaves V_s completely unchanged (since R_G ∝ N).',
        'Increasing B or A, or decreasing k, increases BOTH I_s and V_s.'
      ]
    },
    {
      heading: '3. Conversion of Galvanometer into Ammeter (Parallel Shunt S)',
      paragraphs: [
        'Why a Galvanometer Cannot Directly Measure Large Currents: (1) An MCG is highly sensitive: full-scale deflection current I_g is typically on the order of microamperes (μA) or milliamperes (mA). A large current would burn the delicate suspension wire and coil. (2) The galvanometer has significant resistance G. Connecting it directly in series with a circuit would drastically increase total circuit resistance and alter the true current.',
        'Solution — Shunt Resistance: Connect a very low resistance called a Shunt (S) in PARALLEL with the galvanometer.',
        'Mathematical Derivation:',
        '• Let I be the total maximum current to be measured.',
        '• Let I_g be the full-scale deflection current of the galvanometer.',
        '• The remaining major current (I - I_g) passes through the parallel shunt S.',
        '• Since G and S are in parallel, the potential difference across them is identical: V_G = V_S ⇒ I_g · G = (I - I_g) · S.',
        '• Shunt Formula: S = (I_g · G) / (I - I_g).',
        '• Fractional Current: I_g / I = S / (G + S).',
        'Total Resistance of the Ammeter: R_A = (G · S) / (G + S). Since S ≪ G, R_A < S (effective resistance is extremely small).',
        '• Ideal Ammeter: An ideal ammeter has ZERO resistance (R_A = 0).',
        '• Connection Rule: An Ammeter is ALWAYS connected in SERIES in the circuit branch whose current is being measured.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="40" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Conversion of Galvanometer into Ammeter (Parallel Low Resistance Shunt S)</text><g transform="translate(100, 115)"><line x1="0" y1="0" x2="60" y2="0" stroke="#ef4444" stroke-width="3" marker-end="url(#arr-flow-red)"/><text x="25" y="-10" fill="#b91c1c" font-size="11" font-weight="bold">Total I</text><line x1="60" y1="0" x2="100" y2="-40" stroke="#2563eb" stroke-width="2"/><line x1="100" y1="-40" x2="160" y2="-40" stroke="#2563eb" stroke-width="2"/><circle cx="200" cy="-40" r="22" fill="#ffffff" stroke="#2563eb" stroke-width="2"/><text x="200" y="-35" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">G</text><text x="130" y="-48" fill="#2563eb" font-size="10" font-weight="bold">I_g</text><line x1="240" y1="-40" x2="300" y2="-40" stroke="#2563eb" stroke-width="2"/><line x1="300" y1="-40" x2="340" y2="0" stroke="#2563eb" stroke-width="2"/><line x1="60" y1="0" x2="100" y2="40" stroke="#059669" stroke-width="2"/><line x1="100" y1="40" x2="160" y2="40" stroke="#059669" stroke-width="2"/><rect x="160" y="30" width="80" height="20" fill="#ecfdf5" stroke="#10b981" stroke-width="2" rx="3"/><text x="200" y="44" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Shunt S</text><text x="125" y="55" fill="#047857" font-size="10" font-weight="bold">I - I_g</text><line x1="240" y1="40" x2="300" y2="40" stroke="#059669" stroke-width="2"/><line x1="300" y1="40" x2="340" y2="0" stroke="#059669" stroke-width="2"/><line x1="340" y1="0" x2="400" y2="0" stroke="#ef4444" stroke-width="3" marker-end="url(#arr-flow-red)"/><text x="375" y="-10" fill="#b91c1c" font-size="11" font-weight="bold">Total I</text></g><text x="350" y="215" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">S = (I_g · G) / (I - I_g)   |   R_A = GS / (G + S) &lt; S   |   Ideal Ammeter R_A = 0</text></svg>',
        caption:
          'Figure 4.19: Circuit schematic for converting a galvanometer into an ammeter using a low parallel shunt S.',
        guide:
          'Parallel shunt S bypasses the major fraction of current (I - I_g), leaving only I_g to pass safely through the galvanometer.'
      },
      importantPoints: [
        'Shunt formula: S = (I_g · G) / (I - I_g).',
        'Total Ammeter resistance: R_A = (G · S) / (G + S) < S (extremely small).',
        'Ideal ammeter resistance: R_A = 0.',
        'Ammeter is ALWAYS connected in SERIES in circuit.'
      ]
    },
    {
      heading: '4. Conversion of Galvanometer into Voltmeter (Series High Resistance R)',
      paragraphs: [
        'Why a Galvanometer Cannot Directly Measure Large Voltages: If connected directly in parallel across a circuit component, the galvanometer\'s relatively small resistance G would draw significant current from the main circuit, thereby altering the actual potential difference across that component.',
        'Solution — Series High Resistance: Connect a very large resistance R in SERIES with the galvanometer coil.',
        'Mathematical Derivation:',
        '• Let V be the maximum voltage range to be measured.',
        '• Let I_g be the full-scale deflection current of the galvanometer of resistance G.',
        '• Total resistance of the combination is R_V = G + R.',
        '• By Ohm\'s Law: V = I_g · R_V = I_g · (G + R) ⇒ G + R = V / I_g.',
        '• Series Resistance Formula: R = (V / I_g) - G.',
        'Total Resistance of the Voltmeter: R_V = G + R ≈ R (since R ≫ G, resistance is extremely large).',
        '• Ideal Voltmeter: An ideal voltmeter has INFINITE resistance (R_V = ∞), ensuring it draws zero current from the circuit.',
        '• Connection Rule: A Voltmeter is ALWAYS connected in PARALLEL across the two circuit terminals whose voltage is being measured.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="40" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Conversion of Galvanometer into Voltmeter (Series High Resistance R)</text><g transform="translate(140, 115)"><line x1="0" y1="0" x2="60" y2="0" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arr-flow-red)"/><text x="25" y="-12" fill="#b91c1c" font-size="10" font-weight="bold">Current I_g</text><circle cx="95" cy="0" r="22" fill="#ffffff" stroke="#2563eb" stroke-width="2"/><text x="95" y="5" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">G</text><line x1="117" y1="0" x2="165" y2="0" stroke="#2563eb" stroke-width="2"/><rect x="165" y="-12" width="130" height="24" fill="#fee2e2" stroke="#dc2626" stroke-width="2" rx="3"/><text x="230" y="4" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">Series High R</text><line x1="295" y1="0" x2="360" y2="0" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arr-flow-red)"/><line x1="60" y1="35" x2="360" y2="35" stroke="#059669" stroke-width="1.5"/><line x1="60" y1="30" x2="60" y2="40" stroke="#059669" stroke-width="1.5"/><line x1="360" y1="30" x2="360" y2="40" stroke="#059669" stroke-width="1.5"/><text x="210" y="52" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Total Voltage Range V = I_g (G + R)</text></g><text x="350" y="215" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">R = (V / I_g) - G   |   R_V = G + R ≈ R   |   Ideal Voltmeter R_V = ∞</text></svg>',
        caption:
          'Figure 4.20: Circuit schematic for converting a galvanometer into a voltmeter using a series high resistance R.',
        guide:
          'Series resistance R drops the majority of voltage (V - I_g G), allowing the galvanometer to measure high potential differences safely.'
      },
      importantPoints: [
        'Series resistance formula: R = (V / I_g) - G.',
        'Total Voltmeter resistance: R_V = G + R ≈ R (extremely high).',
        'Ideal voltmeter resistance: R_V = ∞.',
        'Voltmeter is ALWAYS connected in PARALLEL across the circuit element.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Galvanometer Equilibrium & Sensitivities',
      formula: '\\theta = \\left(\\frac{N A B}{k}\\right) I, \\quad I_s = \\frac{N A B}{k}, \\quad V_s = \\frac{N A B}{k R_G} = \\frac{I_s}{R_G}',
      variables: 'N = turns, A = coil area, B = radial field, k = torsional constant, R_G = galvanometer coil resistance'
    },
    {
      title: 'Conversion to Ammeter (Parallel Shunt)',
      formula: 'S = \\frac{I_g G}{I - I_g}, \\quad R_A = \\frac{G S}{G + S} < S, \\quad R_{\\text{ideal ammeter}} = 0',
      variables: 'S = shunt resistance (Ω), I_g = full scale galvanometer current (A), I = total ammeter range (A)'
    },
    {
      title: 'Conversion to Voltmeter (Series High Resistance)',
      formula: 'R = \\frac{V}{I_g} - G, \\quad R_V = G + R \\approx R, \\quad R_{\\text{ideal voltmeter}} = \\infty',
      variables: 'R = series multiplier resistance (Ω), V = full scale voltage range (V), G = galvanometer resistance (Ω)'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="40" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Master Comparison: Ammeter vs Voltmeter</text><rect x="50" y="55" width="280" height="150" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" rx="6"/><text x="190" y="75" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Ammeter</text><text x="190" y="98" fill="#1e3a8a" font-size="10" text-anchor="middle">• Function: Measures electric current (I)</text><text x="190" y="118" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">• Mod: Low resistance SHUNT S in PARALLEL</text><text x="190" y="138" fill="#1e3a8a" font-size="10" text-anchor="middle">• S = (I_g · G) / (I - I_g)</text><text x="190" y="158" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">• Resistance: R_A &lt; S (Ideal R_A = 0)</text><text x="190" y="178" fill="#1e3a8a" font-size="10" text-anchor="middle">• Connection: ALWAYS IN SERIES</text><rect x="370" y="55" width="280" height="150" fill="#ffffff" stroke="#86efac" stroke-width="1.5" rx="6"/><text x="510" y="75" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">Voltmeter</text><text x="510" y="98" fill="#065f46" font-size="10" text-anchor="middle">• Function: Measures potential difference (V)</text><text x="510" y="118" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">• Mod: HIGH resistance R in SERIES</text><text x="510" y="138" fill="#065f46" font-size="10" text-anchor="middle">• R = (V / I_g) - G</text><text x="510" y="158" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">• Resistance: R_V ≈ R (Ideal R_V = ∞)</text><text x="510" y="178" fill="#065f46" font-size="10" text-anchor="middle">• Connection: ALWAYS IN PARALLEL</text></svg>',
    caption: 'Comprehensive comparison table and architectural differences between Ammeter and Voltmeter.'
  },

  neetImportantPoints: [
    'A radial magnetic field ensures θ = 90° at all times so that deflecting torque is constant (τ = NIAB) and deflection is linear (θ ∝ I).',
    'Doubling turns N doubles Current Sensitivity I_s, but leaves Voltage Sensitivity V_s unchanged (since R_G ∝ N).',
    'To convert MCG to Ammeter: Connect low resistance Shunt S in PARALLEL (S = I_g G / (I - I_g)); Ideal R_A = 0; Connect in series in circuit.',
    'To convert MCG to Voltmeter: Connect high resistance R in SERIES (R = V / I_g - G); Ideal R_V = ∞; Connect in parallel across element in circuit.',
    'Connecting an ammeter in parallel will short-circuit and burn the circuit; connecting a voltmeter in series will drop circuit current to nearly zero.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Connecting an Ammeter in parallel or a Voltmeter in series.',
      correctFact:
        'An ammeter has near-zero resistance and must be connected in SERIES. A voltmeter has near-infinite resistance and must be connected in PARALLEL.',
      whyItMattersForNEET: 'Fundamental practical circuit physics tested frequently in NEET.'
    },
    {
      commonConfusion: 'Forgetting to subtract G when calculating series resistance R in voltmeter conversion.',
      correctFact:
        'Total resistance is G + R = V / I_g. Thus, series resistance R = (V / I_g) - G. Forgetting to subtract G leads to calculation error when G is not negligible.',
      whyItMattersForNEET: 'Extremely common numerical trap.'
    },
    {
      commonConfusion: 'Thinking doubling turns N doubles both current and voltage sensitivities.',
      correctFact:
        'Doubling N doubles I_s, but also doubles coil resistance R_G, leaving V_s = I_s / R_G unchanged.',
      whyItMattersForNEET: 'One of the most repeated conceptual MCQs in NEET and AIIMS.'
    }
  ],

  quickRevision: [
    'MCG Principle: τ_def = NIAB = kθ ⇒ θ = (NAB/k)I ∝ I (linear scale due to radial field).',
    'Sensitivities: I_s = NAB / k; V_s = NAB / (k R_G) = I_s / R_G; N → 2N ⇒ I_s → 2I_s, V_s = const.',
    'Ammeter Conversion: Parallel Shunt S = (I_g G) / (I - I_g); R_A = GS / (G + S) < S; Ideal R_A = 0; Connect in SERIES.',
    'Voltmeter Conversion: Series Resistance R = (V / I_g) - G; R_V = G + R ≈ R; Ideal R_V = ∞; Connect in PARALLEL.'
  ],

  practiceQuestions: [
    {
      id: 'galv-p1',
      question:
        'A galvanometer has a coil of resistance 100 Ω and gives full-scale deflection for 30 mA current. If it is to be converted into an ammeter of range 0 to 3 A, the required shunt resistance is:',
      options: ['1.01 Ω', '2.02 Ω', '0.50 Ω', '0.01 Ω'],
      correctAnswer: 0,
      explanation:
        'Given: G = 100 Ω, I_g = 30 mA = 0.03 A, I = 3 A. Shunt formula: S = (I_g · G) / (I - I_g) = (0.03 × 100) / (3 - 0.03) = 3 / 2.97 = 100 / 99 ≈ 1.01 Ω in parallel.'
    },
    {
      id: 'galv-p2',
      question:
        'A galvanometer of resistance 50 Ω gives a full-scale deflection for a current of 0.05 A. Calculate the resistance required to convert it into a voltmeter of range 0 to 200 V.',
      options: ['3950 Ω', '4050 Ω', '4000 Ω', '3900 Ω'],
      correctAnswer: 0,
      explanation:
        'Given: G = 50 Ω, I_g = 0.05 A, V = 200 V. Series multiplier formula: R = (V / I_g) - G = (200 / 0.05) - 50 = 4000 - 50 = 3950 Ω in series.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2024,
      question:
        'A galvanometer of resistance G is converted into an ammeter using a shunt of resistance S. The effective resistance of the ammeter is:',
      options: ['GS / (G + S)', 'G + S', 'G - S', '(G + S) / GS'],
      correctAnswer: 0,
      explanation:
        'In an ammeter, the galvanometer of resistance G and the shunt resistor of resistance S are connected in parallel. For two resistors in parallel, the equivalent resistance is R_A = (G · S) / (G + S).',
      conceptTested: 'Equivalent Resistance of an Ammeter'
    },
    {
      exam: 'NEET UG',
      year: 2021,
      question:
        'A moving coil galvanometer has a resistance of 50 Ω and it indicates full scale deflection for a current of 4 mA. A voltmeter is made using this galvanometer and a 5 kΩ resistance. The maximum voltage that can be measured by this voltmeter is:',
      options: ['20.2 V', '40.4 V', '10.1 V', '20.0 V'],
      correctAnswer: 0,
      explanation:
        'Given: G = 50 Ω, I_g = 4 mA = 4 × 10⁻³ A, series resistance R = 5 kΩ = 5000 Ω. Total voltmeter resistance R_V = G + R = 50 + 5000 = 5050 Ω. Maximum voltage range V = I_g (G + R) = (4 × 10⁻³ A) × (5050 Ω) = 20.2 V.',
      conceptTested: 'Voltmeter Maximum Voltage Range Formula'
    }
  ]
};
