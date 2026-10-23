// Part 2: Q126 to Q250 (Medium: 125 MCQs)
// Chapter: Amines & Diazonium Salts (ID: amines) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const AMINES_PART2_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "amn-mcq-126",
    "questionNumber": 126,
    "question": "Q126. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "C": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-127",
    "questionNumber": 127,
    "question": "Q127. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanate ($R-NCO$)",
      "C": "Isocyanide (Carbylamine, $R-NC$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Isocyanide (Carbylamine, $R-NC$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-128",
    "questionNumber": 128,
    "question": "Q128. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-129",
    "questionNumber": 129,
    "question": "Q129. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "B": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "C": "A foul-smelling gas",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-130",
    "questionNumber": 130,
    "question": "Q130. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Benzene",
      "C": "Chlorobenzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Phenol",
      "Benzene",
      "Chlorobenzene",
      "Aniline"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-131",
    "questionNumber": 131,
    "question": "Q131. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "C": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-132",
    "questionNumber": 132,
    "question": "Q132. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanate ($R-NCO$)",
      "C": "Amide ($R-CONH_2$)",
      "D": "Isocyanide (Carbylamine, $R-NC$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)",
      "Isocyanide (Carbylamine, $R-NC$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-133",
    "questionNumber": 133,
    "question": "Q133. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-134",
    "questionNumber": 134,
    "question": "Q134. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "C": "A foul-smelling gas",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-135",
    "questionNumber": 135,
    "question": "Q135. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Chlorobenzene",
      "C": "Benzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Phenol",
      "Chlorobenzene",
      "Benzene",
      "Aniline"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET 2024",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2024"
    }
  },
  {
    "id": "amn-mcq-136",
    "questionNumber": 136,
    "question": "Q136. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "C": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$",
      "D": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-137",
    "questionNumber": 137,
    "question": "Q137. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Isocyanide (Carbylamine, $R-NC$)",
      "B": "Cyanide (Nitrile, $R-CN$)",
      "C": "Isocyanate ($R-NCO$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Isocyanide (Carbylamine, $R-NC$)",
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-138",
    "questionNumber": 138,
    "question": "Q138. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-139",
    "questionNumber": 139,
    "question": "Q139. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "A foul-smelling gas",
      "C": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-140",
    "questionNumber": 140,
    "question": "Q140. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Chlorobenzene",
      "C": "Aniline",
      "D": "Benzene"
    },
    "optionsList": [
      "Phenol",
      "Chlorobenzene",
      "Aniline",
      "Benzene"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-141",
    "questionNumber": 141,
    "question": "Q141. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "B": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "C": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-142",
    "questionNumber": 142,
    "question": "Q142. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanide (Carbylamine, $R-NC$)",
      "C": "Isocyanate ($R-NCO$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanide (Carbylamine, $R-NC$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-143",
    "questionNumber": 143,
    "question": "Q143. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-144",
    "questionNumber": 144,
    "question": "Q144. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "A foul-smelling gas",
      "C": "Completely unreactive towards alkali",
      "D": "Soluble in aqueous potassium hydroxide ($KOH$)"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali",
      "Soluble in aqueous potassium hydroxide ($KOH$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-145",
    "questionNumber": 145,
    "question": "Q145. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Benzene",
      "B": "Phenol",
      "C": "Chlorobenzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Benzene",
      "Phenol",
      "Chlorobenzene",
      "Aniline"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-146",
    "questionNumber": 146,
    "question": "Q146. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "C": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-147",
    "questionNumber": 147,
    "question": "Q147. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanate ($R-NCO$)",
      "C": "Isocyanide (Carbylamine, $R-NC$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Isocyanide (Carbylamine, $R-NC$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-148",
    "questionNumber": 148,
    "question": "Q148. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-149",
    "questionNumber": 149,
    "question": "Q149. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "B": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "C": "A foul-smelling gas",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-150",
    "questionNumber": 150,
    "question": "Q150. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Benzene",
      "C": "Chlorobenzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Phenol",
      "Benzene",
      "Chlorobenzene",
      "Aniline"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET 2023",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2023"
    }
  },
  {
    "id": "amn-mcq-151",
    "questionNumber": 151,
    "question": "Q151. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "C": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-152",
    "questionNumber": 152,
    "question": "Q152. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanate ($R-NCO$)",
      "C": "Amide ($R-CONH_2$)",
      "D": "Isocyanide (Carbylamine, $R-NC$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)",
      "Isocyanide (Carbylamine, $R-NC$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-153",
    "questionNumber": 153,
    "question": "Q153. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-154",
    "questionNumber": 154,
    "question": "Q154. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "C": "A foul-smelling gas",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-155",
    "questionNumber": 155,
    "question": "Q155. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Chlorobenzene",
      "C": "Benzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Phenol",
      "Chlorobenzene",
      "Benzene",
      "Aniline"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-156",
    "questionNumber": 156,
    "question": "Q156. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "C": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$",
      "D": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-157",
    "questionNumber": 157,
    "question": "Q157. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Isocyanide (Carbylamine, $R-NC$)",
      "B": "Cyanide (Nitrile, $R-CN$)",
      "C": "Isocyanate ($R-NCO$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Isocyanide (Carbylamine, $R-NC$)",
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-158",
    "questionNumber": 158,
    "question": "Q158. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-159",
    "questionNumber": 159,
    "question": "Q159. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "A foul-smelling gas",
      "C": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-160",
    "questionNumber": 160,
    "question": "Q160. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Chlorobenzene",
      "C": "Aniline",
      "D": "Benzene"
    },
    "optionsList": [
      "Phenol",
      "Chlorobenzene",
      "Aniline",
      "Benzene"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-161",
    "questionNumber": 161,
    "question": "Q161. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "B": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "C": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-162",
    "questionNumber": 162,
    "question": "Q162. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanide (Carbylamine, $R-NC$)",
      "C": "Isocyanate ($R-NCO$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanide (Carbylamine, $R-NC$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-163",
    "questionNumber": 163,
    "question": "Q163. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-164",
    "questionNumber": 164,
    "question": "Q164. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "A foul-smelling gas",
      "C": "Completely unreactive towards alkali",
      "D": "Soluble in aqueous potassium hydroxide ($KOH$)"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali",
      "Soluble in aqueous potassium hydroxide ($KOH$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-165",
    "questionNumber": 165,
    "question": "Q165. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Benzene",
      "B": "Phenol",
      "C": "Chlorobenzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Benzene",
      "Phenol",
      "Chlorobenzene",
      "Aniline"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET 2022",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2022"
    }
  },
  {
    "id": "amn-mcq-166",
    "questionNumber": 166,
    "question": "Q166. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "C": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-167",
    "questionNumber": 167,
    "question": "Q167. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanate ($R-NCO$)",
      "C": "Isocyanide (Carbylamine, $R-NC$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Isocyanide (Carbylamine, $R-NC$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-168",
    "questionNumber": 168,
    "question": "Q168. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-169",
    "questionNumber": 169,
    "question": "Q169. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "B": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "C": "A foul-smelling gas",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-170",
    "questionNumber": 170,
    "question": "Q170. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Benzene",
      "C": "Chlorobenzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Phenol",
      "Benzene",
      "Chlorobenzene",
      "Aniline"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-171",
    "questionNumber": 171,
    "question": "Q171. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "C": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-172",
    "questionNumber": 172,
    "question": "Q172. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanate ($R-NCO$)",
      "C": "Amide ($R-CONH_2$)",
      "D": "Isocyanide (Carbylamine, $R-NC$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)",
      "Isocyanide (Carbylamine, $R-NC$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-173",
    "questionNumber": 173,
    "question": "Q173. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-174",
    "questionNumber": 174,
    "question": "Q174. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "C": "A foul-smelling gas",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-175",
    "questionNumber": 175,
    "question": "Q175. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Chlorobenzene",
      "C": "Benzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Phenol",
      "Chlorobenzene",
      "Benzene",
      "Aniline"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-176",
    "questionNumber": 176,
    "question": "Q176. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "C": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$",
      "D": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-177",
    "questionNumber": 177,
    "question": "Q177. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Isocyanide (Carbylamine, $R-NC$)",
      "B": "Cyanide (Nitrile, $R-CN$)",
      "C": "Isocyanate ($R-NCO$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Isocyanide (Carbylamine, $R-NC$)",
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-178",
    "questionNumber": 178,
    "question": "Q178. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-179",
    "questionNumber": 179,
    "question": "Q179. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "A foul-smelling gas",
      "C": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-180",
    "questionNumber": 180,
    "question": "Q180. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Chlorobenzene",
      "C": "Aniline",
      "D": "Benzene"
    },
    "optionsList": [
      "Phenol",
      "Chlorobenzene",
      "Aniline",
      "Benzene"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET 2021",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2021"
    }
  },
  {
    "id": "amn-mcq-181",
    "questionNumber": 181,
    "question": "Q181. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "B": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "C": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-182",
    "questionNumber": 182,
    "question": "Q182. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanide (Carbylamine, $R-NC$)",
      "C": "Isocyanate ($R-NCO$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanide (Carbylamine, $R-NC$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-183",
    "questionNumber": 183,
    "question": "Q183. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-184",
    "questionNumber": 184,
    "question": "Q184. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "A foul-smelling gas",
      "C": "Completely unreactive towards alkali",
      "D": "Soluble in aqueous potassium hydroxide ($KOH$)"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali",
      "Soluble in aqueous potassium hydroxide ($KOH$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-185",
    "questionNumber": 185,
    "question": "Q185. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Benzene",
      "B": "Phenol",
      "C": "Chlorobenzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Benzene",
      "Phenol",
      "Chlorobenzene",
      "Aniline"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-186",
    "questionNumber": 186,
    "question": "Q186. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "C": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-187",
    "questionNumber": 187,
    "question": "Q187. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanate ($R-NCO$)",
      "C": "Isocyanide (Carbylamine, $R-NC$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Isocyanide (Carbylamine, $R-NC$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-188",
    "questionNumber": 188,
    "question": "Q188. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-189",
    "questionNumber": 189,
    "question": "Q189. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "B": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "C": "A foul-smelling gas",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-190",
    "questionNumber": 190,
    "question": "Q190. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Benzene",
      "C": "Chlorobenzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Phenol",
      "Benzene",
      "Chlorobenzene",
      "Aniline"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-191",
    "questionNumber": 191,
    "question": "Q191. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "C": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-192",
    "questionNumber": 192,
    "question": "Q192. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanate ($R-NCO$)",
      "C": "Amide ($R-CONH_2$)",
      "D": "Isocyanide (Carbylamine, $R-NC$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)",
      "Isocyanide (Carbylamine, $R-NC$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-193",
    "questionNumber": 193,
    "question": "Q193. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-194",
    "questionNumber": 194,
    "question": "Q194. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "C": "A foul-smelling gas",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-195",
    "questionNumber": 195,
    "question": "Q195. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Chlorobenzene",
      "C": "Benzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Phenol",
      "Chlorobenzene",
      "Benzene",
      "Aniline"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET 2020",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2020"
    }
  },
  {
    "id": "amn-mcq-196",
    "questionNumber": 196,
    "question": "Q196. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "C": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$",
      "D": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-197",
    "questionNumber": 197,
    "question": "Q197. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Isocyanide (Carbylamine, $R-NC$)",
      "B": "Cyanide (Nitrile, $R-CN$)",
      "C": "Isocyanate ($R-NCO$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Isocyanide (Carbylamine, $R-NC$)",
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-198",
    "questionNumber": 198,
    "question": "Q198. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-199",
    "questionNumber": 199,
    "question": "Q199. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "A foul-smelling gas",
      "C": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-200",
    "questionNumber": 200,
    "question": "Q200. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Chlorobenzene",
      "C": "Aniline",
      "D": "Benzene"
    },
    "optionsList": [
      "Phenol",
      "Chlorobenzene",
      "Aniline",
      "Benzene"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-201",
    "questionNumber": 201,
    "question": "Q201. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "B": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "C": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-202",
    "questionNumber": 202,
    "question": "Q202. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanide (Carbylamine, $R-NC$)",
      "C": "Isocyanate ($R-NCO$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanide (Carbylamine, $R-NC$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-203",
    "questionNumber": 203,
    "question": "Q203. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-204",
    "questionNumber": 204,
    "question": "Q204. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "A foul-smelling gas",
      "C": "Completely unreactive towards alkali",
      "D": "Soluble in aqueous potassium hydroxide ($KOH$)"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali",
      "Soluble in aqueous potassium hydroxide ($KOH$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-205",
    "questionNumber": 205,
    "question": "Q205. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Benzene",
      "B": "Phenol",
      "C": "Chlorobenzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Benzene",
      "Phenol",
      "Chlorobenzene",
      "Aniline"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-206",
    "questionNumber": 206,
    "question": "Q206. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "C": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-207",
    "questionNumber": 207,
    "question": "Q207. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanate ($R-NCO$)",
      "C": "Isocyanide (Carbylamine, $R-NC$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Isocyanide (Carbylamine, $R-NC$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-208",
    "questionNumber": 208,
    "question": "Q208. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-209",
    "questionNumber": 209,
    "question": "Q209. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "B": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "C": "A foul-smelling gas",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-210",
    "questionNumber": 210,
    "question": "Q210. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Benzene",
      "C": "Chlorobenzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Phenol",
      "Benzene",
      "Chlorobenzene",
      "Aniline"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET 2019",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2019"
    }
  },
  {
    "id": "amn-mcq-211",
    "questionNumber": 211,
    "question": "Q211. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "C": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-212",
    "questionNumber": 212,
    "question": "Q212. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanate ($R-NCO$)",
      "C": "Amide ($R-CONH_2$)",
      "D": "Isocyanide (Carbylamine, $R-NC$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)",
      "Isocyanide (Carbylamine, $R-NC$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-213",
    "questionNumber": 213,
    "question": "Q213. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-214",
    "questionNumber": 214,
    "question": "Q214. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "C": "A foul-smelling gas",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-215",
    "questionNumber": 215,
    "question": "Q215. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Chlorobenzene",
      "C": "Benzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Phenol",
      "Chlorobenzene",
      "Benzene",
      "Aniline"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-216",
    "questionNumber": 216,
    "question": "Q216. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "C": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$",
      "D": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-217",
    "questionNumber": 217,
    "question": "Q217. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Isocyanide (Carbylamine, $R-NC$)",
      "B": "Cyanide (Nitrile, $R-CN$)",
      "C": "Isocyanate ($R-NCO$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Isocyanide (Carbylamine, $R-NC$)",
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-218",
    "questionNumber": 218,
    "question": "Q218. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-219",
    "questionNumber": 219,
    "question": "Q219. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "A foul-smelling gas",
      "C": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-220",
    "questionNumber": 220,
    "question": "Q220. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Chlorobenzene",
      "C": "Aniline",
      "D": "Benzene"
    },
    "optionsList": [
      "Phenol",
      "Chlorobenzene",
      "Aniline",
      "Benzene"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-221",
    "questionNumber": 221,
    "question": "Q221. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "B": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "C": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-222",
    "questionNumber": 222,
    "question": "Q222. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanide (Carbylamine, $R-NC$)",
      "C": "Isocyanate ($R-NCO$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanide (Carbylamine, $R-NC$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-223",
    "questionNumber": 223,
    "question": "Q223. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-224",
    "questionNumber": 224,
    "question": "Q224. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "A foul-smelling gas",
      "C": "Completely unreactive towards alkali",
      "D": "Soluble in aqueous potassium hydroxide ($KOH$)"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali",
      "Soluble in aqueous potassium hydroxide ($KOH$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-225",
    "questionNumber": 225,
    "question": "Q225. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Benzene",
      "B": "Phenol",
      "C": "Chlorobenzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Benzene",
      "Phenol",
      "Chlorobenzene",
      "Aniline"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET 2018",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2018"
    }
  },
  {
    "id": "amn-mcq-226",
    "questionNumber": 226,
    "question": "Q226. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "C": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-227",
    "questionNumber": 227,
    "question": "Q227. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanate ($R-NCO$)",
      "C": "Isocyanide (Carbylamine, $R-NC$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Isocyanide (Carbylamine, $R-NC$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-228",
    "questionNumber": 228,
    "question": "Q228. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-229",
    "questionNumber": 229,
    "question": "Q229. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "B": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "C": "A foul-smelling gas",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-230",
    "questionNumber": 230,
    "question": "Q230. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Benzene",
      "C": "Chlorobenzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Phenol",
      "Benzene",
      "Chlorobenzene",
      "Aniline"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-231",
    "questionNumber": 231,
    "question": "Q231. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "C": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-232",
    "questionNumber": 232,
    "question": "Q232. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanate ($R-NCO$)",
      "C": "Amide ($R-CONH_2$)",
      "D": "Isocyanide (Carbylamine, $R-NC$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)",
      "Isocyanide (Carbylamine, $R-NC$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-233",
    "questionNumber": 233,
    "question": "Q233. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-234",
    "questionNumber": 234,
    "question": "Q234. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "C": "A foul-smelling gas",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-235",
    "questionNumber": 235,
    "question": "Q235. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Chlorobenzene",
      "C": "Benzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Phenol",
      "Chlorobenzene",
      "Benzene",
      "Aniline"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-236",
    "questionNumber": 236,
    "question": "Q236. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "C": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$",
      "D": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-237",
    "questionNumber": 237,
    "question": "Q237. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Isocyanide (Carbylamine, $R-NC$)",
      "B": "Cyanide (Nitrile, $R-CN$)",
      "C": "Isocyanate ($R-NCO$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Isocyanide (Carbylamine, $R-NC$)",
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-238",
    "questionNumber": 238,
    "question": "Q238. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-239",
    "questionNumber": 239,
    "question": "Q239. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "A foul-smelling gas",
      "C": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-240",
    "questionNumber": 240,
    "question": "Q240. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Chlorobenzene",
      "C": "Aniline",
      "D": "Benzene"
    },
    "optionsList": [
      "Phenol",
      "Chlorobenzene",
      "Aniline",
      "Benzene"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET 2017",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2017"
    }
  },
  {
    "id": "amn-mcq-241",
    "questionNumber": 241,
    "question": "Q241. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "B": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "C": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-242",
    "questionNumber": 242,
    "question": "Q242. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanide (Carbylamine, $R-NC$)",
      "C": "Isocyanate ($R-NCO$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanide (Carbylamine, $R-NC$)",
      "Isocyanate ($R-NCO$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-243",
    "questionNumber": 243,
    "question": "Q243. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-244",
    "questionNumber": 244,
    "question": "Q244. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "B": "A foul-smelling gas",
      "C": "Completely unreactive towards alkali",
      "D": "Soluble in aqueous potassium hydroxide ($KOH$)"
    },
    "optionsList": [
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali",
      "Soluble in aqueous potassium hydroxide ($KOH$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-245",
    "questionNumber": 245,
    "question": "Q245. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Benzene",
      "B": "Phenol",
      "C": "Chlorobenzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Benzene",
      "Phenol",
      "Chlorobenzene",
      "Aniline"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-246",
    "questionNumber": 246,
    "question": "Q246. (NEET Medium) The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
    "options": {
      "A": "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "B": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "C": "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "D": "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    },
    "optionsList": [
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBasicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.\n\n2. GIVEN INFORMATION / DATA:\nAqueous solution of methylamines ($CH_3$ series).\n\n3. FORMULA / EQUATION:\nOrder in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).\n\n5. FINAL CONCLUSION:\n$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$.",
    "solutionStructured": {
      "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
      "given": "Aqueous solution of methylamines ($CH_3$ series).",
      "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
      "stepByStep": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
      "finalAnswer": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
      "whyOtherOptionsWrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-247",
    "questionNumber": 247,
    "question": "Q247. (NEET Medium) The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
    "options": {
      "A": "Cyanide (Nitrile, $R-CN$)",
      "B": "Isocyanate ($R-NCO$)",
      "C": "Isocyanide (Carbylamine, $R-NC$)",
      "D": "Amide ($R-CONH_2$)"
    },
    "optionsList": [
      "Cyanide (Nitrile, $R-CN$)",
      "Isocyanate ($R-NCO$)",
      "Isocyanide (Carbylamine, $R-NC$)",
      "Amide ($R-CONH_2$)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbylamine test as a specific diagnostic test for primary amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.\n\n3. FORMULA / EQUATION:\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.\n\n5. FINAL CONCLUSION:\nIsocyanide (Carbylamine, $R-NC$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement.",
    "solutionStructured": {
      "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
      "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
      "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
      "stepByStep": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
      "finalAnswer": "Isocyanide (Carbylamine, $R-NC$)",
      "whyOtherOptionsWrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-248",
    "questionNumber": 248,
    "question": "Q248. (NEET Medium) In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
    "options": {
      "A": "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "B": "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "C": "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$",
      "D": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$"
    },
    "optionsList": [
      "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$",
      "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometry of the Hofmann bromamide degradation reaction.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.\n\n3. FORMULA / EQUATION:\n$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.\n\n5. FINAL CONCLUSION:\n$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nA common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory.",
    "solutionStructured": {
      "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
      "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
      "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
      "stepByStep": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
      "finalAnswer": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
      "whyOtherOptionsWrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Basicity & Synthesis of Amines",
    "topicId": "chem-amines-basicity",
    "subtopic": "Hofmann Degradation, Gabriel Synthesis & Basicity Trends",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-249",
    "questionNumber": 249,
    "question": "Q249. (NEET Medium) Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
    "options": {
      "A": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "B": "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "C": "A foul-smelling gas",
      "D": "Completely unreactive towards alkali"
    },
    "optionsList": [
      "Soluble in aqueous potassium hydroxide ($KOH$)",
      "Insoluble in aqueous potassium hydroxide ($KOH$)",
      "A foul-smelling gas",
      "Completely unreactive towards alkali"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.\n\n2. GIVEN INFORMATION / DATA:\nPrimary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.\n\n3. FORMULA / EQUATION:\n$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.\n\n5. FINAL CONCLUSION:\nSoluble in aqueous potassium hydroxide ($KOH$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSecondary amine product is insoluble in alkali; tertiary amines do not react.",
    "solutionStructured": {
      "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
      "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
      "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
      "stepByStep": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
      "finalAnswer": "Soluble in aqueous potassium hydroxide ($KOH$)",
      "whyOtherOptionsWrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "amn-mcq-250",
    "questionNumber": 250,
    "question": "Q250. (NEET Medium) When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
    "options": {
      "A": "Phenol",
      "B": "Benzene",
      "C": "Chlorobenzene",
      "D": "Aniline"
    },
    "optionsList": [
      "Phenol",
      "Benzene",
      "Chlorobenzene",
      "Aniline"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDeamination (reduction) of arenediazonium salts to parent hydrocarbons.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.\n\n3. FORMULA / EQUATION:\n$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).\n\n5. FINAL CONCLUSION:\nBenzene\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPhenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$.",
    "solutionStructured": {
      "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
      "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
      "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
      "stepByStep": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
      "finalAnswer": "Benzene",
      "whyOtherOptionsWrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Amines & Diazonium Salts",
    "chapterId": "amines",
    "topic": "Distinction Tests & Diazonium Reactions",
    "topicId": "chem-amines-distinction-tests",
    "subtopic": "Carbylamine Test, Hinsberg Test & Azo Dye Coupling",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  }
];
