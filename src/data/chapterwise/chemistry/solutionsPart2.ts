// Part 2: Q126 to Q250 (Medium: 125 MCQs)
// Chapter: Solutions (ID: solutions) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const SOLUTIONS_PART2_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "sol-mcq-126",
    "questionNumber": 126,
    "question": "Q126. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
    "options": {
      "A": "$0.10\\text{ M } \\text{BaCl}_2$",
      "B": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "C": "$0.10\\text{ M } \\text{NaCl}$",
      "D": "$0.10\\text{ M } \\text{Glucose}$"
    },
    "optionsList": [
      "$0.10\\text{ M } \\text{BaCl}_2$",
      "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "$0.10\\text{ M } \\text{NaCl}$",
      "$0.10\\text{ M } \\text{Glucose}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nColligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).\n\n2. GIVEN INFORMATION / DATA:\nFour aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = i \\cdot C \\cdot R \\cdot T$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.\n\n5. FINAL CONCLUSION:\n$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nGlucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$).",
    "solutionStructured": {
      "concept": "Colligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).",
      "given": "Four aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.",
      "formula": "$\\Pi = i \\cdot C \\cdot R \\cdot T$",
      "stepByStep": "1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.",
      "finalAnswer": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "whyOtherOptionsWrong": "Glucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-127",
    "questionNumber": 127,
    "question": "Q127. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
    "options": {
      "A": "$88\\%$",
      "B": "$97\\%$",
      "C": "$94\\%$",
      "D": "$47\\%$"
    },
    "optionsList": [
      "$88\\%$",
      "$97\\%$",
      "$94\\%$",
      "$47\\%$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.\n\n2. GIVEN INFORMATION / DATA:\nSolute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).\n\n3. FORMULA / EQUATION:\n$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.\n\n5. FINAL CONCLUSION:\n$94\\%$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDistractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation.",
    "solutionStructured": {
      "concept": "Relation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.",
      "given": "Solute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).",
      "formula": "$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$",
      "stepByStep": "1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.",
      "finalAnswer": "$94\\%$",
      "whyOtherOptionsWrong": "Distractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-128",
    "questionNumber": 128,
    "question": "Q128. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
    "options": {
      "A": "$18.00\\text{ M}$",
      "B": "$1.00\\text{ M}$",
      "C": "$5.55\\text{ M}$",
      "D": "$55.55\\text{ M}$"
    },
    "optionsList": [
      "$18.00\\text{ M}$",
      "$1.00\\text{ M}$",
      "$5.55\\text{ M}$",
      "$55.55\\text{ M}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMolarity of a pure liquid substance.\n\n2. GIVEN INFORMATION / DATA:\nDensity of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.\n\n3. FORMULA / EQUATION:\n$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.\n\n5. FINAL CONCLUSION:\n$55.55\\text{ M}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10.",
    "solutionStructured": {
      "concept": "Molarity of a pure liquid substance.",
      "given": "Density of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.",
      "formula": "$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$",
      "stepByStep": "1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.",
      "finalAnswer": "$55.55\\text{ M}$",
      "whyOtherOptionsWrong": "$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-129",
    "questionNumber": 129,
    "question": "Q129. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
    "options": {
      "A": "Large positive deviation from Raoult's law",
      "B": "Large negative deviation from Raoult's law",
      "C": "Zero deviation (ideal behavior)",
      "D": "Equal intermolecular attractions between components"
    },
    "optionsList": [
      "Large positive deviation from Raoult's law",
      "Large negative deviation from Raoult's law",
      "Zero deviation (ideal behavior)",
      "Equal intermolecular attractions between components"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMinimum boiling azeotropes and positive deviations from Raoult's law.\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture boiling at a constant minimum temperature.\n\n3. FORMULA / EQUATION:\nHigh vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).\n\n5. FINAL CONCLUSION:\nLarge positive deviation from Raoult's law.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNegative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water).",
    "solutionStructured": {
      "concept": "Minimum boiling azeotropes and positive deviations from Raoult's law.",
      "given": "Binary liquid mixture boiling at a constant minimum temperature.",
      "formula": "High vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.",
      "stepByStep": "1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).",
      "finalAnswer": "Large positive deviation from Raoult's law.",
      "whyOtherOptionsWrong": "Negative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-130",
    "questionNumber": 130,
    "question": "Q130. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
    "options": {
      "A": "$0.186\\text{ K}$",
      "B": "$0.093\\text{ K}$",
      "C": "$0.0465\\text{ K}$",
      "D": "$0.930\\text{ K}$"
    },
    "optionsList": [
      "$0.186\\text{ K}$",
      "$0.093\\text{ K}$",
      "$0.0465\\text{ K}$",
      "$0.930\\text{ K}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDepression in freezing point calculation for a non-electrolyte.\n\n2. GIVEN INFORMATION / DATA:\nMolality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.\n\n3. FORMULA / EQUATION:\n$\\Delta T_f = i \\cdot K_f \\cdot m$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).\n\n5. FINAL CONCLUSION:\n$0.093\\text{ K}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$.",
    "solutionStructured": {
      "concept": "Depression in freezing point calculation for a non-electrolyte.",
      "given": "Molality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.",
      "formula": "$\\Delta T_f = i \\cdot K_f \\cdot m$",
      "stepByStep": "1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).",
      "finalAnswer": "$0.093\\text{ K}$",
      "whyOtherOptionsWrong": "$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-131",
    "questionNumber": 131,
    "question": "Q131. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
    "options": {
      "A": "$1.0$",
      "B": "$2.0$",
      "C": "$0.5$",
      "D": "$0.25$"
    },
    "optionsList": [
      "$1.0$",
      "$2.0$",
      "$0.5$",
      "$0.25$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nAssociation of solute molecules and calculation of van't Hoff factor.\n\n2. GIVEN INFORMATION / DATA:\nBenzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).\n\n3. FORMULA / EQUATION:\n$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.\n\n5. FINAL CONCLUSION:\n$0.5$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization.",
    "solutionStructured": {
      "concept": "Association of solute molecules and calculation of van't Hoff factor.",
      "given": "Benzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).",
      "formula": "$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$",
      "stepByStep": "1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.",
      "finalAnswer": "$0.5$",
      "whyOtherOptionsWrong": "$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-132",
    "questionNumber": 132,
    "question": "Q132. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
    "options": {
      "A": "$23.80\\text{ mm Hg}$",
      "B": "$22.61\\text{ mm Hg}$",
      "C": "$20.23\\text{ mm Hg}$",
      "D": "$23.56\\text{ mm Hg}$"
    },
    "optionsList": [
      "$23.80\\text{ mm Hg}$",
      "$22.61\\text{ mm Hg}$",
      "$20.23\\text{ mm Hg}$",
      "$23.56\\text{ mm Hg}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRaoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).\n\n2. GIVEN INFORMATION / DATA:\nPure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).\n\n3. FORMULA / EQUATION:\n$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.\n\n5. FINAL CONCLUSION:\n$23.56\\text{ mm Hg}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering.",
    "solutionStructured": {
      "concept": "Raoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).",
      "given": "Pure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).",
      "formula": "$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$",
      "stepByStep": "1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.",
      "finalAnswer": "$23.56\\text{ mm Hg}$",
      "whyOtherOptionsWrong": "$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-133",
    "questionNumber": 133,
    "question": "Q133. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
    "options": {
      "A": "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "B": "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "C": "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "D": "$5.0\\% \\text{ (mass/volume) NaCl}$"
    },
    "optionsList": [
      "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "$5.0\\% \\text{ (mass/volume) NaCl}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIsotonic solutions and intravenous fluid administration.\n\n2. GIVEN INFORMATION / DATA:\nHuman red blood cells suspended in saline solution.\n\n3. FORMULA / EQUATION:\nIsotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.\n\n5. FINAL CONCLUSION:\n$0.9\\% \\text{ (mass/volume) NaCl}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis.",
    "solutionStructured": {
      "concept": "Isotonic solutions and intravenous fluid administration.",
      "given": "Human red blood cells suspended in saline solution.",
      "formula": "Isotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.",
      "stepByStep": "1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.",
      "finalAnswer": "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "whyOtherOptionsWrong": "$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-134",
    "questionNumber": 134,
    "question": "Q134. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
    "options": {
      "A": "$1290\\text{ g/mol}$",
      "B": "$2580\\text{ g/mol}$",
      "C": "$516\\text{ g/mol}$",
      "D": "$860\\text{ g/mol}$"
    },
    "optionsList": [
      "$1290\\text{ g/mol}$",
      "$2580\\text{ g/mol}$",
      "$516\\text{ g/mol}$",
      "$860\\text{ g/mol}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDetermination of molar mass of macromolecules using osmotic pressure.\n\n2. GIVEN INFORMATION / DATA:\nSolute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.\n\n5. FINAL CONCLUSION:\n$2580\\text{ g/mol}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nErrors occur if dividing by 2 or neglecting temperature conversion.",
    "solutionStructured": {
      "concept": "Determination of molar mass of macromolecules using osmotic pressure.",
      "given": "Solute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.",
      "formula": "$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$",
      "stepByStep": "1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.",
      "finalAnswer": "$2580\\text{ g/mol}$",
      "whyOtherOptionsWrong": "Errors occur if dividing by 2 or neglecting temperature conversion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-135",
    "questionNumber": 135,
    "question": "Q135. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
    "options": {
      "A": "Relative lowering of vapor pressure",
      "B": "Elevation in boiling point ($K_b$ method)",
      "C": "Osmotic pressure measurement at room temperature",
      "D": "Depression in freezing point ($K_f$ method)"
    },
    "optionsList": [
      "Relative lowering of vapor pressure",
      "Elevation in boiling point ($K_b$ method)",
      "Osmotic pressure measurement at room temperature",
      "Depression in freezing point ($K_f$ method)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuitability of osmotic pressure method for macromolecules.\n\n2. GIVEN INFORMATION / DATA:\nHigh molecular weight biomolecules (proteins, enzymes, nucleic acids).\n\n3. FORMULA / EQUATION:\n$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.\n\n5. FINAL CONCLUSION:\nOsmotic pressure measurement at room temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBoiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately.",
    "solutionStructured": {
      "concept": "Suitability of osmotic pressure method for macromolecules.",
      "given": "High molecular weight biomolecules (proteins, enzymes, nucleic acids).",
      "formula": "$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$",
      "stepByStep": "1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.",
      "finalAnswer": "Osmotic pressure measurement at room temperature.",
      "whyOtherOptionsWrong": "Boiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-136",
    "questionNumber": 136,
    "question": "Q136. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
    "options": {
      "A": "Volume of the liquid solvent",
      "B": "Total atmospheric pressure",
      "C": "Square of the gas pressure",
      "D": "Partial pressure of the gas above the solution"
    },
    "optionsList": [
      "Volume of the liquid solvent",
      "Total atmospheric pressure",
      "Square of the gas pressure",
      "Partial pressure of the gas above the solution"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).\n\n2. GIVEN INFORMATION / DATA:\nGas dissolved in a liquid solvent under equilibrium at temperature $T$.\n\n3. FORMULA / EQUATION:\n$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.\n\n5. FINAL CONCLUSION:\nOption matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nTotal pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume.",
    "solutionStructured": {
      "concept": "Henry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).",
      "given": "Gas dissolved in a liquid solvent under equilibrium at temperature $T$.",
      "formula": "$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).",
      "stepByStep": "1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.",
      "finalAnswer": "Option matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.",
      "whyOtherOptionsWrong": "Total pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET 2021",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2021"
    }
  },
  {
    "id": "sol-mcq-137",
    "questionNumber": 137,
    "question": "Q137. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
    "options": {
      "A": "Increases with increase in temperature, leading to lower gas solubility",
      "B": "Decreases with increase in temperature, leading to higher solubility",
      "C": "Remains constant at all temperatures",
      "D": "Is independent of the nature of the gas"
    },
    "optionsList": [
      "Increases with increase in temperature, leading to lower gas solubility",
      "Decreases with increase in temperature, leading to higher solubility",
      "Remains constant at all temperatures",
      "Is independent of the nature of the gas"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nTemperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.\n\n2. GIVEN INFORMATION / DATA:\nGas dissolving in water with temperature variation.\n\n3. FORMULA / EQUATION:\n$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.\n\n5. FINAL CONCLUSION:\nIncreases with increase in temperature, leading to lower gas solubility.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas.",
    "solutionStructured": {
      "concept": "Temperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.",
      "given": "Gas dissolving in water with temperature variation.",
      "formula": "$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).",
      "stepByStep": "1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.",
      "finalAnswer": "Increases with increase in temperature, leading to lower gas solubility.",
      "whyOtherOptionsWrong": "Option B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-138",
    "questionNumber": 138,
    "question": "Q138. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
    "options": {
      "A": "Ethanol and Acetone",
      "B": "Benzene and Toluene",
      "C": "Chloroform and Acetone",
      "D": "Phenol and Aniline"
    },
    "optionsList": [
      "Ethanol and Acetone",
      "Benzene and Toluene",
      "Chloroform and Acetone",
      "Phenol and Aniline"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nConditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture at standard temperature.\n\n3. FORMULA / EQUATION:\nIdeal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.\n\n5. FINAL CONCLUSION:\nBenzene and Toluene form an ideal solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nEthanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation.",
    "solutionStructured": {
      "concept": "Conditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).",
      "given": "Binary liquid mixture at standard temperature.",
      "formula": "Ideal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.",
      "stepByStep": "1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.",
      "finalAnswer": "Benzene and Toluene form an ideal solution.",
      "whyOtherOptionsWrong": "Ethanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-139",
    "questionNumber": 139,
    "question": "Q139. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
    "options": {
      "A": "Hydrogen bonds present in pure acetone are broken by chloroform",
      "B": "The vapor pressure of each component increases significantly upon mixing",
      "C": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)",
      "D": "The mixing process is endothermic with $\\Delta H_{mix} > 0$"
    },
    "optionsList": [
      "Hydrogen bonds present in pure acetone are broken by chloroform",
      "The vapor pressure of each component increases significantly upon mixing",
      "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)",
      "The mixing process is endothermic with $\\Delta H_{mix} > 0$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNegative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.\n\n2. GIVEN INFORMATION / DATA:\nMixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).\n\n3. FORMULA / EQUATION:\nNegative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.\n\n5. FINAL CONCLUSION:\nIntermolecular hydrogen bonding is formed between acetone and chloroform molecules.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic.",
    "solutionStructured": {
      "concept": "Negative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.",
      "given": "Mixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).",
      "formula": "Negative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.",
      "stepByStep": "1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.",
      "finalAnswer": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules.",
      "whyOtherOptionsWrong": "Pure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-140",
    "questionNumber": 140,
    "question": "Q140. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
    "options": {
      "A": "Molarity of the solute in solution",
      "B": "Nature of the non-volatile solute",
      "C": "Volume of the solution",
      "D": "Nature of the solvent"
    },
    "optionsList": [
      "Molarity of the solute in solution",
      "Nature of the non-volatile solute",
      "Volume of the solution",
      "Nature of the solvent"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEbullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.\n\n2. GIVEN INFORMATION / DATA:\nColligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.\n\n3. FORMULA / EQUATION:\n$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.\n\n5. FINAL CONCLUSION:\nNature of the solvent.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSolute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$.",
    "solutionStructured": {
      "concept": "Ebullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.",
      "given": "Colligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.",
      "formula": "$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).",
      "stepByStep": "1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.",
      "finalAnswer": "Nature of the solvent.",
      "whyOtherOptionsWrong": "Solute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-141",
    "questionNumber": 141,
    "question": "Q141. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
    "options": {
      "A": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "B": "$0.10\\text{ M } \\text{BaCl}_2$",
      "C": "$0.10\\text{ M } \\text{NaCl}$",
      "D": "$0.10\\text{ M } \\text{Glucose}$"
    },
    "optionsList": [
      "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "$0.10\\text{ M } \\text{BaCl}_2$",
      "$0.10\\text{ M } \\text{NaCl}$",
      "$0.10\\text{ M } \\text{Glucose}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nColligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).\n\n2. GIVEN INFORMATION / DATA:\nFour aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = i \\cdot C \\cdot R \\cdot T$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.\n\n5. FINAL CONCLUSION:\n$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nGlucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$).",
    "solutionStructured": {
      "concept": "Colligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).",
      "given": "Four aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.",
      "formula": "$\\Pi = i \\cdot C \\cdot R \\cdot T$",
      "stepByStep": "1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.",
      "finalAnswer": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "whyOtherOptionsWrong": "Glucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-142",
    "questionNumber": 142,
    "question": "Q142. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
    "options": {
      "A": "$88\\%$",
      "B": "$94\\%$",
      "C": "$97\\%$",
      "D": "$47\\%$"
    },
    "optionsList": [
      "$88\\%$",
      "$94\\%$",
      "$97\\%$",
      "$47\\%$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.\n\n2. GIVEN INFORMATION / DATA:\nSolute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).\n\n3. FORMULA / EQUATION:\n$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.\n\n5. FINAL CONCLUSION:\n$94\\%$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDistractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation.",
    "solutionStructured": {
      "concept": "Relation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.",
      "given": "Solute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).",
      "formula": "$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$",
      "stepByStep": "1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.",
      "finalAnswer": "$94\\%$",
      "whyOtherOptionsWrong": "Distractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-143",
    "questionNumber": 143,
    "question": "Q143. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
    "options": {
      "A": "$18.00\\text{ M}$",
      "B": "$1.00\\text{ M}$",
      "C": "$55.55\\text{ M}$",
      "D": "$5.55\\text{ M}$"
    },
    "optionsList": [
      "$18.00\\text{ M}$",
      "$1.00\\text{ M}$",
      "$55.55\\text{ M}$",
      "$5.55\\text{ M}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMolarity of a pure liquid substance.\n\n2. GIVEN INFORMATION / DATA:\nDensity of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.\n\n3. FORMULA / EQUATION:\n$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.\n\n5. FINAL CONCLUSION:\n$55.55\\text{ M}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10.",
    "solutionStructured": {
      "concept": "Molarity of a pure liquid substance.",
      "given": "Density of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.",
      "formula": "$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$",
      "stepByStep": "1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.",
      "finalAnswer": "$55.55\\text{ M}$",
      "whyOtherOptionsWrong": "$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-144",
    "questionNumber": 144,
    "question": "Q144. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
    "options": {
      "A": "Large negative deviation from Raoult's law",
      "B": "Zero deviation (ideal behavior)",
      "C": "Equal intermolecular attractions between components",
      "D": "Large positive deviation from Raoult's law"
    },
    "optionsList": [
      "Large negative deviation from Raoult's law",
      "Zero deviation (ideal behavior)",
      "Equal intermolecular attractions between components",
      "Large positive deviation from Raoult's law"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMinimum boiling azeotropes and positive deviations from Raoult's law.\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture boiling at a constant minimum temperature.\n\n3. FORMULA / EQUATION:\nHigh vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).\n\n5. FINAL CONCLUSION:\nLarge positive deviation from Raoult's law.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNegative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water).",
    "solutionStructured": {
      "concept": "Minimum boiling azeotropes and positive deviations from Raoult's law.",
      "given": "Binary liquid mixture boiling at a constant minimum temperature.",
      "formula": "High vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.",
      "stepByStep": "1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).",
      "finalAnswer": "Large positive deviation from Raoult's law.",
      "whyOtherOptionsWrong": "Negative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-145",
    "questionNumber": 145,
    "question": "Q145. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
    "options": {
      "A": "$0.093\\text{ K}$",
      "B": "$0.186\\text{ K}$",
      "C": "$0.0465\\text{ K}$",
      "D": "$0.930\\text{ K}$"
    },
    "optionsList": [
      "$0.093\\text{ K}$",
      "$0.186\\text{ K}$",
      "$0.0465\\text{ K}$",
      "$0.930\\text{ K}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDepression in freezing point calculation for a non-electrolyte.\n\n2. GIVEN INFORMATION / DATA:\nMolality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.\n\n3. FORMULA / EQUATION:\n$\\Delta T_f = i \\cdot K_f \\cdot m$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).\n\n5. FINAL CONCLUSION:\n$0.093\\text{ K}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$.",
    "solutionStructured": {
      "concept": "Depression in freezing point calculation for a non-electrolyte.",
      "given": "Molality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.",
      "formula": "$\\Delta T_f = i \\cdot K_f \\cdot m$",
      "stepByStep": "1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).",
      "finalAnswer": "$0.093\\text{ K}$",
      "whyOtherOptionsWrong": "$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-146",
    "questionNumber": 146,
    "question": "Q146. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
    "options": {
      "A": "$1.0$",
      "B": "$0.5$",
      "C": "$2.0$",
      "D": "$0.25$"
    },
    "optionsList": [
      "$1.0$",
      "$0.5$",
      "$2.0$",
      "$0.25$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nAssociation of solute molecules and calculation of van't Hoff factor.\n\n2. GIVEN INFORMATION / DATA:\nBenzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).\n\n3. FORMULA / EQUATION:\n$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.\n\n5. FINAL CONCLUSION:\n$0.5$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization.",
    "solutionStructured": {
      "concept": "Association of solute molecules and calculation of van't Hoff factor.",
      "given": "Benzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).",
      "formula": "$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$",
      "stepByStep": "1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.",
      "finalAnswer": "$0.5$",
      "whyOtherOptionsWrong": "$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-147",
    "questionNumber": 147,
    "question": "Q147. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
    "options": {
      "A": "$23.80\\text{ mm Hg}$",
      "B": "$22.61\\text{ mm Hg}$",
      "C": "$23.56\\text{ mm Hg}$",
      "D": "$20.23\\text{ mm Hg}$"
    },
    "optionsList": [
      "$23.80\\text{ mm Hg}$",
      "$22.61\\text{ mm Hg}$",
      "$23.56\\text{ mm Hg}$",
      "$20.23\\text{ mm Hg}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRaoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).\n\n2. GIVEN INFORMATION / DATA:\nPure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).\n\n3. FORMULA / EQUATION:\n$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.\n\n5. FINAL CONCLUSION:\n$23.56\\text{ mm Hg}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering.",
    "solutionStructured": {
      "concept": "Raoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).",
      "given": "Pure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).",
      "formula": "$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$",
      "stepByStep": "1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.",
      "finalAnswer": "$23.56\\text{ mm Hg}$",
      "whyOtherOptionsWrong": "$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-148",
    "questionNumber": 148,
    "question": "Q148. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
    "options": {
      "A": "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "B": "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "C": "$5.0\\% \\text{ (mass/volume) NaCl}$",
      "D": "$0.9\\% \\text{ (mass/volume) NaCl}$"
    },
    "optionsList": [
      "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "$5.0\\% \\text{ (mass/volume) NaCl}$",
      "$0.9\\% \\text{ (mass/volume) NaCl}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIsotonic solutions and intravenous fluid administration.\n\n2. GIVEN INFORMATION / DATA:\nHuman red blood cells suspended in saline solution.\n\n3. FORMULA / EQUATION:\nIsotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.\n\n5. FINAL CONCLUSION:\n$0.9\\% \\text{ (mass/volume) NaCl}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis.",
    "solutionStructured": {
      "concept": "Isotonic solutions and intravenous fluid administration.",
      "given": "Human red blood cells suspended in saline solution.",
      "formula": "Isotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.",
      "stepByStep": "1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.",
      "finalAnswer": "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "whyOtherOptionsWrong": "$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-149",
    "questionNumber": 149,
    "question": "Q149. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
    "options": {
      "A": "$2580\\text{ g/mol}$",
      "B": "$1290\\text{ g/mol}$",
      "C": "$516\\text{ g/mol}$",
      "D": "$860\\text{ g/mol}$"
    },
    "optionsList": [
      "$2580\\text{ g/mol}$",
      "$1290\\text{ g/mol}$",
      "$516\\text{ g/mol}$",
      "$860\\text{ g/mol}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDetermination of molar mass of macromolecules using osmotic pressure.\n\n2. GIVEN INFORMATION / DATA:\nSolute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.\n\n5. FINAL CONCLUSION:\n$2580\\text{ g/mol}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nErrors occur if dividing by 2 or neglecting temperature conversion.",
    "solutionStructured": {
      "concept": "Determination of molar mass of macromolecules using osmotic pressure.",
      "given": "Solute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.",
      "formula": "$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$",
      "stepByStep": "1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.",
      "finalAnswer": "$2580\\text{ g/mol}$",
      "whyOtherOptionsWrong": "Errors occur if dividing by 2 or neglecting temperature conversion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-150",
    "questionNumber": 150,
    "question": "Q150. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
    "options": {
      "A": "Relative lowering of vapor pressure",
      "B": "Osmotic pressure measurement at room temperature",
      "C": "Elevation in boiling point ($K_b$ method)",
      "D": "Depression in freezing point ($K_f$ method)"
    },
    "optionsList": [
      "Relative lowering of vapor pressure",
      "Osmotic pressure measurement at room temperature",
      "Elevation in boiling point ($K_b$ method)",
      "Depression in freezing point ($K_f$ method)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuitability of osmotic pressure method for macromolecules.\n\n2. GIVEN INFORMATION / DATA:\nHigh molecular weight biomolecules (proteins, enzymes, nucleic acids).\n\n3. FORMULA / EQUATION:\n$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.\n\n5. FINAL CONCLUSION:\nOsmotic pressure measurement at room temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBoiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately.",
    "solutionStructured": {
      "concept": "Suitability of osmotic pressure method for macromolecules.",
      "given": "High molecular weight biomolecules (proteins, enzymes, nucleic acids).",
      "formula": "$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$",
      "stepByStep": "1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.",
      "finalAnswer": "Osmotic pressure measurement at room temperature.",
      "whyOtherOptionsWrong": "Boiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-151",
    "questionNumber": 151,
    "question": "Q151. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
    "options": {
      "A": "Volume of the liquid solvent",
      "B": "Total atmospheric pressure",
      "C": "Partial pressure of the gas above the solution",
      "D": "Square of the gas pressure"
    },
    "optionsList": [
      "Volume of the liquid solvent",
      "Total atmospheric pressure",
      "Partial pressure of the gas above the solution",
      "Square of the gas pressure"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).\n\n2. GIVEN INFORMATION / DATA:\nGas dissolved in a liquid solvent under equilibrium at temperature $T$.\n\n3. FORMULA / EQUATION:\n$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.\n\n5. FINAL CONCLUSION:\nOption matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nTotal pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume.",
    "solutionStructured": {
      "concept": "Henry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).",
      "given": "Gas dissolved in a liquid solvent under equilibrium at temperature $T$.",
      "formula": "$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).",
      "stepByStep": "1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.",
      "finalAnswer": "Option matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.",
      "whyOtherOptionsWrong": "Total pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-152",
    "questionNumber": 152,
    "question": "Q152. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
    "options": {
      "A": "Decreases with increase in temperature, leading to higher solubility",
      "B": "Remains constant at all temperatures",
      "C": "Is independent of the nature of the gas",
      "D": "Increases with increase in temperature, leading to lower gas solubility"
    },
    "optionsList": [
      "Decreases with increase in temperature, leading to higher solubility",
      "Remains constant at all temperatures",
      "Is independent of the nature of the gas",
      "Increases with increase in temperature, leading to lower gas solubility"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nTemperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.\n\n2. GIVEN INFORMATION / DATA:\nGas dissolving in water with temperature variation.\n\n3. FORMULA / EQUATION:\n$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.\n\n5. FINAL CONCLUSION:\nIncreases with increase in temperature, leading to lower gas solubility.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas.",
    "solutionStructured": {
      "concept": "Temperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.",
      "given": "Gas dissolving in water with temperature variation.",
      "formula": "$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).",
      "stepByStep": "1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.",
      "finalAnswer": "Increases with increase in temperature, leading to lower gas solubility.",
      "whyOtherOptionsWrong": "Option B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-153",
    "questionNumber": 153,
    "question": "Q153. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
    "options": {
      "A": "Benzene and Toluene",
      "B": "Ethanol and Acetone",
      "C": "Chloroform and Acetone",
      "D": "Phenol and Aniline"
    },
    "optionsList": [
      "Benzene and Toluene",
      "Ethanol and Acetone",
      "Chloroform and Acetone",
      "Phenol and Aniline"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nConditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture at standard temperature.\n\n3. FORMULA / EQUATION:\nIdeal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.\n\n5. FINAL CONCLUSION:\nBenzene and Toluene form an ideal solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nEthanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation.",
    "solutionStructured": {
      "concept": "Conditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).",
      "given": "Binary liquid mixture at standard temperature.",
      "formula": "Ideal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.",
      "stepByStep": "1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.",
      "finalAnswer": "Benzene and Toluene form an ideal solution.",
      "whyOtherOptionsWrong": "Ethanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET 2018",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2018"
    }
  },
  {
    "id": "sol-mcq-154",
    "questionNumber": 154,
    "question": "Q154. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
    "options": {
      "A": "Hydrogen bonds present in pure acetone are broken by chloroform",
      "B": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)",
      "C": "The vapor pressure of each component increases significantly upon mixing",
      "D": "The mixing process is endothermic with $\\Delta H_{mix} > 0$"
    },
    "optionsList": [
      "Hydrogen bonds present in pure acetone are broken by chloroform",
      "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)",
      "The vapor pressure of each component increases significantly upon mixing",
      "The mixing process is endothermic with $\\Delta H_{mix} > 0$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNegative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.\n\n2. GIVEN INFORMATION / DATA:\nMixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).\n\n3. FORMULA / EQUATION:\nNegative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.\n\n5. FINAL CONCLUSION:\nIntermolecular hydrogen bonding is formed between acetone and chloroform molecules.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic.",
    "solutionStructured": {
      "concept": "Negative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.",
      "given": "Mixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).",
      "formula": "Negative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.",
      "stepByStep": "1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.",
      "finalAnswer": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules.",
      "whyOtherOptionsWrong": "Pure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-155",
    "questionNumber": 155,
    "question": "Q155. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
    "options": {
      "A": "Molarity of the solute in solution",
      "B": "Nature of the non-volatile solute",
      "C": "Nature of the solvent",
      "D": "Volume of the solution"
    },
    "optionsList": [
      "Molarity of the solute in solution",
      "Nature of the non-volatile solute",
      "Nature of the solvent",
      "Volume of the solution"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEbullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.\n\n2. GIVEN INFORMATION / DATA:\nColligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.\n\n3. FORMULA / EQUATION:\n$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.\n\n5. FINAL CONCLUSION:\nNature of the solvent.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSolute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$.",
    "solutionStructured": {
      "concept": "Ebullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.",
      "given": "Colligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.",
      "formula": "$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).",
      "stepByStep": "1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.",
      "finalAnswer": "Nature of the solvent.",
      "whyOtherOptionsWrong": "Solute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-156",
    "questionNumber": 156,
    "question": "Q156. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
    "options": {
      "A": "$0.10\\text{ M } \\text{BaCl}_2$",
      "B": "$0.10\\text{ M } \\text{NaCl}$",
      "C": "$0.10\\text{ M } \\text{Glucose}$",
      "D": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$"
    },
    "optionsList": [
      "$0.10\\text{ M } \\text{BaCl}_2$",
      "$0.10\\text{ M } \\text{NaCl}$",
      "$0.10\\text{ M } \\text{Glucose}$",
      "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nColligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).\n\n2. GIVEN INFORMATION / DATA:\nFour aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = i \\cdot C \\cdot R \\cdot T$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.\n\n5. FINAL CONCLUSION:\n$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nGlucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$).",
    "solutionStructured": {
      "concept": "Colligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).",
      "given": "Four aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.",
      "formula": "$\\Pi = i \\cdot C \\cdot R \\cdot T$",
      "stepByStep": "1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.",
      "finalAnswer": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "whyOtherOptionsWrong": "Glucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-157",
    "questionNumber": 157,
    "question": "Q157. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
    "options": {
      "A": "$94\\%$",
      "B": "$88\\%$",
      "C": "$97\\%$",
      "D": "$47\\%$"
    },
    "optionsList": [
      "$94\\%$",
      "$88\\%$",
      "$97\\%$",
      "$47\\%$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.\n\n2. GIVEN INFORMATION / DATA:\nSolute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).\n\n3. FORMULA / EQUATION:\n$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.\n\n5. FINAL CONCLUSION:\n$94\\%$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDistractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation.",
    "solutionStructured": {
      "concept": "Relation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.",
      "given": "Solute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).",
      "formula": "$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$",
      "stepByStep": "1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.",
      "finalAnswer": "$94\\%$",
      "whyOtherOptionsWrong": "Distractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-158",
    "questionNumber": 158,
    "question": "Q158. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
    "options": {
      "A": "$18.00\\text{ M}$",
      "B": "$55.55\\text{ M}$",
      "C": "$1.00\\text{ M}$",
      "D": "$5.55\\text{ M}$"
    },
    "optionsList": [
      "$18.00\\text{ M}$",
      "$55.55\\text{ M}$",
      "$1.00\\text{ M}$",
      "$5.55\\text{ M}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMolarity of a pure liquid substance.\n\n2. GIVEN INFORMATION / DATA:\nDensity of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.\n\n3. FORMULA / EQUATION:\n$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.\n\n5. FINAL CONCLUSION:\n$55.55\\text{ M}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10.",
    "solutionStructured": {
      "concept": "Molarity of a pure liquid substance.",
      "given": "Density of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.",
      "formula": "$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$",
      "stepByStep": "1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.",
      "finalAnswer": "$55.55\\text{ M}$",
      "whyOtherOptionsWrong": "$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-159",
    "questionNumber": 159,
    "question": "Q159. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
    "options": {
      "A": "Large negative deviation from Raoult's law",
      "B": "Zero deviation (ideal behavior)",
      "C": "Large positive deviation from Raoult's law",
      "D": "Equal intermolecular attractions between components"
    },
    "optionsList": [
      "Large negative deviation from Raoult's law",
      "Zero deviation (ideal behavior)",
      "Large positive deviation from Raoult's law",
      "Equal intermolecular attractions between components"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMinimum boiling azeotropes and positive deviations from Raoult's law.\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture boiling at a constant minimum temperature.\n\n3. FORMULA / EQUATION:\nHigh vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).\n\n5. FINAL CONCLUSION:\nLarge positive deviation from Raoult's law.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNegative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water).",
    "solutionStructured": {
      "concept": "Minimum boiling azeotropes and positive deviations from Raoult's law.",
      "given": "Binary liquid mixture boiling at a constant minimum temperature.",
      "formula": "High vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.",
      "stepByStep": "1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).",
      "finalAnswer": "Large positive deviation from Raoult's law.",
      "whyOtherOptionsWrong": "Negative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-160",
    "questionNumber": 160,
    "question": "Q160. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
    "options": {
      "A": "$0.186\\text{ K}$",
      "B": "$0.0465\\text{ K}$",
      "C": "$0.930\\text{ K}$",
      "D": "$0.093\\text{ K}$"
    },
    "optionsList": [
      "$0.186\\text{ K}$",
      "$0.0465\\text{ K}$",
      "$0.930\\text{ K}$",
      "$0.093\\text{ K}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDepression in freezing point calculation for a non-electrolyte.\n\n2. GIVEN INFORMATION / DATA:\nMolality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.\n\n3. FORMULA / EQUATION:\n$\\Delta T_f = i \\cdot K_f \\cdot m$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).\n\n5. FINAL CONCLUSION:\n$0.093\\text{ K}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$.",
    "solutionStructured": {
      "concept": "Depression in freezing point calculation for a non-electrolyte.",
      "given": "Molality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.",
      "formula": "$\\Delta T_f = i \\cdot K_f \\cdot m$",
      "stepByStep": "1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).",
      "finalAnswer": "$0.093\\text{ K}$",
      "whyOtherOptionsWrong": "$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-161",
    "questionNumber": 161,
    "question": "Q161. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
    "options": {
      "A": "$0.5$",
      "B": "$1.0$",
      "C": "$2.0$",
      "D": "$0.25$"
    },
    "optionsList": [
      "$0.5$",
      "$1.0$",
      "$2.0$",
      "$0.25$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nAssociation of solute molecules and calculation of van't Hoff factor.\n\n2. GIVEN INFORMATION / DATA:\nBenzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).\n\n3. FORMULA / EQUATION:\n$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.\n\n5. FINAL CONCLUSION:\n$0.5$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization.",
    "solutionStructured": {
      "concept": "Association of solute molecules and calculation of van't Hoff factor.",
      "given": "Benzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).",
      "formula": "$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$",
      "stepByStep": "1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.",
      "finalAnswer": "$0.5$",
      "whyOtherOptionsWrong": "$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-162",
    "questionNumber": 162,
    "question": "Q162. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
    "options": {
      "A": "$23.80\\text{ mm Hg}$",
      "B": "$23.56\\text{ mm Hg}$",
      "C": "$22.61\\text{ mm Hg}$",
      "D": "$20.23\\text{ mm Hg}$"
    },
    "optionsList": [
      "$23.80\\text{ mm Hg}$",
      "$23.56\\text{ mm Hg}$",
      "$22.61\\text{ mm Hg}$",
      "$20.23\\text{ mm Hg}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRaoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).\n\n2. GIVEN INFORMATION / DATA:\nPure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).\n\n3. FORMULA / EQUATION:\n$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.\n\n5. FINAL CONCLUSION:\n$23.56\\text{ mm Hg}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering.",
    "solutionStructured": {
      "concept": "Raoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).",
      "given": "Pure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).",
      "formula": "$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$",
      "stepByStep": "1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.",
      "finalAnswer": "$23.56\\text{ mm Hg}$",
      "whyOtherOptionsWrong": "$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-163",
    "questionNumber": 163,
    "question": "Q163. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
    "options": {
      "A": "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "B": "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "C": "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "D": "$5.0\\% \\text{ (mass/volume) NaCl}$"
    },
    "optionsList": [
      "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "$5.0\\% \\text{ (mass/volume) NaCl}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIsotonic solutions and intravenous fluid administration.\n\n2. GIVEN INFORMATION / DATA:\nHuman red blood cells suspended in saline solution.\n\n3. FORMULA / EQUATION:\nIsotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.\n\n5. FINAL CONCLUSION:\n$0.9\\% \\text{ (mass/volume) NaCl}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis.",
    "solutionStructured": {
      "concept": "Isotonic solutions and intravenous fluid administration.",
      "given": "Human red blood cells suspended in saline solution.",
      "formula": "Isotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.",
      "stepByStep": "1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.",
      "finalAnswer": "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "whyOtherOptionsWrong": "$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-164",
    "questionNumber": 164,
    "question": "Q164. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
    "options": {
      "A": "$1290\\text{ g/mol}$",
      "B": "$516\\text{ g/mol}$",
      "C": "$860\\text{ g/mol}$",
      "D": "$2580\\text{ g/mol}$"
    },
    "optionsList": [
      "$1290\\text{ g/mol}$",
      "$516\\text{ g/mol}$",
      "$860\\text{ g/mol}$",
      "$2580\\text{ g/mol}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDetermination of molar mass of macromolecules using osmotic pressure.\n\n2. GIVEN INFORMATION / DATA:\nSolute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.\n\n5. FINAL CONCLUSION:\n$2580\\text{ g/mol}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nErrors occur if dividing by 2 or neglecting temperature conversion.",
    "solutionStructured": {
      "concept": "Determination of molar mass of macromolecules using osmotic pressure.",
      "given": "Solute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.",
      "formula": "$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$",
      "stepByStep": "1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.",
      "finalAnswer": "$2580\\text{ g/mol}$",
      "whyOtherOptionsWrong": "Errors occur if dividing by 2 or neglecting temperature conversion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-165",
    "questionNumber": 165,
    "question": "Q165. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
    "options": {
      "A": "Osmotic pressure measurement at room temperature",
      "B": "Relative lowering of vapor pressure",
      "C": "Elevation in boiling point ($K_b$ method)",
      "D": "Depression in freezing point ($K_f$ method)"
    },
    "optionsList": [
      "Osmotic pressure measurement at room temperature",
      "Relative lowering of vapor pressure",
      "Elevation in boiling point ($K_b$ method)",
      "Depression in freezing point ($K_f$ method)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuitability of osmotic pressure method for macromolecules.\n\n2. GIVEN INFORMATION / DATA:\nHigh molecular weight biomolecules (proteins, enzymes, nucleic acids).\n\n3. FORMULA / EQUATION:\n$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.\n\n5. FINAL CONCLUSION:\nOsmotic pressure measurement at room temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBoiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately.",
    "solutionStructured": {
      "concept": "Suitability of osmotic pressure method for macromolecules.",
      "given": "High molecular weight biomolecules (proteins, enzymes, nucleic acids).",
      "formula": "$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$",
      "stepByStep": "1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.",
      "finalAnswer": "Osmotic pressure measurement at room temperature.",
      "whyOtherOptionsWrong": "Boiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-166",
    "questionNumber": 166,
    "question": "Q166. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
    "options": {
      "A": "Volume of the liquid solvent",
      "B": "Partial pressure of the gas above the solution",
      "C": "Total atmospheric pressure",
      "D": "Square of the gas pressure"
    },
    "optionsList": [
      "Volume of the liquid solvent",
      "Partial pressure of the gas above the solution",
      "Total atmospheric pressure",
      "Square of the gas pressure"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).\n\n2. GIVEN INFORMATION / DATA:\nGas dissolved in a liquid solvent under equilibrium at temperature $T$.\n\n3. FORMULA / EQUATION:\n$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.\n\n5. FINAL CONCLUSION:\nOption matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nTotal pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume.",
    "solutionStructured": {
      "concept": "Henry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).",
      "given": "Gas dissolved in a liquid solvent under equilibrium at temperature $T$.",
      "formula": "$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).",
      "stepByStep": "1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.",
      "finalAnswer": "Option matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.",
      "whyOtherOptionsWrong": "Total pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-167",
    "questionNumber": 167,
    "question": "Q167. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
    "options": {
      "A": "Decreases with increase in temperature, leading to higher solubility",
      "B": "Remains constant at all temperatures",
      "C": "Increases with increase in temperature, leading to lower gas solubility",
      "D": "Is independent of the nature of the gas"
    },
    "optionsList": [
      "Decreases with increase in temperature, leading to higher solubility",
      "Remains constant at all temperatures",
      "Increases with increase in temperature, leading to lower gas solubility",
      "Is independent of the nature of the gas"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nTemperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.\n\n2. GIVEN INFORMATION / DATA:\nGas dissolving in water with temperature variation.\n\n3. FORMULA / EQUATION:\n$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.\n\n5. FINAL CONCLUSION:\nIncreases with increase in temperature, leading to lower gas solubility.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas.",
    "solutionStructured": {
      "concept": "Temperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.",
      "given": "Gas dissolving in water with temperature variation.",
      "formula": "$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).",
      "stepByStep": "1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.",
      "finalAnswer": "Increases with increase in temperature, leading to lower gas solubility.",
      "whyOtherOptionsWrong": "Option B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-168",
    "questionNumber": 168,
    "question": "Q168. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
    "options": {
      "A": "Ethanol and Acetone",
      "B": "Chloroform and Acetone",
      "C": "Phenol and Aniline",
      "D": "Benzene and Toluene"
    },
    "optionsList": [
      "Ethanol and Acetone",
      "Chloroform and Acetone",
      "Phenol and Aniline",
      "Benzene and Toluene"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nConditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture at standard temperature.\n\n3. FORMULA / EQUATION:\nIdeal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.\n\n5. FINAL CONCLUSION:\nBenzene and Toluene form an ideal solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nEthanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation.",
    "solutionStructured": {
      "concept": "Conditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).",
      "given": "Binary liquid mixture at standard temperature.",
      "formula": "Ideal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.",
      "stepByStep": "1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.",
      "finalAnswer": "Benzene and Toluene form an ideal solution.",
      "whyOtherOptionsWrong": "Ethanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-169",
    "questionNumber": 169,
    "question": "Q169. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
    "options": {
      "A": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)",
      "B": "Hydrogen bonds present in pure acetone are broken by chloroform",
      "C": "The vapor pressure of each component increases significantly upon mixing",
      "D": "The mixing process is endothermic with $\\Delta H_{mix} > 0$"
    },
    "optionsList": [
      "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)",
      "Hydrogen bonds present in pure acetone are broken by chloroform",
      "The vapor pressure of each component increases significantly upon mixing",
      "The mixing process is endothermic with $\\Delta H_{mix} > 0$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNegative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.\n\n2. GIVEN INFORMATION / DATA:\nMixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).\n\n3. FORMULA / EQUATION:\nNegative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.\n\n5. FINAL CONCLUSION:\nIntermolecular hydrogen bonding is formed between acetone and chloroform molecules.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic.",
    "solutionStructured": {
      "concept": "Negative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.",
      "given": "Mixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).",
      "formula": "Negative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.",
      "stepByStep": "1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.",
      "finalAnswer": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules.",
      "whyOtherOptionsWrong": "Pure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-170",
    "questionNumber": 170,
    "question": "Q170. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
    "options": {
      "A": "Molarity of the solute in solution",
      "B": "Nature of the solvent",
      "C": "Nature of the non-volatile solute",
      "D": "Volume of the solution"
    },
    "optionsList": [
      "Molarity of the solute in solution",
      "Nature of the solvent",
      "Nature of the non-volatile solute",
      "Volume of the solution"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEbullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.\n\n2. GIVEN INFORMATION / DATA:\nColligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.\n\n3. FORMULA / EQUATION:\n$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.\n\n5. FINAL CONCLUSION:\nNature of the solvent.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSolute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$.",
    "solutionStructured": {
      "concept": "Ebullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.",
      "given": "Colligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.",
      "formula": "$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).",
      "stepByStep": "1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.",
      "finalAnswer": "Nature of the solvent.",
      "whyOtherOptionsWrong": "Solute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET 2015",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2015"
    }
  },
  {
    "id": "sol-mcq-171",
    "questionNumber": 171,
    "question": "Q171. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
    "options": {
      "A": "$0.10\\text{ M } \\text{BaCl}_2$",
      "B": "$0.10\\text{ M } \\text{NaCl}$",
      "C": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "D": "$0.10\\text{ M } \\text{Glucose}$"
    },
    "optionsList": [
      "$0.10\\text{ M } \\text{BaCl}_2$",
      "$0.10\\text{ M } \\text{NaCl}$",
      "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "$0.10\\text{ M } \\text{Glucose}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nColligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).\n\n2. GIVEN INFORMATION / DATA:\nFour aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = i \\cdot C \\cdot R \\cdot T$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.\n\n5. FINAL CONCLUSION:\n$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nGlucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$).",
    "solutionStructured": {
      "concept": "Colligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).",
      "given": "Four aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.",
      "formula": "$\\Pi = i \\cdot C \\cdot R \\cdot T$",
      "stepByStep": "1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.",
      "finalAnswer": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "whyOtherOptionsWrong": "Glucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-172",
    "questionNumber": 172,
    "question": "Q172. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
    "options": {
      "A": "$88\\%$",
      "B": "$97\\%$",
      "C": "$47\\%$",
      "D": "$94\\%$"
    },
    "optionsList": [
      "$88\\%$",
      "$97\\%$",
      "$47\\%$",
      "$94\\%$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.\n\n2. GIVEN INFORMATION / DATA:\nSolute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).\n\n3. FORMULA / EQUATION:\n$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.\n\n5. FINAL CONCLUSION:\n$94\\%$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDistractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation.",
    "solutionStructured": {
      "concept": "Relation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.",
      "given": "Solute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).",
      "formula": "$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$",
      "stepByStep": "1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.",
      "finalAnswer": "$94\\%$",
      "whyOtherOptionsWrong": "Distractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-173",
    "questionNumber": 173,
    "question": "Q173. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
    "options": {
      "A": "$55.55\\text{ M}$",
      "B": "$18.00\\text{ M}$",
      "C": "$1.00\\text{ M}$",
      "D": "$5.55\\text{ M}$"
    },
    "optionsList": [
      "$55.55\\text{ M}$",
      "$18.00\\text{ M}$",
      "$1.00\\text{ M}$",
      "$5.55\\text{ M}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMolarity of a pure liquid substance.\n\n2. GIVEN INFORMATION / DATA:\nDensity of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.\n\n3. FORMULA / EQUATION:\n$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.\n\n5. FINAL CONCLUSION:\n$55.55\\text{ M}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10.",
    "solutionStructured": {
      "concept": "Molarity of a pure liquid substance.",
      "given": "Density of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.",
      "formula": "$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$",
      "stepByStep": "1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.",
      "finalAnswer": "$55.55\\text{ M}$",
      "whyOtherOptionsWrong": "$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-174",
    "questionNumber": 174,
    "question": "Q174. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
    "options": {
      "A": "Large negative deviation from Raoult's law",
      "B": "Large positive deviation from Raoult's law",
      "C": "Zero deviation (ideal behavior)",
      "D": "Equal intermolecular attractions between components"
    },
    "optionsList": [
      "Large negative deviation from Raoult's law",
      "Large positive deviation from Raoult's law",
      "Zero deviation (ideal behavior)",
      "Equal intermolecular attractions between components"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMinimum boiling azeotropes and positive deviations from Raoult's law.\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture boiling at a constant minimum temperature.\n\n3. FORMULA / EQUATION:\nHigh vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).\n\n5. FINAL CONCLUSION:\nLarge positive deviation from Raoult's law.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNegative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water).",
    "solutionStructured": {
      "concept": "Minimum boiling azeotropes and positive deviations from Raoult's law.",
      "given": "Binary liquid mixture boiling at a constant minimum temperature.",
      "formula": "High vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.",
      "stepByStep": "1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).",
      "finalAnswer": "Large positive deviation from Raoult's law.",
      "whyOtherOptionsWrong": "Negative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-175",
    "questionNumber": 175,
    "question": "Q175. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
    "options": {
      "A": "$0.186\\text{ K}$",
      "B": "$0.0465\\text{ K}$",
      "C": "$0.093\\text{ K}$",
      "D": "$0.930\\text{ K}$"
    },
    "optionsList": [
      "$0.186\\text{ K}$",
      "$0.0465\\text{ K}$",
      "$0.093\\text{ K}$",
      "$0.930\\text{ K}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDepression in freezing point calculation for a non-electrolyte.\n\n2. GIVEN INFORMATION / DATA:\nMolality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.\n\n3. FORMULA / EQUATION:\n$\\Delta T_f = i \\cdot K_f \\cdot m$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).\n\n5. FINAL CONCLUSION:\n$0.093\\text{ K}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$.",
    "solutionStructured": {
      "concept": "Depression in freezing point calculation for a non-electrolyte.",
      "given": "Molality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.",
      "formula": "$\\Delta T_f = i \\cdot K_f \\cdot m$",
      "stepByStep": "1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).",
      "finalAnswer": "$0.093\\text{ K}$",
      "whyOtherOptionsWrong": "$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-176",
    "questionNumber": 176,
    "question": "Q176. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
    "options": {
      "A": "$1.0$",
      "B": "$2.0$",
      "C": "$0.25$",
      "D": "$0.5$"
    },
    "optionsList": [
      "$1.0$",
      "$2.0$",
      "$0.25$",
      "$0.5$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nAssociation of solute molecules and calculation of van't Hoff factor.\n\n2. GIVEN INFORMATION / DATA:\nBenzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).\n\n3. FORMULA / EQUATION:\n$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.\n\n5. FINAL CONCLUSION:\n$0.5$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization.",
    "solutionStructured": {
      "concept": "Association of solute molecules and calculation of van't Hoff factor.",
      "given": "Benzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).",
      "formula": "$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$",
      "stepByStep": "1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.",
      "finalAnswer": "$0.5$",
      "whyOtherOptionsWrong": "$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-177",
    "questionNumber": 177,
    "question": "Q177. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
    "options": {
      "A": "$23.56\\text{ mm Hg}$",
      "B": "$23.80\\text{ mm Hg}$",
      "C": "$22.61\\text{ mm Hg}$",
      "D": "$20.23\\text{ mm Hg}$"
    },
    "optionsList": [
      "$23.56\\text{ mm Hg}$",
      "$23.80\\text{ mm Hg}$",
      "$22.61\\text{ mm Hg}$",
      "$20.23\\text{ mm Hg}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRaoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).\n\n2. GIVEN INFORMATION / DATA:\nPure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).\n\n3. FORMULA / EQUATION:\n$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.\n\n5. FINAL CONCLUSION:\n$23.56\\text{ mm Hg}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering.",
    "solutionStructured": {
      "concept": "Raoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).",
      "given": "Pure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).",
      "formula": "$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$",
      "stepByStep": "1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.",
      "finalAnswer": "$23.56\\text{ mm Hg}$",
      "whyOtherOptionsWrong": "$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-178",
    "questionNumber": 178,
    "question": "Q178. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
    "options": {
      "A": "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "B": "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "C": "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "D": "$5.0\\% \\text{ (mass/volume) NaCl}$"
    },
    "optionsList": [
      "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "$5.0\\% \\text{ (mass/volume) NaCl}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIsotonic solutions and intravenous fluid administration.\n\n2. GIVEN INFORMATION / DATA:\nHuman red blood cells suspended in saline solution.\n\n3. FORMULA / EQUATION:\nIsotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.\n\n5. FINAL CONCLUSION:\n$0.9\\% \\text{ (mass/volume) NaCl}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis.",
    "solutionStructured": {
      "concept": "Isotonic solutions and intravenous fluid administration.",
      "given": "Human red blood cells suspended in saline solution.",
      "formula": "Isotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.",
      "stepByStep": "1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.",
      "finalAnswer": "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "whyOtherOptionsWrong": "$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-179",
    "questionNumber": 179,
    "question": "Q179. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
    "options": {
      "A": "$1290\\text{ g/mol}$",
      "B": "$516\\text{ g/mol}$",
      "C": "$2580\\text{ g/mol}$",
      "D": "$860\\text{ g/mol}$"
    },
    "optionsList": [
      "$1290\\text{ g/mol}$",
      "$516\\text{ g/mol}$",
      "$2580\\text{ g/mol}$",
      "$860\\text{ g/mol}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDetermination of molar mass of macromolecules using osmotic pressure.\n\n2. GIVEN INFORMATION / DATA:\nSolute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.\n\n5. FINAL CONCLUSION:\n$2580\\text{ g/mol}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nErrors occur if dividing by 2 or neglecting temperature conversion.",
    "solutionStructured": {
      "concept": "Determination of molar mass of macromolecules using osmotic pressure.",
      "given": "Solute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.",
      "formula": "$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$",
      "stepByStep": "1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.",
      "finalAnswer": "$2580\\text{ g/mol}$",
      "whyOtherOptionsWrong": "Errors occur if dividing by 2 or neglecting temperature conversion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-180",
    "questionNumber": 180,
    "question": "Q180. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
    "options": {
      "A": "Relative lowering of vapor pressure",
      "B": "Elevation in boiling point ($K_b$ method)",
      "C": "Depression in freezing point ($K_f$ method)",
      "D": "Osmotic pressure measurement at room temperature"
    },
    "optionsList": [
      "Relative lowering of vapor pressure",
      "Elevation in boiling point ($K_b$ method)",
      "Depression in freezing point ($K_f$ method)",
      "Osmotic pressure measurement at room temperature"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuitability of osmotic pressure method for macromolecules.\n\n2. GIVEN INFORMATION / DATA:\nHigh molecular weight biomolecules (proteins, enzymes, nucleic acids).\n\n3. FORMULA / EQUATION:\n$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.\n\n5. FINAL CONCLUSION:\nOsmotic pressure measurement at room temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBoiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately.",
    "solutionStructured": {
      "concept": "Suitability of osmotic pressure method for macromolecules.",
      "given": "High molecular weight biomolecules (proteins, enzymes, nucleic acids).",
      "formula": "$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$",
      "stepByStep": "1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.",
      "finalAnswer": "Osmotic pressure measurement at room temperature.",
      "whyOtherOptionsWrong": "Boiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-181",
    "questionNumber": 181,
    "question": "Q181. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
    "options": {
      "A": "Partial pressure of the gas above the solution",
      "B": "Volume of the liquid solvent",
      "C": "Total atmospheric pressure",
      "D": "Square of the gas pressure"
    },
    "optionsList": [
      "Partial pressure of the gas above the solution",
      "Volume of the liquid solvent",
      "Total atmospheric pressure",
      "Square of the gas pressure"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).\n\n2. GIVEN INFORMATION / DATA:\nGas dissolved in a liquid solvent under equilibrium at temperature $T$.\n\n3. FORMULA / EQUATION:\n$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.\n\n5. FINAL CONCLUSION:\nOption matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nTotal pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume.",
    "solutionStructured": {
      "concept": "Henry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).",
      "given": "Gas dissolved in a liquid solvent under equilibrium at temperature $T$.",
      "formula": "$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).",
      "stepByStep": "1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.",
      "finalAnswer": "Option matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.",
      "whyOtherOptionsWrong": "Total pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-182",
    "questionNumber": 182,
    "question": "Q182. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
    "options": {
      "A": "Decreases with increase in temperature, leading to higher solubility",
      "B": "Increases with increase in temperature, leading to lower gas solubility",
      "C": "Remains constant at all temperatures",
      "D": "Is independent of the nature of the gas"
    },
    "optionsList": [
      "Decreases with increase in temperature, leading to higher solubility",
      "Increases with increase in temperature, leading to lower gas solubility",
      "Remains constant at all temperatures",
      "Is independent of the nature of the gas"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nTemperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.\n\n2. GIVEN INFORMATION / DATA:\nGas dissolving in water with temperature variation.\n\n3. FORMULA / EQUATION:\n$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.\n\n5. FINAL CONCLUSION:\nIncreases with increase in temperature, leading to lower gas solubility.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas.",
    "solutionStructured": {
      "concept": "Temperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.",
      "given": "Gas dissolving in water with temperature variation.",
      "formula": "$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).",
      "stepByStep": "1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.",
      "finalAnswer": "Increases with increase in temperature, leading to lower gas solubility.",
      "whyOtherOptionsWrong": "Option B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-183",
    "questionNumber": 183,
    "question": "Q183. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
    "options": {
      "A": "Ethanol and Acetone",
      "B": "Chloroform and Acetone",
      "C": "Benzene and Toluene",
      "D": "Phenol and Aniline"
    },
    "optionsList": [
      "Ethanol and Acetone",
      "Chloroform and Acetone",
      "Benzene and Toluene",
      "Phenol and Aniline"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nConditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture at standard temperature.\n\n3. FORMULA / EQUATION:\nIdeal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.\n\n5. FINAL CONCLUSION:\nBenzene and Toluene form an ideal solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nEthanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation.",
    "solutionStructured": {
      "concept": "Conditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).",
      "given": "Binary liquid mixture at standard temperature.",
      "formula": "Ideal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.",
      "stepByStep": "1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.",
      "finalAnswer": "Benzene and Toluene form an ideal solution.",
      "whyOtherOptionsWrong": "Ethanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-184",
    "questionNumber": 184,
    "question": "Q184. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
    "options": {
      "A": "Hydrogen bonds present in pure acetone are broken by chloroform",
      "B": "The vapor pressure of each component increases significantly upon mixing",
      "C": "The mixing process is endothermic with $\\Delta H_{mix} > 0$",
      "D": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)"
    },
    "optionsList": [
      "Hydrogen bonds present in pure acetone are broken by chloroform",
      "The vapor pressure of each component increases significantly upon mixing",
      "The mixing process is endothermic with $\\Delta H_{mix} > 0$",
      "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNegative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.\n\n2. GIVEN INFORMATION / DATA:\nMixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).\n\n3. FORMULA / EQUATION:\nNegative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.\n\n5. FINAL CONCLUSION:\nIntermolecular hydrogen bonding is formed between acetone and chloroform molecules.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic.",
    "solutionStructured": {
      "concept": "Negative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.",
      "given": "Mixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).",
      "formula": "Negative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.",
      "stepByStep": "1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.",
      "finalAnswer": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules.",
      "whyOtherOptionsWrong": "Pure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-185",
    "questionNumber": 185,
    "question": "Q185. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
    "options": {
      "A": "Nature of the solvent",
      "B": "Molarity of the solute in solution",
      "C": "Nature of the non-volatile solute",
      "D": "Volume of the solution"
    },
    "optionsList": [
      "Nature of the solvent",
      "Molarity of the solute in solution",
      "Nature of the non-volatile solute",
      "Volume of the solution"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEbullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.\n\n2. GIVEN INFORMATION / DATA:\nColligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.\n\n3. FORMULA / EQUATION:\n$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.\n\n5. FINAL CONCLUSION:\nNature of the solvent.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSolute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$.",
    "solutionStructured": {
      "concept": "Ebullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.",
      "given": "Colligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.",
      "formula": "$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).",
      "stepByStep": "1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.",
      "finalAnswer": "Nature of the solvent.",
      "whyOtherOptionsWrong": "Solute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-186",
    "questionNumber": 186,
    "question": "Q186. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
    "options": {
      "A": "$0.10\\text{ M } \\text{BaCl}_2$",
      "B": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "C": "$0.10\\text{ M } \\text{NaCl}$",
      "D": "$0.10\\text{ M } \\text{Glucose}$"
    },
    "optionsList": [
      "$0.10\\text{ M } \\text{BaCl}_2$",
      "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "$0.10\\text{ M } \\text{NaCl}$",
      "$0.10\\text{ M } \\text{Glucose}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nColligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).\n\n2. GIVEN INFORMATION / DATA:\nFour aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = i \\cdot C \\cdot R \\cdot T$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.\n\n5. FINAL CONCLUSION:\n$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nGlucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$).",
    "solutionStructured": {
      "concept": "Colligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).",
      "given": "Four aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.",
      "formula": "$\\Pi = i \\cdot C \\cdot R \\cdot T$",
      "stepByStep": "1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.",
      "finalAnswer": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "whyOtherOptionsWrong": "Glucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-187",
    "questionNumber": 187,
    "question": "Q187. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
    "options": {
      "A": "$88\\%$",
      "B": "$97\\%$",
      "C": "$94\\%$",
      "D": "$47\\%$"
    },
    "optionsList": [
      "$88\\%$",
      "$97\\%$",
      "$94\\%$",
      "$47\\%$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.\n\n2. GIVEN INFORMATION / DATA:\nSolute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).\n\n3. FORMULA / EQUATION:\n$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.\n\n5. FINAL CONCLUSION:\n$94\\%$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDistractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation.",
    "solutionStructured": {
      "concept": "Relation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.",
      "given": "Solute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).",
      "formula": "$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$",
      "stepByStep": "1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.",
      "finalAnswer": "$94\\%$",
      "whyOtherOptionsWrong": "Distractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET 2022",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2022"
    }
  },
  {
    "id": "sol-mcq-188",
    "questionNumber": 188,
    "question": "Q188. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
    "options": {
      "A": "$18.00\\text{ M}$",
      "B": "$1.00\\text{ M}$",
      "C": "$5.55\\text{ M}$",
      "D": "$55.55\\text{ M}$"
    },
    "optionsList": [
      "$18.00\\text{ M}$",
      "$1.00\\text{ M}$",
      "$5.55\\text{ M}$",
      "$55.55\\text{ M}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMolarity of a pure liquid substance.\n\n2. GIVEN INFORMATION / DATA:\nDensity of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.\n\n3. FORMULA / EQUATION:\n$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.\n\n5. FINAL CONCLUSION:\n$55.55\\text{ M}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10.",
    "solutionStructured": {
      "concept": "Molarity of a pure liquid substance.",
      "given": "Density of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.",
      "formula": "$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$",
      "stepByStep": "1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.",
      "finalAnswer": "$55.55\\text{ M}$",
      "whyOtherOptionsWrong": "$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-189",
    "questionNumber": 189,
    "question": "Q189. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
    "options": {
      "A": "Large positive deviation from Raoult's law",
      "B": "Large negative deviation from Raoult's law",
      "C": "Zero deviation (ideal behavior)",
      "D": "Equal intermolecular attractions between components"
    },
    "optionsList": [
      "Large positive deviation from Raoult's law",
      "Large negative deviation from Raoult's law",
      "Zero deviation (ideal behavior)",
      "Equal intermolecular attractions between components"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMinimum boiling azeotropes and positive deviations from Raoult's law.\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture boiling at a constant minimum temperature.\n\n3. FORMULA / EQUATION:\nHigh vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).\n\n5. FINAL CONCLUSION:\nLarge positive deviation from Raoult's law.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNegative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water).",
    "solutionStructured": {
      "concept": "Minimum boiling azeotropes and positive deviations from Raoult's law.",
      "given": "Binary liquid mixture boiling at a constant minimum temperature.",
      "formula": "High vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.",
      "stepByStep": "1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).",
      "finalAnswer": "Large positive deviation from Raoult's law.",
      "whyOtherOptionsWrong": "Negative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-190",
    "questionNumber": 190,
    "question": "Q190. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
    "options": {
      "A": "$0.186\\text{ K}$",
      "B": "$0.093\\text{ K}$",
      "C": "$0.0465\\text{ K}$",
      "D": "$0.930\\text{ K}$"
    },
    "optionsList": [
      "$0.186\\text{ K}$",
      "$0.093\\text{ K}$",
      "$0.0465\\text{ K}$",
      "$0.930\\text{ K}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDepression in freezing point calculation for a non-electrolyte.\n\n2. GIVEN INFORMATION / DATA:\nMolality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.\n\n3. FORMULA / EQUATION:\n$\\Delta T_f = i \\cdot K_f \\cdot m$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).\n\n5. FINAL CONCLUSION:\n$0.093\\text{ K}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$.",
    "solutionStructured": {
      "concept": "Depression in freezing point calculation for a non-electrolyte.",
      "given": "Molality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.",
      "formula": "$\\Delta T_f = i \\cdot K_f \\cdot m$",
      "stepByStep": "1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).",
      "finalAnswer": "$0.093\\text{ K}$",
      "whyOtherOptionsWrong": "$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-191",
    "questionNumber": 191,
    "question": "Q191. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
    "options": {
      "A": "$1.0$",
      "B": "$2.0$",
      "C": "$0.5$",
      "D": "$0.25$"
    },
    "optionsList": [
      "$1.0$",
      "$2.0$",
      "$0.5$",
      "$0.25$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nAssociation of solute molecules and calculation of van't Hoff factor.\n\n2. GIVEN INFORMATION / DATA:\nBenzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).\n\n3. FORMULA / EQUATION:\n$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.\n\n5. FINAL CONCLUSION:\n$0.5$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization.",
    "solutionStructured": {
      "concept": "Association of solute molecules and calculation of van't Hoff factor.",
      "given": "Benzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).",
      "formula": "$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$",
      "stepByStep": "1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.",
      "finalAnswer": "$0.5$",
      "whyOtherOptionsWrong": "$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-192",
    "questionNumber": 192,
    "question": "Q192. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
    "options": {
      "A": "$23.80\\text{ mm Hg}$",
      "B": "$22.61\\text{ mm Hg}$",
      "C": "$20.23\\text{ mm Hg}$",
      "D": "$23.56\\text{ mm Hg}$"
    },
    "optionsList": [
      "$23.80\\text{ mm Hg}$",
      "$22.61\\text{ mm Hg}$",
      "$20.23\\text{ mm Hg}$",
      "$23.56\\text{ mm Hg}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRaoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).\n\n2. GIVEN INFORMATION / DATA:\nPure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).\n\n3. FORMULA / EQUATION:\n$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.\n\n5. FINAL CONCLUSION:\n$23.56\\text{ mm Hg}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering.",
    "solutionStructured": {
      "concept": "Raoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).",
      "given": "Pure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).",
      "formula": "$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$",
      "stepByStep": "1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.",
      "finalAnswer": "$23.56\\text{ mm Hg}$",
      "whyOtherOptionsWrong": "$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-193",
    "questionNumber": 193,
    "question": "Q193. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
    "options": {
      "A": "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "B": "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "C": "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "D": "$5.0\\% \\text{ (mass/volume) NaCl}$"
    },
    "optionsList": [
      "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "$5.0\\% \\text{ (mass/volume) NaCl}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIsotonic solutions and intravenous fluid administration.\n\n2. GIVEN INFORMATION / DATA:\nHuman red blood cells suspended in saline solution.\n\n3. FORMULA / EQUATION:\nIsotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.\n\n5. FINAL CONCLUSION:\n$0.9\\% \\text{ (mass/volume) NaCl}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis.",
    "solutionStructured": {
      "concept": "Isotonic solutions and intravenous fluid administration.",
      "given": "Human red blood cells suspended in saline solution.",
      "formula": "Isotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.",
      "stepByStep": "1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.",
      "finalAnswer": "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "whyOtherOptionsWrong": "$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-194",
    "questionNumber": 194,
    "question": "Q194. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
    "options": {
      "A": "$1290\\text{ g/mol}$",
      "B": "$2580\\text{ g/mol}$",
      "C": "$516\\text{ g/mol}$",
      "D": "$860\\text{ g/mol}$"
    },
    "optionsList": [
      "$1290\\text{ g/mol}$",
      "$2580\\text{ g/mol}$",
      "$516\\text{ g/mol}$",
      "$860\\text{ g/mol}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDetermination of molar mass of macromolecules using osmotic pressure.\n\n2. GIVEN INFORMATION / DATA:\nSolute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.\n\n5. FINAL CONCLUSION:\n$2580\\text{ g/mol}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nErrors occur if dividing by 2 or neglecting temperature conversion.",
    "solutionStructured": {
      "concept": "Determination of molar mass of macromolecules using osmotic pressure.",
      "given": "Solute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.",
      "formula": "$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$",
      "stepByStep": "1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.",
      "finalAnswer": "$2580\\text{ g/mol}$",
      "whyOtherOptionsWrong": "Errors occur if dividing by 2 or neglecting temperature conversion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-195",
    "questionNumber": 195,
    "question": "Q195. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
    "options": {
      "A": "Relative lowering of vapor pressure",
      "B": "Elevation in boiling point ($K_b$ method)",
      "C": "Osmotic pressure measurement at room temperature",
      "D": "Depression in freezing point ($K_f$ method)"
    },
    "optionsList": [
      "Relative lowering of vapor pressure",
      "Elevation in boiling point ($K_b$ method)",
      "Osmotic pressure measurement at room temperature",
      "Depression in freezing point ($K_f$ method)"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuitability of osmotic pressure method for macromolecules.\n\n2. GIVEN INFORMATION / DATA:\nHigh molecular weight biomolecules (proteins, enzymes, nucleic acids).\n\n3. FORMULA / EQUATION:\n$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.\n\n5. FINAL CONCLUSION:\nOsmotic pressure measurement at room temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBoiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately.",
    "solutionStructured": {
      "concept": "Suitability of osmotic pressure method for macromolecules.",
      "given": "High molecular weight biomolecules (proteins, enzymes, nucleic acids).",
      "formula": "$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$",
      "stepByStep": "1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.",
      "finalAnswer": "Osmotic pressure measurement at room temperature.",
      "whyOtherOptionsWrong": "Boiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-196",
    "questionNumber": 196,
    "question": "Q196. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
    "options": {
      "A": "Volume of the liquid solvent",
      "B": "Total atmospheric pressure",
      "C": "Square of the gas pressure",
      "D": "Partial pressure of the gas above the solution"
    },
    "optionsList": [
      "Volume of the liquid solvent",
      "Total atmospheric pressure",
      "Square of the gas pressure",
      "Partial pressure of the gas above the solution"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).\n\n2. GIVEN INFORMATION / DATA:\nGas dissolved in a liquid solvent under equilibrium at temperature $T$.\n\n3. FORMULA / EQUATION:\n$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.\n\n5. FINAL CONCLUSION:\nOption matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nTotal pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume.",
    "solutionStructured": {
      "concept": "Henry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).",
      "given": "Gas dissolved in a liquid solvent under equilibrium at temperature $T$.",
      "formula": "$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).",
      "stepByStep": "1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.",
      "finalAnswer": "Option matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.",
      "whyOtherOptionsWrong": "Total pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-197",
    "questionNumber": 197,
    "question": "Q197. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
    "options": {
      "A": "Increases with increase in temperature, leading to lower gas solubility",
      "B": "Decreases with increase in temperature, leading to higher solubility",
      "C": "Remains constant at all temperatures",
      "D": "Is independent of the nature of the gas"
    },
    "optionsList": [
      "Increases with increase in temperature, leading to lower gas solubility",
      "Decreases with increase in temperature, leading to higher solubility",
      "Remains constant at all temperatures",
      "Is independent of the nature of the gas"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nTemperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.\n\n2. GIVEN INFORMATION / DATA:\nGas dissolving in water with temperature variation.\n\n3. FORMULA / EQUATION:\n$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.\n\n5. FINAL CONCLUSION:\nIncreases with increase in temperature, leading to lower gas solubility.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas.",
    "solutionStructured": {
      "concept": "Temperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.",
      "given": "Gas dissolving in water with temperature variation.",
      "formula": "$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).",
      "stepByStep": "1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.",
      "finalAnswer": "Increases with increase in temperature, leading to lower gas solubility.",
      "whyOtherOptionsWrong": "Option B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-198",
    "questionNumber": 198,
    "question": "Q198. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
    "options": {
      "A": "Ethanol and Acetone",
      "B": "Benzene and Toluene",
      "C": "Chloroform and Acetone",
      "D": "Phenol and Aniline"
    },
    "optionsList": [
      "Ethanol and Acetone",
      "Benzene and Toluene",
      "Chloroform and Acetone",
      "Phenol and Aniline"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nConditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture at standard temperature.\n\n3. FORMULA / EQUATION:\nIdeal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.\n\n5. FINAL CONCLUSION:\nBenzene and Toluene form an ideal solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nEthanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation.",
    "solutionStructured": {
      "concept": "Conditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).",
      "given": "Binary liquid mixture at standard temperature.",
      "formula": "Ideal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.",
      "stepByStep": "1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.",
      "finalAnswer": "Benzene and Toluene form an ideal solution.",
      "whyOtherOptionsWrong": "Ethanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-199",
    "questionNumber": 199,
    "question": "Q199. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
    "options": {
      "A": "Hydrogen bonds present in pure acetone are broken by chloroform",
      "B": "The vapor pressure of each component increases significantly upon mixing",
      "C": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)",
      "D": "The mixing process is endothermic with $\\Delta H_{mix} > 0$"
    },
    "optionsList": [
      "Hydrogen bonds present in pure acetone are broken by chloroform",
      "The vapor pressure of each component increases significantly upon mixing",
      "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)",
      "The mixing process is endothermic with $\\Delta H_{mix} > 0$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNegative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.\n\n2. GIVEN INFORMATION / DATA:\nMixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).\n\n3. FORMULA / EQUATION:\nNegative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.\n\n5. FINAL CONCLUSION:\nIntermolecular hydrogen bonding is formed between acetone and chloroform molecules.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic.",
    "solutionStructured": {
      "concept": "Negative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.",
      "given": "Mixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).",
      "formula": "Negative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.",
      "stepByStep": "1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.",
      "finalAnswer": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules.",
      "whyOtherOptionsWrong": "Pure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-200",
    "questionNumber": 200,
    "question": "Q200. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
    "options": {
      "A": "Molarity of the solute in solution",
      "B": "Nature of the non-volatile solute",
      "C": "Volume of the solution",
      "D": "Nature of the solvent"
    },
    "optionsList": [
      "Molarity of the solute in solution",
      "Nature of the non-volatile solute",
      "Volume of the solution",
      "Nature of the solvent"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEbullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.\n\n2. GIVEN INFORMATION / DATA:\nColligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.\n\n3. FORMULA / EQUATION:\n$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.\n\n5. FINAL CONCLUSION:\nNature of the solvent.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSolute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$.",
    "solutionStructured": {
      "concept": "Ebullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.",
      "given": "Colligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.",
      "formula": "$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).",
      "stepByStep": "1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.",
      "finalAnswer": "Nature of the solvent.",
      "whyOtherOptionsWrong": "Solute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-201",
    "questionNumber": 201,
    "question": "Q201. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
    "options": {
      "A": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "B": "$0.10\\text{ M } \\text{BaCl}_2$",
      "C": "$0.10\\text{ M } \\text{NaCl}$",
      "D": "$0.10\\text{ M } \\text{Glucose}$"
    },
    "optionsList": [
      "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "$0.10\\text{ M } \\text{BaCl}_2$",
      "$0.10\\text{ M } \\text{NaCl}$",
      "$0.10\\text{ M } \\text{Glucose}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nColligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).\n\n2. GIVEN INFORMATION / DATA:\nFour aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = i \\cdot C \\cdot R \\cdot T$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.\n\n5. FINAL CONCLUSION:\n$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nGlucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$).",
    "solutionStructured": {
      "concept": "Colligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).",
      "given": "Four aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.",
      "formula": "$\\Pi = i \\cdot C \\cdot R \\cdot T$",
      "stepByStep": "1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.",
      "finalAnswer": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "whyOtherOptionsWrong": "Glucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-202",
    "questionNumber": 202,
    "question": "Q202. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
    "options": {
      "A": "$88\\%$",
      "B": "$94\\%$",
      "C": "$97\\%$",
      "D": "$47\\%$"
    },
    "optionsList": [
      "$88\\%$",
      "$94\\%$",
      "$97\\%$",
      "$47\\%$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.\n\n2. GIVEN INFORMATION / DATA:\nSolute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).\n\n3. FORMULA / EQUATION:\n$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.\n\n5. FINAL CONCLUSION:\n$94\\%$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDistractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation.",
    "solutionStructured": {
      "concept": "Relation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.",
      "given": "Solute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).",
      "formula": "$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$",
      "stepByStep": "1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.",
      "finalAnswer": "$94\\%$",
      "whyOtherOptionsWrong": "Distractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-203",
    "questionNumber": 203,
    "question": "Q203. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
    "options": {
      "A": "$18.00\\text{ M}$",
      "B": "$1.00\\text{ M}$",
      "C": "$55.55\\text{ M}$",
      "D": "$5.55\\text{ M}$"
    },
    "optionsList": [
      "$18.00\\text{ M}$",
      "$1.00\\text{ M}$",
      "$55.55\\text{ M}$",
      "$5.55\\text{ M}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMolarity of a pure liquid substance.\n\n2. GIVEN INFORMATION / DATA:\nDensity of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.\n\n3. FORMULA / EQUATION:\n$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.\n\n5. FINAL CONCLUSION:\n$55.55\\text{ M}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10.",
    "solutionStructured": {
      "concept": "Molarity of a pure liquid substance.",
      "given": "Density of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.",
      "formula": "$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$",
      "stepByStep": "1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.",
      "finalAnswer": "$55.55\\text{ M}$",
      "whyOtherOptionsWrong": "$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-204",
    "questionNumber": 204,
    "question": "Q204. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
    "options": {
      "A": "Large negative deviation from Raoult's law",
      "B": "Zero deviation (ideal behavior)",
      "C": "Equal intermolecular attractions between components",
      "D": "Large positive deviation from Raoult's law"
    },
    "optionsList": [
      "Large negative deviation from Raoult's law",
      "Zero deviation (ideal behavior)",
      "Equal intermolecular attractions between components",
      "Large positive deviation from Raoult's law"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMinimum boiling azeotropes and positive deviations from Raoult's law.\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture boiling at a constant minimum temperature.\n\n3. FORMULA / EQUATION:\nHigh vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).\n\n5. FINAL CONCLUSION:\nLarge positive deviation from Raoult's law.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNegative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water).",
    "solutionStructured": {
      "concept": "Minimum boiling azeotropes and positive deviations from Raoult's law.",
      "given": "Binary liquid mixture boiling at a constant minimum temperature.",
      "formula": "High vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.",
      "stepByStep": "1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).",
      "finalAnswer": "Large positive deviation from Raoult's law.",
      "whyOtherOptionsWrong": "Negative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET 2019",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2019"
    }
  },
  {
    "id": "sol-mcq-205",
    "questionNumber": 205,
    "question": "Q205. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
    "options": {
      "A": "$0.093\\text{ K}$",
      "B": "$0.186\\text{ K}$",
      "C": "$0.0465\\text{ K}$",
      "D": "$0.930\\text{ K}$"
    },
    "optionsList": [
      "$0.093\\text{ K}$",
      "$0.186\\text{ K}$",
      "$0.0465\\text{ K}$",
      "$0.930\\text{ K}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDepression in freezing point calculation for a non-electrolyte.\n\n2. GIVEN INFORMATION / DATA:\nMolality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.\n\n3. FORMULA / EQUATION:\n$\\Delta T_f = i \\cdot K_f \\cdot m$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).\n\n5. FINAL CONCLUSION:\n$0.093\\text{ K}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$.",
    "solutionStructured": {
      "concept": "Depression in freezing point calculation for a non-electrolyte.",
      "given": "Molality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.",
      "formula": "$\\Delta T_f = i \\cdot K_f \\cdot m$",
      "stepByStep": "1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).",
      "finalAnswer": "$0.093\\text{ K}$",
      "whyOtherOptionsWrong": "$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-206",
    "questionNumber": 206,
    "question": "Q206. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
    "options": {
      "A": "$1.0$",
      "B": "$0.5$",
      "C": "$2.0$",
      "D": "$0.25$"
    },
    "optionsList": [
      "$1.0$",
      "$0.5$",
      "$2.0$",
      "$0.25$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nAssociation of solute molecules and calculation of van't Hoff factor.\n\n2. GIVEN INFORMATION / DATA:\nBenzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).\n\n3. FORMULA / EQUATION:\n$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.\n\n5. FINAL CONCLUSION:\n$0.5$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization.",
    "solutionStructured": {
      "concept": "Association of solute molecules and calculation of van't Hoff factor.",
      "given": "Benzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).",
      "formula": "$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$",
      "stepByStep": "1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.",
      "finalAnswer": "$0.5$",
      "whyOtherOptionsWrong": "$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-207",
    "questionNumber": 207,
    "question": "Q207. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
    "options": {
      "A": "$23.80\\text{ mm Hg}$",
      "B": "$22.61\\text{ mm Hg}$",
      "C": "$23.56\\text{ mm Hg}$",
      "D": "$20.23\\text{ mm Hg}$"
    },
    "optionsList": [
      "$23.80\\text{ mm Hg}$",
      "$22.61\\text{ mm Hg}$",
      "$23.56\\text{ mm Hg}$",
      "$20.23\\text{ mm Hg}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRaoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).\n\n2. GIVEN INFORMATION / DATA:\nPure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).\n\n3. FORMULA / EQUATION:\n$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.\n\n5. FINAL CONCLUSION:\n$23.56\\text{ mm Hg}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering.",
    "solutionStructured": {
      "concept": "Raoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).",
      "given": "Pure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).",
      "formula": "$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$",
      "stepByStep": "1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.",
      "finalAnswer": "$23.56\\text{ mm Hg}$",
      "whyOtherOptionsWrong": "$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-208",
    "questionNumber": 208,
    "question": "Q208. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
    "options": {
      "A": "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "B": "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "C": "$5.0\\% \\text{ (mass/volume) NaCl}$",
      "D": "$0.9\\% \\text{ (mass/volume) NaCl}$"
    },
    "optionsList": [
      "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "$5.0\\% \\text{ (mass/volume) NaCl}$",
      "$0.9\\% \\text{ (mass/volume) NaCl}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIsotonic solutions and intravenous fluid administration.\n\n2. GIVEN INFORMATION / DATA:\nHuman red blood cells suspended in saline solution.\n\n3. FORMULA / EQUATION:\nIsotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.\n\n5. FINAL CONCLUSION:\n$0.9\\% \\text{ (mass/volume) NaCl}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis.",
    "solutionStructured": {
      "concept": "Isotonic solutions and intravenous fluid administration.",
      "given": "Human red blood cells suspended in saline solution.",
      "formula": "Isotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.",
      "stepByStep": "1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.",
      "finalAnswer": "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "whyOtherOptionsWrong": "$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-209",
    "questionNumber": 209,
    "question": "Q209. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
    "options": {
      "A": "$2580\\text{ g/mol}$",
      "B": "$1290\\text{ g/mol}$",
      "C": "$516\\text{ g/mol}$",
      "D": "$860\\text{ g/mol}$"
    },
    "optionsList": [
      "$2580\\text{ g/mol}$",
      "$1290\\text{ g/mol}$",
      "$516\\text{ g/mol}$",
      "$860\\text{ g/mol}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDetermination of molar mass of macromolecules using osmotic pressure.\n\n2. GIVEN INFORMATION / DATA:\nSolute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.\n\n5. FINAL CONCLUSION:\n$2580\\text{ g/mol}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nErrors occur if dividing by 2 or neglecting temperature conversion.",
    "solutionStructured": {
      "concept": "Determination of molar mass of macromolecules using osmotic pressure.",
      "given": "Solute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.",
      "formula": "$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$",
      "stepByStep": "1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.",
      "finalAnswer": "$2580\\text{ g/mol}$",
      "whyOtherOptionsWrong": "Errors occur if dividing by 2 or neglecting temperature conversion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-210",
    "questionNumber": 210,
    "question": "Q210. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
    "options": {
      "A": "Relative lowering of vapor pressure",
      "B": "Osmotic pressure measurement at room temperature",
      "C": "Elevation in boiling point ($K_b$ method)",
      "D": "Depression in freezing point ($K_f$ method)"
    },
    "optionsList": [
      "Relative lowering of vapor pressure",
      "Osmotic pressure measurement at room temperature",
      "Elevation in boiling point ($K_b$ method)",
      "Depression in freezing point ($K_f$ method)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuitability of osmotic pressure method for macromolecules.\n\n2. GIVEN INFORMATION / DATA:\nHigh molecular weight biomolecules (proteins, enzymes, nucleic acids).\n\n3. FORMULA / EQUATION:\n$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.\n\n5. FINAL CONCLUSION:\nOsmotic pressure measurement at room temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBoiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately.",
    "solutionStructured": {
      "concept": "Suitability of osmotic pressure method for macromolecules.",
      "given": "High molecular weight biomolecules (proteins, enzymes, nucleic acids).",
      "formula": "$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$",
      "stepByStep": "1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.",
      "finalAnswer": "Osmotic pressure measurement at room temperature.",
      "whyOtherOptionsWrong": "Boiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-211",
    "questionNumber": 211,
    "question": "Q211. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
    "options": {
      "A": "Volume of the liquid solvent",
      "B": "Total atmospheric pressure",
      "C": "Partial pressure of the gas above the solution",
      "D": "Square of the gas pressure"
    },
    "optionsList": [
      "Volume of the liquid solvent",
      "Total atmospheric pressure",
      "Partial pressure of the gas above the solution",
      "Square of the gas pressure"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).\n\n2. GIVEN INFORMATION / DATA:\nGas dissolved in a liquid solvent under equilibrium at temperature $T$.\n\n3. FORMULA / EQUATION:\n$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.\n\n5. FINAL CONCLUSION:\nOption matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nTotal pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume.",
    "solutionStructured": {
      "concept": "Henry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).",
      "given": "Gas dissolved in a liquid solvent under equilibrium at temperature $T$.",
      "formula": "$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).",
      "stepByStep": "1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.",
      "finalAnswer": "Option matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.",
      "whyOtherOptionsWrong": "Total pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-212",
    "questionNumber": 212,
    "question": "Q212. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
    "options": {
      "A": "Decreases with increase in temperature, leading to higher solubility",
      "B": "Remains constant at all temperatures",
      "C": "Is independent of the nature of the gas",
      "D": "Increases with increase in temperature, leading to lower gas solubility"
    },
    "optionsList": [
      "Decreases with increase in temperature, leading to higher solubility",
      "Remains constant at all temperatures",
      "Is independent of the nature of the gas",
      "Increases with increase in temperature, leading to lower gas solubility"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nTemperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.\n\n2. GIVEN INFORMATION / DATA:\nGas dissolving in water with temperature variation.\n\n3. FORMULA / EQUATION:\n$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.\n\n5. FINAL CONCLUSION:\nIncreases with increase in temperature, leading to lower gas solubility.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas.",
    "solutionStructured": {
      "concept": "Temperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.",
      "given": "Gas dissolving in water with temperature variation.",
      "formula": "$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).",
      "stepByStep": "1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.",
      "finalAnswer": "Increases with increase in temperature, leading to lower gas solubility.",
      "whyOtherOptionsWrong": "Option B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-213",
    "questionNumber": 213,
    "question": "Q213. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
    "options": {
      "A": "Benzene and Toluene",
      "B": "Ethanol and Acetone",
      "C": "Chloroform and Acetone",
      "D": "Phenol and Aniline"
    },
    "optionsList": [
      "Benzene and Toluene",
      "Ethanol and Acetone",
      "Chloroform and Acetone",
      "Phenol and Aniline"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nConditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture at standard temperature.\n\n3. FORMULA / EQUATION:\nIdeal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.\n\n5. FINAL CONCLUSION:\nBenzene and Toluene form an ideal solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nEthanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation.",
    "solutionStructured": {
      "concept": "Conditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).",
      "given": "Binary liquid mixture at standard temperature.",
      "formula": "Ideal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.",
      "stepByStep": "1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.",
      "finalAnswer": "Benzene and Toluene form an ideal solution.",
      "whyOtherOptionsWrong": "Ethanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-214",
    "questionNumber": 214,
    "question": "Q214. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
    "options": {
      "A": "Hydrogen bonds present in pure acetone are broken by chloroform",
      "B": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)",
      "C": "The vapor pressure of each component increases significantly upon mixing",
      "D": "The mixing process is endothermic with $\\Delta H_{mix} > 0$"
    },
    "optionsList": [
      "Hydrogen bonds present in pure acetone are broken by chloroform",
      "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)",
      "The vapor pressure of each component increases significantly upon mixing",
      "The mixing process is endothermic with $\\Delta H_{mix} > 0$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNegative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.\n\n2. GIVEN INFORMATION / DATA:\nMixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).\n\n3. FORMULA / EQUATION:\nNegative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.\n\n5. FINAL CONCLUSION:\nIntermolecular hydrogen bonding is formed between acetone and chloroform molecules.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic.",
    "solutionStructured": {
      "concept": "Negative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.",
      "given": "Mixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).",
      "formula": "Negative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.",
      "stepByStep": "1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.",
      "finalAnswer": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules.",
      "whyOtherOptionsWrong": "Pure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-215",
    "questionNumber": 215,
    "question": "Q215. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
    "options": {
      "A": "Molarity of the solute in solution",
      "B": "Nature of the non-volatile solute",
      "C": "Nature of the solvent",
      "D": "Volume of the solution"
    },
    "optionsList": [
      "Molarity of the solute in solution",
      "Nature of the non-volatile solute",
      "Nature of the solvent",
      "Volume of the solution"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEbullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.\n\n2. GIVEN INFORMATION / DATA:\nColligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.\n\n3. FORMULA / EQUATION:\n$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.\n\n5. FINAL CONCLUSION:\nNature of the solvent.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSolute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$.",
    "solutionStructured": {
      "concept": "Ebullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.",
      "given": "Colligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.",
      "formula": "$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).",
      "stepByStep": "1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.",
      "finalAnswer": "Nature of the solvent.",
      "whyOtherOptionsWrong": "Solute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-216",
    "questionNumber": 216,
    "question": "Q216. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
    "options": {
      "A": "$0.10\\text{ M } \\text{BaCl}_2$",
      "B": "$0.10\\text{ M } \\text{NaCl}$",
      "C": "$0.10\\text{ M } \\text{Glucose}$",
      "D": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$"
    },
    "optionsList": [
      "$0.10\\text{ M } \\text{BaCl}_2$",
      "$0.10\\text{ M } \\text{NaCl}$",
      "$0.10\\text{ M } \\text{Glucose}$",
      "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nColligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).\n\n2. GIVEN INFORMATION / DATA:\nFour aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = i \\cdot C \\cdot R \\cdot T$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.\n\n5. FINAL CONCLUSION:\n$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nGlucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$).",
    "solutionStructured": {
      "concept": "Colligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).",
      "given": "Four aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.",
      "formula": "$\\Pi = i \\cdot C \\cdot R \\cdot T$",
      "stepByStep": "1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.",
      "finalAnswer": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "whyOtherOptionsWrong": "Glucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-217",
    "questionNumber": 217,
    "question": "Q217. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
    "options": {
      "A": "$94\\%$",
      "B": "$88\\%$",
      "C": "$97\\%$",
      "D": "$47\\%$"
    },
    "optionsList": [
      "$94\\%$",
      "$88\\%$",
      "$97\\%$",
      "$47\\%$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.\n\n2. GIVEN INFORMATION / DATA:\nSolute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).\n\n3. FORMULA / EQUATION:\n$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.\n\n5. FINAL CONCLUSION:\n$94\\%$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDistractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation.",
    "solutionStructured": {
      "concept": "Relation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.",
      "given": "Solute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).",
      "formula": "$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$",
      "stepByStep": "1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.",
      "finalAnswer": "$94\\%$",
      "whyOtherOptionsWrong": "Distractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-218",
    "questionNumber": 218,
    "question": "Q218. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
    "options": {
      "A": "$18.00\\text{ M}$",
      "B": "$55.55\\text{ M}$",
      "C": "$1.00\\text{ M}$",
      "D": "$5.55\\text{ M}$"
    },
    "optionsList": [
      "$18.00\\text{ M}$",
      "$55.55\\text{ M}$",
      "$1.00\\text{ M}$",
      "$5.55\\text{ M}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMolarity of a pure liquid substance.\n\n2. GIVEN INFORMATION / DATA:\nDensity of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.\n\n3. FORMULA / EQUATION:\n$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.\n\n5. FINAL CONCLUSION:\n$55.55\\text{ M}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10.",
    "solutionStructured": {
      "concept": "Molarity of a pure liquid substance.",
      "given": "Density of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.",
      "formula": "$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$",
      "stepByStep": "1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.",
      "finalAnswer": "$55.55\\text{ M}$",
      "whyOtherOptionsWrong": "$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-219",
    "questionNumber": 219,
    "question": "Q219. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
    "options": {
      "A": "Large negative deviation from Raoult's law",
      "B": "Zero deviation (ideal behavior)",
      "C": "Large positive deviation from Raoult's law",
      "D": "Equal intermolecular attractions between components"
    },
    "optionsList": [
      "Large negative deviation from Raoult's law",
      "Zero deviation (ideal behavior)",
      "Large positive deviation from Raoult's law",
      "Equal intermolecular attractions between components"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMinimum boiling azeotropes and positive deviations from Raoult's law.\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture boiling at a constant minimum temperature.\n\n3. FORMULA / EQUATION:\nHigh vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).\n\n5. FINAL CONCLUSION:\nLarge positive deviation from Raoult's law.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNegative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water).",
    "solutionStructured": {
      "concept": "Minimum boiling azeotropes and positive deviations from Raoult's law.",
      "given": "Binary liquid mixture boiling at a constant minimum temperature.",
      "formula": "High vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.",
      "stepByStep": "1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).",
      "finalAnswer": "Large positive deviation from Raoult's law.",
      "whyOtherOptionsWrong": "Negative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-220",
    "questionNumber": 220,
    "question": "Q220. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
    "options": {
      "A": "$0.186\\text{ K}$",
      "B": "$0.0465\\text{ K}$",
      "C": "$0.930\\text{ K}$",
      "D": "$0.093\\text{ K}$"
    },
    "optionsList": [
      "$0.186\\text{ K}$",
      "$0.0465\\text{ K}$",
      "$0.930\\text{ K}$",
      "$0.093\\text{ K}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDepression in freezing point calculation for a non-electrolyte.\n\n2. GIVEN INFORMATION / DATA:\nMolality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.\n\n3. FORMULA / EQUATION:\n$\\Delta T_f = i \\cdot K_f \\cdot m$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).\n\n5. FINAL CONCLUSION:\n$0.093\\text{ K}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$.",
    "solutionStructured": {
      "concept": "Depression in freezing point calculation for a non-electrolyte.",
      "given": "Molality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.",
      "formula": "$\\Delta T_f = i \\cdot K_f \\cdot m$",
      "stepByStep": "1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).",
      "finalAnswer": "$0.093\\text{ K}$",
      "whyOtherOptionsWrong": "$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-221",
    "questionNumber": 221,
    "question": "Q221. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
    "options": {
      "A": "$0.5$",
      "B": "$1.0$",
      "C": "$2.0$",
      "D": "$0.25$"
    },
    "optionsList": [
      "$0.5$",
      "$1.0$",
      "$2.0$",
      "$0.25$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nAssociation of solute molecules and calculation of van't Hoff factor.\n\n2. GIVEN INFORMATION / DATA:\nBenzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).\n\n3. FORMULA / EQUATION:\n$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.\n\n5. FINAL CONCLUSION:\n$0.5$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization.",
    "solutionStructured": {
      "concept": "Association of solute molecules and calculation of van't Hoff factor.",
      "given": "Benzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).",
      "formula": "$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$",
      "stepByStep": "1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.",
      "finalAnswer": "$0.5$",
      "whyOtherOptionsWrong": "$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET 2016",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2016"
    }
  },
  {
    "id": "sol-mcq-222",
    "questionNumber": 222,
    "question": "Q222. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
    "options": {
      "A": "$23.80\\text{ mm Hg}$",
      "B": "$23.56\\text{ mm Hg}$",
      "C": "$22.61\\text{ mm Hg}$",
      "D": "$20.23\\text{ mm Hg}$"
    },
    "optionsList": [
      "$23.80\\text{ mm Hg}$",
      "$23.56\\text{ mm Hg}$",
      "$22.61\\text{ mm Hg}$",
      "$20.23\\text{ mm Hg}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRaoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).\n\n2. GIVEN INFORMATION / DATA:\nPure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).\n\n3. FORMULA / EQUATION:\n$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.\n\n5. FINAL CONCLUSION:\n$23.56\\text{ mm Hg}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering.",
    "solutionStructured": {
      "concept": "Raoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).",
      "given": "Pure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).",
      "formula": "$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$",
      "stepByStep": "1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.",
      "finalAnswer": "$23.56\\text{ mm Hg}$",
      "whyOtherOptionsWrong": "$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-223",
    "questionNumber": 223,
    "question": "Q223. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
    "options": {
      "A": "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "B": "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "C": "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "D": "$5.0\\% \\text{ (mass/volume) NaCl}$"
    },
    "optionsList": [
      "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "$5.0\\% \\text{ (mass/volume) NaCl}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIsotonic solutions and intravenous fluid administration.\n\n2. GIVEN INFORMATION / DATA:\nHuman red blood cells suspended in saline solution.\n\n3. FORMULA / EQUATION:\nIsotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.\n\n5. FINAL CONCLUSION:\n$0.9\\% \\text{ (mass/volume) NaCl}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis.",
    "solutionStructured": {
      "concept": "Isotonic solutions and intravenous fluid administration.",
      "given": "Human red blood cells suspended in saline solution.",
      "formula": "Isotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.",
      "stepByStep": "1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.",
      "finalAnswer": "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "whyOtherOptionsWrong": "$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-224",
    "questionNumber": 224,
    "question": "Q224. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
    "options": {
      "A": "$1290\\text{ g/mol}$",
      "B": "$516\\text{ g/mol}$",
      "C": "$860\\text{ g/mol}$",
      "D": "$2580\\text{ g/mol}$"
    },
    "optionsList": [
      "$1290\\text{ g/mol}$",
      "$516\\text{ g/mol}$",
      "$860\\text{ g/mol}$",
      "$2580\\text{ g/mol}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDetermination of molar mass of macromolecules using osmotic pressure.\n\n2. GIVEN INFORMATION / DATA:\nSolute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.\n\n5. FINAL CONCLUSION:\n$2580\\text{ g/mol}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nErrors occur if dividing by 2 or neglecting temperature conversion.",
    "solutionStructured": {
      "concept": "Determination of molar mass of macromolecules using osmotic pressure.",
      "given": "Solute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.",
      "formula": "$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$",
      "stepByStep": "1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.",
      "finalAnswer": "$2580\\text{ g/mol}$",
      "whyOtherOptionsWrong": "Errors occur if dividing by 2 or neglecting temperature conversion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-225",
    "questionNumber": 225,
    "question": "Q225. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
    "options": {
      "A": "Osmotic pressure measurement at room temperature",
      "B": "Relative lowering of vapor pressure",
      "C": "Elevation in boiling point ($K_b$ method)",
      "D": "Depression in freezing point ($K_f$ method)"
    },
    "optionsList": [
      "Osmotic pressure measurement at room temperature",
      "Relative lowering of vapor pressure",
      "Elevation in boiling point ($K_b$ method)",
      "Depression in freezing point ($K_f$ method)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuitability of osmotic pressure method for macromolecules.\n\n2. GIVEN INFORMATION / DATA:\nHigh molecular weight biomolecules (proteins, enzymes, nucleic acids).\n\n3. FORMULA / EQUATION:\n$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.\n\n5. FINAL CONCLUSION:\nOsmotic pressure measurement at room temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBoiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately.",
    "solutionStructured": {
      "concept": "Suitability of osmotic pressure method for macromolecules.",
      "given": "High molecular weight biomolecules (proteins, enzymes, nucleic acids).",
      "formula": "$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$",
      "stepByStep": "1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.",
      "finalAnswer": "Osmotic pressure measurement at room temperature.",
      "whyOtherOptionsWrong": "Boiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-226",
    "questionNumber": 226,
    "question": "Q226. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
    "options": {
      "A": "Volume of the liquid solvent",
      "B": "Partial pressure of the gas above the solution",
      "C": "Total atmospheric pressure",
      "D": "Square of the gas pressure"
    },
    "optionsList": [
      "Volume of the liquid solvent",
      "Partial pressure of the gas above the solution",
      "Total atmospheric pressure",
      "Square of the gas pressure"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).\n\n2. GIVEN INFORMATION / DATA:\nGas dissolved in a liquid solvent under equilibrium at temperature $T$.\n\n3. FORMULA / EQUATION:\n$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.\n\n5. FINAL CONCLUSION:\nOption matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nTotal pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume.",
    "solutionStructured": {
      "concept": "Henry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).",
      "given": "Gas dissolved in a liquid solvent under equilibrium at temperature $T$.",
      "formula": "$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).",
      "stepByStep": "1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.",
      "finalAnswer": "Option matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.",
      "whyOtherOptionsWrong": "Total pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-227",
    "questionNumber": 227,
    "question": "Q227. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
    "options": {
      "A": "Decreases with increase in temperature, leading to higher solubility",
      "B": "Remains constant at all temperatures",
      "C": "Increases with increase in temperature, leading to lower gas solubility",
      "D": "Is independent of the nature of the gas"
    },
    "optionsList": [
      "Decreases with increase in temperature, leading to higher solubility",
      "Remains constant at all temperatures",
      "Increases with increase in temperature, leading to lower gas solubility",
      "Is independent of the nature of the gas"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nTemperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.\n\n2. GIVEN INFORMATION / DATA:\nGas dissolving in water with temperature variation.\n\n3. FORMULA / EQUATION:\n$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.\n\n5. FINAL CONCLUSION:\nIncreases with increase in temperature, leading to lower gas solubility.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas.",
    "solutionStructured": {
      "concept": "Temperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.",
      "given": "Gas dissolving in water with temperature variation.",
      "formula": "$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).",
      "stepByStep": "1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.",
      "finalAnswer": "Increases with increase in temperature, leading to lower gas solubility.",
      "whyOtherOptionsWrong": "Option B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-228",
    "questionNumber": 228,
    "question": "Q228. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
    "options": {
      "A": "Ethanol and Acetone",
      "B": "Chloroform and Acetone",
      "C": "Phenol and Aniline",
      "D": "Benzene and Toluene"
    },
    "optionsList": [
      "Ethanol and Acetone",
      "Chloroform and Acetone",
      "Phenol and Aniline",
      "Benzene and Toluene"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nConditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture at standard temperature.\n\n3. FORMULA / EQUATION:\nIdeal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.\n\n5. FINAL CONCLUSION:\nBenzene and Toluene form an ideal solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nEthanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation.",
    "solutionStructured": {
      "concept": "Conditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).",
      "given": "Binary liquid mixture at standard temperature.",
      "formula": "Ideal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.",
      "stepByStep": "1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.",
      "finalAnswer": "Benzene and Toluene form an ideal solution.",
      "whyOtherOptionsWrong": "Ethanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-229",
    "questionNumber": 229,
    "question": "Q229. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
    "options": {
      "A": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)",
      "B": "Hydrogen bonds present in pure acetone are broken by chloroform",
      "C": "The vapor pressure of each component increases significantly upon mixing",
      "D": "The mixing process is endothermic with $\\Delta H_{mix} > 0$"
    },
    "optionsList": [
      "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)",
      "Hydrogen bonds present in pure acetone are broken by chloroform",
      "The vapor pressure of each component increases significantly upon mixing",
      "The mixing process is endothermic with $\\Delta H_{mix} > 0$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNegative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.\n\n2. GIVEN INFORMATION / DATA:\nMixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).\n\n3. FORMULA / EQUATION:\nNegative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.\n\n5. FINAL CONCLUSION:\nIntermolecular hydrogen bonding is formed between acetone and chloroform molecules.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic.",
    "solutionStructured": {
      "concept": "Negative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.",
      "given": "Mixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).",
      "formula": "Negative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.",
      "stepByStep": "1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.",
      "finalAnswer": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules.",
      "whyOtherOptionsWrong": "Pure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-230",
    "questionNumber": 230,
    "question": "Q230. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
    "options": {
      "A": "Molarity of the solute in solution",
      "B": "Nature of the solvent",
      "C": "Nature of the non-volatile solute",
      "D": "Volume of the solution"
    },
    "optionsList": [
      "Molarity of the solute in solution",
      "Nature of the solvent",
      "Nature of the non-volatile solute",
      "Volume of the solution"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEbullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.\n\n2. GIVEN INFORMATION / DATA:\nColligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.\n\n3. FORMULA / EQUATION:\n$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.\n\n5. FINAL CONCLUSION:\nNature of the solvent.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSolute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$.",
    "solutionStructured": {
      "concept": "Ebullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.",
      "given": "Colligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.",
      "formula": "$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).",
      "stepByStep": "1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.",
      "finalAnswer": "Nature of the solvent.",
      "whyOtherOptionsWrong": "Solute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-231",
    "questionNumber": 231,
    "question": "Q231. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
    "options": {
      "A": "$0.10\\text{ M } \\text{BaCl}_2$",
      "B": "$0.10\\text{ M } \\text{NaCl}$",
      "C": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "D": "$0.10\\text{ M } \\text{Glucose}$"
    },
    "optionsList": [
      "$0.10\\text{ M } \\text{BaCl}_2$",
      "$0.10\\text{ M } \\text{NaCl}$",
      "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "$0.10\\text{ M } \\text{Glucose}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nColligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).\n\n2. GIVEN INFORMATION / DATA:\nFour aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = i \\cdot C \\cdot R \\cdot T$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.\n\n5. FINAL CONCLUSION:\n$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nGlucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$).",
    "solutionStructured": {
      "concept": "Colligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).",
      "given": "Four aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.",
      "formula": "$\\Pi = i \\cdot C \\cdot R \\cdot T$",
      "stepByStep": "1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.",
      "finalAnswer": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "whyOtherOptionsWrong": "Glucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-232",
    "questionNumber": 232,
    "question": "Q232. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
    "options": {
      "A": "$88\\%$",
      "B": "$97\\%$",
      "C": "$47\\%$",
      "D": "$94\\%$"
    },
    "optionsList": [
      "$88\\%$",
      "$97\\%$",
      "$47\\%$",
      "$94\\%$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.\n\n2. GIVEN INFORMATION / DATA:\nSolute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).\n\n3. FORMULA / EQUATION:\n$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.\n\n5. FINAL CONCLUSION:\n$94\\%$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDistractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation.",
    "solutionStructured": {
      "concept": "Relation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.",
      "given": "Solute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).",
      "formula": "$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$",
      "stepByStep": "1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.",
      "finalAnswer": "$94\\%$",
      "whyOtherOptionsWrong": "Distractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-233",
    "questionNumber": 233,
    "question": "Q233. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
    "options": {
      "A": "$55.55\\text{ M}$",
      "B": "$18.00\\text{ M}$",
      "C": "$1.00\\text{ M}$",
      "D": "$5.55\\text{ M}$"
    },
    "optionsList": [
      "$55.55\\text{ M}$",
      "$18.00\\text{ M}$",
      "$1.00\\text{ M}$",
      "$5.55\\text{ M}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMolarity of a pure liquid substance.\n\n2. GIVEN INFORMATION / DATA:\nDensity of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.\n\n3. FORMULA / EQUATION:\n$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.\n\n5. FINAL CONCLUSION:\n$55.55\\text{ M}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10.",
    "solutionStructured": {
      "concept": "Molarity of a pure liquid substance.",
      "given": "Density of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.",
      "formula": "$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$",
      "stepByStep": "1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.",
      "finalAnswer": "$55.55\\text{ M}$",
      "whyOtherOptionsWrong": "$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-234",
    "questionNumber": 234,
    "question": "Q234. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
    "options": {
      "A": "Large negative deviation from Raoult's law",
      "B": "Large positive deviation from Raoult's law",
      "C": "Zero deviation (ideal behavior)",
      "D": "Equal intermolecular attractions between components"
    },
    "optionsList": [
      "Large negative deviation from Raoult's law",
      "Large positive deviation from Raoult's law",
      "Zero deviation (ideal behavior)",
      "Equal intermolecular attractions between components"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMinimum boiling azeotropes and positive deviations from Raoult's law.\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture boiling at a constant minimum temperature.\n\n3. FORMULA / EQUATION:\nHigh vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).\n\n5. FINAL CONCLUSION:\nLarge positive deviation from Raoult's law.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNegative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water).",
    "solutionStructured": {
      "concept": "Minimum boiling azeotropes and positive deviations from Raoult's law.",
      "given": "Binary liquid mixture boiling at a constant minimum temperature.",
      "formula": "High vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.",
      "stepByStep": "1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).",
      "finalAnswer": "Large positive deviation from Raoult's law.",
      "whyOtherOptionsWrong": "Negative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-235",
    "questionNumber": 235,
    "question": "Q235. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
    "options": {
      "A": "$0.186\\text{ K}$",
      "B": "$0.0465\\text{ K}$",
      "C": "$0.093\\text{ K}$",
      "D": "$0.930\\text{ K}$"
    },
    "optionsList": [
      "$0.186\\text{ K}$",
      "$0.0465\\text{ K}$",
      "$0.093\\text{ K}$",
      "$0.930\\text{ K}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDepression in freezing point calculation for a non-electrolyte.\n\n2. GIVEN INFORMATION / DATA:\nMolality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.\n\n3. FORMULA / EQUATION:\n$\\Delta T_f = i \\cdot K_f \\cdot m$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).\n\n5. FINAL CONCLUSION:\n$0.093\\text{ K}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$.",
    "solutionStructured": {
      "concept": "Depression in freezing point calculation for a non-electrolyte.",
      "given": "Molality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.",
      "formula": "$\\Delta T_f = i \\cdot K_f \\cdot m$",
      "stepByStep": "1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).",
      "finalAnswer": "$0.093\\text{ K}$",
      "whyOtherOptionsWrong": "$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-236",
    "questionNumber": 236,
    "question": "Q236. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
    "options": {
      "A": "$1.0$",
      "B": "$2.0$",
      "C": "$0.25$",
      "D": "$0.5$"
    },
    "optionsList": [
      "$1.0$",
      "$2.0$",
      "$0.25$",
      "$0.5$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nAssociation of solute molecules and calculation of van't Hoff factor.\n\n2. GIVEN INFORMATION / DATA:\nBenzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).\n\n3. FORMULA / EQUATION:\n$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.\n\n5. FINAL CONCLUSION:\n$0.5$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization.",
    "solutionStructured": {
      "concept": "Association of solute molecules and calculation of van't Hoff factor.",
      "given": "Benzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).",
      "formula": "$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$",
      "stepByStep": "1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.",
      "finalAnswer": "$0.5$",
      "whyOtherOptionsWrong": "$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-237",
    "questionNumber": 237,
    "question": "Q237. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
    "options": {
      "A": "$23.56\\text{ mm Hg}$",
      "B": "$23.80\\text{ mm Hg}$",
      "C": "$22.61\\text{ mm Hg}$",
      "D": "$20.23\\text{ mm Hg}$"
    },
    "optionsList": [
      "$23.56\\text{ mm Hg}$",
      "$23.80\\text{ mm Hg}$",
      "$22.61\\text{ mm Hg}$",
      "$20.23\\text{ mm Hg}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRaoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).\n\n2. GIVEN INFORMATION / DATA:\nPure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).\n\n3. FORMULA / EQUATION:\n$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.\n\n5. FINAL CONCLUSION:\n$23.56\\text{ mm Hg}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering.",
    "solutionStructured": {
      "concept": "Raoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).",
      "given": "Pure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).",
      "formula": "$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$",
      "stepByStep": "1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.",
      "finalAnswer": "$23.56\\text{ mm Hg}$",
      "whyOtherOptionsWrong": "$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-238",
    "questionNumber": 238,
    "question": "Q238. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
    "options": {
      "A": "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "B": "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "C": "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "D": "$5.0\\% \\text{ (mass/volume) NaCl}$"
    },
    "optionsList": [
      "$1.5\\% \\text{ (mass/volume) NaCl}$",
      "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "$0.2\\% \\text{ (mass/volume) NaCl}$",
      "$5.0\\% \\text{ (mass/volume) NaCl}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIsotonic solutions and intravenous fluid administration.\n\n2. GIVEN INFORMATION / DATA:\nHuman red blood cells suspended in saline solution.\n\n3. FORMULA / EQUATION:\nIsotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.\n\n5. FINAL CONCLUSION:\n$0.9\\% \\text{ (mass/volume) NaCl}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis.",
    "solutionStructured": {
      "concept": "Isotonic solutions and intravenous fluid administration.",
      "given": "Human red blood cells suspended in saline solution.",
      "formula": "Isotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.",
      "stepByStep": "1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.",
      "finalAnswer": "$0.9\\% \\text{ (mass/volume) NaCl}$",
      "whyOtherOptionsWrong": "$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET 2023",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2023"
    }
  },
  {
    "id": "sol-mcq-239",
    "questionNumber": 239,
    "question": "Q239. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
    "options": {
      "A": "$1290\\text{ g/mol}$",
      "B": "$516\\text{ g/mol}$",
      "C": "$2580\\text{ g/mol}$",
      "D": "$860\\text{ g/mol}$"
    },
    "optionsList": [
      "$1290\\text{ g/mol}$",
      "$516\\text{ g/mol}$",
      "$2580\\text{ g/mol}$",
      "$860\\text{ g/mol}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDetermination of molar mass of macromolecules using osmotic pressure.\n\n2. GIVEN INFORMATION / DATA:\nSolute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.\n\n5. FINAL CONCLUSION:\n$2580\\text{ g/mol}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nErrors occur if dividing by 2 or neglecting temperature conversion.",
    "solutionStructured": {
      "concept": "Determination of molar mass of macromolecules using osmotic pressure.",
      "given": "Solute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.",
      "formula": "$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$",
      "stepByStep": "1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.",
      "finalAnswer": "$2580\\text{ g/mol}$",
      "whyOtherOptionsWrong": "Errors occur if dividing by 2 or neglecting temperature conversion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-240",
    "questionNumber": 240,
    "question": "Q240. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
    "options": {
      "A": "Relative lowering of vapor pressure",
      "B": "Elevation in boiling point ($K_b$ method)",
      "C": "Depression in freezing point ($K_f$ method)",
      "D": "Osmotic pressure measurement at room temperature"
    },
    "optionsList": [
      "Relative lowering of vapor pressure",
      "Elevation in boiling point ($K_b$ method)",
      "Depression in freezing point ($K_f$ method)",
      "Osmotic pressure measurement at room temperature"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuitability of osmotic pressure method for macromolecules.\n\n2. GIVEN INFORMATION / DATA:\nHigh molecular weight biomolecules (proteins, enzymes, nucleic acids).\n\n3. FORMULA / EQUATION:\n$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.\n\n5. FINAL CONCLUSION:\nOsmotic pressure measurement at room temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nBoiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately.",
    "solutionStructured": {
      "concept": "Suitability of osmotic pressure method for macromolecules.",
      "given": "High molecular weight biomolecules (proteins, enzymes, nucleic acids).",
      "formula": "$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$",
      "stepByStep": "1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.",
      "finalAnswer": "Osmotic pressure measurement at room temperature.",
      "whyOtherOptionsWrong": "Boiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-241",
    "questionNumber": 241,
    "question": "Q241. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
    "options": {
      "A": "Partial pressure of the gas above the solution",
      "B": "Volume of the liquid solvent",
      "C": "Total atmospheric pressure",
      "D": "Square of the gas pressure"
    },
    "optionsList": [
      "Partial pressure of the gas above the solution",
      "Volume of the liquid solvent",
      "Total atmospheric pressure",
      "Square of the gas pressure"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).\n\n2. GIVEN INFORMATION / DATA:\nGas dissolved in a liquid solvent under equilibrium at temperature $T$.\n\n3. FORMULA / EQUATION:\n$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.\n\n5. FINAL CONCLUSION:\nOption matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nTotal pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume.",
    "solutionStructured": {
      "concept": "Henry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).",
      "given": "Gas dissolved in a liquid solvent under equilibrium at temperature $T$.",
      "formula": "$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).",
      "stepByStep": "1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.",
      "finalAnswer": "Option matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.",
      "whyOtherOptionsWrong": "Total pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-242",
    "questionNumber": 242,
    "question": "Q242. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
    "options": {
      "A": "Decreases with increase in temperature, leading to higher solubility",
      "B": "Increases with increase in temperature, leading to lower gas solubility",
      "C": "Remains constant at all temperatures",
      "D": "Is independent of the nature of the gas"
    },
    "optionsList": [
      "Decreases with increase in temperature, leading to higher solubility",
      "Increases with increase in temperature, leading to lower gas solubility",
      "Remains constant at all temperatures",
      "Is independent of the nature of the gas"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nTemperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.\n\n2. GIVEN INFORMATION / DATA:\nGas dissolving in water with temperature variation.\n\n3. FORMULA / EQUATION:\n$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.\n\n5. FINAL CONCLUSION:\nIncreases with increase in temperature, leading to lower gas solubility.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas.",
    "solutionStructured": {
      "concept": "Temperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.",
      "given": "Gas dissolving in water with temperature variation.",
      "formula": "$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).",
      "stepByStep": "1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.",
      "finalAnswer": "Increases with increase in temperature, leading to lower gas solubility.",
      "whyOtherOptionsWrong": "Option B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-243",
    "questionNumber": 243,
    "question": "Q243. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
    "options": {
      "A": "Ethanol and Acetone",
      "B": "Chloroform and Acetone",
      "C": "Benzene and Toluene",
      "D": "Phenol and Aniline"
    },
    "optionsList": [
      "Ethanol and Acetone",
      "Chloroform and Acetone",
      "Benzene and Toluene",
      "Phenol and Aniline"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nConditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture at standard temperature.\n\n3. FORMULA / EQUATION:\nIdeal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.\n\n5. FINAL CONCLUSION:\nBenzene and Toluene form an ideal solution.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nEthanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation.",
    "solutionStructured": {
      "concept": "Conditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).",
      "given": "Binary liquid mixture at standard temperature.",
      "formula": "Ideal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.",
      "stepByStep": "1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.",
      "finalAnswer": "Benzene and Toluene form an ideal solution.",
      "whyOtherOptionsWrong": "Ethanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-244",
    "questionNumber": 244,
    "question": "Q244. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
    "options": {
      "A": "Hydrogen bonds present in pure acetone are broken by chloroform",
      "B": "The vapor pressure of each component increases significantly upon mixing",
      "C": "The mixing process is endothermic with $\\Delta H_{mix} > 0$",
      "D": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)"
    },
    "optionsList": [
      "Hydrogen bonds present in pure acetone are broken by chloroform",
      "The vapor pressure of each component increases significantly upon mixing",
      "The mixing process is endothermic with $\\Delta H_{mix} > 0$",
      "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNegative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.\n\n2. GIVEN INFORMATION / DATA:\nMixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).\n\n3. FORMULA / EQUATION:\nNegative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.\n\n5. FINAL CONCLUSION:\nIntermolecular hydrogen bonding is formed between acetone and chloroform molecules.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nPure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic.",
    "solutionStructured": {
      "concept": "Negative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.",
      "given": "Mixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).",
      "formula": "Negative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.",
      "stepByStep": "1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.",
      "finalAnswer": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules.",
      "whyOtherOptionsWrong": "Pure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-245",
    "questionNumber": 245,
    "question": "Q245. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
    "options": {
      "A": "Nature of the solvent",
      "B": "Molarity of the solute in solution",
      "C": "Nature of the non-volatile solute",
      "D": "Volume of the solution"
    },
    "optionsList": [
      "Nature of the solvent",
      "Molarity of the solute in solution",
      "Nature of the non-volatile solute",
      "Volume of the solution"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEbullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.\n\n2. GIVEN INFORMATION / DATA:\nColligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.\n\n3. FORMULA / EQUATION:\n$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.\n\n5. FINAL CONCLUSION:\nNature of the solvent.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSolute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$.",
    "solutionStructured": {
      "concept": "Ebullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.",
      "given": "Colligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.",
      "formula": "$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).",
      "stepByStep": "1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.",
      "finalAnswer": "Nature of the solvent.",
      "whyOtherOptionsWrong": "Solute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-246",
    "questionNumber": 246,
    "question": "Q246. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
    "options": {
      "A": "$0.10\\text{ M } \\text{BaCl}_2$",
      "B": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "C": "$0.10\\text{ M } \\text{NaCl}$",
      "D": "$0.10\\text{ M } \\text{Glucose}$"
    },
    "optionsList": [
      "$0.10\\text{ M } \\text{BaCl}_2$",
      "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "$0.10\\text{ M } \\text{NaCl}$",
      "$0.10\\text{ M } \\text{Glucose}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nColligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).\n\n2. GIVEN INFORMATION / DATA:\nFour aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$\\Pi = i \\cdot C \\cdot R \\cdot T$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.\n\n5. FINAL CONCLUSION:\n$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nGlucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$).",
    "solutionStructured": {
      "concept": "Colligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).",
      "given": "Four aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.",
      "formula": "$\\Pi = i \\cdot C \\cdot R \\cdot T$",
      "stepByStep": "1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.",
      "finalAnswer": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
      "whyOtherOptionsWrong": "Glucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-247",
    "questionNumber": 247,
    "question": "Q247. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
    "options": {
      "A": "$88\\%$",
      "B": "$97\\%$",
      "C": "$94\\%$",
      "D": "$47\\%$"
    },
    "optionsList": [
      "$88\\%$",
      "$97\\%$",
      "$94\\%$",
      "$47\\%$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.\n\n2. GIVEN INFORMATION / DATA:\nSolute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).\n\n3. FORMULA / EQUATION:\n$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.\n\n5. FINAL CONCLUSION:\n$94\\%$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDistractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation.",
    "solutionStructured": {
      "concept": "Relation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.",
      "given": "Solute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).",
      "formula": "$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$",
      "stepByStep": "1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.",
      "finalAnswer": "$94\\%$",
      "whyOtherOptionsWrong": "Distractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Van't Hoff Factor",
    "topicId": "chem-van-thoff-factor",
    "subtopic": "Abnormal Molecular Mass & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-248",
    "questionNumber": 248,
    "question": "Q248. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
    "options": {
      "A": "$18.00\\text{ M}$",
      "B": "$1.00\\text{ M}$",
      "C": "$5.55\\text{ M}$",
      "D": "$55.55\\text{ M}$"
    },
    "optionsList": [
      "$18.00\\text{ M}$",
      "$1.00\\text{ M}$",
      "$5.55\\text{ M}$",
      "$55.55\\text{ M}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMolarity of a pure liquid substance.\n\n2. GIVEN INFORMATION / DATA:\nDensity of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.\n\n3. FORMULA / EQUATION:\n$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.\n\n5. FINAL CONCLUSION:\n$55.55\\text{ M}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10.",
    "solutionStructured": {
      "concept": "Molarity of a pure liquid substance.",
      "given": "Density of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.",
      "formula": "$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$",
      "stepByStep": "1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.",
      "finalAnswer": "$55.55\\text{ M}$",
      "whyOtherOptionsWrong": "$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Henry's & Raoult's Law",
    "topicId": "chem-henrys-raoults-law",
    "subtopic": "Vapour Pressure & Gas Solubility",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-249",
    "questionNumber": 249,
    "question": "Q249. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
    "options": {
      "A": "Large positive deviation from Raoult's law",
      "B": "Large negative deviation from Raoult's law",
      "C": "Zero deviation (ideal behavior)",
      "D": "Equal intermolecular attractions between components"
    },
    "optionsList": [
      "Large positive deviation from Raoult's law",
      "Large negative deviation from Raoult's law",
      "Zero deviation (ideal behavior)",
      "Equal intermolecular attractions between components"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nMinimum boiling azeotropes and positive deviations from Raoult's law.\n\n2. GIVEN INFORMATION / DATA:\nBinary liquid mixture boiling at a constant minimum temperature.\n\n3. FORMULA / EQUATION:\nHigh vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).\n\n5. FINAL CONCLUSION:\nLarge positive deviation from Raoult's law.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nNegative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water).",
    "solutionStructured": {
      "concept": "Minimum boiling azeotropes and positive deviations from Raoult's law.",
      "given": "Binary liquid mixture boiling at a constant minimum temperature.",
      "formula": "High vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.",
      "stepByStep": "1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).",
      "finalAnswer": "Large positive deviation from Raoult's law.",
      "whyOtherOptionsWrong": "Negative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water)."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Ideal and Non-ideal Solutions",
    "topicId": "chem-ideal-nonideal-solutions",
    "subtopic": "Deviations & Azeotropes",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "sol-mcq-250",
    "questionNumber": 250,
    "question": "Q250. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
    "options": {
      "A": "$0.186\\text{ K}$",
      "B": "$0.093\\text{ K}$",
      "C": "$0.0465\\text{ K}$",
      "D": "$0.930\\text{ K}$"
    },
    "optionsList": [
      "$0.186\\text{ K}$",
      "$0.093\\text{ K}$",
      "$0.0465\\text{ K}$",
      "$0.930\\text{ K}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nDepression in freezing point calculation for a non-electrolyte.\n\n2. GIVEN INFORMATION / DATA:\nMolality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.\n\n3. FORMULA / EQUATION:\n$\\Delta T_f = i \\cdot K_f \\cdot m$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).\n\n5. FINAL CONCLUSION:\n$0.093\\text{ K}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$.",
    "solutionStructured": {
      "concept": "Depression in freezing point calculation for a non-electrolyte.",
      "given": "Molality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.",
      "formula": "$\\Delta T_f = i \\cdot K_f \\cdot m$",
      "stepByStep": "1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).",
      "finalAnswer": "$0.093\\text{ K}$",
      "whyOtherOptionsWrong": "$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Solutions",
    "chapterId": "solutions",
    "topic": "Colligative Properties",
    "topicId": "chem-colligative-properties",
    "subtopic": "Osmotic Pressure, Boiling Point & Freezing Point",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  }
];
