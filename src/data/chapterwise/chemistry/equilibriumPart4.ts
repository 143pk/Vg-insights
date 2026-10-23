// Part 4: Q376 to Q500 (Hard: 125 MCQs)
// Chapter: Equilibrium (ID: equilibrium) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const EQUILIBRIUM_PART4_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "eq-mcq-376",
    "questionNumber": 376,
    "question": "Q376. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-377",
    "questionNumber": 377,
    "question": "Q377. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-378",
    "questionNumber": 378,
    "question": "Q378. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-379",
    "questionNumber": 379,
    "question": "Q379. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-380",
    "questionNumber": 380,
    "question": "Q380. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-381",
    "questionNumber": 381,
    "question": "Q381. [Advanced NEET Challenge] A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
    "options": {
      "A": "$4.76$",
      "B": "$5.76$",
      "C": "$3.76$",
      "D": "$7.00$"
    },
    "optionsList": [
      "$4.76$",
      "$5.76$",
      "$3.76$",
      "$7.00$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenderson-Hasselbalch equation for acidic buffer solutions.\n\n2. GIVEN INFORMATION / DATA:\nWeak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.\n\n3. FORMULA / EQUATION:\n$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.\n\n5. FINAL CONCLUSION:\n$4.76$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$.",
    "solutionStructured": {
      "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
      "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
      "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
      "stepByStep": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
      "finalAnswer": "$4.76$",
      "whyOtherOptionsWrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-382",
    "questionNumber": 382,
    "question": "Q382. [Advanced NEET Challenge] For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
    "options": {
      "A": "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "B": "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "C": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "D": "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    },
    "optionsList": [
      "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEffect of inert gas addition at constant volume on chemical equilibrium.\n\n2. GIVEN INFORMATION / DATA:\nAddition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.\n\n3. FORMULA / EQUATION:\n$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.\n\n5. FINAL CONCLUSION:\nAll of these reactions (inert gas at constant volume never affects any equilibrium).\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nInert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume.",
    "solutionStructured": {
      "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
      "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
      "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
      "stepByStep": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
      "finalAnswer": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
      "whyOtherOptionsWrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-383",
    "questionNumber": 383,
    "question": "Q383. [Advanced NEET Challenge] The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
    "options": {
      "A": "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "B": "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "C": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "D": "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    },
    "optionsList": [
      "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBronsted-Lowry definition of conjugate acid-base pairs.\n\n2. GIVEN INFORMATION / DATA:\nAmphiprotic species $HSO_4^-$.\n\n3. FORMULA / EQUATION:\nConjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.\n\n5. FINAL CONCLUSION:\n$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas.",
    "solutionStructured": {
      "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
      "given": "Amphiprotic species $HSO_4^-$.",
      "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
      "stepByStep": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
      "finalAnswer": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "whyOtherOptionsWrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-384",
    "questionNumber": 384,
    "question": "Q384. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-385",
    "questionNumber": 385,
    "question": "Q385. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-386",
    "questionNumber": 386,
    "question": "Q386. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-387",
    "questionNumber": 387,
    "question": "Q387. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-388",
    "questionNumber": 388,
    "question": "Q388. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-389",
    "questionNumber": 389,
    "question": "Q389. [Advanced NEET Challenge] A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
    "options": {
      "A": "$4.76$",
      "B": "$5.76$",
      "C": "$3.76$",
      "D": "$7.00$"
    },
    "optionsList": [
      "$4.76$",
      "$5.76$",
      "$3.76$",
      "$7.00$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenderson-Hasselbalch equation for acidic buffer solutions.\n\n2. GIVEN INFORMATION / DATA:\nWeak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.\n\n3. FORMULA / EQUATION:\n$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.\n\n5. FINAL CONCLUSION:\n$4.76$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$.",
    "solutionStructured": {
      "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
      "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
      "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
      "stepByStep": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
      "finalAnswer": "$4.76$",
      "whyOtherOptionsWrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-390",
    "questionNumber": 390,
    "question": "Q390. [Advanced NEET Challenge] For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
    "options": {
      "A": "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "B": "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "C": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "D": "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    },
    "optionsList": [
      "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEffect of inert gas addition at constant volume on chemical equilibrium.\n\n2. GIVEN INFORMATION / DATA:\nAddition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.\n\n3. FORMULA / EQUATION:\n$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.\n\n5. FINAL CONCLUSION:\nAll of these reactions (inert gas at constant volume never affects any equilibrium).\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nInert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume.",
    "solutionStructured": {
      "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
      "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
      "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
      "stepByStep": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
      "finalAnswer": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
      "whyOtherOptionsWrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET 2019",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2019"
    }
  },
  {
    "id": "eq-mcq-391",
    "questionNumber": 391,
    "question": "Q391. [Advanced NEET Challenge] The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
    "options": {
      "A": "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "B": "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "C": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "D": "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    },
    "optionsList": [
      "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBronsted-Lowry definition of conjugate acid-base pairs.\n\n2. GIVEN INFORMATION / DATA:\nAmphiprotic species $HSO_4^-$.\n\n3. FORMULA / EQUATION:\nConjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.\n\n5. FINAL CONCLUSION:\n$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas.",
    "solutionStructured": {
      "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
      "given": "Amphiprotic species $HSO_4^-$.",
      "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
      "stepByStep": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
      "finalAnswer": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "whyOtherOptionsWrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-392",
    "questionNumber": 392,
    "question": "Q392. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-393",
    "questionNumber": 393,
    "question": "Q393. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-394",
    "questionNumber": 394,
    "question": "Q394. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-395",
    "questionNumber": 395,
    "question": "Q395. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-396",
    "questionNumber": 396,
    "question": "Q396. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-397",
    "questionNumber": 397,
    "question": "Q397. [Advanced NEET Challenge] A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
    "options": {
      "A": "$4.76$",
      "B": "$5.76$",
      "C": "$3.76$",
      "D": "$7.00$"
    },
    "optionsList": [
      "$4.76$",
      "$5.76$",
      "$3.76$",
      "$7.00$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenderson-Hasselbalch equation for acidic buffer solutions.\n\n2. GIVEN INFORMATION / DATA:\nWeak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.\n\n3. FORMULA / EQUATION:\n$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.\n\n5. FINAL CONCLUSION:\n$4.76$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$.",
    "solutionStructured": {
      "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
      "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
      "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
      "stepByStep": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
      "finalAnswer": "$4.76$",
      "whyOtherOptionsWrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-398",
    "questionNumber": 398,
    "question": "Q398. [Advanced NEET Challenge] For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
    "options": {
      "A": "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "B": "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "C": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "D": "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    },
    "optionsList": [
      "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEffect of inert gas addition at constant volume on chemical equilibrium.\n\n2. GIVEN INFORMATION / DATA:\nAddition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.\n\n3. FORMULA / EQUATION:\n$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.\n\n5. FINAL CONCLUSION:\nAll of these reactions (inert gas at constant volume never affects any equilibrium).\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nInert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume.",
    "solutionStructured": {
      "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
      "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
      "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
      "stepByStep": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
      "finalAnswer": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
      "whyOtherOptionsWrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-399",
    "questionNumber": 399,
    "question": "Q399. [Advanced NEET Challenge] The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
    "options": {
      "A": "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "B": "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "C": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "D": "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    },
    "optionsList": [
      "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBronsted-Lowry definition of conjugate acid-base pairs.\n\n2. GIVEN INFORMATION / DATA:\nAmphiprotic species $HSO_4^-$.\n\n3. FORMULA / EQUATION:\nConjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.\n\n5. FINAL CONCLUSION:\n$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas.",
    "solutionStructured": {
      "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
      "given": "Amphiprotic species $HSO_4^-$.",
      "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
      "stepByStep": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
      "finalAnswer": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "whyOtherOptionsWrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-400",
    "questionNumber": 400,
    "question": "Q400. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-401",
    "questionNumber": 401,
    "question": "Q401. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-402",
    "questionNumber": 402,
    "question": "Q402. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-403",
    "questionNumber": 403,
    "question": "Q403. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-404",
    "questionNumber": 404,
    "question": "Q404. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-405",
    "questionNumber": 405,
    "question": "Q405. [Advanced NEET Challenge] A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
    "options": {
      "A": "$4.76$",
      "B": "$5.76$",
      "C": "$3.76$",
      "D": "$7.00$"
    },
    "optionsList": [
      "$4.76$",
      "$5.76$",
      "$3.76$",
      "$7.00$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenderson-Hasselbalch equation for acidic buffer solutions.\n\n2. GIVEN INFORMATION / DATA:\nWeak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.\n\n3. FORMULA / EQUATION:\n$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.\n\n5. FINAL CONCLUSION:\n$4.76$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$.",
    "solutionStructured": {
      "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
      "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
      "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
      "stepByStep": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
      "finalAnswer": "$4.76$",
      "whyOtherOptionsWrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET 2016",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2016"
    }
  },
  {
    "id": "eq-mcq-406",
    "questionNumber": 406,
    "question": "Q406. [Advanced NEET Challenge] For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
    "options": {
      "A": "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "B": "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "C": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "D": "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    },
    "optionsList": [
      "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEffect of inert gas addition at constant volume on chemical equilibrium.\n\n2. GIVEN INFORMATION / DATA:\nAddition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.\n\n3. FORMULA / EQUATION:\n$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.\n\n5. FINAL CONCLUSION:\nAll of these reactions (inert gas at constant volume never affects any equilibrium).\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nInert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume.",
    "solutionStructured": {
      "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
      "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
      "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
      "stepByStep": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
      "finalAnswer": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
      "whyOtherOptionsWrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-407",
    "questionNumber": 407,
    "question": "Q407. [Advanced NEET Challenge] The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
    "options": {
      "A": "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "B": "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "C": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "D": "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    },
    "optionsList": [
      "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBronsted-Lowry definition of conjugate acid-base pairs.\n\n2. GIVEN INFORMATION / DATA:\nAmphiprotic species $HSO_4^-$.\n\n3. FORMULA / EQUATION:\nConjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.\n\n5. FINAL CONCLUSION:\n$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas.",
    "solutionStructured": {
      "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
      "given": "Amphiprotic species $HSO_4^-$.",
      "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
      "stepByStep": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
      "finalAnswer": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "whyOtherOptionsWrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-408",
    "questionNumber": 408,
    "question": "Q408. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-409",
    "questionNumber": 409,
    "question": "Q409. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-410",
    "questionNumber": 410,
    "question": "Q410. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-411",
    "questionNumber": 411,
    "question": "Q411. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-412",
    "questionNumber": 412,
    "question": "Q412. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-413",
    "questionNumber": 413,
    "question": "Q413. [Advanced NEET Challenge] A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
    "options": {
      "A": "$4.76$",
      "B": "$5.76$",
      "C": "$3.76$",
      "D": "$7.00$"
    },
    "optionsList": [
      "$4.76$",
      "$5.76$",
      "$3.76$",
      "$7.00$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenderson-Hasselbalch equation for acidic buffer solutions.\n\n2. GIVEN INFORMATION / DATA:\nWeak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.\n\n3. FORMULA / EQUATION:\n$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.\n\n5. FINAL CONCLUSION:\n$4.76$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$.",
    "solutionStructured": {
      "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
      "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
      "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
      "stepByStep": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
      "finalAnswer": "$4.76$",
      "whyOtherOptionsWrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-414",
    "questionNumber": 414,
    "question": "Q414. [Advanced NEET Challenge] For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
    "options": {
      "A": "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "B": "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "C": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "D": "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    },
    "optionsList": [
      "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEffect of inert gas addition at constant volume on chemical equilibrium.\n\n2. GIVEN INFORMATION / DATA:\nAddition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.\n\n3. FORMULA / EQUATION:\n$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.\n\n5. FINAL CONCLUSION:\nAll of these reactions (inert gas at constant volume never affects any equilibrium).\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nInert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume.",
    "solutionStructured": {
      "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
      "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
      "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
      "stepByStep": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
      "finalAnswer": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
      "whyOtherOptionsWrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-415",
    "questionNumber": 415,
    "question": "Q415. [Advanced NEET Challenge] The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
    "options": {
      "A": "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "B": "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "C": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "D": "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    },
    "optionsList": [
      "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBronsted-Lowry definition of conjugate acid-base pairs.\n\n2. GIVEN INFORMATION / DATA:\nAmphiprotic species $HSO_4^-$.\n\n3. FORMULA / EQUATION:\nConjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.\n\n5. FINAL CONCLUSION:\n$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas.",
    "solutionStructured": {
      "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
      "given": "Amphiprotic species $HSO_4^-$.",
      "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
      "stepByStep": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
      "finalAnswer": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "whyOtherOptionsWrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-416",
    "questionNumber": 416,
    "question": "Q416. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-417",
    "questionNumber": 417,
    "question": "Q417. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-418",
    "questionNumber": 418,
    "question": "Q418. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-419",
    "questionNumber": 419,
    "question": "Q419. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-420",
    "questionNumber": 420,
    "question": "Q420. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET 2022",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2022"
    }
  },
  {
    "id": "eq-mcq-421",
    "questionNumber": 421,
    "question": "Q421. [Advanced NEET Challenge] A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
    "options": {
      "A": "$4.76$",
      "B": "$5.76$",
      "C": "$3.76$",
      "D": "$7.00$"
    },
    "optionsList": [
      "$4.76$",
      "$5.76$",
      "$3.76$",
      "$7.00$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenderson-Hasselbalch equation for acidic buffer solutions.\n\n2. GIVEN INFORMATION / DATA:\nWeak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.\n\n3. FORMULA / EQUATION:\n$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.\n\n5. FINAL CONCLUSION:\n$4.76$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$.",
    "solutionStructured": {
      "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
      "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
      "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
      "stepByStep": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
      "finalAnswer": "$4.76$",
      "whyOtherOptionsWrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-422",
    "questionNumber": 422,
    "question": "Q422. [Advanced NEET Challenge] For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
    "options": {
      "A": "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "B": "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "C": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "D": "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    },
    "optionsList": [
      "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEffect of inert gas addition at constant volume on chemical equilibrium.\n\n2. GIVEN INFORMATION / DATA:\nAddition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.\n\n3. FORMULA / EQUATION:\n$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.\n\n5. FINAL CONCLUSION:\nAll of these reactions (inert gas at constant volume never affects any equilibrium).\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nInert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume.",
    "solutionStructured": {
      "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
      "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
      "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
      "stepByStep": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
      "finalAnswer": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
      "whyOtherOptionsWrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-423",
    "questionNumber": 423,
    "question": "Q423. [Advanced NEET Challenge] The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
    "options": {
      "A": "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "B": "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "C": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "D": "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    },
    "optionsList": [
      "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBronsted-Lowry definition of conjugate acid-base pairs.\n\n2. GIVEN INFORMATION / DATA:\nAmphiprotic species $HSO_4^-$.\n\n3. FORMULA / EQUATION:\nConjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.\n\n5. FINAL CONCLUSION:\n$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas.",
    "solutionStructured": {
      "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
      "given": "Amphiprotic species $HSO_4^-$.",
      "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
      "stepByStep": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
      "finalAnswer": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "whyOtherOptionsWrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-424",
    "questionNumber": 424,
    "question": "Q424. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-425",
    "questionNumber": 425,
    "question": "Q425. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-426",
    "questionNumber": 426,
    "question": "Q426. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-427",
    "questionNumber": 427,
    "question": "Q427. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-428",
    "questionNumber": 428,
    "question": "Q428. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-429",
    "questionNumber": 429,
    "question": "Q429. [Advanced NEET Challenge] A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
    "options": {
      "A": "$4.76$",
      "B": "$5.76$",
      "C": "$3.76$",
      "D": "$7.00$"
    },
    "optionsList": [
      "$4.76$",
      "$5.76$",
      "$3.76$",
      "$7.00$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenderson-Hasselbalch equation for acidic buffer solutions.\n\n2. GIVEN INFORMATION / DATA:\nWeak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.\n\n3. FORMULA / EQUATION:\n$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.\n\n5. FINAL CONCLUSION:\n$4.76$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$.",
    "solutionStructured": {
      "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
      "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
      "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
      "stepByStep": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
      "finalAnswer": "$4.76$",
      "whyOtherOptionsWrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-430",
    "questionNumber": 430,
    "question": "Q430. [Advanced NEET Challenge] For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
    "options": {
      "A": "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "B": "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "C": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "D": "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    },
    "optionsList": [
      "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEffect of inert gas addition at constant volume on chemical equilibrium.\n\n2. GIVEN INFORMATION / DATA:\nAddition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.\n\n3. FORMULA / EQUATION:\n$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.\n\n5. FINAL CONCLUSION:\nAll of these reactions (inert gas at constant volume never affects any equilibrium).\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nInert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume.",
    "solutionStructured": {
      "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
      "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
      "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
      "stepByStep": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
      "finalAnswer": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
      "whyOtherOptionsWrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-431",
    "questionNumber": 431,
    "question": "Q431. [Advanced NEET Challenge] The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
    "options": {
      "A": "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "B": "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "C": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "D": "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    },
    "optionsList": [
      "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBronsted-Lowry definition of conjugate acid-base pairs.\n\n2. GIVEN INFORMATION / DATA:\nAmphiprotic species $HSO_4^-$.\n\n3. FORMULA / EQUATION:\nConjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.\n\n5. FINAL CONCLUSION:\n$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas.",
    "solutionStructured": {
      "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
      "given": "Amphiprotic species $HSO_4^-$.",
      "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
      "stepByStep": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
      "finalAnswer": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "whyOtherOptionsWrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-432",
    "questionNumber": 432,
    "question": "Q432. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-433",
    "questionNumber": 433,
    "question": "Q433. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-434",
    "questionNumber": 434,
    "question": "Q434. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-435",
    "questionNumber": 435,
    "question": "Q435. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET 2019",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2019"
    }
  },
  {
    "id": "eq-mcq-436",
    "questionNumber": 436,
    "question": "Q436. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-437",
    "questionNumber": 437,
    "question": "Q437. [Advanced NEET Challenge] A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
    "options": {
      "A": "$4.76$",
      "B": "$5.76$",
      "C": "$3.76$",
      "D": "$7.00$"
    },
    "optionsList": [
      "$4.76$",
      "$5.76$",
      "$3.76$",
      "$7.00$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenderson-Hasselbalch equation for acidic buffer solutions.\n\n2. GIVEN INFORMATION / DATA:\nWeak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.\n\n3. FORMULA / EQUATION:\n$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.\n\n5. FINAL CONCLUSION:\n$4.76$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$.",
    "solutionStructured": {
      "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
      "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
      "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
      "stepByStep": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
      "finalAnswer": "$4.76$",
      "whyOtherOptionsWrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-438",
    "questionNumber": 438,
    "question": "Q438. [Advanced NEET Challenge] For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
    "options": {
      "A": "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "B": "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "C": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "D": "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    },
    "optionsList": [
      "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEffect of inert gas addition at constant volume on chemical equilibrium.\n\n2. GIVEN INFORMATION / DATA:\nAddition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.\n\n3. FORMULA / EQUATION:\n$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.\n\n5. FINAL CONCLUSION:\nAll of these reactions (inert gas at constant volume never affects any equilibrium).\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nInert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume.",
    "solutionStructured": {
      "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
      "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
      "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
      "stepByStep": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
      "finalAnswer": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
      "whyOtherOptionsWrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-439",
    "questionNumber": 439,
    "question": "Q439. [Advanced NEET Challenge] The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
    "options": {
      "A": "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "B": "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "C": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "D": "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    },
    "optionsList": [
      "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBronsted-Lowry definition of conjugate acid-base pairs.\n\n2. GIVEN INFORMATION / DATA:\nAmphiprotic species $HSO_4^-$.\n\n3. FORMULA / EQUATION:\nConjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.\n\n5. FINAL CONCLUSION:\n$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas.",
    "solutionStructured": {
      "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
      "given": "Amphiprotic species $HSO_4^-$.",
      "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
      "stepByStep": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
      "finalAnswer": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "whyOtherOptionsWrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-440",
    "questionNumber": 440,
    "question": "Q440. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-441",
    "questionNumber": 441,
    "question": "Q441. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-442",
    "questionNumber": 442,
    "question": "Q442. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-443",
    "questionNumber": 443,
    "question": "Q443. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-444",
    "questionNumber": 444,
    "question": "Q444. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-445",
    "questionNumber": 445,
    "question": "Q445. [Advanced NEET Challenge] A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
    "options": {
      "A": "$4.76$",
      "B": "$5.76$",
      "C": "$3.76$",
      "D": "$7.00$"
    },
    "optionsList": [
      "$4.76$",
      "$5.76$",
      "$3.76$",
      "$7.00$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenderson-Hasselbalch equation for acidic buffer solutions.\n\n2. GIVEN INFORMATION / DATA:\nWeak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.\n\n3. FORMULA / EQUATION:\n$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.\n\n5. FINAL CONCLUSION:\n$4.76$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$.",
    "solutionStructured": {
      "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
      "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
      "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
      "stepByStep": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
      "finalAnswer": "$4.76$",
      "whyOtherOptionsWrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-446",
    "questionNumber": 446,
    "question": "Q446. [Advanced NEET Challenge] For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
    "options": {
      "A": "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "B": "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "C": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "D": "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    },
    "optionsList": [
      "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEffect of inert gas addition at constant volume on chemical equilibrium.\n\n2. GIVEN INFORMATION / DATA:\nAddition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.\n\n3. FORMULA / EQUATION:\n$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.\n\n5. FINAL CONCLUSION:\nAll of these reactions (inert gas at constant volume never affects any equilibrium).\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nInert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume.",
    "solutionStructured": {
      "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
      "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
      "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
      "stepByStep": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
      "finalAnswer": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
      "whyOtherOptionsWrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-447",
    "questionNumber": 447,
    "question": "Q447. [Advanced NEET Challenge] The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
    "options": {
      "A": "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "B": "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "C": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "D": "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    },
    "optionsList": [
      "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBronsted-Lowry definition of conjugate acid-base pairs.\n\n2. GIVEN INFORMATION / DATA:\nAmphiprotic species $HSO_4^-$.\n\n3. FORMULA / EQUATION:\nConjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.\n\n5. FINAL CONCLUSION:\n$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas.",
    "solutionStructured": {
      "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
      "given": "Amphiprotic species $HSO_4^-$.",
      "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
      "stepByStep": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
      "finalAnswer": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "whyOtherOptionsWrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-448",
    "questionNumber": 448,
    "question": "Q448. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-449",
    "questionNumber": 449,
    "question": "Q449. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-450",
    "questionNumber": 450,
    "question": "Q450. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET 2016",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2016"
    }
  },
  {
    "id": "eq-mcq-451",
    "questionNumber": 451,
    "question": "Q451. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-452",
    "questionNumber": 452,
    "question": "Q452. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-453",
    "questionNumber": 453,
    "question": "Q453. [Advanced NEET Challenge] A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
    "options": {
      "A": "$4.76$",
      "B": "$5.76$",
      "C": "$3.76$",
      "D": "$7.00$"
    },
    "optionsList": [
      "$4.76$",
      "$5.76$",
      "$3.76$",
      "$7.00$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenderson-Hasselbalch equation for acidic buffer solutions.\n\n2. GIVEN INFORMATION / DATA:\nWeak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.\n\n3. FORMULA / EQUATION:\n$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.\n\n5. FINAL CONCLUSION:\n$4.76$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$.",
    "solutionStructured": {
      "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
      "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
      "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
      "stepByStep": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
      "finalAnswer": "$4.76$",
      "whyOtherOptionsWrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-454",
    "questionNumber": 454,
    "question": "Q454. [Advanced NEET Challenge] For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
    "options": {
      "A": "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "B": "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "C": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "D": "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    },
    "optionsList": [
      "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEffect of inert gas addition at constant volume on chemical equilibrium.\n\n2. GIVEN INFORMATION / DATA:\nAddition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.\n\n3. FORMULA / EQUATION:\n$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.\n\n5. FINAL CONCLUSION:\nAll of these reactions (inert gas at constant volume never affects any equilibrium).\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nInert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume.",
    "solutionStructured": {
      "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
      "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
      "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
      "stepByStep": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
      "finalAnswer": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
      "whyOtherOptionsWrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-455",
    "questionNumber": 455,
    "question": "Q455. [Advanced NEET Challenge] The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
    "options": {
      "A": "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "B": "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "C": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "D": "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    },
    "optionsList": [
      "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBronsted-Lowry definition of conjugate acid-base pairs.\n\n2. GIVEN INFORMATION / DATA:\nAmphiprotic species $HSO_4^-$.\n\n3. FORMULA / EQUATION:\nConjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.\n\n5. FINAL CONCLUSION:\n$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas.",
    "solutionStructured": {
      "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
      "given": "Amphiprotic species $HSO_4^-$.",
      "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
      "stepByStep": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
      "finalAnswer": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "whyOtherOptionsWrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-456",
    "questionNumber": 456,
    "question": "Q456. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-457",
    "questionNumber": 457,
    "question": "Q457. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-458",
    "questionNumber": 458,
    "question": "Q458. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-459",
    "questionNumber": 459,
    "question": "Q459. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-460",
    "questionNumber": 460,
    "question": "Q460. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-461",
    "questionNumber": 461,
    "question": "Q461. [Advanced NEET Challenge] A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
    "options": {
      "A": "$4.76$",
      "B": "$5.76$",
      "C": "$3.76$",
      "D": "$7.00$"
    },
    "optionsList": [
      "$4.76$",
      "$5.76$",
      "$3.76$",
      "$7.00$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenderson-Hasselbalch equation for acidic buffer solutions.\n\n2. GIVEN INFORMATION / DATA:\nWeak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.\n\n3. FORMULA / EQUATION:\n$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.\n\n5. FINAL CONCLUSION:\n$4.76$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$.",
    "solutionStructured": {
      "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
      "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
      "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
      "stepByStep": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
      "finalAnswer": "$4.76$",
      "whyOtherOptionsWrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-462",
    "questionNumber": 462,
    "question": "Q462. [Advanced NEET Challenge] For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
    "options": {
      "A": "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "B": "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "C": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "D": "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    },
    "optionsList": [
      "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEffect of inert gas addition at constant volume on chemical equilibrium.\n\n2. GIVEN INFORMATION / DATA:\nAddition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.\n\n3. FORMULA / EQUATION:\n$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.\n\n5. FINAL CONCLUSION:\nAll of these reactions (inert gas at constant volume never affects any equilibrium).\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nInert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume.",
    "solutionStructured": {
      "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
      "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
      "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
      "stepByStep": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
      "finalAnswer": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
      "whyOtherOptionsWrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-463",
    "questionNumber": 463,
    "question": "Q463. [Advanced NEET Challenge] The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
    "options": {
      "A": "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "B": "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "C": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "D": "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    },
    "optionsList": [
      "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBronsted-Lowry definition of conjugate acid-base pairs.\n\n2. GIVEN INFORMATION / DATA:\nAmphiprotic species $HSO_4^-$.\n\n3. FORMULA / EQUATION:\nConjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.\n\n5. FINAL CONCLUSION:\n$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas.",
    "solutionStructured": {
      "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
      "given": "Amphiprotic species $HSO_4^-$.",
      "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
      "stepByStep": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
      "finalAnswer": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "whyOtherOptionsWrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-464",
    "questionNumber": 464,
    "question": "Q464. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-465",
    "questionNumber": 465,
    "question": "Q465. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET 2022",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2022"
    }
  },
  {
    "id": "eq-mcq-466",
    "questionNumber": 466,
    "question": "Q466. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-467",
    "questionNumber": 467,
    "question": "Q467. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-468",
    "questionNumber": 468,
    "question": "Q468. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-469",
    "questionNumber": 469,
    "question": "Q469. [Advanced NEET Challenge] A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
    "options": {
      "A": "$4.76$",
      "B": "$5.76$",
      "C": "$3.76$",
      "D": "$7.00$"
    },
    "optionsList": [
      "$4.76$",
      "$5.76$",
      "$3.76$",
      "$7.00$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenderson-Hasselbalch equation for acidic buffer solutions.\n\n2. GIVEN INFORMATION / DATA:\nWeak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.\n\n3. FORMULA / EQUATION:\n$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.\n\n5. FINAL CONCLUSION:\n$4.76$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$.",
    "solutionStructured": {
      "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
      "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
      "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
      "stepByStep": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
      "finalAnswer": "$4.76$",
      "whyOtherOptionsWrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-470",
    "questionNumber": 470,
    "question": "Q470. [Advanced NEET Challenge] For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
    "options": {
      "A": "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "B": "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "C": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "D": "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    },
    "optionsList": [
      "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEffect of inert gas addition at constant volume on chemical equilibrium.\n\n2. GIVEN INFORMATION / DATA:\nAddition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.\n\n3. FORMULA / EQUATION:\n$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.\n\n5. FINAL CONCLUSION:\nAll of these reactions (inert gas at constant volume never affects any equilibrium).\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nInert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume.",
    "solutionStructured": {
      "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
      "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
      "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
      "stepByStep": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
      "finalAnswer": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
      "whyOtherOptionsWrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-471",
    "questionNumber": 471,
    "question": "Q471. [Advanced NEET Challenge] The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
    "options": {
      "A": "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "B": "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "C": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "D": "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    },
    "optionsList": [
      "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBronsted-Lowry definition of conjugate acid-base pairs.\n\n2. GIVEN INFORMATION / DATA:\nAmphiprotic species $HSO_4^-$.\n\n3. FORMULA / EQUATION:\nConjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.\n\n5. FINAL CONCLUSION:\n$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas.",
    "solutionStructured": {
      "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
      "given": "Amphiprotic species $HSO_4^-$.",
      "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
      "stepByStep": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
      "finalAnswer": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "whyOtherOptionsWrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-472",
    "questionNumber": 472,
    "question": "Q472. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-473",
    "questionNumber": 473,
    "question": "Q473. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-474",
    "questionNumber": 474,
    "question": "Q474. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-475",
    "questionNumber": 475,
    "question": "Q475. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-476",
    "questionNumber": 476,
    "question": "Q476. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-477",
    "questionNumber": 477,
    "question": "Q477. [Advanced NEET Challenge] A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
    "options": {
      "A": "$4.76$",
      "B": "$5.76$",
      "C": "$3.76$",
      "D": "$7.00$"
    },
    "optionsList": [
      "$4.76$",
      "$5.76$",
      "$3.76$",
      "$7.00$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenderson-Hasselbalch equation for acidic buffer solutions.\n\n2. GIVEN INFORMATION / DATA:\nWeak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.\n\n3. FORMULA / EQUATION:\n$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.\n\n5. FINAL CONCLUSION:\n$4.76$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$.",
    "solutionStructured": {
      "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
      "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
      "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
      "stepByStep": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
      "finalAnswer": "$4.76$",
      "whyOtherOptionsWrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-478",
    "questionNumber": 478,
    "question": "Q478. [Advanced NEET Challenge] For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
    "options": {
      "A": "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "B": "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "C": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "D": "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    },
    "optionsList": [
      "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEffect of inert gas addition at constant volume on chemical equilibrium.\n\n2. GIVEN INFORMATION / DATA:\nAddition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.\n\n3. FORMULA / EQUATION:\n$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.\n\n5. FINAL CONCLUSION:\nAll of these reactions (inert gas at constant volume never affects any equilibrium).\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nInert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume.",
    "solutionStructured": {
      "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
      "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
      "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
      "stepByStep": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
      "finalAnswer": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
      "whyOtherOptionsWrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-479",
    "questionNumber": 479,
    "question": "Q479. [Advanced NEET Challenge] The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
    "options": {
      "A": "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "B": "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "C": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "D": "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    },
    "optionsList": [
      "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBronsted-Lowry definition of conjugate acid-base pairs.\n\n2. GIVEN INFORMATION / DATA:\nAmphiprotic species $HSO_4^-$.\n\n3. FORMULA / EQUATION:\nConjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.\n\n5. FINAL CONCLUSION:\n$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas.",
    "solutionStructured": {
      "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
      "given": "Amphiprotic species $HSO_4^-$.",
      "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
      "stepByStep": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
      "finalAnswer": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "whyOtherOptionsWrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-480",
    "questionNumber": 480,
    "question": "Q480. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET 2019",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2019"
    }
  },
  {
    "id": "eq-mcq-481",
    "questionNumber": 481,
    "question": "Q481. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-482",
    "questionNumber": 482,
    "question": "Q482. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-483",
    "questionNumber": 483,
    "question": "Q483. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-484",
    "questionNumber": 484,
    "question": "Q484. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-485",
    "questionNumber": 485,
    "question": "Q485. [Advanced NEET Challenge] A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
    "options": {
      "A": "$4.76$",
      "B": "$5.76$",
      "C": "$3.76$",
      "D": "$7.00$"
    },
    "optionsList": [
      "$4.76$",
      "$5.76$",
      "$3.76$",
      "$7.00$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenderson-Hasselbalch equation for acidic buffer solutions.\n\n2. GIVEN INFORMATION / DATA:\nWeak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.\n\n3. FORMULA / EQUATION:\n$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.\n\n5. FINAL CONCLUSION:\n$4.76$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$.",
    "solutionStructured": {
      "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
      "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
      "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
      "stepByStep": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
      "finalAnswer": "$4.76$",
      "whyOtherOptionsWrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-486",
    "questionNumber": 486,
    "question": "Q486. [Advanced NEET Challenge] For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
    "options": {
      "A": "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "B": "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "C": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "D": "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    },
    "optionsList": [
      "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEffect of inert gas addition at constant volume on chemical equilibrium.\n\n2. GIVEN INFORMATION / DATA:\nAddition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.\n\n3. FORMULA / EQUATION:\n$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.\n\n5. FINAL CONCLUSION:\nAll of these reactions (inert gas at constant volume never affects any equilibrium).\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nInert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume.",
    "solutionStructured": {
      "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
      "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
      "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
      "stepByStep": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
      "finalAnswer": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
      "whyOtherOptionsWrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-487",
    "questionNumber": 487,
    "question": "Q487. [Advanced NEET Challenge] The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
    "options": {
      "A": "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "B": "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "C": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "D": "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    },
    "optionsList": [
      "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBronsted-Lowry definition of conjugate acid-base pairs.\n\n2. GIVEN INFORMATION / DATA:\nAmphiprotic species $HSO_4^-$.\n\n3. FORMULA / EQUATION:\nConjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.\n\n5. FINAL CONCLUSION:\n$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas.",
    "solutionStructured": {
      "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
      "given": "Amphiprotic species $HSO_4^-$.",
      "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
      "stepByStep": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
      "finalAnswer": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "whyOtherOptionsWrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-488",
    "questionNumber": 488,
    "question": "Q488. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-489",
    "questionNumber": 489,
    "question": "Q489. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-490",
    "questionNumber": 490,
    "question": "Q490. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-491",
    "questionNumber": 491,
    "question": "Q491. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-492",
    "questionNumber": 492,
    "question": "Q492. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-493",
    "questionNumber": 493,
    "question": "Q493. [Advanced NEET Challenge] A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
    "options": {
      "A": "$4.76$",
      "B": "$5.76$",
      "C": "$3.76$",
      "D": "$7.00$"
    },
    "optionsList": [
      "$4.76$",
      "$5.76$",
      "$3.76$",
      "$7.00$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHenderson-Hasselbalch equation for acidic buffer solutions.\n\n2. GIVEN INFORMATION / DATA:\nWeak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.\n\n3. FORMULA / EQUATION:\n$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.\n\n5. FINAL CONCLUSION:\n$4.76$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$.",
    "solutionStructured": {
      "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
      "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
      "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
      "stepByStep": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
      "finalAnswer": "$4.76$",
      "whyOtherOptionsWrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-494",
    "questionNumber": 494,
    "question": "Q494. [Advanced NEET Challenge] For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
    "options": {
      "A": "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "B": "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "C": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "D": "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    },
    "optionsList": [
      "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$",
      "All of these reactions (inert gas at constant volume never affects any equilibrium)",
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nEffect of inert gas addition at constant volume on chemical equilibrium.\n\n2. GIVEN INFORMATION / DATA:\nAddition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.\n\n3. FORMULA / EQUATION:\n$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.\n\n5. FINAL CONCLUSION:\nAll of these reactions (inert gas at constant volume never affects any equilibrium).\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nInert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume.",
    "solutionStructured": {
      "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
      "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
      "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
      "stepByStep": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
      "finalAnswer": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
      "whyOtherOptionsWrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-495",
    "questionNumber": 495,
    "question": "Q495. [Advanced NEET Challenge] The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
    "options": {
      "A": "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "B": "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "C": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "D": "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    },
    "optionsList": [
      "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$",
      "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$",
      "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nBronsted-Lowry definition of conjugate acid-base pairs.\n\n2. GIVEN INFORMATION / DATA:\nAmphiprotic species $HSO_4^-$.\n\n3. FORMULA / EQUATION:\nConjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.\n\n5. FINAL CONCLUSION:\n$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas.",
    "solutionStructured": {
      "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
      "given": "Amphiprotic species $HSO_4^-$.",
      "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
      "stepByStep": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
      "finalAnswer": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
      "whyOtherOptionsWrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET 2016",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2016"
    }
  },
  {
    "id": "eq-mcq-496",
    "questionNumber": 496,
    "question": "Q496. [Advanced NEET Challenge] The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
    "options": {
      "A": "Salt effect",
      "B": "Le Chatelier pressure shift",
      "C": "Solvent cage effect",
      "D": "Common ion effect"
    },
    "optionsList": [
      "Salt effect",
      "Le Chatelier pressure shift",
      "Solvent cage effect",
      "Common ion effect"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSuppression of solubility of sparingly soluble salts due to the common ion effect.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.\n\n3. FORMULA / EQUATION:\n$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.\n\n5. FINAL CONCLUSION:\nCommon ion effect.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nSalt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase.",
    "solutionStructured": {
      "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
      "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
      "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
      "stepByStep": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
      "finalAnswer": "Common ion effect.",
      "whyOtherOptionsWrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-497",
    "questionNumber": 497,
    "question": "Q497. [Advanced NEET Challenge] For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
    "options": {
      "A": "$K_p = K_c (RT)^{-2}$",
      "B": "$K_p = K_c (RT)^2$",
      "C": "$K_p = K_c (RT)^{-1}$",
      "D": "$K_p = K_c$"
    },
    "optionsList": [
      "$K_p = K_c (RT)^{-2}$",
      "$K_p = K_c (RT)^2$",
      "$K_p = K_c (RT)^{-1}$",
      "$K_p = K_c$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nRelationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).\n\n2. GIVEN INFORMATION / DATA:\nHaber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.\n\n3. FORMULA / EQUATION:\n$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.\n\n5. FINAL CONCLUSION:\n$K_p = K_c (RT)^{-2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles.",
    "solutionStructured": {
      "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
      "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
      "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
      "stepByStep": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
      "finalAnswer": "$K_p = K_c (RT)^{-2}$",
      "whyOtherOptionsWrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-498",
    "questionNumber": 498,
    "question": "Q498. [Advanced NEET Challenge] According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
    "options": {
      "A": "Low pressure and high temperature",
      "B": "High pressure and low temperature",
      "C": "High pressure and high temperature",
      "D": "Low pressure and low temperature"
    },
    "optionsList": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nLe Chatelier's principle applied to exothermic gas reactions with volume contraction.\n\n2. GIVEN INFORMATION / DATA:\nForward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.\n\n3. FORMULA / EQUATION:\n$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).\n\n5. FINAL CONCLUSION:\nHigh pressure and low temperature.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nHigh temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles.",
    "solutionStructured": {
      "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
      "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
      "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
      "stepByStep": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
      "finalAnswer": "High pressure and low temperature.",
      "whyOtherOptionsWrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-499",
    "questionNumber": 499,
    "question": "Q499. [Advanced NEET Challenge] What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
    "options": {
      "A": "$8.00$",
      "B": "$7.00$",
      "C": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "D": "$6.00$"
    },
    "optionsList": [
      "$8.00$",
      "$7.00$",
      "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "$6.00$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nContribution of autoionization of water in extremely dilute strong acid solutions.\n\n2. GIVEN INFORMATION / DATA:\n$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.\n\n3. FORMULA / EQUATION:\n$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.\n\n5. FINAL CONCLUSION:\n$6.98$ (slightly acidic, between $6.95$ and $7.0$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH.",
    "solutionStructured": {
      "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
      "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
      "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
      "stepByStep": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
      "finalAnswer": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
      "whyOtherOptionsWrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "eq-mcq-500",
    "questionNumber": 500,
    "question": "Q500. [Advanced NEET Challenge] The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
    "options": {
      "A": "$K_{sp} = S^2$",
      "B": "$K_{sp} = 27S^4$",
      "C": "$K_{sp} = 108S^5$",
      "D": "$K_{sp} = 4S^3$"
    },
    "optionsList": [
      "$K_{sp} = S^2$",
      "$K_{sp} = 27S^4$",
      "$K_{sp} = 108S^5$",
      "$K_{sp} = 4S^3$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSolubility product expression for $A_2B$ type sparingly soluble salts.\n\n2. GIVEN INFORMATION / DATA:\nSparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.\n\n3. FORMULA / EQUATION:\n$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.\n\n5. FINAL CONCLUSION:\n$K_{sp} = 4S^3$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$).",
    "solutionStructured": {
      "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
      "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
      "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
      "stepByStep": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
      "finalAnswer": "$K_{sp} = 4S^3$",
      "whyOtherOptionsWrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
    },
    "difficulty": "Hard",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Buffer Solutions & Solubility Product",
    "topicId": "chem-buffer-solubility-product",
    "subtopic": "Ksp, Common Ion Effect & Precipitation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  }
];
