import { PracticeQuestion } from '../../types/neet';

export const HALOALKANES_PRACTICE_SETS: {
  topic1PracticeQuestions: PracticeQuestion[];
  topic2PracticeQuestions: PracticeQuestion[];
  chapterMiniTest: PracticeQuestion[];
} = {
  // Practice Questions for Topic 1: Haloalkanes
  topic1PracticeQuestions: [
    {
      id: "halo-t1-q1",
      question: "Which of the following methods gives the purest alkyl chloride from an alcohol without requiring cumbersome separation procedures?",
      options: [
        "ROH + conc. HCl in presence of anhydrous ZnCl₂",
        "ROH + PCl₅",
        "ROH + PCl₃",
        "ROH + SOCl₂ in presence of Pyridine"
      ],
      correctAnswerIndex: 3,
      correctOption: 3,
      difficulty: "Easy",
      topicTested: "Preparation from Alcohols (Darzen's Process)",
      conceptTested: "Gaseous By-Products in Darzen's Process",
      explanation: "Reaction of alcohols with thionyl chloride (SOCl₂) in pyridine (Darzen's process) is the best method because both by-products, sulfur dioxide (SO₂) and hydrogen chloride (HCl), are gases that escape into the atmosphere, leaving behind pure alkyl chloride."
    },
    {
      id: "halo-t1-q2",
      question: "The reaction of 1-Bromobutane with KCN in aqueous ethanol yields compound X, whereas with AgCN it yields compound Y. Compounds X and Y are respectively:",
      options: [
        "Butanenitrile and Butyl isocyanide",
        "Pentanenitrile and Butyl isocyanide",
        "Pentanenitrile and Pentyl isocyanide",
        "Butan-1-ol and Butanoic acid"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Medium",
      topicTested: "Ambidentate Cyanide Nucleophile",
      conceptTested: "Carbon Chain Length & Regiochemistry with KCN/AgCN",
      explanation: "1-Bromobutane is CH₃CH₂CH₂CH₂Br (4 carbons). Reaction with ionic KCN attacks through carbon, adding 1 carbon to give Pentanenitrile (CH₃CH₂CH₂CH₂CN, 5 carbons). Reaction with covalent AgCN attacks through nitrogen, giving Butyl isocyanide (CH₃CH₂CH₂CH₂NC, 4 carbons in alkyl group)."
    },
    {
      id: "halo-t1-q3",
      question: "Which of the following compounds will react most rapidly via an S_N1 mechanism?",
      options: [
        "CH₃–CH₂–CH₂–Cl",
        "CH₂=CH–CH₂–Cl",
        "CH₂=CH–Cl",
        "C₆H₅–Cl"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Medium",
      topicTested: "S_N1 Substrate Reactivity",
      conceptTested: "Allylic Carbocation Resonance Stabilization",
      explanation: "Allyl chloride (CH₂=CH–CH₂–Cl) ionizes to form the allylic carbocation (CH₂=CH–CH₂⁺ ↔ ⁺CH₂–CH=CH₂), which is stabilized by resonance between two equivalent canonical structures. Vinylic (CH₂=CH–Cl) and Aryl (C₆H₅–Cl) halides are inert due to sp² carbon and double bond character."
    },
    {
      id: "halo-t1-q4",
      question: "When 2-Bromopentane is heated with alcoholic KOH, the major product formed is:",
      options: [
        "Pent-1-ene",
        "Pent-2-ene",
        "Pentan-2-ol",
        "Pentan-1-ol"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Easy",
      topicTested: "Saytzeff Dehydrohalogenation",
      conceptTested: "More Substituted Alkene Regioselectivity",
      explanation: "According to Saytzeff's rule, in β-elimination dehydrohalogenation with alcoholic KOH, the hydrogen is eliminated predominantly from the β-carbon with fewer hydrogens (C3 rather than C1), yielding Pent-2-ene (CH₃–CH₂–CH=CH–CH₃) as the more substituted and more stable major alkene."
    },
    {
      id: "halo-t1-q5",
      question: "Which of the following solvents will most effectively accelerate an S_N2 reaction between CH₃–I and NaCN?",
      options: [
        "Water (H₂O)",
        "Ethanol (C₂H₅OH)",
        "Acetic acid (CH₃COOH)",
        "Dimethyl sulfoxide (DMSO)"
      ],
      correctAnswerIndex: 3,
      correctOption: 3,
      difficulty: "Medium",
      topicTested: "Solvent Effects on S_N2 Rates",
      conceptTested: "Polar Aprotic Solvents",
      explanation: "Polar aprotic solvents (such as DMSO, DMF, or Acetone) solvate cations (Na⁺) via their negative oxygen dipoles while leaving the nucleophile anion (CN⁻) naked, unsolvated, and highly reactive, thereby dramatically increasing the S_N2 reaction rate. Protic solvents (H₂O, EtOH) cage the anion with hydrogen bonds."
    }
  ],

  // Practice Questions for Topic 2: Haloarenes
  topic2PracticeQuestions: [
    {
      id: "halo-t2-q1",
      question: "Which of the following compounds undergoes nucleophilic aromatic substitution (S_NAr) with aqueous NaOH under the mildest conditions?",
      options: [
        "Chlorobenzene",
        "4-Nitrochlorobenzene",
        "2,4-Dinitrochlorobenzene",
        "2,4,6-Trinitrochlorobenzene"
      ],
      correctAnswerIndex: 3,
      correctOption: 3,
      difficulty: "Easy",
      topicTested: "Nucleophilic Aromatic Substitution (S_NAr)",
      conceptTested: "Activating Effect of Ortho/Para Nitro Groups",
      explanation: "Electron-withdrawing –NO₂ groups at ortho and para positions stabilize the carbanionic Meisenheimer complex through resonance. 2,4,6-Trinitrochlorobenzene (Picryl chloride) has three strongly electron-withdrawing nitro groups at all ortho and para positions, allowing it to hydrolyze into Picric acid simply upon warming with water at 323 K without requiring any strong alkali."
    },
    {
      id: "halo-t2-q2",
      question: "In the electrophilic nitration of chlorobenzene, the major product is 1-chloro-4-nitrobenzene because the chlorine atom:",
      options: [
        "Exerts +I and +R effects",
        "Is activating and ortho/para directing",
        "Is deactivating due to -I effect, but ortho/para directing due to +R effect",
        "Is meta directing due to strong -I effect"
      ],
      correctAnswerIndex: 2,
      correctOption: 2,
      difficulty: "Medium",
      topicTested: "Directing and Activating Effects of Halogens",
      conceptTested: "Competition between -I (Deactivating) and +R (o/p Directing)",
      explanation: "Halogen substituents on benzene are unique: they exert a powerful inductive electron-withdrawing (-I) effect that overall deactivates the aromatic ring, but their resonance (+R) lone-pair donation stabilizes the developing positive charge specifically at the ortho and para positions. The para isomer is major due to lower steric hindrance."
    },
    {
      id: "halo-t2-q3",
      question: "Benzenediazonium chloride on reaction with fluoroboric acid (HBF₄) followed by dry thermal decomposition yields:",
      options: [
        "Fluorobenzene (Balz-Schiemann Reaction)",
        "Chlorobenzene (Sandmeyer Reaction)",
        "Bromobenzene (Gattermann Reaction)",
        "Phenol (Dow's Process)"
      ],
      correctAnswerIndex: 0,
      correctOption: 0,
      difficulty: "Easy",
      topicTested: "Balz-Schiemann Reaction",
      conceptTested: "Preparation of Aryl Fluorides",
      explanation: "C₆H₅–N₂⁺Cl⁻ + HBF₄ → C₆H₅–N₂⁺BF₄⁻ (Benzenediazonium fluoroborate precipitate) xrightarrow{\\Delta} C₆H₅–F + BF₃ + N₂↑. This named transformation is the Balz-Schiemann reaction, the premier laboratory route to fluorobenzene."
    },
    {
      id: "halo-t2-q4",
      question: "The reaction 2 C₆H₅–Br + 2 Na xrightarrow{Dry Ether} C₆H₅–C₆H₅ + 2 NaBr is known as:",
      options: [
        "Wurtz Reaction",
        "Wurtz-Fittig Reaction",
        "Fittig Reaction",
        "Frankland Reaction"
      ],
      correctAnswerIndex: 2,
      correctOption: 2,
      difficulty: "Easy",
      topicTested: "Named Coupling Reactions of Haloarenes",
      conceptTested: "Fittig Reaction vs Wurtz / Wurtz-Fittig",
      explanation: "Coupling of two aryl halide molecules (2 Ar–X) with sodium in dry ether to give biphenyl/diphenyl is the Fittig reaction. When one aryl halide and one alkyl halide (Ar–X + R–X) are coupled, it is called the Wurtz-Fittig reaction."
    },
    {
      id: "halo-t2-q5",
      question: "Why is 1% ethanol added to commercial bottles of chloroform (CHCl₃)?",
      options: [
        "To increase its boiling point",
        "To convert lethal phosgene (COCl₂) into non-toxic diethyl carbonate",
        "To act as a stabilizing antioxidant against iodine liberation",
        "To prevent its freezing during winter"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Medium",
      topicTested: "Polyhalogen Compounds (Chloroform)",
      conceptTested: "Phosgene Formation and Quenching with Ethanol",
      explanation: "Chloroform is slowly oxidized by air and light to produce poisonous phosgene gas (COCl₂). Addition of 1% ethanol reacts with any trace phosgene formed: COCl₂ + 2 C₂H₅OH → (C₂H₅O)₂CO (Diethyl carbonate, harmless) + 2 HCl."
    }
  ],

  // Full 25-Question Chapter Mini-Test
  chapterMiniTest: [
    {
      id: "mini-test-1",
      question: "Which of the following alkyl halides has the highest dipole moment?",
      options: ["CH₃–F", "CH₃–Cl", "CH₃–Br", "CH₃–I"],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Easy",
      explanation: "According to NCERT Table 10.2: CH₃Cl (1.860 D) > CH₃F (1.847 D) > CH₃Br (1.830 D) > CH₃I (1.636 D). Because dipole moment μ = q × d, the significantly longer C–Cl bond distance compensates for the slight decrease in electronegativity compared to fluorine."
    },
    {
      id: "mini-test-2",
      question: "Which of the following compounds will not give a precipitate of AgCl on warming with aqueous AgNO₃ solution?",
      options: ["Benzyl chloride", "Allyl chloride", "tert-Butyl chloride", "Chlorobenzene"],
      correctAnswerIndex: 3,
      correctOption: 3,
      difficulty: "Easy",
      explanation: "In chlorobenzene, the C–Cl bond has partial double bond character due to resonance and the sp² ring carbon resists ionization (phenyl cation is extremely unstable). Hence, it does not release Cl⁻ ions to precipitate AgCl."
    },
    {
      id: "mini-test-3",
      question: "Optically active (R)-2-Bromobutane is treated with aqueous NaOH. The resulting product is:",
      options: [
        "Pure (R)-Butan-2-ol with 100% retention",
        "Pure (S)-Butan-2-ol with 100% inversion",
        "(±)-Butan-2-ol with complete 50:50 racemisation",
        "(S)-Butan-2-ol major with partial racemisation"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Medium",
      explanation: "2-Bromobutane with a strong nucleophile (OH⁻) in 2° substrate typically undergoes S_N2 substitution with 100% Walden inversion (flipping R to S)."
    },
    {
      id: "mini-test-4",
      question: "The reaction of CH₃–CH=CH₂ with HBr in the presence of benzoyl peroxide yields 1-Bromopropane because:",
      options: [
        "The reaction proceeds via a secondary free radical intermediate",
        "The reaction proceeds via a tertiary carbocation",
        "The reaction proceeds via a primary carbocation",
        "Bromine atom attacks the primary carbon to give a primary free radical"
      ],
      correctAnswerIndex: 0,
      correctOption: 0,
      difficulty: "Medium",
      explanation: "In the peroxide effect, the bromine free radical (Br·) attacks the terminal =CH₂ carbon first to generate the more stable 2° carbon radical: CH₃–ĊH–CH₂Br. This 2° radical then abstracts hydrogen from HBr to form 1-Bromopropane."
    },
    {
      id: "mini-test-5",
      question: "Which of the following statements is INCORRECT regarding Grignard reagents?",
      options: [
        "They are prepared by reacting R–X with Mg in dry ether",
        "The C–Mg bond has substantial covalent and carbanionic character",
        "They react with heavy water (D₂O) to give R–D + Mg(OD)X",
        "They can be prepared safely in ethanol or water as solvent"
      ],
      correctAnswerIndex: 3,
      correctOption: 3,
      difficulty: "Easy",
      explanation: "Grignard reagents react violently with any active hydrogen donor (including water and ethanol) to produce hydrocarbons: RMgX + H₂O → R–H + Mg(OH)X. Hence, they MUST be prepared in strictly anhydrous dry ether."
    },
    {
      id: "mini-test-6",
      question: "Finkelstein reaction is carried out in dry acetone because:",
      options: [
        "Acetone acts as a catalyst",
        "NaI is insoluble in acetone",
        "NaCl and NaBr are insoluble in acetone and precipitate out",
        "Acetone stabilizes the carbocation intermediate"
      ],
      correctAnswerIndex: 2,
      correctOption: 2,
      difficulty: "Medium",
      explanation: "NaI is soluble in acetone due to its covalent character, but NaCl and NaBr are ionic and insoluble. Their precipitation shifts the equilibrium forward to completion according to Le Chatelier's principle."
    },
    {
      id: "mini-test-7",
      question: "Arrange the following in increasing order of boiling point: (I) 1-Chlorobutane, (II) 1-Chloropropane, (III) 2-Chloropropane, (IV) 1-Chloropentane",
      options: [
        "III < II < I < IV",
        "II < III < I < IV",
        "IV < I < II < III",
        "III < I < II < IV"
      ],
      correctAnswerIndex: 0,
      correctOption: 0,
      difficulty: "Medium",
      explanation: "Boiling point increases with molecular mass and surface area (Pentane > Butane > Propane). Between isomers, branched isomer (2-chloropropane) has a lower boiling point than straight chain (1-chloropropane). Hence: III < II < I < IV."
    },
    {
      id: "mini-test-8",
      question: "Which of the following compounds will undergo S_N1 substitution fastest?",
      options: [
        "C₆H₅–CH₂–Cl",
        "(C₆H₅)₂CH–Cl",
        "(C₆H₅)₃C–Cl",
        "C₆H₅–Cl"
      ],
      correctAnswerIndex: 2,
      correctOption: 2,
      difficulty: "Medium",
      explanation: "Triphenylmethyl chloride ((C₆H₅)₃C–Cl / Trityl chloride) ionizes to form the triphenylmethyl carbocation ((C₆H₅)₃C⁺), which is stabilized by resonance across three aromatic benzene rings (9 canonical forms)."
    },
    {
      id: "mini-test-9",
      question: "An organic compound C₄H₉Br (X) gives no cloudiness with Lucas reagent. On treatment with alcoholic KOH it gives an alkene (Y), which upon ozonolysis gives only Ethanal. Compound (X) is:",
      options: [
        "1-Bromobutane",
        "2-Bromobutane",
        "1-Bromo-2-methylpropane",
        "2-Bromo-2-methylpropane"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Hard",
      explanation: "Alkene giving only Ethanal (CH₃CHO) on ozonolysis is But-2-ene (CH₃–CH=CH–CH₃). But-2-ene is obtained by dehydrohalogenation of 2-Bromobutane (CH₃CH₂CH(Br)CH₃)."
    },
    {
      id: "mini-test-10",
      question: "What is the major product when Chlorobenzene is treated with methyl chloride in the presence of anhydrous AlCl₃?",
      options: [
        "1-Chloro-2-methylbenzene",
        "1-Chloro-4-methylbenzene (p-Chlorotoluene)",
        "Toluene",
        "Benzyl chloride"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Easy",
      explanation: "In Friedel-Crafts alkylation of chlorobenzene, chlorine directs the incoming electrophile (CH₃⁺) to ortho and para positions. The 1,4-isomer (para) is the major product due to minimal steric hindrance."
    },
    {
      id: "mini-test-11",
      question: "Gattermann reaction differs from Sandmeyer reaction because Gattermann reaction uses:",
      options: [
        "Cuprous chloride (Cu₂Cl₂)",
        "Copper powder in halogen acid (Cu / HCl)",
        "Potassium iodide (KI)",
        "Heavy metal fluorides (AgF)"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Easy",
      explanation: "Sandmeyer uses cuprous halide salts (Cu₂X₂/HX), whereas Gattermann uses metallic copper powder with halogen acid (Cu/HX)."
    },
    {
      id: "mini-test-12",
      question: "The IUPAC name of the compound (CH₃)₃C–CH₂–CH(Cl)–CH₃ is:",
      options: [
        "4-Chloro-2,2-dimethylpentane",
        "2-Chloro-4,4-dimethylpentane",
        "2,2-Dimethyl-4-chloropentane",
        "2-Chloro-2-neopentylpropane"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Medium",
      explanation: "Numbering from the right gives lowest locant to the functional substituent chlorine: C2 for Cl, and C4,4 for the two methyl groups: 2-Chloro-4,4-dimethylpentane."
    },
    {
      id: "mini-test-13",
      question: "In the presence of light, toluene reacts with Cl₂ at high temperature to give compound X, which on boiling with water gives:",
      options: [
        "o-Cresol",
        "p-Cresol",
        "Benzaldehyde",
        "Benzoic acid"
      ],
      correctAnswerIndex: 3,
      correctOption: 3,
      difficulty: "Hard",
      explanation: "Excess chlorination of toluene at high temp gives Benzotrichloride (C₆H₅CCl₃). Hydrolysis of C₆H₅CCl₃ with boiling water replaces 3 chlorines with 3 –OH groups on the same carbon, which immediately loses water to give Benzoic acid (C₆H₅COOH)."
    },
    {
      id: "mini-test-14",
      question: "Which of the following compounds is an allylic halide?",
      options: [
        "1-Chlorobut-2-ene",
        "4-Chlorobut-1-ene",
        "1-Chlorobut-1-ene",
        "2-Chlorobut-2-ene"
      ],
      correctAnswerIndex: 0,
      correctOption: 0,
      difficulty: "Medium",
      explanation: "In 1-Chlorobut-2-ene (CH₃–CH=CH–CH₂–Cl), the chlorine atom is attached to an sp³ carbon adjacent to a C=C double bond (–C=C–C–Cl), which defines an allylic halide."
    },
    {
      id: "mini-test-15",
      question: "Commercial trade name 'Pyrene' corresponds to which polyhalogen compound?",
      options: [
        "CHCl₃",
        "CHI₃",
        "CCl₄",
        "CF₂Cl₂"
      ],
      correctAnswerIndex: 2,
      correctOption: 2,
      difficulty: "Easy",
      explanation: "Carbon tetrachloride (CCl₄) is commercially sold under the trade name 'Pyrene' for use in fire extinguishers."
    },
    {
      id: "mini-test-16",
      question: "Which reagent converts ethyl bromide directly into nitroethane (CH₃CH₂NO₂)?",
      options: [
        "KNO₂",
        "NaNO₂",
        "AgNO₂",
        "HNO₃"
      ],
      correctAnswerIndex: 2,
      correctOption: 2,
      difficulty: "Easy",
      explanation: "AgNO₂ is predominantly covalent; nitrogen's lone pair attacks the alkyl carbon to yield nitroethane (CH₃CH₂NO₂). Ionic KNO₂ yields ethyl nitrite (CH₃CH₂ONO)."
    },
    {
      id: "mini-test-17",
      question: "Which of the following haloalkanes undergoes S_N2 reaction with the slowest rate?",
      options: [
        "CH₃CH₂CH₂CH₂Br",
        "(CH₃)₂CHCH₂Br",
        "CH₃CH₂CH(Br)CH₃",
        "(CH₃)₃CCH₂Br"
      ],
      correctAnswerIndex: 3,
      correctOption: 3,
      difficulty: "Hard",
      explanation: "Neopentyl bromide ((CH₃)₃CCH₂Br) is a 1° alkyl halide, but the bulky tert-butyl group creates massive steric hindrance at the backside, making S_N2 attack exceptionally sluggish."
    },
    {
      id: "mini-test-18",
      question: "In the Dow process, chlorobenzene is converted to phenol at:",
      options: [
        "373 K and 1 atm",
        "623 K and 300 atm",
        "443 K and 10 atm",
        "773 K and 500 atm"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Easy",
      explanation: "According to NCERT, Dow's process requires heating chlorobenzene with 6-8% aqueous NaOH at 623 K and 300 atm pressure followed by acidification with dil. HCl."
    },
    {
      id: "mini-test-19",
      question: "What is the product when 2-Bromobutane reacts with lithium aluminium hydride (LiAlH₄)?",
      options: [
        "Butan-2-ol",
        "Butane",
        "But-2-ene",
        "But-1-ene"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Medium",
      explanation: "LiAlH₄ provides hydride ions (H⁻) that displace the bromide ion via nucleophilic substitution/reduction, converting the alkyl halide into its parent alkane (Butane)."
    },
    {
      id: "mini-test-20",
      question: "When 1-chloro-4-nitrobenzene is heated with aqueous NaOH at 443 K followed by acidification, the product is:",
      options: [
        "4-Nitrophenol",
        "2-Nitrophenol",
        "Picric acid",
        "p-Nitroaniline"
      ],
      correctAnswerIndex: 0,
      correctOption: 0,
      difficulty: "Easy",
      explanation: "The electron-withdrawing nitro group at the para position activates the halogen towards nucleophilic substitution at a moderate temperature of 443 K, forming 4-Nitrophenol."
    },
    {
      id: "mini-test-21",
      question: "Which of the following compounds gives a positive iodoform test with I₂ and NaOH?",
      options: [
        "Methanol",
        "Ethanol",
        "Propan-1-ol",
        "Benzophenone"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Easy",
      explanation: "Ethanol (CH₃–CH₂–OH) contains the CH₃–CH(OH)– grouping and is the only primary alcohol that gives a yellow precipitate of iodoform (CHI₃)."
    },
    {
      id: "mini-test-22",
      question: "The major product of the reaction between Bromobenzene and Chloromethane in the presence of sodium metal and dry ether is:",
      options: [
        "Biphenyl",
        "Toluene",
        "Ethane",
        "Chlorobenzene"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Easy",
      explanation: "C₆H₅Br + CH₃Cl + 2 Na xrightarrow{Dry Ether} C₆H₅–CH₃ (Toluene) + NaCl + NaBr. This is the Wurtz-Fittig reaction."
    },
    {
      id: "mini-test-23",
      question: "DDT is synthesized by condensing chlorobenzene with:",
      options: [
        "Chloroform",
        "Chloral (CCl₃CHO)",
        "Carbon tetrachloride",
        "Phosgene"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Easy",
      explanation: "DDT (p,p'-Dichlorodiphenyltrichloroethane) is synthesized by heating 2 moles of chlorobenzene with 1 mole of chloral (CCl₃CHO) in the presence of concentrated H₂SO₄."
    },
    {
      id: "mini-test-24",
      question: "Freon-12 (CCl₂F₂) is manufactured from CCl₄ by reaction with SbF₃ in the presence of SbCl₅. This reaction is an example of:",
      options: [
        "Finkelstein Reaction",
        "Swarts Reaction",
        "Sandmeyer Reaction",
        "Wurtz Reaction"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Easy",
      explanation: "Halogen exchange using heavy metal fluorides (SbF₃ with SbCl₅ catalyst) to introduce fluorine into alkyl/polyhalides is the Swarts reaction."
    },
    {
      id: "mini-test-25",
      question: "Which of the following statements about the stereochemistry of S_N2 reactions is correct?",
      options: [
        "Proceeds with retention of configuration",
        "Proceeds with 100% Walden inversion of configuration",
        "Proceeds with 50% retention and 50% inversion",
        "Proceeds without any change in optical activity"
      ],
      correctAnswerIndex: 1,
      correctOption: 1,
      difficulty: "Easy",
      explanation: "In an S_N2 mechanism, the nucleophile attacks from the backside 180° opposite to the departing leaving group, causing a complete inversion of configuration (Walden inversion) analogous to an umbrella turning inside out in a strong wind."
    }
  ]
};
