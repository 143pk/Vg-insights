import { DetailedTopicContent } from '../../types/neet';
import { D_AND_F_BLOCK_DIAGRAMS } from '../dAndFBlock/dAndFBlockDiagrams';
import { D_AND_F_BLOCK_VERIFIED_PYQS } from '../dAndFBlock/dAndFBlockPyqs';
import { D_AND_F_BLOCK_CONCEPTS } from '../dAndFBlock/dAndFBlockTermsAndConcepts';

export const chem3dTransitionTrendsDetails: DetailedTopicContent = {
  topicId: 'chem-3d-transition-trends',
  topicName: 'Transition Elements — Electronic Configurations, 3d-Series & Periodic Trends',
  subject: 'Chemistry',
  class: 'Class 12',
  classification: 'Inorganic Chemistry',
  chapter: 'd- and f-Block Elements',

  whatIsThisTopic: 'Transition elements occupy groups 3 to 12 of the periodic table, where electrons progressively enter the penultimate (n-1)d subshell. This topic explores the core periodic trends of the first transition series (3d: Sc to Zn), including electronic configurations, anomalous stabilities of Cr and Cu, atomic/ionic radii, ionization enthalpies, standard reduction potentials E°(M²⁺/M), enthalpies of atomization, oxidation states, and oxide acid-base properties.',

  basicIdea: [
    'Definition: By IUPAC definition, a transition element is an element with an incompletely filled d-subshell in its ground state or in any one of its common oxidation states. Zinc, Cadmium, and Mercury (Group 12) have completely filled d¹⁰ configurations in both ground state and +2 ionic state, so they are d-block elements but NOT transition elements.',
    'General Valence Configuration: (n-1)d¹⁻¹⁰ ns⁰⁻². In the 3d series, electrons fill the 3d orbitals after 4s.',
    'Anomalous Configurations: Chromium is [Ar] 3d⁵ 4s¹ and Copper is [Ar] 3d¹⁰ 4s¹ due to the extra thermodynamic stability associated with symmetrical electron distribution and maximum exchange energy of exactly half-filled (3d⁵) and completely filled (3d¹⁰) subshells.',
    'Atomic Radii Trend: As we move from Sc to Zn, the atomic radius first decreases (Sc to Cr) because increasing nuclear charge Z_eff dominates; remains almost constant (Fe, Co, Ni) because the screening effect of incoming 3d electrons cancels the increasing nuclear charge; and slightly increases at the end (Cu to Zn) due to increased inter-electronic repulsions among paired 3d electrons.',
    'Oxidation States: The small energy gap between 3d and 4s allows both sets of electrons to participate in bond formation. Manganese (Mn, 3d⁵ 4s²) shows the highest number of oxidation states (+2 to +7). Early elements show stable higher oxidation states, while later elements favor +2.',
    'Standard Reduction Potentials E°(M²⁺/M): Copper is the only 3d element with a positive E° value (+0.34 V) because its high enthalpy of atomization and ionization is not balanced by hydration enthalpy, meaning Cu cannot liberate H₂ gas from dilute non-oxidizing acids.'
  ],

  importantTerms: [
    {
      term: 'Transition Element',
      symbol: 'd-metal',
      definition: 'An element possessing a partially filled (n-1)d subshell in either its elemental ground state or any of its chemically stable oxidation states.',
      neetSignificance: 'Explains why Zn, Cd, and Hg are excluded from transition element characteristics (soft, low m.p., no d-d colour).'
    },
    {
      term: 'Exchange Energy',
      symbol: 'E_ex',
      definition: 'The stabilizing energy released when two or more electrons with parallel spins in degenerate orbitals exchange their spatial positions.',
      formula: 'Number of exchanges K = Σ [n_i(n_i - 1) / 2]',
      neetSignificance: 'Accounts for the anomalous stability of Cr ([Ar] 3d⁵ 4s¹) and Cu ([Ar] 3d¹⁰ 4s¹).'
    },
    {
      term: 'Enthalpy of Atomization',
      symbol: 'Δ_aH°',
      definition: 'The enthalpy change required to dissociate one mole of a solid metallic lattice completely into individual gaseous atoms.',
      unit: 'kJ mol⁻¹',
      neetSignificance: 'Directly correlates with the number of unpaired d-electrons available for metallic bonding. Highest in V, Cr, Mo, W; lowest in Zn (no unpaired d-electrons).'
    },
    {
      term: 'Standard Electrode Potential',
      symbol: 'E°(M²⁺/M)',
      definition: 'The net thermodynamic reduction potential determined by the balance of three enthalpy terms: Enthalpy of sublimation (Δ_subH), Ionization enthalpy (Δ_iH₁ + Δ_iH₂), and Hydration enthalpy (Δ_hydH).',
      formula: 'M(s) → M(g) → M²⁺(g) → M²⁺(aq)',
      neetSignificance: 'Predicts reducing strength in aqueous solution and whether the metal can liberate H₂ gas from acid.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Electronic Configurations of the 3d Series (Sc to Zn)',
      paragraphs: [
        'The first transition series (3d series) starts with Scandium (Z = 21, [Ar] 3d¹ 4s²) and ends with Zinc (Z = 30, [Ar] 3d¹⁰ 4s²). In neutral atoms, the 4s orbital is occupied before 3d because it has a lower (n+l) energy value in unpopulated shells. However, once electrons enter the 3d orbitals, the 3d level drops below 4s in energy.',
        'CRITICAL ANOMALY 1 — Chromium (Z = 24): Expected configuration is [Ar] 3d⁴ 4s², but the actual ground state configuration is [Ar] 3d⁵ 4s¹. A half-filled 3d⁵ subshell has 5 parallel-spin electrons capable of undergoing 10 exchange interactions (K = 5×4/2 = 10), which provides maximum exchange stabilization and spherical symmetry.',
        'CRITICAL ANOMALY 2 — Copper (Z = 29): Expected configuration is [Ar] 3d⁹ 4s², but the actual configuration is [Ar] 3d¹⁰ 4s¹. A fully filled 3d¹⁰ subshell provides maximum exchange energy and complete spherical symmetry.',
        'ION FORMATION RULE: When a 3d transition metal is ionized, electrons are ALWAYS removed from the outermost 4s subshell first, and then from the 3d subshell. For example: Fe ([Ar] 3d⁶ 4s²) → Fe²⁺ ([Ar] 3d⁶) + 2 e⁻ → Fe³⁺ ([Ar] 3d⁵) + e⁻.'
      ],
      visual: {
        type: 'svg',
        svgContent: D_AND_F_BLOCK_DIAGRAMS.transition3dTrendsAndConfigurations,
        caption: 'Figure 17.1: Ground State Configurations, Atomic Radii Curve, and Oxidation State Range across the 3d Transition Series.'
      },
      tables: [
        {
          title: 'Table 17.1: Ground State Configurations and Notable Features of 3d Elements',
          headers: ['Element', 'Z', 'Outer Electronic Configuration', 'Common Oxidation States', 'High-Yield NEET Note'],
          rows: D_AND_F_BLOCK_CONCEPTS.electronicConfigurations3d.map(item => [
            item.element,
            String(item.z),
            item.groundState,
            item.commonOS,
            item.keyNeetFact
          ])
        }
      ]
    },
    {
      heading: '2. Periodic Trends: Atomic Radii, Screening Effect, and Enthalpy of Atomization',
      paragraphs: [
        'ATOMIC & IONIC RADII: The variation of atomic radii across the 3d series exhibits three distinct segments: (1) From Sc to Cr, the radius decreases sharply as nuclear charge Z_eff increases rapidly; (2) From Mn to Ni, the atomic radius remains virtually constant (~125-128 pm) because the screening/shielding effect of incoming 3d electrons almost perfectly offsets the increase in nuclear charge; (3) From Cu to Zn, there is a slight increase in radius because the completely filled 3d¹⁰ configuration creates significant inter-electronic repulsion among paired electrons, pushing the valence shell outward.',
        'ENTHALPY OF ATOMIZATION & MELTING POINTS: Transition metals possess high enthalpies of atomization, high densities, and high melting/boiling points because both ns and (n-1)d electrons participate in strong metallic bonding as well as covalent d-d orbital overlapping. The atomization enthalpy peaks near the middle of the series (V, Cr, Mo, W) where the number of unpaired d-electrons is highest.',
        'ZINC ANOMALY: Zinc has a completely filled 3d¹⁰ subshell with NO unpaired electrons available for d-d bonding. Consequently, Zn has the weakest metallic bonding, the lowest melting point (419.5 °C), the lowest boiling point (907 °C), and the lowest enthalpy of atomization (126 kJ/mol) among 3d metals.'
      ],
      importantPoints: [
        'Atomic radius curve has a characteristic "U-like bottom" or plateau around Fe-Co-Ni.',
        'M⁺² ionic radii follow a smooth decrease from Sc²⁺ to Zn²⁺, with minor irregularities explained by Crystal Field Stabilization Energy (CFSE).',
        'Tungsten (W) has the highest melting point among all transition metals (3422 °C) due to strong covalent d-d bonding in the 5d series.'
      ]
    },
    {
      heading: '3. Ionization Enthalpies and Standard Reduction Potentials E°(M²⁺/M)',
      paragraphs: [
        'IONIZATION ENTHALPIES (IE): Ionization enthalpies generally increase across the series, but show prominent irregularities:',
        '• First Ionization Enthalpy (IE₁): Increases gradually from Sc to Zn with slight dips. Cr and Cu have higher IE₁ values because removing a 4s¹ electron disrupts a stable 3d⁵ or 3d¹⁰ subshell.',
        '• Second Ionization Enthalpy (IE₂): Cr and Cu have exceptionally high IE₂ values because the second electron must be removed from stable 3d⁵ (Cr⁺) and 3d¹⁰ (Cu⁺) configurations.',
        '• Third Ionization Enthalpy (IE₃): Mn and Zn have abnormally high IE₃ values because the third electron is removed from stable 3d⁵ (Mn²⁺) and 3d¹⁰ (Zn²⁺) configurations.',
        'THERMODYNAMICS OF STANDARD ELECTRODE POTENTIAL E°(M²⁺/M): The reduction potential M²⁺(aq) + 2 e⁻ → M(s) depends on the Born-Haber cycle terms: Δ_subH° (endothermic), IE₁ + IE₂ (endothermic), and Δ_hydH° (exothermic).',
        '• Copper has a positive E°(Cu²⁺/Cu) = +0.34 V: The high sum of its sublimation enthalpy and ionization enthalpy (IE₁ + IE₂) is NOT compensated by its hydration enthalpy. Hence, Cu is unreactive towards non-oxidizing acids like dilute HCl.',
        '• Stability of Cu²⁺(aq) vs Cu⁺(aq): In water, Cu⁺ undergoes disproportionation: 2 Cu⁺(aq) → Cu²⁺(aq) + Cu(s) (E° = +0.36 V). Even though Cu⁺ has a filled 3d¹⁰ shell, the smaller size and double charge of Cu²⁺ results in a much higher negative hydration enthalpy (Δ_hydH°(Cu²⁺) ≈ -2121 kJ/mol vs Δ_hydH°(Cu⁺) ≈ -593 kJ/mol), which more than compensates for IE₂ of Cu.'
      ],
      formulas: [
        {
          formulaName: 'Born-Haber Redox Potential Cycle',
          formula: 'ΔG° = Δ_subH° + (IE₁ + IE₂) + Δ_hydH° = -n F E°',
          description: 'Relates standard electrode potential to solid atomization, gas-phase ionization, and aqueous hydration.',
          whenToUse: 'Explaining why Cu has positive E° and Mn²⁺/Fe³⁺ redox stabilities.'
        }
      ]
    },
    {
      heading: '4. Oxidation State Spectrum and Acid-Base Character of Oxides',
      paragraphs: [
        'Transition elements show variable oxidation states because the energy difference between (n-1)d and ns orbitals is very narrow, allowing both ns and (n-1)d electrons to participate in bond formation.',
        'MAXIMUM OXIDATION STATE: Increases from +3 in Sc ([Ar] 3d¹ 4s²) to a maximum of +7 in Mn ([Ar] 3d⁵ 4s²), and then drops sharply (Fe up to +6, Co/Ni up to +4, Cu up to +2, Zn only +2).',
        'STABILITY OF +2 vs +3 STATES:',
        '• Mn³⁺ is a powerful oxidizing agent (E°(Mn³⁺/Mn²⁺) = +1.57 V) because reduction converts it into the exceptionally stable half-filled Mn²⁺ (3d⁵) state.',
        '• Fe²⁺ is a reducing agent (E°(Fe³⁺/Fe²⁺) = +0.77 V) because oxidation readily converts it into stable Fe³⁺ (3d⁵).',
        '• Cr²⁺ is a strong reducing agent (E°(Cr³⁺/Cr²⁺) = -0.41 V) because oxidation converts d⁴ into stable d³ (half-filled t₂g³ in octahedral aqueous environment).',
        'OXIDE ACID-BASE TREND: In lower oxidation states, transition metal oxides are ionic and basic (e.g. CrO, MnO). In intermediate states, they are amphoteric (e.g. Cr₂O₃, MnO₂). In the highest oxidation states, they are covalent and strongly acidic (e.g. CrO₃, Mn₂O₇). Mn₂O₇ is a dark green covalent liquid that dissolves in water to form permanganic acid (HMnO₄).'
      ],
      tables: [
        {
          title: 'Table 17.2: Oxidation State vs Acid-Base Character of Cr and Mn Oxides',
          headers: ['Metal', 'Formula', 'Oxidation State', 'Nature', 'Reaction / Property'],
          rows: [
            ['Chromium', 'CrO', '+2', 'Basic', 'Dissolves in acids to form blue Cr²⁺ salts'],
            ['Chromium', 'Cr₂O₃', '+3', 'Amphoteric', 'Dissolves in acids (Cr³⁺) and hot alkali ([Cr(OH)₆]³⁻)'],
            ['Chromium', 'CrO₃', '+6', 'Acidic', 'Dissolves in water to form chromic acid (H₂CrO₄)'],
            ['Manganese', 'MnO', '+2', 'Basic', 'Dissolves in acids to form pale pink Mn²⁺ salts'],
            ['Manganese', 'Mn₂O₃', '+3', 'Weakly Basic', 'Reacts with acids to yield Mn³⁺ (unstable in water)'],
            ['Manganese', 'MnO₂', '+4', 'Amphoteric', 'Reacts with conc. acids and alkalis'],
            ['Manganese', 'Mn₂O₇', '+7', 'Strongly Acidic', 'Green oily liquid; forms permanganic acid HMnO₄']
          ]
        }
      ]
    }
  ],

  formulae: [
    {
      title: 'Spin-Only Magnetic Moment',
      formula: 'μ_s = \\sqrt{n(n+2)} \\text{ BM}',
      variables: 'n = number of unpaired electrons; BM = Bohr Magneton (eh / 4πm)',
      unit: 'Bohr Magneton (BM)',
      whenToUse: 'To calculate magnetic moment of any 3d transition metal ion from its d-electron count.',
      calculationExample: {
        problem: 'Calculate the spin-only magnetic moment of Mn²⁺ and Fe²⁺ ions in BM.',
        given: 'Mn (Z = 25), Fe (Z = 26)',
        stepByStep: [
          '1. Electronic configuration of Mn = [Ar] 3d⁵ 4s² ⇒ Mn²⁺ = [Ar] 3d⁵ (n = 5 unpaired electrons).',
          '2. μ(Mn²⁺) = √[5(5+2)] = √35 ≈ 5.92 BM.',
          '3. Electronic configuration of Fe = [Ar] 3d⁶ 4s² ⇒ Fe²⁺ = [Ar] 3d⁶ (n = 4 unpaired electrons).',
          '4. μ(Fe²⁺) = √[4(4+2)] = √24 ≈ 4.90 BM.'
        ],
        answer: 'Mn²⁺: 5.92 BM; Fe²⁺: 4.90 BM.'
      }
    },
    {
      title: 'Exchange Energy Permutations',
      formula: 'K = \\sum \\frac{n_i(n_i - 1)}{2}',
      variables: 'n_i = number of electrons with parallel spin in a given subshell',
      whenToUse: 'Explaining why d⁵ (K=10) is significantly more stable than d⁴ (K=6).'
    }
  ],

  neetImportantPoints: [
    'Scandium is a transition element, but exhibits ONLY +3 oxidation state in its compounds (achieving stable [Ar] configuration).',
    'Zinc, Cadmium, and Mercury are d-block elements, but NOT transition elements because of fully-filled d¹⁰ configurations in both atom and +2 state.',
    'Copper is the ONLY 3d metal with a positive E°(M²⁺/M) = +0.34 V, meaning it cannot liberate H₂ from non-oxidizing acids.',
    'Cr²⁺ is reducing (d⁴ → d³ t₂g³), whereas Mn³⁺ is oxidizing (d⁴ → d⁵ t₂g³ e_g²), even though both have d⁴ electronic configurations.',
    'Atomic radius stays nearly constant from Fe to Ni because screening effect of 3d electrons cancels the increasing nuclear charge.',
    'Tungsten (W) has the highest melting point (3422 °C) among all metals, while Mercury (Hg) is liquid at room temperature (m.p. -38.8 °C).'
  ],

  commonConfusions: [
    {
      misconception: 'Assuming that during ionization, 3d electrons are lost before 4s electrons because 3d has higher energy in neutral atoms.',
      correction: 'Electrons are ALWAYS removed from the outermost shell (4s) first. Fe ([Ar] 3d⁶ 4s²) loses 4s² electrons first to form Fe²⁺ ([Ar] 3d⁶).'
    },
    {
      misconception: 'Assuming Cu⁺(aq) is more stable in water than Cu²⁺(aq) because Cu⁺ has a completely filled 3d¹⁰ shell.',
      correction: 'Cu²⁺(aq) is much more stable in aqueous solution because its high hydration enthalpy more than compensates for the second ionization energy.'
    },
    {
      misconception: 'Thinking that Zinc has high melting point and hardness like other transition metals.',
      correction: 'Zinc has no unpaired d-electrons, resulting in weak metallic bonding, low melting point (419.5 °C), and soft texture.'
    }
  ],

  quickRevision: [
    'General valence configuration: (n-1)d¹⁻¹⁰ ns⁰⁻².',
    'Cr is [Ar] 3d⁵ 4s¹ and Cu is [Ar] 3d¹⁰ 4s¹ (extra stability of half/fully filled subshells).',
    'Atomic radii: Decreases Sc → Cr, plateau Fe → Ni, slight increase Cu → Zn.',
    'Max oxidation state in 3d series is shown by Mn (+7 in KMnO₄).',
    'E°(Cu²⁺/Cu) = +0.34 V (only positive E° in 3d series).',
    'Oxide nature: Lower OS = Basic (CrO, MnO), Intermediate = Amphoteric (Cr₂O₃, MnO₂), Highest OS = Acidic (CrO₃, Mn₂O₇).'
  ],

  practiceQuestions: [
    {
      id: 'pq-3d-1',
      question: 'Which of the following transition metal ions has the highest spin-only magnetic moment?',
      options: [
        'Fe²⁺ (Z = 26)',
        'Mn²⁺ (Z = 25)',
        'Co²⁺ (Z = 27)',
        'Cr³⁺ (Z = 24)'
      ],
      correctAnswer: 1,
      explanation: 'Calculate unpaired electrons (n):\n• Fe²⁺: [Ar] 3d⁶ ⇒ n = 4 (μ = 4.90 BM)\n• Mn²⁺: [Ar] 3d⁵ ⇒ n = 5 (μ = 5.92 BM, MAXIMUM)\n• Co²⁺: [Ar] 3d⁷ ⇒ n = 3 (μ = 3.87 BM)\n• Cr³⁺: [Ar] 3d³ ⇒ n = 3 (μ = 3.87 BM)',
      marks: 4
    },
    {
      id: 'pq-3d-2',
      question: 'Why is Cr²⁺ reducing while Mn³⁺ is oxidizing when both have d⁴ configuration?',
      options: [
        'Cr²⁺ has d⁴ configuration and changes to stable d³ (half-filled t₂g³), whereas Mn³⁺ changes from d⁴ to stable d⁵ (half-filled 3d)',
        'Cr²⁺ is larger in size than Mn³⁺',
        'Cr has higher ionization energy than Mn',
        'Mn³⁺ has higher hydration enthalpy than Cr²⁺'
      ],
      correctAnswer: 0,
      explanation: 'In octahedral aqueous environments, d³ has a half-filled t₂g³ subshell which is exceptionally stable. Thus, Cr²⁺ (d⁴) readily loses an electron to form Cr³⁺ (d³, reducing agent). Conversely, Mn³⁺ (d⁴) gains an electron to form the half-filled stable Mn²⁺ (3d⁵, oxidizing agent).',
      marks: 4
    }
  ],

  pyqs: D_AND_F_BLOCK_VERIFIED_PYQS.filter(q => q.topicId === 'chem-3d-transition-trends'),

  neetMarksPotential: {
    confidenceLabel: 'HIGH',
    confidenceText: 'Direct questions on electronic configurations, magnetic moments, oxidation states, and E° trends appear in almost every NEET paper.',
    totalAnalyzedPapers: 10,
    papersWithDirectPyqs: 9,
    totalDirectPyqs: 14,
    totalHistoricalMarks: 56,
    avgDirectMarksPerPaper: 5.6,
    weightagePercentage: 3.5,
    expectedQuestionsCount: 1,
    difficultyRating: 'Moderate',
    highYieldStatus: true
  }
};
