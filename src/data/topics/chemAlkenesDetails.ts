import { DetailedTopicContent } from '../../types/neet'

export const chemAlkenesDetails: DetailedTopicContent = {
  topicId: 'chem-alkenes',
  topicName: 'Alkenes & Their Reactions',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Organic Chemistry',
  chapter: 'Hydrocarbons',

  whatIsThisTopic: 'Alkenes are unsaturated acyclic hydrocarbons containing at least one carbon-carbon double bond (C=C) with the general formula CₙH₂ₙ. Formerly known as olefins (Latin: oleum = oil, ficare = to make, because ethene formed oily liquids with chlorine), alkenes feature sp² hybridized carbons in a planar geometry with a 120° bond angle. The presence of a weak π-bond makes alkenes highly reactive towards electrophilic addition, oxidation, and polymerisation reactions.',

  basicIdea: [
    '📌 Planar C=C Framework: Carbon atoms forming the C=C double bond are sp² hybridized with a trigonal planar geometry (120° bond angles). The double bond consists of one strong σ-bond (sp²-sp² overlap) and one weaker π-bond (lateral overlap of unhybridized p-orbitals).',
    '📌 Restricted Rotation & Geometrical Isomerism: Rotation around the C=C π-bond is restricted due to high energy barrier (~251 kJ/mol). This leads to geometrical (cis-trans and E/Z) isomerism when each doubly bonded carbon carries two different substituents.',
    '📌 Electrophilic Addition (Eₐ): The electron-rich π-cloud above and below the C=C plane acts as a nucleophile, attracting electrophiles (E⁺) to form a carbocation intermediate in the rate-determining step.',
    '📌 Markovnikov vs Anti-Markovnikov: Addition of unsymmetrical reagents (HX) follows Markovnikov\'s rule (H⁺ adds to carbon with more H atoms via most stable carbocation). Addition of HBr in presence of organic peroxides follows Anti-Markovnikov rule via free radical mechanism.',
    '📌 Ozonolysis & Structural Elucidation: Reductive ozonolysis (O₃ followed by Zn/H₂O) cleaves the C=C double bond to form aldehydes and/or ketones, serving as a classic analytical tool to locate double bond positions.'
  ],

  importantTerms: [
    {
      term: 'Alkene / Olefin',
      symbol: 'CₙH₂ₙ',
      definition: 'An unsaturated hydrocarbon containing one or more carbon-carbon double bonds (C=C) with sp² hybridized carbons.',
      neetNote: 'Simplest member is ethene (C₂H₄). Degree of unsaturation (IHD) = 1.'
    },
    {
      term: 'sp² Hybridisation in C=C',
      definition: 'Mixing of one s and two p orbitals of carbon to form three equivalent sp² hybrid orbitals at 120° angles in a plane, leaving one unhybridized p-orbital perpendicular to the plane.',
      neetNote: 'C=C bond length is 134 pm (shorter than C-C 154 pm) and bond energy is 611 kJ/mol (weaker than two single bonds).'
    },
    {
      term: 'Geometrical Isomerism',
      definition: 'Stereoisomerism caused by restricted rotation around C=C double bond, where isomers differ in spatial arrangement of groups in 3D space (Cis vs Trans, E vs Z).',
      neetNote: 'Requires that NEITHER carbon of the C=C bond has two identical groups attached (a₂C=Ccd cannot show GI).'
    },
    {
      term: 'Electrophilic Addition Reaction (Eₐ)',
      definition: 'A reaction where an electrophile (E⁺) attacks the electron-rich π-bond of an alkene to form a carbocation intermediate, followed by nucleophile (Nu⁻) attack.',
      neetNote: 'Reactivity order of alkenes towards Eₐ increases with electron-donating (+I, +H) alkyl groups.'
    },
    {
      term: 'Markovnikov\'s Rule',
      definition: 'In the electrophilic addition of an unsymmetrical reagent (HX) to an unsymmetrical alkene, the positive hydrogen atom adds to the double-bonded carbon bearing the larger number of hydrogen atoms.',
      neetNote: 'Driven by carbocation stability (3° > 2° > 1°). Carbocation rearrangements (1,2-shifts) can occur!'
    },
    {
      term: 'Peroxide Effect (Kharasch Effect)',
      definition: 'The addition of HBr to an unsymmetrical alkene in the presence of organic peroxides (R-O-O-R) yields the Anti-Markovnikov product via a free radical chain mechanism.',
      neetNote: 'Applies ONLY to HBr. HCl and HI do NOT show the peroxide effect due to thermodynamic limitations.'
    },
    {
      term: 'Zaitsev / Saytzeff Rule',
      definition: 'In elimination reactions (dehydration of alcohols, dehydrohalogenation of haloalkanes), the major alkene product is the one that is more highly substituted (more alkylated double bond).',
      neetNote: 'More substituted alkenes are more stable due to greater hyperconjugative structures.'
    },
    {
      term: 'Hydroboration-Oxidation (HBO)',
      definition: 'Reaction of an alkene with diborane (B₂H₆/THF) followed by alkaline hydrogen peroxide (H₂O₂/OH⁻) to yield an alcohol corresponding to Anti-Markovnikov hydration with syn-stereospecificity.',
      neetNote: 'No carbocation intermediate is formed, so NO rearrangements occur.'
    },
    {
      term: 'Baeyer\'s Reagent',
      definition: 'Cold, dilute (1%) alkaline solution of potassium permanganate (KMnO₄) used to test for unsaturation (C=C or C≡C).',
      neetNote: 'Pink color of KMnO₄ is decolourised, forming a cis-1,2-diol (vicinal glycol).'
    },
    {
      term: 'Reductive Ozonolysis',
      definition: 'Cleavage of an alkene double bond by ozone (O₃) followed by reduction with Zn dust and H₂O to yield aldehydes and/or ketones.',
      neetNote: 'Zn prevents further oxidation of aldehydes to carboxylic acids.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Structure, Bonding & Hybridisation in Alkenes',
      paragraphs: [
        'Each carbon atom involved in a C=C double bond is sp² hybridized. Hybridisation involves the mixing of one 2s and two 2p orbitals, generating three equivalent sp² hybrid orbitals lying in the same plane at angles of 120°. The remaining unhybridized 2p-orbital sits perpendicular to the plane of the sp² hybrid orbitals.',
        '• σ-Bond Formation: One sp² orbital of each carbon overlaps head-on to form a strong C-C σ-bond. The remaining two sp² orbitals of each carbon overlap with 1s orbitals of hydrogen (or sp³ orbitals of carbon) to form C-H σ-bonds.',
        '• π-Bond Formation: The unhybridized p-orbitals on adjacent carbons overlap laterally (sidewise) above and below the internuclear axis to form a π-cloud.',
        '• Bond Properties: The C=C double bond length is 134 pm (compared to C-C single bond 154 pm). The total C=C bond dissociation enthalpy is 611 kJ/mol (σ-bond ≈ 348 kJ/mol, π-bond ≈ 263 kJ/mol). Because the π-bond is weaker and exposed, it serves as an electron donor (Lewis base/nucleophile).'
      ],
      visual: {
        type: 'flowchart',
        caption: 'sp² Hybridisation & Bonding Architecture in Ethene',
        flowchartSteps: [
          {
            step: 'Ground State Carbon',
            detail: '1s² 2s² 2pₓ¹ 2pᵧ¹ (2 valence electrons paired in 2s)',
            arrowText: 'Excitation'
          },
          {
            step: 'Excited State Carbon',
            detail: '1s² 2s¹ 2pₓ¹ 2pᵧ¹ 2p_z¹ (4 unpaired electrons)',
            arrowText: 'sp² Hybridisation'
          },
          {
            step: '3 × sp² Orbitals + 1 × 2p_z Orbital',
            detail: '3 sp² orbitals in xy-plane at 120° + 1 unhybridized 2p_z perpendicular',
            arrowText: 'Orbital Overlap'
          },
          {
            step: 'C=C Framework (Planar)',
            detail: '1 σ-bond (head-on) + 1 π-bond (sidewise 2p_z-2p_z overlap)',
            arrowText: 'Resulting Molecule'
          }
        ]
      },
      importantPoints: [
        '🎯 C=C Double Bond Properties: Length = 134 pm, Bond Energy = 611 kJ/mol.',
        '🎯 Geometry: Trigonal planar around both carbons with ~120° bond angles.',
        '🎯 Reactivity: The π-cloud above and below the molecular plane makes alkenes nucleophilic and susceptible to electrophilic addition.'
      ]
    },
    {
      heading: '2. Nomenclature & Geometrical Isomerism (Stereoisomerism)',
      paragraphs: [
        'Alkenes exhibit both structural isomerism (chain isomerism and position isomerism) and stereoisomerism (geometrical isomerism).',
        '• Cause of Geometrical Isomerism: Rotation around the C=C double bond is restricted because rotation would break the sideways overlap of the π-bond (requiring ~251 kJ/mol).',
        '• Necessary & Sufficient Condition: Geometrical isomerism occurs ONLY if EACH doubly bonded carbon atom is bonded to TWO DIFFERENT groups. General formula: abC=Ccd or abC=Cab.',
        '• Cis vs Trans Isomers:',
        '  - Cis Isomer: Identical or higher priority groups are on the SAME side of the double bond. Cis isomers generally have HIGHER dipole moments (μ > 0), HIGHER boiling points (stronger dipole-dipole attraction), but LOWER melting points (less symmetrical, poor crystal packing).',
        '  - Trans Isomer: Identical or higher priority groups are on OPPOSITE sides of the double bond. Trans isomers generally have LOWER dipole moments (μ ≈ 0 for symmetrical cases), LOWER boiling points, but HIGHER melting points (symmetrical, tight crystal lattice packing).',
        '• E/Z System (CIP Rules): Used for tri- and tetra-substituted alkenes. Priority is assigned based on atomic number (higher atomic number = higher priority).',
        '  - Z-Isomer (Zusammen = together): Both high-priority groups on the SAME side.',
        '  - E-Isomer (Entgegen = opposite): High-priority groups on OPPOSITE sides.'
      ],
      tables: [
        {
          headers: ['Property', 'Cis-Isomer (e.g., Cis-but-2-ene)', 'Trans-Isomer (e.g., Trans-but-2-ene)'],
          rows: [
            ['Group Orientation', 'Similar groups on SAME side', 'Similar groups on OPPOSITE sides'],
            ['Dipole Moment (μ)', 'Higher (μ = 0.33 D)', 'Zero or near-zero (μ = 0 D)'],
            ['Boiling Point', 'Higher (301 K due to polarity)', 'Lower (274 K due to non-polarity)'],
            ['Melting Point', 'Lower (134 K, less symmetrical)', 'Higher (167 K, tight crystal packing)'],
            ['Stability', 'Less stable (steric crowding)', 'More stable (groups further apart)']
          ]
        }
      ],
      importantPoints: [
        '⚠️ NEET TRAP: Propene (CH₃-CH=CH₂) and 2-Methylpropene ((CH₃)₂C=CH₂) DO NOT show geometrical isomerism because the terminal carbon has two identical hydrogen atoms!',
        '🎯 Symmetrical Trans-alkenes (like trans-but-2-ene and trans-1,2-dichloroethene) have zero dipole moment (μ = 0 D).'
      ]
    },
    {
      heading: '3. Methods of Preparation of Alkenes',
      paragraphs: [
        'Alkenes are synthesized primarily by elimination reactions where two atoms or groups are removed from adjacent carbon atoms (β-elimination).',
        '1. Dehydration of Alcohols: Heating an alcohol with concentrated H₂SO₄ or H₃PO₄ at 443 K (or passing alcohol vapour over heated alumina Al₂O₃ at 623 K) eliminates a molecule of water.',
        '   Equation: R-CH₂-CH₂-OH ──(conc. H₂SO₄, 443 K)──► R-CH=CH₂ + H₂O',
        '   Order of ease of dehydration: 3° alcohol > 2° alcohol > 1° alcohol. (3° alcohols dehydrate with mild 20% H₂SO₄ at 358 K via 3° carbocation).',
        '   Mechanism: Protonation of -OH → Loss of H₂O forming carbocation (RDS) → Loss of H⁺ from β-carbon. Carbocation rearrangements (1,2-hydride or 1,2-methyl shifts) occur if a more stable carbocation can be formed!',
        '2. Dehydrohalogenation of Alkyl Halides (β-Elimination): Heating an alkyl halide with alcoholic KOH (or NaNH₂) removes HX.',
        '   Equation: R-CH₂-CH₂-X + alc. KOH ──► R-CH=CH₂ + KX + H₂O',
        '   Reactivity of alkyl halide: 3° > 2° > 1° ; Halogen reactivity: R-I > R-Br > R-Cl > R-F.',
        '3. Dehalogenation of Vicinal Dihalides: Heating 1,2-dihaloalkane with zinc dust in methanol removes X₂.',
        '   Equation: R-CH(X)-CH₂(X) + Zn ──► R-CH=CH₂ + ZnX₂',
        '4. Controlled Reduction of Alkynes:',
        '   • Cis-Alkene: R-C≡C-R + H₂ ──(Lindlar\'s catalyst: Pd/CaCO₃ + quinoline)──► Cis-Alkene (syn-addition).',
        '   • Trans-Alkene: R-C≡C-R + 2 [H] ──(Birch Reduction: Na / liq. NH₃)──► Trans-Alkene (anti-addition).'
      ],
      visual: {
        type: 'flowchart',
        caption: 'Key Preparation Pathways for Alkenes',
        flowchartSteps: [
          {
            step: 'Alcohol (R-CH₂-CH₂-OH)',
            detail: 'Dehydration via conc. H₂SO₄, 443 K (Carbocation mechanism)',
            arrowText: '- H₂O'
          },
          {
            step: 'Alkyl Halide (R-CH₂-CH₂-X)',
            detail: 'Dehydrohalogenation via alc. KOH, Δ (E2 elimination)',
            arrowText: '- HX'
          },
          {
            step: 'Vicinal Dihalide (R-CHX-CH₂X)',
            detail: 'Dehalogenation via Zn dust / CH₃OH',
            arrowText: '- ZnX₂'
          },
          {
            step: 'Alkyne (R-C≡C-R)',
            detail: 'Controlled reduction: Lindlar (Cis) or Birch Na/liq.NH₃ (Trans)',
            arrowText: '+ H₂'
          }
        ]
      },
      importantPoints: [
        '🎯 Dehydration of alcohols involves carbocation intermediates → ALWAYS check for 1,2-hydride or 1,2-methyl rearrangements!',
        '🎯 Lindlar\'s Catalyst (Pd/CaCO₃ poisoned with quinoline or sulfur) yields CIS-alkenes.',
        '🎯 Birch Reduction (Na in liquid NH₃) yields TRANS-alkenes.'
      ]
    },
    {
      heading: '4. Regioselectivity in Elimination: Zaitsev (Saytzeff) Rule vs Hofmann Elimination',
      paragraphs: [
        'When dehydrohalogenation of an unsymmetrical alkyl halide or dehydration of an unsymmetrical alcohol can yield two different alkenes, one alkene is formed as the major product according to regioselectivity rules.',
        '• Zaitsev (Saytzeff) Rule: "In β-elimination reactions, the preferred major product is the alkene that has the GREATER number of alkyl groups attached to the doubly bonded carbon atoms (more substituted alkene)."',
        '  - Explanation: More substituted alkenes are thermodynamically more stable due to greater hyperconjugation (more α-hydrogens).',
        '  - Example: 2-Bromobutane + alc. KOH ──► But-2-ene (81%, Major, 6 α-H) + But-1-ene (19%, Minor, 2 α-H).',
        '• Hofmann Elimination Exception: The LESS substituted alkene becomes the major product under specific conditions:',
        '  1. Bulky Bases: Using hindered bases like Potassium t-butoxide ((CH₃)₃C-O⁻ K⁺). The bulky base preferentially abstracts the less sterically hindered β-hydrogen from the terminal carbon.',
        '  2. Poor Leaving Groups: Alkyl fluorides (R-F) or quaternary ammonium salts (R-N⁺Me₃) undergo elimination where carbanion character develops in the transition state; primary carbanions are more stable than secondary carbanions.',
        '  - Example: 2-Fluorobutane + alc. KOH ──► But-1-ene (Major, Hofmann product).'
      ],
      examples: [
        {
          problem: 'Predict the major alkene formed when 2-bromo-2-methylbutane is treated with (a) Alcoholic KOH, and (b) Potassium t-butoxide.',
          given: 'Reactant: CH₃-C(Br)(CH₃)-CH₂-CH₃',
          stepByStep: [
            '1. Identify β-hydrogens: β₁ is on CH₃ group (3 H), β₂ is on CH₂ group (2 H).',
            '2. Case (a) Alcoholic KOH (Small base): Follows Zaitsev rule. Abstracting H from β₂ gives 2-methylbut-2-ene (tetrasubstituted, 9 α-H). Major product = 2-Methylbut-2-ene.',
            '3. Case (b) Potassium t-butoxide (Bulky base): Steric hindrance prevents access to β₂ CH₂ group. Base abstracts less hindered H from β₁ CH₃ group.',
            '4. Major product = 2-Methylbut-1-ene (disubstituted, Hofmann product).'
          ],
          solution: '(a) 2-Methylbut-2-ene (Zaitsev major). (b) 2-Methylbut-1-ene (Hofmann major).'
        }
      ],
      importantPoints: [
        '🎯 Zaitsev Major = More substituted alkene (more α-hydrogens = hyperconjugative stability).',
        '🎯 Hofmann Major = Less substituted alkene (favored by bulky bases like t-BuOK or poor leaving groups like F⁻).'
      ]
    },
    {
      heading: '5. Electrophilic Addition Mechanism & Markovnikov\'s Rule',
      paragraphs: [
        'The primary characteristic reaction of alkenes is Electrophilic Addition (E␁). The loose π-electrons above and below the C=C plane attract electron-seeking species (electrophiles, E⁺).',
        '• General Two-Step Mechanism:',
        '  Step 1 (Slow, Rate-Determining): Electrophile (E⁺) attacks the π-bond, forming a carbocation intermediate.',
        '  Step 2 (Fast): Nucleophile (Nu⁻) attacks the carbocation to give the addition product.',
        '• Markovnikov\'s Rule Statement: "When an unsymmetrical reagent (e.g. HX, H₂O/H⁺) adds to an unsymmetrical alkene, the positive hydrogen part attaches to the double-bonded carbon that ALREADY has more hydrogen atoms."',
        '• Electronic Basis: Hydrogen addition to the carbon with more hydrogens generates the MORE STABLE carbocation intermediate (3° > 2° > 1°). Nucleophile then attacks this stable carbocation.',
        '• Reactivity Order of Hydrogen Halides: HI > HBr > HCl > HF (in order of decreasing bond strength / increasing acidity).',
        '• Carbocation Rearrangement Danger: Because a free carbocation is formed in standard HX addition, 1,2-hydride or 1,2-methyl shifts will occur if a more stable carbocation can be generated!',
        '  Example: Reaction of 3-methylbut-1-ene with HCl gives 2-chloro-2-methylbutane as the major product (via 2° → 3° hydride shift).'
      ],
      visual: {
        type: 'flowchart',
        caption: 'Markovnikov Addition Mechanism & Rearrangement',
        flowchartSteps: [
          {
            step: 'Unsymmetrical Alkene + H⁺',
            detail: 'CH₃-CH=CH₂ + H⁺ (Electrophile attack)',
            arrowText: 'Slow (RDS)'
          },
          {
            step: 'Carbocation Intermediate',
            detail: 'CH₃-CH⁺-CH₃ (2° Carbocation, More stable) vs CH₃-CH₂-CH₂⁺ (1°, Unstable)',
            arrowText: 'Rearrangement Check'
          },
          {
            step: 'Nucleophilic Attack by Br⁻',
            detail: 'Br⁻ attacks 2° carbocation carbon',
            arrowText: 'Fast'
          },
          {
            step: '2-Bromopropane (Major Markovnikov Product)',
            detail: 'CH₃-CH(Br)-CH₃',
            arrowText: 'Final Product'
          }
        ]
      },
      importantPoints: [
        '🎯 Markovnikov\'s rule is driven by carbocation stability (3° > 2° > 1°).',
        '⚠️ NEET TRAP: Always check for carbocation rearrangement (1,2-shift) whenever an addition reaction proceeds via a free carbocation intermediate!'
      ]
    },
    {
      heading: '6. Peroxide Effect (Kharasch Effect / Anti-Markovnikov Addition)',
      paragraphs: [
        'In 1933, M.S. Kharasch and F.R. Mayo discovered that when HBr is added to an unsymmetrical alkene in the presence of organic peroxides (such as benzoyl peroxide, C₆H₅CO-O-O-COC₆H₅) or light, the orientation of addition is REVERSED.',
        '• Anti-Markovnikov Rule: In the presence of peroxide, hydrogen halide addition gives the product where H attaches to the carbon with FEWER hydrogen atoms.',
        '  Equation: CH₃-CH=CH₂ + HBr ──(Peroxide)──► CH₃-CH₂-CH₂Br (1-Bromopropane, Major)',
        '• Mechanism (Free Radical Chain Reaction):',
        '  1. Chain Initiation: Peroxide undergoes homolysis to form alkoxy/carboxy radicals → R-O• + HBr → R-OH + Br• (Bromine free radical).',
        '  2. Chain Propagation: Br• radical attacks the alkene first. It adds to the terminal carbon (with more H) so as to generate the MORE STABLE 2° carbon free radical (CH₃-C•H-CH₂Br).',
        '     CH₃-C•H-CH₂Br + HBr → CH₃-CH₂-CH₂Br + Br•',
        '• WHY ONLY HBr? (Crucial NEET Question!):',
        '  - HCl: The H-Cl bond is very strong (430.5 kJ/mol), so the reaction of RO• with HCl to form Cl• is endothermic and unfavorable.',
        '  - HI: The H-I bond is weak (297 kJ/mol) and forms I• easily, but iodine radicals (I•) combine with each other to form I₂ (I• + I• → I₂) rather than adding to the C=C double bond.',
        '  - Therefore, Peroxide Effect is observed EXCLUSIVELY with HBr!'
      ],
      tables: [
        {
          headers: ['Parameter', 'HBr Addition WITHOUT Peroxide', 'HBr Addition WITH Peroxide'],
          rows: [
            ['Mechanism', 'Electrophilic Addition (E␁)', 'Free Radical Addition (FRA)'],
            ['Intermediate', 'Carbocation (CH₃-CH⁺-CH₃)', 'Carbon Free Radical (CH₃-C•H-CH₂Br)'],
            ['Orientation', 'Markovnikov (2-Bromopropane)', 'Anti-Markovnikov (1-Bromopropane)'],
            ['Reagents Showing Effect', 'HCl, HBr, HI all follow Markovnikov', 'ONLY HBr shows Peroxide Effect!'],
            ['Rearrangements', 'Possible (via carbocation)', 'NOT possible (no carbocation formed)']
          ]
        }
      ],
      importantPoints: [
        '⚠️ NEET TRAP 1: The Peroxide effect applies ONLY to HBr. HCl and HI ALWAYS follow Markovnikov addition even in the presence of peroxide!',
        '⚠️ NEET TRAP 2: Symmetrical alkenes (like But-2-ene) give the EXACT SAME product with HBr regardless of whether peroxide is present or absent!'
      ]
    },
    {
      heading: '7. Addition Reactions of Alkenes: Hydration, Halogenation & Hydrogenation',
      paragraphs: [
        'Alkenes undergo a wide variety of electrophilic and radical addition reactions:',
        'A. Catalytic Hydrogenation: R-CH=CH₂ + H₂ ──(Ni, Pt, or Pd)──► R-CH₂-CH₃. Heterogeneous catalysis involving syn-addition (both H atoms add to the same face of the double bond).',
        'B. Halogenation (Addition of X₂): R-CH=CH₂ + Br₂ (in CCl₄) ──► R-CH(Br)-CH₂Br (Vicinal dibromide).',
        '   • Test for Unsaturation: The reddish-brown color of bromine in CCl₄ disappears (decolourised).',
        '   • Mechanism: Stereospecific ANTI-addition via a cyclic bromonium ion intermediate (No free carbocation, so no rearrangements).',
        'C. Hydration (Addition of H₂O) — Three Distinct NEET Methods:',
        '   1. Acid-Catalyzed Hydration (H⁺/H₂O): Follows Markovnikov\'s rule via carbocation intermediate. Rearrangements occur!',
        '   2. Oxymercuration-Demercuration (OMDM): 1. Hg(OAc)₂, H₂O ; 2. NaBH₄. Yields Markovnikov alcohol WITHOUT carbocation rearrangement!',
        '   3. Hydroboration-Oxidation (HBO): 1. B₂H₆/THF ; 2. H₂O₂/OH⁻. Yields Anti-Markovnikov alcohol via syn-addition WITHOUT rearrangement!'
      ],
      examples: [
        {
          problem: 'Compare the alcohol products formed when 3,3-dimethylbut-1-ene is subjected to (a) Acid-catalyzed hydration, (b) Oxymercuration-demercuration, and (c) Hydroboration-oxidation.',
          given: 'Reactant: (CH₃)₃C-CH=CH₂',
          stepByStep: [
            '1. (a) Acid-catalyzed hydration (H⁺/H₂O): H⁺ adds to form 2° carbocation (CH₃)₃C-C⁺H-CH₃. 1,2-Methyl shift occurs to yield 3° carbocation (CH₃)₂C⁺-CH(CH₃)₂. Product = 2,3-dimethylbutan-2-ol.',
            '2. (b) Oxymercuration-Demercuration (OMDM): Markovnikov addition without rearrangement. OH adds to 2° carbon. Product = 3,3-dimethylbutan-2-ol.',
            '3. (c) Hydroboration-Oxidation (HBO): Anti-Markovnikov addition without rearrangement. OH adds to 1° carbon. Product = 3,3-dimethylbutan-1-ol.'
          ],
          solution: '(a) 2,3-Dimethylbutan-2-ol. (b) 3,3-Dimethylbutan-2-ol. (c) 3,3-Dimethylbutan-1-ol.'
        }
      ],
      importantPoints: [
        '🎯 Acid Hydration = Markovnikov + Rearrangement possible.',
        '🎯 OMDM = Markovnikov + NO Rearrangement.',
        '🎯 HBO = Anti-Markovnikov + Syn-addition + NO Rearrangement.'
      ]
    },
    {
      heading: '8. Oxidation Reactions & Ozonolysis Cleavage',
      paragraphs: [
        'Alkenes undergo various oxidation reactions depending on the reagent used:',
        'A. Hydroxylation with Baeyer\'s Reagent: Reaction with cold, dilute 1% alkaline KMnO₄ solution converts alkene to a vicinal cis-diol (glycol) via syn-addition. Pink color of KMnO₄ is discharged (Test for unsaturation).',
        '   Equation: CH₂=CH₂ + H₂O + [O] ──(cold dil. KMnO₄)──► CH₂OH-CH₂OH (Ethane-1,2-diol)',
        'B. Oxidation with Hot Acidic KMnO₄ / K₂Cr₂O₇: Cleaves the C=C double bond completely:',
        '   • =CH₂ group oxidizes to CO₂ + H₂O.',
        '   • =CH-R group oxidizes to Carboxylic Acid (R-COOH).',
        '   • =CR₁R₂ group oxidizes to Ketone (R₁-CO-R₂).',
        'C. Reductive Ozonolysis (O₃ followed by Zn/H₂O):',
        '   • Process: Alkene reacts with ozone (O₃) in CH₂Cl₂ to form a cyclic ozonide intermediate, which on reduction with Zn dust and H₂O breaks into two carbonyl compounds (aldehydes and/or ketones).',
        '   • Quick Shortcut Rule: To predict ozonolysis products, simply "erase the C=C double bond, and attach an =O atom to each of the two former double-bonded carbon atoms!"',
        '   • Working Backwards (Structure Determination): To find the structure of the parent alkene from its ozonolysis products, remove the oxygen atoms from the two carbonyl groups and join the carbon atoms together with a double bond (C=C).'
      ],
      visual: {
        type: 'flowchart',
        caption: 'Ozonolysis Cleavage & Retro-Synthesis Logic',
        flowchartSteps: [
          {
            step: 'Parent Alkene (R₁R₂C=CR₃H)',
            detail: 'React with O₃ in CH₂Cl₂ at 196 K',
            arrowText: 'Ozonide Formation'
          },
          {
            step: 'Cyclic Ozonide Intermediate',
            detail: 'Molozonide rearranges to stable Ozonide ring',
            arrowText: 'Zn / H₂O Reduction'
          },
          {
            step: 'Carbonyl Products',
            detail: 'R₁-CO-R₂ (Ketone) + R₃-CHO (Aldehyde) + ZnO + H₂O₂ (destroyed by Zn)',
            arrowText: 'Product Analysis'
          },
          {
            step: 'Retro-Synthetic Rule',
            detail: 'Remove =O from products and join carbons with C=C to recover original alkene',
            arrowText: 'Structural Elucidation'
          }
        ]
      },
      importantPoints: [
        '🎯 Ozonolysis shortcut: C=C ──(O₃, Zn/H₂O)──► C=O + O=C.',
        '🎯 Zn dust is essential in ozonolysis to prevent H₂O₂ from further oxidizing aldehydes to carboxylic acids (Oxidative Ozonolysis occurs if H₂O₂ is used without Zn).'
      ]
    },
    {
      heading: '9. Addition Polymerisation & Combustion',
      paragraphs: [
        '• Addition Polymerisation: At high temperature and pressure in the presence of a catalyst (peroxide or Ziegler-Natta catalyst TiCl₄ + AlEt₃), alkenes undergo self-addition to form high molecular weight polymers.',
        '  - Polyethene: n CH₂=CH₂ ──(High T, P, Catalyst)──► -[CH₂-CH₂]ₙ-',
        '  - Polypropene: n CH₃-CH=CH₂ ──► -[CH(CH₃)-CH₂]ₙ-',
        '  - Teflon (PTFE): n CF₂=CF₂ ──(Peroxide, Δ)──► -[CF₂-CF₂]ₙ-',
        '  - PVC: n CH₂=CH-Cl ──► -[CH₂-CH(Cl)]ₙ-',
        '• Combustion: Alkenes burn in air/oxygen with a luminous smoky flame to give CO₂ and H₂O with release of heat.',
        '  General Equation: CₙH₂ₙ + (3n/2) O₂ ──► n CO₂ + n H₂O + Heat'
      ],
      importantPoints: [
        '🎯 Ziegler-Natta Catalyst = TiCl₄ + Al(C₂H₅)₃ (used for High-Density Polyethene, HDPE).',
        '🎯 Teflon monomer = Tetrafluoroethene (CF₂=CF₂).'
      ]
    },
    {
      heading: '10. Master Reaction Comparison Matrix & NEET Traps',
      paragraphs: [
        'Below is a comprehensive summary comparison of all key alkene addition and preparation reactions for instant NEET revision.'
      ],
      tables: [
        {
          headers: ['Reaction', 'Reagents & Conditions', 'Regioselectivity', 'Stereospecificity', 'Key Intermediate / Note'],
          rows: [
            ['Hydrogenation', 'H₂ / Ni, Pt, or Pd', 'N/A', 'Syn-addition', 'Heterogeneous catalyst; Alkene → Alkane'],
            ['Halogenation', 'Br₂ in CCl₄', 'N/A', 'Anti-addition', 'Cyclic bromonium ion; Decolourises reddish Br₂'],
            ['HX Addition', 'HX (HCl, HBr, HI)', 'Markovnikov', 'Mixed', 'Free carbocation; Rearrangements possible!'],
            ['Peroxide Addition', 'HBr + Organic Peroxide', 'Anti-Markovnikov', 'Radical mixed', 'Free carbon radical; UNIQUE TO HBr!'],
            ['Acid Hydration', 'H⁺ / H₂O', 'Markovnikov', 'Mixed', 'Carbocation; Rearrangements occur'],
            ['OMDM', '1. Hg(OAc)₂, H₂O ; 2. NaBH₄', 'Markovnikov', 'Anti-addition', 'Mercurinium ion; NO rearrangement'],
            ['HBO', '1. B₂H₆/THF ; 2. H₂O₂/OH⁻', 'Anti-Markovnikov', 'Syn-addition', 'Four-center TS; NO rearrangement'],
            ['Baeyer Test', 'Cold dil. 1% alk. KMnO₄', 'N/A', 'Syn-addition', 'Cyclic manganate ester; Pink KMnO₄ decolourised'],
            ['Ozonolysis', '1. O₃ in CH₂Cl₂ ; 2. Zn / H₂O', 'C=C Cleavage', 'N/A', 'Ozonide ring; Cleaves C=C to C=O + O=C']
          ]
        }
      ],
      importantPoints: [
        '⚠️ NEET TRAP SUMMARY:',
        '1. C=C bond alone does NOT guarantee geometrical isomerism (check for a₂C=Ccd).',
        '2. Peroxide effect works ONLY for HBr (HCl and HI always follow Markovnikov).',
        '3. Acidic hydration causes carbocation rearrangement; OMDM and HBO do NOT.',
        '4. Lindlar catalyst gives CIS-alkene; Birch reduction gives TRANS-alkene.',
        '5. Symmetrical alkenes yield the same product with HBr regardless of peroxide presence.'
      ]
    }
  ],

  formulae: [
    {
      title: 'General Formula of Alkenes',
      formula: 'C_n H_{2n}',
      variables: 'n = number of carbon atoms (n ≥ 2)',
      whenToUse: 'To determine molecular formula of mono-alkenes'
    },
    {
      title: 'Degrees of Unsaturation (IHD)',
      formula: 'IHD = C + 1 - (H + X - N) / 2',
      variables: 'C = Carbons, H = Hydrogens, X = Halogens, N = Nitrogens',
      whenToUse: 'To calculate total rings + π-bonds in an organic molecule'
    },
    {
      title: 'Baeyer\'s Unsaturation Test Reaction',
      formula: 'R-CH=CH_2 + H_2O + [O] xrightarrow{cold dil. KMnO_4} R-CH(OH)-CH_2OH',
      variables: 'Cold dilute 1% alkaline KMnO₄ solution',
      whenToUse: 'Test for C=C or C≡C unsaturation (decolourises pink KMnO₄)'
    },
    {
      title: 'Reductive Ozonolysis Equation',
      formula: 'R_1R_2C=CR_3H xrightarrow[2. Zn/H_2O]{1. O_3} R_1-CO-R_2 + R_3-CHO + ZnO',
      variables: 'O₃ in CH₂Cl₂ followed by Zn and H₂O',
      whenToUse: 'Cleavage of C=C to yield aldehydes and ketones'
    },
    {
      title: 'Alkene Combustion Equation',
      formula: 'C_n H_{2n} + (3n/2) O_2 -> n CO_2 + n H_2O',
      variables: 'n = number of carbon atoms',
      whenToUse: 'Stoichiometric calculation for alkene combustion'
    }
  ],

  neetImportantPoints: [
    '🎯 Planar C=C Geometry: Carbon atoms in C=C are sp² hybridized with 120° bond angles and 134 pm bond length.',
    '🎯 Geometrical Isomerism: Requires that neither carbon of the C=C bond has two identical groups (a₂C=Ccd cannot show GI).',
    '🎯 Cis vs Trans: Cis-isomers have higher dipole moment and higher boiling point; Trans-isomers have higher melting point and stability.',
    '🎯 Dehydration of Alcohols: Proceeds via carbocation intermediate (3° > 2° > 1°). Always check for 1,2-hydride or 1,2-methyl shifts!',
    '🎯 Lindlar vs Birch: Lindlar\'s catalyst (Pd/CaCO₃ + quinoline) gives CIS-alkene; Birch reduction (Na/liq. NH₃) gives TRANS-alkene.',
    '🎯 Zaitsev Rule: Elimination reactions yield the MORE substituted alkene as the major product, EXCEPT when using bulky bases like t-BuOK (Hofmann product).',
    '🎯 Markovnikov\'s Rule: Electrophilic addition of HX places H on carbon with more H atoms (forming most stable carbocation).',
    '🎯 Peroxide Effect: Applies EXCLUSIVELY to HBr. HCl and HI always follow Markovnikov addition.',
    '🎯 Hydration Comparison: Acid hydration (Markovnikov + rearrangement), OMDM (Markovnikov + NO rearrangement), HBO (Anti-Markovnikov + Syn-addition + NO rearrangement).',
    '🎯 Ozonolysis Shortcut: Break C=C double bond and attach =O to both carbons. Retro-synthesis: Remove oxygen from carbonyls and join with C=C.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming any compound with a C=C double bond shows geometrical isomerism.',
      correctFact: 'Geometrical isomerism requires that EACH carbon of the C=C bond is attached to TWO DIFFERENT groups. Propene (CH₃-CH=CH₂) does not show GI because the terminal carbon has two identical H atoms.',
      whyItMattersForNEET: 'Direct conceptual questions in NEET frequently test if alkenes like propene or 2-methylpropene show GI.'
    },
    {
      commonConfusion: 'Believing that the peroxide effect works for all hydrogen halides (HCl, HBr, HI).',
      correctFact: 'The peroxide effect is observed EXCLUSIVELY with HBr. For HCl, the H-Cl bond is too strong; for HI, iodine radicals combine to form I₂ instead of adding to C=C.',
      whyItMattersForNEET: 'A classic NEET trap asks for the product of CH₃-CH=CH₂ + HCl in presence of peroxide. The answer is 2-chloropropane (Markovnikov!), NOT 1-chloropropane.'
    },
    {
      commonConfusion: 'Confusing Oxymercuration-Demercuration (OMDM) with Hydroboration-Oxidation (HBO).',
      correctFact: 'OMDM yields Markovnikov alcohol (without rearrangement), whereas HBO yields Anti-Markovnikov alcohol (without rearrangement, syn-addition).',
      whyItMattersForNEET: 'NEET questions ask for the specific hydration product of unsymmetrical alkenes depending on reagent.'
    },
    {
      commonConfusion: 'Expecting carbocation rearrangements in Hydroboration-Oxidation or Bromination.',
      correctFact: 'Rearrangements occur ONLY when a free carbocation intermediate is formed (e.g. acid dehydration, HX addition, acid hydration). HBO proceeds via a 4-center cyclic transition state and Bromination via a cyclic bromonium ion — neither forms a free carbocation!',
      whyItMattersForNEET: 'Avoids incorrectly predicting rearranged products in non-carbocation reactions.'
    }
  ],

  quickRevision: [
    '• General formula CₙH₂ₙ; sp² hybridized carbons, 120° bond angles, planar geometry around C=C.',
    '• Geometrical Isomerism: Cis (higher b.p., higher dipole moment) vs Trans (higher m.p., zero dipole moment for symmetrical). No GI if a₂C=Ccd.',
    '• Lindlar Catalyst (Pd/CaCO₃/quinoline) + Alkyne ──► Cis-alkene (syn).',
    '• Birch Reduction (Na / liq. NH₃) + Alkyne ──► Trans-alkene (anti).',
    '• Dehydration of Alcohols: Conc. H₂SO₄, 443 K. 3° > 2° > 1°. Carbocation intermediate → Rearrangements possible!',
    '• Zaitsev Rule: Major product is more substituted alkene. Hofmann product (less substituted) formed with bulky base (t-BuOK).',
    '• Electrophilic Addition (E␁): HX addition follows Markovnikov (via most stable carbocation).',
    '• Peroxide Effect: HBr + peroxide ──► Anti-Markovnikov (Free radical mechanism). Applies ONLY to HBr!',
    '• Hydration: Acid-catalyzed (Markovnikov + rearrangement), OMDM (Markovnikov, NO rearrangement), HBO (Anti-Markovnikov, NO rearrangement, syn).',
    '• Bromine Water / CCl₄ Test: Reddish-brown color decolourised (anti-addition of Br₂).',
    '• Baeyer\'s Test: Cold dil. 1% alk. KMnO₄ decolourised to form cis-vicinal diol.',
    '• Reductive Ozonolysis: O₃ then Zn/H₂O. Break C=C and add =O to both carbons. Retro-synthesis: Remove =O and join with C=C.'
  ],

  practiceQuestions: [
  {
    "id": "pq-alkenes-1",
    "question": "Which of the following alkenes DOES NOT exhibit geometrical isomerism?",
    "options": [
      "But-2-ene",
      "1,2-Dichloroethene",
      "Propene",
      "Pent-2-ene"
    ],
    "correctAnswer": 2,
    "explanation": "Geometrical isomerism requires that each carbon involved in the C=C double bond is attached to two different groups. In propene (CH₃-CH=CH₂), the C-1 carbon is bonded to two identical hydrogen atoms (H₂C=), making geometrical isomerism impossible. But-2-ene, 1,2-dichloroethene, and pent-2-ene all have two different groups on both double-bonded carbons.",
    "difficulty": "Easy",
    "topicId": "chem-alkenes",
    "conceptTested": "Conditions for Geometrical Isomerism"
  },
  {
    "id": "pq-alkenes-2",
    "question": "Propene reacts with HCl in the presence of benzoyl peroxide to give:",
    "options": [
      "1-Chloropropane",
      "2-Chloropropane",
      "1,2-Dichloropropane",
      "Propyl peroxide"
    ],
    "correctAnswer": 1,
    "explanation": "The peroxide effect (Anti-Markovnikov addition) occurs EXCLUSIVELY with HBr. It is NOT observed with HCl or HI because the H-Cl bond dissociation energy is too high. Therefore, addition of HCl to propene in the presence of peroxide STILL follows Markovnikov's rule, giving 2-chloropropane as the major product.",
    "difficulty": "Medium",
    "topicId": "chem-alkenes",
    "conceptTested": "HBr Specificity of Peroxide Effect"
  },
  {
    "id": "pq-alkenes-3",
    "question": "An alkene on reductive ozonolysis (O₃, Zn/H₂O) produces acetone (propanone) and acetaldehyde (ethanal) in equimolar amounts. The IUPAC name of the alkene is:",
    "options": [
      "2-Methylbut-1-ene",
      "2-Methylbut-2-ene",
      "Pent-2-ene",
      "3-Methylbut-1-ene"
    ],
    "correctAnswer": 1,
    "explanation": "To deduce the parent alkene from ozonolysis products, write the structures of acetone, (CH₃)₂C=O, and acetaldehyde, O=CH-CH₃, facing each other. Remove the oxygen atoms and join the carbons with a double bond: (CH₃)₂C = CH-CH₃. The IUPAC name of this alkene is 2-methylbut-2-ene.",
    "difficulty": "Medium",
    "topicId": "chem-alkenes",
    "conceptTested": "Ozonolysis Retro-synthesis"
  },
  {
    "id": "pq-alkenes-4",
    "question": "Hydroboration-oxidation of 2-methylpropene yields:",
    "options": [
      "2-Methylpropan-2-ol",
      "2-Methylpropan-1-ol",
      "Propan-2-ol",
      "Butan-2-ol"
    ],
    "correctAnswer": 1,
    "explanation": "Hydroboration-oxidation (B₂H₆/THF followed by H₂O₂/OH⁻) results in the Anti-Markovnikov addition of H₂O across the C=C double bond without any carbocation rearrangement. In 2-methylpropene, (CH₃)₂C=CH₂, the -OH group attaches to the terminal carbon (having more H atoms), yielding 2-methylpropan-1-ol (isobutyl alcohol).",
    "difficulty": "Easy",
    "topicId": "chem-alkenes",
    "conceptTested": "Hydroboration-Oxidation Regioselectivity"
  },
  {
    "id": "pq-alkenes-5",
    "question": "The major product obtained when 3,3-dimethylbut-1-ene reacts with HBr in the absence of peroxide is:",
    "options": [
      "3,3-Dimethyl-1-bromobutane",
      "3,3-Dimethyl-2-bromobutane",
      "2,3-Dimethyl-2-bromobutane",
      "2,3-Dimethyl-1-bromobutane"
    ],
    "correctAnswer": 2,
    "explanation": "Addition of HBr proceeds via a carbocation intermediate. Step 1: H⁺ adds to C-1 of (CH₃)₃C-CH=CH₂ to form a 2° carbocation: (CH₃)₃C-C⁺H-CH₃. Step 2: A 1,2-methyl shift occurs from the adjacent quaternary carbon to generate a more stable 3° carbocation: (CH₃)₂C⁺-CH(CH₃)₂. Step 3: Br⁻ attacks the 3° carbocation to give 2,3-dimethyl-2-bromobutane as the major product.",
    "difficulty": "Hard",
    "topicId": "chem-alkenes",
    "conceptTested": "Carbocation Rearrangement in Electrophilic Addition"
  },
  {
    "id": "prac-chemalkenes-6",
    "question": "Regarding Alkenes & Their Reactions, which of the following statements correctly resolves a common misconception about \"Assuming any compound with a C=C double bond shows geometrical isomerism.\"?",
    "options": [
      "Geometrical isomerism requires that EACH carbon of the C=C bond is attached to TWO DIFFERENT groups. Propene (CH₃-CH=CH₂) does not show GI because the terminal carbon has two identical H atoms.",
      "Incorrect assumption: Assuming any compound with a C=C double bond shows geometrical isomerism.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Geometrical isomerism requires that EACH carbon of the C=C bond is attached to TWO DIFFERENT groups. Propene (CH₃-CH=CH₂) does not show GI because the terminal carbon has two identical H atoms.. Direct conceptual questions in NEET frequently test if alkenes like propene or 2-methylpropene show GI.",
    "difficulty": "Medium",
    "conceptTested": "Alkenes & Their Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chemalkenes-7",
    "question": "Regarding Alkenes & Their Reactions, which of the following statements correctly resolves a common misconception about \"Believing that the peroxide effect works for all hydrogen halides (HCl, HBr, HI).\"?",
    "options": [
      "The peroxide effect is observed EXCLUSIVELY with HBr. For HCl, the H-Cl bond is too strong; for HI, iodine radicals combine to form I₂ instead of adding to C=C.",
      "Incorrect assumption: Believing that the peroxide effect works for all hydrogen halides (HCl, HBr, HI).",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "The peroxide effect is observed EXCLUSIVELY with HBr. For HCl, the H-Cl bond is too strong; for HI, iodine radicals combine to form I₂ instead of adding to C=C.. A classic NEET trap asks for the product of CH₃-CH=CH₂ + HCl in presence of peroxide. The answer is 2-chloropropane (Markovnikov!), NOT 1-chloropropane.",
    "difficulty": "Medium",
    "conceptTested": "Alkenes & Their Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chemalkenes-8",
    "question": "Regarding Alkenes & Their Reactions, which of the following statements correctly resolves a common misconception about \"Confusing Oxymercuration-Demercuration (OMDM) with Hydroboration-Oxidation (HBO).\"?",
    "options": [
      "OMDM yields Markovnikov alcohol (without rearrangement), whereas HBO yields Anti-Markovnikov alcohol (without rearrangement, syn-addition).",
      "Incorrect assumption: Confusing Oxymercuration-Demercuration (OMDM) with Hydroboration-Oxidation (HBO).",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "OMDM yields Markovnikov alcohol (without rearrangement), whereas HBO yields Anti-Markovnikov alcohol (without rearrangement, syn-addition).. NEET questions ask for the specific hydration product of unsymmetrical alkenes depending on reagent.",
    "difficulty": "Medium",
    "conceptTested": "Alkenes & Their Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chemalkenes-9",
    "question": "Regarding Alkenes & Their Reactions, which of the following statements correctly resolves a common misconception about \"Expecting carbocation rearrangements in Hydroboration-Oxidation or Bromination.\"?",
    "options": [
      "Rearrangements occur ONLY when a free carbocation intermediate is formed (e.g. acid dehydration, HX addition, acid hydration). HBO proceeds via a 4-center cyclic transition state and Bromination via a cyclic bromonium ion — neither forms a free carbocation!",
      "Incorrect assumption: Expecting carbocation rearrangements in Hydroboration-Oxidation or Bromination.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Rearrangements occur ONLY when a free carbocation intermediate is formed (e.g. acid dehydration, HX addition, acid hydration). HBO proceeds via a 4-center cyclic transition state and Bromination via a cyclic bromonium ion — neither forms a free carbocation!. Avoids incorrectly predicting rearranged products in non-carbocation reactions.",
    "difficulty": "Medium",
    "conceptTested": "Alkenes & Their Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chemalkenes-10",
    "question": "In the study of Alkenes & Their Reactions, what is the exact definition and significance of \"Alkene / Olefin\"?",
    "options": [
      "An unsaturated hydrocarbon containing one or more carbon-carbon double bonds (C=C) with sp² hybridized carbons.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "An unsaturated hydrocarbon containing one or more carbon-carbon double bonds (C=C) with sp² hybridized carbons.. Simplest member is ethene (C₂H₄). Degree of unsaturation (IHD) = 1.",
    "difficulty": "Easy",
    "conceptTested": "Alkene / Olefin definition"
  }
],
  pyqs: [
    {
      id: 'pyq-alkenes-1',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'An alkene on ozonolysis gives methanal and ethanal as products. The IUPAC name of the alkene is:',
      options: ['Ethene', 'Propene', 'But-1-ene', 'But-2-ene'],
      correctAnswer: 1,
      explanation: 'Methanal is HCHO (1 C) and ethanal is CH₃CHO (2 C). Placing the carbonyl groups facing each other: CH₃-CH=O + O=CH-H. Removing oxygen atoms and joining with a double bond yields CH₃-CH=CH₂ (Propene). Thus, propene on ozonolysis yields ethanal and methanal.',
      conceptTested: 'Reductive Ozonolysis & Product Identification',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkenes'
    },
    {
      id: 'pyq-alkenes-2',
      year: 2004,
      exam: 'AIPMT 2004',
      question: 'The major product formed in the reaction of CH₃-CH=CH-CH₃ with HBr in the presence of peroxide is:',
      options: ['CH₃-CH₂-CH(Br)-CH₃', 'CH₃-CH₂-CH₂-CH₂Br', 'CH₃-CH(Br)-CH(Br)-CH₃', 'CH₃-CH₂-CH₂-CH₃'],
      correctAnswer: 0,
      explanation: 'But-2-ene (CH₃-CH=CH-CH₃) is a SYMMETRICAL alkene. In symmetrical alkenes, both double-bonded carbons have identical numbers of hydrogen atoms (1 H each). Therefore, Markovnikov and Anti-Markovnikov additions yield the EXACT SAME product: 2-bromobutane (CH₃-CH₂-CH(Br)-CH₃).',
      conceptTested: 'Addition of HBr to Symmetrical Alkenes',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkenes'
    },
    {
      id: 'pyq-alkenes-3',
      year: 2021,
      exam: 'NEET UG 2021',
      question: 'Reaction of propene with B₂H₆ followed by oxidation with alkaline H₂O₂ produces:',
      options: ['Propan-2-ol', 'Propan-1-ol', 'Propane-1,2-diol', 'Propanone'],
      correctAnswer: 1,
      explanation: 'Reaction of propene (CH₃-CH=CH₂) with diborane (B₂H₆/THF) followed by alkaline H₂O₂ is Hydroboration-Oxidation. HBO results in overall Anti-Markovnikov addition of H₂O across the double bond without carbocation rearrangement. Thus, -OH attaches to the primary carbon bearing more H atoms, producing Propan-1-ol.',
      conceptTested: 'Hydroboration-Oxidation Regioselectivity',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkenes'
    },
    {
      id: 'pyq-alkenes-4',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'Which of the following alkyne/alkene reactions with Lindlar\'s catalyst yields a cis-alkene?',
      options: ['But-2-yne + H₂ / Lindlar catalyst', 'But-2-yne + Na / liq. NH₃', 'But-1-yne + H₂ / Pt', 'Ethene + H₂ / Ni'],
      correctAnswer: 0,
      explanation: 'Controlled hydrogenation of internal alkynes like But-2-yne (CH₃-C≡C-CH₃) using Lindlar\'s catalyst (Pd/CaCO₃ poisoned with quinoline) proceeds via syn-addition of hydrogen, selectively yielding cis-but-2-ene. In contrast, Birch reduction (Na/liq. NH₃) yields trans-but-2-ene.',
      conceptTested: 'Stereospecific Alkene Synthesis from Alkynes',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkenes'
    },
    {
      id: 'pyq-alkenes-5',
      year: 2021,
      exam: 'NEET UG 2021',
      question: 'The major product formed when 2-bromobutane is treated with alcoholic KOH is:',
      options: ['But-1-ene', 'cis-But-2-ene', 'trans-But-2-ene', 'Butan-2-ol'],
      correctAnswer: 2,
      explanation: 'Dehydrohalogenation of 2-bromobutane with alcoholic KOH undergoes E2 elimination governed by Zaitsev\'s rule. The major product is the more substituted alkene, But-2-ene. Among cis and trans stereoisomers of But-2-ene, trans-but-2-ene is thermodynamically MORE STABLE due to minimal steric repulsion between the two methyl groups. Thus, trans-but-2-ene is the major product.',
      conceptTested: 'Zaitsev Rule & Stereoselectivity in Elimination',
      difficulty: 'Medium',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkenes'
    },
    {
      id: 'pyq-alkenes-7',
      year: 2008,
      exam: 'AIPMT 2008',
      question: 'Which of the following alkenes yields a tertiary alcohol on acid-catalyzed hydration?',
      options: ['2-Methylpropene', 'But-1-ene', 'But-2-ene', 'Propene'],
      correctAnswer: 0,
      explanation: 'Acid-catalyzed hydration follows Markovnikov\'s rule via a carbocation intermediate. In 2-methylpropene, (CH₃)₂C=CH₂, protonation at C-1 generates a stable 3° carbocation, (CH₃)₃C⁺. Attack by H₂O followed by loss of H⁺ yields 2-methylpropan-2-ol (tert-butyl alcohol, a 3° alcohol).',
      conceptTested: 'Acid-Catalyzed Hydration & Carbocation Stability',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkenes'
    },
    {
      id: 'pyq-alkenes-8',
      year: 2014,
      exam: 'AIPMT 2014',
      question: 'The correct order of reactivity of hydrogen halides towards alkenes in electrophilic addition is:',
      options: ['HI > HBr > HCl > HF', 'HF > HCl > HBr > HI', 'HCl > HBr > HI > HF', 'HBr > HI > HCl > HF'],
      correctAnswer: 0,
      explanation: 'In electrophilic addition of HX to alkenes, the rate-determining step involves the cleavage of the H-X bond to produce H⁺. The H-X bond energy decreases down the group (H-F > H-Cl > H-Br > H-I), making HI the strongest acid with the weakest H-X bond. Hence, reactivity order is HI > HBr > HCl > HF.',
      conceptTested: 'Reactivity Order of Hydrogen Halides',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkenes'
    },
    {
      id: 'pyq-alkenes-9',
      year: 2015,
      exam: 'AIPMT 2015',
      question: 'Which of the following compounds exhibits geometrical isomerism?',
      options: ['But-2-ene', 'But-1-ene', '2-Methylpropene', 'Propene'],
      correctAnswer: 0,
      explanation: 'In But-2-ene (CH₃-CH=CH-CH₃), each doubly bonded carbon is attached to two different groups (-H and -CH₃). Hence, it exhibits cis-trans geometrical isomerism. In But-1-ene, 2-methylpropene, and propene, at least one double-bonded carbon carries two identical hydrogen atoms (H₂C=), preventing geometrical isomerism.',
      conceptTested: 'Geometrical Isomerism Identification',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkenes'
    },
    {
      id: 'pyq-alkenes-10',
      year: 2014,
      exam: 'AIPMT 2014',
      question: 'In the reaction of CH₃-CH=CH₂ + HBr ──► A + B (where A is the major product), product A is:',
      options: ['2-Bromopropane', '1-Bromopropane', '1,2-Dibromopropane', 'Propane'],
      correctAnswer: 0,
      explanation: 'In the absence of peroxide, addition of HBr to unsymmetrical propene (CH₃-CH=CH₂) follows Markovnikov\'s rule. H⁺ adds to C-1 (with 2 H\'s) to form the more stable 2° carbocation (CH₃-C⁺H-CH₃). Br⁻ then attacks C-2 to form 2-bromopropane as the major product A.',
      conceptTested: 'Markovnikov Addition of HBr',
      difficulty: 'Easy',
      verified: true,
      classification: 'Direct',
      marks: 4,
      topicId: 'chem-alkenes'
    }
  ],
  neetMarksPotential: {
  "topicName": "Alkenes & Their Reactions",
  "confidenceLabel": "HIGH",
  "confidenceText": "High Confidence: Verified against 7 official NEET/AIPMT paper appearances (9 direct questions).",
  "totalAnalyzedPapers": 15,
  "papersWithDirectPyqs": 7,
  "totalDirectPyqs": 9,
  "totalHistoricalMarks": 36,
  "averageDirectPyqsPerPaper": 0.6,
  "maxDirectPyqsInSinglePaper": 2,
  "minDirectPyqsInSinglePaper": 1,
  "minDirectMarks": 4,
  "maxDirectMarks": 8,
  "avgDirectMarksPerPaper": 2.4,
  "typicalContributionMarks": 5,
  "historicalMarksRangeText": "4 to 8 marks per paper (tested in 7 of 15 analyzed papers)",
  "whatThisMeansForYou": "Based on 9 verified direct questions across 7 unique papers, mastering Alkenes & Their Reactions gives you a historical direct score potential of ~5 marks when present.",
  "yearWiseBreakdown": [
    {
      "id": "pyq-alkenes-3",
      "year": 2021,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Hydroboration-Oxidation Regioselectivity",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-alkenes-5",
      "year": 2021,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Zaitsev Rule & Stereoselectivity in Elimination",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-alkenes-4",
      "year": 2020,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Stereospecific Alkene Synthesis from Alkynes",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-alkenes-1",
      "year": 2019,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Reductive Ozonolysis & Product Identification",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-alkenes-9",
      "year": 2015,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Geometrical Isomerism Identification",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    },
    {
      "id": "pyq-alkenes-8",
      "year": 2014,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Reactivity Order of Hydrogen Halides",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    },
    {
      "id": "pyq-alkenes-10",
      "year": 2014,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Markovnikov Addition of HBr",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    },
    {
      "id": "pyq-alkenes-7",
      "year": 2008,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Acid-Catalyzed Hydration & Carbocation Stability",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    },
    {
      "id": "pyq-alkenes-2",
      "year": 2004,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Addition of HBr to Symmetrical Alkenes",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    }
  ],
  "overlapPyqs": [],
  "sourceInfo": {
    "dataSource": "SATHEE (IIT Kanpur / Ministry of Education) & Official NEET Archives",
    "analysisPeriod": "2004 – 2024 (15 Verified Papers)",
    "directPyqsAnalyzedCount": 9,
    "classificationMethod": "Strict topic-level classification; chapter-level weightage was excluded.",
    "disclaimer": "Historical frequency is a record of past papers and not a guarantee of future NEET paper contents."
  }
}
};