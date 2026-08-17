import { DetailedTopicContent } from '../../types/neet';

export const physLorentzForceCyclotronDetails: DetailedTopicContent = {
  topicId: 'phys-lorentz-force-cyclotron',
  topicName: 'Lorentz Force, Charged Particle Trajectories, Velocity Selector & Cyclotron',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Magnetic Effects of Current & Magnetism',
  chapter: 'Moving Charges and Magnetism',

  whatIsThisTopic:
    'Comprehensive first-principles mastery of the total Lorentz Force (F = q(E + v × B)), the fundamental property that static magnetic fields do zero work (W = 0), particle trajectories in uniform magnetic fields (linear when v ∥ B, uniform circular when v ⟂ B with radius r = mv/qB and time period T = 2πm/qB, and helical when at arbitrary angle θ with pitch p = v_parallel · T), crossed-field Velocity Selectors (v = E/B), and Cyclotron resonance and energy gain mechanics.',

  basicIdea: [
    'Lorentz Force: The total electromagnetic force experienced by a charge q moving with velocity v in a region containing both electric field E and magnetic field B is F = q (E + v × B) = F_electric + F_magnetic.',
    'Magnetic Lorentz Force: F_m = q (v × B). Magnitude is F_m = |q| v B sinθ, where θ is the angle between velocity v and magnetic field B.',
    'Special Cases of Magnetic Force:',
    '• Charge at Rest (v = 0): F_m = 0 (Static magnetic fields exert ZERO force on stationary charges).',
    '• Parallel / Anti-parallel Motion (θ = 0° or 180°): sinθ = 0 ⇒ F_m = 0 (Particle continues in an undeflected straight line).',
    '• Perpendicular Motion (θ = 90°): sin 90° = 1 ⇒ F_max = |q| v B (Maximum force).',
    'Zero Work Principle: Since F_m is always perpendicular to velocity v (F_m · v = 0), the rate of work done (instantaneous power P = F_m · v) is identically ZERO. A magnetic field CANNOT change the speed or kinetic energy of a charged particle; it only deflects the particle by changing the direction of its velocity vector.',
    'Circular Motion (v ⟂ B, θ = 90°): The constant magnetic force acts perpendicular to velocity, providing the necessary centripetal force: q v B = m v² / r.',
    '• Radius of Circular Orbit: r = (m v) / (q B) = p / (q B) = √(2 m K) / (q B) = √(2 m q V_acc) / (q B).',
    '• Angular Velocity: ω = v / r = (q B) / m.',
    '• Time Period of Revolution: T = (2π r) / v = (2π m) / (q B). Crucial fact: T is completely INDEPENDENT of speed v and orbit radius r!',
    '• Cyclotron Frequency: f = 1 / T = (q B) / (2π m).',
    'Helical Motion (Arbitrary angle θ with B): Velocity resolves into v_parallel = v cosθ (along B) and v_perp = v sinθ (⟂ B).',
    '• v_perp creates uniform circular motion of radius r = (m v sinθ) / (q B).',
    '• v_parallel remains constant, causing uniform linear translation along B.',
    '• Net trajectory is a Helix. Pitch of the helix (axial distance moved in one full rotation): p = v_parallel · T = (2π m v cosθ) / (q B).',
    'Velocity Selector (Crossed Fields E ⟂ B ⟂ v): Electric force F_e = qE opposes magnetic force F_m = qvB. For undeflected straight-line transmission: q E = q v B ⇒ v = E / B (independent of charge q and mass m).',
    'Cyclotron Accelerator: A device that accelerates charged particles (protons, deuterons, α-particles) to very high kinetic energies using magnetic turning in two D-shaped metal chambers (dees) combined with an oscillating RF electric field in the narrow gap.',
    '• Cyclotron Resonance Condition: Oscillator frequency matches cyclotron frequency: f_osc = (q B) / (2π m).',
    '• Maximum Kinetic Energy at Dee Radius R: K_max = ½ m v_max² = (q² B² R²) / (2 m).'
  ],

  importantTerms: [
    {
      term: 'Lorentz Force',
      symbol: 'F = q(E + v × B)',
      definition:
        'The total force exerted by simultaneous electric and magnetic fields on a moving charged particle.',
      neetNote: 'Electric force does work and alters speed; magnetic force does zero work and alters only direction.'
    },
    {
      term: 'Gyroradius / Larmor Radius (r)',
      symbol: 'r = mv / qB',
      definition:
        'The radius of the circular path executed by a charged particle moving perpendicular to a uniform magnetic field.',
      neetNote: 'In terms of accelerating voltage V: r = √(2 m V / q) / B.'
    },
    {
      term: 'Cyclotron Frequency (f_c)',
      symbol: 'f_c = qB / (2πm)',
      definition:
        'The frequency of circular revolution of a charged particle in a magnetic field, independent of particle speed and orbit radius.',
      neetNote: 'Also called gyrofrequency. Ratio for proton vs alpha particle: (q/m)_p / (q/m)_α = 2 : 1.'
    },
    {
      term: 'Pitch of Helix (p)',
      symbol: 'p = v_parallel · T',
      definition:
        'The linear distance travelled by a charged particle along the magnetic field line during one complete circular revolution.',
      neetNote: 'p = (2π m v cosθ) / (qB).'
    },
    {
      term: 'Velocity Selector',
      symbol: 'v = E / B',
      definition:
        'An arrangement of mutually perpendicular electric and magnetic fields that allows only particles of specific speed v = E/B to pass undeflected.',
      neetNote: 'J.J. Thomson used this principle to measure the specific charge (e/m) of the electron.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Lorentz Force & The Fundamental Zero-Work Theorem of Magnetic Fields',
      paragraphs: [
        'When a charged particle of charge q moves with velocity v in an electromagnetic environment where both an electric field E and a magnetic field B are present, it experiences a combined vector force called the Lorentz Force: F = q(E + v × B).',
        'Electric Force Component: F_e = qE acts along the direction of E (for positive q) or opposite to E (for negative q). It accelerates the charge regardless of whether the particle is at rest or in motion. It does non-zero work: W = ∫ F_e · dr = q ΔV, modifying kinetic energy.',
        'Magnetic Force Component: F_m = q(v × B). Magnitude: F_m = |q| v B sinθ, where θ is the angle between velocity v and magnetic field B. By the mathematical definition of the vector cross product, the magnetic force vector F_m is ALWAYS strictly perpendicular to the instantaneous velocity vector v (F_m ⟂ v) AND strictly perpendicular to the magnetic field vector B (F_m ⟂ B).',
        'Why Static Magnetic Fields Do Zero Work (W = 0): The instantaneous rate of work done by the magnetic force on the charged particle (Power P) is given by: P = dW/dt = F_m · v = [q(v × B)] · v = 0 (since the scalar triple product of two identical vectors is identically zero!).',
        'By the Work-Energy Theorem: ΔK = W_net = 0. Therefore, the kinetic energy of a charged particle in a static magnetic field remains strictly CONSTANT, and its scalar speed v = |v| remains strictly UNCHANGED throughout the motion! The magnetic field only alters the DIRECTION of velocity, functioning purely as a steering force.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="42" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Magnetic Force Vector Orientation & Zero Work Theorem</text><g transform="translate(180, 130)"><line x1="0" y1="0" x2="120" y2="0" stroke="#2563eb" stroke-width="3" marker-end="url(#arr-flow)"/><text x="130" y="5" fill="#2563eb" font-size="12" font-weight="bold">Velocity v</text><line x1="0" y1="0" x2="60" y2="-60" stroke="#059669" stroke-width="3" marker-end="url(#arr-flow-green)"/><text x="70" y="-65" fill="#047857" font-size="12" font-weight="bold">Magnetic Field B</text><line x1="0" y1="0" x2="0" y2="-80" stroke="#ef4444" stroke-width="3.5" marker-end="url(#arr-flow-red)"/><text x="-15" y="-85" fill="#b91c1c" font-size="12" font-weight="bold">F_m = q(v × B)</text><circle cx="0" cy="0" r="8" fill="#f59e0b" stroke="#d97706" stroke-width="1.5"/><text x="0" y="4" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">+q</text></g><rect x="420" y="65" width="230" height="135" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" rx="6"/><text x="535" y="88" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Zero Work Properties</text><text x="535" y="112" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">F_m ⟂ v  ⇒  F_m · v = 0</text><text x="535" y="132" fill="#1e3a8a" font-size="11" text-anchor="middle">Power P = 0  ⇒  W_mag = 0</text><text x="535" y="152" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Kinetic Energy = Constant</text><text x="535" y="172" fill="#047857" font-size="11" text-anchor="middle">Speed v = Constant</text><text x="535" y="190" fill="#64748b" font-size="10" text-anchor="middle">Only direction of v changes</text><defs><marker id="arr-flow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker></defs></svg>',
        caption:
          'Figure 4.9: Vector orthogonality of magnetic Lorentz force (F_m ⟂ v and F_m ⟂ B) and the Zero-Work property.',
        guide:
          'Because F_m is always perpendicular to velocity v, magnetic force does zero work and cannot alter kinetic energy.'
      },
      importantPoints: [
        'Total Lorentz force: F = q(E + v × B).',
        'Magnetic force: F_m = q(v × B); magnitude F_m = q v B sinθ.',
        'Stationary charge (v = 0) or parallel motion (θ = 0°, 180°) experiences ZERO magnetic force.',
        'Work done by magnetic field is ZERO: W = 0, P = 0, speed v and kinetic energy K are strictly constant.'
      ]
    },
    {
      heading: '2. Motion of a Charged Particle in a Uniform Magnetic Field: Circular Orbits',
      paragraphs: [
        'Case 1: Perpendicular Entry (v ⟂ B, θ = 90°).',
        'When a charged particle of mass m and charge q enters a uniform magnetic field B perpendicular to the field lines with velocity v, it experiences a constant magnitude force F_m = qvB directed perpendicular to its velocity at every instant. This satisfies the exact mathematical definition of uniform circular motion, where the magnetic Lorentz force serves as the centripetal force:',
        'q v B = (m v²) / r ⇒ r = (m v) / (q B).',
        'Expressing Orbit Radius in Various Variables for NEET:',
        '1. In terms of Momentum p: r = p / (q B)',
        '2. In terms of Kinetic Energy K (p = √(2 m K)): r = √(2 m K) / (q B)',
        '3. In terms of Accelerating Potential Difference V_acc (K = q V_acc): r = √(2 m q V_acc) / (q B) = (1 / B) · √(2 m V_acc / q)',
        'Angular Frequency and Time Period:',
        '• Angular velocity: ω = v / r = (q B) / m.',
        '• Time Period of one revolution: T = (2π r) / v = 2π (m v / q B) / v = (2π m) / (q B).',
        '• Frequency of revolution: f = 1 / T = (q B) / (2π m).',
        'THE FAMOUS NEET INSIGHT: Notice that the Time Period T and Frequency f are completely INDEPENDENT of particle speed v and orbit radius r! A faster particle travels in a proportionally larger circle, completing one full revolution in the EXACT same time as a slower particle.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="300" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="180" y="40" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">Circular Orbit in Uniform B (Into Page ⊗)</text><circle cx="180" cy="120" r="55" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,3"/><circle cx="180" cy="65" r="7" fill="#ef4444"/><text x="180" y="69" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">+q</text><line x1="180" y1="65" x2="235" y2="65" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-flow)"/><text x="240" y="60" fill="#2563eb" font-size="10" font-weight="bold">v</text><line x1="180" y1="65" x2="180" y2="105" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arr-flow-red)"/><text x="195" y="90" fill="#b91c1c" font-size="10" font-weight="bold">F_m</text><line x1="180" y1="120" x2="180" y2="65" stroke="#059669" stroke-width="1.5"/><text x="170" y="95" fill="#047857" font-size="10" font-weight="bold">r</text><text x="180" y="205" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">r = mv / (qB)   |   T = 2πm / (qB)</text><rect x="370" y="20" width="300" height="200" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="8"/><text x="520" y="40" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">Helical Motion (Arbitrary Angle θ)</text><path d="M 400 120 Q 430 70 460 120 T 520 120 T 580 120 T 640 120" fill="none" stroke="#059669" stroke-width="2.5"/><line x1="400" y1="120" x2="450" y2="85" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-flow)"/><text x="445" y="75" fill="#2563eb" font-size="10" font-weight="bold">v</text><line x1="460" y1="145" x2="520" y2="145" stroke="#ef4444" stroke-width="1.5"/><line x1="460" y1="140" x2="460" y2="150" stroke="#ef4444" stroke-width="1.5"/><line x1="520" y1="140" x2="520" y2="150" stroke="#ef4444" stroke-width="1.5"/><text x="490" y="160" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">Pitch p</text><text x="520" y="190" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">p = v_parallel · T = (2πmv cosθ) / (qB)</text><text x="520" y="208" fill="#065f46" font-size="10" text-anchor="middle">r = (mv sinθ) / (qB)</text></svg>',
        caption:
          'Figure 4.10: (Left) Uniform circular motion for v ⟂ B. (Right) Helical trajectory for arbitrary entry angle θ.',
        guide:
          'In helical motion, perpendicular velocity v_perp creates circular rotation, while parallel velocity v_parallel translates the particle along field lines.'
      },
      importantPoints: [
        'Radius of circular path: r = mv / (qB) = p / (qB) = √(2mK) / (qB).',
        'Time period: T = 2πm / (qB) is completely INDEPENDENT of velocity v and radius r.',
        'Cyclotron frequency: f = qB / (2πm).',
        'Helical pitch: p = v_parallel · T = (2π m v cosθ) / (qB).'
      ]
    },
    {
      heading: '3. Crossed Fields & The Velocity Selector (Wien Filter)',
      paragraphs: [
        'Consider a region where uniform electric field E and uniform magnetic field B are applied mutually perpendicular to each other, and perpendicular to the direction of a moving beam of charged particles (E ⟂ B ⟂ v).',
        '• Let the charge +q move along the +x axis with velocity v = v î.',
        '• Let the electric field be directed along the +y axis: E = E ĵ ⇒ F_electric = qE ĵ (directed upward).',
        '• Let the magnetic field be directed along the +z axis: B = B k̂ ⇒ F_magnetic = q (v î × B k̂) = -qvB ĵ (directed downward).',
        'Condition for Undeflected Motion: For the charged particle to pass through the crossed-field region along a straight line without any lateral deflection, the upward electric force must exactly balance the downward magnetic force:',
        'q E = q v B ⇒ v = E / B.',
        'Key Properties for NEET:',
        '1. Only charged particles having the exact velocity v = E / B will emerge undeflected through the exit slit.',
        '2. Particles with speed v > E/B experience stronger magnetic force (F_m > F_e) and are deflected downward.',
        '3. Particles with speed v < E/B experience stronger electric force (F_e > F_m) and are deflected upward.',
        '4. The selection condition v = E / B is completely INDEPENDENT of the charge q, mass m, and sign of the particle!'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="230" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="190" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="42" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Velocity Selector (Crossed Fields E ⟂ B ⟂ v)</text><line x1="80" y1="110" x2="620" y2="110" stroke="#059669" stroke-width="2.5" marker-end="url(#arr-flow-green)"/><text x="480" y="100" fill="#047857" font-size="11" font-weight="bold">v = E / B (Undeflected)</text><path d="M 80 110 Q 300 110 580 60" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3"/><text x="590" y="60" fill="#2563eb" font-size="10" font-weight="bold">v &lt; E/B (F_e &gt; F_m)</text><path d="M 80 110 Q 300 110 580 160" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3"/><text x="590" y="165" fill="#b91c1c" font-size="10" font-weight="bold">v &gt; E/B (F_m &gt; F_e)</text><circle cx="280" cy="110" r="8" fill="#f59e0b" stroke="#d97706" stroke-width="1.5"/><text x="280" y="114" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">+q</text><line x1="280" y1="110" x2="280" y2="70" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-flow)"/><text x="295" y="80" fill="#1e40af" font-size="10" font-weight="bold">F_e = qE</text><line x1="280" y1="110" x2="280" y2="150" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arr-flow-red)"/><text x="295" y="145" fill="#b91c1c" font-size="10" font-weight="bold">F_m = qvB</text><text x="350" y="195" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">Balance Condition: qE = qvB ⇒ Selected Speed v = E / B</text></svg>',
        caption:
          'Figure 4.11: Operation of a Velocity Selector with balanced electric and magnetic forces.',
        guide:
          'Only particles with speed matching v = E/B experience zero net force (F_net = 0) and exit through the slit.'
      },
      importantPoints: [
        'Crossed fields: E ⟂ B ⟂ v.',
        'Balance condition: F_e = F_m ⇒ qE = qvB ⇒ v = E / B.',
        'The selected speed v = E/B is completely independent of charge q and mass m.',
        'Faster particles (v > E/B) deflect towards magnetic force; slower particles (v < E/B) deflect towards electric force.'
      ]
    },
    {
      heading: '4. The Cyclotron: Construction, Resonance & Operational Limitations',
      paragraphs: [
        'Principle and Architecture: Invented by E.O. Lawrence and M.S. Livingston in 1934, the cyclotron accelerates charged particles (protons, deuterons, α-particles) to very high kinetic energies.',
        'Construction:',
        '1. Two hollow semicircular D-shaped metal chambers called "Dees" (D₁ and D₂) placed with their straight diametrical edges facing each other across a narrow gap.',
        '2. An intense uniform magnetic field B applied perpendicularly to the plane of the dees by a powerful electromagnet.',
        '3. A high-frequency alternating electric voltage source (Radio-Frequency Oscillator) connected across the narrow gap between the dees.',
        'Operational Step-by-Step Mechanism:',
        'Step 1: An ion source S placed at the center emits a positive ion (e.g. proton). At that instant, Dee D₂ is negative and Dee D₁ is positive, so the ion accelerates across the gap into D₂ with increased speed v₁.',
        'Step 2: Inside the hollow metal dee D₂, the electric field is ZERO (Faraday cage / shielding effect). The perpendicular magnetic field B bends the ion into a semicircular path of radius r₁ = mv₁ / qB.',
        'Step 3: The time taken to traverse the semicircle is t = T/2 = πm / qB. Because this time t is INDEPENDENT of speed and radius, the ion reaches the gap at the exact moment the RF oscillator reverses dee polarities (D₁ becomes negative, D₂ positive).',
        'Step 4: The ion accelerates across the gap again, gaining additional kinetic energy ΔK = qV, enters D₁ with higher speed v₂, traces a larger semicircle r₂ = mv₂ / qB, and repeats the spiral process.',
        'Cyclotron Resonance Condition & Maximum Energy:',
        '• Resonance condition: The frequency of the RF oscillator must match the cyclotron frequency: f_osc = f_c = (q B) / (2π m).',
        '• Maximum speed at dee perimeter (radius R): v_max = (q B R) / m.',
        '• Maximum Kinetic Energy: K_max = ½ m v_max² = (q² B² R²) / (2 m).',
        'Crucial Limitations for NEET:',
        '1. Cannot accelerate neutral particles (neutrons) because they experience no Lorentz force.',
        '2. Relativistic Limit: At very high speeds approaching the speed of light c, the relativistic mass increases according to m = m₀ / √(1 - v²/c²). This causes the time period T = 2πm/qB to increase, causing the particle to fall out of resonance with the fixed-frequency RF electric field.',
        '3. Electrons cannot be accelerated in a standard cyclotron because their extremely small mass (m_e ≈ 9.1 × 10⁻³¹ kg) causes their velocity to reach relativistic speeds almost instantly, immediately breaking resonance.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="38" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Cyclotron Architecture & Semicircular Acceleration Spiral</text><g transform="translate(350, 115)"><path d="M -10 -70 A 70 70 0 0 0 -10 70 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><text x="-50" y="5" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Dee D₁</text><path d="M 10 -70 A 70 70 0 0 1 10 70 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><text x="50" y="5" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Dee D₂</text><circle cx="0" cy="0" r="4" fill="#ef4444"/><path d="M 0 0 Q -10 -15 -10 -25 A 25 25 0 0 1 10 -25 Q 10 35 -10 35 A 45 45 0 0 1 10 45 Q 10 -55 -10 -55 A 65 65 0 0 1 65 -20 L 85 -20" fill="none" stroke="#ef4444" stroke-width="1.5"/><line x1="-10" y1="-85" x2="10" y2="-85" stroke="#64748b" stroke-width="2"/><line x1="-10" y1="-85" x2="-10" y2="-70" stroke="#64748b" stroke-width="2"/><line x1="10" y1="-85" x2="10" y2="-70" stroke="#64748b" stroke-width="2"/><rect x="-30" y="-102" width="60" height="18" fill="#fee2e2" stroke="#ef4444" stroke-width="1" rx="3"/><text x="0" y="-89" fill="#991b1b" font-size="9" font-weight="bold" text-anchor="middle">RF Oscillator</text></g><text x="350" y="215" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">Resonance: f_osc = qB / (2πm)   |   K_max = (q² B² R²) / (2m)</text></svg>',
        caption:
          'Figure 4.12: Cyclotron schematic showing D-shaped dees, RF gap acceleration, and expanding spiral trajectory.',
        guide:
          'Magnetic field B bends particles into semicircles; oscillating electric field E in the gap accelerates them twice per revolution.'
      },
      importantPoints: [
        'Cyclotron resonance frequency: f = qB / (2πm).',
        'Maximum Kinetic Energy: K_max = (q² B² R²) / (2m).',
        'Electric field inside hollow metal dees is zero (Faraday shielding); acceleration happens ONLY in the gap.',
        'Cyclotron cannot accelerate neutral particles (neutrons) or electrons (due to immediate relativistic mass increase).'
      ]
    }
  ],

  formulae: [
    {
      title: 'Lorentz Force & Magnetic Force',
      formula: '\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B}), \\quad F_m = q v B \\sin\\theta, \\quad \\vec{F}_m \\cdot \\vec{v} = 0 \\implies W = 0',
      variables: 'q = electric charge (C), v = velocity (m/s), B = magnetic field (T), θ = angle between v and B'
    },
    {
      title: 'Circular Orbit Radius & Momentum Relations',
      formula: 'r = \\frac{m v}{q B} = \\frac{p}{q B} = \\frac{\\sqrt{2 m K}}{q B} = \\frac{1}{B}\\sqrt{\\frac{2 m V_{\\text{acc}}}{q}}',
      variables: 'p = momentum, K = kinetic energy, V_acc = accelerating potential difference'
    },
    {
      title: 'Time Period & Cyclotron Frequency',
      formula: 'T = \\frac{2\\pi m}{q B}, \\quad f_c = \\frac{q B}{2\\pi m}, \\quad \\omega = \\frac{q B}{m}',
      variables: 'T is completely independent of particle speed v and orbit radius r'
    },
    {
      title: 'Helical Motion & Velocity Selector',
      formula: 'r = \\frac{m v \\sin\\theta}{q B}, \\quad p_{\\text{pitch}} = \\frac{2\\pi m v \\cos\\theta}{q B}, \\quad v_{\\text{selected}} = \\frac{E}{B}',
      variables: 'p_pitch = axial advance in one revolution, v_selected = undeflected speed in crossed fields'
    },
    {
      title: 'Cyclotron Maximum Kinetic Energy',
      formula: 'K_{\\text{max}} = \\frac{q^2 B^2 R^2}{2 m}',
      variables: 'R = exit radius of the Dees (m), m = mass of particle (kg)'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="230" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="190" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="42" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Comparison of Key Charged Particle Radii in Magnetic Fields</text><rect x="50" y="65" width="180" height="120" fill="#ffffff" stroke="#93c5fd" stroke-width="1" rx="6"/><text x="140" y="85" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Same Velocity v</text><text x="140" y="110" fill="#1e3a8a" font-size="11" text-anchor="middle">r ∝ m / q</text><text x="140" y="135" fill="#64748b" font-size="10" text-anchor="middle">r_p : r_d : r_α</text><text x="140" y="160" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">1 : 2 : 2</text><rect x="260" y="65" width="180" height="120" fill="#ffffff" stroke="#93c5fd" stroke-width="1" rx="6"/><text x="350" y="85" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Same Momentum p</text><text x="350" y="110" fill="#1e3a8a" font-size="11" text-anchor="middle">r ∝ 1 / q</text><text x="350" y="135" fill="#64748b" font-size="10" text-anchor="middle">r_p : r_d : r_α</text><text x="350" y="160" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">2 : 2 : 1</text><rect x="470" y="65" width="180" height="120" fill="#ffffff" stroke="#93c5fd" stroke-width="1" rx="6"/><text x="560" y="85" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Same Accel. Voltage V</text><text x="560" y="110" fill="#1e3a8a" font-size="11" text-anchor="middle">r ∝ √(m / q)</text><text x="560" y="135" fill="#64748b" font-size="10" text-anchor="middle">r_p : r_d : r_α</text><text x="560" y="160" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">1 : √2 : 1</text></svg>',
    caption: 'High-yield NEET comparison ratios for proton (p), deuteron (d), and alpha particle (α) orbits in magnetic fields.'
  },

  neetImportantPoints: [
    'Work done by a static magnetic field on any moving charged particle is strictly ZERO: W = 0, ΔK = 0, speed is constant.',
    'Orbit period T = 2πm / (qB) is completely independent of particle speed v and radius r.',
    'For proton (m, e), deuteron (2m, e), and alpha particle (4m, 2e) accelerated through same potential V: r_p : r_d : r_α = 1 : √2 : 1.',
    'In a velocity selector, the transmitted speed v = E/B is completely independent of charge q and mass m.',
    'A cyclotron cannot accelerate neutral particles (neutrons) or electrons (due to rapid relativistic mass shift).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking magnetic force can speed up or slow down a charged particle.',
      correctFact:
        'Because magnetic force is always perpendicular to velocity (F ⟂ v), it can only change the direction of velocity, never the speed or kinetic energy.',
      whyItMattersForNEET: 'Extremely popular assertion-reason trap in NEET UG.'
    },
    {
      commonConfusion: 'Confusing the cyclotron frequency of a proton vs an alpha particle.',
      correctFact:
        'f_c = qB / (2πm). For proton: q/m = e/m. For alpha particle: q/m = 2e/4m = e/(2m). Thus, f_proton = 2 × f_alpha.',
      whyItMattersForNEET: 'Direct numerical ratio question.'
    },
    {
      commonConfusion: 'Assuming electric field accelerates the particle inside the cyclotron dees.',
      correctFact:
        'The electric field exists ONLY in the narrow gap between the dees. Inside the metal dees, electric field is ZERO (shielding), and only the magnetic field bends the orbit.',
      whyItMattersForNEET: 'Frequently tested conceptual question.'
    }
  ],

  quickRevision: [
    'Lorentz Force: F = q(E + v × B); F_m = qvB sinθ; F_m ⟂ v ⇒ W = 0, K = const.',
    'Circular path (v ⟂ B): r = mv / (qB) = p / (qB) = √(2mK) / (qB).',
    'Time period T = 2πm / (qB) and frequency f = qB / (2πm) are independent of v and r.',
    'Helical path: r = mv sinθ / (qB); Pitch p = (2πmv cosθ) / (qB).',
    'Velocity selector: v = E / B.',
    'Cyclotron: f_osc = qB / (2πm); K_max = q²B²R² / (2m).'
  ],

  practiceQuestions: [
    {
      id: 'lor-p1',
      question:
        'A proton and an alpha particle enter a uniform magnetic field perpendicularly with the same kinetic energy. The ratio of the radii of their circular paths (r_p : r_α) is:',
      options: ['1 : 1', '1 : 2', '2 : 1', '1 : √2'],
      correctAnswer: 0,
      explanation:
        'Formula: r = √(2 m K) / (q B). For constant K and B: r ∝ √m / q. For proton: √m_p / q_p = √m / e. For alpha particle: √m_α / q_α = √(4m) / (2e) = 2√m / 2e = √m / e. Therefore, r_p / r_α = (√m/e) / (√m/e) = 1 : 1.'
    },
    {
      id: 'lor-p2',
      question:
        'An alternating electric field of frequency f = 10 MHz is applied across the dees of a cyclotron of radius R = 60 cm. The operating magnetic field needed to accelerate deuterons (m = 3.34 × 10⁻²⁷ kg, q = 1.6 × 10⁻¹⁹ C) is:',
      options: ['1.31 T', '0.66 T', '2.62 T', '0.33 T'],
      correctAnswer: 0,
      explanation:
        'Cyclotron frequency formula: f = (q B) / (2π m) ⇒ B = (2π m f) / q. Given: f = 10 × 10⁶ Hz, m = 3.34 × 10⁻²⁷ kg, q = 1.6 × 10⁻¹⁹ C. Calculation: B = (2 × 3.1416 × 3.34 × 10⁻²⁷ × 10⁷) / (1.6 × 10⁻¹⁹) = (20.98 × 10⁻²⁰) / (1.6 × 10⁻¹⁹) = 2.098 / 1.6 ≈ 1.31 T.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2023,
      question:
        'An electron and a proton having the same momentum enter perpendicularly into a uniform magnetic field. The ratio of the radii of their circular trajectories is:',
      options: ['1 : 1', 'm_e : m_p', 'm_p : m_e', '√(m_e) : √(m_p)'],
      correctAnswer: 0,
      explanation:
        'Orbit radius formula in terms of momentum: r = p / (q B). Since both momentum p and magnetic field B are identical, r ∝ 1/q. Since the magnitude of charge on an electron and proton is identical (|q_e| = |q_p| = e), the ratio of their radii is r_e / r_p = 1 : 1.',
      conceptTested: 'Charged Particle Motion in Magnetic Field: Radius Dependence on Momentum'
    },
    {
      exam: 'NEET UG',
      year: 2020,
      question:
        'A charged particle having charge q and mass m moves with velocity v in a uniform magnetic field B. If the velocity is perpendicular to the magnetic field, the time period of revolution of the particle is:',
      options: ['2πm / (qB)', '2πq / (mB)', '2πB / (qm)', 'qB / (2πm)'],
      correctAnswer: 0,
      explanation:
        'For circular motion: qvB = mv²/r ⇒ r = mv/(qB). Time period T = 2πr / v = 2π(mv/qB)/v = 2πm / (qB).',
      conceptTested: 'Time Period Independence in Cyclotron Motion'
    }
  ]
};
