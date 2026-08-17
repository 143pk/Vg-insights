import { DetailedTopicContent } from '../../types/neet';

export const chemHydrogenBondingDetails: DetailedTopicContent = {
  topicId: 'chem-hydrogen-bonding',
  topicName: 'Hydrogen Bonding & Intermolecular Forces',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Inorganic Chemistry (Class 11)',
  chapter: 'Chemical Bonding and Molecular Structure',

  whatIsThisTopic:
    'A hydrogen bond is an attractive dipole-dipole electrostatic interaction between a hydrogen atom covalently bonded to a strongly electronegative atom (F, O, N) and another electronegative atom with a lone pair in the same or adjacent molecule. This topic covers the essential conditions for hydrogen bonding, the fundamental distinction between Intermolecular Hydrogen Bonding (between separate molecules, raising boiling points and viscosity) and Intramolecular Hydrogen Bonding (within the same molecule, lowering boiling points and volatility), physical state anomalies (why H₂O is a liquid while H₂S is a gas; density anomaly of ice max at 4°C due to open cage-like tetrahedral crystal structure), intramolecular H-bonding in o-nitrophenol vs. p-nitrophenol separation by steam distillation, relative strength of H-bonds (F-H...F > O-H...O > N-H...N), and van der Waals intermolecular forces (London dispersion, dipole-dipole, dipole-induced dipole).',

  basicIdea: [
    '1. Nature of Hydrogen Bond: When H is attached to F, O, or N (highly electronegative, small size), the shared electron pair is pulled strongly away from H, creating a strong partial positive charge (δ+) on H and partial negative charge (δ-) on the electronegative atom. H acts as a bridge between two electronegative atoms.',
    '2. Conditions for H-Bonding: 1) Hydrogen atom must be covalently attached to a highly electronegative atom (F, O, or N). 2) The electronegative atom must be small in size so its electrostatic field is intense. (Chlorine has electronegativity 3.0 same as Nitrogen, but Cl is too large to form strong H-bonds, except in chloral hydrate).',
    '3. Intermolecular Hydrogen Bonding: Formed between two or more separate molecules of the same or different compounds. Examples: H₂O, HF, NH₃, C₂H₅OH, acetic acid (dimerizes in benzene).',
    '   • Effects: Increases boiling point, melting point, viscosity, surface tension, and water solubility.',
    '4. Intramolecular Hydrogen Bonding: Formed within the same single molecule between a hydrogen atom and a neighboring electronegative atom (forming 5- or 6-membered chelate ring). Examples: o-nitrophenol, o-hydroxybenzaldehyde (salicylaldehyde), o-fluorophenol.',
    '   • Effects: Prevents intermolecular association → Lowers boiling point, increases volatility and steam distillability compared to para/meta isomers!',
    '5. Physical State Anomalies & Ice Structure: Water (H₂O) is liquid at room temperature whereas H₂S is a gas because oxygen forms strong intermolecular H-bonds while sulfur cannot. Ice has an open 3D cage-like hexagonal structure held by 4 hydrogen bonds per water molecule; upon melting at 0°C, cages collapse, causing density to increase to a maximum at 4°C (3.98°C).'
  ],

  importantTerms: [
    {
      term: 'Hydrogen Bond (H-Bond)',
      definition: 'An attractive electrostatic force bonding a hydrogen atom (covalently attached to F, O, or N) to a lone pair on another electronegative atom.',
      neetNote: 'Bond energy is typically 10 – 40 kJ/mol (weaker than covalent bond ~400 kJ/mol, but stronger than normal van der Waals forces ~2–5 kJ/mol).'
    },
    {
      term: 'Intermolecular Hydrogen Bond',
      definition: 'Hydrogen bonding occurring between two or more separate distinct molecules.',
      neetNote: 'Leads to molecular association, elevated boiling point, higher viscosity, and high water solubility.'
    },
    {
      term: 'Intramolecular Hydrogen Bond (Chelation)',
      definition: 'Hydrogen bonding occurring internally within a single molecule between functional groups in close spatial proximity.',
      neetNote: 'Forms stable 5- or 6-membered rings. Reduces boiling point and enables separation of o-nitrophenol from p-nitrophenol via steam distillation!'
    },
    {
      term: 'Symmetrical Hydrogen Bond',
      definition: 'A rare, exceptionally strong type of hydrogen bond where the proton sits exactly midway between two electronegative atoms.',
      neetNote: 'HF₂⁻ (bifluoride ion) contains the strongest known H-bond (~161 kJ/mol), represented as [F - H - F]⁻.'
    },
    {
      term: 'London Dispersion Forces',
      definition: 'Temporary instantaneous dipole-induced dipole attractive forces present between all atoms and non-polar molecules.',
      neetNote: 'Proportional to molecular size/mass and surface area (e.g. Noble gases boiling point increases down group: He < Ne < Ar < Kr < Xe).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Mechanism of Hydrogen Bonding & Strength Determinants',
      paragraphs: [
        'Electrostatic Origin: In a polar bond X-H (where X = F, O, N), electron distribution is highly asymmetrical:',
        '  X^(δ-) — H^(δ+) ····· :Y^(δ-)',
        'The small δ+ charged hydrogen atom experiences a strong Coulombic attraction towards the unshared lone pair on atom Y.',
        'Factors Influencing Strength of Hydrogen Bonds:',
        '1) Electronegativity of X and Y: Higher electronegativity creates a larger δ+ charge on H. Order of strength: F - H ··· F (>40 kJ/mol) > O - H ··· O (~20 kJ/mol) > N - H ··· N (~10 kJ/mol).',
        '2) Size of Atom: Smaller atomic radius concentrates negative charge density, enhancing electrostatic attraction. This explains why Nitrogen (3.0, small radius 70 pm) forms strong H-bonds, whereas Chlorine (3.0, large radius 99 pm) forms negligible H-bonds under standard conditions.',
        '3) Number of H-Bonds per Molecule: Liquid H₂O forms a extensive 3D network with an average of 3.4 H-bonds per molecule at room temperature, giving water an extraordinarily high boiling point (100°C) compared to HF (19.5°C) which forms only 1D linear chains.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 280" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">MECHANISM &amp; DIPOLE CHARGE DISTRIBUTION IN HYDROGEN BONDING</text>

  <!-- Water-Water H-Bond -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="320" height="180" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="160" y="25" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">1. Intermolecular H-Bond in Water (H₂O)</text>

    <!-- Molecule 1 -->
    <circle cx="80" cy="90" r="18" fill="#f43f5e"/>
    <text x="80" y="95" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">O^(δ-)</text>
    <circle cx="50" cy="120" r="8" fill="#94a3b8"/>
    <circle cx="120" cy="90" r="10" fill="#fbbf24"/>
    <text x="120" y="72" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">H^(δ+)</text>

    <!-- H-Bond Dots -->
    <line x1="132" y1="90" x2="198" y2="90" stroke="#4ade80" stroke-width="3" stroke-dasharray="4 4"/>
    <text x="165" y="80" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">H-BOND</text>

    <!-- Molecule 2 -->
    <circle cx="210" cy="90" r="18" fill="#f43f5e"/>
    <text x="210" y="95" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">O^(δ-)</text>
    <circle cx="240" cy="120" r="8" fill="#94a3b8"/>
    <circle cx="210" cy="55" r="8" fill="#94a3b8"/>

    <text x="160" y="160" text-anchor="middle" fill="#94a3b8" font-size="11">Covalent O-H = 460 kJ/mol vs H-Bond = 20 kJ/mol</text>
  </g>

  <!-- HF Chain -->
  <g transform="translate(420, 60)">
    <rect x="0" y="0" width="320" height="180" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
    <text x="160" y="25" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold">2. Zig-Zag Linear Chain in Hydrogen Fluoride (HF)</text>

    <!-- HF 1 -->
    <circle cx="50" cy="80" r="10" fill="#fbbf24"/>
    <circle cx="90" cy="110" r="16" fill="#38bdf8"/>
    <text x="90" y="115" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">F</text>
    <line x1="60" y1="87" x2="80" y2="102" stroke="#ffffff" stroke-width="2"/>

    <!-- H-Bond 1 -->
    <line x1="106" y1="110" x2="150" y2="80" stroke="#4ade80" stroke-width="2.5" stroke-dasharray="4 4"/>

    <!-- HF 2 -->
    <circle cx="155" cy="76" r="10" fill="#fbbf24"/>
    <circle cx="195" cy="110" r="16" fill="#38bdf8"/>
    <text x="195" y="115" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">F</text>
    <line x1="165" y1="83" x2="185" y2="102" stroke="#ffffff" stroke-width="2"/>

    <!-- H-Bond 2 -->
    <line x1="211" y1="110" x2="255" y2="80" stroke="#4ade80" stroke-width="2.5" stroke-dasharray="4 4"/>

    <text x="160" y="160" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">Strongest H-bond (F-H...F = 40 kJ/mol)</text>
  </g>
</svg>`,
        caption: 'Intermolecular hydrogen bonding electrostatic charge separation in water and zig-zag HF chains.'
      }
    },
    {
      heading: '2. Intermolecular vs. Intramolecular Hydrogen Bonding: Physical Property Impacts',
      paragraphs: [
        '1) Intermolecular Hydrogen Bonding (Association):',
        '   • Occurs between multiple independent molecules.',
        '   • Results in high molecular association → Dramatically INCREASES boiling point, melting point, surface tension, and viscosity.',
        '   • Examples: Water (BP 100°C vs H₂S -60°C), Ethanol (BP 78°C vs Dimethyl ether -24°C), Acetic acid dimerizes in benzene (molar mass appears double = 120 g/mol).',
        '2) Intramolecular Hydrogen Bonding (Chelation):',
        '   • Occurs within the SAME molecule between two functional groups spatially close to each other, forming a 5- or 6-membered ring.',
        '   • Prevents external association with other molecules → DECREASES boiling point, INCREASES volatility, and LOWERS water solubility.',
        'Classic NEET Case Study: o-Nitrophenol vs p-Nitrophenol Separation:',
        '• o-Nitrophenol forms INTRAMOLECULAR H-bonds between -OH and -NO₂ groups within the same ring. It exists as discrete single molecules with minimal attraction to adjacent molecules → Highly Volatile & Steam Distillable!',
        '• p-Nitrophenol cannot form internal rings (groups too far apart); it forms extensive INTERMOLECULAR H-bonds connecting long chains of molecules → High Boiling Point, Non-volatile, and Insoluble in steam!',
        '• Application: Mixture of o- and p-nitrophenol is separated by STEAM DISTILLATION because o-nitrophenol vaporizes readily with steam while p-nitrophenol remains behind.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 280" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">o-NITROPHENOL (INTRAMOLECULAR) vs p-NITROPHENOL (INTERMOLECULAR)</text>

  <!-- o-Nitrophenol Intramolecular -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="310" height="180" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="155" y="25" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="bold">o-Nitrophenol (Intramolecular H-Bond)</text>

    <!-- Benzene Ring -->
    <polygon points="100,70 130,52 160,70 160,105 130,122 100,105" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="130" cy="87" r="18" fill="none" stroke="#38bdf8" stroke-width="1"/>

    <!-- OH Group -->
    <line x1="130" y1="52" x2="130" y2="35" stroke="#ffffff" stroke-width="2"/>
    <text x="130" y="30" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">O — H</text>

    <!-- NO2 Group -->
    <line x1="160" y1="70" x2="185" y2="70" stroke="#ffffff" stroke-width="2"/>
    <text x="200" y="74" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">N = O</text>

    <!-- Internal H-Bond -->
    <path d="M 145 30 C 170 30, 185 50, 185 62" fill="none" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="3 3"/>

    <text x="155" y="145" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">Volatile, Low BP, Steam Distillable!</text>
    <text x="155" y="165" text-anchor="middle" fill="#94a3b8" font-size="10">Forms internal 6-membered chelate ring</text>
  </g>

  <!-- p-Nitrophenol Intermolecular -->
  <g transform="translate(430, 60)">
    <rect x="0" y="0" width="310" height="180" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
    <text x="155" y="25" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold">p-Nitrophenol (Intermolecular H-Bond)</text>

    <!-- Ring 1 -->
    <polygon points="60,70 80,58 100,70 100,95 80,107 60,95" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="40" y="85" fill="#4ade80" font-size="10" font-weight="bold">HO-</text>

    <line x1="100" y1="82" x2="120" y2="82" stroke="#ffffff" stroke-width="1.5"/>
    <text x="135" y="86" fill="#fbbf24" font-size="10" font-weight="bold">-NO₂</text>

    <!-- Inter H-bond dots -->
    <line x1="150" y1="82" x2="190" y2="82" stroke="#4ade80" stroke-width="2.5" stroke-dasharray="3 3"/>

    <!-- Ring 2 -->
    <polygon points="210,70 230,58 250,70 250,95 230,107 210,95" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="260" y="85" fill="#4ade80" font-size="10" font-weight="bold">-OH</text>

    <text x="155" y="145" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="bold">High BP, Less Volatile, Insoluble in Steam</text>
    <text x="155" y="165" text-anchor="middle" fill="#94a3b8" font-size="10">Forms intermolecular polymeric chains</text>
  </g>
</svg>`,
        caption: 'Intramolecular H-bonding in o-nitrophenol (steam volatile) vs intermolecular H-bonding in p-nitrophenol.'
      }
    },
    {
      heading: '3. Density Anomaly of Water/Ice & Van der Waals Forces Classification',
      paragraphs: [
        'Anomalous Properties of Ice and Water:',
        '• Structure of Ice: In solid ice, each oxygen atom is tetrahedrally surrounded by 4 hydrogen atoms (2 by covalent bonds at 100 pm, 2 by H-bonds at 177 pm), creating a highly ordered 3D hexagonal open cage-like lattice.',
        '• Why Ice Floats on Water: Open cage structure creates large empty spatial voids, making ice LESS DENSE than liquid water at 0°C (~0.917 g/cm³ vs 0.9998 g/cm³).',
        '• Density Maximum at 4°C: When ice melts at 0°C, the open hydrogen-bonded cages partially collapse. Water molecules pack closer together into voids, causing density to INCREASE from 0°C to 4°C (maximum density = 1.000 g/cm³ at 3.98°C). Above 4°C, normal thermal expansion dominates, causing density to decrease.',
        'Classification of Van der Waals Intermolecular Forces:',
        '1) Keesom Forces (Dipole - Dipole): Between polar molecules with permanent dipoles (e.g. HCl···HCl, NH₃···NH₃). Energy ∝ 1/r³ (stationary) or 1/r⁶ (rotating).',
        '2) Debye Forces (Dipole - Induced Dipole): Between a permanent polar molecule and a non-polar neutral molecule (e.g. HCl and noble gas Ar). Energy ∝ 1/r⁶.',
        '3) London Dispersion Forces (Instantaneous Dipole - Induced Dipole): Present between ALL atoms/molecules, dominant in non-polar species (e.g. He, N₂, CH₄). Energy ∝ 1/r⁶.'
      ],
      visual: {
        type: 'table',
        tableData: {
          headers: ['Intermolecular Force Type', 'Participating Species', 'Interaction Energy Distance Dependence', 'Relative Strength', 'Key Examples'],
          rows: [
            ['Hydrogen Bond', 'H attached to F/O/N + lone pair on F/O/N', 'Dipole-dipole electrostatic (~10 - 40 kJ/mol)', 'Strongest Intermolecular', 'H₂O, HF, NH₃, DNA base pairs'],
            ['Keesom Forces (Dipole-Dipole)', 'Two polar molecules with permanent dipoles', '∝ 1/r³ (stationary) or 1/r⁶ (rotating)', 'Moderate (~2 - 10 kJ/mol)', 'HCl···HCl, SO₂···SO₂'],
            ['Debye Forces (Dipole-Induced Dipole)', 'One permanent polar + one non-polar molecule', '∝ 1/r⁶', 'Weak (~1 - 3 kJ/mol)', 'HCl + Ar, H₂O + O₂ (dissolved oxygen)'],
            ['London Dispersion Forces', 'Two non-polar atoms/molecules (temporary dipoles)', '∝ 1/r⁶', 'Weakest (~0.1 - 2 kJ/mol)', 'He···He, CH₄···CH₄, I₂ crystal']
          ]
        },
        caption: 'Classification and distance dependence of intermolecular forces tested in NEET physics/chemistry.'
      }
    }
  ],

  formulae: [
    {
      title: 'London Dispersion & Van der Waals Energy Distance Dependence',
      formula: 'E_dispersion ∝ - C / r⁶',
      variables: 'r = distance between interacting atomic centers, C = constant proportional to polarisability and ionization energy',
      whenToUse: 'Answering distance-dependence questions regarding London dispersion and dipole-induced dipole forces in NEET.',
      note: 'Key NEET fact: Dispersion force energy is inversely proportional to the 6th power of distance (1/r⁶).'
    }
  ],

  neetImportantPoints: [
    'H₂O is liquid at room temperature while H₂S is a gas because oxygen forms strong intermolecular H-bonds due to smaller atomic size and higher electronegativity.',
    'o-Nitrophenol is steam volatile due to INTRAMOLECULAR H-bonding; p-nitrophenol is non-volatile due to INTERMOLECULAR H-bonding.',
    'Maximum density of water occurs at 4°C (3.98°C) due to collapse of open hydrogen-bonded ice cage structures upon heating from 0°C to 4°C.',
    'Strongest known hydrogen bond exists in HF₂⁻ (bifluoride ion, [F - H - F]⁻) with energy ~161 kJ/mol.',
    'Acetic acid (CH₃COOH) dimerizes in non-polar organic solvents like benzene due to 2 intermolecular hydrogen bonds, giving an observed molar mass of 120 g/mol (double its normal formula mass of 60).',
    'Chlorine (EN 3.0) does NOT form strong H-bonds like Nitrogen (EN 3.0) because Cl⁻ ionic radius (167 pm) is much larger than N (70 pm), diluting charge density. Exception: Chloral hydrate CCl₃CH(OH)₂ forms intramolecular H-bonds.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming Chlorine forms strong hydrogen bonds because its electronegativity (3.0) equals Nitrogen (3.0).',
      correctFact: 'Hydrogen bonding depends on BOTH high electronegativity AND small atomic size. Chlorine atom is much larger than Nitrogen, making its electrostatic field too diffuse to form strong H-bonds.',
      whyItMattersForNEET: 'Directly tested in conceptual true/false questions in NEET.'
    },
    {
      commonConfusion: 'Confusing the volatility and boiling points of o-nitrophenol vs p-nitrophenol.',
      correctFact: 'o-Nitrophenol has INTRAMOLECULAR H-bonding → Lower BP, Higher Volatility, Steam Distillable. p-Nitrophenol has INTERMOLECULAR H-bonding → Higher BP, Lower Volatility, Insoluble in Steam.',
      whyItMattersForNEET: 'A classic organic-inorganic cross-over question repeated frequently.'
    },
    {
      commonConfusion: 'Thinking density of water is maximum at 0°C.',
      correctFact: 'Density of water is maximum at 4°C (1.000 g/cm³). At 0°C, ice is less dense (~0.917 g/cm³) because of open tetrahedral hydrogen-bonded cage structures.',
      whyItMattersForNEET: 'Essential for environmental chemistry and physical property questions.'
    }
  ],

  quickRevision: [
    'Conditions for H-Bond: H bonded to F, O, or N + small atomic radius.',
    'Intermolecular H-bonding → Association → High BP, high viscosity, high solubility.',
    'Intramolecular H-bonding → Chelation → Low BP, high volatility (o-nitrophenol steam volatile!).',
    'H₂O liquid vs H₂S gas: H₂O forms H-bonds, H₂S cannot.',
    'Maximum density of water = 1.0 g/cm³ at 4°C.',
    'HF₂⁻ contains strongest symmetrical H-bond ([F-H-F]⁻).',
    'London dispersion force energy ∝ 1/r⁶.'
  ],

  practiceQuestions: [
  {
    "id": "prac-hb-1",
    "question": "A mixture of ortho-nitrophenol and para-nitrophenol can be separated easily by steam distillation because:",
    "options": [
      "ortho-Nitrophenol forms intramolecular H-bonds making it steam volatile, whereas para-nitrophenol forms intermolecular H-bonds",
      "para-Nitrophenol has lower molecular mass than ortho-nitrophenol",
      "ortho-Nitrophenol has a higher boiling point than para-nitrophenol",
      "para-Nitrophenol forms intramolecular H-bonds making it non-volatile"
    ],
    "correctAnswer": 0,
    "explanation": "ortho-Nitrophenol undergoes intramolecular hydrogen bonding forming a 6-membered chelate ring within the single molecule. This prevents association with neighboring molecules, lowering its boiling point and rendering it steam volatile. In contrast, para-nitrophenol forms extensive intermolecular hydrogen bonds, leading to high boiling point and non-volatility.",
    "difficulty": "Easy",
    "conceptTested": "Separation of nitrophenols via steam distillation"
  },
  {
    "id": "prac-hb-2",
    "question": "Water exhibits its MAXIMUM density at which of the following temperatures?",
    "options": [
      "4°C",
      "0°C",
      "100°C",
      "-4°C"
    ],
    "correctAnswer": 0,
    "explanation": "At 0°C, ice has an open 3D cage-like hydrogen-bonded crystal structure with low density. When heated from 0°C to 4°C, the open cages partially collapse, causing water molecules to pack tighter and density to reach a MAXIMUM at 4°C (3.98°C). Above 4°C, thermal expansion reduces density.",
    "difficulty": "Easy",
    "conceptTested": "Maximum density of water at 4°C"
  },
  {
    "id": "prac-hb-3",
    "question": "Although Chlorine and Nitrogen have the SAME electronegativity value (3.0), Nitrogen forms strong hydrogen bonds in NH₃ whereas Chlorine shows negligible H-bonding in HCl. What is the primary reason?",
    "options": [
      "Nitrogen atom has a much smaller atomic radius than Chlorine, providing high local charge density",
      "Chlorine is a gas while Nitrogen is a liquid",
      "HCl is an acid whereas NH₃ is a base",
      "Nitrogen has no lone pairs"
    ],
    "correctAnswer": 0,
    "explanation": "Hydrogen bonding requires both high electronegativity AND small atomic size. Nitrogen (70 pm radius) concentrates its negative charge density in a tiny volume, creating an intense electrostatic field. Chlorine (99 pm radius) spreads its charge over a much larger volume, weakening electrostatic attraction.",
    "difficulty": "Medium",
    "conceptTested": "Role of atomic size in hydrogen bonding"
  },
  {
    "id": "prac-hb-4",
    "question": "What is the theoretical distance dependence of interaction energy for London dispersion forces between non-polar molecules?",
    "options": [
      "1 / r⁶",
      "1 / r³",
      "1 / r²",
      "1 / r"
    ],
    "correctAnswer": 0,
    "explanation": "London dispersion forces (instantaneous dipole - induced dipole interactions) operate over short distances, and their interaction energy is inversely proportional to the 6th power of distance between molecular centers: Energy ∝ 1 / r⁶.",
    "difficulty": "Easy",
    "conceptTested": "London dispersion force distance dependence"
  },
  {
    "id": "prac-chemhydrogenbonding-5",
    "question": "Regarding Hydrogen Bonding & Intermolecular Forces, which of the following statements correctly resolves a common misconception about \"Assuming Chlorine forms strong hydrogen bonds because its electronegativity (3.0) equals Nitrogen (3.0).\"?",
    "options": [
      "Hydrogen bonding depends on BOTH high electronegativity AND small atomic size. Chlorine atom is much larger than Nitrogen, making its electrostatic field too diffuse to form strong H-bonds.",
      "Incorrect assumption: Assuming Chlorine forms strong hydrogen bonds because its electronegativity (3.0) equals Nitrogen (3.0).",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Hydrogen bonding depends on BOTH high electronegativity AND small atomic size. Chlorine atom is much larger than Nitrogen, making its electrostatic field too diffuse to form strong H-bonds.. Directly tested in conceptual true/false questions in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Hydrogen Bonding & Intermolecular Forces - Conceptual Clarity"
  },
  {
    "id": "prac-chemhydrogenbonding-6",
    "question": "Regarding Hydrogen Bonding & Intermolecular Forces, which of the following statements correctly resolves a common misconception about \"Confusing the volatility and boiling points of o-nitrophenol vs p-nitrophenol.\"?",
    "options": [
      "o-Nitrophenol has INTRAMOLECULAR H-bonding → Lower BP, Higher Volatility, Steam Distillable. p-Nitrophenol has INTERMOLECULAR H-bonding → Higher BP, Lower Volatility, Insoluble in Steam.",
      "Incorrect assumption: Confusing the volatility and boiling points of o-nitrophenol vs p-nitrophenol.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "o-Nitrophenol has INTRAMOLECULAR H-bonding → Lower BP, Higher Volatility, Steam Distillable. p-Nitrophenol has INTERMOLECULAR H-bonding → Higher BP, Lower Volatility, Insoluble in Steam.. A classic organic-inorganic cross-over question repeated frequently.",
    "difficulty": "Medium",
    "conceptTested": "Hydrogen Bonding & Intermolecular Forces - Conceptual Clarity"
  },
  {
    "id": "prac-chemhydrogenbonding-7",
    "question": "Regarding Hydrogen Bonding & Intermolecular Forces, which of the following statements correctly resolves a common misconception about \"Thinking density of water is maximum at 0°C.\"?",
    "options": [
      "Density of water is maximum at 4°C (1.000 g/cm³). At 0°C, ice is less dense (~0.917 g/cm³) because of open tetrahedral hydrogen-bonded cage structures.",
      "Incorrect assumption: Thinking density of water is maximum at 0°C.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Density of water is maximum at 4°C (1.000 g/cm³). At 0°C, ice is less dense (~0.917 g/cm³) because of open tetrahedral hydrogen-bonded cage structures.. Essential for environmental chemistry and physical property questions.",
    "difficulty": "Medium",
    "conceptTested": "Hydrogen Bonding & Intermolecular Forces - Conceptual Clarity"
  },
  {
    "id": "prac-chemhydrogenbonding-8",
    "question": "In the study of Hydrogen Bonding & Intermolecular Forces, what is the exact definition and significance of \"Hydrogen Bond (H-Bond)\"?",
    "options": [
      "An attractive electrostatic force bonding a hydrogen atom (covalently attached to F, O, or N) to a lone pair on another electronegative atom.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "An attractive electrostatic force bonding a hydrogen atom (covalently attached to F, O, or N) to a lone pair on another electronegative atom.. Bond energy is typically 10 – 40 kJ/mol (weaker than covalent bond ~400 kJ/mol, but stronger than normal van der Waals forces ~2–5 kJ/mol).",
    "difficulty": "Easy",
    "conceptTested": "Hydrogen Bond (H-Bond) definition"
  },
  {
    "id": "prac-chemhydrogenbonding-9",
    "question": "In the study of Hydrogen Bonding & Intermolecular Forces, what is the exact definition and significance of \"Intermolecular Hydrogen Bond\"?",
    "options": [
      "Hydrogen bonding occurring between two or more separate distinct molecules.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Hydrogen bonding occurring between two or more separate distinct molecules.. Leads to molecular association, elevated boiling point, higher viscosity, and high water solubility.",
    "difficulty": "Easy",
    "conceptTested": "Intermolecular Hydrogen Bond definition"
  },
  {
    "id": "prac-chemhydrogenbonding-10",
    "question": "In the study of Hydrogen Bonding & Intermolecular Forces, what is the exact definition and significance of \"Intramolecular Hydrogen Bond (Chelation)\"?",
    "options": [
      "Hydrogen bonding occurring internally within a single molecule between functional groups in close spatial proximity.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "Hydrogen bonding occurring internally within a single molecule between functional groups in close spatial proximity.. Forms stable 5- or 6-membered rings. Reduces boiling point and enables separation of o-nitrophenol from p-nitrophenol via steam distillation!",
    "difficulty": "Easy",
    "conceptTested": "Intramolecular Hydrogen Bond (Chelation) definition"
  }
],
  pyqs: [
    {
      id: 'pyq-hb-2022',
      year: 2022,
      exam: 'NEET UG 2022',
      question: 'Which of the following compounds exhibits INTRAMOLECULAR hydrogen bonding?',
      options: [
        'o-Nitrophenol',
        'p-Nitrophenol',
        'Water (H₂O)',
        'Hydrogen fluoride (HF)'
      ],
      correctAnswer: 0,
      explanation: 'In o-nitrophenol, the -OH and -NO₂ groups are adjacent (ortho position) on the benzene ring, enabling formation of a stable 6-membered internal hydrogen-bonded ring (intramolecular H-bond). p-Nitrophenol, H₂O, and HF form intermolecular H-bonds.',
      difficulty: 'Easy',
      conceptTested: 'Intramolecular H-bonding in o-nitrophenol',
      ncertReference: 'Class 11 Chemistry, Chapter 4, Section 4.8.2',
      verified: true
    },
    {
      id: 'pyq-hb-2020',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'The unusually high boiling point of water (H₂O) compared to hydrogen sulfide (H₂S) is primarily due to:',
      options: [
        'Intermolecular hydrogen bonding in water',
        'Higher molecular weight of water',
        'Covalent bonding in water',
        'Intramolecular hydrogen bonding in water'
      ],
      correctAnswer: 0,
      explanation: 'Oxygen is smaller and more electronegative than Sulfur. Water molecules associate into extensive 3D clusters via intermolecular hydrogen bonds (O-H...O), requiring substantial energy to boil. H₂S lacks hydrogen bonding and exists as a gas.',
      difficulty: 'Easy',
      conceptTested: 'High boiling point of water due to intermolecular H-bonding',
      ncertReference: 'Class 11 Chemistry, Chapter 4, Section 4.8.1',
      verified: true
    },
    {
      id: 'pyq-hb-2019',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'Which of the following molecules has the STRONGEST hydrogen bond?',
      options: [
        'HF',
        'H₂O',
        'NH₃',
        'HCl'
      ],
      correctAnswer: 0,
      explanation: 'Fluorine is the most electronegative element (EN = 4.0) in the periodic table. The F-H bond is extremely polar, producing the highest δ+ on H and strongest individual hydrogen bond (F-H...F energy ~40 kJ/mol).',
      difficulty: 'Easy',
      conceptTested: 'HF strongest single H-bond',
      ncertReference: 'Class 11 Chemistry, Chapter 4, Section 4.8.1',
      verified: true
    },
    {
      id: 'pyq-hb-2016',
      year: 2016,
      exam: 'NEET UG 2016',
      question: 'In which of the following substances is intermolecular hydrogen bonding ABSENT?',
      options: [
        'Salicylaldehyde (o-hydroxybenzaldehyde)',
        'Methanol (CH₃OH)',
        'Water (H₂O)',
        'Liquid ammonia (NH₃)'
      ],
      correctAnswer: 0,
      explanation: 'Salicylaldehyde (o-hydroxybenzaldehyde) contains an ortho -OH and -CHO group, forming strong INTRAMOLECULAR hydrogen bonding (internal chelation). Consequently, intermolecular hydrogen bonding is absent/minimized.',
      difficulty: 'Medium',
      conceptTested: 'Intramolecular H-bonding in salicylaldehyde',
      ncertReference: 'Class 11 Chemistry, Chapter 4, Section 4.8.2',
      verified: true
    },
    {
      id: 'pyq-hb-2013',
      year: 2013,
      exam: 'NEET UG 2013',
      question: 'In ice, each water molecule is tetrahedrally surrounded by how many neighboring water molecules via hydrogen bonds?',
      options: [
        '4',
        '2',
        '6',
        '3'
      ],
      correctAnswer: 0,
      explanation: 'In the hexagonal crystal lattice of ice, each Oxygen atom forms 2 covalent O-H bonds and 2 hydrogen bonds with 4 adjacent water molecules in a 3D tetrahedral geometry.',
      difficulty: 'Easy',
      conceptTested: 'Ice structure 4 H-bonds per water molecule',
      ncertReference: 'Class 11 Chemistry, Chapter 4, Section 4.8.1',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Hydrogen Bonding & Intermolecular Forces',
    confidenceLabel: 'HIGH',
    confidenceText: 'Verified against 5 official NEET UG paper appearances (5 direct questions).',
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
      { year: 2022, exam: 'NEET UG 2022', directPyqCount: 1, marks: 4, questionType: 'Intramolecular H-bonding compound (o-nitrophenol)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2020, exam: 'NEET UG 2020', directPyqCount: 1, marks: 4, questionType: 'High boiling point of H2O vs H2S', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2019, exam: 'NEET UG 2019', directPyqCount: 1, marks: 4, questionType: 'Strongest H-bond molecule (HF)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2016, exam: 'NEET UG 2016', directPyqCount: 1, marks: 4, questionType: 'Absence of intermolecular H-bond (salicylaldehyde)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2013, exam: 'NEET UG 2013', directPyqCount: 1, marks: 4, questionType: 'Tetrahedral 4 H-bonds in ice', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' }
    ],
    sourceInfo: {
      dataSource: 'Official NEET UG / AIPMT Archives & NCERT Class 11 Chemistry',
      analysisPeriod: '2009 – 2024 (15 Verified Papers)',
      directPyqsAnalyzedCount: 5,
      classificationMethod: 'Strict topic-level classification; chapter-level weightage was not used.',
      disclaimer: 'Historical frequency is not a prediction of the next NEET paper.'
    }
  }
};
