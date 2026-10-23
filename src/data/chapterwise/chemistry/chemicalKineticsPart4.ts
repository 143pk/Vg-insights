// Part 4: Q376 to Q500 (Hard: 125 MCQs)
// Chapter: Chemical Kinetics (ID: chemical-kinetics) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const CHEMICAL_KINETICS_PART4_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "ck-mcq-376",
    "questionNumber": 376,
    "question": "Q376. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-377",
    "questionNumber": 377,
    "question": "Q377. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-378",
    "questionNumber": 378,
    "question": "Q378. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-379",
    "questionNumber": 379,
    "question": "Q379. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-380",
    "questionNumber": 380,
    "question": "Q380. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-381",
    "questionNumber": 381,
    "question": "Q381. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-382",
    "questionNumber": 382,
    "question": "Q382. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-383",
    "questionNumber": 383,
    "question": "Q383. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-384",
    "questionNumber": 384,
    "question": "Q384. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-385",
    "questionNumber": 385,
    "question": "Q385. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-386",
    "questionNumber": 386,
    "question": "Q386. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-387",
    "questionNumber": 387,
    "question": "Q387. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-388",
    "questionNumber": 388,
    "question": "Q388. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-389",
    "questionNumber": 389,
    "question": "Q389. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-390",
    "questionNumber": 390,
    "question": "Q390. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-391",
    "questionNumber": 391,
    "question": "Q391. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-392",
    "questionNumber": 392,
    "question": "Q392. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-393",
    "questionNumber": 393,
    "question": "Q393. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-394",
    "questionNumber": 394,
    "question": "Q394. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-395",
    "questionNumber": 395,
    "question": "Q395. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-396",
    "questionNumber": 396,
    "question": "Q396. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-397",
    "questionNumber": 397,
    "question": "Q397. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-398",
    "questionNumber": 398,
    "question": "Q398. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-399",
    "questionNumber": 399,
    "question": "Q399. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-400",
    "questionNumber": 400,
    "question": "Q400. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-401",
    "questionNumber": 401,
    "question": "Q401. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-402",
    "questionNumber": 402,
    "question": "Q402. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-403",
    "questionNumber": 403,
    "question": "Q403. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-404",
    "questionNumber": 404,
    "question": "Q404. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-405",
    "questionNumber": 405,
    "question": "Q405. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-406",
    "questionNumber": 406,
    "question": "Q406. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-407",
    "questionNumber": 407,
    "question": "Q407. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-408",
    "questionNumber": 408,
    "question": "Q408. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-409",
    "questionNumber": 409,
    "question": "Q409. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-410",
    "questionNumber": 410,
    "question": "Q410. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-411",
    "questionNumber": 411,
    "question": "Q411. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-412",
    "questionNumber": 412,
    "question": "Q412. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-413",
    "questionNumber": 413,
    "question": "Q413. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-414",
    "questionNumber": 414,
    "question": "Q414. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-415",
    "questionNumber": 415,
    "question": "Q415. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-416",
    "questionNumber": 416,
    "question": "Q416. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-417",
    "questionNumber": 417,
    "question": "Q417. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-418",
    "questionNumber": 418,
    "question": "Q418. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-419",
    "questionNumber": 419,
    "question": "Q419. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-420",
    "questionNumber": 420,
    "question": "Q420. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-421",
    "questionNumber": 421,
    "question": "Q421. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-422",
    "questionNumber": 422,
    "question": "Q422. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-423",
    "questionNumber": 423,
    "question": "Q423. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-424",
    "questionNumber": 424,
    "question": "Q424. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-425",
    "questionNumber": 425,
    "question": "Q425. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-426",
    "questionNumber": 426,
    "question": "Q426. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-427",
    "questionNumber": 427,
    "question": "Q427. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-428",
    "questionNumber": 428,
    "question": "Q428. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-429",
    "questionNumber": 429,
    "question": "Q429. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-430",
    "questionNumber": 430,
    "question": "Q430. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-431",
    "questionNumber": 431,
    "question": "Q431. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-432",
    "questionNumber": 432,
    "question": "Q432. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-433",
    "questionNumber": 433,
    "question": "Q433. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-434",
    "questionNumber": 434,
    "question": "Q434. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-435",
    "questionNumber": 435,
    "question": "Q435. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-436",
    "questionNumber": 436,
    "question": "Q436. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-437",
    "questionNumber": 437,
    "question": "Q437. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-438",
    "questionNumber": 438,
    "question": "Q438. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-439",
    "questionNumber": 439,
    "question": "Q439. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-440",
    "questionNumber": 440,
    "question": "Q440. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-441",
    "questionNumber": 441,
    "question": "Q441. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-442",
    "questionNumber": 442,
    "question": "Q442. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-443",
    "questionNumber": 443,
    "question": "Q443. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-444",
    "questionNumber": 444,
    "question": "Q444. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-445",
    "questionNumber": 445,
    "question": "Q445. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-446",
    "questionNumber": 446,
    "question": "Q446. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-447",
    "questionNumber": 447,
    "question": "Q447. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-448",
    "questionNumber": 448,
    "question": "Q448. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-449",
    "questionNumber": 449,
    "question": "Q449. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-450",
    "questionNumber": 450,
    "question": "Q450. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-451",
    "questionNumber": 451,
    "question": "Q451. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-452",
    "questionNumber": 452,
    "question": "Q452. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-453",
    "questionNumber": 453,
    "question": "Q453. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-454",
    "questionNumber": 454,
    "question": "Q454. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-455",
    "questionNumber": 455,
    "question": "Q455. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-456",
    "questionNumber": 456,
    "question": "Q456. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-457",
    "questionNumber": 457,
    "question": "Q457. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-458",
    "questionNumber": 458,
    "question": "Q458. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-459",
    "questionNumber": 459,
    "question": "Q459. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-460",
    "questionNumber": 460,
    "question": "Q460. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-461",
    "questionNumber": 461,
    "question": "Q461. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-462",
    "questionNumber": 462,
    "question": "Q462. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-463",
    "questionNumber": 463,
    "question": "Q463. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-464",
    "questionNumber": 464,
    "question": "Q464. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-465",
    "questionNumber": 465,
    "question": "Q465. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-466",
    "questionNumber": 466,
    "question": "Q466. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-467",
    "questionNumber": 467,
    "question": "Q467. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-468",
    "questionNumber": 468,
    "question": "Q468. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-469",
    "questionNumber": 469,
    "question": "Q469. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-470",
    "questionNumber": 470,
    "question": "Q470. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-471",
    "questionNumber": 471,
    "question": "Q471. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-472",
    "questionNumber": 472,
    "question": "Q472. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-473",
    "questionNumber": 473,
    "question": "Q473. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-474",
    "questionNumber": 474,
    "question": "Q474. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-475",
    "questionNumber": 475,
    "question": "Q475. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-476",
    "questionNumber": 476,
    "question": "Q476. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-477",
    "questionNumber": 477,
    "question": "Q477. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-478",
    "questionNumber": 478,
    "question": "Q478. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-479",
    "questionNumber": 479,
    "question": "Q479. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-480",
    "questionNumber": 480,
    "question": "Q480. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-481",
    "questionNumber": 481,
    "question": "Q481. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-482",
    "questionNumber": 482,
    "question": "Q482. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-483",
    "questionNumber": 483,
    "question": "Q483. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-484",
    "questionNumber": 484,
    "question": "Q484. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-485",
    "questionNumber": 485,
    "question": "Q485. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-486",
    "questionNumber": 486,
    "question": "Q486. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-487",
    "questionNumber": 487,
    "question": "Q487. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-488",
    "questionNumber": 488,
    "question": "Q488. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-489",
    "questionNumber": 489,
    "question": "Q489. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-490",
    "questionNumber": 490,
    "question": "Q490. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-491",
    "questionNumber": 491,
    "question": "Q491. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-492",
    "questionNumber": 492,
    "question": "Q492. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-493",
    "questionNumber": 493,
    "question": "Q493. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-494",
    "questionNumber": 494,
    "question": "Q494. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-495",
    "questionNumber": 495,
    "question": "Q495. [Advanced NEET Challenge] For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-496",
    "questionNumber": 496,
    "question": "Q496. [Advanced NEET Challenge] In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-497",
    "questionNumber": 497,
    "question": "Q497. [Advanced NEET Challenge] The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-498",
    "questionNumber": 498,
    "question": "Q498. [Advanced NEET Challenge] For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-499",
    "questionNumber": 499,
    "question": "Q499. [Advanced NEET Challenge] The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Hard",
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
    "id": "ck-mcq-500",
    "questionNumber": 500,
    "question": "Q500. [Advanced NEET Challenge] A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Hard",
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
  }
];
