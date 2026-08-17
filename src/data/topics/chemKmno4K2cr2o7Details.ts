import { DetailedTopicContent } from '../../types/neet';
import { D_AND_F_BLOCK_DIAGRAMS } from '../dAndFBlock/dAndFBlockDiagrams';
import { D_AND_F_BLOCK_VERIFIED_PYQS } from '../dAndFBlock/dAndFBlockPyqs';
import { D_AND_F_BLOCK_CONCEPTS } from '../dAndFBlock/dAndFBlockTermsAndConcepts';
import { D_AND_F_BLOCK_TRAPS_AND_FORMULAS } from '../dAndFBlock/dAndFBlockTrapsAndFormulaSheet';

export const chemKmno4K2cr2o7Details: DetailedTopicContent = {
  topicId: 'chem-kmno4-k2cr2o7',
  topicName: 'Properties of Transition Metals & Important Compounds (KMnO₄, K₂Cr₂O₇, Catalysis & Alloys)',
  subject: 'Chemistry',
  class: 'Class 12',
  classification: 'Inorganic Chemistry',
  chapter: 'd- and f-Block Elements',

  whatIsThisTopic: 'Transition metals display unique physicochemical properties such as magnetic behavior, vibrant colors, catalytic activity, interstitial compound formation, and alloy synthesis. This topic provides an exhaustive, NEET-oriented breakdown of these characteristics alongside the industrial manufacture, redox reactions across different media, and analytical applications of Potassium Dichromate (K₂Cr₂O₇) and Potassium Permanganate (KMnO₄).',

  basicIdea: [
    'Magnetic Properties: Paramagnetism arises from unpaired d-electrons and is quantified by the spin-only magnetic moment formula μ = √[n(n+2)] BM. Diamagnetic species have all paired electrons (d⁰, d¹⁰).',
    'Origin of Colour: Aqueous transition ions absorb specific wavelengths of visible light to promote an electron between split d-orbitals (d-d transition) and transmit the complementary colour. Species with d⁰ (Sc³⁺, Ti⁴⁺) or d¹⁰ (Cu⁺, Zn²⁺) are COLOURLESS.',
    'Charge Transfer Exception: The intense purple colour of KMnO₄ (Mn⁷⁺, 3d⁰) and orange colour of K₂Cr₂O₇ (Cr⁶⁺, 3d⁰) are NOT due to d-d transitions, but arise from Ligand-to-Metal Charge Transfer (L → M CT).',
    'Catalytic Action: Transition metals and their oxides act as catalysts due to: (1) ability to adopt multiple oxidation states and form unstable intermediates; (2) provision of large surface areas with vacant d-orbitals for reactant adsorption.',
    'Interstitial Compounds: Formed when tiny non-metal atoms (H, C, N, B) occupy interstitial voids of the metal lattice. They are extremely hard, chemically inert, possess higher melting points than parent metals, and retain metallic conductivity.',
    'Potassium Dichromate (K₂Cr₂O₇): Prepared from chromite ore (FeCr₂O₄) via sodium chromate (Na₂CrO₄) and sodium dichromate (Na₂Cr₂O₇). Acts as a primary standard oxidizer in acidic medium (Cr⁶⁺ → Cr³⁺, n = 6, Equiv. Wt = M/6).',
    'Potassium Permanganate (KMnO₄): Prepared by alkaline fusion of pyrolusite (MnO₂) to green K₂MnO₄, followed by electrolytic oxidation. In acidic medium, Mn⁷⁺ → Mn²⁺ (n = 5); in neutral/alkaline medium, Mn⁷⁺ → MnO₂ (n = 3, oxidizes I⁻ to IO₃⁻); in strongly alkaline medium, Mn⁷⁺ → MnO₄²⁻ (n = 1).'
  ],

  importantTerms: [
    {
      term: 'Spin-Only Magnetic Moment',
      symbol: 'μ_s',
      definition: 'The effective magnetic moment of a transition metal ion considering only electron spin contributions.',
      formula: 'μ_s = \\sqrt{n(n+2)} \\text{ BM}',
      unit: 'Bohr Magneton (BM)',
      neetSignificance: 'Direct calculation tested in virtually every NEET exam.'
    },
    {
      term: 'd-d Transition',
      definition: 'The excitation of an electron from a lower energy split d-orbital (e.g. t₂g) to a higher energy split d-orbital (e.g. e_g) upon absorbing visible photon energy.',
      neetSignificance: 'Fundamental reason for colour in d¹ to d⁹ transition metal complexes.'
    },
    {
      term: 'Charge Transfer Spectrum',
      symbol: 'CT',
      definition: 'Electronic transition where an electron is temporarily transferred from a ligand orbital (O²⁻ 2p) to empty metal d-orbitals.',
      neetSignificance: 'Explains the intense colour of d⁰ species like KMnO₄ (purple) and K₂Cr₂O₇ (orange).'
    },
    {
      term: 'Interstitial Compound',
      definition: 'A non-stoichiometric compound formed when small atoms (H, C, N, B) are trapped within the interstitial holes of a transition metal lattice.',
      neetSignificance: 'High hardness, high m.p., metallic conductivity, and chemical inertness.'
    },
    {
      term: 'Chromyl Chloride Test',
      formula: 'CrO₂Cl₂',
      definition: 'A definitive analytical test for ionic chlorides using solid K₂Cr₂O₇ and conc. H₂SO₄, yielding red-orange vapours of chromyl chloride.',
      neetSignificance: 'Positive for ionic chlorides (NaCl, KCl); negative for covalent chlorides (HgCl₂, AgCl).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Magnetic Properties and Colour of Transition Metal Ions',
      paragraphs: [
        'MAGNETIC BEHAVIOR: Transition metal ions are predominantly paramagnetic due to the presence of unpaired d-electrons. When placed in a magnetic field, they are attracted. In 3d series ions, the orbital angular momentum is largely "quenched" by the electric field of surrounding ligands, so the magnetic moment is given by the spin-only formula: μ = √[n(n+2)] BM, where n is the number of unpaired electrons.',
        'ORIGIN OF COLOUR: In an isolated transition metal atom, all five d-orbitals are degenerate (equal energy). When ligands or water molecules approach, the crystal field splits the d-orbitals into lower energy (t₂g) and higher energy (e_g) levels. When visible light falls on the complex, an electron absorbs energy corresponding to Δ_o and jumps from t₂g to e_g (d-d transition). The transmitted light exhibits the complementary colour of the absorbed wavelength.',
        'COLOURLESS IONS (d⁰ and d¹⁰): Ions with d⁰ configuration (Sc³⁺, Ti⁴⁺, V⁵⁺) have no d-electrons to excite. Ions with d¹⁰ configuration (Cu⁺, Zn²⁺, Cd²⁺, Hg²⁺) have fully occupied d-orbitals with no vacant level to receive an excited electron. Hence, d⁰ and d¹⁰ ions are completely colourless.',
        'CHARGE TRANSFER EXCEPTION: KMnO₄ (Mn⁷⁺, 3d⁰) and K₂Cr₂O₇ (Cr⁶⁺, 3d⁰) have zero d-electrons, yet display deep purple and vivid orange colours. This occurs because of Ligand-to-Metal Charge Transfer (L → M CT), where an electron is briefly excited from an oxygen 2p orbital into an empty metal 3d orbital.'
      ],
      visual: {
        type: 'svg',
        svgContent: D_AND_F_BLOCK_DIAGRAMS.magneticAndColourVisual,
        caption: 'Figure 17.2: Spin-Only Magnetic Moments, d-d Crystal Field Splitting, and High-Yield NCERT Aqueous Ion Palette.'
      },
      tables: [
        {
          title: 'Table 17.3: Magnetic Moments and Typical Colors of 3d Aqueous Ions',
          headers: ['Ion', 'd-Configuration', 'Unpaired Electrons (n)', 'Magnetic Nature', 'Spin-Only μ (BM)', 'Aqueous Colour'],
          rows: [
            ['Sc³⁺ / Ti⁴⁺', '3d⁰', '0', 'Diamagnetic', '0.00 BM', 'Colourless'],
            ['Ti³⁺', '3d¹', '1', 'Paramagnetic', '1.73 BM', 'Purple'],
            ['V³⁺ / VO²⁺', '3d² / 3d¹', '2 / 1', 'Paramagnetic', '2.84 / 1.73 BM', 'Green / Blue'],
            ['Cr³⁺', '3d³', '3', 'Paramagnetic', '3.87 BM', 'Violet / Green'],
            ['Mn²⁺', '3d⁵', '5 (Max)', 'Paramagnetic', '5.92 BM', 'Pale Pink'],
            ['Fe²⁺', '3d⁶', '4', 'Paramagnetic', '4.90 BM', 'Pale Green'],
            ['Fe³⁺', '3d⁵', '5', 'Paramagnetic', '5.92 BM', 'Yellow / Brown'],
            ['Co²⁺', '3d⁷', '3', 'Paramagnetic', '3.87 BM', 'Pink'],
            ['Ni²⁺', '3d⁸', '2', 'Paramagnetic', '2.84 BM', 'Green'],
            ['Cu²⁺', '3d⁹', '1', 'Paramagnetic', '1.73 BM', 'Sky Blue'],
            ['Cu⁺ / Zn²⁺', '3d¹⁰', '0', 'Diamagnetic', '0.00 BM', 'Colourless']
          ]
        }
      ]
    },
    {
      heading: '2. Catalytic Properties, Interstitial Compounds, and Alloy Formation',
      paragraphs: [
        'CATALYTIC PROPERTIES: Transition metals and their compounds are renowned catalysts in industrial synthesis (e.g. V₂O₅ in Contact Process for H₂SO₄, finely divided Fe in Haber Process for NH₃, TiCl₄ + Al(C₂H₅)₃ as Ziegler-Natta catalyst for polythene, and Ni in hydrogenation of oils). This catalytic efficiency stems from:',
        '1. Variable Oxidation States: Transition metals easily switch between oxidation states, allowing them to form reactive intermediate complexes with reactants that lower the activation energy.',
        '2. Surface Adsorption: Solid metals provide large surface areas with vacant d-orbitals where reactant molecules form temporary coordinate bonds, weakening their internal bonds and increasing local concentration.',
        'INTERSTITIAL COMPOUNDS: Small non-metal atoms like Hydrogen, Boron, Carbon, and Nitrogen fit into the empty interstitial spaces of transition metal crystal lattices without changing the lattice geometry (e.g. TiC, Fe₃H, Mn₄N, VH₀.₅₆). Characteristics:',
        '• Very hard (some borides approach diamond in hardness).',
        '• Very high melting points (higher than the pure parent metals).',
        '• Retain metallic thermal and electrical conductivity.',
        '• Chemically INERT (unreactive towards acids and bases).',
        'ALLOY FORMATION: Transition metals readily form substitutional solid solutions (alloys) with one another because their atomic radii differ by less than 15% (Hume-Rothery rule). In the molten state, atoms of one transition metal easily replace atoms of another in the crystal lattice. Examples include Brass (Cu 60-80% + Zn 20-40%), Bronze (Cu 88% + Sn 12%), and Stainless Steel (Fe + Cr + Ni).'
      ]
    },
    {
      heading: '3. Potassium Dichromate (K₂Cr₂O₇) — Manufacture, pH Equilibrium & Redox Reactions',
      paragraphs: [
        'MANUFACTURE FROM CHROMITE ORE (FeCr₂O₄):',
        '• Step 1 (Fusion): Finely powdered chromite ore is fused with sodium carbonate and excess air in a reverberatory furnace: 4 FeCr₂O₄ + 8 Na₂CO₃ + 7 O₂ → 8 Na₂CrO₄ (Yellow solution) + 2 Fe₂O₃ + 8 CO₂↑.',
        '• Step 2 (Acidification): The yellow solution of sodium chromate is filtered, acidified with concentrated H₂SO₄ to convert chromate into orange sodium dichromate: 2 Na₂CrO₄ + 2 H⁺ → Na₂Cr₂O₇ (Orange) + 2 Na⁺ + H₂O.',
        '• Step 3 (Crystallization): Sodium dichromate is treated with KCl. Potassium dichromate (K₂Cr₂O₇) is less soluble than Na₂Cr₂O₇ and precipitates out as orange crystals: Na₂Cr₂O₇ + 2 KCl → K₂Cr₂O₇↓ + 2 NaCl.',
        'pH-DEPENDENT CHROMATE-DICHROMATE EQUILIBRIUM: In aqueous solution, chromate ion (CrO₄²⁻, yellow, tetrahedral) and dichromate ion (Cr₂O₇²⁻, orange, two shared tetrahedra with a Cr-O-Cr bridge angle of 126°) exist in dynamic equilibrium: 2 CrO₄²⁻ + 2 H⁺ ⇌ Cr₂O₇²⁻ + H₂O. Lowering pH (<7, acidic) shifts equilibrium to orange Cr₂O₇²⁻; raising pH (>7, basic) shifts equilibrium to yellow CrO₄²⁻.',
        'OXIDIZING ACTION IN ACIDIC MEDIUM: In acidic solution, Cr₂O₇²⁻ is a powerful oxidizing agent (E° = +1.33 V): Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ (Green) + 7 H₂O. (n-factor = 6, Equiv. Wt = M / 6 = 294.2 / 6 = 49.03 g/eq).',
        '• Fe²⁺ → Fe³⁺: Cr₂O₇²⁻ + 14 H⁺ + 6 Fe²⁺ → 2 Cr³⁺ + 6 Fe³⁺ + 7 H₂O.',
        '• I⁻ → I₂: Cr₂O₇²⁻ + 14 H⁺ + 6 I⁻ → 2 Cr³⁺ + 3 I₂ + 7 H₂O.',
        '• H₂S → S↓: Cr₂O₇²⁻ + 8 H⁺ + 3 H₂S → 2 Cr³⁺ + 3 S↓ (turbid) + 7 H₂O.',
        '• Sn²⁺ → Sn⁴⁺: Cr₂O₇²⁻ + 14 H⁺ + 3 Sn²⁺ → 2 Cr³⁺ + 3 Sn⁴⁺ + 7 H₂O.',
        'CHROMYL CHLORIDE TEST: When solid K₂Cr₂O₇ is heated with any ionic chloride (e.g. NaCl) and conc. H₂SO₄, deep red-orange fumes of chromyl chloride (CrO₂Cl₂) evolve: K₂Cr₂O₇ + 4 NaCl + 6 H₂SO₄ → 2 CrO₂Cl₂↑ + 2 KHSO₄ + 4 NaHSO₄ + 3 H₂O. When passed into NaOH, it gives a yellow solution of Na₂CrO₄, which on treatment with lead acetate gives a yellow precipitate of PbCrO₄.'
      ],
      visual: {
        type: 'svg',
        svgContent: D_AND_F_BLOCK_DIAGRAMS.kmno4K2cr2o7ReactionFlow,
        caption: 'Figure 17.3: Industrial Synthesis Pathways and Comparative Redox Media Actions for K₂Cr₂O₇ and KMnO₄.'
      }
    },
    {
      heading: '4. Potassium Permanganate (KMnO₄) — Preparation & Redox in 3 Different Media',
      paragraphs: [
        'MANUFACTURE FROM PYROLUSITE (MnO₂):',
        '• Step 1 (Alkaline Fusion): Black pyrolusite ore (MnO₂) is fused with KOH in the presence of atmospheric oxygen or KNO₃: 2 MnO₂ + 4 KOH + O₂ → 2 K₂MnO₄ (Dark green potassium manganate) + 2 H₂O.',
        '• Step 2 (Electrolytic Oxidation): The green manganate solution is electrolyzed in an alkaline medium. At the anode: MnO₄²⁻ → MnO₄⁻ (Deep purple) + e⁻. In the laboratory, chemical oxidation via bubbling CO₂ or chlorine also disproportionates manganate: 3 MnO₄²⁻ + 4 H⁺ → 2 MnO₄⁻ + MnO₂↓ + 2 H₂O.',
        'REDOX ACTION ACROSS THREE DIFFERENT MEDIA (CRITICAL NEET COMPARISON):',
        'A. Acidic Medium (n = 5, Equiv. Wt = M / 5 = 158 / 5 = 31.6): MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ (Pale pink/colourless) + 4 H₂O (E° = +1.51 V).',
        '  - Oxidizes Fe²⁺ to Fe³⁺, C₂O₄²⁻ (oxalate) to CO₂, I⁻ to I₂, H₂S to S, and SO₃²⁻ to SO₄²⁻.',
        '  - NOTE: Must be acidified with dilute H₂SO₄, NEVER with HCl (as KMnO₄ oxidizes Cl⁻ to Cl₂) or HNO₃ (as HNO₃ is itself an oxidizing agent).',
        'B. Neutral or Faintly Alkaline Medium (Bayer\'s Reagent, n = 3, Equiv. Wt = M / 3 = 158 / 3 = 52.67): MnO₄⁻ + 2 H₂O + 3 e⁻ → MnO₂↓ (Brown solid) + 4 OH⁻.',
        '  - CRITICAL NEET TRAP: Oxidizes Iodide (I⁻) to Iodate (IO₃⁻), NOT I₂! (2 MnO₄⁻ + H₂O + I⁻ → 2 MnO₂ + 2 OH⁻ + IO₃⁻).',
        '  - Oxidizes Thiosulphate (S₂O₃²⁻) to Sulphate (SO₄²⁻): 8 MnO₄⁻ + 3 S₂O₃²⁻ + H₂O → 8 MnO₂ + 6 SO₄²⁻ + 2 OH⁻.',
        'C. Strongly Alkaline Medium (n = 1, Equiv. Wt = M / 1 = 158): MnO₄⁻ + e⁻ → MnO₄²⁻ (Dark green manganate ion).'
      ],
      tables: [
        {
          title: 'Table 17.4: Comprehensive Comparison of KMnO₄ and K₂Cr₂O₇ for NEET UG',
          headers: ['Parameter', 'Potassium Permanganate (KMnO₄)', 'Potassium Dichromate (K₂Cr₂O₇)'],
          rows: D_AND_F_BLOCK_CONCEPTS.kmno4VsK2cr2o7Comparison.map(item => [
            item.property,
            item.kmno4,
            item.k2cr2o7
          ])
        }
      ]
    }
  ],

  formulae: [
    {
      title: 'Equivalent Weight in Redox Titrations',
      formula: 'E = \\frac{\\text{Molar Mass } (M)}{n\\text{-factor}}',
      variables: 'n-factor = number of electrons gained or lost per formula unit in the redox half-reaction',
      whenToUse: 'Calculating normality and equivalent weights of KMnO₄ and K₂Cr₂O₇ in acidic, neutral, or alkaline titrations.',
      calculationExample: {
        problem: 'Calculate the equivalent weight of KMnO₄ in (a) acidic medium and (b) neutral medium. (Molar mass of KMnO₄ = 158 g/mol).',
        given: 'M = 158 g/mol; Acidic: Mn⁷⁺ → Mn²⁺ (5 e⁻); Neutral: Mn⁷⁺ → Mn⁴⁺ (3 e⁻)',
        stepByStep: [
          '1. In acidic medium: n = 5 ⇒ E = 158 / 5 = 31.6 g/eq.',
          '2. In neutral medium: n = 3 ⇒ E = 158 / 3 = 52.67 g/eq.'
        ],
        answer: 'Acidic: 31.6 g/eq; Neutral: 52.67 g/eq.'
      }
    }
  ],

  neetImportantPoints: [
    'KMnO₄ and K₂Cr₂O₇ owe their deep colours to Ligand-to-Metal Charge Transfer (L → M CT), NOT d-d transitions (both central ions are 3d⁰).',
    'In neutral/faintly alkaline medium, KMnO₄ oxidizes I⁻ to Iodate (IO₃⁻), whereas in acidic medium it oxidizes I⁻ to Iodine (I₂).',
    'K₂Cr₂O₇ is a primary standard because it is stable and non-hygroscopic; KMnO₄ is a secondary standard because it photochemically decomposes.',
    'HCl cannot be used to acidify KMnO₄ because KMnO₄ oxidizes Cl⁻ to Cl₂ gas.',
    'Chromyl chloride test is positive for ionic chlorides (NaCl, KCl, CaCl₂) but negative for covalent chlorides (HgCl₂, AgCl, PbCl₂).',
    'Interstitial compounds (TiC, Fe₃H) are chemically inert, hard, have high melting points, and retain electrical conductivity.',
    'In aqueous solution, chromate (CrO₄²⁻, yellow) and dichromate (Cr₂O₇²⁻, orange) interconvert reversibly depending on pH: 2 CrO₄²⁻ + 2 H⁺ ⇌ Cr₂O₇²⁻ + H₂O.'
  ],

  commonConfusions: [
    {
      misconception: 'Assuming the deep purple colour of KMnO₄ is caused by d-d transitions.',
      correction: 'Mn⁷⁺ has 3d⁰ configuration (zero d-electrons). Colour is caused by Charge Transfer from oxygen (O²⁻ 2p) to empty Mn 3d orbitals.'
    },
    {
      misconception: 'Assuming that adding acid turns potassium dichromate solution yellow.',
      correction: 'Acid (low pH) shifts equilibrium to the orange dichromate ion (Cr₂O₇²⁻). Alkali (high pH) turns it yellow (CrO₄²⁻).'
    },
    {
      misconception: 'Believing interstitial compounds are unstable and chemically reactive.',
      correction: 'Interstitial compounds are chemically inert and extremely stable with very high melting points.'
    }
  ],

  quickRevision: [
    'Spin-only formula: μ = √[n(n+2)] BM. Max at Mn²⁺/Fe³⁺ (5.92 BM).',
    'd⁰ and d¹⁰ ions are colourless (Sc³⁺, Ti⁴⁺, Cu⁺, Zn²⁺).',
    'L → M Charge Transfer: KMnO₄ (purple) and K₂Cr₂O₇ (orange).',
    'K₂Cr₂O₇: Prepared from chromite ore (FeCr₂O₄); n = 6 in acidic medium (E = M/6).',
    'KMnO₄: Prepared from pyrolusite (MnO₂); n = 5 in acid (E = M/5), n = 3 in neutral (E = M/3), n = 1 in strong base (E = M/1).',
    'Iodide oxidation by KMnO₄: Acidic → I₂; Neutral/Bayer\'s → IO₃⁻.',
    'Chromyl chloride test gives red-orange CrO₂Cl₂ vapours with ionic chlorides.'
  ],

  practiceQuestions: [
    {
      id: 'pq-kmno4-1',
      question: 'Which of the following compounds does NOT give a positive chromyl chloride test?',
      options: [
        'NaCl',
        'KCl',
        'HgCl₂',
        'CaCl₂'
      ],
      correctAnswer: 2,
      explanation: 'Chromyl chloride test is given ONLY by ionic chlorides that readily furnish chloride ions in solution. Mercuric chloride (HgCl₂) is predominantly covalent and does not ionize to release free Cl⁻ ions, so it does not form CrO₂Cl₂. Similarly, AgCl and PbCl₂ do not respond to this test.',
      marks: 4
    },
    {
      id: 'pq-kmno4-2',
      question: 'How many moles of acidified KMnO₄ are required to completely oxidize 1 mole of ferrous oxalate (FeC₂O₄)?',
      options: [
        '0.6 moles (3/5 mole)',
        '1.0 mole',
        '0.4 moles (2/5 mole)',
        '0.2 moles (1/5 mole)'
      ],
      correctAnswer: 0,
      explanation: 'In 1 mole of FeC₂O₄:\n• Fe²⁺ → Fe³⁺ + e⁻ (1 electron lost)\n• C₂O₄²⁻ → 2 CO₂ + 2 e⁻ (2 electrons lost)\nTotal electrons lost per mole of FeC₂O₄ = 1 + 2 = 3 electrons (n-factor of FeC₂O₄ = 3).\n\nFor KMnO₄ in acidic medium:\nMnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O (n-factor of KMnO₄ = 5).\n\nEquating equivalents: Equivalents of KMnO₄ = Equivalents of FeC₂O₄\nMoles of KMnO₄ × 5 = 1 mole × 3 ⇒ Moles of KMnO₄ = 3/5 = 0.6 moles.',
      marks: 4
    }
  ],

  pyqs: D_AND_F_BLOCK_VERIFIED_PYQS.filter(q => q.topicId === 'chem-kmno4-k2cr2o7'),

  neetMarksPotential: {
    confidenceLabel: 'HIGH',
    confidenceText: 'KMnO₄ and K₂Cr₂O₇ redox equations, n-factor calculations, and interstitial/alloy properties are core high-yield recurring NEET questions.',
    totalAnalyzedPapers: 10,
    papersWithDirectPyqs: 8,
    totalDirectPyqs: 12,
    totalHistoricalMarks: 48,
    avgDirectMarksPerPaper: 4.8,
    weightagePercentage: 3.0,
    expectedQuestionsCount: 1,
    difficultyRating: 'Moderate',
    highYieldStatus: true
  }
};
