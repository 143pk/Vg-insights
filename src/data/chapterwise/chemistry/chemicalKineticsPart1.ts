// Part 1: Q1 to Q125 (Easy: 125 MCQs)
// Chapter: Chemical Kinetics (ID: chemical-kinetics) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const CHEMICAL_KINETICS_PART1_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "ck-mcq-001",
    "questionNumber": 1,
    "question": "Q1. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-002",
    "questionNumber": 2,
    "question": "Q2. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-003",
    "questionNumber": 3,
    "question": "Q3. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-004",
    "questionNumber": 4,
    "question": "Q4. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-005",
    "questionNumber": 5,
    "question": "Q5. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-006",
    "questionNumber": 6,
    "question": "Q6. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-007",
    "questionNumber": 7,
    "question": "Q7. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-008",
    "questionNumber": 8,
    "question": "Q8. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-009",
    "questionNumber": 9,
    "question": "Q9. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-010",
    "questionNumber": 10,
    "question": "Q10. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-011",
    "questionNumber": 11,
    "question": "Q11. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-012",
    "questionNumber": 12,
    "question": "Q12. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-013",
    "questionNumber": 13,
    "question": "Q13. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-014",
    "questionNumber": 14,
    "question": "Q14. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-015",
    "questionNumber": 15,
    "question": "Q15. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-016",
    "questionNumber": 16,
    "question": "Q16. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-017",
    "questionNumber": 17,
    "question": "Q17. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-018",
    "questionNumber": 18,
    "question": "Q18. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-019",
    "questionNumber": 19,
    "question": "Q19. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-020",
    "questionNumber": 20,
    "question": "Q20. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-021",
    "questionNumber": 21,
    "question": "Q21. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-022",
    "questionNumber": 22,
    "question": "Q22. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-023",
    "questionNumber": 23,
    "question": "Q23. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-024",
    "questionNumber": 24,
    "question": "Q24. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-025",
    "questionNumber": 25,
    "question": "Q25. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-026",
    "questionNumber": 26,
    "question": "Q26. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-027",
    "questionNumber": 27,
    "question": "Q27. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-028",
    "questionNumber": 28,
    "question": "Q28. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-029",
    "questionNumber": 29,
    "question": "Q29. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-030",
    "questionNumber": 30,
    "question": "Q30. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-031",
    "questionNumber": 31,
    "question": "Q31. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-032",
    "questionNumber": 32,
    "question": "Q32. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-033",
    "questionNumber": 33,
    "question": "Q33. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-034",
    "questionNumber": 34,
    "question": "Q34. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-035",
    "questionNumber": 35,
    "question": "Q35. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-036",
    "questionNumber": 36,
    "question": "Q36. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-037",
    "questionNumber": 37,
    "question": "Q37. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-038",
    "questionNumber": 38,
    "question": "Q38. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-039",
    "questionNumber": 39,
    "question": "Q39. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-040",
    "questionNumber": 40,
    "question": "Q40. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-041",
    "questionNumber": 41,
    "question": "Q41. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-042",
    "questionNumber": 42,
    "question": "Q42. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-043",
    "questionNumber": 43,
    "question": "Q43. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-044",
    "questionNumber": 44,
    "question": "Q44. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-045",
    "questionNumber": 45,
    "question": "Q45. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-046",
    "questionNumber": 46,
    "question": "Q46. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-047",
    "questionNumber": 47,
    "question": "Q47. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-048",
    "questionNumber": 48,
    "question": "Q48. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-049",
    "questionNumber": 49,
    "question": "Q49. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-050",
    "questionNumber": 50,
    "question": "Q50. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-051",
    "questionNumber": 51,
    "question": "Q51. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-052",
    "questionNumber": 52,
    "question": "Q52. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-053",
    "questionNumber": 53,
    "question": "Q53. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-054",
    "questionNumber": 54,
    "question": "Q54. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-055",
    "questionNumber": 55,
    "question": "Q55. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-056",
    "questionNumber": 56,
    "question": "Q56. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-057",
    "questionNumber": 57,
    "question": "Q57. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-058",
    "questionNumber": 58,
    "question": "Q58. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-059",
    "questionNumber": 59,
    "question": "Q59. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-060",
    "questionNumber": 60,
    "question": "Q60. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-061",
    "questionNumber": 61,
    "question": "Q61. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-062",
    "questionNumber": 62,
    "question": "Q62. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-063",
    "questionNumber": 63,
    "question": "Q63. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-064",
    "questionNumber": 64,
    "question": "Q64. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-065",
    "questionNumber": 65,
    "question": "Q65. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-066",
    "questionNumber": 66,
    "question": "Q66. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-067",
    "questionNumber": 67,
    "question": "Q67. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-068",
    "questionNumber": 68,
    "question": "Q68. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-069",
    "questionNumber": 69,
    "question": "Q69. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-070",
    "questionNumber": 70,
    "question": "Q70. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-071",
    "questionNumber": 71,
    "question": "Q71. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-072",
    "questionNumber": 72,
    "question": "Q72. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-073",
    "questionNumber": 73,
    "question": "Q73. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-074",
    "questionNumber": 74,
    "question": "Q74. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-075",
    "questionNumber": 75,
    "question": "Q75. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-076",
    "questionNumber": 76,
    "question": "Q76. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-077",
    "questionNumber": 77,
    "question": "Q77. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-078",
    "questionNumber": 78,
    "question": "Q78. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-079",
    "questionNumber": 79,
    "question": "Q79. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-080",
    "questionNumber": 80,
    "question": "Q80. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-081",
    "questionNumber": 81,
    "question": "Q81. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-082",
    "questionNumber": 82,
    "question": "Q82. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-083",
    "questionNumber": 83,
    "question": "Q83. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-084",
    "questionNumber": 84,
    "question": "Q84. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-085",
    "questionNumber": 85,
    "question": "Q85. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-086",
    "questionNumber": 86,
    "question": "Q86. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-087",
    "questionNumber": 87,
    "question": "Q87. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-088",
    "questionNumber": 88,
    "question": "Q88. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-089",
    "questionNumber": 89,
    "question": "Q89. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-090",
    "questionNumber": 90,
    "question": "Q90. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-091",
    "questionNumber": 91,
    "question": "Q91. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-092",
    "questionNumber": 92,
    "question": "Q92. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-093",
    "questionNumber": 93,
    "question": "Q93. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-094",
    "questionNumber": 94,
    "question": "Q94. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-095",
    "questionNumber": 95,
    "question": "Q95. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-096",
    "questionNumber": 96,
    "question": "Q96. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-097",
    "questionNumber": 97,
    "question": "Q97. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-098",
    "questionNumber": 98,
    "question": "Q98. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-099",
    "questionNumber": 99,
    "question": "Q99. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-100",
    "questionNumber": 100,
    "question": "Q100. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-101",
    "questionNumber": 101,
    "question": "Q101. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-102",
    "questionNumber": 102,
    "question": "Q102. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-103",
    "questionNumber": 103,
    "question": "Q103. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-104",
    "questionNumber": 104,
    "question": "Q104. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-105",
    "questionNumber": 105,
    "question": "Q105. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-106",
    "questionNumber": 106,
    "question": "Q106. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-107",
    "questionNumber": 107,
    "question": "Q107. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-108",
    "questionNumber": 108,
    "question": "Q108. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-109",
    "questionNumber": 109,
    "question": "Q109. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-110",
    "questionNumber": 110,
    "question": "Q110. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-111",
    "questionNumber": 111,
    "question": "Q111. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-112",
    "questionNumber": 112,
    "question": "Q112. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-113",
    "questionNumber": 113,
    "question": "Q113. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-114",
    "questionNumber": 114,
    "question": "Q114. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-115",
    "questionNumber": 115,
    "question": "Q115. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-116",
    "questionNumber": 116,
    "question": "Q116. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-117",
    "questionNumber": 117,
    "question": "Q117. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-118",
    "questionNumber": 118,
    "question": "Q118. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-119",
    "questionNumber": 119,
    "question": "Q119. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-120",
    "questionNumber": 120,
    "question": "Q120. For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-121",
    "questionNumber": 121,
    "question": "Q121. The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-122",
    "questionNumber": 122,
    "question": "Q122. A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-123",
    "questionNumber": 123,
    "question": "Q123. For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-124",
    "questionNumber": 124,
    "question": "Q124. In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "difficulty": "Easy",
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
    "id": "ck-mcq-125",
    "questionNumber": 125,
    "question": "Q125. The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "difficulty": "Easy",
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
