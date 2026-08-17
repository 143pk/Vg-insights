export interface PracticeQuestion {
  id: string;
  topicId: string;
  type: 'single-correct' | 'statement' | 'assertion-reason' | 'match' | 'structure-identification';
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
}

export const BIOMOLECULES_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  // ----------------------------------------------------
  // TOPIC 1: CARBOHYDRATES
  // ----------------------------------------------------
  {
    id: "prac-carb-1",
    topicId: "chem-carbohydrates-structure",
    type: "single-correct",
    difficulty: "Easy",
    question: "Which of the following monosaccharides is an aldohexose with four chiral carbon atoms in its open-chain structure?",
    options: [
      "D-Fructose",
      "D-Glucose",
      "D-Ribose",
      "D-Erythrose"
    ],
    correctAnswer: 1,
    explanation: "D-Glucose is an aldohexose (C₆H₁₂O₆) possessing an aldehyde group at C-1 and four asymmetric (chiral) carbon atoms at C-2, C-3, C-4, and C-5 in its open-chain Fischer projection, yielding 2⁴ = 16 optical stereoisomers.",
  },
  {
    id: "prac-carb-2",
    topicId: "chem-carbohydrates-structure",
    type: "single-correct",
    difficulty: "Easy",
    question: "The chemical reaction of D-glucose with Bromine water (Br₂/H₂O) yields:",
    options: [
      "Saccharic acid",
      "Gluconic acid",
      "n-Hexane",
      "Glucaric acid"
    ],
    correctAnswer: 1,
    explanation: "Bromine water is a mild oxidising agent that selectively oxidises the terminal aldehyde group (-CHO at C-1) of glucose to a carboxylic acid (-COOH) without affecting secondary or primary alcohol groups, producing Gluconic acid (a monocarboxylic acid).",
  },
  {
    id: "prac-carb-3",
    topicId: "chem-carbohydrates-structure",
    type: "statement",
    difficulty: "Moderate",
    question: "Consider the following statements regarding the cyclic structure of Glucose:\nI. α-D-glucopyranose and β-D-glucopyranose are anomers.\nII. α-D-glucopyranose has the anomeric -OH group pointing downward (trans to C6-CH₂OH) in Haworth projection.\nIII. Glucose pentaacetate reacts readily with hydroxylamine to form an oxime.\nIV. In aqueous solution, mutarotation reaches an equilibrium specific rotation of +52.7°.\nWhich of the above statements are CORRECT?",
    options: [
      "I, II, and III only",
      "I, II, and IV only",
      "II, III, and IV only",
      "I, III, and IV only"
    ],
    correctAnswer: 1,
    explanation: "Statements I, II, and IV are correct. Statement III is FALSE because in glucose pentaacetate, the anomeric -OH at C-1 is acetylated into an ester, preventing the ring from opening to generate a free -CHO group; hence it does NOT react with hydroxylamine (NH₂OH).",
  },
  {
    id: "prac-carb-4",
    topicId: "chem-carbohydrates-structure",
    type: "assertion-reason",
    difficulty: "Moderate",
    question: "Assertion (A): Fructose reduces Tollens' reagent and Fehling's solution even though it contains a ketonic carbonyl group.\nReason (R): In alkaline medium, fructose undergoes enediol rearrangement into aldoses (glucose and mannose).",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true."
    ],
    correctAnswer: 0,
    explanation: "Under alkaline conditions used in Tollens' and Fehling's tests, the α-hydroxy ketone group of fructose undergoes base-catalysed Lobry de Bruyn-Alberda van Ekenstein enediol rearrangement, isomerizing into aldoses (glucose and mannose) which then readily reduce the reagents. Both (A) and (R) are true, and (R) correctly explains (A).",
  },
  {
    id: "prac-carb-5",
    topicId: "chem-carbohydrates-structure",
    type: "match",
    difficulty: "Moderate",
    question: "Match the carbohydrate in Column I with its appropriate structural feature/linkage in Column II:\nColumn I:\n(A) Sucrose\n(B) Maltose\n(C) Lactose\n(D) Cellulose\nColumn II:\n(1) β(1→4) glycosidic linkage between β-D-galactose and β-D-glucose\n(2) α(1) ⟷ β(2) glycosidic bond (non-reducing)\n(3) Linear unbranched β(1→4) glucan microfibrils\n(4) α(1→4) glycosidic linkage between two α-D-glucose units",
    options: [
      "A-2, B-4, C-1, D-3",
      "A-4, B-2, C-1, D-3",
      "A-2, B-1, C-4, D-3",
      "A-3, B-4, C-1, D-2"
    ],
    correctAnswer: 0,
    explanation: "Sucrose is linked via α-1 ⟷ β-2 glycosidic bond (A-2). Maltose is linked via α(1→4) bond (B-4). Lactose is linked via β(1→4) bond between galactose and glucose (C-1). Cellulose is composed of linear unbranched β(1→4) glucan chains (D-3).",
  },
  {
    id: "prac-carb-6",
    topicId: "chem-carbohydrates-structure",
    type: "single-correct",
    difficulty: "Hard",
    question: "When D-glucose is treated with concentrated Nitric acid (HNO₃), the product obtained is:",
    options: [
      "Gluconic acid",
      "Saccharic acid",
      "Glucuronic acid",
      "Tartaric acid"
    ],
    correctAnswer: 1,
    explanation: "Concentrated HNO₃ is a strong oxidising agent that oxidises BOTH the terminal aldehyde carbon (C-1) and the primary alcohol carbon (C-6) of glucose into carboxylic acid groups, forming Saccharic acid (also known as D-Glucaric acid, HOOC-(CHOH)₄-COOH), a dicarboxylic acid.",
  },
  {
    id: "prac-carb-7",
    topicId: "chem-carbohydrates-structure",
    type: "single-correct",
    difficulty: "Hard",
    question: "Which of the following statements is INCORRECT regarding Starch and its components?",
    options: [
      "Amylose is water-soluble and accounts for 15–20% of starch.",
      "Amylopectin contains α(1→4) linkages in main chains and α(1→6) linkages at branch points.",
      "Amylose forms a helical coil that entraps iodine to give an intense blue color.",
      "Amylopectin is a linear polymer of β-D-glucose units."
    ],
    correctAnswer: 3,
    explanation: "Option D is incorrect because Amylopectin is a highly branched polymer composed exclusively of α-D-glucose (not β-D-glucose) joined by α(1→4) main chains and α(1→6) branch points occurring every 20–25 glucose units. It is Cellulose that is composed of linear β-D-glucose units.",
  },

  // ----------------------------------------------------
  // TOPIC 2: AMINO ACIDS, PROTEINS, ENZYMES & VITAMINS
  // ----------------------------------------------------
  {
    id: "prac-prot-1",
    topicId: "chem-proteins-amino-acids",
    type: "single-correct",
    difficulty: "Easy",
    question: "Which of the following standard amino acids is ACHIRAL and does NOT show optical isomerism?",
    options: [
      "Alanine",
      "Valine",
      "Glycine",
      "Leucine"
    ],
    correctAnswer: 2,
    explanation: "Glycine (H₂N-CH₂-COOH) has two hydrogen atoms attached to its α-carbon (R = H); hence the α-carbon lacks four different substituent groups and is achiral, making glycine the only optically inactive natural amino acid.",
  },
  {
    id: "prac-prot-2",
    topicId: "chem-proteins-amino-acids",
    type: "single-correct",
    difficulty: "Easy",
    question: "In an aqueous solution at its isoelectric point (pI), an amino acid exists predominantly as:",
    options: [
      "Positively charged cation only",
      "Negatively charged anion only",
      "Dipolar Zwitterion with net zero electrical charge",
      "Non-ionized neutral covalent molecule"
    ],
    correctAnswer: 2,
    explanation: "At its isoelectric point (pI), an amino acid exists as a dipolar Zwitterion (⁺H₃N–CH(R)–COO⁻) formed by internal proton transfer from the carboxylic acid group to the amino group, having equal positive and negative charges and a net electrical charge of zero.",
  },
  {
    id: "prac-prot-3",
    topicId: "chem-proteins-amino-acids",
    type: "statement",
    difficulty: "Moderate",
    question: "Which of the following sets consists EXCLUSIVELY of essential amino acids for humans?",
    options: [
      "Glycine, Alanine, Valine, Leucine",
      "Valine, Leucine, Lysine, Phenylalanine",
      "Glutamic acid, Aspartic acid, Tyrosine, Proline",
      "Serine, Cysteine, Alanine, Glycine"
    ],
    correctAnswer: 1,
    explanation: "The 10 essential amino acids are Valine, Leucine, Isoleucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, Histidine, and Arginine. In Option B, Valine, Leucine, Lysine, and Phenylalanine are all essential.",
  },
  {
    id: "prac-prot-4",
    topicId: "chem-proteins-amino-acids",
    type: "assertion-reason",
    difficulty: "Moderate",
    question: "Assertion (A): During denaturation of a protein, its biological activity is lost but its primary structure remains intact.\nReason (R): Denaturation disrupts hydrogen bonds and higher-order 2° and 3° conformations without cleaving covalent peptide bonds.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true."
    ],
    correctAnswer: 0,
    explanation: "Denaturation (caused by heat, pH alteration, or chemical denaturants) breaks non-covalent interactions such as hydrogen bonds, causing unfolding of globular chains and destroying 2°, 3°, and 4° structures. The covalent amide peptide bonds (1° structure) remain intact. Thus both (A) and (R) are true and (R) correctly explains (A).",
  },
  {
    id: "prac-prot-5",
    topicId: "chem-proteins-amino-acids",
    type: "match",
    difficulty: "Moderate",
    question: "Match the Vitamin in Column I with its deficiency disease in Column II:\nColumn I:\n(A) Vitamin B₁ (Thiamine)\n(B) Vitamin B₁₂ (Cyanocobalamin)\n(C) Vitamin C (Ascorbic acid)\n(D) Vitamin D (Calciferol)\nColumn II:\n(1) Scurvy (bleeding gums)\n(2) Beriberi\n(3) Rickets in children\n(4) Pernicious Anaemia",
    options: [
      "A-2, B-4, C-1, D-3",
      "A-4, B-2, C-1, D-3",
      "A-2, B-1, C-4, D-3",
      "A-1, B-4, C-2, D-3"
    ],
    correctAnswer: 0,
    explanation: "Vitamin B₁ deficiency causes Beriberi (A-2). Vitamin B₁₂ deficiency causes Pernicious Anaemia (B-4). Vitamin C deficiency causes Scurvy (C-1). Vitamin D deficiency causes Rickets (D-3).",
  },
  {
    id: "prac-prot-6",
    topicId: "chem-proteins-amino-acids",
    type: "single-correct",
    difficulty: "Hard",
    question: "Which of the following statements regarding secondary structures of proteins is CORRECT?",
    options: [
      "α-Helix is stabilized by intermolecular hydrogen bonds between different polypeptide chains.",
      "In an α-helix, the >C=O of amino acid 'n' is hydrogen-bonded to the –NH– of amino acid residue 'n+4' in the same chain.",
      "Silk fibroin is a classic example of an α-helical fibrous protein.",
      "Denaturation breaks only the primary peptide bonds, leaving secondary α-helices intact."
    ],
    correctAnswer: 1,
    explanation: "In an α-helix, the polypeptide chain coils into a right-handed screw held by INTRAMOLECULAR hydrogen bonding between the carbonyl oxygen (>C=O) of the nth residue and the amide hydrogen (–NH–) of the (n+4)th residue. Silk fibroin has a β-pleated sheet structure.",
  },
  {
    id: "prac-prot-7",
    topicId: "chem-proteins-amino-acids",
    type: "single-correct",
    difficulty: "Hard",
    question: "Which of the following vitamins is FAT-SOLUBLE and acts as a vital cofactor for the γ-carboxylation of prothrombin for blood coagulation?",
    options: [
      "Vitamin B₆",
      "Vitamin C",
      "Vitamin K",
      "Vitamin B₁₂"
    ],
    correctAnswer: 2,
    explanation: "Vitamin K (Phylloquinone/Menaquinone) is a fat-soluble vitamin essential for post-translational γ-carboxylation of glutamic acid residues in prothrombin and blood clotting factors VII, IX, and X. Deficiency leads to prolonged blood clotting time.",
  },

  // ----------------------------------------------------
  // TOPIC 3: NUCLEIC ACIDS (DNA & RNA)
  // ----------------------------------------------------
  {
    id: "prac-na-1",
    topicId: "chem-nucleic-acids-enzymes",
    type: "single-correct",
    difficulty: "Easy",
    question: "A Nucleoside differs from a Nucleotide because a Nucleoside lacks:",
    options: [
      "Nitrogenous purine base",
      "Phosphate group",
      "Pentose sugar",
      "Pyrimidines"
    ],
    correctAnswer: 1,
    explanation: "A Nucleoside consists strictly of a nitrogenous base attached to C-1′ of a pentose sugar (Base + Sugar). A Nucleotide contains a phosphate group esterified to C-5′ of the pentose sugar in addition to the base and sugar (Base + Sugar + Phosphate).",
  },
  {
    id: "prac-na-2",
    topicId: "chem-nucleic-acids-enzymes",
    type: "single-correct",
    difficulty: "Easy",
    question: "In double-stranded DNA, the nitrogenous base Guanine pairs with Cytosine through:",
    options: [
      "One hydrogen bond",
      "Two hydrogen bonds",
      "Three hydrogen bonds",
      "A covalent phosphodiester bond"
    ],
    correctAnswer: 2,
    explanation: "According to Watson-Crick base pairing in B-DNA, Guanine (purine) pairs with Cytosine (pyrimidine) through THREE hydrogen bonds (G≡C), whereas Adenine pairs with Thymine through TWO hydrogen bonds (A=T).",
  },
  {
    id: "prac-na-3",
    topicId: "chem-nucleic-acids-enzymes",
    type: "statement",
    difficulty: "Moderate",
    question: "A sample of double-stranded DNA is analyzed and found to contain 28% Adenine. What is the percentage of Cytosine in this DNA sample?",
    options: [
      "28%",
      "22%",
      "44%",
      "56%"
    ],
    correctAnswer: 1,
    explanation: "According to Chargaff's rule in double-stranded DNA:\n[A] = [T] = 28% ⟹ [A + T] = 56%.\nTherefore, [G + C] = 100% - 56% = 44%.\nSince [G] = [C], the percentage of Cytosine = 44% / 2 = 22%.",
  },
  {
    id: "prac-na-4",
    topicId: "chem-nucleic-acids-enzymes",
    type: "assertion-reason",
    difficulty: "Moderate",
    question: "Assertion (A): DNA is chemically more stable and less reactive than RNA as the genetic material.\nReason (R): 2′-Deoxyribose sugar in DNA lacks a free 2′-hydroxyl (-OH) group, preventing internal base-catalysed strand cleavage.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true."
    ],
    correctAnswer: 0,
    explanation: "In RNA, the presence of a free 2′-OH group on ribose makes it labile and susceptible to alkaline hydrolysis and nucleophilic cleavage. DNA contains 2′-deoxyribose (which lacks this 2′-OH), making the DNA phosphodiester backbone much more chemically stable. Both (A) and (R) are true and (R) is the correct explanation.",
  },
  {
    id: "prac-na-5",
    topicId: "chem-nucleic-acids-enzymes",
    type: "single-correct",
    difficulty: "Hard",
    question: "The chemical linkage connecting successive nucleotide units in a single polynucleotide strand of DNA is:",
    options: [
      "1′ ⟶ 4′ Glycosidic linkage",
      "3′ ⟶ 5′ Phosphodiester bond",
      "2′ ⟶ 5′ Amide bond",
      "Peptide linkage"
    ],
    correctAnswer: 1,
    explanation: "Adjacent nucleotides in a nucleic acid chain are linked by 3′ ⟶ 5′ phosphodiester bonds formed between the 3′-hydroxyl group of one pentose sugar and the 5′-phosphate group of the adjacent nucleotide, forming the hydrophilic sugar-phosphate backbone.",
  },
  {
    id: "prac-na-6",
    topicId: "chem-nucleic-acids-enzymes",
    type: "single-correct",
    difficulty: "Hard",
    question: "Which of the following pyrimidines is chemically equivalent to '5-Methyluracil'?",
    options: [
      "Cytosine",
      "Thymine",
      "Guanine",
      "Adenine"
    ],
    correctAnswer: 1,
    explanation: "Thymine (T) is chemically 5-methylpyrimidine-2,4-dione (5-Methyluracil). It is identical to uracil except for the presence of an additional methyl group (-CH₃) at the C-5 position of the pyrimidine ring.",
  }
];
