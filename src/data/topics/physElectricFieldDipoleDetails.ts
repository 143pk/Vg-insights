import { DetailedTopicContent } from '../../types/neet';

export const physElectricFieldDipoleDetails: DetailedTopicContent = {
  topicId: 'phys-electric-field-dipole',
  topicName: 'Electric Field, Field Lines, Electric Dipole & Torque',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Electrostatics',
  chapter: 'Electric Charges and Fields',

  whatIsThisTopic: 'The concept of the Electric Field transforms electrostatics from a mysterious action-at-a-distance framework into a continuous spatial interaction. A source charge creates an electric field in the space surrounding it, and this field exerts a force on any other charge placed within it. This master topic comprehensively explores the definition of electric field intensity, field of a point charge and multi-charge systems, pictorial representation via Faraday\'s electric field lines, motion of charged particles in uniform fields, the physics of electric dipoles, rigorous derivations of axial and equatorial dipole fields (revealing the characteristic 1/r³ fall-off), and the torque (τ⃗ = p⃗ × E⃗) and potential energy (U = -p⃗ · E⃗) of dipoles in uniform and non-uniform electric fields.',

  basicIdea: [
    'The electric field E⃗ at a point in space is defined as the electrostatic force experienced per unit positive test charge placed at that point: E⃗ = lim_(q₀→0) (F⃗ / q₀). SI Unit: N/C or V/m.',
    'The electric field is an intrinsic property of the source charge distribution and is completely independent of the magnitude or sign of the test charge q₀.',
    'For a point charge Q, the electric field has magnitude E = (1 / 4πε₀) · (|Q| / r²), directed radially outward if Q > 0 and radially inward if Q < 0.',
    'Electric field lines are continuous imaginary curves whose tangent at any point indicates the direction of E⃗ at that point. Line density is proportional to electric field magnitude.',
    'Crucial Field Line Rule: Electrostatic field lines NEVER form closed loops because electrostatic forces are conservative (∮ E⃗ · dl⃗ = 0).',
    'An electric dipole consists of two equal and opposite point charges (+q and -q) separated by a small distance 2a. The electric dipole moment vector p⃗ = q(2a⃗) points from negative charge (-q) to positive charge (+q).',
    'Dipole electric field decreases with distance as 1/r³ (much faster than a point charge\'s 1/r² fall-off because opposite charges nearly cancel at large distances): E_axial ≈ 2kp/r³ and E_eq ≈ -kp/r³.',
    'In a uniform electric field, a dipole experiences ZERO net translational force (F_net = 0) but experiences a net restoring torque: τ⃗ = p⃗ × E⃗ (magnitude τ = pE sin θ).',
    'Potential energy of an electric dipole in a uniform electric field is U = -p⃗ · E⃗ = -pE cos θ. Stable equilibrium occurs at θ = 0° (U_min = -pE); Unstable equilibrium occurs at θ = 180° (U_max = +pE).'
  ],

  importantTerms: [
    {
      term: 'Electric Field Intensity (E⃗)',
      symbol: 'E⃗ = F⃗ / q₀',
      definition: 'The electrostatic force experienced per unit positive infinitesimal test charge placed at a given point in space. SI Unit: N/C or V/m. Dimensional formula: [M L T⁻³ A⁻¹].',
      neetNote: 'Vector quantity. Direction is the direction of force on a positive test charge.'
    },
    {
      term: 'Infinitesimal Test Charge (q₀ → 0)',
      symbol: 'q₀',
      definition: 'A vanishingly small positive charge used to probe an electric field without altering or redistributing the original source charge distribution.',
      neetNote: 'The limit q₀ → 0 ensures the source charges remain undisturbed.'
    },
    {
      term: 'Electric Field Lines',
      definition: 'Smooth, continuous lines of force drawn in an electric field such that the tangent at any point gives the direction of E⃗ at that point, and the number of lines per unit cross-sectional area represents field magnitude.',
      neetNote: 'Two field lines can never intersect because E⃗ has a unique direction at every physical point.'
    },
    {
      term: 'Electric Dipole',
      symbol: 'p⃗ = q(2a⃗)',
      definition: 'A pair of equal and opposite point charges (+q and -q) separated by a fixed distance 2a.',
      neetNote: 'Direction of p⃗ is ALWAYS from negative charge (-q) to positive charge (+q) by scientific convention.'
    },
    {
      term: 'Axial Line (End-on Position)',
      definition: 'The straight line passing through both charges of an electric dipole along its longitudinal axis.',
      neetNote: 'Far-field axial field magnitude: E_axial = 2kp / r³ (parallel to p⃗).'
    },
    {
      term: 'Equatorial Line (Broadside-on Position)',
      definition: 'The perpendicular bisector plane/line of the dipole axis passing through the midpoint of the dipole.',
      neetNote: 'Far-field equatorial field magnitude: E_eq = kp / r³ (antiparallel to p⃗). Ratio E_axial / E_eq = 2.'
    },
    {
      term: 'Dipole Torque',
      symbol: 'τ⃗ = p⃗ × E⃗',
      definition: 'The rotational couple exerted on an electric dipole in an electric field due to equal and opposite forces acting along different lines of action: τ = pE sin θ.',
      neetNote: 'Torque is zero at θ = 0° (stable) and θ = 180° (unstable); maximum at θ = 90° (τ_max = pE).'
    },
    {
      term: 'Dipole Potential Energy',
      symbol: 'U = -p⃗ · E⃗',
      definition: 'The work done in rotating an electric dipole against electrostatic torque from a reference angle of 90° to angle θ: U = -pE cos θ.',
      neetNote: 'Work done to rotate from θ₁ to θ₂ is W = pE(cos θ₁ - cos θ₂).'
    }
  ],

  conceptExplanation: [
    {
      heading: '8. The Physical Concept of Electric Field: Meaning, Definition & Field of a Point Charge',
      paragraphs: [
        'WHY DID PHYSICS DEVELOP THE ELECTRIC FIELD CONCEPT?',
        'If two charges are separated in empty vacuum, how does one charge know the other exists? In classical physics, Michael Faraday proposed that a charge q does NOT act directly on another distant charge across empty space. Instead, charge q establishes an Electric Field (E⃗) throughout all surrounding space. When a second charge q₀ enters this field, the localized field exerts a direct force on it. Field is a real, physical entity that stores energy and momentum.',
        'MATHEMATICAL DEFINITION:',
        'The electric field E⃗ at position r⃗ is defined as:',
        'E⃗(r⃗) = lim_(q₀→0) [ F⃗ / q₀ ]',
        '• SI Unit: Newton per Coulomb (N/C) or Volt per meter (V/m). [1 N/C = 1 V/m]',
        '• Dimensional Formula: [F] / [q] = [M L T⁻²] / [A T] = [M L T⁻³ A⁻¹]',
        'ELECTRIC FIELD DUE TO AN ISOLATED POINT CHARGE Q:',
        'Let source charge Q be at the origin O. Place test charge q₀ at distance r. The Coulomb force is F⃗ = (1 / 4πε₀) · (Q q₀ / r²) · r̂.',
        'Dividing by q₀ gives the point charge electric field:',
        'E⃗ = (1 / 4πε₀) · (Q / r²) · r̂ = k · (Q / r²) · r̂',
        'KEY CHARACTERISTICS FOR NEET:',
        '1. Positive Source Charge (Q > 0): E⃗ points RADIALLY OUTWARD in all directions (along +r̂).',
        '2. Negative Source Charge (Q < 0): E⃗ points RADIALLY INWARD in all directions (along -r̂).',
        '3. Inverse-Square Fall-off: E ∝ 1/r². If distance triples (r → 3r), electric field drops to 1/9th.',
        '4. Spherical Symmetry: At all points on a spherical shell of radius r centered at Q, the magnitude E is identical.'
      ],
      visual: {
        caption: 'Electric Field of Isolated Positive (+Q) and Negative (-Q) Point Charges.',
        guide: 'Electric field vectors point radially outward from a positive charge (source) and radially inward toward a negative charge (sink).',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 230" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- Positive Charge (Radially Outward) -->
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="315" height="190" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="157" y="24" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">POSITIVE CHARGE (+Q): RADIALLY OUTWARD</text>
            <circle cx="157" cy="95" r="22" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <text x="157" y="101" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">+Q</text>
            <!-- 8 Radial Outward Arrows -->
            <line x1="157" y1="68" x2="157" y2="35" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)"/>
            <line x1="157" y1="122" x2="157" y2="155" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)"/>
            <line x1="130" y1="95" x2="95" y2="95" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)"/>
            <line x1="184" y1="95" x2="220" y2="95" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)"/>
            <line x1="138" y1="76" x2="110" y2="48" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)"/>
            <line x1="176" y1="76" x2="204" y2="48" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)"/>
            <line x1="138" y1="114" x2="110" y2="142" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)"/>
            <line x1="176" y1="114" x2="204" y2="142" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)"/>
            <text x="157" y="178" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">E⃗ = (kQ/r²) r̂ (Points Outward)</text>
          </g>

          <!-- Negative Charge (Radially Inward) -->
          <g transform="translate(365, 20)">
            <rect x="0" y="0" width="315" height="190" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="157" y="24" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">NEGATIVE CHARGE (-Q): RADIALLY INWARD</text>
            <circle cx="157" cy="95" r="22" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
            <text x="157" y="101" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">-Q</text>
            <!-- 8 Radial Inward Arrows -->
            <line x1="157" y1="35" x2="157" y2="68" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow-blue)"/>
            <line x1="157" y1="155" x2="157" y2="122" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow-blue)"/>
            <line x1="95" y1="95" x2="130" y2="95" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow-blue)"/>
            <line x1="220" y1="95" x2="184" y2="95" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow-blue)"/>
            <line x1="110" y1="48" x2="138" y2="76" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow-blue)"/>
            <line x1="204" y1="48" x2="176" y2="76" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow-blue)"/>
            <line x1="110" y1="142" x2="138" y2="114" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow-blue)"/>
            <line x1="204" y1="142" x2="176" y2="114" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow-blue)"/>
            <text x="157" y="178" font-size="10" font-weight="bold" fill="#1d4ed8" text-anchor="middle">E⃗ = -(k|Q|/r²) r̂ (Points Inward)</text>
          </g>
          <defs>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
            </marker>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
            </marker>
          </defs>
        </svg>`
      }
    },
    {
      heading: '9. Electric Field vs Electric Force & Motion of Charged Particles in Uniform Fields',
      paragraphs: [
        'ELECTRIC FORCE ACTING ON A CHARGE IN AN ELECTRIC FIELD:',
        'When a particle carrying electric charge q is placed inside an electric field E⃗, the electrostatic force experienced by the particle is given by:',
        'F⃗ = q · E⃗',
        '• If q is POSITIVE (q > 0): Force F⃗ is in the SAME direction as E⃗.',
        '• If q is NEGATIVE (q < 0): Force F⃗ is in the OPPOSITE direction to E⃗.',
        'ACCELERATION OF A CHARGED PARTICLE:',
        'According to Newton\'s Second Law (F⃗ = m a⃗), the acceleration of a particle of mass m and charge q is:',
        'a⃗ = (q · E⃗) / m',
        '• For an electron: a_e = eE / m_e (directed opposite to E⃗)',
        '• For a proton: a_p = eE / m_p (directed along E⃗)',
        '• Since m_p ≈ 1836 m_e, the acceleration of an electron is ~1836 times GREATER than that of a proton in the identical electric field!',
        'PARABOLIC TRAJECTORY IN TRANSVERSE UNIFORM FIELD (NEET HIGH YIELD):',
        'When a charge q with initial velocity v₀ along the X-axis enters a uniform electric field E⃗ pointing along the -Y-axis (between two charged capacitor plates of length L):',
        '• Horizontal motion (no horizontal force): x = v₀ · t ⇒ t = x / v₀ (Constant velocity)',
        '• Vertical acceleration: a_y = qE / m (Constant acceleration)',
        '• Vertical deflection: y = (1/2) a_y t² = (1/2) (qE / m) (x / v₀)² = [ qE / (2 m v₀²) ] · x²',
        'Since y ∝ x², the trajectory is a PARABOLA (analogous to projectile motion under gravity!). Deflection y ∝ (q / m) [specific charge].'
      ],
      visual: {
        caption: 'Motion of Charged Particle in a Uniform Transverse Electric Field: Parabolic trajectory.',
        guide: 'A negative charge (electron) deflects upward toward the positive plate along a parabolic path y = [qE/(2mv₀²)] x².',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- Top Positive Plate -->
          <rect x="150" y="30" width="300" height="16" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
          <text x="300" y="42" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">+ + + + + + + + + + + + + + + (Positive Plate)</text>

          <!-- Bottom Negative Plate -->
          <rect x="150" y="170" width="300" height="16" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="300" y="182" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">- - - - - - - - - - - - - - - (Negative Plate)</text>

          <!-- Uniform E-field arrows (pointing downward from + to -) -->
          <line x1="200" y1="50" x2="200" y2="165" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
          <line x1="260" y1="50" x2="260" y2="165" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
          <line x1="320" y1="50" x2="320" y2="165" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
          <line x1="380" y1="50" x2="380" y2="165" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
          <text x="400" y="110" font-size="11" font-weight="bold" fill="#64748b">E⃗ (downward)</text>

          <!-- Electron entering horizontally -->
          <circle cx="90" cy="110" r="10" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="90" y="114" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">e⁻</text>
          <line x1="105" y1="110" x2="150" y2="110" stroke="#059669" stroke-width="2" marker-end="url(#arrow-green)"/>
          <text x="127" y="102" font-size="10" font-weight="bold" fill="#059669">v₀</text>

          <!-- Parabolic path upward -->
          <path d="M 150 110 Q 300 110, 450 55" stroke="#dc2626" stroke-width="3" fill="none"/>
          <line x1="450" y1="55" x2="520" y2="30" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#arrow-red)"/>

          <!-- Vertical Deflection y -->
          <line x1="465" y1="110" x2="465" y2="55" stroke="#dc2626" stroke-width="1.5"/>
          <text x="480" y="85" font-size="11" font-weight="bold" fill="#dc2626">y ∝ q/m</text>
        </svg>`
      }
    },
    {
      heading: '10. Electric Field Lines: Fundamental Physical Properties & Standard Geometric Patterns',
      paragraphs: [
        'WHAT ARE ELECTRIC FIELD LINES?',
        'Electric field lines (lines of force) are an intuitive visual tool introduced by Michael Faraday to represent the geometry, direction, and magnitude of electric fields in space.',
        'MANDATORY PROPERTIES OF ELECTRIC FIELD LINES (NEET MUST-KNOW):',
        '1. Origin and Termination: Field lines start on positive charges (+q) and terminate on negative charges (-q). For isolated charges, they start/end at infinity.',
        '2. Tangent Gives Direction: The tangent drawn to a field line at any point gives the precise direction of the electric field vector E⃗ at that point.',
        '3. NO TWO FIELD LINES CAN EVER INTERSECT: If two lines intersected at point P, two different tangents could be drawn at P, meaning the electric field would have two different directions at the same point, which is physically IMPOSSIBLE.',
        '4. Line Density Represents Field Strength: The relative number of field lines crossing unit area perpendicular to the lines is directly proportional to the magnitude |E⃗|. Closer lines → Stronger field; Widely spaced lines → Weaker field.',
        '5. ELECTROSTATIC FIELD LINES NEVER FORM CLOSED LOOPS: This fundamental property arises because electrostatic forces are strictly CONSERVATIVE (∮ E⃗ · dl⃗ = 0). (Induced electric fields in electromagnetic induction can form closed loops, but electrostatic fields NEVER do!).',
        '6. Perpendicular to Conductor Surfaces: Field lines always enter or leave the surface of a static conductor at RIGHT ANGLES (90°). If there were any tangential component, surface electrons would flow, violating electrostatic equilibrium.',
        '7. No Lines Inside Conductors: Electric field lines do NOT pass through the interior of a static conductor (E_inside = 0).'
      ],
      visual: {
        caption: 'Standard Electric Field Line Patterns: (1) Electric Dipole (+ and -), (2) Like Positive Charges (+ and +), (3) Uniform Electric Field.',
        guide: 'Dipole lines curve smoothly from + to -; Like charges show a neutral null point (E=0) in the middle; Uniform field lines are parallel and equally spaced.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 230" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- 1. Dipole (+ / -) -->
          <g transform="translate(15, 20)">
            <rect x="0" y="0" width="210" height="190" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="105" y="22" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">1. DIPOLE (+ and -)</text>
            <circle cx="55" cy="95" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <text x="55" y="99" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
            <circle cx="155" cy="95" r="14" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
            <text x="155" y="99" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">-</text>
            <!-- Curved field lines from + to - -->
            <line x1="69" y1="95" x2="141" y2="95" stroke="#64748b" stroke-width="1.5"/>
            <path d="M 65 83 Q 105 50, 145 83" stroke="#64748b" stroke-width="1.5" fill="none"/>
            <path d="M 65 107 Q 105 140, 145 107" stroke="#64748b" stroke-width="1.5" fill="none"/>
            <path d="M 55 81 Q 105 25, 155 81" stroke="#64748b" stroke-width="1.5" fill="none"/>
            <path d="M 55 109 Q 105 165, 155 109" stroke="#64748b" stroke-width="1.5" fill="none"/>
            <text x="105" y="178" font-size="9.5" font-weight="bold" fill="#475569" text-anchor="middle">Attraction (Lines contract)</text>
          </g>

          <!-- 2. Like Charges (+ / +) -->
          <g transform="translate(245, 20)">
            <rect x="0" y="0" width="210" height="190" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="105" y="22" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">2. LIKE CHARGES (+ and +)</text>
            <circle cx="55" cy="95" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <text x="55" y="99" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
            <circle cx="155" cy="95" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <text x="155" y="99" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
            <!-- Repulsive curved lines bending away -->
            <path d="M 68 88 Q 90 70, 95 30" stroke="#64748b" stroke-width="1.5" fill="none"/>
            <path d="M 68 102 Q 90 120, 95 160" stroke="#64748b" stroke-width="1.5" fill="none"/>
            <path d="M 142 88 Q 120 70, 115 30" stroke="#64748b" stroke-width="1.5" fill="none"/>
            <path d="M 142 102 Q 120 120, 115 160" stroke="#64748b" stroke-width="1.5" fill="none"/>
            <!-- Neutral Point N -->
            <circle cx="105" cy="95" r="4" fill="#dc2626"/>
            <text x="105" y="85" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle">N (E=0)</text>
            <text x="105" y="178" font-size="9.5" font-weight="bold" fill="#475569" text-anchor="middle">Repulsion (Lateral pressure)</text>
          </g>

          <!-- 3. Uniform Field -->
          <g transform="translate(475, 20)">
            <rect x="0" y="0" width="210" height="190" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="105" y="22" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">3. UNIFORM FIELD</text>
            <!-- Parallel Equidistant Lines -->
            <line x1="25" y1="55" x2="175" y2="55" stroke="#059669" stroke-width="2" marker-end="url(#arrow-green)"/>
            <line x1="25" y1="85" x2="175" y2="85" stroke="#059669" stroke-width="2" marker-end="url(#arrow-green)"/>
            <line x1="25" y1="115" x2="175" y2="115" stroke="#059669" stroke-width="2" marker-end="url(#arrow-green)"/>
            <line x1="25" y1="145" x2="175" y2="145" stroke="#059669" stroke-width="2" marker-end="url(#arrow-green)"/>
            <text x="105" y="178" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">Equidistant & Parallel (E = const)</text>
          </g>
        </svg>`
      }
    },
    {
      heading: '11. The Electric Dipole: Definition, Dipole Moment Vector & Field Derivations',
      paragraphs: [
        'ELECTRIC DIPOLE & DIPOLE MOMENT VECTOR:',
        'An electric dipole consists of two equal and opposite point charges (+q and -q) separated by a small distance 2a. The Electric Dipole Moment vector p⃗ is defined as:',
        'p⃗ = q · (2a⃗)',
        '• SI Unit: Coulomb-meter (C·m). [Practical unit: Debye, 1 Debye ≈ 3.33 × 10⁻³⁰ C·m]',
        '• Scientific Vector Convention: p⃗ points strictly from NEGATIVE charge (-q) to POSITIVE charge (+q).',
        'FIELD DERIVATION 1: AXIAL POINT (P on longitudinal axis at distance r from center O):',
        'Distance to +q is (r - a); Distance to -q is (r + a).',
        'E_axial = E_+ - E_- = (1 / 4πε₀) · [ q / (r - a)² - q / (r + a)² ]',
        'E_axial = (q / 4πε₀) · [ ((r + a)² - (r - a)²) / (r² - a²)² ] = (q / 4πε₀) · [ 4ar / (r² - a²)² ]',
        'Since p = q · 2a, the EXACT axial field is: E_axial = (1 / 4πε₀) · [ 2pr / (r² - a²)² ]',
        'For a short dipole (far-field approximation r >> a): (r² - a²)² ≈ r⁴.',
        'E_axial ≈ (1 / 4πε₀) · (2p / r³) = (2kp / r³)  [Points along p⃗]',
        'FIELD DERIVATION 2: EQUATORIAL POINT (P on perpendicular bisector at distance r from center O):',
        'Distance to each charge is d = √(r² + a²). The magnitude of field from each charge is E₁ = E₂ = (1 / 4πε₀) · [ q / (r² + a²) ].',
        'Vertical components (E₁ sin θ and E₂ sin θ) cancel by symmetry. Horizontal components add antiparallel to p⃗:',
        'E_eq = 2 E₁ cos θ = 2 · [ (1 / 4πε₀) · q / (r² + a²) ] · [ a / √(r² + a²) ]',
        'Since p = q · 2a, the EXACT equatorial field is: E_eq = (1 / 4πε₀) · [ p / (r² + a²)^(3/2) ]',
        'For a short dipole (r >> a): (r² + a²)^(3/2) ≈ r³.',
        'E_eq ≈ (1 / 4πε₀) · (p / r³) = (kp / r³)  [Points OPPOSITE to p⃗]',
        'RATIO AND INVERSE CUBE RELATION (NEET HIGH-YIELD):',
        '1. Ratio at same distance r: E_axial / E_eq = 2 (Axial field is exactly twice the equatorial field).',
        '2. Fall-off: E ∝ 1/r³ (decreases much faster than point charge 1/r² because opposite charges cancel out at large distance).'
      ],
      visual: {
        caption: 'Electric Dipole Electric Fields: Axial point P_axial (along p⃗) and Equatorial point P_eq (opposite to p⃗).',
        guide: 'At far distance r >> a, E_axial = 2kp/r³ (parallel to p⃗) and E_eq = kp/r³ (antiparallel to p⃗).',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 230" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- Axial Line Geometry -->
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="315" height="190" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="157" y="22" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">AXIAL POINT (E_axial = 2kp/r³)</text>
            <!-- Dipole -->
            <line x1="50" y1="95" x2="130" y2="95" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="50" cy="95" r="14" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
            <text x="50" y="99" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">-q</text>
            <circle cx="130" cy="95" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <text x="130" y="99" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">+q</text>
            <!-- Center O -->
            <circle cx="90" cy="95" r="3" fill="#0f172a"/>
            <text x="90" y="85" font-size="9" fill="#64748b" text-anchor="middle">O</text>
            <!-- Dipole moment arrow -->
            <line x1="68" y1="120" x2="112" y2="120" stroke="#8b5cf6" stroke-width="2.5" marker-end="url(#arrow-purple)"/>
            <text x="90" y="135" font-size="10" font-weight="bold" fill="#7c3aed" text-anchor="middle">p⃗ (- to +)</text>
            <!-- Axis line to Point P -->
            <line x1="144" y1="95" x2="250" y2="95" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
            <circle cx="250" cy="95" r="4" fill="#dc2626"/>
            <text x="250" y="85" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">P</text>
            <!-- E_axial vector -->
            <line x1="255" y1="95" x2="300" y2="95" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/>
            <text x="280" y="85" font-size="10" font-weight="bold" fill="#dc2626">E⃗_axial</text>
            <text x="157" y="175" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">E⃗_axial is PARALLEL to p⃗</text>
          </g>

          <!-- Equatorial Line Geometry -->
          <g transform="translate(365, 20)">
            <rect x="0" y="0" width="315" height="190" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="157" y="22" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">EQUATORIAL POINT (E_eq = kp/r³)</text>
            <!-- Dipole Base -->
            <line x1="100" y1="140" x2="214" y2="140" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="100" cy="140" r="14" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
            <text x="100" y="144" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">-q</text>
            <circle cx="214" cy="140" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <text x="214" y="144" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">+q</text>
            <!-- Center O -->
            <circle cx="157" cy="140" r="3" fill="#0f172a"/>
            <!-- Equatorial Point P -->
            <line x1="157" y1="140" x2="157" y2="50" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
            <circle cx="157" cy="50" r="4" fill="#2563eb"/>
            <text x="170" y="52" font-size="10" font-weight="bold" fill="#2563eb">P</text>
            <!-- Lines from charges to P -->
            <line x1="100" y1="126" x2="157" y2="50" stroke="#94a3b8" stroke-width="1.2"/>
            <line x1="214" y1="126" x2="157" y2="50" stroke="#94a3b8" stroke-width="1.2"/>
            <!-- E_eq Vector (points LEFT, opposite to p) -->
            <line x1="157" y1="50" x2="90" y2="50" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-blue)"/>
            <text x="120" y="40" font-size="10" font-weight="bold" fill="#2563eb">E⃗_eq</text>
            <!-- Dipole moment arrow -->
            <line x1="130" y1="165" x2="184" y2="165" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrow-purple)"/>
            <text x="157" y="178" font-size="10" font-weight="bold" fill="#7c3aed" text-anchor="middle">E⃗_eq is ANTIPARALLEL to p⃗</text>
          </g>
          <defs>
            <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#8b5cf6"/>
            </marker>
          </defs>
        </svg>`
      }
    },
    {
      heading: '12. Dipole in Uniform Electric Field: Net Force, Torque Couple & Potential Energy',
      paragraphs: [
        'NET TRANSLATIONAL FORCE IN UNIFORM FIELD:',
        'In a uniform electric field E⃗, force on +q is F⃗₁ = +q E⃗ (along E⃗) and force on -q is F⃗₂ = -q E⃗ (opposite to E⃗).',
        'F⃗_net = (+q E⃗) + (-q E⃗) = 0',
        'Therefore, an electric dipole in a UNIFORM electric field undergoes NO TRANSLATIONAL ACCELERATION.',
        'TORQUE (COUPLE OF FORCES):',
        'Even though net force is zero, the two forces do not act along the same straight line. They form a COUPLE separated by perpendicular arm length d_perp = 2a sin θ. The torque magnitude is:',
        'τ = (Force) × (Perpendicular arm) = (qE) · (2a sin θ) = (q · 2a) · E sin θ = pE sin θ',
        'VECTOR FORM OF TORQUE:',
        'τ⃗ = p⃗ × E⃗',
        'THREE CRITICAL ANGLES FOR NEET:',
        '1. θ = 0° (Aligned with field): τ = 0, Potential energy U = -pE (Minimum PE → STABLE EQUILIBRIUM).',
        '2. θ = 90° (Perpendicular to field): τ_max = pE (Maximum torque), Potential energy U = 0.',
        '3. θ = 180° (Antiparallel to field): τ = 0, Potential energy U = +pE (Maximum PE → UNSTABLE EQUILIBRIUM).',
        'POTENTIAL ENERGY & WORK DONE:',
        'Work done by external agent in rotating dipole from angle θ₁ to θ₂:',
        'W_ext = ∫_(θ₁)^(θ₂) τ dθ = ∫_(θ₁)^(θ₂) pE sin θ dθ = -pE [cos θ]_(θ₁)^(θ₂) = pE (cos θ₁ - cos θ₂)',
        'Taking reference U(90°) = 0, the potential energy at any orientation θ is:',
        'U(θ) = -pE cos θ = -p⃗ · E⃗',
        'DIPOLE IN A NON-UNIFORM ELECTRIC FIELD:',
        'In a non-uniform field, E⃗ differs at the locations of +q and -q. Hence, F⃗₁ ≠ -F⃗₂. The dipole experiences BOTH a Net Translational Force (F⃗_net ≠ 0) AND a Net Torque (τ⃗ ≠ 0). (e.g., A charged comb attracting small neutral paper bits).'
      ],
      visual: {
        caption: 'Electric Dipole in a Uniform Electric Field: Equal and opposite forces form a couple generating torque τ⃗ = p⃗ × E⃗.',
        guide: 'Net force is zero (F_net = 0). Torque τ = pE sin θ tends to rotate dipole into alignment with E⃗ (toward stable equilibrium θ = 0°).',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 230" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- Background Uniform Field Lines -->
          <line x1="50" y1="50" x2="550" y2="50" stroke="#cbd5e1" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
          <line x1="50" y1="95" x2="550" y2="95" stroke="#cbd5e1" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
          <line x1="50" y1="140" x2="550" y2="140" stroke="#cbd5e1" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
          <line x1="50" y1="185" x2="550" y2="185" stroke="#cbd5e1" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
          <text x="520" y="40" font-size="12" font-weight="bold" fill="#64748b">E⃗</text>

          <!-- Dipole Axis inclined at angle theta -->
          <line x1="180" y1="160" x2="380" y2="75" stroke="#8b5cf6" stroke-width="3"/>
          <!-- Negative charge -q -->
          <circle cx="180" cy="160" r="16" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
          <text x="180" y="164" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">-q</text>
          <!-- Positive charge +q -->
          <circle cx="380" cy="75" r="16" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
          <text x="380" y="79" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+q</text>

          <!-- Force on +q (to the right) -->
          <line x1="396" y1="75" x2="480" y2="75" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/>
          <text x="440" y="65" font-size="11" font-weight="bold" fill="#dc2626">F⃗ = +qE⃗</text>

          <!-- Force on -q (to the left) -->
          <line x1="164" y1="160" x2="80" y2="160" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-blue)"/>
          <text x="120" y="175" font-size="11" font-weight="bold" fill="#2563eb">F⃗ = -qE⃗</text>

          <!-- Angle theta arc -->
          <line x1="180" y1="160" x2="270" y2="160" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>
          <path d="M 230 160 A 50 50 0 0 0 220 143" stroke="#7c3aed" stroke-width="2" fill="none"/>
          <text x="240" y="152" font-size="11" font-weight="bold" fill="#7c3aed">θ</text>

          <!-- Perpendicular arm 2a sin theta -->
          <line x1="380" y1="75" x2="380" y2="160" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>
          <text x="390" y="125" font-size="10" font-weight="bold" fill="#475569">2a sin θ</text>
        </svg>`
      }
    }
  ],

  formulae: [
    {
      title: 'Electric Field of a Point Charge',
      formula: 'E = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|Q|}{r^2} = k \\frac{|Q|}{r^2}',
      meaning: 'Magnitude of electric field at distance r from a stationary point charge Q in vacuum.',
      symbols: 'E = field strength (N/C or V/m), Q = source charge (C), r = distance (m), k = 9 × 10⁹ N·m²/C²',
      unit: 'N/C or V/m',
      conditions: 'Valid for point charges or spherical conductors outside their radius.',
      whenToUse: 'Calculate electric field produced by single isolated charge or multi-charge superposition.',
      calculationExample: {
        problem: 'Calculate the electric field magnitude at a point 50 cm away from a point charge of +5.0 μC in vacuum.',
        given: 'Q = 5 × 10⁻⁶ C, r = 50 cm = 0.5 m, k = 9 × 10⁹ N·m²/C²',
        stepByStep: [
          'Apply point charge field equation: E = k · Q / r²',
          'E = (9 × 10⁹) · (5 × 10⁻⁶) / (0.5)²',
          'E = (45 × 10³) / 0.25 = 1.8 × 10⁵ N/C.'
        ],
        answer: '1.8 × 10⁵ N/C (directed radially outward)'
      }
    },
    {
      title: 'Electric Dipole Moment',
      formula: '\\vec{p} = q (2\\vec{a})',
      meaning: 'Vector product of charge magnitude q and distance vector 2a⃗ from -q to +q.',
      symbols: 'p = dipole moment (C·m), q = charge magnitude (C), 2a = separation distance (m)',
      unit: 'Coulomb-meter (C·m)',
      conditions: 'Opposite charges with equal magnitude.',
      whenToUse: 'Compute dipole moment vector for polar molecules and dipole field problems.'
    },
    {
      title: 'Electric Field of a Dipole (Far-field: r >> a)',
      formula: 'E_{axial} \\approx \\frac{1}{4\\pi\\varepsilon_0} \\frac{2p}{r^3}, \\quad E_{eq} \\approx \\frac{1}{4\\pi\\varepsilon_0} \\frac{p}{r^3}, \\quad \\frac{E_{axial}}{E_{eq}} = 2',
      meaning: 'Axial and equatorial electric fields of a short electric dipole.',
      symbols: 'E_{axial} (parallel to p⃗), E_{eq} (opposite to p⃗), r = distance from dipole midpoint (m)',
      unit: 'N/C or V/m',
      conditions: 'Requires distance r to be much greater than dipole length (r >> a).',
      whenToUse: 'Determine dipole field strengths and comparative ratios in NEET questions.',
      calculationExample: {
        problem: 'An electric dipole consists of charges ±2 μC separated by 4 mm. Find the electric field at an axial point 20 cm away from its center.',
        given: 'q = 2 × 10⁻⁶ C, 2a = 4 mm = 4 × 10⁻³ m, r = 20 cm = 0.2 m (since r >> a, short dipole formula applies)',
        stepByStep: [
          'Calculate dipole moment: p = q · (2a) = (2 × 10⁻⁶ C) · (4 × 10⁻³ m) = 8 × 10⁻⁹ C·m',
          'Calculate axial field: E_axial = (2 · k · p) / r³',
          'E_axial = [ 2 · (9 × 10⁹) · (8 × 10⁻⁹) ] / (0.2)³',
          'E_axial = 144 / 0.008 = 18,000 N/C = 1.8 × 10⁴ N/C.'
        ],
        answer: '1.8 × 10⁴ N/C along the direction of dipole moment'
      }
    },
    {
      title: 'Torque on a Dipole in Uniform Field',
      formula: '\\vec{\\tau} = \\vec{p} \\times \\vec{E}, \\quad \\tau = p E \\sin\\theta',
      meaning: 'Torque couple attempting to align dipole with the external electric field.',
      symbols: 'τ = torque (N·m), p = dipole moment (C·m), E = field (N/C), θ = angle between p⃗ and E⃗',
      unit: 'Newton-meter (N·m)',
      conditions: 'Uniform external electric field.',
      whenToUse: 'Calculate maximum torque (θ = 90°) or restoring rotational oscillations.'
    },
    {
      title: 'Potential Energy & Work in Rotating Dipole',
      formula: 'U = -\\vec{p} \\cdot \\vec{E} = -pE\\cos\\theta, \\quad W_{ext} = pE(\\cos\\theta_1 - \\cos\\theta_2)',
      meaning: 'Potential energy of dipole and work done by external torque in rotating from θ₁ to θ₂.',
      symbols: 'U = potential energy (J), W = work done (J)',
      unit: 'Joule (J)',
      conditions: 'Standard reference state U(90°) = 0.',
      whenToUse: 'Work done to rotate dipole from stable (0°) to unstable (180°) equilibrium: W = 2pE.'
    }
  ],

  neetImportantPoints: [
    "Dipole field fall-off is 1/r³, NOT 1/r²: As distance doubles (r → 2r), dipole field decreases by a factor of 8 (E → E/8)!",
    "Direction of Dipole Fields: E_axial is PARALLEL to p⃗; E_eq is ANTIPARALLEL (opposite) to p⃗.",
    "Ratio of Fields: E_axial / E_eq = 2 at the same distance r for a short dipole.",
    "Uniform Field Forces: Net force on a dipole in a UNIFORM field is ALWAYS ZERO (F_net = 0). It experiences ONLY torque.",
    "Non-Uniform Field Forces: In a non-uniform field, a dipole experiences BOTH net force (F_net ≠ 0) and net torque (τ ≠ 0).",
    "Equilibrium States: θ = 0° is STABLE equilibrium (U = -pE); θ = 180° is UNSTABLE equilibrium (U = +pE).",
    "Work to rotate dipole by 180° from stable equilibrium: W = pE(cos 0° - cos 180°) = pE(1 - (-1)) = 2pE.",
    "Field Lines Rule: Electrostatic field lines NEVER form closed loops because electrostatic field is conservative."
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking an electric dipole experiences a net translational force in a uniform field.',
      correctFact: 'Net force is STRICTLY ZERO (F_net = 0) because forces on +q and -q are equal and opposite (+qE and -qE). Only torque acts.',
      whyItMattersForNEET: 'Extremely common assertion-reason trap in NEET Physics.'
    },
    {
      commonConfusion: 'Applying point charge inverse-square law (1/r²) to dipole electric fields.',
      correctFact: 'Dipole electric field falls off with INVERSE CUBE (E ∝ 1/r³), because equal and opposite charges nearly cancel at large distances.',
      whyItMattersForNEET: 'Leads to calculation errors in distance-scaling MCQs.'
    },
    {
      commonConfusion: 'Confusing the direction of dipole moment p⃗ with chemistry conventions.',
      correctFact: 'In Physics, p⃗ is defined from NEGATIVE to POSITIVE (-q → +q). In Chemistry, it is often drawn from positive to negative.',
      whyItMattersForNEET: 'NEET follows standard Physics NCERT: p⃗ is from -q to +q.'
    },
    {
      commonConfusion: 'Assuming electrostatic field lines can form closed loops.',
      correctFact: 'Electrostatic field lines NEVER form closed loops because work done around a closed path in an electrostatic field is identically zero (conservative field).',
      whyItMattersForNEET: 'Frequently tested in "Which statement is incorrect?" NCERT questions.'
    }
  ],

  quickRevision: [
    "E⃗ = F⃗ / q₀ (N/C or V/m). Dimensional formula: [M L T⁻³ A⁻¹].",
    "Point charge: E = kQ/r² (radially outward for +Q, inward for -Q).",
    "Field lines: Start at +, end at -; never intersect; NEVER form closed loops.",
    "Dipole moment: p⃗ = q(2a⃗) directed from -q to +q (C·m).",
    "Dipole fields (r >> a): E_axial = 2kp/r³ (along p⃗), E_eq = kp/r³ (opposite to p⃗). Ratio E_axial / E_eq = 2.",
    "In uniform field: F_net = 0, Torque τ⃗ = p⃗ × E⃗ (τ = pE sin θ).",
    "Dipole PE: U = -p⃗ · E⃗ = -pE cos θ. Stable at θ = 0° (U = -pE); Unstable at θ = 180° (U = +pE).",
    "Work from 0° to 180°: W = 2pE."
  ],

  practiceQuestions: [
    {
      questionId: 'phys-field-pq-1',
      question: 'An electric dipole with dipole moment 4 × 10⁻⁹ C·m is aligned at 30° with the direction of a uniform electric field of magnitude 5 × 10⁴ N/C. The magnitude of torque acting on the dipole is:',
      options: [
        '10⁻⁴ N·m',
        '2 × 10⁻⁴ N·m',
        '10⁻⁵ N·m',
        '2.5 × 10⁻⁴ N·m'
      ],
      correctAnswerIndex: 0,
      explanation: 'Torque on a dipole in a uniform electric field is: τ = p · E · sin θ.\nGiven: p = 4 × 10⁻⁹ C·m, E = 5 × 10⁴ N/C, θ = 30°.\nτ = (4 × 10⁻⁹) · (5 × 10⁴) · sin 30°\nτ = (20 × 10⁻⁵) · (0.5) = 10 × 10⁻⁵ = 10⁻⁴ N·m.',
      difficulty: 'Easy',
      conceptTested: 'Dipole torque in uniform electric field'
    },
    {
      questionId: 'phys-field-pq-2',
      question: 'An electron falls from rest through a vertical distance h in a uniform upward electric field of magnitude E. The direction of the field is now reversed (downward) keeping magnitude unchanged, and a proton falls from rest through the same vertical distance h. Neglecting gravity, compare the time of fall of the electron (t_e) to that of the proton (t_p):',
      options: [
        't_e = t_p',
        't_e > t_p',
        't_e < t_p because m_e < m_p',
        't_e / t_p = m_p / m_e'
      ],
      correctAnswerIndex: 2,
      explanation: 'For a charged particle of charge e and mass m in electric field E:\nDownward acceleration is a = eE / m.\nStarting from rest (u = 0), distance fallen is h = (1/2) a t² = (1/2) (eE / m) t².\nSolving for time of fall: t = √[ (2 m h) / (eE) ].\nTherefore, t ∝ √m.\nSince the mass of the electron is much smaller than the mass of the proton (m_e << m_p; m_p ≈ 1836 m_e):\nt_e = √[ (2 m_e h) / (eE) ] < t_p = √[ (2 m_p h) / (eE) ].\nThus, the electron falls in a much shorter time: t_e < t_p.',
      difficulty: 'Medium',
      conceptTested: 'Kinematics of charged particles in uniform electric fields'
    },
    {
      questionId: 'phys-field-pq-3',
      question: 'An electric dipole of moment p⃗ is placed in a uniform electric field E⃗ such that p⃗ is parallel to E⃗ (θ = 0°). The work done by an external agent in rotating the dipole through an angle of 60° is:',
      options: [
        'pE / 2',
        'pE',
        '2 pE',
        '√3 pE / 2'
      ],
      correctAnswerIndex: 0,
      explanation: 'Work done in rotating a dipole from θ₁ to θ₂ is:\nW = pE (cos θ₁ - cos θ₂)\nHere θ₁ = 0° and θ₂ = 60°.\nW = pE (cos 0° - cos 60°) = pE (1 - 1/2) = pE / 2.',
      difficulty: 'Easy',
      conceptTested: 'Work done in rotating an electric dipole'
    }
  ],

  pyqs: [
    {
      year: 2023,
      exam: 'NEET UG',
      question: 'An electric dipole is placed at an angle of 30° with an electric field of intensity 2 × 10⁵ N/C. It experiences a torque equal to 4 N·m. The charge on the dipole, if the dipole length is 2 cm, is:',
      options: [
        '8 mC',
        '2 mC',
        '5 mC',
        '7 μC'
      ],
      correctAnswerIndex: 1,
      explanation: 'Torque on a dipole: τ = p · E · sin θ = (q · 2a) · E · sin θ\nGiven: τ = 4 N·m, E = 2 × 10⁵ N/C, θ = 30°, 2a = 2 cm = 2 × 10⁻² m.\n4 = [ q · (2 × 10⁻²) ] · (2 × 10⁵) · sin 30°\n4 = q · (4 × 10³) · (1/2)\n4 = q · (2 × 10³)\nq = 4 / (2 × 10³) = 2 × 10⁻³ C = 2 mC.',
      conceptTested: 'Direct calculation of dipole charge from torque and field geometry',
      ncertReference: 'Class 12 Physics NCERT, Chapter 1, Section 1.11'
    },
    {
      year: 2021,
      exam: 'NEET UG',
      question: 'A dipole is placed in an electric field as shown. In which direction will it move?',
      options: [
        'Towards the right as its potential energy will increase',
        'Towards the left as its potential energy will decrease',
        'Towards the right as its potential energy will decrease',
        'Towards the left as its potential energy will increase'
      ],
      correctAnswerIndex: 2,
      explanation: 'In a non-uniform electric field where field lines converge toward the right (E increases toward the right):\nForce on positive charge +q acts along E⃗ (rightward) with magnitude F₊ = q E_right.\nForce on negative charge -q acts opposite to E⃗ (leftward) with magnitude F₋ = q E_left.\nSince field is stronger on the right (E_right > E_left), F₊ > F₋.\nTherefore, the net force F_net = F₊ - F₋ is directed towards the RIGHT.\nEvery physical system naturally moves in the direction that minimizes its potential energy (U decreases).\nHence, the dipole moves towards the right as its potential energy will decrease.',
      conceptTested: 'Dipole motion in non-uniform electric field and potential energy minimization',
      ncertReference: 'Class 12 Physics NCERT, Chapter 1, Section 1.11'
    },
    {
      year: 2017,
      exam: 'NEET UG',
      question: 'An electric dipole of moment p is placed in an electric field of intensity E. The dipole acquires a position such that the axis of the dipole makes an angle θ with the direction of the field. Assuming that the potential energy of the dipole to be zero when θ = 90°, the torque and the potential energy of the dipole will respectively be:',
      options: [
        'pE sin θ, -pE cos θ',
        'pE sin θ, -2pE cos θ',
        'pE cos θ, -pE sin θ',
        'pE sin θ, pE cos θ'
      ],
      correctAnswerIndex: 0,
      explanation: 'Torque magnitude: τ = |p⃗ × E⃗| = pE sin θ.\nPotential energy with reference U(90°) = 0 is:\nU = -p⃗ · E⃗ = -pE cos θ.\nTherefore, torque and potential energy are pE sin θ and -pE cos θ respectively.',
      conceptTested: 'Vector torque and potential energy of electric dipole in uniform field',
      ncertReference: 'Class 12 Physics NCERT, Chapter 1, Section 1.11'
    }
  ]
};
