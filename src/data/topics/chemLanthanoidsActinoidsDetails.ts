import { DetailedTopicContent } from '../../types/neet';
import { D_AND_F_BLOCK_DIAGRAMS } from '../dAndFBlock/dAndFBlockDiagrams';
import { D_AND_F_BLOCK_VERIFIED_PYQS } from '../dAndFBlock/dAndFBlockPyqs';
import { D_AND_F_BLOCK_CONCEPTS } from '../dAndFBlock/dAndFBlockTermsAndConcepts';

export const chemLanthanoidsActinoidsDetails: DetailedTopicContent = {
  topicId: 'chem-lanthanoids-actinoids',
  topicName: 'f-Block Elements: Lanthanoids, Lanthanoid Contraction & Actinoids',
  subject: 'Chemistry',
  class: 'Class 12',
  classification: 'Inorganic Chemistry',
  chapter: 'd- and f-Block Elements',

  whatIsThisTopic: 'The f-block (inner transition elements) consists of two series of 14 elements each: the Lanthanoids (4f-series: Ce₅₈ to Lu₇₁) and the Actinoids (5f-series: Th₉₀ to Lr₁₀₃). This topic provides an exhaustive, NEET-focused breakdown of electronic configurations, the predominant +3 oxidation state alongside +2/+4 anomalies, the mechanism and far-reaching consequences of Lanthanoid Contraction (Zr-Hf twins, hydroxide basicity), Mischmetal alloy, and a detailed comparison with radioactive Actinoids.',

  basicIdea: [
    'General Configuration: (n-2)f¹⁻¹⁴ (n-1)d⁰⁻¹ ns². For lanthanoids: [Xe] 4f¹⁻¹⁴ 5d⁰⁻¹ 6s²; For actinoids: [Rn] 5f¹⁻¹⁴ 6d⁰⁻¹ 7s².',
    'Common Oxidation State: Both series show a predominant oxidation state of +3 (Ln³⁺ and An³⁺).',
    'Lanthanoid Oxidation State Anomalies: Ce⁴⁺ and Tb⁴⁺ achieve stable 4f⁰ and 4f⁷ configurations, making Ce⁴⁺ a strong oxidizing agent (reduced to Ce³⁺). Eu²⁺ and Yb²⁺ achieve stable 4f⁷ and 4f¹⁴ configurations, making Eu²⁺ a strong reducing agent (oxidized to Eu³⁺).',
    'Lanthanoid Contraction: The steady decrease in atomic and ionic radii (Ln³⁺) from La (106 pm) to Lu (86 pm) caused by the imperfect/poor shielding of 4f electrons by one another as nuclear charge increases.',
    'Consequences of Lanthanoid Contraction: (1) Zr (160 pm) and Hf (159 pm) have nearly identical radii and identical chemical properties; (2) Basicity of hydroxides decreases: La(OH)₃ (most basic) > ... > Lu(OH)₃ (least basic); (3) Separation of lanthanoids is extremely difficult and requires ion-exchange resins; (4) Exceptionally high densities of 5d series elements.',
    'Mischmetal: A pyrophoric alloy of ~95% lanthanoids (~40-50% Ce, La, Nd), ~5% Fe, and traces of S, C, Ca, and Al used in lighter flints and bullet jackets.',
    'Actinoids: All actinoids are radioactive. They exhibit a much wider range of oxidation states (+3 to +7 in Np and Pu) because the energy difference between 5f, 6d, and 7s subshells is very small. Actinoid contraction is greater than lanthanoid contraction due to poorer shielding by 5f orbitals.'
  ],

  importantTerms: [
    {
      term: 'Inner Transition Elements (f-Block)',
      definition: 'Elements in which the differentiating electron enters the ante-penultimate (n-2)f energy level.',
      neetSignificance: 'Consists of 4f (Lanthanoids) and 5f (Actinoids) series, each containing 14 elements.'
    },
    {
      term: 'Lanthanoid Contraction',
      symbol: 'Ln Contraction',
      definition: 'The regular and cumulative decrease in the atomic and ionic radii of lanthanoid elements with increasing atomic number from Lanthanum (La₅₇) to Lutetium (Lu₇₁).',
      neetSignificance: 'Underlying cause for identical radii of 4d/5d twin pairs (Zr-Hf, Nb-Ta, Mo-W).'
    },
    {
      term: 'Shielding Effect of 4f Electrons',
      definition: 'The screening capability of inner electrons. Due to their diffuse spatial distribution, 4f electrons have very poor shielding efficiency compared to s, p, and d electrons.',
      neetSignificance: 'Explains why nuclear attraction pulls outer electrons closer with increasing Z in the f-block.'
    },
    {
      term: 'Mischmetal',
      definition: 'An alloy composed of ~95% lanthanoid metals (primarily cerium, lanthanum, and neodymium) and ~5% iron, along with traces of sulphur, carbon, calcium, and aluminium.',
      neetSignificance: 'Pyrophoric alloy used in cigarette lighter flints and tracer bullets.'
    },
    {
      term: 'Actinoid Contraction',
      definition: 'The steady decrease in ionic radii of actinoid M³⁺ and M⁴⁺ ions across the 5f series, exceeding the magnitude of lanthanoid contraction.',
      neetSignificance: 'Results from the even poorer shielding ability of 5f electrons compared to 4f.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Electronic Configurations and Oxidation States of Lanthanoids',
      paragraphs: [
        'The lanthanoids comprise the 14 elements following Lanthanum (La, Z=57), spanning from Cerium (Ce, Z=58, [Xe] 4f¹ 5d¹ 6s²) to Lutetium (Lu, Z=71, [Xe] 4f¹⁴ 5d¹ 6s²). In these elements, the 4f subshell is progressively filled.',
        'PREDOMINANT +3 OXIDATION STATE: The +3 oxidation state is the most characteristic and thermodynamically stable state for all lanthanoids (Ln³⁺). It is formed by losing the two 6s electrons and one 5d (or 4f) electron.',
        'STABILITY OF +2 AND +4 OXIDATION STATES (HIGH-YIELD NEET FOCUS):',
        '• Cerium (Ce⁴⁺): Ce (Z = 58) has [Xe] 4f¹ 5d¹ 6s². Ce⁴⁺ achieves the noble gas electronic configuration of [Xe] 4f⁰. Although Ce⁴⁺ is stable due to 4f⁰, the +3 state is inherently favored in aqueous solution. Therefore, Ce⁴⁺ acts as a POWERFUL OXIDIZING AGENT (E°(Ce⁴⁺/Ce³⁺) = +1.74 V) and is commonly used as a volumetric reagent (cerimetry).',
        '• Terbium (Tb⁴⁺): Tb (Z = 65) is [Xe] 4f⁹ 6s². Tb⁴⁺ achieves the half-filled stable [Xe] 4f⁷ configuration and also acts as an oxidizer.',
        '• Europium (Eu²⁺): Eu (Z = 63) is [Xe] 4f⁷ 6s². Eu²⁺ achieves the half-filled stable [Xe] 4f⁷ configuration. However, since +3 is the dominant state, Eu²⁺ is readily oxidized to Eu³⁺, making Eu²⁺ a STRONG REDUCING AGENT.',
        '• Ytterbium (Yb²⁺): Yb (Z = 70) is [Xe] 4f¹⁴ 6s². Yb²⁺ achieves the completely filled [Xe] 4f¹⁴ configuration and is also a strong reducing agent (reverts to Yb³⁺).'
      ],
      tables: [
        {
          title: 'Table 17.5: Key Lanthanoid Electronic Configurations & High-Yield Oxidation States',
          headers: ['Element', 'Symbol', 'Z', 'Ground State Configuration', 'Ln³⁺ Configuration', 'Other Stable OS & Nature'],
          rows: [
            ['Lanthanum', 'La', '57', '[Xe] 5d¹ 6s²', '[Xe] 4f⁰', '+3 (Colourless, Diamagnetic)'],
            ['Cerium', 'Ce', '58', '[Xe] 4f¹ 5d¹ 6s²', '[Xe] 4f¹', '+4 (4f⁰, Strong Oxidizing Agent)'],
            ['Praseodymium', 'Pr', '59', '[Xe] 4f³ 6s²', '[Xe] 4f²', '+4 (in PrO₂)'],
            ['Neodymium', 'Nd', '60', '[Xe] 4f⁴ 6s²', '[Xe] 4f³', '+2, +4'],
            ['Promethium', 'Pm', '61', '[Xe] 4f⁵ 6s²', '[Xe] 4f⁴', '+3 (Only Radioactive Lanthanoid)'],
            ['Samarium', 'Sm', '62', '[Xe] 4f⁶ 6s²', '[Xe] 4f⁵', '+2 (4f⁶, Reducing)'],
            ['Europium', 'Eu', '63', '[Xe] 4f⁷ 6s²', '[Xe] 4f⁶', '+2 (4f⁷, Strong Reducing Agent)'],
            ['Gadolinium', 'Gd', '64', '[Xe] 4f⁷ 5d¹ 6s²', '[Xe] 4f⁷', '+3 (4f⁷, Paramagnetic, μ=7.94 BM)'],
            ['Terbium', 'Tb', '65', '[Xe] 4f⁹ 6s²', '[Xe] 4f⁸', '+4 (4f⁷, Oxidizing Agent)'],
            ['Ytterbium', 'Yb', '70', '[Xe] 4f¹⁴ 6s²', '[Xe] 4f¹³', '+2 (4f¹⁴, Strong Reducing Agent)'],
            ['Lutetium', 'Lu', '71', '[Xe] 4f¹⁴ 5d¹ 6s²', '[Xe] 4f¹⁴', '+3 (4f¹⁴, Colourless, Diamagnetic)']
          ]
        }
      ]
    },
    {
      heading: '2. Lanthanoid Contraction — Mechanism and Crucial Consequences',
      paragraphs: [
        'MECHANISM OF LANTHANOID CONTRACTION: As we move from Ce₅₈ to Lu₇₁, with every step the nuclear charge increases by +1 and a new electron enters the inner 4f subshell. The 4f orbitals have a very diffuse, complex geometry and are imperfect at shielding one another from the increasing positive nuclear charge. Consequently, the effective nuclear charge Z_eff experienced by the outer 5d and 6s electrons increases steadily, pulling the valence electron clouds closer to the nucleus. This leads to a gradual, cumulative contraction in the size of the atom and Ln³⁺ ions (from 106 pm for La³⁺ down to 86 pm for Lu³⁺).',
        'MAJOR CONSEQUENCES OF LANTHANOID CONTRACTION (CRUCIAL FOR NEET):',
        '1. Similarity of 4d and 5d Transition Series (Twin Elements): The intervening 14 lanthanoid elements cancel the expected size increase from the 4d to 5d row. As a result, pairs of elements in the same vertical group possess nearly identical atomic and ionic radii:',
        '   • Zirconium (Zr, 4d, Z = 40): 160 pm ≈ Hafnium (Hf, 5d, Z = 72): 159 pm.',
        '   • Niobium (Nb, 4d, Z = 41): 146 pm ≈ Tantalum (Ta, 5d, Z = 73): 146 pm.',
        '   • Molybdenum (Mo, 4d, Z = 42): 139 pm ≈ Tungsten (W, 5d, Z = 74): 139 pm.',
        '   Because of identical sizes and identical valence configurations, Zr and Hf occur together in nature and are extremely difficult to separate.',
        '2. Basicity Order of Lanthanoid Hydroxides Ln(OH)₃: As size of Ln³⁺ decreases from La³⁺ to Lu³⁺, the charge-to-size ratio increases. By Fajan\'s rules, greater polarizing power increases the covalent character of the Ln-OH bond. As the bond becomes more covalent, the release of OH⁻ ions becomes more difficult. Thus, basicity decreases in the strict order: La(OH)₃ (most basic) > Ce(OH)₃ > ... > Lu(OH)₃ (least basic).',
        '3. Difficult Separation of Lanthanoids: Because all Ln³⁺ ions have identical +3 charges and very similar radii, their chemical properties are nearly identical. Separation requires modern ion-exchange chromatography based on tiny differences in hydration size and resin binding affinities.',
        '4. Exceptionally High Densities of 5d Metals: Because atomic mass nearly doubles from 4d to 5d while atomic volume remains almost unchanged due to lanthanoid contraction, 5d metals have nearly double the density of 4d metals (e.g. Osmium and Iridium have densities ~22.6 g/cm³).'
      ],
      visual: {
        type: 'svg',
        svgContent: D_AND_F_BLOCK_DIAGRAMS.lanthanoidContractionAndActinoids,
        caption: 'Figure 17.4: Lanthanoid Contraction Curve (La³⁺ to Lu³⁺), Shielding Mechanism, and Direct Lanthanoids vs Actinoids Comparison.'
      }
    },
    {
      heading: '3. Mischmetal and Chemical Reactivity of Lanthanoids',
      paragraphs: [
        'CHEMICAL REACTIVITY OF LANTHANOIDS: In their chemical behavior, earlier lanthanoids are quite reactive, resembling calcium metal, but with increasing atomic number, their reactivity approaches that of aluminum.',
        '• With Water: React slowly with cold water, but rapidly with hot water to liberate hydrogen: 2 Ln + 6 H₂O → 2 Ln(OH)₃ + 3 H₂↑.',
        '• With Acids: Dissolve easily in dilute mineral acids to liberate H₂ gas: 2 Ln + 6 H⁺ → 2 Ln³⁺ + 3 H₂↑.',
        '• With Oxygen: Burn readily in air on heating to form sesquioxides: 4 Ln + 3 O₂ → 2 Ln₂O₃ (except Ce which forms CeO₂).',
        '• With Halogens: Burn in halogens to form trihalides: 2 Ln + 3 X₂ → 2 LnX₃.',
        '• With Nitrogen & Carbon: On heating with nitrogen form LnN (nitrides) and with carbon at high temperature form carbides LnC₂, Ln₂C₃, and Ln₃C.',
        'MISCHMETAL ALLOY: Mischmetal is an alloy consisting of approximately 95% lanthanoid metals (primarily Cerium ~40-50%, Lanthanum ~25%, Neodymium ~15%), ~5% Iron, and traces of S, C, Ca, and Al. It is highly pyrophoric (produces sparks when struck). When mixed with magnesium (e.g. 3% Mischmetal + 97% Mg), it produces high-strength magnesium alloys for aircraft parts. It is extensively used in cigarette lighter flints, bullet jackets, and tracer shells.'
      ]
    },
    {
      heading: '4. Actinoids (5f Series) — Properties and Comparison with Lanthanoids',
      paragraphs: [
        'The actinoids include the 14 elements from Thorium (Th, Z=90) to Lawrencium (Lr, Z=103) following Actinium (Ac, Z=89). In these elements, the 5f subshell is progressively filled.',
        'GENERAL CHARACTERISTICS OF ACTINOIDS:',
        '• Radioactivity: ALL actinoids are strictly radioactive. The elements beyond Uranium (U, Z=92) are man-made synthetic elements called Transuranic or Transuranium elements.',
        '• Oxidation States: Unlike lanthanoids (which mostly show +3), actinoids exhibit a very broad spectrum of oxidation states: +3, +4, +5, +6, and +7. For instance, Neptunium (Np) and Plutonium (Pu) show oxidation states up to +7 in species like [NpO₅]³⁻ and [PuO₅]³⁻. This occurs because the 5f, 6d, and 7s energy levels are very close to each other (comparable energies), allowing all three subshells to participate in bonding.',
        '• Complex Formation: Actinoids have a far greater tendency to form coordination complexes than lanthanoids because of their higher charge density and smaller ionic radii for higher oxidation states.',
        '• Actinoid Contraction: Just like lanthanoids, actinoids exhibit a steady contraction in ionic radii (An³⁺ and An⁴⁺). However, the actinoid contraction is GREATER from element to element than lanthanoid contraction because 5f electrons extend further in space and exert an even poorer shielding effect than 4f electrons.'
      ],
      tables: [
        {
          title: 'Table 17.6: Lanthanoids vs Actinoids Direct Comparison for NEET UG',
          headers: ['Feature', 'Lanthanoids (4f Series)', 'Actinoids (5f Series)'],
          rows: D_AND_F_BLOCK_CONCEPTS.lanthanoidsVsActinoidsComparison.map(item => [
            item.feature,
            item.lanthanoids,
            item.actinoids
          ])
        }
      ]
    }
  ],

  formulae: [
    {
      title: 'Lanthanoid Hydroxide Basicity Order',
      formula: '\\text{La(OH)}_3 > \\text{Ce(OH)}_3 > \\dots > \\text{Lu(OH)}_3',
      description: 'Basicity decreases due to increasing covalent character of Ln-OH bond resulting from Lanthanoid Contraction.',
      whenToUse: 'Directly predicting basicity and solubility trends of f-block hydroxides.'
    },
    {
      title: 'Twin Elements Radii Comparison',
      formula: 'r(\\text{Zr}_{4d}) \\approx r(\\text{Hf}_{5d}) \\approx 160 \\text{ pm}; \\quad r(\\text{Nb}) \\approx r(\\text{Ta}) \\approx 146 \\text{ pm}',
      description: 'Lanthanoid contraction precisely balances the expected radial expansion from 4d to 5d shell addition.',
      whenToUse: 'Explaining identical chemical properties of group 4, 5, and 6 transition twins.'
    }
  ],

  neetImportantPoints: [
    'Zr (160 pm) and Hf (159 pm) have almost identical atomic and ionic radii due to Lanthanoid Contraction.',
    'Basicity of hydroxides decreases in the order: La(OH)₃ (most basic) to Lu(OH)₃ (least basic).',
    'Ce⁴⁺ acts as a powerful oxidizing agent in analytical titrations because it readily reduces to the stable +3 state (E° = +1.74 V).',
    'Eu²⁺ acts as a strong reducing agent because it readily oxidizes to the stable +3 state.',
    'Promethium (Pm, Z = 61) is the ONLY radioactive lanthanoid element; ALL actinoids are radioactive.',
    'Actinoids show a wider variety of oxidation states (+3 to +7) than lanthanoids due to comparable energies of 5f, 6d, and 7s orbitals.',
    'Actinoid contraction is greater in magnitude than lanthanoid contraction because 5f electrons provide even poorer shielding than 4f electrons.',
    'Mischmetal consists of ~95% lanthanoids (~40-50% Ce), ~5% Fe, and traces of S, C, Ca, and Al.'
  ],

  commonConfusions: [
    {
      misconception: 'Assuming Ce⁴⁺ is a reducing agent because it has a noble gas [Xe] 4f⁰ configuration.',
      correction: 'Although 4f⁰ is stable, +3 is the most stable state for all lanthanoids in solution. Hence, Ce⁴⁺ readily gains an electron to become Ce³⁺, making it a strong OXIDIZING agent.'
    },
    {
      misconception: 'Thinking that Lanthanoid contraction makes Hf larger than Zr.',
      correction: 'Lanthanoid contraction decreases the size of Hf, making it virtually identical (159 pm) to Zr (160 pm).'
    },
    {
      misconception: 'Believing that Lanthanoid contraction is larger than Actinoid contraction.',
      correction: 'Actinoid contraction is GREATER than Lanthanoid contraction because 5f orbitals have poorer shielding efficiency than 4f orbitals.'
    }
  ],

  quickRevision: [
    'Lanthanoids: [Xe] 4f¹⁻¹⁴ 5d⁰⁻¹ 6s²; Actinoids: [Rn] 5f¹⁻¹⁴ 6d⁰⁻¹ 7s².',
    'Predominant oxidation state for both is +3.',
    'Ce⁴⁺ and Tb⁴⁺ are oxidizing (revert to +3); Eu²⁺ and Yb²⁺ are reducing (revert to +3).',
    'Lanthanoid contraction cause: Poor shielding of 4f electrons.',
    'Consequences: Zr ≈ Hf (160 vs 159 pm), La(OH)₃ > Lu(OH)₃ basicity, difficult separation.',
    'Mischmetal: 95% Ln (~50% Ce) + 5% Fe (lighter flints).',
    'Actinoids: All radioactive, wide OS (+3 to +7 in Np/Pu) due to comparable 5f/6d/7s energies.'
  ],

  practiceQuestions: [
    {
      id: 'pq-lanth-1',
      question: 'Which of the following statements concerning lanthanoids is INCORRECT?',
      options: [
        'All lanthanoids are non-radioactive',
        'The most stable oxidation state of all lanthanoids is +3',
        'La(OH)₃ is more basic than Lu(OH)₃',
        'Zr and Hf have almost identical radii due to lanthanoid contraction'
      ],
      correctAnswer: 0,
      explanation: 'Promethium (Pm, Z = 61) is a synthetic, radioactive lanthanoid element. All other lanthanoids are non-radioactive. Therefore, statement 1 ("All lanthanoids are non-radioactive") is incorrect.',
      marks: 4
    },
    {
      id: 'pq-lanth-2',
      question: 'Why do actinoids exhibit a larger number of oxidation states than lanthanoids?',
      options: [
        'Because 5f, 6d, and 7s energy levels are comparable in energy in actinoids',
        'Because actinoids are radioactive',
        'Because 4f orbitals are larger than 5f orbitals',
        'Because lanthanoid contraction is greater than actinoid contraction'
      ],
      correctAnswer: 0,
      explanation: 'In actinoids, the energy difference between 5f, 6d, and 7s orbitals is very small (they have comparable energies). Consequently, electrons from all three subshells can participate in chemical bonding, yielding oxidation states up to +7. In lanthanoids, the energy gap between 4f and 5d is much larger, restricting them mostly to +3.',
      marks: 4
    }
  ],

  pyqs: D_AND_F_BLOCK_VERIFIED_PYQS.filter(q => q.topicId === 'chem-lanthanoids-actinoids'),

  neetMarksPotential: {
    confidenceLabel: 'HIGH',
    confidenceText: 'Lanthanoid contraction, Zr-Hf twin pairs, hydroxide basicity, and Ce⁴⁺/Eu²⁺ redox behavior are classic NEET exam questions.',
    totalAnalyzedPapers: 10,
    papersWithDirectPyqs: 9,
    totalDirectPyqs: 13,
    totalHistoricalMarks: 52,
    avgDirectMarksPerPaper: 5.2,
    weightagePercentage: 3.2,
    expectedQuestionsCount: 1,
    difficultyRating: 'Moderate',
    highYieldStatus: true
  }
};
