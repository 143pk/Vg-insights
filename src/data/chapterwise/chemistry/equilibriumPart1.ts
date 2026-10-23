// Part 1: Q1 to Q125 (Easy: 125 MCQs)
// Chapter: Equilibrium (ID: equilibrium) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const EQUILIBRIUM_PART1_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "eq-mcq-001",
    "questionNumber": 1,
    "question": "Q1. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-002",
    "questionNumber": 2,
    "question": "Q2. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-003",
    "questionNumber": 3,
    "question": "Q3. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-004",
    "questionNumber": 4,
    "question": "Q4. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-005",
    "questionNumber": 5,
    "question": "Q5. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-006",
    "questionNumber": 6,
    "question": "Q6. For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-007",
    "questionNumber": 7,
    "question": "Q7. The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-008",
    "questionNumber": 8,
    "question": "Q8. The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-009",
    "questionNumber": 9,
    "question": "Q9. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-010",
    "questionNumber": 10,
    "question": "Q10. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-011",
    "questionNumber": 11,
    "question": "Q11. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-012",
    "questionNumber": 12,
    "question": "Q12. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-013",
    "questionNumber": 13,
    "question": "Q13. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-014",
    "questionNumber": 14,
    "question": "Q14. For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-015",
    "questionNumber": 15,
    "question": "Q15. The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Easy",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Acids, Bases & pH Scale",
    "topicId": "chem-acids-bases-ph",
    "subtopic": "Ionic Product of Water & Buffer Solutions",
    "source": "NEET 2022",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2022"
    }
  },
  {
    "id": "eq-mcq-016",
    "questionNumber": 16,
    "question": "Q16. The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-017",
    "questionNumber": 17,
    "question": "Q17. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-018",
    "questionNumber": 18,
    "question": "Q18. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-019",
    "questionNumber": 19,
    "question": "Q19. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-020",
    "questionNumber": 20,
    "question": "Q20. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-021",
    "questionNumber": 21,
    "question": "Q21. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-022",
    "questionNumber": 22,
    "question": "Q22. For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-023",
    "questionNumber": 23,
    "question": "Q23. The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-024",
    "questionNumber": 24,
    "question": "Q24. The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-025",
    "questionNumber": 25,
    "question": "Q25. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-026",
    "questionNumber": 26,
    "question": "Q26. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-027",
    "questionNumber": 27,
    "question": "Q27. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-028",
    "questionNumber": 28,
    "question": "Q28. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-029",
    "questionNumber": 29,
    "question": "Q29. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-030",
    "questionNumber": 30,
    "question": "Q30. For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-031",
    "questionNumber": 31,
    "question": "Q31. The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-032",
    "questionNumber": 32,
    "question": "Q32. The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-033",
    "questionNumber": 33,
    "question": "Q33. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-034",
    "questionNumber": 34,
    "question": "Q34. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-035",
    "questionNumber": 35,
    "question": "Q35. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-036",
    "questionNumber": 36,
    "question": "Q36. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-037",
    "questionNumber": 37,
    "question": "Q37. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-038",
    "questionNumber": 38,
    "question": "Q38. For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-039",
    "questionNumber": 39,
    "question": "Q39. The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-040",
    "questionNumber": 40,
    "question": "Q40. The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-041",
    "questionNumber": 41,
    "question": "Q41. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-042",
    "questionNumber": 42,
    "question": "Q42. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-043",
    "questionNumber": 43,
    "question": "Q43. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-044",
    "questionNumber": 44,
    "question": "Q44. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-045",
    "questionNumber": 45,
    "question": "Q45. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-046",
    "questionNumber": 46,
    "question": "Q46. For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-047",
    "questionNumber": 47,
    "question": "Q47. The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-048",
    "questionNumber": 48,
    "question": "Q48. The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-049",
    "questionNumber": 49,
    "question": "Q49. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-050",
    "questionNumber": 50,
    "question": "Q50. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-051",
    "questionNumber": 51,
    "question": "Q51. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-052",
    "questionNumber": 52,
    "question": "Q52. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-053",
    "questionNumber": 53,
    "question": "Q53. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-054",
    "questionNumber": 54,
    "question": "Q54. For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-055",
    "questionNumber": 55,
    "question": "Q55. The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-056",
    "questionNumber": 56,
    "question": "Q56. The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-057",
    "questionNumber": 57,
    "question": "Q57. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-058",
    "questionNumber": 58,
    "question": "Q58. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-059",
    "questionNumber": 59,
    "question": "Q59. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-060",
    "questionNumber": 60,
    "question": "Q60. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-061",
    "questionNumber": 61,
    "question": "Q61. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-062",
    "questionNumber": 62,
    "question": "Q62. For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-063",
    "questionNumber": 63,
    "question": "Q63. The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-064",
    "questionNumber": 64,
    "question": "Q64. The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-065",
    "questionNumber": 65,
    "question": "Q65. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-066",
    "questionNumber": 66,
    "question": "Q66. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-067",
    "questionNumber": 67,
    "question": "Q67. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-068",
    "questionNumber": 68,
    "question": "Q68. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-069",
    "questionNumber": 69,
    "question": "Q69. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-070",
    "questionNumber": 70,
    "question": "Q70. For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-071",
    "questionNumber": 71,
    "question": "Q71. The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-072",
    "questionNumber": 72,
    "question": "Q72. The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-073",
    "questionNumber": 73,
    "question": "Q73. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-074",
    "questionNumber": 74,
    "question": "Q74. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-075",
    "questionNumber": 75,
    "question": "Q75. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-076",
    "questionNumber": 76,
    "question": "Q76. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-077",
    "questionNumber": 77,
    "question": "Q77. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-078",
    "questionNumber": 78,
    "question": "Q78. For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-079",
    "questionNumber": 79,
    "question": "Q79. The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-080",
    "questionNumber": 80,
    "question": "Q80. The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-081",
    "questionNumber": 81,
    "question": "Q81. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-082",
    "questionNumber": 82,
    "question": "Q82. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-083",
    "questionNumber": 83,
    "question": "Q83. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-084",
    "questionNumber": 84,
    "question": "Q84. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-085",
    "questionNumber": 85,
    "question": "Q85. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-086",
    "questionNumber": 86,
    "question": "Q86. For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-087",
    "questionNumber": 87,
    "question": "Q87. The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-088",
    "questionNumber": 88,
    "question": "Q88. The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-089",
    "questionNumber": 89,
    "question": "Q89. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-090",
    "questionNumber": 90,
    "question": "Q90. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-091",
    "questionNumber": 91,
    "question": "Q91. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-092",
    "questionNumber": 92,
    "question": "Q92. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-093",
    "questionNumber": 93,
    "question": "Q93. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-094",
    "questionNumber": 94,
    "question": "Q94. For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-095",
    "questionNumber": 95,
    "question": "Q95. The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-096",
    "questionNumber": 96,
    "question": "Q96. The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-097",
    "questionNumber": 97,
    "question": "Q97. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-098",
    "questionNumber": 98,
    "question": "Q98. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-099",
    "questionNumber": 99,
    "question": "Q99. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-100",
    "questionNumber": 100,
    "question": "Q100. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-101",
    "questionNumber": 101,
    "question": "Q101. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-102",
    "questionNumber": 102,
    "question": "Q102. For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-103",
    "questionNumber": 103,
    "question": "Q103. The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-104",
    "questionNumber": 104,
    "question": "Q104. The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-105",
    "questionNumber": 105,
    "question": "Q105. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-106",
    "questionNumber": 106,
    "question": "Q106. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-107",
    "questionNumber": 107,
    "question": "Q107. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-108",
    "questionNumber": 108,
    "question": "Q108. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-109",
    "questionNumber": 109,
    "question": "Q109. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-110",
    "questionNumber": 110,
    "question": "Q110. For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-111",
    "questionNumber": 111,
    "question": "Q111. The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-112",
    "questionNumber": 112,
    "question": "Q112. The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-113",
    "questionNumber": 113,
    "question": "Q113. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-114",
    "questionNumber": 114,
    "question": "Q114. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-115",
    "questionNumber": 115,
    "question": "Q115. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-116",
    "questionNumber": 116,
    "question": "Q116. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-117",
    "questionNumber": 117,
    "question": "Q117. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-118",
    "questionNumber": 118,
    "question": "Q118. For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-119",
    "questionNumber": 119,
    "question": "Q119. The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-120",
    "questionNumber": 120,
    "question": "Q120. The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-121",
    "questionNumber": 121,
    "question": "Q121. For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-122",
    "questionNumber": 122,
    "question": "Q122. According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-123",
    "questionNumber": 123,
    "question": "Q123. What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-124",
    "questionNumber": 124,
    "question": "Q124. The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Easy",
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
    "id": "eq-mcq-125",
    "questionNumber": 125,
    "question": "Q125. A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Easy",
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
