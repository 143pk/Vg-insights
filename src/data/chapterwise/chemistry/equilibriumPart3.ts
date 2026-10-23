// Part 3: Q251 to Q375 (Medium: 125 MCQs)
// Chapter: Equilibrium (ID: equilibrium) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const EQUILIBRIUM_PART3_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "eq-mcq-251",
    "questionNumber": 251,
    "question": "Q251. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-252",
    "questionNumber": 252,
    "question": "Q252. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-253",
    "questionNumber": 253,
    "question": "Q253. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-254",
    "questionNumber": 254,
    "question": "Q254. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-255",
    "questionNumber": 255,
    "question": "Q255. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-256",
    "questionNumber": 256,
    "question": "Q256. (NEET Medium) The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-257",
    "questionNumber": 257,
    "question": "Q257. (NEET Medium) For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-258",
    "questionNumber": 258,
    "question": "Q258. (NEET Medium) According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-259",
    "questionNumber": 259,
    "question": "Q259. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-260",
    "questionNumber": 260,
    "question": "Q260. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-261",
    "questionNumber": 261,
    "question": "Q261. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-262",
    "questionNumber": 262,
    "question": "Q262. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-263",
    "questionNumber": 263,
    "question": "Q263. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-264",
    "questionNumber": 264,
    "question": "Q264. (NEET Medium) The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-265",
    "questionNumber": 265,
    "question": "Q265. (NEET Medium) For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-266",
    "questionNumber": 266,
    "question": "Q266. (NEET Medium) According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-267",
    "questionNumber": 267,
    "question": "Q267. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-268",
    "questionNumber": 268,
    "question": "Q268. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-269",
    "questionNumber": 269,
    "question": "Q269. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-270",
    "questionNumber": 270,
    "question": "Q270. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-271",
    "questionNumber": 271,
    "question": "Q271. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-272",
    "questionNumber": 272,
    "question": "Q272. (NEET Medium) The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-273",
    "questionNumber": 273,
    "question": "Q273. (NEET Medium) For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-274",
    "questionNumber": 274,
    "question": "Q274. (NEET Medium) According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-275",
    "questionNumber": 275,
    "question": "Q275. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-276",
    "questionNumber": 276,
    "question": "Q276. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-277",
    "questionNumber": 277,
    "question": "Q277. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-278",
    "questionNumber": 278,
    "question": "Q278. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-279",
    "questionNumber": 279,
    "question": "Q279. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-280",
    "questionNumber": 280,
    "question": "Q280. (NEET Medium) The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-281",
    "questionNumber": 281,
    "question": "Q281. (NEET Medium) For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-282",
    "questionNumber": 282,
    "question": "Q282. (NEET Medium) According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-283",
    "questionNumber": 283,
    "question": "Q283. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-284",
    "questionNumber": 284,
    "question": "Q284. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-285",
    "questionNumber": 285,
    "question": "Q285. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-286",
    "questionNumber": 286,
    "question": "Q286. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-287",
    "questionNumber": 287,
    "question": "Q287. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-288",
    "questionNumber": 288,
    "question": "Q288. (NEET Medium) The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-289",
    "questionNumber": 289,
    "question": "Q289. (NEET Medium) For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-290",
    "questionNumber": 290,
    "question": "Q290. (NEET Medium) According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-291",
    "questionNumber": 291,
    "question": "Q291. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-292",
    "questionNumber": 292,
    "question": "Q292. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-293",
    "questionNumber": 293,
    "question": "Q293. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-294",
    "questionNumber": 294,
    "question": "Q294. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-295",
    "questionNumber": 295,
    "question": "Q295. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-296",
    "questionNumber": 296,
    "question": "Q296. (NEET Medium) The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-297",
    "questionNumber": 297,
    "question": "Q297. (NEET Medium) For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-298",
    "questionNumber": 298,
    "question": "Q298. (NEET Medium) According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-299",
    "questionNumber": 299,
    "question": "Q299. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-300",
    "questionNumber": 300,
    "question": "Q300. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-301",
    "questionNumber": 301,
    "question": "Q301. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-302",
    "questionNumber": 302,
    "question": "Q302. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-303",
    "questionNumber": 303,
    "question": "Q303. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-304",
    "questionNumber": 304,
    "question": "Q304. (NEET Medium) The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-305",
    "questionNumber": 305,
    "question": "Q305. (NEET Medium) For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-306",
    "questionNumber": 306,
    "question": "Q306. (NEET Medium) According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-307",
    "questionNumber": 307,
    "question": "Q307. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-308",
    "questionNumber": 308,
    "question": "Q308. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-309",
    "questionNumber": 309,
    "question": "Q309. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-310",
    "questionNumber": 310,
    "question": "Q310. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-311",
    "questionNumber": 311,
    "question": "Q311. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-312",
    "questionNumber": 312,
    "question": "Q312. (NEET Medium) The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-313",
    "questionNumber": 313,
    "question": "Q313. (NEET Medium) For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-314",
    "questionNumber": 314,
    "question": "Q314. (NEET Medium) According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-315",
    "questionNumber": 315,
    "question": "Q315. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-316",
    "questionNumber": 316,
    "question": "Q316. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-317",
    "questionNumber": 317,
    "question": "Q317. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-318",
    "questionNumber": 318,
    "question": "Q318. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-319",
    "questionNumber": 319,
    "question": "Q319. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-320",
    "questionNumber": 320,
    "question": "Q320. (NEET Medium) The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-321",
    "questionNumber": 321,
    "question": "Q321. (NEET Medium) For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-322",
    "questionNumber": 322,
    "question": "Q322. (NEET Medium) According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-323",
    "questionNumber": 323,
    "question": "Q323. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-324",
    "questionNumber": 324,
    "question": "Q324. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-325",
    "questionNumber": 325,
    "question": "Q325. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-326",
    "questionNumber": 326,
    "question": "Q326. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-327",
    "questionNumber": 327,
    "question": "Q327. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-328",
    "questionNumber": 328,
    "question": "Q328. (NEET Medium) The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-329",
    "questionNumber": 329,
    "question": "Q329. (NEET Medium) For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-330",
    "questionNumber": 330,
    "question": "Q330. (NEET Medium) According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Le Chatelier's Principle",
    "topicId": "chem-le-chatelier",
    "subtopic": "Factors Affecting Equilibrium",
    "source": "NEET 2022",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2022"
    }
  },
  {
    "id": "eq-mcq-331",
    "questionNumber": 331,
    "question": "Q331. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-332",
    "questionNumber": 332,
    "question": "Q332. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-333",
    "questionNumber": 333,
    "question": "Q333. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-334",
    "questionNumber": 334,
    "question": "Q334. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-335",
    "questionNumber": 335,
    "question": "Q335. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-336",
    "questionNumber": 336,
    "question": "Q336. (NEET Medium) The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-337",
    "questionNumber": 337,
    "question": "Q337. (NEET Medium) For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-338",
    "questionNumber": 338,
    "question": "Q338. (NEET Medium) According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-339",
    "questionNumber": 339,
    "question": "Q339. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-340",
    "questionNumber": 340,
    "question": "Q340. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-341",
    "questionNumber": 341,
    "question": "Q341. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-342",
    "questionNumber": 342,
    "question": "Q342. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-343",
    "questionNumber": 343,
    "question": "Q343. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-344",
    "questionNumber": 344,
    "question": "Q344. (NEET Medium) The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-345",
    "questionNumber": 345,
    "question": "Q345. (NEET Medium) For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Equilibrium",
    "chapterId": "equilibrium",
    "topic": "Law of Mass Action & Equilibrium Constant",
    "topicId": "chem-law-mass-action",
    "subtopic": "Kp, Kc & Reaction Quotient",
    "source": "NEET 2019",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2019"
    }
  },
  {
    "id": "eq-mcq-346",
    "questionNumber": 346,
    "question": "Q346. (NEET Medium) According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-347",
    "questionNumber": 347,
    "question": "Q347. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-348",
    "questionNumber": 348,
    "question": "Q348. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-349",
    "questionNumber": 349,
    "question": "Q349. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-350",
    "questionNumber": 350,
    "question": "Q350. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-351",
    "questionNumber": 351,
    "question": "Q351. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-352",
    "questionNumber": 352,
    "question": "Q352. (NEET Medium) The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-353",
    "questionNumber": 353,
    "question": "Q353. (NEET Medium) For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-354",
    "questionNumber": 354,
    "question": "Q354. (NEET Medium) According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-355",
    "questionNumber": 355,
    "question": "Q355. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-356",
    "questionNumber": 356,
    "question": "Q356. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-357",
    "questionNumber": 357,
    "question": "Q357. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-358",
    "questionNumber": 358,
    "question": "Q358. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-359",
    "questionNumber": 359,
    "question": "Q359. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-360",
    "questionNumber": 360,
    "question": "Q360. (NEET Medium) The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-361",
    "questionNumber": 361,
    "question": "Q361. (NEET Medium) For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-362",
    "questionNumber": 362,
    "question": "Q362. (NEET Medium) According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-363",
    "questionNumber": 363,
    "question": "Q363. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-364",
    "questionNumber": 364,
    "question": "Q364. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-365",
    "questionNumber": 365,
    "question": "Q365. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-366",
    "questionNumber": 366,
    "question": "Q366. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-367",
    "questionNumber": 367,
    "question": "Q367. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-368",
    "questionNumber": 368,
    "question": "Q368. (NEET Medium) The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-369",
    "questionNumber": 369,
    "question": "Q369. (NEET Medium) For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-370",
    "questionNumber": 370,
    "question": "Q370. (NEET Medium) According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-371",
    "questionNumber": 371,
    "question": "Q371. (NEET Medium) What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-372",
    "questionNumber": 372,
    "question": "Q372. (NEET Medium) The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-373",
    "questionNumber": 373,
    "question": "Q373. (NEET Medium) A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-374",
    "questionNumber": 374,
    "question": "Q374. (NEET Medium) For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
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
    "difficulty": "Medium",
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
    "id": "eq-mcq-375",
    "questionNumber": 375,
    "question": "Q375. (NEET Medium) The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
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
    "difficulty": "Medium",
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
  }
];
