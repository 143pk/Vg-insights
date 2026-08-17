// Comprehensive NEET-Style Practice Question Sets for Chapter 20: Alcohols, Phenols and Ethers
import { PracticeQuestion } from '../../types/neet';

export const ALCOHOLS_PHENOLS_ETHERS_PRACTICE: {
  topic1Alcohols: PracticeQuestion[];
  topic2Phenols: PracticeQuestion[];
  topic3Ethers: PracticeQuestion[];
  chapterMiniTest: PracticeQuestion[];
} = {
  // Topic 1: Alcohols Practice Questions
  topic1Alcohols: [
    {
      id: "prac-alc-1",
      question: "Which of the following compounds will react fastest with Lucas reagent (conc. HCl + anh. ZnCl₂) at room temperature?",
      options: [
        "2-Methylpropan-2-ol",
        "Butan-2-ol",
        "Butan-1-ol",
        "2-Methylpropan-1-ol"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy" as const,
      conceptTested: "Lucas test rate order for 1°, 2°, 3° alcohols",
      explanation: "2-Methylpropan-2-ol is a tertiary (3°) alcohol. It forms a highly stable tertiary carbocation [(CH₃)₃C⁺] upon protonation and loss of water, reacting almost instantaneously with Lucas reagent to produce cloudiness/turbidity. Secondary alcohols react in ~5 minutes, whereas primary alcohols do not produce turbidity at room temperature."
    },
    {
      id: "prac-alc-2",
      question: "In the Victor Meyer test for distinction of alcohols, an unknown alcohol 'X' gives an intense BLUE colouration after sequential treatment with P/I₂, AgNO₂, HNO₂, and excess NaOH. Alcohol 'X' is:",
      options: [
        "Propan-2-ol",
        "Propan-1-ol",
        "2-Methylpropan-2-ol",
        "Methanol"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium" as const,
      conceptTested: "Victor Meyer Test Colour Scheme (R-B-W)",
      explanation: "In the Victor Meyer test:\n• 1° alcohols produce nitrolic acids which dissolve in alkali to give a BLOOD RED solution.\n• 2° alcohols produce pseudonitrols which are insoluble in alkali and impart an intense BLUE colour.\n• 3° alcohols do not react with nitrous acid and remain COLOURLESS.\nSince alcohol 'X' gives a blue colour, it must be a secondary (2°) alcohol like Propan-2-ol."
    },
    {
      id: "prac-alc-3",
      question: "Which reagent is most suitable to convert Butan-1-ol into Butanal in high yield without over-oxidation?",
      options: [
        "Pyridinium chlorochromate (PCC) in CH₂Cl₂",
        "Acidified potassium permanganate (KMnO₄ / H⁺)",
        "Acidified potassium dichromate (K₂Cr₂O₇ / H⁺)",
        "Concentrated nitric acid (conc. HNO₃)"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy" as const,
      conceptTested: "Selective oxidation of primary alcohols to aldehydes",
      explanation: "PCC (Pyridinium chlorochromate) in anhydrous dichloromethane (CH₂Cl₂) is a mild, selective oxidizing agent that oxidizes primary alcohols specifically to aldehydes and stops without over-oxidation to carboxylic acids. Aqueous reagents like acidic KMnO₄ or K₂Cr₂O₇ oxidize primary alcohols directly to butanoic acid."
    },
    {
      id: "prac-alc-4",
      question: "Assertion (A): Boiling point of Ethanol is significantly higher than that of isomeric Dimethyl ether.\nReason (R): Ethanol molecules associate via intermolecular hydrogen bonding, whereas Dimethyl ether molecules have only dipole-dipole interactions.",
      options: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "(A) is true but (R) is false",
        "(A) is false but (R) is true"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium" as const,
      conceptTested: "Intermolecular Hydrogen Bonding in Alcohols vs Ethers",
      explanation: "Ethanol (C₂H₅OH) possesses an electropositive hydrogen bonded to an electronegative oxygen, enabling strong intermolecular hydrogen bonding. In contrast, dimethyl ether (CH₃–O–CH₃) lacks H directly attached to oxygen and exhibits only weak dipole-dipole attractions. Hence, ethanol has a much higher boiling point (78°C vs -24°C)."
    },
    {
      id: "prac-alc-5",
      question: "Statement I: Reaction of formaldehyde (HCHO) with Methylmagnesium bromide followed by hydrolysis gives ethanol.\nStatement II: Reaction of acetone with Methylmagnesium bromide followed by hydrolysis gives a tertiary alcohol.",
      options: [
        "Both Statement I and Statement II are correct",
        "Both Statement I and Statement II are incorrect",
        "Statement I is correct but Statement II is incorrect",
        "Statement I is incorrect but Statement II is correct"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy" as const,
      conceptTested: "Grignard synthesis of 1°, 2°, 3° alcohols from carbonyls",
      explanation: "Formaldehyde (HCHO) adds Grignard reagent (CH₃MgBr) to yield a primary alcohol (CH₃CH₂OH, ethanol). Ketones like acetone add Grignard reagent to yield tertiary alcohols [(CH₃)₃COH, 2-methylpropan-2-ol]. Both statements are scientifically exact and NCERT-aligned."
    }
  ],

  // Topic 2: Phenols Practice Questions
  topic2Phenols: [
    {
      id: "prac-ph-1",
      question: "Arrange the following in increasing order of their acidic strength:\n(I) Phenol, (II) p-Nitrophenol, (III) m-Nitrophenol, (IV) p-Cresol",
      options: [
        "(IV) < (I) < (III) < (II)",
        "(I) < (IV) < (III) < (II)",
        "(IV) < (III) < (I) < (II)",
        "(II) < (III) < (I) < (IV)"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium" as const,
      conceptTested: "Substituent effects on acidity of Phenols",
      explanation: "1. p-Cresol (IV) has an electron-donating –CH₃ group (+I and hyperconjugation) which destabilizes the phenoxide ion, making it the weakest acid (pKₐ 10.26).\n2. Phenol (I) has standard resonance stabilization (pKₐ 9.98).\n3. m-Nitrophenol (III) is stabilized by the -I effect of the meta-nitro group (pKₐ 8.35).\n4. p-Nitrophenol (II) is stabilized by both strong -R resonance and -I inductive withdrawal (pKₐ 7.15).\nThus, the increasing acidic strength order is: (IV) < (I) < (III) < (II)."
    },
    {
      id: "prac-ph-2",
      question: "In the Reimer-Tiemann reaction of phenol, if Carbon tetrachloride (CCl₄) is used instead of Chloroform (CHCl₃) in aqueous NaOH, the major product obtained after acidification is:",
      options: [
        "Salicylic acid (2-Hydroxybenzoic acid)",
        "Salicylaldehyde",
        "Chlorobenzene",
        "p-Hydroxybenzaldehyde"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium" as const,
      conceptTested: "Reimer-Tiemann variation with CCl₄",
      explanation: "When phenol reacts with CCl₄ in aqueous NaOH, the intermediate formed at the ortho position contains a trichloromethyl group (–CCl₃). Alkaline hydrolysis replaces the three chlorine atoms with three –OH groups, which lose a molecule of water to produce a carboxylic acid (–COOH), yielding Salicylic acid as the major product."
    },
    {
      id: "prac-ph-3",
      question: "Phenol on reaction with concentrated HNO₃ in the presence of concentrated H₂SO₄ yields:",
      options: [
        "2,4,6-Trinitrophenol (Picric acid)",
        "o-Nitrophenol only",
        "p-Nitrophenol only",
        "m-Nitrophenol"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy" as const,
      conceptTested: "Exhaustive nitration of Phenol to Picric acid",
      explanation: "Concentrated nitric acid mixed with concentrated sulphuric acid causes exhaustive electrophilic substitution of the strongly activated phenol ring at all available ortho and para positions (2, 4, 6) to yield 2,4,6-Trinitrophenol (Picric acid)."
    },
    {
      id: "prac-ph-4",
      question: "Assertion (A): Phenol does not liberate CO₂ gas with aqueous Sodium bicarbonate (NaHCO₃).\nReason (R): Phenol is a weaker acid than Carbonic acid (H₂CO₃).",
      options: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "(A) is true but (R) is false",
        "(A) is false but (R) is true"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium" as const,
      conceptTested: "Relative acidity of Phenol vs Carbonic acid and NaHCO₃ test",
      explanation: "A stronger acid displaces a weaker acid from its salt. The pKₐ of phenol is ~10, whereas the pKₐ of carbonic acid (H₂CO₃) is 6.35. Since phenol is a weaker acid than carbonic acid, it cannot displace carbonic acid from sodium bicarbonate to release CO₂ gas."
    },
    {
      id: "prac-ph-5",
      question: "Which of the following compounds gives a characteristic violet colouration with neutral FeCl₃ solution?",
      options: [
        "Phenol",
        "Benzyl alcohol",
        "Cyclohexanol",
        "Ethanol"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy" as const,
      conceptTested: "Ferric chloride test for Phenols",
      explanation: "Phenol contains an enolic/phenolic –OH group directly attached to an sp² carbon of the aromatic ring. It reacts with neutral FeCl₃ to form a water-soluble violet-coloured coordination complex [Fe(OC₆H₅)₆]³⁻. Aliphatic and cycloaliphatic alcohols do not give this test."
    }
  ],

  // Topic 3: Ethers Practice Questions
  topic3Ethers: [
    {
      id: "prac-eth-1",
      question: "The reaction of Sodium methoxide with 2-Bromo-2-methylpropane predominantly yields:",
      options: [
        "2-Methylpropene (Isobutylene)",
        "tert-Butyl methyl ether",
        "Methanol and 2-Methylpropan-2-ol",
        "Dimethyl ether"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy" as const,
      conceptTested: "Elimination vs Substitution in Williamson Ether Synthesis",
      explanation: "Sodium methoxide (CH₃O⁻Na⁺) is a strong Brønsted base. 2-Bromo-2-methylpropane is a tertiary (3°) alkyl halide that is too sterically hindered for S_N2 backside displacement. Therefore, dehydrohalogenation via E2 elimination takes place exclusively to produce 2-Methylpropene [CH₂=C(CH₃)₂] as the major product."
    },
    {
      id: "prac-eth-2",
      question: "Cleavage of tert-Butyl ethyl ether with 1 equivalent of concentrated HI at room temperature produces:",
      options: [
        "tert-Butyl iodide and Ethanol",
        "tert-Butanol and Ethyl iodide",
        "tert-Butyl iodide and Ethyl iodide",
        "2-Methylpropene and Ethanol"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium" as const,
      conceptTested: "S_N1 cleavage of tertiary alkyl ethers by HI",
      explanation: "When an ether containing a tertiary alkyl group is cleaved by HI, protonation of oxygen is followed by spontaneous heterolytic cleavage via an S_N1 mechanism to form a stable 3° carbocation [(CH₃)₃C⁺] and Ethanol. The iodide ion (I⁻) then combines with the 3° carbocation to yield tert-Butyl iodide [(CH₃)₃C–I]."
    },
    {
      id: "prac-eth-3",
      question: "Bromination of Anisole (C₆H₅OCH₃) with Bromine in Ethanoic acid gives predominantly:",
      options: [
        "p-Bromoanisole",
        "o-Bromoanisole",
        "2,4,6-Tribromoanisole",
        "m-Bromoanisole"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy" as const,
      conceptTested: "Electrophilic bromination of Anisole in CH₃COOH",
      explanation: "The methoxy group (–OCH₃) in anisole is an activating and ortho/para-directing group due to the +R resonance effect. In ethanoic acid medium, bromination occurs without requiring a Lewis acid catalyst (FeBr₃). Because of steric hindrance at the ortho position, the para-isomer (p-Bromoanisole) is formed in ~90% yield as the major product."
    },
    {
      id: "prac-eth-4",
      question: "Statement I: Ethers stored for long periods in presence of air and light form explosive peroxides.\nStatement II: The presence of peroxides in ethers can be detected by adding acidified ferrous sulphate followed by potassium thiocyanate.",
      options: [
        "Both Statement I and Statement II are correct",
        "Both Statement I and Statement II are incorrect",
        "Statement I is correct but Statement II is incorrect",
        "Statement I is incorrect but Statement II is correct"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium" as const,
      conceptTested: "Ether peroxide formation and detection",
      explanation: "Both statements are completely correct. Ethers react slowly with atmospheric oxygen in the presence of sunlight to form explosive organic peroxides at the α-carbon. Peroxides oxidize Fe²⁺ to Fe³⁺, which reacts with thiocyanate (SCN⁻) to generate an intense blood-red complex [Fe(SCN)]²⁺."
    },
    {
      id: "prac-eth-5",
      question: "Assertion (A): Intermolecular dehydration of Ethanol at 413 K produces Diethyl ether, but at 443 K it produces Ethene.\nReason (R): Lower temperature favors bimolecular substitution (S_N2) while higher temperature favors unimolecular elimination (E1).",
      options: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "(A) is true but (R) is false",
        "(A) is false but (R) is true"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium" as const,
      conceptTested: "Temperature dependence of Ethanol dehydration",
      explanation: "At 413 K (140°C), unprotonated ethanol attacks protonated ethanol via S_N2 displacement of water to form diethyl ether. At 443 K (170°C), higher thermal energy promotes loss of water and β-elimination of a proton (E1/E2) to give ethene."
    }
  ],

  // Full 25-Question Chapter Mini-Test
  chapterMiniTest: [
    {
      id: "mini-test-1",
      question: "Which of the following compounds gives a positive Iodoform test?",
      options: [
        "Ethanol",
        "Methanol",
        "Propan-1-ol",
        "3-Pentanol"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy" as const,
      conceptTested: "Iodoform test requirement for alcohols containing CH₃–CH(OH)– group",
      explanation: "The iodoform test (I₂ + NaOH) requires the structural unit CH₃–CH(OH)– (or CH₃–C=O). Ethanol (CH₃–CH₂–OH) contains this specific unit and is oxidized to acetaldehyde which undergoes triiodination and cleavage to give a yellow precipitate of Iodoform (CHI₃)."
    },
    {
      id: "mini-test-2",
      question: "In the reaction: Salicylic acid + (CH₃CO)₂O xrightarrow{H⁺} Product + CH₃COOH, the product formed is:",
      options: [
        "Aspirin (Acetylsalicylic acid)",
        "Salol (Phenyl salicylate)",
        "Methyl salicylate",
        "Benzoic acid"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy" as const,
      conceptTested: "Synthesis of Aspirin from Salicylic Acid",
      explanation: "Acetylation of the phenolic –OH group in salicylic acid using acetic anhydride in the presence of an acid catalyst produces 2-Acetoxybenzoic acid, commonly known as Aspirin."
    },
    {
      id: "mini-test-3",
      question: "Which of the following pairs cannot be separated by steam distillation?",
      options: [
        "o-Nitrophenol and p-Nitrophenol",
        "Phenol and Nitrobenzene",
        "Aniline and Water",
        "Ethanol and Methanol"
      ],
      correctAnswer: 3,
      correctAnswerIndex: 3,
      difficulty: "Medium" as const,
      conceptTested: "Steam distillation principle & Hydrogen bonding volatility",
      explanation: "o-Nitrophenol (steam volatile due to intramolecular H-bonding) and p-nitrophenol (non-volatile due to intermolecular H-bonding) are readily separated by steam distillation. In contrast, Ethanol and Methanol are completely miscible with water, boil close together, and are separated by fractional distillation, not steam distillation."
    },
    {
      id: "mini-test-4",
      question: "The C–O–C bond angle in Dimethyl ether is approximately:",
      options: [
        "111.7°",
        "104.5°",
        "109.5°",
        "120.0°"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy" as const,
      conceptTested: "Bond angle in ethers due to steric repulsion between alkyl groups",
      explanation: "The C–O–C bond angle in dimethyl ether is 111.7°, which is slightly greater than the standard tetrahedral angle (109.5°). This bond angle opening is caused by steric repulsion between the two bulky methyl groups attached to the central oxygen atom."
    },
    {
      id: "mini-test-5",
      question: "When Phenol is oxidized with acidified Sodium dichromate (Na₂Cr₂O₇ / H₂SO₄), the major conjugated diketone obtained is:",
      options: [
        "p-Benzoquinone",
        "Catechol",
        "Resorcinol",
        "Hydroquinone"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy" as const,
      conceptTested: "Oxidation of Phenol to p-Benzoquinone",
      explanation: "Oxidation of phenol with chromic acid (Na₂Cr₂O₇ in conc. H₂SO₄) yields benzo-1,4-quinone (p-Benzoquinone), a conjugated cyclic diketone."
    }
  ]
};
