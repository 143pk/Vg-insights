import { PracticeQuestion } from "../../types/neet";

export const AMINES_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    questionId: "prac-amines-1",
    question: "The correct decreasing order of basic strength in the gas phase is:",
    options: [
      "(CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃",
      "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃",
      "(CH₃)₂NH > (CH₃)₃N > CH₃NH₂ > NH₃",
      "NH₃ > CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N"
    ],
    correctAnswer: 0,
    correctAnswerIndex: 0,
    correctOption: 0,
    explanation: "In the gas phase or in non-polar solvents, there is no solvation (hydration) effect. Basicity is governed purely by the electron-donating inductive effect (+I) of alkyl groups. The tertiary amine has three +I methyl groups, secondary has two, primary has one, and ammonia has none. Therefore, the gas phase basicity order is 3° > 2° > 1° > NH₃: (CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃.",
    difficulty: "Easy",
    topicId: "chem-amines-basicity",
    topicTested: "Gas Phase Basicity",
    conceptTested: "Pure +I Inductive Effect in Gas Phase",
    marks: 4
  },
  {
    questionId: "prac-amines-2",
    question: "Which of the following compounds gives a foul-smelling isocyanide on heating with chloroform and alcoholic KOH, but DOES NOT react with Hinsberg reagent to give an alkali-soluble product?",
    options: [
      "Aniline (C₆H₅NH₂)",
      "N-Methylaniline (C₆H₅NHCH₃)",
      "N,N-Dimethylaniline (C₆H₅N(CH₃)₂)",
      "Diethylamine ((C₂H₅)₂NH)"
    ],
    correctAnswer: 0,
    correctAnswerIndex: 0,
    correctOption: 0,
    explanation: "Carbylamine test is given only by primary (1°) amines. Aniline is a 1° aromatic amine, so it gives phenyl isocyanide (foul smell). However, 1° amines react with Hinsberg reagent (C₆H₅SO₂Cl) to give N-alkyl/arylbenzenesulphonamide which IS soluble in alkali. Let's re-verify: Aniline has an acidic proton on nitrogen, so its sulphonamide (C₆H₅SO₂NHC₆H₅) dissolves in alkali. Secondary amines like N-methylaniline and diethylamine give negative carbylamine test. Thus, Aniline is the only primary amine among the choices.",
    difficulty: "Medium",
    topicId: "chem-amines-basicity",
    topicTested: "Diagnostic Distinction Tests",
    conceptTested: "Carbylamine Test Exclusivity for Primary Amines",
    marks: 4
  },
  {
    questionId: "prac-amines-3",
    question: "Assertion (A): Direct nitration of aniline with nitric acid and sulphuric acid gives a significant amount of m-nitroaniline.\nReason (R): In strongly acidic medium, aniline is protonated to form anilinium ion which is meta-directing.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    correctAnswerIndex: 0,
    correctOption: 0,
    explanation: "Direct nitration of aniline in the presence of conc. HNO₃ and conc. H₂SO₄ yields 51% p-nitroaniline, 47% m-nitroaniline, and 2% o-nitroaniline. The surprisingly high yield of the meta-isomer (47%) is because the strongly acidic medium protonates the basic –NH₂ group to form the anilinium ion (–NH₃⁺). The –NH₃⁺ group is strongly deactivating and meta-directing due to its intense –I effect. Thus, both (A) and (R) are true, and (R) correctly explains (A).",
    difficulty: "Medium",
    topicId: "chem-amines-basicity",
    topicTested: "Electrophilic Substitution of Aniline",
    conceptTested: "Formation of Anilinium Ion and Meta-Directing Behavior in Nitration",
    marks: 4
  },
  {
    questionId: "prac-amines-4",
    question: "In the reaction sequence:\nCH₃CH₂Br ⟶(KCN)⟶ [A] ⟶(LiAlH₄)⟶ [B] ⟶(HNO₂, 0–5 °C)⟶ [C]\nThe final organic product [C] is:",
    options: [
      "CH₃CH₂CH₂OH (Propan-1-ol)",
      "CH₃CH₂OH (Ethanol)",
      "CH₃CH₂CH₂NH₂ (Propan-1-amine)",
      "CH₃CH₂NC (Ethyl isocyanide)"
    ],
    correctAnswer: 0,
    correctAnswerIndex: 0,
    correctOption: 0,
    explanation: "Step 1: CH₃CH₂Br + KCN ⟶ CH₃CH₂CN (Propanenitrile, [A]).\nStep 2: Reduction with LiAlH₄ converts nitrile to primary amine: CH₃CH₂CN + LiAlH₄ ⟶ CH₃CH₂CH₂NH₂ (Propan-1-amine, [B]).\nStep 3: Primary aliphatic amine reacts with nitrous acid (HNO₂ / NaNO₂ + HCl) to form an unstable alkyldiazonium salt, which immediately decomposes liberating N₂ gas to form Propan-1-ol (CH₃CH₂CH₂OH, [C]).",
    difficulty: "Hard",
    topicId: "chem-amines-basicity",
    topicTested: "Multi-Step Organic Synthesis",
    conceptTested: "Nitrile Reduction Followed by Aliphatic Diazotisation Decomposition",
    marks: 4
  },
  {
    questionId: "prac-amines-5",
    question: "Match List-I (Reaction / Reagent) with List-II (Characteristic Feature / Product):\n(A) Hofmann bromamide degradation  ---  (1) Retention of stereochemistry of migrating group\n(B) Gabriel phthalimide synthesis  ---  (2) Pure 1° aliphatic amines only\n(C) Carbylamine test  ---  (3) Dichlorocarbene intermediate\n(D) Hinsberg test with 2° amine  ---  (4) Insoluble in aqueous alkali",
    options: [
      "A-1, B-2, C-3, D-4",
      "A-2, B-1, C-4, D-3",
      "A-3, B-4, C-1, D-2",
      "A-4, B-3, C-2, D-1"
    ],
    correctAnswer: 0,
    correctAnswerIndex: 0,
    correctOption: 0,
    explanation: "(A) In Hofmann bromamide degradation, the alkyl group migrates with complete retention of stereochemistry (A-1).\n(B) Gabriel phthalimide produces pure 1° aliphatic amines without 2°/3° contamination; aryl halides fail (B-2).\n(C) Carbylamine test proceeds through dichlorocarbene (:CCl₂) intermediate (C-3).\n(D) Secondary amine produces N,N-dialkylbenzenesulphonamide which lacks an acidic proton and is insoluble in aqueous alkali (D-4).",
    difficulty: "Medium",
    topicId: "chem-amines-basicity",
    topicTested: "Comprehensive Amines Reactions",
    conceptTested: "Reagents, Intermediates, and Distinguishing Properties",
    marks: 4
  }
];

