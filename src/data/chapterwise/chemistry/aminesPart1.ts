// Part 1: Q1 to Q125 (Easy: 125 MCQs)
// Chapter: Amines & Diazonium Salts (ID: amines) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const AMINES_PART1_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "amn-mcq-001",
    "questionNumber": 1,
    "question": "Q1. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-002",
    "questionNumber": 2,
    "question": "Q2. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-003",
    "questionNumber": 3,
    "question": "Q3. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-004",
    "questionNumber": 4,
    "question": "Q4. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-005",
    "questionNumber": 5,
    "question": "Q5. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-006",
    "questionNumber": 6,
    "question": "Q6. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-007",
    "questionNumber": 7,
    "question": "Q7. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-008",
    "questionNumber": 8,
    "question": "Q8. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-009",
    "questionNumber": 9,
    "question": "Q9. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-010",
    "questionNumber": 10,
    "question": "Q10. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-011",
    "questionNumber": 11,
    "question": "Q11. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-012",
    "questionNumber": 12,
    "question": "Q12. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-013",
    "questionNumber": 13,
    "question": "Q13. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-014",
    "questionNumber": 14,
    "question": "Q14. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-015",
    "questionNumber": 15,
    "question": "Q15. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-016",
    "questionNumber": 16,
    "question": "Q16. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-017",
    "questionNumber": 17,
    "question": "Q17. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-018",
    "questionNumber": 18,
    "question": "Q18. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-019",
    "questionNumber": 19,
    "question": "Q19. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-020",
    "questionNumber": 20,
    "question": "Q20. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-021",
    "questionNumber": 21,
    "question": "Q21. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-022",
    "questionNumber": 22,
    "question": "Q22. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-023",
    "questionNumber": 23,
    "question": "Q23. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-024",
    "questionNumber": 24,
    "question": "Q24. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-025",
    "questionNumber": 25,
    "question": "Q25. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-026",
    "questionNumber": 26,
    "question": "Q26. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-027",
    "questionNumber": 27,
    "question": "Q27. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-028",
    "questionNumber": 28,
    "question": "Q28. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-029",
    "questionNumber": 29,
    "question": "Q29. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-030",
    "questionNumber": 30,
    "question": "Q30. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-031",
    "questionNumber": 31,
    "question": "Q31. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-032",
    "questionNumber": 32,
    "question": "Q32. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-033",
    "questionNumber": 33,
    "question": "Q33. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-034",
    "questionNumber": 34,
    "question": "Q34. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-035",
    "questionNumber": 35,
    "question": "Q35. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-036",
    "questionNumber": 36,
    "question": "Q36. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-037",
    "questionNumber": 37,
    "question": "Q37. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-038",
    "questionNumber": 38,
    "question": "Q38. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-039",
    "questionNumber": 39,
    "question": "Q39. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-040",
    "questionNumber": 40,
    "question": "Q40. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-041",
    "questionNumber": 41,
    "question": "Q41. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-042",
    "questionNumber": 42,
    "question": "Q42. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-043",
    "questionNumber": 43,
    "question": "Q43. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-044",
    "questionNumber": 44,
    "question": "Q44. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-045",
    "questionNumber": 45,
    "question": "Q45. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-046",
    "questionNumber": 46,
    "question": "Q46. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-047",
    "questionNumber": 47,
    "question": "Q47. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-048",
    "questionNumber": 48,
    "question": "Q48. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-049",
    "questionNumber": 49,
    "question": "Q49. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-050",
    "questionNumber": 50,
    "question": "Q50. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-051",
    "questionNumber": 51,
    "question": "Q51. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-052",
    "questionNumber": 52,
    "question": "Q52. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-053",
    "questionNumber": 53,
    "question": "Q53. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-054",
    "questionNumber": 54,
    "question": "Q54. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-055",
    "questionNumber": 55,
    "question": "Q55. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-056",
    "questionNumber": 56,
    "question": "Q56. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-057",
    "questionNumber": 57,
    "question": "Q57. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-058",
    "questionNumber": 58,
    "question": "Q58. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-059",
    "questionNumber": 59,
    "question": "Q59. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-060",
    "questionNumber": 60,
    "question": "Q60. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-061",
    "questionNumber": 61,
    "question": "Q61. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-062",
    "questionNumber": 62,
    "question": "Q62. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-063",
    "questionNumber": 63,
    "question": "Q63. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-064",
    "questionNumber": 64,
    "question": "Q64. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-065",
    "questionNumber": 65,
    "question": "Q65. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-066",
    "questionNumber": 66,
    "question": "Q66. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-067",
    "questionNumber": 67,
    "question": "Q67. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-068",
    "questionNumber": 68,
    "question": "Q68. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-069",
    "questionNumber": 69,
    "question": "Q69. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-070",
    "questionNumber": 70,
    "question": "Q70. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-071",
    "questionNumber": 71,
    "question": "Q71. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-072",
    "questionNumber": 72,
    "question": "Q72. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-073",
    "questionNumber": 73,
    "question": "Q73. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-074",
    "questionNumber": 74,
    "question": "Q74. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-075",
    "questionNumber": 75,
    "question": "Q75. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-076",
    "questionNumber": 76,
    "question": "Q76. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-077",
    "questionNumber": 77,
    "question": "Q77. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-078",
    "questionNumber": 78,
    "question": "Q78. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-079",
    "questionNumber": 79,
    "question": "Q79. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-080",
    "questionNumber": 80,
    "question": "Q80. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-081",
    "questionNumber": 81,
    "question": "Q81. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-082",
    "questionNumber": 82,
    "question": "Q82. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-083",
    "questionNumber": 83,
    "question": "Q83. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-084",
    "questionNumber": 84,
    "question": "Q84. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-085",
    "questionNumber": 85,
    "question": "Q85. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-086",
    "questionNumber": 86,
    "question": "Q86. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-087",
    "questionNumber": 87,
    "question": "Q87. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-088",
    "questionNumber": 88,
    "question": "Q88. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-089",
    "questionNumber": 89,
    "question": "Q89. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-090",
    "questionNumber": 90,
    "question": "Q90. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-091",
    "questionNumber": 91,
    "question": "Q91. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-092",
    "questionNumber": 92,
    "question": "Q92. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-093",
    "questionNumber": 93,
    "question": "Q93. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-094",
    "questionNumber": 94,
    "question": "Q94. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-095",
    "questionNumber": 95,
    "question": "Q95. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-096",
    "questionNumber": 96,
    "question": "Q96. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-097",
    "questionNumber": 97,
    "question": "Q97. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-098",
    "questionNumber": 98,
    "question": "Q98. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-099",
    "questionNumber": 99,
    "question": "Q99. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-100",
    "questionNumber": 100,
    "question": "Q100. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-101",
    "questionNumber": 101,
    "question": "Q101. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-102",
    "questionNumber": 102,
    "question": "Q102. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-103",
    "questionNumber": 103,
    "question": "Q103. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-104",
    "questionNumber": 104,
    "question": "Q104. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-105",
    "questionNumber": 105,
    "question": "Q105. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-106",
    "questionNumber": 106,
    "question": "Q106. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-107",
    "questionNumber": 107,
    "question": "Q107. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-108",
    "questionNumber": 108,
    "question": "Q108. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-109",
    "questionNumber": 109,
    "question": "Q109. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-110",
    "questionNumber": 110,
    "question": "Q110. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-111",
    "questionNumber": 111,
    "question": "Q111. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-112",
    "questionNumber": 112,
    "question": "Q112. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-113",
    "questionNumber": 113,
    "question": "Q113. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-114",
    "questionNumber": 114,
    "question": "Q114. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-115",
    "questionNumber": 115,
    "question": "Q115. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-116",
    "questionNumber": 116,
    "question": "Q116. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-117",
    "questionNumber": 117,
    "question": "Q117. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-118",
    "questionNumber": 118,
    "question": "Q118. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-119",
    "questionNumber": 119,
    "question": "Q119. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-120",
    "questionNumber": 120,
    "question": "Q120. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-121",
    "questionNumber": 121,
    "question": "Q121. The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-122",
    "questionNumber": 122,
    "question": "Q122. The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-123",
    "questionNumber": 123,
    "question": "Q123. In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-124",
    "questionNumber": 124,
    "question": "Q124. Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
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
    "difficulty": "Easy",
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
    "id": "amn-mcq-125",
    "questionNumber": 125,
    "question": "Q125. When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
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
    "difficulty": "Easy",
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
