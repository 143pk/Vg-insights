// Part 3: Q251 to Q375 (Medium: 125 MCQs)
// Chapter: Solutions (ID: solutions) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const SOLUTIONS_PART3_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "sol-mcq-251",
    "questionNumber": 251,
    "question": "Q251. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
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
    "id": "sol-mcq-252",
    "questionNumber": 252,
    "question": "Q252. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
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
    "id": "sol-mcq-253",
    "questionNumber": 253,
    "question": "Q253. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
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
    "id": "sol-mcq-254",
    "questionNumber": 254,
    "question": "Q254. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
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
    "id": "sol-mcq-255",
    "questionNumber": 255,
    "question": "Q255. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
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
    "source": "NEET 2020",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2020"
    }
  },
  {
    "id": "sol-mcq-256",
    "questionNumber": 256,
    "question": "Q256. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
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
    "id": "sol-mcq-257",
    "questionNumber": 257,
    "question": "Q257. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
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
    "id": "sol-mcq-258",
    "questionNumber": 258,
    "question": "Q258. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
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
    "id": "sol-mcq-259",
    "questionNumber": 259,
    "question": "Q259. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
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
    "id": "sol-mcq-260",
    "questionNumber": 260,
    "question": "Q260. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
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
    "id": "sol-mcq-261",
    "questionNumber": 261,
    "question": "Q261. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
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
    "id": "sol-mcq-262",
    "questionNumber": 262,
    "question": "Q262. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
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
    "id": "sol-mcq-263",
    "questionNumber": 263,
    "question": "Q263. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
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
    "id": "sol-mcq-264",
    "questionNumber": 264,
    "question": "Q264. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
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
    "id": "sol-mcq-265",
    "questionNumber": 265,
    "question": "Q265. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
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
    "id": "sol-mcq-266",
    "questionNumber": 266,
    "question": "Q266. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
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
    "id": "sol-mcq-267",
    "questionNumber": 267,
    "question": "Q267. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
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
    "id": "sol-mcq-268",
    "questionNumber": 268,
    "question": "Q268. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
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
    "id": "sol-mcq-269",
    "questionNumber": 269,
    "question": "Q269. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
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
    "id": "sol-mcq-270",
    "questionNumber": 270,
    "question": "Q270. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
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
    "id": "sol-mcq-271",
    "questionNumber": 271,
    "question": "Q271. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
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
    "id": "sol-mcq-272",
    "questionNumber": 272,
    "question": "Q272. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
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
    "source": "NEET 2017",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2017"
    }
  },
  {
    "id": "sol-mcq-273",
    "questionNumber": 273,
    "question": "Q273. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
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
    "id": "sol-mcq-274",
    "questionNumber": 274,
    "question": "Q274. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
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
    "id": "sol-mcq-275",
    "questionNumber": 275,
    "question": "Q275. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
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
    "id": "sol-mcq-276",
    "questionNumber": 276,
    "question": "Q276. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
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
    "id": "sol-mcq-277",
    "questionNumber": 277,
    "question": "Q277. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
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
    "id": "sol-mcq-278",
    "questionNumber": 278,
    "question": "Q278. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
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
    "id": "sol-mcq-279",
    "questionNumber": 279,
    "question": "Q279. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
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
    "id": "sol-mcq-280",
    "questionNumber": 280,
    "question": "Q280. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
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
    "id": "sol-mcq-281",
    "questionNumber": 281,
    "question": "Q281. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
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
    "id": "sol-mcq-282",
    "questionNumber": 282,
    "question": "Q282. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
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
    "id": "sol-mcq-283",
    "questionNumber": 283,
    "question": "Q283. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
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
    "id": "sol-mcq-284",
    "questionNumber": 284,
    "question": "Q284. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
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
    "id": "sol-mcq-285",
    "questionNumber": 285,
    "question": "Q285. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
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
    "id": "sol-mcq-286",
    "questionNumber": 286,
    "question": "Q286. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
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
    "id": "sol-mcq-287",
    "questionNumber": 287,
    "question": "Q287. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
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
    "id": "sol-mcq-288",
    "questionNumber": 288,
    "question": "Q288. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
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
    "id": "sol-mcq-289",
    "questionNumber": 289,
    "question": "Q289. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
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
    "source": "NEET 2024",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2024"
    }
  },
  {
    "id": "sol-mcq-290",
    "questionNumber": 290,
    "question": "Q290. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
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
    "id": "sol-mcq-291",
    "questionNumber": 291,
    "question": "Q291. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
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
    "id": "sol-mcq-292",
    "questionNumber": 292,
    "question": "Q292. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
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
    "id": "sol-mcq-293",
    "questionNumber": 293,
    "question": "Q293. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
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
    "id": "sol-mcq-294",
    "questionNumber": 294,
    "question": "Q294. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
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
    "id": "sol-mcq-295",
    "questionNumber": 295,
    "question": "Q295. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
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
    "id": "sol-mcq-296",
    "questionNumber": 296,
    "question": "Q296. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
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
    "id": "sol-mcq-297",
    "questionNumber": 297,
    "question": "Q297. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
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
    "id": "sol-mcq-298",
    "questionNumber": 298,
    "question": "Q298. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
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
    "id": "sol-mcq-299",
    "questionNumber": 299,
    "question": "Q299. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
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
    "id": "sol-mcq-300",
    "questionNumber": 300,
    "question": "Q300. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
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
    "id": "sol-mcq-301",
    "questionNumber": 301,
    "question": "Q301. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
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
    "id": "sol-mcq-302",
    "questionNumber": 302,
    "question": "Q302. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
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
    "id": "sol-mcq-303",
    "questionNumber": 303,
    "question": "Q303. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
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
    "id": "sol-mcq-304",
    "questionNumber": 304,
    "question": "Q304. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
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
    "id": "sol-mcq-305",
    "questionNumber": 305,
    "question": "Q305. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
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
    "id": "sol-mcq-306",
    "questionNumber": 306,
    "question": "Q306. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
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
    "source": "NEET 2021",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2021"
    }
  },
  {
    "id": "sol-mcq-307",
    "questionNumber": 307,
    "question": "Q307. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
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
    "id": "sol-mcq-308",
    "questionNumber": 308,
    "question": "Q308. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
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
    "id": "sol-mcq-309",
    "questionNumber": 309,
    "question": "Q309. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
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
    "id": "sol-mcq-310",
    "questionNumber": 310,
    "question": "Q310. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
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
    "id": "sol-mcq-311",
    "questionNumber": 311,
    "question": "Q311. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
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
    "id": "sol-mcq-312",
    "questionNumber": 312,
    "question": "Q312. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
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
    "id": "sol-mcq-313",
    "questionNumber": 313,
    "question": "Q313. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
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
    "id": "sol-mcq-314",
    "questionNumber": 314,
    "question": "Q314. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
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
    "id": "sol-mcq-315",
    "questionNumber": 315,
    "question": "Q315. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
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
    "id": "sol-mcq-316",
    "questionNumber": 316,
    "question": "Q316. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
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
    "id": "sol-mcq-317",
    "questionNumber": 317,
    "question": "Q317. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
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
    "id": "sol-mcq-318",
    "questionNumber": 318,
    "question": "Q318. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
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
    "id": "sol-mcq-319",
    "questionNumber": 319,
    "question": "Q319. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
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
    "id": "sol-mcq-320",
    "questionNumber": 320,
    "question": "Q320. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
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
    "id": "sol-mcq-321",
    "questionNumber": 321,
    "question": "Q321. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
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
    "id": "sol-mcq-322",
    "questionNumber": 322,
    "question": "Q322. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
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
    "id": "sol-mcq-323",
    "questionNumber": 323,
    "question": "Q323. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
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
    "source": "NEET 2018",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2018"
    }
  },
  {
    "id": "sol-mcq-324",
    "questionNumber": 324,
    "question": "Q324. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
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
    "id": "sol-mcq-325",
    "questionNumber": 325,
    "question": "Q325. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
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
    "id": "sol-mcq-326",
    "questionNumber": 326,
    "question": "Q326. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
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
    "id": "sol-mcq-327",
    "questionNumber": 327,
    "question": "Q327. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
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
    "id": "sol-mcq-328",
    "questionNumber": 328,
    "question": "Q328. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
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
    "id": "sol-mcq-329",
    "questionNumber": 329,
    "question": "Q329. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
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
    "id": "sol-mcq-330",
    "questionNumber": 330,
    "question": "Q330. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
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
    "id": "sol-mcq-331",
    "questionNumber": 331,
    "question": "Q331. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
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
    "id": "sol-mcq-332",
    "questionNumber": 332,
    "question": "Q332. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
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
    "id": "sol-mcq-333",
    "questionNumber": 333,
    "question": "Q333. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
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
    "id": "sol-mcq-334",
    "questionNumber": 334,
    "question": "Q334. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
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
    "id": "sol-mcq-335",
    "questionNumber": 335,
    "question": "Q335. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
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
    "id": "sol-mcq-336",
    "questionNumber": 336,
    "question": "Q336. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
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
    "id": "sol-mcq-337",
    "questionNumber": 337,
    "question": "Q337. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
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
    "id": "sol-mcq-338",
    "questionNumber": 338,
    "question": "Q338. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
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
    "id": "sol-mcq-339",
    "questionNumber": 339,
    "question": "Q339. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
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
    "id": "sol-mcq-340",
    "questionNumber": 340,
    "question": "Q340. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
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
    "source": "NEET 2015",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2015"
    }
  },
  {
    "id": "sol-mcq-341",
    "questionNumber": 341,
    "question": "Q341. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
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
    "id": "sol-mcq-342",
    "questionNumber": 342,
    "question": "Q342. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
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
    "id": "sol-mcq-343",
    "questionNumber": 343,
    "question": "Q343. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
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
    "id": "sol-mcq-344",
    "questionNumber": 344,
    "question": "Q344. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
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
    "id": "sol-mcq-345",
    "questionNumber": 345,
    "question": "Q345. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
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
    "id": "sol-mcq-346",
    "questionNumber": 346,
    "question": "Q346. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
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
    "id": "sol-mcq-347",
    "questionNumber": 347,
    "question": "Q347. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
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
    "id": "sol-mcq-348",
    "questionNumber": 348,
    "question": "Q348. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
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
    "id": "sol-mcq-349",
    "questionNumber": 349,
    "question": "Q349. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
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
    "id": "sol-mcq-350",
    "questionNumber": 350,
    "question": "Q350. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
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
    "id": "sol-mcq-351",
    "questionNumber": 351,
    "question": "Q351. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
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
    "id": "sol-mcq-352",
    "questionNumber": 352,
    "question": "Q352. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
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
    "id": "sol-mcq-353",
    "questionNumber": 353,
    "question": "Q353. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
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
    "id": "sol-mcq-354",
    "questionNumber": 354,
    "question": "Q354. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
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
    "id": "sol-mcq-355",
    "questionNumber": 355,
    "question": "Q355. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
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
    "id": "sol-mcq-356",
    "questionNumber": 356,
    "question": "Q356. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
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
    "id": "sol-mcq-357",
    "questionNumber": 357,
    "question": "Q357. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
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
    "source": "NEET 2022",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2022"
    }
  },
  {
    "id": "sol-mcq-358",
    "questionNumber": 358,
    "question": "Q358. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
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
    "id": "sol-mcq-359",
    "questionNumber": 359,
    "question": "Q359. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
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
    "id": "sol-mcq-360",
    "questionNumber": 360,
    "question": "Q360. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
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
    "id": "sol-mcq-361",
    "questionNumber": 361,
    "question": "Q361. (NEET Medium) According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
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
    "id": "sol-mcq-362",
    "questionNumber": 362,
    "question": "Q362. (NEET Medium) The value of Henry's law constant $K_H$ for a gas:",
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
    "id": "sol-mcq-363",
    "questionNumber": 363,
    "question": "Q363. (NEET Medium) Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
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
    "id": "sol-mcq-364",
    "questionNumber": 364,
    "question": "Q364. (NEET Medium) When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
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
    "id": "sol-mcq-365",
    "questionNumber": 365,
    "question": "Q365. (NEET Medium) The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
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
    "id": "sol-mcq-366",
    "questionNumber": 366,
    "question": "Q366. (NEET Medium) Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
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
    "id": "sol-mcq-367",
    "questionNumber": 367,
    "question": "Q367. (NEET Medium) An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
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
    "id": "sol-mcq-368",
    "questionNumber": 368,
    "question": "Q368. (NEET Medium) What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
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
    "id": "sol-mcq-369",
    "questionNumber": 369,
    "question": "Q369. (NEET Medium) An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
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
    "id": "sol-mcq-370",
    "questionNumber": 370,
    "question": "Q370. (NEET Medium) The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
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
    "id": "sol-mcq-371",
    "questionNumber": 371,
    "question": "Q371. (NEET Medium) If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
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
    "id": "sol-mcq-372",
    "questionNumber": 372,
    "question": "Q372. (NEET Medium) The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
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
    "id": "sol-mcq-373",
    "questionNumber": 373,
    "question": "Q373. (NEET Medium) Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
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
    "id": "sol-mcq-374",
    "questionNumber": 374,
    "question": "Q374. (NEET Medium) A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
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
    "source": "NEET 2019",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2019"
    }
  },
  {
    "id": "sol-mcq-375",
    "questionNumber": 375,
    "question": "Q375. (NEET Medium) Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
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
  }
];
