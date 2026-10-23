// Part 3: Q251 to Q375 (Medium: 125 MCQs)
// Chapter: Chemical Kinetics (ID: chemical-kinetics) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const CHEMICAL_KINETICS_PART3_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "ck-mcq-251",
    "questionNumber": 251,
    "question": "Q251. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{2.303 R}$",
      "B": "$\\frac{E_a}{R}$",
      "C": "$-\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-252",
    "questionNumber": 252,
    "question": "Q252. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET 2018",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2018"
    }
  },
  {
    "id": "ck-mcq-253",
    "questionNumber": 253,
    "question": "Q253. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "B": "$\\text{s}^{-1}$",
      "C": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-254",
    "questionNumber": 254,
    "question": "Q254. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$100\\text{ s}$",
      "C": "$200\\text{ s}$",
      "D": "$10\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$100\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-255",
    "questionNumber": 255,
    "question": "Q255. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = 0$",
      "B": "$k = \\infty$",
      "C": "$k = A$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = 0$",
      "$k = \\infty$",
      "$k = A$",
      "$k = A / 300$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-256",
    "questionNumber": 256,
    "question": "Q256. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-257",
    "questionNumber": 257,
    "question": "Q257. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{R}$",
      "B": "$-\\frac{E_a}{2.303 R}$",
      "C": "$\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{R}$",
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-258",
    "questionNumber": 258,
    "question": "Q258. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-259",
    "questionNumber": 259,
    "question": "Q259. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{s}^{-1}$",
      "B": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-260",
    "questionNumber": 260,
    "question": "Q260. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$200\\text{ s}$",
      "C": "$10\\text{ s}$",
      "D": "$100\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$",
      "$100\\text{ s}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-261",
    "questionNumber": 261,
    "question": "Q261. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = A$",
      "B": "$k = 0$",
      "C": "$k = \\infty$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = A$",
      "$k = 0$",
      "$k = \\infty$",
      "$k = A / 300$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-262",
    "questionNumber": 262,
    "question": "Q262. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-263",
    "questionNumber": 263,
    "question": "Q263. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{2.303 R}$",
      "B": "$\\frac{E_a}{R}$",
      "C": "$-\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-264",
    "questionNumber": 264,
    "question": "Q264. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-265",
    "questionNumber": 265,
    "question": "Q265. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "B": "$\\text{s}^{-1}$",
      "C": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-266",
    "questionNumber": 266,
    "question": "Q266. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$100\\text{ s}$",
      "C": "$200\\text{ s}$",
      "D": "$10\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$100\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET 2018",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2018"
    }
  },
  {
    "id": "ck-mcq-267",
    "questionNumber": 267,
    "question": "Q267. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = 0$",
      "B": "$k = \\infty$",
      "C": "$k = A$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = 0$",
      "$k = \\infty$",
      "$k = A$",
      "$k = A / 300$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-268",
    "questionNumber": 268,
    "question": "Q268. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-269",
    "questionNumber": 269,
    "question": "Q269. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{R}$",
      "B": "$-\\frac{E_a}{2.303 R}$",
      "C": "$\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{R}$",
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-270",
    "questionNumber": 270,
    "question": "Q270. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-271",
    "questionNumber": 271,
    "question": "Q271. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{s}^{-1}$",
      "B": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-272",
    "questionNumber": 272,
    "question": "Q272. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$200\\text{ s}$",
      "C": "$10\\text{ s}$",
      "D": "$100\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$",
      "$100\\text{ s}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-273",
    "questionNumber": 273,
    "question": "Q273. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = A$",
      "B": "$k = 0$",
      "C": "$k = \\infty$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = A$",
      "$k = 0$",
      "$k = \\infty$",
      "$k = A / 300$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-274",
    "questionNumber": 274,
    "question": "Q274. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-275",
    "questionNumber": 275,
    "question": "Q275. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{2.303 R}$",
      "B": "$\\frac{E_a}{R}$",
      "C": "$-\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-276",
    "questionNumber": 276,
    "question": "Q276. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-277",
    "questionNumber": 277,
    "question": "Q277. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "B": "$\\text{s}^{-1}$",
      "C": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-278",
    "questionNumber": 278,
    "question": "Q278. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$100\\text{ s}$",
      "C": "$200\\text{ s}$",
      "D": "$10\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$100\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-279",
    "questionNumber": 279,
    "question": "Q279. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = 0$",
      "B": "$k = \\infty$",
      "C": "$k = A$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = 0$",
      "$k = \\infty$",
      "$k = A$",
      "$k = A / 300$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-280",
    "questionNumber": 280,
    "question": "Q280. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET 2018",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2018"
    }
  },
  {
    "id": "ck-mcq-281",
    "questionNumber": 281,
    "question": "Q281. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{R}$",
      "B": "$-\\frac{E_a}{2.303 R}$",
      "C": "$\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{R}$",
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-282",
    "questionNumber": 282,
    "question": "Q282. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-283",
    "questionNumber": 283,
    "question": "Q283. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{s}^{-1}$",
      "B": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-284",
    "questionNumber": 284,
    "question": "Q284. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$200\\text{ s}$",
      "C": "$10\\text{ s}$",
      "D": "$100\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$",
      "$100\\text{ s}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-285",
    "questionNumber": 285,
    "question": "Q285. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = A$",
      "B": "$k = 0$",
      "C": "$k = \\infty$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = A$",
      "$k = 0$",
      "$k = \\infty$",
      "$k = A / 300$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-286",
    "questionNumber": 286,
    "question": "Q286. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-287",
    "questionNumber": 287,
    "question": "Q287. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{2.303 R}$",
      "B": "$\\frac{E_a}{R}$",
      "C": "$-\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-288",
    "questionNumber": 288,
    "question": "Q288. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-289",
    "questionNumber": 289,
    "question": "Q289. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "B": "$\\text{s}^{-1}$",
      "C": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-290",
    "questionNumber": 290,
    "question": "Q290. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$100\\text{ s}$",
      "C": "$200\\text{ s}$",
      "D": "$10\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$100\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-291",
    "questionNumber": 291,
    "question": "Q291. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = 0$",
      "B": "$k = \\infty$",
      "C": "$k = A$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = 0$",
      "$k = \\infty$",
      "$k = A$",
      "$k = A / 300$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-292",
    "questionNumber": 292,
    "question": "Q292. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-293",
    "questionNumber": 293,
    "question": "Q293. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{R}$",
      "B": "$-\\frac{E_a}{2.303 R}$",
      "C": "$\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{R}$",
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-294",
    "questionNumber": 294,
    "question": "Q294. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET 2018",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2018"
    }
  },
  {
    "id": "ck-mcq-295",
    "questionNumber": 295,
    "question": "Q295. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{s}^{-1}$",
      "B": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-296",
    "questionNumber": 296,
    "question": "Q296. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$200\\text{ s}$",
      "C": "$10\\text{ s}$",
      "D": "$100\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$",
      "$100\\text{ s}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-297",
    "questionNumber": 297,
    "question": "Q297. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = A$",
      "B": "$k = 0$",
      "C": "$k = \\infty$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = A$",
      "$k = 0$",
      "$k = \\infty$",
      "$k = A / 300$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-298",
    "questionNumber": 298,
    "question": "Q298. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-299",
    "questionNumber": 299,
    "question": "Q299. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{2.303 R}$",
      "B": "$\\frac{E_a}{R}$",
      "C": "$-\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-300",
    "questionNumber": 300,
    "question": "Q300. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-301",
    "questionNumber": 301,
    "question": "Q301. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "B": "$\\text{s}^{-1}$",
      "C": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-302",
    "questionNumber": 302,
    "question": "Q302. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$100\\text{ s}$",
      "C": "$200\\text{ s}$",
      "D": "$10\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$100\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-303",
    "questionNumber": 303,
    "question": "Q303. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = 0$",
      "B": "$k = \\infty$",
      "C": "$k = A$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = 0$",
      "$k = \\infty$",
      "$k = A$",
      "$k = A / 300$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-304",
    "questionNumber": 304,
    "question": "Q304. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-305",
    "questionNumber": 305,
    "question": "Q305. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{R}$",
      "B": "$-\\frac{E_a}{2.303 R}$",
      "C": "$\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{R}$",
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-306",
    "questionNumber": 306,
    "question": "Q306. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-307",
    "questionNumber": 307,
    "question": "Q307. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{s}^{-1}$",
      "B": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-308",
    "questionNumber": 308,
    "question": "Q308. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$200\\text{ s}$",
      "C": "$10\\text{ s}$",
      "D": "$100\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$",
      "$100\\text{ s}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET 2018",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2018"
    }
  },
  {
    "id": "ck-mcq-309",
    "questionNumber": 309,
    "question": "Q309. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = A$",
      "B": "$k = 0$",
      "C": "$k = \\infty$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = A$",
      "$k = 0$",
      "$k = \\infty$",
      "$k = A / 300$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-310",
    "questionNumber": 310,
    "question": "Q310. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-311",
    "questionNumber": 311,
    "question": "Q311. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{2.303 R}$",
      "B": "$\\frac{E_a}{R}$",
      "C": "$-\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-312",
    "questionNumber": 312,
    "question": "Q312. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-313",
    "questionNumber": 313,
    "question": "Q313. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "B": "$\\text{s}^{-1}$",
      "C": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-314",
    "questionNumber": 314,
    "question": "Q314. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$100\\text{ s}$",
      "C": "$200\\text{ s}$",
      "D": "$10\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$100\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-315",
    "questionNumber": 315,
    "question": "Q315. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = 0$",
      "B": "$k = \\infty$",
      "C": "$k = A$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = 0$",
      "$k = \\infty$",
      "$k = A$",
      "$k = A / 300$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-316",
    "questionNumber": 316,
    "question": "Q316. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-317",
    "questionNumber": 317,
    "question": "Q317. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{R}$",
      "B": "$-\\frac{E_a}{2.303 R}$",
      "C": "$\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{R}$",
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-318",
    "questionNumber": 318,
    "question": "Q318. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-319",
    "questionNumber": 319,
    "question": "Q319. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{s}^{-1}$",
      "B": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-320",
    "questionNumber": 320,
    "question": "Q320. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$200\\text{ s}$",
      "C": "$10\\text{ s}$",
      "D": "$100\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$",
      "$100\\text{ s}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-321",
    "questionNumber": 321,
    "question": "Q321. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = A$",
      "B": "$k = 0$",
      "C": "$k = \\infty$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = A$",
      "$k = 0$",
      "$k = \\infty$",
      "$k = A / 300$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-322",
    "questionNumber": 322,
    "question": "Q322. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET 2018",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2018"
    }
  },
  {
    "id": "ck-mcq-323",
    "questionNumber": 323,
    "question": "Q323. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{2.303 R}$",
      "B": "$\\frac{E_a}{R}$",
      "C": "$-\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-324",
    "questionNumber": 324,
    "question": "Q324. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-325",
    "questionNumber": 325,
    "question": "Q325. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "B": "$\\text{s}^{-1}$",
      "C": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-326",
    "questionNumber": 326,
    "question": "Q326. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$100\\text{ s}$",
      "C": "$200\\text{ s}$",
      "D": "$10\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$100\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-327",
    "questionNumber": 327,
    "question": "Q327. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = 0$",
      "B": "$k = \\infty$",
      "C": "$k = A$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = 0$",
      "$k = \\infty$",
      "$k = A$",
      "$k = A / 300$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-328",
    "questionNumber": 328,
    "question": "Q328. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-329",
    "questionNumber": 329,
    "question": "Q329. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{R}$",
      "B": "$-\\frac{E_a}{2.303 R}$",
      "C": "$\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{R}$",
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-330",
    "questionNumber": 330,
    "question": "Q330. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-331",
    "questionNumber": 331,
    "question": "Q331. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{s}^{-1}$",
      "B": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-332",
    "questionNumber": 332,
    "question": "Q332. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$200\\text{ s}$",
      "C": "$10\\text{ s}$",
      "D": "$100\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$",
      "$100\\text{ s}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-333",
    "questionNumber": 333,
    "question": "Q333. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = A$",
      "B": "$k = 0$",
      "C": "$k = \\infty$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = A$",
      "$k = 0$",
      "$k = \\infty$",
      "$k = A / 300$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-334",
    "questionNumber": 334,
    "question": "Q334. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-335",
    "questionNumber": 335,
    "question": "Q335. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{2.303 R}$",
      "B": "$\\frac{E_a}{R}$",
      "C": "$-\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-336",
    "questionNumber": 336,
    "question": "Q336. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET 2018",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2018"
    }
  },
  {
    "id": "ck-mcq-337",
    "questionNumber": 337,
    "question": "Q337. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "B": "$\\text{s}^{-1}$",
      "C": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-338",
    "questionNumber": 338,
    "question": "Q338. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$100\\text{ s}$",
      "C": "$200\\text{ s}$",
      "D": "$10\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$100\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-339",
    "questionNumber": 339,
    "question": "Q339. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = 0$",
      "B": "$k = \\infty$",
      "C": "$k = A$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = 0$",
      "$k = \\infty$",
      "$k = A$",
      "$k = A / 300$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-340",
    "questionNumber": 340,
    "question": "Q340. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-341",
    "questionNumber": 341,
    "question": "Q341. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{R}$",
      "B": "$-\\frac{E_a}{2.303 R}$",
      "C": "$\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{R}$",
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-342",
    "questionNumber": 342,
    "question": "Q342. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-343",
    "questionNumber": 343,
    "question": "Q343. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{s}^{-1}$",
      "B": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-344",
    "questionNumber": 344,
    "question": "Q344. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$200\\text{ s}$",
      "C": "$10\\text{ s}$",
      "D": "$100\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$",
      "$100\\text{ s}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-345",
    "questionNumber": 345,
    "question": "Q345. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = A$",
      "B": "$k = 0$",
      "C": "$k = \\infty$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = A$",
      "$k = 0$",
      "$k = \\infty$",
      "$k = A / 300$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-346",
    "questionNumber": 346,
    "question": "Q346. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-347",
    "questionNumber": 347,
    "question": "Q347. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{2.303 R}$",
      "B": "$\\frac{E_a}{R}$",
      "C": "$-\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-348",
    "questionNumber": 348,
    "question": "Q348. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-349",
    "questionNumber": 349,
    "question": "Q349. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "B": "$\\text{s}^{-1}$",
      "C": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-350",
    "questionNumber": 350,
    "question": "Q350. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$100\\text{ s}$",
      "C": "$200\\text{ s}$",
      "D": "$10\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$100\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET 2018",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2018"
    }
  },
  {
    "id": "ck-mcq-351",
    "questionNumber": 351,
    "question": "Q351. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = 0$",
      "B": "$k = \\infty$",
      "C": "$k = A$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = 0$",
      "$k = \\infty$",
      "$k = A$",
      "$k = A / 300$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-352",
    "questionNumber": 352,
    "question": "Q352. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-353",
    "questionNumber": 353,
    "question": "Q353. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{R}$",
      "B": "$-\\frac{E_a}{2.303 R}$",
      "C": "$\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{R}$",
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-354",
    "questionNumber": 354,
    "question": "Q354. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-355",
    "questionNumber": 355,
    "question": "Q355. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{s}^{-1}$",
      "B": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-356",
    "questionNumber": 356,
    "question": "Q356. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$200\\text{ s}$",
      "C": "$10\\text{ s}$",
      "D": "$100\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$",
      "$100\\text{ s}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-357",
    "questionNumber": 357,
    "question": "Q357. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = A$",
      "B": "$k = 0$",
      "C": "$k = \\infty$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = A$",
      "$k = 0$",
      "$k = \\infty$",
      "$k = A / 300$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-358",
    "questionNumber": 358,
    "question": "Q358. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-359",
    "questionNumber": 359,
    "question": "Q359. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{2.303 R}$",
      "B": "$\\frac{E_a}{R}$",
      "C": "$-\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-360",
    "questionNumber": 360,
    "question": "Q360. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-361",
    "questionNumber": 361,
    "question": "Q361. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "B": "$\\text{s}^{-1}$",
      "C": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-362",
    "questionNumber": 362,
    "question": "Q362. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$100\\text{ s}$",
      "C": "$200\\text{ s}$",
      "D": "$10\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$100\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-363",
    "questionNumber": 363,
    "question": "Q363. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = 0$",
      "B": "$k = \\infty$",
      "C": "$k = A$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = 0$",
      "$k = \\infty$",
      "$k = A$",
      "$k = A / 300$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-364",
    "questionNumber": 364,
    "question": "Q364. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET 2018",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2018"
    }
  },
  {
    "id": "ck-mcq-365",
    "questionNumber": 365,
    "question": "Q365. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{R}$",
      "B": "$-\\frac{E_a}{2.303 R}$",
      "C": "$\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{R}$",
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-366",
    "questionNumber": 366,
    "question": "Q366. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-367",
    "questionNumber": 367,
    "question": "Q367. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{s}^{-1}$",
      "B": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-368",
    "questionNumber": 368,
    "question": "Q368. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$200\\text{ s}$",
      "C": "$10\\text{ s}$",
      "D": "$100\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$",
      "$100\\text{ s}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-369",
    "questionNumber": 369,
    "question": "Q369. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = A$",
      "B": "$k = 0$",
      "C": "$k = \\infty$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = A$",
      "$k = 0$",
      "$k = \\infty$",
      "$k = A / 300$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-370",
    "questionNumber": 370,
    "question": "Q370. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
    "options": {
      "A": "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "B": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "C": "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "D": "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    },
    "optionsList": [
      "$t_{99.9\\%} = 3 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 2 \\cdot t_{1/2}$",
      "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nIntegrated rate law and multi-half-life completion calculations.\n\n2. GIVEN INFORMATION / DATA:\nFirst-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.\n\n3. FORMULA / EQUATION:\n$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).\n\n5. FINAL CONCLUSION:\n$t_{99.9\\%} = 10 \\cdot t_{1/2}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion.",
    "solutionStructured": {
      "concept": "Integrated rate law and multi-half-life completion calculations.",
      "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
      "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
      "stepByStep": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
      "finalAnswer": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
      "whyOtherOptionsWrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-371",
    "questionNumber": 371,
    "question": "Q371. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
    "options": {
      "A": "$-\\frac{E_a}{2.303 R}$",
      "B": "$\\frac{E_a}{R}$",
      "C": "$-\\frac{E_a}{R}$",
      "D": "$-E_a$"
    },
    "optionsList": [
      "$-\\frac{E_a}{2.303 R}$",
      "$\\frac{E_a}{R}$",
      "$-\\frac{E_a}{R}$",
      "$-E_a$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGraphical representation of the Arrhenius equation.\n\n2. GIVEN INFORMATION / DATA:\nArrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.\n\n3. FORMULA / EQUATION:\nComparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).\n\n5. FINAL CONCLUSION:\n$-\\frac{E_a}{R}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy.",
    "solutionStructured": {
      "concept": "Graphical representation of the Arrhenius equation.",
      "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
      "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
      "stepByStep": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
      "finalAnswer": "$-\\frac{E_a}{R}$",
      "whyOtherOptionsWrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-372",
    "questionNumber": 372,
    "question": "Q372. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
    "options": {
      "A": "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "B": "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "C": "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStoichiometric relationship between rates of disappearance of reactants and appearance of products.\n\n2. GIVEN INFORMATION / DATA:\nReaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n\n3. FORMULA / EQUATION:\n$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.\n\n5. FINAL CONCLUSION:\n$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing.",
    "solutionStructured": {
      "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
      "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
      "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
      "stepByStep": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
      "finalAnswer": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
      "whyOtherOptionsWrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-373",
    "questionNumber": 373,
    "question": "Q373. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
    "options": {
      "A": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "B": "$\\text{s}^{-1}$",
      "C": "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "D": "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    },
    "optionsList": [
      "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "$\\text{s}^{-1}$",
      "$\\text{mol L}^{-1}\\text{ s}^{-1}$",
      "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nGeneral formula for units of rate constant as a function of reaction order $n$.\n\n2. GIVEN INFORMATION / DATA:\nSecond order reaction: $\\text{Rate} = k [A]^2$.\n\n3. FORMULA / EQUATION:\n\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.\n\n5. FINAL CONCLUSION:\n$\\text{mol}^{-1}\\text{ L s}^{-1}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order.",
    "solutionStructured": {
      "concept": "General formula for units of rate constant as a function of reaction order $n$.",
      "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
      "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
      "stepByStep": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
      "finalAnswer": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
      "whyOtherOptionsWrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Rate, Order & Molecularity",
    "topicId": "chem-rate-order-molecularity",
    "subtopic": "Differential Rate Laws & Units",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-374",
    "questionNumber": 374,
    "question": "Q374. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
    "options": {
      "A": "$50\\text{ s}$",
      "B": "$100\\text{ s}$",
      "C": "$200\\text{ s}$",
      "D": "$10\\text{ s}$"
    },
    "optionsList": [
      "$50\\text{ s}$",
      "$100\\text{ s}$",
      "$200\\text{ s}$",
      "$10\\text{ s}$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nHalf-life of a first-order chemical reaction.\n\n2. GIVEN INFORMATION / DATA:\nRate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.\n\n3. FORMULA / EQUATION:\n$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.\n\n5. FINAL CONCLUSION:\n$100\\text{ s}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$.",
    "solutionStructured": {
      "concept": "Half-life of a first-order chemical reaction.",
      "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
      "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
      "stepByStep": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
      "finalAnswer": "$100\\text{ s}$",
      "whyOtherOptionsWrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Zero and First Order Reactions",
    "topicId": "chem-zero-first-order",
    "subtopic": "Integrated Rate Equations & Half-Life",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ck-mcq-375",
    "questionNumber": 375,
    "question": "Q375. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
    "options": {
      "A": "$k = 0$",
      "B": "$k = \\infty$",
      "C": "$k = A$",
      "D": "$k = A / 300$"
    },
    "optionsList": [
      "$k = 0$",
      "$k = \\infty$",
      "$k = A$",
      "$k = A / 300$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nArrhenius equation under the limiting condition of zero activation energy.\n\n2. GIVEN INFORMATION / DATA:\nActivation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$k = A e^{-E_a / RT}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.\n\n5. FINAL CONCLUSION:\n$k = A$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator.",
    "solutionStructured": {
      "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
      "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
      "formula": "$k = A e^{-E_a / RT}$",
      "stepByStep": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
      "finalAnswer": "$k = A$",
      "whyOtherOptionsWrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Chemical Kinetics",
    "chapterId": "chemical-kinetics",
    "topic": "Arrhenius Equation & Collision Theory",
    "topicId": "chem-arrhenius-collision-theory",
    "subtopic": "Activation Energy, Catalysis & Collision Frequency",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  }
];
