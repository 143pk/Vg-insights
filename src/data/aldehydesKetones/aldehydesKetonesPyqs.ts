// Verified NEET/AIPMT Previous Year Questions for Chapter 21: Aldehydes, Ketones and Carboxylic Acids
import { PYQuestion } from '../../types/neet';

export const ALDEHYDES_KETONES_PYQS: {
  topic1: PYQuestion[];
  topic2: PYQuestion[];
  topic3: PYQuestion[];
  chapterAll: PYQuestion[];
} = {
  // Topic 1: Structure, Preparation & Nucleophilic Addition
  topic1: [
    {
      id: "pyq-akc-1",
      year: 2023,
      exam: "NEET 2023",
      examYear: "NEET 2023",
      verifiedExam: "NEET UG 2023",
      verified: true,
      isVerifiedPYQ: true,
      question: "Which of the following carbonyl compounds will be most reactive towards nucleophilic addition reaction?",
      options: [
        "CH₃–CHO",
        "HCHO",
        "CH₃–CO–CH₃",
        "C₆H₅–CHO"
      ],
      correctAnswer: 1,
      correctAnswerIndex: 1,
      difficulty: "Easy",
      conceptTested: "Reactivity order of carbonyl compounds towards nucleophilic addition (Steric and Inductive factors)",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Chapter 12: Aldehydes, Ketones and Carboxylic Acids, Section 12.4.1",
      explanation: "Reactivity towards nucleophilic addition depends on two primary factors:\n1. Electronic Factor: Greater the magnitude of partial positive charge (δ+) on the carbonyl carbon, faster the nucleophilic attack. Alkyl groups release electrons (+I effect) and decrease electrophilicity.\n2. Steric Factor: Smaller groups around the carbonyl carbon offer less steric crowding to the approaching nucleophile (~107° Bürgi-Dunitz trajectory).\n\nFormaldehyde (HCHO) has zero +I alkyl groups and minimal steric hindrance (two tiny H atoms). Therefore, HCHO is the most reactive.\n\nOverall Reactivity Order: HCHO > CH₃CHO > C₆H₅CHO > CH₃COCH₃."
    },
    {
      id: "pyq-akc-2",
      year: 2022,
      exam: "NEET 2022",
      examYear: "NEET 2022",
      verifiedExam: "NEET UG 2022",
      verified: true,
      isVerifiedPYQ: true,
      question: "The reaction: R–CO–Cl + H₂ xrightarrow{Pd–BaSO₄ / Quinoline} R–CHO + HCl is known as:",
      options: [
        "Stephen reduction",
        "Rosenmund reduction",
        "Cannizzaro reaction",
        "Clemmensen reduction"
      ],
      correctAnswer: 1,
      correctAnswerIndex: 1,
      difficulty: "Easy",
      conceptTested: "Rosenmund reduction of acyl chlorides to aldehydes using poisoned catalyst",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Preparation of Aldehydes",
      explanation: "Hydrogenation of acyl chlorides (acid chlorides) over palladium catalyst supported on barium sulphate and poisoned with quinoline or sulfur is specifically called the Rosenmund Reduction.\n\nWhy other options are wrong:\n• Stephen reduction: Nitriles (RCN) reduced by SnCl₂ + HCl to give aldehydes.\n• Cannizzaro reaction: Disproportionation of aldehydes lacking α-hydrogen in concentrated alkali.\n• Clemmensen reduction: Deoxygenation of >C=O to >CH₂ using Zn(Hg)/conc. HCl."
    },
    {
      id: "pyq-akc-3",
      year: 2020,
      exam: "NEET 2020",
      examYear: "NEET 2020",
      verifiedExam: "NEET UG 2020",
      verified: true,
      isVerifiedPYQ: true,
      question: "Reaction by which benzaldehyde cannot be prepared is:",
      options: [
        "C₆H₅–CH₃ + CrO₂Cl₂ in CS₂ followed by H₃O⁺",
        "C₆H₆ + CO + HCl in presence of anhydrous AlCl₃",
        "C₆H₅–COCl + H₂ in presence of Pd–BaSO₄",
        "C₆H₅–COOH + Zn / Hg and conc. HCl"
      ],
      correctAnswer: 3,
      correctAnswerIndex: 3,
      difficulty: "Medium",
      conceptTested: "Preparative methods of Benzaldehyde & selectivity of Clemmensen reagent",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section 12.2: Preparation of Aldehydes",
      explanation: "Option 4: Benzoic acid (C₆H₅COOH) cannot be reduced to benzaldehyde by Clemmensen reagent [Zn(Hg)/conc. HCl]. Clemmensen reagent reduces aldehydes and ketones to alkanes, and does not reduce carboxylic acids!\n\nOptions that prepare benzaldehyde:\n• Option 1: Etard reaction (Toluene + CrO₂Cl₂ in CS₂ ⟶ Benzaldehyde).\n• Option 2: Gattermann-Koch reaction (Benzene + CO + HCl + anh. AlCl₃ ⟶ Benzaldehyde).\n• Option 3: Rosenmund reduction (Benzoyl chloride + H₂/Pd-BaSO₄ ⟶ Benzaldehyde)."
    },
    {
      id: "pyq-akc-4",
      year: 2019,
      exam: "NEET 2019",
      examYear: "NEET 2019",
      verifiedExam: "NEET UG 2019",
      verified: true,
      isVerifiedPYQ: true,
      question: "An organic compound 'X' having molecular formula C₅H₁₀O gives a positive 2,4-DNP test, gives a yellow precipitate with I₂/NaOH, but does not reduce Tollens' reagent. The structure of 'X' is:",
      options: [
        "Pentanal",
        "Pentan-3-one",
        "Pentan-2-one",
        "2-Methylbutanal"
      ],
      correctAnswer: 2,
      correctAnswerIndex: 2,
      difficulty: "Medium",
      conceptTested: "Carbonyl characterization using 2,4-DNP, Iodoform, and Tollens' reagent",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section 12.4: Chemical Reactions of Aldehydes and Ketones",
      explanation: "Step-by-step diagnostic breakdown:\n1. Positive 2,4-DNP test: 'X' contains a carbonyl group (>C=O).\n2. Does NOT reduce Tollens' reagent: 'X' is a KETONE, not an aldehyde (eliminating Pentanal and 2-Methylbutanal).\n3. Gives yellow precipitate with I₂/NaOH (positive Iodoform test): 'X' must be a METHYL KETONE having the CH₃–CO– group.\n\nPentan-2-one (CH₃–CO–CH₂CH₂CH₃) is a 5-carbon methyl ketone that satisfies all three criteria. Pentan-3-one (CH₃CH₂–CO–CH₂CH₃) is a symmetrical ketone and gives a negative iodoform test."
    },
    {
      id: "pyq-akc-5",
      year: 2017,
      exam: "NEET 2017",
      examYear: "NEET 2017",
      verifiedExam: "NEET UG 2017",
      verified: true,
      isVerifiedPYQ: true,
      question: "Of the following, which is the product formed when cyclohexanone undergoes reaction with excess ethanol in the presence of dry HCl gas?",
      options: [
        "1-Ethoxycyclohexanol (Hemiacetal)",
        "1,1-Diethoxycyclohexane (Ketal)",
        "Cyclohexyl ethyl ether",
        "Ethoxycyclohexane"
      ],
      correctAnswer: 1,
      correctAnswerIndex: 1,
      difficulty: "Medium",
      conceptTested: "Acetal and Ketal formation by nucleophilic addition of excess alcohol catalyzed by dry HCl",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Addition of Alcohols",
      explanation: "In the presence of dry HCl gas, cyclohexanone reacts with two equivalents of ethanol (excess alcohol) via nucleophilic addition and loss of water to form the corresponding gem-diethoxy compound, 1,1-diethoxycyclohexane (a ketal / diethyl ketal).\n\nMechanism:\nCyclohexanone + C₂H₅OH xrightarrow{dry HCl} Hemiketal intermediate xrightarrow{C₂H₅OH, dry HCl} 1,1-Diethoxycyclohexane + H₂O."
    }
  ],

  // Topic 2: Important Reactions, Tests & Named Reactions
  topic2: [
    {
      id: "pyq-akc-6",
      year: 2023,
      exam: "NEET 2023",
      examYear: "NEET 2023",
      verifiedExam: "NEET UG 2023",
      verified: true,
      isVerifiedPYQ: true,
      question: "Which of the following aldehydes will NOT undergo Cannizzaro reaction?",
      options: [
        "Formaldehyde (HCHO)",
        "Benzaldehyde (C₆H₅CHO)",
        "Acetaldehyde (CH₃CHO)",
        "Trimethylacetaldehyde ((CH₃)₃C–CHO)"
      ],
      correctAnswer: 2,
      correctAnswerIndex: 2,
      difficulty: "Easy",
      conceptTested: "Cannizzaro reaction vs Aldol condensation substrate structural requirements (α-Hydrogen)",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section 12.4: Cannizzaro Reaction",
      explanation: "The Cannizzaro reaction is given EXCLUSIVELY by aldehydes that LACK α-hydrogens (e.g. HCHO, C₆H₅CHO, and (CH₃)₃C–CHO) when treated with concentrated alkali.\n\nAcetaldehyde (CH₃CHO) has 3 acidic α-hydrogens. In presence of base, it undergoes deprotonation to form an enolate carbanion and undergoes ALDOL CONDENSATION, not Cannizzaro reaction!"
    },
    {
      id: "pyq-akc-7",
      year: 2022,
      exam: "NEET 2022",
      examYear: "NEET 2022",
      verifiedExam: "NEET UG 2022",
      verified: true,
      isVerifiedPYQ: true,
      question: "In the Aldol condensation of ethanal, the dehydrated condensation product formed upon heating with dilute NaOH is:",
      options: [
        "But-2-enal (Crotonaldehyde)",
        "But-1-en-3-one",
        "3-Hydroxybutanal",
        "Butan-1-ol"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      conceptTested: "Aldol condensation and dehydration of ethanal to form α,β-unsaturated aldehyde",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Aldol Condensation",
      explanation: "When ethanal (CH₃CHO) is treated with dilute NaOH, two molecules undergo aldol addition to form 3-hydroxybutanal (aldol intermediate). Upon subsequent heating, it easily loses a molecule of water (dehydration between α-carbon and β-carbon) to form the conjugated α,β-unsaturated aldehyde: But-2-enal [CH₃–CH=CH–CHO, commonly known as Crotonaldehyde]."
    },
    {
      id: "pyq-akc-8",
      year: 2021,
      exam: "NEET 2021",
      examYear: "NEET 2021",
      verifiedExam: "NEET UG 2021",
      verified: true,
      isVerifiedPYQ: true,
      question: "Which of the following compounds gives a positive Tollens' test but a negative Fehling's test?",
      options: [
        "Acetaldehyde (CH₃CHO)",
        "Formaldehyde (HCHO)",
        "Benzaldehyde (C₆H₅CHO)",
        "Acetone (CH₃COCH₃)"
      ],
      correctAnswer: 2,
      correctAnswerIndex: 2,
      difficulty: "Medium",
      conceptTested: "Differential oxidation of aromatic aldehydes: Tollens' (+ve) vs Fehling's (-ve)",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Oxidation of Aldehydes and Ketones",
      explanation: "Tollens' reagent (ammoniacal silver nitrate) is a stronger oxidizing system in alkali and oxidizes BOTH aliphatic and aromatic aldehydes to carboxylate salts with deposition of a silver mirror.\n\nFehling's solution (alkaline Cu²⁺ tartrate complex) is a milder oxidizing agent and oxidizes ALIPHATIC ALDEHYDES ONLY.\n\nBenzaldehyde (C₆H₅CHO), being an aromatic aldehyde, is stabilized by resonance with the benzene ring and CANNOT be oxidised by Fehling's solution. Thus, C₆H₅CHO gives +ve Tollens' test and -ve Fehling's test."
    },
    {
      id: "pyq-akc-9",
      year: 2020,
      exam: "NEET 2020",
      examYear: "NEET 2020",
      verifiedExam: "NEET UG 2020",
      verified: true,
      isVerifiedPYQ: true,
      question: "When propanone reacts with hydrazine in presence of KOH and ethylene glycol at high temperature, the product formed is:",
      options: [
        "Propane",
        "Propan-2-ol",
        "Propanoic acid",
        "Propanal"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      conceptTested: "Wolff-Kishner reduction of ketones to alkanes",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Reduction of Carbonyl Compounds",
      explanation: "Reaction of propanone (CH₃–CO–CH₃) with hydrazine (NH₂NH₂) followed by heating with potassium hydroxide (KOH) in high-boiling ethylene glycol is the Wolff-Kishner Reduction. The carbonyl oxygen is completely deoxygenated (>C=O ⟶ >CH₂) with evolution of N₂ gas, yielding Propane (CH₃–CH₂–CH₃)."
    },
    {
      id: "pyq-akc-10",
      year: 2018,
      exam: "NEET 2018",
      examYear: "NEET 2018",
      verifiedExam: "NEET UG 2018",
      verified: true,
      isVerifiedPYQ: true,
      question: "Which of the following pairs of compounds can be chemically distinguished by the Iodoform test?",
      options: [
        "Methanol and Ethanol",
        "Ethanal and Propanone",
        "Pentan-2-one and Acetophenone",
        "Propan-2-ol and Ethanol"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      conceptTested: "Structural requirement of Iodoform test: CH₃–CH(OH)– vs other alcohols",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Haloform Reaction",
      explanation: "Ethanol (CH₃–CH₂–OH) possesses the CH₃–CH(OH)– structural unit and is oxidised by sodium hypoiodite (NaOI) to acetaldehyde, which subsequently undergoes the haloform reaction to give a yellow precipitate of Iodoform (CHI₃).\n\nMethanol (CH₃OH) lacks this grouping and gives a NEGATIVE iodoform test.\n\nWhy other pairs cannot be distinguished:\n• Ethanal and Propanone: Both contain the CH₃–CO– group and both give positive iodoform tests.\n• Pentan-2-one and Acetophenone: Both are methyl ketones and both give positive tests.\n• Propan-2-ol and Ethanol: Both contain the CH₃–CH(OH)– group and both give positive tests."
    }
  ],

  // Topic 3: Carboxylic Acids — Acidity, Preparation & Reactions
  topic3: [
    {
      id: "pyq-akc-11",
      year: 2023,
      exam: "NEET 2023",
      examYear: "NEET 2023",
      verifiedExam: "NEET UG 2023",
      verified: true,
      isVerifiedPYQ: true,
      question: "The correct decreasing order of acidic strength for the following carboxylic acids is:\n(I) CH₃COOH  (II) ClCH₂COOH  (III) Cl₂CHCOOH  (IV) CCl₃COOH",
      options: [
        "(IV) > (III) > (II) > (I)",
        "(I) > (II) > (III) > (IV)",
        "(IV) > (II) > (III) > (I)",
        "(III) > (IV) > (II) > (I)"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      conceptTested: "Inductive effect of multiple halogen substituents on carboxylic acid acidity",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section 12.8: Acidity of Carboxylic Acids",
      explanation: "Chlorine is an electronegative, electron-withdrawing atom (-I effect). As the number of chlorine atoms attached to the α-carbon increases:\n1. The conjugate base (carboxylate anion RCOO⁻) is increasingly stabilized by greater dispersal of the negative charge.\n2. The O–H bond polarity increases, facilitating proton release.\n\nAcidic Strength Order:\nCCl₃COOH (pKₐ = 0.64) > CHCl₂COOH (pKₐ = 1.29) > ClCH₂COOH (pKₐ = 2.87) > CH₃COOH (pKₐ = 4.76).\nHence, (IV) > (III) > (II) > (I)."
    },
    {
      id: "pyq-akc-12",
      year: 2022,
      exam: "NEET 2022",
      examYear: "NEET 2022",
      verifiedExam: "NEET UG 2022",
      verified: true,
      isVerifiedPYQ: true,
      question: "Which of the following carboxylic acids will NOT undergo the Hell-Volhard-Zelinsky (HVZ) reaction when treated with Br₂ in the presence of red phosphorus?",
      options: [
        "Propanoic acid",
        "Ethanoic acid",
        "2,2-Dimethylpropanoic acid",
        "2-Methylpropanoic acid"
      ],
      correctAnswer: 2,
      correctAnswerIndex: 2,
      difficulty: "Medium",
      conceptTested: "Requirement of α-Hydrogen in Hell-Volhard-Zelinsky (HVZ) reaction",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Hell-Volhard-Zelinsky Reaction",
      explanation: "The Hell-Volhard-Zelinsky (HVZ) reaction selectively brominates/chlorinates the α-carbon of carboxylic acids via an enol/acid bromide intermediate. Therefore, the presence of AT LEAST ONE α-HYDROGEN is an absolute requirement.\n\nIn 2,2-Dimethylpropanoic acid [(CH₃)₃C–COOH / Pivalic acid], the α-carbon is quaternary and is bonded to three methyl groups (zero α-hydrogens). Hence, it CANNOT undergo the HVZ reaction.\n\nOther acids have α-hydrogens:\n• Ethanoic acid: 3 α-hydrogens.\n• Propanoic acid: 2 α-hydrogens.\n• 2-Methylpropanoic acid: 1 α-hydrogen."
    },
    {
      id: "pyq-akc-13",
      year: 2021,
      exam: "NEET 2021",
      examYear: "NEET 2021",
      verifiedExam: "NEET UG 2021",
      verified: true,
      isVerifiedPYQ: true,
      question: "When sodium ethanoate is heated with soda lime (NaOH + CaO in 3:1 ratio), the hydrocarbon obtained is:",
      options: [
        "Ethane",
        "Methane",
        "Propane",
        "Ethene"
      ],
      correctAnswer: 1,
      correctAnswerIndex: 1,
      difficulty: "Easy",
      conceptTested: "Soda-lime decarboxylation (carbon chain shortening by 1 carbon atom)",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Decarboxylation Reactions",
      explanation: "Heating sodium salt of a carboxylic acid with soda lime results in decarboxylation (loss of CO₂ as Na₂CO₃), forming an alkane with ONE LESS carbon atom than the parent carboxylic acid salt:\n\nCH₃COONa + NaOH xrightarrow[Δ]{CaO} CH₄ (Methane) + Na₂CO₃.\n\nNote: Heating sodium propanoate would give ethane."
    },
    {
      id: "pyq-akc-14",
      year: 2019,
      exam: "NEET 2019",
      examYear: "NEET 2019",
      verifiedExam: "NEET UG 2019",
      verified: true,
      isVerifiedPYQ: true,
      question: "Carboxylic acids have higher boiling points than alcohols of comparable molecular mass primarily because of:",
      options: [
        "Formation of extensive cyclic intermolecular hydrogen-bonded dimers",
        "Higher covalent character of C–O single bonds",
        "Stronger London dispersion forces",
        "Greater polarity of the carbonyl group alone"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      conceptTested: "Intermolecular hydrogen bonding and cyclic dimer formation in carboxylic acids",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section 12.6: Physical Properties of Carboxylic Acids",
      explanation: "Carboxylic acid molecules are held together by exceptionally strong intermolecular hydrogen bonds and exist as stable cyclic dimers even in the vapour phase and in non-polar aprotic solvents (such as benzene). Each dimer is held by TWO intermolecular hydrogen bonds (–O–H···O=C– and –C=O···H–O–), giving them much higher boiling points than corresponding alcohols and carbonyls."
    },
    {
      id: "pyq-akc-15",
      year: 2016,
      exam: "AIPMT / NEET 2016",
      examYear: "NEET 2016",
      verifiedExam: "NEET UG 2016 Phase-I",
      verified: true,
      isVerifiedPYQ: true,
      question: "Which of the following compounds will give brisk effervescence of carbon dioxide (CO₂) with aqueous sodium bicarbonate (NaHCO₃)?",
      options: [
        "Phenol (C₆H₅OH)",
        "Benzoic acid (C₆H₅COOH)",
        "Ethanol (C₂H₅OH)",
        "p-Cresol"
      ],
      correctAnswer: 1,
      correctAnswerIndex: 1,
      difficulty: "Easy",
      conceptTested: "Sodium bicarbonate test distinction between Carboxylic acids and Phenols/Alcohols",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Reactions involving cleavage of O–H bond",
      explanation: "A compound can liberate CO₂ from aqueous NaHCO₃ only if it is a STRONGER acid than carbonic acid (H₂CO₃, pKa ≈ 6.35).\n\n• Benzoic acid (C₆H₅COOH, pKa = 4.20) is stronger than carbonic acid: C₆H₅COOH + NaHCO₃ ⟶ C₆H₅COONa + H₂O + CO₂↑ (Brisk effervescence).\n• Phenol (pKa = 9.98), p-cresol (pKa = 10.26), and ethanol (pKa ≈ 16) are WEAKER acids than carbonic acid and cannot decompose NaHCO₃."
    }
  ],

  // Combined Chapter All PYQs
  chapterAll: []
};

// Populate chapterAll
ALDEHYDES_KETONES_PYQS.chapterAll = [
  ...ALDEHYDES_KETONES_PYQS.topic1,
  ...ALDEHYDES_KETONES_PYQS.topic2,
  ...ALDEHYDES_KETONES_PYQS.topic3
];
