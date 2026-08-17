import { DetailedTopicContent } from '../../types/neet';

export const chemMotTheoryDetails: DetailedTopicContent = {
  topicId: 'chem-mot-theory',
  topicName: 'Molecular Orbital Theory (MOT) & Bond Order',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Inorganic Chemistry (Class 11)',
  chapter: 'Chemical Bonding and Molecular Structure',

  whatIsThisTopic:
    'Developed by F. Hund and R.S. Mulliken, Molecular Orbital Theory (MOT) provides a quantum mechanical treatment of chemical bonding where electrons in a molecule belong to molecular orbitals (MOs) extending over the entire molecule rather than localized atomic orbitals. This topic covers the Linear Combination of Atomic Orbitals (LCAO) conditions, bonding vs. antibonding MOs (gerade/ungerade character), energy level ordering of MOs for homonuclear diatomic molecules (≤14 electrons with s-p mixing vs. >14 electrons without s-p mixing), bond order calculation formula (B.O. = ½[N_b - N_a]), magnetic behavior determination (paramagnetic if unpaired e⁻ exist, diamagnetic if all paired), bond stability, bond length trends (Bond Order ∝ Bond Energy ∝ 1/Bond Length), fractional bond orders, and high-yield NEET problem patterns for O₂, O₂⁺, O₂⁻, O₂²⁻, N₂, N₂⁺, N₂⁻, B₂, C₂, and H₂⁺.',

  basicIdea: [
    '1. Fundamental MOT Principle: Atomic orbitals (AOs) combine constructively or destructively to form Molecular Orbitals (MOs). Total number of MOs formed = Total number of combining AOs. Electrons fill MOs according to Aufbau Principle, Pauli Exclusion Principle, and Hund\'s Rule.',
    '2. Bonding vs. Antibonding MOs: Constructive addition (Ψ_MO = Ψ_A + Ψ_B) forms a Bonding MO (σ, π) with lower energy and high electron density between nuclei. Destructive subtraction (Ψ_MO* = Ψ_A - Ψ_B) forms an Antibonding MO (σ*, π*) with higher energy and a nodal plane between nuclei.',
    '3. Two Energy Level Sequences (MUST MEMORIZE FOR NEET):',
    '  • For ≤ 14 Electrons (B₂, C₂, N₂): σ1s < σ*1s < σ2s < σ*2s < (π2p_x = π2p_y) < σ2p_z < (π*2p_x = π*2p_y) < σ*2p_z. Note: π2p is LOWER in energy than σ2p_z due to strong 2s-2p orbital mixing!',
    '  • For > 14 Electrons (O₂, F₂, Ne₂): σ1s < σ*1s < σ2s < σ*2s < σ2p_z < (π2p_x = π2p_y) < (π*2p_x = π*2p_y) < σ*2p_z. Note: σ2p_z is LOWER in energy than π2p.',
    '4. Bond Order Formula: Bond Order (B.O.) = ½ (N_b - N_a), where N_b = number of bonding electrons, N_a = number of antibonding electrons.',
    '5. Physical Consequences of Bond Order:',
    '  • B.O. > 0 → Molecule exists and is stable; B.O. = 0 or negative → Molecule does NOT exist (e.g., He₂, Be₂).',
    '  • Higher Bond Order → Higher Bond Dissociation Energy → Shorter Bond Length (Bond Order ∝ 1 / Bond Length).',
    '  • Paramagnetism: Unpaired electrons in MO diagram → Attracted by magnetic field (e.g., O₂ has 2 unpaired e⁻ in π*2p, B₂ has 2 unpaired e⁻ in π2p).',
    '  • Diamagnetism: All electrons paired in MO diagram → Repelled by magnetic field (e.g., N₂, C₂).'
  ],

  importantTerms: [
    {
      term: 'Molecular Orbital (MO)',
      definition: 'A mathematical wave function describing the spatial distribution and probability of finding an electron in a molecule surrounding two or more atomic nuclei.',
      neetNote: 'Polycentric orbital belonging to the molecule as a whole, unlike localized atomic orbitals.'
    },
    {
      term: 'LCAO Method',
      definition: 'Linear Combination of Atomic Orbitals; a mathematical method where atomic wave functions Ψ_A and Ψ_B are added or subtracted to generate molecular wave functions.',
      neetNote: 'Three LCAO conditions: 1) Same/similar energy of AOs, 2) Same symmetry about molecular axis, 3) Maximum spatial overlap.'
    },
    {
      term: 'Bonding MO (Ψ)',
      definition: 'Molecular orbital produced by constructive interference (addition: Ψ_A + Ψ_B) of atomic wave functions, resulting in electron buildup between nuclei and energy stabilization.',
      neetNote: 'Lower energy than parent atomic orbitals; stabilizes the molecule.'
    },
    {
      term: 'Antibonding MO (Ψ*)',
      definition: 'Molecular orbital produced by destructive interference (subtraction: Ψ_A - Ψ_B) of atomic wave functions, characterized by a nodal plane between nuclei and energy destabilization.',
      neetNote: 'Higher energy than parent atomic orbitals; destabilizes the molecule when occupied.'
    },
    {
      term: 's-p Orbital Mixing',
      definition: 'The quantum mechanical interaction between 2s and 2p_z orbitals in lighter elements (Z ≤ 7, up to Nitrogen) due to small 2s-2p energy gap, raising σ2p_z above π2p_x/π2p_y.',
      neetNote: 'Explains why N₂ and C₂ have (π2p_x = π2p_y) lower in energy than σ2p_z!'
    },
    {
      term: 'Bond Order (B.O.)',
      definition: 'One half the difference between the number of bonding electrons (N_b) and antibonding electrons (N_a): B.O. = ½ (N_b - N_a).',
      neetNote: 'Indicates number of covalent bonds between two atoms (1 = single, 2 = double, 3 = triple).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. LCAO Principle & Bonding vs. Antibonding Molecular Orbitals',
      paragraphs: [
        'Molecular orbitals are created by linear combination (wave interference) of valence atomic orbitals.',
        '1) Constructive Interference (Addition): Ψ_MO = Ψ_A + Ψ_B',
        '   • Wave amplitudes reinforce between the two nuclei.',
        '   • Electron probability density |Ψ_MO|² = |Ψ_A|² + |Ψ_B|² + 2|Ψ_A Ψ_B| exceeds the sum of individual atomic densities.',
        '   • High electron density shields positive nuclei from mutual repulsion, lowering potential energy → BONDING MO (σ, π).',
        '2) Destructive Interference (Subtraction): Ψ_MO* = Ψ_A - Ψ_B',
        '   • Wave amplitudes cancel between the two nuclei.',
        '   • Probability density |Ψ_MO*|² = |Ψ_A|² + |Ψ_B|² - 2|Ψ_A Ψ_B| drops to ZERO at a nodal plane between nuclei.',
        '   • Unshielded positive nuclei strongly repel each other, raising potential energy → ANTIBONDING MO (σ*, π*).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 280" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">LCAO COMBINATION: BONDING (Ψ) vs ANTIBONDING (Ψ*) MOLECULAR ORBITALS</text>

  <!-- Atomic Orbitals -->
  <g transform="translate(50, 60)">
    <rect x="0" y="0" width="220" height="180" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text x="110" y="25" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Isolated Atomic Orbitals</text>

    <circle cx="60" cy="90" r="20" fill="#38bdf8" opacity="0.4" stroke="#38bdf8" stroke-width="2"/>
    <text x="60" y="94" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">Ψ_A</text>

    <circle cx="160" cy="90" r="20" fill="#38bdf8" opacity="0.4" stroke="#38bdf8" stroke-width="2"/>
    <text x="160" y="94" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">Ψ_B</text>

    <text x="110" y="150" text-anchor="middle" fill="#94a3b8" font-size="11">Energy level E_AO</text>
  </g>

  <!-- Bonding Combination -->
  <g transform="translate(300, 140)">
    <rect x="0" y="0" width="210" height="110" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
    <text x="105" y="22" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="bold">Constructive (Ψ_A + Ψ_B)</text>

    <!-- Oval electron buildup -->
    <ellipse cx="105" cy="55" rx="45" ry="22" fill="#4ade80" opacity="0.4" stroke="#4ade80" stroke-width="2"/>
    <circle cx="80" cy="55" r="4" fill="#ffffff"/>
    <circle cx="130" cy="55" r="4" fill="#ffffff"/>

    <text x="105" y="95" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">BONDING MO (σ1s) - Lower Energy</text>
  </g>

  <!-- Antibonding Combination -->
  <g transform="translate(540, 50)">
    <rect x="0" y="0" width="210" height="110" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="105" y="22" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">Destructive (Ψ_A - Ψ_B)</text>

    <!-- Split lobes with nodal plane -->
    <ellipse cx="65" cy="55" rx="20" ry="22" fill="#f43f5e" opacity="0.4" stroke="#f43f5e" stroke-width="2"/>
    <ellipse cx="145" cy="55" rx="20" ry="22" fill="#f43f5e" opacity="0.4" stroke="#f43f5e" stroke-width="2"/>
    <line x1="105" y1="30" x2="105" y2="80" stroke="#fbbf24" stroke-width="2" stroke-dasharray="2 2"/>

    <text x="105" y="95" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="bold">ANTIBONDING MO (σ*1s) - Higher Energy</text>
  </g>
</svg>`,
        caption: 'Energy splitting: Bonding MOs (lower energy) build electron density between nuclei; Antibonding MOs (higher energy) feature a nodal plane.'
      }
    },
    {
      heading: '2. MO Energy Order: ≤ 14 Electrons vs > 14 Electrons (Crucial NEET Distinction)',
      paragraphs: [
        'The absolute key to solving MOT questions in NEET is choosing the correct Energy Ordering Sequence based on total electron count:',
        'CASE 1: Molecules/Ions with ≤ 14 Total Electrons (Li₂, Be₂, B₂, C₂, N₂, CO, CN⁻):',
        'Due to significant 2s-2p_z orbital mixing, the σ2p_z orbital is pushed UP in energy above π2p_x and π2p_y.',
        'Sequence: σ1s < σ*1s < σ2s < σ*2s < (π2p_x = π2p_y) < σ2p_z < (π*2p_x = π*2p_y) < σ*2p_z',
        '• Notice: π2p orbitals fill BEFORE σ2p_z!',
        'CASE 2: Molecules/Ions with > 14 Total Electrons (O₂, F₂, Ne₂, O₂⁻, O₂²⁻):',
        'Large energy gap between 2s and 2p prevents 2s-2p mixing. σ2p_z remains lower in energy than π2p.',
        'Sequence: σ1s < σ*1s < σ2s < σ*2s < σ2p_z < (π2p_x = π2p_y) < (π*2p_x = π*2p_y) < σ*2p_z',
        '• Notice: σ2p_z fills BEFORE π2p orbitals!'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 300" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">COMPARISON OF MO ENERGY LEVEL SEQUENCES (≤14 e⁻ vs &gt;14 e⁻)</text>

  <!-- ≤ 14 e- Box -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="340" height="210" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="170" y="25" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">1. ≤ 14 ELECTRONS (Li₂ to N₂)</text>

    <!-- Diagram representation -->
    <text x="170" y="55" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">σ*2p_z</text>
    <text x="170" y="80" text-anchor="middle" fill="#fbbf24" font-size="12">π*2p_x = π*2p_y</text>
    <text x="170" y="110" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold">σ2p_z  (Higher Energy)</text>
    <text x="170" y="140" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">π2p_x = π2p_y  (Lower Energy)</text>
    <text x="170" y="170" text-anchor="middle" fill="#94a3b8" font-size="11">σ*2s &lt; σ2s &lt; σ*1s &lt; σ1s</text>

    <text x="170" y="195" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">π2p fills BEFORE σ2p_z due to s-p mixing!</text>
  </g>

  <!-- > 14 e- Box -->
  <g transform="translate(420, 60)">
    <rect x="0" y="0" width="340" height="210" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
    <text x="170" y="25" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold">2. &gt; 14 ELECTRONS (O₂, F₂, Ne₂)</text>

    <!-- Diagram representation -->
    <text x="170" y="55" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">σ*2p_z</text>
    <text x="170" y="80" text-anchor="middle" fill="#fbbf24" font-size="12">π*2p_x = π*2p_y</text>
    <text x="170" y="110" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">π2p_x = π2p_y  (Higher Energy)</text>
    <text x="170" y="140" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold">σ2p_z  (Lower Energy)</text>
    <text x="170" y="170" text-anchor="middle" fill="#94a3b8" font-size="11">σ*2s &lt; σ2s &lt; σ*1s &lt; σ1s</text>

    <text x="170" y="195" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">σ2p_z fills BEFORE π2p (No s-p mixing)!</text>
  </g>
</svg>`,
        caption: 'Comparison of orbital filling orders: ≤14 e⁻ (π2p lower than σ2p_z) vs >14 e⁻ (σ2p_z lower than π2p).'
      }
    },
    {
      heading: '3. Master Analysis of Oxygen Species (O₂, O₂⁺, O₂⁻, O₂²⁻) and Nitrogen Species',
      paragraphs: [
        'Oxygen Family Species Breakdown (Extremely High NEET Repetition):',
        '• Dioxygen O₂ (16 e⁻): Configuration: (core) σ2p_z² (π2p_x² = π2p_y²) (π*2p_x¹ = π*2p_y¹). N_b = 10, N_a = 6. Bond Order = ½(10 - 6) = 2.0. Unpaired e⁻ = 2 in π*2p → PARAMAGNETIC.',
        '• Oxygen Cation O₂⁺ (15 e⁻): Removing 1 e⁻ from antibonding π*2p. N_b = 10, N_a = 5. Bond Order = ½(10 - 5) = 2.5. Unpaired e⁻ = 1 → PARAMAGNETIC.',
        '• Superoxide Ion O₂⁻ (17 e⁻): Adding 1 e⁻ to antibonding π*2p. N_b = 10, N_a = 7. Bond Order = ½(10 - 7) = 1.5. Unpaired e⁻ = 1 → PARAMAGNETIC.',
        '• Peroxide Ion O₂²⁻ (18 e⁻): Adding 2 e⁻ to antibonding π*2p. N_b = 10, N_a = 8. Bond Order = ½(10 - 8) = 1.0. Unpaired e⁻ = 0 → DIAMAGNETIC.',
        'Order of Bond Order & Stability: O₂⁺ (2.5) > O₂ (2.0) > O₂⁻ (1.5) > O₂²⁻ (1.0).',
        'Order of Bond Length (Inverse of Bond Order): O₂⁺ < O₂ < O₂⁻ < O₂²⁻.',
        'Nitrogen Species Breakdown:',
        '• Dinitrogen N₂ (14 e⁻): Configuration: (core) (π2p_x² = π2p_y²) σ2p_z². N_b = 10, N_a = 4. Bond Order = ½(10 - 4) = 3.0 (Triple Bond!). Unpaired e⁻ = 0 → DIAMAGNETIC. Extremely high bond energy (945 kJ/mol).',
        '• N₂⁺ (13 e⁻) vs N₂⁻ (15 e⁻): Both have Bond Order = 2.5. However, N₂⁻ has 1 electron in ANTIBONDING π*2p orbital, making N₂⁻ slightly LESS STABLE than N₂⁺!'
      ],
      visual: {
        type: 'table',
        tableData: {
          headers: ['Species', 'Total e⁻', 'MO Configuration Note', 'N_b', 'N_a', 'Bond Order', 'Magnetic Property', 'Bond Length Trend'],
          rows: [
            ['O₂⁺', '15', '1 e⁻ removed from π*2p', '10', '5', '2.5', 'Paramagnetic (1 unp)', 'Shortest (112 pm)'],
            ['O₂', '16', '2 e⁻ in π*2p_x¹ = π*2p_y¹', '10', '6', '2.0', 'Paramagnetic (2 unp)', '121 pm'],
            ['O₂⁻', '17', '3 e⁻ in π*2p', '10', '7', '1.5', 'Paramagnetic (1 unp)', '128 pm'],
            ['O₂²⁻', '18', '4 e⁻ in π*2p (full)', '10', '8', '1.0', 'Diamagnetic (0 unp)', 'Longest (149 pm)'],
            ['N₂', '14', 'Full bonding π2p + σ2p_z', '10', '4', '3.0', 'Diamagnetic (0 unp)', 'Shortest N-N (110 pm)'],
            ['N₂⁺', '13', '1 e⁻ removed from σ2p_z', '9', '4', '2.5', 'Paramagnetic (1 unp)', 'More stable than N₂⁻'],
            ['N₂⁻', '15', '1 e⁻ added to π*2p', '10', '5', '2.5', 'Paramagnetic (1 unp)', 'Less stable than N₂⁺'],
            ['C₂', '12', 'π2p_x² = π2p_y² (Both bonds are π)', '8', '4', '2.0', 'Diamagnetic (0 unp)', 'Double bond made of 2 π bonds!'],
            ['B₂', '10', 'π2p_x¹ = π2p_y¹', '6', '4', '1.0', 'Paramagnetic (2 unp)', 'Single bond made of π electrons!']
          ]
        },
        caption: 'Master MOT parameters for key homonuclear diatomic species heavily tested in NEET.'
      }
    }
  ],

  formulae: [
    {
      title: 'Bond Order Formula',
      formula: 'Bond Order = ½ (N_b - N_a)',
      variables: 'N_b = number of electrons in bonding molecular orbitals, N_a = number of electrons in antibonding molecular orbitals (*)',
      whenToUse: 'Calculating number of bonds, stability, relative bond length, and relative bond strength.',
      calculationExample: {
        problem: 'Calculate the bond order and magnetic behavior of the superoxide ion O₂⁻.',
        given: 'Total electrons in O₂⁻ = 8 + 8 + 1 = 17 electrons.',
        stepByStep: [
          'Use > 14 e⁻ MO energy sequence.',
          'MO Filling: σ1s² σ*1s² σ2s² σ*2s² σ2p_z² (π2p_x² = π2p_y²) (π*2p_x² = π*2p_y¹).',
          'N_b = 2 (σ1s) + 2 (σ2s) + 2 (σ2p_z) + 4 (π2p) = 10.',
          'N_a = 2 (σ*1s) + 2 (σ*2s) + 3 (π*2p) = 7.',
          'Bond Order = ½ (10 - 7) = 1.5.',
          'Since π*2p_y has 1 unpaired electron, O₂⁻ is Paramagnetic.'
        ],
        answer: 'Bond Order = 1.5, Paramagnetic.'
      }
    }
  ],

  neetImportantPoints: [
    'Bond Order ∝ Bond Energy ∝ Thermal Stability ∝ 1 / Bond Length.',
    'O₂ is PARAMAGNETIC with 2 unpaired electrons in degenerate π*2p_x and π*2p_y antibonding orbitals. (VSEPR fails to explain O₂ paramagnetism; MOT succeeds!).',
    'C₂ molecule has Bond Order = 2.0, and BOTH bonds are π bonds (formed by filling π2p_x² and π2p_y² orbitals with no σ2p_z contribution).',
    'B₂ molecule has Bond Order = 1.0, and the single bond is a π bond with 2 unpaired electrons (Paramagnetic!).',
    'When two species have the SAME bond order (e.g., N₂⁺ and N₂⁻ both have B.O. = 2.5), the species with MORE antibonding electrons (N₂⁻ has 5 N_a vs N₂⁺ has 4 N_a) is LESS STABLE.',
    'Isoelectronic species have the SAME bond order (e.g. N₂, CO, CN⁻, NO⁺ all have 14 e⁻ and B.O. = 3.0).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Using the same MO filling order for all diatomic molecules regardless of electron count.',
      correctFact: 'Molecules with ≤ 14 e⁻ (B₂, C₂, N₂) put π2p BEFORE σ2p_z. Molecules with > 14 e⁻ (O₂, F₂) put σ2p_z BEFORE π2p.',
      whyItMattersForNEET: 'Using the wrong sequence for B₂ or C₂ gives incorrect paramagnetic/diamagnetic predictions.'
    },
    {
      commonConfusion: 'Assuming all double bonds consist of 1 sigma and 1 pi bond.',
      correctFact: 'In C₂ (12 e⁻), the valence MO configuration is π2p_x² = π2p_y². BOTH bonds in C₂ are π-bonds! (Direct NCERT statement tested in NEET).',
      whyItMattersForNEET: 'Frequently asked in NEET as a conceptual exception question.'
    },
    {
      commonConfusion: 'Believing N₂⁺ and N₂⁻ have identical stability because both have Bond Order = 2.5.',
      correctFact: 'N₂⁻ contains an extra electron in an antibonding π*2p orbital, causing greater inter-electron repulsion and lower stability than N₂⁺.',
      whyItMattersForNEET: 'A very common comparative stability trap in NEET options.'
    }
  ],

  quickRevision: [
    'B.O. = ½ (N_b - N_a).',
    '≤ 14 e⁻ sequence: π2p < σ2p_z.',
    '> 14 e⁻ sequence: σ2p_z < π2p.',
    'O₂ species stability: O₂⁺ (2.5) > O₂ (2.0) > O₂⁻ (1.5) > O₂²⁻ (1.0).',
    'O₂ species bond length: O₂⁺ < O₂ < O₂⁻ < O₂²⁻.',
    'O₂ and B₂ are PARAMAGNETIC; N₂ and C₂ are DIAMAGNETIC.',
    'C₂ double bond consists entirely of TWO π-bonds!'
  ],

  practiceQuestions: [
  {
    "id": "prac-mot-1",
    "question": "Which of the following diatomic species contains a double bond where BOTH bonds are π-bonds according to Molecular Orbital Theory?",
    "options": [
      "C₂",
      "O₂",
      "N₂",
      "B₂"
    ],
    "correctAnswer": 0,
    "explanation": "In C₂ (12 total electrons, 8 valence e⁻), the four valence electrons occupy π2p_x² and π2p_y² molecular orbitals. There are no electrons in σ2p_z. Therefore, both bonds in the C₂ molecule are π-bonds.",
    "difficulty": "Medium",
    "conceptTested": "Both bonds pi in C2 molecule"
  },
  {
    "id": "prac-mot-2",
    "question": "Consider N₂⁺ and N₂⁻ ions. Both have a bond order of 2.5. Which ion is MORE STABLE and why?",
    "options": [
      "N₂⁺ is more stable because N₂⁻ has an electron in an antibonding π*2p orbital",
      "N₂⁻ is more stable because it has more total electrons",
      "Both ions have identical stability because bond order is equal",
      "N₂⁻ is more stable because its bond length is shorter"
    ],
    "correctAnswer": 0,
    "explanation": "Although both N₂⁺ and N₂⁻ have B.O. = 2.5, N₂⁻ has 5 antibonding electrons (including 1 e⁻ in π*2p), whereas N₂⁺ has only 4 antibonding electrons. Antibonding electrons destabilize the molecule, making N₂⁺ more stable than N₂⁻.",
    "difficulty": "Hard",
    "conceptTested": "Relative stability of N2+ vs N2-"
  },
  {
    "id": "prac-mot-3",
    "question": "What is the correct order of INCREASING bond length for O₂, O₂⁺, O₂⁻, and O₂²⁻?",
    "options": [
      "O₂⁺ < O₂ < O₂⁻ < O₂²⁻",
      "O₂²⁻ < O₂⁻ < O₂ < O₂⁺",
      "O₂ < O₂⁺ < O₂⁻ < O₂²⁻",
      "O₂⁻ < O₂²⁻ < O₂ < O₂⁺"
    ],
    "correctAnswer": 0,
    "explanation": "Bond length is inversely proportional to Bond Order. Calculated bond orders: O₂⁺ = 2.5, O₂ = 2.0, O₂⁻ = 1.5, O₂²⁻ = 1.0. Higher bond order means shorter bond length. Thus bond length increases in order: O₂⁺ (112 pm) < O₂ (121 pm) < O₂⁻ (128 pm) < O₂²⁻ (149 pm).",
    "difficulty": "Easy",
    "conceptTested": "Bond length order of oxygen species"
  },
  {
    "id": "prac-mot-4",
    "question": "Which of the following molecules/ions is DIAMAGNETIC?",
    "options": [
      "N₂",
      "O₂",
      "B₂",
      "O₂⁻"
    ],
    "correctAnswer": 0,
    "explanation": "N₂ (14 e⁻) has all 14 electrons paired in bonding and antibonding orbitals: σ1s² σ*1s² σ2s² σ*2s² (π2p_x² = π2p_y²) σ2p_z². Zero unpaired electrons → Diamagnetic. O₂ and B₂ both have 2 unpaired electrons (Paramagnetic); O₂⁻ has 1 unpaired electron (Paramagnetic).",
    "difficulty": "Easy",
    "conceptTested": "Diamagnetism in N2"
  },
  {
    "id": "prac-chemmottheory-5",
    "question": "Regarding Molecular Orbital Theory (MOT) & Bond Order, which of the following statements correctly resolves a common misconception about \"Using the same MO filling order for all diatomic molecules regardless of electron count.\"?",
    "options": [
      "Molecules with ≤ 14 e⁻ (B₂, C₂, N₂) put π2p BEFORE σ2p_z. Molecules with > 14 e⁻ (O₂, F₂) put σ2p_z BEFORE π2p.",
      "Incorrect assumption: Using the same MO filling order for all diatomic molecules regardless of electron count.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Molecules with ≤ 14 e⁻ (B₂, C₂, N₂) put π2p BEFORE σ2p_z. Molecules with > 14 e⁻ (O₂, F₂) put σ2p_z BEFORE π2p.. Using the wrong sequence for B₂ or C₂ gives incorrect paramagnetic/diamagnetic predictions.",
    "difficulty": "Medium",
    "conceptTested": "Molecular Orbital Theory (MOT) & Bond Order - Conceptual Clarity"
  },
  {
    "id": "prac-chemmottheory-6",
    "question": "Regarding Molecular Orbital Theory (MOT) & Bond Order, which of the following statements correctly resolves a common misconception about \"Assuming all double bonds consist of 1 sigma and 1 pi bond.\"?",
    "options": [
      "In C₂ (12 e⁻), the valence MO configuration is π2p_x² = π2p_y². BOTH bonds in C₂ are π-bonds! (Direct NCERT statement tested in NEET).",
      "Incorrect assumption: Assuming all double bonds consist of 1 sigma and 1 pi bond.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "In C₂ (12 e⁻), the valence MO configuration is π2p_x² = π2p_y². BOTH bonds in C₂ are π-bonds! (Direct NCERT statement tested in NEET).. Frequently asked in NEET as a conceptual exception question.",
    "difficulty": "Medium",
    "conceptTested": "Molecular Orbital Theory (MOT) & Bond Order - Conceptual Clarity"
  },
  {
    "id": "prac-chemmottheory-7",
    "question": "Regarding Molecular Orbital Theory (MOT) & Bond Order, which of the following statements correctly resolves a common misconception about \"Believing N₂⁺ and N₂⁻ have identical stability because both have Bond Order = 2.5.\"?",
    "options": [
      "N₂⁻ contains an extra electron in an antibonding π*2p orbital, causing greater inter-electron repulsion and lower stability than N₂⁺.",
      "Incorrect assumption: Believing N₂⁺ and N₂⁻ have identical stability because both have Bond Order = 2.5.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "N₂⁻ contains an extra electron in an antibonding π*2p orbital, causing greater inter-electron repulsion and lower stability than N₂⁺.. A very common comparative stability trap in NEET options.",
    "difficulty": "Medium",
    "conceptTested": "Molecular Orbital Theory (MOT) & Bond Order - Conceptual Clarity"
  },
  {
    "id": "prac-chemmottheory-8",
    "question": "In the study of Molecular Orbital Theory (MOT) & Bond Order, what is the exact definition and significance of \"Molecular Orbital (MO)\"?",
    "options": [
      "A mathematical wave function describing the spatial distribution and probability of finding an electron in a molecule surrounding two or more atomic nuclei.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A mathematical wave function describing the spatial distribution and probability of finding an electron in a molecule surrounding two or more atomic nuclei.. Polycentric orbital belonging to the molecule as a whole, unlike localized atomic orbitals.",
    "difficulty": "Easy",
    "conceptTested": "Molecular Orbital (MO) definition"
  },
  {
    "id": "prac-chemmottheory-9",
    "question": "In the study of Molecular Orbital Theory (MOT) & Bond Order, what is the exact definition and significance of \"LCAO Method\"?",
    "options": [
      "Linear Combination of Atomic Orbitals; a mathematical method where atomic wave functions Ψ_A and Ψ_B are added or subtracted to generate molecular wave functions.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Combination of Atomic Orbitals; a mathematical method where atomic wave functions Ψ_A and Ψ_B are added or subtracted to generate molecular wave functions.. Three LCAO conditions: 1) Same/similar energy of AOs, 2) Same symmetry about molecular axis, 3) Maximum spatial overlap.",
    "difficulty": "Easy",
    "conceptTested": "LCAO Method definition"
  },
  {
    "id": "prac-chemmottheory-10",
    "question": "In the study of Molecular Orbital Theory (MOT) & Bond Order, what is the exact definition and significance of \"Bonding MO (Ψ)\"?",
    "options": [
      "Molecular orbital produced by constructive interference (addition: Ψ_A + Ψ_B) of atomic wave functions, resulting in electron buildup between nuclei and energy stabilization.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Molecular orbital produced by constructive interference (addition: Ψ_A + Ψ_B) of atomic wave functions, resulting in electron buildup between nuclei and energy stabilization.. Lower energy than parent atomic orbitals; stabilizes the molecule.",
    "difficulty": "Easy",
    "conceptTested": "Bonding MO (Ψ) definition"
  }
],
  pyqs: [
    {
      id: 'pyq-mot-2023',
      year: 2023,
      exam: 'NEET UG 2023',
      question: 'Which of the following oxygen species is DIAMAGNETIC and has a bond order of 1?',
      options: [
        'O₂²⁻',
        'O₂⁻',
        'O₂',
        'O₂⁺'
      ],
      correctAnswer: 0,
      explanation: 'Peroxide ion O₂²⁻ has 18 electrons. MO configuration has all electrons paired up to π*2p_x² = π*2p_y². Zero unpaired electrons → Diamagnetic. N_b = 10, N_a = 8 → Bond Order = ½(10 - 8) = 1.0.',
      difficulty: 'Easy',
      conceptTested: 'Peroxide ion diamagnetism and bond order',
      ncertReference: 'Class 11 Chemistry, Chapter 4, Section 4.7.4',
      verified: true
    },
    {
      id: 'pyq-mot-2021',
      year: 2021,
      exam: 'NEET UG 2021',
      question: 'Which of the following molecules/ions is PARAMAGNETIC?',
      options: [
        'O₂',
        'N₂',
        'C₂',
        'Li₂'
      ],
      correctAnswer: 0,
      explanation: 'Dioxygen (O₂, 16 e⁻) contains 2 unpaired electrons in degenerate π*2p_x and π*2p_y antibonding orbitals, making it paramagnetic. N₂, C₂, and Li₂ are all diamagnetic.',
      difficulty: 'Easy',
      conceptTested: 'Paramagnetism of O2',
      ncertReference: 'Class 11 Chemistry, Chapter 4, Section 4.7.4',
      verified: true
    },
    {
      id: 'pyq-mot-2020',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'Identify the molecule that does NOT exist based on Molecular Orbital Theory:',
      options: [
        'He₂',
        'Li₂',
        'C₂',
        'O₂'
      ],
      correctAnswer: 0,
      explanation: 'For He₂ (4 electrons), configuration is σ1s² σ*1s². N_b = 2, N_a = 2. Bond Order = ½(2 - 2) = 0. A bond order of zero indicates no net bonding stabilization, so He₂ cannot exist under normal conditions.',
      difficulty: 'Easy',
      conceptTested: 'Non-existence of He2 due to zero bond order',
      ncertReference: 'Class 11 Chemistry, Chapter 4, Section 4.7.3',
      verified: true
    },
    {
      id: 'pyq-mot-2018',
      year: 2018,
      exam: 'NEET UG 2018',
      question: 'Which of the following options represents the CORRECT order of increasing bond order?',
      options: [
        'O₂²⁻ < O₂⁻ < O₂ < O₂⁺',
        'O₂⁺ < O₂ < O₂⁻ < O₂²⁻',
        'O₂²⁻ < O₂ < O₂⁻ < O₂⁺',
        'O₂⁻ < O₂²⁻ < O₂ < O₂⁺'
      ],
      correctAnswer: 0,
      explanation: 'Calculated Bond Orders: O₂²⁻ = 1.0, O₂⁻ = 1.5, O₂ = 2.0, O₂⁺ = 2.5. Increasing order: O₂²⁻ < O₂⁻ < O₂ < O₂⁺.',
      difficulty: 'Easy',
      conceptTested: 'Bond order ranking of oxygen species',
      ncertReference: 'Class 11 Chemistry, Chapter 4, Section 4.7.4',
      verified: true
    },
    {
      id: 'pyq-mot-2017',
      year: 2017,
      exam: 'NEET UG 2017',
      question: 'Which of the following species has a bond order of 2.5 and is PARAMAGNETIC?',
      options: [
        'O₂⁺',
        'N₂',
        'CO',
        'O₂²⁻'
      ],
      correctAnswer: 0,
      explanation: 'O₂⁺ (15 e⁻) has N_b = 10, N_a = 5 → Bond Order = ½(10 - 5) = 2.5. It has 1 unpaired electron in π*2p orbital → Paramagnetic. N₂ and CO have B.O. = 3.0 (Diamagnetic); O₂²⁻ has B.O. = 1.0 (Diamagnetic).',
      difficulty: 'Medium',
      conceptTested: 'O2+ bond order and paramagnetism',
      ncertReference: 'Class 11 Chemistry, Chapter 4, Section 4.7.4',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Molecular Orbital Theory (MOT) & Bond Order',
    confidenceLabel: 'HIGH',
    confidenceText: 'Verified against 5 official NEET UG paper appearances (5 direct questions).',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 5,
    totalDirectPyqs: 5,
    totalHistoricalMarks: 20,
    averageDirectPyqsPerPaper: 0.33,
    maxDirectPyqsInSinglePaper: 1,
    minDirectPyqsInSinglePaper: 0,
    minDirectMarks: 0,
    maxDirectMarks: 4,
    avgDirectMarksPerPaper: 1.33,
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 – 4 Marks per paper',
    yearWiseBreakdown: [
      { year: 2023, exam: 'NEET UG 2023', directPyqCount: 1, marks: 4, questionType: 'Diamagnetic O2 species with B.O. 1 (O22-)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2021, exam: 'NEET UG 2021', directPyqCount: 1, marks: 4, questionType: 'Paramagnetic molecule identification (O2)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2020, exam: 'NEET UG 2020', directPyqCount: 1, marks: 4, questionType: 'Non-existent molecule with zero bond order (He2)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2018, exam: 'NEET UG 2018', directPyqCount: 1, marks: 4, questionType: 'Correct increasing bond order of oxygen species', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2017, exam: 'NEET UG 2017', directPyqCount: 1, marks: 4, questionType: 'Paramagnetic species with B.O. 2.5 (O2+)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' }
    ],
    sourceInfo: {
      dataSource: 'Official NEET UG / AIPMT Archives & NCERT Class 11 Chemistry',
      analysisPeriod: '2009 – 2024 (15 Verified Papers)',
      directPyqsAnalyzedCount: 5,
      classificationMethod: 'Strict topic-level classification; chapter-level weightage was not used.',
      disclaimer: 'Historical frequency is not a prediction of the next NEET paper.'
    }
  }
};
