import { DetailedTopicContent } from '../../types/neet';

export const chemClassificationIupacDetails: DetailedTopicContent = {
  topicId: 'chem-classification-iupac',
  topicName: 'Classification & IUPAC Nomenclature',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Organic Chemistry (Class 11)',
  chapter: 'Organic Chemistry: Some Basic Principles & Techniques',

  whatIsThisTopic:
    'Organic chemistry encompasses millions of carbon-containing compounds. To systematically study, categorize, and communicate about these molecules, chemists classify them based on carbon skeleton structures (acyclic vs cyclic, homocyclic vs heterocyclic, saturated vs unsaturated) and functional groups. IUPAC (International Union of Pure and Applied Chemistry) nomenclature provides an unambiguous, systematic set of international rules that allows every organic molecule to be assigned a unique name—and conversely, allows any chemist to reconstruct the exact 2D/3D chemical structure directly from its name alone.',

  basicIdea: [
    '1. Structural Classification Hierarchy: Organic compounds are divided into Open-Chain (Acyclic / Aliphatic) and Closed-Chain (Cyclic). Cyclic molecules are further classified into Homocyclic (Carbocyclic: Alicyclic vs Aromatic) and Heterocyclic (ring framework contains N, O, or S atoms). Degree of unsaturation distinguishes single-bonded (Saturated) from double/triple-bonded (Unsaturated) systems.',
    '2. Functional Groups & Homologous Series: A functional group is an atom or group of atoms bonded in a specific structural arrangement that acts as the primary reactive site of the molecule. A homologous series is a family of organic compounds sharing the same functional group and general formula, where consecutive members differ structurally by a -CH₂- unit (14 u molar mass shift).',
    '3. IUPAC Systematic Naming Engine: IUPAC names follow a strict formulaic sequence: Secondary Prefix (Substituents) + Primary Prefix (cyclo/bicyclo) + Word Root (Parent Chain Carbon Count) + Primary Suffix (Degree of Saturation: -ane, -ene, -yne) + Secondary Suffix (Principal Characteristic Functional Group). Numbering gives lowest locants in strict priority order: Principal Functional Group > Multiple Bonds (>C=C< / -C≡C-) > Substituents.'
  ],

  importantTerms: [
    {
      term: 'Acyclic / Aliphatic Compounds',
      definition: 'Open-chain organic molecules with straight or branched carbon skeletons (non-cyclic).',
      neetNote: 'Examples include Propane, Isobutane, and Pent-2-ene. They do not contain any rings.'
    },
    {
      term: 'Homocyclic (Carbocyclic) Compounds',
      definition: 'Cyclic compounds whose ring framework consists entirely of carbon atoms.',
      neetNote: 'Subdivided into Alicyclic (Cyclohexane) and Aromatic (Benzene, Naphthalene).'
    },
    {
      term: 'Heterocyclic Compounds',
      definition: 'Cyclic compounds containing one or more non-carbon heteroatoms (such as Nitrogen, Oxygen, or Sulphur) within the ring framework.',
      neetNote: 'High-yield examples in NEET: Furan (O), Thiophene (S), Pyridine (N), and Tetrahydrofuran (THF).'
    },
    {
      term: 'Functional Group',
      definition: 'An atom or specific group of bonded atoms attached to a carbon skeleton that dictates the chemical reactivity and characteristic properties of the compound.',
      neetNote: 'Examples: -COOH (Carboxylic acid), -CHO (Aldehyde), -OH (Alcohol), -NH₂ (Amine).'
    },
    {
      term: 'Homologous Series',
      definition: 'A group of structurally related organic compounds possessing the same functional group, same general formula, and similar chemical properties, differing from adjacent members by a -CH₂- group.',
      neetNote: 'Successive members differ in molecular mass by exactly 14 u (12 u for C + 2 u for H).'
    },
    {
      term: 'Locant',
      definition: 'A numerical digit (e.g. 1, 2, 3) in an IUPAC name indicating the position of a substituent, multiple bond, or principal functional group on the parent carbon chain.',
      neetNote: 'Lowest locant principle requires assigning the smallest numerical set to high-priority sites.'
    },
    {
      term: 'Principal Functional Group',
      definition: 'In polyfunctional molecules containing multiple functional groups, the single highest-priority group selected according to IUPAC rules to define the secondary suffix ending.',
      neetNote: 'All lower priority functional groups are demoted to substituents and named as secondary prefixes (e.g., -OH becomes hydroxy-).'
    },
    {
      term: 'Parent Carbon Chain',
      definition: 'The longest continuous carbon chain chosen according to IUPAC hierarchy that contains the principal functional group and maximum number of multiple bonds.',
      neetNote: 'The parent chain is NOT always the longest continuous carbon chain in the molecule if a shorter chain contains the principal functional group or double/triple bonds.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Organic Compound Classification (Visual Classification Tree)',
      paragraphs: [
        'Organic compounds are broadly categorized into two major classes based on carbon skeleton structure: Acyclic (Open-Chain or Aliphatic) and Cyclic (Closed-Chain or Ring). Acyclic compounds can be straight-chain (e.g., n-butane) or branched-chain (e.g., isobutane).',
        'Cyclic compounds are categorized into Homocyclic (Carbocyclic) where the ring contains only carbon atoms, and Heterocyclic where the ring framework incorporates one or more heteroatoms (Oxygen, Nitrogen, Sulphur). Both Homocyclic and Heterocyclic families are further split into Alicyclic (aliphatic cyclic, resembling open-chain behavior) and Aromatic (benzenoid or non-benzenoid Huckel aromatic systems).',
        'In addition, compounds are classified by saturation: Saturated compounds contain only C-C single bonds (Alkanes, Cycloalkanes), while Unsaturated compounds contain one or more C=C double or C≡C triple bonds.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 480" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-2 sm:p-4">
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">CLUSTERING & CLASSIFICATION TREE OF ORGANIC COMPOUNDS</text>

  <!-- Root Node -->
  <rect x="300" y="50" width="200" height="36" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="400" y="73" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">ORGANIC COMPOUNDS</text>

  <!-- Main Branches -->
  <path d="M 400 86 L 400 105 L 200 105 L 200 125" stroke="#94a3b8" stroke-width="2" fill="none"/>
  <path d="M 400 105 L 600 105 L 600 125" stroke="#94a3b8" stroke-width="2" fill="none"/>

  <!-- Level 1: Acyclic & Cyclic -->
  <rect x="100" y="125" width="200" height="36" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="200" y="148" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="bold">ACYCLIC / OPEN-CHAIN</text>

  <rect x="500" y="125" width="200" height="36" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="600" y="148" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold">CYCLIC / CLOSED-RING</text>

  <!-- Sub-branches for Acyclic -->
  <path d="M 200 161 L 200 180 L 110 180 L 110 200" stroke="#4ade80" stroke-width="1.5" fill="none"/>
  <path d="M 200 180 L 290 180 L 290 200" stroke="#4ade80" stroke-width="1.5" fill="none"/>

  <rect x="35" y="200" width="150" height="42" rx="6" fill="#1e293b" stroke="#4ade80" stroke-width="1"/>
  <text x="110" y="218" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">Straight Chain</text>
  <text x="110" y="233" text-anchor="middle" fill="#94a3b8" font-size="10">CH₃-CH₂-CH₂-CH₃</text>

  <rect x="215" y="200" width="150" height="42" rx="6" fill="#1e293b" stroke="#4ade80" stroke-width="1"/>
  <text x="290" y="218" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">Branched Chain</text>
  <text x="290" y="233" text-anchor="middle" fill="#94a3b8" font-size="10">CH₃-CH(CH₃)-CH₃</text>

  <!-- Sub-branches for Cyclic -->
  <path d="M 600 161 L 600 180 L 480 180 L 480 200" stroke="#c084fc" stroke-width="1.5" fill="none"/>
  <path d="M 600 180 L 710 180 L 710 200" stroke="#c084fc" stroke-width="1.5" fill="none"/>

  <rect x="390" y="200" width="180" height="36" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="480" y="222" text-anchor="middle" fill="#60a5fa" font-size="11" font-weight="bold">HOMOCYCLIC (Carbocyclic)</text>

  <rect x="620" y="200" width="180" height="36" rx="6" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="710" y="222" text-anchor="middle" fill="#fb7185" font-size="11" font-weight="bold">HETEROCYCLIC (N, O, S)</text>

  <!-- Homocyclic sub-branches -->
  <path d="M 480 236 L 480 255 L 420 255 L 420 270" stroke="#60a5fa" stroke-width="1.5" fill="none"/>
  <path d="M 480 255 L 540 255 L 540 270" stroke="#60a5fa" stroke-width="1.5" fill="none"/>

  <rect x="350" y="270" width="135" height="42" rx="6" fill="#0f172a" stroke="#60a5fa" stroke-width="1"/>
  <text x="417" y="288" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Alicyclic</text>
  <text x="417" y="302" text-anchor="middle" fill="#94a3b8" font-size="9">Cyclohexane (C₆H₁₂)</text>

  <rect x="495" y="270" width="135" height="42" rx="6" fill="#0f172a" stroke="#60a5fa" stroke-width="1"/>
  <text x="562" y="288" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Aromatic</text>
  <text x="562" y="302" text-anchor="middle" fill="#94a3b8" font-size="9">Benzene (C₆H₆)</text>

  <!-- Heterocyclic sub-branches -->
  <path d="M 710 236 L 710 255 L 655 255 L 655 270" stroke="#fb7185" stroke-width="1.5" fill="none"/>
  <path d="M 710 255 L 765 255 L 765 270" stroke="#fb7185" stroke-width="1.5" fill="none"/>

  <rect x="600" y="270" width="110" height="42" rx="6" fill="#0f172a" stroke="#fb7185" stroke-width="1"/>
  <text x="655" y="288" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Alicyclic</text>
  <text x="655" y="302" text-anchor="middle" fill="#94a3b8" font-size="9">THF (Tetrahydrofuran)</text>

  <rect x="715" y="270" width="100" height="42" rx="6" fill="#0f172a" stroke="#fb7185" stroke-width="1"/>
  <text x="765" y="288" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Aromatic</text>
  <text x="765" y="302" text-anchor="middle" fill="#94a3b8" font-size="9">Furan, Pyridine</text>

  <!-- Saturation Banner -->
  <rect x="50" y="340" width="700" height="110" rx="10" fill="#0284c7" fill-opacity="0.1" stroke="#0284c7" stroke-width="1.5"/>
  <text x="400" y="365" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">SATURATION vs UNSATURATION CLASSIFICATION</text>

  <rect x="80" y="380" width="300" height="55" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1"/>
  <text x="230" y="400" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">SATURATED ORGANIC COMPOUNDS</text>
  <text x="230" y="418" text-anchor="middle" fill="#cbd5e1" font-size="10">Contains ONLY C-C single bonds (Alkanes, Cycloalkanes)</text>

  <rect x="420" y="380" width="300" height="55" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1"/>
  <text x="570" y="400" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">UNSATURATED ORGANIC COMPOUNDS</text>
  <text x="570" y="418" text-anchor="middle" fill="#cbd5e1" font-size="10">Contains one or more C=C double or C≡C triple bonds</text>
</svg>`,
        caption: 'Master Classification Tree: Organic compounds are first split into Acyclic (open-chain) and Cyclic (ring) systems. Cyclic compounds are subdivided into Homocyclic (all-carbon rings like Benzene & Cyclohexane) and Heterocyclic (ring incorporates O, N, S like Furan & Pyridine). Both categories contain Saturated (single bonds only) and Unsaturated (double/triple bonds) variants.',
        guide: 'Remember for NEET: Furan, Thiophene, Pyridine, and Pyrrole are Aromatic Heterocyclic compounds; Tetrahydrofuran (THF) and Piperidine are Alicyclic Heterocyclic compounds.'
      },
      importantPoints: [
        'Acyclic compounds are also referred to as Aliphatic compounds.',
        'Homocyclic ring frameworks consist exclusively of Carbon atoms.',
        'Heterocyclic compounds contain at least one heteroatom (N, O, S) replacing a ring carbon.',
        'Saturated compounds contain only C-C single bonds, whereas Unsaturated compounds contain C=C double or C≡C triple bonds.'
      ]
    },
    {
      heading: '2. Functional Groups Reference Guide',
      paragraphs: [
        'A functional group is an atom or group of atoms joined in a specific arrangement that imparts characteristic physical and chemical properties to an organic molecule, regardless of the size or complexity of the rest of the carbon framework.',
        'When naming organic molecules with IUPAC nomenclature, functional groups determine either the secondary suffix (if principal functional group) or secondary prefix (if substituent or lower-priority functional group).',
        'Below is the comprehensive NEET reference table for all major organic functional groups, detailing their structural representations, prefixes, suffixes, and worked IUPAC examples.'
      ],
      visual: {
        type: 'table',
        tableData: {
          headers: ['Functional Group Class', 'General Structure', 'Prefix (Substituent)', 'Suffix (Principal FG)', 'NEET Example Formula', 'IUPAC Name'],
          rows: [
            ['Alkane', 'R-H', '-', '-ane', 'CH₃-CH₂-CH₃', 'Propane'],
            ['Alkene', 'R-CH=CH-R', '-', '-ene', 'CH₃-CH=CH₂', 'Propene'],
            ['Alkyne', 'R-C≡C-R', '-', '-yne', 'CH₃-C≡CH', 'Propyne'],
            ['Halogen (Halo)', 'R-X (X = F, Cl, Br, I)', 'halo- (fluoro, chloro, bromo, iodo)', 'None (Always Prefix)', 'CH₃-CH₂-Br', 'Bromoethane'],
            ['Alcohol', 'R-OH', 'hydroxy-', '-ol', 'CH₃-CH₂-OH', 'Ethanol'],
            ['Ether', 'R-O-R\'', 'alkoxy-', 'None (Named as Alkoxyalkane)', 'CH₃-O-CH₂CH₃', 'Methoxyethane'],
            ['Aldehyde', 'R-CHO', 'formyl- / oxo-', '-al', 'CH₃-CH₂-CHO', 'Propanal'],
            ['Ketone', 'R-CO-R\'', 'oxo-', '-one', 'CH₃-CO-CH₃', 'Propan-2-one'],
            ['Carboxylic Acid', 'R-COOH', 'carboxy-', '-oic acid (-carboxylic acid*)', 'CH₃-COOH', 'Ethanoic acid'],
            ['Ester', 'R-COO-R\'', 'alkoxycarbonyl-', '-oate', 'CH₃-COO-CH₂CH₃', 'Ethyl ethanoate'],
            ['Acid Chloride', 'R-COCl', 'chlorocarbonyl-', '-oyl chloride', 'CH₃-COCl', 'Ethanoyl chloride'],
            ['Amide', 'R-CONH₂', 'carbamoyl-', '-amide', 'CH₃-CONH₂', 'Ethanamide'],
            ['Amine', 'R-NH₂', 'amino-', '-amine', 'CH₃-CH₂-NH₂', 'Ethanamine'],
            ['Nitrile', 'R-CN', 'cyano-', '-nitrile', 'CH₃-CN', 'Ethanenitrile'],
            ['Nitro', 'R-NO₂', 'nitro-', 'None (Always Prefix)', 'CH₃-NO₂', 'Nitromethane'],
            ['Thiol', 'R-SH', 'mercapto-', '-thiol', 'CH₃-SH', 'Methanethiol']
          ]
        },
        caption: 'Comprehensive NEET Functional Group Chart: Halogens (-X), Nitro (-NO₂), and Alkoxy (-OR) groups are ALWAYS treated as secondary prefixes and NEVER as secondary suffixes.'
      },
      importantPoints: [
        'Halogens (-F, -Cl, -Br, -I), Nitro (-NO₂), and Alkoxy (-OR) groups are NEVER used as principal suffixes in IUPAC nomenclature.',
        'When -COOH carbon is excluded from the parent chain (e.g. attached directly to a ring or in tricarboxylic acids), the suffix becomes \'-carboxylic acid\'.',
        'When -CHO carbon is excluded from the parent chain, the suffix becomes \'-carbaldehyde\'.'
      ]
    },
    {
      heading: '3. Homologous Series & Molecular Progression',
      paragraphs: [
        'A homologous series is defined as a family of structurally related organic compounds characterized by: 1. Having the same functional group. 2. Having the same general molecular formula. 3. Having similar chemical properties. 4. Showing a gradual, predictable gradation in physical properties (boiling point, melting point, density, viscosity). 5. Consecutive adjacent members differing structurally by a -CH₂- (methylene) unit, which corresponds to a molecular mass difference of 14 u.',
        'For example, the Alkane homologous series follows the general formula C_n H_{2n+2} (Methane CH₄, Ethane C₂H₆, Propane C₃H₈, Butane C₄H₁₀). As the length of the carbon chain increases, van der Waals molecular attraction forces increase, leading to a steady, monotonic rise in boiling point.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 250" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-2 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">HOMOLOGOUS SERIES PROGRESSION (+CH₂ / +14 u Step)</text>

  <!-- Step 1: Methane -->
  <rect x="20" y="55" width="130" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="85" y="80" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Methane</text>
  <text x="85" y="105" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">CH₄</text>
  <text x="85" y="130" text-anchor="middle" fill="#94a3b8" font-size="11">n = 1</text>
  <text x="85" y="150" text-anchor="middle" fill="#cbd5e1" font-size="11">Mass: 16 u</text>
  <text x="85" y="185" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">b.p. -161.5 °C</text>

  <!-- Arrow +CH2 -->
  <path d="M 155 130 L 175 130" stroke="#22c55e" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="165" y="120" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">+CH₂</text>
  <text x="165" y="145" text-anchor="middle" fill="#4ade80" font-size="9">(+14 u)</text>

  <!-- Step 2: Ethane -->
  <rect x="180" y="55" width="130" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="245" y="80" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Ethane</text>
  <text x="245" y="105" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">C₂H₆</text>
  <text x="245" y="130" text-anchor="middle" fill="#94a3b8" font-size="11">n = 2</text>
  <text x="245" y="150" text-anchor="middle" fill="#cbd5e1" font-size="11">Mass: 30 u</text>
  <text x="245" y="185" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">b.p. -88.6 °C</text>

  <!-- Arrow +CH2 -->
  <path d="M 315 130 L 335 130" stroke="#22c55e" stroke-width="2"/>
  <text x="325" y="120" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">+CH₂</text>
  <text x="325" y="145" text-anchor="middle" fill="#4ade80" font-size="9">(+14 u)</text>

  <!-- Step 3: Propane -->
  <rect x="340" y="55" width="130" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="405" y="80" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Propane</text>
  <text x="405" y="105" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">C₃H₈</text>
  <text x="405" y="130" text-anchor="middle" fill="#94a3b8" font-size="11">n = 3</text>
  <text x="405" y="150" text-anchor="middle" fill="#cbd5e1" font-size="11">Mass: 44 u</text>
  <text x="405" y="185" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">b.p. -42.1 °C</text>

  <!-- Arrow +CH2 -->
  <path d="M 475 130 L 495 130" stroke="#22c55e" stroke-width="2"/>
  <text x="485" y="120" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">+CH₂</text>
  <text x="485" y="145" text-anchor="middle" fill="#4ade80" font-size="9">(+14 u)</text>

  <!-- Step 4: Butane -->
  <rect x="500" y="55" width="130" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="565" y="80" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">n-Butane</text>
  <text x="565" y="105" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">C₄H₁₀</text>
  <text x="565" y="130" text-anchor="middle" fill="#94a3b8" font-size="11">n = 4</text>
  <text x="565" y="150" text-anchor="middle" fill="#cbd5e1" font-size="11">Mass: 58 u</text>
  <text x="565" y="185" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">b.p. -0.5 °C</text>

  <!-- Arrow +CH2 -->
  <path d="M 635 130 L 655 130" stroke="#22c55e" stroke-width="2"/>
  <text x="645" y="120" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">+CH₂</text>
  <text x="645" y="145" text-anchor="middle" fill="#4ade80" font-size="9">(+14 u)</text>

  <!-- Step 5: Pentane -->
  <rect x="660" y="55" width="120" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="720" y="80" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">n-Pentane</text>
  <text x="720" y="105" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">C₅H₁₂</text>
  <text x="720" y="130" text-anchor="middle" fill="#94a3b8" font-size="11">n = 5</text>
  <text x="720" y="150" text-anchor="middle" fill="#cbd5e1" font-size="11">Mass: 72 u</text>
  <text x="720" y="185" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">b.p. +36.1 °C</text>
</svg>`,
        caption: 'Homologous Series Progression: Each successive member increases in mass by 14 u (-CH₂-). Higher molecular weight leads to increased surface area, greater London dispersion forces, and a steady increase in boiling point.'
      },
      importantPoints: [
        'All members of a homologous series share the same general formula (e.g. Alkanes C_n H_{2n+2}, Alkenes C_n H_{2n}, Alkanols C_n H_{2n+1}OH).',
        'Chemical properties are determined primarily by the functional group and are virtually identical across all members of the series.',
        'Physical properties (boiling point, melting point, density) show a regular, monotonic gradation due to increasing molecular weight.'
      ]
    },
    {
      heading: '4. Systematic IUPAC Naming Workflow — "NAME ANY ORGANIC COMPOUND"',
      paragraphs: [
        'To name ANY organic compound accurately without error, follow the systematic 8-step IUPAC naming algorithm:',
        'Step 1: Identify the Principal Functional Group using the IUPAC Priority Hierarchy. This determines the Secondary Suffix.',
        'Step 2: Select the Longest Parent Carbon Chain that contains: 1. The principal functional group carbon(s). 2. The maximum number of multiple bonds (>C=C< / -C≡C-). 3. The maximum length of carbon atoms.',
        'Step 3: Number the Parent Chain to assign the lowest possible locants in strict priority order: Principal FG > Multiple Bonds > Substituents.',
        'Step 4: Identify all Substituents (Secondary Prefixes) attached to the parent chain.',
        'Step 5: Assign Locant Numbers to each substituent based on the numbering chosen in Step 3.',
        'Step 6: Arrange Substituent Names in strict Alphabetical Order (ignoring di-, tri-, tetra-, sec-, tert- prefixes, but considering iso- and neo-).',
        'Step 7: Determine the Primary Suffix (-ane for single bonds, -ene for double bonds, -yne for triple bonds) and Word Root (meth, eth, prop, but, pent, hex, hept, oct, non, dec).',
        'Step 8: Assemble the Complete IUPAC Name according to the formula: Secondary Prefix + Primary Prefix + Word Root + Primary Suffix + Secondary Suffix.'
      ],
      visual: {
        type: 'flowchart',
        flowchartSteps: [
          { step: 'Step 1: Principal FG', detail: 'Identify highest priority functional group to define Secondary Suffix ending.', arrowText: 'Determine Suffix' },
          { step: 'Step 2: Parent Chain', detail: 'Select longest chain containing principal FG and max double/triple bonds.', arrowText: 'Find Carbon Count' },
          { step: 'Step 3: Number Chain', detail: 'Number chain to give lowest locant to Principal FG > Multiple Bonds > Substituents.', arrowText: 'Assign Locants' },
          { step: 'Step 4: Substituents', detail: 'Identify substituents, order alphabetically (ignore di/tri), assemble name.', arrowText: 'Final IUPAC Name' }
        ],
        caption: 'Standard 8-Step IUPAC Assembly Engine: Secondary Prefix + Primary Prefix (cyclo) + Word Root + Primary Suffix (-ane/-ene/-yne) + Secondary Suffix (-ol/-oic acid).'
      },
      importantPoints: [
        'Always format numbers and letters correctly: Hyphens separate numbers and words (2-methyl), Commas separate numbers (2,3-dimethyl).',
        'If the Secondary Suffix starts with a vowel (a, e, i, o, u) or y, drop the terminal \'e\' of the Primary Suffix (e.g. hexan-1-ol, NOT hexane-1-ol; pent-3-en-1-ol, NOT pent-3-ene-1-ol).'
      ]
    },
    {
      heading: '5. Parent Chain Selection Rules & Critical Exceptions',
      paragraphs: [
        'Choosing the correct parent carbon chain is the single most important step in IUPAC nomenclature. Students frequently make errors by blindly selecting the longest numerical carbon chain.',
        'IUPAC Rules for Parent Chain Selection in Order of Priority:',
        '1. Principle 1: The parent chain MUST contain the carbon atom(s) of the Principal Functional Group, even if a longer carbon chain exists without the functional group!',
        '2. Principle 2: The parent chain MUST contain the maximum number of multiple bonds (double and triple bonds), even if a longer saturated carbon chain exists!',
        '3. Principle 3: If multiple chains contain the same principal functional group and multiple bonds, select the chain with the maximum number of carbon atoms.',
        '4. Principle 4: If carbon counts are equal, select the chain containing the maximum number of substituents.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 320" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-2 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">PARENT CHAIN SELECTION: TRAP vs CORRECT SELECTION</text>

  <!-- Left Box: WRONG Parent Chain -->
  <rect x="30" y="50" width="350" height="250" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
  <text x="205" y="75" text-anchor="middle" fill="#f87171" font-size="13" font-weight="bold">❌ INCORRECT: Blindly Picking Longest Chain</text>

  <text x="50" y="110" fill="#cbd5e1" font-size="11">Molecule: 2-ethylbut-3-en-1-ol structure</text>

  <!-- Carbon chain representation wrong -->
  <rect x="50" y="130" width="310" height="35" rx="6" fill="#7f1d1d" stroke="#ef4444" stroke-width="1"/>
  <text x="205" y="152" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="bold">Selected 6-Carbon Chain WITHOUT Double Bond</text>

  <text x="50" y="190" fill="#f87171" font-size="11" font-weight="bold">Error Reason:</text>
  <text x="50" y="210" fill="#cbd5e1" font-size="10">Choosing an 6-carbon saturated chain while leaving</text>
  <text x="50" y="225" fill="#cbd5e1" font-size="10">the C=C double bond outside the parent chain!</text>
  <text x="205" y="265" text-anchor="middle" fill="#ef4444" font-size="12" font-weight="bold">Result: WRONG IUPAC NAME</text>

  <!-- Right Box: CORRECT Parent Chain -->
  <rect x="420" y="50" width="350" height="250" rx="10" fill="#1e293b" stroke="#22c55e" stroke-width="2"/>
  <text x="595" y="75" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold">✓ CORRECT: Includes Principal FG & C=C</text>

  <text x="440" y="110" fill="#cbd5e1" font-size="11">Rule: Principal FG + Max C=C Double Bonds</text>

  <!-- Carbon chain representation correct -->
  <rect x="440" y="130" width="310" height="35" rx="6" fill="#14532d" stroke="#22c55e" stroke-width="1"/>
  <text x="595" y="152" text-anchor="middle" fill="#86efac" font-size="11" font-weight="bold">Selected 5-Carbon Chain WITH -OH & C=C Bond</text>

  <text x="440" y="190" fill="#4ade80" font-size="11" font-weight="bold">Correct Action:</text>
  <text x="440" y="210" fill="#cbd5e1" font-size="10">Select the 5-carbon chain incorporating BOTH</text>
  <text x="440" y="225" fill="#cbd5e1" font-size="10">the -OH alcohol group AND the C=C double bond!</text>
  <text x="595" y="265" text-anchor="middle" fill="#22c55e" font-size="12" font-weight="bold">Correct Name: 2-ethylpent-4-en-1-ol</text>
</svg>`,
        caption: 'Parent Chain Hierarchy: Always prioritize including the Principal Functional Group (-OH) and Multiple Bonds (C=C) over simply maximizing carbon chain length.'
      },
      importantPoints: [
        'Rule 1: Principal Functional Group > Multiple Bonds > Chain Length > Maximum Substituents.',
        'Never pick a longer carbon chain if doing so excludes the principal functional group or a C=C/C≡C bond.'
      ]
    },
    {
      heading: '6. Numbering Rules & Lowest Locant Principle',
      paragraphs: [
        'Once the parent carbon chain is selected, it must be numbered from one end to the other to assign the lowest possible numerical locants.',
        'IUPAC Hierarchy for Chain Numbering:',
        '1. Priority 1: Principal Functional Group gets the LOWEST possible locant number.',
        '2. Priority 2: Multiple Bonds (Double / Triple bonds) get lower locants than substituents.',
        '3. Priority 3: Substituents get the lowest locant set (compare locant sets term by term at the first point of difference).',
        '4. Priority 4 (Alphabetical Tie-Break): When two identical locant sets are possible from opposite ends (e.g. 2,4 vs 2,4), assign the lower locant to the substituent that comes FIRST alphabetically (e.g. 3-bromo-4-chlorohexane, NOT 4-bromo-3-chlorohexane).',
        '5. Double Bond vs Triple Bond Tie-Break: When a double bond and a triple bond are at EQUAL positions from opposite ends (e.g. C1=C2 vs C1≡C2), the DOUBLE BOND gets the lower locant number (1-en-4-yne)!'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 280" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-2 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">NUMBERING DIRECTION: WRONG vs CORRECT</text>

  <!-- Left Example: Wrong direction -->
  <rect x="30" y="50" width="350" height="210" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="205" y="75" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold">❌ WRONG NUMBERING DIRECTION</text>
  <text x="205" y="105" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">⁵CH₃-⁴CH(OH)-³CH₂-²CH₂-¹COOH</text>
  <text x="205" y="135" text-anchor="middle" fill="#f87171" font-size="11">Locant set for -COOH: Position 5 (WRONG!)</text>
  <text x="205" y="160" text-anchor="middle" fill="#cbd5e1" font-size="11">Numbering started from alkyl left end,</text>
  <text x="205" y="175" text-anchor="middle" fill="#cbd5e1" font-size="11">giving principal FG -COOH a high number 5.</text>
  <text x="205" y="210" text-anchor="middle" fill="#ef4444" font-size="11" font-weight="bold">Produces Invalid Name</text>

  <!-- Right Example: Correct direction -->
  <rect x="420" y="50" width="350" height="210" rx="10" fill="#1e293b" stroke="#22c55e" stroke-width="1.5"/>
  <text x="595" y="75" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="bold">✓ CORRECT NUMBERING DIRECTION</text>
  <text x="595" y="105" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">¹HOOC-²CH₂-³CH₂-⁴CH(OH)-⁵CH₃</text>
  <text x="595" y="135" text-anchor="middle" fill="#4ade80" font-size="11">Locant set for -COOH: Position 1 (CORRECT!)</text>
  <text x="595" y="160" text-anchor="middle" fill="#cbd5e1" font-size="11">Numbering starts at -COOH carbon (Position 1),</text>
  <text x="595" y="175" text-anchor="middle" fill="#cbd5e1" font-size="11">giving hydroxy- substituent position 4.</text>
  <text x="595" y="210" text-anchor="middle" fill="#22c55e" font-size="12" font-weight="bold">Correct Name: 4-hydroxypentanoic acid</text>
</svg>`,
        caption: 'Numbering Hierarchy: Always start numbering from the end closest to the Principal Functional Group (-COOH), ensuring it receives locant 1.'
      },
      importantPoints: [
        'Principal FG > Multiple Bonds > Substituents > Alphabetical preference.',
        'When double bond and triple bond have equal locants from opposite ends, double bond receives the lower locant (-1-en-4-yne).'
      ]
    },
    {
      heading: '7. Prefixes, Suffixes & Multiple Substituents Rules',
      paragraphs: [
        'When multiple substituents are attached to the parent chain, IUPAC requires formatting rules:',
        '1. Multiplier Prefixes: If identical substituents occur, use di- (2), tri- (3), tetra- (4), penta- (5). Separate locant numbers with commas (e.g. 2,3-dimethyl).',
        '2. Alphabetical Ordering Rule: Substituents are listed in alphabetical order (e.g. ethyl before methyl). CRITICAL NEET RULE: Multiplier prefixes (di-, tri-, tetra-, sec-, tert-) are IGNORED during alphabetization! (\'ethyl\' comes BEFORE \'dimethyl\' because \'e\' comes before \'m\').',
        '3. Exception for iso- and neo-: The structural prefixes iso- and neo- ARE included in alphabetical comparison (e.g. isopropyl comes under \'i\').',
        '4. Substituted Substituents (Complex Substituents): Enclosed in parentheses and alphabetized under the first letter of its complete name, including any di/tri inside parentheses (e.g. (1,1-dimethylethyl) comes under \'d\').'
      ],
      importantPoints: [
        'Di, tri, tetra, sec, tert are IGNORED in alphabetical ordering (\'ethyl\' comes before \'dimethyl\').',
        'Iso, neo, and cyclo ARE considered in alphabetical ordering (\'isopropyl\' comes under \'i\').'
      ]
    },
    {
      heading: '8. Functional-Group Priority Hierarchy Chart for NEET',
      paragraphs: [
        'When an organic molecule contains more than one functional group (polyfunctional compounds), only ONE functional group acts as the Principal Functional Group (determining the Secondary Suffix ending). All other functional groups are demoted to substituents and named as Secondary Prefixes.',
        'Below is the official NCERT / IUPAC Priority Order from Highest to Lowest for NEET UG:'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 450" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-2 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">NCERT FUNCTIONAL GROUP PRIORITY HIERARCHY (HIGHEST TO LOWEST)</text>

  <!-- Priority 1: Carboxylic Acid -->
  <rect x="40" y="45" width="720" height="30" rx="6" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="60" y="65" fill="#f87171" font-size="11" font-weight="bold">1. Carboxylic Acid (-COOH)</text>
  <text x="350" y="65" fill="#cbd5e1" font-size="11">Suffix: -oic acid / -carboxylic acid</text>
  <text x="620" y="65" fill="#94a3b8" font-size="11">Prefix: carboxy-</text>

  <!-- Priority 2: Sulphonic Acid -->
  <rect x="40" y="80" width="720" height="30" rx="6" fill="#1e293b" stroke="#f97316" stroke-width="1"/>
  <text x="60" y="100" fill="#fb923c" font-size="11" font-weight="bold">2. Sulphonic Acid (-SO₃H)</text>
  <text x="350" y="100" fill="#cbd5e1" font-size="11">Suffix: -sulphonic acid</text>
  <text x="620" y="100" fill="#94a3b8" font-size="11">Prefix: sulpho-</text>

  <!-- Priority 3: Acid Anhydride -->
  <rect x="40" y="115" width="720" height="30" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1"/>
  <text x="60" y="135" fill="#fbbf24" font-size="11" font-weight="bold">3. Acid Anhydride (-(CO)₂O)</text>
  <text x="350" y="135" fill="#cbd5e1" font-size="11">Suffix: -oic anhydride</text>
  <text x="620" y="135" fill="#94a3b8" font-size="11">Prefix: -</text>

  <!-- Priority 4: Ester -->
  <rect x="40" y="150" width="720" height="30" rx="6" fill="#1e293b" stroke="#eab308" stroke-width="1"/>
  <text x="60" y="170" fill="#fde047" font-size="11" font-weight="bold">4. Ester (-COOR)</text>
  <text x="350" y="170" fill="#cbd5e1" font-size="11">Suffix: -oate</text>
  <text x="620" y="170" fill="#94a3b8" font-size="11">Prefix: alkoxycarbonyl-</text>

  <!-- Priority 5: Acid Chloride -->
  <rect x="40" y="185" width="720" height="30" rx="6" fill="#1e293b" stroke="#84cc16" stroke-width="1"/>
  <text x="60" y="205" fill="#a3e635" font-size="11" font-weight="bold">5. Acid Chloride (-COCl)</text>
  <text x="350" y="205" fill="#cbd5e1" font-size="11">Suffix: -oyl chloride</text>
  <text x="620" y="205" fill="#94a3b8" font-size="11">Prefix: chlorocarbonyl-</text>

  <!-- Priority 6: Amide -->
  <rect x="40" y="220" width="720" height="30" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1"/>
  <text x="60" y="240" fill="#34d399" font-size="11" font-weight="bold">6. Amide (-CONH₂)</text>
  <text x="350" y="240" fill="#cbd5e1" font-size="11">Suffix: -amide</text>
  <text x="620" y="240" fill="#94a3b8" font-size="11">Prefix: carbamoyl-</text>

  <!-- Priority 7: Nitrile -->
  <rect x="40" y="255" width="720" height="30" rx="6" fill="#1e293b" stroke="#06b6d4" stroke-width="1"/>
  <text x="60" y="275" fill="#22d3ee" font-size="11" font-weight="bold">7. Nitrile (-CN)</text>
  <text x="350" y="275" fill="#cbd5e1" font-size="11">Suffix: -nitrile</text>
  <text x="620" y="275" fill="#94a3b8" font-size="11">Prefix: cyano-</text>

  <!-- Priority 8: Aldehyde -->
  <rect x="40" y="290" width="720" height="30" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1"/>
  <text x="60" y="310" fill="#60a5fa" font-size="11" font-weight="bold">8. Aldehyde (-CHO)</text>
  <text x="350" y="310" fill="#cbd5e1" font-size="11">Suffix: -al</text>
  <text x="620" y="310" fill="#94a3b8" font-size="11">Prefix: formyl- / oxo-</text>

  <!-- Priority 9: Ketone -->
  <rect x="40" y="325" width="720" height="30" rx="6" fill="#1e293b" stroke="#6366f1" stroke-width="1"/>
  <text x="60" y="345" fill="#818cf8" font-size="11" font-weight="bold">9. Ketone (>C=O)</text>
  <text x="350" y="345" fill="#cbd5e1" font-size="11">Suffix: -one</text>
  <text x="620" y="345" fill="#94a3b8" font-size="11">Prefix: oxo-</text>

  <!-- Priority 10: Alcohol -->
  <rect x="40" y="360" width="720" height="30" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1"/>
  <text x="60" y="380" fill="#c084fc" font-size="11" font-weight="bold">10. Alcohol (-OH)</text>
  <text x="350" y="380" fill="#cbd5e1" font-size="11">Suffix: -ol</text>
  <text x="620" y="380" fill="#94a3b8" font-size="11">Prefix: hydroxy-</text>

  <!-- Priority 11: Amine -->
  <rect x="40" y="395" width="720" height="30" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="1"/>
  <text x="60" y="415" fill="#f472b6" font-size="11" font-weight="bold">11. Amine (-NH₂)</text>
  <text x="350" y="415" fill="#cbd5e1" font-size="11">Suffix: -amine</text>
  <text x="620" y="415" fill="#94a3b8" font-size="11">Prefix: amino-</text>
</svg>`,
        caption: 'Official NCERT Functional Group Priority Hierarchy: -COOH > -SO₃H > -COOR > -COCl > -CONH₂ > -CN > -CHO > >C=O > -OH > -NH₂ > >C=C< > -C≡C-. Functional groups above have higher priority and define the secondary suffix.'
      },
      importantPoints: [
        'Carboxylic acids (-COOH) sit at the absolute top of the NCERT priority hierarchy.',
        'When an alcohol (-OH) coexists with a carboxylic acid (-COOH), -COOH takes priority (suffix: -oic acid) and -OH becomes a substituent (prefix: hydroxy-).'
      ]
    }
  ],

  formulae: [
    {
      title: 'IUPAC Name Structural Syntax',
      formula: '\\text{Secondary Prefix (Substituents)} + \\text{Primary Prefix (cyclo)} + \\text{Word Root (Carbon Count)} + \\text{Primary Suffix (-ane/-ene/-yne)} + \\text{Secondary Suffix (Principal FG)}',
      variables: 'Secondary Prefix = Substituent names (methyl, bromo, hydroxy); Word Root = Carbon count (meth, eth, prop, but); Primary Suffix = C-C saturation level; Secondary Suffix = Highest priority FG.',
      whenToUse: 'Use to assemble the systematic IUPAC name of any organic compound in strict order.',
      calculationExample: {
        problem: 'Assemble the IUPAC name for CH₃-CH(OH)-CH₂-COOH',
        given: 'Principal FG: -COOH (Carboxylic acid); Substituent: -OH at C3; Parent chain: 4 carbons (Butane)',
        stepByStep: [
          'Step 1: Principal FG is -COOH -> Secondary Suffix is -oic acid.',
          'Step 2: Parent chain contains 4 carbons -> Word Root is But-',
          'Step 3: All C-C bonds are single -> Primary Suffix is -an- (drop terminal e).',
          'Step 4: Numbering starts at -COOH (C1) -> -OH substituent is at C3 -> Secondary Prefix is 3-hydroxy-.',
          'Step 5: Assemble: 3-hydroxy + but + an + oic acid = 3-hydroxybutanoic acid.'
        ],
        answer: '3-hydroxybutanoic acid'
      }
    }
  ],

  neetImportantPoints: [
    'Carboxylic acid (-COOH), Sulphonic acid (-SO₃H), Acid anhydride (-(CO)₂O), Ester (-COOR), Acid halide (-COCl), Amide (-CONH₂), Nitrile (-CN), Aldehyde (-CHO), Ketone (>C=O), Alcohol (-OH), Amine (-NH₂), Alkene (>C=C<), Alkyne (-C≡C-) is the exact NCERT priority sequence.',
    'Halogens (-F, -Cl, -Br, -I), Nitro (-NO₂), and Alkoxy (-OR) are ALWAYS treated as substituents (secondary prefixes), never as principal suffixes.',
    'When di-, tri-, tetra- prefixes are used for identical substituents, they are IGNORED during alphabetical ordering (e.g. ethyl comes BEFORE dimethyl).',
    'When double bond (>C=C<) and triple bond (-C≡C-) have identical locants from opposite ends, double bond receives lower locant number (-1-en-4-yne).',
    'If the Secondary Suffix begins with a vowel (a, e, i, o, u) or y, the terminal \'e\' of the Primary Suffix is dropped (e.g., ethanol, NOT ethaneol; pent-3-en-1-ol, NOT pent-3-ene-1-ol).',
    'When -COOH carbon is excluded from the parent chain (e.g. directly attached to a ring or in tricarboxylic acids), the suffix becomes \'-carboxylic acid\'.',
    'Common names to remember for NEET: Acetone = Propan-2-one; Acetaldehyde = Ethanal; Formic acid = Methanoic acid; Acetic acid = Ethanoic acid; Aniline = Benzenamine; Phenol = Hydroxybenzene.',
    'Furan, Thiophene, Pyridine, and Pyrrole are Aromatic Heterocyclic compounds, whereas THF (Tetrahydrofuran) is an Alicyclic Heterocyclic compound.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Selecting the parent chain based purely on maximum carbon count while ignoring the principal functional group.',
      correctFact: 'The parent chain MUST contain the principal functional group carbon(s), even if a longer carbon chain exists without the functional group!',
      whyItMattersForNEET: 'A classic NEET trap where option A gives the name from the longest carbon chain without the FG.'
    },
    {
      commonConfusion: 'Considering di-, tri-, tetra- prefixes when alphabetizing substituents.',
      correctFact: 'Multiplier prefixes (di, tri, tetra, sec, tert) are IGNORED in alphabetization! \'ethyl\' comes BEFORE \'dimethyl\' because \'e\' comes before \'m\'.',
      whyItMattersForNEET: 'Extremely frequent NEET trap in multiple-choice options.'
    },
    {
      commonConfusion: 'Assuming double bond (>C=C<) always takes numbering priority over principal functional groups like -OH or -NH₂.',
      correctFact: 'Principal functional groups (-OH, -CHO, -COOH, -NH₂) ALWAYS take numbering priority over double and triple bonds!',
      whyItMattersForNEET: 'Tested repeatedly in NEET polyfunctional nomenclature questions.'
    },
    {
      commonConfusion: 'Confusing -al (aldehyde suffix) with -ol (alcohol suffix) or -one (ketone suffix).',
      correctFact: '-al is for Aldehyde (-CHO), -ol is for Alcohol (-OH), -one is for Ketone (>C=O).',
      whyItMattersForNEET: 'A single letter spelling difference changes the functional group entirely.'
    },
    {
      commonConfusion: 'Giving triple bond (-C≡C-) lower locant over double bond (>C=C<) when both are symmetrically placed.',
      correctFact: 'When double and triple bonds compete for equal locants from opposite ends, the double bond (>C=C<) gets the lower number (-1-en-4-yne).',
      whyItMattersForNEET: 'Directly tested in AIPMT/NEET past papers.'
    },
    {
      commonConfusion: 'Using \'-oic acid\' suffix when -COOH is attached directly to a cycloalkane ring.',
      correctFact: 'When -COOH is directly attached to a ring, the suffix MUST be \'-carboxylic acid\' (e.g. Cyclohexanecarboxylic acid, NOT cyclohexanoic acid).',
      whyItMattersForNEET: 'Important NCERT rule for cyclic carboxylic acids.'
    }
  ],

  practiceQuestions: [
  {
    "id": "prac-iupac-1",
    "question": "What is the correct IUPAC name of the compound: CH₃–CH(C₂H₅)–CH₂–CH(CH₃)₂?",
    "options": [
      "1. 2-ethyl-4-methylpentane",
      "2. 2,4-dimethylhexane",
      "3. 3,5-dimethylhexane",
      "4. 4-methyl-2-ethylpentane"
    ],
    "correctAnswer": 1,
    "explanation": "Expanding the ethyl group: CH₃–CH(CH₂CH₃)–CH₂–CH(CH₃)₂ gives a longest continuous carbon chain of 6 carbons (hexane). Numbering from the right gives substituents at positions 2 and 4 (2,4-dimethylhexane). Numbering from the left would give 3,5-dimethylhexane (higher locant set).",
    "difficulty": "Easy",
    "topicId": "chem-classification-iupac"
  },
  {
    "id": "prac-iupac-2",
    "question": "Which of the following organic compounds is an example of an Alicyclic Heterocyclic compound?",
    "options": [
      "1. Furan",
      "2. Pyridine",
      "3. Tetrahydrofuran (THF)",
      "4. Benzene"
    ],
    "correctAnswer": 2,
    "explanation": "Tetrahydrofuran (THF) is a saturated cyclic ether containing an Oxygen heteroatom in a 5-membered ring. It lacks aromatic conjugation, making it an Alicyclic Heterocyclic compound. Furan and Pyridine are Aromatic Heterocyclic compounds.",
    "difficulty": "Medium",
    "topicId": "chem-classification-iupac"
  },
  {
    "id": "prac-iupac-3",
    "question": "What is the IUPAC name of CH₂=CH–CH₂–C≡CH?",
    "options": [
      "1. Pent-1-en-4-yne",
      "2. Pent-4-en-1-yne",
      "3. Pent-1-yn-4-ene",
      "4. Pent-4-yn-1-ene"
    ],
    "correctAnswer": 0,
    "explanation": "The chain has 5 carbons with a double bond at one end (C1) and a triple bond at the other end (C4). When double and triple bonds are at equal positions from opposite ends, the double bond gets the lower locant 1. The name is pent-1-en-4-yne.",
    "difficulty": "Medium",
    "topicId": "chem-classification-iupac"
  },
  {
    "id": "prac-iupac-4",
    "question": "The IUPAC name of CH₃–CO–CH₂–CH₂–COOH is:",
    "options": [
      "1. 4-oxopentanoic acid",
      "2. 1-carboxybutan-3-one",
      "3. 4-hydroxypent-4-enoic acid",
      "4. 2-oxopentanoic acid"
    ],
    "correctAnswer": 0,
    "explanation": "Polyfunctional compound containing -COOH (Carboxylic acid) and >C=O (Ketone). -COOH has higher priority and takes locant 1 (suffix: -oic acid). Ketone becomes prefix oxo- at C4. The correct IUPAC name is 4-oxopentanoic acid.",
    "difficulty": "Medium",
    "topicId": "chem-classification-iupac"
  },
  {
    "id": "prac-iupac-5",
    "question": "In which of the following compounds is the multiplier prefix 'di' IGNORED during alphabetical ordering of substituents?",
    "options": [
      "1. 3-ethyl-2,4-dimethylhexane",
      "2. 2,3-dichlorobutane",
      "3. Both 1 and 2",
      "4. Neither 1 nor 2"
    ],
    "correctAnswer": 2,
    "explanation": "IUPAC rules state that multiplier prefixes (di-, tri-, tetra-) are ALWAYS ignored during alphabetical ordering. Thus, 'ethyl' comes before 'dimethyl' (comparing e vs m) and 'bromo' comes before 'dichloro' (comparing b vs c).",
    "difficulty": "Easy",
    "topicId": "chem-classification-iupac"
  },
  {
    "id": "prac-iupac-6",
    "question": "What is the IUPAC name of CH₃–CH(OH)–CH₂–C(CH₃)₂–OH?",
    "options": [
      "1. 4-methylpentane-2,4-diol",
      "2. 2-methylpentane-2,4-diol",
      "3. 1,1-dimethylbutane-1,3-diol",
      "4. 2,4-dimethylpentane-2,4-diol"
    ],
    "correctAnswer": 1,
    "explanation": "Parent chain has 5 carbons with two -OH groups. Numbering from right to left gives locants 2,4 for -OH groups and 2 for methyl group (locant set 2,2,4). Numbering from left to right would give locant set 2,4,4. The lower locant set is 2,2,4, giving 2-methylpentane-2,4-diol.",
    "difficulty": "Hard",
    "topicId": "chem-classification-iupac"
  },
  {
    "id": "prac-chemclassificationiupac-7",
    "question": "Regarding Classification & IUPAC Nomenclature, which of the following statements correctly resolves a common misconception about \"Selecting the parent chain based purely on maximum carbon count while ignoring the principal functional group.\"?",
    "options": [
      "The parent chain MUST contain the principal functional group carbon(s), even if a longer carbon chain exists without the functional group!",
      "Incorrect assumption: Selecting the parent chain based purely on maximum carbon count while ignoring the principal functional group.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "The parent chain MUST contain the principal functional group carbon(s), even if a longer carbon chain exists without the functional group!. A classic NEET trap where option A gives the name from the longest carbon chain without the FG.",
    "difficulty": "Medium",
    "conceptTested": "Classification & IUPAC Nomenclature - Conceptual Clarity"
  },
  {
    "id": "prac-chemclassificationiupac-8",
    "question": "Regarding Classification & IUPAC Nomenclature, which of the following statements correctly resolves a common misconception about \"Considering di-, tri-, tetra- prefixes when alphabetizing substituents.\"?",
    "options": [
      "Multiplier prefixes (di, tri, tetra, sec, tert) are IGNORED in alphabetization! 'ethyl' comes BEFORE 'dimethyl' because 'e' comes before 'm'.",
      "Incorrect assumption: Considering di-, tri-, tetra- prefixes when alphabetizing substituents.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Multiplier prefixes (di, tri, tetra, sec, tert) are IGNORED in alphabetization! 'ethyl' comes BEFORE 'dimethyl' because 'e' comes before 'm'.. Extremely frequent NEET trap in multiple-choice options.",
    "difficulty": "Medium",
    "conceptTested": "Classification & IUPAC Nomenclature - Conceptual Clarity"
  },
  {
    "id": "prac-chemclassificationiupac-9",
    "question": "Regarding Classification & IUPAC Nomenclature, which of the following statements correctly resolves a common misconception about \"Assuming double bond (>C=C<) always takes numbering priority over principal functional groups like -OH or -NH₂.\"?",
    "options": [
      "Principal functional groups (-OH, -CHO, -COOH, -NH₂) ALWAYS take numbering priority over double and triple bonds!",
      "Incorrect assumption: Assuming double bond (>C=C<) always takes numbering priority over principal functional groups like -OH or -NH₂.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Principal functional groups (-OH, -CHO, -COOH, -NH₂) ALWAYS take numbering priority over double and triple bonds!. Tested repeatedly in NEET polyfunctional nomenclature questions.",
    "difficulty": "Medium",
    "conceptTested": "Classification & IUPAC Nomenclature - Conceptual Clarity"
  },
  {
    "id": "prac-chemclassificationiupac-10",
    "question": "Regarding Classification & IUPAC Nomenclature, which of the following statements correctly resolves a common misconception about \"Confusing -al (aldehyde suffix) with -ol (alcohol suffix) or -one (ketone suffix).\"?",
    "options": [
      "-al is for Aldehyde (-CHO), -ol is for Alcohol (-OH), -one is for Ketone (>C=O).",
      "Incorrect assumption: Confusing -al (aldehyde suffix) with -ol (alcohol suffix) or -one (ketone suffix).",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "-al is for Aldehyde (-CHO), -ol is for Alcohol (-OH), -one is for Ketone (>C=O).. A single letter spelling difference changes the functional group entirely.",
    "difficulty": "Medium",
    "conceptTested": "Classification & IUPAC Nomenclature - Conceptual Clarity"
  }
],
  pyqs: [
    {
      id: 'neet-pyq-iupac-1',
      year: 2022,
      exam: 'NEET UG 2022',
      question: 'The IUPAC name of the compound CH₃–CH(OH)–CH₂–C(CH₃)₂–OH is:',
      options: [
        '1. 2-methylpentane-2,4-diol',
        '2. 4-methylpentane-2,4-diol',
        '3. 1,1-dimethylbutane-1,3-diol',
        '4. 2,2-dimethylbutane-1,3-diol'
      ],
      correctAnswer: 0,
      explanation: 'Parent chain contains 5 carbon atoms (pentane). There are two alcohol (-OH) groups at C2 and C4, and a methyl group at C2. Numbering from the right gives locants 2,2,4 (2-methylpentane-2,4-diol). Numbering from the left gives locants 2,4,4 (higher locant set).',
      topicId: 'chem-classification-iupac',
      difficulty: 'Medium',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.5.3'
    },
    {
      id: 'neet-pyq-iupac-2',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'The IUPAC name of the compound CH₃–C(CH₃)=CH–CH₂–OH is:',
      options: [
        '1. 3-methylbut-2-en-1-ol',
        '2. 2-methylbut-2-en-4-ol',
        '3. 3-methylbut-3-en-1-ol',
        '4. 1-hydroxy-3-methylbut-2-ene'
      ],
      correctAnswer: 0,
      explanation: 'The principal functional group is -OH (alcohol), which takes numbering priority over the double bond. Numbering starts from the -OH end: C1 is attached to -OH, C2-C3 has the double bond, and C3 has a methyl substituent. The IUPAC name is 3-methylbut-2-en-1-ol.',
      topicId: 'chem-classification-iupac',
      difficulty: 'Easy',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.5.3'
    },
    {
      id: 'neet-pyq-iupac-3',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'The correct IUPAC name of the compound CH₃–CH=CH–C≡CH is:',
      options: [
        '1. Pent-3-en-1-yne',
        '2. Pent-2-en-4-yne',
        '3. Pent-1-yn-3-ene',
        '4. Pent-4-yn-2-ene'
      ],
      correctAnswer: 0,
      explanation: 'Parent chain has 5 carbons. Numbering from right to left gives locants 1 for triple bond and 3 for double bond (set 1,3). Numbering from left to right gives locants 2 for double bond and 4 for triple bond (set 2,4). Since 1,3 is lower than 2,4, numbering starts from the triple bond end, giving pent-3-en-1-yne.',
      topicId: 'chem-classification-iupac',
      difficulty: 'Medium',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.5.2'
    },
    {
      id: 'neet-pyq-iupac-4',
      year: 2017,
      exam: 'NEET UG 2017',
      question: 'The correct IUPAC name of the compound CH₃–CH(OH)–CH₂–CH₂–COOH is:',
      options: [
        '1. 4-hydroxypentanoic acid',
        '2. 1-carboxybutan-3-ol',
        '3. 4-hydroxypentanal',
        '4. 2-hydroxypentanoic acid'
      ],
      correctAnswer: 0,
      explanation: 'Polyfunctional compound with -COOH (Carboxylic acid) and -OH (Alcohol). -COOH has higher priority and receives locant 1. The 5-carbon parent chain is pentanoic acid with a hydroxy- substituent at C4. IUPAC name is 4-hydroxypentanoic acid.',
      topicId: 'chem-classification-iupac',
      difficulty: 'Easy',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.5.4'
    },
    {
      id: 'neet-pyq-iupac-5',
      year: 2016,
      exam: 'NEET UG 2016',
      question: 'The IUPAC name of the compound CH₃–CO–CH₂–CH₂–COOH is:',
      options: [
        '1. 4-oxopentanoic acid',
        '2. 1-carboxybutan-3-one',
        '3. 4-valeroic acid',
        '4. 2-oxopentanoic acid'
      ],
      correctAnswer: 0,
      explanation: '-COOH takes priority (locant 1). The keto group (>C=O) at C4 is named as prefix oxo-. 5-carbon chain gives 4-oxopentanoic acid.',
      topicId: 'chem-classification-iupac',
      difficulty: 'Easy',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.5.4'
    },
    {
      id: 'neet-pyq-iupac-6',
      year: 2013,
      exam: 'NEET UG 2013',
      question: 'The IUPAC name of CH₃–CH(CH₃)–CH₂–C≡CH is:',
      options: [
        '1. 4-methylpent-1-yne',
        '2. 2-methylpent-4-yne',
        '3. 4-methylpent-2-yne',
        '4. 1-isopropylethyne'
      ],
      correctAnswer: 0,
      explanation: 'Numbering starts from the triple bond end to give C≡C locant 1. Methyl substituent is at C4. IUPAC name is 4-methylpent-1-yne.',
      topicId: 'chem-classification-iupac',
      difficulty: 'Easy',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.5.2'
    },
    {
      id: 'neet-pyq-iupac-7',
      year: 2011,
      exam: 'AIPMT 2011',
      question: 'The IUPAC name of the compound CH₃–C(CH₃)₂–CH₂–CH₃ is:',
      options: [
        '1. 2,2-dimethylbutane',
        '2. 3,3-dimethylbutane',
        '3. 2,2-dimethylpropane',
        '4. 2-methylbutane'
      ],
      correctAnswer: 0,
      explanation: 'Parent chain has 4 carbons (butane). Two methyl groups attached at C2 give 2,2-dimethylbutane.',
      topicId: 'chem-classification-iupac',
      difficulty: 'Easy',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.5.1'
    },
    {
      id: 'neet-pyq-iupac-8',
      year: 2009,
      exam: 'AIPMT 2009',
      question: 'The IUPAC name of CH₂=CH–CH₂–C≡CH is:',
      options: [
        '1. Pent-1-en-4-yne',
        '2. Pent-4-en-1-yne',
        '3. Pent-1-yn-4-ene',
        '4. Pent-4-yn-1-ene'
      ],
      correctAnswer: 0,
      explanation: 'Equal locant competition between C=C at C1 and C≡C at C1 from opposite ends. Double bond gets priority for lower locant 1 -> pent-1-en-4-yne.',
      topicId: 'chem-classification-iupac',
      difficulty: 'Medium',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.5.2'
    },
    {
      id: 'neet-pyq-iupac-9',
      year: 2007,
      exam: 'AIPMT 2007',
      question: 'The IUPAC name of CH₃–CH(C₂H₅)–CH₂–CH(CH₃)₂ is:',
      options: [
        '1. 2,4-dimethylhexane',
        '2. 3,5-dimethylhexane',
        '3. 2-ethyl-4-methylpentane',
        '4. 4-methyl-2-ethylpentane'
      ],
      correctAnswer: 0,
      explanation: 'Longest continuous chain contains 6 carbons (hexane). Numbering gives substituents at 2 and 4 -> 2,4-dimethylhexane.',
      topicId: 'chem-classification-iupac',
      difficulty: 'Easy',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.5.1'
    },
    {
      id: 'neet-pyq-iupac-10',
      year: 2006,
      exam: 'AIPMT 2006',
      question: 'The IUPAC name of the compound CH₃–CH=CH–CH₂–CHO is:',
      options: [
        '1. Pent-3-enal',
        '2. Pent-2-enal',
        '3. Pent-3-en-1-ol',
        '4. Pent-4-enal'
      ],
      correctAnswer: 0,
      explanation: 'Principal FG is -CHO (Aldehyde) at C1. Double bond is between C3-C4. IUPAC name is pent-3-enal.',
      topicId: 'chem-classification-iupac',
      difficulty: 'Easy',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.5.3'
    }
  ],

  quickRevision: [
    '🔥 ORGANIC CLASSIFICATION: Acyclic (open-chain) vs Cyclic (ring). Cyclic = Homocyclic (Carbocyclic) + Heterocyclic (ring contains N, O, S). Saturated = C-C single bonds only; Unsaturated = C=C or C≡C bonds.',
    '🔥 HOMOLOGOUS SERIES: Same functional group, same general formula, consecutive members differ by -CH₂- (14 u molar mass). Physical properties show gradual change due to molecular mass.',
    '🔥 IUPAC SYNTAX MATRIX: Secondary Prefix (Substituents) + Primary Prefix (cyclo) + Word Root (C count) + Primary Suffix (-ane/-ene/-yne) + Secondary Suffix (Principal FG).',
    '🔥 NCERT PRIORITY ORDER: -COOH > -SO₃H > -COOR > -COCl > -CONH₂ > -CN > -CHO > >C=O > -OH > -NH₂ > >C=C< > -C≡C-.',
    '🔥 NUMBERING HIERARCHY: Principal FG > Multiple Bonds (>C=C< / -C≡C-) > Substituents (lowest locant set) > Alphabetical preference.',
    '🔥 EQUAL DOUBLE vs TRIPLE BOND TIE-BREAK: When double and triple bonds have equal locants from opposite ends, double bond receives lower locant 1 (-1-en-4-yne).',
    '🔥 ALPHABETICAL TRAP: Multiplier prefixes (di, tri, tetra, sec, tert) are IGNORED during alphabetization (\'ethyl\' comes BEFORE \'dimethyl\'). Iso and neo ARE considered (\'isopropyl\' comes under \'i\').',
    '🔥 VOWEL DROPPING: If Secondary Suffix starts with a vowel (a, e, i, o, u) or y, drop the terminal \'e\' of Primary Suffix (hexan-1-ol, NOT hexane-1-ol).'
  ],

  neetMarksPotential: {
    topicName: 'Classification & IUPAC Nomenclature',
    confidenceLabel: 'HIGH',
    confidenceText: 'High Confidence: Verified against 10 official NEET/AIPMT paper appearances (10 direct questions).',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 10,
    totalDirectPyqs: 10,
    totalHistoricalMarks: 40,
    averageDirectPyqsPerPaper: 0.67,
    maxDirectPyqsInSinglePaper: 1,
    minDirectPyqsInSinglePaper: 0,
    minDirectMarks: 0,
    maxDirectMarks: 4,
    avgDirectMarksPerPaper: 2.67,
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 to 4 marks per paper (tested in 10 of 15 analyzed papers)',
    whatThisMeansForYou: 'High yield foundational topic in Organic Chemistry for NEET. Expect 1 direct question (4 marks) on IUPAC naming of polyfunctional compounds, numbering rules, or functional group priority.',
    yearWiseBreakdown: [
      { year: 2022, exam: 'NEET UG 2022', directPyqCount: 1, marks: 4, questionType: 'IUPAC name of 2-methylpentane-2,4-diol', classification: 'Direct', verificationStatus: 'Verified (NEET UG 2022)' },
      { year: 2020, exam: 'NEET UG 2020', directPyqCount: 1, marks: 4, questionType: 'IUPAC name of 3-methylbut-2-en-1-ol', classification: 'Direct', verificationStatus: 'Verified (NEET UG 2020)' },
      { year: 2019, exam: 'NEET UG 2019', directPyqCount: 1, marks: 4, questionType: 'IUPAC name of pent-3-en-1-yne', classification: 'Direct', verificationStatus: 'Verified (NEET UG 2019)' },
      { year: 2017, exam: 'NEET UG 2017', directPyqCount: 1, marks: 4, questionType: 'IUPAC name of 4-hydroxypentanoic acid', classification: 'Direct', verificationStatus: 'Verified (NEET UG 2017)' },
      { year: 2016, exam: 'NEET UG 2016', directPyqCount: 1, marks: 4, questionType: 'IUPAC name of 4-oxopentanoic acid', classification: 'Direct', verificationStatus: 'Verified (NEET UG 2016)' },
      { year: 2013, exam: 'NEET UG 2013', directPyqCount: 1, marks: 4, questionType: 'IUPAC name of 4-methylpent-1-yne', classification: 'Direct', verificationStatus: 'Verified (NEET UG 2013)' },
      { year: 2011, exam: 'AIPMT 2011', directPyqCount: 1, marks: 4, questionType: 'IUPAC name of 2,2-dimethylbutane', classification: 'Direct', verificationStatus: 'Verified (AIPMT 2011)' },
      { year: 2009, exam: 'AIPMT 2009', directPyqCount: 1, marks: 4, questionType: 'IUPAC name of pent-1-en-4-yne', classification: 'Direct', verificationStatus: 'Verified (AIPMT 2009)' },
      { year: 2007, exam: 'AIPMT 2007', directPyqCount: 1, marks: 4, questionType: 'IUPAC name of 2,4-dimethylhexane', classification: 'Direct', verificationStatus: 'Verified (AIPMT 2007)' },
      { year: 2006, exam: 'AIPMT 2006', directPyqCount: 1, marks: 4, questionType: 'IUPAC name of pent-3-enal', classification: 'Direct', verificationStatus: 'Verified (AIPMT 2006)' }
    ],
    sourceInfo: {
      dataSource: 'SATHEE (IIT Kanpur / Ministry of Education) & Official NEET Archives',
      analysisPeriod: '2006 – 2022 (15 Verified Papers)',
      directPyqsAnalyzedCount: 10,
      classificationMethod: 'Strict topic-level classification; chapter-level weightage was excluded.',
      disclaimer: 'Historical frequency is a record of past papers and not a guarantee of future NEET paper contents.'
    }
  }
};
