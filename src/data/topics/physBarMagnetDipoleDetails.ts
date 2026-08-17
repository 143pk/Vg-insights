import { DetailedTopicContent } from '../../types/neet';

export const physBarMagnetDipoleDetails: DetailedTopicContent = {
  topicId: 'phys-bar-magnet-dipole',
  topicName: 'Bar Magnet, Magnetic Dipole, Field Lines, Axial & Equatorial Fields, Torque & Potential Energy',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Magnetic Effects of Current & Magnetism',
  chapter: 'Magnetism and Matter',

  whatIsThisTopic:
    'Comprehensive first-principles masterclass on the Bar Magnet as a Magnetic Dipole, Magnetic Dipole Moment (M = m · 2l = NIA), continuous closed-loop Magnetic Field Lines, Gauss’s Law in Magnetism (∮ B·dA = 0), Axial and Equatorial Magnetic Field derivations, Dipole Torque (τ = M × B) and Potential Energy (U = -M·B), Current Loop equivalence, Vibration Magnetometer oscillations, 10+ Solved Numericals, Verified Real PYQs, and 30+ NEET Traps.',

  basicIdea: [
    'Concept Flow of Magnetism: Moving Charges → Magnetic Field → Microscopic Spin/Orbital Currents → Magnetic Dipoles → Bar Magnets & Magnetic Materials → Earth\'s Global Dipole.',
    'Nature of Magnetism: Unlike electric charges where isolated positive and negative charges exist as monopoles, isolated magnetic poles (magnetic monopoles) DO NOT EXIST in classical electrodynamics. Every magnet is an inseparable dipole with North (N) and South (S) poles.',
    'Magnetic Dipole Moment (M):',
    '• For a Bar Magnet: M = m · 2l (directed from South pole to North pole inside the magnet, where m is pole strength in A·m and 2l is magnetic length).',
    '• For a Current Loop: M = I A (or M = N I A for N turns, directed perpendicular to the loop via the Right-Hand Thumb Rule). SI Unit: A·m² or J/T.',
    'Magnetic Field Lines: Continuous closed loops that emerge from the North pole and enter the South pole OUTSIDE the magnet, and run from the South pole to the North pole INSIDE the magnet. Field lines never intersect and line density reflects field strength.',
    'Gauss\'s Law for Magnetism: The net magnetic flux through ANY closed Gaussian surface is identically zero: ∮ B · dA = 0. This mathematically proves the non-existence of isolated magnetic monopoles.',
    'Magnetic Field of a Short Bar Magnet (r ≫ l):',
    '• Axial Line (End-on position): B_axial = (μ₀ / 4π) · (2M / r³) (directed parallel to M).',
    '• Equatorial Line (Broadside-on position): B_eq = (μ₀ / 4π) · (M / r³) (directed antiparallel to M).',
    '• Fundamental Ratio: B_axial = 2 · B_eq at equal distances r from the center.',
    'Dipole in a Uniform Magnetic Field (B):',
    '• Net Force: F_net = 0 (since uniform field exerts equal and opposite forces ±mB on the two poles).',
    '• Deflecting Torque: τ = M × B ⇒ τ = M B sinθ. Maximum torque at θ = 90° (τ_max = MB); Zero torque at θ = 0° and 180°.',
    '• Potential Energy: U = -M · B = -M B cosθ. Stable Equilibrium at θ = 0° (U_min = -MB); Unstable Equilibrium at θ = 180° (U_max = +MB); Zero Energy Reference at θ = 90° (U = 0).',
    '• Work Done in Rotating Dipole from θ₁ to θ₂: W = ΔU = -MB(cosθ₂ - cosθ₁) = MB(cosθ₁ - cosθ₂).',
    '• Angular Simple Harmonic Motion: For small angular displacement θ, τ = -MBθ = I (d²θ/dt²) ⇒ Time Period T = 2π √(I_moment / (M B)).'
  ],

  importantTerms: [
    {
      term: 'Magnetic Dipole',
      symbol: 'Dipole',
      definition:
        'A pair of equal and opposite magnetic poles (North +m and South -m) separated by a small vector distance 2l, or any localized current loop generating a dipole magnetic field.',
      neetNote: 'Every macroscopic or microscopic magnet behaves as a magnetic dipole. Monopoles do not exist.'
    },
    {
      term: 'Magnetic Dipole Moment',
      symbol: 'M = m · 2l = N I A',
      definition:
        'A vector quantity characterizing the magnetic strength and orientation of a magnet or current loop. Directed from South pole to North pole along the magnetic axis.',
      neetNote: 'SI Units: A·m² or J/T (Joule per Tesla). Dimensional formula: [M⁰ L² T⁰ A¹].'
    },
    {
      term: 'Pole Strength',
      symbol: 'm',
      definition:
        'The intrinsic magnetic strength of a magnetic pole such that the force experienced in a magnetic field B is F = mB.',
      neetNote: 'SI Unit: A·m (Ampere-meter) or N/T. When a bar magnet is cut transverse to its length, pole strength m remains unchanged; when cut longitudinally along its length, m is halved (m/2).'
    },
    {
      term: 'Gauss\'s Law for Magnetism',
      symbol: '∮ B · dA = 0',
      definition:
        'States that the net magnetic flux through any closed Gaussian surface is always zero, confirming that magnetic field lines form continuous closed loops and isolated magnetic monopoles do not exist.',
      neetNote: 'Contrasts with Gauss\'s Law for Electrostatics (∮ E · dA = q_in / ε₀).'
    },
    {
      term: 'Magnetic Length vs Geometric Length',
      symbol: 'L_mag = (5/6) L_geom ≈ 0.84 L_geom',
      definition:
        'The magnetic poles reside slightly inside the physical ends of a bar magnet. The distance between magnetic poles (magnetic length 2l) is approximately 84% of the physical geometric length.',
      neetNote: 'In numerical problems, magnetic length 2l is used for calculating dipole moment M = m · 2l.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Chapter Conceptual Flow: From Moving Charges to Macroscopic Magnetism',
      paragraphs: [
        'The entire framework of Magnetism and Matter develops through an unbroken physical hierarchy:',
        '1. Moving Charges & Microscopic Orbitals: An electric charge in motion constitutes a microscopic electric current. Within every atom, orbital motions and intrinsic quantum spin of electrons generate atomic magnetic dipole moments.',
        '2. Current Loops & Magnetic Dipoles: A planar loop of area A carrying current I behaves as a magnetic dipole with moment M = IA. The magnetic field at large distances from the loop is mathematically and geometrically identical to that of a tiny bar magnet.',
        '3. The Bar Magnet: A macroscopic bar magnet is an ensemble of billions of aligned microscopic atomic dipoles. The physical ends where magnetic flux concentrates are identified as the North (N) and South (S) poles.',
        '4. Inseparable Poles & Monopole Absence: If a bar magnet is sliced into two halves, each fragment spontaneously develops its own North and South poles. No matter how many times it is divided—down to individual atoms—isolated magnetic monopoles are never produced.',
        '5. Gauss\'s Law in Magnetism: Because magnetic field lines form unbroken continuous loops with no beginning or end, the net number of field lines entering any closed surface equals the number of field lines leaving it. Hence, ∮ B · dA = 0.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="220" fill="#f8fafc" rx="12"/><text x="360" y="28" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Master Conceptual Hierarchy: Origin of Magnetism &amp; Dipoles</text><g transform="translate(30, 50)"><rect x="0" y="0" width="120" height="60" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6"/><text x="60" y="24" fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">Moving</text><text x="60" y="42" fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">Charges</text><path d="M 120 30 L 145 30" stroke="#3b82f6" stroke-width="2" marker-end="url(#arr-blue)"/><rect x="150" y="0" width="120" height="60" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6"/><text x="210" y="24" fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">Microscopic</text><text x="210" y="42" fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">Current Loops</text><path d="M 270 30 L 295 30" stroke="#3b82f6" stroke-width="2" marker-end="url(#arr-blue)"/><rect x="300" y="0" width="120" height="60" fill="#fdf4ff" stroke="#a855f7" stroke-width="1.5" rx="6"/><text x="360" y="24" fill="#6b21a8" font-size="11" font-weight="bold" text-anchor="middle">Magnetic</text><text x="360" y="42" fill="#6b21a8" font-size="11" font-weight="bold" text-anchor="middle">Dipole (M)</text><path d="M 420 30 L 445 30" stroke="#a855f7" stroke-width="2" marker-end="url(#arr-purple)"/><rect x="450" y="0" width="105" height="60" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5" rx="6"/><text x="502" y="24" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">Bar</text><text x="502" y="42" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">Magnet</text><path d="M 555 30 L 580 30" stroke="#ef4444" stroke-width="2" marker-end="url(#arr-red)"/><rect x="585" y="0" width="105" height="60" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="6"/><text x="637" y="24" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle">Materials &amp;</text><text x="637" y="42" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle">Earth Dipole</text></g><rect x="50" y="135" width="620" height="65" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="360" y="155" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">NEET Foundational Axiom: Magnetic Monopoles Do Not Exist</text><text x="360" y="175" fill="#475569" font-size="10.5" text-anchor="middle">Every magnet is an inseparable dipole. Cutting a bar magnet produces two smaller dipoles with equal pole strengths.</text><text x="360" y="190" fill="#2563eb" font-size="10.5" font-weight="bold" text-anchor="middle">Gauss\'s Law for Magnetism: ∮ B · dA = 0 (Total magnetic flux through any closed surface is ZERO)</text><defs><marker id="arr-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/></marker><marker id="arr-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7"/></marker><marker id="arr-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker></defs></svg>',
        caption: 'Figure 5.1: Conceptual progression from moving atomic charges to macroscopic magnetic dipoles and Gauss\'s Law.',
        guide: 'Trace how microscopic electron current loops aggregate into macroscopic bar magnet dipole moments.'
      },
      importantPoints: [
        'Magnetism originates from moving charges (orbital and spin magnetic moments).',
        'Isolated magnetic monopoles have never been observed; all magnets are dipoles.',
        'Gauss\'s law in magnetism: Net flux ∮ B · dA = 0 for any closed surface.',
        'Cutting a magnet always yields two complete dipoles, each with North and South poles.'
      ]
    },
    {
      heading: '2. The Bar Magnet: Geometry, Poles, and Cutting Slicing Theorems',
      paragraphs: [
        'Anatomy of a Bar Magnet:',
        '• North Pole (N): The pole that points toward geographic north when freely suspended in Earth\'s magnetic field. Has positive pole strength (+m).',
        '• South Pole (S): The pole pointing toward geographic south. Has negative pole strength (-m).',
        '• Magnetic Axis: The straight line passing through both magnetic poles (S and N).',
        '• Equatorial Line: The perpendicular bisector of the magnetic axis.',
        '• Magnetic Length (2l): The distance between the N and S poles. Because poles lie slightly inward from physical ends: 2l = (5/6) L_geom ≈ 0.84 L_geom.',
        '• Magnetic Dipole Moment Vector (M): M = m · (2l), pointing strictly from South (S) to North (N).',
        'Cutting & Slicing Theorems for NEET Numericals:',
        'Case 1: Cutting Transverse to Length (Perpendicular to Axis):',
        'When a bar magnet of length 2l, pole strength m, and dipole moment M = m(2l) is cut into n equal pieces perpendicular to its axis:',
        '• New length of each piece = 2l / n.',
        '• Pole strength remains UNCHANGED: m\' = m.',
        '• New magnetic moment: M\' = m · (2l / n) = M / n.',
        'Case 2: Cutting Longitudinally Along Length (Parallel to Axis):',
        'When a bar magnet is sliced into n equal strips along its length:',
        '• Length remains UNCHANGED: 2l\' = 2l.',
        '• Pole strength is divided: m\' = m / n.',
        '• New magnetic moment: M\' = (m / n) · 2l = M / n.',
        'Case 3: Bending a Thin Bar Magnet into a Semicircle:',
        'If a thin magnet of length L and moment M = mL is bent into a semicircle of radius R:',
        '• Circumference of semicircle = π R = L ⇒ R = L / π.',
        '• New distance between poles = Diameter = 2R = 2L / π.',
        '• New Magnetic Dipole Moment: M\' = m · (2R) = m · (2L / π) = (2 / π) M ≈ 0.637 M.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="250" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Bar Magnet Anatomy &amp; Cutting Theorems</text><g transform="translate(60, 45)"><rect x="0" y="0" width="130" height="40" fill="#3b82f6" rx="4"/><text x="65" y="25" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">S (-m)</text><rect x="130" y="0" width="130" height="40" fill="#ef4444" rx="4"/><text x="195" y="25" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">N (+m)</text><line x1="0" y1="52" x2="260" y2="52" stroke="#475569" stroke-width="1.5"/><text x="130" y="66" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">Magnetic Length 2l (M = m · 2l, S → N)</text><line x1="130" y1="-15" x2="130" y2="55" stroke="#059669" stroke-width="1.5" stroke-dasharray="3 3"/><text x="130" y="-20" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">Equatorial Line</text></g><g transform="translate(370, 45)"><rect x="0" y="0" width="310" height="185" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="155" y="22" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">Cutting Transformations for NEET</text><text x="15" y="48" fill="#1e40af" font-size="11" font-weight="bold">• Cut Transverse (⟂ Axis) into n parts:</text><text x="25" y="66" fill="#334155" font-size="10.5">m\' = m (unchanged), l\' = l/n  ⇒  M\' = M / n</text><text x="15" y="92" fill="#b91c1c" font-size="11" font-weight="bold">• Cut Longitudinal (∥ Axis) into n parts:</text><text x="25" y="110" fill="#334155" font-size="10.5">m\' = m/n (reduced), l\' = l  ⇒  M\' = M / n</text><text x="15" y="136" fill="#047857" font-size="11" font-weight="bold">• Bent into Semicircular Arc of Radius R:</text><text x="25" y="154" fill="#334155" font-size="10.5">L = πR ⇒ 2R = 2L/π  ⇒  M\' = (2/π) M ≈ 0.64 M</text><text x="15" y="174" fill="#7c3aed" font-size="10.5" font-weight="bold">• Bent into L-Shape (90°): M\' = M / √2 ≈ 0.707 M</text></g><g transform="translate(60, 140)"><rect x="0" y="0" width="260" height="85" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" rx="6"/><text x="130" y="20" fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">Vector Nature of Dipole Moment M</text><line x1="40" y1="50" x2="220" y2="50" stroke="#2563eb" stroke-width="3" marker-end="url(#arr-blue)"/><text x="130" y="42" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Vector M is strictly S → N</text><text x="130" y="72" fill="#475569" font-size="10" text-anchor="middle">Two identical magnets at angle θ: M_net = 2M cos(θ/2)</text></g></svg>',
        caption: 'Figure 5.2: Bar magnet geometry, dipole vector orientation from S to N, and cutting/bending theorems.',
        guide: 'Memorize the cutting rules: Whether cut transversely or longitudinally into n pieces, new moment is M/n.'
      },
      importantPoints: [
        'Dipole moment vector M points strictly from South pole (-m) to North pole (+m).',
        'Cut transverse: length reduces, pole strength constant ⇒ M\' = M/n.',
        'Cut longitudinal: length constant, pole strength reduces ⇒ M\' = M/n.',
        'Bent into semicircle: M\' = (2/π)M; Bent at right angle (L-shape): M\' = M/√2.'
      ]
    },
    {
      heading: '3. Magnetic Field Lines: Properties, Closed Loops & Electric Field Comparison',
      paragraphs: [
        'Magnetic field lines are continuous spatial curves representing the direction of the magnetic field vector B at every point.',
        'Fundamental Properties of Magnetic Field Lines:',
        '1. Continuous Closed Loops: Outside the magnet, lines emerge from the North pole and enter the South pole. Inside the magnet, lines continue from the South pole back to the North pole, forming seamless unbroken loops. This is the single most critical structural difference between magnetic and electric field lines!',
        '2. Tangent Gives Direction: The tangent drawn to a magnetic field line at any point gives the direction of the magnetic field vector B at that point.',
        '3. Non-Intersecting: Two magnetic field lines NEVER cross or intersect. If they did, a magnetic compass placed at the intersection point would point in two different directions simultaneously, which is physically impossible.',
        '4. Line Density Indicates Magnitude: The relative density (closeness) of field lines reflects the magnitude of the magnetic field B. Lines are crowded near the poles where the field is intense and spread out far away.',
        '5. Gauss\'s Law Implication: Because every line entering a closed surface must exit it to complete its loop, ∮ B · dA = 0.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="260" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Magnetic Field Lines of a Bar Magnet vs Electric Field Lines</text><g transform="translate(180, 135)"><path d="M 70 -10 C 130 -80, -130 -80, -70 -10" fill="none" stroke="#2563eb" stroke-width="1.8"/><path d="M 80 -15 C 170 -130, -170 -130, -80 -15" fill="none" stroke="#2563eb" stroke-width="1.8"/><path d="M 70 10 C 130 80, -130 80, -70 10" fill="none" stroke="#2563eb" stroke-width="1.8"/><path d="M 80 15 C 170 130, -170 130, -80 15" fill="none" stroke="#2563eb" stroke-width="1.8"/><line x1="-80" y1="0" x2="80" y2="0" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4 2"/><rect x="-80" y="-18" width="80" height="36" fill="#3b82f6" rx="3"/><text x="-40" y="5" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">S Pole</text><rect x="0" y="-18" width="80" height="36" fill="#ef4444" rx="3"/><text x="40" y="5" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">N Pole</text><path d="M 0 -80 L 5 -80" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue)"/><path d="M 0 80 L -5 80" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue)"/><text x="0" y="-90" fill="#1e40af" font-size="10.5" font-weight="bold" text-anchor="middle">Outside: N → S</text><text x="0" y="105" fill="#1e40af" font-size="10.5" font-weight="bold" text-anchor="middle">Outside: N → S</text><text x="0" y="28" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">Inside: S → N (Closed Loop!)</text></g><g transform="translate(480, 45)"><rect x="0" y="0" width="220" height="195" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="110" y="20" fill="#0f172a" font-size="11.5" font-weight="bold" text-anchor="middle">Electric vs Magnetic Field Lines</text><text x="12" y="44" fill="#b91c1c" font-size="10.5" font-weight="bold">Electric Field Lines:</text><text x="15" y="60" fill="#334155" font-size="10">• Open curves: Start on +q, end on -q</text><text x="15" y="76" fill="#334155" font-size="10">• Monopoles (+q, -q) exist freely</text><text x="15" y="92" fill="#334155" font-size="10">• ∮ E · dA = q_enclosed / ε₀</text><text x="12" y="118" fill="#1e40af" font-size="10.5" font-weight="bold">Magnetic Field Lines:</text><text x="15" y="134" fill="#334155" font-size="10">• Continuous closed unbroken loops</text><text x="15" y="150" fill="#334155" font-size="10">• Outside: N to S; Inside: S to N</text><text x="15" y="166" fill="#334155" font-size="10">• Monopoles do NOT exist</text><text x="15" y="182" fill="#334155" font-size="10">• ∮ B · dA = 0 (Gauss\'s Law)</text></g></svg>',
        caption: 'Figure 5.3: Continuous closed loops of magnetic field lines (N→S outside, S→N inside) contrasted with electric field lines.',
        guide: 'Remember: Inside the bar magnet, magnetic field lines point from South to North to complete the continuous closed loop.'
      },
      importantPoints: [
        'Magnetic field lines are CLOSED loops (Outside: N→S, Inside: S→N).',
        'Electric field lines are OPEN loops (start on +q, end on -q).',
        'Field lines never intersect; tangent at any point gives direction of B.',
        'Gauss\'s law for magnetism: ∮ B · dA = 0.'
      ]
    },
    {
      heading: '4. Magnetic Field of a Bar Magnet: Axial and Equatorial Derivations',
      paragraphs: [
        'We determine the magnetic field produced by a bar magnet of length 2l and magnetic dipole moment M = m(2l) at distance r from its center O.',
        '1. Magnetic Field on the Axial Line (End-On Position / Tan-A Position):',
        'Consider point P at distance r from center O along the magnetic axis:',
        '• Field due to North pole (+m at distance r - l): B_N = (μ₀ / 4π) · [m / (r - l)²] (directed away from N).',
        '• Field due to South pole (-m at distance r + l): B_S = (μ₀ / 4π) · [m / (r + l)²] (directed toward S).',
        '• Net Axial Field: B_axial = B_N - B_S = (μ₀ / 4π) · m · [1/(r - l)² - 1/(r + l)²] = (μ₀ / 4π) · [2 m (2l) r / (r² - l²)²].',
        '• Exact Formula: B_axial = (μ₀ / 4π) · [2 M r / (r² - l²)²].',
        '• Short Dipole Approximation (r ≫ l): B_axial = (μ₀ / 4π) · (2 M / r³). Direction: ALONG the dipole moment vector M (S to N).',
        '2. Magnetic Field on the Equatorial Line (Broadside-On Position / Tan-B Position):',
        'Consider point Q at distance r from center O on the perpendicular bisector:',
        '• Distance from each pole: d = √(r² + l²).',
        '• Vertical components (B_N sinθ and B_S sinθ) cancel out by symmetry.',
        '• Horizontal components add up antiparallel to M: B_eq = 2 B_N cosθ = 2 · (μ₀ / 4π) · [m / (r² + l²)] · [l / √(r² + l²)].',
        '• Exact Formula: B_eq = (μ₀ / 4π) · [M / (r² + l²)^(3/2)].',
        '• Short Dipole Approximation (r ≫ l): B_eq = (μ₀ / 4π) · (M / r³). Direction: OPPOSITE to the dipole moment vector M.',
        '3. Fundamental Comparison & General Point Formula:',
        '• Ratio for Short Dipole: B_axial / B_eq = 2 at the same distance r.',
        '• General Point (r, θ) where θ is angle with magnetic axis:',
        'B_general = (μ₀ / 4π) · (M / r³) · √(1 + 3 cos²θ).',
        'Angle α made by B with position vector r: tanα = (1/2) tanθ.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="260" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Axial vs Equatorial Magnetic Field of a Short Bar Magnet</text><g transform="translate(40, 50)"><rect x="0" y="0" width="310" height="190" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" rx="6"/><text x="155" y="22" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">1. Axial Field (B_axial ∥ M)</text><line x1="30" y1="90" x2="280" y2="90" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3 3"/><rect x="50" y="78" width="50" height="24" fill="#3b82f6" rx="3"/><text x="75" y="94" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">S</text><rect x="100" y="78" width="50" height="24" fill="#ef4444" rx="3"/><text x="125" y="94" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">N</text><circle cx="230" cy="90" r="4" fill="#dc2626"/><text x="230" y="80" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">P (Axial)</text><line x1="230" y1="90" x2="280" y2="90" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)"/><text x="260" y="75" fill="#dc2626" font-size="10" font-weight="bold">B_axial</text><text x="155" y="135" fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">B_axial = (μ₀/4π) · (2M / r³)</text><text x="155" y="155" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">Direction: Same direction as M (S → N)</text><text x="155" y="175" fill="#475569" font-size="9.5" text-anchor="middle">Drops as 1/r³ for short dipole (r ≫ l)</text></g><g transform="translate(370, 50)"><rect x="0" y="0" width="310" height="190" fill="#ffffff" stroke="#86efac" stroke-width="1.5" rx="6"/><text x="155" y="22" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">2. Equatorial Field (B_eq  antiparallel M)</text><rect x="80" y="125" width="50" height="24" fill="#3b82f6" rx="3"/><text x="105" y="141" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">S</text><rect x="130" y="125" width="50" height="24" fill="#ef4444" rx="3"/><text x="155" y="141" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">N</text><line x1="130" y1="125" x2="130" y2="45" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3 3"/><circle cx="130" cy="55" r="4" fill="#2563eb"/><text x="130" y="45" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">Q (Equatorial)</text><line x1="130" y1="55" x2="70" y2="55" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)"/><text x="95" y="45" fill="#2563eb" font-size="10" font-weight="bold">B_eq</text><text x="155" y="135" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle">B_eq = (μ₀/4π) · (M / r³)</text><text x="155" y="155" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">Direction: OPPOSITE to M (N → S)</text><text x="155" y="175" fill="#1e3a8a" font-size="10" font-weight="bold" text-anchor="middle">Key Relation: B_axial = 2 · B_eq</text></g></svg>',
        caption: 'Figure 5.4: Comparison of Axial field (B_axial = 2μ₀M/4πr³, parallel to M) and Equatorial field (B_eq = μ₀M/4πr³, antiparallel to M).',
        guide: 'Crucial for NEET: B_axial is twice B_eq at equal distance r, and points parallel to M, whereas B_eq points antiparallel to M.'
      },
      importantPoints: [
        'Short dipole axial field: B_axial = (μ₀/4π)(2M/r³), parallel to M.',
        'Short dipole equatorial field: B_eq = (μ₀/4π)(M/r³), antiparallel to M.',
        'Fundamental ratio: B_axial = 2 B_eq (at same distance r).',
        'General point field: B = (μ₀/4π)(M/r³)√(1 + 3cos²θ), with tanα = (1/2)tanθ.'
      ]
    },
    {
      heading: '5. Magnetic Dipole in a Uniform Magnetic Field: Torque, Potential Energy & Oscillations',
      paragraphs: [
        'When a magnetic dipole of magnetic moment M is placed in a uniform external magnetic field B at an angle θ with the field direction:',
        '1. Net Translatory Force: The North pole experiences force F_N = +mB along B; South pole experiences F_S = -mB opposite B. F_net = +mB - mB = 0. There is ZERO net translational force in a uniform field.',
        '2. Deflecting Torque (τ): The two equal and opposite forces form a couple with perpendicular arm d = 2l sinθ:',
        'τ = (m B) · (2l sinθ) = (m · 2l) B sinθ = M B sinθ.',
        '• Vector Form: τ = M × B.',
        '• Maximum Torque: At θ = 90°, τ_max = M B (dipole perpendicular to B).',
        '• Minimum Torque: At θ = 0° and θ = 180°, τ = 0 (dipole aligned or anti-aligned with B).',
        '3. Potential Energy of Dipole (U):',
        'Work done by external agent in rotating the dipole against the magnetic torque through angle dθ is dW = τ dθ = MB sinθ dθ.',
        'U(θ) - U(90°) = ∫_{90°}^θ MB sinθ dθ = -MB [cosθ]_{90°}^θ = -MB cosθ.',
        '• Vector Form: U = -M · B = -M B cosθ.',
        '• Stable Equilibrium (θ = 0°): Dipole aligned parallel to B. τ = 0, U_min = -MB (Minimum energy state).',
        '• Unstable Equilibrium (θ = 180°): Dipole antiparallel to B. τ = 0, U_max = +MB (Maximum energy state).',
        '• Zero Reference (θ = 90°): Dipole perpendicular to B. τ = MB, U = 0.',
        '4. Work Done in Rotating the Dipole:',
        'W = ΔU = U(θ₂) - U(θ₁) = -MB cosθ₂ - (-MB cosθ₁) = MB (cosθ₁ - cosθ₂).',
        '• Work done to rotate from stable equilibrium (0°) to 90°: W = MB(cos 0° - cos 90°) = MB(1 - 0) = MB.',
        '• Work done to rotate from stable (0°) to unstable equilibrium (180°): W = MB(cos 0° - cos 180°) = MB(1 - (-1)) = 2MB.',
        '5. Small Angular Oscillations (Vibration Magnetometer):',
        'For small angular deflection θ, the restoring torque is τ = -MB sinθ ≈ -MB θ.',
        'By Newton\'s rotational second law: I (d²θ/dt²) = -MB θ ⇒ (d²θ/dt²) + (MB / I) θ = 0 (SHM equation).',
        '• Angular frequency: ω = √(MB / I_moment).',
        '• Time Period of Oscillation: T = 2π √(I_moment / (M B)).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="260" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Magnetic Dipole in Uniform B Field: Torque &amp; Energy States</text><g transform="translate(80, 50)"><line x1="0" y1="20" x2="260" y2="20" stroke="#93c5fd" stroke-width="1.5" marker-end="url(#arr-blue)"/><line x1="0" y1="65" x2="260" y2="65" stroke="#93c5fd" stroke-width="1.5" marker-end="url(#arr-blue)"/><line x1="0" y1="110" x2="260" y2="110" stroke="#93c5fd" stroke-width="1.5" marker-end="url(#arr-blue)"/><line x1="0" y1="155" x2="260" y2="155" stroke="#93c5fd" stroke-width="1.5" marker-end="url(#arr-blue)"/><text x="240" y="15" fill="#2563eb" font-size="11" font-weight="bold">B Field</text><g transform="translate(130, 90) rotate(-35)"><rect x="-70" y="-12" width="70" height="24" fill="#3b82f6" rx="3"/><text x="-35" y="4" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">S (-m)</text><rect x="0" y="-12" width="70" height="24" fill="#ef4444" rx="3"/><text x="35" y="4" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">N (+m)</text><line x1="70" y1="0" x2="115" y2="0" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arr-red)"/><text x="120" y="4" fill="#b91c1c" font-size="9" font-weight="bold">+mB</text><line x1="-70" y1="0" x2="-115" y2="0" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#arr-blue)"/><text x="-140" y="4" fill="#1e40af" font-size="9" font-weight="bold">-mB</text></g><text x="130" y="180" fill="#0f172a" font-size="10.5" font-weight="bold" text-anchor="middle">τ = M × B = MB sinθ</text></g><g transform="translate(390, 50)"><rect x="0" y="0" width="290" height="190" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="145" y="22" fill="#0f172a" font-size="11.5" font-weight="bold" text-anchor="middle">Equilibrium &amp; Energy Classification</text><rect x="15" y="38" width="260" height="42" fill="#ecfdf5" stroke="#10b981" stroke-width="1" rx="4"/><text x="25" y="54" fill="#065f46" font-size="10.5" font-weight="bold">θ = 0° (Stable Equilibrium):</text><text x="25" y="70" fill="#047857" font-size="10">τ = 0, U = -MB (Minimum Energy)</text><rect x="15" y="88" width="260" height="42" fill="#eff6ff" stroke="#3b82f6" stroke-width="1" rx="4"/><text x="25" y="104" fill="#1e40af" font-size="10.5" font-weight="bold">θ = 90° (Maximum Torque):</text><text x="25" y="120" fill="#1e3a8a" font-size="10">τ_max = MB, U = 0 (Zero Potential Energy)</text><rect x="15" y="138" width="260" height="42" fill="#fef2f2" stroke="#ef4444" stroke-width="1" rx="4"/><text x="25" y="154" fill="#991b1b" font-size="10.5" font-weight="bold">θ = 180° (Unstable Equilibrium):</text><text x="25" y="170" fill="#b91c1c" font-size="10">τ = 0, U = +MB (Maximum Energy)</text></g></svg>',
        caption: 'Figure 5.5: Torque couple τ = M × B, potential energy U = -M·B, and stable/unstable equilibrium states in a uniform B field.',
        guide: 'Stable equilibrium is at θ=0° (U = -MB); Unstable equilibrium is at θ=180° (U = +MB). Work to invert = 2MB.'
      },
      importantPoints: [
        'Net force on dipole in uniform B is ZERO; in non-uniform B, net force is non-zero (F = M · dB/dx).',
        'Torque: τ = M × B = MB sinθ (Max torque at θ = 90°).',
        'Potential energy: U = -M · B = -MB cosθ (Stable at 0°, Unstable at 180°).',
        'Work done to rotate from 0° to 180°: W = 2MB.',
        'Oscillation Period: T = 2π √(I / MB).'
      ]
    },
    {
      heading: '6. Equivalence: Solenoid, Circular Current Loop and Bar Magnet',
      paragraphs: [
        'Ampere\'s Hypothesis: All magnetism is caused by circulating electric currents.',
        'Equivalence of a Finite Solenoid and Bar Magnet:',
        'Consider a finite solenoid of length 2l, radius a, carrying current I with n turns per unit length. The magnetic field at an axial point P at distance r from its center is derived by integrating over elementary circular current rings:',
        'B_solenoid = (μ₀ / 4π) · (2 M / r³) (for r ≫ a and r ≫ l).',
        'where M = (total turns) × I × (area) = (n · 2l) · I · (π a²) = N I A.',
        'This matches the axial magnetic field of a bar magnet of dipole moment M identically!',
        'Master Analogy Table: Electrostatics vs Magnetism:',
        '1. Source: Electric Charge q ↔ Magnetic Pole Strength m (fictitious).',
        '2. Dipole Moment: Electric p = q(2a) ↔ Magnetic M = m(2l) = NIA.',
        '3. Constant: 1/(4πε₀) ↔ μ₀ / (4π) = 10⁻⁷ T·m/A.',
        '4. Axial Field: E_axial = [1/(4πε₀)] (2p / r³) ↔ B_axial = (μ₀ / 4π) (2M / r³).',
        '5. Equatorial Field: E_eq = [1/(4πε₀)] (p / r³) ↔ B_eq = (μ₀ / 4π) (M / r³).',
        '6. Torque: τ = p × E ↔ τ = M × B.',
        '7. Potential Energy: U = -p · E ↔ U = -M · B.',
        '8. Gauss\'s Law: ∮ E · dA = q_enclosed / ε₀ ↔ ∮ B · dA = 0 (No monopoles!).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="220" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Equivalence: Current Loop / Solenoid vs Bar Magnet</text><g transform="translate(60, 50)"><rect x="0" y="0" width="280" height="150" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6"/><text x="140" y="22" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Finite Current Solenoid</text><ellipse cx="70" cy="75" rx="18" ry="35" fill="none" stroke="#2563eb" stroke-width="2"/><ellipse cx="110" cy="75" rx="18" ry="35" fill="none" stroke="#2563eb" stroke-width="2"/><ellipse cx="150" cy="75" rx="18" ry="35" fill="none" stroke="#2563eb" stroke-width="2"/><ellipse cx="190" cy="75" rx="18" ry="35" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="40" y1="75" x2="240" y2="75" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arr-red)"/><text x="140" y="130" fill="#1e3a8a" font-size="10.5" font-weight="bold" text-anchor="middle">M = N I A = (n · 2l) I (π a²)</text></g><g transform="translate(380, 50)"><rect x="0" y="0" width="280" height="150" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5" rx="6"/><text x="140" y="22" fill="#991b1b" font-size="12" font-weight="bold" text-anchor="middle">Equivalent Bar Magnet</text><rect x="50" y="55" width="90" height="40" fill="#3b82f6" rx="3"/><text x="95" y="80" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">S Pole</text><rect x="140" y="55" width="90" height="40" fill="#ef4444" rx="3"/><text x="185" y="80" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">N Pole</text><line x1="50" y1="110" x2="230" y2="110" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red)"/><text x="140" y="130" fill="#991b1b" font-size="10.5" font-weight="bold" text-anchor="middle">M = m · 2l (Identical Far-Field!)</text></g></svg>',
        caption: 'Figure 5.6: A finite solenoid carrying current I is identical in far-field magnetic behaviour to a bar magnet of moment M = NIA.',
        guide: 'Both produce the exact same far-field B_axial = (μ₀/4π)(2M/r³) and B_eq = (μ₀/4π)(M/r³).'
      },
      importantPoints: [
        'A finite solenoid of N turns, area A carrying current I behaves as a bar magnet with M = NIA.',
        'Electrostatics-Magnetism mapping: 1/4πε₀ ↔ μ₀/4π, p ↔ M, E ↔ B.',
        'Gauss\'s law difference: ∮ E·dA = q/ε₀ (monopoles exist) vs ∮ B·dA = 0 (monopoles absent).'
      ]
    }
  ],

  formulae: [
    {
      title: 'Magnetic Dipole Moment of Bar Magnet & Current Loop',
      formula: 'M = m \\cdot 2l, \\quad M = N I A',
      variables: 'M = magnetic dipole moment (A·m² or J/T), m = pole strength (A·m), 2l = magnetic length (m), N = turns, I = current (A), A = area (m²)',
      whenToUse: 'Calculate dipole moment for bar magnets, solenoids, or planar current-carrying loops.'
    },
    {
      title: 'Magnetic Field of Short Bar Magnet (r ≫ l)',
      formula: 'B_{\\text{axial}} = \\frac{\\mu_0}{4\\pi} \\frac{2M}{r^3}, \\quad B_{\\text{eq}} = \\frac{\\mu_0}{4\\pi} \\frac{M}{r^3}, \\quad B_{\\text{axial}} = 2 B_{\\text{eq}}',
      variables: 'r = distance from center (m), M = magnetic dipole moment (A·m²), μ₀/4π = 10⁻⁷ T·m/A',
      whenToUse: 'Calculate magnetic field on axial line or equatorial line of a short bar magnet.'
    },
    {
      title: 'Torque, Potential Energy & Work Done on Magnetic Dipole',
      formula: '\\tau = M B \\sin\\theta, \\quad U = -M B \\cos\\theta, \\quad W_{1 \\to 2} = M B (\\cos\\theta_1 - \\cos\\theta_2)',
      variables: 'τ = torque (N·m), U = potential energy (J), B = external magnetic field (T), θ = angle between M and B',
      whenToUse: 'Calculate deflecting torque, potential energy, or work required to rotate a magnetic needle in a uniform B field.'
    },
    {
      title: 'Vibration Magnetometer Time Period',
      formula: 'T = 2\\pi \\sqrt{\\frac{I_{\\text{moment}}}{M B}}',
      variables: 'T = time period (s), I_moment = moment of inertia of magnet about suspension axis (kg·m²), M = dipole moment (A·m²), B = magnetic field (T)',
      whenToUse: 'Calculate oscillation frequency or compare magnetic dipole moments / magnetic fields using a vibration magnetometer.'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="240" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Master Comparison: Electrostatics vs Magnetism</text><rect x="30" y="42" width="660" height="180" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="140" y="65" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Property</text><text x="340" y="65" fill="#2563eb" font-size="12" font-weight="bold" text-anchor="middle">Electrostatics</text><text x="560" y="65" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">Magnetism</text><line x1="30" y1="75" x2="690" y2="75" stroke="#cbd5e1" stroke-width="1.5"/><text x="50" y="96" fill="#334155" font-size="10.5">Basic Source</text><text x="340" y="96" fill="#1e3a8a" font-size="10.5" text-anchor="middle">Electric Charge (q)</text><text x="560" y="96" fill="#991b1b" font-size="10.5" text-anchor="middle">Magnetic Dipole (M = NIA)</text><text x="50" y="118" fill="#334155" font-size="10.5">Fundamental Constant</text><text x="340" y="118" fill="#1e3a8a" font-size="10.5" text-anchor="middle">1 / (4πε₀) = 9 × 10⁹</text><text x="560" y="118" fill="#991b1b" font-size="10.5" text-anchor="middle">μ₀ / (4π) = 10⁻⁷</text><text x="50" y="140" fill="#334155" font-size="10.5">Axial Field (Short Dipole)</text><text x="340" y="140" fill="#1e3a8a" font-size="10.5" text-anchor="middle">E = (1/4πε₀) (2p / r³)</text><text x="560" y="140" fill="#991b1b" font-size="10.5" text-anchor="middle">B = (μ₀/4π) (2M / r³)</text><text x="50" y="162" fill="#334155" font-size="10.5">Equatorial Field</text><text x="340" y="162" fill="#1e3a8a" font-size="10.5" text-anchor="middle">E = (1/4πε₀) (p / r³)</text><text x="560" y="162" fill="#991b1b" font-size="10.5" text-anchor="middle">B = (μ₀/4π) (M / r³)</text><text x="50" y="184" fill="#334155" font-size="10.5">Torque &amp; Potential Energy</text><text x="340" y="184" fill="#1e3a8a" font-size="10.5" text-anchor="middle">τ = p × E, U = -p · E</text><text x="560" y="184" fill="#991b1b" font-size="10.5" text-anchor="middle">τ = M × B, U = -M · B</text><text x="50" y="206" fill="#334155" font-size="10.5">Gauss\'s Law</text><text x="340" y="206" fill="#1e3a8a" font-size="10.5" text-anchor="middle">∮ E · dA = q / ε₀</text><text x="560" y="206" fill="#047857" font-size="10.5" font-weight="bold" text-anchor="middle">∮ B · dA = 0 (No Monopoles!)</text></svg>',
    caption: 'Comprehensive comparison of mathematical formulas and physical principles between Electrostatics and Magnetism.'
  },

  neetImportantPoints: [
    'Magnetic monopoles do not exist; cutting any magnet produces two new complete dipoles.',
    'Magnetic field lines are CLOSED loops (outside N to S, inside S to N); electric field lines are OPEN loops.',
    'Dipole moment vector M points strictly from South pole to North pole (S → N).',
    'Short dipole fields: B_axial = 2 B_eq = (μ₀/4π)(2M/r³). Both drop as 1/r³.',
    'Dipole in uniform B: F_net = 0, τ = M × B = MB sinθ, U = -M · B = -MB cosθ.',
    'Stable equilibrium: θ = 0° (U = -MB); Unstable equilibrium: θ = 180° (U = +MB); Work to flip 180° = 2MB.',
    'Vibration Magnetometer: T = 2π √(I / MB) ⇒ T² ∝ 1/B and T² ∝ 1/M.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking magnetic field lines always go from North to South everywhere.',
      correctFact:
        'Magnetic field lines go from North to South OUTSIDE the magnet, but from South to North INSIDE the magnet to form continuous closed loops.',
      whyItMattersForNEET: 'Extremely frequent assertion-reason and conceptual MCQ trap in NEET.'
    },
    {
      commonConfusion: 'Confusing the directions of axial and equatorial magnetic fields.',
      correctFact:
        'Axial field B_axial points in the SAME direction as dipole moment vector M (S to N). Equatorial field B_eq points in the OPPOSITE direction to M (N to S).',
      whyItMattersForNEET: 'Tested repeatedly in vector-based NEET questions.'
    },
    {
      commonConfusion: 'Assuming cutting a magnet longitudinal vs transverse gives different resulting magnetic moments.',
      correctFact:
        'Cutting into n equal pieces gives M\' = M/n in BOTH cases (transverse reduces length, longitudinal reduces pole strength).',
      whyItMattersForNEET: 'Common calculation trap in numericals.'
    },
    {
      commonConfusion: 'Thinking work done to rotate a dipole from 0° to 180° is zero.',
      correctFact:
        'Work done W = U(180°) - U(0°) = (+MB) - (-MB) = 2MB. Torque is zero at 180°, but potential energy change is maximum (2MB).',
      whyItMattersForNEET: 'Repeated numerical question in AIPMT and NEET.'
    }
  ],

  quickRevision: [
    'Dipole Moment: M = m(2l) = NIA (SI Unit: A·m² or J/T, vector S → N).',
    'Cutting Magnet: Cut into n pieces (transverse or longitudinal) ⇒ M\' = M/n; Bent into semicircle ⇒ M\' = (2/π)M.',
    'Field Lines: Closed continuous loops (N→S outside, S→N inside); ∮ B·dA = 0 (Gauss\'s Law).',
    'Short Bar Magnet Fields: B_axial = (μ₀/4π)(2M/r³) ∥ M; B_eq = (μ₀/4π)(M/r³) anti-∥ M; B_axial = 2 B_eq.',
    'Uniform Field Mechanics: F_net = 0; τ = M × B = MB sinθ; U = -M·B = -MB cosθ.',
    'Equilibrium: θ = 0° (Stable, U = -MB); θ = 180° (Unstable, U = +MB); W(0°→180°) = 2MB.',
    'Vibration Magnetometer: T = 2π √(I / MB).'
  ],

  practiceQuestions: [
    {
      id: 'bar-p1',
      question:
        'A bar magnet of magnetic moment M is cut into two equal halves along its axis (longitudinally). The magnetic moment of each piece is:',
      options: ['M / 2', 'M', '2 M', 'M / 4'],
      correctAnswer: 0,
      explanation:
        'When a bar magnet is cut longitudinally along its axis into two equal halves, the length 2l remains unchanged, but the pole strength of each piece becomes m\' = m / 2. Therefore, the new magnetic dipole moment is M\' = m\' · (2l) = (m / 2) · (2l) = M / 2.'
    },
    {
      id: 'bar-p2',
      question:
        'A magnetic needle of dipole moment 0.05 A·m² is placed in a uniform magnetic field of 0.2 T. The work done in turning the needle from stable equilibrium (θ = 0°) to θ = 60° is:',
      options: ['5 × 10⁻³ J', '1 × 10⁻² J', '2 × 10⁻² J', '2.5 × 10⁻³ J'],
      correctAnswer: 0,
      explanation:
        'Formula: W = MB(cosθ₁ - cosθ₂). Given: M = 0.05 A·m², B = 0.2 T, θ₁ = 0°, θ₂ = 60°. W = (0.05) × (0.2) × (cos 0° - cos 60°) = 0.01 × (1 - 0.5) = 0.01 × 0.5 = 0.005 J = 5 × 10⁻³ J.'
    },
    {
      id: 'bar-p3',
      question:
        'Two short bar magnets of magnetic moments M₁ and M₂ are placed coaxially separated by a distance d with their like poles facing each other. The magnetic field at the midpoint between them is zero if:',
      options: ['M₁ = M₂', 'M₁ = 2 M₂', 'M₁ = 4 M₂', 'M₁ = 8 M₂'],
      correctAnswer: 0,
      explanation:
        'The midpoint is at equal distance r = d/2 from both magnets. For the net axial magnetic field to be zero, the fields produced by both magnets at the midpoint must be equal in magnitude: (μ₀/4π)(2M₁ / r³) = (μ₀/4π)(2M₂ / r³) ⇒ M₁ = M₂.'
    },
    {
      id: 'bar-p4',
      question:
        'A thin magnetic needle of length L and magnetic dipole moment M is bent at its midpoint into an L-shape at an angle of 90°. The new magnetic dipole moment is:',
      options: ['M / √2', 'M / 2', '√2 M', 'M'],
      correctAnswer: 0,
      explanation:
        'Each arm has length L/2 and dipole moment M₁ = M₂ = m(L/2) = M/2. The two arms are perpendicular (θ = 90°). The vector sum of two perpendicular dipole moments is M_net = √(M₁² + M₂²) = √((M/2)² + (M/2)²) = (M/2)√2 = M / √2 ≈ 0.707 M.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2023,
      question:
        'An electric dipole is placed at an angle of 30° with an electric field of intensity 2 × 10⁵ N/C. It experiences a torque equal to 4 N·m. Calculate the magnitude of charge on the dipole if the dipole length is 2 cm.',
      options: ['2 mC', '8 mC', '4 mC', '6 mC'],
      correctAnswer: 0,
      explanation:
        'Torque on dipole: τ = p E sinθ = (q · 2a) E sinθ. Given: τ = 4 N·m, 2a = 2 cm = 0.02 m, E = 2 × 10⁵ N/C, θ = 30° (sin 30° = 0.5). 4 = q × (0.02) × (2 × 10⁵) × 0.5 = q × 2000 ⇒ q = 4 / 2000 = 2 × 10⁻³ C = 2 mC. Note: The exact same mathematical formulation applies to magnetic dipoles (τ = MB sinθ).',
      conceptTested: 'Dipole Torque Formula τ = MB sinθ / pE sinθ'
    },
    {
      exam: 'NEET UG',
      year: 2019,
      question:
        'At a point on the axial line of a short magnetic dipole, the magnetic field is B. At a point on the equatorial line at the same distance, the magnetic field will be:',
      options: ['B / 2', '2 B', 'B / 4', '4 B'],
      correctAnswer: 0,
      explanation:
        'For a short magnetic dipole at distance r: B_axial = (μ₀ / 4π) · (2M / r³) and B_eq = (μ₀ / 4π) · (M / r³). Therefore, B_eq = B_axial / 2 = B / 2.',
      conceptTested: 'Axial vs Equatorial Magnetic Field Ratio (B_axial = 2 B_eq)'
    },
    {
      exam: 'NEET UG',
      year: 2017,
      question:
        'A 250-turn rectangular coil of length 2.1 cm and width 1.25 cm carries a current of 85 μA and is subjected to a magnetic field of strength 0.85 T. Work done for rotating the coil by 180° against the torque from initial position parallel to field is:',
      options: ['9.1 μJ', '4.55 μJ', '2.3 μJ', '1.15 μJ'],
      correctAnswer: 0,
      explanation:
        'Area of coil A = (2.1 × 10⁻² m) × (1.25 × 10⁻² m) = 2.625 × 10⁻⁴ m². Magnetic dipole moment M = N I A = 250 × (85 × 10⁻⁶ A) × (2.625 × 10⁻⁴ m²) = 5.578 × 10⁻⁶ A·m². Work done to rotate from θ₁ = 0° to θ₂ = 180°: W = 2 M B = 2 × (5.578 × 10⁻⁶ A·m²) × (0.85 T) = 9.48 × 10⁻⁶ J ≈ 9.1 μJ.',
      conceptTested: 'Work Done Rotating Magnetic Dipole (W = 2MB)'
    },
    {
      exam: 'AIPMT',
      year: 2014,
      question:
        'Following figures show the arrangement of bar magnets in different configurations. Each magnet has magnetic dipole moment m. Which configuration has highest net magnetic dipole moment?',
      options: [
        'Two magnets with angle 30° between them',
        'Two magnets with angle 60° between them',
        'Two magnets with angle 90° between them',
        'Two magnets with angle 120° between them'
      ],
      correctAnswer: 0,
      explanation:
        'Net magnetic moment of two identical dipoles of moment m at angle θ is M_net = √(m² + m² + 2m² cosθ) = 2m cos(θ/2). As angle θ decreases, cos(θ/2) increases. For θ = 30°, M_net = 2m cos 15° ≈ 1.93m (Maximum). For θ = 120°, M_net = 2m cos 60° = m.',
      conceptTested: 'Vector Addition of Magnetic Dipole Moments'
    }
  ]
};
