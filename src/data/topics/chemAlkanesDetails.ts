import { DetailedTopicContent } from '../../types/neet'

export const chemAlkanesDetails: DetailedTopicContent = {
  topicId: 'chem-alkanes',
  topicName: 'Alkanes & Their Reactions',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Organic Chemistry',
  chapter: 'Hydrocarbons',

  whatIsThisTopic: 'Alkanes are saturated acyclic hydrocarbons containing only carbon-carbon single (σ) bonds and carbon-hydrogen single (σ) bonds with the general formula CₙH₂ₙ₊₂. Formerly known as paraffins (Latin: parum affinis = little affinity), alkanes are relatively unreactive towards acids, bases, oxidizing, and reducing agents under ordinary laboratory conditions, but undergo high-temperature or photochemical substitution, combustion, and cracking reactions.',

  basicIdea: [
    '📌 Saturated C-C Framework: Every carbon atom in an alkane is sp³ hybridized with a 3D tetrahedral geometry and bond angles of approximately 109.5°. All bonds are strong covalent σ-bonds.',
    '📌 Homologous Series: Alkanes form a homologous series where adjacent members differ by a -CH₂- group (14 u molar mass). Physical properties like boiling point change predictably with chain length.',
    '📌 Free-Radical Halogenation: Under UV light (hν) or high heat (Δ), alkanes react with halogens via a three-step free-radical substitution mechanism (Initiation, Propagation, Termination).',
    '📌 Preparative Coupling & Decarboxylation: Key NEET preparation pathways include Wurtz reaction (coupling of alkyl halides with Na), Soda-lime decarboxylation (chain-shortening), and Kolbe electrolysis.'
  ],

  importantTerms: [
    {
      term: 'Alkane / Paraffin',
      symbol: 'CₙH₂ₙ₊₂',
      definition: 'A saturated hydrocarbon containing only C-C and C-H single σ-bonds with sp³ hybridized carbons.',
      neetNote: 'Simplest member is methane (CH₄). Alkane carbons are sp³ hybridized with 109.5° tetrahedral angles.'
    },
    {
      term: 'Homologous Series',
      definition: 'A family of organic compounds having the same functional group and general formula, where successive members differ by a -CH₂- unit (molar mass difference of 14 u).',
      neetNote: 'Members share similar chemical properties but show gradual gradation in physical properties (boiling point, density).'
    },
    {
      term: 'Chain Isomerism',
      definition: 'A form of structural isomerism where compounds with identical molecular formulas differ in the arrangement of the carbon skeleton (straight vs branched chains).',
      neetNote: 'Methane, ethane, and propane have NO isomers. Butane has 2, pentane has 3, hexane has 5, and heptane has 9 chain isomers.'
    },
    {
      term: 'Wurtz Reaction',
      definition: 'The reaction of two molecules of alkyl halides with metallic sodium in dry ether to form a symmetrical alkane containing an even number of carbon atoms.',
      neetNote: '2 R-X + 2 Na → R-R + 2 NaX. Cannot prepare methane. Poor yield for unsymmetrical alkanes.'
    },
    {
      term: 'Soda-Lime Decarboxylation',
      definition: 'The reaction of sodium salt of a carboxylic acid with soda-lime (NaOH + CaO in 3:1 ratio) upon heating to yield an alkane with ONE LESS carbon atom than the parent salt.',
      neetNote: 'R-COONa + NaOH → R-H + Na₂CO₃. CaO keeps NaOH dry and prevents glass fusion.'
    },
    {
      term: 'Kolbe Electrolysis',
      definition: 'Electrolysis of an aqueous solution of sodium/potassium carboxylate to yield an alkane (R-R) and CO₂ gas at the anode, with H₂ gas and OH⁻ generated at the cathode.',
      neetNote: 'Anode: R-R + CO₂. Cathode: H₂ + KOH (pH increases). Methane cannot be prepared.'
    },
    {
      term: 'Dihedral Angle / Torsional Strain',
      symbol: 'θ',
      definition: 'The angle between C-H bonds on adjacent carbon atoms when viewed along the C-C bond axis in a Newman projection. Repulsion between bonding electrons creates torsional strain.',
      neetNote: 'In ethane: Staggered (θ = 60°, minimum strain, most stable) vs Eclipsed (θ = 0°, maximum strain, least stable).'
    },
    {
      term: 'Hammond Postulate & Selectivity',
      definition: 'A principle stating that for exothermic steps (chlorination), the transition state resembles reactants (early TS, low selectivity); for endothermic steps (bromination), the TS resembles products (late TS, high selectivity).',
      neetNote: 'Bromination is highly selective for 3° H (1600:82:1), whereas chlorination is unselective (5:3.8:1).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Introduction to Alkanes & Structural Representation',
      paragraphs: [
        'Alkanes are the simplest family of organic compounds consisting solely of carbon and hydrogen linked by single covalent sigma (σ) bonds.',
        'Every carbon atom in an alkane is sp³ hybridized, forming four tetrahedral bonds with a characteristic bond angle of 109.5°. The C-C bond length is 1.54 Å (348 kJ/mol) and the C-H bond length is 1.09 Å (414 kJ/mol).',
        'Successive members of the alkane homologous series differ by a methylene group (-CH₂-) corresponding to a molecular mass increment of 14 u.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 720 240" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-alkane" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <filter id="glow-teal" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Dark Canvas Background -->
  <rect width="720" height="240" rx="16" fill="url(#bg-alkane)" stroke="#334155" stroke-width="1.5"/>

  <!-- Left Box: Methane 3D Tetrahedral Geometry -->
  <g transform="translate(20, 20)">
    <rect width="320" height="200" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="1" stroke-dasharray="4 2"/>
    <text x="160" y="24" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Methane (CH₄): 3D Tetrahedral Geometry</text>
    
    <!-- Central Carbon -->
    <circle cx="160" cy="115" r="18" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
    <text x="160" y="120" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="extrabold">C</text>

    <!-- Top Hydrogen -->
    <line x1="160" y1="97" x2="160" y2="55" stroke="#94a3b8" stroke-width="3"/>
    <circle cx="160" cy="50" r="12" fill="#475569" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="160" y="54" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">H</text>

    <!-- Left Hydrogen (In plane) -->
    <line x1="145" y1="125" x2="100" y2="155" stroke="#94a3b8" stroke-width="3"/>
    <circle cx="95" cy="160" r="12" fill="#475569" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="95" y="164" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">H</text>

    <!-- Wedge Hydrogen (Coming out) -->
    <polygon points="172,123 215,150 210,162" fill="#38bdf8"/>
    <circle cx="215" cy="160" r="12" fill="#0284c7" stroke="#7dd3fc" stroke-width="1.5"/>
    <text x="215" y="164" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">H</text>

    <!-- Dash Hydrogen (Going behind) -->
    <line x1="170" y1="110" x2="215" y2="90" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3 3"/>
    <circle cx="220" cy="85" r="11" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="220" y="89" text-anchor="middle" fill="#cbd5e1" font-size="10" font-weight="bold">H</text>

    <!-- Angle Label -->
    <path d="M 160 80 A 30 30 0 0 0 135 130" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2 2"/>
    <rect x="110" y="85" width="50" height="18" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
    <text x="135" y="98" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="bold">109.5°</text>
  </g>

  <!-- Right Box: Ethane Conformations (Staggered vs Eclipsed Newman Projections) -->
  <g transform="translate(360, 20)">
    <rect width="340" height="200" rx="12" fill="#1e293b" stroke="#2dd4bf" stroke-width="1" stroke-dasharray="4 2"/>
    <text x="170" y="24" text-anchor="middle" fill="#2dd4bf" font-size="13" font-weight="bold">Ethane (C₂H₆): Newman Projections</text>

    <!-- Staggered Conformer -->
    <g transform="translate(85, 110)">
      <!-- Back Carbon (Large Circle) -->
      <circle cx="0" cy="0" r="32" fill="none" stroke="#f43f5e" stroke-width="2.5"/>
      <!-- Back Hydrogens -->
      <line x1="0" y1="-32" x2="0" y2="-52" stroke="#f43f5e" stroke-width="2.5"/>
      <circle cx="0" cy="-56" r="8" fill="#f43f5e"/><text x="0" y="-53" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">H</text>
      
      <line x1="28" y1="16" x2="45" y2="26" stroke="#f43f5e" stroke-width="2.5"/>
      <circle cx="49" cy="28" r="8" fill="#f43f5e"/><text x="49" y="31" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">H</text>

      <line x1="-28" y1="16" x2="-45" y2="26" stroke="#f43f5e" stroke-width="2.5"/>
      <circle cx="-49" cy="28" r="8" fill="#f43f5e"/><text x="-49" y="31" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">H</text>

      <!-- Front Carbon (Point) -->
      <circle cx="0" cy="0" r="5" fill="#38bdf8"/>
      <!-- Front Hydrogens -->
      <line x1="0" y1="0" x2="0" y2="45" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="0" cy="50" r="8" fill="#0284c7"/><text x="0" y="53" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">H</text>

      <line x1="0" y1="0" x2="38" y2="-22" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="42" cy="-24" r="8" fill="#0284c7"/><text x="42" y="-21" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">H</text>

      <line x1="0" y1="0" x2="-38" y2="-22" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="-42" cy="-24" r="8" fill="#0284c7"/><text x="-42" y="-21" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">H</text>

      <text x="0" y="76" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">Staggered (θ = 60°)</text>
      <text x="0" y="88" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">✓ Most Stable (Min Strain)</text>
    </g>

    <!-- Eclipsed Conformer -->
    <g transform="translate(255, 110)">
      <!-- Back Carbon (Large Circle) -->
      <circle cx="0" cy="0" r="32" fill="none" stroke="#f43f5e" stroke-width="2.5"/>
      <!-- Back Hydrogens (Slightly offset for visibility) -->
      <line x1="6" y1="-31" x2="10" y2="-51" stroke="#f43f5e" stroke-width="2.5"/>
      <circle cx="11" cy="-55" r="8" fill="#f43f5e"/><text x="11" y="-52" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">H</text>
      
      <line x1="29" y1="13" x2="47" y2="21" stroke="#f43f5e" stroke-width="2.5"/>
      <circle cx="51" cy="23" r="8" fill="#f43f5e"/><text x="51" y="26" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">H</text>

      <line x1="-25" y1="19" x2="-40" y2="31" stroke="#f43f5e" stroke-width="2.5"/>
      <circle cx="-44" cy="34" r="8" fill="#f43f5e"/><text x="-44" y="37" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">H</text>

      <!-- Front Carbon (Point) -->
      <circle cx="0" cy="0" r="5" fill="#38bdf8"/>
      <!-- Front Hydrogens -->
      <line x1="0" y1="0" x2="0" y2="-45" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="0" cy="-50" r="8" fill="#0284c7"/><text x="0" y="-47" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">H</text>

      <line x1="0" y1="0" x2="38" y2="22" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="42" cy="24" r="8" fill="#0284c7"/><text x="42" y="27" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">H</text>

      <line x1="0" y1="0" x2="-38" y2="22" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="-42" cy="24" r="8" fill="#0284c7"/><text x="-42" y="27" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">H</text>

      <text x="0" y="76" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="bold">Eclipsed (θ = 0°)</text>
      <text x="0" y="88" text-anchor="middle" fill="#f87171" font-size="9" font-weight="bold">✗ Least Stable (Max Strain)</text>
    </g>
  </g>
</svg>`,
        caption: 'Methane 3D Tetrahedral geometry (109.5° bond angle) alongside Ethane Staggered and Eclipsed Newman Projections.',
        guide: 'Staggered conformation has dihedral angle θ = 60° with maximum distance between C-H electron pairs (energy difference = 12.5 kJ/mol).'
      },
      tables: [
        {
          headers: ['IUPAC Name', 'Molecular Formula', 'Condensed Formula', 'Molar Mass (g/mol)', 'Boiling Point (K)'],
          rows: [
            ['Methane', 'CH₄', 'CH₄', '16', '111.5'],
            ['Ethane', 'C₂H₆', 'CH₃-CH₃', '30', '184.6'],
            ['Propane', 'C₃H₈', 'CH₃-CH₂-CH₃', '44', '231.0'],
            ['n-Butane', 'C₄H₁₀', 'CH₃-(CH₂)₂-CH₃', '58', '272.5'],
            ['n-Pentane', 'C₅H₁₂', 'CH₃-(CH₂)₃-CH₃', '72', '309.1'],
            ['n-Hexane', 'C₆H₁₄', 'CH₃-(CH₂)₄-CH₃', '86', '341.9']
          ]
        }
      ],
      importantPoints: [
        '🎯 Energy barrier for rotation about the C-C bond in ethane is 12.5 kJ/mol, which is easily overcome at room temperature by thermal energy, making the conformers interconvertible.',
        '🎯 Staggered conformer is about 12.5 kJ/mol lower in energy than the eclipsed conformer due to minimal torsional strain.'
      ]
    },
    {
      heading: '2. Nomenclature of Alkanes & Common NEET Traps',
      paragraphs: [
        'IUPAC nomenclature follows systematic rules: (1) Find the longest continuous carbon chain as parent, (2) Number the chain to give lowest locants to substituents, (3) Arrange substituent names in alphabetical order.',
        'Substituents like methyl (-CH₃), ethyl (-CH₂CH₃), isopropyl (-CH(CH₃)₂), and tert-butyl (-C(CH₃)₃) must be identified precisely.',
        'Beware of NEET Naming Traps! Selecting the horizontal chain by habit when a longer path bends vertically or using prefixes (di-, tri-) in alphabetical comparison are frequent student errors.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 720 220" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="220" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>

  <!-- Header Title -->
  <text x="360" y="28" text-anchor="middle" fill="#f87171" font-size="14" font-weight="extrabold">⚠️ Common NEET Trap: Longest Carbon Chain Rule</text>

  <!-- Left Side: Wrong Chain Selection -->
  <g transform="translate(30, 45)">
    <rect width="310" height="155" rx="12" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="155" y="22" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">❌ INCORRECT: "2-ethylpentane"</text>
    
    <!-- Structure diagram -->
    <!-- C1 - C2(Et) - C3 - C4 - C5 -->
    <path d="M 40,80 L 90,80 L 140,80 L 190,80 L 240,80" stroke="#f43f5e" stroke-width="4" stroke-linecap="round"/>
    <line x1="90" y1="80" x2="90" y2="125" stroke="#94a3b8" stroke-width="2.5"/>

    <circle cx="40" cy="80" r="14" fill="#334155"/><text x="40" y="84" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">C1</text>
    <circle cx="90" cy="80" r="14" fill="#f43f5e"/><text x="90" y="84" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">C2</text>
    <circle cx="140" cy="80" r="14" fill="#334155"/><text x="140" y="84" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">C3</text>
    <circle cx="190" cy="80" r="14" fill="#334155"/><text x="190" y="84" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">C4</text>
    <circle cx="240" cy="80" r="14" fill="#334155"/><text x="240" y="84" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">C5</text>

    <!-- Ethyl group at C2 -->
    <text x="90" y="142" text-anchor="middle" fill="#cbd5e1" font-size="10" font-weight="bold">-CH₂-CH₃ (Ethyl)</text>

    <text x="155" y="148" text-anchor="middle" fill="#f87171" font-size="10">Wrongly assumes 5-carbon parent chain</text>
  </g>

  <!-- Right Side: Correct Chain Selection -->
  <g transform="translate(380, 45)">
    <rect width="310" height="155" rx="12" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
    <text x="155" y="22" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="bold">✓ CORRECT: 3-methylhexane</text>
    
    <!-- Bent Longest Chain: C1 - C2 - C3(Me) - C4 - C5 - C6 -->
    <path d="M 90,125 L 90,80 L 140,80 L 190,80 L 240,80 L 280,80" stroke="#4ade80" stroke-width="4" stroke-linecap="round"/>
    <line x1="140" y1="80" x2="140" y2="45" stroke="#38bdf8" stroke-width="2.5"/>

    <circle cx="90" cy="125" r="13" fill="#22c55e"/><text x="90" y="129" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">C1</text>
    <circle cx="90" cy="80" r="13" fill="#22c55e"/><text x="90" y="84" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">C2</text>
    <circle cx="140" cy="80" r="13" fill="#22c55e"/><text x="140" y="84" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">C3</text>
    <circle cx="190" cy="80" r="13" fill="#22c55e"/><text x="190" y="84" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">C4</text>
    <circle cx="240" cy="80" r="13" fill="#22c55e"/><text x="240" y="84" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">C5</text>
    <circle cx="280" cy="80" r="13" fill="#22c55e"/><text x="280" y="84" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">C6</text>

    <!-- Methyl branch at C3 -->
    <text x="140" y="38" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="bold">-CH₃ (C1)</text>

    <text x="155" y="148" text-anchor="middle" fill="#4ade80" font-size="10">Correct 6-carbon continuous chain found!</text>
  </g>
</svg>`,
        caption: 'NEET IUPAC Trap: An ethyl group at C2 always extends the parent chain by 1 carbon atom, turning a 5-carbon "pentane" into a 6-carbon "hexane".',
        guide: 'Never name a compound 2-ethylalkane! The longest continuous chain includes the ethyl group carbons, making C3 the site of a methyl substituent.'
      },
      importantPoints: [
        '🎯 Rule 1: Always check if a branch at C2 contains an ethyl group (-CH₂CH₃). If so, the true parent chain extends through the ethyl group!',
        '🎯 Rule 2: In alphabetical ordering, numerical prefixes (di-, tri-, tetra-, sec-, tert-) are IGNORED. However, "iso", "neo", and "cyclo" ARE considered in alphabetical ordering!'
      ]
    },
    {
      heading: '3. Isomerism in Alkanes & Systematic Isomer Counting',
      paragraphs: [
        'Alkanes exhibit chain isomerism (structural isomerism). The first three members (CH₄, C₂H₆, C₃H₈) exist in only one structural form.',
        'Butane (C₄H₁₀) has 2 isomers: n-butane and 2-methylpropane (isobutane).',
        'Pentane (C₅H₁₂a) has 3 isomers: n-pentane, 2-methylbutane (isopentane), and 2,2-dimethylpropane (neopentane).',
        'Hexane (C₆H₁₄) has 5 isomers, and Heptane (C₇H₁₆) has 9 isomers.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 720 220" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="220" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>

  <text x="360" y="26" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="extrabold">Structural Isomers of Pentane (C₅H₁₂)</text>

  <!-- Isomer 1: n-Pentane -->
  <g transform="translate(20, 45)">
    <rect width="210" height="155" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text x="105" y="22" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">1. n-Pentane</text>
    <text x="105" y="38" text-anchor="middle" fill="#cbd5e1" font-size="10">Straight chain (5 Carbons)</text>

    <!-- Formula -->
    <text x="105" y="80" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">CH₃-CH₂-CH₂-CH₂-CH₃</text>
    
    <rect x="25" y="105" width="160" height="36" rx="6" fill="#0f172a" stroke="#334155"/>
    <text x="105" y="120" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="bold">b.p. = 309.1 K (Highest)</text>
    <text x="105" y="134" text-anchor="middle" fill="#94a3b8" font-size="9">Max Surface Area → Strong vdW</text>
  </g>

  <!-- Isomer 2: 2-Methylbutane (Isopentane) -->
  <g transform="translate(255, 45)">
    <rect width="210" height="155" rx="12" fill="#1e293b" stroke="#2dd4bf" stroke-width="1"/>
    <text x="105" y="22" text-anchor="middle" fill="#2dd4bf" font-size="12" font-weight="bold">2. 2-Methylbutane</text>
    <text x="105" y="38" text-anchor="middle" fill="#cbd5e1" font-size="10">Branched (Isopentane)</text>

    <!-- Formula -->
    <text x="105" y="70" text-anchor="middle" fill="#2dd4bf" font-size="11" font-weight="bold">CH₃-CH(CH₃)-CH₂-CH₃</text>

    <rect x="25" y="105" width="160" height="36" rx="6" fill="#0f172a" stroke="#334155"/>
    <text x="105" y="120" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">b.p. = 301.0 K (Intermediate)</text>
    <text x="105" y="134" text-anchor="middle" fill="#94a3b8" font-size="9">1 Methyl Branch</text>
  </g>

  <!-- Isomer 3: 2,2-Dimethylpropane (Neopentane) -->
  <g transform="translate(490, 45)">
    <rect width="210" height="155" rx="12" fill="#1e293b" stroke="#f43f5e" stroke-width="1"/>
    <text x="105" y="22" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">3. 2,2-Dimethylpropane</text>
    <text x="105" y="38" text-anchor="middle" fill="#cbd5e1" font-size="10">Spherical (Neopentane)</text>

    <!-- Formula -->
    <text x="105" y="70" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="bold">C(CH₃)₄</text>

    <rect x="25" y="105" width="160" height="36" rx="6" fill="#0f172a" stroke="#334155"/>
    <text x="105" y="120" text-anchor="middle" fill="#f87171" font-size="10" font-weight="bold">b.p. = 282.5 K (Lowest)</text>
    <text x="105" y="134" text-anchor="middle" fill="#94a3b8" font-size="9">Spherical → Minimal Contact Area</text>
  </g>
</svg>`,
        caption: 'The three structural chain isomers of pentane (C₅H₁₂): n-pentane, isopentane, and neopentane.',
        guide: 'Increasing branching turns the elongated molecular chain into a compact sphere, reducing intermolecular surface contact area and lowering boiling point.'
      },
      tables: [
        {
          headers: ['Alkane Formula', 'Number of Carbons (n)', 'Number of Structural Isomers', 'Isomer Names'],
          rows: [
            ['CH₄', '1', '1', 'Methane'],
            ['C₂H₆', '2', '1', 'Ethane'],
            ['C₃H₈', '3', '1', 'Propane'],
            ['C₄H₁₀', '4', '2', 'n-Butane, 2-Methylpropane'],
            ['C₅H₁₂', '5', '3', 'n-Pentane, 2-Methylbutane, 2,2-Dimethylpropane'],
            ['C₆H₁₄', '6', '5', 'n-Hexane, 2-Me-pentane, 3-Me-pentane, 2,2-DiMe-butane, 2,3-DiMe-butane'],
            ['C₇H₁₆', '7', '9', 'n-Heptane, 2-Me-hexane, 3-Me-hexane, 2,2-DiMe-pentane...']
          ]
        }
      ],
      importantPoints: [
        '🎯 NEET Shortcut Formula for Alkane Isomers (for n = 4 to 7): Number of isomers = 2^(n-4) + 1. (For C₄: 2¹ + 1 = 3? No! For C₄: 2^(4-4) + 1 = 2; C₅: 2¹ + 1 = 3; C₆: 2² + 1 = 5; C₇: 2³ + 1 = 9).'
      ]
    },
    {
      heading: '4. Preparation Methods of Alkanes & NEET Reactions',
      paragraphs: [
        'Alkanes can be prepared by several well-defined organic reactions tested heavily in NEET UG:',
        '1. Hydrogenation of Alkenes/Alkynes (Sabatier-Senderens Reaction): Catalytic addition of H₂ in presence of Finely divided Ni, Pt, or Pd at 523 K converts unsaturated bonds into C-C single bonds.',
        '2. Reduction of Alkyl Halides: R-X + H₂ → R-H + HX using Zn/HCl, LiAlH₄, or Red P + HI at 423 K.',
        '3. Wurtz Reaction: Coupling of two alkyl halide molecules with Na metal in dry ether: 2 R-X + 2 Na → R-R + 2 NaX. Gives symmetrical alkanes with an EVEN number of carbon atoms in excellent yield.',
        '4. Decarboxylation of Sodium Carboxylates (Soda Lime Decarboxylation): R-COONa + NaOH (CaO, Δ) → R-H + Na₂CO₃. Resulting alkane contains ONE LESS carbon atom than the starting carboxylic acid salt.',
        '5. Kolbe Electrolysis: Electrolysis of aqueous sodium carboxylate solution: Anode yields alkane (R-R) + CO₂ gas; Cathode yields H₂ gas + NaOH (solution pH increases).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 720 230" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="230" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>

  <!-- Left Side: Wurtz Reaction Mechanism -->
  <g transform="translate(20, 20)">
    <rect width="330" height="190" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="165" y="24" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">1. Wurtz Reaction Coupling</text>

    <text x="165" y="55" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">R—X + 2Na + X—R  <tspan fill="#38bdf8">─[Dry Ether]─►</tspan>  R—R + 2NaX</text>

    <!-- Visual coupling diagram -->
    <rect x="30" y="75" width="270" height="55" rx="8" fill="#0f172a" stroke="#334155"/>
    <text x="65" y="108" font-size="14" fill="#38bdf8" font-weight="extrabold">R</text>
    <circle cx="95" cy="103" r="12" fill="#f43f5e"/><text x="95" y="107" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">X</text>
    
    <text x="135" y="108" fill="#f59e0b" font-size="14" font-weight="bold">+ 2Na +</text>

    <circle cx="180" cy="103" r="12" fill="#f43f5e"/><text x="180" y="107" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">X</text>
    <text x="210" y="108" font-size="14" fill="#38bdf8" font-weight="extrabold">R</text>

    <path d="M 85,85 Q 135,65 185,85" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3 3"/>
    <text x="135" y="62" text-anchor="middle" fill="#f59e0b" font-size="9" font-weight="bold">2 NaX Formed</text>

    <text x="165" y="152" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">✓ Best for Symmetrical Alkanes (Even C)</text>
    <text x="165" y="168" text-anchor="middle" fill="#f87171" font-size="9">❌ Methane CANNOT be prepared by Wurtz!</text>
  </g>

  <!-- Right Side: Kolbe Electrolysis Setup -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" rx="12" fill="#1e293b" stroke="#2dd4bf" stroke-width="1.5"/>
    <text x="165" y="24" text-anchor="middle" fill="#2dd4bf" font-size="13" font-weight="bold">2. Kolbe Electrolysis (Anode vs Cathode)</text>

    <!-- Reaction Summary Box -->
    <rect x="20" y="42" width="290" height="135" rx="8" fill="#0f172a" stroke="#2dd4bf" stroke-width="1"/>
    
    <!-- Anode Box -->
    <rect x="30" y="52" width="270" height="50" rx="6" fill="#881337" stroke="#f43f5e"/>
    <text x="40" y="70" fill="#fca5a5" font-size="11" font-weight="bold">ANODE (+): Oxidation of Carboxylate</text>
    <text x="40" y="88" fill="#ffffff" font-size="10">2 CH₃COO⁻ ──► CH₃—CH₃ (Ethane) + 2 CO₂ ↑ + 2e⁻</text>

    <!-- Cathode Box -->
    <rect x="30" y="112" width="270" height="55" rx="6" fill="#064e3b" stroke="#34d399"/>
    <text x="40" y="130" fill="#6ee7b7" font-size="11" font-weight="bold">CATHODE (-): Reduction of Water</text>
    <text x="40" y="146" fill="#ffffff" font-size="10">2 H₂O + 2e⁻ ──► H₂ ↑ + 2 OH⁻  (pH increases!)</text>
  </g>
</svg>`,
        caption: 'Key Preparation Pathways: Wurtz Reaction (Symmetrical Alkane Coupling) and Kolbe Electrolysis electrode products.',
        guide: 'Note that Methane (CH₄) cannot be prepared by Wurtz reaction or Kolbe electrolysis because both reactions require coupling of at least two alkyl fragments (R-R).'
      },
      importantPoints: [
        '🎯 Decarboxylation Rule: Soda lime decarboxylation degrades the carbon chain by 1 carbon atom. Example: Sodium propanoate (3 C) + NaOH/CaO → Ethane (2 C) + Na₂CO₃.',
        '🎯 Wurtz Reaction Limitation: Using a mixture of two different alkyl halides (R-X + R\'-X) produces a mixture of THREE alkanes (R-R, R-R\', R\'-R\') with very close boiling points that are nearly impossible to separate.',
        '🎯 3° Alkyl Halides in Wurtz: Tertiary alkyl halides undergo elimination (E2) to yield alkenes instead of Wurtz coupling due to high steric hindrance!'
      ]
    },
    {
      heading: '5. Physical Properties: Boiling Point & Melting Point Trends',
      paragraphs: [
        'Alkanes are non-polar molecules held together by weak van der Waals dispersion forces. Consequently, lower alkanes (C₁-C₄) are gases, C₅-C₁₇ are liquids, and C₁₈+ are waxy solids.',
        'Boiling Point Trend: Boiling point increases regularly with increasing molecular mass (~20-30 K per -CH₂- unit) because larger molecules have greater molecular surface area and stronger van der Waals forces.',
        'Effect of Branching on Boiling Point: For isomeric alkanes, boiling point DECREASES with increased branching! Branching makes the molecule more compact and spherical, reducing the surface area available for intermolecular contact.',
        'Melting Point Trend (Sawtooth / Alteration Effect): Alkanes with an EVEN number of carbon atoms have higher melting points than expected relative to odd-carbon alkanes. Even-carbon alkanes have terminal methyl groups on opposite sides, allowing tighter packing in the crystal lattice.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 720 220" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="220" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>

  <!-- Title -->
  <text x="360" y="26" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="extrabold">Branching Effect on Surface Area & Boiling Point</text>

  <!-- Straight Chain: Large Surface Area -->
  <g transform="translate(40, 45)">
    <rect width="300" height="155" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="150" y="24" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">n-Pentane (Straight Chain)</text>

    <!-- Elongated Capsule -->
    <rect x="40" y="45" width="220" height="40" rx="20" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="2"/>
    <text x="150" y="70" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">Extended Chain (High Surface Contact)</text>

    <!-- Second capsule underneath showing contact -->
    <rect x="40" y="90" width="220" height="20" rx="10" fill="#0369a1" fill-opacity="0.3" stroke="#0284c7" stroke-dasharray="3 3"/>

    <text x="150" y="132" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">b.p. = 309.1 K (High vdW Attraction)</text>
    <text x="150" y="146" text-anchor="middle" fill="#94a3b8" font-size="9">Maximum surface area of contact</text>
  </g>

  <!-- Spherical Branching: Minimal Contact -->
  <g transform="translate(380, 45)">
    <rect width="300" height="155" rx="12" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="150" y="24" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">Neopentane (Highly Branched)</text>

    <!-- Compact Sphere -->
    <circle cx="150" cy="70" r="32" fill="#f43f5e" fill-opacity="0.2" stroke="#f43f5e" stroke-width="2"/>
    <text x="150" y="74" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="bold">Spherical Shape</text>

    <!-- Second sphere underneath touching at point -->
    <circle cx="150" cy="110" r="10" fill="#9f1239" fill-opacity="0.3" stroke="#f43f5e" stroke-dasharray="2 2"/>

    <text x="150" y="132" text-anchor="middle" fill="#f87171" font-size="11" font-weight="bold">b.p. = 282.5 K (Low vdW Attraction)</text>
    <text x="150" y="146" text-anchor="middle" fill="#94a3b8" font-size="9">Minimal point surface contact</text>
  </g>
</svg>`,
        caption: 'Comparison of surface contact areas for straight-chain vs highly branched isomeric pentanes.',
        guide: 'Spherical neopentane has significantly less surface area contact than straight-chain n-pentane, causing a 26.6 K drop in boiling point!'
      },
      importantPoints: [
        '🎯 Solubility Rule: Alkanes are non-polar ("like dissolves like") → Insoluble in water, highly soluble in non-polar solvents like CCl₄, ether, and benzene.',
        '🎯 Density: Density of alkanes increases with molecular mass up to ~0.8 g/cm³, meaning ALL alkanes are lighter than water and float on top.'
      ]
    },
    {
      heading: '6. Free-Radical Halogenation Mechanism (Step-by-Step)',
      paragraphs: [
        'Halogenation of alkanes is a classic photochemical free-radical substitution reaction: R-H + X₂ (hν or Δ) → R-X + HX.',
        'The mechanism proceeds through three distinct steps: Initiation, Propagation, and Termination.',
        '1. Initiation: Homolytic cleavage of the halogen molecule by light (hν) or heat (Δ) to generate two halogen free radicals: Cl-Cl ─(hν)─► 2 Cl• (Endothermic).',
        '2. Propagation (Self-sustaining cycle):',
        '   • Step A (Rate-Determining Step): Cl• abstracts a hydrogen atom from methane to form a methyl radical: CH₄ + Cl• ─(RDS)─► •CH₃ + HCl.',
        '   • Step B: Methyl radical attacks a Cl₂ molecule to form chloromethane and regenerate a Cl• radical: •CH₃ + Cl₂ ─► CH₃Cl + Cl•.',
        '3. Termination: Coupling of any two free radicals removes radical carriers and terminates the chain: Cl• + Cl• ─► Cl₂ ; •CH₃ + Cl• ─► CH₃Cl ; •CH₃ + •CH₃ ─► C₂H₆ (Formation of traces of ethane proves the free-radical mechanism!).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 720 260" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="260" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>

  <text x="360" y="26" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="extrabold">Free-Radical Halogenation Mechanism of Methane</text>

  <!-- Step 1: Initiation -->
  <g transform="translate(20, 45)">
    <rect width="680" height="55" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1"/>
    <text x="15" y="22" fill="#f43f5e" font-size="12" font-weight="bold">STEP 1: INITIATION (Homolytic Bond Cleavage)</text>
    <text x="15" y="42" fill="#ffffff" font-size="11">Cl ─ Cl  <tspan fill="#f59e0b">─[ hν or Δ ]─►</tspan>  Cl• + Cl•   <tspan fill="#94a3b8">(Endothermic ΔH = +242 kJ/mol; Light splits Cl-Cl bond homolytically)</tspan></text>
  </g>

  <!-- Step 2: Propagation -->
  <g transform="translate(20, 110)">
    <rect width="680" height="75" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text x="15" y="20" fill="#38bdf8" font-size="12" font-weight="bold">STEP 2: PROPAGATION (Chain Reaction Cycle)</text>
    <text x="15" y="40" fill="#ffffff" font-size="11">(a) CH₄ + Cl•  <tspan fill="#f87171">─[ Rate Determining Step ]─►</tspan>  •CH₃ + HCl   <tspan fill="#94a3b8">(Hydrogen abstraction; ΔH = +4 kJ/mol)</tspan></text>
    <text x="15" y="60" fill="#ffffff" font-size="11">(b) •CH₃ + Cl₂  <tspan fill="#4ade80">────────►</tspan>  CH₃Cl + Cl•   <tspan fill="#94a3b8">(Chlorine abstraction; regenerates Cl• radical; ΔH = -109 kJ/mol)</tspan></text>
  </g>

  <!-- Step 3: Termination -->
  <g transform="translate(20, 195)">
    <rect width="680" height="52" rx="8" fill="#1e293b" stroke="#2dd4bf" stroke-width="1"/>
    <text x="15" y="20" fill="#2dd4bf" font-size="12" font-weight="bold">STEP 3: TERMINATION (Radical Combination)</text>
    <text x="15" y="38" fill="#ffffff" font-size="11">Cl• + Cl• ─► Cl₂  |  •CH₃ + Cl• ─► CH₃Cl  |  <tspan fill="#f59e0b" font-weight="bold">•CH₃ + •CH₃ ─► C₂H₆ (Ethane byproduct proof!)</tspan></text>
  </g>
</svg>`,
        caption: 'The complete 3-stage Free-Radical Halogenation Mechanism of methane.',
        guide: 'Formation of trace amounts of ethane (CH₃-CH₃) during methane chlorination is direct experimental proof of methyl free radical coupling during termination.'
      },
      importantPoints: [
        '🎯 Reactivity Order of Halogens: F₂ > Cl₂ > Br₂ > I₂.',
        '🎯 Fluorination (F₂) is violently explosive; requires dilution with N₂.',
        '🎯 Iodination (I₂) is reversible and slow! Requires oxidizing agents like HIO₃ or HNO₃ to remove HI and drive the reaction forward: 5 HI + HIO₃ → 3 I₂ + 3 H₂O.'
      ]
    },
    {
      heading: '7. Reactivity, Radical Stability & Major Product Prediction',
      paragraphs: [
        'When alkanes higher than ethane undergo halogenation, different non-equivalent hydrogen atoms can be substituted, producing a mixture of isomeric haloalkanes.',
        'Free Radical Stability Order: Benzylic > Allylic > 3° (9 α-H) > 2° (6 α-H) > 1° (3 α-H) > •CH₃.',
        'Relative Reactivity Rates for H-abstraction at room temperature (298 K):',
        '• Chlorination: 3° H : 2° H : 1° H = 5.0 : 3.8 : 1.0 (Low selectivity, highly reactive).',
        '• Bromination (400 K): 3° H : 2° H : 1° H = 1600 : 82 : 1.0 (High selectivity, less reactive).',
        'Calculation of Product Percentage Yield:',
        'Relative Amount = (Number of H atoms) × (Relative Reactivity of H)',
        '% Yield = (Relative Amount of target isomer / Total Relative Amount) × 100%'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 720 230" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="230" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>

  <text x="360" y="26" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="extrabold">Chlorination vs Bromination of Isobutane (CH₃)₃CH</text>

  <!-- Left Side: Chlorination (Unselective) -->
  <g transform="translate(30, 45)">
    <rect width="310" height="165" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="155" y="24" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="bold">Chlorination (Cl₂ / hν at 298 K)</text>

    <!-- 1° Product -->
    <rect x="20" y="42" width="270" height="48" rx="6" fill="#0f172a" stroke="#334155"/>
    <text x="30" y="60" fill="#ffffff" font-size="10" font-weight="bold">1-Chloro-2-methylpropane (1° H):</text>
    <text x="30" y="76" fill="#f59e0b" font-size="10">9 H × 1.0 = 9.0  ──► <tspan font-weight="extrabold" fill="#4ade80">64% (MAJOR Product!)</tspan></text>

    <!-- 3° Product -->
    <rect x="20" y="98" width="270" height="48" rx="6" fill="#0f172a" stroke="#334155"/>
    <text x="30" y="116" fill="#ffffff" font-size="10" font-weight="bold">2-Chloro-2-methylpropane (3° H):</text>
    <text x="30" y="132" fill="#f59e0b" font-size="10">1 H × 5.0 = 5.0  ──► <tspan font-weight="bold" fill="#f87171">36% (Minor Product)</tspan></text>
  </g>

  <!-- Right Side: Bromination (Highly Selective) -->
  <g transform="translate(380, 45)">
    <rect width="310" height="165" rx="12" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="155" y="24" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="bold">Bromination (Br₂ / hν at 400 K)</text>

    <!-- 1° Product -->
    <rect x="20" y="42" width="270" height="48" rx="6" fill="#0f172a" stroke="#334155"/>
    <text x="30" y="60" fill="#ffffff" font-size="10" font-weight="bold">1-Bromo-2-methylpropane (1° H):</text>
    <text x="30" y="76" fill="#f87171" font-size="10">9 H × 1.0 = 9.0  ──► <tspan font-weight="bold" fill="#94a3b8">0.6% (Negligible)</tspan></text>

    <!-- 3° Product -->
    <rect x="20" y="98" width="270" height="48" rx="6" fill="#0f172a" stroke="#334155"/>
    <text x="30" y="116" fill="#ffffff" font-size="10" font-weight="bold">2-Bromo-2-methylpropane (3° H):</text>
    <text x="30" y="132" fill="#4ade80" font-size="10">1 H × 1600 = 1600  ──► <tspan font-weight="extrabold" fill="#4ade80">&gt;99.4% (OVERWHELMING Major!)</tspan></text>
  </g>
</svg>`,
        caption: 'Reactivity vs Selectivity comparison: Chlorination yields 64% 1° product due to 9 statistical 1° H positions, whereas Bromination yields >99% 3° product due to 1600:1 selectivity.',
        guide: 'Always use statistical yield calculation for Chlorination! Do not automatically pick 3° product as major for chlorination without checking the number of 1° H atoms.'
      },
      importantPoints: [
        '🎯 Chlorination Major Product Rule: Chlorination is fast and unselective (5 : 3.8 : 1). For Isobutane, 9 primary H\'s overcome the higher reactivity of 1 tertiary H, making 1-chloro-2-methylpropane the major product (64%)!',
        '🎯 Bromination Major Product Rule: Bromination is slow and extremely selective (1600 : 82 : 1). The 3° product ALWAYS overwhelmingly dominates (>99%) regardless of primary H count.'
      ]
    },
    {
      heading: '8. Special Reactions: Combustion, Aromatization, Isomerization & Pyrolysis',
      paragraphs: [
        'Alkanes undergo important industrial and synthetic transformations:',
        '1. Combustion: Complete combustion yields CO₂ and H₂O with massive heat release: CₙH₂ₙ₊₂ + ((3n+1)/2) O₂ → n CO₂ + (n+1) H₂O.',
        '2. Controlled Oxidation:',
        '   • 2 CH₄ + O₂ ─(Cu / 523 K / 100 atm)─► 2 CH₃OH (Methanol)',
        '   • CH₄ + O₂ ─(Mo₂O₃ / Δ)─► HCHO + H₂O (Methanal)',
        '   • 2 C₂H₆ + 3 O₂ ─((CH₃COO)₂Mn / Δ)─► 2 CH₃COOH + 2 H₂O (Ethanoic acid)',
        '   • (CH₃)₃CH ─(KMnO₄)─► (CH₃)₃C-OH (2-Methylpropan-2-ol, oxidation of tertiary H!)',
        '3. Isomerization: Heating n-alkanes with Anhydrous AlCl₃ + HCl converts straight-chain alkanes into branched isomers.',
        '4. Aromatization (Reforming): Heating n-hexane to 773 K at 10-20 atm over Cr₂O₃ / V₂O₅ / Mo₂O₃ on alumina catalyst yields Benzene + 4 H₂.',
        '5. Pyrolysis / Cracking: Thermal decomposition of higher alkanes at high temperature into smaller alkanes and alkenes.'
      ],
      visual: {
        type: 'flowchart',
        caption: 'Special Reactions of Alkanes Overview',
        flowchartSteps: [
          {
            step: 'Combustion',
            detail: 'CₙH₂ₙ₊₂ + ((3n+1)/2) O₂ ──► n CO₂ + (n+1) H₂O + Heat',
            arrowText: 'High Exothermic'
          },
          {
            step: 'Controlled Oxidation',
            detail: 'CH₄ + O₂ ──► CH₃OH (Cu) / HCHO (Mo₂O₃) / CH₃COOH (Mn)',
            arrowText: 'Catalyst Dependent'
          },
          {
            step: 'Aromatization',
            detail: 'n-Hexane ──(Cr₂O₃/Al₂O₃, 773 K)──► Benzene + 4 H₂',
            arrowText: 'Ring Closure'
          },
          {
            step: 'Pyrolysis',
            detail: 'C₆H₁₄ ──(773 K)──► C₆H₁₂ + H₂ / C₄H₈ + C₂H₆',
            arrowText: 'Thermal Cracking'
          }
        ]
      },
      importantPoints: [
        '🎯 KMnO₄ Special Test: Alkanes generally resist oxidation by KMnO₄. However, alkanes containing a TERTIARY hydrogen atom (e.g. isobutane) are oxidized by KMnO₄ to corresponding tertiary alcohols!'
      ]
    }
  ],

  formulae: [
    {
      title: 'General Alkane Formula',
      formula: 'C_n H_{2n+2}',
      variables: 'n = Number of carbon atoms (n = 1, 2, 3...)',
      whenToUse: 'Use to find molecular formula of any acyclic saturated alkane.',
      note: 'Molar mass = 14n + 2 g/mol.'
    },
    {
      title: 'Alkane Combustion Stoichiometry',
      formula: 'C_n H_{2n+2} + \\left(\\frac{3n+1}{2}\\right) O_2 \\longrightarrow n CO_2 + (n+1) H_2 O',
      variables: 'n = Number of carbon atoms in the alkane.',
      whenToUse: 'Use to calculate oxygen required or CO₂ / H₂O produced during complete combustion.',
      note: 'For propane (n=3): C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O.'
    },
    {
      title: 'Structural Isomer Count Formula (n = 4 to 7)',
      formula: 'N_{\\text{isomers}} = 2^{(n-4)} + 1',
      variables: 'n = Number of carbon atoms (4 ≤ n ≤ 7).',
      whenToUse: 'Quick calculation of possible alkane chain isomers for NEET multiple choice questions.',
      note: 'C₄ = 2; C₅ = 3; C₆ = 5; C₇ = 9.'
    },
    {
      title: 'Free Radical Halogenation Product Yield Formula',
      formula: '\\% \\text{ Yield} = \\frac{N_H \\times R_H}{\\sum (N_H \\times R_H)} \\times 100\\%',
      variables: 'N_H = Number of equivalent H atoms of a given type; R_H = Relative reactivity rate of that type of H.',
      whenToUse: 'Predicting major vs minor products in photochemical chlorination or bromination.',
      note: 'Chlorination rates (298 K): 3°:2°:1° = 5 : 3.8 : 1. Bromination rates (400 K): 3°:2°:1° = 1600 : 82 : 1.'
    }
  ],

  neetImportantPoints: [
    '🎯 Ethane Conformation Stability: Staggered > Eclipsed. Torsional strain in eclipsed conformer is caused by electron-electron repulsion between C-H bonds.',
    '🎯 Wurtz Reaction: Gives excellent yield for SYMMETRICAL alkanes with EVEN carbon numbers. Methane CANNOT be prepared. Unsymmetrical alkanes give a 3-component mixture.',
    '🎯 Decarboxylation: R-COONa + NaOH/CaO → R-H + Na₂CO₃. Resulting alkane has ONE LESS carbon atom than the parent carboxylate salt.',
    '🎯 Kolbe Electrolysis: Anode yields R-R and CO₂ gas; Cathode yields H₂ gas and OH⁻ (solution becomes basic, pH > 7). Methane CANNOT be prepared.',
    '🎯 Boiling Point: Decreases with increased branching due to spherical compaction and reduced van der Waals contact area (n-pentane > isopentane > neopentane).',
    '🎯 Free Radical Chlorination of Isobutane: Yields 64% 1-chloro-2-methylpropane (1° major statistical product) and 36% 2-chloro-2-methylpropane (3° minor).',
    '🎯 Free Radical Bromination of Isobutane: Yields >99% 2-bromo-2-methylpropane (3° major product due to 1600:1 selectivity).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming 2-chloro-2-methylpropane is the major product in chlorination of isobutane.',
      correctFact: 'In chlorination at 298 K, 1-chloro-2-methylpropane is the MAJOR product (64%) because there are 9 primary H\'s (9 × 1 = 9) compared to only 1 tertiary H (1 × 5 = 5).',
      whyItMattersForNEET: 'Frequently tested in NEET to trick students who memorize "3° radical is most stable" without calculating statistical product yield.'
    },
    {
      commonConfusion: 'Believing methane can be prepared by Wurtz reaction or Kolbe electrolysis.',
      correctFact: 'Methane (CH₄) contains only 1 carbon atom and CANNOT be prepared by Wurtz reaction or Kolbe electrolysis, as both require coupling of at least two alkyl radicals (R-R, minimum 2 carbons).',
      whyItMattersForNEET: 'A classic NEET elimination option question.'
    },
    {
      commonConfusion: 'Confusing the electrode products in Kolbe electrolysis.',
      correctFact: 'Alkane (R-R) and CO₂ gas are evolved at the ANODE (+). Hydrogen gas (H₂) is evolved at the CATHODE (-), and the solution becomes ALKALINE (pH increases).',
      whyItMattersForNEET: 'Direct NCERT factual question tested in AIPMT/NEET.'
    },
    {
      commonConfusion: 'Naming a compound as "2-ethylpentane".',
      correctFact: 'An ethyl group at position 2 extends the main carbon chain by 1 carbon atom. The correct IUPAC name is 3-methylhexane.',
      whyItMattersForNEET: 'A standard IUPAC trap tested in NEET Chemistry paper.'
    }
  ],

  quickRevision: [
    '• Alkanes (CₙH₂ₙ₊₂): Saturated hydrocarbons, sp³ hybridized, 109.5° tetrahedral angles.',
    '• Ethane Conformations: Staggered (θ = 60°, minimum strain, most stable) vs Eclipsed (θ = 0°, maximum strain). Energy barrier = 12.5 kJ/mol.',
    '• Isomers: C₄H₁₀ (2), C₅H₁₂ (3), C₆H₁₄ (5), C₇H₁₆ (9). Formula: 2^(n-4) + 1 for n=4-7.',
    '• Wurtz Reaction: 2 R-X + 2 Na (dry ether) → R-R + 2 NaX. Best for symmetrical even-carbon alkanes. Methane cannot be prepared.',
    '• Soda-Lime Decarboxylation: R-COONa + NaOH/CaO → R-H + Na₂CO₃ (Chain shortening by 1 C atom).',
    '• Kolbe Electrolysis: Anode → R-R + CO₂ ; Cathode → H₂ + NaOH (pH > 7).',
    '• Boiling Point: Decreases with branching: n-pentane (309 K) > isopentane (301 K) > neopentane (282.5 K).',
    '• Halogenation Mechanism: Initiation (Cl-Cl → 2 Cl•), Propagation (CH₄ + Cl• → •CH₃ + HCl; •CH₃ + Cl₂ → CH₃Cl + Cl•), Termination.',
    '• Halogen Reactivity: F₂ > Cl₂ > Br₂ > I₂. Radical Stability: 3° > 2° > 1° > •CH₃.',
    '• Chlorination Rates (298 K): 3°:2°:1° = 5:3.8:1. Bromination Rates (400 K): 3°:2°:1° = 1600:82:1.',
    '• Aromatization: n-Hexane ──(Cr₂O₃/Al₂O₃, 773 K)──► Benzene + 4 H₂.'
  ],

  practiceQuestions: [
  {
    "id": "practice-alkane-1",
    "question": "Which of the following alkanes upon photochemical chlorination produces ONLY ONE monochloro derivative?",
    "options": [
      "2-Methylbutane",
      "2,2-Dimethylpropane",
      "n-Pentane",
      "2-Methylpropane"
    ],
    "correctAnswer": 1,
    "explanation": "In 2,2-dimethylpropane (neopentane), C(CH₃)₄, all 12 hydrogen atoms are attached to four equivalent methyl groups bonded to a central quaternary carbon. Replacing any hydrogen atom yields the exact same product: 1-chloro-2,2-dimethylpropane.",
    "difficulty": "Easy",
    "topicId": "chem-alkanes",
    "conceptTested": "Equivalent Hydrogens & Monochlorination"
  },
  {
    "id": "practice-alkane-2",
    "question": "An alkyl halide (A) reacts with sodium metal in dry ether to form 2,3-dimethylbutane. The alkyl halide (A) is:",
    "options": [
      "1-Chloropropane",
      "2-Chloropropane",
      "1-Chlorobutane",
      "2-Chlorobutane"
    ],
    "correctAnswer": 1,
    "explanation": "2,3-dimethylbutane is (CH₃)₂CH-CH(CH₃)₂. It is a symmetrical alkane formed by coupling two isopropyl radicals, (CH₃)₂CH•. Therefore, the starting alkyl halide must be 2-chloropropane (isopropyl chloride): 2 (CH₃)₂CH-Cl + 2 Na → (CH₃)₂CH-CH(CH₃)₂ + 2 NaCl.",
    "difficulty": "Medium",
    "topicId": "chem-alkanes",
    "conceptTested": "Wurtz Reaction Retrosynthesis"
  },
  {
    "id": "practice-alkane-3",
    "question": "During the Kolbe electrolysis of sodium acetate solution, what are the products obtained at the Anode and Cathode respectively?",
    "options": [
      "Anode: H₂ gas ; Cathode: Ethane + CO₂",
      "Anode: Ethane + CO₂ ; Cathode: H₂ gas",
      "Anode: Methane + CO₂ ; Cathode: H₂ gas",
      "Anode: Ethane ; Cathode: CO₂ + H₂"
    ],
    "correctAnswer": 1,
    "explanation": "At the Anode (+), acetate ions undergo oxidation: 2 CH₃COO⁻ → CH₃-CH₃ (Ethane) + 2 CO₂ + 2e⁻. At the Cathode (-), water undergoes reduction: 2 H₂O + 2e⁻ → H₂ + 2 OH⁻. Thus, Ethane and CO₂ evolve at the Anode, while H₂ evolves at the Cathode.",
    "difficulty": "Medium",
    "topicId": "chem-alkanes",
    "conceptTested": "Kolbe Electrolysis Electrode Reactions"
  },
  {
    "id": "prac-chemalkanes-4",
    "question": "Regarding Alkanes & Their Reactions, which of the following statements correctly resolves a common misconception about \"Assuming 2-chloro-2-methylpropane is the major product in chlorination of isobutane.\"?",
    "options": [
      "In chlorination at 298 K, 1-chloro-2-methylpropane is the MAJOR product (64%) because there are 9 primary H's (9 × 1 = 9) compared to only 1 tertiary H (1 × 5 = 5).",
      "Incorrect assumption: Assuming 2-chloro-2-methylpropane is the major product in chlorination of isobutane.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "In chlorination at 298 K, 1-chloro-2-methylpropane is the MAJOR product (64%) because there are 9 primary H's (9 × 1 = 9) compared to only 1 tertiary H (1 × 5 = 5).. Frequently tested in NEET to trick students who memorize \"3° radical is most stable\" without calculating statistical product yield.",
    "difficulty": "Medium",
    "conceptTested": "Alkanes & Their Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chemalkanes-5",
    "question": "Regarding Alkanes & Their Reactions, which of the following statements correctly resolves a common misconception about \"Believing methane can be prepared by Wurtz reaction or Kolbe electrolysis.\"?",
    "options": [
      "Methane (CH₄) contains only 1 carbon atom and CANNOT be prepared by Wurtz reaction or Kolbe electrolysis, as both require coupling of at least two alkyl radicals (R-R, minimum 2 carbons).",
      "Incorrect assumption: Believing methane can be prepared by Wurtz reaction or Kolbe electrolysis.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Methane (CH₄) contains only 1 carbon atom and CANNOT be prepared by Wurtz reaction or Kolbe electrolysis, as both require coupling of at least two alkyl radicals (R-R, minimum 2 carbons).. A classic NEET elimination option question.",
    "difficulty": "Medium",
    "conceptTested": "Alkanes & Their Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chemalkanes-6",
    "question": "Regarding Alkanes & Their Reactions, which of the following statements correctly resolves a common misconception about \"Confusing the electrode products in Kolbe electrolysis.\"?",
    "options": [
      "Alkane (R-R) and CO₂ gas are evolved at the ANODE (+). Hydrogen gas (H₂) is evolved at the CATHODE (-), and the solution becomes ALKALINE (pH increases).",
      "Incorrect assumption: Confusing the electrode products in Kolbe electrolysis.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Alkane (R-R) and CO₂ gas are evolved at the ANODE (+). Hydrogen gas (H₂) is evolved at the CATHODE (-), and the solution becomes ALKALINE (pH increases).. Direct NCERT factual question tested in AIPMT/NEET.",
    "difficulty": "Medium",
    "conceptTested": "Alkanes & Their Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chemalkanes-7",
    "question": "Regarding Alkanes & Their Reactions, which of the following statements correctly resolves a common misconception about \"Naming a compound as \"2-ethylpentane\".\"?",
    "options": [
      "An ethyl group at position 2 extends the main carbon chain by 1 carbon atom. The correct IUPAC name is 3-methylhexane.",
      "Incorrect assumption: Naming a compound as \"2-ethylpentane\".",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "An ethyl group at position 2 extends the main carbon chain by 1 carbon atom. The correct IUPAC name is 3-methylhexane.. A standard IUPAC trap tested in NEET Chemistry paper.",
    "difficulty": "Medium",
    "conceptTested": "Alkanes & Their Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chemalkanes-8",
    "question": "In the study of Alkanes & Their Reactions, what is the exact definition and significance of \"Alkane / Paraffin\"?",
    "options": [
      "A saturated hydrocarbon containing only C-C and C-H single σ-bonds with sp³ hybridized carbons.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A saturated hydrocarbon containing only C-C and C-H single σ-bonds with sp³ hybridized carbons.. Simplest member is methane (CH₄). Alkane carbons are sp³ hybridized with 109.5° tetrahedral angles.",
    "difficulty": "Easy",
    "conceptTested": "Alkane / Paraffin definition"
  },
  {
    "id": "prac-chemalkanes-9",
    "question": "In the study of Alkanes & Their Reactions, what is the exact definition and significance of \"Homologous Series\"?",
    "options": [
      "A family of organic compounds having the same functional group and general formula, where successive members differ by a -CH₂- unit (molar mass difference of 14 u).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A family of organic compounds having the same functional group and general formula, where successive members differ by a -CH₂- unit (molar mass difference of 14 u).. Members share similar chemical properties but show gradual gradation in physical properties (boiling point, density).",
    "difficulty": "Easy",
    "conceptTested": "Homologous Series definition"
  },
  {
    "id": "prac-chemalkanes-10",
    "question": "In the study of Alkanes & Their Reactions, what is the exact definition and significance of \"Chain Isomerism\"?",
    "options": [
      "A form of structural isomerism where compounds with identical molecular formulas differ in the arrangement of the carbon skeleton (straight vs branched chains).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A form of structural isomerism where compounds with identical molecular formulas differ in the arrangement of the carbon skeleton (straight vs branched chains).. Methane, ethane, and propane have NO isomers. Butane has 2, pentane has 3, hexane has 5, and heptane has 9 chain isomers.",
    "difficulty": "Easy",
    "conceptTested": "Chain Isomerism definition"
  }
],
  pyqs: [
    {
      id: 'pyq-alkanes-1',
      year: 2008,
      exam: 'AIPMT 2008',
      question: 'An alkane C₆H₁₄ gives two monochloro derivatives on photochemical chlorination. The IUPAC name of the alkane is:',
      options: ['2,2-Dimethylbutane', '2,3-Dimethylbutane', '3-Methylpentane', '2-Methylpentane'],
      correctAnswer: 1,
      explanation: 'In 2,3-dimethylbutane, (CH₃)₂CH-CH(CH₃)₂, there are only two chemically non-equivalent types of hydrogen atoms: 12 equivalent primary hydrogens (4 × -CH₃) and 2 equivalent tertiary hydrogens (2 × >CH-). Replacing any 1° H gives 1-chloro-2,3-dimethylbutane and replacing any 3° H gives 2-chloro-2,3-dimethylbutane. Thus, it yields exactly two monochloro isomers.',
      conceptTested: 'Monochlorination Isomers & Structure',
      difficulty: 'Medium',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkanes'
    },
    {
      id: 'pyq-alkanes-2',
      year: 2022,
      exam: 'NEET UG 2022',
      question: 'The correct increasing order of boiling points of the given isomeric alkanes is:',
      options: [
        'Neopentane < Isopentane < n-Pentane',
        'n-Pentane < Isopentane < Neopentane',
        'Isopentane < Neopentane < n-Pentane',
        'n-Pentane < Neopentane < Isopentane'
      ],
      correctAnswer: 0,
      explanation: 'For isomeric alkanes, boiling point decreases with increasing branching because branching makes the molecule more spherical, reducing its surface area and van der Waals forces. Neopentane (2,2-dimethylpropane, b.p. 282.5 K) is spherical with lowest b.p., Isopentane (2-methylbutane, b.p. 301 K) is moderately branched, and n-pentane (b.p. 309.1 K) is straight-chain with highest b.p.',
      conceptTested: 'Boiling Point Trends & Branching',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkanes'
    },
    {
      id: 'pyq-alkanes-3',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'Which of the following alkanes CANNOT be prepared in good yield by Wurtz reaction?',
      options: ['n-Hexane', '2,3-Dimethylbutane', 'n-Heptane', 'n-Butane'],
      correctAnswer: 2,
      explanation: 'Wurtz reaction joins two identical alkyl halides (2 R-X + 2 Na → R-R) to yield symmetrical alkanes with an EVEN number of carbon atoms in high yield. For unsymmetrical alkanes with an ODD number of carbons like n-heptane (7 C), a mixture of two different alkyl halides (R-X + R\'-X) must be used, which produces three alkanes (R-R, R-R\', R\'-R\'). These have close boiling points and are difficult to separate.',
      conceptTested: 'Wurtz Reaction Scope & Limitations',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkanes'
    },
    {
      id: 'pyq-alkanes-4',
      year: 2021,
      exam: 'NEET UG 2021',
      question: 'The dihedral angle of the least stable conformer of ethane is:',
      options: ['60°', '120°', '0°', '180°'],
      correctAnswer: 2,
      explanation: 'The least stable conformer of ethane is the Eclipsed conformation, where C-H bonds on adjacent carbon atoms are directly aligned with each other, resulting in maximum torsional strain and repulsion. In the eclipsed conformation, the dihedral angle between adjacent C-H bonds is 0°. The Staggered conformation has dihedral angle 60° and is most stable.',
      conceptTested: 'Ethane Conformations & Dihedral Angle',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkanes'
    },
    {
      id: 'pyq-alkanes-5',
      year: 2004,
      exam: 'AIPMT 2004',
      question: 'A hydrocarbon (A) reacts with bromine by substitution to form an alkyl bromide which by Wurtz reaction is converted to a gaseous hydrocarbon containing less than four carbon atoms. Hydrocarbon (A) is:',
      options: ['CH₄', 'CH₃-CH₃', 'CH₂=CH₂', 'CH≡CH'],
      correctAnswer: 0,
      explanation: 'Methane (CH₄) undergoes substitution with Br₂/hν to form methyl bromide (CH₃Br). Two molecules of CH₃Br react with Na in dry ether via Wurtz reaction to yield ethane (C₂H₆), which is a gaseous alkane containing 2 carbon atoms (less than 4 carbon atoms).',
      conceptTested: 'Halogenation & Wurtz Reaction Multi-step',
      difficulty: 'Medium',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkanes'
    },
    {
      id: 'pyq-alkanes-6',
      year: 1999,
      exam: 'AIPMT 1999',
      question: 'The correct relative order of ease of abstraction of hydrogen atoms in free-radical halogenation of alkanes is:',
      options: [
        '1° H > 2° H > 3° H',
        '3° H > 2° H > 1° H',
        '2° H > 3° H > 1° H',
        '3° H > 1° H > 2° H'
      ],
      correctAnswer: 1,
      explanation: 'Hydrogen abstraction from an alkane generates a carbon free radical intermediate. The rate of hydrogen abstraction directly depends on the stability of the free radical formed. Tertiary (3°) free radicals are most stable due to 9 hyperconjugative α-hydrogens, followed by 2° (6 α-H) and 1° (3 α-H). Thus, the ease of abstraction is 3° H > 2° H > 1° H.',
      conceptTested: 'Free Radical Stability & Reactivity',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkanes'
    },
    {
      id: 'pyq-alkanes-7',
      year: 2003,
      exam: 'AIPMT 2003',
      question: 'Which of the following compounds produces ONLY ONE monochloro derivative upon photochemical chlorination?',
      options: ['Neopentane', 'Isopentane', 'n-Pentane', '2-Methylbutane'],
      correctAnswer: 0,
      explanation: 'Neopentane, 2,2-dimethylpropane (C(CH₃)₄), possesses 12 hydrogen atoms that are all chemically equivalent because all four methyl groups are attached to a central quaternary carbon. Substitution of any hydrogen by chlorine yields the exact same product: 1-chloro-2,2-dimethylpropane.',
      conceptTested: 'Equivalent Hydrogens & Monochlorination',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkanes'
    },
    {
      id: 'pyq-alkanes-8',
      year: 2012,
      exam: 'AIPMT 2012',
      question: 'Sodium salt of which carboxylic acid is required for the preparation of propane by soda-lime decarboxylation?',
      options: ['Ethanoic acid', 'Propanoic acid', 'Butanoic acid', 'Pentanoic acid'],
      correctAnswer: 2,
      explanation: 'Soda-lime decarboxylation (R-COONa + NaOH ──[CaO, Δ]──► R-H + Na₂CO₃) removes the carboxyl group as sodium carbonate. The alkane formed (R-H) contains ONE LESS carbon atom than the starting sodium carboxylate salt (R-COONa). To prepare propane (C₃H₈, 3 carbons), sodium salt of butanoic acid (CH₃CH₂CH₂COONa, 4 carbons) is heated with soda-lime.',
      conceptTested: 'Soda-Lime Decarboxylation Chain Degradation',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkanes'
    },
    {
      id: 'pyq-alkanes-9',
      year: 2004,
      exam: 'AIPMT 2004',
      question: 'In Kolbe\'s electrolytic synthesis of ethane, which gases are evolved at the Anode?',
      options: ['CO₂ and H₂', 'CO₂ and C₂H₆', 'H₂ and C₂H₆', 'Only CO₂'],
      correctAnswer: 1,
      explanation: 'During Kolbe electrolysis of sodium acetate (CH₃COONa), acetate ions (CH₃COO⁻) migrate to the Anode (+), lose an electron to form acetate free radicals (CH₃COO•), which decarboxylate to release CO₂ gas and methyl radicals (•CH₃). Coupling of two methyl radicals forms ethane (C₂H₆). Therefore, both CO₂ and C₂H₆ gases evolve at the Anode. (H₂ gas evolves at the Cathode).',
      conceptTested: 'Kolbe Electrolysis Anode Products',
      difficulty: 'Medium',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkanes'
    },
    {
      id: 'pyq-alkanes-10',
      year: 2012,
      exam: 'AIPMT 2012',
      question: 'Which alkane upon halogenation gives a mixture of 1-chloro-2-methylpropane and 2-chloro-2-methylpropane?',
      options: ['n-Butane', 'Isobutane', 'Neopentane', 'Isopentane'],
      correctAnswer: 1,
      explanation: 'Isobutane, (CH₃)₃CH, has two non-equivalent types of hydrogen atoms: 9 primary hydrogens on three -CH₃ groups and 1 tertiary hydrogen on the >CH- group. Monochlorination at 1° H gives 1-chloro-2-methylpropane and at 3° H gives 2-chloro-2-methylpropane.',
      conceptTested: 'Free Radical Monochlorination Products',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkanes'
    }
  ],
  neetMarksPotential: {
  "topicName": "Alkanes & Their Reactions",
  "confidenceLabel": "HIGH",
  "confidenceText": "High Confidence: Verified against 8 official NEET/AIPMT paper appearances (10 direct questions).",
  "totalAnalyzedPapers": 15,
  "papersWithDirectPyqs": 8,
  "totalDirectPyqs": 10,
  "totalHistoricalMarks": 40,
  "averageDirectPyqsPerPaper": 0.67,
  "maxDirectPyqsInSinglePaper": 2,
  "minDirectPyqsInSinglePaper": 1,
  "minDirectMarks": 4,
  "maxDirectMarks": 8,
  "avgDirectMarksPerPaper": 2.67,
  "typicalContributionMarks": 5,
  "historicalMarksRangeText": "4 to 8 marks per paper (tested in 8 of 15 analyzed papers)",
  "whatThisMeansForYou": "Based on 10 verified direct questions across 8 unique papers, mastering Alkanes & Their Reactions gives you a historical direct score potential of ~5 marks when present.",
  "yearWiseBreakdown": [
    {
      "id": "pyq-alkanes-2",
      "year": 2022,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Boiling Point Trends & Branching",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-alkanes-4",
      "year": 2021,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Ethane Conformations & Dihedral Angle",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-alkanes-3",
      "year": 2020,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Wurtz Reaction Scope & Limitations",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-alkanes-8",
      "year": 2012,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Soda-Lime Decarboxylation Chain Degradation",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    },
    {
      "id": "pyq-alkanes-10",
      "year": 2012,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Free Radical Monochlorination Products",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    },
    {
      "id": "pyq-alkanes-1",
      "year": 2008,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Monochlorination Isomers & Structure",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    },
    {
      "id": "pyq-alkanes-5",
      "year": 2004,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Halogenation & Wurtz Reaction Multi-step",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    },
    {
      "id": "pyq-alkanes-9",
      "year": 2004,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Kolbe Electrolysis Anode Products",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    },
    {
      "id": "pyq-alkanes-7",
      "year": 2003,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Equivalent Hydrogens & Monochlorination",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    },
    {
      "id": "pyq-alkanes-6",
      "year": 1999,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Free Radical Stability & Reactivity",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    }
  ],
  "overlapPyqs": [],
  "sourceInfo": {
    "dataSource": "SATHEE (IIT Kanpur / Ministry of Education) & Official NEET Archives",
    "analysisPeriod": "2004 – 2024 (15 Verified Papers)",
    "directPyqsAnalyzedCount": 10,
    "classificationMethod": "Strict topic-level classification; chapter-level weightage was excluded.",
    "disclaimer": "Historical frequency is a record of past papers and not a guarantee of future NEET paper contents."
  }
}
};