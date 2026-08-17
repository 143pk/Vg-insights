import { DetailedTopicContent } from '../../types/neet';

export const physForceParallelConductorsDetails: DetailedTopicContent = {
  topicId: 'phys-force-parallel-conductors',
  topicName: 'Magnetic Force on Conductors, Parallel Currents, Torque & Dipole Moments',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Magnetic Effects of Current & Magnetism',
  chapter: 'Moving Charges and Magnetism',

  whatIsThisTopic:
    'Comprehensive first-principles mastery of the magnetic force on current-carrying conductors (F = I(L × B)), microscopic derivation from free-electron drift, arbitrary/curved wire displacement theorem, zero net force on closed loops in uniform fields, force between parallel current-carrying wires (f = μ₀ I₁ I₂ / 2πd) with attraction/repulsion dynamics and the official SI definition of the Ampere, torque on planar current loops (τ = m × B = NIAB sinθ), potential energy of a magnetic dipole (U = -m · B), revolving electron magnetic moment (m = evr/2), Bohr Magneton (μ_B = 9.27 × 10⁻²⁴ A·m²), and gyromagnetic ratio.',

  basicIdea: [
    'Magnetic Force on a Straight Conductor: A conductor of length L carrying steady current I placed in uniform magnetic field B experiences a magnetic force F = I (L × B). Magnitude: F = I L B sinθ, where θ is the angle between the conductor (current direction) and B.',
    'Microscopic Derivation from Free Electron Drift: Total number of conduction electrons in wire of volume A·L is N = n A L. Each electron drifts with velocity v_d and experiences magnetic force F_e = e (v_d × B). Summing over all electrons: F_total = (n A L) e (v_d × B) = (n e A v_d) (L × B) = I (L × B) (since I = n e A v_d).',
    'Arbitrary Shaped / Curved Wires in Uniform Field: For any arbitrarily shaped wire from initial point P to final point Q in a uniform magnetic field B, the net force is F_net = I (L_net × B), where L_net is the straight vector displacement from the start point to the end point.',
    'Closed Loop in Uniform Field: For any closed loop of arbitrary shape in a uniform magnetic field, the vector displacement L_net = 0 ⇒ F_net = 0 (Net magnetic translational force is ALWAYS ZERO).',
    'Force Between Two Parallel Current-Carrying Wires: Two long parallel conductors separated by distance d carrying steady currents I₁ and I₂ exert mutual magnetic forces on each other.',
    '• Conductor 1 creates magnetic field at wire 2: B₁ = μ₀ I₁ / (2π d).',
    '• Conductor 2 experiences force per unit length: f = F / L = I₂ B₁ = (μ₀ I₁ I₂) / (2π d).',
    '• Current Directions: PARALLEL currents ATTRACT each other; ANTI-PARALLEL currents REPEL each other. (Newton\'s Third Law: F₁₂ = -F₂₁).',
    '• SI Definition of Ampere: 1 Ampere is that constant current which, when maintained in two straight parallel conductors of infinite length and negligible cross-section placed 1 meter apart in vacuum, produces between them a force of exactly 2 × 10⁻⁷ N per meter of length.',
    'Torque on a Current Loop: When a planar coil of N turns and area A carrying current I is placed in a uniform magnetic field B, the net translational force is zero (F_net = 0), but the forces on opposite sides form a pure couple creating a net torque: τ = N I A B sinθ = m × B.',
    '• Angle Conventions for Torque:',
    '  - θ is the angle between the normal to the loop (magnetic dipole moment m) and magnetic field B: τ = N I A B sinθ.',
    '  - α is the angle between the plane of the loop and magnetic field B (where α = 90° - θ): τ = N I A B cosα.',
    'Magnetic Dipole Moment (m): Vector quantity m = N I A directed perpendicular to the plane of the loop (Right-Hand Curl Rule). SI Unit: A·m² or J/T.',
    '• Potential Energy: U = -m · B = -m B cosθ. Stable equilibrium at θ = 0° (U_min = -mB); Unstable equilibrium at θ = 180° (U_max = +mB).',
    '• Work done in rotating dipole from θ₁ to θ₂: W = ∫ τ dθ = m B (cosθ₁ - cosθ₂).',
    'Magnetic Moment of Revolving Electron: An electron (charge e, mass m_e) orbiting with speed v in radius r constitutes a current I = e / T = e v / (2π r). Magnetic moment m = I A = (e v / 2π r)(π r²) = (e v r) / 2 = (e / 2m_e) L, where L = m_e v r is orbital angular momentum.',
    '• Gyromagnetic Ratio: m / L = e / (2m_e) = 8.8 × 10¹⁰ C/kg (constant for all orbital electrons).',
    '• Bohr Magneton (μ_B): For the minimum ground-state angular momentum L = ℏ = h / (2π), the minimum magnetic moment is the Bohr Magneton: μ_B = (e ℏ) / (2 m_e) = 9.27 × 10⁻²⁴ A·m².'
  ],

  importantTerms: [
    {
      term: 'Magnetic Force on Conductor',
      symbol: 'F = I(L × B)',
      definition:
        'The macroscopic magnetic force exerted on a current-carrying wire of vector length L in a magnetic field B.',
      neetNote: 'Direction determined by Fleming\'s Left-Hand Rule or Right-Hand Palm Rule.'
    },
    {
      term: 'Force per unit Length (f)',
      symbol: 'f = μ₀ I₁ I₂ / (2π d)',
      definition:
        'The mutual magnetic force per unit length between two long parallel current-carrying conductors separated by distance d.',
      neetNote: 'Parallel currents attract; opposite currents repel (the reverse of electrostatic charge signs!).'
    },
    {
      term: 'Magnetic Dipole Moment (m)',
      symbol: 'm = N I A',
      definition:
        'A vector characterizing the magnetic strength and orientation of a current loop. Direction given by right-hand thumb when fingers curl along current.',
      neetNote: 'SI Unit: A·m² or J/T. Torque τ = m × B; Potential Energy U = -m · B.'
    },
    {
      term: 'Bohr Magneton (μ_B)',
      symbol: 'μ_B = eℏ / (2m_e)',
      definition:
        'The fundamental atomic unit of magnetic dipole moment associated with the orbital motion of an electron in the first Bohr orbit: μ_B = 9.27 × 10⁻²⁴ A·m².',
      neetNote: 'Gyromagnetic ratio γ = m/L = e / (2m_e) is independent of the orbital state.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Magnetic Force on a Current-Carrying Conductor & Microscopic Derivation',
      paragraphs: [
        'A current-carrying conductor consists of a lattice of stationary positive ions through which conduction electrons drift with average drift velocity v_d. When placed in an external magnetic field B, each free electron experiences a magnetic Lorentz force F_e = -e(v_d × B).',
        'Microscopic Derivation:',
        'Let the conductor have length L, cross-sectional area A, and free electron density n. The total number of conduction electrons in the wire is N_total = n A L. The total magnetic force on all conduction electrons is:',
        'F = N_total · F_e = (n A L) · [-e (v_d × B)] = -(n e A v_d) (L × B).',
        'Since electric current is defined as I = n e A v_d and the vector length L points in the direction of conventional current (opposite to electron drift velocity -v_d), the expression simplifies to the fundamental macroscopic law: F = I (L × B).',
        'Magnitude and Special Orientations:',
        '• F = I L B sinθ (where θ is the angle between current vector L and field B).',
        '• When wire is parallel to B (θ = 0° or 180°): sinθ = 0 ⇒ F = 0 (No force).',
        '• When wire is perpendicular to B (θ = 90°): sin 90° = 1 ⇒ F_max = I L B.',
        'Curved Wires & Closed Loops in Uniform B:',
        'For an infinitesimal element dl: dF = I (dl × B). Integrating over the full wire from point P to Q in a uniform magnetic field B: F_net = ∫ I (dl × B) = I (∫ dl) × B = I (L_net × B), where L_net is the straight vector connecting start P to end Q.',
        'Consequence for Closed Loops: For any closed loop, ∫ dl = 0. Therefore, the net magnetic force on ANY closed current loop in a uniform magnetic field is strictly ZERO (F_net = 0).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="300" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="180" y="40" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">Straight Conductor in B Field</text><line x1="100" y1="150" x2="260" y2="90" stroke="#ef4444" stroke-width="4"/><polygon points="265,88 253,93 257,103" fill="#ef4444"/><text x="210" y="105" fill="#b91c1c" font-size="11" font-weight="bold">Current I</text><g fill="#2563eb"><circle cx="120" cy="70" r="2"/><circle cx="160" cy="70" r="2"/><circle cx="200" cy="70" r="2"/><circle cx="240" cy="70" r="2"/><circle cx="120" cy="170" r="2"/><circle cx="160" cy="170" r="2"/><circle cx="200" cy="170" r="2"/><circle cx="240" cy="170" r="2"/></g><text x="180" y="65" fill="#2563eb" font-size="10" font-weight="bold" text-anchor="middle">Magnetic Field B (Out ⊙)</text><line x1="180" y1="120" x2="210" y2="190" stroke="#059669" stroke-width="3" marker-end="url(#arr-flow-green)"/><text x="225" y="185" fill="#047857" font-size="11" font-weight="bold">F = I(L × B)</text><text x="180" y="205" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">F = I L B sinθ</text><rect x="370" y="20" width="300" height="200" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="8"/><text x="520" y="40" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">Curved Wire &amp; Closed Loop Theorem</text><path d="M 400 130 Q 440 60 480 130 T 560 130 T 630 130" fill="none" stroke="#2563eb" stroke-width="2.5"/><text x="390" y="145" fill="#2563eb" font-size="10" font-weight="bold">P</text><text x="640" y="145" fill="#2563eb" font-size="10" font-weight="bold">Q</text><line x1="400" y1="130" x2="630" y2="130" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3"/><text x="515" y="145" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">Straight Displacement L_net</text><text x="520" y="180" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle">F_curved = I (L_net × B)</text><text x="520" y="205" fill="#047857" font-size="11" text-anchor="middle">Closed Loop (L_net = 0): F_net = 0</text></svg>',
        caption:
          'Figure 4.13: Magnetic force on straight and curved current conductors in a uniform magnetic field.',
        guide:
          'For any curved wire in uniform B, replace the curved shape with the straight vector displacement L_net from start to finish.'
      },
      importantPoints: [
        'Conductor force: F = I (L × B) = I L B sinθ.',
        'Direction: Fleming\'s Left Hand Rule or Right-Hand Palm Rule.',
        'Curved wire in uniform B: F = I (L_net × B) where L_net is displacement vector.',
        'Any closed current loop in a uniform magnetic field experiences ZERO net translational force (F_net = 0).'
      ]
    },
    {
      heading: '2. Force Between Two Parallel Current-Carrying Conductors & The Ampere',
      paragraphs: [
        'Consider two infinitely long, straight parallel conductors 1 and 2 separated by distance d in vacuum, carrying steady currents I₁ and I₂ in the same direction (+y axis).',
        'First-Principles Derivation:',
        '1. Conductor 1 creates a magnetic field at the location of conductor 2: B₁ = μ₀ I₁ / (2π d). By Right-Hand Thumb Rule, B₁ is directed perpendicular INTO the plane of the wires (⊗).',
        '2. Conductor 2 carrying current I₂ resides in this field B₁ and experiences a magnetic force: F₂₁ = I₂ L B₁ sin 90° = I₂ L [μ₀ I₁ / (2π d)].',
        '3. The force per unit length f on conductor 2 is: f = F₂₁ / L = (μ₀ I₁ I₂) / (2π d).',
        '4. By Fleming\'s Left Hand Rule, the force on conductor 2 is directed towards conductor 1 (ATTRACTIVE).',
        '5. Similarly, conductor 2 creates field B₂ at conductor 1, exerting an equal and opposite force F₁₂ directed towards conductor 2. Thus, F₁₂ = -F₂₁, perfectly obeying Newton\'s Third Law.',
        'Universal Current Interaction Rules for NEET:',
        '• PARALLEL CURRENTS (same direction) → ATTRACT each other.',
        '• ANTI-PARALLEL CURRENTS (opposite directions) → REPEL each other.',
        '• Contrast with Electrostatics: In electrostatics, LIKE charges repel; in magnetism, LIKE (parallel) currents attract!',
        'Official Definition of 1 Ampere: The Ampere is that steady current which, when flowing in each of two infinitely long straight parallel conductors of negligible cross-section placed 1 meter apart in vacuum, produces between them a force of 2 × 10⁻⁷ N per meter of length (f = 4π × 10⁻⁷ × 1 × 1 / (2π × 1) = 2 × 10⁻⁷ N/m).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="300" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="180" y="40" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">Parallel Currents (Same Direction)</text><line x1="120" y1="180" x2="120" y2="60" stroke="#ef4444" stroke-width="3.5"/><polygon points="120,50 114,65 126,65" fill="#ef4444"/><text x="100" y="70" fill="#b91c1c" font-size="11" font-weight="bold">I₁</text><line x1="240" y1="180" x2="240" y2="60" stroke="#ef4444" stroke-width="3.5"/><polygon points="240,50 234,65 246,65" fill="#ef4444"/><text x="255" y="70" fill="#b91c1c" font-size="11" font-weight="bold">I₂</text><line x1="120" y1="120" x2="170" y2="120" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-flow)"/><line x1="240" y1="120" x2="190" y2="120" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-flow)"/><text x="180" y="145" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">ATTRACT</text><text x="180" y="205" fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">f = μ₀ I₁ I₂ / (2π d)</text><rect x="370" y="20" width="300" height="200" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" rx="8"/><text x="520" y="40" fill="#991b1b" font-size="13" font-weight="bold" text-anchor="middle">Anti-Parallel Currents (Opposite)</text><line x1="460" y1="180" x2="460" y2="60" stroke="#ef4444" stroke-width="3.5"/><polygon points="460,50 454,65 466,65" fill="#ef4444"/><text x="440" y="70" fill="#b91c1c" font-size="11" font-weight="bold">I₁</text><line x1="580" y1="60" x2="580" y2="180" stroke="#ef4444" stroke-width="3.5"/><polygon points="580,190 574,175 586,175" fill="#ef4444"/><text x="595" y="175" fill="#b91c1c" font-size="11" font-weight="bold">I₂</text><line x1="460" y1="120" x2="410" y2="120" stroke="#b91c1c" stroke-width="2.5" marker-end="url(#arr-flow-red)"/><line x1="580" y1="120" x2="630" y2="120" stroke="#b91c1c" stroke-width="2.5" marker-end="url(#arr-flow-red)"/><text x="520" y="145" fill="#991b1b" font-size="12" font-weight="bold" text-anchor="middle">REPEL</text><text x="520" y="205" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">Newton\'s Third Law: F₁₂ = -F₂₁</text></svg>',
        caption:
          'Figure 4.14: Mutual forces between parallel current-carrying conductors: Attraction for parallel, Repulsion for antiparallel.',
        guide:
          'Parallel currents attract, opposite currents repel. Force per unit length is f = μ₀ I₁ I₂ / (2π d).'
      },
      importantPoints: [
        'Force per unit length: f = (μ₀ I₁ I₂) / (2π d).',
        'Parallel currents ATTRACT; anti-parallel currents REPEL.',
        'Obeys Newton\'s Third Law: F₁₂ = -F₂₁.',
        'Definition of 1 Ampere: Produces force of 2 × 10⁻⁷ N/m at distance of 1 m in vacuum.'
      ]
    },
    {
      heading: '3. Torque on a Current Loop, Magnetic Dipole Moment & Potential Energy',
      paragraphs: [
        'Consider a rectangular coil ABCD of length a and width b (Area A = ab) carrying current I in a uniform magnetic field B:',
        '• Forces on Top & Bottom Arms (AB and CD): Equal in magnitude, opposite in direction, and lie along the same collinear line of action. They cancel each other out completely without producing any net force or torque.',
        '• Forces on Side Arms (BC and DA): Magnitude F = I b B. These forces are equal in magnitude and opposite in direction, but act along SEPARATED parallel lines of action (distance = a sinθ). They constitute a pure couple producing a deflecting torque:',
        'τ = Force × Lever Arm = (I b B) · (a sinθ) = I (ab) B sinθ = I A B sinθ.',
        'For an N-turn coil: τ = N I A B sinθ.',
        'Vector Form: Defining the Magnetic Dipole Moment vector as m = N I A (directed normal to the loop by Right-Hand Curl Rule): τ = m × B.',
        'Angles & Conventions (CRITICAL NEET TRAP):',
        '• If θ is the angle between the normal (magnetic moment m) and magnetic field B: τ = N I A B sinθ.',
        '• If α is the angle between the plane of the coil and magnetic field B: Since α + θ = 90°, τ = N I A B cosα.',
        'Potential Energy of a Magnetic Dipole in B Field:',
        'U = -m · B = -m B cosθ.',
        '• Stable Equilibrium: θ = 0° (m parallel to B) ⇒ U_min = -mB, τ = 0.',
        '• Unstable Equilibrium: θ = 180° (m antiparallel to B) ⇒ U_max = +mB, τ = 0.',
        '• Maximum Torque: θ = 90° (plane of coil parallel to B) ⇒ τ_max = mB, U = 0.',
        '• Work done in rotating dipole from θ₁ to θ₂: W = ΔU = m B (cosθ₁ - cosθ₂).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="42" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Torque on a Rectangular Current Loop in Uniform Magnetic Field</text><g transform="translate(180, 115)"><polygon points="-60,30 20,-30 80,-10 0,50" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><line x1="80" y1="-10" x2="80" y2="-60" stroke="#ef4444" stroke-width="3" marker-end="url(#arr-flow-red)"/><text x="95" y="-45" fill="#b91c1c" font-size="10" font-weight="bold">F = IbB (Up)</text><line x1="-60" y1="30" x2="-60" y2="80" stroke="#ef4444" stroke-width="3" marker-end="url(#arr-flow-red)"/><text x="-125" y="65" fill="#b91c1c" font-size="10" font-weight="bold">F = IbB (Down)</text><line x1="10" y1="10" x2="10" y2="-50" stroke="#059669" stroke-width="2.5" marker-end="url(#arr-flow-green)"/><text x="20" y="-40" fill="#047857" font-size="11" font-weight="bold">m = NIA</text></g><rect x="420" y="60" width="220" height="135" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" rx="6"/><text x="530" y="80" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Torque &amp; Potential Energy</text><text x="530" y="105" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">τ = m × B = NIAB sinθ</text><text x="530" y="125" fill="#1e3a8a" font-size="11" text-anchor="middle">U = -m · B = -mB cosθ</text><text x="530" y="145" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">Stable Eq: θ = 0° (U = -mB)</text><text x="530" y="165" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">Unstable Eq: θ = 180° (U = +mB)</text><text x="530" y="185" fill="#64748b" font-size="10" text-anchor="middle">Max Torque: θ = 90° (τ = mB)</text><text x="350" y="215" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">Work Done: W = mB (cosθ₁ - cosθ₂)</text></svg>',
        caption:
          'Figure 4.15: Rectangular current loop experiencing equal and opposite forces creating a deflecting couple torque τ = m × B.',
        guide:
          'Net translational force is zero (F_net = 0), but the couple generates torque τ = NIAB sinθ.'
      },
      importantPoints: [
        'Net translational force on a planar current loop in uniform B is ZERO: F_net = 0.',
        'Torque: τ = m × B = N I A B sinθ (θ = angle between normal m and B).',
        'If α is angle with plane of loop: τ = N I A B cosα.',
        'Potential energy: U = -m · B = -mB cosθ; Work done: W = mB(cosθ₁ - cosθ₂).'
      ]
    },
    {
      heading: '4. Magnetic Dipole Moment of a Revolving Electron, Bohr Magneton & Gyromagnetic Ratio',
      paragraphs: [
        'In Niels Bohr\'s model of the hydrogen atom, an electron of charge e and mass m_e orbits a central proton in a circular orbit of radius r with speed v.',
        '1. Equivalent Electric Current: The orbital period of the electron is T = (2π r) / v. The orbiting electron constitutes an equivalent steady circular electric current:',
        'I = e / T = (e v) / (2π r).',
        '2. Orbital Magnetic Dipole Moment (m_l): The magnetic moment of this circular current loop of area A = π r² is:',
        'm_l = I A = [(e v) / (2π r)] · (π r²) = (e v r) / 2.',
        '3. Relation with Orbital Angular Momentum L (L = m_e v r):',
        'm_l = [e (m_e v r)] / (2 m_e) = (e / 2m_e) L.',
        'Vector Form: Because the electron carries negative charge (-e), its magnetic moment vector is directed ANTI-PARALLEL to its orbital angular momentum vector: m_l = -(e / 2m_e) L.',
        '4. Gyromagnetic Ratio: The ratio of magnetic dipole moment to orbital angular momentum is a universal constant for all orbital electrons called the Gyromagnetic Ratio:',
        'm_l / L = e / (2 m_e) = (1.6 × 10⁻¹⁹ C) / (2 × 9.1 × 10⁻³¹ kg) = 8.8 × 10¹⁰ C/kg.',
        '5. The Bohr Magneton (μ_B): According to Bohr\'s quantization postulate, the minimum orbital angular momentum in the first Bohr orbit (n = 1) is L_min = ℏ = h / (2π). The corresponding minimum atomic magnetic moment is called the Bohr Magneton:',
        'μ_B = (e ℏ) / (2 m_e) = (e h) / (4π m_e) = 9.27 × 10⁻²⁴ A·m² (or J/T).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="230" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="190" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="40" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Atomic Magnetic Dipole: Revolving Electron &amp; Bohr Magneton</text><g transform="translate(180, 115)"><circle cx="0" cy="0" r="50" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,3"/><circle cx="0" cy="0" r="8" fill="#ef4444"/><text x="0" y="4" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">+e</text><circle cx="50" cy="0" r="5" fill="#2563eb"/><text x="65" y="4" fill="#1e40af" font-size="10" font-weight="bold">e⁻ (v)</text><line x1="0" y1="0" x2="0" y2="-65" stroke="#059669" stroke-width="2.5" marker-end="url(#arr-flow-green)"/><text x="15" y="-55" fill="#047857" font-size="11" font-weight="bold">L = m_e v r</text><line x1="0" y1="0" x2="0" y2="65" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arr-flow-red)"/><text x="15" y="65" fill="#b91c1c" font-size="11" font-weight="bold">m_l = -(e/2m_e)L</text></g><rect x="370" y="60" width="280" height="135" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" rx="6"/><text x="510" y="80" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Atomic Magnetic Constants</text><text x="510" y="105" fill="#1e3a8a" font-size="11" text-anchor="middle">Current: I = ev / (2π r)</text><text x="510" y="125" fill="#1e3a8a" font-size="11" text-anchor="middle">Magnetic Moment: m_l = evr / 2</text><text x="510" y="145" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Gyromagnetic Ratio: e / (2m_e) = 8.8 × 10¹⁰ C/kg</text><text x="510" y="165" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">Bohr Magneton: μ_B = 9.27 × 10⁻²⁴ A·m²</text><text x="510" y="185" fill="#64748b" font-size="10" text-anchor="middle">μ_B = eh / (4π m_e)</text></svg>',
        caption:
          'Figure 4.16: Orbital electron model showing angular momentum L and antiparallel magnetic dipole moment m_l.',
        guide:
          'Because the electron has negative charge (-e), magnetic dipole moment m_l points directly opposite to orbital angular momentum L.'
      },
      importantPoints: [
        'Equivalent current of revolving electron: I = ev / (2π r).',
        'Orbital magnetic moment: m_l = evr / 2 = (e / 2m_e) L.',
        'Gyromagnetic ratio: m_l / L = e / (2m_e) = 8.8 × 10¹⁰ C/kg (independent of orbit).',
        'Bohr Magneton: μ_B = (e h) / (4π m_e) = 9.27 × 10⁻²⁴ A·m².'
      ]
    }
  ],

  formulae: [
    {
      title: 'Magnetic Force on Current-Carrying Conductor',
      formula: '\\vec{F} = I(\\vec{L} \\times \\vec{B}) \\implies F = I L B \\sin\\theta, \\quad \\vec{F}_{\\text{closed loop}} = 0',
      variables: 'I = current (A), L = conductor length (m), B = magnetic field (T), θ = angle between wire and B'
    },
    {
      title: 'Force Between Parallel Current-Carrying Conductors',
      formula: 'f = \\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}',
      variables: 'd = separation distance (m), I₁, I₂ = currents (A), parallel attract, antiparallel repel'
    },
    {
      title: 'Torque on Planar Current Loop & Potential Energy',
      formula: '\\vec{\\tau} = \\vec{m} \\times \\vec{B} = N I A B \\sin\\theta, \\quad U = -\\vec{m} \\cdot \\vec{B} = -m B \\cos\\theta',
      variables: 'm = N I A = magnetic dipole moment (A·m²), θ = angle between normal to loop and B'
    },
    {
      title: 'Bohr Magneton & Gyromagnetic Ratio',
      formula: 'm_l = \\frac{e v r}{2} = \\left(\\frac{e}{2m_e}\\right) L, \\quad \\mu_B = \\frac{e \\hbar}{2m_e} = \\frac{e h}{4\\pi m_e} = 9.27 \\times 10^{-24} \\text{ A}\\cdot\\text{m}^2',
      variables: 'L = orbital angular momentum, m_e = electron mass, e = elementary charge'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="230" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="190" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="42" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Comparison: Electric Dipole vs Magnetic Dipole</text><rect x="50" y="65" width="280" height="130" fill="#ffffff" stroke="#93c5fd" stroke-width="1" rx="6"/><text x="190" y="85" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Electric Dipole (p = q · 2a)</text><text x="190" y="110" fill="#1e3a8a" font-size="11" text-anchor="middle">• Torque: τ = p × E = pE sinθ</text><text x="190" y="130" fill="#1e3a8a" font-size="11" text-anchor="middle">• Potential Energy: U = -p · E</text><text x="190" y="150" fill="#1e3a8a" font-size="11" text-anchor="middle">• Axial Field: E_axial = (1/4πε₀)(2p/r³)</text><text x="190" y="170" fill="#1e3a8a" font-size="11" text-anchor="middle">• Equat. Field: E_equat = (1/4πε₀)(p/r³)</text><rect x="370" y="65" width="280" height="130" fill="#ffffff" stroke="#86efac" stroke-width="1.5" rx="6"/><text x="510" y="85" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">Magnetic Dipole (m = NIA)</text><text x="510" y="110" fill="#065f46" font-size="11" text-anchor="middle">• Torque: τ = m × B = mB sinθ</text><text x="510" y="130" fill="#065f46" font-size="11" text-anchor="middle">• Potential Energy: U = -m · B</text><text x="510" y="150" fill="#065f46" font-size="11" text-anchor="middle">• Axial Field: B_axial = (μ₀/4π)(2m/r³)</text><text x="510" y="170" fill="#065f46" font-size="11" text-anchor="middle">• Equat. Field: B_equat = (μ₀/4π)(m/r³)</text></svg>',
    caption: 'Perfect mathematical and physical duality between electric and magnetic dipoles.'
  },

  neetImportantPoints: [
    'Parallel currents attract; antiparallel currents repel (exact opposite of electrostatics).',
    'Net translational force on any closed current loop in a uniform magnetic field is ZERO (F_net = 0), but net torque can be non-zero (τ = m × B).',
    'Torque formula angle: Use sinθ when θ is angle with the normal vector (magnetic moment m); use cosα when α is angle with the plane of the loop.',
    'Bohr Magneton: μ_B = eℏ / (2m_e) = (eh) / (4π m_e) = 9.27 × 10⁻²⁴ A·m².',
    'Gyromagnetic ratio: γ = e / (2m_e) = 8.8 × 10¹⁰ C/kg (independent of orbit).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing the angle with the normal vs angle with the plane in torque problems.',
      correctFact:
        'If a question states "the plane of the coil makes an angle of 30° with the magnetic field", then α = 30° and θ = 60°. Using sin 30° instead of cos 30° (or sin 60°) causes an error of 1/2 vs √3/2.',
      whyItMattersForNEET: 'One of the top 3 calculation traps in NEET magnetism.'
    },
    {
      commonConfusion: 'Assuming like currents repel because like electric charges repel.',
      correctFact:
        'Two parallel currents flowing in the SAME direction ATTRACT each other. Opposite currents REPEL each other.',
      whyItMattersForNEET: 'Frequent conceptual question trap.'
    },
    {
      commonConfusion: 'Thinking gyromagnetic ratio depends on the principal quantum number n.',
      correctFact:
        'Gyromagnetic ratio γ = m/L = e / (2m_e) is a constant scalar depending ONLY on the charge and mass of the electron, completely independent of orbit radius, speed, or quantum number n.',
      whyItMattersForNEET: 'Direct assertion-reason NEET question.'
    }
  ],

  quickRevision: [
    'Conductor Force: F = I(L × B) = ILB sinθ; Closed loop in uniform B: F_net = 0.',
    'Parallel wires: f = μ₀ I₁ I₂ / (2π d); Parallel attract, Antiparallel repel.',
    'Torque on loop: τ = m × B = NIAB sinθ (θ = angle with normal).',
    'Potential energy: U = -m · B; Stable eq (θ = 0°, U = -mB); Unstable eq (θ = 180°, U = +mB).',
    'Revolving electron: m = evr/2 = (e/2m_e)L; Gyromagnetic ratio = 8.8 × 10¹⁰ C/kg; Bohr Magneton μ_B = 9.27 × 10⁻²⁴ A·m².'
  ],

  practiceQuestions: [
    {
      id: 'fpc-p1',
      question:
        'A square loop of side 10 cm consists of 20 turns and carries a current of 12 A. The loop is suspended vertically and the normal to the plane of the loop makes an angle of 30° with the direction of a uniform horizontal magnetic field of magnitude 0.80 T. What is the magnitude of torque experienced by the loop?',
      options: ['0.96 N·m', '1.66 N·m', '0.48 N·m', '1.92 N·m'],
      correctAnswer: 0,
      explanation:
        'Given: Side a = 10 cm = 0.1 m ⇒ Area A = a² = 0.01 m², N = 20, I = 12 A, B = 0.80 T, θ = 30° (angle with normal). Magnetic moment m = N I A = 20 × 12 × 0.01 = 2.4 A·m². Torque τ = m B sinθ = 2.4 × 0.80 × sin 30° = 1.92 × 0.5 = 0.96 N·m.'
    },
    {
      id: 'fpc-p2',
      question:
        'Two long parallel wires are separated by a distance of 0.2 m in air. If each wire carries a current of 5 A in the same direction, the magnetic force per unit length between them is:',
      options: [
        '2.5 × 10⁻⁵ N/m (attractive)',
        '2.5 × 10⁻⁵ N/m (repulsive)',
        '5.0 × 10⁻⁵ N/m (attractive)',
        '5.0 × 10⁻⁵ N/m (repulsive)'
      ],
      correctAnswer: 0,
      explanation:
        'Formula: f = (μ₀ I₁ I₂) / (2π d). Calculation: f = (4π × 10⁻⁷ × 5 × 5) / (2π × 0.2) = (2 × 10⁻⁷ × 25) / 0.2 = (50 × 10⁻⁷) / 0.2 = 2.5 × 10⁻⁵ N/m. Because currents are in the same direction, the force is ATTRACTIVE.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2024,
      question:
        'A circular loop of radius r carries a current I. The magnetic dipole moment of the loop is directly proportional to:',
      options: ['r²', 'r', 'r³', '1/r'],
      correctAnswer: 0,
      explanation:
        'Magnetic dipole moment m = I A = I (π r²). Therefore, for a circular loop of radius r, m ∝ r².',
      conceptTested: 'Magnetic Dipole Moment Dependence on Loop Geometry'
    },
    {
      exam: 'NEET UG',
      year: 2022,
      question:
        'Two long, straight parallel wires separated by a distance d carry currents I₁ and I₂ in opposite directions. The magnetic field at a point midway between the two wires is:',
      options: [
        'μ₀ (I₁ + I₂) / (π d)',
        'μ₀ |I₁ - I₂| / (π d)',
        'μ₀ (I₁ + I₂) / (2π d)',
        'Zero'
      ],
      correctAnswer: 0,
      explanation:
        'Distance to midpoint is r = d/2. Wire 1 creates field B₁ = μ₀ I₁ / (2π(d/2)) = μ₀ I₁ / (π d). By Right-Hand Thumb Rule, for opposite currents, both fields point in the SAME direction at the midpoint! Therefore, B_net = B₁ + B₂ = μ₀ I₁ / (π d) + μ₀ I₂ / (π d) = μ₀ (I₁ + I₂) / (π d).',
      conceptTested: 'Superposition of Magnetic Fields for Antiparallel Current Wires'
    }
  ]
};
