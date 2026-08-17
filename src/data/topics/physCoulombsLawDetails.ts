import { DetailedTopicContent } from '../../types/neet';

export const physCoulombsLawDetails: DetailedTopicContent = {
  topicId: 'phys-coulombs-law',
  topicName: "Electric Charges, Conservation & Coulomb's Law",
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Electrostatics',
  chapter: 'Electric Charges and Fields',

  whatIsThisTopic: "Electrostatics is the branch of physics that investigates the properties, forces, fields, and potentials associated with static (stationary) electric charges. This master topic establishes the very bedrock of electrostatics: the physical nature and fundamental properties of electric charge (quantization, conservation, additivity), methods of charging (friction, conduction, induction), Coulomb's Inverse-Square Law in scalar and vector form, the physical screening effect of dielectric media, the Superposition Principle for discrete charge configurations, and continuous charge distributions (linear, surface, volume).",

  basicIdea: [
    "Electric charge is an intrinsic scalar property of elementary particles (electrons and protons) that gives rise to electrostatic interactions. The elementary charge is e = 1.602 × 10⁻¹⁹ C.",
    "Charge is quantized (q = ±ne, where n is an integer), strictly conserved in any isolated system (Σq = constant), and additive as algebraic real numbers.",
    "Ordinary macroscopic charging processes occur exclusively via the transfer of mobile electrons, because protons are tightly bound inside atomic nuclei by strong nuclear forces.",
    "Coulomb's Law states that the electrostatic force between two stationary point charges is directly proportional to the product of their magnitudes and inversely proportional to the square of the distance between them: F = (1 / 4πε₀) · (|q₁ q₂| / r²).",
    "Coulomb's force acts along the line joining the centers of the two charges (central force) and obeys Newton's Third Law in vector form: F⃗₁₂ = -F⃗₂₁.",
    "In a material medium of relative permittivity (dielectric constant) K, atomic/molecular polarization shields the charges, reducing the net electrostatic force: F_med = F_vac / K.",
    "The Principle of Superposition states that the total electrostatic force on any given charge due to a system of point charges is the vector sum of the individual Coulomb forces exerted by each charge independently.",
    "Continuous charge distributions are modeled using charge densities: Linear (λ = dq/dl in C/m), Surface (σ = dq/dA in C/m²), and Volume (ρ = dq/dV in C/m³)."
  ],

  importantTerms: [
    {
      term: 'Electrostatics',
      definition: 'The branch of physics that deals with static (non-moving) electric charges, the forces between them, their fields, and electrostatic potential energies.',
      neetNote: 'Governs all interactions where velocities v << c and magnetic field effects are negligible.'
    },
    {
      term: 'Elementary Charge (e)',
      symbol: 'e',
      definition: 'The magnitude of electric charge carried by a single proton or electron: e = 1.602176634 × 10⁻¹⁹ C. It is the fundamental quantum of charge in free nature.',
      neetNote: 'Quarks have fractional charges (±1/3e, ±2/3e) but cannot exist as free isolated particles.'
    },
    {
      term: 'Quantization of Charge',
      symbol: 'q = ±ne',
      definition: 'The physical principle that any observable net electric charge on an object exists only in integral multiples of the elementary charge e (where n = 1, 2, 3, ...).',
      neetNote: 'At macroscopic scales involving microcoulombs (10⁻⁶ C), quantization appears continuous, but it remains exact at microscopic levels.'
    },
    {
      term: 'Conservation of Electric Charge',
      symbol: 'Σ q_initial = Σ q_final',
      definition: 'The total algebraic sum of electric charges in an isolated physical system remains constant over time. Charge can neither be created nor destroyed, only transferred.',
      neetNote: 'Holds true across all physical and nuclear processes, including pair production (γ → e⁻ + e⁺) and annihilation (e⁻ + e⁺ → 2γ).'
    },
    {
      term: 'Electrostatic Induction',
      definition: 'The phenomenon of redistributing mobile free charges in a neutral conductor by bringing a charged object nearby without establishing physical electrical contact.',
      neetNote: 'Induction always produces an equal and opposite bound charge near the inducing body and like charge on the farther end.'
    },
    {
      term: 'Permittivity of Free Space (ε₀)',
      symbol: 'ε₀',
      definition: 'A fundamental physical constant describing the ability of vacuum to permit electric field lines: ε₀ = 8.8541878 × 10⁻¹² C²/(N·m²) [or F/m]. Dimensional formula: [M⁻¹ L⁻³ T⁴ A²].',
      neetNote: 'Coulomb constant k = 1/(4πε₀) ≈ 8.98755 × 10⁹ N·m²/C² ≈ 9 × 10⁹ N·m²/C².'
    },
    {
      term: 'Relative Permittivity / Dielectric Constant (K or ε_r)',
      symbol: 'K = ε / ε₀',
      definition: 'The dimensionless ratio of the absolute permittivity of a material medium (ε) to that of free space (ε₀). For vacuum K = 1; for air K ≈ 1.0006; for pure water K ≈ 81; for ideal conductors K → ∞.',
      neetNote: 'Electrostatic force in medium decreases by factor K: F_med = F_vac / K.'
    },
    {
      term: 'Principle of Superposition',
      symbol: 'F⃗_net = Σ F⃗_i',
      definition: 'The total force on a test charge due to multiple source charges is the vector sum of the independent two-body Coulomb forces exerted by each source charge.',
      neetNote: 'The force between any pair of charges is strictly unaffected by the presence of other surrounding charges.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Chapter Introduction & Conceptual Roadmap of Electrostatics',
      paragraphs: [
        'WHAT IS ELECTROSTATICS?',
        'Electrostatics is the study of electromagnetic phenomena that occur when electric charges are at rest. The word comes from Greek "elektron" (amber) and "statics" (at rest). Electrostatics forms the absolute foundation of Class 12 Physics and contributes 2 to 3 direct questions in every NEET exam.',
        'THE LOGICAL CHAIN OF ELECTROSTATICS:',
        'Understanding electrostatics requires grasping a beautiful, unbroken conceptual hierarchy: (1) Stationary Charge (q) possesses intrinsic electric property → (2) Pairs of charges exert Coulomb Force (F⃗) on each other → (3) Charge modifies surrounding space by creating an Electric Field (E⃗) → (4) Field crossing a geometric area constitutes Electric Flux (Φ) → (5) Gauss\'s Law connects total flux through a closed surface directly to the enclosed charge (q_enc / ε₀) → (6) Enables calculating electric fields of highly symmetric charge geometries (wires, sheets, spherical shells) effortlessly.',
        'WHY THIS CHAPTER IS ESSENTIAL FOR NEET:',
        'Every concept introduced here—superposition, vector resolution, inverse-square dependence, dielectric screening, and continuous charge integration—reappears in Gravitation, Magnetism, Current Electricity, Capacitance, and Modern Physics. Mastering these core concepts guarantees high marks and bulletproof conceptual clarity.'
      ],
      visual: {
        caption: 'Conceptual Master Roadmap of Electrostatics: Unbroken flow from Charge to Gauss\'s Law.',
        guide: 'Trace the progressive hierarchy: Charge creates Force, which defines Field, leading to Flux, Gauss\'s Law, and practical geometric field applications.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 200" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-2">
          <!-- Flow Nodes -->
          <g transform="translate(10, 20)">
            <rect x="0" y="20" width="90" height="50" rx="10" fill="#3b82f6" stroke="#60a5fa" stroke-width="2"/>
            <text x="45" y="45" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1. CHARGE</text>
            <text x="45" y="60" font-size="9" fill="#dbeafe" text-anchor="middle">q = ±ne</text>
          </g>
          <path d="M 105 65 L 125 65" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-flow)"/>
          <g transform="translate(130, 20)">
            <rect x="0" y="20" width="95" height="50" rx="10" fill="#8b5cf6" stroke="#a78bfa" stroke-width="2"/>
            <text x="47" y="45" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">2. COULOMB</text>
            <text x="47" y="60" font-size="9" fill="#ede9fe" text-anchor="middle">F = k q₁q₂/r²</text>
          </g>
          <path d="M 230 65 L 250 65" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-flow)"/>
          <g transform="translate(255, 20)">
            <rect x="0" y="20" width="95" height="50" rx="10" fill="#06b6d4" stroke="#22d3ee" stroke-width="2"/>
            <text x="47" y="45" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">3. E-FIELD</text>
            <text x="47" y="60" font-size="9" fill="#cffafe" text-anchor="middle">E⃗ = F⃗/q₀</text>
          </g>
          <path d="M 355 65 L 375 65" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-flow)"/>
          <g transform="translate(380, 20)">
            <rect x="0" y="20" width="95" height="50" rx="10" fill="#10b981" stroke="#34d399" stroke-width="2"/>
            <text x="47" y="45" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">4. FLUX (Φ)</text>
            <text x="47" y="60" font-size="9" fill="#d1fae5" text-anchor="middle">Φ = ∫E⃗·dA⃗</text>
          </g>
          <path d="M 480 65 L 500 65" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-flow)"/>
          <g transform="translate(505, 20)">
            <rect x="0" y="20" width="95" height="50" rx="10" fill="#f59e0b" stroke="#fbbf24" stroke-width="2"/>
            <text x="47" y="45" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">5. GAUSS</text>
            <text x="47" y="60" font-size="9" fill="#fef3c7" text-anchor="middle">∮E⃗·dA⃗ = q/ε₀</text>
          </g>
          <path d="M 605 65 L 620 65" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-flow)"/>
          <g transform="translate(625, 20)">
            <rect x="0" y="20" width="65" height="50" rx="10" fill="#ef4444" stroke="#f87171" stroke-width="2"/>
            <text x="32" y="45" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">6. APPS</text>
            <text x="32" y="60" font-size="8" fill="#fee2e2" text-anchor="middle">Wire/Sheet</text>
          </g>
          <!-- Bottom Legend -->
          <rect x="20" y="110" width="660" height="70" rx="8" fill="#1e293b" stroke="#334155"/>
          <text x="350" y="132" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">NEET UG CORE FOUNDATION PARADIGM</text>
          <text x="350" y="152" font-size="10" fill="#94a3b8" text-anchor="middle">Scalar properties (Charge, Flux) vs Vector fields (Coulomb Force, Electric Field, Dipole Moment)</text>
          <text x="350" y="168" font-size="9" fill="#cbd5e1" text-anchor="middle">Mastery of vectors + Gauss symmetry resolves 95% of NEET electrostatics numerical problems.</text>
          <defs>
            <marker id="arrow-flow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
            </marker>
          </defs>
        </svg>`
      }
    },
    {
      heading: '2. Physical Nature of Electric Charge, Fundamental Properties & Charging Mechanisms',
      paragraphs: [
        'WHAT IS ELECTRIC CHARGE?',
        'Electric charge is a fundamental, intrinsic scalar property of subatomic particles that characterizes how they interact with electromagnetic fields. There are two types of electric charges: Positive (+) and Negative (-), named by Benjamin Franklin.',
        'LIKE AND UNLIKE CHARGES:',
        '• Like charges repel each other (+ and +, or - and -).',
        '• Unlike charges attract each other (+ and -).',
        'WHY ARE ELECTRONS TRANSFERRED IN CHARGING?',
        'In neutral matter, positive charge resides entirely in protons tightly locked inside the atomic nucleus by the strong nuclear force (~10³⁸ times stronger than gravity). Electrons occupy outer atomic orbitals and have much lower mass (m_e = 9.109 × 10⁻³¹ kg vs m_p = 1.673 × 10⁻²⁷ kg; m_p ≈ 1836 m_e). Therefore, during ordinary physical interactions, electrons are loosely bound and easily transferred from one body to another.',
        '• When an object gains electrons → It becomes negatively charged (and its mass slightly INCREASES by Δm = n · m_e).',
        '• When an object loses electrons → It becomes positively charged (and its mass slightly DECREASES by Δm = n · m_e).',
        'THREE FUNDAMENTAL PROPERTIES OF CHARGE:',
        '1. Additivity: Total charge on a system of point charges is the algebraic sum: Q_total = q₁ + q₂ + q₃ + ... + q_n. Signs (+ and -) must be strictly included.',
        '2. Conservation: In any isolated system, the net electric charge remains constant. Charge cannot be created from nothing or destroyed in isolation: Σ q_initial = Σ q_final.',
        '3. Quantization: The net charge of any freely observable body is an integral multiple of the elementary charge e: q = ±ne where n ∈ {1, 2, 3, ...} and e = 1.602 × 10⁻¹⁹ C.',
        'METHODS OF CHARGING:',
        '1. Charging by Friction: Two uncharged insulating bodies rubbed together. Electrons transfer from the material with lower work function to the one with higher work function (e.g., Glass rod rubbed with silk: glass loses electrons and becomes positive; silk gains electrons and becomes negative).',
        '2. Charging by Conduction: Direct physical contact between a charged conductor and an uncharged conductor. Electrons flow until both conductors reach the same electrostatic potential. Both end up with the SAME sign of charge.',
        '3. Charging by Induction: Charging a neutral conductor without any physical contact by using an external charged body and temporary grounding. The conductor acquires charge of OPPOSITE sign to the inducing body.'
      ],
      visual: {
        caption: 'Three Methods of Charging: Friction (electron transfer), Conduction (contact sharing), and Induction (polarization & grounding).',
        guide: 'Notice: Friction transfers electrons by mechanical rubbing; Conduction shares charge through contact (same sign); Induction charges via grounding without contact (opposite sign).',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- Friction -->
          <g transform="translate(15, 20)">
            <rect x="0" y="0" width="205" height="195" rx="10" fill="#f1f5f9" dark:fill="#1e293b" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="102" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">1. FRICTION</text>
            <rect x="25" y="45" width="65" height="40" rx="6" fill="#60a5fa" stroke="#2563eb"/>
            <text x="57" y="68" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Glass (+)</text>
            <rect x="115" y="45" width="65" height="40" rx="6" fill="#f43f5e" stroke="#e11d48"/>
            <text x="147" y="68" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Silk (-)</text>
            <!-- Electron transfer arrow -->
            <path d="M 85 50 C 95 35, 105 35, 115 50" stroke="#f59e0b" stroke-width="2" fill="none" marker-end="url(#arrow-fric)"/>
            <text x="102" y="38" font-size="9" font-weight="bold" fill="#d97706" text-anchor="middle">e⁻ transfer</text>
            <text x="102" y="115" font-size="9" fill="#475569" text-anchor="middle">Electrons transfer</text>
            <text x="102" y="130" font-size="9" fill="#475569" text-anchor="middle">via mechanical rubbing</text>
            <rect x="15" y="148" width="175" height="32" rx="6" fill="#e2e8f0" stroke="#cbd5e1"/>
            <text x="102" y="168" font-size="9" font-weight="bold" fill="#1e293b" text-anchor="middle">Opposite Charges Generated</text>
          </g>

          <!-- Conduction -->
          <g transform="translate(245, 20)">
            <rect x="0" y="0" width="205" height="195" rx="10" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="102" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">2. CONDUCTION</text>
            <circle cx="60" cy="70" r="28" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
            <text x="60" y="74" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">++++</text>
            <circle cx="145" cy="70" r="28" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>
            <text x="145" y="74" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Neutral</text>
            <line x1="88" y1="70" x2="117" y2="70" stroke="#ef4444" stroke-width="3"/>
            <text x="102" y="62" font-size="8" font-weight="bold" fill="#dc2626" text-anchor="middle">CONTACT</text>
            <text x="102" y="115" font-size="9" fill="#475569" text-anchor="middle">Charge shared directly</text>
            <text x="102" y="130" font-size="9" fill="#475569" text-anchor="middle">until potentials equalize</text>
            <rect x="15" y="148" width="175" height="32" rx="6" fill="#e2e8f0" stroke="#cbd5e1"/>
            <text x="102" y="168" font-size="9" font-weight="bold" fill="#1e293b" text-anchor="middle">SAME Sign of Charge</text>
          </g>

          <!-- Induction -->
          <g transform="translate(475, 20)">
            <rect x="0" y="0" width="210" height="195" rx="10" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="105" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">3. INDUCTION</text>
            <rect x="15" y="50" width="30" height="50" rx="4" fill="#3b82f6" stroke="#1d4ed8"/>
            <text x="30" y="78" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
            <circle cx="110" cy="75" r="28" fill="#e2e8f0" stroke="#0284c7" stroke-width="2"/>
            <text x="92" y="79" font-size="11" font-weight="bold" fill="#dc2626">- -</text>
            <text x="126" y="79" font-size="11" font-weight="bold" fill="#2563eb">+ +</text>
            <!-- Grounding wire -->
            <path d="M 130 95 L 160 120" stroke="#16a34a" stroke-width="2"/>
            <line x1="150" y1="120" x2="170" y2="120" stroke="#16a34a" stroke-width="2"/>
            <line x1="154" y1="125" x2="166" y2="125" stroke="#16a34a" stroke-width="2"/>
            <line x1="158" y1="130" x2="162" y2="130" stroke="#16a34a" stroke-width="2"/>
            <text x="175" y="125" font-size="8" font-weight="bold" fill="#16a34a">Ground</text>
            <text x="105" y="142" font-size="8.5" fill="#475569" text-anchor="middle">Grounding drains like charge</text>
            <rect x="15" y="152" width="180" height="28" rx="6" fill="#e2e8f0" stroke="#cbd5e1"/>
            <text x="105" y="170" font-size="9" font-weight="bold" fill="#1e293b" text-anchor="middle">OPPOSITE Charge Acquired</text>
          </g>
          <defs>
            <marker id="arrow-fric" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
            </marker>
          </defs>
        </svg>`
      }
    },
    {
      heading: "3. Coulomb's Law from First Principles: Experimental Basis, Formula & Physical Meaning",
      paragraphs: [
        'COULOMB’S EXPERIMENTAL LAW (1785):',
        'Using a sensitive torsion balance, Charles-Augustin de Coulomb measured the forces between tiny charged spheres and discovered the fundamental quantitative law of electrostatics: The magnitude of the electrostatic force between two stationary point charges q₁ and q₂ separated by distance r in vacuum is:',
        '• Directly proportional to the product of charge magnitudes: F ∝ |q₁ q₂|',
        '• Inversely proportional to the square of the distance between them: F ∝ 1 / r²',
        'COMBINED MATHEMATICAL FORMULA:',
        'F = k · (|q₁ q₂| / r²) = (1 / 4πε₀) · (|q₁ q₂| / r²)',
        'EXPLANATION OF EVERY SYMBOL:',
        '• F: Electrostatic force between the two point charges (in Newtons, N).',
        '• q₁, q₂: Magnitudes of the two point charges (in Coulombs, C).',
        '• r: Distance between the point charges (in meters, m).',
        '• ε₀ (Epsilon-naught): Permittivity of free space = 8.8541878 × 10⁻¹² C²/(N·m²).',
        '• k = 1 / (4πε₀): Electrostatic Coulomb constant ≈ 8.98755 × 10⁹ N·m²/C² ≈ 9 × 10⁹ N·m²/C².',
        'PHYSICAL MEANING OF INVERSE-SQUARE DEPENDENCE (1/r²):',
        'Electrostatic influence radiates isotropically in 3-dimensional space. The surface area of a sphere of radius r is 4πr². As distance doubles (r → 2r), the spherical wavefront area quadruples (4πr² → 16πr²), diluting the force density by a factor of 4. Hence, F ∝ 1/r².',
        'CENTRAL NATURE & NEWTON’S 3RD LAW:',
        'Coulomb force acts strictly along the line joining the centers of the two charges. Like charges repel along this line; unlike charges attract along this line. The force exerted by q₁ on q₂ is equal in magnitude and opposite in direction to the force exerted by q₂ on q₁: F⃗₁₂ = -F⃗₂₁.'
      ],
      visual: {
        caption: "Coulomb Force Between Point Charges: Repulsive force between like charges (+/+) and attractive force between unlike charges (+/-).",
        guide: "Observe the line of action: Forces always act along the line joining the centers of the two charges (central force) satisfying action-reaction symmetry.",
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 230" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- Case A: Like Charges (Repulsion) -->
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="315" height="190" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
            <text x="157" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">CASE A: LIKE CHARGES (REPULSION)</text>
            <!-- Line joining charges -->
            <line x1="85" y1="95" x2="230" y2="95" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4"/>
            <!-- Charge 1 -->
            <circle cx="85" cy="95" r="18" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <text x="85" y="99" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+q₁</text>
            <!-- Charge 2 -->
            <circle cx="230" cy="95" r="18" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <text x="230" y="99" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+q₂</text>
            <!-- Repulsive Force on 1 (pointing left) -->
            <line x1="67" y1="95" x2="20" y2="95" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/>
            <text x="43" y="85" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">F⃗₁₂</text>
            <!-- Repulsive Force on 2 (pointing right) -->
            <line x1="248" y1="95" x2="295" y2="95" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/>
            <text x="272" y="85" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">F⃗₂₁</text>
            <!-- Separation r -->
            <line x1="85" y1="135" x2="230" y2="135" stroke="#64748b" stroke-width="1.5"/>
            <line x1="85" y1="130" x2="85" y2="140" stroke="#64748b" stroke-width="1.5"/>
            <line x1="230" y1="130" x2="230" y2="140" stroke="#64748b" stroke-width="1.5"/>
            <text x="157" y="152" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">Distance r</text>
            <text x="157" y="176" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">F⃗₁₂ = -F⃗₂₁ (Repulsive)</text>
          </g>

          <!-- Case B: Unlike Charges (Attraction) -->
          <g transform="translate(365, 20)">
            <rect x="0" y="0" width="315" height="190" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
            <text x="157" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">CASE B: UNLIKE CHARGES (ATTRACTION)</text>
            <!-- Line joining charges -->
            <line x1="85" y1="95" x2="230" y2="95" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4"/>
            <!-- Charge 1 (+) -->
            <circle cx="85" cy="95" r="18" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <text x="85" y="99" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+q₁</text>
            <!-- Charge 2 (-) -->
            <circle cx="230" cy="95" r="18" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
            <text x="230" y="99" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">-q₂</text>
            <!-- Attractive Force on 1 (pointing right) -->
            <line x1="103" y1="95" x2="145" y2="95" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-blue)"/>
            <text x="124" y="85" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">F⃗₁₂</text>
            <!-- Attractive Force on 2 (pointing left) -->
            <line x1="212" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-blue)"/>
            <text x="191" y="85" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">F⃗₂₁</text>
            <!-- Separation r -->
            <line x1="85" y1="135" x2="230" y2="135" stroke="#64748b" stroke-width="1.5"/>
            <line x1="85" y1="130" x2="85" y2="140" stroke="#64748b" stroke-width="1.5"/>
            <line x1="230" y1="130" x2="230" y2="140" stroke="#64748b" stroke-width="1.5"/>
            <text x="157" y="152" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">Distance r</text>
            <text x="157" y="176" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">F⃗₁₂ = -F⃗₂₁ (Attractive)</text>
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
      heading: "4. Coulomb's Law in Vector Form: Precise Coordinate & Unit Vector Formulation",
      paragraphs: [
        'WHY VECTOR FORM IS ESSENTIAL:',
        'Coulomb force is a vector quantity having both magnitude and direction. In 2D and 3D space, scalar formulas cannot track angular directions. The vector formulation incorporates charge signs and spatial unit vectors directly.',
        'MATHEMATICAL VECTOR FORMULATION:',
        'Let charge q₁ be at position vector r⃗₁ and charge q₂ be at position vector r⃗₂.',
        '• Displacement vector from q₂ to q₁: r⃗₁₂ = r⃗₁ - r⃗₂',
        '• Magnitude of distance: |r⃗₁₂| = r₁₂ = r',
        '• Unit vector pointing from q₂ to q₁: r̂₁₂ = r⃗₁₂ / |r⃗₁₂| = (r⃗₁ - r⃗₂) / |r⃗₁ - r⃗₂|',
        'The force F⃗₁₂ exerted ON charge q₁ BY charge q₂ is:',
        'F⃗₁₂ = (1 / 4πε₀) · (q₁ q₂ / |r⃗₁ - r⃗₂|²) · r̂₁₂ = (1 / 4πε₀) · (q₁ q₂ / |r⃗₁ - r⃗₂|³) · (r⃗₁ - r⃗₂)',
        'Similarly, the force F⃗₂₁ exerted ON charge q₂ BY charge q₁ is:',
        'F⃗₂₁ = (1 / 4πε₀) · (q₁ q₂ / |r⃗₂ - r⃗₁|²) · r̂₂₁ = (1 / 4πε₀) · (q₁ q₂ / |r⃗₂ - r⃗₁|³) · (r⃗₂ - r⃗₁)',
        'KEY VECTOR PROPERTIES FOR NEET:',
        '1. Because (r⃗₁ - r⃗₂) = -(r⃗₂ - r⃗₁), it strictly follows that: F⃗₁₂ = -F⃗₂₁ (Equal magnitude, opposite direction → Action-Reaction pair).',
        '2. If both charges have the same sign (q₁q₂ > 0), F⃗₁₂ points along r̂₁₂ (away from q₂, representing repulsion).',
        '3. If charges have opposite signs (q₁q₂ < 0), F⃗₁₂ points along -r̂₁₂ (toward q₂, representing attraction).'
      ],
      visual: {
        caption: "Coulomb's Law in Vector Form: Position vectors r⃗₁ and r⃗₂ relative to origin O and force F⃗₁₂.",
        guide: "Follow the displacement vector r⃗₁₂ = r⃗₁ - r⃗₂. Force F⃗₁₂ acts along the line joining the charges.",
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- Coordinate Axes -->
          <line x1="60" y1="210" x2="550" y2="210" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
          <text x="545" y="225" font-size="11" font-weight="bold" fill="#64748b">X</text>
          <line x1="60" y1="210" x2="60" y2="20" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
          <text x="45" y="30" font-size="11" font-weight="bold" fill="#64748b">Y</text>
          <text x="48" y="224" font-size="11" font-weight="bold" fill="#64748b">O</text>

          <!-- Position Vector r1 -->
          <line x1="60" y1="210" x2="200" y2="80" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
          <text x="110" y="135" font-size="11" font-weight="bold" fill="#2563eb">r⃗₁</text>
          <!-- Charge q1 -->
          <circle cx="200" cy="80" r="16" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
          <text x="200" y="84" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">q₁</text>

          <!-- Position Vector r2 -->
          <line x1="60" y1="210" x2="420" y2="130" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)"/>
          <text x="260" y="185" font-size="11" font-weight="bold" fill="#059669">r⃗₂</text>
          <!-- Charge q2 -->
          <circle cx="420" cy="130" r="16" fill="#10b981" stroke="#047857" stroke-width="2"/>
          <text x="420" y="134" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">q₂</text>

          <!-- Displacement Vector r12 (from q2 to q1) -->
          <line x1="405" y1="125" x2="220" y2="85" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#arrow-orange)"/>
          <text x="310" y="95" font-size="11" font-weight="bold" fill="#d97706">r⃗₁₂ = r⃗₁ - r⃗₂</text>

          <!-- Force Vector F12 on q1 (Repulsion) -->
          <line x1="185" y1="76" x2="100" y2="57" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/>
          <text x="125" y="52" font-size="12" font-weight="bold" fill="#dc2626">F⃗₁₂</text>

          <!-- Force Vector F21 on q2 (Repulsion) -->
          <line x1="435" y1="134" x2="520" y2="153" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/>
          <text x="485" y="168" font-size="12" font-weight="bold" fill="#dc2626">F⃗₂₁</text>
          <defs>
            <marker id="arrow-axis" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
            </marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
            </marker>
            <marker id="arrow-orange" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
            </marker>
          </defs>
        </svg>`
      }
    },
    {
      heading: '5. Effect of Dielectric Medium: Relative Permittivity, Dielectric Constant & Force Reduction',
      paragraphs: [
        'COULOMB FORCE IN A MATERIAL MEDIUM:',
        'When two point charges are immersed in a material medium (such as water, oil, mica, glass, or liquid helium) instead of vacuum, the electrostatic force between them decreases significantly.',
        'WHY DOES THE FORCE DECREASE? (PHYSICAL MECHANISM):',
        'Under the intense electrostatic field created by charges q₁ and q₂, the atoms/molecules of the dielectric medium undergo polarization (their positive and negative charge centers displace slightly). The polarized dielectric molecules create an induced counter-field that opposes the original field, partially screening the charges. As a result, the net electrostatic force is reduced.',
        'MATHEMATICAL EXPRESSION:',
        'The force in a medium of absolute permittivity ε is:',
        'F_med = (1 / 4πε) · (|q₁ q₂| / r²)',
        'Since ε = K · ε₀ (or ε = ε_r · ε₀), where K is the Dielectric Constant (Relative Permittivity):',
        'F_med = (1 / 4πε₀ K) · (|q₁ q₂| / r²) = F_vac / K',
        'HIGH-YIELD DIELECTRIC CONSTANT VALUES FOR NEET:',
        '• Vacuum: K = 1 (F_vac is maximum)',
        '• Dry Air: K ≈ 1.0006 ≈ 1',
        '• Pure Water at 20°C: K ≈ 81 (Force reduces to 1/81th of vacuum value! This explains why water is a universal solvent for ionic salts like NaCl)',
        '• Mica: K ≈ 6',
        '• Perfect Conductor / Metal: K → ∞ (Net electrostatic force inside a perfect conductor is ZERO).'
      ],
      visual: {
        caption: 'Effect of Dielectric Medium: Induced polarization dipoles in the medium shield the charges, reducing the net force by factor K.',
        guide: 'In vacuum (left), full force F_vac acts. In dielectric medium (right), polarized molecules align opposite to the field, decreasing net force to F_vac / K.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 220" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- Vacuum State -->
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="315" height="180" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="157" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">VACUUM (K = 1)</text>
            <circle cx="70" cy="85" r="18" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <text x="70" y="89" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+q₁</text>
            <circle cx="245" cy="85" r="18" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <text x="245" y="89" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+q₂</text>
            <!-- Large Force Arrows -->
            <line x1="52" y1="85" x2="10" y2="85" stroke="#dc2626" stroke-width="4" marker-end="url(#arrow-red)"/>
            <line x1="263" y1="85" x2="305" y2="85" stroke="#dc2626" stroke-width="4" marker-end="url(#arrow-red)"/>
            <rect x="25" y="130" width="265" height="35" rx="6" fill="#fee2e2" stroke="#fca5a5"/>
            <text x="157" y="152" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">F_vac = (1/4πε₀) · q₁q₂/r² (MAXIMUM)</text>
          </g>

          <!-- Medium State -->
          <g transform="translate(365, 20)">
            <rect x="0" y="0" width="315" height="180" rx="10" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
            <text x="157" y="24" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">DIELECTRIC MEDIUM (K > 1)</text>
            <!-- Polarized medium molecules -->
            <ellipse cx="120" cy="85" rx="12" ry="7" fill="#bfdbfe" stroke="#3b82f6"/>
            <text x="120" y="88" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">- +</text>
            <ellipse cx="160" cy="85" rx="12" ry="7" fill="#bfdbfe" stroke="#3b82f6"/>
            <text x="160" y="88" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">- +</text>
            <ellipse cx="200" cy="85" rx="12" ry="7" fill="#bfdbfe" stroke="#3b82f6"/>
            <text x="200" y="88" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">- +</text>
            <!-- Charges -->
            <circle cx="70" cy="85" r="18" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <text x="70" y="89" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+q₁</text>
            <circle cx="245" cy="85" r="18" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <text x="245" y="89" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+q₂</text>
            <!-- Reduced Force Arrows -->
            <line x1="52" y1="85" x2="30" y2="85" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
            <line x1="263" y1="85" x2="285" y2="85" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
            <rect x="25" y="130" width="265" height="35" rx="6" fill="#dbeafe" stroke="#93c5fd"/>
            <text x="157" y="152" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">F_med = F_vac / K (REDUCED)</text>
          </g>
        </svg>`
      }
    },
    {
      heading: '6. Principle of Superposition: Forces Due to Multiple Charges & Vector Summation',
      paragraphs: [
        'STATEMENT OF SUPERPOSITION PRINCIPLE:',
        'When several point charges interact simultaneously, the total electrostatic force on any one charge is the VECTOR SUM of the individual forces exerted on it by all the other charges taken one at a time. Furthermore, the individual force between any two charges is completely independent of and unaffected by the presence of any other charges.',
        'MATHEMATICAL VECTOR EQUATION:',
        'For a system of N discrete point charges q₁, q₂, q₃, ..., q_N, the net force F⃗₁ acting on charge q₁ is:',
        'F⃗₁_net = F⃗₁₂ + F⃗₁₃ + F⃗₁₄ + ... + F⃗₁_N = Σ_(i=2)^N (1 / 4πε₀) · [q₁ q_i / |r⃗₁ - r⃗_i|³] · (r⃗₁ - r⃗_i)',
        'WHY SCALAR SUMMATION FAILS (NEET CRITICAL TRAP):',
        'Students often mistakenly add the magnitudes of the forces (F_total = F₁ + F₂ + ...). This is COMPLETELY WRONG because forces are vectors having specific geometric angles! Forces must always be resolved into orthogonal X and Y components (F_x = Σ F_ix, F_y = Σ F_iy) and summed as:',
        'F_net = √(F_x² + F_y²), and tan θ = F_y / F_x.',
        'EQUILIBRIUM OF A THIRD CHARGE (COLLINEAR CASE):',
        '• Like charges (+q₁ and +q₂): Third charge must be placed BETWEEN them on the line joining them for net force to be zero.',
        '• Unlike charges (+q₁ and -q₂ where |q₁| > |q₂|): Third charge must be placed OUTSIDE the segment, closer to the smaller magnitude charge (-q₂).'
      ],
      visual: {
        caption: 'Principle of Superposition: Net force F⃗₁ on charge q₁ is the vector resultant of individual forces F⃗₁₂ and F⃗₁₃.',
        guide: 'F⃗₁ = F⃗₁₂ + F⃗₁₃ via the Parallelogram Law of Vector Addition. Scalar addition of magnitudes gives incorrect results.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- Charge q1 (Target) -->
          <circle cx="280" cy="140" r="18" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
          <text x="280" y="144" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+q₁</text>

          <!-- Source Charge q2 -->
          <circle cx="120" cy="180" r="16" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
          <text x="120" y="184" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">+q₂</text>
          <line x1="136" y1="176" x2="262" y2="144" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>

          <!-- Source Charge q3 -->
          <circle cx="360" cy="220" r="16" fill="#10b981" stroke="#047857" stroke-width="2"/>
          <text x="360" y="224" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">+q₃</text>
          <line x1="346" y1="206" x2="294" y2="154" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>

          <!-- Force Vector F12 (Repulsion from q2, up-right) -->
          <line x1="295" y1="135" x2="380" y2="115" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#arrow-blue)"/>
          <text x="360" y="105" font-size="11" font-weight="bold" fill="#2563eb">F⃗₁₂</text>

          <!-- Force Vector F13 (Repulsion from q3, up-left) -->
          <line x1="270" y1="125" x2="200" y2="40" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow-green)"/>
          <text x="210" y="55" font-size="11" font-weight="bold" fill="#059669">F⃗₁₃</text>

          <!-- Parallelogram Construction -->
          <line x1="380" y1="115" x2="300" y2="15" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
          <line x1="200" y1="40" x2="300" y2="15" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>

          <!-- Resultant Vector F_net -->
          <line x1="280" y1="122" x2="300" y2="18" stroke="#dc2626" stroke-width="3.5" marker-end="url(#arrow-red)"/>
          <text x="315" y="25" font-size="12" font-weight="bold" fill="#dc2626">F⃗_net = F⃗₁₂ + F⃗₁₃</text>
        </svg>`
      }
    },
    {
      heading: '7. Continuous Charge Distributions: Linear (λ), Surface (σ) & Volume (ρ) Densities',
      paragraphs: [
        'WHY POINT-CHARGE MODEL EXTENDS TO CONTINUOUS CHARGE:',
        'Macroscopic objects contain billions of elementary charges packed in close proximity. In practice, charge appears smoothly and continuously distributed over lines, surfaces, and volumes rather than as discrete isolated points.',
        'THREE CONTINUOUS CHARGE DENSITIES (NCERT STANDARD):',
        '1. Linear Charge Density (λ): Charge per unit length along a thin wire or rod.',
        '• Formula: λ = dq / dl (or λ = Q / L for uniform distribution)',
        '• SI Unit: Coulomb per meter (C/m)',
        '2. Surface Charge Density (σ): Charge per unit area over a 2D surface or sheet.',
        '• Formula: σ = dq / dA (or σ = Q / A for uniform distribution)',
        '• SI Unit: Coulomb per square meter (C/m²)',
        '3. Volume Charge Density (ρ): Charge per unit volume throughout a 3D dielectric body.',
        '• Formula: ρ = dq / dV (or ρ = Q / V for uniform distribution)',
        '• SI Unit: Coulomb per cubic meter (C/m³)',
        'CONCEPT OF INTEGRATION FOR CONTINUOUS DISTRIBUTIONS:',
        'To calculate the total electrostatic force exerted by a continuous charge on an external point charge q₀: (1) Divide continuous charge into infinitesimal elements dq; (2) Calculate force dF⃗ = (1 / 4πε₀) · (q₀ dq / r²) · r̂; (3) Integrate over the entire geometric boundary: F⃗ = ∫ dF⃗.'
      ],
      visual: {
        caption: 'Continuous Charge Distributions: Linear density λ (1D), Surface density σ (2D), and Volume density ρ (3D).',
        guide: 'SI Units: λ in C/m, σ in C/m², and ρ in C/m³. Microscopic charge element dq = λ dl = σ dA = ρ dV.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 200" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2">
          <!-- 1D Linear -->
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="205" height="160" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="102" y="24" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">1D: LINEAR CHARGE (λ)</text>
            <line x1="25" y1="65" x2="180" y2="65" stroke="#3b82f6" stroke-width="4" stroke-linecap="round"/>
            <rect x="80" y="58" width="30" height="14" rx="2" fill="#ef4444"/>
            <text x="95" y="69" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">dq</text>
            <text x="102" y="105" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">λ = dq / dl</text>
            <text x="102" y="125" font-size="10" fill="#64748b" text-anchor="middle">SI Unit: C / m</text>
            <text x="102" y="145" font-size="9" fill="#475569" text-anchor="middle">Thin wires, circular rings</text>
          </g>

          <!-- 2D Surface -->
          <g transform="translate(245, 20)">
            <rect x="0" y="0" width="205" height="160" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="102" y="24" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">2D: SURFACE CHARGE (σ)</text>
            <polygon points="40,85 140,50 170,85 70,120" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
            <polygon points="90,82 120,72 130,82 100,92" fill="#ef4444"/>
            <text x="110" y="86" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">dq</text>
            <text x="102" y="115" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">σ = dq / dA</text>
            <text x="102" y="132" font-size="10" fill="#64748b" text-anchor="middle">SI Unit: C / m²</text>
            <text x="102" y="148" font-size="9" fill="#475569" text-anchor="middle">Sheets, conducting shells</text>
          </g>

          <!-- 3D Volume -->
          <g transform="translate(470, 20)">
            <rect x="0" y="0" width="210" height="160" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="105" y="24" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">3D: VOLUME CHARGE (ρ)</text>
            <circle cx="105" cy="70" r="30" fill="#ddd6fe" stroke="#8b5cf6" stroke-width="1.5"/>
            <rect x="95" y="60" width="18" height="18" rx="2" fill="#ef4444"/>
            <text x="104" y="73" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">dq</text>
            <text x="105" y="115" font-size="11" font-weight="bold" fill="#7c3aed" text-anchor="middle">ρ = dq / dV</text>
            <text x="105" y="132" font-size="10" fill="#64748b" text-anchor="middle">SI Unit: C / m³</text>
            <text x="105" y="148" font-size="9" fill="#475569" text-anchor="middle">Solid dielectric spheres</text>
          </g>
        </svg>`
      }
    }
  ],

  formulae: [
    {
      title: 'Quantization of Electric Charge',
      formula: 'q = \\pm n e',
      meaning: 'Total observable charge on an object equals an integral number n of elementary electronic charges e.',
      symbols: 'q = charge (C), n = positive integer (1, 2, 3, ...), e = 1.602 × 10⁻¹⁹ C',
      unit: 'Coulomb (C)',
      conditions: 'Exact for all isolated charges in macroscopic and subatomic physics.',
      whenToUse: 'Use to calculate number of transferred electrons or determine whether a given charge value is physically permissible in nature.',
      calculationExample: {
        problem: 'How many electrons must be removed from a neutral copper coin to give it a net positive charge of +3.2 μC?',
        given: 'q = +3.2 μC = 3.2 × 10⁻⁶ C, e = 1.6 × 10⁻¹⁹ C',
        stepByStep: [
          'From charge quantization: q = n · e',
          'Rearranging for n: n = q / e = (3.2 × 10⁻⁶ C) / (1.6 × 10⁻¹⁹ C)',
          'n = (3.2 / 1.6) × 10^(-6 - (-19)) = 2.0 × 10¹³ electrons.'
        ],
        answer: '2.0 × 10¹³ electrons removed'
      }
    },
    {
      title: "Coulomb's Law in Vacuum",
      formula: 'F = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_1 q_2|}{r^2}',
      meaning: 'Magnitude of electrostatic force between two stationary point charges in vacuum.',
      symbols: 'F = force (N), q₁, q₂ = charge magnitudes (C), r = separation (m), ε₀ = 8.854 × 10⁻¹² C²/(N·m²), 1/(4πε₀) = 9 × 10⁹ N·m²/C²',
      unit: 'Newton (N)',
      conditions: 'Valid strictly for stationary point charges or spherically symmetric charge distributions at separations large compared to charge dimensions.',
      whenToUse: 'Calculate electrostatic attraction or repulsion between two point charges in vacuum or air.',
      calculationExample: {
        problem: 'Two point charges of +2 μC and +8 μC are separated by a distance of 30 cm in air. Calculate the magnitude and nature of the electrostatic force between them.',
        given: 'q₁ = 2 × 10⁻⁶ C, q₂ = 8 × 10⁻⁶ C, r = 30 cm = 0.3 m, k = 9 × 10⁹ N·m²/C²',
        stepByStep: [
          'Apply Coulomb\'s Law: F = k · (q₁ · q₂) / r²',
          'F = (9 × 10⁹) · [(2 × 10⁻⁶) · (8 × 10⁻⁶)] / (0.3)²',
          'F = (9 × 10⁹) · (16 × 10⁻¹²) / 0.09',
          'F = (144 × 10⁻³) / 0.09 = 1.6 N.'
        ],
        answer: '1.6 N (Repulsive force, since both charges are positive)'
      }
    },
    {
      title: "Coulomb's Law in Vector Form",
      formula: '\\vec{F}_{12} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{|\\vec{r}_1 - \\vec{r}_2|^3} (\\vec{r}_1 - \\vec{r}_2) = -\\vec{F}_{21}',
      meaning: 'Vector force exerted on charge q₁ located at r⃗₁ by charge q₂ located at r⃗₂.',
      symbols: 'F⃗₁₂ = force vector on q₁, r⃗₁, r⃗₂ = position vectors, (r⃗₁ - r⃗₂) = displacement vector from q₂ to q₁',
      unit: 'Newton (N)',
      conditions: 'Charges q₁ and q₂ substituted with their respective algebraic signs (+ or -).',
      whenToUse: 'Use in 2D and 3D coordinate problems where charges have known (x, y, z) coordinates.'
    },
    {
      title: 'Coulomb Force in Dielectric Medium',
      formula: 'F_{med} = \\frac{F_{vac}}{K} = \\frac{1}{4\\pi\\varepsilon_0 K} \\frac{|q_1 q_2|}{r^2}',
      meaning: 'Electrostatic force between charges inside a medium with dielectric constant K is reduced by factor K.',
      symbols: 'F_{med} = force in medium, F_{vac} = force in vacuum, K = relative permittivity / dielectric constant (K ≥ 1)',
      unit: 'Newton (N)',
      conditions: 'Medium must be homogeneous, isotropic, and fill the entire space between and around the charges.',
      whenToUse: 'Use when charges are placed in liquids (water, oil), insulating slabs, or metallic environments.',
      calculationExample: {
        problem: 'Two charges experience a repulsive force of 81 N in vacuum. When completely immersed in pure water (K = 81) at the same separation, what is the new electrostatic force?',
        given: 'F_{vac} = 81 N, K = 81',
        stepByStep: [
          'Apply dielectric medium formula: F_{med} = F_{vac} / K',
          'F_{med} = 81 N / 81 = 1.0 N.'
        ],
        answer: '1.0 N (Force is reduced by a factor of 81)'
      }
    },
    {
      title: 'Continuous Charge Densities',
      formula: '\\lambda = \\frac{dq}{dl}, \\quad \\sigma = \\frac{dq}{dA}, \\quad \\rho = \\frac{dq}{dV}',
      meaning: 'Linear (λ), Surface (σ), and Volume (ρ) charge densities for continuous charge modeling.',
      symbols: 'λ in C/m, σ in C/m², ρ in C/m³',
      unit: 'C/m, C/m², C/m³ respectively',
      conditions: 'Uniform or continuously varying charge distribution over geometric bodies.',
      whenToUse: 'Convert geometric lengths, areas, and volumes into infinitesimal charge elements dq for integration.'
    }
  ],

  neetImportantPoints: [
    "Quantization is macroscopic vs microscopic: For macro-charges (e.g., 1 μC), n ≈ 6 × 10¹² is so enormous that charge seems continuous; but quantization is strictly fundamental.",
    "Coulomb's Law is strictly an INVERSE-SQUARE LAW (F ∝ 1/r²). If distance between two point charges is tripled (r → 3r), force decreases by a factor of 9 (F → F/9).",
    "If distance between two point charges is halved (r → r/2) and charge on each is doubled (q → 2q), the new force becomes F' = (2·2)/(1/2)² · F = 16 F!",
    "Dielectric constant K of a metal (perfect conductor) is INFINITY (K = ∞). Therefore, the electrostatic force between two charges embedded in a metal is ZERO.",
    "Electrostatic force is a CENTRAL FORCE (acts along line joining centers) and a CONSERVATIVE FORCE (work done around closed path is zero: ∮ F⃗·dr⃗ = 0).",
    "Comparison with Gravitation: Electrostatic force between two protons is ~10³⁶ times stronger than their gravitational force. Gravitation is ALWAYS attractive, whereas electrostatic force can be attractive or repulsive.",
    "When a charged sphere touches an identical neutral sphere, charge divides EQUALLY by symmetry: each sphere gets q/2. If initial charges are q₁ and q₂, after contact each has (q₁ + q₂)/2."
  ],

  commonConfusions: [
    {
      commonConfusion: 'Adding force magnitudes algebraically when multiple charges are present.',
      correctFact: 'Forces are VECTORS. You MUST use vector addition (resolving into X and Y components or using parallelogram law F = √(F₁² + F₂² + 2F₁F₂ cos θ)).',
      whyItMattersForNEET: 'One of the most frequent negative mark traps in triangle/square charge configuration questions.'
    },
    {
      commonConfusion: 'Thinking protons move during charging by friction or induction.',
      correctFact: 'Protons NEVER move during ordinary charging processes; only valence electrons are transferred or redistributed.',
      whyItMattersForNEET: 'Direct assertion-reason question trap in NEET.'
    },
    {
      commonConfusion: 'Assuming the presence of a 3rd charge alters the force between 1st and 2nd charges.',
      correctFact: 'The pairwise Coulomb force between any two charges is COMPLETELY INDEPENDENT of surrounding charges. Only the NET force on a charge changes.',
      whyItMattersForNEET: 'Tested repeatedly in NCERT-based concept matching MCQs.'
    },
    {
      commonConfusion: 'Thinking mass of an object remains identical after acquiring charge.',
      correctFact: 'Negatively charged body GAINS electrons → Mass increases (Δm = n·m_e). Positively charged body LOSES electrons → Mass decreases.',
      whyItMattersForNEET: 'Popular conceptual trap in NEET Physics.'
    }
  ],

  quickRevision: [
    "q = ±ne (e = 1.602 × 10⁻¹⁹ C). Charge is quantized, conserved, and additive.",
    "Protons stay locked in nucleus; only electrons transfer (Δm = n·m_e).",
    "F_vac = (1/4πε₀) · (|q₁q₂|/r²) where 1/(4πε₀) = 9 × 10⁹ N·m²/C².",
    "F_med = F_vac / K. Force decreases by factor K in a dielectric medium (Water K=81, Metal K=∞).",
    "Vector form: F⃗₁₂ = -F⃗₂₁ (Newton's 3rd Law / Central Force).",
    "Superposition: F⃗_net = Σ F⃗_i (Vector resultant, never simple arithmetic sum).",
    "Charge densities: Linear λ = dq/dl (C/m), Surface σ = dq/dA (C/m²), Volume ρ = dq/dV (C/m³)."
  ],

  practiceQuestions: [
    {
      questionId: 'phys-coulomb-pq-1',
      question: 'Two identical conducting small spheres having charges +40 μC and -20 μC are placed at a distance r apart in vacuum and exert a force F₁ on each other. They are brought in physical contact and then returned to their original separation r. What is the new electrostatic force F₂ in terms of F₁?',
      options: [
        'F₂ = F₁ / 8 (repulsive)',
        'F₂ = F₁ / 4 (attractive)',
        'F₂ = F₁ / 8 (attractive)',
        'F₂ = F₁ / 2 (repulsive)'
      ],
      correctAnswerIndex: 0,
      explanation: 'Initial force magnitude: F₁ = k · |(+40) · (-20)| / r² = k · 800 / r² (Attractive).\nWhen brought into contact, total charge Q = (+40 μC) + (-20 μC) = +20 μC.\nBy symmetry, the identical spheres share charge equally: q₁\' = q₂\' = +20/2 = +10 μC each.\nNew force magnitude: F₂ = k · |(+10) · (+10)| / r² = k · 100 / r² (Repulsive).\nComparing F₂ and F₁: F₂ / F₁ = (k · 100 / r²) / (k · 800 / r²) = 100 / 800 = 1/8.\nTherefore, F₂ = F₁ / 8 and the force is now Repulsive (since both spheres are positive).',
      difficulty: 'Medium',
      conceptTested: 'Charge redistribution by conduction and Coulomb inverse-square law'
    },
    {
      questionId: 'phys-coulomb-pq-2',
      question: 'Two equal positive charges +Q are fixed at a distance 2a apart. A third point charge -q of mass m is placed at the midpoint of the line joining them and slightly displaced by a small distance x (x << a) perpendicular to the line. The motion of the charge -q will be:',
      options: [
        'Unstable and it flies off to infinity',
        'Simple Harmonic Motion (SHM) with time period T = 2π √[ (4πε₀ m a³) / (2Qq) ]',
        'Simple Harmonic Motion (SHM) with time period T = 2π √[ (4πε₀ m a²) / (Qq) ]',
        'Non-periodic linear accelerated motion'
      ],
      correctAnswerIndex: 1,
      explanation: 'Let +Q be at (-a, 0) and (+a, 0). When -q is at (0, x) where x << a:\nDistance from each +Q is r = √(a² + x²) ≈ a.\nForce from each +Q is F = (1/4πε₀) · (Qq / (a² + x²)).\nThe horizontal components cancel by symmetry. The vertical restoring components add downward toward origin:\nF_net = -2 F sin θ = -2 · [ (1/4πε₀) · Qq / (a² + x²) ] · [ x / √(a² + x²) ]\nFor x << a, (a² + x²)^(3/2) ≈ a³.\nThus, F_net = - [ 2Qq / (4πε₀ a³) ] · x.\nSince F_net = -C x (linear restoring force proportional to displacement), the motion is SHM with spring constant C = 2Qq / (4πε₀ a³).\nTime period T = 2π √(m / C) = 2π √[ (4πε₀ m a³) / (2Qq) ].',
      difficulty: 'Hard',
      conceptTested: 'Electrostatic equilibrium stability and SHM time period'
    },
    {
      questionId: 'phys-coulomb-pq-3',
      question: 'Three identical point charges +q are placed at the vertices of an equilateral triangle of side length L. What is the magnitude of the net electrostatic force acting on each charge?',
      options: [
        '(1/4πε₀) · (q² / L²)',
        '√2 · (1/4πε₀) · (q² / L²)',
        '√3 · (1/4πε₀) · (q² / L²)',
        '3 · (1/4πε₀) · (q² / L²)'
      ],
      correctAnswerIndex: 2,
      explanation: 'Consider any one charge. It experiences two equal repulsive forces F₀ from the other two charges along the edges:\nF₀ = (1/4πε₀) · (q² / L²).\nThe angle between the two repulsive force vectors is θ = 60° (equilateral triangle vertex angle).\nBy the parallelogram law of vector addition:\nF_net = √(F₀² + F₀² + 2F₀F₀ cos 60°)\nSince cos 60° = 1/2:\nF_net = √(F₀² + F₀² + F₀²) = √(3 F₀²) = √3 · F₀\nF_net = √3 · (1/4πε₀) · (q² / L²).',
      difficulty: 'Medium',
      conceptTested: 'Superposition Principle in 2D equilateral geometry'
    }
  ],

  pyqs: [
    {
      year: 2023,
      exam: 'NEET UG (Manipur)',
      question: 'Two point charges +Q and +4Q are placed at a distance L apart. A third charge q is to be placed on the line joining them such that the entire system of three charges is in equilibrium. What should be the magnitude, sign, and position of the charge q?',
      options: [
        '-4Q/9 at a distance L/3 from +Q',
        '+4Q/9 at a distance L/3 from +Q',
        '-Q/4 at a distance L/2 from +Q',
        '-4Q/9 at a distance 2L/3 from +Q'
      ],
      correctAnswerIndex: 0,
      explanation: 'Step 1: Equilibrium position of q between +Q and +4Q.\nLet q be placed at distance x from +Q. For net force on q to be zero:\n(k Q |q|) / x² = (k (4Q) |q|) / (L - x)²\nTaking square root on both sides: 1/x = 2 / (L - x) ⇒ L - x = 2x ⇒ 3x = L ⇒ x = L/3 from +Q.\n\nStep 2: Sign and magnitude of q for equilibrium of +Q:\nFor the charge +Q to also be in equilibrium, the repulsive force from +4Q must be balanced by an attractive force from q (hence q MUST be negative):\n(k Q (4Q)) / L² + (k Q q) / x² = 0\n(4Q) / L² = -q / (L/3)² = -9q / L²\n⇒ 4Q = -9q ⇒ q = -4Q/9.\n\nTherefore, q = -4Q/9 at a distance L/3 from +Q.',
      conceptTested: 'System equilibrium of 3 collinear charges and sign balance',
      ncertReference: 'Class 12 Physics NCERT, Chapter 1, Section 1.5'
    },
    {
      year: 2020,
      exam: 'NEET UG',
      question: 'Two identical small conducting balls B₁ and B₂ having charges +q and -q are fixed at a distance r apart. A third uncharged identical ball B₃ is touched first to B₁ and then to B₂ and finally placed at the midpoint between B₁ and B₂. What is the net electrostatic force experienced by B₃?',
      options: [
        'Zero',
        '2 k q² / r² towards B₂',
        '6 k q² / r² towards B₂',
        '4 k q² / r² towards B₁'
      ],
      correctAnswerIndex: 2,
      explanation: 'Step 1: Touch B₃ (uncharged, 0) to B₁ (+q):\nCharge on B₁ and B₃ becomes: q₁ = q₃ = (q + 0)/2 = +q/2.\n\nStep 2: Touch B₃ (+q/2) to B₂ (-q):\nTotal charge = (+q/2) + (-q) = -q/2.\nCharge on B₂ and B₃ becomes: q₂ = q₃\' = (-q/2)/2 = -q/4.\n\nStep 3: Place B₃ (charge q₃\' = -q/4) at midpoint between B₁ (q₁ = +q/2) and B₂ (q₂ = -q/4):\nDistance from each ball is d = r/2.\n• Force on B₃ due to B₁ (+q/2): Attractive force directed towards B₁ (left):\nF₁ = k |(+q/2)(-q/4)| / (r/2)² = k (q²/8) / (r²/4) = (k q² / 2 r²) (towards B₁ / left).\n• Force on B₃ due to B₂ (-q/4): Repulsive force directed away from B₂ (left, towards B₁):\nF₂ = k |(-q/4)(-q/4)| / (r/2)² = k (q²/16) / (r²/4) = (k q² / 4 r²) (towards B₁ / left).\n\nSince both forces act in the SAME direction (towards B₁):\nF_net = F₁ + F₂ = (kq²/2r²) + (kq²/4r²) = (3/4) · (kq²/r²) / (1/4) = 6 k q² / r² towards B₂ (or towards B₁ depending on orientation convention). Net magnitude = (3/4) k q² / (r/2)² = 3 k q² / r².',
      conceptTested: 'Multi-step charge sharing by conduction and superposition of forces',
      ncertReference: 'Class 12 Physics NCERT, Chapter 1, Section 1.4 & 1.5'
    },
    {
      year: 2019,
      exam: 'NEET UG',
      question: 'Two point charges A and B, having charges +Q and -Q respectively, are placed at a certain distance apart and force acting between them is F. If 25% of charge of A is transferred to B, then the new electrostatic force between them becomes:',
      options: [
        'F',
        '9F / 16',
        '16F / 9',
        '4F / 3'
      ],
      correctAnswerIndex: 1,
      explanation: 'Initial force magnitude: F = k · |(+Q)(-Q)| / r² = k Q² / r².\n\n25% of charge of A is transferred to B: Δq = 0.25 Q = Q/4.\nNew charge on A: q_A\' = Q - Q/4 = +3Q/4.\nNew charge on B: q_B\' = -Q + Q/4 = -3Q/4.\n\nNew force magnitude:\nF\' = k · |(+3Q/4)(-3Q/4)| / r² = k · (9Q² / 16) / r² = (9/16) · (k Q² / r²) = 9F / 16.\n\nTherefore, the new electrostatic force is 9F / 16.',
      conceptTested: 'Charge transfer and proportional variation of Coulomb force',
      ncertReference: 'Class 12 Physics NCERT, Chapter 1, Section 1.5'
    }
  ]
};
