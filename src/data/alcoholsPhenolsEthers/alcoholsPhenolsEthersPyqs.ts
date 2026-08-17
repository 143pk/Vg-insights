// Verified NEET/AIPMT Previous Year Questions for Chapter 20: Alcohols, Phenols and Ethers
import { PYQuestion } from '../../types/neet';

export const ALCOHOLS_PHENOLS_ETHERS_PYQS: {
  alcohols: PYQuestion[];
  phenols: PYQuestion[];
  ethers: PYQuestion[];
  chapterAll: PYQuestion[];
} = {
  // Topic 1: Alcohols PYQs
  alcohols: [
    {
      id: "pyq-ape-1",
      year: 2023,
      exam: "NEET 2023",
      examYear: "NEET 2023",
      verifiedExam: "NEET UG 2023",
      verified: true,
      isVerifiedPYQ: true,
      question: "Which of the following reaction will give primary alcohol as the major product?",
      options: [
        "Propene + H₂O / H⁺",
        "Propene + (i) B₂H₆, (ii) H₂O₂ / OH⁻",
        "Acetone + CH₃MgBr followed by H₃O⁺",
        "Acetaldehyde + CH₃MgBr followed by H₃O⁺"
      ],
      correctAnswer: 1,
      correctAnswerIndex: 1,
      difficulty: "Easy",
      conceptTested: "Anti-Markovnikov Hydroboration-Oxidation vs Markovnikov Hydration vs Grignard Addition",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Chapter: Alcohols, Phenols and Ethers, Section 11.4.1",
      explanation: "Hydroboration-oxidation of propene involves addition of diborane (B₂H₆) followed by oxidation with alkaline hydrogen peroxide (H₂O₂/OH⁻). This results in the overall addition of water across the alkene double bond according to Anti-Markovnikov's rule yielding Propan-1-ol (a primary alcohol) exclusively without any carbocation rearrangement.\n\nOption Analysis:\n• Option 1: Acid-catalysed hydration of propene follows Markovnikov's rule, yielding Propan-2-ol (a secondary alcohol).\n• Option 3: Acetone (a ketone) + Grignard reagent yields 2-Methylpropan-2-ol (a tertiary alcohol).\n• Option 4: Acetaldehyde + Grignard reagent yields Propan-2-ol (a secondary alcohol)."
    },
    {
      id: "pyq-ape-2",
      year: 2021,
      exam: "NEET 2021",
      examYear: "NEET 2021",
      verifiedExam: "NEET UG 2021",
      verified: true,
      isVerifiedPYQ: true,
      question: "Identify the product (A) in the following reaction:\nCH₃–CH=CH₂ + H₂O xrightarrow{H⁺} (A)",
      options: [
        "CH₃–CH(OH)–CH₃",
        "CH₃–CH₂–CH₂–OH",
        "CH₃–CH₂–CHO",
        "CH₃–CO–CH₃"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      conceptTested: "Acid-catalysed hydration of alkenes following Markovnikov's rule",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Preparation of Alcohols",
      explanation: "Acid-catalysed hydration of propene proceeds via electrophilic addition of H⁺ to form the more stable secondary carbocation (CH₃–C⁺H–CH₃). Nucleophilic attack of H₂O on this carbocation followed by deprotonation yields Propan-2-ol [CH₃–CH(OH)–CH₃] as the major Markovnikov product.\n\nWhy other options are wrong:\n• Propan-1-ol (Option B) is the anti-Markovnikov product obtained via hydroboration-oxidation.\n• Propanal (Option C) and Acetone (Option D) are carbonyl oxidation products, not direct hydration products."
    },
    {
      id: "pyq-ape-3",
      year: 2020,
      exam: "NEET 2020",
      examYear: "NEET 2020",
      verifiedExam: "NEET UG 2020",
      verified: true,
      isVerifiedPYQ: true,
      question: "Lucas reagent is an equimolar mixture of:",
      options: [
        "Conc. HCl + Anhydrous ZnCl₂",
        "Conc. HNO₃ + Anhydrous ZnCl₂",
        "Dil. HCl + Anhydrous ZnCl₂",
        "Conc. HCl + Hydrated ZnCl₂"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      conceptTested: "Composition of Lucas Reagent",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Reactions of Alcohols",
      explanation: "Lucas reagent is an equimolar solution of concentrated hydrochloric acid (conc. HCl) and anhydrous zinc chloride (anh. ZnCl₂). It is used to distinguish primary, secondary, and tertiary alcohols based on the rate of formation of insoluble alkyl chloride turbidity."
    },
    {
      id: "pyq-ape-4",
      year: 2018,
      exam: "NEET 2018",
      examYear: "NEET 2018",
      verifiedExam: "NEET UG 2018",
      verified: true,
      isVerifiedPYQ: true,
      question: "Which of the following alcohols will yield 2-methylpropene when heated with hot copper at 573 K?",
      options: [
        "2-Methylpropan-2-ol",
        "2-Methylpropan-1-ol",
        "Butan-1-ol",
        "Butan-2-ol"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      conceptTested: "Dehydrogenation vs Dehydration over Cu at 573 K",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section 11.4.4",
      explanation: "When alcohol vapours are passed over heated copper at 573 K (300°C):\n• 1° alcohols undergo dehydrogenation to give aldehydes.\n• 2° alcohols undergo dehydrogenation to give ketones.\n• 3° alcohols have NO α-hydrogen on the carbinol carbon, so they undergo catalytic DEHYDRATION (loss of H₂O) to give alkenes. Thus, 2-Methylpropan-2-ol [(CH₃)₃COH, a 3° alcohol] dehydrates to 2-methylpropene [CH₂=C(CH₃)₂]."
    },
    {
      id: "pyq-ape-5",
      year: 2016,
      exam: "NEET 2016 Phase-I",
      examYear: "NEET 2016",
      verifiedExam: "NEET UG 2016 Phase-I",
      verified: true,
      isVerifiedPYQ: true,
      question: "Which of the following reagents will convert prop-1-ene to 1-bromopropane in presence of peroxide?",
      options: [
        "HBr",
        "HCl",
        "HI",
        "HF"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      conceptTested: "Peroxide Effect / Kharasch effect selectivity for HBr",
      ncertReference: "NCERT Class 11/12 Chemistry",
      explanation: "The Peroxide effect (Anti-Markovnikov free radical addition) is observed ONLY with HBr because both propagation steps in the radical chain mechanism are exothermic for HBr. For HCl, the homolytic cleavage of the H–Cl bond is endothermic; for HI, the iodine atoms combine preferentially to form I₂ molecules."
    }
  ],

  // Topic 2: Phenols PYQs
  phenols: [
    {
      id: "pyq-ape-6",
      year: 2023,
      exam: "NEET 2023",
      examYear: "NEET 2023",
      verifiedExam: "NEET UG 2023",
      verified: true,
      isVerifiedPYQ: true,
      question: "Which of the following is the correct order of acidic strength?",
      options: [
        "4-Nitrophenol > Phenol > 4-Methylphenol > Ethanol",
        "Phenol > 4-Nitrophenol > 4-Methylphenol > Ethanol",
        "4-Methylphenol > Phenol > 4-Nitrophenol > Ethanol",
        "Ethanol > Phenol > 4-Methylphenol > 4-Nitrophenol"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      conceptTested: "Substituent effects on the acidity of Phenols and Alcohols",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Acidity of Phenols",
      explanation: "Acidic strength depends on the stability of the conjugate base formed after losing H⁺:\n1. 4-Nitrophenol: Contains a strong electron-withdrawing nitro group (–NO₂, -R and -I effects) at the para position, which strongly stabilizes the phenoxide ion (pKₐ = 7.15).\n2. Phenol: Unsubstituted phenoxide ion is stabilized by resonance across the aromatic ring (pKₐ = 9.98).\n3. 4-Methylphenol (p-cresol): Contains an electron-donating methyl group (+I and hyperconjugation) which destabilizes the phenoxide ion (pKₐ = 10.26).\n4. Ethanol: Aliphatic alcohol without resonance; the +I effect of the ethyl group destabilizes the ethoxide ion (pKₐ ≈ 15.9).\nTherefore, the correct decreasing acidic strength order is: 4-Nitrophenol > Phenol > 4-Methylphenol > Ethanol."
    },
    {
      id: "pyq-ape-7",
      year: 2022,
      exam: "NEET 2022",
      examYear: "NEET 2022",
      verifiedExam: "NEET UG 2022",
      verified: true,
      isVerifiedPYQ: true,
      question: "The intermediate that attacks the benzene ring in Reimer-Tiemann reaction of phenol is:",
      options: [
        ":CCl₂ (Dichlorocarbene)",
        "⁺CHCl₂",
        "⁻CCl₃",
        ":CH₂ (Carbene)"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      conceptTested: "Electrophile in Reimer-Tiemann Reaction",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Reimer-Tiemann Reaction",
      explanation: "In the Reimer-Tiemann reaction, chloroform (CHCl₃) reacts with aqueous hydroxide ion (OH⁻) to undergo α-elimination, losing a proton to form the trichloromethyl carbanion (⁻CCl₃), which spontaneously loses a chloride ion (Cl⁻) to generate Dichlorocarbene (:CCl₂). Dichlorocarbene is an electron-deficient, neutral singlet carbene with a sextet of electrons that acts as the active electrophile attacking the phenoxide ring at the ortho position."
    },
    {
      id: "pyq-ape-8",
      year: 2021,
      exam: "NEET 2021",
      examYear: "NEET 2021",
      verifiedExam: "NEET UG 2021",
      verified: true,
      isVerifiedPYQ: true,
      question: "Phenol when treated with excess bromine water gives a white precipitate of:",
      options: [
        "2,4,6-Tribromophenol",
        "2-Bromophenol",
        "4-Bromophenol",
        "2,4-Dibromophenol"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      conceptTested: "Bromination of Phenol in aqueous vs non-polar media",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Electrophilic Aromatic Substitution",
      explanation: "In aqueous solution, bromine water acts as a highly ionizing polar solvent that causes phenol to ionize into the phenoxide ion (C₆H₅O⁻). The phenoxide ion possesses extreme electron density, hyper-activating the ortho and para positions (2, 4, 6) toward electrophilic attack. Thus, exhaustive polybromination occurs instantly to yield a white crystalline precipitate of 2,4,6-Tribromophenol.\n\nNote: In non-polar solvents like CS₂ or CHCl₃ at 273 K, phenol remains un-ionized, and monobromination yields 4-bromophenol (para-isomer) as the major product."
    },
    {
      id: "pyq-ape-9",
      year: 2020,
      exam: "NEET 2020",
      examYear: "NEET 2020",
      verifiedExam: "NEET UG 2020",
      verified: true,
      isVerifiedPYQ: true,
      question: "Reaction of phenol with chloroform in presence of dilute sodium hydroxide finally introduces which of the following functional groups on the benzene ring?",
      options: [
        "–CHO",
        "–COOH",
        "–CHCl₂",
        "–CH₂Cl"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      conceptTested: "Reimer-Tiemann Formylation of Phenol",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Named Reactions of Phenol",
      explanation: "Treatment of phenol with chloroform (CHCl₃) in the presence of aqueous NaOH at 340 K (Reimer-Tiemann reaction) introduces an aldehyde functional group (–CHO) at the ortho position of the aromatic ring, yielding Salicylaldehyde (2-hydroxybenzaldehyde) as the final major product."
    },
    {
      id: "pyq-ape-10",
      year: 2019,
      exam: "NEET 2019",
      examYear: "NEET 2019",
      verifiedExam: "NEET UG 2019",
      verified: true,
      isVerifiedPYQ: true,
      question: "The major product of the following reaction is:\nPhenol + CO₂ + NaOH xrightarrow{400 K, 4-7 atm} Intermediate xrightarrow{H⁺} Major Product",
      options: [
        "Salicylic acid (2-Hydroxybenzoic acid)",
        "Salicylaldehyde",
        "Benzoic acid",
        "Phthalic acid"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      conceptTested: "Kolbe-Schmitt Reaction / Carboxylation of Phenol",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Kolbe's Reaction",
      explanation: "This is Kolbe's reaction (Kolbe-Schmitt synthesis). Sodium phenoxide reacts with carbon dioxide (CO₂) at 400 K and 4–7 atm pressure to form sodium salicylate, which upon acidification with dilute HCl yields Salicylic acid (2-hydroxybenzoic acid) as the major product. Salicylic acid is the starting material for synthesizing Aspirin."
    },
    {
      id: "pyq-ape-11",
      year: 2017,
      exam: "NEET 2017",
      examYear: "NEET 2017",
      verifiedExam: "NEET UG 2017",
      verified: true,
      isVerifiedPYQ: true,
      question: "Which of the following compounds has the lowest pKₐ value (most acidic)?",
      options: [
        "2,4,6-Trinitrophenol",
        "p-Nitrophenol",
        "m-Nitrophenol",
        "Phenol"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      conceptTested: "Acidity of Nitrophenols and Picric Acid",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Acidity of Phenols",
      explanation: "The lowest pKₐ value corresponds to the strongest acid (since pKₐ = -log Kₐ). 2,4,6-Trinitrophenol (Picric acid) contains three strongly electron-withdrawing –NO₂ groups at the 2, 4, and 6 positions that exert powerful -R and -I effects, stabilizing the phenoxide anion exceptionally. Its pKₐ is 0.71 (stronger than acetic acid!). In comparison, p-nitrophenol has pKₐ 7.15, m-nitrophenol has pKₐ 8.35, and phenol has pKₐ 9.98."
    },
    {
      id: "pyq-ape-12",
      year: 2015,
      exam: "AIPMT 2015",
      examYear: "AIPMT 2015",
      verifiedExam: "AIPMT 2015",
      verified: true,
      isVerifiedPYQ: true,
      question: "Phenol is heated with Zn dust to give:",
      options: [
        "Benzene",
        "Toluene",
        "Benzaldehyde",
        "Benzoic acid"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      conceptTested: "Reduction of Phenol with Zinc dust",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Reactions of Phenol",
      explanation: "Heating phenol with zinc dust causes reductive deoxygenation where zinc acts as a reducing agent to remove the phenolic oxygen, yielding Benzene (C₆H₆) and Zinc oxide (ZnO):\nC₆H₅OH + Zn xrightarrow{Δ} C₆H₆ + ZnO."
    }
  ],

  // Topic 3: Ethers PYQs
  ethers: [
    {
      id: "pyq-ape-13",
      year: 2023,
      exam: "NEET 2023",
      examYear: "NEET 2023",
      verifiedExam: "NEET UG 2023",
      verified: true,
      isVerifiedPYQ: true,
      question: "The major product formed in the following reaction is:\nC₆H₅–O–CH₃ + HI xrightarrow{373 K} Products",
      options: [
        "C₆H₅–OH + CH₃–I",
        "C₆H₅–I + CH₃–OH",
        "C₆H₅–I + CH₃–I",
        "C₆H₅–OH + CH₃–OH"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      conceptTested: "Cleavage of Alkyl Aryl Ethers (Anisole) by Hydrogen Iodide",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section 11.6.2",
      explanation: "In anisole (C₆H₅OCH₃), the oxygen atom is protonated by HI to form methylphenyl oxonium ion [C₆H₅–O⁺(H)–CH₃]. The bond between oxygen and the phenyl ring (C_aryl–O) has partial double bond character due to resonance (+R effect) and is much stronger than the C_alkyl–O bond. Furthermore, an S_N2 attack by I⁻ on the sp² aromatic carbon is geometrically impossible. Therefore, the nucleophile I⁻ attacks the less sterically hindered methyl carbon via S_N2, cleaving the alkyl–oxygen bond to give Phenol (C₆H₅OH) and Methyl Iodide (CH₃I)."
    },
    {
      id: "pyq-ape-14",
      year: 2022,
      exam: "NEET 2022",
      examYear: "NEET 2022",
      verifiedExam: "NEET UG 2022",
      verified: true,
      isVerifiedPYQ: true,
      question: "In Williamson synthesis of ethers, if a tertiary alkyl halide is treated with sodium alkoxide, the major product is:",
      options: [
        "An Alkene",
        "A Symmetrical Ether",
        "An Unsymmetrical Ether",
        "An Alcohol"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      conceptTested: "Elimination vs Substitution in Williamson Ether Synthesis",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Preparation of Ethers",
      explanation: "Sodium alkoxides are not only nucleophiles but also strong Brønsted bases. Tertiary (3°) alkyl halides are sterically crowded, preventing S_N2 backside attack. Consequently, E2 elimination completely outcompetes nucleophilic substitution, producing an ALKENE (e.g., Sodium ethoxide + tert-Butyl bromide yields 2-methylpropene) as the exclusive major product."
    },
    {
      id: "pyq-ape-15",
      year: 2020,
      exam: "NEET 2020",
      examYear: "NEET 2020",
      verifiedExam: "NEET UG 2020",
      verified: true,
      isVerifiedPYQ: true,
      question: "Anisole on cleavage with HI gives:",
      options: [
        "Phenol + Methyl iodide",
        "Iodobenzene + Methanol",
        "Benzene + Methyl iodide",
        "Phenol + Methanol"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      conceptTested: "Anisole acidic cleavage with HI",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Chemical Reactions of Ethers",
      explanation: "Cleavage of anisole with HI occurs at the alkyl C–O bond yielding Phenol and Methyl iodide. The aryl C–O bond is resonance-stabilized with partial double bond character and cannot undergo S_N2 displacement."
    },
    {
      id: "pyq-ape-16",
      year: 2014,
      exam: "AIPMT 2014",
      examYear: "AIPMT 2014",
      verifiedExam: "AIPMT 2014",
      verified: true,
      isVerifiedPYQ: true,
      question: "The reaction:\n(CH₃)₃C–Br + CH₃ONa → (CH₃)₃C–O–CH₃\ndoes not take place because:",
      options: [
        "Steric hindrance in (CH₃)₃C–Br favours elimination (E2) over substitution (S_N2)",
        "(CH₃)₃C–Br is not reactive",
        "CH₃ONa is a weak nucleophile",
        "The reaction requires acidic conditions"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      conceptTested: "Substrate limitations in Williamson ether synthesis",
      ncertReference: "NCERT Class 12 Chemistry, Part II, Section: Williamson Synthesis",
      explanation: "Williamson ether synthesis follows an S_N2 pathway. 3° alkyl halides are heavily sterically hindered to backside nucleophilic attack. Since alkoxide ions are strong bases, the basic deprotonation (E2 elimination) is much faster, yielding 2-methylpropene as the major product instead of the ether. To prepare tert-butyl methyl ether, one must use (CH₃)₃C–O⁻Na⁺ (3° alkoxide) + CH₃Br (methyl halide)."
    }
  ],

  chapterAll: []
};

ALCOHOLS_PHENOLS_ETHERS_PYQS.chapterAll = [
  ...ALCOHOLS_PHENOLS_ETHERS_PYQS.alcohols,
  ...ALCOHOLS_PHENOLS_ETHERS_PYQS.phenols,
  ...ALCOHOLS_PHENOLS_ETHERS_PYQS.ethers
];
