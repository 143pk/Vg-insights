import { DetailedTopicContent } from '../../types/neet';

export const physElectricPotentialDetails: DetailedTopicContent = {
  topicId: 'phys-electric-potential',
  topicName: 'Electric Potential & Equipotential Surfaces',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Electrostatics',
  chapter: 'Electrostatic Potential and Capacitance',

  whatIsThisTopic:
    'Electric Potential is the scalar measure of the work required per unit positive test charge to bring that charge from infinity to a specific point in an electrostatic field. This masterclass covers the physical intuition of potential vs. electric field, potential due to a point charge and dipole, continuous charge potential, the potential gradient relationship (E = -dV/dr), equipotential surface geometry, and the behavior of conductors in electrostatic equilibrium.',

  basicIdea: [
    'Electrostatic force is conservative; hence, the work done in moving a test charge in an electrostatic field is strictly path-independent and equals the negative of the change in electrostatic potential energy.',
    'Electric Potential (V) at a point is the work done by an external agent in bringing a unit positive test charge (+q₀) from infinity to that point slowly without acceleration: V = W_ext / q₀.',
    'Potential is a scalar quantity with SI unit Volt (1 V = 1 J/C = 1 N·m/C). For multiple point charges, potentials add algebraically (taking into account their positive and negative signs).',
    'The potential due to an isolated point charge Q at distance r in vacuum is V = (1 / 4πε₀) · (Q / r).',
    'The electric potential due to a short electric dipole p at distance r making angle θ with the dipole axis is V = (1 / 4πε₀) · (p cos θ / r²). On the equatorial line (θ = 90°), V = 0.',
    'The relationship between electric field and potential gradient is E = -dV/dr. The negative sign signifies that electric field lines always point in the direction of steepest potential decrease.',
    'An equipotential surface is a surface over which the electric potential is identical everywhere. No work is done in moving a charge along an equipotential surface, and electric field lines are always perpendicular (90°) to it.',
    'In electrostatic equilibrium, the electric field inside a conductor is zero (E_in = 0), all excess charge resides on the outer surface, and the entire conductor is an equipotential body (V_in = V_surface).'
  ],

  importantTerms: [
    {
      term: 'Electric Potential (V)',
      symbol: 'V',
      definition:
        'The amount of work done by an external agent in moving a unit positive charge from infinity to that point against electrostatic forces without acceleration: V = W_ext / q₀.',
      neetNote: 'Scalar quantity. SI unit: Volt (V) = J/C. Dimensional formula: [M L² T⁻³ A⁻¹].'
    },
    {
      term: 'Electrostatic Potential Difference (ΔV)',
      symbol: 'ΔV = V_B - V_A',
      definition:
        'The work done per unit positive test charge in moving it from point A to point B in an electric field: V_B - V_A = W_{A→B} / q₀ = -∫_A^B E⃗ · dr⃗.',
      neetNote: 'A positive charge spontaneously moves from high potential to low potential; a negative charge moves from low to high potential.'
    },
    {
      term: 'Equipotential Surface',
      definition:
        'A locus of all points in an electric field that have the same scalar electric potential. Work done in moving any charge between two points on such a surface is identically zero.',
      neetNote: 'Electric field lines are always normal (90°) to the equipotential surface at every point.'
    },
    {
      term: 'Potential Gradient (-dV/dr)',
      symbol: 'E = -dV/dr',
      definition:
        'The rate of change of electric potential with respect to distance along the normal to the equipotential surface. The negative gradient gives the electric field vector.',
      neetNote: 'Field lines always point from higher potential to lower potential.'
    },
    {
      term: 'Electrostatic Shielding',
      definition:
        'The phenomenon of creating an electric-field-free cavity inside a closed metallic conductor, shielding interior delicate instruments from external electrostatic fields.',
      neetNote: 'Inside an empty cavity in a conductor, E = 0 regardless of external fields or charges on the conductor.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Physical Meaning of Electric Potential & Conservative Work',
      paragraphs: [
        'In mechanics, we define gravitational potential energy because gravity is a conservative force: lifting a rock stores energy, and dropping it releases kinetic energy. Exactly identically, the Coulomb force is a conservative central force. Moving a charge against the repulsion of like charges requires external work, which is stored as electrostatic potential energy.',
        'Electric Potential (V) is the electrostatic potential energy per unit charge. Introducing potential transforms complex vector calculations into straightforward scalar arithmetic. Instead of calculating vector components of electric field vectors in 3D, we can simply sum up scalar potentials algebraically and differentiate V to recover the vector electric field E⃗.',
        'By universal convention, the reference point for zero potential is chosen at infinity: V(∞) = 0. Therefore, the absolute electric potential at point P is the external work required to transport a unit positive test charge from infinity to P without acceleration: V_P = W_{∞→P} / q₀.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><line x1="120" y1="120" x2="620" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/><circle cx="120" cy="120" r="28" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/><text x="120" y="126" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">+Q</text><text x="120" y="170" fill="#b91c1c" font-size="13" font-weight="bold" text-anchor="middle">Source Charge</text><circle cx="380" cy="120" r="18" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/><text x="380" y="125" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">P</text><text x="380" y="90" fill="#1d4ed8" font-size="13" font-weight="bold" text-anchor="middle">Point P (V_P)</text><circle cx="580" cy="120" r="14" fill="#10b981" stroke="#047857" stroke-width="2"/><text x="580" y="125" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">+q₀</text><text x="580" y="160" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">Test Charge</text><line x1="560" y1="120" x2="410" y2="120" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-blue-pot)"/><text x="490" y="105" fill="#2563eb" font-size="12" font-weight="bold" text-anchor="middle">W_ext (Slowly, a=0)</text><line x1="120" y1="200" x2="380" y2="200" stroke="#64748b" stroke-width="2"/><text x="250" y="195" fill="#475569" font-size="13" font-weight="bold" text-anchor="middle">Distance r</text><line x1="640" y1="100" x2="640" y2="140" stroke="#64748b" stroke-width="2"/><text x="640" y="85" fill="#64748b" font-size="13" font-weight="bold" text-anchor="middle">Infinity (V=0)</text><defs><marker id="arrow-blue-pot" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/></marker></defs></svg>',
        caption:
          'Figure 2.1: Work done by an external agent in bringing a test charge +q₀ from infinity to point P at distance r from source charge +Q.',
        guide:
          'Observe that the external force F_ext must exactly balance the repulsive electrostatic field force F_e at every step to ensure zero kinetic acceleration.'
      },
      importantPoints: [
        'V = W_ext / q₀ = -W_field / q₀.',
        'Potential at infinity is zero by universal reference convention: V(∞) = 0.',
        'SI Unit: Volt (V) = Joule/Coulomb (J/C).'
      ]
    },
    {
      heading: '2. Potential Due to a Point Charge & Algebraic Superposition',
      paragraphs: [
        'To find the potential V at distance r from a point charge Q, we integrate the external work: dW = -F_e dx = -(k Q q₀ / x²) dx from x = ∞ to x = r. Integrating yields W_ext = k Q q₀ / r. Dividing by q₀ gives the fundamental formula: V(r) = (1 / 4πε₀) · (Q / r).',
        'Crucial sign rules: For a positive charge (+Q), V is strictly positive (+kQ/r), representing repulsive work. For a negative charge (-Q), V is strictly negative (-k|Q|/r), representing attractive potential well.',
        'For a system of multiple charges q₁, q₂, ..., qₙ at distances r₁, r₂, ..., rₙ from point P, the net potential is the scalar algebraic sum: V_net = k ∑ (qᵢ / rᵢ). Unlike electric fields, NO vector resolution is needed!'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><text x="180" y="30" fill="#b91c1c" font-size="14" font-weight="bold" text-anchor="middle">Positive Charge (+Q) → V > 0</text><line x1="50" y1="180" x2="310" y2="180" stroke="#64748b" stroke-width="2"/><line x1="50" y1="180" x2="50" y2="40" stroke="#64748b" stroke-width="2"/><path d="M 60 50 Q 100 150 300 175" fill="none" stroke="#ef4444" stroke-width="3"/><text x="180" y="90" fill="#ef4444" font-size="13" font-weight="bold">V ∝ 1/r</text><text x="310" y="195" fill="#64748b" font-size="12">r</text><text x="40" y="35" fill="#64748b" font-size="12">V</text><text x="520" y="30" fill="#1d4ed8" font-size="14" font-weight="bold" text-anchor="middle">Negative Charge (-Q) → V &lt; 0</text><line x1="390" y1="60" x2="650" y2="60" stroke="#64748b" stroke-width="2"/><line x1="390" y1="60" x2="390" y2="200" stroke="#64748b" stroke-width="2"/><path d="M 400 190 Q 440 90 640 65" fill="none" stroke="#3b82f6" stroke-width="3"/><text x="520" y="150" fill="#3b82f6" font-size="13" font-weight="bold">V ∝ -1/r</text><text x="650" y="50" fill="#64748b" font-size="12">r</text><text x="380" y="200" fill="#64748b" font-size="12">V</text></svg>',
        caption:
          'Figure 2.2: Electric potential variation V vs. distance r for isolated positive (+Q) and negative (-Q) point charges.',
        guide:
          'Notice that V approaches 0 as r → ∞ for both charges, but V is positive for +Q and negative for -Q.'
      },
      importantPoints: [
        'V_point = (1 / 4πε₀) · (Q / r).',
        'V is proportional to 1/r (whereas electric field E is proportional to 1/r²).',
        'Superposition of potential is purely algebraic: V_net = V₁ + V₂ + V₃ + ...'
      ]
    },
    {
      heading: '3. Electric Potential Due to an Electric Dipole',
      paragraphs: [
        'An electric dipole consists of charges -q and +q separated by distance 2a. At an arbitrary point P(r, θ) where r >> a, the distances from +q and -q are r₁ ≈ r - a cos θ and r₂ ≈ r + a cos θ.',
        'Net potential: V = kq [1/r₁ - 1/r₂] = kq [(r₂ - r₁) / (r₁ r₂)] ≈ kq [2a cos θ / r²] = (1 / 4πε₀) · (p cos θ / r²). In vector notation: V = (1 / 4πε₀) · (p⃗ · r̂ / r²).',
        'Limiting cases: (1) Axial line (θ = 0° on +q side): V_axial = +kp / r²; (θ = 180° on -q side): V_axial = -kp / r². (2) Equatorial line (θ = 90°): V_eq = (kp cos 90°) / r² = 0. Every point on the equatorial plane is equidistant from +q and -q, so the positive and negative potentials cancel identically!'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><line x1="200" y1="180" x2="500" y2="180" stroke="#94a3b8" stroke-width="2"/><circle cx="250" cy="180" r="16" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/><text x="250" y="185" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">-q</text><circle cx="450" cy="180" r="16" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/><text x="450" y="185" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">+q</text><circle cx="350" cy="180" r="4" fill="#475569"/><text x="350" y="205" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">O (Center)</text><line x1="350" y1="180" x2="480" y2="50" stroke="#6366f1" stroke-width="2.5"/><circle cx="480" cy="50" r="8" fill="#6366f1"/><text x="510" y="55" fill="#6366f1" font-size="13" font-weight="bold">P(r, θ)</text><path d="M 390 180 A 40 40 0 0 0 375 152" fill="none" stroke="#f59e0b" stroke-width="2"/><text x="400" y="160" fill="#d97706" font-size="12" font-weight="bold">θ</text><line x1="350" y1="180" x2="350" y2="30" stroke="#10b981" stroke-width="2" stroke-dasharray="4,4"/><text x="350" y="20" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">Equatorial Line (V = 0)</text><line x1="280" y1="215" x2="420" y2="215" stroke="#ec4899" stroke-width="2.5" marker-end="url(#arrow-pink)"/><text x="350" y="232" fill="#db2777" font-size="12" font-weight="bold" text-anchor="middle">p⃗ (-q to +q)</text><defs><marker id="arrow-pink" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#db2777"/></marker></defs></svg>',
        caption:
          'Figure 2.3: Dipole potential geometry showing axial line, equatorial plane (V = 0), and general position P(r, θ).',
        guide:
          'Notice that on the entire vertical equatorial plane, V = 0 even though the electric field E is non-zero (E = kp/r³).'
      },
      importantPoints: [
        'V_dipole = (1 / 4πε₀) · (p cos θ / r²).',
        'Dipole potential falls as 1/r² (faster than point charge 1/r).',
        'Equatorial plane of an electric dipole is an equipotential surface of V = 0.'
      ]
    },
    {
      heading: '4. Relation Between Electric Field & Potential (E = -dV/dr)',
      paragraphs: [
        'Consider two closely spaced equipotential surfaces A and B separated by perpendicular distance dr with potentials V and V - dV. The work done in moving a unit positive charge from B to A against electric field E is dW = E dr. By definition of potential difference, dW = V_A - V_B = V - (V - dV) = dV. Thus, E dr = -dV, giving: E = -dV/dr.',
        'Physical meaning: (1) Magnitude: The electric field equals the rate of change of potential with distance (potential gradient). (2) Direction: The negative sign means that the electric field ALWAYS points in the direction where the electric potential decreases most rapidly.',
        'In 3D Cartesian coordinates: E⃗ = -(∂V/∂x î + ∂V/∂y ĵ + ∂V/∂z k̂). For a uniform electric field between two plates separated by distance d with potential difference ΔV: E = ΔV / d or ΔV = E · d.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="220" fill="#f8fafc" rx="14"/><rect x="100" y="40" width="120" height="140" fill="#fee2e2" stroke="#ef4444" stroke-width="2" rx="8"/><text x="160" y="105" fill="#b91c1c" font-size="16" font-weight="bold" text-anchor="middle">Surface A</text><text x="160" y="135" fill="#b91c1c" font-size="14" font-weight="bold" text-anchor="middle">V = 100 V</text><rect x="480" y="40" width="120" height="140" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" rx="8"/><text x="540" y="105" fill="#1d4ed8" font-size="16" font-weight="bold" text-anchor="middle">Surface B</text><text x="540" y="135" fill="#1d4ed8" font-size="14" font-weight="bold" text-anchor="middle">V = 20 V</text><line x1="230" y1="110" x2="460" y2="110" stroke="#10b981" stroke-width="4" marker-end="url(#arrow-green-grad)"/><text x="345" y="95" fill="#047857" font-size="14" font-weight="bold" text-anchor="middle">E⃗ Field Direction (Higher → Lower V)</text><line x1="220" y1="195" x2="480" y2="195" stroke="#64748b" stroke-width="2"/><text x="350" y="212" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">Separation d</text><defs><marker id="arrow-green-grad" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/></marker></defs></svg>',
        caption:
          'Figure 2.4: Electric field points from high potential (100 V) to low potential (20 V) along the direction of steepest potential descent.',
        guide:
          'Remember: Positive charges naturally accelerate along E⃗ (down potential hill); negative charges accelerate against E⃗ (up potential hill).'
      },
      importantPoints: [
        'E = -dV/dr.',
        'In uniform field: ΔV = E · d.',
        'Electric field always points down the potential gradient.'
      ]
    },
    {
      heading: '5. Equipotential Surfaces & Conductor Properties in Equilibrium',
      paragraphs: [
        'An equipotential surface is a surface on which all points possess the exact same electric potential. Important properties: (1) Work done in moving a charge along an equipotential surface is zero: W = q ΔV = q(0) = 0. (2) Electric field lines are strictly perpendicular (90°) to equipotential surfaces at every point. (If E had a parallel component, work would be non-zero, violating the definition!). (3) Two equipotential surfaces can NEVER intersect.',
        'Equipotential geometry: (a) Isolated point charge: Concentric spherical surfaces centered on the charge. (b) Uniform electric field: Equispaced parallel flat planes perpendicular to field lines.',
        'Conductors in electrostatic equilibrium: Inside a conductor, free electrons redistribute until E_in = 0. Therefore, -dV/dr = 0, meaning the electric potential is strictly CONSTANT throughout the entire volume and surface of the conductor: V_in = V_surface.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><text x="180" y="25" fill="#475569" font-size="13" font-weight="bold" text-anchor="middle">Point Charge: Concentric Spheres</text><circle cx="180" cy="130" r="14" fill="#ef4444"/><circle cx="180" cy="130" r="40" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,3"/><circle cx="180" cy="130" r="70" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,3"/><text x="180" y="135" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">+Q</text><text x="225" y="125" fill="#2563eb" font-size="11">V₁</text><text x="255" y="125" fill="#2563eb" font-size="11">V₂</text><text x="520" y="25" fill="#475569" font-size="13" font-weight="bold" text-anchor="middle">Uniform Field: Parallel Planes</text><line x1="420" y1="50" x2="420" y2="210" stroke="#3b82f6" stroke-width="3"/><line x1="500" y1="50" x2="500" y2="210" stroke="#3b82f6" stroke-width="3"/><line x1="580" y1="50" x2="580" y2="210" stroke="#3b82f6" stroke-width="3"/><text x="420" y="42" fill="#2563eb" font-size="12" font-weight="bold" text-anchor="middle">V₁ = 30V</text><text x="500" y="42" fill="#2563eb" font-size="12" font-weight="bold" text-anchor="middle">V₂ = 20V</text><text x="580" y="42" fill="#2563eb" font-size="12" font-weight="bold" text-anchor="middle">V₃ = 10V</text><line x1="380" y1="130" x2="620" y2="130" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrow-red-eq)"/><text x="500" y="120" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">E⃗ Field (⟂ Planes)</text><defs><marker id="arrow-red-eq" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker></defs></svg>',
        caption:
          'Figure 2.5: Equipotential surfaces for an isolated point charge (concentric spheres) and for a uniform electric field (parallel planes).',
        guide:
          'Notice how the electric field lines cut across equipotential surfaces at strictly 90° angles.'
      },
      importantPoints: [
        'W = 0 along any equipotential surface.',
        'E⃗ is always normal (90°) to equipotential surfaces.',
        'Inside any conductor in equilibrium, E = 0 and V = constant.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Electric Potential of a Point Charge',
      formula: 'V = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Q}{r} = \\frac{kQ}{r}',
      variables: 'Q = source charge (C), r = radial distance (m), k = 9 × 10⁹ N·m²/C²'
    },
    {
      title: 'Potential Due to a Short Electric Dipole',
      formula: 'V = \\frac{1}{4\\pi\\varepsilon_0} \\frac{p \\cos\\theta}{r^2}',
      variables: 'p = dipole moment (C·m), r = distance from dipole center (m), θ = angle with dipole axis'
    },
    {
      title: 'Potential Gradient & Electric Field',
      formula: 'E = -\\frac{dV}{dr}, \\quad \\vec{E} = -\\vec{\\nabla}V',
      variables: 'E = electric field (V/m or N/C), dV/dr = spatial potential gradient'
    },
    {
      title: 'Uniform Electric Field Potential Difference',
      formula: '\\Delta V = -E \\cdot d \\implies E = \\frac{\\Delta V}{d}',
      variables: 'ΔV = potential difference (V), d = distance along field lines (m)'
    },
    {
      title: 'Work Done in Moving Charge in Potential Field',
      formula: 'W_{\\text{ext}} = q \\Delta V = q(V_B - V_A)',
      variables: 'W_ext = external work (J), q = transported charge (C), V_B, V_A = potentials (V)'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="50" y="30" width="280" height="180" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" rx="10"/><text x="190" y="60" fill="#1d4ed8" font-size="15" font-weight="bold" text-anchor="middle">Electric Field (E⃗)</text><text x="190" y="90" fill="#1e3a8a" font-size="13" text-anchor="middle">• Vector quantity (N/C or V/m)</text><text x="190" y="115" fill="#1e3a8a" font-size="13" text-anchor="middle">• E ∝ 1/r² (Inverse square)</text><text x="190" y="140" fill="#1e3a8a" font-size="13" text-anchor="middle">• Vector addition (Resolution)</text><text x="190" y="165" fill="#1e3a8a" font-size="13" text-anchor="middle">• Force per unit charge (F/q₀)</text><text x="190" y="190" fill="#1e3a8a" font-size="13" text-anchor="middle">• E⃗ = -∇V</text><rect x="370" y="30" width="280" height="180" fill="#fef2f2" stroke="#ef4444" stroke-width="2" rx="10"/><text x="510" y="60" fill="#b91c1c" font-size="15" font-weight="bold" text-anchor="middle">Electric Potential (V)</text><text x="510" y="90" fill="#7f1d1d" font-size="13" text-anchor="middle">• Scalar quantity (Volt or J/C)</text><text x="510" y="115" fill="#7f1d1d" font-size="13" text-anchor="middle">• V ∝ 1/r (Inverse distance)</text><text x="510" y="140" fill="#7f1d1d" font-size="13" text-anchor="middle">• Algebraic addition (+ / -)</text><text x="510" y="165" fill="#7f1d1d" font-size="13" text-anchor="middle">• Work per unit charge (W/q₀)</text><text x="510" y="190" fill="#7f1d1d" font-size="13" text-anchor="middle">• ΔV = -∫ E⃗ · dr⃗</text></svg>',
    caption: 'Visual comparison of Electric Field (Vector) vs. Electric Potential (Scalar).'
  },

  neetImportantPoints: [
    'E = 0 at a point does NOT mean V = 0 (e.g., inside a charged metallic shell, E = 0 but V = kQ/R).',
    'V = 0 at a point does NOT mean E = 0 (e.g., on the equatorial line of a dipole, V = 0 but E = kp/r³).',
    'Electric field always points in the direction of DECREASING potential.',
    'Work done in carrying any charge along an equipotential surface is strictly zero.',
    'Dipole potential on the equatorial plane is strictly zero for all distances r.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming E = 0 guarantees V = 0.',
      correctFact:
        'Electric field depends on the derivative of potential (-dV/dr). If V is constant, E = 0, but V can have any non-zero value (like V = 100 V).',
      whyItMattersForNEET:
        'Examiners constantly ask assertion-reason and conceptual questions based on this exact condition.'
    },
    {
      commonConfusion: 'Applying vector resolution to electric potential.',
      correctFact:
        'Potential is a scalar. Simply add potentials algebraically with their positive and negative signs (V_net = V₁ + V₂ + ...).',
      whyItMattersForNEET: 'Saves valuable exam minutes and avoids trigonometric resolution errors.'
    }
  ],

  quickRevision: [
    'V_point = kQ/r (Scalar, ∝ 1/r).',
    'V_dipole = kp cos θ / r² (V_axial = ±kp/r², V_eq = 0).',
    'E = -dV/dr (Points toward decreasing V).',
    'Equipotential surface: V = const, W = 0, E⃗ ⟂ surface.',
    'Conductor interior: E_in = 0, V_in = V_surface = const.'
  ],

  practiceQuestions: [
    {
      id: 'pot-p1',
      question:
        'Two point charges +4 μC and -2 μC are placed 18 cm apart in air. At what point on the line joining them between the charges is the electric potential zero?',
      options: ['6 cm from +4 μC', '12 cm from +4 μC', '9 cm from +4 μC', '15 cm from +4 μC'],
      correctAnswer: 1,
      explanation:
        'Let potential be zero at distance x from +4 μC. Then: k(4 μC)/x + k(-2 μC)/(18 - x) = 0 => 4/x = 2/(18 - x) => 4(18 - x) = 2x => 72 = 6x => x = 12 cm from +4 μC.'
    },
    {
      id: 'pot-p2',
      question:
        'The electric potential in a region of space is given by V(x, y, z) = 6x - 8xy² - 8y + 6yz. The magnitude of the electric field at the origin (0, 0, 0) is:',
      options: ['6 N/C', '8 N/C', '10 N/C', '14 N/C'],
      correctAnswer: 2,
      explanation:
        'E_x = -∂V/∂x = -(6 - 8y²). At (0,0,0), E_x = -6. E_y = -∂V/∂y = -(-16xy - 8 + 6z). At (0,0,0), E_y = +8. E_z = -∂V/∂z = -(6y). At (0,0,0), E_z = 0. Net field E = √(E_x² + E_y² + E_z²) = √((-6)² + 8² + 0) = √(36 + 64) = 10 N/C.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2022,
      question: 'The angle between the electric lines of force and the equipotential surface is:',
      options: ['0°', '45°', '90°', '180°'],
      correctAnswer: 2,
      explanation:
        'On an equipotential surface, dV = 0. Since dV = -E⃗ · dr⃗ = -E dr cos θ = 0, we must have cos θ = 0 => θ = 90°. Electric field lines are always perpendicular to equipotential surfaces.',
      conceptTested: 'Equipotential Surface Geometry'
    },
    {
      exam: 'NEET UG',
      year: 2020,
      question:
        'A short electric dipole has a dipole moment of 16 × 10⁻⁹ C·m. The electric potential due to the dipole at a point at a distance of 0.6 m from the centre of the dipole, situated on a line making an angle of 60° with the dipole axis is: (1 / 4πε₀ = 9 × 10⁹ N·m²/C²)',
      options: ['50 V', '200 V', '400 V', 'Zero'],
      correctAnswer: 1,
      explanation:
        'V = (1 / 4πε₀) · (p cos θ / r²) = (9 × 10⁹ × 16 × 10⁻⁹ × cos 60°) / (0.6)² = (144 × 0.5) / 0.36 = 72 / 0.36 = 200 V.',
      conceptTested: 'Electric Dipole Potential Formula'
    }
  ]
};
