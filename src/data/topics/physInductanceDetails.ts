import { DetailedTopicContent } from '../../types/neet';

export const physInductanceDetails: DetailedTopicContent = {
  topicId: 'phys-inductance',
  topicName: 'Self & Mutual Inductance, Solenoids, Magnetic Energy, AC Generators & Graphs',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Electromagnetic Induction & Alternating Current',
  chapter: 'Electromagnetic Induction',

  whatIsThisTopic:
    'Comprehensive first-principles masterclass on Inductance (Self and Mutual Induction), Solenoid Inductance Derivations, Magnetic Field Energy and Energy Density, Back EMF, AC Generators (Slip Rings vs Split Rings, Sinusoidal EMF Derivation & Graphs), Flux-Time Derivative Analysis, 10+ Original Worked Numericals, Verified Real PYQs, 30+ High-Yield NEET Traps, and 20-Question Final Self-Test.',

  basicIdea: [
    '• Self-Induction (Electrical Inertia): The phenomenon in which an opposing electromotive force (Back EMF) is induced in a coil itself whenever the electric current flowing through it changes with time: ε = -L (dI/dt). Inductance L is the electrical analogue of mass in mechanics (it resists changes in current).',
    '• Self-Inductance Definition & Units: Total magnetic flux linkage NΦ is proportional to current I: NΦ = L I ⇒ L = (NΦ) / I. SI Unit: Henry (H) = Volt·second/Ampere (V·s/A) = Weber/Ampere (Wb/A) = Ohm·second (Ω·s). Dimensions: [M¹ L² T⁻² A⁻²].',
    '• Self-Inductance of a Long Solenoid: For a solenoid of length l, cross-sectional area A, and total turns N (turns per unit length n = N/l): L = (μ₀ N² A) / l = μ₀ n² A l. If a magnetic core of relative permeability μ_r is inserted: L = μ₀ μ_r n² A l = μ n² A l.',
    '• Energy Stored in an Inductor: The work done against the back emf to establish a steady current I from zero is stored in the magnetic field inside the inductor: U = (1/2) L I² (Analogous to kinetic energy (1/2)mv² and electrostatic capacitor energy (1/2)CV²).',
    '• Magnetic Energy Density: The magnetic potential energy stored per unit volume of space: u_B = B² / (2 μ₀) (Analogous to electric energy density u_E = (1/2)ε₀ E²). In a magnetic medium: u_B = B² / (2 μ).',
    '• Mutual Induction: The phenomenon in which an emf is induced in a secondary coil due to a changing current in a neighboring primary coil: ε₂ = -M (dI₁/dt). Mutual Inductance M = (N₂ Φ₂₁) / I₁. For two coaxial solenoids: M = (μ₀ N₁ N₂ A) / l. Relation with self-inductances: M = k √(L₁ L₂), where k is the dimensionless coefficient of magnetic coupling (0 ≤ k ≤ 1).',
    '• AC Generator (Alternator): A device that converts mechanical energy into alternating electrical energy by rotating a coil of N turns and area A with constant angular velocity ω in a uniform magnetic field B: Flux at time t: Φ = B A cos(ωt); Induced EMF: ε = -N (dΦ/dt) = N B A ω sin(ωt) = ε₀ sin(ωt), where peak emf is ε₀ = N B A ω = 2π f N B A.',
    '• Slip Rings vs Split-Ring Commutators: AC generators use continuous circular SLIP RINGS connected to stationary carbon brushes to deliver a pure alternating sinusoidal current. DC generators replace slip rings with a SPLIT-RING COMMUTATOR that reverses external connections every half-cycle, delivering unidirectional pulsating DC.'
  ],

  importantTerms: [
    {
      term: 'Self-Inductance (L)',
      symbol: 'L = (NΦ) / I',
      definition:
        'The ratio of total magnetic flux linkage linked with a circuit to the current flowing through it, representing its inherent resistance to changes in current.',
      neetNote: 'SI Unit: Henry (H). 1 H = 1 Wb/A = 1 V·s/A. Proportional to N² (number of turns squared).'
    },
    {
      term: 'Back EMF (Self-Induced EMF)',
      symbol: 'ε = -L (dI/dt)',
      definition:
        'The opposing electromotive force induced in an inductive circuit whenever current increases or decreases with time.',
      neetNote: 'When current grows (dI/dt > 0), back emf opposes growth. When current decays (dI/dt < 0), back emf opposes decay.'
    },
    {
      term: 'Magnetic Energy Density (u_B)',
      symbol: 'u_B = B² / (2 μ₀)',
      definition:
        'The magnetic potential energy stored per unit volume in a region of magnetic field B.',
      neetNote: 'SI Unit: Joules per cubic meter (J/m³). Total energy U = u_B × Volume.'
    },
    {
      term: 'Mutual Inductance (M)',
      symbol: 'M = (N₂ Φ₂₁) / I₁',
      definition:
        'The magnetic flux linkage produced in a secondary coil per unit current flowing through the primary coil.',
      neetNote: 'M = k √(L₁ L₂). Coefficient of coupling k = 1 for tight coupling (zero magnetic flux leakage).'
    },
    {
      term: 'Peak EMF of AC Generator (ε₀)',
      symbol: 'ε₀ = N B A ω = 2π f N B A',
      definition:
        'The maximum amplitude of the sinusoidal induced voltage generated when the plane of the rotating coil is parallel to the magnetic field (θ = 90°).',
      neetNote: 'Instantaneous EMF ε = ε₀ sin(ωt).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Self-Induction, Inductance of a Solenoid & Back EMF',
      paragraphs: [
        'What is Self-Induction?',
        'When electric current flows through a coil, it creates a magnetic field passing through the coil itself. If the current changes with time, the magnetic flux linked with the coil changes, triggering Faraday’s Law to induce an opposing EMF in the SAME coil. This self-generated opposing voltage is called Self-Induced EMF or Back EMF.',
        'Mathematical Definition:',
        'The total magnetic flux linkage (NΦ) is directly proportional to the current I:',
        'N \\Phi \\propto I \\quad \\Rightarrow \\quad N \\Phi = L I \\quad \\Rightarrow \\quad L = \\frac{N \\Phi}{I}.',
        'where L is the coefficient of self-induction (Self-Inductance).',
        'By Faraday’s Second Law:',
        '\\varepsilon = - \\frac{d(N\\Phi)}{dt} = - L \\frac{dI}{dt}.',
        'Definition of 1 Henry (1 H):',
        'A coil has a self-inductance of 1 Henry if an opposing back EMF of 1 Volt is induced in it when the current changes at the rate of 1 Ampere per second (dI/dt = 1 A/s).',
        'Derivation of Self-Inductance of a Long Solenoid:',
        '1. Consider a long solenoid of length l, cross-sectional area A, having total turns N (turns per unit length n = N/l).',
        '2. The uniform internal magnetic field produced by current I is: B = μ₀ n I = μ₀ (N / l) I.',
        '3. Magnetic flux through each single turn: Φ = B A = [μ₀ (N / l) I] A.',
        '4. Total magnetic flux linkage for all N turns: N Φ = N [μ₀ (N / l) I A] = \\frac{\\mu_0 N^2 A}{l} I.',
        '5. Since N Φ = L I, comparing gives the standard formula:',
        'L = \\frac{\\mu_0 N^2 A}{l} = \\mu_0 n^2 A l = \\mu_0 n^2 V \\quad (\\text{where } V = A l \\text{ is core volume}).',
        'If the core is filled with a ferromagnetic medium of relative permeability μ_r: L = \\frac{\\mu_0 \\mu_r N^2 A}{l}.',
        'CRITICAL NEET SCALING RULE: Self-inductance L is directly proportional to N² (number of turns squared). If the number of turns is doubled (N → 2N) keeping length and area constant, inductance becomes 4 TIMES (L → 4L)!'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="230" fill="#f8fafc" rx="12"/><text x="360" y="22" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Self-Inductance of a Solenoid &amp; Back EMF Dynamics</text><g transform="translate(60, 45)"><rect x="0" y="0" width="280" height="165" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="140" y="20" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Solenoid Flux Linkage: L = μ₀ N² A / l</text><rect x="30" y="60" width="220" height="45" fill="#eff6ff" stroke="#3b82f6" stroke-width="1" rx="4"/><path d="M 40 60 Q 50 40 60 60 Q 70 80 80 60 Q 90 40 100 60 Q 110 80 120 60 Q 130 40 140 60 Q 150 80 160 60 Q 170 40 180 60 Q 190 80 200 60 Q 210 40 220 60 Q 230 80 240 60" fill="none" stroke="#2563eb" stroke-width="2.5"/><line x1="40" y1="82" x2="240" y2="82" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red-f2)"/><text x="140" y="98" fill="#dc2626" font-size="10.5" font-weight="bold" text-anchor="middle">B = μ₀ (N/l) I</text><text x="140" y="130" fill="#1e3a8a" font-size="10.5" font-weight="bold" text-anchor="middle">N turns, Area A, Length l</text><text x="140" y="150" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">L ∝ N² (Turns Squared!)</text></g><g transform="translate(380, 45)"><rect x="0" y="0" width="280" height="165" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6"/><text x="140" y="20" fill="#1e40af" font-size="11.5" font-weight="bold" text-anchor="middle">Back EMF Polarity Opposition</text><rect x="15" y="38" width="250" height="50" fill="#ffffff" stroke="#93c5fd" stroke-width="1" rx="4"/><text x="25" y="56" fill="#1e3a8a" font-size="10.5" font-weight="bold">Case 1: Current Increasing (dI/dt &gt; 0)</text><text x="25" y="74" fill="#b91c1c" font-size="10">ε_back OPPOSES I  (Acts like opposing battery)</text><rect x="15" y="98" width="250" height="50" fill="#ffffff" stroke="#93c5fd" stroke-width="1" rx="4"/><text x="25" y="116" fill="#1e3a8a" font-size="10.5" font-weight="bold">Case 2: Current Decreasing (dI/dt &lt; 0)</text><text x="25" y="134" fill="#047857" font-size="10">ε_back AIDS I  (Tries to maintain current)</text></g><defs><marker id="arr-red-f2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/></marker></defs></svg>',
        caption: 'Figure 6.6: Solenoid self-inductance L = μ₀N²A/l and the polarity of back EMF during current growth vs current decay.',
        guide: 'Self-inductance is electrical inertia. It opposes both the rise and fall of current: ε = -L(dI/dt).'
      },
      importantPoints: [
        'Self-Inductance: L = (NΦ)/I; Back EMF: ε = -L (dI/dt).',
        'Solenoid Inductance: L = μ₀ N² A / l = μ₀ n² A l = μ₀ n² V.',
        'With magnetic core of relative permeability μ_r: L_medium = μ_r L_air.',
        'Scaling law: L ∝ N² (Doubling turns quadruples inductance).'
      ]
    },
    {
      heading: '2. Magnetic Energy Stored in an Inductor & Field Energy Density',
      paragraphs: [
        'How is Energy Stored in an Inductor?',
        'When current in an inductor increases from 0 to I, work must be done by the external source against the opposing back EMF (ε = -L dI/dt).',
        'Derivation of Energy Formula:',
        '1. Rate of doing work (Power) against back emf: P = \\frac{dW}{dt} = |\\varepsilon| I = \\left(L \\frac{dI}{dt}\\right) I.',
        '2. Infinitesimal work done in time dt: dW = P dt = L I dI.',
        '3. Total work done to establish steady current I from 0:',
        'W = \\int_0^I L I \\, dI = L \\left[ \\frac{I^2}{2} \\right]_0^I = \\frac{1}{2} L I^2.',
        '4. This work is completely stored as Magnetic Potential Energy (U) in the magnetic field created within the core of the inductor: U = \\frac{1}{2} L I^2.',
        'Magnetic Energy Density (u_B):',
        'Let us evaluate the energy stored per unit volume in a long solenoid:',
        '• Solenoid volume V = A l.',
        '• Inductance L = μ₀ n² A l.',
        '• Internal magnetic field B = μ₀ n I ⇒ I = B / (μ₀ n).',
        'Substitute L and I into U = (1/2) L I²:',
        'U = \\frac{1}{2} (\\mu_0 n^2 A l) \\left( \\frac{B}{\\mu_0 n} \\right)^2 = \\frac{1}{2} (\\mu_0 n^2 A l) \\frac{B^2}{\\mu_0^2 n^2} = \\frac{B^2}{2 \\mu_0} (A l).',
        'Therefore, Magnetic Energy Density (u_B = U / Volume):',
        'u_B = \\frac{B^2}{2 \\mu_0} \\quad (\\text{In vacuum / air}), \\qquad u_B = \\frac{B^2}{2 \\mu} \\quad (\\text{In medium}).',
        'BEAUTIFUL SYMMETRY WITH ELECTROSTATICS:',
        '• Electrostatic Energy Density: u_E = \\frac{1}{2} \\varepsilon_0 E².',
        '• Magnetic Energy Density: u_B = \\frac{1}{2} \\frac{B^2}{\\mu_0}.',
        '• Total Electromagnetic Energy Density: u_{\\text{total}} = u_E + u_B = \\frac{1}{2} \\varepsilon_0 E^2 + \\frac{B^2}{2 \\mu_0}.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="220" fill="#f8fafc" rx="12"/><text x="360" y="22" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Magnetic Energy in Inductor &amp; Energy Density Symmetry</text><g transform="translate(60, 45)"><rect x="0" y="0" width="280" height="155" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6"/><text x="140" y="20" fill="#1e40af" font-size="11.5" font-weight="bold" text-anchor="middle">Energy Stored in Inductor: U = ½ L I²</text><path d="M 50 80 Q 70 50 90 80 Q 110 110 130 80 Q 150 50 170 80 Q 190 110 210 80 Q 230 50 240 80" fill="none" stroke="#2563eb" stroke-width="3"/><text x="140" y="115" fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">Current I creates B field</text><text x="140" y="138" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">U = ½ L I²  (Stored in B field)</text></g><g transform="translate(380, 45)"><rect x="0" y="0" width="280" height="155" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="140" y="20" fill="#0f172a" font-size="11.5" font-weight="bold" text-anchor="middle">Energy Density Comparison</text><rect x="15" y="35" width="250" height="45" fill="#f0fdf4" stroke="#16a34a" stroke-width="1" rx="4"/><text x="25" y="52" fill="#15803d" font-size="10.5" font-weight="bold">Electric Field: u_E = ½ ε₀ E²</text><text x="25" y="68" fill="#166534" font-size="9.5">Stored between capacitor plates [J/m³]</text><rect x="15" y="90" width="250" height="45" fill="#fef2f2" stroke="#dc2626" stroke-width="1" rx="4"/><text x="25" y="108" fill="#b91c1c" font-size="10.5" font-weight="bold">Magnetic Field: u_B = B² / (2μ₀)</text><text x="25" y="124" fill="#991b1b" font-size="9.5">Stored inside inductor core volume [J/m³]</text></g></svg>',
        caption: 'Figure 6.7: Magnetic energy storage U = (1/2)LI² and direct mathematical symmetry between electric and magnetic energy densities.',
        guide: 'Magnetic energy is stored in the volume of the magnetic field: U = u_B × Volume = [B²/(2μ₀)] × (A·l).'
      },
      importantPoints: [
        'Energy stored in inductor: U = (1/2) L I² (Analogous to capacitor energy U = (1/2)CV²).',
        'Magnetic energy density: u_B = B² / (2 μ₀) [SI Unit: J/m³].',
        'In medium of permeability μ: u_B = B² / (2 μ).',
        'Total energy = u_B × Core Volume (V = A·l).'
      ]
    },
    {
      heading: '3. Mutual Induction, Coupling Coefficient (k) & Coaxial Solenoids',
      paragraphs: [
        'What is Mutual Induction?',
        'Mutual induction is the generation of an induced EMF in one circuit (the secondary coil) caused by a changing electric current in a nearby circuit (the primary coil).',
        'Mathematical Definition:',
        'The magnetic flux linked with the secondary coil (N₂ Φ₂₁) is proportional to the primary current I₁:',
        'N_2 \\Phi_{21} = M I_1 \\quad \\Rightarrow \\quad M = \\frac{N_2 \\Phi_{21}}{I_1}.',
        'where M is the Mutual Inductance between the two coils (also measured in Henry, H).',
        'Induced EMF in Secondary Coil: \\varepsilon_2 = - \\frac{d(N_2 \\Phi_{21})}{dt} = - M \\frac{dI_1}{dt}.',
        'Reciprocity Theorem: The mutual inductance of coil 2 with respect to coil 1 is IDENTICAL to the mutual inductance of coil 1 with respect to coil 2: M₁₂ = M₂₁ = M.',
        'Mutual Inductance of Two Long Coaxial Solenoids:',
        'Let primary solenoid S₁ have turns N₁, length l, and radius r₁. Let secondary solenoid S₂ have turns N₂ wound tightly over S₁:',
        '• Magnetic field of inner solenoid: B₁ = μ₀ (N₁ / l) I₁.',
        '• Flux linked per turn of S₂: Φ₂₁ = B₁ A₁ = [μ₀ (N₁ / l) I₁] (π r₁²).',
        '• Total flux linkage for N₂ turns: N₂ Φ₂₁ = N₂ [μ₀ (N₁ / l) I₁ (π r₁²)] = \\frac{\\mu_0 N_1 N_2 A_1}{l} I₁.',
        '• Mutual Inductance: M = \\frac{\\mu_0 N_1 N_2 A}{l} = \\mu_0 n_1 n_2 A l.',
        'Coefficient of Coupling (k):',
        'The fraction of magnetic flux produced by the primary coil that links with the secondary coil is represented by the dimensionless Coupling Coefficient k (0 ≤ k ≤ 1):',
        'M = k \\sqrt{L_1 L_2}.',
        '• Tight Coupling (k = 1): Zero flux leakage; coils wound directly on top of each other on a common iron core (ideal transformer).',
        '• Loose / Weak Coupling (k < 1): Partial flux linkage; coils separated in space.',
        '• Zero Coupling (k = 0): Coils oriented mutually perpendicular to each other (no flux linked).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="220" fill="#f8fafc" rx="12"/><text x="360" y="22" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Mutual Induction &amp; Coefficient of Coupling (k)</text><g transform="translate(60, 45)"><rect x="0" y="0" width="280" height="155" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="140" y="20" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Primary (I₁) &amp; Secondary (ε₂) Coupling</text><circle cx="80" cy="80" r="32" fill="none" stroke="#2563eb" stroke-width="3"/><text x="80" y="85" fill="#2563eb" font-size="11" font-weight="bold" text-anchor="middle">Primary (I₁)</text><circle cx="200" cy="80" r="32" fill="none" stroke="#dc2626" stroke-width="3"/><text x="200" y="85" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">Secondary (ε₂)</text><path d="M 115 65 C 135 55 145 55 165 65" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="3 3"/><path d="M 115 95 C 135 105 145 105 165 95" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="3 3"/><text x="140" y="140" fill="#1e40af" font-size="10.5" font-weight="bold" text-anchor="middle">ε₂ = -M (dI₁/dt)</text></g><g transform="translate(380, 45)"><rect x="0" y="0" width="280" height="155" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6"/><text x="140" y="20" fill="#1e40af" font-size="11.5" font-weight="bold" text-anchor="middle">Coupling Coefficient: M = k √(L₁ L₂)</text><text x="20" y="50" fill="#047857" font-size="10.5" font-weight="bold">• k = 1 (Tight Coupling):</text><text x="30" y="68" fill="#334155" font-size="10">Max flux linkage; coils co-axial / common core</text><text x="20" y="94" fill="#b91c1c" font-size="10.5" font-weight="bold">• 0 &lt; k &lt; 1 (Partial Coupling):</text><text x="30" y="110" fill="#334155" font-size="10">Flux leakage occurs; coils separated</text><text x="20" y="132" fill="#64748b" font-size="10.5" font-weight="bold">• k = 0 (Zero Coupling):</text><text x="30" y="148" fill="#334155" font-size="10">Coils placed mutually perpendicular (90°)</text></g></svg>',
        caption: 'Figure 6.8: Mutual induction mechanism between primary and secondary coils, and coupling coefficient k variations.',
        guide: 'When coils are perpendicular, k = 0 and M = 0. When perfectly aligned on common core, k = 1 and M = √(L₁L₂).'
      },
      importantPoints: [
        'Mutual Inductance: M = (N₂ Φ₂₁) / I₁; Secondary EMF: ε₂ = -M (dI₁/dt).',
        'Coaxial Solenoids: M = (μ₀ N₁ N₂ A) / l = μ₀ n₁ n₂ A l.',
        'Coupling Relation: M = k √(L₁ L₂), where 0 ≤ k ≤ 1.',
        'Reciprocity Principle: M₁₂ = M₂₁ = M.'
      ]
    },
    {
      heading: '4. The AC Generator: Construction, Working, Sinusoidal EMF Derivation & Commutator',
      paragraphs: [
        'What is an AC Generator (Alternator)?',
        'An AC Generator is a device that converts mechanical rotational energy into alternating electrical energy using electromagnetic induction.',
        'Key Constructional Elements:',
        '1. Armature: A rectangular coil of N turns of insulated copper wire wound over a soft iron core to enhance magnetic field concentration.',
        '2. Strong Field Magnets: Permanent magnets or electromagnets providing a uniform magnetic field B perpendicular to the rotation axis.',
        '3. Slip Rings: Two continuous hollow brass/copper rings (R₁ and R₂) attached to the ends of the armature coil that rotate with the axle.',
        '4. Carbon Brushes: Two stationary flexible carbon blocks (B₁ and B₂) lightly pressing against the slip rings to conduct current to the external load circuit.',
        'Step-by-Step Derivation of Sinusoidal Induced EMF:',
        '1. Let the coil rotate with constant angular velocity ω (where ω = 2π f).',
        '2. At time t = 0, let the plane of the coil be perpendicular to field B (Area vector A is parallel to B ⇒ θ = 0°).',
        '3. At time t, the normal vector rotates through angle θ = ωt relative to B.',
        '4. Magnetic flux linked with the N-turn coil at time t is:',
        '\\Phi(t) = B A \\cos(\\omega t) \\quad \\Rightarrow \\quad N \\Phi(t) = N B A \\cos(\\omega t).',
        '5. By Faraday’s Second Law, the instantaneous induced EMF is:',
        '\\varepsilon = - \\frac{d(N\\Phi)}{dt} = - \\frac{d}{dt} [N B A \\cos(\\omega t)] = - N B A [-\\omega \\sin(\\omega t)] = N B A \\omega \\sin(\\omega t).',
        '6. Writing the Peak EMF as \\varepsilon_0 = N B A \\omega = 2\\pi f N B A:',
        '\\varepsilon(t) = \\varepsilon_0 \\sin(\\omega t).',
        '7. Instantaneous Current through external load R: I(t) = \\frac{\\varepsilon(t)}{R} = \\frac{\\varepsilon_0}{R} \\sin(\\omega t) = I_0 \\sin(\\omega t).',
        'AC Generator (Slip Rings) vs DC Generator (Split-Ring Commutator):',
        '• AC Generator (Slip Rings): Uses two continuous full rings. Each ring stays connected to the same coil terminal permanently. As the coil rotates, the direction of current in the external circuit alternates periodically every half-cycle (producing Sinusoidal AC).',
        '• DC Generator (Split-Ring Commutator): Replaces slip rings with a single ring split into two halves (commutator). The split ring automatically reverses the connection between the coil terminals and the brushes every half-cycle (when emf passes through zero), ensuring that current in the external load always flows in the SAME direction (producing pulsating Direct Current, DC).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="260" fill="#f8fafc" rx="12"/><text x="360" y="22" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">AC Generator Mechanics &amp; Sinusoidal EMF Waveform</text><g transform="translate(60, 45)"><rect x="0" y="0" width="280" height="195" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="140" y="20" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Rotating Armature in Magnetic Field</text><rect x="15" y="45" width="40" height="60" fill="#dc2626" rx="3"/><text x="35" y="80" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">N</text><rect x="225" y="45" width="40" height="60" fill="#2563eb" rx="3"/><text x="245" y="80" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">S</text><rect x="75" y="55" width="130" height="40" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" rx="3" transform="rotate(-15 140 75)"/><line x1="140" y1="35" x2="140" y2="150" stroke="#64748b" stroke-width="2" stroke-dasharray="3 2"/><text x="140" y="32" fill="#059669" font-size="10" font-weight="bold" text-anchor="middle">ω (rotation)</text><circle cx="140" cy="130" r="10" fill="none" stroke="#d97706" stroke-width="2.5"/><circle cx="140" cy="148" r="10" fill="none" stroke="#d97706" stroke-width="2.5"/><text x="140" y="180" fill="#1e40af" font-size="10.5" font-weight="bold" text-anchor="middle">Slip Rings + Carbon Brushes</text><text x="140" y="194" fill="#047857" font-size="9.5" text-anchor="middle">Continuous sinusoidal AC output</text></g><g transform="translate(380, 45)"><rect x="0" y="0" width="280" height="195" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6"/><text x="140" y="20" fill="#1e40af" font-size="11.5" font-weight="bold" text-anchor="middle">Sinusoidal Induced EMF: ε = ε₀ sin(ωt)</text><line x1="20" y1="90" x2="260" y2="90" stroke="#475569" stroke-width="1.5"/><line x1="30" y1="30" x2="30" y2="150" stroke="#475569" stroke-width="1.5"/><path d="M 30 90 Q 85 20 140 90 Q 195 160 250 90" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="265" y="94" fill="#475569" font-size="10" font-weight="bold">t</text><text x="25" y="28" fill="#dc2626" font-size="10" font-weight="bold">+ε₀</text><text x="25" y="156" fill="#dc2626" font-size="10" font-weight="bold">-ε₀</text><text x="140" y="104" fill="#64748b" font-size="9.5">T/2</text><text x="250" y="104" fill="#64748b" font-size="9.5">T</text><text x="140" y="180" fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">Peak EMF: ε₀ = N B A ω</text></g></svg>',
        caption: 'Figure 6.9: AC generator construction with slip rings and the sinusoidal induced EMF waveform ε = ε₀ sin(ωt).',
        guide: 'When coil plane is perpendicular to B (θ = 0), flux is maximum but dΦ/dt = 0, so EMF is ZERO. When coil plane is parallel to B (θ = 90°), EMF is MAXIMUM (ε = ε₀).'
      },
      importantPoints: [
        'Instantaneous flux: Φ = B A cos(ωt); Instantaneous EMF: ε = ε₀ sin(ωt).',
        'Peak EMF: ε₀ = N B A ω = 2π f N B A.',
        'Flux and EMF Phase Relationship: EMF lags behind flux by 90° (π/2 rad) (when Φ is maximum, ε = 0; when Φ = 0, ε is maximum!).',
        'Slip rings deliver AC; Split-ring commutator delivers pulsating DC.'
      ]
    },
    {
      heading: '5. Flux-Time Graphs (Φ-t) & Derivative Analysis of Induced EMF',
      paragraphs: [
        'Mastering Graph Questions in NEET EMI:',
        'By Faraday’s Law: \\varepsilon(t) = - \\frac{d\\Phi}{dt} = -(\\text{Slope of } \\Phi\\text{-}t \\text{ Graph}).',
        'Golden Rules for Graph Interpretation:',
        '1. Zero Slope (Horizontal line on Φ-t graph, Φ = constant) ⇒ \\frac{d\\Phi}{dt} = 0 \\Rightarrow \\varepsilon = 0.',
        '2. Positive Constant Slope (Line sloping upward, flux increasing linearly) ⇒ \\frac{d\\Phi}{dt} > 0 \\Rightarrow \\varepsilon = -(\\text{constant positive value}) = \\text{Negative Constant EMF}.',
        '3. Negative Constant Slope (Line sloping downward, flux decreasing linearly) ⇒ \\frac{d\\Phi}{dt} < 0 \\Rightarrow \\varepsilon = -(\\text{constant negative value}) = \\text{Positive Constant EMF}.',
        '4. Steeper Slope ⇒ Faster flux change ⇒ Greater magnitude of induced EMF |ε|.',
        '5. Parabolic Flux Graph (Φ ∝ t²) ⇒ \\varepsilon = -d(k t²)/dt = -2kt (EMF varies linearly with time!).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="220" fill="#f8fafc" rx="12"/><text x="360" y="22" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Flux-Time (Φ-t) Graph vs Resulting Induced EMF (ε-t) Graph</text><g transform="translate(60, 45)"><rect x="0" y="0" width="280" height="155" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="140" y="20" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Magnetic Flux Φ(t) vs Time</text><line x1="30" y1="120" x2="250" y2="120" stroke="#475569" stroke-width="1.5"/><line x1="30" y1="30" x2="30" y2="130" stroke="#475569" stroke-width="1.5"/><path d="M 30 120 L 90 40 L 170 40 L 230 120" fill="none" stroke="#2563eb" stroke-width="2.5"/><text x="60" y="70" fill="#2563eb" font-size="10" font-weight="bold">Slope &gt; 0</text><text x="130" y="32" fill="#64748b" font-size="10" font-weight="bold">Slope = 0</text><text x="195" y="70" fill="#2563eb" font-size="10" font-weight="bold">Slope &lt; 0</text><text x="245" y="135" fill="#475569" font-size="9.5">t</text><text x="18" y="35" fill="#2563eb" font-size="9.5" font-weight="bold">Φ</text></g><g transform="translate(380, 45)"><rect x="0" y="0" width="280" height="155" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6"/><text x="140" y="20" fill="#1e40af" font-size="11.5" font-weight="bold" text-anchor="middle">Induced EMF ε(t) = -dΦ/dt</text><line x1="30" y1="75" x2="250" y2="75" stroke="#475569" stroke-width="1.5"/><line x1="30" y1="20" x2="30" y2="130" stroke="#475569" stroke-width="1.5"/><line x1="30" y1="110" x2="90" y2="110" stroke="#dc2626" stroke-width="2.5"/><line x1="90" y1="75" x2="170" y2="75" stroke="#dc2626" stroke-width="2.5"/><line x1="170" y1="40" x2="230" y2="40" stroke="#dc2626" stroke-width="2.5"/><text x="60" y="125" fill="#dc2626" font-size="9.5" font-weight="bold">ε &lt; 0 (Neg)</text><text x="130" y="65" fill="#047857" font-size="9.5" font-weight="bold">ε = 0</text><text x="195" y="32" fill="#dc2626" font-size="9.5" font-weight="bold">ε &gt; 0 (Pos)</text><text x="245" y="90" fill="#475569" font-size="9.5">t</text><text x="18" y="25" fill="#dc2626" font-size="9.5" font-weight="bold">ε</text></g></svg>',
        caption: 'Figure 6.10: Direct derivative mapping: Induced EMF is the negative slope of the magnetic flux graph (ε = -dΦ/dt).',
        guide: 'When Φ increases, ε is negative. When Φ is constant, ε is zero. When Φ decreases, ε is positive.'
      },
      importantPoints: [
        'Induced EMF is the negative derivative of flux: ε = -dΦ/dt.',
        'Horizontal flux curve ⇒ Zero induced EMF.',
        'Linear flux increase ⇒ Constant negative EMF; Linear flux decrease ⇒ Constant positive EMF.',
        'Peak flux in AC generator corresponds to zero EMF; zero flux corresponds to peak EMF (90° phase shift).'
      ]
    }
  ],

  formulae: [
    {
      title: 'Self-Inductance & Back EMF',
      formula: 'L = \\frac{N\\Phi}{I}, \\quad \\varepsilon = -L \\frac{dI}{dt}, \\quad L_{\\text{solenoid}} = \\frac{\\mu_0 \\mu_r N^2 A}{l} = \\mu_0 \\mu_r n^2 A l',
      variables: 'L = self-inductance (H), N = total turns, I = current (A), dI/dt = rate of change of current (A/s), n = N/l = turns/m, A = area (m²)',
      whenToUse: 'Calculate self-inductance of coil/solenoid or back emf developed due to changing current.'
    },
    {
      title: 'Magnetic Field Energy & Energy Density',
      formula: 'U = \\frac{1}{2} L I^2, \\quad u_B = \\frac{B^2}{2 \\mu_0} \\quad (\\text{or } u_B = \\frac{B^2}{2 \\mu})',
      variables: 'U = magnetic energy (J), L = inductance (H), I = current (A), u_B = energy density (J/m³), B = magnetic field (T)',
      whenToUse: 'Calculate energy stored in an inductor or energy density within a magnetic field.'
    },
    {
      title: 'Mutual Inductance & Coupling Relation',
      formula: 'M = \\frac{N_2 \\Phi_{21}}{I_1}, \\quad \\varepsilon_2 = -M \\frac{dI_1}{dt}, \\quad M_{\\text{coaxial}} = \\frac{\\mu_0 N_1 N_2 A}{l}, \\quad M = k \\sqrt{L_1 L_2}',
      variables: 'M = mutual inductance (H), k = coupling coefficient (0 ≤ k ≤ 1), L₁, L₂ = self-inductances (H)',
      whenToUse: 'Calculate induced emf in secondary coil or mutual inductance between coupled coils.'
    },
    {
      title: 'AC Generator Peak & Instantaneous EMF',
      formula: '\\Phi(t) = B A \\cos(\\omega t), \\quad \\varepsilon(t) = \\varepsilon_0 \\sin(\\omega t), \\quad \\varepsilon_0 = N B A \\omega = 2\\pi f N B A',
      variables: 'ε₀ = peak induced emf (V), N = turns, B = field (T), A = area (m²), ω = angular speed (rad/s), f = frequency (Hz)',
      whenToUse: 'Compute peak/instantaneous voltage and flux generated by an alternator rotating in magnetic field.'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 720 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="270" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Master Conceptual Comparison Architecture: EMI &amp; Inductance</text><rect x="30" y="45" width="200" height="205" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="130" y="68" fill="#1e40af" font-size="11.5" font-weight="bold" text-anchor="middle">1. Self vs Mutual</text><text x="45" y="95" fill="#334155" font-size="10">• Self: Single coil (L)</text><text x="45" y="115" fill="#334155" font-size="10">• ε = -L (dI/dt)</text><text x="45" y="135" fill="#334155" font-size="10">• Mutual: Pair of coils (M)</text><text x="45" y="155" fill="#334155" font-size="10">• ε₂ = -M (dI₁/dt)</text><text x="45" y="175" fill="#b91c1c" font-size="10.5" font-weight="bold">• M = k √(L₁ L₂)</text><text x="45" y="195" fill="#047857" font-size="10">• Both measured in Henry</text><text x="45" y="215" fill="#1e3a8a" font-size="10">• L ∝ N², M ∝ N₁ N₂</text><rect x="260" y="45" width="200" height="205" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="360" y="68" fill="#dc2626" font-size="11.5" font-weight="bold" text-anchor="middle">2. Energy &amp; Density</text><text x="275" y="95" fill="#334155" font-size="10">• Inductor Energy: U = ½LI²</text><text x="275" y="115" fill="#334155" font-size="10">• Capacitor: U = ½CV²</text><text x="275" y="135" fill="#334155" font-size="10">• Mag Density: u_B = B²/(2μ₀)</text><text x="275" y="155" fill="#334155" font-size="10">• Elec Density: u_E = ½ε₀E²</text><text x="275" y="175" fill="#b91c1c" font-size="10.5" font-weight="bold">• Solenoid: L = μ₀N²A/l</text><text x="275" y="195" fill="#047857" font-size="10">• L ∝ μ_r with iron core</text><text x="275" y="215" fill="#1e3a8a" font-size="10">• U stored in B field</text><rect x="490" y="45" width="200" height="205" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="590" y="68" fill="#059669" font-size="11.5" font-weight="bold" text-anchor="middle">3. Generator &amp; Graphs</text><text x="505" y="95" fill="#334155" font-size="10">• Peak EMF: ε₀ = NBAω</text><text x="505" y="115" fill="#334155" font-size="10">• ε(t) = ε₀ sin(ωt)</text><text x="505" y="135" fill="#334155" font-size="10">• Slip rings ⇒ Pure AC</text><text x="505" y="155" fill="#334155" font-size="10">• Split rings ⇒ Pulsating DC</text><text x="505" y="175" fill="#b91c1c" font-size="10.5" font-weight="bold">• ε = -(Slope of Φ-t graph)</text><text x="505" y="195" fill="#047857" font-size="10">• Max Φ ⇒ Zero EMF</text><text x="505" y="215" fill="#047857" font-size="10">• Zero Φ ⇒ Max EMF</text></svg>',
    caption: 'Master comprehensive high-yield map for Inductance, Magnetic Energy, Coupling, AC Generators, and Graph Derivatives.'
  },

  neetImportantPoints: [
    'Self-inductance of solenoid: L = (μ₀ N² A) / l. Quadruples when number of turns is doubled (L ∝ N²).',
    'Energy stored in inductor: U = (1/2) L I²; Magnetic energy density: u_B = B² / (2μ₀) [J/m³].',
    'Mutual inductance: M = k √(L₁ L₂); k = 1 for tight coupling, k = 0 when coils are mutually perpendicular.',
    'AC Generator: Peak EMF ε₀ = N B A ω = 2π f N B A. Instantaneous EMF ε = ε₀ sin(ωt).',
    'Phase relationship: Instantaneous EMF lags 90° behind magnetic flux (when Φ is maximum, ε = 0).',
    'Slip rings produce continuous AC; split-ring commutator produces unidirectional pulsating DC.',
    'Graph derivative: Induced EMF equals the NEGATIVE slope of the Φ-t curve (ε = -dΦ/dt).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking self-inductance L is directly proportional to N rather than N².',
      correctFact:
        'L = μ₀ N² A / l. Inductance depends on the SQUARE of the total number of turns (N²). Doubling N multiplies L by 4.',
      whyItMattersForNEET: 'One of the most frequent numerical ratio questions in NEET.'
    },
    {
      commonConfusion: 'Assuming EMF is maximum when flux through the AC generator coil is maximum.',
      correctFact:
        'When flux is maximum (coil perpendicular to B, θ = 0°), dΦ/dt = 0, so EMF is ZERO! EMF is maximum when coil is parallel to B (θ = 90°, flux is zero).',
      whyItMattersForNEET: 'Critical conceptual trap tested repeatedly in NEET assertion-reason questions.'
    },
    {
      commonConfusion: 'Confusing the function of slip rings with split-ring commutators.',
      correctFact:
        'Slip rings maintain continuous contact and produce sinusoidal AC output. Split-ring commutators reverse connections every half-cycle to deliver DC.',
      whyItMattersForNEET: 'Standard NCERT diagram-based MCQ trap.'
    },
    {
      commonConfusion: 'Forgetting that mutual inductance is reciprocal (M₁₂ = M₂₁).',
      correctFact:
        'By the Reciprocity Theorem, M₁₂ = M₂₁ = M regardless of the individual shapes, radii, or turn counts of the two coils.',
      whyItMattersForNEET: 'Tested in conceptual multi-statement evaluation questions.'
    }
  ],

  quickRevision: [
    'Self-Inductance: L = NΦ/I (Henry), Back EMF ε = -L (dI/dt).',
    'Solenoid: L = μ₀ N² A / l = μ₀ n² A l. L ∝ N².',
    'Energy: U = (1/2) L I² (J); Energy density: u_B = B² / (2μ₀) (J/m³).',
    'Mutual Inductance: ε₂ = -M (dI₁/dt), M = k √(L₁ L₂). Coaxial: M = μ₀ N₁ N₂ A / l.',
    'AC Generator: ε(t) = ε₀ sin(ωt), ε₀ = NBAω = 2π f NBA. Slip rings ⇒ AC; Split ring ⇒ DC.',
    'Graphs: ε = - (Slope of Φ-t curve). Max flux ⇒ Zero EMF.'
  ],

  practiceQuestions: [
    {
      id: 'ind-p1',
      question:
        'A long solenoid of radius 2 cm has 100 turns/cm and carries a current of 5 A. The magnetic energy stored per unit length of the solenoid is (μ₀ = 4π × 10⁻⁷ T·m/A):',
      options: ['0.493 J/m', '0.0493 J/m', '4.93 J/m', '0.986 J/m'],
      correctAnswer: 0,
      explanation:
        'Turns per meter n = 100 turns/cm = 10,000 turns/m = 10⁴ m⁻¹. Cross-sectional area A = π r² = π (0.02 m)² = 4π × 10⁻⁴ m². Self-inductance per unit length L/l = μ₀ n² A = (4π × 10⁻⁷) × (10⁴)² × (4π × 10⁻⁴) = 16π² × 10⁻³ = 0.1579 H/m. Energy stored per unit length U/l = (1/2) (L/l) I² = (1/2) × (0.1579) × (5)² = (1/2) × 0.1579 × 25 = 0.493 J/m.'
    },
    {
      id: 'ind-p2',
      question:
        'Two coils have self-inductances L₁ = 4 mH and L₂ = 9 mH. If the coefficient of coupling between them is k = 0.5, the mutual inductance between the two coils is:',
      options: ['3.0 mH', '6.0 mH', '1.5 mH', '13.0 mH'],
      correctAnswer: 0,
      explanation:
        'Formula: M = k √(L₁ L₂) = 0.5 × √(4 mH × 9 mH) = 0.5 × √36 = 0.5 × 6 mH = 3.0 mH.'
    },
    {
      id: 'ind-p3',
      question:
        'An AC generator consists of a coil of 100 turns and cross-sectional area 0.5 m² rotating at 60 rev/s in a uniform magnetic field of 0.2 T. The peak value of the induced EMF is:',
      options: ['3769.9 V', '600 V', '1884.9 V', '1200 V'],
      correctAnswer: 0,
      explanation:
        'Frequency f = 60 Hz ⇒ Angular speed ω = 2π f = 2π (60) = 120π rad/s. Peak EMF ε₀ = N B A ω = 100 × 0.2 × 0.5 × 120π = 10 × 120π = 1200π ≈ 3769.9 V.'
    },
    {
      id: 'ind-p4',
      question:
        'When the current in a coil changes from 8 A to 2 A in 0.05 s, an average back EMF of 120 V is induced in the coil. The self-inductance of the coil is:',
      options: ['1.0 H', '0.5 H', '2.0 H', '0.25 H'],
      correctAnswer: 0,
      explanation:
        'By formula: |ε| = L |ΔI / Δt| ⇒ 120 = L × |(2 - 8) / 0.05| ⇒ 120 = L × (6 / 0.05) ⇒ 120 = 120 L ⇒ L = 1.0 H.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2023,
      question:
        'A 12 V battery connected to a 6 mH, 12 Ω coil through a switch drives a constant current in the circuit. The switch is suddenly opened. Assuming that it took 1 ms to open the switch, the average back EMF induced across the coil is:',
      options: ['6 V', '12 V', '60 V', '120 V'],
      correctAnswer: 0,
      explanation:
        'Steady current before opening: I_initial = V / R = 12 V / 12 Ω = 1.0 A. When switch is opened, final current I_final = 0. Change in current ΔI = 0 - 1.0 = -1.0 A. Time Δt = 1 ms = 10⁻³ s. Average induced back EMF ε = -L (ΔI / Δt) = -(6 × 10⁻³ H) × (-1.0 A / 10⁻³ s) = +6.0 V.',
      conceptTested: 'Back EMF Calculation during Circuit Interruption'
    },
    {
      exam: 'NEET UG',
      year: 2022,
      question:
        'If the number of turns in a solenoid is doubled without changing its length and cross-sectional area, its self-inductance becomes:',
      options: [
        'Four times',
        'Doubled',
        'Halved',
        'Eight times'
      ],
      correctAnswer: 0,
      explanation:
        'Self-inductance of a solenoid is given by L = (μ₀ N² A) / l. Since length l and area A are kept constant, L ∝ N². When N is doubled (N\' = 2N): L\' = μ₀ (2N)² A / l = 4 [μ₀ N² A / l] = 4 L (Four times).',
      conceptTested: 'Self-Inductance Dependence on Turns Squared (L ∝ N²)'
    },
    {
      exam: 'NEET UG',
      year: 2020,
      question:
        'A short solenoid of length 4 cm and radius 2 cm has 100 turns. A current of 1 A flows through it. The magnetic energy stored in the solenoid is (μ₀ = 4π × 10⁻⁷ T·m/A):',
      options: [
        '1.97 × 10⁻⁵ J',
        '3.94 × 10⁻⁵ J',
        '0.98 × 10⁻⁵ J',
        '7.88 × 10⁻⁵ J'
      ],
      correctAnswer: 0,
      explanation:
        'Length l = 0.04 m, Area A = π r² = π (0.02)² = 4π × 10⁻⁴ m², N = 100. Inductance L = μ₀ N² A / l = (4π × 10⁻⁷ × 100² × 4π × 10⁻⁴) / 0.04 = (16π² × 10⁻⁷) / 0.04 = 400π² × 10⁻⁷ ≈ 3.948 × 10⁻⁵ H. Stored energy U = (1/2) L I² = (1/2) × (3.948 × 10⁻⁵ H) × (1 A)² = 1.974 × 10⁻⁵ J ≈ 1.97 × 10⁻⁵ J.',
      conceptTested: 'Magnetic Field Energy Stored in Solenoid U = (1/2)LI²'
    },
    {
      exam: 'NEET UG',
      year: 2017,
      question:
        'A long solenoid has 500 turns. When a current of 2 A is passed through it, the resulting magnetic flux linked with each turn of the solenoid is 4 × 10⁻³ Wb. The self-inductance of the solenoid is:',
      options: ['1.0 H', '4.0 H', '2.5 H', '2.0 H'],
      correctAnswer: 0,
      explanation:
        'Total flux linkage = N Φ = 500 × (4 × 10⁻³ Wb) = 2.0 Wb. By definition of self-inductance: N Φ = L I ⇒ L = (N Φ) / I = 2.0 Wb / 2.0 A = 1.0 H.',
      conceptTested: 'Fundamental Definition of Self-Inductance L = (NΦ)/I'
    }
  ]
};
