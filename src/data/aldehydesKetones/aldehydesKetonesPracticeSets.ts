// Practice Questions and 30-Question Chapter Assessment for Chapter 21: Aldehydes, Ketones and Carboxylic Acids
import { PracticeQuestion } from '../../types/neet';

export const ALDEHYDES_KETONES_PRACTICE: {
  topic1Practice: PracticeQuestion[];
  topic2Practice: PracticeQuestion[];
  topic3Practice: PracticeQuestion[];
  chapterAssessment30: PracticeQuestion[];
} = {
  // Topic 1: Structure, Preparation & Nucleophilic Addition
  topic1Practice: [
    {
      id: "prac-akc-t1-1",
      question: "Which of the following compounds gives a secondary alcohol upon reaction with methylmagnesium bromide (CH₃MgBr) followed by acidic hydrolysis?",
      options: [
        "Formaldehyde (HCHO)",
        "Acetaldehyde (CH₃CHO)",
        "Acetone (CH₃COCH₃)",
        "Carbon dioxide (CO₂)"
      ],
      correctAnswer: 1,
      correctAnswerIndex: 1,
      difficulty: "Easy",
      topicTested: "Grignard Reaction with Carbonyl Compounds",
      conceptTested: "Formaldehyde ⟶ 1° Alcohol; Other Aldehydes ⟶ 2° Alcohol; Ketones ⟶ 3° Alcohol",
      explanation: "Reaction of Grignard reagent (RMgX) with aldehydes other than formaldehyde produces secondary (2°) alcohols upon hydrolysis:\nCH₃CHO + CH₃MgBr ⟶ CH₃–CH(OMgBr)–CH₃ xrightarrow{H₃O⁺} CH₃–CH(OH)–CH₃ (Propan-2-ol, a 2° alcohol).\n\nOther reactions:\n• HCHO + CH₃MgBr ⟶ Ethanol (1° alcohol).\n• CH₃COCH₃ + CH₃MgBr ⟶ 2-Methylpropan-2-ol (3° alcohol).\n• CO₂ + CH₃MgBr ⟶ Acetic acid (Carboxylic acid)."
    },
    {
      id: "prac-akc-t1-2",
      question: "The addition of hydrogen cyanide (HCN) to acetaldehyde is catalysed by base because base:",
      options: [
        "Increases the nucleophilicity of the carbonyl oxygen",
        "Generates the reactive nucleophile :CN⁻ from weak acid HCN",
        "Protonates the carbonyl carbon",
        "Acts as a solvent to dissolve acetaldehyde"
      ],
      correctAnswer: 1,
      correctAnswerIndex: 1,
      difficulty: "Medium",
      topicTested: "Mechanism of Cyanohydrin Formation",
      conceptTested: "Base catalysis in HCN addition generating cyanide ion nucleophile",
      explanation: "HCN is a very weak acid (Ka ≈ 4.9 × 10⁻¹⁰) and is very poorly ionised in pure form. Addition of a small amount of base (OH⁻) abstracts the proton from HCN to generate the strong nucleophile, cyanide ion (:CN⁻):\nHCN + OH⁻ ⇌ :CN⁻ + H₂O.\nThe cyanide ion then readily attacks the electrophilic carbonyl carbon to form the tetrahedral cyanohydrin intermediate."
    },
    {
      id: "prac-akc-t1-3",
      question: "An organic compound 'A' (C₄H₈) on reductive ozonolysis [O₃ / Zn–H₂O] gives ONLY acetone as the sole organic product. The compound 'A' is:",
      options: [
        "But-1-ene",
        "But-2-ene",
        "2-Methylpropene",
        "2,3-Dimethylbut-2-ene"
      ],
      correctAnswer: 3,
      correctAnswerIndex: 3,
      difficulty: "Medium",
      topicTested: "Ozonolysis of Alkenes",
      conceptTested: "Symmetrical tetrasubstituted alkene cleavage to ketones",
      explanation: "Reductive ozonolysis cleaves the >C=C< double bond and inserts =O onto each carbon.\nIf the alkene is 2,3-dimethylbut-2-ene [(CH₃)₂C=C(CH₃)₂], cleaving the double bond yields TWO identical molecules of Propan-2-one / Acetone [(CH₃)₂C=O] as the only product.\n(Note: Formula C₆H₁₂ for 2,3-dimethylbut-2-ene yields 2 acetone molecules)."
    },
    {
      id: "prac-akc-t1-4",
      question: "During the reaction of a carbonyl compound with semicarbazide (H₂N–NH–CO–NH₂), only one –NH₂ group participates in nucleophilic addition because:",
      options: [
        "The other –NH₂ group is sterically hindered",
        "The lone pair of electrons on the amide –NH₂ is delocalised into the carbonyl group via resonance",
        "The hydrazine –NH₂ group is positively charged",
        "Semicarbazide exists as a zwitterion"
      ],
      correctAnswer: 1,
      correctAnswerIndex: 1,
      difficulty: "Medium",
      topicTested: "Ammonia Derivatives & Nucleophilicity",
      conceptTested: "Resonance delocalisation of amide lone pair vs hydrazine nucleophilicity",
      explanation: "In semicarbazide (H₂N–NH–C(=O)–NH₂), the –NH₂ group directly attached to the carbonyl group is an amide-type nitrogen. Its lone pair is delocalised into the C=O group through resonance: –C(=O)–NH₂ ⟷ –C(–O⁻)=N⁺H₂. Consequently, its electron density is drastically reduced and it cannot act as a nucleophile. The hydrazine –NH₂ group (attached to –NH–) has an unshared, localized lone pair and acts as the exclusive nucleophile."
    },
    {
      id: "prac-akc-t1-5",
      question: "The correct sequence of reagents for the conversion of Benzonitrile to Benzaldehyde is:",
      options: [
        "SnCl₂ / conc. HCl followed by H₃O⁺ / steam",
        "LiAlH₄ in ether followed by H₂O",
        "Zn(Hg) / conc. HCl",
        "KMnO₄ / KOH followed by H⁺"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      topicTested: "Stephen Reduction of Nitriles",
      conceptTested: "SnCl₂/HCl reduction of nitriles to aldimine followed by hydrolysis",
      explanation: "Benzonitrile (C₆H₅–C≡N) is converted to benzaldehyde (C₆H₅–CHO) via the Stephen reduction using SnCl₂ + conc. HCl to form an aldimine hydrochloride intermediate [C₆H₅–CH=NH·HCl], which upon steam distillation/hydrolysis yields benzaldehyde.\n(Note: LiAlH₄ would reduce benzonitrile all the way to benzylamine C₆H₅CH₂NH₂)."
    }
  ],

  // Topic 2: Important Reactions, Tests & Named Reactions
  topic2Practice: [
    {
      id: "prac-akc-t2-1",
      question: "Which of the following compounds will give a yellow precipitate of iodoform (CHI₃) when warmed with I₂ and aqueous NaOH?",
      options: [
        "Pentan-3-one",
        "3-Methylbutan-2-one",
        "Benzaldehyde",
        "Methanol"
      ],
      correctAnswer: 1,
      correctAnswerIndex: 1,
      difficulty: "Easy",
      topicTested: "Haloform (Iodoform) Reaction",
      conceptTested: "CH₃–CO– methyl ketone requirement for positive iodoform test",
      explanation: "3-Methylbutan-2-one [CH₃–CO–CH(CH₃)₂] is a methyl ketone containing the CH₃–C(=O)– group. It undergoes base-catalyzed tri-iodination followed by nucleophilic cleavage to yield a yellow crystalline precipitate of iodoform (CHI₃) and sodium isobutyrate.\nPentan-3-one, Benzaldehyde, and Methanol lack the CH₃CO– or CH₃CH(OH)– grouping and give negative tests."
    },
    {
      id: "prac-akc-t2-2",
      question: "In the Crossed Cannizzaro reaction between Benzaldehyde and Formaldehyde in concentrated NaOH, the products formed are:",
      options: [
        "Sodium benzoate and Methanol",
        "Benzyl alcohol and Sodium formate",
        "Sodium benzoate and Sodium formate",
        "Benzyl alcohol and Methanol"
      ],
      correctAnswer: 1,
      correctAnswerIndex: 1,
      difficulty: "Medium",
      topicTested: "Crossed Cannizzaro Reaction",
      conceptTested: "Preferential nucleophilic attack on more electrophilic formaldehyde",
      explanation: "Formaldehyde (HCHO) is sterically unhindered and significantly more electrophilic than benzaldehyde (where C=O is conjugated with the aromatic ring). Therefore, OH⁻ attacks HCHO preferentially to form a gem-diolate intermediate, which transfers a hydride ion (:H⁻) to benzaldehyde. Thus, Formaldehyde is OXIDISED to Sodium formate (HCOONa), and Benzaldehyde is REDUCED to Benzyl alcohol (C₆H₅CH₂OH)."
    },
    {
      id: "prac-akc-t2-3",
      question: "Which of the following statements regarding Fehling's test is INCORRECT?",
      options: [
        "Fehling A contains aqueous copper sulphate solution",
        "Fehling B contains alkaline sodium potassium tartrate (Rochelle salt)",
        "Acetaldehyde reduces Fehling's solution to form a brick-red precipitate of Cu₂O",
        "Benzaldehyde readily reduces Fehling's solution to give a brick-red precipitate"
      ],
      correctAnswer: 3,
      correctAnswerIndex: 3,
      difficulty: "Easy",
      topicTested: "Fehling's Test Specificity",
      conceptTested: "Aromatic aldehydes do NOT reduce Fehling's solution",
      explanation: "Statement 4 is INCORRECT. Benzaldehyde (C₆H₅CHO) is an aromatic aldehyde and DOES NOT reduce Fehling's solution because the carbonyl carbon is resonance-stabilized by the benzene ring, making it resistant to oxidation by the mild Cu²⁺ tartrate complex. Aliphatic aldehydes like acetaldehyde reduce it rapidly."
    },
    {
      id: "prac-akc-t2-4",
      question: "When propanal is treated with dilute NaOH, the aldol addition product formed before dehydration is:",
      options: [
        "3-Hydroxyhexanal",
        "3-Hydroxy-2-methylpentanal",
        "2-Methylpent-2-enal",
        "4-Hydroxyhexanal"
      ],
      correctAnswer: 1,
      correctAnswerIndex: 1,
      difficulty: "Medium",
      topicTested: "Aldol Addition Mechanism",
      conceptTested: "Enolate formation at the α-carbon of propanal",
      explanation: "In propanal (CH₃–CH₂–CHO), the α-carbon is C-2 (bearing two α-hydrogens). Deprotonation by OH⁻ generates the enolate [CH₃–C⁻H–CHO]. This carbanion attacks the carbonyl carbon of a second propanal molecule:\nCH₃–CH₂–CHO + CH₃–C⁻H–CHO ⟶ CH₃–CH₂–CH(O⁻)–CH(CH₃)–CHO xrightarrow{H₂O} CH₃–CH₂–CH(OH)–CH(CH₃)–CHO.\nThe IUPAC name is 3-Hydroxy-2-methylpentanal."
    },
    {
      id: "prac-akc-t2-5",
      question: "To convert 4-oxopentanoic acid [CH₃–CO–CH₂CH₂–COOH] to pentanoic acid [CH₃CH₂CH₂CH₂COOH], the preferred reagent is:",
      options: [
        "Zn(Hg) / conc. HCl (Clemmensen Reduction)",
        "NH₂NH₂ / KOH in ethylene glycol, heat (Wolff-Kishner Reduction)",
        "LiAlH₄ in dry ether",
        "NaBH₄ in ethanol"
      ],
      correctAnswer: 1,
      correctAnswerIndex: 1,
      difficulty: "Medium",
      topicTested: "Reagent Selectivity in Carbonyl Deoxygenation",
      conceptTested: "Wolff-Kishner reduction for selective deoxygenation of keto-acids",
      explanation: "4-Oxopentanoic acid contains a keto group (>C=O) and a carboxylic acid group (–COOH). Wolff-Kishner reduction [NH₂NH₂ / KOH / ethylene glycol, Δ] specifically deoxygenates the ketone carbonyl to a methylene group (>CH₂) while leaving the carboxylate salt intact in basic medium. Acid workup yields pentanoic acid.\n(Note: Clemmensen uses strong conc. HCl which may cause side reactions, and LiAlH₄/NaBH₄ would reduce the ketone to an alcohol rather than deoxygenating to alkane)."
    }
  ],

  // Topic 3: Carboxylic Acids — Acidity, Preparation & Reactions
  topic3Practice: [
    {
      id: "prac-akc-t3-1",
      question: "Which of the following substituted benzoic acids is the STRONGEST acid?",
      options: [
        "o-Nitrobenzoic acid (pKₐ = 2.17)",
        "p-Nitrobenzoic acid (pKₐ = 3.44)",
        "m-Nitrobenzoic acid (pKₐ = 3.45)",
        "Benzoic acid (pKₐ = 4.20)"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      topicTested: "Ortho Effect in Substituted Benzoic Acids",
      conceptTested: "Ortho-substituted benzoic acids are stronger than meta and para isomers",
      explanation: "Due to the Ortho Effect (steric inhibition of resonance), ortho-substituted benzoic acids are always stronger acids than benzoic acid and their meta/para isomers. In o-nitrobenzoic acid, steric hindrance twists the –COOH group out of the benzene plane, suppressing destabilizing cross-conjugation while allowing the strong -I and -M effects of the ortho-NO₂ group to maximally stabilize the carboxylate anion."
    },
    {
      id: "prac-akc-t3-2",
      question: "In the Fischer esterification reaction between ethanoic acid and methanol containing isotopic ¹⁸O (CH₃–¹⁸OH) in the presence of concentrated H₂SO₄, the ¹⁸O isotope will be present in:",
      options: [
        "Methyl ethanoate (Ester) only",
        "Water (H₂O) only",
        "Equally distributed between ester and water",
        "Unreacted ethanoic acid"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Mechanism of Fischer Esterification",
      conceptTested: "Nucleophilic acyl substitution: –OH lost from acid, –H lost from alcohol",
      explanation: "In Fischer esterification, the mechanism involves nucleophilic attack of the alcohol oxygen onto the protonated carboxylic acid carbonyl carbon. During elimination of water from the tetrahedral intermediate, the –OH group is lost from the carboxylic acid, while the alcohol retains its C–O bond. Therefore, the ¹⁸O label from CH₃–¹⁸O–H remains completely incorporated in the ester (CH₃–CO–¹⁸OCH₃)."
    },
    {
      id: "prac-akc-t3-3",
      question: "Which of the following carboxylic acids will give a positive Hell-Volhard-Zelinsky (HVZ) reaction with Br₂ / Red P?",
      options: [
        "Formic acid (HCOOH)",
        "Benzoic acid (C₆H₅COOH)",
        "2,2-Dimethylbutanoic acid",
        "2-Methylbutanoic acid"
      ],
      correctAnswer: 3,
      correctAnswerIndex: 3,
      difficulty: "Medium",
      topicTested: "Hell-Volhard-Zelinsky Reaction Requirements",
      conceptTested: "Presence of α-hydrogen in aliphatic carboxylic acids",
      explanation: "The HVZ reaction selectively brominates the α-carbon of carboxylic acids via an enol intermediate and strictly requires the presence of at least one α-hydrogen.\n• 2-Methylbutanoic acid [CH₃–CH₂–CH(CH₃)–COOH] has one α-hydrogen on C-2 and readily undergoes the HVZ reaction.\n• HCOOH (no α-carbon), C₆H₅COOH (aromatic), and 2,2-dimethylbutanoic acid (quaternary α-carbon with zero α-H) cannot undergo HVZ."
    },
    {
      id: "prac-akc-t3-4",
      question: "What is the major organic product obtained when dry ice (solid CO₂) is added to phenylmagnesium bromide (C₆H₅MgBr) in dry ether followed by acidification with dilute HCl?",
      options: [
        "Benzophenone",
        "Benzoic acid",
        "Benzyl alcohol",
        "Triphenylmethanol"
      ],
      correctAnswer: 1,
      correctAnswerIndex: 1,
      difficulty: "Easy",
      topicTested: "Grignard Synthesis of Carboxylic Acids",
      conceptTested: "Single nucleophilic addition of RMgX on CO₂ yielding carboxylic acid",
      explanation: "Phenylmagnesium bromide acts as a nucleophile (C₆H₅:⁻) and attacks the electrophilic carbon of carbon dioxide (O=C=O) to form the halomagnesium carboxylate [C₆H₅–COO⁻(MgBr)⁺]. Upon acidification with dilute HCl, it hydrolyses to yield Benzoic acid (C₆H₅COOH).\nC₆H₅MgBr + CO₂ ⟶ C₆H₅COOMgBr xrightarrow{H₃O⁺} C₆H₅COOH."
    },
    {
      id: "prac-akc-t3-5",
      question: "The correct order of increasing pKₐ (decreasing acidic strength) for the following acids is:\n(I) Fluoroacetic acid  (II) Chloroacetic acid  (III) Bromoacetic acid  (IV) Acetic acid",
      options: [
        "(I) < (II) < (III) < (IV)",
        "(IV) < (III) < (II) < (I)",
        "(II) < (I) < (III) < (IV)",
        "(I) < (III) < (II) < (IV)"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Electronegativity & Inductive Effect on pKa",
      conceptTested: "Higher acidity corresponds to lower pKa value: F > Cl > Br > H",
      explanation: "Electronegativity order of halogens: F (4.0) > Cl (3.0) > Br (2.8) > H (2.1).\nGreater the electronegativity, stronger the -I inductive withdrawal, greater the stabilization of the carboxylate anion, and stronger the acid (lower the pKₐ).\n\npKₐ values:\n• Fluoroacetic acid (pKₐ = 2.59)\n• Chloroacetic acid (pKₐ = 2.87)\n• Bromoacetic acid (pKₐ = 2.90)\n• Acetic acid (pKₐ = 4.76)\n\nOrder of increasing pKₐ: (I) < (II) < (III) < (IV)."
    }
  ],

  // Comprehensive 30-Question Chapter Assessment (10 Easy, 15 Moderate, 5 Challenge)
  chapterAssessment30: [
    // 10 EASY QUESTIONS
    {
      id: "assess-akc-1",
      question: "Which of the following has the highest boiling point among isomers of molecular formula C₄H₈O₂?",
      options: ["Butanoic acid", "Methyl propanoate", "Ethyl ethanoate", "Propyl methanoate"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      topicTested: "Physical Properties of Carboxylic Acids",
      explanation: "Butanoic acid forms strong intermolecular hydrogen bonds and exists as cyclic dimers, giving it a much higher boiling point (163.5°C) than isomeric esters (bp ~ 55-80°C) which lack O–H bonds."
    },
    {
      id: "assess-akc-2",
      question: "Tollens' reagent is chemically:",
      options: ["Ammoniacal silver nitrate solution", "Alkaline copper sulphate solution", "Acidified potassium dichromate solution", "Alkaline potassium permanganate"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      topicTested: "Tollens' Reagent Composition",
      explanation: "Tollens' reagent is an ammoniacal solution of silver nitrate containing the complex cation [Ag(NH₃)₂]⁺ OH⁻."
    },
    {
      id: "assess-akc-3",
      question: "Which reagent converts an acid chloride (RCOCl) into an aldehyde (RCHO)?",
      options: ["H₂ / Pd–BaSO₄, Quinoline", "LiAlH₄ / dry ether", "SnCl₂ / conc. HCl", "Zn(Hg) / conc. HCl"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      topicTested: "Rosenmund Reduction",
      explanation: "Rosenmund reduction uses H₂ over Pd supported on BaSO₄ and poisoned with sulfur/quinoline to selectively reduce RCOCl to RCHO without further reduction to alcohol."
    },
    {
      id: "assess-akc-4",
      question: "The IUPAC name of (CH₃)₂CH–CHO is:",
      options: ["2-Methylpropanal", "Isobutyraldehyde", "Butanal", "2-Methylpropan-1-one"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      topicTested: "Nomenclature of Aldehydes",
      explanation: "Longest continuous carbon chain containing –CHO has 3 carbons (propanal) with a methyl substituent at C-2: 2-Methylpropanal."
    },
    {
      id: "assess-akc-5",
      question: "The active electrophile in Gattermann-Koch reaction is:",
      options: ["Formyl cation [H–C⁺=O]", "Dichlorocarbene [:CCl₂]", "Acylium ion [CH₃–C⁺=O]", "Carbon monoxide [:C≡O:]"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      topicTested: "Gattermann-Koch Reaction",
      explanation: "CO + HCl in presence of anhydrous AlCl₃ generates formyl chloride [HCOCl], which produces the formyl cation [H–C⁺=O] that attacks benzene."
    },
    {
      id: "assess-akc-6",
      question: "Which of the following compounds gives a positive iodoform test?",
      options: ["Ethanol", "Methanol", "Pentan-3-one", "Benzaldehyde"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      topicTested: "Haloform Test",
      explanation: "Ethanol (CH₃CH₂OH) contains the CH₃CH(OH)– group and is oxidised in situ to ethanal, which gives a positive yellow CHI₃ precipitate."
    },
    {
      id: "assess-akc-7",
      question: "The hybridization of the carbonyl carbon atom in aldehydes and ketones is:",
      options: ["sp²", "sp³", "sp", "dsp²"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      topicTested: "Structure and Bonding of Carbonyl Group",
      explanation: "The carbonyl carbon forms 3 σ-bonds and 1 π-bond, utilizing sp² hybrid orbitals in a planar trigonal arrangement with 120° bond angles."
    },
    {
      id: "assess-akc-8",
      question: "Which gas is evolved with brisk effervescence when ethanoic acid is treated with aqueous sodium bicarbonate?",
      options: ["Carbon dioxide (CO₂)", "Hydrogen (H₂)", "Carbon monoxide (CO)", "Methane (CH₄)"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      topicTested: "Sodium Bicarbonate Test",
      explanation: "CH₃COOH + NaHCO₃ ⟶ CH₃COONa + H₂O + CO₂↑ (Brisk effervescence of CO₂ gas)."
    },
    {
      id: "assess-akc-9",
      question: "Soda lime is a mixture of:",
      options: ["NaOH and CaO in 3:1 ratio", "Na₂CO₃ and CaO in 1:1 ratio", "KOH and CaO in 3:1 ratio", "NaOH and CaCO₃ in 2:1 ratio"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      topicTested: "Decarboxylation Reagent",
      explanation: "Soda lime is a solid mixture of caustic soda (NaOH) and quicklime (CaO) in a 3:1 ratio by weight."
    },
    {
      id: "assess-akc-10",
      question: "Reaction of acetaldehyde with 2,4-dinitrophenylhydrazine (2,4-DNP) gives a precipitate of colour:",
      options: ["Yellow-Orange", "Deep Blue", "Silver", "Colourless"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Easy",
      topicTested: "Brady's Reagent Test",
      explanation: "Aldehydes and ketones react with 2,4-DNP (Brady's reagent) to form crystalline 2,4-dinitrophenylhydrazones having characteristic yellow, orange, or red colour."
    },

    // 15 MODERATE QUESTIONS
    {
      id: "assess-akc-11",
      question: "Arrange the following in increasing order of reactivity towards nucleophilic addition:\n(I) Acetone  (II) Acetaldehyde  (III) Benzaldehyde  (IV) Formaldehyde",
      options: [
        "(I) < (III) < (II) < (IV)",
        "(III) < (I) < (II) < (IV)",
        "(IV) < (II) < (III) < (I)",
        "(I) < (II) < (III) < (IV)"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Reactivity Order in Nucleophilic Addition",
      explanation: "Reactivity decreases with greater +I electronic donation, resonance stabilization (+R), and steric crowding: Acetone (two +I methyls, steric crowd) < Benzaldehyde (resonance stabilization by ring) < Acetaldehyde (one methyl) < Formaldehyde (least crowded, zero +I alkyls)."
    },
    {
      id: "assess-akc-12",
      question: "The Etard reaction converts toluene into benzaldehyde using:",
      options: ["Chromyl chloride in CS₂", "Alkaline KMnO₄", "CrO₃ in conc. H₂SO₄", "Acidified K₂Cr₂O₇"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Etard Reaction Reagent",
      explanation: "Etard reaction uses chromyl chloride (CrO₂Cl₂) dissolved in non-polar solvent CS₂ or CCl₄ to form a brown chromium complex, which on aqueous hydrolysis gives benzaldehyde cleanly."
    },
    {
      id: "assess-akc-13",
      question: "Crossed aldol condensation of benzaldehyde and acetone in dilute NaOH produces:",
      options: ["4-Phenylbut-3-en-2-one (Benzalacetone)", "3-Hydroxy-3-phenylpropanal", "1,3-Diphenylprop-2-en-1-one", "Benzyl alcohol and sodium acetate"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Claisen-Schmidt Crossed Aldol Condensation",
      explanation: "Benzaldehyde (no α-H) reacts with the enolate of acetone (CH₃–CO–CH₂⁻) to give 4-hydroxy-4-phenylbutan-2-one, which undergoes spontaneous dehydration on heating to form 4-phenylbut-3-en-2-one (Benzalacetone)."
    },
    {
      id: "assess-akc-14",
      question: "What is the product formed when sodium propanoate is heated with soda lime?",
      options: ["Ethane", "Propane", "Methane", "Butane"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Soda-Lime Decarboxylation",
      explanation: "CH₃CH₂COONa + NaOH xrightarrow[Δ]{CaO} CH₃–CH₃ (Ethane) + Na₂CO₃. Decarboxylation shortens the carbon chain by one carbon."
    },
    {
      id: "assess-akc-15",
      question: "Which of the following compounds will give a positive Cannizzaro reaction?",
      options: ["2,2-Dimethylpropanal", "2-Methylpropanal", "Propanal", "Butan-2-one"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Cannizzaro Reaction Substrate Requirements",
      explanation: "2,2-Dimethylpropanal [(CH₃)₃C–CHO / Pivalaldehyde] is an aldehyde having zero α-hydrogens. In 50% conc. NaOH, it disproportionates into 2,2-dimethylpropan-1-ol and sodium 2,2-dimethylpropanoate."
    },
    {
      id: "assess-akc-16",
      question: "Which of the following reagents selectively reduces an ester (RCOOR') into an aldehyde (RCHO) at -78°C?",
      options: ["DIBAL-H (Diisobutylaluminium hydride)", "LiAlH₄", "NaBH₄", "H₂ / Raney Ni"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Selective Reduction with DIBAL-H",
      explanation: "DIBAL-H at 195 K (-78°C) selectively reduces esters and nitriles to aldehydes, stopping cleanly at the aldehyde stage upon low-temperature aqueous quench."
    },
    {
      id: "assess-akc-17",
      question: "The Hell-Volhard-Zelinsky (HVZ) reaction of propanoic acid with Br₂ / Red P followed by H₂O yields:",
      options: ["2-Bromopropanoic acid", "3-Bromopropanoic acid", "2,2-Dibromopropanoic acid", "Propanoyl bromide"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Hell-Volhard-Zelinsky Reaction Product",
      explanation: "HVZ selectively substitutes bromine onto the α-carbon (C-2) of propanoic acid: CH₃CH₂COOH xrightarrow{Br₂ / Red P} CH₃CH(Br)COOH (2-Bromopropanoic acid)."
    },
    {
      id: "assess-akc-18",
      question: "Which of the following carboxylic acids has the LOWEST pKₐ value (is the strongest acid)?",
      options: ["Trifluoroacetic acid (CF₃COOH)", "Trichloroacetic acid (CCl₃COOH)", "Formic acid (HCOOH)", "Benzoic acid (C₆H₅COOH)"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Quantitative Carboxylic Acid Acidity",
      explanation: "CF₃COOH has three extremely electronegative fluorine atoms (-I effect) that maximally stabilize the trifluoroacetate anion, giving pKa = 0.23 (strongest)."
    },
    {
      id: "assess-akc-19",
      question: "An organic compound 'Y' with formula C₃H₆O reduces Fehling's solution and gives a silver mirror with Tollens' reagent. 'Y' on reaction with NH₂OH gives:",
      options: ["Propanal oxime", "Propan-2-one oxime", "Propanoic acid", "Propylamine"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Carbonyl Identification and Ammonia Derivatives",
      explanation: "Since 'Y' reduces both Fehling's and Tollens' reagent, it must be the 3-carbon aldehyde, Propanal (CH₃CH₂CHO). Reaction with hydroxylamine (NH₂OH) yields Propanal oxime [CH₃CH₂CH=N–OH]."
    },
    {
      id: "assess-akc-20",
      question: "Treatment of cyclohexanone with ethylene glycol in the presence of dry HCl gas forms:",
      options: ["A cyclic ethylene ketal (1,4-dioxaspiro[4.5]decane)", "A hemiacetal", "Cyclohexyl ethanoate", "Adipic acid"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Cyclic Ketal Protection",
      explanation: "Ketones react with 1,2-diols (ethylene glycol) in the presence of dry HCl gas to form stable 5-membered cyclic ketals, commonly used as protective groups for carbonyls."
    },
    {
      id: "assess-akc-21",
      question: "Which of the following compounds will give a positive iodoform test upon reaction with I₂ / NaOH?",
      options: ["Pentan-2-one", "Pentan-3-one", "3-Pentanol", "Benzophenone"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Iodoform Distinction between Isomers",
      explanation: "Pentan-2-one (CH₃–CO–CH₂CH₂CH₃) is a methyl ketone and gives yellow CHI₃ precipitate. Pentan-3-one (CH₃CH₂–CO–CH₂CH₃) is a symmetrical ketone and gives a negative test."
    },
    {
      id: "assess-akc-22",
      question: "When butan-2-one is oxidised with hot concentrated HNO₃, the major products according to Popoff's rule are:",
      options: ["Two molecules of ethanoic acid", "Methanoic acid and propanoic acid", "Butanoic acid", "Carbon dioxide and water"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Popoff's Rule in Ketone Oxidation",
      explanation: "Popoff's rule states that the carbonyl carbon preferentially remains with the smaller alkyl group (methyl) during cleavage. Thus, cleavage of CH₃–CO–CH₂CH₃ occurs between C2 and C3 to give two molecules of ethanoic acid (CH₃COOH)."
    },
    {
      id: "assess-akc-23",
      question: "The boiling point of carboxylic acids is higher than alcohols of comparable molecular weight because of:",
      options: ["Stable cyclic dimeric association held by two intermolecular H-bonds", "Higher dipole moment of the C=O bond alone", "Greater London dispersion forces", "Higher ionic character"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Intermolecular Association in Carboxylic Acids",
      explanation: "Carboxylic acids form exceptionally strong intermolecular hydrogen bonds and exist as stable cyclic dimers even in the vapour phase, elevating their boiling points."
    },
    {
      id: "assess-akc-24",
      question: "Which of the following reactions does NOT involve nucleophilic addition?",
      options: [
        "Rosenmund reduction of benzoyl chloride",
        "Addition of HCN to acetone",
        "Addition of NaHSO₃ to acetaldehyde",
        "Formation of oxime from propanone and NH₂OH"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Reaction Classification",
      explanation: "Rosenmund reduction is a catalytic hydrogenation (heterogeneous reduction/hydrogenolysis), not a nucleophilic addition to a carbonyl carbon."
    },
    {
      id: "assess-akc-25",
      question: "The reagent that can distinguish between Acetaldehyde and Benzaldehyde is:",
      options: ["Fehling's solution", "Tollens' reagent", "2,4-DNP reagent", "Sodium bisulfite solution"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Medium",
      topicTested: "Distinction between Aliphatic and Aromatic Aldehydes",
      explanation: "Acetaldehyde (aliphatic) reduces Fehling's solution to give a brick-red Cu₂O precipitate, whereas Benzaldehyde (aromatic) gives a negative Fehling's test. Both respond to Tollens', 2,4-DNP, and NaHSO₃."
    },

    // 5 CHALLENGE QUESTIONS
    {
      id: "assess-akc-26",
      question: "An organic compound 'P' (C₇H₆O) on treatment with 50% aqueous NaOH gives two compounds 'Q' and 'R'. 'Q' on oxidation with acidic KMnO₄ gives 'R'. Compound 'P' is:",
      options: ["Benzaldehyde", "o-Cresol", "Benzyl alcohol", "Acetophenone"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Hard",
      topicTested: "Disproportionation and Multi-step Reasoning",
      explanation: "Compound 'P' is Benzaldehyde (C₆H₅CHO, C₇H₆O). Having no α-H, in 50% NaOH it undergoes Cannizzaro reaction to yield 'Q' (Benzyl alcohol, C₆H₅CH₂OH) and 'R' (Sodium benzoate / Benzoic acid, C₆H₅COOH). Vigorous oxidation of 'Q' (benzyl alcohol) with acidic KMnO₄ yields 'R' (benzoic acid)."
    },
    {
      id: "assess-akc-27",
      question: "In the reaction sequence:\nCH₃–C≡CH xrightarrow[333 K]{Hg²⁺ / H₂SO₄} [A] xrightarrow{CH₃MgBr / H₃O⁺} [B] xrightarrow[573 K]{Cu} [C]\nThe compound [C] is:",
      options: ["2-Methylpropene", "But-2-ene", "2-Methylpropan-2-ol", "Butan-2-one"],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Hard",
      topicTested: "Multi-Step Organic Conversion Pathway",
      explanation: "Step 1: Propyne + Hg²⁺/H₂SO₄ (Kucherov hydration) gives [A] = Acetone (CH₃COCH₃).\nStep 2: Acetone + CH₃MgBr followed by H₃O⁺ gives [B] = 2-Methylpropan-2-ol (tert-butanol, a 3° alcohol).\nStep 3: tert-Butanol over heated Cu at 573 K undergoes catalytic DEHYDRATION (not dehydrogenation) to yield [C] = 2-Methylpropene [CH₂=C(CH₃)₂]."
    },
    {
      id: "assess-akc-28",
      question: "The correct order of acidic strength for the following substituted benzoic acids is:\n(I) o-Methoxybenzoic acid  (II) p-Methoxybenzoic acid  (III) m-Methoxybenzoic acid  (IV) Benzoic acid",
      options: [
        "(I) > (III) > (IV) > (II)",
        "(I) > (II) > (III) > (IV)",
        "(III) > (I) > (IV) > (II)",
        "(IV) > (III) > (II) > (I)"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Hard",
      topicTested: "Ortho Effect vs Inductive (-I) vs Mesomeric (+M) Effects",
      explanation: "1. (I) o-Methoxybenzoic acid is the STRONGEST due to the Ortho Effect.\n2. (III) m-Methoxybenzoic acid has only -I effect operating at the meta position (-I > +M=0), making it stronger than benzoic acid.\n3. (IV) Benzoic acid is un-substituted.\n4. (II) p-Methoxybenzoic acid has a powerful +M electron-donating effect at the para position (+M > -I) that destabilizes the carboxylate anion, making it the weakest.\nHence: (I) > (III) > (IV) > (II)."
    },
    {
      id: "assess-akc-29",
      question: "Consider the compound: O=CH–CH₂–CH₂–CO–CH₃. On treatment with dilute NaOH followed by heating, the major intramolecular aldol condensation product formed is:",
      options: [
        "3-Methylcyclopent-2-en-1-one",
        "2-Methylcyclopent-2-en-1-one",
        "Cyclohex-2-en-1-one",
        "2-Acetylcyclobutanone"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Hard",
      topicTested: "Intramolecular Aldol Condensation Regioselectivity",
      explanation: "In 4-oxopentanal / 5-oxohexanal, deprotonation at the terminal methyl group of the ketone gives an enolate [:⁻CH₂–CO–CH₂CH₂CHO] that attacks the more electrophilic aldehyde carbon (C-1) in a 5-exo-trig cyclization to form a stable 5-membered ring (3-hydroxy-3-methylcyclopentan-1-one), which upon dehydration yields 3-Methylcyclopent-2-en-1-one."
    },
    {
      id: "assess-akc-30",
      question: "When Chloral (CCl₃–CHO) is treated with concentrated aqueous NaOH, the reaction proceeds via:",
      options: [
        "Nucleophilic addition of OH⁻ followed by cleavage of C–C bond to give Chloroform (CHCl₃) and Sodium formate",
        "Standard Cannizzaro hydride shift to give 2,2,2-trichloroethanol",
        "Aldol condensation via enolate intermediate",
        "Elimination of HCl to form dichloroketene"
      ],
      correctAnswer: 0,
      correctAnswerIndex: 0,
      difficulty: "Hard",
      topicTested: "Haloform Cleavage Mechanism on Chloral",
      explanation: "Because the –CCl₃ carbanion is an exceptionally good leaving group stabilized by three -I chlorine atoms, attack of OH⁻ on the carbonyl carbon of chloral produces a tetrahedral gem-diolate that undergoes facile C–C bond cleavage yielding Chloroform (CHCl₃) and Sodium formate (HCOONa) rather than transferring hydride in a Cannizzaro pathway."
    }
  ]
};
