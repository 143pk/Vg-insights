// Part 2: Q126 to Q250 (Medium: 125 MCQs)
// Chapter: Chemical Kinetics (ID: chemical-kinetics) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const CHEMICAL_KINETICS_PART2_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "ck-mcq-126",
    "questionNumber": 126,
    "question": "Q126. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-127",
    "questionNumber": 127,
    "question": "Q127. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-128",
    "questionNumber": 128,
    "question": "Q128. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-129",
    "questionNumber": 129,
    "question": "Q129. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-130",
    "questionNumber": 130,
    "question": "Q130. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-131",
    "questionNumber": 131,
    "question": "Q131. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-132",
    "questionNumber": 132,
    "question": "Q132. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-133",
    "questionNumber": 133,
    "question": "Q133. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-134",
    "questionNumber": 134,
    "question": "Q134. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-135",
    "questionNumber": 135,
    "question": "Q135. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-136",
    "questionNumber": 136,
    "question": "Q136. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-137",
    "questionNumber": 137,
    "question": "Q137. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-138",
    "questionNumber": 138,
    "question": "Q138. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-139",
    "questionNumber": 139,
    "question": "Q139. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-140",
    "questionNumber": 140,
    "question": "Q140. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-141",
    "questionNumber": 141,
    "question": "Q141. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-142",
    "questionNumber": 142,
    "question": "Q142. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-143",
    "questionNumber": 143,
    "question": "Q143. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-144",
    "questionNumber": 144,
    "question": "Q144. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-145",
    "questionNumber": 145,
    "question": "Q145. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-146",
    "questionNumber": 146,
    "question": "Q146. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-147",
    "questionNumber": 147,
    "question": "Q147. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-148",
    "questionNumber": 148,
    "question": "Q148. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-149",
    "questionNumber": 149,
    "question": "Q149. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-150",
    "questionNumber": 150,
    "question": "Q150. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-151",
    "questionNumber": 151,
    "question": "Q151. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-152",
    "questionNumber": 152,
    "question": "Q152. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-153",
    "questionNumber": 153,
    "question": "Q153. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-154",
    "questionNumber": 154,
    "question": "Q154. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-155",
    "questionNumber": 155,
    "question": "Q155. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-156",
    "questionNumber": 156,
    "question": "Q156. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-157",
    "questionNumber": 157,
    "question": "Q157. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-158",
    "questionNumber": 158,
    "question": "Q158. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-159",
    "questionNumber": 159,
    "question": "Q159. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-160",
    "questionNumber": 160,
    "question": "Q160. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-161",
    "questionNumber": 161,
    "question": "Q161. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-162",
    "questionNumber": 162,
    "question": "Q162. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-163",
    "questionNumber": 163,
    "question": "Q163. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-164",
    "questionNumber": 164,
    "question": "Q164. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-165",
    "questionNumber": 165,
    "question": "Q165. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-166",
    "questionNumber": 166,
    "question": "Q166. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-167",
    "questionNumber": 167,
    "question": "Q167. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-168",
    "questionNumber": 168,
    "question": "Q168. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-169",
    "questionNumber": 169,
    "question": "Q169. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-170",
    "questionNumber": 170,
    "question": "Q170. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-171",
    "questionNumber": 171,
    "question": "Q171. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-172",
    "questionNumber": 172,
    "question": "Q172. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-173",
    "questionNumber": 173,
    "question": "Q173. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-174",
    "questionNumber": 174,
    "question": "Q174. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-175",
    "questionNumber": 175,
    "question": "Q175. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-176",
    "questionNumber": 176,
    "question": "Q176. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-177",
    "questionNumber": 177,
    "question": "Q177. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-178",
    "questionNumber": 178,
    "question": "Q178. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-179",
    "questionNumber": 179,
    "question": "Q179. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-180",
    "questionNumber": 180,
    "question": "Q180. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-181",
    "questionNumber": 181,
    "question": "Q181. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-182",
    "questionNumber": 182,
    "question": "Q182. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-183",
    "questionNumber": 183,
    "question": "Q183. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-184",
    "questionNumber": 184,
    "question": "Q184. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-185",
    "questionNumber": 185,
    "question": "Q185. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-186",
    "questionNumber": 186,
    "question": "Q186. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-187",
    "questionNumber": 187,
    "question": "Q187. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-188",
    "questionNumber": 188,
    "question": "Q188. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-189",
    "questionNumber": 189,
    "question": "Q189. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-190",
    "questionNumber": 190,
    "question": "Q190. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-191",
    "questionNumber": 191,
    "question": "Q191. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-192",
    "questionNumber": 192,
    "question": "Q192. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-193",
    "questionNumber": 193,
    "question": "Q193. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-194",
    "questionNumber": 194,
    "question": "Q194. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-195",
    "questionNumber": 195,
    "question": "Q195. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-196",
    "questionNumber": 196,
    "question": "Q196. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-197",
    "questionNumber": 197,
    "question": "Q197. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-198",
    "questionNumber": 198,
    "question": "Q198. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-199",
    "questionNumber": 199,
    "question": "Q199. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-200",
    "questionNumber": 200,
    "question": "Q200. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-201",
    "questionNumber": 201,
    "question": "Q201. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-202",
    "questionNumber": 202,
    "question": "Q202. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-203",
    "questionNumber": 203,
    "question": "Q203. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-204",
    "questionNumber": 204,
    "question": "Q204. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-205",
    "questionNumber": 205,
    "question": "Q205. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-206",
    "questionNumber": 206,
    "question": "Q206. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-207",
    "questionNumber": 207,
    "question": "Q207. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-208",
    "questionNumber": 208,
    "question": "Q208. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-209",
    "questionNumber": 209,
    "question": "Q209. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-210",
    "questionNumber": 210,
    "question": "Q210. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-211",
    "questionNumber": 211,
    "question": "Q211. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-212",
    "questionNumber": 212,
    "question": "Q212. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-213",
    "questionNumber": 213,
    "question": "Q213. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-214",
    "questionNumber": 214,
    "question": "Q214. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-215",
    "questionNumber": 215,
    "question": "Q215. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-216",
    "questionNumber": 216,
    "question": "Q216. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-217",
    "questionNumber": 217,
    "question": "Q217. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-218",
    "questionNumber": 218,
    "question": "Q218. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-219",
    "questionNumber": 219,
    "question": "Q219. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-220",
    "questionNumber": 220,
    "question": "Q220. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-221",
    "questionNumber": 221,
    "question": "Q221. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-222",
    "questionNumber": 222,
    "question": "Q222. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-223",
    "questionNumber": 223,
    "question": "Q223. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-224",
    "questionNumber": 224,
    "question": "Q224. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-225",
    "questionNumber": 225,
    "question": "Q225. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-226",
    "questionNumber": 226,
    "question": "Q226. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-227",
    "questionNumber": 227,
    "question": "Q227. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-228",
    "questionNumber": 228,
    "question": "Q228. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-229",
    "questionNumber": 229,
    "question": "Q229. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-230",
    "questionNumber": 230,
    "question": "Q230. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-231",
    "questionNumber": 231,
    "question": "Q231. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-232",
    "questionNumber": 232,
    "question": "Q232. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-233",
    "questionNumber": 233,
    "question": "Q233. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-234",
    "questionNumber": 234,
    "question": "Q234. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-235",
    "questionNumber": 235,
    "question": "Q235. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-236",
    "questionNumber": 236,
    "question": "Q236. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-237",
    "questionNumber": 237,
    "question": "Q237. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-238",
    "questionNumber": 238,
    "question": "Q238. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-239",
    "questionNumber": 239,
    "question": "Q239. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-240",
    "questionNumber": 240,
    "question": "Q240. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-241",
    "questionNumber": 241,
    "question": "Q241. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-242",
    "questionNumber": 242,
    "question": "Q242. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-243",
    "questionNumber": 243,
    "question": "Q243. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-244",
    "questionNumber": 244,
    "question": "Q244. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
    "id": "ck-mcq-245",
    "questionNumber": 245,
    "question": "Q245. (NEET Medium) The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
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
    "id": "ck-mcq-246",
    "questionNumber": 246,
    "question": "Q246. (NEET Medium) For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
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
    "id": "ck-mcq-247",
    "questionNumber": 247,
    "question": "Q247. (NEET Medium) The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
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
    "id": "ck-mcq-248",
    "questionNumber": 248,
    "question": "Q248. (NEET Medium) A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
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
    "id": "ck-mcq-249",
    "questionNumber": 249,
    "question": "Q249. (NEET Medium) For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
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
    "id": "ck-mcq-250",
    "questionNumber": 250,
    "question": "Q250. (NEET Medium) In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
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
  }
];
