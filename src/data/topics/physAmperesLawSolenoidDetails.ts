import { DetailedTopicContent } from '../../types/neet';

export const physAmperesLawSolenoidDetails: DetailedTopicContent = {
  topicId: 'phys-amperes-law-solenoid',
  topicName: 'Ampere\'s Circuital Law, Cylindrical Conductors, Solenoid & Toroid',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Magnetic Effects of Current & Magnetism',
  chapter: 'Moving Charges and Magnetism',

  whatIsThisTopic:
    'Comprehensive first-principles mastery of Ampere\'s Circuital Law (∮ B · dl = μ₀ I_enclosed), Amperian loop symmetry criteria, magnetic field profiles of thin and thick cylindrical conductors (inside B ∝ r, outside B ∝ 1/r), ideal long Solenoids (B = μ₀ n I), finite solenoid end-effects (B_end = ½ μ₀ n I), ferromagnetic core amplification (B = μ_r μ₀ n I), and circular Toroids.',

  basicIdea: [
    'Ampere\'s Circuital Law (ACL): The line integral of the magnetic field B around any closed loop (Amperian loop) in free space equals μ₀ times the total steady electric current enclosed by that loop: ∮ B · dl = μ₀ I_enclosed.',
    'Sign Convention for Enclosed Current: Curl the fingers of your right hand in the direction of traversal along the Amperian loop; currents flowing in the direction of the outstretched thumb are counted as POSITIVE, while currents flowing opposite are counted as NEGATIVE.',
    'Symmetry Requirement: Ampere\'s law is universally true for all closed loops, but it is practically useful for calculating B only when the magnetic field B is either tangential and constant in magnitude along the loop, or normal to dl (B · dl = 0), or zero.',
    'Solid Cylindrical Conductor of Radius R carrying Uniform Current I:',
    '• Outside the wire (r ≥ R): B_out = μ₀ I / (2π r) ∝ 1/r.',
    '• On the surface (r = R): B_surface = μ₀ I / (2π R) (Maximum value).',
    '• Inside the wire (r ≤ R): Current enclosed is I_enc = I (π r² / π R²) = I (r² / R²). Thus, ∮ B · dl = B(2π r) = μ₀ I (r²/R²) ⇒ B_in = (μ₀ I / 2π R²) · r ∝ r (linear increase from zero at the central axis).',
    '• Hollow Cylindrical Pipe / Tube: Inside the cavity (r < R_inner), enclosed current is ZERO ⇒ B_inside = 0.',
    'Solenoid Principle: A long helical coil of insulated wire closely wound with n = N / L turns per unit length. For an ideal long solenoid (L ≫ R):',
    '• Inside the solenoid: The magnetic field is strictly uniform, intense, and parallel to the central axis: B_inside = μ₀ n I = μ₀ (N / L) I.',
    '• Outside the solenoid: The magnetic field is negligibly weak (B_outside ≈ 0).',
    '• At the extreme ends of a long solenoid: B_end = ½ μ₀ n I = ½ B_centre.',
    '• Solenoid with Magnetic Core (relative permeability μ_r): B_core = μ_r μ₀ n I = μ n I.',
    'Toroid Principle: An endless solenoid bent into the shape of a closed circular ring (doughnut) of mean radius R carrying N turns (turn density n = N / 2π R):',
    '• In the open space interior to the toroid (r < r₁): Enclosed current = 0 ⇒ B = 0.',
    '• Inside the toroidal core (r₁ < r < r₂): ∮ B · dl = B(2π r) = μ₀ N I ⇒ B = (μ₀ N I) / (2π r) = μ₀ n I (strictly uniform circular field).',
    '• In the open space exterior to the toroid (r > r₂): Enclosed current is zero (+NI and -NI cancel) ⇒ B = 0.'
  ],

  importantTerms: [
    {
      term: 'Ampere\'s Circuital Law',
      symbol: '∮ B · dl = μ₀ I_enc',
      definition:
        'The closed line integral of magnetic field B along an Amperian loop equals μ₀ times the total algebraic current passing through the surface enclosed by the loop.',
      neetNote: 'The magnetic analog of Gauss\'s Law in electrostatics (∮ E · dA = q_enc / ε₀).'
    },
    {
      term: 'Amperian Loop',
      symbol: 'Closed Path C',
      definition:
        'An imaginary closed geometric contour chosen with high spatial symmetry to evaluate the line integral ∮ B · dl easily.',
      neetNote: 'Choose a circle for straight wires/toroids, and a rectangle for solenoids.'
    },
    {
      term: 'Turn Density (n)',
      symbol: 'n = N / L',
      definition:
        'The number of turns per unit axial length of a solenoid or toroid (turns/meter).',
      neetNote: 'Crucial NEET trap: If L is in cm, convert to meters: n = (N / L_cm) × 100 turns/m.'
    },
    {
      term: 'Ideal Long Solenoid',
      symbol: 'L ≫ R',
      definition:
        'A tightly wound cylindrical coil whose length L is much greater than its cross-sectional radius R, ensuring uniform axial internal field and negligible external field.',
      neetNote: 'B_inside = μ₀ n I is independent of the radius or cross-sectional shape of the solenoid!'
    },
    {
      term: 'Toroid',
      symbol: 'B = μ₀ N I / (2π R)',
      definition:
        'A toroidal solenoid forming a closed continuous ring where magnetic field is completely confined within the core.',
      neetNote: 'Field is exactly ZERO everywhere in the inner hole and outside the toroid.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Ampere\'s Circuital Law: Statement, Symmetry & Current Sign Rules',
      paragraphs: [
        'Ampere\'s Circuital Law states that the line integral of the magnetic field vector B around any closed path (called an Amperian loop) in vacuum is equal to the product of permeability of free space μ₀ and the total net electric current enclosed by that path: ∮ B · dl = μ₀ I_enclosed.',
        'Physical Significance: Just as Gauss\'s Law (∮ E · dA = q_enc / ε₀) provides an elegant, rapid method for finding electric fields in systems with high spherical, cylindrical, or planar symmetry, Ampere\'s Circuital Law allows instant calculation of magnetic fields when current distributions possess cylindrical, helical, or toroidal symmetry.',
        'Right-Hand Rule for Enclosed Current Sign: When evaluating ∮ B · dl, curl your right-hand fingers in the direction of traversal along the loop. The outstretched thumb defines the positive normal vector. Any current piercing the enclosed surface in the direction of the thumb is +I; any current passing in the opposite direction is -I. Net enclosed current is I_enc = ∑ I_positive - ∑ I_negative.',
        'Why Symmetry is Crucial: ∮ B · dl = ∮ B dl cosθ. For the integral to evaluate simply to B · (Length of loop), we must choose an Amperian loop where: (1) B is everywhere tangent to dl (θ = 0°, cosθ = 1) and of constant magnitude B, or (2) B is perpendicular to dl (θ = 90°, cos 90° = 0), or (3) B = 0.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="42" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Ampere\'s Circuital Law: Amperian Loop Geometry & Sign Convention</text><ellipse cx="350" cy="120" rx="180" ry="60" fill="#ffffff" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/><path d="M 530 120 L 526 110 L 534 112" fill="#2563eb"/><text x="545" y="115" fill="#2563eb" font-size="11" font-weight="bold">dl (Traversal)</text><line x1="280" y1="180" x2="280" y2="60" stroke="#ef4444" stroke-width="3"/><polygon points="280,50 274,65 286,65" fill="#ef4444"/><text x="250" y="70" fill="#b91c1c" font-size="11" font-weight="bold">+I₁ (Enclosed)</text><line x1="380" y1="60" x2="380" y2="180" stroke="#ef4444" stroke-width="3"/><polygon points="380,190 374,175 386,175" fill="#ef4444"/><text x="400" y="180" fill="#b91c1c" font-size="11" font-weight="bold">-I₂ (Enclosed)</text><line x1="570" y1="180" x2="570" y2="60" stroke="#94a3b8" stroke-width="2.5"/><polygon points="570,50 564,65 576,65" fill="#94a3b8"/><text x="585" y="70" fill="#64748b" font-size="10" font-weight="bold">I₃ (Outside)</text><text x="350" y="205" fill="#1e3a8a" font-size="13" font-weight="bold" text-anchor="middle">∮ B · dl = μ₀ (I₁ - I₂)    [I₃ contributes to B, but not to ∮ B · dl enclosed current]</text></svg>',
        caption:
          'Figure 4.5: Ampere\'s Circuital Law with Amperian loop, showing sign convention for enclosed currents and external current I₃.',
        guide:
          'Traversing counterclockwise makes upward current positive (+I₁) and downward current negative (-I₂). External current I₃ is excluded from I_enclosed.'
      },
      importantPoints: [
        'Ampere\'s Law formula: ∮ B · dl = μ₀ I_enclosed.',
        'Currents outside the loop do NOT contribute to I_enclosed, although they contribute to the total field B at every point on the loop.',
        'If net enclosed current is zero (I_enc = 0), then ∮ B · dl = 0.',
        'Ampere\'s law is strictly valid for steady currents (Maxwell later added displacement current for time-varying E fields).'
      ]
    },
    {
      heading: '2. Magnetic Field of a Thick Solid Cylindrical Wire & Graph Analysis',
      paragraphs: [
        'Consider a long, straight solid cylindrical conductor of radius R carrying a total steady current I uniformly distributed over its circular cross-section (current density J = I / (π R²)). We analyze B at any distance r from the central cylinder axis:',
        '1. Outside the Wire (r ≥ R): Choose a circular Amperian loop of radius r concentric with the cylinder. By cylindrical symmetry, B is tangential and constant in magnitude. The entire current I is enclosed: ∮ B · dl = B(2π r) = μ₀ I ⇒ B_out = μ₀ I / (2π r). Thus, B_out ∝ 1/r (hyperbolic decay).',
        '2. On the Surface (r = R): B_surface = μ₀ I / (2π R). This is the MAXIMUM magnetic field produced by the solid conductor.',
        '3. Inside the Wire (r ≤ R): Choose a concentric circular Amperian loop of radius r. The enclosed cross-sectional area is π r², so the enclosed current is I_enc = J · (π r²) = (I / π R²) · (π r²) = I · (r² / R²). Applying Ampere\'s Law: ∮ B · dl = B(2π r) = μ₀ I (r² / R²) ⇒ B_in = (μ₀ I / 2π R²) · r. Thus, B_in ∝ r (linear increase from B = 0 at the central axis to B_max at the surface).',
        '4. Hollow Pipe / Thin Cylindrical Tube: For r < R_inner, enclosed current is 0, so B_inside = 0 everywhere inside the hollow cavity! Outside (r > R_outer), B_out = μ₀ I / (2π r).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="300" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="180" y="40" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">Thick Cylindrical Conductor</text><circle cx="180" cy="115" r="55" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><text x="180" y="105" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Radius R</text><text x="180" y="125" fill="#1e40af" font-size="10" text-anchor="middle">Uniform J = I/πR²</text><circle cx="180" cy="115" r="30" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3"/><text x="180" y="150" fill="#b91c1c" font-size="9" font-weight="bold" text-anchor="middle">Inner Loop r &lt; R</text><circle cx="180" cy="115" r="80" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/><text x="180" y="205" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">Outer Loop r &gt; R</text><rect x="370" y="20" width="300" height="200" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="8"/><text x="520" y="40" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">Magnetic Field B vs Radial Distance r</text><line x1="410" y1="180" x2="640" y2="180" stroke="#334155" stroke-width="2"/><line x1="410" y1="180" x2="410" y2="60" stroke="#334155" stroke-width="2"/><text x="640" y="195" fill="#334155" font-size="10" font-weight="bold">r</text><text x="400" y="65" fill="#334155" font-size="10" font-weight="bold">B</text><line x1="410" y1="180" x2="490" y2="90" stroke="#2563eb" stroke-width="3"/><path d="M 490 90 Q 530 135 630 170" fill="none" stroke="#ef4444" stroke-width="3"/><line x1="490" y1="180" x2="490" y2="90" stroke="#64748b" stroke-width="1" stroke-dasharray="3,3"/><text x="490" y="195" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">r = R</text><text x="445" y="125" fill="#2563eb" font-size="10" font-weight="bold">B ∝ r</text><text x="560" y="125" fill="#b91c1c" font-size="10" font-weight="bold">B ∝ 1/r</text><text x="490" y="80" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">B_max</text></svg>',
        caption:
          'Figure 4.6: Geometry and B vs r graph for a solid cylindrical conductor carrying uniform current.',
        guide:
          'Notice B increases linearly from zero at centre (r = 0) to B_max at surface (r = R), then falls hyperbolically as 1/r outside.'
      },
      importantPoints: [
        'Inside solid wire (r ≤ R): B = (μ₀ I / 2π R²) · r ⇒ B ∝ r.',
        'Surface of wire (r = R): B_max = μ₀ I / (2π R).',
        'Outside wire (r ≥ R): B = μ₀ I / (2π r) ⇒ B ∝ 1/r.',
        'Inside a hollow conducting pipe carrying longitudinal current: B = 0 everywhere inside the hollow lumen.'
      ]
    },
    {
      heading: '3. The Solenoid: Field Derivation, Turn Density & End Effects',
      paragraphs: [
        'What is a Solenoid? A solenoid is an electrical coil formed by winding insulated copper wire closely in the form of a long helix around a non-conducting cylindrical core.',
        'Ideal Long Solenoid Derivation via Ampere\'s Law: Consider an ideal long solenoid with n turns per unit length carrying current I. The internal magnetic field is uniform and purely axial; the external field is negligibly small (B_out ≈ 0).',
        'Choose a rectangular Amperian loop abcd of length L with side ab lying inside along the axis, side cd lying outside in the zero-field region, and sides bc and da perpendicular to the axis:',
        '∮ B · dl = ∫_a^b B · dl + ∫_b^c B · dl + ∫_c^d B · dl + ∫_d^a B · dl',
        '• Along side ab: B is parallel to dl ⇒ ∫_a^b B · dl = B · L.',
        '• Along perpendicular sides bc and da: B ⟂ dl ⇒ cos 90° = 0 ⇒ integrals are 0.',
        '• Along side cd (outside): B = 0 ⇒ integral is 0.',
        'Thus, ∮ B · dl = B · L. The total number of turns enclosed in length L is N_enc = n · L, so total enclosed current is I_enc = n · L · I. Applying Ampere\'s Law: B · L = μ₀ (n L I) ⇒ B_inside = μ₀ n I = μ₀ (N / L) I.',
        'Key Solenoid Insights for NEET:',
        '1. Independence: The field inside an ideal solenoid is completely independent of its radius R and cross-sectional area A!',
        '2. End Effect of Finite Solenoid: At the extreme flat ends of a long solenoid, field lines flare out symmetrically into half-space. The field strength at each end is exactly HALF of the central field: B_end = ½ μ₀ n I = ½ B_centre.',
        '3. Inserting a Magnetic Core: If a soft iron core of relative permeability μ_r is inserted, the magnetic field is amplified by a factor of μ_r: B_core = μ_r μ₀ n I.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="42" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Long Solenoid: Field Derivation via Rectangular Amperian Loop</text><g transform="translate(60, 65)"><g fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"><circle cx="20" cy="20" r="8"/><circle cx="60" cy="20" r="8"/><circle cx="100" cy="20" r="8"/><circle cx="140" cy="20" r="8"/><circle cx="180" cy="20" r="8"/><circle cx="220" cy="20" r="8"/><circle cx="260" cy="20" r="8"/><circle cx="300" cy="20" r="8"/><circle cx="340" cy="20" r="8"/><circle cx="380" cy="20" r="8"/><circle cx="420" cy="20" r="8"/><circle cx="460" cy="20" r="8"/><circle cx="500" cy="20" r="8"/></g><g fill="#dc2626"><circle cx="20" cy="20" r="2"/><circle cx="60" cy="20" r="2"/><circle cx="100" cy="20" r="2"/><circle cx="140" cy="20" r="2"/><circle cx="180" cy="20" r="2"/><circle cx="220" cy="20" r="2"/><circle cx="260" cy="20" r="2"/><circle cx="300" cy="20" r="2"/><circle cx="340" cy="20" r="2"/><circle cx="380" cy="20" r="2"/><circle cx="420" cy="20" r="2"/><circle cx="460" cy="20" r="2"/><circle cx="500" cy="20" r="2"/></g><text x="525" y="24" fill="#b91c1c" font-size="9" font-weight="bold">Current Out ⊙</text><line x1="10" y1="55" x2="510" y2="55" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-flow)"/><line x1="10" y1="65" x2="510" y2="65" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-flow)"/><text x="260" y="48" fill="#1e40af" font-size="11" font-weight="bold">Uniform B_inside = μ₀ n I</text><g fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"><circle cx="20" cy="100" r="8"/><circle cx="60" cy="100" r="8"/><circle cx="100" cy="100" r="8"/><circle cx="140" cy="100" r="8"/><circle cx="180" cy="100" r="8"/><circle cx="220" cy="100" r="8"/><circle cx="260" cy="100" r="8"/><circle cx="300" cy="100" r="8"/><circle cx="340" cy="100" r="8"/><circle cx="380" cy="100" r="8"/><circle cx="420" cy="100" r="8"/><circle cx="460" cy="100" r="8"/><circle cx="500" cy="100" r="8"/></g><g stroke="#2563eb" stroke-width="1.5"><line x1="16" y1="96" x2="24" y2="104"/><line x1="24" y1="96" x2="16" y2="104"/><line x1="56" y1="96" x2="64" y2="104"/><line x1="64" y1="96" x2="56" y2="104"/><line x1="96" y1="96" x2="104" y2="104"/><line x1="104" y1="96" x2="96" y2="104"/><line x1="136" y1="96" x2="144" y2="104"/><line x1="144" y1="96" x2="136" y2="104"/><line x1="176" y1="96" x2="184" y2="104"/><line x1="184" y1="96" x2="176" y2="104"/><line x1="216" y1="96" x2="224" y2="104"/><line x1="224" y1="96" x2="216" y2="104"/><line x1="256" y1="96" x2="264" y2="104"/><line x1="264" y1="96" x2="256" y2="104"/><line x1="296" y1="96" x2="304" y2="104"/><line x1="304" y1="96" x2="296" y2="104"/><line x1="336" y1="96" x2="344" y2="104"/><line x1="344" y1="96" x2="336" y2="104"/><line x1="376" y1="96" x2="384" y2="104"/><line x1="384" y1="96" x2="376" y2="104"/><line x1="416" y1="96" x2="424" y2="104"/><line x1="424" y1="96" x2="416" y2="104"/><line x1="456" y1="96" x2="464" y2="104"/><line x1="464" y1="96" x2="456" y2="104"/><line x1="496" y1="96" x2="504" y2="104"/><line x1="504" y1="96" x2="496" y2="104"/></g><text x="525" y="104" fill="#1e40af" font-size="9" font-weight="bold">Current In ⊗</text><rect x="120" y="60" width="180" height="60" fill="none" stroke="#059669" stroke-width="2" stroke-dasharray="4,3"/><text x="110" y="55" fill="#047857" font-size="10" font-weight="bold">a</text><text x="310" y="55" fill="#047857" font-size="10" font-weight="bold">b</text><text x="310" y="130" fill="#047857" font-size="10" font-weight="bold">c</text><text x="110" y="130" fill="#047857" font-size="10" font-weight="bold">d</text><text x="210" y="138" fill="#047857" font-size="10" font-weight="bold">Amperian Loop (Length L)</text></g><text x="350" y="222" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">B · L = μ₀ (n L I) ⇒ B = μ₀ n I   |   At Ends: B_end = ½ μ₀ n I</text></svg>',
        caption:
          'Figure 4.7: Long ideal solenoid with cross-section showing uniform internal field and rectangular Amperian loop.',
        guide:
          'Top conductors show current emerging ⊙; bottom show current entering ⊗. Inside field is uniform and directed axially to the right.'
      },
      importantPoints: [
        'Ideal long solenoid: B_inside = μ₀ n I = μ₀ (N / L) I.',
        'B_inside is independent of coil radius R and area A.',
        'At the ends of a semi-infinite / long solenoid: B_end = ½ μ₀ n I.',
        'With magnetic core of relative permeability μ_r: B = μ_r μ₀ n I.'
      ]
    },
    {
      heading: '4. The Toroid: Endless Solenoid Field Analysis',
      paragraphs: [
        'What is a Toroid? A toroid is a hollow circular ring (torus) upon which a large number of turns of insulated wire are closely wound. It can be viewed conceptually as a long solenoid bent into the shape of a closed ring, completely eliminating open end boundaries.',
        'Field Analysis across 3 Regions using Ampere\'s Law:',
        '1. Open Interior Space (r < r₁): For any circular Amperian loop inside the central hole, no current passes through the enclosed surface (I_enc = 0) ⇒ B = 0.',
        '2. Inside the Toroidal Core (r₁ < r < r₂): For a circular Amperian loop of radius r inside the core, every one of the N turns cuts through the surface once in the same direction. Thus, I_enc = N · I. By circular symmetry, B is everywhere tangent to the circle: ∮ B · dl = B(2π r) = μ₀ N I ⇒ B = (μ₀ N I) / (2π r) = μ₀ n I, where n = N / (2π r) is the turn density.',
        '3. Exterior Space (r > r₂): For any circular Amperian loop enclosing the entire toroid, each turn cuts the surface twice in equal and opposite directions (once going up ⊙ and once going down ⊗). The net enclosed current is I_enc = N I - N I = 0 ⇒ B = 0.',
        'Conclusion: The magnetic field of a toroid is STRICTLY CONFINED to the interior of its core. The magnetic field is ZERO everywhere in the inner open hole and outside the toroid!'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="42" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Toroid: Cross-Section & Magnetic Field Regions</text><g transform="translate(180, 120)"><circle cx="0" cy="0" r="70" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><circle cx="0" cy="0" r="35" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/><circle cx="0" cy="0" r="52" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3"/><text x="0" y="4" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">B = μ₀ n I</text><text x="0" y="-12" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">Core</text><circle cx="0" cy="0" r="18" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,3"/><text x="0" y="-4" fill="#047857" font-size="9" font-weight="bold" text-anchor="middle">B = 0</text></g><rect x="420" y="60" width="220" height="130" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" rx="6"/><text x="530" y="80" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Toroid Field Summary</text><text x="530" y="105" fill="#1e3a8a" font-size="11" text-anchor="middle">1. Inner Hole (r &lt; r₁): B = 0</text><text x="530" y="125" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">2. Inside Core: B = μ₀ N I / (2π r)</text><text x="530" y="145" fill="#1e3a8a" font-size="11" text-anchor="middle">3. Outer Space (r &gt; r₂): B = 0</text><text x="530" y="165" fill="#047857" font-size="10" text-anchor="middle">No magnetic flux leaks outside</text><text x="350" y="210" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">Turn Density n = N / (2π r_mean)   |   B_core = μ₀ n I</text></svg>',
        caption:
          'Figure 4.8: Cross-sectional geometry of a toroid showing magnetic field confinement inside the core.',
        guide:
          'Magnetic field is strictly non-zero only within the toroidal core; both the central open space and outer space have B = 0.'
      },
      importantPoints: [
        'Toroid field inside core: B = μ₀ N I / (2π r) = μ₀ n I.',
        'B = 0 in the inner empty hole (r < r₁) and outside (r > r₂).',
        'Toroids prevent magnetic flux leakage, making them ideal for inductors and transformers.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Ampere\'s Circuital Law',
      formula: '\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enclosed}}',
      variables: 'μ₀ = 4π × 10⁻⁷ T·m/A, I_enclosed = net algebraic current piercing the Amperian surface'
    },
    {
      title: 'Solid Cylindrical Wire Magnetic Field Profile',
      formula: 'B_{\\text{in}} = \\frac{\\mu_0 I r}{2\\pi R^2} \\; (r \\le R), \\quad B_{\\text{out}} = \\frac{\\mu_0 I}{2\\pi r} \\; (r \\ge R), \\quad B_{\\text{surface}} = \\frac{\\mu_0 I}{2\\pi R}',
      variables: 'R = wire radius (m), r = radial distance from axis (m), I = total current (A)'
    },
    {
      title: 'Ideal Long Solenoid Magnetic Field',
      formula: 'B_{\\text{inside}} = \\mu_0 n I = \\mu_0 \\left(\\frac{N}{L}\\right) I, \\quad B_{\\text{end}} = \\frac{1}{2} \\mu_0 n I',
      variables: 'n = N / L = turn density (turns/m), N = total turns, L = length (m), I = current (A)'
    },
    {
      title: 'Toroid Magnetic Field',
      formula: 'B = \\frac{\\mu_0 N I}{2\\pi r} = \\mu_0 n I \\quad (r_1 < r < r_2), \\quad B = 0 \\quad (\\text{outside & inner hole})',
      variables: 'N = total turns, r = mean radius of toroid (m), n = N / 2πr'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="220" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="640" height="180" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="45" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Comparison of Key Geometries in Ampere\'s Law</text><rect x="50" y="65" width="180" height="115" fill="#ffffff" stroke="#93c5fd" stroke-width="1" rx="6"/><text x="140" y="85" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Straight Wire</text><text x="140" y="110" fill="#1e3a8a" font-size="10" text-anchor="middle">B = μ₀ I / (2π r)</text><text x="140" y="130" fill="#64748b" font-size="10" text-anchor="middle">Circular field lines</text><text x="140" y="155" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">B ∝ 1/r</text><rect x="260" y="65" width="180" height="115" fill="#ffffff" stroke="#93c5fd" stroke-width="1" rx="6"/><text x="350" y="85" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Long Solenoid</text><text x="350" y="110" fill="#1e3a8a" font-size="10" text-anchor="middle">B = μ₀ n I</text><text x="350" y="130" fill="#64748b" font-size="10" text-anchor="middle">Uniform axial field</text><text x="350" y="155" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">Independent of R</text><rect x="470" y="65" width="180" height="115" fill="#ffffff" stroke="#93c5fd" stroke-width="1" rx="6"/><text x="560" y="85" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Toroid</text><text x="560" y="110" fill="#1e3a8a" font-size="10" text-anchor="middle">B = μ₀ N I / (2π r)</text><text x="560" y="130" fill="#64748b" font-size="10" text-anchor="middle">Confined in core</text><text x="560" y="155" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">Zero external flux</text></svg>',
    caption: 'Comparative summary of magnetic field formulas and spatial properties for fundamental symmetric current geometries.'
  },

  neetImportantPoints: [
    'Inside an ideal long solenoid, the magnetic field B = μ₀ n I is completely independent of the radius, cross-sectional area, or length of the solenoid.',
    'At the end of a long solenoid, the magnetic field is exactly half the field at the centre: B_end = ½ μ₀ n I.',
    'For a solid cylindrical wire of radius R, field increases linearly inside (B ∝ r), reaches maximum at surface (r = R), and drops hyperbolically outside (B ∝ 1/r).',
    'Inside a hollow cylindrical pipe carrying current along its length, B = 0 everywhere inside the lumen.',
    'In a toroid, magnetic field is zero both in the inner hole and outside the toroid; it is non-zero only within the core.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing total turns N with turn density n in solenoid problems.',
      correctFact:
        'n is turns per unit length (n = N / L). If a question says "a 50 cm solenoid has 500 turns", n = 500 / 0.5 m = 1000 turns/m. Using N = 500 directly in B = μ₀ n I leads to a 2x error.',
      whyItMattersForNEET: 'One of the most frequent arithmetic traps in NEET Physics.'
    },
    {
      commonConfusion: 'Assuming magnetic field inside a solid current-carrying wire is uniform.',
      correctFact:
        'Magnetic field inside a solid wire is NOT uniform; it increases linearly from zero at the center (r = 0) to maximum at the outer surface (r = R): B = (μ₀ I / 2π R²) r.',
      whyItMattersForNEET: 'Direct NCERT graphical and ratio MCQ.'
    },
    {
      commonConfusion: 'Thinking Ampere\'s law does not apply if current is not enclosed.',
      correctFact:
        'Ampere\'s law ∮ B · dl = μ₀ I_enc is ALWAYS valid. If no current is enclosed, the line integral ∮ B · dl = 0, but this does NOT mean B = 0 at every point on the loop.',
      whyItMattersForNEET: 'Common conceptual assertion-reason question.'
    }
  ],

  quickRevision: [
    'Ampere\'s Law: ∮ B · dl = μ₀ I_enclosed.',
    'Thick wire: Inside B_in ∝ r; Surface B_max = μ₀ I / (2π R); Outside B_out ∝ 1/r.',
    'Hollow tube: Inside cavity B = 0.',
    'Ideal Solenoid: B_inside = μ₀ n I = μ₀ (N/L) I. At ends: B_end = ½ μ₀ n I.',
    'Toroid: B_core = μ₀ N I / (2π r) = μ₀ n I; B = 0 in central hole and outside.'
  ],

  practiceQuestions: [
    {
      id: 'amp-p1',
      question:
        'A solenoid of length 0.5 m has a radius of 1 cm and is made up of 500 turns. It carries a current of 5 A. What is the magnitude of the magnetic field inside the solenoid?',
      options: ['6.28 × 10⁻³ T', '3.14 × 10⁻³ T', '1.26 × 10⁻² T', '6.28 × 10⁻⁴ T'],
      correctAnswer: 0,
      explanation:
        'Turn density n = N / L = 500 / 0.5 m = 1000 turns/m. Current I = 5 A. Formula: B = μ₀ n I = (4π × 10⁻⁷) × 1000 × 5 = 20π × 10⁻⁴ T = 2π × 10⁻³ T ≈ 6.28 × 10⁻³ T.'
    },
    {
      id: 'amp-p2',
      question:
        'A long straight solid cylinder of radius R carries a steady current I uniformly distributed across its cross section. The magnetic field at distance r = R/2 from the central axis is B₁. The magnetic field at distance r = 2R from the axis is B₂. The ratio B₁ / B₂ is:',
      options: ['1 : 1', '1 : 2', '2 : 1', '1 : 4'],
      correctAnswer: 0,
      explanation:
        'Inside the wire (r₁ = R/2): B₁ = (μ₀ I / 2π R²) · (R/2) = (μ₀ I) / (4π R). Outside the wire (r₂ = 2R): B₂ = (μ₀ I) / (2π · 2R) = (μ₀ I) / (4π R). Thus, B₁ = B₂, so the ratio B₁ / B₂ = 1 : 1.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2021,
      question:
        'A thick current-carrying cable of radius R carries current I uniformly distributed across its cross-section. The variation of magnetic field B(r) with distance r from the axis of the cable is correctly represented by:',
      options: [
        'A straight line through origin up to r = R, followed by a hyperbola (B ∝ 1/r) for r > R',
        'Zero up to r = R, then decreasing hyperbolically for r > R',
        'Constant value up to r = R, then decreasing linearly for r > R',
        'Parabolic increase up to r = R, then exponential decay for r > R'
      ],
      correctAnswer: 0,
      explanation:
        'Inside the cable (r ≤ R), B = (μ₀ I / 2π R²) · r ∝ r (straight line passing through origin). Outside the cable (r ≥ R), B = μ₀ I / (2π r) ∝ 1/r (rectangular hyperbola). Maximum occurs at r = R.',
      conceptTested: 'Ampere\'s Law Application to Thick Cylindrical Conductors & Graph Analysis'
    },
    {
      exam: 'NEET UG',
      year: 2019,
      question:
        'A cylindrical conductor of radius R is carrying a constant current. The plot of the magnitude of the magnetic field B with the distance d from the centre of the conductor is correctly represented by the curve in which:',
      options: [
        'B increases linearly with d for d < R and decreases as 1/d for d > R',
        'B is zero for d < R and decreases as 1/d² for d > R',
        'B is constant for d < R and decreases as 1/d for d > R',
        'B increases quadratically for d < R and decreases as 1/d for d > R'
      ],
      correctAnswer: 0,
      explanation:
        'For a solid cylindrical conductor carrying uniform current: inside (d < R), B ∝ d; outside (d > R), B ∝ 1/d. Thus, linear increase followed by inverse decay.',
      conceptTested: 'Magnetic Field Distribution in Uniform Current Cylinders'
    }
  ]
};
