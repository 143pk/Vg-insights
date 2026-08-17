import { DetailedTopicContent } from '../../types/neet';
import { BIOMOLECULES_DIAGRAMS } from '../biomolecules/biomoleculesDiagrams';

export const chemCarbohydratesStructureDetails: DetailedTopicContent = {
  topicId: "chem-carbohydrates-structure",
  topicName: "Carbohydrates — Structure, Anomers & Glycosidic Linkages",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Organic Chemistry & Practical (Class 12)",
  chapter: "Biomolecules",

  whatIsThisTopic: "Complete NCERT breakdown of Carbohydrates: Classification (Aldoses vs Ketoses), Proof of Open-Chain Structure of D-Glucose, Cyclic Pyranose/Furanose Haworth Projections, Anomers, Mutarotation, Reducing vs Non-reducing Sugars, and Structures of Disaccharides (Sucrose, Maltose, Lactose) and Polysaccharides (Starch, Cellulose, Glycogen).",

  basicIdea: [
    "Carbohydrates are optically active polyhydroxy aldehydes or polyhydroxy ketones or compounds that produce such units upon hydrolysis.",
    "D-Glucose (Aldohexose) has 4 chiral carbons in open-chain form (2⁴ = 16 isomers) and 5 chiral carbons in cyclic hemiacetal pyranose form. Prolonged heating with HI gives n-hexane; oxidation with Br₂/H₂O gives Gluconic acid; oxidation with conc. HNO₃ gives Saccharic acid.",
    "Mutarotation is the spontaneous change in specific rotation between α-D-glucopyranose (+112°) and β-D-glucopyranose (+19°) via open-chain intermediate to reach equilibrium (+52.7°).",
    "Sucrose is a NON-REDUCING disaccharide linked via α-D-Glc(1) ⟷ β-D-Fru(2) glycosidic bond. Hydrolysis inverts optical rotation from +66.5° to -20° (Invert Sugar). Maltose [α(1→4)] and Lactose [β(1→4)] are REDUCING sugars."
  ],

  importantTerms: [
    {
      term: "Aldohexose & Ketohexose",
      definition: "An aldohexose is a 6-carbon monosaccharide with an aldehyde group at C-1 (e.g., Glucose, Galactose). A ketohexose contains a ketone carbonyl at C-2 (e.g., Fructose).",
      neetNote: "Glucose has 4 chiral carbons in open chain; Fructose has 3 chiral carbons in open chain."
    },
    {
      term: "Anomers",
      definition: "Diastereomers of cyclic monosaccharides that differ in stereochemical configuration ONLY at the hemiacetal/hemiketal carbon (C-1 in glucose, C-2 in fructose).",
      neetNote: "α-D-glucopyranose has C-1 –OH pointing DOWN; β-D-glucopyranose has C-1 –OH pointing UP (equatorial, more stable)."
    },
    {
      term: "Mutarotation",
      definition: "The spontaneous change in specific optical rotation of an optically active carbohydrate solution until dynamic equilibrium between open and cyclic anomers is reached.",
      neetNote: "Non-reducing sugars (like Sucrose) do NOT show mutarotation because their anomeric carbons are locked in glycosidic bonds."
    },
    {
      term: "Reducing Sugar",
      definition: "Any sugar with a free or equilibrating hemiacetal/hemiketal group at its anomeric carbon capable of reducing Tollens', Fehling's, or Benedict's reagents.",
      neetNote: "All monosaccharides (including ketoses like fructose via enediol rearrangement) and maltose/lactose are reducing sugars."
    },
    {
      term: "Invert Sugar",
      definition: "An equimolar mixture of D-(+)-glucose and D-(-)-fructose obtained by acid/enzymatic hydrolysis of dextrorotatory sucrose, exhibiting a net laevorotatory optical rotation (-20°).",
      neetNote: "Fructose laevorotation (-92.4°) dominates over glucose dextrorotation (+52.5°)."
    },
    {
      term: "Glycosidic Linkage",
      definition: "An ether linkage (–C–O–C–) formed by condensation between the anomeric hydroxyl of a carbohydrate unit and a hydroxyl group of another molecule.",
      neetNote: "Sucrose = α-1 ⟷ β-2; Maltose = α(1→4); Lactose = β(1→4); Amylose = α(1→4); Amylopectin = α(1→4) + α(1→6); Cellulose = β(1→4)."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Structure Elucidation of D-Glucose (NCERT Chemical Proofs)",
      paragraphs: [
        "Glucose is an aldohexose with molecular formula C₆H₁₂O₆, known as dextrose because it occurs naturally as the dextrorotatory enantiomer D-(+)-glucose.",
        "The open-chain structure of D-glucose was systematically deduced through landmark chemical reactions:",
        "1. Straight 6-Carbon Chain: Prolonged heating with concentrated HI and red phosphorus yields n-hexane (CH₃-CH₂-CH₂-CH₂-CH₂-CH₃), proving all 6 carbons are linked in an unbranched sequence.",
        "2. Presence of Carbonyl Group (>C=O): Glucose reacts with hydroxylamine (NH₂OH) to form a crystalline oxime and adds one molecule of hydrogen cyanide (HCN) to form a cyanohydrin.",
        "3. Carbonyl is an Aldehyde (-CHO): Mild oxidation with Bromine water (Br₂/H₂O) selectively oxidises C-1 to form Gluconic acid (monocarboxylic acid, C₆H₁₂O₇).",
        "4. Presence of Five Hydroxyl Groups: Acetylation with 5 moles of acetic anhydride ((CH₃CO)₂O) yields Glucose Pentaacetate, indicating 5 separate –OH groups attached to 5 distinct carbons.",
        "5. Presence of One Primary Alcohol Group: Vigorous oxidation with concentrated Nitric Acid (HNO₃) oxidises both the terminal aldehyde (C-1) and primary alcohol (C-6) to form Saccharic acid (Glucaric acid, dicarboxylic acid)."
      ],
      visual: {
        type: 'svg',
        svgContent: BIOMOLECULES_DIAGRAMS.glucoseAndFructoseStructures,
        caption: "Open-chain Fischer and Cyclic Haworth Projections of D-Glucose and D-Fructose with chemical proof annotations.",
        guide: "Memorize the specific reagents: HI/heat gives n-hexane; Br₂/H₂O gives gluconic acid; conc. HNO₃ gives saccharic acid; Ac₂O gives pentaacetate."
      },
      importantPoints: [
        "Glucose has 4 chiral carbons (C-2, C-3, C-4, C-5) in open chain form, yielding 2⁴ = 16 optical isomers.",
        "D-configuration indicates that the –OH group at the highest numbered asymmetric carbon (C-5) is on the RIGHT side in the standard Fischer projection."
      ]
    },
    {
      heading: "2. Cyclic Haworth Structure, Anomers & Mutarotation",
      paragraphs: [
        "Despite explaining many properties, the open-chain structure failed to explain several key experimental observations:",
        "• Glucose does not give Schiff's test or form addition product with sodium bisulphite (NaHSO₃).",
        "• Glucose pentaacetate does not react with hydroxylamine (NH₂OH), proving the absence of a free –CHO group in the acetylated form.",
        "• Glucose exists in two distinct crystalline forms with different melting points and optical rotations: α-D-glucose (m.p. 419 K, [α] = +112°) and β-D-glucose (m.p. 423 K, [α] = +19°).",
        "This led to the cyclic hemiacetal structure: the –OH at C-5 adds intramolecularly to the C-1 aldehyde group, creating a 6-membered Pyranose ring. C-1 becomes a new chiral center known as the ANOMERIC CARBON.",
        "Mutarotation occurs when pure α-anomer (+112°) or pure β-anomer (+19°) is dissolved in water. The ring reversibly opens and closes via the minute open-chain intermediate (~0.02%) until an equilibrium mixture of ~36% α-anomer and ~64% β-anomer is reached, with a stable specific rotation of +52.7°."
      ],
      importantPoints: [
        "β-D-glucopyranose is thermodynamically more stable than α-D-glucopyranose because all its non-hydrogen bulky substituents (–OH and –CH₂OH) occupy equatorial positions.",
        "Mutarotation is shown by all reducing sugars with a free hemiacetal/hemiketal hydroxyl."
      ]
    },
    {
      heading: "3. D-Fructose & The Enediol Reducing Mechanism",
      paragraphs: [
        "Fructose is a ketohexose with the same molecular formula (C₆H₁₂O₆). In open-chain form, it has a ketone carbonyl at C-2 and 3 chiral carbons (C-3, C-4, C-5), yielding 2³ = 8 optical isomers. Natural fructose is strongly laevorotatory ([α] = -92.4°), hence called Laevulose.",
        "In cyclic form, the C-5 –OH adds to the C-2 ketone to form a 5-membered Furanose ring (α-D-fructofuranose and β-D-fructofuranose). C-2 is the anomeric carbon.",
        "Why does Fructose reduce Tollens' and Fehling's Reagents? In alkaline testing medium, the α-hydroxy ketone group of fructose undergoes base-catalysed Lobry de Bruyn-Alberda van Ekenstein enediol tautomerism, interconverting reversibly into D-Glucose and D-Mannose. These aldoses then act as powerful reducing agents."
      ],
      importantPoints: [
        "Br₂/H₂O is neutral/mildly acidic and distinguishes Glucose (positive) from Fructose (negative).",
        "Glucose and Fructose give IDENTICAL osazone crystals because osazone formation consumes only C-1 and C-2, while C-3, C-4, and C-5 have identical configurations."
      ]
    },
    {
      heading: "4. Disaccharides & Polysaccharides: Linkages & Reducing Properties",
      paragraphs: [
        "1. Sucrose (C₁₂H₂₂O₁₁): Composed of α-D-glucopyranose (C-1) and β-D-fructofuranose (C-2) joined by an α-1 ⟷ β-2 glycosidic bond. Because both anomeric carbons are tied in the glycosidic bond, sucrose is strictly NON-REDUCING, does not mutarotate, and does not form osazones. Hydrolysis gives Invert Sugar.",
        "2. Maltose (C₁₂H₂₂O₁₁): Composed of two α-D-glucopyranose units joined by an α(1→4) glycosidic linkage. The second glucose ring has a free C-1 hemiacetal, making maltose a REDUCING sugar that mutarotates and forms osazone.",
        "3. Lactose (C₁₂H₂₂O₁₁): Composed of β-D-galactopyranose (C-1) and β-D-glucopyranose (C-4) joined by a β(1→4) glycosidic linkage. It is a REDUCING sugar.",
        "4. Starch: Main storage polysaccharide in plants, composed of Amylose (15–20%, linear α(1→4) glucan, water-soluble, coils to entrap I₂ giving blue color) and Amylopectin (80–85%, branched with α(1→4) chains and α(1→6) branch points every 20–25 units, water-insoluble).",
        "5. Cellulose: Structural cell wall polysaccharide of plants, composed of strictly linear β(1→4) glucan ribbons packed tightly by extensive hydrogen bonding into insoluble microfibrils. Humans lack cellulase enzyme and cannot digest cellulose.",
        "6. Glycogen: 'Animal starch' stored in liver and muscle, structurally similar to amylopectin but much more densely branched (branching every 8–12 glucose units)."
      ],
      visual: {
        type: 'svg',
        svgContent: BIOMOLECULES_DIAGRAMS.disaccharidesAndPolysaccharides,
        caption: "Haworth structural formulas for Sucrose, Maltose, Lactose, Amylose, Amylopectin, and Cellulose.",
        guide: "Check anomeric carbons: if both are involved in glycosidic linkage, the sugar is non-reducing (Sucrose); if one is free as hemiacetal, it is reducing (Maltose, Lactose)."
      },
      importantPoints: [
        "Amylose + I₂ ⟶ Intense Blue color; Amylopectin + I₂ ⟶ Red-Violet color; Cellulose + I₂ ⟶ No color change.",
        "Galactose is the C-4 epimer of Glucose (differs only in –OH orientation at C-4)."
      ]
    }
  ],

  formulae: [
    {
      title: "Optical Inversion of Sucrose (Invert Sugar)",
      formula: "C₁₂H₂₂O₁₁ (Sucrose, [α] = +66.5°) + H₂O ⟶ C₆H₁₂O₆ (D-(+)-Glucose, [α] = +52.5°) + C₆H₁₂O₆ (D-(-)-Fructose, [α] = -92.4°)",
      meaning: "The net specific rotation of the equimolar hydrolysed mixture is: [α]net = (+52.5° - 92.4°) / 2 = -19.95° ≈ -20° (Laevorotatory).",
      symbols: "[α] = specific optical rotation in degrees",
      unit: "degrees / (dm · g/mL)",
      conditions: "Acid catalysis (H⁺) or enzyme Invertase / Sucrase.",
      whenToUse: "Use to explain why hydrolysed sucrose is called Invert Sugar in NEET questions."
    },
    {
      title: "Chiral Carbons & Isomer Count",
      formula: "Number of optical isomers = 2ⁿ (where n = number of asymmetric chiral carbons)",
      meaning: "For open-chain aldohexose (Glucose): n = 4 ⟹ 16 stereoisomers. For open-chain ketohexose (Fructose): n = 3 ⟹ 8 stereoisomers.",
      symbols: "n = number of chiral carbons",
      unit: "dimensionless",
      conditions: "Molecules lacking plane or center of symmetry.",
      whenToUse: "Use when calculating total possible optical isomers of monosaccharides."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: BIOMOLECULES_DIAGRAMS.disaccharidesAndPolysaccharides,
    caption: "Polymer architecture of Polysaccharides: Linear Amylose vs Branched Amylopectin in Starch and Linear β(1→4) Cellulose."
  },

  neetImportantPoints: [
    "Glucose on prolonged heating with HI/P gives n-hexane; with Br₂/H₂O gives gluconic acid; with conc. HNO₃ gives saccharic acid.",
    "Glucose pentaacetate does NOT react with hydroxylamine (NH₂OH) — proves the cyclic hemiacetal structure.",
    "Mutarotation reaches equilibrium at [α] = +52.7° (36% α-form + 64% β-form + 0.02% open chain).",
    "Fructose reduces Tollens and Fehling reagents via alkaline enediol tautomerization.",
    "Sucrose is NON-REDUCING (α-1 ⟷ β-2 linkage); Maltose is REDUCING (α-1,4 linkage); Lactose is REDUCING (β-1,4 linkage).",
    "Amylose has α(1→4) linkages (water-soluble); Amylopectin has α(1→4) and α(1→6) linkages (water-insoluble).",
    "Cellulose contains β(1→4) glycosidic linkages; humans cannot digest cellulose due to lack of cellulase."
  ],

  commonConfusions: [
    {
      commonConfusion: "Believing Fructose cannot reduce Fehling's or Tollens' solution because it is a ketone.",
      correctFact: "Under alkaline conditions, Fructose undergoes Lobry de Bruyn-Alberda van Ekenstein enediol rearrangement into Glucose and Mannose, strongly reducing both reagents.",
      whyItMattersForNEET: "High-frequency NEET trap question testing ketose reducing properties."
    },
    {
      commonConfusion: "Thinking Sucrose is a reducing sugar because it is composed of glucose and fructose.",
      correctFact: "Sucrose is strictly NON-REDUCING because both anomeric carbons (C-1 of glucose and C-2 of fructose) are engaged in the glycosidic bond.",
      whyItMattersForNEET: "Standard NEET MCQ on reducing vs non-reducing carbohydrates."
    },
    {
      commonConfusion: "Confusing D/L configuration with optical rotation (+)/(-).",
      correctFact: "D and L refer to stereochemical configuration at C-5 relative to D-glyceraldehyde. Optical rotation (+ or -) is an experimental measurement. D-glucose is (+) but D-fructose is (-).",
      whyItMattersForNEET: "Frequent conceptual confusion in carbohydrate stereochemistry."
    }
  ],

  quickRevision: [
    "Glucose + HI (heat) ⟶ n-Hexane (proves 6 straight carbons)",
    "Glucose + Br₂/H₂O ⟶ Gluconic acid (monocarboxylic acid)",
    "Glucose + conc. HNO₃ ⟶ Saccharic acid (dicarboxylic acid)",
    "Glucose + 5 Ac₂O ⟶ Glucose Pentaacetate (5 –OH groups)",
    "Mutarotation: α-D-glucose (+112°) ⇌ β-D-glucose (+19°) ⟶ Equilibrium = +52.7°",
    "Sucrose = α-D-Glc (C1) + β-D-Fru (C2) ⟶ Non-reducing, Invert Sugar (+66.5° ⟶ -20°)",
    "Maltose = α-D-Glc (C1) + α-D-Glc (C4) ⟶ Reducing sugar",
    "Lactose = β-D-Gal (C1) + β-D-Glc (C4) ⟶ Reducing sugar",
    "Starch = Amylose (15–20% linear α-1,4) + Amylopectin (80–85% branched α-1,4 & α-1,6)",
    "Cellulose = Linear β(1→4) glucan; humans cannot digest"
  ],

  practiceQuestions: [
    {
      id: "prac-carb-1",
      topicId: "chem-carbohydrates-structure",
      difficulty: "Easy",
      question: "Which of the following monosaccharides is an aldohexose with four chiral carbon atoms in its open-chain structure?",
      options: [
        "D-Fructose",
        "D-Glucose",
        "D-Ribose",
        "D-Erythrose"
      ],
      correctAnswer: 1,
      explanation: "D-Glucose is an aldohexose (C₆H₁₂O₆) possessing an aldehyde group at C-1 and four asymmetric (chiral) carbon atoms at C-2, C-3, C-4, and C-5 in its open-chain Fischer projection, yielding 2⁴ = 16 optical stereoisomers."
    },
    {
      id: "prac-carb-2",
      topicId: "chem-carbohydrates-structure",
      difficulty: "Easy",
      question: "The chemical reaction of D-glucose with Bromine water (Br₂/H₂O) yields:",
      options: [
        "Saccharic acid",
        "Gluconic acid",
        "n-Hexane",
        "Glucaric acid"
      ],
      correctAnswer: 1,
      explanation: "Bromine water is a mild oxidising agent that selectively oxidises the terminal aldehyde group (-CHO at C-1) of glucose to a carboxylic acid (-COOH) without affecting secondary or primary alcohol groups, producing Gluconic acid (a monocarboxylic acid)."
    },
    {
      id: "prac-carb-3",
      topicId: "chem-carbohydrates-structure",
      difficulty: "Medium",
      question: "Consider the following statements regarding the cyclic structure of Glucose:\nI. α-D-glucopyranose and β-D-glucopyranose are anomers.\nII. α-D-glucopyranose has the anomeric -OH group pointing downward in Haworth projection.\nIII. Glucose pentaacetate reacts readily with hydroxylamine to form an oxime.\nIV. In aqueous solution, mutarotation reaches an equilibrium specific rotation of +52.7°.\nWhich of the above statements are CORRECT?",
      options: [
        "I, II, and III only",
        "I, II, and IV only",
        "II, III, and IV only",
        "I, III, and IV only"
      ],
      correctAnswer: 1,
      explanation: "Statements I, II, and IV are correct. Statement III is FALSE because in glucose pentaacetate, the anomeric -OH at C-1 is acetylated into an ester, preventing the ring from opening to generate a free -CHO group; hence it does NOT react with hydroxylamine (NH₂OH)."
    },
    {
      id: "prac-carb-4",
      topicId: "chem-carbohydrates-structure",
      difficulty: "Medium",
      question: "Assertion (A): Fructose reduces Tollens' reagent and Fehling's solution even though it contains a ketonic carbonyl group.\nReason (R): In alkaline medium, fructose undergoes enediol rearrangement into aldoses (glucose and mannose).",
      options: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
        "(A) is true but (R) is false.",
        "(A) is false but (R) is true."
      ],
      correctAnswer: 0,
      explanation: "Under alkaline conditions used in Tollens' and Fehling's tests, the α-hydroxy ketone group of fructose undergoes base-catalysed Lobry de Bruyn-Alberda van Ekenstein enediol rearrangement, isomerizing into aldoses (glucose and mannose) which then readily reduce the reagents. Both (A) and (R) are true, and (R) correctly explains (A)."
    },
    {
      id: "prac-carb-5",
      topicId: "chem-carbohydrates-structure",
      difficulty: "Medium",
      question: "Match the carbohydrate in Column I with its appropriate structural feature/linkage in Column II:\nColumn I:\n(A) Sucrose\n(B) Maltose\n(C) Lactose\n(D) Cellulose\nColumn II:\n(1) β(1→4) glycosidic linkage between β-D-galactose and β-D-glucose\n(2) α(1) ⟷ β(2) glycosidic bond (non-reducing)\n(3) Linear unbranched β(1→4) glucan microfibrils\n(4) α(1→4) glycosidic linkage between two α-D-glucose units",
      options: [
        "A-2, B-4, C-1, D-3",
        "A-4, B-2, C-1, D-3",
        "A-2, B-1, C-4, D-3",
        "A-3, B-4, C-1, D-2"
      ],
      correctAnswer: 0,
      explanation: "Sucrose is linked via α-1 ⟷ β-2 glycosidic bond (A-2). Maltose is linked via α(1→4) bond (B-4). Lactose is linked via β(1→4) bond between galactose and glucose (C-1). Cellulose is composed of linear unbranched β(1→4) glucan chains (D-3)."
    }
  ],

  pyqs: [
    {
      id: "pyq-biomol-2023-1",
      year: 2023,
      examYear: "2023",
      exam: "NEET UG",
      topicId: "chem-carbohydrates-structure",
      question: "Which of the following statements is NOT correct regarding (+)-Lactose?",
      options: [
        "(+)-Lactose is a reducing sugar and gives Fehling's test.",
        "(+)-Lactose contains β-D-galactose and β-D-glucose units.",
        "(+)-Lactose is an aldohexose.",
        "(+)-Lactose has β(1→4) glycosidic linkage between C1 of galactose and C4 of glucose."
      ],
      correctAnswer: 2,
      explanation: "Option C is INCORRECT (and hence the correct answer). Lactose is a DISACCHARIDE (C₁₂H₂₂O₁₁), NOT an aldohexose (which is a 6-carbon monosaccharide like glucose or galactose). Lactose is composed of β-D-galactopyranose and β-D-glucopyranose joined by a β(1→4) glycosidic linkage. Because the C1 hemiacetal group of the glucose ring is free, it acts as a reducing sugar and reduces Fehling's solution.",
      conceptTested: "Structure and classification of Lactose as a reducing disaccharide with β(1→4) linkage"
    },
    {
      id: "pyq-biomol-2022-1",
      year: 2022,
      examYear: "2022",
      exam: "NEET UG",
      topicId: "chem-carbohydrates-structure",
      question: "Which of the following is a non-reducing sugar?",
      options: [
        "Glucose",
        "Sucrose",
        "Maltose",
        "Lactose"
      ],
      correctAnswer: 1,
      explanation: "Sucrose is a non-reducing sugar because its glycosidic bond joins the reducing anomeric carbon of α-D-glucose (C-1) directly to the reducing anomeric carbon of β-D-fructose (C-2). Both potential carbonyl/hemiacetal groups are locked in the glycosidic linkage, so it cannot mutarotate or reduce Tollens' or Fehling's reagents.",
      conceptTested: "Identification of reducing vs non-reducing sugars based on glycosidic linkage"
    },
    {
      id: "pyq-biomol-2020-1",
      year: 2020,
      examYear: "2020",
      exam: "NEET UG",
      topicId: "chem-carbohydrates-structure",
      question: "Sucrose on hydrolysis gives:",
      options: [
        "β-D-Glucose + α-D-Fructose",
        "α-D-Glucose + β-D-Glucose",
        "α-D-Glucose + β-D-Fructose",
        "α-D-Fructose + β-D-Fructose"
      ],
      correctAnswer: 2,
      explanation: "Sucrose (cane sugar) is a dextrorotatory disaccharide. Upon acid-catalysed or enzymatic (invertase) hydrolysis, it yields an equimolar mixture of α-D-glucopyranose and β-D-fructofuranose. This mixture is called Invert Sugar because the optical rotation inverts from dextrorotatory (+66.5°) to laevorotatory (-20°).",
      conceptTested: "Hydrolysis products of sucrose and invert sugar"
    },
    {
      id: "pyq-biomol-2019-1",
      year: 2019,
      examYear: "2019",
      exam: "NEET UG",
      topicId: "chem-carbohydrates-structure",
      question: "The difference between amylose and amylopectin is:",
      options: [
        "Amylopectin have 1→4 α-linkage and 1→6 α-linkage",
        "Amylose have 1→4 α-linkage and 1→6 β-linkage",
        "Amylopectin have 1→4 α-linkage and 1→6 β-linkage",
        "Amylose is composed of galactose and glucose"
      ],
      correctAnswer: 0,
      explanation: "Amylose is a linear unbranched polymer of α-D-glucose joined exclusively by α(1→4) glycosidic linkages. Amylopectin is a branched polymer containing α-D-glucose units joined by α(1→4) linkages in the linear chains and α(1→6) linkages at branch points (occurring every 20–25 glucose units).",
      conceptTested: "Structural differences and glycosidic linkage types in Amylose vs Amylopectin"
    }
  ]
};
