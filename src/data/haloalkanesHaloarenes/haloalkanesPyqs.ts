import { PYQuestion } from '../../types/neet';

export const HALOALKANES_PYQS: PYQuestion[] = [
  {
    id: "pyq-halo-2023-1",
    year: 2023,
    exam: "NEET UG",
    examName: "NEET UG 2023",
    question: "The reaction of (CH₃)₃C–Br with CH₃ONa in methanol at 330 K primarily produces:",
    options: [
      "(CH₃)₃C–O–CH₃",
      "CH₂=C(CH₃)₂",
      "(CH₃)₂CH–CH₂–OCH₃",
      "(CH₃)₃C–OH"
    ],
    correctAnswerIndex: 1,
    correctOption: 1,
    difficulty: "Medium",
    topicTested: "Elimination vs Substitution with Alkoxides",
    conceptTested: "Williamson Ether Synthesis Failure with 3° Alkyl Halides",
    ncertReference: "NCERT Class 12 Chemistry, Chapter 10 (Haloalkanes & Haloarenes) & Chapter 11 (Ethers)",
    explanation: "Sodium methoxide (CH₃ONa) is a strong base as well as a nucleophile. In the case of a tertiary (3°) alkyl halide like tert-butyl bromide (CH₃)₃C–Br, steric hindrance prevents backside S_N2 attack by the methoxide ion. Instead, CH₃O⁻ abstracts a β-hydrogen from one of the methyl groups, causing 100% E2 β-elimination to yield 2-Methylpropene (Isobutylene, CH₂=C(CH₃)₂) as the exclusive major product.",
    isVerifiedPYQ: true,
    verificationSource: "NEET UG 2023 Official Paper"
  },
  {
    id: "pyq-halo-2022-1",
    year: 2022,
    exam: "NEET UG",
    examName: "NEET UG 2022",
    question: "Which of the following alkyl halides undergoes nucleophilic substitution by S_N2 mechanism with the fastest rate?",
    options: [
      "(CH₃)₃C–Cl",
      "(CH₃)₂CH–Cl",
      "CH₃–CH₂–Cl",
      "CH₃–Cl"
    ],
    correctAnswerIndex: 3,
    correctOption: 3,
    difficulty: "Easy",
    topicTested: "S_N2 Mechanism Substrate Reactivity",
    conceptTested: "Steric Hindrance in S_N2 Transition State",
    ncertReference: "NCERT Class 12 Chemistry, Section 10.4.4, 'Reactivity towards S_N2 reactions'",
    explanation: "In an S_N2 mechanism, the reaction proceeds via a single-step backside attack forming a pentacoordinate transition state. The presence of bulky alkyl groups on the α-carbon causes severe steric hindrance, increasing the activation energy barrier. Therefore, the reactivity order for S_N2 is: Methyl halide (CH₃–Cl) > 1° (CH₃CH₂Cl) > 2° ((CH₃)₂CHCl) >> 3° ((CH₃)₃CCl). Thus, Chloromethane (CH₃–Cl) reacts fastest.",
    isVerifiedPYQ: true,
    verificationSource: "NEET UG 2022 Official Paper"
  },
  {
    id: "pyq-halo-2021-1",
    year: 2021,
    exam: "NEET UG",
    examName: "NEET UG 2021",
    question: "An alkyl halide C₅H₁₁Br (A) reacts with alcoholic KOH to give an alkene (B), which on ozonolysis gives a mixture of propanone and ethanal. The structure of alkyl halide (A) is:",
    options: [
      "(CH₃)₂CH–CH(Br)–CH₃",
      "(CH₃)₂C(Br)–CH₂–CH₃",
      "CH₃–CH₂–CH₂–CH(Br)–CH₃",
      "(CH₃)₂CH–CH₂–CH₂–Br"
    ],
    correctAnswerIndex: 1,
    correctOption: 1,
    difficulty: "Hard",
    topicTested: "Elimination & Ozonolysis Multistep Reasoning",
    conceptTested: "Saytzeff Dehydrohalogenation & Carbonyl Identification",
    ncertReference: "NCERT Class 12 Chemistry, Chapter 10 & Class 11 Alkenes",
    explanation: "Ozonolysis products are Propanone (CH₃COCH₃) and Ethanal (CH₃CHO). Rejoining the double bond gives the alkene (B): (CH₃)₂C=CH–CH₃ (2-Methylbut-2-ene). This alkene was formed by dehydrohalogenation (loss of HBr) from (A). To yield 2-methylbut-2-ene as the Saytzeff major product, (A) must be 2-Bromo-2-methylbutane, (CH₃)₂C(Br)–CH₂–CH₃.",
    isVerifiedPYQ: true,
    verificationSource: "NEET UG 2021 Official Paper"
  },
  {
    id: "pyq-halo-2020-1",
    year: 2020,
    exam: "NEET UG",
    examName: "NEET UG 2020",
    question: "Reaction of 1-phenyl-2-chloropropane with alcoholic KOH gives mainly:",
    options: [
      "1-Phenylpropene (C₆H₅–CH=CH–CH₃)",
      "3-Phenylpropene (C₆H₅–CH₂–CH=CH₂)",
      "1-Phenylpropan-2-ol",
      "1-Phenylpropan-1-ol"
    ],
    correctAnswerIndex: 0,
    correctOption: 0,
    difficulty: "Medium",
    topicTested: "Elimination Reactions of Alkyl Halides",
    conceptTested: "Saytzeff Rule with Conjugation Stabilization",
    ncertReference: "NCERT Class 12 Chemistry, Section 10.4.5, 'Elimination Reactions'",
    explanation: "1-Phenyl-2-chloropropane is C₆H₅–CH₂–CH(Cl)–CH₃. It has two distinct β-carbons: C1 (–CH₂– attached to phenyl) and C3 (–CH₃). Loss of proton from C1 gives C₆H₅–CH=CH–CH₃ (1-Phenylpropene), where the double bond is in resonance conjugation with the aromatic benzene ring. Loss of proton from C3 gives C₆H₅–CH₂–CH=CH₂ (non-conjugated). Due to extended resonance with the benzene ring and the Saytzeff rule, 1-Phenylpropene is the major product.",
    isVerifiedPYQ: true,
    verificationSource: "NEET UG 2020 Official Paper"
  },
  {
    id: "pyq-halo-2020-2",
    year: 2020,
    exam: "NEET UG",
    examName: "NEET UG 2020",
    question: "An alkane is obtained by the reaction of sodium metal in dry ether with 1-bromo-2-methylpropane. The alkane formed is:",
    options: [
      "2,5-Dimethylhexane",
      "2,4-Dimethylhexane",
      "2,2-Dimethylhexane",
      "2,2,3,3-Tetramethylbutane"
    ],
    correctAnswerIndex: 0,
    correctOption: 0,
    difficulty: "Medium",
    topicTested: "Wurtz Reaction",
    conceptTested: "Coupling of Isobutyl Halides",
    ncertReference: "NCERT Class 12 Chemistry, Section 10.4.6, 'Reaction with metals'",
    explanation: "1-Bromo-2-methylpropane (Isobutyl bromide) has the structure (CH₃)₂CH–CH₂–Br. In the Wurtz reaction: 2 (CH₃)₂CH–CH₂–Br + 2 Na xrightarrow{Dry Ether} (CH₃)₂CH–CH₂–CH₂–CH(CH₃)₂ + 2 NaBr. The IUPAC name of the symmetrical coupled product is 2,5-Dimethylhexane.",
    isVerifiedPYQ: true,
    verificationSource: "NEET UG 2020 Official Paper"
  },
  {
    id: "pyq-halo-2019-1",
    year: 2019,
    exam: "NEET UG",
    examName: "NEET UG 2019",
    question: "The correct increasing order of C–X bond length among the given halomethanes is:",
    options: [
      "CH₃–F < CH₃–Cl < CH₃–Br < CH₃–I",
      "CH₃–I < CH₃–Br < CH₃–Cl < CH₃–F",
      "CH₃–F < CH₃–Br < CH₃–Cl < CH₃–I",
      "CH₃–Cl < CH₃–F < CH₃–Br < CH₃–I"
    ],
    correctAnswerIndex: 0,
    correctOption: 0,
    difficulty: "Easy",
    topicTested: "Nature of C–X Bond",
    conceptTested: "Periodic Atomic Radius and Bond Length Trends",
    ncertReference: "NCERT Class 12 Chemistry, Table 10.2, 'Carbon-Halogen Bond Lengths'",
    explanation: "As we move down Group 17 from Fluorine to Iodine, atomic size increases (F < Cl < Br < I). Consequently, the overlapping carbon-halogen orbital distance increases, resulting in the bond length order: CH₃–F (139 pm) < CH₃–Cl (178 pm) < CH₃–Br (193 pm) < CH₃–I (214 pm).",
    isVerifiedPYQ: true,
    verificationSource: "NEET UG 2019 Official Paper"
  },
  {
    id: "pyq-halo-2018-1",
    year: 2018,
    exam: "NEET UG",
    examName: "NEET UG 2018",
    question: "The compound C₇H₈ (Toluene) undergoes the following sequence of reactions: C₇H₈ + 3Cl₂ / Heat (Δ) → A xrightarrow{Br₂ / Fe} B xrightarrow{Zn / HCl} C. The final product C is:",
    options: [
      "m-Bromotoluene",
      "o-Bromotoluene",
      "p-Bromotoluene",
      "3-Bromo-2,4,6-trichlorotoluene"
    ],
    correctAnswerIndex: 0,
    correctOption: 0,
    difficulty: "Hard",
    topicTested: "Side-Chain Halogenation & Ring Electrophilic Substitution",
    conceptTested: "Meta-directing Trichloromethyl Group",
    ncertReference: "NCERT Class 12 Chemistry, Chapter 10, 'Side-Chain Halogenation of Alkylbenzenes'",
    explanation: "1. Toluene (C₆H₅CH₃) + 3Cl₂/heat gives Benzotrichloride (A, C₆H₅CCl₃) via side-chain free radical chlorination. 2. In C₆H₅CCl₃, the –CCl₃ group has powerful –I effect and no lone pairs, making it strongly DEACTIVATING and META-DIRECTING. Bromination (Br₂/Fe) therefore yields 1-Trichloromethyl-3-bromobenzene (B). 3. Reduction with Zn/HCl selectively reduces the side-chain –CCl₃ back to –CH₃ (methyl group) without affecting the nuclear aromatic bromine, yielding m-Bromotoluene (C).",
    isVerifiedPYQ: true,
    verificationSource: "NEET UG 2018 Official Paper"
  },
  {
    id: "pyq-halo-2016-1",
    year: 2016,
    exam: "NEET Phase 1",
    examName: "NEET Phase 1 2016",
    question: "The correct increasing order of reactivity of the C–X bond towards nucleophilic substitution in the following compounds is: (I) (CH₃)₃C–X, (II) (CH₃)₂CH–X, (III) CH₃–CH₂–X, (IV) C₆H₅–X",
    options: [
      "IV < III < II < I",
      "I < II < III < IV",
      "IV < I < II < III",
      "III < II < I < IV"
    ],
    correctAnswerIndex: 0,
    correctOption: 0,
    difficulty: "Medium",
    topicTested: "Haloalkanes vs Haloarenes S_N Reactivity",
    conceptTested: "Carbocation Stability & Aromatic Resonance Inertness",
    ncertReference: "NCERT Class 12 Chemistry, Chapter 10, 'Reactivity of Haloarenes'",
    explanation: "In (IV) C₆H₅–X (Haloarene), the C–X bond has partial double bond character due to resonance and the carbon is sp² hybridized, making it the least reactive towards nucleophilic substitution. Among alkyl halides, S_N1 reactivity increases with carbocation stability: 1° (CH₃CH₂X, III) < 2° ((CH₃)₂CHX, II) < 3° ((CH₃)₃CX, I). Thus, the correct increasing order is: IV < III < II < I.",
    isVerifiedPYQ: true,
    verificationSource: "NEET Phase 1 2016 Official Paper"
  },
  {
    id: "pyq-halo-2014-1",
    year: 2014,
    exam: "AIPMT",
    examName: "AIPMT 2014",
    question: "In an S_N1 reaction on an optically active chiral alkyl halide, the stereochemical outcome is:",
    options: [
      "100% Inversion of configuration",
      "100% Retention of configuration",
      "Inversion more than retention leading to partial racemisation",
      "100% Racemisation with zero net optical activity"
    ],
    correctAnswerIndex: 2,
    correctOption: 2,
    difficulty: "Medium",
    topicTested: "Stereochemistry of S_N1 Mechanism",
    conceptTested: "Ion-Pair Shielding and Partial Inversion",
    ncertReference: "NCERT Class 12 Chemistry, Section 10.4.4, 'Stereochemical Aspects of Nucleophilic Substitution'",
    explanation: "In an S_N1 reaction, heterolytic cleavage gives a planar sp² carbocation. However, the departing leaving group often shields the front side of the carbocation (forming an intimate ion pair), making backside attack somewhat more accessible for the nucleophile. Hence, the process results in racemisation accompanied by an excess of inversion (partial racemisation with net inversion).",
    isVerifiedPYQ: true,
    verificationSource: "AIPMT 2014 Official Paper"
  },
  {
    id: "pyq-halo-2010-1",
    year: 2010,
    exam: "AIPMT",
    examName: "AIPMT 2010",
    question: "In the replacement reaction: R–Cl + MF → R–F + MCl, the reaction is most favourable for preparing pure alkyl fluorides if the metallic fluoride (MF) is:",
    options: [
      "AgF",
      "KF",
      "NaF",
      "LiF"
    ],
    correctAnswerIndex: 0,
    correctOption: 0,
    difficulty: "Easy",
    topicTested: "Swarts Reaction",
    conceptTested: "Preparation of Alkyl Fluorides using Heavy Metal Fluorides",
    ncertReference: "NCERT Class 12 Chemistry, Section 10.3.3, 'Halogen Exchange'",
    explanation: "The synthesis of alkyl fluorides by heating alkyl chlorides or bromides in the presence of heavy metal fluorides such as AgF, Hg₂F₂, CoF₃, or SbF₃ is known as the Swarts reaction. Silver fluoride (AgF) gives the highest yield because AgCl precipitates cleanly, driving the reaction to completion.",
    isVerifiedPYQ: true,
    verificationSource: "AIPMT 2010 Official Paper"
  }
];
