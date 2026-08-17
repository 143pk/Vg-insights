import { DetailedTopicContent } from '../../types/neet';

export const physGaussLawDetails: DetailedTopicContent = {
  topicId: 'phys-gauss-law',
  topicName: "Electric Flux, Gauss's Theorem & Applications",
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Electrostatics',
  chapter: 'Electric Charges and Fields',

  whatIsThisTopic: "Gauss's Law is one of the four fundamental Maxwell's equations that govern the entire classical theory of electromagnetism. It provides an immensely powerful, elegant mathematical relationship between the net electric flux passing through any closed imaginary boundary (Gaussian surface) and the total net electric charge enclosed within that surface. This master topic comprehensively covers the exact definition and properties of electric flux, outward normal conventions, the physical derivation and symmetry requirements of Gauss's Law, and its three canonical NCERT applications: (1) Infinitely long straight uniformly charged wire, (2) Uniformly charged infinite plane sheet, and (3) Uniformly charged thin spherical shell (including internal shielding and the famous discontinuous E vs r graph), followed by master problem-solving methods, verified NEET PYQs, and a complete chapter self-test.",

  basicIdea: [
    "Electric Flux (Φ) is the scalar measure of the total number of electric field lines passing through a given surface area: Φ = ∫ E⃗ · dA⃗ = E A cos θ. SI Unit: N·m²/C or V·m.",
    "The Area Vector A⃗ is perpendicular (normal) to the surface. For closed surfaces, the outward-drawn normal is strictly positive by universal scientific convention.",
    "Gauss's Theorem states that the total outward electric flux through any arbitrary closed surface S is equal to (1 / ε₀) times the net electric charge enclosed inside the surface: ∮_S E⃗ · dA⃗ = q_enclosed / ε₀.",
    "Charges located outside the closed Gaussian surface contribute ZERO to the NET flux through the surface (lines that enter must leave), although they do contribute to the local electric field at individual points on the surface.",
    "Application 1 (Infinite Line Charge): Electric field at distance r from a wire of uniform linear charge density λ is E = λ / (2πε₀ r) = 2kλ / r (Inverse-linear fall-off: E ∝ 1/r).",
    "Application 2 (Infinite Plane Sheet): Electric field near an infinite sheet of uniform surface charge density σ is E = σ / (2ε₀), which is completely INDEPENDENT of distance r from the sheet.",
    "Application 3 (Thin Spherical Shell of Radius R & Total Charge Q): (a) Inside the shell (r < R): E_inside = 0 (Electrostatic shielding); (b) On surface (r = R): E_surface = kQ / R² = σ / ε₀; (c) Outside the shell (r > R): E_outside = kQ / r².",
    "E vs r Graph for Spherical Shell: Shows zero field from r = 0 to r < R, a discontinuous jump to peak value kQ / R² at r = R, and an inverse-square 1/r² decay for r > R."
  ],

  importantTerms: [
    {
      term: 'Area Vector (A⃗)',
      symbol: 'A⃗ = A n̂',
      definition: 'A vector whose magnitude is the surface area A and whose direction is perpendicular (normal) to the plane of the area.',
      neetNote: 'For closed surfaces, the outward normal is always chosen as positive.'
    },
    {
      term: 'Electric Flux (Φ)',
      symbol: 'Φ = ∫ E⃗ · dA⃗',
      definition: 'The surface integral of electric field over a given area, representing the number of field lines piercing the surface: Φ = E A cos θ. Scalar quantity.',
      neetNote: 'SI Unit: N·m²/C or V·m. Dimensions: [M L³ T⁻³ A⁻¹].'
    },
    {
      term: "Gauss's Law",
      symbol: '∮_S E⃗ · dA⃗ = q_enc / ε₀',
      definition: 'The total electric flux through any closed surface enclosing net charge q_enc equals q_enc / ε₀, regardless of surface shape or size.',
      neetNote: 'Direct consequence of Coulomb\'s inverse-square law in 3D space.'
    },
    {
      term: 'Gaussian Surface',
      definition: 'An imaginary closed 3D mathematical surface (spherical, cylindrical, or planar pillbox) chosen to exploit symmetry and calculate electric fields easily.',
      neetNote: 'E⃗ must be either constant and normal or tangential across each section of the surface.'
    },
    {
      term: 'Linear Charge Density (λ)',
      symbol: 'λ = Q / L',
      definition: 'Charge per unit length of a 1D line charge. Unit: C/m.',
      neetNote: 'Used for thin wires and infinite charged cylinders.'
    },
    {
      term: 'Surface Charge Density (σ)',
      symbol: 'σ = Q / A',
      definition: 'Charge per unit area of a 2D surface. Unit: C/m².',
      neetNote: 'Used for plane sheets, capacitor plates, and spherical shells.'
    },
    {
      term: 'Electrostatic Shielding',
      definition: 'The physical phenomenon where the interior cavity of a conductor is completely shielded from external electric fields because E_inside = 0 in static equilibrium.',
      neetNote: 'Used in coaxial cables, Faraday cages, and lightning protection in cars.'
    }
  ],

  conceptExplanation: [
    {
      heading: "13. Electric Flux (Φ): Definition, Area Vector, Angle Conventions & Calculation Rules",
      paragraphs: [
        'WHAT IS ELECTRIC FLUX?',
        'Electric flux (represented by Greek letter Φ, Phi) is a scalar physical quantity that quantifies the total number of electric field lines passing through a given surface area. Flux is positive when field lines exit a surface, negative when field lines enter, and zero when field lines graze parallel to the surface.',
        'THE AREA VECTOR (A⃗):',
        'In geometry, area is often treated as a scalar, but in vector calculus, area is a VECTOR having both magnitude and direction: A⃗ = A · n̂, where n̂ is the unit normal vector perpendicular to the surface.',
        '• For an OPEN surface: Either of the two normal directions can be chosen.',
        '• For a CLOSED surface: The OUTWARD normal is universally chosen as positive.',
        'MATHEMATICAL FORMULA:',
        'Φ = ∫ E⃗ · dA⃗ = E A cos θ',
        '• E: Magnitude of electric field (N/C).',
        '• A: Surface area (m²).',
        '• θ: Angle between the Electric Field vector (E⃗) and the Area Normal Vector (n̂). (CRITICAL: θ is NOT the angle with the surface plane!).',
        'THREE CRUCIAL ANGLE CASES FOR NEET:',
        '1. θ = 0° (Field perpendicular to surface plane, parallel to n̂): Φ = E A cos 0° = +E A (MAXIMUM positive flux).',
        '2. θ = 90° (Field parallel to surface plane, perpendicular to n̂): Φ = E A cos 90° = 0 (ZERO flux; field lines graze surface without crossing).',
        '3. θ = 180° (Field antiparallel to n̂, entering closed surface): Φ = E A cos 180° = -E A (Negative entering flux).'
      ],
      visual: {
        caption: 'Electric Flux through a Surface: Area vector A⃗ is normal to the surface, and θ is the angle between E⃗ and A⃗.',
        guide: 'When E⃗ is parallel to A⃗ (θ = 0°), Φ = EA (maximum). When E⃗ is perpendicular to A⃗ (θ = 90°), Φ = 0.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 230" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- Case 1: θ = 0 (Max Flux) -->
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="315" height="190" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="157" y="24" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">CASE 1: θ = 0° (E⃗ ∥ A⃗ → MAX FLUX)</text>
            <!-- Vertical Surface Area -->
            <polygon points="110,60 140,40 140,140 110,160" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
            <text x="125" y="105" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Area A</text>
            <!-- Normal Vector n / A -->
            <line x1="125" y1="100" x2="210" y2="100" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-blue)"/>
            <text x="195" y="90" font-size="11" font-weight="bold" fill="#2563eb">A⃗ (Normal)</text>
            <!-- E-field arrows crossing surface -->
            <line x1="50" y1="70" x2="260" y2="70" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
            <line x1="50" y1="100" x2="260" y2="100" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
            <line x1="50" y1="130" x2="260" y2="130" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
            <text x="245" y="60" font-size="11" font-weight="bold" fill="#dc2626">E⃗</text>
            <rect x="25" y="152" width="265" height="28" rx="6" fill="#dbeafe" stroke="#93c5fd"/>
            <text x="157" y="170" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Φ = E A cos 0° = +E A</text>
          </g>

          <!-- Case 2: θ = 90 (Zero Flux) -->
          <g transform="translate(365, 20)">
            <rect x="0" y="0" width="315" height="190" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="157" y="24" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">CASE 2: θ = 90° (E⃗ ⊥ A⃗ → ZERO FLUX)</text>
            <!-- Horizontal Surface Area -->
            <polygon points="70,130 180,130 220,100 110,100" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
            <text x="145" y="120" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Area A</text>
            <!-- Normal Vector pointing UP -->
            <line x1="145" y1="115" x2="145" y2="40" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-blue)"/>
            <text x="160" y="55" font-size="11" font-weight="bold" fill="#2563eb">A⃗ (Normal)</text>
            <!-- Horizontal E-field grazing the plane -->
            <line x1="40" y1="90" x2="270" y2="90" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
            <line x1="40" y1="115" x2="270" y2="115" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
            <line x1="40" y1="140" x2="270" y2="140" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
            <text x="255" y="80" font-size="11" font-weight="bold" fill="#dc2626">E⃗</text>
            <rect x="25" y="152" width="265" height="28" rx="6" fill="#fee2e2" stroke="#fca5a5"/>
            <text x="157" y="170" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">Φ = E A cos 90° = 0 (No lines cross)</text>
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
      heading: "14. Gauss's Law: Physical Meaning, Mathematical Statement & Closed Surface Behavior",
      paragraphs: [
        "STATEMENT OF GAUSS'S THEOREM:",
        "The total electric flux Φ_total through ANY arbitrary closed imaginary surface S enclosing a region of 3D space equals the net algebraic electric charge q_enclosed divided by the permittivity of free space ε₀:",
        "Φ_total = ∮_S E⃗ · dA⃗ = q_enclosed / ε₀",
        "KEY PHYSICAL INSIGHTS FOR NEET:",
        "1. Independence of Shape and Size: The total flux depends ONLY on the net enclosed charge (q_enc) and is completely independent of the shape, volume, or dimensions of the closed Gaussian surface.",
        "2. Location of Enclosed Charge: The charge can be placed anywhere inside the closed surface (at the center, near the wall, etc.); the total net flux remains q_enc / ε₀.",
        "3. Outside Charges Contribute ZERO NET Flux: If a charge Q lies OUTSIDE the Gaussian surface, every field line that enters the surface on one side (negative flux) leaves the surface on the other side (positive flux). Hence, Net Flux from outside charge = 0.",
        "4. Field E⃗ vs Enclosed Charge: In the equation ∮ E⃗ · dA⃗ = q_enc / ε₀, the electric field E⃗ on the left-hand side is the resultant field produced by ALL charges (both inside AND outside), but the right-hand side contains ONLY the enclosed charge q_enc."
      ],
      visual: {
        caption: "Gauss's Law: Total flux through closed surface depends solely on enclosed charge q_enc. Outside charge q_out gives net zero flux.",
        guide: "Field lines from q_out enter and exit equally (net flux = 0). Field lines from q_in originate inside, producing net outward flux = q_in / ε₀.",
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 230" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- Closed Gaussian Surface (Irregular) -->
          <path d="M 200 60 C 320 20, 460 70, 440 160 C 420 210, 240 220, 180 160 C 140 120, 160 80, 200 60 Z" fill="#eff6ff" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="6 4"/>
          <text x="310" y="45" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">Closed Gaussian Surface (S)</text>

          <!-- Enclosed Charge q_in -->
          <circle cx="280" cy="130" r="16" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
          <text x="280" y="134" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">+q_in</text>
          <!-- Radial outward lines crossing boundary -->
          <line x1="280" y1="114" x2="280" y2="50" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
          <line x1="296" y1="130" x2="445" y2="130" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
          <line x1="280" y1="146" x2="280" y2="200" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
          <line x1="264" y1="130" x2="165" y2="130" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>

          <!-- Outside Charge q_out -->
          <circle cx="80" cy="90" r="16" fill="#10b981" stroke="#047857" stroke-width="2"/>
          <text x="80" y="94" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">+q_out</text>
          <!-- Lines from q_out entering and exiting S -->
          <path d="M 96 90 L 175 90" stroke="#059669" stroke-width="2" marker-end="url(#arrow-green)"/>
          <text x="160" y="80" font-size="9" fill="#047857">Enters (-)</text>
          <path d="M 175 90 L 415 90" stroke="#059669" stroke-width="1.5" stroke-dasharray="3 3"/>
          <path d="M 415 90 L 490 90" stroke="#059669" stroke-width="2" marker-end="url(#arrow-green)"/>
          <text x="440" y="80" font-size="9" fill="#047857">Exits (+)</text>

          <rect x="250" y="175" width="220" height="36" rx="6" fill="#1e293b" stroke="#334155"/>
          <text x="360" y="197" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">∮ E⃗ · dA⃗ = q_in / ε₀</text>
        </svg>`
      }
    },
    {
      heading: "15. Application 1: Infinitely Long Straight Uniformly Charged Wire",
      paragraphs: [
        'SYSTEM GEOMETRY & SYMMETRY:',
        'Consider an infinitely long, straight thin wire carrying a uniform linear charge density λ (C/m). By cylindrical symmetry, the electric field E⃗ is directed radially outward perpendicular to the wire, and its magnitude depends solely on radial distance r.',
        'CHOICE OF GAUSSIAN SURFACE:',
        'We construct a coaxial right circular cylinder of radius r and length L centered on the wire.',
        'The closed cylindrical surface consists of three parts:',
        '1. Flat Top End Cap (A₁): Area vector n̂₁ points upward. Since E⃗ is radial, E⃗ ⊥ n̂₁ (θ = 90°). Φ₁ = ∫ E⃗ · dA⃗ = 0.',
        '2. Flat Bottom End Cap (A₂): Area vector n̂₂ points downward. E⃗ ⊥ n̂₂ (θ = 90°). Φ₂ = ∫ E⃗ · dA⃗ = 0.',
        '3. Curved Cylindrical Surface (A₃): Area vector n̂₃ is everywhere radially outward, exactly parallel to E⃗ (θ = 0°). The surface area is A_curved = 2πrL.',
        'FLUX INTEGRATION & DERIVATION:',
        'Φ_total = Φ₁ + Φ₂ + Φ₃ = 0 + 0 + E · (2πrL) = E(2πrL)',
        'Net charge enclosed inside the cylinder of length L is: q_enc = λ · L.',
        'Applying Gauss\'s Law: Φ_total = q_enc / ε₀',
        'E(2πrL) = (λ L) / ε₀',
        'Canceling length L from both sides gives the celebrated formula:',
        'E = λ / (2πε₀ r) = (2kλ) / r',
        'CRITICAL INVERSE-LINEAR RELATION (E ∝ 1/r):',
        'Unlike a point charge (where E ∝ 1/r²), the electric field of an infinite line charge falls off inversely with the FIRST power of distance: E ∝ 1/r.'
      ],
      visual: {
        caption: 'Infinitely Long Straight Wire: Cylindrical Gaussian surface of radius r and length L. Only curved surface contributes to flux.',
        guide: 'End caps have θ = 90° (zero flux). Curved surface has θ = 0° and area 2πrL, yielding E = λ / (2πε₀ r).',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 230" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- Infinite Wire -->
          <line x1="300" y1="10" x2="300" y2="220" stroke="#ef4444" stroke-width="4"/>
          <text x="280" y="25" font-size="10" font-weight="bold" fill="#dc2626">+λ</text>
          <text x="280" y="215" font-size="10" font-weight="bold" fill="#dc2626">+λ</text>

          <!-- Cylindrical Gaussian Surface -->
          <ellipse cx="300" cy="50" rx="100" ry="22" fill="#bfdbfe" fill-opacity="0.4" stroke="#2563eb" stroke-width="2"/>
          <line x1="200" y1="50" x2="200" y2="170" stroke="#2563eb" stroke-width="2"/>
          <line x1="400" y1="50" x2="400" y2="170" stroke="#2563eb" stroke-width="2"/>
          <ellipse cx="300" cy="170" rx="100" ry="22" fill="#bfdbfe" fill-opacity="0.6" stroke="#2563eb" stroke-width="2"/>

          <!-- Radial E-field arrows -->
          <line x1="300" y1="110" x2="480" y2="110" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/>
          <text x="440" y="100" font-size="12" font-weight="bold" fill="#dc2626">E⃗ (radial)</text>
          <line x1="300" y1="110" x2="120" y2="110" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/>

          <!-- Top cap normal (zero flux) -->
          <line x1="300" y1="50" x2="300" y2="20" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
          <text x="310" y="32" font-size="9" font-weight="bold" fill="#2563eb">n̂ (θ = 90° → Φ_top = 0)</text>

          <!-- Radius r dimension -->
          <line x1="300" y1="140" x2="400" y2="140" stroke="#475569" stroke-width="1.5"/>
          <text x="350" y="135" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">Radius r</text>

          <rect x="20" y="180" width="220" height="36" rx="6" fill="#fee2e2" stroke="#fca5a5"/>
          <text x="130" y="202" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">E = λ / (2πε₀ r) ∝ 1/r</text>
        </svg>`
      }
    },
    {
      heading: "16. Application 2: Uniformly Charged Infinite Plane Sheet",
      paragraphs: [
        'SYSTEM GEOMETRY & SYMMETRY:',
        'Consider an infinite, non-conducting thin plane sheet carrying a uniform surface charge density σ (C/m²). By planar symmetry, the electric field E⃗ is directed perpendicular (normal) to the sheet on both sides, pointing away from the sheet if σ > 0.',
        'CHOICE OF GAUSSIAN SURFACE (PILLBOX):',
        'We construct a cylindrical "pillbox" Gaussian surface of cross-sectional area A oriented perpendicular to the sheet, piercing through both sides.',
        'The Gaussian pillbox has three surfaces:',
        '1. Left Flat End Face (Area A): Area vector points left; E⃗ points left (θ = 0°). Flux Φ_left = E · A.',
        '2. Right Flat End Face (Area A): Area vector points right; E⃗ points right (θ = 0°). Flux Φ_right = E · A.',
        '3. Curved Cylinder Body: Area normal is perpendicular to E⃗ (θ = 90°). Flux Φ_curved = 0.',
        'FLUX INTEGRATION & DERIVATION:',
        'Φ_total = Φ_left + Φ_right + Φ_curved = EA + EA + 0 = 2EA',
        'The charge enclosed within cross-section A is: q_enc = σ · A.',
        'Applying Gauss\'s Law: Φ_total = q_enc / ε₀',
        '2EA = (σ A) / ε₀',
        'Canceling cross-sectional area A gives:',
        'E = σ / (2ε₀)',
        'KEY PROPERTY: INDEPENDENT OF DISTANCE r:',
        'The electric field of an infinite uniformly charged sheet is COMPLETELY UNIFORM and independent of distance r from the sheet! (Graph of E vs r is a flat horizontal line).',
        'TWO PARALLEL OPPOSITELY CHARGED SHEETS (FOUNDATION OF CAPACITORS):',
        '• Between the plates (fields add): E_net = σ/(2ε₀) + σ/(2ε₀) = σ / ε₀.',
        '• Outside the plates (fields cancel): E_net = σ/(2ε₀) - σ/(2ε₀) = 0.'
      ],
      visual: {
        caption: 'Uniformly Charged Infinite Plane Sheet: Pillbox Gaussian surface yielding uniform field E = σ / (2ε₀).',
        guide: 'Both flat end caps contribute flux EA each, giving 2EA = σA / ε₀ ⇒ E = σ / (2ε₀) (independent of distance).',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 230" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- Infinite Charged Sheet -->
          <polygon points="280,20 330,50 310,210 260,180" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="295" y="115" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">+σ</text>

          <!-- Pillbox Cylinder passing through sheet -->
          <ellipse cx="140" cy="115" rx="15" ry="30" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
          <line x1="140" y1="85" x2="450" y2="85" stroke="#2563eb" stroke-width="2"/>
          <line x1="140" y1="145" x2="450" y2="145" stroke="#2563eb" stroke-width="2"/>
          <ellipse cx="450" cy="115" rx="15" ry="30" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>

          <!-- E-field arrows -->
          <line x1="140" y1="115" x2="60" y2="115" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/>
          <text x="85" y="105" font-size="11" font-weight="bold" fill="#dc2626">E⃗_left</text>
          <line x1="450" y1="115" x2="530" y2="115" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/>
          <text x="475" y="105" font-size="11" font-weight="bold" fill="#dc2626">E⃗_right</text>

          <rect x="180" y="180" width="240" height="36" rx="6" fill="#fee2e2" stroke="#fca5a5"/>
          <text x="300" y="202" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">E = σ / (2ε₀) [Independent of r]</text>
        </svg>`
      }
    },
    {
      heading: "17. Application 3: Uniformly Charged Thin Spherical Shell (Field & E vs r Graph)",
      paragraphs: [
        'SYSTEM GEOMETRY:',
        'Consider a thin spherical conducting or non-conducting shell of radius R carrying a total charge Q distributed uniformly over its outer surface with surface charge density σ = Q / (4πR²).',
        'DERIVATION 1: INSIDE THE SHELL (r < R):',
        'Construct a concentric spherical Gaussian surface of radius r < R inside the shell.',
        'Since all charge resides entirely on the outer surface of the shell, the enclosed charge is: q_enc = 0.',
        'Applying Gauss\'s Law: ∮ E⃗ · dA⃗ = E_in · (4πr²) = q_enc / ε₀ = 0',
        'E_inside = 0  (FOR ALL r < R)',
        'This proves the principle of ELECTROSTATIC SHIELDING: The electric field inside a charged conducting shell or cavity is identically zero!',
        'DERIVATION 2: OUTSIDE THE SHELL (r > R):',
        'Construct a concentric spherical Gaussian surface of radius r > R outside the shell.',
        'The total charge enclosed is the entire charge of the shell: q_enc = Q.',
        'Applying Gauss\'s Law: E_out · (4πr²) = Q / ε₀',
        'E_outside = (1 / 4πε₀) · (Q / r²) = (kQ) / r²',
        'Remarkable Theorem: For all external points (r ≥ R), a uniformly charged spherical shell behaves EXACTLY as if its entire charge Q were concentrated at its geometric center!',
        'DERIVATION 3: ON THE SURFACE (r = R):',
        'E_surface = (1 / 4πε₀) · (Q / R²) = σ / ε₀',
        'E vs r GRAPHICAL ANALYSIS (NEET SUPER-HIT):',
        '• From r = 0 to r < R: E = 0 (Horizontal line along the r-axis).',
        '• At r = R: Discontinuous jump to maximum value E_max = kQ / R².',
        '• For r > R: Smooth hyperbolic decay where E ∝ 1/r².'
      ],
      visual: {
        caption: 'Uniformly Charged Thin Spherical Shell: Gaussian spheres (inside r < R and outside r > R) and the exact discontinuous E vs r graph.',
        guide: 'Inside shell (r < R), E = 0. At surface (r = R), E jumps to kQ/R². Outside (r > R), E falls as 1/r².',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- Spherical Shell & Gaussian Surfaces -->
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="315" height="195" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="157" y="22" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">SPHERICAL SHELL (RADIUS R, CHARGE Q)</text>
            <!-- Shell -->
            <circle cx="157" cy="105" r="48" fill="#fee2e2" stroke="#ef4444" stroke-width="3"/>
            <text x="157" y="68" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle">+ + + + (R, Q) + + + +</text>
            <!-- Inner Gaussian Sphere r < R -->
            <circle cx="157" cy="105" r="26" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
            <text x="157" y="108" font-size="9" font-weight="bold" fill="#2563eb" text-anchor="middle">r &lt; R: E=0</text>
            <!-- Outer Gaussian Sphere r > R -->
            <circle cx="157" cy="105" r="72" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="4 3"/>
            <text x="157" y="188" font-size="10" font-weight="bold" fill="#059669" text-anchor="middle">r &gt; R: E = kQ/r²</text>
          </g>

          <!-- E vs r Graph -->
          <g transform="translate(365, 20)">
            <rect x="0" y="0" width="315" height="195" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="157" y="22" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">E vs r GRAPH (DISCONTINUITY AT r = R)</text>
            <!-- Axes -->
            <line x1="50" y1="160" x2="295" y2="160" stroke="#64748b" stroke-width="2" marker-end="url(#arrow-axis)"/>
            <text x="290" y="175" font-size="11" font-weight="bold" fill="#64748b">r</text>
            <line x1="50" y1="160" x2="50" y2="35" stroke="#64748b" stroke-width="2" marker-end="url(#arrow-axis)"/>
            <text x="35" y="45" font-size="11" font-weight="bold" fill="#64748b">E</text>

            <!-- Curve: Zero from 0 to R (x=50 to x=130) -->
            <line x1="50" y1="158" x2="130" y2="158" stroke="#dc2626" stroke-width="4"/>
            <text x="90" y="148" font-size="10" font-weight="bold" fill="#dc2626">E = 0</text>

            <!-- Discontinuity line at R (x=130) -->
            <line x1="130" y1="160" x2="130" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>
            <text x="130" y="175" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">R</text>

            <!-- Peak point at R -->
            <circle cx="130" cy="60" r="4" fill="#dc2626"/>
            <text x="135" y="55" font-size="9" font-weight="bold" fill="#dc2626">E_max = kQ/R²</text>

            <!-- 1/r^2 Decay curve for r > R -->
            <path d="M 130 60 Q 180 120, 280 152" stroke="#dc2626" stroke-width="3" fill="none"/>
            <text x="210" y="105" font-size="10" font-weight="bold" fill="#dc2626">E ∝ 1/r²</text>
          </g>
        </svg>`
      }
    }
  ],

  visualLearning: {
    caption: "Comprehensive Comparison of Electrostatic Fields Derived via Gauss's Law.",
    tableData: {
      headers: ['Charge Geometry', 'Charge Density', 'Formula for Electric Field E', 'Distance Dependence'],
      rows: [
        ['Point Charge Q', 'q = Q', 'E = (1 / 4πε₀) · (Q / r²)', 'E ∝ 1/r² (Inverse Square)'],
        ['Infinite Line Charge', 'Linear (λ in C/m)', 'E = λ / (2πε₀ r) = 2kλ / r', 'E ∝ 1/r (Inverse Linear)'],
        ['Infinite Plane Sheet', 'Surface (σ in C/m²)', 'E = σ / (2ε₀)', 'E ∝ r⁰ (Constant / Independent)'],
        ['Spherical Shell (Inside r < R)', 'σ = Q / (4πR²)', 'E_in = 0', 'E = 0 (Shielding)'],
        ['Spherical Shell (Outside r ≥ R)', 'σ = Q / (4πR²)', 'E_out = (1 / 4πε₀) · (Q / r²)', 'E ∝ 1/r² (Inverse Square)'],
        ['Solid Non-Conductor (Inside r < R)', 'ρ = Q / ((4/3)πR³)', 'E_in = (1 / 4πε₀) · (Qr / R³)', 'E ∝ r (Directly Linear)']
      ]
    }
  },

  formulae: [
    {
      title: 'Electric Flux Definition',
      formula: '\\Phi = \\int \\vec{E} \\cdot d\\vec{A} = E A \\cos\\theta',
      meaning: 'Scalar product of electric field and area vector representing total field lines piercing surface.',
      symbols: 'Φ = flux (N·m²/C or V·m), E = field (N/C), A = area (m²), θ = angle between E⃗ and surface normal n̂',
      unit: 'N·m²/C or V·m',
      conditions: 'Uniform field or integrated over infinitesimal area elements dA.',
      whenToUse: 'Compute flux through flat or curved surfaces in uniform/non-uniform fields.'
    },
    {
      title: "Gauss's Law Equation",
      formula: '\\oint_S \\vec{E} \\cdot d\\vec{A} = \\frac{q_{enclosed}}{\\varepsilon_0}',
      meaning: 'Total outward electric flux through any closed surface equals enclosed net charge divided by ε₀.',
      symbols: 'q_enclosed = net enclosed charge (C), ε₀ = 8.854 × 10⁻¹² C²/(N·m²)',
      unit: 'N·m²/C',
      conditions: 'Closed 3D mathematical surface.',
      whenToUse: 'Determine flux through cubes, spheres, and cylinders enclosing charges.'
    },
    {
      title: 'Infinite Line Charge Field',
      formula: 'E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r} = \\frac{2k\\lambda}{r}',
      meaning: 'Electric field at radial distance r from an infinitely long straight uniformly charged wire.',
      symbols: 'λ = linear charge density (C/m), r = perpendicular distance (m), 2k = 18 × 10⁹ N·m²/C²',
      unit: 'N/C or V/m',
      conditions: 'Length of wire L >> r.',
      whenToUse: 'Direct numericals involving charged thin wires and coaxial cylinders.'
    },
    {
      title: 'Infinite Plane Sheet Field',
      formula: 'E = \\frac{\\sigma}{2\\varepsilon_0}',
      meaning: 'Uniform electric field created by an infinite thin sheet of uniform surface charge density σ.',
      symbols: 'σ = surface charge density (C/m²), ε₀ = 8.854 × 10⁻¹² C²/(N·m²)',
      unit: 'N/C or V/m',
      conditions: 'Distance r << lateral dimensions of sheet.',
      whenToUse: 'Plane sheet field and parallel capacitor plate field calculations.'
    },
    {
      title: 'Thin Spherical Shell Field',
      formula: 'E_{in} = 0 \\quad (r < R), \\quad E_{out} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Q}{r^2} \\quad (r \\ge R)',
      meaning: 'Electric field of a uniformly charged thin spherical shell inside and outside its radius R.',
      symbols: 'Q = total charge on shell, R = shell radius, r = distance from center',
      unit: 'N/C or V/m',
      conditions: 'Uniformly charged spherical shell or conducting sphere.',
      whenToUse: 'Concentric shells, electrostatic shielding, and graph matching problems.'
    }
  ],

  neetImportantPoints: [
    "Flux through a Cube: A point charge q placed at the CENTER of a cube produces total flux Φ_total = q / ε₀. Flux through EACH of the 6 faces = q / (6ε₀).",
    "Charge at Corner of Cube: A charge q placed at one CORNER of a cube requires 8 identical cubes to symmetrically enclose it. Flux through the original cube = q / (8ε₀). Flux through each of the 3 opposite open faces = (q / 8ε₀) / 3 = q / (24ε₀)!",
    "Charge at Center of Face of Cube: Requires 2 cubes to enclose. Flux through the cube = q / (2ε₀).",
    "Flux through Hemispherical Bowl: Point charge q at the center of the flat circular base: Half the field lines enter the bowl. Curved surface flux = q / (2ε₀).",
    "Conducting Surface Field: For a charged conductor of any arbitrary shape, the electric field just outside its surface is E = σ / ε₀ (twice that of an infinite non-conducting sheet σ / (2ε₀) because charge on a conductor resides on both outer faces!).",
    "Line Charge vs Point Charge: Line charge has E ∝ 1/r; Point charge has E ∝ 1/r²; Dipole has E ∝ 1/r³; Infinite sheet has E ∝ r⁰ (constant).",
    "Discontinuity in Spherical Shell: E(r) has an abrupt step discontinuity at r = R (jumps from 0 to kQ/R²)."
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking outside charges contribute to the net flux through a closed surface.',
      correctFact: 'Outside charges contribute ZERO to the NET flux (∮ E⃗ · dA⃗ = 0 for outside charges) because every entering field line also exits.',
      whyItMattersForNEET: 'Extremely popular NCERT conceptual MCQ in NEET.'
    },
    {
      commonConfusion: 'Confusing the angle θ in Φ = EA cos θ as the angle with the surface plane.',
      correctFact: 'θ is STRICTLY the angle between the Electric Field E⃗ and the Normal Area Vector n̂. If field makes 30° with the surface plane, θ = 90° - 30° = 60°!',
      whyItMattersForNEET: 'The #1 negative mark trap in electric flux numericals.'
    },
    {
      commonConfusion: 'Applying E = σ / ε₀ for a thin non-conducting plane sheet.',
      correctFact: 'Thin non-conducting sheet has E = σ / (2ε₀). A conducting slab has E = σ / ε₀ because charge appears on both surfaces.',
      whyItMattersForNEET: 'Frequent formula confusion in NEET capacitance and electrostatics.'
    }
  ],

  quickRevision: [
    "Φ = ∫ E⃗ · dA⃗ = EA cos θ (N·m²/C or V·m). θ is angle with normal n̂.",
    "Gauss's Law: ∮ E⃗ · dA⃗ = q_enc / ε₀. Independent of surface shape/size.",
    "Cube center: Φ_total = q/ε₀; One face = q/(6ε₀).",
    "Cube corner: Φ_cube = q/(8ε₀); One non-adjacent face = q/(24ε₀).",
    "Infinite wire: E = λ / (2πε₀ r) = 2kλ/r (E ∝ 1/r).",
    "Infinite sheet: E = σ / (2ε₀) (Independent of r).",
    "Thin spherical shell: E_in = 0 (r < R); E_surf = kQ/R²; E_out = kQ/r² (r > R).",
    "Two oppositely charged plates: E_between = σ/ε₀; E_outside = 0."
  ],

  practiceQuestions: [
    {
      questionId: 'phys-gauss-pq-1',
      question: 'A point charge +q is placed at the center of an open hemispherical bowl of radius R. What is the total electric flux passing through the curved surface of the bowl?',
      options: [
        'q / ε₀',
        'q / (2ε₀)',
        'q / (4ε₀)',
        'Zero'
      ],
      correctAnswerIndex: 1,
      explanation: 'By symmetry, if we complete the hemisphere into a full sphere of radius R, the total flux passing through the entire sphere would be Φ_sphere = q / ε₀ by Gauss\'s Law.\nSince the charge is placed exactly at the center of the base, half of the total field lines pass downward through the curved hemispherical surface and half pass upward through the open upper half.\nTherefore, the electric flux through the curved surface of the hemisphere is:\nΦ = (1/2) · Φ_sphere = q / (2ε₀).',
      difficulty: 'Easy',
      conceptTested: 'Gauss\'s law symmetry for hemispherical surfaces'
    },
    {
      questionId: 'phys-gauss-pq-2',
      question: 'An electric field in a region is given by E⃗ = (500 x) î N/C. A cube of side length a = 0.1 m is placed with its faces parallel to the coordinate planes from x = 0 to x = a. What is the net electric flux emerging from the cube and the net charge enclosed inside it?',
      options: [
        'Φ = 0.5 N·m²/C, q_enc = 4.43 × 10⁻¹² C',
        'Φ = 5.0 N·m²/C, q_enc = 4.43 × 10⁻¹¹ C',
        'Φ = 0.5 N·m²/C, q_enc = 8.85 × 10⁻¹² C',
        'Φ = 0 N·m²/C, q_enc = 0 C'
      ],
      correctAnswerIndex: 0,
      explanation: 'Field is along X-axis: E_x = 500 x. Only the two faces perpendicular to the X-axis (left face at x=0 and right face at x=a) contribute to flux.\n1. Left face at x = 0: E_x(0) = 0 ⇒ Φ_left = 0.\n2. Right face at x = a = 0.1 m: E_x(0.1) = 500 × 0.1 = 50 N/C (pointing in +î direction, parallel to outward normal n̂ = +î).\nArea of face A = a² = (0.1)² = 0.01 m².\nΦ_right = E · A = 50 × 0.01 = 0.5 N·m²/C.\nTotal outward flux Φ_net = Φ_left + Φ_right = 0 + 0.5 = 0.5 N·m²/C.\nBy Gauss\'s Law: q_enc = ε₀ · Φ_net = (8.854 × 10⁻¹² C²/(N·m²)) × 0.5 N·m²/C = 4.427 × 10⁻¹² C ≈ 4.43 × 10⁻¹² C.',
      difficulty: 'Medium',
      conceptTested: 'Non-uniform electric field flux through cube and enclosed charge calculation'
    },
    {
      questionId: 'phys-gauss-pq-3',
      question: 'Two infinite plane sheets carrying uniform surface charge densities +σ and -σ are placed parallel to each other at a separation d. What are the electric field strengths in the region between the sheets and in the regions outside the sheets?',
      options: [
        'Between: σ / ε₀; Outside: 0',
        'Between: 0; Outside: σ / ε₀',
        'Between: σ / (2ε₀); Outside: σ / (2ε₀)',
        'Between: 2σ / ε₀; Outside: 0'
      ],
      correctAnswerIndex: 0,
      explanation: 'Electric field due to a single infinite sheet is E = σ / (2ε₀).\n• Region Between the Sheets: The field due to +σ points away from it (toward -σ plate), and the field due to -σ points toward it (in the same direction).\nSince both field vectors point in the SAME direction:\nE_between = σ / (2ε₀) + σ / (2ε₀) = σ / ε₀.\n• Regions Outside the Sheets: The field due to +σ points away from it, while the field due to -σ points toward it (in OPPOSITE directions).\nSince the two fields are equal in magnitude and opposite in direction:\nE_outside = σ / (2ε₀) - σ / (2ε₀) = 0.',
      difficulty: 'Easy',
      conceptTested: 'Electric field superposition of parallel charged sheets'
    }
  ],

  pyqs: [
    {
      year: 2023,
      exam: 'NEET UG',
      question: 'A point charge q is placed at a corner of a cube of side a. The total electric flux emerging through the cube is:',
      options: [
        'q / ε₀',
        'q / (8ε₀)',
        'q / (6ε₀)',
        'q / (24ε₀)'
      ],
      correctAnswerIndex: 1,
      explanation: 'To enclose a charge placed at the corner (vertex) of a cube symmetrically, we require 8 identical cubes sharing that common vertex.\nBy Gauss\'s Law, the total electric flux through all 8 cubes combined is Φ_total = q / ε₀.\nBy symmetry, the flux passing through any ONE of the 8 cubes is:\nΦ_cube = (1/8) · (q / ε₀) = q / (8ε₀).',
      conceptTested: 'Gauss\'s law corner cube symmetry and flux distribution',
      ncertReference: 'Class 12 Physics NCERT, Chapter 1, Section 1.14'
    },
    {
      year: 2021,
      exam: 'NEET UG',
      question: 'A hollow metal sphere of radius R is uniformly charged. The electric field due to the sphere at a distance r from the center:',
      options: [
        'increases as r increases for r < R and for r > R',
        'zero as r increases for r < R, decreases as r increases for r > R',
        'zero as r increases for r < R, increases as r increases for r > R',
        'decreases as r increases for r < R and for r > R'
      ],
      correctAnswerIndex: 1,
      explanation: 'For a hollow charged metal sphere (spherical shell) of radius R:\n1. Inside the sphere (r < R): Since no charge is enclosed within any concentric Gaussian surface inside the shell (q_enc = 0), E = 0 for all r < R.\n2. Outside the sphere (r > R): E = (1 / 4πε₀) · (Q / r²).\nAs distance r increases beyond R, the electric field decreases inversely with the square of distance (E ∝ 1/r²).\nTherefore, the electric field is zero for r < R and decreases as r increases for r > R.',
      conceptTested: 'Electric field inside and outside a uniformly charged spherical shell',
      ncertReference: 'Class 12 Physics NCERT, Chapter 1, Section 1.15'
    },
    {
      year: 2019,
      exam: 'NEET UG',
      question: 'A hollow insulated conducting sphere is given a positive charge of 10 μC. What will be the electric field at the center of the sphere if its radius is 2 meters?',
      options: [
        'Zero',
        '5 μC/m²',
        '20 μC/m²',
        '8 μC/m²'
      ],
      correctAnswerIndex: 0,
      explanation: 'In electrostatic equilibrium, all charge given to a conducting sphere resides entirely on its outer surface. By Gauss\'s Law, a Gaussian surface of any radius r < R enclosed inside the sphere contains zero charge (q_enc = 0).\nTherefore, the electric field anywhere inside the sphere (including at its center) is identically ZERO (E = 0).',
      conceptTested: 'Electrostatic shielding and zero internal field in spherical conductor',
      ncertReference: 'Class 12 Physics NCERT, Chapter 1, Section 1.15'
    }
  ]
};
