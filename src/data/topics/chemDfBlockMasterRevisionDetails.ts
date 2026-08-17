import { DetailedTopicContent } from '../../types/neet';
import { D_AND_F_BLOCK_DIAGRAMS } from '../dAndFBlock/dAndFBlockDiagrams';
import { D_AND_F_BLOCK_VERIFIED_PYQS } from '../dAndFBlock/dAndFBlockPyqs';
import { D_AND_F_BLOCK_CONCEPTS } from '../dAndFBlock/dAndFBlockTermsAndConcepts';
import { D_AND_F_BLOCK_TRAPS_AND_FORMULAS } from '../dAndFBlock/dAndFBlockTrapsAndFormulaSheet';

export const chemDfBlockMasterRevisionDetails: DetailedTopicContent = {
  topicId: 'chem-df-block-master-revision',
  topicName: 'd- and f-Block Elements: NEET Master Revision — Trends, Exceptions, Reactions & PYQs',
  subject: 'Chemistry',
  class: 'Class 12',
  classification: 'Inorganic Chemistry',
  chapter: 'd- and f-Block Elements',

  whatIsThisTopic: 'The ultimate synthesis and revision module for Class 12 Chapter 17 (d- and f-Block Elements) tailored specifically for NEET UG 2026. This module consolidates all periodic trends, anomalous electronic configurations, magnetic moment calculations, industrial syntheses, redox reaction equations of KMnO₄ and K₂Cr₂O₇ across all media, Lanthanoid Contraction consequences, 25+ Common NEET Traps, the complete Exception Bank, and a master set of authentic verified PYQs.',

  basicIdea: [
    'Complete Periodic Trend Mastery: 3d series configurations (Cr: 3d⁵ 4s¹, Cu: 3d¹⁰ 4s¹), atomic radii plateau (Fe-Co-Ni), ionization energies, and oxidation state progression (Mn max +7).',
    'Electrode Potential Thermodynamics: E°(Cu²⁺/Cu) = +0.34 V is the only positive reduction potential in the 3d series; Cu²⁺(aq) is more stable than Cu⁺(aq) due to superior hydration enthalpy.',
    'Magnetic & Optical Properties: Spin-only moment μ = √[n(n+2)] BM; d-d transitions impart colour to d¹-d⁹ ions; d⁰ and d¹⁰ ions are colourless. KMnO₄ and K₂Cr₂O₇ derive their intense colour from Ligand-to-Metal Charge Transfer (L → M CT).',
    'Redox Chemistry of KMnO₄ & K₂Cr₂O₇: K₂Cr₂O₇ has n = 6 in acidic medium (E = M/6). KMnO₄ has n = 5 in acidic medium (E = M/5), n = 3 in neutral/faintly alkaline medium (E = M/3, oxidizes I⁻ to IO₃⁻), and n = 1 in strong base (E = M/1).',
    'Lanthanoid Contraction & Actinoids: Poor shielding by 4f electrons causes the twin element phenomenon (Zr ≈ Hf = 160 pm) and decreases hydroxide basicity (La(OH)₃ > Lu(OH)₃). Actinoids exhibit broad oxidation states (+3 to +7) due to comparable 5f/6d/7s energies.',
    'Mischmetal: ~95% Lanthanoids (~40-50% Ce) + ~5% Fe used in lighter flints and tracer munitions.'
  ],

  importantTerms: [
    {
      term: 'Bohr Magneton (BM)',
      symbol: 'μ_B',
      definition: 'The fundamental atomic unit of magnetic dipole moment, defined as eh / 4πm ≈ 9.274 × 10⁻²⁴ J/T.',
      formula: 'μ = \\sqrt{n(n+2)} \\text{ BM}',
      neetSignificance: 'Standard unit for calculating paramagnetism in transition and inner-transition ions.'
    },
    {
      term: 'Charge Transfer Transition',
      symbol: 'L → M CT',
      definition: 'Optical transition involving electron transfer between molecular orbitals with predominant ligand (oxygen 2p) and metal (3d) character.',
      neetSignificance: 'Explains the purple colour of KMnO₄ and orange colour of K₂Cr₂O₇ despite zero d-electrons.'
    },
    {
      term: 'Twin Elements (Zr-Hf Pair)',
      definition: 'Pairs of elements in the 4d and 5d series of the same periodic group that possess virtually identical atomic and ionic radii due to Lanthanoid Contraction.',
      neetSignificance: 'Zr (160 pm) and Hf (159 pm) occur together in minerals and are extremely difficult to separate.'
    },
    {
      term: 'Disproportionation of Manganate',
      formula: '3 \\text{MnO}_4^{2-} + 4 \\text{H}^+ \\rightarrow 2 \\text{MnO}_4^- + \\text{MnO}_2 + 2 \\text{H}_2\\text{O}',
      definition: 'The spontaneous self-redox of green manganate (Mn⁶⁺) in acidic or neutral solution to form purple permanganate (Mn⁷⁺) and brown MnO₂ (Mn⁴⁺).',
      neetSignificance: 'Core chemical conversion reaction in KMnO₄ synthesis.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Master Synthesis: 3d Transition Trends & Anomaly Bank',
      paragraphs: [
        'The 3d transition series spans Scandium (Z=21) to Zinc (Z=30). Due to the progressive filling of the 3d subshell, elements display rich structural, magnetic, and redox behavior.',
        '1. CONFIGURATION ANOMALIES: Cr ([Ar] 3d⁵ 4s¹) and Cu ([Ar] 3d¹⁰ 4s¹) deviate from the Aufbau order due to maximized exchange energy (K = 10 for d⁵) and spherical charge symmetry.',
        '2. IONIZATION ORDER: When metals ionize, 4s electrons are removed before 3d electrons (e.g. Fe → Fe²⁺ + 2e⁻ loses 4s² first). High IE₂ for Cr and Cu; high IE₃ for Mn and Zn.',
        '3. ATOMIC RADII: Sc → Cr decreases sharply (Z_eff increases); Mn → Ni remains nearly constant (~125-128 pm) because 3d electron screening balances increasing nuclear charge; Cu → Zn expands slightly due to electron-electron repulsion among paired 3d¹⁰ electrons.',
        '4. OXIDATION STATES: Mn exhibits the maximum range of oxidation states (+2, +3, +4, +5, +6, +7). Early elements show stable maximum group oxidation states (Sc³⁺, Ti⁴⁺, V⁵⁺), while late elements favor +2 (Fe²⁺, Co²⁺, Ni²⁺, Cu²⁺, Zn²⁺).',
        '5. POSITIVE E°(Cu²⁺/Cu) = +0.34 V: Copper cannot displace H₂ gas from non-oxidizing acids because its high sublimation and ionization energies are not compensated by hydration enthalpy.'
      ],
      visual: {
        type: 'svg',
        svgContent: D_AND_F_BLOCK_DIAGRAMS.dfBlockMasterMindMap,
        caption: 'Figure 17.5: Master Mind Map connecting all 4 sub-domains of d- and f-Block Chemistry for NEET UG 2026.'
      }
    },
    {
      heading: '2. Complete Redox Reaction Master Matrix (KMnO₄ & K₂Cr₂O₇)',
      paragraphs: [
        'Both KMnO₄ and K₂Cr₂O₇ are premier laboratory oxidizers with distinctive reaction stoichiometries across different media:',
        '• POTASSIUM DICHROMATE (K₂Cr₂O₇) in Acidic Medium (n = 6, Equiv. Wt = M/6 = 49.03):',
        '  - Fundamental half-reaction: Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ (Green) + 7 H₂O.',
        '  - Oxidizes Fe²⁺ → Fe³⁺ (6 Fe²⁺ per Cr₂O₇²⁻)',
        '  - Oxidizes I⁻ → I₂ (6 I⁻ per Cr₂O₇²⁻)',
        '  - Oxidizes H₂S → S↓ (3 H₂S per Cr₂O₇²⁻)',
        '  - Oxidizes SO₂ → SO₄²⁻ (3 SO₂ per Cr₂O₇²⁻)',
        '  - Oxidizes Sn²⁺ → Sn⁴⁺ (3 Sn²⁺ per Cr₂O₇²⁻)',
        '• POTASSIUM PERMANGANATE (KMnO₄) Across 3 Media:',
        '  1. Acidic Medium (n = 5, Equiv. Wt = M/5 = 31.6): MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ (Pale pink) + 4 H₂O.',
        '     - Fe²⁺ → Fe³⁺ | C₂O₄²⁻ → 2 CO₂ | I⁻ → I₂ | H₂S → S↓ | SO₃²⁻ → SO₄²⁻ | NO₂⁻ → NO₃⁻.',
        '     - Note: Must be acidified with dilute H₂SO₄, NEVER HCl or HNO₃.',
        '  2. Neutral / Faintly Alkaline Medium (n = 3, Equiv. Wt = M/3 = 52.67): MnO₄⁻ + 2 H₂O + 3 e⁻ → MnO₂↓ + 4 OH⁻.',
        '     - CRITICAL: Oxidizes I⁻ to Iodate (IO₃⁻): 2 MnO₄⁻ + H₂O + I⁻ → 2 MnO₂ + 2 OH⁻ + IO₃⁻.',
        '     - Oxidizes S₂O₃²⁻ to SO₄²⁻: 8 MnO₄⁻ + 3 S₂O₃²⁻ + H₂O → 8 MnO₂ + 6 SO₄²⁻ + 2 OH⁻.',
        '  3. Strongly Alkaline Medium (n = 1, Equiv. Wt = M/1 = 158): MnO₄⁻ + e⁻ → MnO₄²⁻ (Dark green).'
      ]
    },
    {
      heading: '3. 25+ Common NEET Traps, Misconceptions & Root-Cause Fixes',
      paragraphs: [
        'Every year, lakhs of NEET aspirants lose marks on specific, predictable trick questions in d- and f-Block chemistry. Review the comprehensive trap matrix below to bulletproof your score:'
      ],
      tables: [
        {
          title: 'Table 17.7: High-Yield Trap Matrix for d- and f-Block Chemistry',
          headers: ['#', 'Topic / Concept', 'Common Wrong Assumption', 'Exact NCERT Concept & NEET Rule'],
          rows: D_AND_F_BLOCK_TRAPS_AND_FORMULAS.commonTraps.map((t, idx) => [
            String(idx + 1),
            t.topic,
            t.wrongAssumption,
            t.correctConcept
          ])
        }
      ]
    },
    {
      heading: '4. Must-Know Reaction Bank with Balanced Equations',
      paragraphs: [
        'A comprehensive repository of all mandatory NCERT chemical equations for d- and f-block elements:'
      ],
      tables: [
        {
          title: 'Table 17.8: High-Yield Inorganic Reaction Bank (K₂Cr₂O₇ & KMnO₄)',
          headers: ['Category', 'Reaction Name', 'Balanced Equation', 'NEET Significance'],
          rows: [
            ...D_AND_F_BLOCK_TRAPS_AND_FORMULAS.mustKnowReactions[0].reactions.map(r => [
              'K₂Cr₂O₇',
              r.name,
              r.equation,
              r.significance
            ]),
            ...D_AND_F_BLOCK_TRAPS_AND_FORMULAS.mustKnowReactions[1].reactions.map(r => [
              'KMnO₄',
              r.name,
              r.equation,
              r.significance
            ])
          ]
        }
      ]
    }
  ],

  formulae: [
    {
      title: 'Spin-Only Magnetic Moment Formula',
      formula: 'μ_s = \\sqrt{n(n+2)} \\text{ BM}',
      variables: 'n = number of unpaired electrons in the d-subshell',
      unit: 'Bohr Magneton (BM)',
      whenToUse: 'Calculating magnetic dipole moments of transition and lanthanoid ions.'
    },
    {
      title: 'Equivalent Weight Formula in Redox',
      formula: 'E = \\frac{M}{n\\text{-factor}}',
      description: 'Acidic K₂Cr₂O₇: n=6 (M/6=49.03); Acidic KMnO₄: n=5 (M/5=31.6); Neutral KMnO₄: n=3 (M/3=52.67); Alkaline KMnO₄: n=1 (M/1=158).',
      whenToUse: 'Volumetric redox titration calculations.'
    },
    {
      title: 'Chromate-Dichromate pH Equilibrium',
      formula: '2 \\text{CrO}_4^{2-} \\text{ (Yellow)} + 2 \\text{H}^+ \\rightleftharpoons \\text{Cr}_2\\text{O}_7^{2-} \\text{ (Orange)} + \\text{H}_2\\text{O}',
      description: 'Acidic medium favors orange dichromate; basic medium favors yellow chromate.',
      whenToUse: 'Predicting colour changes and equilibrium shifts.'
    }
  ],

  neetImportantPoints: [
    'Zn, Cd, and Hg are NOT transition elements because they have full d¹⁰ shells in both atom and +2 state.',
    'Copper is the ONLY 3d metal with positive E°(M²⁺/M) = +0.34 V and cannot liberate H₂ from non-oxidizing acids.',
    'Cu²⁺(aq) is more stable than Cu⁺(aq) in water due to higher hydration enthalpy compensating for IE₂.',
    'KMnO₄ (purple) and K₂Cr₂O₇ (orange) have 3d⁰ central metals; their colours are caused by Ligand-to-Metal Charge Transfer (L → M CT).',
    'In neutral/faintly alkaline medium, KMnO₄ oxidizes I⁻ to Iodate (IO₃⁻), NOT I₂.',
    'Zr (160 pm) and Hf (159 pm) have identical radii due to Lanthanoid Contraction.',
    'Basicity decreases: La(OH)₃ > Ce(OH)₃ > ... > Lu(OH)₃.',
    'Ce⁴⁺ is a powerful oxidizing agent (E° = +1.74 V); Eu²⁺ is a strong reducing agent.',
    'Promethium (Pm, Z = 61) is the only radioactive lanthanoid; ALL actinoids are radioactive.',
    'Actinoids show wide oxidation states (+3 to +7 in Np and Pu) due to small energy gap between 5f, 6d, and 7s orbitals.'
  ],

  commonConfusions: [
    {
      misconception: 'Assuming KMnO₄ can be acidified with dilute HCl for titrations.',
      correction: 'KMnO₄ oxidizes Cl⁻ to Cl₂ gas, ruining the titration. Dilute H₂SO₄ is the only appropriate acid.'
    },
    {
      misconception: 'Believing that Lu(OH)₃ is more basic than La(OH)₃.',
      correction: 'Due to Lanthanoid contraction, smaller Lu³⁺ polarizes OH⁻ more strongly (Fajan\'s rule), making Lu(OH)₃ the LEAST basic hydroxide.'
    },
    {
      misconception: 'Assuming covalent chlorides give a positive chromyl chloride test.',
      correction: 'Covalent chlorides (HgCl₂, AgCl, PbCl₂) do NOT give the chromyl chloride test; only ionic chlorides (NaCl, KCl) do.'
    }
  ],

  quickRevision: [
    '1. 3d Configurations: Cr = 3d⁵ 4s¹, Cu = 3d¹⁰ 4s¹; Zn/Cd/Hg = d¹⁰ (non-transition).',
    '2. Radii: Sc→Cr drops, Fe→Ni plateau, Cu→Zn slight increase; Zr ≈ Hf (160 pm).',
    '3. Redox: E°(Cu²⁺/Cu) = +0.34 V (only positive 3d). Cu²⁺(aq) > Cu⁺(aq) due to hydration energy.',
    '4. Magnetism: μ = √[n(n+2)] BM; Max at Mn²⁺/Fe³⁺ (5.92 BM). d⁰ and d¹⁰ are diamagnetic & colourless.',
    '5. Colour: d-d transitions in d¹-d⁹; Charge Transfer (L→M CT) in KMnO₄ & K₂Cr₂O₇.',
    '6. K₂Cr₂O₇: From chromite ore (FeCr₂O₄); n = 6 in acid (E = M/6); 2 CrO₄²⁻ + 2 H⁺ ⇌ Cr₂O₇²⁻ + H₂O.',
    '7. KMnO₄: From pyrolusite (MnO₂); n = 5 in acid (E = M/5); n = 3 in neutral (I⁻ → IO₃⁻); n = 1 in base.',
    '8. Lanthanoids: +3 common; Ce⁴⁺ oxidizer, Eu²⁺ reducer; La(OH)₃ > Lu(OH)₃ basicity; Mischmetal (95% Ln + 5% Fe).',
    '9. Actinoids: All radioactive; +3 to +7 OS; Actinoid contraction > Lanthanoid contraction.'
  ],

  practiceQuestions: [
    {
      id: 'pq-master-1',
      question: 'Which one of the following pairs of ions are both diamagnetic and colourless in aqueous solution?',
      options: [
        'Ti⁴⁺ and Cu⁺',
        'Ti³⁺ and Cu²⁺',
        'Cr³⁺ and Fe³⁺',
        'Mn²⁺ and Zn²⁺'
      ],
      correctAnswer: 0,
      explanation: '• Ti (Z=22) is [Ar] 3d² 4s² ⇒ Ti⁴⁺ is [Ar] 3d⁰ (zero d-electrons, n = 0 ⇒ Diamagnetic and Colourless).\n• Cu (Z=29) is [Ar] 3d¹⁰ 4s¹ ⇒ Cu⁺ is [Ar] 3d¹⁰ (fully filled d-subshell, n = 0 ⇒ Diamagnetic and Colourless).\nAll other pairs contain ions with partially filled d-orbitals (e.g. Ti³⁺ is 3d¹, Cu²⁺ is 3d⁹, Cr³⁺ is 3d³, Fe³⁺ is 3d⁵, Mn²⁺ is 3d⁵) which are paramagnetic and colored.',
      marks: 4
    },
    {
      id: 'pq-master-2',
      question: 'When acidified potassium dichromate is treated with H₂S, what is observed?',
      options: [
        'The solution turns green and a milky white/pale yellow turbidity of sulphur is formed',
        'The solution turns dark purple',
        'No reaction occurs',
        'A brown precipitate of CrO₂ is formed'
      ],
      correctAnswer: 0,
      explanation: 'Acidified K₂Cr₂O₇ oxidizes H₂S to elemental sulphur:\nCr₂O₇²⁻ (Orange) + 8 H⁺ + 3 H₂S → 2 Cr³⁺ (Green) + 3 S↓ (milky white/yellow turbidity) + 7 H₂O.\nThe orange solution turns green due to Cr³⁺ and gets turbid due to colloidal sulphur precipitation.',
      marks: 4
    }
  ],

  pyqs: D_AND_F_BLOCK_VERIFIED_PYQS,

  neetMarksPotential: {
    confidenceLabel: 'HIGH',
    confidenceText: 'Chapter 17 (d- and f-Block Elements) carries 8 to 12 marks (2 to 3 questions) in NEET UG every single year.',
    totalAnalyzedPapers: 10,
    papersWithDirectPyqs: 10,
    totalDirectPyqs: 28,
    totalHistoricalMarks: 112,
    avgDirectMarksPerPaper: 11.2,
    weightagePercentage: 6.2,
    expectedQuestionsCount: 2,
    difficultyRating: 'Moderate',
    highYieldStatus: true
  }
};
