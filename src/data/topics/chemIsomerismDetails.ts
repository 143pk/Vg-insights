import { DetailedTopicContent } from '../../types/neet';

export const chemIsomerismDetails: DetailedTopicContent = {
  topicId: 'chem-isomerism',
  topicName: 'Isomerism',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Organic Chemistry (Class 11)',
  chapter: 'Organic Chemistry: Some Basic Principles & Techniques',

  whatIsThisTopic:
    'Isomerism (derived from Greek "isos" meaning equal and "meros" meaning parts) is the phenomenon where two or more organic compounds possess the exact same molecular formula but exhibit different physical and/or chemical properties. This diversity arises either because atoms are connected in different structural sequences (Structural Isomerism) or because atoms are arranged differently in 3D spatial orientation despite having identical bond connectivity (Stereoisomerism).',

  basicIdea: [
    '1. Structural (Constitutional) Isomerism: Compounds differ in the order in which their constituent atoms are bonded together (different connectivity). Subdivided into Chain, Position, Functional Group, Metamerism, and Ring-Chain isomerism.',
    '2. Stereoisomerism: Compounds have identical atomic connectivity and bond sequences, but differ in the relative 3D spatial orientation of their atoms/groups. Subdivided into Geometrical (cis/trans & E/Z) and Optical isomerism.',
    '3. Core Rule for Identification: Always check molecular formulas first! If molecular formulas are different, the compounds are NOT isomers. If formulas are identical, test for structural connectivity differences before evaluating 3D spatial arrangements.'
  ],

  importantTerms: [
    {
      term: 'Isomers',
      definition: 'Molecules that share the same molecular formula (identical atom counts) but possess different structural formulas or spatial arrangements.',
      neetNote: 'Isomers have identical molar masses but distinct physical properties (boiling point, density) and/or chemical reactivity.'
    },
    {
      term: 'Structural / Constitutional Isomers',
      definition: 'Isomers that differ in the order and connectivity of atom-to-atom bonding within the carbon skeleton.',
      neetNote: 'Includes 5 types: Chain, Position, Functional, Metamerism, and Ring-Chain.'
    },
    {
      term: 'Stereoisomers',
      definition: 'Isomers having the exact same atom connectivity and sequence of bonds, but differing in the 3D orientation of their atoms in space.',
      neetNote: 'Includes Geometrical (cis/trans) and Optical (d/l enantiomers) isomers.'
    },
    {
      term: 'Chiral Center (Asymmetric Carbon)',
      definition: 'An sp³ hybridized carbon atom bonded to FOUR completely different atoms or groups of atoms.',
      neetNote: 'Indicated with an asterisk (*C). A single chiral center makes a molecule chiral and optically active.'
    },
    {
      term: 'Enantiomers',
      definition: 'Non-superimposable 3D mirror image stereoisomers that rotate plane-polarized light in equal magnitude but opposite directions.',
      neetNote: 'Enantiomers have identical boiling points, melting points, and densities, but differ in optical rotation (+ vs -).'
    },
    {
      term: 'Diastereomers',
      definition: 'Stereoisomers that are NOT mirror images of each other and are non-superimposable.',
      neetNote: 'Unlike enantiomers, diastereomers have DIFFERENT physical properties (melting points, solubilities, dipole moments).'
    },
    {
      term: 'Racemic Mixture (± or d,l)',
      definition: 'An equimolar (50:50) mixture of d- and l-enantiomers that exhibits zero net optical rotation due to external compensation.',
      neetNote: 'Optically inactive due to external compensation (rotation by d-isomer is cancelled by l-isomer).'
    },
    {
      term: 'Meso Compound',
      definition: 'A molecule containing two or more chiral centers that is optically inactive due to the presence of an internal plane or center of symmetry.',
      neetNote: 'Optically inactive due to internal compensation (top half rotates light opposite to bottom half).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Master Overview & Broad Hierarchy of Isomerism',
      paragraphs: [
        'Isomerism is broadly divided into two major branches: Structural Isomerism (where atomic connectivity differs) and Stereoisomerism (where atomic connectivity is identical, but 3D spatial arrangement differs).',
        'Structural isomerism includes Chain, Position, Functional Group, Metamerism, and Ring-Chain isomerism.',
        'Stereoisomerism includes Geometrical isomerism (cis/trans & E/Z) and Optical isomerism (enantiomers, diastereomers, and meso forms).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 420" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-2 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">ISOMERISM CLASSIFICATION HIERARCHY</text>

  <!-- Root -->
  <rect x="320" y="50" width="160" height="36" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="400" y="73" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">ISOMERISM</text>

  <!-- Main Branches -->
  <path d="M 400 86 L 400 105 L 220 105 L 220 125" stroke="#94a3b8" stroke-width="2" fill="none"/>
  <path d="M 400 105 L 580 105 L 580 125" stroke="#94a3b8" stroke-width="2" fill="none"/>

  <!-- Level 1: Structural vs Stereoisomerism -->
  <rect x="110" y="125" width="220" height="38" rx="8" fill="#0f172a" stroke="#3b82f6" stroke-width="2"/>
  <text x="220" y="149" text-anchor="middle" fill="#60a5fa" font-size="12" font-weight="bold">STRUCTURAL ISOMERISM</text>
  <text x="220" y="160" text-anchor="middle" fill="#94a3b8" font-size="9">(Different Connectivity)</text>

  <rect x="470" y="125" width="220" height="38" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="580" y="149" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold">STEREOISOMERISM</text>
  <text x="580" y="160" text-anchor="middle" fill="#94a3b8" font-size="9">(Different 3D Spatial Arrangement)</text>

  <!-- Structural Subtypes -->
  <path d="M 220 163 L 220 185" stroke="#3b82f6" stroke-width="1.5" fill="none"/>

  <g transform="translate(30, 185)">
    <rect x="0" y="0" width="380" height="210" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1"/>
    <text x="190" y="22" text-anchor="middle" fill="#60a5fa" font-size="11" font-weight="bold">Types of Structural Isomerism</text>

    <rect x="15" y="35" width="350" height="28" rx="5" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="25" y="53" fill="#f8fafc" font-size="10" font-weight="bold">1. Chain:</text>
    <text x="110" y="53" fill="#cbd5e1" font-size="10">Different carbon skeleton (n-butane vs isobutane)</text>

    <rect x="15" y="68" width="350" height="28" rx="5" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="25" y="86" fill="#f8fafc" font-size="10" font-weight="bold">2. Position:</text>
    <text x="110" y="86" fill="#cbd5e1" font-size="10">Different locant of FG / bond (propan-1-ol vs 2-ol)</text>

    <rect x="15" y="101" width="350" height="28" rx="5" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="25" y="119" fill="#f8fafc" font-size="10" font-weight="bold">3. Functional:</text>
    <text x="110" y="119" fill="#cbd5e1" font-size="10">Different functional groups (ethanol vs dimethyl ether)</text>

    <rect x="15" y="134" width="350" height="28" rx="5" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="25" y="152" fill="#f8fafc" font-size="10" font-weight="bold">4. Metamerism:</text>
    <text x="110" y="152" fill="#cbd5e1" font-size="10">Different alkyls around polyvalent atom (-O-, -NH-)</text>

    <rect x="15" y="167" width="350" height="28" rx="5" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="25" y="185" fill="#f8fafc" font-size="10" font-weight="bold">5. Ring-Chain:</text>
    <text x="110" y="185" fill="#cbd5e1" font-size="10">Open chain vs cyclic structure (propene vs cyclopropane)</text>
  </g>

  <!-- Stereoisomerism Subtypes -->
  <path d="M 580 163 L 580 185" stroke="#a855f7" stroke-width="1.5" fill="none"/>

  <g transform="translate(430, 185)">
    <rect x="0" y="0" width="340" height="210" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1"/>
    <text x="170" y="22" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="bold">Types of Stereoisomerism</text>

    <rect x="15" y="40" width="310" height="70" rx="6" fill="#0f172a" stroke="#c084fc" stroke-width="1"/>
    <text x="25" y="60" fill="#f8fafc" font-size="10" font-weight="bold">1. Geometrical (cis / trans &amp; E/Z):</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9.5">• Restricted rotation around C=C or ring</text>
    <text x="25" y="94" fill="#cbd5e1" font-size="9.5">• e.g., cis-but-2-ene vs trans-but-2-ene</text>

    <rect x="15" y="125" width="310" height="70" rx="6" fill="#0f172a" stroke="#c084fc" stroke-width="1"/>
    <text x="25" y="145" fill="#f8fafc" font-size="10" font-weight="bold">2. Optical Isomerism:</text>
    <text x="25" y="163" fill="#cbd5e1" font-size="9.5">• Chiral carbon (*C) &amp; non-superimposable mirror images</text>
    <text x="25" y="179" fill="#cbd5e1" font-size="9.5">• e.g., d-lactic acid vs l-lactic acid</text>
  </g>
</svg>`,
        caption: 'Master Isomerism Tree: Isomerism is divided into Structural Isomerism (5 types) and Stereoisomerism (2 major types). Structural isomers differ in atom connectivity, whereas Stereoisomers share identical atom connectivity but differ in 3D spatial layout.',
        guide: 'Remember for NEET: Always check molecular formula first. If molecular formulas are identical, test connectivity before evaluating stereochemistry.'
      },
      importantPoints: [
        'Structural isomers have different IUPAC names because their atomic connectivity or functional group positions differ.',
        'Stereoisomers have identical atomic connectivity, but differ in 3D spatial orientation.',
        'Stereoisomers are subdivided into Configurational (Geometrical & Optical) and Conformational (e.g. staggered/eclipsed ethane).'
      ]
    },

    {
      heading: '2. Structural Isomerism — Chain Isomerism',
      paragraphs: [
        'Chain Isomerism (or Skeleton Isomerism) occurs when two or more compounds have the same molecular formula, the same functional group, but different carbon skeleton structures (different lengths of parent carbon chain or different arrangement of carbon branching).',
        'How to Recognize: Count the number of carbons in the principal parent chain. If the principal chain length changes while the molecular formula and functional group remain identical, the compounds are Chain Isomers.',
        'Classic NEET Examples: 1) n-Butane (CH₃-CH₂-CH₂-CH₃, 4-carbon chain) and Isobutane / 2-Methylpropane (CH₃-CH(CH₃)-CH₃, 3-carbon parent chain). Both have molecular formula C₄H₁₀. 2) Pentane isomers (C₅H₁₂): n-pentane (5-carbon chain), isopentane / 2-methylbutane (4-carbon parent chain), and neopentane / 2,2-dimethylpropane (3-carbon parent chain).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-2 sm:p-4">
  <text x="400" y="25" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">CHAIN ISOMERISM (C₄H₁₀ CARBON SKELETON COMPARISON)</text>

  <!-- Left: n-Butane -->
  <rect x="30" y="45" width="340" height="170" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="200" y="70" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">n-Butane (Straight Chain)</text>
  <text x="200" y="95" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">CH₃ — CH₂ — CH₂ — CH₃</text>
  
  <rect x="50" y="115" width="300" height="30" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
  <text x="200" y="135" text-anchor="middle" fill="#cbd5e1" font-size="11">Parent Carbon Chain: <tspan fill="#38bdf8" font-weight="bold">4 Carbons (Butane)</tspan></text>
  <text x="200" y="195" text-anchor="middle" fill="#94a3b8" font-size="11">Boiling Point: -0.5 °C</text>

  <!-- Right: Isobutane -->
  <rect x="430" y="45" width="340" height="170" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="600" y="70" text-anchor="middle" fill="#c084fc" font-size="13" font-weight="bold">Isobutane / 2-Methylpropane (Branched)</text>
  <text x="600" y="95" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">CH₃ — CH(CH₃) — CH₃</text>
  
  <rect x="450" y="115" width="300" height="30" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>
  <text x="600" y="135" text-anchor="middle" fill="#cbd5e1" font-size="11">Parent Carbon Chain: <tspan fill="#c084fc" font-weight="bold">3 Carbons (Propane)</tspan></text>
  <text x="600" y="195" text-anchor="middle" fill="#94a3b8" font-size="11">Boiling Point: -11.7 °C (Lower due to branching)</text>
</svg>`,
        caption: 'Chain Isomerism: n-Butane has a straight 4-carbon chain, whereas Isobutane has a branched 3-carbon parent chain with a methyl substituent at C2. Both possess molecular formula C₄H₁₀.',
        guide: 'What Changes: Parent carbon chain length and branching. What Remains Same: Molecular formula (C₄H₁₀) and alkane functional group.'
      },
      importantPoints: [
        'Chain isomers differ in the length of the main carbon chain or nature of carbon branching.',
        'Branched chain isomers have lower surface area than straight-chain isomers, resulting in weaker van der Waals forces and lower boiling points (e.g. b.p. of n-pentane > isopentane > neopentane).',
        'Minimum carbon count to show chain isomerism: Alkanes require 4 carbons (butane); Alkenes require 4 carbons (but-1-ene); Alkyne requires 5 carbons (pent-1-yne).'
      ]
    },

    {
      heading: '3. Structural Isomerism — Position Isomerism',
      paragraphs: [
        'Position Isomerism occurs when two or more compounds have the exact same carbon skeleton, the same main functional group, but differ in the locant position of the functional group, multiple bond (double/triple bond), or substituent on the carbon chain.',
        'How to Recognize: Check both parent carbon chain length AND functional group type. If BOTH parent chain length and functional group are identical, but the numerical locant position of the functional group or C=C/C≡C bond is different, they are Position Isomers.',
        'Classic NEET Examples: 1) Propan-1-ol (CH₃-CH₂-CH₂-OH) and Propan-2-ol (CH₃-CH(OH)-CH₃) [C₃H₈O]. Both have a 3-carbon parent chain with an -OH group, located at C1 and C2 respectively. 2) But-1-ene (CH₂=CH-CH₂-CH₃) and But-2-ene (CH₃-CH=CH-CH₃) [C₄H∸]. 3) Pentan-2-one (CH₃-CO-CH₂-CH₂-CH₃) and Pentan-3-one (CH₃-CH₂-CO-CH₂-CH₃).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-2 sm:p-4">
  <text x="400" y="25" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">POSITION ISOMERISM (PROPANOL ISOMERS: C₃H₈O)</text>

  <!-- Left: Propan-1-ol -->
  <rect x="30" y="45" width="340" height="170" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="200" y="70" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">Propan-1-ol (-OH at C1)</text>
  <text x="200" y="100" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">³CH₃ — ²CH₂ — ¹CH₂ — OH</text>

  <rect x="50" y="120" width="300" height="30" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
  <text x="200" y="140" text-anchor="middle" fill="#cbd5e1" font-size="11">Locant Position of -OH: <tspan fill="#34d399" font-weight="bold">Position 1</tspan></text>
  <text x="200" y="195" text-anchor="middle" fill="#94a3b8" font-size="11">Parent Chain: 3 Carbons (Propane skeleton)</text>

  <!-- Right: Propan-2-ol -->
  <rect x="430" y="45" width="340" height="170" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="600" y="70" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">Propan-2-ol (-OH at C2)</text>
  <text x="600" y="100" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">¹CH₃ — ²CH(OH) — ³CH₃</text>

  <rect x="450" y="120" width="300" height="30" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
  <text x="600" y="140" text-anchor="middle" fill="#cbd5e1" font-size="11">Locant Position of -OH: <tspan fill="#fbbf24" font-weight="bold">Position 2</tspan></text>
  <text x="600" y="195" text-anchor="middle" fill="#94a3b8" font-size="11">Parent Chain: 3 Carbons (Propane skeleton)</text>
</svg>`,
        caption: 'Position Isomerism: Propan-1-ol and Propan-2-ol share the exact same 3-carbon parent chain and alcohol functional group, but differ in the locant position of the -OH group (C1 vs C2).',
        guide: 'What Changes: Locant position of functional group/multiple bond. What Remains Same: Carbon skeleton structure & functional group identity.'
      },
      importantPoints: [
        'Position isomers must have the SAME carbon skeleton length.',
        'Monosubstituted derivatives of benzene (e.g. chlorobenzene) do NOT show position isomerism.',
        'Disubstituted derivatives of benzene exhibit position isomerism as ortho (1,2-), meta (1,3-), and para (1,4-) isomers.'
      ]
    },

    {
      heading: '4. Structural Isomerism — Functional Group Isomerism',
      paragraphs: [
        'Functional Group Isomerism occurs when two or more compounds have the same molecular formula but contain DIFFERENT functional groups, placing them into entirely different classes of organic compounds with vastly different chemical properties.',
        'How to Recognize: Compare functional group classes. If compounds share the same molecular formula but belong to different functional families (e.g., alcohol vs ether, aldehyde vs ketone, carboxylic acid vs ester), they are Functional Isomers.',
        'High-Yield Functional Isomer Pairs for NEET:',
        '1. Alcohols & Ethers (General formula C_n H_{2n+2}O): Ethanol (CH₃-CH₂-OH) & Dimethyl Ether (CH₃-O-CH₃) [C₂H₆O].',
        '2. Aldehydes & Ketones (General formula C_n H_{2n}O): Propanal (CH₃-CH₂-CHO) & Propan-2-one / Acetone (CH₃-CO-CH₃) [C₃H₆O].',
        '3. Carboxylic Acids & Esters (General formula C_n H_{2n}O₂): Ethanoic Acid (CH₃-COOH) & Methyl Formate (HCOOCH₃) [C₂H₄O₂].',
        '4. Cyanides (Nitriles) & Isocyanides (Isonitriles): CH₃-C≡N (Methyl cyanide) & CH₃-N⇇C (Methyl isocyanide).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-2 sm:p-4">
  <text x="400" y="25" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">FUNCTIONAL ISOMERISM (C₂H₆O: ALCOHOL vs ETHER)</text>

  <!-- Left: Ethanol -->
  <rect x="30" y="45" width="340" height="170" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="200" y="70" text-anchor="middle" fill="#60a5fa" font-size="13" font-weight="bold">Ethanol (Alcohol Class)</text>
  <text x="200" y="100" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">CH₃ — CH₂ — OH</text>

  <rect x="50" y="120" width="300" height="30" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>
  <text x="200" y="140" text-anchor="middle" fill="#cbd5e1" font-size="11">Functional Group: <tspan fill="#60a5fa" font-weight="bold">-OH (Alcohol)</tspan></text>
  <text x="200" y="195" text-anchor="middle" fill="#94a3b8" font-size="11">Reacts with Na metal to liberate H₂ gas</text>

  <!-- Right: Dimethyl Ether -->
  <rect x="430" y="45" width="340" height="170" rx="10" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="600" y="70" text-anchor="middle" fill="#fb7185" font-size="13" font-weight="bold">Dimethyl Ether (Ether Class)</text>
  <text x="600" y="100" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">CH₃ — O — CH₃</text>

  <rect x="450" y="120" width="300" height="30" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1"/>
  <text x="600" y="140" text-anchor="middle" fill="#cbd5e1" font-size="11">Functional Group: <tspan fill="#fb7185" font-weight="bold">-O- (Ether)</tspan></text>
  <text x="600" y="195" text-anchor="middle" fill="#94a3b8" font-size="11">Does NOT react with Na metal</text>
</svg>`,
        caption: 'Functional Isomerism: Ethanol (-OH alcohol) and Dimethyl Ether (-O- ether) share molecular formula C₂H₆O, but belong to different functional families and exhibit drastically different chemical reactivities.',
        guide: 'What Changes: Functional group identity & chemical properties. What Remains Same: Molecular formula (C₂H₆O).'
      },
      importantPoints: [
        'Functional isomers belong to completely different chemical families and show distinct chemical test reactions (e.g. ethanol reacts with sodium to release H₂, dimethyl ether does not).',
        'Primary, secondary, and tertiary amines having the same molecular formula (e.g. C₃H₉N) are considered FUNCTIONAL ISOMERS according to IUPAC/NCERT!'
      ]
    },

    {
      heading: '5. Structural Isomerism — Metamerism',
      paragraphs: [
        'Metamerism is a special form of structural isomerism that arises due to unequal distribution of alkyl groups on either side of a polyvalent heteroatom functional group (such as -O-, -S-, -NH-, -COO-, or -CO-).',
        'How to Recognize: Look for a polyvalent functional group in the middle of a carbon chain. If the alkyl groups attached to the polyvalent heteroatom are DIFFERENT on either side, the compounds are Metamers.',
        'Classic NEET Examples: 1) Diethyl ether (C₂H₅-O-C₂H₅) and Methyl propyl ether (CH₃-O-CH₂CH₂CH₃) [Formula C₄H₁₀O]. In diethyl ether, oxygen is flanked by two ethyl groups (2+2); in methyl propyl ether, oxygen is flanked by a methyl and a propyl group (1+3). 2) Diethylamine (C₂H₅-NH-C₂H₅) and Methylpropylamine (CH₃-NH-C₃H₇).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-2 sm:p-4">
  <text x="400" y="25" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">METAMERISM (C₄H₁₀O: DIETHYL ETHER vs METHYL PROPYL ETHER)</text>

  <!-- Left: Diethyl Ether -->
  <rect x="30" y="45" width="340" height="170" rx="10" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
  <text x="200" y="70" text-anchor="middle" fill="#22d3ee" font-size="13" font-weight="bold">Diethyl Ether (Symmetrical)</text>
  <text x="200" y="100" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">C₂H₅ — O — C₂H₅</text>

  <rect x="50" y="120" width="300" height="30" rx="6" fill="#0f172a" stroke="#06b6d4" stroke-width="1"/>
  <text x="200" y="140" text-anchor="middle" fill="#cbd5e1" font-size="11">Alkyl Distribution: <tspan fill="#22d3ee" font-weight="bold">Ethyl (2C) + Ethyl (2C)</tspan></text>
  <text x="200" y="195" text-anchor="middle" fill="#94a3b8" font-size="11">Divalent Oxygen Heteroatom</text>

  <!-- Right: Methyl Propyl Ether -->
  <rect x="430" y="45" width="340" height="170" rx="10" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/>
  <text x="600" y="70" text-anchor="middle" fill="#fde047" font-size="13" font-weight="bold">Methyl Propyl Ether (Unsymmetrical)</text>
  <text x="600" y="100" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">CH₃ — O — C₃H₇</text>

  <rect x="450" y="120" width="300" height="30" rx="6" fill="#0f172a" stroke="#eab308" stroke-width="1"/>
  <text x="600" y="140" text-anchor="middle" fill="#cbd5e1" font-size="11">Alkyl Distribution: <tspan fill="#fde047" font-weight="bold">Methyl (1C) + Propyl (3C)</tspan></text>
  <text x="600" y="195" text-anchor="middle" fill="#94a3b8" font-size="11">Divalent Oxygen Heteroatom</text>
</svg>`,
        caption: 'Metamerism: Diethyl Ether (2C + 2C) and Methyl Propyl Ether (1C + 3C) have the same divalent oxygen atom (-O-) but differ in the alkyl group distribution attached to either side.',
        guide: 'What Changes: Size/identity of alkyl groups attached to polyvalent heteroatom. What Remains Same: Functional group class & molecular formula.'
      },
      importantPoints: [
        'Metamerism requires a polyvalent functional group (-O-, -S-, -NH-, -COO-, -CO-). Monovalent groups like -OH or -Cl cannot show metamerism.',
        'Metamers belong to the SAME homologous series and functional group class.'
      ]
    },

    {
      heading: '6. Structural Isomerism — Ring-Chain Isomerism',
      paragraphs: [
        'Ring-Chain Isomerism occurs when compounds possessing the same molecular formula exist as an open-chain structure in one isomer and as a closed ring structure in another.',
        'How to Recognize: Calculate the Degree of Unsaturation (Double Bond Equivalent, DBE). One ring is structurally equivalent to one double bond (DBE = 1).',
        'Classic NEET Examples: 1) Propene (CH₃-CH=CH₂, open-chain alkene) and Cyclopropane (C₃H₆, 3-membered ring) [Formula C₃H₆]. 2) But-1-ene (C₄H∸) and Cyclobutane / Methylcyclopropane. 3) Cyclohexane (C₆H₁₂) and Hex-1-ene (C₆H₁₂).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-2 sm:p-4">
  <text x="400" y="25" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">RING-CHAIN ISOMERISM (C₃H₆: PROPENE vs CYCLOPROPANE)</text>

  <!-- Left: Propene -->
  <rect x="30" y="45" width="340" height="170" rx="10" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
  <text x="200" y="70" text-anchor="middle" fill="#f472b6" font-size="13" font-weight="bold">Propene (Open-Chain Alkene)</text>
  <text x="200" y="100" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">CH₃ — CH = CH₂</text>

  <rect x="50" y="120" width="300" height="30" rx="6" fill="#0f172a" stroke="#ec4899" stroke-width="1"/>
  <text x="200" y="140" text-anchor="middle" fill="#cbd5e1" font-size="11">Structure Type: <tspan fill="#f472b6" font-weight="bold">Open Chain (1 C=C Bond)</tspan></text>
  <text x="200" y="195" text-anchor="middle" fill="#94a3b8" font-size="11">Decolorizes Br₂ water rapidly</text>

  <!-- Right: Cyclopropane -->
  <rect x="430" y="45" width="340" height="170" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="600" y="70" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">Cyclopropane (Closed Ring)</text>
  <text x="600" y="100" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">Triangle Ring (CH₂)₃</text>

  <rect x="450" y="120" width="300" height="30" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
  <text x="600" y="140" text-anchor="middle" fill="#cbd5e1" font-size="11">Structure Type: <tspan fill="#34d399" font-weight="bold">Closed Ring (0 C=C Bonds)</tspan></text>
  <text x="600" y="195" text-anchor="middle" fill="#94a3b8" font-size="11">Does NOT decolorize Br₂ water in dark</text>
</svg>`,
        caption: 'Ring-Chain Isomerism: Propene (open-chain unsaturated alkene) and Cyclopropane (saturated 3-membered ring) share the same molecular formula C₃H₆.',
        guide: 'What Changes: Open chain vs closed ring carbon framework. What Remains Same: Molecular formula (C₃H₆) & Double Bond Equivalent (DBE = 1).'
      },
      importantPoints: [
        'Ring-chain isomers are also a special sub-category of functional isomers.',
        'Cycloalkanes are ring-chain isomers of Alkenes (C_n H_{2n}).',
        'Cycloalkenes and Cycloalkanes with 2 rings are ring-chain isomers of Alkynes & Alkadienes (C_n H_{2n-2}).'
      ]
    },

    {
      heading: '7. Stereoisomerism — Geometrical Isomerism (cis / trans & E / Z)',
      paragraphs: [
        'Geometrical Isomerism (cis-trans isomerism) arises due to RESTRICTED ROTATION around a carbon-carbon double bond (>C=C<) or a cyclic ring framework.',
        'Mandatory Conditions for Geometrical Isomerism around C=C:',
        '1. Restricted rotation must be present (C=C double bond or ring).',
        '2. EACH sp² carbon atom of the C=C bond MUST be bonded to TWO DIFFERENT atoms or groups (e.g., abC=Cab or abC=Ccd, where a ≠ b and c ≠ d). If either carbon has two identical groups (e.g. aaC=Cbc), geometrical isomerism is IMPOSSIBLE!',
        'cis / trans Notation: cis-isomer has identical/similar groups on the SAME side of the C=C double bond; trans-isomer has identical/similar groups on OPPOSITE sides.',
        'E / Z Notation (CIP Priority Rules): Used when all four groups attached to C=C are different. Assign priority (1 = high, 2 = low) to groups on each sp² carbon based on atomic number.',
        '• Z-Isomer (Zusammen = together): High priority groups on the SAME side.',
        '• E-Isomer (Entgegen = opposite): High priority groups on OPPOSITE sides.',
        'Physical Property Differences between Cis and Trans Isomers:',
        '• Dipole Moment (μ): Cis-isomer is generally polar (higher μ); Trans-isomer is symmetrical and less polar/non-polar (lower μ).',
        '• Boiling Point: Cis-isomer has HIGHER boiling point due to stronger dipole-dipole intermolecular attractions.',
        '• Melting Point: Trans-isomer has HIGHER melting point because its symmetrical shape allows tighter crystal lattice packing!'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 280" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-2 sm:p-4">
  <text x="400" y="25" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">GEOMETRICAL ISOMERISM (cis-BUT-2-ENE vs trans-BUT-2-ENE)</text>

  <!-- Left: cis-But-2-ene -->
  <rect x="30" y="45" width="340" height="210" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="200" y="70" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">cis-But-2-ene (Same Side)</text>
  
  <text x="200" y="105" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">CH₃ \ / CH₃</text>
  <text x="200" y="125" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">C = C</text>
  <text x="200" y="145" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">H / \ H</text>

  <rect x="50" y="165" width="300" height="75" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
  <text x="60" y="185" fill="#38bdf8" font-size="10" font-weight="bold">• Dipole Moment (μ): <tspan fill="#f8fafc">μ &gt; 0 (Polar)</tspan></text>
  <text x="60" y="202" fill="#38bdf8" font-size="10" font-weight="bold">• Boiling Point: <tspan fill="#f8fafc">HIGHER (3.7 °C)</tspan></text>
  <text x="60" y="219" fill="#38bdf8" font-size="10" font-weight="bold">• Melting Point: <tspan fill="#f8fafc">LOWER (-138.9 °C)</tspan></text>

  <!-- Right: trans-But-2-ene -->
  <rect x="430" y="45" width="340" height="210" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="600" y="70" text-anchor="middle" fill="#c084fc" font-size="13" font-weight="bold">trans-But-2-ene (Opposite Sides)</text>
  
  <text x="600" y="105" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">CH₃ \ / H</text>
  <text x="600" y="125" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">C = C</text>
  <text x="600" y="145" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">H / \ CH₃</text>

  <rect x="450" y="165" width="300" height="75" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>
  <text x="460" y="185" fill="#c084fc" font-size="10" font-weight="bold">• Dipole Moment (μ): <tspan fill="#f8fafc">μ = 0 (Non-polar)</tspan></text>
  <text x="460" y="202" fill="#c084fc" font-size="10" font-weight="bold">• Boiling Point: <tspan fill="#f8fafc">LOWER (0.9 °C)</tspan></text>
  <text x="460" y="219" fill="#c084fc" font-size="10" font-weight="bold">• Melting Point: <tspan fill="#f8fafc">HIGHER (-105.5 °C)</tspan></text>
</svg>`,
        caption: 'Geometrical Isomerism: cis-But-2-ene (both methyl groups on top) has higher dipole moment and higher boiling point. trans-But-2-ene (methyl groups diagonally opposite) is symmetrical (μ = 0) and packs better into crystal lattices, giving a higher melting point.',
        guide: 'CRITICAL NEET TRAP: Trans isomer has HIGHER melting point (crystal packing), but Cis isomer has HIGHER boiling point (dipole attractions).'
      },
      importantPoints: [
        'Propene (CH₃-CH=CH₂) and But-1-ene (CH₃-CH₂-CH=CH₂) do NOT show geometrical isomerism because terminal C1 has two identical H atoms.',
        'Maleic acid is the CIS isomer (forms anhydride easily on heating); Fumaric acid is the TRANS isomer (does not form anhydride easily).',
        'Oximes (>C=N-OH) show syn/anti geometrical isomerism.'
      ]
    },

    {
      heading: '8. Stereoisomerism — Optical Isomerism & Chirality',
      paragraphs: [
        'Optical Isomerism is exhibited by compounds that possess non-superimposable mirror images and have the ability to rotate the plane of polarized light.',
        'Core Concepts of Optical Isomerism:',
        '1. Chiral Center (Asymmetric Carbon): An sp³ carbon bonded to 4 DIFFERENT atoms/groups. Marked with an asterisk (*C).',
        '2. Enantiomers: Pair of stereoisomers that are non-superimposable mirror images of each other. One rotates plane polarized light to the right (+ / dextrorotatory, d) and the other to the left (- / levorotatory, l) by the exact same angle θ.',
        '3. Diastereomers: Stereoisomers that are NOT mirror images of each other (e.g., cis and trans isomers, or stereoisomers with multiple chiral centers where only one center is inverted). They possess different physical properties (melting point, solubility).',
        '4. Racemic Mixture (± or d,l): Equimolar 50:50 mixture of (+) and (-) enantiomers. Optically inactive due to EXTERNAL COMPENSATION.',
        '5. Meso Compound: A molecule containing chiral centers that is optically inactive due to an INTERNAL PLANE OF SYMMETRY (internal compensation).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 280" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-2 sm:p-4">
  <text x="400" y="25" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">OPTICAL ISOMERISM: LACTIC ACID ENANTIOMERS [*C = Chiral Carbon]</text>

  <!-- Left Enantiomer (+ / d-Lactic Acid) -->
  <rect x="50" y="45" width="300" height="210" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="200" y="70" text-anchor="middle" fill="#60a5fa" font-size="13" font-weight="bold">(+) / d-Lactic Acid</text>
  
  <text x="200" y="100" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">COOH</text>
  <text x="200" y="115" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">|</text>
  <text x="200" y="135" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">HO — *C — H</text>
  <text x="200" y="155" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">|</text>
  <text x="200" y="170" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">CH₃</text>

  <rect x="70" y="185" width="260" height="55" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>
  <text x="200" y="205" text-anchor="middle" fill="#60a5fa" font-size="11" font-weight="bold">Rotates light Clockwise (+θ)</text>
  <text x="200" y="225" text-anchor="middle" fill="#cbd5e1" font-size="10">Chiral Center: *C bonded to -COOH, -OH, -H, -CH₃</text>

  <!-- Central Mirror Plane -->
  <line x1="400" y1="45" x2="400" y2="255" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="400" y="270" text-anchor="middle" fill="#fb7185" font-size="11" font-weight="bold">MIRROR PLANE</text>

  <!-- Right Enantiomer (- / l-Lactic Acid) -->
  <rect x="450" y="45" width="300" height="210" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="600" y="70" text-anchor="middle" fill="#c084fc" font-size="13" font-weight="bold">(-) / l-Lactic Acid</text>
  
  <text x="600" y="100" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">COOH</text>
  <text x="600" y="115" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">|</text>
  <text x="600" y="135" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">H — *C — OH</text>
  <text x="600" y="155" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">|</text>
  <text x="600" y="170" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">CH₃</text>

  <rect x="470" y="185" width="260" height="55" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>
  <text x="600" y="205" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="bold">Rotates light Counter-Clockwise (-θ)</text>
  <text x="600" y="225" text-anchor="middle" fill="#cbd5e1" font-size="10">Non-Superimposable Mirror Image</text>
</svg>`,
        caption: 'Optical Isomerism in Lactic Acid: The central carbon atom (*C) is bonded to 4 distinct groups (-COOH, -OH, -H, -CH₃). d-Lactic acid and l-Lactic acid are non-superimposable mirror images (enantiomers).',
        guide: 'Key distinction: Racemic mixture is optically inactive due to EXTERNAL compensation; Meso compound is optically inactive due to INTERNAL compensation.'
      },
      importantPoints: [
        'A single chiral carbon ALWAYS results in optical activity (enantiomer pair).',
        'Formula for number of optical isomers (N) for molecule with n unsymmetrical chiral centers: N = 2ⁿ.',
        'Meso-tartaric acid has 2 chiral carbons but is OPTICALLY INACTIVE due to an internal plane of symmetry.'
      ]
    },

    {
      heading: '9. Step-by-Step Decision Engine: How to Identify Any Isomer Type',
      paragraphs: [
        'When presented with any pair of organic molecules in a NEET question, follow this exact 4-step flowchart algorithm to instantly pinpoint the isomerism type:'
      ],
      visual: {
        type: 'flowchart',
        flowchartSteps: [
          { step: 'Step 1: Check Formula', detail: 'Compare molecular formulas. If different -> NOT ISOMERS. If identical -> Proceed to Step 2.', arrowText: 'Identical Formula' },
          { step: 'Step 2: Check Connectivity', detail: 'Compare atom-to-atom connections & IUPAC names. If connectivity differs -> STRUCTURAL ISOMER. If same -> STEREOISOMER.', arrowText: 'Structural vs Stereo' },
          { step: 'Step 3: If Structural', detail: 'Check: Different skeleton (Chain); Different locant (Position); Different FG (Functional); Different alkyls around heteroatom (Metamerism); Ring vs Chain (Ring-Chain).', arrowText: 'Subtype Identified' },
          { step: 'Step 4: If Stereoisomer', detail: 'Check C=C restricted rotation (Geometrical cis/trans E/Z) OR Chiral centers & non-superimposable mirror images (Optical).', arrowText: 'Final Classification' }
        ],
        caption: 'Systematic Isomer Identification Decision Tree for NEET UG.'
      },
      importantPoints: [
        'Always check molecular formula first!',
        'If IUPAC root names differ (e.g. butane vs propane), it is Chain Isomerism.',
        'If IUPAC locants differ (e.g. 1-ol vs 2-ol) with identical root name, it is Position Isomerism.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Number of Optical Isomers (Unsymmetrical Molecules)',
      formula: 'N = 2^n',
      variables: 'N = Total number of optically active isomers (enantiomers); n = Number of asymmetric (chiral) carbon atoms in an unsymmetrical molecule.',
      whenToUse: 'Use when the molecule possesses n chiral centers and lacks any symmetry (e.g., 2,3-dichlorobutanoic acid where n = 2).',
      calculationExample: {
        problem: 'Calculate the total number of optical isomers for 2,3-dichlorobutanoic acid [CH₃-CH(Cl)-CH(Cl)-COOH].',
        given: 'Structure: CH₃-*CH(Cl)-*CH(Cl)-COOH. Molecule is unsymmetrical.',
        stepByStep: [
          'Step 1: Identify chiral carbons (*C). C2 is bonded to (-COOH, -Cl, -H, -CH(Cl)CH₃). C3 is bonded to (-CH₃, -Cl, -H, -CH(Cl)COOH).',
          'Step 2: Total chiral centers n = 2.',
          'Step 3: Since molecule is unsymmetrical, apply formula N = 2ⁿ = 2² = 4.',
          'Step 4: There are 4 optically active isomers (2 pairs of enantiomers).'
        ],
        answer: '4 Optical Isomers (2 pairs of enantiomers)'
      }
    },
    {
      title: 'Number of Isomers for Symmetrical Molecules with Even Chiral Centers',
      formula: 'a = 2^{(n-1)}, \\quad m = 2^{(n/2 - 1)}, \\quad \\text{Total} = a + m',
      variables: 'a = Number of optically active isomers; m = Number of meso forms (optically inactive); n = Even number of chiral centers.',
      whenToUse: 'Use for molecules with an even number of chiral centers that have symmetrical terminal ends (e.g., Tartaric acid HOOC-*CH(OH)-*CH(OH)-COOH where n = 2).',
      calculationExample: {
        problem: 'Calculate the number of optically active isomers, meso forms, and total stereoisomers for Tartaric Acid.',
        given: 'Tartaric acid: HOOC-*CH(OH)-*CH(OH)-COOH. n = 2 (even, symmetrical).',
        stepByStep: [
          'Step 1: Calculate active isomers a = 2^(2-1) = 2^1 = 2 (d- and l-tartaric acid).',
          'Step 2: Calculate meso forms m = 2^(2/2 - 1) = 2^0 = 1 (meso-tartaric acid).',
          'Step 3: Total stereoisomers = a + m = 2 + 1 = 3.'
        ],
        answer: '2 Optically Active + 1 Meso Form = 3 Total Stereoisomers'
      }
    }
  ],

  visualLearning: {
    type: 'table',
    tableData: {
      headers: ['Isomerism Type', 'What Changes?', 'NEET Example Pair', 'Quick Identification Rule'],
      rows: [
        ['Chain', 'Carbon skeleton / chain length', 'n-Butane ↔ Isobutane', 'Parent chain length or branching changes.'],
        ['Position', 'Locant number of FG / bond', 'Propan-1-ol ↔ Propan-2-ol', 'Same parent chain & FG, but locant number changes.'],
        ['Functional', 'Functional group class', 'Ethanol ↔ Dimethyl Ether', 'Different functional families (alcohol vs ether).'],
        ['Metamerism', 'Alkyl groups on polyvalent atom', 'Diethyl Ether ↔ Methyl Propyl Ether', 'Different alkyl groups attached around -O-, -NH-, -COO-.'],
        ['Ring-Chain', 'Open-chain vs cyclic structure', 'Propene ↔ Cyclopropane', 'Open double-bond alkene vs closed cycloalkane ring.'],
        ['Geometrical', 'Spatial arrangement around C=C', 'cis-But-2-ene ↔ trans-But-2-ene', 'Restricted rotation around C=C, abC=Cab pattern.'],
        ['Optical', '3D rotation of plane polarized light', 'd-Lactic acid ↔ l-Lactic acid', 'Chiral carbon (*C) & non-superimposable mirror images.']
      ]
    },
    caption: 'High-Yield Isomerism Comparison Table for NEET UG Revision.'
  },

  neetImportantPoints: [
    'Chain isomers differ in carbon skeleton length; Position isomers have identical carbon skeletons but different locant numbers.',
    'Alcohols & Ethers, Aldehydes & Ketones, Carboxylic Acids & Esters, and Nitriles & Isocyanides are classic Functional Isomer pairs.',
    'Metamerism requires a polyvalent functional group (-O-, -S-, -NH-, -COO-, -CO-) flanked by alkyl groups.',
    'Primary, secondary, and tertiary amines with the same molecular formula are Functional Isomers according to NCERT.',
    'Geometrical isomerism requires restricted rotation AND two different groups on each sp² carbon of the C=C bond (abC=Cab). Terminal alkenes (propene, but-1-ene) NEVER show geometrical isomerism.',
    'Trans isomer generally has HIGHER melting point than Cis isomer due to symmetrical crystal packing; Cis isomer has HIGHER boiling point due to higher dipole moment.',
    'Racemic mixture is optically inactive due to EXTERNAL compensation (50:50 mixture of d and l enantiomers).',
    'Meso compounds possess chiral centers but are optically inactive due to INTERNAL compensation (plane of symmetry).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing Metamerism with Position Isomerism.',
      correctFact: 'Metamerism specifically requires a polyvalent heteroatom (-O-, -NH-, -S-, -COO-) with different alkyl groups attached on either side. Position isomerism occurs when a monovalent group or bond changes locant position on an identical carbon skeleton.',
      whyItMattersForNEET: 'Extremely frequent NEET trap in multiple-choice questions.'
    },
    {
      commonConfusion: 'Assuming Trans isomer always has a higher boiling point than Cis isomer.',
      correctFact: 'Trans isomer has a HIGHER MELTING POINT (due to symmetrical crystal packing), but Cis isomer has a HIGHER BOILING POINT (due to stronger dipole-dipole attractions).',
      whyItMattersForNEET: 'Directly tested physical property comparison in NEET UG.'
    },
    {
      commonConfusion: 'Thinking every molecule with chiral centers must be optically active.',
      correctFact: 'Meso compounds contain two or more chiral centers but are OPTICALLY INACTIVE because they possess an internal plane of symmetry.',
      whyItMattersForNEET: 'Frequently tested in optical isomerism questions.'
    },
    {
      commonConfusion: 'Confusing Racemic Mixture with Meso Compound optical inactivity.',
      correctFact: 'Racemic mixture is optically inactive due to EXTERNAL compensation (mixture of 2 molecules). Meso compound is optically inactive due to INTERNAL compensation (within 1 molecule).',
      whyItMattersForNEET: 'Conceptual definition question in NEET.'
    },
    {
      commonConfusion: 'Assuming terminal alkenes like Propene or But-1-ene can show geometrical isomerism.',
      correctFact: 'Terminal C=CH₂ carbons have two identical hydrogen atoms bonded to C1, making geometrical isomerism impossible.',
      whyItMattersForNEET: 'Quick elimination rule for alkene isomerism questions.'
    },
    {
      commonConfusion: 'Treating 1°, 2°, and 3° amines as position isomers.',
      correctFact: 'Primary (R-NH₂), secondary (R₂NH), and tertiary (R₃N) amines are FUNCTIONAL ISOMERS according to NCERT.',
      whyItMattersForNEET: 'Specific NCERT classification rule.'
    }
  ],

  quickRevision: [
    'Chain Isomerism = Different carbon skeleton chain length (n-butane vs isobutane)',
    'Position Isomerism = Same skeleton, different locant of FG/bond (propan-1-ol vs propan-2-ol)',
    'Functional Isomerism = Different functional group class (ethanol vs dimethyl ether)',
    'Metamerism = Polyvalent heteroatom (-O-, -NH-) with different flanking alkyl groups',
    'Ring-Chain = Open chain vs closed ring (propene vs cyclopropane)',
    'Geometrical Isomerism = Restricted C=C rotation, abC=Cab pattern; Trans has higher m.p., Cis has higher b.p.',
    'Optical Isomerism = Chiral carbon (*C), non-superimposable mirror images (enantiomers)',
    'Racemic = Optically inactive by EXTERNAL compensation; Meso = Optically inactive by INTERNAL compensation'
  ],

  practiceQuestions: [
  {
    "id": "prac-iso-1",
    "question": "Which of the following pairs of compounds represents Metamerism?",
    "options": [
      "1. Propan-1-ol and Propan-2-ol",
      "2. Diethyl ether and Methyl propyl ether",
      "3. Ethanol and Dimethyl ether",
      "4. n-Butane and Isobutane"
    ],
    "correctAnswer": 1,
    "explanation": "Diethyl ether (C₂H₅-O-C₂H₅) and Methyl propyl ether (CH₃-O-C₃H₇) both contain the polyvalent oxygen atom (-O-) with different alkyl groups attached on either side (2+2 vs 1+3). This is Metamerism.",
    "difficulty": "Easy",
    "topicId": "chem-isomerism"
  },
  {
    "id": "prac-iso-2",
    "question": "Which of the following alkenes CANNOT exhibit Geometrical Isomerism?",
    "options": [
      "1. But-2-ene",
      "2. Pent-2-ene",
      "3. Propene",
      "4. Hex-3-ene"
    ],
    "correctAnswer": 2,
    "explanation": "Propene (CH₃-CH=CH₂) has a terminal C=CH₂ group with two identical Hydrogen atoms attached to C1. Since one sp² carbon has two identical groups, geometrical isomerism is impossible.",
    "difficulty": "Easy",
    "topicId": "chem-isomerism"
  },
  {
    "id": "prac-iso-3",
    "question": "Which statement correctly compares the physical properties of cis-but-2-ene and trans-but-2-ene?",
    "options": [
      "1. Cis isomer has higher melting point and higher boiling point.",
      "2. Trans isomer has higher melting point and higher boiling point.",
      "3. Cis isomer has higher boiling point, while Trans isomer has higher melting point.",
      "4. Trans isomer has higher dipole moment than Cis isomer."
    ],
    "correctAnswer": 2,
    "explanation": "Cis-but-2-ene is polar (μ > 0) with stronger dipole attractions, giving it a HIGHER BOILING POINT. Trans-but-2-ene is symmetrical (μ = 0) and packs more tightly in crystal lattice, giving it a HIGHER MELTING POINT.",
    "difficulty": "Medium",
    "topicId": "chem-isomerism"
  },
  {
    "id": "prac-iso-4",
    "question": "An equimolar mixture of d-lactic acid and l-lactic acid is optically inactive due to:",
    "options": [
      "1. Internal compensation",
      "2. External compensation",
      "3. Absence of chiral carbon",
      "4. Presence of plane of symmetry in individual molecules"
    ],
    "correctAnswer": 1,
    "explanation": "An equimolar 50:50 mixture of d and l enantiomers forms a Racemic Mixture. The optical rotation caused by d-molecules is cancelled by an equal and opposite rotation from l-molecules. This optical inactivity is called EXTERNAL COMPENSATION.",
    "difficulty": "Medium",
    "topicId": "chem-isomerism"
  },
  {
    "id": "prac-iso-5",
    "question": "How many optical isomers are possible for 2,3-dichlorobutanoic acid [CH₃-CH(Cl)-CH(Cl)-COOH]?",
    "options": [
      "1. 2",
      "2. 3",
      "3. 4",
      "4. 6"
    ],
    "correctAnswer": 2,
    "explanation": "2,3-dichlorobutanoic acid possesses 2 unsymmetrical chiral carbon centers (*C2 and *C3). The number of optical isomers N = 2ⁿ = 2² = 4.",
    "difficulty": "Hard",
    "topicId": "chem-isomerism"
  },
  {
    "id": "prac-iso-6",
    "question": "Propene and Cyclopropane exhibit which type of isomerism?",
    "options": [
      "1. Position isomerism",
      "2. Metamerism",
      "3. Ring-Chain isomerism",
      "4. Geometrical isomerism"
    ],
    "correctAnswer": 2,
    "explanation": "Propene (CH₃-CH=CH₂, open chain) and Cyclopropane (C₃H₆, 3-membered ring) share the same molecular formula C₃H₆ but differ in open chain vs closed ring structure. This is Ring-Chain Isomerism.",
    "difficulty": "Easy",
    "topicId": "chem-isomerism"
  },
  {
    "id": "prac-chemisomerism-7",
    "question": "Regarding Isomerism, which of the following statements correctly resolves a common misconception about \"Confusing Metamerism with Position Isomerism.\"?",
    "options": [
      "Metamerism specifically requires a polyvalent heteroatom (-O-, -NH-, -S-, -COO-) with different alkyl groups attached on either side. Position isomerism occurs when a monovalent group or bond changes locant position on an identical carbon skeleton.",
      "Incorrect assumption: Confusing Metamerism with Position Isomerism.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Metamerism specifically requires a polyvalent heteroatom (-O-, -NH-, -S-, -COO-) with different alkyl groups attached on either side. Position isomerism occurs when a monovalent group or bond changes locant position on an identical carbon skeleton.. Extremely frequent NEET trap in multiple-choice questions.",
    "difficulty": "Medium",
    "conceptTested": "Isomerism - Conceptual Clarity"
  },
  {
    "id": "prac-chemisomerism-8",
    "question": "Regarding Isomerism, which of the following statements correctly resolves a common misconception about \"Assuming Trans isomer always has a higher boiling point than Cis isomer.\"?",
    "options": [
      "Trans isomer has a HIGHER MELTING POINT (due to symmetrical crystal packing), but Cis isomer has a HIGHER BOILING POINT (due to stronger dipole-dipole attractions).",
      "Incorrect assumption: Assuming Trans isomer always has a higher boiling point than Cis isomer.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Trans isomer has a HIGHER MELTING POINT (due to symmetrical crystal packing), but Cis isomer has a HIGHER BOILING POINT (due to stronger dipole-dipole attractions).. Directly tested physical property comparison in NEET UG.",
    "difficulty": "Medium",
    "conceptTested": "Isomerism - Conceptual Clarity"
  },
  {
    "id": "prac-chemisomerism-9",
    "question": "Regarding Isomerism, which of the following statements correctly resolves a common misconception about \"Thinking every molecule with chiral centers must be optically active.\"?",
    "options": [
      "Meso compounds contain two or more chiral centers but are OPTICALLY INACTIVE because they possess an internal plane of symmetry.",
      "Incorrect assumption: Thinking every molecule with chiral centers must be optically active.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Meso compounds contain two or more chiral centers but are OPTICALLY INACTIVE because they possess an internal plane of symmetry.. Frequently tested in optical isomerism questions.",
    "difficulty": "Medium",
    "conceptTested": "Isomerism - Conceptual Clarity"
  },
  {
    "id": "prac-chemisomerism-10",
    "question": "Regarding Isomerism, which of the following statements correctly resolves a common misconception about \"Confusing Racemic Mixture with Meso Compound optical inactivity.\"?",
    "options": [
      "Racemic mixture is optically inactive due to EXTERNAL compensation (mixture of 2 molecules). Meso compound is optically inactive due to INTERNAL compensation (within 1 molecule).",
      "Incorrect assumption: Confusing Racemic Mixture with Meso Compound optical inactivity.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Racemic mixture is optically inactive due to EXTERNAL compensation (mixture of 2 molecules). Meso compound is optically inactive due to INTERNAL compensation (within 1 molecule).. Conceptual definition question in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Isomerism - Conceptual Clarity"
  }
],
  pyqs: [
    {
      id: 'pyq-iso-1',
      year: 2023,
      exam: 'NEET UG 2023',
      question: 'Which amongst the following compounds will show geometrical isomerism?',
      options: [
        'Propene',
        '1-Phenylpropene',
        '2-Methylbut-2-ene',
        'But-1-ene'
      ],
      correctAnswer: 1,
      explanation: 'In 1-Phenylpropene (C₆H₅-CH=CH-CH₃), C1 is bonded to (-H, -C₆H₅) [two different groups] and C2 is bonded to (-H, -CH₃) [two different groups]. This satisfies abC=Cab pattern and exhibits cis/trans geometrical isomerism. Propene and But-1-ene have terminal C=CH₂ (identical H atoms); 2-Methylbut-2-ene has (CH₃)₂C= (identical methyl groups).',
      difficulty: 'Medium',
      conceptTested: 'Conditions required for Geometrical Isomerism in Alkenes',
      marks: 4,
      classification: 'Direct',
      verified: true,
      topicId: 'chem-isomerism'
    },
    {
      id: 'pyq-iso-2',
      year: 2022,
      exam: 'NEET UG 2022',
      question: 'Which of the following molecules is CHIRAL in nature?',
      options: [
        '2-Bromobutane',
        '1-Bromobutane',
        '2-Bromopropane',
        '2-Bromopropan-2-ol'
      ],
      correctAnswer: 0,
      explanation: 'In 2-Bromobutane [CH₃-*CH(Br)-CH₂CH₃], C2 is attached to 4 completely different groups: -H, -Br, -CH₃, and -CH₂CH₃. Thus C2 is a chiral carbon (*C), making 2-bromobutane a chiral, optically active molecule.',
      difficulty: 'Easy',
      conceptTested: 'Identification of Chiral Center (*C) and Chiral Molecules',
      marks: 4,
      classification: 'Direct',
      verified: true,
      topicId: 'chem-isomerism'
    },
    {
      id: 'pyq-iso-3',
      year: 2021,
      exam: 'NEET UG 2021',
      question: 'Diethoxymethane and 1-methoxypropane are examples of:',
      options: [
        'Chain isomers',
        'Position isomers',
        'Metamers',
        'Functional isomers'
      ],
      correctAnswer: 2,
      explanation: 'Both compounds are ethers containing a polyvalent oxygen atom (-O-). Diethoxymethane (C₂H₅-O-CH₂-O-C₂H₅ / C₂H₅-O-C₃H₇ variant) and 1-methoxypropane (CH₃-O-C₃H₇) differ in the distribution of alkyl groups attached to the oxygen heteroatom. Hence they are metamers.',
      difficulty: 'Medium',
      conceptTested: 'Metamerism in Ethers',
      marks: 4,
      classification: 'Direct',
      verified: true,
      topicId: 'chem-isomerism'
    },
    {
      id: 'pyq-iso-4',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'Which of the following compounds is optically INACTIVE due to internal compensation?',
      options: [
        'd-Tartaric acid',
        'l-Tartaric acid',
        'Meso-tartaric acid',
        'Racemic tartaric acid'
      ],
      correctAnswer: 2,
      explanation: 'Meso-tartaric acid [HOOC-*CH(OH)-*CH(OH)-COOH] possesses two chiral centers but contains an internal plane of symmetry. Rotation caused by the upper half is exactly offset by the lower half. This self-cancellation within a single molecule is called INTERNAL COMPENSATION.',
      difficulty: 'Easy',
      conceptTested: 'Meso Compounds & Internal Compensation',
      marks: 4,
      classification: 'Direct',
      verified: true,
      topicId: 'chem-isomerism'
    },
    {
      id: 'pyq-iso-5',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'How many structural isomers are possible for the molecular formula C₅H₁₂?',
      options: [
        '2',
        '3',
        '4',
        '5'
      ],
      correctAnswer: 1,
      explanation: 'C₅H₁₂ (Pentane) has 3 chain isomers: 1) n-Pentane (CH₃-CH₂-CH₂-CH₂-CH₃), 2) Isopentane / 2-Methylbutane [CH₃-CH(CH₃)-CH₂-CH₃], and 3) Neopentane / 2,2-Dimethylpropane [C(CH₃)₄].',
      difficulty: 'Easy',
      conceptTested: 'Chain Isomer Count for Alkanes',
      marks: 4,
      classification: 'Direct',
      verified: true,
      topicId: 'chem-isomerism'
    },
    {
      id: 'pyq-iso-6',
      year: 2018,
      exam: 'NEET UG 2018',
      question: 'The type of isomerism shown by Pentan-2-one and Pentan-3-one is:',
      options: [
        'Chain isomerism',
        'Position isomerism',
        'Functional isomerism',
        'Metamerism'
      ],
      correctAnswer: 1,
      explanation: 'Pentan-2-one (CH₃-CO-CH₂CH₂CH₃) and Pentan-3-one (CH₃CH₂-CO-CH₂CH₃) have identical carbon skeletons (5 carbons) and the same ketone functional group (>C=O), but differ in the locant position of the carbonyl group (C2 vs C3). This is Position Isomerism.',
      difficulty: 'Easy',
      conceptTested: 'Position Isomerism in Ketones',
      marks: 4,
      classification: 'Direct',
      verified: true,
      topicId: 'chem-isomerism'
    },
    {
      id: 'pyq-iso-7',
      year: 2017,
      exam: 'NEET UG 2017',
      question: 'Which of the following pairs of compounds are FUNCTIONAL ISOMERS?',
      options: [
        'CH₃-CH₂-OH and CH₃-O-CH₃',
        'CH₃-CH₂-CH₂-OH and CH₃-CH(OH)-CH₃',
        'CH₃-CH₂-CH₂-CH₃ and CH₃-CH(CH₃)-CH₃',
        'C₂H₅-O-C₂H₅ and CH₃-O-C₃H₇'
      ],
      correctAnswer: 0,
      explanation: 'CH₃-CH₂-OH (Ethanol, an Alcohol) and CH₃-O-CH₃ (Dimethyl ether, an Ether) share molecular formula C₂H₆O but belong to different functional group classes. Thus they are Functional Isomers.',
      difficulty: 'Easy',
      conceptTested: 'Functional Group Isomerism (Alcohol vs Ether)',
      marks: 4,
      classification: 'Direct',
      verified: true,
      topicId: 'chem-isomerism'
    },
    {
      id: 'pyq-iso-8',
      year: 2016,
      exam: 'NEET UG 2016',
      question: 'An organic compound C₄H₁₀O does not react with sodium metal. On reaction with excess HI, it yields single alkyl iodide C₂H₅I. The compound is:',
      options: [
        'Ethoxyethane (Diethyl ether)',
        'Methoxypropane',
        'Butan-1-ol',
        'Butan-2-ol'
      ],
      correctAnswer: 0,
      explanation: 'Since C₄H₁₀O does NOT react with sodium, it is an ETHER (not an alcohol). Reaction of symmetrical Diethyl ether (C₂H₅-O-C₂H₅) with excess HI cleaves both C-O bonds to give two equivalents of Ethyl iodide (C₂H₅I). Ethoxyethane is a metamer of methoxypropane.',
      difficulty: 'Hard',
      conceptTested: 'Chemical Distinctions & Cleavage of Ether Metamers',
      marks: 4,
      classification: 'Direct',
      verified: true,
      topicId: 'chem-isomerism'
    }
  ],

  neetMarksPotential: {
  "topicName": "Isomerism",
  "confidenceLabel": "HIGH",
  "confidenceText": "High Confidence: Verified against 8 official NEET/AIPMT paper appearances (8 direct questions).",
  "totalAnalyzedPapers": 15,
  "papersWithDirectPyqs": 8,
  "totalDirectPyqs": 8,
  "totalHistoricalMarks": 32,
  "averageDirectPyqsPerPaper": 0.53,
  "maxDirectPyqsInSinglePaper": 1,
  "minDirectPyqsInSinglePaper": 1,
  "minDirectMarks": 4,
  "maxDirectMarks": 4,
  "avgDirectMarksPerPaper": 2.13,
  "typicalContributionMarks": 4,
  "historicalMarksRangeText": "4 marks per paper (tested in 8 of 15 analyzed papers)",
  "whatThisMeansForYou": "Based on 8 verified direct questions across 8 unique papers, mastering Isomerism gives you a historical direct score potential of ~4 marks when present.",
  "yearWiseBreakdown": [
    {
      "id": "pyq-iso-1",
      "year": 2023,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Conditions required for Geometrical Isomerism in Alkenes",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-iso-2",
      "year": 2022,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Identification of Chiral Center (*C) and Chiral Molecules",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-iso-3",
      "year": 2021,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Metamerism in Ethers",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-iso-4",
      "year": 2020,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Meso Compounds & Internal Compensation",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-iso-5",
      "year": 2019,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Chain Isomer Count for Alkanes",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-iso-6",
      "year": 2018,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Position Isomerism in Ketones",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-iso-7",
      "year": 2017,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Functional Group Isomerism (Alcohol vs Ether)",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-iso-8",
      "year": 2016,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Chemical Distinctions & Cleavage of Ether Metamers",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
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
