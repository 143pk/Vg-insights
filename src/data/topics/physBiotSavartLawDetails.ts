import { DetailedTopicContent } from '../../types/neet';

export const physBiotSavartLawDetails: DetailedTopicContent = {
  topicId: 'phys-biot-savart-law',
  topicName: 'Biot-Savart Law, Magnetic Fields of Currents & Axial Loop Fields',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Magnetic Effects of Current & Magnetism',
  chapter: 'Moving Charges and Magnetism',

  whatIsThisTopic:
    'Comprehensive first-principles mastery of magnetism arising from moving electric charges, the nature of the magnetic field vector B (Tesla), magnetic field lines and their closed-loop topology, the Biot-Savart Law for differential current elements (dB = (μ₀/4π)(I dl sinθ / r²)), and its fundamental applications: straight current-carrying conductors, circular current loops at their centre (B = μ₀ I / 2R), circular arcs, and on the axial line of a circular loop (B = μ₀ N I R² / 2(R² + x²)^(3/2)), establishing the magnetic dipole equivalence.',

  basicIdea: [
    'Conceptual Pathway of Magnetism: Moving Electric Charge → Steady Electric Current → Creation of Magnetic Field B → Magnetic Lorentz Force on other moving charges/currents → Circular/Helical Trajectories → Torque on Current Loops → Magnetic Dipole Moment → Precision Moving Coil Galvanometer.',
    'Nature of Magnetism: Magnetism is not an independent fundamental entity produced by isolated magnetic charges (magnetic monopoles do not exist in nature). Rather, magnetic fields are the relativistic consequence of moving electric charges (electric currents).',
    'Magnetic Field Vector (B): A region in space around a moving charge or steady current where another moving charge experiences a velocity-dependent magnetic force. SI Unit: Tesla (T) = N/(A·m) = Wb/m² = kg/(s²·A). Practical CGS Unit: Gauss (1 T = 10⁴ G).',
    'Magnetic Field Lines: Continuous closed loops without starting or ending points (Gauss\'s Law for Magnetism: ∮ B · dA = 0). Tangent gives direction of B; line density represents field strength. They NEVER intersect.',
    'Biot-Savart Law (Microscopic Formula): An electric current element I dl creates an infinitesimal magnetic field dB at distance r: dB = (μ₀ / 4π) · (I dl × r̂) / r² = (μ₀ / 4π) · (I dl sinθ / r²), where μ₀ = 4π × 10⁻⁷ T·m/A is the permeability of free space.',
    'Straight Conductor: Magnetic field at perpendicular distance d from a straight wire carrying current I is B = (μ₀ I / 4π d)(sinθ₁ + sinθ₂). For an infinitely long wire, θ₁ = θ₂ = 90° ⇒ B = μ₀ I / (2π d). Direction given by Right-Hand Thumb Rule (concentric circles).',
    'Circular Current Loop at Centre: B_centre = μ₀ I / (2 R). For an N-turn coil: B_centre = μ₀ N I / (2 R). For a circular arc subtending angle φ (in radians) at centre: B_arc = (μ₀ I / 4π R) · φ.',
    'Circular Loop on Axis: At distance x along the axis from centre of loop of radius R with N turns: B_axis = μ₀ N I R² / [2 (R² + x²)^(3/2)]. At centre (x = 0), this reduces to B_centre = μ₀ N I / 2R. At far axial distances (x ≫ R), B_axis ≈ (μ₀ / 4π) · [2 (N I · π R²) / x³] = (μ₀ / 4π) · (2 m / x³), identical to the axial field of an electric dipole!'
  ],

  importantTerms: [
    {
      term: 'Magnetic Field Vector (B)',
      symbol: 'B',
      definition:
        'A vector field that exerts a force on moving electric charges and current-carrying conductors. SI unit: Tesla (T).',
      neetNote: '1 Tesla = 1 N / (A·m) = 1 Wb/m² = 10⁴ Gauss. Earth\'s magnetic field is ~10⁻⁴ T (~0.5 Gauss).'
    },
    {
      term: 'Permeability of Free Space (μ₀)',
      symbol: 'μ₀',
      definition:
        'A fundamental constant quantifying the capability of a vacuum to support magnetic fields: μ₀ = 4π × 10⁻⁷ T·m/A (or H/m, N/A²).',
      neetNote: 'Electromagnetic wave speed relation: c = 1 / √(μ₀ ε₀). Therefore μ₀ ε₀ = 1/c² = 1/(3 × 10⁸)².'
    },
    {
      term: 'Current Element (I dl)',
      symbol: 'I dl',
      definition:
        'A vector quantity representing infinitesimal length dl of a conductor carrying steady current I in the direction of current flow.',
      neetNote: 'The current I is scalar, but the current element vector I dl is directed along the tangent to the wire.'
    },
    {
      term: 'Biot-Savart Law',
      symbol: 'dB = (μ₀/4π) (I dl × r̂) / r²',
      definition:
        'The fundamental law governing the magnetic field dB produced by an elementary current element I dl at a displacement r.',
      neetNote: 'Magnetic field dB is always perpendicular to BOTH the current element dl and the position vector r.'
    },
    {
      term: 'Right-Hand Thumb Rule',
      symbol: 'RHTR',
      definition:
        'Grasp the straight conductor in the right hand with the thumb pointing along current I; the curled fingers indicate the circular direction of magnetic field lines.',
      neetNote: 'Conversely, for a circular loop: curl right-hand fingers along current, and the outstretched thumb points along the magnetic field at the centre/axis.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Chapter Introduction & The Physical Architecture of Magnetism',
      paragraphs: [
        'In Electrostatics, stationary electric charges (q) create an electric field (E) and exert electrostatic Coulomb forces on each other. When electric charges are set into motion, they constitute an electric current (I = dq/dt). In 1820, Hans Christian Oersted made the historic discovery that a steady electric current deflects a nearby magnetic compass needle, proving that electric currents produce magnetic fields.',
        'What is Magnetism physically? Modern physics reveals that magnetic fields are the relativistic consequence of moving electric charges. An electric charge at rest produces ONLY an electric field (E ≠ 0, B = 0). A charge moving with constant velocity produces BOTH an electric field and a magnetic field (E ≠ 0, B ≠ 0). An accelerating charge radiates electromagnetic waves (E, B radiating outward at speed c).',
        'Why Magnetic Force Differs from Electric Force: Electric force (F_e = qE) acts along the electric field and can accelerate a charge from rest, changing both its speed and kinetic energy. Magnetic force (F_m = q(v × B)) acts perpendicular to both velocity v and magnetic field B. Consequently, a magnetic field CANNOT do work on a moving charge (W = 0); it only alters the direction of motion, never the speed or kinetic energy.',
        'The NEET Conceptual Flow: To master Moving Charges & Magnetism, understand the interconnected sequence: Moving Charge → Electric Current → Biot-Savart / Ampere Magnetic Field → Lorentz Force on moving charges → Circular/Helical orbits → Force on straight wires → Torque on loops & Dipoles → Moving Coil Galvanometer and meter conversions.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="20" y="20" width="660" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="10"/><text x="350" y="42" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Complete Conceptual Flow: Moving Charges & Magnetism</text><g transform="translate(30, 60)"><rect x="0" y="0" width="110" height="40" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" rx="6"/><text x="55" y="18" fill="#1e3a8a" font-size="10" font-weight="bold" text-anchor="middle">Moving Charge</text><text x="55" y="32" fill="#64748b" font-size="9" text-anchor="middle">(q at velocity v)</text><line x1="110" y1="20" x2="130" y2="20" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-flow)"/><rect x="130" y="0" width="110" height="40" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" rx="6"/><text x="185" y="18" fill="#1e3a8a" font-size="10" font-weight="bold" text-anchor="middle">Electric Current</text><text x="185" y="32" fill="#64748b" font-size="9" text-anchor="middle">(I = dq/dt)</text><line x1="240" y1="20" x2="260" y2="20" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-flow)"/><rect x="260" y="0" width="120" height="40" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" rx="6"/><text x="320" y="18" fill="#1e3a8a" font-size="10" font-weight="bold" text-anchor="middle">Magnetic Field B</text><text x="320" y="32" fill="#64748b" font-size="9" text-anchor="middle">(Biot-Savart / Ampere)</text><line x1="380" y1="20" x2="400" y2="20" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-flow)"/><rect x="400" y="0" width="110" height="40" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" rx="6"/><text x="455" y="18" fill="#1e3a8a" font-size="10" font-weight="bold" text-anchor="middle">Lorentz Force</text><text x="455" y="32" fill="#64748b" font-size="9" text-anchor="middle">(F = q v × B)</text><line x1="510" y1="20" x2="530" y2="20" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-flow)"/><rect x="530" y="0" width="110" height="40" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" rx="6"/><text x="585" y="18" fill="#1e3a8a" font-size="10" font-weight="bold" text-anchor="middle">Orbits & Dynamics</text><text x="585" y="32" fill="#64748b" font-size="9" text-anchor="middle">(Circles / Helices)</text></g><g transform="translate(30, 130)"><rect x="0" y="0" width="130" height="40" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="6"/><text x="65" y="18" fill="#065f46" font-size="10" font-weight="bold" text-anchor="middle">Conductor Force</text><text x="65" y="32" fill="#047857" font-size="9" text-anchor="middle">(F = I L × B)</text><line x1="130" y1="20" x2="160" y2="20" stroke="#10b981" stroke-width="2" marker-end="url(#arr-flow-green)"/><rect x="160" y="0" width="130" height="40" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="6"/><text x="225" y="18" fill="#065f46" font-size="10" font-weight="bold" text-anchor="middle">Parallel Currents</text><text x="225" y="32" fill="#047857" font-size="9" text-anchor="middle">(Attract / Repel)</text><line x1="290" y1="20" x2="320" y2="20" stroke="#10b981" stroke-width="2" marker-end="url(#arr-flow-green)"/><rect x="320" y="0" width="130" height="40" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="6"/><text x="385" y="18" fill="#065f46" font-size="10" font-weight="bold" text-anchor="middle">Torque on Loop</text><text x="385" y="32" fill="#047857" font-size="9" text-anchor="middle">(τ = m × B)</text><line x1="450" y1="20" x2="480" y2="20" stroke="#10b981" stroke-width="2" marker-end="url(#arr-flow-green)"/><rect x="480" y="0" width="160" height="40" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="6"/><text x="560" y="18" fill="#065f46" font-size="10" font-weight="bold" text-anchor="middle">Galvanometer</text><text x="560" y="32" fill="#047857" font-size="9" text-anchor="middle">(Ammeter & Voltmeter)</text></g><defs><marker id="arr-flow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/></marker><marker id="arr-flow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/></marker></defs></svg>',
        caption:
          'Figure 4.1: Complete structural roadmap of Moving Charges and Magnetism for NEET UG.',
        guide:
          'Trace the causal link: moving charges produce magnetic fields, which then exert magnetic forces and torques on other moving charges and coils.'
      },
      importantPoints: [
        'Stationary charge (v = 0) produces ONLY electric field E.',
        'Charge moving with uniform velocity produces BOTH electric field E and magnetic field B.',
        'Accelerated charge radiates electromagnetic energy in addition to producing E and B.',
        'Magnetic force does zero work: W = 0, power P = 0, speed & kinetic energy remain constant.'
      ]
    },
    {
      heading: '2. The Magnetic Field Vector (B), Field Lines & Right-Hand Thumb Rule',
      paragraphs: [
        'Magnetic Field Vector B: The magnetic field is a vector field B(r) defined at every point in space. When a test charge q moves with velocity v through this point, the magnetic force is F = q(v × B). The SI unit of B is the Tesla (T), named after Nikola Tesla. 1 Tesla = 1 Newton / (Ampere · meter) = 1 Weber / m².',
        'Magnetic Field Lines: To visualize the magnetic field in 3D space, Michael Faraday introduced magnetic field lines. Properties of magnetic field lines include:',
        '1. Continuous Closed Loops: Unlike electrostatic field lines (which originate on +q and terminate on -q), magnetic field lines form continuous closed loops without beginning or ending. This directly expresses Gauss\'s Law for Magnetism: ∮ B · dA = 0 (No magnetic monopoles exist).',
        '2. Direction: The tangent drawn to a magnetic field line at any point gives the direction of the magnetic field vector B at that point.',
        '3. Density represents Magnitude: The number of field lines crossing unit perpendicular area represents the magnitude (strength) of B. Closer lines signify stronger field.',
        '4. Non-Intersecting: Two magnetic field lines NEVER intersect. If they did, a magnetic compass placed at the intersection would point in two different directions simultaneously, which is physically impossible.',
        'Right-Hand Thumb Rule for Straight Conductors: Imagine holding the straight current-carrying wire in your right hand with your outstretched thumb pointing in the direction of the electric current I. The curled fingers circling the wire show the exact circular direction of the magnetic field lines (concentric circles around the wire).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="300" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="180" y="42" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">Straight Wire Field Lines</text><line x1="180" y1="55" x2="180" y2="195" stroke="#ef4444" stroke-width="4"/><polygon points="180,45 174,60 186,60" fill="#ef4444"/><text x="195" y="60" fill="#b91c1c" font-size="11" font-weight="bold">Current I</text><ellipse cx="180" cy="125" rx="60" ry="25" fill="none" stroke="#2563eb" stroke-width="2"/><ellipse cx="180" cy="125" rx="100" ry="40" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 238 128 L 242 120 L 246 128" fill="#2563eb"/><path d="M 122 122 L 118 130 L 114 122" fill="#2563eb"/><text x="180" y="205" fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">Concentric Closed Circles (B ∝ 1/r)</text><rect x="370" y="20" width="300" height="200" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="8"/><text x="520" y="42" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">Right-Hand Thumb Rule</text><line x1="520" y1="60" x2="520" y2="190" stroke="#ef4444" stroke-width="4"/><polygon points="520,50 514,65 526,65" fill="#ef4444"/><text x="540" y="65" fill="#991b1b" font-size="11" font-weight="bold">Thumb = I</text><path d="M 470 120 C 470 100, 570 100, 570 120 C 570 140, 470 140, 470 120" fill="none" stroke="#059669" stroke-width="2.5"/><polygon points="570,122 575,112 565,112" fill="#059669"/><text x="520" y="170" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Curled Fingers = Magnetic Field B</text><text x="520" y="205" fill="#065f46" font-size="11" text-anchor="middle">∮ B · dA = 0 (No Monopoles)</text></svg>',
        caption:
          'Figure 4.2: Magnetic field lines around a straight current wire and the Right-Hand Thumb Rule.',
        guide:
          'Field lines form closed concentric circles. Field density drops with radial distance (B ∝ 1/r).'
      },
      importantPoints: [
        'Magnetic field lines are closed continuous loops (no start or end points).',
        'Gauss\'s law for magnetism: ∮ B · dA = 0 implies magnetic monopoles do not exist.',
        'Tangent to a field line gives field vector B direction; lines never intersect.',
        'Right-hand thumb rule: Thumb along current I ⇒ Curled fingers indicate circular B direction.'
      ]
    },
    {
      heading: '3. Biot-Savart Law: Mathematical Formulation & Direction',
      paragraphs: [
        'In 1820, Jean-Baptiste Biot and Félix Savart experimentally determined the mathematical law governing the magnetic field produced by an elementary current element.',
        'Consider an infinitesimal current element I dl of a conductor carrying steady current I. The magnetic field dB produced by this element at a point P located at displacement vector r (where r is the distance and θ is the angle between I dl and r) is found experimentally to be:',
        '1. Directly proportional to current I: dB ∝ I',
        '2. Directly proportional to element length dl: dB ∝ dl',
        '3. Directly proportional to sinθ: dB ∝ sinθ',
        '4. Inversely proportional to the square of distance r: dB ∝ 1/r²',
        'Combining these relations in SI units: dB = (μ₀ / 4π) · (I dl sinθ / r²).',
        'Vector Form of Biot-Savart Law: dB = (μ₀ / 4π) · (I dl × r̂) / r² = (μ₀ / 4π) · (I dl × r) / r³.',
        'Direction of dB: The direction of dB is given by the vector cross product (I dl × r). It is perpendicular to the plane containing both the current element I dl and the position vector r. For a wire in the plane of the page, points to the right have field directed INTO the page (represented by ⊗), while points to the left have field directed OUT of the page (represented by ⊙).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="42" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Biot-Savart Law: Current Element Vector Geometry</text><path d="M 120 190 Q 150 120 180 60" fill="none" stroke="#94a3b8" stroke-width="3"/><line x1="140" y1="140" x2="160" y2="100" stroke="#ef4444" stroke-width="4"/><polygon points="163,94 154,103 164,107" fill="#ef4444"/><text x="120" y="115" fill="#b91c1c" font-size="12" font-weight="bold">I dl</text><line x1="150" y1="120" x2="480" y2="120" stroke="#2563eb" stroke-width="2" stroke-dasharray="5,4"/><circle cx="480" cy="120" r="5" fill="#1e40af"/><text x="495" y="125" fill="#1e40af" font-size="13" font-weight="bold">Point P</text><text x="310" y="112" fill="#2563eb" font-size="12" font-weight="bold">Displacement Vector r</text><path d="M 175 120 A 25 25 0 0 1 158 103" fill="none" stroke="#059669" stroke-width="2"/><text x="180" y="112" fill="#047857" font-size="12" font-weight="bold">θ</text><circle cx="480" cy="165" r="14" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/><line x1="472" y1="157" x2="488" y2="173" stroke="#dc2626" stroke-width="2"/><line x1="488" y1="157" x2="472" y2="173" stroke="#dc2626" stroke-width="2"/><text x="510" y="170" fill="#991b1b" font-size="12" font-weight="bold">dB (Into page ⊗)</text><text x="350" y="205" fill="#1e3a8a" font-size="13" font-weight="bold" text-anchor="middle">dB = (μ₀/4π) · (I dl × r̂) / r² = (μ₀/4π) · (I dl sinθ / r²)</text></svg>',
        caption:
          'Figure 4.3: Geometric representation of Biot-Savart Law for current element I dl and field dB at point P.',
        guide:
          'dB is perpendicular to the plane formed by I dl and r. When θ = 0° or 180° (along the wire axis), dB = 0.'
      },
      importantPoints: [
        'Formula: dB = (μ₀/4π) · (I dl sinθ / r²). Constant μ₀/4π = 10⁻⁷ T·m/A.',
        'At points lying along the axis of the current element (θ = 0° or 180°), dB = 0.',
        'Field dB is maximum when θ = 90°: dB_max = (μ₀/4π) · (I dl / r²).',
        'Biot-Savart law in magnetism is the magnetic analog of Coulomb\'s law in electrostatics.'
      ]
    },
    {
      heading: '4. Applications: Straight Wire, Circular Loop Centre & Axial Magnetic Fields',
      paragraphs: [
        '1. Finite and Infinite Straight Current-Carrying Wire: By integrating Biot-Savart contributions along a straight wire carrying current I, the magnetic field at perpendicular distance d from the wire subtending angles θ₁ and θ₂ at the ends is:',
        'B = (μ₀ I / 4π d) · (sinθ₁ + sinθ₂).',
        '• For an Infinitely Long Wire: θ₁ = 90°, θ₂ = 90° ⇒ B = (μ₀ I / 4π d)(1 + 1) = μ₀ I / (2π d).',
        '• For a Semi-Infinite Wire (point near one end): θ₁ = 90°, θ₂ = 0° ⇒ B = μ₀ I / (4π d).',
        '• Note: B ∝ 1/d for a straight wire, NOT 1/d² (1/d² is for a point charge in electrostatics).',
        '2. Circular Current Loop at its Centre: For a circular loop of radius R carrying current I, every element dl is perpendicular to the radial vector r = R (θ = 90°, sin 90° = 1). Integrating over the full circumference ∫ dl = 2π R yields:',
        'B_centre = (μ₀ I / 4π R²) · (2π R) = μ₀ I / (2 R). For an N-turn coil: B_centre = μ₀ N I / (2 R).',
        '• For a Circular Arc subtending angle φ (in radians): B_arc = (μ₀ I / 4π R) · φ = (φ / 2π) · B_centre.',
        '3. Magnetic Field on the Axis of a Circular Current Loop: Consider a circular loop of radius R with N turns carrying current I. At an axial point P at distance x from the loop centre, resolving components parallel and perpendicular to the axis reveals that perpendicular components cancel by circular symmetry, while axial components add up:',
        'B_axis = μ₀ N I R² / [2 (R² + x²)^(3/2)].',
        '• At Centre (x = 0): B = μ₀ N I R² / [2 (R²)³/²] = μ₀ N I / (2 R) (perfectly matches central formula!).',
        '• At Far Axial Distances (x ≫ R): R² + x² ≈ x² ⇒ B_axis ≈ μ₀ N I R² / (2 x³) = (μ₀ / 4π) · [2 (N I · π R²) / x³].',
        'Since Magnetic Dipole Moment of the loop is m = N I A = N I (π R²), we get B_axis = (μ₀ / 4π) · (2 m / x³). This proves that a current-carrying loop behaves exactly like a magnetic dipole of moment m = N I A!'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="300" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="180" y="40" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">Circular Loop: Centre Field</text><ellipse cx="180" cy="115" rx="65" ry="45" fill="none" stroke="#2563eb" stroke-width="3"/><path d="M 245 115 L 243 105 L 248 110" fill="#2563eb"/><text x="255" y="115" fill="#2563eb" font-size="10" font-weight="bold">I</text><circle cx="180" cy="115" r="4" fill="#ef4444"/><line x1="180" y1="115" x2="180" y2="70" stroke="#059669" stroke-width="1.5"/><text x="190" y="95" fill="#047857" font-size="11" font-weight="bold">R</text><line x1="180" y1="115" x2="180" y2="45" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arr-flow)"/><text x="180" y="180" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">B_centre = μ₀ N I / (2 R)</text><text x="180" y="205" fill="#64748b" font-size="11" text-anchor="middle">Direction: Right-Hand Curl Rule</text><rect x="370" y="20" width="300" height="200" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="8"/><text x="520" y="40" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">Circular Loop: Axial Field</text><ellipse cx="440" cy="115" rx="20" ry="45" fill="none" stroke="#059669" stroke-width="2.5"/><line x1="440" y1="115" x2="640" y2="115" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/><circle cx="580" cy="115" r="4" fill="#065f46"/><text x="580" y="105" fill="#065f46" font-size="11" font-weight="bold">P(x)</text><line x1="440" y1="115" x2="580" y2="115" stroke="#047857" stroke-width="2"/><text x="510" y="130" fill="#047857" font-size="11" font-weight="bold">x</text><line x1="580" y1="115" x2="635" y2="115" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arr-flow)"/><text x="615" y="105" fill="#b91c1c" font-size="11" font-weight="bold">B_axis</text><text x="520" y="180" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle">B_axis = μ₀ N I R² / 2(R² + x²)^(3/2)</text><text x="520" y="205" fill="#047857" font-size="11" text-anchor="middle">Far axis: B ≈ (μ₀/4π) · (2m/x³)</text></svg>',
        caption:
          'Figure 4.4: Magnetic field at the centre and on the axis of a circular current-carrying loop.',
        guide:
          'Right-hand curl rule: Curl fingers along loop current I ⇒ Thumb points in the direction of axial magnetic field B.'
      },
      importantPoints: [
        'Infinite straight wire: B = μ₀ I / (2π d). Inverse linear: B ∝ 1/d.',
        'Loop centre: B = μ₀ N I / (2 R). Direct ratio B_centre / B_axis = (1 + x²/R²)^(3/2).',
        'Circular arc subtending angle φ: B_arc = (μ₀ I / 4π R) · φ (φ must be in radians!).',
        'Far axial field matches electric dipole field: B_axis = (μ₀/4π)(2m/x³) with m = NIA.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Biot-Savart Law (Differential Form)',
      formula: 'd\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I d\\vec{l} \\times \\hat{r}}{r^2} \\implies dB = \\frac{\\mu_0}{4\\pi} \\frac{I dl \\sin\\theta}{r^2}',
      variables: 'μ₀ = 4π × 10⁻⁷ T·m/A, I = current (A), dl = element length (m), r = distance (m), θ = angle between Idl and r'
    },
    {
      title: 'Straight Current-Carrying Wire',
      formula: 'B = \\frac{\\mu_0 I}{4\\pi d}(\\sin\\theta_1 + \\sin\\theta_2) \\quad \\xrightarrow{\\text{infinite wire}} \\quad B = \\frac{\\mu_0 I}{2\\pi d}',
      variables: 'd = perpendicular distance from wire to field point (m), θ₁, θ₂ = subtended end angles'
    },
    {
      title: 'Circular Loop: Magnetic Field at Centre',
      formula: 'B_{\\text{centre}} = \\frac{\\mu_0 N I}{2 R}, \\quad B_{\\text{arc}} = \\frac{\\mu_0 I}{4\\pi R} \\phi',
      variables: 'N = number of turns, R = radius (m), I = current (A), φ = angle subtended in radians'
    },
    {
      title: 'Circular Loop: Magnetic Field on Axis',
      formula: 'B_{\\text{axis}} = \\frac{\\mu_0 N I R^2}{2(R^2 + x^2)^{3/2}} \\quad \\xrightarrow{x \\gg R} \\quad B_{\\text{axis}} \\approx \\frac{\\mu_0}{4\\pi} \\frac{2 m}{x^3}',
      variables: 'x = axial distance from centre (m), m = N I A = N I (π R²) is the magnetic dipole moment (A·m²)'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="42" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Comparison: Coulomb\'s Law (Electrostatics) vs Biot-Savart Law (Magnetism)</text><rect x="50" y="60" width="280" height="140" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" rx="6"/><text x="190" y="80" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Coulomb\'s Law (Electrostatics)</text><text x="190" y="105" fill="#1e3a8a" font-size="11" text-anchor="middle">• Source: Scalar charge dq</text><text x="190" y="125" fill="#1e3a8a" font-size="11" text-anchor="middle">• dE = (1/4πε₀) · (dq / r²) r̂</text><text x="190" y="145" fill="#1e3a8a" font-size="11" text-anchor="middle">• Direction: Radial along r</text><text x="190" y="165" fill="#1e3a8a" font-size="11" text-anchor="middle">• Angle Independent (Isotropic)</text><text x="190" y="185" fill="#1e3a8a" font-size="11" text-anchor="middle">• Field lines originate / terminate</text><rect x="370" y="60" width="280" height="140" fill="#ffffff" stroke="#86efac" stroke-width="1.5" rx="6"/><text x="510" y="80" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">Biot-Savart Law (Magnetism)</text><text x="510" y="105" fill="#065f46" font-size="11" text-anchor="middle">• Source: Vector element I dl</text><text x="510" y="125" fill="#065f46" font-size="11" text-anchor="middle">• dB = (μ₀/4π) · (I dl × r̂) / r²</text><text x="510" y="145" fill="#065f46" font-size="11" text-anchor="middle">• Direction: ⟂ to both dl and r</text><text x="510" y="165" fill="#065f46" font-size="11" text-anchor="middle">• Angle Dependent (∝ sinθ)</text><text x="510" y="185" fill="#065f46" font-size="11" text-anchor="middle">• Field lines form closed loops</text></svg>',
    caption: 'Fundamental comparison between Coulomb\'s Law in electrostatics and Biot-Savart Law in magnetism.'
  },

  neetImportantPoints: [
    'A stationary charge produces ONLY an electric field E; a moving charge produces BOTH E and B.',
    'Magnetic field lines are continuous closed loops (Gauss\'s Law for Magnetism: ∮ B · dA = 0).',
    'For a long straight wire, B ∝ 1/r (not 1/r²!).',
    'At any point along the line of a straight current conductor, magnetic field B = 0 because θ = 0° or 180° ⇒ sinθ = 0.',
    'At distance x = R√3 on the axis of a circular loop, B_axis = B_centre / 8 (because [R² + (R√3)²]^(3/2) = (4R²)^(3/2) = 8R³).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking magnetic field B from an infinite wire obeys an inverse-square law B ∝ 1/r².',
      correctFact:
        'Differential element dB obeys 1/r², but integrating over an infinite linear wire yields B = μ₀ I / (2π r), which is strictly an inverse-linear relation B ∝ 1/r.',
      whyItMattersForNEET: 'Frequent theoretical assertion-reason and graph question trap.'
    },
    {
      commonConfusion: 'Using degrees instead of radians in the arc formula B_arc = (μ₀ I / 4π R) φ.',
      correctFact:
        'The angle φ in the Biot-Savart circular arc equation MUST be in radians. For example, for a semicircle φ = π rad, so B = (μ₀ I / 4π R)(π) = μ₀ I / (4 R).',
      whyItMattersForNEET: 'Using 180° instead of π causes an arithmetic factor error of 180/π.'
    },
    {
      commonConfusion: 'Assuming magnetic field lines originate on north poles and terminate on south poles like electrostatic charges.',
      correctFact:
        'Magnetic field lines do NOT begin or end anywhere; they form continuous closed loops passing through the interior of the magnet from South to North.',
      whyItMattersForNEET: 'Direct NCERT conceptual MCQ in NEET.'
    }
  ],

  quickRevision: [
    'Moving charges produce magnetic field B; SI Unit: Tesla (T) = N/(A·m) = 10⁴ Gauss.',
    'Gauss\'s Law for Magnetism: ∮ B · dA = 0 ⇒ No isolated magnetic monopoles.',
    'Biot-Savart Law: dB = (μ₀/4π) · (I dl × r̂)/r² = (μ₀/4π) · (I dl sinθ/r²).',
    'Infinite straight wire: B = μ₀ I / (2π d).',
    'Circular loop at centre: B = μ₀ N I / (2 R). Circular arc: B = (μ₀ I / 4π R) · φ (rad).',
    'Axial field of loop: B = μ₀ N I R² / [2(R² + x²)^(3/2)]. At far axis x ≫ R: B ≈ (μ₀/4π)(2m/x³).'
  ],

  practiceQuestions: [
    {
      id: 'biot-p1',
      question:
        'A circular coil of wire consisting of 100 turns, each of radius 8.0 cm carries a current of 0.40 A. What is the magnitude of the magnetic field B at the centre of the coil?',
      options: [
        '3.14 × 10⁻⁴ T',
        '6.28 × 10⁻⁴ T',
        '1.57 × 10⁻⁴ T',
        '3.14 × 10⁻⁵ T'
      ],
      correctAnswer: 0,
      explanation:
        'Formula: B = μ₀ N I / (2 R). Given: N = 100, I = 0.40 A, R = 8.0 cm = 0.08 m, μ₀ = 4π × 10⁻⁷ T·m/A. Calculation: B = (4π × 10⁻⁷ × 100 × 0.40) / (2 × 0.08) = (1.6π × 10⁻⁵) / 0.16 = π × 10⁻⁴ T ≈ 3.14 × 10⁻⁴ T.'
    },
    {
      id: 'biot-p2',
      question:
        'At what distance along the axis of a circular current-carrying loop of radius R does the magnetic field reduce to 1/8th of its value at the centre of the loop?',
      options: ['R√3', 'R / √3', '2R', 'R√2'],
      correctAnswer: 0,
      explanation:
        'Formula: B_axis / B_centre = [R² / (R² + x²)]^(3/2) = 1/8. Taking 2/3 power on both sides: R² / (R² + x²) = (1/8)^(2/3) = 1/4. Cross multiplying: 4 R² = R² + x² ⇒ x² = 3 R² ⇒ x = R√3.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2022,
      question:
        'A long straight wire carrying a current of 30 A is placed in an external uniform magnetic field of 4.0 × 10⁻⁴ T parallel to the current. The magnitude of the resultant magnetic field at a point 2.0 cm away from the wire is:',
      options: ['5.0 × 10⁻⁴ T', '3.0 × 10⁻⁴ T', '7.0 × 10⁻⁴ T', '4.0 × 10⁻⁴ T'],
      correctAnswer: 0,
      explanation:
        'Magnetic field due to long wire: B_wire = μ₀ I / (2π r) = (4π × 10⁻⁷ × 30) / (2π × 0.02) = (2 × 10⁻⁷ × 30) / 0.02 = 3.0 × 10⁻⁴ T. The wire\'s field B_wire is tangential (in a plane perpendicular to the wire), while the external field B_ext = 4.0 × 10⁻⁴ T is parallel to the wire. Thus, B_wire and B_ext are mutually perpendicular (θ = 90°). Resultant B_net = √(B_wire² + B_ext²) = √((3 × 10⁻⁴)² + (4 × 10⁻⁴)²) = 5.0 × 10⁻⁴ T.',
      conceptTested: 'Vector Addition of Perpendicular Magnetic Fields (Straight Wire + External Field)'
    },
    {
      exam: 'NEET UG',
      year: 2019,
      question:
        'A straight conductor carrying current I splits into two semicircular arcs of radius r as shown in standard symmetric loops. The magnetic field at the centre of the circular loop is:',
      options: ['Zero', 'μ₀ I / (2 r)', 'μ₀ I / (4 r)', 'μ₀ I / (8 r)'],
      correctAnswer: 0,
      explanation:
        'Current I splits equally into I/2 in the top semicircle (clockwise, field into page ⊗) and I/2 in the bottom semicircle (counterclockwise, field out of page ⊙). The magnitudes are equal: B₁ = B₂ = (μ₀ (I/2)) / (4 r) = μ₀ I / (8 r), but their directions are exactly opposite. Net field B_net = B₁ - B₂ = 0.',
      conceptTested: 'Cancellation of Magnetic Fields in Symmetric Current Splits at Centre'
    }
  ]
};