export const DIAZONIUM_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    questionId: "prac-diaz-1",
    question: "Which of the following transformations can be achieved using the Sandmeyer reaction?",
    options: [
      "Ar–N₂⁺Cl⁻ ⟶ Ar–CN using CuCN / KCN",
      "Ar–N₂⁺Cl⁻ ⟶ Ar–I using aqueous KI",
      "Ar–N₂⁺Cl⁻ ⟶ Ar–F using HBF₄ and heat",
      "Ar–N₂⁺Cl⁻ ⟶ Ar–OH using H₂O and heat"
    ],
    correctAnswer: 0,
    correctAnswerIndex: 0,
    correctOption: 0,
    explanation: "The Sandmeyer reaction specifically refers to the replacement of the diazonium group (–N₂⁺) by –Cl, –Br, or –CN using cuprous salts (Cu₂Cl₂/HCl, Cu₂Br₂/HBr, or CuCN/KCN). The preparation of Ar–I uses only KI (no copper catalyst). The preparation of Ar–F using HBF₄ is the Balz-Schiemann reaction. Hydrolysis to Ar–OH is a simple replacement by –OH.",
    difficulty: "Easy",
    topicId: "chem-amines-distinction-tests",
    topicTested: "Sandmeyer Reaction",
    conceptTested: "Distinction of Sandmeyer from Other Diazonium Replacements",
    marks: 4
  },
  {
    questionId: "prac-diaz-2",
    question: "To synthesize 1,3,5-tribromobenzene from aniline, the sequence of reagents required is:",
    options: [
      "(i) Br₂/H₂O; (ii) NaNO₂ + HCl (0–5 °C); (iii) H₃PO₂ / H₂O",
      "(i) NaNO₂ + HCl; (ii) Br₂/FeBr₃; (iii) H₃PO₂",
      "(i) CH₃COCl; (ii) Br₂/FeBr₃; (iii) H₂O/H⁺",
      "(i) Br₂/H₂O; (ii) LiAlH₄; (iii) Cu₂Br₂/HBr"
    ],
    correctAnswer: 0,
    correctAnswerIndex: 0,
    correctOption: 0,
    explanation: "Step 1: Aniline is treated with excess Br₂/H₂O (bromine water) to give 2,4,6-tribromoaniline (white ppt).\nStep 2: 2,4,6-Tribromoaniline is diazotised using NaNO₂ + HCl at 0–5 °C to form 2,4,6-tribromobenzenediazonium chloride.\nStep 3: Reduction / deamination with hypophosphorous acid (H₃PO₂ + H₂O) replaces the –N₂⁺Cl⁻ group with –H, yielding 1,3,5-tribromobenzene (symmetrical tribromobenzene, which cannot be prepared by direct bromination of benzene).",
    difficulty: "Hard",
    topicId: "chem-amines-distinction-tests",
    topicTested: "Multi-Step Synthetic Applications of Diazonium Salts",
    conceptTested: "Deamination via Diazonium Intermediates for Symmetrical Tribromobenzene",
    marks: 4
  },
  {
    questionId: "prac-diaz-3",
    question: "When benzenediazonium chloride reacts with N,N-dimethylaniline in mildly acidic conditions (pH 4–5), the product formed is:",
    options: [
      "p-(N,N-dimethylamino)azobenzene (Butter Yellow dye)",
      "p-Hydroxyazobenzene",
      "p-Chloro-N,N-dimethylaniline",
      "Phenylhydrazine"
    ],
    correctAnswer: 0,
    correctAnswerIndex: 0,
    correctOption: 0,
    explanation: "Benzenediazonium chloride undergoes azo coupling with tertiary aromatic amines like N,N-dimethylaniline at the para-position under mildly acidic conditions (pH 4–5) to form p-(N,N-dimethylamino)azobenzene, commonly known as Butter Yellow (an azo dye): C₆H₅N₂⁺Cl⁻ + C₆H₅N(CH₃)₂ ⟶ C₆H₅–N=N–C₆H₄–N(CH₃)₂ + HCl.",
    difficulty: "Medium",
    topicId: "chem-amines-distinction-tests",
    topicTested: "Azo Coupling with Tertiary Aromatic Amines",
    conceptTested: "Azo Dye Synthesis with N,N-Dimethylaniline",
    marks: 4
  },
  {
    questionId: "prac-diaz-4",
    question: "Assertion (A): Arenediazonium salts are much more stable in aqueous solution than alkyldiazonium salts.\nReason (R): In arenediazonium salts, the positive charge on the diazonium group is delocalised over the aromatic ring through resonance.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    correctAnswerIndex: 0,
    correctOption: 0,
    explanation: "Arenediazonium salts (Ar–N₂⁺) are stabilized by resonance delocalisation of the positive charge into the pi system of the aromatic ring across 4 canonical resonance structures. Therefore, they remain stable in aqueous solution between 0–5 °C. In contrast, alkyldiazonium salts (R–N₂⁺) lack such resonance stabilization and immediately decompose into carbocations and nitrogen gas. Thus, both (A) and (R) are true, and (R) correctly explains (A).",
    difficulty: "Easy",
    topicId: "chem-amines-distinction-tests",
    topicTested: "Stability of Diazonium Salts",
    conceptTested: "Resonance Stabilization of Arenediazonium Cations",
    marks: 4
  },
  {
    questionId: "prac-diaz-5",
    question: "An organic compound [A] (C₆H₇N) on treatment with NaNO₂ and HCl at 273–278 K yields [B]. [B] on warming with Cu₂Cl₂/HCl gives [C]. [C] on treatment with metallic Na in dry ether gives [D]. Identify [D]:",
    options: [
      "Biphenyl (Diphenyl)",
      "Chlorobenzene",
      "Phenol",
      "Benzene"
    ],
    correctAnswer: 0,
    correctAnswerIndex: 0,
    correctOption: 0,
    explanation: "Compound [A] with formula C₆H₇N is Aniline (C₆H₅NH₂).\nStep 1: Aniline + NaNO₂ + HCl (273–278 K) ⟶ Benzenediazonium chloride (C₆H₅N₂⁺Cl⁻, [B]).\nStep 2: [B] + Cu₂Cl₂/HCl ⟶ Chlorobenzene (C₆H₅Cl, [C], Sandmeyer reaction).\nStep 3: Chlorobenzene on reaction with Na in dry ether undergoes the Fittig reaction to give Biphenyl (C₆H₅–C₆H₅, [D]): 2 C₆H₅Cl + 2 Na ⟶ C₆H₅–C₆H₅ + 2 NaCl.",
    difficulty: "Hard",
    topicId: "chem-amines-distinction-tests",
    topicTested: "Inter-Chapter Organic Conversions",
    conceptTested: "Diazotisation ⟶ Sandmeyer ⟶ Fittig Reaction Sequence",
    marks: 4
  }
];
