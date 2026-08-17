import { DetailedTopicContent } from '../../types/neet'

export const chemAlkynesDetails: DetailedTopicContent = {
  topicId: 'chem-alkynes',
  topicName: 'Alkynes & Their Reactions',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Organic Chemistry',
  chapter: 'Hydrocarbons',

  whatIsThisTopic: 'Alkynes are unsaturated acyclic hydrocarbons containing at least one carbon-carbon triple bond (C≡C) with the general formula CₙH₂ₙ₋₂. The triply bonded carbon atoms are sp hybridized with a linear geometry and a bond angle of 180°. The C≡C bond consists of one strong σ-bond and two weaker π-bonds. Alkynes undergo electrophilic and nucleophilic addition reactions, cyclic polymerisation, and exhibit unique acidic behavior at terminal C≡H bonds due to 50% s-character.',

  basicIdea: [
    '📌 Linear C≡C Framework: Carbon atoms forming the C≡C triple bond are sp hybridized, creating a linear molecular geometry (180° bond angle). The triple bond consists of one σ-bond (sp-sp overlap) and two mutually perpendicular π-bonds (p_y-p_y and p_z-p_z lateral overlaps).',
    '📌 Acidic Nature of Terminal Alkynes: Terminal alkynes (R-C≡C-H) possess acidic hydrogen atoms because the sp hybridized carbon has 50% s-character, making it highly electronegative. They react with strong bases (Na, NaNH₂) and metal ions (Ag⁺, Cu⁺) to form metal acetylides.',
    '📌 Controlled Reduction (Lindlar vs Birch): Partial hydrogenation of alkynes yields alkenes with specific stereochemistry: Lindlar\'s catalyst gives CIS-alkenes (syn-addition), whereas Birch reduction (Na/liq. NH₃) gives TRANS-alkenes (anti-addition).',
    '📌 Kucherov Reaction (Hydration): Addition of water in the presence of 1% HgSO₄ and 20% H₂SO₄ at 333 K yields an unstable enol intermediate, which rapidly undergoes keto-enol tautomerism. Ethyne yields ethanal (aldehyde), while all higher alkynes yield ketones.',
    '📌 Hydrohalogenation (Gem-Dihalide Formation): Addition of two equivalents of HX to an alkyne follows Markovnikov\'s rule in both steps, selectively yielding a 1,1-dihaloalkane (geminal dihalide).'
  ],

  importantTerms: [
    {
      term: 'Alkyne / Acetylene Series',
      symbol: 'CₙH₂ₙ₋₂',
      definition: 'An unsaturated hydrocarbon containing one or more carbon-carbon triple bonds (C≡C) with sp hybridized carbons.',
      neetNote: 'Simplest member is ethyne/acetylene (C₂H₂). Degree of unsaturation (IHD) = 2.'
    },
    {
      term: 'sp Hybridisation in C≡C',
      definition: 'Mixing of one s and one p orbital of carbon to form two equivalent sp hybrid orbitals at 180° in a straight line, leaving two unhybridized p-orbitals (p_y, p_z) perpendicular to the axis.',
      neetNote: 'C≡C bond length is 120 pm (shorter than C=C 134 pm and C-C 154 pm). C≡C bond energy is 823 kJ/mol.'
    },
    {
      term: 'Terminal Alkyne',
      symbol: 'R-C≡C-H',
      definition: 'An alkyne where the triple bond is located at the end of the carbon chain, possessing at least one acidic C-H bond attached directly to an sp carbon.',
      neetNote: 'Reacts with Na, NaNH₂, ammoniacal AgNO₃, and ammoniacal Cu₂Cl₂. Internal alkynes (R-C≡C-R\') DO NOT.'
    },
    {
      term: 'Internal Alkyne',
      symbol: 'R-C≡C-R\'',
      definition: 'An alkyne where the triple bond is located within the interior of the carbon chain, having no hydrogen atom attached to the sp hybridized carbons.',
      neetNote: 'Does NOT show acidic terminal reactions or form metal acetylide precipitates.'
    },
    {
      term: 'Metal Acetylide',
      definition: 'An organometallic salt formed when the acidic hydrogen of a terminal alkyne is replaced by a metal cation (Na⁺, Ag⁺, Cu⁺).',
      neetNote: 'Silver acetylide (Ag-C≡C-Ag) forms a WHITE precipitate; Copper acetylide (Cu-C≡C-Cu) forms a RED precipitate.'
    },
    {
      term: 'Lindlar\'s Catalyst',
      definition: 'Partially deactivated (poisoned) palladium catalyst supported on calcium carbonate (Pd/CaCO₃) with quinoline or lead acetate.',
      neetNote: 'Selectively reduces alkynes to CIS-alkenes via syn-addition of H₂.'
    },
    {
      term: 'Birch Reduction',
      definition: 'Reduction of an alkyne using sodium or lithium metal in liquid ammonia (Na / liq. NH₃).',
      neetNote: 'Selectively reduces internal alkynes to TRANS-alkenes via anti-addition.'
    },
    {
      term: 'Kucherov Reaction (Hydration)',
      definition: 'Electrophilic addition of H₂O to an alkyne catalyzed by 1% HgSO₄ and 20% H₂SO₄ at 333 K (60°C).',
      neetNote: 'Ethyne yields Ethanal (aldehyde); Propyne and higher alkynes yield Ketones.'
    },
    {
      term: 'Keto-Enol Tautomerism',
      definition: 'A structural isomerism involving dynamic equilibrium between an enol (-C(OH)=C-) and a carbonyl keto form (-C(=O)-C-) via 1,3-proton migration.',
      neetNote: 'Keto form is thermodynamically much more stable due to the high C=O bond dissociation energy (745 kJ/mol).'
    },
    {
      term: 'Geminal Dihalide (Gem-Dihalide)',
      definition: 'A dihalogenated alkane where both halogen atoms are attached to the VERY SAME carbon atom (e.g., 2,2-dichloropropane).',
      neetNote: 'Formed when two equivalents of HX add to an alkyne following Markovnikov\'s rule.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Structure, Bonding & sp Hybridisation in Alkynes',
      paragraphs: [
        'In ethyne (acetylene, H-C≡C-H) and all higher alkynes, each triply bonded carbon atom undergoes sp hybridisation by mixing its 2s orbital with one 2p orbital (e.g., 2pₓ). This generates two equivalent sp hybrid orbitals oriented at 180° to each other in a straight line.',
        '• σ-Bond Framework: One sp hybrid orbital of carbon overlaps head-on with an sp orbital of the adjacent carbon to form a C-C σ-bond. The second sp orbital overlaps head-on with a 1s orbital of hydrogen (or sp³ orbital of alkyl carbon) to form a C-H σ-bond.',
        '• π-Bond Framework: Two unhybridized 2p-orbitals (2pᵧ and 2p_z) remain on each carbon atom. These orbitals lie perpendicular to each other and to the internuclear C-C axis. They overlap laterally in pairs to form two mutually perpendicular π-bonds.',
        '• Cylindrical π-Cloud: The overlap of two perpendicular sets of p-orbitals produces a continuous, cylindrically symmetrical electron density cloud surrounding the C-C σ-core.',
        '• Physical Parameters: C≡C bond length = 120 pm (C=C is 134 pm, C-C is 154 pm). C≡C bond energy = 823 kJ/mol (σ ≈ 348 kJ/mol, two π-bonds ≈ 475 kJ/mol).'
      ],
      visual: {
        type: 'flowchart',
        caption: 'sp Hybridisation & Bonding Architecture in Ethyne',
        flowchartSteps: [
          {
            step: 'Ground State Carbon',
            detail: '1s² 2s² 2pₓ¹ 2pᵧ¹ (2 valence electrons in 2s)',
            arrowText: 'Excitation'
          },
          {
            step: 'Excited State Carbon',
            detail: '1s² 2s¹ 2pₓ¹ 2pᵧ¹ 2p_z¹ (4 unpaired electrons)',
            arrowText: 'sp Hybridisation'
          },
          {
            step: '2 × sp Orbitals + 2 × (2pᵧ, 2p_z) Orbitals',
            detail: '2 sp hybrid orbitals at 180° linear + 2 unhybridized p-orbitals perpendicular',
            arrowText: 'Orbital Overlap'
          },
          {
            step: 'C≡C Framework (Linear 180°)',
            detail: '1 σ-bond (head-on sp-sp) + 2 perpendicular π-bonds (sidewise 2pᵧ-2pᵧ and 2p_z-2p_z)',
            arrowText: 'Resulting Molecule'
          }
        ]
      },
      importantPoints: [
        '🎯 C≡C Bond Distance = 120 pm; C≡C Bond Energy = 823 kJ/mol.',
        '🎯 Geometry: Linear around both sp carbons with exact 180° bond angles.',
        '🎯 Electron Cloud: Cylindrical π-electron density surrounds the internuclear axis.'
      ]
    },
    {
      heading: '2. Nomenclature & Isomerism in Alkynes',
      paragraphs: [
        'Nomenclature of alkynes follows standard IUPAC rules using the primary suffix -yne.',
        '• Rules for Naming:',
        '  1. Select the longest carbon chain containing the C≡C triple bond.',
        '  2. Number the carbon chain from the end closer to the triple bond to assign the lowest locant to C≡C.',
        '  3. For polyynes (multiple triple bonds), suffixes -adiyne, -atriyne are used.',
        '  4. Compounds containing BOTH C=C double bond and C≡C triple bond (Alkenynes): Number the chain to give the LOWEST LOCANTS to the unsaturated bonds as a set. If double bond and triple bond get the same locants from opposite ends, the DOUBLE BOND gets the lower locant! Named as alk-en-yne (e.g. pent-1-en-4-yne).',
        '• Isomerism in Alkynes:',
        '  - Chain Isomerism: Differ in carbon skeleton (e.g. pent-1-yne and 3-methylbut-1-yne).',
        '  - Position Isomerism: Differ in position of C≡C bond (e.g. but-1-yne and but-2-yne).',
        '  - Functional Isomerism: Alkynes are functional isomers of alkadienes (e.g. CH₃-C≡C-CH₃ and CH₂=CH-CH=CH₂) and cycloalkenes.'
      ],
      importantPoints: [
        '⚠️ NEET TRAP 1: When both C=C and C≡C are present at symmetrical positions (e.g. HC≡C-CH₂-CH=CH₂), the DOUBLE BOND gets lower locant (Pent-1-en-4-yne). Name ends with -yne!',
        '⚠️ NEET TRAP 2: Alkynes do NOT show geometrical isomerism (cis-trans) because the sp carbons are linear (180°) and attached to only one substituent.'
      ]
    },
    {
      heading: '3. Methods of Preparation of Alkynes',
      paragraphs: [
        'Alkynes are synthesized through double elimination reactions or organometallic carbon-carbon coupling.',
        '1. Double Dehydrohalogenation of Vicinal Dihalides:',
        '   Vicinal dihalides (1,2-dihaloalkanes) undergo elimination of two molecules of HX in two distinct steps.',
        '   - Step 1: Treatment with alcoholic KOH removes one HX molecule to form a haloalkene (vinylic halide).',
        '     R-CH(X)-CH₂(X) + alc. KOH ──► R-C(X)=CH₂ + KX + H₂O',
        '   - Step 2: Vinylic halides are unreactive towards alc. KOH due to resonance stabilization of C-X bond by π-electrons. Therefore, a MUCH STRONGER BASE, Sodium Amide (NaNH₂ in liq. NH₃), is required to remove the second HX molecule!',
        '     R-C(X)=CH₂ + NaNH₂ ──► R-C≡CH + NaX + NH₃',
        '2. Double Dehydrohalogenation of Geminal Dihalides:',
        '   Geminal dihalides (1,1-dihaloalkanes) similarly react with 2 moles of NaNH₂ to yield terminal or internal alkynes.',
        '   R-CH₂-CHX₂ + 2 NaNH₂ ──► R-C≡CH + 2 NaX + 2 NH₃',
        '3. Industrial Preparation of Acetylene (Ethyne) from Calcium Carbide:',
        '   Calcium oxide (lime) reacts with coke at high temperatures in an electric furnace to give calcium carbide (CaC₂). Hydrolysis of CaC₂ yields ethyne.',
        '   • CaCO₃ ──(Δ)──► CaO + CO₂',
        '   • CaO + 3 C ──(2273 K)──► CaC₂ + CO',
        '   • CaC₂ + 2 H₂O ──► HC≡CH + Ca(OH)₂',
        '4. Synthesis of Higher Alkynes from Lower Alkynes (Chain Lengthening):',
        '   Terminal alkynes react with NaNH₂ to form sodium acetylides, which undergo nucleophilic substitution (S_N2) with primary alkyl halides.',
        '   HC≡CH + NaNH₂ ──► HC≡C⁻ Na⁺ ──(R-X)──► HC≡C-R + NaX'
      ],
      visual: {
        type: 'flowchart',
        caption: 'Key Preparation Pathways for Alkynes',
        flowchartSteps: [
          {
            step: 'Vicinal Dihalide (R-CHX-CH₂X)',
            detail: '1. alc. KOH (-HX) → Vinyl Halide ; 2. NaNH₂ in liq. NH₃ (-HX)',
            arrowText: 'Double Elimination'
          },
          {
            step: 'Geminal Dihalide (R-CH₂-CHX₂)',
            detail: 'React with 2 eq. NaNH₂ in liquid NH₃',
            arrowText: 'Double Elimination'
          },
          {
            step: 'Calcium Carbide (CaC₂)',
            detail: 'Hydrolysis with H₂O (CaC₂ + 2 H₂O → Ca(OH)₂ + C₂H₂)',
            arrowText: 'Industrial Ethyne'
          },
          {
            step: 'Sodium Acetylide (R-C≡C⁻ Na⁺)',
            detail: 'Nucleophilic substitution with 1° Alkyl Halide (R\'-X)',
            arrowText: 'Chain Extension'
          }
        ]
      },
      importantPoints: [
        '🎯 Why NaNH₂ is required: Alc. KOH can remove 1st HX from vicinal dihalide, but CANNOT remove 2nd HX from vinylic halide because C=C-X bond has partial double bond character due to resonance. NaNH₂ is a strong enough base to accomplish this!',
        '🎯 CaC₂ hydrolysis is a classic NEET inorganic/organic crossover reaction.'
      ]
    },
    {
      heading: '4. Acidic Nature of Terminal Alkynes & Conjugate Base Stability',
      paragraphs: [
        'Terminal alkynes (R-C≡C-H) display acidic character, readily donating a proton (H⁺) to strong bases to form alkynide (acetylide) anions.',
        '• Electronic Origin of Acidity (Hybridisation Effect):',
        '  - sp Hybridisation: The carbon in C≡C has 50% s-character.',
        '  - sp² Hybridisation: Carbon in C=C has 33.3% s-character.',
        '  - sp³ Hybridisation: Carbon in C-C has 25% s-character.',
        '  Since s-orbitals are closer to the nucleus and more penetrating, higher s-character means higher electronegativity of carbon. The sp carbon holds shared C-H electrons tightly, polarizing the C-H bond and facilitating H⁺ dissociation.',
        '• Acidity Comparison across Hydrocarbons:',
        '  HC≡CH > CH₃-C≡CH >> CH₂=CH₂ >> CH₃-CH₃',
        '  pKa values: Ethyne (~25) < Ethene (~44) < Ethane (~50). (Lower pKa = Stronger Acid).',
        '• Conjugate Base Stability:',
        '  The alkynide anion (R-C≡C⁻) places its negative charge in an sp orbital (50% s-character). This high s-character stabilizes the unshared electron pair close to the carbon nucleus, making R-C≡C⁻ a much weaker conjugate base than vinylic (R-CH=C⁻H) or alkyl (R-CH₂-C⁻H₂) carbanions.',
        '• Reactions Demonstrating Acidity:',
        '  1. Reaction with Sodium Metal: 2 R-C≡C-H + 2 Na ──► 2 R-C≡C⁻ Na⁺ + H₂↑ (Effervescence of H₂ gas!).',
        '  2. Reaction with Sodium Amide: R-C≡C-H + NaNH₂ ──► R-C≡C⁻ Na⁺ + NH₃↑'
      ],
      tables: [
        {
          headers: ['Property / Compound', 'Ethyne (HC≡CH)', 'Ethene (CH₂=CH₂)', 'Ethane (CH₃-CH₃)'],
          rows: [
            ['Hybridisation of Carbon', 'sp', 'sp²', 'sp³'],
            ['% s-Character', '50%', '33.3%', '25%'],
            ['Electronegativity of C', 'Highest (3.1)', 'Medium (2.8)', 'Lowest (2.5)'],
            ['Approximate pKa', '25 (Weak Acid)', '44 (Extremely Weak)', '50 (Non-acidic)'],
            ['Reaction with Na / NaNH₂', 'Releases H₂ / NH₃', 'No Reaction', 'No Reaction']
          ]
        }
      ],
      importantPoints: [
        '🎯 Terminal alkynes react with Na and NaNH₂ to release H₂ gas and NH₃ gas respectively.',
        '⚠️ NEET TRAP: Internal alkynes (e.g. But-2-yne CH₃-C≡C-CH₃) do NOT have terminal hydrogens and DO NOT react with Na or NaNH₂!'
      ]
    },
    {
      heading: '5. Metal Acetylides & Qualitative Tests for Terminal Alkynes',
      paragraphs: [
        'Terminal alkynes undergo characteristic precipitation reactions with heavy metal ions (Ag⁺ and Cu⁺) in ammoniacal solution, providing a diagnostic qualitative test to distinguish terminal alkynes from internal alkynes, alkenes, and alkanes.',
        '1. Test with Ammoniacal Silver Nitrate (Tollens\' Reagent):',
        '   When a terminal alkyne is treated with ammoniacal silver nitrate solution [Ag(NH₃)₂]⁺ OH⁻, a WHITE precipitate of Silver Acetylide is formed.',
        '   Equation: R-C≡C-H + [Ag(NH₃)₂]⁺ + OH⁻ ──► R-C≡C-Ag↓ (White ppt) + 2 NH₃ + H₂O',
        '   Ethyne forms a di-silver acetylide: HC≡CH + 2 [Ag(NH₃)₂]⁺ ──► Ag-C≡C-Ag↓ (White ppt).',
        '2. Test with Ammoniacal Cuprous Chloride:',
        '   When a terminal alkyne is treated with ammoniacal cuprous chloride solution [Cu(NH₃)₂]⁺ Cl⁻, a RED / REDDISH-BROWN precipitate of Copper Acetylide is formed.',
        '   Equation: R-C≡C-H + [Cu(NH₃)₂]⁺ + OH⁻ ──► R-C≡C-Cu↓ (Red ppt) + 2 NH₃ + H₂O',
        '   Ethyne forms di-copper acetylide: HC≡CH + 2 [Cu(NH₃)₂]⁺ ──► Cu-C≡C-Cu↓ (Red ppt).',
        '3. Regeneration of Pure Alkyne:',
        '   The metal acetylide precipitates can be decomposed back to the pure terminal alkyne by treating with dilute mineral acid (HCl or HNO₃). This is used for purification of terminal alkynes!',
        '   R-C≡C-Ag + HCl ──► R-C≡C-H + AgCl↓'
      ],
      examples: [
        {
          problem: 'How can you distinguish between But-1-yne and But-2-yne chemically in the laboratory?',
          given: 'Reactants: But-1-yne (CH₃-CH₂-C≡C-H) and But-2-yne (CH₃-C≡C-CH₃)',
          stepByStep: [
            '1. Identify terminal vs internal structure: But-1-yne is a terminal alkyne; But-2-yne is an internal alkyne.',
            '2. Add Ammoniacal Silver Nitrate (Tollens\' reagent) or Ammoniacal Cuprous Chloride to both samples.',
            '3. But-1-yne contains an acidic terminal C-H bond and reacts to give a WHITE precipitate (Silver acetylide) or RED precipitate (Copper acetylide).',
            '4. But-2-yne lacks acidic terminal hydrogens and gives NO precipitate.'
          ],
          solution: 'Use Ammoniacal AgNO₃ or Ammoniacal Cu₂Cl₂. But-1-yne forms a white/red precipitate; But-2-yne shows no reaction.'
        }
      ],
      importantPoints: [
        '🎯 Tollens\' Test (White ppt) and Cuprous Chloride Test (Red ppt) are EXCLUSIVE to Terminal Alkynes!',
        '⚠️ NEET TRAP: Neither alkenes, alkanes, NOR internal alkynes give these tests!'
      ]
    },
    {
      heading: '6. Hydrogenation of Alkynes: Complete vs Partial Reduction (Lindlar vs Birch)',
      paragraphs: [
        'Alkynes contain two π-bonds and can be reduced step-wise to alkenes or completely to alkanes.',
        'A. Complete Hydrogenation (To Alkane):',
        '   Passing excess H₂ gas over finely divided Ni, Pt, or Pd catalyst converts alkyne into alkane.',
        '   Equation: R-C≡C-R\' + 2 H₂ ──(Ni, Pt, or Pd)──► R-CH₂-CH₂-R\'',
        'B. Partial Reduction to Cis-Alkene (Lindlar\'s Catalyst):',
        '   Reacting an internal alkyne with 1 equivalent of H₂ in the presence of Lindlar\'s catalyst (Pd/CaCO₃ partially poisoned with quinoline or lead acetate) yields a CIS-alkene stereoselectively.',
        '   - Mechanism: Both H atoms are delivered to the SAME face of the triple bond on the solid catalyst surface (SYN-ADDITION).',
        '   - Equation: R-C≡C-R\' + H₂ ──(Pd/CaCO₃ + quinoline)──► Cis-Alkene',
        'C. Partial Reduction to Trans-Alkene (Birch Reduction):',
        '   Reacting an internal alkyne with Sodium or Lithium in liquid ammonia (Na / liq. NH₃) yields a TRANS-alkene stereoselectively.',
        '   - Mechanism: Proceeds via radical-anion intermediate where electron-electron repulsions force the alkyl groups to assume a trans-orientation (ANTI-ADDITION).',
        '   - Equation: R-C≡C-R\' + 2 [H] ──(Na / liq. NH₃)──► Trans-Alkene'
      ],
      visual: {
        type: 'flowchart',
        caption: 'Stereospecific Hydrogenation Pathways of Alkynes',
        flowchartSteps: [
          {
            step: 'Internal Alkyne (R-C≡C-R)',
            detail: 'Choose reagent and catalyst condition',
            arrowText: 'Select Pathway'
          },
          {
            step: 'H₂ / Ni, Pt, or Pd',
            detail: 'Complete reduction adding 2 moles H₂',
            arrowText: 'Product = Alkane (R-CH₂-CH₂-R)'
          },
          {
            step: 'H₂ / Lindlar Catalyst (Pd/CaCO₃ + quinoline)',
            detail: 'Controlled syn-addition of 1 mole H₂',
            arrowText: 'Product = Cis-Alkene (Major)'
          },
          {
            step: 'Na / Liquid NH₃ (Birch Reduction)',
            detail: 'Dissolving metal anti-addition',
            arrowText: 'Product = Trans-Alkene (Major)'
          }
        ]
      },
      importantPoints: [
        '🎯 Lindlar Catalyst = Pd/CaCO₃ poisoned with quinoline ──► CIS-alkene (Syn addition).',
        '🎯 Birch Reduction = Na in liquid NH₃ ──► TRANS-alkene (Anti addition).'
      ]
    },
    {
      heading: '7. Addition Reactions: Halogenation & Hydrohalogenation',
      paragraphs: [
        'Because alkynes contain two π-bonds, electrophilic addition reactions generally occur in two sequential steps.',
        '1. Halogenation (Addition of X₂ = Cl₂, Br₂):',
        '   - Step 1: Addition of 1 mole of Br₂ (in CCl₄) gives a vicinal dihaloalkene (predominantly trans-isomer).',
        '     R-C≡C-R\' + Br₂ ──► R-C(Br)=C(Br)-R\' (1,2-Dibromoalkene)',
        '   - Step 2: Addition of a 2nd mole of Br₂ gives a 1,1,2,2-tetrahaloalkane.',
        '     R-C(Br)=C(Br)-R\' + Br₂ ──► R-C(Br)₂-C(Br)₂-R\' (Tetrabromoalkane)',
        '   - Test for Unsaturation: Alkynes decolourise the reddish-brown color of bromine in CCl₄.',
        '2. Hydrohalogenation (Addition of HX = HCl, HBr, HI):',
        '   - Step 1: Addition of 1 mole of HX to a terminal alkyne follows Markovnikov\'s rule to give a haloalkene (vinylic halide).',
        '     R-C≡C-H + HX ──► R-C(X)=CH₂ (2-Haloalkene)',
        '   - Step 2: Addition of a 2nd mole of HX AGAIN follows Markovnikov\'s rule. Hydrogen adds to C-1 (with 2 H\'s) and halogen adds to C-2 to yield a GEMINAL DIHALIDE (1,1-dihaloalkane)!',
        '     R-C(X)=CH₂ + HX ──► R-C(X)₂-CH₃ (2,2-Dihaloalkane)',
        '   - Example: Propyne + 2 HBr ──► 2,2-dibromopropane.'
      ],
      examples: [
        {
          problem: 'Predict the final product formed when Propyne is treated with 2 equivalents of HBr.',
          given: 'Reactant: CH₃-C≡CH + 2 HBr',
          stepByStep: [
            '1. Step 1 (1st HBr addition): H⁺ adds to C-1 (with 1 H) and Br⁻ adds to C-2 according to Markovnikov\'s rule → CH₃-C(Br)=CH₂ (2-bromopropene).',
            '2. Step 2 (2nd HBr addition): H⁺ adds to C-1 (now with 2 H\'s) and Br⁻ adds to C-2 (bearing Br) → CH₃-C(Br)₂-CH₃.',
            '3. Both halogens end up on C-2, forming a geminal dihalide.'
          ],
          solution: '2,2-Dibromopropane (a geminal dihalide).'
        }
      ],
      importantPoints: [
        '🎯 Hydrohalogenation of alkynes with 2 moles of HX selectively yields GEMINAL DIHALIDES (both halogens on the same carbon).',
        '🎯 Peroxide effect with HBr on terminal alkynes yields Anti-Markovnikov products in both steps.'
      ]
    },
    {
      heading: '8. Hydration of Alkynes (Kucherov Reaction) & Keto-Enol Tautomerism',
      paragraphs: [
        'Direct addition of water across C≡C triple bond is slow and requires a heavy metal catalyst: 1% Mercuric Sulfate (HgSO₄) and 20% Sulfuric Acid (H₂SO₄) at 333 K (60°C).',
        '• General Reaction Pathway:',
        '  Step 1: Electrophilic attack by Hg²⁺ followed by H₂O addition across the triple bond according to Markovnikov\'s rule yields an unstable ENOL intermediate (-C(OH)=C-).',
        '  Step 2: The enol intermediate spontaneously undergoes KETO-ENOL TAUTOMERISM (1,3-proton shift) to transform into a stable carbonyl compound (aldehyde or ketone).',
        '• Specific Products:',
        '  1. Ethyne (Acetylene): HC≡CH + H₂O ──(Hg²⁺/H⁺, 333 K)──► [CH₂=CH-OH] (Vinyl Alcohol, unstable enol) ⇌ CH₃-CHO (ETHANAL / Acetaldehyde).',
        '     Ethyne is the ONLY ALKYNE that produces an ALDEHYDE upon hydration!',
        '  2. Propyne: CH₃-C≡CH + H₂O ──(Hg²⁺/H⁺, 333 K)──► [CH₃-C(OH)=CH₂] (Enol) ⇌ CH₃-CO-CH₃ (PROPANONE / Acetone).',
        '  3. Unsymmetrical Internal Alkynes: Give a mixture of two isomeric ketones.',
        '• Why Keto Form Prevails: The C=O bond dissociation energy (745 kJ/mol) is significantly higher than C=C bond energy (611 kJ/mol), making the keto form thermodynamically far more stable (>99.9% keto at equilibrium).'
      ],
      visual: {
        type: 'flowchart',
        caption: 'Kucherov Hydration Mechanism & Tautomerism',
        flowchartSteps: [
          {
            step: 'Alkyne + H₂O',
            detail: 'R-C≡CH + H₂O in 1% HgSO₄ / 20% H₂SO₄ at 333 K',
            arrowText: 'Markovnikov Addition'
          },
          {
            step: 'Unstable Enol Intermediate',
            detail: 'R-C(OH)=CH₂ (Vinyl alcohol derivative)',
            arrowText: '1,3-Proton Shift'
          },
          {
            step: 'Keto-Enol Tautomerism Equilibrium',
            detail: 'Proton migrates from -OH oxygen to CH₂ carbon; double bond shifts to C=O',
            arrowText: 'Irreversible Shift to Keto'
          },
          {
            step: 'Final Carbonyl Product',
            detail: 'CH₃CHO (if Ethyne) or R-CO-CH₃ Ketone (if higher alkyne)',
            arrowText: 'Thermodynamic Sink'
          }
        ]
      },
      importantPoints: [
        '🎯 Ethyne + H₂O (Hg²⁺/H⁺) ──► ETHANAL (ONLY alkyne giving aldehyde!).',
        '🎯 Propyne + H₂O (Hg²⁺/H⁺) ──► PROPANONE (Ketone).',
        '🎯 Enol form converts to Keto form via 1,3-proton migration.'
      ]
    },
    {
      heading: '9. Oxidation, Ozonolysis & Cyclic Polymerisation',
      paragraphs: [
        'Alkynes undergo oxidative cleavage of the triple bond or cyclic oligomerisation depending on reagents used.',
        'A. Oxidation with Hot Acidic KMnO₄ / K₂Cr₂O₇:',
        '   Cleaves the C≡C triple bond completely:',
        '   • Internal Alkyne (R-C≡C-R\') ──(Hot KMnO₄/H⁺)──► R-COOH + R\'-COOH (Carboxylic acids).',
        '   • Terminal Alkyne (R-C≡C-H) ──(Hot KMnO₄/H⁺)──► R-COOH + CO₂ + H₂O.',
        '   • Ethyne (HC≡CH) ──(Hot KMnO₄/H⁺)──► 2 CO₂ + 2 H₂O.',
        'B. Reductive / Oxidative Ozonolysis:',
        '   • Alkynes react with O₃ followed by H₂O cleavage to give diketones or carboxylic acids.',
        '   • Equation: R-C≡C-R\' ──(1. O₃ ; 2. H₂O)──► R-COOH + R\'-COOH.',
        '   • Shortcut for Ozonolysis: Completely break C≡C and attach -COOH groups to both formerly triply-bonded carbon atoms!',
        'C. Cyclic Polymerisation (Trimerisation to Aromatic Compounds):',
        '   • Ethyne: When passed through a red-hot iron tube at 873 K (600°C), three molecules of ethyne undergo cyclic trimerisation to yield BENZENE.',
        '     Equation: 3 C₂H₂ ──(Red hot Fe tube, 873 K)──► C₆H₆ (Benzene)',
        '   • Propyne: Cyclic trimerisation of three molecules of propyne yields 1,3,5-TRIMETHYLBENZENE (Mesitylene).',
        '     Equation: 3 CH₃-C≡CH ──(Red hot Fe tube, 873 K)──► 1,3,5-Trimethylbenzene'
      ],
      importantPoints: [
        '🎯 3 Ethyne ──(Red hot Fe, 873 K)──► Benzene (C₆H₆).',
        '🎯 3 Propyne ──(Red hot Fe, 873 K)──► Mesitylene (1,3,5-trimethylbenzene).',
        '🎯 Ozonolysis of alkynes yields carboxylic acids (unlike alkenes which yield aldehydes/ketones).'
      ]
    },
    {
      heading: '10. Master Reaction Comparison Matrix & NEET Traps',
      paragraphs: [
        'Below is a comprehensive summary comparison of all key alkyne reactions for instant NEET revision.'
      ],
      tables: [
        {
          headers: ['Reaction', 'Reagents & Conditions', 'Product (Ethyne / Propyne)', 'Key NEET Clue'],
          rows: [
            ['Complete Hydrogenation', 'H₂ / Ni, Pt, or Pd', 'Alkane (Ethane / Propane)', 'Reduces both π-bonds'],
            ['Partial Reduction (Cis)', 'H₂ / Lindlar\'s catalyst (Pd/CaCO₃ + quinoline)', 'Cis-Alkene', 'Syn-addition; stops at alkene'],
            ['Partial Reduction (Trans)', 'Na / liquid NH₃ (Birch Reduction)', 'Trans-Alkene', 'Anti-addition; stops at alkene'],
            ['Halogenation (2 eq.)', 'Br₂ in CCl₄', '1,1,2,2-Tetrahaloalkane', 'Decolourises reddish-brown Br₂'],
            ['Hydrohalogenation (2 eq.)', 'HX (HCl, HBr)', 'Geminal Dihalide (R-CX₂-CH₃)', 'Markovnikov addition in both steps'],
            ['Hydration (Kucherov)', '1% HgSO₄ / 20% H₂SO₄ at 333 K', 'Ethanal (from Ethyne) / Ketone (from higher)', 'Enol tautomerises to Keto form'],
            ['Acidic Metal Reaction', 'Na metal or NaNH₂', 'Sodium Acetylide + H₂ / NH₃', 'EXCLUSIVE to Terminal Alkynes!'],
            ['Tollens\' Test', 'Ammoniacal AgNO₃', 'White Precipitate (Ag-C≡C-Ag)', 'EXCLUSIVE to Terminal Alkynes!'],
            ['Cuprous Test', 'Ammoniacal Cu₂Cl₂', 'Red Precipitate (Cu-C≡C-Cu)', 'EXCLUSIVE to Terminal Alkynes!'],
            ['Cyclic Trimerisation', 'Red hot Iron tube, 873 K', 'Benzene (from Ethyne) / Mesitylene (from Propyne)', 'Aromatic ring synthesis']
          ]
        }
      ],
      importantPoints: [
        '⚠️ NEET TRAP SUMMARY:',
        '1. ONLY Ethyne gives Ethanal on Kucherov hydration; ALL other alkynes give Ketones.',
        '2. ONLY Terminal alkynes (R-C≡C-H) form precipitates with Tollens\' and Cu₂Cl₂ reagents.',
        '3. Lindlar catalyst yields CIS-alkenes; Birch reduction yields TRANS-alkenes.',
        '4. Hydrohalogenation with 2 eq. HX produces GEMINAL dihalides, NOT vicinal dihalides.',
        '5. Double elimination of vicinal dihalide requires NaNH₂ for the 2nd step because vinyl halide C=C-X is resonance stabilized.'
      ]
    }
  ],

  formulae: [
    {
      title: 'General Formula of Alkynes',
      formula: 'C_n H_{2n-2}',
      variables: 'n = number of carbon atoms (n ≥ 2)',
      whenToUse: 'To determine molecular formula of mono-alkynes'
    },
    {
      title: 'Degrees of Unsaturation (IHD)',
      formula: 'IHD = C + 1 - (H + X - N) / 2',
      variables: 'C = Carbons, H = Hydrogens, X = Halogens, N = Nitrogens',
      whenToUse: 'For alkynes, IHD = 2 (indicates two π-bonds or one ring + one π-bond)'
    },
    {
      title: 'Kucherov Hydration Equation',
      formula: 'R-C equiv CH + H_2O xrightarrow{1\% HgSO_4, 20\% H_2SO_4, 333 K} [R-C(OH)=CH_2] implies R-CO-CH_3',
      variables: 'Hg²⁺ catalyst in acidic medium at 333 K',
      whenToUse: 'Conversion of alkynes to aldehydes (ethyne) or ketones (higher alkynes)'
    },
    {
      title: 'Cyclic Trimerisation Equation',
      formula: '3 HC equiv CH xrightarrow{\text{Red hot Fe tube}, 873 K} C_6H_6 \quad \text{(Benzene)}',
      variables: 'Ethyne passed through heated Fe tube',
      whenToUse: 'Synthesis of aromatic benzene ring from ethyne'
    }
  ],

  neetImportantPoints: [
    '🎯 Linear Geometry: sp hybridized carbons in C≡C form a 180° bond angle with 120 pm bond length.',
    '🎯 Terminal Acidity: s-character of sp carbon is 50%, making terminal C-H bonds acidic (pKa ~25).',
    '🎯 Tollens\' & Cuprous Tests: Terminal alkynes form WHITE ppt with ammoniacal AgNO₃ and RED ppt with ammoniacal Cu₂Cl₂. Internal alkynes DO NOT react.',
    '🎯 Lindlar vs Birch: Lindlar catalyst (Pd/CaCO₃ + quinoline) gives CIS-alkenes; Birch reduction (Na/liq. NH₃) gives TRANS-alkenes.',
    '🎯 Kucherov Hydration: Ethyne gives ETHANAL; Propyne and higher alkynes give KETONES (via enol tautomerism).',
    '🎯 Hydrohalogenation: Addition of 2 moles of HX yields GEMINAL DIHALIDES (R-CX₂-CH₃).',
    '🎯 Preparation Base: Vicinal dihalide conversion to alkyne requires alc. KOH for 1st step and NaNH₂ for 2nd step (vinyl halide unreactive to KOH).',
    '🎯 Calcium Carbide Hydrolysis: CaC₂ + 2 H₂O ──► HC≡CH + Ca(OH)₂ (industrial ethyne synthesis).',
    '🎯 Cyclic Polymerisation: 3 Ethyne ──(Fe tube, 873 K)──► Benzene; 3 Propyne ──► Mesitylene (1,3,5-trimethylbenzene).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Expecting all alkynes to react with Tollens\' reagent or Ammoniacal Cuprous Chloride.',
      correctFact: 'ONLY terminal alkynes (R-C≡C-H) with acidic hydrogens give white/red precipitates. Internal alkynes (R-C≡C-R\') like But-2-yne have no acidic hydrogens and DO NOT react.',
      whyItMattersForNEET: 'Frequent NEET question testing chemical differentiation between But-1-yne and But-2-yne.'
    },
    {
      commonConfusion: 'Thinking that hydration of all alkynes yields aldehydes.',
      correctFact: 'Ethyne (HC≡CH) is the ONLY alkyne that produces an aldehyde (ethanal). Propyne and all higher alkynes yield KETONES because Markovnikov addition places -OH on the internal carbon.',
      whyItMattersForNEET: 'Major NEET trap when predicting the product of propyne hydration.'
    },
    {
      commonConfusion: 'Assuming alcoholic KOH alone can convert a vicinal dihalide directly into an alkyne.',
      correctFact: 'Alcoholic KOH can only remove the first HX to form a vinylic halide (C=C-X). The vinylic C-X bond has partial double bond character due to resonance, making it unreactive toward alc. KOH. NaNH₂ (a much stronger base) is required for the second elimination step.',
      whyItMattersForNEET: 'Tests understanding of base strengths and resonance in elimination mechanisms.'
    },
    {
      commonConfusion: 'Confusing products of Lindlar catalyst and Birch reduction.',
      correctFact: 'Lindlar catalyst (Pd/CaCO₃ + quinoline) yields CIS-alkenes via syn-addition. Birch reduction (Na / liq. NH₃) yields TRANS-alkenes via anti-addition.',
      whyItMattersForNEET: 'Stereochemistry of reduction is heavily emphasized in NEET organic questions.'
    }
  ],

  quickRevision: [
    '• C≡C triple bond: sp hybridized, 180° linear geometry, 120 pm length, 823 kJ/mol energy.',
    '• Terminal alkynes (R-C≡C-H) are acidic due to 50% s-character on sp carbon. pKa ~25.',
    '• Terminal Alkyne Tests: White ppt with Ammoniacal AgNO₃ (Tollens\'); Red ppt with Ammoniacal Cu₂Cl₂. Internal alkynes do NOT react!',
    '• Preparation: Vicinal dihalide + alc. KOH ──► Vinyl halide ──(NaNH₂)──► Alkyne. CaC₂ + 2 H₂O ──► Ethyne + Ca(OH)₂.',
    '• Reduction: H₂/Lindlar catalyst ──► CIS-alkene (syn). Na/liq. NH₃ (Birch) ──► TRANS-alkene (anti). Excess H₂/Ni ──► Alkane.',
    '• Addition of 2 HX: Follows Markovnikov in both steps to yield Geminal Dihalide (R-CX₂-CH₃).',
    '• Kucherov Hydration (1% HgSO₄ / 20% H₂SO₄, 333 K): Ethyne ──► Ethanal. Propyne ──► Propanone (via enol-keto tautomerism).',
    '• Cyclic Polymerisation: 3 C₂H₂ ──(Red hot Fe, 873 K)──► Benzene. 3 Propyne ──► Mesitylene.'
  ],

  practiceQuestions: [
  {
    "id": "pq-alkynes-1",
    "question": "Which of the following compounds will give a red precipitate when treated with ammoniacal cuprous chloride solution?",
    "options": [
      "But-2-yne",
      "But-1-yne",
      "But-2-ene",
      "Butane"
    ],
    "correctAnswer": 1,
    "explanation": "Ammoniacal cuprous chloride reacts exclusively with terminal alkynes (bearing acidic -C≡C-H hydrogen) to form a red precipitate of copper acetylide. But-1-yne (CH₃-CH₂-C≡C-H) is a terminal alkyne and gives a red precipitate. But-2-yne is an internal alkyne, and But-2-ene / Butane are alkenes/alkanes; none of them possess acidic terminal hydrogens.",
    "difficulty": "Easy",
    "topicId": "chem-alkynes",
    "conceptTested": "Test for Terminal Alkynes"
  },
  {
    "id": "pq-alkynes-2",
    "question": "Hydration of propyne in the presence of 1% HgSO₄ and 20% H₂SO₄ at 333 K yields:",
    "options": [
      "Propanal",
      "Propanone",
      "Propan-1-ol",
      "Propanoic acid"
    ],
    "correctAnswer": 1,
    "explanation": "Hydration of propyne (CH₃-C≡CH) with 1% HgSO₄ and 20% H₂SO₄ follows Markovnikov's rule to give an unstable enol intermediate: CH₃-C(OH)=CH₂. The enol rapidly tautomerises (1,3-proton shift) to the more stable keto form, Propanone (acetone, CH₃-CO-CH₃). Ethyne is the ONLY alkyne that produces an aldehyde on hydration.",
    "difficulty": "Medium",
    "topicId": "chem-alkynes",
    "conceptTested": "Kucherov Reaction & Tautomerism"
  },
  {
    "id": "pq-alkynes-3",
    "question": "Controlled hydrogenation of But-2-yne with Na in liquid ammonia gives:",
    "options": [
      "cis-But-2-ene",
      "trans-But-2-ene",
      "Butane",
      "But-1-ene"
    ],
    "correctAnswer": 1,
    "explanation": "Reduction of an internal alkyne using sodium in liquid ammonia (Birch reduction) proceeds via a radical-anion mechanism with anti-addition of hydrogen atoms, yielding trans-But-2-ene as the major product. Reduction using Lindlar's catalyst yields cis-But-2-ene.",
    "difficulty": "Easy",
    "topicId": "chem-alkynes",
    "conceptTested": "Birch Reduction Stereochemistry"
  },
  {
    "id": "pq-alkynes-4",
    "question": "When 1,2-dibromopropane is heated with alcoholic KOH followed by treatment with NaNH₂, the product obtained is:",
    "options": [
      "Propene",
      "Propyne",
      "Propane",
      "1-Bromopropene"
    ],
    "correctAnswer": 1,
    "explanation": "1,2-dibromopropane is a vicinal dihalide (CH₃-CHBr-CH₂Br). Treatment with alcoholic KOH removes 1 mole of HBr to give 2-bromopropene (a vinylic halide). Because the vinylic C-Br bond has partial double bond character, a stronger base, NaNH₂ in liquid NH₃, is required to eliminate the 2nd mole of HBr, producing Propyne (CH₃-C≡CH).",
    "difficulty": "Medium",
    "topicId": "chem-alkynes",
    "conceptTested": "Preparation of Alkynes via Double Elimination"
  },
  {
    "id": "pq-alkynes-5",
    "question": "What is the product formed when 2 equivalents of HBr react with Propyne?",
    "options": [
      "1,2-Dibromopropane",
      "1,3-Dibromopropane",
      "2,2-Dibromopropane",
      "1,1-Dibromopropane"
    ],
    "correctAnswer": 2,
    "explanation": "Electrophilic addition of HBr to propyne (CH₃-C≡CH) follows Markovnikov's rule in both steps. Step 1: CH₃-C≡CH + HBr ──► CH₃-C(Br)=CH₂ (2-bromopropene). Step 2: CH₃-C(Br)=CH₂ + HBr ──► CH₃-C(Br)₂-CH₃ (2,2-dibromopropane). Both bromine atoms attach to C-2, forming a geminal dihalide.",
    "difficulty": "Hard",
    "topicId": "chem-alkynes",
    "conceptTested": "Hydrohalogenation & Gem-Dihalide Formation"
  },
  {
    "id": "prac-chemalkynes-6",
    "question": "Regarding Alkynes & Their Reactions, which of the following statements correctly resolves a common misconception about \"Expecting all alkynes to react with Tollens' reagent or Ammoniacal Cuprous Chloride.\"?",
    "options": [
      "ONLY terminal alkynes (R-C≡C-H) with acidic hydrogens give white/red precipitates. Internal alkynes (R-C≡C-R') like But-2-yne have no acidic hydrogens and DO NOT react.",
      "Incorrect assumption: Expecting all alkynes to react with Tollens' reagent or Ammoniacal Cuprous Chloride.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "ONLY terminal alkynes (R-C≡C-H) with acidic hydrogens give white/red precipitates. Internal alkynes (R-C≡C-R') like But-2-yne have no acidic hydrogens and DO NOT react.. Frequent NEET question testing chemical differentiation between But-1-yne and But-2-yne.",
    "difficulty": "Medium",
    "conceptTested": "Alkynes & Their Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chemalkynes-7",
    "question": "Regarding Alkynes & Their Reactions, which of the following statements correctly resolves a common misconception about \"Thinking that hydration of all alkynes yields aldehydes.\"?",
    "options": [
      "Ethyne (HC≡CH) is the ONLY alkyne that produces an aldehyde (ethanal). Propyne and all higher alkynes yield KETONES because Markovnikov addition places -OH on the internal carbon.",
      "Incorrect assumption: Thinking that hydration of all alkynes yields aldehydes.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Ethyne (HC≡CH) is the ONLY alkyne that produces an aldehyde (ethanal). Propyne and all higher alkynes yield KETONES because Markovnikov addition places -OH on the internal carbon.. Major NEET trap when predicting the product of propyne hydration.",
    "difficulty": "Medium",
    "conceptTested": "Alkynes & Their Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chemalkynes-8",
    "question": "Regarding Alkynes & Their Reactions, which of the following statements correctly resolves a common misconception about \"Assuming alcoholic KOH alone can convert a vicinal dihalide directly into an alkyne.\"?",
    "options": [
      "Alcoholic KOH can only remove the first HX to form a vinylic halide (C=C-X). The vinylic C-X bond has partial double bond character due to resonance, making it unreactive toward alc. KOH. NaNH₂ (a much stronger base) is required for the second elimination step.",
      "Incorrect assumption: Assuming alcoholic KOH alone can convert a vicinal dihalide directly into an alkyne.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Alcoholic KOH can only remove the first HX to form a vinylic halide (C=C-X). The vinylic C-X bond has partial double bond character due to resonance, making it unreactive toward alc. KOH. NaNH₂ (a much stronger base) is required for the second elimination step.. Tests understanding of base strengths and resonance in elimination mechanisms.",
    "difficulty": "Medium",
    "conceptTested": "Alkynes & Their Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chemalkynes-9",
    "question": "Regarding Alkynes & Their Reactions, which of the following statements correctly resolves a common misconception about \"Confusing products of Lindlar catalyst and Birch reduction.\"?",
    "options": [
      "Lindlar catalyst (Pd/CaCO₃ + quinoline) yields CIS-alkenes via syn-addition. Birch reduction (Na / liq. NH₃) yields TRANS-alkenes via anti-addition.",
      "Incorrect assumption: Confusing products of Lindlar catalyst and Birch reduction.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Lindlar catalyst (Pd/CaCO₃ + quinoline) yields CIS-alkenes via syn-addition. Birch reduction (Na / liq. NH₃) yields TRANS-alkenes via anti-addition.. Stereochemistry of reduction is heavily emphasized in NEET organic questions.",
    "difficulty": "Medium",
    "conceptTested": "Alkynes & Their Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chemalkynes-10",
    "question": "In the study of Alkynes & Their Reactions, what is the exact definition and significance of \"Alkyne / Acetylene Series\"?",
    "options": [
      "An unsaturated hydrocarbon containing one or more carbon-carbon triple bonds (C≡C) with sp hybridized carbons.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "An unsaturated hydrocarbon containing one or more carbon-carbon triple bonds (C≡C) with sp hybridized carbons.. Simplest member is ethyne/acetylene (C₂H₂). Degree of unsaturation (IHD) = 2.",
    "difficulty": "Easy",
    "conceptTested": "Alkyne / Acetylene Series definition"
  }
],
  pyqs: [
    {
      id: 'pyq-alkynes-1',
      year: 2014,
      exam: 'AIPMT 2014',
      question: 'The major product formed in the hydration of propyne with Hg²⁺ / H₂SO₄ is:',
      options: ['CH₃-CH₂-CHO', 'CH₃-CO-CH₃', 'CH₃-CH₂-CH₂OH', 'CH₃-CH(OH)-CH₃'],
      correctAnswer: 1,
      explanation: 'Hydration of propyne (CH₃-C≡CH) catalyzed by Hg²⁺ and H₂SO₄ at 333 K undergoes Markovnikov addition of H₂O to form the enol intermediate CH₃-C(OH)=CH₂, which tautomerises rapidly into Propanone (acetone, CH₃-CO-CH₃).',
      conceptTested: 'Kucherov Hydration of Propyne',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkynes'
    },
    {
      id: 'pyq-alkynes-2',
      year: 2021,
      exam: 'NEET UG 2021',
      question: 'Which of the following hydrocarbon molecules possesses the highest acidic character?',
      options: ['HC≡CH', 'CH₂=CH₂', 'CH₃-CH₃', 'CH₃-CH=CH₂'],
      correctAnswer: 0,
      explanation: 'Ethyne (HC≡CH) has sp hybridized carbons with 50% s-character. Because s-orbitals are held tightly by the carbon nucleus, sp carbon is the most electronegative among sp, sp², and sp³ carbons. Hence, the C-H bond in ethyne is most polar and releases H⁺ most readily (pKa ~25), making ethyne the most acidic hydrocarbon listed.',
      conceptTested: 'Acidity Order of Hydrocarbons & Hybridisation',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkynes'
    },
    {
      id: 'pyq-alkynes-3',
      year: 2021,
      exam: 'NEET UG 2021',
      question: 'Product formed by the reaction of HC≡CH with H₂O in the presence of HgSO₄ and H₂SO₄ at 333 K is:',
      options: ['Ethanal', 'Ethanol', 'Ethene', 'Methanal'],
      correctAnswer: 0,
      explanation: 'Hydration of ethyne (HC≡CH) in 1% HgSO₄ / 20% H₂SO₄ at 333 K yields vinyl alcohol [CH₂=CH-OH] as an unstable enol intermediate, which spontaneously tautomerises to Ethanal (acetaldehyde, CH₃CHO). Ethyne is the only alkyne that gives an aldehyde on hydration.',
      conceptTested: 'Ethyne Hydration to Ethanal',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkynes'
    },
    {
      id: 'pyq-alkynes-4',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'Which of the following alkynes reacts with ammoniacal AgNO₃ to give a white precipitate?',
      options: ['But-1-yne', 'But-2-yne', 'Pent-2-yne', 'Hex-3-yne'],
      correctAnswer: 0,
      explanation: 'Only terminal alkynes containing acidic -C≡C-H hydrogens react with ammoniacal silver nitrate (Tollens\' reagent) to form a white precipitate of silver acetylide. But-1-yne (CH₃-CH₂-C≡C-H) is the only terminal alkyne among the options.',
      conceptTested: 'Tollens Test for Terminal Alkynes',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkynes'
    },
    {
      id: 'pyq-alkynes-5',
      year: 2004,
      exam: 'AIPMT 2004',
      question: 'When propyne reacts with 2 equivalents of HBr, the major product is:',
      options: ['1,2-Dibromopropane', '2,2-Dibromopropane', '1,1-Dibromopropane', '1,3-Dibromopropane'],
      correctAnswer: 1,
      explanation: 'Addition of HBr to propyne follows Markovnikov\'s rule in both consecutive steps. Step 1: CH₃-C≡CH + HBr ──► CH₃-C(Br)=CH₂. Step 2: CH₃-C(Br)=CH₂ + HBr ──► CH₃-C(Br)₂-CH₃. The major product is 2,2-dibromopropane (a geminal dihalide).',
      conceptTested: 'Hydrohalogenation of Alkynes',
      difficulty: 'Medium',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkynes'
    },
    {
      id: 'pyq-alkynes-6',
      year: 1996,
      exam: 'AIPMT 1996',
      question: 'Calcium carbide on reaction with water gives:',
      options: ['Methane', 'Ethane', 'Ethyne', 'Ethene'],
      correctAnswer: 2,
      explanation: 'Hydrolysis of calcium carbide (CaC₂) yields ethyne (acetylene) gas and calcium hydroxide: CaC₂ + 2 H₂O ──► HC≡CH + Ca(OH)₂.',
      conceptTested: 'Industrial Preparation of Ethyne',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkynes'
    },
    {
      id: 'pyq-alkynes-8',
      year: 2016,
      exam: 'NEET UG 2016',
      question: 'When ethyne is passed through a red-hot iron tube at 873 K, the product formed is:',
      options: ['Benzene', 'Cyclohexane', 'Ethane', 'Toluene'],
      correctAnswer: 0,
      explanation: 'Passing ethyne (C₂H₂) gas through a red-hot iron tube at 873 K causes cyclic trimerisation of three ethyne molecules to form Benzene (C₆H₆): 3 C₂H₂ ──► C₆H₆.',
      conceptTested: 'Cyclic Trimerisation of Ethyne',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkynes'
    },
    {
      id: 'pyq-alkynes-9',
      year: 2015,
      exam: 'AIPMT 2015',
      question: 'In the reaction: CH₃-C≡CH ──(NaNH₂ in liq. NH₃)──► A ──(CH₃-CH₂-Br)──► B, the compound B is:',
      options: ['But-1-yne', 'Pent-2-yne', 'Pent-1-yne', 'But-2-yne'],
      correctAnswer: 1,
      explanation: 'Propyne (CH₃-C≡CH) reacts with NaNH₂ to form sodium propynide A (CH₃-C≡C⁻ Na⁺). Treatment of A with ethyl bromide (CH₃-CH₂-Br) undergoes S_N2 nucleophilic substitution to give Pent-2-yne (CH₃-C≡C-CH₂-CH₃) as product B.',
      conceptTested: 'Alkyne Chain Lengthening via Sodium Acetylide',
      difficulty: 'Medium',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkynes'
    }
  ],
  neetMarksPotential: {
  "topicName": "Alkynes & Their Reactions",
  "confidenceLabel": "HIGH",
  "confidenceText": "High Confidence: Verified against 7 official NEET/AIPMT paper appearances (8 direct questions).",
  "totalAnalyzedPapers": 15,
  "papersWithDirectPyqs": 7,
  "totalDirectPyqs": 8,
  "totalHistoricalMarks": 32,
  "averageDirectPyqsPerPaper": 0.53,
  "maxDirectPyqsInSinglePaper": 2,
  "minDirectPyqsInSinglePaper": 1,
  "minDirectMarks": 4,
  "maxDirectMarks": 8,
  "avgDirectMarksPerPaper": 2.13,
  "typicalContributionMarks": 5,
  "historicalMarksRangeText": "4 to 8 marks per paper (tested in 7 of 15 analyzed papers)",
  "whatThisMeansForYou": "Based on 8 verified direct questions across 7 unique papers, mastering Alkynes & Their Reactions gives you a historical direct score potential of ~5 marks when present.",
  "yearWiseBreakdown": [
    {
      "id": "pyq-alkynes-2",
      "year": 2021,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Acidity Order of Hydrocarbons & Hybridisation",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-alkynes-3",
      "year": 2021,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Ethyne Hydration to Ethanal",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-alkynes-4",
      "year": 2020,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Tollens Test for Terminal Alkynes",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-alkynes-8",
      "year": 2016,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Cyclic Trimerisation of Ethyne",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-alkynes-9",
      "year": 2015,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Alkyne Chain Lengthening via Sodium Acetylide",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    },
    {
      "id": "pyq-alkynes-1",
      "year": 2014,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Kucherov Hydration of Propyne",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    },
    {
      "id": "pyq-alkynes-5",
      "year": 2004,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Hydrohalogenation of Alkynes",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    },
    {
      "id": "pyq-alkynes-6",
      "year": 1996,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Industrial Preparation of Ethyne",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    }
  ],
  "overlapPyqs": [],
  "sourceInfo": {
    "dataSource": "SATHEE (IIT Kanpur / Ministry of Education) & Official NEET Archives",
    "analysisPeriod": "2004 – 2024 (15 Verified Papers)",
    "directPyqsAnalyzedCount": 8,
    "classificationMethod": "Strict topic-level classification; chapter-level weightage was excluded.",
    "disclaimer": "Historical frequency is a record of past papers and not a guarantee of future NEET paper contents."
  }
}
};