// Part 3: Q251 to Q375 (Medium: 125 MCQs)
// Chapter: Haloalkanes and Haloarenes (ID: haloalkanes-haloarenes) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const HALOALKANES_HALOARENES_PART3_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "hal-mcq-251",
    "questionNumber": 251,
    "question": "Q251. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "C": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-252",
    "questionNumber": 252,
    "question": "Q252. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "C": "Partial racemization with retention dominant",
      "D": "Complete inversion of configuration (Walden inversion)"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant",
      "Complete inversion of configuration (Walden inversion)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET 2016",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2016"
    }
  },
  {
    "id": "hal-mcq-253",
    "questionNumber": 253,
    "question": "Q253. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "B": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "C": "Chlorobenzene is completely non-polar",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-254",
    "questionNumber": 254,
    "question": "Q254. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Toluene (Methylbenzene)",
      "C": "Ethane",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Toluene (Methylbenzene)",
      "Ethane",
      "Benzophenone"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-255",
    "questionNumber": 255,
    "question": "Q255. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "C": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-256",
    "questionNumber": 256,
    "question": "Q256. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "C": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$",
      "D": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-257",
    "questionNumber": 257,
    "question": "Q257. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete inversion of configuration (Walden inversion)",
      "B": "Complete retention of configuration",
      "C": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete inversion of configuration (Walden inversion)",
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-258",
    "questionNumber": 258,
    "question": "Q258. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "C": "Chlorobenzene is completely non-polar",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-259",
    "questionNumber": 259,
    "question": "Q259. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Ethane",
      "C": "Toluene (Methylbenzene)",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Toluene (Methylbenzene)",
      "Benzophenone"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-260",
    "questionNumber": 260,
    "question": "Q260. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "C": "Formic acid ($\\text{HCOOH}$)",
      "D": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-261",
    "questionNumber": 261,
    "question": "Q261. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "B": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "C": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-262",
    "questionNumber": 262,
    "question": "Q262. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete inversion of configuration (Walden inversion)",
      "C": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete inversion of configuration (Walden inversion)",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-263",
    "questionNumber": 263,
    "question": "Q263. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Chlorobenzene is completely non-polar",
      "C": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-264",
    "questionNumber": 264,
    "question": "Q264. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Ethane",
      "C": "Benzophenone",
      "D": "Toluene (Methylbenzene)"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Benzophenone",
      "Toluene (Methylbenzene)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-265",
    "questionNumber": 265,
    "question": "Q265. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "B": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "C": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-266",
    "questionNumber": 266,
    "question": "Q266. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "C": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET 2021",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2021"
    }
  },
  {
    "id": "hal-mcq-267",
    "questionNumber": 267,
    "question": "Q267. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "C": "Complete inversion of configuration (Walden inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Complete inversion of configuration (Walden inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-268",
    "questionNumber": 268,
    "question": "Q268. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Chlorobenzene is completely non-polar",
      "C": "The chlorine atom cannot act as a leaving group in any chemical reaction",
      "D": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-269",
    "questionNumber": 269,
    "question": "Q269. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Toluene (Methylbenzene)",
      "B": "Biphenyl (Diphenyl)",
      "C": "Ethane",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Toluene (Methylbenzene)",
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Benzophenone"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-270",
    "questionNumber": 270,
    "question": "Q270. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "C": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-271",
    "questionNumber": 271,
    "question": "Q271. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "C": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-272",
    "questionNumber": 272,
    "question": "Q272. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "C": "Partial racemization with retention dominant",
      "D": "Complete inversion of configuration (Walden inversion)"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant",
      "Complete inversion of configuration (Walden inversion)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-273",
    "questionNumber": 273,
    "question": "Q273. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "B": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "C": "Chlorobenzene is completely non-polar",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-274",
    "questionNumber": 274,
    "question": "Q274. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Toluene (Methylbenzene)",
      "C": "Ethane",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Toluene (Methylbenzene)",
      "Ethane",
      "Benzophenone"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-275",
    "questionNumber": 275,
    "question": "Q275. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "C": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-276",
    "questionNumber": 276,
    "question": "Q276. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "C": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$",
      "D": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-277",
    "questionNumber": 277,
    "question": "Q277. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete inversion of configuration (Walden inversion)",
      "B": "Complete retention of configuration",
      "C": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete inversion of configuration (Walden inversion)",
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-278",
    "questionNumber": 278,
    "question": "Q278. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "C": "Chlorobenzene is completely non-polar",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-279",
    "questionNumber": 279,
    "question": "Q279. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Ethane",
      "C": "Toluene (Methylbenzene)",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Toluene (Methylbenzene)",
      "Benzophenone"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-280",
    "questionNumber": 280,
    "question": "Q280. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "C": "Formic acid ($\\text{HCOOH}$)",
      "D": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET 2017",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2017"
    }
  },
  {
    "id": "hal-mcq-281",
    "questionNumber": 281,
    "question": "Q281. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "B": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "C": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-282",
    "questionNumber": 282,
    "question": "Q282. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete inversion of configuration (Walden inversion)",
      "C": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete inversion of configuration (Walden inversion)",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-283",
    "questionNumber": 283,
    "question": "Q283. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Chlorobenzene is completely non-polar",
      "C": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-284",
    "questionNumber": 284,
    "question": "Q284. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Ethane",
      "C": "Benzophenone",
      "D": "Toluene (Methylbenzene)"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Benzophenone",
      "Toluene (Methylbenzene)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-285",
    "questionNumber": 285,
    "question": "Q285. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "B": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "C": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-286",
    "questionNumber": 286,
    "question": "Q286. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "C": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-287",
    "questionNumber": 287,
    "question": "Q287. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "C": "Complete inversion of configuration (Walden inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Complete inversion of configuration (Walden inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-288",
    "questionNumber": 288,
    "question": "Q288. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Chlorobenzene is completely non-polar",
      "C": "The chlorine atom cannot act as a leaving group in any chemical reaction",
      "D": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-289",
    "questionNumber": 289,
    "question": "Q289. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Toluene (Methylbenzene)",
      "B": "Biphenyl (Diphenyl)",
      "C": "Ethane",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Toluene (Methylbenzene)",
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Benzophenone"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-290",
    "questionNumber": 290,
    "question": "Q290. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "C": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-291",
    "questionNumber": 291,
    "question": "Q291. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "C": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-292",
    "questionNumber": 292,
    "question": "Q292. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "C": "Partial racemization with retention dominant",
      "D": "Complete inversion of configuration (Walden inversion)"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant",
      "Complete inversion of configuration (Walden inversion)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-293",
    "questionNumber": 293,
    "question": "Q293. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "B": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "C": "Chlorobenzene is completely non-polar",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-294",
    "questionNumber": 294,
    "question": "Q294. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Toluene (Methylbenzene)",
      "C": "Ethane",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Toluene (Methylbenzene)",
      "Ethane",
      "Benzophenone"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET 2022",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2022"
    }
  },
  {
    "id": "hal-mcq-295",
    "questionNumber": 295,
    "question": "Q295. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "C": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-296",
    "questionNumber": 296,
    "question": "Q296. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "C": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$",
      "D": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-297",
    "questionNumber": 297,
    "question": "Q297. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete inversion of configuration (Walden inversion)",
      "B": "Complete retention of configuration",
      "C": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete inversion of configuration (Walden inversion)",
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-298",
    "questionNumber": 298,
    "question": "Q298. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "C": "Chlorobenzene is completely non-polar",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-299",
    "questionNumber": 299,
    "question": "Q299. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Ethane",
      "C": "Toluene (Methylbenzene)",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Toluene (Methylbenzene)",
      "Benzophenone"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-300",
    "questionNumber": 300,
    "question": "Q300. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "C": "Formic acid ($\\text{HCOOH}$)",
      "D": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-301",
    "questionNumber": 301,
    "question": "Q301. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "B": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "C": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-302",
    "questionNumber": 302,
    "question": "Q302. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete inversion of configuration (Walden inversion)",
      "C": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete inversion of configuration (Walden inversion)",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-303",
    "questionNumber": 303,
    "question": "Q303. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Chlorobenzene is completely non-polar",
      "C": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-304",
    "questionNumber": 304,
    "question": "Q304. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Ethane",
      "C": "Benzophenone",
      "D": "Toluene (Methylbenzene)"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Benzophenone",
      "Toluene (Methylbenzene)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-305",
    "questionNumber": 305,
    "question": "Q305. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "B": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "C": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-306",
    "questionNumber": 306,
    "question": "Q306. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "C": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-307",
    "questionNumber": 307,
    "question": "Q307. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "C": "Complete inversion of configuration (Walden inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Complete inversion of configuration (Walden inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-308",
    "questionNumber": 308,
    "question": "Q308. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Chlorobenzene is completely non-polar",
      "C": "The chlorine atom cannot act as a leaving group in any chemical reaction",
      "D": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET 2018",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2018"
    }
  },
  {
    "id": "hal-mcq-309",
    "questionNumber": 309,
    "question": "Q309. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Toluene (Methylbenzene)",
      "B": "Biphenyl (Diphenyl)",
      "C": "Ethane",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Toluene (Methylbenzene)",
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Benzophenone"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-310",
    "questionNumber": 310,
    "question": "Q310. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "C": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-311",
    "questionNumber": 311,
    "question": "Q311. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "C": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-312",
    "questionNumber": 312,
    "question": "Q312. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "C": "Partial racemization with retention dominant",
      "D": "Complete inversion of configuration (Walden inversion)"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant",
      "Complete inversion of configuration (Walden inversion)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-313",
    "questionNumber": 313,
    "question": "Q313. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "B": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "C": "Chlorobenzene is completely non-polar",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-314",
    "questionNumber": 314,
    "question": "Q314. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Toluene (Methylbenzene)",
      "C": "Ethane",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Toluene (Methylbenzene)",
      "Ethane",
      "Benzophenone"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-315",
    "questionNumber": 315,
    "question": "Q315. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "C": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-316",
    "questionNumber": 316,
    "question": "Q316. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "C": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$",
      "D": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-317",
    "questionNumber": 317,
    "question": "Q317. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete inversion of configuration (Walden inversion)",
      "B": "Complete retention of configuration",
      "C": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete inversion of configuration (Walden inversion)",
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-318",
    "questionNumber": 318,
    "question": "Q318. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "C": "Chlorobenzene is completely non-polar",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-319",
    "questionNumber": 319,
    "question": "Q319. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Ethane",
      "C": "Toluene (Methylbenzene)",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Toluene (Methylbenzene)",
      "Benzophenone"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-320",
    "questionNumber": 320,
    "question": "Q320. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "C": "Formic acid ($\\text{HCOOH}$)",
      "D": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-321",
    "questionNumber": 321,
    "question": "Q321. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "B": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "C": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-322",
    "questionNumber": 322,
    "question": "Q322. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete inversion of configuration (Walden inversion)",
      "C": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete inversion of configuration (Walden inversion)",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET 2023",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2023"
    }
  },
  {
    "id": "hal-mcq-323",
    "questionNumber": 323,
    "question": "Q323. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Chlorobenzene is completely non-polar",
      "C": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-324",
    "questionNumber": 324,
    "question": "Q324. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Ethane",
      "C": "Benzophenone",
      "D": "Toluene (Methylbenzene)"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Benzophenone",
      "Toluene (Methylbenzene)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-325",
    "questionNumber": 325,
    "question": "Q325. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "B": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "C": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-326",
    "questionNumber": 326,
    "question": "Q326. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "C": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-327",
    "questionNumber": 327,
    "question": "Q327. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "C": "Complete inversion of configuration (Walden inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Complete inversion of configuration (Walden inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-328",
    "questionNumber": 328,
    "question": "Q328. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Chlorobenzene is completely non-polar",
      "C": "The chlorine atom cannot act as a leaving group in any chemical reaction",
      "D": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-329",
    "questionNumber": 329,
    "question": "Q329. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Toluene (Methylbenzene)",
      "B": "Biphenyl (Diphenyl)",
      "C": "Ethane",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Toluene (Methylbenzene)",
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Benzophenone"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-330",
    "questionNumber": 330,
    "question": "Q330. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "C": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-331",
    "questionNumber": 331,
    "question": "Q331. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "C": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-332",
    "questionNumber": 332,
    "question": "Q332. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "C": "Partial racemization with retention dominant",
      "D": "Complete inversion of configuration (Walden inversion)"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant",
      "Complete inversion of configuration (Walden inversion)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-333",
    "questionNumber": 333,
    "question": "Q333. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "B": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "C": "Chlorobenzene is completely non-polar",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-334",
    "questionNumber": 334,
    "question": "Q334. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Toluene (Methylbenzene)",
      "C": "Ethane",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Toluene (Methylbenzene)",
      "Ethane",
      "Benzophenone"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-335",
    "questionNumber": 335,
    "question": "Q335. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "C": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-336",
    "questionNumber": 336,
    "question": "Q336. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "C": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$",
      "D": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET 2019",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2019"
    }
  },
  {
    "id": "hal-mcq-337",
    "questionNumber": 337,
    "question": "Q337. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete inversion of configuration (Walden inversion)",
      "B": "Complete retention of configuration",
      "C": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete inversion of configuration (Walden inversion)",
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-338",
    "questionNumber": 338,
    "question": "Q338. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "C": "Chlorobenzene is completely non-polar",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-339",
    "questionNumber": 339,
    "question": "Q339. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Ethane",
      "C": "Toluene (Methylbenzene)",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Toluene (Methylbenzene)",
      "Benzophenone"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-340",
    "questionNumber": 340,
    "question": "Q340. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "C": "Formic acid ($\\text{HCOOH}$)",
      "D": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-341",
    "questionNumber": 341,
    "question": "Q341. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "B": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "C": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-342",
    "questionNumber": 342,
    "question": "Q342. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete inversion of configuration (Walden inversion)",
      "C": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete inversion of configuration (Walden inversion)",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-343",
    "questionNumber": 343,
    "question": "Q343. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Chlorobenzene is completely non-polar",
      "C": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-344",
    "questionNumber": 344,
    "question": "Q344. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Ethane",
      "C": "Benzophenone",
      "D": "Toluene (Methylbenzene)"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Benzophenone",
      "Toluene (Methylbenzene)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-345",
    "questionNumber": 345,
    "question": "Q345. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "B": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "C": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-346",
    "questionNumber": 346,
    "question": "Q346. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "C": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-347",
    "questionNumber": 347,
    "question": "Q347. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "C": "Complete inversion of configuration (Walden inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Complete inversion of configuration (Walden inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-348",
    "questionNumber": 348,
    "question": "Q348. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Chlorobenzene is completely non-polar",
      "C": "The chlorine atom cannot act as a leaving group in any chemical reaction",
      "D": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-349",
    "questionNumber": 349,
    "question": "Q349. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Toluene (Methylbenzene)",
      "B": "Biphenyl (Diphenyl)",
      "C": "Ethane",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Toluene (Methylbenzene)",
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Benzophenone"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-350",
    "questionNumber": 350,
    "question": "Q350. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "C": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET 2024",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2024"
    }
  },
  {
    "id": "hal-mcq-351",
    "questionNumber": 351,
    "question": "Q351. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "C": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-352",
    "questionNumber": 352,
    "question": "Q352. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "C": "Partial racemization with retention dominant",
      "D": "Complete inversion of configuration (Walden inversion)"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant",
      "Complete inversion of configuration (Walden inversion)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-353",
    "questionNumber": 353,
    "question": "Q353. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "B": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "C": "Chlorobenzene is completely non-polar",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-354",
    "questionNumber": 354,
    "question": "Q354. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Toluene (Methylbenzene)",
      "C": "Ethane",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Toluene (Methylbenzene)",
      "Ethane",
      "Benzophenone"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-355",
    "questionNumber": 355,
    "question": "Q355. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "C": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-356",
    "questionNumber": 356,
    "question": "Q356. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "C": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$",
      "D": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-357",
    "questionNumber": 357,
    "question": "Q357. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete inversion of configuration (Walden inversion)",
      "B": "Complete retention of configuration",
      "C": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete inversion of configuration (Walden inversion)",
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-358",
    "questionNumber": 358,
    "question": "Q358. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "C": "Chlorobenzene is completely non-polar",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-359",
    "questionNumber": 359,
    "question": "Q359. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Ethane",
      "C": "Toluene (Methylbenzene)",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Toluene (Methylbenzene)",
      "Benzophenone"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-360",
    "questionNumber": 360,
    "question": "Q360. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "C": "Formic acid ($\\text{HCOOH}$)",
      "D": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-361",
    "questionNumber": 361,
    "question": "Q361. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "B": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "C": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-362",
    "questionNumber": 362,
    "question": "Q362. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete inversion of configuration (Walden inversion)",
      "C": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete inversion of configuration (Walden inversion)",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-363",
    "questionNumber": 363,
    "question": "Q363. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Chlorobenzene is completely non-polar",
      "C": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-364",
    "questionNumber": 364,
    "question": "Q364. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Ethane",
      "C": "Benzophenone",
      "D": "Toluene (Methylbenzene)"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Benzophenone",
      "Toluene (Methylbenzene)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET 2020",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2020"
    }
  },
  {
    "id": "hal-mcq-365",
    "questionNumber": 365,
    "question": "Q365. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "B": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "C": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-366",
    "questionNumber": 366,
    "question": "Q366. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "C": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-367",
    "questionNumber": 367,
    "question": "Q367. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "C": "Complete inversion of configuration (Walden inversion)",
      "D": "Partial racemization with retention dominant"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Complete inversion of configuration (Walden inversion)",
      "Partial racemization with retention dominant"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-368",
    "questionNumber": 368,
    "question": "Q368. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "B": "Chlorobenzene is completely non-polar",
      "C": "The chlorine atom cannot act as a leaving group in any chemical reaction",
      "D": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring"
    },
    "optionsList": [
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction",
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-369",
    "questionNumber": 369,
    "question": "Q369. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Toluene (Methylbenzene)",
      "B": "Biphenyl (Diphenyl)",
      "C": "Ethane",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Toluene (Methylbenzene)",
      "Biphenyl (Diphenyl)",
      "Ethane",
      "Benzophenone"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-370",
    "questionNumber": 370,
    "question": "Q370. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "C": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-371",
    "questionNumber": 371,
    "question": "Q371. (NEET Medium) Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
    "options": {
      "A": "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "B": "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "C": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "D": "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    },
    "optionsList": [
      "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$",
      "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$",
      "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nCarbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nComparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.\n\n3. FORMULA / EQUATION:\n$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).\n\n5. FINAL CONCLUSION:\n$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nMethyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation.",
    "solutionStructured": {
      "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
      "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
      "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
      "stepByStep": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
      "finalAnswer": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
      "whyOtherOptionsWrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-372",
    "questionNumber": 372,
    "question": "Q372. (NEET Medium) The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
    "options": {
      "A": "Complete retention of configuration",
      "B": "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "C": "Partial racemization with retention dominant",
      "D": "Complete inversion of configuration (Walden inversion)"
    },
    "optionsList": [
      "Complete retention of configuration",
      "Complete racemization ($50\\%$ retention + $50\\%$ inversion)",
      "Partial racemization with retention dominant",
      "Complete inversion of configuration (Walden inversion)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).\n\n2. GIVEN INFORMATION / DATA:\nOptically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).\n\n3. FORMULA / EQUATION:\nBimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).\n\n5. FINAL CONCLUSION:\nComplete inversion of configuration (Walden inversion)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base).",
    "solutionStructured": {
      "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
      "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
      "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
      "stepByStep": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
      "finalAnswer": "Complete inversion of configuration (Walden inversion)",
      "whyOtherOptionsWrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "SN1 & SN2 Nucleophilic Substitution",
    "topicId": "chem-sn1-sn2-mechanisms",
    "subtopic": "Mechanisms, Stereochemistry & Kinetics",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-373",
    "questionNumber": 373,
    "question": "Q373. (NEET Medium) Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
    "options": {
      "A": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "B": "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "C": "Chlorobenzene is completely non-polar",
      "D": "The chlorine atom cannot act as a leaving group in any chemical reaction"
    },
    "optionsList": [
      "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring",
      "The benzene ring acts as a strong nucleophile repelling other nucleophiles",
      "Chlorobenzene is completely non-polar",
      "The chlorine atom cannot act as a leaving group in any chemical reaction"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFactors causing low reactivity of haloarenes towards nucleophilic substitution.\n\n2. GIVEN INFORMATION / DATA:\nChlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).\n\n3. FORMULA / EQUATION:\nResonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.\n\n5. FINAL CONCLUSION:\nPartial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nChlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason.",
    "solutionStructured": {
      "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
      "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
      "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
      "stepByStep": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
      "finalAnswer": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
      "whyOtherOptionsWrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-374",
    "questionNumber": 374,
    "question": "Q374. (NEET Medium) When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
    "options": {
      "A": "Biphenyl (Diphenyl)",
      "B": "Toluene (Methylbenzene)",
      "C": "Ethane",
      "D": "Benzophenone"
    },
    "optionsList": [
      "Biphenyl (Diphenyl)",
      "Toluene (Methylbenzene)",
      "Ethane",
      "Benzophenone"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nWurtz-Fittig cross-coupling reaction between aryl and alkyl halides.\n\n2. GIVEN INFORMATION / DATA:\n$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.\n\n3. FORMULA / EQUATION:\n$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).\n\n5. FINAL CONCLUSION:\nToluene (Methylbenzene)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBiphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation.",
    "solutionStructured": {
      "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
      "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
      "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
      "stepByStep": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
      "finalAnswer": "Toluene (Methylbenzene)",
      "whyOtherOptionsWrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "hal-mcq-375",
    "questionNumber": 375,
    "question": "Q375. (NEET Medium) Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
    "options": {
      "A": "Carbon tetrachloride ($\\text{CCl}_4$)",
      "B": "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "C": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "D": "Formic acid ($\\text{HCOOH}$)"
    },
    "optionsList": [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "Formic acid ($\\text{HCOOH}$)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nPhotochemical oxidation of chloroform and role of ethanol as a stabilizer.\n\n2. GIVEN INFORMATION / DATA:\nChloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.\n\n3. FORMULA / EQUATION:\n$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.\n\n5. FINAL CONCLUSION:\nPhosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCarbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target.",
    "solutionStructured": {
      "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
      "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
      "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
      "stepByStep": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
      "finalAnswer": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
      "whyOtherOptionsWrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Haloalkanes and Haloarenes",
    "chapterId": "haloalkanes-haloarenes",
    "topic": "Haloarenes & Polyhalogen Compounds",
    "topicId": "chem-haloarenes-reactions",
    "subtopic": "Electrophilic Substitution, Dow's Process & Chloroform",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  }
];
