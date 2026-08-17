import { DetailedTopicContent } from '../../types/neet';

export const chemPeriodicTableHistoryDetails: DetailedTopicContent = {
  topicId: 'chem-periodic-table-history',
  topicName: 'Modern Periodic Law & Table Layout',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Inorganic Chemistry (Class 11)',
  chapter: 'Classification of Elements and Periodicity in Properties',

  whatIsThisTopic:
    'The periodic table is the unified structural framework of chemistry. It arranges 118 known elements in order of increasing atomic number (Z) such that elements with similar valence shell electronic configurations recur at regular intervals. Understanding historical classification (Dobereiner, Newlands, Mendeleev), Henry Moseley\'s modern periodic law, the long form periodic table layout (7 periods, 18 groups, and 4 blocks: s, p, d, f), IUPAC nomenclature for superheavy elements (Z > 100), and rules to determine an element\'s period, group, and block directly from its electronic configuration is essential for mastering NEET Inorganic Chemistry.',

  basicIdea: [
    '1. Historical Progression: Dobereiner\'s Triads (atomic mass mean) → Newlands\' Law of Octaves (failed beyond Ca) → Mendeleev\'s Periodic Law (based on atomic mass, predicted Eka-Aluminium/Gallium & Eka-Silicon/Germanium, but failed for anomalous pair atomic masses and isotopes) → Moseley\'s Modern Periodic Law (based on atomic number Z from X-ray spectra: √ν = a(Z - b)).',
    '2. Modern Periodic Law & Basis: The physical and chemical properties of elements are periodic functions of their atomic numbers (Z). Atomic number Z dictates total nuclear charge and electron count, which determines ground-state electronic configuration.',
    '3. Long Form Periodic Table Layout: Constructed on Bohr\'s scheme of electronic configurations. Contains 7 horizontal rows (Periods, principal quantum number n = 1 to 7) and 18 vertical columns (Groups 1 to 18). Divided into four distinct blocks: s-block (Groups 1-2), p-block (Groups 13-18), d-block (Groups 3-12), and f-block (Lanthanoids 4f & Actinoids 5f placed separately at the bottom).',
    '4. Identifying Position from Electronic Configuration: Period = highest principal quantum number (n). Block = subshell receiving the last differentiating electron. Group = s-block: valence s electrons; p-block: 12 + valence p electrons; d-block: (n-1)d + ns electrons; f-block: always Group 3.'
  ],

  importantTerms: [
    {
      term: 'Dobereiner\'s Triads',
      definition: 'Groups of three chemically similar elements where the atomic mass of the middle element is approximately the arithmetic mean of the first and third elements.',
      neetNote: 'Classic examples: Li-Na-K (7, 23, 39), Ca-Sr-Ba (40, 88, 137), Cl-Br-I (35.5, 80, 127). Failed as it applied to very few elements.'
    },
    {
      term: 'Newlands\' Law of Octaves',
      definition: 'When elements are arranged in increasing order of atomic masses, every eighth element exhibits physical and chemical properties similar to the first (analogous to musical octaves).',
      neetNote: 'Worked only up to Calcium (Z = 20). Failed for heavier elements and did not accommodate noble gases.'
    },
    {
      term: 'Mendeleev\'s Periodic Law',
      definition: 'The physical and chemical properties of elements are periodic functions of their atomic masses.',
      neetNote: 'Mendeleev left gaps for undiscovered elements: Eka-Boron (Scandium), Eka-Aluminium (Gallium), Eka-Silicon (Germanium).'
    },
    {
      term: 'Modern Periodic Law (Moseley)',
      definition: 'The physical and chemical properties of elements are periodic functions of their atomic numbers (Z).',
      neetNote: 'Moseley showed √ν = a(Z - b) via X-ray emission spectra, proving atomic number (Z) is more fundamental than atomic mass.'
    },
    {
      term: 'Representative / Main Group Elements',
      definition: 'Elements belonging to s-block and p-block (Groups 1, 2, and 13 to 17) whose valence shells are incomplete.',
      neetNote: 'Noble gases (Group 18) have completely filled octet/duplet configurations (ns² np⁶).'
    },
    {
      term: 'Transition Elements (d-block)',
      definition: 'Elements in Groups 3 to 12 having partially filled (n-1)d subshells in their ground state or common oxidation states.',
      neetNote: 'Zn, Cd, and Hg (Group 12) have completely filled d¹⁰ configurations and are not strictly transition metals according to IUPAC.'
    },
    {
      term: 'Inner Transition Elements (f-block)',
      definition: 'Elements in which the last electron enters the (n-2)f subshell. Consists of Lanthanoids (4f: Ce Z=58 to Lu Z=71) and Actinoids (5f: Th Z=90 to Lr Z=103).',
      neetNote: 'All f-block elements formally belong to Group 3 in Period 6 (Lanthanoids) and Period 7 (Actinoids).'
    },
    {
      term: 'IUPAC Superheavy Nomenclature (Z > 100)',
      definition: 'Systematic numerical roots derived directly from atomic digits: 0=nil, 1=un, 2=bi, 3=tri, 4=quad, 5=pent, 6=hex, 7=sept, 8=oct, 9=enn, appended with \'-ium\'.',
      neetNote: 'Example: Z = 119 → un (1) + un (1) + enn (9) + ium = Ununennium (symbol Uue).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Historical Evolution of Periodic Classification & Mendeleev\'s Legacy',
      paragraphs: [
        'Early classification attempts sought patterns among known elements based on atomic masses. Johann Wolfgang Döbereiner grouped elements into Triads (e.g., Li-Na-K, Ca-Sr-Ba, Cl-Br-I) where the atomic mass of the middle element was the average of the other two. John Newlands proposed the Law of Octaves, noting similarity every 8th element (like musical notes), but this law held true only up to Calcium.',
        'Dmitri Mendeleev formulated his Periodic Law: "The properties of elements are periodic functions of their atomic masses." He arranged 63 elements in 8 groups and 6 periods. Mendeleev\'s greatest triumph was leaving intentional blank spaces and predicting the exact properties of undiscovered elements: Eka-Boron (Scandium, Sc), Eka-Aluminium (Gallium, Ga), and Eka-Silicon (Germanium, Ge). He also corrected doubtful atomic masses (e.g., Beryllium mass corrected from 13.5 to 9.0).',
        'Limitations of Mendeleev\'s Table: 1) Position of Hydrogen was ambiguous (resembled alkali metals and halogens). 2) Anomalous pairs where elements with higher atomic mass preceded lower atomic mass (e.g., Ar Z=18 M=39.9 before K Z=19 M=39.1; Co M=58.9 before Ni M=58.7; Te M=127.6 before I M=126.9). 3) Isotopes of the same element had different atomic masses but no separate places. 4) Chemically dissimilar elements were grouped together (e.g., alkali metals Cu, Ag, Au placed with Group 1).'
      ],
      tables: [
        {
          headers: ['Mendeleev\'s Predicted Name', 'Discovered Element', 'Predicted Mass', 'Actual Mass', 'Predicted Oxide'],
          rows: [
            ['Eka-Boron', 'Scandium (Sc)', '44', '43.8', 'E₂O₃ / Sc₂O₃'],
            ['Eka-Aluminium', 'Gallium (Ga)', '68', '69.7', 'E₂O₃ / Ga₂O₃'],
            ['Eka-Silicon', 'Germanium (Ge)', '72', '72.6', 'EO₂ / GeO₂']
          ]
        }
      ]
    },
    {
      heading: '2. Modern Periodic Law & Long Form Periodic Table Architecture',
      paragraphs: [
        'In 1913, English physicist Henry Moseley studied the characteristic X-ray emission spectra of elements and established a linear relationship between frequency (ν) and atomic number (Z): √ν = a(Z - b). This proved conclusively that atomic number (nuclear charge Z) is the fundamental property of an element, not atomic mass.',
        'Modern Periodic Law states: "The physical and chemical properties of elements are periodic functions of their atomic numbers." Modern Long Form Periodic Table (Bohr\'s Table) is constructed directly on ground-state electron configurations. It contains 7 Periods (horizontal rows) and 18 Groups (vertical columns).',
        'Period Number = Principal quantum number (n) of the outermost valence shell being filled. Period 1 has 2 elements (1s), Periods 2 & 3 have 8 elements (2s2p, 3s3p), Periods 4 & 5 have 18 elements (includes 3d and 4d), Period 6 has 32 elements (includes 4f lanthanoids), and Period 7 is incomplete/long (includes 5f actinoids).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 420" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="30" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">FOUR-BLOCK ARCHITECTURE OF THE MODERN PERIODIC TABLE</text>

  <!-- s-block -->
  <rect x="40" y="70" width="100" height="230" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="90" y="100" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">s-BLOCK</text>
  <text x="90" y="125" text-anchor="middle" fill="#94a3b8" font-size="11">Groups 1 & 2</text>
  <text x="90" y="150" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">ns¹ - ns²</text>
  <text x="90" y="180" text-anchor="middle" fill="#e2e8f0" font-size="10">Alkali &</text>
  <text x="90" y="195" text-anchor="middle" fill="#e2e8f0" font-size="10">Alkaline Earth</text>
  <text x="90" y="210" text-anchor="middle" fill="#e2e8f0" font-size="10">Metals</text>
  <text x="90" y="240" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">Reactive Metals</text>

  <!-- d-block -->
  <rect x="160" y="110" width="320" height="190" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
  <text x="320" y="140" text-anchor="middle" fill="#c084fc" font-size="14" font-weight="bold">d-BLOCK (Transition Elements)</text>
  <text x="320" y="165" text-anchor="middle" fill="#94a3b8" font-size="11">Groups 3 to 12</text>
  <text x="320" y="190" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">(n-1)d¹⁻¹⁰ ns⁰⁻²</text>
  <text x="320" y="220" text-anchor="middle" fill="#e2e8f0" font-size="10">3d, 4d, 5d, 6d Series (Variable Oxidation States, Colored Ions)</text>
  <text x="320" y="250" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="bold">Note: Zn, Cd, Hg are d-block but NOT transition metals (d¹⁰ filled)</text>

  <!-- p-block -->
  <rect x="500" y="70" width="260" height="230" rx="8" fill="#1e293b" stroke="#22c55e" stroke-width="2"/>
  <text x="630" y="100" text-anchor="middle" fill="#4ade80" font-size="14" font-weight="bold">p-BLOCK</text>
  <text x="630" y="125" text-anchor="middle" fill="#94a3b8" font-size="11">Groups 13 to 18</text>
  <text x="630" y="150" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">ns² np¹⁻⁶</text>
  <text x="630" y="180" text-anchor="middle" fill="#e2e8f0" font-size="10">Metals, Metalloids, Non-metals</text>
  <text x="630" y="200" text-anchor="middle" fill="#e2e8f0" font-size="10">Halogens (G17), Noble Gases (G18)</text>
  <text x="630" y="230" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">s-block + p-block = Representative Elements</text>

  <!-- f-block -->
  <rect x="160" y="320" width="600" height="80" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
  <text x="460" y="345" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">f-BLOCK (Inner Transition Elements) — All formally belong to Group 3</text>
  <text x="460" y="365" text-anchor="middle" fill="#f8fafc" font-size="11">Lanthanoids (4f: Ce Z=58 to Lu Z=71) &amp; Actinoids (5f: Th Z=90 to Lr Z=103) | (n-2)f¹⁻¹⁴ (n-1)d⁰⁻¹ ns²</text>
  <text x="460" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">Placed separately at table bottom to prevent distortion of 18-column layout</text>
</svg>`,
        caption: 'Visual overview of the four periodic table blocks, valence configurations, and IUPAC group assignments.'
      }
    },
    {
      heading: '3. Algorithm to Determine Period, Group, and Block from Electronic Configuration',
      paragraphs: [
        'To identify the periodic position of an element from its ground-state electronic configuration or atomic number (Z), follow these strict rules:',
        'Step 1: Identify the Period Number = Highest principal quantum number (n) present in the electronic configuration.',
        'Step 2: Identify the Block = Subshell (s, p, d, or f) that receives the LAST differentiating electron.',
        'Step 3: Calculate the Group Number according to the block:',
        '• s-block: Group Number = Number of valence s-electrons (Group 1 or 2).',
        '• p-block: Group Number = 12 + Number of valence p-electrons (Groups 13 to 18).',
        '• d-block: Group Number = Number of (n-1)d electrons + Number of ns electrons (Groups 3 to 12).',
        '• f-block: Group Number = Always Group 3 (Period 6 for Lanthanoids 4f, Period 7 for Actinoids 5f).'
      ],
      visual: {
        type: 'flowchart',
        flowchartSteps: [
          { step: 'Write Electronic Configuration', detail: 'Determine ground-state configuration using Aufbau principle.', arrowText: 'Extract n_max' },
          { step: 'Find Period Number', detail: 'Period = highest principal quantum number (n_max).', arrowText: 'Find last electron' },
          { step: 'Identify Block (s, p, d, f)', detail: 'Block = subshell receiving the differentiating electron.', arrowText: 'Apply Group Formula' },
          { step: 'Calculate Group Number', detail: 's-block = valence s e⁻ | p-block = 12 + valence p e⁻ | d-block = (n-1)d + ns e⁻ | f-block = Group 3', arrowText: 'Complete Assignment' }
        ],
        caption: 'NEET step-by-step algorithm for locating any element in the periodic table.'
      },
      examples: [
        {
          problem: 'Locate the period, group, and block for an element with atomic number Z = 33.',
          given: 'Atomic number Z = 33',
          stepByStep: [
            '1. Write electronic configuration: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p³',
            '2. Highest principal quantum number n = 4 → Period = 4.',
            '3. Differentiating electron enters 4p subshell → Block = p-block.',
            '4. Group number for p-block = 12 + valence p electrons = 12 + 3 = 15 (Group 15 / Nitrogen family / Pnictogens).'
          ],
          answer: 'Period = 4, Block = p-block, Group = 15 (Arsenic, As).'
        },
        {
          problem: 'Determine period, group, and block for element with configuration [Ar] 3d³ 4s².',
          given: 'Configuration: [Ar] 3d³ 4s²',
          stepByStep: [
            '1. Highest principal quantum number n = 4 → Period = 4.',
            '2. Differentiating electron enters 3d subshell → Block = d-block.',
            '3. Group number for d-block = (n-1)d electrons + ns electrons = 3 + 2 = 5.'
          ],
          answer: 'Period = 4, Block = d-block, Group = 5 (Vanadium, V).'
        }
      ]
    },
    {
      heading: '4. IUPAC Nomenclature for Superheavy Elements (Z > 100)',
      paragraphs: [
        'Before official IUPAC discovery claims are verified, superheavy elements with atomic numbers Z > 100 are given systematic temporary IUPAC names derived directly from numerical roots of their digits:',
        'Numerical Roots: 0 = nil (n), 1 = un (u), 2 = bi (b), 3 = tri (t), 4 = quad (q), 5 = pent (p), 6 = hex (h), 7 = sept (s), 8 = oct (o), 9 = enn (e).',
        'Rules: Append \'-ium\' to the combined roots. If \'bi\' or \'tri\' precedes \'-ium\', the duplicate \'i\' is dropped (bi + ium = bium, tri + ium = trium). If \'enn\' precedes \'nil\', the trailing \'n\' is dropped (enn + nil = ennil). The official symbol consists of three capital/lowercase letters corresponding to the initial letters of the roots.',
        'NEET High-Yield IUPAC Matches: Z = 101 (Unnilunium, Unu = Mendelevium), Z = 102 (Unnilbium, Unb = Nobelium), Z = 103 (Unniltrium, Unt = Lawrencium), Z = 104 (Unnilquadium, Unq = Rutherfordium), Z = 105 (Unnilpentium, Unp = Dubnium), Z = 106 (Unnilhexium, Unh = Seaborgium), Z = 107 (Unnilseptium, Uns = Bohrium), Z = 108 (Unniloctium, Uno = Hassium), Z = 109 (Unnilennium, Une = Meitnerium), Z = 110 (Ununnilium, Uun = Darmstadtium), Z = 111 (Unununnium, Uuu = Roentgenium), Z = 112 (Ununbium, Uub = Copernicium).'
      ],
      tables: [
        {
          headers: ['Atomic No. (Z)', 'Digit Roots', 'Systematic IUPAC Name', 'Symbol', 'Official Name (IUPAC Approved)'],
          rows: [
            ['101', 'un + nil + un', 'Unnilunium', 'Unu', 'Mendelevium (Md)'],
            ['102', 'un + nil + bi', 'Unnilbium', 'Unb', 'Nobelium (No)'],
            ['103', 'un + nil + tri', 'Unniltrium', 'Unt', 'Lawrencium (Lr)'],
            ['104', 'un + nil + quad', 'Unnilquadium', 'Unq', 'Rutherfordium (Rf)'],
            ['106', 'un + nil + hex', 'Unnilhexium', 'Unh', 'Seaborgium (Sg)'],
            ['111', 'un + un + un', 'Unununnium', 'Uuu', 'Roentgenium (Rg)'],
            ['114', 'un + un + quad', 'Ununquadium', 'Uuq', 'Flerovium (Fl)'],
            ['119', 'un + un + enn', 'Ununennium', 'Uue', 'Undiscovered (Period 8, Group 1)']
          ]
        }
      ]
    }
  ],

  formulae: [
    {
      title: 'Moseley\'s Law Formula',
      formula: '√ν = a(Z - b)',
      variables: 'ν = X-ray frequency, Z = atomic number, a & b = constants for spectral series',
      whenToUse: 'To demonstrate that atomic number Z (not atomic mass) determines characteristic X-ray frequencies and chemical periodicity.',
      note: 'Proved atomic number is the true basis of modern periodic classification.'
    },
    {
      title: 'p-Block Group Number Formula',
      formula: 'Group = 12 + valence p electrons',
      variables: 'valence p electrons = number of electrons in outer np subshell',
      whenToUse: 'For elements ending in np¹ to np⁶ subshells (Groups 13 to 18).'
    },
    {
      title: 'd-Block Group Number Formula',
      formula: 'Group = (n-1)d electrons + ns electrons',
      variables: '(n-1)d e⁻ = electrons in penultimace d subshell, ns e⁻ = valence s electrons',
      whenToUse: 'For transition elements ending in (n-1)d¹⁻¹⁰ ns⁰⁻² subshells (Groups 3 to 12).'
    }
  ],

  neetImportantPoints: [
    'Mendeleev predicted Eka-Aluminium (Gallium) and Eka-Silicon (Germanium). Beryllium atomic mass was corrected from 13.5 to 9 using valency 2 (BeCl₂).',
    'Henry Moseley used X-ray spectra (√ν = a(Z - b)) to prove atomic number Z is the fundamental atomic property.',
    'Group 12 elements (Zn, Cd, Hg) have fully filled d¹⁰ configurations in both ground state and oxidation states, so they are d-block elements but NOT transition metals according to strict IUPAC definition.',
    'All f-block elements (4f Lanthanoids Ce-Lu, 5f Actinoids Th-Lr) formally belong to GROUP 3 in the periodic table.',
    'IUPAC name for Z = 111 is Unununnium (Roentgenium Rg). In NEET 2020, matching Unununnium to Darmstadtium was tested as the INCORRECT match.',
    'Element Z = 114 (Flerovium, Fl) is in Group 14, Period 7, p-block.',
    'Element Z = 119 will be Ununennium (Uue), belonging to Period 8, Group 1 (s-block).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming Zn, Cd, and Hg are transition metals.',
      correctFact: 'Zn, Cd, and Hg belong to d-block (Group 12), but are NOT transition metals because their d-subshells are completely filled (d¹⁰) in elemental state as well as in common oxidation states (+2).',
      whyItMattersForNEET: 'Directly tested in NEET questions regarding transition element definitions.'
    },
    {
      commonConfusion: 'Confusing Group 11 (Coinage metals) or Group 12 with f-block positions.',
      correctFact: 'All 28 f-block inner transition elements (Lanthanoids 4f and Actinoids 5f) belong exclusively to Group 3.',
      whyItMattersForNEET: 'Prevents incorrect group assignment during periodic position questions.'
    },
    {
      commonConfusion: 'Forgetting the +12 addition in p-block group calculation.',
      correctFact: 'Group number for p-block elements is 12 + valence p-electrons (e.g., 4p³ → 12 + 3 = Group 15), NOT valence electrons alone.',
      whyItMattersForNEET: 'Common numerical trap when converting electronic configurations to group numbers.'
    }
  ],

  quickRevision: [
    'Mendeleev: Atomic mass basis | Eka-Aluminium = Gallium | Eka-Silicon = Germanium.',
    'Modern Periodic Law (Moseley): √ν = a(Z - b) → Properties are periodic functions of atomic number Z.',
    'Period = highest principal quantum number n.',
    'Block = subshell receiving the last electron.',
    'Group = s-block: valence s e⁻ | p-block: 12 + valence p e⁻ | d-block: (n-1)d + ns e⁻ | f-block: Group 3.',
    'IUPAC Z>100 Roots: 0=nil, 1=un, 2=bi, 3=tri, 4=quad, 5=pent, 6=hex, 7=sept, 8=oct, 9=enn.',
    'Z = 101 Unu (Md), Z = 103 Unt (Lr), Z = 106 Unh (Sg), Z = 111 Uuu (Rg), Z = 114 Uuq (Fl), Z = 119 Uue.'
  ],

  practiceQuestions: [
  {
    "id": "prac-pth-1",
    "question": "An element has the ground-state electronic configuration [Kr] 4d¹⁰ 5s² 5p³. What is its period, group, and block in the periodic table?",
    "options": [
      "Period 5, Group 15, p-block",
      "Period 5, Group 5, d-block",
      "Period 4, Group 15, p-block",
      "Period 5, Group 13, p-block"
    ],
    "correctAnswer": 0,
    "explanation": "Highest n = 5 (Period 5). Last electron enters 5p subshell (p-block). Group number for p-block = 12 + valence p electrons = 12 + 3 = 15 (Antimony, Sb).",
    "difficulty": "Easy",
    "conceptTested": "Locating element position from electronic configuration"
  },
  {
    "id": "prac-pth-2",
    "question": "Which of the following elements was predicted by Mendeleev as \"Eka-Aluminium\"?",
    "options": [
      "Gallium (Ga)",
      "Germanium (Ge)",
      "Scandium (Sc)",
      "Technetium (Tc)"
    ],
    "correctAnswer": 0,
    "explanation": "Mendeleev predicted Eka-Aluminium, which was later discovered as Gallium (Ga). Eka-Silicon was Germanium (Ge), and Eka-Boron was Scandium (Sc).",
    "difficulty": "Easy",
    "conceptTested": "Mendeleev predictions"
  },
  {
    "id": "prac-pth-3",
    "question": "What is the systematic IUPAC name and symbol for the undiscovered element with atomic number Z = 120?",
    "options": [
      "Unbinilium (Ubn)",
      "Ununnilium (Uun)",
      "Unbitrium (Ubt)",
      "Unbinium (Ubi)"
    ],
    "correctAnswer": 0,
    "explanation": "Z = 120 → un (1) + bi (2) + nil (0) + ium = Unbinilium. Symbol = Ubn (Group 2, Period 8, s-block).",
    "difficulty": "Medium",
    "conceptTested": "IUPAC nomenclature for Z > 100"
  },
  {
    "id": "prac-pth-4",
    "question": "Why are Zn, Cd, and Hg categorized as d-block elements but NOT transition metals according to IUPAC?",
    "options": [
      "They have completely filled (n-1)d¹⁰ subshells in ground state and common oxidation states",
      "They belong to group 12 instead of group 3",
      "They are soft liquids or low melting solids",
      "Their last electron enters the s subshell"
    ],
    "correctAnswer": 0,
    "explanation": "IUPAC defines transition elements as those having incompletely filled d-subshells in ground state or common oxidation states. Zn ([Ar]3d¹⁰4s²), Cd ([Kr]4d¹⁰5s²), and Hg ([Xe]4f¹⁴5d¹⁰6s²) have completely filled d¹⁰ configurations in both elemental states and +2 oxidation states.",
    "difficulty": "Medium",
    "conceptTested": "Definition of d-block vs transition metals"
  },
  {
    "id": "prac-chemperiodictablehistory-5",
    "question": "Regarding Modern Periodic Law & Table Layout, which of the following statements correctly resolves a common misconception about \"Assuming Zn, Cd, and Hg are transition metals.\"?",
    "options": [
      "Zn, Cd, and Hg belong to d-block (Group 12), but are NOT transition metals because their d-subshells are completely filled (d¹⁰) in elemental state as well as in common oxidation states (+2).",
      "Incorrect assumption: Assuming Zn, Cd, and Hg are transition metals.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Zn, Cd, and Hg belong to d-block (Group 12), but are NOT transition metals because their d-subshells are completely filled (d¹⁰) in elemental state as well as in common oxidation states (+2).. Directly tested in NEET questions regarding transition element definitions.",
    "difficulty": "Medium",
    "conceptTested": "Modern Periodic Law & Table Layout - Conceptual Clarity"
  },
  {
    "id": "prac-chemperiodictablehistory-6",
    "question": "Regarding Modern Periodic Law & Table Layout, which of the following statements correctly resolves a common misconception about \"Confusing Group 11 (Coinage metals) or Group 12 with f-block positions.\"?",
    "options": [
      "All 28 f-block inner transition elements (Lanthanoids 4f and Actinoids 5f) belong exclusively to Group 3.",
      "Incorrect assumption: Confusing Group 11 (Coinage metals) or Group 12 with f-block positions.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "All 28 f-block inner transition elements (Lanthanoids 4f and Actinoids 5f) belong exclusively to Group 3.. Prevents incorrect group assignment during periodic position questions.",
    "difficulty": "Medium",
    "conceptTested": "Modern Periodic Law & Table Layout - Conceptual Clarity"
  },
  {
    "id": "prac-chemperiodictablehistory-7",
    "question": "Regarding Modern Periodic Law & Table Layout, which of the following statements correctly resolves a common misconception about \"Forgetting the +12 addition in p-block group calculation.\"?",
    "options": [
      "Group number for p-block elements is 12 + valence p-electrons (e.g., 4p³ → 12 + 3 = Group 15), NOT valence electrons alone.",
      "Incorrect assumption: Forgetting the +12 addition in p-block group calculation.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Group number for p-block elements is 12 + valence p-electrons (e.g., 4p³ → 12 + 3 = Group 15), NOT valence electrons alone.. Common numerical trap when converting electronic configurations to group numbers.",
    "difficulty": "Medium",
    "conceptTested": "Modern Periodic Law & Table Layout - Conceptual Clarity"
  },
  {
    "id": "prac-chemperiodictablehistory-8",
    "question": "In the study of Modern Periodic Law & Table Layout, what is the exact definition and significance of \"Dobereiner's Triads\"?",
    "options": [
      "Groups of three chemically similar elements where the atomic mass of the middle element is approximately the arithmetic mean of the first and third elements.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Groups of three chemically similar elements where the atomic mass of the middle element is approximately the arithmetic mean of the first and third elements.. Classic examples: Li-Na-K (7, 23, 39), Ca-Sr-Ba (40, 88, 137), Cl-Br-I (35.5, 80, 127). Failed as it applied to very few elements.",
    "difficulty": "Easy",
    "conceptTested": "Dobereiner's Triads definition"
  },
  {
    "id": "prac-chemperiodictablehistory-9",
    "question": "In the study of Modern Periodic Law & Table Layout, what is the exact definition and significance of \"Newlands' Law of Octaves\"?",
    "options": [
      "When elements are arranged in increasing order of atomic masses, every eighth element exhibits physical and chemical properties similar to the first (analogous to musical octaves).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "When elements are arranged in increasing order of atomic masses, every eighth element exhibits physical and chemical properties similar to the first (analogous to musical octaves).. Worked only up to Calcium (Z = 20). Failed for heavier elements and did not accommodate noble gases.",
    "difficulty": "Easy",
    "conceptTested": "Newlands' Law of Octaves definition"
  },
  {
    "id": "prac-chemperiodictablehistory-10",
    "question": "In the study of Modern Periodic Law & Table Layout, what is the exact definition and significance of \"Mendeleev's Periodic Law\"?",
    "options": [
      "The physical and chemical properties of elements are periodic functions of their atomic masses.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The physical and chemical properties of elements are periodic functions of their atomic masses.. Mendeleev left gaps for undiscovered elements: Eka-Boron (Scandium), Eka-Aluminium (Gallium), Eka-Silicon (Germanium).",
    "difficulty": "Easy",
    "conceptTested": "Mendeleev's Periodic Law definition"
  }
],
  pyqs: [
    {
      id: 'pyq-pth-2022',
      year: 2022,
      exam: 'NEET UG 2022',
      question: 'The IUPAC name of an element with atomic number 119 is:',
      options: [
        'ununennium',
        'ununoctium',
        'ununsennium',
        'ununquadium'
      ],
      correctAnswer: 0,
      explanation: 'Atomic number 119 = 1 (un) + 1 (un) + 9 (enn) + ium = ununennium (symbol Uue).',
      difficulty: 'Easy',
      conceptTested: 'IUPAC nomenclature for elements Z > 100',
      ncertReference: 'Class 11 Chemistry, Chapter 3, Section 3.4',
      verified: true
    },
    {
      id: 'pyq-pth-2020',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'Identify the INCORRECT match between atomic number / IUPAC name and official IUPAC name:',
      options: [
        'Unnilunium (101) - Mendelevium',
        'Unniltrium (103) - Lawrencium',
        'Unnilhexium (106) - Seaborgium',
        'Unununnium (111) - Darmstadtium'
      ],
      correctAnswer: 3,
      explanation: 'Unununnium (Z = 111) is officially named Roentgenium (Rg). Darmstadtium is element 110 (Ununnilium, Uun). Thus option (4) is the incorrect match.',
      difficulty: 'Medium',
      conceptTested: 'IUPAC nomenclature and official names for Z > 100',
      ncertReference: 'Class 11 Chemistry, Chapter 3, Table 3.4',
      verified: true
    },
    {
      id: 'pyq-pth-2019',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'For the element with atomic number Z = 114, its position in the modern periodic table (group and period) is:',
      options: [
        'Group 14, Period 7',
        'Group 16, Period 7',
        'Group 14, Period 6',
        'Group 18, Period 7'
      ],
      correctAnswer: 0,
      explanation: 'Z = 114 has electronic configuration [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p². Highest n = 7 (Period 7). Valence subshell is 7p with 2 electrons → p-block. Group = 12 + 2 = 14 (Flerovium, Fl).',
      difficulty: 'Medium',
      conceptTested: 'Locating position of superheavy element Z = 114',
      ncertReference: 'Class 11 Chemistry, Chapter 3, Section 3.5',
      verified: true
    },
    {
      id: 'pyq-pth-2010',
      year: 2010,
      exam: 'AIPMT 2010',
      question: 'The outer electronic configuration of an element is 3d¹⁰ 4s² 4p³. To which block, group, and period does this element belong?',
      options: [
        'p-block, Group 15, Period 4',
        'd-block, Group 15, Period 4',
        'p-block, Group 13, Period 4',
        's-block, Group 5, Period 4'
      ],
      correctAnswer: 0,
      explanation: 'Highest principal quantum number n = 4 (Period 4). Last electron enters 4p subshell (p-block). Group number for p-block = 12 + valence p electrons = 12 + 3 = 15 (Arsenic, As).',
      difficulty: 'Easy',
      conceptTested: 'Group and period assignment from electronic configuration',
      ncertReference: 'Class 11 Chemistry, Chapter 3, Section 3.5',
      verified: true
    },
    {
      id: 'pyq-pth-2008',
      year: 2008,
      exam: 'AIPMT 2008',
      question: 'An element has valence shell configuration 3d³ 4s². The group number and block of this element are respectively:',
      options: [
        'Group 5, d-block',
        'Group 3, d-block',
        'Group 15, p-block',
        'Group 2, s-block'
      ],
      correctAnswer: 0,
      explanation: 'Differentiating electron enters 3d subshell (d-block). Group number for d-block = (n-1)d electrons + ns electrons = 3 + 2 = 5 (Vanadium, V, Period 4).',
      difficulty: 'Easy',
      conceptTested: 'd-block group determination',
      ncertReference: 'Class 11 Chemistry, Chapter 3, Section 3.5',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Modern Periodic Law & Table Layout',
    confidenceLabel: 'HIGH',
    confidenceText: 'Verified against 5 official NEET UG / AIPMT paper appearances (5 direct questions).',
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
      { year: 2022, exam: 'NEET UG 2022', directPyqCount: 1, marks: 4, questionType: 'IUPAC name for Z=119 (ununennium)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2020, exam: 'NEET UG 2020', directPyqCount: 1, marks: 4, questionType: 'Incorrect match of Z > 100 IUPAC names (Z=111)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2019, exam: 'NEET UG 2019', directPyqCount: 1, marks: 4, questionType: 'Group and period position for Z=114', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2010, exam: 'AIPMT 2010', directPyqCount: 1, marks: 4, questionType: 'p-block group & period identification', classification: 'Direct', verificationStatus: 'Verified (AIPMT)' },
      { year: 2008, exam: 'AIPMT 2008', directPyqCount: 1, marks: 4, questionType: 'd-block group assignment from 3d3 4s2', classification: 'Direct', verificationStatus: 'Verified (AIPMT)' }
    ],
    sourceInfo: {
      dataSource: 'Official NEET UG / AIPMT Archives & NCERT Class 11 Chemistry',
      analysisPeriod: '2008 – 2024 (15 Verified Papers)',
      directPyqsAnalyzedCount: 5,
      classificationMethod: 'Strict topic-level classification; chapter-level weightage was not used.',
      disclaimer: 'Historical frequency is not a prediction of the next NEET paper.'
    }
  }
};
